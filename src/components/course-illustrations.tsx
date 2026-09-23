import type { ReactNode } from "react";
import type { CourseTheme, CourseThemeKey } from "@/lib/course-themes";

/**
 * Ilustrações flat das páginas de curso particular, coloridas pela categoria.
 * Todas são originais da Santos Tech: pessoas sem rosto, formas simples e um
 * círculo pastel atrás, no mesmo vocabulário visual em todas as seções.
 */

type IlloProps = { theme: CourseTheme; className?: string };

const SKIN = "#f1c7a4";
const SKIN_2 = "#8d5a3b";
const HAIR = "#2b2118";
const PANTS = "#1f2937";
const DESK = "#374151";
const DESK_DARK = "#1f2530";

function Backdrop({ theme, cx, cy, r }: { theme: CourseTheme; cx: number; cy: number; r: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r={r} fill={theme.accent} fillOpacity="0.13" />
      <circle cx={cx + r * 0.72} cy={cy - r * 0.78} r="7" fill={theme.accent2} fillOpacity="0.7" />
      <circle cx={cx - r * 0.95} cy={cy + r * 0.15} r="4" fill={theme.accent} fillOpacity="0.5" />
    </>
  );
}

// ── Tela do monitor por categoria ─────────────────────────────────────────────

function Screen({ tema, theme, x, y, w, h }: { tema: CourseThemeKey; theme: CourseTheme; x: number; y: number; w: number; h: number }) {
  if (tema === "office") {
    const cols = 5;
    const rows = 6;
    const cw = w / cols;
    const rh = (h * 0.55) / rows;
    return (
      <g>
        <rect x={x} y={y} width={w} height={rh} fill={theme.accent} />
        {Array.from({ length: rows }, (_, r) =>
          Array.from({ length: cols }, (_, c) => (
            <rect
              key={`${r}-${c}`}
              x={x + c * cw + 1}
              y={y + (r + 1) * rh + 1}
              width={cw - 2}
              height={rh - 2}
              fill={c === cols - 1 ? theme.accent : "#ffffff"}
              fillOpacity={c === cols - 1 ? 0.35 : 0.1}
            />
          )),
        )}
        {[0.35, 0.7, 0.5, 0.9, 0.6, 0.8].map((b, i) => (
          <rect
            key={i}
            x={x + 6 + i * ((w - 12) / 6)}
            y={y + h - 4 - b * h * 0.3}
            width={(w - 12) / 6 - 4}
            height={b * h * 0.3}
            rx="1.5"
            fill={i === 3 ? theme.accent : theme.accent2}
            fillOpacity={i === 3 ? 1 : 0.5}
          />
        ))}
      </g>
    );
  }
  if (tema === "programacao") {
    const lines = [
      [0.18, 0.3, 0.22],
      [0.12, 0.42],
      [],
      [0.08, 0.2, 0.35],
      [0.08, 0.14, 0.28, 0.16],
      [0.08, 0.3],
      [0.22, 0.18],
    ];
    const palette = ["#c792ea", theme.accent, theme.accent2, "#f78c6c"];
    return (
      <g>
        {lines.map((segs, i) => {
          let cursor = x + 8;
          return segs.map((s, j) => {
            const width = s * (w - 16);
            const rect = (
              <rect
                key={`${i}-${j}`}
                x={cursor}
                y={y + 8 + i * (h - 12) / lines.length}
                width={width}
                height="4"
                rx="2"
                fill={palette[(i + j) % palette.length]}
                fillOpacity={j === 0 && segs.length > 2 ? 0.55 : 0.95}
              />
            );
            cursor += width + 4;
            return rect;
          });
        })}
      </g>
    );
  }
  if (tema !== "universo-3d") {
    // Genérico: janela com blocos de conteúdo na cor da categoria
    return (
      <g>
        <rect x={x + 6} y={y + 6} width={w * 0.45} height="6" rx="3" fill={theme.accent} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={x + 6} y={y + 20 + i * 10} width={w * (0.8 - i * 0.12)} height="4" rx="2" fill="#ffffff" fillOpacity="0.25" />
        ))}
        <rect x={x + w - 40} y={y + h - 26} width="34" height="20" rx="4" fill={theme.accent2} fillOpacity="0.8" />
      </g>
    );
  }
  // universo-3d: peça em wireframe no fatiador
  const cx = x + w / 2;
  const by = y + h - 10;
  return (
    <g>
      <polygon
        points={`${cx},${by - 12} ${cx + w * 0.38},${by} ${cx},${by + 8} ${cx - w * 0.38},${by}`}
        fill="#ffffff"
        fillOpacity="0.08"
      />
      {Array.from({ length: 9 }, (_, i) => {
        const t = i / 8;
        const rx = w * (0.14 + 0.09 * Math.sin(Math.PI * (0.15 + 0.8 * t)));
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={by - i * (h * 0.075)}
            rx={rx}
            ry={rx * 0.32}
            fill={i < 5 ? theme.accent : "none"}
            stroke={i < 5 ? "#000" : theme.accent2}
            strokeOpacity={i < 5 ? 0.2 : 0.7}
            strokeDasharray={i < 5 ? undefined : "2 2"}
          />
        );
      })}
    </g>
  );
}

// ── 1. Pessoa na mesa usando a ferramenta ─────────────────────────────────────

export function PersonAtDesk({
  theme,
  tema,
  className,
  renderScreen,
}: IlloProps & {
  tema: CourseThemeKey;
  /** Conteúdo próprio da tela do monitor (coordenadas do SVG 400×320). */
  renderScreen?: (box: { x: number; y: number; w: number; h: number }) => ReactNode;
}) {
  return (
    <svg viewBox="0 0 400 320" className={className} role="img" aria-label="Aluno praticando no computador">
      <Backdrop theme={theme} cx={215} cy={165} r={138} />
      <ellipse cx="210" cy="292" rx="160" ry="10" fill="#000" fillOpacity="0.07" />

      {/* Card flutuante: check */}
      <g>
        <rect x="26" y="60" width="92" height="34" rx="10" fill="#fff" stroke="#000" strokeOpacity="0.06" />
        <circle cx="45" cy="77" r="9" fill={theme.accent} />
        <path d="M40.5 77.5 l3 3 l6 -6.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="60" y="71" width="44" height="4" rx="2" fill="#1f2937" fillOpacity="0.55" />
        <rect x="60" y="80" width="30" height="4" rx="2" fill="#1f2937" fillOpacity="0.25" />
      </g>

      {/* Cadeira */}
      <rect x="82" y="146" width="10" height="66" rx="5" fill="#4b5563" />
      <rect x="86" y="204" width="58" height="9" rx="4" fill="#4b5563" />
      <rect x="112" y="213" width="6" height="58" fill="#6b7280" />
      <path d="M88 280 L142 280" stroke="#6b7280" strokeWidth="5" strokeLinecap="round" />
      <circle cx="90" cy="284" r="4" fill="#374151" />
      <circle cx="140" cy="284" r="4" fill="#374151" />

      {/* Pernas (atrás da mesa) */}
      <path d="M112 204 L182 212" stroke={PANTS} strokeWidth="17" strokeLinecap="round" />
      <path d="M182 212 L184 282" stroke={PANTS} strokeWidth="14" strokeLinecap="round" />
      <ellipse cx="193" cy="286" rx="14" ry="6" fill="#111827" />

      {/* Mesa */}
      <rect x="150" y="198" width="226" height="12" rx="4" fill={DESK} />
      <rect x="162" y="210" width="8" height="80" fill={DESK_DARK} />
      <rect x="356" y="210" width="8" height="80" fill={DESK_DARK} />

      {/* Monitor */}
      <rect x="196" y="84" width="158" height="104" rx="8" fill="#1f2328" />
      <rect x="203" y="91" width="144" height="86" rx="4" fill="#0e1116" />
      {renderScreen ? renderScreen({ x: 206, y: 94, w: 138, h: 80 }) : <Screen tema={tema} theme={theme} x={206} y={94} w={138} h={80} />}
      <rect x="266" y="188" width="18" height="8" fill="#2b3037" />
      <rect x="250" y="195" width="50" height="4" rx="2" fill="#2b3037" />

      {/* Teclado e caneca */}
      <rect x="196" y="192" width="48" height="6" rx="2" fill="#cbd5e1" />
      <rect x="160" y="182" width="16" height="16" rx="3" fill={theme.accent2} />
      <path d="M176 186 q7 0 7 5 q0 5 -7 5" fill="none" stroke={theme.accent2} strokeWidth="3" />

      {/* Planta */}
      <rect x="360" y="176" width="20" height="22" rx="3" fill="#e5e7eb" />
      <ellipse cx="364" cy="160" rx="7" ry="16" fill="#3f9d6a" transform="rotate(-22 364 160)" />
      <ellipse cx="377" cy="156" rx="7" ry="18" fill="#2f8a5a" transform="rotate(18 377 156)" />
      <ellipse cx="370" cy="150" rx="6" ry="20" fill="#48b079" />

      {/* Tronco (camiseta na cor da categoria) */}
      <path d="M104 140 Q126 128 148 138 L154 206 L104 206 Z" fill={theme.accent} />
      {/* Braço */}
      <path d="M140 150 L170 176 L198 192" fill="none" stroke={theme.accent} strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M140 150 L170 176 L198 192" fill="none" stroke="#000" strokeOpacity="0.12" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="202" cy="193" r="6" fill={SKIN} />
      {/* Cabeça */}
      <rect x="120" y="126" width="12" height="12" rx="3" fill={SKIN} />
      <circle cx="128" cy="112" r="18" fill={SKIN} />
      <path d="M110 112 Q108 90 130 92 Q148 94 146 106 Q134 100 124 108 Q120 118 112 122 Z" fill={HAIR} />
    </svg>
  );
}

// ── 2. Aula individual: professor + aluno ─────────────────────────────────────

export function OneOnOne({ theme, className }: IlloProps) {
  return (
    <svg viewBox="0 0 400 260" className={className} role="img" aria-label="Professor e aluno em aula individual">
      <Backdrop theme={theme} cx={200} cy={140} r={112} />
      <ellipse cx="200" cy="238" rx="140" ry="8" fill="#000" fillOpacity="0.07" />

      {/* Balão de fala do professor */}
      <g>
        <rect x="58" y="34" width="84" height="40" rx="12" fill="#fff" stroke="#000" strokeOpacity="0.06" />
        <path d="M92 74 l8 10 l4 -10 Z" fill="#fff" />
        <circle cx="84" cy="54" r="4" fill={theme.accent} />
        <circle cx="100" cy="54" r="4" fill={theme.accent} fillOpacity="0.6" />
        <circle cx="116" cy="54" r="4" fill={theme.accent} fillOpacity="0.3" />
      </g>
      {/* Lâmpada do aluno */}
      <g>
        <circle cx="306" cy="62" r="17" fill={theme.accent2} />
        <rect x="300" y="78" width="12" height="7" rx="2" fill="#9ca3af" />
        <path d="M306 50 v10 M300 64 h12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Professor (esquerda) */}
      <rect x="126" y="112" width="12" height="12" rx="3" fill={SKIN_2} />
      <circle cx="132" cy="100" r="18" fill={SKIN_2} />
      <path d="M114 98 Q116 78 134 80 Q152 82 150 98 Q140 88 126 92 Q118 96 114 104 Z" fill="#111" />
      <path d="M100 196 L104 136 Q132 122 160 136 L164 196 Z" fill="#475569" />
      <path d="M156 146 L184 176" stroke="#475569" strokeWidth="12" strokeLinecap="round" />
      <circle cx="187" cy="179" r="6" fill={SKIN_2} />

      {/* Aluno (direita) */}
      <rect x="262" y="112" width="12" height="12" rx="3" fill={SKIN} />
      <circle cx="268" cy="100" r="18" fill={SKIN} />
      <path d="M250 104 Q246 80 268 80 Q290 80 288 102 L286 116 Q282 96 270 92 Q256 94 254 112 Z" fill={HAIR} />
      <path d="M236 196 L240 136 Q268 122 296 136 L300 196 Z" fill={theme.accent} />
      <path d="M244 146 L222 178" stroke={theme.accent} strokeWidth="12" strokeLinecap="round" />
      <path d="M244 146 L222 178" stroke="#000" strokeOpacity="0.12" strokeWidth="12" strokeLinecap="round" />
      <circle cx="219" cy="181" r="6" fill={SKIN} />

      {/* Notebook */}
      <path d="M176 150 L224 150 L228 186 L172 186 Z" fill="#d1d5db" />
      <path d="M180 154 L220 154 L223 182 L177 182 Z" fill="#1f2328" />
      <circle cx="200" cy="168" r="4" fill={theme.accent} />

      {/* Cadeiras (assento aparece dos lados, embaixo da mesa) */}
      <rect x="98" y="204" width="68" height="7" rx="3" fill="#4b5563" />
      <rect x="234" y="204" width="68" height="7" rx="3" fill="#4b5563" />

      {/* Pernas e sapatos */}
      <rect x="114" y="198" width="13" height="36" rx="5" fill={PANTS} />
      <rect x="138" y="198" width="13" height="36" rx="5" fill={PANTS} />
      <ellipse cx="118" cy="235" rx="10" ry="5" fill="#111827" />
      <ellipse cx="147" cy="235" rx="10" ry="5" fill="#111827" />
      <rect x="250" y="198" width="13" height="36" rx="5" fill={PANTS} />
      <rect x="274" y="198" width="13" height="36" rx="5" fill={PANTS} />
      <ellipse cx="254" cy="235" rx="10" ry="5" fill="#111827" />
      <ellipse cx="283" cy="235" rx="10" ry="5" fill="#111827" />

      {/* Mesa */}
      <rect x="70" y="186" width="260" height="12" rx="4" fill={DESK} />
      <rect x="90" y="198" width="8" height="40" fill={DESK_DARK} />
      <rect x="302" y="198" width="8" height="40" fill={DESK_DARK} />
    </svg>
  );
}

// ── 3. Agenda flexível ────────────────────────────────────────────────────────

export function CalendarSpot({ theme, className }: IlloProps) {
  const marcados = new Set([2, 6, 9, 13, 16, 20]);
  return (
    <svg viewBox="0 0 400 260" className={className} role="img" aria-label="Agenda com horários flexíveis">
      <Backdrop theme={theme} cx={200} cy={132} r={112} />
      <rect x="112" y="46" width="176" height="178" rx="14" fill="#fff" stroke="#000" strokeOpacity="0.06" />
      <rect x="112" y="46" width="176" height="40" rx="14" fill={theme.accent} />
      <rect x="112" y="72" width="176" height="14" fill={theme.accent} />
      <rect x="144" y="36" width="8" height="22" rx="4" fill="#374151" />
      <rect x="248" y="36" width="8" height="22" rx="4" fill="#374151" />
      <rect x="130" y="60" width="60" height="8" rx="4" fill="#fff" fillOpacity="0.85" />
      {Array.from({ length: 21 }, (_, i) => {
        const c = i % 7;
        const r = Math.floor(i / 7);
        const x = 124 + c * 22.5;
        const y = 100 + r * 30;
        const on = marcados.has(i);
        return (
          <g key={i}>
            <rect x={x} y={y} width="17" height="20" rx="4" fill={on ? theme.accent : "#f3f4f6"} fillOpacity={on ? 0.9 : 1} />
            {on && (
              <path
                d={`M${x + 4.5} ${y + 10.5} l3 3 l5 -6`}
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </g>
        );
      })}
      {/* Relógio */}
      <circle cx="292" cy="194" r="34" fill="#fff" stroke={theme.accent2} strokeWidth="6" />
      <path d="M292 174 V194 L306 202" fill="none" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="292" cy="194" r="3.5" fill={theme.accent} />
    </svg>
  );
}

// ── 4. Escola presencial ──────────────────────────────────────────────────────

export function SchoolSpot({ theme, className }: IlloProps) {
  return (
    <svg viewBox="0 0 400 260" className={className} role="img" aria-label="Escola presencial em Ribeirão Preto">
      <Backdrop theme={theme} cx={200} cy={136} r={112} />
      <ellipse cx="200" cy="232" rx="150" ry="8" fill="#000" fillOpacity="0.07" />
      {/* Prédio */}
      <rect x="112" y="96" width="176" height="134" rx="6" fill="#f9fafb" stroke="#000" strokeOpacity="0.08" />
      <rect x="104" y="86" width="192" height="16" rx="4" fill="#374151" />
      {/* Toldo listrado */}
      {Array.from({ length: 8 }, (_, i) => (
        <path
          key={i}
          d={`M${112 + i * 22} 102 h22 v16 q-11 8 -22 0 Z`}
          fill={i % 2 === 0 ? theme.accent : "#fff"}
          stroke="#000"
          strokeOpacity="0.05"
        />
      ))}
      {/* Janelas e porta */}
      <rect x="128" y="138" width="52" height="42" rx="4" fill={theme.accent} fillOpacity="0.18" stroke={theme.accent} strokeOpacity="0.5" />
      <rect x="220" y="138" width="52" height="42" rx="4" fill={theme.accent} fillOpacity="0.18" stroke={theme.accent} strokeOpacity="0.5" />
      <path d="M154 138 v42 M128 159 h52 M246 138 v42 M220 159 h52" stroke={theme.accent} strokeOpacity="0.5" />
      <rect x="184" y="170" width="32" height="60" rx="3" fill="#374151" />
      <circle cx="210" cy="202" r="2.5" fill={theme.accent2} />
      {/* Pino do mapa */}
      <path d="M300 30 c-19 0 -32 14 -32 31 c0 23 32 50 32 50 s32 -27 32 -50 c0 -17 -13 -31 -32 -31 Z" fill={theme.accent} />
      <circle cx="300" cy="61" r="12" fill="#fff" />
      {/* Árvore */}
      <rect x="76" y="186" width="6" height="44" fill="#6b4f3a" />
      <circle cx="79" cy="176" r="20" fill="#3f9d6a" />
      <circle cx="68" cy="190" r="12" fill="#48b079" />
    </svg>
  );
}

// ── 5. Certificado ────────────────────────────────────────────────────────────

export function CertificateSpot({ theme, className, curso }: IlloProps & { curso: string }) {
  const nome = curso.length > 30 ? `${curso.slice(0, 28)}…` : curso;
  return (
    <svg viewBox="0 0 400 260" className={className} role="img" aria-label={`Certificado do curso ${curso}`}>
      <Backdrop theme={theme} cx={200} cy={134} r={112} />
      <g transform="rotate(-4 200 130)">
        <rect x="84" y="50" width="232" height="164" rx="8" fill="#fff" stroke="#000" strokeOpacity="0.08" />
        <rect x="94" y="60" width="212" height="144" rx="4" fill="none" stroke={theme.accent} strokeOpacity="0.45" strokeWidth="2" />
        <text x="200" y="92" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="15" fontWeight="800" letterSpacing="3" fill="#1f2937">
          CERTIFICADO
        </text>
        <text x="200" y="110" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="8" fill="#6b7280">
          Santos Tech certifica a conclusão de
        </text>
        <text x="200" y="130" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="11" fontWeight="700" fill={theme.accent}>
          {nome}
        </text>
        <rect x="120" y="178" width="70" height="2" fill="#9ca3af" />
        <rect x="130" y="184" width="50" height="4" rx="2" fill="#d1d5db" />
      </g>
      {/* Selo */}
      <path d="M268 196 l-10 44 l14 -8 l8 14 l6 -42 Z" fill={theme.accent} />
      <path d="M296 196 l10 44 l-14 -8 l-8 14 l-6 -42 Z" fill={theme.accent} fillOpacity="0.8" />
      <circle cx="282" cy="186" r="28" fill={theme.accent2} />
      <circle cx="282" cy="186" r="20" fill={theme.accent} />
      <path d="M273 186 l6 6 l12 -13" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
