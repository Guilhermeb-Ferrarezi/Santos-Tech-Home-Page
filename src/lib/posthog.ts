import posthog from "posthog-js";

/**
 * Inicializa o PostHog no navegador se VITE_POSTHOG_KEY estiver setada. Guard
 * de `typeof window` porque este módulo é importado tanto no client quanto
 * no server (SSR do TanStack Start) — no server é sempre no-op.
 */
export function initClientPostHog() {
  if (typeof window === "undefined") return;
  const key = import.meta.env.VITE_POSTHOG_KEY;
  if (!key) return;
  posthog.init(key, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only",
  });
}
