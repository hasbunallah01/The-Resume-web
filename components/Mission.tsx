import Image from "next/image";

export default function Mission() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="relative overflow-hidden bg-[#1c4363] text-white lg:h-[270px]"
    >
      <Image
        src="/images/mission.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0e2f48]/55 lg:hidden" aria-hidden="true" />
      <div className="relative mx-auto flex w-[min(1232px,calc(100%-48px))] flex-col items-center px-0 py-14 text-center lg:pt-[41px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] lg:text-[12.5px]">
          Our Mission
        </p>
        <h2
          id="mission-heading"
          className="mt-[11px] max-w-[590px] font-serif text-[26px] font-normal leading-[1.25] tracking-[-0.005em] lg:text-[30px] lg:leading-[36.5px]"
        >
          Helping professionals present the experience
          <br className="hidden lg:inline" /> they have worked hard to build.
        </h2>
        <p className="mt-[16px] max-w-[468px] text-[14px] leading-[23px] text-white/95 lg:text-[13.9px] lg:leading-[23.2px]">
          At Veylora, we help job seekers communicate their experience, skills,
          achievements, and professional value through strong, well-crafted
          career documents that open doors to new opportunities.
        </p>
      </div>
    </section>
  );
}
