import Image from "next/image";
import { writers } from "@/data/writers";
import { PenNibLine, PlaneLine } from "../visual/LineIcons";
import { Accent } from "../visual/Rich";

/** About page: every writer at a glance, with a way through to the full profiles. */
export default function MeetWriters() {
  return (
    <section aria-labelledby="about-writers-heading" className="skywash relative overflow-hidden py-16 lg:py-24">
      <div className="wrap max-w-[1120px]">
        <div className="max-w-[720px]">
          <p className="eyebrow"><span className="eyebrow-dot" />Meet the Writers</p>
          <h2
            id="about-writers-heading"
            className="mt-3 font-serif text-[30px] font-medium leading-[1.18] tracking-[-0.02em] text-navy sm:text-[40px]"
          >
            The people behind every <Accent>Veylora</Accent> resume.
          </h2>
        </div>

        <ul aria-label="Veylora writers" className="mt-10 grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {writers.map((w) => (
            <li key={w.slug}>
              <a
                href={`/writers#${w.slug}`}
                className="glass-card group relative flex h-full flex-col items-center rounded-[24px] px-3.5 pb-5 pt-6 text-center transition duration-500 ease-sky hover:-translate-y-1 sm:rounded-[28px] sm:px-6 sm:pb-7 sm:pt-8"
              >
                <span className="frame-layered relative block h-[84px] w-[84px] rounded-[22px] sm:h-[120px] sm:w-[120px] sm:rounded-[28px]">
                  <span className="relative block h-full w-full overflow-hidden rounded-[22px] bg-white shadow-[0_18px_34px_-18px_rgba(20,56,92,0.6)] ring-[3px] ring-white sm:rounded-[28px]">
                    {w.photo ? (
                      <Image
                        src={w.photo}
                        alt={`Portrait of ${w.name}`}
                        fill
                        sizes="(min-width: 640px) 120px, 84px"
                        className="object-cover transition duration-700 ease-sky group-hover:scale-[1.04]"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center font-serif text-[28px] text-navy">
                        {w.name
                          .split(" ")
                          .map((p) => p[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    )}
                  </span>
                  <span className="absolute -bottom-2 -right-2 hidden h-8 w-8 items-center justify-center rounded-full bg-white text-sky-ink shadow-[0_8px_16px_-8px_rgba(36,96,150,0.6)] ring-1 ring-[#dbe9f4] sm:inline-flex">
                    <PenNibLine className="h-[15px] w-[15px]" />
                  </span>
                </span>
                <span className="mt-4 block font-serif text-[16px] font-medium leading-tight text-navy sm:mt-6 sm:text-[20px]">{w.name}</span>
                <span className="mt-2 inline-flex items-center rounded-full bg-[#e7f2fa] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-ink ring-1 ring-[#d3e5f3] sm:px-3 sm:text-[11px] sm:tracking-[0.14em]">
                  {w.cardRole}
                </span>
                <span className="mt-3 line-clamp-3 text-[12.5px] leading-[1.55] text-ink-muted sm:mt-4 sm:line-clamp-none sm:text-[13.5px] sm:leading-[1.6]">
                  {w.summary}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center sm:justify-start">
          <a href="/writers" className="btn-line">
            Meet the writing team
            <PlaneLine className="h-4 w-4 rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}
