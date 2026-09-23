import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import type { CourseData } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/funil-vendas")({
  component: FunilVendasPage,
  head: () =>
    pageMeta({
      title: "Curso de Funil de Vendas + CRM Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a montar funis de vendas e usar CRM com automações reais. Curso presencial em Ribeirão Preto para profissionais e empreendedores.",
      path: "/particular/cursos/funil-vendas",
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
      levelName: "Funil de Vendas",
      totalHours: "48h",
      outcome:
        "Montar um funil de vendas do zero absoluto — captação e qualificação de leads, CRM básico — até operar um CRM avançado com lead scoring e automações multi-etapa, gerenciar pipeline com processo documentado e SLA entre marketing e vendas, e integrar anúncios pagos, WhatsApp e automações em um único ecossistema de aquisição mensurável.",
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
          title: "CRM do Zero ao Avançado",
          topics: [
            "O que é CRM e por que planilha deixa dinheiro na mesa: cadastro e organização de contatos com campos, tags e segmentação inicial",
            "Pipeline de deals: criando etapas, movendo negócios e definindo probabilidades, com propriedades customizadas que refletem o processo do negócio",
            "Registro de interações: e-mails, ligações, reuniões e notas no histórico completo do contato",
            "Segmentação avançada: listas dinâmicas e estáticas segmentando contatos por comportamento e perfil",
            "Lead scoring automático: atribuindo pontos por páginas visitadas, e-mails abertos e cargo",
            "Integração do CRM com formulários e passagem de lead para vendas: critérios de MQL→SQL e notificação automática do time",
          ],
        },
        {
          title: "Automação de Marketing e Vendas",
          topics: [
            "Sequência de boas-vindas e fluxo de nutrição em etapas: conteúdo, oferta e urgência no momento certo",
            "Workflows multi-etapa: condições, ramificações e follow-up automático por comportamento — e-mail diferente para quem abriu vs quem ignorou",
            "Automação de tarefas de vendas: criando deals, agendando atividades e atualizando propriedades, com notificação automática de lead quente no Slack ou WhatsApp",
            "Teste A/B em automações: variando assunto, horário e conteúdo para otimizar conversão",
            "Análise de abertura, clique e descadastro, e boas práticas de entregabilidade: domínio autenticado, listas limpas e assuntos eficazes",
          ],
        },
        {
          title: "Processo de Vendas e Integração de Canais",
          topics: [
            "Processo de vendas documentado no CRM: playbook, scripts e ações por etapa, com SLA entre marketing e vendas — tempo de primeiro contato, retentativas e critérios de perda",
            "Cadências de prospecção: sequência de touchpoints por e-mail, ligação e LinkedIn",
            "Forecast por etapa e reunião semanal de pipeline: prevendo receita e tomando decisão com base em dados",
            "CRM + WhatsApp via API e integração com Meta Ads e Google Ads: enviando mensagens automáticas e importando leads de formulários direto no CRM",
            "Zapier, Make e webhooks: automações entre plataformas sem escrever código, e quando usar integração nativa via API",
            "Sync do CRM com planilha Google Sheets: exportação automática para relatórios externos",
          ],
        },
        {
          title: "Métricas, ROI e Otimização do Funil",
          topics: [
            "Taxa de conversão por etapa do funil: como calcular e onde estão os maiores gargalos",
            "CPL, ticket médio, LTV e tempo de fechamento: as métricas que definem a saúde financeira do funil, com benchmarks por segmento",
            "Dashboards customizados no CRM: agrupando métricas por canal, vendedor e período",
            "Relatório de cohort: acompanhando a qualidade de leads gerados por período e campanha",
            "ROI de canal: calculando retorno de cada fonte de leads e realocando investimento",
            "Ciclo de melhoria contínua e apresentação de resultados: rodando hipóteses, medindo impacto e montando relatórios de funil para stakeholders",
          ],
        },
      ],
      tools: [
        "HubSpot CRM",
        "RD Station CRM",
        "RD Station Marketing",
        "Google Analytics 4",
        "Notion",
        "Zapier",
        "Make",
        "Meta Ads",
        "WhatsApp Business API",
      ],
    },
  ],
  faqItems: [
    {
      q: "Já uso planilha pra controlar meus clientes. Preciso mesmo de CRM?",
      a: "Se você ainda usa planilha, o curso é pensado exatamente pra essa transição. Você aprende a migrar de controle manual pra um CRM de verdade (HubSpot ou RD Station), com pipeline de negócios, histórico de interações e relatórios automáticos — sem perder o que já funciona no seu processo.",
    },
    {
      q: "O curso ensina a integrar anúncios pagos com o CRM, ou só a parte de vendas?",
      a: "Ensina os dois lados juntos. Você conecta Meta Ads e Google Ads direto no CRM pra importar leads automaticamente, além de integrações via Zapier e Make — a ideia é sair com um fluxo único, do anúncio até o fechamento, e não ferramentas soltas.",
    },
  ],
}

function FunilVendasPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
