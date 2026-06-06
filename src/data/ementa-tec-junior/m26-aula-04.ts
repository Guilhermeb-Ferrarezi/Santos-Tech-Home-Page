import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Fatiar e deixar pronto pra impressão",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Fatiar o modelo no Bambu Studio, ajustar o tamanho da peça, observar a prévia das camadas coloridas e salvar o arquivo pronto para enviar à impressora.`,
  descricao: `Na aula passada a criança aprendeu a abrir o modelo dela dentro do Bambu Studio. Agora chega o momento mágico: transformar aquele bonequinho 3D na lista de ordens que a impressora entende. Esse passo se chama "fatiar" (em inglês, "slice"). É como pegar um pão de fôrma e cortar em fatias bem fininhas, uma em cima da outra. A impressora não enxerga o modelo inteiro de uma vez: ela só sabe fazer uma camada por vez, de baixo para cima.

Quando a criança clica no botão de fatiar, o Bambu Studio pensa por alguns segundos e mostra uma prévia incrível: a peça aparece dividida em várias camadas coloridas, como um bolo de muitos andares. Ela pode arrastar uma barrinha do lado da tela e ver a peça sendo construída fatia por fatia, igual a um filme em câmera lenta. Isso encanta as crianças e ajuda muito a entender o segredo da impressão 3D que elas viram na Aula 2.

Antes de fatiar, a criança também aprende a ajustar o tamanho da peça com a ferramenta de escala. Se o modelo ficou grande demais para o tempo da aula, basta diminuir um pouquinho. Depois do fatiamento, o programa mostra dois números muito importantes: quanto tempo a impressão vai demorar e quantos gramas de filamento vão ser usados. São como a "previsão do tempo" da impressão.

Para fechar, a criança salva o arquivo fatiado e o envia para a impressora (ou para o cartão de memória). A peça fica pronta, esperando o botão de começar que será apertado na próxima aula. É uma sensação ótima de "está tudo preparado!" que deixa todo mundo ansioso pelo grande dia da impressão.`,
  materiais: [
    `Computadores (um por criança ou em dupla) com o Bambu Studio aberto e o modelo de cada aluno já carregado`,
    `Projetor ou TV grande para o professor demonstrar onde clicar`,
    `A impressora Bambu Lab ligada e conectada à rede (para o envio do arquivo)`,
    `Uma peça já fatiada de exemplo, salva no computador do professor, para mostrar a prévia das camadas`,
    `Um pão de fôrma de brinquedo ou uma imagem de bolo em camadas para a analogia das fatias`,
    `Etiquetas ou papel para anotar o tempo e o filamento que cada peça vai usar`,
    `Cartão de memória (microSD) da impressora, caso o envio seja feito por ele`,
  ],
  conceitosChave: [
    `Fatiar (slice) — cortar o modelo em camadas bem fininhas para a impressora saber o que fazer, igual a cortar um pão em fatias.`,
    `Prévia das camadas — a imagem colorida que mostra a peça dividida em andares, do chão até o topo.`,
    `Escala — esticar ou encolher a peça para ela ficar maior ou menor, sem mudar o formato.`,
    `Tempo de impressão — o relógio que diz quantas horas e minutos a impressora vai trabalhar.`,
    `Filamento — o "fio mágico" de plástico que a impressora derrete para construir a peça; medimos em gramas.`,
    `Botão Fatiar (Slice Plate) — o botão que manda o programa preparar a peça para a impressão.`,
    `Enviar (Print Plate / Send) — o botão que manda o arquivo pronto para a impressora ou para o cartão.`,
  ],
  treinamento: `## O que o professor precisa saber

Fatiar é o passo em que o Bambu Studio converte o modelo 3D em instruções (camadas) que a impressora entende. Você não precisa ser especialista: basta clicar no botão certo e ler dois números. No Bambu Studio, o modelo aparece sobre uma "mesa" (a placa de impressão). No canto inferior direito há dois botões grandes: "Fatiar placa" (Slice Plate) e, depois de fatiar, "Imprimir placa" (Print Plate). No topo da tela existem duas abas: "Preparar" (onde a criança mexe no modelo) e "Prévia" (onde aparecem as camadas coloridas). Antes da aula, abra o Bambu Studio, carregue um modelo de teste e clique em Fatiar uma vez, só para confirmar que tudo funciona e que a impressora está conectada.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Reúna a turma e relembre a Aula 2: "A impressora faz uma camada de cada vez, lembram?". Mostre o pão de fôrma ou a imagem do bolo em camadas. Diga que hoje vamos "cortar" o modelo em fatias dentro do computador.

CONTEÚDO NOVO GUIADO (15 min): No projetor, mostre o Bambu Studio com um modelo na mesa. Primeiro, ensine a escala: clique no modelo, clique no ícone de "Escala" (a setinha com quadradinho) na barra da esquerda e mostre como arrastar para diminuir, vendo o tamanho em milímetros. Depois clique no botão "Fatiar placa" (canto inferior direito) e espere a barrinha de progresso. A tela troca para a aba "Prévia". Arraste a barra deslizante da direita para cima e para baixo, mostrando as camadas surgindo. Por fim, aponte no canto inferior direito o tempo de impressão e os gramas de filamento.

MÃO NA MASSA (25 min): Cada criança (ou dupla) abre o próprio modelo. Peça que: 1) ajustem a escala se a peça estiver muito grande; 2) cliquem em "Fatiar placa"; 3) brinquem com a barra das camadas na aba "Prévia"; 4) anotem num papel o tempo e o filamento da peça delas. Circule pela sala ajudando. Quem terminar, clica em "Imprimir placa" e em "Enviar" (ou "Salvar no cartão"/Export, conforme sua configuração) para deixar o arquivo pronto.

DESAFIO + COMPARTILHAR (10 min): Cada criança diz em voz alta quanto tempo a peça dela vai levar e quem tem a impressão mais rápida e a mais demorada. Combine que na próxima aula vamos finalmente apertar o botão de começar.

## Como explicar para crianças

Use a analogia do pão: "A impressora não consegue comer o modelo inteiro de uma vez, então ela corta tudo em fatias bem fininhas e empilha uma em cima da outra." Chame a prévia colorida de "raio-x do bolo". Diga que o tempo de impressão é "quanto tempo a impressora vai pintar a sua peça" e o filamento é "o fio de plástico mágico que vira o seu brinquedo". Comemore cada fatiamento: "Olha as camadas aparecendo!".

## Erros comuns e como ajudar

A criança esquece de clicar no modelo antes de mudar a escala e nada acontece: lembre de clicar primeiro na peça para ela ficar "selecionada" (com a bordinha). Algumas confundem a aba "Preparar" com a "Prévia"; mostre que as camadas coloridas só aparecem depois de fatiar e na aba "Prévia". Se aparecer um aviso vermelho, geralmente é porque a peça saiu da mesa; arraste de volta para o centro e fatie de novo. Se a barra das camadas não mexer, é porque ainda não fatiaram. Tenha paciência: cada clique certo é uma pequena vitória.`,
  exercicios: [
    {
      titulo: `Que fatia é essa?`,
      tipo: `Pergunta e resposta oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Use no aquecimento, com o pão ou a imagem do bolo na mão. Faça a pergunta para a turma toda e deixe várias crianças responderem.`,
      atividade: `Mostre o pão fatiado e pergunte: "Por que a impressora precisa cortar o modelo em fatias bem fininhas antes de imprimir?".`,
      gabarito: `Porque a impressora só sabe fazer uma camada de cada vez, de baixo para cima. Fatiar transforma o modelo em várias camadas empilhadas que ela consegue construir.`,
    },
    {
      titulo: `Achando o botão mágico`,
      tipo: `Atividade guiada na tela`,
      tempo: `5 minutos`,
      guiaProfessor: `Peça que cada criança apenas localize e aponte o botão, sem clicar ainda. Confira um a um. Ajude quem não achar mostrando o canto inferior direito.`,
      atividade: `No Bambu Studio, encontre e aponte com o dedo (sem clicar) o botão "Fatiar placa" na tela.`,
      gabarito: `O botão "Fatiar placa" (Slice Plate) fica no canto inferior direito da tela. É um dos dois botões grandes que aparecem ali.`,
    },
    {
      titulo: `Encolhendo a peça`,
      tipo: `Prática individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre antes no projetor o ícone de Escala na barra da esquerda. Reforce que é preciso clicar na peça primeiro. Ajude quem esticar demais.`,
      atividade: `Clique na sua peça, use a ferramenta de Escala e deixe-a um pouco menor. Observe o tamanho em milímetros mudando.`,
      gabarito: `A criança seleciona a peça (ela fica com bordinha), abre a ferramenta de Escala na barra da esquerda e arrasta para diminuir. O número em milímetros (mm) fica menor, mas o formato continua igual.`,
    },
    {
      titulo: `O raio-x das camadas`,
      tipo: `Exploração na prévia`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos fatiaram primeiro. Mostre onde fica a barra deslizante na lateral direita da aba "Prévia". Incentive a brincar subindo e descendo.`,
      atividade: `Clique em "Fatiar placa", vá até a aba "Prévia" e arraste a barra das camadas para cima e para baixo, vendo a peça ser construída fatia por fatia.`,
      gabarito: `Depois de fatiar, na aba "Prévia" aparecem as camadas coloridas. Ao arrastar a barra para baixo some o topo e fica só a base; ao arrastar para cima a peça vai sendo montada camada por camada, do chão ao topo.`,
    },
    {
      titulo: `A previsão da impressão`,
      tipo: `Leitura de números e desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre onde aparecem o tempo e o filamento (canto inferior direito, perto dos botões). Ajude a ler horas e gramas. Compare os resultados da turma no compartilhar.`,
      atividade: `Olhe na tela e anote num papel: quanto TEMPO sua peça vai levar e quantos GRAMAS de filamento ela vai usar. Depois salve e envie o arquivo para a impressora.`,
      gabarito: `O tempo de impressão e os gramas de filamento aparecem no canto inferior direito, perto dos botões, logo após fatiar. A criança anota os dois números (ex.: 45 minutos e 8 gramas) e clica em "Imprimir placa" e depois em "Enviar" (ou salvar no cartão) para deixar o arquivo pronto. Qualquer tempo e peso reais lidos na tela estão corretos.`,
    },
  ],
};
