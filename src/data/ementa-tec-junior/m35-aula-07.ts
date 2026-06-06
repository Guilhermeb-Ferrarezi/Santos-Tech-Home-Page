import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Testando e Consertando o Jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Jogar o próprio jogo voxel do início ao fim, anotar o que funciona e o que está com problema, e consertar os erros encontrados para deixar o jogo redondinho.`,
  descricao: `Depois de semanas montando o jogo voxel no Roblox Studio — trazendo os bonecos, arrumando os assets, desenhando o mapa, montando o cenário, colocando o ponto onde o jogador começa e criando os itens e as regras — chegou a hora mais importante de todas: testar de verdade. Nesta aula a criança vira um "caça-bugs". Ela aperta o botão Play, joga o próprio jogo como se fosse um jogador novo e presta atenção em tudo: o boneco aparece no lugar certo? Dá para pegar os itens? Tem buraco para cair? A regra de vencer funciona? Testar é a parte que transforma um monte de peças em um jogo que funciona mesmo.

Todo jogo profissional passa por isso. Antes de um jogo chegar nas lojas, dezenas de pessoas jogam só para encontrar erros, chamados de "bugs". Aqui as crianças aprendem que encontrar um bug não é fracasso — é uma vitória! Cada problema descoberto é uma chance de melhorar. O professor cria um clima de detetive divertido: vamos procurar pistas, anotar o que achamos e depois resolver cada caso.

A aula tem dois grandes momentos. Primeiro, jogar e ANOTAR (sem mexer ainda): a criança percorre o jogo do começo ao fim e marca numa listinha o que está estranho. Depois, CONSERTAR: ela volta para a edição e arruma um problema de cada vez, testando de novo a cada conserto para ter certeza de que melhorou. Essa rotina de "testa, anota, conserta, testa de novo" é o coração do trabalho de quem faz jogos.

Ao final, o jogo de cada criança estará mais firme e mais divertido, pronto para os últimos retoques da próxima aula, quando o jogo será declarado oficialmente terminado. Hoje o presente é a sensação de orgulho de ver um problema desaparecer porque ELA mesma consertou.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o jogo voxel de cada criança já carregado`,
    `Projetor ou TV grande para o professor demonstrar o ciclo de testar e consertar`,
    `Folha de "Caça-Bugs" impressa para cada criança, com colunas simples: "O que testei" e "Funcionou? (carinha feliz ou triste)"`,
    `Lápis de cor ou adesivos de carinhas (feliz e triste) para marcar a folha`,
    `Exemplo pronto: um jogo do professor com três erros de propósito (item que atravessa, buraco no chão, item que não some ao ser pego)`,
    `Quadro branco para listar os bugs da turma e ir riscando os que forem resolvidos`,
    `Carimbo ou adesivo de "Caçador de Bugs" para premiar cada conserto feito`,
  ],
  conceitosChave: [
    `Testar — jogar o próprio jogo do começo ao fim para ver se tudo funciona direitinho.`,
    `Bug — um errinho no jogo, tipo um boneco que cai no buraco ou um item que não pode ser pego.`,
    `Consertar — arrumar o erro que você encontrou para o jogo ficar melhor.`,
    `Play e Stop — o botão de "play" liga o teste para jogar; o quadrado "Stop" desliga e volta para arrumar.`,
    `Lista de bugs — uma folhinha onde a gente anota os problemas para não esquecer nenhum.`,
    `Testar de novo — depois de consertar, jogar mais uma vez para ter certeza de que melhorou.`,
    `Caça-bugs — o detetive de jogos que procura erros para deixar tudo redondinho.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox Studio para dar esta aula. O segredo é uma rotina simples que se repete: jogar, anotar, consertar, jogar de novo. O único ciclo técnico é alternar entre dois modos. Para JOGAR, clique no botão azul "Play" (o triângulo) no topo, na aba "Home" ou "Test" — isso entra no jogo com o boneco. Para PARAR e voltar a editar, clique no quadrado vermelho "Stop", no mesmo lugar. Enquanto está em Play, NADA que a criança mexer fica salvo de verdade; por isso sempre apertamos "Stop" antes de consertar algo.

Os bugs mais comuns nesta idade têm conserto fácil. Item que atravessa o jogador ou que não pode ser pego: clique na peça no painel "Explorer" (lado direito), abra "Properties" e confira "CanCollide" e a presença de um "Touched" no script — mas, para crianças, basta reposicionar ou recolocar o item pelo "Toolbox". Buraco no chão por onde o boneco cai: na aba "Home" use "Part" para colocar um bloco e tapar o buraco, ou arraste uma peça do chão para cobrir. Boneco nascendo no lugar errado: arraste o "SpawnLocation" (a plaquinha de início) para um lugar firme. Deixe TODOS os jogos abertos antes da aula e teste rapidamente o seu exemplo com três bugs de propósito.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma e conte que hoje somos detetives caça-bugs. Pergunte: "O que pode dar errado num jogo?". Anote as ideias no quadro (cair num buraco, não pegar a moeda, o boneco começar voando). Mostre que encontrar erro é coisa de quem faz jogo de verdade.

Conteúdo novo guiado (15 min): No projetor, abra o SEU jogo-exemplo com os três bugs de propósito. Aperte o "Play" azul e jogue na frente deles, narrando: "Olha, o item passou pelo meu boneco e eu não peguei — achei um bug!". Aperte "Stop". Mostre o conserto: clique na peça no "Explorer", reposicione ou troque, e aperte "Play" de novo para provar que funcionou. Repita com um buraco no chão, tapando com um "Part". Deixe claro o ciclo: testa, anota, conserta, testa de novo.

Mão na massa (25 min): Cada criança entra no próprio jogo com o "Play" azul e o joga do começo ao fim, segurando a folha de Caça-Bugs. A cada coisa testada, ela marca carinha feliz (funcionou) ou triste (tem bug). Depois aperta "Stop" e escolhe UM bug para consertar primeiro. Circule pela sala ajudando: mostre onde clicar, segure na mão quando precisar e celebre cada conserto. Sempre que arrumar algo, a criança aperta "Play" de novo para conferir.

Desafio e compartilhar (10 min): Desafie cada criança a consertar pelo menos um bug e mostrar para um colega o "antes e depois". Faça uma roda rápida: quem quiser conta qual bug caçou e como resolveu. Risque no quadro os bugs resolvidos. Entregue o adesivo de "Caçador de Bugs".

## Como explicar para crianças

Use a analogia do detetive: "Um bug é uma pista de que algo está errado no jogo. Detetive bom anota a pista antes de resolver!". Explique o "Play" e o "Stop" como ligar e desligar o jogo: "No Play a gente JOGA; no Stop a gente ARRUMA". Lembre sempre que achar um bug é motivo de festa, não de tristeza — significa que o jogo vai ficar melhor. Compare consertar com arrumar um brinquedo que estava torto: a gente conserta e volta a brincar.

## Erros comuns e como ajudar

A criança tenta consertar enquanto está em Play e nada salva: lembre de apertar o quadrado vermelho "Stop" primeiro. A criança quer consertar tudo de uma vez e se atrapalha: combine "um bug de cada vez, e testa de novo". A criança não acha a peça com problema: ajude a clicar nela direto na tela ou no "Explorer". O boneco cai num buraco sem fim: tape o buraco com um "Part" do chão antes de continuar. A criança fica frustrada com o erro: reforce que ela é uma caça-bugs e que cada erro encontrado é um ponto a favor.`,
  exercicios: [
    {
      titulo: `Caça-bugs no quadro`,
      tipo: `Conversa em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Em roda, pergunte o que pode dar errado num jogo. Anote as ideias no quadro com desenhos simples (buraco, moeda, boneco). O objetivo é a criança entender que erros existem e podem ser encontrados.`,
      atividade: `Pense em uma coisa que poderia dar errado no seu jogo e conte para a turma. Pode ser um buraco perigoso, um item que não dá para pegar ou o boneco começando no lugar errado.`,
      gabarito: `A criança cita pelo menos um possível erro de jogo. Acerto = nomear um problema real, como "o boneco pode cair num buraco" ou "a moeda pode estar muito alta". Qualquer ideia válida de bug conta.`,
    },
    {
      titulo: `Apertar Play e jogar até o fim`,
      tipo: `Prática no Roblox Studio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o botão azul "Play" (triângulo) e o quadrado vermelho "Stop". A criança aperta "Play", joga o próprio jogo do começo ao fim e depois aperta "Stop". Deixe os jogos já abertos antes da aula.`,
      atividade: `No seu computador, aperte o botão azul "Play" lá em cima e jogue o seu jogo do começo até o fim, como se fosse um jogador novo. Quando terminar, aperte o quadrado vermelho "Stop".`,
      gabarito: `A criança entra no jogo pelo "Play", percorre o jogo todo e sai pelo "Stop". Acerto = conseguir jogar do início ao fim e voltar para a edição sozinha. Erro comum: esquecer de apertar "Stop" antes de mexer.`,
    },
    {
      titulo: `Folha de Caça-Bugs`,
      tipo: `Anotar e marcar`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a folha com as colunas "O que testei" e "Funcionou?". Enquanto a criança joga, ela marca carinha feliz ou triste para cada parte. Quem não lê bem desenha as carinhas; você ajuda a escrever o que foi testado.`,
      atividade: `Enquanto joga, anote na folha de Caça-Bugs cada coisa que você testar: o boneco apareceu certo? Deu para pegar o item? Teve buraco? Marque carinha feliz se funcionou e carinha triste se tem bug.`,
      gabarito: `A folha preenchida com pelo menos três testes marcados com carinhas. Acerto = identificar corretamente o que funcionou (feliz) e o que tem bug (triste). Exemplo: "Pegar a moeda — triste", porque a moeda atravessou o boneco.`,
    },
    {
      titulo: `Consertar um bug`,
      tipo: `Conserto guiado`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o jogo em "Stop", a criança escolhe UM bug da folha e conserta: reposicionar um item, tapar um buraco com um "Part" da aba "Home" ou mover o "SpawnLocation". Depois aperta "Play" para testar. Ajude clicando junto no "Explorer" se precisar.`,
      atividade: `Escolha UM bug da sua folha e conserte ele com o jogo parado (no "Stop"). Pode ser arrumar a posição de um item, tapar um buraco com um bloco novo ou mover a plaquinha de início. Depois aperte "Play" para ver se melhorou.`,
      gabarito: `Um bug consertado e confirmado pelo teste. Acerto = o problema some quando a criança aperta "Play" de novo. Exemplo: o buraco foi tapado com um "Part" e o boneco não cai mais; ou a moeda foi descida e agora dá para pegar.`,
    },
    {
      titulo: `Antes e depois para um colega`,
      tipo: `Desafio final`,
      tempo: `9 minutos`,
      guiaProfessor: `Desafie a criança a consertar mais um bug e mostrar o "antes e depois" para um colega, explicando o que estava errado e como resolveu. Risque no quadro os bugs resolvidos e entregue o adesivo de "Caçador de Bugs". Valorize a coragem de tentar.`,
      atividade: `Conserte mais um bug e depois mostre para um colega o "antes e depois": conte qual era o problema e como você arrumou. Aperte "Play" para provar que agora funciona!`,
      gabarito: `A criança conserta um segundo bug e explica a um colega o problema e a solução. Acerto = mostrar o jogo funcionando no "Play" e contar em palavras simples o que mudou. Exemplo: "Antes o item atravessava, agora dá para pegar porque eu coloquei no lugar certo."`,
    },
  ],
};
