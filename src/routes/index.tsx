import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SiteLayout";
import {
  Coaching,
  Faq,
  FinalCta,
  Hero,
  HowWeWork,
  Operators,
  PillarsStrip,
  Pricing,
  Stories,
  Symptoms,
  WhatWeFix,
  WhyOperators,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  component: Index,
});

// The whole story on one page. Each section also has its own page (see src/routes/).
function Index() {
  return (
    <SitePage>
      <Hero />
      <PillarsStrip />
      <Symptoms />
      <WhyOperators />
      <WhatWeFix />
      <HowWeWork />
      <Pricing />
      <Coaching />
      <Operators />
      <Stories />
      <Faq />
      <FinalCta />
    </SitePage>
  );
}
