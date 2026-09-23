import Image from "next/image";
import { ArrowRight } from "./Icons";
import { writers } from "@/data/writers";

export default function Writers() {
  const featured = writers.filter((w) => w.featured && w.photo);
  const columns = featured.map((w) => `${w.weight ?? 135}fr`).join(" ");

  return (
    <section
      id="writers"
      aria-labelledby="writers-heading"
      className="bg-ivory py-12 xl:h-[478px] xl:py-0 xl:pt-[31px]"
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
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:mx-auto xl:mt-[16px] xl:max-w-[1224px] xl:grid-cols-[var(--cols)] xl:gap-x-[14px]"
          style={{ ["--cols" as string]: columns }}
        >
          {featured.map((w) => (
            <li
              key={w.slug}
              className="flex flex-col items-center rounded-[3px] border border-[#e9e6dd] bg-ivory-card px-[14px] pb-[16px] pt-[14px] shadow-[0_1px_7px_rgba(20,40,60,0.06)] xl:h-[317px]"
            >
              <div className="relative h-[101px] w-[101px] shrink-0 overflow-hidden rounded-full">
                <Image
                  src={w.photo as string}
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
                {w.cardRole}
              </p>
              <p className="mt-[12px] w-full text-left text-[11.7px] leading-[18.9px] text-ink-muted">
                <span className="xl:hidden">{w.summary}</span>
                <span className="hidden xl:block">
                  {w.lines.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <a
                href={`/writers#${w.slug}`}
                className="mt-3 flex h-[16px] xl:mt-auto w-full items-center gap-[8px] text-left text-[12px] font-medium text-[#1d3d5c] transition-colors hover:text-navy-btn"
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
