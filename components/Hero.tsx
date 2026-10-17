import { getImageProps } from "next/image";
import { ArrowIcon, CompassSolid, DocSolid, QuillSolid, ShieldMark, Spark } from "./visual/Marks";

const cards = [
  {
    title: "Professional Documents",
    text: "Polished, ATS-friendly resumes crafted with precision and care.",
    Icon: DocSolid,
  },
  {
    title: "Thoughtful Writing",
    text: "We take the time to understand your story and highlight your value.",
    Icon: QuillSolid,
  },
  {
    title: "Career Focused Strategy",
    text: "Resumes tailored to your goals, industry, and next big opportunity.",
    Icon: CompassSolid,
  },
];

const BLUR =
  "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoQAAkAA4BaJY12ARgAiwAA/vEHso7QndrVE2I/sdZaYvdeJCDu4pm/8AA=";

/** Art directed sky: the 1080 file for small screens, the 1920 file for wide ones. */
function SkyArt({ className = "", mobile = false }: { className?: string; mobile?: boolean }) {
  const common = {
    alt: "",
    priority: true,
    placeholder: "blur" as const,
    blurDataURL: BLUR,
    quality: 85,
  };
  const {
    props: { srcSet: wide },
  } = getImageProps({ ...common, src: "/hero/sky-1920.webp", width: 1920, height: 1080, sizes: "100vw" });
  const {
    props: { srcSet: small, ...rest },
  } = getImageProps({ ...common, src: "/hero/sky-1080.webp", width: 1080, height: 608, sizes: "100vw" });

  return (
    <picture>
      {!mobile && <source media="(min-width: 1024px)" srcSet={wide} sizes="100vw" />}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...rest} srcSet={small} sizes="100vw" className={className} />
    </picture>
  );
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate -mt-[76px] overflow-hidden bg-[#d3e7f7] pt-[76px] lg:flex lg:min-h-[max(100svh,760px)] lg:max-h-[1040px] lg:flex-col"
    >
      {/* Desktop: full bleed sky behind everything */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden lg:block">
        <div className="absolute inset-0 motion-safe:animate-sky-drift">
          <SkyArt className="h-full w-full object-cover object-[62%_58%]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#e3f0fa]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_560px_at_14%_30%,rgba(247,251,254,0.72),rgba(247,251,254,0.28)_55%,transparent_75%)]" />
      </div>

      {/* Small screens: soft sky wash behind the copy */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f5f9fd_0%,#e8f2fb_28%,#d6e8f7_55%,#e2edf8_82%,#e6f0f9_100%)] lg:hidden"
      />

      <div className="hero-wrap relative flex flex-1 flex-col pb-6 lg:pb-[clamp(1.5rem,6.5vh,3.75rem)]">
        <div className="relative flex min-h-[calc(100svh-76px)] flex-col pt-7 sm:pt-10 lg:block lg:min-h-0 lg:pt-[clamp(1.5rem,7vh,4.5rem)]">
          <div className="max-w-[700px]">
          <p className="inline-flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.2em] text-[#4b8fd6] sm:text-[13px] lg:text-[clamp(12.5px,1.08vw,15.5px)]">
            <Spark className="h-[18px] w-[18px] text-[#7fb3e6]" />
            Professional Resume Writing
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-serif text-[length:min(calc((100vw-40px)/8.75),2.9rem)] font-[540] leading-[1.08] sm:whitespace-nowrap sm:leading-[1.06] tracking-[-0.018em] text-[#13254b] sm:text-[3.6rem] lg:mt-[clamp(0.9rem,2vh,1.5rem)] lg:text-[clamp(3.4rem,4.62vw,4.5rem)] lg:leading-[1.07]"
          >
            Your Career
            <br className="sm:hidden" /> Deserves
            <br className="hidden sm:inline" /> a Resume
            <br className="sm:hidden" /> That Does
            <br /> You Justice.
          </h1>
          <p className="mt-5 max-w-[470px] text-[17px] leading-[1.6] text-[#33496a] lg:mt-[clamp(0.85rem,1.8vh,1.25rem)] lg:text-[clamp(17px,1.32vw,19px)]">
            Thoughtful writing. Strategic storytelling. Resumes that open doors and elevate careers.
          </p>
          <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6 lg:mt-[clamp(1.4rem,3.2vh,2.25rem)]">
            <a
              href="/contact"
              className="group inline-flex h-[52px] items-center gap-3 rounded-full bg-white px-7 text-[16px] font-medium text-[#13254b] shadow-[0_14px_34px_rgba(32,78,128,0.16),0_2px_6px_rgba(32,78,128,0.06)] ring-1 ring-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(32,78,128,0.2)]"
            >
              Start My Resume
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="flex items-center gap-3.5 text-[14px] leading-[1.45] text-[#3a5172]">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/60 text-[#3f86cf] ring-1 ring-[#c9ddf1] backdrop-blur-sm">
                <ShieldMark className="h-6 w-6" />
              </span>
              <span>
                Trusted by professionals
                <br />
                at every stage of their journey.
              </span>
            </p>
          </div>
        </div>

          {/* Small screens: the same sky fills the first screen; the plane flies in the open space under the buttons */}
          <div aria-hidden="true" className="pointer-events-none relative min-h-[64vw] flex-1 sm:min-h-[46vw] lg:hidden">
            <div className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
              <div className="absolute left-[-58vw] top-[calc(50%-49.8vw)] aspect-[16/9] w-[175vw] sm:left-[-26vw] sm:top-[calc(50%-34.6vw)] sm:w-[125vw]">
                <div className="absolute inset-0 motion-safe:animate-sky-drift">
                  <SkyArt
                    mobile
                    className="h-full w-full object-cover [mask-image:linear-gradient(180deg,transparent_0%,#000_24%,#000_84%,transparent_100%)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mt-[14vw] w-full sm:-mt-[8vw] lg:mt-auto lg:max-w-[1210px] lg:pt-8">
          <ul className="grid gap-3.5 lg:grid-cols-3 lg:gap-4 xl:gap-5">
            {cards.map(({ title, text, Icon }) => (
              <li
                key={title}
                className="flex items-center gap-4 rounded-[20px] bg-white/[0.9] p-5 shadow-[0_18px_44px_rgba(36,86,138,0.12),0_2px_6px_rgba(36,86,138,0.05)] ring-1 ring-white backdrop-blur-[6px] sm:gap-5 lg:px-5 lg:py-5 xl:gap-[18px] xl:px-6"
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#f3f8fe,#dceaf9)] text-[#2f6fcc] ring-1 ring-[#e3eefa] xl:h-[72px] xl:w-[72px]">
                  <Icon className="h-7 w-7 xl:h-9 xl:w-9" />
                </span>
                <div>
                  <h2 className="font-serif text-[19px] font-medium leading-tight text-[#13254b] lg:text-[clamp(18px,1.6vw,23px)]">
                    {title}
                  </h2>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-[#4b6180] lg:text-[clamp(13.5px,1vw,15px)]">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-7 flex items-center justify-center gap-3 text-center font-serif text-[18px] italic text-[#2c4468] sm:gap-4 lg:mt-[clamp(1.25rem,3.4vh,2.25rem)] lg:text-[clamp(19px,1.6vw,23px)]">
            <span aria-hidden="true" className="hidden items-center sm:flex">
              <Spark className="h-3 w-3 text-[#5f97d3]" />
              <svg viewBox="0 0 80 12" className="ml-1 h-3 w-20 text-[#7aa6d2]" fill="none">
                <path d="M1 7.5c18 0 30-5 48-4.5 12 .3 20 2.6 30 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </span>
            Let&rsquo;s tell your story. Let&rsquo;s build your future.
            <span aria-hidden="true" className="hidden items-center sm:flex">
              <svg viewBox="0 0 80 12" className="mr-1 h-3 w-20 text-[#7aa6d2]" fill="none">
                <path d="M1 6c10-.4 18-2.7 30-3 18-.5 30 4.5 48 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <Spark className="h-3 w-3 text-[#5f97d3]" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
