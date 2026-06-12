import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/power-apps")({
  component: PowerAppsPage,
  head: () =>
    pageMeta({
      title: "Curso de Power Apps + Power Automate para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a criar aplicativos corporativos e automatizar processos com Power Apps e Power Automate em Ribeirão Preto. Sem código, resultados reais.",
      path: "/adultos/cursos/power-apps",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Power Apps + Power Automate",
  categoria: "Office Específico",
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
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Criar Canvas Apps conectados ao SharePoint e Excel, e montar fluxos automáticos de aprovação e notificação no Power Automate",
      modules: [
        {
          title: "Microsoft Power Platform",
          topics: [
            "Visão geral: Power Apps, Power Automate, Power BI e Copilot Studio",
            "Licenciamento e planos disponíveis no Microsoft 365",
            "Canvas App vs Model-Driven App vs Power Pages: quando usar cada um",
            "Navegando pelo portal make.powerapps.com e make.powerautomate.com",
            "Conectores nativos e ambientes de desenvolvimento vs produção",
          ],
        },
        {
          title: "Criando o Primeiro Canvas App",
          topics: [
            "Layout responsivo para desktop e celular com containers e grupos",
            "Conectando o app ao SharePoint Online e ao Excel no OneDrive",
            "Componente Gallery para exibir listas de registros com filtro e busca",
            "Componente Form para criar, editar e visualizar registros",
            "Publicando e compartilhando o app com usuários da organização",
          ],
        },
        {
          title: "Fórmulas Power Apps",
          topics: [
            "Funções essenciais: If, Filter, LookUp, Search e Sort",
            "Manipulando dados: Patch para salvar, Remove para excluir registros",
            "Variáveis locais com Set e coleções em memória com ClearCollect e Collect",
            "Navegação entre telas passando contexto com Navigate e Back",
            "Tratamento de erros com IsBlank, IsError e notificações ao usuário",
          ],
        },
        {
          title: "Power Automate: Primeiros Fluxos",
          topics: [
            "Tipos de fluxo: automático, instantâneo e agendado — quando usar cada um",
            "Fluxo: novo item no SharePoint dispara e-mail de notificação automática",
            "Processo de aprovação com botões de Aprovar e Rejeitar no Outlook e Teams",
            "Usando condições, loops e expressões básicas em fluxos",
            "Aproveitando templates prontos e adaptando para a sua realidade",
          ],
        },
        {
          title: "Integração Power Apps + Power Automate",
          topics: [
            "Chamando um fluxo do Power Automate a partir de um botão no Canvas App",
            "Enviando dados do app para o fluxo via parâmetros de entrada",
            "Recebendo resposta do fluxo de volta no app com Respond to a PowerApp",
            "Caso prático: formulário de solicitação com aprovação automática por e-mail",
            "Caso prático: notificação no Teams ao registrar novo item no app",
          ],
        },
      ],
      tools: ["Power Apps", "Power Automate", "SharePoint Online", "Microsoft Teams", "Outlook 365"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Construir soluções empresariais completas com Dataverse, RPA Desktop, IA Builder e integrações premium, entregando um sistema de ponta a ponta",
      modules: [
        {
          title: "Power Apps com Dataverse",
          topics: [
            "Criando e relacionando tabelas no Microsoft Dataverse",
            "Model-Driven Apps com formulários, views e dashboards gerados automaticamente",
            "Regras de negócio para validações e automações sem código na camada de dados",
            "Segurança baseada em funções: perfis de acesso e times no Dataverse",
            "Migrando dados de SharePoint/Excel para o Dataverse com fluxos de importação",
          ],
        },
        {
          title: "Power Automate Desktop — RPA",
          topics: [
            "Instalando e configurando o Power Automate Desktop para automação local",
            "Gravador de UI para capturar ações em aplicativos legados e sistemas sem API",
            "Automatizando tarefas no SAP, Excel desktop e sites via navegador",
            "Fluxos híbridos: integrando automação desktop com fluxos cloud",
            "Agendando e monitorando robôs RPA com o portal de gerenciamento",
          ],
        },
        {
          title: "Power Apps com IA",
          topics: [
            "AI Builder: modelo de leitura de documentos para extrair dados de NF e contratos",
            "Reconhecimento de objetos e detecção de imagens em apps corporativos",
            "Análise de sentimento para triagem automática de feedbacks e chamados",
            "Copilot no Power Apps: gerando um app completo a partir de uma descrição textual",
            "Refinando e personalizando o app gerado pelo Copilot com ajustes manuais",
          ],
        },
        {
          title: "Fluxos Empresariais e Integrações",
          topics: [
            "Conectores premium: integrando com Dynamics 365 e Salesforce",
            "Fluxos de processo de negócio para guiar usuários em etapas sequenciais",
            "Variáveis de ambiente para parametrizar soluções entre ambientes",
            "Empacotando e fazendo deploy de soluções entre ambientes dev, teste e produção",
            "Monitoramento, alertas de falha e boas práticas de governança de fluxos",
          ],
        },
        {
          title: "Projeto Final: Sistema Completo",
          topics: [
            "Levantamento de requisitos e modelagem do processo escolhido (compras, ponto ou chamados)",
            "Construindo o Canvas App ou Model-Driven App com todas as telas e validações",
            "Criando o fluxo de aprovação multinível com notificações no Teams e e-mail",
            "Dashboard de acompanhamento integrado com Power BI ou views do Dataverse",
            "Apresentação da solução, documentação básica e publicação para usuários reais",
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
        "Power BI",
      ],
    },
  ],
}

function PowerAppsPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
