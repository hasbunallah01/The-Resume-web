import Image from "next/image";
import { writers } from "@/data/writers";

export default function Writers() {
  const featured = writers.filter((w) => w.featured && w.photo);

  return (
    <section id="writers" aria-labelledby="writers-heading" className="wrap py-16 lg:py-20">
      <div className="max-w-[680px]">
        <p className="eyebrow">Meet Our Resume Writing Experts</p>
        <h2
          id="writers-heading"
          className="mt-3 font-serif text-[32px] font-medium leading-[1.18] tracking-[-0.02em] text-navy sm:text-[40px]"
        >
          Experienced professionals dedicated to helping job seekers communicate their value with clarity and confidence.
        </h2>
      </div>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((w) => (
          <li key={w.slug}>
            <a href={`/writers#${w.slug}`} className="group block">
              <span className="relative mx-auto block h-[148px] w-[148px] overflow-hidden rounded-full bg-white shadow-paper ring-4 ring-white">
                <Image
                  src={w.photo as string}
                  alt={`Portrait of ${w.name}`}
                  fill
                  sizes="148px"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </span>
              <span className="mt-4 block text-center font-serif text-[18px] font-medium leading-tight text-navy">
                {w.name}
              </span>
              <span className="mt-1 block text-center text-[12.5px] text-ink-soft">{w.cardRole}</span>
              <span className="mt-2 block text-center text-[12.5px] leading-[1.5] text-ink-muted">{w.summary}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <a href="/writers" className="text-[14.5px] font-medium text-navy underline decoration-[#9ec0da] decoration-2 underline-offset-[6px]">
          Meet the writing team
        </a>
      </p>
    </section>
  );
}
