// Cliente de sessão — consome a API central de auth do ecossistema
// (api.santos-tech.com), a mesma usada por auth-web e pay-web. O cookie
// httpOnly `access_token` já é enviado automaticamente (domínio pai
// `.santos-tech.com`); só precisamos de `credentials: "include"`.

const API_URL = "https://api.santos-tech.com";
export const AUTH_URL = "https://auth.santos-tech.com";
export const PORTAL_URL = "https://portal.santos-tech.com";

export type SessionUser = {
  id: number;
  email: string;
  username: string | null;
  name: string;
  avatarUrl: string | null;
};

export type MeResponse = { user: SessionUser };

export class ApiError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function fetchMe(): Promise<MeResponse> {
  const res = await fetch(`${API_URL}/auth/me`, { credentials: "include" });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new ApiError(res.status, data?.code ?? "UNKNOWN", data?.message ?? "Não autenticado");
  }
  return data as MeResponse;
}

// access_token dura 2h; refresh_token dura 7d. Um 401 pode ser só o
// access_token expirado com sessão ainda válida — mesmo tratamento que
// pay-web faz (apps/pay-web/src/lib/api.ts): tenta /auth/refresh uma vez
// antes de considerar "deslogado" de verdade.
export async function me(): Promise<MeResponse> {
  try {
    return await fetchMe();
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) {
      const refreshed = await fetch(`${API_URL}/auth/refresh`, {
        method: "POST",
        credentials: "include",
      });
      if (refreshed.ok) return fetchMe();
    }
    throw err;
  }
}

export async function logout(): Promise<void> {
  await fetch(`${API_URL}/auth/logout`, { method: "POST", credentials: "include" });
}

export function loginUrl(redirectTo?: string): string {
  const target = redirectTo ?? (typeof window !== "undefined" ? window.location.href : undefined);
  return target ? `${AUTH_URL}/?redirect=${encodeURIComponent(target)}` : AUTH_URL;
}
