import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import Process from "@/components/contact/Process";
import TrustFaq from "@/components/contact/TrustFaq";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact | Veylora",
  description:
    "Tell Veylora about your career goals. Whether you need a stronger resume, a personal brand makeover or executive career support, we're here to help.",
};

export default function ContactPage() {
  return (
    <>
      <Header active="Contact" />
      <main>
        <ContactHero />
        <ContactSection />
        <Process />
        <TrustFaq />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
