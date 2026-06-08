import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Por Dentro da Bambu Lab",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer ao vivo as partes principais da impressora Bambu Lab e as regras de segurança ao operá-la.`,
  descricao: `Nesta aula os alunos saem da teoria e encontram a máquina real à frente deles. Em vez de só ouvir falar sobre impressão 3D, eles vão olhar de perto a impressora Bambu Lab, identificar cada parte importante e entender o que cada uma faz enquanto a peça é construída camada por camada. É o momento em que o aluno conecta o desenho na tela com o objeto físico que vai nascer.

As quatro partes que vamos explorar são o bico (a ponta quente por onde o filamento derretido sai), a mesa aquecida (a placa onde a peça gruda e cresce), os eixos (os trilhos que movem o bico nas direções X, Y e Z) e o carretel de filamento (o rolo de plástico que alimenta a impressora). Cada parte tem um papel claro, e quando o aluno entende esse papel, ele passa a enxergar a impressão como um processo lógico, e não como mágica.

A aula também demonstra ao vivo o começo de uma impressão. O professor inicia uma peça simples e os alunos observam o aquecimento, o movimento dos eixos e a primeira camada sendo desenhada na mesa. Esse momento desperta muita curiosidade, então é a hora perfeita para falar de segurança: o bico passa de 200 graus, a mesa fica quente e as partes se movem rápido. A regra de ouro é simples: olhar pode, tocar enquanto se move ou enquanto está quente, não.

Ao final, o aluno deve ser capaz de apontar para a impressora e nomear cada parte, explicar com suas palavras o que ela faz e listar as principais regras de segurança. Esse conhecimento é a base para as próximas aulas, quando eles vão fatiar e imprimir as próprias peças.`,
  materiais: [
    `Impressora 3D Bambu Lab montada e ligada, em local visível para a turma`,
    `Um carretel de filamento PLA novo para mostrar de perto (e um já usado, se houver)`,
    `Computador com o Bambu Studio aberto, ligado ao projetor`,
    `Projetor para mostrar a tela e, se possível, vídeo de perto da impressão`,
    `Arquivo de exemplo já fatiado e pronto para imprimir (uma peça pequena, como um chaveiro)`,
    `Cartões ou etiquetas com os nomes das partes: bico, mesa, eixos, carretel`,
    `Luva térmica ou espátula para demonstrar o manuseio seguro (uso só do professor)`,
  ],
  conceitosChave: [
    `Bico (nozzle) — a ponta de metal quente por onde o filamento derretido sai para formar a peça.`,
    `Mesa aquecida (heatbed) — a placa que esquenta para a peça grudar bem e não soltar durante a impressão.`,
    `Eixos X, Y e Z — os trilhos que movem o bico: X para os lados, Y para frente e trás, Z para cima e para baixo.`,
    `Carretel de filamento — o rolo de plástico (PLA) que é a "tinta" da impressora, derretido pelo bico.`,
    `Primeira camada — a base inicial da peça, desenhada direto na mesa; se ela falha, a impressão toda falha.`,
    `Segurança térmica — regra de não tocar no bico nem na mesa enquanto estão quentes ou em movimento.`,
    `Extrusão — o ato de empurrar e derreter o filamento pelo bico para construir a peça camada por camada.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula. Precisa apenas conhecer quatro partes da máquina e saber iniciar uma impressão já pronta. As quatro partes são: bico (ponta quente que derrete o filamento), mesa aquecida (placa onde a peça gruda), eixos X, Y e Z (trilhos que movem o bico) e carretel de filamento (o rolo de plástico). Antes da aula, ligue a impressora, deixe um arquivo de exemplo já fatiado carregado e teste se o Bambu Studio abre e conecta na impressora. Tenha sempre em mente a regra principal: o bico passa de 200 graus e a mesa também esquenta, então ninguém toca enquanto está quente ou em movimento.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 1 com uma pergunta rápida: "O que é impressão 3D?" Deixe dois ou três alunos responderem. Depois leve a turma até a impressora e diga que hoje vão conhecer a máquina de verdade, por dentro.

Conteúdo novo guiado (15 min): aponte para cada parte e nomeie em voz alta. Comece pelo carretel de filamento (o rolo), siga o caminho do filamento até o bico, mostre a mesa aquecida e por fim os eixos. Cole os cartões com os nomes em cada parte. No projetor, abra o Bambu Studio e mostre o painel "Device" (Dispositivo) no topo: ali aparecem a temperatura do bico, a temperatura da mesa e os botões de controle. Mostre que esses números na tela correspondem às partes físicas que eles acabaram de ver.

Mão na massa (25 min): inicie uma impressão real do arquivo de exemplo. No Bambu Studio, com a peça já fatiada, clique no botão "Print" (Imprimir) e confirme. Peça para a turma observar a sequência: a mesa esquenta, o bico esquenta, os eixos se movem para a posição inicial e a primeira camada começa a aparecer. Enquanto isso acontece, circule perguntando: "Que parte está se movendo agora? O que o bico está fazendo?" Deixe cada aluno apontar uma parte e dizer o nome.

Desafio e compartilhar (10 min): peça para cada aluno escolher uma parte e explicar, em uma frase, o que ela faz e por que é perigoso tocar nela quente. Encerre reforçando a regra de ouro de segurança.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. O bico é como a ponta de uma pistola de cola quente: derrete o material e desenha com ele. A mesa aquecida é como uma chapa de lanche que esquenta para a comida grudar. Os eixos são como os trilhos de uma gaveta ou de um trem de brinquedo, que deixam a peça correr só na direção certa. O filamento é a "tinta" da impressora, mas em vez de molhada, é um fio de plástico que derrete. Fale dos números de verdade: "esse bico fica mais quente que água fervendo, mais de 200 graus". Adolescentes respeitam mais a regra quando entendem o porquê.

## Erros comuns e como ajudar

O erro mais perigoso é o aluno querer tocar na peça ou no bico durante a impressão, por curiosidade. Combine a regra antes de ligar e fique entre a turma e a máquina. Outro erro é confundir os eixos: muitos acham que a peça se move, quando é o bico (e a mesa, em alguns modelos). Mostre devagar qual parte anda em cada direção. Alguns alunos confundem o filamento com o produto final; explique que o fio fino vira a peça depois de derretido. Por fim, se a primeira camada não grudar, não conserte na frente deles como se fosse erro do aluno; use como exemplo de por que a mesa precisa estar limpa e aquecida, ligando o assunto à próxima aula.`,
  exercicios: [
    {
      titulo: `Caça às partes`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Conduza o aluno até a impressora desligada do movimento (sem imprimir) e peça que aponte cada parte conforme você fala o nome. Confira se ele aponta o lugar certo e corrija com gentileza.`,
      atividade: `Aponte na impressora real: onde fica o bico, a mesa aquecida, um dos eixos e o carretel de filamento. Diga o nome de cada um em voz alta enquanto aponta.`,
      gabarito: `Bico: ponta de metal de onde sai o filamento. Mesa aquecida: placa plana onde a peça é construída. Eixo: qualquer um dos trilhos que movem o bico (X lados, Y frente/trás, Z sobe/desce). Carretel: o rolo de filamento na lateral ou atrás da máquina.`,
    },
    {
      titulo: `O que faz cada parte?`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre a tela do Bambu Studio no painel "Device" e relacione cada número com a parte física. Desafie o aluno a explicar a função, não só o nome.`,
      atividade: `Para cada parte (bico, mesa, eixos, carretel), escreva ou diga uma frase explicando o que ela faz durante a impressão.`,
      gabarito: `Bico: derrete o filamento e desenha a peça. Mesa: esquenta para a peça grudar e crescer. Eixos: movem o bico nas direções X, Y e Z. Carretel: guarda e alimenta o filamento que vai ser derretido.`,
    },
    {
      titulo: `Detetives da impressão`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas durante a impressão ao vivo. Cada dupla observa e anota a ordem dos acontecimentos. Passe nas duplas conferindo a sequência observada.`,
      atividade: `Em dupla, observem o começo da impressão de exemplo e anotem, em ordem, o que acontece: o que esquenta primeiro, o que se move e quando aparece a primeira camada.`,
      gabarito: `Ordem esperada: a mesa começa a aquecer, o bico aquece, os eixos movem o bico para a posição inicial, o filamento começa a sair (extrusão) e a primeira camada é desenhada na mesa.`,
    },
    {
      titulo: `Roda da segurança`,
      tipo: `roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Sente a turma em roda perto da impressora. Conduza a conversa fazendo perguntas e deixando cada aluno contribuir com uma regra. Anote as regras combinadas em um cartaz.`,
      atividade: `Em roda, cada um diz uma regra de segurança ao usar a impressora 3D e explica por quê. Juntem as ideias em uma lista da turma.`,
      gabarito: `Regras esperadas: não tocar no bico (mais de 200 graus); não tocar na mesa quente; não colocar a mão enquanto os eixos se movem; esperar a peça e a mesa esfriarem antes de pegar; avisar o professor se algo parecer errado. O porquê: risco de queimadura e de prender os dedos.`,
    },
    {
      titulo: `Meu mapa da impressora`,
      tipo: `projeto curto`,
      tempo: `14 min`,
      guiaProfessor: `Peça um desenho simples da impressora com as quatro partes nomeadas e uma regra de segurança ao lado de cada parte quente. Avalie se os nomes e funções estão corretos, não a qualidade do desenho.`,
      atividade: `Desenhe a impressora Bambu Lab no papel ou na tela. Escreva o nome das quatro partes (bico, mesa, eixos, carretel) apontando para cada uma e adicione uma regra de segurança perto das partes quentes.`,
      gabarito: `O mapa deve mostrar as quatro partes nomeadas corretamente: bico (com aviso "não tocar, quente"), mesa aquecida (com aviso "quente"), eixos (X, Y, Z) e carretel de filamento. Pelo menos uma regra de segurança deve aparecer junto ao bico ou à mesa.`,
    },
  ],
};
