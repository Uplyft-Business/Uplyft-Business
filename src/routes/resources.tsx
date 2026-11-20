import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink, FileText, Play } from "lucide-react";
import { DiagnosticButton, SitePage } from "@/components/SiteLayout";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  groups,
  resourceFileUrl,
  resources,
  YOUTUBE_URL,
  type Group,
  type Resource,
} from "@/lib/resources";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources")({
  component: Resources,
});

type PdfResource = Extract<Resource, { kind: "pdf" }>;

const kinds = {
  video: { label: "Video", icon: Play, action: "Watch on YouTube" },
  pdf: { label: "PDF", icon: FileText, action: "View" },
  template: { label: "Template", icon: Download, action: "Download" },
} as const;

const cardClass =
  "group flex h-full w-full flex-col gap-3 rounded-lg border border-border bg-card p-7 text-left transition hover:border-brand";

function CardBody({ resource }: { resource: Resource }) {
  const { label, icon: Icon, action } = kinds[resource.kind];

  return (
    <>
      <p className="flex items-center gap-2 text-[15px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
        <Icon aria-hidden="true" className="size-4 text-brand" />
        {label}
      </p>
      <h3 className="text-[22px] font-medium text-ink">{resource.title}</h3>
      <p className="flex-1 leading-[1.6]">{resource.description}</p>
      {"from" in resource && resource.from && (
        <p className="text-[15px] text-muted-foreground">Goes with the {resource.from}</p>
      )}
      <p className="flex items-center gap-1.5 font-bold text-ink group-hover:text-brand">
        {action}
        {resource.kind === "video" && <ExternalLink aria-hidden="true" className="size-4" />}
      </p>
    </>
  );
}

function ResourceCard({
  resource,
  onView,
}: {
  resource: Resource;
  onView: (r: PdfResource) => void;
}) {
  switch (resource.kind) {
    case "video":
      return (
        <a href={resource.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
          <CardBody resource={resource} />
        </a>
      );
    case "pdf":
      return (
        <button type="button" className={cardClass} onClick={() => onView(resource)}>
          <CardBody resource={resource} />
        </button>
      );
    case "template":
      return (
        <a href={resourceFileUrl(resource.file)} download className={cardClass}>
          <CardBody resource={resource} />
        </a>
      );
  }
}

// Phone browsers often can't show a PDF inside a page, so the viewer always offers a new tab too.
function PdfViewer({ pdf, onClose }: { pdf: PdfResource | null; onClose: () => void }) {
  const newTabLink = useRef<HTMLAnchorElement>(null);

  return (
    <Dialog open={pdf !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="flex h-[90vh] max-w-5xl flex-col gap-0 overflow-hidden p-0">
        {pdf && (
          <>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-border py-4 pl-6 pr-12">
              <DialogTitle className="text-lg font-medium text-ink">{pdf.title}</DialogTitle>
              <DialogDescription className="sr-only">{pdf.description}</DialogDescription>
              <a
                ref={newTabLink}
                href={resourceFileUrl(pdf.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-1.5 text-sm font-medium text-ink underline hover:text-brand"
              >
                Open in new tab <ExternalLink aria-hidden="true" className="size-4" />
              </a>
            </div>
            <iframe
              src={resourceFileUrl(pdf.file)}
              title={pdf.title}
              className="w-full flex-1 border-0"
              // The browser's PDF viewer takes focus when it loads, which stops Escape closing
              // the dialog; hand focus back to the dialog.
              onLoad={() => newTabLink.current?.focus()}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

type Filter = "all" | Group;

function Resources() {
  const [viewing, setViewing] = useState<PdfResource | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  const shown = groups.filter((g) => filter === "all" || g.id === filter);
  const count = (id: Filter) =>
    id === "all" ? resources.length : resources.filter((r) => r.group === id).length;

  return (
    <SitePage title="Free checklists, frameworks and videos">
      <section className="bg-cream">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-16 md:px-8 md:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Resources
          </p>
          <h1 className="max-w-[900px] text-4xl font-bold leading-[1.1] text-ink md:text-[52px]">
            Checklists, frameworks and videos from our operators.
          </h1>
          <p className="max-w-[760px] text-xl font-light leading-normal">
            Free and practical. Each one is something we’d actually use with a client, and most go
            with an episode of Move by Move.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-6 py-16 md:px-8 md:py-20">
          <div role="tablist" aria-label="Show" className="flex flex-wrap gap-2">
            {(["all", ...groups.map((g) => g.id)] as Filter[]).map((id) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                onClick={() => setFilter(id)}
                className={cn(
                  "rounded-lg border px-4 py-2 font-medium transition",
                  filter === id
                    ? "border-ink bg-ink text-white"
                    : "border-border bg-white text-ink hover:border-brand",
                )}
              >
                {id === "all" ? "All" : groups.find((g) => g.id === id)?.title}{" "}
                <span className={filter === id ? "text-ink-muted" : "text-muted-foreground"}>
                  {count(id)}
                </span>
              </button>
            ))}
          </div>

          {shown.map((g) => {
            const items = resources.filter((r) => r.group === g.id);
            return (
              <div key={g.id} className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 border-b border-border pb-4">
                  <h2 className="text-3xl font-bold text-ink">{g.title}</h2>
                  <p className="text-lg">{g.intro}</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((r) => (
                    <ResourceCard key={r.title} resource={r} onView={setViewing} />
                  ))}
                  {items.length === 0 && (
                    <p className="rounded-lg border border-dashed border-border p-7 leading-[1.6]">
                      The first {g.title.toLowerCase()} are on the way. They come out with new
                      episodes, so{" "}
                      <a
                        href={YOUTUBE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-ink underline hover:text-brand"
                      >
                        subscribe on YouTube
                      </a>{" "}
                      to hear when they land.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-6 py-16 md:px-8 md:py-20">
          <h2 className="text-3xl font-bold leading-[1.1] text-white md:text-[44px]">
            Rather work through it with us?
          </h2>
          <p className="max-w-[720px] text-xl font-light leading-normal text-ink-soft">
            These tools show how we think. In the free diagnostic, all four of us look at your
            business and tell you what we’d fix first.
          </p>
          <DiagnosticButton className="px-7 py-4 text-lg md:text-xl" />
        </div>
      </section>

      <PdfViewer pdf={viewing} onClose={() => setViewing(null)} />
    </SitePage>
  );
}
