import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Bola, Caixa e Tubo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança consegue criar esfera, cilindro e cone na cena do Maya e juntar várias formas para montar um objetinho que lembra algo do mundo real.`,
  descricao: `Na aula passada as crianças descobriram o cubo. Agora elas vão ganhar três novos "amiguinhos de forma": a esfera (a bolinha), o cilindro (o tubo ou canudo) e o cone (o chapeuzinho de festa). Com essas formas básicas na mão, o mundo 3D fica muito mais divertido, porque dá para construir quase qualquer coisa.

O assunto central desta aula é a ideia de que tudo ao nosso redor é feito de formas simples encaixadas. Uma boneca de neve é só três esferas. Um foguete é um cilindro com um cone na ponta. Um sorvete é um cone com uma bolinha em cima. Quando a criança percebe isso, ela para de achar que "fazer 3D é impossível" e começa a enxergar o mundo como peças de montar.

Na prática, cada aluno vai abrir o menu de criação do Maya, escolher esfera, cilindro e cone, e colocar essas formas na cena. Depois vai movê-las para perto umas das outras e empilhá-las, montando uma pequena composição. O foco não é caprichar no detalhe, e sim brincar de encaixar e descobrir que muitas formas juntas viram um objeto reconhecível.

Esta aula prepara o terreno para as próximas, quando as crianças vão aprender a mexer, girar e crescer as formas com mais controle. Por enquanto, o objetivo é confiança e repertório: conhecer mais formas e sentir que consegue povoar a cena com elas.`,
  materiais: [
    `Um computador por criança com o Maya já aberto, projeto novo criado e a cena vazia pronta (a área cinza no centro chama-se "viewport").`,
    `Projetor ou TV grande ligada ao computador do professor para demonstrar cada passo bem devagar.`,
    `Arquivo de exemplo "boneco_de_neve.mb" salvo na pasta da aula, mostrando três esferas empilhadas, para abrir e inspirar a turma.`,
    `Cartões impressos grandes com desenhos de objetos reais (foguete, sorvete, boneco de neve, pirulito, robô) para a roda de conversa.`,
    `Massinha de modelar ou bolinhas, tubos e coneszinhos de brinquedo, para as crianças encaixarem formas com as mãos antes do computador.`,
    `Folhas de papel e lápis de cor para o exercício de desenho.`,
    `Adesivos ou estrelinhas para premiar quem montar e compartilhar sua cena no final.`,
  ],
  conceitosChave: [
    `Esfera — a forma de bolinha, redondinha igual a uma bola de futebol ou uma laranja.`,
    `Cilindro — a forma de tubo ou canudo, igual a uma lata de refrigerante ou um rolo de papel.`,
    `Cone — a forma de chapéu de festa ou casquinha de sorvete, larga embaixo e pontuda em cima.`,
    `Cena — o mundo dentro do Maya onde a gente coloca as formas, como uma caixa de brinquedos vazia.`,
    `Forma básica — uma pecinha simples (bola, caixa, tubo) que a gente usa para montar coisas maiores.`,
    `Encaixar — juntar várias formas pertinho umas das outras para virarem um objeto só, como peças de montar.`,
    `Mover — arrastar uma forma de um lugar para outro usando a setinha colorida que aparece nela.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

No Maya, as formas prontas chamam-se "primitivas poligonais" (em inglês, "polygon primitives"). Na aula 3 a turma usou o cubo; hoje você apresenta mais três: esfera, cilindro e cone. Todas ficam no mesmo lugar. No menu superior, com o conjunto de menus "Modeling" ativo (o seletor fica no canto superior esquerdo, escrito "Modeling"), abra "Create" e depois "Polygon Primitives". Ali aparece a lista: Sphere (esfera), Cylinder (cilindro), Cone (cone), entre outras. Ao clicar no nome, o Maya cria a forma no centro da cena.

Há também a "Shelf" (a barra de ícones logo acima da viewport), aba "Poly Modeling", com botõezinhos dessas formas. Para crianças pequenas, clicar no ícone é mais fácil do que navegar pelo menu. Decore a posição desses três ícones antes da aula. Lembre-se da ferramenta de mover: tecla W, que faz aparecer três setinhas coloridas (vermelha, verde e azul) para arrastar o objeto. Não é preciso ensinar girar nem crescer hoje; isso é da aula 5.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Maya)

Aquecimento (10 min): receba a turma e abra o arquivo "boneco_de_neve.mb" no projetor. Pergunte: "Quantas bolas vocês veem? Que objeto é esse?". Relembre o cubo da aula passada criando um rapidinho com Create, Polygon Primitives, Cube. Diga que hoje vêm três amigos novos.

Conteudo novo guiado (15 min): no seu computador, no projetor, mostre devagar. Clique em "Create", desça até "Polygon Primitives" e clique em "Sphere": surge a bolinha. Diga o nome em voz alta: "esfera". Repita criando "Cylinder" (o tubo) e "Cone" (o chapeuzinho). Aperte W e mostre as setinhas, arrastando uma forma para o lado para não ficarem todas grudadas no mesmo ponto.

Mao na massa (25 min): cada criança no seu computador. Peça que criem uma esfera, depois um cilindro, depois um cone, usando os ícones da Shelf "Poly Modeling" ou o menu Create. Em seguida, com a tecla W e as setinhas, devem arrastar as formas para montar algo: um foguete (cilindro embaixo, cone em cima), um sorvete (cone embaixo, esfera em cima) ou um boneco de neve (três esferas). Circule pela sala, elogiando e ajudando um por um.

Desafio e compartilhar (10 min): proponha o desafio "Junte 4 formas e me diga que objeto virou". Depois faça uma volta rápida: cada criança gira a cadeira e mostra a cena, dizendo em uma palavra o que montou. Dê uma estrelinha para cada um.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use sempre apelidos concretos: a esfera é "a bolinha", o cilindro é "o canudo" ou "a latinha", o cone é "o chapéu de festa" ou "a casquinha de sorvete". Evite as palavras difíceis de início; diga o apelido primeiro e o nome certo depois, como um segredo de gente grande.

A grande sacada da aula é a frase: "Tudo é feito de formas!". Mostre objetos da sala: a lixeira é um cilindro, a bola é uma esfera. Brinque de caça às formas pela janela. Compare montar no Maya com brincar de blocos de montar: a gente pega as pecinhas e empilha.

## Erros comuns e como ajudar

O erro mais comum é criar várias formas que nascem todas no mesmo lugar, sobrepostas, e a criança achar que "sumiu". Explique que elas estão grudadas no meio; basta apertar W e arrastar pela setinha. Outro erro é clicar fora e perder a seleção: ensine que clicar em cima da forma a "acende" de novo. Alguns apertam botões sem querer e mudam a tela; tenha calma, desfaça com Ctrl+Z, que volta um passo. Por fim, há quem queira deixar perfeito e trave: lembre que hoje é só brincar de encaixar, sem precisar ficar bonito.`,
  exercicios: [
    {
      titulo: `Caça às formas pela sala`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Comece sentando a turma em roda. Mostre os cartões com objetos reais (foguete, sorvete, boneco de neve, pirulito) e pergunte que formas eles enxergam em cada um. Depois aponte objetos de verdade na sala. O objetivo é treinar o olhar para reconhecer esfera, cilindro e cone no mundo.`,
      atividade: `Olhem ao redor e apontem: uma coisa que parece bolinha (esfera), uma que parece canudo ou latinha (cilindro) e uma que parece chapéu de festa (cone). Cada criança fala um exemplo de cada.`,
      gabarito: `Espera-se que citem exemplos coerentes: esfera (bola, laranja, globo), cilindro (lixeira, copo, lata, rolo de papel), cone (chapéu de festa, casquinha de sorvete, funil). Acertou quem associa a forma certa ao objeto, mesmo usando o apelido.`,
    },
    {
      titulo: `Encaixa com a massinha`,
      tipo: `mão na massa com material físico`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua massinha ou peças de brinquedo (bolinhas, tubos, coneszinhos). Antes do computador, peça que montem com as mãos um objeto juntando pelo menos três formas. Isso prepara o cérebro para fazer o mesmo no Maya. Circule incentivando.`,
      atividade: `Usando a massinha, monte um sorvete (cone embaixo, bolinha em cima) ou um foguete (tubo embaixo, cone em cima). Junte as formas bem encaixadas.`,
      gabarito: `Acertou quem produz um objeto reconhecível formado por formas encaixadas, identificando em voz alta qual é o cone, qual é a esfera e qual é o cilindro. O importante é o encaixe, não a beleza.`,
    },
    {
      titulo: `Três amigos na cena`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `No computador, demonstre uma vez no projetor e depois deixe a turma fazer. Oriente a usar Create, Polygon Primitives ou os ícones da Shelf. Lembre da tecla W para arrastar as formas para longe umas das outras. Ajude individualmente quem não encontra o menu.`,
      atividade: `No Maya, crie uma esfera, um cilindro e um cone. Aperte W e arraste cada forma com as setinhas coloridas para que fiquem lado a lado, sem se sobrepor, como três amiguinhos enfileirados.`,
      gabarito: `A cena deve mostrar as três formas separadas e visíveis. Acertou quem conseguiu criar as três primitivas e movê-las para que nenhuma fique escondida dentro da outra.`,
    },
    {
      titulo: `Desenhe o seu objeto de formas`,
      tipo: `desenho no papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Peça que cada criança invente um objeto e desenhe usando só esfera, cilindro e cone, marcando quais formas usou. Esse planejamento no papel ajuda a montar depois no computador. Passe elogiando as ideias.`,
      atividade: `Desenhe um brinquedo ou personagem usando apenas bolinhas, canudos e chapeuzinhos. Em cada parte, escreva ou diga qual forma é: esfera, cilindro ou cone.`,
      gabarito: `Acertou quem desenha um objeto montado claramente a partir das três formas básicas e consegue nomear cada parte. Por exemplo: um robô com cabeça de esfera, corpo de cilindro e chapéu de cone.`,
    },
    {
      titulo: `Desafio: monte e adivinhe`,
      tipo: `desafio e compartilhar`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o ponto alto. Peça que, no Maya, cada criança junte pelo menos quatro formas para montar um objeto secreto. Depois, em duplas, um mostra a cena e o colega tenta adivinhar o que é. Conduza a rodada final de compartilhamento e dê estrelinhas.`,
      atividade: `Junte quatro ou mais formas (esferas, cilindros e cones) no Maya até virar um objeto de verdade. Não conte para o colega o que é. Mostre a tela e deixe ele adivinhar.`,
      gabarito: `Acertou quem monta uma composição com quatro ou mais formas encaixadas que o colega consegue reconhecer (por exemplo, "é um boneco de neve!" ou "é um foguete!"). Se o colega adivinha, o objeto ficou claro e o desafio foi vencido.`,
    },
  ],
};
