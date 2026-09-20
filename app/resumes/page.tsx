import type { Metadata } from "next";
import Header from "@/components/Header";
import Intro from "@/components/resumes/Intro";
import Pricing from "@/components/resumes/Pricing";
import Steps from "@/components/resumes/Steps";
import Reviews from "@/components/resumes/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { partnershipSteps, storySteps } from "@/data/pricing";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Resume Writing Services | Veylora",
  description:
    "Strategically written resumes for professionals and executives. Explore Veylora's Professional, Executive and C-Suite resume packages.",
};

export default function ResumesPage() {
  return (
    <>
      <Header active="Resumes" />
      <main>
        <Intro />
        <Pricing />
        <Steps
          id="story-heading"
          heading="Every Veylora Project Begins With Your Story"
          steps={storySteps}
        />
        <Reviews reviews={reviews} />
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
