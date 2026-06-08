import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "A Magia do Sorteio",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende a usar o bloco de número aleatório do Scratch para fazer objetos aparecerem em lugares sorteados, deixando cada partida do jogo diferente e cheia de surpresas.`,
  descricao: `Nesta aula a turma descobre uma das coisas mais divertidas dos jogos de verdade: a surpresa. Até agora, quando as crianças apertavam a bandeira verde, tudo acontecia sempre igual. O personagem aparecia sempre no mesmo lugar, a estrela caía sempre na mesma hora. Hoje vamos quebrar essa repetição usando a "magia do sorteio": o bloco "número aleatório" do Scratch. Com ele, o computador escolhe um número diferente cada vez, como quando jogamos um dado e não sabemos o resultado.

O assunto central é a aleatoriedade, mas explicada de um jeito bem concreto para a idade. Aleatório quer dizer "sorteado", "que ninguém sabe qual vai sair". Os alunos vão usar esse bloco principalmente para escolher posições na tela. Em vez de dizer "vá para o ponto exato 100, 50", a criança vai dizer "vá para um lugar qualquer que o computador sortear". Assim, um morcego, uma moeda ou uma estrela aparece num canto diferente a cada rodada, e o jogo nunca fica chato.

Isso importa porque a surpresa é o que prende a atenção de quem joga. Um jogo onde tudo é sempre igual a gente decora e enjoa. Um jogo com sorteio sempre tem um "será que vai cair aqui ou ali?". As crianças vão sentir na pele essa diferença ao apertar a bandeira verde várias vezes e ver o objeto pulando de lugar.

Ao longo da hora, o professor demonstra no projetor como encontrar e encaixar o bloco de número aleatório, e depois cada criança aplica isso ao próprio projeto Scratch do mês, fazendo um objeto surgir em posições sorteadas. No final, todos comparam suas telas e percebem que ninguém tem o jogo exatamente igual ao do colega, mesmo usando os mesmos blocos.`,
  materiais: [
    `Computadores (um por criança) com o Scratch já aberto no projeto do mês, pronto para usar`,
    `Projetor ou TV grande ligada ao computador do professor para a demonstração guiada`,
    `Um projeto de exemplo salvo pelo professor, com um objeto aparecendo em posição sorteada, para mostrar o resultado pronto`,
    `Um dado grande de brinquedo (ou um dado de papel feito antes) para a analogia do sorteio`,
    `Folhas de papel com um retângulo desenhado representando a tela do Scratch, e lápis de cor`,
    `Adesivos ou estrelinhas para premiar quem compartilhar o trabalho no final`,
    `Um cartaz simples com o bloco "número aleatório" desenhado bem grande, para apontar durante a aula`,
  ],
  conceitosChave: [
    `Aleatório — quando o computador sorteia uma resposta e ninguém sabe qual vai sair, igual a jogar um dado.`,
    `Número aleatório — o bloco azul-claro que escolhe sozinho um número entre dois que a gente combina, por exemplo entre 1 e 10.`,
    `Posição — o lugar onde o objeto fica na tela, marcado por dois números, um para o lado e outro para cima e para baixo.`,
    `Surpresa — quando o jogo faz algo diferente a cada partida, deixando quem joga curioso.`,
    `Encaixar bloco — colocar um bloco menor dentro do buraco de outro bloco, como uma peça de quebra-cabeça.`,
    `Partida — cada vez que a gente aperta a bandeira verde e o jogo começa de novo.`,
    `Coordenada x e y — os dois numerozinhos que dizem para onde o objeto vai: x é o lado, y é em cima ou embaixo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Aleatoriedade é a capacidade de o computador escolher um valor que não dá para prever. No Scratch isso vive num bloco verde-claro (categoria Operadores) chamado "número aleatório entre ___ e ___". Você digita dois números nos campinhos e, toda vez que o jogo passa por ali, o Scratch sorteia um valor entre eles, incluindo as pontas. Por exemplo, "número aleatório entre 1 e 6" funciona como um dado.

A grande sacada da aula é encaixar esse bloco de sorteio dentro de outro bloco que precisa de um número. O alvo perfeito para crianças pequenas é o bloco de movimento "vá para x: ___ y: ___" (categoria Movimento, azul). O palco do Scratch vai de x igual a menos 240 até 240 (lado esquerdo a direito) e de y igual a menos 180 até 180 (baixo a cima). Para não complicar, use faixas redondas como x entre menos 200 e 200, e y entre menos 150 e 150. Ao colocar um sorteio em cada campo, o objeto aparece num ponto diferente a cada partida.

Você não precisa decorar coordenadas: o Scratch mostra o x e o y do objeto no painel à direita, embaixo da tela, e atualiza quando você arrasta o objeto. Isso ajuda a "sentir" o palco.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

Aquecimento (10 min): Sente a turma em roda e jogue o dado de brinquedo algumas vezes. Pergunte: "Vocês sabiam qual número ia sair?" Eles dizem que não. Explique que hoje o computador também vai jogar um dado invisível. Relembre rapidinho a bandeira verde e o bloco "vá para".

Conteúdo novo guiado (15 min): No projetor, abra o Scratch. Clique na categoria de blocos "Operadores" (a bolinha verde, na coluna da esquerda). Mostre o bloco "número aleatório entre 1 e 10". Arraste-o para a área de programação só para a turma ver. Agora clique em "Movimento" (azul) e pegue "vá para x: 0 y: 0". Encaixe um bloco de sorteio no campo x e outro no campo y, digitando menos 200 a 200 no x e menos 150 a 150 no y. Coloque por cima um bloco "quando bandeira verde clicada" (categoria Eventos, amarelo). Aperte a bandeira verde várias vezes e mostre o objeto pulando de lugar. Faça um "uau" junto com eles.

Mão na massa (25 min): Cada criança vai ao seu computador, no projeto do mês. Peça que escolham um objeto (uma estrela, uma moeda, um bichinho) e montem a mesma sequência: bandeira verde, depois "vá para x y" com os dois sorteios encaixados. Circule pela sala, ajude a encontrar a categoria certa pela cor e confira se os blocos estão encaixados de verdade. Incentive cada um a apertar a bandeira muitas vezes e contar quantos lugares diferentes apareceram.

Desafio e compartilhar (10 min): Proponha que troquem os números das pontas para o objeto aparecer só na metade de cima da tela (y entre 0 e 150). Depois, dois ou três voluntários mostram a tela no projetor e a turma observa que cada jogo ficou diferente. Distribua estrelinhas.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a palavra "sorteio", que eles já conhecem de brincadeiras. Diga: "O bloco verde é uma caixinha mágica de sorteio. A gente fala dois números e ele tira um escondido lá de dentro." Compare com o dado: "É como jogar um dado gigante, mas o computador joga por nós." Para a posição, diga que o objeto é teletransportado: "Ele some daqui e aparece num lugar surpresa." Evite a palavra coordenada na boca deles; fale "o número do lado" e "o número de cima e baixo".

## Erros comuns e como ajudar

O erro mais comum é arrastar o sorteio para perto do campo, mas não soltar dentro do buraquinho: o bloco fica solto. Mostre que o campo precisa ficar com uma borda iluminada antes de soltar. Outro erro é digitar o número no lugar errado, trocando x por y; lembre que o de cima é o lado e o de baixo é a altura. Há quem coloque números iguais nas duas pontas (5 e 5) e ache que está quebrado, porque o objeto não se move; explique que com dois números diferentes o sorteio funciona. Por fim, alguns esquecem a bandeira verde por cima e nada acontece ao clicar; confira sempre se o bloco amarelo de Eventos está no topo da pilha.`,
  exercicios: [
    {
      titulo: `O Dado Mágico do Computador`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Comece no chão, em roda, com o dado de brinquedo na mão. A ideia é que a turma entenda o que é "sorteio" antes de ver qualquer bloco. Faça perguntas e deixe todos responderem em voz alta, sem pressa de chegar ao Scratch.`,
      atividade: `Sente em roda. O professor joga o dado três vezes. Antes de cada jogada, todos tentam adivinhar o número. Depois conversem: "Deu para saber antes? Por quê não?" Em seguida o professor diz que o Scratch tem uma caixinha que faz a mesma coisa, sorteando números sozinha.`,
      gabarito: `As crianças concluem que ninguém consegue adivinhar o número do dado porque ele é sorteado, e que sorteado quer dizer "surpresa, não dá para saber antes". Acertou a turma que liga a ideia do dado à caixinha mágica do computador.`,
    },
    {
      titulo: `Pinte o Lugar da Surpresa`,
      tipo: `desenho e papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a folha com o retângulo que representa a tela do Scratch. Explique que o retângulo é o palco e que o objeto pode aparecer em qualquer ponto dele. Esta atividade prepara a mão e o olhar antes de mexer no computador.`,
      atividade: `Cada criança desenha uma estrelinha em três lugares diferentes dentro do retângulo, como se a estrela tivesse sido sorteada três vezes. Depois colore cada estrela de uma cor e conta para o colega do lado em que canto cada uma caiu (em cima, no meio, no canto).`,
      gabarito: `A folha tem três estrelas em pontos claramente diferentes dentro do retângulo, mostrando que a criança entendeu que o sorteio faz o objeto cair em lugares variados. Não há posição certa ou errada; o que importa é as três estarem espalhadas, não no mesmo ponto.`,
    },
    {
      titulo: `Montando a Caixinha de Sorteio`,
      tipo: `prática na ferramenta`,
      tempo: `15 minutos`,
      guiaProfessor: `Agora no computador, guie a turma a reproduzir o que viu no projetor. Vá devagar, nomeando as cores das categorias: amarelo para Eventos, azul para Movimento, verde para Operadores. Confira cada criança antes de seguir.`,
      atividade: `No projeto do mês, monte esta pilha: pegue "quando bandeira verde clicada" (amarelo) e, embaixo, "vá para x: 0 y: 0" (azul). Encaixe um bloco "número aleatório entre menos 200 e 200" no campo x e outro "número aleatório entre menos 150 e 150" no campo y. Aperte a bandeira verde cinco vezes.`,
      gabarito: `Ao apertar a bandeira verde, o objeto aparece em lugares diferentes da tela a cada vez. Os dois blocos verdes de sorteio estão encaixados dentro dos campos x e y, e o bloco amarelo está no topo. Se o objeto pula de posição, a criança acertou.`,
    },
    {
      titulo: `Caça-Estrela: Apareceu, Clica!`,
      tipo: `jogo`,
      tempo: `12 minutos`,
      guiaProfessor: `Transforme o sorteio numa mini brincadeira para a turma sentir a graça da surpresa em ação. Eles vão fazer o objeto se sortear quando for clicado, virando um joguinho de pegar. Ajude a achar o bloco de Eventos certo.`,
      atividade: `Troque o bloco do topo por "quando este objeto for clicado" (amarelo, em Eventos), mantendo o "vá para x y" com os dois sorteios. Agora, cada vez que você clica no objeto, ele foge para um lugar sorteado. Brinque de tentar clicar nele várias vezes seguidas.`,
      gabarito: `Cada clique no objeto faz ele se teletransportar para um ponto sorteado da tela, virando um jogo de "pegue se conseguir". A criança acertou se o objeto muda de lugar a cada clique e nunca para no mesmo ponto duas vezes seguidas.`,
    },
    {
      titulo: `Só na Parte de Cima`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o desafio final, mais difícil, para quem terminou os anteriores. A criança precisa pensar em qual número mexer para controlar onde a surpresa acontece. Dê dicas, mas deixe ela tentar primeiro antes de mostrar a resposta.`,
      atividade: `Faça o objeto aparecer somente na metade de cima da tela. Para isso, mude o sorteio do campo y para "número aleatório entre 0 e 150" e deixe o campo x como estava. Aperte a bandeira verde várias vezes e veja se o objeto nunca desce para baixo do meio.`,
      gabarito: `Com o y sorteado entre 0 e 150, o objeto sempre aparece na metade de cima do palco e nunca na parte de baixo. A criança acertou se, depois de muitos cliques na bandeira verde, o objeto ficou sempre na região de cima, provando que ela entendeu que o número de baixo controla a altura.`,
    },
  ],
};
