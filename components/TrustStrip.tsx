import { AtsIcon, DocumentIcon, ExpertIcon, HeartCheckIcon } from "./Icons";

const items = [
  { label: "Expert Writers", Icon: ExpertIcon },
  { label: "ATS-Focused", Icon: AtsIcon },
  { label: "High-Quality Documents", Icon: DocumentIcon },
  { label: "Your Goals, Our Priority", Icon: HeartCheckIcon },
];

export default function TrustStrip() {
  return (
    <section className="bg-mist text-[#12406a]">
      <div className="mx-auto w-[min(1232px,calc(100%-48px))] py-9 lg:h-[174px] lg:py-0 lg:pt-[34px]">
        <p className="text-center font-serif text-[20px] italic leading-[30px] text-[#0f3557] lg:text-[25.1px]">
          Professional documents. Thoughtful writing. Career-focused strategy.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 lg:mt-[21px] lg:flex lg:items-center lg:justify-center lg:gap-0 lg:pl-[61px]">
          {items.map(({ label, Icon }, i) => (
            <li
              key={label}
              className={`flex items-center gap-3 lg:gap-[17px] ${
                i > 0
                  ? "lg:ml-[75px] lg:border-l lg:border-[#a9bccb] lg:pl-[75px]"
                  : ""
              } lg:h-[42px]`}
            >
              <Icon className="h-[32px] w-[32px] shrink-0 text-[#164a73] lg:-mx-[3px] lg:h-[48px] lg:w-[48px]" />
              <span className="text-[13px] leading-tight text-[#2b5679] lg:text-[12.6px]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
