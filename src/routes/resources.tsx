import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { WORKSHEET_PDF, YOUTUBE_URL } from "@/components/site/config";
import { ArrowRight, Download } from "@/components/site/icons";

export const Route = createFileRoute("/resources")({
  component: Resources,
});

// To add a worksheet: put the PDF in public/resources/ and copy the .feature-res block below.
function Resources() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Tools from the <span className="grad-text">operator’s desk.</span>
          </>
        }
      >
        Free worksheets you can use with your team this week. Each one comes from an episode of Move
        by Move.
      </PageHero>

      <section>
        <div className="wrap">
          <div className="feature-res rv">
            <div>
              <span className="tag">Free worksheet · About 30 minutes</span>
              <h2>
                Easy to <span className="grad-text">check</span>. Easy to{" "}
                <span className="grad-text">share</span>.
              </h2>
              <p className="muted" style={{ fontSize: "1.08rem" }}>
                Turn one question your buyers ask into a public answer they can check for themselves
                and forward to a colleague. From the <b>Zerodha</b> episode of Move by Move.
              </p>
              <ol className="fr-steps">
                <li>Pick the question</li>
                <li>Build the public answer</li>
                <li>The five-customer share test</li>
                <li>Size it to you and your markets</li>
                <li>Keep the promise after the sale</li>
              </ol>
              <div className="ctas" style={{ marginTop: 28 }}>
                <a
                  className="btn btn-primary"
                  href={WORKSHEET_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download />
                  Get the free PDF
                </a>
                <a
                  className="btn btn-yt"
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch the episode
                </a>
              </div>
            </div>
            <a
              className="fr-sheet"
              href={WORKSHEET_PDF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the Easy to check, Easy to share worksheet (PDF)"
            >
              <div className="sh-top">
                <b>MOVE BY MOVE</b>
                <span>FREE WORKSHEET</span>
              </div>
              <div className="sh-body">
                <div className="sh-h">
                  Easy to <i>check</i>. Easy to <i>share</i>.
                </div>
                <div className="sh-quote">
                  “What will this cost me?” · “What happens if I tell a friend?”
                </div>
                <div className="sh-row">
                  <span>1</span>
                  <div />
                </div>
                <div className="sh-row">
                  <span>2</span>
                  <div />
                </div>
                <div className="sh-grid">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
                <div className="sh-row">
                  <span>3</span>
                  <div />
                </div>
                <div className="sh-row">
                  <span>5</span>
                  <div />
                </div>
              </div>
              <div className="sh-foot">
                what will this cost me, and why would I tell somebody else?
              </div>
            </a>
          </div>

          <div className="cards c2" style={{ marginTop: 22 }}>
            <Link to="/move-by-move" className="card res rv">
              <span className="tag yt">Video · Series</span>
              <h3>Watch Move by Move</h3>
              <p className="muted">
                How companies won their market, one move at a time. Every episode comes with a free
                worksheet.
              </p>
              <span className="go">
                Watch now <ArrowRight />
              </span>
            </Link>
            <a className="card res rv" href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              <span className="tag">Coming soon</span>
              <h3>More worksheets on the way</h3>
              <p className="muted">
                A new free template drops with each episode. Subscribe so you get the next one
                first.
              </p>
              <span className="go">
                Subscribe on YouTube <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
