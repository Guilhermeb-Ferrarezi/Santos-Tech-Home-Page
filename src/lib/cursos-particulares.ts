/**
 * Catálogo dos cursos particulares (`/particular/cursos/*`): slug + nome do curso.
 *
 * Fonte do ItemList do hub `/particular` (JSON-LD). O `nome` é o mesmo `COURSE_DATA.nome`
 * da página do curso — que vira o `name` do Course no JSON-LD dela —, para a lista e a
 * página de detalhe falarem da mesma entidade. A ordem segue a sidebar de `/particular`.
 *
 * ⚠️ Duplicação conhecida, a eliminar: a sidebar (`GRUPOS` em `src/routes/particular.tsx`)
 * e o `COURSE_DATA.nome` de cada rota repetem estes dados. O próximo passo é a sidebar
 * consumir este módulo. Até lá, `cursos-particulares.test.ts` pega qualquer divergência
 * (rota nova fora do catálogo, nome diferente da página, URL fora do canonical/sitemap).
 *
 * Só `import type` aqui, de propósito: o teste roda direto no Node, sem o alias `@/`.
 */
import type { FileRoutesByFullPath } from "@/routeTree.gen";

type RotaCursoParticular = Extract<keyof FileRoutesByFullPath, `/particular/cursos/${string}`>;

/** Slug de uma rota de curso particular que existe (vem da árvore de rotas gerada). */
export type SlugCursoParticular =
  RotaCursoParticular extends `/particular/cursos/${infer Slug}` ? Slug : never;

export const CURSOS_PARTICULARES = [
  // Informática
  { slug: "informatica", nome: "Informática" },
  // Office
  { slug: "office", nome: "Pacote Office" },
  { slug: "excel-power-bi", nome: "Excel + Power BI: Da Planilha ao Dashboard" },
  { slug: "excel", nome: "Excel Avançado" },
  { slug: "excel-ia", nome: "Excel + IA" },
  { slug: "word", nome: "Word Profissional" },
  { slug: "powerpoint", nome: "PowerPoint e Storytelling Visual" },
  { slug: "power-bi", nome: "Power BI" },
  { slug: "power-apps", nome: "Power Apps + Power Automate" },
  // Inteligência Artificial
  { slug: "ia", nome: "Inteligência Artificial: do Essencial ao Profissional com Agentes" },
  { slug: "agentes-ia", nome: "Agentes de IA com N8N e LLMs" },
  { slug: "rag", nome: "RAG — IA com seus Próprios Dados" },
  { slug: "ia-visual", nome: "IA para Criadores: Imagem, Vídeo e Áudio" },
  { slug: "chatgpt", nome: "ChatGPT e IA para Profissionais" },
  { slug: "conteudo-ia", nome: "Criação de Conteúdo com IA" },
  // Programação
  { slug: "logica", nome: "Lógica de Programação" },
  { slug: "python", nome: "Python para Automações" },
  { slug: "python-apis", nome: "APIs e Integrações com Python" },
  { slug: "typescript", nome: "TypeScript para Desenvolvimento Moderno" },
  { slug: "git", nome: "Git e GitHub para Profissionais" },
  { slug: "n8n", nome: "Automações + N8N" },
  { slug: "make", nome: "Automações No-Code — Make" },
  { slug: "sql", nome: "Banco de Dados com SQL" },
  { slug: "frontend", nome: "Desenvolvimento Web Front-End" },
  { slug: "backend", nome: "Desenvolvimento Web Back-End" },
  { slug: "fullstack", nome: "Full Stack Web Developer" },
  { slug: "mobile", nome: "Desenvolvimento de Aplicativos" },
  { slug: "jogos", nome: "Desenvolvimento de Jogos: Unity e Godot" },
  { slug: "ads", nome: "ADS — Análise e Desenvolvimento de Sistemas" },
  // T.I
  { slug: "suporte", nome: "Suporte Técnico / Help Desk" },
  { slug: "manutencao", nome: "Montagem e Manutenção de Computadores" },
  { slug: "redes", nome: "Redes e Infraestrutura" },
  { slug: "ciberseguranca", nome: "Cibersegurança" },
  { slug: "linux", nome: "Linux" },
  // Universo 3D
  { slug: "modelagem-3d", nome: "Modelagem 3D: Blender e SketchUp" },
  { slug: "impressao-3d", nome: "Impressão 3D: Do Fatiamento ao Produto Final" },
  { slug: "autocad", nome: "AutoCAD" },
  { slug: "revit", nome: "Revit BIM para Arquitetura" },
  // Design & Criação
  { slug: "canva", nome: "Design Gráfico — Canva Pro" },
  { slug: "photoshop", nome: "Design Gráfico — Photoshop + Illustrator" },
  { slug: "capcut", nome: "Edição de Vídeo — CapCut" },
  { slug: "davinci", nome: "Edição de Vídeo — DaVinci Resolve" },
  { slug: "premiere", nome: "Edição de Vídeo — Adobe Premiere" },
  // Marketing & Negócios
  { slug: "marketing", nome: "Marketing Digital" },
  { slug: "meta-ads", nome: "Meta Ads — Facebook e Instagram" },
  { slug: "google-ads", nome: "Google Ads" },
  { slug: "tiktok-ads", nome: "TikTok Ads" },
  { slug: "copywriting", nome: "Copywriting & Persuasão" },
  { slug: "funil-vendas", nome: "Funil de Vendas + CRM" },
  { slug: "seo", nome: "SEO — Otimização para Buscadores" },
  { slug: "redes-sociais", nome: "Gestão de Redes Sociais" },
  { slug: "ecommerce", nome: "E-commerce & Vendas Online" },
] as const satisfies ReadonlyArray<{ slug: SlugCursoParticular; nome: string }>;

/** Path canônico do curso (o mesmo do `pageMeta` da rota e do sitemap). */
export function cursoParticularPath(slug: SlugCursoParticular): string {
  return `/particular/cursos/${slug}`;
}
