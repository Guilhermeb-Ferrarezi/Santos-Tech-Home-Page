import type { ReactNode } from "react";
import { AudienceTitle, Picked, SectionHead, TierTabs } from "@/components/course-skins/variants/design-ui";
import { Brush, ChevronDown, CircleDashed, Crop, Download, Eye, FolderPlus, Hand, Layers, Link2, Lock, Move, PenTool, Plus, Square, Trash2, Type } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import type { CourseTheme } from "@/lib/course-themes";
import { tierMeta } from "@/components/course-skins/shared";
import { StudioLogo } from "@/components/course-skins/scenes/design-kit";
import { CHECKER, CYAN, DOTS_LIGHT, SWATCHES, VIOLET, pad, type AudienceProps, type ContentProps } from "@/components/course-skins/variants/design-tokens";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Photoshop + Illustrator: raster em camadas e vetor em pranchetas.
 * - Para quem é: a janela do Photoshop com a sua foto no canvas (selecionada) e o
 *   painel de Camadas, onde cada público é uma camada com miniatura e máscara.
 * - Conteúdo: a área de trabalho do Illustrator, com uma prancheta por módulo,
 *   curvas de Bézier com âncoras e alças, e o selo do app de cada módulo (Ps/Ai).
 */

// ── Tela do monitor (SVG 400×320) ─────────────────────────────────────────────

function photoshopScreen(theme: CourseTheme) {
  return function screen({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
    const panel = w * 0.3;
    const cw = w - panel - 14;
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} fill="#26222b" />
        {/* Barra de ferramentas */}
        <rect x={x} y={y} width="8" height={h} fill="#1b181f" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={x + 2} y={y + 5 + i * 8} width="4" height="4" rx="1" fill={i === 3 ? theme.accent : "#fff"} fillOpacity={i === 3 ? 1 : 0.3} />
        ))}
        {/* Canvas com transparência + composição */}
        <rect x={x + 12} y={y + 6} width={cw} height={h - 12} fill="#f4f1f5" />
        <circle cx={x + 12 + cw * 0.7} cy={y + 22} r="9" fill={theme.accent2} />
        <path d={`M${x + 12} ${y + h - 6} L${x + 12 + cw * 0.35} ${y + h * 0.45} L${x + 12 + cw * 0.6} ${y + h * 0.7} L${x + 12 + cw * 0.8} ${y + h * 0.52} L${x + 12 + cw} ${y + h - 6} Z`} fill={VIOLET} />
        <rect
          x={x + 12 + cw * 0.28}
          y={y + h * 0.4}
          width={cw * 0.4}
          height={h * 0.5}
          fill="none"
          stroke="#1f1a24"
          strokeWidth="0.9"
          strokeDasharray="2.5 2"
        />
        {/* Painel de camadas */}
        <rect x={x + w - panel} y={y} width={panel} height={h} fill="#1f1b24" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={x + w - panel + 3} y={y + 6 + i * 13} width={panel - 6} height="10" rx="1.5" fill={i === 0 ? theme.accent : "#fff"} fillOpacity={i === 0 ? 0.45 : 0.06} />
            <rect x={x + w - panel + 5} y={y + 8 + i * 13} width="6" height="6" fill={[theme.accent, theme.accent2, VIOLET, CYAN][i]} />
            <rect x={x + w - panel + 13} y={y + 8 + i * 13} width="6" height="6" fill={i % 2 ? "#fff" : "#000"} stroke="#fff" strokeOpacity="0.4" strokeWidth="0.5" />
          </g>
        ))}
      </g>
    );
  };
}

// ── 01 · PARA QUEM É: janela do Photoshop com o painel de camadas ─────────────

const TOOLS = [Move, Square, CircleDashed, Crop, Brush, PenTool, Type, Hand];

/** Máscara de camada (preto = oculto, branco = visível), uma forma por camada. */
function MaskThumb({ i }: { i: number }) {
  const forms = [
    <circle key="c" cx="14" cy="14" r="8" fill="#fff" />,
    <path key="t" d="M4 22 L14 5 L24 22 Z" fill="#fff" />,
    <rect key="r" x="5" y="8" width="18" height="12" rx="2" fill="#fff" />,
    <path key="w" d="M2 20 C8 6 14 26 26 8 L26 26 L2 26 Z" fill="#fff" />,
    <path key="h" d="M14 24 C4 16 4 6 10 6 C12 6 14 8 14 10 C14 8 16 6 18 6 C24 6 24 16 14 24 Z" fill="#fff" />,
  ];
  return (
    <svg viewBox="0 0 28 28" className="h-10 w-10 shrink-0 bg-black ring-1 ring-white/25" aria-hidden="true">
      {forms[i % forms.length]}
    </svg>
  );
}

function ColorThumb({ i }: { i: number }) {
  return (
    <span className="relative h-10 w-10 shrink-0 overflow-hidden ring-1 ring-white/25" style={CHECKER}>
      <span
        className={`absolute inset-1.5 ${["rounded-full", "rounded-sm", "rotate-45 rounded-sm", "rounded-t-full", "rounded-md"][i % 5]}`}
        style={{ background: SWATCHES[i % SWATCHES.length] }}
      />
    </span>
  );
}

function PanelIcon({ children }: { children: ReactNode }) {
  return <span className="flex h-7 w-7 items-center justify-center rounded text-white/55">{children}</span>;
}

export function PhotoshopAudience({ course, tema, theme }: AudienceProps) {
  const total = course.targetAudience.length;
  return (
    <section className={`sb-bleed overflow-hidden bg-[#efeaee] py-20 dark:bg-[#0f0d12] ${DOTS_LIGHT}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="01" label="Para quem é" video={false}>
          <AudienceTitle />
        </SectionHead>

        <Reveal delay={100} className="mt-10">
          <div className="overflow-hidden rounded-xl bg-[#1f1b24] text-white shadow-[0_40px_90px_-40px_rgba(31,26,36,0.8)] ring-1 ring-black/10 dark:ring-white/10">
            {/* Abas de documento */}
            <div className="flex items-end gap-1 border-b border-white/10 bg-[#17141b] px-3 pt-2">
              <span className="rounded-t-md bg-[#26222b] px-3 py-1.5 font-mono text-[11px] text-white/85">voce_ideal.psd @ 100% (RGB/8)</span>
              <span className="hidden rounded-t-md px-3 py-1.5 font-mono text-[11px] text-white/35 sm:inline">marca_nova.ai</span>
            </div>
            {/* Barra de opções */}
            <div className="flex items-center gap-4 border-b border-white/10 bg-[#26222b] px-3 py-2 text-[11px] text-white/60">
              <Move className="h-3.5 w-3.5 text-white/80" />
              <span className="rounded bg-white/10 px-2 py-0.5 text-white/80">Selecionar assunto</span>
              <span className="hidden sm:inline">Selecionar e mascarar…</span>
              <span className="ml-auto hidden font-mono sm:inline">Máscara · Suavizar 2 px</span>
            </div>

            <div className="grid lg:grid-cols-[44px_1fr_minmax(360px,440px)]">
              {/* Ferramentas */}
              <div className="hidden flex-col items-center gap-1 border-r border-white/10 bg-[#1b181f] py-3 lg:flex" aria-hidden="true">
                {TOOLS.map((Icon, i) => (
                  <span
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded ${i === 2 ? "bg-(--accent) text-white" : "text-white/50"}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                ))}
                <span className="relative mt-3 h-8 w-8" aria-hidden="true">
                  <span className="absolute left-0 top-0 h-5 w-5 rounded-sm bg-(--accent) ring-1 ring-white/40" />
                  <span className="absolute bottom-0 right-0 h-5 w-5 rounded-sm bg-(--accent-2) ring-1 ring-white/40" />
                </span>
              </div>

              {/* Canvas: a foto, com a seleção de "assunto" */}
              <div className="relative flex min-w-0 items-center justify-center bg-[#2c2832] p-6 sm:p-10">
                <div className="relative w-full max-w-[460px] bg-[#f6f2f5] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
                  <PersonAtDesk theme={theme} tema={tema} renderScreen={photoshopScreen(theme)} className="block w-full" />
                  {/* Seleção (formigas marchando) */}
                  <span
                    className="pointer-events-none absolute left-[16%] top-[26%] h-[66%] w-[42%] rounded-[40%_40%_12%_12%]"
                    style={{ outline: "1.5px dashed #1f1a24", outlineOffset: 0, boxShadow: "0 0 0 1.5px rgba(255,255,255,0.7)" }}
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[10px] text-white/85">Assunto selecionado</span>
                </div>
              </div>

              {/* Painel Camadas */}
              <aside className="border-t border-white/10 bg-[#221e27] lg:border-l lg:border-t-0">
                <div className="flex gap-4 border-b border-white/10 px-4 pt-3 text-xs">
                  <span className="flex items-center gap-1.5 border-b-2 border-(--accent) pb-2 font-bold text-white">
                    <Layers className="h-3.5 w-3.5" /> Camadas
                  </span>
                  <span className="pb-2 text-white/40">Canais</span>
                  <span className="pb-2 text-white/40">Demarcadores</span>
                </div>
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 font-mono text-[11px] text-white/55">
                  <span className="flex items-center gap-1 rounded bg-white/[0.06] px-2 py-0.5 text-white/80">
                    Normal <ChevronDown className="h-3 w-3" />
                  </span>
                  <span className="ml-auto">Opacidade: 100%</span>
                </div>

                <ul>
                  {course.targetAudience.map((item, i) => (
                    <Reveal
                      key={item}
                      as="li"
                      delay={i * 70}
                      className={`flex items-center gap-2.5 border-b border-white/[0.07] px-3 py-3 ${
                        i === 0 ? "bg-(--accent)/20" : "hover:bg-white/[0.04]"
                      }`}
                    >
                      <Eye className="h-4 w-4 shrink-0 text-white/55" />
                      <ColorThumb i={i} />
                      <Link2 className="hidden h-3 w-3 shrink-0 -rotate-45 text-white/35 sm:block" />
                      <span className="hidden sm:block">
                        <MaskThumb i={i} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-white/40">
                          Camada {pad(total - i)}
                        </span>
                        <span className="mt-0.5 block text-[15px] font-medium leading-snug text-white/90">{item}</span>
                      </span>
                    </Reveal>
                  ))}
                  <li className="flex items-center gap-2.5 px-3 py-3 text-white/50">
                    <Eye className="h-4 w-4 shrink-0 text-white/40" />
                    <span className="h-10 w-10 shrink-0 bg-[#f6f2f5] ring-1 ring-white/25" />
                    <span className="flex-1 font-serif text-base italic">Fundo</span>
                    <Lock className="h-3.5 w-3.5" />
                  </li>
                </ul>
                <div className="flex items-center justify-end gap-1 border-t border-white/10 px-3 py-1.5" aria-hidden="true">
                  <PanelIcon>
                    <Link2 className="h-3.5 w-3.5" />
                  </PanelIcon>
                  <PanelIcon>
                    <span className="font-serif text-sm italic">fx</span>
                  </PanelIcon>
                  <PanelIcon>
                    <span className="flex h-3.5 w-4 items-center justify-center rounded-sm bg-white/55">
                      <span className="h-2 w-2 rounded-full bg-[#221e27]" />
                    </span>
                  </PanelIcon>
                  <PanelIcon>
                    <FolderPlus className="h-3.5 w-3.5" />
                  </PanelIcon>
                  <PanelIcon>
                    <Plus className="h-3.5 w-3.5" />
                  </PanelIcon>
                  <PanelIcon>
                    <Trash2 className="h-3.5 w-3.5" />
                  </PanelIcon>
                </div>
              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── 02 · CONTEÚDO: pranchetas do Illustrator com curvas de Bézier ─────────────

/** Selo do aplicativo de cada módulo, pelo título. */
function appDoModulo(title: string): { sigla: string; cor: string; nome: string } {
  const t = title.toLowerCase();
  if (t.includes("illustrator")) return { sigla: "Ai", cor: "#FBBF24", nome: "Illustrator" };
  if (t.includes("photoshop")) return { sigla: "Ps", cor: CYAN, nome: "Photoshop" };
  if (t.includes("firefly") || t.includes(" ia")) return { sigla: "Fy", cor: "#DB2777", nome: "Firefly" };
  return { sigla: "Br", cor: VIOLET, nome: "Direção de arte" };
}

/** Curvas (viewBox 200×120): caminho, âncoras e alças. */
const CURVAS: { d: string; anchors: [number, number][]; handles: [number, number, number, number][] }[] = [
  {
    d: "M10 100 C 50 10, 110 10, 130 60 S 180 110, 195 30",
    anchors: [[10, 100], [130, 60], [195, 30]],
    handles: [[130, 60, 110, 10], [130, 60, 150, 110]],
  },
  {
    d: "M20 30 C 60 120, 120 -10, 160 70 C 175 100, 190 90, 195 80",
    anchors: [[20, 30], [160, 70], [195, 80]],
    handles: [[160, 70, 120, -10], [160, 70, 175, 100]],
  },
  {
    d: "M100 10 C 160 10, 190 60, 150 100 C 120 125, 60 115, 60 70 C 60 40, 90 35, 110 50",
    anchors: [[100, 10], [150, 100], [60, 70], [110, 50]],
    handles: [[150, 100, 190, 60], [150, 100, 120, 125], [60, 70, 60, 40]],
  },
  {
    d: "M5 60 Q 50 0, 100 60 T 195 60",
    anchors: [[5, 60], [100, 60], [195, 60]],
    handles: [[100, 60, 50, 0], [100, 60, 150, 120]],
  },
];

function Curva({ i, cor }: { i: number; cor: string }) {
  const c = CURVAS[i % CURVAS.length];
  return (
    <svg viewBox="-5 -15 210 145" className="pointer-events-none absolute right-4 top-4 w-36 opacity-90 sm:w-48" aria-hidden="true">
      <path d={c.d} fill="none" stroke={cor} strokeWidth="3" strokeLinecap="round" />
      {c.handles.map(([ax, ay, hx, hy], k) => (
        <g key={k}>
          <line x1={ax} y1={ay} x2={hx} y2={hy} stroke="#1f1a24" strokeOpacity="0.45" strokeWidth="1" />
          <circle cx={hx} cy={hy} r="3.2" fill="#fff" stroke="#1f1a24" strokeOpacity="0.6" strokeWidth="1" />
        </g>
      ))}
      {c.anchors.map(([ax, ay], k) => (
        <rect key={k} x={ax - 3.5} y={ay - 3.5} width="7" height="7" fill={k === 1 ? "#1f1a24" : "#fff"} stroke="#1f1a24" strokeWidth="1.2" />
      ))}
    </svg>
  );
}

export function PhotoshopContent({ course, logo, selectedTier, onSelectTier }: ContentProps) {
  const tier = course.tiers[selectedTier];
  const meta = tierMeta(course, tier);
  const total = tier.modules.length;

  return (
    <section id="conteudo" className="sb-bleed scroll-mt-4 bg-[#2a2630] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead n="02" label="Conteúdo programático" video={false} dark>
          O que você vai <Picked>aprender</Picked>
        </SectionHead>
        <TierTabs course={course} selectedTier={selectedTier} onSelect={onSelectTier} label="Documento" dark />

        {/* Barra de controle do Illustrator */}
        <Reveal delay={80} className="mt-10">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-lg bg-[#1f1b24] px-4 py-2.5 font-mono text-[11px] text-white/55 ring-1 ring-white/10">
            <span className="flex items-center gap-1.5 text-white/85">
              <PenTool className="h-3.5 w-3.5 text-(--accent)" /> Caneta (P)
            </span>
            <span className="flex items-center gap-1.5">
              Traçado <span className="h-3 w-6 rounded-sm bg-(--accent)" /> 3 pt
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              Preench. <span className="h-3 w-3 border border-white/60 bg-[linear-gradient(135deg,transparent_45%,#ff5a5f_45%,#ff5a5f_55%,transparent_55%)]" />
            </span>
            <span className="ml-auto">
              {total} pranchetas · {meta?.aulas ?? tier.totalHours}
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-x-8 gap-y-10 lg:grid-cols-2">
          {tier.modules.map((m, i) => {
            const app = appDoModulo(m.title);
            const titulo = m.title.replace(/^(Photoshop|Illustrator)\s+—\s+/, "").replace(/^(Photoshop|Illustrator) Avançado\s+—\s+/, "Avançado — ");
            return (
              <Reveal key={m.title} delay={(i % 2) * 90} className="flex flex-col">
                <p className="mb-2 flex items-center gap-2 font-mono text-[11px] text-white/55">
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-[4px] text-[10px] font-black text-[#1f1a24]"
                    style={{ background: app.cor }}
                  >
                    {app.sigla}
                  </span>
                  {pad(i + 1)} — Prancheta · {app.nome}
                </p>
                <div className="group relative min-h-[280px] flex-1 overflow-hidden bg-white p-6 text-[#1f1a24] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] sm:p-8">
                  <Curva i={i} cor={app.cor === "#FBBF24" ? "var(--accent-2)" : app.cor} />
                  <span className="relative font-serif text-6xl italic leading-none text-(--accent)">{pad(i + 1)}</span>
                  <h3 className="relative mt-4 max-w-[85%] text-xl font-black leading-tight tracking-tight sm:text-2xl">{titulo}</h3>
                  <ul className="relative mt-5 space-y-2.5">
                    {m.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#4a4250]">
                        {/* Âncora de vetor como marcador */}
                        <span className="mt-[7px] h-2.5 w-2.5 shrink-0 border-[1.5px] border-[#1f1a24] bg-white" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <span className="pointer-events-none absolute inset-0 hidden ring-2 ring-inset ring-(--accent) group-hover:block" />
                </div>
              </Reveal>
            );
          })}

          {/* Exportar para telas */}
          <Reveal className={`flex flex-col ${total % 2 === 0 ? "lg:col-span-2" : ""}`}>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] text-white/55">
              <Download className="h-4 w-4 text-(--accent-2)" /> Exportar para telas
            </p>
            <div className="relative flex-1 overflow-hidden rounded-sm bg-(--accent) p-6 sm:p-8">
              <span className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full border-[28px] border-white/15" />
              <div className="relative flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 p-2">
                  <StudioLogo name={logo} className="h-full w-full" />
                </span>
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/75">Ao final você vai</p>
                  <OutcomeText text={tier.outcome} className="mt-2 text-lg leading-relaxed" />
                </div>
              </div>
              {tier.tools.length > 0 && (
                <div className="relative mt-6 border-t border-white/20 pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">Vínculos do arquivo</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tier.tools.map((tool) => (
                      <span key={tool} className="inline-flex items-center gap-1.5 rounded-md bg-black/20 px-2.5 py-1 text-xs font-semibold">
                        <Link2 className="h-3 w-3 -rotate-45" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
