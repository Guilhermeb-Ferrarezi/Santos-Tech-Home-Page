import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Explorando a janela de jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Explorar a interface do Construct 3 ajustando o tamanho da janela do jogo, adicionando um plano de fundo e testando o botão Preview pela primeira vez.`,
  descricao: `Nesta aula o aluno dá o segundo passo dentro do Construct 3: depois de conhecer o programa na aula anterior, agora ele aprende a enxergar e organizar o espaço onde o jogo vai acontecer. O foco é a "janela de jogo", que é a área visível pela qual o jogador olha para o mundo do game. É como decidir o tamanho da tela de um cinema antes de passar o filme: tudo o que o jogador vê precisa caber ali.

O professor vai guiar a turma a definir o tamanho da janela (Viewport) e o tamanho do cenário (Layout), entender a diferença entre os dois e ajustar esses números nas propriedades do projeto. Em seguida, cada aluno adiciona um plano de fundo ao seu cenário, dando a primeira "cara" visual ao projeto do mês. Trabalhar com camadas e cores de fundo ajuda o aluno a perceber que um jogo é montado por partes organizadas, não tudo de uma vez.

A grande novidade da aula é o botão Preview (a seta de "play"). Ao clicar nele, o navegador abre e o aluno vê seu próprio projeto rodando de verdade pela primeira vez. Mesmo que ainda não haja personagens nem ações, ver a janela do jogo aberta no navegador é um momento de empolgação e mostra que o trabalho está vivo e funcionando.

Por fim, o aluno pratica navegar com fluidez: dar zoom para se aproximar de um detalhe, afastar para ver o cenário inteiro e mover a câmera pela área de trabalho. Essas habilidades de navegação serão usadas em todas as próximas aulas, então vale a pena treiná-las com calma agora.`,
  materiais: [
    `Computadores com Construct 3 já aberto e logado (um por aluno), de preferência no navegador Chrome ou Edge`,
    `Projetor ou TV grande para o professor mostrar os passos na tela`,
    `Projeto do mês de cada aluno já criado na aula 1 (ou um projeto vazio novo, se faltou alguém)`,
    `Uma pasta com 3 a 5 imagens de plano de fundo prontas (céu, floresta, espaço, grama) para os alunos escolherem`,
    `Mouse externo para cada computador, pois facilita o zoom e a navegação`,
    `Folha impressa de "atalhos do Construct 3" (zoom, salvar, Preview) colada na bancada`,
  ],
  conceitosChave: [
    `Janela de jogo (Viewport) — é o "pedaço" do cenário que o jogador realmente vê na tela durante o jogo.`,
    `Layout — é o cenário completo, a "folha" inteira onde montamos o mundo do jogo; pode ser maior do que a janela.`,
    `Plano de fundo — a imagem ou cor que fica atrás de tudo e dá ambiente ao cenário, como céu ou floresta.`,
    `Camada (Layer) — uma "folha transparente" empilhada; o fundo fica numa camada e os personagens em outra, por cima.`,
    `Preview — o botão de "play" que abre o jogo no navegador para testarmos como está ficando.`,
    `Zoom — aproximar ou afastar a visão da área de trabalho para enxergar detalhes ou o cenário inteiro.`,
    `Propriedades (Properties) — o painel lateral onde mudamos números e ajustes, como o tamanho da janela.`,
  ],
  treinamento: `## O que o professor precisa saber

No Construct 3, dois conceitos costumam confundir: o Layout e o Viewport. O Layout é o cenário inteiro (a folha onde você desenha o mundo). O Viewport, também chamado de "Viewport Size" nas propriedades do projeto, é o tamanho da janela que o jogador enxerga. Para esta aula, um Viewport de 1280 por 720 é um ótimo padrão. Você ajusta esse número clicando em uma área vazia do projeto e olhando o painel Properties à esquerda, no item "Viewport Size". O tamanho do Layout aparece quando você clica no nome do Layout na aba Project (à direita). Salve com Ctrl + S e teste com o botão Preview (a seta de play no topo). Não é preciso dominar tudo: basta seguir os passos com calma junto da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula 1 com perguntas rápidas. "O que é a janela onde o jogo aparece?" Peça que cada aluno abra o Construct 3 e o próprio projeto do mês. Confira no projetor que todos estão na mesma tela inicial, com o Layout aberto no centro.

Conteúdo novo guiado (15 min): no projetor, clique em uma área vazia da tela (fora do Layout) para que o painel Properties mostre as propriedades do projeto. Mostre o campo "Viewport Size" e troque para 1280 e 720. Explique que esse é o tamanho da "tela do cinema". Depois, na aba Project (direita), clique no nome do Layout e mostre, em Properties, o tamanho do Layout (Layout Size). Em seguida, apresente as camadas: abra o painel "Layers" (direita). Mostre a camada existente e crie uma nova chamada "Fundo" usando o botão de adicionar camada (ícone de "+"). Arraste a camada "Fundo" para baixo da camada dos objetos.

Mão na massa (25 min): cada aluno repete em seu projeto. Primeiro ajusta o Viewport Size para 1280 x 720 e salva com Ctrl + S. Depois cria a camada "Fundo". Para adicionar o plano de fundo, peça que dê duplo clique numa área vazia do Layout, escolha "Tiled Background" ou "Sprite" na lista, e selecione uma das imagens da pasta. Oriente a posicionar a imagem cobrindo todo o cenário. Por fim, todos clicam no botão Preview (seta de play) e veem o jogo abrir no navegador. Circule pela sala ajudando quem travou.

Desafio e compartilhar (10 min): proponha que cada aluno mude a cor de fundo da camada ou troque a imagem por outra, e treine o zoom com Ctrl + roda do mouse. Termine com uma rodada rápida em que dois ou três alunos mostram a janela de jogo deles no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o Layout é como uma folha grande de desenho e o Viewport é uma "moldura" ou uma "janela de carro": você só vê o pedaço que está dentro da moldura, mesmo que o mundo seja maior. As camadas são como folhas de papel vegetal empilhadas: o céu fica embaixo e o personagem fica em cima, senão o céu cobriria o herói. O botão Preview é o "play" do controle, que liga o jogo de verdade. Evite termos técnicos demais; sempre que usar uma palavra nova em inglês, fale o significado em português logo em seguida.

## Erros comuns e como ajudar

O erro mais comum é o aluno colocar o plano de fundo na camada errada, ficando por cima de tudo. Mostre como arrastar a camada "Fundo" para baixo no painel Layers. Outro tropeço é esquecer de salvar antes do Preview; reforce o Ctrl + S como hábito. Alguns clicam no Layout em vez de na área vazia e não acham o Viewport Size; oriente a clicar fora do cenário. Há quem se assuste porque o Preview abre uma aba em branco: explique que é normal sem personagens, e que ver a janela aberta já é vitória. Por fim, se o aluno se perder ao dar zoom, mostre Ctrl + 0 ou Shift + barra de espaço para reenquadrar.`,
  exercicios: [
    {
      titulo: `Ajustando a janela do jogo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno clique numa área vazia (fora do Layout) para ver as propriedades do projeto no painel Properties. Acompanhe pelo projetor e confira os números digitados.`,
      atividade: `Abra seu projeto, clique numa área vazia da tela e, no painel Properties, mude o "Viewport Size" para 1280 de largura e 720 de altura. Salve com Ctrl + S.`,
      gabarito: `O Viewport Size deve ficar em 1280 x 720. O painel Properties confirma os valores, e o título do projeto não mostra mais o asterisco de "não salvo" após o Ctrl + S.`,
    },
    {
      titulo: `Colocando o plano de fundo`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre antes como criar a camada "Fundo" no painel Layers e como arrastá-la para baixo. Tenha a pasta de imagens aberta para os alunos escolherem.`,
      atividade: `Crie uma camada chamada "Fundo" no painel Layers, deixe-a por baixo das outras, dê duplo clique no Layout, escolha "Tiled Background" e selecione uma imagem de fundo cobrindo todo o cenário.`,
      gabarito: `O cenário fica preenchido por uma imagem de fundo, a camada "Fundo" aparece embaixo no painel Layers e nenhum outro objeto fica escondido atrás dela. O fundo cobre toda a área da janela.`,
    },
    {
      titulo: `Primeiro Preview`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Avise que a aba do navegador pode abrir quase vazia, e que isso é esperado. Ajude quem tiver bloqueador de pop-up impedindo a janela de abrir.`,
      atividade: `Clique no botão Preview (a seta de "play" no topo) e observe seu jogo abrir no navegador. Volte e mude a cor de fundo da camada, depois rode o Preview de novo para ver a diferença.`,
      gabarito: `O navegador abre uma aba mostrando a janela do jogo com o plano de fundo escolhido. Ao trocar a cor e rodar de novo, a mudança aparece na tela, provando que o Preview reflete o projeto atual.`,
    },
    {
      titulo: `Navegando em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno comanda as ações em voz alta e o outro executa no teclado, depois trocam. Reforce os atalhos de zoom e reenquadrar.`,
      atividade: `Em dupla, um dita e o outro executa: dar zoom para perto (Ctrl + roda do mouse), afastar para ver o cenário todo, mover a câmera e reenquadrar com Shift + barra de espaço. Depois troquem de papel.`,
      gabarito: `Os dois alunos conseguem aproximar, afastar, mover e reenquadrar a área de trabalho com os atalhos. Cada um demonstra ao menos uma vez o zoom e o reenquadramento sem ajuda do colega.`,
    },
    {
      titulo: `Roda de conversa: minha janela de jogo`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza a roda com perguntas abertas e deixe dois ou três alunos mostrarem a tela no projetor. Valorize as escolhas, sem corrigir gosto pessoal.`,
      atividade: `Em roda, cada aluno conta qual fundo escolheu e por quê, e explica com suas palavras a diferença entre o Layout (cenário inteiro) e o Viewport (a janela que o jogador vê).`,
      gabarito: `Cada aluno descreve seu fundo e explica que o Layout é o cenário completo enquanto o Viewport é a parte visível na tela. Respostas válidas usam comparações como "moldura", "janela" ou "tela de cinema".`,
    },
  ],
};
