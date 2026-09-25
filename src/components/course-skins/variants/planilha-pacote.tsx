import { useState } from "react";
import { FolderKanban, Home, Mail, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ToolLogo } from "@/components/tool-logo";
import {
  FormulaHeading,
  SheetTabs,
  TierGuide,
  ToolsStrip,
} from "@/components/course-skins/variants/planilha-kit";
import {
  APP_COLORS,
  GRID,
  type BlockProps,
} from "@/components/course-skins/variants/planilha-base";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Pacote Office: a tela inicial do Office. "Para quem é" é a área
 * "Recomendado para você" — cada perfil vira um arquivo recente com a miniatura
 * do app que mais combina com ele (documento, planilha ou apresentação). O
 * conteúdo é agrupado por programa em abas (Word, Excel, PowerPoint, Outlook…)
 * e cada módulo é desenhado no jeito do próprio app.
 */

type AppKey = "word" | "excel" | "ppt" | "m365" | "copilot" | "powerbi" | "projeto";

const APPS: Record<AppKey, { label: string; color: string; logo?: string; Icon?: LucideIcon }> = {
  word: { label: "Word", color: APP_COLORS.word, logo: "word" },
  excel: { label: "Excel", color: APP_COLORS.excel, logo: "excel" },
  ppt: { label: "PowerPoint", color: APP_COLORS.ppt, logo: "ppt" },
  m365: { label: "Outlook e Teams", color: "#0F6CBD", Icon: Mail },
  copilot: { label: "Copilot", color: "#7C5CFF", Icon: Sparkles },
  powerbi: { label: "Power BI", color: "#C99A06", logo: "powerbi" },
  projeto: { label: "Projeto final", color: "#444444", Icon: FolderKanban },
};

function AppIcon({ app, className = "h-5 w-5" }: { app: AppKey; className?: string }) {
  const a = APPS[app];
  if (a.logo) return <ToolLogo name={a.logo} className={className} />;
  const Icon = a.Icon ?? Home;
  return (
    <span className={`flex items-center justify-center rounded-[3px] text-white ${className}`} style={{ background: a.color }}>
      <Icon className="h-[65%] w-[65%]" />
    </span>
  );
}

// ── Para quem é: "Recomendado para você" ──────────────────────────────────────

const TRIO: AppKey[] = ["word", "excel", "ppt"];

/** Liga cada perfil ao app que ele cita; os genéricos completam o trio por igual. */
function appsFor(items: string[]): AppKey[] {
  const out: (AppKey | null)[] = items.map((t) => {
    const s = t.toLowerCase();
    if (/powerpoint|apresentaç/.test(s)) return "ppt";
    if (/\bword\b|relatório|documento|contrato|currículo/.test(s)) return "word";
    if (/excel|planilha|finança|orçamento|dashboard/.test(s)) return "excel";
    return null;
  });
  const counts = new Map<AppKey, number>(TRIO.map((k) => [k, out.filter((a) => a === k).length]));
  return out.map((a) => {
    if (a) return a;
    const pick = [...TRIO].sort((x, y) => (counts.get(x) ?? 0) - (counts.get(y) ?? 0))[0];
    counts.set(pick, (counts.get(pick) ?? 0) + 1);
    return pick;
  });
}

/** Miniatura do arquivo, desenhada no formato de cada app. */
function Thumb({ app }: { app: AppKey }) {
  const c = APPS[app].color;
  return (
    <div className="flex h-28 items-center justify-center border-b border-neutral-200 dark:border-neutral-800" style={{ background: `${c}12` }} aria-hidden="true">
      {app === "word" && (
        <div className="h-24 w-20 space-y-1.5 bg-white p-2.5 shadow-sm dark:bg-neutral-100">
          <span className="block h-1.5 w-2/3" style={{ background: c }} />
          {[100, 90, 96, 70, 92, 84].map((w, i) => (
            <span key={i} className="block h-1 bg-neutral-300" style={{ width: `${w}%` }} />
          ))}
        </div>
      )}
      {app === "excel" && (
        <div className="grid h-20 w-32 grid-cols-4 grid-rows-5 border border-neutral-300 bg-white shadow-sm dark:bg-neutral-100">
          {Array.from({ length: 20 }, (_, i) => (
            <span
              key={i}
              className="border-b border-r border-neutral-200"
              style={i < 4 ? { background: `${c}33` } : i === 11 ? { outline: `2px solid ${c}`, outlineOffset: -2 } : undefined}
            />
          ))}
        </div>
      )}
      {app === "ppt" && (
        <div className="relative aspect-video w-36 bg-white p-2.5 shadow-sm dark:bg-neutral-100">
          <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: c }} />
          <span className="ml-1 block h-2 w-3/4 bg-neutral-700" />
          <span className="ml-1 mt-2 block h-1 w-1/2 bg-neutral-300" />
          <span className="absolute bottom-2 right-2.5 h-7 w-10" style={{ background: `${c}55` }} />
        </div>
      )}
    </div>
  );
}

export function PacoteParaQuem({ course }: BlockProps) {
  const items = course.targetAudience;
  const apps = appsFor(items);
  const rail: (AppKey | "home")[] = ["home", "word", "excel", "ppt", "m365"];

  return (
    <section data-sec="para-quem" className="sb-bleed py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="Início" fn="Para quem é" title="Este curso é ideal se você..." />

        <Reveal delay={120} className="mt-10">
          <div className="grid overflow-hidden border border-neutral-300 dark:border-neutral-700 sm:grid-cols-[64px_1fr]">
            {/* Barra de apps */}
            <nav className="hidden flex-col items-center gap-2 border-r border-neutral-300 bg-neutral-100 py-4 dark:border-neutral-700 dark:bg-neutral-900 sm:flex" aria-hidden="true">
              {rail.map((a) => (
                <span
                  key={a}
                  className={`relative flex h-11 w-11 flex-col items-center justify-center ${a === "home" ? "bg-white dark:bg-neutral-800" : ""}`}
                >
                  {a === "home" ? (
                    <>
                      <span className="absolute inset-y-2 left-0 w-[3px] bg-(--accent)" />
                      <Home className="h-5 w-5 text-(--accent)" />
                    </>
                  ) : (
                    <AppIcon app={a} className="h-6 w-6" />
                  )}
                </span>
              ))}
            </nav>

            <div className="bg-white p-4 dark:bg-neutral-950 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-base font-black text-neutral-900 dark:text-white">Recomendado para você</p>
                <span className="text-xs font-semibold text-neutral-500">{items.length} arquivos</span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => (
                  <div
                    key={item}
                    className="flex flex-col overflow-hidden border border-neutral-200 bg-white transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <Thumb app={apps[i]} />
                    <div className="flex flex-1 gap-3 p-4">
                      <AppIcon app={apps[i]} className="mt-0.5 h-5 w-5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[15px] leading-snug text-neutral-800 dark:text-neutral-200">{item}</p>
                        <p className="mt-2 text-xs text-neutral-500">{APPS[apps[i]].label} · Recomendado</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Conteúdo: módulos agrupados por app, em abas ──────────────────────────────

function appOf(title: string): AppKey {
  const t = title.toLowerCase();
  if (/projeto/.test(t)) return "projeto";
  if (/copilot/.test(t)) return "copilot";
  if (/power bi/.test(t)) return "powerbi";
  if (/powerpoint/.test(t)) return "ppt";
  if (/excel/.test(t)) return "excel";
  if (/\bword\b/.test(t)) return "word";
  if (/outlook|teams|onedrive/.test(t)) return "m365";
  return "projeto";
}

type Mod = { title: string; topics: string[] };

function ModuleCard({ app, m }: { app: AppKey; m: Mod }) {
  const c = APPS[app].color;
  if (app === "excel") {
    return (
      <div className="h-full overflow-hidden border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900">
        <p className="px-3 py-2 text-[15px] font-black text-white" style={{ background: c }}>
          {m.title}
        </p>
        {m.topics.map((t, i) => (
          <div key={t} className="grid grid-cols-[34px_1fr] border-b border-neutral-200 last:border-b-0 dark:border-neutral-800">
            <span className="flex items-center justify-center bg-neutral-50 font-mono text-[11px] text-neutral-400 dark:bg-neutral-800">{i + 1}</span>
            <span className="border-l border-neutral-200 px-3 py-2 text-sm leading-snug text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">{t}</span>
          </div>
        ))}
      </div>
    );
  }
  if (app === "ppt") {
    return (
      <div className="relative h-full overflow-hidden bg-white p-5 pl-7 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_12px_28px_-14px_rgba(0,0,0,0.35)] dark:bg-neutral-900">
        <span className="absolute inset-y-0 left-0 w-2" style={{ background: c }} />
        <p className="text-lg font-black leading-snug text-neutral-900 dark:text-white">{m.title}</p>
        <span className="mt-2 block h-1 w-12" style={{ background: c }} />
        <ul className="mt-4 space-y-2">
          {m.topics.map((t) => (
            <li key={t} className="flex gap-2.5 text-sm leading-snug text-neutral-700 dark:text-neutral-300">
              <span className="mt-[0.45em] h-0 w-0 shrink-0 border-y-[5px] border-l-[7px] border-y-transparent" style={{ borderLeftColor: c }} />
              {t}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  // Word e os demais: página de documento com o título no estilo do app
  return (
    <div className="h-full border border-neutral-200 border-t-[3px] bg-white px-5 py-5 dark:border-neutral-800 dark:bg-neutral-900" style={{ borderTopColor: c }}>
      <p className="text-lg font-bold leading-snug text-neutral-900 dark:text-white">{m.title}</p>
      <ul className="mt-3 space-y-2">
        {m.topics.map((t) => (
          <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0" style={{ background: c }} />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PacoteConteudo({ course, tier, selectedTier, onSelectTier, multiTier }: BlockProps) {
  const groups: { app: AppKey; mods: Mod[] }[] = [];
  for (const m of tier.modules) {
    const app = appOf(m.title);
    const g = groups.find((x) => x.app === app);
    if (g) g.mods.push(m);
    else groups.push({ app, mods: [m] });
  }
  const [picked, setPicked] = useState(0);
  const active = Math.min(picked, groups.length - 1);

  return (
    <section data-sec="conteudo" className="sb-bleed border-y border-neutral-200 py-20 dark:border-neutral-800" style={GRID}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FormulaHeading cell="C3" fn="Conteúdo programático" title="O que você vai aprender" />

        {multiTier && (
          <Reveal delay={80} className="mt-10">
            <div className="border-b border-neutral-300 dark:border-neutral-700">
              <SheetTabs
                tiers={course.tiers}
                selected={selectedTier}
                onSelect={(i) => {
                  onSelectTier(i);
                  setPicked(0);
                }}
              />
            </div>
            <TierGuide tier={tier} className="mt-3" />
          </Reveal>
        )}

        <Reveal delay={120} className="mt-6">
          <div className="border-l-4 border-(--accent) bg-white px-4 py-3 dark:bg-neutral-900">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">{multiTier ? "Ao final deste nível" : "Ao final deste curso"}</p>
            <OutcomeText text={tier.outcome} className="mt-1 text-[15px] leading-snug text-neutral-800 dark:text-neutral-200" />
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-6">
          <div className="border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-950">
            {/* Abas por app */}
            <div role="tablist" className="flex flex-wrap border-b border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900">
              {groups.map((g, gi) => (
                <button
                  key={g.app}
                  type="button"
                  role="tab"
                  aria-selected={active === gi}
                  onClick={() => setPicked(gi)}
                  className={`relative flex items-center gap-2 px-4 py-3 text-sm font-bold transition ${
                    active === gi
                      ? "bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white"
                      : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  <AppIcon app={g.app} className="h-5 w-5" />
                  {APPS[g.app].label}
                  <span className="rounded-sm bg-neutral-200 px-1.5 text-[11px] font-bold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                    {g.mods.length}
                  </span>
                  {active === gi && <span className="absolute inset-x-0 bottom-0 h-[3px]" style={{ background: APPS[g.app].color }} />}
                </button>
              ))}
            </div>

            {groups.map((g, gi) => {
              const next = groups[(gi + 1) % groups.length];
              const topics = g.mods.reduce((n, m) => n + m.topics.length, 0);
              return (
                <div
                  key={g.app}
                  role="tabpanel"
                  className={`grid gap-5 p-4 sm:p-6 lg:grid-cols-[1fr_240px] ${active === gi ? "" : "hidden"}`}
                  style={{ background: `${APPS[g.app].color}08` }}
                >
                  <div className={`grid gap-5 ${g.mods.length > 1 ? "xl:grid-cols-2" : ""}`}>
                    {g.mods.map((m) => (
                      <ModuleCard key={m.title} app={g.app} m={m} />
                    ))}
                  </div>
                  {/* Resumo do app + atalho pro próximo */}
                  <aside className="flex flex-col gap-4 self-start border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
                    <AppIcon app={g.app} className="h-12 w-12" />
                    <div>
                      <p className="text-lg font-black text-neutral-900 dark:text-white">{APPS[g.app].label}</p>
                      <p className="mt-1 text-sm text-neutral-500">
                        {g.mods.length} {g.mods.length === 1 ? "módulo" : "módulos"} · {topics} tópicos
                      </p>
                    </div>
                    {groups.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setPicked((gi + 1) % groups.length)}
                        className="flex items-center justify-between gap-2 border border-neutral-300 px-3 py-2 text-left text-sm font-bold text-neutral-700 transition hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-300"
                      >
                        <span className="flex items-center gap-2">
                          <AppIcon app={next.app} className="h-4 w-4" />
                          Próximo: {APPS[next.app].label}
                        </span>
                        <span aria-hidden="true">→</span>
                      </button>
                    )}
                  </aside>
                </div>
              );
            })}
          </div>
        </Reveal>

        {tier.tools.length > 0 && (
          <Reveal delay={180} className="mt-8">
            <ToolsStrip tools={tier.tools} />
          </Reveal>
        )}
      </div>
    </section>
  );
}

