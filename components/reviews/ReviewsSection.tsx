import { StarIcon } from "../resumes/ResumeIcons";
import { listApprovedReviews, type ReviewRow } from "@/lib/reviews";
import { databaseConfigured } from "@/lib/db";
import WriteReviewToggle from "./WriteReviewToggle";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
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

function ReviewCard({ review }: { review: ReviewRow }) {
  return (
    <li className="flex flex-col rounded-[6px] border border-[#e3e9ef] bg-white p-5 shadow-[0_2px_10px_rgba(20,50,80,0.05)]">
      <div className="flex items-center gap-3.5">
        {review.photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/api/review-photo/${review.id}`}
            alt={`Photo of ${review.name}`}
            className="h-[48px] w-[48px] shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="inline-flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#e3ebf1] font-serif text-[16px] font-[600] text-[#164a73]"
          >
            {initials(review.name)}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-[14.5px] font-semibold text-navy">{review.name}</p>
          <p className="text-[12px] text-[#6b8296]">{formatDate(review.created_at)}</p>
        </div>
      </div>
      <div className="mt-3.5">
        <Stars value={review.rating} />
      </div>
      <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-ink-body">&ldquo;{review.comment}&rdquo;</p>
    </li>
  );
}

export default async function ReviewsSection() {
  const reviews = databaseConfigured() ? await listApprovedReviews() : [];
  const average =
    reviews.length > 0 ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : null;

  return (
    <section aria-labelledby="reviews-heading" className="bg-ivory">
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[76px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[600px]">
            <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[#0f3f78]">
              <span aria-hidden="true" className="h-px w-[44px] bg-gold" />
              Client reviews
            </p>
            <h2
              id="reviews-heading"
              className="mt-3 font-serif text-[32px] font-[500] leading-[1.15] tracking-[-0.01em] text-navy sm:text-[40px]"
            >
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-[520px] text-[15.5px] leading-[1.7] text-ink-body">
              Real reviews from people who have worked with Veylora.
            </p>
          </div>

          {average !== null && (
            <div className="flex items-center gap-6 rounded-[8px] border border-[#e3e9ef] bg-white/80 px-6 py-5 shadow-[0_2px_12px_rgba(20,50,80,0.05)]">
              <span
                aria-hidden="true"
                className="inline-flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#e9ab3e] text-white"
              >
                <StarIcon className="h-[26px] w-[26px]" />
              </span>
              <div>
                <p className="text-[28px] font-medium leading-none text-navy">{average.toFixed(1)}/5</p>
                <p className="mt-1.5 text-[13px] text-ink-muted">Average Rating</p>
              </div>
              <div className="h-[40px] w-px bg-[#d5dde3]" aria-hidden="true" />
              <div>
                <p className="text-[28px] font-medium leading-none text-navy">{reviews.length}</p>
                <p className="mt-1.5 text-[13px] text-ink-muted">
                  {reviews.length === 1 ? "Review" : "Reviews"}
                </p>
              </div>
            </div>
          )}
        </div>

        {reviews.length > 0 ? (
          <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </ul>
        ) : (
          <p className="mt-9 rounded-[4px] border border-[#e4dfd0] bg-white/70 px-6 py-8 text-center text-[15px] text-ink-muted">
            Be the first to share your experience with Veylora.
          </p>
        )}

        <WriteReviewToggle />
      </div>
    </section>
  );
}
