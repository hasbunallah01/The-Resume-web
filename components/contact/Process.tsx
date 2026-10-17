import { ChatLine, CompassLine, PlaneLine, TargetLine } from "../visual/LineIcons";
import { Accent, FlightSteps } from "../visual/Rich";

const steps = [
  { n: "01", Icon: ChatLine, title: "We Review Your Request", text: "We learn about your current career situation and what you're looking to accomplish." },
  { n: "02", Icon: TargetLine, title: "We Learn About Your Goals", text: "We discuss your target role, industry, experience and career direction." },
  { n: "03", Icon: CompassLine, title: "We Recommend the Right Service", text: "If you're unsure which Veylora service fits your needs, we'll explain the available options." },
  { n: "04", Icon: PlaneLine, title: "We Begin Your Project", text: "Once everything is confirmed, your Veylora project can begin." },
];

export default function Process() {
  return (
    <section aria-labelledby="process-heading" className="skywash">
      <div className="wrap py-16 lg:py-24">
      <p className="eyebrow"><span className="eyebrow-dot" />What happens after you contact us?</p>
      <h2
        id="process-heading"
        className="mt-3 font-serif text-[32px] font-medium leading-tight tracking-[-0.02em] text-navy sm:text-[42px]"
      >
        A Simple, Supportive <Accent>Process</Accent>
      </h2>
      <div className="mt-10 lg:mt-14">
        <FlightSteps steps={steps} cols={4} />
      </div>
      </div>
    </section>
  );
}
