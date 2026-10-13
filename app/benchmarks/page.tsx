'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from "next/link";

type Row = {
  business_name: string;
  city: string | null;
  industry: string | null;
  score: number | null;
  ai_citability_score: number | null;
  technical_score: number | null;
  schema_score: number | null;
  top_finding: string | null;
  swept_at: string | null;
};

const OUR_SCORE = 73;          // ascendantops.com homepage, Rubric v1.0
const RUBRIC = "v1.0";

function badge(score: number | null) {
  if (score === null || score === undefined) return 'bg-white/10 text-[#0A0E1A]/60';
  if (score >= 80) return 'bg-[#00A9CC]/15 text-[#007f9b]';
  if (score >= 65) return 'bg-[#F4B942]/20 text-[#8a6100]';
  return 'bg-[#E4572E]/15 text-[#a3311a]';
}

export default function Benchmarks() {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const endpoint = process.env.NEXT_PUBLIC_BENCHMARK_ENDPOINT;
    if (!endpoint) { setError('Benchmark feed is not configured.'); return; }
    fetch(endpoint, { mode: 'cors' })
      .then((r) => { if (!r.ok) throw new Error('feed error'); return r.json(); })
      .then((d) => setRows(Array.isArray(d?.rows) ? d.rows : []))
      .catch(() => setError('Could not load the latest sweep right now.'));
  }, []);

  // newest sweep per business, then ranked
  const ranked = useMemo(() => {
    if (!rows) return [];
    const latest = new Map<string, Row>();
    for (const r of rows) {
      const key = (r.business_name || '').toLowerCase().trim();
      const prev = latest.get(key);
      if (!prev || String(r.swept_at) > String(prev.swept_at)) latest.set(key, r);
    }
    return Array.from(latest.values())
      .filter((r) => typeof r.score === 'number')
      .sort((a, b) => (b.score as number) - (a.score as number));
  }, [rows]);

  const findings = useMemo(() => {
    const counts = new Map<string, number>();
    for (const r of ranked) {
      const f = (r.top_finding || '').trim();
      if (!f) continue;
      counts.set(f, (counts.get(f) || 0) + 1);
    }
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, [ranked]);

  const ourRank = ranked.filter((r) => (r.score as number) > OUR_SCORE).length + 1;
  const average = ranked.length
    ? Math.round(ranked.reduce((s, r) => s + (r.score as number), 0) / ranked.length)
    : 0;

  return (
    <div className="w-full bg-brand-navy">
      <section className="w-full px-6 md:px-12 max-w-5xl mx-auto pt-20 pb-14 space-y-6">
        <div className="label">Live competitive data</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0E1A] leading-tight">
          AI visibility scores, measured on real businesses
        </h1>
        <p className="text-lg text-[#0A0E1A]/70 leading-relaxed max-w-2xl">
          Every business below was scored with the same public method we use on our own site.
          The data refreshes automatically from our sweep.
        </p>
        <p className="text-sm text-[#0A0E1A]/55">
          Method: AscendantOps GEO Visibility Score, Rubric {RUBRIC}.{" "}
          <Link href="/about" className="underline hover:text-[#007f9b]">How the score works</Link>
        </p>
      </section>

      {error && (
        <section className="w-full px-6 md:px-12 max-w-5xl mx-auto pb-20">
          <div className="card p-6 border border-[#E4572E]/30 bg-[#E4572E]/5">
            <p className="text-sm text-[#a3311a]">{error}</p>
          </div>
        </section>
      )}

      {!error && !rows && (
        <section className="w-full px-6 md:px-12 max-w-5xl mx-auto pb-20">
          <div className="card p-8 text-center">
            <p className="text-sm text-[#0A0E1A]/60">Loading the latest sweep…</p>
          </div>
        </section>
      )}

      {ranked.length > 0 && (
        <>
          <section className="w-full px-6 md:px-12 max-w-5xl mx-auto pb-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <div className="text-4xl font-extrabold text-[#0A0E1A]">{ranked.length}</div>
                <div className="text-xs uppercase tracking-widest text-[#0A0E1A]/50 mt-2">Businesses scored</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-4xl font-extrabold text-[#0A0E1A]">{average}</div>
                <div className="text-xs uppercase tracking-widest text-[#0A0E1A]/50 mt-2">Average score</div>
              </div>
              <div className="card-featured p-6 text-center">
                <div className="text-4xl font-extrabold text-[#007f9b]">#{ourRank}</div>
                <div className="text-xs uppercase tracking-widest text-[#0A0E1A]/50 mt-2">
                  Our rank ({OUR_SCORE}, Rubric {RUBRIC})
                </div>
              </div>
            </div>
          </section>

          <section className="w-full px-6 md:px-12 max-w-5xl mx-auto pb-16">
            <div className="card overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0A0E1A]/[0.03] text-[#0A0E1A]/60">
                  <tr>
                    <th className="px-5 py-3 font-semibold">#</th>
                    <th className="px-5 py-3 font-semibold">Business</th>
                    <th className="px-5 py-3 font-semibold">City</th>
                    <th className="px-5 py-3 font-semibold">Industry</th>
                    <th className="px-5 py-3 font-semibold text-right">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {ranked.map((r, i) => (
                    <tr key={(r.business_name || '') + i} className="border-t border-[#0A0E1A]/[0.06]">
                      <td className="px-5 py-3 text-[#0A0E1A]/40">{i + 1}</td>
                      <td className="px-5 py-3 font-medium text-[#0A0E1A]">{r.business_name}</td>
                      <td className="px-5 py-3 text-[#0A0E1A]/70">{r.city || '—'}</td>
                      <td className="px-5 py-3 text-[#0A0E1A]/70">{r.industry || '—'}</td>
                      <td className="px-5 py-3 text-right">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${badge(r.score)}`}>
                          {r.score}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#00A9CC]/30 bg-[#00A9CC]/[0.06]">
                    <td className="px-5 py-3 font-bold text-[#007f9b]">—</td>
                    <td className="px-5 py-3 font-bold text-[#0A0E1A]">AscendantOps</td>
                    <td className="px-5 py-3 text-[#0A0E1A]/70">Toronto</td>
                    <td className="px-5 py-3 text-[#0A0E1A]/70">AI visibility</td>
                    <td className="px-5 py-3 text-right">
                      <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-[#00A9CC]/15 text-[#007f9b]">
                        {OUR_SCORE}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#0A0E1A]/45 mt-4">
              Scores are a dated snapshot. AI answers and websites change, so a single score is
              never a permanent result. Newest sweep per business shown.
            </p>
          </section>

          {findings.length > 0 && (
            <section className="w-full px-6 md:px-12 max-w-5xl mx-auto pb-20 space-y-6">
              <div className="label">What we keep finding</div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0A0E1A]">
                The same gap, over and over
              </h2>
              <div className="space-y-4">
                {findings.slice(0, 5).map(([text, n]) => (
                  <div key={text} className="callout p-5">
                    <p className="text-sm text-[#0A0E1A]/80 leading-relaxed">
                      <span className="font-bold text-[#007f9b]">{n} {n === 1 ? 'business' : 'businesses'}:</span>{" "}
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <section className="w-full px-6 md:px-12 max-w-5xl mx-auto pb-24">
        <div className="card-featured p-8 md:p-12 text-center space-y-5">
          <h2 className="text-3xl font-bold tracking-tight text-[#0A0E1A]">
            See where your business stands
          </h2>
          <p className="text-[#0A0E1A]/70 max-w-xl mx-auto leading-relaxed">
            We will run the same check on your site and send you the score, the three biggest
            issues, and how you compare with the businesses above.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-primary inline-block px-8 py-4 text-sm font-bold">
              Get my free check
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
