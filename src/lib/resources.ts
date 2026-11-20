// Everything listed on /resources, in display order.
// To add a PDF or template: put the file in public/resources/ and add an entry with its
// file name. PDFs open in a viewer on the page; templates download.
export type Resource =
  | { kind: "video"; title: string; description: string; url: string }
  | { kind: "pdf"; title: string; description: string; file: string }
  | { kind: "template"; title: string; description: string; file: string };

export const YOUTUBE_URL = "https://www.youtube.com/@MoveByMoveGTM";

export const resources: Resource[] = [
  {
    kind: "video",
    title: "Move by Move GTM",
    description:
      "Our YouTube channel. Videos from the operators on building and fixing go-to-market engines.",
    url: YOUTUBE_URL,
  },
];

// public/ files are served under the site's base path, which is /<repo>/ on GitHub Pages.
export const resourceFileUrl = (file: string) => `${import.meta.env.BASE_URL}resources/${file}`;
