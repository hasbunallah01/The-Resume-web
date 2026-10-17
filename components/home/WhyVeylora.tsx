import { DocStackLine, HandshakeLine, PersonLine, TargetLine } from "../visual/LineIcons";
import { Accent, IconTile } from "../visual/Rich";

const pillars = [
  {
    title: "Human Expertise",
    text: "Real people who take the time to understand your career.",
    Icon: PersonLine,
  },
  {
    title: "Strategic Positioning",
    text: "Focus on how your experience is communicated, not simply listed.",
    Icon: TargetLine,
  },
  {
    title: "Personal Attention",
    text: "Your career history and goals shape the work.",
    Icon: HandshakeLine,
  },
  {
    title: "Professional Presentation",
    text: "Clear, polished documents designed to represent you professionally.",
    Icon: DocStackLine,
  },
];

export default function WhyVeylora() {
  return (
    <section aria-labelledby="why-veylora-heading" className="wrap py-16 lg:py-24">
      <div className="paper gridpaper relative overflow-hidden rounded-[32px] bg-white/80 p-6 shadow-[inset_0_1px_0_#fff,0_30px_70px_-40px_rgba(28,72,112,0.45)] ring-1 ring-white sm:p-10 lg:p-12">
        <div aria-hidden="true" className="absolute -right-20 -top-24 -z-10 h-[340px] w-[340px] rounded-full bg-[radial-gradient(closest-side,rgba(190,222,248,0.7),transparent)]" />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" />Why Veylora</p>
            <h2
              id="why-veylora-heading"
              className="mt-3 max-w-[680px] font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[40px]"
            >
              Because Your Career Story Deserves <Accent>Thoughtful</Accent> Presentation.
            </h2>
          </div>
          <dl data-stagger className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ title, text, Icon }) => (
              <div key={title} className="glass-card rounded-[22px] p-5 sm:p-6">
                <IconTile Icon={Icon} />
                <dt className="mt-4 font-serif text-[21px] font-medium leading-snug text-navy">{title}</dt>
                <dd className="mt-2 text-[14.5px] leading-[1.65] text-ink-muted">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
