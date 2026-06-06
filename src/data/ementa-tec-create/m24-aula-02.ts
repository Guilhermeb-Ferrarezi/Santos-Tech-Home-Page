import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Modelando Melhorias no Maya",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Modelar na prática os assets extras planejados na aula anterior, usando ferramentas de polígonos, extrude e escala no Maya, mantendo a malha limpa e na escala certa para encaixar no jogo do Roblox já existente.`,
  descricao: `Na Aula 1 o aluno planejou no papel e em referências quais "extras" o jogo ainda precisa para o Demo Day: aquele baú que faltava, uma plataforma nova, um troféu, uma placa de decoração ou um item que o personagem coleta. Agora chega a hora mais empolgante do mês: dar vida a esses desenhos dentro do Maya. Esta é uma aula de mão na massa pura, em que cada aluno transforma um plano simples em um objeto 3D de verdade, usando três ferramentas que ele já viu antes mas que agora vai dominar de vez: criar polígonos, fazer extrude (puxar faces para fora) e escalar (mudar o tamanho).

A ideia central é construir a partir de formas básicas. Quase tudo no mundo dos jogos começa como um cubo, um cilindro ou um plano. O aluno parte de uma primitiva (uma forma pronta do Maya), seleciona faces, arestas ou vértices e vai puxando, empurrando e redimensionando até a forma planejada aparecer. O segredo não é fazer algo super detalhado, e sim algo limpo: poucos polígonos, bem organizados, sem faces escondidas nem buracos. Uma malha limpa importa muito porque, daqui a poucas aulas, esse modelo vai ser exportado e importado no Roblox. Se a malha estiver bagunçada, ela trava, fica esquisita ou pesa demais dentro do jogo.

Outro ponto que merece atenção é a escala. O asset não vive sozinho: ele vai morar dentro de um cenário do Roblox que já existe, perto do personagem, das plataformas e das paredes que a turma construiu nos meses anteriores. Por isso o aluno precisa modelar pensando no tamanho real: um baú não pode ser maior que o personagem, uma plataforma precisa caber no salto do boneco. Trabalhar na escala correta agora evita a dor de cabeça de chegar no Roblox e descobrir que o item ficou gigante ou minúsculo.

Ao final desta aula, cada aluno terá pelo menos um asset extra modelado, com a forma reconhecível, a malha limpa e o tamanho coerente com o jogo. Nas próximas aulas a turma vai dar textura e material a esses modelos (Aula 3) e depois exportá-los (Aula 4). Hoje o foco é só a geometria: construir bem a forma. Nada de cores, nada de exportar ainda.`,
  materiais: [
    `Computadores (1 por aluno) com o Autodesk Maya instalado e aberto, e o esboço/plano do asset feito na Aula 1 à mão ou em arquivo`,
    `Projetor ou TV para o professor espelhar a própria tela do Maya durante a explicação guiada`,
    `Arquivo de exemplo Maya (.mb ou .ma) com um cubo já transformado em baú simples, para o professor mostrar o "antes e depois"`,
    `Imagem ou print do jogo do Roblox da turma, mostrando o personagem ao lado de objetos existentes, para servir de referência de escala`,
    `Folha impressa de "checklist de malha limpa" (sem faces duplicadas, sem buracos, escala coerente, histórico apagado)`,
    `Mouse com três botões (essencial no Maya) e, de preferência, teclado com as teclas Q, W, E, R livres para os alunos usarem os atalhos`,
    `Slide com a imagem das primitivas do Maya (cubo, cilindro, esfera, plano) e os ícones das ferramentas Move, Scale e Extrude`,
  ],
  conceitosChave: [
    `Polígono — é a face plana, geralmente um quadrado de quatro lados, que forma a "pele" de todo modelo 3D; muitos polígonos juntos formam a malha.`,
    `Primitiva — é uma forma básica já pronta do Maya (cubo, cilindro, esfera, plano) usada como ponto de partida para construir qualquer objeto.`,
    `Extrude — é a ferramenta que "puxa" uma face, aresta ou vértice para fora ou para dentro, criando volume novo a partir de algo que já existe.`,
    `Componentes (vértice, aresta, face) — são as três partes editáveis da malha: o ponto (vértice), a linha (aresta) e o quadrado (face); selecionar a parte certa é metade do trabalho.`,
    `Escala — é o tamanho do modelo; ajustar a escala faz o asset caber junto ao personagem e ao cenário que já existem no Roblox.`,
    `Malha limpa — é a geometria bem organizada, sem faces duplicadas, sem buracos e sem polígonos perdidos; é o que garante que o modelo funcione bem no jogo.`,
    `Histórico (history) — é a lista de tudo que o Maya guardou das suas ações; apagar o histórico no fim deixa o arquivo leve e evita erros na exportação.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um modelador profissional para dar esta aula: precisa dominar quatro coisas no Maya e saber explicá-las. Primeiro, as teclas de transformação, que valem ouro: Q seleciona, W move (Move), E gira (Rotate) e R escala (Scale). Segundo, como criar uma primitiva: menu superior "Create" depois "Polygon Primitives" e escolher Cube, Cylinder, Sphere ou Plane. Terceiro, como entrar no modo de componentes: clique com o botão direito SEGURANDO em cima do modelo e aparece um menu radial onde você escolhe Vertex (ponto), Edge (linha) ou Face (quadrado); para voltar ao objeto inteiro, botão direito e "Object Mode". Quarto, o Extrude: selecione faces e use o menu "Edit Mesh" depois "Extrude" (ou Shift+botão direito depois Extrude). Antes da aula, abra o Maya e faça você mesmo um baú a partir de um cubo uma vez, para ganhar confiança. Tenha o atalho de apagar histórico na ponta da língua: menu "Edit" depois "Delete by Type" depois "History" (Alt+Shift+D).

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min). Abra o Maya no projetor e mostre o print do jogo do Roblox da turma. Pergunte: "Qual extra cada um planejou na aula passada?" Relembre as teclas Q, W, E, R fazendo um cubo aparecer (Create depois Polygon Primitives depois Cube) e movendo, girando e escalando ele na frente de todos. Peça que cada aluno abra o Maya e crie seu próprio cubo de partida.

2. Conteúdo novo guiado (15 min). Construa um baú simples ao vivo. Crie um cubo, ache-o achatado com a tecla R (Scale) puxando só no eixo da altura. Entre no modo Face (botão direito segurando depois Face), selecione a face de cima e mostre o Extrude (Edit Mesh depois Extrude): puxe a tampa para cima. Mostre como puxar pelas setas e como digitar valores. Repita devagar, narrando cada clique. Reforce: "olhe sempre se não criou faces escondidas ao clicar Extrude duas vezes sem mover".

3. Mão na massa (25 min). Cada aluno modela o próprio asset extra a partir de uma primitiva. A meta mínima: uma forma reconhecível com pelo menos um Extrude e a escala ajustada ao tamanho do personagem. Circule pela sala. Mostre o painel Channel Box (lado direito) para conferir os valores de Scale. Lembre todos de salvar (Ctrl+S) com nome claro, por exemplo "bau_extra".

4. Desafio + compartilhar (10 min). Lance o desafio "menos é mais": quem fizer a forma com o menor número de polígonos mantendo-a reconhecível. Cada aluno gira o próprio modelo na tela e conta o que construiu. Antes de fechar, todos apagam o histórico (Edit depois Delete by Type depois History) e salvam de novo.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de massinha e blocos de montar: "Todo modelo começa como um bloco simples; a gente vai puxando e apertando até virar o que queremos." Chame o Extrude de "puxar a massinha": você escolhe um lado e estica. Para a escala, use o jogo como régua: "Coloque seu item do lado do personagem na sua cabeça: o baú chega na cintura dele? Então o tamanho está bom." Para malha limpa, compare com um quarto arrumado: "Faces escondidas e buracos são como roupa jogada no chão; quando for guardar (exportar), tudo trava." Evite palavras difíceis: fale "ponto, linha e quadrado" antes de "vértice, aresta e face".

## Erros comuns e como ajudar

- Clicar Extrude várias vezes sem mover e criar faces grudadas e invisíveis: ensine a apertar Z (desfazer) e a dar um Extrude por vez, sempre arrastando.
- Escalar o objeto inteiro quando queria mover só uma face: lembre de entrar no modo Face (botão direito segurando depois Face) antes de usar a ferramenta.
- Modelar gigante ou minúsculo sem referência: peça para criar um cubo do tamanho aproximado do personagem ao lado, como régua viva.
- Esquecer de apagar o histórico e deixar o arquivo pesado: faça disso um ritual de fim de aula (Edit depois Delete by Type depois History).
- Perder o trabalho por não salvar: combine salvar a cada conquista (Ctrl+S) com nome claro, nunca "sem título".`,
  exercicios: [
    {
      titulo: `Nasce um cubo`,
      tipo: `Prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que todos saibam o caminho Create depois Polygon Primitives depois Cube. Reforce as teclas Q, W, E, R no projetor. Confira aluno a aluno se o cubo apareceu na cena e se eles conseguem movê-lo com W.`,
      atividade: `No Maya, crie um cubo pelo menu Create depois Polygon Primitives depois Cube. Em seguida, use a tecla W para mover o cubo, a tecla R para mudar o tamanho dele e a tecla E para girá-lo. Deixe o cubo no centro da cena.`,
      gabarito: `Um cubo aparece na cena e o aluno consegue movê-lo, escalá-lo e girá-lo usando W, R e E. Acerto: existe um cubo visível, posicionado no centro, e o aluno demonstra trocar entre as três ferramentas pelos atalhos.`,
    },
    {
      titulo: `Puxa a massinha (primeiro extrude)`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre como entrar no modo Face (botão direito segurando depois Face) e selecionar a face de cima. Demonstre Edit Mesh depois Extrude e puxar para cima. Avise para dar um Extrude por vez, sempre arrastando, para não criar faces escondidas.`,
      atividade: `Com seu cubo selecionado, entre no modo Face (botão direito segurando depois Face), clique na face de cima e use Edit Mesh depois Extrude para puxá-la para cima, criando uma torre. Volte ao Object Mode quando terminar.`,
      gabarito: `O cubo ganha altura nova vinda de um Extrude na face de cima, formando uma torre, sem faces duplicadas grudadas. Acerto: a forma tem volume novo claramente puxado para cima e o aluno voltou ao modo objeto sem polígonos perdidos.`,
    },
    {
      titulo: `Tamanho certo para o jogo`,
      tipo: `Desafio`,
      tempo: `9 min`,
      guiaProfessor: `Use o print do Roblox da turma como referência. Peça que criem um cubo do tamanho aproximado do personagem para servir de régua ao lado do asset. Mostre o Channel Box (direita) para conferir os valores de Scale. O alvo é coerência visual, não um número exato.`,
      atividade: `Crie um cubo simples para representar a altura do personagem do jogo. Coloque seu asset ao lado desse cubo-régua e use a tecla R (Scale) para ajustar o tamanho do seu asset de modo que ele fique coerente com o personagem (por exemplo, um baú na altura da cintura). Confira os valores no Channel Box.`,
      gabarito: `O asset fica numa proporção que faz sentido perto do cubo-régua do personagem, nem gigante nem minúsculo. Acerto: ao olhar os dois lado a lado, o tamanho do asset combina com o papel dele no jogo (ex.: baú até a cintura), e os valores de Scale aparecem ajustados no Channel Box.`,
    },
    {
      titulo: `Dupla de revisão da malha`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas e entregue o checklist de malha limpa. Ensine a girar a câmera (Alt + botão esquerdo) para olhar o modelo por todos os lados e procurar buracos ou faces escondidas. Incentive feedback gentil entre os colegas. Lembre de apagar histórico no fim.`,
      atividade: `Em dupla, troquem de cadeira e revisem o modelo do colega. Girem a câmera (Alt + botão esquerdo) para ver o asset por todos os lados e usem o checklist: tem buraco? tem face escondida? a escala está coerente? Anotem um ponto bom e uma sugestão para o colega melhorar.`,
      gabarito: `Cada dupla identifica pelo menos um acerto e uma melhoria possível usando o checklist, e o modelo é girado por todos os ângulos. Acerto: os dois alunos apontam de forma concreta se há buracos ou faces escondidas e confirmam se a escala está coerente, registrando um elogio e uma sugestão.`,
    },
    {
      titulo: `Estúdio do asset extra`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Esta é a tarefa que junta tudo: primitiva, Extrude, escala e malha limpa no asset que o aluno planejou na Aula 1. Circule conferindo o checklist. No fim, todos apagam o histórico (Edit depois Delete by Type depois History) e salvam com nome claro (Ctrl+S). Serve de fechamento e prepara a Aula 3 (texturas e materiais).`,
      atividade: `Modele o asset extra que você planejou na Aula 1, partindo de uma primitiva. Use pelo menos um Extrude para criar a forma, ajuste a escala para combinar com o personagem do jogo e confira o checklist de malha limpa. No fim, apague o histórico (Edit depois Delete by Type depois History) e salve com um nome claro usando Ctrl+S.`,
      gabarito: `O aluno entrega um asset reconhecível, feito a partir de uma primitiva com pelo menos um Extrude, com escala coerente ao jogo, malha limpa (sem buracos nem faces escondidas), histórico apagado e arquivo salvo com nome claro. Acerto: todos os itens do checklist marcados e o arquivo salvo (ex.: "bau_extra") pronto para receber textura na Aula 3.`,
    },
  ],
};
