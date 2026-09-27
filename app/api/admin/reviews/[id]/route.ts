import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, verifySessionCookieValue } from "@/lib/adminAuth";
import { databaseConfigured } from "@/lib/db";
import { setReviewStatus } from "@/lib/reviews";

export const runtime = "nodejs";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const jar = await cookies();
  if (!verifySessionCookieValue(jar.get(ADMIN_COOKIE_NAME)?.value)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { id: idParam } = await params;
  const id = Number(idParam);
  if (!Number.isInteger(id)) {
    return NextResponse.json({ error: "bad_id" }, { status: 400 });
  }

  const body = await req.json().catch(() => ({}));
  if (body?.status !== "approved" && body?.status !== "rejected") {
    return NextResponse.json({ error: "bad_status" }, { status: 400 });
  }

  if (!databaseConfigured()) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  await setReviewStatus(id, body.status);
  return NextResponse.json({ ok: true });
}
