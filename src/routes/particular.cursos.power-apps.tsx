import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/power-apps")({
  component: PowerAppsPage,
  head: () =>
    pageMeta({
      title: "Curso de Power Apps + Power Automate Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar aplicativos corporativos e automatizar processos com Power Apps e Power Automate em Ribeirão Preto. Sem código, resultados reais.",
      path: "/particular/cursos/power-apps",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Power Apps + Power Automate",
  categoria: "Office Específico",
  tema: "office" as const,
  logo: "powerapps",
  variante: "power-apps",
  tagline: "Crie apps corporativos e automatize processos no ecossistema Microsoft sem escrever código",
  targetAudience: [
    "Você trabalha em empresas que usam Microsoft 365 e quer digitalizar processos manuais sem depender da TI",
    "Você controla aprovações, solicitações e chamados por e-mail ou planilha e sabe que existe um jeito melhor",
    "Você quer criar aplicativos internos para sua equipe sem precisar contratar um desenvolvedor",
    "Você já usa SharePoint ou Teams no dia a dia e quer extrair muito mais valor dessas ferramentas",
    "Você é analista, coordenador ou gestor e precisa automatizar relatórios, notificações e fluxos de aprovação",
    "Você quer se destacar no mercado dominando ferramentas de automação que as empresas mais buscam em 2025",
  ],
  tiers: [
    {
      levelName: "Power Apps + Power Automate",
      ctaLabel: "Power Apps",
      totalHours: "48h",
      outcome:
        "Criar Canvas Apps conectados ao SharePoint e Excel, automatizar processos do fluxo simples ao RPA com Power Automate Desktop, estruturar dados empresariais no Dataverse e aplicar IA com AI Builder e Copilot — pronto para digitalizar processos reais da empresa de ponta a ponta",
      modules: [
        {
          title: "Fundamentos da Power Platform e Primeiro Canvas App",
          topics: [
            "Visão geral da Power Platform — Power Apps, Power Automate, Power BI e Copilot Studio — e quando usar Canvas App vs Model-Driven App",
            "Layout responsivo com containers e grupos, para desktop e celular",
            "Conectando o app ao SharePoint Online e ao Excel no OneDrive",
            "Componentes Gallery e Form: listar, criar, editar e visualizar registros",
            "Publicando e compartilhando o app com os usuários da organização",
          ],
        },
        {
          title: "Fórmulas e Lógica no Power Apps",
          topics: [
            "Funções essenciais: If, Filter, LookUp, Search e Sort",
            "Manipulando dados: Patch para salvar, Remove para excluir registros",
            "Variáveis locais com Set e coleções em memória com ClearCollect e Collect",
            "Navegação entre telas passando contexto com Navigate e Back",
            "Tratamento de erros com IsBlank, IsError e notificações ao usuário",
          ],
        },
        {
          title: "Power Automate: Fluxos e Integração com Power Apps",
          topics: [
            "Tipos de fluxo: automático, instantâneo e agendado — quando usar cada um",
            "Fluxo: novo item no SharePoint dispara e-mail de notificação automática",
            "Processo de aprovação com botões de Aprovar e Rejeitar no Outlook e Teams",
            "Condições, loops e expressões em fluxos, partindo de templates prontos",
            "Chamando um fluxo a partir de um botão no Canvas App e recebendo a resposta com Respond to a PowerApp",
          ],
        },
        {
          title: "Dataverse: Dados e Segurança Empresarial",
          topics: [
            "Criando e relacionando tabelas no Microsoft Dataverse",
            "Model-Driven Apps com formulários, views e dashboards gerados automaticamente",
            "Regras de negócio para validações e automações sem código na camada de dados",
            "Segurança baseada em funções: perfis de acesso e times no Dataverse",
            "Migrando dados de SharePoint e Excel para o Dataverse",
          ],
        },
        {
          title: "Automação RPA com Power Automate Desktop",
          topics: [
            "Instalando e configurando o Power Automate Desktop para automação local",
            "Gravador de UI para capturar ações em aplicativos legados e sistemas sem API",
            "Automatizando tarefas no SAP, Excel desktop e sites via navegador",
            "Fluxos híbridos: integrando automação desktop com fluxos cloud",
            "Agendando e monitorando robôs RPA pelo portal de gerenciamento",
          ],
        },
        {
          title: "Inteligência Artificial no Power Apps e Projeto Final",
          topics: [
            "AI Builder: modelo de leitura de documentos para extrair dados de NF e contratos",
            "Análise de sentimento para triagem automática de feedbacks e chamados",
            "Copilot no Power Apps: gerando e refinando um app a partir de uma descrição textual",
            "Projeto final: sistema completo (app + fluxo de aprovação multinível + painel de acompanhamento em Power BI ou Dataverse) para um processo real da empresa",
            "Apresentação da solução e publicação para os usuários finais",
          ],
        },
      ],
      tools: [
        "Power Apps",
        "Power Automate",
        "Power Automate Desktop",
        "AI Builder",
        "Dataverse",
        "SharePoint Online",
        "Microsoft Teams",
        "Outlook 365",
      ],
    },
  ],
  faqItems: [
    {
      q: "Preciso saber programar pra criar apps com Power Apps?",
      a: "Não. Power Apps e Power Automate são ferramentas low-code do ecossistema Microsoft — você cria aplicativos e automações sem escrever código, usando fórmulas parecidas com as do Excel.",
    },
    {
      q: "Já uso SharePoint ou Teams no trabalho — esse curso ajuda a aproveitar melhor essas ferramentas?",
      a: "Sim. Boa parte do curso conecta diretamente com o que você já usa: apps ligados a listas do SharePoint, fluxos que notificam pelo Teams e Outlook, e automações que eliminam processos hoje feitos por e-mail ou planilha.",
    },
  ],
}

function PowerAppsPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
