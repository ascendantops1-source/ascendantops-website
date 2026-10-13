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
  openGraph: {
    type: "website",
    url: "https://ascendantops.com",
    siteName: "AscendantOps",
    title: "AscendantOps — Helping Your Business Get Found by AI",
    description:
      "Independent AI visibility reviews and practical business advice. See what selected AI search tools say about your business and decide what to do next.",
    images: [
      {
        url: "https://ascendantops.com/ascendant-wordmark.png",
        width: 118,
        height: 28,
        alt: "AscendantOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AscendantOps — Helping Your Business Get Found by AI",
    description:
      "Independent AI visibility reviews and practical business advice. See what selected AI search tools say about your business and decide what to do next.",
    images: ["https://ascendantops.com/ascendant-wordmark.png"],
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
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832
    },
    "areaServed": [
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Australia" }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/ascendant-ops-0228a7439"
    ]
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ascendantops.com/" },
      { "@type": "ListItem", "position": 2, "name": "AI visibility", "item": "https://ascendantops.com/services/geo" },
      { "@type": "ListItem", "position": 3, "name": "Assessments", "item": "https://ascendantops.com/services/assessment" },
      { "@type": "ListItem", "position": 4, "name": "Retainers", "item": "https://ascendantops.com/services/recurring" },
      { "@type": "ListItem", "position": 5, "name": "Benchmarks", "item": "https://ascendantops.com/benchmarks" },
      { "@type": "ListItem", "position": 6, "name": "About", "item": "https://ascendantops.com/about" },
      { "@type": "ListItem", "position": 7, "name": "Contact", "item": "https://ascendantops.com/contact" }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
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
