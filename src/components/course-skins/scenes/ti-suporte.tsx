import type { CourseTheme } from "@/lib/course-themes";
import { Led, ScenePanel } from "@/components/course-skins/scenes/ti-parts";

// ── T.I · Suporte: fila de chamados do help desk ─────────────────────────────

const CHAMADOS = [
  { id: "#1042", titulo: "Impressora do financeiro parou", status: "ok" },
  { id: "#1043", titulo: "Senha do e-mail expirou", status: "ok" },
  { id: "#1044", titulo: "PC lento depois da atualização", status: "atendendo" },
  { id: "#1045", titulo: "Criar usuário no Active Directory", status: "novo" },
  { id: "#1046", titulo: "Sem acesso à pasta da rede", status: "novo" },
] as const;

export function SuporteScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <ScenePanel title="Help desk · fila de hoje" right="SLA 98%" className="left-0 top-[10%] w-[84%]">
        <div className="divide-y divide-white/5">
          {CHAMADOS.map((c) => (
            <div
              key={c.id}
              className={`flex items-center gap-2 px-3 py-[7px] sm:py-2 ${c.status === "atendendo" ? "bg-white/[0.04]" : ""}`}
            >
              <span className="w-9 shrink-0 font-mono text-[9px] text-white/35 sm:w-10 sm:text-[10px]">{c.id}</span>
              <span className={`min-w-0 flex-1 truncate text-[10px] sm:text-[11.5px] ${c.status === "ok" ? "text-white/45 line-through decoration-white/20" : "text-white/85"}`}>
                {c.titulo}
              </span>
              {c.status === "ok" && (
                <span className="shrink-0 rounded-full px-2 py-0.5 text-[8.5px] font-bold sm:text-[9.5px]" style={{ background: `${theme.accent2}22`, color: theme.accent2 }}>
                  ✓ Resolvido
                </span>
              )}
              {c.status === "atendendo" && (
                <span className="flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[8.5px] font-bold text-white sm:text-[9.5px]" style={{ background: theme.accent }}>
                  <Led color="#fff" blink /> Atendendo
                </span>
              )}
              {c.status === "novo" && (
                <span className="shrink-0 rounded-full border border-white/15 px-2 py-0.5 text-[8.5px] font-bold text-white/50 sm:text-[9.5px]">Novo</span>
              )}
            </div>
          ))}
        </div>
        <div className="hidden grid-cols-3 border-t border-white/10 text-center sm:grid">
          {[
            ["12", "resolvidos"],
            ["4 min", "1ª resposta"],
            ["4,9★", "satisfação"],
          ].map(([v, l]) => (
            <div key={l} className="border-r border-white/5 px-1 py-2 last:border-r-0">
              <p className="text-[12px] font-black text-white sm:text-[14px]">{v}</p>
              <p className="text-[8px] uppercase tracking-wider text-white/40 sm:text-[9px]">{l}</p>
            </div>
          ))}
        </div>
      </ScenePanel>

      {/* Card do técnico em atendimento */}
      <div className="animate-float-y absolute bottom-[3%] right-[1%] w-[64%] rounded-2xl border border-white/10 bg-[#0f1d1a] p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0 sm:h-11 sm:w-11">
            <circle cx="24" cy="24" r="24" fill={theme.accent} fillOpacity="0.2" />
            <circle cx="24" cy="21" r="9" fill="#f1c7a4" />
            <path d="M15 20 Q15 10 24 10 Q33 10 33 20 Q29 14 24 15 Q19 14 15 20 Z" fill="#2b2118" />
            <path d="M10 44 Q12 32 24 32 Q36 32 38 44 Z" fill={theme.accent} />
            {/* Headset */}
            <path d="M13.5 22 Q13.5 8 24 8 Q34.5 8 34.5 22" fill="none" stroke="#0b1412" strokeWidth="2.4" />
            <rect x="11" y="19" width="5" height="8" rx="2.2" fill={theme.accent2} />
            <rect x="32" y="19" width="5" height="8" rx="2.2" fill={theme.accent2} />
            <path d="M13.5 26 Q14 31 20 30.5" fill="none" stroke="#0b1412" strokeWidth="1.6" />
            <circle cx="20.5" cy="30.5" r="1.6" fill="#0b1412" />
          </svg>
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-white sm:text-[11px]">Você está atendendo</p>
            <p className="truncate font-mono text-[9px] text-white/50 sm:text-[10px]">#1044 · PC lento</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[8.5px] font-bold sm:text-[9.5px]">
          {["Diagnóstico", "Correção", "Fechar"].map((etapa, i) => (
            <div key={etapa} className="flex min-w-0 flex-1 flex-col gap-1">
              <span
                className="h-1 rounded-full"
                style={{ background: i === 0 ? theme.accent2 : i === 1 ? theme.accent : "rgba(255,255,255,0.12)" }}
              />
              <span className={i === 2 ? "text-white/35" : "text-white/75"}>
                {i === 0 ? "✓ " : ""}
                {etapa}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
