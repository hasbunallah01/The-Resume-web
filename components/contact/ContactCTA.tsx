import Image from "next/image";
import { ArrowRight } from "../Icons";

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="relative overflow-hidden bg-navy-deep text-white"
    >
      <Image
        src="/images/mission.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0b2f4b]/70" />
      <div className="relative mx-auto w-[min(1232px,calc(100%-48px))] py-14 text-center lg:py-[76px]">
        <h2
          id="contact-cta-heading"
          className="font-serif text-[30px] font-[500] leading-[1.18] tracking-[-0.01em] sm:text-[38px] lg:text-[42px]"
        >
          Ready to put your experience into words?
        </h2>
        <p className="mt-4 text-[16px] text-white/85">
          Start the conversation with Veylora today.
        </p>
        <a
          href="#form"
          className="mt-8 inline-flex h-[52px] items-center gap-2.5 rounded-[4px] bg-gold px-8 text-[14.5px] font-medium text-white transition-colors hover:bg-[#a5895f]"
        >
          Contact Veylora
          <ArrowRight className="h-[15px] w-[15px]" />
        </a>
      </div>
    </section>
  );
}
