/**
 * Banner de consentimento de cookies (LGPD).
 *
 * Mount em `__root.tsx` (não usar em página individual).
 *
 * ## Decisões de design — por que ele é assim
 *
 * O objetivo é **decisão informada com o menor atrito possível**, o que também
 * é o que mais aumenta o aceite. O que foi feito de propósito:
 *
 * - **Pergunta, não aviso.** "Ajuda a gente a melhorar o site?" convida; "este
 *   site usa cookies" só informa e é ignorado.
 * - **Motivo concreto + o que NÃO fazemos.** "quais páginas as famílias mais
 *   visitam" e "nada de anúncios, seus dados não são vendidos" — a objeção real
 *   do visitante é rastreio publicitário, então ela é respondida antes de virar
 *   um "recusar".
 * - **Card no canto, não modal preto.** Não bloqueia o conteúdo nem o CTA de
 *   WhatsApp; banner que sequestra a tela gera reflexo de fechar.
 * - **Aparece depois de 1,2s ou do primeiro scroll.** No instante 0 a pessoa
 *   ainda não sabe o que é o site e recusa por reflexo.
 * - **Uma categoria opcional só.** O site tem um único uso opcional (análise).
 *   Menos escolha = menos abandono, e um painel com uma chave só seria teatro.
 * - **Sem "X" no modo pergunta.** Fechar sem escolher não é consentimento — o
 *   banner voltaria na próxima visita e ninguém decide. Os dois botões estão
 *   ali, um clique cada.
 *
 * O que **não** foi feito, de propósito: "Recusar" escondido atrás de
 * "Gerenciar preferências", botão de recusa apagado/cinza-sobre-cinza, toggles
 * pré-marcados, ou barra de rolagem escondendo a opção. Além de serem dark
 * patterns punidos pela ANPD (o consentimento vira inválido — art. 8º), eles
 * derrubam a confiança na marca. "Aceitar" tem a cor de CTA; "Recusar" tem o
 * mesmo tamanho, o mesmo peso de fonte e contraste legível.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";
import {
  CONSENT_OPEN_EVENT,
  setConsent,
  useConsent,
  type ConsentRecord,
} from "@/lib/consent";
import { captureConsentDecision } from "@/lib/posthog";
import { whenPreloaderDone } from "@/lib/preloader-signal";

/** Espera antes de perguntar — tempo de a pessoa entender onde caiu. */
const PROMPT_DELAY_MS = 1200;
/** ...ou já pergunta se ela rolou isto, sinal de que engajou. */
const PROMPT_SCROLL_PX = 200;

type Mode = "hidden" | "prompt" | "preferences";

export function CookieConsent() {
  const consent = useConsent();
  const [mode, setMode] = useState<Mode>("hidden");
  const [showDetails, setShowDetails] = useState(false);
  // O card só vira rolável quando não cabe (tela baixa, detalhes abertos).
  // Deixar `overflow-y: auto` fixo faz o Chrome desenhar a barra à toa.
  const [needsScroll, setNeedsScroll] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const shownAtRef = useRef<number | null>(null);

  // Primeira visita: agenda a pergunta (tempo ou scroll, o que vier antes).
  // A contagem só começa quando o pré-loader da home sai da frente — perguntar
  // por baixo de um overlay full-screen queima a única chance de ser visto.
  useEffect(() => {
    if (consent || mode !== "hidden") return;

    let done = false;
    let timer = 0;
    const reveal = () => {
      if (done) return;
      done = true;
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      setMode("prompt");
    };
    const onScroll = () => {
      if (window.scrollY > PROMPT_SCROLL_PX) reveal();
    };

    const cancelWait = whenPreloaderDone(() => {
      if (done) return;
      timer = window.setTimeout(reveal, PROMPT_DELAY_MS);
      window.addEventListener("scroll", onScroll, { passive: true });
    });

    return () => {
      done = true;
      cancelWait();
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [consent, mode]);

  // Link "Cookies" do rodapé — reabre em modo preferências, já com detalhes.
  useEffect(() => {
    const open = () => {
      setShowDetails(true);
      setMode("preferences");
    };
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  // Marca quando o card apareceu, para medir o tempo até a decisão.
  useEffect(() => {
    shownAtRef.current = mode === "hidden" ? null : Date.now();
  }, [mode]);

  // Só o painel de preferências rouba o foco: foi o visitante que pediu para
  // abrir. O banner da primeira visita não interrompe quem está lendo.
  useEffect(() => {
    if (mode === "preferences") cardRef.current?.focus();
  }, [mode]);

  // O FAB do WhatsApp sobe enquanto o card está na tela (no mobile ele ficaria
  // por baixo). A altura real vai para uma custom property lida lá.
  useEffect(() => {
    const root = document.documentElement;
    const card = cardRef.current;
    if (mode === "hidden" || !card) {
      root.style.setProperty("--st-consent-height", "0px");
      return;
    }
    const sync = () => {
      root.style.setProperty(
        "--st-consent-height",
        `${Math.round(card.getBoundingClientRect().height) + 12}px`,
      );
      setNeedsScroll(card.scrollHeight > card.clientHeight + 1);
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(card);
    return () => {
      observer.disconnect();
      root.style.setProperty("--st-consent-height", "0px");
    };
  }, [mode, showDetails]);

  const decide = useCallback(
    (analytics: boolean) => {
      // Grava primeiro: é `setConsent` que libera (ou bloqueia) o PostHog.
      setConsent(analytics);
      captureConsentDecision({
        choice: analytics ? "accepted" : "rejected",
        surface: mode === "preferences" ? "preferences" : "banner",
        details_expanded: showDetails,
        decision_ms: shownAtRef.current ? Date.now() - shownAtRef.current : null,
        path: window.location.pathname,
      });
      setMode("hidden");
      setShowDetails(false);
    },
    [mode, showDetails],
  );

  // Esc fecha só o painel de preferências (ali existe uma escolha guardada).
  useEffect(() => {
    if (mode !== "preferences") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMode("hidden");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mode]);

  if (mode === "hidden") return null;

  const isPreferences = mode === "preferences";

  return (
    <div
      className="pointer-events-none fixed inset-x-3 bottom-3 z-[60] flex justify-start sm:inset-x-auto sm:bottom-6 sm:left-6"
      role="region"
      aria-label="Consentimento de cookies"
    >
      <div
        ref={cardRef}
        tabIndex={-1}
        className={`consent-card pointer-events-auto max-h-[85dvh] w-full max-w-[27rem] rounded-2xl border border-st-blue-dark/10 bg-white p-4 text-left shadow-[0_18px_45px_-12px_rgb(4_50_90_/_0.35)] outline-none [scrollbar-width:thin] sm:p-5 ${
          needsScroll ? "overflow-y-auto" : "overflow-y-hidden"
        }`}
      >
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-st-green/10"
            aria-hidden
          >
            <Cookie className="h-5 w-5 text-st-green" />
          </span>

          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold leading-snug text-st-blue-dark">
              {isPreferences
                ? "Preferências de cookies"
                : "Ajuda a gente a melhorar o site?"}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-[#496B84]">
              Usamos cookies de análise só para entender{" "}
              <strong className="font-semibold text-st-blue-dark">
                quais páginas as famílias mais visitam
              </strong>{" "}
              e deixar o site mais fácil de usar.{" "}
              <strong className="font-semibold text-st-blue-dark">
                Nada de anúncios, e seus dados não são vendidos.
              </strong>
            </p>

            {isPreferences && (
              <p className="mt-2 text-sm text-[#496B84]">
                Sua escolha hoje:{" "}
                <strong className="font-semibold text-st-blue-dark">
                  {describeChoice(consent)}
                </strong>
                .
              </p>
            )}

            {/* Botões antes dos detalhes de propósito: numa tela baixa com os
                detalhes abertos, "Recusar"/"Aceitar" continuam visíveis sem
                precisar rolar — escolha escondida atrás de scroll é o mesmo
                problema de escolha escondida atrás de submenu. */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {/* Mesmo tamanho, mesmo peso, um clique cada — recusar não pode
                  ser mais difícil que aceitar (LGPD, art. 8º). */}
              <button
                type="button"
                onClick={() => decide(false)}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-st-blue-dark/20 px-4 text-sm font-semibold text-st-blue-dark transition-colors hover:bg-[#F5F8FA]"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => decide(true)}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-st-green px-4 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02]"
              >
                Aceitar
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#496B84]">
              <button
                type="button"
                onClick={() => setShowDetails((value) => !value)}
                aria-expanded={showDetails}
                className="font-medium underline underline-offset-2 hover:text-st-blue"
              >
                {showDetails ? "Ocultar detalhes" : "Ver detalhes"}
              </button>
              <span aria-hidden className="opacity-40">
                ·
              </span>
              <Link
                to="/privacidade"
                className="font-medium underline underline-offset-2 hover:text-st-blue"
              >
                Política de Privacidade
              </Link>
            </div>

            {!isPreferences && (
              <p className="mt-2 text-xs text-[#496B84]/80">
                Dá para mudar quando quiser, em “Cookies” no rodapé.
              </p>
            )}

            {showDetails && <ConsentDetails />}
          </div>

          {/* Fechar existe só nas preferências: ali já há uma escolha gravada.
              No banner da primeira visita, fechar sem escolher não é resposta. */}
          {isPreferences && (
            <button
              type="button"
              onClick={() => setMode("hidden")}
              aria-label="Fechar preferências de cookies"
              className="-mr-1 -mt-1 shrink-0 rounded-lg p-1.5 text-[#496B84] transition-colors hover:bg-[#F5F8FA] hover:text-st-blue-dark"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function describeChoice(consent: ConsentRecord | null) {
  if (!consent) return "ainda não definida";
  return consent.analytics
    ? "cookies de análise ativados"
    : "somente cookies essenciais";
}

function ConsentDetails() {
  return (
    <dl className="mt-3 space-y-2.5 rounded-xl bg-[#F5F8FA] p-3.5 text-xs leading-relaxed text-[#496B84]">
      <div>
        <dt className="font-semibold text-st-blue-dark">
          Essenciais — sempre ativos
        </dt>
        <dd>
          Guardam a sua escolha aqui e mantêm o site funcionando. Não
          identificam você.
        </dd>
      </div>
      <div>
        <dt className="font-semibold text-st-blue-dark">
          Análise — opcional, depende do seu aceite
        </dt>
        <dd>
          PostHog: páginas visitadas, tipo de dispositivo e de onde você chegou.
          Só para sabermos o que melhorar.
        </dd>
      </div>
      <div>
        <dt className="font-semibold text-st-blue-dark">O que nunca fazemos</dt>
        <dd>
          Vender dados, montar perfil para anúncios ou remarketing. Não há pixel
          de rede publicitária aqui.
        </dd>
      </div>
    </dl>
  );
}
