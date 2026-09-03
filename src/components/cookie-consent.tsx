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
 * - **Sem "X" no primeiro card.** Fechar sem escolher não é consentimento — o
 *   banner voltaria na próxima visita e ninguém decide.
 *
 * ## ⚠️ Risco conhecido e assumido: "Recusar" não está no primeiro clique
 *
 * O primeiro card oferece **Gerenciar** e **Aceitar**; a recusa mora dentro do
 * painel ("Recusar tudo"). Isso é decisão do dono do site, tomada ciente de que
 * a LGPD (art. 8º) pede que recusar seja tão fácil quanto aceitar — aceite em 1
 * clique contra recusa em 2 é o desenho que a CNIL multou em Google e Facebook,
 * e que a ANPD trata como consentimento viciado.
 *
 * Mitigações que **não podem ser removidas** sem piorar o risco:
 * - "Recusar tudo" é o **primeiro** botão do painel, um clique, sem toggle
 *   nenhum pra mexer antes.
 * - "Gerenciar" tem o mesmo tamanho e peso de fonte que "Aceitar" (só não tem a
 *   cor de CTA) — não é link escondido nem cinza-sobre-cinza.
 * - Nenhum toggle nasce ligado, e fechar/ignorar nunca vira aceite.
 *
 * Se um dia a orientação for voltar ao padrão seguro, é trocar "Gerenciar" por
 * "Recusar" no card e mover "Gerenciar" pra linha de links abaixo dos botões.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Cookie, X } from "lucide-react";
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

type View = "prompt" | "manage";

export function CookieConsent() {
  const consent = useConsent();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("prompt");
  /** Estado dos toggles antes de salvar. Nunca nasce ligado sem decisão. */
  const [draftAnalytics, setDraftAnalytics] = useState(false);
  /** A seta de voltar só faz sentido quando existe um card anterior. */
  const [canGoBack, setCanGoBack] = useState(false);
  // O card só vira rolável quando não cabe (tela baixa, painel aberto).
  // Deixar `overflow-y: auto` fixo faz o Chrome desenhar a barra à toa.
  const [needsScroll, setNeedsScroll] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const shownAtRef = useRef<number | null>(null);

  // Primeira visita: agenda a pergunta (tempo ou scroll, o que vier antes).
  // A contagem só começa quando o pré-loader da home sai da frente — perguntar
  // por baixo de um overlay full-screen queima a única chance de ser visto.
  useEffect(() => {
    if (consent || open) return;

    let done = false;
    let timer = 0;
    const reveal = () => {
      if (done) return;
      done = true;
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      setView("prompt");
      setOpen(true);
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
  }, [consent, open]);

  // Link "Cookies" do rodapé — abre direto no painel, com a escolha atual.
  useEffect(() => {
    const openPanel = () => {
      setDraftAnalytics(consent?.analytics === true);
      // Sem decisão gravada ainda, voltar leva ao card de pergunta; com
      // decisão, veio do rodapé e não há card anterior — fecha pelo "X".
      setCanGoBack(!consent);
      setView("manage");
      setOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, openPanel);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openPanel);
  }, [consent]);

  // Marca quando o card apareceu, para medir o tempo até a decisão.
  useEffect(() => {
    shownAtRef.current = open ? Date.now() : null;
  }, [open]);

  // Só o painel rouba o foco: foi o visitante que pediu para abrir. O card da
  // primeira visita não interrompe quem está lendo a página.
  useEffect(() => {
    if (open && view === "manage") cardRef.current?.focus();
  }, [open, view]);

  // O FAB do WhatsApp sobe enquanto o card está na tela (no mobile ele ficaria
  // por baixo). A altura real vai para uma custom property lida lá.
  useEffect(() => {
    const root = document.documentElement;
    const card = cardRef.current;
    if (!open || !card) {
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
  }, [open, view]);

  const decide = useCallback(
    (analytics: boolean, action: string) => {
      // Grava primeiro: é `setConsent` que libera (ou bloqueia) o PostHog.
      setConsent(analytics);
      captureConsentDecision({
        choice: analytics ? "accepted" : "rejected",
        action,
        surface: view,
        decision_ms: shownAtRef.current ? Date.now() - shownAtRef.current : null,
        path: window.location.pathname,
      });
      setOpen(false);
      setView("prompt");
    },
    [view],
  );

  const openManage = useCallback(() => {
    setDraftAnalytics(consent?.analytics === true);
    setCanGoBack(true);
    setView("manage");
  }, [consent]);

  // Esc fecha o card só quando já existe uma escolha gravada — sem decisão,
  // fechar não é resposta e o banner continua.
  useEffect(() => {
    if (!open || !consent) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, consent]);

  if (!open) return null;

  const isManage = view === "manage";

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
          {isManage && canGoBack ? (
            <button
              type="button"
              onClick={() => setView("prompt")}
              aria-label="Voltar"
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5F8FA] text-st-blue-dark transition-colors hover:bg-st-blue/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          ) : (
            <span
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-st-green/10"
              aria-hidden
            >
              <Cookie className="h-5 w-5 text-st-green" />
            </span>
          )}

          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold leading-snug text-st-blue-dark">
              {isManage
                ? "Gerenciar preferências"
                : "Ajuda a gente a melhorar o site?"}
            </h2>

            {isManage ? (
              <ManagePanel
                analytics={draftAnalytics}
                onChangeAnalytics={setDraftAnalytics}
                current={consent}
                onRejectAll={() => decide(false, "recusar_tudo")}
                onSave={() => decide(draftAnalytics, "salvar")}
              />
            ) : (
              <PromptPanel
                onManage={openManage}
                onAccept={() => decide(true, "aceitar")}
              />
            )}
          </div>

          {/* Fechar só existe quando já há uma escolha gravada — no primeiro
              card, fechar sem escolher não é resposta. */}
          {consent && (
            <button
              type="button"
              onClick={() => setOpen(false)}
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

function PromptPanel({
  onManage,
  onAccept,
}: {
  onManage: () => void;
  onAccept: () => void;
}) {
  return (
    <>
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

      {/* Mesmo tamanho e mesmo peso de fonte nos dois — "Gerenciar" não pode
          virar o botão apagado ao lado do "Aceitar" (ver o aviso no topo do
          arquivo sobre o risco de a recusa não estar no primeiro clique). */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={onManage}
          className="inline-flex h-11 items-center justify-center rounded-xl border border-st-blue-dark/20 px-3 text-sm font-semibold text-st-blue-dark transition-colors hover:bg-[#F5F8FA]"
        >
          Gerenciar
        </button>
        <button
          type="button"
          onClick={onAccept}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-st-green px-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02]"
        >
          Aceitar
        </button>
      </div>

      <div className="mt-3 text-xs text-[#496B84]">
        <Link
          to="/privacidade"
          className="font-medium underline underline-offset-2 hover:text-st-blue"
        >
          Política de Privacidade
        </Link>
      </div>

      <p className="mt-2 text-xs text-[#496B84]/80">
        Dá para mudar quando quiser, em “Cookies” no rodapé.
      </p>
    </>
  );
}

function ManagePanel({
  analytics,
  onChangeAnalytics,
  current,
  onRejectAll,
  onSave,
}: {
  analytics: boolean;
  onChangeAnalytics: (value: boolean) => void;
  current: ConsentRecord | null;
  onRejectAll: () => void;
  onSave: () => void;
}) {
  return (
    <>
      <p className="mt-2 text-sm leading-relaxed text-[#496B84]">
        Sua escolha hoje:{" "}
        <strong className="font-semibold text-st-blue-dark">
          {describeChoice(current)}
        </strong>
        .
      </p>

      <div className="mt-3 space-y-2">
        <CategoryRow
          title="Essenciais"
          switchLabel="Cookies essenciais"
          badge="Sempre ativos"
          description="Guardam a sua escolha aqui e mantêm o site funcionando. Não identificam você."
          checked
          locked
        />
        <CategoryRow
          title="Análise"
          switchLabel="Cookies de análise"
          description="PostHog: páginas visitadas, tipo de dispositivo e de onde você chegou. Só para sabermos o que melhorar."
          checked={analytics}
          onChange={onChangeAnalytics}
        />
      </div>

      <p className="mt-3 text-xs leading-relaxed text-[#496B84]">
        <strong className="font-semibold text-st-blue-dark">
          O que nunca fazemos:
        </strong>{" "}
        vender dados, montar perfil para anúncios ou remarketing. Não há pixel de
        rede publicitária aqui.
      </p>

      {/* Barra grudada no fim do card: numa tela baixa, com o painel rolando,
          "Recusar tudo" e "Salvar" continuam à vista sem precisar rolar. */}
      <div className="sticky bottom-0 -mx-1 mt-4 bg-white px-1 pb-1 pt-3">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onRejectAll}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-st-blue-dark/20 px-3 text-sm font-semibold text-st-blue-dark transition-colors hover:bg-[#F5F8FA]"
          >
            Recusar tudo
          </button>
          <button
            type="button"
            onClick={onSave}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-st-green px-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02]"
          >
            Salvar
          </button>
        </div>
        <div className="mt-2 text-xs text-[#496B84]">
          <Link
            to="/privacidade"
            className="font-medium underline underline-offset-2 hover:text-st-blue"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </>
  );
}

function CategoryRow({
  title,
  switchLabel,
  badge,
  description,
  checked,
  locked,
  onChange,
}: {
  title: string;
  /** Nome que o leitor de tela anuncia — o título sozinho vira "cookies de essenciais". */
  switchLabel: string;
  badge?: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="rounded-xl bg-[#F5F8FA] p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-st-blue-dark">
            {title}
          </span>
          {badge && (
            <span className="rounded-full bg-st-green/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-st-green">
              {badge}
            </span>
          )}
        </div>
        <ConsentSwitch
          label={switchLabel}
          checked={checked}
          locked={locked}
          onChange={onChange}
        />
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-[#496B84]">
        {description}
      </p>
    </div>
  );
}

function ConsentSwitch({
  label,
  checked,
  locked,
  onChange,
}: {
  label: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={locked}
      onClick={() => onChange?.(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        checked ? "bg-st-green" : "bg-[#496B84]/30"
      } ${locked ? "cursor-not-allowed opacity-60" : "hover:opacity-90"}`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-[left] duration-200 ${
          checked ? "left-[1.375rem]" : "left-0.5"
        }`}
        aria-hidden
      />
    </button>
  );
}

function describeChoice(consent: ConsentRecord | null) {
  if (!consent) return "ainda não definida";
  return consent.analytics
    ? "cookies de análise ativados"
    : "somente cookies essenciais";
}
