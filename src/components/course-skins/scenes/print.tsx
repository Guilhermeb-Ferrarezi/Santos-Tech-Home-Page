import type { CourseTheme } from "@/lib/course-themes";

// ── Universo 3D: impressora + fatiador ────────────────────────────────────────

const CAMADAS = 30;
const IMPRESSAS = 14;

export function PrintScene({ theme }: { theme: CourseTheme }) {
  const cx = 250;
  const base = 330;
  const layerH = 6;
  const raio = (t: number) => 44 + 30 * Math.sin(Math.PI * (0.15 + 0.8 * t));

  const layers = Array.from({ length: CAMADAS }, (_, i) => {
    const t = i / (CAMADAS - 1);
    return { i, y: base - i * layerH, rx: raio(t) };
  });
  const topo = layers[IMPRESSAS - 1];
  const bico = { x: cx + topo.rx * 0.45, y: topo.y - 6 };

  return (
    <>
      <svg viewBox="0 0 520 440" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="plate" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#2a2a2a" />
            <stop offset="1" stopColor="#151515" />
          </linearGradient>
        </defs>

        {/* Mesa de impressão isométrica */}
        <polygon points="250,262 420,330 250,398 80,330" fill="url(#plate)" stroke="#ffffff22" />
        {Array.from({ length: 7 }, (_, k) => {
          const f = (k + 1) / 8;
          return (
            <g key={k} stroke="#ffffff10">
              <line x1={250 - 170 * f} y1={330 - 68 * f} x2={420 - 170 * f} y2={398 - 68 * f} />
              <line x1={250 + 170 * f} y1={330 - 68 * f} x2={80 + 170 * f} y2={398 - 68 * f} />
            </g>
          );
        })}
        <polygon points="80,330 250,398 250,410 80,342" fill="#0c0c0c" />
        <polygon points="250,398 420,330 420,342 250,410" fill="#1d1d1d" />

        {/* Parte ainda não impressa (fantasma) */}
        {layers.slice(IMPRESSAS).map((l) =>
          l.i % 2 === 0 ? (
            <ellipse
              key={l.i}
              cx={cx}
              cy={l.y}
              rx={l.rx}
              ry={l.rx * 0.36}
              fill="none"
              stroke={theme.accent2}
              strokeOpacity="0.5"
              strokeDasharray="4 4"
            />
          ) : null,
        )}

        {/* Camadas impressas */}
        {layers.slice(0, IMPRESSAS).map((l) => (
          <ellipse
            key={l.i}
            cx={cx}
            cy={l.y}
            rx={l.rx}
            ry={l.rx * 0.36}
            fill={theme.accent}
            stroke="#000"
            strokeOpacity="0.25"
          />
        ))}
        <ellipse cx={cx} cy={topo.y} rx={topo.rx} ry={topo.rx * 0.36} fill={theme.accent2} fillOpacity="0.9" />
        <ellipse cx={cx} cy={topo.y} rx={topo.rx - 7} ry={(topo.rx - 7) * 0.36} fill={theme.accent} fillOpacity="0.55" />

        {/* Pórtico e cabeçote */}
        <rect x="60" y={bico.y - 62} width="400" height="10" rx="3" fill="#2b2b2b" stroke="#ffffff1a" />
        <rect x={bico.x - 24} y={bico.y - 70} width="48" height="42" rx="6" fill="#e5e5e5" />
        <rect x={bico.x - 24} y={bico.y - 70} width="48" height="10" rx="4" fill="#bdbdbd" />
        <circle cx={bico.x} cy={bico.y - 46} r="7" fill="#9a9a9a" />
        <polygon points={`${bico.x - 7},${bico.y - 28} ${bico.x + 7},${bico.y - 28} ${bico.x},${bico.y - 2}`} fill="#c9a227" />
        <circle cx={bico.x} cy={bico.y} r="5" fill={theme.accent2} className="animate-pulse" />

        {/* Filamento */}
        <path
          d={`M${bico.x} ${bico.y - 70} C ${bico.x} ${bico.y - 130}, 470 ${bico.y - 150}, 470 60`}
          fill="none"
          stroke={theme.accent}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Card do fatiador */}
      <div className="animate-float-y absolute bottom-[2%] left-[2%] w-[52%] rounded-xl border border-white/10 bg-[#141414]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] font-bold text-white/70">Imprimindo</p>
          <p className="font-mono text-[10px] text-white/50">camada 142 / 310</p>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[46%] rounded-full" style={{ background: theme.accent }} />
        </div>
        <p className="mt-2 font-mono text-[10px] text-white/55">PLA · 0,2 mm · 3h12 restantes</p>
      </div>
    </>
  );
}
