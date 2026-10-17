import { homeFaqs } from "@/data/homeFaq";
import { ChatLine } from "../visual/LineIcons";
import { IconTile } from "../visual/Rich";

export default function FAQ() {
  return (
    <section aria-labelledby="home-faq-heading" className="wrap pb-8 lg:pb-12">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <IconTile Icon={ChatLine} />
          <h2
            id="home-faq-heading"
            className="mt-5 font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[40px]"
          >
            Frequently Asked <span className="italic text-[#1f4f80]">Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {homeFaqs.map(({ q, a }) => (
            <details
              key={q}
              className="glass-card group rounded-[20px] px-5 transition-shadow duration-500 ease-sky open:shadow-[inset_0_1px_0_#fff,0_24px_50px_-26px_rgba(28,72,112,0.5)] sm:px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-[18px] font-serif text-[18px] font-medium leading-snug text-navy [&::-webkit-details-marker]:hidden">
                {q}
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e7f2fa] text-[18px] font-light leading-none text-sky-ink ring-1 ring-[#d3e5f3] transition duration-500 ease-sky group-open:rotate-45 group-open:bg-navy group-open:text-white group-open:ring-navy"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 pr-8 text-[15px] leading-[1.7] text-ink-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
