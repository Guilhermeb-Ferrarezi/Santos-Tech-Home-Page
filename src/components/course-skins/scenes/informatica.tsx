import type { ReactNode } from "react";
import { Search } from "lucide-react";
import { ToolLogo } from "@/components/tool-logo";
import type { CourseTheme } from "@/lib/course-themes";

/**
 * Artes da pele "Área de trabalho" (categoria Informática). Tudo desenhado à
 * mão em SVG/JSX: pasta, arquivo, cursor, controles de janela e a cena do hero
 * (explorador de arquivos + navegador + bilhete de atalhos).
 */

// ── Peças reutilizáveis ───────────────────────────────────────────────────────

/** Pasta amarela; `open` mostra a pasta aberta com folhas saindo. */
export function FolderIcon({ open = false, className = "" }: { open?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 64 52" className={className} aria-hidden="true">
      <path d="M4 9a4 4 0 0 1 4-4h14.5l5.5 5.5H56a4 4 0 0 1 4 4V44a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" fill="#E0A21B" />
      {open ? (
        <>
          <rect x="11" y="10" width="36" height="28" rx="2" fill="#ffffff" transform="rotate(-6 29 24)" />
          <rect x="16" y="13" width="38" height="28" rx="2" fill="#F1F5F9" transform="rotate(4 35 27)" />
          <path d="M16 23h19M16 28h26M16 33h14" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" transform="rotate(4 35 27)" />
          <path d="M11 22.5h49a3 3 0 0 1 2.9 3.7l-4.4 18.6A4 4 0 0 1 54.6 48H8a4 4 0 0 1-3.9-4.8l3.6-17.6a4 4 0 0 1 3.3-3.1Z" fill="#FFC83D" />
        </>
      ) : (
        <>
          <rect x="9" y="12" width="46" height="10" rx="2" fill="#ffffff" fillOpacity="0.9" />
          <path d="M4 20a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" fill="#FFC83D" />
        </>
      )}
      <path d="M8 24h48" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round" transform={open ? "translate(3 3)" : undefined} />
    </svg>
  );
}

/** Folha de documento com canto dobrado e faixa colorida. */
export function FileIcon({ color = "#2563EB", className = "" }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden="true">
      <path d="M6 2h20l10 10v30a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" fill="#ffffff" stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M26 2v7a3 3 0 0 0 3 3h7" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="8" y="20" width="22" height="3" rx="1.5" fill={color} />
      <rect x="8" y="27" width="18" height="3" rx="1.5" fill="#CBD5E1" />
      <rect x="8" y="34" width="20" height="3" rx="1.5" fill="#CBD5E1" />
    </svg>
  );
}

/** Seta do mouse. */
export function CursorArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 22" className={className} aria-hidden="true">
      <path
        d="M1.5 1.5v16.2l4.3-4.1 3 6.6 2.8-1.2-3-6.5h6Z"
        fill="#ffffff"
        stroke="#0f172a"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Botão Iniciar genérico (grade de quatro pontos, sem marca). */
export function StartGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="2.5" fill="currentColor" />
      <rect x="13" y="3" width="8" height="8" rx="2.5" fill="currentColor" fillOpacity="0.75" />
      <rect x="3" y="13" width="8" height="8" rx="2.5" fill="currentColor" fillOpacity="0.75" />
      <rect x="13" y="13" width="8" height="8" rx="2.5" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

/** Minimizar, maximizar e fechar (decorativos). */
export function WinControls({ className = "" }: { className?: string }) {
  return (
    <span className={`flex shrink-0 items-center gap-3 text-slate-500 dark:text-white/50 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 10 10" className="h-2.5 w-2.5">
        <path d="M1 5.5h8" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <svg viewBox="0 0 10 10" className="h-2.5 w-2.5">
        <rect x="1" y="1" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <svg viewBox="0 0 10 10" className="h-2.5 w-2.5">
        <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </span>
  );
}

/** Barra de título clara/escura, no estilo de janela de sistema. */
export function WinTitleBar({ icon, title, className = "" }: { icon?: ReactNode; title: ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-white/[0.04] ${className}`}
    >
      {icon}
      <span className="min-w-0 flex-1 truncate text-slate-700 dark:text-white/80">{title}</span>
      <WinControls />
    </div>
  );
}

// ── Cena do hero ──────────────────────────────────────────────────────────────

const ITENS: { nome: string; tipo: "pasta" | "word" | "excel" | "ppt" }[] = [
  { nome: "Currículo", tipo: "pasta" },
  { nome: "Fotos", tipo: "pasta" },
  { nome: "Receitas", tipo: "pasta" },
  { nome: "Carta.docx", tipo: "word" },
  { nome: "Gastos.xlsx", tipo: "excel" },
  { nome: "Aula.pptx", tipo: "ppt" },
];

const LATERAL = ["Área de trabalho", "Documentos", "Downloads", "Imagens"];

export function DesktopScene({ theme }: { theme: CourseTheme }) {
  const win =
    "absolute overflow-hidden rounded-xl border border-slate-900/10 bg-white shadow-[0_30px_60px_-24px_rgba(15,40,80,0.55)] dark:border-white/10 dark:bg-[#111c30] dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]";

  return (
    <>
      {/* Explorador de arquivos */}
      <div className={`${win} left-0 top-[5%] w-[82%]`}>
        <WinTitleBar icon={<FolderIcon className="h-3.5 w-4 shrink-0" />} title="Documentos" className="text-[11px] font-semibold" />
        <div className="flex items-center gap-2 border-b border-slate-200 px-3 py-1.5 dark:border-white/10">
          <span className="min-w-0 flex-1 truncate rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600 dark:bg-white/[0.06] dark:text-white/60">
            Este computador › Documentos
          </span>
        </div>
        <div className="grid grid-cols-[30%_1fr]">
          <ul className="space-y-0.5 border-r border-slate-200 p-2 text-[9.5px] text-slate-600 sm:text-[10px] dark:border-white/10 dark:text-white/60">
            {LATERAL.map((l) => (
              <li
                key={l}
                className={`flex items-center gap-1.5 truncate rounded px-1.5 py-1 ${
                  l === "Documentos" ? "bg-slate-100 font-semibold text-slate-900 dark:bg-white/10 dark:text-white" : ""
                }`}
              >
                <FolderIcon className="h-2.5 w-3 shrink-0" />
                <span className="truncate">{l}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-1 p-2">
            {ITENS.map((it, i) => {
              const sel = i === 0;
              return (
                <div
                  key={it.nome}
                  className="relative flex flex-col items-center gap-0.5 rounded-md px-1 py-1 text-center"
                  style={sel ? { background: `${theme.accent}1f`, boxShadow: `inset 0 0 0 1px ${theme.accent}80` } : undefined}
                >
                  {it.tipo === "pasta" ? (
                    <FolderIcon className="h-7 w-9" />
                  ) : (
                    <span className="relative flex h-7 w-9 items-center justify-center">
                      <FileIcon className="h-7 w-6" color="#94A3B8" />
                      <ToolLogo name={it.tipo} className="absolute bottom-0 right-0.5 h-4 w-4" />
                    </span>
                  )}
                  <span className="max-w-full truncate text-[9px] leading-tight text-slate-700 sm:text-[10px] dark:text-white/75">{it.nome}</span>
                  {sel && <CursorArrow className="absolute -bottom-2 right-0 h-5 w-4 drop-shadow" />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-t border-slate-200 px-3 py-1 text-[9px] text-slate-500 dark:border-white/10 dark:text-white/45">
          6 itens · 1 selecionado
        </div>
      </div>

      {/* Navegador com pesquisa */}
      <div className={`${win} bottom-[3%] right-0 w-[60%]`}>
        <div className="flex items-center gap-2 bg-slate-100 px-2 pt-1.5 dark:bg-white/[0.04]">
          <span className="truncate rounded-t-md bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-700 dark:bg-[#111c30] dark:text-white/80">
            Pesquisa
          </span>
          <span className="flex-1" />
          <WinControls className="pb-1" />
        </div>
        <div className="p-2.5">
          <div className="flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1.5 text-[10px] text-slate-700 dark:border-white/15 dark:text-white/80">
            <Search className="h-3 w-3 shrink-0 text-slate-400" />
            <span className="truncate">como salvar currículo em PDF</span>
          </div>
          <div className="mt-2.5 space-y-2">
            <div>
              <p className="truncate text-[10px] font-semibold" style={{ color: theme.accent }}>
                Salvar documento como PDF: passo a passo
              </p>
              <span className="mt-1 block h-1.5 w-[92%] rounded-full bg-slate-200 dark:bg-white/10" />
              <span className="mt-1 block h-1.5 w-[70%] rounded-full bg-slate-200 dark:bg-white/10" />
            </div>
            <div>
              <span className="block h-2 w-[64%] rounded-full" style={{ background: `${theme.accent}66` }} />
              <span className="mt-1 block h-1.5 w-[84%] rounded-full bg-slate-200 dark:bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bilhete de atalhos colado na tela */}
      <div className="animate-float-y absolute bottom-[4%] left-[2%] w-[37%] -rotate-[5deg] rounded-sm bg-[#FFE27A] px-3 pb-3 pt-2.5 text-[#3b2f06] shadow-[0_14px_28px_-12px_rgba(0,0,0,0.45)]">
        <span className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 rotate-2 bg-white/60" />
        <p className="text-[11px] font-black">Atalhos</p>
        <ul className="mt-1.5 space-y-1 text-[9.5px] sm:text-[10px]">
          {[
            ["Ctrl + C", "copiar"],
            ["Ctrl + V", "colar"],
            ["Ctrl + Z", "desfazer"],
          ].map(([k, v]) => (
            <li key={k} className="flex items-center gap-1.5">
              <kbd className="rounded border border-[#3b2f06]/25 bg-white/60 px-1 font-sans font-bold">{k}</kbd>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/** Tela do monitor do `PersonAtDesk`: papel de parede, pastas, janela e barra de tarefas. */
export function MiniDesktop({ box, theme }: { box: { x: number; y: number; w: number; h: number }; theme: CourseTheme }) {
  const { x, y, w, h } = box;
  const bar = 9;
  return (
    <g>
      <defs>
        <linearGradient id="info-mini-wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dbeafe" />
          <stop offset="1" stopColor="#93c5fd" />
        </linearGradient>
      </defs>
      <rect x={x} y={y} width={w} height={h} fill="url(#info-mini-wall)" />
      <path d={`M${x} ${y + h * 0.7} Q${x + w * 0.4} ${y + h * 0.45} ${x + w} ${y + h * 0.62} V${y + h} H${x} Z`} fill="#ffffff" fillOpacity="0.35" />
      {/* Pastas */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${x + 6} ${y + 6 + i * 19})`}>
          <path d="M0 2a1.5 1.5 0 0 1 1.5-1.5h4.5l2 2H13a1.5 1.5 0 0 1 1.5 1.5v6.5A1.5 1.5 0 0 1 13 12H1.5A1.5 1.5 0 0 1 0 10.5Z" fill="#FFC83D" />
        </g>
      ))}
      {/* Janela */}
      <rect x={x + 30} y={y + 10} width={w * 0.62} height={h * 0.62} rx="3" fill="#ffffff" />
      <rect x={x + 30} y={y + 10} width={w * 0.62} height="7" rx="3" fill="#e2e8f0" />
      <rect x={x + 36} y={y + 23} width={w * 0.34} height="4" rx="2" fill={theme.accent} />
      <rect x={x + 36} y={y + 31} width={w * 0.48} height="3" rx="1.5" fill="#cbd5e1" />
      <rect x={x + 36} y={y + 38} width={w * 0.4} height="3" rx="1.5" fill="#cbd5e1" />
      <rect x={x + 36} y={y + 45} width={w * 0.44} height="3" rx="1.5" fill="#cbd5e1" />
      {/* Barra de tarefas */}
      <rect x={x} y={y + h - bar} width={w} height={bar} fill="#ffffff" fillOpacity="0.85" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={x + w / 2 - 22 + i * 10}
          y={y + h - bar + 2}
          width="5"
          height="5"
          rx="1.2"
          fill={i === 0 ? theme.accent : i === 2 ? "#FFC83D" : "#64748b"}
        />
      ))}
    </g>
  );
}
