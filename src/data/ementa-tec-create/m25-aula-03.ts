import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Anatomia de um personagem 3D",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Planejar o personagem do jogo em um esboço e montar a blocagem inicial no Maya, usando formas simples para definir a silhueta geral do corpo, da cabeça e dos membros.`,
  descricao: `Nesta aula o aluno descobre que todo personagem 3D, por mais detalhado que pareça, começa de formas bem simples. Um boneco do jogo não nasce com músculos e rosto detalhado: ele nasce de cubos, cilindros e esferas grosseiras que marcam onde fica a cabeça, o corpo, os braços e as pernas. Esse jeito de começar com blocos é chamado de blocagem (em inglês, blocking), e é a base de qualquer personagem que você vê em um jogo de verdade.

Nas aulas anteriores o aluno já voltou ao Maya (Aula 1) e modelou seu primeiro objeto com polígonos (Aula 2). Agora damos um passo importante: sair de um objeto solto e pensar em um personagem inteiro, com partes que conversam entre si. Antes de tocar no computador, cada aluno vai desenhar um esboço rápido no papel: uma figura simples do personagem do seu jogo, marcando cabeça, tronco, braços e pernas. Esse esboço é o mapa que guia a blocagem no Maya.

A ideia central da aula é a silhueta. Silhueta é a sombra do personagem, o contorno que você reconhece mesmo de longe e sem cor. Um bom personagem é reconhecível só pela silhueta: pense no Mario, no Sonic ou em um personagem do Roblox. Por isso a blocagem não precisa ser bonita nem detalhada; ela precisa ter as proporções e o contorno certos. Detalhes como rosto, dedos e roupa vêm nas próximas aulas.

O foco do mês é modelar os assets do jogo, e o entregável é os primeiros assets 3D. Esta aula entrega a base do personagem principal: a blocagem com as proporções certas. O professor deve manter a turma calma e focada no contorno geral, repetindo que estamos construindo o esqueleto de formas, não a versão final. No fim da hora, cada aluno terá um esboço no papel e um personagem em blocos dentro do Maya, pronto para ganhar anatomia e detalhes nas aulas seguintes.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e funcionando (um por aluno)`,
    `Projetor ou TV para o professor demonstrar a blocagem no Maya em tela grande`,
    `Folhas de papel sulfite e lápis ou caneta para o esboço do personagem (um kit por aluno)`,
    `Arquivo de exemplo .mb ou .ma com uma blocagem simples já montada (cabeça, tronco, braços e pernas em primitivas) para mostrar o resultado esperado`,
    `Imagens de referência de personagens reconhecíveis pela silhueta (Mario, Sonic, avatar do Roblox) impressas ou em slide`,
    `Mouse com scroll para facilitar a navegação na cena 3D (zoom e órbita de câmera)`,
  ],
  conceitosChave: [
    `Blocagem (blocking) — etapa em que montamos o personagem com formas simples, sem detalhes, só para marcar onde fica cada parte do corpo.`,
    `Primitiva — forma básica pronta do Maya, como cubo, cilindro e esfera, usada como bloco de construção do personagem.`,
    `Silhueta — o contorno do personagem, a sombra que reconhecemos mesmo sem cor nem detalhe.`,
    `Proporção — a relação de tamanho entre as partes do corpo, por exemplo o tamanho da cabeça comparado ao do tronco.`,
    `Anatomia (simplificada) — a divisão do personagem em cabeça, tronco, braços e pernas, e como essas partes se encaixam.`,
    `Pivot — o ponto central de uma forma, usado para girar e posicionar a peça no lugar certo.`,
    `Esboço — desenho rápido no papel que serve de mapa para guiar a blocagem no computador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa desenhar bem nem ser especialista em Maya. Precisa entender uma ideia simples: todo personagem 3D começa como um boneco de blocos. A blocagem é juntar primitivas (cubo, cilindro, esfera) para marcar cabeça, tronco, braços e pernas. Nesta aula não há rosto nem dedos; o objetivo é a silhueta correta e as proporções certas. Decore o menu de criar formas: no Maya, menu superior "Create", depois "Polygon Primitives", e escolha "Cube", "Sphere" ou "Cylinder". Para mover uma forma, aperte a tecla W; para girar, a tecla E; para mudar o tamanho, a tecla R. Antes da aula, abra o Maya e monte uma blocagem simples uma vez para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Mostre na tela as imagens de Mario, Sonic e do avatar do Roblox, só o contorno preto. Pergunte: "Dá para reconhecer sem cor?" Conduza até a palavra silhueta. Reforce que personagem bom é reconhecível pelo contorno. Relembre a Aula 2: eles já sabem criar uma forma; hoje vamos juntar várias.

15 min, conteúdo novo guiado. Primeiro, todos pegam papel e lápis e fazem em dois minutos um esboço do personagem do próprio jogo, marcando cabeça, tronco, braços e pernas. Em seguida, no Maya, demonstre a blocagem na tela grande. Crie o tronco: menu "Create", "Polygon Primitives", "Cube"; com a tecla R, estique o cubo para virar um tronco. Crie a cabeça: "Create", "Polygon Primitives", "Sphere"; com a tecla W, suba a esfera para cima do tronco. Crie um braço com "Cylinder" e, com a tecla R, deixe-o fino e comprido; posicione na lateral com a tecla W. Repita para o outro braço e para as duas pernas. Mostre como girar a câmera segurando a tecla Alt e arrastando com o botão esquerdo do mouse para conferir a silhueta de vários ângulos.

25 min, mão na massa. Cada aluno monta a própria blocagem seguindo o esboço: um tronco (cubo esticado), uma cabeça (esfera), dois braços e duas pernas (cilindros). O foco é a silhueta e a proporção, não a beleza. Circule pela sala lembrando as teclas W (mover), E (girar) e R (tamanho). Oriente a usar a cabeça como medida: o corpo todo costuma ter de cinco a sete cabeças de altura. Quem terminar pode ajustar as proporções para ficarem parecidas com o esboço.

10 min, desafio e compartilhar. Peça que cada aluno gire a câmera e olhe o personagem só pelo contorno. Desafio: "O seu personagem é reconhecível pela silhueta?" Faça uma rodada rápida: cada aluno mostra a blocagem ao colega do lado e diz uma parte que quer melhorar na próxima aula.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: "Antes de construir uma casa, o pedreiro levanta as paredes; só depois vem a pintura. A blocagem são as paredes do personagem." Para silhueta: "É a sua sombra no chão; mesmo sem ver o rosto, dá para saber quem é." Para proporção: "Use a cabeça como régua. Quantas cabeças cabem da cabeça até o pé?" Evite a palavra anatomia sem explicar; diga "as partes do corpo" primeiro. Sempre conecte com o jogo: "Esse é o herói do seu jogo, então a silhueta dele precisa ser fácil de reconhecer na tela."

## Erros comuns e como ajudar

O erro mais comum é querer detalhar cedo demais, tentando fazer rosto e dedos na blocagem; lembre que isso vem nas próximas aulas e que agora o foco é o contorno. Outro erro é a cabeça gigante ou minúscula em relação ao corpo; ensine a usar a cabeça como medida e a comparar com o esboço. Muitos esquecem de selecionar a peça antes de mover e acabam movendo a câmera; reforce clicar na forma primeiro até ela ficar destacada. Há quem deixe os braços ou pernas flutuando longe do corpo; oriente a aproximar com a tecla W. Por fim, se o aluno se perder na cena, ensine a apertar a tecla F com a peça selecionada para a câmera focar nela.`,
  exercicios: [
    {
      titulo: `Esboço do meu personagem no papel`,
      tipo: `papel e lápis`,
      tempo: `6 minutos`,
      guiaProfessor: `Distribua papel e lápis. Reforce que é um desenho rápido e simples, sem precisar ser bonito. Peça que marquem com clareza cabeça, tronco, braços e pernas.`,
      atividade: `Desenhe no papel o personagem do seu jogo de um jeito simples. Marque as quatro partes principais: cabeça, tronco, braços e pernas. Escreva ao lado uma palavra que descreva o personagem (por exemplo: forte, ágil, robô).`,
      gabarito: `O esboço deve mostrar com clareza as quatro partes (cabeça, tronco, braços e pernas) e ter uma palavra descritiva. Não há desenho certo ou errado; o esboço é válido se serve de mapa para a blocagem. Exemplo: figura de boneco palito com cabeça redonda, tronco retangular, dois braços e duas pernas, com a palavra "ágil" ao lado.`,
    },
    {
      titulo: `Reconhecendo a silhueta`,
      tipo: `observação`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre as imagens de silhueta (Mario, Sonic, avatar do Roblox) só com o contorno preto. Pergunte como cada um foi reconhecido. Anote no quadro as pistas que os alunos derem.`,
      atividade: `Observe as silhuetas que o professor mostrar (apenas o contorno preto, sem cor nem rosto). Tente adivinhar cada personagem e anote qual parte do contorno te ajudou a reconhecer (por exemplo: o cabelo, o chapéu, o formato do corpo).`,
      gabarito: `O aluno deve reconhecer os personagens pelo contorno e citar a pista usada. Respostas válidas: "Reconheci o Mario pelo boné e pelo formato gordinho"; "Reconheci o Sonic pelos espetos do cabelo". Conclusão esperada: uma boa silhueta é reconhecível mesmo sem cor e sem detalhes, e por isso a blocagem precisa ter o contorno certo.`,
    },
    {
      titulo: `Montando a blocagem básica no Maya`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Garanta que cada aluno consiga criar primitivas pelo menu "Create". Reforce as teclas W (mover), E (girar) e R (tamanho). Lembre de clicar na peça antes de movê-la.`,
      atividade: `No Maya, monte a blocagem do seu personagem seguindo o esboço: crie um tronco (cubo esticado com a tecla R), uma cabeça (esfera) e quatro membros (cilindros para os dois braços e as duas pernas). Posicione cada peça no lugar usando a tecla W.`,
      gabarito: `O resultado deve ter seis peças formando um boneco: um tronco, uma cabeça em cima, dois braços nas laterais e duas pernas embaixo. Caminho correto: menu "Create", "Polygon Primitives", e escolher "Cube", "Sphere" ou "Cylinder"; usar R para ajustar tamanho e W para mover. As peças devem estar encaixadas, formando uma silhueta de pessoa, sem flutuar soltas.`,
    },
    {
      titulo: `Proporção certa em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Um aluno usa a cabeça como medida e conta quantas cabeças cabem na altura do corpo do colega; depois trocam. Reforce a faixa de cinco a sete cabeças.`,
      atividade: `Em dupla, confiram a proporção do personagem um do outro. Usem a cabeça do modelo como régua: quantas cabeças cabem da cabeça até o pé? Se for muito menos que cinco ou muito mais que sete, ajustem o tamanho das peças com a tecla R até ficar parecido com o esboço.`,
      gabarito: `A altura total do personagem deve ficar entre cinco e sete cabeças, uma proporção que funciona bem para personagens de jogo. A dupla deve perceber problemas como cabeça grande demais ou pernas curtas demais e corrigir com a tecla R. Resposta esperada: "O corpo dele tinha quatro cabeças, parecia bebê; aumentamos as pernas para chegar a seis cabeças."`,
    },
    {
      titulo: `Desafio da silhueta reconhecível`,
      tipo: `desafio`,
      tempo: `13 minutos`,
      guiaProfessor: `Ensine a girar a câmera segurando Alt e arrastando com o botão esquerdo. Peça que olhem o personagem só pelo contorno, de frente e de lado. Conduza a comparação entre a blocagem e o esboço.`,
      atividade: `Gire a câmera (segure a tecla Alt e arraste com o botão esquerdo do mouse) e observe seu personagem só pelo contorno, de frente e de lado. Pergunte-se: dá para reconhecer quem é? Ajuste as peças para que a silhueta combine com o esboço. Salve o arquivo com o seu nome para usar na próxima aula.`,
      gabarito: `O personagem deve ter uma silhueta clara e reconhecível de frente e de lado, condizente com o esboço do papel, com proporções entre cinco e sete cabeças. O arquivo deve estar salvo com o nome do aluno. Caminho da câmera: segurar Alt e arrastar com o botão esquerdo do mouse para orbitar. Se a silhueta estiver confusa ou as peças soltas, o aluno deve reposicionar com a tecla W e reajustar o tamanho com a tecla R antes de salvar.`,
    },
  ],
};
