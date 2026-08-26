/**
 * Mascote do Hero — um boneco simples acenando pro usuário. Substitui a
 * colagem de fotos e a ilustração de fundo (ambas removidas — ver histórico
 * em docs/superpowers/specs/2026-08-25-home-motion-upgrade-design.md).
 */
export function HeroMascot() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-xs lg:max-w-sm">
      <svg viewBox="0 0 280 420" className="h-full w-full" aria-hidden>
        {/* sombra de chão */}
        <ellipse cx="140" cy="404" rx="70" ry="12" fill="#187ABF" opacity="0.12" />

        {/* pernas */}
        <rect x="108" y="300" width="26" height="90" rx="13" fill="#04325A" />
        <rect x="146" y="300" width="26" height="90" rx="13" fill="#04325A" />
        <rect x="102" y="378" width="38" height="18" rx="9" fill="#021F3A" />
        <rect x="140" y="378" width="38" height="18" rx="9" fill="#021F3A" />

        {/* corpo */}
        <rect x="88" y="168" width="104" height="145" rx="40" fill="#0DB88F" />
        <rect x="88" y="168" width="104" height="40" rx="20" fill="#14D8AC" />

        {/* braço parado (direito de quem olha) */}
        <rect x="182" y="196" width="26" height="86" rx="13" fill="#0AA37E" />
        <circle cx="196" cy="290" r="15" fill="#F4C69B" />

        {/* braço acenando (esquerdo de quem olha, levantado) */}
        <g className="animate-wave" style={{ transformOrigin: "104px 196px" }}>
          <rect x="66" y="118" width="26" height="86" rx="13" fill="#0AA37E" />
          <circle cx="79" cy="112" r="16" fill="#F4C69B" />
        </g>

        {/* cabeça */}
        <circle cx="140" cy="110" r="52" fill="#F4C69B" />
        {/* cabelo */}
        <path
          d="M90 96 C90 54 190 54 190 96 C178 78 102 78 90 96 Z"
          fill="#04325A"
        />
        {/* rosto */}
        <circle cx="120" cy="112" r="6" fill="#04325A" />
        <circle cx="160" cy="112" r="6" fill="#04325A" />
        <path
          d="M114 132 C124 146 156 146 166 132"
          stroke="#04325A"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="106" cy="122" r="8" fill="#187ABF" opacity="0.18" />
        <circle cx="174" cy="122" r="8" fill="#187ABF" opacity="0.18" />

        {/* estrelinhas perto da mão acenando */}
        <g className="animate-float-slow">
          <path
            d="M40 70 L44 80 L54 82 L46 89 L48 100 L40 94 L32 100 L34 89 L26 82 L36 80 Z"
            fill="#0DB88F"
          />
        </g>
        <g className="animate-float-slower [animation-delay:0.8s]">
          <circle cx="220" cy="70" r="6" fill="#187ABF" />
        </g>
      </svg>
    </div>
  );
}
