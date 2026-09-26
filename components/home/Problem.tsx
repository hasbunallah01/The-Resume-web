import { CompassIcon, DocIcon, PencilIcon, TargetIcon } from "../resumes/ResumeIcons";

const points = [
  {
    Icon: DocIcon,
    title: "Your Experience Isn't Coming Through",
    text: "You have valuable experience, but your current resume may not communicate it clearly.",
  },
  {
    Icon: PencilIcon,
    title: "Your Story Feels Too Generic",
    text: "A list of responsibilities doesn't always show what makes your professional journey distinctive.",
  },
  {
    Icon: CompassIcon,
    title: "You're Making a Career Move",
    text: "Career changes, promotions, and leadership transitions require thoughtful positioning.",
  },
  {
    Icon: TargetIcon,
    title: "You Need Someone Who Understands the Difference",
    text: "Professional career documents require more than formatting. They require clarity, structure, and intentional storytelling.",
  },
];

export default function Problem() {
  return (
    <section aria-labelledby="problem-heading" className="bg-ivory">
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[80px]">
        <h2
          id="problem-heading"
          className="mx-auto max-w-[720px] text-center font-serif text-[30px] font-[500] leading-[1.2] tracking-[-0.012em] text-navy sm:text-[38px] lg:text-[42px]"
        >
          Your Experience Deserves More Than a Generic Resume.
        </h2>

        <ul className="mt-11 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {points.map(({ Icon, title, text }) => (
            <li
              key={title}
              className="rounded-[4px] border border-[#e4dfd0] bg-white p-6 shadow-[0_2px_14px_rgba(11,42,70,0.04)]"
            >
              <span className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#ddd5be] bg-[#faf8f2] text-navy">
                <Icon className="h-[22px] w-[22px]" />
              </span>
              <h3 className="mt-4 text-[15.5px] font-semibold leading-[1.35] text-navy">
                {title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
