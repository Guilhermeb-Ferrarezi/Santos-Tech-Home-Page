import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { Repeat, Compass, Sparkles, Gamepad2, Tablet, Bot, Code2 } from "lucide-react";
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
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, coursePageSchemas } from "@/lib/seo";

export const Route = createFileRoute("/cursos/junior/6-7-anos")({
  component: Junior67Page,
  head: () =>
    pageMeta({
      title: "JR2 (6 a 7 anos) — Construindo a Base de Programação | Santos Tech",
      description:
        "Segundo curso do programa JR pra crianças de 6 a 7 anos em Ribeirão Preto. 40 aulas com ScratchJr avançado, robótica com lógica condicional e primeiros mini-jogos no Scratch. Mapa do Explorador com 4 insígnias.",
      path: "/cursos/junior/6-7-anos",
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

const INSIGNIAS: ProgressionBadge[] = [
  { name: "Repetidor", icon: Repeat, color: "#f59e0b", desc: "Repetição e eventos no ScratchJr" },
  { name: "Navegador", icon: Compass, color: "#06b6d4", desc: "Lógica e caminhos na robótica" },
  { name: "Palco", icon: Sparkles, color: "#10b981", desc: "Primeiros passos no Scratch" },
  { name: "Criador de Jogos", icon: Gamepad2, color: "#ef4444", desc: "Primeiro mini-jogo concluído" },
];

const MODULES: Module[] = [
  {
    n: 1,
    name: "ScratchJr Avançado: Repetição e Eventos",
    classes: "Aulas 1 a 10",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Usar o bloco de repetição para evitar comandos repetidos, coordenar personagens com mensagens (enviar e receber) e trabalhar com múltiplas cenas, velocidade e interação por toque.",
    project: "Animação que se Repete — animação interativa com repetição, mensagens entre personagens e troca de cena.",
    tool: "ScratchJr (gratuito)",
    badge: INSIGNIAS[0],
    icon: Tablet,
    lessons: [
      { n: 1, title: "Bem-vindo, Explorador", goal: "Retoma o ScratchJr e monta um cenário com vários personagens, conhecendo o que vai criar no ano." },
      { n: 2, title: "O Bloco que Repete", goal: "Usa o bloco de repetição para um personagem dançar várias vezes sem repetir comandos um a um." },
      { n: 3, title: "Repetir com Conta Certa", goal: "Escolhe quantas vezes uma ação acontece e percebe como o número muda o resultado." },
      { n: 4, title: "Laços Dentro de Laços", goal: "Combina repetições para criar padrões de movimento mais ricos, como pular e girar." },
      { n: 5, title: "Mensagens entre Personagens", goal: "Usa os blocos de enviar e receber recado para um personagem reagir ao outro." },
      { n: 6, title: "Trocando de Cena", goal: "Programa a mudança de páginas para contar uma história em vários ambientes." },
      { n: 7, title: "Velocidade e Ritmo", goal: "Controla a velocidade dos personagens e sincroniza ações ao mesmo tempo." },
      { n: 8, title: "Toque e Reação", goal: "Faz personagens responderem quando são tocados na tela, criando interação." },
      { n: 9, title: "Planejando minha Animação", goal: "Desenha no papel o roteiro do mini-projeto antes de programar." },
      { n: 10, title: "Mini-projeto: Animação que se Repete", goal: "Cria uma animação interativa com repetição, mensagens e troca de cena. Conquista a Insígnia do Repetidor." },
    ],
  },
  {
    n: 2,
    name: "Robótica com Lógica: Caminhos e Repetição",
    classes: "Aulas 11 a 19",
    duration: "9 semanas",
    hours: "18h",
    objectives:
      "Planejar e executar caminhos longos sem erro, repetir trechos de rota, desviar de obstáculos, introduzir a ideia de decisão (\"se\") e praticar depuração.",
    project: "O Labirinto Programado — montar um labirinto e programar o robô para vencê-lo usando repetição.",
    tool: "Bee-Bot / Code & Go",
    badge: INSIGNIAS[1],
    icon: Bot,
    lessons: [
      { n: 11, title: "De Volta aos Robôs", goal: "Revê o robô e enfrenta desafios de caminho mais longos, planejando a rota antes de apertar os botões." },
      { n: 12, title: "Caminhos Longos sem Erro", goal: "Sequencia muitos comandos para chegar a um destino distante, conferindo cada passo." },
      { n: 13, title: "Repetir com o Robô", goal: "Descobre como repetir um trecho de caminho para economizar comandos." },
      { n: 14, title: "Desafio do Quadrado", goal: "Programa o robô para desenhar formas, repetindo andar e virar." },
      { n: 15, title: "Mapa com Obstáculos", goal: "Planeja rotas que desviam de obstáculos no tabuleiro." },
      { n: 16, title: "Dois Robôs, Uma Missão", goal: "Coordena dois robôs (ou dois colegas) para cumprir tarefas sem colidir." },
      { n: 17, title: "Decisão no Caminho", goal: "Escolhe o caminho certo conforme a situação do tabuleiro, conhecendo a ideia de \"se\"." },
      { n: 18, title: "Depurar o Robô", goal: "Encontra e conserta erros em uma sequência que não funcionou." },
      { n: 19, title: "Mini-projeto: O Labirinto Programado", goal: "Monta um labirinto e programa o robô para vencê-lo com repetição. Conquista a Insígnia do Navegador." },
    ],
  },
  {
    n: 3,
    name: "Primeiros Passos no Scratch",
    classes: "Aulas 20 a 30",
    duration: "11 semanas",
    hours: "22h",
    objectives:
      "Conhecer a interface do Scratch (palco, atores, blocos), iniciar programas com eventos e usar movimento, fala, laços \"sempre\" e \"repita\", troca de fantasias, som e cenários.",
    project: "Cartão Animado — cartão interativo com movimento, fala e som.",
    tool: "Scratch (gratuito)",
    badge: INSIGNIAS[2],
    icon: Sparkles,
    lessons: [
      { n: 20, title: "Conhecendo o Scratch", goal: "Explora a tela do Scratch (palco, atores e blocos) e move um ator pela primeira vez." },
      { n: 21, title: "Quando Clico na Bandeira", goal: "Usa o bloco de evento para iniciar o programa com a bandeira verde." },
      { n: 22, title: "Andar, Girar e Voltar", goal: "Combina blocos de movimento para guiar o ator pelo palco." },
      { n: 23, title: "Falar e Pensar", goal: "Adiciona balões de fala e pensamento para o ator se comunicar." },
      { n: 24, title: "Sempre em Movimento", goal: "Usa o laço \"sempre\" para criar ação contínua." },
      { n: 25, title: "Repita Quantas Vezes", goal: "Usa o bloco \"repita\" para padrões e animações controladas." },
      { n: 26, title: "Trocando de Fantasia", goal: "Anima o ator alternando fantasias para dar ideia de movimento." },
      { n: 27, title: "Som e Música", goal: "Adiciona efeitos sonoros e ritmo sincronizados com a ação." },
      { n: 28, title: "Cenários e Fundos", goal: "Troca o pano de fundo e cria ambientes diferentes na mesma cena." },
      { n: 29, title: "Planejando minha Cena", goal: "Esboça no papel a cena interativa do mini-projeto." },
      { n: 30, title: "Mini-projeto: Cartão Animado", goal: "Cria um cartão interativo com movimento, fala e som. Conquista a Insígnia do Palco." },
    ],
  },
  {
    n: 4,
    name: "Mini-jogos no Scratch",
    classes: "Aulas 31 a 40",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Identificar os elementos de um jogo, controlar atores por teclado e mouse, detectar colisões, usar um condicional simples (\"se... então\") e criar coleta de itens e condição de fim de jogo.",
    project: "Meu Primeiro Jogo — jogo de coletar ou desviar com controle por teclado, colisão e condição de vitória/derrota.",
    tool: "Scratch (gratuito)",
    badge: INSIGNIAS[3],
    icon: Gamepad2,
    lessons: [
      { n: 31, title: "O que faz um Jogo?", goal: "Analisa jogos simples e identifica objetivo, regras e controles." },
      { n: 32, title: "Controlando pelo Teclado", goal: "Programa o ator para se mover com as setas do teclado." },
      { n: 33, title: "Seguindo o Mouse", goal: "Faz um ator seguir o ponteiro do mouse pela tela." },
      { n: 34, title: "Tocar em Alguma Coisa", goal: "Usa o bloco \"tocando em\" para detectar encontros entre atores." },
      { n: 35, title: "Se Tocar, Acontece Algo", goal: "Usa um \"se\" simples para reagir a uma colisão, formalizando o condicional." },
      { n: 36, title: "Aparecer e Desaparecer", goal: "Mostra e esconde atores para simular a coleta de itens." },
      { n: 37, title: "Itens que Surgem", goal: "Posiciona itens em lugares aleatórios para o jogador coletar." },
      { n: 38, title: "Vencer e Perder", goal: "Define uma condição simples de fim de jogo com mensagem de vitória ou derrota." },
      { n: 39, title: "Planejando meu Jogo", goal: "Projeta no papel as regras e a tela do mini-jogo." },
      { n: 40, title: "Mini-projeto: Meu Primeiro Jogo", goal: "Cria um jogo de coletar ou desviar com teclado, colisão e condição de fim. Conquista a Insígnia do Criador de Jogos e o título de Explorador Graduado." },
    ],
  },
];

const TOOLS: Tool[] = [
  { name: "ScratchJr", type: "Gratuito", role: "Continuidade do JR1 com recursos avançados — repetição, mensagens, múltiplas cenas.", icon: Tablet },
  { name: "Bee-Bot / Code & Go", type: "Hardware (escola)", role: "Robô físico de chão. Caminhos longos, repetição e decisões no tabuleiro.", icon: Bot },
  { name: "Scratch (MIT)", type: "Gratuito", role: "Versão completa no computador. Palco, atores, eventos, laços e condicionais.", icon: Code2 },
];

const FAQ: FaqItem[] = [
  {
    q: "Meu filho não fez o JR1. Ele consegue entrar direto no JR2?",
    a: "Sim, mas a gente conversa antes pra avaliar. O JR2 assume que a criança já tem noção de sequência e comandos básicos. Se ela ainda não, recomendamos JR1 ou uma turma de nivelamento.",
  },
  {
    q: "É preciso já saber ler?",
    a: "Vir alfabetizado ajuda muito — o Scratch tem textos curtos nos blocos. Crianças em alfabetização também acompanham, mas com mais apoio do professor.",
  },
  {
    q: "Qual a diferença pro JR1?",
    a: "JR1 é a base lúdica e desplugada. JR2 já avança pra lógica de programação real: repetição, eventos, mensagens, primeiros jogos no Scratch. Cada módulo termina com mini-projeto autoral.",
  },
  {
    q: "Quanto tempo dura?",
    a: "1 ano letivo: 40 aulas, 80 horas, 4 módulos. Cada módulo termina com uma insígnia do Mapa do Explorador. No fim do ano, a criança vira Explorador Graduado e avança pro JR3.",
  },
  {
    q: "Como é a frequência?",
    a: "2 horas por semana. Família escolhe: 1 aula de 2h ou 2 aulas de 1h. Conteúdo é o mesmo — no formato 2x, a aula vira Parte A + Parte B, sem repetição.",
  },
  {
    q: "Como acompanho o progresso do meu filho?",
    a: "A cada módulo concluído ele conquista uma insígnia (Repetidor → Navegador → Palco → Criador de Jogos). Você também recebe feedback dos professores e vê os mini-projetos.",
  },
  {
    q: "Qual o investimento?",
    a: "Te passamos valor e formas de pagamento na visita guiada. Aproveita pra conhecer o espaço, ver uma aula e tirar dúvidas — sem compromisso.",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────

function Junior67Page() {
  return (
    <>
      <JsonLd
        data={coursePageSchemas({
          path: "/cursos/junior/6-7-anos",
          programName: "JR",
          programPath: "/cursos/junior",
          courseName: "JR2 — Construindo a Base (6 a 7 anos)",
          courseDescription:
            "Segundo curso do programa JR da Santos Tech. 40 aulas anuais com ScratchJr avançado, robótica usando lógica condicional e os primeiros mini-jogos no Scratch (MIT). Mapa do Explorador com 4 insígnias de conquista.",
          ageMin: 6,
          ageMax: 7,
          faq: FAQ,
        })}
      />
      <CourseHero
        theme={THEME}
        breadcrumb={{ href: "/cursos/junior", label: "Programa JR" }}
        eyebrow="JR2 · 6 a 7 anos"
        title={
          <>
            Construindo <br />
            <span style={{ color: THEME.soft }}>a Base</span>
          </>
        }
        subtitle={
          <>
            <p>
              O ano em que a criança começa a <strong>ler</strong> e a{" "}
              <strong>programar com lógica</strong> — repetição, eventos e os
              primeiros mini-jogos.
            </p>
            <p>
              Aprofunda o <strong>ScratchJr</strong>, dá os primeiros passos no{" "}
              <strong>Scratch</strong> e segue criando com robótica.
            </p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Agendar visita guiada grátis" }}
        secondaryCta={{ href: "#curriculo", label: "Ver currículo completo" }}
        imageName="capa-jr"
        imageAlt="Criança de 6 anos criando jogo no ScratchJr"
        blobId="junior67Blob"
        decor="playful"
        metrics={[
          { value: "40", label: "Aulas" },
          { value: "80h", label: "Carga horária" },
          { value: "40", label: "Semanas" },
          { value: "6–7", label: "Faixa etária" },
        ]}
      />

      {/* CARDS DE TRANSIÇÃO ENTRE BLOCOS — específico do JR2 */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              A proposta
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Aprender criando, agora com{" "}
              <span style={{ color: THEME.primary }}>lógica</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              O JR2 parte de uma virada importante: a criança começa a ler, o
              que permite avançar do programar só por ícones para o programar
              com apoio de texto e números. O foco do ano é{" "}
              <strong>repetição (loops)</strong>,{" "}
              <strong>eventos</strong> e a introdução de{" "}
              <strong>condicionais simples</strong>. Cada módulo termina com um
              mini-projeto autoral.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal delay={120}>
              <div className="h-full rounded-xl border bg-white p-6 shadow-sm" style={{ borderColor: THEME.soft }}>
                <p className="text-xs font-black uppercase tracking-wider" style={{ color: THEME.primary }}>
                  De onde viemos (JR1)
                </p>
                <p className="mt-2 text-sm text-foreground/85">
                  Sequência, comando e caminho desplugados, robótica tangível
                  inicial, primeiros passos no ScratchJr e mini-projetos. O JR2
                  assume isso como dominado e não repete.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full rounded-xl border bg-white p-6 shadow-sm" style={{ borderColor: THEME.primary + "60" }}>
                <p className="text-xs font-black uppercase tracking-wider" style={{ color: THEME.primary }}>
                  Para onde vamos (JR3)
                </p>
                <p className="mt-2 text-sm text-foreground/85">
                  O condicional simples e os mini-jogos abertos aqui preparam o
                  terreno para variáveis e condicionais completas no JR3, o
                  ano-ponte para o CREATE.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            O segundo ano da{" "}
            <span style={{ color: THEME.primary }}>jornada</span>
          </>
        }
        description={
          <>
            O <strong>JR2</strong> é desenhado pra criança de{" "}
            <strong>6 e 7 anos</strong> que está em alfabetização e já tem
            noção de sequência e comandos. Vai dar o salto da brincadeira pra
            programação com lógica de verdade.
          </>
        }
        checklistTitle="É ideal se seu filho"
        items={[
          "Está em fase de alfabetização (lê palavras simples)",
          "Já fez o JR1 ou tem noção de sequência e comandos",
          "Curte criar histórias, animações e quer fazer o próprio jogo",
          "Tem foco pra projetos com começo, meio e fim",
        ]}
        bg="muted"
      />

      <FormatSection theme={THEME} />

      <ProgressionTrail
        theme={THEME}
        eyebrow="Sistema de níveis"
        title={
          <>
            Mapa do <span style={{ color: THEME.soft }}>Explorador</span>
          </>
        }
        description={
          <>
            Continuando o Passaporte do Inventor do JR1, aqui a criança vira um{" "}
            <strong>Explorador</strong> que percorre uma trilha e conquista uma
            insígnia ao concluir cada módulo. Reunindo as 4 insígnias, ela
            recebe o título de <strong>Explorador Graduado</strong> e avança
            pro JR3.
          </>
        }
        badges={INSIGNIAS}
      />

      <ModuleGrid
        theme={THEME}
        id="curriculo"
        eyebrow="Currículo"
        title="Os 4 módulos do ano"
        description="Dificuldade crescente. Cada módulo termina com um mini-projeto autoral que vira a conquista da insígnia."
        modules={MODULES}
        badgeLabel="Conquista"
      />

      <LessonAccordion theme={THEME} modules={MODULES} badgeWord="Insígnia do" />

      <ToolGrid theme={THEME} title="Tecnologia de mercado, nada inventado" tools={TOOLS} />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Pronto pra ver o JR2 ao vivo?"
        description="Venha conhecer o espaço, ver uma aula em andamento e tirar todas as dúvidas. Visita guiada, sem compromisso."
        primaryCta={{ href: WHATSAPP, label: "Agendar visita guiada grátis" }}
        secondaryCta={{ href: "/cursos/junior", label: "Voltar ao programa JR" }}
      />
    </>
  );
}
