import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPage, { Mail, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Veylora",
  description:
    "How Veylora collects, uses and protects the information you share when you contact us, request career documents, join our mailing list or leave a review.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <>
        <p>
          Veylora (&ldquo;Veylora,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) writes resumes,
          cover letters, LinkedIn profiles and other career documents for professionals. This Privacy Policy explains
          what information we collect when you visit this website, contact us, join our mailing list, leave a review or
          work with us, and how we use, store and protect it.
        </p>
        <p>
          Career documents are personal. We treat the information you share with us, including your resume and career
          history, as confidential.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We only collect the information you choose to give us through the website or while we work together:</p>
        <ul>
          <li>
            <strong>Contact form.</strong> Your first and last name, email address, phone number (optional), current
            career level, the service you are interested in, how you heard about Veylora, a description of your career
            goals and, if you choose to upload one, your current resume (PDF, DOC or DOCX, up to 4 MB). If you arrive
            from a writer&rsquo;s profile, the writer you selected is included too.
          </li>
          <li>
            <strong>Mailing list.</strong> Your email address, if you sign up for career insights and updates.
          </li>
          <li>
            <strong>Reviews.</strong> Your name, star rating, written comments and, if you choose to add one, a photo.
          </li>
          <li>
            <strong>Project information.</strong> If you work with us, the career history, achievements, goals and
            documents you share during your strategy interview and the writing process.
          </li>
          <li>
            <strong>Technical information.</strong> Like most websites, our hosting provider processes standard
            technical data such as your IP address, browser type and the pages you request, so the site can be
            delivered and protected.
          </li>
        </ul>
        <p>
          Please do not send passwords, banking details or other sensitive information that is not needed for your
          career documents.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>respond to your request and recommend the right service;</li>
          <li>understand your experience and goals so we can write and refine your career documents;</li>
          <li>communicate with you about your project;</li>
          <li>send career insights and updates if you joined our mailing list;</li>
          <li>review, moderate and publish reviews you submit;</li>
          <li>keep the website secure and prevent spam or misuse.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </>
    ),
  },
  {
    id: "forms",
    title: "How our forms work",
    body: (
      <>
        <p>
          <strong>Contact form.</strong> When you submit the contact form, your details and any resume you attach are
          sent by email to the Veylora team using our email provider, Resend. You also receive an automatic
          confirmation email. Contact form submissions are delivered by email and are not saved in a website database.
        </p>
        <p>
          <strong>Mailing list.</strong> When you sign up, your email address is added to our mailing list with Resend
          and our team receives a notification.
        </p>
        <p>
          <strong>Reviews.</strong> Reviews are stored in our database and are not shown on the website until our team
          approves them. Approved reviews, including your name, rating, comments and photo if you added one, are shown
          publicly on this website. Photos are resized and stored with our file storage provider. To limit spam, we store a one way scrambled (hashed) version of your IP address with each review
          instead of the address itself. Our team receives an email notification for each new review.
        </p>
      </>
    ),
  },
  {
    id: "documents-and-samples",
    title: "Your documents and our samples",
    body: (
      <>
        <p>
          Resumes, career history and other documents you share are used only to provide your service. They are handled
          confidentially and are only accessed by the Veylora team members who need them to provide your service.
        </p>
        <p>
          The sample resumes shown on our Our Work page are published with permission, and contact details are removed
          to protect client privacy. We will not publish your documents as a sample without your permission.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Service providers and sharing",
    body: (
      <>
        <p>We share information only with the providers that help us run this website and deliver our service:</p>
        <ul>
          <li>Vercel, which hosts the website and stores review photos;</li>
          <li>Neon, which provides the database where reviews are stored;</li>
          <li>Resend, which delivers our emails and manages our mailing list.</li>
        </ul>
        <p>
          These providers process information on our behalf to provide their services. We may also disclose
          information where the law requires it. Our providers may store and process information in countries other
          than your own.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    body: (
      <>
        <p>
          This website does not use advertising or analytics cookies, and we do not use third party tracking tools. A
          single security cookie is used only when a Veylora team member signs in to manage reviews.
        </p>
        <p>
          Our pages may link to other websites. Those websites have their own privacy practices, which we do not
          control.
        </p>
      </>
    ),
  },
  {
    id: "security-retention",
    title: "Security and retention",
    body: (
      <>
        <p>
          We take reasonable steps to protect your information, including encrypted connections to the website and
          restricted access to our email, database and file storage. No method of transmission or storage is
          completely secure, so we cannot guarantee absolute security.
        </p>
        <p>
          We keep information only for as long as we need it to respond to you, provide your service, maintain
          reasonable business records and meet any legal obligations. You can ask us to delete your information at any
          time.
        </p>
      </>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices and rights",
    body: (
      <>
        <p>You can contact us at any time to:</p>
        <ul>
          <li>ask what information we hold about you;</li>
          <li>correct or update your information;</li>
          <li>ask us to delete your information or remove a published review;</li>
          <li>unsubscribe from our mailing list.</li>
        </ul>
        <p>
          Email <Mail /> and we will respond as soon as we can. Depending on where you live, you may have additional
          rights under local data protection laws.
        </p>
      </>
    ),
  },
  {
    id: "updates-contact",
    title: "Updates and contact",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will change the date at the top of this
          page.
        </p>
        <p>
          If you have any questions about this policy or how your information is handled, email us at <Mail />.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <LegalPage
          eyebrow="Legal"
          title="Privacy Policy"
          intro="How Veylora collects, uses and protects the information you share with us."
          sections={sections}
          other={{ label: "Terms of Service", href: "/terms" }}
        />
      </main>
      <Footer />
    </>
  );
}
