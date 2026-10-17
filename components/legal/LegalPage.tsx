import type { ReactNode } from "react";
import SkyBand from "../visual/SkyBand";
import { contactEmail } from "@/data/site";

export type LegalSection = { id: string; title: string; body: ReactNode };

export const lastUpdated = "October 17, 2026";

export function Mail() {
  return (
    <a href={`mailto:${contactEmail}`} className="font-medium text-navy underline decoration-[#9ec0da] decoration-2 underline-offset-[4px] hover:decoration-navy">
      {contactEmail}
    </a>
  );
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  other,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  other: { label: string; href: string };
}) {
  return (
    <>
      <SkyBand>
        <section aria-labelledby="legal-heading" className="wrap pb-10 pt-12 lg:pb-14 lg:pt-16">
          <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
          <h1
            id="legal-heading"
            className="mt-4 font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.02em] text-navy sm:text-[50px]"
          >
            {title}
          </h1>
          <p className="mt-5 max-w-[620px] text-[17px] leading-[1.7] text-ink-body">{intro}</p>
          <p className="mt-5 inline-flex rounded-full bg-white/80 px-4 py-1.5 text-[12.5px] font-medium text-sky-ink ring-1 ring-white">
            Last updated: {lastUpdated}
          </p>
        </section>
      </SkyBand>

      <div data-noreveal className="wrap grid gap-8 pb-20 pt-4 lg:grid-cols-[250px_1fr] lg:gap-12">
        <nav aria-label="Contents" className="hidden lg:block">
          <div className="glass-card sticky top-28 rounded-[22px] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-ink">Contents</p>
            <ol className="mt-3 space-y-1.5 text-[14px]">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex gap-2.5 rounded-lg px-2 py-1.5 text-ink-body transition hover:bg-white hover:text-navy">
                    <span className="w-5 shrink-0 font-serif italic text-sky-ink">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
            <a href={other.href} className="mt-5 block border-t border-[#e3eef6] pt-4 text-[13.5px] font-medium text-navy underline decoration-[#9ec0da] decoration-2 underline-offset-[4px]">
              {other.label}
            </a>
          </div>
        </nav>

        <article className="glass-card rounded-[28px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className={i > 0 ? "mt-10 border-t border-[#e3eef6] pt-10" : ""}>
              <h2 id={`${s.id}-h`} className="flex items-baseline gap-3 font-serif text-[25px] font-medium leading-snug text-navy sm:text-[28px]">
                <span className="font-serif text-[16px] italic text-sky-ink">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="legal-body mt-4 space-y-4 text-[16px] leading-[1.75] text-ink-body">{s.body}</div>
            </section>
          ))}
          <p className="mt-12 border-t border-[#e3eef6] pt-6 text-[14px] text-ink-muted lg:hidden">
            See also our{" "}
            <a href={other.href} className="font-medium text-navy underline decoration-[#9ec0da] decoration-2 underline-offset-[4px]">
              {other.label}
            </a>
            .
          </p>
        </article>
      </div>
    </>
  );
}
