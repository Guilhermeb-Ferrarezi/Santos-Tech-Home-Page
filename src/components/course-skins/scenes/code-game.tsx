import type { CourseTheme } from "@/lib/course-themes";
import { AppWindow } from "@/components/course-hero-art";
import { CodeLines, type Tok } from "@/components/course-skins/scenes/code-kit";

// ── Jogos: a fase rodando e o loop de jogo que move o personagem ───────────

const LOOP: Tok[][] = [
  [["// roda a cada quadro (60x por segundo)", "cm"]],
  [["void", "kw"], [" Update", "fn"], ["() {", "pl"]],
  [["  float", "kw"], [" x = Input.", "pl"], ["GetAxis", "fn"], ["(", "pl"], ['"Horizontal"', "str"], [");", "pl"]],
  [["  corpo", "var"], [".velocity = ", "pl"], ["new", "kw"], [" Vector2", "fn"], ["(x * ", "pl"], ["8", "num"], [", corpo.velocity.y);", "pl"]],
  [["  if", "kw"], [" (Input.", "pl"], ["GetButtonDown", "fn"], ["(", "pl"], ['"Pular"', "str"], [")) ", "pl"], ["Pular", "fn"], ["();", "pl"]],
  [["}", "pl"]],
];

/** Personagem em pixel art (cada "pixel" = 1 unidade). */
const HEROI = [
  "..AAAA..",
  ".AAAAAA.",
  ".SSOSO..",
  ".SSSSS..",
  "..BBBB..",
  ".BBBBBB.",
  "..B..B..",
  ".LL..LL.",
];

function Sprite({ x, y, s, cores }: { x: number; y: number; s: number; cores: Record<string, string> }) {
  return (
    <g>
      {HEROI.flatMap((linha, r) =>
        [...linha].map((c, k) =>
          c === "." ? null : <rect key={`${r}-${k}`} x={x + k * s} y={y + r * s} width={s} height={s} fill={cores[c]} />,
        ),
      )}
    </g>
  );
}

export function GameScene({ theme }: { theme: CourseTheme }) {
  const tile = (x: number, y: number, w: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width={w} height="10" fill="#3f8f4a" />
      <rect x={x} y={y + 10} width={w} height="14" fill="#6b4a2e" />
      {Array.from({ length: Math.floor(w / 10) }, (_, i) => (
        <rect key={i} x={x + i * 10 + 3} y={y + 14} width="3" height="3" fill="#00000030" />
      ))}
    </g>
  );
  return (
    <>
      <AppWindow title="▶ fase_1 · jogando" className="left-0 top-[6%] w-[94%]">
        <svg viewBox="0 0 320 180" className="block w-full" aria-hidden="true" shapeRendering="crispEdges">
          <defs>
            <linearGradient id="ceu-jogo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1e2a5a" />
              <stop offset="1" stopColor="#4a6fb5" />
            </linearGradient>
          </defs>
          <rect width="320" height="180" fill="url(#ceu-jogo)" />
          {/* estrelas e montanhas */}
          {[
            [30, 20],
            [90, 34],
            [150, 14],
            [240, 28],
            [290, 12],
          ].map(([x, y]) => (
            <rect key={`${x}`} x={x} y={y} width="2" height="2" fill="#fff" fillOpacity="0.7" />
          ))}
          <path d="M0 140 L50 90 L90 124 L140 70 L200 130 L250 96 L320 140 L320 180 L0 180 Z" fill="#26325f" />
          {/* plataformas */}
          {tile(0, 156, 320)}
          {tile(120, 104, 60)}
          {tile(230, 76, 60)}
          {/* moedas */}
          {[
            [140, 86],
            [158, 86],
            [252, 58],
            [270, 58],
          ].map(([x, y]) => (
            <g key={`m${x}`}>
              <rect x={x} y={y} width="8" height="10" fill="#FFD43B" />
              <rect x={x + 3} y={y + 2} width="2" height="6" fill="#00000033" />
            </g>
          ))}
          {/* inimigo */}
          <path d="M196 156 v-8 h2 v-4 h12 v4 h2 v8 Z" fill="#ef4444" />
          <rect x="201" y="147" width="2" height="3" fill="#fff" />
          <rect x="207" y="147" width="2" height="3" fill="#fff" />
          {/* herói pulando */}
          <g className="animate-float-y">
            <Sprite x={58} y={104} s={4} cores={{ A: theme.accent, S: "#f1c9a5", O: "#111", B: "#e5e7eb", L: "#374151" }} />
          </g>
          {/* HUD */}
          <rect x="8" y="8" width="96" height="18" rx="3" fill="#00000066" />
          <rect x="14" y="13" width="7" height="8" fill="#FFD43B" />
          <text x="26" y="21" fontSize="9" fontFamily="ui-monospace, monospace" fill="#fff">
            × 12
          </text>
          {[56, 68, 80].map((x) => (
            <g key={x} fill="#ef4444">
              <rect x={x} y="12" width="4" height="4" />
              <rect x={x + 5} y="12" width="4" height="4" />
              <path d={`M${x} 15 h9 l-4.5 5 Z`} />
            </g>
          ))}
        </svg>
      </AppWindow>
      <AppWindow title="Jogador.cs" className="animate-float-y bottom-[2%] right-[1%] w-[88%] sm:w-[80%]">
        <CodeLines lines={LOOP} theme={theme} />
      </AppWindow>
    </>
  );
}
