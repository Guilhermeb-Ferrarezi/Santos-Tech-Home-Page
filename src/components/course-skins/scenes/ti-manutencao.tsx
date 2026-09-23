import type { CourseTheme } from "@/lib/course-themes";
import { ScenePanel } from "@/components/course-skins/scenes/ti-parts";

// ── T.I · Manutenção: placa-mãe vista de cima, montagem em andamento ─────────

const PCB = "#0f2f29";
const SLOT = "#07130f";
const LINE = "#2a5a50";

function RamStick({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g>
      <rect x={x} y={y} width="13" height="150" rx="2" fill={color} stroke="#000" strokeOpacity="0.35" />
      {[0, 1, 2, 3, 4, 5].map((k) => (
        <rect key={k} x={x + 2.5} y={y + 10 + k * 22} width="8" height="15" rx="1" fill="#0b1210" />
      ))}
      <rect x={x + 3} y={y + 146} width="7" height="4" fill="#d4a93a" />
    </g>
  );
}

export function ManutencaoScene({ theme }: { theme: CourseTheme }) {
  const fan = { cx: 196, cy: 150 };
  return (
    <>
      <svg viewBox="0 0 520 440" className="absolute inset-0 h-full w-full">
        {/* Sombra + placa */}
        <rect x="72" y="52" width="330" height="352" rx="16" fill="#000" fillOpacity="0.35" transform="translate(8 12)" />
        <rect x="72" y="52" width="330" height="352" rx="16" fill={PCB} stroke={LINE} />

        {/* Trilhas */}
        <g fill="none" stroke={theme.accent} strokeOpacity="0.22" strokeWidth="1.5">
          <path d="M150 230 H250 L270 250 H340" />
          <path d="M150 238 H246 L266 258 H372" />
          <path d="M260 90 V70 H330" />
          <path d="M268 96 V78 H360" />
          <path d="M120 300 V350 H220" />
          <path d="M112 300 V358 H260 L280 378 H370" />
          <path d="M250 196 H300" />
          <path d="M250 204 H300" />
        </g>

        {/* Painel traseiro de conexões (I/O) */}
        <rect x="72" y="72" width="24" height="136" rx="3" fill="#3a4745" />
        {[82, 102, 122, 142, 162, 182].map((y) => (
          <rect key={y} x="78" y={y} width="12" height="12" rx="1.5" fill="#11201d" />
        ))}

        {/* Soquete + cooler do processador */}
        <rect x="136" y="90" width="120" height="120" rx="8" fill="#15352f" stroke={LINE} />
        <circle cx={fan.cx} cy={fan.cy} r="52" fill="#0a1714" stroke="#3b5f58" strokeWidth="2" />
        <circle cx={fan.cx} cy={fan.cy} r="44" fill="#0e1f1b" />
        <g
          className="motion-safe:animate-spin"
          style={{ transformOrigin: `${fan.cx}px ${fan.cy}px`, transformBox: "view-box", animationDuration: "2.4s" }}
        >
          {[0, 51, 102, 153, 204, 255, 306].map((a) => (
            <path
              key={a}
              d={`M${fan.cx} ${fan.cy} C ${fan.cx + 8} ${fan.cy - 18}, ${fan.cx + 30} ${fan.cy - 30}, ${fan.cx + 38} ${fan.cy - 14} Z`}
              fill="#35514b"
              transform={`rotate(${a} ${fan.cx} ${fan.cy})`}
            />
          ))}
        </g>
        <circle cx={fan.cx} cy={fan.cy} r="12" fill={theme.accent} />
        <circle cx={fan.cx} cy={fan.cy} r="4" fill="#0a1714" />

        {/* Capacitores */}
        {[
          [128, 226],
          [146, 226],
          [264, 108],
          [264, 128],
          [264, 180],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="6" fill="#2c3d3a" stroke="#6b8580" />
            <path d={`M${x - 3} ${y} H${x + 3}`} stroke="#6b8580" />
          </g>
        ))}

        {/* Slots de memória: 2 ocupados, 1 recebendo o pente */}
        {[292, 312, 332, 352].map((x) => (
          <rect key={x} x={x} y="82" width="13" height="150" rx="2" fill={SLOT} stroke={LINE} />
        ))}
        <RamStick x={292} y={82} color="#1d6b5c" />
        <RamStick x={332} y={82} color="#1d6b5c" />
        <g className="animate-float-y">
          <RamStick x={312} y={22} color={theme.accent} />
        </g>
        <path d="M318.5 180 v14 m-5 -5 l5 5 l5 -5" stroke={theme.accent2} strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Conector de energia 24 pinos */}
        <rect x="378" y="96" width="14" height="96" rx="2" fill="#e8ecea" />
        {Array.from({ length: 12 }, (_, k) => (
          <g key={k} fill="#9aa5a2">
            <rect x="380.5" y={100 + k * 7.5} width="3.5" height="5" />
            <rect x="386" y={100 + k * 7.5} width="3.5" height="5" />
          </g>
        ))}

        {/* SSD M.2 */}
        <rect x="120" y="250" width="120" height="20" rx="3" fill="#10251f" stroke={LINE} />
        <rect x="126" y="254" width="26" height="12" rx="1" fill="#0b1210" />
        <rect x="158" y="254" width="26" height="12" rx="1" fill="#0b1210" />
        <rect x="190" y="254" width="16" height="12" rx="1" fill="#0b1210" />
        <text x="226" y="263.5" fontSize="7" fill={theme.accent2} textAnchor="middle" fontFamily="monospace" fontWeight="bold">
          M.2
        </text>

        {/* Slots PCIe + chipset */}
        <rect x="104" y="300" width="190" height="10" rx="2" fill={SLOT} stroke={LINE} />
        <rect x="104" y="340" width="130" height="10" rx="2" fill={SLOT} stroke={LINE} />
        <rect x="312" y="296" width="46" height="46" rx="5" fill="#1a3a34" stroke={LINE} />
        {[0, 1, 2, 3, 4].map((k) => (
          <rect key={k} x={317 + k * 8} y="301" width="4" height="36" rx="1" fill="#2e534c" />
        ))}

        {/* Bateria da BIOS + SATA */}
        <circle cx="266" cy="360" r="14" fill="#cfd6d4" stroke="#8a9794" />
        <circle cx="266" cy="360" r="9" fill="none" stroke="#8a9794" />
        {[0, 1, 2].map((k) => (
          <rect key={k} x="372" y={300 + k * 18} width="18" height="12" rx="2" fill="#1a1a1a" stroke="#4b5a57" />
        ))}

        {/* Etiquetas didáticas */}
        <g fontFamily="ui-sans-serif, system-ui" fontSize="10" fontWeight="700">
          <path d="M150 128 L112 38" stroke="#ffffff55" />
          <rect x="70" y="22" width="84" height="20" rx="10" fill="#fff" />
          <text x="112" y="36" textAnchor="middle" fill="#0b1412">
            Processador
          </text>
          <path d="M404 150 L452 150" stroke="#ffffff55" />
          <rect x="424" y="140" width="72" height="20" rx="10" fill="#fff" />
          <text x="460" y="154" textAnchor="middle" fill="#0b1412">
            Energia
          </text>
          <path d="M296 58 L312 58" stroke="#ffffff55" />
          <rect x="226" y="48" width="70" height="20" rx="10" fill={theme.accent2} />
          <text x="261" y="62" textAnchor="middle" fill="#0b1412">
            Memória
          </text>
        </g>
      </svg>

      {/* Card de diagnóstico (POST) */}
      <ScenePanel title="Diagnóstico · POST" right="BIOS/UEFI" className="animate-float-y bottom-[2%] right-[1%] w-[58%]">
        <ul className="space-y-1 px-3 py-2.5 text-[9.5px] text-white/80 sm:text-[11px]">
          {["Processador detectado · 42 °C", "Memória · 16 GB DDR4", "SSD NVMe · 512 GB"].map((l) => (
            <li key={l} className="flex items-center gap-1.5">
              <span style={{ color: theme.accent2 }}>✓</span> {l}
            </li>
          ))}
        </ul>
        <div className="border-t border-white/10 px-3 py-2.5">
          <div className="flex items-baseline justify-between text-[9px] sm:text-[10px]">
            <span className="font-bold text-white/80">Instalando Windows 11</span>
            <span className="font-mono text-white/50">62%</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[62%] rounded-full" style={{ background: theme.accent }} />
          </div>
        </div>
      </ScenePanel>
    </>
  );
}
