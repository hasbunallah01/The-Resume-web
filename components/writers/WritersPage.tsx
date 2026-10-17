import Image from "next/image";
import { ArrowRight } from "../Icons";
import { writers, type Writer } from "@/data/writers";
import SkyBand from "../visual/SkyBand";

const wrap = "mx-auto w-[min(1232px,calc(100%-48px))]";

function initials(name: string) {
  const parts = name.replace(/\./g, "").split(" ").filter(Boolean);
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

function Avatar({ writer, size }: { writer: Writer; size: number }) {
  const style = { width: size, height: size };
  if (writer.photo) {
    return (
      <span
        className="relative block shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-paper"
        style={style}
      >
        <Image
          src={writer.photo}
          alt={`Portrait of ${writer.name}`}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      </span>
    );
  }
  return (
    <span
      role="img"
      aria-label={`Initials of ${writer.name}`}
      className="flex shrink-0 items-center justify-center rounded-full bg-white font-serif font-medium text-navy ring-4 ring-white shadow-paper"
      style={{ ...style, fontSize: size * 0.34 }}
    >
      {initials(writer.name)}
    </span>
  );
}

export function WritersHero() {
  return (
    <SkyBand dense>
    <section aria-labelledby="writers-page-heading">
      <div className={`${wrap} pb-10 pt-12 lg:pb-14 lg:pt-16`}>
        <p className="eyebrow">Our Writers</p>
        <h1
          id="writers-page-heading"
          className="mt-4 max-w-[860px] font-serif text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-navy sm:text-[48px] lg:text-[56px]"
        >
          Meet the Writers Behind Your Career Documents
        </h1>
        <p className="mt-6 max-w-[640px] text-[17px] leading-[1.75] text-ink-body lg:text-[18px]">
          Experienced professionals dedicated to helping job seekers
          communicate their value with clarity and confidence. Every writer
          brings years of hands-on experience and a personal approach to
          each project.
        </p>

        <nav aria-label="Jump to a writer" className="mt-10">
          <ul className="flex flex-wrap gap-2.5">
            {writers.map((w) => (
              <li key={w.slug}>
                <a
                  href={`#${w.slug}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white/85 py-1.5 pl-1.5 pr-4 text-[13.5px] font-medium text-navy shadow-sm ring-1 ring-white transition hover:bg-white"
                >
                  {w.photo ? (
                    <span className="relative block h-[28px] w-[28px] overflow-hidden rounded-full">
                      <Image src={w.photo} alt="" fill sizes="28px" className="object-cover" />
                    </span>
                  ) : (
                    <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#e7f2fa] font-serif text-[11px] text-navy">
                      {initials(w.name)}
                    </span>
                  )}
                  {w.name.split(" ")[0]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
    </SkyBand>
  );
}

function WriterCard({ writer }: { writer: Writer }) {
  const [lead, ...rest] = writer.bio;
  return (
    <article
      id={writer.slug}
      aria-labelledby={`${writer.slug}-name`}
      className="paper scroll-mt-28 overflow-hidden rounded-[28px] bg-white shadow-paper ring-1 ring-white target:ring-2 target:ring-[#163056]"
    >
      <div className="grid lg:grid-cols-[340px_1fr]">
        <div className="flex flex-col items-center bg-[#f4f9fd] px-8 py-10 text-center lg:border-r lg:border-[#e3eef6] lg:py-12">
          <Avatar writer={writer} size={190} />
          <h2
            id={`${writer.slug}-name`}
            className="mt-7 font-serif text-[30px] font-medium leading-[1.1] text-navy"
          >
            {writer.name}
          </h2>
          <p className="mt-3 max-w-[260px] text-[14.5px] leading-[1.55] text-ink-muted">
            {writer.title}
          </p>
          <p className="mt-5 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-sky-ink ring-1 ring-[#d5e4f0]">
            {writer.experience} years of experience
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {writer.focus.map((f) => (
              <li
                key={f}
                className="rounded-full bg-white/80 px-2.5 py-1 text-[12px] text-sky-ink ring-1 ring-[#d5e4f0]"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col px-8 py-10 lg:px-14 lg:py-12">
          <p className="font-serif text-[18px] leading-[1.55] text-navy sm:text-[20px] sm:leading-[1.6] lg:text-[22px]">
            {lead}
          </p>
          <div className="mt-6 space-y-4">
            {rest.map((p) => (
              <p key={p} className="text-[16px] leading-[1.8] text-ink-body">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#e3eef6] pt-6">
            {writer.email ? (
              <a href={`mailto:${writer.email}`} className="btn-navy">
                Start Your Resume
                <ArrowRight className="h-[15px] w-[15px]" />
              </a>
            ) : null}
            <a
              href={`/contact?writer=${encodeURIComponent(writer.slug)}#form`}
              className="text-[13.5px] font-medium text-ink-muted underline decoration-[#9ec0da] decoration-2 underline-offset-[6px] transition-colors hover:text-navy"
            >
              Submit Your Info
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function WriterCards() {
  return (
    <section aria-label="Writer profiles">
      <div className={`${wrap} space-y-7 pb-16 lg:space-y-9 lg:pb-[96px]`}>
        {writers.map((w) => (
          <WriterCard key={w.slug} writer={w} />
        ))}
      </div>
    </section>
  );
}
