import type { MesEmenta } from "./tipos";
import { aula as m1a1 } from "./m01-aula-01";
import { aula as m1a2 } from "./m01-aula-02";
import { aula as m1a3 } from "./m01-aula-03";
import { aula as m1a4 } from "./m01-aula-04";
import { aula as m1a5 } from "./m01-aula-05";
import { aula as m1a6 } from "./m01-aula-06";
import { aula as m1a7 } from "./m01-aula-07";
import { aula as m1a8 } from "./m01-aula-08";

const GREEN = "#0DB88F";

/** Mês 1 — detalhado aula por aula (modelo aprovado). */
export const MES_1: MesEmenta = {
  mes: "Mês 1",
  ferramenta: "Dominando o computador",
  foco: "Conhecendo o computador",
  cor: GREEN,
  aulas: [m1a1, m1a2, m1a3, m1a4, m1a5, m1a6, m1a7, m1a8],
};

/** Meses já detalhados (prontos para os professores). */
export const MESES_DETALHADOS: MesEmenta[] = [MES_1];

/** Meses ainda não detalhados — listados como "em breve" na página. */
export const MESES_PENDENTES: { mes: string; ferramenta: string; foco: string }[] = [
  { mes: "Mês 2", ferramenta: "Dominando o computador", foco: "Digitação e arquivos" },
  { mes: "Mês 3", ferramenta: "Dominando o computador", foco: "Internet com segurança" },
  { mes: "Mês 4", ferramenta: "Word / Google Docs", foco: "Criar documentos" },
  { mes: "Mês 5", ferramenta: "PowerPoint / Google Apresentações", foco: "Apresentações" },
  { mes: "Mês 6", ferramenta: "PowerPoint / Google Apresentações", foco: "Jogo no PowerPoint" },
  { mes: "Mês 7", ferramenta: "Excel / Google Planilhas", foco: "Primeira planilha" },
  { mes: "Mês 8", ferramenta: "Excel / Google Planilhas", foco: "Contas automáticas" },
  { mes: "Mês 9", ferramenta: "Excel / Google Planilhas", foco: "Gráficos" },
  { mes: "Mês 10", ferramenta: "Inteligência Artificial", foco: "Conhecendo a IA" },
  { mes: "Mês 11", ferramenta: "Canva", foco: "Criar artes no Canva" },
  { mes: "Mês 12", ferramenta: "Projeto final", foco: "Projeto final + Demo Day" },
];
