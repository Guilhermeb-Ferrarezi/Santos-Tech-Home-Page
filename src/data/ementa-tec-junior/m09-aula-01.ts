import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Mundo 3D: Girar e Espiar",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança descobre o que é um mundo 3D e aprende a girar a câmera com o mouse para olhar um objeto por cima, por baixo, na frente e atrás.`,
  descricao: `Nesta primeira aula do mês, as crianças entram pela primeira vez no MagicaVoxel, o programa que vamos usar para criar personagens feitos de cubinhos (chamados de "voxels"). Antes de construir qualquer coisa, elas precisam entender uma ideia importante: no mundo 3D as coisas têm volume, igual aos brinquedos de verdade. Diferente de um desenho no papel, que é "chapado", aqui dá para andar em volta do objeto e ver todos os lados.

O coração da aula é aprender a mexer a câmera. A câmera é como o nosso "olho mágico" que voa em volta do modelo. Quando a criança segura o botão certo do mouse e arrasta, o objeto parece girar — na verdade, é a câmera que está dando a volta. Esse gesto é a base de tudo o que vem depois no mês: para construir um personagem bem-feito, a criança precisa olhar de vários ângulos e perceber o que está na frente, atrás e escondido.

Para deixar divertido e concreto, o professor abre um modelo 3D pronto e simpático (um bichinho ou um carrinho de voxels) e propõe uma brincadeira de "caça ao tesouro": existem detalhes escondidos no modelo (um botão atrás, uma carinha embaixo, um rabinho do outro lado) que só aparecem quando a criança gira ao redor. Ao caçar essas partes, ela treina o movimento de girar sem nem perceber que está "estudando".

No fim, a turma compartilha o que descobriu girando. O objetivo não é construir nada ainda, e sim ficar à vontade com o espaço 3D e com o mouse. Quando essa habilidade fica natural, todas as próximas aulas de modelagem ficam muito mais fáceis.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com o MagicaVoxel já instalado e ABERTO antes da aula começar`,
    `Mouse com botão direito funcionando em cada computador (o girar fica muito difícil só com touchpad)`,
    `Projetor ou TV grande para o professor mostrar a tela e demonstrar cada passo`,
    `Dois ou três arquivos de exemplo prontos (um bichinho, um carrinho e uma casinha de voxels) com detalhes escondidos em vários lados`,
    `Folhas de papel em branco e lápis de cor para a atividade de desenho dos lados`,
    `Um objeto-brinquedo real (um carrinho ou bonequinho) para mostrar de verdade o que é "ver por todos os lados"`,
    `Cartão ou cartaz com os três gestos do mouse desenhados (girar, mover, aproximar) preso perto da lousa`,
  ],
  conceitosChave: [
    `3D — quando uma coisa tem altura, largura e também profundidade, igual a um brinquedo de verdade que dá para virar na mão.`,
    `Voxel — é o "cubinho" mágico, o tijolinho de que tudo no MagicaVoxel é feito, parecido com uma peça de Lego quadrada.`,
    `Câmera — o nosso olho mágico que voa em volta do modelo; quando ela se mexe, parece que o objeto está girando.`,
    `Girar (orbitar) — segurar o botão direito do mouse e arrastar para dar a volta e olhar o objeto por outros lados.`,
    `Frente e atrás — a frente é o lado que está virado para nós; atrás é o lado escondido que só vemos quando giramos.`,
    `Zoom — chegar mais perto ou ir mais longe do objeto, usando a rodinha do mouse, como uma lupa que aproxima e afasta.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O MagicaVoxel é um programa gratuito para criar arte 3D feita de cubinhos chamados "voxels" (pense em pixel, mas em 3D). Nesta aula você NÃO vai ensinar a construir nada — o foco é só fazer a criança se sentir à vontade dentro do espaço 3D e dominar o gesto de girar a câmera.

Três movimentos de câmera bastam para hoje. No MagicaVoxel padrão: girar (orbitar) é segurar o BOTÃO DIREITO do mouse e arrastar; mover de lado (pan) é segurar o BOTÃO DO MEIO, ou seja, a rodinha apertada, e arrastar; aproximar e afastar (zoom) é rolar a RODINHA do mouse. Existe também a tecla de atalho que centraliza a visão; se a criança "se perder" e o modelo sumir, role a rodinha para trás até ele reaparecer, ou feche e reabra o arquivo. Teste os três movimentos no seu computador ANTES da aula, porque alguns mouses têm a rodinha dura.

Importante: quem gira é a câmera, não o objeto. O modelo fica parado no centro; a câmera é que dá a volta. Para a criança, no entanto, "parece" que o bichinho está virando — e tudo bem usar essa impressão a seu favor.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

10 min — Aquecimento. Segure o brinquedo real (carrinho) na frente da turma. Pergunte: "O que tem atrás? E embaixo?" Vire o brinquedo e mostre. Diga que no computador a gente também vai poder olhar tudo por todos os lados — isso é 3D. Mostre o cartaz dos três gestos do mouse.

15 min — Conteúdo guiado. Com o projetor ligado, abra um arquivo de exemplo no MagicaVoxel (menu superior, ícone de pasta / "Open", escolha o bichinho). Demonstre devagar, narrando: "Vou segurar o botão DIREITO e arrastar... olha, agora estou vendo as costas dele!" Mostre os três gestos um de cada vez: girar (botão direito), aproximar com a rodinha, e mover de lado (rodinha apertada). Repita cada gesto duas vezes, bem devagar.

25 min — Mão na massa. Cada criança (ou dupla) abre o mesmo arquivo de exemplo na sua tela. Circule pela sala. Faça a brincadeira da "caça ao tesouro": "Quem acha o botão escondido atrás?" "Quem encontra a carinha embaixo do bichinho?" Vá dando uma pista de cada vez. O objetivo é que cada criança gire sozinha, com firmeza, e encontre pelo menos duas partes escondidas.

10 min — Desafio + compartilhar. Peça que cada criança escolha o lado mais legal do modelo e gire até deixá-lo virado para a tela. Faça a roda: cada um diz uma coisa que só viu porque girou.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia do "olho mágico que voa". Diga: "O mouse é o controle do seu olho mágico. Segura o botão direito e arrasta para o seu olho voar em volta do bichinho." Compare com andar em volta de uma estátua na praça: a estátua fica parada, quem anda em volta é você. Para o zoom: "É uma lupa — rola a rodinha para chegar perto e ver os detalhes." Evite palavras como "orbitar" ou "renderizar"; fale "girar", "voar em volta", "chegar perto".

## Erros comuns e como ajudar

O erro mais comum é apertar o botão ERRADO: a criança usa o esquerdo e, sem querer, começa a pintar ou apagar cubinhos. Mostre a diferença: esquerdo é "mexer no boneco", direito é "voar em volta". Se alguém bagunçou o modelo, aperte desfazer (Ctrl+Z) ou reabra o arquivo. Outro erro é girar rápido demais e "perder" o modelo da tela — ensine a rolar a rodinha para trás até ele voltar ao centro. Crianças com touchpad sofrem muito; priorize o mouse de verdade ou coloque-as em dupla com quem tem mouse. Por fim, há quem fique com medo de "quebrar" o programa — tranquilize: "Aqui dá para errar à vontade, é só apertar voltar."`,
  exercicios: [
    {
      titulo: `Voando em volta do bichinho`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o arquivo de exemplo aberto na tela de cada criança, mostre no projetor o gesto de girar (botão direito + arrastar) uma vez bem devagar. Depois deixe que tentem sozinhos e circule conferindo se estão usando o botão certo.`,
      atividade: `Abra o bichinho de exemplo. Segure o botão direito do mouse e arraste para fazer o seu olho mágico voar em volta dele. Mostre para o professor as costas do bichinho e depois a barriguinha dele.`,
      gabarito: `A criança consegue, sozinha, girar a câmera e parar com o modelo mostrando as costas e depois a parte de baixo. Acertou quando muda de lado sem clicar com o botão esquerdo (sem pintar nem apagar cubinhos).`,
    },
    {
      titulo: `Caça ao tesouro escondido`,
      tipo: `Jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Avise que o modelo tem partes secretas que só aparecem quando a gente gira. Dê uma pista de cada vez ("tem um botão atrás", "tem uma carinha embaixo") e vá soltando a próxima só quando alguém achar. Comemore cada descoberta.`,
      atividade: `Este modelo tem três tesouros escondidos! Gire em volta dele e encontre: 1) o que está atrás, 2) o que está embaixo, 3) o que está do outro lado. Levante a mão quando achar cada um.`,
      gabarito: `A criança localiza os três detalhes escondidos (atrás, embaixo e do lado oposto) girando a câmera. Acertou quando aponta para cada tesouro na tela depois de virar o modelo, sem precisar que o professor gire por ela.`,
    },
    {
      titulo: `O que é 3D mesmo?`,
      tipo: `Roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Sente a turma em roda com o brinquedo real na mão. Pergunte por que no computador a gente precisa girar e no papel não dá. Conduza para a ideia de que coisas 3D têm "todos os lados". Aceite respostas simples e valorize cada fala.`,
      atividade: `Vamos conversar: por que no MagicaVoxel a gente precisa girar para ver tudo? Um desenho no papel tem lado de trás? E o carrinho de verdade, tem? Diga uma coisa que só dá para ver se você girar.`,
      gabarito: `A criança diz, com palavras dela, que o objeto 3D (ou o brinquedo) tem vários lados e que o papel é "chapado" e não tem trás. Acertou quando relaciona "girar" com "ver os outros lados". Exemplo de resposta esperada: "Porque o bichinho tem costas e o desenho não."`,
    },
    {
      titulo: `Desenhando os quatro lados`,
      tipo: `Desenho no papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue uma folha dobrada ou dividida em quatro quadrados. Peça que a criança gire o modelo no computador e desenhe rapidinho cada lado num quadrado. Não precisa caprichar — é só registrar o que está vendo de cada ângulo.`,
      atividade: `Sua folha tem quatro quadrados: FRENTE, ATRÁS, EM CIMA e EMBAIXO. Gire o bichinho no computador para ver cada lado e faça um deseninho rápido dele em cada quadrado. Os quatro lados podem ser diferentes!`,
      gabarito: `Os quatro quadrados estão preenchidos com desenhos diferentes entre si, mostrando que a criança realmente olhou cada ângulo. Acertou quando frente e atrás (ou cima e baixo) não são iguais — prova de que ela girou para observar.`,
    },
    {
      titulo: `Desafio do guia turístico`,
      tipo: `Desafio + apresentação`,
      tempo: `9 minutos`,
      guiaProfessor: `Proponha que cada criança seja um "guia turístico" do modelo. Ela escolhe o lado mais legal, gira até deixá-lo virado para a turma e explica por que escolheu. É a junção de tudo: girar com controle, parar no lugar certo e falar sobre o que vê.`,
      atividade: `Você é o guia turístico do bichinho! Gire até deixar o lado MAIS LEGAL virado para a tela, pare bem nesse lugar e conte para a turma: que lado é esse e por que você gostou dele?`,
      gabarito: `A criança gira com controle, para a câmera num lado escolhido (sem ele ficar tremendo ou sumindo da tela) e explica a escolha em uma frase. Acertou quando consegue posicionar o modelo de propósito e dizer qual lado mostrou (ex.: "Escolhi as costas porque tem um rabinho engraçado").`,
    },
  ],
};
