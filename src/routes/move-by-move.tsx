import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, SiteLayout } from "@/components/site/SiteLayout";
import { YOUTUBE_URL } from "@/components/site/config";
import { Play, YouTubeLogo } from "@/components/site/icons";

export const Route = createFileRoute("/move-by-move")({
  component: MoveByMove,
});

const reasons = [
  { t: "One move at a time", d: "Big decisions broken into clear, bite-sized moves." },
  { t: "Real stories", d: "The moments where the right (or wrong) move changed everything." },
  { t: "A free worksheet", d: "Each episode comes with a template you can use with your team." },
];

function MoveByMove() {
  return (
    <SiteLayout>
      <div className="page-hero yt-hero">
        <div className="wrap yt-feature">
          <div>
            <span className="eyebrow" style={{ color: "#ff5a4f" }}>
              On YouTube
            </span>
            <h1>
              Move <span className="grad-text">by</span> Move
            </h1>
            <p>
              How companies won their market, one move at a time. We break down the strategic moves
              behind growth so you can make yours with confidence.
            </p>
            <div className="ctas">
              <a
                className="btn btn-yt"
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeLogo />
                Subscribe on YouTube
              </a>
              <Link to="/resources" className="btn btn-ghost">
                Get the free worksheets
              </Link>
            </div>
          </div>
          <a
            className="player"
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Move by Move on YouTube"
          >
            <div className="chess" />
            <div className="play">
              <Play />
            </div>
            <div className="ttl">Watch the series →</div>
          </a>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Why watch</span>
            <h2>Strategy you can actually use.</h2>
          </div>
          <div className="cards c3">
            {reasons.map((r, i) => (
              <div className="card rv" key={r.t}>
                <div className="ep">
                  <div className="no">0{i + 1}</div>
                  <div>
                    <h3>{r.t}</h3>
                    <p className="muted">{r.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want the next move made for you?"
        text="Bring your own growth problem to the Diagnostic Council and get a straight answer in 90 minutes."
      />
    </SiteLayout>
  );
}
