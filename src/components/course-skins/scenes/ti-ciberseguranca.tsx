import type { CourseTheme } from "@/lib/course-themes";
import { ScenePanel } from "@/components/course-skins/scenes/ti-parts";

// ── T.I · Cibersegurança: escudo + cadeado + log de tentativas bloqueadas ─────

const RED = "#F43F5E";

/** Ângulo de chegada + posição do rótulo (relativa ao ponto de origem). */
const ATAQUES = [
  { a: 180, label: "Força bruta SSH", dx: -9, dy: 4, anchor: "end" },
  { a: 226, label: "Phishing", dx: -9, dy: 0, anchor: "end" },
  { a: 298, label: "SQL injection", dx: -9, dy: -2, anchor: "end" },
  { a: 22, label: "Varredura", dx: 0, dy: 18, anchor: "middle" },
] as const;

const LOG = [
  { h: "14:02:11", o: "SSH :22 · força bruta" },
  { h: "14:02:48", o: "SQL injection · /login" },
  { h: "14:03:05", o: "Varredura · 1.024 portas" },
];

export function CibersegurancaScene({ theme }: { theme: CourseTheme }) {
  const c = { x: 292, y: 180 };
  const r = 124;

  return (
    <>
      <svg viewBox="0 0 520 440" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="ti-shield" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={theme.accent} />
            <stop offset="1" stopColor="#0a3b35" />
          </linearGradient>
        </defs>

        {/* Perímetro (anéis de defesa) */}
        <circle cx={c.x} cy={c.y} r={r} fill="none" stroke={theme.accent} strokeOpacity="0.35" strokeDasharray="3 7" strokeWidth="2" />
        <circle cx={c.x} cy={c.y} r={r - 38} fill={theme.accent} fillOpacity="0.05" stroke={theme.accent} strokeOpacity="0.25" />
        <circle cx={c.x} cy={c.y} r={r - 72} fill={theme.accent} fillOpacity="0.06" />

        {/* Tentativas de ataque, barradas no perímetro */}
        {ATAQUES.map(({ a, label, dx, dy, anchor }, i) => {
          const rad = (a * Math.PI) / 180;
          const fora = { x: c.x + (r + 46) * Math.cos(rad), y: c.y + (r + 46) * Math.sin(rad) };
          const borda = { x: c.x + r * Math.cos(rad), y: c.y + r * Math.sin(rad) };
          return (
            <g key={a}>
              <line x1={fora.x} y1={fora.y} x2={borda.x} y2={borda.y} stroke={RED} strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.8" />
              <circle cx={fora.x} cy={fora.y} r="4" fill={RED} fillOpacity="0.6" />
              <g transform={`translate(${borda.x} ${borda.y})`}>
                <circle r="11" fill="#1a0b10" stroke={RED} strokeWidth="2" className="motion-safe:animate-pulse" style={{ animationDelay: `${i * 400}ms` }} />
                <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke={RED} strokeWidth="2.4" strokeLinecap="round" />
              </g>
              <text
                x={fora.x + dx}
                y={fora.y + dy}
                textAnchor={anchor}
                fontSize="9.5"
                fontWeight="700"
                fill="#fda4af"
                fontFamily="ui-sans-serif, system-ui"
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* Escudo */}
        <g transform={`translate(${c.x} ${c.y})`}>
          <path d="M0 -84 L66 -60 V-4 C66 42 38 72 0 88 C-38 72 -66 42 -66 -4 V-60 Z" fill="#000" fillOpacity="0.35" transform="translate(6 10)" />
          <path d="M0 -84 L66 -60 V-4 C66 42 38 72 0 88 C-38 72 -66 42 -66 -4 V-60 Z" fill="url(#ti-shield)" stroke={theme.accent2} strokeWidth="3" />
          <path d="M0 -84 L66 -60 V-4 C66 42 38 72 0 88 Z" fill="#000" fillOpacity="0.14" />
          {/* Cadeado */}
          <path d="M-18 -4 V-20 a18 18 0 0 1 36 0 V-4" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
          <rect x="-30" y="-8" width="60" height="48" rx="9" fill="#fff" />
          <circle cx="0" cy="10" r="6.5" fill="#0a3b35" />
          <rect x="-3" y="12" width="6" height="14" rx="2.5" fill="#0a3b35" />
        </g>
      </svg>

      {/* Log do firewall */}
      <ScenePanel title="Firewall · tentativas bloqueadas" className="animate-float-y bottom-[2%] left-0 w-[76%]">
        <div className="divide-y divide-white/5">
          {LOG.map((l) => (
            <div key={l.h} className="flex items-center gap-2 px-3 py-1.5 max-sm:[&:nth-child(3)]:hidden">
              <span className="hidden shrink-0 font-mono text-[9px] text-white/35 sm:inline sm:text-[10px]">{l.h}</span>
              <span className="min-w-0 flex-1 truncate text-[9.5px] text-white/80 sm:text-[11px]">{l.o}</span>
              <span className="shrink-0 rounded px-1.5 py-0.5 text-[8px] font-black tracking-wider sm:text-[9px]" style={{ background: `${RED}26`, color: "#fda4af" }}>
                BLOQUEADO
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-3 py-2 text-[9px] sm:text-[10.5px]">
          <span className="font-bold" style={{ color: theme.accent2 }}>
            ✓ 0 invasões hoje
          </span>
          <span className="text-white/45">1.284 bloqueios</span>
        </div>
      </ScenePanel>
    </>
  );
}
