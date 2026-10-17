import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource/playfair-display/latin-600.css";
import "./globals.css";
import MotionLayer from "@/components/visual/MotionLayer";

const siteUrl = "https://veylora.haybee.xyz";
const title = "Veylora | Professional Resume Writing & Career Documents";
const description =
  "Veylora creates professionally written, strategically structured resumes and career documents designed to present your experience with clarity, confidence, and impact.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "Veylora",
    locale: "en_US",
    url: siteUrl,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <MotionLayer />
      </body>
    </html>
  );
}
