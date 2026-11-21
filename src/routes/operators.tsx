import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SiteLayout";
import { FinalCta, Operators, PageHeader, WhyOperators } from "@/components/sections";

export const Route = createFileRoute("/operators")({
  component: OperatorsPage,
});

function OperatorsPage() {
  return (
    <SitePage title="The operators">
      <PageHeader label="The operators" title="We’ve sat in the chairs you’re hiring for.">
        Four senior executives, 25 years each, still working in the field today.
      </PageHeader>
      <Operators bare className="" />
      <WhyOperators />
      <FinalCta title="Meet all four at once." />
    </SitePage>
  );
}
