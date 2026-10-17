import Image from "next/image";
import { writers } from "@/data/writers";
import { PenNibLine, PlaneLine } from "./visual/LineIcons";
import { Accent } from "./visual/Rich";

export default function Writers() {
  const featured = writers.filter((w) => w.featured && w.photo);

  return (
    <section id="writers" aria-labelledby="writers-heading" className="overflow-hidden py-16 lg:py-20">
      <div className="wrap max-w-[1120px]">
        <div className="max-w-[720px]">
          <p className="eyebrow"><span className="eyebrow-dot" />Meet Our Resume Writing Experts</p>
          <h2
            id="writers-heading"
            className="mt-3 font-serif text-[30px] font-medium leading-[1.18] tracking-[-0.02em] text-navy sm:text-[40px]"
          >
            Experienced professionals dedicated to helping job seekers communicate their value with <Accent>clarity</Accent> and confidence.
          </h2>
        </div>
      </div>

      <ul
        aria-label="Featured writers"
        className="mx-auto mt-10 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-10 pt-4 [scrollbar-width:none] sm:grid sm:w-[min(1120px,calc(100%-40px))] sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:w-[min(1160px,calc(100%-80px))] lg:grid-cols-3 [&::-webkit-scrollbar]:hidden"
      >
        {featured.map((w) => (
          <li key={w.slug} className="w-[80%] max-w-[320px] shrink-0 snap-center sm:w-auto sm:max-w-none">
            <a
              href={`/writers#${w.slug}`}
              data-tilt="5"
              className="glass-card group relative flex h-full flex-col items-center rounded-[28px] px-6 pb-7 pt-8 text-center"
            >
              <span className="frame-layered relative block h-[136px] w-[136px] rounded-[30px]">
                <span className="relative block h-full w-full overflow-hidden rounded-[30px] bg-white shadow-[0_18px_34px_-18px_rgba(20,56,92,0.6)] ring-[3px] ring-white">
                  <Image
                    src={w.photo as string}
                    alt={`Portrait of ${w.name}`}
                    fill
                    sizes="136px"
                    className="object-cover transition duration-700 ease-sky group-hover:scale-[1.04]"
                  />
                </span>
                <span className="absolute -bottom-2 -right-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sky-ink shadow-[0_8px_16px_-8px_rgba(36,96,150,0.6)] ring-1 ring-[#dbe9f4]">
                  <PenNibLine className="h-[17px] w-[17px]" />
                </span>
              </span>
              <span className="mt-6 block font-serif text-[20px] font-medium leading-tight text-navy">{w.name}</span>
              <span className="mt-2 inline-flex items-center rounded-full bg-[#e7f2fa] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-ink ring-1 ring-[#d3e5f3]">
                {w.cardRole}
              </span>
              <span className="mt-4 block text-[13.5px] leading-[1.6] text-ink-muted">{w.summary}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="wrap max-w-[1120px]">
        <a href="/writers" className="btn-line">
          Meet the writing team
          <PlaneLine className="h-4 w-4 rotate-45" />
        </a>
      </div>
    </section>
  );
}
