import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Modelagem Avançada: Polígonos sob Controle",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Modelar um objeto de cenário no Maya com topologia limpa, usando extrude, bevel, bridge e edge loops, controlando a contagem de polígonos para ter performance em jogo.`,
  descricao: `Nesta aula o aluno sai do modelo "bruto" e aprende a esculpir a forma com precisão usando as ferramentas de modelagem poligonal mais importantes do Maya. O foco não é fazer "bonito a qualquer custo", e sim fazer game-ready: um modelo leve, com geometria organizada, que roda bem dentro da Unreal Engine. Esse é o jeito profissional de trabalhar, e é exatamente o que diferencia um asset de estúdio de um modelo amador.

As quatro ferramentas-estrela do dia são o Extrude (puxar faces ou arestas para criar volume), o Bevel (chanfrar arestas vivas para que a luz "pegue" na quina e o objeto pareça real), o Bridge (criar uma ponte de faces ligando dois conjuntos de arestas) e os Edge Loops (anéis de arestas que percorrem o modelo e definem onde ele pode dobrar). Juntas, elas permitem construir praticamente qualquer objeto de cenário: uma caixa de madeira, um barril, uma lanterna, uma engrenagem.

O conceito que costura tudo é a topologia limpa: as faces precisam ser preferencialmente quadrângulos (quads), o fluxo das arestas deve seguir a forma do objeto e devemos evitar ngons (faces com cinco ou mais lados) e triângulos soltos em áreas que vão deformar. Ao mesmo tempo, o aluno fica de olho no contador de polígonos (poly count): em jogos, cada triângulo custa desempenho, então a regra é "detalhe onde o olho vê, simplicidade onde ninguém repara".

Para fechar, o aluno usa o Claude como revisor técnico: descreve a geometria que fez e pede uma checagem de boas práticas game-ready (quads, edge loops, poly count, ngons). É um treino de pensamento crítico — a inteligência artificial ajuda a enxergar problemas, mas a decisão final e a mão na ferramenta continuam sendo do aluno.`,
  materiais: [
    `Computadores com Autodesk Maya instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a interface do Maya em tempo real`,
    `Arquivo de exemplo .mb com um cubo básico e um cilindro básico já posicionados, para começar sem perder tempo`,
    `Arquivo de exemplo .mb com um asset game-ready finalizado (uma caixa chanfrada), para mostrar o resultado esperado`,
    `Imagem de referência projetada de um objeto simples de cenário (caixa de madeira, barril ou lanterna)`,
    `Acesso ao Claude (navegador) para revisão das boas práticas de geometria`,
    `Quadro branco para desenhar o fluxo de arestas e a diferença entre quad, triângulo e ngon`,
  ],
  conceitosChave: [
    `Polígono (face) — a menor superfície plana do modelo, formada por arestas que se fecham; o jogo desenha o objeto somando essas faces.`,
    `Quad — face de quatro lados; é a forma preferida em modelagem porque dobra e se subdivide de maneira previsível.`,
    `Ngon — face com cinco ou mais lados; deve ser evitada porque deforma mal e pode renderizar errado no jogo.`,
    `Extrude — ferramenta que puxa uma face ou aresta para fora (ou para dentro), criando volume novo a partir do que já existe.`,
    `Bevel — ferramenta que chanfra uma aresta viva, trocando a quina dura por uma ou mais faces que captam melhor a luz.`,
    `Edge Loop — anel contínuo de arestas que percorre o modelo; define onde a forma pode dobrar e ajuda a manter a topologia organizada.`,
    `Poly count — contagem de polígonos (triângulos) do modelo; quanto menor, melhor a performance em jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

A modelagem poligonal no Maya acontece em três modos de seleção: Vertex (pontos), Edge (arestas) e Face (faces). Você troca entre eles segurando o botão direito do mouse sobre o objeto e escolhendo no menu radial, ou usando as teclas de atalho com o objeto selecionado. As ferramentas de hoje vivem no menu Mesh Tools e no menu Edit Mesh (com o conjunto de menus Modeling ativo no canto superior esquerdo). Deixe o HUD do poly count ligado em Display > Heads Up Display > Poly Count para a turma ver os números mudando. Você não precisa ser um artista 3D experiente: precisa saber entrar em cada modo de seleção, achar Extrude, Bevel, Bridge e Insert Edge Loop, e repetir os passos com calma. A ideia central da aula: geometria game-ready é geometria limpa (quads), com arestas que seguem a forma e o menor número de polígonos que ainda represente bem o objeto.

## Passo a passo da aula

Aquecimento e revisão (10 min): projete o asset de exemplo finalizado e gire a câmera (Alt + botão esquerdo orbita). Pergunte: "por que essa caixa parece de verdade e não um cubo de papelão liso?". Mostre que as quinas têm um chanfro. Abra o Poly Count no HUD e diga o objetivo do dia: um objeto de cenário com poucos polígonos e topologia limpa.

Conteúdo novo guiado (15 min): com o conjunto de menus em Modeling, crie um cubo em Create > Polygon Primitives > Cube. Entre no modo Face (segure botão direito > Face). Selecione a face de cima e use Edit Mesh > Extrude; arraste a seta azul para puxar volume e crie um degrau. Mostre o Bevel: entre em modo Edge, selecione as arestas das quinas, use Edit Mesh > Bevel e ajuste Fraction e Segments na janela de opções. Demonstre o Bridge: apague duas faces opostas (modo Face, tecla Delete) e em Edit Mesh > Bridge ligue os dois buracos com uma ponte de faces. Por fim, o Insert Edge Loop: em Mesh Tools > Insert Edge Loop, clique numa aresta para adicionar um anel que controla onde o modelo dobra. A cada passo, mostre o Poly Count subindo.

Mão na massa (25 min): cada aluno modela um objeto simples de cenário (caixa, barril ou lanterna) a partir de um primitivo. Deve usar pelo menos Extrude e Bevel, manter as faces como quads sempre que possível e ficar de olho no poly count (meta: abaixo de 1500 triângulos). Circule pela sala conferindo se ninguém criou ngons gigantes. Lembre de salvar com Ctrl+S no formato .mb.

Desafio e compartilhar (10 min): cada aluno cola no Claude uma descrição da sua geometria e pede revisão game-ready. Um prompt pronto para projetar: "Modelei um barril no Maya com 980 triangulos, faces em quads e um bevel de 2 segmentos nas bordas. Revise se isso esta game-ready para Unreal e aponte 3 melhorias de topologia." Depois cada aluno mostra seu objeto girando no projetor em 20 segundos.

## Como explicar de forma clara

Use comparações físicas. Extrude é "puxar massinha": você agarra uma face e estica para fora, e nasce volume novo. Bevel é "lixar a quina": uma caixa de verdade nunca tem canto perfeitamente afiado, então a gente arredonda um pouquinho e a luz brilha ali. Bridge é "construir uma ponte" entre dois buracos. Edge Loop é "um cinto que dá a volta no objeto" e marca onde ele pode dobrar. Sobre quads versus ngons: um quad é como um azulejo quadrado, fácil de assentar; um ngon é um pedaço de papel rasgado de cinco pontas que ninguém sabe como dobrar. E sobre poly count, seja direto: o jogo desenha tudo várias vezes por segundo, então quanto mais triângulos, mais o computador sua. Detalhe onde o olho vê, simplifique onde ninguém repara.

## Erros comuns e como ajudar

Erro 1: o aluno fica preso no modo de seleção errado e não consegue extrudar; confirme se ele está em modo Face para extrudar faces. Erro 2: aperta Extrude várias vezes sem mover e cria faces sobrepostas (faces duplicadas no mesmo lugar); peça para desfazer com Ctrl+Z e extrudar uma vez só, depois arrastar. Erro 3: cria ngons ao apagar arestas no meio de uma face; mostre como fechar com quads ou usar Multi-Cut. Erro 4: o Bevel com Segments alto demais explode o poly count; ajuste Segments para 1 ou 2. Erro 5: esquece de olhar o HUD e passa de 1500 triângulos; aponte o Poly Count e peça para apagar loops desnecessários. Erro 6: tenta o Bridge sem ter o mesmo número de arestas dos dois lados e dá erro; confira que os dois buracos têm a mesma quantidade de lados.`,
  exercicios: [
    {
      titulo: `Extrude: do cubo ao degrau`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno crie o cubo e entre em modo Face antes de extrudar. Confira que ele arrastou a seta uma vez só, sem cliques repetidos de Extrude.`,
      atividade: `Crie um cubo em Create > Polygon Primitives > Cube. Entre em modo Face (botão direito > Face), selecione a face de cima e use Edit Mesh > Extrude. Arraste a seta azul para cima e crie um degrau com volume.`,
      gabarito: `O cubo passa a ter um bloco extra puxado da face de cima, formando um degrau. As faces continuam sendo quads e não há faces duplicadas. O Poly Count subiu de forma coerente (poucas faces novas). Se houver faces sobrepostas, o aluno apertou Extrude mais de uma vez sem mover.`,
    },
    {
      titulo: `Bevel: lixando as quinas`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre a janela de opções do Bevel. Reforce que Segments deve ficar em 1 ou 2 para não estourar o poly count. Confira o resultado girando a câmera para ver a luz na quina.`,
      atividade: `Entre em modo Edge, selecione as quatro arestas verticais do cubo e use Edit Mesh > Bevel. Na janela de opções, deixe Fraction por volta de 0.3 e Segments em 2. Aplique e gire a câmera para ver a luz nas quinas.`,
      gabarito: `As quinas vivas viraram chanfros suaves com 2 segmentos cada. Ao girar, aparece um brilho fino na borda. A topologia se mantém em quads ao redor do bevel. Se a aresta ficou "facetada demais" ou o poly count explodiu, o Segments estava alto demais.`,
    },
    {
      titulo: `Bridge e Edge Loop juntos`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Antes do Bridge, confira que os dois buracos têm o mesmo número de arestas. Depois do Bridge, mostre o Insert Edge Loop para reforçar a forma. Acompanhe o HUD do Poly Count.`,
      atividade: `Em modo Face, selecione duas faces opostas de um cubo e apague-as (Delete). Use Edit Mesh > Bridge para ligar os dois buracos com uma ponte de faces, criando um tubo. Depois use Mesh Tools > Insert Edge Loop e adicione um anel no meio do tubo.`,
      gabarito: `O cubo virou um tubo vazado, com a ponte de faces ligando os dois lados em quads. O edge loop central aparece como um anel contínuo no meio. Se o Bridge deu erro, os dois buracos tinham números diferentes de arestas e foi preciso igualar antes.`,
    },
    {
      titulo: `Objeto de cenário em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Um modela enquanto o outro vigia o Poly Count e aponta ngons; depois trocam. A meta é ficar abaixo de 1500 triângulos. Garanta o salvamento em .mb.`,
      atividade: `Em dupla, escolham um objeto simples (caixa de madeira, barril ou lanterna) e modelem a partir de um primitivo usando Extrude e Bevel. Um colega modela e o outro confere o Poly Count e procura ngons. Mantenham abaixo de 1500 triângulos e salvem o arquivo .mb.`,
      gabarito: `O objeto está reconhecível, com faces majoritariamente em quads, sem ngons em áreas importantes, quinas com bevel leve e poly count abaixo de 1500 triângulos. O arquivo foi salvo em .mb. A dupla deve saber dizer quantos triângulos o modelo tem (lendo o HUD).`,
    },
    {
      titulo: `Revisão game-ready com o Claude`,
      tipo: `revisão com IA`,
      tempo: `7 min`,
      guiaProfessor: `Projete um prompt-modelo e oriente o aluno a descrever a geometria de verdade (número de triângulos, tipo de faces, bevel). Discuta com a turma se as sugestões do Claude fazem sentido — a decisão final é do aluno.`,
      atividade: `Descreva ao Claude o objeto que você modelou e peça uma revisão de boas práticas game-ready. Use como base: "Modelei um barril no Maya com 980 triangulos, faces em quads e um bevel de 2 segmentos nas bordas. Revise se isso esta game-ready para Unreal e aponte 3 melhorias de topologia." Aplique no Maya pelo menos uma melhoria sugerida.`,
      gabarito: `Não há resposta única, mas a revisão deve tocar nos pilares corretos: predominância de quads, ausência de ngons em áreas de deformação, edge loops seguindo a forma, bevel discreto e poly count compatível com jogo. O aluno deve aplicar ao menos uma melhoria (por exemplo, remover um edge loop inútil ou converter um ngon em quads) e explicar por que isso deixa o asset mais game-ready.`,
    },
  ],
};
