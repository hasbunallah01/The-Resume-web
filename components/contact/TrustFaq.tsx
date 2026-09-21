import { ChatIcon, CheckCircleIcon, PersonIcon, PlusIcon } from "../resumes/ResumeIcons";

const trust = [
  { Icon: ChatIcon, title: "Professional Communication", text: "Clear communication throughout your project." },
  { Icon: PersonIcon, title: "Personalized Service", text: "Your documents are built around your career story." },
  { Icon: CheckCircleIcon, title: "Human Collaboration", text: "You work with a real member of the Veylora team." },
];

const faqs = [
  {
    q: "How quickly will I receive a response?",
    a: "We'll respond to your inquiry as soon as possible, and let you know what to expect next.",
  },
  {
    q: "Can I contact Veylora if I don't know which service I need?",
    a: "Yes. Tell us about your career situation and what you're hoping to accomplish, and we'll help you identify the right service.",
  },
  {
    q: "Can I send my existing resume for review?",
    a: "Yes. You can upload your current resume with the contact form, and we'll use it to understand your background.",
  },
  {
    q: "Do you work with executives and C-suite professionals?",
    a: "Yes. Veylora supports professionals, managers and executives, including senior and C-suite leaders.",
  },
  {
    q: "Can I request a consultation before purchasing a package?",
    a: "Yes. Use the form to tell us what you need, and we'll talk through the right next step with you before you commit.",
  },
];

export default function TrustFaq() {
  return (
    <section
      aria-labelledby="care-heading"
      className="border-t border-[#e9e4d6] bg-[#f3efe4]"
    >
      <div className="mx-auto grid w-[min(1232px,calc(100%-48px))] gap-14 py-14 lg:grid-cols-[1fr_1fr] lg:gap-[88px] lg:py-[84px]">
        <div>
          <h2
            id="care-heading"
            className="font-serif text-[30px] font-[500] leading-[1.18] tracking-[-0.012em] text-navy sm:text-[36px] lg:text-[40px]"
          >
            Your career information deserves to be handled with care.
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-0">
            {trust.map(({ Icon, title, text }, i) => (
              <li
                key={title}
                className={`sm:px-5 ${i === 0 ? "sm:pl-0" : "sm:border-l sm:border-[#dcd6c6]"}`}
              >
                <span className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#d9d0b8] bg-white text-navy">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <h3 className="mt-4 text-[14.5px] font-semibold leading-[1.35] text-navy">
                  {title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-ink-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[#8a6d3a]">
            <span aria-hidden="true" className="h-px w-[44px] bg-gold" />
            Frequently asked questions
          </p>
          <h2 className="mt-4 font-serif text-[30px] font-[500] leading-[1.15] text-navy sm:text-[36px]">
            Quick Answers
          </h2>
          <div className="mt-7 border-t border-[#d9d2bd]">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-[#d9d2bd]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[18px] text-[15.5px] font-medium text-navy transition-colors hover:text-navy-btn [&::-webkit-details-marker]:hidden">
                  {q}
                  <PlusIcon className="h-[18px] w-[18px] shrink-0 text-[#8a6d3a] transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="pb-5 pr-10 text-[14.5px] leading-[1.7] text-ink-muted">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
