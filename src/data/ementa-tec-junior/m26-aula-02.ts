import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Camada sobre camada: o segredo da magia",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Compreender, na prática, que a impressora 3D constrói cada objeto empilhando camadas finas de baixo para cima, conectando essa ideia ao modelo 3D que a turma já criou.`,
  descricao: `Nesta aula, as crianças descobrem o coração da impressão 3D: tudo é feito de camadas. A impressora não cria o objeto inteiro de uma vez, como num passe de mágica; ela deposita uma fininha tira de plástico derretido, espera endurecer, e coloca outra por cima, e mais outra, e mais outra. Camada sobre camada, o objeto cresce do chão até o topo. É o mesmo segredo de um bolo de andares ou de uma torre de blocos.

Para sentir isso de verdade, a turma vai colocar a mão na massa, literalmente. Com massinha de modelar ou tiras de papel, cada criança vai empilhar camadas e construir uma pequena montanha ou um pino, percebendo que o formato só aparece quando as camadas se juntam. Em seguida, todos tocam o filamento (o "fio" de plástico que a impressora usa) e veem, com o professor demonstrando, como ele é firme quando frio e fica molinho com o calor para depois endurecer de novo.

O momento mágico acontece quando ligamos as duas pontas: as camadas de massinha que eles empilharam são exatamente o que a impressora faz, só que com plástico quentinho e camadas muito mais finas que um fio de cabelo. O professor mostra no projetor o modelo 3D que a própria turma já criou nos meses anteriores e pergunta: "Por onde será que a impressora vai começar? E por onde termina?".

Ao final, a criança entende por que o objeto cresce de baixo para cima, por que partes que ficam "no ar" são difíceis e por que a primeira camada é tão importante. Essa base prepara o terreno para, nas próximas aulas, abrir e fatiar o modelo no Bambu Studio com olhos de quem já entende o segredo.`,
  materiais: [
    `Computadores com o Bambu Studio aberto (um para a demonstração do professor, mostrando um modelo já criado pela turma)`,
    `Projetor ou TV ligada ao computador do professor para todos verem a mesma tela`,
    `Massinha de modelar de várias cores (pelo menos 3 cores por criança)`,
    `Tiras de papel coloridas já cortadas e fita crepe para empilhar (alternativa à massinha)`,
    `Um pedaço de filamento PLA por criança para tocar e sentir (e um carretel inteiro para mostrar)`,
    `Exemplos prontos de peças impressas em 3D (uma peça pequena e uma maior, de preferência feitas pela escola)`,
    `Uma lupa ou peças impressas com camadas bem visíveis para a turma observar as "linhas" do objeto`,
  ],
  conceitosChave: [
    `Camada — uma fininha tirinha de plástico que a impressora coloca de cada vez, como um andar de um prédio.`,
    `Filamento — o "fio" de plástico colorido que a impressora derrete para construir o objeto.`,
    `Derreter — quando o calor deixa o plástico molinho, parecido com chocolate ao sol.`,
    `Endurecer — quando o plástico esfria e fica firme de novo, segurando a forma.`,
    `De baixo para cima — o jeito que a impressão cresce, sempre começando pelo chão (a base) e subindo.`,
    `Base — a primeira camada, o "pé" do objeto, que precisa ficar bem grudada para tudo dar certo.`,
    `Modelo 3D — o desenho no computador que diz à impressora qual formato construir, camada por camada.`,
  ],
  treinamento: `## O que o professor precisa saber

A mensagem desta aula cabe numa frase: a impressora 3D constrói tudo empilhando camadas, de baixo para cima. Você não precisa dominar a máquina hoje; precisa transmitir essa ideia com objetos do dia a dia. A impressora derrete o filamento (um fio de plástico PLA), deposita uma camada bem fininha, esse plástico endurece ao esfriar, e então vem a próxima camada por cima. Repita isso centenas de vezes e nasce a peça. Compare com um bolo de andares, uma pilha de panquecas ou uma torre de blocos: ninguém faz o topo antes da base. Toque você mesmo no filamento antes da aula para descrever a sensação (firme e liso, como um espaguete cru grosso). Tenha à mão uma peça impressa com as "linhas" das camadas visíveis: é a prova viva do que você vai ensinar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): receba a turma e relembre a Aula 1 ("Como a impressora ganha vida"). Pergunte: "O que a nossa impressora precisa para funcionar?". Mostre o carretel de filamento e deixe cada criança tocar um pedacinho. Pergunte: "Será que ela faz o objeto tudo de uma vez?". Guarde a resposta para o suspense.

Conteúdo novo guiado (15 min): no projetor, abra o Bambu Studio. Clique no menu superior em "File" e depois em "Open Project" (ou "Import") para carregar o modelo 3D que a turma já criou nos meses anteriores. Com o objeto na tela, gire-o segurando o botão direito do mouse e arrastando. Aponte para a parte de baixo e diga: "A impressora começa por aqui". Use o controle deslizante de camadas, que fica na barra lateral direita (em "Preview"/"Visualizar"), e arraste-o devagar de baixo para cima para mostrar a peça crescendo camada por camada na tela. Esse é o momento "uau".

Mão na massa (25 min): distribua a massinha (ou as tiras de papel). Peça que cada criança faça bolinhas e achate em discos finos, depois empilhe um disco sobre o outro para construir uma torre ou uma pequena montanha. Reforce: "Camada por baixo primeiro, sempre subindo". Quem usar papel, empilha tiras coladas. Circule pela sala perguntando "qual é a sua base?" e "o que vem por cima agora?".

Desafio e compartilhar (10 min): proponha o desafio de fazer uma camada que avança um pouquinho "para fora" (uma beirada) e perguntar o que acontece se não houver nada embaixo segurando. Cada criança mostra sua torre e diz por onde a "impressora dela" começou.

## Como explicar para crianças

Use sempre imagens concretas. "A impressora é como uma confeiteira que faz um bolo de mil andares bem fininhos." "O filamento é o macarrão de plástico que vira molinho com o calor, igual queijo na pizza, e endurece de novo quando esfria." Mostre, não só fale: empilhe massinha na frente deles enquanto narra. Faça perguntas em vez de dar respostas: "Por onde a torre começa? Pelo telhado ou pelo chão?". Deixe que toquem, cheirem (o PLA é seguro) e observem com a lupa as linhas das camadas numa peça pronta.

## Erros comuns e como ajudar

As crianças tendem a querer construir o "topo" ou as partes flutuantes primeiro; mostre que sem base embaixo a massinha cai, igual à impressora. Algumas amassam tudo numa bola só sem fazer camadas; peça discos separados e bem achatados para enxergarem as divisões. Há quem confunda derreter com sumir; explique que o plástico muda de molinho para duro, mas continua ali. Se alguém disser que a impressora faz tudo de uma vez, volte ao controle deslizante de camadas no Bambu Studio e mostre de novo, devagar. Cuide para que ninguém leve filamento à boca e mantenha as peças de exemplo circulando para todos tocarem.`,
  exercicios: [
    {
      titulo: `De baixo para cima ou de cima para baixo?`,
      tipo: `Pergunta oral em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça a turma sentar em roda e pergunte por onde a impressora começa a construir um objeto. Deixe várias crianças responderem antes de confirmar. Use a torre de blocos como exemplo visual se alguém hesitar.`,
      atividade: `Responda em voz alta: a impressora 3D começa a construir o objeto pela parte de baixo ou pela parte de cima?`,
      gabarito: `Pela parte de baixo. A impressora constrói de baixo para cima, colocando a base primeiro e empilhando camada sobre camada até chegar ao topo, igual a uma torre de blocos.`,
    },
    {
      titulo: `Empilhando minha primeira torre`,
      tipo: `Atividade prática com massinha`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua massinha de três cores. Peça discos finos e bem achatados, um de cada cor, e oriente a empilhar uma cor sobre a outra. Circule perguntando qual é a base de cada criança e o que vem por cima.`,
      atividade: `Faça três discos achatados de massinha, cada um de uma cor diferente, e empilhe um sobre o outro para formar uma torrinha. Aponte qual disco é a base.`,
      gabarito: `A criança deve apresentar três camadas empilhadas e visíveis, uma sobre a outra. A base é o disco de baixo, o primeiro a ser colocado, que sustenta os outros. Cada disco representa uma camada da impressão.`,
    },
    {
      titulo: `Frio, quente e firme de novo`,
      tipo: `Observação guiada do filamento`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue um pedaço de filamento por criança. Peça que sintam como ele é firme. Explique, sem usar fonte de calor perto das crianças, que o calor da impressora deixa o plástico molinho e que ele endurece ao esfriar. Use a analogia do chocolate ao sol.`,
      atividade: `Toque o filamento e diga como ele está agora: molinho ou firme? Depois explique, com suas palavras, o que acontece com ele quando esquenta na impressora e o que acontece quando esfria.`,
      gabarito: `Agora o filamento está firme e duro. Quando esquenta dentro da impressora, ele derrete e fica molinho, como chocolate ao sol. Quando esfria, ele endurece de novo e segura a forma da camada.`,
    },
    {
      titulo: `A camada que ficou no ar`,
      tipo: `Desafio investigativo com massinha`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada criança tente colocar uma camada de massinha avançando para fora da torre, como uma beirada sem nada embaixo. Deixe a beirada cair ou entortar e provoque a reflexão sobre por que isso acontece. Conecte com partes "flutuantes" de um modelo.`,
      atividade: `Na sua torre, tente colocar uma camada que avança para fora, sem nada embaixo segurando. Observe o que acontece e explique por que a impressora também tem dificuldade nessas partes.`,
      gabarito: `A camada de fora cai ou entorta porque não tem outra camada embaixo para sustentá-la. A impressora tem o mesmo problema: cada camada precisa de algo embaixo para apoiar, por isso partes que ficam no ar são difíceis de imprimir.`,
    },
    {
      titulo: `Onde minha criação começa?`,
      tipo: `Análise do modelo 3D no projetor`,
      tempo: `7 minutos`,
      guiaProfessor: `No Bambu Studio, com o modelo que a turma criou aberto na tela do projetor, use o controle deslizante de camadas em "Preview" para mostrar a peça crescendo. Pause na primeira camada e peça que a turma identifique a base. Depois suba até o topo e peça que identifiquem a última parte a ser construída.`,
      atividade: `Olhando o modelo 3D da turma na tela, aponte qual é a primeira parte que a impressora vai construir (a base) e qual é a última parte (o topo). Explique por que a ordem é essa.`,
      gabarito: `A primeira parte é a base, lá embaixo, encostada na mesa de impressão. A última é o topo, lá em cima. A ordem é essa porque a impressora constrói de baixo para cima, e cada camada nova precisa da camada de baixo já pronta e endurecida para se apoiar.`,
    },
  ],
};
