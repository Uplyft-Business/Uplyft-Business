import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { CONTACT_EMAIL } from "@/components/site/config";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

// DRAFT: describes what the site does today (Tally form, email, GitHub Pages, Google Fonts,
// YouTube links, no analytics). Update it whenever you add a tool that collects data,
// such as an email sign-up or analytics, and have it reviewed before relying on it.
function Privacy() {
  const email = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy policy">
        Last updated 20 November 2026.
      </PageHero>

      <section>
        <div className="wrap legal">
          <p>
            Uplyft Business (“we”, “us”) runs this website. This page explains what personal
            information we collect through it, why, and what you can ask us to do with it. If you
            have a question, email us at {email}.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <b>When you book a Diagnostic Session.</b> The booking form asks for your name, work
              email, job title, company name, company size and a short description of the problem
              you want help with.
            </li>
            <li>
              <b>When you email us.</b> Your email address and whatever you include in your message.
            </li>
            <li>
              <b>When you visit.</b> We don’t use analytics or advertising cookies, and we don’t
              track you across other sites. Our hosting provider keeps standard server logs, such as
              IP addresses, to run and secure the site.
            </li>
          </ul>

          <h2>How we use it</h2>
          <p>
            We use your details only to reply to you, arrange and prepare for the session you asked
            for, and follow up about working together. We don’t sell your information or share it
            for anyone else’s marketing.
          </p>

          <h2>Services we rely on</h2>
          <ul>
            <li>
              <b>Tally</b> runs our booking form and stores what you submit.
            </li>
            <li>
              <b>GitHub Pages</b> hosts the website.
            </li>
            <li>
              <b>Google Fonts</b> supplies the typefaces, so your browser connects to Google when
              the page loads.
            </li>
            <li>
              <b>YouTube</b> hosts the Move by Move videos. Links to it take you to YouTube, where
              Google’s own privacy policy applies.
            </li>
          </ul>
          <p>Each of these has its own privacy policy covering how it handles data.</p>

          <h2>How long we keep it</h2>
          <p>
            We keep your details for as long as we need them to talk with you about your enquiry or
            engagement. You can ask us to delete them at any time.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to show you the information we hold about you, correct it, or delete it.
            Email {email} and we’ll handle your request promptly.
          </p>

          <h2>Changes</h2>
          <p>
            If we change how we handle personal information, we’ll update this page and the date at
            the top.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
