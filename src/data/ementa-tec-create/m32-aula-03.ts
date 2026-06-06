import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Guardando informações: variáveis",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a criar variáveis com let e const para guardar textos, números e valores verdadeiro/falso, exibindo-os no console com nomes claros.`,
  descricao: `Toda página interativa precisa lembrar de informações: o nome do jogador, a pontuação atual, se o som está ligado ou desligado. Em JavaScript, guardamos essas informações em variáveis. Uma variável funciona como uma caixinha com uma etiqueta: a etiqueta é o nome (por exemplo, pontuacao) e dentro da caixinha fica o valor (por exemplo, o número 10). Quando precisamos do valor, basta chamar pelo nome da caixinha.

Nesta aula os alunos vão conhecer duas palavras especiais para criar variáveis: let e const. Usamos let quando o valor pode mudar ao longo do tempo (a pontuação que sobe, a vida que cai). Usamos const quando o valor não deve mudar nunca (o nome da escola, o número máximo de jogadores). Escolher entre let e const já é um primeiro passo para pensar como programador, pois nos obriga a perguntar: esse valor vai mudar ou não?

Os alunos também vão perceber que existem tipos diferentes de valores. Texto (chamado de string) sempre fica entre aspas, como "Maria". Número (number) fica sem aspas, como 42. E há também o verdadeiro ou falso (boolean), que só pode ser true ou false. Entender o tipo de cada valor evita muitos erros e ajuda o aluno a planejar melhor o código.

Por fim, esta aula reforça a importância de dar nomes claros às variáveis. Um nome como x não diz nada; um nome como pontuacaoDoJogador diz tudo. Bons nomes deixam o código fácil de ler, tanto para o colega quanto para o aluno que volta ao projeto dias depois. Ao final, cada aluno terá criado várias variáveis, mostrado seus valores no console e feito pequenas contas com números.`,
  materiais: [
    `Computadores com navegador moderno (Chrome ou Edge) e acesso ao console (tecla F12)`,
    `Editor de código instalado (VS Code) com um arquivo HTML básico já preparado`,
    `Projetor ou tela grande para o professor demonstrar o console ao vivo`,
    `Arquivo de exemplo "variaveis-modelo.html" com a estrutura pronta e a tag script vazia`,
    `Folha impressa com a "tabela de tipos": texto (string), número (number), verdadeiro/falso (boolean)`,
    `Quadro branco ou flip chart para desenhar a metáfora das caixinhas com etiquetas`,
  ],
  conceitosChave: [
    `Variável — uma caixinha com nome que guarda um valor para usar depois no código.`,
    `let — palavra usada para criar uma variável cujo valor pode mudar ao longo do programa.`,
    `const — palavra usada para criar uma variável cujo valor não deve mudar (constante).`,
    `String (texto) — qualquer texto escrito entre aspas, como "Joao" ou "Game Over".`,
    `Number (número) — valor numérico escrito sem aspas, como 10 ou 3.5, usado em contas.`,
    `Boolean (verdadeiro/falso) — valor que só pode ser true ou false, útil para decisões.`,
    `Nome claro — identificador que descreve o conteúdo da variável, como pontuacao ou nomeDoJogador.`,
  ],
  treinamento: `## O que o professor precisa saber

Variáveis são a base de quase tudo em programação. Você não precisa ser especialista: basta entender três ideias. Primeira: uma variável guarda um valor com um nome. Segunda: usamos let para valores que mudam e const para valores fixos. Terceira: os valores têm tipos diferentes (texto, número, verdadeiro/falso). Se você dominar esses três pontos, já consegue conduzir a aula com segurança. Teste o código em casa uma vez antes da aula, abrindo o console do navegador com a tecla F12 e clicando na aba Console.

Uma observação técnica importante: em JavaScript, ponto e vírgula no fim de cada linha é uma boa prática. Para mostrar uma variável junto com um texto no console, vamos usar a vírgula dentro do console.log, assim: console.log("Pontuacao:", pontuacao). Isso é mais simples e evita erros para iniciantes.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

Aquecimento (10 min): retome a aula anterior perguntando "o que o console.log faz?". Em seguida, desenhe no quadro uma caixinha com a etiqueta "pontuacao" e o número 10 dentro. Explique que vamos aprender a criar essas caixinhas no código.

Conteúdo novo guiado (15 min): no projetor, abra o arquivo de exemplo e, dentro da tag script, digite linha a linha enquanto explica:

let nomeDoJogador = "Maria";
const escola = "Santos Tech";
let pontuacao = 10;
let jogoLigado = true;
console.log("Jogador:", nomeDoJogador);
console.log("Escola:", escola);
console.log("Pontuacao:", pontuacao);
console.log("Jogo ligado?", jogoLigado);

Salve, recarregue a página e mostre o resultado no console. Depois mostre que dá para mudar uma variável let:

pontuacao = pontuacao + 5;
console.log("Nova pontuacao:", pontuacao);

Explique que pontuacao agora vale 15. Tente mudar a const para provar o erro: escreva escola = "Outra"; e mostre a mensagem de erro no console. Apague essa linha em seguida.

Mão na massa (25 min): cada aluno cria, no próprio arquivo, quatro variáveis sobre o seu jogo favorito: um nome de personagem (texto), uma vida (número), um nome de fase (texto) e se o personagem está vivo (true ou false). Em seguida, mostra todas no console com console.log. Por fim, faz uma conta: tirar 20 de vida e mostrar o novo valor. Circule pela sala ajudando com aspas e nomes.

Desafio + compartilhar (10 min): proponha "crie uma variável com seu número de moedas e dobre o valor usando vezes 2". Peça a dois ou três alunos que mostrem o console na tela e leiam o que aparece.

## Como explicar de forma clara (linguagem para a idade)

Use a metáfora da caixinha o tempo todo: "a variável é uma caixa, o nome é a etiqueta, e dentro fica o valor". Para let e const, diga: "let é uma caixa que você pode reabrir e trocar o que tem dentro; const é uma caixa lacrada que não se mexe mais". Para os tipos, use exemplos do mundo dos games: texto é o nome do personagem, número é a pontuação, e verdadeiro/falso é como um botão de liga e desliga. Lembre sempre: texto fica entre aspas, número fica sem aspas.

## Erros comuns e como ajudar

O erro mais comum é esquecer as aspas em texto, fazendo nomeDoJogador = Maria sem aspas, o que gera erro. Mostre que texto precisa de aspas. Outro erro é tentar mudar uma const, que aparece como "Assignment to constant variable"; explique que const é lacrada. Também aparece confusão entre o sinal de igual: um igual (=) guarda um valor; não confunda com comparação. Por fim, nomes com espaço ou acento quebram (use nomeDoJogador, não "nome do jogador"). Reforce nomes claros e sem espaços.`,
  exercicios: [
    {
      titulo: `Caixa ou valor?`,
      tipo: `Aquecimento oral / classificação`,
      tempo: `5 minutos`,
      guiaProfessor: `Leia em voz alta vários itens e peça aos alunos para dizerem se aquilo seria o NOME da variável ou o VALOR guardado. Reforce a metáfora da caixinha com etiqueta.`,
      atividade: `Para cada item, diga se é nome da variável ou valor: (a) pontuacao; (b) "Maria"; (c) 100; (d) nomeDoJogador; (e) true.`,
      gabarito: `(a) nome da variável; (b) valor (texto/string); (c) valor (número/number); (d) nome da variável; (e) valor (verdadeiro/falso/boolean).`,
    },
    {
      titulo: `Criando minhas primeiras variáveis`,
      tipo: `Prática guiada no editor`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que abram a tag script e digitem exatamente o código. Confira aspas no texto e ponto e vírgula no fim. Mande recarregar a página e abrir o console (F12).`,
      atividade: `Crie três variáveis: o nome do seu personagem (texto), a vida dele (número) e mostre as duas no console.`,
      gabarito: `let nomePersonagem = "Sonic";
let vida = 100;
console.log("Personagem:", nomePersonagem);
console.log("Vida:", vida);`,
    },
    {
      titulo: `let muda, const não`,
      tipo: `Experimento e observação`,
      tempo: `7 minutos`,
      guiaProfessor: `O objetivo é o aluno SENTIR a diferença. Primeiro mudam uma let com sucesso; depois tentam mudar uma const e leem a mensagem de erro no console. Depois apagam a linha do erro.`,
      atividade: `Crie uma let pontuacao com valor 10 e some 5 a ela, mostrando o resultado. Depois crie uma const maxJogadores com valor 4 e tente trocar para 8 para ver o erro.`,
      gabarito: `let pontuacao = 10;
pontuacao = pontuacao + 5;
console.log("Pontuacao:", pontuacao);

const maxJogadores = 4;
maxJogadores = 8;
console.log("Max:", maxJogadores);

Resultado: a pontuação vira 15. A linha maxJogadores = 8 gera o erro "Assignment to constant variable", porque const não pode mudar. Apague essa linha depois de observar.`,
    },
    {
      titulo: `Os três tipos de valor`,
      tipo: `Prática aplicada`,
      tempo: `8 minutos`,
      guiaProfessor: `Cobre que cada variável use um tipo diferente: texto entre aspas, número sem aspas e boolean com true ou false. Verifique nomes claros e sem acento ou espaço.`,
      atividade: `Crie três variáveis sobre uma fase do seu jogo: o nome da fase (texto), quantos inimigos tem (número) e se a fase está liberada (verdadeiro ou falso). Mostre todas no console.`,
      gabarito: `let nomeFase = "Floresta Sombria";
let inimigos = 7;
let faseLiberada = true;
console.log("Fase:", nomeFase);
console.log("Inimigos:", inimigos);
console.log("Liberada?", faseLiberada);`,
    },
    {
      titulo: `Calculadora de moedas`,
      tipo: `Desafio com operações`,
      tempo: `7 minutos`,
      guiaProfessor: `Desafio final e crescente: o aluno guarda números e faz contas, guardando o resultado em uma nova variável. Incentive nomes claros como totalMoedas. Quem terminar pode somar um bônus.`,
      atividade: `Você tem 30 moedas de prata e 12 moedas de ouro. Guarde cada quantidade em uma variável, calcule o total em uma terceira variável e mostre o total no console. Depois, dobre o total e mostre o novo valor.`,
      gabarito: `let moedasPrata = 30;
let moedasOuro = 12;
let totalMoedas = moedasPrata + moedasOuro;
console.log("Total de moedas:", totalMoedas);

let totalDobrado = totalMoedas * 2;
console.log("Total dobrado:", totalDobrado);

Resultado: o total é 42 e o total dobrado é 84.`,
    },
  ],
};
