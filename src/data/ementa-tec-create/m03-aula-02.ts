import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Dominando a Câmera e a Cena",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Dominar o controle de câmera no Maya para orbitar, dar zoom e mover a visão com naturalidade, usando as views e organizando objetos em uma cena.`,
  descricao: `Nesta aula o aluno deixa de olhar o espaço 3D como uma imagem parada e passa a navegar dentro dele com confiança. A câmera é a "câmera invisível" pela qual enxergamos a cena: aprender a girá-la, aproximá-la e deslizá-la é o primeiro superpoder de quem modela em 3D. Sem esse controle, qualquer objeto vira um quebra-cabeça difícil de entender; com ele, o aluno passa a "andar ao redor" do modelo como se segurasse uma miniatura na mão.

O coração desta prática são os três movimentos de câmera do Maya, todos feitos com a tecla Alt segurada junto do mouse: orbitar (girar em volta), dar zoom (chegar perto ou se afastar) e fazer pan (deslizar a visão para os lados). Esses três gestos, combinados, permitem olhar qualquer parte da cena de qualquer ângulo. Eles serão usados em todas as aulas seguintes, então vale a pena praticá-los até virarem automáticos.

Além de mexer a câmera livre (a view de perspectiva), o aluno conhece as views ortográficas: frente, lado e topo. Elas mostram o objeto sem distorção, alinhado como uma planta de arquiteto, e são essenciais na hora de medir proporções e, mais à frente, preparar o modelo para impressão. Saber alternar entre essas views com um toque transforma a forma como o aluno enxerga e corrige o próprio trabalho.

Para fechar, o aluno coloca em prática selecionando, posicionando e deletando formas primitivas, montando uma pequena cena organizada. É um exercício de arrumação espacial: distribuir cubos, esferas e cilindros pelo cenário, sem amontoar, navegando pela câmera para conferir o resultado de todos os ângulos.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e já aberto, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar os movimentos de câmera ao vivo`,
    `Mouse com três botões (ou roda clicável) em cada estação — é indispensável para orbitar e dar pan no Maya`,
    `Arquivo de exemplo "cena_inicial.mb" com algumas primitivas já posicionadas, para a revisão de aquecimento`,
    `Folha impressa de "atalhos de câmera" (Alt + botões do mouse e teclas de view) para colar ao lado de cada monitor`,
    `Quadro branco ou flip chart para desenhar a ideia de "câmera girando ao redor do objeto"`,
  ],
  conceitosChave: [
    `Câmera (viewport) — a janela pela qual enxergamos a cena 3D; mover a câmera muda o ângulo, não o objeto.`,
    `Orbitar — girar a câmera ao redor da cena segurando Alt + botão esquerdo do mouse.`,
    `Zoom (dolly) — aproximar ou afastar a visão usando a roda do mouse ou Alt + botão direito.`,
    `Pan (track) — deslizar a visão para os lados sem girar, com Alt + botão do meio do mouse.`,
    `View ortográfica — visão reta e sem distorção do objeto (frente, lado ou topo), ideal para medir proporções.`,
    `View de perspectiva — visão com profundidade, parecida com o olho humano, onde a câmera gira livre pelo espaço.`,
    `Frame Selected — atalho (tecla F) que centraliza e enquadra o objeto selecionado na tela.`,
  ],
  treinamento: `## O que o professor precisa saber

No Maya, a navegação de câmera é toda feita com a tecla Alt segurada. São três gestos: Alt + botão esquerdo do mouse para orbitar (girar em volta), Alt + botão do meio para pan (deslizar a visão) e Alt + botão direito (ou a roda) para zoom. Decore esses três antes da aula e teste no seu computador. A tecla F enquadra o objeto selecionado; a tecla A enquadra a cena inteira. As views se trocam pela barra espacial: com o cursor sobre a viewport, segure a barra de espaço para abrir o menu de quatro telas (frente, topo, lado, perspectiva) e clique na que quiser, ou use o painel Panels para alternar. Um erro frequente do iniciante é esquecer o Alt e tentar girar a cena clicando direto, o que acaba movendo objetos. Reforce sempre: a câmera só se mexe com Alt.

## Passo a passo da aula

Aquecimento (10 min): abra o arquivo "cena_inicial.mb" no projetor. Peça que os alunos contem quantas formas há e descrevam onde estão. Mostre que, ao orbitar, é a câmera que gira, e não os objetos. Faça você os três movimentos devagar, narrando cada um.

Conteúdo novo guiado (15 min): demonstre orbitar com Alt + esquerdo, fazendo a câmera dar a volta completa em torno de uma esfera. Depois o zoom com a roda do mouse, depois o pan com Alt + meio. Selecione um objeto clicando nele e aperte F: a câmera centraliza nele. Aperte A para ver tudo. Em seguida, segure a barra de espaço sobre a viewport e mostre a troca para as views de frente, topo e lado, explicando que elas são "retas", sem profundidade.

Mão na massa (25 min): cada aluno cria três primitivas pelo menu Create, depois Polygon Primitives, escolhendo Cube, Sphere e Cylinder. Eles devem posicioná-las separadas pela cena usando a ferramenta Move (tecla W), arrastando pelas setas coloridas. Peça que orbitem ao redor para conferir de todos os ângulos, deem zoom para ver detalhes e usem pan para reenquadrar. Ensine a deletar: selecionar o objeto e apertar Delete. O objetivo é uma cena com pelo menos cinco formas bem distribuídas, sem amontoado.

Desafio e compartilhar (10 min): proponha enquadrar a cena na view de topo e tirar um "print mental" organizado. Cada aluno mostra a cena para um colega, orbitando para apresentar de vários ângulos.

## Como explicar de forma clara

Use a imagem da miniatura na mão: "Imagine que a cena é um brinquedo em cima da mesa e você anda em volta dele com uma câmera." Orbitar é andar ao redor; zoom é chegar o nariz perto; pan é deslizar a câmera de lado sem virar a cabeça. Diga que o objeto fica parado e quem se move é o olhar. Para as views, compare com fotos de um carro: a de frente, a de lado e a de cima do anúncio são views ortográficas; a foto "bonita" em três quartos é a perspectiva. Repita o mantra "segura o Alt" toda vez que alguém travar.

## Erros comuns e como ajudar

O erro número um é esquecer o Alt e acabar selecionando ou movendo objetos sem querer; mostre o atalho Ctrl + Z para desfazer e reforce o Alt. Alunos com mouse sem botão do meio não conseguem fazer pan — garanta mouses de três botões. Muitos "perdem" o objeto de vista ao dar zoom demais; ensine a tecla A para reenquadrar tudo e F para voltar ao selecionado. Outro tropeço é confundir girar a câmera com girar o objeto: pare e mostre que a grade do chão também gira junto, prova de que é a câmera. Por fim, alguns amontoam tudo no centro; incentive usar as setas do Move e olhar pela view de topo para espalhar as formas.`,
  exercicios: [
    {
      titulo: `Os Três Movimentos`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Circule pela sala conferindo se cada aluno está segurando o Alt antes de clicar. Peça que digam em voz alta qual botão usam para cada movimento.`,
      atividade: `Com a cena de exemplo aberta, pratique os três movimentos de câmera em sequência: orbite com Alt + botão esquerdo dando uma volta completa, dê zoom com a roda do mouse chegando bem perto e se afastando, e faça pan com Alt + botão do meio deslizando a visão para a esquerda e para a direita.`,
      gabarito: `O aluno demonstra os três gestos sem ajuda: Alt + esquerdo orbita, roda do mouse dá zoom, Alt + meio faz pan. A grade do chão gira junto na câmera, confirmando que o objeto permanece parado.`,
    },
    {
      titulo: `Troca de Views Relâmpago`,
      tipo: `Desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Cronometre e torne lúdico. Anuncie uma view e veja quem alterna mais rápido. Reforce que o cursor precisa estar sobre a viewport ao segurar a barra de espaço.`,
      atividade: `Quando o professor disser o nome de uma view (frente, lado, topo ou perspectiva), troque para ela o mais rápido que conseguir, segurando a barra de espaço sobre a viewport e escolhendo a tela certa. Faça pelo menos seis trocas seguidas.`,
      gabarito: `O aluno alterna corretamente entre as quatro views usando a barra de espaço, reconhecendo que frente, lado e topo são retas (ortográficas) e perspectiva tem profundidade. As trocas ficam fluidas após algumas repetições.`,
    },
    {
      titulo: `Caça ao Detalhe em Dupla`,
      tipo: `Em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas e oriente que apenas um navega por vez. Estimule o uso da tecla F para enquadrar o detalhe escondido. Troque os papéis no meio do tempo.`,
      atividade: `Em dupla, um aluno esconde um pequeno objeto atrás de outro maior na cena. O colega precisa encontrá-lo navegando: orbitando ao redor, dando zoom e usando pan. Ao achar, deve selecioná-lo e apertar F para enquadrá-lo. Depois invertam os papéis.`,
      gabarito: `Cada aluno localiza o objeto escondido combinando orbitar, zoom e pan, e usa F para centralizar o objeto selecionado na tela. Ambos conseguem cumprir os dois papéis, esconder e encontrar.`,
    },
    {
      titulo: `Roda de Conversa: Câmera ou Objeto?`,
      tipo: `Roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza com perguntas abertas e deixe os alunos explicarem com as próprias palavras. Use o quadro para desenhar a câmera girando ao redor do objeto parado.`,
      atividade: `Em roda, discutam: quando você orbita, o que realmente se move, a câmera ou o objeto? Por que a grade do chão gira junto? Em que situações usar a view de topo é melhor que a perspectiva? Cada aluno dá um exemplo do dia a dia que lembre esses movimentos.`,
      gabarito: `Os alunos concluem que é a câmera que se move, não o objeto, e que a grade girando junto comprova isso. Reconhecem que a view de topo ajuda a ver a distribuição e medir proporções, enquanto a perspectiva mostra profundidade. Exemplos válidos: andar ao redor de uma estátua, fotografar um bolo de cima.`,
    },
    {
      titulo: `Minha Primeira Cena Organizada`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a criação das primitivas pelo menu Create, depois Polygon Primitives. Lembre da tecla W para mover e Delete para apagar. Incentive conferir pela view de topo se as formas não estão amontoadas.`,
      atividade: `Monte uma pequena cena com pelo menos cinco formas primitivas (cubos, esferas e cilindros) bem distribuídas pelo espaço, sem amontoá-las. Use a ferramenta Move (tecla W) para posicionar, delete o que não gostar com a tecla Delete e navegue com a câmera para conferir de todos os ângulos.`,
      gabarito: `A cena final tem cinco ou mais primitivas espalhadas e organizadas, criadas pelo menu Create, depois Polygon Primitives. O aluno posiciona com a ferramenta Move, deleta objetos indesejados com Delete e verifica o resultado orbitando e usando a view de topo. Nenhuma forma fica empilhada por descuido.`,
    },
  ],
};
