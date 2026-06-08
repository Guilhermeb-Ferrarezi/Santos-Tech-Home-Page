import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Eu Somo Sozinho!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Os alunos praticam a soma automática com mais confiança, selecionando os números com o mouse e usando a Autosoma para ver o total de uma lista divertida, repetindo várias vezes com valores diferentes.`,
  descricao: `Na aula passada a turma conheceu a mágica do botão Somar: descobriu que o computador soma sozinho uma coluninha de números num piscar de olhos. Hoje a gente não aprende um truque novo, a gente treina o mesmo truque até ele virar fácil. O nome da aula é "Eu Somo Sozinho!" porque o objetivo é cada criança conseguir fazer a conta automática com as próprias mãos, sem o professor segurando o mouse junto. Quanto mais a gente repete, mais a soma automática deixa de ser mágica e vira uma habilidade que a criança domina.

Para a repetição não ficar chata, a aula usa uma lista bem divertida: pode ser os pontos de um joguinho rodada a rodada, as balas que cada amigo colocou no pote, as estrelinhas que cada coleguinha ganhou na semana ou os gols de um timinho. A criança escreve uns números numa coluna, seleciona todos eles arrastando o mouse e aperta a Autosoma para ver o total aparecer logo embaixo. O coração da prática é fazer isso várias vezes, trocando os números, para perceber que funciona sempre.

A grande descoberta de hoje, além de repetir, é conferir. Depois que o total aparece, a criança troca um dos números da lista (por exemplo, em vez de 3 balas, agora são 8) e olha o total mudar sozinho na mesma hora. Esse momento é poderoso: a criança entende que o computador não só somou uma vez, ele fica de olho na lista e refaz a conta toda vez que algo muda. É a primeira sementinha da ideia de planilha esperta, que calcula sozinha, e que será o entregável do mês.

O outro reforço importante é selecionar a coluna certa. O erro mais comum nessa idade é arrastar o mouse e pegar números demais, números de menos, ou pegar a célula onde o próprio total vai aparecer. Por isso, hoje a gente treina com calma a seleção: encostar o mouse no primeiro número, segurar o botão, arrastar até o último número e só então soltar. A turma aprende a reconhecer a "moldura azul" que mostra exatamente o que foi escolhido e a conferir se ela está em volta dos números certos antes de apertar a Autosoma.`,
  materiais: [
    `Computadores ligados, um por criança, com o Excel ou o Google Planilhas já aberto numa planilha em branco e com o zoom aumentado para os números ficarem bem grandes.`,
    `Projetor ou TV grande ligada ao computador do professor, com a mesma planilha aberta, para demonstrar cada arrastar de mouse e cada clique na Autosoma.`,
    `Uma planilha-exemplo já pronta com uma listinha de pontos de um joguinho (por exemplo, rodada 1 com 5, rodada 2 com 3, rodada 3 com 7) para mostrar a soma automática funcionando.`,
    `Um potinho de verdade com balas, tampinhas ou bolinhas e alguns coleguinhas de papel, para encenar a história antes de ir para o computador.`,
    `Cartões grandes de papel com listas de números prontas (3 + 5 + 2, 4 + 4 + 4, 6 + 1 + 3...) para a turma escolher e digitar.`,
    `Folhas com uma colunazinha impressa (cinco quadradinhos em pé e um quadradão embaixo para o total) e lápis de cor para a atividade no papel.`,
    `Adesivos ou carimbos de "Eu somo sozinho!" para premiar quem conseguir fazer a soma automática sem ajuda.`,
  ],
  conceitosChave: [
    `Autosoma — é o botãozinho com o símbolo parecido com um "E" deitado que manda o computador somar os números escolhidos sozinho.`,
    `Selecionar — é encostar o mouse no primeiro número, segurar e arrastar até o último, deixando todos eles dentro de uma moldura azul.`,
    `Total — é o número grandão que aparece embaixo da lista e mostra quanto deu a soma de tudo.`,
    `Coluna de números — é a fileira de quadradinhos em pé, um número embaixo do outro, que a gente vai somar.`,
    `Conferir — é olhar de novo para ter certeza de que a moldura azul pegou os números certos antes de apertar a Autosoma.`,
    `Recalcular sozinho — é quando a gente troca um número da lista e o total muda na mesma hora, sem precisar fazer a conta de novo.`,
    `Célula do total — é o quadradinho logo embaixo da lista, o lugar onde o resultado da soma vai morar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser bom de matemática nem dominar planilhas para dar esta aula. Tudo gira em torno de três gestos que você vai repetir muitas vezes: escrever números numa coluna, selecionar esses números arrastando o mouse e apertar a Autosoma. A Autosoma é um botão que fica na barra de cima. No Excel ele está na aba Página Inicial, do lado direito, com um símbolo parecido com um "E" deitado (a letra grega sigma) e a palavra "AutoSoma". No Google Planilhas o mesmo botão tem esse símbolo e fica na barra de cima, à direita; clicando na setinha ao lado dele aparece a opção "SOMA". Localize esse botão antes da aula e teste uma vez.

A sequência que você vai ensinar é sempre a mesma. Primeiro, clique na célula logo abaixo do último número da lista (é ali que o total vai aparecer). Depois aperte a Autosoma: o programa desenha sozinho uma moldura pontilhada em volta dos números que ele acha que você quer somar. Confira se a moldura pegou a lista certa e aperte Enter. O total aparece na hora. A alternativa, que é a que mais treinamos hoje, é selecionar primeiro: encoste o mouse no primeiro número, segure o botão, arraste até o último número, solte e só então aperte a Autosoma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): sem computador, conte uma historinha com o potinho de balas. Peça que três crianças coloquem balas no pote e pergunte "quantas balas ficaram no total?". Deixe a turma contar no dedo. Depois lembre, com o projetor, que na aula passada o computador fez essa conta sozinho com a Autosoma. Diga que hoje cada um vai conseguir fazer sozinho.

Conteúdo novo guiado (15 min): no seu computador, escreva uma coluninha de pontos de joguinho (por exemplo, 5, 3 e 7, um embaixo do outro). Mostre devagar como selecionar: encoste o mouse no 5, segure, arraste até o 7 e solte, apontando a moldura azul que aparece. Em seguida aperte a Autosoma e mostre o total surgir embaixo. Faça de novo com outros números. Diga cada passo em voz alta.

Mão na massa (25 min): cada criança escreve a própria lista (pontos, balas, estrelinhas) e faz a soma automática sozinha. Peça que repita pelo menos três vezes, trocando os números a cada vez. Passe de mesa em mesa conferindo a seleção. Depois lance o desafio de conferir: "troque um número da sua lista e olhe o total". A turma vê o resultado mudar sozinho e fica encantada.

Desafio e compartilhar (10 min): proponha "o pote campeão", em que cada criança soma a própria listinha e diz o total para a turma. Faça a roda final: cada um mostra na tela a moldura azul em volta dos números certos e o total embaixo, ganhando o adesivo "Eu somo sozinho!".

## Como explicar para crianças de 5 a 9 anos

Use a história do pote de balas o tempo todo: cada número é um punhado de balas e o total é o pote cheio. Chame a seleção de "dar um abraço nos números" com o mouse, e a moldura azul de "a corda que prende só os números certos". A Autosoma é o "robô que conta por você": ele olha tudo o que está dentro da corda e fala o total. Para a parte de conferir, diga que o robô é muito esperto e "fica de olho": se você tirar ou colocar balas, ele conta tudo de novo na hora. Demonstre cada gesto no projetor antes de pedir que façam, porque nessa idade eles aprendem muito mais vendo do que ouvindo.

## Erros comuns e como ajudar

O erro mais comum é a seleção: a criança arrasta rápido demais e pega números a mais, números a menos ou pega o quadradinho do total junto. Peça que ela faça devagar, encostando no primeiro número e soltando no último, e que confira a moldura azul antes de apertar. Outro tropeço é soltar o botão do mouse no meio do caminho; oriente a segurar firme até o final. Tem também quem ponha o total no lugar errado: lembre que o total mora logo embaixo da lista. Se a criança digita letrinhas em vez de números, o robô não soma; mostre que só números entram na conta. E quando alguém somar certo mas achar pouco, proponha trocar um número e ver o total subir, reforçando que o computador recalcula sozinho.`,
  exercicios: [
    {
      titulo: `Somando os Pontos do Joguinho`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Faça junto com a turma, no projetor, bem devagar. Escreva os pontos com as crianças, mostre o "abraço" do mouse nos números e só então aperte a Autosoma. Peça que cada um confira a moldura azul antes de apertar.`,
      atividade: `A criança escreve numa coluna os pontos de três rodadas de um joguinho: 5, depois 3, depois 7. Em seguida seleciona os três números arrastando o mouse e aperta a Autosoma para ver o total embaixo.`,
      gabarito: `Acertou quem viu o total 15 aparecer logo embaixo da lista (5 mais 3 mais 7 dá 15) e quem deixou a moldura azul só em volta dos três números. Se o total deu outro valor, é só conferir se o abraço do mouse pegou números a mais ou a menos e somar de novo.`,
    },
    {
      titulo: `Quantas Balas no Pote?`,
      tipo: `Jogo`,
      tempo: `12 minutos`,
      guiaProfessor: `Use os cartões de números prontos. Cada criança sorteia um cartão (por exemplo, 4 + 4 + 4) e digita aqueles números numa coluna. Comemore cada total certo e use o pote de balas de verdade para conferir contando junto, quando der.`,
      atividade: `A criança sorteia um cartão, escreve os números do cartão um embaixo do outro como se fossem as balas de cada amigo, seleciona todos e aperta a Autosoma para descobrir quantas balas o pote tem no total.`,
      gabarito: `O total certo é a soma dos números do cartão: o cartão 4 + 4 + 4 dá 12; o cartão 6 + 1 + 3 dá 10; o cartão 3 + 5 + 2 dá 10. Confirme contando as balas de verdade ou conferindo no cartão. Se não bateu, geralmente a moldura azul pegou números errados.`,
    },
    {
      titulo: `O Total que Muda Sozinho`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o coração da aula. Depois que a criança já tem um total na tela, peça que ela clique num dos números, apague e digite outro maior. Mostre, no projetor, o total mudando na hora. Reforce que o robô "fica de olho" na lista.`,
      atividade: `Partindo de uma lista que já soma (por exemplo 2, 4 e 4, que dá 10), a criança clica no último número, troca o 4 por 8 e aperta Enter, olhando o total mudar sozinho sem apertar a Autosoma de novo.`,
      gabarito: `Correto quando o total pula de 10 para 14 sozinho ao trocar o 4 pelo 8 (2 mais 4 mais 8 dá 14), sem a criança refazer a conta. Se o total não mudou, provavelmente ela digitou em outra célula; peça que troque o número que está dentro da moldura azul.`,
    },
    {
      titulo: `Minha Listinha de Estrelinhas`,
      tipo: `Desenho / papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a folha com a colunazinha impressa (cinco quadradinhos em pé e um quadradão embaixo). Peça que a criança desenhe ou escreva quantas estrelinhas ganhou em cada dia e some no quadradão. Quem ainda não soma de cabeça pode contar nos dedos ou desenhando bolinhas.`,
      atividade: `Na folha, a criança escreve em cada quadradinho quantas estrelinhas ganhou de segunda a sexta (por exemplo 2, 1, 3, 0 e 2) e escreve no quadradão de baixo o total de estrelinhas da semana.`,
      gabarito: `Correto quando o total no quadradão é a soma de todos os dias: 2 mais 1 mais 3 mais 0 mais 2 dá 8 estrelinhas. Para conferir, basta contar todas as estrelinhas desenhadas uma a uma e ver se chega no mesmo número escrito no quadradão.`,
    },
    {
      titulo: `Desafio: O Pote Campeão`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha o desafio final e deixe as crianças resolverem com pouca ajuda, só dando dicas. Cada uma monta uma lista de quatro números e faz a soma automática sozinha. Faça a roda: cada criança mostra na tela a moldura azul e diz o total, ganhando o adesivo "Eu somo sozinho!".`,
      atividade: `A criança escreve uma lista de quatro números à sua escolha (por exemplo 5, 2, 6 e 3), seleciona todos com o mouse, aperta a Autosoma para achar o total e depois troca um número para ver o total mudar sozinho.`,
      gabarito: `Desafio vencido quando a criança chega ao total da própria lista sem ajuda (a lista 5, 2, 6 e 3 dá 16) e consegue mostrar o total mudando ao trocar um número. O importante não é o valor exato, e sim ela ter selecionado a coluna certa, apertado a Autosoma sozinha e percebido o total recalcular.`,
    },
  ],
};
