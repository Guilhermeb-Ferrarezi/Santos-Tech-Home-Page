import type { ReactNode } from "react";

/**
 * "Resultado do curso" (outcome) legível — auditoria de UI/UX de 24/09/2026, F104.
 *
 * Os outcomes têm até ~430 caracteres e cada pele renderizava o texto inteiro
 * num bloco só, quase sempre em negrito (DESIGN_SYSTEM §1.4: negrito estratégico,
 * nunca o parágrafo inteiro). Aqui o texto vira UM parágrafo só:
 *
 *   gancho em semibold + resto em peso normal, na mesma frase.
 *
 * Regra de ouro: o texto NÃO é reescrito. Nenhum caractere some, muda ou troca
 * de lugar — `gancho + resto === text`, sempre. (A versão anterior quebrava o
 * texto em parágrafos e listas e, com isso, partia parênteses entre travessões
 * ao meio, apagava o "e" das enumerações e criava parágrafos em minúscula.)
 *
 * Onde o gancho termina (o 1º critério que der gancho entre GANCHO_MIN e
 * GANCHO_MAX caracteres). "Aparte" = trecho entre dois travessões
 * ("do zero — hardware, Windows — até…") ou entre parênteses; o corte nunca
 * cai dentro de um aparte:
 *   1. no ":" (fora de aparte); senão no primeiro " — " que NÃO abre aparte;
 *   2. na primeira ", " fora de aparte;
 *   3. logo antes do travessão que abre o 1º aparte (o aparte vai inteiro
 *      para o resto);
 *   4. no primeiro " até " fora de aparte ("do zero absoluto | até…");
 *   5. sem corte natural curto: não há gancho, o texto inteiro fica em peso normal.
 * O separador fica no resto, em peso normal. Outcome curto (≤ CURTO_MAX) é uma
 * frase só: fica inteiro no gancho.
 *
 * Tamanho, cor, fonte e entrelinha continuam vindo da pele via `className`.
 */

/** Gancho maior que isso deixa de ser gancho e vira outro bloco em negrito. */
const GANCHO_MAX = 110;
/** Gancho menor que isso não se sustenta sozinho. */
const GANCHO_MIN = 15;
/** Outcome curto cabe "numa respiração": fica inteiro em destaque. */
const CURTO_MAX = 150;
/** Distância máxima entre dois travessões para contarem como um aparte (abre … fecha). */
const APARTE_MAX = 260;

/** Travessão com espaços; aceita a variação " —, " de alguns outcomes. */
const TRAVESSAO = / —,? /g;

const posicoes = (texto: string, re: RegExp) => [...texto.matchAll(re)].map((m) => m.index);

/** Divide o outcome em gancho + resto. Garantia: `gancho + resto === texto`. */
function dividirOutcome(texto: string): { gancho: string; resto: string } {
  if (texto.trim().length <= CURTO_MAX) return { gancho: texto, resto: "" };

  // Travessões pareados em sequência: um abre aparte se o seguinte fecha logo adiante.
  const travessoes = posicoes(texto, TRAVESSAO);
  const apartes: [number, number][] = [];
  for (let i = 0; i < travessoes.length; i++) {
    const [abre, fecha] = [travessoes[i], travessoes[i + 1]];
    if (fecha !== undefined && fecha - abre <= APARTE_MAX) {
      apartes.push([abre, fecha]);
      i++;
    }
  }
  const abridores = new Set(apartes.map(([abre]) => abre));
  for (const m of texto.matchAll(/\([^)]*\)/g)) apartes.push([m.index, m.index + m[0].length - 1]);

  const foraDeAparte = (pos: number) => !apartes.some(([abre, fecha]) => pos > abre && pos < fecha);
  const cabe = (pos: number | undefined): pos is number => pos !== undefined && pos >= GANCHO_MIN && pos <= GANCHO_MAX;
  const primeiro = (re: RegExp) => posicoes(texto, re).find(foraDeAparte);

  const candidatos = [
    primeiro(/: /g),
    travessoes.find((p) => !abridores.has(p) && foraDeAparte(p)),
    primeiro(/, /g),
    [...abridores][0],
    primeiro(/ até /g),
  ];
  const corte = candidatos.find(cabe);
  if (corte === undefined) return { gancho: "", resto: texto };
  return { gancho: texto.slice(0, corte), resto: texto.slice(corte) };
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
  /** Marca inline no começo do parágrafo (ex.: "✓ ", aspas, rótulo "Ao final deste curso:"). */
  antes?: ReactNode;
  /** Marca inline no fim do parágrafo (ex.: aspas de fechamento). */
  depois?: ReactNode;
}) {
  const { gancho, resto } = dividirOutcome(text);
  return (
    <p className={`font-normal ${className}`}>
      {antes}
      {gancho && <span className="font-semibold">{gancho}</span>}
      {resto}
      {depois}
    </p>
  );
}
