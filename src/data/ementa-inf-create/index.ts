import type { Aula, MesEmenta } from "./tipos";

/**
 * Importa automaticamente todos os arquivos de aula (m01-aula-01.ts ...
 * m24-aula-08.ts). Numeração contínua: Ano 1 = m01-m12, Ano 2 = m13-m24.
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

const BLUE = "#2E8FCF";

export type AnoEmenta = {
  titulo: string;
  foco: string;
  trofeu: string;
  domina: string[];
  meses: MesEmenta[];
};

type MesMeta = { ferramenta: string; foco: string };

const ANOS_META: { titulo: string; foco: string; trofeu: string; domina: string[]; meses: MesMeta[] }[] = [
  {
    titulo: "Ano 1",
    foco: "Fundamentos, IA (4 + Claude), Office + Google e o dia a dia",
    trofeu: "Base sólida de informática",
    domina: [
      "Entende o computador por dentro: arquivos, hardware, software, periféricos e digitação.",
      "Conhece 4 IAs (ChatGPT, Gemini, DeepSeek, Perplexity) e domina o Claude a fundo (arquivos, Artifacts e Projects).",
      "Cria planilhas (Excel e Google Planilhas) e formulários (Google Forms).",
      "Escreve documentos (Word e Google Docs) e monta apresentações (PowerPoint e Apresentações).",
      "Usa as ferramentas do dia a dia: Gmail, Agenda, Meet, Notion, Drive, Maps e Earth.",
      "Sabe instalar/desinstalar programas e o que é formatar um computador.",
    ],
    meses: [
      { ferramenta: "Fundamentos da informática", foco: "Como o computador funciona" },
      { ferramenta: "Inteligência Artificial (4 IAs)", foco: "ChatGPT, Gemini, DeepSeek e Perplexity" },
      { ferramenta: "Claude", foco: "Dominar o Claude a fundo" },
      { ferramenta: "Excel", foco: "Primeira planilha no Excel" },
      { ferramenta: "Google Planilhas", foco: "Planilhas na nuvem" },
      { ferramenta: "Google Forms", foco: "Formulários e quizzes" },
      { ferramenta: "Word", foco: "Documentos no Word" },
      { ferramenta: "Google Docs", foco: "Documentos na nuvem" },
      { ferramenta: "PowerPoint", foco: "Apresentações no PowerPoint" },
      { ferramenta: "Google Apresentações", foco: "Apresentações no Google" },
      { ferramenta: "Gmail · Agenda · Meet · Notion", foco: "Comunicação e organização" },
      { ferramenta: "Earth · Maps · Drive · Manutenção", foco: "Mapas, nuvem e manutenção" },
    ],
  },
  {
    titulo: "Ano 2",
    foco: "Canva, CapCut, automação (Apps Script + VBA), Excel avançado e Power BI",
    trofeu: "Produção, automação e dados",
    domina: [
      "Domina o design visual no Canva, de forma aprofundada.",
      "Edita vídeos do básico ao profissional (CapCut).",
      "Faz planilhas avançadas no Google Planilhas e automatiza com Apps Script.",
      "Domina o Excel avançado (PROCX, SE, tabelas dinâmicas).",
      "Automatiza o Excel com macros e VBA — o primeiro código de verdade.",
      "Analisa dados e cria dashboards profissionais no Power BI.",
    ],
    meses: [
      { ferramenta: "Canva", foco: "Design no Canva" },
      { ferramenta: "Canva", foco: "Canva avançado" },
      { ferramenta: "CapCut", foco: "Edição de vídeo" },
      { ferramenta: "CapCut", foco: "Vídeos mais profissionais" },
      { ferramenta: "Planilhas + Apps Script", foco: "Planilhas avançadas + automação" },
      { ferramenta: "Planilhas + Apps Script", foco: "Apps Script na prática" },
      { ferramenta: "Excel avançado", foco: "Excel avançado" },
      { ferramenta: "Excel + VBA", foco: "Macros: automatizar o Excel" },
      { ferramenta: "Excel + VBA", foco: "Programar no VBA" },
      { ferramenta: "Excel + VBA", foco: "Um sistema no Excel" },
      { ferramenta: "Excel + Power BI", foco: "Dados com Power BI" },
      { ferramenta: "Excel + Power BI", foco: "Dashboards no Power BI" },
    ],
  },
];

export const ANOS_INF_CREATE: AnoEmenta[] = ANOS_META.map((ano, ai) => ({
  titulo: ano.titulo,
  foco: ano.foco,
  trofeu: ano.trofeu,
  domina: ano.domina,
  meses: ano.meses.map((m, mi) => {
    const globalMM = ai * 12 + mi + 1;
    return {
      mes: `Mês ${mi + 1}`,
      ferramenta: m.ferramenta,
      foco: m.foco,
      cor: BLUE,
      aulas: aulasDoMes(globalMM),
    } as MesEmenta;
  }),
}));
