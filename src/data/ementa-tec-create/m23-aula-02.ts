import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Posicionar e Preparar o Cenário",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Posicionar, escalar e ancorar todos os modelos do Maya no mapa, ajustando colisões, materiais e PrimaryPart para deixar o cenário navegável e pronto para receber as mecânicas.`,
  descricao: `Na aula passada, o aluno exportou os modelos do Maya e importou tudo para dentro do Roblox Studio. Agora chegou a hora de transformar aquele monte de peças soltas em um cenário de verdade: um lugar onde o personagem consegue andar, subir, atravessar e explorar sem cair pelo chão nem atravessar paredes. Esta é uma aula bem prática, com o aluno o tempo todo movendo, girando e encaixando objetos no mapa.

O trabalho começa pelo posicionamento. Cada modelo precisa ir para o lugar certo do cenário, na escala correta e bem alinhado com o piso. Em seguida, o aluno aprende a ancorar os modelos (Anchored), para que eles não caiam por causa da gravidade do jogo, e a conferir a colisão (CanCollide), que é o que faz o personagem bater na parede em vez de atravessá-la. Sem ancorar e sem colisão, o cenário mais bonito do mundo vira uma bagunça assim que o jogo começa.

Para terminar, cada modelo precisa de um PrimaryPart bem definido. O PrimaryPart é a peça principal de um Model: é por ela que o Roblox entende a posição e a rotação do objeto inteiro. Definir o PrimaryPart agora facilita muito a vida nas próximas aulas, quando o aluno for mover plataformas, portas e armadilhas com código Lua. Também é o momento de escolher os materiais (madeira, metal, grama, neon) para que o cenário tenha cara de jogo de verdade.

Ao final da hora, cada aluno deve ter um mapa montado, sólido e caminhável: dá para colocar o personagem dentro dele, apertar Play e andar pelo cenário sem cair no vazio nem atravessar as estruturas. Esse é o terreno firme sobre o qual as mecânicas serão construídas nas próximas semanas.`,
  materiais: [
    `Computadores com Roblox Studio instalado e atualizado, com conta Roblox conectada (uma por aluno)`,
    `Projetor ou TV para o professor demonstrar onde clicar no Roblox Studio`,
    `Arquivo de exemplo: place do Roblox Studio com os modelos do Maya já importados e soltos (da Aula 1)`,
    `Pasta com os modelos 3D de reserva (formato .fbx/.obj) caso algum aluno precise reimportar`,
    `Folha impressa de referência rápida com os atalhos (mover, girar, escalar) e os nomes dos painéis`,
    `Imagem ou desenho do mapa final (planta do cenário) projetada para os alunos seguirem como guia`,
  ],
  conceitosChave: [
    `Workspace — a parte do jogo onde fica tudo o que o jogador vê e toca no mundo 3D; é nele que o cenário é montado.`,
    `Anchored (ancorar) — propriedade que prende a peça no lugar para que ela não caia nem se mexa com a gravidade do jogo.`,
    `CanCollide (colisão) — propriedade que decide se o personagem bate na peça ou atravessa por ela; ligada, a parede vira parede de verdade.`,
    `PrimaryPart — a peça principal de um Model; é a referência que o Roblox usa para saber a posição e a rotação do objeto inteiro.`,
    `Material — o tipo de superfície da peça (madeira, metal, grama, neon) que muda a aparência e dá cara de jogo ao cenário.`,
    `Explorer e Properties — o painel que lista todos os objetos do jogo (Explorer) e o painel que mostra e edita as propriedades do objeto selecionado (Properties).`,
    `Escala (Scale) — o tamanho da peça; ajustar a escala faz o modelo do Maya ficar do tamanho certo perto do personagem.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para dar esta aula. Basta dominar quatro ações: mover, girar, escalar e ancorar. No Roblox Studio, a tela tem três áreas importantes: o visor 3D no centro, o painel Explorer (lista de tudo o que existe no jogo) e o painel Properties (propriedades do objeto selecionado). Se algum desses painéis sumir, vá na aba View, no topo, e clique em Explorer e em Properties para trazê-los de volta. Tudo o que aparece no mundo do jogo fica dentro do Workspace, no Explorer.

As quatro ferramentas de transformação ficam na aba Home (ou Model): Select, Move, Scale, Rotate. Os atalhos são úteis e vale projetá-los: mover com a ferramenta Move (arrastar as setas), escalar com Scale (arrastar os cubinhos) e girar com Rotate (arrastar os anéis). Para encaixar peças com precisão, ligue o Collisions e ajuste o Snap (a grade de encaixe) na aba Model. Faça você mesmo um modelo de teste antes da aula para se sentir seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o arquivo de exemplo no projetor. Mostre os modelos importados soltos no Workspace e pergunte: "O que falta para isso virar um mapa de verdade?" Aperte Play e mostre os modelos caindo e o personagem atravessando as paredes. Esse susto deixa claro o problema do dia: ancorar e colidir.

Conteúdo novo guiado (15 min): selecione um modelo no Explorer. Demonstre as três transformações: clique em Move e arraste pelas setas; clique em Scale e ajuste o tamanho; clique em Rotate e gire pelos anéis. Em seguida, no painel Properties, marque a caixa Anchored e mostre que agora a peça não cai mais. Depois marque CanCollide e teste no Play que o personagem bate na peça. Por fim, com o Model selecionado, vá em Properties, clique no campo PrimaryPart e selecione a peça principal. Troque também o Material para algo com cara de jogo.

Mão na massa (25 min): cada aluno posiciona todos os seus modelos seguindo a planta projetada do mapa. A ordem ajuda: primeiro o piso, depois as paredes, depois os detalhes. Para cada modelo, o aluno deve (1) posicionar e escalar, (2) marcar Anchored, (3) conferir CanCollide, (4) definir o PrimaryPart e (5) escolher o Material. Circule pela sala ajudando individualmente. Lembre todos de salvar com Ctrl+S de tempos em tempos.

Desafio e compartilhar (10 min): peça que cada aluno aperte Play e dê uma volta completa pelo próprio cenário, do início ao fim, sem cair e sem atravessar nada. Quem conseguir mostra a volta para a turma no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Ancorar é como colar a peça no chão com supercola: ela para de cair. Colisão é a diferença entre uma parede e um fantasma: com CanCollide ligado, o personagem bate; desligado, ele atravessa como fantasma. O PrimaryPart é o "coração" do modelo, a peça que manda nas outras quando o objeto inteiro se move. Material é a roupa da peça: a mesma caixa pode parecer madeira, metal ou neon. Mostrar sempre vale mais que explicar: marque a caixa, aperte Play, e deixe o aluno ver a mudança acontecer na hora.

## Erros comuns e como ajudar

O erro mais comum é esquecer de ancorar: o aluno monta tudo bonito, aperta Play e o cenário desaba. Peça para selecionar tudo de uma vez (clicando e segurando Ctrl no Explorer) e marcar Anchored em todas as peças juntas. Outro erro é desligar a colisão sem querer e o personagem cair pelo chão; confira o CanCollide do piso. Há também quem mova a peça errada porque selecionou o filho em vez do Model inteiro: oriente a clicar no nome do Model no Explorer. Por fim, modelos gigantes ou minúsculos vindos do Maya assustam: use a ferramenta Scale com calma e compare sempre com o tamanho do personagem. Reforce salvar com Ctrl+S para ninguém perder o trabalho.`,
  exercicios: [
    {
      titulo: `Ancorar e Colidir uma Peça`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tem ao menos um modelo selecionado no Explorer. Acompanhe pelo projetor onde ficam as caixas Anchored e CanCollide no painel Properties. Peça para testar no Play depois de cada mudança.`,
      atividade: `Selecione um modelo no Explorer. No painel Properties, marque a caixa Anchored e depois marque CanCollide. Aperte Play e ande até a peça para confirmar que o personagem bate nela e que ela não cai.`,
      gabarito: `A peça permanece parada no ar ou no lugar definido (não cai) por causa do Anchored, e o personagem para ao encostar nela por causa do CanCollide ligado. Se cair, o Anchored ficou desmarcado; se o personagem atravessar, o CanCollide ficou desligado.`,
    },
    {
      titulo: `Montar o Piso e as Paredes`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Projete a planta do mapa. Oriente a ordem: piso primeiro, paredes depois. Lembre os alunos de usar Move para posicionar e Scale para ajustar o tamanho, e de salvar com Ctrl+S no fim.`,
      atividade: `Seguindo a planta projetada, posicione o piso no centro do mapa e encaixe pelo menos três paredes ao redor. Use a ferramenta Move para mover e a Scale para ajustar o tamanho. Ancore todas as peças.`,
      gabarito: `O piso fica plano no centro e as três paredes ficam encaixadas nas bordas, alinhadas, sem buracos grandes entre elas e sem flutuar. Todas estão com Anchored marcado, então nada cai ao apertar Play.`,
    },
    {
      titulo: `Definir o PrimaryPart e o Material`,
      tipo: `Desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor que é preciso selecionar o Model (não um filho) antes de definir o PrimaryPart em Properties. Incentive a escolher materiais coerentes com o objeto (madeira para caixa, metal para porta).`,
      atividade: `Escolha um dos seus modelos. Selecione o Model inteiro no Explorer, vá em Properties, clique no campo PrimaryPart e selecione a peça principal. Depois troque o Material da peça para um que combine com o objeto.`,
      gabarito: `O campo PrimaryPart deixa de estar vazio e mostra o nome da peça principal escolhida. O Material muda a aparência da peça (por exemplo, madeira ou metal), deixando o objeto com cara de jogo. Se nada mudar, provavelmente foi selecionado um filho em vez do Model.`,
    },
    {
      titulo: `Revisão em Dupla do Cenário`,
      tipo: `Em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno testa o mapa do colega apertando Play. Dê uma lista curta de checagem: nada cai, nada é atravessado, o piso segura o personagem. Peça que anotem dois pontos a melhorar.`,
      atividade: `Troque de lugar com o colega e aperte Play no mapa dele. Caminhe por todo o cenário tentando cair pelo chão ou atravessar paredes. Anote dois problemas encontrados e devolva para o colega corrigir.`,
      gabarito: `A dupla encontra e descreve problemas reais, como uma parede sem CanCollide, uma peça não ancorada que caiu ou um buraco no piso. Cada problema anotado aponta a propriedade certa a corrigir (Anchored ou CanCollide) ou o ajuste de posição necessário.`,
    },
    {
      titulo: `Cenário Caminhável do Início ao Fim`,
      tipo: `Projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Esta é a entrega da aula. Circule garantindo que cada mapa tem início e fim conectados por um caminho contínuo. Verifique Anchored, CanCollide e PrimaryPart de cada modelo. Faça cada aluno salvar com Ctrl+S ao terminar.`,
      atividade: `Finalize o seu cenário com todos os modelos posicionados, escalados, ancorados, com colisão conferida, PrimaryPart definido e materiais escolhidos. Aperte Play e percorra o mapa do ponto inicial até o final sem cair e sem atravessar nada. Salve o projeto.`,
      gabarito: `O aluno consegue caminhar do início ao fim do cenário sem cair no vazio e sem atravessar estruturas. Todos os modelos estão ancorados, com CanCollide correto e PrimaryPart definido, os materiais dão aparência de jogo e o projeto foi salvo. O mapa está pronto para receber as mecânicas das próximas aulas.`,
    },
  ],
};
