import { ArrowIcon } from "../visual/Marks";
import { NavyBand, PlaneTrail } from "../visual/Rich";

export default function ContactCTA() {
  return (
    <section aria-labelledby="contact-cta-heading" className="wrap py-16 lg:py-20">
      <NavyBand
        as="div"
        clouds
        className="rounded-[32px] px-7 pb-24 pt-12 text-center shadow-[0_40px_80px_-40px_rgba(14,29,54,0.7)] sm:px-12"
      >
        <PlaneTrail light className="absolute left-4 top-5 w-[150px] -scale-x-100 sm:left-10 sm:w-[230px]" />
        <h2
          id="contact-cta-heading"
          className="relative font-serif text-[32px] font-medium leading-tight sm:text-[42px]"
        >
          Ready to put your experience into <span className="italic text-[#cfe7fb]">words?</span>
        </h2>
        <p className="relative mt-4 text-[16px] text-white/75">Start the conversation with Veylora today.</p>
        <a href="#form" className="btn-white relative mt-8">
          Contact Veylora
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </NavyBand>
    </section>
  );
}
