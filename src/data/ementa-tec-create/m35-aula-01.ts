import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Primeiros Comandos: Variáveis e Dados",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Rodar o primeiro programa em Python usando print e input, criar variáveis e reconhecer a diferença entre os tipos texto, número inteiro e número decimal.`,
  descricao: `Esta é a primeira aula do projeto de Python do ano. Depois de criar um jogo no Roblox e de construir um site, o aluno agora descobre uma linguagem nova, limpa e muito usada no mundo real: o Python. A boa notícia é que ele já sabe pensar como programador, então o foco aqui é traduzir esse raciocínio para a forma de escrever do Python, que é direta e parecida com o português.

O coração da aula são dois comandos e uma ideia. Os comandos são o print, que mostra informações na tela, e o input, que pergunta algo para a pessoa e guarda a resposta. A ideia é a variável: uma caixinha com nome onde o programa guarda um dado para usar depois. Quando o aluno entende que pode guardar o nome de alguém numa caixinha chamada nome e depois mostrar esse nome na tela, ele já consegue criar programas que conversam com o usuário.

A segunda metade da aula apresenta os tipos de dados. Nem todo dado é igual: um nome é texto (em Python, o tipo str), uma idade é um número inteiro (int) e a altura de uma pessoa é um número decimal (float). Saber a diferença é importante porque o computador trata cada tipo de um jeito. Por exemplo, somar dois números dá uma conta, mas juntar dois textos só gruda um no outro. O aluno experimenta isso na prática e percebe que tudo o que vem do input chega como texto, precisando ser convertido quando for usado como número.

Ao final, ninguém precisa ter um programa enorme. O objetivo é concreto: cada aluno consegue rodar um pequeno programa que pergunta uma ou duas informações, guarda em variáveis e mostra uma mensagem personalizada na tela, usando pelo menos um texto e um número. Essa base de variáveis e tipos será usada em todas as aulas seguintes do mês até o programa próprio do entregável final.`,
  materiais: [
    `Computadores com Python instalado (versão 3) e o editor VS Code aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar o código em tela grande`,
    `Arquivo de exemplo aula01_exemplo.py com um programa simples já pronto para mostrar`,
    `Editor de código VS Code com a extensão de Python instalada e o terminal visível`,
    `Folha impressa com a tabela dos três tipos (texto, inteiro, decimal) e exemplos de cada um`,
    `Quadro branco ou flip chart para desenhar a ideia de variável como uma caixinha com etiqueta`,
  ],
  conceitosChave: [
    `Python — linguagem de programação simples e muito usada, com comandos parecidos com o português.`,
    `print — comando que mostra um texto ou um valor na tela para a pessoa ver.`,
    `input — comando que faz uma pergunta e guarda o que a pessoa digitar.`,
    `Variável — caixinha com um nome onde o programa guarda um dado para usar depois.`,
    `Texto (str) — tipo de dado feito de letras e símbolos, sempre escrito entre aspas.`,
    `Número inteiro (int) — tipo de dado para números sem vírgula, como idade ou quantidade.`,
    `Número decimal (float) — tipo de dado para números com casas decimais, como altura ou preço, usando ponto no lugar da vírgula.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Python para dar esta aula. Precisa apenas saber abrir um arquivo, digitar poucas linhas e clicar em rodar. No VS Code, crie um arquivo novo com o nome aula01.py (a terminação .py é o que diz ao computador que é Python). Para executar, clique no botão de triângulo (Run) no canto superior direito, ou aperte a tecla F5. O resultado aparece numa janela embaixo chamada Terminal. Três comandos resolvem a aula inteira: print mostra coisas na tela; input pergunta algo; e o sinal de igual (=) guarda um valor numa variável. Lembre que texto sempre vai entre aspas e número não. Tudo que vem do input chega como texto, então para usar como número usamos int() para inteiro e float() para decimal. Antes da aula, abra o arquivo de exemplo e rode uma vez para pegar segurança com o botão Run.

## Passo a passo da aula

Aquecimento (10 min): pergunte onde eles já viram programas que perguntam o nome e respondem com uma mensagem (jogos, sites, caixas eletrônicos). Explique que hoje vamos fazer isso. Desenhe no quadro uma caixinha com a etiqueta nome e escreva dentro o valor "Ana". Essa é a imagem de variável que vamos usar a aula toda.

Conteúdo novo guiado (15 min): no projetor, crie o arquivo aula01.py e digite, linha a linha, explicando cada parte:

print("Olá, mundo!")
nome = input("Qual é o seu nome? ")
print("Prazer em te conhecer,", nome)
idade = int(input("Quantos anos você tem? "))
print("Ano que vem você terá", idade + 1)

Rode e mostre que o programa conversa. Explique: a primeira linha só mostra um texto; a segunda guarda na caixinha nome o que a pessoa digitar; a terceira mostra dois pedaços separados por vírgula; a quarta usa int() para transformar a resposta em número; a quinta faz uma conta de verdade.

Mão na massa (25 min): cada aluno cria o próprio arquivo e refaz o programa com os dados dele. Depois acrescenta uma variável de número decimal, por exemplo a altura, usando float(input(...)). Circule pela sala e garanta que todos rodaram pelo menos uma vez e viram a resposta no terminal.

Desafio e compartilhar (10 min): quem terminar cria um programa que pergunta o nome do jogo favorito e a nota de 0 a 10 que daria. Faça uma rodada rápida em que dois ou três alunos rodam o programa na tela grande.

## Como explicar de forma clara

Use a metáfora da caixinha o tempo todo: a variável é uma caixa, o nome dela é a etiqueta, e o valor é o que está guardado dentro. Diga que o sinal de igual não é igual da matemática, é guardar dentro da caixa. Para print, fale mostrar na tela; para input, fale perguntar e anotar. Explique aspas como o crachá do texto: se tem aspas, é texto; se não tem, o computador acha que é número ou nome de caixinha. Para a diferença entre somar números e juntar textos, mostre na tela que 2 + 3 dá 5, mas "2" + "3" dá 23 grudado, porque viraram texto.

## Erros comuns e como ajudar

O erro mais comum é esquecer as aspas no texto ou abrir e não fechar; mostre que as aspas vêm sempre em par. Outro é esquecer os parênteses do print ou do input. Há quem troque vírgula por ponto nos números decimais: em Python usamos ponto, então três e meio é 3.5. Muitos tentam somar a idade sem o int() e o programa gruda os números ou dá erro; lembre que tudo do input é texto e precisa de int() ou float() para virar número. Por fim, nomes de variável com espaço ou acento dão erro; oriente usar nomes simples e sem espaço, como nome, idade e altura.`,
  exercicios: [
    {
      titulo: `Olá, mundo na tela`,
      tipo: `prática guiada`,
      tempo: `5 min`,
      guiaProfessor: `Garanta que cada aluno criou um arquivo com a terminação .py e conseguiu clicar em Run e ver a mensagem no terminal. É o pré-requisito de tudo.`,
      atividade: `Crie um arquivo chamado ola.py, escreva um comando que mostre na tela a frase "Olá, eu estou programando em Python!" e rode o programa.`,
      gabarito: `print("Olá, eu estou programando em Python!")

Ao rodar, o terminal mostra a frase exatamente como foi escrita entre aspas.`,
    },
    {
      titulo: `Guardando o seu nome`,
      tipo: `prática individual`,
      tempo: `8 min`,
      guiaProfessor: `Verifique se o aluno usou input para perguntar e guardou a resposta numa variável, e se o print mostra os dois pedaços separados por vírgula.`,
      atividade: `Faça um programa que pergunte o nome da pessoa, guarde na variável nome e depois mostre na tela a mensagem "Olá" seguida do nome digitado.`,
      gabarito: `nome = input("Qual é o seu nome? ")
print("Olá", nome)

A vírgula no print junta o texto "Olá" com o valor guardado na variável nome, colocando um espaço entre eles.`,
    },
    {
      titulo: `Três caixinhas, três tipos`,
      tipo: `prática individual`,
      tempo: `10 min`,
      guiaProfessor: `Acompanhe se o aluno usou texto entre aspas, int() para a idade e float() para a altura. Reforce o uso do ponto no número decimal.`,
      atividade: `Crie três variáveis: uma de texto com a cidade onde você mora, uma de número inteiro com a sua idade e uma de número decimal com a sua altura em metros. Mostre as três na tela, cada uma numa linha.`,
      gabarito: `cidade = "São Paulo"
idade = 13
altura = 1.62
print("Cidade:", cidade)
print("Idade:", idade)
print("Altura:", altura)

O texto vai entre aspas, o inteiro é escrito sem vírgula e o decimal usa ponto. Cada print mostra uma linha.`,
    },
    {
      titulo: `A conta da idade`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Este exercício mostra por que precisamos converter o input. Ajude quem esquecer o int() a perceber que sem ele o programa gruda os números em vez de somar.`,
      atividade: `Faça um programa que pergunte a idade da pessoa, transforme a resposta em número e mostre quantos anos ela terá daqui a 5 anos.`,
      gabarito: `idade = int(input("Quantos anos você tem? "))
print("Daqui a 5 anos você terá", idade + 5, "anos")

O int() transforma o texto vindo do input em número inteiro, permitindo a soma idade + 5. Sem o int() o programa daria erro ou grudaria os números.`,
    },
    {
      titulo: `Ficha do personagem`,
      tipo: `desafio em dupla`,
      tempo: `15 min`,
      guiaProfessor: `Forme duplas. Oriente que combinem perguntas diferentes e usem pelo menos um texto e um número. Deixe cada dupla rodar e testar o programa antes de apresentar.`,
      atividade: `Em dupla, criem um programa que monte a ficha de um personagem de jogo: pergunte o nome do personagem, o tipo (texto) e o nível (número inteiro). No final, mostre uma ficha organizada com os três dados.`,
      gabarito: `nome = input("Nome do personagem: ")
tipo = input("Tipo (mago, guerreiro, arqueiro): ")
nível = int(input("Nível: "))
print("=== FICHA DO PERSONAGEM ===")
print("Nome:", nome)
print("Tipo:", tipo)
print("Nível:", nível)

O programa usa dois textos (nome e tipo) e um número inteiro (nível, convertido com int()). Os prints organizam a ficha em linhas separadas com um título no topo.`,
    },
  ],
};
