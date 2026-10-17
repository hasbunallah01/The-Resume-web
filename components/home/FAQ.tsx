import { homeFaqs } from "@/data/homeFaq";

export default function FAQ() {
  return (
    <section aria-labelledby="home-faq-heading" className="wrap pb-8 lg:pb-12">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <h2
          id="home-faq-heading"
          className="font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[40px]"
        >
          Frequently Asked Questions
        </h2>
        <div className="paper rounded-[28px] bg-white/85 px-5 shadow-paper ring-1 ring-white sm:px-8">
          {homeFaqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-[#e3eef6] last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-[18px] font-medium text-navy [&::-webkit-details-marker]:hidden">
                {q}
                <span className="text-[22px] font-light leading-none text-sky-ink transition group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 pr-8 text-[15px] leading-[1.7] text-ink-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
