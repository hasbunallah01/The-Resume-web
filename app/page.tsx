import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Founder from "@/components/Founder";
import Mission from "@/components/Mission";
import Writers from "@/components/Writers";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header active="Home" />
      <main>
        <Hero />
        <TrustStrip />
        <Founder />
        <Mission />
        <Writers />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
