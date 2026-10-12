'use client';

import Link from "next/link";

export default function WelcomeRetainer() {
  return (
    <div className="w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      
      
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan animate-pulse">
          ⚡
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Your Retainer is <span className="text-brand-cyan">Active</span>
        </h1>
        <p className="text-white/70 text-lg font-light leading-relaxed">
          Welcome to the priority queue. Let's book your kickoff call so we can set up your integrations.
        </p>
      </section>

      
      <section className="max-w-4xl mx-auto space-y-4">
        <h3 className="text-xs uppercase tracking-widest text-brand-cyan font-bold text-center">Book Your Kickoff Call</h3>
        <div className="relative w-full h-[650px] rounded-xl overflow-hidden border border-white/10 bg-brand-dark/40 shadow-[0_0_30px_rgba(0,210,255,0.02)]">
          <iframe
            src="https://calendly.com/your-calendly-handle?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0a0e1a&text_color=ffffff&primary_color=00d2ff"
            width="100%"
            height="100%"
            frameBorder="0"
            className="absolute inset-0"
            allow="autoplay; encrypted-media; picture-in-picture;"
          />
        </div>
      </section>

      
      <section className="glass p-8 rounded-xl border border-white/5 max-w-3xl mx-auto space-y-6">
        <h3 className="text-lg font-bold text-white text-center md:text-left border-b border-white/10 pb-3">Onboarding Checklist</h3>
        <p className="text-xs text-white/70 font-light">While you book your call, please gather the following. It helps us move faster:</p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 accent-brand-cyan shrink-0" defaultChecked={false} />
            <div>
              <span className="text-sm font-bold text-white block">Access to your site's CMS, or a developer contact</span>
              <span className="text-xs text-white/62 font-light mt-0.5 block">Needed so we can add schema markup and set up your llm.txt file.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 accent-brand-cyan shrink-0" defaultChecked={false} />
            <div>
              <span className="text-sm font-bold text-white block">Google Search Console access (if available)</span>
              <span className="text-xs text-white/62 font-light mt-0.5 block">Helps our team track your crawl index before and after we make changes.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 accent-brand-cyan shrink-0" defaultChecked={false} />
            <div>
              <span className="text-sm font-bold text-white block">Your top 3 local competitors' website URLs</span>
              <span className="text-xs text-white/62 font-light mt-0.5 block">Makes sure our bots crawl the right competitors for your comparison report.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 accent-brand-cyan shrink-0" defaultChecked={false} />
            <div>
              <span className="text-sm font-bold text-white block">Your primary service category</span>
              <span className="text-xs text-white/62 font-light mt-0.5 block">We will target the right search categories for this service.</span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="glass p-8 md:p-12 rounded-xl border-2 border-brand-cyan/40 max-w-3xl mx-auto text-center space-y-6 shadow-[0_0_30px_rgba(0,210,255,0.05)] relative">
        <span className="md:absolute top-4 right-6 inline-block bg-brand-cyan text-brand-navy text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 md:mb-0">
          Priority Member Perk
        </span>
        <h3 className="text-2xl font-bold text-white tracking-tight">Unlock Grant & Credit Capital</h3>
        <p className="text-sm text-white/80 font-light leading-relaxed max-w-xl mx-auto">
          Retainer clients get priority **Capital Audit** processing. Add it for **$397**. Active members get same-day, manual delivery.
        </p>
        <div className="pt-2">
          <a 
            href="https://buy.stripe.com/4gM5kD4Z93dKf0O6ltdUY0d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-10 py-4 bg-brand-cyan text-brand-navy font-bold text-xs tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300"
          >
            Order Priority Capital Audit — $397
          </a>
        </div>
      </section>

    </div>
  );
}