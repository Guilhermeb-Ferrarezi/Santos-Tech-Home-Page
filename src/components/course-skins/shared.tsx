import type { ReactNode } from "react";
import {
  User,
  CalendarClock,
  Video,
  Award,
  Dumbbell,
  Route,
  BookOpen,
  RefreshCw,
  Wifi,
  TrendingUp,
  Building2,
} from "lucide-react";
import type { CourseData, Tier } from "@/components/particular-course-page";
import type { CourseTheme, CourseThemeKey } from "@/lib/course-themes";

/**
 * Conteúdo compartilhado entre o template padrão de /particular/cursos/* e as
 * "peles" por categoria (course-skins/*). Preço, ritmo e textos institucionais
 * vivem aqui pra não divergirem entre os layouts.
 */

// ── Preços e ritmo por nível ───────────────────────────────────────────────

export const TIER_META: Record<string, { price: number; aulas: string; intensivo: string; padrao: string }> = {
  Essencial: { price: 1970, aulas: "24 aulas", intensivo: "~1 mês", padrao: "~3 meses" },
  Intermediário: { price: 3940, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Profissional + IA": { price: 5910, aulas: "72 aulas", intensivo: "~3 meses", padrao: "~9 meses" },
  // Cursos com plano único: mesma faixa de preço do Essencial, com o nome do próprio curso no lugar do nível
  "Montagem e Manutenção": { price: 1970, aulas: "24 aulas", intensivo: "~1 mês", padrao: "~3 meses" },
  "Canva Pro": { price: 1970, aulas: "24 aulas", intensivo: "~1 mês", padrao: "~3 meses" },
  CapCut: { price: 1970, aulas: "24 aulas", intensivo: "~1 mês", padrao: "~3 meses" },
  "Impressão 3D Completa": { price: 1970, aulas: "24 aulas", intensivo: "~1 mês", padrao: "~3 meses" },
  // Curso de plano único, mas categoria técnica (taxa acima do piso do Essencial)
  "Git e GitHub": { price: 2640, aulas: "24 aulas", intensivo: "~1 mês", padrao: "~3 meses" },
  // Cursos profundos com plano único (preço/ritmo próprios, fora da faixa padrão do Essencial/Intermediário)
  // — conversão de 2-3 tiers pra 1, ver docs/superpowers/specs/2026-09-23-cursos-particulares-plano-unico-design.md
  "Adobe Premiere": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Suporte Técnico": { price: 5520, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Redes e Infraestrutura": { price: 6240, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  Cibersegurança: { price: 7200, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  Linux: { price: 5760, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Modelagem 3D": { price: 7200, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  AutoCAD: { price: 6720, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Revit BIM": { price: 7200, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  // Cursos de plano único, categoria símples (mesma taxa/ritmo do Premiere — R$ 82,70/h)
  Informática: { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Photoshop + Illustrator": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "DaVinci Resolve": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Marketing Digital": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Meta Ads": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Google Ads": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "TikTok Ads": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  Copywriting: { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Funil de Vendas": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  SEO: { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Redes Sociais": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "E-commerce": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  // Grupo Office (taxa aprovada pelo Henrique em 23/09)
  "Pacote Office": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Excel Avançado": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Excel + Power BI": { price: 5520, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Excel + IA": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Word Profissional": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  PowerPoint: { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Power BI": { price: 5520, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Power Apps + Power Automate": { price: 5520, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  // Grupo Inteligência Artificial (taxa aprovada pelo Henrique em 23/09 —
  // ia/agentes-ia/ia-visual formalizam o valor de pricePerAula já cobrado
  // na prática, 109,90/h; RAG sobe pra 115/h por ser mais avançado)
  "IA: Essencial ao Profissional com Agentes": { price: 5275, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Agentes de IA com N8N e LLMs": { price: 5275, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  RAG: { price: 5520, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "IA para Criadores": { price: 5275, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  ChatGPT: { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Criação de Conteúdo com IA": { price: 3970, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  // Grupo Programação (taxa aprovada pelo Henrique em 23/09; TypeScript
  // formaliza o pricePerAula já cobrado na prática, 109,90/h, mesmo padrão
  // do grupo Inteligência Artificial)
  "Lógica de Programação": { price: 5280, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Python para Automações": { price: 5760, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "APIs e Integrações com Python": { price: 6240, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  TypeScript: { price: 5275, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Automações + N8N": { price: 5520, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Automações No-Code — Make": { price: 5280, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Banco de Dados com SQL": { price: 5760, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Desenvolvimento Web Front-End": { price: 6240, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Desenvolvimento Web Back-End": { price: 6480, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Full Stack Web Developer": { price: 7200, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Desenvolvimento de Aplicativos": { price: 6720, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  "Desenvolvimento de Jogos: Unity e Godot": { price: 6720, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
  ADS: { price: 8640, aulas: "48 aulas", intensivo: "~3 meses", padrao: "~6 meses" },
};

// ── Margem embutida e parcelamento (decisão do Henrique, 23/09) ────────────
// Todo curso particular embute 15% sobre o valor-base acima (atual e futuro)
// e é apresentado como parcela em até 12x sem juros no cartão — a margem em
// si nunca aparece pro aluno como "15%" ou "juros". Ver spec:
// docs/superpowers/specs/2026-09-23-cursos-particulares-plano-unico-design.md
export const MARKUP = 1.15;
export const INSTALLMENTS = 12;

export function formatBRL(value: number): string {
  return `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function getInvestimento(basePrice: number) {
  const total = basePrice * MARKUP;
  return {
    totalFormatted: formatBRL(total),
    parcelaFormatted: formatBRL(total / INSTALLMENTS),
  };
}

// ── Diferenciais hardcoded ─────────────────────────────────────────────────

export const DIFERENCIAIS = [
  {
    icon: User,
    title: "Aula Individual",
    desc: "Só você e o professor — foco total, sem fila de dúvidas.",
  },
  {
    icon: CalendarClock,
    title: "Horário Flexível",
    desc: "Você define o dia, o horário e a frequência — sua rotina manda.",
  },
  {
    icon: RefreshCw,
    title: "Reagendamento sem Custo",
    desc: "Precisou faltar? Avisa e remarcamos — sem burocracia, sem penalidade.",
  },
  {
    icon: Video,
    title: "Aulas Gravadas a Pedido",
    desc: "Solicite a gravação de qualquer aula e revise quando quiser.",
  },
  {
    icon: Wifi,
    title: "Aula Online se Precisar",
    desc: "Se não puder vir presencialmente, a aula acontece online ao vivo — ou é gravada e enviada.",
  },
  {
    icon: Award,
    title: "Certificado de Conclusão",
    desc: "Emitido pela Santos Tech ao fim do curso.",
  },
  {
    icon: Dumbbell,
    title: "100% Prático",
    desc: "Mão na massa desde a primeira aula.",
  },
  {
    icon: Route,
    title: "Trilha Estruturada",
    desc: "Do básico ao projeto final sem lacunas.",
  },
  {
    icon: BookOpen,
    title: "Exercícios Contextualizados",
    desc: "Exercícios semanais alinhados ao tópico da sua aula — você pratica exatamente o que acabou de aprender.",
  },
  {
    icon: TrendingUp,
    title: "Conteúdo Sempre Atualizado",
    desc: "Currículo revisado continuamente para refletir o que o mercado realmente exige hoje.",
  },
];

// ── Guia de orientação por nível ──────────────────────────────────────────

export const TIER_GUIDE: Record<string, string> = {
  Essencial: "Nunca usei, sei muito pouco ou quero construir uma base sólida do zero",
  Intermediário: "Já uso no dia a dia, mas quero ir mais fundo e trabalhar de forma mais eficiente",
  "Profissional + IA": "Quero dominar tudo — incluindo os recursos de inteligência artificial",
};

// ── Formato das aulas ─────────────────────────────────────────────────────

export const FORMATO = [
  {
    icon: User,
    title: "Aula Individual",
    desc: "Você não compete atenção com ninguém. O professor é só seu durante toda a aula.",
  },
  {
    icon: CalendarClock,
    title: "Horário Flexível",
    desc: "Encaixa na sua rotina — você agenda o dia e horário que funciona pra você.",
  },
  {
    icon: Building2,
    title: "100% Presencial",
    desc: "Ribeirão Preto/SP — Av. Nove de Julho, 1992 · Jardim América.",
  },
];

export const CRITERIOS_PROFESSOR = [
  "Competência técnica comprovada nas ferramentas que ensina",
  "Experiência prática no mercado — não só teoria",
  "Habilidade pedagógica exigida: não basta saber, precisa saber ensinar",
  "Atualização contínua com as demandas reais do mercado",
];

export const CUSTOS_UNICOS = [
  { label: "Matrícula", value: "R$ 199,90" },
  { label: "Material didático", value: "R$ 389,90" },
];

export const FORMAS_PAGAMENTO =
  "Pix · Crédito em até 12x sem juros · Débito · Boleto · Dinheiro em espécie";

export const FORMAS_PAGAMENTO_DETALHE =
  "Combinações aceitas — entrada no Pix e o restante no crédito, por exemplo. Boleto parcelado de acordo com a duração do seu curso.";


/** Texto do bloco "Não se encaixa em nenhum nível?" — só aparece em curso com mais de um nível. */
export const TRILHA_PERSONALIZADA =
  "Não importa se você está no zero absoluto, já domina parte do conteúdo ou quer pular etapas que já conhece. Como as aulas são individuais, o professor avalia o seu nível na primeira aula e monta o percurso certo pra você — sem revisitar o que você já sabe, sem pular o que você ainda precisa aprender.";

export const WHATSAPP_EXIBICAO = "(16) 99257-8710";

/**
 * Preço/ritmo de um nível, com o mesmo cálculo do template padrão: preço-base
 * (ou `pricePerAula` × horas), margem embutida e parcela em 12x.
 */
export function tierMeta(course: CourseData, t: Tier) {
  const base = TIER_META[t.levelName];
  const basePrice = course.pricePerAula ? parseInt(t.totalHours) * course.pricePerAula : base?.price;
  if (!base && basePrice == null) return undefined;
  return {
    aulas: base?.aulas ?? t.totalHours,
    intensivo: base?.intensivo ?? "—",
    padrao: base?.padrao ?? "—",
    investimento: basePrice != null ? getInvestimento(basePrice) : null,
  };
}

export type SkinProps = {
  course: CourseData;
  tema: CourseThemeKey;
  theme: CourseTheme;
  logo: string;
  whatsappUrl: string;
  selectedTier: number;
  onSelectTier: (i: number) => void;
  /** Perguntas do curso + genéricas, na ordem de exibição. */
  faq: { q: string; a: string; cta?: boolean }[];
  children?: ReactNode;
};
