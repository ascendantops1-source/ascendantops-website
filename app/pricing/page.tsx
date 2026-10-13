import Link from "next/link";

type Product = {
  name: string;
  price: string;
  cadence?: string;
  features: string[];
  href: string;
  button: string;
  badge?: string;
  compact?: boolean;
};

function ProductCard({ product }: { product: Product }) {
  const conversationHref = `/contact?topic=conversation&service=${encodeURIComponent(product.name)}`;
  return (
    <article className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-[0_14px_36px_-30px_rgba(16,29,44,.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_42px_-30px_rgba(16,29,44,.34)] ${product.badge ? "border-[#00a9cc]/55 ring-1 ring-[#00a9cc]/15" : "border-[#d7e0e6]"}`}>
      {product.badge && <span className="absolute -top-3 right-5 rounded-full bg-[#00a9cc] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#062633]">{product.badge}</span>}
      <div className="flex-1">
        <h3 className={`${product.compact ? "text-lg" : "text-xl"} font-bold leading-snug text-[#101d2c]`}>{product.name}</h3>
        <p className={`${product.compact ? "text-xl" : "text-2xl"} mb-5 mt-2 font-bold tabular-nums text-[#0089a6]`}>
          {product.price} <span className="text-xs font-normal text-[#758493]">{product.cadence ?? "one-time"}</span>
        </p>
        <ul className={`mb-7 space-y-3 text-sm leading-relaxed text-[#4a5b6d] ${product.compact ? "text-[13px]" : ""}`}>
          {product.features.map((feature) => <li key={feature} className="flex items-start gap-2"><span className="font-bold text-[#0089a6]" aria-hidden="true">✓</span><span>{feature}</span></li>)}
        </ul>
      </div>
      <div>
        <a href={product.href} target={product.href.startsWith("https://") ? "_blank" : undefined} rel={product.href.startsWith("https://") ? "noopener noreferrer" : undefined} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#00a9cc] px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#062633] transition-colors hover:bg-[#65d4e8]">
          {product.button}
        </a>
        <p className="mt-3 text-center text-xs text-[#758493]">Prefer to talk first? <Link href={conversationHref} className="font-semibold text-[#007f9b] underline decoration-[#00a9cc]/40 underline-offset-2 hover:text-[#101d2c]">Book a conversation</Link></p>
      </div>
    </article>
  );
}

const visibilityProducts: Product[] = [
  { name: "Basic Audit", price: "$150", button: "Order Basic Audit", href: "https://buy.stripe.com/dRmeVdezJbKgaKy6ltdUY00", features: ["Full written report on your AI search visibility", "Scored across the five platforms your customers use most to find businesses", "Three specific things hurting your visibility — clearly explained", "How you rank against competitors in your area and industry", "In your inbox within 48 hours"] },
  { name: "Technical Implementation", price: "$500", button: "Order Technical Implementation", href: "https://buy.stripe.com/00w00jfDN5lScSG9xFdUY01", badge: "Done for you", features: ["Everything in the Basic Audit", "We fix the issues found — no action required from you or your team", "Your website is updated so AI platforms can properly read, understand, and recommend your business", "A report showing which local competitors are appearing in AI results and why", "Before-and-after score showing your improvement"] },
  { name: "Sovereign Transformation", price: "$1,500", button: "Order Sovereign Transformation", href: "https://buy.stripe.com/3cIdR9ajtcOk19Yh07dUY02", features: ["Everything in Basic and Technical Implementation", "Your website content rewritten so AI platforms can recommend you by name", "Deep analysis of your top five local competitors' AI visibility", "30 days of active monitoring as AI platforms update", "A full before-and-after report showing what changed and why"] },
];

const feedbackProducts: Product[] = [
  { name: "Ten Responses", price: "$200", button: "Order Ten Responses", href: "/contact?service=Ten%20Responses", features: ["Ten written responses from people who aren't your customers yet", "Each person answers specific questions about your page, app or advert", "Delivered in 48 hours", "The full text of every response, unedited"] },
  { name: "Fifty Responses", price: "$900", button: "Order Fifty Responses", href: "/contact?service=Fifty%20Responses", badge: "Popular", features: ["Everything in Ten Responses", "Fifty written responses — enough to see a pattern rather than an opinion", "A summary of what came up most often, with the quotes behind it", "Responses from your choice of audience segment", "Delivered within five business days"] },
  { name: "Recorded Feedback", price: "$1,500", button: "Order Recorded Feedback", href: "/contact?service=Recorded%20Feedback", features: ["Everything in Fifty Responses", "Twenty-five recorded think-aloud sessions — watch people use your product", "See where they hesitate, where they leave, and what they say out loud", "Delivered within seven business days"] },
  { name: "Monthly Feedback", price: "$400", cadence: "/ month", button: "Activate Monthly Feedback", href: "/contact?service=Monthly%20Feedback", features: ["Twenty fresh responses every month", "The same questions each time, so you can see change rather than a snapshot", "Catch problems before they cost you a quarter", "Cancel any time"] },
];

const assessmentProducts: Product[] = [
  { name: "Operations Assessment", price: "$500", button: "Order Operations Assessment", href: "https://buy.stripe.com/8x214n3V56pWbOC6ltdUY03", features: ["A full review of customer messages, follow-ups, and repetitive tasks", "Every software subscription you could cut or reduce", "A ranked list of automation opportunities, sorted by time saved and cost", "Written action plan delivered within 48 hours"] },
  { name: "Full Autonomous Audit", price: "$1,000", button: "Order Full Autonomous Audit", href: "https://buy.stripe.com/aFadR9dvFeWs19Y4dldUY04", badge: "Popular", features: ["Everything in the Operations Assessment", "A full automation system mapped for your business", "A step-by-step plan your team can follow, or we can build it for you", "Tools you own outright, with no ongoing fees", "A 30-minute call to walk through every recommendation"] },
];

const discoveryProducts: Product[] = [
  { name: "Government & Tax Discovery", price: "$297", button: "Order Government & Tax Discovery", href: "https://buy.stripe.com/28EaEX3V5eWs2e2fW3dUY09", features: ["Every qualifying government grant identified", "Federal and provincial/state programs", "SR&ED eligibility assessment", "Prioritized list with deadlines and amounts", "48-hour delivery window"] },
  { name: "Technology Benefits Discovery", price: "$197", button: "Order Technology Benefits Discovery", href: "https://buy.stripe.com/bJeaEX4Z9cOk3i6119dUY0c", features: ["Every qualifying cloud credit program matched", "AI API credit programs matched", "Developer tool and software benefits", "Startup program eligibility assessment", "48-hour delivery window"] },
  { name: "Complete Capital Audit", price: "$397", button: "Order Complete Capital Audit", href: "https://buy.stripe.com/4gM5kD4Z93dKf0O6ltdUY0d", badge: "Save $97", features: ["Everything in both Discovery modules", "Unified priority score (value × ease × speed)", "Deep SR&ED framework assessment", "Total eligible benefit calculation", "Save $97 compared to buying separately", "48-hour delivery window"] },
];

const applicationProducts: Product[] = [
  { name: "Guided Application", price: "$497", button: "Order Guided Application", href: "https://buy.stripe.com/14A14n4Z97u08Cq25ddUY0a", compact: true, features: ["We complete the top five applications on your behalf, drafting supporting operational narratives"] },
  { name: "Full Application Stack", price: "$997", button: "Order Full Application Stack", href: "https://buy.stripe.com/6oU14n63ddSo9Gu4dldUY0e", compact: true, features: ["We handle configuration and the full application process across matching credit and grant programs"] },
];

const benefitProducts: Product[] = [
  { name: "Ongoing Benefit Monitoring", price: "$99", cadence: "/ month", button: "Activate Benefit Monitoring", href: "https://buy.stripe.com/6oU6oH9fpg0wg4S9xFdUY0f", compact: true, features: ["Track newly opening grants, renew credits before expiration, and manage eligibility"] },
];

const ongoingProducts: Product[] = [
  { name: "Competitor Monitoring", price: "$299", cadence: "/ month", button: "Order Competitor Monitoring", href: "https://buy.stripe.com/6oUeVd77h01ycSG8tBdUY05", features: ["Monthly tracking of where competitors appear and whether they are gaining ground", "A monthly summary with recommended changes"] },
  { name: "Autopilot Stack", price: "$299", cadence: "/ month", button: "Order Autopilot Stack", href: "https://buy.stripe.com/00wfZhfDNeWs5qe4dldUY06", features: ["Website upkeep", "A chat assistant for your visitors", "A system that collects customer reviews"] },
  { name: "GEO Monitoring", price: "$299", cadence: "/ month", button: "Order GEO Monitoring", href: "https://buy.stripe.com/7sY00j3V53dK7ymdNVdUY07", features: ["Monthly visibility checks across five AI platforms", "Website updates that keep pace with how AI finds businesses"] },
];

export default function Pricing() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-16 px-6 py-14 md:space-y-20 md:px-12 md:py-20">
      <header className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-[#007f9b]">Straightforward services, clear prices</p>
        <h1 className="text-4xl font-bold tracking-tight text-[#101d2c] md:text-5xl">Simple, <span className="text-[#0089a6]">transparent pricing</span></h1>
        <p className="text-lg leading-relaxed text-[#4a5b6d]">Start with what you need. Scale when your business is ready. No complex sales calls.</p>
      </header>

      <section className="grid items-center gap-5 rounded-3xl border border-[#c7eaf0] bg-[#e9f8fb] p-6 shadow-sm md:grid-cols-[1fr_auto] md:p-9" aria-labelledby="chooser-title">
        <div><h2 id="chooser-title" className="text-2xl font-bold text-[#101d2c]">Not sure where to start?</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#4a5b6d]">Take the free visibility check first. We’ll recommend a sensible starting point from what we find. No obligation, no credit card.</p><p className="mt-2 text-sm font-medium text-[#101d2c]">Or try ten responses free on one page of your choice. No obligation, no credit card.</p></div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col"><Link href="/contact?service=Free%20Preliminary%20Check" className="rounded-full bg-[#00a9cc] px-6 py-3 text-center text-sm font-bold text-[#062633] transition hover:bg-[#65d4e8]">Get Free Audit Check</Link><Link href="/contact?service=Free%20Sample%20%E2%80%94%20Ten%20Responses" className="rounded-full border border-[#0089a6]/35 bg-white px-6 py-3 text-center text-sm font-bold text-[#007f9b] transition hover:bg-[#f4fbfc]">Get Free Sample</Link></div>
      </section>

      <nav aria-label="Pricing sections" className="rounded-2xl border border-[#d7e0e6] bg-white p-5 shadow-sm md:p-7">
        <p className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-[#758493]">Browse services</p>
        <ol className="grid gap-3 text-sm font-semibold sm:grid-cols-2 lg:grid-cols-5">
          <li><a className="flex gap-2 text-[#007f9b] hover:text-[#101d2c]" href="#visibility"><span className="text-[#00a9cc]">01</span> Fix my AI visibility</a></li>
          <li><a className="flex gap-2 text-[#007f9b] hover:text-[#101d2c]" href="#feedback"><span className="text-[#00a9cc]">02</span> Get real people’s feedback</a></li>
          <li><a className="flex gap-2 text-[#007f9b] hover:text-[#101d2c]" href="#operations"><span className="text-[#00a9cc]">03</span> Automate my operations</a></li>
          <li><a className="flex gap-2 text-[#007f9b] hover:text-[#101d2c]" href="#capital"><span className="text-[#00a9cc]">04</span> Find grants and credits</a></li>
          <li><a className="flex gap-2 text-[#007f9b] hover:text-[#101d2c]" href="#ongoing"><span className="text-[#00a9cc]">05</span> Ongoing management</a></li>
        </ol>
      </nav>

      <section id="visibility" className="scroll-mt-28 space-y-7">
        <SectionHeading number="1" title="One-Time GEO Audits" intro="Understand how AI search sees your business — and decide what to do next." />
        <div className="grid gap-6 md:grid-cols-3">{visibilityProducts.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      </section>

      <section id="feedback" className="scroll-mt-28 space-y-7 border-t border-[#d7e0e6] pt-14">
        <SectionHeading number="2" title="Real People Feedback" intro="Real people look at your website, your app or your advert and tell you what they actually thought. You receive their words — not a click count. Read the responses and you'll know within ten whether they're real." />
        <p className="text-sm font-semibold tracking-wide text-[#007f9b]">General consumers · Homeschool families · Military families · Students · Russian-speaking</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{feedbackProducts.map((product) => <ProductCard key={product.name} product={product} />)}</div>
        <p className="pt-2 text-center text-sm text-[#4a5b6d]">Not sure what to ask? Tell us what you're trying to find out and we'll write the questions.</p>
      </section>

      <section id="operations" className="scroll-mt-28 space-y-7 border-t border-[#d7e0e6] pt-14">
        <SectionHeading number="3" title="AI Business Assessments" intro="Find practical ways to reduce repetitive work and make better use of the tools you already have." />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">{assessmentProducts.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      </section>

      <section id="capital" className="scroll-mt-28 space-y-10 border-t border-[#d7e0e6] pt-14">
        <SectionHeading number="4" title="Capital & Benefit Audits" intro="Identify potential grants, credits, and benefits, then decide how much application support you want." />
        <ProductGroup title="Discovery" products={discoveryProducts} columns="md:grid-cols-3" />
        <ProductGroup title="Application" products={applicationProducts} columns="md:grid-cols-2" />
        <ProductGroup title="Ongoing" products={benefitProducts} columns="md:grid-cols-3" />
      </section>

      <section id="ongoing" className="scroll-mt-28 space-y-7 border-t border-[#d7e0e6] pt-14">
        <SectionHeading number="5" title="Ongoing AI Visibility Management" intro="Keep your site, local competitors, and AI visibility under regular review." />
        <ProductCard product={{ name: "The Sovereign Bundle", price: "$699", cadence: "/ month", button: "Activate Sovereign Bundle", href: "https://buy.stripe.com/4gMaEXezJ8y419Y6ltdUY08", badge: "Save $198 / month", features: ["Competitor tracking, site maintenance, and monthly visibility checks managed together", "A single ongoing service for the parts that work best in combination"] }} />
        <div className="grid gap-6 md:grid-cols-3">{ongoingProducts.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      </section>
    </div>
  );
}

function SectionHeading({ number, title, intro }: { number: string; title: string; intro: string }) {
  return <header className="mx-auto max-w-3xl space-y-3 text-center"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#0089a6]">Section {number}</p><h2 className="text-3xl font-bold tracking-tight text-[#101d2c] md:text-4xl">{title}</h2><p className="text-base leading-relaxed text-[#4a5b6d]">{intro}</p></header>;
}

function ProductGroup({ title, products, columns }: { title: string; products: Product[]; columns: string }) {
  return <div className="space-y-5"><h3 className="border-l-4 border-[#00a9cc] pl-3 text-xl font-bold text-[#101d2c]">{title}</h3><div className={`grid gap-6 ${columns}`}>{products.map((product) => <ProductCard key={product.name} product={product} />)}</div></div>;
}
