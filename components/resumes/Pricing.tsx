import { plans } from "@/data/pricing";
import { ArrowRight } from "../Icons";
import { CrownIcon, DocIcon, PersonIcon, TickIcon } from "./ResumeIcons";

const icons = { document: DocIcon, person: PersonIcon, crown: CrownIcon };

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-y border-[#e9e4d6] bg-[#f3f0e8]"
    >
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[84px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#527b98]">
            Career documents built with purpose
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 font-serif text-[34px] font-[480] leading-[1.15] tracking-[-0.01em] text-navy lg:text-[44px]"
          >
            Resume Writing Services
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-ink-body">
            From early-career professionals to experienced executives, Veylora
            creates strategically written career documents designed to
            communicate your experience clearly and position you for your next
            opportunity.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {plans.map((plan) => {
            const Icon = icons[plan.icon];
            return (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-[4px] bg-white px-7 pb-8 pt-9 xl:px-8 ${
                  plan.featured
                    ? "border border-[#c9b98f] shadow-[0_18px_44px_rgba(11,42,70,0.12)] lg:-my-4 lg:pb-11 lg:pt-11"
                    : "border border-[#e4dfd0] shadow-[0_2px_14px_rgba(11,42,70,0.05)]"
                }`}
              >
                {plan.featured && (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[3px] bg-navy"
                    />
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-gold px-3.5 py-[5px] text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white">
                      Most requested
                    </span>
                  </>
                )}

                <span className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#d9d2bd] bg-[#faf8f2] text-navy">
                  <Icon className="h-[23px] w-[23px]" />
                </span>

                <h3 className="mt-5 font-serif text-[26px] font-[520] leading-[1.15] text-navy">
                  {plan.name}
                </h3>
                <p className="mt-3 min-h-[76px] text-[15px] leading-[1.6] text-ink-muted">
                  {plan.blurb}
                </p>

                <div className="mt-6 border-t border-[#ebe6d8] pt-5">
                  <p className="text-[11.5px] font-medium uppercase tracking-[0.12em] text-[#527b98]">
                    Investment
                  </p>
                  <p className="mt-1.5 whitespace-nowrap font-serif text-[29px] font-[500] leading-[1.1] tracking-[-0.01em] text-navy sm:text-[34px] lg:text-[29px] xl:text-[36px]">
                    {plan.price}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#ebe6d8] pt-5">
                  {plan.includes && (
                    <p className="mb-3.5 text-[13.5px] font-semibold text-navy">
                      {plan.includes}
                    </p>
                  )}
                  <ul className="space-y-[11px]">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 text-[14.5px] leading-[1.5] text-ink-body"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[3px] inline-flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-gold text-white"
                        >
                          <TickIcon className="h-[10px] w-[10px]" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href="/contact"
                    className="flex h-[50px] w-full items-center justify-center gap-2.5 rounded-[4px] bg-navy-dark text-[14.5px] font-medium text-white transition-colors hover:bg-[#0a2a42]"
                  >
                    {plan.cta}
                    <ArrowRight className="h-[15px] w-[15px]" />
                  </a>
                  <p className="mt-4 text-center text-[12.5px] leading-[1.5] text-ink-muted">
                    {plan.note}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
