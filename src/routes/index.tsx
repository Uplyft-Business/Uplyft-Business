import { createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { DIAGNOSTIC_FORM_ID, DiagnosticButton, SitePage } from "@/components/SiteLayout";
import { TallyPopupLink } from "@/components/TallyPopup";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { v: "4", l: "senior operators" },
  { v: "25 years", l: "each, 100 combined" },
  { v: "3 regions", l: "APJ, EMEA, North America" },
  { v: "Free", l: "first diagnostic, no pitch" },
];
const symptoms = [
  "The forecast is wrong again, and nobody trusts it.",
  "Deals stall in the middle of the pipeline.",
  "New sales hires take too long to ramp.",
  "Sales and marketing tell different stories about the same quarter.",
];
const fixes = [
  { t: "Strategy", d: "Market focus, ICP definition and growth priorities." },
  { t: "Revenue", d: "Commercial architecture, forecasting, pricing and deal structure." },
  { t: "Talent", d: "Organization design, compensation and capability gaps." },
  { t: "Execution", d: "Enablement, storytelling and operating rhythms." },
];
const steps = [
  {
    k: "Step 1 · 10 minutes",
    t: "Tell us what’s in the way",
    d: "A short questionnaire about your company, your biggest growth problem and what you’ve tried. It shapes the Council around your business.",
  },
  {
    k: "Step 2 · Free, 60 to 90 minutes",
    t: "The Diagnostic Council",
    d: "All four operators meet with you. We don’t pitch; we diagnose. You leave knowing what’s broken, who needs to be involved and which lever to pull first.",
  },
  {
    k: "Step 3 · Fixed fee",
    t: "The right-sized engagement",
    d: "A focused project or a full transformation, with coaching for the leaders who carry the change. You get a written proposal and a fixed price.",
  },
];
const sparq = [
  { l: "S", t: "Scan", d: "Where things stand, and where the time goes." },
  { l: "P", t: "Pinpoint", d: "The one or two moves that matter this quarter." },
  { l: "A", t: "Ask", d: "The questions the team may not ask the leader." },
  { l: "R", t: "Reframe", d: "Loosen the beliefs that keep old patterns running." },
  { l: "Q", t: "Quantify", d: "Set a number at the start and check it at the end." },
];
const operators = [
  {
    t: "GTM and Strategy",
    d: "Scaled B2B tech across APJ, EMEA and North America. Led sales programs for cloud infrastructure at a global tech leader. Aligns the whole GTM engine, from positioning to the sales pitch.",
  },
  {
    t: "Revenue Architecture",
    d: "Revenue models for enterprise and growth-stage tech: coverage, quotas, forecasting, deal structure and P&L impact. Makes sure the growth plan has real math behind it.",
  },
  {
    t: "Product and Market Fit",
    d: "Takes products to market. Business development, techno-functional leadership and repeatability design. Bridges what you build and what customers will buy.",
  },
  {
    t: "Talent and Organization",
    d: "HR systems for scaling companies: hiring blueprints, compensation structures and capability development. The right people in the right seats for your strategy.",
  },
];
const stories = [
  {
    t: "The forecasting fix that wasn’t",
    d: "A Series B company asked us to fix forecasting. The territory design was broken, the pitch was wrong, and the comp plan rewarded the wrong behavior.",
    f: "a full engine redesign.",
  },
  {
    t: "The market entry",
    d: "An enterprise vendor needed a GTM strategy for a new region. Our Talent lead designed the hiring profile and our Revenue lead modelled the P&L.",
    f: "launched in 90 days with an aligned team.",
  },
  {
    t: "The scaling sprint",
    d: "A PE-backed tech company needed to grow from USD 15M to 50M ARR. It started with ICP and positioning, then widened as gaps showed up in hiring, enablement and forecasting.",
    f: "a revenue engine that survived the scale.",
  },
];
const faqs = [
  {
    q: "Who is this for?",
    a: "B2B tech companies from Series A onwards that are ready to put real budget behind fixing growth, not just talking about it. If you’re still looking for product–market fit, or you want a report to file away, we’re probably not the right people.",
  },
  {
    q: "Is the Diagnostic Council really free?",
    a: "Yes. It’s 60 to 90 minutes with all four operators, after a 10-minute questionnaire. If we can’t help, we’ll say so.",
  },
  {
    q: "Who will I actually work with?",
    a: "The operators you meet at the Council. No junior team. One operator leads a project; a transformation brings in the specialists it needs.",
  },
  {
    q: "Why are the operators unnamed?",
    a: "They still hold senior roles. You meet them at the Council, and full profiles and references are shared once there’s verified interest.",
  },
  { q: "How much of their time do I get?", a: "It’s written into every proposal." },
  {
    q: "Is this consulting or coaching?",
    a: "Both, kept clearly separate. Operators diagnose and fix the system. Coaching helps your leaders make the change stick, and in coaching, they own the answers.",
  },
  {
    q: "Is what I share confidential?",
    a: "Yes. Your answers go only to the four operators, and we sign a mutual NDA on request.",
  },
];

const eyebrow = "text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground";
const smallCaps = "text-[15px] font-medium uppercase tracking-[0.12em]";
const h2 = "text-3xl font-bold leading-[1.1] text-ink md:text-[44px]";
const card = "rounded-lg border border-border bg-card";

function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-4", className)}>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-16 md:px-8 md:py-24">
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <p className={eyebrow}>{label}</p>
      <h2 className={h2}>{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <SitePage>
      <section id="top" className="bg-cream">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 pb-16 pt-16 md:px-8 md:pb-[88px] md:pt-24">
          <p className={eyebrow}>For growth-stage B2B tech companies across APJ</p>
          <h1 className="max-w-[900px] text-[40px] font-bold leading-[1.05] text-ink sm:text-5xl md:text-[64px]">
            We fix growth problems at the root.
          </h1>
          <p className="max-w-[760px] text-xl font-light leading-normal md:text-2xl">
            Four senior operators and one integrated system for strategy, revenue, talent and
            execution. Plus coaching for the leaders who have to carry the change.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <DiagnosticButton className="px-7 py-4 text-lg md:text-xl" />
            <a
              href="#how"
              className="border-b-2 border-ink px-2 py-4 text-lg font-medium text-ink transition hover:border-brand hover:text-brand"
            >
              See how we work
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="text-3xl font-bold text-ink md:text-4xl">{s.v}</p>
                <p className="mt-1 text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sun">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-14 md:px-8">
          <h2 className="text-[28px] font-bold text-ink md:text-[32px]">Sound familiar?</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {symptoms.map((s) => (
              <p key={s} className="rounded-lg bg-white px-5 py-4 text-lg leading-[1.4] text-ink">
                {s}
              </p>
            ))}
          </div>
          <p className="text-lg text-ink">
            These are symptoms. We find the cause.{" "}
            <TallyPopupLink
              formId={DIAGNOSTIC_FORM_ID}
              className="font-bold text-ink underline transition hover:text-brand"
            >
              Tell us yours in 10 minutes
            </TallyPopupLink>
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-6 py-16 md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
          <h2 className={h2}>You don’t need more theory. You need operators.</h2>
          <div className="flex flex-col gap-4 text-lg leading-[1.6] md:text-xl">
            <p>
              We are a collective of four senior executives who have built and fixed GTM engines
              across APJ, EMEA and North America.
            </p>
            <p>
              We don’t send junior consultants to learn on your time. You work with us directly,
              together or one at a time, depending on the size of the problem.
            </p>
          </div>
        </div>
      </section>

      <Section id="fix" className="bg-cream">
        <SectionHeading
          label="What we fix"
          title="Four places growth breaks. One team that sees all of them."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fixes.map((f, i) => (
            <div key={f.t} className={cn(card, "flex flex-col gap-2.5 p-7")}>
              <p className="text-[28px] font-bold text-brand">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-[22px] font-medium text-ink">{f.t}</h3>
              <p className="text-[17px] leading-[1.55]">{f.d}</p>
            </div>
          ))}
        </div>
        <p className="text-lg">
          Most consultants see one slice. A forecasting problem is often a territory, pitch or comp
          plan problem underneath.
        </p>
      </Section>

      <Section id="how">
        <SectionHeading
          label="How we work"
          title="Three steps. You know the cost before you commit."
        />
        <ol className="grid gap-8 md:grid-cols-3 md:gap-5">
          {steps.map((s) => (
            <li key={s.t} className="flex flex-col gap-2.5 border-t-4 border-brand pt-6">
              <p className={cn(smallCaps, "text-muted-foreground")}>{s.k}</p>
              <h3 className="text-2xl font-medium text-ink">{s.t}</h3>
              <p className="text-[17px] leading-[1.6]">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="pricing" className="bg-cream">
        <SectionHeading
          label="Engagements and pricing"
          title="Right-sized to the problem. Never padded."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className={cn(card, "flex flex-col gap-4 p-7 md:p-9")}>
            <p className={cn(smallCaps, "text-muted-foreground")}>30 to 90 days</p>
            <h3 className="text-[30px] font-bold text-ink">Project</h3>
            <p className="text-lg leading-[1.6]">
              For a specific, contained problem. One operator leads the work; the other three review
              at key milestones to catch blind spots.
            </p>
            <ul className="list-disc pl-[22px] text-[17px] leading-[1.8]">
              <li>A fixed scope and a named lead</li>
              <li>Milestone reviews by the full Council</li>
              <li>Leader coaching available as an add-on</li>
            </ul>
            <p className="mt-2 text-[28px] font-bold text-ink">
              From USD 9K{" "}
              <span className="text-base font-normal text-muted-foreground">fixed fee</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-ink p-7 text-ink-soft md:p-9">
            <p className={cn(smallCaps, "text-ink-muted")}>3 to 6 months</p>
            <h3 className="text-[30px] font-bold text-white">Transformation</h3>
            <p className="text-lg leading-[1.6]">
              For stalled growth, a full engine redesign or post-merger integration. Several
              operators work across all four pillars.
            </p>
            <ul className="list-disc pl-[22px] text-[17px] leading-[1.8]">
              <li>Operators deployed across the engine</li>
              <li>Coaching included for the leaders carrying the change</li>
              <li>An exit point after the first phase</li>
            </ul>
            <p className="mt-2 text-[28px] font-bold text-white">
              Fixed fee{" "}
              <span className="text-base font-normal text-ink-muted">agreed after the Council</span>
            </p>
          </div>
        </div>
        <p className="text-lg text-ink">
          You’ll know exactly what it costs before you commit. No hourly billing, no surprises.
          Prices in USD, plus applicable taxes.
        </p>
      </Section>

      <Section>
        <div className="flex max-w-[820px] flex-col gap-3">
          <p className={eyebrow}>Coaching that makes the change stick</p>
          <h2 className={h2}>Plans fail when the people carrying them don’t change.</h2>
          <p className="text-lg leading-[1.6] md:text-xl">
            Every engagement can include customized coaching for your leaders, built on our SPARQ
            method and shaped to what the diagnostic found.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sparq.map((s) => (
            <div key={s.t} className={cn(card, "flex flex-col gap-2 p-6")}>
              <p className="text-[44px] font-bold leading-tight text-brand">{s.l}</p>
              <h3 className="text-xl font-medium text-ink">{s.t}</h3>
              <p className="leading-[1.55]">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="operators" className="bg-cream">
        <SectionHeading label="The operators" title="We’ve sat in the chairs you’re hiring for." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {operators.map((o) => (
            <div key={o.t} className={cn(card, "flex flex-col gap-2.5 p-7")}>
              <h3 className="text-[22px] font-medium text-ink">{o.t}</h3>
              <p className="text-[15px] font-medium text-muted-foreground">25 years</p>
              <p className="leading-[1.6]">{o.d}</p>
            </div>
          ))}
        </div>
        <div className={cn(card, "flex items-start gap-3 px-7 py-6")}>
          <Lock aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-ink" strokeWidth={1.8} />
          <p className="text-[17px] leading-[1.6] text-ink">
            Our operators still hold senior roles, so we keep their names private for now. You’ll
            meet all four at the Diagnostic Council, and full profiles and references are shared
            once there’s verified interest.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading label="How the problems connect" title="Problems we’ve fixed" />
        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((s) => (
            <div key={s.t} className={cn(card, "flex flex-col gap-3 p-7")}>
              <h3 className="text-[22px] font-medium text-ink">{s.t}</h3>
              <p className="leading-[1.6]">{s.d}</p>
              <p className="font-bold text-ink">The fix: {s.f}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="faq" className="scroll-mt-4 bg-cream">
        <div className="mx-auto flex max-w-[900px] flex-col gap-8 px-6 py-16 md:px-8 md:py-24">
          <h2 className={h2}>Questions buyers ask us</h2>
          <div className="border-b border-border">
            {faqs.map((f) => (
              <div key={f.q} className="flex flex-col gap-2 border-t border-border py-6">
                <h3 className="text-xl font-medium text-ink">{f.q}</h3>
                <p className="text-[17px] leading-[1.6]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-6 py-16 md:px-8 md:py-24">
          <h2 className="text-4xl font-bold leading-[1.1] text-white md:text-[52px]">
            Stop guessing. Ask the operators.
          </h2>
          <p className="max-w-[720px] text-xl font-light leading-normal text-ink-soft md:text-[22px]">
            Ten minutes on the questionnaire, then 60 to 90 minutes with all four of us. We’ll tell
            you what we see, what you need and exactly what it will cost.
          </p>
          <DiagnosticButton className="px-7 py-4 text-lg md:text-xl" />
        </div>
      </section>
    </SitePage>
  );
}
