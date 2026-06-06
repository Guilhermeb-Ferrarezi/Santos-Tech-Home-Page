import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Esculpindo com Extrude",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Usar a ferramenta Extrude no Maya para puxar faces de um cubo e começar a esculpir o volume do modelo do mês.`,
  descricao: `Até agora os alunos aprenderam a navegar pela câmera, montar a cena e usar formas primitivas como o cubo, a esfera e o cilindro. Nesta aula damos o passo mais empolgante da modelagem 3D: deixar de apenas posicionar formas prontas e começar a esculpir formas novas a partir delas. A estrela do dia é a ferramenta Extrude, que significa "extrudar" ou "puxar para fora". Com ela, o aluno seleciona uma face do cubo e a estica, criando um braço, uma perna, um chifre, uma orelha ou qualquer saliência que a imaginação pedir.

A ideia central é simples e poderosa: todo modelo complexo começa como uma forma boba e quadrada. Um boneco, um bichinho ou um item de jogo nasce de um cubo. O segredo é saber quais faces puxar, para que lado e o quanto. Quando o aluno entende que pode subdividir uma face, selecioná-la e extrudá-la, ele percebe que o cubo é como um bloco de massinha digital: dá para esticar, achatar e moldar sem limites.

Nesta aula o professor apresenta o modo de seleção por componentes (vértices, arestas e faces), mostra o atalho para alternar entre eles e ensina o fluxo de trabalho do Extrude: selecionar a face, acionar a ferramenta e arrastar a alça (o manipulador colorido) para fora. Também trabalhamos a noção de simetria, porque a maioria das criaturas tem dois braços e duas pernas iguais, e ninguém quer modelar tudo duas vezes.

O grande objetivo prático é que cada aluno comece o esboço do seu modelo do mês, partindo de um único cubo. Não precisa ficar bonito ainda. Precisa ter volume, ter braços e pernas saindo do corpo. É o esqueleto do projeto que será refinado, proporcionado e detalhado nas próximas aulas, até virar um modelo pronto para a impressão 3D.`,
  materiais: [
    `Computadores com o Maya instalado e já aberto em uma cena nova (File > New Scene)`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Arquivo de exemplo "boneco-base.mb" com um cubo já transformado em personagem simples (braços e pernas extrudados)`,
    `Imagem de referência impressa ou no projetor de um personagem simples de games (ex.: um boneco estilo voxel)`,
    `Mouse com botão de rolagem (scroll) para cada aluno, pois facilita muito a navegação e o uso das alças`,
    `Folha de papel e lápis para o aluno rabiscar antes qual será a forma do seu personagem`,
  ],
  conceitosChave: [
    `Extrude (Extrudar) — ferramenta que puxa uma face selecionada para fora ou para dentro, criando volume novo a partir da forma existente.`,
    `Componente — cada peça que forma um objeto 3D; os três tipos são vértice (ponto), aresta (linha) e face (superfície).`,
    `Face — a superfície plana de um objeto, como cada lado de um cubo; é a parte que mais usamos para extrudar.`,
    `Aresta (Edge) — a linha que liga dois vértices e marca a borda entre duas faces; serve para moldar e mover bordas.`,
    `Manipulador (alça) — as setas e quadrados coloridos que aparecem ao usar uma ferramenta; arrastar uma alça move só naquele eixo (vermelho X, verde Y, azul Z).`,
    `Topologia — o jeito como as faces e arestas estão organizadas no modelo; uma boa topologia deixa o modelo limpo e fácil de imprimir.`,
    `Simetria — quando os dois lados do modelo são iguais, como os dois braços de um boneco; ajuda a modelar mais rápido e com aparência equilibrada.`,
  ],
  treinamento: `## O que o professor precisa saber

A ferramenta Extrude vive no menu Edit Mesh, na divisão de menus chamada "Modeling" (canto superior esquerdo, no Status Line, troque a caixa de menus para "Modeling"). O caminho completo é Edit Mesh > Extrude. O atalho mais usado é segurar a barra de espaço para abrir o menu radial ou usar o Modeling Toolkit (ícone à direita). Antes de extrudar, o aluno precisa estar no modo de seleção de faces. Para alternar entre objeto e componentes, clique com o botão direito segurando sobre o modelo e escolha "Face", "Edge" ou "Vertex" no menu que aparece em volta do cursor. O atalho rápido é a tecla F8 para entrar e sair do modo de componentes; as teclas F9 (vértice), F10 (aresta) e F11 (face) trocam o tipo. Decore F11 igual a face, é o que mais vamos usar hoje. Importante: para o Extrude funcionar bem e dar volume de verdade, o aluno deve arrastar a alça e não digitar zero; se a face não se mover, nada acontece.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 3. Peça que cada aluno crie um cubo (Create > Polygon Primitives > Cube) e mova-o com a tecla W. Pergunte: "Como faço um braço sair desse cubo?" Deixe o suspense no ar e diga que hoje aprenderemos isso.

Conteúdo novo guiado (15 min): no projetor, crie um cubo. Aperte F11 para entrar no modo de faces. Clique numa face lateral (ela fica laranja). Vá em Edit Mesh > Extrude. Mostre o manipulador que apareceu e arraste a seta azul ou vermelha para fora: nasce um braço. Repita do outro lado. Mostre que ao extrudar de novo a mesma ponta, dá para criar a mão. Explique os eixos coloridos enquanto arrasta.

Mão na massa (25 min): cada aluno parte de um cubo e extruda quatro saliências (dois braços, duas pernas) e uma para a cabeça, se quiser. Circule pela sala. Garanta que todos estejam em F11 antes de extrudar. Incentive a usar W (mover), E (girar) e R (escalar) para ajustar cada extrusão. Salve com Ctrl+S.

Desafio e compartilhar (10 min): peça que adicionem um detalhe extra (um chifre, um rabo, uma orelha) com mais uma extrusão. Cada aluno mostra o esboço na tela grande e diz que personagem está nascendo.

## Como explicar de forma clara

Use a metáfora da massinha digital: "O cubo é um bloco de massa. O Extrude é o seu dedo puxando a massa para fora." Para os eixos, diga: "Vermelho, verde e azul são as três direções do mundo. Cada seta puxa só para um lado, então você nunca se perde." Para o modo de faces, diga: "F11 é a tecla mágica que faz o Maya entender que você quer mexer numa parede do cubo, não no cubo inteiro." Sempre mostre antes de mandar fazer, e nomeie cada clique em voz alta.

## Erros comuns e como ajudar

O erro número um é tentar extrudar sem estar no modo de faces; o aluno clica em Extrude e o objeto inteiro se duplica ou nada acontece. Solução: aperte F11 e clique na face primeiro. O segundo erro é arrastar a alça errada e o braço sair torto ou para dentro; ensine a desfazer com Ctrl+Z e tentar de novo com calma. O terceiro é extrudar várias vezes sem querer (cliques repetidos) e criar faces grudadas que viram bagunça; mostre o contador de undo e o painel Outliner. O quarto é esquecer de salvar; crie o hábito de Ctrl+S a cada conquista. Por fim, alguns puxam a face para dentro do corpo: lembre que para fora cria volume, para dentro cria buraco.`,
  exercicios: [
    {
      titulo: `Primeiro braço com Extrude`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha um cubo novo na cena e esteja no modo de faces (F11) antes de começar. Verifique aluno por aluno se a face fica laranja ao ser clicada.`,
      atividade: `Crie um cubo, aperte F11, clique numa face lateral e use Edit Mesh > Extrude para puxar um braço para fora arrastando a seta colorida do manipulador.`,
      gabarito: `O cubo deve ter uma saliência nova saindo de um dos lados, formada por uma face extrudada e arrastada para fora. O aluno consegue nomear que usou F11 (faces) e Edit Mesh > Extrude.`,
    },
    {
      titulo: `Quatro membros no boneco`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Incentive o uso dos eixos certos: braços nas faces laterais (eixo vermelho X) e pernas na face de baixo (eixo verde Y). Lembre de desfazer com Ctrl+Z se a extrusão sair torta.`,
      atividade: `A partir do cubo, extrude dois braços e duas pernas, ajustando cada um com mover (W) e escalar (R) para que fiquem com tamanho parecido.`,
      gabarito: `O modelo tem quatro saliências saindo do corpo central, duas como braços e duas como pernas, com tamanhos semelhantes. Cada membro veio de uma face extrudada.`,
    },
    {
      titulo: `Conferindo o trabalho do colega`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas e peça que troquem de cadeira. Oriente os alunos a apontarem o que está bom e a sugerirem uma melhoria, sempre com respeito. Circule ouvindo as conversas.`,
      atividade: `Olhe o modelo do seu colega, gire a câmera para ver todos os lados e diga uma coisa que ficou legal e uma face que ainda poderia ser extrudada para melhorar o boneco.`,
      gabarito: `Cada dupla aponta pelo menos um ponto positivo e uma sugestão concreta de nova extrusão (ex.: "falta uma cabeça", "o braço poderia ser mais comprido"). O colega entende a sugestão e sabe qual face usar.`,
    },
    {
      titulo: `Roda do personagem`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda. Pergunte que personagem cada um está criando e por que escolheu aquela forma. Conecte as respostas com a ferramenta Extrude e com o entregável do mês.`,
      atividade: `Conte para a turma que personagem o seu cubo está virando e explique quais faces você extrudou para chegar nessa forma.`,
      gabarito: `O aluno descreve a ideia do personagem (ex.: robô, bichinho, herói) e relaciona pelo menos duas extrusões feitas com partes do corpo (braço, perna, cabeça ou detalhe).`,
    },
    {
      titulo: `Esboço do modelo do mês`,
      tipo: `projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o início oficial do entregável do mês. Reforce que o esboço não precisa estar bonito, mas precisa ter volume e membros claros. Garanta que todos salvem o arquivo com Ctrl+S e um nome próprio.`,
      atividade: `Partindo de um cubo, monte o esboço do seu modelo do mês com pelo menos cinco extrusões (corpo, dois braços, duas pernas) e um detalhe extra, depois salve o arquivo com o seu nome.`,
      gabarito: `O arquivo salvo contém um modelo iniciado a partir de um cubo, com corpo central e ao menos cinco saliências extrudadas mais um detalhe (chifre, rabo, orelha ou cabeça). O aluno consegue reabrir o arquivo salvo.`,
    },
  ],
};
