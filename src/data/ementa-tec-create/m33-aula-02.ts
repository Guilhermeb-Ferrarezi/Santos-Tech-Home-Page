import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Repetições Inteligentes: Loops na Prática",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Usar os loops for e while em JavaScript para repetir ações e percorrer listas, gerando na página um elemento dinâmico (lista ou contador) criado pelo próprio código.`,
  descricao: `Na aula anterior o aluno aprendeu a tomar decisões com if/else: o código escolhe um caminho conforme uma condição. Agora chega a hora de ensinar o computador a repetir tarefas sem a gente escrever a mesma linha dezenas de vezes. Essa é a ideia central do loop (laço de repetição): dizer "faça isto várias vezes" em poucas linhas. É uma das ferramentas mais poderosas da programação, porque o computador é rápido e nunca se cansa de repetir.

O aluno vai conhecer dois tipos de laço. O primeiro é o for, ideal quando já sabemos quantas vezes queremos repetir (por exemplo, "conte de 1 até 10"). Ele junta numa linha só três coisas: onde a contagem começa, até quando continua e quanto avança a cada passo. O segundo é o while, que repete enquanto uma condição for verdadeira (por exemplo, "continue enquanto a energia for maior que zero"). É aqui que os loops se encontram com as condições da aula passada: o while nada mais é do que um if que se repete.

Para que o resultado apareça na tela, e não só no console, o aluno vai aprender a montar texto dentro do loop e jogar esse texto na página. A cada volta do laço, o código acrescenta um pedaço novo (um item de lista, um número do contador) a uma variável de texto. No fim, esse texto vira o conteúdo de um elemento da página. Assim o aluno vê, de forma concreta, o loop "desenhando" coisas: uma lista de 1 a 10, uma tabuada, uma contagem regressiva.

Esta aula é prática e visual. O objetivo não é decorar a sintaxe, e sim sentir o poder de repetir: com três ou quatro linhas, o aluno cria na página algo que, escrito à mão, levaria muito mais espaço. Isso prepara o terreno para as próximas aulas, em que listas de dados virão de formulários e precisarão ser percorridas e exibidas.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code) e um navegador (Chrome ou Edge), um por aluno`,
    `Projetor ou TV para o professor mostrar o código e o resultado no navegador`,
    `Arquivo de exemplo index.html com um botão e uma área vazia (uma div) pronta para receber o resultado do loop`,
    `Arquivo de exemplo script.js já ligado ao HTML, com um comentário marcando onde o aluno deve escrever`,
    `Quadro branco para desenhar a "volta do loop" passo a passo (o valor do contador a cada repetição)`,
    `Folha impressa com a estrutura do for e do while para consulta rápida na bancada`,
  ],
  conceitosChave: [
    `Loop (laço de repetição) — bloco de código que se repete várias vezes, em vez de escrevermos a mesma linha muitas vezes.`,
    `for — laço usado quando já sabemos quantas vezes repetir; reúne início, condição e passo numa linha só.`,
    `while — laço que repete enquanto uma condição for verdadeira; é como um if que volta a se executar.`,
    `Contador — variável (geralmente chamada i) que guarda em que volta o loop está e muda a cada repetição.`,
    `Incremento — aumentar o contador, normalmente com i++, que soma 1 a cada volta do laço.`,
    `Condição de parada — teste que decide quando o loop deve parar; sem ela bem feita o loop nunca termina.`,
    `innerHTML — propriedade que coloca texto ou HTML dentro de um elemento da página, fazendo o resultado aparecer na tela.`,
  ],
  treinamento: `## O que o professor precisa saber

Um loop é só uma forma de repetir. Em vez de escrever dez vezes a mesma linha, dizemos ao computador "repita isto dez vezes". O for é a estrela da aula: na mesma linha ele guarda onde começar, até quando ir e quanto avançar. A estrutura é "for (let i = 1; i menor ou igual a 10; i++)". Leia em voz alta: "comece i no 1; enquanto i for menor ou igual a 10; e a cada volta some 1 no i". A variável i é o contador; i++ é só "i = i + 1". O while é o primo do if: "while (condição) repete o bloco enquanto a condição for verdadeira". Você não precisa dominar JavaScript: basta seguir os passos e ler o código junto com a turma. Antes da aula, abra o arquivo de exemplo no navegador e clique no botão uma vez para ver tudo funcionando.

## Passo a passo da aula

Aquecimento (10 min): retome a aula 1. Pergunte: "e se eu quisesse escrever os números de 1 a 100 na tela? Vamos digitar 100 linhas?". A turma diz que não. Apresente o loop como a solução. No quadro, escreva o for e circule as três partes (início, condição, passo).

Conteúdo novo guiado (15 min): no projetor, abra o script.js. Mostre o for básico e leia linha a linha:

for (let i = 1; i <= 5; i = i + 1) {
  console.log("Volta numero " + i);
}

Rode e mostre no console: aparecem 5 mensagens. Agora leve para a página. Mostre o while fazendo o mesmo:

let n = 1;
while (n <= 5) {
  console.log("Numero " + n);
  n = n + 1;
}

Avise: "o n = n + 1 é obrigatório; sem ele o loop nunca para". Por fim, monte texto e jogue na página:

let lista = "<ul>";
for (let i = 1; i <= 10; i = i + 1) {
  lista = lista + "<li>Item " + i + "</li>";
}
lista = lista + "</ul>";
document.getElementById("resultado").innerHTML = lista;

Clique no botão e mostre a lista de 10 itens nascendo na tela.

Mão na massa (25 min): cada aluno digita o último exemplo no seu script.js, dentro da função do botão, e roda no navegador. Depois muda o limite de 10 para 20 e troca "Item" por outro texto. Circule pela sala. Quem terminar, faz uma contagem regressiva com for de 10 até 1. Lembre de salvar (Ctrl+S) e recarregar a página (F5) a cada teste.

Desafio e compartilhar (10 min): proponha exibir a tabuada de um número (ex.: 7 vezes 1 até 7 vezes 10) usando o loop e innerHTML. Cada aluno mostra a sua lista ou tabuada no projetor em 20 segundos.

## Como explicar de forma clara

Compare o loop a dar voltas numa pista: o contador i é o número da volta. "Comece na volta 1, dê voltas enquanto não passar de 10, e some 1 a cada volta." O i++ é "deu mais uma volta". Para o while, use a bateria do celular: "enquanto tiver energia, continue; quando acabar, pare". Reforce que montar texto é como empilhar blocos: a cada volta a gente cola mais um pedaço na frase. O innerHTML é a "porta" pela qual o texto entra na página e vira algo visível.

## Erros comuns e como ajudar

Erro 1: esquecer de aumentar o contador (sem i++ ou n = n + 1) e travar o navegador num loop infinito; peça para fechar a aba e conferir o passo. Erro 2: confundir os sinais menor (<) e menor ou igual (<=) e a lista vir com um item a mais ou a menos; conte junto. Erro 3: trocar vírgula por ponto e vírgula no for, ou ao contrário; mostre que dentro do for usamos ponto e vírgula. Erro 4: escrever o nome do elemento errado no getElementById e nada aparecer; confira se o id do HTML é igual ao do código. Erro 5: esquecer de recarregar a página (F5) e achar que não funcionou; lembre de salvar e atualizar.`,
  exercicios: [
    {
      titulo: `Contando no console`,
      tipo: `prática no computador`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno abra o console do navegador (tecla F12, aba Console) e veja as mensagens. Confira se o loop para no número certo.`,
      atividade: `No script.js, escreva um loop for que mostre no console os números de 1 a 8, um por linha. Use console.log dentro do loop. Salve e recarregue a página para ver o resultado no console.`,
      gabarito: `for (let i = 1; i <= 8; i = i + 1) {
  console.log(i);
}
O console deve mostrar os números 1, 2, 3, 4, 5, 6, 7 e 8, cada um em uma linha. Se aparecer até o 7, o aluno usou menor (<) em vez de menor ou igual (<=).`,
    },
    {
      titulo: `Lista que aparece na página`,
      tipo: `prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Confira se o id usado no getElementById é o mesmo da div no HTML (resultado). Mostre a diferença entre ver no console e ver na página.`,
      atividade: `Crie um loop for que monte uma lista de 1 a 10 e a coloque dentro da div de id "resultado" usando innerHTML. Cada item deve dizer "Item 1", "Item 2" e assim por diante.`,
      gabarito: `let lista = "<ul>";
for (let i = 1; i <= 10; i = i + 1) {
  lista = lista + "<li>Item " + i + "</li>";
}
lista = lista + "</ul>";
document.getElementById("resultado").innerHTML = lista;
Na página deve aparecer uma lista com 10 itens, de "Item 1" a "Item 10". Se nada aparecer, conferir o id "resultado" no HTML.`,
    },
    {
      titulo: `Contagem regressiva com while`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Reforce que o while precisa diminuir o contador, senão vira loop infinito. Se travar, peça para fechar a aba e adicionar a linha que diminui o número.`,
      atividade: `Use um loop while para criar uma contagem regressiva de 10 até 1 e mostrar o resultado na div "resultado", cada número seguido de um traço (ex.: 10 - 9 - 8 ...).`,
      gabarito: `let n = 10;
let texto = "";
while (n >= 1) {
  texto = texto + n + " - ";
  n = n - 1;
}
document.getElementById("resultado").innerHTML = texto;
Na página deve aparecer: 10 - 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 -. O n = n - 1 é essencial para o loop terminar.`,
    },
    {
      titulo: `Tabuada em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas: um digita, o outro confere os resultados da tabuada de cabeça. Depois trocam. Reforce a montagem do texto com sinal de mais (+).`,
      atividade: `Em dupla, escolham um número e mostrem a tabuada dele de 1 a 10 na div "resultado", uma linha por multiplicação (ex.: "7 x 1 = 7", "7 x 2 = 14"...). Calculem o resultado dentro do loop.`,
      gabarito: `let numero = 7;
let texto = "<ul>";
for (let i = 1; i <= 10; i = i + 1) {
  texto = texto + "<li>" + numero + " x " + i + " = " + (numero * i) + "</li>";
}
texto = texto + "</ul>";
document.getElementById("resultado").innerHTML = texto;
Deve aparecer a tabuada completa do número escolhido, de "7 x 1 = 7" até "7 x 10 = 70". O cálculo numero * i deve dar o valor certo em cada linha.`,
    },
    {
      titulo: `Loop com decisão: pares e ímpares`,
      tipo: `desafio integrador`,
      tempo: `10 min`,
      guiaProfessor: `Esta atividade junta o loop (aula de hoje) com o if/else (aula anterior). Explique o resto da divisão (operador %) com um exemplo simples antes de soltar a turma.`,
      atividade: `Crie um loop de 1 a 20 e, dentro dele, use if/else para marcar cada número como "par" ou "impar". Mostre tudo na div "resultado", uma linha por número (ex.: "4 e par"). Dica: um número é par quando o resto da divisão por 2 é igual a 0.`,
      gabarito: `let texto = "<ul>";
for (let i = 1; i <= 20; i = i + 1) {
  if (i % 2 === 0) {
    texto = texto + "<li>" + i + " e par</li>";
  } else {
    texto = texto + "<li>" + i + " e impar</li>";
  }
}
texto = texto + "</ul>";
document.getElementById("resultado").innerHTML = texto;
A lista deve marcar corretamente cada número de 1 a 20: 1 impar, 2 par, 3 impar, 4 par, e assim por diante. O teste i % 2 === 0 identifica os pares.`,
    },
  ],
};
