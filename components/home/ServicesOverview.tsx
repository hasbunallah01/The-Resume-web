import { ArrowRight } from "../Icons";
import {
  CrownIcon,
  DocIcon,
  LayersIcon,
  MailIcon,
  PencilIcon,
  UsersIcon,
} from "../resumes/ResumeIcons";
import { homeServices } from "@/data/homeServices";

const icons = {
  document: DocIcon,
  crown: CrownIcon,
  layers: LayersIcon,
  mail: MailIcon,
  users: UsersIcon,
  pencil: PencilIcon,
};

export default function ServicesOverview() {
  return (
    <section
      aria-labelledby="services-overview-heading"
      className="border-y border-[#e9e4d6] bg-[#f3efe4]"
    >
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[80px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#527b98]">
            What we offer
          </p>
          <h2
            id="services-overview-heading"
            className="mt-3 font-serif text-[30px] font-[500] leading-[1.2] tracking-[-0.012em] text-navy sm:text-[38px] lg:text-[42px]"
          >
            Career Documents Built Around Your Goals
          </h2>
        </div>

        <ul className="mt-11 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {homeServices.map(({ title, text, icon, href }) => {
            const Icon = icons[icon];
            return (
              <li
                key={title}
                className="flex flex-col rounded-[4px] border border-[#e4dfd0] bg-white p-6 shadow-[0_2px_12px_rgba(11,42,70,0.04)]"
              >
                <span className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#d9d2bd] bg-[#faf8f2] text-navy">
                  <Icon className="h-[21px] w-[21px]" />
                </span>
                <h3 className="mt-4 font-serif text-[19px] font-[520] text-navy">{title}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-ink-muted">{text}</p>
                <a
                  href={href}
                  className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-medium text-navy underline decoration-gold decoration-[1.5px] underline-offset-[5px] transition-colors hover:text-navy-btn"
                >
                  Explore Service
                  <ArrowRight className="h-[13px] w-[13px]" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
