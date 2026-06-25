import Link from "next/link";

export default function RecurringServices() {
  return (
    <div className="w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* Header Section */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Sovereign AI <span className="text-brand-cyan">Retainer & Monitoring</span>
        </h1>
        <p className="text-white/70 text-lg font-light leading-relaxed">
          AI search platforms update constantly. A business that appears in results today can disappear tomorrow if nothing is maintained. We stay active on your behalf — monitoring, adjusting, and protecting your visibility so you never have to think about it.
        </p>
      </div>

      {/* Sovereign Bundle Featured Prominently FIRST */}
      <div className="glass p-8 rounded-lg border-2 border-brand-cyan/40 text-center max-w-2xl mx-auto glass-hover mb-12 shadow-[0_0_30px_rgba(0,210,255,0.05)]">
        <span className="bg-brand-cyan text-brand-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">Save $198 / Month</span>
        <h3 className="text-2xl font-bold uppercase tracking-wider text-brand-cyan mt-4 mb-2">The Sovereign Bundle</h3>
        <p className="text-brand-cyan text-3xl font-bold mb-4">$699 <span className="text-xs text-white/40 font-light">/ month</span></p>
        <p className="text-white/60 text-sm font-light mb-6 max-w-md mx-auto">
          Everything we offer on retainer — competitor tracking, website maintenance, and monthly AI visibility checks — managed together at a reduced rate. Most clients find this is the only ongoing service they need once their initial audit is complete.
        </p>
        <a href="https://buy.stripe.com/4gMaEXezJ8y419Y6ltdUY08" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-cyan text-brand-navy font-bold text-xs tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all duration-300">
          Activate Sovereign Bundle
        </a>
      </div>

      {/* Three Smaller Cards below */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
          <div>
            <h3 className="text-lg font-bold mb-2">Competitor Monitoring</h3>
            <p className="text-brand-cyan text-xl font-bold mb-6">$299 <span className="text-xs text-white/40 font-light">/ month</span></p>
            <p className="text-white/60 font-light text-xs mb-6 leading-relaxed">
              We track what your competitors are doing online every month — where they're appearing, how their visibility is changing, and whether they're gaining ground on you. You receive a monthly summary with any strategy adjustments recommended.
            </p>
          </div>
          <a href="https://buy.stripe.com/6oUeVd77h01ycSG8tBdUY05" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all">
            Secure Retainer
          </a>
        </div>

        <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
          <div>
            <h3 className="text-lg font-bold mb-2">Autopilot Stack</h3>
            <p className="text-brand-cyan text-xl font-bold mb-6">$299 <span className="text-xs text-white/40 font-light">/ month</span></p>
            <p className="text-white/60 font-light text-xs mb-6 leading-relaxed">
              We handle your website upkeep, set up an automated chat assistant for your site visitors, and run a system that consistently collects reviews from your customers — all running in the background without your involvement.
            </p>
          </div>
          <a href="https://buy.stripe.com/00wfZhfDNeWs5qe4dldUY06" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all">
            Secure Retainer
          </a>
        </div>

        <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
          <div>
            <h3 className="text-lg font-bold mb-2">GEO Monitoring</h3>
            <p className="text-brand-cyan text-xl font-bold mb-6">$299 <span className="text-xs text-white/40 font-light">/ month</span></p>
            <p className="text-white/60 font-light text-xs mb-6 leading-relaxed">
              Every month we re-test your AI search visibility across all five platforms and update your website's technical configuration to match the latest changes in how AI systems find and recommend businesses. Your position is actively maintained, not just set and forgotten.
            </p>
          </div>
          <a href="https://buy.stripe.com/7sY00j3V53dK7ymdNVdUY07" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all">
            Secure Retainer
          </a>
        </div>
      </div>
    </div>
  );
}