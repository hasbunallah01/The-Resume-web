/**
 * ONE-OFF: randomize the created_at of every existing review to a date
 * between 2026-01-01 and 2026-10-01 (inclusive). Delete the file once
 * it's run.
 */
import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const START = new Date("2026-01-01T00:00:00Z").getTime();
const END = new Date("2026-10-01T23:59:59Z").getTime();

function randomTimestamp(): Date {
  const ts = START + Math.random() * (END - START);
  return new Date(ts);
}

export async function GET() {
  const db = sql();
  const before = (await db`
    SELECT id, name, created_at FROM reviews ORDER BY created_at ASC
  `) as { id: number; name: string; created_at: string }[];

  return NextResponse.json({
    note: "ONE-OFF route. POST to randomize created_at. Delete the file after.",
    count: before.length,
    before,
  });
}

export async function POST() {
  const db = sql();
  const before = (await db`
    SELECT id, name, created_at FROM reviews ORDER BY created_at ASC
  `) as { id: number; name: string; created_at: string }[];

  const updates: { id: number; name: string; from: string; to: string }[] = [];
  for (const r of before) {
    const next = randomTimestamp();
    await db`UPDATE reviews SET created_at = ${next.toISOString()} WHERE id = ${r.id}`;
    updates.push({
      id: r.id,
      name: r.name,
      from: r.created_at,
      to: next.toISOString(),
    });
  }

  const after = (await db`
    SELECT id, name, created_at FROM reviews ORDER BY created_at ASC
  `) as { id: number; name: string; created_at: string }[];

  return NextResponse.json({
    note: "Randomization complete. Delete this route file now.",
    count: updates.length,
    updates,
    after,
  });
}