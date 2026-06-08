import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Maya: nosso primeiro objeto 3D",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer a tela do Maya, aprender a girar, dar zoom e olhar o cenário de todos os lados, e criar o primeiro item 3D do jogo usando um cubo, esfera ou cilindro.`,
  descricao: `Hoje as crianças entram pela primeira vez no Maya, um programa profissional usado de verdade por quem cria filmes e jogos. Pode parecer assustador no começo, com muitos botões, mas a ideia desta aula é simples e divertida: vamos só conhecer a tela e descobrir que dentro do computador existe um mundo com profundidade, onde as coisas têm frente, costas, cima e baixo, igual aos brinquedos de verdade.

A grande novidade do 3D em relação ao desenho e à pixel art que as crianças já fizeram é a profundidade. No 2D, o desenho é chapado como um papel. No 3D, o objeto é como um brinquedo que podemos pegar na mão e virar para ver por trás. Para isso, a criança precisa aprender a mexer a "câmera" do Maya: girar ao redor do objeto, aproximar (zoom) e deslizar para os lados. Essa é a habilidade mais importante da aula, e todo o resto depende dela.

Depois de aprender a olhar o cenário de todos os lados, cada criança vai criar seu primeiro objeto 3D usando uma forma pronta: um cubo, uma esfera ou um cilindro. Essas formas são chamadas de primitivas, e são os tijolinhos de qualquer modelo 3D. Um cubo pode virar um baú ou uma caixa de tesouro do jogo, uma esfera pode ser uma moeda mágica ou uma poção, e um cilindro pode ser um barril ou um tronco. A ideia é que cada item simples já seja imaginado como uma peça do jogo que estamos montando neste mês.

Esta é uma aula de descoberta e encantamento. Não precisamos de perfeição: o objetivo é que toda criança saia sabendo entrar no Maya, mexer a câmera com confiança e ter pelo menos uma forma 3D criada na tela, pronta para virar um item nas próximas aulas.`,
  materiais: [
    `Computadores com o Maya já aberto antes da aula (um por criança, para não perder tempo carregando)`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar cada passo`,
    `Exemplos prontos de itens 3D simples (um baú feito de cubo, uma moeda feita de esfera, um barril feito de cilindro) para mostrar onde vamos chegar`,
    `Mouse com rodinha para cada criança (o 3D fica muito mais fácil com mouse de três botões)`,
    `Cartões ou desenhos impressos de itens de jogo (baú, moeda, barril, poção) para inspirar a escolha da forma`,
    `Um brinquedo de verdade (cubo de montar, bolinha) para mostrar de perto o que é girar um objeto e ver todos os lados`,
  ],
  conceitosChave: [
    `3D — quando uma coisa tem profundidade, com frente, costas, cima e baixo, igual a um brinquedo que dá para virar na mão.`,
    `Maya — um programa de computador usado por profissionais para criar objetos 3D para filmes e jogos.`,
    `Câmera (viewport) — é como o nosso olho dentro do Maya; mexendo a câmera a gente anda ao redor do objeto para vê-lo de todos os lados.`,
    `Girar (órbita) — rodar a câmera em volta do objeto, como se a gente desse uma voltinha ao redor de um boneco.`,
    `Zoom — chegar mais perto ou ficar mais longe do objeto, como uma lupa que aproxima e afasta.`,
    `Primitiva — uma forma pronta que o Maya já sabe fazer, como cubo, esfera e cilindro; são os tijolinhos do 3D.`,
    `Item do jogo — o objeto que estamos criando para usar dentro do nosso jogo, como um baú, uma moeda ou um barril.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya para dar esta aula. O segredo é dominar três movimentos de câmera, que no Maya se fazem segurando a tecla ALT junto com o mouse. Treine sozinho antes da aula, umas dez vezes, até ficar automático: ALT + botão esquerdo do mouse gira (órbita) a câmera ao redor do objeto; ALT + botão direito dá zoom (aproxima e afasta); ALT + botão do meio (a rodinha apertada) desliza a câmera para os lados. A rodinha do mouse também dá zoom. Se o aluno se perder e a câmera "fugir", aperte a tecla F para enquadrar o objeto de volta na tela. Decore só isso: ALT esquerdo gira, ALT direito zoom, ALT meio desliza, F traz de volta.

A janela grande e cinza no centro do Maya é o viewport, onde tudo acontece. Em cima existe a Shelf, uma barra com abas; a aba que importa hoje é a "Poly Modeling" (ou "Polygons"), onde ficam os botões de cubo, esfera e cilindro com ícones azuis.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): pegue um brinquedo de verdade (um cubo de montar) e vire na mão mostrando frente, costas e fundo. Pergunte: "quantos lados tem?". Explique que hoje vamos fazer isso dentro do computador. Mostre os exemplos prontos no projetor (baú, moeda, barril) e diga "tudo isso começou de uma forminha simples".

Conteúdo novo guiado (15 min): com todos olhando o projetor, abra o Maya e aponte o viewport ("esta é a nossa janela mágica"). Ensine os três movimentos um de cada vez, pedindo que as crianças repitam no próprio computador: primeiro só girar (ALT + botão esquerdo) durante um minuto; depois só zoom (rodinha do mouse); depois deslizar (ALT + botão do meio). Ensine a tecla F para resgatar a câmera. Repita devagar; este é o coração da aula.

Mão na massa (25 min): mostre como criar uma forma. Vá no menu de cima em Create, depois Polygon Primitives, e clique em Cube (ou use o ícone do cubo azul na Shelf "Poly Modeling"). Um cubo aparece no centro. Cada criança escolhe entre cubo, esfera (Sphere) ou cilindro (Cylinder) e cria o seu. Em seguida, peça que girem, deem zoom e olhem a forma de cima, de baixo e de trás. Passe nas mesas ajudando quem perdeu a câmera (use F).

Desafio e compartilhar (10 min): desafio "Adivinha meu item": cada criança diz qual item do jogo a forma vai virar (cubo = baú, esfera = moeda, cilindro = barril). Quem quiser mostra a forma girando no projetor.

## Como explicar para crianças

Use a analogia do brinquedo: "o computador agora tem um mundo de verdade, com fundo e costas, igual ao seu boneco". Para a câmera, diga "você não está empurrando o objeto, você está andando ao redor dele, como se desse uma voltinha". Para as primitivas, diga "essas formas são os nossos tijolinhos: um cubo vira um baú, uma bolinha vira uma moeda". Sempre conecte com o jogo: "esse cilindro vai ser o barril do nosso jogo".

## Erros comuns e como ajudar

O erro mais comum é a criança esquecer de segurar o ALT e clicar direto no objeto, movendo a forma sem querer; mostre a tecla ALT com o dedo e diga "segura a mãozinha do ALT primeiro". Outro erro é a câmera "fugir" e o objeto sumir da tela; ensine que F resolve quase tudo. Algumas crianças criam muitas formas sem querer (ficam clicando no botão); explique que um clique já basta. Outras dão zoom demais e ficam dentro do objeto, vendo tudo escuro; oriente a afastar com a rodinha. Tenha paciência: nesta aula errar a câmera é normal e faz parte de aprender a olhar em 3D.`,
  exercicios: [
    {
      titulo: `Aquecimento: o brinquedo de todos os lados`,
      tipo: `Roda de conversa e observação`,
      tempo: `8 minutos`,
      guiaProfessor: `Use um brinquedo cúbico de verdade e vá girando na mão. A meta é que a criança entenda, antes do computador, o que significa "ver de todos os lados". Faça perguntas e deixe cada um responder.`,
      atividade: `Olhe o brinquedo que o professor está segurando. Diga o que você vê na frente, atrás e embaixo. Quantos lados ele tem? Imagine que esse brinquedo está dentro do computador e você pode girá-lo do mesmo jeito.`,
      gabarito: `Um cubo tem 6 lados (frente, costas, dois lados, cima e baixo). A resposta certa é a criança perceber que existem partes que não dá para ver de uma vez só e que, para ver tudo, é preciso girar o objeto. Qualquer descrição correta dos lados visíveis é válida.`,
    },
    {
      titulo: `Girando a câmera no Maya`,
      tipo: `Prática guiada no computador`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre no projetor primeiro. Peça que segurem a tecla ALT e usem o botão esquerdo do mouse para girar. Conte em voz alta: "segura o ALT... agora arrasta". Circule pela sala corrigindo quem clica sem o ALT.`,
      atividade: `Segure a tecla ALT e o botão esquerdo do mouse e arraste devagar. Dê uma voltinha completa ao redor do objeto, como se você estivesse caminhando em volta dele. Veja a frente, depois o fundo.`,
      gabarito: `O aluno consegue, segurando ALT + botão esquerdo, girar a câmera e visualizar o objeto pela frente e por trás. Se a forma se mover no lugar de a câmera girar, é sinal de que esqueceu o ALT; corrija pedindo para segurar a tecla antes de arrastar.`,
    },
    {
      titulo: `Zoom de perto e de longe`,
      tipo: `Prática guiada no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Ensine a rodinha do mouse para dar zoom (e ALT + botão direito como alternativa). Mostre o que acontece se aproximar demais (fica tudo escuro, dentro do objeto) e ensine a afastar. Lembre da tecla F para reenquadrar.`,
      atividade: `Use a rodinha do mouse para chegar bem pertinho do objeto e depois afastar bem longe. Pare numa distância em que dá para ver a forma inteira e bonita na tela. Se você se perder, aperte a tecla F para o objeto voltar ao centro.`,
      gabarito: `O aluno controla o zoom aproximando e afastando, e consegue parar numa distância em que a forma aparece inteira. Saber usar a tecla F para reenquadrar quando se perde também conta como acerto.`,
    },
    {
      titulo: `Criando minha primeira forma 3D`,
      tipo: `Criação prática`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre o caminho Create, depois Polygon Primitives, e escolha Cube, Sphere ou Cylinder (ou os ícones azuis na Shelf "Poly Modeling"). Deixe cada criança escolher a forma. Avise que um clique já cria; não precisa clicar muitas vezes.`,
      atividade: `Escolha uma forma: cubo, esfera ou cilindro. Crie ela no Maya usando o menu Create e Polygon Primitives. Depois gire e dê zoom para olhar sua forma de cima, de baixo e de trás.`,
      gabarito: `O aluno cria com sucesso uma primitiva (cubo, esfera ou cilindro) que aparece no viewport e consegue observá-la de vários ângulos usando a câmera. Qualquer uma das três formas é uma resposta correta; o importante é existir uma forma na tela e o aluno saber girá-la.`,
    },
    {
      titulo: `Desafio: adivinha meu item do jogo`,
      tipo: `Desafio criativo e apresentação`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada criança liga a forma que criou a um item do jogo e conta para a turma. Ajude com ideias: cubo vira baú, esfera vira moeda, cilindro vira barril. Quem quiser mostra a forma girando no projetor. Valorize toda ideia criativa.`,
      atividade: `Olhe a forma que você criou e imagine: que item do jogo ela pode virar? Conte para a turma. Por exemplo: meu cubo vai virar um baú de tesouro. Se quiser, mostre sua forma girando no projetor.`,
      gabarito: `Não existe resposta única: qualquer associação coerente entre a forma e um item de jogo é correta. Exemplos esperados: cubo vira baú, caixa ou bloco; esfera vira moeda, poção, bola ou fruta; cilindro vira barril, tronco ou tubo. O acerto é a criança imaginar um uso para a forma dentro do jogo e conseguir explicá-lo.`,
    },
  ],
};
