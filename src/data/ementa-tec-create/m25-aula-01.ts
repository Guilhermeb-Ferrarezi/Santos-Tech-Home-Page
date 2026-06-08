import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Reencontro com o Maya",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Reabrir o Autodesk Maya e revisar a interface principal (viewport, outliner, menus de modelagem e atalhos de navegação), recriando primitivas básicas e organizando a cena para começar os assets do jogo.`,
  descricao: `Esta é a primeira aula do Ano 3 dentro do Maya, e o objetivo é simples: reencontrar a ferramenta com calma. Os alunos já usaram o Maya nos anos anteriores, mas faz tempo. Por isso, esta aula não corre atrás de nada novo e difícil; ela revisa o que já foi aprendido para que ninguém fique perdido nas próximas aulas, quando começarmos de verdade a modelar os personagens e itens do jogo. Pense nesta aula como ligar de novo o motor do carro antes de uma viagem longa.

O foco do mês é modelar os primeiros assets 3D do jogo. Asset é qualquer "peça" do jogo: um personagem, uma árvore, uma espada, uma moeda. Tudo isso nasce de formas simples chamadas primitivas (cubo, esfera, cilindro, cone). Hoje os alunos vão relembrar como criar essas primitivas, como girar a câmera ao redor delas e como deixar a cena organizada com nomes claros. Uma cena bagunçada hoje vira um problema enorme daqui a quatro aulas, então organização é parte do conteúdo, não um detalhe.

A interface do Maya assusta no começo porque tem muitos botões. A boa notícia é que, para esta aula, usamos só quatro regiões: a viewport (a janela 3D onde vemos os objetos), o outliner (a lista que mostra tudo que existe na cena), os menus de modelagem (onde criamos as formas) e os atalhos de navegação da câmera (orbit, pan e zoom). Quando o aluno domina essas quatro coisas, ele já consegue se virar em quase tudo.

Ao final da aula, cada aluno terá uma cena com algumas primitivas criadas, nomeadas e organizadas, e saberá girar, mover e aproximar a câmera com segurança. Esse é o terreno preparado para a Aula 2, quando vamos nos aprofundar no espaço 3D. O professor não precisa ser especialista: basta seguir os passos, repetir os atalhos em voz alta e deixar os alunos errarem e tentarem de novo, porque é assim que a mão pega o jeito.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e funcionando, um por aluno`,
    `Projetor ou TV para o professor demonstrar os passos do Maya em tela grande`,
    `Mouse de três botões com scroll para cada aluno (a navegação 3D depende do botão do meio)`,
    `Arquivo de exemplo .mb ou .ma com uma cena simples já montada (alguns cubos e esferas nomeados) para mostrar uma cena organizada`,
    `Folha impressa ou slide com a tabela de atalhos de navegação (orbit, pan, zoom)`,
    `Caderno ou bloco de notas para o aluno anotar os atalhos que mais esquecer`,
  ],
  conceitosChave: [
    `Viewport — a janela 3D do Maya onde vemos e mexemos nos objetos da cena.`,
    `Outliner — a lista lateral que mostra, por nome, tudo o que existe na cena, como um índice.`,
    `Primitiva — uma forma básica pronta (cubo, esfera, cilindro, cone) que serve de ponto de partida para qualquer modelo.`,
    `Orbit — girar a câmera ao redor dos objetos, segurando Alt e arrastando com o botão esquerdo do mouse.`,
    `Pan — deslizar a câmera para os lados, segurando Alt e arrastando com o botão do meio do mouse.`,
    `Zoom — aproximar ou afastar a câmera, segurando Alt e arrastando com o botão direito (ou usando o scroll).`,
    `Cena — o arquivo de trabalho do Maya, que guarda todos os objetos, nomes e organização do projeto.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para dar esta aula. Precisa saber quatro coisas e repeti-las com segurança. Primeira: a viewport é a janela 3D do meio da tela, onde tudo acontece. Segunda: para girar a câmera, segura-se a tecla Alt e arrasta-se com o botão esquerdo do mouse (isso se chama orbit). Terceira: para criar uma forma, vai-se no menu de cima, em "Create", depois "Polygon Primitives", e escolhe-se cubo, esfera, cilindro ou cone. Quarta: o outliner, do lado, é a lista de tudo que existe na cena, e é onde renomeamos os objetos com clique duplo. Antes da aula, abra o Maya, crie um cubo, gire a câmera e renomeie o cubo uma vez. Esses três gestos já garantem a aula inteira.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Abra o Maya no projetor. Pergunte à turma: "Quem lembra o que é a viewport?" Aponte na tela: viewport no meio, menus em cima, outliner do lado. Diga que hoje vamos só relembrar, sem pressa. Mostre a cena de exemplo já organizada, com nomes claros, e diga que é assim que a cena de cada um vai ficar.

15 min, conteúdo novo guiado. Vá no menu superior em "Create", depois "Polygon Primitives", depois "Cube". Um cubo aparece na viewport. Repita criando uma esfera ("Sphere") e um cilindro ("Cylinder"). Agora ensine a navegação, repetindo em voz alta: orbit é Alt mais botão esquerdo arrastando; pan é Alt mais botão do meio; zoom é Alt mais botão direito (ou o scroll do mouse). Faça cada movimento devagar. Por fim, abra o outliner, dê clique duplo no nome "pCube1" e renomeie para algo claro, por exemplo "caixa_teste". Mostre que o nome muda na lista.

15 min, mão na massa. Cada aluno cria, na própria cena, pelo menos um cubo, uma esfera e um cilindro. Depois pratica orbit, pan e zoom até girar a câmera com tranquilidade. Em seguida, renomeia cada objeto no outliner com um nome que faça sentido (por exemplo "chao", "bola", "torre"). Circule pela sala conferindo se todos conseguem girar a câmera; este é o ponto que mais trava.

10 min, mão na massa final e organização. Peça que cada aluno salve a cena com o próprio nome, indo em "File", depois "Save Scene As", e digitando algo como "aula01_nome". Reforce que salvar com nome claro evita perder o trabalho. Confira rapidamente os outliners pela sala.

10 min, desafio e compartilhar. Lance o desafio: "Crie um boneco bem simples só com primitivas, uma esfera para a cabeça e um cilindro para o corpo, e gire a câmera para mostrar." Quem terminar mostra ao colega do lado. Feche com uma rodada rápida: cada aluno diz qual atalho de câmera achou mais fácil e qual mais difícil.

## Como explicar de forma clara (linguagem para a idade)

Use comparações simples. Diga que a viewport "é a janela por onde a gente olha o mundo 3D, como a tela de um videogame". Diga que o outliner "é a lista de chamada da cena: todo objeto tem nome e aparece ali". Para a navegação, use a ideia de um drone: "orbit é o drone girando em volta do objeto; pan é o drone andando de lado; zoom é o drone chegando perto ou indo longe". Repita o nome do atalho junto com o gesto, sempre na mesma ordem (orbit, pan, zoom), até virar música na cabeça. Insista numa regra de ouro: "objeto sem nome é objeto perdido", para que renomear vire hábito desde o primeiro dia.

## Erros comuns e como ajudar

O erro número um é o aluno esquecer de segurar Alt e clicar direto na viewport, selecionando o objeto sem querer em vez de girar a câmera. Mostre de novo, devagar, a sequência Alt mais botão. O segundo erro é usar mouse sem botão do meio, o que trava o pan; por isso o mouse de três botões é material obrigatório. O terceiro é a cena cheia de "pCube1", "pCube2", "pSphere1" sem nome, o que cria bagunça; pare a turma e faça todos renomearem juntos. Há também quem feche o outliner sem querer; mostre como reabri-lo no menu "Windows", depois "Outliner". Por fim, alguns esquecem de salvar; reserve um momento só para todos salvarem com o próprio nome.`,
  exercicios: [
    {
      titulo: `Achando as quatro regiões da tela`,
      tipo: `observação guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre a tela no projetor e peça que cada aluno aponte na própria tela. Confira aluno por aluno se todos identificaram a viewport e o outliner.`,
      atividade: `No seu Maya, encontre e aponte estas quatro regiões: a viewport (janela 3D do meio), os menus de cima, o outliner (lista lateral) e a barra de ferramentas. Diga em voz alta o nome de cada uma para um colega.`,
      gabarito: `A viewport é a janela 3D grande no centro. Os menus ficam na barra de cima ("File", "Edit", "Create" e outros). O outliner é a lista vertical, em geral à esquerda, que mostra os objetos por nome. A barra de ferramentas fica na lateral esquerda, com os ícones de mover, girar e escalar. Se o outliner não aparecer, abra em "Windows" e depois "Outliner".`,
    },
    {
      titulo: `Criando suas primeiras primitivas`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce o caminho do menu "Create", depois "Polygon Primitives". Confira se cada aluno conseguiu criar as três formas e se elas aparecem no outliner.`,
      atividade: `Crie na sua cena um cubo, uma esfera e um cilindro usando o menu de criação. Confira no outliner se as três formas apareceram na lista.`,
      gabarito: `Caminho correto: menu "Create", depois "Polygon Primitives", e então "Cube", "Sphere" e "Cylinder", um de cada vez. No outliner devem aparecer três objetos, com nomes automáticos como "pCube1", "pSphere1" e "pCylinder1". Se nada aparecer na viewport, provavelmente a câmera está longe demais; use o zoom para aproximar.`,
    },
    {
      titulo: `Pilotando a câmera: orbit, pan e zoom`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o ponto que mais trava. Repita em voz alta a sequência Alt mais botão. Passe de mesa em mesa garantindo que cada aluno segura Alt antes de arrastar.`,
      atividade: `Com suas formas na tela, pratique os três movimentos de câmera: orbit (Alt mais botão esquerdo), pan (Alt mais botão do meio) e zoom (Alt mais botão direito ou scroll). Gire em volta do cubo, deslize para o lado e aproxime bem perto.`,
      gabarito: `Orbit: segurar Alt e arrastar com o botão esquerdo gira a câmera ao redor dos objetos. Pan: segurar Alt e arrastar com o botão do meio desliza a vista para os lados. Zoom: segurar Alt e arrastar com o botão direito (ou girar o scroll) aproxima e afasta. O erro mais comum é não segurar Alt, o que acaba selecionando ou movendo o objeto em vez de mover a câmera.`,
    },
    {
      titulo: `Organizando a cena com nomes claros`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno renomeia enquanto o outro confere se o nome faz sentido. Reforce a regra "objeto sem nome é objeto perdido".`,
      atividade: `Em dupla, renomeiem no outliner cada objeto da cena com um nome claro. Por exemplo, troquem "pCube1" por "chao", "pSphere1" por "bola" e "pCylinder1" por "torre". Confiram juntos se todos os nomes ficaram fáceis de entender.`,
      gabarito: `Para renomear, dá-se clique duplo no nome do objeto dentro do outliner, apaga-se o nome antigo e digita-se o novo (sem espaços e sem acentos, usando letras simples, por exemplo "chao", "bola", "torre"). O resultado esperado é uma lista com nomes claros em vez de "pCube1" e "pSphere1". Nomes que se repetem ou continuam genéricos devem ser corrigidos.`,
    },
    {
      titulo: `Mini desafio: boneco de primitivas e salvar a cena`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Deixe a criatividade rolar, o objetivo é praticar criar, navegar e organizar. No fim, garanta que todos salvem o arquivo com o próprio nome em "File", depois "Save Scene As".`,
      atividade: `Monte um boneco bem simples usando só primitivas: uma esfera para a cabeça e um cilindro para o corpo. Renomeie cada parte no outliner ("cabeca", "corpo"), gire a câmera para mostrar o boneco e salve a cena com o seu nome.`,
      gabarito: `O boneco deve ter pelo menos uma esfera (cabeça) e um cilindro (corpo), criados pelo menu "Create", depois "Polygon Primitives". No outliner, as partes devem estar renomeadas, por exemplo "cabeca" e "corpo". O arquivo deve ser salvo em "File", depois "Save Scene As", com um nome claro como "aula01_nome". Sinal de sucesso: o aluno consegue girar a câmera (orbit) e mostrar o boneco de vários ângulos, e o trabalho está salvo sem perigo de se perder.`,
    },
  ],
};
