import Link from "next/link";

export default function RecurringServices() {
  return (
    <div className="w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Sovereign AI <span className="text-brand-cyan">Retainer & Monitoring</span>
        </h1>
        <p className="text-white/70 text-lg font-light leading-relaxed">
          AI search platforms change all the time. A business that shows up today can vanish tomorrow if no one maintains it. We stay on it for you. We monitor, adjust, and protect your visibility so you never have to think about it.
        </p>
      </div>

      
      <div className="glass p-8 rounded-lg border-2 border-brand-cyan/40 text-center max-w-2xl mx-auto glass-hover mb-12 shadow-[0_0_30px_rgba(0,210,255,0.05)]">
        <span className="bg-brand-cyan text-brand-navy text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded">Save $198 / Month</span>
        <h3 className="text-2xl font-bold text-white tracking-tight mt-4 mb-2">The Sovereign Bundle</h3>
        <p className="text-brand-cyan text-3xl font-bold mb-4">$699 <span className="text-xs text-white/55 font-light">/ month</span></p>
        <p className="text-white/60 text-sm font-light mb-6 max-w-md mx-auto">
          Everything we offer on retainer, managed together at a lower rate: competitor tracking, site maintenance, and monthly visibility checks. For most clients, this is the only ongoing service they need.
        </p>
        <a href="https://buy.stripe.com/4gMaEXezJ8y419Y6ltdUY08" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-cyan text-brand-navy font-bold text-xs tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all duration-300">
          Activate Sovereign Bundle
        </a>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
          <div>
            <h3 className="text-lg font-bold mb-2">Competitor Monitoring</h3>
            <p className="text-brand-cyan text-xl font-bold mb-6">$299 <span className="text-xs text-white/55 font-light">/ month</span></p>
            <p className="text-white/70 font-light text-xs mb-6 leading-relaxed">
              Every month we track what your competitors are doing online. We check where they appear and whether they are gaining on you. You get a monthly summary with any changes we recommend.
            </p>
          </div>
          <a href="https://buy.stripe.com/6oUeVd77h01ycSG8tBdUY05" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all">
            Secure Retainer
          </a>
        </div>

        <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
          <div>
            <h3 className="text-lg font-bold mb-2">Autopilot Stack</h3>
            <p className="text-brand-cyan text-xl font-bold mb-6">$299 <span className="text-xs text-white/55 font-light">/ month</span></p>
            <p className="text-white/70 font-light text-xs mb-6 leading-relaxed">
              We handle your site upkeep. We set up a chat assistant for your visitors. We also run a system that collects reviews from your customers. It all runs in the background.
            </p>
          </div>
          <a href="https://buy.stripe.com/00wfZhfDNeWs5qe4dldUY06" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all">
            Secure Retainer
          </a>
        </div>

        <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
          <div>
            <h3 className="text-lg font-bold mb-2">GEO Monitoring</h3>
            <p className="text-brand-cyan text-xl font-bold mb-6">$299 <span className="text-xs text-white/55 font-light">/ month</span></p>
            <p className="text-white/70 font-light text-xs mb-6 leading-relaxed">
              Every month we re-test your visibility on all five AI platforms. Then we update your site to match how AI finds businesses now. We keep your position active. It is not set and forgotten.
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