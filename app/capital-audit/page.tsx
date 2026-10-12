'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const regionalOptions: Record<string, string[]> = {
  'Canada': [
    'Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 
    'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Newfoundland and Labrador', 
    'Prince Edward Island', 'Northwest Territories', 'Yukon', 'Nunavut'
  ],
  'United States': [
    'California', 'Texas', 'New York', 'Florida', 'Illinois', 'Pennsylvania', 
    'Ohio', 'Georgia', 'North Carolina', 'Michigan', 'Washington', 'Massachusetts', 'Other State'
  ],
  'United Kingdom': [
    'England', 'Scotland', 'Wales', 'Northern Ireland'
  ],
  'Australia': [
    'New South Wales', 'Victoria', 'Queensland', 'Western Australia', 
    'South Australia', 'Tasmania', 'Australian Capital Territory', 'Northern Territory'
  ],
  'Other': [
    'International / Other Region'
  ]
};

const industriesList = [
  'Technology / Software / AI / Automation',
  'Professional Services (accounting, legal, consulting)',
  'Healthcare / Medical',
  'Manufacturing',
  'Trades (construction, HVAC, plumbing, electrical)',
  'Retail / E-commerce',
  'Food & Beverage / Hospitality',
  'Agriculture / Natural Resources',
  'Creative / Media / Marketing',
  'Education / Training',
  'Other'
];

export default function CapitalAudit() {
  const [detectedCountry, setDetectedCountry] = useState<string>('Canada');
  const [showFullForm, setShowFullForm] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    country: 'Canada',
    region: 'Ontario',
    yearsInBusiness: 'Less than 1 year',
    employees: 'Solo',
    revenue: 'Under $250K',
    industries: [] as string[],
    structure: 'Sole proprietor',
    ownershipFlags: [] as string[],
    activities: [] as string[],
    techStack: [] as string[],
    monthlySoftwareSpend: 'Under $500/month',
    useOfFunds: [] as string[],
    appliedBefore: 'No, never applied',
    urgency: 'Planning ahead — no urgency',
    fundingAmount: 'Under $25K',
    consentAccuracy: false,
    consentContact: false,
    consentDisclaimer: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        const countryMap: Record<string, string> = {
          'CA': 'Canada',
          'US': 'United States',
          'GB': 'United Kingdom',
          'AU': 'Australia'
        };
        const resolvedCountry = countryMap[data.country_code] || 'Canada';
        setDetectedCountry(resolvedCountry);

        setFormData(prev => ({
          ...prev,
          country: resolvedCountry,
          region: regionalOptions[resolvedCountry] ? regionalOptions[resolvedCountry][0] : 'Ontario'
        }));
      })
      .catch(() => {
        setDetectedCountry('Canada');
      });
  }, []);

  useEffect(() => {
    if (regionalOptions[formData.country]) {
      setFormData(prev => ({
        ...prev,
        region: regionalOptions[formData.country][0]
      }));
    }
  }, [formData.country]);

  const handleCheckboxToggle = (field: 'industries' | 'ownershipFlags' | 'activities' | 'useOfFunds' | 'techStack', value: string) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      const updatedArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: updatedArray };
    });
  };

  const handleStage1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setShowFullForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://your-n8n-url.com/grant-discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setShowFullForm(false);

        setFormData({
          businessName: '',
          ownerName: '',
          email: '',
          phone: '',
          websiteUrl: '',
          country: 'Canada',
          region: 'Ontario',
          yearsInBusiness: 'Less than 1 year',
          employees: 'Solo',
          revenue: 'Under $250K',
          industries: [],
          structure: 'Sole proprietor',
          ownershipFlags: [],
          activities: [],
          techStack: [],
          monthlySoftwareSpend: 'Under $500/month',
          useOfFunds: [],
          appliedBefore: 'No, never applied',
          urgency: 'Planning ahead — no urgency',
          fundingAmount: 'Under $25K',
          consentAccuracy: false,
          consentContact: false,
          consentDisclaimer: false,
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Most Businesses Are Leaving <span className="text-brand-cyan">$50,000–$500,000</span> On The Table Every Year
        </h1>
        <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
          We find every grant, tax credit, cloud credit, and tech benefit your business can claim. That covers government programs, major tech firms, and startup programs. Most businesses claim less than 5% of what they could.
        </p>
      </section>

      
      <section className="glass p-8 md:p-12 rounded-xl border border-brand-cyan/20 max-w-3xl mx-auto space-y-6 shadow-[0_0_30px_rgba(0,210,255,0.03)]">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-wider uppercase text-brand-cyan">Find Out What Your Business Qualifies For</h2>
          <p className="text-white/70 font-light text-sm">Free preliminary assessment — takes 60 seconds</p>
        </div>

        {status === 'success' ? (
          <div className="p-6 bg-brand-cyan/10 border border-brand-cyan/30 rounded text-center space-y-4">
            <h3 className="text-lg font-bold text-white uppercase">Inquiry Logged Successfully</h3>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              We have logged your details. Our system sent your file to our team. An operations specialist will contact you within 48 business hours with your matched results.
            </p>
          </div>
        ) : !showFullForm ? (
          <form onSubmit={handleStage1Submit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Business Email *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@company.com" 
                  className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Country of Operation *</label>
                <select 
                  className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" 
                  value={formData.country} 
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                >
                  <option value="Canada">Canada</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Primary Industry *</label>
                <select 
                  className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan"
                  value={formData.industries[0] || ""}
                  onChange={(e) => setFormData({ ...formData, industries: [e.target.value] })}
                  required
                >
                  <option value="" disabled>Select Sector</option>
                  {industriesList.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="inline-block px-10 py-4 bg-brand-cyan text-brand-navy font-bold text-xs tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy transition-all duration-300"
              >
                Scan For Programs →
              </button>
              <p className="text-[11px] text-white/55 uppercase tracking-widest mt-3">
                Full discovery report delivered within 24 hours. No commitment required.
              </p>
            </div>
          </form>) : ( /* stage 2 form — revealed on micro-commitment */<div className="space-y-8 animate-fadeIn">
            <div className="p-4 bg-brand-cyan/5 border border-brand-cyan/20 rounded text-center">
              <p className="text-sm text-brand-cyan font-bold">
                To find your full list of qualifying programs, we need a few more details. This takes about 3 minutes.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-10">
              
              
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-brand-cyan font-bold border-b border-white/10 pb-2">
                  Section 1 — Your Business
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Business Legal Name *</label>
                    <input type="text" required className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Business Owner Full Name *</label>
                    <input type="text" required className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.ownerName} onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Email Address *</label>
                    <input type="email" required disabled className="w-full bg-brand-dark/50 border border-white/10 rounded p-3 text-sm text-white/62 cursor-not-allowed" value={formData.email} />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Phone Number</label>
                    <input type="tel" className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Optional" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Business Website URL</label>
                    <input type="url" className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.websiteUrl} onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })} placeholder="Optional" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Province / State / Region *</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.region} onChange={(e) => setFormData({ ...formData, region: e.target.value })}>
                      {regionalOptions[formData.country]?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Years in Business *</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.yearsInBusiness} onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Number of Employees *</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.employees} onChange={(e) => setFormData({ ...formData, employees: e.target.value })}>
                      <option value="Solo">Solo</option>
                      <option value="2-10">2-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Annual Revenue *</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.revenue} onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}>
                      <option value="Under $250K">Under $250K</option>
                      <option value="$250K-$1M">$250k-$1m</option>
                      <option value="$1M-$5M">$1M-$5M</option>
                      <option value="$5M-$10M">$5m-$10m</option>
                      <option value="Over $10M">Over $10M</option>
                    </select>
                  </div>
                </div>
              </div>

              
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-brand-cyan font-bold border-b border-white/10 pb-2">
                  Section 2 — Business Type & Demographics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Business Structure *</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.structure} onChange={(e) => setFormData({ ...formData, structure: e.target.value })}>
                      <option value="Sole proprietor">Sole proprietor</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Corporation">Corporation</option>
                      <option value="LLC">LLC</option>
                      <option value="Non-profit">Non-profit</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <label className="block text-[11px] uppercase tracking-widest text-white/62 font-bold">Demographic Diversity Indicators (Select all that apply — unlocks target programs)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { key: 'Women', label: 'Majority Women-owned' },
                      { key: 'Indigenous', label: 'Indigenous / First Nations / Métis / Inuit' },
                      { key: 'Minority', label: 'Visible minority / BIPOC' },
                      { key: 'Veterans', label: 'Veterans / Military' },
                      { key: 'Disabilities', label: 'Persons with disabilities' },
                      { key: 'None', label: 'None of the above' }
                    ].map((flag) => (
                      <label key={flag.key} className="flex items-start gap-3 p-3 rounded bg-brand-dark/40 border border-white/5 cursor-pointer hover:border-brand-cyan/30 transition-colors">
                        <input type="checkbox" className="mt-1 accent-brand-cyan shrink-0" checked={formData.ownershipFlags.includes(flag.key)} onChange={() => handleCheckboxToggle('ownershipFlags', flag.key)} />
                        <span className="text-xs text-white/80 font-light">{flag.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-brand-cyan font-bold border-b border-white/10 pb-2">
                  Section 3 — Recent Activity
                </h3>
                <div className="space-y-4">
                  <label className="block text-[11px] uppercase tracking-widest text-white/62 font-bold">Has your business completed any of these actions in the last 24 months? (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { key: 'CloudUsage', label: 'Uses cloud computing services (AWS, Google Cloud, Azure, etc.) *' },
                      { key: 'Software', label: 'Built or modified custom software or apps' },
                      { key: 'AI', label: 'Developed internal AI or automation systems' },
                      { key: 'Research', label: 'Conducted structural product research or experimentation' },
                      { key: 'Products', label: 'Developed new commercial products or business processes' },
                      { key: 'Hiring_RD', label: 'Hired staff for technology, R&D, or software roles' },
                      { key: 'Patents', label: 'Filed for any commercial patents or IP protections' },
                      { key: 'Export', label: 'Exported finished products/services internationally' },
                      { key: 'Equipment', label: 'Purchased major industrial equipment or hardware' },
                      { key: 'Headcount', label: 'Hired general staff or significantly grew headcount' },
                      { key: 'Expansion', label: 'Expanded physically or structurally to new markets' },
                      { key: 'None', label: 'None of the above' }
                    ].map((act) => (
                      <label key={act.key} className="flex items-start gap-3 p-3 rounded bg-brand-dark/40 border border-white/5 cursor-pointer hover:border-brand-cyan/30 transition-colors">
                        <input type="checkbox" className="mt-1 accent-brand-cyan shrink-0" checked={formData.activities.includes(act.key)} onChange={() => handleCheckboxToggle('activities', act.key)} />
                        <span className="text-xs text-white/80 font-light">{act.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <label className="block text-[11px] uppercase tracking-widest text-white/62 font-bold">Currently pays for any of the following: (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { key: 'AI_APIs', label: 'AI API services (ChatGPT, Claude, etc.)' },
                      { key: 'Dev_Tools', label: 'Developer tools or version control (e.g. GitHub)' },
                      { key: 'CRM_Marketing', label: 'CRM or marketing automation software' },
                      { key: 'Customer_Support', label: 'Customer support or helpdesk software' },
                      { key: 'Analytics_Data', label: 'Analytics or structured data platforms' }
                    ].map((tool) => (
                      <label key={tool.key} className="flex items-start gap-3 p-3 rounded bg-brand-dark/40 border border-white/5 cursor-pointer hover:border-brand-cyan/30 transition-colors">
                        <input type="checkbox" className="mt-1 accent-brand-cyan shrink-0" checked={formData.techStack.includes(tool.key)} onChange={() => handleCheckboxToggle('techStack', tool.key)} />
                        <span className="text-xs text-white/80 font-light">{tool.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-brand-cyan font-bold border-b border-white/10 pb-2">
                  Section 4 — Technology Stack & Expenditure
                </h3>
                <div className="space-y-4">
                  <label className="block text-[11px] uppercase tracking-widest text-white/62 font-bold">Which of the following does your business currently use or pay for? (Select all)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'Cloud computing (AWS/GCP/Azure/Oracle)',
                      'AI or machine learning tools',
                      'Developer tools or version control',
                      'CRM or sales tools',
                      'Marketing automation',
                      'Customer support software',
                      'Analytics platforms',
                      'None of the above'
                    ].map((stackItem) => (
                      <label key={stackItem} className="flex items-start gap-3 p-3 rounded bg-brand-dark/40 border border-white/5 cursor-pointer hover:border-brand-cyan/30 transition-colors">
                        <input type="checkbox" className="mt-1 accent-brand-cyan shrink-0" checked={formData.techStack.includes(stackItem)} onChange={() => handleCheckboxToggle('techStack', stackItem)} />
                        <span className="text-xs text-white/80 font-light">{stackItem}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">About how much do you spend on software each month?</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.monthlySoftwareSpend} onChange={(e) => setFormData({ ...formData, monthlySoftwareSpend: e.target.value })}>
                      <option value="Under $500/month">Under $500/month</option>
                      <option value="$500-$2,000/month">$500-$2,000/month</option>
                      <option value="$2,000-$5,000/month">$2,000-$5,000/month</option>
                      <option value="Over $5,000/month">Over $5,000/month</option>
                    </select>
                  </div>
                </div>
              </div>

              
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-brand-cyan font-bold border-b border-white/10 pb-2">
                  Section 5 — Funding Intent & Context
                </h3>
                <div className="space-y-4">
                  <label className="block text-[11px] uppercase tracking-widest text-white/62 font-bold">What would you use funding capital to execute? (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'Hiring staff',
                      'Equipment or technology purchase',
                      'Research and development',
                      'Marketing and business development',
                      'Export and international expansion',
                      'Training and skills development',
                      'Digital transformation',
                      'Working capital / operations',
                      'Product development'
                    ].map((use) => (
                      <label key={use} className="flex items-start gap-3 p-3 rounded bg-brand-dark/40 border border-white/5 cursor-pointer hover:border-brand-cyan/30 transition-colors">
                        <input type="checkbox" className="mt-1 accent-brand-cyan shrink-0" checked={formData.useOfFunds.includes(use)} onChange={() => handleCheckboxToggle('useOfFunds', use)} />
                        <span className="text-xs text-white/80 font-light">{use}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">Have you previously applied for government grants?</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.appliedBefore} onChange={(e) => setFormData({ ...formData, appliedBefore: e.target.value })}>
                      <option value="Yes, successfully">Yes, successfully</option>
                      <option value="Yes, unsuccessfully">Yes, unsuccessfully</option>
                      <option value="No, never applied">No, never applied</option>
                      <option value="Not sure what's available">Not sure what's available</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">How urgently do you need funding?</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.urgency} onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}>
                      <option value="Immediately (within 30 days)">Immediately (within 30 days)</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="Within 6 months">Within 6 months</option>
                      <option value="Planning ahead — no urgency">Planning ahead — no urgency</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-white/62 mb-2 font-bold">How much funding are you looking for?</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-brand-cyan" value={formData.fundingAmount} onChange={(e) => setFormData({ ...formData, fundingAmount: e.target.value })}>
                      <option value="Under $25K">Under $25K</option>
                      <option value="$25K-$100K">$25k-$100k</option>
                      <option value="$100K-$500K">$100k-$500k</option>
                      <option value="$500K+">$500K+</option>
                    </select>
                  </div>
                </div>
              </div>

              
              <div className="space-y-6 pt-4 border-t border-white/10">
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 accent-brand-cyan shrink-0" checked={formData.consentAccuracy} onChange={(e) => setFormData({ ...formData, consentAccuracy: e.target.checked })} />
                    <span className="text-xs text-white/70 font-light leading-relaxed">I confirm the details I gave here are correct to the best of my knowledge. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 accent-brand-cyan shrink-0" checked={formData.consentContact} onChange={(e) => setFormData({ ...formData, consentContact: e.target.checked })} />
                    <span className="text-xs text-white/70 font-light leading-relaxed">I agree to be contacted by AscendantOps about grants, tax credits, tech benefit programs, and funding that fit my business. *</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 accent-brand-cyan shrink-0" checked={formData.consentDisclaimer} onChange={(e) => setFormData({ ...formData, consentDisclaimer: e.target.checked })} />
                    <span className="text-xs text-white/70 font-light leading-relaxed">I understand this is a free scan service. Matches depend on current program rules and regional funding. *</span>
                  </label>
                </div>
              </div>

              {status === 'error' && (
                <p className="text-xs text-red-500 font-bold tracking-wide uppercase text-center">
                  Something went wrong. Check your connection, or contact us.
                </p>
              )}

              
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="inline-block px-12 py-4 bg-brand-cyan text-brand-navy font-bold text-xs tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all duration-300"
                >
                  {status === 'loading' ? 'Processing Alignment Ledger...' : 'Find My Programs — Free'}
                </button>
              </div>

            </form>
          </div>
        )}
      </section>

      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto border-t border-white/5 pt-16">
        
        <div className="glass p-8 md:p-10 rounded-xl space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight border-b border-white/5 pb-4">Government & Tax Programs</h3>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan">✓</span>
                <span>Federal and provincial digital grants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan">✓</span>
                <span>SR&ED and regional R&D corporate tax credits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan">✓</span>
                <span>Innovation funding that does not dilute your equity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan">✓</span>
                <span>Export and international expansion incentives</span>
              </li>
            </ul>
          </div>
          <div className="pt-6 border-t border-white/5">
            <p className="text-xs text-brand-cyan uppercase tracking-widest font-semibold italic">
              Average payout for Canadian tech firms that qualify: $50,000–$150,000
            </p>
          </div>
        </div>

        
        <div className="glass p-8 md:p-10 rounded-xl space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight border-b border-white/5 pb-4">Technology Credits & Benefits</h3>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan">✓</span>
                <span>Major cloud computing platforms (combined value: up to $500,000)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan">✓</span>
                <span>Leading AI API providers (credits for model access and inference)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan">✓</span>
                <span>Developer tools, productivity platforms, and customer engagement software (combined value: $15,000–$50,000/year)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-cyan">✓</span>
                <span>Global accelerator benefits and startup programs</span>
              </li>
            </ul>
          </div>
          <div className="pt-6 border-t border-white/5">
            <p className="text-xs text-brand-cyan uppercase tracking-widest font-semibold italic">
              Average value for qualifying tech-forward businesses: $15,000–$200,000
            </p>
          </div>
        </div>
      </section>

      
      <section className="space-y-8 border-t border-white/5 pt-16">
        <h2 className="text-3xl font-bold text-center text-white tracking-tight">Services & Capital Discovery Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-lg font-bold mb-2">Government & Tax Discovery</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$297 <span className="text-xs text-white/55 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ Every qualifying government grant identified</li>
                <li className="flex items-center gap-2">✓ Federal + provincial/state programs</li>
                <li className="flex items-center gap-2">✓ SR&ED eligibility assessment</li>
                <li className="flex items-center gap-2">✓ Prioritized list with deadlines & amounts</li>
                <li className="flex items-center gap-2">✓ 48-hour delivery window</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/28EaEX3V5eWs2e2fW3dUY09" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold uppercase rounded transition-all">
              Select Package
            </a>
          </div>

          
          <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-lg font-bold mb-2">Technology Benefits Discovery</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$197 <span className="text-xs text-white/55 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ Every qualifying cloud credit program</li>
                <li className="flex items-center gap-2">✓ AI API credit programs matched</li>
                <li className="flex items-center gap-2">✓ Developer tool and software benefits</li>
                <li className="flex items-center gap-2">✓ Startup program eligibility assessment</li>
                <li className="flex items-center gap-2">✓ Application links & setup instructions</li>
                <li className="flex items-center gap-2">✓ 48-hour delivery window</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/bJeaEX4Z9cOk3i6119dUY0c" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold uppercase rounded transition-all">
              Select Package
            </a>
          </div>

          
          <div className="glass p-8 rounded-lg border-2 border-brand-cyan/40 flex flex-col justify-between relative glass-hover shadow-[0_0_20px_rgba(0,210,255,0.05)]">
            <span className="absolute -top-3 right-6 bg-brand-cyan text-brand-navy text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded">Recommended</span>
            <div>
              <h3 className="text-lg font-bold mb-2">Complete Capital Audit</h3>
              <p className="text-brand-cyan text-2xl font-bold mb-6">$397 <span className="text-xs text-white/55 font-light">one-time</span></p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-center gap-2">✓ Everything in both discovery modules</li>
                <li className="flex items-center gap-2">✓ Unified priority score (value × ease × speed)</li>
                <li className="flex items-center gap-2">✓ Deep SR&ED framework assessment</li>
                <li className="flex items-center gap-2">✓ Total eligible benefit calculation</li>
                <li className="flex items-center gap-2">✓ Save $97 versus buying each one separately</li>
                <li className="flex items-center gap-2">✓ 48-hour delivery window</li>
              </ul>
            </div>
            <a href="https://buy.stripe.com/4gM5kD4Z93dKf0O6ltdUY0d" target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 bg-brand-cyan text-brand-navy hover:bg-white hover:text-brand-navy text-xs font-bold uppercase rounded transition-all duration-300">
              Order Capital Audit
            </a>
          </div>
        </div>
      </section>

      
      <section className="space-y-8 border-t border-white/5 pt-16">
        <h2 className="text-2xl font-bold text-center text-brand-cyan uppercase tracking-wider">Execution & Monitoring Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-lg font-bold mb-2">Guided Application Help</h3>
              <p className="text-brand-cyan text-xl font-bold mb-4">$497 <span className="text-xs text-white/55 font-light">one-time</span></p>
              <p className="text-white/70 font-light text-xs mb-6 leading-relaxed">
                We complete the applications for your top 5 programs, and we draft all the technical materials.
              </p>
            </div>
            <a href="https://buy.stripe.com/14A14n4Z97u08Cq25ddUY0a" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold uppercase rounded transition-all">
              Add Service
            </a>
          </div>

          
          <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-lg font-bold mb-2">Full Application Stack</h3>
              <p className="text-brand-cyan text-xl font-bold mb-4">$997 <span className="text-xs text-white/55 font-light">one-time</span></p>
              <p className="text-white/70 font-light text-xs mb-6 leading-relaxed">
                We apply to all qualified programs across your roadmap, ensuring complete setup, account creation, and successful benefit mapping.
              </p>
            </div>
            <a href="https://buy.stripe.com/6oU14n63ddSo9Gu4dldUY0e" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold uppercase rounded transition-all">
              Add Service
            </a>
          </div>

          
          <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
            <div>
              <h3 className="text-lg font-bold mb-2">Ongoing Benefit Monitoring</h3>
              <p className="text-brand-cyan text-xl font-bold mb-4">$99 <span className="text-xs text-white/55 font-light">/ month</span></p>
              <p className="text-white/70 font-light text-xs mb-6 leading-relaxed">
                Continuous monthly alerts for new credit openings, automated application renewals before credits expire, and newly available program indexing.
              </p>
            </div>
            <a href="https://buy.stripe.com/6oU6oH9fpg0wg4S9xFdUY0f" target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold uppercase rounded transition-all">
              Activate Retainer
            </a>
          </div>
        </div>
      </section>

      
      {detectedCountry === 'Canada' && (
        <section className="glass p-8 md:p-10 rounded-xl border border-brand-cyan/30 bg-brand-cyan/5 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Canadian Business Owners</h3>
          <p className="text-white/80 font-light text-sm max-w-2xl mx-auto leading-relaxed">
            Did you build software, internal tools, or use tech to improve how you work in the last 18 months? You likely qualify for a tax credit most Canadian businesses never claim.
          </p>
          <p className="text-white/80 font-light text-sm max-w-2xl mx-auto leading-relaxed mt-4">
            The average recovery is between <strong>$50,000</strong> and <strong>$150,000</strong>. We assess your eligibility as part of every Capital Audit at no additional cost.
          </p>
        </section>
      )}

      
      <section className="text-center py-12 border-t border-white/5">
        <h3 className="text-xs uppercase tracking-widest text-white/55 mb-3 font-semibold">Active Monitoring Coverage</h3>
        <p className="text-sm font-light text-white/70">Canada / United States / United Kingdom / Australia</p>
      </section>

      
      <section className="glass p-8 md:p-12 rounded-xl text-center max-w-4xl mx-auto space-y-6 border border-brand-cyan/20">
        <h2 className="text-2xl font-bold text-white tracking-tight">Not sure what you qualify for?</h2>
        <p className="text-white/70 max-w-xl mx-auto font-light leading-relaxed text-sm">
          Start with a free scan. Enter your business details above. We will show you what you qualify for. No obligation. No payment.
        </p>
        <button 
          onClick={() => {
            window.scrollTo({ top: 300, behavior: 'smooth' });
          }} 
          className="inline-block px-8 py-4 bg-brand-cyan text-brand-navy font-bold tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300"
        >
          Begin Free Assessment
        </button>
      </section>
    </div>
  );
}