import { plans } from "@/data/pricing";
import { ArrowRight } from "./Icons";
import { CrownIcon, DocIcon, PersonIcon } from "./resumes/ResumeIcons";

const icons = { document: DocIcon, person: PersonIcon, crown: CrownIcon };

export default function ServicesTeaser() {
  return (
    <section
      aria-labelledby="services-teaser-heading"
      className="border-y border-[#e9e4d6] bg-[#f3efe4]"
    >
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[76px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#527b98]">
            Career documents built with purpose
          </p>
          <h2
            id="services-teaser-heading"
            className="mt-3 font-serif text-[28px] font-[500] leading-[1.2] tracking-[-0.01em] text-navy lg:text-[36px]"
          >
            A Package for Every Career Stage
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.7] text-ink-body">
            From a single polished resume to full personal-brand support, find
            the level of help that matches where you are right now.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = icons[plan.icon];
            return (
              <li
                key={plan.id}
                className={`relative flex flex-col rounded-[4px] bg-white p-7 ${
                  plan.featured
                    ? "border border-[#c9b98f] shadow-[0_14px_36px_rgba(11,42,70,0.1)]"
                    : "border border-[#e4dfd0] shadow-[0_2px_12px_rgba(11,42,70,0.04)]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-gold px-3 py-[4px] text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    Most requested
                  </span>
                )}
                <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#d9d2bd] bg-[#faf8f2] text-navy">
                  <Icon className="h-[20px] w-[20px]" />
                </span>
                <h3 className="mt-4 font-serif text-[21px] font-[520] text-navy">
                  {plan.name}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-ink-muted">
                  {plan.blurb}
                </p>
                <p className="mt-5 whitespace-nowrap font-serif text-[22px] font-[500] text-navy">
                  {plan.price}
                </p>
                <a
                  href="/services#pricing"
                  className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-medium text-navy underline decoration-gold decoration-[1.5px] underline-offset-[5px] transition-colors hover:text-navy-btn"
                >
                  Learn more
                  <ArrowRight className="h-[13px] w-[13px]" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="/services"
            className="inline-flex h-[50px] items-center gap-2.5 rounded-[4px] bg-navy-dark px-7 text-[14px] font-medium text-white transition-colors hover:bg-[#0a2a42]"
          >
            View All Services
            <ArrowRight className="h-[15px] w-[15px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
