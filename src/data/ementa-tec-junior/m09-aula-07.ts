import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Deixar Pronto para Imprimir",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança consegue olhar o seu personagem 3D e, com ajuda do professor, deixá-lo "fechadinho" e bem apoiado, sem cubinhos soltos no ar, pronto para a impressora 3D.`,
  descricao: `Esta aula é a hora de preparar o boneco para a grande viagem dele: virar um objeto de verdade na impressora 3D. Até agora a turma construiu, montou bracinhos, pintou e enfeitou o personagem. Hoje a gente para de criar coisas novas e vira "inspetor de bonecos": olhamos com carinho para o que já existe e perguntamos "será que a impressora vai conseguir imprimir isso?".

A impressora 3D é uma máquina caprichosa. Ela monta o boneco de baixo para cima, uma camadinha de cada vez, como se estivesse empilhando panquecas. Por causa disso, ela não gosta de pedaços flutuando no ar (porque não tem onde apoiar) nem de buraquinhos que deixam o personagem "vazado". O nosso trabalho de hoje é deixar o boneco firme: tudo grudadinho, tudo apoiado, tudo bem em pé.

Na prática, as crianças vão girar o personagem no MagicaVoxel para olhar por todos os lados, procurar cubinhos soltos (aqueles que ficaram boiando longe do corpo) e tampar pequenos buracos. O professor conduz como uma brincadeira de "achar o erro": cada cubinho perdido que a turma encontra e conserta é um ponto. É uma aula calma, de revisão e cuidado, que prepara o terreno para a Aula 8, quando o boneco finalmente vai para a impressora.

O foco é simples e não avança para configurações técnicas de fatiamento (isso fica fora desta trilha). Aqui o objetivo é só o conceito visual: personagem fechado, sem peças soltas e bem apoiado na base.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com o MagicaVoxel já aberto e o personagem de cada aluno carregado`,
    `Projetor ou TV ligado no computador do professor para demonstrar girando o boneco na frente da turma`,
    `Dois arquivos de exemplo prontos pelo professor: um boneco "errado" (com cubinhos soltos e um buraco) e o mesmo boneco "consertado"`,
    `Folhas de papel e lápis de cor para a atividade do "Caça aos Cubinhos Perdidos"`,
    `Adesivos ou estrelinhas para marcar quem encontrou e consertou os erros`,
    `Um boneco de massinha ou de blocos de montar para mostrar, de verdade, o que é "soltar no ar" e "ficar em pé"`,
    `Lista de presença e a pasta onde cada criança salva o projeto (com o nome do aluno no arquivo)`,
  ],
  conceitosChave: [
    `Fechadinho — quando o boneco não tem buracos vazados; tudo é grudado, sem espaços abertos que deixam ver o "vazio" por dentro.`,
    `Cubinho solto — um quadradinho que ficou boiando longe do corpo, sem encostar em nada; a impressora não consegue imprimir uma coisa que flutua.`,
    `Apoiado — quando cada pedaço do boneco tem algo embaixo segurando ele, igual a uma torre que começa lá do chão.`,
    `Base — o "pé" do boneco, a parte de baixo que encosta na mesinha e segura tudo em pé para não cair.`,
    `Em pé (firme) — quando o personagem fica estável e não tomba; a impressora gosta de bonecos firmes, com a barriga bem apoiada na base.`,
    `Camadinha — a impressora monta o boneco empilhando camadas finas de baixo para cima, igual a empilhar panquecas.`,
    `Inspetor de boneco — o nosso papel de hoje: girar, olhar por todos os lados e procurar o que precisa de conserto.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

A impressora 3D constrói o objeto de baixo para cima, depositando material em camadas finas (como empilhar panquecas). Três coisas atrapalham esse processo e são exatamente o que vamos caçar nesta aula: (1) peças flutuantes — voxels soltos longe do corpo, que a impressora não tem como sustentar; (2) buracos vazados — aberturas que deixam o modelo "oco" de um jeito ruim; e (3) base instável — um boneco que encosta na mesa por uma área pequena demais e tomba.

No MagicaVoxel, cada quadradinho é um "voxel". Voxels que não se tocam viram pedaços separados na impressão. A boa notícia: nesta idade não precisamos de software de fatiamento nem de termos técnicos. Basta a turma deixar o personagem visualmente fechado, sem peças boiando e bem assentado na base. Os ajustes serão sempre adicionar/remover cubinhos, que as crianças já sabem fazer.

Antes da aula: abra o MagicaVoxel, carregue o projeto de cada criança e deixe pronto o arquivo de exemplo "errado". Garanta que a ferramenta Attach (adicionar cubinho) e Erase (apagar) estejam visíveis no painel de ferramentas, à esquerda da área de desenho.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em MagicaVoxel)

Aquecimento (10 min): receba a turma e relembre o boneco pintado da aula passada. Pegue o boneco de massinha e mostre ao vivo: solte um pedacinho no ar e diga "a impressora não consegue imprimir isso, cai!". Depois apoie tudo na mesa: "agora sim, firme!".

Conteúdo novo guiado (15 min): no projetor, abra o exemplo "errado". Mostre como girar a câmera: segure o botão direito do mouse e arraste para o personagem girar (ou use as setas do cubo de visão no canto superior direito). Gire devagar e diga "vamos espiar por todos os lados". Aponte um cubinho solto boiando e um buraco. Conserte na frente deles: clique na ferramenta Attach (no painel de ferramentas à esquerda), escolha a cor e clique para tampar o buraco; clique em Erase e clique no cubinho solto para apagá-lo. Mostre o exemplo "consertado" para comparar o antes e o depois.

Mao na massa (25 min): cada criança abre o próprio boneco e vira "inspetor". Passo a passo na tela: 1) girar com o botão direito do mouse e olhar de frente, de costas, de cima e de baixo; 2) achar cubinhos soltos e apagar com a ferramenta Erase; 3) tampar buracos com a ferramenta Attach, sempre na mesma cor da vizinhança; 4) conferir se a barriga/os pés encostam bem na base lá embaixo. Circule pelas mesas; alunos pequenos não enxergam o "de baixo" sozinhos — ajude a girar. Ao final, cada um salva em File, Save.

Desafio e compartilhar (10 min): proponha o "selo de pronto". Cada criança gira o boneco para um colega, que confere em voz alta: "fechadinho? apoiado? sem cubinho solto?". Quem passou ganha um adesivo de estrelinha.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a história da panqueca: "a impressora empilha o boneco igual a uma pilha de panquecas, de baixo para cima; ela não consegue colocar uma panqueca flutuando no ar". Para os cubinhos soltos, diga "esse quadradinho fugiu do corpo e ficou boiando; vamos trazer ele de volta ou tirar fora". Para "apoiado", use a torre de blocos: "toda peça precisa de uma amiga embaixo segurando". Para a base: "o pé do boneco é como a sola do sapato, tem que estar bem grudada no chão para ele não cair". Evite palavras como fatiamento, suporte ou STL; nesta idade falamos só de fechadinho, apoiado e firme.

## Erros comuns e como ajudar

As crianças esquecem de olhar embaixo do boneco; gire você mesmo a câmera para mostrar a base. Muitas confundem o cubinho solto com um enfeite proposital — pergunte "ele encosta no corpo?"; se não encosta, decidam juntos: trazer para perto ou apagar. Outras tampam buracos com a cor errada — está tudo bem para a impressão, mas aproveite para reforçar escolher a cor da vizinhança. Há quem queira "consertar" criando coisas novas; lembre com carinho que hoje a gente só ajeita, não inventa. Por fim, alguns esquecem de salvar — feche a aula pedindo para todos clicarem em File, Save juntos.`,
  exercicios: [
    {
      titulo: `Inspetor Gira-Gira`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor como girar a câmera segurando o botão direito do mouse e arrastando. Peça para cada criança fazer o mesmo no próprio boneco, narrando os lados em voz alta com a turma: "frente, costas, lado, lado, em cima, embaixo".`,
      atividade: `Gire o seu personagem e espie por todos os lados. Conte para o professor o que você vê de baixo do boneco: ele está bem apoiado na base ou tem algo estranho?`,
      gabarito: `A criança consegue girar o boneco com o botão direito e descreve a vista de baixo, dizendo se a base encosta na mesinha. Acertou se conseguiu olhar os seis lados (frente, costas, dois lados, cima e baixo) com ajuda.`,
    },
    {
      titulo: `Caça aos Cubinhos Perdidos`,
      tipo: `jogo`,
      tempo: `10 min`,
      guiaProfessor: `Abra no projetor o arquivo de exemplo "errado" preparado por você. Transforme em competição amistosa: cada cubinho solto ou buraco que a turma encontrar e apontar vale um ponto. Conte os pontos na lousa e comemore cada acerto.`,
      atividade: `Olhe o boneco do professor na tela e levante a mão quando achar um cubinho boiando no ar ou um buraco. Aponte na tela onde está o erro.`,
      gabarito: `O exemplo tem erros combinados de antemão (por exemplo, 2 cubinhos soltos e 1 buraco). A turma acerta quando localiza todos eles. Resposta esperada: encontrar e apontar cada peça solta e o buraco que o professor escondeu.`,
    },
    {
      titulo: `Roda da Panqueca`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma em roda. Use a analogia da pilha de panquecas e o boneco de massinha. Faça perguntas simples e deixe cada criança responder, sem pressa, validando todas as falas.`,
      atividade: `Conversem juntos: Por que a impressora não consegue imprimir um cubinho que está boiando no ar? O que significa o boneco estar "apoiado"? Por que a base precisa estar firme?`,
      gabarito: `Respostas esperadas, com as palavras da criança: a impressora monta de baixo para cima e não tem onde segurar um pedaço flutuando; "apoiado" é ter algo embaixo segurando cada parte; a base firme impede o boneco de cair. Acertou quem expressa essas ideias com suas próprias palavras.`,
    },
    {
      titulo: `Desenho do Boneco Firme`,
      tipo: `desenho/papel`,
      tempo: `9 min`,
      guiaProfessor: `Entregue folha e lápis de cor. Peça dois desenhos lado a lado: um boneco "errado" (com um cubinho boiando e/ou um buraco) e um boneco "certo" (fechadinho e apoiado na base). Mostre você um exemplo rápido na lousa.`,
      atividade: `Desenhe dois bonecos: à esquerda, um boneco com um cubinho solto no ar; à direita, o mesmo boneco consertado, fechadinho e com os pés bem grudados na base.`,
      gabarito: `O desenho da esquerda mostra claramente um quadradinho separado do corpo (ou um buraco); o da direita mostra tudo conectado e apoiado na base. Acertou quem soube representar a diferença entre solto/aberto e fechado/apoiado.`,
    },
    {
      titulo: `Selo de Pronto para Imprimir`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Uma criança gira o próprio boneco no MagicaVoxel enquanto a outra faz a checagem em voz alta usando três perguntas. Depois invertem. Você confirma cada selo e entrega o adesivo de estrelinha. Ajude a girar quem tiver dificuldade.`,
      atividade: `Em dupla, confira o boneco do colega com 3 perguntas: 1) Está fechadinho, sem buracos? 2) Não tem nenhum cubinho solto no ar? 3) Está bem apoiado e firme na base? Se as três respostas forem "sim", o boneco ganha o Selo de Pronto.`,
      gabarito: `O boneco recebe o selo quando passa nas três perguntas: nenhum voxel flutuante, sem buracos abertos e base apoiada/estável. Acertou a dupla que identificou corretamente se o boneco está pronto ou apontou o que ainda falta consertar.`,
    },
  ],
};
