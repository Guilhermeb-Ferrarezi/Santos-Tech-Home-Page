import type { CourseTheme } from "@/lib/course-themes";

// ── Universo 3D · AutoCAD: planta baixa 2D com cotas e camadas ────────────────
//
// Uma casa de 10,00 × 7,00 m desenhada em escala (1 m = ESC px): paredes com
// hachura, portas com arco de abertura, janelas, cotas com tique arquitetônico
// e o cursor em cruz no meio de um comando de cota. O card mostra as camadas
// (layers) — a forma como um desenho técnico é organizado.

const ESC = 30; // px por metro
const OX = 118; // canto superior esquerdo da planta
const OY = 88;
const LARG = 10;
const PROF = 7;
const PAREDE = 0.2;
const DIV = 0.12;

const X = (m: number) => OX + m * ESC;
const Y = (m: number) => OY + m * ESC;
const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

/** Vãos (portas e janelas) recortados das paredes, em metros. */
const JANELAS = [
  { x1: 1.1, y1: 0, x2: 3.1, y2: PAREDE }, // fachada de cima, sala
  { x1: 6, y1: 0, x2: 8.6, y2: PAREDE }, // quarto
  { x1: LARG - PAREDE, y1: 4.4, x2: LARG, y2: 5.8 }, // cozinha, lateral
  { x1: 0, y1: 2.4, x2: PAREDE, y2: 4.4 }, // sala, lateral
];

/** Cota horizontal: linha, linhas de chamada, tiques a 45° e texto. */
function CotaH({ x1, x2, y, base, texto, cor }: { x1: number; x2: number; y: number; base: number; texto: string; cor: string }) {
  return (
    <g stroke={cor} strokeWidth="1">
      <line x1={x1} y1={base - 3} x2={x1} y2={y - 5} strokeOpacity="0.6" />
      <line x1={x2} y1={base - 3} x2={x2} y2={y - 5} strokeOpacity="0.6" />
      <line x1={x1 - 4} y1={y} x2={x2 + 4} y2={y} />
      <line x1={x1 - 3} y1={y + 3} x2={x1 + 3} y2={y - 3} strokeWidth="1.6" />
      <line x1={x2 - 3} y1={y + 3} x2={x2 + 3} y2={y - 3} strokeWidth="1.6" />
      <text x={(x1 + x2) / 2} y={y - 4} textAnchor="middle" fontSize="9" fontFamily={MONO} fill={cor} stroke="none">
        {texto}
      </text>
    </g>
  );
}

function CotaV({ y1, y2, x, base, texto, cor }: { y1: number; y2: number; x: number; base: number; texto: string; cor: string }) {
  const lado = x < base ? 1 : -1; // chamada vai da parede até a cota
  return (
    <g stroke={cor} strokeWidth="1">
      <line x1={base - 3 * lado} y1={y1} x2={x - 5 * lado} y2={y1} strokeOpacity="0.6" />
      <line x1={base - 3 * lado} y1={y2} x2={x - 5 * lado} y2={y2} strokeOpacity="0.6" />
      <line x1={x} y1={y1 - 4} x2={x} y2={y2 + 4} />
      <line x1={x - 3} y1={y1 + 3} x2={x + 3} y2={y1 - 3} strokeWidth="1.6" />
      <line x1={x - 3} y1={y2 + 3} x2={x + 3} y2={y2 - 3} strokeWidth="1.6" />
      <text
        x={x - 4 * lado}
        y={(y1 + y2) / 2}
        textAnchor="middle"
        fontSize="9"
        fontFamily={MONO}
        fill={cor}
        stroke="none"
        transform={`rotate(-90 ${x - 4 * lado} ${(y1 + y2) / 2})`}
      >
        {texto}
      </text>
    </g>
  );
}

/** Porta em planta: folha + arco de 90°. `ang` = direção da folha aberta, em graus. */
function Porta({ hx, hy, ang, lado }: { hx: number; hy: number; ang: number; lado: 1 | -1 }) {
  const r = 0.85 * ESC;
  const a = (ang * Math.PI) / 180;
  const b = ((ang - 90 * lado) * Math.PI) / 180;
  const fx = hx + r * Math.cos(a);
  const fy = hy + r * Math.sin(a);
  const ex = hx + r * Math.cos(b);
  const ey = hy + r * Math.sin(b);
  return (
    <g stroke="#fde68a" fill="none">
      <line x1={hx} y1={hy} x2={fx} y2={fy} strokeWidth="1.6" />
      <path d={`M${fx} ${fy} A ${r} ${r} 0 0 ${lado === 1 ? 0 : 1} ${ex} ${ey}`} strokeOpacity="0.55" strokeDasharray="2 3" />
    </g>
  );
}

export function AutocadScene({ theme }: { theme: CourseTheme }) {
  const W = LARG * ESC;
  const H = PROF * ESC;
  const t = PAREDE * ESC;

  return (
    <>
      <svg viewBox="0 0 520 440" className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id="cad-grade" width={ESC / 2} height={ESC / 2} patternUnits="userSpaceOnUse" x={OX} y={OY}>
            <path d={`M ${ESC / 2} 0 L 0 0 0 ${ESC / 2}`} fill="none" stroke="#ffffff" strokeOpacity="0.045" />
          </pattern>
          <pattern id="cad-hachura" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Espaço do modelo */}
        <rect x="14" y="26" width="492" height="396" rx="18" fill="#130e0a" fillOpacity="0.94" stroke="#ffffff14" />
        <rect x="15" y="27" width="490" height="394" rx="17" fill="url(#cad-grade)" />

        {/* Ícone de coordenadas (UCS) */}
        <g transform="translate(40 62)" stroke="#ffffff" strokeOpacity="0.5" fill="none" fontFamily={MONO} fontSize="8">
          <path d="M0 -22 L0 0 L22 0" strokeWidth="1.4" />
          <path d="M-3 -17 L0 -22 L3 -17 M17 -3 L22 0 L17 3" strokeWidth="1.2" />
          <text x="26" y="3" fill="#ffffff" fillOpacity="0.5" stroke="none">
            X
          </text>
          <text x="-3" y="-26" fill="#ffffff" fillOpacity="0.5" stroke="none">
            Y
          </text>
        </g>

        {/* Camada PAREDES: contorno externo e divisórias, com hachura */}
        <g>
          <path
            d={`M${OX} ${OY} h${W} v${H} h${-W} Z M${OX + t} ${OY + t} v${H - 2 * t} h${W - 2 * t} v${-(H - 2 * t)} Z`}
            fillRule="evenodd"
            fill="url(#cad-hachura)"
            stroke="#ffffff"
            strokeWidth="1.3"
          />
          {/* divisória vertical (x = 4 m) com vão de porta */}
          <rect x={X(4)} y={Y(PAREDE)} width={DIV * ESC} height={Y(4.5) - Y(PAREDE)} fill="#ffffff" fillOpacity="0.8" />
          <rect x={X(4)} y={Y(5.4)} width={DIV * ESC} height={Y(PROF - PAREDE) - Y(5.4)} fill="#ffffff" fillOpacity="0.8" />
          {/* divisória horizontal (y = 3,6 m) com vão de porta */}
          <rect x={X(4)} y={Y(3.6)} width={X(6.2) - X(4)} height={DIV * ESC} fill="#ffffff" fillOpacity="0.8" />
          <rect x={X(7.05)} y={Y(3.6)} width={X(LARG - PAREDE) - X(7.05)} height={DIV * ESC} fill="#ffffff" fillOpacity="0.8" />
        </g>

        {/* Camada JANELAS: vão + três linhas (peitoril, vidro, peitoril) */}
        {JANELAS.map((j, k) => {
          const hor = j.y2 - j.y1 < j.x2 - j.x1;
          const x1 = X(j.x1);
          const y1 = Y(j.y1);
          const w = X(j.x2) - x1;
          const h = Y(j.y2) - y1;
          return (
            <g key={k} stroke={theme.accent2} strokeWidth="1">
              <rect x={x1} y={y1} width={w} height={h} fill="#130e0a" stroke="none" />
              {hor ? (
                <>
                  <line x1={x1} y1={y1} x2={x1 + w} y2={y1} />
                  <line x1={x1} y1={y1 + h / 2} x2={x1 + w} y2={y1 + h / 2} />
                  <line x1={x1} y1={y1 + h} x2={x1 + w} y2={y1 + h} />
                </>
              ) : (
                <>
                  <line x1={x1} y1={y1} x2={x1} y2={y1 + h} />
                  <line x1={x1 + w / 2} y1={y1} x2={x1 + w / 2} y2={y1 + h} />
                  <line x1={x1 + w} y1={y1} x2={x1 + w} y2={y1 + h} />
                </>
              )}
            </g>
          );
        })}

        {/* Camada PORTAS */}
        <rect x={X(0)} y={Y(5)} width={t} height={0.95 * ESC} fill="#130e0a" />
        <Porta hx={X(PAREDE)} hy={Y(5)} ang={0} lado={-1} />
        <Porta hx={X(4) + DIV * ESC} hy={Y(4.5)} ang={0} lado={-1} />
        <Porta hx={X(6.2)} hy={Y(3.6)} ang={-90} lado={-1} />

        {/* Camada TEXTO: ambientes e áreas */}
        <g fontFamily={MONO} textAnchor="middle" fill="#ffffff">
          <text x={X(2)} y={Y(3.3)} fontSize="10" fontWeight="700" fillOpacity="0.85">
            SALA
          </text>
          <text x={X(2)} y={Y(3.3) + 13} fontSize="8.5" fillOpacity="0.5">
            A = 28,00 m²
          </text>
          <text x={X(7)} y={Y(1.7)} fontSize="10" fontWeight="700" fillOpacity="0.85">
            QUARTO
          </text>
          <text x={X(7)} y={Y(1.7) + 13} fontSize="8.5" fillOpacity="0.5">
            A = 21,60 m²
          </text>
          <text x={X(7.4)} y={Y(5.3)} fontSize="10" fontWeight="700" fillOpacity="0.85">
            COZINHA
          </text>
          <text x={X(7.4)} y={Y(5.3) + 13} fontSize="8.5" fillOpacity="0.5">
            A = 20,40 m²
          </text>
        </g>

        {/* Camada COTAS */}
        <CotaH x1={X(0)} x2={X(4)} y={OY - 16} base={OY} texto="4,00" cor={theme.accent} />
        <CotaH x1={X(4)} x2={X(LARG)} y={OY - 16} base={OY} texto="6,00" cor={theme.accent} />
        <CotaH x1={X(0)} x2={X(LARG)} y={OY - 36} base={OY} texto="10,00" cor={theme.accent} />
        <CotaV y1={Y(0)} y2={Y(PROF)} x={OX - 22} base={OX} texto="7,00" cor={theme.accent} />
        <CotaV y1={Y(0)} y2={Y(3.6)} x={X(LARG) + 22} base={X(LARG)} texto="3,60" cor={theme.accent} />

        {/* Cota em construção (comando ativo): tracejada, seguindo o cursor */}
        <g stroke={theme.accent2} strokeDasharray="4 3" strokeWidth="1">
          <line x1={X(LARG) + 3} y1={Y(PROF)} x2={X(LARG) + 26} y2={Y(PROF)} strokeOpacity="0.7" />
          <line x1={X(LARG) + 22} y1={Y(3.6)} x2={X(LARG) + 22} y2={Y(PROF)} />
        </g>

        {/* Cursor em cruz com caixa de seleção e entrada dinâmica */}
        <g stroke="#ffffff" strokeWidth="1">
          <line x1={X(LARG) + 22 - 40} y1={Y(PROF)} x2={X(LARG) + 22 + 40} y2={Y(PROF)} strokeOpacity="0.8" />
          <line x1={X(LARG) + 22} y1={Y(PROF) - 40} x2={X(LARG) + 22} y2={Y(PROF) + 40} strokeOpacity="0.8" />
          <rect x={X(LARG) + 22 - 4} y={Y(PROF) - 4} width="8" height="8" fill="none" />
        </g>
        <g transform={`translate(${X(LARG) + 22 - 70} ${Y(PROF) + 10})`} fontFamily={MONO} fontSize="9">
          <rect width="58" height="18" rx="3" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeOpacity="0.25" />
          <text x="7" y="12.5" fill="#ffffff">
            3,40
          </text>
          <text x="51" y="12.5" textAnchor="end" fill={theme.accent2}>
            90°
          </text>
        </g>
      </svg>

      {/* Card das camadas + linha de comando */}
      <div className="animate-float-y absolute bottom-[2%] left-[2%] w-[54%] rounded-xl border border-white/10 bg-[#141414]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <p className="text-[10px] font-bold text-white/70">Camadas</p>
        <ul className="mt-1.5 space-y-1 font-mono text-[10px]">
          {[
            { nome: "PAREDES", cor: "#ffffff", on: true },
            { nome: "COTAS", cor: theme.accent, on: true },
            { nome: "ESQUADRIAS", cor: theme.accent2, on: true },
            { nome: "MOBILIÁRIO", cor: "#8a8a8a", on: false },
          ].map((c) => (
            <li key={c.nome} className={`flex items-center gap-2 ${c.on ? "text-white/75" : "text-white/30"}`}>
              <span className="h-2 w-2 shrink-0 rounded-[2px]" style={{ background: c.cor, opacity: c.on ? 1 : 0.4 }} />
              <span className="truncate">{c.nome}</span>
              <span className="ml-auto">{c.on ? "●" : "○"}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 truncate border-t border-white/10 pt-2 font-mono text-[10px] text-white/55">
          Comando: <span style={{ color: theme.accent2 }}>_DIMLINEAR</span>
        </p>
      </div>
    </>
  );
}
