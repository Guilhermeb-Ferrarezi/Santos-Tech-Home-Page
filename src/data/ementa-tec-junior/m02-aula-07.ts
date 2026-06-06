import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando o Nosso Mini-Jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança junta variável, se/então, eventos e placar em um único mini-jogo de caça aos blocos, montando o cenário e definindo a regra principal com o apoio do professor.`,
  descricao: `Esta é a aula em que tudo se encaixa. Nas semanas anteriores, as crianças aprenderam quatro peças separadas: a caixinha mágica que guarda números (a variável), o "se isto acontecer, então faça aquilo" (a decisão), os eventos que disparam ações quando algo acontece no mundo, e o placar que faz os pontos subirem. Agora elas vão pegar essas quatro peças e encaixá-las todas no mesmo brinquedo: um mini-jogo de verdade.

O mini-jogo desta aula é simples e divertido: uma caça aos blocos. Espalhamos blocos especiais pelo mundo (por exemplo, blocos de ouro ou flores) e, toda vez que a criança quebra um desses blocos, ela ganha um ponto no placar. Quem juntar mais pontos vence a rodada. É um jogo que cabe em uma aula porque usa só o que a turma já conhece, mas pela primeira vez tudo funciona ao mesmo tempo, formando uma experiência completa de jogar.

Por que isso importa? Porque criar um jogo de verdade é o momento em que a criança percebe que ela não está só clicando em blocos coloridos: ela está montando um sistema que reage, conta e premia. Esse é o coração do pensamento de quem cria games. A aula valoriza a sensação de "eu fiz isso funcionar", que é o combustível para continuar na trilha.

O foco do professor não é ensinar nada totalmente novo, e sim ligar as peças. A maior parte do tempo é mão na massa: as crianças montam o cenário (espalham os blocos), conferem a variável de pontos, ligam o evento de quebrar bloco ao "se for o bloco certo, então some um ponto" e testam jogando. A aula seguinte, a número 8, será de polir, jogar para valer e mostrar para os colegas, então aqui o objetivo é ter um jogo que já funciona, mesmo que ainda esteja simples.`,
  materiais: [
    `Computadores (um por aluno, ou duplas) com Minecraft Education ou Bedrock e o editor MakeCode já aberto e conectados ao mesmo mundo de teste`,
    `Projetor ou TV grande para o professor mostrar a tela e os blocos do MakeCode passo a passo`,
    `Um mundo Minecraft plano (Flat World) já criado, em modo Criativo, salvo como ponto de partida igual para todos`,
    `Arquivo de exemplo do mini-jogo de caça aos blocos pronto (.mkcd ou print dos blocos) para o professor consultar e mostrar como referência`,
    `Blocos especiais à mão no inventário (por exemplo, blocos de ouro, esmeralda ou flores) para serem os alvos da caça`,
    `Cartões grandes de papel com as quatro peças desenhadas (variável, se/então, evento, placar) para revisar no aquecimento`,
    `Cronômetro ou timer visível na tela para marcar o tempo de cada etapa da aula`,
  ],
  conceitosChave: [
    `Mini-jogo — um joguinho pequeno e completo, com começo, regra e jeito de ganhar, que cabe em uma aula.`,
    `Variável de pontos — a caixinha mágica que guarda quantos pontos a criança já fez no jogo.`,
    `Se/então — a regra que decide: se a criança quebrou o bloco certo, então ela ganha um ponto.`,
    `Evento — o aviso que dispara a ação; aqui o aviso é "alguém quebrou um bloco".`,
    `Placar — o número que aparece na tela mostrando os pontos subindo.`,
    `Regra principal — a regra mais importante do jogo, aquela que diz como se ganha ponto.`,
    `Cenário — o lugar do jogo, com os blocos especiais espalhados para a caça começar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

Um mini-jogo é só a soma de quatro peças que a turma já viu. A variável é uma caixinha que guarda um número; aqui ela guarda os pontos. O evento é o gatilho: no MakeCode existe o bloco "ao quebrar bloco" (em inglês "on block broken"), que dispara toda vez que um jogador destrói um bloco. O se/então é o bloco "se ... então" (no MakeCode fica na gaveta "Lógica", chamada "Logic"). O placar é mostrar o número na tela com o bloco "say" (dizer) ou "print", que escreve no chat do jogo.

A montagem é assim: criamos uma variável chamada "pontos". No bloco "ao quebrar bloco", colocamos um "se o bloco quebrado for ouro, então mude pontos por 1" e logo abaixo um "dizer pontos". Pronto: quebrou ouro, sobe ponto, aparece na tela. Você não precisa decorar nomes em inglês; basta saber que cada peça mora numa gaveta colorida do MakeCode e arrastamos para a área de montagem. Abra o arquivo de exemplo antes da aula e quebre um bloco para confirmar que funciona no seu computador.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre os quatro cartões de papel (variável, se/então, evento, placar) e pergunte o que cada um faz. Deixe as crianças responderem com as próprias palavras. Diga a novidade do dia: "Hoje a gente junta tudo num jogo só!".

Conteudo novo guiado (15 min): no projetor, abra o Minecraft e o MakeCode lado a lado (botão "C" no jogo abre o MakeCode, ou o ícone do agente, dependendo da versão). Na gaveta "Variáveis" ("Variables"), clique em "Criar uma variável" e nomeie "pontos". Arraste o bloco "ao quebrar bloco" da gaveta "Jogador" ("Player"). Dentro dele, encaixe um "se/então" da gaveta "Lógica". Na condição, use "o bloco quebrado é igual a" e escolha ouro. Dentro do então, arraste "mudar pontos por 1" e depois "dizer" mostrando a variável pontos. Volte ao jogo, quebre um bloco de ouro e mostre o número subir no chat. Comemore junto.

Mao na massa (25 min): cada aluno (ou dupla) repete os passos no próprio computador. Circule sem pressa. Primeiro todos criam a variável "pontos". Depois montam o "ao quebrar bloco" com o "se/então". Por fim, cada um espalha de 8 a 10 blocos de ouro pelo mundo plano para virar a caça. Quem terminar testa quebrando os blocos e vendo os pontos subirem. Não exija perfeição; o objetivo é cada jogo dar ponto pelo menos uma vez.

Desafio + compartilhar (10 min): proponha um desafio rápido: "troque o bloco da caça por flores" ou "faça valer 2 pontos em vez de 1". Depois, peça que duas ou três crianças mostrem o jogo no projetor e contem qual é a regra de ganhar ponto. Termine dizendo que na próxima aula vamos jogar para valer e mostrar para todos.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a ideia de uma caça ao tesouro. Os blocos de ouro são os tesouros escondidos; quebrar o tesouro certo dá um pontinho, e o placar é como as estrelinhas que a gente cola no caderno quando acerta. Chame a variável de "caixinha de pontos" e mostre com as mãos: "cada vez que acha o tesouro, a gente coloca mais uma bolinha na caixinha". Para o se/então, use o gesto de pensar: "o jogo pensa: foi o bloco certo? Se foi, ganha ponto; se não foi, nada acontece". Repita os nomes das peças com elas, como uma musiquinha. Evite palavras como "código" ou "função"; fale "as pecinhas do jogo".

## Erros comuns e como ajudar

O mais comum é a criança esquecer de criar a variável "pontos" antes; sem ela o bloco "mudar pontos" não aparece, então confira isso primeiro. Outro erro é colocar o "se/então" fora do "ao quebrar bloco", solto na tela: lembre que o bloco precisa estar encaixado dentro, como uma peça de quebra-cabeça que faz "clique". Muitas vezes o jogo não dá ponto porque a criança escolheu o bloco errado na condição (escolheu pedra em vez de ouro), ou porque o mundo está em modo onde quebrar é difícil; garanta o modo Criativo. Se o número não aparecer, verifique se o bloco "dizer pontos" está logo abaixo do "mudar pontos". Por fim, alguns querem dez regras de uma vez; segure o entusiasmo e peça para fazer a regra principal funcionar primeiro, depois enfeitar.`,
  exercicios: [
    {
      titulo: `Revisão das Quatro Peças`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em círculo com os quatro cartões de papel na mão. Levante um cartão de cada vez e pergunte, com voz animada, o que aquela peça faz no jogo. Deixe várias crianças falarem; não corrija com palavras difíceis, repita a resposta da criança com carinho e complete se faltar algo.`,
      atividade: `O professor mostra os cartões "variável", "se/então", "evento" e "placar". Para cada um, a turma diz em voz alta o que ele faz. Depois, todos juntos respondem: "Hoje vamos juntar essas quatro peças em qual coisa?" (resposta: um jogo!).`,
      gabarito: `Espera-se que a turma associe: variável = caixinha que guarda os pontos; se/então = a regra que decide; evento = o aviso de que algo aconteceu (quebrar bloco); placar = o número dos pontos na tela. A criança acertou quando explica pelo menos duas peças com as próprias palavras e entende que as quatro vão virar um jogo.`,
    },
    {
      titulo: `Montando o Cenário da Caça`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor como pegar o bloco de ouro no inventário (tecla "E" abre o inventário) e como colocá-lo no chão no modo Criativo. Peça que cada aluno espalhe os blocos pelo mundo plano. Circule garantindo que ninguém faça um monte só num canto; incentive espalhar para a caça ficar divertida.`,
      atividade: `Cada aluno abre o mundo plano em modo Criativo e espalha de 8 a 10 blocos de ouro (ou flores) pelo chão, em lugares diferentes, formando o cenário da caça ao tesouro.`,
      gabarito: `O aluno acertou quando há vários blocos especiais espalhados pelo mundo (não amontoados em um único ponto) e o mundo continua plano e navegável. Confirme contando junto com a criança quantos tesouros ela escondeu.`,
    },
    {
      titulo: `Ligando a Regra Principal`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza passo a passo no projetor e depois deixe cada um repetir. Primeiro criar a variável "pontos" na gaveta "Variáveis". Depois arrastar "ao quebrar bloco", encaixar dentro um "se/então" da gaveta "Lógica", escolher ouro na condição, e colocar no então "mudar pontos por 1" e "dizer pontos". Vá de mesa em mesa conferindo os encaixes.`,
      atividade: `No MakeCode, cada aluno monta a regra: ao quebrar um bloco, se for ouro, então soma 1 ponto e mostra o placar. Em seguida volta ao jogo e quebra um bloco de ouro para ver o número subir.`,
      gabarito: `Está certo quando, ao quebrar um bloco de ouro, o número de pontos aparece no chat e aumenta de 1 em 1. Se quebrar outro bloco (pedra, terra) e o ponto não subir, melhor ainda: mostra que o se/então está funcionando. A regra principal do jogo está pronta.`,
    },
    {
      titulo: `Desenhando o Meu Jogo`,
      tipo: `desenho / papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Peça que cada criança desenhe o seu mini-jogo: onde estão os tesouros, qual bloco dá ponto e como fica o placar. Esse desenho ajuda a criança a explicar a própria regra e prepara o compartilhamento da aula 8. Valorize todo desenho, sem julgar o traço.`,
      atividade: `Desenhe o seu mini-jogo de caça aos blocos: mostre os tesouros espalhados, marque qual é o bloco que dá ponto e escreva ou desenhe o placar com um número.`,
      gabarito: `O desenho está completo quando mostra os três elementos: os blocos-tesouro espalhados, a indicação de qual bloco dá ponto, e algum placar (um número, estrelinhas ou bolinhas). A criança deve conseguir apontar no desenho "aqui ganha ponto".`,
    },
    {
      titulo: `Desafio do Tesouro que Vale Mais`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Lance o desafio para quem já tem a regra principal funcionando. Mostre uma vez no projetor como mudar o número no bloco "mudar pontos por" de 1 para 2, ou como trocar o bloco da condição de ouro para flor. Deixe a criança escolher o seu desafio. Ajude só quando travar, sem fazer por ela.`,
      atividade: `Escolha um desafio e faça no seu jogo: (a) trocar o bloco da caça de ouro para flores, ou (b) fazer o tesouro valer 2 pontos em vez de 1. Depois teste quebrando os blocos e veja se o placar reage do jeito novo.`,
      gabarito: `Acertou quem alterou o jogo e testou com sucesso: se trocou o bloco, agora só a flor dá ponto e o ouro não; se mudou para 2 pontos, o placar sobe de 2 em 2. O importante é a criança perceber que mexer numa pecinha muda o comportamento do jogo inteiro.`,
    },
  ],
};
