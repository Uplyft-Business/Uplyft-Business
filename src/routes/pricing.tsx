import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SiteLayout";
import { FinalCta, PageHeader, Pricing } from "@/components/sections";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

function PricingPage() {
  return (
    <SitePage title="Pricing">
      <PageHeader label="Engagements and pricing" title="Right-sized to the problem. Never padded.">
        Two ways to work with us, both at a fixed fee. The first conversation is free.
      </PageHeader>
      <Pricing bare className="" />
      <FinalCta />
    </SitePage>
  );
}
