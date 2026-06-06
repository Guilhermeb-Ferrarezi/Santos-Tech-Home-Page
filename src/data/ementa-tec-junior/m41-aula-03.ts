import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Pintando direto no modelo com vertex color",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a pintar cores diretamente nos pontos do modelo com vertex color, dando cor a cada cantinho do item sem precisar de nenhuma imagem.`,
  descricao: `Até agora, no Maya, as crianças aprenderam a montar a forma do item (Aula 2). Hoje o item ganha vida com cor! A técnica de hoje se chama vertex color, ou cor de vértice. Em vez de pintar com uma imagem colada por fora (como um adesivo), a gente pinta a cor diretamente nos pontinhos do modelo. Esses pontinhos são os vértices, os mesmos "cantinhos" que aparecem quando a gente liga o modo de seleção de vértices.

A mágica do vertex color é simples e poderosa: cada vértice guarda uma cor própria. Quando dois vértices vizinhos têm cores diferentes, o Maya mistura essas cores no meio, criando um degradê suave. É como pingar tinta em pontos de um papel molhado e ver as cores se encontrarem. Por isso, com pouquíssimos cliques, o aluno consegue deixar um item bem colorido e divertido, sem precisar desenhar nada à mão.

Essa técnica é perfeita para itens da loja do Roblox porque é leve e rápida: não usa arquivos de imagem pesados, então o item carrega rapidinho no jogo. Na Maya, a gente usa o menu Color > Paint Vertex Color Tool (ou a opção Apply Color) para escolher uma cor e pintar. O aluno seleciona faces ou vértices, escolhe a cor no seletor e aplica. Em poucos minutos, um modelo cinza vira um modelo cheio de personalidade.

Hoje é uma aula de descoberta e experimentação. O objetivo não é fazer o item perfeito ainda, e sim entender como a cor "gruda" nos pontos e fazer os primeiros testes coloridos. Erros e cores estranhas são parte da brincadeira: cada teste ensina como o vertex color funciona. Nas próximas aulas, esse conhecimento vira a base para escolher materiais e deixar o item pronto para a loja.`,
  materiais: [
    `Computadores com o Maya já aberto e o modelo da Aula 2 carregado em cada máquina`,
    `Projetor ou TV grande ligada ao computador do professor para mostrar cada clique`,
    `Dois exemplos prontos: um item sem cor (cinza) e o mesmo item com vertex color, lado a lado`,
    `Folha impressa com o passo "selecionar, escolher cor, aplicar" e um espaço para o aluno colorir à mão`,
    `Lápis de cor ou giz de cera para a atividade de planejar as cores no papel antes de pintar no Maya`,
    `Mouse com scroll funcionando em cada computador (ajuda muito a girar e dar zoom no modelo)`,
  ],
  conceitosChave: [
    `Vértice — é cada pontinho do modelo, o cantinho onde as linhas se encontram.`,
    `Vertex color — é pintar a cor direto nos vértices, sem usar nenhuma imagem.`,
    `Degradê — quando duas cores vizinhas se misturam no meio e formam uma passagem suave.`,
    `Seletor de cor — a janelinha colorida onde você escolhe qual cor vai usar.`,
    `Aplicar (Apply Color) — o botão que "carimba" a cor escolhida na parte selecionada.`,
    `Face — é cada pedacinho de superfície do modelo, como um lado de uma caixinha.`,
    `Componente — é o nome geral para vértice, face ou aresta, as partes que formam o modelo.`,
  ],
  treinamento: `## O que o professor precisa saber

Vertex color é pintar a cor diretamente nos pontos (vértices) do modelo, sem precisar de imagem. Cada vértice guarda uma cor, e o Maya mistura as cores dos vértices vizinhos, criando degradês. Você não precisa ser artista: o objetivo de hoje é a criança descobrir que dá para colorir clicando. No Maya, o caminho principal é o menu superior Color (visível no conjunto de menus de Modeling) ou clicar com o botão direito sobre o objeto e escolher o modo de seleção. As duas funções que vamos usar são Color > Apply Color (carimba uma cor na seleção) e Color > Paint Vertex Color Tool (pinta passando o mouse, como um pincel). Antes da aula, abra o Maya, deixe o modelo da Aula 2 na tela e teste você mesmo aplicar uma cor: isso evita surpresas. Garanta que o conjunto de menus no canto superior esquerdo esteja em "Modeling", senão o menu Color não aparece.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Mostre os dois exemplos lado a lado, o item cinza e o item colorido. Pergunte: "Como será que essa cor foi parar aí sem nenhum desenho?" Relembre o que é vértice ligando o modo de seleção: clique com o botão direito sobre o modelo e, sem soltar, arraste até "Vertex"; os pontinhos aparecem. Solte e mostre que cada pontinho é um vértice.

Conteúdo novo guiado (15 min): No projetor, com o objeto selecionado, vá ao menu Color (parte de cima) e clique em Apply Color. Abra o seletor de cor (clique no quadradinho colorido), escolha uma cor bem viva e clique em Apply e depois em Close. O modelo inteiro fica colorido. Agora mostre como pintar só uma parte: botão direito no modelo, escolha "Face", clique numa face, repita o Color > Apply Color com outra cor. Mostre também o Paint Vertex Color Tool: ele pinta passando o mouse por cima, como um pincel.

Mão na massa (25 min): Cada aluno aplica uma cor no modelo inteiro, depois troca para o modo Face e pinta pelo menos três partes com cores diferentes. Incentive testar o degradê: pinte um vértice de uma cor e o vizinho de outra para ver a mistura. Circule pela sala ajudando quem travou.

Desafio + compartilhar (10 min): Cada aluno mostra o item colorido na tela e diz qual foi sua cor favorita e por quê. Tire um print da tela de cada um.

## Como explicar para crianças

Use a analogia da caneta mágica: "Cada pontinho do seu modelo é como um copinho que guarda uma cor. Quando você pinta um pontinho de azul e o vizinho de amarelo, o Maya mistura e nasce um verdinho no meio, igual tinta!" Diga que não existe cor errada hoje, só cor diferente. Lembre que para escolher onde pintar, primeiro a gente seleciona (clica) e depois aplica (carimba). Mostre devagar e deixe a criança clicar antes de você seguir.

## Erros comuns e como ajudar

O erro mais comum é a cor não aparecer: quase sempre o aluno aplicou a cor mas o Maya está mostrando o material padrão; peça para ele pressionar a tecla "5" (modo sólido) e ativar a exibição de vertex color, ou explique que clicou em Close sem clicar em Apply. Outro erro é selecionar o objeto todo quando queria pintar só uma face: lembre de trocar o modo de seleção com o botão direito para "Face". Alguns clicam fora do modelo e perdem a seleção; oriente clicar de novo no item. Se a cor ficou toda igual sem querer, é porque o modelo inteiro estava selecionado: desfaça com Ctrl+Z e selecione só a parte desejada. Por fim, se a criança não acha o menu Color, confira se o conjunto de menus está em "Modeling".`,
  exercicios: [
    {
      titulo: `Caça aos vértices`,
      tipo: `Aquecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Peça que cada aluno ligue o modo de seleção de vértices no próprio modelo. Mostre no projetor: botão direito sobre o objeto, arrastar até "Vertex" e soltar. Confirme que todos veem os pontinhos.`,
      atividade: `Clique com o botão direito em cima do seu modelo, arraste até a palavra "Vertex" e solte. Conte em voz alta quantos pontinhos (vértices) você consegue ver na frente do seu item.`,
      gabarito: `O aluno ativa o modo Vertex e os pontinhos aparecem destacados no modelo. O número exato varia conforme o item de cada criança; o que importa é ele identificar que cada cantinho é um vértice e conseguir vê-los e contá-los.`,
    },
    {
      titulo: `Pintando o item inteiro`,
      tipo: `Prática guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza passo a passo: selecionar o objeto, menu Color > Apply Color, abrir o seletor de cor, escolher uma cor viva, clicar em Apply e depois Close. Acompanhe pelo projetor e espere a turma acompanhar cada clique.`,
      atividade: `Selecione o seu modelo inteiro. Vá no menu Color lá em cima e clique em Apply Color. Escolha a sua cor favorita no seletor, clique em Apply e depois em Close. Veja o item todo ganhar cor!`,
      gabarito: `O modelo inteiro fica pintado com a cor escolhida pelo aluno. O passo decisivo é clicar em Apply antes de Close. Se a cor não apareceu, o aluno provavelmente fechou sem aplicar ou precisa pressionar a tecla "5" para ver o modo sólido com a cor.`,
    },
    {
      titulo: `Três cores em três partes`,
      tipo: `Mão na massa`,
      tempo: `10 minutos`,
      guiaProfessor: `Ensine a trocar o modo de seleção para "Face" (botão direito no modelo, arrastar até Face). O aluno clica numa face, aplica uma cor, depois repete em outra face com outra cor. Reforce: selecionar primeiro, aplicar depois.`,
      atividade: `Troque o modo de seleção para "Face". Clique numa parte do seu item e pinte com uma cor usando Color > Apply Color. Repita em outras duas partes com cores diferentes. No fim, seu item deve ter pelo menos três cores.`,
      gabarito: `O item apresenta no mínimo três faces com cores distintas. O aluno demonstra que sabe trocar para o modo Face, selecionar uma face por vez e aplicar uma cor diferente em cada uma. Cada criança terá combinações próprias de cores e faces.`,
    },
    {
      titulo: `O degradê mágico`,
      tipo: `Experimento`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o efeito de mistura: o aluno pinta um vértice de uma cor e o vértice vizinho de outra. O Maya mistura as duas no meio. Use a analogia da tinta no papel molhado. Deixe-os testar duas ou três combinações.`,
      atividade: `Volte ao modo "Vertex". Pinte um pontinho de uma cor (por exemplo, azul) e o pontinho vizinho de outra cor (por exemplo, amarelo). Olhe bem o meio: que cor nova apareceu na mistura?`,
      gabarito: `Entre os dois vértices surge um degradê, uma passagem suave entre as duas cores. No exemplo de azul com amarelo, aparece um tom esverdeado no meio. O aluno conclui que vértices vizinhos com cores diferentes fazem o Maya misturar as cores.`,
    },
    {
      titulo: `Meu plano de cores`,
      tipo: `Desafio e compartilhar`,
      tempo: `9 minutos`,
      guiaProfessor: `Peça que cada aluno finalize uma combinação de cores que goste e explique a escolha. Depois, na folha impressa, colorir à mão como imaginou o item. Tire um print da tela de cada um para o portfólio do mês.`,
      atividade: `Deixe seu item com a combinação de cores que você mais gostou. Na folha de papel, pinte com lápis de cor como ficou o seu item. Depois, conte para a turma: qual foi sua cor favorita e por que você a escolheu?`,
      gabarito: `O aluno apresenta um item colorido no Maya com cores escolhidas por ele, reproduz a ideia no papel e justifica a escolha com uma razão simples (por exemplo, "escolhi vermelho porque deixa o item forte"). Não há resposta única: avalia-se a coerência entre o que foi pintado na tela e no papel e a participação ao compartilhar.`,
    },
  ],
};
