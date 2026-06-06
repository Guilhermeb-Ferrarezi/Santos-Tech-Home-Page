import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Geometria que o Unity Entende",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Os alunos compreendem a anatomia da malha 3D (vértices, arestas e faces), descobrem por que faces de quatro lados são melhores para games e garantem que escala, rotação e origem estejam corretas antes de exportar para o Unity.`,
  descricao: `Na aula passada os alunos reencontraram o Blender e relembraram a interface. Hoje vamos abrir o "capô" do carro e entender do que um objeto 3D é realmente feito. Todo modelo, por mais complexo que pareça, é formado por três elementos simples: vértices (os pontos), arestas (as linhas que ligam os pontos) e faces (as superfícies fechadas entre as arestas). Entender essa anatomia é o que separa um aluno que só aperta botões de um aluno que de fato modela com intenção.

Um conceito central desta aula é a diferença entre quads e triângulos. Quad é uma face de quatro lados; triângulo é uma face de três lados. Artistas de games preferem modelar com quads porque eles deformam melhor em animação, ficam mais limpos para editar e se subdividem de forma previsível. Só que tem um detalhe importante: a placa de vídeo, no fim das contas, só desenha triângulos. Quando exportamos para o Unity, cada quad é dividido automaticamente em dois triângulos. Por isso a regra de ouro do bom topology é evitar n-gons (faces com cinco ou mais lados), que se dividem de forma imprevisível e causam sombreamento estranho dentro do jogo.

A segunda metade da aula trata de uma fonte silenciosa de problemas: transformações não aplicadas. Quando o aluno aumenta um cubo no modo objeto, o Blender pode guardar uma escala de, por exemplo, 2.0 no lugar de 1.0. No Blender parece tudo certo, mas ao chegar no Unity o objeto pode aparecer gigante, deitado ou girando em torno do ponto errado. Isso acontece por causa de três valores que viajam junto com o modelo: a escala, a rotação e a origem (o pontinho laranja que marca o "centro" do objeto). O aluno aprende a conferir esses valores no painel lateral (tecla N) e a aplicar as transformações com o menu Object, Apply.

Por fim, cada aluno define o conceito do asset que vai modelar durante todo o mês. Pode ser um baú de tesouro, um poço, um totem, um caixote, um cogumelo gigante ou qualquer prop simples de cenário. A escolha precisa ser realista para baixa poligonagem e ter formas que se resolvem com quads. Definir cedo o objetivo dá o foco que as próximas aulas vão usar para construir, texturizar e exportar. O Claude pode ser usado como assistente para validar a ideia, sugerir referências e listar as formas-base necessárias.`,
  materiais: [
    `Computadores com o Blender (versão 4.x) instalado, um por aluno, com um arquivo novo aberto.`,
    `Projetor ou TV grande ligada ao computador do professor para demonstrar cada atalho e cada painel.`,
    `Arquivo de exemplo bau-exemplo.blend com um modelo simples já feito em quads, para mostrar topologia limpa.`,
    `Arquivo de exemplo problema-escala.blend com um objeto que tem escala 2.0 e rotação não aplicadas, para o exercício de diagnóstico.`,
    `Imagens de referência de props de games em baixa poligonagem (baú, totem, caixote, cogumelo) projetadas ou impressas.`,
    `Folha de planejamento do asset (uma por aluno) para anotar o conceito escolhido e as formas-base.`,
    `Acesso ao Claude como assistente para validar a ideia do asset e sugerir referências.`,
  ],
  conceitosChave: [
    `Vértice — é um ponto no espaço 3D; é a menor parte de um modelo, como o cantinho de uma caixa.`,
    `Aresta — é a linha reta que liga dois vértices, como a beirada de uma mesa.`,
    `Face — é a superfície fechada entre arestas; é a "parede" que você de fato enxerga no objeto.`,
    `Quad — é uma face de quatro lados; é a preferida para modelar games porque deforma e se subdivide bem.`,
    `Triângulo — é uma face de três lados; é o que a placa de vídeo realmente desenha na tela.`,
    `N-gon — é uma face de cinco lados ou mais; deve ser evitada porque causa sombreamento e exportação imprevisíveis.`,
    `Origem — é o ponto laranja que marca o centro do objeto; é a partir dele que o Unity calcula posição, rotação e escala.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender para dar esta aula. Domine apenas três ideias e quatro atalhos. As ideias: (1) todo modelo é feito de vértices, arestas e faces; (2) quads são melhores para modelar, mas o Unity converte tudo em triângulos; (3) escala, rotação e origem precisam estar corretas antes de exportar. Os atalhos: Tab alterna entre o Modo Objeto e o Modo de Edição; as teclas 1, 2 e 3 (no Modo de Edição) selecionam vértice, aresta e face; a tecla N abre o painel lateral onde você lê os valores de transformação; e Ctrl+A abre o menu Apply para aplicar essas transformações.

Pratique uma vez antes da aula: crie um cubo, entre no Modo de Edição com Tab e clique nos botões de seleção para ver pontos, linhas e superfícies acendendo. Depois, no Modo Objeto, aumente o cubo, abra o painel N e veja o número da escala mudar. Isso é tudo que você precisa ter feito com as próprias mãos.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): abra o arquivo bau-exemplo.blend no projetor. Pergunte: "Do que você acha que isso aqui é feito por dentro?" Entre no Modo de Edição com Tab e mostre os pontos, as linhas e as superfícies. Apresente as três palavras: vértice, aresta, face. Deixe a turma repetir em voz alta.

Conteúdo novo guiado (15 min): no seu computador, com o projetor ligado, crie um cubo novo (menu Add, Mesh, Cube). Aperte Tab para entrar no Modo de Edição. Aperte a tecla 1 e diga "modo vértice"; aperte 2 e diga "modo aresta"; aperte 3 e diga "modo face". Agora ensine quad e triângulo: selecione uma face e mostre que ela tem quatro lados (um quad). Ative a contagem de triângulos pelo menu Overlays (a setinha ao lado dos círculos no topo da janela 3D) marcando Statistics, e mostre que o cubo de 6 quads vira 12 triângulos no Unity. Por fim, volte ao Modo Objeto com Tab, aumente o cubo arrastando, abra o painel lateral com a tecla N e mostre a escala marcando algo diferente de 1.0. Aplique com Ctrl+A, depois Scale, e mostre a escala voltando para 1.0 sem o objeto mudar de tamanho.

Mão na massa (25 min): cada aluno cria três objetos simples (Add, Mesh): um cubo, um cilindro e um cone. Para cada um, deve entrar no Modo de Edição e identificar vértices, arestas e faces usando 1, 2 e 3. Depois, no Modo Objeto, cada aluno aumenta cada objeto, confere a escala no painel N e aplica com Ctrl+A, Scale, deixando todos com escala 1.0. Passe de mesa em mesa conferindo.

Desafio e compartilhar (10 min): cada aluno define o conceito do asset do mês na folha de planejamento (o que vai modelar e de quais formas-base parte). Quem quiser pode pedir ao Claude para validar a ideia. Depois, cada um mostra o conceito para a turma em uma frase: "Vou modelar um ___ usando ___ como formas-base."

## Como explicar de forma clara (linguagem para a idade)

Use a analogia da casa de palitos. Os vértices são as pontinhas de cola; as arestas são os palitos; as faces são os papéis que você cola para fechar as paredes. Para quad e triângulo, diga: "O quad é uma janela quadrada, fácil de mexer; o triângulo é a fatia de pizza. Você desenha com janelas, mas a placa de vídeo só sabe ler fatias, então ela corta cada janela em duas fatias na hora de mostrar." Para a escala não aplicada, use a ideia da etiqueta escondida: "O objeto parece do tamanho certo, mas ele carrega uma etiqueta secreta dizendo dobro do tamanho. O Unity lê a etiqueta e estraga tudo. Aplicar é arrancar a etiqueta sem mudar o objeto."

## Erros comuns e como ajudar

Aluno preso no Modo de Edição sem perceber: lembre que Tab alterna os modos; basta apertar Tab de novo. Aluno não consegue selecionar faces: confira se ele apertou a tecla 3 e se está com o cursor dentro da janela 3D. Aluno aplica escala e o objeto "encolhe ou cresce de repente": na verdade não mudou de tamanho; o que mudou foi só o número. Tranquilize. Aluno escolhe um asset complexo demais (um personagem inteiro): redirecione para um prop simples de cenário que se resolve com poucas formas. Aluno cria n-gons sem querer ao apagar arestas: por enquanto só aponte e diga que vamos resolver isso na aula de baixa poligonagem.`,
  exercicios: [
    {
      titulo: `Anatomia do Cubo`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto, no projetor, devagar. Diga cada atalho em voz alta e espere todos acompanharem. Circule conferindo que cada aluno entrou no Modo de Edição e conseguiu alternar entre os três modos de seleção.`,
      atividade: `Crie um cubo (Add, Mesh, Cube), aperte Tab para entrar no Modo de Edição e use as teclas 1, 2 e 3 para mostrar vértices, arestas e faces. Anote no caderno: quantos vértices, quantas arestas e quantas faces o cubo tem.`,
      gabarito: `O cubo tem 8 vértices, 12 arestas e 6 faces. Acertou quem conseguiu alternar com 1, 2 e 3 e anotou os três números corretos. Cada face do cubo é um quad (quatro lados).`,
    },
    {
      titulo: `Quad ou Triângulo?`,
      tipo: `Roda de conversa / classificação`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor várias faces: uma de quatro lados, uma de três lados e uma de cinco lados (n-gon). Pergunte à turma o nome de cada uma. Reforce por que quads são preferidos e que o Unity converte tudo em triângulos.`,
      atividade: `Para cada face que o professor mostrar, diga em voz alta se é um quad, um triângulo ou um n-gon. Depois responda: por que artistas de games preferem modelar com quads e o que a placa de vídeo realmente desenha?`,
      gabarito: `Face de quatro lados é quad; de três lados é triângulo; de cinco ou mais lados é n-gon. Artistas preferem quads porque deformam e se subdividem melhor e são mais limpos de editar. A placa de vídeo desenha somente triângulos, por isso cada quad vira dois triângulos no Unity.`,
    },
    {
      titulo: `Três Formas, Escala 1.0`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Demonstre uma vez: aumentar o objeto, abrir o painel com a tecla N, ler a escala diferente de 1.0 e aplicar com Ctrl+A, Scale. Reforce que ao aplicar o objeto NÃO muda de tamanho; só o número volta para 1.0. Ajude mesa por mesa.`,
      atividade: `Crie um cubo, um cilindro e um cone (Add, Mesh). Aumente cada um arrastando. Abra o painel lateral com a tecla N, confira que a escala ficou diferente de 1.0 e aplique a escala com Ctrl+A, depois Scale. Confira que os três terminam com escala 1.000 em X, Y e Z.`,
      gabarito: `Sucesso quando os três objetos mostram, no painel N, Scale X = 1.000, Y = 1.000 e Z = 1.000, mesmo continuando maiores na tela. Isso prova que a transformação foi aplicada e que o asset chegará ao Unity com o tamanho correto.`,
    },
    {
      titulo: `Detetive da Transformação`,
      tipo: `Diagnóstico / resolução de problema`,
      tempo: `12 minutos`,
      guiaProfessor: `Abra o arquivo problema-escala.blend, que tem um objeto com escala 2.0 e uma rotação não aplicada. Peça que os alunos descubram, sozinhos, o que está errado usando o painel N. Só depois mostre a correção. Conecte com o Unity: explique que esse erro faria o objeto aparecer torto e gigante no jogo.`,
      atividade: `Abra o arquivo problema-escala.blend. Use a tecla N para investigar e responda: a escala está em 1.0? A rotação está em zero? Em seguida, conserte aplicando escala e rotação com Ctrl+A (escolhendo Scale e depois Rotation). Confirme no painel N que tudo voltou ao normal.`,
      gabarito: `O diagnóstico correto: a escala estava em 2.0 (deveria ser 1.0) e a rotação estava diferente de zero. A correção é aplicar com Ctrl+A, Scale e depois Ctrl+A, Rotation (ou Ctrl+A, All Transforms). Ao final, o painel N deve mostrar Scale 1.000 em X, Y, Z e Rotation 0 em X, Y, Z.`,
    },
    {
      titulo: `Desafio: Conceito do Meu Asset`,
      tipo: `Desafio / planejamento`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha o desafio e deixe cada aluno decidir com pouca ajuda, só orientando para que o asset seja simples e modelável com quads. Quem quiser pode pedir ao Claude para validar a ideia e sugerir referências. Termine com a roda: cada um apresenta o conceito em uma frase.`,
      atividade: `Na folha de planejamento, defina o asset que você vai modelar durante todo o mês (por exemplo: baú, totem, caixote, cogumelo gigante, poço). Liste as formas-base de onde ele parte (cubo, cilindro, cone) e escreva por que ele combina com baixa poligonagem. Apresente em uma frase: "Vou modelar um ___ usando ___ como formas-base."`,
      gabarito: `Resposta válida quando o aluno escolhe um prop simples de cenário (não um personagem complexo), lista pelo menos duas formas-base coerentes (por exemplo, um baú = cubo para a base mais um meio-cilindro para a tampa) e justifica a escolha pensando em poucas faces e quads. Não existe asset "errado" desde que seja simples, modelável com quads e o aluno consiga explicar suas formas-base.`,
    },
  ],
};
