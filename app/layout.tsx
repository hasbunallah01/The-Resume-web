import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/newsreader/wght-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veylora | Professional Resume Writing & Career Documents",
  description:
    "Veylora creates professionally written, strategically structured resumes and career documents designed to present your experience with clarity, confidence, and impact.",
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
