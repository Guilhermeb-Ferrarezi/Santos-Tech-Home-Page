import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Construindo com cubinhos",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Empilhar voxels camada por camada para construir formas simples em 3D, como uma torre, uma escada e uma caixa, montando uma mini-cena livre.`,
  descricao: `Nesta aula a criança aprende a pensar como um construtor de verdade: todo objeto 3D no MagicaVoxel é feito de cubinhos chamados voxels, empilhados de baixo para cima, igualzinho a tijolinhos de montar. Em vez de só colocar um cubinho aqui e ali, a criança vai descobrir que dá para criar formas grandes e organizadas pensando em camadas, ou seja, um andar de cada vez.

Vamos construir três formas clássicas que ensinam tudo o que importa. A torre mostra como empilhar voxels para cima e ganhar altura. A escada mostra como subir um degrau de cada vez, deslocando um pouquinho a cada camada. A caixa mostra como fazer um bloco cheio, preenchendo uma área inteira. Com essas três ideias na mão, a criança consegue construir quase qualquer coisa depois.

O grande conceito do dia é "de baixo para cima". O voxel novo precisa de algo embaixo para se apoiar, senão a forma fica flutuando no ar e confusa. Quando a criança entende que constrói o chão primeiro, depois o primeiro andar, depois o segundo, tudo fica mais fácil e bonito. É a mesma lógica de empilhar blocos de madeira na vida real.

No final, cada aluno junta torre, escada e caixa numa mini-cena livre, do jeito que quiser, usando linhas (voxels em fileira) e blocos cheios (áreas preenchidas). Não existe cena errada: o objetivo é treinar a mão, ganhar confiança com as ferramentas de adicionar e apagar, e sentir o prazer de ver a própria construção crescer na tela.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto e um modelo novo e vazio em cada um`,
    `Projetor ou TV ligado ao computador do professor para demonstrar ao vivo`,
    `Um modelo pronto de exemplo com torre, escada e caixa já construídas, para mostrar a meta`,
    `Tabela de teclas de atalho impressa e colada na parede (Attach, Erase, Box)`,
    `Blocos de montar de verdade (tipo Lego ou cubos de madeira) para a analogia das camadas`,
    `Folha simples com três quadradinhos para a criança rabiscar a ideia da cena antes de construir`,
  ],
  conceitosChave: [
    `Voxel — é o cubinho mágico, o tijolinho 3D que monta tudo no MagicaVoxel.`,
    `Camada — é um andar da construção; a gente empilha um andar de cada vez, de baixo para cima.`,
    `Empilhar — colocar um cubinho em cima do outro para a forma crescer para o alto.`,
    `Torre — forma alta e fininha feita de cubinhos empilhados para cima.`,
    `Escada — forma que sobe um degrau de cada vez, andando de ladinho a cada camada.`,
    `Bloco cheio — uma área toda preenchida de cubinhos, sem buracos no meio, como uma caixa fechada.`,
    `Apoio — o chão ou o cubinho de baixo que segura o cubinho de cima para ele não ficar flutuando.`,
  ],
  treinamento: `## O que o professor precisa saber

No MagicaVoxel, tudo é feito de voxels (cubinhos) dentro de uma caixa de construção chamada grade. Você não precisa ser especialista: basta dominar três ações. Primeiro, o modo de adicionar cubinho, o botão "Attach" (ou tecla "T"), na barra de ferramentas à esquerda. Segundo, o modo de apagar, o botão "Erase" (tecla "R"), para corrigir erros. Terceiro, a ferramenta de pincel "Box" (na barra superior, junto de "Voxel", "Face", "Box", "Line"), que pinta uma área retangular inteira de uma vez, ótima para caixas. Para girar a câmera e enxergar a construção por todos os lados, segure o botão direito do mouse e arraste. Para dar zoom, use a rolagem do mouse. Treine isso uma vez antes da aula.

## Passo a passo da aula (10/15/25/10)

Aquecimento (10 min): mostre os blocos de montar de verdade. Empilhe três na frente das crianças e pergunte "de onde a gente começa?". A resposta é: de baixo. Reforce que no MagicaVoxel é igual. Relembre rapidamente como adicionar e apagar um cubinho da aula passada.

Conteúdo novo guiado (15 min): no projetor, abra um modelo vazio. Selecione "Attach" (T). Clique para colocar um cubinho no chão. Clique em cima dele para empilhar e fazer uma torrezinha de quatro cubinhos. Depois, faça a escada: coloque um cubinho, depois um ao lado e um acima, repetindo, mostrando o degrau crescer. Por fim, escolha a ferramenta "Box" na barra de cima, clique e arraste para desenhar um quadrado no chão e solte: nasce um bloco cheio, a caixa. Fale em voz alta cada clique.

Mão na massa (25 min): cada aluno constrói, na ordem, uma torre, uma escada e uma caixa, copiando você. Depois libere a mini-cena: eles juntam as três formas como quiserem e acrescentam linhas e blocos extras. Circule pela sala, sente ao lado de quem travar e peça que digam em voz alta "agora vou empilhar mais um andar". Use "Erase" (R) para consertar sem apagar tudo.

Desafio e compartilhar (10 min): proponha o desafio de fazer a torre mais alta que conseguirem em cubinhos empilhados. Depois, cada criança gira a câmera (botão direito) e mostra a cena para a turma, dizendo qual parte foi a torre, a escada e a caixa.

## Como explicar para crianças

Use sempre a palavra "andar". "Vamos construir o primeiro andar, agora o segundo andar." Compare com prédios e com bolo de aniversário, que tem camadas. Diga que o cubinho é preguiçoso: ele só fica em pé se tiver um amiguinho embaixo para segurar. Para a escada, fale "sobe um, anda de ladinho, sobe mais um". Para a caixa, diga que é uma área toda pintada de cubinho, sem buraco no meio. Comemore cada forma pronta com um joinha.

## Erros comuns e como ajudar

O erro mais comum é tentar colocar cubinho no ar, longe do apoio: o MagicaVoxel cola o cubinho na face mais próxima, então a criança acha que "sumiu". Peça que sempre clique encostado em outro cubinho ou no chão. Outro erro é girar demais a câmera e se perder; ensine a soltar o botão direito e respirar, ou aperte a tecla para voltar à vista inicial. Muitos esquecem de trocar de "Erase" para "Attach" e continuam apagando sem querer; aponte para a barra e pergunte "qual botão está aceso?". Por fim, alguns querem apagar tudo ao errar um cubinho: mostre que o "Erase" tira só um, e que errar faz parte de construir.`,
  exercicios: [
    {
      titulo: `Aquecendo a mão: empilhar três cubinhos`,
      tipo: `Prática guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça junto no projetor, bem devagar. Garanta que todos estão no modo "Attach" (tecla T) antes de começar. O objetivo é só relembrar o clique de adicionar e a ideia de empilhar.`,
      atividade: `Coloque um cubinho no chão. Clique em cima dele para empilhar o segundo. Clique de novo em cima para empilhar o terceiro. Você fez uma mini-torre de três andares.`,
      gabarito: `Uma coluna de três voxels, um exatamente em cima do outro, apoiada no chão. Cada novo cubinho foi adicionado sobre a face de cima do anterior, mostrando que a criança domina o empilhar de baixo para cima.`,
    },
    {
      titulo: `Construindo a torre`,
      tipo: `Construção orientada`,
      tempo: `5 minutos`,
      guiaProfessor: `Peça uma torre mais alta que a do aquecimento. Reforce a regra do apoio: cada cubinho precisa de um embaixo. Se alguém errar a coluna e ela ficar torta, mostre como usar "Erase" (R) para tirar só o cubinho fora do lugar.`,
      atividade: `Construa uma torre reta de pelo menos seis cubinhos empilhados, todos na mesma posição, um em cima do outro, começando do chão.`,
      gabarito: `Uma torre vertical, reta e contínua, com seis ou mais voxels alinhados na mesma coluna. Não deve haver cubinhos flutuando nem buracos no meio da torre; cada andar se apoia no de baixo.`,
    },
    {
      titulo: `Subindo a escada`,
      tipo: `Construção orientada`,
      tempo: `6 minutos`,
      guiaProfessor: `Demonstre o padrão "sobe um, anda de ladinho" no projetor antes. As crianças costumam errar a direção; combine que a escada sempre sobe para o mesmo lado. Conte os degraus em voz alta junto com a turma.`,
      atividade: `Construa uma escada de quatro degraus: comece com um cubinho no chão, depois um ao lado mais um em cima, e repita, sempre andando para o mesmo lado e subindo um andar a cada degrau.`,
      gabarito: `Uma escada com quatro degraus em ordem crescente de altura, cada degrau deslocado uma posição para o lado e uma para cima em relação ao anterior. A forma deve parecer uma escadinha vista de lado, todos os degraus apoiados.`,
    },
    {
      titulo: `Fazendo a caixa com a ferramenta Box`,
      tipo: `Prática de ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Aqui troca-se o pincel: na barra de cima, selecione "Box". Mostre o clique-arrasta-solta para criar uma área cheia de uma vez só. Avise que o bloco deve ser cheio, sem buraco no meio. Quem usar "Voxel" em vez de "Box" vai demorar muito; oriente a trocar.`,
      atividade: `Usando a ferramenta "Box", clique e arraste no chão para criar um bloco cheio de pelo menos três por três cubinhos, como uma caixa fechada sem buracos.`,
      gabarito: `Um bloco retangular preenchido por completo, com no mínimo três cubinhos de largura e três de comprimento, sem espaços vazios no interior. A criança usou a ferramenta "Box" (não cubinho por cubinho) para preencher a área de uma vez.`,
    },
    {
      titulo: `Minha mini-cena livre`,
      tipo: `Desafio criativo`,
      tempo: `8 minutos`,
      guiaProfessor: `Libere a criatividade, mas exija que as três formas apareçam. Aceite qualquer arranjo. Incentive o uso de linhas (fileiras de cubinhos) para ligar as formas, como um caminho. No final, peça que cada um gire a câmera com o botão direito e mostre a cena, apontando torre, escada e caixa.`,
      atividade: `Junte numa mesma cena uma torre, uma escada e uma caixa, posicionando do jeito que você quiser. Acrescente pelo menos uma linha de cubinhos ligando duas formas, como um caminhozinho, sempre construindo de baixo para cima.`,
      gabarito: `Uma cena que contém, claramente identificáveis, as três formas: uma torre alta, uma escada com degraus e uma caixa de bloco cheio. Há ao menos uma linha de voxels conectando elementos. Todas as formas estão apoiadas (nada flutuando) e a criança consegue apontar e nomear cada parte ao girar a câmera.`,
    },
  ],
};
