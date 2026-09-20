import Image from "next/image";
import { ArrowRight } from "../Icons";
import {
  CompassIcon,
  CrownIcon,
  DocIcon,
  MailIcon,
  PersonIcon,
  StarOutlineIcon,
  TargetIcon,
  UsersIcon,
} from "../resumes/ResumeIcons";

const wrap = "mx-auto w-[min(1232px,calc(100%-48px))]";
const eyebrow =
  "text-[12px] font-medium uppercase tracking-[0.16em] text-[#527b98]";

/* ---------- 1. Intro + founder ---------- */
export function AboutIntro() {
  return (
    <section aria-labelledby="about-heading" className="bg-ivory">
      <div
        className={`${wrap} grid gap-10 py-14 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:gap-[56px] lg:py-[88px]`}
      >
        <div>
          <p className={eyebrow}>About Veylora</p>
          <h1
            id="about-heading"
            className="mt-4 font-serif text-[36px] font-[500] leading-[1.12] tracking-[-0.014em] text-navy sm:text-[44px] lg:text-[46px]"
          >
            Your Experience Deserves to Be Seen Clearly.
          </h1>
          <p className="mt-6 text-[16.5px] leading-[1.75] text-ink-body">
            Veylora helps professionals turn their experience, accomplishments,
            and career direction into clear, compelling professional documents
            built for the opportunities they want next.
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.75] text-ink-body">
            A resume should do more than list where you&rsquo;ve worked. It
            should make your value easy to understand, communicate the
            progression of your career, and give employers a clear reason to
            continue reading.
          </p>
          <p className="mt-5 font-serif text-[20px] italic text-navy">
            That is the thinking behind Veylora.
          </p>
        </div>

        <figure className="mx-auto w-full max-w-[380px] self-start lg:max-w-none">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 hidden h-full w-full border border-[#e3dcc9] bg-[#f1ecdf] lg:block"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-white p-2 shadow-[0_10px_34px_rgba(11,42,70,0.12)]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/founder-portrait.jpg"
                  alt="Daramola Qudus Abolaji, founder of Veylora"
                  fill
                  sizes="(min-width: 1024px) 380px, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <figcaption className="mt-5 text-center text-[12.5px] text-ink-muted">
            Founded by Daramola Qudus Abolaji
          </figcaption>
        </figure>

        <div className="lg:pt-[6px]">
          <p className="text-[13px] font-medium text-[#527b98]">Meet the Founder</p>
          <h2 className="mt-2 font-serif text-[30px] font-[500] leading-[1.15] text-navy">
            Daramola Qudus Abolaji
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.75] text-ink-body">
            Veylora was founded by Daramola Qudus Abolaji with a simple belief:
            people should not have to struggle to explain the value of the work
            they have already done.
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-body">
            Through Veylora, Qudus focuses on helping professionals present
            their experience with greater clarity, structure, and
            purpose&mdash;whether they are entering the job market, moving into
            a new role, repositioning their experience, or preparing for a more
            senior opportunity.
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-body">
            The goal is not to make every resume look the same. It is to
            understand the person behind the document, identify the strongest
            parts of their professional story, and turn that information into a
            resume that communicates their value clearly.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. Why Veylora ---------- */
const principles = [
  {
    title: "Clarity",
    Icon: DocIcon,
    text: "Your experience should be easy to understand. We organize information so employers can quickly see your background, strengths, accomplishments, and professional direction.",
  },
  {
    title: "Relevance",
    Icon: TargetIcon,
    text: "A strong resume is written for a purpose. We focus the document around the roles, industries, and opportunities that matter to the candidate.",
  },
  {
    title: "Authenticity",
    Icon: PersonIcon,
    text: "Your resume should sound like a polished version of you, not a generic template. We preserve your professional identity while improving how your experience is communicated.",
  },
];

export function WhyVeylora() {
  return (
    <section
      aria-labelledby="why-heading"
      className="border-y border-[#e9e4d6] bg-[#f3efe4]"
    >
      <div className={`${wrap} py-14 lg:py-[84px]`}>
        <p className={eyebrow}>Why Veylora</p>
        <h2
          id="why-heading"
          className="mt-4 max-w-[860px] font-serif text-[30px] font-[500] leading-[1.15] tracking-[-0.012em] text-navy sm:text-[38px] lg:text-[42px]"
        >
          Because a Resume Should Tell More Than Your Job History.
        </h2>
        <div className="mt-7 grid gap-6 lg:grid-cols-2 lg:gap-14">
          <p className="text-[16px] leading-[1.75] text-ink-body">
            Too many resumes describe responsibilities without showing the
            difference a person actually made. Others are filled with
            information but lack direction, making it difficult for a hiring
            manager to understand where the candidate fits or what they bring to
            the table.
          </p>
          <p className="text-[16px] leading-[1.75] text-ink-body">
            Veylora takes a different approach. We look beyond job titles and
            task lists to organize experience around contribution, strengths,
            progression, and the kind of opportunity the candidate is pursuing.
          </p>
        </div>
        <p className="mt-7 font-serif text-[22px] italic text-navy">
          Clear information. Strong positioning. A professional story that makes
          sense.
        </p>

        <ul className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-7">
          {principles.map(({ title, Icon, text }) => (
            <li
              key={title}
              className="rounded-[4px] border border-[#e4dfd0] bg-white px-7 pb-8 pt-8 shadow-[0_2px_14px_rgba(11,42,70,0.04)]"
            >
              <span className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#ddd5be] bg-[#faf8f2] text-navy">
                <Icon className="h-[26px] w-[26px]" />
              </span>
              <h3 className="mt-5 font-serif text-[26px] font-[500] text-navy">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-ink-muted">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 3. Our approach ---------- */
const steps = [
  { n: "01", title: "Understand", text: "We begin by understanding your experience, goals, strengths, and the opportunity you're pursuing." },
  { n: "02", title: "Position", text: "We identify the professional value that should be most visible and build the document around it." },
  { n: "03", title: "Write", text: "We turn your experience into clear, achievement-focused content with a professional structure." },
  { n: "04", title: "Refine", text: "We review the document carefully and refine the language, organization, and presentation so the finished resume feels accurate and purposeful." },
];

export function OurApproach() {
  return (
    <section aria-labelledby="approach-heading" className="bg-ivory">
      <div className={`${wrap} py-14 lg:py-[84px]`}>
        <p className={eyebrow}>Our Approach</p>
        <h2
          id="approach-heading"
          className="mt-4 font-serif text-[30px] font-[500] leading-[1.15] tracking-[-0.012em] text-navy sm:text-[38px] lg:text-[42px]"
        >
          More Than Formatting
        </h2>
        <p className="mt-5 max-w-[680px] text-[16px] leading-[1.75] text-ink-body">
          Good resume writing is not simply about choosing a modern template.
          The structure, language, positioning, and story all have to work
          together.
        </p>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-0">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`relative lg:pr-8 ${
                i > 0 ? "lg:border-l lg:border-[#dcd6c6] lg:pl-8" : ""
              }`}
            >
              <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#d3c39b] bg-[#f6efdc] text-[13px] font-medium text-[#8a6d3a]">
                {s.n}
              </span>
              {i < steps.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute right-7 top-[11px] hidden h-[16px] w-[16px] text-[#9fb2c1] lg:block"
                />
              )}
              <h3 className="mt-5 text-[13.5px] font-semibold uppercase tracking-[0.14em] text-navy">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-ink-muted">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- 4. What we do ---------- */
const services = [
  { title: "Resume Writing", Icon: DocIcon, text: "Professional resumes designed to communicate experience, accomplishments, strengths, and career direction clearly." },
  { title: "Executive Resumes", Icon: CrownIcon, text: "Strategic resume development for experienced professionals, managers, leaders, and executives." },
  { title: "Cover Letters", Icon: MailIcon, text: "Focused supporting documents that connect a candidate's background with the opportunity they are pursuing." },
  { title: "LinkedIn Positioning", Icon: UsersIcon, text: "Professional profile content that creates consistency between a resume and a candidate's public professional presence." },
  { title: "Career Biographies", Icon: PersonIcon, text: "Concise professional biographies that communicate experience, expertise, and leadership background." },
  { title: "Career Document Strategy", Icon: CompassIcon, text: "Thoughtful guidance on how your professional documents should work together as part of a broader job-search presentation." },
];

export function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-heading"
      className="border-t border-[#e9e4d6] bg-[#f3efe4]"
    >
      <div className={`${wrap} py-14 lg:py-[80px]`}>
        <h2
          id="what-heading"
          className="font-serif text-[30px] font-[500] leading-[1.15] tracking-[-0.012em] text-navy sm:text-[38px] lg:text-[42px]"
        >
          What We Do
        </h2>
        <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-11 lg:grid-cols-3 lg:gap-5">
          {services.map(({ title, Icon, text }) => (
            <li
              key={title}
              className="flex gap-5 rounded-[4px] border border-[#e4dfd0] bg-white/85 p-6 shadow-[0_2px_12px_rgba(11,42,70,0.04)]"
            >
              <span className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#ddd5be] bg-[#faf8f2] text-navy">
                <Icon className="h-[24px] w-[24px]" />
              </span>
              <div>
                <h3 className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-ink-muted">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 5. Navy brand statement ---------- */
const pillars = [
  { title: "Human Perspective", Icon: PersonIcon },
  { title: "Strategic Writing", Icon: TargetIcon },
  { title: "Purposeful Structure", Icon: DocIcon },
  { title: "Professional Presentation", Icon: StarOutlineIcon },
];

export function BrandStatement() {
  return (
    <section aria-labelledby="brand-heading" className="bg-[#0b3352] text-white">
      <div className={`${wrap} py-14 lg:py-[80px]`}>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#c9b07a]">
          The Veylora Approach
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <h2
            id="brand-heading"
            className="font-serif text-[32px] font-[500] leading-[1.15] tracking-[-0.012em] sm:text-[42px] lg:text-[48px]"
          >
            Your Career Is Personal.
            <br />
            Your Resume Should Be Too.
          </h2>
          <p className="text-[16px] leading-[1.75] text-white/85">
            We believe professional documents should reflect the person behind
            them. That means avoiding one-size-fits-all language and taking the
            time to understand what makes each candidate&rsquo;s experience
            meaningful.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-y-7 border-t border-white/15 pt-9 lg:mt-14 lg:grid-cols-4 lg:gap-0">
          {pillars.map(({ title, Icon }, i) => (
            <li
              key={title}
              className={`flex items-center gap-3.5 lg:justify-center ${
                i > 0 ? "lg:border-l lg:border-white/15" : ""
              }`}
            >
              <Icon className="h-[26px] w-[26px] shrink-0 text-[#c9b07a]" />
              <span className="text-[14.5px] font-medium">{title}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center font-serif text-[19px] italic text-white/90 lg:mt-12 lg:text-[22px]">
          Every document should have a reason for every word, every section, and
          every emphasis.
        </p>
      </div>
    </section>
  );
}

/* ---------- 6. Founder's perspective ---------- */
const audiences = ["Professionals", "Managers", "Leaders", "Executives"];

export function FounderPerspective() {
  return (
    <section aria-labelledby="perspective-heading" className="bg-ivory">
      <div
        className={`${wrap} grid gap-12 py-14 lg:grid-cols-2 lg:gap-20 lg:py-[84px]`}
      >
        <div className="flex gap-6 sm:gap-8">
          <div className="relative h-[110px] w-[110px] shrink-0 overflow-hidden sm:h-[150px] sm:w-[150px]">
            <Image
              src="/images/founder-square.jpg"
              alt="Daramola Qudus Abolaji"
              fill
              sizes="150px"
              className="object-cover"
            />
          </div>
          <div>
            <h2
              id="perspective-heading"
              className="font-serif text-[20px] font-[560] text-navy"
            >
              A Founder&rsquo;s Perspective
            </h2>
            <blockquote className="mt-3 font-serif text-[24px] font-[480] leading-[1.3] text-navy sm:text-[28px]">
              &ldquo;Your experience already has value. The job is to make that
              value easier to see.&rdquo;
            </blockquote>
            <p className="mt-4 text-[13.5px] text-ink-muted">
              &mdash; Daramola Qudus Abolaji
              <br />
              Founder, Veylora
            </p>
          </div>
        </div>

        <div className="lg:border-l lg:border-[#dcd6c6] lg:pl-16">
          <h2 className="font-serif text-[22px] font-[520] text-navy">
            Built Around Your Career Goals
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-body">
            Whether you&rsquo;re preparing for your next professional move,
            changing direction, returning to the job market, or stepping into a
            more senior position, Veylora is designed to help you present your
            experience with clarity and confidence.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {audiences.map((a) => (
              <li
                key={a}
                className="rounded-full border border-[#d8d1bd] bg-white/70 px-4 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#3f6a8c]"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Final CTA ---------- */
export function AboutCTA() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="border-t border-[#e9e4d6] bg-[#f3efe4]"
    >
      <div
        className={`${wrap} flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-[72px]`}
      >
        <div className="max-w-[640px]">
          <h2
            id="about-cta-heading"
            className="font-serif text-[30px] font-[500] leading-[1.15] tracking-[-0.01em] text-navy sm:text-[36px]"
          >
            Ready to Put Your Experience Into Focus?
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.7] text-ink-body">
            Tell us where you are in your career and where you want to go next.
            We&rsquo;ll help you build the professional documents that
            communicate that direction clearly.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
          <a
            href="/contact"
            className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[4px] bg-gold px-8 text-[14.5px] font-medium text-white transition-colors hover:bg-[#a5895f]"
          >
            Start Your Resume
            <ArrowRight className="h-[15px] w-[15px]" />
          </a>
          <a
            href="/services"
            className="text-[14.5px] font-medium text-navy underline decoration-[#b39669] decoration-[1.5px] underline-offset-[6px] transition-colors hover:text-navy-btn"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
