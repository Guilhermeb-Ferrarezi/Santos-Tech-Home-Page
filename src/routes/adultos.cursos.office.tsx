import { createFileRoute } from "@tanstack/react-router";
import { AdultosCursosPage } from "@/components/adultos-course-page";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/adultos/cursos/office")({
  component: OfficePage,
  head: () =>
    pageMeta({
      title:
        "Curso de Pacote Office para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Word, Excel e PowerPoint do zero ao avançado com aulas presenciais em Ribeirão Preto. Domine o Office que o mercado contrata e conquiste melhores vagas e promoções.",
      path: "/adultos/cursos/office",
    }),
});

const COURSE_DATA = {
  nome: "Pacote Office",
  categoria: "Pacote Office",
  tagline: "Word, Excel e PowerPoint do zero ao avançado que o mercado contrata",
  targetAudience: [
    "Você perdeu vagas administrativas ou de atendimento porque o anúncio exigia 'domínio do Pacote Office' e você não tinha segurança",
    "Você usa o Excel, mas só para digitar dados — e quer criar fórmulas, tabelas dinâmicas e dashboards de verdade",
    "Você monta apresentações no PowerPoint mas o resultado parece amador e você quer mudar isso",
    "Você trabalha em empresa e precisa criar relatórios, propostas e planilhas com aparência e funcionalidade profissionais",
    "Você é autônomo, MEI ou empreendedor e quer controlar finanças, criar orçamentos e apresentar propostas sem depender de designer",
    "Você quer conquistar uma promoção ou mudar de área e sabe que o domínio do Office é o requisito que ainda te falta",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Criar documentos, planilhas e apresentações com aparência profissional e funcionalidade prática — prontos para usar no trabalho desde a primeira semana após o curso",
      modules: [
        {
          title: "Microsoft Word — Documentos que Impressionam",
          topics: [
            "Interface do Word: faixa de opções, barra de acesso rápido e modos de exibição",
            "Formatação de texto profissional: fonte, tamanho, espaçamento entre linhas e parágrafos",
            "Estilos de parágrafo: Título 1, Título 2 e Normal para documentos organizados",
            "Inserir e formatar tabelas: mesclar células, bordas e preenchimento de cor",
            "Cabeçalho, rodapé e numeração de páginas: padrões profissionais de documento",
            "Salvar em .docx e exportar em PDF com qualidade de impressão",
            "Modelos prontos: currículo, ofício simples e ata de reunião",
          ],
        },
        {
          title: "Microsoft Excel — Primeira Planilha que Funciona de Verdade",
          topics: [
            "Estrutura do Excel: células, linhas, colunas, guias e a barra de fórmulas",
            "Formatação de células: número, moeda (R$), data, percentual e texto",
            "Fórmulas fundamentais: SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES e CONT.NUN",
            "Formatação como Tabela: classificar e filtrar dados com dois cliques",
            "Gráficos básicos: colunas agrupadas, pizza e linha — quando usar cada um",
            "Planilha de controle financeiro pessoal com saldo automático e gráfico mensal",
            "Atalhos de teclado que economizam tempo no Excel: Ctrl+End, F4, Ctrl+Shift+L",
          ],
        },
        {
          title: "Microsoft PowerPoint — Apresentações que Convencem",
          topics: [
            "Interface do PowerPoint: painel de slides, área de edição e modos de exibição",
            "Escolher e personalizar tema: cores, fontes e plano de fundo com consistência",
            "Inserir textos, imagens, ícones do Office e formas geométricas com alinhamento",
            "Princípio do menos é mais: o que tirar de uma apresentação para ela melhorar",
            "Animações de entrada e transições de slide: como usar sem exagerar",
            "Modo apresentador: notas do orador, cronômetro e visualização do próximo slide",
            "Exportar em PDF e compartilhar via link do OneDrive",
          ],
        },
      ],
      tools: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "OneDrive",
      ],
    },
    {
      label: "Intermediário",
      levelName: "Intermediário",
      totalHours: "48h",
      outcome:
        "Dominar os recursos intermediários e avançados do Word, Excel e PowerPoint — com capacidade de criar relatórios formatados, planilhas com fórmulas complexas e apresentações com design profissional que se destacam no mercado",
      modules: [
        {
          title: "Word Intermediário — Documentos Longos e Profissionais",
          topics: [
            "Sumário automático com estilos de cabeçalho: gerar e atualizar com um clique",
            "Quebra de página, quebra de seção e orientação mista (retrato e paisagem no mesmo arquivo)",
            "Mala direta (Mail Merge): personalizar cartas, certificados e etiquetas em lote",
            "Referências e notas de rodapé: padrão ABNT simplificado",
            "Controle de alterações e comentários: revisão colaborativa de documentos",
            "Modelos avançados: relatório de resultados, proposta comercial e contrato simples",
          ],
        },
        {
          title: "Word Avançado — Automação e Padronização",
          topics: [
            "Estilos personalizados: criar e salvar o padrão visual da empresa ou pessoal",
            "Macros simples no Word: gravar e executar ações repetitivas sem escrever código",
            "Formulários com campos protegidos: criar documentos que o usuário preenche sem alterar o layout",
            "Comparar e combinar versões de documentos diferentes",
            "Indexar documentos: sumário de figuras, tabelas e marcadores de página",
            "Publicar documentos como página web e integrar com SharePoint/OneDrive",
          ],
        },
        {
          title: "Excel Intermediário — Fórmulas que Resolvem Problemas Reais",
          topics: [
            "Função SE: tomar decisões automáticas na planilha (se o valor for X, faça Y)",
            "SE aninhado e SE com E/OU: condições múltiplas em uma só fórmula",
            "PROCV: buscar dados em outra tabela ou aba pelo valor de uma coluna",
            "CONT.SE e SOMASE: contar e somar com base em critérios específicos",
            "Formatação condicional: destacar células automaticamente por valor, cor ou regra",
            "Validação de dados: criar listas suspensas e impedir erros de digitação",
            "Proteção de planilha: bloquear células de fórmulas para não serem editadas por acidente",
          ],
        },
        {
          title: "Excel Avançado — Tabelas Dinâmicas e Dashboards",
          topics: [
            "PROCX: o substituto moderno do PROCV, mais flexível e poderoso",
            "Tabelas dinâmicas (Pivot Tables): resumir milhares de linhas em segundos",
            "Campos calculados em tabelas dinâmicas: criar métricas customizadas",
            "Gráficos dinâmicos vinculados à tabela dinâmica: dashboard que atualiza automático",
            "Segmentação de dados (Slicers): filtros visuais interativos para o painel",
            "Power Query: importar, limpar e transformar dados de planilhas e arquivos CSV sem fórmulas",
            "Projeto: dashboard de vendas ou controle financeiro com Power Query + Tabela Dinâmica + Slicer",
          ],
        },
        {
          title: "PowerPoint Intermediário — Design e Narrativa Visual",
          topics: [
            "Slide Master: criar um template padrão com logo, cores e fontes da empresa ou pessoal",
            "Layouts de slide personalizados dentro do Slide Master",
            "Gráficos SmartArt: fluxogramas, hierarquias e ciclos com visual profissional",
            "Seções no PowerPoint: organizar decks longos com navegação rápida",
            "Hiperlinking entre slides: criar apresentações não lineares e menus interativos",
            "Exportar como vídeo MP4 com narração de áudio gravada diretamente no PowerPoint",
          ],
        },
        {
          title: "PowerPoint Avançado — Apresentações de Alto Impacto",
          topics: [
            "Animações de trajetória e temporização avançada com o Painel de Animação",
            "Morph: transição cinematográfica entre slides com o mesmo objeto em posições diferentes",
            "Designer do PowerPoint (IA embutida): sugestões de layout geradas automaticamente",
            "Inserir e editar vídeo diretamente no slide com recorte, marcadores e reprodução automática",
            "Apresentações interativas no PowerPoint Live (Teams/Outlook) com reações da audiência",
            "Projeto final: deck de pitch ou apresentação de resultados com Slide Master, Morph e vídeo",
          ],
        },
        {
          title: "Outlook e OneDrive — Produtividade no Ecossistema Microsoft",
          topics: [
            "Outlook: configurar conta corporativa, organizar caixa de entrada com pastas e regras",
            "Calendário do Outlook: agendar reuniões, enviar convites e visualizar disponibilidade da equipe",
            "OneDrive: sincronizar arquivos, compartilhar com permissões e recuperar versões anteriores",
            "Colaboração em tempo real: Word, Excel e PowerPoint abertos simultaneamente por várias pessoas",
            "Microsoft Teams básico: criar canais, enviar arquivos e agendar reuniões com integração ao Outlook",
            "Boas práticas de organização digital: nomenclatura de arquivos, estrutura de pastas e backup",
          ],
        },
      ],
      tools: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Microsoft Outlook",
        "OneDrive",
        "Microsoft Teams",
        "Power Query",
      ],
    },
    {
      label: "Profissional + IA",
      levelName: "Profissional + IA",
      totalHours: "72h",
      outcome:
        "Dominar o ecossistema Microsoft 365 com fluência profissional — incluindo Power BI para análise de dados e Microsoft Copilot (IA) integrado ao Word, Excel e PowerPoint — e entregar um projeto final que comprova essas competências para o mercado",
      modules: [
        {
          title: "Word — Do Intermediário ao Avançado",
          topics: [
            "Estilos personalizados, Slide Master de documentos e sumário automático",
            "Mala direta avançada: vincular banco de dados do Excel para gerar documentos em lote",
            "Formulários protegidos com campos de preenchimento para contratos e fichas",
            "Macros no Word: automatizar formatação repetitiva com um clique",
            "Comparar versões e aceitar/rejeitar alterações de colaboradores",
            "Integrar Word com OneDrive e SharePoint para fluxo de aprovação de documentos",
          ],
        },
        {
          title: "Excel — Domínio Completo de Fórmulas e Dados",
          topics: [
            "PROCX, ÍNDICE+CORRESP e fórmulas de pesquisa avançada",
            "Fórmulas de array dinâmico: FILTRO, CLASSIFICAR, SEQUÊNCIA e ÚNICO",
            "Tabelas dinâmicas avançadas: agrupamento, campos calculados e itens calculados",
            "Power Query: conectar a banco de dados, API e vários arquivos Excel automaticamente",
            "Validação de dados com listas cascateadas (segundo campo depende do primeiro)",
            "Auditoria de fórmulas: rastrear precedentes, dependentes e erros com o modo de auditoria",
            "Macros com VBA: gravar, editar e executar automações simples sem ser programador",
          ],
        },
        {
          title: "PowerPoint — Apresentações Cinematográficas",
          topics: [
            "Slide Master completo: template corporativo do zero com layouts personalizados",
            "Morph, Zoom e Designer: recursos que elevam o nível visual sem esforço extra",
            "Animações complexas sincronizadas com áudio ou vídeo embutido",
            "Apresentações interativas com hiperlinking e menus de navegação por categorias",
            "Exportar como curso interativo (formato SCORM-like) para onboarding interno",
            "Integrar dados do Excel em gráficos do PowerPoint com vínculo dinâmico que atualiza",
          ],
        },
        {
          title: "Microsoft Copilot — IA no Word, Excel e PowerPoint",
          topics: [
            "Copilot no Word: gerar rascunhos completos, resumir documentos longos e reescrever tom de texto",
            "Copilot no Excel: criar fórmulas descrevendo em português o que você quer calcular",
            "Copilot no Excel: analisar tabela e gerar insights automáticos com um prompt",
            "Copilot no PowerPoint: gerar apresentação completa a partir de um documento do Word",
            "Copilot no Outlook: resumir threads de e-mail e redigir respostas em segundos",
            "Copilot no Teams: transcrever reunião, gerar ata e listar próximos passos automaticamente",
            "Engenharia de prompt para o Microsoft 365: como dar instruções claras para resultados profissionais",
          ],
        },
        {
          title: "Power BI — Da Planilha ao Dashboard Executivo",
          topics: [
            "Instalar o Power BI Desktop e conectar a planilhas do Excel e arquivos CSV",
            "Power Query no Power BI: limpar, combinar e transformar dados sem fórmulas",
            "Modelagem de dados: criar relacionamentos entre tabelas como em um banco de dados simples",
            "DAX básico: medidas calculadas (Total de Vendas, Ticket Médio, Crescimento % MoM)",
            "Visuais essenciais: cartão, gráfico de barras, mapa de calor, gráfico de linhas e tabela",
            "Filtros, segmentação e botões de navegação: painel interativo que o usuário controla",
            "Publicar no Power BI Service e compartilhar o dashboard por link ou embed",
          ],
        },
        {
          title: "Outlook, Teams e Ecossistema Microsoft 365",
          topics: [
            "Outlook avançado: regras de e-mail, respostas automáticas (férias) e categorias por cor",
            "Teams avançado: criar canais, fixar aplicativos, usar Planner para gestão de tarefas",
            "SharePoint básico: o que é, para que serve e como acessar bibliotecas de documentos da empresa",
            "OneNote: caderno digital para anotações de reunião integrado ao Teams e Outlook",
            "Microsoft Forms: criar pesquisas, quizzes e enquetes com análise de resultados automática",
            "Boas práticas de segurança no Microsoft 365: autenticação multifator e política de senhas",
          ],
        },
        {
          title: "Projeto Final: Painel de Gestão Completo",
          topics: [
            "Definir o escopo: área escolhida pelo aluno (vendas, RH, finanças, operações)",
            "Coletar e tratar dados reais ou simulados com Power Query no Excel ou Power BI",
            "Criar planilha mestre no Excel com fórmulas avançadas, tabela dinâmica e gráfico dinâmico",
            "Gerar relatório executivo em Word com mala direta e sumário automático",
            "Montar apresentação de resultados em PowerPoint com Slide Master, Morph e gráficos vinculados ao Excel",
            "Construir dashboard final no Power BI com pelo menos 5 visuais e filtros interativos",
            "Apresentar o projeto ao professor com defesa das escolhas técnicas e narrativa de dados",
          ],
        },
      ],
      tools: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Microsoft Copilot",
        "Power BI",
        "Microsoft Outlook",
        "Microsoft Teams",
        "OneDrive",
        "Power Query",
        "DAX",
      ],
    },
  ],
  faqItems: [
    {
      q: "Nunca usei Word, Excel ou PowerPoint — dá pra começar do zero?",
      a: "Sim. O nível Essencial parte da interface de cada programa e ensina o suficiente pra você já usar no trabalho na primeira semana: documentos formatados no Word, planilhas com fórmulas no Excel e apresentações organizadas no PowerPoint.",
    },
    {
      q: "Qual a diferença entre os três níveis do curso?",
      a: "Essencial cobre o uso profissional do dia a dia nos três programas. Intermediário entra em mala direta, PROCV, tabelas dinâmicas e Slide Master. Profissional + IA fecha com Power BI, Microsoft Copilot integrado ao Word, Excel e PowerPoint, e um projeto final de painel de gestão completo.",
    },
    {
      q: "Sou autônomo ou MEI — esse curso serve pra mim mesmo sem trabalhar em empresa?",
      a: "Serve. O curso ensina a controlar finanças, montar orçamentos e apresentar propostas com qualidade profissional sem precisar contratar um designer — útil tanto pra quem trabalha em empresa quanto pra quem toca o próprio negócio.",
    },
  ],
};

function OfficePage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />;
}
