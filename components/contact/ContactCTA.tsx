import { ArrowIcon } from "../visual/Marks";

export default function ContactCTA() {
  return (
    <section aria-labelledby="contact-cta-heading" className="wrap py-16 lg:py-20">
      <div className="rounded-[32px] bg-[#102038] px-7 py-12 text-center text-white shadow-lift sm:px-12">
        <h2
          id="contact-cta-heading"
          className="font-serif text-[32px] font-medium leading-tight sm:text-[40px]"
        >
          Ready to put your experience into words?
        </h2>
        <p className="mt-4 text-[16px] text-white/75">Start the conversation with Veylora today.</p>
        <a href="#form" className="btn-white mt-8">
          Contact Veylora
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
