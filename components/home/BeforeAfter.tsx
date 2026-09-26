import { ArrowRight } from "../Icons";

const pairs = [
  {
    label: "Generic wording",
    arrowLabel: "Strategic positioning",
    before: "Responsible for managing a team and handling company projects.",
    after:
      "Led cross-functional initiatives and managed a 12-person team, improving operational efficiency across three business functions.",
  },
];

const labels = [
  { from: "Generic wording", to: "Strategic positioning" },
  { from: "Responsibilities", to: "Professional impact" },
  { from: "Information", to: "Career story" },
];

export default function BeforeAfter() {
  const { before, after } = pairs[0];
  return (
    <section aria-labelledby="before-after-heading" className="bg-ivory">
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[80px]">
        <div className="mx-auto max-w-[680px] text-center">
          <h2
            id="before-after-heading"
            className="font-serif text-[30px] font-[500] leading-[1.2] tracking-[-0.012em] text-navy sm:text-[38px] lg:text-[42px]"
          >
            Don&rsquo;t Just Rewrite Your Resume. Reposition Your Story.
          </h2>
        </div>

        <div className="mt-11 grid gap-0 overflow-hidden rounded-[6px] border border-[#e4dfd0] shadow-[0_4px_24px_rgba(11,42,70,0.06)] lg:mt-14 lg:grid-cols-2">
          <div className="bg-[#f6f4ee] p-8 lg:p-10">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Before
            </p>
            <p className="mt-4 font-serif text-[19px] italic leading-[1.6] text-ink-muted lg:text-[20px]">
              &ldquo;{before}&rdquo;
            </p>
          </div>
          <div className="bg-white p-8 lg:border-l lg:border-[#e4dfd0] lg:p-10">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#8a6d3a]">
              After
            </p>
            <p className="mt-4 font-serif text-[19px] leading-[1.6] text-navy lg:text-[20px]">
              &ldquo;{after}&rdquo;
            </p>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {labels.map(({ from, to }) => (
            <li
              key={from}
              className="flex items-center gap-2.5 text-[13px] text-ink-muted"
            >
              <span>{from}</span>
              <ArrowRight className="h-[12px] w-[12px] text-gold" />
              <span className="font-medium text-navy">{to}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-[560px] text-center text-[12.5px] leading-[1.6] text-ink-muted">
          An illustrative example of how Veylora approaches resume writing,
          not a real client document.
        </p>
      </div>
    </section>
  );
}
