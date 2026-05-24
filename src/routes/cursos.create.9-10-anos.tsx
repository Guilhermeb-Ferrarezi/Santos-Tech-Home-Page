import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Map,
  Boxes,
  Activity,
  Code2,
  Building,
  Gamepad2,
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
  type CourseTheme,
  type Module,
  type Tool,
  type FaqItem,
  type ProgressionBadge,
} from "@/components/course-page";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/cursos/create/9-10-anos")({
  component: Create910Page,
  head: () => ({
    meta: [
      { title: "CREATE Ano 2 (9–10 anos) — Construtores de Mundos · Santos Tech" },
      {
        name: "description",
        content:
          "Segundo ano do CREATE em Ribeirão Preto. 40 aulas com mapas, câmera, listas, física e a transição do bloco pro JavaScript texto. Trilha Pixel: Construtores de Mundos.",
      },
      { property: "og:title", content: "CREATE Ano 2 · 9–10 anos · Santos Tech" },
      {
        property: "og:description",
        content: "Mundos maiores, listas, física e leitura de código. Insígnia Pixel Arquiteto de Mundos.",
      },
      { property: "og:url", content: "/cursos/create/9-10-anos" },
    ],
    links: [{ rel: "canonical", href: "/cursos/create/9-10-anos" }],
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

// Ano 2 tem 5 insígnias mas 4 módulos. Módulo 4 entrega 2 insígnias.
// Mostramos as 4 principais na trilha; Pixel Decodificador é mencionado na descrição.
const INSIGNIAS: ProgressionBadge[] = [
  { name: "Pixel Cartógrafo", icon: Map, color: "#f59e0b", desc: "Mapas (tilemaps) e câmera" },
  { name: "Pixel Colecionador", icon: Boxes, color: "#06b6d4", desc: "Listas e coleções" },
  { name: "Pixel Cinético", icon: Activity, color: "#10b981", desc: "Física e animação" },
  { name: "Pixel Arquiteto de Mundos", icon: Building, color: "#ef4444", desc: "Jogo autoral com várias fases" },
];

const MODULES: Module[] = [
  {
    n: 1,
    name: "Mundos Maiores: Tilemaps e Câmera",
    classes: "Aulas 1 a 10",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Sair da tela única do Ano 1 e construir mundos maiores que a tela. Desenhar mapas com o editor de tiles, definir bloqueios, fazer a câmera seguir o personagem e impedir que ele saia das bordas.",
    project: "Jogo de exploração em vista de cima, num mapa grande, com câmera que segue o herói e itens espalhados pelo mundo.",
    tool: "MakeCode Arcade (gratuito)",
    badge: INSIGNIAS[0],
    icon: Map,
    lessons: [
      { n: 1, title: "Bem-vindo de volta ao CREATE", goal: "Retoma sprites e controles do Ano 1 e descobre por que um jogo precisa de um mundo maior do que a tela." },
      { n: 2, title: "Meu primeiro tilemap", goal: "Pinta um mapa com o editor de tiles e posiciona o herói dentro dele." },
      { n: 3, title: "Paredes, chão e colisão de tiles", goal: "Define quais tiles bloqueiam o jogador e quais ele pode atravessar." },
      { n: 4, title: "A câmera que segue o herói", goal: "Faz a tela acompanhar o personagem enquanto ele anda pelo mapa." },
      { n: 5, title: "As bordas do mundo", goal: "Impede o herói de sair dos limites do mapa." },
      { n: 6, title: "Itens espalhados pelo mapa", goal: "Coloca objetos em posições do tilemap e os coleta ao encostar." },
      { n: 7, title: "Portas e passagens", goal: "Cria zonas que transportam o herói para outra parte do mundo." },
      { n: 8, title: "Espiando o código em texto de novo", goal: "Alterna entre blocos e JavaScript e identifica qual texto corresponde a cada bloco." },
      { n: 9, title: "Montando o jogo de exploração", goal: "Junta mapa, câmera e itens na primeira versão do mini-projeto." },
      { n: 10, title: "Entrega e insígnia Pixel Cartógrafo", goal: "Testa o mapa, corrige detalhes e apresenta o mundo explorável. Conquista a insígnia Pixel Cartógrafo." },
    ],
  },
  {
    n: 2,
    name: "Muitos de Tudo: Listas e Coleções",
    classes: "Aulas 11 a 20",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Aprender a lidar com muitos objetos ao mesmo tempo usando listas (arrays). Guardar grupos em listas, percorrê-los, adicionar e remover itens, e usar listas pra controlar moedas, inimigos e pontuação.",
    project: "Arena onde várias ondas de inimigos e itens são gerenciados por listas, com placar que soma pontos por grupos.",
    tool: "MakeCode Arcade (gratuito)",
    badge: INSIGNIAS[1],
    icon: Boxes,
    lessons: [
      { n: 11, title: "O que é uma lista", goal: "Descobre como guardar vários sprites dentro de uma única caixa chamada lista." },
      { n: 12, title: "Criando muitos inimigos de uma vez", goal: "Usa uma lista junto com um laço para gerar um grupo de inimigos." },
      { n: 13, title: "Percorrendo a lista", goal: "Faz uma mesma ação acontecer com cada item usando o comando para cada." },
      { n: 14, title: "Adicionar e remover da lista", goal: "Coloca itens novos na lista e tira os que saem do jogo." },
      { n: 15, title: "Coletáveis em lista", goal: "Espalha moedas e estrelas guardadas em lista e atualiza a contagem ao coletar." },
      { n: 16, title: "Pontuação por grupos", goal: "Dá quantidades de pontos diferentes conforme o tipo de item coletado." },
      { n: 17, title: "Procurando algo na lista", goal: "Encontra um item específico, como o inimigo mais próximo do herói." },
      { n: 18, title: "Listas na visão de texto", goal: "Vê como o array aparece em JavaScript e altera um de seus valores." },
      { n: 19, title: "Montando a arena de ondas", goal: "Reúne listas, spawn em grupos e placar na primeira versão do mini-projeto." },
      { n: 20, title: "Entrega e insígnia Pixel Colecionador", goal: "Ajusta a dificuldade das ondas, testa o placar e apresenta a arena. Conquista a insígnia Pixel Colecionador." },
    ],
  },
  {
    n: 3,
    name: "Movimento de Verdade: Física e Animação",
    classes: "Aulas 21 a 30",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Dar peso e vida ao movimento. Trabalhar velocidade, aceleração e gravidade pra que o personagem caia, pule e ande de forma convincente. Plataformas com colisão, estados do herói e animações de sprite. Inimigos com comportamento.",
    project: "Fase de plataforma com gravidade, pulo, plataformas, inimigos com comportamento e um herói animado.",
    tool: "MakeCode Arcade (gratuito)",
    badge: INSIGNIAS[2],
    icon: Activity,
    lessons: [
      { n: 21, title: "Velocidade e aceleração", goal: "Controla com que rapidez um sprite ganha e perde movimento." },
      { n: 22, title: "A gravidade entra em cena", goal: "Faz o personagem cair e parar ao encostar no chão." },
      { n: 23, title: "O pulo", goal: "Programa um pulo que respeita a gravidade e a altura máxima." },
      { n: 24, title: "Plataformas", goal: "Cria chão e plataformas com colisão correta por cima e por baixo." },
      { n: 25, title: "Estados do personagem", goal: "Distingue parado, andando, pulando e caindo dentro do jogo." },
      { n: 26, title: "Animações de sprite", goal: "Troca quadros de imagem para o herói parecer andar e pular." },
      { n: 27, title: "Inimigos com comportamento", goal: "Programa inimigos que patrulham, perseguem ou recuam." },
      { n: 28, title: "Física na visão de texto", goal: "Ajusta valores de velocidade e gravidade diretamente no JavaScript." },
      { n: 29, title: "Montando a fase de plataforma", goal: "Junta física, plataformas e inimigo animado na primeira versão do mini-projeto." },
      { n: 30, title: "Entrega e insígnia Pixel Cinético", goal: "Equilibra a dificuldade do pulo, testa a fase e apresenta o resultado. Conquista a insígnia Pixel Cinético." },
    ],
  },
  {
    n: 4,
    name: "Meu Mundo, Meu Código: Jogo Autoral em Várias Fases",
    classes: "Aulas 31 a 40",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Unir tudo num jogo autoral mais ambicioso e fechar a transição pro texto. Encadear várias fases, usar temporizadores, combinar múltiplas condições, montar HUD completo. Abrir o jogo na visão JavaScript, entender suas partes e fazer mudanças reais no código em texto.",
    project: "Jogo autoral próprio com 3+ fases encadeadas, HUD completo e ao menos um trecho escrito ou ajustado diretamente em texto.",
    tool: "MakeCode Arcade + edição de JavaScript",
    badge: INSIGNIAS[3],
    icon: Building,
    lessons: [
      { n: 31, title: "Ideia e plano do jogo", goal: "Desenha o conceito, as fases e o objetivo do jogo em um storyboard." },
      { n: 32, title: "Fases encadeadas", goal: "Faz o jogo avançar automaticamente de uma fase para a próxima." },
      { n: 33, title: "Temporizadores e desafios por tempo", goal: "Adiciona contagem regressiva e eventos que acontecem em momentos certos." },
      { n: 34, title: "Múltiplas condições", goal: "Combina regras com 'e' e 'ou' para definir quando se vence ou se perde." },
      { n: 35, title: "HUD e progresso", goal: "Mostra vidas, pontos e fase atual na tela durante o jogo." },
      { n: 36, title: "Lendo o meu próprio JavaScript", goal: "Abre o jogo na visão de texto e reconhece suas partes principais. Conquista a insígnia Pixel Decodificador." },
      { n: 37, title: "Editando o jogo em texto", goal: "Faz uma mudança real no jogo escrevendo direto no JavaScript." },
      { n: 38, title: "Polimento", goal: "Acrescenta som, telas de início e fim e ajusta a dificuldade geral." },
      { n: 39, title: "Teste e correção de bugs", goal: "Joga, encontra problemas e conserta o que estiver errado." },
      { n: 40, title: "Mostra de Jogos e insígnia Pixel Arquiteto de Mundos", goal: "Apresenta o jogo autoral completo com várias fases e um trecho feito em texto. Conquista a insígnia Pixel Arquiteto de Mundos." },
    ],
  },
];

const TOOLS: Tool[] = [
  {
    name: "MakeCode Arcade (Microsoft)",
    type: "Gratuito",
    role: "Continuação do Ano 1. Agora com tilemaps, câmera, listas e física — e visão JavaScript ganhando espaço a cada módulo.",
    icon: Gamepad2,
  },
  {
    name: "MakeCode Arcade · modo JavaScript",
    type: "Gratuito · embutido",
    role: "A mesma ferramenta, alternando entre blocos e código em texto. No Módulo 4, a criança faz edições reais em JavaScript.",
    icon: Code2,
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Meu filho não fez o Ano 1. Consegue entrar no Ano 2?",
    a: "Depende. O Ano 2 assume sprites, eventos, variáveis, condicionais, colisões e laços já dominados. Se a criança não fez o Ano 1 mas tem essa base, conversamos pra avaliar — caso contrário, melhor começar pelo Ano 1.",
  },
  {
    q: "É no mesmo MakeCode Arcade do Ano 1?",
    a: "Sim. Mas agora a criança usa muito mais a visão de JavaScript do editor. Termina o ano fazendo edições reais em código escrito — preparando o Ano 3, que será JavaScript de verdade.",
  },
  {
    q: "São 5 insígnias mas 4 módulos. Como funciona?",
    a: "Sim, no Módulo 4 a criança conquista 2 insígnias: Pixel Decodificador (ao ler o próprio JavaScript) e Pixel Arquiteto de Mundos (ao entregar o jogo final). Cinco conquistas visíveis no ano.",
  },
  {
    q: "Quanto tempo dura?",
    a: "1 ano letivo: 40 aulas, 80 horas, 4 módulos. Cada módulo termina com mini-projeto e insígnia.",
  },
  {
    q: "Como é a frequência?",
    a: "2 horas por semana. Família escolhe: 1 aula de 2h ou 2 aulas de 1h. Conteúdo é o mesmo, dividido em Parte A + Parte B.",
  },
  {
    q: "E depois do Ano 2?",
    a: "Ano 3 (10-11 anos): JavaScript escrito do zero. A criança fecha o editor de blocos e digita código de verdade. A trilha vai até o Ano 5 (Unity + C#).",
  },
  {
    q: "Qual o investimento?",
    a: "Te passamos valor e formas de pagamento na aula experimental. Aproveita pra conhecer o espaço, ver uma aula e tirar dúvidas — sem compromisso.",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────

function Create910Page() {
  return (
    <>
      <CourseHero
        theme={THEME}
        breadcrumb={{ href: "/cursos/create", label: "Programa CREATE" }}
        eyebrow="CREATE Ano 2 · 9 a 10 anos"
        title={
          <>
            Construtores <br />
            <span style={{ color: THEME.soft }}>de Mundos</span>
          </>
        }
        subtitle={
          <>
            <p>
              Mundos maiores, jogos mais ricos. Tilemaps, câmera, listas, física
              e animação — e o salto cuidadoso do <strong>bloco para o
              texto</strong>.
            </p>
            <p>
              Termina o ano lendo e editando <strong>JavaScript de verdade</strong>{" "}
              no próprio jogo, com a insígnia <strong>Pixel Arquiteto de Mundos</strong>.
            </p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental grátis" }}
        secondaryCta={{ href: "#curriculo", label: "Ver currículo completo" }}
        imageName="students-1"
        imageAlt="Criança de 9 anos programando jogos no MakeCode Arcade"
        blobId="create910Blob"
        decor="games"
        metrics={[
          { value: "40", label: "Aulas" },
          { value: "80h", label: "Carga horária" },
          { value: "5", label: "Insígnias" },
          { value: "9–10", label: "Faixa etária" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              A proposta
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Expandir em{" "}
              <span style={{ color: THEME.primary }}>quatro direções</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              O Ano 1 ensinou a fazer um jogo funcionar dentro de uma única
              tela. O Ano 2 expande essa base: <strong>mundos grandes</strong>{" "}
              com mapa e câmera, <strong>coleções</strong> de objetos com listas,{" "}
              <strong>movimento realista</strong> com física e animação, e um{" "}
              <strong>jogo autoral com várias fases</strong>. Em paralelo, a
              leitura de código em texto deixa de ser curiosidade e vira
              habilidade praticada todos os módulos.
            </p>
          </Reveal>
        </div>
      </section>

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            Quem terminou o Ano 1 (ou tem a{" "}
            <span style={{ color: THEME.primary }}>base</span>)
          </>
        }
        description={
          <>
            O <strong>CREATE Ano 2</strong> dá sequência direta ao Ano 1 — sem
            repetir. A criança chega já dominando sprites, controles, eventos,
            variáveis, condicionais, colisões e laços, e pronta pra construir
            mundos inteiros.
          </>
        }
        checklistTitle="É ideal se seu filho"
        items={[
          "Concluiu o Ano 1 do CREATE",
          "Ou já programa jogos com sprites, regras e condicionais",
          "Quer fazer jogos maiores — com mapas, fases, física",
          "Está pronto pra começar a ler código escrito de verdade",
        ]}
        bg="muted"
      />

      <FormatSection theme={THEME} />

      <ProgressionTrail
        theme={THEME}
        eyebrow="Trilha Pixel · Construtores de Mundos"
        title={
          <>
            Quatro insígnias do{" "}
            <span style={{ color: THEME.soft }}>arquiteto</span>
          </>
        }
        description={
          <>
            O ciclo Pixel sobe de patamar: enquanto o Ano 1 reconhecia o
            aprendiz que começa a criar, o Ano 2 reconhece o{" "}
            <strong>construtor</strong> que projeta mundos inteiros e começa a
            conversar com o código em texto. No Módulo 4, uma 5ª insígnia
            (<strong>Pixel Decodificador</strong>) é conquistada ao ler o
            próprio JavaScript do jogo.
          </>
        }
        badges={INSIGNIAS}
      />

      <ModuleGrid
        theme={THEME}
        id="curriculo"
        eyebrow="Currículo"
        title="Os 4 módulos do ano"
        description="Cada módulo expande a ambição do jogo — e a leitura de código em texto cresce a cada um."
        modules={MODULES}
        badgeLabel="Conquista"
      />

      <LessonAccordion theme={THEME} modules={MODULES} badgeWord="Insígnia" />

      <ToolGrid
        theme={THEME}
        title="A ferramenta vira ambiente de transição"
        description="Mesma ferramenta do Ano 1 (MakeCode Arcade), mas agora alternando entre blocos e visão JavaScript — preparando o terreno pro Ano 3."
        tools={TOOLS}
      />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Pronto pra ver o CREATE Ano 2 ao vivo?"
        description="Aula experimental gratuita. Seu filho mexe num jogo de verdade com mapa, câmera e física — e dá uma espiada no código por trás."
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental" }}
        secondaryCta={{ href: "/cursos/create", label: "Voltar ao CREATE" }}
      />
    </>
  );
}
