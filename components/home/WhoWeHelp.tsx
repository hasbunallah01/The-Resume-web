import {
  CompassIcon,
  CrownIcon,
  GlobeIcon,
  GraduationCapIcon,
  TargetIcon,
} from "../resumes/ResumeIcons";

const groups = [
  {
    Icon: GraduationCapIcon,
    title: "Early Career",
    text: "Build a strong professional foundation from your education, early experience, and emerging skills.",
  },
  {
    Icon: TargetIcon,
    title: "Mid-Career",
    text: "Position your experience clearly for your next opportunity.",
  },
  {
    Icon: CrownIcon,
    title: "Leadership",
    text: "Present years of responsibility and leadership with appropriate professional positioning.",
  },
  {
    Icon: CompassIcon,
    title: "Career Change",
    text: "Connect your existing experience to a new professional direction.",
  },
  {
    Icon: GlobeIcon,
    title: "International Professionals",
    text: "Present your experience clearly for opportunities across different markets.",
  },
];

export default function WhoWeHelp() {
  return (
    <section aria-labelledby="who-we-help-heading" className="bg-ivory">
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[80px]">
        <h2
          id="who-we-help-heading"
          className="mx-auto max-w-[720px] text-center font-serif text-[30px] font-[500] leading-[1.2] tracking-[-0.012em] text-navy sm:text-[38px] lg:text-[42px]"
        >
          Wherever You Are in Your Career, Your Story Matters.
        </h2>

        <ul className="mt-11 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
          {groups.map(({ Icon, title, text }) => (
            <li
              key={title}
              className="rounded-[4px] border border-[#e4dfd0] bg-white p-6 shadow-[0_2px_12px_rgba(11,42,70,0.04)]"
            >
              <span className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#d9d2bd] bg-[#faf8f2] text-navy">
                <Icon className="h-[21px] w-[21px]" />
              </span>
              <h3 className="mt-4 text-[15.5px] font-semibold leading-[1.35] text-navy">
                {title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.65] text-ink-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
