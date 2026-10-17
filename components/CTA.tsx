import { ArrowIcon } from "./visual/Marks";
import { NavyBand, PlaneTrail } from "./visual/Rich";

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="wrap py-16 lg:py-20">
      <NavyBand
        as="div"
        clouds
        className="rounded-[32px] px-7 pb-20 pt-11 shadow-[0_40px_80px_-40px_rgba(14,29,54,0.7),0_16px_30px_-18px_rgba(14,29,54,0.4)] sm:px-12 lg:pb-24 lg:pt-14"
      >
        <PlaneTrail light className="absolute right-4 top-6 w-[170px] sm:right-10 sm:w-[260px]" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 id="cta-heading" className="max-w-[560px] font-serif text-[32px] font-medium leading-[1.15] sm:text-[42px]">
              Ready to take the next step
              <br className="hidden sm:block" /> in your <span className="italic text-[#cfe7fb]">career?</span>
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
      </NavyBand>
    </section>
  );
}
