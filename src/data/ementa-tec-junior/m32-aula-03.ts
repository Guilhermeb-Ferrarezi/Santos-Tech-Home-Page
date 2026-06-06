import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "O Que é Fatiar?",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança descobre que a impressora 3D monta a peça em camadas e clica em Fatiar pela primeira vez para ver a pré-visualização da peça crescendo de baixo para cima.`,
  descricao: `Nesta aula as crianças descobrem a mágica mais importante da impressão 3D: o fatiamento. Até agora, no Bambu Studio, elas aprenderam a abrir o ateliê e a posicionar cada peça no lugar certo sobre a mesa. Hoje elas vão entender o que acontece quando apertam o botão mágico Fatiar (em inglês, Slice). A impressora não cria a peça toda de uma vez, como num passe de mágica. Ela monta tudo em camadas finíssimas, uma de cada vez, empilhando de baixo para cima, igual a quem empilha panquecas para fazer uma torre bem alta.

A palavra fatiar quer dizer cortar em fatias. O computador pega o modelo 3D da criança (o boneco, o cubo, o coraçãozinho que ela modelou) e corta esse modelo em centenas de fatias bem fininhas, como se fosse um pão de forma cortado em vários pedaços iguais. Cada fatia vira uma camada. Depois, a impressora vai desenhar cada camada com plástico derretido, uma em cima da outra, até a peça inteira ficar pronta. É por isso que clicar em Fatiar é tão emocionante: é o momento em que o desenho vira um plano de construção de verdade.

O ponto alto da aula é a pré-visualização (Preview). Depois de fatiar, o Bambu Studio mostra uma barra deslizante do lado da tela. Quando o professor arrasta essa barrinha para cima e para baixo, a peça aparece e some camada por camada, como num filminho em câmera lenta. As crianças veem a peça nascer do nada, crescendo do chão até o topo. É um momento de muitos "uau" na sala, e ajuda demais a entender por que algumas peças são fáceis e outras são difíceis de imprimir.

Esta é a terceira aula do mês de impressão 3D. Ela prepara o caminho para a próxima aula, em que vamos escolher as configurações de impressão. Por enquanto, o foco é só entender e sentir o que é fatiar: clicar no botão, ver as camadas e perceber que toda peça impressa é, na verdade, uma torre de fatias coladas. Não precisamos ainda mexer em ajustes finos nem mandar imprimir de verdade; o objetivo é a descoberta e o encantamento com a ideia das camadas.`,
  materiais: [
    `Computadores ligados, um por aluno, com o Bambu Studio já aberto e um modelo 3D simples carregado sobre a mesa (um cubo, um boneco baixinho ou uma peça que a turma já modelou).`,
    `Projetor ou TV grande ligada ao computador do professor para demonstrar onde fica o botão Fatiar e a barra de pré-visualização.`,
    `Um exemplo já fatiado e salvo pelo professor, para mostrar logo no começo como fica a pré-visualização com as camadas aparecendo.`,
    `Uma torre de panquecas de mentirinha (ou um montinho de fichas, tampinhas ou peças de encaixe empilhadas) para a analogia das camadas na mão das crianças.`,
    `Uma fruta ou um pão de forma e uma faca de plástico sem corte (ou massinha cortada com fio) para demonstrar, de forma segura, o que é cortar em fatias.`,
    `Folhas de papel e lápis de cor para o exercício de desenhar as camadas de uma peça.`,
    `Adesivos ou carimbos de recompensa para quem conseguir fatiar e mexer na barra de camadas sozinho.`,
  ],
  conceitosChave: [
    `Fatiar — pedir para o computador cortar a peça em fatias bem fininhas; em inglês aparece como Slice no botão.`,
    `Camada — cada fatia fininha da peça; a impressora empilha uma camada em cima da outra, como panquecas.`,
    `Pré-visualização — o filminho que mostra a peça crescendo do chão para cima, camada por camada, antes de imprimir.`,
    `Modelo 3D — o desenho em três dimensões que a criança fez e que o computador vai transformar em camadas.`,
    `Barra de camadas — a barrinha que a gente arrasta para cima e para baixo para ver as camadas aparecerem e sumirem.`,
    `De baixo para cima — o sentido em que a impressora trabalha: ela sempre começa pelo chão e vai subindo.`,
    `Fatiador — o programa esperto dentro do Bambu Studio que faz a conta de como cortar a peça em camadas.`,
  ],
  treinamento: `## O que o professor precisa saber

Fatiar é transformar um modelo 3D em um plano de camadas que a impressora consegue seguir. A impressora 3D não sabe ler um desenho 3D direto; ela só sabe fazer uma coisa: desenhar uma camada fina de plástico, subir um pouquinho e desenhar a próxima camada por cima. O programa que faz essa tradução, dentro do Bambu Studio, chama-se fatiador (slicer). Ele corta o modelo em centenas de camadas horizontais e calcula o caminho que o bico vai percorrer em cada uma.

No Bambu Studio, o botão de fatiar fica no canto superior direito da tela e está escrito Fatiar placa (ou Slice plate, se estiver em inglês). Ao lado dele, depois de fatiar, aparece o botão Imprimir/Enviar — que nesta aula NÃO vamos usar. Quando você clica em Fatiar, o programa pensa alguns segundos e abre automaticamente a aba Pré-visualização (Preview), no topo central da tela, ao lado da aba Preparar (Prepare). Na Pré-visualização surge, do lado direito, uma barra vertical com um cursorzinho: é a barra de camadas. Arraste o cursor para baixo e a peça some de cima para baixo; arraste para cima e ela cresce de baixo para cima. Esse é o efeito mágico que encanta a turma.

Antes da aula, abra o Bambu Studio, carregue uma peça simples, clique em Fatiar e brinque com a barra umas duas vezes para se sentir seguro. Decore só dois nomes: Fatiar placa e Pré-visualização. Com isso você conduz a aula tranquilo.

## Passo a passo da aula

Aquecimento (10 min): no projetor, mostre a torre de panquecas (ou de tampinhas) e empilhe uma por uma. Pergunte: "Como a gente fez essa torre? Tudo de uma vez ou um andar de cada vez?". Conte que a impressora 3D faz peças exatamente assim, empilhando camadas. Mostre rapidinho seu exemplo já fatiado para abrir o apetite.

Conteúdo novo guiado (15 min): no seu Bambu Studio, com a peça já na mesa, vá ao canto superior direito e clique em Fatiar placa. Espere o programa pensar. Quando abrir a aba Pré-visualização, mostre a barra de camadas do lado direito e arraste o cursor bem devagar para cima e para baixo, narrando: "Olha a peça nascendo do chão! Camada, camada, camada...". Repita duas vezes para todos verem.

Mão na massa (25 min): cada criança vai ao próprio computador. Peça que cliquem em Fatiar placa, esperem e depois encontrem a barra de camadas. O desafio é arrastar a barrinha e ver a peça crescer. Circule pela sala apontando onde fica o botão e a barra para quem não achar. Deixe cada um brincar de fazer a peça aparecer e sumir várias vezes.

Desafio e compartilhar (10 min): desafie quem terminou a contar mais ou menos quantas camadas tem a peça (alto = muitas camadas, baixinho = poucas). Depois, chame alguns alunos ao projetor para mostrarem a peça deles crescendo na pré-visualização e contarem o que viram.

## Como explicar para crianças

Fatiar: "Imagine um pão de forma inteiro. Para fazer um sanduíche, a gente corta em fatias, certo? O computador faz isso com a sua peça: corta em muitas fatias fininhas." Mostre o pão (ou a massinha) sendo cortado.

Camada: "Cada fatia é uma camada. A impressora cola uma camada em cima da outra, igual a empilhar panquecas para fazer uma torre bem alta." Empilhe as panquecas de mentirinha na mão.

De baixo para cima: "A impressora é teimosa: ela sempre começa pelo chão e vai subindo. Nunca começa pelo telhado!". Use as mãos subindo no ar.

Pré-visualização: "É um filminho mágico que mostra a sua peça nascendo, do chão até o topo, antes mesmo de imprimir de verdade."

## Erros comuns e como ajudar

A criança não acha o botão Fatiar: ele fica no canto de cima, à direita. Aponte no projetor e peça para ela procurar a palavra Fatiar nesse cantinho.

Ela clica em Imprimir ou Enviar sem querer: explique com calma que hoje só vamos fatiar e olhar, não vamos imprimir. Feche qualquer janela que abrir com o botão de fechar (o X) ou com a tecla Esc.

A peça some inteira e ela acha que apagou: ela arrastou a barra de camadas até o fim para baixo. Mostre que é só arrastar de novo para cima que a peça volta a crescer. Ninguém apagou nada.

A criança fica impaciente enquanto o programa fatia: explique que o computador está pensando e cortando as fatias, e que pensar leva uns segundinhos. Conte até cinco junto com a turma para passar a espera.`,
  exercicios: [
    {
      titulo: `A torre de panquecas`,
      tipo: `roda de conversa com demonstração`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma perto da mesa. Empilhe as panquecas de mentirinha (ou tampinhas) uma de cada vez, contando em voz alta. Pergunte se dá para construir o topo antes do chão. Conduza a turma até a ideia de que tudo se faz de baixo para cima, uma camada por vez, exatamente como a impressora 3D trabalha.`,
      atividade: `Vamos montar uma torre juntos, colocando um andar de cada vez. Você consegue colocar o último andar lá em cima antes de colocar o primeiro lá embaixo? Por quê?`,
      gabarito: `A criança entendeu se diz, com as próprias palavras, que não dá para começar pelo topo: é preciso empilhar de baixo para cima, uma camada por vez. Espera-se a ideia de que a impressora faz a peça da mesma forma, do chão para cima.`,
    },
    {
      titulo: `Cortando em fatias`,
      tipo: `demonstração com material concreto`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o pão de forma (ou um rolinho de massinha). Corte em fatias de forma segura, com faca de plástico sem corte ou com fio, na frente da turma. Diga que fatiar a peça no computador é a mesma ideia: cortar em muitas fatias fininhas. Deixe cada criança apontar quantas fatias saíram.`,
      atividade: `Olhe o professor cortar o pão em fatias. Conte quantas fatias apareceram. Agora imagine: o computador também corta a sua peça em fatias fininhas. Como se chama isso?`,
      gabarito: `A criança acertou se reconhece que cortar em pedaços iguais é fatiar e consegue contar quantas fatias surgiram do pão. A resposta esperada para o nome é "fatiar" (ou cortar em fatias/camadas).`,
    },
    {
      titulo: `Achando o botão mágico`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `No projetor, mostre o canto superior direito do Bambu Studio e a palavra Fatiar placa. Peça que cada aluno encontre esse botão no próprio computador e clique uma vez. Lembre que o programa pensa alguns segundos antes de mostrar o resultado. Circule garantindo que ninguém clique em Imprimir ou Enviar.`,
      atividade: `Procure no cantinho de cima, do lado direito da tela, o botão escrito Fatiar. Clique nele uma vez e espere o computador pensar. Conte até cinco enquanto ele trabalha.`,
      gabarito: `A criança acertou se localizou o botão Fatiar placa no canto superior direito, clicou nele e a tela mudou para a aba Pré-visualização (Preview). O professor confere vendo a peça com as camadas na tela do aluno.`,
    },
    {
      titulo: `A peça que cresce`,
      tipo: `desafio na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre a barra de camadas no lado direito da pré-visualização. Demonstre arrastando o cursor para cima e para baixo, fazendo a peça crescer e sumir. Depois desafie cada aluno a fazer o mesmo sozinho. Para quem dominar, peça para parar a barra no meio e observar como a peça fica cortada pela metade.`,
      atividade: `Encontre a barrinha das camadas no lado direito da tela. Arraste devagar para cima e veja a peça crescer do chão até o topo. Depois arraste para baixo e veja ela sumir. Tente parar a barra bem no meio da peça.`,
      gabarito: `A criança teve sucesso se conseguiu arrastar a barra de camadas e fazer a peça crescer e sumir, percebendo que ela nasce de baixo para cima. Parar no meio e ver a peça cortada ao meio é o sinal de que entendeu de verdade.`,
    },
    {
      titulo: `Desenhando as camadas`,
      tipo: `desenho no papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue folha e lápis de cor. Peça que cada aluno desenhe uma peça simples (um boneco, um sorvete, uma torre) dividida em camadas horizontais, como fatias empilhadas. Numere as camadas de baixo para cima com eles, reforçando que a primeira é a de baixo. Circule elogiando e perguntando qual camada a impressora faria primeiro.`,
      atividade: `Desenhe uma peça que você gostaria de imprimir e divida ela em fatias com linhas, de baixo para cima. Pinte cada camada de uma cor. Escreva o número 1 na camada que a impressora faz primeiro.`,
      gabarito: `Não há um único desenho certo. O exercício está correto se a peça aparece dividida em camadas horizontais empilhadas e o número 1 está na camada de baixo, mostrando que a criança entendeu que a impressão começa pelo chão e sobe camada por camada.`,
    },
  ],
};
