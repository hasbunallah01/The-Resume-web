import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { WriterCards, WritersHero } from "@/components/writers/WritersPage";
import TeamTrust from "@/components/writers/TeamTrust";

export const metadata: Metadata = {
  title: "Our Writers | Veylora",
  description:
    "Meet the experienced resume and career writers behind Veylora's professional career documents.",
};

export default function WritersPage() {
  return (
    <>
      <Header active="Our Writers" />
      <main>
        <WritersHero />
        <WriterCards />
        <TeamTrust />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
