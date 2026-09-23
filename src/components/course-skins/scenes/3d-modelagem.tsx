import type { CourseTheme } from "@/lib/course-themes";

// ── Universo 3D · Modelagem: viewport com uma malha meio wireframe, meio render ──
//
// Um toro de verdade (vértices calculados, projeção ortográfica e ordenação por
// profundidade), cortado ao meio na tela: à esquerda a MALHA (arestas e um loop
// de faces selecionado), à direita o RENDER (faces sombreadas pela luz). Mostra
// em uma imagem o caminho do curso: modelar a malha até o render final.

type V3 = [number, number, number];

const U = 28; // segmentos ao redor do anel
const V = 14; // segmentos da seção do tubo
const R_ANEL = 1;
const R_TUBO = 0.42;
const S = 104; // px por unidade
const CX = 262;
const CY = 196;
const Z_CHAO = -0.98;

const rad = (g: number) => (g * Math.PI) / 180;
const INCLINA = rad(20); // inclinação da peça (em torno de X)
const AZIMUTE = rad(38); // giro da câmera em torno do eixo vertical
const ELEVA = rad(30); // elevação da câmera

function rotX([x, y, z]: V3, a: number): V3 {
  return [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
}
function rotZ([x, y, z]: V3, a: number): V3 {
  return [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a), z];
}

/** Mundo → câmera: gira pelo azimute; a tela usa X à direita e o "cima" inclinado pela elevação. */
function cam(p: V3) {
  const [x, y, z] = rotZ(p, AZIMUTE);
  return {
    sx: CX + x * S,
    sy: CY - (y * Math.sin(ELEVA) + z * Math.cos(ELEVA)) * S,
    d: -y * Math.cos(ELEVA) + z * Math.sin(ELEVA), // maior = mais perto
  };
}
/** Direção "pra câmera" no espaço do mundo (inverso do azimute). */
const OLHO = rotZ([0, -Math.cos(ELEVA), Math.sin(ELEVA)], -AZIMUTE);
const LUZ: V3 = (() => {
  const l: V3 = [-0.55, -0.7, 0.75];
  const n = Math.hypot(...l);
  return [l[0] / n, l[1] / n, l[2] / n];
})();
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

const toro = (u: number, v: number): V3 =>
  rotX([(R_ANEL + R_TUBO * Math.cos(v)) * Math.cos(u), (R_ANEL + R_TUBO * Math.cos(v)) * Math.sin(u), R_TUBO * Math.sin(v)], INCLINA);
const normal = (u: number, v: number): V3 => rotX([Math.cos(v) * Math.cos(u), Math.cos(v) * Math.sin(u), Math.sin(v)], INCLINA);

const LOOP = 3; // índice do loop de faces "selecionado" (lado da malha)

type Face = { pts: string; d: number; luz: number; brilho: number; loop: boolean };

const norm = (v: V3): V3 => {
  const n = Math.hypot(...v);
  return [v[0] / n, v[1] / n, v[2] / n];
};
const MEIO = norm([LUZ[0] + OLHO[0], LUZ[1] + OLHO[1], LUZ[2] + OLHO[2]]); // vetor médio (brilho especular)

/**
 * Faces visíveis de um toro com `nu` × `nv` segmentos. A metade da malha usa a
 * malha-base; a do render usa a mesma malha subdividida (mais suave), como o
 * modificador de subdivisão faz no render.
 */
function faces(nu: number, nv: number, lado: "malha" | "render"): Face[] {
  const out: Face[] = [];
  const su = (2 * Math.PI) / nu;
  const sv = (2 * Math.PI) / nv;
  for (let i = 0; i < nu; i++) {
    for (let j = 0; j < nv; j++) {
      const n = normal((i + 0.5) * su, (j + 0.5) * sv);
      if (dot(n, OLHO) <= 0) continue; // face de costas
      const centro = cam(toro((i + 0.5) * su, (j + 0.5) * sv));
      const cantos = [
        [i, j],
        [i + 1, j],
        [i + 1, j + 1],
        [i, j + 1],
      ].map(([a, b]) => cam(toro(a * su, b * sv)));
      // só as faces que tocam a metade da tela deste lado (o resto é recortado)
      if (!cantos.some((c) => (c.sx < CX) === (lado === "malha"))) continue;
      out.push({
        pts: cantos.map((c) => `${c.sx.toFixed(1)},${c.sy.toFixed(1)}`).join(" "),
        d: centro.d,
        luz: Math.max(0, dot(n, LUZ)),
        brilho: Math.pow(Math.max(0, dot(n, MEIO)), 28),
        loop: lado === "malha" && (i === LOOP || i === LOOP + nu / 2),
      });
    }
  }
  return out;
}

const porProfundidade = (a: Face, b: Face) => a.d - b.d;
const MALHA = faces(U, V, "malha").sort(porProfundidade);
const RENDER = faces(U * 2, V * 2, "render").sort(porProfundidade);

/** Grade do chão (plano z = Z_CHAO), já projetada. */
const GRADE = (() => {
  const lim = 1.8;
  const linhas: { x1: number; y1: number; x2: number; y2: number; eixo: "x" | "y" | null }[] = [];
  for (let k = -9; k <= 9; k++) {
    const t = (k / 9) * lim;
    const a = cam([t, -lim, Z_CHAO]);
    const b = cam([t, lim, Z_CHAO]);
    const c = cam([-lim, t, Z_CHAO]);
    const e = cam([lim, t, Z_CHAO]);
    linhas.push({ x1: a.sx, y1: a.sy, x2: b.sx, y2: b.sy, eixo: k === 0 ? "y" : null });
    linhas.push({ x1: c.sx, y1: c.sy, x2: e.sx, y2: e.sy, eixo: k === 0 ? "x" : null });
  }
  return linhas;
})();

const SOMBRA = cam([0, 0, Z_CHAO]);

/** Gizmo de eixos: direção de cada eixo do mundo na tela. */
const GIZMO = (["x", "y", "z"] as const).map((eixo, k) => {
  const v: V3 = [k === 0 ? 1 : 0, k === 1 ? 1 : 0, k === 2 ? 1 : 0];
  const [x, y, z] = rotZ(v, AZIMUTE);
  return { eixo, dx: x * 20, dy: -(y * Math.sin(ELEVA) + z * Math.cos(ELEVA)) * 20 };
});
const COR_EIXO = { x: "#e5534b", y: "#8fbf5a", z: "#5b8fd9" };

function hex(c: string): V3 {
  const n = parseInt(c.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
/** "rgb(r,g,b)" → "#rrggbb" (pra encadear misturas). */
function rgbHex(c: string) {
  const [r, g, b] = c.slice(4, -1).split(",").map(Number);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}
function mix(a: string, b: string, t: number) {
  const A = hex(a);
  const B = hex(b);
  return `rgb(${A.map((v, k) => Math.round(v + (B[k] - v) * Math.min(1, Math.max(0, t)))).join(",")})`;
}

export function ModelagemScene({ theme }: { theme: CourseTheme }) {
  /** Sombreamento: difusa (escuro → laranja → claro) + brilho especular. */
  const tom = (l: number, brilho: number) => {
    const k = 0.12 + 0.88 * l;
    const base = k < 0.6 ? mix("#241005", theme.accent, k / 0.6) : mix(theme.accent, theme.accent2, (k - 0.6) / 0.4);
    return brilho > 0.02 ? mix(rgbHex(base), "#fff6ea", brilho * 0.85) : base;
  };

  return (
    <>
      <svg viewBox="0 0 520 440" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="mdl-fade" cx="0.5" cy="0.62" r="0.5">
            <stop offset="0.55" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>
          <mask id="mdl-mask">
            <rect width="520" height="440" fill="url(#mdl-fade)" />
          </mask>
          <clipPath id="mdl-esq">
            <rect x="0" y="0" width={CX} height="440" />
          </clipPath>
          <clipPath id="mdl-dir">
            <rect x={CX} y="0" width={520 - CX} height="440" />
          </clipPath>
          <filter id="mdl-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* Viewport: moldura e grade do chão */}
        <rect x="14" y="26" width="492" height="396" rx="18" fill="#141110" fillOpacity="0.92" stroke="#ffffff14" />
        <g mask="url(#mdl-mask)">
          {GRADE.map((l, k) => (
            <line
              key={k}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke={l.eixo ? COR_EIXO[l.eixo] : "#ffffff"}
              strokeOpacity={l.eixo ? 0.55 : 0.07}
              strokeWidth={l.eixo ? 1.4 : 1}
            />
          ))}
        </g>
        <ellipse cx={SOMBRA.sx} cy={SOMBRA.sy} rx={S * 1.35} ry={S * 1.35 * Math.sin(ELEVA)} fill="#000" fillOpacity="0.55" filter="url(#mdl-blur)" />

        {/* A peça, de trás pra frente: metade esquerda em malha, direita em render */}
        <g clipPath="url(#mdl-esq)">
          {MALHA.map((f, k) => (
            <polygon
              key={k}
              points={f.pts}
              fill={f.loop ? theme.accent : "#1b1714"}
              fillOpacity={f.loop ? 0.45 : 1}
              stroke={theme.accent2}
              strokeOpacity={f.loop ? 1 : 0.55}
              strokeWidth={f.loop ? 1.3 : 0.8}
              strokeLinejoin="round"
            />
          ))}
        </g>
        <g clipPath="url(#mdl-dir)">
          {RENDER.map((f, k) => (
            <polygon key={k} points={f.pts} fill={tom(f.luz, f.brilho)} stroke={tom(f.luz, f.brilho)} strokeWidth="0.6" strokeLinejoin="round" />
          ))}
        </g>

        {/* Plano do corte malha | render */}
        <line x1={CX} y1="58" x2={CX} y2="338" stroke="#ffffff" strokeOpacity="0.35" strokeDasharray="3 5" />
        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10" fontWeight="700" letterSpacing="2">
          <text x={CX - 12} y="70" textAnchor="end" fill={theme.accent2}>
            MALHA
          </text>
          <text x={CX + 12} y="70" fill="#ffffff" fillOpacity="0.7">
            RENDER
          </text>
        </g>

        {/* Gizmo de eixos */}
        <g transform="translate(52 66)">
          <circle r="27" fill="#ffffff" fillOpacity="0.04" />
          {GIZMO.map((g) => (
            <g key={g.eixo}>
              <line x1="0" y1="0" x2={g.dx} y2={g.dy} stroke={COR_EIXO[g.eixo]} strokeWidth="2" strokeLinecap="round" />
              <circle cx={g.dx} cy={g.dy} r="6" fill={COR_EIXO[g.eixo]} />
              <text
                x={g.dx}
                y={g.dy + 3}
                textAnchor="middle"
                fontSize="8"
                fontWeight="800"
                fill="#141110"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                {g.eixo.toUpperCase()}
              </text>
            </g>
          ))}
        </g>
      </svg>

      {/* Card do modificador */}
      <div className="animate-float-y absolute bottom-[2%] left-[2%] w-[54%] rounded-xl border border-white/10 bg-[#141414]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-[10px] font-bold text-white/70">Modo edição</p>
          <p className="truncate font-mono text-[10px] text-white/50">loop de faces</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <span className="rounded px-1.5 py-0.5 font-mono text-[9px] font-bold text-white" style={{ background: theme.accent }}>
            Subdivisão · 2
          </span>
          <span className="rounded border border-white/15 px-1.5 py-0.5 font-mono text-[9px] text-white/60">Espelhar X</span>
        </div>
        <p className="mt-2 font-mono text-[10px] text-white/55">
          {U * V} vértices · {U * V} faces
        </p>
      </div>
    </>
  );
}
