import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Montando o Cenário em Blocos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Construir um pequeno cenário voxel inspirado no jogo, combinando volumes, copiando e colando elementos e organizando-os no espaço para criar uma cena que conversa com o personagem e os itens já prontos.`,
  descricao: `Nesta aula o aluno deixa de modelar uma peça isolada e passa a pensar como cenógrafo: ele monta um espaço onde o personagem vive. Até agora a turma criou o corpo do personagem (Aula 2) e os itens e acessórios (Aula 3). Agora chega a hora de dar um lugar para essa história acontecer. O cenário pode ser uma plataforma de pulo, uma árvore de fundo, uma parede de pedra ou um item grande de decoração que aparece no jogo. O objetivo não é fazer um mapa gigante, e sim uma cena curta e bem organizada que combina com o estilo do projeto.

O conceito central da aula é a composição por blocos. Em vez de esculpir tudo voxel por voxel, o aluno aprende a trabalhar com volumes grandes e repetições inteligentes. Uma plataforma é um bloco esticado; uma árvore é um tronco mais uma copa; uma parede é um padrão que se repete. Quando o aluno entende isso, ele constrói rápido e com aparência profissional, porque o cenário ganha ritmo visual e proporção coerente com o personagem.

As duas ferramentas estrela da aula são a seleção em caixa (Box) e o copiar e colar. Com elas o aluno cria um pedaço bom uma única vez e reaproveita várias vezes, mantendo tudo no mesmo tamanho e estilo. Também entra a noção de escala: o cenário precisa ser proporcional ao personagem, nem tão pequeno que ele não caiba, nem tão grande que ele suma. Por isso é útil ter o personagem por perto como referência de altura.

Ao final, cada aluno terá uma cena voxel simples, mas com intenção: um chão onde pisar, um fundo que dá contexto e algum elemento que repete e cria padrão. É a base do mundo do jogo ganhando forma em três dimensões, pronta para receber cor e textura nas próximas aulas.`,
  materiais: [
    `Computadores com o MagicaVoxel instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a tela do MagicaVoxel`,
    `Arquivos de exemplo (.vox) com um personagem pronto e um cenário simples de referência`,
    `Imagens de referência de cenários de jogos 2D e em voxel (plataforma, árvore, parede)`,
    `Folha impressa com os principais atalhos do MagicaVoxel para deixar ao lado de cada aluno`,
    `Caderno ou folha para o aluno rascunhar a planta do cenário antes de modelar`,
  ],
  conceitosChave: [
    `Cenário — o ambiente onde o personagem do jogo aparece e se movimenta, como chão, fundo e objetos.`,
    `Volume (Box) — um bloco grande feito de uma só vez, usado como base de plataformas, paredes e troncos.`,
    `Copiar e colar — duplicar um pedaço já modelado para repetir formas iguais sem refazer voxel por voxel.`,
    `Composição — a organização dos elementos no espaço para que a cena fique equilibrada e agradável de olhar.`,
    `Escala — a relação de tamanho entre o cenário e o personagem, para que tudo pareça proporcional.`,
    `Padrão — a repetição de um mesmo elemento (tijolos, folhas, tábuas) que dá ritmo visual ao cenário.`,
    `Referência — a imagem do personagem ou de outro jogo usada como guia de tamanho, cor e estilo.`,
  ],
  treinamento: `## O que o professor precisa saber

O MagicaVoxel é um programa de modelagem em voxel: cada peça é feita de cubinhos, como um Lego digital. Nesta aula o foco não é detalhe fino, e sim montar um cenário rápido com blocos grandes e repetições. Você vai usar três ferramentas principais da barra superior: a ferramenta de adicionar voxels (atalho da letra V para o modo de desenho), o modo de seleção em caixa (atalho da letra B, de Box) e o modo Linha ou Centro para puxar paredes. Antes da aula, abra um arquivo de exemplo com um personagem pronto e deixe-o visível como referência de altura. Tenha também um cenário simples já montado para mostrar o resultado esperado. Lembre os alunos que o canto inferior esquerdo mostra o tamanho da área de trabalho (por exemplo 40 40 40); se o cenário não couber, aumente esse número clicando nos campos.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o personagem da Aula 2 no projetor e pergunte: onde ele vive? Mostre duas ou três imagens de cenários de jogos. Reforce a ideia de que hoje vamos construir o lugar dele com blocos grandes, não cubinho por cubinho.

Conteúdo novo guiado (15 min): com o MagicaVoxel no projetor, demonstre o passo a passo. Primeiro, faça a plataforma: escolha a ferramenta de adicionar (V), selecione o modo Box (tecla B) na barra de modos, clique e arraste para criar um bloco comprido e baixo, que vira o chão. Depois mostre o copiar e colar: ative o modo de seleção (na aba Edit, botão Select ou tecla T), arraste uma caixa em volta de um pedaço, pressione Ctrl+C e Ctrl+V e arraste a cópia para o lado com a seta de mover. Por fim, monte uma árvore: um bloco vertical fino como tronco e um bloco maior em cima como copa. Mostre como mover objetos no espaço usando as setas coloridas (eixo) que aparecem ao selecionar.

Mão na massa (25 min): cada aluno cria seu cenário. Peça pelo menos três elementos: um chão ou plataforma, um elemento de fundo (parede ou árvore) e um elemento que se repita usando copiar e colar. Circule pela sala e verifique se o tamanho conversa com o personagem; sugira colocar o personagem ao lado como régua de altura.

Desafio e compartilhar (10 min): peça que cada aluno duplique um elemento e crie um padrão (várias árvores, vários tijolos). Depois, dois ou três alunos mostram a cena e dizem que parte do jogo aquilo representa.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Diga: pensem como quem monta um cenário de teatro, primeiro o chão, depois o fundo, depois os enfeites. Para o copiar e colar, fale carimbo: você cria uma folha de árvore boa e carimba várias vezes. Para escala, peça que coloquem o boneco do lado e perguntem se ele caberia ali de verdade. Evite termos técnicos demais; troque eixo por as setinhas coloridas que empurram o bloco.

## Erros comuns e como ajudar

O erro mais comum é fazer voxel por voxel e perder tempo: insista no modo Box para volumes grandes. Outro erro é colar a cópia e ela ficar grudada por cima da original; ensine a arrastar pela seta do eixo antes de soltar. Muitos esquecem de comparar com o personagem e fazem um cenário minúsculo ou gigante; tenha sempre o boneco visível. Alguns deletam tudo sem querer: mostre o Ctrl+Z para desfazer e o botão de salvar com nome próprio. Por fim, há quem queira detalhar cedo demais; lembre que cor e textura entram nas próximas aulas.`,
  exercicios: [
    {
      titulo: `Construindo a primeira plataforma`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos estejam no modo de adicionar (V) e com o modo Box (B) ativo. Verifique no canto inferior esquerdo se a área de trabalho tem espaço suficiente.`,
      atividade: `No MagicaVoxel, use a ferramenta de adicionar com o modo Box para criar um bloco comprido e baixo que sirva de chão ou plataforma. Arraste para definir o comprimento e mantenha a altura pequena.`,
      gabarito: `O aluno seleciona V, ativa o modo Box, clica e arrasta formando um bloco retangular largo e baixo. Resultado esperado: uma plataforma sólida e contínua, sem buracos, com altura de poucos voxels e largura suficiente para o personagem pisar.`,
    },
    {
      titulo: `Carimbo de árvores com copiar e colar`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre novamente Ctrl+C, Ctrl+V e o uso das setas de eixo para afastar a cópia. Reforce que a cópia nasce em cima da original e precisa ser movida.`,
      atividade: `Crie uma árvore simples (tronco fino e copa maior). Em seguida, selecione-a, copie e cole pelo menos duas vezes, afastando cada cópia para criar um pequeno bosque de fundo.`,
      gabarito: `O aluno usa o modo de seleção, envolve a árvore numa caixa, pressiona Ctrl+C e Ctrl+V e arrasta a cópia pela seta do eixo. Resultado esperado: três árvores iguais, separadas no espaço, formando um padrão de fundo coerente.`,
    },
    {
      titulo: `Régua de altura em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Oriente que abram o personagem como referência ao lado do cenário e comparem alturas. Circule conferindo a proporção.`,
      atividade: `Em dupla, coloquem o personagem ao lado do cenário de um dos colegas e avaliem juntos: o personagem caberia ali? A plataforma é alta ou baixa demais? Ajustem o cenário para ficar proporcional ao boneco.`,
      gabarito: `A dupla compara as alturas e ajusta o cenário para que o personagem caiba e pareça proporcional. Resultado esperado: a plataforma fica na altura do quadril ou joelho do personagem, e o fundo não o esconde nem o deixa minúsculo.`,
    },
    {
      titulo: `Roda de conversa: o que conta a cena?`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza a roda com perguntas abertas. Incentive que cada aluno descreva a função de cada elemento do próprio cenário, sem julgar acertos ou erros.`,
      atividade: `Em roda, cada aluno mostra sua cena e responde: que parte do jogo este cenário representa? Qual elemento você repetiu e por quê? O que ainda falta para a cena ficar completa?`,
      gabarito: `Cada aluno relaciona seu cenário a um momento do jogo (fase, fundo, base) e explica a repetição usada. Resultado esperado: respostas que conectam chão, fundo e padrão à história do jogo, demonstrando intenção de composição.`,
    },
    {
      titulo: `Cena completa do personagem`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este é o exercício mais completo. Peça que reúnam tudo numa cena única e salvem com nome próprio. Verifique se há os três elementos pedidos e se a escala conversa com o personagem.`,
      atividade: `Monte uma cena final com pelo menos três elementos: um chão ou plataforma, um elemento de fundo (parede ou árvore) e um elemento repetido com copiar e colar. Posicione tudo de forma organizada e proporcional ao personagem, e salve o arquivo com seu nome.`,
      gabarito: `O cenário contém os três elementos exigidos, organizados no espaço e proporcionais ao personagem, com pelo menos uma repetição feita por copiar e colar. Resultado esperado: um arquivo .vox salvo com nome do aluno, mostrando uma cena legível e coerente com o estilo do jogo.`,
    },
  ],
};
