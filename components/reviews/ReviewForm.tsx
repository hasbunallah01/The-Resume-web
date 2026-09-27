"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { contactEmail } from "@/data/site";
import { UploadIcon } from "../resumes/ResumeIcons";
import StarPicker from "./StarPicker";

const COMMENT_MAX = 600;
const PHOTO_MAX_BYTES = 6 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

type Errors = Partial<Record<"name" | "rating" | "comment" | "photo", string>>;
type Status = "idle" | "sending" | "success" | "error";

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
  const fileRef = useRef<HTMLInputElement>(null);

  const pickPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrors((er) => ({ ...er, photo: "Please upload a JPG, PNG or WebP image." }));
      return;
    }
    if (file.size > PHOTO_MAX_BYTES) {
      setErrors((er) => ({ ...er, photo: "That image is larger than 6 MB." }));
      return;
    }
    setErrors((er) => ({ ...er, photo: undefined }));
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
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
      setStatus("error");
      setMessage(
        data.error === "not_configured"
          ? `Review submissions aren't connected yet. Please email us at ${contactEmail}.`
          : `Something went wrong while sending your review. Please try again, or email us at ${contactEmail}.`,
      );
    } catch {
      setStatus("error");
      setMessage("We couldn't reach the server. Please check your connection and try again.");
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
              <span className="block text-[11.5px]">JPG, PNG or WebP (max 6 MB)</span>
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
