import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/playfair-display/latin-500.css";
import "@fontsource/playfair-display/latin-600.css";
import "@fontsource/playfair-display/latin-700.css";
import "@fontsource/playfair-display/latin-500-italic.css";
import "@fontsource/playfair-display/latin-600-italic.css";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
