import type { Metadata } from "next";

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
          The way customers find businesses has changed. More people now ask AI like ChatGPT and Google AI who to hire and what to trust, instead of scrolling search results. If you are not in those answers, your competitors get your customers.
        </p>
      </div>

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
              <li className="flex items-center gap-2">✓ Your website is updated so AI platforms can properly read, understand, and recommend your business</li>
              <li className="flex items-center gap-2">✓ A report showing which local competitors appear in AI results, and why you now beat them</li>
              <li className="flex items-center gap-2">✓ Before-and-after score showing your improvement</li>
            </ul>
          </div>
          <a href="https://buy.stripe.com/00w00jfDN5lScSG9xFdUY01" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-brand-cyan text-brand-navy hover:bg-white hover:text-brand-navy text-sm font-bold tracking-wider uppercase rounded transition-all duration-300">
            Order Standard Setup
          </a>
        </div>

        
        <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
          <div>
            <h3 className="text-xl font-bold mb-2">Sovereign Transformation</h3>
            <p className="text-brand-cyan text-2xl font-bold mb-6">$1,500 <span className="text-xs text-white/55 font-light">one-time</span></p>
            <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
              <li className="flex items-center gap-2">✓ Everything in Basic and Standard</li>
              <li className="flex items-center gap-2">✓ Your website content rewritten so AI platforms recommend you by name</li>
              <li className="flex items-center gap-2">✓ Deep analysis of your top 5 local competitors, so we know what to beat</li>
              <li className="flex items-center gap-2">✓ 30 days of active monitoring to ensure your position holds as AI platforms update</li>
              <li className="flex items-center gap-2">✓ A full before-and-after report showing exactly what changed and why</li>
            </ul>
          </div>
          <a href="https://buy.stripe.com/3cIdR9ajtcOk19Yh07dUY02" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-sm font-bold tracking-wider uppercase rounded transition-all duration-300">
            Order Premium Package
          </a>
        </div>
      </div>
    </div>
  );
}