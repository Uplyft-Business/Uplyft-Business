import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import logo from "@/assets/logo-dark.svg";
import { CONTACT_EMAIL, YOUTUBE_URL } from "./config";
import { Menu } from "./icons";

const tabs = [
  { to: "/", label: "Home" },
  { to: "/how-we-work", label: "How we work" },
  { to: "/operators", label: "The operators" },
  { to: "/client-journeys", label: "Client journeys" },
  { to: "/resources", label: "Resources" },
  { to: "/move-by-move", label: "Move by Move", live: true },
] as const;

// Browser-tab title per page. index.html holds the home title for first load and link previews.
const SITE_NAME = "Uplyft Business";
const pageTitles: Record<string, string> = {
  "/": `${SITE_NAME} — Senior operators for growth`,
  "/how-we-work": `How we work · ${SITE_NAME}`,
  "/operators": `The operators · ${SITE_NAME}`,
  "/client-journeys": `Client journeys · ${SITE_NAME}`,
  "/resources": `Free checklists & frameworks · ${SITE_NAME}`,
  "/move-by-move": `Move by Move on YouTube · ${SITE_NAME}`,
  "/book": `Book the Diagnostic Council · ${SITE_NAME}`,
  "/privacy": `Privacy policy · ${SITE_NAME}`,
};

// Fades in every .rv element as it scrolls into view. Re-runs on each page change.
function useScrollReveal(pathname: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".site .rv:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollReveal(pathname);
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    // Trailing slashes and a GitHub Pages base path shouldn't change the lookup.
    const key = Object.keys(pageTitles).find((p) => p !== "/" && pathname.endsWith(p)) ?? "/";
    document.title = pageTitles[key] ?? SITE_NAME;
  }, [pathname]);

  return (
    <div className="site">
      <header className="nav">
        <div className="wrap">
          <Link to="/" className="logo" aria-label="Uplyft Business home">
            <img src={logo} alt="Uplyft Business" />
          </Link>
          <nav className={`tabs${menuOpen ? " open" : ""}`} aria-label="Main">
            {tabs.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="tab"
                activeProps={{ className: "active" }}
                activeOptions={{ exact: true }}
              >
                {"live" in t && <span className="live-dot" />}
                {t.label}
              </Link>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Link to="/book" className="btn btn-primary book-top">
              Book now
            </Link>
            <button
              className="burger"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <main key={pathname} className="page">
        {children}
      </main>

      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <img src={logo} alt="Uplyft Business" />
              <p>
                Senior operators for growth. Strategy, Revenue, Talent and Execution — one
                integrated system.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <Link to="/how-we-work">How we work</Link>
              <Link to="/operators">The operators</Link>
              <Link to="/client-journeys">Client journeys</Link>
              <Link to="/resources">Resources</Link>
            </div>
            <div>
              <h4>Connect</h4>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
                Move by Move on YouTube
              </a>
              <Link to="/book">Book the Council</Link>
              <a href={`mailto:${CONTACT_EMAIL}`}>Email us</a>
            </div>
          </div>
          <div className="copy">
            <span>
              © 2026 Uplyft Business · <Link to="/privacy">Privacy policy</Link>
            </span>
            <span>Powered by the Uplyft SPARQ Framework™</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Dark banner at the top of every inner page.
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="page-hero">
      <div className="blob b1" />
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}

// Orange "book the council" band used at the bottom of inner pages.
export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-band rv">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link to="/book" className="btn btn-dark">
            Book the Council →
          </Link>
        </div>
      </div>
    </section>
  );
}
