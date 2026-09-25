import type { ReactNode } from "react";

/**
 * "Resultado do curso" (outcome) legível — auditoria de UI/UX de 24/09/2026, F104.
 *
 * Os outcomes têm até ~430 caracteres e cada pele renderizava o texto inteiro
 * num bloco só, quase sempre em negrito (DESIGN_SYSTEM §1.4: bloco denso é
 * proibido; negrito estratégico, nunca o parágrafo inteiro). Aqui o MESMO texto
 * (nenhuma palavra é reescrita) segue o padrão do §1.4:
 *
 *   gancho curto em semibold → bullets (quando há enumeração) → fechamento em peso normal.
 *
 * Tamanho, cor, fonte e entrelinha continuam vindo da pele via `className`.
 */

/** Gancho maior que isso deixa de ser gancho e vira outro bloco em negrito. */
const GANCHO_MAX = 100;
/** Gancho menor que isso não se sustenta sozinho ("Sair do zero" etc. ainda passa). */
const GANCHO_MIN = 15;
/** Outcome curto cabe "numa respiração": fica inteiro em destaque, sem dividir. */
const CURTO_MAX = 150;
/** Item de lista maior que isso já é frase, não item. */
const ITEM_MAX = 75;
/** Fechamento ("— base para trabalhar como…") maior que isso não é fechamento, é o meio do texto. */
const FECHAMENTO_MAX = 160;

/** Travessão com espaços; aceita a variação " —, " de alguns outcomes. */
const TRAVESSAO = / —,? /;

/** Início típico de frase corrida (preposição, conjunção, gerúndio) — não é item de lista. */
const INICIO_DE_FRASE = /^(?:da|do|das|dos|de|com|até|sem|para|pra|e|a|o|ao|à|em|no|na|nos|nas)\s|^\p{L}+ndo\s/u;

type OutcomePartes = {
  /** Frase de gancho (semibold). Vazio quando não há corte natural curto. */
  gancho: string;
  /** Enumeração entre travessões, quando é lista de verdade (3+ itens curtos). */
  itens: string[];
  /** Restante do texto, em peso normal. */
  resto: string;
  /** Frase de fechamento depois do último travessão (ex.: "base para trabalhar como…"), em parágrafo próprio. */
  fechamento: string;
};

/** Primeira ocorrência de `sep` dentro da janela do gancho → [antes, depois]. */
function cortar(texto: string, sep: RegExp): [string, string] | null {
  const m = sep.exec(texto);
  if (!m || m.index < GANCHO_MIN || m.index > GANCHO_MAX) return null;
  return [texto.slice(0, m.index), texto.slice(m.index + m[0].length)];
}

const palavras = (s: string) => s.split(/\s+/).length;

function comoLista(trecho: string): string[] | null {
  const itens = trecho.split(", ").map((s) => s.trim());
  const ultimo = itens.length - 1;
  // Vírgula antes do "e" final (", e otimização…"): o "e" não pertence ao item.
  if (ultimo > 0 && itens[ultimo].startsWith("e ")) itens[ultimo] = itens[ultimo].slice(2);
  // "A, B e C": com só uma vírgula, o "e" final separa o 3º item — desde que as
  // duas pontas sejam curtas ("frete prontos para vender" não é item, é frase).
  if (itens.length === 2) {
    const partes = itens[1].split(" e ");
    if (partes.length === 2 && partes.every((p) => palavras(p) <= 3)) itens.splice(1, 1, ...partes);
  }
  if (itens.length < 3) return null;
  if (itens.some((i) => !i || i.length > ITEM_MAX || INICIO_DE_FRASE.test(i))) return null;
  return itens;
}

/**
 * Divide o outcome em gancho + itens + resto, sem trocar palavras (só some o
 * separador onde o texto quebra de linha). Corte do gancho, na ordem:
 * travessão → dois-pontos → " até " → ponto e vírgula → vírgula — o primeiro
 * que cair dentro de GANCHO_MAX caracteres.
 */
function dividirOutcome(texto: string): OutcomePartes {
  const t = texto.trim();
  if (t.length <= CURTO_MAX) return { gancho: t, itens: [], resto: "", fechamento: "" };
  const { gancho, itens, resto } = separarGancho(t);
  return { gancho, itens, ...separarFechamento(resto) };
}

function separarGancho(t: string): Omit<OutcomePartes, "fechamento"> {
  const porTravessao = cortar(t, TRAVESSAO);
  if (porTravessao) {
    const [gancho, depois] = porTravessao;
    // Trecho entre o 1º e o 2º travessão: se for enumeração, vira lista.
    const fim = TRAVESSAO.exec(depois);
    const itens = fim ? comoLista(depois.slice(0, fim.index)) : null;
    if (fim && itens) return { gancho, itens, resto: depois.slice(fim.index + fim[0].length) };
    return { gancho, itens: [], resto: depois };
  }

  const porDoisPontos = cortar(t, /: /);
  if (porDoisPontos) return { gancho: porDoisPontos[0], itens: [], resto: porDoisPontos[1] };

  // "Fazer X do zero absoluto até Y…": o "até" abre o resto e continua no texto.
  const ate = t.indexOf(" até ");
  if (ate >= GANCHO_MIN && ate <= GANCHO_MAX) return { gancho: t.slice(0, ate), itens: [], resto: t.slice(ate + 1) };

  const porVirgula = cortar(t, /; /) ?? cortar(t, /, /);
  if (porVirgula) return { gancho: porVirgula[0], itens: [], resto: porVirgula[1] };

  return { gancho: "", itens: [], resto: t };
}

/** Último travessão do resto → fechamento em parágrafo próprio, se for curto. */
function separarFechamento(resto: string): { resto: string; fechamento: string } {
  const todos = [...resto.matchAll(/ —,? /g)];
  const ultimo = todos.at(-1);
  if (ultimo?.index == null) return { resto, fechamento: "" };
  const fechamento = resto.slice(ultimo.index + ultimo[0].length);
  if (ultimo.index < 40 || fechamento.length < 20 || fechamento.length > FECHAMENTO_MAX) return { resto, fechamento: "" };
  return { resto: resto.slice(0, ultimo.index), fechamento };
}

export function OutcomeText({
  text,
  className = "",
  antes,
  depois,
}: {
  text: string;
  /** Tamanho, cor, fonte e entrelinha da pele. Sem peso (font-semibold/bold): quem controla é o componente. */
  className?: string;
  /** Marca inline no começo do 1º bloco (ex.: "✓ ", aspas, rótulo "Ao final deste curso:"). */
  antes?: ReactNode;
  /** Marca inline no fim do último bloco (ex.: aspas de fechamento). */
  depois?: ReactNode;
}) {
  const { gancho, itens, resto, fechamento } = dividirOutcome(text);
  const textos = [gancho, resto, fechamento].filter(Boolean);
  const ultimoTexto = textos.at(-1);
  // `depois` vai no último parágrafo; se o texto terminar na lista, vai no último item.
  const depoisNaLista = itens.length > 0 && !resto && !fechamento;
  const bloco = (conteudo: string, classe: string, primeiro: boolean) => (
    <p className={classe}>
      {primeiro && antes}
      {conteudo}
      {conteudo === ultimoTexto && !depoisNaLista && depois}
    </p>
  );
  return (
    <div className={className}>
      {gancho && bloco(gancho, "font-semibold", true)}
      {itens.length > 0 && (
        <ul className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 font-normal">
          {itens.map((item, i) => (
            <li key={item}>
              <span aria-hidden="true" className="mr-1.5 inline-block h-1 w-1 rounded-full bg-current align-middle opacity-60" />
              {item}
              {depoisNaLista && i === itens.length - 1 && depois}
            </li>
          ))}
        </ul>
      )}
      {resto && bloco(resto, `font-normal ${gancho ? "mt-1.5" : ""}`, !gancho)}
      {fechamento && bloco(fechamento, "mt-1.5 font-normal", false)}
    </div>
  );
}
