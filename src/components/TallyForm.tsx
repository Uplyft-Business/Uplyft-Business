import { useEffect } from "react";

const EMBED_SCRIPT = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

// Without the embed script the iframe never gets a src, so point it at the form directly.
function loadWithoutScript() {
  document.querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])").forEach((el) => {
    el.src = el.dataset["tallySrc"] ?? "";
  });
}

export function TallyForm({ formId, title }: { formId: string; title: string }) {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
      return;
    }
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    script.onload = () => window.Tally?.loadEmbeds();
    script.onerror = loadWithoutScript;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      loading="lazy"
      width="100%"
      height={500}
      title={title}
      className="border-0"
    />
  );
}
