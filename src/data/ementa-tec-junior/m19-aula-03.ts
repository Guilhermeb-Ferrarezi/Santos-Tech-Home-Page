import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Voltando ao Maya: Nosso Estúdio 3D",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Reambientar as crianças no Maya, relembrando como navegar pela cena em 3D (girar, dar zoom e mover a câmera) e como criar as formas básicas cubo, esfera e cilindro.`,
  descricao: `Nesta aula as crianças voltam ao Maya, o nosso estúdio 3D, depois de algumas semanas planejando o jogo no papel. A ideia é leve e brincalhona: antes de construir o cenário de verdade, todo mundo precisa lembrar onde fica cada coisa na tela e como passear pela cena com a câmera. É como entrar de novo numa sala de brinquedos que ficou um tempo fechada: primeiro a gente acende a luz, olha em volta e relembra onde estão as caixas de peças.

O foco principal é a navegação em 3D. No Maya, a câmera é como os nossos olhos flutuando dentro do mundo do jogo. Com a tecla Alt do teclado mais o mouse, a criança aprende a girar ao redor de um objeto (orbitar), a chegar mais perto ou mais longe (zoom) e a deslizar a câmera para os lados (mover ou pan). Esses três movimentos são a base de tudo. Quem não sabe mexer a câmera fica perdido, então vale gastar tempo aqui com calma e muita repetição em forma de brincadeira.

A segunda parte relembra as formas básicas, chamadas de primitivas: o cubo, a esfera e o cilindro. Essas formas simples são os tijolinhos do nosso cenário. Uma casa pode começar como um cubo, uma bola de neve como uma esfera e um tronco de árvore como um cilindro. As crianças vão aprender de novo o caminho do menu para criar cada uma e brincar de adivinhar com que forma cada objeto do mundo real se parece.

Importante: esta aula é só de reaquecimento e exploração. Ainda não construímos o chão nem as paredes do cenário (isso vem nas próximas aulas). Aqui o objetivo é que a criança se sinta confortável e confiante com o Maya de novo, rindo dos erros e descobrindo que mexer no 3D é divertido.`,
  materiais: [
    `Computadores com o Maya já aberto em uma cena nova e vazia, um por criança ou em dupla`,
    `Projetor ou TV grande ligada no computador do professor para todos verem a demonstração`,
    `Mouse com três botões (botão do meio funcionando) em cada computador, essencial para navegar`,
    `Cena de exemplo pronta com um cubo, uma esfera e um cilindro já criados para mostrar`,
    `Cartões impressos com fotos de objetos reais (casa, bola, lata, dado) para a brincadeira das formas`,
    `Folha de apoio com o desenho das três teclas mágicas: Alt + botão esquerdo, do meio e direito`,
  ],
  conceitosChave: [
    `Cena 3D — o mundo dentro do computador onde a gente constrói o jogo, com altura, largura e profundidade.`,
    `Câmera — são os nossos olhos voando dentro da cena; ela mostra para onde estamos olhando.`,
    `Orbitar — girar a câmera ao redor de um objeto, como andar em volta de um bolo para ver todos os lados.`,
    `Zoom — chegar mais perto ou mais longe das coisas, como aproximar ou afastar uma lupa.`,
    `Mover a câmera (pan) — deslizar a tela para os lados, para cima ou para baixo, sem girar nada.`,
    `Primitiva — uma forma básica pronta do Maya, como cubo, esfera e cilindro, os tijolinhos do cenário.`,
    `Viewport — a janela grande onde a gente vê a cena 3D e mexe na câmera.`,
  ],
  treinamento: `## O que o professor precisa saber

O Maya é um programa grande, mas hoje você só precisa de duas habilidades: navegar com a câmera e criar três formas. A tela principal tem ao centro a janela grande chamada viewport, onde aparece a cena. No alto fica a barra de menus; à esquerda, uma coluna de ícones; embaixo, a linha do tempo (que hoje ignoramos). O segredo da navegação é a tecla Alt segurada junto com o mouse. Você não precisa decorar mais nada. Antes da aula, abra uma cena nova e teste você mesmo os três movimentos até sair natural, porque você vai demonstrar no projetor.

## Passo a passo da aula

Aquecimento (10 min): receba a turma e pergunte o que lembram do Maya do Ano 1. Mostre no projetor a cena de exemplo com cubo, esfera e cilindro já prontos. Diga: hoje vamos relembrar como passear dentro desse mundo e como criar essas formas.

Conteúdo novo guiado (15 min): demonstre a navegação devagar no projetor. Para orbitar, segure a tecla Alt e o botão esquerdo do mouse e arraste; a câmera gira em volta. Para dar zoom, segure Alt e o botão direito e arraste para a frente e para trás (ou role a rodinha do meio). Para mover (pan), segure Alt e o botão do meio (a rodinha apertada) e arraste. Repita cada movimento três vezes nomeando em voz alta: girar, perto-longe, deslizar. Depois mostre como criar formas: vá no menu Create, escolha Polygon Primitives, depois Cube. Repita para Sphere e Cylinder. A forma nasce no centro da cena.

Mão na massa (25 min): cada criança na sua máquina. Primeiro só navegação: peça para orbitar em volta do cubo, depois dar zoom até ele ficar enorme, depois afastar. Passe nas mesas ajudando as mãozinhas a segurar Alt. Em seguida, peça para criar um cubo, uma esfera e um cilindro pelo menu Create. Deixe brincarem livremente girando a câmera para ver as formas por cima, por baixo e por trás.

Desafio e compartilhar (10 min): mostre os cartões com fotos (casa, bola, lata) e peça que cada criança crie a forma que mais combina e gire a câmera para mostrar para a turma. Termine elogiando quem conseguiu navegar sem se perder.

## Como explicar para crianças

Use sempre analogias do corpo e de brincar. Diga que a câmera são os nossos olhos voando como um passarinho dentro do jogo. Orbitar é como andar de mãos dadas em volta de um bolo de aniversário para ver as velinhas de todos os lados. Zoom é como chegar bem pertinho para cheirar uma flor e depois dar um passo para trás. Mover a câmera é como deslizar um quadro na parede sem virar. Chame Alt de tecla mágica: enquanto ela está apertada, o mouse vira controle remoto da câmera. Para as formas, fale dos tijolinhos: o cubo é um dado, a esfera é uma bolinha, o cilindro é uma latinha.

## Erros comuns e como ajudar

O erro número um é soltar a tecla Alt no meio do movimento e a câmera travar; lembre sempre apertar e segurar até terminar de arrastar. Muitas crianças confundem os botões: combine apelidos, botão esquerdo gira, rodinha do meio desliza, botão direito aproxima. Outro erro é a câmera fugir para longe e a criança achar que perdeu tudo; ensine a apertar a tecla F (com a forma selecionada) para a câmera voltar e centralizar no objeto, é o botão de resgate. Algumas crianças clicam fora do menu e somem com tudo; mostre que basta clicar de novo em Create. Se o botão do meio não funcionar, use a rodinha do mouse para o zoom como alternativa. Por fim, mãos pequenas têm dificuldade de segurar Alt e mexer o mouse ao mesmo tempo; deixe usarem as duas mãos, uma na tecla e outra no mouse.`,
  exercicios: [
    {
      titulo: `Acendendo as luzes do estúdio`,
      tipo: `Aquecimento em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça oralmente com a turma reunida diante do projetor mostrando a cena de exemplo. Aceite qualquer lembrança, sem cobrar nomes técnicos.`,
      atividade: `Pergunte às crianças: o que vocês lembram do Maya? Para que serve esse programa? Aponte na tela o que é a cena 3D e a câmera.`,
      gabarito: `O Maya é o nosso estúdio 3D, onde construímos coisas com altura, largura e profundidade. A cena 3D é o mundo dentro do computador e a câmera são os nossos olhos voando dentro dele. Respostas variam; valorize qualquer participação.`,
    },
    {
      titulo: `As três teclas mágicas da câmera`,
      tipo: `Prática guiada individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre primeiro no projetor, depois cada criança repete na sua máquina com o cubo de exemplo na tela. Passe nas mesas ajudando a segurar a tecla Alt.`,
      atividade: `Em volta do cubo, faça os três movimentos: orbitar (Alt + botão esquerdo), dar zoom (Alt + botão direito ou rodinha) e mover (Alt + botão do meio). Diga em voz alta o nome de cada um.`,
      gabarito: `Orbitar gira a câmera em volta do objeto; zoom aproxima e afasta; mover desliza a tela para os lados. Em todos é preciso segurar a tecla Alt junto com o mouse. Se a câmera sumir, aperte F para voltar ao objeto.`,
    },
    {
      titulo: `Criando os três tijolinhos`,
      tipo: `Mão na massa`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o caminho do menu uma vez no projetor e deixe as crianças repetirem. Lembre que a forma nasce no centro da cena, então pode ser preciso dar zoom para vê-la.`,
      atividade: `Crie um cubo, uma esfera e um cilindro usando o menu Create, depois Polygon Primitives, e escolhendo Cube, Sphere e Cylinder. Gire a câmera para ver cada forma.`,
      gabarito: `O caminho é Create, Polygon Primitives e então a forma desejada (Cube, Sphere ou Cylinder). As três formas devem aparecer na cena. O cubo parece um dado, a esfera uma bolinha e o cilindro uma latinha.`,
    },
    {
      titulo: `Detetive das formas`,
      tipo: `Desafio de associação`,
      tempo: `7 minutos`,
      guiaProfessor: `Use os cartões impressos com fotos de objetos reais. Mostre um cartão por vez e peça que a criança crie no Maya a forma que mais combina e gire a câmera para mostrar.`,
      atividade: `Olhe o cartão (por exemplo uma casa, uma bola ou uma lata) e descubra qual forma básica combina. Crie essa forma no Maya e gire a câmera para apresentá-la.`,
      gabarito: `A casa combina com o cubo, a bola com a esfera, a lata e o tronco com o cilindro, o dado com o cubo. Aceite respostas bem justificadas, pois muitos objetos misturam formas.`,
    },
    {
      titulo: `Guia turístico do meu mundo 3D`,
      tipo: `Apresentação e fechamento`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada criança mostra a sua tela para a turma. Incentive a usarem as três teclas mágicas durante a apresentação. Elogie a navegação tranquila, não a perfeição.`,
      atividade: `Seja o guia turístico da sua cena: gire a câmera em volta das suas formas, dê um zoom para chegar perto de uma delas e deslize a câmera para o lado, narrando o que está fazendo.`,
      gabarito: `A criança deve demonstrar os três movimentos da câmera (orbitar, zoom e mover) nomeando cada um, e mostrar pelo menos uma forma básica que criou. O objetivo é navegar com confiança, sem se perder na cena.`,
    },
  ],
};
