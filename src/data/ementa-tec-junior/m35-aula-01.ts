import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Trazendo Nossos Bonecos pro Roblox",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Abrir o Roblox Studio, conhecer a janela do jogo e importar para dentro dele os modelos voxel que as crianças criaram.`,
  descricao: `Neste mês as crianças vão montar o próprio jogo voxel jogável no Roblox Studio. É o grande projeto do Ano 3: tudo o que elas modelaram no MagicaVoxel e no Blender, e até imprimiram em 3D de verdade na Bambu Lab, agora vira parte de um mundo onde dá para andar, pular e brincar de verdade. Esta primeira aula é o ponto de partida: abrir o programa, olhar com calma para cada parte da tela e trazer os bonecos para dentro do jogo.

O Roblox Studio é como uma oficina mágica de jogos. Nela a gente vê o mundo em 3D no meio da tela, tem uma lista de tudo que existe no jogo de um lado e uma caixa de propriedades do outro. Para a criança, a ideia mais importante de hoje é simples: o jogo é feito de peças, e cada modelo voxel que ela fez é uma dessas peças que pode ser colocada no mundo. Importar é só o jeito chique de dizer "trazer de fora pra dentro".

Como o professor pode ser iniciante no Roblox Studio, esta aula é guiada como um tutorial bem detalhado. Vamos mostrar onde fica cada botão, o nome de cada painel e o caminho exato para importar um modelo em formato de mesh (o arquivo .obj ou .fbx que sai do MagicaVoxel ou do Blender). O segredo é demonstrar no projetor primeiro, devagar, e só depois deixar as crianças repetirem no computador delas.

O clima da aula é de descoberta e de "uau, meu boneco está dentro do jogo!". Não se preocupe em deixar tudo perfeito hoje: arrumar a posição, o tamanho e a cena é assunto das próximas aulas. Hoje o objetivo é vencer o medo da tela nova, aprender os nomes das partes e ver o primeiro modelo voxel aparecendo no mundo 3D.`,
  materiais: [
    `Computadores com o Roblox Studio já instalado e aberto (um por criança ou em duplas)`,
    `Projetor ou TV grande ligado no computador do professor para demonstrar`,
    `Os arquivos de modelo voxel das crianças (.obj ou .fbx) salvos numa pasta fácil de achar`,
    `Um modelo voxel de exemplo já pronto, caso alguma criança não tenha o seu à mão`,
    `Conta Roblox de cada criança (ou uma conta da turma) já logada no Studio`,
    `Mouse com rodinha para cada computador (ajuda muito a girar a câmera)`,
    `Cartazes ou slides com os nomes dos painéis: Explorer, Properties e Viewport`,
  ],
  conceitosChave: [
    `Roblox Studio — o programa onde a gente constrói e monta o nosso próprio jogo.`,
    `Viewport — a janela grande do meio da tela, onde a gente vê o mundo do jogo em 3D.`,
    `Explorer — a listinha do lado direito que mostra tudo o que existe dentro do jogo, como um sumário.`,
    `Properties — a caixinha que mostra os detalhes de uma peça, como o tamanho e a cor.`,
    `Importar — trazer um arquivo de fora (o nosso boneco voxel) para dentro do jogo.`,
    `Mesh — o tipo de arquivo do nosso modelo 3D, a casquinha de blocos que vira o boneco no Roblox.`,
    `Câmera — o nosso olho dentro do jogo; a gente gira e aproxima para ver as coisas de perto.`,
  ],
  treinamento: `## O que o professor precisa saber

O Roblox Studio é gratuito e roda no computador. Hoje você não vai programar nada: vai só abrir o programa, conhecer a tela e importar um modelo 3D. Antes da aula, abra o Studio uma vez sozinho para se familiarizar. Ao abrir, escolha "New" (Novo) e o template "Baseplate" (chão liso) — é o mais simples e perfeito para começar. Você verá três áreas principais: no meio fica o Viewport (o mundo 3D), na direita em cima o Explorer (a lista de tudo) e abaixo dele o Properties (os detalhes). Em cima fica a faixa de abas chamada Ribbon, com as abas Home, Model, Test e outras. Memorize essas palavras: você vai repeti-las para as crianças o tempo todo.

Para importar um modelo voxel, o caminho é: aba "Avatar" ou aba "Model" no topo, botão "Import 3D" (ou "Insert" e depois "Import 3D Importer"). Abre uma janelinha; clique em "Import", escolha o arquivo .obj ou .fbx da criança e confirme. O modelo aparece no Viewport e também na lista do Explorer. Teste isso antes da aula com um arquivo de exemplo para não travar na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna as crianças perto do projetor. Pergunte: "Lembram dos bonecos que vocês fizeram em blocos? Hoje eles vão entrar num jogo de verdade!". Mostre rapidamente um jogo voxel pronto para criar empolgação. Relembre que voxel é igual a Lego digital.

Conteúdo novo guiado (15 min): No projetor, abra o Studio com "New" e "Baseplate". Aponte com o mouse e diga o nome de cada parte bem devagar: "Esta janela grande do meio é o Viewport, é onde a gente enxerga o jogo. Esta lista da direita é o Explorer. Esta caixa de baixo é o Properties." Mostre como girar a câmera segurando o botão direito do mouse e como aproximar com a rodinha. Depois demonstre a importação: clique na aba "Avatar" (ou "Model"), no botão "Import 3D", em "Import", escolha o arquivo e confirme. Mostre o boneco aparecendo no Viewport e o nome novo surgindo no Explorer.

Mão na massa (25 min): Agora é a vez das crianças. Cada uma abre o Studio no seu computador com "Baseplate". Passe nas mesas garantindo que todas acharam o Viewport, o Explorer e o Properties. Em seguida, ajude cada criança a importar o próprio arquivo voxel pelo botão "Import 3D". Comemore cada modelo que aparece. Quem terminar pode girar a câmera e olhar o boneco de todos os lados.

Desafio e compartilhar (10 min): Peça que cada criança gire a câmera e mostre o boneco para o colega do lado. Faça uma rodada rápida onde cada um diz o nome do seu modelo no Explorer. Termine relembrando: "Na próxima aula vamos arrumar os bonecos na cena!".

## Como explicar para crianças

Use analogias concretas. Diga que o Roblox Studio é uma "oficina de montar jogos" e que o jogo é feito de peças, igual a um mundo de Lego. Explique que "importar" é como tirar o boneco de uma caixa e colocar na mesa de brincar. O Explorer é o "sumário do jogo", uma lista de tudo que existe lá dentro. A câmera é o "nosso olho voador": a gente segura o botão direito do mouse e mexe a cabeça para olhar para os lados. Sempre demonstre primeiro no projetor e use frases curtas, uma instrução de cada vez.

## Erros comuns e como ajudar

Crianças costumam clicar com pressa e abrir menus errados — peça que esperem você dizer "agora cliquem". Muitas perdem a câmera e ficam olhando para o vazio: ensine a tecla que centraliza o modelo selecionado (clicar no nome no Explorer e apertar a tecla "F" foca a câmera nele). Outro erro é não achar o arquivo certo na hora de importar; deixe todos os arquivos numa única pasta com nomes claros antes da aula. Se o modelo aparecer gigante ou minúsculo, tranquilize a turma: ajustar tamanho é assunto da próxima aula. E se alguém não tiver o próprio arquivo, use o modelo de exemplo para que ninguém fique de fora.`,
  exercicios: [
    {
      titulo: `Caça aos painéis`,
      tipo: `Reconhecimento na tela`,
      tempo: `5 minutos`,
      guiaProfessor: `Com o Studio aberto no projetor, aponte para uma área e pergunte o nome. Deixe as crianças responderem em voz alta. Repita até todas acertarem.`,
      atividade: `Olhe para a tela do Roblox Studio e aponte com o dedo: onde fica o Viewport (a janela grande do meio)? Onde fica o Explorer (a lista da direita)? Onde fica o Properties (a caixa de baixo)?`,
      gabarito: `Viewport é a janela grande no centro da tela onde aparece o mundo 3D. Explorer é a lista no canto direito de cima. Properties é a caixa de detalhes logo abaixo do Explorer.`,
    },
    {
      titulo: `Girando o olho voador`,
      tipo: `Prática guiada de câmera`,
      tempo: `5 minutos`,
      guiaProfessor: `Demonstre primeiro. Depois oriente cada criança a segurar o botão direito do mouse e mover devagar. Use a rodinha para aproximar e afastar.`,
      atividade: `No seu computador, segure o botão direito do mouse e mexa para girar a câmera. Use a rodinha do mouse para chegar mais perto e mais longe do chão (Baseplate).`,
      gabarito: `Segurando o botão direito e movendo o mouse, a câmera gira em volta. Girando a rodinha para frente, a câmera se aproxima; para trás, se afasta. A criança consegue olhar o chão de vários ângulos.`,
    },
    {
      titulo: `Trazendo meu boneco`,
      tipo: `Mão na massa de importação`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada criança no caminho: aba "Avatar" (ou "Model"), botão "Import 3D", botão "Import", escolher o arquivo .obj ou .fbx e confirmar. Comemore cada boneco que aparece.`,
      atividade: `Importe o seu modelo voxel para dentro do Roblox Studio usando o botão "Import 3D". Escolha o seu arquivo na pasta e confirme. Veja o boneco aparecer na janela do meio.`,
      gabarito: `O modelo voxel da criança aparece no Viewport, em 3D, e o nome dele surge na lista do Explorer. O caminho correto é Avatar/Model, depois Import 3D, depois Import, depois escolher o arquivo e confirmar.`,
    },
    {
      titulo: `Achando no sumário`,
      tipo: `Exploração do Explorer`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre que ao clicar no nome do modelo no Explorer ele fica destacado no Viewport. Ensine a apertar a tecla "F" para a câmera focar nele.`,
      atividade: `No Explorer, encontre o nome do seu boneco que você acabou de importar. Clique nele e aperte a tecla "F" para a câmera voar até o seu modelo.`,
      gabarito: `O nome do modelo importado aparece na lista do Explorer. Ao clicar nele, a peça fica selecionada (com contornos) no Viewport, e ao apertar "F" a câmera centraliza e foca exatamente no boneco.`,
    },
    {
      titulo: `Guia do explorador de jogos`,
      tipo: `Desafio de explicação e compartilhar`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Cada criança explica para o colega o que fez. Incentive o uso das palavras Viewport, Explorer e importar. Faça uma rodada final com a turma toda.`,
      atividade: `Explique para o colega do lado, com as suas palavras, o que é o Roblox Studio e como você trouxe o seu boneco para dentro do jogo. Use as palavras "Viewport", "Explorer" e "importar".`,
      gabarito: `A criança explica que o Roblox Studio é o programa onde a gente monta o jogo, que o Viewport é a janela onde se vê o mundo, que o Explorer é a lista de tudo, e que importar é trazer o modelo voxel de fora para dentro do jogo usando o botão Import 3D.`,
    },
  ],
};
