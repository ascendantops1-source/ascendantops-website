'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RoiCalculator() {
  const [clientValue, setClientValue] = useState(2500);
  const [monthlyClients, setMonthlyClients] = useState(5);
  const [aiPercentage, setAiPercentage] = useState(20);

  const [monthlyAtRisk, setMonthlyAtRisk] = useState(0);
  const [annualAtRisk, setAnnualAtRisk] = useState(0);

  useEffect(() => {
    const atRisk = clientValue * monthlyClients * (aiPercentage / 100);
    setMonthlyAtRisk(atRisk);
    setAnnualAtRisk(atRisk * 12);
  }, [clientValue, monthlyClients, aiPercentage]);

  // Format currency helpers
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(0,210,255,0.03)] border border-white/5 bg-brand-dark/40 my-16">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-brand-cyan bg-clip-text text-transparent">
        Quantify Your AI Search Risk
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Sliders Side */}
        <div className="space-y-8">
          {/* Slider 1 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-[#8BA7C7]">What is one new client worth to your business?</label>
              <span className="text-brand-cyan font-bold text-lg">{formatCurrency(clientValue)}</span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              className="w-full accent-brand-cyan bg-white/5 h-1 rounded-lg cursor-pointer"
              value={clientValue}
              onChange={(e) => setClientValue(Number(e.target.value))}
            />
          </div>

          {/* Slider 2 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-[#8BA7C7]">How many new clients do you get per month?</label>
              <span className="text-brand-cyan font-bold text-lg">{monthlyClients}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              className="w-full accent-brand-cyan bg-white/5 h-1 rounded-lg cursor-pointer"
              value={monthlyClients}
              onChange={(e) => setMonthlyClients(Number(e.target.value))}
            />
          </div>

          {/* Slider 3 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-[#8BA7C7]">Percentage of customers using AI to find services?</label>
              <span className="text-brand-cyan font-bold text-lg">{aiPercentage}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="5"
              className="w-full accent-brand-cyan bg-white/5 h-1 rounded-lg cursor-pointer"
              value={aiPercentage}
              onChange={(e) => setAiPercentage(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Output Side */}
        <div className="space-y-6 bg-brand-navy/60 p-6 rounded-xl border border-white/5">
          {/* Monthly Revenue at Risk */}
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-[#8BA7C7] mb-1">
              Monthly Revenue at Risk
            </p>
            <p className="text-3xl md:text-4xl font-extrabold text-[#FF4444] transition-all duration-300">
              {formatCurrency(monthlyAtRisk)}
            </p>
            <p className="text-xs text-white/40 mt-1">
              Revenue going to AI-recommended competitors every month
            </p>
          </div>

          {/* Annual Revenue at Risk */}
          <div className="text-center md:text-left pt-4 border-t border-white/5">
            <p className="text-xs uppercase tracking-widest text-[#8BA7C7] mb-1">
              Annual Revenue at Risk
            </p>
            <p className="text-2xl font-bold text-[#FF4444] transition-all duration-300">
              {formatCurrency(annualAtRisk)}
            </p>
            <p className="text-xs text-white/40 mt-1">
              That's lost capital every single year
            </p>
          </div>

          {/* Top Ranked Business Capture */}
          <div className="text-center md:text-left pt-4 border-t border-white/5">
            <p className="text-xs uppercase tracking-widest text-brand-cyan mb-1">
              What an AI-Optimized Competitor Captures
            </p>
            <p className="text-2xl font-bold text-[#00C896] transition-all duration-300">
              {formatCurrency(annualAtRisk)}
            </p>
            <p className="text-xs text-white/40 mt-1">
              What the AI recommenders redirect from you to them
            </p>
          </div>
        </div>
      </div>

      {/* Proportional Display Bar */}
      <div className="mt-12 space-y-2">
        <div className="h-4 w-full bg-[#FF4444] rounded-full overflow-hidden flex shadow-[0_0_15px_rgba(255,68,68,0.1)]">
          <div className="h-full bg-[#00C896] shadow-[0_0_15px_rgba(0,200,150,0.2)] transition-all duration-500" style={{ width: `${100 - aiPercentage}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-white/40">
          <span>Your current capture: $0</span>
          <span>AI-Recommended Competitor: {formatCurrency(monthlyAtRisk)}/mo</span>
        </div>
      </div>

      {/* CTA Segment */}
      <div className="mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-sm text-[#8BA7C7] mb-4">
          Your AI Visibility Score is currently unknown. The audit costs $0 to request.
        </p>
        <Link href="/contact" className="inline-block px-8 py-4 bg-brand-cyan text-brand-navy font-bold tracking-wider uppercase rounded hover:bg-white hover:text-brand-navy hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-300 text-sm">
          CHECK MY SCORE — IT'S FREE
        </Link>
      </div>
    </div>
  );
}