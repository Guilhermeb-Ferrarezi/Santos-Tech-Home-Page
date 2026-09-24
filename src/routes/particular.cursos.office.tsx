import { createFileRoute } from "@tanstack/react-router";
import { ParticularCursosPage } from "@/components/particular-course-page";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/particular/cursos/office")({
  component: OfficePage,
  head: () =>
    pageMeta({
      title:
        "Curso de Pacote Office Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Word, Excel e PowerPoint do zero ao avançado com aulas presenciais em Ribeirão Preto. Domine o Office que o mercado contrata e conquiste melhores vagas e promoções.",
      path: "/particular/cursos/office",
    }),
});

const COURSE_DATA = {
  nome: "Pacote Office",
  categoria: "Pacote Office",
  tema: "office" as const,
  logo: "office",
  variante: "pacote",
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
      levelName: "Pacote Office",
      totalHours: "48h",
      outcome:
        "Dominar Word, Excel e PowerPoint do zero absoluto ao avançado — documentos longos e automatizados, fórmulas complexas e macros em VBA, tabelas dinâmicas e dashboards no Excel, apresentações de alto impacto com Slide Master e Morph — além de Outlook, Teams e OneDrive para produtividade completa no dia a dia profissional",
      modules: [
        {
          title: "Microsoft Word — Do Zero ao Avançado",
          topics: [
            "Interface do Word: faixa de opções, barra de acesso rápido e modos de exibição",
            "Formatação de texto e estilos de parágrafo (Título 1, Título 2, Normal) para documentos organizados",
            "Tabelas, cabeçalho, rodapé e numeração de páginas — e exportação em .docx e PDF com qualidade de impressão",
            "Documentos longos: sumário automático, quebra de página e de seção, orientação mista, referências e notas de rodapé (padrão ABNT simplificado)",
            "Mala direta (Mail Merge): de cartas e etiquetas em lote até vincular uma planilha do Excel como fonte de dados para gerar documentos automaticamente",
            "Colaboração e controle de versão: comentários, controle de alterações e comparação entre versões de colaboradores",
            "Estilos personalizados, formulários com campos protegidos (contratos e fichas), indexação de documentos (sumário de figuras e tabelas) e macros para automatizar formatação repetitiva",
            "Modelos do zero ao avançado — currículo, ofício, ata, relatório de resultados, proposta comercial e contrato — e publicação/integração com OneDrive e SharePoint",
          ],
        },
        {
          title: "Microsoft Excel — Do Zero ao Avançado",
          topics: [
            "Estrutura do Excel: células, linhas, colunas, guias, barra de fórmulas e formatação de número, moeda, data e percentual",
            "Fórmulas fundamentais (SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.VALORES, CONT.NÚM) e atalhos de teclado que economizam tempo (Ctrl+End, F4, Ctrl+Shift+L)",
            "Função SE, SE aninhado e SE com E/OU: decisões automáticas com condições simples e múltiplas",
            "Busca de dados: PROCV, PROCX e ÍNDICE+CORRESP — da fórmula clássica às alternativas modernas e mais flexíveis",
            "CONT.SE, SOMASE, formatação condicional e validação de dados — de listas suspensas simples a listas cascateadas (uma depende da outra)",
            "Fórmulas de array dinâmico (FILTRO, CLASSIFICAR, SEQUÊNCIA, ÚNICO) e auditoria de fórmulas: rastrear precedentes, dependentes e erros",
            "Formatação como Tabela e proteção de planilha — gráficos básicos (coluna, pizza, linha), praticados numa planilha de controle financeiro pessoal, evoluindo para gráficos dinâmicos vinculados a uma tabela dinâmica",
            "Tabelas dinâmicas (Pivot Tables): resumo, agrupamento avançado, campos e itens calculados, com segmentação de dados (Slicers)",
            "Power Query: de importar e limpar planilhas e arquivos CSV até conectar a bancos de dados, APIs e múltiplos arquivos automaticamente",
            "Macros com VBA: gravar, editar e executar automações sem ser programador — e projeto de dashboard de vendas ou controle financeiro combinando Power Query, Tabela Dinâmica e Slicer",
          ],
        },
        {
          title: "Microsoft PowerPoint — Do Zero ao Avançado",
          topics: [
            "Interface do PowerPoint, temas personalizados (cores, fontes, plano de fundo) e princípios de design: contraste, alinhamento, hierarquia visual e 'menos é mais'",
            "Inserir e organizar conteúdo: textos, imagens, ícones, formas geométricas e SmartArt com alinhamento profissional",
            "Slide Master e layouts personalizados: do template pessoal ao template corporativo completo do zero, com logo, cores e fontes",
            "Organização de apresentações longas: seções, hiperlinking entre slides e menus de navegação não lineares por categoria",
            "Animações e transições: de entrada e trajetória à temporização avançada no Painel de Animação, sincronizadas com áudio ou vídeo embutido, com Morph e Zoom para transições cinematográficas",
            "Designer do PowerPoint (IA embutida) e integração com o Excel: gráficos com vínculo dinâmico que atualiza automaticamente",
            "Inserir e editar vídeo no slide (recorte, marcadores, reprodução automática) e exportar a apresentação como vídeo MP4 narrado ou como curso interativo (formato SCORM-like)",
            "Modo apresentador, PowerPoint Live (Teams/Outlook) com reações da audiência, exportação em PDF e compartilhamento via OneDrive",
            "Projeto final: deck de pitch ou apresentação de resultados usando Slide Master, Morph e vídeo",
          ],
        },
        {
          title: "Outlook, Teams e Produtividade no Microsoft 365",
          topics: [
            "Outlook do básico ao avançado: configurar conta, organizar caixa de entrada com pastas e regras automáticas, respostas automáticas (férias) e categorias por cor",
            "Calendário do Outlook: agendar reuniões, enviar convites e visualizar disponibilidade da equipe",
            "OneDrive: sincronizar arquivos, compartilhar com permissões, recuperar versões anteriores e colaborar em tempo real no Word, Excel e PowerPoint",
            "Microsoft Teams do básico ao avançado: canais, arquivos, reuniões, fixar aplicativos e gestão de tarefas com o Planner",
            "SharePoint básico: o que é, para que serve e como acessar bibliotecas de documentos da empresa",
            "OneNote (caderno digital integrado ao Teams e Outlook) e Microsoft Forms: pesquisas, quizzes e enquetes com análise automática de resultados",
            "Boas práticas de organização digital e segurança no Microsoft 365: nomenclatura de arquivos, estrutura de pastas, backup, autenticação multifator e política de senhas",
          ],
        },
      ],
      tools: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Microsoft Outlook",
        "Microsoft Teams",
        "OneDrive",
        "Power Query",
      ],
    },
  ],
  faqItems: [
    {
      q: "Nunca usei Word, Excel ou PowerPoint — dá pra começar do zero?",
      a: "Sim. O curso parte da interface de cada programa e vai do zero absoluto até o avançado nos três softwares — como as aulas são individuais, o professor ajusta o ritmo ao seu ponto de partida, então em poucas semanas você já aplica documentos formatados no Word, planilhas com fórmulas no Excel e apresentações organizadas no PowerPoint no seu trabalho.",
    },
    {
      q: "Sou autônomo ou MEI — esse curso serve pra mim mesmo sem trabalhar em empresa?",
      a: "Serve. O curso ensina a controlar finanças, montar orçamentos e apresentar propostas com qualidade profissional sem precisar contratar um designer — útil tanto pra quem trabalha em empresa quanto pra quem toca o próprio negócio.",
    },
  ],
};

function OfficePage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />;
}
