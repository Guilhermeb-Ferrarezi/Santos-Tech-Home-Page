import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/word")({
  component: WordPage,
  head: () =>
    pageMeta({
      title: "Curso de Word para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Domine o Word profissionalmente: templates corporativos, mala direta, sumário automático e IA integrada. Curso presencial para adultos em Ribeirão Preto.",
      path: "/adultos/cursos/word",
    }),
})

const COURSE_DATA = {
  nome: "Word Profissional",
  categoria: "Office Específico",
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
      label: "1 mês",
      levelName: "Essencial",
      totalHours: "20h",
      outcome:
        "Produzir documentos profissionais com formatação consistente, sumário automático e revisão eficiente",
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
          title: "Tabelas e elementos visuais",
          topics: [
            "Criando e formatando tabelas profissionais",
            "Repetição de cabeçalho de tabela em páginas seguintes",
            "Inserindo e formatando imagens com texto fluindo ao redor",
            "SmartArt para organogramas e fluxogramas",
            "Caixas de texto e formas para layouts diferenciados",
          ],
        },
        {
          title: "Documentos longos: sumário, índice e notas",
          topics: [
            "Sumário automático gerado a partir dos estilos de título",
            "Atualizando o sumário com um clique após edições",
            "Notas de rodapé e notas de fim para referências",
            "Legendas automáticas para figuras e tabelas",
            "Marcadores de posição e referências cruzadas internas",
          ],
        },
        {
          title: "Revisão e colaboração",
          topics: [
            "Controle de alterações: rastreando edições por colaborador",
            "Comentários e respostas em documentos compartilhados",
            "Comparando duas versões de um documento",
            "Verificação ortográfica e gramatical avançada",
            "Protegendo documentos com senha e restrições de edição",
          ],
        },
      ],
      tools: ["Microsoft Word 365", "OneDrive"],
    },
    {
      label: "2 meses",
      levelName: "Intermediário",
      totalHours: "40h",
      outcome:
        "Criar templates corporativos, dominar mala direta e produzir documentos técnicos com automação",
      modules: [
        {
          title: "Templates e identidade corporativa",
          topics: [
            "Criando um template (.dotx) com logo, cores e tipografia da empresa",
            "Normal.dotm: personalizando o template padrão do Word",
            "Salvando estilos globais para toda a equipe",
            "Construção de blocos de texto reutilizáveis (AutoTexto e Partes Rápidas)",
            "Capa, contracapa e folha de rosto automáticas",
          ],
        },
        {
          title: "Mala direta e automação de documentos",
          topics: [
            "Mala direta com Excel como fonte de dados",
            "Cartas personalizadas em massa: contratos, convites, cobranças",
            "Etiquetas e envelopes com dados do Excel",
            "E-mails personalizados direto do Word via Outlook",
            "Regras e condicionais na mala direta (IF...THEN...ELSE)",
          ],
        },
        {
          title: "Formulários e documentos interativos",
          topics: [
            "Controles de conteúdo: caixas de texto, listas e seletores de data",
            "Criando formulários preenchíveis protegidos",
            "Campos de formulário para coleta de informações padronizadas",
            "Propriedades de documento e campos automáticos (autor, data, título)",
            "Convertendo formulários Word para PDF interativo",
          ],
        },
        {
          title: "Documentos técnicos e acadêmicos",
          topics: [
            "Gerenciamento de referências bibliográficas integrado",
            "Citações no padrão ABNT com o complemento Mendeley ou Zotero",
            "Numeração de equações e fórmulas matemáticas",
            "Índice remissivo e glossário automático",
            "Estrutura de livro: capítulos com numeração independente",
          ],
        },
        {
          title: "Macros e automação no Word",
          topics: [
            "Gravador de macros para formatação automática recorrente",
            "VBA básico no Word: abrindo, editando e salvando documentos por código",
            "Criando botões na faixa de opções para macros próprias",
            "Automatizando a geração de relatórios a partir de modelos",
            "Exportando para PDF com configurações específicas via macro",
          ],
        },
      ],
      tools: [
        "Microsoft Word 365",
        "Microsoft Excel 365",
        "Outlook",
        "OneDrive",
      ],
    },
    {
      label: "3 meses",
      levelName: "Profissional + IA",
      totalHours: "60h",
      outcome:
        "Dominar Word como ferramenta corporativa completa, integrar IA na redação e entregar um manual técnico como projeto final",
      modules: [
        {
          title: "Word + Copilot e Inteligência Artificial",
          topics: [
            "Copilot no Word 365: redigindo documentos inteiros por prompt",
            "Resumindo documentos longos com IA em segundos",
            "Revisão de estilo e tom com sugestões de IA",
            "ChatGPT para geração de primeiros rascunhos e adaptação de conteúdo",
            "Grammarly e Languagetool integrados ao fluxo de revisão",
            "Boas práticas: quando confiar na IA e quando revisar manualmente",
          ],
        },
        {
          title: "Integração Word com o ecossistema Microsoft 365",
          topics: [
            "Word Online e edição colaborativa em tempo real no SharePoint",
            "Versionamento de documentos no OneDrive e recuperação de versões antigas",
            "Power Automate: aprovações e notificações automáticas para documentos",
            "Assinatura digital com Microsoft Entra e DocuSign",
            "Integrando Word ao Teams para revisão colaborativa",
          ],
        },
        {
          title: "VBA avançado no Word",
          topics: [
            "Manipulando parágrafos, seções e estilos via código",
            "Lendo dados de planilhas Excel e preenchendo documentos Word automaticamente",
            "Gerando múltiplos contratos ou relatórios em lote com VBA",
            "UserForms no Word para entrada de dados guiada",
            "Distribuindo soluções como suplementos (.dotm com macros)",
          ],
        },
        {
          title: "Projeto final: manual técnico corporativo",
          topics: [
            "Definindo estrutura e escopo do manual (produto, processo ou procedimento)",
            "Aplicando template corporativo com identidade visual consistente",
            "Sumário automático, índice remissivo e referências cruzadas",
            "Inserindo screenshots anotados e fluxogramas SmartArt",
            "Revisão colaborativa com controle de alterações e entrega em PDF profissional",
          ],
        },
      ],
      tools: [
        "Microsoft Word 365",
        "Microsoft Copilot",
        "Power Automate",
        "OneDrive",
        "SharePoint",
        "ChatGPT",
      ],
    },
  ],
}

function WordPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
