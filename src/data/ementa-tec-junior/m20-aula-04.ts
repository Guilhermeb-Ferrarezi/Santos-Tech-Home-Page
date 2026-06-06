import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Itens coloridos do meu jeito",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Cada criança vai pintar as partes diferentes dos seus itens 3D com cores diferentes, usando vertex color, para deixar a coleção do jeitinho dela.`,
  descricao: `Na aula passada as crianças descobriram o que é o vertex color: aquela mágica de pintar os pontinhos do objeto 3D direto no Maya, sem precisar de tinta de verdade. Agora chegou a hora mais divertida: pintar tudo do jeito de cada um! Nesta aula o foco é praticar bastante, aplicando cores diferentes em partes diferentes de cada item. Pense numa caixa de presente: a tampa pode ser vermelha e o corpo da caixa pode ser azul. É essa ideia de "cada parte com a sua cor" que vamos treinar.

O segredo para pintar partes diferentes é selecionar só os pontinhos (vértices) que queremos colorir, em vez de pintar o objeto inteiro de uma vez só. Quando a criança seleciona somente a tampa e aplica uma cor, só a tampa muda. Depois ela seleciona o corpo, escolhe outra cor e pronto: o item ficou com duas cores bem separadas. Esse controle é o que transforma um objeto cinza e sem graça num item bonito e cheio de personalidade.

O professor não precisa ser especialista em Maya. Tudo acontece em poucos lugares da tela: o menu de seleção por vértice (clicando com o botão direito do mouse sobre o objeto e escolhendo Vertex), e o menu de cores Mesh Display > Apply Color, junto com a janela Color Set Editor que já foi usada na aula 3. A regra de ouro é demonstrar primeiro no projetor, devagar, e só depois soltar as crianças para fazerem nos próprios itens.

O objetivo do mês é montar uma coleção de itens 3D para o jogo. Nesta semana 2, depois de aprender a pintar, cada aluno vai dar cor a TODOS os itens que já modelou nas aulas anteriores. No fim da aula a turma compartilha as criações e percebe como a mesma forma fica diferente dependendo das cores escolhidas. É a parte em que a criatividade brilha e cada coleção fica única.`,
  materiais: [
    `Computadores com o Maya já aberto e o arquivo de itens 3D de cada criança carregado`,
    `Projetor ou TV grande para o professor demonstrar os passos ao vivo`,
    `Um exemplo pronto pelo professor: uma caixa com tampa de uma cor e corpo de outra cor`,
    `Folha impressa com uma paleta de cores simples (vermelho, azul, amarelo, verde, roxo, laranja)`,
    `Mouse para cada computador (a seleção de vértices fica muito mais fácil com mouse do que com touchpad)`,
    `Cartazes ou fichas com os nomes dos botões em inglês: Vertex, Apply Color, Color Set Editor`,
  ],
  conceitosChave: [
    `Vértice — é cada pontinho que forma o objeto 3D; é onde a cor gruda quando a gente pinta.`,
    `Vertex color — a cor que a gente pinta direto nos pontinhos do objeto, sem usar imagem nem textura.`,
    `Seleção — escolher só uma parte do objeto (só a tampa, por exemplo) para pintar somente aquela parte.`,
    `Parte do item — cada pedaço do objeto que tem um trabalho diferente, como a tampa e o corpo de uma caixa.`,
    `Paleta — o conjunto de cores que você escolheu usar para deixar seu item bonito e combinando.`,
    `Apply Color — o botão do Maya que carimba a cor escolhida nos pontinhos que você selecionou.`,
    `Coleção — todos os itens que a criança já fez juntos, agora ficando coloridos do jeito dela.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para dar esta aula. Tudo gira em torno de três ideias: selecionar uma parte do objeto, escolher uma cor e carimbar essa cor. A criança já viu o vertex color na aula 3; hoje ela só vai praticar bastante. O ponto novo é pintar PARTES diferentes com cores diferentes, e isso depende de selecionar bem.

Antes da aula, abra o Maya, pegue uma caixa simples e pinte a tampa de uma cor e o corpo de outra. Deixe esse exemplo pronto para mostrar logo no começo. Tenha também a janela Color Set Editor já localizada: ela fica no menu Mesh Display (no modo Modeling) > Color Set Editor. O botão de carimbar a cor é o Mesh Display > Apply Color, e ao lado dele há um quadradinho pequeno que abre as opções, onde você escolhe a cor.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre seu exemplo da caixa de duas cores no projetor. Pergunte: "Como será que a tampa ficou de uma cor e o corpo de outra?" Deixe as crianças tentarem adivinhar. Relembre a palavra vértice e a palavra vertex color.

Conteúdo novo guiado (15 min): demonstre devagar no projetor. Primeiro clique com o BOTÃO DIREITO do mouse em cima do objeto e segure; aparece um menu em forma de roda. Arraste até a palavra Vertex e solte: agora você vê os pontinhos. Selecione só os vértices da tampa arrastando um quadrado de seleção em volta deles (clique e arraste com o botão esquerdo). Em seguida vá em Mesh Display > Apply Color, clique no quadradinho de opções, escolha uma cor bem viva e aperte Apply Color. A tampa muda de cor! Repita selecionando o corpo e escolhendo outra cor. Mostre que, para limpar a seleção, basta clicar num espaço vazio.

Mão na massa (25 min): cada criança abre seus próprios itens e pinta partes diferentes com cores diferentes. Passe de mesa em mesa. O combinado é simples: selecionar uma parte, escolher uma cor, carimbar; depois outra parte, outra cor. Incentive pelo menos duas cores por item. Quem terminar um item, parte para o próximo da coleção.

Desafio e compartilhar (10 min): proponha o desafio de deixar um item com TRÊS cores diferentes. No fim, cada criança gira o item na tela e mostra para a turma. Pergunte qual combinação de cores ficou a favorita.

## Como explicar para crianças

Use a ideia de "cada parte com a sua roupa". A tampa veste uma cor, o corpo veste outra. Diga: "Primeiro a gente escolhe só a tampa, depois pinta. Se você pintar sem escolher, o objeto inteiro fica de uma cor só." Compare a seleção com apontar o dedo: "Você aponta para a parte que quer pintar antes de carimbar a cor." Use palavras simples: pontinhos (vértices), carimbar (Apply Color), escolher (selecionar).

## Erros comuns e como ajudar

O erro mais comum é pintar o objeto inteiro porque a criança esqueceu de selecionar só uma parte. Ajude mostrando como clicar num espaço vazio para limpar e começar de novo. Outro erro é não estar no modo Vertex: se ela clica e nada vira pontinho, lembre do botão direito do mouse e da palavra Vertex na roda. Algumas crianças selecionam vértices que não queriam; ensine a segurar Shift para adicionar e a clicar no vazio para zerar. Por fim, se a cor não aparece, confira se ela clicou em Apply Color de verdade e se escolheu uma cor diferente do cinza. Elogie cada tentativa para manter a turma animada.`,
  exercicios: [
    {
      titulo: `Aquecimento: caça aos pontinhos`,
      tipo: `Revisão guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça com a turma toda ao mesmo tempo, projetando a tela. O objetivo é só relembrar como entrar no modo Vertex, sem pintar ainda.`,
      atividade: `Peça para cada criança clicar com o botão direito do mouse em cima de um item e escolher Vertex na roda que aparece. Quando os pontinhos surgirem, ela levanta a mão.`,
      gabarito: `A criança clica com o botão direito sobre o objeto, segura, arrasta até a palavra Vertex e solta. Os vértices (pontinhos) aparecem sobre o objeto. Se nada aparecer, ela não soltou na palavra Vertex e deve tentar de novo.`,
    },
    {
      titulo: `Tampa de uma cor, corpo de outra`,
      tipo: `Prática orientada`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre o item completo uma vez no projetor antes. Acompanhe de mesa em mesa, conferindo se cada um selecionou só a parte certa antes de carimbar.`,
      atividade: `Em um item que pareça uma caixa, selecione só os vértices da tampa e pinte de uma cor. Depois selecione o corpo e pinte de outra cor.`,
      gabarito: `A criança seleciona os vértices da tampa arrastando um quadrado em volta deles, vai em Mesh Display > Apply Color, escolhe uma cor e aperta Apply Color. Depois clica no vazio para limpar, seleciona o corpo, escolhe outra cor e aplica. Resultado: tampa e corpo com cores diferentes.`,
    },
    {
      titulo: `Pintando a coleção inteira`,
      tipo: `Mão na massa`,
      tempo: `15 minutos`,
      guiaProfessor: `Esta é a parte mais longa. Garanta que cada criança use pelo menos duas cores por item. Quem travar, relembre a sequência selecionar, escolher, carimbar.`,
      atividade: `Abra todos os itens que você já modelou e pinte cada um com pelo menos duas cores diferentes em partes diferentes.`,
      gabarito: `Para cada item, a criança repete o ciclo: entra no modo Vertex, seleciona uma parte, aplica uma cor, limpa a seleção, seleciona outra parte e aplica outra cor. Ao final, todos os itens da coleção têm no mínimo duas cores. É correto desde que cada parte tenha cor própria.`,
    },
    {
      titulo: `Desafio das três cores`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha para quem já dominou as duas cores. Incentive a planejar antes qual parte recebe cada cor, olhando a paleta impressa.`,
      atividade: `Escolha um item e deixe ele com três cores diferentes, uma para cada parte. Pense antes em qual cor combina com qual parte.`,
      gabarito: `A criança identifica três partes do item (por exemplo: tampa, corpo e um detalhe), seleciona cada parte separadamente e aplica uma cor diferente em cada uma. O item termina com três cores bem separadas. Não há cor errada; vale qualquer combinação feita com partes selecionadas corretamente.`,
    },
    {
      titulo: `Mostre e conte sua escolha`,
      tipo: `Compartilhar e explicar`,
      tempo: `9 minutos`,
      guiaProfessor: `Cada criança gira o item na tela usando o botão Alt mais o botão esquerdo do mouse para a turma ver de todos os lados. Faça perguntas para incentivar a fala.`,
      atividade: `Mostre seu item favorito para a turma, gire ele na tela e conte por que você escolheu essas cores para cada parte.`,
      gabarito: `A criança apresenta o item, gira a câmera com Alt mais botão esquerdo do mouse e explica a escolha das cores, por exemplo: "Pintei a tampa de vermelho porque é a parte que abre e o corpo de azul para combinar." Qualquer explicação clara sobre as cores escolhidas está correta.`,
    },
  ],
};
