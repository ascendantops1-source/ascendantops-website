'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from "next/link";

type Row = {
  business_name: string;
  city: string | null;
  industry: string | null;
  score: number | null;
  swept_at: string | null;
};

// Our own homepage score, Rubric v1.0. PRIOR = the same page before the redesign.
const OUR_SCORE = 91;
const PRIOR_SCORE = 68;
const RUBRIC = "v1.0";

function badge(score: number | null) {
  if (score === null || score === undefined) return 'bg-black/[0.05] text-[#101d2c]/60';
  if (score >= 80) return 'bg-[#0089a6]/12 text-[#006b83]';
  if (score >= 65) return 'bg-[#F4B942]/20 text-[#8a6100]';
  return 'bg-[#E4572E]/15 text-[#a3311a]';
}

function relative(iso: string | null) {
  if (!iso) return '';
  const then = new Date(iso).getTime();
  if (isNaN(then)) return '';
  const mins = Math.round((Date.now() - then) / 60000);
  if (mins < 60) return `${mins} minutes ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 48) return `${hrs} hours ago`;
  return `${Math.round(hrs / 24)} days ago`;
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
      const key = (r.business_name || '').toLowerCase().trim() + '|' + (r.city || '');
      const prev = latest.get(key);
      if (!prev || String(r.swept_at) > String(prev.swept_at)) latest.set(key, r);
    }
    return Array.from(latest.values())
      .filter((r) => typeof r.score === 'number')
      .sort((a, b) => (b.score as number) - (a.score as number));
  }, [rows]);

  const latestSweep = useMemo(
    () => (rows && rows.length ? rows.map((r) => r.swept_at || '').sort().slice(-1)[0] : null),
    [rows]
  );

  const ourRank = ranked.filter((r) => (r.score as number) > OUR_SCORE).length + 1;
  const average = ranked.length
    ? Math.round(ranked.reduce((s, r) => s + (r.score as number), 0) / ranked.length)
    : 0;
  const delta = OUR_SCORE - PRIOR_SCORE;

  return (
    <div className="w-full">
      {/* ---------- header ---------- */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-14 md:px-12">
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#0089a6]">
          Live benchmark
        </div>
        <h1 className="font-editorial text-4xl leading-tight text-[#101d2c] sm:text-5xl">
          Where local businesses stand with AI
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#101d2c]/70">
          Every business below was measured with the same public method we apply to our own
          site. The list rebuilds automatically as new sweeps complete.
        </p>
        <p className="mt-4 text-sm text-[#8492a0]">
          Method: AscendantOps GEO Visibility Score, Rubric {RUBRIC}.{" "}
          <Link href="/about" className="underline hover:text-[#0089a6]">How the score works</Link>
        </p>
      </section>

      {error && (
        <section className="mx-auto max-w-5xl px-6 pb-20 md:px-12">
          <div className="rounded-2xl border border-[#E4572E]/30 bg-[#E4572E]/5 p-6">
            <p className="text-sm text-[#a3311a]">{error}</p>
          </div>
        </section>
      )}

      {!error && !rows && (
        <section className="mx-auto max-w-5xl px-6 pb-20 md:px-12">
          <div className="rounded-2xl border border-[#101d2c]/10 bg-white p-8 text-center">
            <p className="text-sm text-[#8492a0]">Loading the latest sweep…</p>
          </div>
        </section>
      )}

      {ranked.length > 0 && (
        <>
          {/* ---------- our own number, with the change ---------- */}
          <section className="mx-auto max-w-5xl px-6 pb-14 md:px-12">
            <div className="rounded-[2rem] bg-[#e9f8fb] px-8 py-10 text-[#101d2c] sm:px-12">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#0089a6]">
                Our own site, same ruler
              </div>
              <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
                <span className="font-editorial text-6xl leading-none sm:text-7xl">{OUR_SCORE}</span>
                <span className="pb-2 text-lg text-[#101d2c]/45 line-through decoration-2">
                  {PRIOR_SCORE}
                </span>
                <span className="mb-2 rounded-full bg-[#0089a6] px-3 py-1 text-sm font-bold text-white">
                  +{delta} points
                </span>
              </div>
              <p className="mt-5 max-w-2xl leading-relaxed text-[#101d2c]/75">
                This is our own website, before and after. We publish the number because the same
                measurement applies to you, and you should see how it moves.
              </p>
              <p className="mt-3 text-sm text-[#101d2c]/55">
                We currently sit at{" "}
                <span className="font-bold text-[#006b83]">#{ourRank}</span> of the{" "}
                {ranked.length} businesses measured so far. Average across the group: {average}.
              </p>
            </div>
          </section>

          {/* ---------- the table ---------- */}
          <section className="mx-auto max-w-5xl px-6 pb-16 md:px-12">
            <div className="overflow-hidden rounded-[1.5rem] border border-[#101d2c]/10 bg-white shadow-[0_20px_55px_-38px_rgba(38,55,47,0.42)]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#101d2c]/[0.03] text-[#101d2c]/60">
                  <tr>
                    <th className="px-5 py-3 font-semibold">#</th>
                    <th className="px-5 py-3 font-semibold">Business</th>
                    <th className="px-5 py-3 font-semibold">City</th>
                    <th className="px-5 py-3 font-semibold">Industry</th>
                    <th className="px-5 py-3 text-right font-semibold">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {ranked.map((r, i) => (
                    <tr key={(r.business_name || '') + i} className="border-t border-[#101d2c]/[0.06]">
                      <td className="px-5 py-3 text-[#101d2c]/40">{i + 1}</td>
                      <td className="px-5 py-3 font-medium text-[#101d2c]">{r.business_name}</td>
                      <td className="px-5 py-3 text-[#101d2c]/70">{r.city || '—'}</td>
                      <td className="px-5 py-3 text-[#101d2c]/70">{r.industry || '—'}</td>
                      <td className="px-5 py-3 text-right">
                        <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ${badge(r.score)}`}>
                          {r.score}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#0089a6]/30 bg-[#0089a6]/[0.06]">
                    <td className="px-5 py-3 font-bold text-[#006b83]">—</td>
                    <td className="px-5 py-3 font-bold text-[#101d2c]">AscendantOps</td>
                    <td className="px-5 py-3 text-[#101d2c]/70">Toronto</td>
                    <td className="px-5 py-3 text-[#101d2c]/70">AI visibility</td>
                    <td className="px-5 py-3 text-right">
                      <span className="inline-block rounded-full bg-[#0089a6]/15 px-2.5 py-1 text-xs font-bold text-[#006b83]">
                        {OUR_SCORE}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ---------- cadence ---------- */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#8492a0]">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0089a6]" />
                Sweeps run <span className="font-semibold text-[#101d2c]/70">daily</span>
              </span>
              <span>
                Latest sweep {latestSweep
                  ? <span className="font-semibold text-[#101d2c]/70">{relative(latestSweep)}</span>
                  : 'pending'}
              </span>
              <span>
                This page checks for new results{" "}
                <span className="font-semibold text-[#101d2c]/70">on every visit</span>
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[#8492a0]">
              A score is a dated snapshot. Websites and AI answers change, so the table shows the
              most recent sweep for each business rather than a single permanent result.
            </p>
          </section>
        </>
      )}

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-5xl px-6 pb-24 md:px-12">
        <div className="rounded-[2rem] bg-[#101d2c] px-8 py-12 text-center text-white md:px-12">
          <h2 className="font-editorial text-3xl leading-tight sm:text-4xl">Where does your business sit?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/70">
            We will measure your site the same way and send you the score, the biggest issues,
            and how you compare with the businesses above.
          </p>
          <div className="pt-7">
            <Link
              href="/contact?service=Free%20Preliminary%20Check"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#101d2c] transition-colors hover:bg-[#c7eaf0]"
            >
              Ask for your free check <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
