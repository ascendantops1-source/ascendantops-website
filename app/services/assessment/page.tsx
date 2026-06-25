import Link from "next/link";

export default function Assessment() {
  return (
    <div className="w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Autonomous AI <span className="text-brand-cyan">Business Assessment</span>
        </h1>
        <p className="text-white/70 text-lg font-light leading-relaxed">
          Most businesses are paying for time, tools, and staff to handle tasks that AI could handle automatically — often for a fraction of the cost. We review your operations, find exactly where that's happening, and show you what to do about it. No technical knowledge required on your end.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="glass p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-brand-cyan uppercase tracking-wider">Assessment Scope</h2>
          <ul className="space-y-4 text-white/70 font-light text-sm">
            <li className="flex items-start gap-2">
              <span className="text-brand-cyan shrink-0 font-bold">✓</span>
              <span><strong>Customer Enquiries:</strong> We identify which incoming messages, bookings, and follow-ups can be handled automatically — so your team focuses on work that actually needs them.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-cyan shrink-0 font-bold">✓</span>
              <span><strong>Software Cost Review:</strong> We find the tools and subscriptions quietly draining your budget every month that cheaper or free alternatives can replace.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-cyan shrink-0 font-bold">✓</span>
              <span><strong>Ownership Audit:</strong> We identify which AI tools could run entirely under your control — eliminating recurring platform fees permanently.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold">An Audit Built for Business Owners</h3>
          <p className="text-white/60 font-light text-sm leading-relaxed">
            We speak plain English. Whether you run a trades business, a medical practice, a restaurant, or a professional services firm — you will understand every finding in your report.
          </p>
          <p className="text-white/60 font-light text-sm leading-relaxed">
            You receive a clear list of what to change, what it costs, and what it saves. Your team can act on it independently, or we handle everything for you.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold tracking-wider uppercase mb-8 text-center text-brand-cyan">
        Choose Your Assessment Depth
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass p-8 rounded-lg flex flex-col justify-between glass-hover">
          <div>
            <h3 className="text-xl font-bold mb-2">Operations Assessment</h3>
            <p className="text-brand-cyan text-2xl font-bold">$500 <span className="text-xs text-white/40 font-light">one-time</span></p>
            <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
              <li className="flex items-center gap-2">✓ A full review of how your business currently handles customer communication, follow-ups, and repetitive internal tasks</li>
              <li className="flex items-center gap-2">✓ Identification of every software subscription you could eliminate or reduce</li>
              <li className="flex items-center gap-2">✓ A prioritized list of automation opportunities ranked by time saved and cost impact</li>
              <li className="flex items-center gap-2">✓ Written action plan delivered within 48 hours</li>
            </ul>
          </div>
          <a href="https://buy.stripe.com/8x214n3V56pWbOC6ltdUY03" className="w-full text-center py-3 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all duration-300">
            Order Operations Assessment
          </a>
        </div>

        <div className="glass p-8 rounded-lg border border-brand-cyan/30 flex flex-col justify-between glass-hover shadow-[0_0_20px_rgba(0,210,255,0.05)]">
          <span className="absolute -top-3 right-6 bg-brand-cyan text-brand-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">Popular</span>
          <div>
            <h3 className="text-xl font-bold mb-2">Full Autonomous Audit</h3>
            <p className="text-brand-cyan text-2xl font-bold">$1,000 <span className="text-xs text-white/40 font-light">one-time</span></p>
            <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
              <li className="flex items-center gap-2">✓ Everything in the Operations Assessment</li>
              <li className="flex items-center gap-2">✓ We go deeper — mapping out a complete automation system tailored to your business</li>
              <li className="flex items-center gap-2">✓ A step-by-step build plan your team can follow, or we execute it entirely for you</li>
              <li className="flex items-center gap-2">✓ Tools recommended that you own outright — no ongoing subscription fees attached</li>
              <li className="flex items-center gap-2">✓ A 30-minute walkthrough call included to explain every recommendation</li>
            </ul>
          </div>
          <a href="https://buy.stripe.com/aFadR9dvFeWs19Y4dldUY04" className="w-full text-center py-3 bg-brand-cyan text-brand-navy hover:bg-white hover:text-brand-navy text-xs font-bold tracking-wider uppercase rounded transition-all duration-300">
            Order Full Audit
          </a>
        </div>
      </div>
    </div>
  );
}