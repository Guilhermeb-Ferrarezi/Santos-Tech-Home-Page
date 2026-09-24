import type { ReactNode } from "react";
import { BarChart3, Clapperboard, Mail, Megaphone, MessageCircle, Search, Share2, ShoppingBag, Truck, Users, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { ToolLogo, logoKey } from "@/components/tool-logo";
import type { CourseData, Tier } from "@/components/particular-course-page";
import type { CourseTheme, CourseThemeKey } from "@/lib/course-themes";
import { TIER_GUIDE, tierMeta } from "@/components/course-skins/shared";
import { CARD, DOTS, INK, KICKER, PAPER, SOFT } from "@/components/course-skins/variants/marketing-tokens";

/**
 * Peças comuns aos blocos por curso da pele de Marketing & Negócios. Cada curso
 * tem o seu próprio "Para quem é" e "Conteúdo programático" (arquivos
 * variants/marketing-<variante>.tsx); aqui fica só o que é moldura: cabeçalho
 * de seção, seletor de nível, linha de ferramentas e o botão de conversa.
 */

export type MktBlockProps = {
  course: CourseData;
  tier: Tier;
  tema: CourseThemeKey;
  theme: CourseTheme;
  whatsappUrl: string;
  selectedTier: number;
  onSelectTier: (i: number) => void;
};

export type MktBlocks = {
  Publico: (p: MktBlockProps) => ReactNode;
  Conteudo: (p: MktBlockProps) => ReactNode;
};

/** Seção "Para quem é": só o espaçamento e o fundo; o miolo é de cada curso. */
export function PublicoSection({ children, plain = false }: { children: ReactNode; plain?: boolean }) {
  return (
    <section className="py-16 sm:py-20" style={plain ? undefined : DOTS}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** Seção "Conteúdo programático" (âncora usada pelo botão do hero). */
export function ConteudoSection({ children, className = PAPER }: { children: ReactNode; className?: string }) {
  return (
    <section id="conteudo-programatico" className={`scroll-mt-4 border-y border-[#f3e4e0] py-16 dark:border-white/5 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function StepHeading({ step, label, Icon, title, sub }: { step: string; label: string; Icon: LucideIcon; title: string; sub?: string }) {
  return (
    <Reveal>
      <div className="inline-flex items-center gap-2 rounded-full border border-(--accent)/25 bg-(--accent)/[0.07] py-1 pl-1 pr-3.5 text-xs font-bold text-(--accent)">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-(--accent) text-white">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="opacity-60">{step}</span>
        {label}
      </div>
      <h2 className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl ${INK}`}>{title}</h2>
      {sub && <p className={`mt-3 max-w-2xl ${SOFT}`}>{sub}</p>}
    </Reveal>
  );
}

/** Seletor de nível (curso com vários níveis) ou selo de plano único. */
export function TierPicker({ course, tier, selectedTier, onSelectTier, unidade = "módulos", className = "mt-8" }: MktBlockProps & { unidade?: string; className?: string }) {
  const meta = tierMeta(course, tier);
  if (course.tiers.length < 2) {
    return (
      <Reveal delay={80} className={className}>
        <span className="inline-flex items-center gap-2 rounded-full bg-(--hero-bg) px-4 py-1.5 text-xs font-bold text-white dark:bg-(--accent)">
          Plano único · {tier.levelName} · {meta?.aulas ?? tier.totalHours}
        </span>
      </Reveal>
    );
  }
  return (
    <Reveal delay={80} className={className}>
      <div
        role="tablist"
        aria-label="Níveis do curso"
        className={`grid gap-1.5 rounded-2xl p-1.5 ${CARD}`}
        style={{ gridTemplateColumns: `repeat(${course.tiers.length}, minmax(0, 1fr))` }}
      >
        {course.tiers.map((t, i) => {
          const m = tierMeta(course, t);
          const sel = i === selectedTier;
          return (
            <button
              key={t.levelName}
              type="button"
              role="tab"
              aria-selected={sel}
              onClick={() => onSelectTier(i)}
              className={`rounded-xl px-3 py-2.5 text-left transition sm:px-4 ${
                sel ? "bg-(--hero-bg) text-white shadow-md dark:bg-(--accent)" : "text-[#6e565c] hover:bg-(--accent)/[0.06] dark:text-white/60"
              }`}
            >
              <span className="block text-sm font-black leading-tight">{t.levelName}</span>
              <span className={`mt-0.5 block text-[11px] ${sel ? "text-white/70" : "opacity-70"}`}>
                {m?.aulas ?? t.totalHours} · {t.modules.length} {unidade}
              </span>
            </button>
          );
        })}
      </div>
      <p className={`mt-3 text-sm ${SOFT}`}>
        <span className={`font-bold ${INK}`}>Pra quem é este nível: </span>
        {TIER_GUIDE[tier.levelName] ?? tier.outcome}
      </p>
    </Reveal>
  );
}

/**
 * Ícone genérico por tipo de ferramenta, pra quando não há logo oficial em
 * assets (Google Ads, Meta, RD Station…). Não imita a marca: indica a função.
 */
const TOOL_TYPES: [RegExp, LucideIcon][] = [
  [/whatsapp/i, MessageCircle],
  [/mail|klaviyo/i, Mail],
  [/zapier|^make$|automa/i, Workflow],
  [/crm|hubspot|rd station/i, Users],
  [/shop|commerce|mercado|merchant|pago/i, ShoppingBag],
  [/envio|frete/i, Truck],
  [/tiktok|capcut|creative|creator|youtube/i, Clapperboard],
  [/instagram|linkedin|later|mlabs|business suite|business center/i, Share2],
  [/search console|seo|ahrefs|screaming|keyword|pagespeed|yoast|semrush/i, Search],
  [/analytics|looker|hotjar|tag manager|pixel|meridian/i, BarChart3],
  [/ads|anúncio/i, Megaphone],
];

export function ToolIcon({ tool }: { tool: string }) {
  const k = logoKey(tool);
  if (k !== "ia" || /ia\b|gpt|claude|jasper/i.test(tool)) {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
        <ToolLogo name={k} className="h-4 w-4" />
      </span>
    );
  }
  const Icon = TOOL_TYPES.find(([re]) => re.test(tool))?.[1];
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--accent)/12 text-[11px] font-bold text-(--accent)">
      {Icon ? <Icon className="h-3.5 w-3.5" /> : tool.charAt(0)}
    </span>
  );
}

/** Linha de ferramentas do nível, com rótulo na linguagem do curso. */
export function ToolsRow({ tools, label = "Ferramentas deste curso", className = "mt-12" }: { tools: string[]; label?: string; className?: string }) {
  if (tools.length === 0) return null;
  return (
    <Reveal delay={120} className={className}>
      <p className={`${KICKER} text-(--accent)`}>{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span key={tool} className={`inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-3 text-xs font-semibold ${CARD} text-[#3f2c31] dark:text-white/80`}>
            <ToolIcon tool={tool} />
            {tool}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

/** Botão de conversa que aparece quando a pessoa se reconhece no público. */
export function ConversaLink({ href, light = false, children = "Conversar sobre o meu caso" }: { href: string; light?: boolean; children?: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-black uppercase tracking-wider transition hover:-translate-y-0.5 ${
        light ? "bg-white text-(--accent)" : "bg-(--accent) text-white hover:bg-(--accent-hover)"
      }`}
    >
      <WhatsAppIcon className="h-3.5 w-3.5" /> {children}
    </a>
  );
}
