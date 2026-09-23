import type { CourseTheme } from "@/lib/course-themes";
import { AppWindow } from "@/components/course-hero-art";

// ── Office: planilha + gráfico ────────────────────────────────────────────────

const PLANILHA = [
  ["Região", "Jan", "Fev", "Mar", "Total"],
  ["Sul", "18.420", "21.380", "24.910", "64.710"],
  ["Sudeste", "42.150", "39.870", "47.330", "129.350"],
  ["Centro", "12.030", "14.640", "15.200", "41.870"],
  ["Norte", "8.760", "9.910", "11.480", "30.150"],
  ["Nordeste", "22.540", "25.120", "27.690", "75.350"],
];

/** Barra de fórmulas + grade com cabeçalhos de coluna/linha (reusada nas variações de Excel). */
export function SheetGrid({
  accent,
  formula,
  rows = PLANILHA,
  selected = [1, 4],
}: {
  accent: string;
  formula: string;
  rows?: string[][];
  /** [linha, coluna] da célula ativa (0 = cabeçalho). */
  selected?: [number, number];
}) {
  const cols = rows[0].length;
  return (
    <>
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-1.5 font-mono text-[10px]">
        <span className="font-bold italic" style={{ color: accent }}>
          fx
        </span>
        <span className="truncate text-white/70">{formula}</span>
      </div>
      <div
        className="grid font-mono text-[9px] sm:text-[10px]"
        style={{ gridTemplateColumns: `18px 1.3fr repeat(${cols - 2}, 1fr) 1.15fr` }}
      >
        <span className="border-b border-r border-white/10 bg-white/[0.04]" />
        {"ABCDEFGH"
          .slice(0, cols)
          .split("")
          .map((c) => (
            <span key={c} className="border-b border-r border-white/10 bg-white/[0.04] py-0.5 text-center text-white/40">
              {c}
            </span>
          ))}
        {rows.map((row, r) => (
          <Row key={r} row={r} cells={row} accent={accent} selected={selected} />
        ))}
      </div>
    </>
  );
}

export function OfficeScene({ theme }: { theme: CourseTheme }) {
  const bars = [0.46, 0.92, 0.3, 0.22, 0.56];
  return (
    <>
      <AppWindow title="vendas_2026.xlsx" className="left-0 top-[10%] w-[88%]">
        <SheetGrid accent={theme.accent} formula={`=SOMASES(Tabela[Total];Tabela[Região];"Sul")`} />
      </AppWindow>

      {/* Card de gráfico */}
      <div className="animate-float-y absolute bottom-[4%] left-[6%] w-[46%] rounded-xl border border-white/10 bg-[#141414]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <p className="text-[10px] font-bold text-white/70">Receita por região</p>
        <svg viewBox="0 0 200 90" className="mt-2 w-full">
          {[0, 1, 2].map((i) => (
            <line key={i} x1="0" x2="200" y1={20 + i * 30} y2={20 + i * 30} stroke="#ffffff" strokeOpacity="0.07" />
          ))}
          {bars.map((h, i) => (
            <rect
              key={i}
              x={12 + i * 38}
              y={80 - h * 72}
              width="24"
              height={h * 72}
              rx="4"
              fill={i === 1 ? theme.accent : theme.accent2}
              fillOpacity={i === 1 ? 1 : 0.35}
            />
          ))}
        </svg>
      </div>

      {/* KPI */}
      <div
        className="absolute bottom-[14%] right-[2%] rounded-xl border px-3 py-2 shadow-lg"
        style={{ borderColor: `${theme.accent}88`, background: "#141414f2" }}
      >
        <p className="text-lg font-black leading-none" style={{ color: theme.accent2 }}>
          +32%
        </p>
        <p className="mt-1 text-[10px] text-white/60">vs. 1º tri 2025</p>
      </div>
    </>
  );
}

function Row({
  row,
  cells,
  accent,
  selected,
}: {
  row: number;
  cells: string[];
  accent: string;
  selected: [number, number];
}) {
  const header = row === 0;
  const last = cells.length - 1;
  return (
    <>
      <span className="border-b border-r border-white/10 bg-white/[0.04] py-1 text-center text-white/40">{row + 1}</span>
      {cells.map((cell, c) => {
        const isSelected = row === selected[0] && c === selected[1];
        const total = c === last && !header;
        return (
          <span
            key={c}
            className={`truncate border-b border-r border-white/10 px-1.5 py-1 ${
              header ? "font-bold text-white/80" : c === 0 ? "text-white/70" : "text-right text-white/55"
            }`}
            style={{
              ...(total ? { background: `${accent}1a`, color: "#fff" } : {}),
              ...(isSelected ? { outline: `2px solid ${accent}`, outlineOffset: "-2px" } : {}),
            }}
          >
            {cell}
          </span>
        );
      })}
    </>
  );
}
