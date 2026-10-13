import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AscendantOps | Clear, independent AI visibility advice",
  description: "Learn how AscendantOps reviews AI visibility, explains its findings, and gives businesses practical next steps without promising rankings.",
};

const method = [
  { number: "01", title: "Start with real questions", copy: "We start with the questions a customer might ask. Then we check what the AI tools return for your business and market." },
  { number: "02", title: "Show the evidence", copy: "Findings are tied to what we observed: the prompt, platform, date, and available sources. AI answers can change, so a review is a dated snapshot—not a permanent score." },
  { number: "03", title: "Explain the next move", copy: "We separate the practical fixes from the nice-to-haves. We explain why each one matters. You are free to act on it yourself." },
];

const principles = [
  { title: "Evidence before certainty", copy: "AI answers vary by wording, location, account, and time. We show what was checked and avoid presenting one result as a guarantee." },
  { title: "Plain language", copy: "You should understand the finding, its limits, and the next step. No new acronyms required." },
  { title: "Your choice after the review", copy: "An audit should leave you better informed. You can use the recommendations with your existing team or ask us about implementation." },
];

const faqs = [
  { q: "How much does an AI visibility audit cost?", a: "The preliminary check is free. The Basic Audit is $150. Implementation and deeper support are priced on the pricing page. You can review the scope before choosing." },
  { q: "How long does it take?", a: "The Basic Audit is listed with delivery within 48 hours. Timing for other services depends on their scope; the current delivery details appear with each option." },
  { q: "What is GEO (Generative Engine Optimization)?", a: "GEO means making your services, expertise, and location easy for AI tools to read and describe. It complements other ways customers find a business; it does not control or guarantee what a platform recommends." },
  { q: "Is there a GEO audit service available in the UK?", a: "Reviews can be discussed remotely. Tell us your location and the platforms your customers use. We will confirm whether the review fits." },
  { q: "Can Australian businesses get a GEO audit?", a: "We can discuss a remote review for an Australian business. The useful platforms and local questions depend on your audience, so we confirm the scope before work begins." },
  { q: "Do you offer services in Canada?", a: "AscendantOps is based in Toronto. Contact us with your city and business type so we can confirm the right scope for your market." },
  { q: "Do you work with US businesses?", a: "We can discuss remote work with US businesses. Service fit depends on the market, platform coverage, and the questions you want the review to answer." },
  { q: "My website ranks well on Google. Why is my AI visibility score low?", a: "Traditional search rankings and AI-generated answers are different experiences. AI tools draw on many sources. The answer can change with the question, the location, and the day. A review shows what appeared in the checks rather than treating one score as a prediction." },
  { q: "Why should I trust your score?", a: "A score is a dated set of checks. It is not a universal measure, and it does not promise future results. The report links every finding to the questions and platforms we checked. It states the evidence and its limits." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function About() {
  return (
    <div className="bg-white text-[#101d2c]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="label mb-6">About AscendantOps</div>
            <h1 className="font-editorial max-w-4xl text-5xl leading-[1.06] sm:text-6xl lg:text-7xl">A clearer view of what AI is saying <em className="text-[#0089a6]">about your business.</em></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#4a5b6d] sm:text-xl">We show you how your business appears in AI search. We tell you what the evidence proves, and what it does not. Then you decide the next step.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/pricing" className="btn-primary px-6 py-3">Explore services</Link>
              <Link href="/contact" className="btn-secondary px-6 py-3">Ask a question</Link>
            </div>
          </div>
          <aside className="rounded-[1.75rem] border border-[#c7eaf0] bg-[#e9f8fb] p-7 md:p-9 lg:col-span-5">
            <p className="text-sm font-bold uppercase tracking-[.14em] text-[#0089a6]">Our point of view</p>
            <p className="mt-4 font-editorial text-3xl leading-snug">A useful answer is more valuable than an impressive-sounding score.</p>
            <p className="mt-4 leading-relaxed text-[#4a5b6d]">We show you the evidence behind each recommendation. We flag where the answer is uncertain. You decide what deserves your time.</p>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#d7e0e6] bg-[#f4f8fa] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="label mb-5">How a review works</div>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">A transparent process, from question to next step.</h2>
          </div>
          <div className="mt-12 grid gap-0 md:grid-cols-3">
            {method.map((item, index) => <article key={item.number} className={`border-t border-[#d7e0e6] py-7 md:pr-8 ${index > 0 ? "md:border-l md:pl-8" : ""}`}>
              <div className="font-editorial text-4xl text-[#00a9cc]">{item.number}</div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-[#4a5b6d]">{item.copy}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="label mb-5">What to expect</div>
          <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">Independent advice, grounded in what we can verify.</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#4a5b6d]">AI visibility is still changing. No consultant can control what an AI platform says or promise a business will be recommended. A careful review shows what appeared during the check. It also identifies ways to make your business easier to understand.</p>
        </div>
        <div className="grid gap-4 lg:col-span-6 lg:col-start-7">
          {principles.map((item, index) => <article key={item.title} className="rounded-2xl border border-[#d7e0e6] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(16,29,44,.24)]">
            <div className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e9f8fb] text-sm font-bold text-[#0089a6]">{index + 1}</span>
              <div><h3 className="font-semibold">{item.title}</h3><p className="mt-2 leading-relaxed text-[#647587]">{item.copy}</p></div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="border-y border-[#d7e0e6] bg-[#f4f8fa] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="label mb-5">What the review includes</div>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">A report you can trace back to what was checked.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#4a5b6d] lg:col-span-7 lg:col-start-6">
            <p>The Basic Audit covers five AI platforms. You get three specific findings, competitor context for your area, and delivery within 48 hours. The report records the questions we asked. It shows what appeared, what did not, and which sources were available.</p>
            <p>If you choose implementation, we fix the issues we found and clarify key information on your site. A broader transformation adds content work, competitor analysis, monitoring, and a before-and-after report.</p>
            <p>The report is meant to help you decide what deserves attention. It does not promise a particular ranking, recommendation, or business outcome. AI answers vary by question, platform, location, and time. Our findings describe the checks we ran and their limits.</p>
            <p>You can use the recommendations with your own team. Implementation and ongoing support are options, not a condition of receiving the audit.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-24" aria-labelledby="about-faq-title">
        <div className="mx-auto max-w-3xl text-center">
          <div className="label mb-5">Common questions</div>
          <h2 id="about-faq-title" className="font-editorial text-4xl leading-tight sm:text-5xl">A few things people ask before starting.</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-[#d7e0e6] bg-white p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#142536] marker:hidden">
                {faq.q}
                <span aria-hidden="true" className="shrink-0 text-xl text-[#0089a6] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl leading-relaxed text-[#647587]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-[#e9f8fb] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="label mb-5">A practical first step</div>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">You don’t need to take our word for it.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#4a5b6d]">Start with a preliminary check or review what each service includes. We’ll make the scope and price clear before you decide whether to proceed.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Link href="/contact?service=Free%20Preliminary%20Check" className="btn-primary px-6 py-3 text-center">Request a free check</Link>
            <Link href="/pricing" className="btn-secondary px-6 py-3 text-center">See pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
