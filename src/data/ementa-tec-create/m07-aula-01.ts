import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Aseprite",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar o Aseprite e a pixel art aplicada a games, abrindo o programa, reconhecendo a interface e criando e salvando o primeiro arquivo .aseprite.`,
  descricao: `Esta é a primeira aula do mês dedicado à pixel art, e o objetivo é simples: deixar a turma confortável com o Aseprite, a ferramenta profissional que usaremos para desenhar e animar os sprites do jogo. Pixel art é a arte de desenhar imagem por imagem, colocando cada pequeno quadradinho (o pixel) no lugar certo. É o estilo de muitos jogos famosos, e a graça é que com poucos pixels conseguimos criar um personagem cheio de personalidade. Nesta aula o aluno ainda não vai desenhar um personagem completo; ele vai conhecer o ambiente de trabalho e perder o medo de clicar.

O Aseprite tem quatro regiões principais que o aluno precisa identificar logo de cara: o canvas (a área central onde a gente desenha), a barra de ferramentas (a coluna de ícones na lateral esquerda), a paleta de cores (o quadro de cores, geralmente embaixo ou à direita) e a timeline (a linha do tempo na parte de baixo, usada depois para animação). Saber o nome de cada parte facilita todas as próximas aulas, porque o professor vai poder dizer "clique no canvas" ou "escolha uma cor na paleta" e todos vão entender.

Como a pixel art trabalha com poucos pixels, o zoom é nosso melhor amigo. Sem aproximar a imagem, é quase impossível acertar onde cada pixel cai. Por isso, parte da aula é treinar o gesto de dar zoom, andar pela imagem e desenhar pontos e linhas com calma. Esse aquecimento ensina o controle fino do mouse, que é a base de tudo o que vem pela frente no mês.

Ao final, cada aluno terá criado e salvo seu primeiro arquivo no formato nativo .aseprite, entendendo que esse é o arquivo "de trabalho" que guarda camadas e quadros — diferente de um PNG, que é só a imagem final. Essa noção de salvar cedo e salvar sempre vai acompanhar a turma o mês inteiro.`,
  materiais: [
    `Computadores com o Aseprite já instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor mostrar a tela do Aseprite passo a passo`,
    `Mouse para cada aluno (desenhar pixel a pixel é muito mais preciso com mouse do que com touchpad)`,
    `Arquivo de exemplo .aseprite já pronto com um sprite simples, para mostrar o resultado final`,
    `Imagens de referência de sprites de jogos famosos em pixel art, projetadas como inspiração`,
    `Pasta compartilhada ou área no computador onde os alunos vão salvar seus arquivos .aseprite`,
  ],
  conceitosChave: [
    `Pixel — o menor quadradinho de cor da imagem; em pixel art, cada um é colocado de propósito.`,
    `Pixel art — estilo de desenho feito pixel por pixel, muito usado em games clássicos e indies.`,
    `Canvas — a área central do Aseprite onde a gente desenha; é a "folha" do desenho.`,
    `Paleta de cores — o quadro com as cores disponíveis para pintar, que dá para escolher e organizar.`,
    `Barra de ferramentas — a coluna de ícones à esquerda com lápis, borracha, balde e outras ferramentas.`,
    `Timeline — a linha do tempo embaixo da tela, usada para criar quadros de animação mais adiante.`,
    `Arquivo .aseprite — o formato nativo do programa que salva o projeto com camadas e quadros para continuar editando.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista para dar esta aula. O Aseprite é um editor de pixel art pago e profissional, mas a interface é amigável. Antes da aula, abra o programa uma vez sozinho e localize as quatro regiões: canvas (centro), barra de ferramentas (ícones à esquerda), paleta de cores (cores embaixo ou à direita) e timeline (faixa inferior). Tenha em mãos o atalho mais importante do dia: o zoom. No Aseprite, você aproxima e afasta com a roda do mouse ou com as teclas "1" a "6" (cada número é um nível de zoom). A ferramenta de mover a imagem na tela é a mão (atalho "H", ou segurar a barra de espaço e arrastar). Deixe um arquivo de exemplo .aseprite pronto para projetar o resultado final logo no começo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): projete dois ou três sprites de jogos famosos em pixel art e pergunte "o que vocês acham que isso tem a ver com quadradinhos?". Aproxime bem uma imagem para mostrar os pixels separados. Explique que o mês inteiro será sobre criar arte assim para o jogo da turma.

Conteúdo novo guiado (15 min): com o projetor ligado, abra o Aseprite. Mostre o canvas, a barra de ferramentas, a paleta e a timeline, apontando e dizendo o nome de cada um — peça que repitam em voz alta. Em seguida, crie um arquivo novo: menu "File" e depois "New" (ou Ctrl+N). Na janela, ajuste a largura e a altura para 32 por 32 pixels e clique em "OK". Mostre como dar zoom com a roda do mouse e como andar com a mão (barra de espaço). Por fim, salve: menu "File" e depois "Save As" (Ctrl+S), digite um nome e confirme que a extensão é .aseprite.

Mão na massa (25 min): cada aluno repete o caminho sozinho. Crie um arquivo novo 32x32, dê zoom até os pixels ficarem grandes, escolha o Lápis ("B") na barra de ferramentas e clique uma cor na paleta. Peça para desenhar pontos soltos e depois linhas retas (clicar, segurar Shift e clicar de novo faz uma linha reta). Circule pela sala garantindo que todos salvaram o arquivo com Ctrl+S. Quem terminar pode trocar a cor e fazer um quadradinho cheio.

Desafio e compartilhar (10 min): proponha desenhar a primeira letra do próprio nome em pixels dentro do canvas. Depois, peça que cada aluno salve de novo e gire a tela para o colega ao lado ver. Termine perguntando o nome de cada região da interface, para fixar.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas: o canvas é a "folha", o pixel é o "tijolinho", e dar zoom é "chegar perto com uma lupa". Diga que pixel art é como montar um desenho com peças de LEGO bem pequenas: cada peça importa. Evite termos técnicos demais; nomeie a ferramenta e mostre onde ela fica em vez de só descrever. Reforce a ideia de "salvar sempre", comparando com salvar a fase de um jogo para não perder o progresso.

## Erros comuns e como ajudar

O erro mais frequente é desenhar com a imagem pequena demais, sem zoom — os pixels saem tortos. Ensine a aproximar antes de qualquer traço. Outro erro é confundir mover a mão (barra de espaço) com desenhar: mostre a diferença com calma. Muitos esquecem de salvar; crie o hábito de pedir Ctrl+S a cada poucos minutos. Alguns vão querer usar uma tela gigante (256x256); segure isso e mantenha todos no 32x32 para a aula fluir. Por fim, há quem salve como PNG sem perceber: confira que a extensão é .aseprite, pois é o arquivo de trabalho que abriremos nas próximas aulas.`,
  exercicios: [
    {
      titulo: `Criando e salvando o primeiro arquivo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza junto com o projetor, passo a passo. Garanta que cada aluno chegue até o arquivo salvo antes de seguir. Repita os atalhos em voz alta enquanto eles clicam.`,
      atividade: `Abra o Aseprite, crie um arquivo novo de 32 por 32 pixels (File, depois New), escreva seu nome no campo e salve em File, depois Save As, conferindo que a extensão é .aseprite.`,
      gabarito: `O aluno deve ter um arquivo aberto de 32x32 e um arquivo salvo na pasta combinada com o nome dele e extensão .aseprite. Caminho esperado: File > New > 32x32 > OK, e File > Save As > nome > Salvar.`,
    },
    {
      titulo: `Caça às quatro regiões da interface`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Diga o nome de uma região por vez e cronometre quem aponta primeiro na própria tela. Use isso para verificar se todos reconhecem canvas, barra de ferramentas, paleta e timeline.`,
      atividade: `Quando o professor falar o nome de uma região (canvas, barra de ferramentas, paleta de cores ou timeline), aponte rapidamente para ela na sua tela e diga para que serve em uma frase.`,
      gabarito: `Canvas: área central de desenho. Barra de ferramentas: coluna de ícones à esquerda. Paleta de cores: quadro de cores embaixo ou à direita. Timeline: faixa inferior usada para animação.`,
    },
    {
      titulo: `Pontos e linhas com zoom`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno dá zoom e desenha enquanto o outro confere se ele usou o Lápis e a barra de espaço para navegar; depois trocam. Reforce a linha reta com Shift.`,
      atividade: `Em dupla, dê zoom no canvas, selecione o Lápis (tecla B), pinte cinco pontos soltos e faça duas linhas retas (clique, segure Shift e clique de novo). Depois troque de lugar com o colega.`,
      gabarito: `Cada aluno deve produzir cinco pontos visíveis e duas linhas retas usando o Lápis com zoom aplicado. A linha reta correta aparece quando se clica, segura Shift e clica no ponto final.`,
    },
    {
      titulo: `Roda de conversa: onde vejo pixel art?`,
      tipo: `roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza uma conversa rápida em círculo. Aceite exemplos de jogos, ícones e figurinhas. Ligue as respostas ao entregável do mês: o conjunto de sprites do jogo da turma.`,
      atividade: `Pense em um jogo, aplicativo ou figurinha que use pixel art e conte para a turma por que aquele estilo combina com o que ele representa.`,
      gabarito: `Não há resposta única. Espera-se que o aluno cite um exemplo real (por exemplo, jogos clássicos ou indies) e perceba que pixel art é feita pixel a pixel e cabe bem em telas pequenas e personagens simples.`,
    },
    {
      titulo: `Mini projeto: a inicial do meu nome em pixels`,
      tipo: `projeto curto`,
      tempo: `7 minutos`,
      guiaProfessor: `Deixe os alunos trabalharem sozinhos e circule ajudando com zoom e cor. Ao final, peça que todos salvem com Ctrl+S e mostrem a tela ao colega ao lado.`,
      atividade: `No seu arquivo de 32x32, escolha uma cor na paleta e desenhe a primeira letra do seu nome usando pixels. Salve o arquivo com Ctrl+S quando terminar.`,
      gabarito: `O canvas deve conter a inicial do nome do aluno desenhada com pixels em uma cor escolhida, e o arquivo .aseprite deve estar salvo. A letra precisa ser legível mesmo que simples, mostrando uso de zoom e do Lápis.`,
    },
  ],
};
