import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkyBand from "@/components/visual/SkyBand";
import { ArrowIcon, Spark } from "@/components/visual/Marks";

export const metadata: Metadata = {
  title: "Page not found | Veylora",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <SkyBand dense>
          <section aria-labelledby="nf-heading" className="wrap flex min-h-[64svh] flex-col items-center justify-center py-20 text-center">
            <p className="eyebrow">
              <Spark className="h-3.5 w-3.5 text-[#7fb3e6]" />
              Page not found
            </p>
            <h1
              id="nf-heading"
              className="mt-5 max-w-[640px] font-serif text-[40px] font-medium leading-[1.08] tracking-[-0.02em] text-navy sm:text-[54px]"
            >
              This page has drifted off course.
            </h1>
            <p className="mt-5 max-w-[460px] text-[17px] leading-[1.7] text-ink-body">
              The link may be out of date, or the page may have moved. Let&rsquo;s get you back to
              where your story continues.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <a href="/" className="btn-navy">
                Back to Home
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <a href="/services" className="btn-white">
                Explore Our Services
              </a>
            </div>
          </section>
        </SkyBand>
      </main>
      <Footer />
    </>
  );
}
