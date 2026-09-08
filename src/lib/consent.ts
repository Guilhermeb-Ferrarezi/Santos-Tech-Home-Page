/**
 * Consentimento de cookies (LGPD — Lei nº 13.709/2018).
 *
 * Fonte da verdade da escolha do visitante. Guarda a decisão em `localStorage`
 * (cookie essencial: sem ele o banner reapareceria a cada visita) e avisa quem
 * depende dela — o banner, o rodapé e o PostHog.
 *
 * Regras que este módulo garante:
 * - **Nada de análise antes do "Aceitar".** O PostHog inicia opted-out e só
 *   passa a gravar/enviar depois que `setConsent(true)` roda (ver `posthog.ts`).
 * - **Recusar é tão fácil quanto aceitar** — um clique, mesmo peso visual.
 * - **Revogável a qualquer momento** pelo link do rodapé (art. 8º, §5º).
 *
 * Só existe uma categoria opcional (`analytics`) porque o site só tem um uso
 * opcional: entender navegação. Não há remarketing, pixel de anúncio nem venda
 * de dados — inventar categorias que não existem seria mentir no banner.
 */

import { useSyncExternalStore } from "react";

export const CONSENT_STORAGE_KEY = "st_cookie_consent";

/** Suba a versão quando mudar o que é coletado — invalida o consentimento antigo. */
export const CONSENT_VERSION = 1;

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Validade da decisão. Consentimento não é para sempre: passado o prazo, a
 * escolha expira e o banner pergunta de novo.
 *
 * Prazos diferentes de propósito, seguindo a prática de mercado (e a
 * recomendação da CNIL, referência que a ANPD costuma acompanhar): quem aceitou
 * é reconfirmado em 1 ano — mexer antes disso só arrisca perder um "sim" que já
 * temos; quem recusou é reperguntado em 6 meses, porque a recusa muitas vezes é
 * reflexo da primeira visita e a pessoa que hoje já conhece a escola decide
 * diferente. Reperguntar em prazo menor que isso vira insistência: irrita e a
 * ANPD trata assédio de consentimento como consentimento viciado.
 */
const ACCEPTED_TTL_MS = 365 * DAY_MS;
const REJECTED_TTL_MS = 180 * DAY_MS;

/** Evento de janela disparado quando a decisão muda (mesma aba). */
const CONSENT_CHANGE_EVENT = "st:consent-change";

/** Evento de janela que pede ao banner para reabrir em modo "preferências". */
export const CONSENT_OPEN_EVENT = "st:consent-open";

export type ConsentDecision = "accepted" | "rejected";

export type ConsentRecord = {
  version: number;
  /** Cookies de análise (PostHog). Os essenciais não são opcionais. */
  analytics: boolean;
  decision: ConsentDecision;
  /** ISO 8601 — prova de quando o consentimento foi coletado. */
  decidedAt: string;
};

/**
 * `undefined` = ainda não lido do storage. O cache existe porque
 * `useSyncExternalStore` exige um snapshot referencialmente estável.
 */
let cached: ConsentRecord | null | undefined;

function hasExpired(decidedAt: string, analytics: boolean): boolean {
  const timestamp = Date.parse(decidedAt);
  // Registro antigo sem data legível: trata como válido em vez de perguntar de
  // novo sem necessidade (o pior caso é uma decisão durar mais que o TTL).
  if (Number.isNaN(timestamp)) return false;
  const age = Date.now() - timestamp;
  return age > (analytics ? ACCEPTED_TTL_MS : REJECTED_TTL_MS);
}

function readFromStorage(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const record = parsed as Partial<ConsentRecord>;
    // Versão diferente = o que coletamos mudou; pede consentimento de novo.
    if (record.version !== CONSENT_VERSION) return null;
    if (typeof record.analytics !== "boolean") return null;
    const decidedAt = typeof record.decidedAt === "string" ? record.decidedAt : "";
    if (hasExpired(decidedAt, record.analytics)) return null;
    return {
      version: CONSENT_VERSION,
      analytics: record.analytics,
      decision: record.analytics ? "accepted" : "rejected",
      decidedAt,
    };
  } catch {
    // localStorage bloqueado (modo privado, cookies de terceiros off) — trata
    // como "ainda não decidiu" em vez de quebrar a página.
    return null;
  }
}

function notify() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

/** Decisão atual do visitante, ou `null` se ele ainda não escolheu. */
export function getConsent(): ConsentRecord | null {
  if (cached === undefined) cached = readFromStorage();
  return cached;
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics === true;
}

/** Grava a decisão e avisa todo mundo que escuta (banner, rodapé, PostHog). */
export function setConsent(analytics: boolean): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    analytics,
    decision: analytics ? "accepted" : "rejected",
    decidedAt: new Date().toISOString(),
  };
  cached = record;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Sem storage a escolha vale só para esta navegação — o cache em memória
    // já garante que o banner não volte no meio da sessão.
  }
  notify();
  return record;
}

/** Apaga a decisão (o banner volta a perguntar). Usado em testes/depuração. */
export function clearConsent() {
  cached = null;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* noop */
  }
  notify();
}

/** Assinatura fora do React — o `posthog.ts` usa para reagir à decisão. */
export function onConsentChange(listener: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const onStorage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== CONSENT_STORAGE_KEY) return;
    cached = readFromStorage();
    listener();
  };
  window.addEventListener(CONSENT_CHANGE_EVENT, listener);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** Abre o painel de preferências (link "Cookies" do rodapé). */
export function openConsentPreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

const serverSnapshot = (): ConsentRecord | null => null;

/** Decisão atual, reativa. No SSR devolve `null` (o banner só monta no client). */
export function useConsent(): ConsentRecord | null {
  return useSyncExternalStore(onConsentChange, getConsent, serverSnapshot);
}
