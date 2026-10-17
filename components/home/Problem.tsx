import { Accent, FlightSteps } from "../visual/Rich";

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
    <section aria-labelledby="problem-heading" className="gridpaper pb-16 pt-4 lg:pb-24">
      <div className="wrap grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow"><span className="eyebrow-dot" />Sound familiar?</p>
          <h2
            id="problem-heading"
            className="mt-3 max-w-[720px] font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.02em] text-navy sm:text-[44px]"
          >
            Your Experience Deserves More Than a <Accent>Generic</Accent> Resume.
          </h2>
        </div>
        <FlightSteps steps={points} numerals cols={1} />
      </div>
    </section>
  );
}
