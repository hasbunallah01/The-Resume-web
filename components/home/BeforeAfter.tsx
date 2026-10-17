import { ArrowRight } from "../Icons";

const before =
  "Responsible for managing a team and handling company projects.";
const after =
  "Led cross-functional initiatives and managed a 12-person team, improving operational efficiency across three business functions.";

const labels = [
  { from: "Generic wording", to: "Strategic positioning" },
  { from: "Responsibilities", to: "Professional impact" },
  { from: "Information", to: "Career story" },
];

export default function BeforeAfter() {
  return (
    <section aria-labelledby="before-after-heading" className="wrap pb-16 lg:pb-24">
      <h2
        id="before-after-heading"
        className="max-w-[720px] font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.02em] text-navy sm:text-[44px]"
      >
        Don&rsquo;t Just Rewrite Your Resume. Reposition Your Story.
      </h2>

      <div className="relative mt-12 grid gap-5 lg:grid-cols-2 lg:gap-8">
        <article className="paper -rotate-[0.6deg] rounded-[24px] bg-[#f7fbfe] p-7 shadow-paper ring-1 ring-white sm:p-9">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">Before</p>
          <p className="mt-5 font-serif text-[22px] italic leading-[1.5] text-ink-muted sm:text-[24px]">
            &ldquo;{before}&rdquo;
          </p>
        </article>
        <article className="paper rotate-[0.5deg] rounded-[24px] bg-white p-7 shadow-lift ring-1 ring-white sm:p-9 lg:mt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-ink">After</p>
          <p className="mt-5 font-serif text-[22px] leading-[1.5] text-navy sm:text-[24px]">
            &ldquo;{after}&rdquo;
          </p>
        </article>
      </div>

      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        {labels.map(({ from, to }) => (
          <li key={from} className="flex items-center gap-2.5 text-[13.5px] text-ink-muted">
            <span>{from}</span>
            <ArrowRight className="h-3 w-3 text-sky-ink" />
            <span className="font-medium text-navy">{to}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-[560px] text-[12.5px] leading-[1.6] text-ink-soft">
        An illustrative example of how Veylora approaches resume writing, not a real client document.
      </p>
    </section>
  );
}
