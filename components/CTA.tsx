import { ArrowIcon } from "./visual/Marks";

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="wrap py-16 lg:py-20">
      <div className="flex flex-col items-start justify-between gap-8 rounded-[32px] bg-[#102038] px-7 py-10 text-white shadow-lift sm:px-12 lg:flex-row lg:items-center">
        <div>
          <h2 id="cta-heading" className="font-serif text-[32px] font-medium leading-[1.15] sm:text-[40px]">
            Ready to take the next step
            <br className="hidden sm:block" /> in your career?
          </h2>
          <p className="mt-3 text-[15.5px] text-white/75">
            Let&rsquo;s create career documents that work as hard as you do.
          </p>
        </div>
        <a href="/contact" className="btn-white shrink-0">
          Get Started
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
