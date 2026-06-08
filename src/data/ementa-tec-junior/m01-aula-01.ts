import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "A Palavra Mágica que o Jogo Obedece",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança descobre que digitar uma palavra escolhida no chat do Minecraft faz o jogo obedecer e reagir, montando com o professor um primeiro bloco de evento no MakeCode.`,
  descricao: `Nesta primeira aula da trilha de criação de games, as crianças conhecem uma dupla poderosa: o Minecraft, o mundo de blocos que elas já amam, e o MakeCode, uma ferramenta de programação por blocos coloridos que fica ligada ao jogo. A grande descoberta do dia é simples e mágica para a idade: existe uma palavra que, quando digitada no chat do jogo, faz alguma coisa acontecer no mundo. O jogo obedece à palavra.

Isso importa porque é a porta de entrada para tudo que vem depois no mês. Antes de o Agente andar, antes de qualquer repetição ou construção automática, a criança precisa entender a ideia central de programação: nós damos uma ordem e a máquina cumpre essa ordem. Quando a criança digita a palavra e vê fogos, um som ou um efeito surgir, ela sente na prática que está no comando. Esse momento de encantamento é o que sustenta a motivação pelas próximas sete aulas.

O que será feito é bem concreto e guiado. O professor mostra no projetor o MakeCode aberto e ligado ao Minecraft. Juntos, a turma arrasta um bloco de evento do tipo quando eu digito, escolhe uma palavra simples (por exemplo, magia), encaixa um bloco que faz algo visível ou sonoro e testa no jogo. As crianças repetem o gesto no próprio computador, com muita demonstração e pouco texto, porque ainda leem e escrevem pouco.

Ao final, cada criança terá digitado sua palavra mágica e visto o mundo reagir. Não é decorar nada: é viver a relação entre comando e resposta, a base de todo o pensamento computacional que a Santos Tech quer plantar desde o primeiro dia.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com Minecraft Education ou Minecraft Bedrock e o editor MakeCode já abertos e conectados ao mesmo mundo de teste.`,
    `Projetor ou tela grande mostrando a tela do professor, com Minecraft e MakeCode lado a lado.`,
    `Um mundo de Minecraft simples e plano (modo criativo, tempo fixo de dia, clima limpo) preparado antes da aula para evitar perigos e distrações.`,
    `Crachás ou etiquetas com o nome de cada criança e cartões grandes com a palavra mágica escolhida (por exemplo, MAGIA) em letra de forma.`,
    `Folhas em branco e lápis de cor para o exercício de desenho da palavra mágica.`,
    `Uma palavra mágica combinada com a turma e um efeito de exemplo testado pelo professor antes (fogos, som ou bloco de partículas) para garantir que funciona.`,
    `Lista de presença e um sininho ou música curta para marcar a hora de parar e compartilhar.`,
  ],
  conceitosChave: [
    `Comando — uma ordem que a gente dá para o jogo, como falar mágica e o jogo obedecer.`,
    `Chat — a caixinha de mensagens do Minecraft onde a gente digita a palavra mágica para o jogo ler.`,
    `Evento — o momento que faz a mágica começar; aqui o evento é quando eu digito a palavra.`,
    `Bloco — uma pecinha colorida do MakeCode que a gente encaixa como peça de montar para dar uma ordem.`,
    `MakeCode — o lugar das pecinhas coloridas que conversa com o Minecraft e manda ele fazer coisas.`,
    `Programar — montar as pecinhas na ordem certa para o jogo fazer o que a gente quer.`,
    `Rodar ou testar — apertar o botão para ver se a nossa mágica funciona de verdade no jogo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Você não precisa ser jogador de Minecraft para dar esta aula. Precisa entender uma ideia: o MakeCode é um editor de programação por blocos que se conecta ao Minecraft. Quando você liga os dois, os comandos que você monta no MakeCode passam a valer dentro do jogo. O coração da aula é o bloco de evento on chat command, que em português aparece como quando comando de chat. Ele funciona assim: você define uma palavra (por exemplo, magia) e tudo que estiver encaixado dentro desse bloco acontece quando alguém digita essa palavra no chat do jogo.

Antes da aula, faça este caminho sozinho. Abra o Minecraft, crie um mundo plano no modo criativo. Abra o MakeCode pelo jogo: no Minecraft Education, aperte a tecla C ou clique no ícone do Agente ou no item de código; no Bedrock, use a conexão Code Connection. No MakeCode, vá à categoria Player (Jogador), arraste o bloco on chat command, troque a palavra para magia. Depois vá à categoria Mobs, Blocks ou Loops e encaixe algo bem visível: tocar um som, criar partículas ou colocar fogos. Volte ao jogo, abra o chat (tecla T ou o balãozinho), digite magia e veja acontecer. Faça isso uma vez e a aula fica tranquila.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma e brinque de Simão Manda. Você dá um comando (pular, bater palma) e quem obedece está programado. Diga a frase do dia: hoje a gente vai ensinar uma palavra mágica para o jogo obedecer.

Conteúdo guiado (15 min): no projetor, mostre o Minecraft e o MakeCode lado a lado. Aponte os blocos coloridos: são pecinhas de montar. Arraste, na frente deles, o bloco quando comando de chat (categoria Player). Troque a palavra para magia, falando cada letra alto. Encaixe dentro um bloco de efeito (som, partícula ou fogos). Vá ao jogo, abra o chat, digite magia e deixe a turma ver o jogo obedecer. Repita uma vez para fixar.

Mão na massa (25 min): cada criança (ou dupla) repete no próprio computador. Circule e ajude a arrastar o bloco e a encaixar o efeito. Não exija que digitem sozinhas se ainda não escrevem: deixe o cartão com a palavra MAGIA à vista para copiarem letra por letra. Celebre cada efeito que aparece. Se alguém terminar antes, peça para trocar o efeito por outro.

Desafio e compartilhar (10 min): toque o sininho. Convide duas ou três crianças a mostrarem sua mágica no projetor. Pergunte: quem manda no jogo? A resposta é a criança. Encerre dizendo que na próxima aula a gente vai mandar o jogo fazer ainda mais coisas.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de palavra mágica de história: como o abracadabra que abre a porta. Aqui a porta é o jogo e a palavra é a que a gente escolheu. Compare os blocos do MakeCode com peças de montar ou Lego: a gente encaixa pecinhas para fazer uma ordem. Chame o chat de caixinha de recados do jogo. Diga que digitar é cochichar a palavra mágica para o jogo. Fale devagar, mostre com o dedo na tela e repita o gesto. Evite palavras como variável ou função: nesta aula só existem palavra mágica, pecinha, encaixar e obedecer.

## Erros comuns e como ajudar

O mais comum é o MakeCode desconectar do jogo: a mágica não funciona porque a ponte caiu. Reabra a conexão pelo jogo antes de tentar de novo. Outro erro é a criança digitar a palavra com a letra errada ou com espaço; deixe o cartão à vista e confira letra por letra. Há quem esqueça o sinal de barra ou o jeito de abrir o chat; mostre a tecla T e o balãozinho. Algumas crianças arrastam o bloco mas não encaixam o efeito dentro dele; mostre que a pecinha precisa entrar na boca do bloco até dar o clique. Por fim, cuidado com a euforia: combine antes que só testamos quando o professor disser pode.`,
  exercicios: [
    {
      titulo: `Simão Manda dos Programadores`,
      tipo: `jogo de aquecimento`,
      tempo: `8 minutos`,
      guiaProfessor: `Apresente como brincadeira para entender o que é um comando. Explique que você será quem dá as ordens e que obedecer a um comando é o que um jogo programado faz. Dê comandos simples e físicos, um de cada vez, sem ainda usar o computador.`,
      atividade: `Em roda, o professor diz comandos como Simão manda pular, Simão manda bater palma, Simão manda sentar. As crianças só obedecem quando ouvem a palavra combinada (Simão manda). Depois, troque a palavra-gatilho para magia e diga magia faz pular, magia faz girar, mostrando que uma palavra escolhida dispara uma ação.`,
      gabarito: `A criança acerta quando obedece apenas ao ouvir a palavra combinada e fica parada quando a palavra não aparece. Sucesso é a turma associar palavra-gatilho a ação, ou seja, comando gera resposta. O professor confirma observando quem reage certo à palavra e quem ignora os comandos sem o gatilho.`,
    },
    {
      titulo: `Desenhe sua Palavra Mágica`,
      tipo: `desenho e papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua folhas e lápis de cor. Diga que cada um vai inventar e ilustrar a palavra mágica que o jogo vai obedecer. Mostre no quadro a palavra MAGIA em letra de forma como modelo. Aceite cópias e tentativas, pois muitos ainda escrevem pouco.`,
      atividade: `Cada criança escreve ou copia uma palavra mágica curta (magia, abra, pum) e desenha o que ela faz acontecer no Minecraft: fogos, um som, estrelinhas. Quem quiser pode desenhar também a si mesma digitando no chat.`,
      gabarito: `Espera-se um desenho com uma palavra (ainda que copiada do modelo) e uma ação ilustrada ligada a ela. Acerta quem mostra a relação palavra mais efeito, por exemplo a palavra magia e fogos ao lado. O professor valida pedindo que a criança aponte a palavra e diga o que ela faz.`,
    },
    {
      titulo: `Montando o Bloco Quando Eu Digito`,
      tipo: `prática guiada na ferramenta`,
      tempo: `15 minutos`,
      guiaProfessor: `No computador, conduza passo a passo. Mostre a categoria Player no MakeCode, ajude a arrastar o bloco quando comando de chat e a trocar a palavra para a combinada. Circule pelas mesas garantindo que cada um encaixe um bloco de efeito dentro. Mantenha o cartão da palavra à vista.`,
      atividade: `Cada criança ou dupla arrasta o bloco quando comando de chat, escreve a palavra mágica nele e encaixa dentro um bloco de efeito (som, partícula ou fogos) seguindo o professor. Depois abre o chat do jogo, digita a palavra e observa.`,
      gabarito: `Está correto quando o bloco de evento tem a palavra certa e um efeito encaixado dentro dele, e ao digitar a palavra no chat algo acontece no jogo. Sucesso é o efeito aparecer. Se nada acontecer, o professor checa a conexão MakeCode-Minecraft e a grafia da palavra.`,
    },
    {
      titulo: `Roda da Mágica: Quem Manda no Jogo?`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Reúna a turma em roda longe das telas. Faça perguntas abertas e simples, dando vez a cada criança. O objetivo é elas verbalizarem a ideia de comando e resposta com as próprias palavras, sem termos técnicos.`,
      atividade: `Pergunte: O que aconteceu quando você digitou a palavra mágica? Quem mandou o jogo fazer aquilo? O jogo obedeceu sozinho ou porque você deu uma ordem? Deixe cada criança responder e contar qual efeito escolheu.`,
      gabarito: `A resposta esperada é a criança dizer que ela mandou e o jogo obedeceu à palavra que ela digitou. Acerta quem conecta digitar a palavra com o efeito aparecer. O professor confirma quando a turma demonstra entender que foi um comando dela, e não o jogo agindo por conta própria.`,
    },
    {
      titulo: `Desafio: Troque o Efeito da Mágica`,
      tipo: `desafio na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Proponha como missão para quem já fez a mágica funcionar. Mostre rapidamente onde ficam outros blocos de efeito (Mobs, Blocks ou sons) e incentive a experimentar trocar a pecinha de dentro, mantendo a mesma palavra mágica. Ofereça ajuda apenas quando travarem.`,
      atividade: `Mantendo o bloco quando comando de chat com a mesma palavra, a criança troca o efeito de dentro por outro diferente (de fogos para um som, ou de som para partículas), testa de novo no chat e mostra a um colega o que mudou.`,
      gabarito: `Está certo quando, com a mesma palavra mágica, um efeito diferente do anterior acontece ao digitar no chat. Sucesso é a criança perceber que mudar a pecinha de dentro muda o resultado, mas a palavra que dispara continua a mesma. O professor valida vendo o novo efeito funcionar.`,
    },
  ],
};
