import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// Priority 4 — Updated Default Meta (Homepage) & Hreflang Tag Alternates
export const metadata: Metadata = {
  title: "AscendantOps — B2B AI Search Visibility & GEO Agency",
  description:
    "AscendantOps audits your business's visibility across ChatGPT, Perplexity, and Google AI — then fixes what's broken. Free preliminary check. 48-hour delivery.",
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
  // Priority 4 — JSON-LD Structured Data covering 30+ Countries in areaServed
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AscendantOps",
    "image": "https://ascendantops.com/logo.png",
    "@id": "https://ascendantops.com/#organization",
    "url": "https://ascendantops.com",
    "telephone": "",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Australia" },
      { "@type": "Country", "name": "New Zealand" },
      { "@type": "Country", "name": "Ireland" },
      { "@type": "Country", "name": "Singapore" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "France" },
      { "@type": "Country", "name": "Spain" },
      { "@type": "Country", "name": "Italy" },
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "Sweden" },
      { "@type": "Country", "name": "Norway" },
      { "@type": "Country", "name": "Finland" },
      { "@type": "Country", "name": "Denmark" },
      { "@type": "Country", "name": "Switzerland" },
      { "@type": "Country", "name": "Austria" },
      { "@type": "Country", "name": "Belgium" },
      { "@type": "Country", "name": "Poland" },
      { "@type": "Country", "name": "Portugal" },
      { "@type": "Country", "name": "Japan" },
      { "@type": "Country", "name": "South Korea" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "Brazil" },
      { "@type": "Country", "name": "Mexico" },
      { "@type": "Country", "name": "Argentina" },
      { "@type": "Country", "name": "Colombia" },
      { "@type": "Country", "name": "South Africa" }
    ]
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-navy text-white antialiased min-h-screen flex flex-col">
        <header className="w-full py-4 px-6 md:px-12 border-b border-white/5 glass sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <svg className="w-8 h-8 text-brand-cyan" viewBox="0 0 100 100" fill="none">
                <path d="M50 15 L22 75 L36 75 L50 44 L64 75 L78 75 Z" fill="currentColor" />
                <rect x="71" y="48" width="6" height="6" fill="#FFFFFF" className="animate-pulse" />
                <rect x="79" y="56" width="6" height="6" fill="#00D2FF" />
                <rect x="63" y="64" width="6" height="6" fill="#00D2FF" className="animate-pulse" />
              </svg>
              <span className="text-xl font-bold tracking-wider text-white hover:text-brand-cyan transition-colors">
                ASCENDANT<span className="text-brand-cyan">OPS</span>
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm font-medium tracking-wide">
              <Link href="/about" className="hover:text-brand-cyan transition-colors">About</Link>
              <Link href="/services/geo" className="hover:text-brand-cyan transition-colors">GEO Audit</Link>
              <Link href="/services/assessment" className="hover:text-brand-cyan transition-colors">Assessments</Link>
              <Link href="/services/recurring" className="hover:text-brand-cyan transition-colors">Retainers</Link>
              <Link href="/capital-audit" className="hover:text-brand-cyan transition-colors">Capital Audit</Link>
              <Link href="/pricing" className="hover:text-brand-cyan transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-brand-cyan transition-colors">Contact</Link>
            </nav>
            <Link href="/contact" className="text-xs md:text-sm font-bold tracking-wider uppercase border border-brand-cyan text-brand-cyan px-4 py-2 rounded hover:bg-brand-cyan hover:text-brand-navy hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all duration-300">
              Free Audit Check
            </Link>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="w-full py-16 px-6 border-t border-white/5 bg-brand-dark text-center text-xs text-white/40">
          <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
            <div className="mb-8 flex justify-center items-center">
              <img src="/logo.png" alt="AscendantOps Master Logo" className="h-24 w-auto object-contain opacity-80" />
            </div>
            <p className="mb-4">© {new Date().getFullYear()} AscendantOps. All Rights Reserved. Asynchronous AI Operations.</p>
            <div className="flex space-x-6 justify-center">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/services/geo" className="hover:text-white transition-colors">GEO</Link>
              <Link href="/capital-audit" className="hover:text-white transition-colors">Capital Audit</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}