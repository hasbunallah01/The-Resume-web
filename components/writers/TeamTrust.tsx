const points = [
  {
    n: "01",
    title: "Industry Perspective",
    text: "Experience working with professionals across different industries, career stages, and professional backgrounds.",
  },
  {
    n: "02",
    title: "Human-Centered Writing",
    text: "Your resume should sound like you, not like a generic template or an automatically generated document.",
  },
  {
    n: "03",
    title: "Strategic Positioning",
    text: "We focus on the accomplishments, strengths, and experience that matter most to the opportunities you're pursuing.",
  },
  {
    n: "04",
    title: "Detail & Precision",
    text: "From wording and structure to formatting and consistency, every part of your document receives careful attention.",
  },
];

export default function TeamTrust() {
  return (
    <section aria-labelledby="team-trust-heading" className="wrap py-16 lg:py-24">
      <div className="max-w-[720px]">
        <p className="eyebrow">The people behind your career story</p>
        <h2
          id="team-trust-heading"
          className="mt-3 font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[40px]"
        >
          Experienced writers. Thoughtful strategy. One goal.
        </h2>
        <p className="mt-5 text-[16px] leading-[1.75] text-ink-body">
          Your career deserves more than a resume template. Our writers take
          the time to understand your experience, identify the value behind
          your accomplishments, and turn your professional history into a
          clear story that feels genuinely yours.
        </p>
      </div>

      <p className="mt-12 text-[13px] font-semibold uppercase tracking-[0.14em] text-navy">
        What our writing team brings to every project
      </p>
      <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ n, title, text }) => (
          <li key={n} className="border-t border-[#d5e4f0] pt-5">
            <span className="font-serif text-[14px] italic text-sky-ink">{n}</span>
            <h3 className="mt-2 font-serif text-[20px] font-medium text-navy">{title}</h3>
            <p className="mt-2 text-[14.5px] leading-[1.65] text-ink-muted">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
