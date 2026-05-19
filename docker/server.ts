import app from "../dist/server/index.js";

type WorkerApp = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const worker = app as unknown as WorkerApp;
const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOST ?? "0.0.0.0";

Bun.serve({
  port,
  hostname,
  fetch(request) {
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
