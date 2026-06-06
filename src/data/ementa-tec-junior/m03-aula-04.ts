import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Aperta a Tecla e Faz Som",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança vai fazer seu personagem se mover ou tocar um som divertido quando uma tecla do teclado (as setas ou a barra de espaço) for apertada.`,
  descricao: `Nesta aula as crianças descobrem que o teclado é um controle mágico: cada tecla pode dar uma ordem para o personagem na tela. Até agora, na aula passada, elas aprenderam que clicar faz acontecer. Hoje damos um passo a mais: em vez de só clicar com o mouse, vamos apertar uma tecla e ver o personagem reagir na hora.

A grande novidade é o bloco de evento "quando a tecla [espaço] for pressionada", que fica na gaveta amarela (Eventos). Ele é como um interruptor: assim que a criança aperta a tecla escolhida, tudo o que estiver pendurado embaixo dele acontece. Vamos juntar esse bloco com os blocos de movimento que a turma já conhece (mover, mudar x, mudar y) para que as setas controlem o personagem como num videogame de verdade.

A segunda novidade é o som. Na gaveta rosa (Som) existe o bloco "toque o som [...] até o fim". As crianças vão escolher um som engraçado da biblioteca do Scratch (um miado, um pulo, uma risada) e fazer ele tocar quando a barra de espaço for apertada. Esse é o momento mais divertido da aula: a sala vira uma orquestra de sons.

Por que isso importa? Porque a criança passa de espectadora a controladora. Ela sente que está no comando do jogo. Esse domínio do teclado e do som é a base do projeto do mês (Meu primeiro jogo 2D) e prepara o terreno para as próximas aulas, em que o personagem vai falar e contar pontos.`,
  materiais: [
    `Computadores (um por criança ou em dupla) com o Scratch já aberto no projeto da turma — de preferência o Scratch instalado offline ou o site scratch.mit.edu carregado antes da aula`,
    `Projetor ou TV ligados ao computador do professor para demonstrar cada passo na tela grande`,
    `Caixas de som ou fones de ouvido testados antes da aula, com o volume já ajustado`,
    `Um projeto de exemplo pronto pelo professor: um personagem (pode ser o gato) que anda com as setas e mia ao apertar espaço`,
    `Folhas de papel e lápis de cor para o exercício de desenho do "mapa de teclas"`,
    `Cartões grandes desenhados com as setas (cima, baixo, esquerda, direita) e a barra de espaço, para a brincadeira de aquecimento`,
    `Lista impressa dos nomes das crianças com o personagem escolhido por cada uma, para o professor acompanhar`,
  ],
  conceitosChave: [
    `Tecla — cada botãozinho do teclado; apertar uma tecla é como dar uma ordem para o personagem.`,
    `Evento de teclado — o bloco amarelo "quando a tecla [...] for pressionada"; ele é o interruptor que liga a ação assim que você aperta a tecla.`,
    `Setas — as quatro teclas com flechinhas (cima, baixo, esquerda, direita) que usamos para mover o personagem pelos lados.`,
    `Barra de espaço — a tecla comprida lá embaixo do teclado; nesta aula ela vai fazer o personagem tocar um som.`,
    `Bloco de som — o bloco rosa "toque o som [...] até o fim"; ele faz o computador tocar um barulho que você escolheu.`,
    `Coordenada x e y — os números que dizem onde o personagem está; mudar x move para os lados, mudar y move para cima e para baixo.`,
    `Pilha de blocos — os blocos encaixados um embaixo do outro, como peças de montar, que o computador lê de cima para baixo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Nesta aula o coração é o bloco de evento de teclado. No Scratch ele fica na gaveta amarela chamada "Eventos" e tem o nome "quando a tecla [espaço] for pressionada". Dentro desse bloco existe uma listinha (um menuzinho com uma setinha para baixo) onde você escolhe qual tecla vai ligar a ação: espaço, seta para cima, seta para baixo, seta para a esquerda, seta para a direita, ou qualquer letra. Tudo o que você encaixar embaixo desse bloco acontece no instante em que a tecla é apertada.

Para mover o personagem, use os blocos azuis da gaveta "Movimento". Os mais fáceis para esta idade são "adicione [10] a x" (move para a direita), "adicione [-10] a x" (move para a esquerda), "adicione [10] a y" (move para cima) e "adicione [-10] a y" (move para baixo). Pense em x como "para os lados" e y como "para cima e para baixo". Não precisa explicar matemática: basta dizer que x é deitado e y é em pé.

Para o som, vá na gaveta rosa "Som". O bloco "toque o som [miau] até o fim" toca o som inteiro. Antes, clique na aba "Sons" (canto superior esquerdo, ao lado de "Código" e "Fantasias") e use o ícone do alto-falante embaixo à esquerda para "Escolher um som" da biblioteca. Teste o volume antes da turma chegar.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

10 min — Aquecimento: sente a turma em roda. Mostre os cartões das setas e da barra de espaço. Brinque de "robô": quando você levanta o cartão da seta para a direita, todos dão um passo para a direita; ao levantar o cartão de espaço, todos fazem um som ("piu!"). Isso ensina, com o corpo, que cada tecla dá uma ordem.

15 min — Conteúdo novo guiado: no projetor, abra o Scratch. Vá na gaveta amarela "Eventos", arraste o bloco "quando a tecla [espaço] for pressionada" para a área de código (o quadro grande do meio). Clique na setinha do menu e escolha "seta para a direita". Depois vá na gaveta azul "Movimento" e encaixe embaixo "adicione [10] a x". Aperte a seta para a direita no teclado e mostre o gato andando. Repita com a seta para a esquerda usando "adicione [-10] a x". Por fim, vá na gaveta rosa "Som", clique na aba "Sons", escolha um som e encaixe "toque o som [...] até o fim" embaixo de um bloco "quando a tecla [espaço] for pressionada".

25 min — Mão na massa: cada criança no seu computador. Peça que arrastem o bloco amarelo de tecla, escolham uma seta e encaixem um bloco de movimento. Passe de mesa em mesa. Quando terminarem o movimento, mostre como adicionar o som no espaço. Incentive testar apertando as teclas de verdade. Quem terminar rápido pode adicionar a segunda seta (esquerda e direita).

10 min — Desafio + compartilhar: lance o desafio de fazer o personagem andar para os quatro lados (quatro pilhas de blocos, uma para cada seta). Depois, faça uma roda: cada criança aperta as teclas e a turma vê e ouve o resultado. Aplauda cada um.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Diga: "O teclado é o controle do seu videogame. Cada botãozinho manda o personagem fazer uma coisa." Para o bloco amarelo, use a imagem do interruptor de luz: "quando você aperta, a luz acende; quando aperta a tecla, o personagem obedece." Para x e y, fale "x é andar deitado, para os lados; y é andar em pé, para cima e para baixo." Para o som, diga "o computador tem uma caixinha de barulhos; vamos escolher um e fazer ele tocar quando apertarmos o espaço." Use sempre o gesto: aperte a tecla no ar enquanto fala.

## Erros comuns e como ajudar

O erro mais comum é a criança esquecer de clicar na área do palco ou na janela do Scratch antes de apertar a tecla — sem o foco na janela, a tecla não funciona; peça para clicar uma vez na tela do Scratch. Outro erro é encaixar o bloco de movimento separado, sem prender embaixo do bloco amarelo — mostre o "clique" magnético dos blocos. Alguns escolhem a tecla errada no menu (por exemplo, "espaço" achando que é a seta); peça para conferir a setinha. No som, é comum esquecer de escolher o som na aba "Sons" antes — sem som escolhido, o bloco fica vazio. Por fim, números muito grandes em x e y fazem o personagem sumir da tela; volte para 10 e -10.`,
  exercicios: [
    {
      titulo: `Anda com a Setinha`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor e depois deixe a turma repetir no próprio computador. Lembre todos de clicar na tela do Scratch antes de apertar a tecla, para a janela "ouvir" o teclado.`,
      atividade: `Arraste o bloco amarelo "quando a tecla [...] for pressionada", escolha "seta para a direita" no menuzinho e encaixe embaixo o bloco azul "adicione [10] a x". Aperte a seta para a direita e veja o personagem andar.`,
      gabarito: `Acertou quando, ao apertar a seta para a direita, o personagem desliza para o lado direito da tela. Os dois blocos devem estar encaixados (grudados) e a tecla escolhida no menu deve ser "seta para a direita".`,
    },
    {
      titulo: `A Caixinha de Barulhos`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre primeiro como ir na aba "Sons" e clicar em "Escolher um som". Deixe cada criança ouvir e escolher o som que mais gostar. Cuide do volume das caixas ou use fones.`,
      atividade: `Clique na aba "Sons" (em cima, à esquerda), escolha um som engraçado da biblioteca. Volte para a aba "Código", pegue o bloco amarelo "quando a tecla [espaço] for pressionada" e encaixe embaixo o bloco rosa "toque o som [...] até o fim". Aperte a barra de espaço.`,
      gabarito: `Acertou quando, ao apertar a barra de espaço, o computador toca o som escolhido. O bloco rosa deve mostrar o nome de um som (não pode estar vazio) e estar encaixado embaixo do bloco amarelo de espaço.`,
    },
    {
      titulo: `Robô das Teclas`,
      tipo: `Jogo / movimento corporal`,
      tempo: `7 minutos`,
      guiaProfessor: `Use os cartões das setas e do espaço. Levante um cartão por vez e a turma reage com o corpo. Comece devagar e vá acelerando para virar uma brincadeira animada.`,
      atividade: `Em pé, a turma vira robô. Quando o professor levanta a seta para a direita, todos dão um passo para a direita; seta para a esquerda, um passo para a esquerda; barra de espaço, todos fazem o som "piu!". Repita várias vezes, cada vez mais rápido.`,
      gabarito: `Acertou quando cada criança associa o cartão certo à ação certa: seta move o corpo para o lado indicado e o espaço faz o som. Mostra que entenderam que cada tecla dá uma ordem diferente.`,
    },
    {
      titulo: `Meu Mapa de Teclas`,
      tipo: `Desenho / papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Distribua papel e lápis de cor. Desenhe um exemplo simples no quadro. Peça que cada criança planeje, no papel, o que cada tecla do seu jogo vai fazer antes de programar.`,
      atividade: `Desenhe seu personagem no meio da folha. Ao redor, desenhe as quatro setas e a barra de espaço. Ligue cada tecla com uma flecha até uma ação: "anda para cá", "anda para lá", "faz som". Pinte do jeito que quiser.`,
      gabarito: `Acertou quando o desenho mostra cada tecla ligada a uma ação possível (mover para um lado ou tocar som). Não há um único desenho certo; o importante é cada seta ter uma função e o espaço estar ligado ao som.`,
    },
    {
      titulo: `Controle dos Quatro Lados`,
      tipo: `Desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha o desafio só para quem já fez o movimento básico. Ajude a montar uma pilha de blocos para cada seta. Se o personagem sumir da tela, lembre de usar os números 10 e -10.`,
      atividade: `Monte quatro pilhas de blocos: seta para a direita com "adicione [10] a x"; seta para a esquerda com "adicione [-10] a x"; seta para cima com "adicione [10] a y"; seta para baixo com "adicione [-10] a y". Teste apertando todas as setas e faça o personagem passear pela tela.`,
      gabarito: `Acertou quando o personagem se move corretamente para os quatro lados conforme a seta apertada: direita e esquerda mudam o x, cima e baixo mudam o y. As quatro pilhas devem existir, cada uma com o bloco de tecla certo encaixado no bloco de movimento certo.`,
    },
  ],
};
