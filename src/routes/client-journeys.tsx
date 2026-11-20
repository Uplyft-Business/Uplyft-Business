import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/client-journeys")({
  component: ClientJourneys,
});

const stories = [
  {
    tag: "Series B",
    t: "The “RevOps” Trojan Horse",
    d: "A Series B client hired us to fix forecasting. Our Revenue Lead found broken territory design, our GTM Lead found the wrong pitch, and our Talent Lead found a comp plan rewarding the wrong behavior.",
    f: "A full engine redesign.",
  },
  {
    tag: "Enterprise",
    t: "The Market Entry",
    d: "An enterprise vendor needed a GTM strategy for a new region. Our Talent Lead designed the hiring profile while our Revenue Lead modeled the P&L.",
    f: "Launched in 90 days with a fully aligned team.",
  },
  {
    tag: "PE-backed",
    t: "The Scaling Sprint",
    d: "A PE-backed tech company needed to grow from $15M to $50M ARR. We started with ICP and positioning, then expanded to the full team as gaps surfaced in hiring, enablement and forecasting.",
    f: "A revenue engine that survived the scale.",
  },
];

function ClientJourneys() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Real client journeys"
        title={
          <>
            How the problems <span className="grad-text">(and fixes)</span> connect.
          </>
        }
      >
        The problem you hire us for is rarely the only one. Here’s what happens when four operators
        look at the same engine.
      </PageHero>

      <section>
        <div className="wrap cards c3">
          {stories.map((s) => (
            <div className="card journey rv" key={s.t}>
              <span className="tag">{s.tag}</span>
              <h3>{s.t}</h3>
              <p className="prob muted">{s.d}</p>
              <div className="fix">
                <small>The fix</small>
                {s.f}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Sound familiar?"
        text="90 minutes with the Council is usually enough to find the real problem."
      />
    </SiteLayout>
  );
}
