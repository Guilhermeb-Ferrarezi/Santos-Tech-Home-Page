import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}


async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

// Prefixo das server functions do TanStack Start (TSS_SERVER_FN_BASE = "/_serverFn/"
// no build). O site não usa createServerFn (grep em src/ volta vazio), então nada
// aqui é legítimo: é robô varrendo URL. Sem este atalho o handler lança "Server
// function info not found" e responde 500 com a página de erro, sujando o log
// (lacuna-infra-04). Se um dia o app passar a usar createServerFn, remova isto.
const SERVER_FN_PREFIX = "/_serverFn";

function isServerFnPath(pathname: string): boolean {
  return pathname === SERVER_FN_PREFIX || pathname.startsWith(`${SERVER_FN_PREFIX}/`);
}

// O handler do TanStack Start só renderiza a página quando o Accept contém
// "text/html" ou "*/*" (e compara sensível a maiúsculas). Qualquer outro valor
// (text/markdown de agentes de IA, application/json, text/plain, text/*,
// TEXT/HTML) virava HTTP 500 "Only HTML requests are supported here" em todas
// as rotas, e 5xx faz o Google reduzir o rastreio (lacuna-infra-04 =
// lacuna-geo-03). O RFC 9110 §12.5.1 permite ignorar o Accept quando não há
// representação compatível; como o site só tem HTML, servimos a página em HTML
// (mais útil que um 406 pra quem pediu markdown). Fica aqui, e não no
// docker/server.ts, pra valer em todo lugar onde a app roda (container Bun,
// vite dev/preview e Worker). Não adicionar "Vary: Accept": a resposta não
// muda com o Accept e o header só fragmentaria o cache da borda.
function normalizeAcceptHeader(request: Request): Request {
  if (request.method !== "GET" && request.method !== "HEAD") return request;
  const accept = request.headers.get("accept");
  if (!accept) return request; // sem Accept o handler já assume */*

  const lower = accept.toLowerCase();
  const acceptsHtml = lower
    .split(",")
    .some((part) => part.trim().startsWith("text/html") || part.trim().startsWith("*/*"));
  const normalized = acceptsHtml ? lower : "text/html";
  if (normalized === accept) return request;

  const headers = new Headers(request.headers);
  headers.set("accept", normalized);
  return new Request(request, { headers });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    if (isServerFnPath(new URL(request.url).pathname)) {
      return new Response("Not Found", {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(normalizeAcceptHeader(request), env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
