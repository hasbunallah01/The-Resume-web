import { PlusIcon } from "../resumes/ResumeIcons";
import { homeFaqs } from "@/data/homeFaq";

export default function FAQ() {
  return (
    <section aria-labelledby="home-faq-heading" className="bg-ivory">
      <div className="mx-auto w-[min(820px,calc(100%-48px))] py-14 lg:py-[80px]">
        <h2
          id="home-faq-heading"
          className="text-center font-serif text-[30px] font-[500] leading-[1.2] tracking-[-0.012em] text-navy sm:text-[38px]"
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-10 border-t border-[#d9d2bd]">
          {homeFaqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-[#d9d2bd]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[18px] text-[15.5px] font-medium text-navy transition-colors hover:text-navy-btn [&::-webkit-details-marker]:hidden">
                {q}
                <PlusIcon className="h-[18px] w-[18px] shrink-0 text-[#8a6d3a] transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="pb-5 pr-10 text-[14.5px] leading-[1.7] text-ink-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
