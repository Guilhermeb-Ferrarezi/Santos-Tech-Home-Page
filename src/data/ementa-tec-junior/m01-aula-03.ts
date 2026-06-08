import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: `Oi, Agente! Quem é Você?`,
  semana: `Semana 2`,
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança sabe chamar o Agente dentro do Minecraft e movê-lo um passo de cada vez (andar para a frente e virar) usando blocos de comando no MakeCode.`,
  descricao: `Nesta aula as crianças conhecem um novo amigo dentro do Minecraft: o Agente. O Agente é um pequeno robô ajudante que mora no jogo e que faz exatamente o que a gente mandar, sem nunca cansar e sem nunca reclamar. Diferente do personagem que a criança controla com as teclas, o Agente só se mexe quando recebe um comando que nós escrevemos com blocos no MakeCode. Por isso ele é o jeito perfeito de mostrar, com calma, a ideia de dar ordens para a máquina.

Por que isso importa? Nas duas primeiras aulas as crianças descobriram que o jogo obedece comandos escritos (a "palavra mágica") e que elas podem digitar e ver o jogo fazer. Agora damos um passo a mais: existe um robô dentro do mundo que é "nosso", e nós o movemos um pedacinho de cada vez. Aprender a mover o Agente passo a passo é a base para tudo que vem depois na trilha — caminhos, repetições e construções. É como aprender a dar a mão para o robô antes de sair andando junto.

O que será feito na prática: o professor mostra no projetor como invocar (fazer aparecer) o Agente perto do personagem e, em seguida, como usar os blocos de movimento do MakeCode para fazer o Agente andar uma casa para a frente e virar para os lados. As crianças repetem nos computadores, sempre um comando por vez, observando o robô responder a cada toque. O foco é a observação: "eu mando, ele faz". Não há ainda repetição automática nem caminhos longos — isso fica para as próximas semanas.

A aula termina com um pequeno desafio em que cada criança faz o Agente dar alguns passos curtos e mostrar para a turma, reforçando a alegria de ver o robô obedecer ao comando que ela mesma montou.`,
  materiais: [
    `Computadores (um por criança ou em duplas) com Minecraft Education ou Bedrock e o editor MakeCode já abertos e logados, com um mundo plano criado.`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar cada passo.`,
    `Um mundo de teste já pronto e salvo: terreno plano, modo criativo, dia (sem monstros), para o Agente andar livre.`,
    `Crachá ou desenho impresso do Agente (o robô) para apresentar o personagem antes de ligar os computadores.`,
    `Folhas com setas grandes (frente, virar à esquerda, virar à direita) e lápis de cor para a atividade de papel.`,
    `Fita crepe no chão da sala para marcar um "tabuleiro" de quadrados grandes, usado na brincadeira do robô humano.`,
    `Lista de presença e adesivos ou carimbos para recompensar quem completar o desafio final.`,
  ],
  conceitosChave: [
    `Agente — um robozinho ajudante que mora no Minecraft e faz só o que a gente manda com os blocos.`,
    `Invocar — fazer o Agente aparecer perto do nosso personagem, como chamar um amigo para vir brincar.`,
    `Comando de movimento — uma ordem que diz ao Agente para dar um passo, como "ande para a frente".`,
    `Um passo de cada vez — o Agente anda só uma casinha do mapa por comando, devagar e com cuidado.`,
    `Virar — o Agente gira o corpo para a esquerda ou para a direita sem sair do lugar, como olhar para o lado.`,
    `Frente do Agente — o lado para onde o rostinho dele aponta; é para lá que ele anda quando mandamos ir em frente.`,
    `Bloco — a pecinha colorida do MakeCode que a gente encaixa para escrever um comando, como uma peça de montar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O Agente é uma entidade especial do Minecraft pensada para ensinar programação. Ele não é controlado pelas teclas: ele só obedece a blocos de código do MakeCode. Pense nele como um robô de estimação dentro do jogo. Antes da aula, abra o Minecraft, entre num mundo plano em modo criativo e abra o editor MakeCode pressionando a tecla "C" (em alguns computadores o ícone fica numa barra; basta clicar nele). O MakeCode abre numa janela com uma paleta de categorias coloridas à esquerda (Player, Blocks, Agent, Loops, etc.) e uma área branca à direita onde você encaixa os blocos.

Os blocos que você vai usar nesta aula estão na categoria "Agent" (Agente), de cor avermelhada. Os principais são: "agent move forward 1" (Agente, ande 1 para a frente) e "agent turn left/right" (Agente, vire à esquerda/direita). Para o Agente aparecer no mundo, use o bloco "agent teleport to player" (teletransportar o Agente para o jogador), também na categoria Agent — é assim que você "invoca" o Agente ao lado do personagem. Encaixe os blocos dentro de um bloco de evento, por exemplo "on chat command" (quando o comando de chat) com uma palavra como "vai", para disparar a ação digitando essa palavra no chat do jogo (tecla "T" ou Enter, depois a palavra).

Importante: o Agente anda em "casas" do mapa (1 bloco = 1 quadrado). "Forward" é a frente do Agente, não a sua. Se ele virar, a frente dele muda. Teste tudo sozinho antes para não travar na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Minecraft + MakeCode)

10 min — Aquecimento/revisão: sem computador. Relembre as duas aulas anteriores ("o jogo obedece comandos", "eu digito, o jogo faz"). Mostre o desenho do Agente e diga: "Hoje vamos conhecer um robô que mora no jogo e faz tudo que mandamos." Faça a brincadeira do robô humano: uma criança é o robô e só anda quando a turma fala "um passo para a frente" ou "vire".

15 min — Conteúdo novo guiado (no projetor): entre no mundo plano. Pressione "C" para abrir o MakeCode. Clique na categoria "Agent". Arraste o bloco "teleport to player" para dentro de um evento "on chat command 'vir'". Volte ao jogo, aperte "T", digite "vir" e mostre o Agente aparecendo. Depois arraste "agent move forward 1" para um comando "andar" e mostre o robô dando um passo. Acrescente "turn right". Faça tudo bem devagar, nomeando cada botão.

25 min — Mão na massa: as crianças, nos computadores, repetem: abrir MakeCode (C), achar a categoria Agent, montar o comando para o Agente aparecer e depois um comando para andar um passo. Circule pela sala, sempre um comando por vez. Comemore cada passo que o Agente der.

10 min — Desafio + compartilhar: cada criança faz o Agente dar três passos curtos e uma virada, e mostra para a turma no projetor ou na própria tela. Dê adesivo a quem conseguir.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame o Agente de "robô de estimação". Diga que ele é tímido: só aparece quando chamamos (invocar = "chamar o amigo"). Compare cada passo a andar numa amarelinha: "uma casa de cada vez". Para virar, peça que as crianças girem o próprio corpo: "vire como quem vai olhar a janela". Reforce que o robô nunca erra de propósito — se ele foi para o lugar errado, foi porque o nosso comando pediu aquilo; então é só consertar o comando. Use sempre a fala "eu mando, ele faz".

## Erros comuns e como ajudar

O erro mais comum é a criança confundir a frente do Agente com a frente dela: o robô anda para "o lado errado". Mostre para onde o rostinho do Agente aponta. Outro erro: esquecer de invocar o Agente, então o comando "andar" parece não funcionar — verifique se ele apareceu. Crianças também arrastam o bloco para fora do evento e ele não dispara; ajude a encaixar dentro do bloco de comando até dar o "clique". Por fim, muitos digitam a palavra do chat errada — confira se a palavra no MakeCode é igual à digitada no jogo. Mantenha sempre um comando por vez para não confundir.`,
  exercicios: [
    {
      titulo: `Oi, Agente! Apareça aqui`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor como invocar o Agente. Diga à turma que o robô é tímido e só vem quando chamamos. Peça que cada criança monte o comando de aparecer antes de qualquer outra coisa.`,
      atividade: `Abra o MakeCode com a tecla "C". Clique na categoria "Agent" e arraste o bloco "teleport to player" para dentro de um comando de chat chamado "vir". Volte ao jogo, aperte "T", digite "vir" e veja o Agente aparecer do seu lado.`,
      gabarito: `Acertou quando o Agente surge ao lado do personagem logo depois de digitar "vir" no chat. Se nada aparecer, confira se o bloco está dentro do comando e se a palavra digitada é igual à do MakeCode.`,
    },
    {
      titulo: `Um passo de cada vez`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Relembre a amarelinha: uma casa por vez. Demonstre o bloco de andar para a frente e peça que cada criança faça o Agente dar um único passo e observe.`,
      atividade: `Na categoria "Agent", arraste o bloco "agent move forward 1" para um comando de chat chamado "andar". No jogo, digite "andar" e conte em voz alta: "um passo!". Repita o comando e veja o Agente avançar mais uma casa.`,
      gabarito: `Acertou quando, a cada vez que digita "andar", o Agente caminha exatamente uma casa para a frente. Se ele não se mexe, verifique se o Agente já foi invocado e se o bloco está dentro do comando.`,
    },
    {
      titulo: `Robô humano na sala`,
      tipo: `jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça um tabuleiro com fita crepe no chão. Escolha uma criança para ser o "Agente humano". A turma dá os comandos em voz alta, um por vez. Troque o robô a cada rodada para todos participarem.`,
      atividade: `Em pé sobre o tabuleiro de fita, o "Agente humano" só se move quando a turma fala um comando de cada vez: "ande um passo para a frente" ou "vire à direita". Levem o robô de um quadrado de partida até um quadrado de chegada.`,
      gabarito: `Acertou quando o robô humano chega ao quadrado de chegada usando só passos e viradas, um comando por vez, sem andar sozinho. Mostra que a turma entendeu "um passo de cada vez".`,
    },
    {
      titulo: `Desenhe o caminho do Agente`,
      tipo: `desenho/papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue a folha com setas e quadradinhos. Explique que cada seta é um comando. Peça que a criança desenhe e cole as setas mostrando como o Agente vai do começo ao fim.`,
      atividade: `Na folha quadriculada, marque um ponto de partida e um de chegada. Desenhe as setas (frente, virar à esquerda, virar à direita) na ordem certa para o Agente chegar até o objetivo, uma seta para cada passo.`,
      gabarito: `Acertou quando a sequência de setas, seguida passo a passo com o dedo, leva do ponto de partida até a chegada. O número de setas deve bater com o número de passos do caminho.`,
    },
    {
      titulo: `Mostre seu robô para a turma`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Convide cada criança a programar três passos e uma virada e apresentar no projetor ou na própria tela. Comemore cada apresentação e entregue um adesivo. Mantenha o ritmo leve e elogie a coragem de mostrar.`,
      atividade: `Monte os comandos para o Agente aparecer, andar três passos para a frente e virar uma vez para a direita. Depois mostre para a turma o seu robô obedecendo aos seus comandos.`,
      gabarito: `Acertou quando o Agente aparece, dá três passos completos e faz uma virada à direita na frente da turma. A criança consegue dizer "eu mandei e ele fez", provando que entendeu chamar e mover o Agente.`,
    },
  ],
};
