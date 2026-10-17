import Image from "next/image";
import { sampleAlt, samples } from "@/data/samples";
import { ArrowIcon } from "../visual/Marks";

const fan = [
  "left-[4%] top-[10%] -rotate-[9deg] group-hover:-rotate-[12deg] group-hover:-translate-x-3",
  "left-1/2 top-0 z-10 -translate-x-1/2 group-hover:-translate-y-2",
  "right-[4%] top-[10%] rotate-[9deg] group-hover:rotate-[12deg] group-hover:translate-x-3",
];

export default function SamplesTeaser() {
  const picks = ["saas-account-executive", "human-resources-executive", "materials-engineer-early-career"]
    .map((slug) => samples.find((s) => s.slug === slug))
    .filter((s): s is (typeof samples)[number] => Boolean(s));
  // If the featured slugs ever change, fall back to the first entries so the stack stays full.
  const stack = picks.length >= 3 ? picks : samples.slice(0, 3);

  return (
    <section aria-labelledby="samples-teaser-heading" className="wrap pb-16 pt-2 lg:pb-20 lg:pt-4">
      <div className="paper grid items-center gap-10 overflow-hidden rounded-[30px] bg-white/80 px-6 py-10 shadow-paper ring-1 ring-white sm:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:px-14 lg:py-12">
        <div>
          <p className="eyebrow">Sample Work</p>
          <h2
            id="samples-teaser-heading"
            className="mt-3 font-serif text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-navy sm:text-[40px]"
          >
            See the Difference on the Page
          </h2>
          <p className="mt-4 max-w-[440px] text-[16px] leading-[1.7] text-ink-body">
            Browse resumes we have written for early career, mid level, senior and executive professionals, shown
            with personal details removed.
          </p>
          <a href="/samples" className="btn-navy mt-7">
            See Sample Work
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <a
          href="/samples"
          aria-label="See sample work"
          data-tilt="6"
          className="group relative mx-auto block aspect-[5/4] w-full max-w-[460px] rounded-[24px] bg-[linear-gradient(160deg,#e9f3fb,#d3e6f5)]"
        >
          {stack.map((s, i) => (
            <span
              key={s.slug}
              className={`absolute w-[44%] transition-transform duration-500 ease-out ${fan[i]}`}
            >
              <Image
                src={s.thumb.src}
                width={s.thumb.width}
                height={s.thumb.height}
                alt={sampleAlt(s)}
                sizes="(min-width: 1024px) 200px, 40vw"
                loading="lazy"
                className="h-auto w-full rounded-[4px] bg-white shadow-[0_20px_44px_rgba(20,56,92,0.2),0_2px_6px_rgba(20,56,92,0.08)] ring-1 ring-black/5"
              />
            </span>
          ))}
        </a>
      </div>
    </section>
  );
}
