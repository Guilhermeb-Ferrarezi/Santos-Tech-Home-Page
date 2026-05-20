const RESERVED_PATHS = new Set([
  "/",
  "/assets",
  "/cursos",
  "/contato",
  "/publicador",
  "/sobre",
  "/api",
]);

const VALID_ROUTE_PATTERN = /^\/[a-z0-9/_-]+$/i;

export function normalizePublishedRoutePath(input: string) {
  const trimmed = input.trim();

  if (!trimmed) {
    return { path: null as string | null, error: "Informe uma rota." };
  }

  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const strippedQuery = withLeadingSlash.split(/[?#]/, 1)[0] ?? withLeadingSlash;
  const normalized = strippedQuery.replace(/\/+/g, "/").replace(/\/$/, "") || "/";

  if (normalized === "/") {
    return { path: null as string | null, error: "A raiz / é reservada para o site principal." };
  }

  if (normalized.split("/").some((segment) => segment === "." || segment === "..")) {
    return { path: null as string | null, error: "A rota não pode conter . ou .." };
  }

  if (!VALID_ROUTE_PATTERN.test(normalized)) {
    return {
      path: null as string | null,
      error: "Use apenas letras, números, hífen, underscore e barras.",
    };
  }

  if (RESERVED_PATHS.has(normalized)) {
    return { path: null as string | null, error: "Essa rota já está reservada pelo app." };
  }

  return { path: normalized, error: null as string | null };
}

export function routePathToDirectoryName(routePath: string) {
  return routePath
    .split("/")
    .filter(Boolean)
    .join("/");
}
