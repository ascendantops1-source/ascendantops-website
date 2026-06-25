import Link from "next/link";

export default function Pricing() {
  return (
    <div className="w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Simple, <span className="text-brand-cyan">Transparent Pricing</span>
        </h1>
        <p className="text-white/70 text-lg font-light leading-relaxed">
          Start with what you need. Scale when your business is ready. No complex sales calls.
        </p>
      </section>

      {/* SECTION 1: GEO AUDITS (One-Time) */}
      <section className="space-y-8">
        <h2 className="text-xl font-bold tracking-wider uppercase text-center text-brand-cyan">
          1. One-Time GEO Audits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic */}
          <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-xl font-bold mb-2">Basic Audit</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$150 <span className="text-xs text-white/40 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ Full written report on your AI search visibility</li>
                <li className="flex items-center gap-2">✓ Scored across the five platforms your customers use most to find businesses</li>
                <li className="flex items-center gap-2">✓ Three specific things hurting your visibility — clearly explained</li>
                <li className="flex items-center gap-2">✓ How you rank against competitors in your area and industry</li>
                <li className="flex items-center gap-2">✓ In your inbox within 48 hours</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/dRmeVdezJbKgaKy6ltdUY00" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all duration-300">
              Order Basic Audit
            </a>
          </div>

          {/* Standard */}
          <div className="glass p-8 rounded-lg border border-brand-cyan/30 flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-xl font-bold mb-2">Technical Implementation</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$500 <span className="text-xs text-white/40 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ Everything in the Basic Audit</li>
                <li className="flex items-center gap-2">✓ We fix the issues found — no action required from you or your team</li>
                <li className="flex items-center gap-2">✓ Your website is updated so AI platforms can properly read, understand, and recommend your business</li>
                <li className="flex items-center gap-2">✓ A report showing exactly which local competitors are appearing in AI results — and why you now outrank them</li>
                <li className="flex items-center gap-2">✓ Before-and-after score showing your improvement</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/00w00jfDN5lScSG9xFdUY01" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-brand-cyan text-brand-navy hover:bg-white hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all duration-300">
              Order Standard Setup
            </a>
          </div>

          {/* Premium */}
          <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-xl font-bold mb-2">Sovereign Transformation</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$1,500 <span className="text-xs text-white/40 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ Everything in Basic and Standard</li>
                <li className="flex items-center gap-2">✓ Your website content rewritten so AI platforms recommend you by name</li>
                <li className="flex items-center gap-2">✓ Deep analysis of your top 5 local competitors' AI visibility — so we know exactly what we need to beat</li>
                <li className="flex items-center gap-2">✓ 30 days of active monitoring to ensure your position holds as AI platforms update</li>
                <li className="flex items-center gap-2">✓ A full before-and-after report showing exactly what changed and why</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/3cIdR9ajtcOk19Yh07dUY02" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all duration-300">
              Order Premium Package
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: AI BUSINESS ASSESSMENTS (One-Time) */}
      <section className="space-y-8 border-t border-white/5 pt-16">
        <h2 className="text-xl font-bold tracking-wider uppercase text-center text-brand-cyan">
          2. AI Business Assessments (Layman Friendly)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Operations Assessment */}
          <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-xl font-bold mb-2">Operations Assessment</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$500 <span className="text-xs text-white/40 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ A full review of how your business currently handles customer communication, follow-ups, and repetitive internal tasks</li>
                <li className="flex items-center gap-2">✓ Identification of every software subscription you could eliminate or reduce</li>
                <li className="flex items-center gap-2">✓ A prioritized list of automation opportunities ranked by time saved and cost impact</li>
                <li className="flex items-center gap-2">✓ Written action plan delivered within 48 hours</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/8x214n3V56pWbOC6ltdUY03" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all duration-300">
              Order Operations Assessment
            </a>
          </div>

          {/* Full Autonomous Audit */}
          <div className="glass p-8 rounded-lg border border-brand-cyan/30 flex flex-col justify-between glass-hover shadow-[0_0_20px_rgba(0,210,255,0.05)]">
            <span className="absolute -top-3 right-6 bg-brand-cyan text-brand-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">Popular</span>
            <div>
              <h3 className="text-xl font-bold mb-2">Full Autonomous Audit</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$1,000 <span className="text-xs text-white/40 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ Everything in the Operations Assessment</li>
                <li className="flex items-center gap-2">✓ We go deeper — mapping out a complete automation system tailored to your business</li>
                <li className="flex items-center gap-2">✓ A step-by-step build plan your team can follow, or we execute it entirely for you</li>
                <li className="flex items-center gap-2">✓ Tools recommended that you own outright — no ongoing subscription fees attached</li>
                <li className="flex items-center gap-2">✓ A 30-minute walkthrough call included to explain every recommendation</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/aFadR9dvFeWs19Y4dldUY04" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-brand-cyan text-brand-navy hover:bg-white hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all duration-300">
              Order Full Audit
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: CAPITAL & BENEFIT AUDITS (One-Time) */}
      <section className="space-y-8 border-t border-white/5 pt-16">
        <h2 className="text-xl font-bold tracking-wider uppercase text-center text-brand-cyan">
          3. Capital & Benefit Audits (One-Time)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Government + Tax Discovery */}
          <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-xl font-bold mb-2">Government & Tax Discovery</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$297 <span className="text-xs text-white/40 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ Every qualifying government grant identified</li>
                <li className="flex items-center gap-2">✓ Federal + provincial/state programs</li>
                <li className="flex items-center gap-2">✓ SR&ED eligibility assessment</li>
                <li className="flex items-center gap-2">✓ Prioritized list with deadlines & amounts</li>
                <li className="flex items-center gap-2">✓ 48-hour delivery window</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/28EaEX3V5eWs2e2fW3dUY09" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold uppercase rounded transition-all duration-300">
              Order Discovery
            </a>
          </div>

          {/* Card 2: Technology Benefits Discovery */}
          <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-xl font-bold mb-2">Technology Benefits Discovery</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$197 <span className="text-xs text-white/40 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ Every qualifying cloud credit program matched</li>
                <li className="flex items-center gap-2">✓ AI API credit programs matched</li>
                <li className="flex items-center gap-2">✓ Developer tool and software benefits</li>
                <li className="flex items-center gap-2">✓ Startup program eligibility assessment</li>
                <li className="flex items-center gap-2">✓ 48-hour delivery window</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/bJeaEX4Z9cOk3i6119dUY0c" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold uppercase rounded transition-all duration-300">
              Order Discovery
            </a>
          </div>

          {/* Card 3: Complete Capital Audit */}
          <div className="glass p-8 rounded-lg border-2 border-brand-cyan/40 flex flex-col justify-between relative glass-hover shadow-[0_0_20px_rgba(0,210,255,0.05)]">
            <span className="absolute -top-3 right-6 bg-brand-cyan text-brand-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">Recommended</span>
            <div>
              <h3 className="text-xl font-bold mb-2">Complete Capital Audit</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$397 <span className="text-xs text-white/40 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ Everything in both Discovery modules</li>
                <li className="flex items-center gap-2">✓ Unified priority score (value × ease × speed)</li>
                <li className="flex items-center gap-2">✓ Deep SR&ED framework assessment</li>
                <li className="flex items-center gap-2">✓ Total eligible benefit calculation</li>
                <li className="flex items-center gap-2">✓ Save $97 compared to individual buy</li>
                <li className="flex items-center gap-2">✓ 48-hour delivery window</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/4gM5kD4Z93dKf0O6ltdUY0d" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-brand-cyan text-brand-navy hover:bg-white hover:text-brand-navy text-xs font-bold uppercase rounded transition-all duration-300">
              Order Capital Audit
            </a>
          </div>
        </div>

        {/* Execution Add-Ons Grid (Directly Below Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {/* Guided Application */}
          <div className="glass p-6 rounded-lg flex flex-col justify-between glass-hover border border-white/5">
            <div>
              <h4 className="font-bold text-white mb-2">Guided Application</h4>
              <p className="text-brand-cyan text-lg font-bold mb-4">$497 <span className="text-xs text-white/40 font-light">one-time</span></p>
              <p className="text-white/60 font-light text-xs mb-4">We complete the top 5 applications on your behalf, drafting all supporting operational narratives.</p>
            </div>
            <a href="https://buy.stripe.com/14A14n4Z97u08Cq25ddUY0a" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-[10px] font-bold tracking-wider uppercase rounded transition-all">
              Order Guided Setup
            </a>
          </div>

          {/* Full Application Stack */}
          <div className="glass p-6 rounded-lg flex flex-col justify-between glass-hover border border-white/5">
            <div>
              <h4 className="font-bold text-white mb-2">Full Application Stack</h4>
              <p className="text-brand-cyan text-lg font-bold mb-4">$997 <span className="text-xs text-white/40 font-light">one-time</span></p>
              <p className="text-white/60 font-light text-xs mb-4">We handle the configuration and full application process across all matching credit and grant programs.</p>
            </div>
            <a href="https://buy.stripe.com/6oU14n63ddSo9Gu4dldUY0e" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-[10px] font-bold tracking-wider uppercase rounded transition-all">
              Order Full Setup
            </a>
          </div>

          {/* Ongoing Monitoring */}
          <div className="glass p-6 rounded-lg flex flex-col justify-between glass-hover border border-white/5">
            <div>
              <h4 className="font-bold text-white mb-2">Ongoing Benefit Monitoring</h4>
              <p className="text-brand-cyan text-lg font-bold mb-4">$99 <span className="text-xs text-white/40 font-light">/ month</span></p>
              <p className="text-white/60 font-light text-xs mb-4">We actively track newly opening grants, renew credits before expiration, and manage eligibility.</p>
            </div>
            <a href="https://buy.stripe.com/6oU6oH9fpg0wg4S9xFdUY0f" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-[10px] font-bold tracking-wider uppercase rounded transition-all">
              Activate Retainer
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4: RETAINERS (Monthly) */}
      <section className="space-y-8 border-t border-white/5 pt-16">
        <h2 className="text-xl font-bold tracking-wider uppercase text-center text-brand-cyan">
          4. Ongoing AI Visibility Management (Monthly)
        </h2>
        
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
            <a href="https://buy.stripe.com/6oUeVd77h01ycSG8tBdUY05" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-[10px] font-bold tracking-wider uppercase rounded transition-all">
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
            <a href="https://buy.stripe.com/00wfZhfDNeWs5qe4dldUY06" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-[10px] font-bold tracking-wider uppercase rounded transition-all">
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
            <a href="https://buy.stripe.com/7sY00j3V53dK7ymdNVdUY07" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-[10px] font-bold tracking-wider uppercase rounded transition-all">
              Secure Retainer
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: NOT SURE WHERE TO START? */}
      <section className="glass p-8 md:p-12 rounded-xl text-center max-w-4xl mx-auto space-y-6 border border-brand-cyan/20">
        <h2 className="text-2xl font-bold uppercase tracking-wider text-brand-cyan">Not Sure Where to Start?</h2>
        <p className="text-white/70 max-w-xl mx-auto font-light leading-relaxed text-sm">
          Take the free visibility check first. We'll recommend the right starting point based on what we find. No obligation, no credit card.
        </p>
        <Link href="/contact" className="inline-block px-8 py-4 bg-brand-cyan text-brand-navy font-bold tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300">
          Get Free Audit Check
        </Link>
      </section>
    </div>
  );
}