import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Detalhes que Dão Vida",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Refinar o modelo voxel com sombras, luzes e pequenos detalhes que dão personalidade e acabamento profissional ao personagem.`,
  descricao: `Nesta aula o aluno deixa de pensar no modelo como uma forma sólida e passa a enxergá-lo como uma superfície viva, cheia de variações de cor. Até agora o personagem já tem volume e uma pintura base feita com paletas. Agora chegou a hora de dar o toque final: acrescentar sombras nas partes baixas, luzes nas partes altas e pequenos detalhes voxel a voxel que transformam um boneco simples em um personagem com expressão e atitude.

A grande ideia desta aula é o contraste. Quando colocamos uma cor mais escura embaixo de um braço ou dentro de uma dobra, o cérebro entende aquilo como sombra e o modelo ganha profundidade. Quando colocamos um tom mais claro no topo da cabeça ou na ponta do nariz, parece que existe uma luz brilhando ali. Esse jogo de claro e escuro é o que separa um voxel art amador de um trabalho que parece feito por profissional, e o melhor é que ele depende mais de observação do que de habilidade técnica.

Os olhos merecem atenção especial. Um único voxel branco com um voxel preto ao lado pode criar um brilho no olhar que dá vida ao personagem. Pequenos detalhes como bochechas rosadas, uma marca na roupa, um botão ou a sombra embaixo do queixo fazem o modelo contar uma história. O aluno aprende que detalhe demais polui e detalhe de menos deixa o modelo sem graça, então o segredo é a dose certa.

Como esta é a última aula de pintura antes de preparar o modelo para a impressão, é importante lembrar que tudo que for feito aqui ficará registrado no modelo final. Detalhes muito pequenos podem desaparecer na impressão 3D, então a aula também ensina o aluno a pensar em detalhes que funcionam tanto na tela quanto no objeto impresso de verdade.`,
  materiais: [
    `Computadores com MagicaVoxel instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Arquivo de exemplo .vox com um personagem já pintado em cor base, para comparar antes e depois dos detalhes`,
    `Imagem de referência projetada mostrando o mesmo modelo sem sombras e com sombras, lado a lado`,
    `Paleta de cores preparada com tons claros e escuros de cada cor base já usada`,
    `Fones de ouvido opcionais para concentração durante o trabalho voxel a voxel`,
    `Impressora 3D ligada para mostrar como um detalhe pequeno fica no objeto real (demonstração)`,
  ],
  conceitosChave: [
    `Sombra — cor mais escura colocada nas partes baixas ou escondidas do modelo, que cria a sensação de profundidade.`,
    `Luz — cor mais clara colocada nas partes altas do modelo, que cria a sensação de brilho vindo de cima.`,
    `Contraste — diferença entre claro e escuro; quanto maior o contraste, mais o detalhe salta aos olhos.`,
    `Brilho do olhar — pequeno voxel claro dentro do olho que dá vida e expressão ao personagem.`,
    `Detalhe — voxel ou grupo de voxels que conta uma história, como bochecha, botão ou cicatriz.`,
    `Acabamento — etapa final em que o modelo deixa de parecer rascunho e ganha aparência finalizada.`,
    `Paleta de tons — conjunto de variações claras e escuras de uma mesma cor base, usadas para sombrear e iluminar.`,
  ],
  treinamento: `## O que o professor precisa saber

Detalhar um voxel é colorir voxels individuais para simular luz e sombra. Você não precisa ser artista: basta entender que a luz vem de cima, então o topo das formas recebe cor clara e a base recebe cor escura. Em MagicaVoxel, tudo isso é feito com a ferramenta de pintura. No painel de ferramentas à esquerda, clique no modo "Paint" (atalho tecla 2). Escolha a cor na paleta da direita e clique em "1" (Voxel) para pintar um voxel por vez, ou "F" (Face) para pintar uma face inteira de uma vez. Antes da aula, abra o arquivo de exemplo, teste pintar alguns voxels mais escuros embaixo de um braço e veja o efeito. Assim você sente na prática o que vai ensinar.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

Aquecimento (10 min): projete a imagem do mesmo personagem sem sombra e com sombra, lado a lado. Pergunte: "Qual parece mais vivo? Por quê?". Deixe os alunos perceberem sozinhos que é a sombra. Relembre a paleta da aula passada e abra o MagicaVoxel com o modelo de cada um.

Conteúdo novo guiado (15 min): no projetor, mostre o painel de paleta à direita. Ensine a criar tons: clique numa cor base, depois clique numa casa vazia da paleta e use o seletor (o quadrado de cor grande) para escolher um tom mais escuro da mesma cor; repita para um tom mais claro. Demonstre o modo Paint (tecla 2), o pincel "1" para um voxel e "F" para uma face. Pinte ao vivo a sombra embaixo de um braço com o tom escuro e a luz no topo da cabeça com o tom claro. Mostre o brilho do olho: um voxel claro dentro do olho escuro.

Mão na massa (25 min): cada aluno aplica no próprio modelo. Oriente a ordem: primeiro as sombras nas partes baixas, depois as luzes no topo, por último os pequenos detalhes (olhos, bochechas, marcas na roupa). Circule pela sala, elogie acertos e ajude quem travar. Lembre o atalho "Ctrl+Z" para desfazer sem medo de errar.

Desafio e compartilhar (10 min): peça que cada aluno adicione um detalhe único que conte algo do personagem. Em seguida, cada um gira o modelo (botão direito do mouse arrasta a câmera) e mostra o antes e depois para a turma.

## Como explicar de forma clara

Use a metáfora do sol: "Imagine um sol bem em cima da cabeça do seu personagem. Onde o sol bate fica claro, onde ele não alcança fica escuro." Para o contraste, diga: "Quanto mais diferente o claro do escuro, mais o detalhe aparece, como uma estrela no céu à noite." Para os olhos, mostre que um pontinho de luz "acende" o olhar. Evite termos técnicos demais; fale de luz, sombra e brilho, palavras que eles já conhecem do dia a dia.

## Erros comuns e como ajudar

O erro mais comum é exagerar: o aluno pinta sombra em tudo e o modelo fica sujo. Oriente a usar sombra só nas partes baixas e escondidas. Outro erro é escolher tons muito parecidos com a cor base, e aí o detalhe some; mostre como puxar mais o seletor para escurecer ou clarear de verdade. Muitos esquecem que estão no modo errado e acabam apagando voxels: confirme que estão no modo Paint (tecla 2) e não no Erase. Alguns pintam o voxel errado por estar com a câmera de um ângulo difícil; ensine a girar a vista com o botão direito antes de clicar. Por fim, lembre que detalhes minúsculos somem na impressão: peça detalhes de pelo menos um a dois voxels para que sobrevivam no objeto real.`,
  exercicios: [
    {
      titulo: `Sombra embaixo do braço`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Verifique se cada aluno está no modo Paint (tecla 2) e se criou um tom escuro da cor base na paleta antes de começar.`,
      atividade: `No seu modelo, escolha um tom mais escuro da cor base e pinte os voxels que ficam embaixo de um braço ou dentro de uma dobra, criando uma sombra.`,
      gabarito: `O aluno deve ter pintado de duas a quatro fileiras de voxels mais escuros nas partes baixas, com a parte de cima mantendo a cor original. O resultado correto mostra profundidade: o braço parece destacado do corpo.`,
    },
    {
      titulo: `Luz no topo da cabeça`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Reforce que a luz vem de cima; oriente o aluno a usar um tom claro só na superfície mais alta, sem clarear o modelo inteiro.`,
      atividade: `Crie um tom mais claro da cor base e pinte os voxels do topo da cabeça e dos ombros, simulando uma luz vinda de cima.`,
      gabarito: `O topo da cabeça e os ombros ficam com cor clara; as laterais e a base mantêm o tom normal ou escuro. O contraste entre topo claro e base escura indica que a luz foi aplicada corretamente.`,
    },
    {
      titulo: `Brilho no olhar`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre que basta um único voxel claro dentro do olho. Ajude quem tiver dificuldade de mirar girando a câmera com o botão direito do mouse.`,
      atividade: `Adicione um voxel branco ou bem claro dentro de cada olho do personagem para criar um brilho e dar vida ao olhar.`,
      gabarito: `Cada olho deve ter um pequeno ponto claro contrastando com a parte escura. O olhar fica mais expressivo e o personagem parece estar olhando para algo. Um voxel por olho é suficiente.`,
    },
    {
      titulo: `Crítica em dupla: mais ou menos detalhe?`,
      tipo: `em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas e oriente que cada um gire o modelo do colega. O foco é dar uma sugestão útil e gentil, não criticar de forma negativa.`,
      atividade: `Troque de lugar com o colega, observe o modelo dele girando a câmera e diga um detalhe que está bom e um lugar onde falta ou sobra detalhe.`,
      gabarito: `Cada aluno deve apontar pelo menos um acerto e uma sugestão concreta, como "falta sombra embaixo do queixo" ou "tem detalhe demais na barriga". A dupla aplica ao menos uma sugestão no modelo.`,
    },
    {
      titulo: `Roda de conversa: o detalhe que conta uma história`,
      tipo: `roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Reúna a turma e peça que cada aluno mostre seu modelo finalizado. Conduza a conversa para que percebam como um detalhe pequeno muda a personalidade do personagem.`,
      atividade: `Mostre seu personagem para a turma e explique qual detalhe você adicionou e o que ele conta sobre quem é o seu personagem.`,
      gabarito: `Cada aluno apresenta um detalhe único (bochecha, cicatriz, botão, brilho) e explica seu significado. Espera-se que a turma reconheça que detalhe e contraste, na dose certa, são o que dão vida e personalidade ao voxel.`,
    },
  ],
};
