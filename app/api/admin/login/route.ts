import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, adminAuthConfigured, checkAdminPassword, createSessionCookieValue } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!adminAuthConfigured()) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const body = await req.json().catch(() => ({}));
  if (!checkAdminPassword(body?.password)) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, createSessionCookieValue(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 12,
    path: "/",
  });
  return res;
}
