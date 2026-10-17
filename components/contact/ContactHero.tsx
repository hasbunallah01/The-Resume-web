import SkyBand from "../visual/SkyBand";

export default function ContactHero() {
  return (
    <SkyBand dense>
      <section aria-labelledby="contact-heading" className="wrap pb-6 pt-12 lg:pb-4 lg:pt-16">
        <p className="eyebrow">Contact Us</p>
        <h1
          id="contact-heading"
          className="mt-4 max-w-[760px] font-serif text-[40px] font-medium leading-[1.06] tracking-[-0.02em] text-navy sm:text-[52px]"
        >
          Let&rsquo;s Start Your Next Career Move
        </h1>
        <p className="mt-6 max-w-[540px] text-[17px] leading-[1.7] text-ink-body">
          Whether you&rsquo;re looking for a stronger resume, a complete
          personal brand makeover, or executive career support, we&rsquo;re
          here to help. Tell us where you are in your career and where you
          want to go.
        </p>
        <a href="#form" className="btn-white mt-8">
          Start a Conversation
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 2.5v11M3.5 9 8 13.5 12.5 9" />
          </svg>
        </a>
      </section>
    </SkyBand>
  );
}
