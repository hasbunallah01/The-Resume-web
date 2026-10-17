const points = [
  {
    n: "01",
    title: "Your Experience Isn't Coming Through",
    text: "You have valuable experience, but your current resume may not communicate it clearly.",
  },
  {
    n: "02",
    title: "Your Story Feels Too Generic",
    text: "A list of responsibilities doesn't always show what makes your professional journey distinctive.",
  },
  {
    n: "03",
    title: "You're Making a Career Move",
    text: "Career changes, promotions, and leadership transitions require thoughtful positioning.",
  },
  {
    n: "04",
    title: "You Need Someone Who Understands the Difference",
    text: "Professional career documents require more than formatting. They require clarity, structure, and intentional storytelling.",
  },
];

export default function Problem() {
  return (
    <section aria-labelledby="problem-heading" className="wrap pb-16 lg:pb-24">
      <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <h2
          id="problem-heading"
          className="max-w-[720px] font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.02em] text-navy sm:text-[44px] lg:col-span-2"
        >
          Your Experience Deserves More Than a Generic Resume.
        </h2>
      </div>

      <ol className="mt-10 border-t border-[#d5e4f0]">
        {points.map((point) => (
          <li
            key={point.n}
            className="grid gap-3 border-b border-[#d5e4f0] py-6 sm:grid-cols-[72px_minmax(0,280px)_1fr] sm:items-baseline sm:gap-6"
          >
            <span className="font-serif text-[20px] italic text-sky-ink">{point.n}</span>
            <h3 className="font-serif text-[22px] font-medium leading-snug text-navy">{point.title}</h3>
            <p className="text-[15px] leading-[1.65] text-ink-muted">{point.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
