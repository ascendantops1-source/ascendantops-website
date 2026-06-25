'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import RoiCalculator from "../components/RoiCalculator";

const cityVideos: Record<string, string> = {
  'Toronto': '/videos/toronto-hero.mp4',
  'New York': '/videos/newyork-hero.mp4',
  'London': '/videos/london-hero.mp4',
  'Sydney': '/videos/sydney-hero.mp4',
  'default': '/videos/calgary-hero.mp4'
};

export default function Home() {
  const [userCity, setUserCity] = useState<string>('default');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data.city && cityVideos[data.city]) {
          setUserCity(data.city);
        } else {
          setUserCity('default');
        }
      })
      .catch(() => setUserCity('default'));
  }, []);

  return (
    <div className="w-full bg-brand-navy space-y-24">
      {/* SECTION 1 — HERO */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden border-b border-white/5">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0" key={userCity}>
          <source src={cityVideos[userCity]} type="video/mp4" />
          <source src={cityVideos['default']} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-navy/65 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
              Is Your Business <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-brand-cyan bg-clip-text text-transparent glow-text font-extrabold">
                Invisible to AI?
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
              When someone asks ChatGPT to recommend a service near them, they get a list. Your competitors may already be on it. Do you know where you stand?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-cyan text-brand-navy font-bold tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300 text-center text-sm">
                Get Your Free AI Visibility Check
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-brand-cyan/20 glass shadow-[0_0_30px_rgba(0,210,255,0.1)]">
              <img src="/hero-chat.png" alt="AI Phone Search" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — REALITY OF AI SEARCH */}
      <section className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-cyan uppercase tracking-wider leading-tight">The Reality of AI Search</h2>
          <p className="text-white/70 font-light leading-relaxed text-base">
            Right now, when someone asks AI for a recommendation, the platforms execute a deep semantic scan. If your node data is disconnected, you get marked as a broken link.
          </p>
        </div>
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/5 shadow-[0_0_30px_rgba(0,210,255,0.05)]">
          <img src="/image2.png" alt="Network Visualization" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section className="w-full py-20 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-b border-white/5 bg-brand-dark/20 rounded-xl space-y-8">
        <h2 className="text-3xl font-bold text-brand-cyan uppercase tracking-wider">See the Outcome in 40 Seconds</h2>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-brand-cyan/20 glass">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/outcome-Journey.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="text-white/50 text-sm max-w-md mx-auto">This is exactly what we deliver for your business. We find where you are invisible, resolve it, and verify the changes.</p>
      </section>

      {/* NEW SECTION — THE INTELLIGENCE ADVANTAGE */}
      <section className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto space-y-12 border-t border-white/5">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-cyan uppercase tracking-wider">WE DON'T JUST AUDIT YOUR SITE</h2>
            <p className="text-white/60 mt-2">We audit your entire competitive landscape.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-lg text-center">
                <div className="text-brand-cyan mb-4">🔍</div>
                <h4 className="font-bold mb-3">Every Competitor Scored</h4>
                <p className="text-white/60 text-sm">We score every company in their industry and location. You receive your rank within your actual competitive set.</p>
            </div>
            <div className="glass p-8 rounded-lg text-center">
                <div className="text-brand-cyan mb-4">📈</div>
                <h4 className="font-bold mb-3">Named Competitors Identified</h4>
                <p className="text-white/60 text-sm">Your report names the specific businesses appearing in AI results that you are not. You'll know exactly who is getting recommended instead of you.</p>
            </div>
            <div className="glass p-8 rounded-lg text-center">
                <div className="text-brand-cyan mb-4">🛡️</div>
                <h4 className="font-bold mb-3">Verified Across 5 Platforms</h4>
                <p className="text-white/60 text-sm">ChatGPT, Perplexity, Google AI, Gemini, and Bing Copilot — all checked simultaneously.</p>
            </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto space-y-12 border-t border-white/5">
        <h2 className="text-3xl font-bold text-center text-brand-cyan uppercase tracking-wider">The Sovereign Optimization Process</h2>
        <div className="relative aspect-[16/6] w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-white/5">
          <img src="/process-diagram.png" alt="Process Flowchart" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* SECTION 5 — DELIVERABLE */}
      <section className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-white/5 pt-16">
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/5">
          <img src="/image3.png" alt="Scored Dashboard Mockup" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-brand-cyan uppercase tracking-wider">Here is Exactly What You Receive</h2>
          <p className="text-white/70 font-light">No vague recommendations. No standard agency PDFs. You get clear, verifiable benchmarks that either move or they don&apos;t.</p>
        </div>
      </section>

      {/* SECTION 6 — ROI CALCULATOR */}
      <section className="w-full py-16 px-6 md:px-12 max-w-4xl mx-auto border-t border-white/5 pt-16 space-y-6">
        <h2 className="text-3xl font-bold text-center text-brand-cyan uppercase tracking-wider">WHAT IS AI INVISIBILITY COSTING YOU?</h2>
        <p className="text-white/70 text-center font-light text-sm">Move the sliders to see your number.</p>
        <RoiCalculator />
        <p className="text-white/60 text-sm text-center italic">In most industries, fewer than 30% of businesses currently appear in AI search results. The window to be first in your category is still open — but it is closing.</p>
      </section>

      {/* SECTION 7 — PRICING */}
      <section className="w-full py-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 pt-16 text-center space-y-12">
        <h2 className="text-3xl font-bold text-brand-cyan uppercase tracking-wider">TRANSPARENT PRICING</h2>
        
        {/* Bundle First */}
        <div className="glass p-8 rounded-lg border-2 border-brand-cyan/40 text-center max-w-2xl mx-auto mb-12">
          <span className="bg-brand-cyan text-brand-navy text-[10px] font-bold uppercase px-3 py-1 rounded">Most clients save $198/month</span>
          <h3 className="text-2xl font-bold uppercase text-brand-cyan mt-4 mb-2">The Sovereign Bundle</h3>
          <p className="text-brand-cyan text-3xl font-bold mb-4">$699 <span className="text-xs text-white/40">/ month</span></p>
          <a href="https://buy.stripe.com/4gMaEXezJ8y419Y6ltdUY08" className="inline-block px-8 py-4 bg-brand-cyan text-brand-navy font-bold uppercase rounded">Activate Sovereign Bundle</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Retainer Cards */}
          <div className="glass p-8 rounded-lg text-center">
            <h3 className="text-lg font-bold mb-2">Competitor Monitoring</h3>
            <p className="text-brand-cyan text-xl font-bold mb-4">$299/mo</p>
            <a href="https://buy.stripe.com/6oUeVd77h01ycSG8tBdUY05" className="block py-2 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy rounded uppercase text-[10px] font-bold">Secure Retainer</a>
          </div>
          <div className="glass p-8 rounded-lg text-center">
            <h3 className="text-lg font-bold mb-2">Autopilot Stack</h3>
            <p className="text-brand-cyan text-xl font-bold mb-4">$299/mo</p>
            <a href="https://buy.stripe.com/00wfZhfDNeWs5qe4dldUY06" className="block py-2 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy rounded uppercase text-[10px] font-bold">Secure Retainer</a>
          </div>
          <div className="glass p-8 rounded-lg text-center">
            <h3 className="text-lg font-bold mb-2">GEO Monitoring</h3>
            <p className="text-brand-cyan text-xl font-bold mb-4">$299/mo</p>
            <a href="https://buy.stripe.com/7sY00j3V53dK7ymdNVdUY07" className="block py-2 bg-white/10 hover:bg-brand-cyan hover:text-brand-navy rounded uppercase text-[10px] font-bold">Secure Retainer</a>
          </div>
        </div>
      </section>
    </div>
  );
}