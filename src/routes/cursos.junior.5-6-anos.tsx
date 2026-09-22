import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Lightning as PhLightning,
  Cpu as PhCpu,
  GearSix as PhGearSix,
  Rocket as PhRocket,
  Star as PhStar,
  DeviceTablet as PhDeviceTablet,
  Robot as PhRobot,
  HandPointing as PhHandPointing,
  Sparkle as PhSparkle,
} from "@phosphor-icons/react";
import { phosphor } from "@/lib/phosphor";

// Badges do Passaporte do Inventor — bold (presença em fundo colorido + ícone branco)
const Lightning = phosphor(PhLightning, "bold");
const Cpu = phosphor(PhCpu, "bold");
const GearSix = phosphor(PhGearSix, "bold");
const Rocket = phosphor(PhRocket, "bold");
const Star = phosphor(PhStar, "bold");

// Ícones de módulo — duotone (presença em containers tintados claros)
const Tablet = phosphor(PhDeviceTablet, "duotone");
const Bot = phosphor(PhRobot, "duotone");
const Hand = phosphor(PhHandPointing, "duotone");
const Sparkles = phosphor(PhSparkle, "duotone");
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
  type CourseTheme,
  type Module,
  type Tool,
  type FaqItem,
  type ProgressionBadge,
} from "@/components/course-page";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, coursePageSchemas } from "@/lib/seo";

export const Route = createFileRoute("/cursos/junior/5-6-anos")({
  component: Junior56Page,
  head: () =>
    pageMeta({
      title: "JR1 (5 a 6 anos) — Primeiros Passos em Programação | Santos Tech",
      description:
        "Primeiro curso do programa JR: 40 aulas anuais de programação pra crianças de 5 a 6 anos em Ribeirão Preto, sem precisar saber ler. Atividades desplugadas, robótica tangível e ScratchJr. Passaporte do Inventor com sistema próprio de progressão.",
      path: "/cursos/junior/5-6-anos",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

// ──────────────────────────────────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────────────────────────────────

const THEME: CourseTheme = {
  primary: "#512374",
  dark: "#3d1858",
  soft: "#DEABF7",
};

const SELOS: ProgressionBadge[] = [
  { name: "Faísca", icon: Lightning, color: "#f59e0b", desc: "Primeira ideia acende" },
  { name: "Circuito", icon: Cpu, color: "#06b6d4", desc: "Ligações entre comandos" },
  { name: "Engrenagem", icon: GearSix, color: "#10b981", desc: "Tudo começa a girar" },
  { name: "Foguete", icon: Rocket, color: "#ef4444", desc: "Decolagem dos projetos" },
  { name: "Estrela Tech", icon: Star, color: "#facc15", desc: "Inventor formado" },
];

const MODULES: Module[] = [
  {
    n: 1,
    name: "Comando e Caminho",
    classes: "Aulas 1 a 8",
    duration: "8 semanas",
    hours: "16h",
    objectives:
      "Atividades desplugadas — sequência, comandos, noção de caminho e direção. A criança aprende lógica antes mesmo de tocar num teclado.",
    tool: "Desplugado (gratuito)",
    badge: SELOS[0],
    icon: Hand,
    lessons: [
      { n: 1, title: "O que é um comando", goal: "Desenvolve a noção de que uma ordem gera uma ação, dando e seguindo instruções simples com o corpo." },
      { n: 2, title: "Um passo de cada vez", goal: "Desenvolve a ideia de sequência: as ações acontecem em uma ordem e essa ordem importa." },
      { n: 3, title: "Para onde eu vou", goal: "Desenvolve as noções de direção — frente, trás e lados — orientando o próprio corpo no espaço." },
      { n: 4, title: "O caminho no tapete", goal: "Desenvolve o planejamento de uma rota simples em um tapete-grid, escolhendo por onde passar." },
      { n: 5, title: "Setas que mandam", goal: "Desenvolve a leitura de símbolos e setas como uma linguagem de instrução sem palavras." },
      { n: 6, title: "Ops, errei!", goal: "Desenvolve a depuração inicial: identificar qual passo da sequência deu errado e trocá-lo." },
      { n: 7, title: "Repetir é mais fácil", goal: "Desenvolve a ideia de repetição, percebendo que fazer o mesmo passo várias vezes simplifica o caminho." },
      { n: 8, title: "Meu primeiro mapa", goal: "Consolida o módulo: a criança cria e executa uma sequência completa de comandos até chegar a um objetivo." },
    ],
  },
  {
    n: 2,
    name: "Robôs que Obedecem",
    classes: "Aulas 9 a 18",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Robô tangível (Bee-Bot / Code & Go). Sai do papel e vai pro robô físico — a criança vê o resultado dos próprios comandos.",
    tool: "Bee-Bot / Code & Go (hardware)",
    badge: SELOS[1],
    icon: Bot,
    lessons: [
      { n: 9, title: "Conhecendo o robô", goal: "Desenvolve a familiaridade com o robô e seus botões, entendendo que cada botão é um comando." },
      { n: 10, title: "Frente e trás", goal: "Desenvolve a programação de movimentos lineares, fazendo o robô andar para frente e para trás." },
      { n: 11, title: "Virar é girar", goal: "Desenvolve a noção de giro: virar não faz o robô andar, apenas muda para onde ele aponta." },
      { n: 12, title: "Sequência no robô", goal: "Desenvolve montar uma fila de comandos antes de apertar o 'ir', planejando a ação inteira." },
      { n: 13, title: "Chegar no alvo", goal: "Desenvolve o planejamento de rota até um destino marcado no tapete, combinando andar e virar." },
      { n: 14, title: "Desviar do obstáculo", goal: "Desenvolve replanejar a rota quando há um bloqueio no caminho, buscando um trajeto alternativo." },
      { n: 15, title: "Conta os passos", goal: "Desenvolve a estimativa e a contagem, prevendo quantos comandos faltam para chegar ao alvo." },
      { n: 16, title: "Achar o erro do robô", goal: "Desenvolve a depuração na prática: testar, observar onde o robô errou e corrigir o comando." },
      { n: 17, title: "Robô faz repetição", goal: "Desenvolve o uso de repetição de comandos para vencer caminhos longos com menos esforço." },
      { n: 18, title: "Desafio do labirinto", goal: "Consolida o módulo: programar o robô por um percurso completo com curvas e obstáculos." },
    ],
  },
  {
    n: 3,
    name: "Telas Mágicas",
    classes: "Aulas 19 a 30",
    duration: "12 semanas",
    hours: "24h",
    objectives:
      "ScratchJr no tablet. A criança vai pro digital criando histórias e animações interativas com blocos visuais — eventos, sequência, repetição.",
    tool: "ScratchJr / codeSpark",
    badge: SELOS[2],
    icon: Tablet,
    lessons: [
      { n: 19, title: "A tela responde", goal: "Desenvolve a noção de que tocar e comandar a tela gera ação, conhecendo o personagem e o palco." },
      { n: 20, title: "Mover o personagem", goal: "Desenvolve o uso dos blocos de movimento do ScratchJr para deslocar o personagem na tela." },
      { n: 21, title: "Começar com a bandeira", goal: "Desenvolve o conceito de início e gatilho: um evento que dispara a sequência de blocos." },
      { n: 22, title: "Sequência de blocos", goal: "Desenvolve o encadeamento de vários blocos em ordem para formar uma ação composta." },
      { n: 23, title: "Repetir com blocos", goal: "Desenvolve o bloco de repetição na tela, transferindo a ideia de laço para o ambiente digital." },
      { n: 24, title: "Trocar de cenário", goal: "Desenvolve a mudança de fundo e de cena, percebendo que a história pode mudar de lugar." },
      { n: 25, title: "Personagem fala", goal: "Desenvolve adicionar balão de fala e som ao personagem, dando voz à animação." },
      { n: 26, title: "Quando eu toco", goal: "Desenvolve eventos de interação: programar algo para acontecer ao tocar no personagem." },
      { n: 27, title: "Dois personagens juntos", goal: "Desenvolve coordenar mais de um personagem ao mesmo tempo, uma noção inicial de paralelismo." },
      { n: 28, title: "Conserta a animação", goal: "Desenvolve a depuração na tela: descobrir por que a animação não funcionou e ajustá-la." },
      { n: 29, title: "Minha cena animada", goal: "Desenvolve montar uma cena própria reunindo movimento, fala e cenário em um só projeto." },
      { n: 30, title: "Mostrar para a turma", goal: "Consolida o módulo: a criança apresenta sua animação e explica quais blocos usou e por quê." },
    ],
  },
  {
    n: 4,
    name: "Pequenos Criadores",
    classes: "Aulas 31 a 40",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Projeto autoral em ScratchJr. A criança escolhe o tema, planeja, programa, apresenta. Tudo que aprendeu vira projeto próprio.",
    tool: "ScratchJr + projeto autoral",
    badge: SELOS[3],
    icon: Sparkles,
    lessons: [
      { n: 31, title: "Pensar antes de criar", goal: "Desenvolve a noção de planejar uma ideia antes de programar, imaginando o que quer construir." },
      { n: 32, title: "Escolher minha história", goal: "Desenvolve a autoria, escolhendo o tema e os personagens do próprio projeto." },
      { n: 33, title: "Cena por cena", goal: "Desenvolve a decomposição, dividindo a história em partes e cenas menores e mais fáceis." },
      { n: 34, title: "Programar a primeira cena", goal: "Desenvolve aplicar blocos para construir a abertura do projeto, transformando o plano em ação." },
      { n: 35, title: "Dar movimento à história", goal: "Desenvolve combinar movimento, repetição e eventos para fazer a história ganhar vida." },
      { n: 36, title: "Som e fala na história", goal: "Desenvolve enriquecer o projeto com áudio, falas e efeitos, dando personalidade à criação." },
      { n: 37, title: "Testar e melhorar", goal: "Desenvolve testar o projeto inteiro e corrigir o que não funciona, aplicando depuração ao próprio trabalho." },
      { n: 38, title: "Detalhes finais", goal: "Desenvolve refinar o visual e a sequência, deixando o projeto completo e do jeito que imaginou." },
      { n: 39, title: "Ensaio da apresentação", goal: "Desenvolve organizar a fala para mostrar o que criou, exercitando comunicação e confiança." },
      { n: 40, title: "Mostra de Inventores", goal: "Consolida o JR1: a criança apresenta seu projeto autoral à turma e às famílias — e conquista o selo Estrela Tech." },
    ],
  },
];

const TOOLS: Tool[] = [
  { name: "Atividades desplugadas", type: "Gratuito", role: "Lógica e sequência sem computador. Tapetes, cartões, jogos físicos.", icon: Hand },
  { name: "ScratchJr", type: "Gratuito", role: "Linguagem visual com blocos — criança cria animações sem precisar saber ler.", icon: Tablet },
  { name: "Bee-Bot / Code & Go", type: "Hardware (escola)", role: "Robô físico de chão. A criança programa, aperta 'go' e vê o resultado.", icon: Bot },
  { name: "codeSpark", type: "Assinatura (escola)", role: "App de jogos de programação pra criança, com progressão guiada.", icon: Sparkles },
];

const FAQ: FaqItem[] = [
  {
    q: "Meu filho ainda não sabe ler. Consegue acompanhar?",
    a: "Sim. O JR1 foi desenhado exatamente pra essa faixa. Todo o conteúdo é visual — ícones, cores, blocos de arrastar e soltar, atividades físicas. Nenhuma aula depende de leitura.",
  },
  {
    q: "Como é a frequência das aulas?",
    a: "São 2 horas por semana. A família escolhe o formato: uma aula única de 2h ou duas aulas de 1h em dias diferentes. O conteúdo é o mesmo — a aula de 2h vira Parte A + Parte B no formato dividido, sem repetir conteúdo.",
  },
  {
    q: "Quanto tempo dura o curso?",
    a: "1 ano letivo: 40 semanas, 80 horas, 40 aulas no total. Cada módulo (4 no ano) termina com uma conquista visível no Passaporte do Inventor.",
  },
  {
    q: "Meu filho fica frustrado fácil. Vai funcionar?",
    a: "O método foi feito pra primeira infância — atividades curtas, conquistas frequentes, ambiente acolhedor. As turmas são pequenas e os professores são treinados pra acompanhar o ritmo de cada criança.",
  },
  {
    q: "É 100% presencial?",
    a: "Sim. Todas as aulas acontecem no nosso espaço em Ribeirão Preto (Av. Nove de Julho, 1992 — Jardim América). Ambiente seguro, área de espera pros pais e acesso controlado.",
  },
  {
    q: "Como vou acompanhar o progresso do meu filho?",
    a: "A cada módulo concluído a criança conquista um selo do Passaporte do Inventor (Faísca → Circuito → Engrenagem → Foguete → Estrela Tech). Você também recebe feedback dos professores e vê os projetos que ele criou.",
  },
  {
    q: "Qual o investimento?",
    a: "Vamos te passar o valor e formas de pagamento no agendamento da visita guiada. Aproveitamos pra te mostrar o espaço, ver uma aula em andamento e tirar todas as dúvidas — sem compromisso.",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────

function Junior56Page() {
  return (
    <>
      <JsonLd
        data={coursePageSchemas({
          path: "/cursos/junior/5-6-anos",
          programName: "JR",
          programPath: "/cursos/junior",
          courseName: "JR1 — Primeiros Passos em Programação (5 a 6 anos)",
          courseDescription:
            "Primeiro curso do programa JR da Santos Tech. 40 aulas anuais que introduzem programação a crianças de 5 a 6 anos sem necessidade de leitura. Atividades desplugadas, robótica tangível com Bee-Bot e primeiros projetos no ScratchJr. Sistema Passaporte do Inventor.",
          ageMin: 5,
          ageMax: 6,
          faq: FAQ,
        })}
      />
      <CourseHero
        theme={THEME}
        breadcrumb={{ href: "/cursos/junior", label: "Programa JR" }}
        eyebrow="JR1 · 5 a 6 anos"
        title={
          <>
            Primeiros <br />
            <span style={{ color: THEME.soft }}>Passos</span>
          </>
        }
        subtitle={
          <p>
            Um ano de descoberta. Seu filho aprende lógica, sequência e
            resolução de problemas brincando — do tapete físico ao tablet,
            <strong> sem precisar saber ler</strong>.
          </p>
        }
        primaryCta={{ href: WHATSAPP, label: "Agendar visita guiada grátis" }}
        secondaryCta={{ href: "#curriculo", label: "Ver currículo completo" }}
        imageName="capa-jr"
        imageAlt="Criança de 5 anos em atividade lúdica de lógica na Santos Tech"
        blobId="junior56Blob"
        decor="playful"
        metrics={[
          { value: "40", label: "Aulas" },
          { value: "80h", label: "Carga horária" },
          { value: "40", label: "Semanas" },
          { value: "5–6", label: "Faixa etária" },
        ]}
      />

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            O primeiro passo no mundo da{" "}
            <span style={{ color: THEME.primary }}>programação</span>
          </>
        }
        description={
          <>
            O <strong>JR1</strong> é desenhado pra criança de{" "}
            <strong>5 e 6 anos</strong> que ainda não sabe ler, é curiosa por
            tela e precisa de um ambiente que canalize essa curiosidade pra
            algo construtivo.
          </>
        }
        checklistTitle="É ideal se seu filho"
        items={[
          "Vive grudado no celular ou tablet e você quer redirecionar isso",
          "Pergunta como as coisas funcionam o tempo todo",
          "Tem 5 ou 6 anos e ainda não lê fluentemente — sem problema",
          "Está começando a entender 'antes e depois', sequência e regras",
        ]}
      />

      <FormatSection
        theme={THEME}
        footnote={
          <>
            <strong style={{ color: THEME.primary }}>Sobre o formato dividido:</strong>{" "}
            a aula de 2h pode virar Parte A (1h) + Parte B (1h) — é a{" "}
            <strong>mesma aula</strong>, dividida em duas metades. Não é
            repetição de conteúdo. Você escolhe o que se encaixa melhor na
            agenda da família.
          </>
        }
      />

      <ProgressionTrail
        theme={THEME}
        eyebrow="Sistema próprio Santos Tech"
        title={
          <>
            Passaporte do <span style={{ color: THEME.soft }}>Inventor</span>
          </>
        }
        description={
          <>
            A cada módulo concluído, seu filho conquista um selo. Ao terminar
            o ano, ele tem o Passaporte completo — e você vê de forma clara o
            quanto ele evoluiu.
          </>
        }
        badges={SELOS}
      />

      <ModuleGrid
        theme={THEME}
        id="curriculo"
        eyebrow="Currículo"
        title="Os 4 módulos do ano"
        description="Cada módulo tem foco próprio, ferramenta própria e termina com a conquista de um selo. A progressão vai do mais concreto (corpo, tapete) ao mais abstrato (tela, projeto autoral)."
        modules={MODULES}
        badgeLabel="Conquista ao final"
      />

      <LessonAccordion theme={THEME} modules={MODULES} badgeWord="Selo" />

      <ToolGrid
        theme={THEME}
        title="Tecnologia de mercado, nada inventado"
        description="Usamos as ferramentas mais reconhecidas no ensino de programação infantil. Algumas são gratuitas, outras são pagas — todas estão incluídas no curso."
        tools={TOOLS}
      />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Pronto pra ver o JR1 ao vivo?"
        description="Venha conhecer o espaço, ver uma aula em andamento e tirar todas as dúvidas. É uma visita guiada, sem compromisso."
        primaryCta={{ href: WHATSAPP, label: "Agendar visita guiada grátis" }}
        secondaryCta={{ href: "/cursos/junior", label: "Voltar ao programa JR" }}
      />
    </>
  );
}
