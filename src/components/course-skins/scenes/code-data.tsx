import type { CourseTheme } from "@/lib/course-themes";
import { AppWindow } from "@/components/course-hero-art";
import { CodeLines, FloatTerm, Panel, type Tok } from "@/components/course-skins/scenes/code-kit";

// ── SQL: a pergunta em SQL e a tabela de resposta ──────────────────────────

const QUERY: Tok[][] = [
  [["-- quem mais comprou este ano?", "cm"]],
  [["SELECT", "kw"], [" cliente, ", "pl"], ["SUM", "fn"], ["(total) ", "pl"], ["AS", "kw"], [" gasto", "var"]],
  [["FROM", "kw"], [" pedidos", "pl"]],
  [["WHERE", "kw"], [" data >= ", "pl"], ["'2026-01-01'", "str"]],
  [["GROUP BY", "kw"], [" cliente", "pl"]],
  [["ORDER BY", "kw"], [" gasto ", "var"], ["DESC", "kw"]],
  [["LIMIT", "kw"], [" 4", "num"], [";", "pl"]],
];

const LINHAS = [
  ["Ana Souza", "4.820"],
  ["Bruno Lima", "3.990"],
  ["Carla Dias", "3.105"],
  ["Diego Reis", "2.760"],
];

export function SqlScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <AppWindow title="vendas.sql" className="left-0 top-[8%] w-[88%]">
        <CodeLines lines={QUERY} theme={theme} />
      </AppWindow>
      <Panel className="animate-float-y bottom-[3%] right-[2%] w-[64%]">
        <div className="flex items-center border-b border-white/10 px-3 py-1.5 font-mono text-[9px] text-white/45 sm:text-[10px]">
          Resultado
          <span className="ml-auto" style={{ color: theme.accent2 }}>
            4 linhas · 12 ms
          </span>
        </div>
        <table className="w-full font-mono text-[9.5px] sm:text-[10.5px]">
          <thead>
            <tr className="text-left text-white/40">
              <th className="px-3 py-1 font-normal">cliente</th>
              <th className="px-3 py-1 text-right font-normal">gasto (R$)</th>
            </tr>
          </thead>
          <tbody>
            {LINHAS.map(([c, g], i) => (
              <tr key={c} className={i % 2 === 0 ? "bg-white/[0.04]" : ""}>
                <td className="px-3 py-1 text-white/85">{c}</td>
                <td className="px-3 py-1 text-right" style={{ color: i === 0 ? theme.accent2 : "#ffffffcc" }}>
                  {g}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </>
  );
}

// ── Git: histórico com branch e merge ───────────────────────────────────────

type Row = { lane: 0 | 1; hash: string; msg: string; tag?: string; paths: [string, 0 | 1][] };

/** Cada linha desenha seu pedaço do grafo (x: 10 = main, 26 = branch; linha de 28px). */
const GRAFO: Row[] = [
  { lane: 0, hash: "9f3c2a1", msg: "Merge: tela de login", tag: "main", paths: [["M10 14 V28", 0], ["M10 14 C10 22 26 20 26 28", 1]] },
  { lane: 1, hash: "c81e0b7", msg: "feat: valida o formulário", paths: [["M10 0 V28", 0], ["M26 0 V28", 1]] },
  { lane: 1, hash: "4b7d9e2", msg: "feat: cria tela de login", tag: "login", paths: [["M10 0 V28", 0], ["M26 0 V28", 1]] },
  { lane: 0, hash: "a02f5c8", msg: "fix: menu no celular", paths: [["M10 0 V28", 0], ["M26 0 V28", 1]] },
  { lane: 0, hash: "e6d14f0", msg: "docs: explica o projeto", paths: [["M10 0 V28", 0], ["M26 0 C26 8 10 6 10 14", 1]] },
  { lane: 0, hash: "17b3a9d", msg: "primeiro commit", paths: [["M10 0 V14", 0]] },
];

export function GitScene({ theme }: { theme: CourseTheme }) {
  const laneColor = [theme.accent, theme.accent2];
  return (
    <>
      <AppWindow title="histórico · meu-projeto" className="left-0 top-[8%] w-[92%]">
        <div className="py-2">
          {GRAFO.map((r) => (
            <div key={r.hash} className="flex h-7 items-center pr-3 font-mono text-[9.5px] sm:text-[11px]">
              <svg viewBox="0 0 36 28" className="h-7 w-9 shrink-0" aria-hidden="true">
                {r.paths.map(([d, lane]) => (
                  <path key={d} d={d} fill="none" stroke={laneColor[lane]} strokeWidth="2" />
                ))}
                <circle cx={r.lane === 0 ? 10 : 26} cy="14" r="4.5" fill="#0b0f19" stroke={laneColor[r.lane]} strokeWidth="2.2" />
              </svg>
              <span className="w-[5.3em] shrink-0 text-white/35">{r.hash}</span>
              <span className="truncate text-white/85">{r.msg}</span>
              {r.tag && (
                <span
                  className="ml-2 shrink-0 rounded px-1.5 text-[8.5px] font-bold sm:text-[9.5px]"
                  style={{ background: `${laneColor[r.lane]}33`, color: laneColor[r.lane] }}
                >
                  {r.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </AppWindow>
      <FloatTerm className="bottom-[3%] right-[2%] w-[60%]">
        <p className="text-white/50">
          <span style={{ color: theme.accent }}>~/meu-projeto</span> $ git push
        </p>
        <p className="text-white/80">
          <span style={{ color: theme.accent2 }}>✓</span> enviado para o GitHub
        </p>
        <p className="mt-1 text-white/45">cada versão salva, nada se perde</p>
      </FloatTerm>
    </>
  );
}

// ── Lógica: fluxograma + o mesmo raciocínio em português ────────────────────

export function LogicaScene({ theme }: { theme: CourseTheme }) {
  const box = { fill: "#0e1422", stroke: "#ffffff30" };
  const txt = { fill: "#ffffffdd", fontSize: 10, fontFamily: "ui-monospace, monospace", textAnchor: "middle" as const };
  return (
    <>
      <Panel className="left-0 top-[4%] w-[66%] sm:w-[54%]">
        <p className="border-b border-white/10 px-3 py-1.5 font-mono text-[9px] text-white/45 sm:text-[10px]">fluxograma · nota do aluno</p>
        <svg viewBox="0 0 220 234" className="w-full" aria-hidden="true">
          <defs>
            <marker id="seta-logica" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L8 4 L0 8 Z" fill="#ffffff80" />
            </marker>
          </defs>
          {/* Início */}
          <rect x="72" y="6" width="76" height="24" rx="12" fill={theme.accent} />
          <text {...txt} x="110" y="22" fill="#fff" fontWeight="bold">
            Início
          </text>
          <path d="M110 30 V42" stroke="#ffffff80" strokeWidth="1.5" markerEnd="url(#seta-logica)" />
          {/* Entrada */}
          <path d="M58 44 H172 L162 68 H48 Z" {...box} />
          <text {...txt} x="110" y="60">
            ler a nota
          </text>
          <path d="M110 68 V80" stroke="#ffffff80" strokeWidth="1.5" markerEnd="url(#seta-logica)" />
          {/* Decisão */}
          <path d="M110 82 L158 106 L110 130 L62 106 Z" fill={`${theme.accent2}22`} stroke={theme.accent2} strokeWidth="1.5" />
          <text {...txt} x="110" y="110" fill={theme.accent2}>
            nota ≥ 7 ?
          </text>
          {/* Sim / Não */}
          <path d="M62 106 H35 V148" stroke="#ffffff80" strokeWidth="1.5" fill="none" markerEnd="url(#seta-logica)" />
          <path d="M158 106 H182 V148" stroke="#ffffff80" strokeWidth="1.5" fill="none" markerEnd="url(#seta-logica)" />
          <text {...txt} x="46" y="100" fontSize="9" fill="#34d399">
            sim
          </text>
          <text {...txt} x="172" y="100" fontSize="9" fill="#ff8a84">
            não
          </text>
          <rect x="3" y="150" width="64" height="26" rx="4" {...box} />
          <text {...txt} x="35" y="167" fill="#34d399">
            Aprovado
          </text>
          <rect x="143" y="150" width="74" height="26" rx="4" {...box} />
          <text {...txt} x="180" y="167" fill="#ff8a84">
            Recuperação
          </text>
          {/* Junta e fim */}
          <path d="M35 176 V192 H104" stroke="#ffffff80" strokeWidth="1.5" fill="none" />
          <path d="M180 176 V192 H116" stroke="#ffffff80" strokeWidth="1.5" fill="none" />
          <path d="M110 192 V202" stroke="#ffffff80" strokeWidth="1.5" markerEnd="url(#seta-logica)" />
          <rect x="72" y="204" width="76" height="24" rx="12" fill="#ffffff22" />
          <text {...txt} x="110" y="220" fontWeight="bold">
            Fim
          </text>
        </svg>
      </Panel>

      <FloatTerm className="bottom-[3%] right-[1%] w-[58%] sm:w-[50%]">
        <p className="text-white/40">o mesmo, em português:</p>
        <p className="mt-1">
          <span style={{ color: "#c792ea" }}>se</span> <span className="text-white/85">nota ≥ 7</span>{" "}
          <span style={{ color: "#c792ea" }}>então</span>
        </p>
        <p className="pl-3">
          <span style={{ color: theme.accent }}>escreva</span>
          <span className="text-white/85">(</span>
          <span style={{ color: theme.accent2 }}>&quot;Aprovado&quot;</span>
          <span className="text-white/85">)</span>
        </p>
        <p>
          <span style={{ color: "#c792ea" }}>senão</span>
        </p>
        <p className="pl-3">
          <span style={{ color: theme.accent }}>escreva</span>
          <span className="text-white/85">(</span>
          <span style={{ color: theme.accent2 }}>&quot;Recuperação&quot;</span>
          <span className="text-white/85">)</span>
        </p>
        <p>
          <span style={{ color: "#c792ea" }}>fimse</span>
        </p>
      </FloatTerm>
    </>
  );
}

// ── ADS: a trilha completa da formação ──────────────────────────────────────

const ETAPAS = ["Lógica", "Banco de dados", "Front-end", "Java e POO", "APIs", "Mobile", "DevOps e nuvem", "Projeto final"];

export function AdsScene({ theme }: { theme: CourseTheme }) {
  const feitas = 3;
  return (
    <>
      <Panel className="left-0 top-[6%] w-[88%]">
        <p className="border-b border-white/10 px-3 py-1.5 font-mono text-[9px] text-white/45 sm:text-[10px]">trilha · formação ADS</p>
        <ol className="relative px-4 py-3">
          {/* linha da trilha */}
          <span className="absolute bottom-6 left-[1.45rem] top-6 w-0.5 bg-white/10" />
          <span
            className="absolute left-[1.45rem] top-6 w-0.5"
            style={{ height: `${(feitas / (ETAPAS.length - 1)) * 100 - 6}%`, background: theme.accent }}
          />
          {ETAPAS.map((e, i) => {
            const feito = i < feitas;
            const atual = i === feitas;
            return (
              <li key={e} className="relative flex items-center gap-3 py-[3px] font-mono text-[9.5px] sm:py-1 sm:text-[11px]">
                <span
                  className={`relative z-10 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-2 text-[7px] font-black ${
                    atual ? "animate-pulse" : ""
                  }`}
                  style={{
                    borderColor: feito || atual ? theme.accent : "#ffffff33",
                    background: feito ? theme.accent : "#0e1422",
                    color: "#fff",
                  }}
                >
                  {feito ? "✓" : ""}
                </span>
                <span className={feito ? "text-white/55" : atual ? "font-bold text-white" : "text-white/40"}>
                  {String(i + 1).padStart(2, "0")} · {e}
                </span>
                {atual && (
                  <span className="rounded px-1.5 text-[8.5px] font-bold sm:text-[9.5px]" style={{ background: `${theme.accent2}26`, color: theme.accent2 }}>
                    você está aqui
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Panel>
      <FloatTerm className="bottom-[3%] right-[2%] w-[56%]">
        <p className="text-white/50">
          <span style={{ color: theme.accent }}>$</span> progresso
        </p>
        <div className="mt-1.5 flex gap-0.5">
          {ETAPAS.map((e, i) => (
            <span key={e} className="h-1.5 flex-1 rounded-full" style={{ background: i < feitas ? theme.accent : i === feitas ? theme.accent2 : "#ffffff1a" }} />
          ))}
        </div>
        <p className="mt-1.5 text-white/45">da lógica ao sistema em produção</p>
      </FloatTerm>
    </>
  );
}
