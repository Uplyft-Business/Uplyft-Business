import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_URL, SitePage } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

// DRAFT, not legal advice. It describes what the site does today: the Tally diagnostic form,
// GitHub Pages hosting, Google Fonts and YouTube links, with no analytics or ad cookies.
// Update it whenever a new tool starts collecting data (an email sign-up, analytics).
const sections = [
  {
    h: "What we collect",
    p: [
      "If you fill in the diagnostic questionnaire, we get what you type into it: usually your name, work email, role, some details about your company and the growth problem you describe.",
      "If you contact us, we get your message and how to reply to you.",
      "That’s it. We don’t run analytics or advertising cookies on this site, and we don’t follow you around the web.",
    ],
  },
  {
    h: "What we do with it",
    p: [
      "We use it to prepare for your Diagnostic Council, talk to you about your business and, if it makes sense, put together a proposal.",
      "Your answers are read by the four operators and nobody else. We don’t sell your details or pass them to anyone for marketing.",
    ],
  },
  {
    h: "Who else is involved",
    p: [
      "A few services help us run the site. Tally hosts the questionnaire and stores your answers. GitHub Pages hosts the site and, like any web host, keeps basic server logs such as IP addresses. Google Fonts supplies the typeface, so your browser connects to Google when a page loads. Our videos live on YouTube, which has its own privacy policy.",
    ],
  },
  {
    h: "How long we keep it",
    p: [
      "As long as we’re talking or working together, and a sensible time after that. If you’d like us to delete your details sooner, just ask.",
    ],
  },
  {
    h: "Your say",
    p: [
      "You can ask to see what we hold about you, correct it or have it deleted. Get in touch and we’ll sort it out.",
    ],
  },
];

function Privacy() {
  return (
    <SitePage title="Privacy">
      <section className="bg-cream">
        <div className="mx-auto flex max-w-[900px] flex-col gap-5 px-6 py-16 md:px-8 md:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Privacy
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] text-ink md:text-[52px]">
            What happens to your information
          </h1>
          <p className="text-xl font-light leading-normal">
            The short version: we only collect what you choose to tell us, we use it to help you,
            and we keep it to ourselves. Last updated 20 November 2026.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-[900px] flex-col px-6 py-12 md:px-8 md:py-16">
          {sections.map((s) => (
            <div key={s.h} className="flex flex-col gap-3 border-t border-border py-8">
              <h2 className="text-2xl font-medium text-ink">{s.h}</h2>
              {s.p.map((p) => (
                <p key={p} className="text-[17px] leading-[1.7]">
                  {p}
                </p>
              ))}
            </div>
          ))}
          <p className="border-t border-border pt-8 text-[17px] leading-[1.7]">
            Questions about any of this?{" "}
            <a href={CONTACT_URL} className="font-bold text-ink underline hover:text-brand">
              Get in touch
            </a>
            . Uplyft.Business is the business practice of Uplifyt.
          </p>
        </div>
      </section>
    </SitePage>
  );
}
