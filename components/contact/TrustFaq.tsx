const trust = [
  { title: "Professional Communication", text: "Clear communication throughout your project." },
  { title: "Personalized Service", text: "Your documents are built around your career story." },
  { title: "Human Collaboration", text: "You work with a real member of the Veylora team." },
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
    <section aria-labelledby="care-heading" className="wrap grid gap-14 py-8 lg:grid-cols-2 lg:gap-16 lg:py-12">
      <div>
        <h2
          id="care-heading"
          className="font-serif text-[30px] font-medium leading-[1.18] tracking-[-0.02em] text-navy sm:text-[36px]"
        >
          Your career information deserves to be handled with care.
        </h2>
        <ul className="mt-8 space-y-6">
          {trust.map(({ title, text }) => (
            <li key={title} className="border-l-2 border-[#b7d4ea] pl-5">
              <h3 className="font-serif text-[20px] font-medium text-navy">{title}</h3>
              <p className="mt-1 text-[14.5px] leading-[1.6] text-ink-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="paper rounded-[28px] bg-white/85 px-5 shadow-paper ring-1 ring-white sm:px-7">
        <p className="eyebrow pt-6">Frequently asked questions</p>
        <h2 className="mt-3 font-serif text-[28px] font-medium text-navy">Quick Answers</h2>
        <div className="mt-2">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-[#e3eef6] last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-[15.5px] font-medium text-navy [&::-webkit-details-marker]:hidden">
                {q}
                <span className="text-[22px] font-light text-sky-ink transition group-open:rotate-45">+</span>
              </summary>
              <p className="pb-4 pr-8 text-[14.5px] leading-[1.7] text-ink-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
