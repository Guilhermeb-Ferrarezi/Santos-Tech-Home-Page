import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Component,
  Network,
  Workflow,
  Crown,
  Code,
  Boxes,
} from "lucide-react";
import {
  CourseHero,
  ProgressionTrail,
  ParaQuemESection,
  FormatSection,
  ModuleGrid,
  LessonAccordion,
  ToolGrid,
  MethodologySection,
  FaqSection,
  CourseCtaFinal,
  BridgeBanner,
  type CourseTheme,
  type Module,
  type Tool,
  type FaqItem,
  type ProgressionBadge,
} from "@/components/course-page";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/cursos/create/13-14-anos")({
  component: Create1314Page,
  head: () => ({
    meta: [
      { title: "CREATE Ano 6 (13–14 anos) — A Arquitetura Viva · Santos Tech" },
      {
        name: "description",
        content:
          "Sexto e último ano do CREATE em Ribeirão Preto. 40 aulas de POO em C# + jogo autoral final no Unity. Trilha Pixel: A Arquitetura Viva. Título: Desenvolvedor de Jogos CREATE.",
      },
      { property: "og:title", content: "CREATE Ano 6 · 13–14 anos · Santos Tech" },
      {
        property: "og:description",
        content: "POO em C# aprofundada + jogo autoral final. Formatura da jornada CREATE.",
      },
      { property: "og:url", content: "/cursos/create/13-14-anos" },
    ],
    links: [{ rel: "canonical", href: "/cursos/create/13-14-anos" }],
  }),
});

const WHATSAPP = WHATSAPP_URL.courses;

const THEME: CourseTheme = {
  primary: "#187ABF",
  dark: "#04325A",
  soft: "#49A8EB",
};

const INSIGNIAS: ProgressionBadge[] = [
  { name: "Forjador de Classes", icon: Component, color: "#f59e0b", desc: "Classes próprias em C# + encapsulamento" },
  { name: "Arquiteto da Herança", icon: Network, color: "#06b6d4", desc: "Herança, polimorfismo e interfaces" },
  { name: "Engenheiro de Sistemas", icon: Workflow, color: "#10b981", desc: "Managers, sistemas e boas práticas" },
  { name: "Autor de Jogos", icon: Crown, color: "#ef4444", desc: "Jogo autoral final completo" },
];

const MODULES: Module[] = [
  {
    n: 1,
    name: "Classes Próprias em C#: Dados e Encapsulamento",
    classes: "Aulas 1 a 10",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Entender a classe como molde, indo além do MonoBehaviour. Criar classes próprias com campos, métodos e construtores. Instanciar objetos com new. Aplicar encapsulamento com private e public. Usar propriedades com get e set para proteger e validar dados.",
    project: "Ficha de personagem orientada a objetos — classe Personagem com atributos protegidos (vida, força, nome), controlados por propriedades e métodos, usada por um MonoBehaviour que exibe e altera valores em tela.",
    tool: "Unity 2D + C#",
    badge: INSIGNIAS[0],
    icon: Component,
    lessons: [
      { n: 1, title: "Onde paramos", goal: "Retoma o jogo 2D do Ano 5 e mostra por que código bem estruturado vira a próxima fronteira." },
      { n: 2, title: "A classe como molde", goal: "Apresenta o conceito de classe além do MonoBehaviour e cria a primeira classe C# pura." },
      { n: 3, title: "Campos da classe", goal: "Adiciona campos para guardar os dados de um objeto, como nome, vida e dano." },
      { n: 4, title: "Métodos da classe", goal: "Dá comportamento à classe escrevendo métodos que agem sobre seus próprios dados." },
      { n: 5, title: "Construtores", goal: "Usa construtores para nascer um objeto já com seus valores iniciais definidos." },
      { n: 6, title: "Instanciar com new", goal: "Cria vários objetos diferentes a partir do mesmo molde usando 'new'." },
      { n: 7, title: "Encapsulamento: público e privado", goal: "Esconde dados com 'private' e expõe só o necessário com 'public'." },
      { n: 8, title: "Propriedades (get e set)", goal: "Controla leitura e escrita dos dados com propriedades, validando valores como vida que não passa do máximo." },
      { n: 9, title: "Classes próprias dentro do Unity", goal: "Usa as classes criadas dentro de um MonoBehaviour, ligando os dois mundos." },
      { n: 10, title: "Mini-projeto: ficha de personagem", goal: "Finaliza uma classe Personagem encapsulada, exibida e alterada em tela por um script. Conquista a insígnia Forjador de Classes." },
    ],
  },
  {
    n: 2,
    name: "Os Pilares da POO Aplicados a Jogos",
    classes: "Aulas 11 a 20",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Reconhecer o custo de código repetido. Aplicar herança com classe base e classes derivadas. Sobrescrever comportamento com virtual e override. Usar polimorfismo para tratar objetos diferentes pelo mesmo tipo. Preferir composição quando fizer sentido ('tem um' x 'é um'). Definir e implementar interfaces.",
    project: "Família de inimigos — classe base Inimigo com tipos derivados (voador e terrestre), tratados de forma polimórfica numa lista, mais uma interface comum (IDanificavel) implementada por jogador, inimigos e objetos do cenário.",
    tool: "Unity 2D + C#",
    badge: INSIGNIAS[1],
    icon: Network,
    lessons: [
      { n: 11, title: "O problema do código repetido", goal: "Mostra como copiar e colar o mesmo inimigo várias vezes vira um pesadelo de manutenção." },
      { n: 12, title: "Herança: a classe base", goal: "Cria uma classe Inimigo com os dados e comportamentos comuns a todos os inimigos." },
      { n: 13, title: "Classes derivadas", goal: "Deriva tipos específicos da classe base, reaproveitando tudo que já existe nela." },
      { n: 14, title: "Sobrescrita com virtual e override", goal: "Permite que cada tipo de inimigo mude um comportamento herdado sem reescrever o resto." },
      { n: 15, title: "Polimorfismo", goal: "Guarda inimigos diferentes numa mesma lista e os comanda pelo tipo base, cada um reagindo à sua maneira." },
      { n: 16, title: "A palavra base e a cadeia de herança", goal: "Usa 'base' para reaproveitar o construtor e os métodos da classe-mãe." },
      { n: 17, title: "Composição: 'tem um' em vez de 'é um'", goal: "Monta objetos juntando peças menores quando a herança não é a melhor escolha." },
      { n: 18, title: "Interfaces: o contrato", goal: "Define uma interface como um contrato que diz o que um objeto sabe fazer." },
      { n: 19, title: "Implementando interfaces", goal: "Faz objetos bem diferentes cumprirem o mesmo contrato, como tudo que pode levar dano." },
      { n: 20, title: "Mini-projeto: família de inimigos", goal: "Finaliza uma hierarquia de inimigos com interface comum, gerados e tratados de forma polimórfica. Conquista a insígnia Arquiteto da Herança." },
    ],
  },
  {
    n: 3,
    name: "Arquitetura de um Jogo Maior: Sistemas e Boas Práticas",
    classes: "Aulas 21 a 30",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Separar responsabilidades entre scripts. Construir um GameManager que controla o estado do jogo. Dar acesso global controlado a um manager. Criar sistemas de pontuação e inventário. Conhecer ScriptableObjects. Cuidar de legibilidade, depuração e pequenas otimizações. Planejar o jogo autoral.",
    project: "Protótipo organizado em sistemas — GameManager, pontuação e inventário funcionando de forma desacoplada — acompanhado do documento de game design (GDD) do jogo autoral final.",
    tool: "Unity 2D + C#",
    badge: INSIGNIAS[2],
    icon: Workflow,
    lessons: [
      { n: 21, title: "Separação de responsabilidades", goal: "Aprende que cada script deve ter um trabalho claro, em vez de um script gigante que faz tudo." },
      { n: 22, title: "O GameManager", goal: "Cria um cérebro central que controla o estado e o fluxo do jogo." },
      { n: 23, title: "Acesso global ao manager", goal: "Usa um padrão simples para que qualquer script alcance o manager com segurança." },
      { n: 24, title: "Sistema de pontuação", goal: "Constrói um sistema dedicado a contar e exibir pontos, separado do resto do jogo." },
      { n: 25, title: "Sistema de inventário", goal: "Guarda itens do jogador em coleções e objetos próprios, com adicionar e remover." },
      { n: 26, title: "Comunicação entre sistemas", goal: "Faz os sistemas conversarem por chamadas ou eventos, evitando código embolado." },
      { n: 27, title: "ScriptableObjects: dados como recurso", goal: "Conhece os ScriptableObjects para guardar dados de itens e inimigos fora do código." },
      { n: 28, title: "Legibilidade e organização do projeto", goal: "Organiza pastas, nomes e comentários para um projeto que outra pessoa consiga ler." },
      { n: 29, title: "Depuração e pequenas otimizações", goal: "Caça bugs num projeto grande e aplica ajustes simples de desempenho." },
      { n: 30, title: "Mini-projeto: planejando o jogo autoral", goal: "Entrega o protótipo em sistemas e o documento de game design que guiará o capstone. Conquista a insígnia Engenheiro de Sistemas." },
    ],
  },
  {
    n: 4,
    name: "Capstone: O Jogo Autoral Final",
    classes: "Aulas 31 a 40",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Transformar o game design em um jogo jogável. Aplicar classes, herança e sistemas. Criar conteúdo e progressão de dificuldade. Cuidar de UI, feedback, áudio e polimento. Realizar playtest e iterar. Corrigir bugs e equilibrar o jogo. Gerar build executável. Preparar portfólio e apresentar na Mostra CREATE.",
    project: "Jogo autoral completo e jogável, construído com arquitetura orientada a objetos, exportado como build e apresentado na Mostra CREATE. Concede a insígnia Autor de Jogos e o título de formatura Desenvolvedor de Jogos CREATE — Mestre da Trilha Pixel.",
    tool: "Unity 2D + C#",
    badge: INSIGNIAS[3],
    icon: Crown,
    lessons: [
      { n: 31, title: "O coração do jogo", goal: "Constrói a fatia jogável central que prova que a ideia funciona (o vertical slice)." },
      { n: 32, title: "Montando a arquitetura do seu jogo", goal: "Aplica classes, herança e managers próprios à estrutura do jogo autoral." },
      { n: 33, title: "Conteúdo e progressão", goal: "Adiciona fases, inimigos e itens, criando uma curva de dificuldade." },
      { n: 34, title: "Interface e feedback", goal: "Cria menus, HUD e respostas visuais que deixam o jogo claro e gostoso de jogar." },
      { n: 35, title: "Áudio e polimento", goal: "Acrescenta som, efeitos e detalhes que dão vida e identidade ao jogo." },
      { n: 36, title: "Playtest e iteração", goal: "Coloca colegas para jogar, coleta retorno e decide o que melhorar." },
      { n: 37, title: "Corrigindo bugs e equilibrando", goal: "Resolve os problemas encontrados e ajusta o equilíbrio do jogo." },
      { n: 38, title: "Build e empacotamento", goal: "Gera uma versão executável do jogo, pronta para rodar fora do editor." },
      { n: 39, title: "Portfólio e apresentação", goal: "Prepara capa, descrição e a apresentação do jogo para a Mostra." },
      { n: 40, title: "Mostra CREATE: lançamento", goal: "Apresenta o jogo autoral, recebe a insígnia e o título de formatura e fecha a jornada CREATE de 6 anos. Conquista o título Desenvolvedor de Jogos CREATE — Mestre da Trilha Pixel." },
    ],
  },
];

const TOOLS: Tool[] = [
  {
    name: "Unity (motor de jogo)",
    type: "Gratuito (uso pessoal/educacional)",
    role: "O mesmo motor profissional do Ano 5, agora explorando arquitetura, ScriptableObjects, managers e build de versão executável.",
    icon: Boxes,
  },
  {
    name: "C# em Visual Studio / VS Code",
    type: "Gratuito",
    role: "Programação Orientada a Objetos aprofundada em C#: classes próprias, herança, polimorfismo, composição, interfaces.",
    icon: Code,
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Meu filho não fez o Ano 5. Pode entrar no Ano 6?",
    a: "Não recomendamos. O Ano 6 é a formatura — assume domínio de Unity, C# básico, scripts MonoBehaviour, física 2D e estrutura de jogo do Ano 5. Sem isso, o conteúdo de POO aprofundada fica abstrato. Conversa com a gente que avaliamos o caso.",
  },
  {
    q: "O que é POO e por que é o foco do ano final?",
    a: "Programação Orientada a Objetos é como engenheiros de software organizam código grande. Em vez de muitas variáveis e funções soltas, você modela tudo em classes que representam coisas do mundo do jogo. É a fronteira entre programar e arquitetar — e o que separa um hobbyist de um desenvolvedor.",
  },
  {
    q: "Qual é o título de formatura?",
    a: "Desenvolvedor de Jogos CREATE — Mestre da Trilha Pixel. Concedido na Mostra CREATE após a entrega do jogo autoral final. Marca o aluno como alguém capaz de projetar, programar e finalizar um jogo do zero, com arquitetura profissional.",
  },
  {
    q: "Como é o jogo autoral final?",
    a: "É o projeto capstone do Módulo 4: 10 aulas dedicadas a planejar, construir, fazer playtest, corrigir bugs, polir e exportar uma versão executável. O aluno apresenta na Mostra CREATE e a peça vira o centro do portfólio dele.",
  },
  {
    q: "O que vem depois do Ano 6?",
    a: "As Academies avançadas: Robótica e IA. São módulos para o aluno que terminou o CREATE e quer aprofundar áreas específicas. Não são obrigatórias — o CREATE é completo por si só.",
  },
  {
    q: "Quanto tempo dura?",
    a: "1 ano letivo: 40 aulas, 80 horas, 4 módulos. Cada módulo termina com mini-projeto e insígnia da Trilha A Arquitetura Viva.",
  },
  {
    q: "Como é a frequência?",
    a: "2 horas por semana. Família escolhe: 1 aula de 2h ou 2 aulas de 1h. Conteúdo é o mesmo, dividido em Parte A + Parte B.",
  },
  {
    q: "Qual o investimento?",
    a: "Te passamos valor e formas de pagamento na aula experimental. Sem compromisso.",
  },
];

function Create1314Page() {
  return (
    <>
      <CourseHero
        theme={THEME}
        breadcrumb={{ href: "/cursos/create", label: "Programa CREATE" }}
        eyebrow="CREATE Ano 6 · 13 a 14 anos · Formatura"
        title={
          <>
            A Arquitetura <br />
            <span style={{ color: THEME.soft }}>Viva</span>
          </>
        }
        subtitle={
          <>
            <p>
              O <strong>ápice da trilha CREATE</strong>. POO em C# aprofundada —
              classes próprias, herança, polimorfismo, interfaces e arquitetura
              de sistemas.
            </p>
            <p>
              Termina o ano com um <strong>jogo autoral final</strong> exportado
              e apresentado na Mostra CREATE. Recebe o título{" "}
              <strong>Desenvolvedor de Jogos CREATE — Mestre da Trilha Pixel</strong>.
            </p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental grátis" }}
        secondaryCta={{ href: "#curriculo", label: "Ver currículo completo" }}
        imageName="students-1"
        imageAlt="Adolescente de 13 anos desenvolvendo jogo final no Unity com C#"
        blobId="create1314Blob"
        decor="ai"
        metrics={[
          { value: "40", label: "Aulas" },
          { value: "80h", label: "Carga horária" },
          { value: "Mestre", label: "Título de formatura" },
          { value: "13–14", label: "Faixa etária" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              O salto do ano
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              De desenvolvedor a{" "}
              <span style={{ color: THEME.primary }}>arquiteto de jogos</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              O Ano 5 entregou alguém capaz de <strong>fazer o motor
              obedecer</strong>. O Ano 6 entrega alguém capaz de{" "}
              <strong>projetar a estrutura inteira</strong> de um jogo e levá-lo
              até o lançamento.
            </p>
            <p className="mt-3 text-lg text-muted-foreground">
              Duas grandes metas que caminham juntas: <strong>dominar POO de
              verdade em C#</strong> e <strong>construir um jogo autoral</strong>{" "}
              de portfólio.
            </p>
          </Reveal>

          <div className="mt-8">
            <BridgeBanner
              title="Os 4 eixos do ano"
              from={THEME.soft}
              to={THEME.primary}
            >
              <strong>Classes próprias</strong> em C# (além do MonoBehaviour) ·{" "}
              <strong>Pilares da POO</strong> aplicados a jogos (herança,
              polimorfismo, interfaces) · <strong>Arquitetura de sistemas</strong>{" "}
              (managers, ScriptableObjects, boas práticas) ·{" "}
              <strong>Capstone</strong> (jogo autoral do GDD ao build jogável).
            </BridgeBanner>
          </div>
        </div>
      </section>

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            A formatura do{" "}
            <span style={{ color: THEME.primary }}>CREATE</span>
          </>
        }
        description={
          <>
            O <strong>CREATE Ano 6</strong> é desenhado pro adolescente de{" "}
            <strong>13 e 14 anos</strong> que terminou o Ano 5 com domínio do
            Unity. Aqui ele dá o último salto: pensar como engenheiro de
            software e levar um jogo autoral do conceito à apresentação pública.
          </>
        }
        checklistTitle="É ideal se seu filho"
        items={[
          "Concluiu o Ano 5 do CREATE com bom domínio",
          "Programa em C# com scripts MonoBehaviour, física 2D e UI",
          "Quer aprofundar POO e arquitetura de software",
          "Está pronto pra desenvolver um jogo autoral completo de portfólio",
        ]}
        bg="muted"
      />

      <FormatSection theme={THEME} />

      <ProgressionTrail
        theme={THEME}
        eyebrow="Trilha Pixel · A Arquitetura Viva"
        title={
          <>
            Quatro insígnias da{" "}
            <span style={{ color: THEME.soft }}>arquitetura</span>
          </>
        }
        description={
          <>
            Nesta etapa final, o aprendiz deixa de só dar ordens ao motor e
            passa a <strong>projetar a estrutura do próprio jogo</strong>.
            Cada módulo concluído entrega uma insígnia. No projeto final, o
            aluno recebe o título de formatura{" "}
            <strong>Desenvolvedor de Jogos CREATE — Mestre da Trilha Pixel</strong>.
          </>
        }
        badges={INSIGNIAS}
      />

      <ModuleGrid
        theme={THEME}
        id="curriculo"
        eyebrow="Currículo"
        title="Os 4 módulos do ano final"
        description="De classes próprias ao jogo autoral exportado. Cada módulo é um marco da arquitetura de software aplicada a jogos."
        modules={MODULES}
        badgeLabel="Conquista"
      />

      <LessonAccordion theme={THEME} modules={MODULES} badgeWord="Insígnia" />

      <ToolGrid
        theme={THEME}
        title="Ferramentas profissionais"
        description="O mesmo Unity e C# do Ano 5, agora explorando os recursos avançados que separam um script de uma arquitetura."
        tools={TOOLS}
      />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      {/* Fechamento da jornada — banner especial */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border-2 bg-white p-8 sm:p-10" style={{ borderColor: THEME.soft }}>
              <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
                A jornada CREATE completa
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl" style={{ color: THEME.dark }}>
                6 anos · do primeiro sprite ao jogo de portfólio
              </h3>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-3 pr-4 text-xs font-black uppercase tracking-wider" style={{ color: THEME.primary }}>Ano</th>
                      <th className="py-3 pr-4 text-xs font-black uppercase tracking-wider" style={{ color: THEME.primary }}>Idade</th>
                      <th className="py-3 text-xs font-black uppercase tracking-wider" style={{ color: THEME.primary }}>Foco</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/85">
                    <tr className="border-b border-border/50"><td className="py-2.5 pr-4 font-bold">Ano 1–2</td><td className="py-2.5 pr-4">8–10</td><td className="py-2.5">MakeCode Arcade — blocos com transição pro texto</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2.5 pr-4 font-bold">Ano 3</td><td className="py-2.5 pr-4">10–11</td><td className="py-2.5">JavaScript do zero</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2.5 pr-4 font-bold">Ano 4</td><td className="py-2.5 pr-4">11–12</td><td className="py-2.5">JS intermediário + algoritmos</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2.5 pr-4 font-bold">Ano 5</td><td className="py-2.5 pr-4">12–13</td><td className="py-2.5">Unity com C# + jogo 2D completo</td></tr>
                    <tr className="border-b border-border/50" style={{ background: `${THEME.soft}15` }}><td className="py-2.5 pr-4 font-black" style={{ color: THEME.primary }}>Ano 6 (aqui)</td><td className="py-2.5 pr-4 font-bold">13–14</td><td className="py-2.5 font-bold">POO aprofundada + jogo autoral final</td></tr>
                    <tr><td className="py-2.5 pr-4 italic text-muted-foreground">Depois</td><td className="py-2.5 pr-4 italic text-muted-foreground">14+</td><td className="py-2.5 italic text-muted-foreground">Academies avançadas: Robótica e IA</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CourseCtaFinal
        theme={THEME}
        title="Pronto pra fechar a jornada CREATE?"
        description="Aula experimental gratuita. Seu filho vê o que separa um script de uma arquitetura — e descobre como será construir o próprio jogo de portfólio."
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental" }}
        secondaryCta={{ href: "/cursos/create", label: "Voltar ao CREATE" }}
      />
    </>
  );
}
