// Everything listed on /resources, in display order within each group.
// To add a PDF or template: put the file in public/downloads/ and add an entry with its
// file name and group. PDFs open in a viewer on the page; templates download.
// (Not public/resources/: a folder with the same name as the /resources page makes
// GitHub Pages redirect the page to the folder.)
export type Group = "checklist" | "framework" | "video";

type FileResource = {
  group: "checklist" | "framework";
  title: string;
  description: string;
  file: string;
  from?: string; // the Move by Move episode it goes with
};

export type Resource =
  | { kind: "video"; group: "video"; title: string; description: string; url: string }
  | ({ kind: "pdf" } & FileResource)
  | ({ kind: "template" } & FileResource);

export const YOUTUBE_URL = "https://www.youtube.com/@MoveByMoveGTM";

// Headings for each group on /resources, in page order.
export const groups: { id: Group; title: string; intro: string }[] = [
  {
    id: "checklist",
    title: "Checklists",
    intro: "Quick checks to run with your team when something feels off.",
  },
  {
    id: "framework",
    title: "Frameworks",
    intro: "Step-by-step ways to work through a problem, start to finish.",
  },
  {
    id: "video",
    title: "Videos",
    intro: "How companies won their market, one move at a time.",
  },
];

export const resources: Resource[] = [
  {
    kind: "pdf",
    group: "framework",
    title: "Easy to check. Easy to share.",
    description:
      "Pick the one question your buyers always ask, answer it in public, and make the answer good enough that they forward it to a colleague. About 30 minutes.",
    file: "move-by-move-easy-to-check-easy-to-share.pdf",
    from: "Zerodha episode",
  },
  {
    kind: "video",
    group: "video",
    title: "Move by Move GTM",
    description:
      "Our YouTube channel. Videos from the operators on building and fixing go-to-market engines.",
    url: YOUTUBE_URL,
  },
];

// public/ files are served under the site's base path, which is /<repo>/ on GitHub Pages.
export const resourceFileUrl = (file: string) => `${import.meta.env.BASE_URL}downloads/${file}`;
