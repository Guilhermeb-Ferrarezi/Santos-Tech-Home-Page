import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Pintando com vertex color",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança descobre o que é vertex color e pinta partes do seu modelo 3D escolhendo cores ponto a ponto, dando as primeiras cores aos personagens e itens criados na aula passada.`,
  descricao: `Nesta aula as crianças vão dar vida aos modelos 3D que construíram na semana anterior, pintando eles com uma técnica chamada vertex color. Até agora os modelos estavam todos cinzas, da cor do barro. Hoje eles ganham cor de verdade: o chapéu fica vermelho, a maçã fica verde, os olhinhos do personagem ficam pretos. É o momento em que o aluno olha para a tela e diz "agora sim parece o que eu imaginei".

Vertex color é uma forma de colorir o modelo pintando os seus pontos, chamados de vértices. Cada modelo 3D é feito de muitos pontinhos ligados por linhas, como uma estrutura de palitinhos. Quando a criança escolhe uma cor e aplica num grupo de pontos, o computador espalha essa cor pela superfície ali do lado. Pintar ponto a ponto é a maneira mais simples e divertida de colorir no Maya, porque não precisa de imagens externas nem de programas extras: a cor já fica grudada no próprio modelo.

O assunto importa porque a cor é o que faz um asset parecer pronto para o jogo. Um cubo cinza vira um baú de tesouro só com as cores certas. Além disso, vertex color é leve e rápido, perfeito para modelos que vão para jogos feitos por crianças. Quem aprende a escolher cores e aplicar nos pontos certos já consegue deixar qualquer item do jogo bonito e reconhecível, sem complicação.

Ao final, cada criança terá aplicado as primeiras cores no seu personagem ou item, separando pelo menos duas ou três partes coloridas diferentes. Eles vão perceber que escolher bem as cores muda tudo, e que pintar ponto a ponto é como colorir um desenho, só que num boneco que gira na tela em três dimensões.`,
  materiais: [
    `Computadores (um por criança ou dupla) com o Maya já aberto e os modelos 3D criados na aula anterior carregados na tela.`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo na tela grande.`,
    `Mouse de verdade em cada computador, pois selecionar vértices e arrastar é muito mais fácil com mouse do que com touchpad.`,
    `Um modelo de exemplo já pintado com vertex color (por exemplo, uma maçã vermelha com cabinho marrom) para mostrar a meta antes de começar.`,
    `Cartões grandes com bolinhas coloridas (vermelho, azul, verde, amarelo, marrom, preto) para o jogo de escolha de cores.`,
    `Folhas com o desenho de um personagem ou item simples para colorir com lápis de cor, como ensaio do que vão fazer no computador.`,
    `Lápis de cor ou giz de cera para o exercício no papel.`,
  ],
  conceitosChave: [
    `Vértice — cada pontinho do modelo 3D; é a junção das linhas, como o cantinho de uma caixa.`,
    `Vertex color — a cor que a criança gruda direto nos pontinhos do modelo, sem precisar de imagem nenhuma.`,
    `Selecionar — clicar e escolher quais pontinhos vão receber a cor, deixando eles marcados.`,
    `Cor — a tinta que a criança escolhe na paletinha para pintar a parte do modelo.`,
    `Parte — um pedaço do boneco que recebe uma cor só, como o chapéu, o rosto ou o cabinho da maçã.`,
    `Paleta — a janelinha de cores onde a criança aponta e escolhe qual cor quer usar.`,
    `Aplicar — o momento de mandar a cor escolhida grudar nos pontinhos que estavam selecionados.`,
  ],
  treinamento: `## O que o professor precisa saber

Vertex color, no Maya, é uma cor guardada em cada vértice (ponto) do modelo. O computador pinta a superfície misturando as cores dos pontos vizinhos. A grande vantagem para crianças: não precisa de imagem, nem de UV, nem de material complicado. Você seleciona pontos, escolhe uma cor e aplica. Pronto.

O caminho principal no Maya fica no menu "Mesh Display". Lá existe o item "Apply Color" (Aplicar Cor) e o "Paint Vertex Color Tool" (Ferramenta de Pintar Cor de Vértice). Para esta aula, use o jeito mais simples: selecionar os vértices e usar "Mesh Display" e depois "Apply Color". Ao lado de "Apply Color" há um quadradinho (a caixinha de opções) que abre a paleta de cores. Antes de tudo, confirme no canto superior direito que você está no menu set "Modeling" (Modelagem), senão o menu "Mesh Display" não aparece.

Atenção a um detalhe que confunde iniciantes: para a cor aparecer de verdade na tela, ative a exibição. Vá em "Mesh Display" e marque "Toggle Display Colors" (Alternar Cores) ou, no painel, abra "Shading" e ligue a visualização de vertex color. Sem isso a criança pinta e parece que nada mudou. Prepare antes da aula um modelo de exemplo já pintado e salvo, para mostrar a meta.

Como selecionar pontos: clique com o botão direito segurando em cima do modelo e escolha "Vertex" (Vértice) no menu radial. Agora o modelo mostra os pontinhos. Arraste uma caixinha em volta dos pontos que quer pintar para selecionar vários de uma vez.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão: relembre os modelos da aula passada. Abra um no projetor e pergunte "de que cor vocês imaginaram esse item?". Mostre o exemplo já pintado (a maçã vermelha) e diga "hoje a gente pinta o de vocês assim". Distribua os cartões de bolinhas coloridas e faça a turma nomear as cores em voz alta.

15 min, conteúdo novo guiado: no projetor, confirme o menu "Modeling" no canto. Clique com o botão direito segurando sobre o modelo e escolha "Vertex" para mostrar os pontinhos. Arraste uma caixinha em volta de uma parte (por exemplo, o chapéu). Vá em "Mesh Display", clique na caixinha ao lado de "Apply Color", escolha uma cor na paleta e clique "Apply". Mostre a cor surgindo. Repita com outra parte e outra cor, falando cada passo devagar.

25 min, mão na massa: cada criança abre o próprio modelo. Seleciona uma parte dos pontinhos, escolhe uma cor e aplica. Depois repete com outra parte e outra cor. A meta é pintar pelo menos duas ou três partes diferentes. Circule pela sala ajudando a clicar com o botão direito e a arrastar a caixinha de seleção. Incentive cores que combinem com a ideia do item.

10 min, desafio e compartilhar: desafio "pinte uma parte com a sua cor preferida". Depois cada criança gira o modelo na tela e mostra para os colegas numa rodinha rápida, contando que cores escolheu.

## Como explicar para crianças

Diga que o modelo é feito de "pontinhos mágicos" (os vértices) e que a cor gruda neles como adesivo. Selecionar é "marcar com o dedo quais pontinhos vão ganhar cor". A paleta é a "caixa de tintas". Aplicar é "carimbar a cor". Compare com um livro de colorir: aqui a criança escolhe a parte e a cor, mas o desenho é um boneco que gira. Lembre que cor errada se conserta: é só escolher outra e aplicar de novo.

## Erros comuns e como ajudar

A criança pinta e nada muda: provavelmente a exibição de cor está desligada; ligue "Toggle Display Colors" no "Mesh Display". Ela não consegue ver os pontinhos: confira se clicou com o botão direito segurando e escolheu "Vertex". A cor vai para o modelo todo em vez de uma parte: ela selecionou pontos demais; mostre a arrastar uma caixinha menor, só na parte certa. O modelo fica cinza de novo ao clicar fora: é só voltar a selecionar; a cor não sumiu. Frustração com a paleta: ajude a apontar a cor e confirmar com "Apply". Some o modelo da tela: ensine o scroll do mouse para afastar a câmera.`,
  exercicios: [
    {
      titulo: `Caça às Cores`,
      tipo: `jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `O professor mostra os cartões com bolinhas coloridas e relembra os nomes das cores. Em seguida levanta um cartão por vez e pede que a turma nomeie a cor bem alto, conectando com itens reais ("vermelho de quê? Da maçã!").`,
      atividade: `O professor levanta um cartão de cor por vez. As crianças gritam o nome da cor e dizem um objeto que tem aquela cor: "verde, igual à folha!", "marrom, igual ao tronco!". Faça umas seis rodadas misturando as cores.`,
      gabarito: `Acertou quem nomeia corretamente as cores e dá um exemplo de objeto para cada uma. A turma deve nomear certo pelo menos cinco das seis cores mostradas e citar um objeto da mesma cor.`,
    },
    {
      titulo: `Personagem no Papel`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `O professor distribui as folhas com o desenho de um personagem ou item simples e os lápis de cor. Explica que vão planejar no papel as cores que querem usar no computador, pintando cada parte de uma cor diferente.`,
      atividade: `Cada criança pinta no papel o personagem ou item, escolhendo uma cor para cada parte (por exemplo, chapéu de uma cor, rosto de outra, roupa de outra). Deve usar pelo menos duas cores diferentes.`,
      gabarito: `Acertou quem pintou o desenho usando pelo menos duas cores em partes diferentes. Não importa caprichar nas bordas; importa mostrar que separou o desenho em partes com cores distintas, planejando o que fará no Maya.`,
    },
    {
      titulo: `Marcando os Pontinhos`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `O professor demonstra no projetor uma vez: clicar com o botão direito segurando sobre o modelo, escolher "Vertex", e arrastar uma caixinha em volta de uma parte para selecionar os pontos. Só então libera as crianças para repetir.`,
      atividade: `Cada criança, no seu modelo, clica com o botão direito segurando, escolhe "Vertex" para mostrar os pontinhos e arrasta uma caixinha em volta de uma parte do boneco para selecionar aqueles pontos.`,
      gabarito: `Acertou quem conseguiu mostrar os pontinhos do modelo e deixar uma parte deles marcada (selecionada, com destaque). O professor confere vendo os vértices visíveis e um grupo deles realçado na tela.`,
    },
    {
      titulo: `Minha Primeira Cor`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `O professor relembra o caminho "Mesh Display" e depois "Apply Color", e mostra como abrir a paleta na caixinha de opções, escolher uma cor e clicar "Apply". Confere que a exibição de cores está ligada antes de soltar a turma.`,
      atividade: `Cada criança seleciona uma parte do modelo, vai em "Mesh Display" e "Apply Color", escolhe uma cor na paleta e aplica. A parte escolhida deve ficar colorida na tela.`,
      gabarito: `Acertou quem aplicou pelo menos uma cor numa parte do modelo, deixando essa parte visivelmente colorida. O professor confirma vendo a cor grudada na superfície, diferente do cinza original.`,
    },
    {
      titulo: `Asset Colorido para o Jogo`,
      tipo: `desafio`,
      tempo: `15 minutos`,
      guiaProfessor: `O professor relembra os três passos: selecionar a parte, escolher a cor e aplicar. Incentiva usar o plano feito no exercício do papel e escolher cores que combinem com a ideia do item. No fim, organiza a rodinha de compartilhamento.`,
      atividade: `Cada criança pinta o seu modelo com vertex color, dando cor a pelo menos três partes diferentes (por exemplo, corpo, detalhe e enfeite), seguindo o plano do papel. No fim, gira o modelo na tela e mostra para a turma, contando as cores que escolheu.`,
      gabarito: `Acertou quem deixou o modelo com pelo menos três partes coloridas de cores diferentes, formando um asset reconhecível e pronto para o jogo. O professor confirma vendo o modelo colorido girando na tela e a criança apresentando suas escolhas de cor.`,
    },
  ],
};
