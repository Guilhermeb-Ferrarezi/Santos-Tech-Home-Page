import posthog from "posthog-js";
import { getConsent, onConsentChange } from "@/lib/consent";

let initialized = false;
/** Evita reprocessar a mesma decisão (o evento dispara em todas as abas). */
let appliedAnalytics: boolean | null = null;

/**
 * Inicializa o PostHog no navegador se VITE_POSTHOG_KEY estiver setada. Guard
 * de `typeof window` porque este módulo é importado tanto no client quanto
 * no server (SSR do TanStack Start) — no server é sempre no-op.
 *
 * O SDK sobe **opted-out e sem persistência**: antes do "Aceitar" do banner
 * nada é enviado ao PostHog nem gravado no navegador (nenhum cookie, nenhum
 * localStorage além do registro do próprio consentimento). Quando o visitante
 * aceita, `applyConsent` liga a captura e a persistência; se ele recusa (ou
 * revoga depois), desliga e limpa o que já existia.
 */
export function initClientPostHog() {
  if (typeof window === "undefined" || initialized) return;
  const key = import.meta.env.VITE_POSTHOG_KEY;
  if (!key) return;
  initialized = true;

  posthog.init(key, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only",
    // --- gate de consentimento (LGPD) ---
    opt_out_capturing_by_default: true,
    opt_out_persistence_by_default: true,
    persistence: "memory",
    // Para medir a taxa de recusa: com `cookieless_mode: "on_reject"` o PostHog
    // continua contando quem recusou, mas sem cookie e sem storage (identidade
    // vira um hash efêmero no servidor). Exige ligar o modo cookieless nas
    // configurações do projeto no PostHog — senão os eventos são descartados
    // silenciosamente. Por isso fica atrás de uma env, desligado por padrão.
    ...(import.meta.env.VITE_POSTHOG_COOKIELESS_ON_REJECT === "true"
      ? { cookieless_mode: "on_reject" as const }
      : {}),
  });

  applyConsent();
  onConsentChange(applyConsent);
}

/** Sincroniza o estado do PostHog com a decisão atual do visitante. */
function applyConsent() {
  if (!initialized) return;
  const consent = getConsent();

  if (!consent) {
    // Sem decisão válida — nunca decidiu, ou o consentimento expirou. O SDK
    // guarda o próprio opt-in em localStorage, então um "sim" de um ano atrás
    // sobreviveria ao vencimento do nosso registro se não fosse desfeito aqui.
    if (posthog.has_opted_in_capturing()) {
      posthog.opt_out_capturing();
      posthog.set_config({ persistence: "memory" });
      posthog.reset(true);
    }
    appliedAnalytics = null;
    return;
  }

  if (appliedAnalytics === consent.analytics) return;
  const isFirstDecision = appliedAnalytics === null;
  appliedAnalytics = consent.analytics;

  if (consent.analytics) {
    posthog.set_config({ persistence: "localStorage+cookie" });
    posthog.opt_in_capturing({ captureEventName: false });
    // `opt_in_capturing` não emite o pageview inicial — sem isto, a visita em
    // que a pessoa aceitou entraria no funil sem a página de entrada.
    posthog.capture("$pageview");
  } else {
    posthog.opt_out_capturing();
    posthog.set_config({ persistence: "memory" });
    // Revogação depois de um aceite: apaga distinct_id e props já guardados.
    if (!isFirstDecision) posthog.reset(true);
  }
}

/**
 * Registra a decisão do banner. Só chega ao PostHog quando é um "aceitar" —
 * quem recusa não é rastreado (a menos que o modo cookieless esteja ligado, e
 * nesse caso o próprio SDK cuida disso, sem cookies).
 */
export function captureConsentDecision(properties: Record<string, unknown>) {
  if (!initialized) return;
  posthog.capture("cookie_consent_decided", properties);
}
