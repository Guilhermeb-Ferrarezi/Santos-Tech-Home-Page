import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Movendo, girando e crescendo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a usar as ferramentas Move, Scale e Rotate do Roblox Studio para arrastar, redimensionar e girar o próprio modelo 3D, deixando-o no chão e virado para o lado certo do cenário.`,
  descricao: `Nas aulas anteriores a turma exportou o modelo do Blender e conseguiu trazê-lo para dentro do Roblox Studio. Mas, ao chegar, o modelo quase nunca aparece no lugar perfeito: às vezes ele fica flutuando no ar, às vezes está virado de costas, às vezes é gigante ou minúsculo. Esta aula resolve exatamente isso, ensinando as três ferramentas mágicas que todo criador de jogos usa o tempo todo: Move (mover), Scale (tamanho) e Rotate (girar).

A ideia central é simples e muito visual. Quando a criança seleciona o modelo e escolhe uma dessas ferramentas, aparecem setas e bolinhas coloridas em volta do objeto. Cada cor é um caminho diferente: vermelho, verde e azul. Ao clicar e arrastar essas setinhas, o modelo se mexe, cresce ou roda na frente dos olhos da criança. É como ter alças invisíveis para segurar e ajeitar o brinquedo dentro do mundo do jogo.

O foco do dia é a prática divertida e o controle do mouse. As crianças vão repetir o gesto de clicar na seta, segurar e arrastar até virar algo natural. O grande objetivo concreto é colocar o modelo apoiado no chão (sem flutuar e sem afundar) e virado para a frente, como um personagem pronto para começar a aventura. Não vamos ainda posicionar tudo no lugar exato do cenário, isso fica para a próxima aula. Aqui aprendemos só a controlar o modelo.

O professor deve priorizar a demonstração no projetor e o mão na massa. Cada criança vai errar, exagerar, deixar o modelo enorme ou de cabeça para baixo, e tudo bem: faz parte. Errar e desfazer com o atalho de desfazer é uma das melhores formas de aprender. Ao final, todos terão um modelo bem posicionado, no chão e olhando para a frente.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o modelo de cada criança já importado na cena`,
    `Projetor ou TV grande para o professor demonstrar onde clicar nas três ferramentas`,
    `Um exemplo pronto: uma cena com um modelo flutuando, torto e gigante para a turma consertar juntos`,
    `Cartão colorido impresso mostrando as três cores dos eixos (vermelho, verde, azul) e o que cada ferramenta faz`,
    `Mouse para cada aluno (arrastar com o mouse é muito mais fácil que com o touchpad)`,
    `Adesivos de "Mestre do Move", "Mestre do Scale" e "Mestre do Rotate" para premiar quem dominar cada ferramenta`,
    `Quadro branco para desenhar as setinhas coloridas e o atalho de desfazer (Ctrl + Z)`,
  ],
  conceitosChave: [
    `Ferramenta de transformação — um botão que dá alças coloridas para você mexer no modelo dentro do jogo.`,
    `Move (mover) — a ferramenta das setas que arrasta o modelo de um lugar para outro, igual a empurrar um carrinho.`,
    `Scale (tamanho) — a ferramenta das bolinhas que faz o modelo crescer ou encolher, como uma esponja na água.`,
    `Rotate (girar) — a ferramenta dos anéis que gira o modelo, como rodar um pião ou virar um boneco de frente.`,
    `Eixos coloridos — as três cores (vermelho, verde e azul) que mostram a direção em que o modelo vai se mover.`,
    `Selecionar — clicar no modelo uma vez para escolher quem vai obedecer às setinhas coloridas.`,
    `Desfazer — o atalho mágico Ctrl + Z que volta atrás quando algo deu errado, sem medo de estragar nada.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox para dar esta aula, mas precisa conhecer três botões. No topo do Roblox Studio, na aba "Home" (ou "Model"), existe um grupo de botões chamado "Tools" com quatro opções: "Select" (selecionar), "Move" (mover), "Scale" (escala/tamanho) e "Rotate" (girar). Antes da aula, importe o modelo de cada criança na cena e clique nele uma vez para conferir que está selecionável.

O segredo está nas cores. Ao escolher uma ferramenta e clicar no modelo, aparecem três eixos coloridos: vermelho (eixo X, esquerda e direita), verde (eixo Y, para cima e para baixo) e azul (eixo Z, para frente e para trás). No Move surgem setas; no Scale surgem bolinhas (alças); no Rotate surgem anéis. Arrastar a seta vermelha move na horizontal, a verde sobe e desce, a azul vai para frente e para trás. O atalho mais importante da aula é Ctrl + Z (desfazer): ensine-o logo no começo, porque ele dá segurança para a criança experimentar sem medo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Em roda, relembre que o modelo já chegou ao Roblox. Mostre no projetor a cena "bagunçada" de propósito: o modelo flutuando, torto e gigante. Pergunte: "O que está errado aqui?". As crianças vão apontar. Diga que hoje vamos aprender três ferramentas mágicas para consertar tudo isso.

Conteúdo novo guiado (15 min): No projetor, clique no modelo uma vez para selecionar. Clique no botão "Move" lá em cima. Mostre as setas coloridas e arraste devagar a seta vermelha, depois a verde (para descer o modelo até o chão), depois a azul. Em seguida clique em "Scale" e arraste uma bolinha de canto para mostrar o modelo crescendo e encolhendo. Por fim clique em "Rotate" e arraste um anel para virar o modelo de frente. A cada passo, repita o nome da ferramenta e a cor. Mostre o Ctrl + Z para desfazer.

Mão na massa (25 min): Cada criança trabalha no seu computador com o modelo já importado. Peça três missões em ordem: 1) usar o Move (seta verde) para descer o modelo até encostar no chão, sem flutuar nem afundar; 2) usar o Scale para deixar o modelo num tamanho bom, nem gigante nem minúsculo; 3) usar o Rotate para virar o modelo de frente. Circule pela sala ajudando. Elogie cada conquista e use os adesivos de "Mestre".

Desafio e compartilhar (10 min): Desafie a turma a deixar o modelo perfeito: no chão, em tamanho bom e olhando para a frente. Cada criança mostra o seu para o colega do lado e explica qual cor usou para descer ao chão. Encerre com uma roda rápida de "qual ferramenta foi a sua favorita".

## Como explicar para crianças

Use analogias com o corpo e com brinquedos. Move é "empurrar o carrinho" pelas setinhas. Scale é "a esponja que cresce na água ou encolhe quando seca". Rotate é "rodar o pião" ou "virar o boneco para ele olhar para frente". Para as cores, ensine: vermelho anda para os lados, verde sobe e desce (como um foguete), azul vai para frente e para trás. Lembre sempre: "se errar, é só apertar Ctrl + Z e voltar no tempo, como uma máquina do tempo".

## Erros comuns e como ajudar

A criança arrasta o modelo para longe e some da tela: ensine o atalho de desfazer (Ctrl + Z) ou role a roda do mouse para reaproximar a câmera. O modelo afunda no chão ou fica flutuando: lembre que a seta verde sobe e desce; basta arrastá-la um pouquinho de cada vez. A criança seleciona a peça errada ou desmarca tudo: peça para clicar uma vez no modelo de novo antes de mexer. O modelo vira gigante sem querer no Scale: explique que as bolinhas de canto crescem rápido; arraste pouquinho. A criança confunde as ferramentas: deixe o cartão colorido ao lado do teclado e aponte o botão certo no topo da tela.`,
  exercicios: [
    {
      titulo: `Caça às cores dos eixos`,
      tipo: `Observação guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `No projetor, selecione o modelo e ative o Move. Aponte cada seta colorida e pergunte para a turma o que ela faz. Use o cartão colorido como apoio. O objetivo é a criança decorar que vermelho é lado, verde é cima e baixo, azul é frente e trás.`,
      atividade: `Olhe as setas coloridas no modelo do professor. Diga em voz alta: qual cor faz o modelo andar para os lados? Qual cor faz ele subir e descer? Qual cor faz ele ir para frente?`,
      gabarito: `Vermelho move para os lados (esquerda e direita), verde move para cima e para baixo, azul move para frente e para trás. Acerto = associar cada cor à sua direção. A criança pode apontar no cartão se ainda não souber de cor.`,
    },
    {
      titulo: `Descendo o modelo até o chão`,
      tipo: `Prática no Roblox Studio`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como selecionar o modelo e clicar no botão "Move". A missão é usar a seta verde para descer o modelo até encostar no chão, sem flutuar e sem afundar. Circule ajudando quem arrasta demais. Relembre o Ctrl + Z.`,
      atividade: `No seu computador, clique no seu modelo e aperte o botão "Move" lá em cima. Pegue a seta verde e puxe devagar para baixo até o modelo encostar no chão, sem ficar voando.`,
      gabarito: `O modelo termina apoiado no chão, sem flutuar nem afundar. Acerto = usar a seta verde (eixo Y) com pequenos arrastos. Erro comum: puxar muito e afundar; basta arrastar a seta verde um pouco para cima de novo.`,
    },
    {
      titulo: `Crescer e encolher com o Scale`,
      tipo: `Experimentação livre`,
      tempo: `8 minutos`,
      guiaProfessor: `Ative o botão "Scale" e mostre as bolinhas (alças). Peça para a criança arrastar uma bolinha de canto para crescer e depois encolher, brincando. Em seguida, peça para deixar o modelo num tamanho bom, nem gigante nem minúsculo. Avise que as bolinhas de canto mudam rápido.`,
      atividade: `Aperte o botão "Scale". Arraste uma bolinha do cantinho para fora e veja o modelo crescer; arraste para dentro e veja encolher. Depois deixe o seu modelo num tamanho legal, nem gigante nem formiguinha.`,
      gabarito: `A criança consegue aumentar e diminuir o modelo e parar num tamanho equilibrado. Acerto = controlar o arrasto da bolinha de canto. Se ficar gigante sem querer, usar Ctrl + Z ou arrastar pouquinho de volta resolve.`,
    },
    {
      titulo: `Virando o modelo de frente com o Rotate`,
      tipo: `Prática no Roblox Studio`,
      tempo: `7 minutos`,
      guiaProfessor: `Ative o botão "Rotate" e mostre os anéis coloridos. A missão é girar o modelo até ele ficar olhando para a frente do cenário. Mostre que arrastar um anel por vez é mais fácil. Ajude quem girar para o lado errado a usar o Ctrl + Z.`,
      atividade: `Aperte o botão "Rotate" para aparecer os anéis. Arraste um anel devagar para girar o seu modelo até ele ficar virado de frente, como se fosse começar a aventura olhando para você.`,
      gabarito: `O modelo termina virado para a frente do cenário. Acerto = girar usando um anel por vez sem girar demais. Erro comum: arrastar dois anéis ao mesmo tempo e entortar; desfazer com Ctrl + Z e girar de novo, com calma.`,
    },
    {
      titulo: `Desafio do modelo perfeito`,
      tipo: `Desafio final`,
      tempo: `8 minutos`,
      guiaProfessor: `Junte as três ferramentas. A criança deve deixar o modelo no chão (Move), em tamanho bom (Scale) e olhando para a frente (Rotate). Cada um mostra para o colega do lado e explica qual cor usou para descer ao chão. Premie com o adesivo de "Mestre das três ferramentas".`,
      atividade: `Agora junte tudo: deixe o seu modelo no chão, num tamanho legal e virado de frente, usando Move, Scale e Rotate. Depois mostre para o colega do lado e conte qual cor você usou para descer até o chão.`,
      gabarito: `O modelo fica apoiado no chão, em tamanho equilibrado e virado para a frente, e a criança sabe dizer que usou a seta verde para descer. Acerto = combinar as três ferramentas com autonomia. Pequenos ajustes finais são esperados e fazem parte.`,
    },
  ],
};
