type Step = { n: string; title: string; text: string; icon: string };

export default function Steps({
  id,
  heading,
  steps,
  tone = "ivory",
}: {
  id: string;
  heading: string;
  steps: readonly Step[];
  tone?: "ivory" | "mist";
}) {
  return (
    <section aria-labelledby={id} className={tone === "mist" ? "bg-white/40" : ""}>
      <div className="wrap py-16 lg:py-24">
        <h2
          id={id}
          className="scroll-mt-28 max-w-[760px] font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[40px]"
        >
          {heading}
        </h2>
        <ol
          className={`relative mt-12 grid gap-8 sm:grid-cols-2 ${
            steps.length >= 5 ? "xl:grid-cols-5" : "lg:grid-cols-4"
          }`}
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute left-0 right-0 top-4 hidden border-t border-dashed border-[#b7d0e4] ${
              steps.length >= 5 ? "xl:block" : "lg:block"
            }`}
          />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="relative z-10 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-white px-2 font-serif text-[13px] italic text-sky-ink shadow-sm ring-1 ring-[#d5e6f2]">
                {s.n}
              </span>
              <h3 className="mt-4 font-serif text-[22px] font-medium text-navy">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.65] text-ink-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
