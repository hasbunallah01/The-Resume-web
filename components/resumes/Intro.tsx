import { ArrowRight } from "../Icons";
import SkyBand from "../visual/SkyBand";
import { ChatLine, CheckLine, PlaneLine, QuoteMark, SparkLine } from "../visual/LineIcons";
import { Accent, IconTile } from "../visual/Rich";

const benefitIcons = [ChatLine, SparkLine, CheckLine, PlaneLine];

const benefits = [
  {
    title: "Recruiters landing in your inbox",
    text: "Pitching great fit jobs they've handpicked for you.",
  },
  {
    title: "Waking up energized to go to work",
    instead: "psyching yourself up.",
  },
  {
    title: "Smiling when someone asks what you do",
    instead: "changing the subject.",
  },
  {
    title: "Feeling fulfilled now and excited for what's next",
    instead: "feeling stagnant, stuck and purposeless.",
  },
];

export default function Intro() {
  return (
    <>
      <SkyBand dense>
        <section aria-labelledby="intro-heading" className="wrap pb-8 pt-10 lg:pb-4 lg:pt-16">
          <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_0.8fr] lg:gap-16">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" />Your next opportunity</p>
              <h1
                id="intro-heading"
                className="mt-4 font-serif text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-navy sm:text-[48px] lg:text-[56px]"
              >
                Imagine hearing, &lsquo;You&rsquo;re exactly who we&rsquo;ve been looking for.&rsquo;
              </h1>
              <p className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-ink-body">
                This is what the hiring manager at your dream company should
                say when they pick up your resume. (And then run to offer you a
                position before someone else can!)
              </p>
            </div>
            <aside className="paper rounded-[24px] bg-white/90 p-6 shadow-paper ring-1 ring-white sm:p-7">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-sky-ink">If that is not happening</p>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-ink-body">
                It&rsquo;s not that you&rsquo;re not qualified. It&rsquo;s that{" "}
                <strong className="font-semibold text-navy">
                  your current resume doesn&rsquo;t reflect what you can really offer.
                </strong>
              </p>
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#e3eef6] pt-5">
                <p className="font-serif text-[28px] font-medium leading-none text-navy">Let&rsquo;s fix that.</p>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-[13.5px] font-medium text-navy underline decoration-[#9ec0da] decoration-2 underline-offset-[5px]"
                >
                  See how
                  <ArrowRight className="h-3.5 w-3.5 rotate-90" />
                </a>
              </div>
            </aside>
          </div>
        </section>
      </SkyBand>

      <section aria-labelledby="story-intro-heading" className="gridpaper">
      <div className="wrap py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" />Your career story</p>
            <h2
              id="story-intro-heading"
              className="mt-4 font-serif text-[30px] font-medium leading-[1.18] tracking-[-0.02em] text-navy sm:text-[36px]"
            >
              The secret to a standout executive resume is a memorable <Accent>career story</Accent> and personal brand.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-ink-muted">This is where many job seekers get stuck.</p>
            <blockquote className="paper relative mt-8 overflow-hidden rounded-[24px] bg-white p-6 pt-10 font-serif text-[22px] italic leading-[1.45] text-navy shadow-[inset_0_1px_0_#fff,0_30px_60px_-36px_rgba(20,56,92,0.55)] ring-1 ring-white sm:p-8 sm:pt-12">
              <QuoteMark className="absolute left-5 top-4 h-7 w-9 text-[#bcd8ee] sm:left-7" />
              Wouldn&rsquo;t it be amazing if your resume told a memorable narrative about{" "}
              <strong className="font-semibold not-italic">who you are</strong> and{" "}
              <strong className="font-semibold not-italic">how your unique skills transform companies?</strong>
            </blockquote>
          </div>

          <div>
            <h3 className="font-serif text-[26px] italic text-navy">Can you picture it&hellip;</h3>
            <ul className="mt-6 space-y-3">
              {benefits.map(({ title, text, instead }, i) => (
                <li key={title} className="glass-card flex gap-4 rounded-[20px] p-5">
                  <IconTile Icon={benefitIcons[i % benefitIcons.length]} />
                  <div>
                  <h4 className="font-serif text-[20px] font-medium leading-snug text-navy">{title}</h4>
                  {text && <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink-muted">{text}</p>}
                  {instead && (
                    <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink-muted">
                      <span className="mr-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-ink">Instead of</span>
                      {instead}
                    </p>
                  )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
