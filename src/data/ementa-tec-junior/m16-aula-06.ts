import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Itens e tempo de poder",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Nesta aula a criança vai encher o jogo de itens colecionáveis, criar um item de vida extra e fazer um power-up que dura poucos segundos usando um temporizador simples.`,
  descricao: `Hoje o jogo fica muito mais divertido de jogar! Até agora a criança já fez o herói se mexer, criou variáveis (as caixinhas mágicas), passou de fase e ganhou um super poder. Nesta aula nós vamos espalhar muitos itens pelo cenário para o jogador correr atrás deles. Quanto mais coisinhas brilhando na tela, mais vontade de pegar tudo!

A grande novidade do dia é o "tempo de poder". Em muitos jogos, quando você pega um item especial, fica forte por alguns segundinhos e depois volta ao normal. Pense no morango do Pac-Man ou na estrela do Mario: o poder não dura para sempre, ele tem um relógio escondido contando o tempo. No Construct 3 esse relógio se chama "Wait" (esperar) ou o comportamento "Timer", e é ele que faz o power-up acabar sozinho depois de poucos segundos.

A criança também vai criar um item de vida extra. Lembra que na aula passada o jogo já tinha uma variável de vidas? Agora vamos colocar um coração no cenário que, quando coletado, soma mais um na conta de vidas. É a primeira vez que a criança liga um item novo a uma variável que ela mesma criou — um momento muito gostoso de ver tudo se conectando.

Por fim, vamos caprichar nos sons de coletar. Cada tipo de item pode ter um som diferente: um "ploc" alegre para a moeda, um "ding" para o coração, um "uau" mágico para o power-up. O som é o que dá aquela sensação de recompensa e deixa o jogo com cara de jogo de verdade. Ao final, o jogo estará cheio de itens divertidos para pegar e um poder que pisca e some, deixando todo mundo querendo jogar de novo.`,
  materiais: [
    `Computadores com o Construct 3 já aberto no projeto do jogo de cada criança (o que foi feito nas aulas anteriores)`,
    `Projetor ou TV ligado no computador do professor para demonstrar cada passo`,
    `Projeto de exemplo pronto do professor, com 3 moedas, 1 coração de vida extra e 1 power-up que dura 5 segundos, para mostrar o resultado final`,
    `Sprites prontos de itens (moeda, coração, estrela de power-up) salvos numa pasta, caso alguma criança não queira desenhar`,
    `Três arquivos de som curtos (um "ploc", um "ding" e um "uau"), já importados no projeto de exemplo`,
    `Folha impressa com o desenho de um relógio e a palavra "5 segundos" para explicar o tempo de poder de forma visual`,
    `Adesivos ou carimbos para premiar quem conseguir ligar o coração à variável de vidas`,
  ],
  conceitosChave: [
    `Item colecionável — coisinha no cenário que o jogador pega ao encostar, como moeda, coração ou estrela.`,
    `Vida extra — um item que, ao ser pego, soma mais um na contagem de vidas do herói.`,
    `Power-up — item especial que deixa o herói mais forte ou diferente por um tempinho.`,
    `Tempo de poder — o relógio escondido que conta os segundos do power-up e o faz acabar sozinho.`,
    `Wait (esperar) — ordem do Construct 3 que diz "espere alguns segundos antes de fazer a próxima coisa".`,
    `Som de coletar — barulhinho de recompensa que toca quando o jogador pega um item.`,
    `Destruir (Destroy) — ordem que faz o item sumir da tela depois de ser coletado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Construct 3. Esta aula repete uma receita que a criança já viu: colocar um objeto, dar a ele o comportamento de coletável e criar um evento "se o herói encostar no item, então faça algo". A novidade é o "tempo de poder", feito com a ação "Wait" (esperar). Pense no "Wait" como um botão de pausa de cozinha: você liga o poder, manda esperar 5 segundos, e depois manda desligar o poder. Tudo acontece sozinho. Antes da aula, abra o projeto de exemplo e teste pegar a moeda, o coração e o power-up uma vez, só para sentir o caminho. Os três lugares que você mais vai usar hoje são: o painel de objetos (canto direito), a "Event Sheet" (folha de eventos) e a aba "Sounds" (sons) no painel "Project".

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Pergunte "quem lembra como a moeda some quando o herói encosta?" Abra a Event Sheet no projetor e mostre o evento antigo "On collision with Player, Coin Destroy". Mostre rapidinho o jogo de exemplo já cheio de itens para criar empolgação.

15 min — Conteúdo novo guiado (demonstre no projetor): Primeiro, o item de vida extra. Clique com o botão direito numa área vazia do Layout, escolha "Insert New Object", escolha "Sprite", desenhe ou cole um coração e nomeie o objeto como "Coracao". Adicione a ele o comportamento clicando em "Behaviors" e depois no sinal de mais; aqui só precisamos detectar colisão, então deixe o coração simples. Vá na Event Sheet, clique em "Add event", escolha o objeto "Player", evento "On collision with another object", e selecione "Coracao". Em "Add action", escolha a variável de vidas e a ação "Add 1". Depois adicione outra ação: objeto "Coracao", ação "Destroy". Toque um som com a ação "Audio - Play". Segundo, o power-up com tempo: crie o evento de colisão com a estrela; na ação, ligue o poder (por exemplo, "Set Player speed to 300" ou trocar a animação). Em seguida adicione a ação "System - Wait" e digite 5 (segundos). Logo abaixo, adicione a ação que desliga o poder ("Set Player speed to 150"). Pronto: o poder dura 5 segundos e volta sozinho.

25 min — Mão na massa: Cada criança adiciona pelo menos três moedas a mais (basta copiar e colar a moeda no Layout), cria o coração de vida extra ligado à variável de vidas e faz o power-up com "Wait" de poucos segundos. Passe de mesa em mesa. Quem terminar cedo ajusta os sons, escolhendo um barulho diferente para cada item na aba "Sounds".

10 min — Desafio e compartilhar: Lance o desafio de mudar o tempo do poder (que tal 3 segundos? e 10?). Peça para duas ou três crianças mostrarem o jogo no projetor e contarem qual item é o favorito delas.

## Como explicar para crianças

Use a ideia do relógio: "O power-up é como um sorvete mágico. Você toma e fica super rápido, mas o sorvete derrete em 5 segundos e aí você volta ao normal!" Para o "Wait", diga: "É a gente pedindo para o jogo contar até cinco antes de tirar o poder." Para o coração: "Cada coração que você pega é mais uma chance de não perder o jogo." Sempre mostre na tela acontecendo, porque a criança entende muito mais vendo do que ouvindo.

## Erros comuns e como ajudar

O erro mais comum é esquecer a ação "Destroy", e aí o item fica grudado dando vidas infinitas — peça para a criança adicionar o "Destroy" logo depois de somar a vida. Outro erro é colocar o "Wait" no lugar errado: a ação que desliga o poder precisa vir depois do "Wait", nunca antes. Algumas crianças digitam o tempo com vírgula ou letra; lembre que é só o número 5. Se o som não tocar, confira se o arquivo foi importado na aba "Sounds" e se o nome digitado na ação está igualzinho. E se nada acontece ao encostar, quase sempre o evento foi criado no objeto errado: deve ser colisão do "Player" com o item.`,
  exercicios: [
    {
      titulo: `Caça aos itens no jogo de exemplo`,
      tipo: `Observação e identificação`,
      tempo: `5 minutos`,
      guiaProfessor: `Abra o projeto de exemplo no projetor e jogue na frente da turma. Vá apontando cada item enquanto pega.`,
      atividade: `As crianças assistem o professor jogar e gritam o nome de cada item que aparece na tela (moeda, coração, estrela). Cada criança diz qual item achou mais legal.`,
      gabarito: `Os itens do jogo de exemplo são: moeda (colecionável que dá pontos), coração (vida extra) e estrela (power-up com tempo). Resposta correta é qualquer criança nomear esses três tipos; o item favorito é livre, pois é opinião.`,
    },
    {
      titulo: `Espalhando moedas pelo cenário`,
      tipo: `Prática guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como selecionar a moeda no Layout, usar Ctrl+C e Ctrl+V para copiar e arrastar para um novo lugar. Garanta que cada cópia fique em um ponto diferente.`,
      atividade: `A criança copia e cola a moeda pelo menos três vezes, posicionando cada nova moeda em um lugar diferente do cenário. Depois testa o jogo e pega todas.`,
      gabarito: `O cenário deve terminar com pelo menos quatro moedas no total (a original mais três cópias), todas em lugares diferentes, e todas devem sumir ao serem coletadas porque já têm o evento "On collision - Destroy".`,
    },
    {
      titulo: `O coração que dá vida extra`,
      tipo: `Mão na massa com variável`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a criação do objeto "Coracao" e o evento de colisão. Verifique especialmente se a criança adicionou a ação "Add 1" na variável de vidas E a ação "Destroy" no coração.`,
      atividade: `A criança insere um sprite de coração, cria o evento "Player - On collision with Coracao" e adiciona duas ações: somar 1 na variável de vidas e destruir o coração. Testa pegando o coração e olhando o número de vidas subir.`,
      gabarito: `O evento correto é: "Player On collision with Coracao" → ação 1: variável de vidas "Add 1"; ação 2: "Coracao Destroy". Ao testar, o número de vidas deve aumentar em 1 e o coração deve sumir da tela. Se as vidas sobem mas o coração não some, falta o "Destroy".`,
    },
    {
      titulo: `O power-up que derrete em 5 segundos`,
      tipo: `Desafio com temporizador`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre a ordem das ações: ligar o poder, depois "System - Wait" com 5, depois desligar o poder. Reforce que a ação de desligar vem DEPOIS do Wait.`,
      atividade: `A criança cria o evento de colisão com a estrela, liga um poder (por exemplo, aumentar a velocidade do herói), adiciona "System - Wait 5" e, por último, a ação que volta o herói ao normal.`,
      gabarito: `A sequência correta de ações é: 1) ligar o poder (ex.: "Player Set speed to 300"); 2) "System Wait 5 seconds"; 3) desligar o poder (ex.: "Player Set speed to 150"). Ao testar, o herói fica diferente por 5 segundos e volta ao normal sozinho. Se o poder não acaba, a ação de desligar está antes do Wait ou está faltando.`,
    },
    {
      titulo: `Cada item com seu som e seu tempo`,
      tipo: `Personalização e criação livre`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre a aba "Sounds" no painel "Project" e a ação "Audio - Play". Incentive sons diferentes por item e deixe a criança escolher um novo tempo para o power-up.`,
      atividade: `A criança coloca um som diferente para a moeda, para o coração e para o power-up, e muda o tempo do poder para um número novo à escolha dela (por exemplo, 3 ou 10 segundos). Depois mostra para um colega.`,
      gabarito: `Cada um dos três itens deve tocar um som ao ser coletado, usando a ação "Audio Play" com um som diferente para cada. O tempo do power-up no "Wait" pode ser qualquer número escolhido pela criança (3, 7, 10...), desde que o poder ligue e desligue corretamente. O som só toca se o arquivo estiver na aba "Sounds" e o nome na ação estiver igual ao do arquivo.`,
    },
  ],
};
