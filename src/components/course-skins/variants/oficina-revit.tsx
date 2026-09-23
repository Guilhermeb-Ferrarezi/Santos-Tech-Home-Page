import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { PersonAtDesk } from "@/components/course-illustrations";
import { SectionTitle, TierTabs } from "./oficina-base";
import { pad2, type OficinaBlockProps, type TelaBox } from "./oficina-util";

/**
 * Revit (BIM).
 * Para quem é: o prédio em corte — cada perfil é um pavimento (Térreo, 1º pav…), com
 * lajes hachuradas, marcadores de nível (+3,00…) e o título "Corte AA".
 * Conteúdo: o navegador de projeto (vistas, tabelas, folhas) ao lado das tabelas de
 * quantitativos — uma por módulo, com códigos por item —, fechando no quantitativo geral.
 */

// ── Tela do monitor: vista 3D do edifício ────────────────────────────────

/** Edifício de 5 pavimentos em vista 3D, com janelas, platibanda, caixa de corte e ViewCube. */
export function TelaPredio({ x, y, w, h }: TelaBox) {
  const cx = x + w / 2 - 6;
  const base = y + h - 5;
  const sx = 30; // meia largura da face esquerda
  const sy = 22; // meia largura da face direita
  const andares = 5;
  const ah = 9; // altura do pavimento
  const alt = andares * ah;
  const L = (px: number, py: number) => `${px},${py}`;
  // cantos da base
  const f = { x: cx, y: base }; // canto frontal
  const e = { x: cx - sx, y: base - sx / 2 };
  const d = { x: cx + sy, y: base - sy / 2 };
  const janelasE = [];
  const janelasD = [];
  for (let a = 0; a < andares; a++) {
    const yb = base - a * ah - 3;
    for (let k = 0; k < 4; k++) {
      const t0 = 0.1 + k * 0.22;
      const t1 = t0 + 0.13;
      janelasE.push(
        <polygon
          key={`e${a}-${k}`}
          points={[L(f.x - sx * t0, yb - (sx * t0) / 2), L(f.x - sx * t1, yb - (sx * t1) / 2), L(f.x - sx * t1, yb - (sx * t1) / 2 - 5), L(f.x - sx * t0, yb - (sx * t0) / 2 - 5)].join(" ")}
          fill="#7dd3fc"
          fillOpacity={a === 0 ? 0.25 : 0.55}
        />,
      );
    }
    for (let k = 0; k < 3; k++) {
      const t0 = 0.12 + k * 0.3;
      const t1 = t0 + 0.18;
      janelasD.push(
        <polygon
          key={`d${a}-${k}`}
          points={[L(f.x + sy * t0, yb - (sy * t0) / 2), L(f.x + sy * t1, yb - (sy * t1) / 2), L(f.x + sy * t1, yb - (sy * t1) / 2 - 5), L(f.x + sy * t0, yb - (sy * t0) / 2 - 5)].join(" ")}
          fill="#7dd3fc"
          fillOpacity={0.35}
        />,
      );
    }
  }
  const topo = [L(f.x, f.y - alt), L(e.x, e.y - alt), L(e.x + sy, e.y - sy / 2 - alt), L(d.x, d.y - alt)].join(" ");
  return (
    <g>
      {/* Fundo claro da vista 3D */}
      <rect x={x} y={y} width={w} height={h} fill="#2c2f36" />
      {/* Terreno */}
      <polygon points={[L(f.x, f.y + 5), L(e.x - 10, e.y), L(e.x + sy - 4, e.y - sy / 2 - 8), L(d.x + 12, d.y)].join(" ")} fill="#4d7c47" fillOpacity="0.45" />
      {/* Faces */}
      <polygon points={[L(f.x, f.y), L(e.x, e.y), L(e.x, e.y - alt), L(f.x, f.y - alt)].join(" ")} fill="#e8ddd2" stroke="#1f2328" strokeWidth="0.6" />
      <polygon points={[L(f.x, f.y), L(d.x, d.y), L(d.x, d.y - alt), L(f.x, f.y - alt)].join(" ")} fill="#b8a898" stroke="#1f2328" strokeWidth="0.6" />
      {janelasE}
      {janelasD}
      {/* Lajes marcadas */}
      {Array.from({ length: andares - 1 }, (_, a) => {
        const yy = base - (a + 1) * ah;
        return <polyline key={a} points={[L(e.x, e.y - (a + 1) * ah), L(f.x, yy), L(d.x, d.y - (a + 1) * ah)].join(" ")} fill="none" stroke="#1f2328" strokeOpacity="0.35" strokeWidth="0.6" />;
      })}
      {/* Cobertura com platibanda em destaque */}
      <polygon points={topo} fill="var(--accent)" stroke="#1f2328" strokeWidth="0.6" />
      <rect x={cx - 8} y={f.y - alt - 14} width="10" height="7" fill="#e8ddd2" stroke="#1f2328" strokeWidth="0.5" />
      {/* Caixa de corte (section box) */}
      <polygon
        points={[L(f.x + 4, f.y + 4), L(e.x - 5, e.y + 1), L(e.x - 5, e.y - alt - 10), L(f.x + 4, f.y - alt - 7)].join(" ")}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="0.8"
        strokeDasharray="3 2"
      />
      {/* ViewCube */}
      <g transform={`translate(${x + w - 16} ${y + 14})`}>
        <polygon points="0,-8 8,-4 0,0 -8,-4" fill="#e5e7eb" />
        <polygon points="-8,-4 0,0 0,8 -8,4" fill="#9ca3af" />
        <polygon points="0,0 8,-4 8,4 0,8" fill="#6b7280" />
      </g>
      <text x={x + 4} y={y + 9} fontSize="6" fill="#e5e7eb" fillOpacity="0.8" fontFamily="ui-sans-serif, system-ui">
        {"{3D}"}
      </text>
    </g>
  );
}

// ── Para quem é: o prédio em corte ───────────────────────────────────────────

/** Concreto cortado (hachura de laje e parede). */
const CONCRETO: CSSProperties = {
  backgroundImage: "repeating-linear-gradient(45deg, #2a1a10 0 1.5px, transparent 1.5px 6px)",
  backgroundColor: "#bfa88f",
};
const TERRA: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(42,26,16,0.45) 0 1px, transparent 1px 9px), repeating-linear-gradient(45deg, rgba(42,26,16,0.2) 0 1px, transparent 1px 13px)",
};

const nivel = (i: number) => (i === 0 ? "±0,00" : `+${(i * 3).toFixed(2).replace(".", ",")}`);
const nomeAndar = (i: number) => (i === 0 ? "Térreo" : `${i}º Pavimento`);

/** Marcador de nível: círculo em quadrantes alternados. */
function MarcaNivel({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" className={className} aria-hidden="true">
      <circle cx="9" cy="9" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9 V2 A7 7 0 0 1 16 9 Z M9 9 V16 A7 7 0 0 1 2 9 Z" fill="currentColor" />
    </svg>
  );
}

/** Laje do pavimento, com o marcador de nível à direita (fora do prédio, no desktop). */
function Laje({ rotulo, cota, destaque = false }: { rotulo: string; cota: string; destaque?: boolean }) {
  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_170px]">
      <div className="-mx-2 h-3.5 border-y border-[#2a1a10] dark:border-black" style={CONCRETO} />
      <div className="hidden items-center sm:flex">
        <span className="h-px w-6 border-t border-dashed border-[#8a6d57] dark:border-white/40" />
        <MarcaNivel className={`mx-1.5 h-4 w-4 shrink-0 ${destaque ? "text-(--accent)" : "text-[#2a1a10] dark:text-white/80"}`} />
        <span className="font-mono text-[11px] leading-tight">
          <span className="block font-bold uppercase tracking-wider text-[#2a1a10] dark:text-white/85">{rotulo}</span>
          <span className="text-(--accent)">{cota}</span>
        </span>
      </div>
    </div>
  );
}

/** Janela vista ao fundo do pavimento (elevação interna). */
function JanelaFundo({ porta = false }: { porta?: boolean }) {
  return porta ? (
    <svg viewBox="0 0 40 56" className="h-14 w-10" aria-hidden="true">
      <rect x="4" y="4" width="32" height="52" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 4 V56" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="32" r="1.5" fill="currentColor" />
      <circle cx="24" cy="32" r="1.5" fill="currentColor" />
    </svg>
  ) : (
    <svg viewBox="0 0 52 40" className="h-10 w-12" aria-hidden="true">
      <rect x="3" y="3" width="46" height="34" fill="#7dd3fc" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M26 3 V37 M3 20 H49" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function RevitParaQuem({ course, theme, tema }: OficinaBlockProps) {
  const n = course.targetAudience.length;
  // De cima (último pavimento) para baixo (Térreo = perfil 01)
  const ordem = course.targetAudience.map((item, i) => ({ item, i })).reverse();
  return (
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.5fr] lg:px-8">
      <div>
        <SectionTitle n="01" eyebrow="Para quem é">
          Este curso é ideal se você...
        </SectionTitle>
        <Reveal delay={80}>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6b5242] dark:text-white/60">
            Um modelo BIM guarda o prédio inteiro, andar por andar. Suba pelo corte: cada pavimento é um perfil de aluno, do Térreo à cobertura.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <PersonAtDesk theme={theme} tema={tema} renderScreen={TelaPredio} className="mt-6 w-full max-w-md" />
        </Reveal>
      </div>

      <Reveal delay={120}>
        <figure className="mx-auto w-full max-w-3xl">
          {/* Platibanda e caixa d'água apoiadas na laje de cobertura */}
          <div className="flex items-end justify-between sm:mr-[170px]">
            <span className="-ml-2 h-4 w-3.5 border border-b-0 border-[#2a1a10]" style={CONCRETO} />
            <span className="h-8 w-24 border-2 border-b-0 border-[#2a1a10] bg-[#f6ecdf] dark:border-white/60 dark:bg-[#2a1a10]" />
            <span className="-mr-2 h-4 w-3.5 border border-b-0 border-[#2a1a10]" style={CONCRETO} />
          </div>
          <Laje rotulo="Cobertura" cota={`+${(n * 3).toFixed(2).replace(".", ",")}`} />

          {ordem.map(({ item, i }) => (
            <div key={item}>
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_170px]">
                {/* Pavimento: paredes cortadas nas pontas, ambiente no meio */}
                <div className="flex bg-white dark:bg-[#1f140d]">
                  <span className="w-2.5 shrink-0 border-x border-[#2a1a10] dark:border-black" style={CONCRETO} />
                  <div className={`flex flex-1 items-center gap-4 px-4 py-4 sm:px-5 ${i === 0 ? "bg-(--accent)/10" : ""}`}>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-(--accent)">
                        {nomeAndar(i)} <span className="text-[#8a6d57] dark:text-white/40">· perfil {pad2(i + 1)}</span>
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-snug text-[#3b2819] dark:text-white/85">{item}</p>
                    </div>
                    <span className="hidden shrink-0 text-[#8a6d57]/70 sm:block dark:text-white/30">
                      <JanelaFundo porta={i === 0} />
                    </span>
                  </div>
                  <span className="w-2.5 shrink-0 border-x border-[#2a1a10] dark:border-black" style={CONCRETO} />
                </div>
                <div className="hidden sm:block" />
              </div>
              <Laje rotulo={nomeAndar(i)} cota={nivel(i)} destaque={i === 0} />
            </div>
          ))}

          {/* Terreno e fundações */}
          <div className="sm:mr-[170px]">
            <div className="relative -mx-2 h-10 border-t-2 border-[#2a1a10] bg-[#e9dccb]/60 dark:border-white/50 dark:bg-white/5" style={TERRA}>
              <span className="absolute left-[12%] top-0 h-10 w-3 border-x border-[#2a1a10]" style={CONCRETO} />
              <span className="absolute left-1/2 top-0 h-10 w-3 border-x border-[#2a1a10]" style={CONCRETO} />
              <span className="absolute right-[12%] top-0 h-10 w-3 border-x border-[#2a1a10]" style={CONCRETO} />
            </div>
          </div>

          {/* Título do desenho */}
          <figcaption className="mt-5 flex items-center gap-3 sm:mr-[170px]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#2a1a10] font-mono text-sm font-black dark:border-white/70">A</span>
            <span>
              <span className="block border-b-2 border-[#2a1a10] pb-0.5 text-sm font-black uppercase tracking-wider dark:border-white/70">Corte AA</span>
              <span className="font-mono text-[11px] text-[#8a6d57] dark:text-white/50">Escala 1:100 · {n} pavimentos</span>
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}

// ── Conteúdo: navegador de projeto + tabelas de quantitativos ─────────────────

/** Bloco BIM (ícone das ferramentas). */
export function BimBlock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="58" fill="#2a1a10" />
      <path d="M60 22 L94 40 L60 58 L26 40 Z" fill="#fbf5ec" />
      <path d="M26 40 L60 58 L60 98 L26 80 Z" fill="#d9c9b4" />
      <path d="M60 58 L94 40 L94 80 L60 98 Z" fill="var(--accent)" />
      <path d="M60 71 L94 53 M60 84 L94 66" stroke="#2a1a10" strokeWidth="3" />
      <path d="M34 56 L42 60 L42 70 L34 66 Z M34 72 L42 76 L42 86 L34 82 Z" fill="#2a1a10" fillOpacity="0.55" />
    </svg>
  );
}

function irPara(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function NoArvore({ aberto, children, nivel: prof = 0, muted = false }: { aberto?: boolean; children: ReactNode; nivel?: number; muted?: boolean }) {
  return (
    <p className={`flex items-center gap-1.5 py-1 font-mono text-xs ${muted ? "text-[#8a6d57]/80 dark:text-white/35" : "font-bold text-[#2a1a10] dark:text-white/80"}`} style={{ paddingLeft: prof * 14 }}>
      <span className="w-3 text-[10px]">{aberto === undefined ? "" : aberto ? "▾" : "▸"}</span>
      {children}
    </p>
  );
}

export function RevitConteudo(props: OficinaBlockProps) {
  const { tier, course } = props;
  const total = tier.modules.length;
  const topicos = tier.modules.reduce((s, m) => s + m.topics.length, 0);
  const anc = (i: number) => `tabela-${pad2(i + 1)}`;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionTitle n="02" eyebrow="Conteúdo programático">
        O que você vai aprender
      </SectionTitle>
      <TierTabs {...props} label="Fase:" shape="box" />

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-[270px_1fr]">
        {/* Navegador de projeto */}
        <Reveal className="hidden lg:sticky lg:top-6 lg:block">
          <aside className="overflow-hidden rounded-xl border-2 border-[#2a1a10] bg-[#fbf5ec] dark:border-white/15 dark:bg-[#1f140d]">
            <p className="bg-[#2a1a10] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white">Navegador de projeto</p>
            <div className="p-3">
              <NoArvore aberto>{course.nome}.rvt</NoArvore>
              <NoArvore aberto={false} nivel={1} muted>
                Vistas (todas)
              </NoArvore>
              <NoArvore aberto={false} nivel={1} muted>
                Legendas
              </NoArvore>
              <NoArvore aberto nivel={1}>
                Tabelas/Quantitativos
              </NoArvore>
              <ul>
                {tier.modules.map((m, i) => (
                  <li key={m.title}>
                    <button
                      type="button"
                      onClick={() => irPara(anc(i))}
                      className="group flex w-full items-start gap-2 rounded-md py-1.5 pl-9 pr-2 text-left text-[13px] leading-snug text-[#4a3526] transition hover:bg-(--accent) hover:text-white dark:text-white/70"
                    >
                      <span className="mt-[3px] h-3 w-3 shrink-0 rounded-[2px] border border-current [background:linear-gradient(currentColor,currentColor)_0_33%/100%_1px_no-repeat,linear-gradient(currentColor,currentColor)_0_66%/100%_1px_no-repeat]" />
                      <span>{m.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <NoArvore aberto nivel={1}>
                Folhas (todas)
              </NoArvore>
              <button
                type="button"
                onClick={() => irPara("tabela-geral")}
                className="flex w-full items-start gap-2 rounded-md py-1.5 pl-9 pr-2 text-left text-[13px] font-bold leading-snug text-(--accent) transition hover:bg-(--accent) hover:text-white"
              >
                A-100 · Projeto executivo
              </button>
            </div>
          </aside>
        </Reveal>

        {/* Tabelas */}
        <div className="min-w-0 space-y-6">
          {tier.modules.map((m, i) => (
            <Reveal key={`${tier.levelName}-${m.title}`} delay={60}>
              <section id={anc(i)} className="scroll-mt-6 overflow-hidden rounded-xl border-2 border-[#2a1a10] bg-white dark:border-white/15 dark:bg-[#1f140d]">
                <header className="flex items-center justify-between gap-3 border-b-2 border-[#2a1a10] bg-[#f6ecdf] px-4 py-3 dark:border-white/15 dark:bg-white/5">
                  <h3 className="min-w-0 text-sm font-black uppercase leading-tight tracking-tight sm:text-base">
                    <span className="text-(--accent)">&lt;</span>
                    {m.title}
                    <span className="text-(--accent)">&gt;</span>
                  </h3>
                  <span className="shrink-0 rounded-md bg-(--accent) px-2 py-1 font-mono text-[11px] font-bold text-white">Tabela {pad2(i + 1)}</span>
                </header>
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="font-mono text-[11px] uppercase tracking-wider text-[#8a6d57] dark:text-white/45">
                      <th className="w-16 border-b border-r border-[#e9dccb] px-3 py-1.5 text-center font-bold sm:w-20 dark:border-white/10">
                        A<span className="block normal-case tracking-normal">Código</span>
                      </th>
                      <th className="border-b border-[#e9dccb] px-3 py-1.5 font-bold dark:border-white/10">
                        B<span className="block normal-case tracking-normal">Descrição</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {m.topics.map((topic, j) => (
                      <tr key={topic} className={j % 2 ? "bg-[#fcf8f2] dark:bg-white/[0.02]" : ""}>
                        <td className="border-b border-r border-[#f1e6d8] px-3 py-2.5 text-center align-top font-mono text-xs font-bold text-(--accent) dark:border-white/5">
                          {pad2(i + 1)}.{pad2(j + 1)}
                        </td>
                        <td className="border-b border-[#f1e6d8] px-3 py-2.5 leading-relaxed text-[#4a3526] dark:border-white/5 dark:text-white/75">{topic}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="font-mono text-xs font-bold text-[#6b5242] dark:text-white/55">
                      <td colSpan={2} className="px-3 py-2 text-right">
                        Total: {m.topics.length} itens
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </section>
            </Reveal>
          ))}

          {/* Quantitativo geral = resultado */}
          <Reveal delay={80}>
            <section id="tabela-geral" className="scroll-mt-6 overflow-hidden rounded-xl bg-[#2a1a10] text-white dark:bg-white dark:text-[#2a1a10]">
              <header className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 px-5 py-3 dark:border-black/10">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-(--accent)">&lt;Quantitativo geral&gt; · Projeto executivo · 100%</p>
                <p className="font-mono text-xs opacity-70">
                  {total} tabelas · {topicos} itens
                </p>
              </header>
              <p className="px-5 py-5 text-base font-semibold">{tier.outcome}</p>
            </section>
          </Reveal>
        </div>
      </div>

      {tier.tools.length > 0 && (
        <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
          {tier.tools.map((tool) => (
            <span key={tool} className="inline-flex items-center gap-2 rounded-full bg-[#f6ecdf] py-1 pl-1 pr-4 text-xs font-bold dark:bg-white/10">
              <BimBlock className="h-7 w-7" />
              {tool}
            </span>
          ))}
        </Reveal>
      )}
    </div>
  );
}
