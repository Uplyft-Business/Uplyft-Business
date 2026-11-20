import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink, FileText, Play } from "lucide-react";
import { SitePage } from "@/components/SiteLayout";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { resourceFileUrl, resources, type Resource } from "@/lib/resources";

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
      <h2 className="text-[22px] font-medium text-ink">{resource.title}</h2>
      <p className="flex-1 leading-[1.6]">{resource.description}</p>
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

function Resources() {
  const [viewing, setViewing] = useState<PdfResource | null>(null);

  return (
    <SitePage>
      <section className="bg-cream">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-16 md:px-8 md:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Resources
          </p>
          <h1 className="max-w-[900px] text-4xl font-bold leading-[1.1] text-ink md:text-[52px]">
            Guides, templates and videos from our operators.
          </h1>
          <p className="max-w-[760px] text-xl font-light leading-normal">
            Practical material for leaders working on strategy, revenue, talent and execution.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1200px] gap-5 px-6 py-16 sm:grid-cols-2 md:px-8 md:py-24 lg:grid-cols-3">
          {resources.map((r) => (
            <ResourceCard key={r.title} resource={r} onView={setViewing} />
          ))}
        </div>
      </section>

      <PdfViewer pdf={viewing} onClose={() => setViewing(null)} />
    </SitePage>
  );
}
