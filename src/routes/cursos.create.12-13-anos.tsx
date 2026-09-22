import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Gauge,
  Joystick,
  Atom,
  Trophy,
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
import { JsonLd } from "@/components/json-ld";
import { pageMeta, coursePageSchemas } from "@/lib/seo";

export const Route = createFileRoute("/cursos/create/12-13-anos")({
  component: Create1213Page,
  head: () =>
    pageMeta({
      title: "CREATE Ano 5 (12 a 13 anos) — Unity + C# (Núcleo do Motor) | Santos Tech",
      description:
        "Quinto ano do CREATE: entrada no Unity com C# pra adolescentes de 12 a 13 anos em Ribeirão Preto. 40 aulas com editor profissional, física 2D, sprites, animação e um jogo 2D completo. Título Desenvolvedor Unity Júnior.",
      path: "/cursos/create/12-13-anos",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

const THEME: CourseTheme = {
  primary: "#187ABF",
  dark: "#04325A",
  soft: "#49A8EB",
};

const INSIGNIAS: ProgressionBadge[] = [
  { name: "Operador do Motor", icon: Gauge, color: "#f59e0b", desc: "Editor do Unity e primeiro script C#" },
  { name: "Piloto de Componentes", icon: Joystick, color: "#06b6d4", desc: "Transform, Input e classes" },
  { name: "Mestre da Física", icon: Atom, color: "#10b981", desc: "Física 2D, sprites e animação" },
  { name: "Construtor de Jogos Unity", icon: Trophy, color: "#ef4444", desc: "Spawn, UI e jogo 2D completo" },
];

const MODULES: Module[] = [
  {
    n: 1,
    name: "Conhecendo o Unity e a Ponte para C#",
    classes: "Aulas 1 a 10",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Entender como um motor profissional organiza um jogo (cena, objetos, componentes) e escrever os primeiros scripts em C#, ligando tudo o que já se sabe de JavaScript à nova linguagem.",
    project: "Cena 2D viva — um objeto controlado por script exibe mensagens e altera seus valores ao iniciar e a cada quadro.",
    tool: "Unity 2D + C#",
    badge: INSIGNIAS[0],
    icon: Gauge,
    lessons: [
      { n: 1, title: "Do JavaScript ao Unity", goal: "Apresenta por que um motor profissional muda o jogo e instala o ambiente, criando o primeiro projeto 2D no Unity." },
      { n: 2, title: "Tour pelo editor", goal: "Explora as janelas Cena, Game, Hierarquia, Inspector, Project e Console e aprende a navegar pelo espaço de trabalho." },
      { n: 3, title: "GameObjects e Componentes", goal: "Entende que tudo na cena é um GameObject formado por componentes que se adicionam e removem." },
      { n: 4, title: "O Inspector e os valores", goal: "Ajusta posição, escala e cor de objetos pelo Inspector e coloca o primeiro sprite na cena, sem código." },
      { n: 5, title: "Primeiro script em C#", goal: "Cria um script, anexa-o a um GameObject e usa Debug.Log, fazendo a ponte direta com o console.log do JavaScript." },
      { n: 6, title: "JavaScript x C#: variáveis tipadas", goal: "Declara int, float, string e bool e percebe o que muda com tipagem, ponto e vírgula e chaves em relação ao JavaScript." },
      { n: 7, title: "Start e Update", goal: "Distingue o método que roda uma vez ao iniciar do método que roda a cada quadro, ligando essa ideia ao laço de jogo." },
      { n: 8, title: "Métodos em C#", goal: "Escreve e chama métodos próprios (funções tipadas, com void e retorno), reaproveitando o conceito de função do Ano 3 e 4." },
      { n: 9, title: "Prefabs", goal: "Transforma um GameObject em um molde reutilizável e cria várias instâncias dele na cena." },
      { n: 10, title: "Mini-projeto: cena viva", goal: "Finaliza uma cena em que um objeto, por script, exibe mensagens e muda valores ao iniciar e a cada quadro. Conquista a insígnia Operador do Motor." },
    ],
  },
  {
    n: 2,
    name: "C# em Movimento: Transform, Input e Classes",
    classes: "Aulas 11 a 20",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Fazer objetos se moverem por código, capturar comandos do jogador e entender que cada script é uma classe com seus próprios campos e métodos. Expor variáveis no Inspector.",
    project: "Personagem 2D controlável pelo teclado, com velocidade ajustável diretamente no Inspector.",
    tool: "Unity 2D + C#",
    badge: INSIGNIAS[1],
    icon: Joystick,
    lessons: [
      { n: 11, title: "O Transform", goal: "Lê e altera posição, rotação e escala de um objeto por código, acessando transform.position." },
      { n: 12, title: "Mover por código", goal: "Usa transform.Translate para deslocar um objeto continuamente, quadro a quadro." },
      { n: 13, title: "Movimento suave com deltaTime", goal: "Multiplica a velocidade por Time.deltaTime e entende por que isso torna o movimento igual em qualquer computador." },
      { n: 14, title: "Capturando o teclado", goal: "Lê setas e teclas WASD com Input.GetAxis e Input.GetKey para receber comandos do jogador." },
      { n: 15, title: "Personagem que anda", goal: "Combina Input e movimento para deslocar o herói nas quatro direções da tela." },
      { n: 16, title: "Variáveis no Inspector", goal: "Usa public e SerializeField para ajustar valores como a velocidade sem precisar mexer no código." },
      { n: 17, title: "MonoBehaviour é uma classe", goal: "Percebe que o script é uma classe com campos e métodos, ligando o conceito aos objetos estudados no Ano 4." },
      { n: 18, title: "Organizando a classe", goal: "Separa responsabilidades dentro do script criando métodos próprios, como um método Mover()." },
      { n: 19, title: "Depurando o movimento", goal: "Usa Debug.Log e o Inspector para localizar erros de valores e comportamento no movimento." },
      { n: 20, title: "Mini-projeto: o herói controlável", goal: "Finaliza um personagem 2D que anda pelo teclado com velocidade ajustável no Inspector. Conquista a insígnia Piloto de Componentes." },
    ],
  },
  {
    n: 3,
    name: "Física 2D, Sprites e Animação",
    classes: "Aulas 21 a 30",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Dar peso, colisão e vida visual ao jogo usando a física 2D do Unity, os sprites e o sistema de animação. Rigidbody2D, Collider2D, OnCollisionEnter2D, OnTriggerEnter2D, pulo e Animator.",
    project: "Mini-jogo de plataforma 2D com gravidade, pulo, chão sólido e coleta de itens por gatilho.",
    tool: "Unity 2D + C#",
    badge: INSIGNIAS[2],
    icon: Atom,
    lessons: [
      { n: 21, title: "Física 2D: Rigidbody2D", goal: "Adiciona um corpo físico a um objeto e observa gravidade e massa atuando na cena." },
      { n: 22, title: "Forças e velocidade", goal: "Move objetos pela física aplicando velocity e AddForce por código." },
      { n: 23, title: "Colisores (Collider2D)", goal: "Dá forma física aos objetos e escolhe o tipo de collider adequado a cada um." },
      { n: 24, title: "Detectar colisão", goal: "Usa OnCollisionEnter2D para reagir a batidas, como tomar dano ao encostar em um inimigo." },
      { n: 25, title: "Gatilhos (triggers)", goal: "Usa OnTriggerEnter2D para criar zonas e coletar itens sem que os objetos se empurrem." },
      { n: 26, title: "O pulo", goal: "Combina captura de tecla e força vertical para um pulo que respeita a física do motor." },
      { n: 27, title: "Sprites e o Sprite Renderer", goal: "Troca a imagem e a cor de um objeto e controla sua ordem de desenho na tela." },
      { n: 28, title: "Animação no Unity", goal: "Cria clipes no Animator para animar o personagem entre estados como parado e andando." },
      { n: 29, title: "Depurando física e colisão", goal: "Investiga e corrige bugs comuns de collider, gravidade e camadas de desenho." },
      { n: 30, title: "Mini-projeto: mini-plataforma", goal: "Finaliza um jogo de plataforma com gravidade, pulo, chão e coleta por gatilho. Conquista a insígnia Mestre da Física." },
    ],
  },
  {
    n: 4,
    name: "Spawn, UI e o Jogo 2D Completo",
    classes: "Aulas 31 a 40",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Gerar e remover objetos durante o jogo, mostrar informações na tela e reunir tudo em um jogo 2D completo. Instantiate, Destroy, spawn temporizado, Canvas, placar, vidas, tela de fim e reinício de cena.",
    project: "Jogo 2D completo no Unity, com jogador controlável, objetos gerados por código, física, placar e vidas na tela e tela de fim de jogo.",
    tool: "Unity 2D + C#",
    badge: INSIGNIAS[3],
    icon: Trophy,
    lessons: [
      { n: 31, title: "Nascer por código (Instantiate)", goal: "Cria GameObjects a partir de Prefabs durante o jogo, reaproveitando a ideia de fábrica de objetos do Ano 4." },
      { n: 32, title: "Destruir objetos (Destroy)", goal: "Remove objetos da cena, como um inimigo derrotado ou um item coletado." },
      { n: 33, title: "Spawn temporizado", goal: "Gera objetos em intervalos de tempo usando temporização simples para controlar o ritmo do jogo." },
      { n: 34, title: "UI no Unity: o Canvas", goal: "Monta a interface do jogo e coloca o primeiro texto fixo na tela." },
      { n: 35, title: "Placar na tela", goal: "Atualiza um texto de pontuação por código conforme o jogador marca pontos." },
      { n: 36, title: "Vidas e dano", goal: "Mostra as vidas na tela e as reduz quando o jogador toma dano." },
      { n: 37, title: "Fim de jogo", goal: "Define a condição de derrota ou vitória e exibe uma tela de fim de jogo." },
      { n: 38, title: "Reiniciar a cena", goal: "Recarrega a fase com o SceneManager para permitir jogar novamente." },
      { n: 39, title: "Polir e testar", goal: "Faz ajustes finais, joga para testar e corrige os bugs do jogo inteiro." },
      { n: 40, title: "Projeto final: meu jogo Unity", goal: "Entrega um jogo 2D completo no Unity e abre a ponte para o Ano 6 (POO aprofundada em C# e jogo autoral). Conquista a insígnia Construtor de Jogos Unity e o título Desenvolvedor Unity Júnior." },
    ],
  },
];

const TOOLS: Tool[] = [
  {
    name: "Unity (motor de jogo)",
    type: "Gratuito (uso pessoal/educacional)",
    role: "Motor profissional usado por milhares de estúdios. Aqui em projeto 2D, com editor visual, física integrada e animação. O mesmo motor usado em jogos comerciais.",
    icon: Boxes,
  },
  {
    name: "C# em Visual Studio / VS Code",
    type: "Gratuito",
    role: "Linguagem nativa do Unity. Tipada, organizada em classes — o salto pra programação profissional. Editor integrado, autocomplete, navegação por símbolo.",
    icon: Code,
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Meu filho não fez os Anos 1-4. Pode entrar no Ano 5?",
    a: "Só com avaliação rigorosa. O Ano 5 é a maior transição da trilha. Assume autonomia em JavaScript com objetos, coleções e máquina de estados (Ano 4). Sem isso, o salto pra Unity + C# é arriscado.",
  },
  {
    q: "Por que mudar de JavaScript pra C#?",
    a: "C# é a linguagem nativa do Unity, motor profissional usado em milhares de jogos comerciais. A criança não recomeça do zero — toda a base lógica (variáveis, if, for, funções, objetos) é reaproveitada. O que muda é o ambiente e a sintaxe.",
  },
  {
    q: "É como aprender outra linguagem do zero?",
    a: "Não. C# é muito parecido com JavaScript, mas tipado e organizado em classes. O Módulo 1 inteiro é dedicado à ponte: comparando o que é igual e o que muda entre as duas linguagens. A criança sai pronta pra programar no Unity.",
  },
  {
    q: "Unity é difícil pra criança de 12-13 anos?",
    a: "É um motor profissional de verdade, mas começamos pelo essencial: cena, objetos, componentes. A progressão é gradual — primeiro a interface, depois movimento, depois física, depois o jogo completo. Termina o ano entregando um jogo 2D inteiro.",
  },
  {
    q: "Quanto tempo dura?",
    a: "1 ano letivo: 40 aulas, 80 horas, 4 módulos. Cada módulo termina com mini-projeto Unity e uma insígnia da Trilha Núcleo do Motor.",
  },
  {
    q: "Como é a frequência?",
    a: "2 horas por semana. Família escolhe: 1 aula de 2h ou 2 aulas de 1h. Conteúdo é o mesmo, dividido em Parte A + Parte B.",
  },
  {
    q: "O que vem no Ano 6?",
    a: "Programação Orientada a Objetos aprofundada em C# (classes próprias, herança, composição) e desenvolvimento de um jogo autoral final em Unity. O fechamento da jornada CREATE.",
  },
  {
    q: "Qual o investimento?",
    a: "Te passamos valor e formas de pagamento na aula experimental. Sem compromisso.",
  },
];

function Create1213Page() {
  return (
    <>
      <JsonLd
        data={coursePageSchemas({
          path: "/cursos/create/12-13-anos",
          programName: "CREATE",
          programPath: "/cursos/create",
          courseName: "CREATE Ano 5 — Núcleo do Motor: Unity + C# (12 a 13 anos)",
          courseDescription:
            "Quinto ano do CREATE da Santos Tech. Entrada no motor profissional Unity com programação em C#. 40 aulas com editor profissional, física 2D, sprites, animação e desenvolvimento de jogo 2D completo.",
          ageMin: 12,
          ageMax: 13,
          faq: FAQ,
        })}
      />
      <CourseHero
        theme={THEME}
        breadcrumb={{ href: "/cursos/create", label: "Programa CREATE" }}
        eyebrow="CREATE Ano 5 · 12 a 13 anos"
        title={
          <>
            Núcleo <br />
            <span style={{ color: THEME.soft }}>do Motor</span>
          </>
        }
        subtitle={
          <>
            <p>
              A maior transição da trilha. Seu filho entra no{" "}
              <strong>Unity</strong> — motor profissional usado em jogos
              comerciais — programando em <strong>C#</strong>.
            </p>
            <p>
              Termina o ano com um <strong>jogo 2D completo</strong> construído
              no Unity, com o título de <strong>Desenvolvedor Unity Júnior</strong>.
            </p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental grátis" }}
        secondaryCta={{ href: "#curriculo", label: "Ver currículo completo" }}
        imageName="students-1"
        imageAlt="Adolescente de 12 anos programando no Unity com C#"
        blobId="create1213Blob"
        decor="games"
        metrics={[
          { value: "40", label: "Aulas" },
          { value: "80h", label: "Carga horária" },
          { value: "Unity", label: "Motor profissional" },
          { value: "12–13", label: "Faixa etária" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              O salto do ano
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Do JavaScript pro{" "}
              <span style={{ color: THEME.primary }}>Unity profissional</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Não é começar do zero. <strong>Toda a base</strong> de lógica e
              algoritmos construída nos Anos 1-4 — variáveis, condições, laços,
              funções, objetos, coleções, máquina de estados — continua valendo
              e é reaproveitada o tempo inteiro.
            </p>
            <p className="mt-3 text-lg text-muted-foreground">
              O que muda é o <strong>ambiente</strong> (editor visual com cena,
              objetos e componentes) e a <strong>linguagem</strong> (C#, tipada
              e organizada em classes).
            </p>
          </Reveal>

          <div className="mt-8">
            <BridgeBanner
              title="Ponte do Ano 4 pro Ano 5"
              from={THEME.soft}
              to={THEME.primary}
            >
              No Ano 4 a criança aprendeu objetos, coleções, funções
              organizadas e máquina de estados em JavaScript. No Unity, esses
              mesmos conceitos viram <strong>GameObjects</strong>,{" "}
              <strong>componentes</strong>, <strong>métodos tipados</strong> e{" "}
              <strong>controle de comportamento</strong>. Aplicação direta, em
              ambiente profissional.
            </BridgeBanner>
          </div>
        </div>
      </section>

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            Quem está pronto pra um{" "}
            <span style={{ color: THEME.primary }}>motor profissional</span>
          </>
        }
        description={
          <>
            O <strong>CREATE Ano 5</strong> é desenhado pra adolescente de{" "}
            <strong>12 e 13 anos</strong> que terminou o Ano 4 com domínio de
            objetos, coleções e algoritmos em JavaScript. Aqui ele entra num
            motor de jogo de verdade.
          </>
        }
        checklistTitle="É ideal se seu filho"
        items={[
          "Concluiu o Ano 4 do CREATE com bom domínio",
          "Programa JavaScript com objetos, arrays e funções organizadas",
          "Quer aprender uma ferramenta profissional usada na indústria",
          "Está pensando em seguir programação como carreira ou hobby sério",
        ]}
        bg="muted"
      />

      <FormatSection theme={THEME} />

      <ProgressionTrail
        theme={THEME}
        eyebrow="Trilha Pixel · Núcleo do Motor"
        title={
          <>
            Quatro insígnias do{" "}
            <span style={{ color: THEME.soft }}>motor</span>
          </>
        }
        description={
          <>
            Nesta etapa, o aprendiz entra pela primeira vez num motor de jogo
            profissional e aprende a <strong>fazer o motor obedecer ao seu
            código</strong>. Cada módulo concluído entrega uma insígnia. No
            projeto final, recebe o título de{" "}
            <strong>Desenvolvedor Unity Júnior</strong> — entrada consolidada
            no desenvolvimento profissional.
          </>
        }
        badges={INSIGNIAS}
      />

      <ModuleGrid
        theme={THEME}
        id="curriculo"
        eyebrow="Currículo"
        title="Os 4 módulos do ano"
        description="Do tour pelo editor ao jogo 2D completo. Cada módulo desbloqueia uma capacidade nova do motor."
        modules={MODULES}
        badgeLabel="Conquista"
      />

      <LessonAccordion theme={THEME} modules={MODULES} badgeWord="Insígnia" />

      <ToolGrid
        theme={THEME}
        title="Ferramentas profissionais"
        description="O mesmo motor e a mesma linguagem usados em estúdios de jogos comerciais. Tudo gratuito pra uso educacional."
        tools={TOOLS}
      />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Pronto pra ver o CREATE Ano 5 ao vivo?"
        description="Aula experimental gratuita. Seu filho abre o Unity, edita uma cena profissional e escreve C# pela primeira vez."
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental" }}
        secondaryCta={{ href: "/cursos/create", label: "Voltar ao CREATE" }}
      />
    </>
  );
}
