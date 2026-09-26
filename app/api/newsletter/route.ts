import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (v: FormDataEntryValue | null, max = 200) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

/**
 * Adds the email to a Resend Audience, if RESEND_AUDIENCE_ID is configured.
 * This is how subscribers are persisted, reusing the Resend account already
 * set up for the contact form instead of adding a new database dependency.
 * Returns "added" | "duplicate" | "skipped" (no audience configured).
 */
async function addToAudience(apiKey: string, email: string) {
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) return "skipped" as const;

  const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (res.ok) return "added" as const;

  // Resend returns 409 (or a validation error mentioning "already exists")
  // when the contact is already subscribed. Treat that as a graceful no-op.
  if (res.status === 409) return "duplicate" as const;
  const body = await res.text().catch(() => "");
  if (res.status === 422 && /already exists/i.test(body)) return "duplicate" as const;

  console.error("Resend audience error", res.status, body);
  throw new Error("audience_failed");
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in. Pretend success for bots.
  if (clean(form.get("company"))) {
    return NextResponse.json({ ok: true });
  }

  const email = clean(form.get("email"), 160);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: "validation", errors: { email: "Please enter a valid email address." } },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Veylora <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Newsletter: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let audienceResult: "added" | "duplicate" | "skipped";
  try {
    audienceResult = await addToAudience(apiKey, email);
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  if (audienceResult === "duplicate") {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  const when = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "New Veylora Newsletter Subscriber",
      text: `New Veylora Newsletter Subscriber\n\nEmail: ${email}\nDate: ${when}`,
      html: `<p style="font-family:Arial,sans-serif;font-size:14px;color:#0b2a46"><strong>New Veylora Newsletter Subscriber</strong></p><p style="font-family:Arial,sans-serif;font-size:14px;color:#0b2a46">Email: ${email}<br>Date: ${when}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
