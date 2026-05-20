import path from "node:path";

import app from "../dist/server/index.js";

type WorkerApp = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const worker = app as unknown as WorkerApp;
const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOST ?? "0.0.0.0";
const clientAssetsDir = path.resolve(import.meta.dir, "../dist/client");

async function serveStaticAsset(request: Request) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return null;
  }

  const url = new URL(request.url);
  if (!url.pathname.startsWith("/assets/")) {
    return null;
  }

  const assetPath = path.resolve(clientAssetsDir, `.${url.pathname}`);
  if (!assetPath.startsWith(path.join(clientAssetsDir, "assets"))) {
    return new Response("Not Found", { status: 404 });
  }

  const file = Bun.file(assetPath);
  if (!(await file.exists())) {
    return new Response("Not Found", { status: 404 });
  }

  const headers = new Headers();
  headers.set("Cache-Control", "public, max-age=31536000, immutable");
  return new Response(file, { headers });
}

Bun.serve({
  port,
  hostname,
  async fetch(request) {
    const staticResponse = await serveStaticAsset(request);
    if (staticResponse) {
      return staticResponse;
    }

    return worker.fetch(
      request,
      {},
      {
        waitUntil: (promise: Promise<unknown>) => {
          promise.catch((error) => console.error(error));
        },
      },
    );
  },
});
