'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export default function RoiCalculator() {
  const [clientValue, setClientValue] = useState(2500);
  const [monthlyClients, setMonthlyClients] = useState(5);
  const [aiPercentage, setAiPercentage] = useState(20);
  const monthlyEstimate = useMemo(() => clientValue * monthlyClients * (aiPercentage / 100), [clientValue, monthlyClients, aiPercentage]);
  const annualEstimate = monthlyEstimate * 12;
  const money = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

  const sliders = [
    { label: 'What is one new customer worth?', value: clientValue, display: money(clientValue), min: 500, max: 50000, step: 500, set: setClientValue },
    { label: 'How many new customers do you get each month?', value: monthlyClients, display: `${monthlyClients}`, min: 1, max: 50, step: 1, set: setMonthlyClients },
    { label: 'How many customers might ask AI first?', value: aiPercentage, display: `${aiPercentage}%`, min: 5, max: 40, step: 5, set: setAiPercentage },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl py-2">
      <h3 className="mb-2 text-center text-2xl font-semibold text-[#101d2c] md:text-3xl">See your numbers</h3>
      <p className="mx-auto mb-9 max-w-xl text-center text-sm leading-relaxed text-[#647587]">A rough estimate of revenue that could be at risk if customers ask AI and your business is not recommended.</p>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-7">
          {sliders.map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex items-start justify-between gap-3">
                <label className="max-w-[75%] text-sm leading-snug text-[#4a5b6d]">{item.label}</label>
                <output className="shrink-0 font-sans text-lg font-bold tabular-nums tracking-normal text-[#0089a6]">{item.display}</output>
              </div>
              <input aria-label={item.label} type="range" min={item.min} max={item.max} step={item.step} className="h-2 w-full cursor-pointer rounded-full accent-[#00a9cc]" value={item.value} onChange={(event) => item.set(Number(event.target.value))} />
              <div className="mt-1 flex justify-between text-xs tabular-nums text-[#8492a0]"><span>{item.min === 500 ? money(item.min) : item.min}</span><span>{item.max === 50000 ? money(item.max) : item.max}</span></div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#fecdd3] bg-[#fff7f7] p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[.13em] text-[#b4233a]">Potential revenue at risk · monthly</p>
          <p className="mt-2 font-sans text-4xl font-bold tabular-nums tracking-tight text-[#c6283d] md:text-5xl">{money(monthlyEstimate)}</p>
          <p className="mt-2 text-sm leading-relaxed text-[#647587]">At the same assumptions, that could be <strong className="font-sans tabular-nums text-[#c6283d]">{money(annualEstimate)}</strong> over a year.</p>
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#d7f1f5]" aria-hidden="true"><div className="h-full rounded-full bg-[#e5485d] transition-[width] duration-300" style={{ width: `${aiPercentage * 2.5}%` }} /></div>
          <p className="mt-2 text-xs leading-relaxed text-[#758493]">This is a planning estimate, not a forecast. Actual results depend on your market, customer behaviour, and whether AI tools recommend your business.</p>
        </div>
      </div>

      <div className="mt-8 border-t border-[#d7e0e6] pt-7">
        <div
          role="img"
          aria-label={`${100 - aiPercentage}% outside modeled risk and ${aiPercentage}% potentially at risk`}
          className="flex h-3 w-full overflow-hidden rounded-full bg-[#e6edf1]"
        >
          <div className="h-full bg-[#08b981] transition-[width] duration-300" style={{ width: `${100 - aiPercentage}%` }} />
          <div className="h-full bg-[#ef4444] transition-[width] duration-300" style={{ width: `${aiPercentage}%` }} />
        </div>
        <div className="mt-2 flex flex-col justify-between gap-1 text-xs font-medium tabular-nums sm:flex-row">
          <span className="text-[#07865f]">Outside modeled risk · {100 - aiPercentage}%</span>
          <span className="text-[#c6283d]">Potential revenue at risk · {money(monthlyEstimate)}/mo</span>
        </div>
      </div>

      <div className="mt-8 border-t border-[#d7e0e6] pt-7 text-center">
        <p className="mb-4 text-sm text-[#4a5b6d]">Curious where you show up today? Start with a no-cost check.</p>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#00a9cc] px-7 py-3.5 text-sm font-bold text-[#062633] transition-colors hover:bg-[#65d4e8]">Ask for a free check <span aria-hidden="true" className="ml-2">→</span></Link>
      </div>
    </div>
  );
}
