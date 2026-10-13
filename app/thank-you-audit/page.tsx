'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const customerEmail = searchParams.get('email');

  return (
    <div className="bg-white text-[#101d2c]">
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24">
        <div className="rounded-[2rem] border border-[#c7eaf0] bg-[#e9f8fb] p-7 text-center sm:p-12">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-[#0089a6]" aria-hidden="true">✓</span>
          <p className="label mt-6">Order received</p>
          <h1 className="mt-3 font-editorial text-4xl leading-tight sm:text-5xl">We’re preparing your AI visibility review.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#4a5b6d]">Your report is scheduled for delivery within 48 hours. It will explain what we checked, what appeared, and which next steps may be useful.</p>
          {customerEmail && <p className="mt-4 text-sm text-[#647587]">Report email: <span className="font-semibold text-[#101d2c]">{customerEmail}</span></p>}
        </div>

        <section className="mt-16">
          <div className="label mb-4 text-center">While you wait</div>
          <h2 className="font-editorial text-center text-3xl sm:text-4xl">A little context can make the review more useful.</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-[#d7e0e6] p-6"><span className="text-sm font-bold text-[#00a9cc]">01</span><h3 className="mt-3 font-semibold">Think of a customer question</h3><p className="mt-2 text-sm leading-relaxed text-[#647587]">For example, what someone might ask when looking for your service in your area.</p></article>
            <article className="rounded-2xl border border-[#d7e0e6] p-6"><span className="text-sm font-bold text-[#00a9cc]">02</span><h3 className="mt-3 font-semibold">Note your service area</h3><p className="mt-2 text-sm leading-relaxed text-[#647587]">The locations you serve help put a search result in context.</p></article>
            <article className="rounded-2xl border border-[#d7e0e6] p-6"><span className="text-sm font-bold text-[#00a9cc]">03</span><h3 className="mt-3 font-semibold">Keep a question for us</h3><p className="mt-2 text-sm leading-relaxed text-[#647587]">If anything is unclear, call and we can talk it through.</p></article>
          </div>
        </section>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#d7e0e6] p-7 sm:flex-row sm:p-9">
          <div><h2 className="font-editorial text-2xl">Need to add context?</h2><p className="mt-2 text-sm leading-relaxed text-[#647587]">Call +1 437 475 3637. Please don’t leave sensitive information in a voicemail.</p></div>
          <a href="tel:+14374753637" className="btn-primary shrink-0 px-6 py-3">Call AscendantOps</a>
        </div>

        <p className="mt-9 text-center text-sm text-[#647587]">Curious about funding and technology benefits too? <Link href="/capital-audit" className="font-semibold text-[#007f9b] underline underline-offset-4">Explore the capital audit</Link>.</p>
      </section>
    </div>
  );
}

export default function ThankYouAudit() {
  return <Suspense fallback={<div className="mx-auto max-w-5xl px-6 py-24 text-center text-[#647587]">Loading your order details…</div>}><ThankYouContent /></Suspense>;
}
