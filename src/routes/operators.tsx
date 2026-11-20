import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Lock } from "@/components/site/icons";

export const Route = createFileRoute("/operators")({
  component: Operators,
});

// credential: one anonymised line per operator, e.g. "Ex-VP Revenue Ops, global SaaS ($500M+ ARR)".
// Left empty until the real track records are supplied; the line is hidden while empty.
const operators = [
  {
    i: "R",
    t: "Revenue Design",
    credential: "",
    d: "Decades shaping revenue models, territories, quotas and forecasts so your plan is backed by numbers you can trust.",
    k: "Forecasting · Territories",
  },
  {
    i: "P",
    t: "Product & Market",
    credential: "",
    d: "Brings products to market and builds repeatable motions that connect what you make with what buyers want.",
    k: "Launch · Positioning",
  },
  {
    i: "T",
    t: "People & Organization",
    credential: "",
    d: "Designs hiring plans, pay structures and team capabilities that match the strategy you're actually running.",
    k: "Org design · Comp",
  },
  {
    i: "G",
    t: "Go-to-Market Strategy",
    credential: "",
    d: "Scaled B2B sales across multiple regions and aligns positioning, messaging and selling into one clear story.",
    k: "B2B sales · Multi-region",
  },
];

function Operators() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The operators"
        title={
          <>
            Four seats. <span className="grad-text">One integrated system.</span>
          </>
        }
      >
        Each of us has 25 years in the chair. Together we cover the whole growth engine — so nothing
        falls between the cracks.
      </PageHero>

      <section className="dark" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <div className="nda-banner rv">
            <div className="nda-icon" aria-hidden="true">
              <Lock />
            </div>
            <div>
              <h2>Still in the seat.</h2>
              <p>
                All four of us hold senior roles today, which is why our advice is current. To
                protect our employers, we share names and full backgrounds under a mutual NDA,
                before your Diagnostic Council.
              </p>
            </div>
          </div>
          <div className="cards c4">
            {operators.map((o) => (
              <div className="card op rv" key={o.t}>
                <div className="avatar">{o.i}</div>
                <h3>{o.t}</h3>
                {o.credential && <p className="cred">{o.credential}</p>}
                <p>{o.d}</p>
                <div className="yrs">25 yrs · {o.k}</div>
                <span className="nda-badge">
                  <Lock /> Identity shared under NDA
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 0 }} />
      <CtaBand
        title="Meet all four at once."
        text="The Diagnostic Council puts every operator in the room for 90 minutes."
      />
    </SiteLayout>
  );
}
