import Link from "next/link";
import RoiCalculator from "../components/RoiCalculator";
import ReportPreview from "../components/ReportPreview";

const steps = [
  {
    number: "01",
    title: "We take a look",
    copy: "We ask the same kinds of questions a customer might ask, across five AI search platforms.",
  },
  {
    number: "02",
    title: "We make sense of it",
    copy: "You get a clear report that shows where your business appears, where it doesn’t, and what may be affecting that.",
  },
  {
    number: "03",
    title: "You decide what comes next",
    copy: "We lay out practical next steps. You can make the changes yourself or ask us to help.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] text-[#101d2c]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-14 md:px-12 md:pb-28 md:pt-24 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-7 lg:col-span-6">
          <div className="label">Independent AI visibility advice · Toronto and beyond</div>
          <h1 className="font-editorial max-w-2xl text-5xl leading-[1.04] text-[#101d2c] sm:text-6xl lg:text-7xl">
            Good businesses deserve to be <em className="text-[#0089a6]">found.</em>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[#4a5b6d] sm:text-xl">
            See how your business appears when people ask AI who to call, hire, and trust. Get the evidence in plain language, plus practical options for what to do next.
          </p>
          <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
            <Link href="/contact?service=Free%20Preliminary%20Check" className="btn-primary inline-flex items-center justify-center gap-3 px-7 py-4 text-base">
              Start with a free check <span aria-hidden="true">→</span>
            </Link>
            <span className="text-sm text-[#647587]">No credit card · No promise of a particular ranking</span>
          </div>
        </div>

        <figure className="relative lg:col-span-6">
          <div className="overflow-hidden rounded-[2rem_2rem_2rem_7rem] bg-[#e9f8fb] shadow-[0_24px_60px_-34px_rgba(38,55,47,0.48)]">
            <img
              src="/toronto-skyline.png"
              alt="Toronto skyline at sunset"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <figcaption className="absolute -bottom-5 left-5 max-w-[19rem] rounded-2xl border border-[#101d2c]/10 bg-white px-5 py-4 text-sm leading-relaxed text-[#4a5b6d] shadow-lg sm:left-8">
            <span className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-[#0089a6]">Based in Toronto</span>
            Independent advice for businesses finding their footing in a changing search landscape.
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-[#101d2c]/10 bg-[#e9f8fb]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-7 sm:grid-cols-3 md:px-12">
          <div className="flex items-center gap-4 sm:border-r sm:border-[#101d2c]/15">
            <span className="font-editorial text-3xl text-[#0089a6]">5</span>
            <span className="text-sm leading-snug text-[#4a5b6d]">AI platforms checked<br />in one review</span>
          </div>
          <div className="flex items-center gap-4 sm:border-r sm:border-[#101d2c]/15 sm:pl-6">
            <span className="font-editorial text-3xl text-[#0089a6]">48h</span>
            <span className="text-sm leading-snug text-[#4a5b6d]">A useful report<br />without the long wait</span>
          </div>
          <div className="flex items-center gap-4 sm:pl-6">
            <span className="font-editorial text-3xl text-[#0089a6]">$0</span>
            <span className="text-sm leading-snug text-[#4a5b6d]">To start with a<br />preliminary check</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="label mb-5">A changing way to find local help</div>
          <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">
            The question is familiar. The place people ask is changing.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-[#4a5b6d] lg:col-span-6 lg:col-start-7">
          <p>
            People still ask friends, neighbours, and search engines who they should trust. Now they’re asking tools like ChatGPT and Gemini, too.
          </p>
          <p>
            Those tools build an answer from what they can understand about a business across its website and other sources. We help you see what they’re picking up—and where a clearer picture could help.
          </p>
          <p className="border-l-2 border-[#00a9cc] pl-5 text-base text-[#101d2c]">
            No secret formula or guaranteed rankings. Just a careful look, an honest explanation, and practical next steps.
          </p>
        </div>
      </section>

      <section className="bg-[#e9f8fb] px-6 py-24 text-[#101d2c] md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[#0089a6]">A straightforward process</div>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">You’ll know what we found and what to do next.</h2>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.number} className={`py-7 md:pr-9 ${index > 0 ? "border-t border-white/20 md:border-l md:border-t-0 md:pl-9" : "border-t border-white/20 md:border-t-0"}`}>
                <div className="mb-8 font-editorial text-4xl text-[#0089a6]">{step.number}</div>
                <h3 className="mb-3 text-xl font-semibold text-[#101d2c]">{step.title}</h3>
                <p className="max-w-sm text-base leading-relaxed text-[#101d2c]/75">{step.copy}</p>
              </article>
            ))}
          </div>
          <Link href="/services/geo" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#00a9cc] underline decoration-[#00a9cc]/50 underline-offset-4 hover:decoration-[#00a9cc]">
            See what the review includes <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="label mb-5">A sample of the format</div>
          <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">Useful advice should be easy to understand.</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#4a5b6d]">
            A review connects each observation to a question, a source, and a practical next step. This example shows the kind of detail to expect; it is illustrative, not a client result.
          </p>
          <Link href="/services/geo" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0089a6] hover:text-[#006f88]">
            Take a closer look <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="lg:col-span-7"><ReportPreview /></div>
      </section>

      <section className="bg-white px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="label mb-5">Advice with the jargon removed</div>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">You deserve an answer you can use.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#4a5b6d]">
              Our job is to translate a fast-changing field into useful choices for your business. We’ll explain what matters, what doesn’t, and where to start—whether or not you decide to work with us.
            </p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0089a6] hover:text-[#006f88]">
              Get to know us <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="rounded-3xl border border-[#c7eaf0] bg-[#e9f8fb] p-7 lg:col-span-6 lg:col-start-7 md:p-10">
            <div className="mb-4 font-editorial text-6xl leading-none text-[#00a9cc]">“</div>
            <p className="font-editorial text-3xl leading-snug text-[#101d2c] sm:text-4xl">
              We can’t control what AI says. We can help make your business easier to understand.
            </p>
            <p className="mt-6 text-sm font-semibold text-[#647587]">The principle behind every AscendantOps review</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 md:px-12 md:py-28">
        <div className="mb-9 text-center">
          <div className="label mb-4">A useful place to start</div>
          <h2 className="font-editorial text-4xl sm:text-5xl">What might a missed recommendation mean?</h2>
          <p className="mt-4 text-[#647587]">Use the calculator for a rough estimate based on your own numbers.</p>
        </div>
        <div className="rounded-[1.5rem] border border-[#101d2c]/10 bg-white p-6 shadow-[0_20px_55px_-38px_rgba(38,55,47,0.42)] sm:p-10">
          <RoiCalculator />
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-[#8492a0]">This is an estimate to help you think through the opportunity. Your actual results will depend on your market and business.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 md:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#e9f8fb] px-7 py-12 text-[#101d2c] sm:px-12 md:py-16">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#0089a6]">Start with a conversation</div>
            <h2 className="font-editorial text-4xl leading-tight sm:text-5xl">Let’s make this easier to figure out.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#101d2c]/75">
              Tell us a little about your business. We’ll start with a no-cost check and explain what we find in plain language.
            </p>
            <Link href="/contact?service=Free%20Preliminary%20Check" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#101d2c] transition-colors hover:bg-[#c7eaf0]">
              Ask for your free check <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div aria-hidden="true" className="absolute -bottom-32 -right-12 h-80 w-80 rounded-full border border-white/10 md:h-[26rem] md:w-[26rem]" />
          <div aria-hidden="true" className="absolute -bottom-20 -right-0 h-56 w-56 rounded-full border border-white/10 md:h-72 md:w-72" />
        </div>
      </section>
    </div>
  );
}
