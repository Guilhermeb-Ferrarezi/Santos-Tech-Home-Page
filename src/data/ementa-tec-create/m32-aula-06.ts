import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Mudar a página ao clicar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Combinar um evento de clique com a manipulação do DOM para alterar a página em tempo real, trocando textos com textContent e mudando estilos e classes ao clicar em um botão.`,
  descricao: `Na aula anterior os alunos abriram a página por dentro e conheceram o DOM, aquela árvore que o navegador monta a partir do HTML. Eles aprenderam a pescar um elemento com document.getElementById e a guardá-lo numa variável. Agora chega o momento mais divertido do mês: fazer a página mudar sozinha quando alguém clica. É aqui que o aluno junta duas peças que já viu separadas, o evento de clique e a manipulação do DOM, e descobre que, juntas, elas dão vida de verdade à página.

A ideia central é simples e poderosa. Primeiro, a gente pega um elemento da página e guarda numa variável. Depois, a gente diz ao botão: quando você for clicado, execute esta função. Dentro dessa função, a gente muda o elemento, trocando o texto que aparece com a propriedade textContent, ou mudando a cor com a propriedade style, ou ainda ligando e desligando uma classe do CSS com classList. O resultado é imediato e visível: o texto muda, a cor muda, um elemento aparece ou some. Para um adolescente, ver a própria página reagir ao seu clique é mágico e motivador.

Nesta aula o professor vai mostrar três efeitos clássicos que cabem em poucas linhas. O primeiro é trocar um texto ao clicar, por exemplo um título que muda de mensagem. O segundo é alternar uma cor, deixando o fundo de uma caixa azul e depois voltando, como um interruptor. O terceiro é esconder e mostrar um elemento, fazendo um aviso aparecer e desaparecer. Esses três padrões são a base de quase tudo que existe num site interativo: menus que abrem, botões de tema claro e escuro, perguntas que revelam respostas.

Vale reforçar que esta aula prepara o terreno para o entregável do mês, a página interativa. Tudo o que os alunos montarem aqui poderá ser reaproveitado no projeto. Por isso o professor deve incentivar que cada um teste com seus próprios textos e cores, criando pequenas variações. O importante é que, ao final, o aluno entenda a receita: pegar o elemento, ouvir o clique e mudar a página dentro da função.`,
  materiais: [
    `Computadores com um navegador moderno instalado (Chrome ou Edge), um por aluno`,
    `Editor de código instalado (VS Code) para escrever HTML, CSS e JavaScript`,
    `Projetor ou TV para o professor demonstrar os efeitos ao vivo`,
    `Arquivo de exemplo "página-clique" com um HTML pronto contendo um título, uma caixa colorida, um aviso e três botões`,
    `Folha impressa com a receita do dia: pegar o elemento, ouvir o clique, mudar a página`,
    `Quadro branco para desenhar o fluxo clique, função, mudança no DOM`,
  ],
  conceitosChave: [
    `Evento de clique — o acontecimento que dispara quando alguém clica em um elemento; o JavaScript pode ouvir esse evento e reagir.`,
    `addEventListener — o comando que liga um elemento a uma função, dizendo: quando este evento acontecer, execute esta função.`,
    `textContent — a propriedade que lê ou troca o texto que aparece dentro de um elemento.`,
    `style — a propriedade que permite mudar a aparência de um elemento direto pelo JavaScript, como a cor de fundo.`,
    `classList — a lista de classes CSS de um elemento; com ela dá para adicionar, remover ou alternar uma classe.`,
    `toggle — a ação de alternar: se a classe está presente, remove; se não está, adiciona, como um interruptor de liga e desliga.`,
    `Manipulação do DOM — quando o JavaScript muda a página depois que ela já está aberta, alterando textos, estilos ou elementos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em JavaScript para conduzir esta aula. Precisa entender uma receita de três passos e tê-la testado antes no seu computador. A receita é: primeiro pego um elemento da página e guardo numa variável; depois ligo um ouvinte de clique nesse elemento com addEventListener; por fim, dentro da função, mudo a página. Para mudar, usamos três ferramentas: textContent troca o texto, style.backgroundColor troca a cor de fundo e classList.toggle liga e desliga uma classe do CSS.

Antes da aula, abra o arquivo de exemplo no VS Code e no navegador. Aperte F12 para ter o Console à mão e teste cada um dos três efeitos. Assim você já sabe onde clicar e o que vai aparecer.

## Passo a passo da aula

Aquecimento e revisão (10 min): relembre a aula do DOM. Pergunte: como a gente pega um elemento da página? Conduza até document.getElementById guardado numa variável. No quadro, desenhe o fluxo do dia: clique, depois função, depois mudança na página.

Conteúdo novo guiado (15 min): com o projetor, abra o arquivo de exemplo. Mostre o HTML com um título de id "titulo", uma caixa de id "caixa", um aviso de id "aviso" e três botões. Escreva ao vivo o primeiro efeito, trocar o texto:

var titulo = document.getElementById("titulo");
var botao1 = document.getElementById("botao1");
botao1.addEventListener("click", function () {
  titulo.textContent = "Você clicou no botao!";
});

Explique linha a linha: pegamos o título e o botão; addEventListener diz ao botão para ouvir o clique; dentro da função, textContent troca o texto. Clique e mostre a mágica. Depois faça o segundo efeito, mudar a cor:

var caixa = document.getElementById("caixa");
var botao2 = document.getElementById("botao2");
botao2.addEventListener("click", function () {
  caixa.style.backgroundColor = "blue";
});

E o terceiro, esconder e mostrar com uma classe. No CSS do exemplo já existe uma classe ".escondido" com display none. Escreva:

var aviso = document.getElementById("aviso");
var botao3 = document.getElementById("botao3");
botao3.addEventListener("click", function () {
  aviso.classList.toggle("escondido");
});

Mostre que cada clique faz o aviso sumir e voltar.

Mão na massa (25 min): cada aluno abre o arquivo e digita os três efeitos, trocando os textos e as cores pelos seus. Peça que personalizem: a mensagem do título e a cor da caixa devem ser escolha do aluno. Circule pela sala conferindo se os ids do JavaScript batem com os ids do HTML.

Desafio e compartilhar (10 min): desafie quem terminou a fazer o botão da cor alternar entre duas cores usando classList.toggle de uma classe que pinta o fundo. Cada aluno mostra em poucos segundos um efeito funcionando e diz em voz alta qual ferramenta usou: textContent, style ou classList.

## Como explicar de forma clara

Use a comparação do interruptor de luz para o classList.toggle: um clique liga, outro desliga. Para o addEventListener, use a campainha: o botão fica esperando alguém apertar e, quando aperta, a função toca. Repita a receita como um bordão: pega o elemento, ouve o clique, muda a página. Reforce que o texto novo sempre fica entre aspas e que os ids do JavaScript precisam ser idênticos aos do HTML.

## Erros comuns e como ajudar

Erro 1: o id do JavaScript não bate com o do HTML e nada acontece; peça para comparar letra por letra. Erro 2: escreve textcontent tudo minúsculo; lembre que o certo é textContent, com C maiúsculo no meio. Erro 3: esquece as aspas no texto novo e dá erro vermelho; texto sempre entre aspas. Erro 4: troca a função e o evento de lugar dentro do addEventListener; mostre a ordem correta, primeiro "click", depois a função. Erro 5: a classe do CSS tem outro nome e o toggle não funciona; confira se o nome no JavaScript é igual ao do CSS. Erro 6: esquece de fechar a função com a chave e o parêntese; mostre o par que abre e o par que fecha.`,
  exercicios: [
    {
      titulo: `Ligar o elemento ao botão`,
      tipo: `pergunta e resposta`,
      tempo: `5 min`,
      guiaProfessor: `Faça oralmente ou no quadro. O objetivo é fixar a receita antes de digitar: pegar o elemento, ouvir o clique, mudar a página.`,
      atividade: `Coloque em ordem os três passos para fazer a página mudar ao clicar: (a) mudar o texto do elemento; (b) pegar o elemento e guardar numa variável; (c) dizer ao botão para ouvir o clique.`,
      gabarito: `A ordem correta é: 1) (b) pegar o elemento e guardar numa variável; 2) (c) dizer ao botão para ouvir o clique com addEventListener; 3) (a) mudar o texto do elemento dentro da função. Essa é a receita do dia.`,
    },
    {
      titulo: `Trocar o texto ao clicar`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre uma vez no projetor e deixe o aluno digitar. Confira se o id "titulo" do JavaScript é igual ao do HTML. Reforce o C maiúsculo em textContent.`,
      atividade: `No arquivo de exemplo existe um título com id "titulo" e um botão com id "botao1". Escreva o código para que, ao clicar no botão, o título mude para uma frase sua.`,
      gabarito: `var titulo = document.getElementById("titulo");
var botao1 = document.getElementById("botao1");
botao1.addEventListener("click", function () {
  titulo.textContent = "Bem-vindo a minha página!";
});

Qualquer frase própria do aluno vale, desde que dentro das aspas. Ao clicar, o texto do título troca na hora.`,
    },
    {
      titulo: `Mudar a cor da caixa`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Reforce que o nome da cor fica entre aspas e em inglês, como "blue", "red", "green". Confira o id "caixa".`,
      atividade: `Existe uma caixa com id "caixa" e um botão com id "botao2". Escreva o código para que, ao clicar no botão, o fundo da caixa fique azul.`,
      gabarito: `var caixa = document.getElementById("caixa");
var botao2 = document.getElementById("botao2");
botao2.addEventListener("click", function () {
  caixa.style.backgroundColor = "blue";
});

Ao clicar, o fundo da caixa fica azul. O aluno pode trocar "blue" por outra cor em inglês, como "red" ou "green".`,
    },
    {
      titulo: `Esconder e mostrar o aviso`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `O CSS do exemplo já tem a classe "escondido" com display none. Explique o toggle como interruptor: um clique some, outro volta. Confira o nome da classe.`,
      atividade: `Existe um aviso com id "aviso" e um botão com id "botao3". Usando classList.toggle e a classe "escondido", escreva o código para que cada clique esconda e mostre o aviso.`,
      gabarito: `var aviso = document.getElementById("aviso");
var botao3 = document.getElementById("botao3");
botao3.addEventListener("click", function () {
  aviso.classList.toggle("escondido");
});

A cada clique o aviso some e volta. O toggle adiciona a classe quando ela não está e remove quando está, como um interruptor de liga e desliga.`,
    },
    {
      titulo: `Caça ao erro do clique`,
      tipo: `análise de código`,
      tempo: `10 min`,
      guiaProfessor: `Apresente o código com erros no projetor. Conduza a turma a comparar ids e a observar a grafia de textContent. Trabalhe a ideia de que ler com calma resolve.`,
      atividade: `O código abaixo deveria trocar o texto do título ao clicar, mas não funciona. Encontre os dois erros e escreva a versão correta. No HTML, o título tem id "titulo" e o botão tem id "botao1".

var titulo = document.getElementById("titlo");
var botao1 = document.getElementById("botao1");
botao1.addEventListener("click", function () {
  titulo.textcontent = "Funcionou!";
});`,
      gabarito: `var titulo = document.getElementById("titulo");
var botao1 = document.getElementById("botao1");
botao1.addEventListener("click", function () {
  titulo.textContent = "Funcionou!";
});

Havia dois erros: o id estava escrito "titlo" e o certo é "titulo", igual ao do HTML; e a propriedade estava "textcontent", mas o certo é textContent, com C maiúsculo no meio. Depois de corrigir, o título muda ao clicar.`,
    },
  ],
};
