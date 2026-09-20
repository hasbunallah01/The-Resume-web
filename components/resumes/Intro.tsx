import Image from "next/image";
import { ArrowRight } from "../Icons";
import { MailIcon, PersonIcon, StarOutlineIcon, TargetIcon } from "./ResumeIcons";

const wrap = "mx-auto w-[min(1232px,calc(100%-48px))]";

const benefits = [
  {
    Icon: MailIcon,
    title: "Recruiters landing in your inbox",
    text: "Pitching great fit jobs they've handpicked for you.",
  },
  {
    Icon: StarOutlineIcon,
    title: "Waking up energized to go to work",
    instead: "psyching yourself up.",
  },
  {
    Icon: PersonIcon,
    title: "Smiling when someone asks what you do",
    instead: "changing the subject.",
  },
  {
    Icon: TargetIcon,
    title: "Feeling fulfilled now and excited for what's next",
    instead: "feeling stagnant, stuck and purposeless.",
  },
];

export default function Intro() {
  return (
    <>
      {/* Section 1: the hook */}
      <section aria-labelledby="intro-heading" className="bg-ivory">
        <div className={`${wrap} pt-14 lg:pt-[88px]`}>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-[80px]">
            <div>
              <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[#527b98]">
                <span aria-hidden="true" className="h-px w-[44px] bg-gold" />
                Your next opportunity
              </p>
              <h1
                id="intro-heading"
                className="mt-5 font-serif text-[34px] font-[500] leading-[1.1] tracking-[-0.015em] text-navy sm:text-[46px] lg:text-[56px]"
              >
                Imagine hearing, &lsquo;You&rsquo;re exactly who we&rsquo;ve been
                looking for.&rsquo;
              </h1>
              <p className="mt-6 max-w-[620px] text-[17px] leading-[1.75] text-ink-body lg:text-[18.5px]">
                This is what the hiring manager at your dream company should
                say when they pick up your resume. (And then run to offer you a
                position before someone else can!)
              </p>
            </div>

            <aside className="border-t-[3px] border-gold bg-white px-7 pb-7 pt-6 shadow-[0_10px_34px_rgba(11,42,70,0.08)]">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#527b98]">
                If that is not happening
              </p>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-ink-body">
                It&rsquo;s not that you&rsquo;re not qualified. It&rsquo;s that{" "}
                <strong className="font-semibold text-navy">
                  your current resume doesn&rsquo;t reflect what you can really
                  offer.
                </strong>
              </p>
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#ece7d8] pt-5">
                <p className="font-serif text-[30px] font-[500] leading-none text-navy">
                  Let&rsquo;s fix that.
                </p>
                <a
                  href="#pricing"
                  className="inline-flex shrink-0 items-center gap-2 text-[13.5px] font-medium text-navy underline decoration-gold decoration-[1.5px] underline-offset-[6px] transition-colors hover:text-navy-btn"
                >
                  See how
                  <ArrowRight className="h-[14px] w-[14px] rotate-90" />
                </a>
              </div>
            </aside>
          </div>

          <div className="relative mt-12 aspect-[5/2] w-full overflow-hidden sm:aspect-[3/1] lg:mt-16">
            <Image
              src="/images/services-banner.jpg"
              alt="Laptop, printed resume, pen and notebook on a wooden desk"
              fill
              sizes="(min-width: 1280px) 1232px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 2: the career story */}
      <section
        aria-labelledby="story-intro-heading"
        className="bg-ivory pb-14 pt-14 lg:pb-[92px] lg:pt-[84px]"
      >
        <div className={`${wrap} grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-[80px]`}>
          <div>
            <p className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[#527b98]">
              <span aria-hidden="true" className="h-px w-[44px] bg-gold" />
              Your career story
            </p>
            <h2
              id="story-intro-heading"
              className="mt-5 font-serif text-[28px] font-[500] leading-[1.18] tracking-[-0.012em] text-navy sm:text-[34px] lg:text-[38px]"
            >
              The secret to a standout executive resume is a memorable career
              story and personal brand.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-ink-muted">
              This is where many job seekers get stuck.
            </p>
            <blockquote className="mt-7 border-l-2 border-gold pl-6 font-serif text-[21px] font-[420] italic leading-[1.5] text-navy lg:text-[23px]">
              Wouldn&rsquo;t it be amazing if your resume told a memorable
              narrative about{" "}
              <strong className="font-[620] not-italic">who you are</strong> and{" "}
              <strong className="font-[620] not-italic">
                how your unique skills transform companies?
              </strong>
            </blockquote>
          </div>

          <div>
            <h3 className="flex items-center gap-4 font-serif text-[26px] font-[500] italic text-navy lg:text-[30px]">
              Can you picture it&hellip;
              <span aria-hidden="true" className="h-px flex-1 bg-[#dcd6c6]" />
            </h3>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {benefits.map(({ Icon, title, text, instead }) => (
                <li
                  key={title}
                  className="rounded-[4px] border border-[#e4dfd0] bg-white p-6 shadow-[0_2px_14px_rgba(11,42,70,0.04)]"
                >
                  <span className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#ddd5be] bg-[#faf8f2] text-navy">
                    <Icon className="h-[22px] w-[22px]" />
                  </span>
                  <h4 className="mt-4 font-serif text-[19px] font-[520] leading-[1.3] text-navy">
                    {title}
                  </h4>
                  {text && (
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-muted">
                      {text}
                    </p>
                  )}
                  {instead && (
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-muted">
                      <span className="mr-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a6d3a]">
                        Instead of
                      </span>
                      {instead}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
