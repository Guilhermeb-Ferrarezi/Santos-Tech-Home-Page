import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  PaintBrush as PhPaintBrush,
  GearSix as PhGearSix,
  Sword as PhSword,
  Trophy as PhTrophy,
  GameController as PhGameController,
  Sparkle as PhSparkle,
} from "@phosphor-icons/react";
import { phosphor } from "@/lib/phosphor";

// Insígnias Pixel — bold (presença em fundo colorido + ícone branco)
const Brush = phosphor(PhPaintBrush, "bold");
const Cog = phosphor(PhGearSix, "bold");
const Swords = phosphor(PhSword, "bold");
const Trophy = phosphor(PhTrophy, "bold");

// Ícones de módulo — duotone (containers tintados claros)
const Gamepad2 = phosphor(PhGameController, "duotone");
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
  BridgeBanner,
  type CourseTheme,
  type Module,
  type Tool,
  type FaqItem,
  type ProgressionBadge,
} from "@/components/course-page";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { pageMeta, coursePageSchemas } from "@/lib/seo";

export const Route = createFileRoute("/cursos/create/8-9-anos")({
  component: Create89Page,
  head: () =>
    pageMeta({
      title: "CREATE Ano 1 (8 a 9 anos) — Fundamentos do Arcade | Santos Tech",
      description:
        "Primeiro ano do CREATE: 40 aulas no MakeCode Arcade pra crianças de 8 a 9 anos em Ribeirão Preto. Do primeiro sprite ao jogo completo autoral. Trilha de Insígnias Pixel com 5 conquistas.",
      path: "/cursos/create/8-9-anos",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

// ──────────────────────────────────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────────────────────────────────

const THEME: CourseTheme = {
  primary: "#187ABF",
  dark: "#04325A",
  soft: "#49A8EB",
};

const INSIGNIAS: ProgressionBadge[] = [
  { name: "Pixel Aprendiz", icon: Brush, color: "#f59e0b", desc: "Sprites, movimento e cenário" },
  { name: "Pixel Construtor", icon: Cog, color: "#06b6d4", desc: "Eventos, variáveis e regras" },
  { name: "Pixel Estrategista", icon: Swords, color: "#10b981", desc: "Inimigos, laços e fases" },
  { name: "Pixel Criador", icon: Trophy, color: "#ef4444", desc: "Jogo completo publicado" },
];

const MODULES: Module[] = [
  {
    n: 1,
    name: "Fundamentos do Arcade: O Mundo dos Sprites",
    classes: "Aulas 1 a 10",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Ambientar a criança no MakeCode Arcade, dominar a criação e personalização de sprites, programar movimento e controles, montar um cenário e dar vida ao jogo com som e animação.",
    project: "Mundo Interativo — cenário explorável com personagem que se move livremente, respeita os limites da tela e reage com som.",
    tool: "MakeCode Arcade (gratuito)",
    badge: INSIGNIAS[0],
    icon: Brush,
    lessons: [
      { n: 1, title: "Bem-vindo ao Arcade", goal: "A criança conhece o ambiente do MakeCode Arcade, cria seu primeiro sprite e o vê aparecer na tela." },
      { n: 2, title: "Meu Personagem em Pixels", goal: "A criança usa o editor de imagens para desenhar e personalizar o sprite do seu herói." },
      { n: 3, title: "Para a Esquerda e Direita", goal: "A criança programa os controles para mover o personagem pelos lados da tela." },
      { n: 4, title: "Movimento em Todas as Direções", goal: "A criança adiciona movimento para cima e para baixo e controla o sprite livremente." },
      { n: 5, title: "Os Limites da Tela", goal: "A criança faz o personagem respeitar as bordas para não sumir da cena." },
      { n: 6, title: "Pintando o Cenário", goal: "A criança cria um plano de fundo e dá identidade visual ao seu jogo." },
      { n: 7, title: "Vários Sprites na Cena", goal: "A criança adiciona outros sprites (itens e decoração) e organiza o cenário." },
      { n: 8, title: "Velocidade e Estilo", goal: "A criança ajusta a velocidade do personagem e experimenta ritmos diferentes de movimento." },
      { n: 9, title: "Som e Animação", goal: "A criança adiciona efeitos sonoros e pequenas animações para dar vida ao sprite." },
      { n: 10, title: "Mini-Projeto: Mundo Interativo", goal: "A criança reúne tudo num cenário explorável com personagem que se move e reage. Conquista a insígnia Pixel Aprendiz." },
    ],
  },
  {
    n: 2,
    name: "Regras do Jogo: Pontos, Vidas e Decisões",
    classes: "Aulas 11 a 20",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Introduzir eventos, variáveis (pontuação e vidas), detecção de colisões, condicionais e regras de vitória e derrota — tudo o que transforma um cenário em um jogo de verdade.",
    project: "Caça aos Itens — jogo de coletar itens com placar, vidas, cronômetro e telas de vitória e game over.",
    tool: "MakeCode Arcade (gratuito)",
    badge: INSIGNIAS[1],
    icon: Cog,
    lessons: [
      { n: 11, title: "O que é um Evento", goal: "A criança aprende a usar eventos ('quando acontecer...') para disparar ações no jogo." },
      { n: 12, title: "Guardando Números: Variáveis", goal: "A criança cria uma variável de pontuação e entende como o jogo 'lembra' valores." },
      { n: 13, title: "Coletando Itens", goal: "A criança programa a coleta de itens que aumentam a pontuação na tela." },
      { n: 14, title: "Colisões: Quando Dois Sprites se Encontram", goal: "A criança detecta o encontro entre sprites e faz algo acontecer." },
      { n: 15, title: "Sistema de Vidas", goal: "A criança cria vidas e mostra na tela quando o jogador perde uma." },
      { n: 16, title: "Decisões com 'Se... Então'", goal: "A criança usa condicionais para o jogo tomar decisões com base no que acontece." },
      { n: 17, title: "Condições Compostas", goal: "A criança combina condições (e / ou) para criar regras mais espertas." },
      { n: 18, title: "Vitória e Derrota", goal: "A criança define as regras que terminam o jogo com vitória ou game over." },
      { n: 19, title: "Placar e Cronômetro", goal: "A criança adiciona contagem de tempo e exibe o placar para o jogador." },
      { n: 20, title: "Mini-Projeto: Caça aos Itens", goal: "A criança entrega um jogo de coletar com pontos, vidas e fim de jogo. Conquista a insígnia Pixel Construtor." },
    ],
  },
  {
    n: 3,
    name: "Ação e Desafio: Inimigos, Repetição e Fases",
    classes: "Aulas 21 a 30",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Usar laços de repetição, gerar inimigos e itens automaticamente, trabalhar aleatoriedade, criar projéteis e dano, aumentar a dificuldade e organizar o jogo em fases com recompensas.",
    project: "Arena de Ação — jogo de ação com inimigos que surgem sozinhos, projéteis, power-ups, fases e dificuldade crescente.",
    tool: "MakeCode Arcade (gratuito)",
    badge: INSIGNIAS[2],
    icon: Swords,
    lessons: [
      { n: 21, title: "Laços: Repetir Sem Cansar", goal: "A criança usa repetição para executar ações várias vezes sem copiar blocos." },
      { n: 22, title: "Criando Inimigos", goal: "A criança gera sprites inimigos e os coloca em movimento pela tela." },
      { n: 23, title: "Spawn Automático", goal: "A criança faz inimigos e itens surgirem sozinhos ao longo do tempo." },
      { n: 24, title: "Posições Aleatórias", goal: "A criança usa a aleatoriedade para que cada partida seja diferente." },
      { n: 25, title: "Desviando e Sobrevivendo", goal: "A criança programa a interação entre jogador e inimigos, com dano e desvio." },
      { n: 26, title: "Projéteis: Atirar nos Inimigos", goal: "A criança cria projéteis e a mecânica de eliminar inimigos." },
      { n: 27, title: "Aumentando a Dificuldade", goal: "A criança faz o jogo ficar mais difícil conforme o jogador avança." },
      { n: 28, title: "Níveis e Fases", goal: "A criança cria a passagem de uma fase para a outra." },
      { n: 29, title: "Power-ups e Recompensas", goal: "A criança adiciona itens especiais que dão vantagens ao jogador." },
      { n: 30, title: "Mini-Projeto: Arena de Ação", goal: "A criança entrega um jogo de ação com inimigos, fases e dificuldade crescente. Conquista a insígnia Pixel Estrategista." },
    ],
  },
  {
    n: 4,
    name: "Criar, Testar e Lançar: Meu Jogo Completo",
    classes: "Aulas 31 a 40",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Consolidar o ciclo criar → testar → depurar, planejar e construir um jogo autoral do zero, polir visual, som e dificuldade, criar tela de início, dar o primeiro contato com o código em texto (JavaScript) e publicar/apresentar o jogo.",
    project: "Meu Jogo Completo — jogo autoral com cenário, controles, regras, pontuação, vidas, inimigos, fases, menu inicial e instruções, apresentado no Showcase Final.",
    tool: "MakeCode Arcade (gratuito)",
    badge: INSIGNIAS[3],
    icon: Trophy,
    lessons: [
      { n: 31, title: "Pensando como Criador", goal: "A criança planeja seu jogo autoral (ideia, regras e objetivo) num rascunho." },
      { n: 32, title: "Testar e Encontrar Erros", goal: "A criança aprende a testar o jogo e identificar problemas (bugs)." },
      { n: 33, title: "Depurar: Consertando Bugs", goal: "A criança corrige erros passo a passo usando o ciclo testar e ajustar." },
      { n: 34, title: "Construindo Meu Jogo (Parte 1)", goal: "A criança monta o cenário, o personagem e os controles do seu projeto final." },
      { n: 35, title: "Construindo Meu Jogo (Parte 2)", goal: "A criança adiciona regras, pontuação, vidas e inimigos ao projeto." },
      { n: 36, title: "Polindo o Jogo", goal: "A criança melhora visual, som e dificuldade para deixar o jogo divertido e justo." },
      { n: 37, title: "Tela de Início e Instruções", goal: "A criança cria o menu inicial e explica como se joga." },
      { n: 38, title: "Espiando o Código em Texto", goal: "A criança alterna para a visão em JavaScript e descobre o código por trás dos blocos." },
      { n: 39, title: "Compartilhando o Jogo", goal: "A criança publica e compartilha o jogo e prepara uma breve apresentação." },
      { n: 40, title: "Showcase Final: Dia do Criador", goal: "A criança apresenta seu jogo completo à turma. Conquista a insígnia Pixel Criador e o Selo CREATE Ano 1." },
    ],
  },
];

const TOOLS: Tool[] = [
  {
    name: "MakeCode Arcade (Microsoft)",
    type: "Gratuito",
    role: "Ambiente de criação de jogos por blocos, com transição pra JavaScript no módulo final. Roda no navegador.",
    icon: Gamepad2,
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Meu filho não fez o JR. Pode entrar direto no CREATE Ano 1?",
    a: "Sim, mas a gente conversa antes pra avaliar. O Ano 1 assume que a criança já tem noção básica de blocos (do JR3) ou já programou um pouco. Se nunca tocou em programação, recomendamos um nivelamento.",
  },
  {
    q: "Qual a diferença pro JR3?",
    a: "O JR3 termina com primeiros experimentos no MakeCode. O CREATE Ano 1 entra a fundo: sprites, movimento, regras de jogo, inimigos, fases e o primeiro jogo completo autoral. É a porta de entrada da trilha CREATE que vai até os 14 anos.",
  },
  {
    q: "Por que MakeCode Arcade?",
    a: "É a ferramenta mais reconhecida no ensino de jogos pra criança nessa idade. Gratuita, roda no navegador, e tem editor de blocos + visão JavaScript embutida — a transição pro Ano 2 já começa aqui.",
  },
  {
    q: "Quanto tempo dura?",
    a: "1 ano letivo: 40 aulas, 80 horas, 4 módulos. Cada módulo termina com um mini-projeto jogável e uma insígnia Pixel.",
  },
  {
    q: "Como é a frequência?",
    a: "2 horas por semana. Família escolhe: 1 aula de 2h ou 2 aulas de 1h. Conteúdo é o mesmo, dividido em Parte A + Parte B sem repetição.",
  },
  {
    q: "Como acompanho o progresso?",
    a: "A cada módulo concluído a criança conquista uma insígnia da Trilha Pixel (Aprendiz → Construtor → Estrategista → Criador). No fim do ano, recebe o Selo CREATE Ano 1 no Showcase Final.",
  },
  {
    q: "E depois do Ano 1?",
    a: "Ano 2 (9-10 anos): mundos maiores com mapas, câmera, listas, física e a transição completa pra programar em JavaScript escrito. A trilha vai até o Ano 5/6, terminando em Unity + C#.",
  },
  {
    q: "Qual o investimento?",
    a: "Te passamos valor e formas de pagamento na aula experimental. Aproveita pra conhecer o espaço, ver uma aula e tirar dúvidas — sem compromisso.",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────

function Create89Page() {
  return (
    <>
      <JsonLd
        data={coursePageSchemas({
          path: "/cursos/create/8-9-anos",
          programName: "CREATE",
          programPath: "/cursos/create",
          courseName: "CREATE Ano 1 — Fundamentos do Arcade (8 a 9 anos)",
          courseDescription:
            "Primeiro ano do programa CREATE da Santos Tech. 40 aulas no MakeCode Arcade ensinam crianças a criar jogos a partir do zero — do primeiro sprite ao jogo completo autoral. Inclui sistema de Insígnias Pixel.",
          ageMin: 8,
          ageMax: 9,
          faq: FAQ,
        })}
      />
      <CourseHero
        theme={THEME}
        breadcrumb={{ href: "/cursos/create", label: "Programa CREATE" }}
        eyebrow="CREATE Ano 1 · 8 a 9 anos"
        title={
          <>
            Fundamentos <br />
            <span style={{ color: THEME.soft }}>do Arcade</span>
          </>
        }
        subtitle={
          <>
            <p>
              O <strong>primeiro ano do CREATE</strong>. Seu filho entra no{" "}
              <strong>MakeCode Arcade</strong> e, em 40 aulas, sai do primeiro
              sprite até um <strong>jogo completo autoral</strong>.
            </p>
            <p>
              Trilha de Insígnias Pixel — conquistas visíveis a cada módulo,
              com Showcase no fim do ano pra apresentar o jogo pra família.
            </p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental grátis" }}
        secondaryCta={{ href: "#curriculo", label: "Ver currículo completo" }}
        imageName="students-1"
        imageAlt="Criança de 8 anos programando no MakeCode Arcade na Santos Tech"
        blobId="create89Blob"
        decor="games"
        metrics={[
          { value: "40", label: "Aulas" },
          { value: "80h", label: "Carga horária" },
          { value: "40", label: "Semanas" },
          { value: "8–9", label: "Faixa etária" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              A proposta
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Criar → testar →{" "}
              <span style={{ color: THEME.primary }}>depurar</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Na <strong>primeira aula</strong> seu filho já constrói algo que
              funciona. Cada aula adiciona uma camada nova. Erros viram caça aos
              bugs — parte natural do processo. Cada módulo fecha com um{" "}
              <strong>mini-projeto jogável</strong> pra mostrar em casa, e o ano
              inteiro culmina num <strong>jogo completo</strong> apresentado no
              Showcase.
            </p>
          </Reveal>

          <div className="mt-8">
            <BridgeBanner
              title="De onde a criança vem (JR3)"
              from={THEME.soft}
              to={THEME.primary}
            >
              Quem fez o JR3 chega já tendo visto blocos no estilo MakeCode. O
              Módulo 1 retoma esse ponto de forma suave, sem reensinar, e leva
              rapidamente pra terreno novo — sprites, cenário, som. Para quem
              vem de fora, o módulo também serve como porta de entrada.
            </BridgeBanner>
          </div>
        </div>
      </section>

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            A porta de entrada do{" "}
            <span style={{ color: THEME.primary }}>carro-chefe</span>
          </>
        }
        description={
          <>
            O <strong>CREATE Ano 1</strong> é desenhado pra criança de{" "}
            <strong>8 e 9 anos</strong> que já sabe ler, é curiosa por jogos e
            quer aprender a fazer os próprios. É o início de uma trilha de 6
            anos que termina em Unity profissional.
          </>
        }
        checklistTitle="É ideal se seu filho"
        items={[
          "Já lê com autonomia e gosta de jogar",
          "Já fez o JR3 ou já mexeu em blocos de programação",
          "Quer parar de só consumir jogo e começar a criar",
          "Tem foco pra projetos que duram várias semanas",
        ]}
        bg="muted"
      />

      <FormatSection theme={THEME} />

      <ProgressionTrail
        theme={THEME}
        eyebrow="Trilha Pixel · Sistema próprio Santos Tech"
        title={
          <>
            Insígnias <span style={{ color: THEME.soft }}>Pixel</span>
          </>
        }
        description={
          <>
            Já na primeira aula seu filho recebe a insígnia{" "}
            <strong>Pixel Iniciante</strong>. A cada módulo conquista uma nova
            insígnia. No Showcase Final, fecha o ano com o{" "}
            <strong>Selo CREATE Ano 1</strong> e está pronto pro Ano 2.
          </>
        }
        badges={INSIGNIAS}
      />

      <ModuleGrid
        theme={THEME}
        id="curriculo"
        eyebrow="Currículo"
        title="Os 4 módulos do ano"
        description="Dificuldade crescente. Cada módulo termina com um mini-projeto jogável que vira a conquista da insígnia."
        modules={MODULES}
        badgeLabel="Conquista"
      />

      <LessonAccordion theme={THEME} modules={MODULES} badgeWord="Insígnia" />

      <ToolGrid
        theme={THEME}
        title="Uma ferramenta, mil possibilidades"
        description="O ano inteiro acontece no MakeCode Arcade — ferramenta gratuita da Microsoft, feita pra criar jogos, que roda no navegador e tem visão de código em texto embutida."
        tools={TOOLS}
      />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Pronto pra ver o CREATE Ano 1 ao vivo?"
        description="Aula experimental gratuita. Seu filho vai pro computador, mexe no MakeCode Arcade e sai da aula com algo que ele mesmo construiu."
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental" }}
        secondaryCta={{ href: "/cursos/create", label: "Voltar ao CREATE" }}
      />
    </>
  );
}
