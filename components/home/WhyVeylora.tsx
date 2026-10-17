const pillars = [
  {
    title: "Human Expertise",
    text: "Real people who take the time to understand your career.",
  },
  {
    title: "Strategic Positioning",
    text: "Focus on how your experience is communicated, not simply listed.",
  },
  {
    title: "Personal Attention",
    text: "Your career history and goals shape the work.",
  },
  {
    title: "Professional Presentation",
    text: "Clear, polished documents designed to represent you professionally.",
  },
];

export default function WhyVeylora() {
  return (
    <section aria-labelledby="why-veylora-heading" className="wrap py-16 lg:py-24">
      <div className="paper rounded-[32px] bg-white/80 p-6 shadow-paper ring-1 ring-white sm:p-10 lg:p-12">
        <h2
          id="why-veylora-heading"
          className="max-w-[680px] font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[40px]"
        >
          Because Your Career Story Deserves Thoughtful Presentation.
        </h2>
        <dl className="mt-10 grid gap-8 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-l-2 border-[#b7d4ea] pl-5">
              <dt className="font-serif text-[22px] font-medium text-navy">{pillar.title}</dt>
              <dd className="mt-2 text-[15px] leading-[1.65] text-ink-muted">{pillar.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
