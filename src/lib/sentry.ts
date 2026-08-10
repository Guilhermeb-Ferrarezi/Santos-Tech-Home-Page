import * as Sentry from "@sentry/react";

/**
 * Inicializa o Sentry no navegador se VITE_SENTRY_DSN estiver setada. Guard
 * de `typeof window` porque este módulo é importado tanto no client quanto
 * no server (SSR do TanStack Start) — no server é sempre no-op.
 */
export function initClientSentry() {
  if (typeof window === "undefined") return;
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  if (!dsn) return;
  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
  });
}
