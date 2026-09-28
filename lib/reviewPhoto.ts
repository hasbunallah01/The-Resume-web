import { randomUUID } from "crypto";

export class PhotoValidationError extends Error {}

const ALLOWED_TYPES = new Set(["image/jpeg", "image/jpg", "image/png", "image/webp"]);
// Stay under Vercel's 4.5 MB serverless function request-body limit
// (multipart overhead included). Anything larger is rejected at the edge
// with a 413 FUNCTION_PAYLOAD_TOO_LARGE that the browser cannot parse as JSON.
const MAX_INPUT_BYTES = 4 * 1024 * 1024;
const OUTPUT_SIZE = 400; // square avatar, matches review card avatar size

export function photoConfigured() {
  // The @vercel/blob SDK v2.8+ authenticates via either:
  //   1. BLOB_READ_WRITE_TOKEN  — long-lived static token
  //   2. BLOB_STORE_ID + VERCEL_OIDC_TOKEN — short-lived OIDC token,
  //      auto-injected by Vercel at function runtime
  // When the Blob store is "connected" to the project (the recommended path),
  // Vercel injects BLOB_STORE_ID and the OIDC token but NOT necessarily
  // BLOB_READ_WRITE_TOKEN. Either path is sufficient.
  return Boolean(
    process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID,
  );
}

/** Validates, resizes/compresses to a small square WebP, and uploads to Vercel Blob. */
export async function processAndUploadPhoto(file: File): Promise<string> {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new PhotoValidationError("Please upload a JPG, PNG or WebP image.");
  }
  if (file.size > MAX_INPUT_BYTES) {
    throw new PhotoValidationError("That image is larger than 4 MB.");
  }

  const inputBuffer = Buffer.from(await file.arrayBuffer());

  let outputBuffer: Buffer;
  try {
    // Loaded lazily: sharp ships native, platform-specific binaries, so a
    // failure here should only affect submissions that include a photo,
    // never the rest of the review form.
    const sharp = (await import("sharp")).default;
    outputBuffer = await sharp(inputBuffer)
      .rotate() // respect EXIF orientation
      .resize(OUTPUT_SIZE, OUTPUT_SIZE, { fit: "cover" })
      .webp({ quality: 82 })
      .toBuffer();
  } catch (err) {
    console.error("Photo processing failed", err);
    throw new PhotoValidationError(
      "That image couldn't be processed. Please try a different file, or submit without a photo.",
    );
  }

  const { put } = await import("@vercel/blob");
  const blob = await put(`review-photos/${randomUUID()}.webp`, outputBuffer, {
    access: "private",
    contentType: "image/webp",
  });
  return blob.url;
}
