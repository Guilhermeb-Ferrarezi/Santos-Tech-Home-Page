/**
 * Ilustração flat 2D do Hero — substitui a colagem de fotos. Criança criando
 * no computador, com elementos de jogo/código flutuando ao redor. Aprovada
 * depois de comparar com fundo de foto e com 3D (ver
 * docs/superpowers/specs/2026-08-25-home-motion-upgrade-design.md e a
 * memória do projeto pro histórico da decisão).
 *
 * SVG puro — leve o bastante pra aparecer em qualquer tamanho de tela (ao
 * contrário da colagem de fotos, que era desktop-only).
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:max-w-none">
      <svg viewBox="0 0 600 460" className="h-full w-full" aria-hidden>
        {/* sombra de chão */}
        <ellipse cx="300" cy="410" rx="190" ry="18" fill="#187ABF" opacity="0.08" />

        {/* mesa */}
        <rect x="120" y="360" width="360" height="22" rx="8" fill="#04325A" />
        <rect x="150" y="382" width="14" height="46" rx="4" fill="#04325A" />
        <rect x="436" y="382" width="14" height="46" rx="4" fill="#04325A" />

        {/* monitor: base + pescoço */}
        <rect x="284" y="330" width="32" height="34" rx="6" fill="#0A4A78" />
        <rect x="255" y="358" width="90" height="14" rx="7" fill="#0A4A78" />

        {/* monitor: moldura + tela */}
        <rect x="175" y="120" width="250" height="212" rx="18" fill="#04325A" />
        <rect x="193" y="138" width="214" height="176" rx="10" fill="#EAF4FC" />

        {/* cena dentro da tela: blocos tipo voxel + avatar */}
        <rect x="213" y="248" width="174" height="10" fill="#0DB88F" opacity="0.35" />
        <g>
          <rect x="228" y="216" width="30" height="30" rx="4" fill="#0DB88F" />
          <rect x="228" y="216" width="30" height="10" rx="4" fill="#14D8AC" />
          <rect x="262" y="196" width="30" height="50" rx="4" fill="#187ABF" />
          <rect x="262" y="196" width="30" height="10" rx="4" fill="#3DA0E0" />
          <rect x="296" y="228" width="30" height="18" rx="4" fill="#0DB88F" />
          <rect x="296" y="228" width="30" height="8" rx="4" fill="#14D8AC" />
        </g>
        <g>
          <circle cx="352" cy="222" r="12" fill="#04325A" />
          <rect x="342" y="234" width="20" height="24" rx="6" fill="#187ABF" />
          <rect x="336" y="238" width="8" height="16" rx="4" fill="#187ABF" />
          <rect x="358" y="238" width="8" height="16" rx="4" fill="#187ABF" />
        </g>
        <rect x="213" y="152" width="60" height="8" rx="4" fill="#187ABF" opacity="0.4" />
        <rect x="281" y="152" width="34" height="8" rx="4" fill="#0DB88F" opacity="0.5" />

        {/* criança sentada, vista lateral */}
        <g>
          <rect x="330" y="352" width="60" height="10" rx="5" fill="#0A4A78" />
          <rect x="336" y="362" width="8" height="30" rx="3" fill="#0A4A78" />
          <rect x="376" y="362" width="8" height="30" rx="3" fill="#0A4A78" />
          <path d="M338 356 C336 320 344 300 366 298 C388 300 396 320 394 356 Z" fill="#0DB88F" />
          <circle cx="366" cy="278" r="22" fill="#04325A" />
          <path d="M346 272 C348 254 384 254 386 272 C382 262 350 262 346 272 Z" fill="#04325A" />
          <path
            d="M348 322 C336 330 322 336 314 340"
            stroke="#0DB88F"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        <rect x="286" y="336" width="90" height="18" rx="6" fill="#0A4A78" />

        {/* elementos flutuando ao redor */}
        <g className="animate-float-slow">
          <rect x="70" y="90" width="52" height="52" rx="12" fill="#0DB88F" />
          <rect x="70" y="90" width="52" height="16" rx="12" fill="#14D8AC" />
        </g>

        <g className="animate-float-slower">
          <path
            d="M470 110 L460 130 L470 150 M500 110 L510 130 L500 150 M488 104 L482 156"
            stroke="#187ABF"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        <g className="animate-float-slow [animation-delay:0.6s]">
          <rect x="470" y="230" width="60" height="42" rx="21" fill="#04325A" />
          <circle cx="486" cy="251" r="6" fill="#EAF4FC" />
          <circle cx="514" cy="251" r="6" fill="#EAF4FC" />
          <rect x="494" y="248" width="12" height="6" rx="3" fill="#EAF4FC" />
        </g>

        <g className="animate-float-slower [animation-delay:1.2s]">
          <path d="M96 300 L112 268 L128 300 Z" fill="#187ABF" />
          <rect x="106" y="300" width="12" height="10" fill="#04325A" />
          <path
            d="M112 268 C118 268 122 262 118 254 C114 262 110 262 112 268 Z"
            fill="#0DB88F"
          />
        </g>

        <g className="animate-float-slow [animation-delay:2s]">
          <path
            d="M540 300 L546 314 L560 316 L549 325 L552 339 L540 331 L528 339 L531 325 L520 316 L534 314 Z"
            fill="#0DB88F"
          />
        </g>
      </svg>
    </div>
  );
}
