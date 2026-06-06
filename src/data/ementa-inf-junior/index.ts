import type { Aula, MesEmenta } from "./tipos";

/**
 * Importa automaticamente todos os arquivos de aula (m01-aula-01.ts ...
 * m12-aula-08.ts) via glob — sem listar 96 imports à mão. Cada arquivo
 * exporta `aula`.
 */
const modules = import.meta.glob("./m*-aula-*.ts", { eager: true }) as Record<
  string,
  { aula: Aula }
>;

function aulasDoMes(mm: number): Aula[] {
  const prefixo = `/m${String(mm).padStart(2, "0")}-aula-`;
  return Object.entries(modules)
    .filter(([path]) => path.includes(prefixo))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.aula)
    .filter(Boolean);
}

const GREEN = "#0DB88F";

/** Ilustrações didáticas por mês/aula (id referencia ilustracoes-aula.tsx). */
const ILUSTRACOES: Record<number, Record<number, { id: string; legenda: string }[]>> = {
  1: {
    1: [{ id: "partes-computador", legenda: "As quatro partes principais do computador." }],
    2: [{ id: "botoes-mouse", legenda: "Os botões do mouse e para que serve cada um." }],
    3: [{ id: "teclas-principais", legenda: "As teclas mais importantes para começar." }],
    4: [{ id: "botoes-janela", legenda: "Os três botões no canto da janela." }],
    5: [{ id: "abrir-programa", legenda: "Dois jeitos de abrir um programa." }],
    6: [{ id: "caixa-salvar", legenda: "A caixa que pergunta se você quer salvar." }],
    7: [{ id: "home-row", legenda: "A linha de base: onde os dedos descansam." }],
    8: [{ id: "home-row", legenda: "A posição das mãos para digitar nos jogos." }],
  },
};

const META: { mes: string; ferramenta: string; foco: string }[] = [
  { mes: "Mês 1", ferramenta: "Dominando o computador", foco: "Conhecendo o computador" },
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

export const MESES_INF_JUNIOR: MesEmenta[] = META.map((m, i) => {
  const mm = i + 1;
  const ilus = ILUSTRACOES[mm] ?? {};
  return {
    mes: m.mes,
    ferramenta: m.ferramenta,
    foco: m.foco,
    cor: GREEN,
    aulas: aulasDoMes(mm).map((a) => ({
      ...a,
      ilustracoes: ilus[a.numero] ?? a.ilustracoes,
    })),
  };
});

export const INF_JUNIOR_INFO = {
  titulo: "Informática Júnior",
  foco: "Informática essencial, Office e IA",
  trofeu: "5 projetos no ano",
  domina: [
    "Usa o computador com autonomia e digita com as duas mãos.",
    "Cria documentos, apresentações e planilhas próprios.",
    "Faz contas e gráficos no Excel / Sheets.",
    "Navega com segurança e usa IA com responsabilidade.",
    "Cria artes simples no Canva (cartazes, convites e cartões).",
    "Apresenta um projeto próprio no Demo Day.",
  ],
};
