import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { TallyForm } from "@/components/TallyForm";
import { CONTACT_EMAIL, TALLY_FORM_ID } from "@/components/site/config";

export const Route = createFileRoute("/book")({
  component: Book,
});

const steps = [
  { t: "Tell us the problem", d: "A few lines is enough. We’ll get back to you to set a time." },
  { t: "Meet the Council", d: "60–90 minutes with all four operators. No pitch — just diagnosis." },
  {
    t: "Get a straight answer",
    d: "What’s broken, which lever to pull first, and exactly what it costs.",
  },
];

function Book() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Book the Diagnostic Council"
        title={
          <>
            Stop guessing. <span className="grad-text">Ask the operators.</span>
          </>
        }
      >
        Book a 90-minute Diagnostic Session with the Council. We’ll tell you what we see, what you
        need, and exactly what it will cost.
      </PageHero>

      <section>
        <div className="wrap book">
          <div className="rv">
            <h2>What happens next</h2>
            <ul className="timeline">
              {steps.map((s, i) => (
                <li key={s.t}>
                  <div className="dot">{i + 1}</div>
                  <div>
                    <b>{s.t}</b>
                    <p className="muted">{s.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="email-line muted">
              Prefer email? Write to us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
          <div className="form-card rv">
            <TallyForm formId={TALLY_FORM_ID} title="Book a Diagnostic Session" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
