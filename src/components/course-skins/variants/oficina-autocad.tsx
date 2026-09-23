import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import { SectionTitle, TierTabs } from "./oficina-base";
import { pad2, type OficinaBlockProps, type TelaBox } from "./oficina-util";

/**
 * AutoCAD.
 * Para quem é: o gerenciador de propriedades de camadas — cada perfil é uma layer, com
 * lâmpada, sol, cadeado, cor e tipo de linha próprios —, e o aluno com a planta no monitor.
 * Conteúdo: pranchas numeradas (A-01, A-02…) com margem, notas e carimbo técnico,
 * navegáveis pelas abas Modelo/Layout, até a "Prancha plotada".
 */

// ── Tela do monitor: planta no espaço do modelo ────────────────────────────

/** Planta baixa no model space: paredes duplas, portas, cota, cursor em cruz, UCS e linha de comando. */
export function TelaPlanta({ x, y, w, h }: TelaBox) {
  const px = x + 14;
  const py = y + 12;
  const pw = w - 40;
  const ph = h - 32;
  const parede = { fill: "none", stroke: "#f3f4f6", strokeOpacity: 0.9, strokeWidth: 1.1 };
  const meio = px + pw * 0.56;
  const corte = py + ph * 0.55;
  return (
    <g>
      {/* Faixa da faixa de opções */}
      <rect x={x} y={y} width={w} height="6" fill="#3a3f47" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={x + 4 + i * 11} y={y + 1.5} width="8" height="3" rx="1" fill={i === 1 ? "var(--accent)" : "#6b7280"} />
      ))}
      {/* Paredes externas (linha dupla) */}
      <rect x={px} y={py} width={pw} height={ph} {...parede} />
      <rect x={px + 3} y={py + 3} width={pw - 6} height={ph - 6} {...parede} strokeOpacity={0.55} />
      {/* Parede interna com vão de porta */}
      <path d={`M${meio} ${py + 3} V${corte - 10} M${meio + 3} ${py + 3} V${corte - 10}`} {...parede} />
      <path d={`M${px + 3} ${corte} H${meio - 12} M${px + 3} ${corte + 3} H${meio - 12}`} {...parede} />
      {/* Portas (arco de abertura) */}
      <path d={`M${meio} ${corte - 10} l0 12 M${meio} ${corte - 10} a12 12 0 0 1 12 12`} fill="none" stroke="#f59e0b" strokeWidth="0.9" />
      <path d={`M${meio - 12} ${corte} a12 12 0 0 1 12 -12`} fill="none" stroke="#f59e0b" strokeWidth="0.9" strokeOpacity="0.7" />
      {/* Janela */}
      <path d={`M${px + pw * 0.2} ${py} h18 M${px + pw * 0.2} ${py + 1.5} h18 M${px + pw * 0.2} ${py + 3} h18`} stroke="#22d3ee" strokeWidth="0.8" />
      {/* Mobiliário (camada de outra cor) */}
      <rect x={meio + 12} y={py + 10} width="18" height="12" rx="2" fill="none" stroke="#a3e635" strokeWidth="0.9" />
      <circle cx={px + pw * 0.25} cy={py + ph * 0.3} r="5" fill="none" stroke="#a3e635" strokeWidth="0.9" />
      {/* Cota */}
      <g stroke="var(--accent)" strokeWidth="0.9">
        <line x1={px} y1={py + ph + 7} x2={px + pw} y2={py + ph + 7} />
        <line x1={px - 2} y1={py + ph + 9} x2={px + 2} y2={py + ph + 5} />
        <line x1={px + pw - 2} y1={py + ph + 9} x2={px + pw + 2} y2={py + ph + 5} />
      </g>
      <text x={px + pw / 2} y={py + ph + 5.5} fontSize="5.5" textAnchor="middle" fill="var(--accent)" fontFamily="ui-monospace, monospace">
        8.40
      </text>
      {/* Cursor em cruz com caixa de seleção */}
      <g stroke="#fff" strokeWidth="0.7" strokeOpacity="0.9">
        <line x1={x + w - 30} y1={y + 8} x2={x + w - 30} y2={y + h - 10} />
        <line x1={px + pw * 0.4} y1={py + ph * 0.3} x2={x + w - 2} y2={py + ph * 0.3} />
        <rect x={x + w - 33} y={py + ph * 0.3 - 3} width="6" height="6" fill="none" />
      </g>
      {/* Ícone UCS */}
      <g stroke="#f87171" strokeWidth="1.1">
        <path d={`M${x + 4} ${y + h - 12} h10`} />
      </g>
      <g stroke="#4ade80" strokeWidth="1.1">
        <path d={`M${x + 4} ${y + h - 12} v-10`} />
      </g>
      {/* Linha de comando */}
      <rect x={x} y={y + h - 8} width={w} height="8" fill="#1f2328" />
      <text x={x + 4} y={y + h - 2} fontSize="5.5" fill="#cbd5e1" fontFamily="ui-monospace, monospace">
        Comando: LAYER
      </text>
    </g>
  );
}

// ── Gerenciador de camadas ──────────────────────────────────────────────────

const CORES = [
  { nome: "laranja", hex: "var(--accent)" },
  { nome: "amarelo", hex: "#d4a017" },
  { nome: "verde", hex: "#6b8e23" },
  { nome: "ciano", hex: "#2a9d8f" },
  { nome: "marrom", hex: "#8b5e3c" },
  { nome: "vermelho", hex: "#c2410c" },
];
const TIPOS_LINHA = [
  { nome: "Continuous", dash: undefined, esp: 0.5 },
  { nome: "HIDDEN", dash: "6 4", esp: 0.35 },
  { nome: "CENTER", dash: "14 4 3 4", esp: 0.25 },
  { nome: "DASHED", dash: "10 5", esp: 0.35 },
  { nome: "PHANTOM", dash: "16 3 3 3 3 3", esp: 0.18 },
  { nome: "DOT", dash: "1.5 4", esp: 0.5 },
];

function Lampada({ on = true }: { on?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" aria-label={on ? "Ligada" : "Desligada"}>
      <path d="M10 2.5 a5.5 5.5 0 0 1 3.2 10 V14.5 H6.8 V12.5 a5.5 5.5 0 0 1 3.2 -10 Z" fill={on ? "#f5b82e" : "none"} stroke="currentColor" strokeWidth="1.3" />
      <path d="M7.5 16.5 H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function Sol() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" aria-label="Descongelada">
      <circle cx="10" cy="10" r="3.5" fill="#f5b82e" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        return <line key={i} x1={10 + 5.5 * Math.cos(a)} y1={10 + 5.5 * Math.sin(a)} x2={10 + 8 * Math.cos(a)} y2={10 + 8 * Math.sin(a)} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />;
      })}
    </svg>
  );
}
function Cadeado({ fechado }: { fechado: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" aria-label={fechado ? "Travada" : "Destravada"}>
      <rect x="4.5" y="9" width="11" height="8.5" rx="1.5" fill={fechado ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" />
      <path d={fechado ? "M7 9 V6.5 a3 3 0 0 1 6 0 V9" : "M7 9 V6.5 a3 3 0 0 1 6 0 V5"} fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function AmostraLinha({ dash, esp }: { dash?: string; esp: number }) {
  return (
    <svg viewBox="0 0 64 8" className="h-2 w-16" aria-hidden="true">
      <line x1="0" y1="4" x2="64" y2="4" stroke="currentColor" strokeWidth={esp * 5} strokeDasharray={dash} />
    </svg>
  );
}

const COLS = "sm:grid-cols-[34px_minmax(0,1fr)_34px_34px_34px_96px_130px]";

export function AutocadParaQuem({ course, theme, tema }: OficinaBlockProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-end gap-8 lg:grid-cols-[1fr_380px]">
        <div>
          <SectionTitle n="01" eyebrow="Para quem é">
            Este curso é ideal se você...
          </SectionTitle>
          <Reveal delay={80}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6b5242] dark:text-white/60">
              No AutoCAD tudo vive em camadas. Aqui cada perfil de aluno é uma delas: ligue a sua e veja o curso por essa lente.
            </p>
          </Reveal>
        </div>
        <Reveal delay={120} className="hidden lg:block">
          <PersonAtDesk theme={theme} tema={tema} renderScreen={TelaPlanta} className="w-full" />
        </Reveal>
      </div>

      <Reveal delay={160}>
        <div className="mt-10 overflow-hidden rounded-xl border-2 border-[#2a1a10] bg-white shadow-[8px_8px_0_0_#e9dccb] dark:border-white/15 dark:bg-[#1f140d] dark:shadow-[8px_8px_0_0_rgba(255,255,255,0.05)]">
          {/* Barra de título */}
          <div className="flex items-center justify-between gap-3 bg-[#2a1a10] px-4 py-2.5 text-white">
            <span className="truncate font-mono text-xs font-bold uppercase tracking-[0.15em]">Gerenciador de propriedades de camadas</span>
            <span className="flex shrink-0 gap-1.5">
              <span className="h-3 w-3 rounded-sm bg-white/25" />
              <span className="h-3 w-3 rounded-sm bg-(--accent)" />
            </span>
          </div>
          {/* Barra de ferramentas */}
          <div className="flex items-center gap-2 border-b border-[#e9dccb] bg-[#f6ecdf] px-4 py-2 dark:border-white/10 dark:bg-black/20">
            {["Nova camada", "Excluir", "Tornar atual"].map((t, i) => (
              <span key={t} className={`whitespace-nowrap rounded-md border px-2.5 py-1 font-mono text-[11px] ${i === 2 ? "border-(--accent) text-(--accent)" : "border-[#e0d0bd] text-[#8a6d57] dark:border-white/15 dark:text-white/50"} ${i === 1 ? "hidden sm:inline" : ""}`}>
                {t}
              </span>
            ))}
            <span className="ml-auto hidden font-mono text-[11px] text-[#8a6d57] sm:inline dark:text-white/40">Camada atual: PERFIL-01</span>
          </div>

          {/* Cabeçalho das colunas */}
          <div className={`hidden gap-2 border-b border-[#e9dccb] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#8a6d57] sm:grid dark:border-white/10 dark:text-white/45 ${COLS}`}>
            <span>St.</span>
            <span>Nome</span>
            <span className="text-center">Lig.</span>
            <span className="text-center">Cong.</span>
            <span className="text-center">Trav.</span>
            <span>Cor</span>
            <span>Tipo de linha</span>
          </div>

          <ul>
            {course.targetAudience.map((item, i) => {
              const cor = CORES[i % CORES.length];
              const tl = TIPOS_LINHA[i % TIPOS_LINHA.length];
              const atual = i === 0;
              return (
                <li key={item} className={`border-b border-[#f1e6d8] last:border-b-0 dark:border-white/5 ${i % 2 ? "bg-[#fcf8f2] dark:bg-white/[0.02]" : ""} ${atual ? "bg-(--accent)/10 dark:bg-(--accent)/15" : ""}`}>
                  <Reveal delay={200 + i * 60} y={6}>
                    <div className={`grid grid-cols-[28px_minmax(0,1fr)] items-start gap-x-2 gap-y-2 px-4 py-3 sm:items-center ${COLS}`}>
                      <span className="flex h-6 items-center justify-center">
                        {atual ? (
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-(--accent) text-[11px] font-black text-white">✓</span>
                        ) : (
                          <span className="h-4 w-4 rotate-45 border-2 border-[#c9b6a0] dark:border-white/30" />
                        )}
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] font-bold tracking-wider" style={{ color: cor.hex }}>
                          PERFIL-{pad2(i + 1)}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold leading-snug text-[#3b2819] dark:text-white/85">{item}</p>
                      </div>
                      {/* No celular os controles viram uma linha abaixo do nome; no desktop, colunas da tabela */}
                      <div className="col-start-2 flex flex-wrap items-center gap-3 text-[#6b5242] sm:contents dark:text-white/55">
                        <span className="flex justify-center">
                          <Lampada />
                        </span>
                        <span className="flex justify-center">
                          <Sol />
                        </span>
                        <span className="flex justify-center">
                          <Cadeado fechado={i % 3 === 2} />
                        </span>
                        <span className="flex items-center gap-2 font-mono text-xs">
                          <span className="h-4 w-4 shrink-0 rounded-sm border border-black/20" style={{ background: cor.hex }} />
                          {cor.nome}
                        </span>
                        <span className="flex flex-col gap-1 font-mono text-[11px]">
                          <span style={{ color: cor.hex }}>
                            <AmostraLinha dash={tl.dash} esp={tl.esp} />
                          </span>
                          <span>
                            {tl.nome} · {tl.esp.toFixed(2)}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          {/* Linha de comando */}
          <div className="flex items-center gap-2 border-t-2 border-[#2a1a10] bg-[#2a1a10] px-4 py-2 font-mono text-xs text-white/70 dark:border-white/10">
            <span className="text-(--accent)">▸</span>
            <span className="truncate">Comando: LAYER · {course.targetAudience.length} camadas encontradas</span>
            <span className="h-3.5 w-1.5 animate-pulse bg-white/70" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

// ── Conteúdo: pranchas ──────────────────────────────────────────────────────

const ESCALAS = ["1:1", "1:50", "1:100", "1:20", "1:25", "1:200", "1:75"];

/** Pequeno detalhe desenhado no canto de cada prancha (um por módulo, em rodízio). */
function Detalhe({ i }: { i: number }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.4 };
  const k = i % 6;
  return (
    <svg viewBox="0 0 80 56" className="h-14 w-20" aria-hidden="true">
      {k === 0 && (
        <g {...s}>
          <path d="M10 46 H70 M10 46 V6" />
          <path d="M10 46 L52 14" strokeDasharray="3 3" />
          <circle cx="52" cy="14" r="3" />
          <path d="M22 46 a12 12 0 0 0 -2.5 -7.5" />
        </g>
      )}
      {k === 1 && (
        <g {...s}>
          <rect x="8" y="10" width="40" height="36" />
          <path d="M48 46 a24 24 0 0 0 -24 -24" />
          <circle cx="62" cy="22" r="10" />
          <path d="M52 22 H72 M62 12 V32" strokeDasharray="4 2 1 2" />
        </g>
      )}
      {k === 2 && (
        <g {...s}>
          <rect x="10" y="30" width="60" height="16" />
          <rect x="16" y="18" width="48" height="16" strokeOpacity="0.6" />
          <rect x="22" y="6" width="36" height="16" strokeOpacity="0.35" />
        </g>
      )}
      {k === 3 && (
        <g {...s}>
          <rect x="10" y="12" width="26" height="32" />
          <path d="M10 12 L36 44 M36 12 L10 44" strokeOpacity="0.5" />
          <path d="M44 28 H70" markerEnd="" />
          <rect x="52" y="20" width="16" height="16" rx="2" />
          <path d="M58 26 h4 v4 h-4 z" fill="currentColor" />
        </g>
      )}
      {k === 4 && (
        <g {...s}>
          <path d="M40 6 L68 20 L68 40 L40 54 L12 40 L12 20 Z M12 20 L40 34 L68 20 M40 34 V54" />
        </g>
      )}
      {k === 5 && (
        <g {...s}>
          <rect x="8" y="8" width="30" height="40" />
          <rect x="44" y="8" width="30" height="40" />
          <path d="M26 40 H38 V48 M62 40 H74 V48" />
        </g>
      )}
    </svg>
  );
}

/** Prancha técnica (ícone das ferramentas). */
export function Prancha({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="58" fill="#2a1a10" />
      <rect x="24" y="30" width="72" height="60" rx="3" fill="#fbf5ec" />
      <rect x="30" y="36" width="42" height="36" fill="none" stroke="#2a1a10" strokeWidth="3.5" />
      <path d="M52 36 V56 H72" fill="none" stroke="#2a1a10" strokeWidth="2.5" />
      <rect x="76" y="36" width="14" height="48" fill="var(--accent)" />
      <path d="M30 80 H70" stroke="var(--accent)" strokeWidth="3" />
    </svg>
  );
}

function CampoCarimbo({ rotulo, children, className = "" }: { rotulo: string; children: ReactNode; className?: string }) {
  return (
    <div className={`border-[#2a1a10]/70 px-3 py-2 dark:border-white/25 ${className}`}>
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a6d57] dark:text-white/45">{rotulo}</p>
      <div className="mt-0.5">{children}</div>
    </div>
  );
}

function irPara(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function AutocadConteudo(props: OficinaBlockProps) {
  const { tier, course } = props;
  const total = tier.modules.length;
  const folha = (i: number) => `A-${pad2(i + 1)}`;
  const anc = (i: number) => `prancha-${pad2(i + 1)}`;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionTitle n="02" eyebrow="Conteúdo programático">
        O que você vai aprender
      </SectionTitle>
      <TierTabs {...props} label="Layout:" shape="tab" />

      {/* Abas Modelo / Layout, como no rodapé do AutoCAD */}
      <Reveal delay={100}>
        <nav aria-label="Pranchas do curso" className="mt-10 flex flex-wrap items-end gap-1 border-b-2 border-[#2a1a10] dark:border-white/20">
          <span className="rounded-t-md border-x border-t border-[#e0d0bd] bg-[#f6ecdf] px-3 py-1.5 font-mono text-xs text-[#8a6d57] dark:border-white/10 dark:bg-white/5 dark:text-white/50">
            Modelo
          </span>
          {tier.modules.map((m, i) => (
            <button
              key={m.title}
              type="button"
              onClick={() => irPara(anc(i))}
              title={m.title}
              className={`rounded-t-md px-3 py-1.5 font-mono text-xs font-bold transition ${
                i === 0 ? "bg-[#2a1a10] text-white dark:bg-white dark:text-[#2a1a10]" : "border-x border-t border-[#e0d0bd] bg-white text-[#6b5242] hover:bg-(--accent) hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              }`}
            >
              {folha(i)}
            </button>
          ))}
          <span className="px-2 py-1.5 font-mono text-xs text-[#8a6d57] dark:text-white/40">+</span>
        </nav>
      </Reveal>

      <div className="mt-8 space-y-8">
        {tier.modules.map((m, i) => (
          <Reveal key={`${tier.levelName}-${m.title}`} delay={60}>
            <article id={anc(i)} className="scroll-mt-6 border-2 border-[#2a1a10] bg-white p-2 shadow-[6px_6px_0_0_#e9dccb] dark:border-white/25 dark:bg-[#1f140d] dark:shadow-[6px_6px_0_0_rgba(255,255,255,0.05)]">
              {/* Margem interna da folha */}
              <div className="grid border border-[#2a1a10]/60 md:grid-cols-[1fr_210px] dark:border-white/20">
                <div className="relative p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-(--accent)">Notas gerais · Prancha {folha(i)}</p>
                      <h3 className="mt-1 text-lg font-black uppercase leading-tight tracking-tight sm:text-xl">{m.title}</h3>
                    </div>
                    <span className="hidden shrink-0 text-[#2a1a10]/55 sm:block dark:text-white/40">
                      <Detalhe i={i} />
                    </span>
                  </div>
                  <ol className="mt-5 space-y-2.5">
                    {m.topics.map((topic, j) => (
                      <li key={topic} className="grid grid-cols-[30px_1fr] gap-2 text-sm leading-relaxed text-[#4a3526] dark:text-white/75">
                        <span className="font-mono text-xs font-bold leading-6 text-(--accent)">{j + 1}.</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Carimbo */}
                <div className="grid grid-cols-2 border-t border-[#2a1a10]/60 md:grid-cols-1 md:content-end md:border-l md:border-t-0 dark:border-white/20">
                  <CampoCarimbo rotulo="Projeto" className="col-span-2 border-b md:col-span-1">
                    <p className="text-sm font-bold leading-snug">{course.nome}</p>
                  </CampoCarimbo>
                  <CampoCarimbo rotulo="Escala" className="border-b border-r md:border-r-0">
                    <p className="font-mono text-sm font-bold">{ESCALAS[i % ESCALAS.length]}</p>
                  </CampoCarimbo>
                  <CampoCarimbo rotulo="Etapa" className="border-b">
                    <p className="font-mono text-sm font-bold">
                      {pad2(i + 1)}/{pad2(total)}
                    </p>
                  </CampoCarimbo>
                  <CampoCarimbo rotulo="Desenho" className="border-r md:border-b md:border-r-0">
                    <p className="text-sm font-bold">Santos Tech</p>
                  </CampoCarimbo>
                  <div className="flex items-center justify-between gap-2 bg-[#2a1a10] px-3 py-3 text-white dark:bg-white dark:text-[#2a1a10]">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] opacity-70">Folha</span>
                    <span className="text-2xl font-black leading-none text-(--accent)">{folha(i)}</span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        {/* Prancha plotada */}
        <Reveal delay={80}>
          <div className="relative overflow-hidden bg-[#2a1a10] p-6 text-white sm:p-8 dark:bg-white dark:text-[#2a1a10]">
            <div className="max-w-2xl pr-0 sm:pr-40">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-(--accent)">Prancha plotada · 100%</p>
              <p className="mt-2 text-base font-semibold">{tier.outcome}</p>
            </div>
            <span className="pointer-events-none absolute right-6 top-1/2 hidden h-28 w-28 -translate-y-1/2 rotate-[-12deg] items-center justify-center rounded-full border-4 border-(--accent) text-center font-mono text-xs font-black uppercase leading-tight tracking-widest text-(--accent) sm:flex">
              Plotado
              <br />
              {pad2(total)} folhas
            </span>
          </div>
        </Reveal>
      </div>

      {tier.tools.length > 0 && (
        <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
          {tier.tools.map((tool) => (
            <span key={tool} className="inline-flex items-center gap-2 rounded-full bg-[#f6ecdf] py-1 pl-1 pr-4 text-xs font-bold dark:bg-white/10">
              <Prancha className="h-7 w-7" />
              {tool}
            </span>
          ))}
        </Reveal>
      )}
    </div>
  );
}
