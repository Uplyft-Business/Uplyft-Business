import { useState } from "react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import logoLight from "@/assets/logo-light.svg";
import { TallyPopupLink } from "@/components/TallyPopup";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { YOUTUBE_URL } from "@/lib/resources";
import { cn } from "@/lib/utils";

export const DIAGNOSTIC_FORM_ID = "yXXWpW";
const COACHING_URL = "https://uplifyt.com/individual/home";
const CONTACT_URL = "https://uplifyt.com/business/contact-us";

// Sections of the home page. Links go through the router so they work from any page.
const sectionLinks = [
  { hash: "fix", label: "What we fix" },
  { hash: "how", label: "How we work" },
  { hash: "pricing", label: "Pricing" },
  { hash: "operators", label: "Operators" },
  { hash: "faq", label: "FAQ" },
];

const linkClass = "text-ink no-underline transition hover:text-brand";
const coachingClass = "text-muted-foreground no-underline transition hover:text-brand";
const menuItemClass = "cursor-pointer px-3 py-2 text-[15px] font-medium text-ink focus:text-brand";

export function DiagnosticButton({ className }: { className?: string }) {
  return (
    <TallyPopupLink
      formId={DIAGNOSTIC_FORM_ID}
      className={cn(
        "inline-block rounded-lg bg-brand font-bold text-white transition hover:opacity-90",
        className,
      )}
    >
      Start the free diagnostic
    </TallyPopupLink>
  );
}

function ResourcesMenu() {
  const onResources = useMatchRoute()({ to: "/resources" });

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={cn(
          linkClass,
          "flex items-center gap-1 outline-none",
          onResources && "text-brand",
        )}
      >
        Resources <ChevronDown aria-hidden="true" className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-52 rounded-lg p-1.5">
        <DropdownMenuItem asChild className={menuItemClass}>
          <Link to="/resources">All resources</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className={menuItemClass}>
          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
            YouTube channel <ExternalLink aria-hidden="true" className="ml-auto size-4" />
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-5 md:px-8">
        <Link to="/" hash="top" aria-label="Uplyft.Business home" className="shrink-0">
          <img src={logo} alt="Uplyft.Business" className="block h-9 w-auto md:h-11" />
        </Link>
        <nav
          aria-label="Main"
          className="hidden items-center gap-5 whitespace-nowrap font-medium xl:flex"
        >
          {sectionLinks.map((l) => (
            <Link key={l.hash} to="/" hash={l.hash} className={linkClass}>
              {l.label}
            </Link>
          ))}
          <ResourcesMenu />
          <a href={COACHING_URL} className={coachingClass}>
            Personal coaching
          </a>
          <DiagnosticButton className="px-[22px] py-3 text-lg" />
        </nav>
        <button
          type="button"
          className="-mr-2 p-2 text-ink xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="flex flex-col gap-1 border-t border-border px-6 pb-6 pt-2 font-medium xl:hidden"
        >
          {sectionLinks.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className={cn(linkClass, "py-2")}
              onClick={close}
            >
              {l.label}
            </Link>
          ))}
          <p className="py-2 text-ink">Resources</p>
          <Link to="/resources" className={cn(linkClass, "py-2 pl-4")} onClick={close}>
            All resources
          </Link>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(linkClass, "flex items-center gap-2 py-2 pl-4")}
          >
            YouTube channel <ExternalLink aria-hidden="true" className="size-4" />
          </a>
          <a href={COACHING_URL} className={cn(coachingClass, "py-2")}>
            Personal coaching
          </a>
          <DiagnosticButton className="mt-3 self-start px-[22px] py-3 text-lg" />
        </nav>
      )}
    </header>
  );
}

function SiteFooter() {
  const footerLink = "text-ink-soft underline transition hover:text-brand";

  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-6 py-10 md:px-8">
        <img src={logoLight} alt="Uplyft.Business" className="block h-10 w-auto" />
        <p className="text-[15px] text-ink-muted">
          Uplyft.Business is the business practice of Uplifyt. © 2026
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-[15px]">
          <Link to="/resources" className={footerLink}>
            Resources
          </Link>
          <a href={COACHING_URL} className={footerLink}>
            Personal coaching
          </a>
          <a href={CONTACT_URL} className={footerLink}>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

// Header and footer shared by every page.
export function SitePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white font-sans text-body">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
