import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "A Tela de Início",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Criar uma tela de menu inicial com o nome do jogo e um botão "Jogar" que leva a criança para a fase, usando layouts diferentes no Construct 3.`,
  descricao: `Todo jogo de verdade começa com uma tela de início. É a primeira coisa que a gente vê quando abre um game: o nome bonito, um fundo caprichado e aquele botão grande escrito "Jogar". Essa tela é como a capa de um livro ou o cartaz de um filme, ela dá as boas-vindas e deixa o jogador animado para começar. Nesta aula, as crianças vão construir essa porta de entrada para o jogo que elas mesmas criaram nas semanas anteriores.

Para fazer isso, vamos aprender uma ideia nova e muito importante: o Construct 3 permite ter mais de uma tela dentro do mesmo projeto. Cada tela é chamada de "Layout". Até agora a turma trabalhou em um único Layout, o da fase do jogo. Hoje vamos criar um segundo Layout só para o menu. Pense nos Layouts como cômodos diferentes de uma casa: a sala é o menu e o quarto é a fase. Para passar de um cômodo para o outro, precisamos de uma "porta", e essa porta é o botão "Jogar".

O segredo para trocar de tela está em um comando do Construct 3 chamado "Go to layout". Quando o jogador clica no botão, mandamos o jogo ir embora do menu e entrar na fase. É mágico para as crianças verem que um clique faz a tela inteira mudar. Elas vão entender que o programa "obedece" às instruções que elas escrevem na Folha de Eventos.

Além de funcionar, a tela precisa ser bonita. Vamos caprichar no visual: escolher um fundo, escrever o nome do jogo com letras grandes usando um objeto de Texto, e desenhar ou posicionar um botão atraente. O capricho aqui é parte do aprendizado, porque ensina as crianças que apresentação importa e que o trabalho delas merece uma "capa" digna de um jogo profissional.`,
  materiais: [
    `Computadores com o Construct 3 aberto no projeto do jogo de cada criança`,
    `Projetor ou TV grande para o professor demonstrar cada passo`,
    `Um jogo de exemplo já pronto com tela de início funcionando (para mostrar o objetivo)`,
    `Imagens de fundo e de botão prontas em uma pasta, caso a criança não queira desenhar`,
    `Folha de papel e lápis de cor para a criança rascunhar o nome e o visual do menu antes`,
    `Lista impressa com os nomes dos botões em inglês (Layout, Text, Button, Go to layout) e a tradução`,
  ],
  conceitosChave: [
    `Layout — uma tela do jogo. O menu é uma tela e a fase é outra tela, igual a cômodos diferentes de uma casa.`,
    `Tela de início (menu) — a primeira tela que aparece, com o nome do jogo e o botão de começar. É a capa do game.`,
    `Botão — uma imagem ou objeto que a gente clica para fazer algo acontecer, como começar a jogar.`,
    `Go to layout — o comando mágico que faz o jogo trocar de uma tela para outra quando a gente clica.`,
    `Objeto de Texto — uma caixinha onde a gente escreve palavras na tela, como o nome do jogo.`,
    `Layout inicial — o ajuste que diz ao Construct 3 qual tela deve aparecer primeiro quando o jogo abre.`,
    `On clicked — o gatilho que avisa o jogo: "alguém clicou aqui, agora faça uma ação".`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula a turma cria uma segunda tela, o menu, e faz o botão "Jogar" levar para a fase. No Construct 3 cada tela é um "Layout", e cada Layout tem sua própria "Folha de Eventos" (Event Sheet), onde ficam as instruções. Os dois conceitos novos são: criar um Layout e usar a ação "Go to layout" para pular de uma tela para a outra. Se você nunca mexeu nisso, calma: são poucos cliques e você vai dominar testando uma vez antes da aula. Faça o caminho completo sozinho na véspera para se sentir seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min). Mostre no projetor a tela de início de um jogo famoso e a do jogo de exemplo. Pergunte: "O que aparece antes da gente jogar?" Deixe as crianças falarem: nome, botão, fundo bonito. Diga que hoje cada uma vai construir a capa do próprio jogo.

CONTEÚDO NOVO GUIADO (15 min). No projetor, no painel "Project" à direita, clique com o botão direito na pasta "Layouts" e escolha "Add layout" e depois "Add layout and event sheet". Renomeie para "Menu" (clique duas vezes no nome). Agora existem duas telas. Arraste um objeto de fundo (ou clique duas vezes no Layout vazio, escolha "Sprite" e desenhe). Adicione um objeto "Text": clique duas vezes no Layout, escolha "Text", e digite o nome do jogo. Aumente a fonte no painel "Properties" à esquerda. Para o botão, adicione outro "Sprite" desenhado como botão (ou um objeto "Button"). Agora a parte mágica: abra a Folha de Eventos do Menu (aba "Menu" na parte de cima), clique em "Add event", escolha o botão, escolha "On clicked". Em "Add action", escolha "System", depois "Go to layout", e selecione a fase. Por último, garanta que o Menu apareça primeiro: clique no Layout "Menu" no painel Project e, em Properties, confira se ele é o primeiro da lista (o Construct usa o primeiro Layout como inicial; arraste-o para o topo se preciso).

MÃO NA MASSA (25 min). Cada criança repete no próprio projeto: cria o Layout "Menu", coloca fundo, escreve o nome do jogo com Texto e adiciona o botão. Depois cria o evento "On clicked" com a ação "Go to layout" apontando para a fase. Circule pela sala. Mande testar clicando no botão "Preview" (o ícone de play no topo). Se o botão levar para a fase, deu certo. Elogie cada uma quando a troca de tela funcionar.

DESAFIO E COMPARTILHAR (10 min). Desafio: deixar a tela ainda mais bonita, com um subtítulo ("Aperte para jogar") ou cores combinando. Depois, cada criança mostra a própria tela de início no projetor e clica no botão para a turma ver a troca de tela acontecer.

## Como explicar para crianças

Use a analogia da casa: "O Construct é uma casa com vários cômodos. O menu é a sala de entrada e a fase é onde a brincadeira acontece. Layout é o nome chique de cada cômodo." Para o botão: "O botão é a porta, e o comando 'Go to layout' é a chave que abre essa porta." Para o evento "On clicked": "É como combinar com o jogo: quando eu clicar aqui, você me leva para lá." Fale devagar e mostre antes de pedir que elas façam.

## Erros comuns e como ajudar

O erro mais comum é a criança colocar a ação na Folha de Eventos errada (a da fase, não a do Menu). Mostre as abas no topo e confira juntos. Outro erro: esquecer de escolher "On clicked" e o botão não reagir, peça para refazer o evento. Algumas trocam o Layout de destino e o botão leva para o lugar errado, basta clicar duas vezes na ação e corrigir. Há também quem deixe a fase como tela inicial, então o menu nunca aparece, arraste o Layout "Menu" para o topo da lista. Por fim, lembre de testar sempre no Preview; ver funcionando é a melhor recompensa.`,
  exercicios: [
    {
      titulo: `Caça à tela de início`,
      tipo: `Observação e conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor as telas de início de dois ou três jogos. Pergunte o que cada criança vê e anote no quadro as respostas. O objetivo é a turma perceber os ingredientes comuns: nome, botão e fundo.`,
      atividade: `Olhe as telas de início que o professor mostrar. Diga em voz alta tudo o que você vê aparecer antes de o jogo começar. Aponte onde está o nome do jogo e onde está o botão de jogar.`,
      gabarito: `Toda tela de início tem três coisas principais: o nome do jogo escrito grande, um botão para começar (geralmente "Jogar" ou "Play") e um fundo bonito. Algumas também têm música, personagem ou um subtítulo. Respostas válidas citam pelo menos o nome e o botão.`,
    },
    {
      titulo: `Criando o segundo cômodo (Layout)`,
      tipo: `Prática guiada no computador`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe enquanto cada criança cria o novo Layout. Verifique se ela usou "Add layout and event sheet" e se renomeou para "Menu". Confira que agora existem dois Layouts no painel Project.`,
      atividade: `No painel "Project" à direita, clique com o botão direito em "Layouts", escolha "Add layout" e depois "Add layout and event sheet". Renomeie o novo Layout para "Menu" clicando duas vezes no nome.`,
      gabarito: `Ao final deve haver dois Layouts visíveis no painel Project: o da fase (já existente) e o novo, chamado "Menu". Se aparecer só um, a criança não confirmou a criação; se o nome estiver errado, basta clicar duas vezes e digitar "Menu".`,
    },
    {
      titulo: `O nome do jogo na tela`,
      tipo: `Construção visual no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Ajude a turma a adicionar um fundo e um objeto de Texto no Layout "Menu". Mostre onde aumentar o tamanho da fonte no painel "Properties". O capricho é parte da atividade.`,
      atividade: `No Layout "Menu", clique duas vezes em uma área vazia e escolha "Sprite" para um fundo, ou arraste uma imagem. Depois clique duas vezes de novo, escolha "Text" e escreva o nome do seu jogo. No painel "Properties", aumente o tamanho da letra.`,
      gabarito: `O Layout "Menu" deve mostrar um fundo e o nome do jogo escrito grande e legível com o objeto Text. Acerto completo: nome visível e em fonte grande. Acerto parcial: nome presente mas pequeno (peça para aumentar em "Font size" nas Properties).`,
    },
    {
      titulo: `O botão que abre a porta`,
      tipo: `Programação com eventos`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o passo central. Confirme que a criança abriu a Folha de Eventos do "Menu" (aba certa no topo), criou o evento "On clicked" do botão e a ação "System > Go to layout" apontando para a fase. Mande testar no Preview.`,
      atividade: `Adicione um botão no Layout "Menu". Abra a Folha de Eventos do Menu, clique em "Add event", escolha o botão e "On clicked". Em "Add action", escolha "System", depois "Go to layout" e selecione a sua fase. Clique em "Preview" e teste o botão.`,
      gabarito: `Ao clicar no botão durante o Preview, o jogo deve sair do menu e abrir a fase. O evento correto é: "Botão -> On clicked" com a ação "System -> Go to layout (Fase)". Se nada acontece, verifique se o evento está na Folha de Eventos do Menu e se "On clicked" foi escolhido.`,
    },
    {
      titulo: `Menu primeiro e capricho final`,
      tipo: `Ajuste e desafio criativo`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que o Layout "Menu" esteja no topo da lista em Project, para ser a tela inicial. Depois desafie a criança a melhorar o visual. Encerre com cada uma mostrando a tela no projetor.`,
      atividade: `No painel Project, arraste o Layout "Menu" para o topo da lista de Layouts, para ele aparecer primeiro quando o jogo abre. Depois capriche: adicione um subtítulo como "Aperte para jogar" e escolha cores que combinem. Teste no Preview começando pelo menu.`,
      gabarito: `Ao iniciar o Preview, a primeira tela deve ser o menu, não a fase. O Layout "Menu" precisa estar no topo da lista em Project. O desafio está completo quando há um subtítulo extra e cores harmônicas; o aluno demonstra que o jogo abre no menu e o botão leva à fase.`,
    },
  ],
};
