import { useState } from "react";
import { Lock } from "lucide-react";
import { NivelSeletor } from "@/components/course-skins/variants/ide-kit";
import { ritmo, type ConteudoProps, type PublicoProps } from "@/components/course-skins/variants/ide-util";
import { OutcomeText } from "@/components/course-skins/outcome-text";

/**
 * Jogos (Unity e Godot): “Para quem é” é a tela de seleção de personagem;
 * o conteúdo é o mapa-múndi do jogo, cada módulo uma fase com missões,
 * recompensa e inventário.
 */

// ── Pixel art original ──────────────────────────────────────────────────────

/** Boneco 10×12 em pixels. 1 = cabelo, 2 = pele, 3 = roupa, 4 = calça, 5 = olho. */
const BONECO = [
  "..111111..",
  ".11111111.",
  ".12222221.",
  ".25222252.",
  ".22222222.",
  "..222222..",
  ".33333333.",
  "3333333333",
  "2.333333.2",
  "..444444..",
  "..44..44..",
  "..55..55..",
];
const PALETAS = [
  { 1: "#3b2a1a", 2: "#f1c27d", 3: "#4B8BF5", 4: "#1e293b", 5: "#0b0f19" },
  { 1: "#111827", 2: "#c68642", 3: "#7CE38B", 4: "#334155", 5: "#0b0f19" },
  { 1: "#b45309", 2: "#ffdbac", 3: "#f07178", 4: "#1f2937", 5: "#0b0f19" },
  { 1: "#6b21a8", 2: "#e0ac69", 3: "#FFD43B", 4: "#1e293b", 5: "#0b0f19" },
  { 1: "#0f172a", 2: "#8d5524", 3: "#c792ea", 4: "#374151", 5: "#0b0f19" },
  { 1: "#9ca3af", 2: "#f1c27d", 3: "#f78c6c", 4: "#1e293b", 5: "#0b0f19" },
] as Record<number, string>[];

function Personagem({ paleta, className }: { paleta: Record<number, string>; className?: string }) {
  return (
    <svg viewBox="0 0 10 12" className={className} shapeRendering="crispEdges" aria-hidden="true">
      {BONECO.flatMap((linha, y) =>
        [...linha].map((c, x) => {
          if (c === ".") return null;
          return <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={paleta[+c]} />;
        }),
      )}
    </svg>
  );
}

function Moeda({ className = "h-4 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 10" className={`shrink-0 ${className}`} shapeRendering="crispEdges" aria-hidden="true">
      <rect x="1" y="0" width="6" height="10" fill="#FFD43B" />
      <rect x="0" y="1" width="8" height="8" fill="#FFD43B" />
      <rect x="3" y="2" width="2" height="6" fill="#00000040" />
    </svg>
  );
}

function Bau({ className = "h-8 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 10" className={`shrink-0 ${className}`} shapeRendering="crispEdges" aria-hidden="true">
      <rect x="1" y="1" width="10" height="3" fill="#b45309" />
      <rect x="0" y="4" width="12" height="6" fill="#92400e" />
      <rect x="0" y="4" width="12" height="1" fill="#FFD43B" />
      <rect x="5" y="4" width="2" height="3" fill="#FFD43B" />
      <rect x="2" y="0" width="8" height="1" fill="#d97706" />
    </svg>
  );
}

const ATRIBUTOS = ["Criatividade", "Lógica", "Persistência"];

export function JogosPublico({ itens }: PublicoProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-white/10 bg-[#0a0e1a] p-4 sm:p-7">
      {/* scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 4px)" }}
      />
      <p className="relative text-center font-mono text-[13px] font-bold uppercase tracking-[0.3em] text-(--accent-2) sm:text-[15px]">
        ◆ Escolha seu personagem ◆
      </p>
      <div className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((item, i) => {
          const sel = i === 0;
          return (
            <div
              key={item}
              className={`relative flex gap-4 rounded-lg border-2 p-4 ${
                sel ? "border-(--accent-2) bg-(--accent-2)/[0.07] shadow-[0_0_24px_-6px_var(--accent-2)]" : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {sel && (
                <span className="absolute -top-3 right-3 rounded-sm bg-(--accent-2) px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0b0f19]">
                  ▶ Selecionado
                </span>
              )}
              <div className="flex shrink-0 flex-col items-center">
                <div className="flex h-16 w-14 items-end justify-center rounded-md bg-black/40 pb-1">
                  <Personagem paleta={PALETAS[i % PALETAS.length]} className="h-12 w-10" />
                </div>
                <span className="mt-1.5 font-mono text-[10.5px] font-bold text-white/45">P{i + 1}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] leading-snug text-white/90">{item}</p>
                <div className="mt-3 space-y-1">
                  {ATRIBUTOS.map((a, k) => (
                    <div key={a} className="flex items-center gap-2">
                      <span className="w-[74px] shrink-0 font-mono text-[10.5px] text-white/40">{a}</span>
                      <span className="flex flex-1 gap-0.5">
                        {Array.from({ length: 8 }, (_, s) => (
                          <span
                            key={s}
                            className={`h-1.5 flex-1 ${s < 3 + ((i * 3 + k * 5) % 6) ? (k === 0 ? "bg-(--accent-2)" : k === 1 ? "bg-(--accent)" : "bg-[#f78c6c]") : "bg-white/10"}`}
                          />
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="relative mt-7 text-center font-mono text-[14px] font-bold uppercase tracking-[0.2em] text-white">
        <span className="animate-pulse text-(--accent-2)">▶ Press start</span>
        <span className="mt-1 block text-[12px] font-normal normal-case tracking-normal text-white/55">Achou o seu? Esse curso é pra você.</span>
      </p>
    </div>
  );
}

// ── Mapa-múndi ─────────────────────────────────────────────────────────────

export function JogosConteudo({ course, tier, tierIndex, onSelectTier, meta }: ConteudoProps) {
  const [sel, setSel] = useState(0);
  const total = tier.modules.length;
  const atual = Math.min(sel, total - 1);
  const m = tier.modules[atual];
  // pontos da trilha (em % do mapa): zigue-zague da esquerda pra direita
  const pts = tier.modules.map((_, i) => ({
    x: total === 1 ? 40 : 8 + (76 * i) / (total - 1),
    y: i % 2 === 0 ? 66 : 32,
  }));
  // a trilha termina na bandeira de chegada, depois da última fase
  const bandeira = { x: 94, y: pts[total - 1].y === 66 ? 36 : 62 };
  const caminho = [...pts, bandeira].map((p, i) => `${i ? "L" : "M"}${p.x * 10} ${p.y * 3}`).join(" ");

  return (
    <div className="overflow-hidden rounded-xl border-2 border-white/10 bg-[#0a0e1a]">
      {/* HUD */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-white/10 px-4 py-3 font-mono">
        <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-white">
          Mundo {tierIndex + 1}
          {course.tiers.length > 1 && <span className="text-white/40"> · {tier.levelName}</span>}
        </p>
        <NivelSeletor tiers={course.tiers} atual={tierIndex} onSelect={onSelectTier} rotulo={(_, i) => `Mundo ${i + 1}`} />
        <p className="flex items-center gap-1.5 text-[12px] text-(--accent-2)">
          <Moeda className="h-3.5 w-3" /> {tier.modules.reduce((s, x) => s + x.topics.length, 0)} missões
        </p>
      </div>

      {/* Mapa */}
      <div className="relative h-[190px] bg-[linear-gradient(180deg,#10233a_0%,#0e2a2a_55%,#132a1d_100%)] sm:h-[260px]">
        <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {/* montanhas e árvores decorativas */}
          <path d="M0 300 L120 170 L200 240 L310 140 L420 300 Z" fill="#ffffff08" />
          <path d="M560 300 L690 150 L780 230 L880 120 L1000 260 L1000 300 Z" fill="#ffffff08" />
          {[70, 250, 470, 610, 830, 950].map((x, k) => (
            <path key={x} d={`M${x} ${k % 2 ? 125 : 262} l14 -30 l14 30 Z`} fill="#1f5135" />
          ))}
          <path d={caminho} fill="none" stroke="#ffffff55" strokeWidth="5" strokeDasharray="2 14" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
        {pts.map((p, i) => {
          const feita = i < atual;
          const on = i === atual;
          return (
            <button
              key={tier.modules[i].title}
              type="button"
              onClick={() => setSel(i)}
              aria-label={`Fase ${i + 1}: ${tier.modules[i].title}`}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-md border-b-4 font-mono text-[15px] font-black transition sm:h-14 sm:w-14 sm:text-lg ${
                  on
                    ? "scale-110 border-[#4d8a2c] bg-(--accent-2) text-[#0b0f19] shadow-[0_0_28px_-4px_var(--accent-2)]"
                    : feita
                      ? "border-[#a16207] bg-[#FFD43B] text-[#0b0f19]"
                      : "border-black/50 bg-[#1e293b] text-white/70 hover:bg-[#2b3a52]"
                }`}
              >
                {i + 1}
              </span>
              <span className="mt-1.5 hidden rounded bg-black/55 px-1.5 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-wider text-white/80 sm:block">
                Fase {i + 1}
              </span>
            </button>
          );
        })}
        {/* bandeira de chegada */}
        <svg
          viewBox="0 0 6 9"
          className="absolute h-8 w-6 -translate-x-[3px] -translate-y-full sm:h-10 sm:w-7"
          style={{ left: `${bandeira.x}%`, top: `${bandeira.y}%` }}
          shapeRendering="crispEdges"
          aria-hidden="true"
        >
          <rect x="0" y="0" width="1" height="9" fill="#e5e7eb" />
          <rect x="1" y="0" width="5" height="4" fill="#f07178" />
          <rect x="2" y="1" width="1" height="1" fill="#fff" />
          <rect x="4" y="2" width="1" height="1" fill="#fff" />
        </svg>
      </div>

      {/* Painel da fase */}
      <div className="grid gap-6 border-t-2 border-white/10 p-4 sm:p-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="min-w-0">
          <p className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-(--accent-2)">
            Fase {atual + 1} de {total}
          </p>
          <p className="mt-1 text-xl font-black leading-snug text-white">{m.title}</p>
          <div className="mt-3 flex gap-1">
            {Array.from({ length: total }, (_, k) => (
              <span key={k} className={`h-2 flex-1 ${k <= atual ? "bg-(--accent-2)" : "bg-white/10"}`} />
            ))}
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Missões</p>
          <ul className="mt-2 space-y-2">
            {m.topics.map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[14px] leading-snug text-white/90">
                <Moeda className="mt-0.5 h-4 w-3.5" />
                {t}
              </li>
            ))}
          </ul>
          {atual < total - 1 && (
            <p className="mt-3 flex items-center gap-2 font-mono text-[12px] text-white/40">
              <Lock className="h-3.5 w-3.5" /> Próxima: {tier.modules[atual + 1].title}
            </p>
          )}
        </div>

        <div className="min-w-0 space-y-5">
          <div className="rounded-lg border-2 border-[#FFD43B]/30 bg-[#FFD43B]/[0.06] p-4">
            <p className="flex items-center gap-3 font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#FFD43B]">
              <Bau /> Recompensa do mundo
            </p>
            <OutcomeText text={tier.outcome} className="mt-3 text-[14px] leading-snug text-white/90" />
            <p className="mt-2 font-mono text-[11.5px] text-white/40">{ritmo(tier, meta)}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Inventário</p>
            <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              {tier.tools.map((tool) => (
                <span key={tool} className="flex min-h-[44px] items-center justify-center rounded border-2 border-white/10 bg-black/40 px-2 py-1.5 text-center text-[12.5px] leading-tight text-white/80">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
