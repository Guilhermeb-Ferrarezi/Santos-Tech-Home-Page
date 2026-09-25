/**
 * Preço-base e ritmo por nível/curso particular.
 *
 * ⚠️ Módulo LEVE de propósito: só dados. O hub /particular precisa só disto
 * (ritmo dos cards) e não deve puxar ícones nem textos de `course-skins/shared`
 * (auditoria de performance de 24/09/2026, performance-cwv-05). `shared.tsx`
 * reexporta `TIER_META`, então quem já importava de lá continua funcionando.
 */
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
