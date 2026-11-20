import { useEffect } from "react";

const EMBED_SCRIPT = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: { openPopup: (formId: string, options?: { layout?: "modal"; width?: number }) => void };
  }
}

function loadEmbedScript() {
  if (window.Tally || document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
  const script = document.createElement("script");
  script.src = EMBED_SCRIPT;
  script.async = true;
  document.body.appendChild(script);
}

// Opens the form in Tally's popup. Until the embed script loads (or if it's blocked),
// the link falls through to the hosted form in a new tab.
export function TallyPopupLink({
  formId,
  className,
  children,
}: {
  formId: string;
  className?: string;
  children: React.ReactNode;
}) {
  useEffect(loadEmbedScript, []);

  return (
    <a
      href={`https://tally.so/r/${formId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        if (!window.Tally) return;
        e.preventDefault();
        window.Tally.openPopup(formId, { layout: "modal", width: 700 });
      }}
    >
      {children}
    </a>
  );
}
