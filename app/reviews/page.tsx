import type { Metadata } from "next";
import Header from "@/components/Header";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Reviews | Veylora",
  description: "Real reviews from people who have worked with Veylora.",
};

// Reviews are fetched live from the database on every request.
export const dynamic = "force-dynamic";

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-4">
        <ReviewsSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
