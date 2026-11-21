import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SiteLayout";
import { FinalCta, PageHeader, Stories } from "@/components/sections";

export const Route = createFileRoute("/client-stories")({
  component: ClientStoriesPage,
});

function ClientStoriesPage() {
  return (
    <SitePage title="Client stories">
      <PageHeader label="Client stories" title="Problems we’ve fixed">
        The problem a client brings us is rarely the only one. Here’s what we found underneath.
      </PageHeader>
      <Stories bare />
      <FinalCta title="Sound familiar?" />
    </SitePage>
  );
}
