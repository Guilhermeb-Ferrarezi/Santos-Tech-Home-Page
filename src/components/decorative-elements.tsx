/**
 * Decorative SVG elements — composições temáticas pros heros.
 *
 * Vocabulário visual da Santos Tech: programação, tech, gaming, robótica, IA.
 * Cada `variant` é uma composição diferente — para diversificar entre páginas
 * sem perder identidade.
 *
 * Uso:
 *   <DecorativeElements variant="code" color="#187ABF" />
 *
 * Container pai precisa de `relative` + `overflow-hidden`.
 */

import type { CSSProperties, ReactNode } from "react";

type Variant =
  | "default"   // mix balanceado — pra home
  | "code"      // brackets, terminal, binário — devs
  | "games"     // joystick, pixel-arrow, hexágono — gaming
  | "robot"     // chip, cog, antena — robótica
  | "ai"        // sparkles, hex, dots — IA
  | "playful";  // estrelas, cubos, formas grandes — JR / crianças

type Props = {
  className?: string;
  /** Cor dos elementos (currentColor por default). */
  color?: string;
  /** Esconder em mobile? Default true (decoração é desktop-first). */
  hideOnMobile?: boolean;
  /** Composição temática. Default: "default". */
  variant?: Variant;
};

export function DecorativeElements({
  className,
  color,
  hideOnMobile = true,
  variant = "default",
}: Props) {
  const visibility = hideOnMobile ? "hidden lg:block" : "block";
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${visibility} ${className ?? ""}`}
      style={color ? { color } : undefined}
      aria-hidden
    >
      {COMPOSITIONS[variant]}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// COMPOSITIONS — cada variant é uma cena diferente
// ──────────────────────────────────────────────────────────────────────────

const COMPOSITIONS: Record<Variant, ReactNode> = {
  default: (
    <>
      <Cube style={{ top: "10%", left: "5%" }} size={42} className="opacity-15 animate-float-slow" />
      <CodeBracket style={{ top: "16%", right: "7%" }} size={48} className="opacity-25 animate-float-slower" />
      <Hexagon style={{ top: "62%", left: "4%" }} size={56} className="opacity-15 animate-float-slower [animation-delay:1.5s]" />
      <Sparkle style={{ top: "70%", right: "11%" }} size={28} className="opacity-30 animate-float-slow [animation-delay:1s]" />
      <PixelDots style={{ top: "8%", left: "42%" }} className="opacity-25 animate-float-slower [animation-delay:3s]" />
      <Binary style={{ bottom: "14%", left: "38%" }} className="opacity-20 animate-float-slow [animation-delay:2.5s]" />
      <Chip style={{ bottom: "26%", right: "5%" }} size={44} className="opacity-15 animate-float-slower [animation-delay:2s]" />
    </>
  ),

  code: (
    <>
      <CodeBracket style={{ top: "10%", left: "6%" }} size={56} className="opacity-25 animate-float-slow" />
      <Terminal style={{ top: "18%", right: "6%" }} className="opacity-25 animate-float-slower" />
      <Binary style={{ top: "60%", left: "5%" }} className="opacity-25 animate-float-slower [animation-delay:1.5s]" />
      <PixelDots style={{ top: "8%", left: "42%" }} className="opacity-25 animate-float-slow [animation-delay:3s]" />
      <Cube style={{ top: "72%", right: "10%" }} size={36} className="opacity-15 animate-float-slow [animation-delay:1s]" />
      <Diamond style={{ bottom: "12%", left: "40%" }} size={24} className="opacity-25 animate-float-slower [animation-delay:2.5s]" />
      <CodeBracket style={{ bottom: "20%", right: "7%" }} size={36} className="opacity-20 animate-float-slow [animation-delay:2s]" flip />
    </>
  ),

  games: (
    <>
      <Joystick style={{ top: "11%", left: "5%" }} size={56} className="opacity-20 animate-float-slow" />
      <PixelArrow style={{ top: "16%", right: "8%" }} className="opacity-30 animate-float-slower" />
      <Hexagon style={{ top: "60%", left: "4%" }} size={56} className="opacity-15 animate-float-slower [animation-delay:1.5s]" />
      <PixelDots style={{ top: "9%", left: "44%" }} className="opacity-25 animate-float-slower [animation-delay:3s]" />
      <PlayTriangle style={{ top: "70%", right: "11%" }} size={34} className="opacity-20 animate-float-slow [animation-delay:1s]" />
      <Diamond style={{ bottom: "14%", left: "38%" }} size={28} className="opacity-30 animate-float-slow [animation-delay:2.5s]" />
      <PixelHeart style={{ bottom: "22%", right: "6%" }} size={32} className="opacity-25 animate-float-slower [animation-delay:2s]" />
    </>
  ),

  robot: (
    <>
      <Chip style={{ top: "10%", left: "5%" }} size={56} className="opacity-20 animate-float-slow" />
      <Antenna style={{ top: "16%", right: "8%" }} size={50} className="opacity-25 animate-float-slower" />
      <Cog style={{ top: "60%", left: "4%" }} size={56} className="opacity-15 animate-float-slower [animation-delay:1.5s]" />
      <Binary style={{ top: "8%", left: "42%" }} className="opacity-25 animate-float-slower [animation-delay:3s]" />
      <Cube style={{ top: "70%", right: "10%" }} size={38} className="opacity-15 animate-float-slow [animation-delay:1s]" />
      <Sparkle style={{ bottom: "14%", left: "40%" }} size={22} className="opacity-30 animate-float-slow [animation-delay:2.5s]" />
      <CodeBracket style={{ bottom: "22%", right: "6%" }} size={38} className="opacity-20 animate-float-slower [animation-delay:2s]" />
    </>
  ),

  ai: (
    <>
      <Sparkle style={{ top: "11%", left: "5%" }} size={42} className="opacity-30 animate-float-slow" />
      <Chip style={{ top: "16%", right: "8%" }} size={50} className="opacity-20 animate-float-slower" />
      <Hexagon style={{ top: "58%", left: "4%" }} size={52} className="opacity-18 animate-float-slower [animation-delay:1.5s]" />
      <PixelDots style={{ top: "8%", left: "44%" }} className="opacity-25 animate-float-slower [animation-delay:3s]" />
      <Diamond style={{ top: "72%", right: "12%" }} size={32} className="opacity-25 animate-float-slow [animation-delay:1s]" />
      <Sparkle style={{ bottom: "14%", left: "40%" }} size={28} className="opacity-30 animate-float-slow [animation-delay:2.5s]" />
      <Binary style={{ bottom: "22%", right: "6%" }} className="opacity-20 animate-float-slower [animation-delay:2s]" />
    </>
  ),

  playful: (
    <>
      <Star style={{ top: "12%", left: "5%" }} size={44} className="opacity-30 animate-float-slow" />
      <PixelHeart style={{ top: "18%", right: "8%" }} size={40} className="opacity-30 animate-float-slower" />
      <Cube style={{ top: "60%", left: "4%" }} size={50} className="opacity-20 animate-float-slower [animation-delay:1.5s]" />
      <Sparkle style={{ top: "8%", left: "44%" }} size={32} className="opacity-30 animate-float-slower [animation-delay:3s]" />
      <PlayTriangle style={{ top: "70%", right: "11%" }} size={36} className="opacity-25 animate-float-slow [animation-delay:1s]" />
      <Diamond style={{ bottom: "14%", left: "40%" }} size={28} className="opacity-30 animate-float-slow [animation-delay:2.5s]" />
      <Star style={{ bottom: "22%", right: "6%" }} size={30} className="opacity-25 animate-float-slower [animation-delay:2s]" />
    </>
  ),
};

// ──────────────────────────────────────────────────────────────────────────
// SHAPES (privates) — todos usam currentColor
// ──────────────────────────────────────────────────────────────────────────

type ShapeProps = { style?: CSSProperties; className?: string; size?: number };

function Cube({ style, className, size = 40 }: ShapeProps) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4 L36 12 L36 28 L20 36 L4 28 L4 12 Z M20 4 L20 20 M4 12 L20 20 M36 12 L20 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Sparkle({ style, className, size = 32 }: ShapeProps) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 2 L19 13 L30 16 L19 19 L16 30 L13 19 L2 16 L13 13 Z" />
    </svg>
  );
}

function Hexagon({ style, className, size = 50 }: ShapeProps) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width={size} height={size} viewBox="0 0 50 50" fill="none">
      <path
        d="M25 4 L43 14 L43 36 L25 46 L7 36 L7 14 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PixelDots({ style, className }: { style?: CSSProperties; className?: string }) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width="90" height="22" viewBox="0 0 90 22" fill="currentColor">
      <rect x="0" y="0" width="6" height="6" rx="1" />
      <rect x="18" y="8" width="6" height="6" rx="1" />
      <rect x="36" y="0" width="6" height="6" rx="1" />
      <rect x="54" y="8" width="6" height="6" rx="1" />
      <rect x="72" y="0" width="6" height="6" rx="1" />
    </svg>
  );
}

function CodeBracket({ style, className, size = 48, flip }: ShapeProps & { flip?: boolean }) {
  return (
    <svg
      style={style}
      className={`absolute ${className ?? ""}`}
      width={size}
      height={size * 0.55}
      viewBox="0 0 60 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      transform={flip ? "scale(-1,1)" : undefined}
    >
      <path d="M14 6 L4 16 L14 26" />
      <path d="M46 6 L56 16 L46 26" />
      <path d="M34 4 L26 28" />
    </svg>
  );
}

function Terminal({ style, className }: { style?: CSSProperties; className?: string }) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width="76" height="44" viewBox="0 0 76 44" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <rect x="3" y="3" width="70" height="38" rx="4" />
      <path d="M12 16 L20 22 L12 28" />
      <path d="M26 30 L42 30" />
    </svg>
  );
}

function Binary({ style, className }: { style?: CSSProperties; className?: string }) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width="84" height="36" viewBox="0 0 84 36" fill="currentColor" fontFamily="monospace" fontSize="14" fontWeight="700">
      <text x="0" y="14">01001</text>
      <text x="0" y="30">10110</text>
    </svg>
  );
}

function Chip({ style, className, size = 48 }: ShapeProps) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <rect x="14" y="14" width="20" height="20" rx="2" />
      <rect x="20" y="20" width="8" height="8" rx="1" fill="currentColor" />
      <path d="M19 14 V8 M24 14 V8 M29 14 V8 M19 40 V34 M24 40 V34 M29 40 V34 M14 19 H8 M14 24 H8 M14 29 H8 M40 19 H34 M40 24 H34 M40 29 H34" />
    </svg>
  );
}

function Cog({ style, className, size = 48 }: ShapeProps) {
  return (
    <svg
      style={style}
      className={`absolute ${className ?? ""} animate-spin-slow`}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4 V10 M24 38 V44 M4 24 H10 M38 24 H44 M10 10 L14 14 M34 34 L38 38 M38 10 L34 14 M10 38 L14 34" />
    </svg>
  );
}

function Joystick({ style, className, size = 56 }: ShapeProps) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width={size} height={size * 0.7} viewBox="0 0 60 42" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
      <rect x="3" y="14" width="54" height="24" rx="12" />
      <circle cx="18" cy="26" r="4" />
      <path d="M14 26 H22 M18 22 V30" />
      <circle cx="40" cy="22" r="2.5" fill="currentColor" />
      <circle cx="48" cy="28" r="2.5" fill="currentColor" />
    </svg>
  );
}

function Antenna({ style, className, size = 48 }: ShapeProps) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <path d="M18 18 A8 8 0 0 1 30 18" />
      <path d="M14 14 A14 14 0 0 1 34 14" />
      <path d="M10 10 A20 20 0 0 1 38 10" />
    </svg>
  );
}

function PixelArrow({ style, className }: { style?: CSSProperties; className?: string }) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width="56" height="40" viewBox="0 0 56 40" fill="currentColor">
      <rect x="0" y="16" width="8" height="8" />
      <rect x="8" y="16" width="8" height="8" />
      <rect x="16" y="16" width="8" height="8" />
      <rect x="24" y="16" width="8" height="8" />
      <rect x="32" y="8" width="8" height="8" />
      <rect x="32" y="24" width="8" height="8" />
      <rect x="40" y="0" width="8" height="8" />
      <rect x="40" y="32" width="8" height="8" />
    </svg>
  );
}

function PlayTriangle({ style, className, size = 32 }: ShapeProps) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
      <path d="M8 4 L28 16 L8 28 Z" />
    </svg>
  );
}

function Diamond({ style, className, size = 28 }: ShapeProps) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width={size} height={size} viewBox="0 0 28 28" fill="currentColor">
      <path d="M14 2 L26 14 L14 26 L2 14 Z" />
    </svg>
  );
}

function Star({ style, className, size = 40 }: ShapeProps) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width={size} height={size} viewBox="0 0 40 40" fill="currentColor">
      <path d="M20 2 L25 15 L39 16 L28 25 L32 39 L20 31 L8 39 L12 25 L1 16 L15 15 Z" />
    </svg>
  );
}

function PixelHeart({ style, className, size = 36 }: ShapeProps) {
  return (
    <svg style={style} className={`absolute ${className ?? ""}`} width={size} height={size * 0.875} viewBox="0 0 32 28" fill="currentColor">
      <rect x="4" y="4" width="4" height="4" />
      <rect x="8" y="4" width="4" height="4" />
      <rect x="20" y="4" width="4" height="4" />
      <rect x="24" y="4" width="4" height="4" />
      <rect x="0" y="8" width="4" height="4" />
      <rect x="4" y="8" width="4" height="4" />
      <rect x="8" y="8" width="4" height="4" />
      <rect x="12" y="8" width="4" height="4" />
      <rect x="16" y="8" width="4" height="4" />
      <rect x="20" y="8" width="4" height="4" />
      <rect x="24" y="8" width="4" height="4" />
      <rect x="28" y="8" width="4" height="4" />
      <rect x="4" y="12" width="4" height="4" />
      <rect x="8" y="12" width="4" height="4" />
      <rect x="12" y="12" width="4" height="4" />
      <rect x="16" y="12" width="4" height="4" />
      <rect x="20" y="12" width="4" height="4" />
      <rect x="24" y="12" width="4" height="4" />
      <rect x="8" y="16" width="4" height="4" />
      <rect x="12" y="16" width="4" height="4" />
      <rect x="16" y="16" width="4" height="4" />
      <rect x="20" y="16" width="4" height="4" />
      <rect x="12" y="20" width="4" height="4" />
      <rect x="16" y="20" width="4" height="4" />
    </svg>
  );
}
