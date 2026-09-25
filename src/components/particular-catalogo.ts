import type { CourseThemeKey } from "@/lib/course-themes";
import type { FileRoutesByTo } from "@/routeTree.gen";

/**
 * Catálogo dos cursos particulares por área — a lista que a landing /particular
 * mostra em "Cursos por área" (auditoria de UI/UX 24/09/2026, F218: as pílulas
 * de categoria levavam a UM curso, não à lista da área).
 *
 * Fonte única da sidebar de `src/routes/particular.tsx` e da landing. Curso novo entra aqui
 * e em `public/sitemap.xml`.
 *
 * Módulo só de dados/tipos: a landing importa sem puxar ícones nem componentes.
 */

/**
 * Slug de um curso particular que existe como rota (`particular.cursos.<slug>.tsx`).
 * Vem da árvore de rotas gerada: slug digitado errado ou de rota removida quebra
 * o type-check em vez de virar link 404.
 */
export type CursoSlug = keyof FileRoutesByTo extends infer P
  ? P extends `/particular/cursos/${infer S}`
    ? S
    : never
  : never;

export type GrupoParticular = {
  /** Bate com `CourseThemeKey` (tema/cor da categoria) e forma a âncora `#area-<id>` da landing. */
  id: CourseThemeKey;
  label: string;
  cursos: { slug: CursoSlug; nome: string; legenda?: string }[];
};

export const GRUPOS_PARTICULAR: GrupoParticular[] = [
  {
    id: "informatica",
    label: "Informática",
    cursos: [{ slug: "informatica", nome: "Informática" }],
  },
  {
    id: "office",
    label: "Office",
    cursos: [
      { slug: "office", nome: "Pacote Office" },
      { slug: "excel-power-bi", nome: "Excel + Power BI" },
      { slug: "excel", nome: "Excel" },
      { slug: "excel-ia", nome: "Excel + IA" },
      { slug: "word", nome: "Word" },
      { slug: "powerpoint", nome: "PowerPoint" },
      { slug: "power-bi", nome: "Power BI" },
      { slug: "power-apps", nome: "Power Apps + Power Automate" },
    ],
  },
  {
    id: "ia",
    label: "Inteligência Artificial",
    cursos: [
      { slug: "ia", nome: "Inteligência Artificial" },
      { slug: "agentes-ia", nome: "Agentes de IA com N8N e LLMs" },
      { slug: "rag", nome: "RAG", legenda: "IA com seus Próprios Dados" },
      { slug: "ia-visual", nome: "IA para Criadores: Imagem, Vídeo e Áudio" },
      { slug: "chatgpt", nome: "ChatGPT e IA para Profissionais" },
      { slug: "conteudo-ia", nome: "Criação de Conteúdo com IA" },
    ],
  },
  {
    id: "programacao",
    label: "Programação",
    cursos: [
      { slug: "logica", nome: "Lógica de Programação" },
      { slug: "python", nome: "Python para Automações" },
      { slug: "python-apis", nome: "APIs e Integrações com Python" },
      { slug: "typescript", nome: "TypeScript para Desenvolvimento Moderno" },
      { slug: "git", nome: "Git e GitHub para Profissionais" },
      { slug: "n8n", nome: "Automações + N8N" },
      { slug: "make", nome: "Automações No-Code Make" },
      { slug: "sql", nome: "Banco de Dados com SQL" },
      { slug: "frontend", nome: "Desenvolvimento Web Front-End" },
      { slug: "backend", nome: "Desenvolvimento Web Back-End" },
      { slug: "fullstack", nome: "Full Stack" },
      { slug: "mobile", nome: "Desenvolvimento de Aplicativos" },
      { slug: "jogos", nome: "Desenvolvimento de Jogos" },
      { slug: "ads", nome: "ADS", legenda: "Desenvolvimento de Sistemas" },
    ],
  },
  {
    id: "ti",
    label: "T.I",
    cursos: [
      { slug: "suporte", nome: "Suporte Técnico / Help Desk" },
      { slug: "manutencao", nome: "Montagem e Manutenção" },
      { slug: "redes", nome: "Redes e Infraestrutura" },
      { slug: "ciberseguranca", nome: "Cibersegurança" },
      { slug: "linux", nome: "Linux Essencial" },
    ],
  },
  {
    id: "universo-3d",
    label: "Universo 3D",
    cursos: [
      { slug: "modelagem-3d", nome: "Modelagem 3D" },
      { slug: "impressao-3d", nome: "Impressão 3D" },
      { slug: "autocad", nome: "AutoCAD" },
      { slug: "revit", nome: "Revit" },
    ],
  },
  {
    id: "design",
    label: "Design & Criação",
    cursos: [
      { slug: "canva", nome: "Canva Pro" },
      { slug: "photoshop", nome: "Photoshop + Illustrator" },
      { slug: "capcut", nome: "Edição de Vídeo", legenda: "CapCut" },
      { slug: "davinci", nome: "Edição de Vídeo", legenda: "DaVinci Resolve" },
      { slug: "premiere", nome: "Edição de Vídeo", legenda: "Adobe Premiere" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Negócios",
    cursos: [
      { slug: "marketing", nome: "Marketing Digital" },
      { slug: "meta-ads", nome: "Meta Ads", legenda: "Facebook e Instagram" },
      { slug: "google-ads", nome: "Google Ads" },
      { slug: "tiktok-ads", nome: "TikTok Ads" },
      { slug: "copywriting", nome: "Copywriting & Persuasão" },
      { slug: "funil-vendas", nome: "Funil de Vendas + CRM" },
      { slug: "seo", nome: "SEO", legenda: "Otimização para Buscadores" },
      { slug: "redes-sociais", nome: "Gestão de Redes Sociais" },
      { slug: "ecommerce", nome: "E-commerce & Vendas Online" },
    ],
  },
];

/** Âncora da área na landing /particular (lista "Cursos por área"). */
export const ancoraArea = (id: CourseThemeKey) => `area-${id}`;
