import { lineIcons, type LineIconName } from "../visual/LineIcons";
import { FlightSteps, PlaneTrail } from "../visual/Rich";

type Step = { n: string; title: string; text: string; icon: string };

export default function Steps({
  id,
  heading,
  steps,
  tone = "ivory",
  eyebrow = "The process",
}: {
  id: string;
  heading: string;
  steps: readonly Step[];
  tone?: "ivory" | "mist";
  eyebrow?: string;
}) {
  const flight = steps.map((s) => ({ ...s, Icon: lineIcons[s.icon as LineIconName] }));
  return (
    <section aria-labelledby={id} className={tone === "mist" ? "skywash" : "gridpaper"}>
      <div className="wrap relative py-16 lg:py-24">
        <PlaneTrail className="absolute right-0 top-8 hidden w-[220px] opacity-70 lg:block" />
        <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
        <h2
          id={id}
          className="mt-3 max-w-[760px] font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[40px]"
        >
          {heading}
        </h2>
        <div className="mt-10 lg:mt-14">
          <FlightSteps steps={flight} cols={steps.length >= 5 ? 5 : 4} />
        </div>
      </div>
    </section>
  );
}
