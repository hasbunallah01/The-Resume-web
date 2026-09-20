import Image from "next/image";

const benefits = [
  { lead: "Recruiters landing in your inbox", rest: "pitching great-fit jobs they've handpicked for YOU." },
  { lead: "Waking up every day energized to go to work", rest: "instead of psyching yourself up." },
  { lead: "Breaking into a smile whenever someone asks what you do", rest: "instead of changing the subject." },
  { lead: "Feeling fulfilled in your present and excited for your future", rest: "instead of stagnant, stuck and purposeless." },
];

export default function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="bg-ivory">
      <div className="mx-auto grid w-[min(1232px,calc(100%-48px))] gap-10 py-14 lg:grid-cols-[1.15fr_1fr_0.95fr] lg:gap-[52px] lg:py-[84px]">
        <div>
          <h1
            id="intro-heading"
            className="font-serif text-[32px] font-[500] leading-[1.16] tracking-[-0.012em] text-navy sm:text-[38px] lg:text-[40px]"
          >
            Imagine hearing, &lsquo;You&rsquo;re exactly who we&rsquo;ve been looking for.&rsquo;
          </h1>
          <p className="mt-6 text-[16px] leading-[1.75] text-ink-body">
            This is what the hiring manager at your dream company should say
            when they pick up your resume. (And then run to offer you a position
            before someone else can!)
          </p>
          <p className="mt-4 text-[16px] leading-[1.75] text-ink-body">
            If you&rsquo;re not getting this type of response, it&rsquo;s not
            that you&rsquo;re not qualified &mdash; it&rsquo;s that{" "}
            <strong className="font-semibold text-navy">
              your current resume doesn&rsquo;t reflect what you can really
              offer.
            </strong>
          </p>
          <p className="mt-6 font-serif text-[24px] font-[560] text-navy">
            Let&rsquo;s fix that.
          </p>
        </div>

        <div className="lg:border-l lg:border-[#dcd6c6] lg:pl-[40px]">
          <p className="text-[16px] leading-[1.7] text-ink-body">
            <strong className="font-semibold text-navy">
              You probably already know the secret to a stand-out executive
              resume is a memorable career story &amp; personal brand.
            </strong>{" "}
            This is where many job seekers get stuck.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink-body">
            Wouldn&rsquo;t it be amazing if your resume told a memorable
            narrative about <strong className="font-semibold text-navy">who you are</strong>{" "}
            and{" "}
            <strong className="font-semibold text-navy">
              how your unique skills transform companies?
            </strong>
          </p>
          <p className="mt-5 font-serif text-[20px] italic text-navy">
            Can you picture it&hellip;
          </p>
          <ul className="mt-4 space-y-3.5">
            {benefits.map((b) => (
              <li key={b.lead} className="flex gap-3 text-[15px] leading-[1.6] text-ink-body">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-gold"
                />
                <span>
                  <strong className="font-semibold text-navy">{b.lead}</strong>{" "}
                  {b.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[254/237] w-full self-start overflow-hidden lg:aspect-auto lg:h-[372px]">
          <Image
            src="/images/workspace.jpg"
            alt="Laptop, notebook, pen and coffee on a wooden desk"
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
