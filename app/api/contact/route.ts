import { NextResponse } from "next/server";
import { writers } from "../../../data/writers";

export const runtime = "nodejs";

const WRITER_EMAILS: Record<string, string> = {
  "daramola-qudus-abolaji": "abdulqudus@veylora.haybee.xyz",
  "abdul-kareem-ismail": "ismail@veylora.haybee.xyz",
};

const DEFAULT_WRITER_EMAIL = "team@veylora.haybee.xyz";

const WRITER_LABELS: Record<string, string> = {
  "daramola-qudus-abolaji": "Qudus",
  "abdul-kareem-ismail": "Ismail",
};

function writerRecipient(writer: string) {
  const to = Object.hasOwn(WRITER_EMAILS, writer)
    ? WRITER_EMAILS[writer]
    : DEFAULT_WRITER_EMAIL;
  const name =
    (Object.hasOwn(WRITER_LABELS, writer) ? WRITER_LABELS[writer] : undefined) ??
    writers.find((w) => w.slug === writer)?.name;
  return { to, name };
}

const MAX_FILE_BYTES = 4 * 1024 * 1024; // stays under Vercel's 4.5 MB request limit
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];

const LEVELS = [
  "Student / Recent Graduate",
  "Professional",
  "Manager",
  "Senior Professional",
  "Executive / C-Suite",
];
const SERVICES = [
  "Professional Resume",
  "Executive Resume",
  "Executive / C-Suite Package",
  "LinkedIn Profile",
  "Cover Letter",
  "Career Branding",
  "Not sure yet",
];
const SOURCES = [
  "Search engine",
  "LinkedIn",
  "Social media",
  "Referral from a friend or colleague",
  "Other",
];

const clean = (v: FormDataEntryValue | null, max = 200) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in. Pretend success for bots.
  if (clean(form.get("website"))) {
    return NextResponse.json({ ok: true });
  }

  const firstName = clean(form.get("firstName"), 80);
  const lastName = clean(form.get("lastName"), 80);
  const email = clean(form.get("email"), 160);
  const phone = clean(form.get("phone"), 40);
  const level = clean(form.get("level"));
  const service = clean(form.get("service"));
  const source = clean(form.get("source"));
  const goalsRaw = form.get("goals");
  const goals = typeof goalsRaw === "string" ? goalsRaw.trim().slice(0, 4000) : "";

  const errors: Record<string, string> = {};
  if (!firstName) errors.firstName = "Please enter your first name.";
  if (!lastName) errors.lastName = "Please enter your last name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Please enter a valid email address.";
  if (!LEVELS.includes(level)) errors.level = "Please choose your career level.";
  if (!SERVICES.includes(service)) errors.service = "Please choose a service.";
  if (goals.length < 10) errors.goals = "Please tell us a little about your goals.";
  if (!SOURCES.includes(source)) errors.source = "Please choose an option.";

  const file = form.get("resume");
  let attachment: { filename: string; content: string } | null = null;
  if (file instanceof File && file.size > 0) {
    const name = file.name.replace(/[^\w.\- ()]/g, "_").slice(0, 120);
    const ext = name.slice(name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) {
      errors.resume = "Please upload a PDF, DOC or DOCX file.";
    } else if (file.size > MAX_FILE_BYTES) {
      errors.resume = "That file is larger than 4 MB.";
    } else {
      const buf = Buffer.from(await file.arrayBuffer());
      attachment = { filename: name, content: buf.toString("base64") };
    }
  }

  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "validation", errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const writer = clean(form.get("writer"), 100);
  const { to, name: writerName } = writerRecipient(writer);
  const from = process.env.CONTACT_FROM_EMAIL || "Veylora <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const fullName = `${firstName} ${lastName}`;
  const lines: [string, string][] = [
    ["Name", fullName],
    ["Email", email],
    ...(writerName ? [["Writer", writerName] as [string, string]] : []),
    ["Phone", phone || "Not provided"],
    ["Career level", level],
    ["Service", service],
    ["Heard about Veylora via", source],
  ];

  const text =
    lines.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nCareer goals:\n${goals}\n` +
    (attachment ? `\nResume attached: ${attachment.filename}\n` : "");

  const html =
    `<table style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#0b2a46">` +
    lines
      .map(
        ([k, v]) =>
          `<tr><td style="padding:2px 16px 2px 0;color:#667482">${esc(k)}</td><td>${esc(v)}</td></tr>`,
      )
      .join("") +
    `</table><p style="font-family:Arial,sans-serif;font-size:14px;color:#0b2a46"><strong>Career goals</strong><br>${esc(goals).replace(/\n/g, "<br>")}</p>` +
    (attachment
      ? `<p style="font-family:Arial,sans-serif;font-size:13px;color:#667482">Resume attached: ${esc(attachment.filename)}</p>`
      : "");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: writerName
        ? `New inquiry for ${writerName} from ${fullName} (${service})`
        : `New inquiry from ${fullName} (${service})`,
      text,
      html,
      ...(attachment ? { attachments: [attachment] } : {}),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
