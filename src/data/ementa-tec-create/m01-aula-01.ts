import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Mundo dos Cubinhos",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar o MagicaVoxel aos alunos, ensinando-os a instalar o programa, reconhecer a tela principal, girar a câmera e criar um cubo simples para começar a entender o espaço 3D.`,
  descricao: `Esta é a primeira aula da trilha de Arte 3D em voxel. Aqui o aluno descobre que pode construir mundos e personagens em três dimensões usando "cubinhos" — chamados de voxels. A palavra voxel vem da junção de "volume" com "pixel": assim como o pixel é o pontinho que forma uma imagem na tela, o voxel é o cubinho que forma um objeto no espaço 3D. Jogos famosos como Minecraft mostram bem essa ideia, e isso ajuda a conectar o conteúdo com o universo dos adolescentes.

O foco desta aula é tranquilizar e encantar. Ninguém vai modelar um personagem completo hoje. O objetivo é que cada aluno abra o MagicaVoxel sem medo, entenda que a tela é só um espaço onde os cubinhos vivem, aprenda a girar a câmera para ver o objeto de todos os lados e consiga colocar (e tirar) alguns voxels para sentir como funciona. É uma aula de exploração e familiarização com a ferramenta.

O MagicaVoxel é um programa gratuito, leve e divertido, perfeito para iniciantes. Ele não precisa de instalação complicada: basta descompactar uma pasta e abrir o programa. Como muitos alunos nunca viram um software 3D antes, a aula trabalha bastante a noção de espaço — eixos, frente, lado e cima — e a ideia de que, no 3D, a câmera se move ao redor do objeto, e não o contrário.

Ao final, espera-se que todos tenham girado a câmera com confiança e construído pelo menos um cubo simples na cena. Essa pequena vitória é o que dá segurança para as próximas aulas, em que vamos construir, apagar e, mais adiante, transformar os modelos em personagens prontos para impressão 3D.`,
  materiais: [
    `Computadores (um por aluno) com o MagicaVoxel já baixado na área de trabalho ou pronto para descompactar`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo`,
    `Pasta do MagicaVoxel (versão gratuita) salva localmente, caso a internet falhe`,
    `Mouse com rolagem (scroll) para cada aluno — facilita muito girar e dar zoom na câmera`,
    `Arquivo de exemplo .vox aberto (um personagem voxel simples) para mostrar o que será possível criar`,
    `Slide ou imagem comparando pixel (2D) e voxel (3D), e uma imagem do Minecraft para referência`,
    `Folha de apoio impressa com os atalhos básicos da câmera (girar, mover, zoom)`,
  ],
  conceitosChave: [
    `Voxel — cubinho que forma um objeto em 3D, assim como o pixel forma uma imagem em 2D.`,
    `Pixel — pontinho colorido que forma uma imagem plana (2D) na tela.`,
    `3D (três dimensões) — espaço com largura, altura e profundidade, em que dá para girar e ver o objeto por todos os lados.`,
    `Câmera — o ponto de vista que olha para a cena; no 3D, é ela que se move ao redor do modelo.`,
    `Cena (canvas) — a caixa ou área onde os voxels são colocados e o modelo é construído.`,
    `MagicaVoxel — programa gratuito e leve usado para criar arte e modelos 3D com voxels.`,
    `Eixos (X, Y, Z) — as três direções do espaço 3D: largura, profundidade e altura.`,
  ],
  treinamento: `## O que o professor precisa saber

O MagicaVoxel é um editor gratuito de arte 3D em voxel. Ele não exige instalador: você baixa um arquivo compactado (.zip), descompacta a pasta e abre o executável (no Windows, "MagicaVoxel.exe"). Tudo roda de dentro dessa pasta. Antes da aula, abra o programa uma vez no seu computador para confirmar que funciona e para se familiarizar.

A tela principal tem, ao centro, a cena (uma caixa onde ficam os voxels). À esquerda fica a paleta de cores e as ferramentas de construção. À direita ficam projetos, materiais e opções de renderização. Em cima há menus e o tamanho da cena. Por enquanto, foque só no centro e na câmera. Os três controles de câmera mais importantes: girar (botão direito do mouse arrastando), mover/pan (botão do meio arrastando, ou Shift + arrastar) e zoom (rolagem do scroll). Decore esses três — eles resolvem 90 por cento desta aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma e mostre no projetor o arquivo de exemplo .vox (um personagem voxel pronto). Gire-o na frente deles e pergunte: "do que isso é feito?". Conduza até a palavra "cubinhos". Mostre o slide pixel x voxel e a imagem do Minecraft. Explique que hoje todos vão abrir o programa e dar os primeiros passos.

Conteúdo novo guiado (15 min): peça para abrirem a pasta do MagicaVoxel e darem dois cliques em "MagicaVoxel.exe". Se ainda estiver compactado, mostre como descompactar (botão direito, "Extrair tudo"). Com todos dentro do programa, faça o tour da tela apontando no projetor: o centro é a cena; a esquerda tem cores e ferramentas; a direita tem ajustes. Agora ensine a câmera, devagar, um controle por vez: "segurem o botão direito e arrastem para girar"; "rolem o scroll para aproximar e afastar (zoom)"; "segurem Shift e arrastem para deslizar a cena (pan)". Repita cada gesto algumas vezes com eles.

Mão na massa (25 min): com a câmera dominada, mostre como adicionar voxels. Selecione a ferramenta "Attach" (adicionar) no painel esquerdo e uma cor na paleta. Clique sobre a face de um voxel da cena para colar um novo cubinho ali. Deixe os alunos colocarem vários voxels livremente para sentir como "colam" uns nos outros. Em seguida, mostre "Erase" (apagar): com ela ativa, clicar remove o voxel. Peça que construam um cubo simples — por exemplo, um bloco de 3x3x3 voxels — girando a câmera para conferir que está fechado por todos os lados. Circule pela sala ajudando quem travou.

Desafio + compartilhar (10 min): proponha o desafio "gire e ache o erro" — peça para cada aluno girar a própria cena e encontrar um buraco ou cubinho solto no modelo. Depois, faça uma volta rápida pela sala para cada um mostrar seu cubo na tela e dizer uma coisa que achou legal ou difícil.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Diga que o voxel é "o pixel que ganhou profundidade", um "tijolinho de LEGO digital". Para a câmera, diga: "você está com uma câmera na mão andando em volta de uma estátua; a estátua fica parada, quem anda é você". Evite termos técnicos como "renderizar" ou "viewport" agora. Sempre faça você primeiro no projetor, depois deixe eles repetirem. Comemore cada acerto: o primeiro cubo girado é uma conquista de verdade.

## Erros comuns e como ajudar

O erro mais comum é confundir os botões do mouse e "perder" a câmera, deixando a cena de cabeça para baixo. Ensine que, se a vista ficar estranha, basta girar com o botão direito até voltar ao normal. Outro tropeço: tentar adicionar voxel no vazio — explique que o cubinho precisa "colar" na face de outro ou no chão da cena. Há quem clique com a ferramenta "Erase" achando que está adicionando; confira qual ferramenta está ativa no painel esquerdo. Por fim, alunos com mouse sem scroll terão dificuldade no zoom — mostre o atalho alternativo ou empreste um mouse com rolagem.`,
  exercicios: [
    {
      titulo: `Primeiro voo da câmera`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Demonstre no projetor cada gesto antes e circule conferindo se todos conseguem girar sem travar a vista.`,
      atividade: `Com o arquivo de exemplo aberto, gire a câmera (botão direito), aproxime e afaste com o scroll (zoom) e deslize a cena com Shift + arrastar (pan). Veja o modelo de frente, de lado, de cima e por baixo.`,
      gabarito: `O aluno consegue girar a câmera em volta do modelo, dar zoom e mover a cena, observando o objeto por pelo menos quatro ângulos diferentes (frente, lado, cima e por baixo). Sucesso é a câmera obedecer com confiança.`,
    },
    {
      titulo: `Meu primeiro cubo`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Confirme que a ferramenta "Attach" (adicionar) está ativa e que há uma cor selecionada na paleta antes de começarem.`,
      atividade: `Use a ferramenta de adicionar voxel e construa um cubo cheio de 3x3x3 cubinhos. Gire a câmera para conferir que ele está fechado por todos os lados, sem buracos.`,
      gabarito: `Um bloco maciço com 3 voxels de largura, 3 de altura e 3 de profundidade (27 voxels), sem furos visíveis ao girar. Pequenas variações de tamanho são aceitáveis se o cubo estiver fechado.`,
    },
    {
      titulo: `Caça ao buraco`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Antes, esconda de propósito um voxel faltando no seu modelo de exemplo e mostre como girar revela o erro. Incentive o uso do zoom.`,
      atividade: `No seu próprio cubo, gire a câmera por todos os lados e encontre qualquer buraco ou cubinho solto. Conserte adicionando ou apagando voxels até o cubo ficar perfeito.`,
      gabarito: `O aluno localiza ao menos um defeito girando a câmera e o corrige usando as ferramentas de adicionar e apagar, deixando o cubo fechado e limpo. Se não havia defeito, ele confirma isso girando por todos os ângulos.`,
    },
    {
      titulo: `Construir e apagar em dupla`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e oriente o revezamento. Reforce que apagar é tão importante quanto construir e que ninguém deve mexer no mouse do colega na vez dele.`,
      atividade: `Em dupla, um aluno coloca cinco voxels formando uma escadinha; o colega gira a câmera para conferir e depois apaga apenas os voxels do topo. Em seguida troquem os papéis.`,
      gabarito: `Cada dupla mostra uma escadinha de 5 voxels e demonstra que conseguiu apagar apenas os cubinhos escolhidos sem destruir o resto. Os dois alunos devem ter usado tanto a ferramenta de adicionar quanto a de apagar.`,
    },
    {
      titulo: `Roda de conversa: pixel, voxel e o que vem por aí`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Conduza a conversa com perguntas abertas e valide todas as respostas. Anote no quadro as palavras-chave que surgirem para reforçar os conceitos.`,
      atividade: `Em roda, cada aluno responde: o que é um voxel? Qual a diferença entre pixel e voxel? Mostre na tela seu cubo e conte uma coisa que foi fácil e uma que foi difícil hoje.`,
      gabarito: `Espera-se que digam que o voxel é um cubinho do 3D e o pixel é um pontinho do 2D, e que o voxel tem profundidade (dá para girar e ver por todos os lados). Cada aluno deve apontar uma facilidade e uma dificuldade da aula. Qualquer explicação correta com as próprias palavras vale.`,
    },
  ],
};
