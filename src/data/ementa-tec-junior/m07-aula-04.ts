import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Folha mágica: onion skin",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a ligar e desligar o onion skin (a folha fantasma) no Aseprite e usa essa ajuda para alinhar os dois frames do idle, deixando a animação suave em vez de tremida.`,
  descricao: `Nesta aula a turma conhece um ajudante muito especial do Aseprite chamado onion skin, que a gente vai apelidar de "folha mágica" ou "folha fantasma". Ela mostra, bem clarinha e transparente, o desenho do frame de trás enquanto a criança desenha no frame de agora. É como colocar a folha do desenho antigo embaixo de uma folha nova e ver os dois ao mesmo tempo numa janela iluminada.

Por que isso importa? Nas aulas anteriores a turma criou o boneco que "respira" com dois frames (idle). Muitas vezes o segundo frame fica torto: a cabeça pula de lugar, o pé escorrega, e a animação fica tremida em vez de fofa. O onion skin resolve isso, porque a criança consegue ver exatamente onde estava cada pedacinho do boneco e encaixar o novo desenho no lugar certo, sem chute.

O que será feito na prática: vamos abrir o idle do boneco, ligar a folha mágica, observar o fantasminha do frame anterior aparecendo por baixo, e então ajustar o frame de cima com carinho para que tudo se alinhe. Depois praticamos ligar e desligar a folha, porque para desenhar fininho às vezes atrapalha e a gente desliga, e para alinhar a gente liga de novo.

A aula valoriza o olhar atento e o capricho. Não é sobre desenhar mais coisas, e sim sobre encaixar bem o que já existe. No fim, cada criança compara o "antes" tremido com o "depois" alinhado e sente o orgulho de ver o boneco parado, firme e respirando bonito.`,
  materiais: [
    `Computadores (um por criança) com o Aseprite já aberto e com o arquivo do idle do boneco da aula passada carregado.`,
    `Projetor ou TV grande ligado no computador do professor para demonstrar onde clicar.`,
    `Arquivo de exemplo pronto: um idle de 2 frames bem desalinhado (tremido) e uma cópia já alinhada, para mostrar antes e depois.`,
    `Cópias de segurança dos arquivos das crianças, caso alguém mexa demais e queira recomeçar.`,
    `Duas folhas de papel finas e uma janela ou lanterna para a analogia da folha mágica no aquecimento.`,
    `Adesivos ou carimbos de "Alinhou!" para premiar quem deixar o boneco firme.`,
    `Lista com o nome de cada aluno para o professor anotar quem já ligou e desligou o onion skin sozinho.`,
  ],
  conceitosChave: [
    `Onion skin — a folha mágica que deixa você ver o desenho de trás bem clarinho enquanto desenha o de agora.`,
    `Frame — cada quadrinho do desenho; juntos e trocando rápido eles viram a animação.`,
    `Alinhar — encaixar o boneco no mesmo lugar nos dois frames, para ele não pular nem tremer.`,
    `Transparente — quando dá para ver através, como um fantasminha que você enxerga mas atravessa.`,
    `Idle — a pose parada do boneco que fica respirando de leve quando ninguém aperta nenhum botão.`,
    `Ligar e desligar — apertar um botão para fazer a folha mágica aparecer ou sumir quando precisamos.`,
    `Suave — quando a animação fica lisinha e bonita, sem tranco nem pulo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O onion skin (em português, "casca de cebola") é um recurso clássico de animação. O nome vem das camadas finas e transparentes da cebola: você vê várias de uma vez. No Aseprite, ele mostra os frames vizinhos por baixo do frame atual, em tom apagado e fantasmagórico, para você usar como referência de posição. Ele NÃO faz parte do desenho final, é só uma ajuda visual na tela.

Onde fica: o botão do onion skin está na barrinha logo acima da linha do tempo (Timeline), no canto de baixo da tela. O ícone parece duas folhas sobrepostas. Se a Timeline não estiver aparecendo, ligue em "View > Timeline" ou aperte a tecla Tab. Clicar uma vez no ícone liga; clicar de novo desliga. Ao lado dele há setinhas/opções para escolher quantos frames de trás e da frente aparecem (o padrão é 2 atrás e 2 à frente, o que já serve bem para um idle de 2 frames).

Para esta aula, garanta que cada arquivo tenha pelo menos 2 frames no idle. O frame anterior aparecerá em azulado e o seguinte em alaranjado (cores padrão), apagados. A criança desenha sempre no frame selecionado (o destacado na Timeline) e usa os fantasmas só para mirar.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Aseprite)

10 min - Aquecimento: mostre duas folhas de papel finas contra a janela: por baixo aparece o desenho da folha de trás. Diga que o Aseprite tem essa mágica. No projetor, abra o exemplo tremido e o exemplo alinhado e aperte Enter para rodar; pergunte qual fica mais bonito e por quê.

15 min - Conteúdo guiado: no seu Aseprite, com o idle aberto, clique na Timeline o frame 2 para selecioná-lo. Aponte o ícone de duas folhas acima da Timeline e clique: surge o fantasminha azulado do frame 1. Clique de novo: some. Repita devagar dizendo "ligo... desligo". Mostre que, com a folha ligada, dá para ver se a cabeça do frame 2 está em cima da cabeça do frame 1.

25 min - Mão na massa: cada criança abre seu idle, seleciona o frame 2 na Timeline e liga o onion skin no ícone das folhas. Com a ferramenta Mover (atalho M) ou apenas redesenhando pixels, ela ajusta o boneco do frame 2 para encaixar no fantasma do frame 1, deixando só a barriguinha subir. Circule pela sala. Peça que aperte Enter para ver a animação, corrija e tente de novo. Lembre de desligar a folha (mesmo ícone) quando for desenhar detalhes finos.

10 min - Desafio e compartilhar: cada um mostra o "antes" e o "depois" rodando. Quem alinhou ganha o carimbo "Alinhou!". Pergunte: "A folha mágica ajudou? Quando vocês desligaram?".

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame o onion skin de "folha mágica" ou "folha fantasma". Diga: "É como desenhar numa folha fininha por cima de outra, vendo a de baixo na janela". O frame anterior é "o fantasminha do desenho de antes": dá para ver, mas não dá para pegar nem pintar nele. Use as mãos: uma mão é o frame velho, a outra empilha em cima, "agora encaixa!". Para alinhar, fale "põe o pé em cima do pé do fantasma, a cabeça em cima da cabeça". Para ligar e desligar, diga "acende e apaga a luz mágica".

## Erros comuns e como ajudar

As crianças costumam tentar pintar o fantasma: explique que ele é só uma sombra de ajuda, o desenho de verdade é o coloridão. Outro erro é desenhar no frame errado: confira sempre qual frame está destacado na Timeline antes de elas começarem. Algumas esquecem a folha ligada e reclamam que "tem dois bonecos": basta clicar no ícone para desligar. Há quem mova o boneco demais e fique torto; incentive passinhos pequenos e apertar Enter para conferir. Se alguém bagunçar muito, use a cópia de segurança e recomece com calma.`,
  exercicios: [
    {
      titulo: `Acende e apaga a folha mágica`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor o ícone de duas folhas acima da Timeline. Peça que todos selecionem o frame 2 na Timeline e localizem o botão. Conduza em voz alta: "Liga... olha o fantasma... desliga... sumiu". Repita três vezes com a turma junto.`,
      atividade: `Selecione o frame 2 do seu boneco na linha do tempo. Clique no botão das duas folhas para ligar o onion skin e veja o fantasminha do frame 1 aparecer. Depois clique de novo para desligar. Faça isso 3 vezes, contando alto "liga, desliga".`,
      gabarito: `A criança acertou se conseguir, sozinha, fazer o fantasma azulado do frame 1 aparecer e sumir clicando no mesmo ícone. O professor deve ver o desenho transparente surgir quando ligado e o frame ficar limpo quando desligado.`,
    },
    {
      titulo: `Encaixa no fantasma`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Com o onion skin ligado no frame 2, mostre como usar a ferramenta Mover (tecla M) para deslocar o boneco em passinhos pequenos. Demonstre alinhar a cabeça do frame 2 sobre a cabeça do fantasma do frame 1. Circule ajudando quem mover demais.`,
      atividade: `Ligue a folha mágica no frame 2. Olhe o fantasma do frame 1 por baixo. Mexa com cuidado o seu boneco do frame 2 até a cabeça ficar em cima da cabeça do fantasma e os pés em cima dos pés. Só a barriguinha pode subir um tiquinho.`,
      gabarito: `Está certo quando a cabeça e os pés dos dois frames ficam quase no mesmo lugar e só a barriga muda. Ao apertar Enter, o boneco deve respirar suave, sem pular nem tremer de lado.`,
    },
    {
      titulo: `Caça ao tremido`,
      tipo: `jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Prepare no projetor três idles: dois tremidos e um alinhado, rodando com Enter. Faça a turma virar detetive. Conte até três e todos apontam qual é o "tremidão". Depois ligue o onion skin no exemplo tremido para mostrar onde o boneco está fora do lugar.`,
      atividade: `Vire detetive da animação! Olhe os bonecos que o professor mostra rodando na tela. Aponte qual está tremido e qual está alinhado. Diga em voz alta o que está fora do lugar: a cabeça, o pé ou o braço?`,
      gabarito: `A criança acerta se identificar o idle alinhado como o suave e apontar nos tremidos a parte que pula (cabeça, pé ou braço). Reconhecer que o desalinho causa o tremido é o objetivo.`,
    },
    {
      titulo: `Roda da folha mágica`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda. Faça perguntas simples e deixe cada um responder com uma palavra ou gesto. Reforce com elogios. Use a analogia das duas folhas na janela para quem tiver dificuldade de explicar.`,
      atividade: `Na roda, responda: O que a folha mágica mostra? Ela é colorida ou transparente? Você pode pintar em cima do fantasma? Quando você liga a folha e quando você desliga?`,
      gabarito: `Respostas esperadas: a folha mágica mostra o desenho de trás (frame anterior); ela é transparente; não dá para pintar no fantasma, só nele a gente mira; ligamos para alinhar e desligamos para desenhar detalhes. Vale qualquer resposta com essa ideia, mesmo em palavras simples.`,
    },
    {
      titulo: `Fantasma no papel`,
      tipo: `desenho/papel e desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue duas folhas finas a cada criança. Peça que desenhem o boneco parado na primeira e, segurando as duas contra a janela ou luz, copiem por cima na segunda só levantando um pouco a barriga. Conecte com o que fizeram no Aseprite: o papel de baixo é o onion skin.`,
      atividade: `Desafio: desenhe seu boneco parado numa folha. Coloque uma folha nova por cima, segure contra a luz da janela e copie o boneco igualzinho, mudando só a barriga para parecer que respirou. Depois alterne as duas folhas rápido com a mão e veja a mágica.`,
      gabarito: `Está correto quando os dois desenhos no papel ficam quase no mesmo lugar e só a barriga muda, e ao alternar as folhas o boneco parece respirar. A criança deve dizer que a folha de baixo funcionou como o onion skin do Aseprite.`,
    },
  ],
};
