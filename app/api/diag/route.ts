import { NextResponse } from "next/server";
import { headers } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const envKeys = Object.keys(process.env).filter((k) =>
    /BLOB|OIDC|VERCEL/i.test(k),
  ).sort();
  const env: Record<string, string | null> = {};
  for (const k of envKeys) {
    const v = process.env[k] ?? null;
    if (v) {
      env[k] = v.length > 12 ? `${v.slice(0, 6)}…(${v.length})` : `(set, ${v.length}b)`;
    } else {
      env[k] = null;
    }
  }
  const h = headers();
  const oidcHeader = h.get("x-vercel-oidc-token");
  const headerOidc = oidcHeader
    ? { present: true, length: oidcHeader.length, prefix: oidcHeader.slice(0, 20) }
    : { present: false };

  // Try a real blob.put with whatever credentials are present
  let blobTest: Record<string, unknown> = {};
  try {
    const { put } = await import("@vercel/blob");
    const blob = await put("review-photos/diag-test.webp", Buffer.from("hello"), {
      access: "public",
      contentType: "image/webp",
    });
    blobTest = { ok: true, url: blob.url };
  } catch (err) {
    blobTest = {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
      name: err instanceof Error ? err.name : typeof err,
    };
  }

  return NextResponse.json({
    env,
    headerOidc,
    blobTest,
  });
}
