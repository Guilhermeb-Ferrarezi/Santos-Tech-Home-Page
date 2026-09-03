import posthog from "posthog-js";
import { getConsent, hasAnalyticsConsent, onConsentChange } from "@/lib/consent";

/**
 * Eventos que podem sair de quem **não** deu consentimento (modo cookieless).
 * Só o suficiente para contar visita e origem — nada de clique, rage click ou
 * qualquer coisa que descreva o comportamento de uma pessoa específica.
 */
const EVENTS_WITHOUT_CONSENT = new Set(["$pageview", "$pageleave"]);

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
    // Sem isto o SDK injeta scripts de us-assets.i.posthog.com (remote config,
    // web vitals, autocapture de exceção e de dead click) já no init — ou seja,
    // manda o IP do visitante pro PostHog antes de ele decidir qualquer coisa.
    // Verificado no navegador em 03/09/2026: 4 scripts no DOM mesmo opted-out.
    // Nada disso é usado pelo site (erro é Sentry; a tela de Analytics do
    // api-go consulta só $pageview), então fica tudo desligado.
    disable_external_dependency_loading: true,
    advanced_disable_flags: true,
    capture_exceptions: false,
    capture_performance: false,
    capture_dead_clicks: false,
    // Quem não consentiu manda no máximo pageview — autocapture de clique e
    // afins descreveria o comportamento da pessoa, o que é outra conversa.
    before_send: (event) => {
      if (!event) return event;
      if (hasAnalyticsConsent()) return event;
      return EVENTS_WITHOUT_CONSENT.has(event.event) ? event : null;
    },
    // Quem não aceitou continua sendo contado, mas **sem cookie e sem storage**
    // — a identidade vira um hash efêmero calculado no servidor do PostHog. É o
    // que dá o denominador da taxa de aceite (sem isso o PostHog só enxerga
    // quem aceitou e a taxa parece 100%) e mantém referrer/país/dispositivo.
    //
    // Depende de `cookieless_server_hash_mode` estar ligado no projeto do
    // PostHog — habilitado em 03/09/2026 no projeto 577520 (modo 1, stateless).
    // Se for desligado lá, estes eventos passam a ser descartados em silêncio:
    // nesse caso, setar VITE_POSTHOG_COOKIELESS_ON_REJECT=false.
    ...(import.meta.env.VITE_POSTHOG_COOKIELESS_ON_REJECT === "false"
      ? {}
      : { cookieless_mode: "on_reject" as const }),
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
  } else {
    posthog.opt_out_capturing();
    posthog.set_config({ persistence: "memory" });
    // Revogação depois de um aceite: apaga distinct_id e props já guardados.
    if (!isFirstDecision) posthog.reset(true);
  }

  // O SDK sobe opted-out, então o pageview de entrada nunca foi emitido — e
  // `opt_in_capturing` também não emite. Sem isto, a visita em que a pessoa
  // decidiu entraria no funil sem a página de entrada (e quem recusa não
  // contaria nada, deixando a taxa de aceite sem denominador). Só na primeira
  // decisão da visita: numa troca de ideia depois, seria pageview duplicado.
  if (isFirstDecision) posthog.capture("$pageview");
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
