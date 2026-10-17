import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SkyBand from "@/components/visual/SkyBand";
import SampleGallery from "@/components/samples/SampleGallery";

export const metadata: Metadata = {
  title: "Sample Resumes | Veylora",
  description:
    "A look at resumes written by Veylora across early career, mid level, senior and executive roles. Shown with personal details removed to protect client privacy.",
  alternates: { canonical: "/samples" },
};

export default function SamplesPage() {
  return (
    <>
      <Header active="Samples" />
      <main id="main">
        <SkyBand>
          <section aria-labelledby="samples-heading" className="wrap pb-10 pt-12 lg:pb-12 lg:pt-16">
            <p className="eyebrow">Sample Work</p>
            <h1
              id="samples-heading"
              className="mt-4 max-w-[760px] font-serif text-[40px] font-medium leading-[1.06] tracking-[-0.02em] text-navy sm:text-[54px]"
            >
              A Look at Our Work
            </h1>
            <p className="mt-5 max-w-[560px] text-[17px] leading-[1.7] text-ink-body">
              A selection of resumes written for professionals at different stages of their careers. Personal
              details have been removed to protect client privacy.
            </p>
          </section>
        </SkyBand>
        <SampleGallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
