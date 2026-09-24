import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Mission from "@/components/Mission";
import Steps from "@/components/resumes/Steps";
import { storySteps } from "@/data/pricing";
import Writers from "@/components/Writers";
import ServicesTeaser from "@/components/ServicesTeaser";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header active="Home" />
      <main>
        <Hero />
        <TrustStrip />
        <Mission />
        <Steps
          id="home-process-heading"
          heading="How Working With Veylora Works"
          steps={storySteps}
        />
        <Writers />
        <ServicesTeaser />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
