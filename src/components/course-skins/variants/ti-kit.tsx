import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import type { CourseData, Tier } from "@/components/particular-course-page";
import type { CourseTheme, CourseThemeKey } from "@/lib/course-themes";
import { TIER_GUIDE } from "@/components/course-skins/shared";

/**
 * Peças comuns da pele T.I (sala de servidores) usadas pelo hero e pelos
 * blocos por curso (variants/ti-<variante>.tsx): fita de rotulador, LEDs,
 * trilho de rack, porta RJ45 e o seletor de nível.
 */

/** Props que cada bloco por curso recebe da pele. */
export type TiBlockProps = {
  course: CourseData;
  tier: Tier;
  tema: CourseThemeKey;
  theme: CourseTheme;
  multiTier: boolean;
  selectedTier: number;
  onSelectTier: (i: number) => void;
  metricas: { label: string; value: string }[];
};

/** Um curso = dois blocos de identidade: "Para quem é" e "Conteúdo programático". */
export type TiBlocos = {
  Publico: (p: TiBlockProps) => ReactNode;
  Conteudo: (p: TiBlockProps) => ReactNode;
};

/** Texto de destaque legível no claro (teal-700) e no escuro (teal-400). */
export const ACC_TEXT = "text-[#0f766e] dark:text-[#2dd4bf]";
export const INK = "#0b1412";
export const CABOS = ["#0D9488", "#A3E635", "#38BDF8", "#F59E0B", "#E2E8F0"];

/** Recorte de fita de rotulador (pontas chanfradas). */
const TAPE_CLIP: CSSProperties = {
  clipPath: "polygon(7px 0, calc(100% - 7px) 0, 100% 50%, calc(100% - 7px) 100%, 7px 100%, 0 50%)",
};

export function Tape({ n, children, lime = false }: { n?: string; children: ReactNode; lime?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] ${
        lime ? "bg-(--accent-2) text-[#0b1412]" : "bg-[#0b1412] text-white dark:bg-(--accent-2) dark:text-[#0b1412]"
      }`}
      style={TAPE_CLIP}
    >
      {n && <span className="opacity-60">{n}</span>}
      {children}
    </span>
  );
}

export function SectionHead({
  n,
  label,
  title,
  children,
  className = "",
}: {
  n: string;
  label: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <Tape n={n}>{label}</Tape>
      <h2 className="mt-5 text-3xl font-black tracking-tight text-[#0b1412] dark:text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 max-w-xl text-[15px] text-[#5f6f6b] dark:text-white/55">{children}</p>}
    </Reveal>
  );
}

export function StatusLed({ color = "var(--accent-2)", blink = false, className = "" }: { color?: string; blink?: boolean; className?: string }) {
  return (
    <span
      className={`inline-block h-2 w-2 shrink-0 rounded-full ${blink ? "motion-safe:animate-pulse" : ""} ${className}`}
      style={{ background: color, boxShadow: `0 0 8px ${color}` }}
    />
  );
}

/** Trilho vertical de rack com furação e numeração de U. */
export function RackRail({ count, className = "" }: { count: number; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-between py-3 ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-[1px] bg-white/15" />
          <span className="font-mono text-[8px] text-white/25">{String(i + 1).padStart(2, "0")}</span>
          <span className="h-1.5 w-1.5 rounded-[1px] bg-white/15" />
        </div>
      ))}
    </div>
  );
}

/** Porta RJ45 estilizada. */
export function Port({ color, className = "h-2.5 w-3" }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 12 10" className={`shrink-0 ${className}`} aria-hidden="true">
      <path d="M1 1 H11 V7 H8 V9 H4 V7 H1 Z" fill="none" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

/** Seletor de nível (só aparece em curso com mais de um nível). */
export function TierSwitch({ course, tier, multiTier, selectedTier, onSelectTier, className = "mt-8" }: TiBlockProps & { className?: string }) {
  if (!multiTier) return null;
  return (
    <Reveal delay={80} className={className}>
      <div className="flex flex-wrap gap-2">
        {course.tiers.map((t, i) => {
          const on = selectedTier === i;
          return (
            <button
              key={t.levelName}
              type="button"
              onClick={() => onSelectTier(i)}
              aria-pressed={on}
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-black transition ${
                on
                  ? "border-[#0b1412] bg-[#0b1412] text-white dark:border-white dark:bg-white dark:text-[#0b1412]"
                  : "border-[#dbe4e1] bg-white text-[#5f6f6b] hover:border-[#b9c7c3] dark:border-white/15 dark:bg-transparent dark:text-white/60"
              }`}
            >
              <StatusLed color={on ? "var(--accent-2)" : "#9aa8a4"} className={on ? "" : "!shadow-none"} />
              {t.levelName}
            </button>
          );
        })}
      </div>
      {TIER_GUIDE[tier.levelName] && (
        <p className="mt-3 text-sm text-[#5f6f6b] dark:text-white/55">
          <span className="font-bold text-[#0b1412] dark:text-white">Pra quem é este nível:</span> {TIER_GUIDE[tier.levelName]}
        </p>
      )}
    </Reveal>
  );
}

/** Dois dígitos: 1 → "01". */
export const nn = (i: number) => String(i).padStart(2, "0");
