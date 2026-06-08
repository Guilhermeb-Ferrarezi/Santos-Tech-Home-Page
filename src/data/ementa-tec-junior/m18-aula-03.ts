import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Os Inimigos Chegaram",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança cria os primeiros inimigos do seu jogo 2D no Construct 3 e dá a cada um um movimento simples, como ir e voltar ou perseguir o herói.`,
  descricao: `Nesta aula o jogo de cada criança ganha um momento muito esperado: a chegada dos inimigos. Até agora o herói andava e pulava sozinho por uma fase tranquila. Hoje a turma descobre que todo bom jogo precisa de um desafio, de alguém para enfrentar, de um perigo divertido. Quando o primeiro inimigo aparece e começa a se mexer na tela, os olhinhos brilham e a fase deixa de ser um passeio para virar uma aventura de verdade.

O assunto central é a ideia de movimento automático. O herói se mexe porque a criança aperta as setas; o inimigo, ao contrário, se mexe sozinho, sem ninguém apertar nada. Para isso, o Construct 3 oferece comportamentos prontos (os "behaviors"): pequenos motores que a gente cola no objeto e ele já passa a andar de um jeito combinado. Nesta aula usamos dois movimentos bem simples de entender: o vai e volta (o inimigo anda para um lado, bate na parede e volta) e a perseguição leve (o inimigo caminha na direção do herói). A criança escolhe qual combina com cada bichinho.

Por que isso é tão importante? Porque é aqui que a criança entende a diferença entre o que ela controla e o que o jogo controla sozinho. Essa é uma das primeiras grandes lições de quem cria games: dar vida a personagens que agem por conta própria. Além disso, posicionar inimigos na fase é uma decisão de game designer de verdade. Onde colocar o inimigo? Perto do começo, para avisar o jogador? Em cima de uma plataforma difícil? A criança aprende, brincando, que cada escolha muda a diversão.

Na prática, o professor vai mostrar onde clicar no Construct 3 para criar o objeto do inimigo, colar o comportamento de movimento e arrastar várias cópias para dentro da fase. Depois, cada aluno posiciona os seus inimigos e dá personalidade a cada um: um nome, uma cor, um jeitinho de andar. No fim, todos compartilham a fase e mostram o exército de inimigos que nasceu. É uma aula de muita ação, muito arrastar com o mouse e muita imaginação.`,
  materiais: [
    `Um computador por criança com o Construct 3 já aberto no projeto do jogo da própria criança, na fase que ela vem construindo desde as aulas anteriores (o professor abre tudo antes de a turma chegar).`,
    `Projetor ou TV grande ligada ao computador do professor, para todos verem a demonstração na tela cheia.`,
    `Um projeto de exemplo já salvo, com um inimigo que faz vai e volta e outro que persegue o herói, para mostrar o resultado pronto logo no começo.`,
    `Imagens simples de inimigos prontas para usar (um morcego, uma fruta brava, um robozinho), caso a criança ainda não tenha desenhado o seu no Aseprite.`,
    `Cartões impressos com setas de movimento (seta para os lados e seta apontando para o herói) para a roda de conversa sobre como cada inimigo anda.`,
    `Adesivos ou carimbos de "Criador de Inimigos" para premiar quem colocar o primeiro inimigo andando na fase.`,
    `Folhas de papel e lápis de cor para a criança desenhar e batizar os seus inimigos antes de colocá-los no jogo.`,
  ],
  conceitosChave: [
    `Inimigo — o personagem do jogo que atrapalha ou persegue o herói; ele é o desafio divertido da fase.`,
    `Comportamento (behavior) — um motorzinho pronto que a gente cola no objeto para ele já saber se mexer sozinho.`,
    `Vai e volta — jeito de andar em que o inimigo vai para um lado, bate numa parede e volta, sem parar.`,
    `Perseguir — quando o inimigo caminha sempre na direção do herói, como se estivesse correndo atrás dele.`,
    `Posicionar — escolher e arrastar o lugar exato da fase onde cada inimigo vai ficar.`,
    `Cópia (instância) — cada inimigo igual que a gente arrasta para a fase; são vários iguaizinhos do mesmo objeto.`,
    `Personalidade — o jeitinho único de cada inimigo: o nome, a cor e a forma de andar que a criança escolhe.`,
  ],
  treinamento: `## O que o professor precisa saber

No Construct 3, todo personagem é um objeto do tipo "Sprite". O inimigo é mais um Sprite, igual ao herói, mas com uma diferença: ele se mexe sozinho. Para isso usamos os "behaviors" (comportamentos), que são motores prontos. Você não precisa programar nada com código nesta aula; é só colar o comportamento certo e ajustar a velocidade.

Existem dois caminhos simples para o movimento automático. O primeiro é o comportamento "Bullet": ele faz o objeto andar reto numa direção; combinando com o comportamento "Bound to Layout" (ou virando o ângulo quando bate), vira o nosso "vai e volta". Para crianças, o jeito mais fácil de fazer vai e volta é dar o "Bullet" e, no painel de propriedades, marcar "Bounce off solids" como "Yes", deixando uma parede sólida em cada ponta. O segundo caminho é a perseguição: o comportamento se chama "Pathfinding" é avançado demais para esta idade, então usamos um truque visual mais simples (descrito abaixo) ou apenas o "Bullet" apontado para onde o herói costuma estar. Escolha um único movimento para ensinar primeiro e use sempre o mesmo, para não confundir.

Onde fica cada coisa: o botão para criar objeto novo está no menu superior, em "Insert new object", ou com clique duplo numa parte vazia do Layout. Os comportamentos ficam no painel "Properties" (lado direito): role até "Behaviors" e clique em "Add / Edit". A velocidade do inimigo se ajusta no mesmo painel, na propriedade "Speed". Deixe um número baixo (por exemplo, 60 ou 80) para o inimigo andar devagar e a criança conseguir acompanhar.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Construct 3)

10 min, aquecimento e revisão: Abra o projeto de exemplo no projetor. Mostre o herói andando e, de repente, o inimigo aparecendo e se mexendo sozinho. Pergunte: "Quem está mandando esse bichinho andar? Ninguém apertou tecla!". Relembre a fase que a turma já montou. Levante os cartões de seta e converse sobre os dois jeitos de andar.

15 min, conteúdo novo guiado: Na sua tela, crie o inimigo devagar, narrando cada clique. "Vou clicar duas vezes no espaço vazio do Layout, escolho Sprite, dou o nome de Inimigo e desenho ou carrego a imagem dele." Depois mostre o comportamento: "Agora vou no painel Properties, na parte Behaviors, clico em Add e escolho Bullet." Ajuste o "Speed" para 60. Marque "Bounce off solids" como "Yes" e coloque uma parede em cada ponta. Aperte "Run layout" (o botão de play, no alto) para todos verem o inimigo indo e voltando. Comemore.

25 min, mão na massa: Cada criança no seu computador, no próprio jogo. Guie pelo mesmo caminho, repetindo bem alto e devagar. Passe nas mesas apontando o mouse. Cada aluno cria um inimigo, cola o comportamento e aperta play para ver andar. Depois, peça para arrastar duas ou três cópias para a fase e posicionar cada uma num lugar diferente. Incentive a dar nome e cor a cada inimigo. Entregue o adesivo de "Criador de Inimigos".

10 min, desafio e compartilhar: Lance o desafio "coloque três inimigos em lugares espertos da fase, sem deixar impossível de passar". Depois, cada criança aperta play e mostra a fase com os inimigos andando. Conversem sobre qual fase ficou mais divertida e por quê.

## Como explicar para crianças

Use a analogia do brinquedo de corda: "O herói anda quando a gente empurra as setas; o inimigo é como um carrinho de corda, a gente dá corda uma vez e ele anda sozinho". Chame o comportamento de "motorzinho mágico que a gente cola no bichinho". O vai e volta é "o inimigo que vai passear, bate na parede e volta, igual a uma bolinha quicando". A perseguição é "o inimigo grudento, que corre sempre atrás do herói". Fale pouco e mostre muito: faça você primeiro, devagar, e só depois peça que repitam. Deixe cada criança batizar os inimigos para sentir que eles são dela.

## Erros comuns e como ajudar

Esquecer de colar o comportamento e o inimigo ficar parado: mostre que sem o motorzinho ele não anda e refaça o caminho do painel Behaviors junto. Velocidade altíssima e o inimigo virar um borrão: baixe o "Speed" para 60 e mostre a diferença. Inimigo que atravessa a parede no vai e volta: lembre de marcar "Bounce off solids" e de a parede ter o comportamento "Solid". Colocar inimigos demais e travar a fase: combine o limite de três e ajude a apagar os extras com Delete. Posicionar o inimigo num ponto impossível de passar: brinque de testar a fase e ajude a mover o inimigo para um lugar mais justo. Frustração por demorar: comemore cada tentativa e lembre que todo criador de games erra muitas vezes antes de o jogo ficar legal.`,
  exercicios: [
    {
      titulo: `Nasce o Primeiro Inimigo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre primeiro no projetor, bem devagar: clique duplo no Layout vazio, escolha Sprite, dê o nome de Inimigo e use a imagem. Depois libere a turma para criar o seu. Passe nas mesas apontando o caminho com o dedo e ajudando a guiar o mouse de quem precisar.`,
      atividade: `Cada criança cria um objeto Sprite chamado Inimigo na sua fase, escolhendo ou desenhando a aparência do bichinho.`,
      gabarito: `A criança acertou quando um inimigo aparece na fase como um Sprite com nome e imagem. Se o bichinho está na tela, está certo, mesmo que tenha precisado de ajuda no caminho.`,
    },
    {
      titulo: `O Motorzinho Mágico`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `No projetor, vá ao painel Properties, na parte Behaviors, clique em Add e escolha Bullet. Ajuste o Speed para um número baixo como 60. Aperte Run layout para mostrar o inimigo andando. Repita o caminho com a turma, apontando cada clique. Ajude quem esquecer de colar o comportamento.`,
      atividade: `Cada criança cola o comportamento de movimento no seu inimigo, ajusta a velocidade para um número baixo e aperta play para ver o bichinho andar sozinho.`,
      gabarito: `Acerta quem aperta play e vê o inimigo se mexendo sozinho na tela, sem ninguém apertar tecla. Se o inimigo anda, o comportamento foi colado certo.`,
    },
    {
      titulo: `Roda dos Dois Andares`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda com os cartões de seta. Mostre a seta dos lados (vai e volta) e a seta que aponta para o herói (perseguir). Pergunte qual jeito de andar combina com cada tipo de inimigo. Conduza a conversa para a ideia de que cada movimento deixa o jogo diferente. Deixe cada criança opinar.`,
      atividade: `Cada criança escolhe um cartão de seta e diz que tipo de inimigo andaria daquele jeito (o morcego perseguindo, a pedra rolando de um lado para o outro).`,
      gabarito: `Acerta quem liga um movimento a um inimigo com sentido, por exemplo vai e volta para algo que patrulha um lugar, perseguir para algo que corre atrás do herói. Qualquer ligação com lógica é uma resposta certa.`,
    },
    {
      titulo: `Meus Inimigos no Papel`,
      tipo: `desenho/papel`,
      tempo: `9 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Peça que cada criança desenhe dois inimigos diferentes, dê um nome a cada um e marque com uma seta como cada um anda (lados ou atrás do herói). Circule elogiando e perguntando o nome e o jeito de andar de cada inimigo.`,
      atividade: `A criança desenha dois inimigos no papel, pinta, escreve ou dita o nome de cada um e desenha ao lado a seta do movimento que ele vai ter no jogo.`,
      gabarito: `Acerta quem entrega dois inimigos com nome e uma seta de movimento para cada (lados ou perseguir). Dois desenhos com nome e seta já contam como certo; o capricho do traço não é o que importa.`,
    },
    {
      titulo: `Desafio do Exército Esperto`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha o desafio final: arrastar três cópias do inimigo para a fase e posicionar cada uma num lugar esperto, sem deixar a fase impossível de vencer. Lembre de testar apertando play e de mover o inimigo se ele travar a passagem. Ajude a apagar cópias extras com Delete. Termine com cada um mostrando a sua fase.`,
      atividade: `Cada criança coloca três inimigos na fase, posiciona cada um num lugar diferente, aperta play e confirma que ainda dá para o herói passar pela fase.`,
      gabarito: `Acerta quem tem três inimigos andando em lugares diferentes e consegue, no play, fazer o herói passar pela fase. Se a fase tem três inimigos espertos e ainda é possível vencer, o desafio está concluído.`,
    },
  ],
};
