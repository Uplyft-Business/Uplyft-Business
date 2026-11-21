import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SiteLayout";
import { Faq, FinalCta, PageHeader } from "@/components/sections";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
});

function FaqPage() {
  return (
    <SitePage title="Questions buyers ask us">
      <PageHeader label="FAQ" title="Questions buyers ask us">
        Straight answers to what people usually want to know before they talk to us.
      </PageHeader>
      <Faq bare className="" />
      <FinalCta />
    </SitePage>
  );
}
