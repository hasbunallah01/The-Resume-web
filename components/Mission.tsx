import { Accent, PlaneTrail } from "./visual/Rich";

export default function Mission() {
  return (
    <section aria-labelledby="mission-heading" className="wrap py-16 lg:py-24">
      <div className="paper relative isolate overflow-hidden rounded-[32px] bg-white/80 px-6 py-12 text-center shadow-[0_1px_0_#fff_inset,0_30px_70px_-40px_rgba(28,72,112,0.45),0_12px_30px_-18px_rgba(28,72,112,0.25)] ring-1 ring-white sm:px-12 lg:py-16">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(214,234,250,0.7),transparent_70%)]" />
        <PlaneTrail className="absolute -left-6 bottom-4 hidden w-[240px] opacity-80 sm:block" />
        <PlaneTrail className="absolute -right-10 top-2 w-[170px] -scale-x-100 opacity-60 sm:w-[220px]" />
        <p className="eyebrow justify-center"><span className="eyebrow-dot" />Our Mission</p>
        <h2
          id="mission-heading"
          className="mx-auto mt-4 max-w-[740px] font-serif text-[30px] font-medium leading-[1.2] tracking-[-0.02em] text-navy sm:text-[38px]"
        >
          Helping professionals present the <Accent>experience</Accent> they have worked hard to build.
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.75] text-ink-body">
          At Veylora, we help job seekers communicate their experience, skills,
          achievements, and professional value through strong, well crafted
          career documents that open doors to new opportunities.
        </p>
      </div>
    </section>
  );
}
