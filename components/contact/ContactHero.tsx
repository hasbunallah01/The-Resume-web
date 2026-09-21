import Image from "next/image";

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-ivory"
    >
      <div className="mx-auto w-[min(1232px,calc(100%-48px))]">
        <div className="relative z-10 py-14 lg:flex lg:min-h-[420px] lg:w-[46%] lg:flex-col lg:justify-center lg:py-[64px] lg:pr-6">
          <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[#8a6d3a]">
            <span aria-hidden="true" className="h-px w-[44px] bg-gold" />
            Contact Us
          </p>
          <h1
            id="contact-heading"
            className="mt-5 font-serif text-[38px] font-[500] leading-[1.08] tracking-[-0.016em] text-navy sm:text-[48px] lg:text-[56px]"
          >
            Let&rsquo;s Start Your Next Career Move
          </h1>
          <p className="mt-6 max-w-[520px] text-[16.5px] leading-[1.75] text-ink-body">
            Whether you&rsquo;re looking for a stronger resume, a complete
            personal brand makeover, or executive career support, we&rsquo;re
            here to help. Tell us where you are in your career and where you
            want to go.
          </p>
          <a
            href="#form"
            className="mt-8 inline-flex h-[52px] w-fit items-center gap-2.5 rounded-[4px] bg-gold px-7 text-[14.5px] font-medium text-white transition-colors hover:bg-[#a5895f]"
          >
            Start a Conversation
            <svg viewBox="0 0 16 16" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 2.5v11M3.5 9 8 13.5 12.5 9" />
            </svg>
          </a>
        </div>
      </div>

      <div className="relative aspect-[16/8] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[52%]">
        <Image
          src="/images/contact-hero.jpg"
          alt="Laptop, notebook and a Veylora mug on a desk"
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-[90px] bg-gradient-to-r from-[#f7f6f1] to-transparent lg:block"
        />
      </div>
    </section>
  );
}
