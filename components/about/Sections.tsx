import Image from "next/image";
import { ArrowIcon } from "../visual/Marks";
import SkyBand from "../visual/SkyBand";
import CloudBank from "../visual/CloudBank";
import {
  BriefcaseLine,
  CheckLine,
  CompassLine,
  DocLine,
  EnvelopeLine,
  FlagLine,
  LayersLine,
  LensLine,
  MountainLine,
  PenNibLine,
  PencilLine,
  PersonLine,
  ProfileLine,
  QuoteMark,
  SparkLine,
  TargetLine,
  UsersLine,
} from "../visual/LineIcons";
import { Accent, FlightSteps, IconTile, NavyBand, PlaneTrail } from "../visual/Rich";

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
                  src="/images/founder-portrait-v2.jpg"
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
    Icon: LensLine,
    text: "Your experience should be easy to understand. We organize information so employers can quickly see your background, strengths, accomplishments, and professional direction.",
  },
  {
    title: "Relevance",
    Icon: TargetLine,
    text: "A strong resume is written for a purpose. We focus the document around the roles, industries, and opportunities that matter to the candidate.",
  },
  {
    title: "Authenticity",
    Icon: PenNibLine,
    text: "Your resume should sound like a polished version of you, not a generic template. We preserve your professional identity while improving how your experience is communicated.",
  },
];

export function WhyVeylora() {
  return (
    <section aria-labelledby="why-heading" className="gridpaper">
      <div className={`${wrap} py-16 lg:py-24`}>
      <p className="eyebrow"><span className="eyebrow-dot" />Why Veylora</p>
      <h2
        id="why-heading"
        className="mt-4 max-w-[860px] font-serif text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[42px]"
      >
        Because a Resume Should Tell <Accent>More</Accent> Than Your Job History.
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
      <p className="mt-8 flex items-start gap-3 font-serif text-[22px] italic leading-snug text-navy">
        <SparkLine className="mt-1 h-5 w-5 shrink-0 text-sky-ink" />
        Clear information. Strong positioning. A professional story that makes sense.
      </p>

      <ul className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-5">
        {principles.map(({ title, text, Icon }, i) => (
          <li key={title} data-tilt="4" className="glass-card relative overflow-hidden rounded-[24px] p-6 sm:p-7">
            <span aria-hidden="true" className="numeral pointer-events-none absolute -right-1 -top-2 text-[84px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <IconTile Icon={Icon} />
            <h3 className="mt-5 font-serif text-[28px] font-medium text-navy">{title}</h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-ink-muted">{text}</p>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", Icon: PersonLine, title: "Understand", text: "We begin by understanding your experience, goals, strengths, and the opportunity you're pursuing." },
  { n: "02", Icon: TargetLine, title: "Position", text: "We identify the professional value that should be most visible and build the document around it." },
  { n: "03", Icon: PencilLine, title: "Write", text: "We turn your experience into clear content that highlights your achievements, with a professional structure." },
  { n: "04", Icon: CheckLine, title: "Refine", text: "We review the document carefully and refine the language, organization, and presentation so the finished resume feels accurate and purposeful." },
];

export function OurApproach() {
  return (
    <section aria-labelledby="approach-heading" className="skywash">
      <div className={`${wrap} relative py-16 lg:py-24`}>
        <PlaneTrail className="absolute right-0 top-10 hidden w-[230px] opacity-70 lg:block" />
        <p className="eyebrow"><span className="eyebrow-dot" />Our Approach</p>
        <h2
          id="approach-heading"
          className="mt-4 font-serif text-[32px] font-medium leading-tight tracking-[-0.02em] text-navy sm:text-[42px]"
        >
          More Than <Accent>Formatting</Accent>
        </h2>
        <p className="mt-5 max-w-[680px] text-[16px] leading-[1.75] text-ink-body">
          Good resume writing is not simply about choosing a modern template.
          The structure, language, positioning, and story all have to work
          together.
        </p>
        <div className="mt-10 lg:mt-14">
          <FlightSteps steps={steps} cols={4} />
        </div>
      </div>
    </section>
  );
}

const services = [
  { Icon: DocLine, title: "Resume Writing", text: "Professional resumes designed to communicate experience, accomplishments, strengths, and career direction clearly." },
  { Icon: BriefcaseLine, title: "Executive Resumes", text: "Strategic resume development for experienced professionals, managers, leaders, and executives." },
  { Icon: EnvelopeLine, title: "Cover Letters", text: "Focused supporting documents that connect a candidate's background with the opportunity they are pursuing." },
  { Icon: ProfileLine, title: "LinkedIn Positioning", text: "Professional profile content that creates consistency between a resume and a candidate's public professional presence." },
  { Icon: PenNibLine, title: "Career Biographies", text: "Concise professional biographies that communicate experience, expertise, and leadership background." },
  { Icon: CompassLine, title: "Career Document Strategy", text: "Thoughtful guidance on how your professional documents should work together as part of a broader job-search presentation." },
];

export function WhatWeDo() {
  return (
    <section aria-labelledby="what-heading" className="gridpaper">
      <div className={`${wrap} py-16 lg:py-20`}>
      <p className="eyebrow"><span className="eyebrow-dot" />Services</p>
      <h2
        id="what-heading"
        className="mt-3 font-serif text-[32px] font-medium tracking-[-0.02em] text-navy sm:text-[42px]"
      >
        What We <Accent>Do</Accent>
      </h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {services.map(({ title, text, Icon }) => (
          <li key={title} className="glass-card group flex gap-4 rounded-[22px] p-5 transition duration-500 ease-sky hover:-translate-y-1 sm:p-6">
            <IconTile Icon={Icon} />
            <div>
              <h3 className="font-serif text-[21px] font-medium leading-snug text-navy">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.65] text-ink-muted">{text}</p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}

const pillars = [
  { title: "Human Perspective", Icon: PersonLine },
  { title: "Strategic Writing", Icon: PenNibLine },
  { title: "Purposeful Structure", Icon: LayersLine },
  { title: "Professional Presentation", Icon: SparkLine },
];

export function BrandStatement() {
  return (
    <NavyBand labelledBy="brand-heading">
      <div className={`${wrap} relative py-16 lg:py-24`}>
        <PlaneTrail light className="absolute -top-2 right-0 w-[180px] sm:w-[260px]" />
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#a9cdea]">The Veylora Approach</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <h2
            id="brand-heading"
            className="font-serif text-[34px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[44px]"
          >
            Your Career Is <span className="italic text-[#cfe7fb]">Personal.</span>
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
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {pillars.map(({ title, Icon }) => (
            <li key={title} className="glass-dark flex flex-col gap-4 rounded-[20px] p-4 font-serif text-[17px] font-medium leading-snug sm:flex-row sm:items-center sm:p-5 sm:text-[18px]">
              <IconTile Icon={Icon} dark />
              {title}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-12 max-w-[760px] text-center font-serif text-[20px] italic leading-snug text-white/90 lg:text-[24px]">
          Every document should have a reason for every word, every section, and every emphasis.
        </p>
      </div>
    </NavyBand>
  );
}

const audiences = [
  { label: "Professionals", Icon: BriefcaseLine },
  { label: "Managers", Icon: UsersLine },
  { label: "Leaders", Icon: FlagLine },
  { label: "Executives", Icon: MountainLine },
];

export function FounderPerspective() {
  return (
    <section aria-labelledby="perspective-heading" className={`${wrap} py-16 lg:py-24`}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div data-tilt="4" className="paper relative overflow-hidden rounded-[30px] bg-white p-6 shadow-[inset_0_1px_0_#fff,0_40px_80px_-44px_rgba(20,56,92,0.6),0_14px_30px_-18px_rgba(20,56,92,0.3)] ring-1 ring-white sm:p-9">
          <QuoteMark className="pointer-events-none absolute -right-2 -top-3 h-[120px] w-[160px] text-[#e3eff9]" />
          <div className="relative flex items-center gap-5">
            <div className="frame-layered relative h-[96px] w-[96px] shrink-0 rounded-[26px] sm:h-[112px] sm:w-[112px]">
            <div className="relative h-full w-full overflow-hidden rounded-[26px] ring-[3px] ring-white">
              <Image
                src="/images/founder-square-v2.jpg"
                alt="Daramola Qudus Abolaji"
                fill
                sizes="120px"
                className="object-cover"
              />
            </div>
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
          <blockquote className="relative mt-7 font-serif text-[26px] font-medium leading-[1.3] text-navy sm:text-[30px]">
            &ldquo;Your experience already has value. The job is to make that value <span className="hl">easier to see</span>.&rdquo;
          </blockquote>
        </div>

        <div className="lg:pt-4">
          <p className="eyebrow"><span className="eyebrow-dot" />Who it is for</p>
          <h2 className="mt-3 font-serif text-[30px] font-medium leading-tight text-navy sm:text-[34px]">Built Around Your Career <Accent>Goals</Accent></h2>
          <p className="mt-4 text-[15.5px] leading-[1.75] text-ink-body">
            Whether you&rsquo;re preparing for your next professional move,
            changing direction, returning to the job market, or stepping into a
            more senior position, Veylora is designed to help you present your
            experience with clarity and confidence.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {audiences.map(({ label, Icon }) => (
              <li key={label} className="chip-glass">
                <Icon />
                {label}
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
      <div className="relative isolate flex flex-col gap-8 overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,#ffffff_0%,#e4f1fb_45%,#c9e2f6_100%)] px-7 pb-24 pt-10 shadow-[inset_0_1px_0_#fff,0_40px_80px_-44px_rgba(20,56,92,0.55)] ring-1 ring-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:pb-16 lg:pt-12">
        <CloudBank
          className="-z-10 bottom-0 h-[calc(var(--cloud-h)*1.3)] [--cloud-h:clamp(110px,12vw,170px)] [mask-image:linear-gradient(180deg,transparent,#000_45%)]"
        />
        <PlaneTrail className="absolute right-6 top-5 -z-10 w-[160px] sm:w-[240px]" />
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
