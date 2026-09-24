import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/word")({
  component: WordPage,
  head: () =>
    pageMeta({
      title: "Curso de Word Particular em Ribeirão Preto — Santos Tech",
      description:
        "Domine o Word profissionalmente: templates corporativos, mala direta, sumário automático e IA integrada. Curso presencial particular em Ribeirão Preto.",
      path: "/particular/cursos/word",
    }),
})

const COURSE_DATA = {
  nome: "Word Profissional",
  categoria: "Office Específico",
  tema: "office" as const,
  logo: "word",
  variante: "word",
  tagline: "Documentos que impressionam: do texto ao Word corporativo de verdade",
  targetAudience: [
    "Você perde tempo formatando documentos manualmente e quer aprender a automatizar isso",
    "Você precisa produzir relatórios, contratos, manuais e propostas com visual profissional",
    "Você trabalha em áreas jurídica, administrativa, RH ou acadêmica e lida com documentos longos",
    "Você quer criar templates reutilizáveis para padronizar a comunicação da sua empresa",
    "Você precisa dominar recursos como mala direta, sumário automático e controle de alterações",
    "Você usa o Word há anos mas ainda faz formatação na marra, sem consistência",
  ],
  tiers: [
    {
      levelName: "Word Profissional",
      totalHours: "48h",
      outcome:
        "Dominar o Word 365 como ferramenta corporativa completa — da formatação profissional e documentos longos à mala direta, formulários e automação — com Copilot e IA integrados ao fluxo de trabalho, entregando um manual técnico corporativo como projeto final",
      modules: [
        {
          title: "Formatação profissional do zero",
          topics: [
            "Estilos de parágrafo: a base da formatação consistente",
            "Criando e modificando estilos personalizados",
            "Hierarquia de títulos (Título 1 a 4) para sumário automático",
            "Seções e quebras de seção para layouts mistos",
            "Cabeçalho e rodapé com numeração automática de páginas",
          ],
        },
        {
          title: "Tabelas, elementos visuais e documentos longos",
          topics: [
            "Tabelas profissionais, com repetição de cabeçalho nas páginas seguintes",
            "Imagens com texto fluindo ao redor, SmartArt e caixas de texto para layouts diferenciados",
            "Sumário automático gerado a partir dos estilos de título, atualizado com um clique",
            "Notas de rodapé, notas de fim e legendas automáticas para figuras e tabelas",
            "Referências cruzadas e marcadores de posição para navegar em documentos longos",
          ],
        },
        {
          title: "Revisão, colaboração e templates corporativos",
          topics: [
            "Controle de alterações, comentários e comparação de versões em documentos compartilhados",
            "Verificação ortográfica e gramatical avançada, com proteção por senha e restrições de edição",
            "Criando um template (.dotx) com logo, cores e tipografia da empresa",
            "Normal.dotm e estilos globais para padronizar a identidade visual de toda a equipe",
            "Blocos de texto reutilizáveis (AutoTexto e Partes Rápidas), capa e contracapa automáticas",
          ],
        },
        {
          title: "Mala direta, formulários e automação",
          topics: [
            "Mala direta com Excel como fonte de dados: cartas, contratos e cobranças personalizadas em massa",
            "Etiquetas, envelopes e e-mails personalizados direto do Word via Outlook",
            "Regras e condicionais na mala direta (IF...THEN...ELSE) para personalização avançada",
            "Controles de conteúdo e formulários preenchíveis protegidos, com campos automáticos (autor, data, título)",
            "Gravador de macros para automatizar formatações recorrentes e gerar relatórios a partir de modelos, com exportação em PDF interativo",
          ],
        },
        {
          title: "Word com IA e o ecossistema Microsoft 365",
          topics: [
            "Copilot no Word 365: redigindo, resumindo e revisando documentos inteiros por prompt",
            "ChatGPT para gerar rascunhos e adaptar conteúdo, com boas práticas de revisão humana",
            "Colaboração em tempo real no Word Online, SharePoint e Teams, com versionamento no OneDrive",
            "Power Automate e assinatura digital: aprovações, notificações e DocuSign automatizando o fluxo do documento",
            "Projeto final: manual técnico corporativo com template próprio, sumário automático, screenshots anotados e entrega em PDF revisado",
          ],
        },
      ],
      tools: [
        "Microsoft Word 365",
        "Microsoft Excel 365",
        "Outlook",
        "OneDrive",
        "SharePoint",
        "Microsoft Copilot",
        "ChatGPT",
        "Power Automate",
      ],
    },
  ],
  faqItems: [
    {
      q: "Esse curso serve pra quem trabalha com documentos jurídicos ou acadêmicos longos?",
      a: "Sim. O curso é indicado pra quem atua nas áreas jurídica, administrativa, RH ou acadêmica e lida com documentos longos — cobre sumário automático, notas de rodapé, legendas e referências cruzadas, além de controle de alterações e comparação de versões, a base pra organizar contratos, pareceres, monografias e relatórios extensos.",
    },
    {
      q: "O curso ensina mala direta pra enviar contratos ou cobranças em massa?",
      a: "Sim. Você aprende a usar o Excel como fonte de dados pra gerar cartas personalizadas em massa — contratos, convites, cobranças —, além de etiquetas, envelopes e e-mails personalizados direto do Word via Outlook.",
    },
  ],
}

function WordPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
