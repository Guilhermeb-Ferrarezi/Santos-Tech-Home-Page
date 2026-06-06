import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Montando a Primeira Cena VR",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Construir um ambiente 3D simples para VR com chão, paredes e objetos em escala de tamanho real, para que o jogador sinta presença ao entrar na cena com o headset.`,
  descricao: `Nesta aula o aluno monta o primeiro cenário de verdade dentro do Unity para ser visto em Realidade Virtual. Nas aulas anteriores deste mês a turma já preparou o Unity para VR (Aula 3) e configurou o XR Rig, que é o jogador virtual com os olhos e as mãos (Aula 4). Agora chega a parte que todos esperam: dar ao jogador um lugar para existir. Vamos criar um chão para ele pisar, paredes para fechar o espaço e alguns objetos para ele observar de perto. É o momento em que a cena deixa de ser um vazio cinza e vira um pequeno mundo.

O ponto mais importante da aula, e o que diferencia VR de um jogo comum de tela, é a escala. Na tela do computador, um objeto grande ou pequeno demais passa despercebido. Em VR, o cérebro mede o mundo com o próprio corpo: uma porta de dois metros parece uma porta, uma mesa na altura certa parece uma mesa de verdade. Se a escala estiver errada, o jogador se sente um gigante andando numa casa de bonecas, ou uma formiga olhando móveis enormes. Isso quebra a sensação de presença na hora. Por isso o aluno vai aprender a pensar em metros reais: no Unity, uma unidade equivale a um metro.

O professor vai guiar a turma a usar objetos primitivos (Plane, Cube, Cylinder), que são as formas simples que o Unity já traz prontas. Com elas dá para montar um quarto inteiro sem precisar de modelagem no Blender ainda. O aluno aprende a posicionar, redimensionar e organizar esses objetos no painel Hierarchy e a ajustar os valores de posição e escala no painel Inspector. Tudo com números pensados em altura humana, larguras de passagem e tamanhos de móveis que fazem sentido para um corpo de verdade.

No fim da aula, cada aluno terá uma cena fechada e habitável: um chão, quatro paredes e pelo menos um objeto na altura certa para o jogador olhar. Essa cena será a base das próximas aulas, quando o aluno vai trabalhar luz e conforto (Aula 6) e depois aprender a olhar ao redor (Aula 7) e a se mover (Aula 8). A escala correta de hoje é o alicerce de tudo o que vem depois: sem presença, não há imersão.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalado e o XR Rig já configurado da Aula 4 (um por aluno)`,
    `Óculos VR conectados e testados, ou pelo menos um headset compartilhado para a turma experimentar a cena`,
    `Projetor ou TV para o professor demonstrar os passos no Unity em tela grande`,
    `Arquivo de exemplo do Unity com a cena base e o XR Rig prontos, para quem perdeu a Aula 4`,
    `Folha impressa de referência de escala (altura de uma pessoa 1,7 m; porta 2 m; mesa 0,75 m; teto 2,8 m)`,
    `Mouse com scroll para facilitar a navegação na cena 3D do Unity`,
  ],
  conceitosChave: [
    `Escala em VR — a ideia de que uma unidade do Unity vale um metro real, para que o mundo tenha o tamanho certo para o corpo do jogador.`,
    `Presença — a sensação de estar realmente dentro do mundo virtual, que depende de a escala e a perspectiva estarem corretas.`,
    `Objeto primitivo — forma simples que o Unity já traz pronta (Plane, Cube, Cylinder) para montar cenários sem modelagem.`,
    `Plane (plano) — superfície plana fina usada como chão ou parede da cena.`,
    `Transform — o conjunto de Position, Rotation e Scale que define onde o objeto está, como está girado e qual o tamanho dele.`,
    `Hierarchy — o painel do Unity que lista todos os objetos da cena, como um índice do mundo.`,
    `Inspector — o painel onde editamos os valores de um objeto selecionado, como posição, rotação e escala.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Unity nem em VR. Precisa entender quatro ideias. Primeira: no Unity, uma unidade vale um metro. Logo, um chão de escala 1 num Plane já tem 10 metros de lado, porque o Plane nasce com 10 por 10 metros. Segunda: todo objeto tem um Transform, com Position (onde está), Rotation (como está girado) e Scale (o tamanho). É aí que mexemos. Terceira: para criar objetos, use o menu GameObject, depois 3D Object, e escolha Plane, Cube ou Cylinder. Quarta, e a mais importante: a altura dos olhos do jogador em VR fica perto de 1,6 a 1,7 metro do chão. Tudo que você quer que ele veja bem deve estar nessa faixa. Antes da aula, abra o Unity, crie um Plane e um Cube e ande pela cena com o botão direito do mouse pressionado mais as teclas W A S D, só para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Relembre o XR Rig da Aula 4 perguntando: quem é o jogador dentro da cena? Mostre na tela grande uma cena vazia e pergunte o que falta para o jogador sentir que está em algum lugar. Conduza até as palavras chão, paredes e tamanho certo. Mostre a folha de escala e diga que hoje pensamos em metros reais.

15 min, conteúdo novo guiado. No Unity, crie o chão: menu GameObject, 3D Object, Plane. No Inspector, deixe Position em X 0, Y 0, Z 0. Renomeie para Chao na Hierarchy. Agora crie uma parede: GameObject, 3D Object, Cube. No Inspector ajuste a Scale para X 10, Y 3, Z 0.2 (uma parede de 10 metros de largura, 3 de altura e fininha). Mude a Position para Z 5 para empurrar a parede para a borda do chão. Repita para as outras três paredes mudando Position e Rotation (uma parede girada 90 graus no Y vira parede lateral). Por fim, crie um Cube pequeno como mesa: Scale X 1, Y 0.75, Z 0.6 e Position Y 0.375, para a mesa encostar no chão. Explique que Y da posição é metade da altura porque o objeto cresce a partir do centro.

25 min, mão na massa. Cada aluno monta o próprio quarto: um chão, quatro paredes fechando o espaço e pelo menos um objeto na altura certa para olhar (uma mesa, um quadro na parede ou uma caixa). Reforce os números: parede com 3 metros de altura, mesa com 0.75. Circule pela sala. Quem terminar pode colocar a cena no headset e conferir se o tamanho parece real. Esse teste no óculos é o melhor professor de escala.

10 min, desafio e compartilhar. Peça que cada aluno suba ou desça a própria altura no XR Rig de propósito e veja a cena virar casa de gigante ou de formiga. Faça uma rodada: cada um diz um objeto que colocou e em que altura, e por que aquela altura faz a cena parecer de verdade.

## Como explicar de forma clara (linguagem para a idade)

Use o corpo como régua. Diga: no Unity, um número igual a um passo de um metro. Para a escala, conte a história do gigante e da formiga: se o mundo for pequeno demais, você vira um gigante e bate a cabeça; se for grande demais, vira uma formiga perdida. Para o Transform, diga que Position é onde você larga o objeto, Rotation é o quanto você gira ele, e Scale é o quanto você estica. Sempre conecte com a vida real: que altura tem a mesa da sua casa? Por que a porta é mais alta que você? Lembre que em VR o cérebro acredita no tamanho, então um erro de escala se sente na hora.

## Erros comuns e como ajudar

O erro mais comum é a parede flutuar ou afundar no chão porque o aluno esqueceu que o objeto cresce a partir do centro: ensine a colocar a Position Y igual a metade da altura. Outro erro é usar Scale gigante achando que precisa, deixando um quarto de 50 metros; lembre que 10 por 10 já é uma sala grande. Muitos giram a parede no eixo errado e ela some de lado; mostre que a rotação de parede lateral vai no eixo Y, em 90 graus. Há quem coloque o objeto principal no chão e ele fique invisível para o jogador em pé; reforce a altura dos olhos perto de 1,6 metro. Por fim, se a cena parecer torta no headset, quase sempre o XR Rig está com a altura errada ou o chão não está em Y zero.`,
  exercicios: [
    {
      titulo: `Criando o chão da cena`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha a cena com o XR Rig aberta. Mostre o caminho do menu GameObject até o Plane e onde fica o campo Position no Inspector.`,
      atividade: `No seu projeto, crie um Plane pelo menu GameObject, depois 3D Object, depois Plane. No Inspector, deixe a Position em X 0, Y 0, Z 0. Renomeie o objeto para Chao na Hierarchy. Mostre o resultado ao professor.`,
      gabarito: `Deve aparecer um chão plano na cena, na posição zero. Caminho correto: GameObject, 3D Object, Plane; depois Position X 0, Y 0, Z 0 no Inspector; renomear para Chao na Hierarchy com duplo clique no nome. Como um Plane do Unity nasce com 10 por 10 metros, esse chão já tem o tamanho de uma sala grande. Se o chão aparecer fora do centro, a Position não está em zero.`,
    },
    {
      titulo: `Levantando a primeira parede`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce que o Cube vira parede quando esticamos largura e altura e deixamos a espessura fina. Lembre que a Position Y deve ser metade da altura para a parede encostar no chão.`,
      atividade: `Crie um Cube pelo menu GameObject, 3D Object, Cube. No Inspector, ajuste a Scale para X 10, Y 3, Z 0.2. Mude a Position para Y 1.5 e Z 5. Confira se a parede fica em pé, na borda do chão, sem afundar.`,
      gabarito: `A parede deve ficar de pé, com 10 metros de largura, 3 de altura e fina, encostada no chão na borda. Valores corretos: Scale X 10, Y 3, Z 0.2; Position Y 1.5 (metade da altura 3) e Z 5 para empurrar até a borda do chão de 10 metros. Se a parede afundar metade no chão, o aluno esqueceu de colocar Position Y igual a metade da altura.`,
    },
    {
      titulo: `Fechando o quarto: quatro paredes`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre que a parede lateral é a mesma parede girada 90 graus no eixo Y. Ajude com os sinais de Z e X positivo e negativo para posicionar as quatro paredes ao redor do chão.`,
      atividade: `Partindo da parede da atividade anterior, crie mais três paredes para fechar o quarto. Duas ficam nas bordas da frente e de trás (mude apenas a Position Z para 5 e para -5). As outras duas viram laterais: gire a Rotation Y em 90 graus e ajuste a Position X para 5 e para -5. Confira se o quarto fica fechado.`,
      gabarito: `O quarto deve ficar fechado pelas quatro paredes ao redor do chão. Parede da frente: Position Z 5. Parede de trás: Position Z -5. Paredes laterais: Rotation Y 90, uma com Position X 5 e outra com Position X -5. Todas com Scale X 10, Y 3, Z 0.2 e Position Y 1.5. Se uma parede sumir de lado, a rotação foi feita no eixo errado; a rotação de parede lateral vai no eixo Y.`,
    },
    {
      titulo: `Roda de conversa: gigante ou formiga`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda ligando a escala à sensação de presença. Se possível, mude a altura do XR Rig ao vivo na tela grande para a turma ver a cena virar casa de gigante e de formiga.`,
      atividade: `Em roda, conversem: por que a escala importa tanto em VR e não tanto num jogo de tela? Cada aluno dá um exemplo de objeto da vida real e a altura aproximada dele (porta, mesa, cadeira). Discutam o que acontece com a sensação de presença quando o mundo fica grande ou pequeno demais.`,
      gabarito: `Não há resposta única, mas as falas devem ligar escala à presença. Ideias esperadas: em VR o cérebro mede o mundo com o próprio corpo, então um tamanho errado se sente na hora; num jogo de tela isso passa despercebido. Exemplos válidos de altura: porta perto de 2 metros, mesa perto de 0,75 metro, cadeira perto de 0,45 metro. Conclusão desejada: escala errada quebra a presença, deixando o jogador como gigante ou formiga.`,
    },
    {
      titulo: `Mini projeto: objeto na altura dos olhos`,
      tipo: `projeto curto`,
      tempo: `14 minutos`,
      guiaProfessor: `Lembre que a altura dos olhos do jogador em VR fica perto de 1,6 metro. Para um quadro na parede, a Position Y deve ficar nessa faixa. Para uma mesa, a Position Y é metade da altura dela. Quem puder, testa no headset.`,
      atividade: `Coloque na sua cena pelo menos um objeto pensado para o jogador olhar: uma mesa com Scale X 1, Y 0.75, Z 0.6 e Position Y 0.375, ou um quadro (Cube fino) na parede com Position Y perto de 1.6. Salve a cena com o seu nome. Se houver headset, entre na cena e confira se o tamanho parece real.`,
      gabarito: `A cena deve ter chão, quatro paredes e pelo menos um objeto na altura certa. Mesa correta: Scale X 1, Y 0.75, Z 0.6 e Position Y 0.375 (metade da altura, para encostar no chão). Quadro na parede: Cube fino com Position Y perto de 1.6, na altura dos olhos. Cena salva com o nome do aluno. No headset, o quarto deve parecer do tamanho de uma sala de verdade; se parecer enorme ou minúsculo, a escala dos objetos ou a altura do XR Rig precisa de ajuste.`,
    },
  ],
};
