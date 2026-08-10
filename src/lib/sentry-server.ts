import * as Sentry from "@sentry/bun";

/**
 * Inicializa o Sentry no servidor (SSR, roda em Bun) se SENTRY_DSN estiver
 * setada. Guard de `typeof window` — nunca deve rodar no bundle do client.
 */
export function initServerSentry() {
  if (typeof window !== "undefined") return;
  const dsn = process.env.SENTRY_DSN;
  if (!dsn) return;
  Sentry.init({
    dsn,
    environment: process.env.SENTRY_ENVIRONMENT || "production",
  });
}

export { Sentry };
