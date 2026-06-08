import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Construindo o Mundo do Jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Construir a primeira área jogável do jogo no Roblox Studio, modelando o terreno, posicionando e ajustando Parts, aplicando cores e materiais e instalando iluminação básica com um SpawnLocation.`,
  descricao: `Depois de explorar a interface do Roblox Studio na aula anterior, chegou a hora de colocar a mão na massa e dar forma ao mundo do jogo. Nesta aula, cada aluno deixa de ser apenas um visitante do Studio e passa a ser um construtor: ele cria montanhas, gramados e caminhos com a ferramenta Terrain, espalha plataformas pelo cenário e decide as cores e os materiais de cada bloco. É o momento em que a ideia que estava na cabeça começa a virar um lugar de verdade na tela.

O Roblox Studio trabalha com dois grandes tipos de elementos para montar cenários. O primeiro são as Parts, que são blocos básicos (cubos, esferas, cilindros e cunhas) que o aluno arrasta, redimensiona, gira e pinta para construir plataformas, paredes, rampas e obstáculos. O segundo é o Terrain, um sistema especial que permite esculpir o relevo do mundo como se fosse massinha de modelar, criando colinas, vales, água e areia com poucos cliques. Juntando Parts e Terrain, o aluno consegue uma área jogável rica e variada.

Para que o cenário fique bonito e funcional, dois detalhes finais são essenciais. A iluminação básica define se o mundo parece manhã, tarde ou noite, e o Roblox Studio já oferece um céu pronto que o aluno pode ajustar mudando algumas propriedades. O SpawnLocation é a plataforma especial onde o personagem do jogador nasce quando o jogo começa: sem ele, o jogador pode cair no vazio. Ao final da aula, cada aluno terá uma primeira área jogável, com chão firme, plataformas posicionadas, cores escolhidas e um ponto claro de onde a aventura começa.

Esta aula é totalmente prática e visual. Quase tudo é feito clicando, arrastando e ajustando propriedades no painel lateral. Não há código Lua ainda (isso vem na aula 5), mas o aluno já aprende a pensar como um designer de níveis: onde o jogador vai pisar, para onde ele vai olhar e como o espaço conduz a brincadeira.`,
  materiais: [
    `Computadores com o Roblox Studio instalado, atualizado e com login feito (um por aluno)`,
    `Projetor ou TV espelhando a tela do professor para demonstrar cada passo para a turma`,
    `Arquivo de exemplo no formato .rbxl com uma área jogável simples já montada (chão, duas plataformas e SpawnLocation) para servir de referência`,
    `Imagem de referência impressa ou no projetor com um exemplo de cenário (ilha, floresta ou plataforma) para inspirar os alunos`,
    `Quadro branco ou flip-chart para desenhar o mapa da área jogável antes de construir`,
    `Mouse com roda de rolagem para cada aluno (facilita muito o zoom e a navegação da câmera)`,
  ],
  conceitosChave: [
    `Part — bloco básico de construção do Roblox (cubo, esfera, cilindro, cunha) que pode ser movido, redimensionado, girado e pintado.`,
    `Terrain — ferramenta que permite esculpir o relevo do mundo (colinas, vales, água, areia) como se fosse massinha de modelar.`,
    `Escala — ato de mudar o tamanho de uma Part, esticando ou encolhendo suas dimensões com a ferramenta Scale.`,
    `Rotação — ato de girar uma Part em torno de um eixo usando a ferramenta Rotate para criar rampas e inclinações.`,
    `Material — aparência de superfície de uma Part (grama, madeira, metal, plástico) que muda como ela reflete a luz.`,
    `SpawnLocation — plataforma especial onde o personagem do jogador nasce quando o jogo começa.`,
    `Iluminação — conjunto de propriedades (como ClockTime e Brightness) no objeto Lighting que define se o mundo parece dia ou noite.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox Studio para conduzir esta aula com segurança, mas vale abrir o programa uma vez antes para reconhecer onde fica cada ferramenta. No topo da tela existe uma faixa de abas chamada Ribbon. A aba Home (Início) reúne as ferramentas mais usadas: Select (Selecionar), Move (Mover), Scale (Escalar) e Rotate (Girar), além do botão Part, que cria blocos. A aba Editor (em algumas versões aparece como aba do painel Terrain) abre as ferramentas de terreno: Add (Adicionar), Subtract (Subtrair), Paint (Pintar) e Sea Level (Nível do mar). Do lado direito ficam dois painéis muito importantes: o Explorer, que lista tudo que existe no jogo em forma de árvore, e o Properties (Propriedades), que mostra os detalhes do item selecionado, como cor, material e posição. Para mover a câmera, use as teclas W, A, S, D e arraste com o botão direito do mouse para olhar ao redor; a roda do mouse dá zoom. Antes da aula, crie um Baseplate novo (template Baseplate na tela inicial) e teste criar uma Part, redimensioná-la e pintá-la, para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra um novo projeto Baseplate no projetor. Relembre com a turma o que viram na aula 1: a Ribbon, o Explorer e a câmera. No quadro, desenhe rapidamente um mapa simples da área jogável (um chão, duas ou três plataformas e uma seta indicando onde o jogador nasce). Diga que hoje eles vão construir esse mapa de verdade.

Conteúdo novo guiado (15 min): Na sua tela, demonstre os quatro movimentos básicos. Primeiro, clique na aba Home e depois em Part para criar um bloco. Use a ferramenta Move para arrastar o bloco pelas setas coloridas. Use Scale para esticar o bloco e virar uma plataforma larga. Use Rotate para inclinar um bloco e criar uma rampa. Em seguida, com o bloco selecionado, vá ao painel Properties, encontre Color e escolha uma cor, e encontre Material e troque Plastic por Grass. Por fim, abra o painel Terrain (Editor), escolha Add, selecione o material Grass e pinte uma pequena colina ao lado da plataforma. Mostre o SpawnLocation no Explorer (ele já vem no Baseplate) e explique que é ali que o jogador nasce.

Mão na massa (25 min): Cada aluno constrói sua primeira área jogável. Orientação na lousa, passo a passo: 1) criar um chão grande com uma Part escalada; 2) adicionar duas ou três plataformas em alturas diferentes usando Move e Scale; 3) usar Rotate para fazer pelo menos uma rampa; 4) pintar tudo escolhendo Color e Material no Properties; 5) usar o Terrain (Add com Grass) para criar uma colina ou um pouco de relevo ao redor; 6) confirmar que existe um SpawnLocation no Explorer e posicioná-lo sobre o chão. Circule pela sala ajudando quem travou e elogiando escolhas de cores e formas.

Desafio e compartilhar (10 min): Desafie cada aluno a mudar a hora do dia. No Explorer, clicar em Lighting, ir ao Properties e alterar a propriedade ClockTime para 18 (entardecer) ou 0 (noite). Depois, cada aluno mostra sua área jogável para um colega ao lado e explica por onde o jogador entraria e o que ele faria primeiro.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Diga que as Parts são como peças de Lego: você junta blocos para construir qualquer coisa. Compare a ferramenta Scale com esticar uma massinha e a Rotate com girar o volante de um carro. Explique o Terrain como um caixote de areia da praia, onde você levanta montinhos e cava buracos. Chame o SpawnLocation de portão de entrada do jogo: é a porta por onde o jogador chega. Para a iluminação, peça que imaginem o interruptor de luz da casa, só que controlando o sol do mundo inteiro. Incentive os alunos a pensarem como o jogador vai se sentir andando ali, não só na aparência.

## Erros comuns e como ajudar

O erro mais comum é confundir Move com Scale e acabar movendo a Part quando queria esticá-la: lembre que cada ferramenta tem um botão próprio na aba Home e que as alças mudam de aparência. Outro tropeço é a plataforma flutuar muito alta ou afundar no chão; oriente a usar a vista de lado (girar a câmera) para enxergar a altura real. Alguns alunos somem com a câmera para longe do cenário; ensine a pressionar a tecla F com a Part selecionada para a câmera voltar e focar nela. No Terrain, é comum esculpir demais e criar um buraco enorme; mostre a ferramenta Subtract para corrigir e peça pinceladas curtas. Por fim, se o aluno não achar o SpawnLocation, peça que olhe a lista do Explorer e use a barra de busca no topo desse painel.`,
  exercicios: [
    {
      titulo: `Minha primeira plataforma`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno abriu um projeto Baseplate. Demonstre na sua tela criar a Part pelo botão Part da aba Home e arrastar com a ferramenta Move pelas setas coloridas. Circule conferindo se todos conseguiram criar e mover o bloco.`,
      atividade: `Na aba Home, clique em Part para criar um bloco. Use a ferramenta Move e arraste o bloco pelas setas coloridas até ele ficar apoiado sobre o chão, como uma pequena plataforma.`,
      gabarito: `O aluno cria uma Part usando o botão Part da aba Home e a reposiciona com a ferramenta Move até deixá-la apoiada sobre o Baseplate, formando uma plataforma simples.`,
    },
    {
      titulo: `Esticar e inclinar`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Reforce a diferença entre as ferramentas Scale (estica) e Rotate (gira). Mostre que ao escalar surgem alças quadradas e ao girar surgem círculos. Peça que cada aluno faça uma plataforma larga e uma rampa, e ajude quem confundir mover com escalar.`,
      atividade: `Selecione uma Part e use a ferramenta Scale para transformá-la em uma plataforma bem larga. Crie outra Part e use a ferramenta Rotate para inclená-la e formar uma rampa que ligue o chão à plataforma.`,
      gabarito: `O aluno usa Scale para alargar uma Part até virar plataforma e usa Rotate para inclinar outra Part formando uma rampa que conecta o chão à plataforma. As duas peças ficam encostadas, permitindo uma subida.`,
    },
    {
      titulo: `Pintando o mundo`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor como, com uma Part selecionada, abrir o painel Properties e localizar as propriedades Color e Material. Demonstre trocar Plastic por Grass e Wood. Estimule escolhas que façam sentido (grama no chão, madeira na ponte) e passe validando.`,
      atividade: `Selecione cada Part do seu cenário, abra o painel Properties e escolha uma cor em Color. Depois, mude a propriedade Material para combinar com o objeto: use Grass no chão, Wood nas plataformas e Slate ou Metal nas rampas.`,
      gabarito: `O aluno seleciona suas Parts, define uma Color para cada uma no Properties e ajusta o Material de forma coerente (por exemplo, Grass no chão, Wood nas plataformas, Metal nas rampas). O cenário fica colorido e com materiais variados.`,
    },
    {
      titulo: `Esculpindo o terreno`,
      tipo: `desafio`,
      tempo: `13 minutos`,
      guiaProfessor: `Abra o painel Terrain (aba Editor). Demonstre Add com o material Grass para levantar uma colina e Subtract para cavar. Avise para usar pinceladas curtas e mostre o controle de tamanho do pincel (Brush Size). Ajude quem criar buracos enormes a corrigir com Subtract.`,
      atividade: `Abra o painel Terrain e escolha a ferramenta Add com o material Grass. Pinte uma colina ao lado das suas plataformas. Depois use a ferramenta Subtract para cavar um pequeno vale ou um caminho no terreno.`,
      gabarito: `O aluno usa a ferramenta Add do Terrain com material Grass para erguer uma colina e a ferramenta Subtract para cavar um vale ou caminho, criando relevo ao redor das plataformas sem destruir o cenário construído.`,
    },
    {
      titulo: `Entrada do jogo e hora do dia`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre o SpawnLocation no Explorer e ensine a posicioná-lo sobre o chão com a ferramenta Move. Em seguida, demonstre clicar em Lighting no Explorer e mudar a propriedade ClockTime no Properties. Peça que cada aluno teste valores diferentes (6, 12, 18, 0) e observe a mudança da luz.`,
      atividade: `No Explorer, encontre o SpawnLocation e use Move para posicioná-lo bem sobre o chão da sua área jogável, como a entrada do jogo. Depois clique em Lighting, abra o Properties e mude o ClockTime para 18 (entardecer). Observe como a luz do mundo muda e ajuste para a hora que mais combina com o seu cenário.`,
      gabarito: `O aluno posiciona o SpawnLocation sobre o chão da área jogável usando a ferramenta Move e altera a propriedade ClockTime do objeto Lighting (por exemplo, 18 para entardecer ou 0 para noite), observando a mudança na iluminação. A área fica com um ponto de entrada claro e uma hora do dia definida.`,
    },
  ],
};
