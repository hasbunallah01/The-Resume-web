import Image from "next/image";
import { ArrowIcon } from "../visual/Marks";
import SkyBand from "../visual/SkyBand";

const wrap = "wrap";

export function AboutIntro() {
  return (
    <SkyBand dense>
      <section aria-labelledby="about-heading" className={wrap}>
        <div className="grid gap-10 py-14 lg:grid-cols-[1.15fr_0.8fr_1fr] lg:gap-12 lg:py-20">
          <div>
            <p className="eyebrow">About Veylora</p>
            <h1
              id="about-heading"
              className="mt-4 font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-navy sm:text-[46px]"
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
            <p className="mt-5 font-serif text-[22px] italic text-navy">That is the thinking behind Veylora.</p>
          </div>

          <figure className="mx-auto w-full max-w-[380px] self-start lg:max-w-none">
            <div className="paper relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white p-2 shadow-lift ring-1 ring-white">
              <div className="relative h-full w-full overflow-hidden rounded-[22px]">
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
            <figcaption className="mt-4 text-center text-[13px] text-ink-muted">
              Founded by Daramola Qudus Abolaji
            </figcaption>
          </figure>

          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-sky-ink">Meet the Founder</p>
            <h2 className="mt-2 font-serif text-[30px] font-medium leading-tight text-navy">Daramola Qudus Abolaji</h2>
            <p className="mt-5 text-[15.5px] leading-[1.75] text-ink-body">
              Veylora was founded by Daramola Qudus Abolaji with a simple belief:
              people should not have to struggle to explain the value of the work
              they have already done.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-body">
              Through Veylora, Qudus focuses on helping professionals present
              their experience with greater clarity, structure, and
              purpose, whether they are entering the job market, moving into
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
    </SkyBand>
  );
}

const principles = [
  {
    title: "Clarity",
    text: "Your experience should be easy to understand. We organize information so employers can quickly see your background, strengths, accomplishments, and professional direction.",
  },
  {
    title: "Relevance",
    text: "A strong resume is written for a purpose. We focus the document around the roles, industries, and opportunities that matter to the candidate.",
  },
  {
    title: "Authenticity",
    text: "Your resume should sound like a polished version of you, not a generic template. We preserve your professional identity while improving how your experience is communicated.",
  },
];

export function WhyVeylora() {
  return (
    <section aria-labelledby="why-heading" className={`${wrap} py-16 lg:py-24`}>
      <p className="eyebrow">Why Veylora</p>
      <h2
        id="why-heading"
        className="mt-4 max-w-[860px] font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[42px]"
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
        Clear information. Strong positioning. A professional story that makes sense.
      </p>

      <ul className="mt-10 grid gap-6 lg:grid-cols-3">
        {principles.map(({ title, text }) => (
          <li key={title} className="border-t border-[#d5e4f0] pt-5">
            <h3 className="font-serif text-[28px] font-medium text-navy">{title}</h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-ink-muted">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const steps = [
  { n: "01", title: "Understand", text: "We begin by understanding your experience, goals, strengths, and the opportunity you're pursuing." },
  { n: "02", title: "Position", text: "We identify the professional value that should be most visible and build the document around it." },
  { n: "03", title: "Write", text: "We turn your experience into clear content that highlights your achievements, with a professional structure." },
  { n: "04", title: "Refine", text: "We review the document carefully and refine the language, organization, and presentation so the finished resume feels accurate and purposeful." },
];

export function OurApproach() {
  return (
    <section aria-labelledby="approach-heading" className="bg-white/45">
      <div className={`${wrap} py-16 lg:py-24`}>
        <p className="eyebrow">Our Approach</p>
        <h2
          id="approach-heading"
          className="mt-4 font-serif text-[32px] font-medium leading-tight tracking-[-0.02em] text-navy sm:text-[42px]"
        >
          More Than Formatting
        </h2>
        <p className="mt-5 max-w-[680px] text-[16px] leading-[1.75] text-ink-body">
          Good resume writing is not simply about choosing a modern template.
          The structure, language, positioning, and story all have to work
          together.
        </p>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="font-serif text-[15px] italic text-sky-ink">{s.n}</span>
              <h3 className="mt-3 font-serif text-[24px] font-medium text-navy">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-ink-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const services = [
  { title: "Resume Writing", text: "Professional resumes designed to communicate experience, accomplishments, strengths, and career direction clearly." },
  { title: "Executive Resumes", text: "Strategic resume development for experienced professionals, managers, leaders, and executives." },
  { title: "Cover Letters", text: "Focused supporting documents that connect a candidate's background with the opportunity they are pursuing." },
  { title: "LinkedIn Positioning", text: "Professional profile content that creates consistency between a resume and a candidate's public professional presence." },
  { title: "Career Biographies", text: "Concise professional biographies that communicate experience, expertise, and leadership background." },
  { title: "Career Document Strategy", text: "Thoughtful guidance on how your professional documents should work together as part of a broader job-search presentation." },
];

export function WhatWeDo() {
  return (
    <section aria-labelledby="what-heading" className={`${wrap} py-16 lg:py-20`}>
      <h2
        id="what-heading"
        className="font-serif text-[32px] font-medium tracking-[-0.02em] text-navy sm:text-[42px]"
      >
        What We Do
      </h2>
      <ul className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, text }) => (
          <li key={title} className="border-t border-[#d5e4f0] pt-5">
            <h3 className="font-serif text-[22px] font-medium text-navy">{title}</h3>
            <p className="mt-2 text-[15px] leading-[1.65] text-ink-muted">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const pillars = ["Human Perspective", "Strategic Writing", "Purposeful Structure", "Professional Presentation"];

export function BrandStatement() {
  return (
    <section aria-labelledby="brand-heading" className="bg-[#102038] text-white">
      <div className={`${wrap} py-16 lg:py-20`}>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#d7c4a2]">The Veylora Approach</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <h2
            id="brand-heading"
            className="font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[44px]"
          >
            Your Career Is Personal.
            <br />
            Your Resume Should Be Too.
          </h2>
          <p className="text-[16px] leading-[1.75] text-white/80">
            We believe professional documents should reflect the person behind
            them. That means avoiding one size fits all language and taking the
            time to understand what makes each candidate&rsquo;s experience
            meaningful.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-y-6 border-t border-white/15 pt-8 lg:grid-cols-4">
          {pillars.map((title) => (
            <li key={title} className="font-serif text-[18px] font-medium">
              {title}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center font-serif text-[20px] italic text-white/90 lg:text-[22px]">
          Every document should have a reason for every word, every section, and every emphasis.
        </p>
      </div>
    </section>
  );
}

const audiences = ["Professionals", "Managers", "Leaders", "Executives"];

export function FounderPerspective() {
  return (
    <section aria-labelledby="perspective-heading" className={`${wrap} py-16 lg:py-24`}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="paper rounded-[28px] bg-white/85 p-6 shadow-paper ring-1 ring-white sm:p-8">
          <div className="flex gap-5">
            <div className="relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-full ring-4 ring-white sm:h-[120px] sm:w-[120px]">
              <Image
                src="/images/founder-square.jpg"
                alt="Daramola Qudus Abolaji"
                fill
                sizes="120px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 id="perspective-heading" className="font-serif text-[18px] font-medium text-navy">
                A Founder&rsquo;s Perspective
              </h2>
              <p className="mt-1 text-[13px] text-ink-muted">
                Daramola Qudus Abolaji
                <br />
                Founder, Veylora
              </p>
            </div>
          </div>
          <blockquote className="mt-6 font-serif text-[26px] font-medium leading-[1.3] text-navy sm:text-[28px]">
            &ldquo;Your experience already has value. The job is to make that value easier to see.&rdquo;
          </blockquote>
        </div>

        <div className="lg:pt-4">
          <h2 className="font-serif text-[28px] font-medium text-navy">Built Around Your Career Goals</h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-body">
            Whether you&rsquo;re preparing for your next professional move,
            changing direction, returning to the job market, or stepping into a
            more senior position, Veylora is designed to help you present your
            experience with clarity and confidence.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {audiences.map((a) => (
              <li key={a} className="rounded-full bg-white/80 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-sky-ink ring-1 ring-[#d5e4f0]">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AboutCTA() {
  return (
    <section aria-labelledby="about-cta-heading" className={`${wrap} pb-20`}>
      <div className="flex flex-col gap-8 rounded-[32px] bg-white/75 px-7 py-10 shadow-paper ring-1 ring-white sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[640px]">
          <h2
            id="about-cta-heading"
            className="font-serif text-[30px] font-medium leading-tight tracking-[-0.02em] text-navy sm:text-[36px]"
          >
            Ready to Put Your Experience Into Focus?
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.7] text-ink-body">
            Tell us where you are in your career and where you want to go next.
            We&rsquo;ll help you build the professional documents that
            communicate that direction clearly.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="/contact" className="btn-navy">
            Start Your Resume
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>
          <a href="/services" className="text-center text-[14.5px] font-medium text-navy underline decoration-[#9ec0da] decoration-2 underline-offset-[6px]">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
