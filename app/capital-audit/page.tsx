import Link from "next/link";

const steps = [
  { number: "01", title: "Tell us the basics", copy: "A short conversation helps establish your location, business stage, and the kinds of programs worth checking." },
  { number: "02", title: "Review possible matches", copy: "We identify relevant grants, tax credits, and technology benefits, then explain the eligibility details that need to be confirmed." },
  { number: "03", title: "Choose your level of help", copy: "You can take a discovery report and continue independently, or ask about support preparing applications." },
];

export default function CapitalAudit() {
  return (
    <div className="bg-white text-[#101d2c]">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="label mb-6">Capital and technology benefits</div>
          <h1 className="font-editorial text-5xl leading-tight sm:text-6xl lg:text-7xl">Find programs worth a closer look.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4a5b6d]">We help businesses identify potentially relevant grants, tax credits, and technology benefits, then understand what it takes to pursue them.</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#647587]">Eligibility depends on current program rules and your circumstances. A discovery review identifies potential matches; it cannot guarantee approval or funding.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+14374753637" className="btn-primary px-6 py-3">Talk through your situation</a>
            <Link href="/pricing#capital" className="btn-secondary px-6 py-3">See capital audit pricing</Link>
          </div>
        </div>
        <aside className="rounded-[2rem] border border-[#c7eaf0] bg-[#e9f8fb] p-7 md:p-9 lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-[#0089a6]">Start with a conversation</p>
          <h2 className="mt-4 font-editorial text-3xl leading-snug">No long financial questionnaire to begin.</h2>
          <p className="mt-4 leading-relaxed text-[#4a5b6d]">Call with a general question or mention a program you have in mind. Please don’t leave confidential financial details in a voicemail.</p>
          <a href="tel:+14374753637" className="mt-6 inline-block text-xl font-semibold text-[#007f9b] underline decoration-[#00a9cc]/50 underline-offset-4">+1 437 475 3637</a>
        </aside>
      </section>

      <section className="border-y border-[#d7e0e6] bg-[#f4f8fa] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><div className="label mb-5">What the process looks like</div><h2 className="font-editorial text-4xl leading-tight sm:text-5xl">A grounded path from discovery to application.</h2></div>
          <div className="mt-11 grid md:grid-cols-3">
            {steps.map((step, index) => <article key={step.number} className={`border-t border-[#d7e0e6] py-7 md:pr-8 ${index ? "md:border-l md:pl-8" : ""}`}>
              <p className="font-editorial text-4xl text-[#00a9cc]">{step.number}</p><h3 className="mt-5 text-xl font-semibold">{step.title}</h3><p className="mt-3 leading-relaxed text-[#4a5b6d]">{step.copy}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7e0e6] bg-[#f4f8fa] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="label mb-5">What we look into</div>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">A practical review of funding and technology benefits.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4a5b6d]">The first step is to understand what your business does, where it operates, and what it is trying to accomplish. Those details help narrow a broad program landscape to opportunities that may merit a closer eligibility check.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-[#d7e0e6] bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[.14em] text-[#0089a6]">Government and tax programs</p>
              <h3 className="mt-3 text-xl font-semibold">Find programs that fit the work you do.</h3>
              <p className="mt-4 leading-relaxed text-[#647587]">A discovery review can consider federal and regional grants, innovation and export programs, and tax credits such as SR&amp;ED where relevant. The useful questions include where the business operates, what work it has completed or plans to do, its stage, and which costs or activities a program may recognize.</p>
              <p className="mt-3 leading-relaxed text-[#647587]">The result is a prioritized set of potential matches with the reasons they may fit, the eligibility details to verify, and deadlines or application steps where those details are available. Inclusion in a discovery report is not a determination that an application will qualify.</p>
            </article>
            <article className="rounded-2xl border border-[#d7e0e6] bg-white p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[.14em] text-[#0089a6]">Technology benefits</p>
              <h3 className="mt-3 text-xl font-semibold">Look beyond grants to useful credits and programs.</h3>
              <p className="mt-4 leading-relaxed text-[#647587]">Businesses may also have access to cloud infrastructure credits, AI and API programs, developer tools, productivity software, or startup and accelerator benefits. The review looks for programs that appear relevant to your circumstances and explains what information or account setup may be required.</p>
              <p className="mt-3 leading-relaxed text-[#647587]">Program terms change. Credit amounts, availability, expiry dates, and eligibility depend on each provider’s current rules, so the report points you to the source and the next step to confirm before you rely on an offer.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="label mb-5">After discovery</div>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">You choose how much help you want.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#4a5b6d] lg:col-span-7 lg:col-start-6">
            <p>A discovery report is designed to help you see the landscape and decide what is worth pursuing. You can take the findings to your accountant, internal team, or program administrator and continue independently.</p>
            <p>If you want help with the next stage, application support can assist with preparing materials for selected programs. The scope depends on the program and the information available from your business; you remain responsible for reviewing and approving submissions and providing accurate supporting records.</p>
            <p>Ongoing monitoring can help you notice new opportunities, changing program windows, or upcoming renewals. It is a way to keep the search current, not a promise that a benefit will remain available or that a claim will be approved.</p>
            <p>Eligibility and award decisions belong to the agencies and providers that administer each program. We identify possibilities and explain the follow-up needed; we do not guarantee funding, tax credits, or a specific dollar recovery.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-[#d7e0e6] p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#0089a6]">Discovery</p><h3 className="mt-3 text-xl font-semibold">Understand the landscape</h3><p className="mt-3 leading-relaxed text-[#647587]">Review potential government and tax programs or technology benefits, based on the details you provide.</p></article>
          <article className="rounded-2xl border border-[#d7e0e6] p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#0089a6]">Application</p><h3 className="mt-3 text-xl font-semibold">Get help with the paperwork</h3><p className="mt-3 leading-relaxed text-[#647587]">Choose guided application support if you want help preparing materials for programs that appear relevant.</p></article>
          <article className="rounded-2xl border border-[#d7e0e6] p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#0089a6]">Ongoing</p><h3 className="mt-3 text-xl font-semibold">Keep an eye on changes</h3><p className="mt-3 leading-relaxed text-[#647587]">Ongoing monitoring can help you notice new opportunities and upcoming renewal dates.</p></article>
        </div>
        <div className="mt-10 rounded-3xl bg-[#e9f8fb] p-7 sm:p-9">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div><h2 className="font-editorial text-3xl">Want to see the options first?</h2><p className="mt-2 text-[#4a5b6d]">Compare the discovery, application, and ongoing services before you call.</p></div>
            <Link href="/pricing#capital" className="btn-primary px-6 py-3 text-center">View pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
