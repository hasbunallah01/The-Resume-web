import { ArrowRight } from "../Icons";
import { homeServices } from "@/data/homeServices";
import { BriefcaseLine, DocLine, DocStackLine, EnvelopeLine, LayersLine, ProfileLine } from "../visual/LineIcons";
import { Accent, IconTile, NavyBand, PlaneTrail } from "../visual/Rich";

const icons: Record<string, typeof DocLine> = {
  "Professional Resumes": DocLine,
  "Executive Resumes": BriefcaseLine,
  CVs: DocStackLine,
  "Cover Letters": EnvelopeLine,
  "LinkedIn Profiles": ProfileLine,
  "Career Document Packages": LayersLine,
};

export default function ServicesOverview() {
  return (
    <NavyBand labelledBy="services-overview-heading" clouds className="pb-28 pt-16 lg:pb-40 lg:pt-24">
      <div className="wrap relative">
        <PlaneTrail light className="absolute -top-6 right-0 w-[200px] opacity-80 sm:w-[260px]" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow !text-[#a9cdea]"><span className="eyebrow-dot" />What we offer</p>
            <h2
              id="services-overview-heading"
              className="mt-3 max-w-[640px] font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-[44px]"
            >
              Career Documents Built Around Your <Accent light>Goals</Accent>
            </h2>
          </div>
          <a href="/services" className="relative text-[14.5px] font-medium text-white underline decoration-[#5d8fbf] decoration-2 underline-offset-[6px] hover:decoration-[#a9cdea]">
            View services
          </a>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {homeServices.map((service) => {
            const Icon = icons[service.title] ?? DocLine;
            return (
              <li key={service.title}>
                <a
                  href={service.href}
                  className="glass-dark group flex h-full flex-col rounded-[24px] p-6 transition duration-500 ease-sky hover:-translate-y-1 hover:bg-white/[0.06] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <IconTile Icon={Icon} dark />
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#a9cdea] ring-1 ring-white/15 transition duration-500 ease-sky group-hover:bg-white group-hover:text-navy">
                      <ArrowRight className="h-3.5 w-3.5 -rotate-45 transition duration-500 ease-sky group-hover:rotate-0" />
                      <span className="sr-only">Explore</span>
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-[24px] font-medium text-white">{service.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.65] text-white/70">{service.text}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </NavyBand>
  );
}
