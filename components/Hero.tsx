import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-ivory lg:h-[482px]"
    >
      <Image
        src="/images/hero.jpg"
        alt="Laptop, printed resume and pen on a wooden desk"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-ivory/80 lg:hidden" aria-hidden="true" />

      <div className="relative mx-auto w-[min(1232px,calc(100%-48px))] pb-14 pt-14 lg:pb-0 lg:pl-[14px] lg:pt-[70px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#1d4468] lg:text-[12.3px]">
          Professional Resume Writing &amp; Career Documents
        </p>
        <h1
          id="hero-heading"
          className="mt-[10px] max-w-[560px] font-serif text-[40px] font-[560] leading-[1.08] tracking-[-0.012em] text-[#0b2a46] sm:text-[48px] lg:text-[57.5px] lg:leading-[61.5px]"
        >
          Your Career Deserves
          <br className="hidden lg:inline" /> a Resume That Does
          <br className="hidden lg:inline" /> You Justice.
        </h1>
        <p className="mt-[9px] max-w-[486px] text-[16px] leading-[25px] text-ink-body lg:text-[16.3px]">
          Veylora creates professionally written, strategically structured
          resumes and career documents designed to present your experience with
          clarity, confidence, and impact.
        </p>
        <div className="mt-[26px] flex flex-wrap gap-[16px]">
          <a
            href="/contact"
            className="inline-flex h-[46px] w-[155px] items-center justify-center rounded-[4px] bg-navy-btn text-[14px] font-medium text-white transition-colors hover:bg-[#124666]"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="inline-flex h-[46px] w-[191px] items-center justify-center rounded-[4px] border border-[#86a0b3] bg-[#eff3f4] text-[14px] text-[#1d4468] transition-colors hover:bg-white"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
