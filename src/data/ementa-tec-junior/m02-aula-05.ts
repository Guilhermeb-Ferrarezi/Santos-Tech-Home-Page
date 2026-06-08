import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "O Mundo Reage ao Que Fazemos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende que ações dela no Minecraft (como quebrar um bloco ou andar) podem disparar uma resposta divertida no mundo, ligando um evento a uma ação dentro do MakeCode.`,
  descricao: `Nesta aula as crianças descobrem uma das ideias mais mágicas da programação de jogos: o mundo pode reagir sozinho ao que o jogador faz. Até agora, nas aulas anteriores, elas guardaram informações em caixinhas (variáveis), trocaram números para mudar construções e brincaram com o "se isto, então aquilo". Agora damos vida a tudo isso com os eventos: são gatilhos que ficam "escutando" o que o jogador faz e, quando aquilo acontece, disparam uma ação. É como um sensor invisível espalhado pelo mundo.

No MakeCode existe uma categoria especial chamada "Jogador" (Player), cheia desses gatilhos. O bloco "ao quebrar bloco" (on block broken), por exemplo, fica esperando o jogador quebrar qualquer bloco; quando isso acontece, tudo que estiver encaixado dentro dele é executado. Existem outros gatilhos parecidos: "ao caminhar" (on walk/travelled), "ao bater" (on hit) e "ao chat" (digitar uma palavra). A criança só precisa escolher o gatilho e pendurar dentro dele algo divertido, como soltar uma chuva de galinhas, tocar um som ou explodir fogos de artifício.

Por que isso importa? Porque é o coração de qualquer jogo. Um game não é uma animação que roda sozinha: ele responde ao jogador. Apertar um botão faz o personagem pular, pisar num lugar abre uma porta, pegar uma moeda soma ponto. Entender que "minha ação causa uma reação no mundo" prepara a turma para, nas próximas aulas, construir um mini-jogo de verdade com placar e decisões.

Na prática, a turma vai montar pelo menos um par evento + ação no MakeCode e depois entrar no Minecraft para provocar esse evento várias vezes, observando o mundo responder. A aula é bem de exploração: as crianças quebram blocos, andam, batem em coisas e gritam de alegria quando descobrem o que cada gesto faz acontecer.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com Minecraft Education ou Minecraft Bedrock + Code Connection já abertos e conectados ao MakeCode.`,
    `Projetor ou TV grande para o professor mostrar a tela e demonstrar cada passo ao vivo.`,
    `Um mundo Minecraft simples e plano (tipo Flat/Plano) já criado, com modo criativo ligado, para as crianças não morrerem nem se perderem.`,
    `Um projeto MakeCode de exemplo do professor com o bloco "ao quebrar bloco" já montado, para mostrar como fica pronto.`,
    `Cartões impressos ou desenhados com ícones dos eventos (mãozinha quebrando bloco, pegadas de caminhar, sininho) para a roda de conversa.`,
    `Folhas de papel e lápis de cor para a atividade de desenho "evento e reação".`,
    `Lista de blocos divertidos para soltar como reação (galinha, TNT, fogos, som), anotada para o professor sugerir rapidamente.`,
  ],
  conceitosChave: [
    `Evento — um momento especial em que algo acontece no jogo, tipo quando você quebra um bloco ou começa a andar.`,
    `Gatilho — o bloquinho que fica de olho esperando o evento acontecer para então disparar a ação, como um sensor mágico.`,
    `Reação — a coisa divertida que o mundo faz em resposta ao que você fez, por exemplo soltar galinhas quando você quebra um bloco.`,
    `Ação — o que o jogo executa quando o evento acontece; é o "então" que segue o evento.`,
    `Escutar — ficar esperando quietinho até o jogador fazer algo, do jeito que o gatilho fica de prontidão.`,
    `Categoria Jogador (Player) — a gavetinha colorida do MakeCode onde moram os blocos de eventos que reagem ao que o jogador faz.`,
    `Provocar o evento — fazer de propósito a ação que dispara o gatilho, como quebrar um bloco só para ver o que acontece.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Um evento é um momento que o jogo fica "escutando": quebrar um bloco, andar, bater, digitar no chat. No MakeCode esses gatilhos ficam na categoria "Jogador" (Player), de cor avermelhada. O mais fácil e visual é "ao quebrar bloco" (em inglês "on block broken"). Ele tem um formato de tampa que abre por cima: tudo que você encaixa dentro dele só acontece quando o jogador quebra um bloco no Minecraft. A regra de ouro para a criança é: primeiro vem o evento (quando), depois vem a ação (o quê). Você não precisa dominar Minecraft: basta saber abrir o MakeCode pelo "Code Connection" (no Education é o ícone do agente/lápis ou o comando de código), arrastar blocos da esquerda para a área central e clicar em "Reproduzir/Play" para a mudança valer no jogo. Tenha pronto, antes da aula, um mundo plano em modo criativo e um exemplo seu já funcionando para mostrar o resultado primeiro e despertar o "uau".

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: reúna a turma na frente do projetor. Relembre a aula passada do "se isto, então aquilo". Diga: "Hoje o mundo vai reagir ao que VOCÊS fazem!" Quebre um bloco no seu Minecraft de exemplo e deixe cair uma chuva de galinhas. Pergunte: "O que eu fiz para isso acontecer?"

15 min — Conteúdo novo guiado: na sua tela, abra o MakeCode pelo Code Connection. Clique na categoria "Jogador" (Player). Arraste o bloco "ao quebrar bloco" para o centro. Vá na categoria "Mobs/Animais", arraste "gerar/spawn animal", escolha a galinha e encaixe dentro do gatilho. Mostre que ficou dentro da tampa. Clique em "Reproduzir". Volte ao Minecraft, quebre um bloco e comemore as galinhas. Faça devagar, nomeando cada clique em voz alta.

25 min — Mao na massa: cada criança (ou dupla) repete os passos no seu computador. Circule pela sala. Ajude a achar a categoria "Jogador", a encaixar o bloco de reação dentro da tampa e a clicar em "Reproduzir". Depois que funcionar, desafie a trocar a reação: em vez de galinha, soltar muitos animais, tocar um som ou (no modo criativo) soltar fogos. Deixe cada um provocar o evento várias vezes e observar.

10 min — Desafio + compartilhar: peça que cada um pense em OUTRO evento (andar, bater). Quem conseguir trocar o gatilho mostra para a turma. Faça uma rodada rápida: cada criança quebra um bloco no próprio mundo e todos veem a reação. Termine com palmas.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a analogia da campainha: quando alguém aperta a campainha (o evento), a casa toca o som (a reação). O gatilho é como um amiguinho invisível que fica de olho esperando você fazer algo para então agir. Diga "quando eu QUEBRO o bloco, o mundo SOLTA galinhas". Sempre fale "quando" e depois "então", batendo palma entre os dois para marcar o ritmo. Mostre antes de explicar: o olho da criança entende o resultado mais rápido que o ouvido entende a teoria. Faça as crianças repetirem a frase mágica em voz alta.

## Erros comuns e como ajudar

O erro número um é encaixar a ação FORA da tampa do evento, soltinha na área de trabalho; o bloco não dispara. Mostre que precisa estar dentro, encaixado, sem espaço. O segundo erro é esquecer de clicar em "Reproduzir/Play" depois de montar, então nada muda no jogo; crie o hábito de sempre clicar. O terceiro é a desconexão entre Minecraft e MakeCode: se nada acontece, refaça o "Code Connection" e confira o pareamento. Por fim, alguns colocam dois gatilhos iguais brigando; oriente a manter um evento por vez. Tenha paciência e celebre cada bloco quebrado que vira mágica.`,
  exercicios: [
    {
      titulo: `A Campainha do Mundo`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda com os cartões de ícones na mão (mãozinha quebrando bloco, pegadas, sininho). Explique que um evento é como uma campainha: alguém faz algo e o mundo responde. Levante um cartão por vez e pergunte qual reação seria divertida.`,
      atividade: `Mostre cada cartão e pergunte para a turma: "Se eu QUEBRO um bloco, o que o mundo poderia fazer?", "Se eu ANDO, o que acontece?", "Se eu BATO, o que aparece?". Deixe cada criança dar uma ideia de reação divertida.`,
      gabarito: `A criança acerta quando consegue ligar uma ação dela (quebrar, andar, bater) a uma reação do mundo (soltar galinhas, tocar som, aparecer flores). Qualquer reação criativa vale; o importante é entender a estrutura "quando eu faço algo, então o mundo responde".`,
    },
    {
      titulo: `Desenhe o Evento e a Reação`,
      tipo: `desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue uma folha dobrada ao meio e lápis de cor. Explique que do lado esquerdo eles desenham o que o JOGADOR faz (o evento) e do lado direito o que o MUNDO faz (a reação). Faça um exemplo no quadro: mãozinha quebrando bloco do lado esquerdo, galinhas do lado direito.`,
      atividade: `Dobre a folha ao meio. No lado esquerdo, desenhe você fazendo uma ação no Minecraft (quebrar um bloco, andar, bater). No lado direito, desenhe a coisa divertida que o mundo faz por causa disso. Ligue os dois com uma seta.`,
      gabarito: `Está correto quando o desenho mostra claramente um lado com a ação do jogador e o outro lado com uma reação do mundo, ligados por uma seta. A seta apontando do evento para a reação mostra que a criança entendeu a relação de causa e efeito.`,
    },
    {
      titulo: `Soltando Galinhas`,
      tipo: `prática na ferramenta`,
      tempo: `15 minutos`,
      guiaProfessor: `Acompanhe cada criança no computador. Mostre passo a passo: abrir o MakeCode pelo Code Connection, clicar na categoria "Jogador", arrastar "ao quebrar bloco", depois ir em "Mobs/Animais", arrastar "gerar animal", escolher galinha e encaixar DENTRO do gatilho. Lembre de clicar em "Reproduzir".`,
      atividade: `No seu computador, monte o bloco "ao quebrar bloco" e coloque dentro dele "gerar galinha". Clique em "Reproduzir". Volte ao Minecraft e quebre um bloco para ver as galinhas aparecerem!`,
      gabarito: `Acertou quando, ao quebrar um bloco no Minecraft, surge ao menos uma galinha. Isso prova que a ação foi encaixada DENTRO do gatilho e que o jogo foi colocado para reproduzir. Se nada aparece, verifique se o bloco está dentro da tampa e se clicou em Reproduzir.`,
    },
    {
      titulo: `Troca a Reação`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora desafie a turma a trocar a reação mantendo o mesmo evento. Mostre como apagar o bloco de galinha (arrastar para a lixeira) e colocar outro: tocar um som, gerar muitos animais ou (no modo criativo) soltar fogos. Incentive cada criança a escolher a sua reação favorita.`,
      atividade: `Mantenha o bloco "ao quebrar bloco", mas troque a reação: em vez de uma galinha, faça aparecer cinco animais, ou toque um som, ou solte fogos. Teste quebrando um bloco de novo.`,
      gabarito: `Está certo quando, ao quebrar um bloco, uma reação DIFERENTE da galinha simples acontece (vários animais, um som ou fogos). Isso mostra que a criança entendeu que pode mudar a ação dentro do mesmo evento sem quebrar o gatilho.`,
    },
    {
      titulo: `Caçador de Eventos`,
      tipo: `desafio / jogo`,
      tempo: `15 minutos`,
      guiaProfessor: `Desafio final, mais difícil: pedir que troquem o GATILHO, não só a reação. Mostre na categoria "Jogador" os blocos "ao caminhar" e "ao bater". Quem conseguir liga uma reação a um evento NOVO. Vire uma brincadeira: cada criança provoca seu evento e a turma adivinha qual foi.`,
      atividade: `Escolha um evento novo na categoria "Jogador": "ao caminhar" ou "ao bater". Coloque uma reação divertida dentro dele e clique em "Reproduzir". Depois provoque seu evento no Minecraft e deixe a turma adivinhar o que você fez para o mundo reagir.`,
      gabarito: `Acertou quem montou um gatilho diferente de "ao quebrar bloco" (por exemplo "ao caminhar" ou "ao bater") com uma reação encaixada dentro, e conseguiu disparar a reação ao fazer a ação certa no jogo. A turma adivinhar qual evento foi confirma que a relação ação-reação ficou clara.`,
    },
  ],
};
