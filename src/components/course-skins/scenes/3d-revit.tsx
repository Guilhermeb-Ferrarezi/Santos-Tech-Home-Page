import type { CourseTheme } from "@/lib/course-themes";

// ── Universo 3D · Revit: edifício BIM em isométrico, com corte e quantitativos ──
//
// Um sobrado de 12 × 8 m e dois pavimentos em projeção isométrica. Uma caixa de
// corte remove a metade da frente (que fica só tracejada) e revela o interior:
// lajes, paredes e divisórias cortadas aparecem hachuradas, como numa prancha de
// corte. O card mostra a tabela de quantitativos que o modelo gera sozinho.

type P3 = [number, number, number];

const S = 18.5; // px por metro
const CX = 236;
const CY = 160;
const COS30 = Math.cos(Math.PI / 6);

const LX = 12;
const LY = 8;
const TOPO = 6.8; // topo da platibanda
const CORTE = 6; // plano de corte (x = 6 m)
const E = 0.25; // espessura de parede e laje

/** Níveis: [piso acabado, face inferior da laje de cima]. */
const PAVIMENTOS: [number, number][] = [
  [E, 3],
  [3 + E, 6],
];

const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

function iso([x, y, z]: P3): [number, number] {
  return [CX + (x - y) * COS30 * S, CY + (x + y) * 0.5 * S - z * S];
}
const pts = (...ps: P3[]) =>
  ps
    .map(iso)
    .map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`)
    .join(" ");

/** Retângulo no plano x = cte (face voltada pra +x). */
const faceX = (x: number, y1: number, y2: number, z1: number, z2: number) => pts([x, y1, z1], [x, y2, z1], [x, y2, z2], [x, y1, z2]);
/** Retângulo no plano y = cte (face voltada pra +y). */
const faceY = (y: number, x1: number, x2: number, z1: number, z2: number) => pts([x1, y, z1], [x2, y, z1], [x2, y, z2], [x1, y, z2]);
/** Retângulo no plano z = cte (face de cima). */
const faceZ = (z: number, x1: number, x2: number, y1: number, y2: number) => pts([x1, y1, z], [x2, y1, z], [x2, y2, z], [x1, y2, z]);

/** Caixa sólida (móveis): desenha as três faces visíveis. */
function Caixa({ x1, x2, y1, y2, z1, z2, cor }: { x1: number; x2: number; y1: number; y2: number; z1: number; z2: number; cor: string }) {
  return (
    <g stroke="#1a110b" strokeOpacity="0.35" strokeWidth="0.6">
      <polygon points={faceY(y2, x1, x2, z1, z2)} fill={cor} fillOpacity="0.75" />
      <polygon points={faceX(x2, y1, y2, z1, z2)} fill={cor} fillOpacity="0.55" />
      <polygon points={faceZ(z2, x1, x2, y1, y2)} fill={cor} />
    </g>
  );
}

/** Peças cortadas pelo plano x = CORTE (paredes, lajes, divisórias), em [y1, y2, z1, z2]. */
const CORTADAS: [number, number, number, number][] = [
  [0, E, 0, TOPO], // parede dos fundos
  [LY - E, LY, 0, TOPO], // parede da frente
  [0, LY, 0, E], // laje do térreo
  [0, LY, 3, 3 + E], // laje do pavimento superior
  [0, LY, 6, 6 + 0.3], // laje de cobertura
  [3.9, 4.05, E, 3], // divisória do térreo
  [5.1, 5.25, 3 + E, 6], // divisória de cima
];

export function RevitScene({ theme }: { theme: CourseTheme }) {
  const [tagX, tagY] = iso([CORTE, -1.2, TOPO + 1.3]);
  const niveis = [
    { z: 0, rotulo: "±0,00 TÉRREO" },
    { z: 3, rotulo: "+3,00 PAV. 1" },
    { z: 6.3, rotulo: "+6,30 COBERT." },
  ];

  return (
    <>
      <svg viewBox="0 0 520 440" className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id="bim-hachura" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="4" stroke="#1a110b" strokeOpacity="0.45" strokeWidth="1.2" />
          </pattern>
        </defs>

        {/* Terreno: grade do plano z = 0 */}
        <g stroke="#ffffff" strokeOpacity="0.06">
          {Array.from({ length: 10 }, (_, k) => {
            const v = -3 + k * 2;
            const [a1, b1] = iso([v, -3, 0]);
            const [a2, b2] = iso([v, LY + 3, 0]);
            return <line key={`x${k}`} x1={a1} y1={b1} x2={a2} y2={b2} />;
          })}
          {Array.from({ length: 8 }, (_, k) => {
            const v = -3 + k * 2;
            const [a1, b1] = iso([-3, v, 0]);
            const [a2, b2] = iso([LX + 3, v, 0]);
            return <line key={`y${k}`} x1={a1} y1={b1} x2={a2} y2={b2} />;
          })}
        </g>

        {/* Metade removida pela caixa de corte: só o contorno tracejado */}
        <g fill={theme.accent} fillOpacity="0.05" stroke={theme.accent2} strokeOpacity="0.55" strokeDasharray="4 4" strokeWidth="1">
          <polygon points={faceZ(TOPO, CORTE, LX, 0, LY)} />
          <polygon points={faceY(LY, CORTE, LX, 0, TOPO)} />
          <polygon points={faceX(LX, 0, LY, 0, TOPO)} />
          <polyline points={pts([CORTE, LY, 3], [LX, LY, 3], [LX, 0, 3])} fill="none" strokeOpacity="0.3" />
        </g>

        {/* Interior revelado pelo corte (de baixo pra cima, de trás pra frente) */}
        {PAVIMENTOS.map(([z0, z1], k) => (
          <g key={k} strokeLinejoin="round">
            <polygon points={faceZ(z0, E, CORTE, E, LY - E)} fill="#8a6a4f" />
            <polygon points={faceX(E, E, LY - E, z0, z1)} fill="#5c4533" />
            <polygon points={faceY(E, E, CORTE, z0, z1)} fill="#735842" />
            {k === 0 ? (
              <>
                <polygon points={faceY(4.05, E, CORTE, z0, z1)} fill="#d9c9b4" />
                <polygon points={faceY(4.05, 2.6, 3.5, z0, z0 + 2.1)} fill="#3d2c20" />
                <Caixa x1={3.9} x2={5.7} y1={5.4} y2={6.8} z1={z0} z2={z0 + 0.8} cor={theme.accent2} />
              </>
            ) : (
              <>
                <polygon points={faceY(5.25, E, CORTE, z0, z1)} fill="#d9c9b4" />
                <polygon points={faceY(5.25, 1.2, 2.1, z0, z0 + 2.1)} fill="#3d2c20" />
                <Caixa x1={3.6} x2={5.7} y1={5.8} y2={7.4} z1={z0} z2={z0 + 0.55} cor="#e9dccb" />
              </>
            )}
            {/* Janela vista por dentro, na parede dos fundos */}
            <polygon points={faceX(E, 2.2, 4.4, z0 + 0.9, z0 + 2.2)} fill={theme.accent2} fillOpacity="0.25" />
          </g>
        ))}

        {/* Cobertura: laje, platibanda por dentro e topo da platibanda */}
        <polygon points={faceZ(6 + 0.3, E, CORTE, E, LY - E)} fill="#6e5541" />
        <polygon points={faceX(E, E, LY - E, 6.3, TOPO)} fill="#cdbba4" />
        <polygon points={faceY(E, E, CORTE, 6.3, TOPO)} fill="#dccbb6" />
        <path
          d={`M${pts([0, 0, TOPO], [CORTE, 0, TOPO], [CORTE, LY, TOPO], [0, LY, TOPO])
            .split(" ")
            .join(" L")} Z M${pts([E, E, TOPO], [E, LY - E, TOPO], [CORTE, LY - E, TOPO], [CORTE, E, TOPO])
            .split(" ")
            .join(" L")} Z`}
          fillRule="evenodd"
          fill="#f6ede1"
        />

        {/* Fachada lateral (y = 8) com janelas */}
        <polygon points={faceY(LY, 0, CORTE, 0, TOPO)} fill="#e9dccb" stroke="#1a110b" strokeOpacity="0.25" />
        <polyline points={pts([0, LY, 3.1], [CORTE, LY, 3.1])} fill="none" stroke="#1a110b" strokeOpacity="0.15" />
        {[0.9, 3.9].map((z) =>
          [0.7, 3.3].map((x) => (
            <g key={`${z}-${x}`}>
              <polygon points={faceY(LY, x, x + 1.8, z, z + 1.4)} fill="#3b2a1f" />
              <polygon points={faceY(LY, x + 0.12, x + 0.9, z + 0.12, z + 1.28)} fill={theme.accent2} fillOpacity="0.18" />
            </g>
          )),
        )}

        {/* Peças cortadas: hachura de corte */}
        <g stroke="#1a110b" strokeWidth="0.8" strokeOpacity="0.6">
          {CORTADAS.map(([y1, y2, z1, z2], k) => (
            <g key={k}>
              <polygon points={faceX(CORTE, y1, y2, z1, z2)} fill={theme.accent} />
              <polygon points={faceX(CORTE, y1, y2, z1, z2)} fill="url(#bim-hachura)" stroke="none" />
            </g>
          ))}
        </g>

        {/* Plano de corte + marcador */}
        <polygon points={faceX(CORTE, -0.9, LY + 0.9, -0.4, TOPO + 0.7)} fill="none" stroke={theme.accent2} strokeWidth="1.2" strokeDasharray="8 4 2 4" />
        <g transform={`translate(${tagX} ${tagY})`}>
          <circle r="12" fill="#1a110b" stroke={theme.accent2} strokeWidth="1.5" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke={theme.accent2} strokeWidth="1" />
          <text y="-2.5" textAnchor="middle" fontSize="8" fontWeight="800" fill="#ffffff" fontFamily={MONO}>
            A
          </text>
          <text y="8.5" textAnchor="middle" fontSize="6.5" fill="#ffffff" fillOpacity="0.7" fontFamily={MONO}>
            01
          </text>
        </g>

        {/* Níveis */}
        {niveis.map((n) => {
          const [a1, b1] = iso([0, LY, n.z]);
          const [a2, b2] = iso([-5.5, LY, n.z]);
          return (
            <g key={n.rotulo}>
              <line x1={a1} y1={b1} x2={a2} y2={b2} stroke="#ffffff" strokeOpacity="0.45" strokeDasharray="5 3" />
              <polygon points={`${a2},${b2} ${a2 - 5},${b2 - 7} ${a2 + 5},${b2 - 7}`} fill={theme.accent2} />
              <text x={a2 + 8} y={b2 - 4} fontSize="8.5" fontWeight="700" fill="#ffffff" fillOpacity="0.75" fontFamily={MONO}>
                {n.rotulo}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tabela de quantitativos */}
      <div className="animate-float-y absolute bottom-[2%] right-[2%] w-[54%] rounded-xl border border-white/10 bg-[#141414]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-[10px] font-bold text-white/70">Quantitativos</p>
          <p className="truncate font-mono text-[10px] text-white/45">do modelo</p>
        </div>
        <dl className="mt-1.5 space-y-1 font-mono text-[10px]">
          {[
            ["Paredes ext.", "186,2 m²"],
            ["Paredes int.", "74,8 m²"],
            ["Portas", "11 un"],
            ["Janelas", "16 un"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-2 border-b border-white/5 pb-1 last:border-0 last:pb-0">
              <dt className="truncate text-white/60">{k}</dt>
              <dd className="shrink-0 font-bold" style={{ color: theme.accent2 }}>
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
