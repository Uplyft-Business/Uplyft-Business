import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/how-we-work")({
  component: HowWeWork,
});

function HowWeWork() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="How we work"
        title={
          <>
            Diagnose first. <span className="grad-text">Then fix what matters.</span>
          </>
        }
      >
        No pitch decks, no bloated retainers. A sharp diagnosis, then exactly the right-sized
        engagement.
      </PageHero>

      <section>
        <div className="wrap">
          <div className="step rv">
            <div className="num grad-text">1</div>
            <div>
              <span className="tag">60–90 minutes</span>
              <h3>The Diagnostic Council</h3>
              <p className="muted" style={{ fontSize: "1.08rem", maxWidth: 720 }}>
                All four of us meet with you. We don’t pitch — we diagnose. We find what’s actually
                broken, who needs to be involved, and which lever to pull first.
              </p>
            </div>
          </div>
          <div className="step rv">
            <div className="num grad-text">2</div>
            <div>
              <h3>The right-sized engagement</h3>
              <div className="price-cards">
                <div className="price">
                  <span className="tag">Targeted Sprint</span>
                  <div className="amt">$50K–$120K</div>
                  <p className="muted">
                    <b>Specialist Lead.</b> One lead drives the work; the other three review
                    strategy at key milestones to catch blind spots.
                  </p>
                  <div className="meta">
                    <span>30–90 days</span>
                    <span>Specific, contained problems</span>
                  </div>
                </div>
                <div className="price feature">
                  <span className="ribbon">MOST IMPACT</span>
                  <span className="tag">Full Council</span>
                  <div className="amt grad-text">$150K–$350K</div>
                  <p>Multiple specialists deploy a full engine redesign.</p>
                  <div className="meta">
                    <span>90–180 days</span>
                    <span>Stalled growth · Post-merger</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Stop guessing. Ask the operators."
        text="Book a 90-minute Diagnostic Session. We’ll tell you what we see, what you need, and exactly what it will cost."
      />
    </SiteLayout>
  );
}
