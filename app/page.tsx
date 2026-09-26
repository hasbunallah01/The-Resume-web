import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Mission from "@/components/Mission";
import Problem from "@/components/home/Problem";
import ServicesOverview from "@/components/home/ServicesOverview";
import BeforeAfter from "@/components/home/BeforeAfter";
import Steps from "@/components/resumes/Steps";
import { storySteps } from "@/data/pricing";
import Writers from "@/components/Writers";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import WhyVeylora from "@/components/home/WhyVeylora";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/CTA";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header active="Home" />
      <main>
        <Hero />
        <TrustStrip />
        <Mission />
        <Problem />
        <ServicesOverview />
        <BeforeAfter />
        <Steps
          id="home-process-heading"
          heading="How Working With Veylora Works"
          steps={storySteps}
        />
        <Writers />
        <WhoWeHelp />
        <WhyVeylora />
        <FAQ />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
