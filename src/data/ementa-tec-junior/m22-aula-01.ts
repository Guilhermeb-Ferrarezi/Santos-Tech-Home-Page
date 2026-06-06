import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Voltando ao Maya: o que falta no jogo?",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Reabrir o Maya, relembrar a navegação e o movimento de objetos no espaço 3D e escolher em turma o primeiro item simples que cada criança vai modelar com cubos e esferas.`,
  descricao: `Esta é a primeira aula de um mês inteiro dedicado a voltar para a modelagem 3D no Maya e criar mais itens para o jogo da turma. Depois de várias semanas mexendo em outras ferramentas, as crianças vão reabrir o Maya como quem reencontra um amigo: vão lembrar onde ficam os botões, como girar a câmera ao redor do cenário e como pegar um objeto e levá-lo para outro lugar. O segredo desta aula é a calma e a repetição divertida. Ninguém precisa modelar nada complicado hoje; o objetivo é destravar as mãos e a memória.

A grande tarefa do dia é olhar para o jogo que a turma já tem e perguntar em voz alta: o que ainda falta aqui? Talvez falte uma moeda para o personagem coletar, uma caixa para empurrar, uma árvore, uma chave, um escudo, uma fruta, um botão gigante. As crianças adoram esse momento de detetive, porque elas conhecem o próprio jogo e sabem exatamente o que está faltando. O professor anota tudo num quadro grande, transformando a bagunça de ideias numa lista organizada e cheia de desenhos.

No espaço 3D do Maya, tudo é construído com formas simples. Uma moeda é um cilindro achatado. Uma caixa é um cubo. Uma maçã é uma esfera com um cabinho. Quando a criança entende que objetos difíceis nascem de formas fáceis juntas, ela perde o medo e ganha coragem. Por isso, ao final da lista, cada criança escolhe um único item simples para começar a modelar nas próximas aulas, sempre algo que caiba dentro de cubos e esferas.

Esta aula prepara o terreno para todo o mês: aqui nasce a lista de assets, aqui cada aluno escolhe seu primeiro alvo e aqui a turma recupera a confiança nos controles do Maya. Nas próximas semanas, esses itens vão ganhar forma, cor com vertex color, acabamento, e alguns até serão impressos em 3D. Hoje, o que importa é reabrir, lembrar e escolher.`,
  materiais: [
    `Computadores com o Maya já aberto e um projeto novo salvo antes da aula`,
    `Projetor ou TV grande ligada ao computador do professor para demonstrar`,
    `Exemplos prontos de itens 3D simples (moeda, caixa, maçã) abertos para mostrar`,
    `O jogo atual da turma aberto ou em vídeo, para a turma ver o que já existe`,
    `Quadro branco ou cartolina grande para escrever a lista de itens que faltam`,
    `Canetas coloridas e adesivos para cada criança marcar o item que escolheu`,
    `Mouse com três botões em cada computador (essencial para navegar no Maya)`,
  ],
  conceitosChave: [
    `Espaço 3D — o mundo do computador onde os objetos têm altura, largura e profundidade, igual ao mundo de verdade.`,
    `Câmera — o nosso olho dentro do Maya; ela gira, aproxima e afasta para vermos o objeto por todos os lados.`,
    `Navegar — girar, aproximar e mover a câmera ao redor das coisas, sem mexer no objeto em si.`,
    `Mover (translate) — pegar um objeto e levá-lo para outro lugar usando as setinhas coloridas.`,
    `Primitiva — uma forma básica e pronta do Maya, como o cubo e a esfera, que serve de tijolo para tudo.`,
    `Asset — cada pecinha do jogo (uma moeda, uma caixa, uma árvore) que a gente cria e depois usa lá dentro.`,
    `Viewport — a janela grande do Maya onde a gente enxerga e mexe na cena em 3D.`,
  ],
  treinamento: `## O que o professor precisa saber

O Maya pode assustar pela quantidade de botões, mas hoje você só precisa de três habilidades: navegar a câmera, criar uma forma e mover essa forma. Para navegar, o Maya usa a tecla Alt do teclado junto com o mouse. Segurando Alt e o botão esquerdo do mouse, a câmera gira ao redor da cena (chamamos isso de orbitar). Segurando Alt e o botão do meio (a rodinha apertada), você arrasta a cena para os lados. Girando só a rodinha, você aproxima e afasta (zoom). Decore essa frase: Alt esquerdo gira, Alt meio arrasta, rodinha aproxima. Se a criança usa notebook sem mouse, conecte um mouse de verdade, pois sem o botão do meio o Maya fica quase impossível para crianças.

Para criar formas, use o menu de cima Create, depois Polygon Primitives, depois Cube ou Sphere. A forma aparece no centro da cena. Para mover, aperte a tecla W: surgem três setas coloridas (vermelha para os lados, verde para cima e para baixo, azul para frente e para trás). A criança clica e arrasta a seta da direção que quer. Não se preocupe com mais nada hoje.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): com o jogo da turma no projetor, jogue um pouquinho ou mostre um vídeo dele. Pergunte: do que esse jogo precisa para ficar mais divertido? Deixe as crianças falarem e vá escrevendo no quadro tudo o que sugerirem (moeda, chave, caixa, fruta, escudo). Não filtre ainda; colete bastante.

Conteúdo novo guiado (15 min): vá para o Maya no projetor. Mostre devagar como orbitar a câmera com Alt e o botão esquerdo, como arrastar com Alt e a rodinha, e como dar zoom girando a rodinha. Repita três vezes, falando em voz alta cada movimento. Depois clique em Create, Polygon Primitives, Cube. Aperte W e mostre as três setinhas coloridas. Arraste cada uma e diga a cor e a direção. Crie também uma Sphere do mesmo jeito.

Mão na massa (25 min): cada criança no seu computador. Peça que orbitem a câmera ao redor da cena três vezes, deem zoom e voltem. Depois peça que criem um cubo, movam para a esquerda, criem uma esfera e movam para cima. Caminhe pela sala ajudando individualmente. Quando todos estiverem confortáveis, abra de novo a lista do quadro e peça que cada um escolha um item simples para ser o seu primeiro asset do mês, colando um adesivo ao lado do nome do item.

Desafio e compartilhar (10 min): desafie cada criança a dizer, olhando para o item escolhido, de quais formas básicas ele é feito (a moeda é um cilindro achatado? a caixa é um cubo? a maçã é uma esfera?). Cada um mostra para a turma a câmera girando ao redor de um cubo que criou e diz qual item vai modelar.

## Como explicar para crianças

Diga que a câmera é como um drone com uma câmera presa que voa ao redor do brinquedo: o brinquedo fica parado e nós voamos em volta para ver de todos os lados. Para mover objetos, fale que as setinhas coloridas são como trilhos: a peça só anda pelo trilho que você puxar. E para a modelagem, use a ideia de LEGO: tudo no jogo é feito de pecinhas simples encaixadas. Uma casa é um cubo embaixo e um cubo triangular em cima; um boneco de neve são três esferas. Quando a criança vê o objeto difícil como uma soma de formas fáceis, ela fica corajosa.

## Erros comuns e como ajudar

O erro mais comum é a criança mover o objeto sem querer quando queria só girar a câmera: lembre que para girar precisamos segurar Alt antes de clicar. Outro erro é apertar W e sair arrastando o objeto para longe, sumindo da tela; ensine a apertar a tecla F com o objeto selecionado para a câmera enquadrar e encontrar a peça de novo. Há também quem clique fora do objeto e perca a seleção: mostre que basta clicar de novo em cima da forma. Por fim, evite que criem dezenas de cubos por empolgação; combine um cubo e uma esfera por vez para a cena não virar bagunça.`,
  exercicios: [
    {
      titulo: `Voando ao redor do tesouro`,
      tipo: `Prática guiada de navegação`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça junto no projetor primeiro, bem devagar, repetindo o nome de cada movimento. Garanta que cada criança tenha um mouse com botão do meio funcionando antes de começar.`,
      atividade: `Com um cubo já na cena, a criança deve segurar Alt e o botão esquerdo para girar a câmera ao redor dele, segurar Alt e a rodinha para arrastar a cena, e girar a rodinha para aproximar e afastar.`,
      gabarito: `A criança consegue orbitar o cubo (Alt + botão esquerdo), arrastar a vista (Alt + botão do meio) e dar zoom (girar a rodinha) sem mover o cubo de lugar. Sucesso é ver o objeto por todos os lados mantendo o objeto parado.`,
    },
    {
      titulo: `As setinhas mágicas`,
      tipo: `Prática de movimento (translate)`,
      tempo: `5 minutos`,
      guiaProfessor: `Lembre a turma de apertar W para aparecerem as setas. Diga em voz alta cada cor e direção enquanto demonstra: vermelha para os lados, verde para cima, azul para frente.`,
      atividade: `A criança seleciona o cubo, aperta W e arrasta a seta vermelha para a esquerda, depois a seta verde para cima. Em seguida, cria uma esfera (Create, Polygon Primitives, Sphere) e a move para o lado oposto.`,
      gabarito: `O cubo termina à esquerda e mais alto, e a esfera aparece e fica no lado oposto. A criança usou a tecla W e arrastou as setas coloridas certas para cada direção. Mover nas três cores corretamente é o resultado esperado.`,
    },
    {
      titulo: `Caça aos itens que faltam`,
      tipo: `Discussão e lista coletiva`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza como um detetive animado. Escreva todas as ideias no quadro sem julgar. Estimule os mais tímidos com perguntas: o personagem precisa coletar o quê? Empurrar o quê? Abrir o quê?`,
      atividade: `Olhando o jogo da turma, cada criança fala pelo menos um item que está faltando (moeda, chave, caixa, fruta, escudo). A turma constrói junto uma lista no quadro com pequenos desenhos ao lado de cada item.`,
      gabarito: `Uma lista no quadro com vários itens propostos pelas crianças, cada um com um desenho simples. Não há resposta única; o sucesso é todos participarem e a lista ter pelo menos cinco itens variados anotados.`,
    },
    {
      titulo: `De que formas isso é feito?`,
      tipo: `Raciocínio visual em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o exemplo da maçã (esfera + cabinho) e do boneco de neve (três esferas). Peça que pensem em formas básicas, não em detalhes. Aceite respostas aproximadas e elogie o raciocínio.`,
      atividade: `Em dupla, as crianças escolhem três itens da lista do quadro e dizem de quais primitivas cada um é feito: a moeda é um cilindro achatado, a caixa é um cubo, a árvore é um cilindro com uma esfera em cima.`,
      gabarito: `Exemplos corretos: moeda = cilindro achatado; caixa = cubo; maçã = esfera com cabinho; árvore = cilindro (tronco) + esfera (copa); chave = cubo fino + cilindros pequenos. Qualquer combinação lógica de cubos, esferas e cilindros que represente o item é válida.`,
    },
    {
      titulo: `Meu primeiro asset do mês`,
      tipo: `Escolha e apresentação`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que cada criança escolha um item realmente simples, que caiba em cubos e esferas. Se alguém escolher algo difícil (um dragão), ajude a trocar por algo fácil ou a simplificar a ideia.`,
      atividade: `Cada criança escolhe um único item simples da lista para modelar nas próximas aulas, cola um adesivo ao lado dele no quadro e apresenta à turma dizendo o nome do item e de quais formas básicas ele será feito.`,
      gabarito: `Cada aluno tem um item simples escolhido e marcado no quadro, e consegue dizer em voz alta de quais primitivas o item nascerá. Exemplo de resposta completa: escolhi a moeda, que é um cilindro bem achatado. Todos com item definido é o resultado esperado.`,
    },
  ],
};
