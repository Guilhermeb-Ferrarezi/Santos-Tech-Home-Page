import type { ReactNode } from "react";
import { Sparkles, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ToolLogo, logoKey } from "@/components/tool-logo";
import { TIER_GUIDE, tierMeta, type SkinProps } from "@/components/course-skins/shared";

/**
 * Kit da pele "Conversa com a IA": tokens de cor e peças pequenas reaproveitadas
 * pelos blocos de cada curso (variants/ia-*.tsx). Aqui fica só o que é da
 * família visual; a metáfora de cada curso vive no arquivo da variante.
 */

// ── Tokens ────────────────────────────────────────────────────────────────────

export const PAGE = "bg-[#faf9ff] dark:bg-[#0d0a16]";
export const PANEL = "bg-white dark:bg-[#120e1d]";
export const TITLE = "text-[#1c1530] dark:text-white";
export const TEXT = "text-[#3f3657] dark:text-white/80";
export const MUTED = "text-[#6b6385] dark:text-white/55";
/** Violeta para texto pequeno: mais escuro no claro, mais claro no escuro (contraste AA). */
export const ACCENT_TEXT = "text-[#6d28d9] dark:text-[#c4b5fd]";
export const BORDER = "border-[#e7e1f8] dark:border-white/10";
export const SOFT = "bg-[#f7f5ff] dark:bg-white/[0.04]";
/** Cartão padrão da família: branco, borda lavanda e sombra violeta bem leve. */
export const CARD = `rounded-2xl border ${BORDER} bg-white shadow-[0_1px_2px_rgba(40,20,90,0.05)] dark:bg-white/[0.04] dark:shadow-none`;
export const SHADOW = "shadow-[0_30px_80px_-40px_rgba(76,29,149,0.35)]";

/** Props que todo bloco de curso recebe (as da pele + atalho para o conteúdo). */
export type IaBlockProps = SkinProps & { verConteudo: () => void };

// ── Peças ─────────────────────────────────────────────────────────────────────

export function Eyebrow({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${BORDER} bg-white/80 px-3 py-1 text-xs font-semibold backdrop-blur dark:bg-white/5 ${ACCENT_TEXT}`}
    >
      {icon ?? <Sparkles className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}

export function Heading({
  eyebrow,
  title,
  sub,
  center = false,
  icon,
  className = "",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "mx-auto max-w-2xl text-center" : ""} ${className}`}>
      <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${TITLE}`}>{title}</h2>
      {sub && <p className={`mt-3 text-base ${MUTED}`}>{sub}</p>}
    </Reveal>
  );
}

/** Seletor de nível no formato "seletor de modelo" dos apps de IA. */
export function LevelPicker({
  course,
  selected,
  onSelect,
  className = "",
}: {
  course: SkinProps["course"];
  selected: number;
  onSelect: (i: number) => void;
  className?: string;
}) {
  return (
    <div className={`flex w-full gap-1 rounded-2xl border ${BORDER} bg-white/80 p-1 backdrop-blur dark:bg-white/5 sm:inline-flex sm:w-auto ${className}`}>
      {course.tiers.map((t, i) => {
        const m = tierMeta(course, t);
        const on = selected === i;
        return (
          <button
            key={t.levelName}
            type="button"
            onClick={() => onSelect(i)}
            aria-pressed={on}
            className={`min-w-0 flex-1 rounded-xl px-3 py-2 text-left transition sm:flex-none sm:px-3.5 ${
              on ? "bg-(--accent) text-white shadow-[0_8px_20px_-10px_var(--accent)]" : `${TEXT} hover:bg-(--accent)/8`
            }`}
          >
            <span className="block text-[13px] font-bold leading-tight sm:text-sm">{t.levelName}</span>
            <span className={`block text-[11px] leading-tight ${on ? "text-white/80" : MUTED}`}>{m?.aulas ?? t.totalHours}</span>
          </button>
        );
      })}
    </div>
  );
}

/** Seletor de nível + "pra quem é este nível", só quando o curso tem mais de um nível. */
export function TierIntro({ course, selectedTier, onSelectTier, center = true }: Pick<SkinProps, "course" | "selectedTier" | "onSelectTier"> & { center?: boolean }) {
  if (course.tiers.length < 2) return null;
  const tier = course.tiers[selectedTier];
  return (
    <Reveal delay={80} className={`mt-10 ${center ? "text-center" : ""}`}>
      <LevelPicker course={course} selected={selectedTier} onSelect={onSelectTier} />
      <p className={`mt-3 max-w-xl text-sm ${center ? "mx-auto" : ""} ${MUTED}`}>
        <span className={`font-semibold ${TEXT}`}>Pra quem é este nível: </span>
        {TIER_GUIDE[tier.levelName] ?? tier.outcome}
      </p>
    </Reveal>
  );
}

/** Chaves com arquivo real em src/assets/logos (o resto cai num ícone genérico). */
const LOGOS_REAIS = new Set([
  "chatgpt",
  "claude",
  "gemini",
  "perplexity",
  "deepseek",
  "dalle",
  "sora",
  "veo",
  "suno",
  "elevenlabs",
  "nanobanana",
  "notion",
  "canva",
  "capcut",
  "python",
  "sheets",
  "excel",
]);

export function ToolChip({ tool }: { tool: string }) {
  const key = logoKey(tool);
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${BORDER} bg-white py-1 pl-1 pr-3 text-xs font-semibold dark:bg-white/5 ${TEXT}`}>
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white ring-1 ring-black/5">
        {LOGOS_REAIS.has(key) ? <ToolLogo name={key} className="h-3.5 w-3.5" /> : <Wrench className="h-3 w-3 text-(--accent)" />}
      </span>
      {tool}
    </span>
  );
}

export function ToolList({ tools, label }: { tools: string[]; label: string }) {
  if (tools.length === 0) return null;
  return (
    <>
      <p className={`mt-5 flex items-center gap-1.5 text-xs font-semibold ${MUTED}`}>
        <Wrench className="h-3.5 w-3.5" /> {label} ({tools.length})
      </p>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <ToolChip key={tool} tool={tool} />
        ))}
      </div>
    </>
  );
}

/** Moldura em degradê violeta → fúcsia usada nos cartões de "resultado". */
export function GradientFrame({ children, className = "", inner = "" }: { children: ReactNode; className?: string; inner?: string }) {
  return (
    <div className={`rounded-3xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] p-[1.5px] ${className}`}>
      <div className={`rounded-[calc(1.5rem-1.5px)] ${PANEL} p-5 sm:p-6 ${inner}`}>{children}</div>
    </div>
  );
}
