/**
 * Tipos da EMENTA DETALHADA (material do professor) — aula por aula.
 *
 * Cada aula tem duração de 1 hora; são 2 aulas por semana.
 * O conteúdo é escrito PARA O PROFESSOR: mesmo um professor iniciante, que não
 * conhece as ferramentas, deve conseguir conduzir a aula com este material.
 *
 * Convenção de formatação dos campos de texto longo (descricao, treinamento,
 * guiaProfessor, atividade, gabarito): texto puro, parágrafos separados por
 * linha em branco. Use "## " para subtítulos, "- " para tópicos e "1. " para
 * passos numerados. Sem markdown de negrito/itálico.
 */

export type Exercicio = {
  /** Título curto da atividade. */
  titulo: string;
  /** Categoria — ajuda o professor a variar o ritmo (ex.: "Prática no computador", "Jogo", "Roda de conversa"). */
  tipo: string;
  /** Tempo sugerido (ex.: "10 min"). */
  tempo: string;
  /** Guia para o professor: como introduzir, explicar e conduzir a atividade. */
  guiaProfessor: string;
  /** A atividade em si, pronta para passar aos alunos. */
  atividade: string;
  /** Gabarito: resposta esperada / como saber que a criança acertou. */
  gabarito: string;
};

export type Aula = {
  /** Número da aula dentro do mês. */
  numero: number;
  /** Título da aula. */
  titulo: string;
  /** Semana do mês (ex.: "Semana 1"). */
  semana: string;
  /** Duração (sempre "1 hora"). */
  duracao: string;
  /** Objetivo de aprendizagem em 1 frase. */
  objetivo: string;
  /** Descrição detalhada do assunto da aula. */
  descricao: string;
  /** Materiais e preparação necessários. */
  materiais: string[];
  /** Conceitos-chave / mini-glossário (formato "Termo — definição simples."). */
  conceitosChave: string[];
  /** Ilustrações didáticas (diagramas) que apoiam a aula. `id` referencia o registro em ilustracoes-aula.tsx. */
  ilustracoes?: { id: string; legenda: string }[];
  /** Texto de treinamento: tutorial passo a passo para o professor (técnico + teórico). */
  treinamento: string;
  /** As 5 "munições" da aula — sempre 5 exercícios. */
  exercicios: Exercicio[];
};

export type MesEmenta = {
  /** Ex.: "Mês 1". */
  mes: string;
  /** Ferramenta/eixo do mês (ex.: "Dominando o computador"). */
  ferramenta: string;
  /** Foco do mês (ex.: "Conhecendo o computador"). */
  foco: string;
  /** Cor de destaque (hex). */
  cor: string;
  /** As aulas do mês. */
  aulas: Aula[];
};
