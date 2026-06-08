import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Mecânicas com Blueprints",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Definir as mecânicas centrais do jogo final na Unreal Engine usando Blueprints visuais — movimento, inputs e eventos de gameplay — montando o primeiro protótipo jogável da fase.`,
  descricao: `Esta é a primeira aula do último mês da trilha, e ela abre a reta final do projeto: transformar a cena que o aluno já montou na Unreal Engine num jogo de verdade, com mecânicas que respondem ao jogador. No ano final, o aluno já sabe modelar no Blender e no Maya, já criou uma experiência em Realidade Virtual no Unity e já programou em C# e em C++. Agora o desafio é diferente: dar vida ao cenário. Antes de mergulhar no código C++ avançado da próxima aula, começamos pelo caminho mais visual e imediato da Unreal, que são os Blueprints.

Blueprint é o sistema de programação visual da Unreal Engine. Em vez de digitar linhas de código, o aluno conecta caixinhas (chamadas de nós) com fios, montando a lógica como se fosse um fluxograma. É a forma mais rápida de testar uma ideia de mecânica e ver o resultado na hora. Profissionais de verdade usam Blueprints o tempo todo, inclusive em jogos famosos, porque é uma maneira poderosa e clara de prototipar. Nesta aula, o aluno usa Blueprints para três coisas essenciais de qualquer jogo: mover o personagem, capturar o que o jogador aperta no teclado (os inputs) e disparar eventos de gameplay, como pular ou interagir.

O coração da aula é o Character Blueprint, que é o molde do personagem jogável. Dentro dele, o aluno organiza o Event Graph, que é a tela onde os eventos do jogo acontecem. O aluno vai ligar o evento de tecla pressionada às ações de movimento e de pulo, e vai testar tudo apertando o botão Play. É a primeira vez no mês que o cenário deixa de ser uma maquete parada e passa a ser controlável.

O Claude entra como assistente de produção e de depuração. Antes de montar, o aluno pede ao Claude ajuda para escrever a lista de mecânicas centrais do jogo (o que o personagem precisa fazer para a fase funcionar). Durante a montagem, quando um nó não conecta ou a lógica não responde, o aluno descreve o problema ao Claude e recebe pistas de onde olhar. O Claude não monta o Blueprint por ele; ele ajuda o aluno a planejar e a raciocinar sobre a lógica dos nós, como um colega experiente ao lado.`,
  materiais: [
    `Computadores com a Unreal Engine instalada e o projeto do jogo de cada aluno aberto, um por aluno`,
    `Acesso ao Claude (navegador ou app) para cada aluno planejar mecânicas e depurar a lógica dos nós`,
    `Projetor ou TV para o professor demonstrar os Blueprints da Unreal em tela grande`,
    `Arquivo de exemplo: um projeto simples da Unreal com um Character Blueprint já criado, para servir de referência`,
    `Arquivo de exemplo: uma lista de mecânicas modelo, já preenchida, mostrando movimento, pulo e interação`,
    `Caderno ou documento de texto para o aluno registrar a lista de mecânicas do jogo`,
  ],
  conceitosChave: [
    `Blueprint — sistema de programação visual da Unreal Engine onde se conecta nós com fios em vez de digitar código.`,
    `Nó — cada caixinha do Blueprint que representa uma ação, um evento ou um valor; os nós são ligados por fios.`,
    `Event Graph — a tela dentro do Blueprint onde a lógica acontece, organizada a partir de eventos do jogo.`,
    `Character Blueprint — o molde do personagem jogável, que guarda o movimento, a câmera e as ações do jogador.`,
    `Input — qualquer comando do jogador, como apertar uma tecla ou mover o controle, que o jogo precisa capturar.`,
    `Evento de gameplay — um acontecimento do jogo (pular, atirar, interagir) que dispara uma sequência de ações.`,
    `Protótipo jogável — versão inicial e simples do jogo, feita para testar se as mecânicas funcionam na prática.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Unreal para dar esta aula; precisa apenas saber abrir e ligar alguns nós. Um Blueprint é um fluxograma: cada caixinha é um nó e os fios brancos ligam a ordem das ações (o fluxo de execução). Para esta aula, três caminhos bastam. Primeiro, abrir o Character Blueprint: no painel Content Browser, dê dois cliques no Blueprint do personagem (em projetos do template Third Person ele se chama BP_ThirdPersonCharacter). Segundo, achar o Event Graph: dentro do Blueprint, clique na aba Event Graph no topo. Terceiro, criar um nó: clique com o botão direito numa área vazia do grafo e digite o nome do nó na busca. Para ligar dois nós, arraste do pino de saída de um até o pino de entrada do outro. Teste tudo antes da aula apertando o botão Play no topo da janela principal. Sobre inputs, a Unreal moderna usa o Enhanced Input, mas, para iniciantes, o jeito mais simples é o nó de evento de tecla: clique com o direito, busque por Keyboard e escolha, por exemplo, o evento da tecla espaço (Space Bar).

## Passo a passo da aula

Aquecimento e revisão (10 min): peça que cada aluno abra o próprio projeto e dê Play para ver a cena como está. Pergunte: o que esse personagem ainda não consegue fazer? Liste no quadro as mecânicas que a turma citar (andar, pular, correr, interagir). O objetivo é definir o alvo da fase.

Conteúdo novo guiado (15 min): no projetor, peça ao Claude uma lista de mecânicas centrais para o tema do jogo. Em seguida, abra o BP_ThirdPersonCharacter, mostre o Event Graph e demonstre o pulo. Clique com o direito, busque Space Bar e escolha o evento Keyboard Event para a tecla espaço. Do pino de execução desse evento, arraste um fio e crie o nó Jump. O resultado em pseudo-Blueprint é assim: Evento Space Bar (Pressed) -> Jump. Aperte Play e pule na frente da turma.

Mão na massa (25 min): cada aluno conversa com o Claude sobre o próprio jogo, registra a lista de mecânicas e, no seu Character Blueprint, monta o pulo ligando o evento da tecla espaço ao nó Jump. Quem terminar liga também a tecla shift a um nó que aumenta a velocidade (Set Max Walk Speed dentro do Character Movement). Circule conferindo se cada um deu Play e viu o personagem responder.

Desafio e compartilhar (10 min): desafie quem terminou a criar um evento próprio com a tecla E que imprime uma mensagem na tela usando o nó Print String (texto Interagiu). Encerre com dois ou três alunos mostrando o protótipo funcionando.

## Como explicar de forma clara

Use a imagem da receita de bolo: os nós são os passos e os fios brancos dizem a ordem em que tudo acontece, do começo ao fim. Diga que o evento de tecla é como uma campainha: quando o jogador aperta, a campainha toca e o jogo sabe que precisa reagir. Compare o Character Blueprint ao corpo do personagem, que guarda tudo que ele sabe fazer. Sobre o Claude, reforce que ele é um parceiro de planejamento e um detetive de bugs: ajuda a listar mecânicas e a achar onde a lógica está furada, mas quem liga os nós é o aluno.

## Erros comuns e como ajudar

O erro mais comum é esquecer de ligar o fio branco de execução e ligar só os fios de dados; sem o fio branco, o nó nunca roda. Outro é editar o Blueprint e esquecer de clicar em Compile (botão no topo) antes de dar Play, então a mudança não aparece. Muitos criam o evento de tecla no Blueprint errado (no Level Blueprint em vez do Character); confira se estão dentro do BP do personagem. Alguns somem com nós para fora da tela e acham que apagaram; ensine a apertar F para enquadrar. Por fim, há quem peça ao Claude algo vago (faça meu jogo); ensine a descrever o problema com detalhe, dizendo qual nó usou e o que aconteceu ao dar Play.`,
  exercicios: [
    {
      titulo: `Lista de mecânicas com o Claude`,
      tipo: `uso do Claude`,
      tempo: `7 min`,
      guiaProfessor: `Mostre como pedir de forma específica, citando o tema do jogo e o tipo de fase. Reforce que o Claude ajuda a pensar, mas não monta o Blueprint.`,
      atividade: `Peça ao Claude uma lista das mecânicas centrais que o personagem do seu jogo precisa ter para a fase funcionar. Escolha as três mais importantes e anote.`,
      gabarito: `Um bom pedido tem tema e contexto. Exemplo: Meu jogo é uma fase de plataforma numa floresta; liste as mecânicas centrais que o personagem precisa ter. A resposta esperada traz itens como andar, pular, correr e interagir. As três escolhidas devem ser as essenciais para a fase, normalmente andar, pular e interagir.`,
    },
    {
      titulo: `Encontrando o Event Graph`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Acompanhe o caminho na tela do aluno: Content Browser, dois cliques no Character Blueprint e a aba Event Graph. Confira se cada um chegou ao grafo certo.`,
      atividade: `No seu projeto, abra o Character Blueprint (em projetos Third Person é o BP_ThirdPersonCharacter) e clique na aba Event Graph. Encontre o nó Event BeginPlay já existente.`,
      gabarito: `O aluno está com o Event Graph do Character Blueprint aberto e localiza o nó Event BeginPlay. Conferência: o título da aba mostra Event Graph e o nó Event BeginPlay aparece na tela. Se não aparecer, basta apertar F com o nó selecionado ou usar o botão direito e buscar por BeginPlay.`,
    },
    {
      titulo: `Montando o pulo`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Garanta que o aluno ligue o fio branco de execução, não só selecione os nós. Lembre de clicar em Compile e depois em Play para testar.`,
      atividade: `No Event Graph do personagem, crie o evento da tecla espaço e ligue-o ao nó Jump. Clique em Compile e depois em Play para testar o pulo.`,
      gabarito: `A lógica fica assim, em pseudo-Blueprint: Evento Space Bar (Pressed) -> Jump (o fio branco de execução sai do evento e entra no nó Jump). Passos: clicar com o direito no grafo, buscar Space Bar e escolher o Keyboard Event; arrastar o fio branco da saída do evento; soltar e buscar Jump. Ao dar Play e apertar espaço, o personagem pula.`,
    },
    {
      titulo: `Correr com a tecla shift`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre que o nó Set Max Walk Speed fica dentro do componente Character Movement. Peça dois eventos: ao apertar shift acelera, ao soltar volta ao normal.`,
      atividade: `Adicione uma mecânica de correr: ao pressionar shift, aumente a velocidade do personagem; ao soltar, volte ao valor normal. Compile e teste.`,
      gabarito: `A lógica usa dois eventos da mesma tecla. Em pseudo-Blueprint: Evento Left Shift (Pressed) -> Set Max Walk Speed (Target: Character Movement, valor 1000); Evento Left Shift (Released) -> Set Max Walk Speed (Target: Character Movement, valor 500). Para achar o alvo, arrasta-se o componente Character Movement do painel Components para o grafo. Ao dar Play, segurar shift deixa o personagem mais rápido e soltar volta ao normal.`,
    },
    {
      titulo: `Evento de interação com mensagem`,
      tipo: `desafio na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Este é o desafio mais aberto. Oriente a usar o nó Print String para confirmar que o evento dispara. Peça que cada aluno explique o fluxo dos nós.`,
      atividade: `Crie um evento de interação com a tecla E que mostre na tela a mensagem Interagiu. Use o nó Print String. Compile, teste e explique o fluxo dos nós a um colega.`,
      gabarito: `A lógica é: Evento E (Pressed) -> Print String (In String: Interagiu). Passos: clicar com o direito, buscar a tecla E e criar o Keyboard Event; arrastar o fio branco e criar Print String; no campo In String, escrever Interagiu. Ao dar Play e apertar E, a mensagem Interagiu aparece no canto da tela. O aluno consegue explicar que o evento dispara quando a tecla é pressionada e que o fio branco leva a execução até o Print String.`,
    },
  ],
};
