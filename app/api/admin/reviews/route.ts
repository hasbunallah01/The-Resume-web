import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, verifySessionCookieValue } from "@/lib/adminAuth";
import { databaseConfigured } from "@/lib/db";
import { listAllReviews } from "@/lib/reviews";

export const runtime = "nodejs";

export async function GET() {
  const jar = await cookies();
  if (!verifySessionCookieValue(jar.get(ADMIN_COOKIE_NAME)?.value)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!databaseConfigured()) {
    return NextResponse.json({ reviews: [] });
  }
  const reviews = await listAllReviews();
  return NextResponse.json({ reviews });
}
