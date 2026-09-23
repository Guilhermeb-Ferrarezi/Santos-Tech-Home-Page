import type { CourseTheme } from "@/lib/course-themes";
import { Led, ScenePanel } from "@/components/course-skins/scenes/ti-parts";

// ── T.I · Linux: rack de servidores + painel de serviços do sysadmin ──────────
// (propositalmente sem editor/terminal, pra não repetir a pele de Programação)

const METAL = "#15211e";
const BEZEL = "#1c2b27";

type Unidade = { u: number; nome: string; tipo: "switch" | "srv" | "disco" | "vent" };

const UNIDADES: Unidade[] = [
  { u: 1, nome: "switch", tipo: "switch" },
  { u: 2, nome: "web-01", tipo: "srv" },
  { u: 2, nome: "db-01", tipo: "srv" },
  { u: 2, nome: "backup", tipo: "disco" },
  { u: 1, nome: "", tipo: "vent" },
  { u: 2, nome: "app-02", tipo: "srv" },
];

const U = 34;

export function LinuxScene({ theme }: { theme: CourseTheme }) {
  const x0 = 44;
  const w = 172;
  let y = 58;
  const blocos = UNIDADES.map((un) => {
    const b = { ...un, y, h: un.u * U - 4 };
    y += un.u * U;
    return b;
  });

  return (
    <>
      <svg viewBox="0 0 520 440" className="absolute inset-0 h-full w-full">
        {/* Gabinete do rack */}
        <rect x={x0 - 22} y="34" width={w + 44} height={y - 10} rx="10" fill="#000" fillOpacity="0.35" transform="translate(8 12)" />
        <rect x={x0 - 22} y="34" width={w + 44} height={y - 10} rx="10" fill={METAL} stroke="#2c4a44" strokeWidth="2" />
        {/* Trilhos com furação */}
        {[x0 - 14, x0 + w + 4].map((rx) => (
          <g key={rx}>
            <rect x={rx} y="50" width="10" height={y - 42} fill="#0d1715" />
            {Array.from({ length: Math.floor((y - 58) / 11) }, (_, k) => (
              <rect key={k} x={rx + 3} y={58 + k * 11} width="4" height="4" fill="#2c4a44" />
            ))}
          </g>
        ))}

        {blocos.map((b, i) => (
          <g key={i} transform={`translate(${x0} ${b.y})`}>
            <rect width={w} height={b.h} rx="3" fill={b.tipo === "vent" ? "#101a18" : BEZEL} stroke="#2f4a44" />
            {b.tipo === "vent" &&
              Array.from({ length: Math.floor((w - 18) / 11) }, (_, k) => <rect key={k} x={12 + k * 11} y="8" width="5" height={b.h - 16} rx="2" fill="#0a1311" />)}
            {b.tipo === "switch" && (
              <>
                {Array.from({ length: 12 }, (_, k) => (
                  <g key={k}>
                    <rect x={10 + k * 13} y="11" width="10" height="9" rx="1" fill="#050b0a" stroke="#35514b" />
                    <circle cx={15 + k * 13} cy="7" r="1.4" fill={k % 4 === 3 ? "#35514b" : theme.accent2} />
                  </g>
                ))}
                <circle cx={w - 16} cy={b.h / 2} r="3" fill={theme.accent2} className="motion-safe:animate-pulse" />
              </>
            )}
            {(b.tipo === "srv" || b.tipo === "disco") && (
              <>
                {Array.from({ length: b.tipo === "disco" ? 5 : 4 }, (_, k) => (
                  <g key={k}>
                    <rect x={10 + k * 21} y="8" width="17" height={b.h - 16} rx="2" fill="#101a18" stroke="#35514b" />
                    <circle
                      cx={15 + k * 21}
                      cy="14"
                      r="1.6"
                      fill={k % 3 === 1 ? theme.accent : theme.accent2}
                      className={k % 2 ? "motion-safe:animate-pulse" : undefined}
                      style={{ animationDelay: `${(i * 3 + k) * 170}ms` }}
                    />
                  </g>
                ))}
                <text x={w - 12} y={b.h / 2 + 4} textAnchor="end" fontSize="10" fontWeight="700" fill="#ffffffb0" fontFamily="ui-monospace, monospace">
                  {b.nome}
                </text>
                <circle cx={w - 12 - b.nome.length * 6.3 - 10} cy={b.h / 2} r="3" fill={theme.accent2} />
              </>
            )}
          </g>
        ))}

        {/* Cabos saindo pela lateral */}
        <g fill="none" strokeWidth="3" strokeLinecap="round">
          <path d={`M${x0 + w + 22} 80 C ${x0 + w + 60} 90, ${x0 + w + 50} 180, ${x0 + w + 90} 200`} stroke={theme.accent} />
          <path d={`M${x0 + w + 22} 90 C ${x0 + w + 70} 110, ${x0 + w + 40} 250, ${x0 + w + 90} 280`} stroke={theme.accent2} strokeOpacity="0.8" />
        </g>
      </svg>

      {/* Painel de serviços */}
      <ScenePanel title="srv-01 · Ubuntu Server 24.04" className="animate-float-y right-0 top-[27%] w-[52%]">
        <div className="space-y-1 px-3 pb-2 pt-2.5">
          {["nginx", "mysql", "ssh", "fail2ban"].map((s) => (
            <div key={s} className="flex items-center gap-2 text-[9.5px] sm:text-[11px]">
              <Led color={theme.accent2} />
              <span className="flex-1 font-mono text-white/85">{s}</span>
              <span className="font-bold" style={{ color: theme.accent2 }}>
                ativo
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-1.5 border-t border-white/10 px-3 py-2.5">
          {[
            ["CPU", 18],
            ["Memória", 42],
            ["Disco", 61],
          ].map(([k, v]) => (
            <div key={k} className="grid grid-cols-[44px_1fr_26px] items-center gap-2 text-[8.5px] sm:grid-cols-[52px_1fr_30px] sm:text-[10px]">
              <span className="text-white/50">{k}</span>
              <span className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <span className="block h-full rounded-full" style={{ width: `${v}%`, background: theme.accent }} />
              </span>
              <span className="text-right font-mono text-white/70">{v}%</span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 px-3 py-2 text-[9px] text-white/45 sm:text-[10px]">
          no ar há <span className="font-bold text-white/80">42 dias</span> · backup às 03:00 ✓
        </div>
      </ScenePanel>
    </>
  );
}
