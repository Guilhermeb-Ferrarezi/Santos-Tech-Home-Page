import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Escolhendo o meu personagem",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Escolher uma ideia de personagem ou objeto, desenhar um rascunho rápido no papel e começar o corpo base no MagicaVoxel com blocos grandes para definir tamanho e proporção.`,
  descricao: `Nesta aula cada criança vira a dona de uma ideia. Antes de tocar no computador, todo mundo decide o que vai criar: um bichinho, um robô, um herói, uma comidinha ou um objeto simples. Para não se perder no meio do caminho, a criança desenha um rascunho rápido no papel, do jeitinho dela. Esse desenho não precisa ser bonito nem perfeito: ele é só um mapa, um guia para lembrar a forma que ela quer construir com os cubinhos depois.

Com a ideia escolhida e o rascunho na mão, abrimos o MagicaVoxel e começamos o corpo base do modelo. Aqui a palavra mágica é proporção. Em vez de já querer fazer olhos, dedos e detalhes minúsculos, a criança monta primeiro a forma principal usando blocos grandes: um bloco grande para o corpo, outro para a cabeça, outros para os braços ou pernas. É como construir com caixas de papelão antes de pintar a casa por dentro.

O objetivo desta aula não é terminar o personagem, e sim acertar o tamanho e o encaixe das partes. Se a cabeça ficou pequena demais ou o corpo gigante, este é o momento perfeito para arrumar, porque ainda está tudo simples e fácil de mexer. A criança aprende que todo modelo bom começa grande e simples, e só depois ganha forma e detalhe.

Para o professor, esta aula mistura papel e tela. Reserve um tempo curtinho para os rascunhos, circule olhando as ideias e ajude quem travou a escolher algo possível de fazer com voxels. Depois, conduza a construção do corpo base passo a passo, mostrando no projetor onde clicar. Comemore cada forma que aparece na tela, mesmo que ainda esteja toda quadradinha.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto e um projeto novo vazio (um por criança)`,
    `Projetor ou TV grande espelhando a tela do professor para todos verem onde clicar`,
    `Folhas de papel sulfite e lápis ou canetinhas para os rascunhos rápidos`,
    `Exemplos prontos de modelos voxel simples (um bichinho, um robô e um objeto) para inspirar`,
    `Cartão ou slide com a regra "Primeiro a forma grande, depois os detalhes"`,
    `Mouse para cada criança (facilita muito girar e clicar no MagicaVoxel)`,
  ],
  conceitosChave: [
    `Personagem — o bonequinho, bichinho ou objeto que você vai criar no computador.`,
    `Rascunho — um desenho rápido e simples no papel que serve de guia para a sua criação.`,
    `Corpo base — a forma principal do modelo, feita só com blocos grandes, sem detalhes ainda.`,
    `Proporção — o tamanho de cada parte comparado com as outras, para a cabeça não ficar grande demais nem o corpo pequeno demais.`,
    `Bloco grande — um pedaço grandão de cubinhos usado para montar a forma rápido, como uma caixa.`,
    `Referência — olhar o seu rascunho ou um exemplo pronto para saber o que construir.`,
    `Forma principal — o contorno geral do personagem, antes de pintar e enfeitar.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje o objetivo é simples e poderoso: cada criança escolhe uma ideia, faz um rascunho no papel e começa o corpo base no MagicaVoxel usando blocos grandes. Você NÃO precisa terminar o personagem nesta aula. O sucesso aqui é a criança ter uma forma principal na tela com tamanho e proporção razoáveis. Os detalhes, as cores e os enfeites vêm nas próximas aulas, então segure a vontade (sua e das crianças) de já querer fazer olhinhos e dedinhos.

No MagicaVoxel, a criança vai usar três coisas: a ferramenta de pintar/adicionar voxels (ícone do pincel/lápis, chamada Attach ou Brush, à esquerda), o modo de tijolo grande para colocar vários cubinhos de uma vez, e o botão direito do mouse para apagar (Erase). Para girar a cena e ver de todos os lados, segura o botão esquerdo do mouse num espaço vazio e arrasta. Para aproximar ou afastar, usa a rodinha do mouse. Decore esses três gestos: girar, aproximar e apagar. São os que mais salvam aula.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

10 min — Aquecimento e escolha da ideia. Receba a turma e mostre no projetor dois ou três exemplos prontos (um bichinho, um robô, um objeto). Pergunte: "O que VOCÊ quer criar?" Dê opções fáceis para quem travar (gatinho, sorvete, robozinho). Entregue papel e peça um rascunho RÁPIDO, de um minuto, só o contorno. Diga que não precisa ficar bonito, é só um mapa.

15 min — Conteúdo novo guiado. No seu computador, com o projetor ligado, abra um projeto novo. Apague o modelo de exemplo que vem na tela: clique no ícone de borracha/Erase (ou use o botão direito) e arraste sobre os voxels, ou use Edit e o comando de limpar. Mostre a ferramenta Attach (pincel, à esquerda) e o seletor de tamanho do tijolo: aumente o "Brush" para um tijolo grande (por exemplo de tamanho maior que 1) para colocar muitos cubinhos juntos. Construa na frente deles um corpo base bem simples: um bloco grande embaixo (corpo) e um bloco menor em cima (cabeça). Gire a cena para mostrar os lados.

25 min — Mão na massa. Cada criança no seu computador. Peça que olhem o rascunho e montem só a forma grande: corpo, depois cabeça, depois braços ou pernas com blocos. Circule sem parar. Lembre a regra: "Primeiro a forma grande." Se alguém já está fazendo detalhe minúsculo, traga de volta para a proporção. Ajude a girar a cena para conferir todos os lados.

10 min — Desafio e compartilhar. Desafio: "Confira se a cabeça não está maior que o corpo. Ajuste se precisar." Depois, cada criança gira o próprio modelo e mostra para um colega ou para a turma, dizendo o que escolheu criar.

## Como explicar para crianças

Use a analogia das caixas: "Antes de pintar uma casa por dentro, a gente monta as paredes com caixas grandes. O personagem é igual: primeiro as caixas grandes, depois os enfeites." Fale sempre em "forma grande primeiro". Para proporção, peça que olhem o próprio corpo: a cabeça é menor que a barriga. Elogie cada forma que aparece, mesmo toda quadradinha, dizendo que está exatamente certo para esta fase.

## Erros comuns e como ajudar

O erro mais comum é começar pelos detalhes (olhos, dedos) antes da forma. Redirecione com carinho para os blocos grandes. Outro erro: a criança não consegue girar a cena e acha que "sumiu" o modelo; mostre o gesto de arrastar com o botão esquerdo num espaço vazio. Muitos apagam sem querer com o botão direito; explique que direito apaga e esquerdo coloca. Quem escolheu algo difícil demais (um dragão com asas) deve simplificar para a forma básica primeiro. E quem fica com a cabeça gigante: peça para comparar com o rascunho e diminuir o bloco da cabeça.`,
  exercicios: [
    {
      titulo: `Minha ideia em uma palavra`,
      tipo: `Escolha e oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça uma rodada rápida pela turma. Cada criança diz em voz alta o que quer criar. Tenha sugestões prontas para quem travar (gatinho, robô, sorvete, carrinho). Garanta que cada ideia seja simples o bastante para virar voxel.`,
      atividade: `Pense no que você mais quer criar hoje e diga em uma palavra só: o que vai ser o seu personagem ou objeto?`,
      gabarito: `Não há resposta certa única. A criança deve escolher uma ideia simples e nomeá-la, por exemplo: "gatinho", "robô", "sorvete", "casa", "peixe". O professor confirma que a ideia cabe em blocos grandes; se for muito complicada, ajuda a simplificar.`,
    },
    {
      titulo: `Rascunho de um minuto`,
      tipo: `Desenho no papel`,
      tempo: `5 minutos`,
      guiaProfessor: `Entregue papel e lápis. Cronometre um minuto. Reforce que é só o contorno, sem capricho. Circule elogiando os rascunhos. O objetivo é ter um guia, não uma obra de arte.`,
      atividade: `Desenhe bem rápido, em um minuto, a forma do seu personagem. Faça só o contorno grande: corpo, cabeça e braços ou pernas. Não precisa caprichar.`,
      gabarito: `Espera-se um desenho simples mostrando a forma principal com partes grandes (corpo e cabeça pelo menos). Está correto qualquer rascunho legível que sirva de guia. Não se avalia beleza, e sim se dá para entender as partes e o tamanho de cada uma.`,
    },
    {
      titulo: `O corpo base com blocos grandes`,
      tipo: `Mão na massa no MagicaVoxel`,
      tempo: `15 minutos`,
      guiaProfessor: `Conduza passo a passo no projetor. Mostre a ferramenta Attach (pincel) e como aumentar o tamanho do tijolo para colocar muitos voxels juntos. Peça primeiro o corpo, depois a cabeça em cima. Circule ajudando a girar a cena com o botão esquerdo do mouse.`,
      atividade: `Abra o seu projeto vazio. Olhando o seu rascunho, monte só a forma grande: faça um bloco grande para o corpo e, em cima, um bloco menor para a cabeça. Use blocos grandes, sem detalhes ainda.`,
      gabarito: `O modelo deve ter pelo menos duas partes empilhadas e reconhecíveis (corpo embaixo e cabeça em cima), feitas com blocos grandes. Está correto se a criança usou voxels grandes e parou na forma principal, sem entrar em olhos ou dedos. Não importa a cor nesta etapa.`,
    },
    {
      titulo: `Conferindo a proporção`,
      tipo: `Verificação e ajuste`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre que se gira a cena arrastando com o botão esquerdo num espaço vazio. Peça que comparem cabeça e corpo com o próprio corpo e com o rascunho. Ajude quem precisa apagar (botão direito) e refazer um bloco do tamanho certo.`,
      atividade: `Gire o seu modelo e olhe de todos os lados. A cabeça está menor que o corpo, como no seu rascunho? Se algo ficou grande ou pequeno demais, ajuste o tamanho do bloco.`,
      gabarito: `A criança deve girar a cena, comparar as partes e corrigir proporções erradas. Está correto quando a cabeça fica visivelmente menor que o corpo (a menos que o personagem peça o contrário, como um boneco cabeçudo) e o modelo lembra o rascunho. O importante é a criança ter olhado, comparado e ajustado.`,
    },
    {
      titulo: `Mostre e conte`,
      tipo: `Compartilhar e desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas ou faça uma roda. Cada criança gira o próprio modelo e conta o que escolheu criar e qual parte é o corpo e qual é a cabeça. Elogie todas as formas, mesmo quadradinhas. Use para verificar quem entendeu a ideia de forma base.`,
      atividade: `Mostre o seu modelo para um colega girando a tela. Conte: o que você está criando? Aponte onde está o corpo e onde está a cabeça do seu personagem.`,
      gabarito: `A criança consegue apresentar o modelo, nomear o que está criando e apontar corpo e cabeça. Está correto quando ela identifica as partes e explica a ideia, mesmo que o modelo ainda esteja só na forma base e sem cores. Demonstra que entendeu corpo base e proporção.`,
    },
  ],
};
