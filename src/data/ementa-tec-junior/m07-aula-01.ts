import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Desenhos que se mexem!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança descobre que muitos desenhos parecidos, mostrados rápido, viram movimento, e localiza onde ficam os frames no Aseprite.`,
  descricao: `Nesta primeira aula do mês de animação, a turma descobre a mágica que está por trás de todo desenho animado: nada se mexe de verdade na tela. O que existe são vários desenhos parecidos, um pouquinho diferentes, que aparecem muito rápido um atrás do outro. Quando passam depressa, nossos olhos juntam tudo e enxergam movimento. Esse é o coração da animação, e é a ideia que vai guiar todas as oito aulas deste mês.

Animação importa porque é o que faz um personagem de jogo parecer vivo. Um boneco parado é só um desenho; um boneco que pisca, respira ou balança parece um amigo de verdade. As crianças já amam desenhos e games, e nesta aula elas entendem, pela primeira vez, o segredo escondido atrás dessa magia. Esse entendimento deixa tudo o que vem depois (respiração, tempo certo, onion skin, moeda girando) mais fácil de absorver.

O foco de hoje é sentir a animação no próprio corpo e com os olhos, antes de tocar muito na ferramenta. A turma brinca de fazer um bonequinho de papel respirar com as mãos, assiste a exemplos divertidos de personagens que parecem vivos e, só então, abre o Aseprite para conhecer o lugar onde os desenhos vão morar: a linha de frames lá embaixo da tela. Não vamos animar de verdade ainda; vamos descobrir o palco onde a animação acontece.

Ao final, cada criança sabe explicar, com as próprias palavras, que movimento é feito de muitos desenhos parecidos, e consegue apontar na tela do Aseprite onde ficam os frames e como criar um novo frame. É uma aula de descoberta e encantamento, a porta de entrada do mês.`,
  materiais: [
    `Computadores ligados, um por criança, com o Aseprite já aberto e um arquivo novo de 32 por 32 pixels criado (assim ninguém perde tempo no início).`,
    `Projetor ou TV grande ligada ao computador do professor, para mostrar a tela do Aseprite e os exemplos para todos ao mesmo tempo.`,
    `Dois ou três GIFs curtos de exemplo salvos no computador do professor (um personagem andando, um coração batendo, uma chama tremendo), prontos para abrir.`,
    `Um bloquinho de papel de notas (tipo flipbook) já desenhado pelo professor, com um bonequinho que infla e murcha, para folhear na frente da turma.`,
    `Folhas de papel em branco e lápis de cor para a atividade de desenho na mesa.`,
    `Um cartaz ou slide simples com a palavra FRAME bem grande e um desenho de quadradinho, para fixar o conceito do dia.`,
    `Adesivos ou carimbos de recompensa para o momento de compartilhar (opcional, mas anima muito a faixa de 5 a 9 anos).`,
  ],
  conceitosChave: [
    `Animação — é a mágica de fazer um desenho parecer que se mexe, mostrando muitos desenhos parecidos bem rápido.`,
    `Frame — é cada desenho sozinho, um quadradinho da animação; juntando vários frames em fila, nasce o movimento.`,
    `Quadro a quadro — é desenhar um pouquinho diferente em cada frame, como tirar várias fotos de um pulo.`,
    `Linha do tempo — é a fileira de quadradinhos lá embaixo no Aseprite, onde os frames ficam guardados em ordem.`,
    `Reproduzir (play) — é apertar o botão que faz os frames passarem rápido para a gente ver o desenho ganhar vida.`,
    `Flipbook — é um caderninho de desenhos que vira animação quando a gente folheia depressa com o dedo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Animação é uma ilusão dos olhos. Quando imagens parecidas trocam muito rápido (umas doze ou mais por segundo), o cérebro não vê desenhos separados, vê movimento contínuo. Cada uma dessas imagens chama-se frame (quadro). Um conjunto de frames em fila forma a animação. Essa é a única teoria que você precisa dominar hoje, e ela cabe numa frase: movimento é feito de muitos desenhos parecidos passando rápido.

No Aseprite, os frames vivem na parte de baixo da tela, na chamada Timeline (linha do tempo). Se ela não estiver aparecendo, abra pelo menu superior em View e marque Timeline (ou aperte a tecla Tab para mostrar e esconder). Cada frame é um quadradinho numerado (1, 2, 3...) nessa fileira. Para criar um novo frame, clique no botão de mais (um sinal de + dentro de um quadradinho) no canto da Timeline, ou use o atalho Alt+N. Para passar a animação, aperte a tecla Enter ou o botão de play (o triângulo) na Timeline; aperte de novo para parar. Hoje você só precisa abrir o Aseprite, mostrar a Timeline, criar um ou dois frames de exemplo e apertar play. Não há técnica de desenho a ensinar ainda.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Aseprite)

10 min, aquecimento: receba a turma e pergunte quem já viu desenho animado. Pegue o seu flipbook de papel e folheie rápido na frente deles; o bonequinho parece respirar. Pergunte: como ele se mexeu se é só papel? Deixe-os adivinhar. Folheie devagar para mostrar que são vários desenhos.

15 min, conteúdo novo guiado: no projetor, abra os GIFs de exemplo. Mostre o coração batendo e a chama tremendo. Diga a frase mágica: movimento é feito de muitos desenhos parecidos. Agora abra o Aseprite no projetor. Aponte para a fileira de quadradinhos embaixo e diga: aqui moram os frames. Se não aparecer, aperte Tab ou vá em View e marque Timeline. Clique no botão de + (ou Alt+N) e crie o frame 2, depois o frame 3. Aperte Enter para tocar; aperte de novo para parar. Repita o nome FRAME várias vezes apontando a tela.

25 min, mão na massa: cada criança no seu computador, com o Aseprite já aberto. Peça que encontrem a fileira de frames embaixo (passe de mesa em mesa ajudando a achar). Depois peça que cliquem no botão de + para criar mais um frame, e mais outro, até terem três ou quatro quadradinhos. Por fim, todos apertam Enter ao mesmo tempo para ver os quadradinhos piscando. Não precisa desenhar nada de bonito hoje; o objetivo é localizar e criar frames.

10 min, desafio e compartilhar: desafie cada um a criar cinco frames e contar em voz alta quantos quadradinhos tem na fila. Faça uma rodinha: cada criança aponta para a Timeline na própria tela e diz a frase do dia. Dê um carimbo a quem explicar o que é um frame.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use o flipbook como metáfora central: o Aseprite é um caderninho mágico, e cada folha é um frame. Diga que o desenho animado é como um monte de fotos do mesmo pulo, uma atrás da outra. Outra analogia boa: piscar os olhos bem rápido olhando para figurinhas. Evite a palavra ilusão; prefira mágica dos olhos. Fale pouco e mostre muito. Repita FRAME até virar música. Comemore cada quadradinho novo com entusiasmo grande.

## Erros comuns e como ajudar

A criança não acha a Timeline: aperte Tab por ela ou vá em View, Timeline. Ela tenta desenhar coisas complicadas e se frustra: lembre que hoje só criamos quadradinhos, desenhar lindo é para depois. Ela clica no botão errado e cria camadas (layers) em vez de frames: mostre que frames ficam na fileira de baixo, numerados, e o botão certo é o de +. Ela aperta muitas teclas e some um painel: aperte Tab de novo ou feche e reabra o arquivo. Alguém termina rápido: mande criar dez frames e contar todos.`,
  exercicios: [
    {
      titulo: `Caça aos frames`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Introduza dizendo que vamos achar o lugar secreto onde moram os frames no Aseprite. Mostre uma vez no projetor apontando a fileira de quadradinhos embaixo da tela. Depois passe de mesa em mesa enquanto cada criança procura na própria tela. Se alguém não achar, aperte Tab por ela ou vá em View e marque Timeline.`,
      atividade: `No seu computador, com o Aseprite aberto, ache a fileira de quadradinhos numerados lá embaixo (a linha do tempo). Coloque o dedo na tela em cima dela e chame o professor para mostrar que encontrou.`,
      gabarito: `A criança acertou quando aponta corretamente para a Timeline (a fileira de quadradinhos numerados na parte de baixo da tela) e não confunde com os painéis de cores da lateral ou as camadas. Espera-se que ela diga algo como aqui moram os frames.`,
    },
    {
      titulo: `Eu sou um flipbook`,
      tipo: `Jogo / brincadeira com o corpo`,
      tempo: `7 minutos`,
      guiaProfessor: `Introduza pegando o flipbook de papel e folheando rápido para o bonequinho respirar. Depois proponha que as próprias crianças sejam o flipbook. Conduza ditando as poses devagar e depois rápido, para elas sentirem que movimento é feito de várias poses paradas em sequência.`,
      atividade: `Em pé, faça três poses de um bonequinho respirando: bem pequeno (encolhido), médio e bem grande (braços para cima). Agora faça as três poses bem rápido, uma atrás da outra, várias vezes, como se você fosse um desenho animado respirando.`,
      gabarito: `A criança acertou quando consegue mostrar pelo menos três poses diferentes e percebe que, ao trocar rápido entre elas, parece um movimento contínuo de respiração. Ao ser perguntada, ela diz que cada pose é como um frame.`,
    },
    {
      titulo: `O segredo do desenho animado`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Reapresente um GIF de exemplo no projetor (o coração batendo). Faça perguntas abertas e deixe cada criança falar. Conduza para que a turma chegue junto à conclusão de que o personagem é feito de muitos desenhos parecidos. Valide toda resposta com entusiasmo.`,
      atividade: `Olhando o coração batendo na tela, responda na roda: o coração está mesmo se mexendo de verdade? Quantos desenhos você acha que tem aí dentro, um ou muitos? O que acontece se a gente passar bem devagar?`,
      gabarito: `A resposta esperada é que o coração não se mexe de verdade: são muitos desenhos parecidos passando rápido, e que devagar dá para ver cada desenho separado. Conta como acerto qualquer criança que diga muitos desenhos ou várias figurinhas rápido.`,
    },
    {
      titulo: `Meu mini flipbook de papel`,
      tipo: `Desenho / papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue três folhinhas (ou três retângulos numerados numa folha) e lápis. Mostre no quadro o seu exemplo: uma bolinha embaixo, no meio e em cima, como se quicasse. Conduza para que cada criança desenhe a mesma coisa pequena três vezes, mudando só um pouquinho. Ajude quem quiser caprichar demais a deixar simples.`,
      atividade: `Desenhe uma bolinha três vezes, uma em cada quadradinho: no quadro 1 ela fica embaixo, no quadro 2 no meio, no quadro 3 lá em cima. Depois folheie rápido com o dedo e veja a bolinha pular.`,
      gabarito: `A criança acertou quando produz três desenhos parecidos com uma diferença clara de posição entre eles (embaixo, meio, cima) e percebe, ao folhear, a sensação de movimento. Não importa a beleza do desenho; importa serem três quadros parecidos em ordem.`,
    },
    {
      titulo: `Desafio dos cinco frames`,
      tipo: `Desafio na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Lance como um desafio de campeão. Relembre rápido onde fica o botão de mais (o + dentro do quadradinho) na linha do tempo, ou o atalho Alt+N. Peça que criem cinco frames e contem em voz alta. No fim, todos apertam Enter ao mesmo tempo para ver os quadradinhos piscando. Premie com carimbo quem explicar o que fez.`,
      atividade: `Desafio: no Aseprite, clique no botão de + para criar frames novos até ter cinco quadradinhos na fila. Conte em voz alta: 1, 2, 3, 4, 5. Agora aperte a tecla Enter e veja seus frames passarem rápido. Para parar, aperte Enter de novo.`,
      gabarito: `A criança acertou quando a Timeline mostra cinco frames numerados de 1 a 5 criados por ela, e ela consegue apertar Enter para reproduzir e parar. Ao ser perguntada, explica que cada quadradinho é um frame e que muitos frames juntos viram movimento.`,
    },
  ],
};
