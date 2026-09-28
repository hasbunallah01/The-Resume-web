import { NextResponse, type NextRequest } from "next/server";
import { get } from "@vercel/blob";
import { getReviewPhotoUrl } from "@/lib/reviews";

export const runtime = "nodejs";

/**
 * Streams a review's uploaded photo. The underlying Vercel Blob store is
 * private, so we fetch it server-side via the SDK (which uses OIDC auth
 * automatically on Vercel) and pipe the bytes back to the browser.
 *
 * Cached at the edge for 1 year — review photos are immutable once submitted.
 */
export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const numericId = Number(id);
  if (!Number.isInteger(numericId) || numericId <= 0) {
    return new NextResponse("Not found", { status: 404 });
  }

  let photoUrl: string | null;
  try {
    photoUrl = await getReviewPhotoUrl(numericId);
  } catch (err) {
    console.error("review-photo: db lookup failed", err);
    return new NextResponse("Not found", { status: 404 });
  }
  if (!photoUrl) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const result = await get(photoUrl, { access: "private" });
    if (!result || result.statusCode !== 200 || !result.stream) {
      return new NextResponse("Not found", { status: 404 });
    }
    const headers = new Headers();
    headers.set(
      "Content-Type",
      result.blob.contentType || "image/webp",
    );
    if (result.blob.size) headers.set("Content-Length", String(result.blob.size));
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
    return new NextResponse(result.stream as ReadableStream, { status: 200, headers });
  } catch (err) {
    console.error("review-photo: blob fetch failed", err);
    return new NextResponse("Not found", { status: 404 });
  }
}
