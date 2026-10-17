import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPage, { Mail, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Veylora",
  description:
    "The terms that apply when you use the Veylora website and work with Veylora on resumes, cover letters, LinkedIn profiles and other career documents.",
  alternates: { canonical: "/terms" },
};

const link = "font-medium text-navy underline decoration-[#9ec0da] decoration-2 underline-offset-[4px] hover:decoration-navy";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    body: (
      <>
        <p>
          These Terms of Service apply to your use of the Veylora website and to the career document services Veylora
          provides. By using the website or working with us, you agree to these terms. If you do not agree, please do
          not use the website.
        </p>
        <p>Additional details agreed with you for a specific project also apply to that project.</p>
      </>
    ),
  },
  {
    id: "about",
    title: "About Veylora",
    body: (
      <p>
        Veylora writes professional resumes, executive resumes, CVs, cover letters, LinkedIn profiles, career
        biographies and related career documents. Our writers work with you to understand your experience and goals,
        then write, review and refine your documents with you.
      </p>
    ),
  },
  {
    id: "services",
    title: "Our services and what to expect",
    body: (
      <>
        <p>
          Our packages and what each one includes are described on our{" "}
          <a href="/services#pricing" className={link}>
            Services page
          </a>
          . Most projects begin with a personal strategy interview, followed by writing, review and refinement.
        </p>
        <p>
          The service, scope and deliverables for your project are confirmed with you before work begins. If you are
          not sure which service fits your needs, contact us and we will explain the options.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    title: "Pricing and payment",
    body: (
      <p>
        Prices for each package are listed on our Services page, and flexible monthly payment plans are available. The
        price and payment arrangements for your project are confirmed with you before work begins.
      </p>
    ),
  },
  {
    id: "revisions-timing",
    title: "Revisions and timing",
    body: (
      <>
        <p>
          Every package includes rounds of revisions so the final document feels accurate and true to you. The
          Professional Resume package includes two rounds of revisions and a 3 to 5 business day turnaround.
        </p>
        <p>
          Most projects are completed within a few business days of your strategy interview, depending on the package
          and scope. The revisions and timing for your project are confirmed with you before work begins. Timing also
          depends on receiving the information and feedback we need from you.
        </p>
      </>
    ),
  },
  {
    id: "cancellations",
    title: "Changes, cancellations and refunds",
    body: (
      <p>
        If you need to change or cancel a project, please contact us as soon as possible. Any cancellation or refund
        terms that apply to your project are confirmed with you before work begins.
      </p>
    ),
  },
  {
    id: "no-guarantee",
    title: "No employment guarantee",
    body: (
      <p>
        We work to present your experience clearly and effectively. However, hiring decisions are made by employers, so
        we cannot guarantee interviews, job offers, promotions, salary outcomes or any particular result from using our
        documents.
      </p>
    ),
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities",
    body: (
      <ul>
        <li>Provide information about your experience, education and achievements that is accurate and complete.</li>
        <li>Only share documents and information that you have the right to share.</li>
        <li>Review your final documents carefully and let us know about anything that needs correcting before you use them.</li>
        <li>Do not send passwords, banking details or other sensitive information that is not needed for your documents.</li>
      </ul>
    ),
  },
  {
    id: "documents-content",
    title: "Your documents and our content",
    body: (
      <>
        <p>
          The documents we prepare for you are yours to use for your own career and job search. We handle your
          information and documents confidentially, as described in our{" "}
          <a href="/privacy" className={link}>
            Privacy Policy
          </a>
          .
        </p>
        <p>
          The website, including its text, design, graphics, branding and sample resumes, belongs to Veylora. Sample
          resumes are shown with permission and with contact details removed. Please do not copy, republish or resell
          website content or samples without our written permission.
        </p>
      </>
    ),
  },
  {
    id: "reviews",
    title: "Reviews and submissions",
    body: (
      <p>
        When you submit a review, you confirm that it reflects your genuine experience and you allow us to display it,
        including your name, rating, comments and any photo you add, on this website. We review submissions before they
        appear and may decline or remove reviews that are inappropriate or unrelated to our services. You can ask us to
        remove your review at any time.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <p>
        Please do not misuse the website. This includes submitting false or misleading information, sending spam,
        uploading harmful files, attempting to access areas of the site you are not authorized to use, or interfering
        with how the website works.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Liability and availability",
    body: (
      <>
        <p>
          We aim to keep the website accurate and available, but it is provided as it is, and we cannot promise it will
          always be uninterrupted or error free. Information on the website is general and may change.
        </p>
        <p>
          To the extent permitted by law, Veylora is not responsible for indirect or consequential losses arising from
          your use of the website or our documents. Nothing in these terms limits any rights you have that cannot be
          limited by law.
        </p>
      </>
    ),
  },
  {
    id: "changes-contact",
    title: "Changes and contact",
    body: (
      <>
        <p>
          We may update these terms from time to time. When we do, we will change the date at the top of this page.
          Continuing to use the website after an update means you accept the updated terms.
        </p>
        <p>
          If you have any questions about these terms, email us at <Mail />.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <LegalPage
          eyebrow="Legal"
          title="Terms of Service"
          intro="The terms that apply when you use this website and work with Veylora on your career documents."
          sections={sections}
          other={{ label: "Privacy Policy", href: "/privacy" }}
        />
      </main>
      <Footer />
    </>
  );
}
