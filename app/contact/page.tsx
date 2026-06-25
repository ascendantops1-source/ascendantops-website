'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    websiteUrl: '',
    email: '',
    phone: '',
    serviceNeeded: 'Free Preliminary Check',
    additionalNotes: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://your-n8n-url.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          businessName: '',
          websiteUrl: '',
          email: '',
          phone: '',
          serviceNeeded: 'Free Preliminary Check',
          additionalNotes: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Informational Column */}
      <div className="space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Acquire Your <span className="text-brand-cyan">Preliminary Check</span>
        </h1>
        <p className="text-white/70 text-lg font-light leading-relaxed">
          Fill out the secure ledger below. We will run our local AI visibility scanner on your website and deliver your customized preliminary report card.
        </p>
        
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-white/5 shadow-[0_0_30px_rgba(0,210,255,0.05)]">
          <img src="/aria-env.png" alt="ARIA Server Environment" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,210,255,0.1)]">
              <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wide">100% Secure & Off-Grid</h4>
              <p className="text-white/60 text-xs font-light mt-1">We do not store or sell your domain metrics.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="glass p-8 rounded-lg shadow-[0_0_30px_rgba(0,210,255,0.02)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inputs */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-brand-cyan mb-2 font-bold">Your Name</label>
            <input type="text" required className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-cyan mb-2 font-bold">Business Name</label>
              <input type="text" required className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-cyan mb-2 font-bold">Website URL</label>
              <input type="url" required className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.websiteUrl} onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-cyan mb-2 font-bold">Email Address</label>
              <input type="email" required className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-cyan mb-2 font-bold">Phone Number</label>
              <input type="tel" required className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
          </div>

          {/* Service Selection Dropdown */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-brand-cyan mb-2 font-bold">Audit Scope / Service Needed</label>
            <select
              className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan appearance-none"
              value={formData.serviceNeeded}
              onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
            >
              <option value="Free Preliminary Check">Free Preliminary Check ($0)</option>
              <optgroup label="GEO Audit Services" className="bg-brand-dark text-white">
                <option value="GEO Audit (Basic - $150)">GEO Audit (Basic - $150)</option>
                <option value="Technical Implementation (Standard - $500)">Technical Implementation (Standard - $500)</option>
                <option value="Sovereign Transformation (Premium - $1,500)">Sovereign Transformation (Premium - $1,500)</option>
              </optgroup>
              <optgroup label="AI Business Assessments" className="bg-brand-dark text-white">
                <option value="AI Business Assessment ($500-$1,000)">AI Business Assessment ($500-$1,000)</option>
              </optgroup>
              <optgroup label="Capital & Benefit Audit" className="bg-brand-dark text-white">
                <option value="Government + Tax Discovery ($297)">Government + Tax Discovery ($297)</option>
                <option value="Technology Benefits Discovery ($197)">Technology Benefits Discovery ($197)</option>
                <option value="Complete Capital Audit ($397)">Complete Capital Audit ($397)</option>
                <option value="Guided Application Service ($497)">Guided Application Service ($497)</option>
                <option value="Full Application Stack ($997)">Full Application Stack ($997)</option>
                <option value="Ongoing Benefit Monitoring ($99/mo)">Ongoing Benefit Monitoring ($99/mo)</option>
              </optgroup>
              <optgroup label="Sovereign AI Retainers" className="bg-brand-dark text-white">
                <option value="Competitor Monitoring ($299/mo)">Competitor Monitoring ($299/mo)</option>
                <option value="Autopilot Stack ($299/mo)">Autopilot Stack ($299/mo)</option>
                <option value="GEO Monitoring ($299/mo)">GEO Monitoring ($299/mo)</option>
                <option value="Sovereign Bundle ($699/mo)">The Sovereign Bundle ($699/mo)</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-brand-cyan mb-2 font-bold">Additional Notes / Custom Requests</label>
            <textarea
              rows={3}
              className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan resize-none"
              placeholder="Describe your current software bottlenecks, custom requirements, or timeline goals here..."
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'} 
            className="w-full py-4 bg-brand-cyan text-brand-navy font-bold tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy transition-all duration-300"
          >
            {status === 'loading' 
              ? 'Processing...' 
              : formData.serviceNeeded === 'Free Preliminary Check' 
                ? 'Request Free Preliminary Check' 
                : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}