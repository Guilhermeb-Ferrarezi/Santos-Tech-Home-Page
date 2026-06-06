import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Camada por camada: como a peça cresce",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Observar a impressão em andamento e entender que a peça nasce de baixo para cima, uma camada fina de plástico de cada vez, comparando o que acontece na máquina com a prévia do Bambu Studio.`,
  descricao: `Nesta aula as crianças viram detetives da impressora. Em vez de só apertar o play e esperar, elas vão olhar de pertinho como o bico quente da Bambu Lab anda para os lados e vai deixando um fiozinho de plástico no lugar certo. Quando esse fio esfria, ele vira parte da peça. A grande sacada do dia é entender que a impressora não faz a peça inteira de uma vez: ela constrói deitando uma camada bem fininha, sobe um tiquinho, deita outra camada por cima, e assim por diante, até a peça ficar pronta. É igual construir uma parede de tijolos, só que os tijolos são linhas de plástico derretido.

O nome bonito disso é impressão por camadas. Cada camada tem mais ou menos a espessura de um fio de cabelo grosso (em geral 0,2 milímetros). Como cada camada é tão fininha, a peça precisa de muitas e muitas camadas empilhadas. Por isso a impressão demora: uma peça pequena pode ter centenas de camadas. As crianças vão perceber que paciência faz parte da fabricação de verdade.

O momento mais legal é a comparação. No projetor, o professor abre a tela de Preview (Prévia) do Bambu Studio, que mostra um desenho de como a peça vai crescer camada por camada. Ao lado, a impressora de verdade está fazendo exatamente aquilo. Os alunos olham a barra de andamento da máquina (que mostra a porcentagem e o tempo que falta) e vão dizendo em que camada a peça está. É a previsão batendo com a realidade.

Ao final, cada criança anota num cartãozinho quanto tempo a peça dela vai levar e em que altura ela já está. Assim elas treinam observar, estimar tempo e ter calma — habilidades que vão precisar para qualquer projeto maker. Ninguém termina a peça hoje; o objetivo é entender o processo de crescimento, não correr para o fim.`,
  materiais: [
    `Impressora Bambu Lab ligada e imprimindo uma peça dos alunos (de preferência iniciada antes da aula)`,
    `Computador com o Bambu Studio aberto na aba Preview (Prévia) da mesma peça`,
    `Projetor ou TV grande ligada ao computador para todos verem a prévia`,
    `Uma peça já impressa e cortada ao meio (ou uma peça pequena) para mostrar as camadas de pertinho`,
    `Lanterna pequena ou a lanterna do tablet para iluminar a peça crescendo na mesa de impressão`,
    `Cartões de anotação e lápis para cada criança registrar tempo e altura`,
    `Cronômetro ou o relógio do celular para acompanhar o tempo passando`,
  ],
  conceitosChave: [
    `Camada — uma linha bem fininha de plástico que a impressora deita por cima da anterior; várias camadas empilhadas formam a peça.`,
    `Altura da camada — o quão grossa é cada camada; quanto mais fina (por exemplo 0,2 mm), mais lisa e mais demorada fica a peça.`,
    `Bico (nozzle) — a pontinha quente por onde o plástico derretido sai, como a ponta de uma cola quente.`,
    `Prévia (Preview) — a tela do Bambu Studio que mostra, antes e durante, como a peça vai sendo construída camada por camada.`,
    `Barra de progresso — a parte da tela da impressora que mostra a porcentagem feita e quanto tempo ainda falta.`,
    `Tempo de impressão — quanto a peça inteira leva para ficar pronta; peças maiores ou mais detalhadas demoram mais.`,
    `De baixo para cima — a ordem em que a impressora trabalha: ela sempre começa pela base e vai subindo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. Só precisa entender uma ideia central: a impressora 3D fabrica a peça empilhando camadas finas de plástico, de baixo para cima. O bico (a pontinha quente) derrete o filamento e o deita seguindo um caminho; quando o plástico esfria, ele endurece e gruda na camada de baixo. Depois a mesa (ou o bico) desce/sobe um pouquinho e começa a próxima camada. A altura típica de cada camada é 0,2 mm, fina como um fio de cabelo grosso. É por isso que a impressão demora: são centenas de camadas.

No Bambu Studio existe a aba Preview (Prévia). Depois de fatiar (Slice), você clica em Preview e aparece uma barra deslizante na lateral direita. Arrastando essa barra de cima para baixo, a peça some camada por camada — e de baixo para cima ela aparece camada por camada. Esse é o seu melhor recurso visual do dia.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento. Junte a turma perto da impressora já imprimindo. Pergunte: como vocês acham que a peça está aparecendo ali? Mostre a peça cortada ao meio e peça para passarem o dedo nas listrinhas: cada listra é uma camada. Conecte com a aula passada (apertar o play).

15 min — Conteúdo novo guiado (no projetor). Abra o Bambu Studio com a mesma peça. Clique em Slice plate (Fatiar) se ainda não estiver fatiada. Depois clique na aba Preview (Prévia), no topo. Na lateral direita aparece a barra vertical de camadas. Arraste o controle devagar de baixo para cima e narre: olha, camada 1, a base; camada 10; camada 50. Mostre que embaixo, no canto, aparece o tempo total estimado de impressão. Diga o número de camadas em voz alta.

25 min — Mão na massa (observação ativa). Leve a turma de volta à impressora de verdade. Acenda a lanterna de lado para verem o bico se mexendo e o fio sendo depositado. Na tela da impressora (ou no app), aponte a barra de progresso: a porcentagem e o tempo restante. Peça para cada criança: (1) anotar a porcentagem agora; (2) estimar a altura da peça com os dedos; (3) achar, no Preview do projetor, mais ou menos em que camada a máquina está. Circule ajudando a comparar prévia e realidade.

10 min — Desafio + compartilhar. Cada um diz: quanto tempo falta para a peça e em que camada acha que está. Anotam no cartão. Combine de conferir na próxima aula se a estimativa bateu.

## Como explicar para crianças

Use a analogia da parede de tijolos: a impressora é um pedreiro que coloca uma fileira de tijolos, espera secar e coloca outra em cima. Os tijolos são linhas de plástico. Outra analogia: é como uma impressora de bolo que vai colocando uma camadinha de cobertura de cada vez. Repita sempre de baixo para cima. Para o tempo, diga: assim como um bolo grande assa mais devagar, uma peça grande imprime mais devagar.

## Erros comuns e como ajudar

As crianças acham que a impressora faz a peça inteira de uma vez — mostre o Preview movendo a barra para provar que é camada por camada. Outras querem mexer na peça quente na mesa: avise que não se toca, o plástico está saindo derretido e quente. Algumas se frustram porque demora — transforme isso em jogo de estimativa de tempo. Há quem confunda a prévia com a peça pronta; reforce que o desenho na tela é o plano e a máquina é a obra acontecendo. Se a barra de Preview não aparecer, confira se você clicou mesmo na aba Preview depois de fatiar; sem fatiar, a prévia de camadas não existe.`,
  exercicios: [
    {
      titulo: `De baixo para cima ou de cima para baixo?`,
      tipo: `Pergunta rápida (oral, turma toda)`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça a pergunta com a impressora à vista. Aceite respostas com as mãos (mostrando a direção). Confirme apontando a base já feita na mesa de impressão.`,
      atividade: `A impressora começa a fazer a peça por cima ou por baixo? Mostre com a mão a direção em que a peça vai crescendo.`,
      gabarito: `A impressora começa por baixo (pela base) e vai subindo, de baixo para cima. A mão deve apontar do chão para cima.`,
    },
    {
      titulo: `Caça-camadas na peça de verdade`,
      tipo: `Observação tátil em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue a peça impressa (de preferência cortada ao meio) para as duplas. Peça para passarem o dedo de leve. Pergunte quantas listrinhas conseguem sentir num pedacinho.`,
      atividade: `Passe o dedo na lateral da peça impressa. Você sente listrinhas? Cada listrinha é uma camada. Conte quantas camadas você consegue sentir em um pedacinho do tamanho da sua unha.`,
      gabarito: `Sim, dá para sentir e ver listrinhas finas; cada uma é uma camada. Num pedaço do tamanho de uma unha (cerca de 1 cm) costumam caber por volta de 5 camadas de 0,2 mm. Qualquer contagem próxima e a percepção de que são várias camadas empilhadas já está correta.`,
    },
    {
      titulo: `Onde a máquina está agora?`,
      tipo: `Comparar prévia com a realidade`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o Preview do Bambu Studio no projetor, ajude cada criança a arrastar (ou aponte você) até a camada que parece igual à altura atual da peça na mesa. Use a porcentagem da barra de progresso como pista.`,
      atividade: `Olhe a peça na impressora e olhe a prévia no projetor. Mova a barra da prévia até ela ficar parecida com a peça de verdade. Em que camada mais ou menos a máquina está?`,
      gabarito: `Não existe um número único: depende do andamento. A resposta certa é a criança encontrar no Preview uma camada com altura parecida com a peça real e dizer o número aproximado, percebendo que a prévia bate com a máquina.`,
    },
    {
      titulo: `Quanto tempo ainda falta?`,
      tipo: `Estimativa com a barra de progresso`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre na tela da impressora a porcentagem feita e o tempo restante. Ajude a ler os números. Anote no cartão de cada criança a estimativa para conferir na aula seguinte.`,
      atividade: `Veja na tela da impressora a porcentagem já feita e o tempo que falta. Anote no seu cartão: quantos por cento já foi e quantos minutos ainda faltam para a peça ficar pronta.`,
      gabarito: `A resposta correta é a criança ler e anotar os dois valores mostrados na máquina (por exemplo: 40 por cento feito, faltam 35 minutos). O importante é registrar a porcentagem e o tempo que a própria impressora informa.`,
    },
    {
      titulo: `Por que a peça grande demora mais?`,
      tipo: `Explicação com raciocínio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre lado a lado uma peça pequena e uma grande (ou duas prévias com números de camadas diferentes). Conduza pela ideia de que mais camadas e camadas maiores levam mais tempo. Aceite a explicação com as palavras da criança.`,
      atividade: `Temos uma peça pequena e uma peça grande. Qual vai demorar mais para imprimir? Explique por quê, falando sobre as camadas.`,
      gabarito: `A peça grande demora mais. Porque ela é mais alta e mais larga, então precisa de mais camadas empilhadas e cada camada é maior; como a impressora faz uma camada de cada vez, mais camadas significam mais tempo.`,
    },
  ],
};
