import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart(),
    tailwindcss(),
    tsconfigPaths(),
    viteReact(),
    // Sobe sourcemap pro Sentry (stacktrace legível em produção, código
    // minificado) e apaga os .map do build final. Sem SENTRY_AUTH_TOKEN (dev
    // local) não faz nada.
    sentryVitePlugin({
      org: "santos-techrp",
      project: "home-page",
      authToken: process.env.SENTRY_AUTH_TOKEN,
      disable: !process.env.SENTRY_AUTH_TOKEN,
      sourcemaps: { filesToDeleteAfterUpload: ["**/*.map"] },
    }),
  ],
  build: {
    // Só gera sourcemap quando vai poder subir+apagar (token presente) — sem
    // isso, um .map ficaria público no dist (código fonte exposto).
    sourcemap: !!process.env.SENTRY_AUTH_TOKEN,
  },
});
