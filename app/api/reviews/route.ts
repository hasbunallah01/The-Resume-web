import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { databaseConfigured } from "@/lib/db";
import { hasRecentSubmission, insertReview, listApprovedReviews } from "@/lib/reviews";
import { PhotoValidationError, photoConfigured, processAndUploadPhoto } from "@/lib/reviewPhoto";

export const runtime = "nodejs";

const NAME_MAX = 80;
const COMMENT_MIN = 10;
const COMMENT_MAX = 600;

const clean = (v: FormDataEntryValue | null, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

function ipHashFrom(req: Request): string | null {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || req.headers.get("x-real-ip");
  if (!ip) return null;
  const salt = process.env.ADMIN_SESSION_SECRET || "veylora-reviews";
  return createHash("sha256").update(`${ip}:${salt}`).digest("hex");
}

/** Public: list approved reviews for display on the site. */
export async function GET() {
  if (!databaseConfigured()) {
    return NextResponse.json({ reviews: [] });
  }
  try {
    const reviews = await listApprovedReviews();
    return NextResponse.json({ reviews });
  } catch (err) {
    console.error("Failed to list reviews", err);
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }
}

/** Public: submit a new review (defaults to "pending", not shown until approved). */
export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in. Pretend success for bots.
  if (clean(form.get("website"), 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(form.get("name"), NAME_MAX);
  const comment = clean(form.get("comment"), COMMENT_MAX);
  const ratingRaw = form.get("rating");
  const rating = typeof ratingRaw === "string" ? Number(ratingRaw) : NaN;

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    errors.rating = "Please choose a rating from 1 to 5 stars.";
  }
  if (comment.length < COMMENT_MIN) {
    errors.comment = `Please share a few more words about your experience (at least ${COMMENT_MIN} characters).`;
  } else if (comment.length > COMMENT_MAX) {
    errors.comment = `Please keep your review under ${COMMENT_MAX} characters.`;
  }

  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "validation", errors }, { status: 422 });
  }

  if (!databaseConfigured()) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const ipHash = ipHashFrom(req);
  try {
    if (ipHash && (await hasRecentSubmission(ipHash))) {
      return NextResponse.json(
        {
          error: "rate_limited",
          message: "You've already submitted a review recently. Thank you, we've got it.",
        },
        { status: 429 },
      );
    }
  } catch (err) {
    console.error("Rate-limit check failed", err);
  }

  let photoUrl: string | null = null;
  const photo = form.get("photo");
  if (photo instanceof File && photo.size > 0) {
    if (!photoConfigured()) {
      return NextResponse.json(
        { error: "validation", errors: { photo: "Photo uploads aren't available right now. Please submit without a photo." } },
        { status: 422 },
      );
    }
    try {
      photoUrl = await processAndUploadPhoto(photo);
    } catch (err) {
      if (err instanceof PhotoValidationError) {
        return NextResponse.json({ error: "validation", errors: { photo: err.message } }, { status: 422 });
      }
      console.error("Photo upload failed", err);
      return NextResponse.json({ error: "upload_failed" }, { status: 502 });
    }
  }

  let saved: { id: number; created_at: string };
  try {
    saved = await insertReview({ name, rating, comment, photoUrl, ipHash });
  } catch (err) {
    console.error("Failed to save review", err);
    return NextResponse.json({ error: "db_failed" }, { status: 500 });
  }

  // Best-effort admin notification email — never fails the submission.
  notifyAdmin({ name, rating, comment, hasPhoto: Boolean(photoUrl), createdAt: saved.created_at }).catch(
    (err) => console.error("Review notification email failed", err),
  );

  return NextResponse.json({ ok: true });
}

async function notifyAdmin(input: {
  name: string;
  rating: number;
  comment: string;
  hasPhoto: boolean;
  createdAt: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return;
  const from = process.env.CONTACT_FROM_EMAIL || "Veylora <onboarding@resend.dev>";

  const when = new Date(input.createdAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const text = `New Veylora Review Submitted\n\nName: ${input.name}\nRating: ${input.rating}/5\nPhoto uploaded: ${
    input.hasPhoto ? "Yes" : "No"
  }\nDate: ${when}\n\nReview:\n${input.comment}\n\nApprove or reject at /admin/reviews`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "New Veylora Review Submitted",
      text,
    }),
  });
  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
  }
}
