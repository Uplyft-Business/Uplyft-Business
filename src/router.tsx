import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Matches Vite's `base`, so routes resolve when served from a GitHub Pages subpath.
    basepath: import.meta.env.BASE_URL,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
