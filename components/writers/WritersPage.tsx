import Image from "next/image";
import { ArrowRight } from "../Icons";
import { writers, type Writer } from "@/data/writers";

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
        className="relative block shrink-0 overflow-hidden rounded-full ring-1 ring-[#d8cfb6] ring-offset-[5px] ring-offset-[#f4efe4]"
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
      className="flex shrink-0 items-center justify-center rounded-full bg-white font-serif font-[500] text-navy ring-1 ring-[#d8cfb6] ring-offset-[5px] ring-offset-[#f4efe4]"
      style={{ ...style, fontSize: size * 0.34 }}
    >
      {initials(writer.name)}
    </span>
  );
}

export function WritersHero() {
  return (
    <section aria-labelledby="writers-page-heading" className="bg-ivory">
      <div className={`${wrap} pb-10 pt-14 lg:pb-[56px] lg:pt-[84px]`}>
        <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[#8a6d3a]">
          <span aria-hidden="true" className="h-px w-[44px] bg-gold" />
          Our Writers
        </p>
        <h1
          id="writers-page-heading"
          className="mt-5 max-w-[860px] font-serif text-[36px] font-[500] leading-[1.1] tracking-[-0.015em] text-navy sm:text-[46px] lg:text-[56px]"
        >
          Meet the Writers Behind Your Career Documents
        </h1>
        <p className="mt-6 max-w-[640px] text-[17px] leading-[1.75] text-ink-body lg:text-[18px]">
          Experienced professionals dedicated to helping job seekers
          communicate their value with clarity and confidence. Every writer
          brings more than 15 years of experience and a personal approach to
          each project.
        </p>

        <nav aria-label="Jump to a writer" className="mt-10">
          <ul className="flex flex-wrap gap-2.5">
            {writers.map((w) => (
              <li key={w.slug}>
                <a
                  href={`#${w.slug}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#dcd5c0] bg-white py-1.5 pl-1.5 pr-4 text-[13.5px] font-medium text-navy transition-colors hover:border-navy-dark"
                >
                  {w.photo ? (
                    <span className="relative block h-[28px] w-[28px] overflow-hidden rounded-full">
                      <Image src={w.photo} alt="" fill sizes="28px" className="object-cover" />
                    </span>
                  ) : (
                    <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#f4efe4] font-serif text-[11px] text-navy">
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
  );
}

function WriterCard({ writer }: { writer: Writer }) {
  const [lead, ...rest] = writer.bio;
  return (
    <article
      id={writer.slug}
      aria-labelledby={`${writer.slug}-name`}
      className="scroll-mt-8 overflow-hidden rounded-[6px] border border-[#e4dfd0] bg-white shadow-[0_4px_24px_rgba(11,42,70,0.06)] transition-shadow target:border-gold target:shadow-[0_0_0_2px_#b39669,0_20px_48px_rgba(11,42,70,0.14)]"
    >
      <div className="grid lg:grid-cols-[340px_1fr]">
        <div className="flex flex-col items-center bg-[#f4efe4] px-8 py-10 text-center lg:border-r lg:border-[#e6dfcd] lg:py-12">
          <Avatar writer={writer} size={190} />
          <h2
            id={`${writer.slug}-name`}
            className="mt-7 font-serif text-[30px] font-[500] leading-[1.1] tracking-[-0.01em] text-navy"
          >
            {writer.name}
          </h2>
          <p className="mt-3 max-w-[260px] text-[14.5px] leading-[1.55] text-ink-muted">
            {writer.title}
          </p>
          <p className="mt-5 inline-flex items-center rounded-full border border-[#d8c8a0] bg-white px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#8a6d3a]">
            {writer.experience} years of experience
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {writer.focus.map((f) => (
              <li
                key={f}
                className="rounded-[3px] bg-white/80 px-2.5 py-1 text-[12px] text-[#3f6a8c] ring-1 ring-[#e2dbc6]"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col px-8 py-10 lg:px-14 lg:py-12">
          <p className="font-serif text-[20px] font-[420] leading-[1.6] text-navy lg:text-[22px]">
            {lead}
          </p>
          <div className="mt-6 space-y-4">
            {rest.map((p) => (
              <p key={p} className="text-[16px] leading-[1.8] text-ink-body">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#ece7d8] pt-6">
            <a
              href="/contact"
              className="inline-flex h-[46px] items-center gap-2.5 rounded-[4px] bg-navy-dark px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#0a2a42]"
            >
              Start Your Resume
              <ArrowRight className="h-[15px] w-[15px]" />
            </a>
            <a
              href="#writers-page-heading"
              className="text-[13.5px] font-medium text-ink-muted underline decoration-[#cbbf9d] decoration-[1.5px] underline-offset-[6px] transition-colors hover:text-navy"
            >
              Back to all writers
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function WriterCards() {
  return (
    <section aria-label="Writer profiles" className="bg-ivory">
      <div className={`${wrap} space-y-7 pb-16 lg:space-y-9 lg:pb-[96px]`}>
        {writers.map((w) => (
          <WriterCard key={w.slug} writer={w} />
        ))}
      </div>
    </section>
  );
}
