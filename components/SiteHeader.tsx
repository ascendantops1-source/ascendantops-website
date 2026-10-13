'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  ['About', '/about'],
  ['Benchmarks', '/benchmarks'],
  ['AI visibility', '/services/geo'],
  ['Business advice', '/services/assessment'],
  ['Ongoing support', '/services/recurring'],
  ['Capital audit', '/capital-audit'],
  ['Pricing', '/pricing'],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d7e0e6] bg-white/95 px-5 py-3 backdrop-blur-md md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="AscendantOps home" onClick={() => setOpen(false)}>
          <img src="/ascendant-symbol.png" alt="" className="h-11 w-[52px] object-contain" />
          <img src="/ascendant-wordmark.png" alt="Ascendant Ops" className="h-7 w-[118px] object-contain" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-medium text-[#4a5b6d] xl:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="whitespace-nowrap transition-colors hover:text-[#007f9b]">{label}</Link>)}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link href="/contact" className="btn-primary px-5 py-2.5 text-sm">Talk with us</Link>
        </div>

        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e0e6] text-[#101d2c] xl:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <span className="text-xl leading-none" aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && <nav id="mobile-navigation" aria-label="Main navigation" className="mx-auto mt-3 grid max-w-7xl gap-1 border-t border-[#d7e0e6] pt-3 text-[#4a5b6d] xl:hidden">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 font-medium hover:bg-[#e9f8fb] hover:text-[#007f9b]">{label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 px-5 py-3 text-center">Talk with us</Link>
      </nav>}
    </header>
  );
}
