import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Jogo Pronto para Jogar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança finaliza seu jogo 2D com arte própria, testa para ver se está funcionando e apresenta sua criação para os colegas em uma mostra de games.`,
  descricao: `Esta é a última aula do mês e o grande dia da turma: cada aluno vai dar os últimos retoques no jogo que construiu durante as quatro semanas e mostrar sua criação para os amigos. É um dia de festa e orgulho, não de aprender muita coisa nova. O foco é deixar o jogo redondo, testar bastante e celebrar tudo o que cada criança conseguiu fazer.

Ao longo do mês, os alunos transformaram desenhos em sprites, criaram um personagem que anda na tela, espalharam pontos para coletar, adicionaram vidas e uma tela de vitória, colocaram inimigos para desviar e ainda puseram sons que dão vida ao jogo. Agora tudo isso vira um jogo de verdade que dá para jogar do começo ao fim. Finalizar é tão importante quanto criar: um jogo só fica completo quando alguém consegue jogar sem travar, sem se perder e sentindo que valeu a pena.

Nesta aula o professor conduz uma rodada final de testes e pequenos ajustes (um som que faltou, um inimigo no lugar errado, a tela de vitória que não aparecia) e depois organiza uma Mostra de Games, em que cada criança senta na cadeira do criador, conta em poucas palavras como é o jogo dela e deixa um colega jogar. O objetivo emocional é tão grande quanto o técnico: as crianças precisam sentir que terminaram algo de verdade e que são capazes de criar jogos.

Por ser uma aula de fechamento, o ritmo é leve e acolhedor. Erros viram oportunidades de conserto rápido, e cada apresentação termina com palmas. O professor deve garantir que ninguém fique de fora e que todos os jogos sejam testados antes da mostra, para que nenhuma criança passe pela frustração de apresentar algo quebrado.`,
  materiais: [
    `Computadores com Construct 3 já aberto e o projeto de cada aluno carregado (o jogo do mês de cada criança).`,
    `Projetor ou TV grande conectada ao computador do professor, para a Mostra de Games.`,
    `Um projeto de exemplo já finalizado e funcionando, para o professor mostrar como fica um jogo pronto.`,
    `Fones de ouvido ou caixinhas de som, para ouvir os efeitos sonoros sem bagunçar a sala.`,
    `Lista de checagem impressa e ilustrada (personagem anda, pontos somem, inimigo aparece, tela de vitória, som toca) para cada aluno marcar.`,
    `Adesivos ou carimbos de "Jogo Pronto" e crachás de "Criador de Games" para premiar cada criança.`,
    `Folhas e lápis de cor para a atividade de cartaz do jogo.`,
  ],
  conceitosChave: [
    `Finalizar — dar os últimos ajustes para o jogo ficar pronto, igual a colocar a cobertura no bolo no fim.`,
    `Testar — jogar o próprio jogo do começo ao fim para ver se está tudo funcionando antes de mostrar.`,
    `Botão Preview — o botão de "play" (triângulo no alto) que abre o jogo numa janela para você jogar de verdade.`,
    `Bug — quando alguma coisa do jogo não funciona como devia, tipo um erro escondido que a gente precisa caçar e consertar.`,
    `Mostra de Games — o momento em que cada criança apresenta e deixa os colegas jogarem o seu jogo.`,
    `Criador de Games — quem inventa e monta um jogo; hoje cada aluno é um criador de games de verdade.`,
    `Apresentar — contar para os outros, em poucas palavras, como é o seu jogo e o que dá para fazer nele.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Esta aula encerra um projeto de quatro semanas. Tecnicamente, ela é a mais simples do mês: quase nada novo é criado. O trabalho é testar, corrigir pequenos problemas e apresentar. Em Construct 3, tudo gira em torno de um botão: o Preview, o triângulo de "play" no canto superior da tela. Clicar nele abre o jogo numa nova aba ou janela do navegador, onde você joga de verdade usando o teclado. É assim que se testa qualquer jogo no Construct 3.

Você precisa saber abrir o projeto de cada aluno. Os projetos ficam salvos na nuvem ou no computador (menu Menu, no canto superior esquerdo, opção Project ou Recent). Antes da aula, abra e teste cada jogo você mesmo, para já saber quais têm problemas. Os ajustes mais comuns são: arrastar um objeto que ficou fora do layout, religar um som que não toca, ou reposicionar um inimigo. Esses consertos são feitos no Layout (a tela visual onde ficam os objetos) e na Event Sheet (a folha de regras com os blocos de eventos). Você não vai criar lógica nova; no máximo conserta a existente.

Lembre que o objetivo central hoje é emocional: cada criança precisa terminar a aula sentindo orgulho. Garanta que todo jogo seja jogável antes da mostra.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): reúna a turma perto do projetor. Mostre o jogo de exemplo finalizado e jogue na frente deles. Diga: "Hoje é o dia de deixar o jogo de vocês prontinho e mostrar para os amigos!" Relembre rapidinho o que cada um já colocou no jogo (personagem, pontos, vidas, inimigos, som).

Conteúdo novo guiado (15 min): no seu computador projetado, ensine a testar. Clique no botão Preview (o triângulo no alto da tela). O jogo abre numa janela. Jogue do começo até a tela de vitória, narrando: "Estou testando! O personagem anda? Os pontos somem? O som toca? A vitória aparece?" Mostre a lista de checagem e explique que cada um vai testar o próprio jogo marcando os itens.

Mão na massa (25 min): cada aluno vai ao seu computador com o projeto aberto. Eles clicam no Preview, jogam o próprio jogo e marcam a lista. Circule pela sala. Quando achar um problema, conserte junto com a criança com passos curtos: por exemplo, fechar a janela de Preview, voltar ao Layout, clicar e arrastar o objeto para o lugar certo, e testar de novo no Preview. Termine garantindo que cada jogo chega ao fim sem travar.

Desafio + compartilhar (10 min): comece a Mostra de Games. Um por vez, conecte o jogo da criança ao projetor (ou leve a turma até o computador dela). O criador diz uma frase sobre o jogo e deixa um colega jogar por meia partida. Todos batem palmas e o criador ganha o crachá de "Criador de Games".

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia do bolo: "A gente fez a massa, o recheio e a cobertura nas outras aulas. Hoje a gente só enfeita por cima e prova para ver se ficou gostoso!" Testar é "provar o jogo". O botão Preview é "o botão mágico de jogar". Um bug é "um errinho travesso que se escondeu; vamos caçar ele juntos!". Apresentar é "mostrar sua obra de arte". Fale sempre que terminar um jogo é coisa de gente grande e que eles conseguiram.

## Erros comuns e como ajudar

As crianças costumam querer adicionar coisas novas no último dia ("quero outro inimigo!"). Acolha, mas redirecione: "Hoje a gente deixa pronto; ideias novas a gente guarda para o próximo jogo." Outra confusão é fechar o projeto sem querer ou mexer demais no Layout; deixe os projetos travados visualmente pedindo que toquem só onde você indicar. Algumas ficam tímidas para apresentar; ofereça apresentar junto, segurando a fala por elas. Se um jogo estiver muito quebrado, conserte você rapidinho antes da mostra para a criança não se frustrar. E sempre termine cada apresentação com palmas, sem comparar jogos entre si.`,
  exercicios: [
    {
      titulo: `Provando o Jogo com o Botão Mágico`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor onde fica o botão Preview (o triângulo de play no alto). Diga que é o botão mágico que abre o jogo para jogar de verdade. Peça que cada criança vá ao seu computador, ache o botão e clique.`,
      atividade: `Cada aluno clica no botão Preview do seu projeto, espera o jogo abrir na janela nova e joga por um minutinho, movendo o personagem com as setas do teclado.`,
      gabarito: `O jogo abre numa janela nova e o personagem se mexe quando a criança aperta as setas. Se o personagem anda na tela do Preview, o aluno encontrou e usou o botão certo.`,
    },
    {
      titulo: `Lista de Checagem do Meu Jogo`,
      tipo: `jogo + checklist`,
      tempo: `12 min`,
      guiaProfessor: `Entregue a lista ilustrada (personagem anda, pontos somem, inimigo aparece, tela de vitória, som toca). Explique que eles vão jogar do começo ao fim e marcar um certinho em cada coisa que funcionar. Circule e ajude a consertar o que faltar.`,
      atividade: `O aluno joga seu jogo no Preview do início até a tela de vitória e marca na lista cada item que funcionou. O que não funcionar, ele chama o professor para consertar juntos.`,
      gabarito: `Ao final, todos os cinco itens da lista estão marcados e o jogo roda do começo ao fim sem travar. Se algum item não foi marcado, o professor ajudou a corrigir e o aluno remarcou.`,
    },
    {
      titulo: `Caçada ao Errinho Travesso`,
      tipo: `desafio na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Explique que às vezes um errinho (bug) se esconde no jogo. Mostre um exemplo no seu jogo de exemplo: um objeto fora do lugar ou um som desligado. Mostre como voltar ao Layout, clicar e arrastar o objeto, e testar de novo no Preview.`,
      atividade: `Cada criança procura um errinho no próprio jogo (algo que não está certo) e, com o professor, conserta: arrasta o objeto para o lugar, ou pede ajuda para religar o som, e testa de novo.`,
      gabarito: `O problema encontrado some depois do conserto: ao testar de novo no Preview, a coisa que estava errada agora funciona. Caçar e consertar pelo menos um errinho conta como acerto.`,
    },
    {
      titulo: `O Cartaz do Meu Jogo`,
      tipo: `desenho / papel`,
      tempo: `10 min`,
      guiaProfessor: `Distribua folhas e lápis de cor. Peça que cada criança desenhe um cartaz do seu jogo: o personagem, um inimigo e o nome do jogo. Diga que é o pôster para convidar os amigos a jogarem na Mostra de Games.`,
      atividade: `O aluno desenha num cartaz o personagem principal e um inimigo do seu jogo, e escreve (ou pede ajuda para escrever) o nome do jogo bem grande.`,
      gabarito: `O cartaz mostra pelo menos o personagem e o nome do jogo, combinando com o que aparece no jogo de verdade. Se o desenho representa elementos reais do jogo da criança, está certo.`,
    },
    {
      titulo: `Mostra de Games: Eu Sou Criador!`,
      tipo: `roda de conversa / apresentação`,
      tempo: `12 min`,
      guiaProfessor: `Organize a turma em roda perto do projetor. Um por vez, conecte o jogo da criança. Ajude-a a dizer uma frase ("Meu jogo chama... e você precisa pegar..."). Deixe um colega jogar meia partida. Todos batem palmas e o criador recebe o crachá.`,
      atividade: `Cada aluno apresenta seu jogo dizendo o nome dele e o objetivo numa frase, e deixa um colega jogar por meia partida enquanto a turma assiste e torce.`,
      gabarito: `O aluno consegue dizer ao menos o nome e o objetivo do jogo, e um colega joga sem travar. Toda criança apresentar e receber o crachá de "Criador de Games" significa que a mostra deu certo.`,
    },
  ],
};
