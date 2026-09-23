import type { CSSProperties, ReactNode } from "react";

/**
 * Peças reutilizáveis das cenas de hero da categoria Marketing & Negócios:
 * cartões flutuantes de painel, celular, mini-gráficos e avatares genéricos.
 * Tudo desenhado aqui — nada imita a interface oficial de uma plataforma.
 */

/** Cartão escuro flutuante (métrica, público, notificação…). */
export function Float({
  className = "",
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute rounded-xl border border-white/10 bg-[#181114]/95 p-2.5 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.85)] backdrop-blur sm:p-3 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[8.5px] font-bold uppercase tracking-wider text-white/45 sm:text-[9.5px] ${className}`}>{children}</p>;
}

/** Linha "esqueleto" de texto (conteúdo ilustrativo sem palavras). */
export function Bar({ w, className = "", color }: { w: string; className?: string; color?: string }) {
  return (
    <span
      className={`block h-[5px] rounded-full ${color ? "" : "bg-white/15"} ${className}`}
      style={{ width: w, ...(color ? { background: color } : {}) }}
    />
  );
}

/** Mini-gráfico de linha, com área opcional. */
export function Spark({
  values,
  color,
  className = "",
  area = true,
  invert = false,
}: {
  values: number[];
  color: string;
  className?: string;
  area?: boolean;
  /** Eixo invertido (ex.: posição no Google, onde menor é melhor). */
  invert?: boolean;
}) {
  const w = 100;
  const h = 34;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const pts = values.map((v, i) => {
    const t = (v - min) / (max - min || 1);
    return [(i / (values.length - 1)) * w, invert ? 3 + t * (h - 6) : h - 3 - t * (h - 6)];
  });
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const last = pts[pts.length - 1];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={`overflow-visible ${className}`} aria-hidden="true">
      {area && <path d={`${d} L${w} ${h} L0 ${h} Z`} fill={color} fillOpacity="0.16" />}
      <path d={d} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={last[0]} cy={last[1]} r="2.6" fill={color} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Moldura de celular genérica. */
export function Phone({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`absolute rounded-[24px] border border-white/15 bg-[#0a0a0c] p-[5px] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.9)] ${className}`}>
      <div className="relative h-full overflow-hidden rounded-[19px] bg-[#121214]">
        <span className="absolute left-1/2 top-1.5 z-20 h-[5px] w-12 -translate-x-1/2 rounded-full bg-black/80" />
        {children}
      </div>
    </div>
  );
}

/** Avatar genérico: cabeça e ombros sobre um círculo colorido. */
export function Avatar({ color, className = "h-6 w-6" }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill={color} />
      <circle cx="12" cy="10" r="4" fill="#fff" fillOpacity="0.92" />
      <path d="M4.5 20.5 Q12 12.5 19.5 20.5 A12 12 0 0 1 4.5 20.5 Z" fill="#fff" fillOpacity="0.92" />
    </svg>
  );
}

/** Selo "Patrocinado" usado nos mockups de anúncio. */
export function SponsoredTag({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-sm bg-white/10 px-1 py-px text-[7.5px] font-bold uppercase tracking-wider text-white/65 sm:text-[8.5px] ${className}`}>
      Patrocinado
    </span>
  );
}
