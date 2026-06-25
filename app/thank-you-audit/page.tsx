'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const [customerEmail, setCustomerEmail] = useState('your registered email');

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setCustomerEmail(emailParam);
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    extraCompetitor: '',
    cmsPlatform: 'WordPress',
    additionalContext: '',
  });
  const [formStatus, setStatus] = useState<'idle' | 'success' | 'loading'>('idle');

  const handleIntakeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://your-n8n-url.com/intake-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: customerEmail, ...formData }),
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
      }
    } catch {
      setStatus('idle');
    }
  };

  return (
    <div className="w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-10 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan mb-2">
          ✓
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Your Audit is <span className="text-brand-cyan">Underway</span>
        </h1>
        <p className="text-white/70 text-lg font-light leading-relaxed">
          Our diagnostic systems have begun compiling your parameters. You will receive your complete audit report within <span className="text-brand-cyan font-semibold">48 hours</span> at:
        </p>
        <p className="text-brand-cyan font-mono text-base bg-brand-dark/50 border border-white/5 inline-block px-4 py-2 rounded">
          {customerEmail}
        </p>
      </section>

      {/* 2. What Happens Next */}
      <section className="max-w-4xl mx-auto border-t border-b border-white/5 py-12">
        <h3 className="text-xs uppercase tracking-widest text-brand-cyan font-bold text-center mb-8">What Happens Next</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold text-brand-cyan/40 block">STAGE 01</span>
            <h4 className="font-bold text-white text-base">Visibility Scanning</h4>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              We execute semantic queries across 5 major AI platform frameworks, validating where and how your brand is indexed.
            </p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold text-brand-cyan/40 block">STAGE 02</span>
            <h4 className="font-bold text-white text-base">Competitive Context</h4>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              Our specialists compare your score against your geographic competitors to map out immediate displacement opportunities.
            </p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold text-brand-cyan/40 block">STAGE 03</span>
            <h4 className="font-bold text-white text-base">Delivery & Strategy</h4>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              You receive a unified PDF report with exact instructions on how to patch vulnerabilities, followed by strategic guidance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. IMMEDIATE UPSELL (Complete Capital Audit $397) */}
      <section className="glass p-8 md:p-12 rounded-xl border-2 border-brand-cyan/40 max-w-3xl mx-auto text-center space-y-6 shadow-[0_0_30px_rgba(0,210,255,0.05)] relative">
        <span className="md:absolute top-4 right-6 inline-block bg-brand-cyan text-brand-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 md:mb-0">
          Priority Matching Upgrade
        </span>
        <h3 className="text-2xl font-bold uppercase tracking-wider text-brand-cyan">Unlock Hidden Funding & Credits</h3>
        <p className="text-sm text-white/80 font-light leading-relaxed max-w-xl mx-auto">
          While your audit is processing, most clients also discover they qualify for significant government grants and technology credits they've never claimed. Add the **Complete Capital Audit** for **$397** and receive both reports simultaneously.
        </p>
        <div className="pt-2">
          <a 
            href="https://buy.stripe.com/4gM5kD4Z93dKf0O6ltdUY0d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-10 py-4 bg-brand-cyan text-brand-navy font-bold text-xs tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300"
          >
            Upgrade to Complete Capital Audit — $397
          </a>
        </div>
      </section>

      {/* 4. Optional Intake Form */}
      <section className="glass p-8 rounded-xl border border-white/5 max-w-3xl mx-auto space-y-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg font-bold text-white">Provide Supplementary Diagnostic Metrics</h3>
          <p className="text-xs text-white/60 font-light">If you have extra site metrics, help us pre-optimize your report card.</p>
        </div>
        
        {formStatus === 'success' ? (
          <p className="text-xs text-brand-cyan font-bold uppercase tracking-wider text-center py-4">✓ Intake parameters updated successfully.</p>
        ) : (
          <form onSubmit={handleIntakeSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-cyan mb-2 font-bold">Top Local Competitor Website</label>
                <input 
                  type="url" 
                  placeholder="https://competitor.com"
                  className="w-full bg-brand-dark border border-white/10 rounded p-3 text-xs text-white focus:outline-none focus:border-brand-cyan"
                  value={formData.extraCompetitor} 
                  onChange={(e) => setFormData({ ...formData, extraCompetitor: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-cyan mb-2 font-bold">Your Website's CMS Platform</label>
                <select 
                  className="w-full bg-brand-dark border border-white/10 rounded p-3 text-xs text-white focus:outline-none focus:border-brand-cyan"
                  value={formData.cmsPlatform} 
                  onChange={(e) => setFormData({ ...formData, cmsPlatform: e.target.value })}
                >
                  <option value="WordPress">WordPress</option>
                  <option value="Webflow">Webflow</option>
                  <option value="Shopify">Shopify</option>
                  <option value="Custom Code (React/Next.js/HTML)">Custom Code (React/Next.js/HTML)</option>
                  <option value="Wix / Squarespace">Wix / Squarespace</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-brand-cyan mb-2 font-bold">Additional Software Stack Details / Specific Bottlenecks</label>
              <textarea 
                rows={3} 
                className="w-full bg-brand-dark border border-white/10 rounded p-3 text-xs text-white focus:outline-none focus:border-brand-cyan resize-none"
                placeholder="Describe your current tech expenditure or specific automation needs..."
                value={formData.additionalContext} 
                onChange={(e) => setFormData({ ...formData, additionalContext: e.target.value })}
              />
            </div>
            <div className="text-right">
              <button 
                type="submit" 
                disabled={formStatus === 'loading'} 
                className="px-6 py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-[10px] font-bold tracking-wider uppercase rounded transition-all"
              >
                {formStatus === 'loading' ? 'Submitting Details...' : 'Submit Diagnostics'}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* 5. LinkedIn Relationship Deepening */}
      <section className="text-center py-6 border-t border-white/5">
        <p className="text-xs text-white/50 mb-3 font-light">Stay updated with real-time generative engine algorithm changes & operational tech advisories:</p>
        <a 
          href="https://linkedin.com/company/ascendantops" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 px-6 py-2 bg-brand-dark hover:bg-white/5 border border-white/10 rounded text-xs text-white/80 transition-colors"
        >
          <svg className="w-4 h-4 text-brand-cyan fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-4 2.239-4 5v14c0 2.761 2.239 4 5 4h14c2.762 0 4-2.239 4-4v-14c0-2.761-2.238-4-4-4zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          Follow AscendantOps on LinkedIn
        </a>
      </section>

    </div>
  );
}

export default function ThankYouAudit() {
  return (
    <Suspense fallback={
      <div className="w-full py-24 text-center">
        <p className="text-white/60 animate-pulse uppercase tracking-wider text-xs">Loading Audit Parameters...</p>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}