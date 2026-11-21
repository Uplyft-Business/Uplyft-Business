import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SiteLayout";
import { FinalCta, PageHeader, Stories, Symptoms, WhatWeFix } from "@/components/sections";

export const Route = createFileRoute("/what-we-fix")({
  component: WhatWeFixPage,
});

function WhatWeFixPage() {
  return (
    <SitePage title="What we fix">
      <PageHeader
        label="What we fix"
        title="Four places growth breaks. One team that sees all of them."
      >
        Strategy, revenue, talent and execution are usually handled by different people. The
        problems almost never stay in one lane.
      </PageHeader>
      <WhatWeFix bare className="" />
      <Symptoms />
      <Stories />
      <FinalCta />
    </SitePage>
  );
}
