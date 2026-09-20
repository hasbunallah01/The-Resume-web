import { ArrowRight } from "./Icons";

function LeafOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 68"
      fill="none"
      stroke="#b39669"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 66C6 66 12 65 20 63 44 58 78 38 90 3 60 8 30 24 21 48c-3 7-1 14 4 14" />
      <path d="M90 3C66 20 44 36 8 65" />
      <path d="M33 58c3 2 8 0 10-3" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-navy-deep text-white lg:h-[108px]"
    >
      <div className="relative mx-auto flex w-[min(1232px,calc(100%-48px))] flex-col items-start gap-6 py-10 lg:h-full lg:flex-row lg:items-center lg:gap-0 lg:py-0 lg:pl-[56px]">
        <div className="lg:mt-[1px]">
          <h2
            id="cta-heading"
            className="font-serif text-[25px] font-normal leading-[25px] tracking-[-0.005em]"
          >
            Ready to take the next step
            <br /> in your career?
          </h2>
          <p className="mt-[6px] text-[12.3px] leading-[17px] text-white/95">
            Let&rsquo;s create career documents that work as hard as you do.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex h-[42px] w-[176px] items-center justify-center gap-[10px] rounded-[4px] bg-gold text-[14px] font-medium text-white transition-colors hover:bg-[#a5895f] lg:absolute lg:left-[897px] lg:top-[32px]"
        >
          Get Started
          <ArrowRight className="h-[15px] w-[15px]" />
        </a>
        <LeafOutline className="hidden h-[67px] w-[95px] lg:absolute lg:right-[6px] lg:top-[21px] lg:block" />
      </div>
    </section>
  );
}
