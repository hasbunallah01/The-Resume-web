const steps = [
  { n: "01", title: "We Review Your Request", text: "We learn about your current career situation and what you're looking to accomplish." },
  { n: "02", title: "We Learn About Your Goals", text: "We discuss your target role, industry, experience and career direction." },
  { n: "03", title: "We Recommend the Right Service", text: "If you're unsure which Veylora service fits your needs, we'll explain the available options." },
  { n: "04", title: "We Begin Your Project", text: "Once everything is confirmed, your Veylora project can begin." },
];

export default function Process() {
  return (
    <section aria-labelledby="process-heading" className="wrap py-16 lg:py-24">
      <p className="eyebrow">What happens after you contact us?</p>
      <h2
        id="process-heading"
        className="mt-3 font-serif text-[32px] font-medium leading-tight tracking-[-0.02em] text-navy sm:text-[42px]"
      >
        A Simple, Supportive Process
      </h2>
      <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ n, title, text }) => (
          <li key={n} className="border-t border-[#d5e4f0] pt-5">
            <span className="font-serif text-[14px] italic text-sky-ink">{n}</span>
            <h3 className="mt-3 font-serif text-[22px] font-medium leading-snug text-navy">{title}</h3>
            <p className="mt-2 text-[14.5px] leading-[1.7] text-ink-muted">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
