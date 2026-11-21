import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SiteLayout";
import { Coaching, FinalCta, HowWeWork, PageHeader, Pricing } from "@/components/sections";

export const Route = createFileRoute("/how-we-work")({
  component: HowWeWorkPage,
});

function HowWeWorkPage() {
  return (
    <SitePage title="How we work">
      <PageHeader label="How we work" title="Three steps. You know the cost before you commit.">
        It starts with a short questionnaire and a free conversation with all four of us. You only
        pay once you’ve seen exactly what we’d do and what it costs.
      </PageHeader>
      <HowWeWork bare />
      <Pricing />
      <Coaching />
      <FinalCta />
    </SitePage>
  );
}
