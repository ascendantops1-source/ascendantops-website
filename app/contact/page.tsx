'use client';

import { FormEvent, useEffect, useState } from 'react';

type Intake = {
  business_name: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  city: string;
  message: string;
};

const emptyIntake: Intake = { business_name: '', email: '', phone: '', website: '', industry: '', city: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<Intake>(emptyIntake);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('service');
    if (requested) setForm((current) => ({ ...current, message: `I’m interested in: ${requested}` }));
  }, []);

  function update<K extends keyof Intake>(field: K, value: Intake[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') setStatus('idle');
    setFormError('');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
      if (!endpoint) {
        setFormError('This contact form is not connected yet. Your details are still here. Please call us for now at');
        setStatus('error');
        return;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Unable to save inquiry');
      setStatus('success');
      setForm(emptyIntake);
    } catch {
      setFormError('We couldn’t send your note just now. Your details are still here—please try again or call');
      setStatus('error');
    }
  }

  return (
    <div className="bg-white text-[#101d2c]">
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-14 md:px-12 md:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-7 lg:sticky lg:top-28 lg:col-span-5">
          <div className="label">A straightforward first step</div>
          <h1 className="font-editorial text-5xl leading-tight sm:text-6xl">Tell us what you’re looking for.</h1>
          <p className="text-lg leading-relaxed text-[#4a5b6d]">A few details are enough to help us point you to the right service. No lengthy questionnaire or commitment.</p>
          <div className="rounded-3xl border border-[#c7eaf0] bg-[#e9f8fb] p-6">
            <p className="text-xs font-bold uppercase tracking-[.14em] text-[#007f9b]">Prefer to speak first?</p>
            <a href="tel:+14374753637" className="mt-2 inline-block text-xl font-semibold text-[#101d2c] underline decoration-[#00a9cc]/60 underline-offset-4">+1 437 475 3637</a>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-[#d7e0e6] bg-[#f3f8fa] shadow-[0_18px_45px_-35px_rgba(16,29,44,.4)]">
            <img
              src="/aria-contact-office.png"
              alt="Aria, AscendantOps’ AI virtual assistant, in a bright modern office"
              className="aspect-[16/9] w-full object-cover object-center"
            />
            <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
              <span className="font-semibold text-[#101d2c]">Aria</span>
              <span className="rounded-full bg-[#e3f7fa] px-3 py-1 text-xs font-semibold text-[#007f9b]">AI virtual assistant</span>
            </figcaption>
          </figure>
          <p className="text-sm leading-relaxed text-[#647587]">Already know what you need? Most services have a direct checkout on the pricing page. This form is for a question or a little guidance first.</p>
        </div>

        <div className="rounded-[2rem] border border-[#d7e0e6] bg-white p-6 shadow-[0_22px_55px_-40px_rgba(16,29,44,.35)] sm:p-9 lg:col-span-6 lg:col-start-7">
          {status === 'success' ? (
            <div role="status" className="py-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f8fb] text-xl font-bold text-[#0089a6]" aria-hidden="true">✓</span>
              <h2 className="mt-6 font-editorial text-3xl">Thanks. We have your details.</h2>
              <p className="mt-3 leading-relaxed text-[#647587]">We’ll follow up at the email address you provided. If you need to speak sooner, call <a href="tel:+14374753637" className="font-semibold text-[#007f9b] underline underline-offset-4">+1 437 475 3637</a>.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="mb-2"><h2 className="font-editorial text-3xl">A short note is plenty.</h2><p className="mt-2 text-sm text-[#647587]">Fields marked * are required.</p></div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                <label htmlFor="intake-business" className="mb-2 block text-sm font-semibold">Business name *</label>
                  <input id="intake-business" autoComplete="organization" required maxLength={160} value={form.business_name} onChange={(event) => update('business_name', event.target.value)} className="w-full p-3 text-sm" />
                </div>
                <div>
                  <label htmlFor="intake-email" className="mb-2 block text-sm font-semibold">Email address *</label>
                  <input id="intake-email" type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={(event) => update('email', event.target.value)} className="w-full p-3 text-sm" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="intake-phone" className="mb-2 block text-sm font-semibold">Phone <span className="font-normal text-[#758493]">(optional)</span></label>
                  <input id="intake-phone" type="tel" autoComplete="tel" maxLength={40} value={form.phone} onChange={(event) => update('phone', event.target.value)} className="w-full p-3 text-sm" />
                </div>
                <div>
                  <label htmlFor="intake-website" className="mb-2 block text-sm font-semibold">Website <span className="font-normal text-[#758493]">(optional)</span></label>
                  <input id="intake-website" type="url" inputMode="url" placeholder="https://" maxLength={500} value={form.website} onChange={(event) => update('website', event.target.value)} className="w-full p-3 text-sm" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="intake-industry" className="mb-2 block text-sm font-semibold">Industry <span className="font-normal text-[#758493]">(optional)</span></label>
                  <input id="intake-industry" maxLength={120} value={form.industry} onChange={(event) => update('industry', event.target.value)} className="w-full p-3 text-sm" />
                </div>
                <div>
                  <label htmlFor="intake-city" className="mb-2 block text-sm font-semibold">City <span className="font-normal text-[#758493]">(optional)</span></label>
                  <input id="intake-city" autoComplete="address-level2" maxLength={120} value={form.city} onChange={(event) => update('city', event.target.value)} className="w-full p-3 text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="intake-message" className="mb-2 block text-sm font-semibold">What would you like help with? <span className="font-normal text-[#758493]">(optional)</span></label>
                <textarea id="intake-message" rows={3} maxLength={2000} value={form.message} onChange={(event) => update('message', event.target.value)} placeholder="One or two sentences is enough." className="w-full resize-y p-3 text-sm" />
              </div>

              {status === 'error' && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{formError} <a href="tel:+14374753637" className="font-semibold underline">+1 437 475 3637</a>.</p>}
              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full px-6 py-4 disabled:cursor-wait disabled:opacity-60">{status === 'loading' ? 'Sending…' : 'Send my note'}</button>
              <p className="text-center text-xs leading-relaxed text-[#758493]">We’ll use these details to respond to your inquiry.</p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
