import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Montando o Cenário da Fase",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Construir o ambiente da fase no Maya — chão, paredes, obstáculos e elementos de fundo — organizando os modelos no espaço com snap e grid para montar o palco onde o jogo vai acontecer.`,
  descricao: `Nesta aula, os alunos saem da criação de objetos soltos e passam a montar um lugar de verdade: o cenário da fase. Até agora eles modelaram o personagem e os itens; hoje eles constroem o palco onde tudo isso vai acontecer. O cenário é o chão que o jogador pisa, as paredes que limitam o caminho, os obstáculos que ele precisa desviar e os elementos de fundo que dão clima ao lugar. É como montar um cenário de teatro: cada peça precisa estar no lugar certo para a história funcionar.

O coração da aula é a organização no espaço. No Maya, o espaço 3D tem um chão quadriculado chamado grid (a grade). Para encaixar as peças sem deixar buracos nem sobreposições, os alunos vão usar o snap (o imã), que faz os objetos "grudarem" nos pontos da grade. Com o grid e o snap juntos, paredes alinham com paredes, o chão fica reto e os obstáculos ficam bem posicionados. Sem isso, o cenário fica torto, com frestas e peças flutuando — exatamente o que mais atrapalha os alunos nesta fase.

Os alunos vão reaproveitar objetos simples (cubos, planos e cilindros) e duplicá-los para formar o ambiente. Em vez de modelar cada parede do zero, eles aprendem a copiar e colar peças prontas e a movê-las com precisão. Essa é uma ideia importante em criação de games: reutilizar peças economiza tempo e deixa o cenário coerente. Um chão é um plano grande; uma fileira de paredes é o mesmo cubo repetido várias vezes; uma pilha de caixas é um obstáculo montado com cópias.

Ao final, cada aluno terá o esqueleto do cenário montado: um chão claro, paredes delimitando a área de jogo, alguns obstáculos no caminho e um ou dois elementos de fundo. Não precisa ter cor nem textura ainda — isso vem nas próximas aulas. O que importa hoje é que o palco esteja em pé, alinhado e organizado, pronto para receber materiais, cores e a arte da IA depois.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e licença ativa (de estudante ou comercial), um por aluno`,
    `Conta Autodesk já criada e com login feito antes da aula em cada máquina`,
    `Projetor ou TV para o professor mostrar a tela do Maya e demonstrar cada passo`,
    `Arquivo de exemplo: uma cena do Maya com o personagem e alguns itens já modelados das aulas anteriores`,
    `Arquivo de exemplo: um cenário simples já montado (chão, paredes e obstáculos) para servir de referência visual`,
    `Folha impressa ou slide com um mapa simples da fase em vista de cima (onde ficam paredes, obstáculos e fundo)`,
    `Mouse com três botões e roda para cada aluno (essencial para navegar no espaço 3D do Maya)`,
  ],
  conceitosChave: [
    `Cenário — o ambiente da fase: o conjunto de chão, paredes, obstáculos e fundo onde o jogo acontece.`,
    `Grid (grade) — o chão quadriculado da cena do Maya que serve de guia para alinhar e medir os objetos.`,
    `Snap (imã) — recurso que faz o objeto "grudar" nos pontos da grade, deixando o encaixe certinho e sem frestas.`,
    `Move Tool (mover) — a ferramenta com as três setas coloridas (atalho W) que arrasta o objeto pelos eixos X, Y e Z.`,
    `Duplicar — copiar um objeto já pronto (atalho Ctrl + D) para repetir paredes e caixas sem modelar tudo de novo.`,
    `Obstáculo — peça do cenário que fica no caminho do jogador, como uma caixa, um muro ou um buraco a desviar.`,
    `Eixos X, Y e Z — as três direções do espaço 3D: X é a largura, Y é a altura e Z é a profundidade.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para dar esta aula. O foco é simples: pegar peças prontas e organizá-las no espaço com precisão. A tela do Maya tem no centro a viewport (a janela 3D onde vemos a cena) com a grid (a grade quadriculada do chão). Em cima fica a barra de menus; à esquerda a Toolbox com as ferramentas de mover, girar e escalar; embaixo a Time Slider (que não usamos hoje). Para navegar na viewport, segure a tecla Alt e use o mouse: Alt + botão esquerdo gira a câmera, Alt + botão do meio anda de lado, e a roda do mouse aproxima ou afasta o zoom. Os atalhos da aula são W (mover), R (escalar) e Ctrl + D (duplicar). O recurso central é o snap à grade: o botão com o ícone de imã sobre uma grade, na barra de cima (Snap to grids), ou segurar a tecla X enquanto move um objeto.

## Passo a passo da aula

Aquecimento (10 min): Mostre no projetor o arquivo de exemplo com o cenário pronto e, ao lado, o mapa da fase em vista de cima. Pergunte à turma: onde fica o chão? E as paredes? E os obstáculos? Faça-os perceber que tudo está alinhado e encaixado. Relembre as ferramentas Move (W) e Escala (R) das aulas anteriores.

Conteúdo novo guiado (15 min): No Maya, crie o chão com Create > Polygon Primitives > Plane e aumente o tamanho com a ferramenta de escala (R). Ative o snap à grade clicando no ícone de imã sobre a grade, na barra de cima. Crie um cubo com Create > Polygon Primitives > Cube, aperte W e mova segurando a tecla X: mostre como ele "pula" de quadrado em quadrado da grade. Posicione a primeira parede na borda do chão. Aperte Ctrl + D para duplicar e mova a cópia para o lado, encostando na anterior, formando uma fileira. Repita para mostrar como nasce um muro inteiro a partir de uma peça só.

Mão na massa (25 min): Cada aluno monta seu cenário seguindo o mapa: primeiro o chão (um plano grande), depois as paredes nas bordas (cubos duplicados e encaixados pelo snap), em seguida dois ou três obstáculos no meio do caminho e, por fim, um ou dois elementos de fundo (uma caixa alta, uma plataforma). Circule pela sala lembrando de ativar o snap antes de mover e de olhar a cena de cima (apertando a tecla 8 ou usando o menu de câmera) para conferir o alinhamento.

Desafio + compartilhar (10 min): Cada aluno gira a câmera e mostra o cenário ao colega do lado, explicando onde o jogador entra e onde estão os obstáculos. Dois ou três voluntários mostram no projetor.

## Como explicar de forma clara

Use comparações concretas. Diga que a grid é como o piso quadriculado de uma quadra: serve para marcar onde cada coisa fica. O snap é um imã que puxa a peça para a linha certa, então nada fica torto. Duplicar é como usar uma "máquina de fotocópia" de peças: você faz uma parede boa e tira várias cópias iguais. Fale dos eixos com cores: a seta vermelha vai para os lados (X), a verde sobe e desce (Y) e a azul vai para frente e para trás (Z). Mostre sempre antes de mandar fazer, e repita em voz alta o atalho enquanto aponta na tela.

## Erros comuns e como ajudar

O erro mais comum é mover sem o snap ligado, deixando frestas entre as paredes; oriente a clicar no imã antes de arrastar ou segurar a tecla X. Outro erro é empurrar a peça para dentro do chão ou deixá-la flutuando, por mover no eixo Y sem querer; ensine a olhar a cena de frente (tecla 8) e a clicar só na seta da direção desejada. Muitos giram a câmera achando que estão movendo o objeto; lembre que para girar a câmera é Alt + botão esquerdo, e para mover a peça é a tecla W na seta colorida. Alguns duplicam dezenas de cubos e a cena trava; oriente a duplicar com calma e a apagar cópias erradas com a tecla Delete. Por fim, há quem perca a peça de vista; ensine o atalho F (Frame Selected) para a câmera voltar a focar no objeto selecionado.`,
  exercicios: [
    {
      titulo: `O chão da fase`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno crie um Plane pelo menu Create > Polygon Primitives e o aumente com a escala (R). Confira se o chão está reto e sobre a grade.`,
      atividade: `Crie um plano (Plane) no Maya, aumente o tamanho dele com a ferramenta de escala até cobrir uma boa área da grade e deixe-o como o chão da sua fase.`,
      gabarito: `O aluno tem um plano grande e reto apoiado sobre a grade, servindo de chão. Ele está centralizado e não está inclinado nem flutuando acima do piso.`,
    },
    {
      titulo: `Paredes na grade`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como ativar o snap à grade (ícone de imã) e usar Ctrl + D para duplicar. Verifique se as paredes encaixam sem frestas.`,
      atividade: `Crie um cubo, transforme-o em parede e duplique-o com Ctrl + D para montar uma fileira nas bordas do chão, usando o snap para encaixar uma peça na outra.`,
      gabarito: `Há uma fileira de cubos iguais alinhados na borda do chão, encostados um no outro sem frestas nem sobreposição, formando uma parede contínua.`,
    },
    {
      titulo: `Obstáculos no caminho`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Incentive o uso da vista de cima (tecla 8) para posicionar bem. Lembre de manter o snap ligado e de não enterrar as peças no chão.`,
      atividade: `Coloque dois ou três obstáculos no meio do cenário (caixas ou muros) deixando um caminho livre por onde o jogador possa passar entre eles.`,
      gabarito: `O cenário tem ao menos dois obstáculos apoiados no chão, posicionados de forma que ainda exista um caminho livre entre eles. As peças estão sobre a grade, sem afundar no chão.`,
    },
    {
      titulo: `Montando em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada um observe o cenário do colega de cima e aponte uma fresta ou peça torta, ajudando a corrigir com o snap.`,
      atividade: `Troque de lugar com o colega, observe o cenário dele pela vista de cima e ajudem-se a corrigir uma parede com fresta ou um obstáculo desalinhado.`,
      gabarito: `A dupla encontrou e corrigiu pelo menos um problema de alinhamento (fresta ou peça torta), e o aluno consegue explicar que o snap à grade foi o que resolveu o encaixe.`,
    },
    {
      titulo: `Roda de conversa: por que alinhar importa`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma e conduza com perguntas abertas. Anote no quadro as ideias que surgirem para retomar nas aulas de materiais e texturas.`,
      atividade: `Em roda, cada aluno diz por que um cenário bem alinhado deixa o jogo melhor e cita um recurso que usou hoje para acertar o encaixe das peças.`,
      gabarito: `A turma levanta ao menos quatro ideias válidas, como: o snap evita frestas, a grade ajuda a alinhar, duplicar economiza tempo, paredes sem buraco prendem o jogador e a vista de cima mostra o que está torto.`,
    },
  ],
};
