import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Maya: Primeiros Passos no 3D",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer a interface do Autodesk Maya, aprender a navegar em 3D (orbitar, dar zoom e mover a câmera) e criar formas primitivas (cubo, esfera e cilindro) que serão a base dos personagens e objetos do jogo.`,
  descricao: `Nesta aula o aluno entra pela primeira vez no Autodesk Maya, o programa profissional usado para modelar tudo o que é tridimensional: personagens, itens e cenários do jogo. Depois de um Ano 1 inteiro criando imagens, vídeos e arte com inteligência artificial, agora ele dá o salto para o 3D de verdade, em que cada objeto tem largura, altura e profundidade e pode ser visto de qualquer ângulo. O foco de hoje não é fazer algo bonito, e sim ganhar confiança para se mover dentro desse mundo novo sem se perder.

O coração da aula é a interface e a navegação. O aluno descobre as três áreas mais importantes da tela: a viewport (a janela grande onde o objeto aparece em 3D), o Outliner (a lista com o nome de tudo o que existe na cena) e o Channel Box (o painel da direita que mostra os números de posição, rotação e tamanho do objeto selecionado). Em seguida aprende o gesto mais importante de todos: usar o botão Alt do teclado junto com o mouse para orbitar ao redor do objeto, dar zoom e deslizar a câmera. Sem dominar isso, qualquer trabalho em 3D vira uma confusão; com isso, tudo fica fácil.

Com a navegação na mão, o aluno cria suas primeiras formas primitivas pelo menu Create. O cubo (Cube), a esfera (Sphere) e o cilindro (Cylinder) são os blocos de montar do 3D. A grande ideia que fecha a aula é que um personagem de jogo, por mais complexo que pareça, começa como um amontoado simples dessas formas: uma esfera vira a cabeça, um cubo alongado vira o corpo, cilindros viram os braços e as pernas. Hoje o aluno só posiciona essas peças soltas, mas já enxerga o caminho até o personagem das próximas aulas.

Ao final, cada aluno terá uma cena no Maya com pelo menos um cubo, uma esfera e um cilindro, terá orbitado e dado zoom com tranquilidade e saberá identificar a viewport, o Outliner e o Channel Box. Essa base de navegação e criação de primitivas será usada em todas as aulas do mês.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e ativado (conta Autodesk Education gratuita, criada com o e-mail de cada aluno), um por aluno`,
    `Mouse com três botões e roda de rolagem (scroll) em cada máquina — a navegação do Maya depende do botão do meio, então mouse externo é obrigatório, não trackpad`,
    `Projetor ou TV ligado à máquina do professor para a demonstração ao vivo da interface e da navegação`,
    `Arquivo de exemplo: cena .mb pronta com um "boneco" simples já montado só com primitivas (esfera + cubos + cilindros), para mostrar aonde a aula leva`,
    `Imagem ou slide de referência mostrando um personagem de jogo desenhado por cima com formas geométricas (cabeça = esfera, corpo = cubo, membros = cilindros)`,
    `Folha impressa de "atalhos do dia": orbitar (Alt + botão esquerdo), zoom (Alt + botão direito ou scroll), mover câmera (Alt + botão do meio), enquadrar objeto (tecla F)`,
  ],
  conceitosChave: [
    `Viewport — a janela grande no centro da tela onde o objeto 3D aparece e pode ser girado e visto de qualquer ângulo.`,
    `Outliner — painel em forma de lista que mostra o nome de todos os objetos da cena, como um índice do que existe ali dentro.`,
    `Channel Box — painel à direita que exibe e permite editar os números de posição (Translate), rotação (Rotate) e tamanho (Scale) do objeto selecionado.`,
    `Orbitar — girar a câmera ao redor do objeto para vê-lo por todos os lados, feito com a tecla Alt mais o botão esquerdo do mouse.`,
    `Zoom — aproximar ou afastar a câmera do objeto, feito com a roda de rolagem ou com Alt mais o botão direito do mouse.`,
    `Primitiva — forma 3D básica e pronta (cubo, esfera, cilindro) que serve de bloco de montar para construir modelos mais complexos.`,
    `Polígono (Polygon) — a malha de faces planas que forma a "casca" de um objeto 3D no Maya; toda primitiva é feita de polígonos.`,
  ],
  treinamento: `## O que o professor precisa saber

O Autodesk Maya é o programa profissional de modelagem 3D que a turma vai usar o mês inteiro. Você não precisa ser especialista: hoje só vamos abrir a interface, aprender a mexer a câmera e criar três formas prontas. A regra de ouro da navegação é a tecla Alt segurada junto com os botões do mouse — decore isto: Alt + botão esquerdo orbita (gira em volta), Alt + botão direito (ou a roda) dá zoom, e Alt + botão do meio move a câmera de lado. A tecla F enquadra o objeto selecionado na tela, e é o seu botão de "socorro" quando alguém se perde. Antes da aula, abra o Maya, deixe a viewport visível, confirme que o Outliner aparece (menu Windows, depois Outliner) e que o Channel Box está à direita. Crie um cubo de teste pelo menu Create para garantir que tudo funciona.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: mostre no projetor a cena de exemplo com o boneco feito de primitivas e a imagem do personagem desenhado por cima com formas geométricas. Pergunte: "de quais formas simples esse personagem é feito?" Ligue ao Ano 1: antes a arte era 2D feita com IA; agora vamos para o 3D de verdade.

15 min — Conteúdo novo guiado: no projetor, aponte as três áreas — a viewport (janela grande), o Outliner (lista à esquerda, abra por Windows depois Outliner) e o Channel Box (painel à direita). Demonstre devagar a navegação: segure Alt e arraste com o botão esquerdo para orbitar; use a roda para o zoom; segure Alt com o botão do meio para deslizar. Aperte F para reenquadrar. Depois vá ao menu Create, depois Polygon Primitives, e clique em Cube. Mostre o cubo aparecendo na viewport e o nome dele surgindo no Outliner.

25 min — Mão na massa: cada aluno pratica a navegação por um minuto (orbitar, zoom, mover) e depois cria as três primitivas pelo Create, depois Polygon Primitives: Cube, Sphere e Cylinder. Peça que afastem as formas umas das outras usando a ferramenta Move (atalho W) e arrastando as setas coloridas. Circule garantindo que todos saibam orbitar e usar o F.

10 min — Desafio e compartilhar: desafie cada aluno a empilhar as primitivas para sugerir um "bonequinho" (esfera em cima como cabeça, cubo no meio como corpo). Dois ou três mostram a cena no projetor, orbitando ao vivo para provar que está mesmo em 3D.

## Como explicar de forma clara (linguagem para a idade)

Compare a viewport a uma mesa de vidro onde você pode andar em volta para olhar o brinquedo por todos os lados — a tecla Alt é o que te deixa "andar em volta". Diga que o Outliner é a lista de chamada da cena: todo objeto criado tem o nome anotado ali. O Channel Box é o "RG" do objeto: mostra onde ele está, quanto girou e qual o tamanho, tudo em números. Para as primitivas, use a ideia de blocos de montar: assim como um personagem de massinha começa com bolas e rolinhos, no 3D ele começa com esferas e cilindros. Reforce que ninguém precisa desenhar nada à mão hoje, só montar e girar.

## Erros comuns e como ajudar

O erro número um é tentar navegar sem segurar o Alt, clicando direto na viewport e movendo objetos sem querer; pare a turma e repita o mantra "Alt antes do mouse". Quem usa trackpad sofre muito: insista no mouse de três botões. Muitos "perdem" o objeto ao dar zoom demais e ficam na tela vazia; ensine na hora a apertar F para reenquadrar. Outro erro é criar várias primitivas exatamente no mesmo lugar, uma dentro da outra, achando que sumiram; mostre o Outliner para provar que estão lá e peça para movê-las com o W. Por fim, alguns confundem orbitar com mover o objeto; explique que orbitar move a câmera, não a forma — a forma continua parada no lugar.`,
  exercicios: [
    {
      titulo: `Tour pela interface do Maya`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Conduza no projetor enquanto a turma acompanha na própria máquina. Aponte cada área e peça que repitam em voz alta o nome. Confirme que o Outliner está aberto (Windows, depois Outliner) em todas as telas antes de seguir.`,
      atividade: `Na sua tela, localize e aponte com o mouse as três áreas principais: a viewport (janela grande do meio), o Outliner (lista de nomes) e o Channel Box (painel da direita com os números). Diga em voz alta para que serve cada uma.`,
      gabarito: `O aluno identifica corretamente as três áreas: viewport é onde o objeto 3D aparece, Outliner é a lista com o nome dos objetos da cena e Channel Box mostra posição, rotação e tamanho. O Outliner está visível na tela dele.`,
    },
    {
      titulo: `Domínio da navegação 3D`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Repita o mantra "Alt antes do mouse". Demonstre cada gesto devagar e dê um minuto para a turma treinar. Lembre da tecla F como botão de socorro para reencontrar o objeto. Verifique quem está usando trackpad e providencie mouse.`,
      atividade: `Crie um cubo qualquer pelo menu Create. Depois pratique: orbite em volta dele (Alt + botão esquerdo), dê zoom para perto e para longe (roda do mouse) e deslize a câmera de lado (Alt + botão do meio). Por fim, aperte F para reenquadrar o cubo no centro.`,
      gabarito: `O aluno consegue orbitar, dar zoom e mover a câmera usando a tecla Alt com os botões certos, sem mover o objeto por engano. Sabe usar a tecla F para reenquadrar quando "perde" o cubo de vista.`,
    },
    {
      titulo: `Criando as três primitivas`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre o caminho Create, depois Polygon Primitives, e cada opção. Reforce o uso da ferramenta Move (W) para afastar as formas, evitando que fiquem empilhadas no mesmo ponto. Use o Outliner para provar que cada forma criada existe.`,
      atividade: `Pelo menu Create, depois Polygon Primitives, crie um Cube, uma Sphere e um Cylinder. Com a ferramenta Move (tecla W), arraste cada forma para um lugar diferente da viewport, de modo que as três fiquem separadas e visíveis ao mesmo tempo.`,
      gabarito: `A cena tem três objetos separados e visíveis — um cubo, uma esfera e um cilindro — e os três nomes aparecem listados no Outliner. As formas não estão sobrepostas no mesmo ponto; o aluno usou o Move para afastá-las.`,
    },
    {
      titulo: `Caça ao objeto perdido (em dupla)`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Peça que cada aluno crie um cilindro e dê um zoom exagerado até "perder" o objeto, deixando a viewport quase vazia. As duplas trocam de máquina e precisam reencontrar a forma. Circule mediando e estimulando o uso do Outliner e da tecla F.`,
      atividade: `Na máquina do colega, reencontre o objeto que "sumiu": clique no nome dele no Outliner para selecioná-lo e aperte F para a câmera enquadrá-lo de volta no centro da tela. Depois expliquem um ao outro como acharam a forma.`,
      gabarito: `A dupla consegue reencontrar o objeto selecionando-o pelo nome no Outliner e apertando F para reenquadrar. Cada aluno sabe explicar que zoom em excesso "esconde" o objeto e que o Outliner mais o F resolvem o problema.`,
    },
    {
      titulo: `Meu primeiro bonequinho de primitivas`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Mostre de novo a referência do personagem desenhado com formas geométricas. Oriente a empilhar as primitivas com a ferramenta Move (W) e a girar a câmera para conferir o alinhamento por vários ângulos. Convide dois ou três alunos a apresentar orbitando ao vivo no projetor.`,
      atividade: `Usando as primitivas que você já criou (e criando outras se quiser), monte um "bonequinho" simples: uma esfera no alto como cabeça, um cubo no meio como corpo e cilindros como braços ou pernas. Orbite a câmera para conferir se as peças estão bem encaixadas por todos os lados.`,
      gabarito: `A cena mostra um boneco reconhecível feito só de primitivas, com cabeça (esfera), corpo (cubo) e ao menos um membro (cilindro), peças posicionadas com o Move. O aluno orbita a câmera para mostrar o boneco em 3D e explica qual forma representa cada parte.`,
    },
  ],
};
