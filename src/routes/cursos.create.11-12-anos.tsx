import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  Database,
  Layers,
  Box,
  Hammer,
  Code2,
  FileCode,
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

export const Route = createFileRoute("/cursos/create/11-12-anos")({
  component: Create1112Page,
  head: () =>
    pageMeta({
      title: "CREATE Ano 4 (11 a 12 anos) — Forja dos Algoritmos | Santos Tech",
      description:
        "Quarto ano do CREATE: 40 aulas de JavaScript intermediário pra pré-adolescentes de 11 a 12 anos em Ribeirão Preto. Objetos, coleções avançadas, IA de jogo e algoritmos aplicados. Título Engenheiro de Jogos Júnior.",
      path: "/cursos/create/11-12-anos",
    }),
});

const WHATSAPP = WHATSAPP_URL.courses;

const THEME: CourseTheme = {
  primary: "#187ABF",
  dark: "#04325A",
  soft: "#49A8EB",
};

const INSIGNIAS: ProgressionBadge[] = [
  { name: "Guardião dos Dados", icon: Database, color: "#f59e0b", desc: "Objetos e propriedades organizadas" },
  { name: "Mestre das Coleções", icon: Layers, color: "#06b6d4", desc: "Arrays de objetos, filter, map, find" },
  { name: "Arquiteto de Funções", icon: Box, color: "#10b981", desc: "Funções reutilizáveis e módulos" },
  { name: "Forjador de Algoritmos", icon: Hammer, color: "#ef4444", desc: "Busca, ordenação e IA de jogo" },
];

const MODULES: Module[] = [
  {
    n: 1,
    name: "Objetos e Dados Organizados",
    classes: "Aulas 1 a 10",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Agrupar as informações de um jogo em objetos, em vez de espalhá-las em muitas variáveis soltas. Criar, ler e alterar propriedades, passar objetos para funções, adicionar métodos e usar funções fábrica.",
    project: "Jogo de ação simples em que jogador, inimigo e item são objetos completos, com propriedades (vida, posição, força) e métodos próprios.",
    tool: "MakeCode Arcade · JavaScript",
    badge: INSIGNIAS[0],
    icon: Database,
    lessons: [
      { n: 1, title: "Reacendendo a Trilha", goal: "Retoma variáveis, if/for/while, funções e arrays do Ano 3 construindo um mini-jogo rápido de aquecimento." },
      { n: 2, title: "O que é um objeto", goal: "Agrupa propriedades relacionadas (nome, vida, x, y) em um único objeto jogador." },
      { n: 3, title: "Lendo e mudando propriedades", goal: "Acessa e altera campos com a notação de ponto para atualizar o estado do jogo." },
      { n: 4, title: "Nasce o inimigo", goal: "Cria um objeto inimigo com várias propriedades e o exibe na tela." },
      { n: 5, title: "Objetos viajam em funções", goal: "Passa um objeto para uma função que age sobre ele, como uma função receberDano." },
      { n: 6, title: "A fábrica de objetos", goal: "Escreve uma função que devolve novos objetos com valores diferentes, gerando vários inimigos." },
      { n: 7, title: "Objetos que sabem agir", goal: "Coloca uma função dentro do objeto (método), como jogador.atacar()." },
      { n: 8, title: "Decisões a partir dos dados", goal: "Usa propriedades do objeto em condições (colisão, vida menor ou igual a zero) para disparar eventos." },
      { n: 9, title: "Espiando por dentro", goal: "Usa console.log para inspecionar objetos inteiros e encontrar propriedades com valores errados." },
      { n: 10, title: "Mini-projeto: o trio do jogo", goal: "Finaliza um jogo em que jogador, inimigo e item são objetos completos e interagem entre si. Conquista a insígnia Guardião dos Dados." },
    ],
  },
  {
    n: 2,
    name: "Coleções e Métodos de Array",
    classes: "Aulas 11 a 20",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Lidar com muitos elementos ao mesmo tempo combinando arrays e objetos. Usar os métodos forEach, filter, map, find. Montar um inventário e depurar erros comuns de coleção.",
    project: "Jogo de coleta com inventário dinâmico, em que itens são filtrados por tipo, transformados em pontos e contados em tempo real.",
    tool: "MakeCode Arcade · JavaScript",
    badge: INSIGNIAS[1],
    icon: Layers,
    lessons: [
      { n: 11, title: "Exércitos em arrays", goal: "Guarda muitos inimigos em um array e os percorre com for para atualizá-los." },
      { n: 12, title: "Listas de objetos", goal: "Combina arrays e objetos: uma lista em que cada inimigo é um objeto com suas próprias propriedades." },
      { n: 13, title: "Percorrer com elegância (forEach)", goal: "Atualiza todos os elementos de uma coleção sem controlar o índice na mão." },
      { n: 14, title: "Nascer e desaparecer", goal: "Usa push e splice para criar e destruir objetos durante o jogo." },
      { n: 15, title: "Filtrar (filter)", goal: "Separa elementos por critério, como inimigos ainda vivos ou itens coletáveis." },
      { n: 16, title: "Transformar (map)", goal: "Gera uma nova lista a partir de outra, por exemplo a lista de pontos de cada item." },
      { n: 17, title: "Procurar na coleção (find)", goal: "Localiza um elemento específico, como a chave certa ou o inimigo mais próximo." },
      { n: 18, title: "O inventário do herói", goal: "Monta um sistema de inventário usando um array de objetos com quantidade e tipo." },
      { n: 19, title: "Caçando bugs em coleções", goal: "Rastreia erros comuns como índice fora do limite e item não encontrado." },
      { n: 20, title: "Mini-projeto: o coletor", goal: "Finaliza um jogo de coleta com inventário, filtros por tipo e contagem dinâmica de itens. Conquista a insígnia Mestre das Coleções." },
    ],
  },
  {
    n: 3,
    name: "Funções Avançadas e Organização de Código",
    classes: "Aulas 21 a 30",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Escrever funções que devolvem valores e são reutilizáveis, entender escopo e organizar um jogo em partes limpas. Aplicar DRY, separar em arquivos/módulos, centralizar configuração e refatorar código bagunçado.",
    project: "Biblioteca de funções de jogo reutilizável (movimento, dano, pontuação) aplicada em um jogo organizado em módulos.",
    tool: "MakeCode Arcade · JavaScript + editor externo",
    badge: INSIGNIAS[2],
    icon: Box,
    lessons: [
      { n: 21, title: "Funções que devolvem (return)", goal: "Entende como o return torna uma função reutilizável e encadeável." },
      { n: 22, title: "Parâmetros flexíveis", goal: "Escreve funções que recebem vários dados e se adaptam a situações diferentes." },
      { n: 23, title: "Onde a variável existe (escopo)", goal: "Distingue variáveis locais e globais e evita conflitos entre elas." },
      { n: 24, title: "Funções que chamam funções", goal: "Compõe comportamentos complexos a partir de funções pequenas." },
      { n: 25, title: "Padrões e retornos compostos", goal: "Usa valores padrão e devolve um objeto com vários resultados de uma vez." },
      { n: 26, title: "Não repita (DRY)", goal: "Identifica trechos repetidos e os extrai em uma única função reutilizável." },
      { n: 27, title: "Dividir para organizar", goal: "Separa o jogo em partes (jogador, inimigos, utilidades) em arquivos/módulos." },
      { n: 28, title: "Central de ajustes", goal: "Reúne números mágicos e configurações em um único lugar para ajustar o jogo com facilidade." },
      { n: 29, title: "Reformando o código", goal: "Reescreve um jogo confuso, deixando-o claro, limpo e fácil de entender." },
      { n: 30, title: "Mini-projeto: a caixa de ferramentas", goal: "Monta uma biblioteca de funções reutilizável e a usa em um jogo organizado em módulos. Conquista a insígnia Arquiteto de Funções." },
    ],
  },
  {
    n: 4,
    name: "Algoritmos e IA de Jogo",
    classes: "Aulas 31 a 40",
    duration: "10 semanas",
    hours: "20h",
    objectives:
      "Pensar em passos (algoritmos) e aplicá-los em jogos: busca, ordenação simples (placar ranking) e máquina de estados. Construir uma IA de inimigo (patrulha, perseguição e fuga), placar ordenado e tudo em objetos.",
    project: "Jogo completo e sofisticado, com IA de inimigo (patrulha, perseguição e fuga), placar ordenado em ranking e todos os dados organizados em objetos.",
    tool: "MakeCode Arcade · JavaScript + editor externo",
    badge: INSIGNIAS[3],
    icon: Hammer,
    lessons: [
      { n: 31, title: "O que é um algoritmo", goal: "Apresenta a ideia de passo a passo com entrada e saída, treinando o pensar como computador." },
      { n: 32, title: "Busca linear", goal: "Encontra um elemento percorrendo a lista, como o inimigo mais fraco ou o item mais valioso." },
      { n: 33, title: "A ideia de ordenar", goal: "Entende por que e como trocar elementos de lugar para colocá-los em ordem." },
      { n: 34, title: "Placar ordenado", goal: "Aplica uma ordenação simples para montar o ranking de pontuações do jogo." },
      { n: 35, title: "Máquina de estados", goal: "Representa os estados de um inimigo (patrulha, perseguir, fugir) de forma clara e organizada." },
      { n: 36, title: "IA que decide", goal: "Faz o inimigo escolher a ação conforme a distância do jogador e a própria vida." },
      { n: 37, title: "IA que persegue e foge", goal: "Movimenta o inimigo em direção ao jogador ou fugindo dele, conforme o estado." },
      { n: 38, title: "Eficiência e clareza", goal: "Compara soluções diferentes, evita trabalho desnecessário e mede o custo com contadores." },
      { n: 39, title: "Depuração avançada", goal: "Isola e corrige bugs complexos de lógica de estado e de ordenação." },
      { n: 40, title: "Projeto final: o desafio inteligente", goal: "Entrega um jogo completo com IA de inimigo, placar ordenado e dados em objetos, e abre a ponte para o Ano 5. Conquista a insígnia Forjador de Algoritmos e o título Engenheiro de Jogos Júnior." },
    ],
  },
];

const TOOLS: Tool[] = [
  {
    name: "MakeCode Arcade · modo JavaScript",
    type: "Gratuito",
    role: "Continuação do Ano 3. Agora foco em estruturar dados em objetos, manipular coleções com métodos avançados e implementar algoritmos.",
    icon: Code2,
  },
  {
    name: "Editor de JavaScript gratuito",
    type: "Gratuito",
    role: "Pra exercícios de algoritmos puros fora do contexto de jogo. Treina o raciocínio que será reaplicado no Unity (Ano 5).",
    icon: FileCode,
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Meu filho não fez os Anos 1-3. Pode entrar no Ano 4?",
    a: "Só com avaliação. O Ano 4 assume autonomia escrevendo JavaScript: variáveis, if/else, for/while, funções e arrays. Sem essa base, recomendamos começar no nivelamento certo.",
  },
  {
    q: "É o ano mais difícil até aqui?",
    a: "É o mais conceitual. A criança passa de 'escrever instruções' pra 'estruturar dados e raciocinar com algoritmos'. Objetos, coleções avançadas, IA simples. É o degrau que prepara o salto pro Unity no Ano 5.",
  },
  {
    q: "O que é IA simples de jogo?",
    a: "Programar inimigos que tomam decisões: patrulham, perseguem o jogador, fogem quando estão fracos. Tudo com máquina de estados — uma técnica clássica de jogo que prepara a criança pra ferramentas profissionais.",
  },
  {
    q: "Quanto tempo dura?",
    a: "1 ano letivo: 40 aulas, 80 horas, 4 módulos. Cada módulo termina com mini-projeto e insígnia da Trilha Forja dos Algoritmos.",
  },
  {
    q: "Como é a frequência?",
    a: "2 horas por semana. Família escolhe: 1 aula de 2h ou 2 aulas de 1h. Conteúdo é o mesmo, dividido em Parte A + Parte B.",
  },
  {
    q: "Como acompanho o progresso?",
    a: "4 insígnias (Guardião → Mestre → Arquiteto → Forjador). No fim do ano, a criança recebe o título Engenheiro de Jogos Júnior — passaporte pro Ano 5 (Unity + C#).",
  },
  {
    q: "E depois do Ano 4?",
    a: "Ano 5 (12-13 anos): saída do JavaScript pra Unity + C#. Tudo o que aprendeu (objetos, coleções, máquina de estados) é reaproveitado num motor de jogo profissional.",
  },
  {
    q: "Qual o investimento?",
    a: "Te passamos valor e formas de pagamento na aula experimental. Sem compromisso.",
  },
];

function Create1112Page() {
  return (
    <>
      <JsonLd
        data={coursePageSchemas({
          path: "/cursos/create/11-12-anos",
          programName: "CREATE",
          programPath: "/cursos/create",
          courseName: "CREATE Ano 4 — Forja dos Algoritmos (11 a 12 anos)",
          courseDescription:
            "Quarto ano do CREATE da Santos Tech. JavaScript intermediário aplicado: objetos, coleções avançadas, funções de ordem superior e IA de jogo. 40 aulas com projetos de complexidade crescente.",
          ageMin: 11,
          ageMax: 12,
          faq: FAQ,
        })}
      />
      <CourseHero
        theme={THEME}
        breadcrumb={{ href: "/cursos/create", label: "Programa CREATE" }}
        eyebrow="CREATE Ano 4 · 11 a 12 anos"
        title={
          <>
            Forja dos <br />
            <span style={{ color: THEME.soft }}>Algoritmos</span>
          </>
        }
        subtitle={
          <>
            <p>
              Sai de "escrever código" e entra em "<strong>escrever código bem
              organizado</strong>". Objetos, coleções avançadas, funções
              reutilizáveis e algoritmos.
            </p>
            <p>
              Termina o ano com uma <strong>IA de inimigo</strong> num jogo
              completo — e o título de <strong>Engenheiro de Jogos Júnior</strong>.
            </p>
          </>
        }
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental grátis" }}
        secondaryCta={{ href: "#curriculo", label: "Ver currículo completo" }}
        imageName="students-1"
        imageAlt="Pré-adolescente de 11 anos programando algoritmos em JavaScript"
        blobId="create1112Blob"
        decor="code"
        metrics={[
          { value: "40", label: "Aulas" },
          { value: "80h", label: "Carga horária" },
          { value: "40", label: "Semanas" },
          { value: "11–12", label: "Faixa etária" },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: THEME.primary }}>
              O salto do ano
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              De programador a{" "}
              <span style={{ color: THEME.primary }}>engenheiro</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              O Ano 3 ensinou a sintaxe e a lógica básica. O Ano 4 sobe um
              degrau: agora o foco é <strong>organizar e estruturar</strong>.
              Modelar dados de jogo em objetos. Manipular coleções com métodos.
              Escrever funções reutilizáveis. Implementar algoritmos.
            </p>
            <p className="mt-3 text-lg text-muted-foreground">
              Esse repertório é exatamente o que prepara a entrada no{" "}
              <strong>Unity + C#</strong> no Ano 5 — onde objetos, componentes,
              listas e máquina de estados já vão ser ferramentas familiares.
            </p>
          </Reveal>
        </div>
      </section>

      <ParaQuemESection
        theme={THEME}
        title={
          <>
            Pra quem já programa e quer{" "}
            <span style={{ color: THEME.primary }}>pensar como engenheiro</span>
          </>
        }
        description={
          <>
            O <strong>CREATE Ano 4</strong> é desenhado pra criança de{" "}
            <strong>11 e 12 anos</strong> que já tem autonomia em JavaScript
            básico. Aqui ela aprende a organizar grandes projetos, pensar em
            algoritmos e dar o passo final antes do Unity.
          </>
        }
        checklistTitle="É ideal se seu filho"
        items={[
          "Concluiu o Ano 3 do CREATE",
          "Escreve código JavaScript com autonomia (variáveis, if, for, funções, arrays)",
          "Quer fazer jogos com IA de inimigo e dados estruturados",
          "Pretende seguir até o Ano 5 (Unity + C#)",
        ]}
        bg="muted"
      />

      <FormatSection theme={THEME} />

      <ProgressionTrail
        theme={THEME}
        eyebrow="Trilha Pixel · Forja dos Algoritmos"
        title={
          <>
            Quatro insígnias da{" "}
            <span style={{ color: THEME.soft }}>forja</span>
          </>
        }
        description={
          <>
            Em vez de só escrever código, o aprendiz começa a{" "}
            <strong>forjar estruturas e lógica</strong>. Cada módulo concluído
            entrega uma insígnia. No projeto final, recebe o título de{" "}
            <strong>Engenheiro de Jogos Júnior</strong> — passaporte pro Ano 5
            (Unity + C#).
          </>
        }
        badges={INSIGNIAS}
      />

      <ModuleGrid
        theme={THEME}
        id="curriculo"
        eyebrow="Currículo"
        title="Os 4 módulos do ano"
        description="De dados organizados a IA de jogo. Cada módulo sobe um degrau de complexidade — e prepara o salto pro Unity."
        modules={MODULES}
        badgeLabel="Conquista"
      />

      <LessonAccordion theme={THEME} modules={MODULES} badgeWord="Insígnia" />

      <ToolGrid
        theme={THEME}
        title="Duas ferramentas, foco em raciocínio"
        description="MakeCode Arcade pro contexto de jogo, e um editor de JavaScript externo pros exercícios de algoritmo puro. Ambos gratuitos."
        tools={TOOLS}
      />

      <MethodologySection theme={THEME} />

      <FaqSection theme={THEME} items={FAQ} />

      <CourseCtaFinal
        theme={THEME}
        title="Pronto pra ver o CREATE Ano 4 ao vivo?"
        description="Aula experimental gratuita. Seu filho mexe num jogo com IA de inimigo de verdade — e descobre o que separa um programador de um engenheiro."
        primaryCta={{ href: WHATSAPP, label: "Agendar aula experimental" }}
        secondaryCta={{ href: "/cursos/create", label: "Voltar ao CREATE" }}
      />
    </>
  );
}
