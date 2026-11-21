import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Play } from "lucide-react";
import { SitePage } from "@/components/SiteLayout";
import { FinalCta, PageHeader } from "@/components/sections";
import { YOUTUBE_URL } from "@/lib/resources";

export const Route = createFileRoute("/move-by-move")({
  component: MoveByMovePage,
});

const points = [
  {
    t: "One move at a time",
    d: "We take a company that won its market and break down the decisions that got it there.",
  },
  {
    t: "Real companies",
    d: "Each episode looks at a real business, like Zerodha, and what other companies can borrow from it.",
  },
  {
    t: "Something to use",
    d: "Most episodes come with a free worksheet so you can try the move with your own team.",
  },
];

function MoveByMovePage() {
  return (
    <SitePage title="Move by Move on YouTube">
      <PageHeader
        label="Move by Move · On YouTube"
        title="How companies won their market, one move at a time."
      >
        Our video series on go-to-market. Short, practical, and made by operators who do this work.
      </PageHeader>

      <section>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-16 md:px-8 md:py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {points.map((p) => (
              <div key={p.t} className="flex flex-col gap-2.5 border-t-4 border-brand pt-6">
                <h2 className="text-2xl font-medium text-ink">{p.t}</h2>
                <p className="text-[17px] leading-[1.6]">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ff0000] px-7 py-4 text-lg font-bold text-white transition hover:opacity-90"
            >
              <Play aria-hidden="true" className="size-5 fill-current" />
              Watch on YouTube
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
            <Link
              to="/resources"
              className="border-b-2 border-ink px-2 py-4 text-lg font-medium text-ink transition hover:border-brand hover:text-brand"
            >
              Get the free worksheets
            </Link>
          </div>
        </div>
      </section>

      <FinalCta
        title="Want us to look at your next move?"
        text="The videos show how we think. In the free diagnostic, all four of us look at your business and tell you what we’d fix first."
      />
    </SitePage>
  );
}
