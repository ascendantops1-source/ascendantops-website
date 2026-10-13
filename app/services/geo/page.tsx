import type { Metadata } from "next";
import ReportPreview from "../../../components/ReportPreview";

export const metadata: Metadata = {
  title: "GEO Audit — AscendantOps",
  description:
    "Get a full GEO audit showing how you score across 5 AI platforms, including ChatGPT and Perplexity. Starting at $150. Delivered in 48 hours.",
};

export default function GeoAudit() {
  return (
    <div className="w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          AI Search <span className="text-brand-cyan">Optimization (GEO)</span>
        </h1>
        <p className="text-white/70 text-lg font-light leading-relaxed">
          People increasingly use AI tools alongside search engines to explore who to hire and what to trust. A review gives you a dated view of where your business appears in selected answers—and practical options for improving how your information is understood.
        </p>
      </div>

      <section className="mb-20 grid items-start gap-8 lg:grid-cols-12 lg:gap-12" aria-labelledby="report-example-title">
        <div className="lg:col-span-4">
          <p className="label mb-4">See what arrives</p>
          <h2 id="report-example-title" className="text-3xl font-bold tracking-tight">A useful report shows its work.</h2>
          <p className="mt-4 leading-relaxed text-white/70">Your review is organized around the questions checked, what each platform returned, and practical actions. This preview shows the format without presenting invented client results.</p>
        </div>
        <div className="lg:col-span-8"><ReportPreview /></div>
      </section>

      <h2 className="text-2xl font-bold tracking-wider uppercase mb-8 text-center text-brand-cyan">
        Transparent Packaging (USD)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
          <div>
            <h3 className="text-xl font-bold mb-2">Basic Audit</h3>
            <p className="text-brand-cyan text-2xl font-bold mb-6">$150 <span className="text-xs text-white/55 font-light">one-time</span></p>
            <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
              <li className="flex items-center gap-2">✓ Full written report on your AI search visibility</li>
              <li className="flex items-center gap-2">✓ Scored across the five platforms your customers use most to find businesses</li>
              <li className="flex items-center gap-2">✓ Three specific things hurting your visibility — clearly explained</li>
              <li className="flex items-center gap-2">✓ How you rank against competitors in your area and industry</li>
              <li className="flex items-center gap-2">✓ In your inbox within 48 hours</li>
            </ul>
          </div>
          <a href="https://buy.stripe.com/dRmeVdezJbKgaKy6ltdUY00" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-sm font-bold tracking-wider uppercase rounded transition-all duration-300">
            Order Basic Audit
          </a>
        </div>

        
        <div className="glass p-8 rounded-lg border-2 border-brand-cyan/40 flex flex-col justify-between glass-hover">
          <span className="absolute -top-3 right-6 bg-brand-cyan text-brand-navy text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded">Popular</span>
          <div>
            <h3 className="text-xl font-bold mb-2">Technical Implementation</h3>
            <p className="text-brand-cyan text-2xl font-bold mb-6">$500 <span className="text-xs text-white/55 font-light">one-time</span></p>
            <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
              <li className="flex items-center gap-2">✓ Everything in the Basic Audit</li>
              <li className="flex items-center gap-2">✓ We fix the issues found — no action required from you or your team</li>
              <li className="flex items-center gap-2">✓ Your website is updated to make key business information clearer to AI platforms</li>
              <li className="flex items-center gap-2">✓ A report showing which local competitors appeared in the checks and what sources were cited</li>
              <li className="flex items-center gap-2">✓ Before-and-after score showing your improvement</li>
            </ul>
          </div>
          <a href="https://buy.stripe.com/00w00jfDN5lScSG9xFdUY01" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-brand-cyan text-brand-navy hover:bg-white hover:text-brand-navy text-sm font-bold tracking-wider uppercase rounded transition-all duration-300">
            Order Technical Implementation
          </a>
        </div>

        
        <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
          <div>
            <h3 className="text-xl font-bold mb-2">Sovereign Transformation</h3>
            <p className="text-brand-cyan text-2xl font-bold mb-6">$1,500 <span className="text-xs text-white/55 font-light">one-time</span></p>
            <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
              <li className="flex items-center gap-2">✓ Everything in Basic and Standard</li>
              <li className="flex items-center gap-2">✓ Your website content revised to clearly explain your services and service area</li>
              <li className="flex items-center gap-2">✓ Deep analysis of your top 5 local competitors, so we know what to beat</li>
              <li className="flex items-center gap-2">✓ 30 days of monitoring as AI platforms update</li>
              <li className="flex items-center gap-2">✓ A full before-and-after report showing exactly what changed and why</li>
            </ul>
          </div>
          <a href="https://buy.stripe.com/3cIdR9ajtcOk19Yh07dUY02" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-sm font-bold tracking-wider uppercase rounded transition-all duration-300">
            Order Sovereign Transformation
          </a>
        </div>
      </div>
    </div>
  );
}
