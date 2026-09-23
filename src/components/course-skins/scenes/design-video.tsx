import type { CourseTheme } from "@/lib/course-themes";
import { EditorWindow } from "@/components/course-skins/scenes/design-kit";

const VIOLET = "#8b7cf6";
const GREEN = "#34d399";
const CYAN = "#22d3ee";

/** Forma de onda determinística (sem aleatoriedade entre renders). */
function wave(n: number, seed = 1) {
  return Array.from({ length: n }, (_, i) => {
    const v = Math.abs(Math.sin(i * 0.9 + seed) * 0.6 + Math.sin(i * 0.37 + seed * 2) * 0.4);
    return 0.18 + v * 0.82;
  });
}

/** Barras de áudio dentro de um clipe (SVG preenchendo o pai). */
function Waveform({ color, seed = 1, bars = 40 }: { color: string; seed?: number; bars?: number }) {
  const w = wave(bars, seed);
  return (
    <svg viewBox={`0 0 ${bars * 4} 20`} preserveAspectRatio="none" className="h-full w-full">
      {w.map((v, i) => (
        <rect key={i} x={i * 4 + 0.5} y={10 - v * 9} width="2.4" height={v * 18} rx="1" fill={color} />
      ))}
    </svg>
  );
}

// ── CapCut: edição vertical no celular ────────────────────────────────────────

export function CapcutScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      {/* Celular */}
      <div className="absolute left-[8%] top-[4%] aspect-[9/19] h-[92%] rounded-[30px] border-[5px] border-[#2a2630] bg-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]">
        <div className="absolute left-1/2 top-1.5 h-3 w-14 -translate-x-1/2 rounded-full bg-[#2a2630]" />
        <div className="flex h-full flex-col overflow-hidden rounded-[24px] pt-5">
          {/* Vídeo 9:16 */}
          <div className="relative mx-2 flex-[1.35] overflow-hidden rounded-lg">
            <svg viewBox="0 0 90 120" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="cc-bg" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor={VIOLET} />
                  <stop offset="1" stopColor={theme.accent} />
                </linearGradient>
              </defs>
              <rect width="90" height="120" fill="url(#cc-bg)" />
              <circle cx="72" cy="22" r="16" fill={theme.accent2} fillOpacity="0.55" />
              {/* Pessoa falando (sem rosto) */}
              <path d="M18 120 q4 -34 27 -34 q23 0 27 34 z" fill="#1f1a24" />
              <circle cx="45" cy="66" r="15" fill="#f1c7a4" />
              <path d="M30 64 q0 -18 16 -18 q15 0 15 14 q-9 -6 -19 -2 q-6 2 -12 6 z" fill="#2b2118" />
            </svg>
            {/* Legenda estilo "karaokê" */}
            <div className="absolute inset-x-0 bottom-[16%] text-center text-[11px] font-black uppercase leading-tight text-white [text-shadow:0_2px_0_#000] sm:text-[13px]">
              isso <span className="text-(--accent-2)">mudou</span>
              <br />o meu jogo
            </div>
            <div className="absolute left-2 top-2 rounded bg-black/50 px-1.5 py-0.5 font-mono text-[7px] text-white/80">00:07</div>
          </div>

          {/* Timeline do app */}
          <div className="relative mx-2 mt-2 flex-1 space-y-1">
            <div className="flex h-[26%] gap-0.5">
              {[VIOLET, theme.accent, "#f59e0b", VIOLET].map((c, i) => (
                <span key={i} className="rounded-[3px]" style={{ background: c, flex: [1.2, 0.8, 1, 0.9][i], opacity: 0.9 }} />
              ))}
            </div>
            <div className="flex h-[16%] gap-1 pl-3">
              {[0.9, 1.3, 0.7].map((f, i) => (
                <span key={i} className="rounded-[3px] bg-(--accent-2) px-1 font-mono text-[6px] font-bold leading-[10px] text-black/70" style={{ flex: f }}>
                  T
                </span>
              ))}
            </div>
            <div className="h-[18%] rounded-[3px] bg-[#34d399]/15 px-0.5">
              <Waveform color={GREEN} seed={3} />
            </div>
            <span className="absolute -top-1 bottom-[12%] left-[46%] w-0.5 rounded-full bg-white" />
            <div className="absolute inset-x-0 bottom-0 flex justify-between px-1 font-mono text-[6px] text-white/45 sm:text-[7px]">
              <span>Editar</span>
              <span>Áudio</span>
              <span className="text-white">Texto</span>
              <span>Efeitos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Legendas automáticas */}
      <div className="animate-float-y absolute right-[1%] top-[26%] w-[44%] rounded-xl border border-white/10 bg-[#141217]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <p className="text-[10px] font-bold text-white/80">Legendas automáticas</p>
        <div className="mt-2 space-y-1.5">
          {["isso mudou o meu jogo", "e vou te mostrar como", "em 3 passos simples"].map((l, i) => (
            <div key={l} className="flex items-center gap-2">
              <span className="font-mono text-[8px] text-white/35">0{i * 2 + 5}s</span>
              <span className={`truncate rounded px-1.5 py-0.5 text-[9px] ${i === 0 ? "bg-(--accent) text-white" : "bg-white/8 text-white/60"}`}>
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Velocidade (curva) */}
      <div className="absolute bottom-[14%] right-[4%] w-[40%] rounded-xl border border-white/10 bg-[#141217]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] font-bold text-white/80">Velocidade</p>
          <p className="font-mono text-[9px] text-(--accent-2)">Rampa 2×</p>
        </div>
        <svg viewBox="0 0 120 40" className="mt-1.5 w-full">
          <line x1="0" x2="120" y1="20" y2="20" stroke="#fff" strokeOpacity="0.1" />
          <path d="M0 30 C 30 30, 40 6, 60 6 S 90 32, 120 30" fill="none" stroke={theme.accent} strokeWidth="2.4" strokeLinecap="round" />
          {[0, 60, 120].map((x, i) => (
            <circle key={x} cx={x} cy={[30, 6, 30][i]} r="3" fill="#141217" stroke="#fff" strokeWidth="1.2" />
          ))}
        </svg>
      </div>

      <div className="absolute bottom-[3%] right-[10%] rounded-full bg-white px-3 py-1.5 font-mono text-[10px] font-bold text-[#141217] shadow-lg">
        1080p · 60 fps · Exportar
      </div>
    </>
  );
}

// ── DaVinci Resolve: página Color com rodas e nós ─────────────────────────────

function ColorWheel({ label, puck, values }: { label: string; puck: [number, number]; values: string }) {
  return (
    <div className="text-center">
      <div className="relative mx-auto aspect-square w-full max-w-[74px]">
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: "conic-gradient(from 90deg, #ff4d4d, #ffd24d, #5cff7a, #4de1ff, #5c6bff, #ff4dd8, #ff4d4d)" }}
        />
        <div className="absolute inset-[9%] rounded-full bg-[radial-gradient(circle,#2a2630_0%,#2a2630cc_45%,transparent_100%)]" />
        <span className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
        <span className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
        <span
          className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-transparent"
          style={{ left: `${50 + puck[0]}%`, top: `${50 + puck[1]}%` }}
        />
      </div>
      <p className="mt-1 text-[9px] font-bold text-white/75">{label}</p>
      <p className="font-mono text-[7px] text-white/40 sm:text-[8px]">{values}</p>
    </div>
  );
}

export function DavinciScene({ theme }: { theme: CourseTheme }) {
  const scene = (
    <>
      <rect width="240" height="120" fill="url(#dv-sky)" />
      <circle cx="170" cy="70" r="18" fill="#ffe2b0" />
      <path d="M0 86 L60 62 L110 80 L160 58 L240 84 V120 H0 Z" fill="#23303a" />
      <path d="M96 120 L118 84 L124 84 L150 120 Z" fill="#3a3f45" />
      <path d="M120 120 L121 86" stroke="#ffe2b0" strokeWidth="1.4" strokeDasharray="4 4" />
    </>
  );
  return (
    <>
      <EditorWindow title="curta_final — Color" tabs={["Color", "Fusion", "Fairlight", "Deliver"]} className="left-0 top-[9%] w-[84%]">
        {/* Visualizador com antes/depois */}
        <div className="relative bg-black">
          <svg viewBox="0 0 240 110" className="block w-full">
            <defs>
              <linearGradient id="dv-sky" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#1f5a70" />
                <stop offset="0.7" stopColor={theme.accent2} />
                <stop offset="1" stopColor="#e2743a" />
              </linearGradient>
              <filter id="dv-flat">
                <feColorMatrix type="saturate" values="0.12" />
                <feComponentTransfer>
                  <feFuncR type="linear" slope="0.7" intercept="0.14" />
                  <feFuncG type="linear" slope="0.7" intercept="0.14" />
                  <feFuncB type="linear" slope="0.7" intercept="0.14" />
                </feComponentTransfer>
              </filter>
              <clipPath id="dv-left">
                <rect width="96" height="120" />
              </clipPath>
            </defs>
            {scene}
            <g clipPath="url(#dv-left)" filter="url(#dv-flat)">
              {scene}
            </g>
            <line x1="96" x2="96" y1="0" y2="110" stroke="#fff" strokeWidth="1.2" />
            <circle cx="96" cy="55" r="5" fill="#fff" />
          </svg>
          <span className="absolute left-2 top-2 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[8px] text-white/70">LOG</span>
          <span className="absolute right-2 top-2 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[8px] text-(--accent-2)">Rec.709 · look</span>
        </div>
        {/* Rodas de cor */}
        <div className="grid grid-cols-3 gap-2 border-t border-white/10 px-3 py-2.5">
          <ColorWheel label="Lift" puck={[-10, 12]} values="-0.02 · 0.01" />
          <ColorWheel label="Gamma" puck={[6, -4]} values="0.03 · 0.00" />
          <ColorWheel label="Gain" puck={[14, -12]} values="1.08 · 1.02" />
        </div>
      </EditorWindow>

      {/* Nós */}
      <div className="animate-float-y absolute bottom-[4%] right-0 sm:-bottom-[10%] w-[50%] rounded-xl border border-white/10 bg-[#141217]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <p className="text-[10px] font-bold text-white/80">Nós</p>
        <svg viewBox="0 0 220 56" className="mt-1 w-full">
          <path d="M58 28 H82 M140 28 H164" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
          {[
            { x: 4, t: "01 Primária" },
            { x: 82, t: "02 Pele" },
            { x: 164, t: "03 Look" },
          ].map((n, i) => (
            <g key={n.t}>
              <rect x={n.x} y="10" width={i === 1 ? 58 : 54} height="36" rx="5" fill="#1f1c24" stroke={i === 2 ? theme.accent : "#ffffff30"} strokeWidth={i === 2 ? 1.6 : 1} />
              <rect x={n.x + 6} y="16" width="20" height="14" rx="2" fill={i === 2 ? theme.accent : "#3a3f45"} fillOpacity={i === 2 ? 0.8 : 1} />
              <text x={n.x + 6} y="41" fontSize="7" fill="#ffffffb0" fontFamily="ui-monospace, monospace">
                {n.t}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </>
  );
}

// ── Adobe Premiere: monitor de programa + timeline multitrilha ────────────────

const TRACKS: { id: string; clips: { from: number; to: number; label?: string }[]; color: string; audio?: boolean }[] = [
  { id: "V3", color: "var(--accent)", clips: [{ from: 34, to: 62, label: "Título" }] },
  { id: "V2", color: CYAN, clips: [{ from: 18, to: 36, label: "B-roll" }, { from: 64, to: 90, label: "B-roll" }] },
  { id: "V1", color: VIOLET, clips: [{ from: 0, to: 30, label: "Entrevista" }, { from: 31, to: 70, label: "Entrevista" }, { from: 71, to: 100 }] },
  { id: "A1", color: GREEN, audio: true, clips: [{ from: 0, to: 70 }, { from: 71, to: 100 }] },
  { id: "A2", color: "#fbbf24", audio: true, clips: [{ from: 0, to: 100 }] },
];

export function PremiereScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <EditorWindow title="campanha_institucional.prproj" tabs={["Edição", "Cor", "Áudio"]} className="left-0 top-[6%] w-[84%]">
        {/* Monitor de programa */}
        <div className="flex justify-center bg-[#0e0c11] py-2">
          <div className="relative w-[62%] overflow-hidden rounded-sm">
            <svg viewBox="0 0 160 90" className="block w-full">
              <rect width="160" height="90" fill="#2a2140" />
              <rect x="0" y="0" width="160" height="90" fill={theme.accent} fillOpacity="0.12" />
              <rect x="104" y="14" width="40" height="56" rx="2" fill="#3a2f58" />
              <rect x="110" y="20" width="12" height="16" fill="#fbbf24" fillOpacity="0.35" />
              <rect x="126" y="20" width="12" height="16" fill="#fbbf24" fillOpacity="0.2" />
              <path d="M40 90 q4 -28 26 -28 q22 0 26 28 z" fill="#1f1a24" />
              <circle cx="66" cy="48" r="13" fill="#f1c7a4" />
              <path d="M53 46 q0 -16 14 -16 q13 0 13 12 q-8 -5 -16 -2 q-6 2 -11 6 z" fill="#2b2118" />
              {/* Lower third */}
              <rect x="8" y="64" width="60" height="16" fill="#000" fillOpacity="0.6" />
              <rect x="8" y="64" width="2.5" height="16" fill={theme.accent} />
              <text x="14" y="71.5" fontSize="5.5" fontWeight="700" fill="#fff" fontFamily="Poppins, sans-serif">
                Ana Souza
              </text>
              <text x="14" y="77.5" fontSize="4" fill="#ffffffaa" fontFamily="Poppins, sans-serif">
                Diretora criativa
              </text>
            </svg>
          </div>
        </div>

        {/* Timeline */}
        <div className="border-t border-white/10 px-2 pb-2 pt-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold text-(--accent-2)">00:01:24:12</span>
            <span className="font-mono text-[8px] text-white/35">Sequência 01 · 4K · 23,976</span>
          </div>
          <div className="relative mt-1.5 space-y-[3px]">
            {TRACKS.map((t) => (
              <div key={t.id} className="flex items-center gap-1.5">
                <span className="w-4 shrink-0 font-mono text-[7px] text-white/40">{t.id}</span>
                <div className="relative h-3.5 flex-1 rounded-[2px] bg-white/[0.03] sm:h-4">
                  {t.clips.map((c, i) => (
                    <span
                      key={i}
                      className="absolute inset-y-0 overflow-hidden rounded-[2px] px-1 font-mono text-[6px] leading-[14px] text-black/70 sm:leading-4"
                      style={{
                        left: `${c.from}%`,
                        width: `${c.to - c.from}%`,
                        background: t.audio ? `color-mix(in srgb, ${t.color} 22%, transparent)` : t.color,
                        boxShadow: t.audio ? `inset 0 0 0 1px ${t.color}` : undefined,
                      }}
                    >
                      {t.audio ? <Waveform color={t.color} seed={i + t.id.length} bars={30} /> : c.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {/* Agulha */}
            <span className="pointer-events-none absolute -top-1 bottom-0 left-[calc(1.375rem+46%)] w-px bg-(--accent-2)">
              <span className="absolute -left-[4px] -top-0.5 h-2 w-[9px] rounded-sm bg-(--accent-2)" />
            </span>
          </div>
        </div>
      </EditorWindow>

      {/* Lumetri */}
      <div className="animate-float-y absolute -bottom-[4%] left-[3%] w-[40%] rounded-xl border border-white/10 bg-[#141217]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] font-bold text-white/80">Lumetri · Curvas</p>
          <p className="font-mono text-[8px] text-white/40">RGB</p>
        </div>
        <svg viewBox="0 0 100 50" className="mt-1.5 h-12 w-full" preserveAspectRatio="none">
          <path d="M0 50 L100 0" stroke="#fff" strokeOpacity="0.12" />
          <path d="M0 48 C 30 46, 40 22, 60 18 S 90 4, 100 2" fill="none" stroke="#fff" strokeWidth="1.6" />
          <path d="M0 50 C 30 44, 46 30, 62 20 S 88 8, 100 4" fill="none" stroke={theme.accent} strokeWidth="1.2" strokeOpacity="0.9" />
          <path d="M0 46 C 26 44, 44 26, 60 22 S 90 6, 100 0" fill="none" stroke={CYAN} strokeWidth="1.2" strokeOpacity="0.8" />
        </svg>
      </div>

      <div className="absolute bottom-[1%] right-[2%] w-[40%] rounded-xl border border-white/10 bg-[#141217]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] font-bold text-white/80">Exportando</p>
          <p className="font-mono text-[9px] text-white/50">72%</p>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[72%] rounded-full bg-(--accent)" />
        </div>
        <p className="mt-1.5 font-mono text-[8px] text-white/45">H.264 · YouTube 4K</p>
      </div>
    </>
  );
}
