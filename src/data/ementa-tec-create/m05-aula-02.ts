import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Navegando no Espaço 3D",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Dominar a navegação na cena 3D do Blender (orbitar, dar zoom e deslocar a câmera) e transformar objetos com as teclas G, R e S, ganhando confiança para controlar o ambiente.`,
  descricao: `Nesta aula o aluno deixa de ser um espectador e passa a controlar de verdade o espaço 3D do Blender. Na aula anterior eles abriram o programa e conheceram a tela; agora vão aprender a se mover dentro dela. Modelar em 3D é, antes de tudo, saber olhar o objeto por todos os lados. Quem não consegue girar e aproximar a cena com fluência acaba modelando "às cegas" e se frustra. Por isso, esta aula é quase toda prática: mãos no mouse e no teclado.

A navegação no Blender tem três movimentos básicos. Orbitar é girar a câmera ao redor da cena, como se você andasse em volta de uma estátua. Dar zoom é chegar mais perto ou se afastar. E deslocar (o chamado "pan") é arrastar a cena para os lados sem girar, como empurrar uma folha sobre a mesa. Esses três movimentos, combinados, deixam o aluno olhar qualquer parte do modelo de qualquer ângulo.

A segunda metade da aula apresenta as três transformações mais usadas em toda a modelagem: mover (tecla G, de "grab", agarrar), girar (tecla R, de "rotate") e escalar (tecla S, de "scale", tamanho). Com elas o aluno posiciona, vira e aumenta ou diminui qualquer objeto. Essas três letras são o coração do Blender e vão acompanhar o aluno em todas as aulas seguintes do curso.

O objetivo do mês é chegar a um modelo pronto para imprimir, e tudo começa aqui: sem controlar a câmera e sem mover objetos com segurança, nada do que vem depois funciona. A aula termina com um pequeno desafio que junta navegação e transformação, para o aluno sentir que já consegue "comandar" a cena.`,
  materiais: [
    `Computadores com o Blender instalado e aberto (um por aluno), de preferência com mouse de três botões`,
    `Projetor ou tela grande para o professor demonstrar cada movimento ao vivo`,
    `Mouse com botão do meio (scroll que clica) em cada estação — essencial para a navegação`,
    `Arquivo de exemplo "cena-navegacao.blend" com três ou quatro objetos espalhados (cubo, esfera, cone) para os alunos praticarem`,
    `Folha impressa de "atalhos da aula" com os ícones do mouse e as teclas G, R e S`,
    `Quadro branco ou slide com a imagem dos três eixos coloridos (X vermelho, Y verde, Z azul)`,
  ],
  conceitosChave: [
    `Orbitar — girar a câmera ao redor da cena para ver o objeto por outros ângulos; faz-se segurando o botão do meio do mouse.`,
    `Zoom — aproximar ou afastar a visão da cena, feito girando a rodinha (scroll) do mouse.`,
    `Deslocar (Pan) — arrastar a cena para os lados sem girar, segurando Shift mais o botão do meio do mouse.`,
    `Mover (G) — atalho "Grab" que pega o objeto selecionado e o desloca para qualquer posição.`,
    `Girar (R) — atalho "Rotate" que vira o objeto em torno de um eixo.`,
    `Escalar (S) — atalho "Scale" que aumenta ou diminui o tamanho do objeto.`,
    `Eixos X, Y e Z — as três direções do espaço 3D, mostradas em vermelho, verde e azul; servem para travar um movimento numa única direção.`,
  ],
  treinamento: `## O que o professor precisa saber

No Blender, navegar é diferente de modelar: navegar move a sua câmera (o seu olhar), não o objeto. Toda a navegação gira em torno do botão do meio do mouse (o scroll que também clica). Memorize estes três gestos antes da aula: segurar o botão do meio e arrastar para orbitar; girar a rodinha para zoom; segurar Shift mais o botão do meio para deslocar. Se algum computador tiver mouse sem botão do meio, ative em Edit > Preferences > Input a opção "Emulate 3 Button Mouse", que faz o atalho Alt mais botão esquerdo substituir o botão do meio. As transformações usam letras: G move, R gira, S escala. Depois de apertar a letra, o aluno mexe o mouse e clica com o botão esquerdo para confirmar, ou aperta Esc para cancelar. Apertar X, Y ou Z logo depois da letra trava o movimento naquele eixo. Teste tudo isso uma vez no seu computador antes de entrar na sala.

## Passo a passo da aula

10 min — Aquecimento e revisão. Pergunte o que eles lembram da aula passada: o que é o cubo do meio da tela? Para que serve a barra de cima? Abra o arquivo "cena-navegacao.blend" no projetor. Diga que hoje vão aprender a "andar" dentro da cena e a comandar os objetos.

15 min — Conteúdo novo guiado. No projetor, demonstre devagar, pedindo que repitam em silêncio só olhando primeiro. Mostre orbitar (segure o botão do meio e arraste, a cena gira). Mostre zoom (gire a rodinha). Mostre deslocar (Shift mais botão do meio). Aponte o canto superior direito: o pequeno eixo colorido (gizmo) também orbita se clicado. Mostre as teclas: clique num objeto com o botão esquerdo para selecionar (fica com contorno laranja), aperte G e mexa o mouse, clique para confirmar; depois R para girar; depois S para escalar. Mostre que apertar X depois de G trava o movimento no eixo vermelho.

25 min — Mão na massa. Agora cada aluno no seu Blender. Passe pelas estações. Tarefa: orbitar até ver o cone por baixo; dar zoom no cubo; deslocar a cena para centralizar a esfera; depois selecionar cada objeto e mover, girar e escalar livremente. Circule corrigindo a postura da mão no mouse.

10 min — Desafio e compartilhar. Lance o desafio: "empilhe os três objetos um sobre o outro usando só G, R e S, sem deixar nenhum flutuando". Quem terminar gira a cena para mostrar o resultado à turma.

## Como explicar de forma clara

Use comparações do dia a dia. Orbitar é "andar em volta de uma estátua no museu". Zoom é "chegar o rosto perto para ver um detalhe". Deslocar é "empurrar uma folha de papel sobre a mesa sem virá-la". Para as teclas, crie um bordão: "G de grudar e arrastar, R de rodar, S de stretchar (esticar)". Repita que, depois da letra, o mouse vira a "mão mágica" e o clique esquerdo "carimba" o resultado no lugar. Reforce sempre: navegar mexe no olhar, transformar mexe no objeto. Adolescentes gostam de ter controle, então diga que eles agora são "donos da câmera".

## Erros comuns e como ajudar

O erro mais frequente é confundir mover a câmera com mover o objeto: o aluno aperta G achando que vai orbitar e sai arrastando o cubo. Mostre a diferença lado a lado. Outro erro é apertar a letra e não saber que precisa clicar para confirmar, deixando o objeto "preso" ao mouse; ensine o Esc para cancelar e o botão esquerdo para confirmar. Muitos esquecem de selecionar primeiro (sem o contorno laranja, G não faz nada). Alguns dão zoom demais e "atravessam" o objeto ou ficam perdidos no preto; ensine o atalho da tecla Home, que enquadra tudo na tela de novo, como um botão de "voltar para casa". Por fim, mouses de notebook (touchpad) dificultam muito; nesse caso ative a emulação de três botões nas preferências antes da aula começar.`,
  exercicios: [
    {
      titulo: `Passeio pela cena`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Aquecimento individual. Garanta que todos estão com o arquivo de exemplo aberto e a mão correta no mouse antes de começar.`,
      atividade: `No arquivo "cena-navegacao.blend", use só a navegação para cumprir três tarefas: orbite até ver o cone por baixo, dê zoom para chegar bem perto do cubo e desloque a cena para deixar a esfera no centro da tela. Não selecione nem mova nenhum objeto.`,
      gabarito: `O aluno deve usar o botão do meio do mouse para orbitar, a rodinha (scroll) para o zoom e Shift mais botão do meio para deslocar. Os objetos continuam exatamente nos lugares originais, pois apenas a câmera se moveu. Se o aluno se perder, ele aperta Home para reenquadrar tudo.`,
    },
    {
      titulo: `As três letras mágicas`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Reforce a ordem: clicar para selecionar, apertar a letra, mexer o mouse, clicar para confirmar. Lembre do Esc para cancelar.`,
      atividade: `Selecione o cubo (contorno laranja) e faça, em ordem: mova-o para a direita com a tecla G, gire-o com a tecla R e aumente o tamanho dele com a tecla S. Confirme cada transformação com o clique esquerdo.`,
      gabarito: `O cubo termina deslocado para a direita, virado em algum ângulo e maior que o tamanho original. O aluno deve ter selecionado antes (sem seleção, as teclas não funcionam) e confirmado cada passo com o botão esquerdo. Se algo ficou grudado no mouse, foi porque ele não clicou para confirmar.`,
    },
    {
      titulo: `Travando no eixo certo`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor que apertar X, Y ou Z depois de G ou S trava o movimento. Deixe o aluno tentar antes de ajudar.`,
      atividade: `Mova a esfera somente para cima, sem deixar que ela ande para os lados. Depois, escale o cone somente na altura, deixando-o mais alto e fino. Use as teclas de eixo para conseguir isso.`,
      gabarito: `Para subir a esfera reto, aperta-se G e depois Z (eixo azul, vertical): a esfera só sobe. Para esticar o cone só na altura, aperta-se S e depois Z. O eixo Z é o azul, que aponta para cima. Se o aluno errar o eixo, a peça vai para a direção errada e ele percebe na hora.`,
    },
    {
      titulo: `Mestre da câmera em dupla`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas. Um aluno dá os comandos em voz alta, o outro executa; depois trocam. Estimule o uso dos nomes corretos (orbitar, zoom, deslocar).`,
      atividade: `Em dupla, o "diretor" pede ângulos ("mostre o cubo por cima", "aproxime a esfera", "veja o cone por trás") e o "piloto" navega até conseguir, sem mover nenhum objeto. Depois invertam os papéis.`,
      gabarito: `O piloto deve alcançar cada ângulo pedido usando apenas orbitar, zoom e deslocar, sem nunca selecionar ou transformar objetos. A dupla acerta quando consegue chegar a qualquer ponto de vista pedido em poucos segundos e usando os nomes corretos dos movimentos.`,
    },
    {
      titulo: `Torre de três andares`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `É o desafio final que junta tudo. Circule ajudando a alinhar as peças. No fim, peça que cada aluno orbite a cena para mostrar a torre à turma (roda de compartilhamento).`,
      atividade: `Usando navegação para conferir os ângulos e as teclas G, R e S para posicionar, empilhe o cubo, a esfera e o cone um sobre o outro formando uma torre, sem deixar nenhuma peça flutuando ou atravessando a outra. Gire a cena para conferir o alinhamento por vários lados.`,
      gabarito: `A torre tem as três peças encostadas e centralizadas, sem espaços flutuando nem peças afundadas uma na outra. O aluno deve ter usado G para empilhar (muitas vezes travando no eixo Z), orbitado para conferir o alinhamento por mais de um lado e, se quis ajustar tamanho, usado S. Pequenas imperfeições são aceitáveis; o essencial é navegar com confiança e usar as três teclas com intenção.`,
    },
  ],
};
