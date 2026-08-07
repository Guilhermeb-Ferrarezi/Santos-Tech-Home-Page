import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/funil-vendas")({
  component: FunilVendasPage,
  head: () =>
    pageMeta({
      title: "Curso de Funil de Vendas + CRM para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a montar funis de vendas e usar CRM com automações reais. Curso presencial em Ribeirão Preto para profissionais e empreendedores.",
      path: "/adultos/cursos/funil-vendas",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Funil de Vendas + CRM",
  categoria: "Marketing & Negócios",
  tagline: "Transforme desconhecidos em clientes com funis e processos automatizados",
  targetAudience: [
    "Você trabalha em vendas ou marketing e quer estruturar um processo que gere resultados previsíveis",
    "Você tem um negócio próprio e perde leads porque não tem sistema para acompanhar cada contato",
    "Você já usa planilhas para controlar clientes, mas sabe que precisa evoluir para um CRM de verdade",
    "Você quer entender como criar automações de e-mail e WhatsApp que nutrem o lead no piloto automático",
    "Você precisa apresentar métricas de funil e relatórios de pipeline para gestores ou sócios",
    "Você quer integrar anúncios pagos, landing pages e CRM em um único fluxo coerente de aquisição",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Montar um funil de vendas funcional, configurar um CRM básico e criar sequências de e-mail automatizadas para nutrir e converter leads",
      modules: [
        {
          title: "Fundamentos do Funil de Vendas",
          topics: [
            "Jornada do cliente: consciência, consideração e decisão na prática",
            "Tipos de funil: captura, produto digital, serviço e e-commerce",
            "Diferença entre funil de marketing e funil de vendas",
            "Mapeando o funil do seu negócio: etapas, gatilhos e pontos de fuga",
            "Exemplos reais de funis de alta conversão por segmento de mercado",
          ],
        },
        {
          title: "Geração e Qualificação de Leads",
          topics: [
            "O que é MQL vs SQL e como classificar leads com critérios objetivos",
            "Lead magnet: criando e-book, checklist e aula gratuita que convertem",
            "Formulários de captura: campos essenciais, UX e taxa de preenchimento",
            "Landing pages de captura: estrutura, copywriting e elementos de prova social",
            "Distribuição e tráfego: onde e como promover seu lead magnet sem gastar muito",
          ],
        },
        {
          title: "CRM — HubSpot e RD Station",
          topics: [
            "O que é CRM e por que planilhas deixam dinheiro na mesa",
            "Cadastro e organização de contatos: campos, tags e segmentação inicial",
            "Pipeline de deals: criando etapas, movendo negócios e definindo probabilidades",
            "Registro de interações: e-mails, ligações, reuniões e notas no histórico",
            "Relatórios básicos: funil de negócios, taxa de ganho e tempo médio de fechamento",
          ],
        },
        {
          title: "Automação de E-mail Básica",
          topics: [
            "Sequência de boas-vindas: estrutura de 3 e-mails que engajam o novo lead",
            "Fluxo de nutrição em 5 etapas: conteúdo, oferta e urgência no momento certo",
            "Follow-up automático após download de lead magnet ou abandono de formulário",
            "Análise de abertura, clique e descadastro: interpretando os dados de e-mail",
            "Boas práticas de entregabilidade: domínio autenticado, listas limpas e assuntos eficazes",
          ],
        },
        {
          title: "Métricas do Funil",
          topics: [
            "Taxa de conversão por etapa: como calcular e onde estão os maiores gargalos",
            "CPL, ticket médio e LTV: as métricas que definem a saúde financeira do funil",
            "Tempo de fechamento: benchmarks por segmento e como reduzir o ciclo de vendas",
            "Lendo dashboards de funil no CRM: filtros, períodos e interpretação correta",
            "Apresentando resultados: como montar um relatório de funil para stakeholders",
          ],
        },
      ],
      tools: ["HubSpot CRM", "RD Station CRM", "RD Station Marketing", "Google Analytics 4", "Notion"],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Operar um CRM avançado com lead scoring, criar automações multi-etapa, gerenciar pipeline com SLAs e integrar todos os canais de aquisição em um único ecossistema mensurável",
      modules: [
        {
          title: "CRM Avançado: Segmentação e Lead Scoring",
          topics: [
            "Propriedades customizadas no CRM: criando campos que refletem o processo do negócio",
            "Listas dinâmicas e estáticas: segmentando contatos por comportamento e perfil",
            "Lead scoring automático: atribuindo pontos por páginas visitadas, e-mails abertos e cargo",
            "Integração CRM com formulários: mapeando campos e enriquecendo o contato na entrada",
            "Passagem de lead para vendas: critérios de MQL→SQL e notificação automática do time",
          ],
        },
        {
          title: "Automações de Marketing e Vendas",
          topics: [
            "Workflows multi-etapa: condições, ramificações e delays baseados em comportamento",
            "Follow-up por comportamento: e-mail diferente para quem abriu vs quem ignorou",
            "Notificações automáticas para vendas: alertas de lead quente no Slack ou WhatsApp",
            "Automação de tarefas: criando deals, agendando atividades e atualizando propriedades",
            "Teste A/B em automações: variando assunto, horário e conteúdo para otimizar conversão",
          ],
        },
        {
          title: "Gestão de Pipeline e Processo de Vendas",
          topics: [
            "Processo de vendas documentado no CRM: playbook, scripts e objetos por etapa",
            "SLA entre marketing e vendas: tempo de primeiro contato, retentativas e critérios de perda",
            "Cadências de prospecção: sequência de touchpoints por e-mail, ligação e LinkedIn",
            "Forecast por etapa: prevendo receita com base em probabilidade e histórico do pipeline",
            "Reunião semanal de pipeline: pauta, métricas a revisar e tomada de decisão baseada em dados",
          ],
        },
        {
          title: "Integração de Canais e Ferramentas",
          topics: [
            "CRM + WhatsApp via API: enviando mensagens automáticas em etapas do funil",
            "Conexão com Meta Ads e Google Ads: importando leads de formulários direto no CRM",
            "Zapier e Make: criando automações entre plataformas sem escrever código",
            "Sync CRM com planilha Google Sheets: exportação automática para relatórios externos",
            "Webhooks e integrações nativas: quando usar Zapier vs integração direta via API",
          ],
        },
        {
          title: "Análise de Funil e Otimização Contínua",
          topics: [
            "Dashboards customizados no CRM: agrupando métricas por canal, vendedor e período",
            "Identificando gargalos: onde os leads travam e hipóteses de melhoria por etapa",
            "Relatório de cohort: acompanhando a qualidade de leads gerados por período e campanha",
            "ROI de canal: calculando retorno de cada fonte de leads e realocando investimento",
            "Ciclo de melhoria contínua: como rodar hipóteses, medir impacto e escalar o que funciona",
          ],
        },
      ],
      tools: [
        "HubSpot CRM",
        "RD Station CRM",
        "RD Station Marketing",
        "Zapier",
        "Make",
        "Meta Ads",
        "Google Analytics 4",
        "WhatsApp Business API",
        "Notion",
      ],
    },
  ],
  faqItems: [
    {
      q: "Já uso planilha pra controlar meus clientes. Preciso mesmo de CRM?",
      a: "Se você ainda usa planilha, o curso é pensado exatamente pra essa transição. Você aprende a migrar de controle manual pra um CRM de verdade (HubSpot ou RD Station), com pipeline de negócios, histórico de interações e relatórios automáticos — sem perder o que já funciona no seu processo.",
    },
    {
      q: "Qual a diferença entre o nível Essencial e o Intermediário?",
      a: "Essencial monta a base: funil de vendas, geração e qualificação de leads, configuração do CRM e automações simples de e-mail. Intermediário é sobre escala: lead scoring automático, automações multi-etapa com ramificações, SLA entre marketing e vendas, integração de CRM com WhatsApp API, Meta Ads e Google Ads, e análise de cohort e ROI por canal.",
    },
    {
      q: "O curso ensina a integrar anúncios pagos com o CRM, ou só a parte de vendas?",
      a: "Ensina os dois lados juntos. No Intermediário você conecta Meta Ads e Google Ads direto no CRM pra importar leads automaticamente, além de integrações via Zapier e Make — a ideia é sair com um fluxo único, do anúncio até o fechamento, e não ferramentas soltas.",
    },
  ],
}

function FunilVendasPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
