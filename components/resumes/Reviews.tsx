"use client";

import { useMemo, useState } from "react";
import type { Review } from "@/data/reviews";
import { StarIcon, ThumbIcon, ShareIcon } from "./ResumeIcons";

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
          className={`h-[13px] w-[13px] ${i <= value ? "text-[#c99a4a]" : "text-[#dcd6c6]"}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, hiddenOnMobile }: { review: Review; hiddenOnMobile: boolean }) {
  const [liked, setLiked] = useState(false);
  const initials = review.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  const share = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: "Veylora client review", url: window.location.href }).catch(() => {});
    }
  };

  return (
    <li
      className={`flex flex-col rounded-[3px] border border-[#e6e1d3] bg-white p-5 shadow-[0_1px_8px_rgba(20,40,60,0.04)] ${
        hiddenOnMobile ? "hidden md:flex" : "flex"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#e3ebf1] font-serif text-[16px] font-[560] text-[#164a73]"
        >
          {initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[14.5px] font-semibold text-navy">{review.name}</p>
          <p className="text-[12px] text-[#6b8296]">{formatDate(review.date)}</p>
        </div>
      </div>
      <div className="mt-3.5">
        <Stars value={review.rating} />
      </div>
      <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-ink-body">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-4 border-t border-[#efeadc] pt-3 text-[12px] text-[#6b8296]">
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-pressed={liked}
          className={`inline-flex items-center gap-1.5 transition-colors hover:text-navy ${liked ? "text-navy" : ""}`}
        >
          <ThumbIcon className="h-[14px] w-[14px]" />
          Helpful ({review.helpful + (liked ? 1 : 0)})
        </button>
        <button
          type="button"
          onClick={share}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-navy"
        >
          <ShareIcon className="h-[14px] w-[14px]" />
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
  const [expanded, setExpanded] = useState(false);

  const average = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const shown = year === "all" ? reviews : reviews.filter((r) => r.date.startsWith(year));
  const canExpand = shown.length > 4;

  return (
    <section aria-labelledby="reviews-heading" className="bg-ivory">
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] pb-14 lg:pb-[84px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#527b98]">
              Client reviews
            </p>
            <h2
              id="reviews-heading"
              className="mt-3 font-serif text-[34px] font-[480] leading-[1.15] tracking-[-0.01em] text-navy lg:text-[44px]"
            >
              What Our Clients Say
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-ink-body">
              Real people. Real stories. Here&rsquo;s what our clients have to
              say about their experience working with our team.
            </p>
          </div>

          <div className="flex items-center gap-6 self-start rounded-[4px] border border-[#e4dfd0] bg-white px-6 py-4 lg:self-auto">
            <span
              aria-hidden="true"
              className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f4ead4] text-[#c99a4a]"
            >
              <StarIcon className="h-[24px] w-[24px]" />
            </span>
            <div>
              <p className="font-serif text-[26px] font-[520] leading-none text-navy">
                {average.toFixed(1)}/5
              </p>
              <p className="mt-1 text-[12px] text-[#6b8296]">Average Rating</p>
            </div>
            <div className="h-10 w-px bg-[#e4dfd0]" aria-hidden="true" />
            <div>
              <p className="font-serif text-[26px] font-[520] leading-none text-navy">
                {reviews.length}
              </p>
              <p className="mt-1 text-[12px] text-[#6b8296]">Total Reviews</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5" role="group" aria-label="Filter reviews by year">
          {["all", ...years].map((y) => {
            const active = year === y;
            return (
              <button
                key={y}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setYear(y);
                  setExpanded(false);
                }}
                className={`h-[38px] rounded-full border px-5 text-[13.5px] transition-colors ${
                  active
                    ? "border-navy-dark bg-navy-dark text-white"
                    : "border-[#d5dde3] bg-white/60 text-[#164a73] hover:border-navy-dark"
                }`}
              >
                {y === "all" ? "All Reviews" : y}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {shown.map((r, i) => (
            <ReviewCard key={r.id} review={r} hiddenOnMobile={!expanded && i >= 4} />
          ))}
        </ul>

        {canExpand && !expanded && (
          <div className="mt-6 text-center md:hidden">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="h-[44px] rounded-[4px] border border-navy-dark px-6 text-[14px] font-medium text-navy-dark"
            >
              Show more reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
