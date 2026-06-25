import type { Metadata } from "next";
import Link from "next/link";
import RoiCalculator from "../../components/RoiCalculator";

// Priority 4 — Updated Meta Description
export const metadata: Metadata = {
  title: "About Us — AscendantOps",
  description:
    "AscendantOps is a Toronto-based AI visibility consultancy serving businesses in 30+ countries. We score and optimize your presence across all major AI search platforms.",
};

export default function About() {
  return (
    <div className="w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Your Next Customer Is Asking AI.<br />
          <span className="bg-gradient-to-r from-white via-slate-100 to-brand-cyan bg-clip-text text-transparent glow-text font-extrabold">Are You the Answer?</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
          AscendantOps helps businesses show up when AI recommends who to hire, buy from, or trust — in any industry, any city, anywhere in the world.
        </p>
      </section>

      {/* Section 1 — The Shift */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-cyan uppercase tracking-wider">How Customers Find You Has Changed</h2>
          <div className="space-y-4 text-white/70 font-light leading-relaxed">
            <p>
              Your customers used to Google you. Now millions of them ask ChatGPT, Perplexity, or Google AI instead.
            </p>
            <p>
              They type things like "best plumber near me" or "most trusted accountant in London" — and they go with whoever AI recommends.
            </p>
            <p>
              If your business isn't in that answer, that customer goes to your competitor. Not because you did anything wrong. Simply because AI doesn't know you exist yet.
            </p>
          </div>
        </div>
        <div className="h-80 rounded-lg border border-white/5 relative overflow-hidden shadow-[0_0_30px_rgba(0,210,255,0.05)]">
          <img src="/toronto-skyline.png" alt="Toronto Skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-10" />
        </div>
      </section>

      {/* Section 2 — The Problem */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center text-brand-cyan uppercase tracking-wider">The Hidden Cost of Being Invisible to AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-lg glass-hover space-y-4">
            <h4 className="text-lg font-bold text-white">Your competitors are getting recommended. You're not.</h4>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Every time AI recommends someone in your industry and it isn't you, that is a customer your marketing budget helped attract — and handed to someone else. This is happening hundreds of times a month.
            </p>
          </div>

          <div className="glass p-8 rounded-lg glass-hover space-y-4">
            <h4 className="text-lg font-bold text-white">Google ranking doesn't fix this.</h4>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Being on page one of Google and being recommended by AI are two completely different things. Most businesses are optimized for how search worked five years ago. AI search works differently — and almost nobody has caught up yet.
            </p>
          </div>

          <div className="glass p-8 rounded-lg glass-hover space-y-4">
            <h4 className="text-lg font-bold text-white">The longer you wait, the harder it gets.</h4>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Businesses appearing in AI results today are building a trust relationship with those platforms that compounds over time. The gap between them and businesses that haven't addressed this yet grows every single month.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — The ROI & Interactive Calculator Integration */}
      <section className="py-12 border-t border-b border-white/5 text-center bg-brand-dark/20 rounded-xl max-w-4xl mx-auto p-8 space-y-8 shadow-[inset_0_0_30px_rgba(0,210,255,0.01)]">
        <h2 className="text-2xl font-bold text-brand-cyan uppercase tracking-wider">What Is One Missed Customer Actually Worth?</h2>
        <div className="space-y-4 text-white/80 font-light">
          <p className="text-xl">If one new client is worth <span className="text-brand-cyan font-bold">$2,500</span> to your business...</p>
          <p className="text-xl">And AI search is driving <span className="text-brand-cyan font-bold">20%</span> of new customer decisions...</p>
          <p className="text-xl">And your business isn't appearing in those results...</p>
          <p className="text-2xl font-bold mt-6 text-white">
            That's <span className="text-red-500">$500</span> of every $2,500 opportunity going to someone else.
          </p>
          <p className="text-sm text-white/40 uppercase tracking-widest mt-2">Every Single Month.</p>
        </div>

        {/* --- DYNAMIC INTERACTIVE CALCULATOR --- */}
        <div className="mt-8">
          <RoiCalculator />
        </div>
      </section>

      {/* NEW SECTION — INDUSTRY SWEEP SOCIAL PROOF */}
      <section className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto space-y-12 border-t border-white/5">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-cyan uppercase tracking-wider">This Week We Audited</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold text-brand-cyan">847</h4>
            <p className="text-xs uppercase tracking-widest text-white/50 mt-2">Businesses Audited</p>
            <p className="text-white/60 text-xs font-light mt-1">Across Edmonton, Calgary, and Toronto.</p>
          </div>
          <div className="glass p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold text-brand-cyan">31%</h4>
            <p className="text-xs uppercase tracking-widest text-white/50 mt-2">Current Visibility</p>
            <p className="text-white/60 text-xs font-light mt-1">Percentage appearing in ChatGPT results.</p>
          </div>
          <div className="glass p-6 rounded-lg text-center">
            <h4 className="text-2xl font-bold text-brand-cyan">52/100</h4>
            <p className="text-xs uppercase tracking-widest text-white/50 mt-2">Average Score</p>
            <p className="text-white/60 text-xs font-light mt-1">Baseline across all industries.</p>
          </div>
          <div className="glass p-6 rounded-lg text-center">
            <h4 className="text-lg font-bold text-brand-cyan mt-1">Plumbing, Legal, Dental</h4>
            <p className="text-xs uppercase tracking-widest text-white/50 mt-2">Industries Audited</p>
            <p className="text-white/60 text-xs font-light mt-1">+ HVAC, Marketing, Financial Services.</p>
          </div>
        </div>
      </section>

      {/* Priority 4 — Regional FAQ Content (About Page Integration) */}
      <section className="w-full py-16 px-6 md:px-12 max-w-4xl mx-auto border-t border-white/5 space-y-8">
        <h2 className="text-3xl font-bold text-center text-brand-cyan uppercase tracking-wider">Regional Availability & FAQs</h2>
        <div className="space-y-4">
          <details className="group border border-white/10 rounded-lg p-6 bg-brand-dark/20 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h3 className="text-lg font-bold text-white group-open:text-brand-cyan transition-colors">Is there a GEO audit service available in the UK?</h3>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white/10 p-1.5 text-white/50 group-open:rotate-180 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-white/70 font-light leading-relaxed text-sm">
              Yes. We serve UK businesses across all industries, providing specialized insights adapted for British digital markets and regional AI model parameters.
            </p>
          </details>

          <details className="group border border-white/10 rounded-lg p-6 bg-brand-dark/20 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h3 className="text-lg font-bold text-white group-open:text-brand-cyan transition-colors">Can Australian businesses get a GEO audit?</h3>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white/10 p-1.5 text-white/50 group-open:rotate-180 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-white/70 font-light leading-relaxed text-sm">
              Yes. We work with businesses across Sydney, Melbourne, Brisbane, Perth, and major metro areas to optimize localized generative search index nodes.
            </p>
          </details>

          <details className="group border border-white/10 rounded-lg p-6 bg-brand-dark/20 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h3 className="text-lg font-bold text-white group-open:text-brand-cyan transition-colors">Do you offer services in Canada?</h3>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white/10 p-1.5 text-white/50 group-open:rotate-180 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-white/70 font-light leading-relaxed text-sm">
              We are headquartered in Toronto and serve Canadian businesses coast to coast, addressing local optimization signals across English and French generative outputs.
            </p>
          </details>

          <details className="group border border-white/10 rounded-lg p-6 bg-brand-dark/20 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h3 className="text-lg font-bold text-white group-open:text-brand-cyan transition-colors">Do you work with US businesses?</h3>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white/10 p-1.5 text-white/50 group-open:rotate-180 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-white/70 font-light leading-relaxed text-sm">
              Yes. We serve businesses across all 50 states, ensuring broad geographic relevance and high probability of citation within US-based AI query models.
            </p>
          </details>
        </div>
      </section>

      {/* Section 4 — Who We Are */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-white/5 pt-16">
        <div className="relative h-96 rounded-lg overflow-hidden border border-white/5 shadow-[0_0_30px_rgba(0,210,255,0.05)]">
          <img src="/aria-headshot.png" alt="ARIA AI" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-cyan uppercase tracking-wider">We Built the Tool. We Run the Numbers. You Get the Answer.</h2>
          <p className="text-white/70 font-light leading-relaxed">
            Most companies charging for this service bill $5,000 or more per month and take weeks to deliver a report. We deliver the same quality of analysis — scored across five AI platforms, with specific findings and a clear action plan — in 48 hours, starting at $150.
          </p>
          <p className="text-white/70 font-light leading-relaxed">
            No retainer required. No jargon. No vague recommendations. Just a clear score, what's hurting it, and exactly what to do about it.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="glass p-6 rounded-lg text-center space-y-2">
          <h4 className="text-2xl font-bold text-brand-cyan">5</h4>
          <p className="text-xs uppercase tracking-wider text-white/50 mt-2">Platforms Checked</p>
        </div>
        <div className="glass p-6 rounded-lg text-center space-y-2">
          <h4 className="text-2xl font-bold text-brand-cyan">48h</h4>
          <p className="text-xs uppercase tracking-wider text-white/50 mt-2">Turnaround</p>
        </div>
        <div className="glass p-6 rounded-lg text-center space-y-2">
          <h4 className="text-2xl font-bold text-brand-cyan">5</h4>
          <p className="text-xs uppercase tracking-wider text-white/50 mt-2">Categories</p>
        </div>
        <div className="glass p-6 rounded-lg text-center space-y-2">
          <h4 className="text-sm font-bold text-brand-cyan">CAN, USA, UK, AUS + 30</h4>
          <p className="text-xs uppercase tracking-wider text-white/50 mt-2">Countries Served</p>
        </div>
        <div className="glass p-6 rounded-lg text-center space-y-2">
          <h4 className="text-2xl font-bold text-brand-cyan">48h</h4>
          <p className="text-xs uppercase tracking-wider text-white/50 mt-2">Audit Report</p>
        </div>
      </section>

      {/* Section 6 — Three Reasons to Trust Us */}
      <section className="space-y-12 border-t border-white/5 pt-16">
        <h2 className="text-3xl font-bold text-center text-brand-cyan uppercase tracking-wider">What Makes AscendantOps Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-white border-b border-brand-cyan/20 pb-2">You see exactly what we see.</h4>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Every score, every finding, every recommendation is explained in plain English. You'll understand exactly why your score is what it is and what it would take to improve it.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-white border-b border-brand-cyan/20 pb-2">You're not locked into anything.</h4>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Our entry-level audit is a one-time purchase. One report, one payment. No monthly contracts, no ongoing fees unless you want them. Start with the report and decide from there.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-white border-b border-brand-cyan/20 pb-2">The results are measurable.</h4>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              After we implement fixes, we re-run the audit so you can see the before and after score side by side. You don't have to take our word for it — the number either moves or it doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — Final CTA */}
      <section className="glass p-8 md:p-12 rounded-xl text-center max-w-4xl mx-auto space-y-6 border border-brand-cyan/20">
        <h2 className="text-3xl font-bold uppercase tracking-wider text-brand-cyan">Find Out Where You Stand — At No Cost</h2>
        <p className="text-white/70 max-w-xl mx-auto font-light leading-relaxed text-sm">
          Enter your website address and we'll send you a free one-page summary of your AI visibility score and your three most urgent gaps. No sales call. No credit card. Just the answer.
        </p>
        <Link href="/contact" className="w-full block px-8 py-4 bg-brand-cyan text-brand-navy font-bold tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300">
          Get My Free Visibility Check
        </Link>
        <p className="text-xs text-white/35 uppercase tracking-widest">
          Results delivered within 24 hours. Used by businesses in 30+ countries.
        </p>
      </section>
    </div>
  );
}