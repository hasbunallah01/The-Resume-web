import Image from "next/image";
import { ArrowRight } from "./Icons";

export default function Founder() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="bg-ivory py-12 lg:h-[422px] lg:py-0"
    >
      <div className="mx-auto grid h-full w-[min(1232px,calc(100%-48px))] items-center gap-8 lg:grid-cols-[485px_1fr] lg:gap-[54px] lg:pl-[17px]">
        <div className="relative aspect-[692/508] w-full overflow-hidden lg:h-[357px] lg:w-[485px]">
          <Image
            src="/images/founder.jpg"
            alt="Daramola Qudus Abolaji, founder of Veylora"
            fill
            sizes="(min-width: 1024px) 485px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-[560px] lg:pt-[18px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1d4468] lg:text-[12px]">
            Founder, Veylora
          </p>
          <h2
            id="founder-heading"
            className="mt-[10px] font-serif text-[30px] font-normal leading-[1.15] tracking-[-0.005em] text-[#0b2a46] lg:text-[38.2px]"
          >
            Daramola Qudus Abolaji
          </h2>
          <p className="mt-[17px] max-w-[548px] text-[16.1px] leading-[24.8px] text-ink-body">
            I&rsquo;m Daramola Qudus Abolaji, the founder of Veylora. With a
            strong background in career development and a deep understanding of
            what employers look for, I started Veylora to help job seekers
            present their experience, skills, and achievements in the best
            possible way.
          </p>
          <p className="mt-[17px] max-w-[548px] text-[16.1px] leading-[24.8px] text-ink-body">
            My goal is simple &mdash; to make high-quality, professional career
            documents accessible to everyone, and to support individuals at
            every stage of their career journey.
          </p>
          <a
            href="/about"
            className="mt-[18px] inline-flex h-[44px] w-[191px] items-center justify-center gap-[12px] rounded-[4px] bg-navy-dark text-[14px] font-medium text-white transition-colors hover:bg-[#0a2a42]"
          >
            Meet the Founder
            <ArrowRight className="h-[16px] w-[16px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
