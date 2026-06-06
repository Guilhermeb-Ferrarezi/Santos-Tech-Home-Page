import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Blender 3D",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança conhece a tela do Blender, aprende a girar, mover e dar zoom na cena 3D, escolhe o item que vai criar para a loja e adiciona seu primeiro cubo no espaço de trabalho.`,
  descricao: `Nesta aula a turma abre o Blender pela primeira vez para começar a maior aventura do mês: criar um item de verdade para a loja do Roblox. Até agora as crianças já treinaram uma inteligência artificial e brincaram com voxels; agora elas entram num programa de modelagem 3D profissional, o mesmo que muitos artistas de cinema e de jogos usam. É um momento especial, e a primeira impressão precisa ser de "uau, eu vou conseguir mexer nisso!".

O Blender abre com uma tela cheia de botões, e isso pode assustar. Por isso o foco de hoje não é modelar nada complicado, e sim deixar a criança confortável em três movimentos mágicos: girar a câmera em volta da cena, mover (deslizar) a vista para os lados e dar zoom para perto ou para longe. Quem domina esses três movimentos para de se sentir perdido no espaço 3D e passa a navegar como quem gira um brinquedo na mão para ver todos os lados.

No centro da tela existe um objeto chamado cena 3D, onde tudo acontece. Hoje a criança aprende que existem três coisas ali desde o começo: um objeto (geralmente um cubo), uma câmera e uma luz. Ela vai apagar o que estiver sobrando e adicionar o seu próprio cubo, que será o "bloco de massinha" inicial do item dela. Antes disso, cada aluno escolhe e desenha rapidamente o que quer criar para a loja: um chapéu, uma espada, uma coroa, um donut, uma poção. Essa escolha vai guiar todas as próximas sete aulas.

O objetivo de hoje não é o item ficar bonito, e sim a criança sair da aula sabendo girar a cena sem travar e tendo o seu primeiro cubo plantado na tela, com a ideia do item dela na cabeça. É a fundação de tudo o que vem pela frente.`,
  materiais: [
    `Computadores (1 por criança) com o Blender já instalado e aberto na tela inicial de modelagem, de preferência a versão mais recente em português ou inglês.`,
    `Mouse com roda (scroll) para cada computador, pois girar e dar zoom no Blender fica muito mais fácil com mouse do que com touchpad.`,
    `Projetor ou TV grande para o professor mostrar cada clique e cada movimento da câmera passo a passo.`,
    `Exemplos prontos de itens 3D simples feitos pelo professor (um chapéu, uma espada e uma coroa), salvos em arquivos .blend para abrir e mostrar.`,
    `Folhas de papel e lápis de cor para cada aluno desenhar o item que vai criar para a loja.`,
    `Uma folha impressa com o desenho da tela do Blender, com os nomes das áreas (Viewport, Outliner, painel N), para o professor consultar.`,
    `Adesivos de "Explorador 3D" para premiar quem conseguir girar, mover e dar zoom sozinho.`,
  ],
  conceitosChave: [
    `Blender — é o programa de computador onde a gente cria objetos em 3D, como se fosse uma massinha digital.`,
    `Cena 3D (Viewport) — é o espaço grande no meio da tela onde os objetos ficam e onde a gente pode girar em volta deles.`,
    `Cubo — é o objeto em forma de caixinha que aparece no começo; ele é o "bloco de massinha" que a gente vai moldar.`,
    `Girar a câmera (orbitar) — é rodar a vista em volta do objeto para ver ele por cima, por baixo e dos lados.`,
    `Mover a vista (deslizar) — é empurrar a câmera para os lados sem girar, como arrastar uma folha sobre a mesa.`,
    `Zoom — é chegar perto ou ir para longe do objeto, como uma lupa que aproxima e afasta.`,
    `Outliner — é a listinha no canto que mostra os nomes de tudo que existe na cena: o cubo, a câmera e a luz.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender para dar esta aula; precisa apenas dominar três movimentos da câmera e saber adicionar um cubo. A câmera do Blender se controla com o botão do MEIO do mouse (a roda apertada). Apertar a roda e mover gira a câmera em volta da cena (chamamos isso de orbitar). Segurar SHIFT junto com a roda apertada e mover desliza a vista para os lados (chamamos de pan). Rolar a roda para frente e para trás dá zoom. Decore esses três: roda apertada = girar; SHIFT + roda apertada = mover; rolar a roda = zoom. No canto superior direito da cena existe um pequeno "boneco" de eixos coloridos (o gizmo); clicar nas bolinhas vermelha, verde e azul também gira a vista, e é o plano B para quem não tem mouse com roda. Ao abrir, o Blender já traz um cubo, uma câmera e uma luz. Para apagar algo, clique no objeto (ele fica com contorno laranja) e aperte X ou Delete. Para adicionar um cubo novo, use o menu "Add" (Adicionar) no topo da cena, escolha "Mesh" (Malha) e depois "Cube" (Cubo). Treine isso uma vez em casa e estará pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento: mostre no projetor um brinquedo 3D girando (ou gire um objeto real na mão, como um cubo mágico). Pergunte: "como vocês veem o outro lado de um brinquedo?". Resposta: girando. Diga que hoje vão girar coisas dentro do computador. Distribua papel e peça que cada um desenhe o item dos sonhos para a loja.

15 min - Conteúdo novo guiado: no projetor, abra o Blender. Mostre as áreas principais: a cena grande no meio (Viewport), a listinha no canto direito (Outliner) e os botões de cima. Demonstre devagar os três movimentos: aperte a roda do mouse e gire; segure SHIFT e a roda para deslizar; role a roda para dar zoom. Repita cada um três vezes nomeando em voz alta. Depois clique no cubo (fica laranja), aperte X e confirme em "Delete" para apagá-lo. Vá no menu "Add", "Mesh", "Cube" e mostre o cubo novo nascendo no centro.

25 min - Mão na massa: cada criança repete no próprio computador. Primeiro só os três movimentos: peça que girem em volta do cubo, depois deslizem, depois deem zoom. Circule pela sala corrigindo a mão no mouse. Depois oriente: apaguem o cubo com X e adicionem um novo pelo menu "Add". Celebre cada cubo que nascer.

10 min - Desafio e compartilhar: desafie a turma a girar a vista até olhar o cubo exatamente por cima e depois exatamente por baixo. Faça uma roda rápida onde cada um mostra seu cubo na tela e diz em voz alta qual item vai criar para a loja.

## Como explicar para crianças

Use a analogia do brinquedo na mão: "girar a câmera é como segurar seu boneco e virar ele para ver as costas". Chame o zoom de "lupa mágica" e o deslizar de "empurrar a mesa". Chame o cubo de "bloco de massinha digital", porque nas próximas aulas a gente vai esticar e moldar ele. Evite palavras difíceis: diga "girar" em vez de "orbitar" e "esprema a roda" em vez de "pressione o botão do meio". Deixe a criança mexer com as próprias mãos enquanto você fala; aprender a girar é coisa de dedo, não de explicação longa.

## Erros comuns e como ajudar

O erro mais comum é usar o botão errado do mouse: a criança aperta o botão esquerdo e arrasta, e nada gira. Mostre de novo que é a RODA apertada. Quem usa touchpad sofre; nesses casos ensine o gizmo dos eixos no canto superior direito como atalho para girar. Outro erro é ficar "perdido" depois de dar muito zoom e sumir com o cubo; ensine o botão Home do teclado, que reenquadra tudo na tela. Algumas crianças apagam a câmera ou a luz sem querer; tranquilize, mande apertar Ctrl+Z para desfazer. Por fim, ao adicionar o cubo, alguns esquecem de ir em "Mesh" antes de "Cube"; mostre o caminho completo Add, Mesh, Cube com calma.`,
  exercicios: [
    {
      titulo: `Os Três Movimentos Mágicos`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Apresente como os "três poderes" para nunca mais se perder no 3D. Faça junto no projetor, um movimento de cada vez, esperando todos repetirem antes de passar ao próximo.`,
      atividade: `No Blender, treine: 1) aperte a roda do mouse e gire em volta do cubo; 2) segure SHIFT com a roda apertada e deslize a vista; 3) role a roda para dar zoom de perto e de longe.`,
      gabarito: `Acertou quando a criança consegue, sozinha, girar em volta do cubo, deslizar a vista para os lados e aproximar e afastar com o zoom. Se nada girar, ela está usando o botão errado: lembre que é a RODA apertada, não o botão esquerdo.`,
    },
    {
      titulo: `Olhe Por Cima e Por Baixo`,
      tipo: `Desafio na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Lance como uma brincadeira de "espião": ver o cubo de ângulos que ninguém vê no dia a dia. Mostre o gizmo de eixos coloridos no canto como ajuda para quem travar.`,
      atividade: `Gire a câmera até olhar o cubo exatamente por cima (vista de cima). Depois gire até olhar exatamente por baixo. Por último, pare numa vista em que dê para ver três lados do cubo ao mesmo tempo.`,
      gabarito: `Acertou quando consegue parar a vista de cima (vendo só a face de cima do cubo), depois a de baixo, e por fim um ângulo em quina mostrando três faces. Se ficar perdida, aperte Home para reenquadrar e tente de novo.`,
    },
    {
      titulo: `Caça às Partes da Tela`,
      tipo: `Roda de observação`,
      tempo: `7 minutos`,
      guiaProfessor: `Reúna a turma de frente para o projetor com o Blender aberto. Conduza como uma caça ao tesouro, apontando cada área e pedindo que repitam o nome em voz alta.`,
      atividade: `Encontrem na tela e apontem: a cena grande do meio (Viewport), a listinha de nomes no canto (Outliner) e o menu "Add" lá em cima. Cada um aponta na sua tela quando achar.`,
      gabarito: `Acertou quando a criança aponta corretamente a cena 3D no centro, a lista do Outliner no canto direito e o menu "Add" no topo. No Outliner devem aparecer pelo menos três nomes: o cubo, a câmera e a luz.`,
    },
    {
      titulo: `Desenhe Meu Item da Loja`,
      tipo: `Desenho / papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Explique que o desenho será o "mapa" que vai guiar as próximas aulas. Dê exemplos simples: chapéu, espada, coroa, donut, poção. Reforce formas simples, sem muitos detalhes.`,
      atividade: `Desenhe numa folha o item que você quer criar para a loja. Escreva o nome dele embaixo e marque com setas quais partes são quadradas ou redondas, pensando em como elas viriam de um cubo.`,
      gabarito: `Acertou quando o desenho mostra um item de forma simples, com nome escrito, e a criança consegue dizer em voz alta o que escolheu. Não há item "errado"; o importante é ser simples o bastante para começar de um cubo.`,
    },
    {
      titulo: `Nasça, Cubo!`,
      tipo: `Desafio criativo (avançado)`,
      tempo: `10 minutos`,
      guiaProfessor: `Para quem já domina os movimentos. Convide a criança a apagar o cubo inicial e fazer nascer um novo sozinha pelo menu, e depois a explicar o caminho a um colega, virando "professora por um minuto".`,
      atividade: `Clique no cubo (ele fica laranja) e aperte X para apagar. Depois vá no menu "Add", escolha "Mesh" e depois "Cube" para criar um cubo novo no centro. Gire em volta dele e mostre a um colega o caminho que usou.`,
      gabarito: `Acertou quando o cubo antigo some, um cubo novo nasce no centro pelo caminho Add, Mesh, Cube, e a criança explica o passo a passo com as próprias palavras. Se apagou a câmera ou a luz sem querer, basta apertar Ctrl+Z para desfazer.`,
    },
  ],
};
