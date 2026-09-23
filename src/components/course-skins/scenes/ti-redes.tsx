import type { CourseTheme } from "@/lib/course-themes";
import { ScenePanel } from "@/components/course-skins/scenes/ti-parts";

// ── T.I · Redes: topologia internet → roteador → switch → VLANs ──────────────

const SKY = "#38BDF8";
const NODE = "#10201c";
const EDGE = "#2c4a44";

type Ponto = { x: number; label: string; vlan: string; cor: string; tipo: "pc" | "note" | "ap" | "srv" };

export function RedesScene({ theme }: { theme: CourseTheme }) {
  const pontos: Ponto[] = [
    { x: 78, label: "Financeiro", vlan: "VLAN 10", cor: theme.accent, tipo: "pc" },
    { x: 196, label: "Notebook", vlan: "VLAN 10", cor: theme.accent, tipo: "note" },
    { x: 318, label: "Wi-Fi", vlan: "VLAN 30", cor: SKY, tipo: "ap" },
    { x: 440, label: "Servidor", vlan: "VLAN 20", cor: theme.accent2, tipo: "srv" },
  ];
  const sw = { x: 260, y: 240 };
  const yPonto = 338;

  return (
    <>
      <svg viewBox="0 0 520 440" className="absolute inset-0 h-full w-full">
        {/* Enlaces */}
        <path id="ti-link-wan" d="M260 92 V148" stroke="#ffffff40" strokeWidth="2" strokeDasharray="5 5" />
        <path id="ti-link-core" d="M260 186 V224" stroke={theme.accent} strokeWidth="3" />
        {pontos.map((p, i) => (
          <path
            key={p.x}
            id={`ti-link-${i}`}
            d={`M${sw.x - 90 + i * 60} ${sw.y + 18} C ${sw.x - 90 + i * 60} ${sw.y + 60}, ${p.x} ${yPonto - 60}, ${p.x} ${yPonto - 22}`}
            fill="none"
            stroke={p.cor}
            strokeWidth="2.5"
            strokeOpacity="0.8"
          />
        ))}

        {/* Pacotes circulando */}
        {pontos.map((p, i) => (
          <circle key={p.x} r="4" fill="#fff" stroke={p.cor} strokeWidth="2">
            <animateMotion dur={`${2.2 + i * 0.35}s`} repeatCount="indefinite" keyPoints={i % 2 ? "1;0" : "0;1"} keyTimes="0;1" calcMode="linear">
              <mpath href={`#ti-link-${i}`} />
            </animateMotion>
          </circle>
        ))}
        <circle r="4" fill={theme.accent2}>
          <animateMotion dur="1.6s" repeatCount="indefinite">
            <mpath href="#ti-link-core" />
          </animateMotion>
        </circle>

        {/* Internet */}
        <g transform="translate(260 64)">
          <circle cx="-22" cy="6" r="18" fill="#26443d" />
          <circle cx="4" cy="-6" r="24" fill="#26443d" />
          <circle cx="26" cy="8" r="16" fill="#26443d" />
          <rect x="-40" y="4" width="80" height="20" rx="10" fill="#26443d" />
          <text y="14" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffffd0" fontFamily="ui-sans-serif, system-ui">
            Internet
          </text>
        </g>

        {/* Roteador */}
        <g transform="translate(260 167)">
          <path d="M-30 -18 l-8 -18 M30 -18 l8 -18" stroke="#6b8580" strokeWidth="3" strokeLinecap="round" />
          <rect x="-58" y="-19" width="116" height="38" rx="10" fill={NODE} stroke={theme.accent} strokeWidth="2" />
          <circle cx="-40" cy="0" r="9" fill={theme.accent} />
          <path d="M-45 -2 h10 l-3 -3 M-35 2 h-10 l3 3" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <text x="-24" y="-2" fontSize="11" fontWeight="700" fill="#fff" fontFamily="ui-sans-serif, system-ui">
            Roteador
          </text>
          <text x="-24" y="11" fontSize="9" fill="#ffffff80" fontFamily="ui-monospace, monospace">
            10.0.0.1
          </text>
        </g>

        {/* Switch */}
        <g transform={`translate(${sw.x} ${sw.y})`}>
          <rect x="-120" y="-16" width="240" height="34" rx="6" fill={NODE} stroke={EDGE} strokeWidth="2" />
          {Array.from({ length: 12 }, (_, k) => {
            const x = -108 + k * 18;
            const ativa = [0, 3, 6, 9, 1, 4, 10].includes(k);
            return (
              <g key={k}>
                <rect x={x} y="-6" width="13" height="11" rx="1.5" fill="#050b0a" stroke="#35514b" />
                <circle
                  cx={x + 6.5}
                  cy="-10"
                  r="1.8"
                  fill={ativa ? theme.accent2 : "#35514b"}
                  className={ativa && k % 3 === 0 ? "motion-safe:animate-pulse" : undefined}
                />
              </g>
            );
          })}
          <text x="-120" y="-24" fontSize="9" fontWeight="700" letterSpacing="1.5" fill="#ffffff70" fontFamily="ui-sans-serif, system-ui">
            SWITCH CORE
          </text>
        </g>

        {/* Pontos finais */}
        {pontos.map((p) => (
          <g key={p.x} transform={`translate(${p.x} ${yPonto})`}>
            <circle r="22" fill={NODE} stroke={p.cor} strokeWidth="2" />
            {p.tipo === "pc" && (
              <g fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round">
                <rect x="-10" y="-9" width="20" height="13" rx="1.5" />
                <path d="M-4 8 h8 M0 4 v4" />
              </g>
            )}
            {p.tipo === "note" && (
              <g fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round">
                <rect x="-8" y="-9" width="16" height="11" rx="1.5" />
                <path d="M-12 5 h24 l-2 3 h-20 z" />
              </g>
            )}
            {p.tipo === "ap" && (
              <g fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="0" cy="6" r="2" fill="#fff" />
                <path d="M-6 0 a8.5 8.5 0 0 1 12 0 M-10.5 -4.5 a15 15 0 0 1 21 0" />
              </g>
            )}
            {p.tipo === "srv" && (
              <g fill="none" stroke="#fff" strokeWidth="1.8">
                <rect x="-9" y="-10" width="18" height="8" rx="1.5" />
                <rect x="-9" y="1" width="18" height="8" rx="1.5" />
                <circle cx="5" cy="-6" r="0.8" fill="#fff" />
                <circle cx="5" cy="5" r="0.8" fill="#fff" />
              </g>
            )}
            <text y="40" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#fff" fontFamily="ui-sans-serif, system-ui">
              {p.label}
            </text>
            <rect x="-26" y="47" width="52" height="15" rx="7.5" fill={p.cor} fillOpacity="0.18" />
            <text y="58" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={p.cor} fontFamily="ui-monospace, monospace">
              {p.vlan}
            </text>
          </g>
        ))}
      </svg>

      {/* Monitoramento */}
      <ScenePanel title="Rede ao vivo" className="animate-float-y left-0 top-[4%] w-[36%]">
        <div className="space-y-1.5 px-3 py-2.5">
          {[
            ["Latência", "1 ms"],
            ["Perda", "0%"],
            ["Portas", "24/24"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between text-[9px] sm:text-[10.5px]">
              <span className="text-white/50">{k}</span>
              <span className="font-bold text-white">{v}</span>
            </div>
          ))}
          <svg viewBox="0 0 100 24" className="mt-1 h-5 w-full" preserveAspectRatio="none">
            <polyline
              points="0,18 10,16 20,17 30,12 40,14 50,9 60,11 70,6 80,8 90,5 100,7"
              fill="none"
              stroke={theme.accent2}
              strokeWidth="1.6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </ScenePanel>
    </>
  );
}
