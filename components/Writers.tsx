import Image from "next/image";
import { ArrowRight } from "./Icons";
import { writers } from "@/data/writers";

export default function Writers() {
  const featured = writers.filter((w) => w.featured && w.photo);

  return (
    <section
      id="writers"
      aria-labelledby="writers-heading"
      className="bg-ivory py-12 lg:py-[64px]"
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

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[28px] lg:grid-cols-3 xl:grid-cols-4">
          {featured.map((w) => (
            <li
              key={w.slug}
              className="flex flex-col items-center rounded-[3px] border border-[#e9e6dd] bg-ivory-card px-[14px] pb-[16px] pt-[14px] shadow-[0_1px_7px_rgba(20,40,60,0.06)] xl:h-[300px]"
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
              <p className="mt-[12px] w-full text-left text-[12.5px] leading-[18.9px] text-ink-muted">
                {w.summary}
              </p>
              <a
                href={`/writers#${w.slug}`}
                className="mt-3 flex h-[16px] w-full items-center gap-[8px] text-left text-[12px] font-medium text-[#1d3d5c] transition-colors hover:text-navy-btn xl:mt-auto"
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
