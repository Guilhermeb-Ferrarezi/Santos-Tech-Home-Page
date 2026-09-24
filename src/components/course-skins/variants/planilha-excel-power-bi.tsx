import type { CSSProperties } from "react";
import {
  ChevronRight,
  CircleCheck,
  FileSpreadsheet,
  Filter,
  Key,
  LayoutDashboard,
  Settings2,
  Sigma,
  Table2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  FormulaHeading,
  PageTabs,
  TierGuide,
  ToolsStrip,
} from "@/components/course-skins/variants/planilha-kit";
import {
  APP_COLORS,
  DOTS,
  type BlockProps,
} from "@/components/course-skins/variants/planilha-base";

/**
 * Excel + Power BI: os dados saem da planilha e viram painel. "Para quem é" é a
 * exibição de modelo — cada perfil é uma tabela de origem ligada por uma
 * relação (1 → *) à tabela central "aluno_ideal". O conteúdo é o pipeline
 * Planilha → Power Query → Modelo → Dashboard: cada módulo cai na etapa em que
 * atua e aparece como um painel de "Etapas aplicadas", tópico por tópico.
 */

const PAIR = `linear-gradient(90deg, ${APP_COLORS.excel}, ${APP_COLORS.powerbi})`;

// ── Para quem é: exibição de modelo ───────────────────────────────────────────

function SourceTable({ text, index, side }: { text: string; index: number; side: "left" | "right" }) {
  const color = side === "left" ? APP_COLORS.excel : APP_COLORS.powerbi;
  return (
    <div className="relative h-full">
      <div className="h-full overflow-hidden border border-neutral-300 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex items-center gap-2 border-b border-neutral-200 px-3 py-2 dark:border-neutral-800" style={{ boxShadow: `inset 0 3px 0 ${color}` }}>
          <Table2 className="h-4 w-4 shrink-0" style={{ color }} />
          <span className="font-mono text-xs font-bold text-neutral-700 dark:text-neutral-300">perfil_{String(index + 1).padStart(2, "0")}</span>
          <Key className="ml-auto h-3.5 w-3.5 text-neutral-400" aria-hidden="true" />
        </div>
        <p className="px-3 py-3 text-[15px] leading-snug text-neutral-800 dark:text-neutral-200">{text}</p>
      </div>
      {/* Relação até a tabela central */}
      <span
        aria-hidden="true"
        className={`absolute top-1/2 hidden w-14 border-t-2 border-neutral-400 dark:border-neutral-600 lg:block ${
          side === "left" ? "left-full" : "right-full"
        }`}
      >
        <span className={`absolute -top-5 font-mono text-[11px] font-bold text-neutral-500 ${side === "left" ? "left-1" : "right-1"}`}>1</span>
        <span className={`absolute -top-5 font-mono text-[11px] font-bold text-neutral-500 ${side === "left" ? "right-1" : "left-1"}`}>*</span>
      </span>
    </div>
  );
}

export function ExcelPowerBiParaQuem({ course }: BlockProps) {
  const items = course.targetAudience;
  const rows = Math.ceil(items.length / 2);
  const place = (col: number, row: number) => ({ "--c": String(col), "--r": String(row) }) as CSSProperties;

  return (
    <section data-sec="para-quem" className="sb-bleed py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="Modelo" fn="Para quem é" title="Este curso é ideal se você..." />

        <Reveal delay={120} className="mt-10">
          <div className="border border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900/60">
            <div className="flex items-center justify-between border-b border-neutral-300 bg-white px-4 py-2 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">Exibição de modelo</span>
              <span className="hidden sm:inline">{items.length} tabelas de origem · relações 1 → *</span>
            </div>
            <div className="p-4 sm:p-8" style={DOTS}>
              <div className="grid gap-4 lg:grid-cols-[1fr_210px_1fr] lg:gap-x-14 lg:gap-y-6">
                {/* Tabela central */}
                <div
                  className="order-first flex flex-col border-2 bg-white shadow-md dark:bg-neutral-900 lg:order-none lg:[grid-column:2] lg:[grid-row:1/span_var(--rows)]"
                  style={{ borderColor: APP_COLORS.powerbi, "--rows": String(rows) } as CSSProperties}
                >
                  <div className="flex flex-1 flex-col">
                    <div className="px-3 py-2.5 text-white" style={{ background: PAIR }}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider opacity-90">Tabela fato</p>
                      <p className="font-mono text-sm font-black">aluno_ideal</p>
                    </div>
                    <ul className="flex flex-1 flex-col justify-around gap-1 px-3 py-3 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                      {items.map((_, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Key className="h-3 w-3 shrink-0 text-(--accent)" aria-hidden="true" />
                          perfil_{String(i + 1).padStart(2, "0")}
                        </li>
                      ))}
                      <li className="mt-1 flex items-center gap-1.5 border-t border-neutral-200 pt-2 font-bold text-neutral-900 dark:border-neutral-800 dark:text-white">
                        <Sigma className="h-3 w-3 shrink-0" style={{ color: APP_COLORS.powerbi }} aria-hidden="true" />
                        Você
                      </li>
                    </ul>
                  </div>
                </div>

                {items.map((item, i) => {
                  const left = i < rows;
                  return (
                    <div
                      key={item}
                      className="lg:[grid-column:var(--c)] lg:[grid-row:var(--r)]"
                      style={place(left ? 1 : 3, (left ? i : i - rows) + 1)}
                    >
                      <SourceTable text={item} index={i} side={left ? "left" : "right"} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Conteúdo: pipeline ────────────────────────────────────────────────────────

type Stage = { key: string; label: string; sub: string; Icon: LucideIcon; color: string };

const STAGES: Stage[] = [
  { key: "planilha", label: "Planilha", sub: "Excel", Icon: FileSpreadsheet, color: APP_COLORS.excel },
  { key: "pq", label: "Power Query", sub: "Limpar e unir", Icon: Filter, color: "#4E9F3D" },
  { key: "modelo", label: "Modelo + DAX", sub: "Relações e medidas", Icon: Sigma, color: "#A39A12" },
  { key: "dash", label: "Dashboard", sub: "Power BI", Icon: LayoutDashboard, color: "#D9A40A" },
  { key: "auto", label: "Automação", sub: "VBA, Python, fluxos", Icon: Workflow, color: APP_COLORS.powerapps },
  { key: "projeto", label: "Projeto", sub: "Entrega de ponta a ponta", Icon: CircleCheck, color: APP_COLORS.word },
];

/** Em que etapa do pipeline o módulo atua (pelo título). */
function stageOf(title: string): Stage {
  const t = title.toLowerCase();
  const key = /projeto/.test(t)
    ? "projeto"
    : /power query/.test(t)
      ? "pq"
      : /dax|modelagem|modelo/.test(t)
        ? "modelo"
        : /automate|python|vba|automação/.test(t)
          ? "auto"
          : /power bi|dashboard/.test(t)
            ? "dash"
            : "planilha";
  return STAGES.find((s) => s.key === key) ?? STAGES[0];
}

export function ExcelPowerBiConteudo({ course, tier, selectedTier, onSelectTier, multiTier }: BlockProps) {
  const mods = tier.modules.map((m, i) => ({ ...m, i, stage: stageOf(m.title) }));
  const count = (key: string) => mods.filter((m) => m.stage.key === key).length;

  return (
    <section data-sec="conteudo" className="sb-bleed border-y border-neutral-200 py-20 dark:border-neutral-800" style={DOTS}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="Pipeline" fn="Conteúdo programático" title="O que você vai aprender" />

        {multiTier && (
          <Reveal delay={80} className="mt-10">
            <div className="border-b border-neutral-300 dark:border-neutral-700">
              <PageTabs tiers={course.tiers} selected={selectedTier} onSelect={onSelectTier} />
            </div>
            <TierGuide tier={tier} className="mt-3" />
          </Reveal>
        )}

        {/* Etapas do pipeline, acesas conforme o nível */}
        <Reveal delay={120} className="mt-6">
          <div className="overflow-hidden border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {STAGES.map((s, si) => {
                const n = count(s.key);
                return (
                  <div
                    key={s.key}
                    className={`relative flex items-center gap-3 border-b border-r border-neutral-200 px-3 py-3 dark:border-neutral-800 lg:border-b-0 ${
                      n ? "" : "opacity-40 grayscale"
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center text-white" style={{ background: s.color }}>
                      <s.Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[13px] font-black leading-tight text-neutral-900 dark:text-white">{s.label}</span>
                      <span className="block text-[11px] leading-tight text-neutral-500">
                        {n ? `${n} ${n === 1 ? "módulo" : "módulos"}` : s.sub}
                      </span>
                    </span>
                    {si < STAGES.length - 1 && (
                      <ChevronRight className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-white text-neutral-400 dark:bg-neutral-900 lg:block" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${STAGES.map((s) => s.color).join(", ")})` }} />
            <div className="flex gap-3 px-4 py-3">
              <span className="shrink-0 pt-0.5 font-mono text-[11px] font-bold uppercase text-neutral-500">Saída</span>
              <p className="text-[15px] font-semibold leading-snug text-neutral-800 dark:text-neutral-200">{tier.outcome}</p>
            </div>
          </div>
        </Reveal>

        {/* Cada módulo = um painel de "Etapas aplicadas" */}
        <div className={`mt-6 grid gap-5 lg:grid-cols-2 ${mods.length >= 3 ? "xl:grid-cols-3" : ""}`}>
          {mods.map((m) => (
            <Reveal key={m.title} delay={m.i * 50}>
              <div className="h-full border border-neutral-300 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
                <div className="flex items-center justify-between gap-3 border-b border-neutral-200 px-4 py-2 dark:border-neutral-800">
                  <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color: m.stage.color }}>
                    <m.stage.Icon className="h-3.5 w-3.5" /> {m.stage.label}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400">Consulta {m.i + 1}</span>
                </div>
                <div className="px-4 pb-4 pt-3">
                  <h3 className="text-base font-black leading-snug text-neutral-900 dark:text-white">{m.title}</h3>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-neutral-500">Etapas aplicadas</p>
                  <ol className="mt-1.5">
                    {m.topics.map((t, ti) => {
                      const current = ti === m.topics.length - 1;
                      return (
                        <li
                          key={t}
                          className="flex gap-2.5 border-l-[3px] px-2.5 py-1.5 text-sm leading-snug text-neutral-700 dark:text-neutral-300"
                          style={{
                            borderLeftColor: current ? m.stage.color : "transparent",
                            background: current ? `${m.stage.color}1a` : undefined,
                          }}
                        >
                          <Settings2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden="true" />
                          {t}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {tier.tools.length > 0 && (
          <Reveal delay={160} className="mt-8">
            <ToolsStrip tools={tier.tools} />
          </Reveal>
        )}
      </div>
    </section>
  );
}

