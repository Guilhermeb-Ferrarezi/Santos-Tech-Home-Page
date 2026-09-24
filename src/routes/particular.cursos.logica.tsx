import { createFileRoute } from "@tanstack/react-router"
import { ParticularCursosPage } from "@/components/particular-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/particular/cursos/logica")({
  component: LogicaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Lógica de Programação Particular em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a pensar como programador do zero: algoritmos, estruturas de controle, funções e projetos práticos em JavaScript. Aulas individuais e horário flexível.",
      path: "/particular/cursos/logica",
    }),
})

const COURSE_DATA = {
  nome: "Lógica de Programação",
  categoria: "Programação",
  tema: "programacao" as const,
  logo: "javascript",
  variante: "logica",
  tagline: "Aprenda a pensar como programador antes de escrever uma linha de código",
  targetAudience: [
    "Você quer entrar na área de tecnologia mas nunca programou",
    "Você tentou aprender uma linguagem e travou nos conceitos básicos",
    "Você é profissional de outra área e quer migrar para desenvolvimento",
    "Você quer entender como sistemas e aplicativos funcionam por dentro",
    "Você precisa de base sólida antes de escolher uma linguagem específica",
  ],
  tiers: [
    {
      levelName: "Lógica de Programação",
      ctaLabel: "curso de Lógica de Programação",
      totalHours: "48h",
      outcome:
        "Sair do zero absoluto — sem nunca ter programado — até pensar e codar como programador: ler e escrever algoritmos em pseudocódigo e Portugol, dominar condicionais, loops e funções, migrar para JavaScript real e evoluir por arrays, strings, recursão, objetos e algoritmos de ordenação, fechando com um sistema de cadastro completo com CRUD funcional",
      modules: [
        {
          title: "Pensamento Computacional e Algoritmos",
          topics: [
            "O que é um algoritmo e por que ele importa",
            "Decomposição de problemas do mundo real",
            "Representação em linguagem natural e pseudocódigo",
            "Fluxogramas: símbolos, decisões e laços",
            "Instalação e uso do Portugol IDE e VisuAlg",
          ],
        },
        {
          title: "Variáveis, Tipos e Operadores",
          topics: [
            "Memória, variáveis e constantes",
            "Tipos primitivos: inteiro, real, caractere, lógico",
            "Operadores aritméticos, relacionais e lógicos",
            "Entrada e saída de dados (leitura de teclado, exibição)",
            "Conversão de tipos e precedência de operadores",
          ],
        },
        {
          title: "Estruturas de Controle de Fluxo",
          topics: [
            "Estrutura condicional simples, composta e aninhada (if/else)",
            "Switch/case para múltiplas escolhas",
            "Loop while e do-while: quando usar e armadilhas comuns",
            "Loop for: contador, acumulador e controle de iteração",
          ],
        },
        {
          title: "Funções e a Transição para JavaScript",
          topics: [
            "O que são funções e por que modularizar",
            "Parâmetros, argumentos e retorno de valores",
            "Escopo de variáveis: local vs global",
            "Funções sem retorno (procedimentos)",
            "Projeto: jogo de adivinhação de número com placar, a primeira aplicação em JavaScript real",
          ],
        },
        {
          title: "Arrays, Strings e Estruturas de Dados Lineares",
          topics: [
            "Arrays: declaração, inicialização e percurso com for, forEach e while",
            "Busca linear e busca binária; inserção, remoção e atualização de elementos",
            "Arrays multidimensionais e matrizes",
            "Strings: métodos essenciais (length, slice, split, join, replace) e validação com expressões regulares básicas",
            "Projeto: lista de tarefas (to-do list) com arrays e manipulação de strings",
          ],
        },
        {
          title: "Recursão, Objetos e JSON",
          topics: [
            "Recursão: pilha de chamadas (call stack), caso base e caso recursivo",
            "Fatorial, Fibonacci e comparação entre solução iterativa e recursiva",
            "Objetos em JavaScript: propriedades, métodos e acesso por ponto e colchete",
            "Arrays de objetos (filtrar, mapear, ordenar) e JSON: estrutura, serialização e parsing",
            "Projeto: sistema de cadastro de alunos com CRUD básico",
          ],
        },
        {
          title: "Algoritmos de Ordenação e Complexidade",
          topics: [
            "Bubble Sort e Selection Sort na prática",
            "Merge Sort: dividir e conquistar",
            "Notação Big-O: O(n), O(n²), O(log n) simplificado",
            "Comparação de performance com arrays grandes",
            "Uso de sort() nativo vs implementação manual",
          ],
        },
      ],
      tools: [
        "Portugol IDE",
        "VisuAlg",
        "JavaScript (browser console)",
        "JavaScript (Node.js)",
        "VS Code",
        "Git (introdução)",
      ],
    },
  ],
  faqItems: [
    {
      q: "Nunca programei antes — consigo acompanhar esse curso?",
      a: "Sim, é exatamente para isso que ele existe. O curso começa em pseudocódigo e fluxogramas, sem nenhuma sintaxe de linguagem, e só depois avança para JavaScript — pensado para quem quer entrar em tecnologia sem nunca ter programado.",
    },
    {
      q: "Já tentei aprender uma linguagem e travei nos conceitos básicos — esse curso é diferente?",
      a: "Sim. A maioria trava porque tenta aprender sintaxe de uma linguagem antes de entender a lógica por trás dela. Este curso separa as duas coisas: primeiro você aprende a pensar como programador, depois aplica isso em JavaScript com uma base muito mais sólida.",
    },
  ],
}

function LogicaPage() {
  return <ParticularCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
