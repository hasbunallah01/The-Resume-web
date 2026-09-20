import { iconMap } from "./ResumeIcons";

type Step = { n: string; title: string; text: string; icon: keyof typeof iconMap };

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
  const cols = steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <section
      aria-labelledby={id}
      className={tone === "mist" ? "bg-mist" : "bg-ivory"}
    >
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[80px]">
        <h2
          id={id}
          className="text-center font-serif text-[28px] font-[480] leading-[1.2] tracking-[-0.008em] text-navy lg:text-[36px]"
        >
          {heading}
        </h2>
        <ol className={`mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:gap-0 ${cols}`}>
          {steps.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <li
                key={s.n}
                className={`relative lg:px-7 ${
                  i > 0 ? "lg:border-l lg:border-[#cfd8de]" : "lg:pl-0"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-[15px] italic text-gold">
                    {s.n}
                  </span>
                  <Icon className="h-[30px] w-[30px] text-[#164a73]" />
                </div>
                <h3 className="mt-3 text-[16px] font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-ink-muted">
                  {s.text}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
