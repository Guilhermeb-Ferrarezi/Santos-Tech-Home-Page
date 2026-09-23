import type { LucideIcon } from "lucide-react";
import { Bot, Clock, FileSpreadsheet, Mail, MessageCircle, Send, Split, Webhook } from "lucide-react";
import type { CourseTheme } from "@/lib/course-themes";
import { FloatTerm, Panel } from "@/components/course-skins/scenes/code-kit";

/**
 * Cenas das automações no-code (n8n e Make): em vez de código, blocos ligados
 * num fluxo — é assim que a pessoa realmente trabalha nessas ferramentas.
 * Desenho original: nenhum ícone de marca, só a ideia de "nós conectados".
 */

type Node = { id: string; x: number; y: number; label: string; icon: LucideIcon; color: string; gatilho?: boolean };
type Edge = [string, string, string?];

function Flow({
  nodes,
  edges,
  shape,
  titulo,
  className,
}: {
  nodes: Node[];
  edges: Edge[];
  shape: "quadrado" | "circulo";
  titulo: string;
  className: string;
}) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <Panel className={className}>
      <p className="border-b border-white/10 px-3 py-1.5 font-mono text-[9px] text-white/45 sm:text-[10px]">{titulo}</p>
      <div
        className="relative h-[230px] sm:h-[250px]"
        style={{ backgroundImage: "radial-gradient(#ffffff1f 1px, transparent 1px)", backgroundSize: "14px 14px" }}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {edges.map(([a, b]) => {
            const p = byId[a];
            const q = byId[b];
            const mid = (p.x + q.x) / 2;
            return (
              <path
                key={a + b}
                d={`M${p.x} ${p.y} C ${mid} ${p.y}, ${mid} ${q.y}, ${q.x} ${q.y}`}
                fill="none"
                stroke="#ffffff55"
                strokeWidth={shape === "circulo" ? 3 : 1.6}
                strokeDasharray={shape === "circulo" ? "0.5 6" : undefined}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>
        {edges
          .filter((e) => e[2])
          .map(([a, b, rotulo]) => {
            const p = byId[a];
            const q = byId[b];
            return (
              <span
                key={`r-${a}${b}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded bg-[#0e1422] px-1 font-mono text-[8px] text-white/55 sm:text-[9px]"
                style={{ left: `${(p.x + q.x) / 2 + 2}%`, top: `${(p.y + q.y) / 2}%` }}
              >
                {rotulo}
              </span>
            );
          })}
        {nodes.map((n) => {
          const Icon = n.icon;
          return (
            <div
              key={n.id}
              className="absolute flex w-[21%] -translate-x-1/2 -translate-y-[22px] flex-col items-center sm:-translate-y-[26px]"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center border-2 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.8)] sm:h-[52px] sm:w-[52px] ${
                  shape === "circulo" ? "rounded-full" : n.gatilho ? "rounded-l-[22px] rounded-r-lg sm:rounded-l-[26px]" : "rounded-lg"
                }`}
                style={
                  shape === "circulo"
                    ? { background: n.color, borderColor: "#ffffff30" }
                    : { background: "#1b2233", borderColor: `${n.color}99` }
                }
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: shape === "circulo" ? "#fff" : n.color }} strokeWidth={2} />
              </div>
              <p className="mt-1 text-center text-[8.5px] font-semibold leading-tight text-white/85 sm:text-[9.5px]">{n.label}</p>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

// ── n8n: workflow com gatilho, condição e duas saídas ──────────────────────

export function N8nScene({ theme }: { theme: CourseTheme }) {
  const nodes: Node[] = [
    { id: "a", x: 12, y: 42, label: "Todo dia às 8h", icon: Clock, color: theme.accent2, gatilho: true },
    { id: "b", x: 37, y: 42, label: "Ler planilha de vendas", icon: FileSpreadsheet, color: "#34d399" },
    { id: "c", x: 62, y: 42, label: "Venda acima de R$ 1.000?", icon: Split, color: "#fbbf24" },
    { id: "d", x: 87, y: 20, label: "E-mail pro gerente", icon: Mail, color: theme.accent },
    { id: "e", x: 87, y: 70, label: "Avisar no Telegram", icon: Send, color: "#38bdf8" },
  ];
  return (
    <>
      <Flow
        titulo="workflow · alerta de vendas"
        shape="quadrado"
        className="left-0 top-[8%] w-full"
        nodes={nodes}
        edges={[["a", "b"], ["b", "c"], ["c", "d", "sim"], ["c", "e", "não"]]}
      />
      <FloatTerm className="bottom-[3%] right-[2%] w-[64%]">
        <p className="text-white/80">
          <span style={{ color: "#34d399" }}>●</span> Execução concluída · 1,2 s
        </p>
        <p className="text-white/80">
          <span style={{ color: theme.accent2 }}>✓</span> 3 alertas enviados sozinhos
        </p>
        <p className="mt-1 text-white/45">arraste, conecte, ative. Sem código.</p>
      </FloatTerm>
    </>
  );
}

// ── Make: cenário com módulos em círculo e um roteador ─────────────────────

export function MakeScene({ theme }: { theme: CourseTheme }) {
  const nodes: Node[] = [
    { id: "a", x: 12, y: 47, label: "Novo formulário", icon: Webhook, color: theme.accent2 },
    { id: "b", x: 38, y: 47, label: "Roteador", icon: Split, color: "#64748b" },
    { id: "c", x: 72, y: 15, label: "Salvar na planilha", icon: FileSpreadsheet, color: "#16a34a" },
    { id: "d", x: 72, y: 47, label: "IA classifica o lead", icon: Bot, color: theme.accent },
    { id: "e", x: 72, y: 79, label: "Avisar a equipe", icon: MessageCircle, color: "#e11d48" },
  ];
  return (
    <>
      <Flow
        titulo="cenário · novo lead"
        shape="circulo"
        className="left-0 top-[8%] w-full"
        nodes={nodes}
        edges={[["a", "b"], ["b", "c"], ["b", "d"], ["b", "e"]]}
      />
      <FloatTerm className="bottom-[3%] right-[2%] w-[64%]">
        <p className="text-white/80">
          <span style={{ color: "#34d399" }}>●</span> Cenário ativo · a cada 15 min
        </p>
        <p className="text-white/80">
          <span style={{ color: theme.accent2 }}>✓</span> 42 leads organizados hoje
        </p>
        <p className="mt-1 text-white/45">apps conversando entre si, sem código</p>
      </FloatTerm>
    </>
  );
}
