import { Eye, Layers, SlidersHorizontal, Type } from "lucide-react";
import type { CourseTheme } from "@/lib/course-themes";
import { EditorWindow, Handles } from "@/components/course-skins/scenes/design-kit";

// ── Canva: post de Instagram sendo montado a partir de um template ────────────

export function CanvaScene({ theme }: { theme: CourseTheme }) {
  const brand = [theme.accent, theme.accent2, "#1f1a24", "#fff4e8", "#7c5cff"];
  return (
    <>
      <EditorWindow title="post_lancamento · 1080 × 1080" tabs={["Design", "Elementos"]} className="left-0 top-[9%] w-[84%]">
        <div className="grid grid-cols-[22%_1fr]">
          {/* Trilho de templates */}
          <div className="space-y-2 border-r border-white/10 p-2">
            <p className="font-mono text-[8px] uppercase tracking-wider text-white/35">Templates</p>
            {[
              [theme.accent, theme.accent2],
              ["#7c5cff", "#fff4e8"],
              ["#1f1a24", theme.accent2],
            ].map(([a, b], i) => (
              <div
                key={i}
                className={`aspect-square rounded-md p-1.5 ${i === 0 ? "ring-2 ring-(--accent-2)" : "opacity-70"}`}
                style={{ background: b }}
              >
                <div className="h-1/2 w-2/3 rounded-sm" style={{ background: a }} />
                <div className="mt-1 h-1 w-3/4 rounded-full bg-black/30" />
                <div className="mt-0.5 h-1 w-1/2 rounded-full bg-black/20" />
              </div>
            ))}
          </div>

          {/* Área de trabalho */}
          <div className="relative bg-[#241f29] px-[7%] pb-[7%] pt-9">
            <div className="relative mx-auto aspect-square w-[86%] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)]">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <rect width="200" height="200" fill="#fff4e8" />
                <circle cx="158" cy="44" r="62" fill={theme.accent} />
                <circle cx="30" cy="186" r="40" fill={theme.accent2} fillOpacity="0.85" />
                {/* Xícara (produto) */}
                <g transform="translate(118 78)">
                  <ellipse cx="30" cy="70" rx="38" ry="7" fill="#000" fillOpacity="0.12" />
                  <path d="M4 18 h52 l-6 46 a8 8 0 0 1 -8 7 h-24 a8 8 0 0 1 -8 -7 z" fill="#1f1a24" />
                  <path d="M56 28 q16 0 14 14 q-2 12 -17 12" fill="none" stroke="#1f1a24" strokeWidth="6" />
                  <ellipse cx="30" cy="18" rx="26" ry="5" fill="#6b3f2a" />
                  <path d="M22 4 q-5 -6 0 -12 M34 6 q-5 -6 0 -12" fill="none" stroke="#1f1a24" strokeOpacity="0.35" strokeWidth="2.4" strokeLinecap="round" />
                  <rect x="16" y="34" width="28" height="14" rx="2" fill={theme.accent2} />
                </g>
                <text x="16" y="36" fontSize="9" fontWeight="700" fill="#1f1a24" letterSpacing="2" fontFamily="Poppins, sans-serif">
                  CAFÉ DA CASA
                </text>
                <text x="14" y="84" fontSize="31" fontWeight="900" fill="#1f1a24" fontFamily="Poppins, sans-serif">
                  Novo
                </text>
                <text x="14" y="114" fontSize="31" fontWeight="900" fill="#1f1a24" fontFamily="Poppins, sans-serif">
                  sabor
                </text>
                <rect x="14" y="128" width="62" height="18" rx="9" fill="#1f1a24" />
                <text x="45" y="140.5" fontSize="8" fontWeight="700" fill="#fff4e8" textAnchor="middle" fontFamily="Poppins, sans-serif">
                  Peça já →
                </text>
                {/* Guia magnética */}
                <line x1="14" x2="14" y1="0" y2="200" stroke={theme.accent} strokeWidth="0.8" strokeDasharray="3 2" />
              </svg>
              {/* Título selecionado */}
              <div className="absolute left-[6%] top-[27%] h-[31%] w-[42%] border-[1.5px] border-(--accent)">
                <Handles size={6} />
              </div>
              {/* Barra flutuante do texto */}
              <div className="absolute -top-7 left-0 flex items-center gap-1.5 rounded-md bg-white px-2 py-1 font-mono text-[8px] font-bold text-[#1f1a24] shadow-lg sm:text-[9px]">
                <span>Poppins</span>
                <span className="text-black/30">|</span>
                <span>64</span>
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: "#1f1a24" }} />
                <span className="text-(--accent)">Animar</span>
              </div>
            </div>
          </div>
        </div>
      </EditorWindow>

      {/* Brand Kit */}
      <div className="animate-float-y absolute bottom-[3%] left-[3%] w-[50%] rounded-xl border border-white/10 bg-[#141217]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <p className="text-[10px] font-bold text-white/80">Brand Kit</p>
        <div className="mt-2 flex gap-1.5">
          {brand.map((c) => (
            <span key={c} className="h-5 flex-1 rounded-md border border-white/10" style={{ background: c }} />
          ))}
        </div>
        <p className="mt-2 flex items-baseline gap-2 text-white/60">
          <span className="text-base font-black text-white">Aa</span>
          <span className="font-mono text-[9px]">Poppins · Black / Regular</span>
        </p>
      </div>

      {/* Exportação */}
      <div className="absolute bottom-[8%] right-[2%] flex items-center gap-2 rounded-full bg-(--accent) px-3 py-1.5 text-[10px] font-bold text-white shadow-[0_12px_30px_-10px_var(--accent)]">
        <span className="h-1.5 w-1.5 rounded-full bg-white" /> Baixar PNG · MP4
      </div>
    </>
  );
}

// ── Photoshop + Illustrator: composição com camadas e vetor com curvas ────────

const LAYER_ROWS = [
  { name: "VERÃO", icon: "text" as const },
  { name: "Curvas 1", icon: "adj" as const, active: true },
  { name: "Sol · máscara", icon: "mask" as const },
  { name: "Montanhas", icon: "img" as const },
  { name: "Céu", icon: "img" as const },
];

export function PhotoshopScene({ theme }: { theme: CourseTheme }) {
  return (
    <>
      <EditorWindow title="cartaz_verao.psd @ 66% (RGB/8)" className="left-0 top-[8%] w-[76%]">
        <div className="grid grid-cols-[9%_1fr]">
          {/* Barra de ferramentas */}
          <div className="flex flex-col items-center gap-1.5 border-r border-white/10 py-2">
            {Array.from({ length: 7 }, (_, i) => (
              <span key={i} className={`h-2.5 w-2.5 rounded-[3px] ${i === 2 ? "bg-(--accent)" : "bg-white/20"}`} />
            ))}
          </div>
          <div className="bg-[#2a2630] p-[5%]">
            <div className="relative">
              <svg viewBox="0 0 240 170" className="block w-full">
                <defs>
                  <linearGradient id="ps-sky" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#2b1b4a" />
                    <stop offset="0.55" stopColor={theme.accent} />
                    <stop offset="1" stopColor={theme.accent2} />
                  </linearGradient>
                </defs>
                <rect width="240" height="170" fill="url(#ps-sky)" />
                <circle cx="104" cy="96" r="28" fill="#fff3c4" />
                <path d="M0 128 L46 90 L80 116 L122 78 L170 122 L205 96 L240 118 V170 H0 Z" fill="#3a1f4d" />
                <path d="M0 146 L60 118 L110 140 L160 112 L240 144 V170 H0 Z" fill="#1c1030" />
                <text x="18" y="46" fontSize="30" fontWeight="900" fill="#fff" fontFamily="Poppins, sans-serif" letterSpacing="1">
                  VERÃO
                </text>
                {/* Seleção animada ("formigas marchando") */}
                <circle cx="104" cy="96" r="32" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="4 3">
                  <animate attributeName="stroke-dashoffset" from="0" to="14" dur="0.9s" repeatCount="indefinite" />
                </circle>
                <circle cx="104" cy="96" r="32" fill="none" stroke="#000" strokeWidth="1" strokeDasharray="4 3" strokeDashoffset="3.5" strokeOpacity="0.6">
                  <animate attributeName="stroke-dashoffset" from="3.5" to="17.5" dur="0.9s" repeatCount="indefinite" />
                </circle>
              </svg>
              <div className="absolute left-[6%] top-[9%] h-[22%] w-[48%] border border-[#39a0ff]">
                <Handles color="#39a0ff" size={5} />
              </div>
            </div>
          </div>
        </div>
      </EditorWindow>

      {/* Painel de camadas */}
      <div className="absolute right-0 top-[38%] w-[44%] overflow-hidden rounded-xl border border-white/10 bg-[#141217]/95 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.85)]">
        <p className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5 text-[10px] font-bold text-white/80">
          <Layers className="h-3 w-3 text-(--accent)" /> Camadas
        </p>
        {LAYER_ROWS.map((l) => (
          <div
            key={l.name}
            className={`flex items-center gap-2 px-2.5 py-1 text-[9px] sm:text-[10px] ${l.active ? "bg-(--accent)/25 text-white" : "text-white/60"}`}
          >
            <Eye className="h-2.5 w-2.5 shrink-0 opacity-60" />
            <span className="flex h-4 w-5 shrink-0 items-center justify-center rounded-[3px] bg-white/10">
              {l.icon === "text" && <Type className="h-2.5 w-2.5" />}
              {l.icon === "adj" && <SlidersHorizontal className="h-2.5 w-2.5" />}
              {l.icon === "mask" && <span className="h-2 w-2 rounded-full bg-white" />}
              {l.icon === "img" && <span className="h-2 w-3 rounded-[2px]" style={{ background: `linear-gradient(${theme.accent}, #2b1b4a)` }} />}
            </span>
            <span className="truncate">{l.name}</span>
          </div>
        ))}
      </div>

      {/* Vetor: caneta e curvas bézier (Illustrator) */}
      <div className="animate-float-y absolute bottom-0 left-[4%] w-[50%] rounded-xl border border-white/10 bg-[#141217]/95 p-3 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.8)]">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] font-bold text-white/80">logo_vetor.ai</p>
          <p className="font-mono text-[9px] text-white/45">Caneta · 3 âncoras</p>
        </div>
        <svg viewBox="0 0 200 84" className="mt-1 w-full">
          <path d="M14 66 C 40 6, 96 6, 104 44 S 170 84, 188 22" fill="none" stroke={theme.accent2} strokeWidth="3" strokeLinecap="round" />
          {/* Alças das âncoras */}
          <g stroke="#39a0ff" strokeWidth="1">
            <line x1="104" y1="44" x2="96" y2="6" />
            <line x1="104" y1="44" x2="112" y2="78" />
            <line x1="14" y1="66" x2="40" y2="6" />
          </g>
          <g fill="#141217" stroke="#39a0ff" strokeWidth="1.2">
            <circle cx="96" cy="6" r="3" />
            <circle cx="112" cy="78" r="3" />
            <circle cx="40" cy="6" r="3" />
          </g>
          <g fill="#fff" stroke="#39a0ff" strokeWidth="1.2">
            <rect x="10" y="62" width="8" height="8" />
            <rect x="100" y="40" width="8" height="8" fill="#39a0ff" />
            <rect x="184" y="18" width="8" height="8" />
          </g>
        </svg>
      </div>
    </>
  );
}
