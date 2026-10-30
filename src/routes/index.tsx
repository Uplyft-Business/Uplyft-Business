import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-dark.svg";
import { TallyForm } from "@/components/TallyForm";

export const Route = createFileRoute("/")({
  component: Index,
});

const operators = [
  { t: "Revenue Design", d: "Decades shaping revenue models, territories, quotas and forecasts so your plan is backed by numbers you can trust." },
  { t: "Product & Market", d: "Brings products to market and builds repeatable motions that connect what you make with what buyers want." },
  { t: "People & Organization", d: "Designs hiring plans, pay structures and team capabilities that match the strategy you're actually running." },
  { t: "Go-to-Market Strategy", d: "Scaled B2B sales across multiple regions and aligns positioning, messaging and selling into one clear story." },
];
const fixes = [
  { t: "Strategy", d: "Market focus, ideal customer profile and growth priorities." },
  { t: "Revenue", d: "Commercial architecture, forecasting, pricing and deal structure." },
  { t: "Talent", d: "Organization design, compensation and capability gaps." },
  { t: "Execution", d: "Enablement, storytelling and operating rhythms." },
];
const stories = [
  { t: "The “RevOps” Trojan Horse", d: "A Series B client hired us to fix forecasting. Our Revenue Lead found broken territory design, our GTM Lead found the wrong pitch, and our Talent Lead found a comp plan rewarding the wrong behavior.", f: "A full engine redesign." },
  { t: "The Market Entry", d: "An enterprise vendor needed a GTM strategy for a new region. Our Talent Lead designed the hiring profile while our Revenue Lead modeled the P&L.", f: "Launched in 90 days with a fully aligned team." },
  { t: "The Scaling Sprint", d: "A PE-backed tech company needed to grow from $15M to $50M ARR. We started with ICP and positioning, then expanded to the full team as gaps surfaced in hiring, enablement and forecasting.", f: "A revenue engine that survived the scale." },
];
const reasons = [
  ["We see the whole system.", "Most consultants only see their slice — HR, Sales or Strategy. We connect them all."],
  ["We’ve done the time.", "25 years each. We’ve sat in the chairs you’re hiring for."],
  ["We tell you the truth.", "We diagnose what you need, not what earns us the most."],
  ["We are operators.", "We don’t just design the plan — we help you drive it."],
];

function Btn({ children }: { children: React.ReactNode }) {
  return <a href="#contact" className="inline-block rounded-full bg-gradient-to-r from-brand-deep to-highlight px-5 py-2.5 text-sm sm:px-7 sm:py-3 sm:text-base font-semibold text-highlight-foreground transition hover:opacity-90">{children}</a>;
}

function Index() {
  return (
    <div className="font-sans">
      <header className="bg-primary text-primary-foreground">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6">
          <img src={logo} alt="Uplyft Business" className="h-9 w-auto shrink-0 sm:h-12" />
          <Btn>Book now</Btn>
        </nav>
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          <h1 className="max-w-3xl font-display text-3xl font-bold md:text-4xl leading-tight sm:text-5xl md:text-7xl">We fix growth problems at the root</h1>
          <p className="mt-6 max-w-2xl text-lg opacity-80">Four senior operators. 100 years of combined experience. One integrated system for Strategy, Revenue, Talent and Execution.</p>
          <div className="mt-10"><Btn>Book the Diagnostic Council</Btn></div>
        </section>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24 text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">You don’t need more theory. You need operators.</h2>
        <p className="mt-6 text-lg text-muted-foreground">We’re a collective of four senior executives who have built and fixed go-to-market engines across APJ, EMEA and North America. No junior consultants learning on your dime — you work with us directly, together or one-on-one, depending on the scale of the problem.</p>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold tracking-widest text-highlight">HOW WE WORK</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <span className="font-display text-5xl text-highlight">1</span>
              <h3 className="mt-4 font-display text-2xl font-bold">The Diagnostic Council</h3>
              <p className="mt-1 text-sm text-muted-foreground">60–90 minutes</p>
              <p className="mt-4 text-muted-foreground">All four of us meet with you. We don’t pitch — we diagnose. We find what’s actually broken, who needs to be involved, and which lever to pull first.</p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <span className="font-display text-5xl text-highlight">2</span>
              <h3 className="mt-4 font-display text-2xl font-bold">The right-sized engagement</h3>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <div><p className="font-semibold text-foreground">Targeted Sprint · Specialist Lead</p><p>One lead drives the work; the other three review strategy at key milestones to catch blind spots.</p><p className="mt-1 text-sm">Best for specific, contained problems · $50K–$120K · 30–90 days</p></div>
                <div><p className="font-semibold text-foreground">Full Council</p><p>Multiple specialists deploy a full engine redesign.</p><p className="mt-1 text-sm">Best for stalled growth or post-merger integration · $150K–$350K · 90–180 days</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="font-display text-3xl font-bold md:text-4xl">The operators</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {operators.map((o) => (
            <div key={o.t} className="rounded-2xl border bg-card p-6">
              <div className="mb-4 h-1 w-10 rounded bg-highlight" />
              <h4 className="font-display text-xl font-bold">{o.t}</h4>
              <p className="mt-3 text-sm text-muted-foreground">{o.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold tracking-widest text-highlight">WHAT WE FIX</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">We connect the dots others miss.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {fixes.map((f) => (
              <div key={f.t} className="border-t border-highlight pt-6">
                <h5 className="font-display text-2xl font-bold">{f.t}</h5>
                <p className="mt-2 opacity-80">{f.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 opacity-80">Powered by the Uplyft SPARQ Framework™ — our proprietary system for aligning strategy with daily behavior.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-sm font-bold tracking-widest text-highlight">REAL CLIENT JOURNEYS</p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">How the problems (and fixes) connect.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <div key={s.t} className="flex flex-col rounded-2xl bg-secondary p-8">
              <h4 className="font-display text-xl font-bold">{s.t}</h4>
              <p className="mt-3 flex-1 text-muted-foreground">{s.d}</p>
              <p className="mt-6 font-semibold">The fix: {s.f}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Why Uplyft?</h2>
          <ul className="mt-8 space-y-4">
            {reasons.map((r) => (
              <li key={r[0]} className="flex gap-4 text-lg"><span className="text-highlight">●</span><span><strong className="text-foreground">{r[0]}</strong> <span className="text-muted-foreground">{r[1]}</span></span></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-primary py-16 md:py-24 text-center text-primary-foreground">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Stop guessing. Ask the operators.</h2>
          <p className="mt-4 opacity-80">Book a 90-minute Diagnostic Session with the Council. We’ll tell you what we see, what you need, and exactly what it will cost.</p>
        </div>
        {/* Wider than the copy above: Tally collapses its two-column rows when the form is narrow. */}
        <div className="mx-auto mt-10 max-w-4xl px-6 text-left">
          <TallyForm formId="yXXWpW" title="Book a Diagnostic Session" />
        </div>
      </section>
      <footer className="py-8 text-center text-sm text-muted-foreground">© 2026 Uplyft Business</footer>
    </div>
  );
}
