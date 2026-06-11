import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/logica")({
  component: LogicaPage,
  head: () =>
    pageMeta({
      title:
        "Curso de Lógica de Programação para Adultos em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda a pensar como programador do zero: algoritmos, estruturas de controle, funções e projetos práticos em JavaScript. Aulas individuais e horário flexível.",
      path: "/adultos/cursos/logica",
    }),
})

const COURSE_DATA = {
  nome: "Lógica de Programação",
  categoria: "Programação",
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
      label: "1 mês",
      levelName: "Essencial",
      totalHours: "20h",
      outcome:
        "Capaz de ler e escrever algoritmos em pseudocódigo e Portugol, resolver problemas com condicionais e loops, e construir um mini-jogo em JavaScript no navegador",
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
            "Estrutura condicional simples (if/else)",
            "Estrutura condicional composta e aninhada",
            "Switch/case para múltiplas escolhas",
            "Loop while: quando usar e armadilhas comuns",
            "Loop for: contador, acumulador e controle de iteração",
            "Do-while e laços com condição de saída",
          ],
        },
        {
          title: "Funções e Modularização",
          topics: [
            "O que são funções e por que modularizar",
            "Parâmetros, argumentos e retorno de valores",
            "Escopo de variáveis: local vs global",
            "Funções sem retorno (procedimentos)",
            "Projeto: Jogo de adivinhação de número com placar",
          ],
        },
      ],
      tools: ["Portugol IDE", "VisuAlg", "JavaScript (browser console)"],
    },
    {
      label: "2 meses",
      levelName: "Intermediário",
      totalHours: "40h",
      outcome:
        "Domina estruturas de dados lineares, recursão e boas práticas de código limpo; entrega um sistema de cadastro funcional em JavaScript com manipulação de arrays e objetos",
      modules: [
        {
          title: "Arrays e Vetores",
          topics: [
            "Declaração, inicialização e acesso por índice",
            "Percorrer arrays com for, forEach e while",
            "Busca linear e busca binária em vetores",
            "Inserção, remoção e atualização de elementos",
            "Arrays multidimensionais e matrizes",
            "Projeto parcial: lista de tarefas (to-do list)",
          ],
        },
        {
          title: "Strings e Manipulação de Texto",
          topics: [
            "Strings como sequência de caracteres",
            "Métodos essenciais: length, slice, split, join, replace",
            "Validação de entradas com expressões regulares básicas",
            "Formatação de saída e templates de texto",
            "Comparação de strings e ordenação alfabética",
          ],
        },
        {
          title: "Recursão e Pilha de Chamadas",
          topics: [
            "Como funciona a pilha de chamadas (call stack)",
            "Caso base e caso recursivo",
            "Fatorial, Fibonacci e sequências recursivas",
            "Comparação entre solução iterativa e recursiva",
            "Quando recursão é vantajosa e quando evitar",
          ],
        },
        {
          title: "Objetos e Estruturas Compostas",
          topics: [
            "O que é um objeto e como criar em JavaScript",
            "Propriedades, métodos e acesso por ponto e colchete",
            "Arrays de objetos: filtrar, mapear e ordenar",
            "JSON: estrutura, serialização e parsing",
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
      tools: ["JavaScript (Node.js)", "VS Code", "VisuAlg", "Git (introdução)"],
    },
  ],
}

function LogicaPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
