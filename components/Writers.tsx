import Image from "next/image";
import { ArrowRight } from "./Icons";
import { writers } from "@/data/writers";

export default function Writers() {
  const columns = writers.map((w) => `${w.weight}fr`).join(" ");

  return (
    <section
      id="writers"
      aria-labelledby="writers-heading"
      className="bg-ivory py-12 lg:h-[478px] lg:py-0 lg:pt-[31px]"
    >
      <div className="mx-auto w-[min(1232px,calc(100%-48px))]">
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#1d4468] lg:text-[11.7px]">
            Meet Our Resume Writing Experts
          </p>
          <h2
            id="writers-heading"
            className="mx-auto mt-[12px] max-w-[680px] font-serif text-[24px] font-normal leading-[1.3] tracking-[-0.005em] text-[#0b2a46] lg:text-[26.6px] lg:leading-[33.5px]"
          >
            Experienced professionals dedicated to helping job seekers
            <br className="hidden lg:inline" /> communicate their value with
            clarity and confidence.
          </h2>
        </div>

        <ul
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:mt-[16px] lg:max-w-[1224px] lg:grid-cols-[var(--cols)] lg:gap-x-[14px]"
          style={{ ["--cols" as string]: columns }}
        >
          {writers.map((w) => (
            <li
              key={w.slug}
              className="flex flex-col items-center rounded-[3px] border border-[#e9e6dd] bg-ivory-card px-[14px] pb-[16px] pt-[14px] shadow-[0_1px_7px_rgba(20,40,60,0.06)] lg:h-[317px]"
            >
              <div className="relative h-[101px] w-[101px] shrink-0 overflow-hidden rounded-full">
                <Image
                  src={w.photo}
                  alt={`Portrait of ${w.name}`}
                  fill
                  sizes="101px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-[11px] text-center font-serif text-[18px] font-[480] leading-[24px] text-[#0b2a46]">
                {w.name}
              </h3>
              <p className="mt-[6px] text-center text-[12px] leading-[16px] text-ink-soft">
                {w.credentials}
              </p>
              <p className="mt-[12px] w-full text-left text-[11.7px] leading-[18.9px] text-ink-muted">
                <span className="lg:hidden">{w.summary}</span>
                <span className="hidden lg:block">
                  {w.lines.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <a
                href={`/writers/${w.slug}`}
                className="mt-3 flex h-[16px] lg:mt-auto w-full items-center gap-[8px] text-left text-[12px] font-medium text-[#1d3d5c] transition-colors hover:text-navy-btn"
              >
                View Profile
                <ArrowRight className="h-[12px] w-[12px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
