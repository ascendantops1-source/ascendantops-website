import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "AscendantOps — Helping Your Business Get Found by AI",
  description:
    "Independent AI visibility reviews and practical business advice. See what selected AI search tools say about your business and decide what to do next.",
  alternates: {
    canonical: "https://ascendantops.com",
    languages: {
      "en-US": "https://ascendantops.com",
      "en-CA": "https://ascendantops.com",
      "en-GB": "https://ascendantops.com",
      "en-AU": "https://ascendantops.com",
      en: "https://ascendantops.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AscendantOps",
    "image": "https://ascendantops.com/logo.png",
    "@id": "https://ascendantops.com/#organization",
    "url": "https://ascendantops.com",
    "telephone": "+1-437-475-3637",
    "sameAs": [
      "https://www.linkedin.com/in/ascendant-ops-0228a7439"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-navy text-white antialiased min-h-screen flex flex-col">
        <SiteHeader />

        <main className="flex-grow">{children}</main>

        <footer className="w-full border-t border-[#101d2c]/10 bg-[#f4f8fa] px-6 py-14 text-center text-sm text-[#647587]">
          <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
            <div className="mb-8 flex items-center justify-center gap-2">
              <img src="/ascendant-symbol.png" alt="" className="h-14 w-[68px] object-contain" />
              <img src="/ascendant-wordmark.png" alt="Ascendant Ops" className="h-10 w-[164px] object-contain" />
            </div>
            <p className="mb-5">© {new Date().getFullYear()} AscendantOps. Clear advice for a changing search landscape.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/about" className="hover:text-[#007f9b] transition-colors">About</Link>
              <Link href="/services/geo" className="hover:text-[#007f9b] transition-colors">AI visibility</Link>
              <Link href="/capital-audit" className="hover:text-[#007f9b] transition-colors">Capital audit</Link>
              <Link href="/pricing" className="hover:text-[#007f9b] transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-[#007f9b] transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
