import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { SectionTitle, TierTabs } from "./oficina-base";
import { pad2, type OficinaBlockProps } from "./oficina-util";

/**
 * Modelagem 3D (Blender / SketchUp).
 * Para quem é: a janela do programa — viewport com a cena em modo edição e, ao lado,
 * o painel de hierarquia (outliner) onde cada perfil é um objeto da coleção "Alunos".
 * Conteúdo: a esteira de passes (malha → UV → material → luz → render) e a pilha de
 * modificadores do painel de propriedades, um bloco expansível por módulo.
 */

// ── Projeção isométrica da viewport ─────────────────────────────────────────

const A = 34; // tamanho de uma unidade da grade na tela
const OX = 300;
const OY = 246;
const p = (x: number, y: number, z = 0): [number, number] => [OX + (x - y) * A, OY + (x + y) * A * 0.5 - z * A];
const pts = (list: [number, number, number][]) => list.map(([x, y, z]) => p(x, y, z).join(",")).join(" ");
const lerp3 = (a: number[], b: number[], t: number) => a.map((v, i) => v + (b[i] - v) * t) as [number, number, number];

/** Face quadrada subdividida em n×n, com as arestas internas da malha. */
function FaceMalha({ c, fill, n = 3 }: { c: [number, number, number][]; fill: string; n?: number }) {
  const [a, b, cc, d] = c;
  const linhas: ReactNode[] = [];
  for (let k = 1; k < n; k++) {
    const t = k / n;
    const [x1, y1] = p(...lerp3(a, b, t));
    const [x2, y2] = p(...lerp3(d, cc, t));
    const [x3, y3] = p(...lerp3(a, d, t));
    const [x4, y4] = p(...lerp3(b, cc, t));
    linhas.push(<line key={`u${k}`} x1={x1} y1={y1} x2={x2} y2={y2} />, <line key={`v${k}`} x1={x3} y1={y3} x2={x4} y2={y4} />);
  }
  return (
    <g>
      <polygon points={pts(c)} fill={fill} stroke="#0b0806" strokeOpacity="0.85" strokeWidth="1.4" />
      <g stroke="#0b0806" strokeOpacity="0.55" strokeWidth="1">{linhas}</g>
    </g>
  );
}

/** Vértices de uma face subdividida (pontinhos do modo edição). */
function Vertices({ c, n = 3, sel }: { c: [number, number, number][]; n?: number; sel?: (i: number, j: number) => boolean }) {
  const [a, b, , d] = c;
  const out: ReactNode[] = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
      const v = [d[0] - a[0], d[1] - a[1], d[2] - a[2]];
      const q: [number, number, number] = [a[0] + (u[0] * i) / n + (v[0] * j) / n, a[1] + (u[1] * i) / n + (v[1] * j) / n, a[2] + (u[2] * i) / n + (v[2] * j) / n];
      const [x, y] = p(...q);
      const s = sel?.(i, j);
      out.push(<rect key={`${i}-${j}`} x={x - 2.2} y={y - 2.2} width="4.4" height="4.4" fill={s ? "var(--accent)" : "#0b0806"} />);
    }
  }
  return <g>{out}</g>;
}

/** Gizmo de navegação (eixos X, Y, Z) do canto da viewport. */
function Gizmo({ className }: { className?: string }) {
  return (
    <svg viewBox="-40 -40 80 80" className={className} aria-hidden="true">
      <circle r="36" fill="#fff" fillOpacity="0.05" />
      <line x1="0" y1="0" x2="24" y2="12" stroke="#c65a4a" strokeWidth="2" />
      <line x1="0" y1="0" x2="-20" y2="14" stroke="#7f9a3c" strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="-26" stroke="#5f86b8" strokeWidth="2" />
      <circle cx="24" cy="12" r="8" fill="#c65a4a" />
      <circle cx="-20" cy="14" r="8" fill="#7f9a3c" />
      <circle cx="0" cy="-26" r="8" fill="#5f86b8" />
      <circle cx="-24" cy="-12" r="6" fill="#c65a4a" fillOpacity="0.4" />
      <circle cx="20" cy="-14" r="6" fill="#7f9a3c" fillOpacity="0.4" />
      <circle cx="0" cy="26" r="6" fill="#5f86b8" fillOpacity="0.4" />
      <text x="24" y="15.5" fontSize="10" fontWeight="700" textAnchor="middle" fill="#1b1512">X</text>
      <text x="-20" y="17.5" fontSize="10" fontWeight="700" textAnchor="middle" fill="#1b1512">Y</text>
      <text x="0" y="-22.5" fontSize="10" fontWeight="700" textAnchor="middle" fill="#1b1512">Z</text>
    </svg>
  );
}

/** A cena 3D: grade do chão, eixos, cubo em modo edição, esfera com material, luz e câmera. */
function Cena() {
  const grade: ReactNode[] = [];
  for (let i = -7; i <= 7; i++) {
    const [a1, b1] = p(i, -7);
    const [a2, b2] = p(i, 7);
    const [c1, d1] = p(-7, i);
    const [c2, d2] = p(7, i);
    grade.push(
      <line key={`x${i}`} x1={a1} y1={b1} x2={a2} y2={b2} stroke={i === 0 ? "#7f9a3c" : "#fff"} strokeOpacity={i === 0 ? 0.85 : 0.07} strokeWidth={i === 0 ? 1.6 : 1} />,
      <line key={`y${i}`} x1={c1} y1={d1} x2={c2} y2={d2} stroke={i === 0 ? "#c65a4a" : "#fff"} strokeOpacity={i === 0 ? 0.85 : 0.07} strokeWidth={i === 0 ? 1.6 : 1} />,
    );
  }
  // Cubo: x 0.6→2.6, y −2.4→−0.4, z 0→2. Faces visíveis: topo, x máx e y máx.
  const topo: [number, number, number][] = [[0.6, -2.4, 2], [2.6, -2.4, 2], [2.6, -0.4, 2], [0.6, -0.4, 2]];
  const faceX: [number, number, number][] = [[2.6, -2.4, 2], [2.6, -0.4, 2], [2.6, -0.4, 0], [2.6, -2.4, 0]];
  const faceY: [number, number, number][] = [[0.6, -0.4, 2], [2.6, -0.4, 2], [2.6, -0.4, 0], [0.6, -0.4, 0]];
  const selFace: [number, number, number][] = [[1.2667, -1.7333, 2], [1.9333, -1.7333, 2], [1.9333, -1.0667, 2], [1.2667, -1.0667, 2]];
  const esfera = p(-1.5, 1.3, 1.05);
  const sombra = p(-1.5, 1.3, 0);
  const [lx, ly] = p(-2.2, -3.2, 2.4);
  const [lcx, lcy] = p(-2.2, -3.2, 0);
  const [cx, cy] = p(0.8, 3.2, 0.6);

  return (
    <svg
      viewBox="110 40 400 330"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Viewport de um programa 3D com um cubo em modo edição e uma esfera com material"
    >
      <defs>
        <radialGradient id="ofm-esfera" cx="0.35" cy="0.32" r="0.75">
          <stop offset="0" stopColor="#ffe3c7" />
          <stop offset="0.45" stopColor="var(--accent)" />
          <stop offset="1" stopColor="#5a2408" />
        </radialGradient>
      </defs>
      {grade}

      {/* Luz (sol) com a linha até o chão */}
      <line x1={lx} y1={ly} x2={lcx} y2={lcy} stroke="#fff" strokeOpacity="0.35" strokeDasharray="3 4" />
      <circle cx={lx} cy={ly} r="7" fill="none" stroke="#ffd9a8" strokeWidth="2" />
      {Array.from({ length: 8 }, (_, i) => {
        const ang = (i * Math.PI) / 4;
        return <line key={i} x1={lx + 11 * Math.cos(ang)} y1={ly + 11 * Math.sin(ang)} x2={lx + 16 * Math.cos(ang)} y2={ly + 16 * Math.sin(ang)} stroke="#ffd9a8" strokeWidth="2" strokeLinecap="round" />;
      })}

      {/* Esfera com material + sombra */}
      <ellipse cx={sombra[0]} cy={sombra[1]} rx="46" ry="16" fill="#000" fillOpacity="0.35" />
      <circle cx={esfera[0]} cy={esfera[1]} r="40" fill="url(#ofm-esfera)" />

      {/* Câmera: pirâmide com o triângulo "para cima" */}
      <g fill="none" stroke="#e8ddd2" strokeOpacity="0.75" strokeWidth="1.4">
        <polygon points={`${cx + 26},${cy - 16} ${cx + 52},${cy - 4} ${cx + 52},${cy + 22} ${cx + 26},${cy + 10}`} />
        <path d={`M${cx} ${cy} L${cx + 26} ${cy - 16} M${cx} ${cy} L${cx + 52} ${cy - 4} M${cx} ${cy} L${cx + 52} ${cy + 22} M${cx} ${cy} L${cx + 26} ${cy + 10}`} />
        <polygon points={`${cx + 32},${cy - 16} ${cx + 46},${cy - 10} ${cx + 42},${cy - 24}`} fill="#e8ddd2" fillOpacity="0.5" />
      </g>

      {/* Cubo em modo edição: faces subdivididas, vértices e uma face selecionada */}
      <FaceMalha c={faceY} fill="#8e8077" />
      <FaceMalha c={faceX} fill="#6d6058" />
      <FaceMalha c={topo} fill="#b3a79e" />
      <polygon points={pts(selFace)} fill="var(--accent)" fillOpacity="0.55" stroke="var(--accent)" strokeWidth="2" />
      <Vertices c={faceY} />
      <Vertices c={faceX} />
      <Vertices c={topo} sel={(i, j) => (i === 1 || i === 2) && (j === 1 || j === 2)} />
      <polygon points={pts([[0.6, -2.4, 2], [2.6, -2.4, 2], [2.6, -0.4, 2], [2.6, -0.4, 0], [0.6, -0.4, 0], [0.6, -0.4, 2]])} fill="none" stroke="var(--accent)" strokeOpacity="0.9" strokeWidth="1.6" />

      {/* Cursor 3D na origem */}
      <g transform={`translate(${OX} ${OY})`}>
        <circle r="9" fill="none" stroke="#fff" strokeWidth="2" />
        <circle r="9" fill="none" stroke="#c65a4a" strokeWidth="2" strokeDasharray="4 3" />
        <path d="M-16 0 H-5 M5 0 H16 M0 -16 V-5 M0 5 V16" stroke="#111" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/**
 * Viewport do programa 3D: cabeçalho de modo, a cena (que preenche a altura
 * disponível, cortando só as bordas do chão), ferramentas, gizmo e barra de status.
 */
function Viewport() {
  return (
    <div className="flex h-full flex-col bg-[radial-gradient(circle_at_50%_40%,#3a302a,#241d18)]">
      <div className="flex items-center gap-3 bg-[#1b1512] px-3 py-1.5 text-[11px] text-[#e8ddd2]">
        <span className="rounded-md bg-[#2e2621] px-2 py-0.5">Modo Edição ▾</span>
        <span className="text-white/60">Vista</span>
        <span className="hidden text-white/60 sm:inline">Selecionar</span>
        <span className="text-white/60">Malha</span>
        {/* Modos de sombreamento: aramado, sólido (ativo), material, render */}
        <span className="ml-auto flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`flex h-5 w-5 items-center justify-center rounded ${i === 1 ? "bg-(--accent)" : "bg-[#2e2621]"}`}>
              <span className={`h-2.5 w-2.5 rounded-full border border-[#e8ddd2] ${i === 0 ? "" : i === 3 ? "bg-[#ffd9a8]" : i === 2 ? "bg-[#e8ddd2]/50" : "bg-[#e8ddd2]"}`} />
            </span>
          ))}
        </span>
      </div>
      <div className="relative min-h-[280px] flex-1 overflow-hidden sm:min-h-[360px]">
        <Cena />
        <p className="absolute left-3 top-2 font-mono text-[11px] leading-snug text-[#e8ddd2]/70">
          Perspectiva do usuário
          <br />
          <span className="text-[#e8ddd2]/45">(1) Alunos | Cubo</span>
        </p>
        <div className="absolute left-3 top-14 hidden flex-col gap-1.5 rounded-lg bg-[#1b1512]/85 p-1.5 sm:flex">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} className={`h-[18px] w-[18px] rounded ${i === 0 ? "bg-(--accent)" : "bg-[#3a302a]"}`} />
          ))}
        </div>
        <Gizmo className="absolute right-2 top-2 h-16 w-16 sm:h-20 sm:w-20" />
        <p className="absolute bottom-2 left-3 font-mono text-[11px] text-[#e8ddd2]/55">Vértices 4/56 · Faces 1/54 · Objetos 1/6</p>
      </div>
    </div>
  );
}

// ── Ícones do outliner ──────────────────────────────────────────────────────

type TipoObjeto = "malha" | "camera" | "luz" | "curva" | "esfera" | "vazio";
const TIPOS: TipoObjeto[] = ["malha", "camera", "luz", "curva", "esfera", "vazio"];
const NOME_TIPO: Record<TipoObjeto, string> = {
  malha: "Malha",
  camera: "Câmera",
  luz: "Luz",
  curva: "Curva",
  esfera: "Escultura",
  vazio: "Vazio",
};

function IconeObjeto({ tipo, className }: { tipo: TipoObjeto; className?: string }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      {tipo === "malha" && (
        <g {...s}>
          <path d="M10 2.5 L17 6.5 V13.5 L10 17.5 L3 13.5 V6.5 Z M3 6.5 L10 10.5 L17 6.5 M10 10.5 V17.5" />
        </g>
      )}
      {tipo === "camera" && (
        <g {...s}>
          <rect x="2.5" y="6" width="10" height="9" rx="1.5" />
          <path d="M12.5 9 L17.5 6.5 V14.5 L12.5 12" />
        </g>
      )}
      {tipo === "luz" && (
        <g {...s}>
          <path d="M10 3 a5 5 0 0 1 3 9 V14 H7 V12 a5 5 0 0 1 3 -9 Z M8 16.5 H12" />
        </g>
      )}
      {tipo === "curva" && (
        <g {...s}>
          <path d="M3 15 C 6 3, 14 17, 17 5" />
          <circle cx="3" cy="15" r="1.4" fill="currentColor" />
          <circle cx="17" cy="5" r="1.4" fill="currentColor" />
        </g>
      )}
      {tipo === "esfera" && (
        <g {...s}>
          <circle cx="10" cy="10" r="7" />
          <path d="M3 10 Q10 14 17 10 M10 3 Q6 10 10 17" />
        </g>
      )}
      {tipo === "vazio" && (
        <g {...s}>
          <path d="M10 2.5 V17.5 M2.5 10 H17.5 M5 5 L15 15" />
        </g>
      )}
    </svg>
  );
}

function Olho({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path d="M2 10 Q10 2.5 18 10 Q10 17.5 2 10 Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="2.6" fill="currentColor" />
    </svg>
  );
}
function CameraRender({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <rect x="2.5" y="6" width="12" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="10.5" r="2.2" fill="currentColor" />
      <path d="M14.5 9 L18 7 V14 L14.5 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function ModelagemParaQuem({ course }: OficinaBlockProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle n="01" eyebrow="Para quem é">
          Este curso é ideal se você...
        </SectionTitle>
        <Reveal delay={80}>
          <p className="max-w-sm font-mono text-xs leading-relaxed text-[#8a6d57] dark:text-white/50">
            Cena aberta. Cada objeto da coleção <span className="font-bold text-(--accent)">Alunos</span> é um perfil. Qual deles é você?
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="mt-10 overflow-hidden rounded-2xl border-2 border-[#2a1a10] bg-[#1b1512] text-[#e8ddd2] shadow-[0_10px_0_0_#e9dccb] dark:border-white/15 dark:shadow-[0_10px_0_0_rgba(255,255,255,0.06)]">
          {/* Abas de espaço de trabalho */}
          <div className="flex items-center gap-1 overflow-hidden border-b border-white/10 px-3 py-2 text-xs">
            <span className="mr-2 h-3 w-3 shrink-0 rounded-sm bg-(--accent)" />
            {["Layout", "Modelagem", "UV", "Shading", "Render"].map((t, i) => (
              <span key={t} className={`shrink-0 rounded-md px-3 py-1 ${i === 0 ? "bg-white/10 font-bold text-white" : "text-white/55"} ${i > 2 ? "hidden sm:inline" : ""}`}>
                {t}
              </span>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.25fr_1fr]">
            <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
              <Viewport />
            </div>

            {/* Outliner: coleção "Alunos" */}
            <div className="flex flex-col bg-[#231b16]">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Hierarquia da cena</span>
                <span className="rounded-md bg-black/30 px-2.5 py-1 font-mono text-[11px] text-white/40">⌕ filtrar</span>
              </div>
              <div className="px-3 py-3 text-sm">
                <div className="flex items-center gap-2 px-1 py-1 text-white/55">
                  <span className="text-[10px]">▾</span>
                  <span className="font-mono text-xs uppercase tracking-wider">Cena</span>
                </div>
                <div className="flex items-center gap-2 py-1 pl-5 text-white/80">
                  <span className="text-[10px]">▾</span>
                  <span className="inline-block h-3.5 w-4 rounded-[3px] border-2 border-white/70" />
                  <span className="font-bold">Alunos</span>
                  <span className="ml-auto font-mono text-[11px] text-white/40">{course.targetAudience.length} objetos</span>
                </div>
                <ul className="relative ml-[26px] border-l border-white/15">
                  {course.targetAudience.map((item, i) => {
                    const tipo = TIPOS[i % TIPOS.length];
                    const ativo = i === 0;
                    return (
                      <li key={item}>
                        <Reveal delay={200 + i * 60} y={8}>
                          <div
                            className={`relative ml-3 mt-1 flex items-start gap-3 rounded-lg px-3 py-2.5 ${
                              ativo ? "bg-(--accent)/25 ring-1 ring-(--accent)/60" : i % 2 ? "bg-white/[0.03]" : ""
                            }`}
                          >
                            <span className="absolute -left-3 top-5 h-px w-3 bg-white/15" />
                            <IconeObjeto tipo={tipo} className={`mt-0.5 h-5 w-5 shrink-0 ${ativo ? "text-(--accent)" : "text-[#e6b98f]"}`} />
                            <div className="min-w-0 flex-1">
                              <p className="font-mono text-[11px] uppercase tracking-wider text-white/40">
                                {NOME_TIPO[tipo]}.{pad2(i + 1)}
                              </p>
                              <p className="mt-0.5 leading-snug text-white/90">{item}</p>
                            </div>
                            <span className="mt-0.5 flex shrink-0 gap-1.5 text-white/50">
                              <Olho className="h-4 w-4" />
                              <CameraRender className="h-4 w-4" />
                            </span>
                          </div>
                        </Reveal>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

// ── Conteúdo: passes de render + pilha de modificadores ──────────────────────

type Passe = "malha" | "uv" | "material" | "luz" | "render";
const PASSES: { id: Passe; nome: string }[] = [
  { id: "malha", nome: "Malha" },
  { id: "uv", nome: "UV" },
  { id: "material", nome: "Material" },
  { id: "luz", nome: "Luz" },
  { id: "render", nome: "Render" },
];

/** A mesma esfera em cada passe do pipeline. */
function EsferaPasse({ passe, sufixo = "" }: { passe: Passe; sufixo?: string }) {
  const id = `ofm-p-${passe}${sufixo}`;
  return (
    <svg viewBox="0 0 100 80" className="block h-auto w-full" aria-hidden="true">
      <defs>
        <pattern id={`${id}-xadrez`} width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="12" height="12" fill="#f3e8da" />
          <rect width="6" height="6" fill="#2a1a10" />
          <rect x="6" y="6" width="6" height="6" fill="#2a1a10" />
        </pattern>
        <radialGradient id={`${id}-luz`} cx="0.32" cy="0.28" r="0.8">
          <stop offset="0" stopColor="#fff4e6" />
          <stop offset="0.4" stopColor="var(--accent)" />
          <stop offset="1" stopColor="#3d1705" />
        </radialGradient>
        <linearGradient id={`${id}-ceu`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3a2a20" />
          <stop offset="1" stopColor="#140d08" />
        </linearGradient>
        <clipPath id={`${id}-c`}>
          <circle cx="50" cy="40" r="24" />
        </clipPath>
      </defs>
      <rect width="100" height="80" fill={passe === "render" ? `url(#${id}-ceu)` : "#241d18"} />
      {passe === "malha" && (
        <g fill="none" stroke="#e8ddd2" strokeOpacity="0.8" strokeWidth="1">
          <circle cx="50" cy="40" r="24" stroke="var(--accent)" strokeWidth="1.6" />
          {[8, 16, 22].map((ry) => (
            <ellipse key={ry} cx="50" cy="40" rx={ry} ry="24" />
          ))}
          {[-16, -8, 0, 8, 16].map((dy) => (
            <ellipse key={dy} cx="50" cy={40 + dy} rx={Math.sqrt(24 * 24 - dy * dy)} ry="3.5" />
          ))}
        </g>
      )}
      {passe === "uv" && (
        <g>
          <circle cx="50" cy="40" r="24" fill={`url(#${id}-xadrez)`} />
          <circle cx="50" cy="40" r="24" fill="none" stroke="#e8ddd2" strokeWidth="1" />
        </g>
      )}
      {passe === "material" && <circle cx="50" cy="40" r="24" fill="var(--accent)" />}
      {passe === "luz" && (
        <g>
          <circle cx="50" cy="40" r="24" fill={`url(#${id}-luz)`} />
          <circle cx="22" cy="16" r="4" fill="#ffd9a8" />
        </g>
      )}
      {passe === "render" && (
        <g>
          <ellipse cx="52" cy="66" rx="26" ry="5" fill="#000" fillOpacity="0.55" />
          <circle cx="50" cy="40" r="24" fill={`url(#${id}-luz)`} />
          <ellipse cx="42" cy="30" rx="6" ry="4" fill="#fff" fillOpacity="0.55" clipPath={`url(#${id}-c)`} />
        </g>
      )}
    </svg>
  );
}

/** Ícones dos modificadores (um por módulo, em rodízio). */
function IconeModificador({ i, className }: { i: number; className?: string }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const k = i % 7;
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      {k === 0 && <path {...s} d="M4 4 H16 V16 H4 Z M4 10 H16 M10 4 V16" />}
      {k === 1 && <path {...s} d="M3 15 L8 5 L12 12 L17 4" />}
      {k === 2 && <path {...s} d="M4 4 H16 V16 H4 Z M4 8 H8 V4 M8 12 H12 V8 M12 16 V12 H16" />}
      {k === 3 && <path {...s} d="M10 3 C14 7 16 9 16 12 A6 6 0 0 1 4 12 C4 9 6 7 10 3 Z" />}
      {k === 4 && <path {...s} d="M4 16 L10 4 L16 16 Z M7 10 H13" />}
      {k === 5 && <path {...s} d="M3 10 A7 7 0 1 0 17 10 A7 7 0 1 0 3 10 M6 7 L14 13 M14 7 L6 13" />}
      {k === 6 && <path {...s} d="M10 3 L11.8 8.2 L17 10 L11.8 11.8 L10 17 L8.2 11.8 L3 10 L8.2 8.2 Z" />}
    </svg>
  );
}

/** Cubo em wireframe (ícone das ferramentas). */
export function MeshCube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="58" fill="#2a1a10" />
      <g fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinejoin="round">
        <path d="M60 24 L92 42 L92 78 L60 96 L28 78 L28 42 Z" />
        <path d="M28 42 L60 60 L92 42 M60 60 L60 96" />
      </g>
      <g fill="none" stroke="#fbf5ec" strokeOpacity="0.35" strokeWidth="2">
        <path d="M44 33 L76 51 L76 87 M76 33 L44 51 L44 87" />
      </g>
      {[
        [60, 24],
        [92, 42],
        [92, 78],
        [60, 96],
        [28, 78],
        [28, 42],
        [60, 60],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#fbf5ec" />
      ))}
    </svg>
  );
}

export function ModelagemConteudo(props: OficinaBlockProps) {
  const { tier } = props;
  const total = tier.modules.length;
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionTitle n="02" eyebrow="Conteúdo programático">
        O que você vai aprender
      </SectionTitle>
      <TierTabs {...props} label="Espaço de trabalho:" shape="box" />

      {/* Esteira de passes: a mesma peça, do aramado ao render */}
      <Reveal delay={100}>
        <ol className="mt-10 grid grid-cols-5 gap-2 sm:gap-4">
          {PASSES.map((ps, i) => (
            <li key={ps.id} className="relative">
              <div className={`overflow-hidden rounded-xl border-2 ${i === PASSES.length - 1 ? "border-(--accent)" : "border-[#2a1a10] dark:border-white/15"}`}>
                <EsferaPasse passe={ps.id} />
              </div>
              <p className="mt-2 text-center font-mono text-[11px] font-bold uppercase tracking-wider text-[#6b5242] sm:text-xs dark:text-white/60">
                <span className="hidden sm:inline">{pad2(i + 1)} · </span>
                {ps.nome}
              </p>
              {i < PASSES.length - 1 && (
                <span className="absolute -right-2 top-[32%] z-10 hidden h-5 w-5 items-center justify-center rounded-full bg-(--accent) text-[11px] font-black text-white sm:-right-[14px] sm:flex">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Painel de propriedades com a pilha de modificadores */}
      <Reveal delay={140}>
        <div className="mt-10 flex overflow-hidden rounded-2xl border-2 border-[#e9dccb] bg-[#fbf5ec] dark:border-white/10 dark:bg-[#1f140d]">
          {/* Abas verticais do painel de propriedades */}
          <div className="hidden w-12 shrink-0 flex-col items-center gap-2 border-r border-[#e9dccb] bg-[#f1e6d8] py-4 sm:flex dark:border-white/10 dark:bg-black/20">
            {Array.from({ length: 7 }, (_, i) => (
              <span
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${i === 4 ? "bg-(--accent) text-white" : "text-[#8a6d57] dark:text-white/40"}`}
              >
                <IconeModificador i={i} className="h-4 w-4" />
              </span>
            ))}
          </div>

          <div className="min-w-0 flex-1 p-3 sm:p-5">
            <div className="flex items-center justify-between gap-3 px-1 pb-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a6d57] dark:text-white/50">
                Pilha de modificadores
              </span>
              <span className="rounded-md bg-[#2a1a10] px-2.5 py-1 font-mono text-[11px] font-bold text-white dark:bg-white/10">
                {total} módulos
              </span>
            </div>
            <div className="space-y-3">
              {tier.modules.map((m, i) => (
                <details key={`${tier.levelName}-${m.title}`} open className="group rounded-xl border border-[#e9dccb] bg-white dark:border-white/10 dark:bg-white/[0.03]">
                  <summary className="flex cursor-pointer list-none items-center gap-3 rounded-xl px-3 py-3 sm:px-4 [&::-webkit-details-marker]:hidden">
                    <span className="text-xs text-[#8a6d57] transition group-open:rotate-90 dark:text-white/50">▶</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--accent) text-white">
                      <IconeModificador i={i} className="h-4 w-4" />
                    </span>
                    <h3 className="min-w-0 flex-1 text-sm font-black uppercase leading-tight tracking-tight sm:text-base">{m.title}</h3>
                    <span className="hidden shrink-0 items-center gap-1.5 text-[#8a6d57] sm:flex dark:text-white/40">
                      <span className="mr-1 font-mono text-[11px] font-bold">MOD {pad2(i + 1)}</span>
                      <Olho className="h-4 w-4" />
                      <CameraRender className="h-4 w-4" />
                    </span>
                  </summary>
                  <ul className="grid gap-2 px-3 pb-4 sm:grid-cols-2 sm:px-4">
                    {m.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5 rounded-lg bg-[#f6ecdf] px-3 py-2 text-sm leading-snug text-[#4a3526] dark:bg-black/25 dark:text-white/75">
                        <span className="mt-[5px] h-2.5 w-2.5 shrink-0 rounded-full border-2 border-(--accent) bg-(--accent)/30" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Render final */}
      <Reveal delay={180}>
        <div className="mt-6 grid overflow-hidden rounded-2xl bg-[#2a1a10] text-white sm:grid-cols-[220px_1fr] dark:bg-white dark:text-[#2a1a10]">
          <div className="border-b-4 border-(--accent) sm:border-b-0 sm:border-r-4">
            <EsferaPasse passe="render" sufixo="-final" />
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-(--accent)">Render final · 100%</p>
            <p className="mt-2 text-base font-semibold">{tier.outcome}</p>
          </div>
        </div>
      </Reveal>

      {tier.tools.length > 0 && (
        <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
          {tier.tools.map((tool) => (
            <span key={tool} className="inline-flex items-center gap-2 rounded-full bg-[#f6ecdf] py-1 pl-1 pr-4 text-xs font-bold dark:bg-white/10">
              <MeshCube className="h-7 w-7" />
              {tool}
            </span>
          ))}
        </Reveal>
      )}
    </div>
  );
}
