import { DocIcon, HeartIcon, PersonIcon, TargetIcon } from "../resumes/ResumeIcons";

const pillars = [
  {
    Icon: HeartIcon,
    title: "Human Expertise",
    text: "Real people who take the time to understand your career.",
  },
  {
    Icon: TargetIcon,
    title: "Strategic Positioning",
    text: "Focus on how your experience is communicated, not simply listed.",
  },
  {
    Icon: PersonIcon,
    title: "Personal Attention",
    text: "Your career history and goals shape the work.",
  },
  {
    Icon: DocIcon,
    title: "Professional Presentation",
    text: "Clear, polished documents designed to represent you professionally.",
  },
];

export default function WhyVeylora() {
  return (
    <section
      aria-labelledby="why-veylora-heading"
      className="border-y border-[#e9e4d6] bg-[#f3efe4]"
    >
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[80px]">
        <h2
          id="why-veylora-heading"
          className="mx-auto max-w-[720px] text-center font-serif text-[30px] font-[500] leading-[1.2] tracking-[-0.012em] text-navy sm:text-[38px] lg:text-[42px]"
        >
          Because Your Career Story Deserves Thoughtful Presentation.
        </h2>

        <ul className="mx-auto mt-11 grid max-w-[760px] gap-5 sm:grid-cols-2 lg:mt-14">
          {pillars.map(({ Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-[4px] border border-[#e4dfd0] bg-white p-6 shadow-[0_2px_12px_rgba(11,42,70,0.04)]"
            >
              <span className="inline-flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#d9d2bd] bg-[#faf8f2] text-navy">
                <Icon className="h-[21px] w-[21px]" />
              </span>
              <div>
                <h3 className="text-[15.5px] font-semibold leading-[1.35] text-navy">{title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-[1.65] text-ink-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
