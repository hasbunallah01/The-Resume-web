import { listApprovedReviews } from "@/lib/reviews";
import { databaseConfigured } from "@/lib/db";
import { ReviewCard } from "./ReviewsSection";
import { PlaneLine } from "../visual/LineIcons";

/** Homepage: a slim row of the latest reviews, with the full list and form on /reviews. */
export default async function ReviewsCompact() {
  const reviews = (databaseConfigured() ? await listApprovedReviews() : []).slice(0, 6);

  return (
    <section aria-labelledby="home-reviews-heading" className="overflow-hidden py-12 lg:py-16">
      <div className="wrap flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" />Client reviews</p>
          <h2
            id="home-reviews-heading"
            className="mt-2 font-serif text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[34px]"
          >
            What Our Clients <span className="italic text-[#1f4f80]">Say</span>
          </h2>
        </div>
        <a href="/reviews" className="hidden shrink-0 text-[14px] font-medium text-sky-ink underline-offset-4 hover:underline sm:inline-flex sm:items-center sm:gap-2">
          See all reviews
          <PlaneLine className="h-4 w-4 rotate-45" />
        </a>
      </div>

      {reviews.length > 0 ? (
        <ul
          aria-label="Latest reviews"
          className="mx-auto mt-7 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-6 pt-2 [scrollbar-width:none] sm:px-[max(20px,calc((100%-1120px)/2))] lg:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r) => (
            <ReviewCard
              key={r.id}
              review={r}
              clamp
              className="w-[82%] max-w-[340px] shrink-0 snap-center sm:w-[calc((100%-2rem)/2)] sm:max-w-none sm:snap-start lg:w-[calc((min(100%,1120px)-3rem)/3)]"
            />
          ))}
        </ul>
      ) : (
        <p className="wrap mt-5 text-[15px] text-ink-body">Real reviews from people who have worked with Veylora.</p>
      )}

      <div className="wrap mt-2 sm:hidden">
        <a href="/reviews" className="btn-line">
          See all reviews
          <PlaneLine className="h-4 w-4 rotate-45" />
        </a>
      </div>
    </section>
  );
}
