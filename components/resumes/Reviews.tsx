"use client";

import { useMemo, useState } from "react";
import type { Review } from "@/data/reviews";
import { StarIcon, ThumbIcon, ShareIcon } from "./ResumeIcons";

const PAGE_SIZE = 10;

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-[2px]" role="img" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={`h-[14px] w-[14px] ${i <= value ? "text-[#f0a92e]" : "text-[#dcd6c6]"}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [liked, setLiked] = useState(false);
  const initials = review.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  const share = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({ title: "Veylora client review", url: window.location.href })
        .catch(() => {});
    }
  };

  return (
    <li className="flex flex-col rounded-[6px] border border-[#e3e9ef] bg-white p-5 shadow-[0_2px_10px_rgba(20,50,80,0.05)]">
      <div className="flex items-center gap-3.5">
        {review.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.photo}
            alt={`Photo of ${review.name}`}
            className="h-[52px] w-[52px] shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#e3ebf1] font-serif text-[18px] font-[600] text-[#164a73]"
          >
            {initials}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold text-navy">{review.name}</p>
          <p className="text-[12.5px] text-[#6b8296]">{formatDate(review.date)}</p>
        </div>
      </div>
      <div className="mt-4">
        <Stars value={review.rating} />
      </div>
      <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-ink-body">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-5 pt-1 text-[12.5px] text-[#3f6a8c]">
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-pressed={liked}
          className={`inline-flex items-center gap-1.5 transition-colors hover:text-navy ${liked ? "font-semibold text-navy" : ""}`}
        >
          <ThumbIcon className="h-[15px] w-[15px]" />
          Helpful ({review.helpful + (liked ? 1 : 0)})
        </button>
        <button
          type="button"
          onClick={share}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-navy"
        >
          <ShareIcon className="h-[15px] w-[15px]" />
          Share
        </button>
      </div>
    </li>
  );
}

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const years = useMemo(
    () => Array.from(new Set(reviews.map((r) => r.date.slice(0, 4)))).sort().reverse(),
    [reviews],
  );
  const [year, setYear] = useState<string>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const average = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const shown = year === "all" ? reviews : reviews.filter((r) => r.date.startsWith(year));
  const remaining = shown.length - visible;

  return (
    <section aria-labelledby="reviews-heading" className="bg-ivory">
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] pt-4 pb-14 lg:pb-[72px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[600px]">
            <p className="flex items-center gap-4 text-[13px] font-medium uppercase tracking-[0.3em] text-[#0f3f78]">
              <span aria-hidden="true" className="h-px w-[56px] bg-[#d9a23f]" />
              Client reviews
            </p>
            <h2
              id="reviews-heading"
              className="mt-2 font-serif text-[40px] font-[750] leading-[1.05] tracking-[-0.02em] text-[#0a2a4d] sm:text-[52px] lg:text-[60px]"
            >
              What Our Clients Say
            </h2>
            <p className="mt-5 max-w-[520px] text-[16.5px] leading-[1.65] text-[#3f6a8c]">
              Real people. Real stories. Here&rsquo;s what our clients have to
              say about their experience working with our team.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:gap-10">
            <div className="flex items-center gap-6 rounded-[8px] border border-[#e3e9ef] bg-white/80 px-6 py-5 shadow-[0_2px_12px_rgba(20,50,80,0.05)]">
              <span
                aria-hidden="true"
                className="inline-flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#e9ab3e] text-white"
              >
                <StarIcon className="h-[32px] w-[32px]" />
              </span>
              <div>
                <p className="text-[34px] font-medium leading-none text-[#0a2a4d]">
                  {average.toFixed(1)}/5
                </p>
                <p className="mt-1.5 text-[14px] text-[#3f6a8c]">Average Rating</p>
              </div>
              <div className="h-[46px] w-px bg-[#d5dde3]" aria-hidden="true" />
              <div>
                <p className="text-[34px] font-medium leading-none text-[#0a2a4d]">
                  {reviews.length}
                </p>
                <p className="mt-1.5 text-[14px] text-[#3f6a8c]">Total Reviews</p>
              </div>
            </div>

            <p
              aria-hidden="true"
              className="hidden -rotate-6 font-script text-[36px] font-semibold leading-[1.05] text-[#123a63] xl:block"
            >
              Grateful
              <br />
              for your trust!
              <svg viewBox="0 0 160 10" className="mt-1 h-[8px] w-[150px]" fill="none">
                <path d="M2 7c40-6 90-6 156-2" stroke="#e0a13a" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Filter reviews by year">
          {["all", ...years].map((y) => {
            const active = year === y;
            return (
              <button
                key={y}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setYear(y);
                  setVisible(PAGE_SIZE);
                }}
                className={`h-[44px] min-w-[86px] rounded-full border px-6 text-[15px] transition-colors ${
                  active
                    ? "border-[#0d2f57] bg-[#0d2f57] font-medium text-white"
                    : "border-[#d5dde3] bg-white/70 text-[#3f6a8c] hover:border-[#0d2f57]"
                }`}
              >
                {y === "all" ? "All Reviews" : y}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {shown.slice(0, visible).map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </ul>

        {remaining > 0 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="h-[48px] rounded-[4px] border border-[#0d2f57] px-7 text-[14.5px] font-medium text-[#0d2f57] transition-colors hover:bg-[#0d2f57] hover:text-white"
            >
              Show more reviews ({remaining})
            </button>
          </div>
        )}
      </div>

      <div className="bg-[#0d2a4b] py-7 text-center text-white">
        <p className="flex items-center justify-center gap-5 font-script text-[30px] font-semibold leading-none">
          <span aria-hidden="true" className="h-px w-[48px] bg-[#d9a23f] sm:w-[70px]" />
          Your Success Matters
          <span aria-hidden="true" className="h-px w-[48px] bg-[#d9a23f] sm:w-[70px]" />
        </p>
        <p className="mt-2 text-[13.5px] text-white/85">
          We&rsquo;re honored to be part of your journey.
        </p>
      </div>
    </section>
  );
}
