import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "De volta ao MagicaVoxel",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Reabrir o MagicaVoxel e reaquecer o uso das ferramentas Attach, Erase e Paint, girando e dando zoom na cena enquanto adicionam e apagam cubinhos numa grelha pequena.`,
  descricao: `Esta é a primeira aula do Ano 3 com o MagicaVoxel, e o objetivo é reencontrar uma ferramenta que as crianças já conhecem dos anos anteriores. Em vez de começar do zero, esta aula é um reaquecimento: abrimos o programa, olhamos para a tela juntos e relembramos onde fica cada coisa. É como reabrir uma caixa de LEGO favorita e lembrar como as peças se encaixam antes de construir algo grande.

O MagicaVoxel é um programa de modelagem 3D em que tudo é feito com cubinhos chamados voxels. Pense num voxel como um pixel em três dimensões: assim como uma imagem na tela é feita de pequenos quadradinhos, um modelo no MagicaVoxel é feito de pequenos cubinhos empilhados. As crianças vão construir personagens e objetos colocando esses cubinhos um a um, como quem monta com blocos de montar.

Nesta aula, o foco está em três ferramentas básicas e nos controlos de câmara. As três ferramentas são: Attach (colar um cubinho), Erase (apagar um cubinho) e Paint (pintar um cubinho com outra cor da paleta). Os controlos de câmara permitem girar a cena para ver o modelo de todos os lados e dar zoom para chegar perto ou afastar. Dominar a câmara é tão importante quanto as ferramentas, porque sem girar a vista a criança não consegue construir nas costas nem por baixo do modelo.

O professor não precisa ser especialista no MagicaVoxel para dar esta aula. O segredo é demonstrar no projetor, passo a passo, e deixar as crianças repetirem no próprio computador. Como esta aula é leve e exploratória, é o momento perfeito para o professor também se reacostumar com o programa junto com a turma, criando um clima de descoberta partilhada.`,
  materiais: [
    `Computadores com o MagicaVoxel já instalado e aberto, um por criança`,
    `Projetor ou tela grande ligada ao computador do professor para demonstrar`,
    `Um modelo de exemplo simples já pronto (por exemplo, um coração ou uma árvore de cubinhos) para mostrar o que dá para fazer`,
    `Rato (mouse) com roda de rolagem para cada criança, pois facilita muito o zoom e o girar`,
    `Folhas de papel quadriculado e lápis de cor para desenhar ideias antes de construir`,
    `Cartazes ou slides com os nomes das três ferramentas (Attach, Erase, Paint) e os ícones`,
  ],
  conceitosChave: [
    `Voxel — um cubinho mágico; é como um LEGO dentro do computador que junta com outros para formar tudo.`,
    `Paleta — a caixinha de cores que fica do lado da tela, de onde escolhemos a cor do cubinho.`,
    `Attach (Colar) — a ferramenta que cola um cubinho novo na cena quando você clica.`,
    `Erase (Apagar) — a ferramenta borracha que apaga o cubinho em que você clica.`,
    `Paint (Pintar) — a ferramenta pincel que troca a cor de um cubinho que já existe.`,
    `Girar a câmara — segurar o botão direito do rato e mexer para dar a volta no modelo e ver todos os lados.`,
    `Zoom — usar a roda do rato para chegar perto ou afastar do modelo, como uma lupa.`,
  ],
  treinamento: `## O que o professor precisa saber

O MagicaVoxel é gratuito e roda direto, sem instalar nada complicado. Ao abrir, você vê quatro áreas principais. No centro fica a janela 3D com uma grelha (o chão onde construímos). À esquerda fica a barra de ferramentas com Attach, Erase, Paint, entre outras. Acima ou ao lado fica a paleta de cores (muitos quadradinhos coloridos). À direita ficam os painéis de projeto e de cor. Você não precisa entender tudo: para esta aula bastam as três ferramentas e a câmara.

A câmara funciona assim: botão direito do rato pressionado e arrastar gira a cena; a roda do rato dá zoom; o botão do meio (apertar a roda) e arrastar move a vista de lado. Treine esses três movimentos antes da aula até ficarem automáticos, porque as crianças vão imitar você.

## Passo a passo da aula

10 min — Aquecimento e revisão. Reúna a turma diante do projetor. Pergunte: quem lembra o que é um voxel? Mostre o modelo de exemplo pronto e gire-o no ar usando o botão direito para todos verem todos os lados. Diga: hoje vamos reencontrar nossa ferramenta favorita e treinar colar, apagar e pintar cubinhos.

15 min — Conteúdo novo guiado. No projetor, mostre a tela do MagicaVoxel e aponte cada parte: a janela 3D no centro, a barra de ferramentas à esquerda, a paleta de cores. Clique na ferramenta Attach (ícone com um cubo sendo adicionado, no topo da barra esquerda) e cole alguns cubinhos clicando na grelha. Depois clique em Erase e apague um. Por fim clique em Paint, escolha uma cor na paleta e pinte um cubinho já colocado. Entre cada passo, gire a câmara com o botão direito e dê zoom com a roda, dizendo em voz alta o que está fazendo.

25 min — Mão na massa. Cada criança no próprio computador. Peça que coloquem 5 cubinhos com Attach, apaguem 2 com Erase e pintem os restantes com cores diferentes usando Paint. Circule pela sala. Incentive a girar a câmara para ver o modelo por trás. Quem terminar pode montar uma escadinha de cubinhos.

10 min — Desafio e compartilhar. Lance o desafio: montar uma letra (a inicial do nome) só com cubinhos. Depois, cada criança gira a própria câmara e mostra a criação para a turma.

## Como explicar para crianças

Use a analogia do LEGO o tempo todo: Attach é colar uma peça, Erase é tirar uma peça, Paint é pintar uma peça que já está lá. Para a câmara, diga que estamos a segurar o modelo na mão e a virá-lo para ver as costas dele, e que o zoom é uma lupa que aproxima. Fale devagar e nomeie sempre o botão que está clicando: agora estou no Attach, agora troquei para o Erase. Crianças de 5 a 9 anos aprendem vendo e repetindo, então demonstre e espere todos repetirem antes de seguir.

## Erros comuns e como ajudar

O erro mais comum é a criança continuar no Erase achando que está colando, e ficar a apagar tudo. Mostre como conferir qual ferramenta está acesa na barra. Outro erro é perder o modelo de vista ao girar demais ou dar zoom para longe: ensine a girar devagar e mostre que a roda traz de volta. Algumas crianças clicam fora da grelha e nada aparece; lembre que o cubinho só cola encostado noutro cubinho ou no chão. Por fim, há quem escolha a cor depois de pintar e fique confuso: reforce que primeiro clicamos na cor da paleta e só depois pintamos.`,
  exercicios: [
    {
      titulo: `Caça às partes da tela`,
      tipo: `Reconhecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça oralmente, apontando no projetor. É um aquecimento de observação, sem construir ainda. Peça para cada criança apontar no próprio monitor.`,
      atividade: `Olhe para a sua tela do MagicaVoxel e aponte com o dedo: onde está a janela 3D (o chão onde construímos)? Onde está a paleta de cores? Onde está a barra de ferramentas?`,
      gabarito: `A janela 3D é a área grande no centro com a grelha. A paleta de cores é o conjunto de quadradinhos coloridos ao lado da tela. A barra de ferramentas é a coluna de ícones à esquerda, onde ficam Attach, Erase e Paint.`,
    },
    {
      titulo: `Girar e dar zoom`,
      tipo: `Treino de câmara`,
      tempo: `5 minutos`,
      guiaProfessor: `Demonstre primeiro no projetor. Verifique se cada criança tem um rato com botão direito e roda. Circule e ajude quem perder o modelo de vista.`,
      atividade: `Use o botão direito do rato para girar a cena e ver o cubinho de exemplo de todos os lados. Depois use a roda do rato para dar zoom: chegue bem perto e depois afaste.`,
      gabarito: `Segurar o botão direito e arrastar faz a câmara girar em volta do modelo. Rolar a roda para frente aproxima (zoom in) e para trás afasta (zoom out). O modelo fica parado; quem se mexe é a câmara.`,
    },
    {
      titulo: `Colar e apagar cubinhos`,
      tipo: `Mão na massa`,
      tempo: `8 minutos`,
      guiaProfessor: `Confirme que cada criança selecionou a ferramenta certa antes de clicar. O erro clássico é ficar no Erase. Mostre como identificar a ferramenta acesa na barra.`,
      atividade: `Com a ferramenta Attach, cole 5 cubinhos na grelha. Depois troque para a ferramenta Erase e apague 2 deles. Quantos cubinhos sobraram?`,
      gabarito: `Sobraram 3 cubinhos. Attach cola um cubinho a cada clique; Erase apaga um cubinho a cada clique. 5 colados menos 2 apagados é igual a 3 restantes.`,
    },
    {
      titulo: `Pintar com a paleta`,
      tipo: `Mão na massa`,
      tempo: `7 minutos`,
      guiaProfessor: `Reforce a ordem: primeiro escolher a cor na paleta, depois pintar. Quem pinta antes de escolher a cor vai usar a cor errada. Ajude a achar a ferramenta Paint.`,
      atividade: `Você tem 4 cubinhos colados. Escolha uma cor na paleta e, com a ferramenta Paint, pinte 2 cubinhos dessa cor. Depois escolha outra cor e pinte os outros 2.`,
      gabarito: `Resultado: 2 cubinhos de uma cor e 2 de outra cor. O passo certo é sempre clicar primeiro na cor da paleta e só depois clicar com o Paint no cubinho. Paint só funciona em cubinho que já existe; ele não cria cubinho novo.`,
    },
    {
      titulo: `A inicial do meu nome em cubinhos`,
      tipo: `Desafio criativo`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o desafio final, mais difícil porque junta tudo. Sugira que desenhem a letra no papel quadriculado antes. Letras retas (como L, T, I, E) são mais fáceis que curvas (como S ou O). Elogie cada tentativa e peça para girarem a câmara ao mostrar.`,
      atividade: `Monte a primeira letra do seu nome usando só cubinhos com a ferramenta Attach. Use Erase para corrigir se errar e pinte a letra com a sua cor favorita usando Paint. No fim, gire a câmara e mostre a letra para a turma.`,
      gabarito: `Não há um resultado único: cada criança forma uma letra diferente. O esperado é que a letra seja reconhecível, feita de cubinhos encostados (sem cubinhos soltos no ar longe dos outros), pintada com uma cor escolhida na paleta, e que a criança consiga girar a câmara para apresentá-la. Letras retas como L, T, I e E costumam ficar mais nítidas.`,
    },
  ],
};
