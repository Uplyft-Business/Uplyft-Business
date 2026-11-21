// The site's content sections. The home page shows all of them in order; the standalone pages
// (/what-we-fix, /how-we-work, /pricing, /operators, /client-stories, /faq) reuse them with
// `bare` set, so the page header carries the title instead of the section heading.
import { Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { DIAGNOSTIC_FORM_ID, DiagnosticButton } from "@/components/SiteLayout";
import { TallyPopupLink } from "@/components/TallyPopup";
import { cn } from "@/lib/utils";

// ---------- copy ----------

const stats = [
  { v: "4", l: "senior operators" },
  { v: "25 years", l: "each, 100 combined" },
  { v: "3 regions", l: "APJ, EMEA, North America" },
  { v: "Free", l: "first diagnostic, no pitch" },
];
const pillars = ["Strategy", "Revenue", "Talent", "Execution"];
// One per pillar: Strategy, Revenue, Talent, Execution.
const symptoms = [
  "We chase every deal instead of the right ones.",
  "The forecast is wrong again, and nobody trusts it.",
  "New sales hires take months to ramp, and the good ones leave.",
  "Sales and marketing tell different stories about the same quarter.",
];
const fixes = [
  { t: "Strategy", d: "Which markets and customers to go after, and what to do first." },
  {
    t: "Revenue",
    d: "How you make money: pricing, deal structure, forecasting and sales coverage.",
  },
  {
    t: "Talent",
    d: "How the team is set up, how people are paid and the skills that are missing.",
  },
  {
    t: "Execution",
    d: "Sales enablement, the story you tell buyers and the weekly rhythm that keeps it on track.",
  },
];
const steps = [
  {
    k: "Step 1 · 10 minutes",
    t: "Tell us what’s in the way",
    d: "A short questionnaire about your company, your biggest growth problem and what you’ve already tried, so the Council arrives prepared.",
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
    d: "Scaled B2B tech across APJ, EMEA and North America, and led sales programs for cloud infrastructure at a global tech leader. Gets positioning, messaging and the sales pitch telling one story.",
  },
  {
    t: "Revenue Architecture",
    d: "Builds revenue models for enterprise and growth-stage tech: coverage, quotas, forecasting, deal structure and the effect on the P&L. Makes sure the growth plan has real math behind it.",
  },
  {
    t: "Product and Market Fit",
    d: "Takes products to market and leads business development, working across product and sales to build a motion you can repeat. Bridges what you build and what customers will buy.",
  },
  {
    t: "Talent and Organization",
    d: "Builds people systems for scaling companies: hiring plans, pay structures and skills development. Puts the right people in the right seats for your strategy.",
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
    d: "An enterprise vendor needed a go-to-market strategy for a new region. Our Talent lead designed the hiring profile and our Revenue lead modeled the P&L.",
    f: "launched in 90 days with an aligned team.",
  },
  {
    t: "The scaling sprint",
    d: "A PE-backed tech company needed to grow from USD 15M to 50M ARR. We started with who to sell to and how to position, then widened the work as gaps showed up in hiring, enablement and forecasting.",
    f: "a revenue engine that held up as they scaled.",
  },
];
const faqs = [
  {
    q: "Who is this for?",
    a: "Growth-stage B2B tech companies, mostly across APJ, from Series A onwards. You’ve found product–market fit and you’re selling, but growth has stalled or become hard to predict, and you’re ready to put real budget into fixing it. If you’re still looking for product–market fit, or you just want a report to file away, we’re probably not the right people.",
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
    a: "They still hold senior roles. You meet all four at the Council, and we share full profiles and references once we both want to take things further.",
  },
  {
    q: "How much of their time do I get?",
    a: "We write it into every proposal: which operators, and how much of their time, so you know exactly what you’re getting.",
  },
  {
    q: "Is this consulting or coaching?",
    a: "Both, kept clearly separate. Operators diagnose and fix the system. Coaching helps your leaders make the change stick, and in coaching, they own the answers.",
  },
  {
    q: "Is what I share confidential?",
    a: "Yes. Your answers go only to the four operators, and we sign a mutual NDA on request.",
  },
];

// ---------- shared styles ----------

const eyebrow = "text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground";
const smallCaps = "text-[15px] font-medium uppercase tracking-[0.12em]";
const h2 = "text-3xl font-bold leading-[1.1] text-ink md:text-[44px]";
const card = "rounded-lg border border-border bg-card";

type SectionProps = { bare?: boolean; className?: string };

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string | undefined;
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

// Cream title band at the top of every standalone page.
export function PageHeader({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-16 md:px-8 md:py-20">
        <p className={eyebrow}>{label}</p>
        <h1 className="max-w-[900px] text-4xl font-bold leading-[1.1] text-ink md:text-[52px]">
          {title}
        </h1>
        {children && <p className="max-w-[760px] text-xl font-light leading-normal">{children}</p>}
      </div>
    </section>
  );
}

// ---------- sections ----------

export function Hero() {
  return (
    // Dark banner with a soft orange-to-gold glow, matching the logo's colours.
    <section id="top" className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-56 size-[620px] rounded-full opacity-50 blur-[80px]"
        style={{ background: "radial-gradient(circle, var(--brand), transparent 65%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -left-48 size-[520px] rounded-full opacity-25 blur-[80px]"
        style={{ background: "radial-gradient(circle, var(--sun), transparent 65%)" }}
      />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-7 px-6 pb-16 pt-16 md:px-8 md:pb-[88px] md:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-sun">
          For growth-stage B2B tech companies across APJ
        </p>
        <h1 className="max-w-[900px] text-[40px] font-bold leading-[1.05] text-white sm:text-5xl md:text-[64px]">
          We fix growth problems{" "}
          <span className="bg-gradient-to-r from-brand to-sun bg-clip-text text-transparent">
            at the root.
          </span>
        </h1>
        <p className="max-w-[760px] text-xl font-light leading-normal text-ink-soft md:text-2xl">
          Four senior operators and one integrated system for strategy, revenue, talent and
          execution. Plus coaching for the leaders who have to carry the change.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <DiagnosticButton className="px-7 py-4 text-lg md:text-xl" />
          <Link
            to="/how-we-work"
            className="border-b-2 border-white px-2 py-4 text-lg font-medium text-white transition hover:border-sun hover:text-sun"
          >
            See how we work
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-10 gap-y-6 border-t border-ink-line pt-6">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-bold text-white md:text-4xl">{s.v}</p>
              <p className="mt-1 text-ink-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Still orange strip naming the four pillars, under the home banner.
export function PillarsStrip() {
  return (
    <div className="bg-brand">
      <ul className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-4 md:justify-between md:px-8">
        {pillars.map((p, i) => (
          <li key={p} className="flex items-center gap-5">
            {i > 0 && (
              <span aria-hidden="true" className="text-sun">
                ●
              </span>
            )}
            <span className="text-[15px] font-bold uppercase tracking-[0.18em] text-white md:text-base">
              {p}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Symptoms() {
  return (
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
  );
}

export function WhyOperators() {
  return (
    <section>
      <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-6 py-16 md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
        <h2 className={h2}>You don’t need more theory. You need operators.</h2>
        <div className="flex flex-col gap-4 text-lg leading-[1.6] md:text-xl">
          <p>
            We’re four senior executives who have built and fixed go-to-market engines across APJ,
            EMEA and North America.
          </p>
          <p>
            We don’t send junior consultants to learn on your time. You work with us directly,
            together or one at a time, depending on the size of the problem.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WhatWeFix({ bare, className = "bg-cream" }: SectionProps) {
  return (
    <Section id="fix" className={className}>
      {!bare && (
        <SectionHeading
          label="What we fix"
          title="Four places growth breaks. One team that sees all of them."
        />
      )}
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
  );
}

export function HowWeWork({ bare, className }: SectionProps) {
  return (
    <Section id="how" className={className}>
      {!bare && (
        <SectionHeading
          label="How we work"
          title="Three steps. You know the cost before you commit."
        />
      )}
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
  );
}

export function Pricing({ bare, className = "bg-cream" }: SectionProps) {
  return (
    <Section id="pricing" className={className}>
      {!bare && (
        <SectionHeading
          label="Engagements and pricing"
          title="Right-sized to the problem. Never padded."
        />
      )}
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
            For stalled growth, a full engine redesign or post-merger integration. Several operators
            work across all four pillars.
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
        You’ll know exactly what it costs before you commit. No hourly billing, no surprises. Prices
        in USD, plus applicable taxes.
      </p>
    </Section>
  );
}

export function Coaching({ className }: SectionProps) {
  return (
    <Section id="coaching" className={className}>
      <div className="flex max-w-[820px] flex-col gap-3">
        <p className={eyebrow}>Coaching that makes the change stick</p>
        <h2 className={h2}>Plans fail when the people carrying them don’t change.</h2>
        <p className="text-lg leading-[1.6] md:text-xl">
          Every engagement can include coaching for your leaders, built on our SPARQ method and
          shaped by what the diagnostic found.
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
  );
}

export function Operators({ bare, className = "bg-cream" }: SectionProps) {
  return (
    <Section id="operators" className={className}>
      {!bare && (
        <SectionHeading label="The operators" title="We’ve sat in the chairs you’re hiring for." />
      )}
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
          Our operators still hold senior roles, so we keep their names private for now. You’ll meet
          all four at the Diagnostic Council, and we share full profiles and references once we both
          want to take things further.
        </p>
      </div>
    </Section>
  );
}

export function Stories({ bare, className }: SectionProps) {
  return (
    <Section id="stories" className={className}>
      {!bare && <SectionHeading label="How the problems connect" title="Problems we’ve fixed" />}
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
  );
}

export function Faq({ bare, className = "bg-cream" }: SectionProps) {
  return (
    <section id="faq" className={cn("scroll-mt-4", className)}>
      <div className="mx-auto flex max-w-[900px] flex-col gap-8 px-6 py-16 md:px-8 md:py-24">
        {!bare && <h2 className={h2}>Questions buyers ask us</h2>}
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
  );
}

export function FinalCta({
  title = "Stop guessing. Ask the operators.",
  text = "Ten minutes on the questionnaire, then 60 to 90 minutes with all four of us. We’ll tell you what we see, what you need and exactly what it will cost.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-6 py-16 md:px-8 md:py-24">
        <h2 className="text-4xl font-bold leading-[1.1] text-white md:text-[52px]">{title}</h2>
        <p className="max-w-[720px] text-xl font-light leading-normal text-ink-soft md:text-[22px]">
          {text}
        </p>
        <DiagnosticButton className="px-7 py-4 text-lg md:text-xl" />
      </div>
    </section>
  );
}
