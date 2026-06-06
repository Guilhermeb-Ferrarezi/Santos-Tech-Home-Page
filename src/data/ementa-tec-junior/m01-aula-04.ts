import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "O Caminho do Robô",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a montar uma sequência de passos na ordem certa para o Agente caminhar até um objetivo, percebendo que trocar a ordem dos comandos leva o robô para o lugar errado.`,
  descricao: `Nesta aula os alunos dão o primeiro grande passo no pensamento de programação: a ideia de sequência. Até agora eles aprenderam a dar comandos soltos para o jogo e conheceram o Agente, aquele robôzinho ajudante que mora dentro do Minecraft. Hoje eles vão juntar vários comandos de movimento, um atrás do outro, para formar um caminho que o Agente percorre sozinho até chegar a um objetivo combinado (por exemplo, um bloco colorido ou um baú).

O coração da aula é a descoberta de que a ORDEM importa. Quando montamos os passos "anda, anda, vira", o Agente vai para um lugar. Quando montamos "vira, anda, anda", ele vai para outro lugar completamente diferente, mesmo usando exatamente os mesmos comandos. As crianças vão viver essa surpresa na prática: o robô some do caminho esperado e elas precisam consertar a sequência juntas, trocando os blocos de lugar até o Agente chegar certinho.

Por que isso importa tanto? Porque sequência é a base de toda programação. Um computador faz uma coisa de cada vez, na ordem em que mandamos. Aprender que "primeiro isto, depois aquilo" muda o resultado é o alicerce para tudo o que vem depois, como repetições e construções. Além disso, a ideia conversa com a vida real da criança: a ordem de vestir a roupa, de escovar os dentes, de fazer um sanduíche.

Ao longo da hora, os alunos vão arrastar blocos de comando no MakeCode (anda para frente, vira à direita, vira à esquerda), apertar o botão para o Agente executar dentro do Minecraft e observar o caminho que ele faz. Eles vão errar de propósito e de verdade, e o erro vira a parte mais divertida: caçar onde a sequência ficou torta e arrumar.`,
  materiais: [
    `Computadores (1 por aluno ou em duplas) com Minecraft Education ou Bedrock e a aba Code Builder (MakeCode) já aberta antes da aula começar.`,
    `Projetor ou TV ligada na tela do professor para mostrar onde clicar passo a passo.`,
    `Um mundo do Minecraft simples e plano (Flat World), com o Agente já invocado perto do jogador e um objetivo visível à frente, como um bloco de lã colorida ou um baú.`,
    `Arquivo de exemplo do MakeCode já carregado com os blocos de movimento à mão (anda para frente, vira à direita, vira à esquerda).`,
    `Tapete ou fita no chão da sala formando uma grade de quadrados grandes, para a brincadeira do "robô humano".`,
    `Cartões de papel impressos com setas (frente, virar à direita, virar à esquerda) para montar sequências sem computador.`,
    `Folhas de desenho com uma grade quadriculada e adesivos ou lápis de cor para a atividade no papel.`,
  ],
  conceitosChave: [
    `Sequência — é colocar os comandos em fila, um atrás do outro, para o robô fazer um de cada vez na ordem que você escolheu.`,
    `Ordem — é quem vem primeiro e quem vem depois; mudar a ordem muda para onde o robô vai.`,
    `Passo — cada bloquinho de comando, como "anda para frente" ou "vira"; juntando passos a gente monta o caminho.`,
    `Agente — o robôzinho ajudante do Minecraft que obedece aos blocos de código que a gente monta.`,
    `Virar — girar o Agente para um novo lado (direita ou esquerda) sem sair do lugar, para depois andar por um caminho diferente.`,
    `Objetivo — o lugar que a gente combinou que o Agente precisa alcançar no final do caminho.`,
    `Consertar (depurar) — quando o robô vai para o lugar errado, a gente olha a sequência, acha o passo trocado e arruma.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

Sequência é o conceito de que um programa executa comandos um de cada vez, de cima para baixo, na ordem em que estão. O Agente do Minecraft é controlado por blocos do MakeCode (o "Code Builder"). Para esta aula você usa três blocos da categoria Agent: "agent move forward 1" (anda para frente), "agent turn right" (vira à direita) e "agent turn left" (vira à esquerda). Importante entender: "virar" NÃO move o Agente de quadrado; ele só gira para outro lado. Quem move é o "andar para frente", e ele sempre anda na direção para a qual o Agente está olhando. Por isso a ordem muda tudo: virar antes ou depois de andar leva a destinos diferentes. Antes da aula, abra o Minecraft num mundo plano, digite o comando de invocar o Agente (ou tenha-o já no mundo) e coloque um objetivo (um bloco colorido) alguns quadrados à frente. Teste o caminho certo você mesmo uma vez.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Faça a brincadeira do "robô humano". Você é o Agente e os alunos dão comandos de boca: "anda", "vira". Mostre que se eles disserem "vira" antes de "anda", você vai para outro lugar. Conecte com a aula passada: "Lembram do nosso ajudante Agente? Hoje vamos fazer ele andar um caminho!"

CONTEÚDO NOVO GUIADO (15 min): No projetor, abra o Minecraft e clique no ícone do Code Builder (o lápis/conector, ou tecla C). Escolha MakeCode. Mostre a paleta de categorias à esquerda e clique em "Agent". Arraste para a área de blocos, encaixados no "on chat command" ou num botão, a sequência: anda para frente, anda para frente, vira à direita, anda para frente. Clique no botão de play/executar e volte ao Minecraft (digite o comando no chat se usar "on chat command"). Mostre o Agente caminhando. Depois, de propósito, troque o "vira" de lugar e rode de novo: a turma vê o robô ir para o lugar errado. Pergunte: "O que mudou? Os blocos são os mesmos! Foi só a ORDEM."

MÃO NA MASSA (25 min): Cada aluno (ou dupla) no seu computador. Peça que montem uma sequência para o Agente chegar até o bloco colorido. Circule pela sala. Quando o robô errar, comemore: "Achamos um caminho torto! Vamos consertar." Ajude a arrastar os blocos e trocar a ordem. Deixe que testem várias vezes.

DESAFIO + COMPARTILHAR (10 min): Coloque o objetivo um pouco mais longe, exigindo duas viradas. Quem chegar mostra a tela para os colegas e conta a ordem dos passos em voz alta.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a analogia da receita: "Para fazer um sanduíche a gente faz na ordem: primeiro o pão, depois o recheio. Se começar pelo recheio na mão, dá bagunça!" Outra analogia: dança ou "siga o mestre" — os passos têm uma ordem. Chame o virar de "girar como um pião, sem sair do quadrado" e o andar de "dar um pulo para frente". Repita sempre: "primeiro isso, DEPOIS aquilo". Evite a palavra "algoritmo"; use "caminho" e "fila de passos". Mostre com o dedo na tela cada bloco enquanto o Agente anda, para ligar o comando ao movimento.

## Erros comuns e como ajudar

O erro número um é achar que "virar" move o Agente; a criança vira duas vezes e estranha que ele não saiu do lugar. Mostre devagar: virar só gira. Outro erro é encaixar os blocos fora do bloco de evento (eles ficam soltos e não rodam); confira se tudo está dentro do "on chat command" ou do botão. Muitos esquecem de clicar em executar ou de digitar o comando no chat para disparar. Alguns contam os quadrados errado; conte junto, apontando. E há quem queira muitos blocos de uma vez: incentive testar pouco, ver o resultado e ajustar. Trate todo erro como caça ao tesouro, nunca como fracasso.`,
  exercicios: [
    {
      titulo: `Robô Humano na Grade`,
      tipo: `Jogo de movimento (sem computador)`,
      tempo: `8 minutos`,
      guiaProfessor: `Use o tapete ou a fita no chão formando quadrados. Explique que um aluno será o "robô" e os outros darão comandos de boca, um de cada vez. Reforce que "virar" só gira o corpo, não muda de quadrado. Comece você como robô para demonstrar.`,
      atividade: `Um aluno fica em pé num quadrado da grade, olhando para frente. A turma combina um quadrado-objetivo (com um brinquedo em cima). Os colegas dão comandos em ordem, um de cada vez: "anda", "vira à direita", "anda". O robô obedece exatamente. Se chegar ao objetivo, todos batem palma; se errar, a turma conserta a sequência e tenta de novo.`,
      gabarito: `Acertou quando o aluno-robô pousa no quadrado-objetivo seguindo a ordem dada. Sinal de aprendizado: a turma percebe sozinha que precisa dizer "vira" antes ou depois de "anda" no momento certo, e corrige a ordem dos comandos para acertar o destino.`,
    },
    {
      titulo: `Sequência de Cartões com Setas`,
      tipo: `Atividade em papel / mão na massa`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua os cartões de setas (frente, virar à direita, virar à esquerda). Mostre uma grade desenhada na lousa com o Agente num canto e um objetivo no outro. Peça que montem, na carteira, a fileira de cartões na ordem que leva o Agente até lá. Circule conferindo.`,
      atividade: `Cada dupla recebe cartões de setas e uma folha com uma grade onde o robô está no canto de baixo e o objetivo está dois quadrados para a frente e um à direita. As crianças colocam os cartões em fila, da esquerda para a direita, montando o caminho: anda, anda, vira à direita, anda.`,
      gabarito: `A sequência esperada é: anda para frente, anda para frente, virar à direita, anda para frente (qualquer caminho válido que pouse o robô no objetivo também vale). Acertou quando, ao "ler" os cartões em ordem e mover o dedo na grade, o robô chega exatamente ao quadrado-objetivo.`,
    },
    {
      titulo: `O Caminho Certo no MakeCode`,
      tipo: `Prática na ferramenta (Minecraft + MakeCode)`,
      tempo: `12 minutos`,
      guiaProfessor: `No computador, garanta que cada aluno tem o Code Builder aberto e os blocos da categoria Agent à vista. Mostre no projetor onde arrastar os blocos para dentro do bloco de evento. Lembre de clicar em executar e disparar o comando no chat. Circule ajudando a encaixar os blocos.`,
      atividade: `Cada aluno monta no MakeCode uma sequência de blocos para o Agente sair de onde está e chegar até o bloco colorido à frente. Use os blocos "anda para frente", "vira à direita" e "vira à esquerda". Depois de montar, clique em executar e veja o Agente caminhar no Minecraft. Ajuste até ele chegar ao objetivo.`,
      gabarito: `Acertou quando o Agente, ao executar a sequência, para em cima ou ao lado do bloco-objetivo combinado. A sequência terá blocos de "anda para frente" intercalados com a virada certa no ponto onde o caminho dobra. Se o Agente passar reto ou parar antes, faltou ou sobrou um "anda"; se foi para o lado errado, a virada está na hora errada.`,
    },
    {
      titulo: `Conserta o Robô Perdido`,
      tipo: `Desafio de consertar (depuração)`,
      tempo: `10 minutos`,
      guiaProfessor: `Prepare um arquivo de exemplo com a sequência ERRADA de propósito (com a virada no lugar trocado, fazendo o Agente sair do caminho). Carregue na tela de cada aluno. Apresente como um mistério: "O robô se perdeu! Quem descobre onde o caminho ficou torto?" Não dê a resposta; faça perguntas.`,
      atividade: `Os alunos recebem uma sequência pronta que leva o Agente para o lugar errado. A missão é descobrir qual passo está fora de ordem e arrastar os blocos para consertar, até o Agente chegar ao objetivo. Podem testar quantas vezes quiserem, executando e observando.`,
      gabarito: `Acertou quando o aluno move o bloco de virar (ou o "anda") para a posição certa e o Agente passa a chegar ao objetivo. Sinal de aprendizado: a criança consegue explicar, com suas palavras, que "o vira estava cedo demais" ou "estava no lugar errado", mostrando que entendeu que a ordem causou o erro.`,
    },
    {
      titulo: `Roda de Conversa: Por que a Ordem Importa?`,
      tipo: `Roda de conversa / reflexão`,
      tempo: `7 minutos`,
      guiaProfessor: `Reúna a turma em roda, longe das telas. Conduza com perguntas abertas e dê espaço para várias crianças falarem. Ligue as respostas à vida delas e a tudo que viveram na aula. Valide as ideias de cada um e feche reforçando o conceito de sequência.`,
      atividade: `Em roda, conversem: "Hoje usamos os mesmos blocos mas o robô foi para lugares diferentes. Por que será? O que aconteceu quando a gente trocou o vira de lugar? Onde mais na sua vida a ordem importa, tipo na hora de se vestir ou fazer um lanche?" Cada um conta um exemplo do dia a dia em que a ordem muda o resultado.`,
      gabarito: `Não há resposta única, mas a roda foi bem-sucedida quando as crianças dizem, com suas palavras, que mudar a ordem dos passos muda para onde o robô vai, e dão pelo menos um exemplo da vida real onde a ordem importa (vestir meia antes do sapato, colocar o recheio depois do pão, escovar antes de dormir).`,
    },
  ],
};
