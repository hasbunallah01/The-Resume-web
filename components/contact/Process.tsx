import { ChatIcon, CheckCircleIcon, DocIcon, PersonIcon } from "../resumes/ResumeIcons";

const steps = [
  { n: "01", Icon: ChatIcon, title: "We Review Your Request", text: "We learn about your current career situation and what you're looking to accomplish." },
  { n: "02", Icon: PersonIcon, title: "We Learn About Your Goals", text: "We discuss your target role, industry, experience and career direction." },
  { n: "03", Icon: DocIcon, title: "We Recommend the Right Service", text: "If you're unsure which Veylora service fits your needs, we'll explain the available options." },
  { n: "04", Icon: CheckCircleIcon, title: "We Begin Your Project", text: "Once everything is confirmed, your Veylora project can begin." },
];

export default function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className="border-t border-[#e9e4d6] bg-ivory"
    >
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-14 lg:py-[84px]">
        <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[#8a6d3a]">
          <span aria-hidden="true" className="h-px w-[44px] bg-gold" />
          What happens after you contact us?
        </p>
        <h2
          id="process-heading"
          className="mt-4 font-serif text-[30px] font-[500] leading-[1.15] tracking-[-0.012em] text-navy sm:text-[38px] lg:text-[42px]"
        >
          A Simple, Supportive Process
        </h2>

        <ol className="mt-10 grid gap-9 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-0">
          {steps.map(({ n, Icon, title, text }, i) => (
            <li
              key={n}
              className={`lg:pr-8 ${i > 0 ? "lg:border-l lg:border-[#dcd6c6] lg:pl-8" : ""}`}
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#d3c39b] bg-[#f6efdc] text-[13px] font-medium text-[#8a6d3a]">
                  {n}
                </span>
                <Icon className="h-[30px] w-[30px] text-navy" />
              </div>
              <h3 className="mt-5 font-serif text-[21px] font-[520] leading-[1.25] text-navy">
                {title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] text-ink-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
