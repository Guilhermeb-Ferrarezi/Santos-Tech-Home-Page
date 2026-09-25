import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { initClientSentry } from "@/lib/sentry";
import { initClientPostHog } from "@/lib/posthog";

initClientSentry();
initClientPostHog();

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Pré-carrega o JS da rota quando o visitante passa o mouse/toca num <Link>
    // (performance-cwv-12). Só baixa os chunks — não navega nem muda o history.
    // Não gera $pageview: o PostHog só registra pageview no carregamento da
    // página e na decisão de consentimento (src/lib/posthog.ts). As rotas não
    // têm loader, então o preload não tem efeito colateral.
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
