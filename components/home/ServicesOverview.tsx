import { ArrowRight } from "../Icons";
import { homeServices } from "@/data/homeServices";

export default function ServicesOverview() {
  return (
    <section aria-labelledby="services-overview-heading" className="relative">
      <div className="wrap py-16 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">What we offer</p>
            <h2
              id="services-overview-heading"
              className="mt-3 max-w-[640px] font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.02em] text-navy sm:text-[44px]"
            >
              Career Documents Built Around Your Goals
            </h2>
          </div>
          <a href="/services" className="text-[14.5px] font-medium text-navy underline decoration-[#9ec0da] decoration-2 underline-offset-[6px]">
            View services
          </a>
        </div>

        <ul className="mt-10 overflow-hidden rounded-[28px] bg-white/75 shadow-paper ring-1 ring-white">
          {homeServices.map((service, i) => (
            <li key={service.title} className={i > 0 ? "border-t border-[#e3eef6]" : ""}>
              <a
                href={service.href}
                className="group grid gap-2 px-6 py-6 transition hover:bg-white sm:grid-cols-[1.1fr_1.4fr_auto] sm:items-center sm:gap-8 sm:px-8"
              >
                <h3 className="font-serif text-[24px] font-medium text-navy">{service.title}</h3>
                <p className="text-[15px] leading-[1.6] text-ink-muted">{service.text}</p>
                <span className="inline-flex items-center gap-2 text-[13px] font-medium text-sky-ink">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
