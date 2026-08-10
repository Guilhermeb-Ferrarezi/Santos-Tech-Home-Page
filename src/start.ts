import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

// Sentry server-side (@sentry/bun) foi REVERTIDO aqui: o build SSR roda sob
// @cloudflare/vite-plugin (ambiente unenv, emulando Workers), e o SDK chama
// process.binding internamente — não implementado no unenv, derrubava toda
// requisição SSR com 500 (site inteiro fora do ar). Cliente (browser) segue
// com Sentry normal via src/lib/sentry.ts; captura de erro do servidor por
// enquanto fica só no console.error + página de erro genérica.
const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
