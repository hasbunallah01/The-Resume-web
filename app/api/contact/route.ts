import { NextResponse } from "next/server";
import { writers } from "../../../data/writers";

export const runtime = "nodejs";

const WRITER_EMAILS: Record<string, string> = {
  "daramola-qudus-abolaji": "contact@veylora.haybee.xyz",
  "abdul-kareem-ismail": "contact@veylora.haybee.xyz",
};

const DEFAULT_WRITER_EMAIL = "contact@veylora.haybee.xyz";

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

  const adminRecipients = [to];
  const qudusEmail = process.env.QUDUS_EMAIL;
  if (qudusEmail && qudusEmail !== to) adminRecipients.push(qudusEmail);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: adminRecipients,
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

  // Best-effort visitor confirmation. We never fail the submission because
  // the visitor confirmation bounced — the inquiry is already delivered.
  // No employment / turnaround / interview promises, per Veylora's policy.
  // Headers (Reply-To, List-Unsubscribe) are included to improve Gmail
  // deliverability — Gmail heavily weighs these trust signals for new senders.
  const confirmText =
    `Hi ${firstName},\n\n` +
    `Thank you for reaching out to Veylora.\n\n` +
    `We've received your request and the information you provided. Our team will review it and get back to you.\n\n` +
    `If you have any follow-up questions, just reply to this email.\n\n` +
    `— The Veylora team\n` +
    `veylora.haybee.xyz · contact@veylora.haybee.xyz`;

  const confirmHtml =
    `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.65;color:#0b2a46;max-width:560px">` +
      `<p>Hi ${esc(firstName)},</p>` +
      `<p>Thank you for reaching out to <strong>Veylora</strong>.</p>` +
      `<p>We've received your request and the information you provided. Our team will review it and get back to you.</p>` +
      `<p>If you have any follow-up questions, just reply to this email.</p>` +
      `<p style="margin-top:28px;color:#667482;font-size:13px">— The Veylora team<br>` +
      `<a href="https://veylora.haybee.xyz" style="color:#0b3d72;text-decoration:none">veylora.haybee.xyz</a> · ` +
      `<a href="mailto:contact@veylora.haybee.xyz" style="color:#0b3d72;text-decoration:none">contact@veylora.haybee.xyz</a></p>` +
    `</div>`;

  const confirm = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      reply_to: "contact@veylora.haybee.xyz",
      subject: "We've received your request — Veylora",
      text: confirmText,
      html: confirmHtml,
      headers: {
        "List-Unsubscribe": "<mailto:contact@veylora.haybee.xyz?subject=unsubscribe>",
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    }),
  });

  if (!confirm.ok) {
    console.error(
      "Visitor confirmation email failed",
      confirm.status,
      await confirm.text().catch(() => ""),
    );
  }

  return NextResponse.json({ ok: true });
}
