import { CheckCircleIcon, CompassIcon, PersonIcon, TargetIcon } from "../resumes/ResumeIcons";

const points = [
  {
    n: "01",
    Icon: CompassIcon,
    title: "Industry Perspective",
    text: "Experience working with professionals across different industries, career stages, and professional backgrounds.",
  },
  {
    n: "02",
    Icon: PersonIcon,
    title: "Human-Centered Writing",
    text: "Your resume should sound like you, not like a generic template or an automatically generated document.",
  },
  {
    n: "03",
    Icon: TargetIcon,
    title: "Strategic Positioning",
    text: "We focus on the accomplishments, strengths, and experience that matter most to the opportunities you're pursuing.",
  },
  {
    n: "04",
    Icon: CheckCircleIcon,
    title: "Detail & Precision",
    text: "From wording and structure to formatting and consistency, every part of your document receives careful attention.",
  },
];

export default function TeamTrust() {
  return (
    <section
      aria-labelledby="team-trust-heading"
      className="border-y border-[#e9e4d6] bg-[#f3efe4]"
    >
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[84px]">
        <div className="max-w-[720px]">
          <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[#8a6d3a]">
            <span aria-hidden="true" className="h-px w-[44px] bg-gold" />
            The people behind your career story
          </p>
          <h2
            id="team-trust-heading"
            className="mt-4 font-serif text-[30px] font-[500] leading-[1.18] tracking-[-0.012em] text-navy sm:text-[36px] lg:text-[40px]"
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

        <p className="mt-11 text-[13px] font-semibold uppercase tracking-[0.14em] text-navy lg:mt-14">
          What our writing team brings to every project
        </p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {points.map(({ n, Icon, title, text }, i) => (
            <li
              key={n}
              className={`lg:pr-7 ${i > 0 ? "lg:border-l lg:border-[#dcd6c6] lg:pl-7" : ""}`}
            >
              <div className="flex items-center gap-3.5">
                <span className="font-serif text-[14px] italic text-gold">{n}</span>
                <Icon className="h-[26px] w-[26px] text-navy" />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-ink-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
