import { PenNibLine, PlaneLine } from "../visual/LineIcons";
import { Accent, IconTile } from "../visual/Rich";

const labels = [
  { from: "Generic wording", to: "Strategic positioning" },
  { from: "Responsibilities", to: "Professional impact" },
  { from: "Information", to: "Career story" },
];

export default function BeforeAfter() {
  return (
    <section aria-labelledby="before-after-heading" className="skywash py-16 lg:py-24">
      <div className="wrap">
        <p className="eyebrow"><span className="eyebrow-dot" />Before and after</p>
        <h2
          id="before-after-heading"
          className="mt-3 max-w-[720px] font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.02em] text-navy sm:text-[44px]"
        >
          Don&rsquo;t Just Rewrite Your Resume. <Accent>Reposition</Accent> Your Story.
        </h2>

        <div className="relative mt-12 grid lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-0">
          {/* The draft: a plain, slightly crumpled sheet with a red pen note */}
          <article className="sheet relative z-0 mx-1 -rotate-[2.2deg] rounded-[20px] p-7 pb-12 shadow-[0_18px_40px_-22px_rgba(28,72,112,0.35)] ring-1 ring-[#e3edf5] [filter:saturate(0.6)] sm:p-9 sm:pb-14 lg:mx-0 lg:mr-[-40px] lg:p-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#f1f4f7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft ring-1 ring-[#e3e9ef]">
              Before
            </p>
            <p className="mt-6 font-serif text-[21px] italic leading-[1.6] text-ink-muted sm:text-[23px]">
              &ldquo;
              <span className="relative inline-block">
                Responsible for
                <svg viewBox="0 0 160 50" preserveAspectRatio="none" aria-hidden="true" className="pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+24px)] overflow-visible">
                  <path d="M12 30C8 14 52 5 96 6c40 1 62 10 58 24-4 13-46 16-86 15-36-1-60-6-58-18 1-8 16-14 30-16" fill="none" stroke="#d98a7a" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>{" "}
              managing a team and handling company projects.&rdquo;
            </p>
          </article>

          {/* The rewrite: a crisp, raised sheet with highlighter strokes */}
          <article data-tilt="4" className="paper relative z-10 mx-auto -mt-8 w-[calc(100%-12px)] rounded-[24px] bg-white p-7 shadow-[inset_0_1px_0_#fff,0_40px_80px_-40px_rgba(20,56,92,0.55),0_14px_30px_-16px_rgba(20,56,92,0.3)] ring-1 ring-white sm:p-9 lg:mt-12 lg:w-auto lg:p-11">
            <div className="flex items-center justify-between gap-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#e7f2fa] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-ink ring-1 ring-[#d3e5f3]">
                After
              </p>
              <IconTile Icon={PenNibLine} />
            </div>
            <p className="mt-6 font-serif text-[22px] leading-[1.6] text-navy sm:text-[25px]">
              &ldquo;Led cross-functional initiatives and managed a <span className="hl">12-person team</span>, improving{" "}
              <span className="hl">operational efficiency</span> across three business functions.&rdquo;
            </p>
          </article>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-14">
          {labels.map(({ from, to }) => (
            <li key={from} className="glass-card flex items-center gap-3 rounded-[18px] px-4 py-3.5">
              <span className="text-[13px] text-ink-soft line-through decoration-[#d98a7a]/60">{from}</span>
              <PlaneLine className="h-4 w-4 shrink-0 rotate-45 text-sky-ink" />
              <span className="text-[13.5px] font-medium text-navy">{to}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[560px] text-[12.5px] leading-[1.6] text-ink-soft">
          An illustrative example of how Veylora approaches resume writing, not a real client document.
        </p>
      </div>
    </section>
  );
}
