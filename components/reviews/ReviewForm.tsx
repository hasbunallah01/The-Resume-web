"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { contactEmail } from "@/data/site";
import { UploadIcon } from "../resumes/ResumeIcons";
import StarPicker from "./StarPicker";

const COMMENT_MAX = 600;
// Resize to this max dimension before upload. A 2000px photo is plenty for a
// 400px avatar and keeps the body well under Vercel's 4.5 MB limit even
// with multipart overhead.
const PHOTO_MAX_DIMENSION = 2000;
const PHOTO_JPEG_QUALITY = 0.85;
// Hard cap on the resized file (per file, not body). 1.5 MB leaves plenty
// of headroom for multipart + other form fields.
const PHOTO_MAX_BYTES = 1_500_000;
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

type Errors = Partial<Record<"name" | "rating" | "comment" | "photo", string>>;
type Status = "idle" | "sending" | "success" | "error";

/** Loads a File into an HTMLImageElement. */
function fileToImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(e);
    };
    img.src = url;
  });
}

/** Resizes an image to fit within maxDim on the longer side, encodes as JPEG. */
async function downscalePhoto(file: File, maxDim: number, quality: number): Promise<File> {
  const img = await fileToImage(file);
  const { width, height } = img;
  const scale = Math.min(1, maxDim / Math.max(width, height));
  const targetW = Math.round(width * scale);
  const targetH = Math.round(height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D context unavailable");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, targetW, targetH);

  const blob: Blob = await new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("Canvas toBlob returned null"))),
      "image/jpeg",
      quality,
    );
  });

  // Keep the original filename but with .jpg so the server validator works.
  const baseName = file.name.replace(/\.[^.]+$/, "") || "photo";
  return new File([blob], `${baseName}.jpg`, { type: "image/jpeg", lastModified: Date.now() });
}

export default function ReviewForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const pickPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrors((er) => ({ ...er, photo: "Please upload a JPG, PNG or WebP image." }));
      return;
    }
    setProcessing(true);
    setErrors((er) => ({ ...er, photo: undefined }));
    try {
      // Resize + compress in the browser BEFORE storing. Sharp on the server
      // also resizes, but doing it client-side means the upload itself is
      // tiny and we never get close to Vercel's 4.5 MB request-body limit.
      const resized = await downscalePhoto(file, PHOTO_MAX_DIMENSION, PHOTO_JPEG_QUALITY);
      if (resized.size > PHOTO_MAX_BYTES) {
        // Resize at lower quality and try once more.
        const smaller = await downscalePhoto(file, Math.round(PHOTO_MAX_DIMENSION * 0.7), 0.7);
        if (smaller.size > PHOTO_MAX_BYTES) {
          setErrors((er) => ({
            ...er,
            photo: "That image is still too large after compression — please pick a smaller photo.",
          }));
          return;
        }
        setPhoto(smaller);
        setPhotoPreview(URL.createObjectURL(smaller));
      } else {
        setPhoto(resized);
        setPhotoPreview(URL.createObjectURL(resized));
      }
    } catch {
      // If the browser can't decode it (e.g. HEIC, corrupted), fall back to
      // the original file — server validation will surface a clearer error.
      if (file.size > PHOTO_MAX_BYTES) {
        setErrors((er) => ({
          ...er,
          photo: "That image is too large and the browser couldn't compress it. Try a smaller one.",
        }));
        return;
      }
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    } finally {
      setProcessing(false);
    }
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your name.";
    if (rating < 1 || rating > 5) e.rating = "Please choose a rating from 1 to 5 stars.";
    if (comment.trim().length < 10) {
      e.comment = "Please share a few more words about your experience (at least 10 characters).";
    } else if (comment.length > COMMENT_MAX) {
      e.comment = `Please keep your review under ${COMMENT_MAX} characters.`;
    }
    return e;
  };

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (status === "sending") return;
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    setMessage("");
    try {
      const body = new FormData();
      body.append("name", name.trim());
      body.append("rating", String(rating));
      body.append("comment", comment.trim());
      body.append("website", website);
      if (photo) body.append("photo", photo);

      const res = await fetch("/api/reviews", { method: "POST", body });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        onSubmitted?.();
        return;
      }
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }
      if (res.status === 429) {
        setStatus("error");
        setMessage(data.message || "You've already submitted a review recently.");
        return;
      }
      if (res.status === 413) {
        setStatus("error");
        setMessage(
          "That submission was too large to send. Please try removing the photo or using a much smaller one.",
        );
        return;
      }
      setStatus("error");
      setMessage(
        data.error === "not_configured"
          ? `Review submissions aren't connected yet. Please email us at ${contactEmail}.`
          : `Something went wrong while sending your review. Please try again, or email us at ${contactEmail}.`,
      );
    } catch {
      setStatus("error");
      setMessage(
        "We couldn't reach the server. Please try again — your review wasn't sent, you can also email us at " +
          contactEmail +
          ".",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-[4px] border border-[#d8c8a0] bg-[#faf7ef] px-6 py-7 text-center"
      >
        <p className="font-serif text-[20px] font-[520] text-navy">Thank you for sharing your experience.</p>
        <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-muted">
          Your review has been submitted and will appear after approval.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-[6px] border border-[#e4dfd0] bg-white p-6 shadow-[0_4px_24px_rgba(11,42,70,0.06)] sm:p-8"
    >
      <h3 className="font-serif text-[24px] font-[520] text-navy">Share Your Experience</h3>

      <div className="mt-6">
        <StarPicker value={rating} onChange={setRating} error={errors.rating} />
      </div>

      <div className="mt-5">
        <label htmlFor="review-name" className="mb-2 block text-[13.5px] font-medium text-navy">
          Name<span className="ml-0.5 text-[#b4442f]">*</span>
        </label>
        <input
          id="review-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((er) => ({ ...er, name: undefined }));
          }}
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "review-name-error" : undefined}
          className="h-[46px] w-full rounded-[3px] border border-[#d6d0be] bg-white px-4 text-[15px] text-navy placeholder:text-[#9aa5af] focus:border-navy-dark focus:outline-none focus:ring-2 focus:ring-navy-dark/15"
        />
        {errors.name && (
          <p id="review-name-error" role="alert" className="mt-1.5 text-[12.5px] text-[#b4442f]">
            {errors.name}
          </p>
        )}
      </div>

      <div className="mt-5">
        <span className="mb-2 block text-[13.5px] font-medium text-navy">
          Photo <span className="font-normal text-ink-muted">(optional)</span>
        </span>
        {photoPreview ? (
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoPreview}
              alt="Preview of your uploaded photo"
              className="h-[64px] w-[64px] rounded-full object-cover"
            />
            <button
              type="button"
              onClick={removePhoto}
              className="text-[13px] text-ink-muted underline underline-offset-4 hover:text-navy"
            >
              Remove photo
            </button>
          </div>
        ) : (
          <label
            htmlFor="review-photo"
            className="flex min-h-[46px] cursor-pointer items-center gap-3 rounded-[3px] border border-dashed border-[#c9c2ac] bg-[#fbfaf6] px-4 py-2.5 transition-colors hover:border-navy-dark"
          >
            <UploadIcon className="h-[20px] w-[20px] shrink-0 text-navy" />
            <span className="text-[13px] leading-[1.4] text-ink-muted">
              <span className="font-medium text-navy">Choose a photo</span>
              <span className="block text-[11.5px]">JPG, PNG or WebP — large photos are compressed automatically</span>
            </span>
            <input
              ref={fileRef}
              id="review-photo"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={pickPhoto}
              className="sr-only"
            />
          </label>
        )}
        {errors.photo && (
          <p role="alert" className="mt-1.5 text-[12.5px] text-[#b4442f]">
            {errors.photo}
          </p>
        )}
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="review-comment" className="text-[13.5px] font-medium text-navy">
            Review<span className="ml-0.5 text-[#b4442f]">*</span>
          </label>
          <span className="text-[12px] text-ink-muted">
            {comment.length}/{COMMENT_MAX}
          </span>
        </div>
        <textarea
          id="review-comment"
          rows={4}
          maxLength={COMMENT_MAX}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setErrors((er) => ({ ...er, comment: undefined }));
          }}
          placeholder="Tell us about your experience..."
          aria-invalid={!!errors.comment}
          aria-describedby={errors.comment ? "review-comment-error" : undefined}
          className="min-h-[110px] w-full resize-y rounded-[3px] border border-[#d6d0be] bg-white px-4 py-3 text-[15px] leading-[1.6] text-navy placeholder:text-[#9aa5af] focus:border-navy-dark focus:outline-none focus:ring-2 focus:ring-navy-dark/15"
        />
        {errors.comment && (
          <p id="review-comment-error" role="alert" className="mt-1.5 text-[12.5px] text-[#b4442f]">
            {errors.comment}
          </p>
        )}
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-[3px] border border-[#e6c3ba] bg-[#fbf1ee] px-4 py-3 text-[14px] leading-[1.55] text-[#8a3524]">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 flex h-[50px] w-full items-center justify-center gap-2.5 rounded-[4px] bg-navy-dark text-[14.5px] font-medium text-white transition-colors hover:bg-[#0a2a42] disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
