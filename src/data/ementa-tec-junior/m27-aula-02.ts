import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Explorando as Telas do Blender",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Reconhecer e nomear as partes principais da tela do Blender — a área 3D no meio, os menus de cima e os painéis dos lados — clicando nos botões certos com segurança.`,
  descricao: `Na aula passada as crianças deram o primeiro "oi" para o Blender e viram que ele é o programa onde vamos construir objetos em 3D de verdade. Hoje vamos com calma olhar para a tela inteira, como quem entra numa sala nova e descobre onde fica cada móvel. O Blender tem muitos botões e, para uma criança (e até para o professor iniciante!), isso pode parecer assustador. Por isso esta aula é toda sobre conhecer o lugar antes de mexer nas coisas.

A ideia central é simples: a tela do Blender é dividida em pedaços, e cada pedaço tem um nome e uma função. No meio fica a grande área de trabalho, chamada Viewport 3D — é o "palco" onde o cubo aparece e onde tudo vai acontecer. Em cima ficam os menus, como uma fita de comandos parecida com a de outros programas. Do lado direito tem dois painéis importantes: o Outliner (a "listinha" de tudo que existe na cena) e as Properties (as "fichas" cheias de botões e ajustes). Embaixo fica a Timeline (a linha do tempo, que usaremos mais para frente).

Nesta aula as crianças não vão criar nada novo nem modelar ainda — o objetivo é praticar identificar e clicar. Elas vão apontar partes da tela, repetir os nomes em voz alta, achar o cubo na listinha do Outliner e passear pelas abas das Properties só para ver o que muda. É um treino de orientação, como aprender onde ficam as salas de uma escola nova antes da primeira aula de verdade.

Ao final, cada criança deve conseguir olhar para o Blender e dizer, com palavras simples, onde está o palco 3D, onde estão os menus, onde está a listinha e onde estão as fichas de ajustes. Esse reconhecimento é a base de tudo que vem depois: girar o mundo, mexer nos objetos e, mais para frente, montar o próprio objeto. Quem conhece o lugar trabalha sem medo.`,
  materiais: [
    `Computadores com o Blender já aberto na tela inicial padrão (com o cubo no centro)`,
    `Projetor ou TV grande com a tela do professor espelhada, para mostrar onde clicar`,
    `Imagem grande da tela do Blender impressa ou no slide, com as partes destacadas em cores`,
    `Etiquetas/adesivos coloridos para as crianças colarem nomes nas partes (atividade no papel)`,
    `Cartão-mapa simples por criança: desenho da tela com espaços em branco para os nomes`,
    `Exemplo pronto: um arquivo .blend salvo com dois ou três objetos, para mostrar a listinha cheia`,
    `Lápis de cor e cola para a atividade do mapa da tela`,
  ],
  conceitosChave: [
    `Viewport 3D — o palco no meio da tela, onde o cubo aparece e onde construímos os objetos.`,
    `Menus de cima — a fileira de palavras no topo (como Arquivo, Editar) onde ficam os comandos.`,
    `Painel — um pedaço da tela com botões; o Blender tem vários painéis ao redor do palco.`,
    `Outliner — a listinha do lado direito que mostra o nome de tudo que existe na cena.`,
    `Properties — as "fichas" cheias de abas e botões para ajustar as coisas, do lado direito.`,
    `Timeline — a linha do tempo embaixo, que mostra os momentos do filme (usaremos depois).`,
    `Cena — o mundo do Blender onde ficam o cubo, a luz e a câmera, todos juntos no palco.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender para dar esta aula: precisa só conhecer o nome de cinco regiões da tela e onde elas ficam. Abra o Blender e, na tela inicial, clique fora da janelinha de boas-vindas (clique em qualquer ponto cinza) para ela sumir. Pronto, aparece a tela padrão com um cubo no meio.

Memorize estas cinco regiões: (1) Viewport 3D — a grande área central com o cubo, a grade do chão e a luz; é o "palco". (2) Menus de cima — a barra fininha no topo com as palavras em inglês: "File" (Arquivo), "Edit" (Editar), "Render", "Window", "Help". (3) Outliner — o quadradinho no canto superior direito que mostra uma listinha: "Camera", "Cube", "Light". (4) Properties — o painel logo abaixo do Outliner, no canto inferior direito, cheio de iconezinhos verticais (as abas). (5) Timeline — a faixa comprida embaixo, com números e um traço azul. Saber só isso já garante a aula inteira.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Em roda, relembre a aula 1 perguntando "o que é o Blender?". Espere respostas como "é onde a gente faz coisas em 3D". Mostre no projetor o Blender aberto e diga: "Hoje vamos conhecer cada cantinho desta tela, como quem entra numa casa nova." Faça as crianças olharem a tela toda por dez segundos em silêncio e digam uma coisa que veem (o cubo, botões, palavras).

Conteúdo novo guiado (15 min): No projetor, aponte uma região de cada vez e dê o nome com uma analogia. Comece pelo centro: passe o mouse sobre o cubo e diga "este é o palco, o Viewport 3D". Suba para o topo e clique em "File" (Arquivo) só para mostrar que abre uma listinha de comandos; aperte "Esc" para fechar sem mexer. Mostre o canto superior direito e leia a listinha do Outliner em voz alta: "Camera, Cube, Light". Logo abaixo, mostre as Properties e passe o mouse pelas abas verticais (sem clicar muito). Por fim, aponte a Timeline lá embaixo. Repita os cinco nomes duas vezes com a turma respondendo junto.

Mão na massa (25 min): Agora cada criança no seu computador. Peça, um comando de cada vez: "Coloque o dedo na tela em cima do palco, o Viewport 3D." "Agora ache as palavras de cima, os menus." "Ache a listinha do lado, o Outliner — quem acha a palavra Cube?" Caminhe pela sala conferindo. Depois entregue o cartão-mapa de papel e os adesivos: a criança cola o nome certo em cada parte do desenho. Termine deixando cada um clicar uma vez em "Cube" no Outliner e ver o cubo ficar com uma borda laranja (selecionado) — é a primeira vitória de clicar no lugar certo.

Desafio e compartilhar (10 min): Faça o jogo "Onde Fica?". Você fala um nome ("Outliner!", "palco!", "menus de cima!") e as crianças apontam na tela o mais rápido que conseguem. Quem aponta certo ganha um joinha. Para fechar, cada criança diz para o colega do lado uma parte da tela que aprendeu e mostra onde fica.

## Como explicar para crianças

Use a analogia da casa: a tela do Blender é uma casa, e cada cômodo tem um nome. O Viewport 3D é a "sala de brincar" (o palco), os menus de cima são a "prateleira de ferramentas", o Outliner é a "lista de quem mora na casa" e as Properties são as "fichas de cada brinquedo". Repita os nomes como uma musiquinha. Sempre que apontar, peça que repitam em voz alta — ouvir o nome ajuda a lembrar.

## Erros comuns e como ajudar

A criança clica e arrasta sem querer e o painel some ou muda de tamanho: aperte juntos "Ctrl + Z" (desfazer) e, se preciso, vá em "File" (Arquivo) menu "Defaults" e "Load Factory Settings" para voltar ao normal. A criança gira o cubo sem querer: lembre que hoje só apontamos e clicamos uma vez, não arrastamos. Algumas confundem Outliner com Properties por ficarem grudados no mesmo canto: mostre que o Outliner é a listinha de palavras e as Properties são as abas com iconezinhos. Quem ainda não lê em inglês: leia os nomes junto e use sempre o apelido em português (palco, listinha, fichas).`,
  exercicios: [
    {
      titulo: `Caça aos cantinhos da tela`,
      tipo: `Roda de observação`,
      tempo: `6 minutos`,
      guiaProfessor: `Com o Blender no projetor, peça que as crianças observem a tela inteira por alguns segundos e digam, uma de cada vez, uma parte que veem. Não corrija ainda; só vá nomeando junto: "isso é o palco", "isso são os menus". O objetivo é abrir o olhar antes de decorar nomes.`,
      atividade: `Olhe a tela do Blender no projetor e diga uma coisa que você está vendo: pode ser o cubo, um botão, uma palavra ou a listinha do lado.`,
      gabarito: `A criança aponta e descreve qualquer região real da tela. Acerto = perceber que a tela tem partes diferentes. Exemplos válidos: "tem um cubo no meio", "tem palavras lá em cima", "tem uma lista do lado". Não existe resposta errada nesta observação inicial.`,
    },
    {
      titulo: `Mostre o palco 3D`,
      tipo: `Prática no computador`,
      tempo: `5 minutos`,
      guiaProfessor: `No computador de cada criança, peça que coloquem o cursor do mouse em cima da grande área central com o cubo. Explique que esse é o Viewport 3D, o palco onde tudo acontece. Confira passando pela sala. Cuidado para não arrastarem; só posicionar o mouse.`,
      atividade: `No seu computador, leve a setinha do mouse para o meio da tela, em cima do cubo. Essa parte grande do meio tem um nome: Viewport 3D, o nosso palco.`,
      gabarito: `O cursor fica sobre a área central com o cubo e a grade do chão. Acerto = a criança identifica o palco no centro e repete o nome "Viewport 3D" ou "palco". Erro comum: apontar para os painéis dos lados em vez do meio; mostre que o palco é a parte maior, com o cubo.`,
    },
    {
      titulo: `Achei o cubo na listinha!`,
      tipo: `Prática no Outliner`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o Outliner no canto superior direito e leia a listinha: "Camera, Cube, Light". Peça que cada criança ache a palavra "Cube" e clique uma vez nela. O cubo no palco fica com uma borda laranja (selecionado). Essa é a ponte entre a listinha e o palco.`,
      atividade: `Olhe a listinha no canto de cima do lado direito (o Outliner). Ache a palavra "Cube" e clique uma vez nela. Veja o cubo do palco ficar com uma bordinha laranja.`,
      gabarito: `A criança clica em "Cube" no Outliner e o cubo aparece selecionado (contorno laranja) no Viewport. Acerto = ligar o nome na lista ao objeto no palco. Erro comum: clicar em "Camera" ou "Light"; relembre que cube é o cubo, e mostre o contorno mudando.`,
    },
    {
      titulo: `Mapa da tela com adesivos`,
      tipo: `Atividade no papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue o cartão-mapa (desenho da tela com espaços em branco) e os adesivos com os nomes: Viewport 3D, Menus, Outliner, Properties, Timeline. A criança cola cada nome no lugar certo. Quem não lê, você lê o adesivo e ela escolhe onde colar olhando o computador como apoio.`,
      atividade: `No seu mapa de papel, cole cada adesivo no lugar certo: o palco (Viewport 3D) no meio, os menus em cima, a listinha (Outliner) e as fichas (Properties) no lado direito, e a linha do tempo (Timeline) embaixo.`,
      gabarito: `Os cinco adesivos nas posições corretas: Viewport 3D no centro, Menus no topo, Outliner e Properties à direita, Timeline embaixo. Acerto = pelo menos quatro dos cinco no lugar. Erro comum: trocar Outliner e Properties, que ficam juntos à direita; aceite e corrija mostrando a listinha versus as abas.`,
    },
    {
      titulo: `Jogo "Onde Fica?"`,
      tipo: `Desafio final em turma`,
      tempo: `7 minutos`,
      guiaProfessor: `Jogo de velocidade. Você fala o nome de uma região e as crianças apontam na própria tela o mais rápido possível. Vá aumentando o ritmo e misturando os apelidos em português com os nomes em inglês. Dê um joinha para quem aponta certo. Termine com cada criança ensinando uma parte ao colega do lado.`,
      atividade: `Quando o professor falar o nome de uma parte da tela — "palco!", "menus de cima!", "Outliner!", "fichas!", "linha do tempo!" — aponte bem rápido onde ela fica no seu computador.`,
      gabarito: `A criança aponta corretamente cada região conforme é chamada. Acerto = acertar a maioria dos nomes com rapidez. Exemplo: ao ouvir "Outliner!", aponta a listinha do canto superior direito; ao ouvir "palco!", aponta o centro com o cubo. Confusão entre Properties e Outliner é normal e se resolve repetindo o jogo.`,
    },
  ],
};
