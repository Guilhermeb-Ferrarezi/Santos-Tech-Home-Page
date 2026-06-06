import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "O Cubo Mágico Aparece",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a clicar para criar o seu primeiro cubo dentro do mundo 3D do Maya, descobrindo que todo objeto nasce de uma forma simples.`,
  descricao: `Nesta aula, a turma dá o passo mais mágico do mês: faz nascer o primeiro objeto 3D na tela. Até agora as crianças só olharam para o programa dos profissionais e espiaram o mundo 3D girando a câmera. Hoje elas viram criadoras de verdade e fazem um cubo aparecer do nada, com um clique. É o momento em que o mundo vazio ganha o seu primeiro morador.

O assunto central é a ideia das formas básicas. No 3D, tudo o que existe num jogo, num desenho ou num filme começou como uma forma simples: um cubo, uma bola, um tubo. O personagem mais bonito do Roblox, a casinha, o carro, a árvore, tudo nasceu de blocos parecidos com os bloquinhos de montar que as crianças já conhecem. Entender isso cedo é poderoso, porque mostra que criar coisas grandes começa sempre com algo pequeno e fácil.

Por que o cubo primeiro? Porque o cubo é a forma mais amigável de todas: tem lados retos, é fácil de ver de todos os ângulos e é o tijolinho do mundo 3D. Quando a criança cria o seu cubo, ela percebe que tem o controle, que o computador obedece ao clique dela. Essa sensação de poder e de descoberta é o que mantém a turma animada e com vontade de continuar a trilha.

Na prática, o professor vai mostrar onde clicar no Maya para fazer o cubo nascer, deixar cada criança criar o seu, e brincar de dar nome e mexer um pouquinho no objeto. No fim, a turma compartilha a tela e todos comemoram o nascimento do primeiro brinquedo 3D de cada um. É uma aula de muita ação, muito clique e muitos olhinhos brilhando.`,
  materiais: [
    `Um computador por criança com o Maya já aberto em uma cena nova e vazia (o professor deixa tudo pronto antes da aula para não perder tempo).`,
    `Projetor ou TV grande ligada ao computador do professor, para todos verem a demonstração na tela cheia.`,
    `Um cubo de verdade na mão (um dado grande, uma caixinha ou um bloco de montar) para mostrar a forma de perto.`,
    `Cartões com desenhos de formas básicas: cubo, bola e tubo, para a roda de conversa e os jogos.`,
    `Folhas de papel em branco e lápis de cor para a atividade de desenho.`,
    `Adesivos ou carimbos de "Criador 3D" para premiar quem fizer o seu cubo nascer.`,
    `Uma cena de exemplo do Maya já salva com três ou quatro cubos coloridos, caso o professor queira mostrar o resultado final logo no começo.`,
  ],
  conceitosChave: [
    `Forma básica — um formato simples, como um cubo ou uma bola, que serve de tijolinho para construir qualquer coisa no 3D.`,
    `Cubo — uma caixinha de seis lados retos, igual a um dado ou a um bloco de montar; é a primeira forma que a gente cria.`,
    `Criar (ou gerar) — fazer um objeto novo aparecer na tela com um clique, do nada.`,
    `Cena — o mundo vazio dentro do Maya onde a gente coloca os nossos objetos para brincar.`,
    `Objeto — qualquer coisa que a gente cria e que mora dentro da cena, como o nosso cubo.`,
    `Menu — a listinha de palavras no alto da tela onde a gente clica para mandar o computador fazer coisas.`,
    `Selecionar — clicar em cima de um objeto para escolher ele, deixando ele "aceso" e pronto para mexer.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

No Maya, todo objeto 3D começa como uma forma pronta, que o programa chama de "primitiva" (primitive). As primitivas são formas geométricas básicas já prontas para usar: cubo, esfera, cilindro, cone e outras. Nesta aula só usamos o cubo, que no Maya se chama "Cube" e fica no menu de criação de poligonais. Você não precisa dominar o Maya inteiro; precisa só saber criar um cubo com segurança e repetir o caminho várias vezes com calma.

O caminho oficial para criar um cubo é pelo menu de cima: clique em "Create", depois em "Polygon Primitives" e depois em "Cube". Assim que você clica em "Cube", um cubo aparece bem no centro da cena (no ponto chamado de origem, onde as linhas do chão se cruzam). Existe também a Shelf (a barrinha de ícones logo abaixo do menu): na aba "Poly Modeling" há um ícone de cubo; um clique nele cria o cubo na hora. Para crianças pequenas, o ícone da Shelf costuma ser mais fácil, porque é um clique só. Decida qual dos dois você vai ensinar e use sempre o mesmo para não confundir.

Dois detalhes úteis. Primeiro: quando o cubo nasce, ele já vem "selecionado", ou seja, com um contorno verde claro ao redor; isso é normal e mostra que ele está escolhido. Segundo: se a criança clicar várias vezes, vários cubos nascem um em cima do outro; isso não é erro, mas avise para evitar bagunça.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Maya)

10 min, aquecimento e revisão: Mostre o cubo de verdade na mão. Pergunte o que é, conte os lados, deixe passar de mão em mão. Relembre a aula passada: "Lembram que a gente girou a câmera no mundo 3D? Hoje a gente vai colocar uma coisa dentro dele!". Ligue o projetor com a cena vazia do Maya.

15 min, conteúdo novo guiado: No seu computador, com a tela no projetor, faça o cubo nascer devagar. Diga em voz alta cada passo: "Vou no menu de cima, clico em Create, depois em Polygon Primitives, depois em Cube". O cubo aparece no centro. Comemore: "Olha, nasceu!". Faça mais uma ou duas vezes para fixar o caminho. Mostre que o cubo fica com a borda verde quando está selecionado e clique no fundo vazio para "desligar" a seleção.

25 min, mão na massa: Cada criança no seu computador, com o Maya aberto na cena vazia. Guie pelo mesmo caminho, repetindo bem alto e devagar. Passe nas mesas ajudando a apontar o mouse. Deixe cada uma criar o seu cubo. Quando todas tiverem um cubo, proponha criar mais dois ou três para fazer uma torre ou uma fila. Elogie cada cubo que nasce e entregue o adesivo de "Criador 3D".

10 min, desafio e compartilhar: Lance o desafio "quem consegue uma torre de três cubos?". Depois, peça que cada criança gire a tela para mostrar o que criou. Façam uma contagem coletiva dos cubos da turma e comemorem juntos.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a analogia dos bloquinhos de montar: "O cubo é o nosso primeiro bloquinho mágico; com ele a gente vai montar tudo". Chame o ato de criar de "fazer nascer": "Vamos fazer o cubo nascer na tela!". A cena vazia é "o quartinho vazio esperando o primeiro brinquedo". A seleção verde é "o cubo acordando e ficando ligado". Fale pouco e mostre muito: faça você primeiro, devagar, e só então peça que repitam. Conte os lados do cubo junto com elas para juntar matemática e diversão.

## Erros comuns e como ajudar

Clicar muitas vezes e criar uma pilha de cubos: explique que cada clique faz um cubo novo e mostre como apagar os extras com a tecla Delete depois de selecionar. Não achar o menu: aproxime-se, aponte com o dedo na tela e guie o mouse junto. Achar que o cubo sumiu (quando ele nasce atrás de outro ou fora da vista): gire a câmera ou dê zoom para reencontrar. Mexer sem querer e bagunçar a cena: ensine o "clicar no fundo vazio" para desligar a seleção e respirar. Frustração por demorar: comemore cada tentativa, mesmo errada, e lembre que todo profissional começou criando um cubo igualzinho.`,
  exercicios: [
    {
      titulo: `Faz o Cubo Nascer`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre primeiro no projetor, bem devagar, dizendo cada clique em voz alta: Create, Polygon Primitives, Cube. Depois libere as crianças para fazerem no próprio computador. Passe nas mesas apontando o caminho com o dedo e ajudando a guiar o mouse de quem precisar.`,
      atividade: `Cada criança cria o seu primeiro cubo seguindo o caminho do menu, repetindo junto com o professor até o cubo aparecer no centro da cena.`,
      gabarito: `A criança acertou quando um cubo aparece no meio da tela, com a bordinha verde de selecionado. Se nasceu o cubo, está certo, mesmo que tenha precisado de ajuda no caminho.`,
    },
    {
      titulo: `Caça às Formas na Sala`,
      tipo: `jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Levante o cubo de verdade e diga que vamos virar detetives de formas. Combine que, ao ouvir a palavra cubo, todos correm (ou apontam) para algo com cara de cubo na sala. Faça a brincadeira animada e segura, no espaço disponível.`,
      atividade: `O professor fala o nome de uma forma e a turma procura na sala um objeto parecido: caixa, dado, bloco de montar, estojo. Cada criança mostra o que achou.`,
      gabarito: `Acerta quem aponta um objeto de lados retos e formato de caixinha (como caixa, dado ou bloco). Caixas e dados são respostas certas; uma bola não vale para cubo.`,
    },
    {
      titulo: `Roda do Tijolinho Mágico`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda com os cartões de cubo, bola e tubo no meio. Pergunte do que será que é feito o personagem do Roblox, a casinha, o carro. Conduza a conversa para a ideia de que tudo começa de formas simples. Deixe cada criança falar.`,
      atividade: `Cada criança escolhe um cartão de forma e diz uma coisa que poderia ser feita com aquela forma (o cubo vira uma caixa, a bola vira uma cabeça, o tubo vira uma perna).`,
      gabarito: `Acerta quem liga uma forma a um objeto coerente, por exemplo cubo igual a casa ou caixa, bola igual a cabeça ou sol, tubo igual a perna ou braço. Qualquer ligação com sentido é uma resposta certa.`,
    },
    {
      titulo: `Meu Cubo no Papel`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Mostre no projetor o cubo criado no Maya e peça para desenharem o cubo deles do jeito que quiserem, pintando e dando um nome. Circule elogiando e perguntando o nome de cada cubo.`,
      atividade: `A criança desenha um cubo no papel, pinta da cor que quiser e escreve ou dita para o professor o nome que deu ao seu cubo (por exemplo, Cubinho, Bloco Azul).`,
      gabarito: `Acerta quem desenha uma figura de caixinha com lados retos e dá um nome ao cubo. Um quadrado ou caixinha colorida com nome já conta como certo; o capricho do desenho não é o que importa.`,
    },
    {
      titulo: `Desafio da Torre de Cubos`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha o desafio final: criar três cubos e deixá-los um perto do outro como uma torre ou uma fila. Lembre que cada clique no caminho faz um cubo novo. Ajude quem empilhar cubos no mesmo lugar a separar ou apagar os extras. Termine com cada um mostrando a sua torre.`,
      atividade: `Cada criança cria três cubos no Maya e organiza eles formando uma torre ou uma fileira, depois gira a tela para mostrar à turma.`,
      gabarito: `Acerta quem tem três cubos visíveis na cena, separados o bastante para dar para contar um, dois, três. Se a turma consegue contar três cubos na tela da criança, o desafio está concluído.`,
    },
  ],
};
