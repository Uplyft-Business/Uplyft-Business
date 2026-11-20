import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { publicFile, YOUTUBE_URL } from "@/components/site/config";
import { ArrowRight, Download } from "@/components/site/icons";

export const Route = createFileRoute("/resources")({
  component: Resources,
});

type Category = "checklist" | "framework";

type Resource = {
  category: Category;
  title: string;
  blurb: string;
  episode: string; // which Move by Move episode it comes from
  minutes: number;
  pdf: string; // file name in public/downloads/
  points: string[]; // shown as a numbered list on the card
};

// To add a resource: put the PDF in public/downloads/ and add an entry here.
const resources: Resource[] = [
  {
    category: "framework",
    title: "Easy to check. Easy to share.",
    blurb:
      "Turn one question your buyers ask into a public answer they can check for themselves and forward to a colleague.",
    episode: "Zerodha",
    minutes: 30,
    pdf: "move-by-move-easy-to-check-easy-to-share.pdf",
    points: [
      "Pick the question",
      "Build the public answer",
      "The five-customer share test",
      "Size it to you and your markets",
      "Keep the promise after the sale",
    ],
  },
];

const groups: { id: Category; label: string; plural: string; intro: string }[] = [
  {
    id: "checklist",
    label: "Checklist",
    plural: "Checklists",
    intro: "Quick yes/no checks you can run in a meeting to spot what’s missing.",
  },
  {
    id: "framework",
    label: "Framework",
    plural: "Frameworks",
    intro: "Step-by-step methods for working through a problem with your team.",
  },
];

function ResourceCard({ r }: { r: Resource }) {
  const group = groups.find((g) => g.id === r.category)!;
  const href = publicFile(`downloads/${r.pdf}`);
  return (
    <article className="rcard rv">
      <a className="cover" href={href} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
        <div className="cover-top">
          <b>MOVE BY MOVE</b>
          <span>{group.label.toUpperCase()}</span>
        </div>
        <div className="cover-title">{r.title}</div>
        <div className="cover-lines">
          <i />
          <i />
          <i />
        </div>
      </a>
      <div className="body">
        <div className="meta-row">
          <span className={`tag tag-${r.category}`}>{group.label}</span>
          <span className="muted small">
            {r.episode} episode · about {r.minutes} min
          </span>
        </div>
        <h3>{r.title}</h3>
        <p className="muted">{r.blurb}</p>
        <ol className="fr-steps">
          {r.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ol>
        <div className="ctas" style={{ marginTop: 24 }}>
          <a className="btn btn-primary" href={href} target="_blank" rel="noopener noreferrer">
            <Download />
            Get the free PDF
          </a>
          <a className="btn btn-yt" href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
            Watch the episode
          </a>
        </div>
      </div>
    </article>
  );
}

function ComingSoon({ plural }: { plural: string }) {
  return (
    <a
      className="card res res-empty rv"
      href={YOUTUBE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="tag">Coming soon</span>
      <h3>New {plural.toLowerCase()} on the way</h3>
      <p className="muted">
        A new free resource drops with each Move by Move episode. Subscribe so you get the next one
        first.
      </p>
      <span className="go">
        Subscribe on YouTube <ArrowRight />
      </span>
    </a>
  );
}

function Resources() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const shown = groups.filter((g) => filter === "all" || g.id === filter);

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
        Free checklists and frameworks you can use with your team this week. Each one comes from an
        episode of Move by Move.
      </PageHero>

      <section>
        <div className="wrap">
          <div className="filters" role="tablist" aria-label="Resource type">
            {[{ id: "all" as const, plural: "All" }, ...groups].map((g) => {
              const count =
                g.id === "all"
                  ? resources.length
                  : resources.filter((r) => r.category === g.id).length;
              return (
                <button
                  key={g.id}
                  role="tab"
                  aria-selected={filter === g.id}
                  className={`chip${filter === g.id ? " on" : ""}`}
                  onClick={() => setFilter(g.id)}
                >
                  {g.plural} <span className="count">{count}</span>
                </button>
              );
            })}
          </div>

          {shown.map((g) => {
            const items = resources.filter((r) => r.category === g.id);
            return (
              <div className="res-group" key={g.id}>
                <div className="res-group-head">
                  <h2>{g.plural}</h2>
                  <p className="muted">{g.intro}</p>
                </div>
                <div className="res-grid">
                  {items.map((r) => (
                    <ResourceCard key={r.pdf} r={r} />
                  ))}
                  <ComingSoon plural={g.plural} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Want us to run this with your team?"
        text="The worksheets show the method. The Diagnostic Council applies it to your business, with all four operators in the room."
      />
    </SiteLayout>
  );
}
