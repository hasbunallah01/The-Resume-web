import PaperFlight from "./visual/PaperFlight";
import SkyBand from "./visual/SkyBand";
import { ArrowIcon, CompassMark, DocMark, QuillMark, ShieldMark, Spark } from "./visual/Marks";

const cards = [
  {
    title: "Professional Documents",
    text: "Polished, ATS-friendly resumes crafted with precision and care.",
    Icon: DocMark,
  },
  {
    title: "Thoughtful Writing",
    text: "We take the time to understand your story and highlight your value.",
    Icon: QuillMark,
  },
  {
    title: "Career Focused Strategy",
    text: "Resumes tailored to your goals, industry, and next big opportunity.",
    Icon: CompassMark,
  },
];

export default function Hero() {
  return (
    <SkyBand dense className="pb-6 pt-2 sm:pb-10 lg:pb-14">
      <section aria-labelledby="hero-heading" className="wrap">
        <div className="grid items-center gap-2 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-4">
          <div className="max-w-[640px] pt-4 lg:pt-6">
            <p className="eyebrow">
              <Spark className="h-3.5 w-3.5 text-[#7eb4dc]" />
              Professional Resume Writing
            </p>
            <h1
              id="hero-heading"
              className="mt-4 font-serif text-[2.15rem] font-medium leading-[1.08] tracking-[-0.02em] text-[#142848] sm:text-[3.15rem] lg:text-[3.85rem] xl:text-[4.15rem] xl:leading-[1.04]"
            >
              Your Career Deserves
              <span className="sm:block"> a Resume That Does</span>
              <span className="sm:block"> You Justice.</span>
            </h1>
            <p className="mt-5 max-w-[440px] text-[16.5px] leading-[1.65] text-[#3e5874] sm:text-[17.5px]">
              Thoughtful writing. Strategic storytelling. Resumes that open doors and elevate careers.
            </p>
            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href="/contact" className="btn-white">
                Start My Resume
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <p className="flex items-center gap-3 text-[13.5px] leading-snug text-[#3e5874]">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#3d7eae] shadow-sm ring-1 ring-white">
                  <ShieldMark className="h-5 w-5" />
                </span>
                <span>
                  Trusted by professionals
                  <br />
                  at every stage of their journey.
                </span>
              </p>
            </div>
          </div>

          <PaperFlight />
        </div>

        <ul className="relative z-10 mt-2 grid gap-4 sm:mt-4 md:grid-cols-3 lg:mt-1">
          {cards.map(({ title, text, Icon }) => (
            <li key={title} className="paper flex gap-4 rounded-[22px] bg-white/95 p-5 shadow-paper ring-1 ring-white sm:p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f3fb] text-[#3a7eb4]">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-serif text-[19px] font-medium leading-tight text-[#142848]">{title}</h2>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-[#5a7188]">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 flex items-center justify-center gap-4 text-center font-serif text-[18px] italic text-[#3d5874] sm:text-[20px]">
          <span aria-hidden="true" className="hidden h-px w-16 bg-gradient-to-r from-transparent to-[#9ec0da] sm:block" />
          <Spark className="h-3.5 w-3.5 text-[#8ebfe0]" />
          Let&rsquo;s tell your story. Let&rsquo;s build your future.
          <Spark className="h-3.5 w-3.5 text-[#8ebfe0]" />
          <span aria-hidden="true" className="hidden h-px w-16 bg-gradient-to-l from-transparent to-[#9ec0da] sm:block" />
        </p>
      </section>
    </SkyBand>
  );
}
