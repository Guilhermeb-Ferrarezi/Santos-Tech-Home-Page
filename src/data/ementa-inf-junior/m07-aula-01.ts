import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "O Mapa da Planilha",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer a planilha como um grande tabuleiro quadriculado e descobrir que cada quadradinho, chamado célula, é um lugar para guardar uma coisa.`,
  descricao: `Nesta primeira aula do mês, as crianças vão abrir o programa de planilhas (Excel ou Google Planilhas) e olhar para a tela como quem olha para um mapa novo. A grande ideia é simples e poderosa: a planilha é um tabuleiro cheio de quadradinhos. Cada quadradinho é um lugar especial onde podemos guardar uma palavra, um número ou um desenho de letrinhas. Antes de escrever qualquer coisa, a criança precisa enxergar esse tabuleiro e entender que ele é organizado e tem regras divertidas.

O foco da aula é a exploração visual. As crianças vão descobrir três palavras mágicas: célula (o quadradinho), linha (os quadradinhos deitados, um do lado do outro) e coluna (os quadradinhos em pé, um embaixo do outro). Elas vão perceber que as linhas têm números na lateral esquerda e as colunas têm letras em cima. Não precisamos ainda ensinar endereços nem digitar texto — isso vem nas próximas aulas. Aqui, o objetivo é olhar, apontar e clicar.

A atividade central é guiada e bem concreta: o professor mostra no projetor e as crianças repetem no computador. Ao clicar em um quadradinho, ele fica destacado com uma borda mais grossa e colorida, como se acendesse uma luz. Esse efeito visual encanta as crianças e ensina, sem palavras difíceis, que cada célula é selecionável, ou seja, dá para escolher uma de cada vez. É um momento de descoberta e de muitos "olha o que aconteceu!".

Como os alunos têm de 5 a 9 anos e ainda estão desenvolvendo a leitura e a escrita, tudo aqui é demonstração, apontar com o dedo na tela e mão na massa. Use analogias do mundo deles: caça ao tesouro, tabuleiro de jogo, prédio com muitos apartamentos, papel quadriculado de matemática. No fim, cada criança deve sair sabendo apontar uma célula, uma linha e uma coluna, mesmo que ainda não saiba o nome técnico de cor.`,
  materiais: [
    `Computadores ligados, um por criança, com o Excel ou o Google Planilhas já aberto em uma planilha em branco (deixe pronto antes da aula para não perder tempo).`,
    `Projetor ou TV grande conectada ao computador do professor, para mostrar cada passo.`,
    `Uma planilha-exemplo em branco no computador do professor, com o zoom aumentado para os quadradinhos ficarem bem grandes na tela.`,
    `Folhas de papel quadriculado e lápis de cor para a atividade no papel.`,
    `Cartões ou plaquinhas com as palavras CÉLULA, LINHA e COLUNA, com um desenho ao lado de cada uma.`,
    `Adesivos ou carimbos de carinha para premiar quem completar os desafios.`,
    `Opcional: um tabuleiro de jogo de verdade (xadrez, dama ou batalha naval) para mostrar a ideia do quadriculado no mundo real.`,
  ],
  conceitosChave: [
    `Planilha — uma folha gigante cheia de quadradinhos, como um tabuleiro de jogo onde a gente guarda coisas.`,
    `Célula — cada quadradinho da planilha; é uma casinha onde cabe uma palavra ou um número.`,
    `Linha — os quadradinhos deitados, um do lado do outro, como uma fileira de carrinhos; cada linha tem um número na lateral esquerda.`,
    `Coluna — os quadradinhos em pé, um embaixo do outro, como uma torre de blocos; cada coluna tem uma letra lá em cima.`,
    `Selecionar — clicar em um quadradinho para ele "acender", ficando com uma borda mais grossa e colorida.`,
    `Cabeçalho — a faixa cinza com as letras em cima e os números na lateral, que ajuda a achar cada quadradinho.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em planilhas para dar esta aula. Basta entender três ideias e saber mostrá-las na tela. Uma planilha é uma grade de quadradinhos. Cada quadradinho se chama célula. Os quadradinhos enfileirados na horizontal formam uma linha (numerada 1, 2, 3 na lateral esquerda). Os quadradinhos empilhados na vertical formam uma coluna (com letras A, B, C no topo). Quando você clica em uma célula, ela fica com uma borda destacada — esse é o coração da aula. No Excel, abra um arquivo em branco pela tela inicial em "Pasta de trabalho em branco". No Google Planilhas, vá em planilhas.google.com e clique em "Em branco". Aumente o zoom (no Excel, controle deslizante no canto inferior direito; no Google, menu "Ver" e depois "Zoom") para os quadradinhos ficarem grandes no projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Receba as crianças e mostre um tabuleiro de jogo de verdade. Pergunte: "o que tem aqui?" Elas vão dizer "quadradinhos". Ótimo. Diga que hoje vamos achar um tabuleiro gigante dentro do computador. Mostre os computadores já com a planilha aberta e deixe que olhem a tela em silêncio por alguns segundos, só observando.

Conteúdo novo guiado (15 min): No seu computador, com o projetor ligado, aponte para a tela. Diga: "isto é uma planilha, um tabuleiro cheio de quadradinhos". Aponte um quadradinho e diga "isto é uma célula, uma casinha". Passe o dedo na horizontal e diga "isto é uma linha, olha os números aqui do lado". Passe o dedo na vertical e diga "isto é uma coluna, olha as letras aqui em cima". Agora clique em uma célula e mostre que ela "acende" com a borda mais grossa. Clique em outra. Repita devagar, nomeando célula, linha e coluna a cada vez. Levante as plaquinhas CÉLULA, LINHA e COLUNA enquanto fala.

Mão na massa (25 min): Agora é a vez delas. Peça que coloquem a mãozinha no mouse. Comande passo a passo: "cliquem em um quadradinho qualquer" e espere todos verem a luz acender. Circule pela sala ajudando quem não achou o clique. Depois: "cliquem em outro quadradinho bem longe". Em seguida brinque de comando: "achem um quadradinho lá em cima", "agora um lá embaixo", "agora um bem no cantinho". Para cada acerto, comemore. Quem terminar rápido pode contar quantos quadradinhos cabem de um lado ao outro.

Desafio e compartilhar (10 min): Lance o desafio "estátua da célula": você diz uma direção simples (cantinho de cima, meio da tela, lá embaixo) e cada criança clica numa célula daquela região e levanta a mão congelada. Depois, faça uma rodinha rápida: cada criança diz uma palavra nova que aprendeu (célula, linha ou coluna) e mostra com o dedo na própria tela. Dê um adesivo para cada um.

## Como explicar para crianças de 5 a 9 anos

Use sempre o concreto e o visual. Chame a planilha de "tabuleiro mágico" e a célula de "casinha" ou "quadradinho". Compare a linha com uma fileira de formiguinhas andando de lado e a coluna com uma torre de blocos empilhados. Diga que clicar é "acender a luz da casinha". Aponte muito com o dedo, tanto na sua tela quanto deixando que elas apontem na delas. Fale pouco e mostre muito: a cada frase, faça o movimento na tela. Repita as três palavras-chave várias vezes, sempre ligadas ao gesto.

## Erros comuns e como ajudar

Muitas crianças dão dois cliques rápidos e a célula entra no modo de digitar (aparece o cursor piscando). Mostre como sair apertando a tecla Esc e peça um clique só, calminho. Outras seguram o botão e arrastam, selecionando vários quadradinhos de uma vez; explique "clique e solte, como apertar uma campainha". Algumas confundem linha com coluna — reforce com o gesto: deitado é linha, em pé é coluna. Se alguém clicar fora da grade ou sumir com a tela, recarregue o arquivo em branco. Tenha paciência: o objetivo é só explorar e se encantar, não acertar nomes ainda.`,
  exercicios: [
    {
      titulo: `Acendendo as casinhas`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Comande pausadamente e espere todos acompanharem antes de seguir. Circule confirmando que cada criança viu a célula destacar. Não cobre nomes técnicos; cobre o gesto certo de um clique só.`,
      atividade: `Peça que cada criança clique em um quadradinho qualquer e observe a borda ficar mais grossa, como uma luz acesa. Depois, peça para clicar em outro quadradinho bem diferente e ver a luz "pular" de lugar. Repitam três vezes, em lugares variados da tela.`,
      gabarito: `Sucesso quando a criança clica uma única vez e o quadradinho fica destacado com a borda colorida, e consegue mudar a seleção clicando em outro lugar. Se aparecer o cursor piscando dentro da célula, ela deu clique duplo; oriente a apertar Esc e tentar com um clique só.`,
    },
    {
      titulo: `Caça ao quadradinho`,
      tipo: `jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza como uma brincadeira de comandos, em ritmo animado. Use direções simples e visuais, sem letras nem números ainda. Comemore cada acerto e ajude quem se perder mostrando na sua tela projetada.`,
      atividade: `Você dá um comando de região e as crianças clicam numa célula daquela parte da tela: "achem um quadradinho lá em cima", "agora um lá embaixo", "um do lado direito", "um bem no meio", "um no cantinho de baixo". A cada rodada, todos clicam e levantam a mão.`,
      gabarito: `Está correto quando a criança seleciona uma célula que fica, mais ou menos, na região pedida (cima, baixo, lado, meio ou canto). Não há um único quadradinho certo: qualquer um da região vale. O importante é mover a seleção pela tela de propósito.`,
    },
    {
      titulo: `Rodinha das três palavras`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente todos em círculo de frente para a tela projetada. Mostre as plaquinhas CÉLULA, LINHA e COLUNA uma de cada vez. Faça perguntas com gestos e aceite respostas apontadas, já que a leitura ainda está em desenvolvimento.`,
      atividade: `Aponte para a tela e pergunte, uma por vez: "onde está uma célula?", "me mostrem uma linha deitada", "me mostrem uma coluna em pé". Cada criança aponta com o dedo na tela ou no ar. Termine pedindo que cada uma fale uma das três palavras que mais gostou.`,
      gabarito: `Espera-se que a criança aponte um quadradinho para célula, um conjunto de quadradinhos na horizontal para linha e um conjunto na vertical para coluna. Pista para o professor: linha é deitada (fileira), coluna é em pé (torre). Vale qualquer linha ou coluna apontada corretamente, não uma específica.`,
    },
    {
      titulo: `Meu tabuleiro no papel`,
      tipo: `desenho ou papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua o papel quadriculado e os lápis de cor. Mostre seu próprio exemplo no quadro ou na tela. Ande pela sala elogiando e ajudando a contar os quadradinhos. O capricho importa mais que a perfeição.`,
      atividade: `Cada criança recebe um papel quadriculado e finge que ele é a planilha. Peça para pintar UM quadradinho de uma cor (essa é a célula acesa), depois pintar uma fileira deitada inteira de outra cor (a linha) e uma fileira em pé inteira de outra cor (a coluna).`,
      gabarito: `Correto quando há um único quadradinho pintado representando a célula, uma sequência horizontal pintada representando a linha e uma sequência vertical pintada representando a coluna, cada parte em cores diferentes. Não precisa ser grande nem perfeito; basta distinguir o quadradinho sozinho, a fileira deitada e a fileira em pé.`,
    },
    {
      titulo: `Desafio do detetive`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Este é o passo mais difícil, então faça depois que todos já dominaram o clique. Combine duas pistas para chegar mais perto de uma célula, sem usar endereços (isso fica para a próxima aula). Dê dicas e comemore bastante.`,
      atividade: `Você vira detetive e dá duas pistas juntas: "cliquem num quadradinho que esteja lá em cima E do lado esquerdo", depois "agora um que esteja embaixo E no meio", e por fim "um bem pertinho do cantinho de baixo do lado direito". As crianças clicam tentando juntar as duas pistas.`,
      gabarito: `Está certo quando a célula selecionada atende, aproximadamente, às duas pistas ao mesmo tempo (por exemplo, "em cima e à esquerda" é uma célula da região superior esquerda da tela). Aceite qualquer quadradinho daquela área. Se a criança acertar só uma pista, elogie e ajude a ajustar para a segunda. O objetivo é treinar olhar duas direções juntas, preparando para caçar células pelo endereço na Aula 2.`,
    },
  ],
};
