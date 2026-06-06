import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Apertar o play: começando a impressão",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança vai conferir o filamento, escolher a cor, selecionar o próprio arquivo na impressora Bambu Lab e apertar o play para ver as primeiras camadas da base nascerem na mesa.`,
  descricao: `Nesta aula chega o momento mais esperado do mês: apertar o play e ver a impressora começar a trabalhar de verdade. Nas aulas anteriores a turma transformou o item 3D virtual em um arquivo pronto, posicionou a peça e fatiou tudo no Bambu Studio. Agora o arquivo sai do computador e vira movimento, calor e plástico de verdade saindo do bico da impressora Bambu Lab.

A grande ideia desta aula é simples e mágica: a peça cresce de baixo para cima, uma camada de cada vez. Antes de apertar o play, a turma faz uma checagem rápida e importante: ver se há filamento suficiente, confirmar qual é a cor escolhida e garantir que cada criança vai mandar imprimir o arquivo certo, o seu. Só depois disso a gente clica em imprimir e fica de olho nas primeiras linhas de plástico desenhando a base na mesa quentinha.

Esta é a quarta aula do mês de Impressão 3D, dentro da trilha de criação de games do Ano 4. Na aula passada a turma conheceu a impressora por dentro (o bico, a mesa, o carretel de filamento). Hoje damos o passo de iniciar a impressão e observar a base. As próximas aulas vão acompanhar a peça crescendo camada por camada, cuidar dela enquanto imprime e, por fim, dar o acabamento para levar para casa.

O professor não precisa ser especialista em impressão 3D. Este material é um tutorial: diz onde clicar no Bambu Studio e na telinha da impressora, o nome de cada botão e o que as crianças costumam errar. A meta da aula não é uma peça perfeita, e sim a emoção de ver a base surgir na mesa e entender que aquele objeto está nascendo do nada, linha por linha.`,
  materiais: [
    `Computadores com o Bambu Studio já aberto, cada um com o arquivo fatiado (.3mf) da peça da própria criança pronto para enviar`,
    `Impressora Bambu Lab ligada, com a mesa limpa e o carretel de filamento encaixado, posicionada onde toda a turma consiga ver`,
    `Projetor ou TV ligada no computador do professor para mostrar de perto a tela do Bambu Studio e o botão de imprimir`,
    `Carretel de filamento reserva da cor escolhida, para o caso de o que está na máquina estar acabando`,
    `Duas ou três peças já impressas em aulas anteriores, como exemplo do resultado final que vai aparecer`,
    `Lista com o nome das crianças e a ordem da fila de impressão, para o professor anotar quem já mandou imprimir`,
    `Cartão ou foto da telinha da Bambu Lab com os botões marcados, para apoiar quem lê pouco`,
  ],
  conceitosChave: [
    `Filamento — o rolinho de plástico, parecido com um fio grosso, que a impressora derrete para construir a peça.`,
    `Conferir o filamento — olhar se ainda tem plástico no carretel e qual é a cor antes de começar a imprimir.`,
    `Selecionar o arquivo — escolher na impressora o desenho certo, o da própria criança, para mandar imprimir.`,
    `Apertar o play — clicar no botão de imprimir e dar a partida para a impressora começar o trabalho.`,
    `Primeira camada — a primeira fileira de plástico que a impressora desenha na mesa, a base da peça.`,
    `De baixo para cima — o jeito como a peça cresce, empilhando uma camada em cima da outra como um bolo.`,
    `Mesa de impressão — a placa onde a peça é construída, que esquenta para o plástico grudar bem na base.`,
  ],
  treinamento: `## O que o professor precisa saber

Imprimir em 3D é construir um objeto empilhando camadas finas de plástico derretido, de baixo para cima, como quem monta um bolo de andares bem fininhos. A impressora Bambu Lab puxa o filamento do carretel, derrete a pontinha no bico quente e vai desenhando linha por linha sobre a mesa. A primeira camada é a base e é a mais importante: se ela gruda bem na mesa, o resto da peça cresce firme.

Você vai trabalhar em dois lugares: o Bambu Studio no computador (onde está o arquivo fatiado de cada criança) e a impressora em si (com a telinha de toque e o botão físico). O caminho mais simples é enviar do Bambu Studio: com o arquivo aberto, clique no botão "Print plate" (Imprimir placa), confira a impressora na lista e clique em "Send" ou "Print". Para enviar o próximo arquivo, espere a peça anterior, pois a turma vai imprimir em fila, uma peça de cada vez. Antes de tudo, faça a checagem: filamento na máquina, cor certa e arquivo certo.

## Passo a passo da aula

Aquecimento e revisão (10 min): mostre uma peça pronta de exemplo e pergunte "como será que ela nasceu?". Relembre as três partes da impressora vistas na aula anterior: o bico que derrete, a mesa onde a peça cresce e o carretel de filamento. Combine a fila: cada criança vai mandar imprimir a sua, uma de cada vez.

Conteúdo novo guiado (15 min): no projetor, abra o Bambu Studio com um arquivo de exemplo. Mostre a checagem em voz alta: 1) olhe o carretel e diga "tem filamento e a cor é esta"; 2) na impressora, confirme que é o filamento certo. No Bambu Studio, clique no botão grande "Print plate". Vai abrir uma janelinha; mostre a impressora selecionada e clique em "Send" (Enviar) ou "Print" (Imprimir). Vá até a impressora e mostre a base começando.

Mão na massa (25 min): chame as crianças na ordem da fila. Cada uma, no seu computador, repete os passos: confere a cor combinada, clica em "Print plate", confirma a impressora e clica em "Send". Enquanto uma peça imprime, as outras observam a base surgir e contam as primeiras linhas. Anote na lista quem já enviou. Reforce: "estamos vendo a primeira camada, a base da peça".

Desafio e compartilhar (10 min): peça que cada criança aponte para a mesa e diga em voz alta se a peça está crescendo de baixo para cima ou de cima para baixo. Comemorem juntos quando a base ficar pronta e fizer o primeiro contorno completo.

## Como explicar para crianças

Use a imagem do bolo: "A impressora faz a peça igual a um bolo, um andar bem fininho de cada vez, sempre começando de baixo." Chame a primeira camada de "o chão da peça" ou "a base". Diga que o filamento é "a massinha em forma de fio que a máquina derrete". Compare apertar o play com ligar um forno: "a gente manda começar e agora é esperar". Conte as primeiras linhas em voz alta com a turma para todo mundo enxergar a base nascendo.

## Erros comuns e como ajudar

O erro mais comum é a criança mandar imprimir o arquivo errado, o do colega. Antes do "Send", peça que ela confira o nome do arquivo na tela e diga "é o meu". Outro erro é querer apertar o play de várias peças ao mesmo tempo; lembre que a impressora faz uma de cada vez, por isso existe a fila. Muitas crianças tentam tocar na mesa ou no bico assim que começa; combine a regra de só olhar, porque o bico fica muito quente. Há quem ache que não funcionou porque "nada aconteceu" nos primeiros segundos; explique que a máquina primeiro esquenta e só depois desenha a base, então é preciso ter um pouco de paciência. Por fim, se o filamento estiver acabando, troque pelo carretel reserva antes de enviar, para a base não falhar no meio.`,
  exercicios: [
    {
      titulo: `Como será que essa peça nasceu?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre uma peça já impressa e segure-a de cabeça para baixo e depois para cima. Pergunte à turma por onde a impressora começou. Conduza para a ideia de que a peça nasce da base, de baixo para cima, uma camada de cada vez. Relembre o bico, a mesa e o carretel.`,
      atividade: `Olhem esta peça pronta. Por onde vocês acham que a impressora começou: pela parte de baixo ou pela de cima? Mostrem com a mão como ela foi crescendo. Falem juntos qual parte é a base.`,
      gabarito: `A resposta certa é que a impressora começa pela parte de baixo, pela base, e a peça cresce de baixo para cima, uma camada sobre a outra. Acertou quem aponta para a base como o ponto de partida.`,
    },
    {
      titulo: `Checagem antes do play`,
      tipo: `prática guiada`,
      tempo: `10 minutos`,
      guiaProfessor: `Leve a turma até a impressora. Faça a checagem em voz alta e peça que repitam: olhar o carretel para ver se há filamento, dizer qual é a cor e confirmar que a mesa está limpa. Use o cartão com a telinha marcada para apoiar quem lê pouco.`,
      atividade: `Vamos fazer a checagem juntos: 1) tem filamento no carretel? 2) qual é a cor? 3) a mesa está limpa? Respondam em voz alta cada pergunta antes de qualquer um apertar o play.`,
      gabarito: `Está certo quando a criança confirma os três pontos: há filamento suficiente no carretel, sabe dizer a cor escolhida e a mesa está limpa. Se faltar filamento, o certo é trocar pelo carretel reserva antes de imprimir.`,
    },
    {
      titulo: `Achar o meu arquivo`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `No computador de cada criança, ajude-a a confirmar que o arquivo aberto no Bambu Studio é o dela. Mostre o nome do arquivo na tela e peça que leia ou reconheça que é o seu. Reforce que cada um manda imprimir só a própria peça.`,
      atividade: `No seu Bambu Studio, olhe o nome do arquivo que está aberto. É o seu desenho? Aponte para o nome e diga "é o meu". Se não for o seu, chame o professor para abrir o arquivo certo.`,
      gabarito: `Está certo quando a criança identifica que o arquivo aberto é a peça dela e consegue dizer o próprio nome ou o nome do arquivo. Se estiver aberto o arquivo de outro colega, o certo é trocar pelo seu antes de mandar imprimir.`,
    },
    {
      titulo: `Apertar o play`,
      tipo: `prática na ferramenta`,
      tempo: `14 minutos`,
      guiaProfessor: `Chame as crianças na ordem da fila. Com o arquivo certo aberto, peça que cliquem no botão "Print plate" (Imprimir placa), confiram a impressora na janelinha e cliquem em "Send" (Enviar). Acompanhe e anote quem já enviou. Lembre a regra de só olhar, porque o bico fica quente.`,
      atividade: `Chegou a sua vez. Clique no botão "Print plate", confira se a impressora certa está selecionada e clique em "Send". Agora vá até a impressora e fique olhando, sem tocar, para ver a base começar a aparecer.`,
      gabarito: `Está certo quando a criança clica em "Print plate", confirma a impressora e clica em "Send", e a impressora começa a esquentar e a desenhar a base na mesa. Se nada surgir nos primeiros segundos, é normal: a máquina esquenta antes de imprimir.`,
    },
    {
      titulo: `Contando as primeiras camadas`,
      tipo: `desafio / observação`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma diante da impressora em trabalho. Peça que observem as primeiras linhas de plástico formando a base e contem em voz alta quantas voltas ou linhas já apareceram. Conduza a conclusão de que a peça cresce de baixo para cima.`,
      atividade: `Olhem a mesa: a impressora está desenhando a base. Contem juntos as primeiras linhas que aparecem. Depois respondam: a peça está crescendo de baixo para cima ou de cima para baixo?`,
      gabarito: `Está certo quando a turma consegue contar pelo menos as primeiras linhas da base e conclui que a peça cresce de baixo para cima, empilhando uma camada sobre a outra. Acertou quem explica que a base é a primeira camada.`,
    },
  ],
};
