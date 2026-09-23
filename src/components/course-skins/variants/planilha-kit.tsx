import type { CSSProperties, ReactNode } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ToolLogo, logoKey } from "@/components/tool-logo";
import { TIER_GUIDE } from "@/components/course-skins/shared";
import { OFFICE_CUSTOM_ICONS, OfficeAppIcon } from "@/components/course-skins/scenes/office-apps";
import { APP_COLORS, type Course, type Tier } from "@/components/course-skins/variants/planilha-base";

/**
 * Peças comuns aos blocos por curso da pele "Planilha" (categoria Office).
 * Cada curso (Excel, Word, PowerPoint…) monta o próprio "Para quem é" e o
 * próprio "Conteúdo programático" em variants/planilha-<variante>.tsx; aqui
 * ficam só o título das seções, as abas de nível e a faixa de ferramentas.
 */

// ── Logos ─────────────────────────────────────────────────────────────────────

export function LogoMark({ name, className }: { name: string; className: string }) {
  return OFFICE_CUSTOM_ICONS.has(name) ? (
    <OfficeAppIcon name={name} className={className} />
  ) : (
    <ToolLogo name={name} className={className} />
  );
}

// ── Título das seções: "célula" + rótulo, como a barra de fórmulas ────────────

export function FormulaHeading({
  cell,
  fn,
  title,
  center = true,
  color,
}: {
  cell: string;
  fn: string;
  title: ReactNode;
  center?: boolean;
  /** Cor do rótulo (padrão: acento da página). */
  color?: string;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <div className="inline-flex max-w-full overflow-hidden rounded-sm border border-neutral-300 bg-white font-mono text-[11px] shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
        <span className="border-r border-neutral-300 bg-neutral-50 px-2.5 py-1 font-bold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          {cell}
        </span>
        <span
          className={`truncate px-3 py-1 font-bold uppercase tracking-wider ${
            color ? "text-(--h) dark:text-[color-mix(in_srgb,var(--h)_55%,white)]" : "text-(--accent)"
          }`}
          style={color ? ({ "--h": color } as CSSProperties) : undefined}
        >
          {fn}
        </span>
      </div>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

// ── Abas de nível ─────────────────────────────────────────────────────────────

/** Abas de planilha (Excel): os níveis viram "Plan1, Plan2…". */
export function SheetTabs({
  tiers,
  selected,
  onSelect,
  addTab = true,
}: {
  tiers: Course["tiers"];
  selected: number;
  onSelect: (i: number) => void;
  addTab?: boolean;
}) {
  return (
    <div className="flex items-end gap-0.5 overflow-x-auto">
      {tiers.map((t, i) => (
        <button
          key={t.levelName}
          type="button"
          data-tier={i}
          onClick={() => onSelect(i)}
          className={`relative shrink-0 border border-b-0 px-4 py-2 text-xs font-bold transition ${
            selected === i
              ? "z-10 -mb-px border-neutral-300 bg-white text-(--accent) dark:border-neutral-700 dark:bg-neutral-900"
              : "border-transparent bg-transparent text-neutral-500 hover:bg-white/60 hover:text-neutral-800 dark:hover:bg-white/5 dark:hover:text-neutral-200"
          }`}
        >
          {selected === i && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-(--accent)" />}
          {t.levelName}
        </button>
      ))}
      {addTab && (
        <span className="ml-1 flex h-7 w-7 shrink-0 items-center justify-center text-neutral-400">
          <Plus className="h-3.5 w-3.5" />
        </span>
      )}
    </div>
  );
}

/** Abas de página de relatório (Power BI): texto com sublinhado amarelo. */
export function PageTabs({
  tiers,
  selected,
  onSelect,
}: {
  tiers: Course["tiers"];
  selected: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex flex-wrap items-end gap-x-1">
      {tiers.map((t, i) => (
        <button
          key={t.levelName}
          type="button"
          data-tier={i}
          onClick={() => onSelect(i)}
          className={`relative px-3 py-2 text-sm font-semibold transition ${
            selected === i
              ? "text-neutral-900 dark:text-white"
              : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
          }`}
        >
          {t.levelName}
          <span
            className="absolute inset-x-2 bottom-0 h-[3px] transition"
            style={{ background: selected === i ? APP_COLORS.powerbi : "transparent" }}
          />
        </button>
      ))}
    </div>
  );
}

/** Linha "Pra quem é este nível" abaixo das abas (só em curso com vários níveis). */
export function TierGuide({ tier, className = "" }: { tier: Tier; className?: string }) {
  return (
    <p className={`text-sm text-neutral-500 dark:text-neutral-400 ${className}`}>
      <span className="font-bold text-neutral-700 dark:text-neutral-300">Pra quem é este nível: </span>
      {TIER_GUIDE[tier.levelName] ?? tier.outcome}
    </p>
  );
}

// ── Ferramentas do nível ──────────────────────────────────────────────────────

export function ToolChip({ tool, className = "" }: { tool: string; className?: string }) {
  const key = logoKey(tool);
  return (
    <span className={`flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 ${className}`}>
      {key !== "ia" && <ToolLogo name={key} className="h-4 w-4" />}
      {tool}
    </span>
  );
}

/** Faixa "rótulo | ferramenta | ferramenta…" com cantos retos. */
export function ToolsStrip({ tools, label = "Ferramentas" }: { tools: string[]; label?: string }) {
  if (tools.length === 0) return null;
  return (
    <div className="flex flex-wrap overflow-hidden rounded-sm border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900">
      <span className="border-r border-neutral-300 bg-neutral-50 px-3 py-2 font-mono text-[11px] font-bold text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
        {label}
      </span>
      {tools.map((tool) => (
        <ToolChip key={tool} tool={tool} className="border-r border-neutral-200 px-3 py-2 dark:border-neutral-800" />
      ))}
    </div>
  );
}
