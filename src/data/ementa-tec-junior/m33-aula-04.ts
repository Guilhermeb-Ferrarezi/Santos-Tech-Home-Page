import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Construindo o Nosso Mundo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança terá modelado o cenário principal do seu jogo no MagicaVoxel, com chão e várias peças como árvores, pedras ou prédios em voxel, e salvado tudo como o primeiro asset pronto.`,
  descricao: `Esta é a aula em que o mundo do jogo sai do papel e vira voxel de verdade! Nas aulas anteriores deste mês, a turma teve a grande ideia do jogo, montou a lista de assets e conheceu como é um cenário em voxel. Agora chegou a hora mais esperada: praticar a fundo e construir, peça por peça, o lugar onde o jogo vai acontecer.

A ideia central é que um cenário não é uma coisa só, e sim várias peças juntas. Primeiro a gente faz o chão, que é a base de tudo, como o tabuleiro de um jogo de mesa. Depois, em cima desse chão, a gente espalha as peças do mundo: árvores em voxel, pedras, prédios, arbustos ou o que combinar com a história do jogo. Cada peça é simples, feita de cubinhos, mas juntas elas formam um lugar inteiro, vivo e cheio de detalhes.

Outro aprendizado importante desta aula é a paleta de cores que combina. A turma vai descobrir que um cenário fica muito mais bonito quando as cores conversam entre si: verdes e marrons para a natureza, cinzas para pedras e prédios, um azul para a água. Não é colorir de qualquer jeito, e sim escolher poucas cores que ficam bem juntas, como montar uma roupa combinando.

O professor conduz tudo demonstrando no projetor, construindo junto com as crianças. Como elas leem e escrevem pouco, o segredo é fazer primeiro, devagar, e deixar que copiem olhando a sua tela. No fim, cada cenário é salvo como o primeiro asset pronto do jogo, e isso deixa as crianças orgulhosas de verem o mundo delas tomando forma.`,
  materiais: [
    `Um computador por criança com o MagicaVoxel já aberto, com um modelo novo e vazio na tela.`,
    `Computador do professor ligado ao projetor ou TV grande, para todos verem onde clicar.`,
    `Arquivo de exemplo salvo (um cenário pronto com chão, árvores e pedras) para mostrar o resultado esperado.`,
    `Imagens impressas ou na tela de cenários simples de jogos em voxel, para inspirar.`,
    `Cartela impressa de paletas de cores que combinam (natureza, cidade, água) para as crianças escolherem.`,
    `Lápis de cor e folhas de papel quadriculado grosso para o exercício de planejamento.`,
    `Adesivos ou carimbos de estrelinha para premiar quem salvar o cenário pronto.`,
  ],
  conceitosChave: [
    `Cenário — o lugar onde o jogo acontece, o mundo todo feito de cubinhos onde o personagem vai andar.`,
    `Asset — cada peça pronta do jogo, como uma árvore, uma pedra ou o cenário inteiro, guardada para usar depois.`,
    `Chão — a base do cenário, o tapete de cubinhos onde a gente coloca todas as outras peças em cima.`,
    `Peça — cada coisinha do mundo: uma árvore, uma pedra, um prédio. Várias peças juntas formam o cenário.`,
    `Paleta de cores — a caixinha de tintas do MagicaVoxel, com as cores que a gente escolhe para pintar os cubinhos.`,
    `Cores que combinam — poucas cores que ficam bem juntas, como verde e marrom para a natureza ou cinza para pedras.`,
    `Salvar — guardar o trabalho no computador com um nome, para não perder e poder abrir de novo na próxima aula.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você vai guiar a turma a construir um cenário inteiro: um chão e várias peças em cima dele (árvores, pedras, prédios). Você não precisa ser artista. Precisa saber quatro coisas no MagicaVoxel: colocar cubinhos, apagar cubinhos, girar a cena e pintar com cor. Cada cubinho se chama voxel (o pixel em 3D). A caixa de trabalho é a área com linhas finas onde a gente constrói. As ferramentas ficam na barra da esquerda: o lápis ou o botão Attach coloca voxels; o botão Erase (borracha) apaga. Para girar a cena, segure o botão direito do mouse e arraste; a rodinha dá zoom. As cores ficam na palette (paleta), o quadro de quadradinhos coloridos no canto da tela: clique numa cor para escolhê-la antes de colocar o voxel. Memorize: primeiro o chão, depois as peças em cima, sempre com poucas cores que combinam.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — aquecimento e revisão: Receba a turma e relembre a lista de assets feita nas aulas passadas. Peça que cada criança gire o mundo no seu computador (botão direito mais arrastar) e coloque alguns cubinhos para aquecer. Mostre no projetor o arquivo de exemplo com o cenário pronto e diga: hoje a gente vai construir o nosso mundo!

15 min — conteúdo novo guiado: No projetor, construa o chão primeiro. Com o lápis ou Attach ativo, clique e arraste para fazer uma plataforma plana e larga de voxels, mais ou menos 16 por 16 por 1 de altura. Escolha um verde na paleta antes, clicando no quadradinho da cor. Depois mostre como fazer uma árvore: um tronco fininho marrom de 1 por 1 subindo 3 ou 4 cubinhos, e uma copa verde de cubinhos em cima. Faça também uma pedra: um amontoado cinza de poucos cubinhos. Narre cada clique e gire a cena para mostrar de todos os lados.

25 min — mão na massa: Agora cada criança constrói o seu cenário. Circule pela sala. Primeiro todos fazem o chão, depois espalham pelo menos três peças em cima (árvores, pedras ou prédios, de acordo com a história do jogo). Lembre sempre da paleta: poucas cores que combinam. Ajude quem travar mostrando de novo na tela do próprio aluno.

10 min — desafio e compartilhar: Lance o desafio de adicionar mais uma peça especial que combine com o jogo. Depois faça a roda: cada criança gira o seu cenário e conta quais peças colocou. Salve o arquivo de cada um (menu File, depois Save, ou o botão de salvar) com o nome da criança, explicando que esse é o primeiro asset pronto do jogo. Dê uma estrelinha.

## Como explicar para crianças

Fale com comparações que elas conhecem. Diga que o chão é o tapete do mundo, ou o tabuleiro de um jogo, onde tudo vai ficar em cima. Diga que cada árvore, pedra ou prédio é uma peça de montar, e que juntar várias peças cria um lugar inteiro, como uma maquete de cubinhos. Para as cores, mostre a cartela de paletas e brinque: na natureza usamos verde de grama e marrom de tronco; nas pedras e prédios, cinza; na água, azul. Repita os nomes cenário, peça, chão e paleta várias vezes. Mostre, não explique demais: faça você primeiro, devagar, e peça que copiem olhando a sua tela.

## Erros comuns e como ajudar

O erro mais comum é a criança colocar as peças flutuando, longe do chão. Ajude a girar a cena para enxergar o vão e a encostar a peça no chão. Outro erro é o arco-íris: usar todas as cores da paleta de uma vez, deixando tudo confuso. Volte à cartela e ajude a escolher só três ou quatro cores que combinam. Há quem apague o chão sem querer com a borracha ativa; ensine a olhar qual ferramenta está marcada antes de clicar. Quem fizer o chão pequeno demais não terá espaço para as peças, então mostre como esticar a plataforma. E quem terminar rápido pode caprichar nos detalhes, sempre lembrando de salvar o arquivo no fim para não perder o cenário.`,
  exercicios: [
    {
      titulo: `Escolher a paleta que combina`,
      tipo: `Roda de conversa com cartela`,
      tempo: `5 minutos`,
      guiaProfessor: `Antes de tocar no computador, mostre a cartela de paletas (natureza, cidade, água). Pergunte que cores combinam para o cenário do jogo da turma. Conduza para a ideia de escolher poucas cores que conversam entre si, e não usar todas de uma vez.`,
      atividade: `Olhe a cartela de cores e escolha de três a quatro cores que combinam para o seu cenário. Diga em voz alta quais escolheu e por quê (por exemplo: verde e marrom porque tem floresta).`,
      gabarito: `Acertou quem escolher um grupo pequeno de cores que combinam (como verde mais marrom para natureza, ou cinza para cidade) e souber explicar a ligação com a história do jogo. Se a criança quiser usar todas as cores, mostre que poucas cores deixam o cenário mais bonito.`,
    },
    {
      titulo: `Fazer o chão do cenário`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `No projetor, mostre como escolher uma cor na paleta clicando no quadradinho e como deixar o lápis ou Attach ativo. Faça você primeiro, clicando e arrastando para criar uma plataforma plana e larga. Depois peça que cada criança repita, e circule ajudando.`,
      atividade: `Construa o chão do seu cenário: uma plataforma plana e larga de voxels, com mais ou menos 16 de largura por 16 de fundo e só 1 de altura. Escolha a cor do chão na paleta antes de começar.`,
      gabarito: `Acertou quem terminar com uma plataforma plana, sem buracos, larga o bastante para caberem várias peças em cima, e pintada com uma cor escolhida da paleta. O tamanho não precisa ser exato; o importante é ser um chão plano e amplo.`,
    },
    {
      titulo: `Plantar uma árvore em voxel`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor como montar um tronco fininho marrom subindo do chão e uma copa verde de cubinhos em cima. Reforce que a árvore precisa ficar encostada no chão, sem flutuar. Lembre de trocar a cor na paleta entre o tronco e a copa.`,
      atividade: `Coloque uma árvore no seu cenário: um tronco marrom de 1 cubinho de largura subindo 3 ou 4 cubinhos a partir do chão, e uma copa verde de cubinhos em cima. Gire a cena para ver se ela está encostada no chão.`,
      gabarito: `Acertou quando a árvore tem tronco marrom encostado no chão e copa verde em cima, sem vão flutuando. Se houver espaço vazio entre a árvore e o chão, a criança deve descer a peça até encostar.`,
    },
    {
      titulo: `Espalhar as peças do mundo`,
      tipo: `Desafio de construção`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor exemplos de pedras (amontoado cinza) e prédios (caixa alta de cubinhos). Deixe cada criança decidir e espalhar pelo menos três peças pelo chão, de acordo com a história do jogo. Ajude a posicionar com espaço entre elas, sem amontoar tudo num canto.`,
      atividade: `Espalhe pelo menos três peças pelo seu cenário (árvores, pedras ou prédios), deixando um espacinho entre elas. Use só as cores da sua paleta escolhida. Depois gire a cena e mostre para um colega.`,
      gabarito: `Acertou quem colocar três ou mais peças encostadas no chão, distribuídas pelo cenário com algum espaço entre elas, e usando apenas as cores da paleta combinada. As peças devem ser reconhecíveis (dá para dizer que é árvore, pedra ou prédio).`,
    },
    {
      titulo: `Salvar o primeiro asset do jogo`,
      tipo: `Prática na ferramenta e compartilhar`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor como salvar: abra o menu File, clique em Save (ou use o botão de salvar) e digite o nome da criança no arquivo. Explique que esse cenário é o primeiro asset pronto do jogo. Confira que cada criança salvou de verdade antes de dar a estrelinha.`,
      atividade: `Salve o seu cenário com o seu nome, usando o menu File e depois Save. Em seguida, gire o seu mundo na tela e conte para a turma quais peças você colocou.`,
      gabarito: `Acertou quem salvar o arquivo com o próprio nome (o cenário pode ser aberto de novo depois) e conseguir apontar, ao girar a cena, o chão e pelo menos três peças. Se a criança esquecer de salvar, oriente passo a passo até o arquivo ficar guardado.`,
    },
  ],
};
