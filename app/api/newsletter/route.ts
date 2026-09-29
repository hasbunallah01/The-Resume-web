import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (v: FormDataEntryValue | null, max = 200) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

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

  const adminText =
    `New Veylora Newsletter Subscriber\n\n` +
    `Email: ${email}\n` +
    `Date: ${when}\n\n` +
    `They've been added to the Resend Audience \"General\".\n\n` +
    `— Veylora\nveylora.haybee.xyz · contact@veylora.haybee.xyz`;

  const adminHtml =
    `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.65;color:#0b2a46;max-width:560px">` +
      `<p><strong>New Veylora Newsletter Subscriber</strong></p>` +
      `<table style="font-size:14px;color:#0b2a46;margin:8px 0 16px"><tr><td style="padding:2px 12px 2px 0;color:#667482">Email</td><td><a href="mailto:${esc(email)}" style="color:#0b3d72">${esc(email)}</a></td></tr>` +
      `<tr><td style="padding:2px 12px 2px 0;color:#667482">Date</td><td>${esc(when)}</td></tr>` +
      `<tr><td style="padding:2px 12px 2px 0;color:#667482">Audience</td><td>General (Resend)</td></tr></table>` +
      `<p style="color:#667482;font-size:13px">Reply to this email to reach the subscriber directly.</p>` +
      `<p style="margin-top:24px;color:#667482;font-size:13px">— Veylora<br>` +
      `<a href="https://veylora.haybee.xyz" style="color:#0b3d72;text-decoration:none">veylora.haybee.xyz</a> · ` +
      `<a href="mailto:contact@veylora.haybee.xyz" style="color:#0b3d72;text-decoration:none">contact@veylora.haybee.xyz</a></p>` +
    `</div>`;

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
      subject: "New Veylora Newsletter Subscriber",
      text: adminText,
      html: adminHtml,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  // Best-effort subscriber confirmation. We never fail the subscription
  // because the confirmation email bounced — they're already on the list.
  // List-Unsubscribe headers help Gmail classify this as legitimate bulk mail
  // rather than spam, especially for new senders with low reputation.
  const unsubMailto = "mailto:contact@veylora.haybee.xyz?subject=unsubscribe";
  const subText =
    `Thanks for subscribing to Veylora.\n\n` +
    `We'll keep you posted with updates from our team.\n\n` +
    `You can unsubscribe anytime by replying to this email or sending a note to contact@veylora.haybee.xyz.\n\n` +
    `— The Veylora team\n` +
    `veylora.haybee.xyz · contact@veylora.haybee.xyz`;

  const subHtml =
    `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.65;color:#0b2a46;max-width:560px">` +
      `<p>Thanks for subscribing to <strong>Veylora</strong>.</p>` +
      `<p>We'll keep you posted with updates from our team.</p>` +
      `<p>You can unsubscribe anytime by replying to this email, or ` +
      `<a href="${unsubMailto}" style="color:#0b3d72;text-decoration:underline">click here to unsubscribe</a>.</p>` +
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
      subject: "You're subscribed — Veylora",
      text: subText,
      html: subHtml,
      headers: {
        "List-Unsubscribe": `<${unsubMailto}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    }),
  });

  if (!confirm.ok) {
    console.error(
      "Subscriber confirmation email failed",
      confirm.status,
      await confirm.text().catch(() => ""),
    );
  }

  return NextResponse.json({ ok: true });
}
