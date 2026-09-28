import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const keys = Object.keys(process.env).filter((k) =>
    /BLOB|OIDC|VERCEL/i.test(k),
  ).sort();
  const env: Record<string, string | null> = {};
  for (const k of keys) {
    const v = process.env[k] ?? null;
    // Redact secrets but show length and prefix so we can verify presence + format
    if (v) {
      env[k] = v.length > 12 ? `${v.slice(0, 6)}…(${v.length})` : `(set, ${v.length}b)`;
    } else {
      env[k] = null;
    }
  }
  return NextResponse.json({ env, keys });
}
