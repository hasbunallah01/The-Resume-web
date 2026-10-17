import { plans } from "@/data/pricing";
import { ArrowIcon } from "../visual/Marks";

function Tick() {
  return (
    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-[#3a7eb4]" fill="none" aria-hidden="true">
      <path d="M3.2 8.2 6.4 11.4 12.8 4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading">
      <div className="wrap py-16 lg:py-24">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="eyebrow justify-center">Career documents built with purpose</p>
          <h2
            id="pricing-heading"
            className="mt-3 font-serif text-[36px] font-medium leading-[1.12] tracking-[-0.02em] text-navy sm:text-[46px]"
          >
            Resume Writing Services
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.75] text-ink-body">
            From early career professionals to experienced executives, Veylora
            creates strategically written career documents designed to
            communicate your experience clearly and position you for your next
            opportunity.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-5 xl:gap-7">
          {plans.map((plan) => (
            <article
              key={plan.id}
              data-tilt="4"
              className={`paper relative flex flex-col rounded-[28px] px-6 pb-7 pt-8 sm:px-7 ${
                plan.featured
                  ? "order-first bg-white shadow-lift ring-2 ring-[#163056] lg:order-none lg:-my-3 lg:py-10"
                  : "bg-white/90 shadow-paper ring-1 ring-white"
              }`}
            >
              {plan.featured && (
                <p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#163056] px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white">
                  Most requested
                </p>
              )}

              <h3 className="font-serif text-[28px] font-medium leading-tight text-navy">{plan.name}</h3>
              <p className="mt-5 font-serif text-[32px] font-medium leading-none tracking-[-0.02em] text-navy sm:text-[34px]">
                {plan.price}
              </p>
              <p className="mt-2 text-[13px] text-sky-ink">{plan.paymentNote}</p>

              <p className="mt-5 text-[15px] leading-[1.65] text-ink-body">{plan.blurb}</p>

              <p className="mt-5 border-l-2 border-[#b7d4ea] pl-4 font-serif text-[16px] italic leading-snug text-navy">
                <span className="font-sans text-[13px] font-semibold not-italic uppercase tracking-[0.08em] text-sky-ink">
                  Perfect for{" "}
                </span>
                {plan.perfectFor}
              </p>

              <div className="mt-7 border-t border-[#e3eef6] pt-6">
                <h4 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-navy">What&rsquo;s included</h4>
                {plan.includes && (
                  <p className="mt-3 text-[14px] font-medium text-[#1d4e74]">{plan.includes}</p>
                )}
                <ul className="mt-4 space-y-3.5">
                  {plan.items.map((it) => (
                    <li key={it.lead} className="flex gap-2.5 text-[14.5px] leading-[1.55] text-ink-body">
                      <Tick />
                      <span>
                        <strong className="font-semibold text-navy">{it.lead}</strong> {it.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.bonuses && (
                <div className="mt-6 rounded-2xl bg-[#f3f8fc] p-4 ring-1 ring-[#e3eef6]">
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-sky-ink">Plus bonuses</p>
                  <ul className="mt-3 space-y-3">
                    {plan.bonuses.map((b) => (
                      <li key={b.lead} className="flex gap-2.5 text-[14px] leading-[1.55] text-ink-body">
                        <Tick />
                        <span>
                          <strong className="font-semibold text-navy">{b.lead}</strong> {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href="/contact"
                className={`mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-full text-[14.5px] font-medium transition ${
                  plan.featured
                    ? "bg-[#163056] text-white shadow-[0_10px_24px_rgba(16,36,64,0.18)] hover:bg-[#0e2340]"
                    : "bg-white text-navy ring-1 ring-[#c9dced] hover:bg-[#f7fbfe]"
                }`}
              >
                {plan.cta}
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
