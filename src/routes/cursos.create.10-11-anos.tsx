import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Keyboard,
  GitBranch,
  Layers,
  Code2,
  Terminal,
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
import { JsonLd } from "@/components/json-ld";
import { pageMeta, coursePageSchemas } from "@/lib/seo";

export const Route = createFileRoute("/cursos/create/10-11-anos")({
  component: Create1011Page,
  head: () =>
    pageMeta({
      title: "CREATE Ano 3 (10 a 11 anos) — Códex do Programador (JavaScript) | Santos Tech",
      description:
        "Terceiro ano do CREATE: 40 aulas escrevendo JavaScript do zero (texto puro). Variáveis, condicionais, laços, funções e arrays criando jogos. Pra crianças de 10 a 11 anos em Ribeirão Preto. Selo de Ouro do Códex do Programador.",
      path: "/cursos/create/10-11-anos",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

const THEME: CourseTheme = {
  primary: "#187ABF",
  dark: "#04325A",
  soft: "#49A8EB",
};

const INSIGNIAS: ProgressionBadge[] = [
  { name: "Digitador de Código", icon: Keyboard, color: "#f59e0b", desc: "Primeiro código em texto, sem blocos" },
  { name: "Estrategista da Lógica", icon: GitBranch, color: "#06b6d4", desc: "Decisões e repetições à mão" },
  { name: "Arquiteto de Funções", icon: Layers, color: "#10b981", desc: "Funções, arrays e organização" },
  { name: "Programador de Jogos Pixel", icon: Code2, color: "#ef4444", desc: "Jogo inteiro em texto" },
];

const MODULES: Module[] = [
  {
    n: 1,
    name: "Do Bloco ao Teclado: Digitando o Código",
    classes: "Aulas 1 a 10",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "A ponte entre ler e escrever. A criança fecha o editor de blocos e passa a digitar o código diretamente — sintaxe básica, variáveis, tipos e operadores, tudo pelo teclado.",
    project: "Coletor Digitado — jogo de coletar itens com pontuação, programado inteiramente em texto, sem usar um único bloco.",
    tool: "MakeCode Arcade · modo JavaScript",
    badge: INSIGNIAS[0],
    icon: Keyboard,
    lessons: [
      { n: 1, title: "Boas-vindas ao Editor de Texto", goal: "Revisita o modo JavaScript do MakeCode e digita suas primeiras linhas de código em vez de arrastar blocos." },
      { n: 2, title: "Anatomia de uma Linha", goal: "Aprende a sintaxe básica: o que é uma instrução, o uso do ponto e vírgula e por que maiúsculas e minúsculas importam." },
      { n: 3, title: "Criando Sprites por Texto", goal: "Escreve do zero o código que cria um personagem e o posiciona na tela." },
      { n: 4, title: "Variáveis com let", goal: "Declara variáveis digitando 'let' e guarda valores para reutilizar depois no jogo." },
      { n: 5, title: "Tipos de Valores", goal: "Distingue números, textos e booleanos e percebe quando cada tipo é o certo." },
      { n: 6, title: "Operadores Matemáticos", goal: "Escreve contas com mais, menos, vezes e divisão para mover e pontuar." },
      { n: 7, title: "Mudando o Sprite por Código", goal: "Altera posição, velocidade e imagem do personagem escrevendo suas propriedades." },
      { n: 8, title: "Strings e Mensagens", goal: "Junta textos para exibir nomes, frases e mensagens na tela." },
      { n: 9, title: "Eventos Escritos à Mão", goal: "Digita o código que responde a botões pressionados e a colisões." },
      { n: 10, title: "Mini-projeto: Coletor Digitado", goal: "Programa, apenas por texto, um jogo de coletar itens com contagem de pontos. Conquista a insígnia Digitador de Código." },
    ],
  },
  {
    n: 2,
    name: "Decisões e Repetições",
    classes: "Aulas 11 a 20",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "O jogo aprende a pensar e a repetir. Condicionais para o jogo tomar decisões e laços para repetir ações, montando regras cada vez mais ricas com lógica escrita à mão.",
    project: "Esquiva Reativa — jogo de desviar de obstáculos com sistema de vidas, dificuldade em níveis e regras de vitória e derrota escritas em texto.",
    tool: "MakeCode Arcade · modo JavaScript",
    badge: INSIGNIAS[1],
    icon: GitBranch,
    lessons: [
      { n: 11, title: "Se Isto, Então Aquilo", goal: "Escreve seu primeiro 'if' para o jogo tomar uma decisão sozinho." },
      { n: 12, title: "Comparando Valores", goal: "Usa operadores de comparação (maior, menor, igual) para testar condições." },
      { n: 13, title: "if e else", goal: "Cria caminhos alternativos definindo o que acontece quando a condição é falsa." },
      { n: 14, title: "E, Ou, Não", goal: "Combina condições com operadores lógicos para testar mais de uma coisa ao mesmo tempo." },
      { n: 15, title: "else if em Cadeia", goal: "Escreve várias decisões encadeadas para tratar situações diferentes." },
      { n: 16, title: "O Laço for", goal: "Usa 'for' para repetir uma ação um número definido de vezes." },
      { n: 17, title: "Vários Sprites com for", goal: "Gera muitos inimigos ou itens de uma só vez usando um laço." },
      { n: 18, title: "O Laço while", goal: "Repete uma ação enquanto a condição for verdadeira, com cuidado para não travar o jogo." },
      { n: 19, title: "Decisões dentro de Laços", goal: "Combina 'if' com 'for' e 'while' para construir uma lógica mais inteligente." },
      { n: 20, title: "Mini-projeto: Esquiva Reativa", goal: "Programa um jogo de desviar com vidas, níveis e regras escritas em texto. Conquista a insígnia Estrategista da Lógica." },
    ],
  },
  {
    n: 3,
    name: "Funções e Organização",
    classes: "Aulas 21 a 30",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Código que se organiza. Agrupar instruções em funções com nome, parâmetros e retorno, descobrir as listas (arrays) e começar a depurar de verdade, lendo erros e usando o console.",
    project: "Jogo em Funções — jogo reescrito de forma organizada, com a lógica separada em funções e os inimigos guardados e controlados por um array.",
    tool: "MakeCode Arcade · modo JavaScript",
    badge: INSIGNIAS[2],
    icon: Layers,
    lessons: [
      { n: 21, title: "O que é uma Função", goal: "Entende por que agrupar código e chama sua primeira função pronta." },
      { n: 22, title: "Criando Funções", goal: "Escreve (define) uma função própria e a executa no jogo." },
      { n: 23, title: "Funções com Parâmetros", goal: "Passa valores para a função fazer coisas diferentes a cada chamada." },
      { n: 24, title: "Retornando Valores", goal: "Usa 'return' para a função devolver um resultado que o jogo aproveita." },
      { n: 25, title: "Reutilizando Funções", goal: "Chama a mesma função em vários lugares para não repetir código." },
      { n: 26, title: "Conhecendo Arrays", goal: "Cria uma lista para guardar vários valores juntos." },
      { n: 27, title: "Mexendo no Array", goal: "Adiciona, remove e acessa itens da lista escrevendo código." },
      { n: 28, title: "Percorrendo Arrays", goal: "Usa um laço for para passar por todos os itens de uma lista." },
      { n: 29, title: "Caça aos Bugs", goal: "Lê mensagens de erro e usa console.log para descobrir o que deu errado." },
      { n: 30, title: "Mini-projeto: Jogo em Funções", goal: "Reescreve um jogo organizado em funções, com inimigos guardados em um array. Conquista a insígnia Arquiteto de Funções." },
    ],
  },
  {
    n: 4,
    name: "Programador de Jogos",
    classes: "Aulas 31 a 40",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "A autoria completa. Reunir tudo, aprimorar a qualidade do código com boas práticas e refatorações, e programar do zero, em texto, um jogo inteiro — do planejamento à mostra final.",
    project: "Projeto Final — jogo completo programado em texto pela própria criança, com mecânica original, pontuação, dificuldade crescente e condições de vitória e derrota.",
    tool: "MakeCode Arcade · modo JavaScript",
    badge: INSIGNIAS[3],
    icon: Code2,
    lessons: [
      { n: 31, title: "Código Limpo", goal: "Dá nomes claros às variáveis e funções e organiza o código para ficar fácil de ler." },
      { n: 32, title: "Refatorando", goal: "Melhora um código que já funciona, deixando-o mais curto e claro sem quebrá-lo." },
      { n: 33, title: "Arrays em Ação", goal: "Usa arrays para controlar ondas de inimigos e conjuntos de itens do jogo." },
      { n: 34, title: "Estado do Jogo", goal: "Usa variáveis e funções para controlar telas de início, partida e fim de jogo." },
      { n: 35, title: "Depuração Avançada", goal: "Investiga bugs difíceis passo a passo, testando hipóteses até achar a causa." },
      { n: 36, title: "Planejando Meu Jogo", goal: "Desenha a ideia, as regras e a lista de funções do projeto final." },
      { n: 37, title: "Construindo o Núcleo", goal: "Programa do zero, em texto, a mecânica principal do jogo final." },
      { n: 38, title: "Adicionando Desafio", goal: "Escreve a pontuação, a dificuldade crescente e as condições de vencer e perder." },
      { n: 39, title: "Polir e Testar", goal: "Corrige bugs, equilibra a dificuldade e melhora a experiência do jogo." },
      { n: 40, title: "Mostra de Jogos e Próximo Ano", goal: "Apresenta o jogo completo e conhece o caminho do Ano 4. Conquista a insígnia Programador de Jogos Pixel e o Selo de Ouro do Códex do Programador." },
    ],
  },
];

const TOOLS: Tool[] = [
  {
    name: "MakeCode Arcade · modo JavaScript",
    type: "Gratuito",
    role: "Mesma ferramenta dos anos anteriores, mas agora em modo texto. A criança escreve cada linha de código no teclado, criando jogos do zero em JavaScript.",
    icon: Code2,
  },
  {
    name: "Console e mensagens de erro",
    type: "Embutido",
    role: "Ferramenta de depuração: a criança aprende a ler erros do JavaScript e usar console.log pra investigar e corrigir bugs.",
    icon: Terminal,
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Meu filho não fez os Anos 1 e 2. Pode entrar no Ano 3?",
    a: "É possível, mas tem que avaliar. O Ano 3 assume que a criança já leu e fez pequenas edições em JavaScript no Ano 2. Sem essa base, recomendamos começar pelo Ano 1 ou Ano 2. Conversa com a gente.",
  },
  {
    q: "É difícil pra uma criança de 10-11 anos digitar código?",
    a: "Sim, é desafiador — e por isso o Módulo 1 é dedicado a essa transição. A criança fecha o editor de blocos e aprende a digitar com sintaxe correta, passo a passo. Erros são parte do processo.",
  },
  {
    q: "É a mesma ferramenta dos anos anteriores?",
    a: "Sim — MakeCode Arcade, agora em modo JavaScript (texto). A criança continua criando jogos, no mesmo ambiente, só que escreve cada linha no teclado.",
  },
  {
    q: "Quanto tempo dura?",
    a: "1 ano letivo: 40 aulas, 80 horas, 4 módulos. Cada módulo termina com mini-projeto e insígnia da Trilha Códex do Programador.",
  },
  {
    q: "Como é a frequência?",
    a: "2 horas por semana. Família escolhe: 1 aula de 2h ou 2 aulas de 1h. Conteúdo é o mesmo, dividido em Parte A + Parte B.",
  },
  {
    q: "Como acompanho o progresso?",
    a: "4 insígnias ao longo do ano (Digitador → Estrategista → Arquiteto → Programador de Jogos). Reunindo as 4, a criança recebe o Selo de Ouro do Códex do Programador — emblema máximo do Ano 3.",
  },
  {
    q: "E depois do Ano 3?",
    a: "Ano 4 (11-12 anos): JavaScript intermediário e algoritmos. Objetos, coleções avançadas, funções reutilizáveis, máquina de estados e IA simples de inimigo. Prepara o Ano 5 (Unity + C#).",
  },
  {
    q: "Qual o investimento?",
    a: "Te passamos valor e formas de pagamento na aula experimental. Sem compromisso.",
  },
];

function Create1011Page() {
  return (
    <>
      <JsonLd
        data={coursePageSchemas({
          path: "/cursos/create/10-11-anos",
          programName: "CREATE",
          programPath: "/cursos/create",
          courseName: "CREATE Ano 3 — Códex do Programador (10 a 11 anos)",
          courseDescription:
            "Terceiro ano do CREATE da Santos Tech. JavaScript escrito do zero (texto puro, sem blocos). 40 aulas com variáveis, condicionais, laços, funções e arrays aplicados em jogos.",
          ageMin: 10,
          ageMax: 11,
          faq: FAQ,
        })}
      />
      <CourseHero
        theme={THEME}
        breadcrumb={{ href: "/cursos/create", label: "Programa CREATE" }}
        eyebrow="CREATE Ano 3 · 10 a 11 anos"
        title={
          <>
            Códex do <br />
            <span style={{ color: THEME.soft }}>Programador</span>
          </>
        }
        subtitle={
          <>
            <p>
              O ano em que seu filho deixa de só ler código e passa a{" "}
              <strong>escrever o próprio JavaScript do zero</strong>.
            </p>
            <p>
              Mesmo ambiente (MakeCode Arcade), agora em modo{" "}
              <strong>texto puro</strong>. Termina o ano programando um jogo
              inteiro, em JavaScript escrito à mão.
            </p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental grátis" }}
        secondaryCta={{ href: "#curriculo", label: "Ver currículo completo" }}
        imageName="students-1"
        imageAlt="Pré-adolescente de 10 anos digitando código JavaScript em jogo"
        blobId="create1011Blob"
        decor="code"
        metrics={[
          { value: "40", label: "Aulas" },
          { value: "80h", label: "Carga horária" },
          { value: "40", label: "Semanas" },
          { value: "10–11", label: "Faixa etária" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              O salto do ano
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              De leitor a{" "}
              <span style={{ color: THEME.primary }}>autor de código</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              No Ano 2, a criança aprendeu a ler JavaScript e fazer pequenas
              edições. O Ano 3 é o <strong>salto decisivo</strong>: fecha o
              editor de blocos e começa a escrever do zero, digitando cada
              instrução. Variáveis, condicionais, laços, funções e arrays —
              tudo em texto. No fim do ano, programa um jogo inteiro sozinho.
            </p>
          </Reveal>
        </div>
      </section>

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            O salto para o{" "}
            <span style={{ color: THEME.primary }}>código real</span>
          </>
        }
        description={
          <>
            O <strong>CREATE Ano 3</strong> é desenhado pra criança de{" "}
            <strong>10 e 11 anos</strong> que chega do Ano 2 já confiante com
            código em texto. Aqui ela vira autora — digita cada linha do próprio
            jogo, depura erros de verdade, aprende boas práticas.
          </>
        }
        checklistTitle="É ideal se seu filho"
        items={[
          "Concluiu o Ano 2 do CREATE",
          "Lê código JavaScript com confiança e fez pequenas edições",
          "Está pronto pra deixar os blocos pra trás e digitar de verdade",
          "Tem paciência pra encarar erros como parte do processo",
        ]}
        bg="muted"
      />

      <FormatSection theme={THEME} />

      <ProgressionTrail
        theme={THEME}
        eyebrow="Trilha Pixel · Códex do Programador"
        title={
          <>
            Quatro insígnias do{" "}
            <span style={{ color: THEME.soft }}>códex</span>
          </>
        }
        description={
          <>
            Conquistadas uma por módulo. Reunindo as quatro, a criança recebe o{" "}
            <strong>Selo de Ouro do Códex do Programador</strong> — emblema
            máximo do ano, que abre caminho pro Ano 4. Dentro de cada módulo, a
            criança ainda coleta selos Pixel (Bronze, Prata e Ouro) ao vencer
            marcos semanais.
          </>
        }
        badges={INSIGNIAS}
      />

      <ModuleGrid
        theme={THEME}
        id="curriculo"
        eyebrow="Currículo"
        title="Os 4 módulos do ano"
        description="Da primeira linha digitada ao jogo completo em texto. Cada módulo é um marco da autoria."
        modules={MODULES}
        badgeLabel="Conquista"
      />

      <LessonAccordion theme={THEME} modules={MODULES} badgeWord="Insígnia" />

      <ToolGrid
        theme={THEME}
        title="Mesma ferramenta, agora em texto"
        description="Continuidade dos anos anteriores: MakeCode Arcade. Mas agora a criança trabalha exclusivamente em modo JavaScript, digitando cada linha."
        tools={TOOLS}
      />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Pronto pra ver o CREATE Ano 3 ao vivo?"
        description="Aula experimental gratuita. Seu filho vai pro computador, digita JavaScript de verdade e vê o jogo responder ao código que ele escreveu."
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental" }}
        secondaryCta={{ href: "/cursos/create", label: "Voltar ao CREATE" }}
      />
    </>
  );
}
