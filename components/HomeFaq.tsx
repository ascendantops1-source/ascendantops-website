import Link from "next/link";

const faqs = [
  {
    q: "What does AI visibility actually mean?",
    a: "When someone asks an AI tool for a recommendation, it answers with a short list of names. AI visibility is whether your business appears in that list. If it does not, the customer never learns you exist.",
  },
  {
    q: "How is this different from SEO?",
    a: "Search engine optimization targets a ranked list of links. AI tools answer in sentences and name a few businesses. The signals differ: clear service descriptions, consistent location details, and structured information machines can read without guessing.",
  },
  {
    q: "What happens during the free check?",
    a: "We look at your website the way an AI tool would. You get your score, the three biggest issues we found, and a plain explanation of what each one costs you. No cost, no obligation.",
  },
  {
    q: "How long does it take?",
    a: "Two business days. The check is automated, but a person reviews every finding before it reaches you.",
  },
  {
    q: "Do I have to make the changes myself?",
    a: "No. You can take the report to your own web developer, or we can implement the fixes for you. Either way, you keep the report.",
  },
  {
    q: "Is this only for large companies?",
    a: "No. Most of our clients are local and regional businesses with fewer than fifty staff. The problem is the same whether you have three locations or one.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomeFaq() {
  return (
    <section className="w-full px-6 md:px-12 max-w-5xl mx-auto pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-3 mb-10">
        <div className="label">Common questions</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0E1A]">
          Questions people ask before they start
        </h2>
      </div>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="card p-6 group">
            <summary className="font-bold text-[#0A0E1A] cursor-pointer list-none flex justify-between items-start gap-4">
              <h3 className="text-lg leading-snug">{f.q}</h3>
              <span className="text-[#00A9CC] text-xl leading-none shrink-0 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="text-[#0A0E1A]/70 leading-relaxed mt-4">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="text-sm text-[#0A0E1A]/55 mt-8">
        Still unsure?{" "}
        <Link href="/contact" className="underline hover:text-[#007f9b]">
          Ask us directly
        </Link>
        . We answer questions before you buy anything.
      </p>
    </section>
  );
}
