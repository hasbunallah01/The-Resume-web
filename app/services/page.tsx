import type { Metadata } from "next";
import Header from "@/components/Header";
import Intro from "@/components/resumes/Intro";
import Pricing from "@/components/resumes/Pricing";
import Steps from "@/components/resumes/Steps";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { partnershipSteps, storySteps } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Services | Veylora",
  description:
    "Strategically written resumes for professionals and executives. Explore Veylora's Professional, Executive and C-Suite resume packages.",
};

// Reviews are fetched live from the database on every request.
export const dynamic = "force-dynamic";

export default function ServicesPage() {
  return (
    <>
      <Header active="Services" />
      <main>
        <Intro />
        <Pricing />
        <Steps
          id="story-heading"
          heading="Every Veylora Project Begins With Your Story"
          steps={storySteps}
        />
        <ReviewsSection />
        <Steps
          id="partnership-heading"
          heading="How our executive partnership process works:"
          steps={partnershipSteps}
          tone="mist"
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
