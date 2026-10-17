const groups = [
  {
    title: "Early Career",
    text: "Build a strong professional foundation from your education, early experience, and emerging skills.",
  },
  {
    title: "Mid-Career",
    text: "Position your experience clearly for your next opportunity.",
  },
  {
    title: "Leadership",
    text: "Present years of responsibility and leadership with appropriate professional positioning.",
  },
  {
    title: "Career Change",
    text: "Connect your existing experience to a new professional direction.",
  },
  {
    title: "International Professionals",
    text: "Present your experience clearly for opportunities across different markets.",
  },
];

export default function WhoWeHelp() {
  return (
    <section aria-labelledby="who-we-help-heading" className="wrap py-8 lg:py-12">
      <h2
        id="who-we-help-heading"
        className="max-w-[680px] font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[42px]"
      >
        Wherever You Are in Your Career, Your Story Matters.
      </h2>
      <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {groups.map((group, i) => (
          <li key={group.title} className={i > 0 ? "lg:border-l lg:border-[#d5e4f0] lg:pl-6" : ""}>
            <h3 className="font-serif text-[22px] font-medium leading-tight text-navy">{group.title}</h3>
            <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{group.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
