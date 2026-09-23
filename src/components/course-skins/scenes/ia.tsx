import type { ReactNode } from "react";
import {
  Bookmark,
  Bot,
  Clapperboard,
  Database,
  FileText,
  Globe,
  Heart,
  MessageCircle,
  Play,
  Search,
  Send,
  Sheet,
  Sparkles,
  Zap,
} from "lucide-react";
import { ToolLogo } from "@/components/tool-logo";

/**
 * Cenas do hero da pele "Conversa com a IA" (categoria Inteligência Artificial).
 * Todas partem da mesma linguagem (cartões de chat claros, bolha do aluno na cor
 * da categoria, resposta sendo gerada) e mudam o assunto conforme o curso:
 * visão geral, anatomia do prompt, fluxo de agente, RAG, mídia e conteúdo.
 */

export type IaVariante = "geral" | "chat" | "agentes" | "rag" | "visual" | "conteudo";

// ── Peças comuns ──────────────────────────────────────────────────────────────

const CARD =
  "rounded-2xl border border-[#e6e0f5] bg-white/95 shadow-[0_24px_50px_-24px_rgba(60,20,120,0.45)] backdrop-blur dark:border-white/10 dark:bg-[#1a1429]/95 dark:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.85)]";
const TXT = "text-[#1c1530] dark:text-white/90";
const MUTED = "text-[#6b6385] dark:text-white/50";
const SIZE = "text-[9.5px] leading-snug sm:text-[11px]";

/** Avatar da IA: círculo em degradê com a faísca. */
export function AiAvatar({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white ${className}`}
    >
      <Sparkles className="h-[55%] w-[55%]" />
    </span>
  );
}

function Header({ title, right }: { title: string; right?: ReactNode }) {
  return (
    <div className="flex items-center gap-2 border-b border-[#eeeaf7] px-3 py-2 dark:border-white/10">
      <AiAvatar className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className={`truncate text-[9.5px] font-semibold sm:text-[11px] ${TXT}`}>{title}</span>
      {right && <span className="ml-auto shrink-0">{right}</span>}
    </div>
  );
}

function UserBubble({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-md bg-(--accent) px-3 py-2 text-white ${SIZE} ${className}`}>
      {children}
    </div>
  );
}

function Ai({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-2">
      <AiAvatar className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5" />
      <div className={`min-w-0 flex-1 ${SIZE} ${TXT}`}>{children}</div>
    </div>
  );
}

function Cursor() {
  return <span className="ml-0.5 inline-block h-[1.05em] w-[0.45em] animate-pulse rounded-[1px] bg-(--accent) align-[-0.15em]" />;
}

/** Linha "ainda sendo gerada". */
function Shimmer({ w }: { w: string }) {
  return <span className="inline-block h-[0.7em] animate-pulse rounded-full bg-[#e9e4f6] align-middle dark:bg-white/10" style={{ width: w }} />;
}

function Step({ n, children }: { n: number; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-[8.5px] font-bold uppercase tracking-wider text-(--accent) sm:text-[9.5px]">
      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-(--accent) text-[8px] text-white">{n}</span>
      {children}
    </span>
  );
}

// ── Visão geral (curso completo de IA) ────────────────────────────────────────

function GeralScene() {
  const trilha = [
    { Icon: MessageCircle, label: "Prompt" },
    { Icon: Zap, label: "Automação" },
    { Icon: Bot, label: "Agente" },
  ];
  return (
    <>
      <div className={`absolute left-0 top-[9%] w-[88%] ${CARD}`}>
        <Header title="Nova conversa" />
        <div className="space-y-2.5 p-3 sm:p-4">
          <div className="ml-auto flex w-fit items-center gap-1.5 rounded-lg border border-[#e6e0f5] bg-[#f7f5ff] px-2 py-1 text-[8.5px] font-medium text-[#5b4f7c] dark:border-white/10 dark:bg-white/5 dark:text-white/60 sm:text-[9.5px]">
            <FileText className="h-3 w-3 text-(--accent)" /> relatorio_vendas_q3.pdf · 40 págs.
          </div>
          <UserBubble>Resuma o relatório em 3 ações práticas para a reunião de segunda.</UserBubble>
          <Ai>
            <p>Aqui estão as 3 ações com maior impacto:</p>
            <ol className="mt-1.5 space-y-1">
              <li>
                <b className="text-(--accent)">1.</b> Reforçar a equipe na região Sul, que cresceu 18%.
              </li>
              <li>
                <b className="text-(--accent)">2.</b> Renegociar o frete dos pedidos acima de R$ 500.
              </li>
              <li className="flex items-center gap-1">
                <b className="text-(--accent)">3.</b> <Shimmer w="46%" />
                <Cursor />
              </li>
            </ol>
          </Ai>
        </div>
      </div>

      {/* Trilha do curso: do prompt ao agente */}
      <div className={`animate-float-y absolute bottom-[3%] right-[1%] w-[60%] p-3 ${CARD}`}>
        <p className={`text-[8.5px] font-bold uppercase tracking-wider sm:text-[9.5px] ${MUTED}`}>Sua evolução no curso</p>
        <div className="mt-2 flex items-start">
          {trilha.map(({ Icon, label }, i) => (
            <div key={label} className="relative flex flex-1 flex-col items-center gap-1">
              {i > 0 && <span className="absolute right-1/2 top-[13px] h-0.5 w-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))] opacity-60" />}
              <span
                className={`relative flex h-7 w-7 items-center justify-center rounded-full ${
                  i === 2 ? "bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white" : "bg-(--accent)/12 text-(--accent)"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className={`text-[8.5px] font-semibold sm:text-[9.5px] ${TXT}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modelos comparados */}
      <div className={`absolute bottom-[9%] left-[1%] flex items-center gap-1.5 rounded-full px-2 py-1.5 ${CARD}`}>
        {["chatgpt", "gemini", "claude"].map((l) => (
          <span key={l} className="flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-black/5">
            <ToolLogo name={l} className="h-3.5 w-3.5" />
          </span>
        ))}
        <span className={`pr-1 text-[8.5px] font-semibold sm:text-[9.5px] ${MUTED}`}>comparar</span>
      </div>
    </>
  );
}

// ── ChatGPT: anatomia de um bom prompt ────────────────────────────────────────

const PARTES = [
  { label: "Papel", cls: "bg-[#8B5CF6]/18 dark:bg-[#8B5CF6]/30", dot: "bg-[#8B5CF6]", text: "Você é um recrutador experiente." },
  { label: "Contexto", cls: "bg-[#EC4899]/15 dark:bg-[#EC4899]/28", dot: "bg-[#EC4899]", text: "Recebi 120 currículos para a vaga de vendas." },
  { label: "Tarefa", cls: "bg-[#0EA5E9]/15 dark:bg-[#0EA5E9]/28", dot: "bg-[#0EA5E9]", text: "Liste 4 critérios de triagem" },
  { label: "Formato", cls: "bg-[#F59E0B]/20 dark:bg-[#F59E0B]/28", dot: "bg-[#F59E0B]", text: "em uma tabela com pesos." },
];

function ChatScene() {
  const linhas = [
    ["Experiência em vendas", "35%"],
    ["Comunicação", "25%"],
    ["Metas batidas", "25%"],
  ];
  return (
    <>
      <div className={`absolute left-0 top-[9%] w-[90%] ${CARD}`}>
        <Header title="Nova conversa · prompt estruturado" />
        <div className="space-y-3 p-3 sm:p-4">
          <div
            className={`ml-auto w-[92%] rounded-2xl rounded-br-md border border-[#e6e0f5] bg-[#faf9ff] px-3 py-2 !leading-[1.9] dark:border-white/10 dark:bg-white/[0.04] ${SIZE} ${TXT}`}
          >
            {PARTES.map((p) => (
              <span key={p.label}>
                <span className={`rounded px-1 py-0.5 [box-decoration-break:clone] ${p.cls}`}>{p.text}</span>{" "}
              </span>
            ))}
          </div>
          <Ai>
            <div className="overflow-hidden rounded-lg border border-[#eeeaf7] dark:border-white/10">
              <div className="grid grid-cols-[1fr_auto] bg-(--accent)/10 font-bold">
                <span className="px-2 py-1">Critério</span>
                <span className="px-2 py-1">Peso</span>
              </div>
              {linhas.map(([c, p]) => (
                <div key={c} className="grid grid-cols-[1fr_auto] border-t border-[#eeeaf7] dark:border-white/10">
                  <span className="px-2 py-1">{c}</span>
                  <span className="px-2 py-1 font-semibold text-(--accent)">{p}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 border-t border-[#eeeaf7] px-2 py-1.5 dark:border-white/10">
                <Shimmer w="55%" />
                <Cursor />
              </div>
            </div>
          </Ai>
        </div>
      </div>

      {/* Legenda: as 4 partes de um prompt */}
      <div className={`animate-float-y absolute bottom-[3%] right-[1%] w-[50%] p-3 ${CARD}`}>
        <p className={`text-[8.5px] font-bold uppercase tracking-wider sm:text-[9.5px] ${MUTED}`}>Anatomia do prompt</p>
        <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1.5">
          {PARTES.map((p) => (
            <span key={p.label} className={`flex items-center gap-1.5 text-[9px] font-semibold sm:text-[10.5px] ${TXT}`}>
              <span className={`h-2.5 w-2.5 rounded-sm ${p.dot}`} />
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Agentes: gatilho → agente (com ferramentas) → ação ────────────────────────

function NodeIcon({ children, strong = false }: { children: ReactNode; strong?: boolean }) {
  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg sm:h-7 sm:w-7 ${
        strong ? "bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white" : "bg-(--accent)/12 text-(--accent)"
      }`}
    >
      {children}
    </span>
  );
}

function FlowLines({ paths }: { paths: string[] }) {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
      <style>{`
        @keyframes ia-flow { to { stroke-dashoffset: -12; } }
        .ia-flow { animation: ia-flow 1.4s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .ia-flow { animation: none; } }
      `}</style>
      {paths.map((d) => (
        <path
          key={d}
          d={d}
          className="ia-flow"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.75"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

function AgentesScene() {
  const tools = [
    { Icon: Globe, label: "Busca na web", top: "top-[31%]" },
    { Icon: Database, label: "CRM", top: "top-[44%]" },
    { Icon: Sheet, label: "Planilha", top: "top-[57%]" },
  ];
  return (
    <>
      <FlowLines
        paths={[
          "M28 16 L28 31",
          "M28 56 L28 71",
          "M54 44 C60 44, 60 35, 66 35",
          "M54 44 C60 44, 60 48, 66 48",
          "M54 44 C60 44, 60 61, 66 61",
        ]}
      />

      {/* Gatilho */}
      <div className={`absolute left-[2%] top-[5%] flex w-[52%] items-center gap-2 p-2.5 ${CARD}`}>
        <NodeIcon>
          <MessageCircle className="h-3.5 w-3.5" />
        </NodeIcon>
        <div className="min-w-0">
          <p className={`text-[8px] font-bold uppercase tracking-wider sm:text-[9px] ${MUTED}`}>Gatilho</p>
          <p className={`text-[9.5px] font-semibold leading-tight sm:text-[11px] ${TXT}`}>Nova mensagem no WhatsApp</p>
        </div>
      </div>

      {/* Agente */}
      <div className={`absolute left-[2%] top-[31%] w-[52%] p-2.5 ring-2 ring-(--accent)/40 ${CARD}`}>
        <div className="flex items-center gap-2">
          <NodeIcon strong>
            <Bot className="h-3.5 w-3.5" />
          </NodeIcon>
          <p className={`text-[10.5px] font-bold sm:text-xs ${TXT}`}>Agente de IA</p>
          <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-(--accent)" />
        </div>
        <dl className={`mt-2 space-y-1 text-[8.5px] sm:text-[10px] ${MUTED}`}>
          <div className="flex justify-between gap-2">
            <dt>Modelo</dt>
            <dd className={`font-semibold ${TXT}`}>LLM</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt>Memória</dt>
            <dd className={`truncate font-semibold ${TXT}`}>histórico do cliente</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt>Decide</dt>
            <dd className={`font-semibold ${TXT}`}>qual ferramenta usar</dd>
          </div>
        </dl>
      </div>

      {/* Ferramentas */}
      {tools.map(({ Icon, label, top }) => (
        <div key={label} className={`absolute right-[1%] ${top} flex w-[34%] items-center gap-1.5 rounded-xl px-2 py-1.5 ${CARD}`}>
          <Icon className="h-3.5 w-3.5 shrink-0 text-(--accent)" />
          <span className={`truncate text-[9px] font-semibold sm:text-[10.5px] ${TXT}`}>{label}</span>
        </div>
      ))}

      {/* Ação */}
      <div className={`absolute left-[2%] top-[71%] flex w-[52%] items-center gap-2 p-2.5 ${CARD}`}>
        <NodeIcon>
          <Send className="h-3.5 w-3.5" />
        </NodeIcon>
        <div className="min-w-0">
          <p className={`text-[8px] font-bold uppercase tracking-wider sm:text-[9px] ${MUTED}`}>Ação</p>
          <p className={`text-[9.5px] font-semibold leading-tight sm:text-[11px] ${TXT}`}>Responde e atualiza o pedido</p>
        </div>
      </div>

      {/* Registro de execução */}
      <div className={`animate-float-y absolute bottom-[4%] right-[1%] w-[40%] p-2.5 ${CARD}`}>
        <p className={`text-[8px] font-bold uppercase tracking-wider sm:text-[9px] ${MUTED}`}>Execuções hoje</p>
        <p className={`text-lg font-bold leading-tight sm:text-xl ${TXT}`}>128</p>
        <svg viewBox="0 0 100 24" className="mt-1 w-full">
          <polyline
            points="0,20 12,17 24,18 36,12 48,14 60,8 72,10 84,5 100,3"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}

// ── RAG: documentos → busca → resposta com fonte ──────────────────────────────

function RagScene() {
  const arquivos = [
    { nome: "Manual_RH.pdf", info: "48 págs." },
    { nome: "Politicas_2026.docx", info: "12 págs." },
    { nome: "Contratos/", info: "214 arquivos" },
  ];
  const trechos = [0.92, 0.87, 0.79];
  return (
    <>
      <FlowLines paths={["M22 50 L22 59", "M44 70 C46 70, 45 62, 47 62"]} />

      {/* 1 · Documentos indexados */}
      <div className={`absolute left-0 top-[6%] w-[44%] p-2.5 ${CARD}`}>
        <Step n={1}>Seus documentos</Step>
        <ul className="mt-2 space-y-1">
          {arquivos.map((a) => (
            <li key={a.nome} className="flex items-center gap-1.5">
              <FileText className="h-3 w-3 shrink-0 text-(--accent)" />
              <span className={`min-w-0 flex-1 truncate text-[9px] font-semibold sm:text-[10.5px] ${TXT}`}>{a.nome}</span>
              <span className={`hidden shrink-0 text-[8.5px] sm:inline ${MUTED}`}>{a.info}</span>
            </li>
          ))}
        </ul>
        <p className={`mt-2 rounded-lg border border-dashed border-(--accent)/40 bg-(--accent)/8 px-2 py-1.5 text-[8.5px] italic leading-snug sm:text-[10px] ${TXT}`}>
          “…o colaborador pode converter 1/3 das férias em abono pecuniário…”
        </p>
      </div>

      {/* 2 · Busca semântica */}
      <div className={`absolute left-0 top-[59%] w-[44%] p-2.5 ${CARD}`}>
        <Step n={2}>Busca os trechos</Step>
        <div className="mt-2 space-y-1.5">
          {trechos.map((s, i) => (
            <div key={s} className="flex items-center gap-1.5">
              <Search className={`h-3 w-3 shrink-0 ${i === 0 ? "text-(--accent)" : MUTED}`} />
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#eeeaf7] dark:bg-white/10">
                <span className="block h-full rounded-full bg-(--accent)" style={{ width: `${s * 100}%`, opacity: 1 - i * 0.25 }} />
              </span>
              <span className={`w-6 text-right font-mono text-[8.5px] sm:text-[9.5px] ${TXT}`}>{s.toFixed(2).replace(".", ",")}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 · Resposta citando a fonte */}
      <div className={`absolute right-[1%] top-[30%] w-[52%] ${CARD}`}>
        <div className="px-3 pt-2.5">
          <Step n={3}>Responde com fonte</Step>
        </div>
        <div className="space-y-2.5 p-3">
          <UserBubble>Posso vender parte das minhas férias?</UserBubble>
          <Ai>
            <p>
              Sim. Você pode converter até 1/3 das férias em abono, ou seja, 10 dias
              <sup className="ml-0.5 rounded bg-(--accent)/15 px-1 font-bold text-(--accent)">1</sup>.
            </p>
            <p className="mt-2 flex w-fit items-center gap-1 rounded-md border border-[#e6e0f5] bg-[#f7f5ff] px-1.5 py-1 text-[8.5px] font-semibold text-[#5b4f7c] dark:border-white/10 dark:bg-white/5 dark:text-white/60 sm:text-[9.5px]">
              <FileText className="h-3 w-3 text-(--accent)" /> 1 · Manual_RH.pdf · p. 12
            </p>
          </Ai>
        </div>
      </div>
    </>
  );
}

// ── Mídia: imagem, vídeo e áudio gerados ──────────────────────────────────────

function Tile({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg">
      <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {children}
      </svg>
      {label && (
        <span className="absolute bottom-1 left-1 rounded bg-black/45 px-1 text-[7.5px] font-semibold text-white backdrop-blur sm:text-[8.5px]">{label}</span>
      )}
    </div>
  );
}

function VisualScene() {
  const ruido = Array.from({ length: 64 }, (_, i) => ({ x: (i % 8) * 12.5, y: Math.floor(i / 8) * 12.5, o: ((i * 37) % 11) / 14 }));
  const onda = Array.from({ length: 32 }, (_, i) => 0.25 + Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.37)) * 0.75);
  return (
    <>
      {/* Prompt */}
      <div className={`absolute left-0 top-[6%] flex w-[80%] items-center gap-2 rounded-full py-1.5 pl-3 pr-1.5 ${CARD}`}>
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-(--accent)" />
        <span className={`min-w-0 flex-1 truncate text-[9.5px] sm:text-[11px] ${TXT}`}>garrafa de vidro em estúdio, luz suave, fundo lilás</span>
        <span className="shrink-0 rounded-full bg-(--accent) px-2.5 py-1 text-[9px] font-bold text-white sm:text-[10px]">Gerar</span>
      </div>

      {/* Grade de imagens */}
      <div className={`absolute left-0 top-[21%] grid w-[60%] grid-cols-2 gap-1.5 p-1.5 sm:w-[52%] ${CARD}`}>
        <Tile label="paisagem">
          <defs>
            <linearGradient id="ia-ceu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--accent)" />
              <stop offset="1" stopColor="var(--accent-2)" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#ia-ceu)" />
          <circle cx="66" cy="44" r="14" fill="#fff7d6" fillOpacity="0.9" />
          <polygon points="0,78 22,52 40,70 60,46 84,72 100,58 100,100 0,100" fill="#2e1a5c" />
          <polygon points="0,88 30,70 55,86 80,74 100,84 100,100 0,100" fill="#1b1233" />
        </Tile>
        <Tile label="produto">
          <rect width="100" height="100" fill="#ede7fb" />
          <ellipse cx="50" cy="84" rx="30" ry="7" fill="#c9bdf0" />
          <rect x="38" y="30" width="24" height="52" rx="8" fill="var(--accent)" fillOpacity="0.85" />
          <rect x="44" y="18" width="12" height="14" rx="3" fill="#2e1a5c" />
          <rect x="42" y="38" width="4" height="36" rx="2" fill="#fff" fillOpacity="0.45" />
        </Tile>
        <Tile label="retrato">
          <rect width="100" height="100" fill="#2e1a5c" />
          <circle cx="20" cy="22" r="8" fill="var(--accent-2)" fillOpacity="0.35" />
          <circle cx="80" cy="30" r="12" fill="var(--accent)" fillOpacity="0.35" />
          <circle cx="50" cy="44" r="16" fill="#f1c7a4" />
          <path d="M34 40 Q34 24 50 24 Q66 24 66 40 Q58 32 50 34 Q42 32 34 40 Z" fill="#2b2118" />
          <path d="M22 100 Q24 68 50 66 Q76 68 78 100 Z" fill="var(--accent-2)" />
        </Tile>
        <div className="relative aspect-square overflow-hidden rounded-lg bg-[#e9e4f6] dark:bg-white/10">
          <svg viewBox="0 0 100 100" className="h-full w-full blur-[2px]">
            {ruido.map((r) => (
              <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width="12.5" height="12.5" fill="var(--accent)" fillOpacity={r.o} />
            ))}
          </svg>
          <div className="absolute inset-x-2 bottom-2">
            <p className="text-[8px] font-bold text-white drop-shadow sm:text-[9px]">Gerando… 72%</p>
            <span className="mt-1 block h-1 overflow-hidden rounded-full bg-white/40">
              <span className="block h-full w-[72%] rounded-full bg-white" />
            </span>
          </div>
        </div>
      </div>

      {/* Vídeo */}
      <div className={`absolute right-[1%] top-[28%] w-[38%] p-1.5 ${CARD}`}>
        <div className="relative aspect-video overflow-hidden rounded-lg bg-[linear-gradient(135deg,#2e1a5c,var(--accent))]">
          <svg viewBox="0 0 160 90" className="absolute inset-0 h-full w-full">
            <circle cx="120" cy="30" r="14" fill="var(--accent-2)" fillOpacity="0.8" />
            <polygon points="0,70 40,48 80,66 120,50 160,64 160,90 0,90" fill="#1b1233" fillOpacity="0.8" />
          </svg>
          <span className="absolute inset-0 m-auto flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-(--accent)">
            <Play className="h-3.5 w-3.5 fill-current" />
          </span>
        </div>
        <div className="mt-1.5 flex gap-0.5">
          {[0.5, 0.7, 0.9, 0.6, 0.4].map((o, i) => (
            <span key={i} className="h-3 flex-1 rounded-sm bg-(--accent)" style={{ opacity: o }} />
          ))}
        </div>
        <p className={`mt-1 flex items-center gap-1 px-0.5 text-[8.5px] font-semibold sm:text-[9.5px] ${MUTED}`}>
          <Clapperboard className="h-3 w-3" /> Vídeo · 0:08
        </p>
      </div>

      {/* Áudio */}
      <div className={`animate-float-y absolute bottom-[4%] right-[1%] flex w-[46%] items-center gap-2 p-2.5 ${CARD}`}>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--accent) text-white">
          <Play className="h-3 w-3 fill-current" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex h-6 items-center gap-[2px]">
            {onda.map((h, i) => (
              <span key={i} className="flex-1 rounded-full bg-(--accent)" style={{ height: `${h * 100}%`, opacity: i < 13 ? 1 : 0.35 }} />
            ))}
          </div>
          <p className={`mt-0.5 truncate text-[8.5px] font-semibold sm:text-[9.5px] ${MUTED}`}>Narração · 0:24</p>
        </div>
      </div>
    </>
  );
}

// ── Conteúdo: post + roteiro sendo gerados ────────────────────────────────────

function ConteudoScene() {
  const roteiro = [
    ["0–3 s", "Gancho: “Pare de postar no improviso”"],
    ["3–12 s", "O problema de quem posta sem plano"],
    ["12–25 s", "3 ideias rápidas de pauta"],
  ];
  const dias = ["S", "T", "Q", "Q", "S", "S", "D"];
  return (
    <>
      {/* Post */}
      <div className={`absolute left-0 top-[6%] w-[50%] overflow-hidden ${CARD}`}>
        <div className="flex items-center gap-1.5 px-2.5 py-2">
          <span className="h-5 w-5 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-2))]" />
          <span className={`text-[9.5px] font-bold sm:text-[11px] ${TXT}`}>suamarca</span>
          <span className={`ml-auto text-[8px] sm:text-[9px] ${MUTED}`}>rascunho</span>
        </div>
        <div className="relative aspect-[16/11] bg-[linear-gradient(150deg,var(--accent),#2e1a5c)]">
          <svg viewBox="0 0 100 80" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="82" cy="16" r="18" fill="var(--accent-2)" fillOpacity="0.55" />
            <circle cx="12" cy="72" r="14" fill="#fff" fillOpacity="0.12" />
          </svg>
          <div className="absolute inset-0 flex flex-col justify-end p-2.5 text-white">
            <p className="text-[8px] font-semibold uppercase tracking-wider opacity-80 sm:text-[9px]">Carrossel · 1/5</p>
            <p className="text-sm font-black leading-tight sm:text-base">5 ideias de pauta pra essa semana</p>
          </div>
        </div>
        <div className={`flex items-center gap-2.5 px-2.5 pt-2 ${TXT}`}>
          <Heart className="h-3.5 w-3.5" />
          <MessageCircle className="h-3.5 w-3.5" />
          <Send className="h-3.5 w-3.5" />
          <Bookmark className="ml-auto h-3.5 w-3.5" />
        </div>
        <p className={`px-2.5 pb-2.5 pt-1 ${SIZE} ${TXT}`}>
          Sem ideia do que postar? Salva esse carrossel. <span className="font-semibold text-(--accent)">#conteudo #marketing</span>
          <Cursor />
        </p>
      </div>

      {/* Roteiro */}
      <div className={`absolute right-[1%] top-[30%] w-[48%] ${CARD}`}>
        <Header title="Roteiro · vídeo de 30 s" />
        <ul className="divide-y divide-[#eeeaf7] dark:divide-white/10">
          {roteiro.map(([t, txt]) => (
            <li key={t} className="flex gap-2 px-2.5 py-1.5">
              <span className="w-10 shrink-0 font-mono text-[8.5px] font-bold text-(--accent) sm:text-[9.5px]">{t}</span>
              <span className={`${SIZE} ${TXT}`}>{txt}</span>
            </li>
          ))}
          <li className="flex items-center gap-2 px-2.5 py-2">
            <span className="w-10 shrink-0 font-mono text-[8.5px] font-bold text-(--accent) sm:text-[9.5px]">25–30 s</span>
            <Shimmer w="50%" />
            <Cursor />
          </li>
        </ul>
      </div>

      {/* Semana de conteúdo */}
      <div className={`animate-float-y absolute bottom-[3%] right-[1%] w-[48%] p-2.5 ${CARD}`}>
        <p className={`text-[8px] font-bold uppercase tracking-wider sm:text-[9px] ${MUTED}`}>Semana de conteúdo</p>
        <div className="mt-1.5 flex justify-between">
          {dias.map((d, i) => (
            <span
              key={i}
              className={`flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold sm:h-6 sm:w-6 sm:text-[9px] ${
                i < 5 ? "bg-(--accent) text-white" : "bg-[#eeeaf7] text-[#6b6385] dark:bg-white/10 dark:text-white/50"
              }`}
            >
              {d}
            </span>
          ))}
        </div>
        <p className={`mt-1.5 text-[8.5px] font-semibold sm:text-[9.5px] ${TXT}`}>5 de 7 posts prontos</p>
      </div>
    </>
  );
}

// ── Seletor ───────────────────────────────────────────────────────────────────

const CENAS: Record<IaVariante, () => ReactNode> = {
  geral: GeralScene,
  chat: ChatScene,
  agentes: AgentesScene,
  rag: RagScene,
  visual: VisualScene,
  conteudo: ConteudoScene,
};

export function IaScene({ variante }: { variante: IaVariante }) {
  const Cena = CENAS[variante];
  return <Cena />;
}
