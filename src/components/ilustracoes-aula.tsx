/**
 * Ilustrações didáticas (diagramas vetoriais) para o material do professor.
 * São SVGs rotulados — nítidos em qualquer tamanho, leves e consistentes com o
 * tema. Cada aula referencia uma ilustração por `id` no campo `ilustracoes`.
 */

const INK = "#334155";
const INK_SOFT = "#64748B";
const LINE = "#94A3B8";
const GREEN = "#0DB88F";
const GREEN_DK = "#0A6E57";
const GREEN_BG = "#D7F5EC";
const SURF = "#E2E8F0";
const SURF_DK = "#CBD5E1";

const txt = {
  fontFamily: "inherit",
  fontWeight: 700,
} as const;

/* ───────────────────────── 1. Partes do computador ───────────────────────── */
function PartesComputador() {
  return (
    <svg viewBox="0 0 440 270" className="h-auto w-full">
      {/* Monitor */}
      <rect x="26" y="22" width="168" height="116" rx="12" fill="#1E293B" />
      <rect x="38" y="34" width="144" height="84" rx="5" fill={GREEN} opacity="0.22" />
      <circle cx="150" cy="100" r="14" fill={GREEN} opacity="0.55" />
      <rect x="100" y="138" width="20" height="20" fill="#334155" />
      <rect x="74" y="158" width="72" height="10" rx="4" fill="#334155" />
      <text x="110" y="186" textAnchor="middle" fontSize="14" fill={INK} style={txt}>
        TELA
      </text>
      <text x="110" y="202" textAnchor="middle" fontSize="11" fill={INK_SOFT} style={txt}>
        (monitor)
      </text>

      {/* Gabinete */}
      <rect x="232" y="22" width="78" height="146" rx="10" fill="#475569" />
      <circle cx="271" cy="44" r="7" fill={GREEN} />
      <rect x="250" y="64" width="42" height="6" rx="3" fill="#64748B" />
      <rect x="250" y="78" width="42" height="6" rx="3" fill="#64748B" />
      <text x="271" y="190" textAnchor="middle" fontSize="14" fill={INK} style={txt}>
        GABINETE
      </text>
      <text x="271" y="206" textAnchor="middle" fontSize="11" fill={INK_SOFT} style={txt}>
        (o cérebro)
      </text>

      {/* Teclado */}
      <rect x="26" y="216" width="200" height="44" rx="8" fill={SURF_DK} />
      {Array.from({ length: 9 }).map((_, i) => (
        <rect key={`kr1-${i}`} x={36 + i * 21} y="224" width="15" height="11" rx="2" fill="#fff" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <rect key={`kr2-${i}`} x={36 + i * 21} y="240" width="15" height="11" rx="2" fill="#fff" />
      ))}
      <text x="350" y="232" textAnchor="middle" fontSize="14" fill={INK} style={txt}>
        TECLADO
      </text>

      {/* Mouse */}
      <path
        d="M330 222 q0 -16 18 -16 q18 0 18 16 v22 q0 16 -18 16 q-18 0 -18 -16 z"
        fill={SURF}
        stroke={LINE}
        strokeWidth="2"
      />
      <line x1="348" y1="208" x2="348" y2="230" stroke={LINE} strokeWidth="2" />
      <rect x="345" y="212" width="6" height="9" rx="3" fill={GREEN} />
      <text x="348" y="276" textAnchor="middle" fontSize="13" fill={INK} style={txt}>
        MOUSE
      </text>
    </svg>
  );
}

/* ───────────────────────────── 2. Botões do mouse ────────────────────────── */
function BotoesMouse() {
  return (
    <svg viewBox="0 0 440 250" className="h-auto w-full">
      {/* corpo do mouse */}
      <path
        d="M170 60 q0 -38 50 -38 q50 0 50 38 v90 q0 48 -50 48 q-50 0 -50 -48 z"
        fill={SURF}
        stroke={LINE}
        strokeWidth="3"
      />
      {/* divisória dos botões */}
      <line x1="220" y1="24" x2="220" y2="92" stroke={LINE} strokeWidth="2.5" />
      <path d="M170 92 H270" stroke={LINE} strokeWidth="2.5" fill="none" />
      {/* botão esquerdo destacado */}
      <path d="M171 60 q0 -36 49 -37 v68 H171 z" fill={GREEN} opacity="0.25" />
      {/* rodinha */}
      <rect x="213" y="44" width="14" height="26" rx="7" fill={GREEN} />

      {/* Rótulos */}
      <line x1="150" y1="64" x2="110" y2="64" stroke={LINE} strokeWidth="1.5" />
      <text x="105" y="60" textAnchor="end" fontSize="12.5" fill={GREEN_DK} style={txt}>
        Botão esquerdo
      </text>
      <text x="105" y="76" textAnchor="end" fontSize="11" fill={INK_SOFT} style={txt}>
        clicar e abrir
      </text>

      <line x1="290" y1="64" x2="330" y2="64" stroke={LINE} strokeWidth="1.5" />
      <text x="335" y="60" fontSize="12.5" fill={INK} style={txt}>
        Botão direito
      </text>
      <text x="335" y="76" fontSize="11" fill={INK_SOFT} style={txt}>
        abre o menu
      </text>

      <line x1="220" y1="40" x2="220" y2="216" stroke={LINE} strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="220" y="234" textAnchor="middle" fontSize="12.5" fill={INK} style={txt}>
        Rodinha do meio — rola a página
      </text>
    </svg>
  );
}

/* ─────────────────────────── 3. Teclas principais ────────────────────────── */
function TeclasPrincipais() {
  return (
    <svg viewBox="0 0 460 250" className="h-auto w-full">
      <rect x="20" y="40" width="420" height="150" rx="14" fill={SURF} />
      {/* fileira de letras (contexto) */}
      {Array.from({ length: 11 }).map((_, i) => (
        <rect key={`l-${i}`} x={40 + i * 32} y="58" width="24" height="22" rx="4" fill="#fff" />
      ))}
      {/* Backspace */}
      <rect x="392" y="58" width="36" height="22" rx="4" fill={GREEN} />
      <text x="410" y="73" textAnchor="middle" fontSize="12" fill="#fff" style={txt}>
        ⌫
      </text>
      {/* Enter */}
      <rect x="388" y="88" width="40" height="24" rx="4" fill={GREEN} />
      <text x="408" y="104" textAnchor="middle" fontSize="10.5" fill="#fff" style={txt}>
        Enter
      </text>
      {/* Shift */}
      <rect x="40" y="120" width="50" height="24" rx="4" fill={GREEN} />
      <text x="65" y="136" textAnchor="middle" fontSize="11" fill="#fff" style={txt}>
        Shift
      </text>
      {/* Barra de espaço */}
      <rect x="150" y="152" width="160" height="26" rx="5" fill={GREEN} />
      <text x="230" y="169" textAnchor="middle" fontSize="11.5" fill="#fff" style={txt}>
        Barra de espaço
      </text>
      {/* setas */}
      <rect x="356" y="150" width="22" height="13" rx="3" fill={GREEN} />
      <rect x="332" y="165" width="22" height="13" rx="3" fill={GREEN} />
      <rect x="356" y="165" width="22" height="13" rx="3" fill={GREEN} />
      <rect x="380" y="165" width="22" height="13" rx="3" fill={GREEN} />

      {/* Rótulos */}
      <text x="410" y="46" textAnchor="middle" fontSize="10.5" fill={GREEN_DK} style={txt}>
        Backspace = apagar
      </text>
      <text x="436" y="104" fontSize="10.5" fill={GREEN_DK} style={txt} textAnchor="end" />
      <text x="65" y="160" textAnchor="middle" fontSize="10.5" fill={GREEN_DK} style={txt}>
        Shift = maiúscula
      </text>
      <text x="367" y="196" textAnchor="middle" fontSize="10.5" fill={GREEN_DK} style={txt}>
        setas
      </text>
      <text x="230" y="148" textAnchor="middle" fontSize="10.5" fill={GREEN_DK} style={txt}>
        Enter (à direita) = confirmar / pular linha
      </text>
    </svg>
  );
}

/* ───────────────────────────── 4. Botões da janela ───────────────────────── */
function BotoesJanela() {
  return (
    <svg viewBox="0 0 440 250" className="h-auto w-full">
      <rect x="40" y="40" width="360" height="180" rx="12" fill="#fff" stroke={SURF_DK} strokeWidth="2" />
      {/* barra de título */}
      <path d="M40 52 a12 12 0 0 1 12 -12 H388 a12 12 0 0 1 12 12 V72 H40 Z" fill="#F1F5F9" />
      <circle cx="62" cy="56" r="6" fill={SURF_DK} />
      <rect x="80" y="52" width="120" height="8" rx="4" fill={SURF_DK} />
      {/* botões */}
      <rect x="320" y="46" width="20" height="20" rx="4" fill={GREEN_BG} />
      <line x1="325" y1="60" x2="335" y2="60" stroke={GREEN_DK} strokeWidth="2.5" />
      <rect x="346" y="46" width="20" height="20" rx="4" fill={GREEN_BG} />
      <rect x="350" y="50" width="12" height="12" rx="2" fill="none" stroke={GREEN_DK} strokeWidth="2.2" />
      <rect x="372" y="46" width="20" height="20" rx="4" fill="#FBE0E0" />
      <line x1="376" y1="50" x2="388" y2="62" stroke="#C0392B" strokeWidth="2.5" />
      <line x1="388" y1="50" x2="376" y2="62" stroke="#C0392B" strokeWidth="2.5" />

      {/* Rótulos */}
      <line x1="330" y1="70" x2="330" y2="150" stroke={LINE} strokeWidth="1.4" strokeDasharray="3 3" />
      <text x="330" y="166" textAnchor="middle" fontSize="11.5" fill={GREEN_DK} style={txt}>
        Minimizar
      </text>
      <text x="330" y="180" textAnchor="middle" fontSize="9.5" fill={INK_SOFT} style={txt}>
        esconde na barra
      </text>
      <line x1="356" y1="70" x2="356" y2="188" stroke={LINE} strokeWidth="1.4" strokeDasharray="3 3" />
      <text x="356" y="204" textAnchor="middle" fontSize="11.5" fill={GREEN_DK} style={txt}>
        Maximizar
      </text>
      <line x1="382" y1="70" x2="382" y2="120" stroke={LINE} strokeWidth="1.4" strokeDasharray="3 3" />
      <text x="382" y="136" textAnchor="middle" fontSize="11.5" fill="#C0392B" style={txt}>
        Fechar (X)
      </text>
    </svg>
  );
}

/* ───────────────────────── 5. Abrir um programa ──────────────────────────── */
function AbrirPrograma() {
  return (
    <svg viewBox="0 0 460 240" className="h-auto w-full">
      {/* Caminho 1: ícone na área de trabalho */}
      <rect x="34" y="36" width="150" height="150" rx="14" fill={GREEN} opacity="0.10" />
      <rect x="86" y="58" width="46" height="46" rx="10" fill={GREEN} />
      <text x="109" y="88" textAnchor="middle" fontSize="22" fill="#fff" style={txt}>
        ▶
      </text>
      <text x="109" y="124" textAnchor="middle" fontSize="11" fill={INK} style={txt}>
        Joguinho
      </text>
      {/* cursor + 2 cliques */}
      <path d="M118 116 l0 26 l7 -7 l5 11 l5 -2 l-5 -11 l10 0 z" fill={INK} />
      <text x="109" y="166" textAnchor="middle" fontSize="12" fill={GREEN_DK} style={txt}>
        2 cliques no ícone
      </text>

      <text x="230" y="116" textAnchor="middle" fontSize="22" fill={LINE} style={txt}>
        ou
      </text>

      {/* Caminho 2: menu Iniciar */}
      <rect x="276" y="36" width="150" height="150" rx="14" fill={GREEN} opacity="0.10" />
      <rect x="296" y="150" width="110" height="26" rx="6" fill="#F1F5F9" />
      <rect x="302" y="156" width="14" height="14" rx="3" fill={GREEN} />
      <text x="356" y="168" textAnchor="middle" fontSize="11" fill={INK} style={txt}>
        Iniciar
      </text>
      {/* lista do menu */}
      <rect x="300" y="58" width="102" height="84" rx="8" fill="#fff" stroke={SURF_DK} strokeWidth="2" />
      {["Paint", "Navegador", "Joguinho"].map((p, i) => (
        <g key={p}>
          <rect x="308" y={66 + i * 24} width="12" height="12" rx="3" fill={GREEN} opacity="0.7" />
          <text x="328" y={76 + i * 24} fontSize="11" fill={INK} style={txt}>
            {p}
          </text>
        </g>
      ))}
      <text x="351" y="204" textAnchor="middle" fontSize="12" fill={GREEN_DK} style={txt}>
        menu Iniciar → escolher
      </text>
    </svg>
  );
}

/* ─────────────────────── 6. Caixa "Deseja salvar?" ───────────────────────── */
function CaixaSalvar() {
  return (
    <svg viewBox="0 0 440 230" className="h-auto w-full">
      <rect x="70" y="34" width="300" height="150" rx="12" fill="#fff" stroke={SURF_DK} strokeWidth="2" />
      <path d="M70 46 a12 12 0 0 1 12 -12 H358 a12 12 0 0 1 12 12 V64 H70 Z" fill="#F1F5F9" />
      <text x="86" y="58" fontSize="12" fill={INK_SOFT} style={txt}>
        Bloco de Notas
      </text>
      <text x="220" y="100" textAnchor="middle" fontSize="15" fill={INK} style={txt}>
        Deseja salvar as alterações?
      </text>
      {/* botões */}
      <rect x="92" y="130" width="80" height="32" rx="7" fill={GREEN} />
      <text x="132" y="151" textAnchor="middle" fontSize="12.5" fill="#fff" style={txt}>
        Salvar
      </text>
      <rect x="184" y="130" width="86" height="32" rx="7" fill="#fff" stroke={SURF_DK} strokeWidth="2" />
      <text x="227" y="151" textAnchor="middle" fontSize="12" fill={INK} style={txt}>
        Não salvar
      </text>
      <rect x="282" y="130" width="76" height="32" rx="7" fill="#fff" stroke={SURF_DK} strokeWidth="2" />
      <text x="320" y="151" textAnchor="middle" fontSize="12" fill={INK} style={txt}>
        Cancelar
      </text>

      <text x="132" y="178" textAnchor="middle" fontSize="9.5" fill={GREEN_DK} style={txt}>
        guarda o trabalho
      </text>
      <text x="227" y="178" textAnchor="middle" fontSize="9.5" fill={INK_SOFT} style={txt}>
        fecha sem guardar
      </text>
      <text x="320" y="178" textAnchor="middle" fontSize="9.5" fill={INK_SOFT} style={txt}>
        volta ao programa
      </text>
    </svg>
  );
}

/* ─────────────────────── 7. Linha de base (home row) ─────────────────────── */
function HomeRow() {
  const esq = ["A", "S", "D", "F"];
  const dir = ["J", "K", "L", "Ç"];
  return (
    <svg viewBox="0 0 460 230" className="h-auto w-full">
      <rect x="20" y="54" width="420" height="120" rx="14" fill={SURF} />
      {/* mão esquerda */}
      {esq.map((k, i) => (
        <g key={k}>
          <rect x={70 + i * 40} y="88" width="34" height="34" rx="6" fill="#BFE9DC" stroke={GREEN_DK} strokeWidth="2" />
          <text x={87 + i * 40} y="111" textAnchor="middle" fontSize="15" fill={GREEN_DK} style={txt}>
            {k}
          </text>
          {k === "F" && <rect x={80 + i * 40} y="116" width="14" height="3" rx="1.5" fill={GREEN_DK} />}
        </g>
      ))}
      {/* mão direita */}
      {dir.map((k, i) => (
        <g key={k}>
          <rect x={258 + i * 40} y="88" width="34" height="34" rx="6" fill="#CFE0FB" stroke="#2E5FA3" strokeWidth="2" />
          <text x={275 + i * 40} y="111" textAnchor="middle" fontSize="15" fill="#2E5FA3" style={txt}>
            {k}
          </text>
          {k === "J" && <rect x={268 + i * 40} y="116" width="14" height="3" rx="1.5" fill="#2E5FA3" />}
        </g>
      ))}
      {/* polegares / espaço */}
      <rect x="150" y="140" width="160" height="24" rx="6" fill="#fff" stroke={SURF_DK} strokeWidth="2" />
      <text x="230" y="156" textAnchor="middle" fontSize="11" fill={INK_SOFT} style={txt}>
        polegares na barra de espaço
      </text>

      <text x="150" y="78" textAnchor="middle" fontSize="12" fill={GREEN_DK} style={txt}>
        Mão esquerda: A S D F
      </text>
      <text x="318" y="78" textAnchor="middle" fontSize="12" fill="#2E5FA3" style={txt}>
        Mão direita: J K L Ç
      </text>
      <text x="230" y="198" textAnchor="middle" fontSize="11" fill={INK} style={txt}>
        As marquinhas no F e no J ajudam a achar a posição sem olhar.
      </text>
    </svg>
  );
}

const REGISTRY: Record<string, () => React.ReactElement> = {
  "partes-computador": PartesComputador,
  "botoes-mouse": BotoesMouse,
  "teclas-principais": TeclasPrincipais,
  "botoes-janela": BotoesJanela,
  "abrir-programa": AbrirPrograma,
  "caixa-salvar": CaixaSalvar,
  "home-row": HomeRow,
};

export function IlustracaoAula({ id, legenda }: { id: string; legenda?: string }) {
  const Comp = REGISTRY[id];
  if (!Comp) return null;
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="px-4 pt-4">
        <Comp />
      </div>
      {legenda ? (
        <figcaption className="border-t border-slate-100 bg-white px-4 py-2.5 text-center text-[12.5px] font-semibold text-slate-500">
          {legenda}
        </figcaption>
      ) : null}
    </figure>
  );
}
