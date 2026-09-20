import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AboutCTA,
  AboutIntro,
  BrandStatement,
  FounderPerspective,
  OurApproach,
  WhatWeDo,
  WhyVeylora,
} from "@/components/about/Sections";

export const metadata: Metadata = {
  title: "About | Veylora",
  description:
    "Veylora helps professionals turn their experience, accomplishments and career direction into clear, compelling professional documents.",
};

export default function AboutPage() {
  return (
    <>
      <Header active="About" />
      <main>
        <AboutIntro />
        <WhyVeylora />
        <OurApproach />
        <WhatWeDo />
        <BrandStatement />
        <FounderPerspective />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
