import { randomUUID } from "crypto";
import sharp from "sharp";

export class PhotoValidationError extends Error {}

const ALLOWED_TYPES = new Set(["image/jpeg", "image/jpg", "image/png", "image/webp"]);
const MAX_INPUT_BYTES = 6 * 1024 * 1024; // before resize/compression
const OUTPUT_SIZE = 400; // square avatar, matches review card avatar size

export function photoConfigured() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

/** Validates, resizes/compresses to a small square WebP, and uploads to Vercel Blob. */
export async function processAndUploadPhoto(file: File): Promise<string> {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new PhotoValidationError("Please upload a JPG, PNG or WebP image.");
  }
  if (file.size > MAX_INPUT_BYTES) {
    throw new PhotoValidationError("That image is larger than 6 MB.");
  }

  const inputBuffer = Buffer.from(await file.arrayBuffer());

  let outputBuffer: Buffer;
  try {
    outputBuffer = await sharp(inputBuffer)
      .rotate() // respect EXIF orientation
      .resize(OUTPUT_SIZE, OUTPUT_SIZE, { fit: "cover" })
      .webp({ quality: 82 })
      .toBuffer();
  } catch {
    throw new PhotoValidationError("That image couldn't be processed. Please try a different file.");
  }

  const { put } = await import("@vercel/blob");
  const blob = await put(`review-photos/${randomUUID()}.webp`, outputBuffer, {
    access: "public",
    contentType: "image/webp",
  });
  return blob.url;
}
