import { CompassLine, FlagLine, GlobeLine, LadderLine, PlaneLine } from "../visual/LineIcons";
import { Accent, IconTile } from "../visual/Rich";

const groups = [
  {
    title: "Early Career",
    text: "Build a strong professional foundation from your education, early experience, and emerging skills.",
    Icon: PlaneLine,
  },
  {
    title: "Mid-Career",
    text: "Position your experience clearly for your next opportunity.",
    Icon: LadderLine,
  },
  {
    title: "Leadership",
    text: "Present years of responsibility and leadership with appropriate professional positioning.",
    Icon: FlagLine,
  },
  {
    title: "Career Change",
    text: "Connect your existing experience to a new professional direction.",
    Icon: CompassLine,
  },
  {
    title: "International Professionals",
    text: "Present your experience clearly for opportunities across different markets.",
    Icon: GlobeLine,
  },
];

const tilts = ["-rotate-[1.4deg]", "rotate-[1.1deg]", "-rotate-[0.8deg]", "rotate-[1.4deg]", "-rotate-[1.1deg]"];

export default function WhoWeHelp() {
  return (
    <section aria-labelledby="who-we-help-heading" className="skywash overflow-hidden py-16 lg:py-20">
      <div className="wrap">
        <p className="eyebrow"><span className="eyebrow-dot" />Who we help</p>
        <h2
          id="who-we-help-heading"
          className="mt-3 max-w-[680px] font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[42px]"
        >
          Wherever You Are in Your Career, Your <Accent>Story</Accent> Matters.
        </h2>
      </div>
      {/* Phones: a swipeable row of paper sheets. Desktop: an even grid. */}
      <ul
        aria-label="Career stages we help"
        className="mx-auto mt-10 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-8 pt-3 [scrollbar-width:none] sm:px-[max(20px,calc((100%-1120px)/2))] lg:grid lg:w-[min(1160px,calc(100%-80px))] lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {groups.map(({ title, text, Icon }, i) => (
          <li key={title} className="w-[76%] max-w-[300px] shrink-0 snap-center sm:w-[42%] lg:w-auto lg:max-w-none">
            <div
              className={`sheet h-full rounded-[22px] p-6 shadow-[inset_0_1px_0_#fff,0_24px_44px_-26px_rgba(28,72,112,0.45),0_6px_14px_-8px_rgba(28,72,112,0.18)] ring-1 ring-white transition duration-700 ease-sky hover:rotate-0 hover:-translate-y-1 ${tilts[i % tilts.length]}`}
            >
              <IconTile Icon={Icon} />
              <h3 className="mt-5 font-serif text-[22px] font-medium leading-tight text-navy">{title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{text}</p>
            </div>
          </li>
        ))}
      </ul>
      <p aria-hidden="true" className="wrap -mt-2 flex items-center gap-2 text-[12px] text-ink-soft lg:hidden">
        <PlaneLine className="h-3.5 w-3.5 rotate-45" /> Swipe to see more
      </p>
    </section>
  );
}
