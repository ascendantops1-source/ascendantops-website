const observations = [
  {
    platform: "AI search · example A",
    prompt: "Who provides [service] in [service area]?",
    finding: "The business is not named in this example response.",
    note: "Illustrative wording; actual answers vary by prompt and date.",
    tone: "border-[#e7c68c] bg-[#fffaf0] text-[#77551d]",
  },
  {
    platform: "AI search · example B",
    prompt: "What should I look for when choosing a [provider]?",
    finding: "A third-party directory appears as a source.",
    note: "The report records the cited page so it can be checked directly.",
    tone: "border-[#b7dfe7] bg-[#f1fbfd] text-[#007f9b]",
  },
];

export default function ReportPreview() {
  return (
    <figure className="overflow-hidden rounded-[1.5rem] border border-[#d7e0e6] bg-[#f3f7f9] shadow-[0_28px_75px_-42px_rgba(16,29,44,.4)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d7e0e6] bg-white px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f8fb] text-lg font-bold text-[#0089a6]" aria-hidden="true">A</div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[.16em] text-[#607486]">AscendantOps · GEO review</div>
            <div className="mt-1 text-sm font-semibold text-[#142536]">A sample of the report format</div>
          </div>
        </div>
        <span className="rounded-full border border-[#b7dfe7] bg-[#f1fbfd] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#007f9b]">Illustrative sample</span>
      </div>

      <div className="grid gap-4 p-4 sm:p-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(230px,.75fr)]">
        <article className="overflow-hidden rounded-2xl border border-[#dce5e9] bg-white shadow-sm">
          <header className="border-b border-[#e6edf0] px-5 py-5 sm:px-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#0089a6]">01 / Executive readout</p>
                <h3 className="mt-2 font-editorial text-2xl leading-tight text-[#142536] sm:text-3xl">What customers may see</h3>
              </div>
              <span className="rounded-md bg-[#f3f7f9] px-2.5 py-1.5 text-[10px] font-semibold text-[#607486]">Business details omitted</span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4a5b6d]">
              This page shows how findings are explained: the question asked, the answer observed, and the source or gap behind it. Replace the bracketed details with your business and service area.
            </p>
          </header>

          <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
            <div className="rounded-xl border border-[#dce5e9] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#718293]">Question checked</p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[#142536]">“Who can help with [service] in [area]?”</p>
              <p className="mt-2 text-xs leading-relaxed text-[#718293]">Prompt, platform, and check date are recorded for context.</p>
            </div>
            <div className="rounded-xl border border-[#dce5e9] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#718293]">Observed response</p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[#142536]">“The example response does not name a provider.”</p>
              <p className="mt-2 text-xs leading-relaxed text-[#718293]">A finding is tied to the exact response reviewed.</p>
            </div>
          </div>

          <div className="mx-4 mb-4 rounded-xl border border-[#b7dfe7] bg-[#f1fbfd] p-4 sm:mx-5 sm:mb-5 sm:p-5">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.13em] text-[#007f9b]">
              <span className="h-2 w-2 rounded-full bg-[#00a9c7]" aria-hidden="true" /> Practical interpretation
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[#294354]">If the business is missing from a relevant answer, the report checks whether its service, location, and supporting information are clear and consistent on the pages people and answer engines can find.</p>
          </div>
        </article>

        <aside className="flex flex-col gap-4">
          <section className="rounded-2xl border border-[#dce5e9] bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#0089a6]">02 / Evidence log</p>
                <h3 className="mt-2 text-base font-bold text-[#142536]">What was checked</h3>
              </div>
              <span className="text-xs font-medium text-[#718293]">Example rows</span>
            </div>
            <div className="mt-4 space-y-3">
              {observations.map((item) => (
                <div key={item.platform} className={`rounded-xl border p-3.5 ${item.tone}`}>
                  <div className="text-[10px] font-bold uppercase tracking-[.1em]">{item.platform}</div>
                  <p className="mt-2 text-xs font-semibold leading-relaxed text-[#243849]">{item.prompt}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#435365]">{item.finding}</p>
                  <p className="mt-2 border-t border-current/10 pt-2 text-[10px] leading-relaxed opacity-80">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[#dce5e9] bg-white p-5 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#0089a6]">03 / Source trace</p>
            <h3 className="mt-2 text-base font-bold text-[#142536]">Follow the evidence</h3>
            <div className="mt-4 flex items-start gap-3">
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#e8f8fb] text-xs font-bold text-[#0089a6]">↗</span>
              <div>
                <p className="text-xs font-semibold text-[#243849]">Source page: [page title]</p>
                <p className="mt-1 break-all text-[10px] leading-relaxed text-[#718293]">[your-website.example / relevant-page]</p>
                <p className="mt-2 text-[10px] leading-relaxed text-[#718293]">The finished report includes the source or page checked when available.</p>
              </div>
            </div>
          </section>
        </aside>

        <section className="rounded-2xl border border-[#dce5e9] bg-white p-5 shadow-sm xl:col-span-2 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#0089a6]">04 / Suggested next steps</p>
              <h3 className="mt-2 font-editorial text-2xl text-[#142536]">A clear path from finding to action</h3>
            </div>
            <p className="text-xs text-[#718293]">Priorities depend on your actual findings.</p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ["01", "Clarify", "State your core service and service area plainly on the most relevant page."],
              ["02", "Substantiate", "Make useful proof easy to find: expertise, process, examples, and current details."],
              ["03", "Recheck", "Repeat the same questions later and compare the recorded responses."],
            ].map(([number, title, copy]) => (
              <div key={number} className="flex gap-3 rounded-xl bg-[#f5f9fa] p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[10px] font-bold text-[#0089a6] ring-1 ring-[#d7e0e6]">{number}</span>
                <div><p className="text-sm font-bold text-[#142536]">{title}</p><p className="mt-1.5 text-xs leading-relaxed text-[#607486]">{copy}</p></div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-[#d7e0e6] bg-white px-5 py-3.5 text-[11px] leading-relaxed text-[#718293] sm:px-7">
        <span>Illustrative example only · no real business, client data, scores, or performance claims.</span>
        <span>Report contents vary with the service selected.</span>
      </figcaption>
    </figure>
  );
}
