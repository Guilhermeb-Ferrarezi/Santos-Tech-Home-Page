import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { Variable, GitFork, MessageSquare, Rocket, Code2, Cpu } from "lucide-react";
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

export const Route = createFileRoute("/cursos/junior/7-8-anos")({
  component: Junior78Page,
  head: () => ({
    meta: [
      { title: "JR3 (7–8 anos) — Pronto pra Criar · Santos Tech" },
      {
        name: "description",
        content:
          "Curso anual de programação para crianças de 7 a 8 anos em Ribeirão Preto. 40 aulas, 80h, do Scratch completo ao MakeCode Arcade. Bússola do Criador — ano-ponte para o CREATE.",
      },
      { property: "og:title", content: "JR3 · 7 a 8 anos · Santos Tech" },
      {
        property: "og:description",
        content: "O ano-ponte para o CREATE. Variáveis, condicionais, clones, MakeCode. Aulas presenciais.",
      },
      { property: "og:url", content: "/cursos/junior/7-8-anos" },
    ],
    links: [{ rel: "canonical", href: "/cursos/junior/7-8-anos" }],
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

const MARCOS: ProgressionBadge[] = [
  { name: "Marco das Variáveis", icon: Variable, color: "#f59e0b", desc: "Placar, vidas e tempo" },
  { name: "Marco da Decisão", icon: GitFork, color: "#06b6d4", desc: "Condicionais e operadores" },
  { name: "Marco das Mensagens", icon: MessageSquare, color: "#10b981", desc: "Jogos com mensagens e clones" },
  { name: "Marco da Transição", icon: Rocket, color: "#ef4444", desc: "Primeiros jogos no MakeCode" },
];

const MODULES: Module[] = [
  {
    n: 1,
    name: "Scratch com Variáveis: Placar e Pontos",
    classes: "Aulas 1 a 10",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Entender o conceito de variável, criar e exibir placar, somar e subtrair pontos, controlar vidas e tempo e mostrar/esconder dados na tela.",
    project: "Jogo com Placar e Vidas — jogo que conta pontos e vidas usando variáveis.",
    tool: "Scratch (gratuito)",
    badge: MARCOS[0],
    icon: Code2,
    lessons: [
      { n: 1, title: "Criador em Ação", goal: "Retoma o Scratch revisando um jogo do ano anterior e conhece o desafio: criar jogos de verdade." },
      { n: 2, title: "O que é uma Variável", goal: "Entende a ideia de 'caixinha que guarda um número' com exemplos do dia a dia." },
      { n: 3, title: "Criando meu Primeiro Placar", goal: "Cria uma variável de pontos e a exibe na tela." },
      { n: 4, title: "Somando Pontos", goal: "Aumenta a pontuação quando o jogador realiza uma ação." },
      { n: 5, title: "Perdendo Pontos", goal: "Diminui a variável em situações de erro ou penalidade." },
      { n: 6, title: "Vidas no Jogo", goal: "Usa uma variável para controlar o número de vidas do jogador." },
      { n: 7, title: "Cronômetro e Tempo", goal: "Cria um temporizador com variável para dar ritmo ao jogo." },
      { n: 8, title: "Mostrar e Esconder Dados", goal: "Controla quando o placar aparece na tela, no início e no fim." },
      { n: 9, title: "Planejando o Placar", goal: "Projeta as regras de pontuação do mini-projeto." },
      { n: 10, title: "Mini-projeto: Jogo com Placar e Vidas", goal: "Cria um jogo que conta pontos e vidas usando variáveis. Conquista o Marco das Variáveis." },
    ],
  },
  {
    n: 2,
    name: "Lógica de Decisão: Condicionais e Operadores",
    classes: "Aulas 11 a 20",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Usar \"se... então\" e \"se/senão\", comparar números com operadores, combinar condições com e/ou/não, usar números aleatórios, ler e comparar respostas do jogador e criar níveis de dificuldade.",
    project: "Jogo de Perguntas — quiz que avalia respostas e dá pontos usando condicionais.",
    tool: "Scratch (gratuito)",
    badge: MARCOS[1],
    icon: GitFork,
    lessons: [
      { n: 11, title: "Tomando Decisões", goal: "Entende a estrutura 'se... então' e quando o computador escolhe um caminho." },
      { n: 12, title: "Se... Senão", goal: "Usa 'se/senão' para dar duas respostas diferentes a uma situação." },
      { n: 13, title: "Comparando Números", goal: "Usa os operadores maior, menor e igual para criar condições." },
      { n: 14, title: "Condições com a Pontuação", goal: "Faz algo acontecer quando o placar chega a um valor, como passar de fase." },
      { n: 15, title: "E, Ou e Não", goal: "Combina condições com operadores lógicos para regras mais espertas." },
      { n: 16, title: "Números Aleatórios", goal: "Usa sorteio de números para deixar o jogo imprevisível." },
      { n: 17, title: "Perguntas e Respostas", goal: "Usa o bloco 'pergunte' e compara a resposta do jogador." },
      { n: 18, title: "Níveis de Dificuldade", goal: "Muda o comportamento do jogo conforme uma condição, entre fácil e difícil." },
      { n: 19, title: "Planejando meu Quiz", goal: "Projeta as perguntas e as regras do mini-projeto." },
      { n: 20, title: "Mini-projeto: Jogo de Perguntas", goal: "Cria um quiz que avalia respostas e dá pontos com condicionais. Conquista o Marco da Decisão." },
    ],
  },
  {
    n: 3,
    name: "Jogos Completos: Mensagens e Clones",
    classes: "Aulas 21 a 30",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Comunicar atores com transmitir/receber mensagem, criar telas de início e fim, entender e usar clones para gerar muitos objetos, encadear fases e testar/equilibrar a jogabilidade.",
    project: "Jogo Completo Autoral — jogo com tela inicial, fases, mensagens e clones.",
    tool: "Scratch (gratuito)",
    badge: MARCOS[2],
    icon: MessageSquare,
    lessons: [
      { n: 21, title: "Conversando entre Atores", goal: "Usa transmitir e receber mensagem para um ator avisar o outro." },
      { n: 22, title: "Mensagens que Disparam Ações", goal: "Coordena vários atores com mensagens para uma cena sincronizada." },
      { n: 23, title: "Telas de Início e Fim", goal: "Cria tela de abertura e tela final controladas por mensagens." },
      { n: 24, title: "Conhecendo os Clones", goal: "Entende o conceito de clone para criar muitos objetos iguais." },
      { n: 25, title: "Chuva de Clones", goal: "Usa clones para gerar inimigos ou itens em sequência." },
      { n: 26, title: "Clones que Reagem", goal: "Programa cada clone para se mover e desaparecer ao ser tocado." },
      { n: 27, title: "Várias Fases", goal: "Encadeia fases diferentes no mesmo projeto usando mensagens." },
      { n: 28, title: "Ajustando a Jogabilidade", goal: "Testa e equilibra a dificuldade do jogo." },
      { n: 29, title: "Planejando meu Jogo Completo", goal: "Projeta telas, fases e regras do mini-projeto." },
      { n: 30, title: "Mini-projeto: Jogo Completo Autoral", goal: "Cria um jogo com início, fases, mensagens e clones. Conquista o Marco das Mensagens." },
    ],
  },
  {
    n: 4,
    name: "Ponte para o CREATE: Blocos estilo MakeCode",
    classes: "Aulas 31 a 40",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Conhecer o MakeCode e compará-lo com o Scratch, usar \"ao iniciar\" e \"para sempre\", criar e mover sprites, recriar variáveis e condicionais no novo ambiente, programar eventos e colisões e observar como os blocos viram texto.",
    project: "Pronto para o CREATE — mini-jogo completo no MakeCode que encerra o JR e prepara para a Faixa Branca.",
    tool: "MakeCode Arcade (gratuito)",
    badge: MARCOS[3],
    icon: Cpu,
    lessons: [
      { n: 31, title: "Um Novo Ambiente", goal: "Conhece o MakeCode Arcade e compara seus blocos com os do Scratch." },
      { n: 32, title: "Ao Iniciar e Para Sempre", goal: "Usa os blocos 'ao iniciar' e 'para sempre', reconhecendo padrões já aprendidos." },
      { n: 33, title: "Criando um Sprite", goal: "Cria e desenha um personagem (sprite) no editor do MakeCode." },
      { n: 34, title: "Movendo com Controles", goal: "Programa o movimento do sprite com os botões de direção." },
      { n: 35, title: "Variáveis no MakeCode", goal: "Recria a ideia de placar usando variáveis no novo ambiente." },
      { n: 36, title: "Condicionais no MakeCode", goal: "Usa 'se... então' no MakeCode para reações do jogo." },
      { n: 37, title: "Eventos e Colisões", goal: "Programa o que acontece quando dois sprites se encontram." },
      { n: 38, title: "Espiando o Código em Texto", goal: "Vê como os blocos viram texto (JavaScript), preparando a transição." },
      { n: 39, title: "Planejando meu Jogo no MakeCode", goal: "Projeta um jogo simples para fechar o ano." },
      { n: 40, title: "Mini-projeto: Pronto para o CREATE", goal: "Cria um mini-jogo completo no MakeCode, encerrando o JR pronto pra Faixa Branca. Conquista o Marco da Transição e o título de Criador Pronto para o CREATE." },
    ],
  },
];

const TOOLS: Tool[] = [
  { name: "Scratch (MIT)", type: "Gratuito", role: "Os 3 primeiros módulos. Variáveis, condicionais, mensagens, clones — toda a programação visual no nível pré-CREATE.", icon: Code2 },
  { name: "MakeCode Arcade (Microsoft)", type: "Gratuito", role: "O módulo final. Mesma lógica em outro ambiente — sprites, eventos, código em texto (JavaScript) por baixo dos blocos.", icon: Cpu },
];

const FAQ: FaqItem[] = [
  {
    q: "Meu filho não fez o JR1 nem o JR2. Pode entrar no JR3?",
    a: "Depende do nível. O JR3 assume Scratch básico já dominado (movimento, eventos, repetição). Se a criança nunca programou, recomendamos começar pelo JR1 ou JR2. Conversa com a gente que avaliamos.",
  },
  {
    q: "Qual a diferença entre o JR3 e o CREATE?",
    a: "O JR3 é a ponte. Termina o ano com a criança dominando Scratch e fazendo seus primeiros jogos no MakeCode. O CREATE pega esse aluno e leva pra programação por níveis (Faixa Branca em diante) durante 6 anos.",
  },
  {
    q: "É difícil pra um aluno de 7-8 anos?",
    a: "É desafiador, mas no ritmo certo. Variáveis e condicionais são apresentados com exemplos concretos (placar, vidas) antes de virarem abstratos. Cada módulo termina com um jogo funcional.",
  },
  {
    q: "Quanto tempo dura?",
    a: "1 ano letivo: 40 aulas, 80 horas, 4 módulos. Cada módulo termina com um marco da Bússola do Criador. No fim, a criança vira Criador Pronto pra Faixa Branca do CREATE.",
  },
  {
    q: "Como é a frequência?",
    a: "2 horas por semana. Família escolhe: 1 aula de 2h ou 2 aulas de 1h. Conteúdo é o mesmo, dividido em Parte A + Parte B sem repetição.",
  },
  {
    q: "Depois do JR3, ele vai pro CREATE direto?",
    a: "Sim — entra na Faixa Branca do CREATE, voltada pra 8 anos. Como o JR3 já trabalhou MakeCode no módulo final, ele entra familiarizado com o ambiente. Sem salto brusco.",
  },
  {
    q: "Qual o investimento?",
    a: "Te passamos valor e formas de pagamento na visita guiada. Aproveita pra conhecer o espaço, ver uma aula e tirar dúvidas — sem compromisso.",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────

function Junior78Page() {
  return (
    <>
      <CourseHero
        theme={THEME}
        breadcrumb={{ href: "/cursos/junior", label: "Programa JR" }}
        eyebrow="JR3 · 7 a 8 anos"
        title={
          <>
            Pronto <br />
            <span style={{ color: THEME.soft }}>pra Criar</span>
          </>
        }
        subtitle={
          <>
            <p>
              O <strong>ano-ponte para o CREATE</strong>. Variáveis,
              condicionais, mensagens e clones — e os primeiros jogos no{" "}
              <strong>MakeCode</strong>.
            </p>
            <p>
              A criança termina o JR pronta pra entrar na{" "}
              <strong>Faixa Branca do CREATE</strong> aos 8 anos, sem salto
              brusco.
            </p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Agendar visita guiada grátis" }}
        secondaryCta={{ href: "#curriculo", label: "Ver currículo completo" }}
        imageName="capa-jr"
        imageAlt="Criança de 7 anos programando no Scratch na Santos Tech"
        blobId="junior78Blob"
        decor="playful"
        metrics={[
          { value: "40", label: "Aulas" },
          { value: "80h", label: "Carga horária" },
          { value: "40", label: "Semanas" },
          { value: "7–8", label: "Faixa etária" },
        ]}
      />

      {/* PROPOSTA + BRIDGE — específico do JR3 */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              A proposta
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Do Scratch ao MakeCode,{" "}
              <span style={{ color: THEME.primary }}>sem buracos</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              O JR3 consolida o Scratch como ferramenta de criação de jogos
              completos e introduz, no fim do ano, a programação por blocos no
              estilo MakeCode. A criança domina <strong>variáveis</strong>,{" "}
              <strong>condicionais completas</strong>, <strong>mensagens</strong>{" "}
              e <strong>clones</strong>, e termina o ano pronta pra entrar na{" "}
              <strong>Faixa Branca do CREATE</strong> aos 8 anos.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal delay={120}>
              <div className="h-full rounded-xl border bg-white p-6 shadow-sm" style={{ borderColor: THEME.soft }}>
                <p className="text-xs font-black uppercase tracking-wider" style={{ color: THEME.primary }}>
                  De onde viemos (JR2)
                </p>
                <p className="mt-2 text-sm text-foreground/85">
                  Repetição, eventos, primeiros passos no Scratch e um
                  condicional simples em mini-jogos. O JR3 assume isso como
                  base e não repete conteúdo.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full rounded-xl border bg-white p-6 shadow-sm" style={{ borderColor: THEME.primary + "60" }}>
                <p className="text-xs font-black uppercase tracking-wider" style={{ color: THEME.primary }}>
                  O foco do ano
                </p>
                <p className="mt-2 text-sm text-foreground/85">
                  Variáveis (placar, vidas, tempo), condicionais completas com
                  operadores, comunicação entre atores e clones, e a transição
                  para os blocos do MakeCode.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-8">
            <BridgeBanner title="Conexão direta com o CREATE">
              Ao concluir o Módulo 4, a criança já programou jogos por blocos
              no MakeCode Arcade e viu o código virar texto (JavaScript). Ela
              entra na <strong>Faixa Branca do CREATE</strong> (8 a 14 anos) já
              familiarizada com o ambiente, sem nenhum salto brusco.
            </BridgeBanner>
          </div>
        </div>
      </section>

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            O último ano do JR — porta pro{" "}
            <span style={{ color: THEME.primary }}>CREATE</span>
          </>
        }
        description={
          <>
            O <strong>JR3</strong> é desenhado pra criança de{" "}
            <strong>7 e 8 anos</strong> que já lê com mais autonomia, já tem
            base de programação por blocos e está pronta pra encarar conceitos
            mais formais — variáveis, condicionais completas, jogos com várias
            fases.
          </>
        }
        checklistTitle="É ideal se seu filho"
        items={[
          "Já lê com mais autonomia",
          "Tem base de Scratch ou ScratchJr",
          "Curte criar jogos com regras, fases, pontuação",
          "Já vai completar 8 anos e quer entrar no CREATE depois",
        ]}
        bg="muted"
      />

      <FormatSection theme={THEME} />

      <ProgressionTrail
        theme={THEME}
        eyebrow="Sistema de níveis"
        title={
          <>
            Bússola do <span style={{ color: THEME.soft }}>Criador</span>
          </>
        }
        description={
          <>
            Continuando o Passaporte do Inventor (JR1) e o Mapa do Explorador
            (JR2), aqui a criança se torna um <strong>Criador</strong> e
            conquista um marco ao concluir cada módulo. Completando os 4
            marcos, recebe o título de{" "}
            <strong>Criador Pronto para o CREATE</strong> — a Pré-Faixa Branca.
          </>
        }
        badges={MARCOS}
      />

      <ModuleGrid
        theme={THEME}
        id="curriculo"
        eyebrow="Currículo"
        title="Os 4 módulos do ano"
        description="Dificuldade crescente. Cada módulo termina com um mini-projeto autoral que vira a conquista do marco."
        modules={MODULES}
        badgeLabel="Conquista"
      />

      <LessonAccordion theme={THEME} modules={MODULES} badgeWord="" />

      <ToolGrid theme={THEME} title="Tecnologia de mercado" tools={TOOLS} />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Pronto pra ver o JR3 ao vivo?"
        description="Venha conhecer o espaço, ver uma aula e descobrir se o JR3 é o curso certo pra esse momento da jornada. Sem compromisso."
        primaryCta={{ href: WHATSAPP, label: "Agendar visita guiada grátis" }}
        secondaryCta={{ href: "/cursos/create", label: "Conheça o CREATE" }}
      />
    </>
  );
}
