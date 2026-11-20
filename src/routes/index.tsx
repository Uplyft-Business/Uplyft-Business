import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight } from "@/components/site/icons";

export const Route = createFileRoute("/")({
  component: Home,
});

const rotatingWords = ["Strategy.", "Revenue.", "Talent.", "Execution."];
const stats = [
  { n: 4, suffix: "", l: "Senior operators" },
  { n: 100, suffix: "+", l: "Years combined experience" },
  { n: 3, suffix: "", l: "Regions: APJ · EMEA · NA" },
  { n: 90, suffix: "min", l: "To a clear diagnosis" },
];
const marquee = [
  "Strategy",
  "Revenue",
  "Talent",
  "Execution",
  "No junior consultants",
  "Operators, not theorists",
  "SPARQ Framework™",
];
const reasons = [
  [
    "We see the whole system.",
    "Most consultants only see their slice — HR, Sales or Strategy. We connect them all.",
  ],
  ["We’ve done the time.", "25 years each. We’ve sat in the chairs you’re hiring for."],
  ["We tell you the truth.", "We diagnose what you need, not what earns us the most."],
  ["We are operators.", "We don’t just design the plan — we help you drive it."],
];
// DRAFT: written from the client journeys. Edit to match who you actually want to work with.
const fitYes = [
  "You run a B2B company, from Series A through PE-backed, and growth has stalled or become hard to predict.",
  "Your forecast keeps missing and nobody can say exactly why.",
  "You’re entering a new region across APJ, EMEA or North America.",
  "You’re bringing teams together after a merger or acquisition.",
  "You’re scaling fast and the engine that got you here won’t get you to the next stage.",
];
const fitNo = [
  "You want a report to file away rather than help putting it into practice.",
  "You’re pre-revenue and still searching for product–market fit.",
  "You’re looking for the cheapest pair of hands, not senior judgement.",
];
const fixes = [
  { t: "Strategy", d: "Market focus, ideal customer profile and growth priorities." },
  { t: "Revenue", d: "Commercial architecture, forecasting, pricing and deal structure." },
  { t: "Talent", d: "Organization design, compensation and capability gaps." },
  { t: "Execution", d: "Enablement, storytelling and operating rhythms." },
];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % rotatingWords.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="grad-text rotator">
      <span key={i}>{rotatingWords[i]}</span>
    </span>
  );
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [v, setV] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    const t0 = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 1400);
      setV(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [to]);
  return (
    <>
      {v}
      {suffix}
    </>
  );
}

function Home() {
  return (
    <SiteLayout>
      <section className="hero">
        <div className="grid-bg" />
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="wrap">
          <Link to="/move-by-move" className="pill">
            <b>NEW</b> Watch <em>Move by Move</em> on YouTube →
          </Link>
          <h1>
            We fix growth problems at the root of your <RotatingWord />
          </h1>
          <p className="lede">
            Four senior operators. 100 years of combined experience. One integrated system for
            Strategy, Revenue, Talent and Execution.
          </p>
          <div className="ctas">
            <Link to="/book" className="btn btn-primary">
              Book the Diagnostic Council <ArrowRight />
            </Link>
            <Link to="/how-we-work" className="btn btn-ghost">
              See how we work
            </Link>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.l}>
                <div className="n grad-text">
                  <CountUp to={s.n} suffix={s.suffix} />
                </div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      <section>
        <div className="wrap split">
          <div className="rv">
            <span className="eyebrow">Why Uplyft</span>
            <p className="big-quote">
              You don’t need more theory. <span className="grad-text">You need operators.</span>
            </p>
            <p className="muted" style={{ marginTop: 20, fontSize: "1.08rem" }}>
              We’re a collective of four senior executives who have built and fixed go-to-market
              engines across APJ, EMEA and North America. No junior consultants learning on your
              dime — you work with us directly, together or one-on-one, depending on the scale of
              the problem.
            </p>
          </div>
          <ul className="checks rv">
            {reasons.map(([b, t]) => (
              <li key={b}>
                <span>
                  <b>{b}</b> {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fit-section">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Who it’s for</span>
            <h2>Is this you?</h2>
          </div>
          <div className="fit rv">
            <div className="fit-yes">
              <h3>We’re a fit if…</h3>
              <ul>
                {fitYes.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="fit-no">
              <h3>We’re probably not a fit if…</h3>
              <ul>
                {fitNo.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/book" className="btn btn-primary" style={{ marginTop: 28 }}>
                Sounds like you? Book the Council <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">What we fix</span>
            <h2>We connect the dots others miss.</h2>
            <p className="muted">
              Powered by the Uplyft SPARQ Framework™ — our proprietary system for aligning strategy
              with daily behavior.
            </p>
          </div>
          <div className="sparq rv">
            {fixes.map((f, i) => (
              <div key={f.t}>
                <div className="k grad-text">0{i + 1}</div>
                <h3>{f.t}</h3>
                <p className="muted">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Explore</span>
            <h2>Where do you want to start?</h2>
          </div>
          <div className="cards c3">
            <Link to="/client-journeys" className="card rv">
              <span className="tag">Proof</span>
              <h3>Client journeys</h3>
              <p className="muted">
                How one broken forecast uncovered three hidden problems — and the fix.
              </p>
            </Link>
            <Link to="/resources" className="card rv">
              <span className="tag">Free</span>
              <h3>Resources</h3>
              <p className="muted">
                Free worksheets from the Move by Move series. Start with “Easy to check. Easy to
                share.”
              </p>
            </Link>
            <Link to="/move-by-move" className="card rv">
              <span className="tag yt">YouTube</span>
              <h3>Move by Move</h3>
              <p className="muted">How companies won their market, one move at a time.</p>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
