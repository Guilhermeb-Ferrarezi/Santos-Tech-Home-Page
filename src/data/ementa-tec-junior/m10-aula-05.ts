import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Onde a Aventura Começa",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende o que é o ponto de partida (spawn), coloca o local onde o boneco nasce no mundo e testa no botão Play para ver o jogador aparecer no lugar certo e seguro.`,
  descricao: `Todo jogo precisa de um lugar onde a aventura começa. Esse lugar especial se chama "spawn" (lê-se "spaun") — é o ponto de partida, o cantinho do mundo onde o boneco do jogador nasce assim que o jogo começa. Sem um bom ponto de partida, o boneco pode aparecer caindo no vazio, dentro de uma parede ou longe da diversão. Nesta aula, as crianças vão descobrir esse segredo e cuidar para que o jogador sempre comece num lugar bacana.

No Roblox Studio existe uma peça mágica chamada "SpawnLocation" (local de nascimento). Ela parece uma plataforma com uma estrela ou setas. Onde colocamos essa plataforma, é dali que o boneco vai surgir. As crianças vão aprender a inserir essa peça, arrastá-la para um chão firme do terreno que construíram nas aulas anteriores e deixá-la bem posicionada para um começo seguro.

A parte mais empolgante é testar! Com um clique no botão Play, o mundo ganha vida e o boneco aparece exatamente em cima do ponto de partida. As crianças vão sentir o orgulho de ver "o seu jogo" funcionando de verdade, com um personagem nascendo no lugar que elas escolheram. Depois, vão ajustar a posição do spawn para que o início seja convidativo: num chão plano, perto do começo do caminho da aventura e longe de buracos.

Esta aula conecta tudo o que veio antes (terreno, peças e decoração) com a ideia de "jogar". O ponto de partida é a porta de entrada do mundo. Ao final, cada criança terá um spawn colocado, testado e ajustado, pronta para, nas próximas aulas, construir o caminho da aventura e os desafios.`,
  materiais: [
    `Computadores (um por criança ou em dupla) com o Roblox Studio já aberto no projeto "Meu Mundo" de cada aluno, salvo das aulas anteriores.`,
    `Projetor ou TV para o professor demonstrar a tela do Roblox Studio para toda a turma.`,
    `Um projeto de exemplo do professor com um terreno simples já pronto e um SpawnLocation já colocado, para mostrar antes e depois.`,
    `Crachás ou adesivos em formato de estrela para marcar "ponto de partida" (usados na brincadeira do aquecimento).`,
    `Folhas de papel com o desenho de um mapa simples (terreno vazio) e lápis de cor para a atividade no papel.`,
    `Fita crepe colorida no chão da sala para marcar um "spawn" gigante na brincadeira de movimento.`,
    `Lista de presença e ficha rápida para o professor anotar quem já conseguiu colocar e testar o spawn.`,
  ],
  conceitosChave: [
    `Spawn (ponto de partida) — o lugar mágico do mundo onde o boneco do jogador nasce quando o jogo começa.`,
    `SpawnLocation — a peça-plataforma do Roblox Studio que marca onde o jogador vai aparecer; é só arrastar para o chão.`,
    `Botão Play — o botão de "brincar de verdade" que liga o mundo e faz o boneco nascer no spawn para a gente testar.`,
    `Começo seguro — colocar o ponto de partida num chão firme e plano, longe de buracos e de cair no vazio.`,
    `Posição — onde a peça está no mundo (mais para cá, mais para lá, mais para cima); a gente ajusta arrastando.`,
    `Testar — apertar Play, ver o que acontece, e voltar para arrumar se o boneco nasceu no lugar errado.`,
    `Chão firme — uma superfície sólida embaixo do spawn para o boneco não cair assim que nascer.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O "spawn" é o ponto onde o personagem do jogador nasce quando o jogo inicia. No Roblox Studio, isso é controlado por uma peça chamada SpawnLocation: uma plataforma especial que, sozinha, já define onde o boneco aparece. Você não precisa programar nada — basta inserir essa peça e posicioná-la sobre um chão firme. Se houver vários SpawnLocations, o Roblox escolhe um deles; nesta aula, mantenha apenas UM por mundo para não confundir as crianças.

Pontos técnicos que você deve dominar antes da aula: 1) Inserir a peça pelo painel superior. Na aba "Home" (ou "Model"), há o botão "Spawn" — um clique já coloca um SpawnLocation no centro da cena. Em algumas versões, use "Insert" maior que "Object" e procure por SpawnLocation. 2) Mover a peça com a ferramenta "Move" (Mover) — setas coloridas aparecem; arraste a seta para deslizar a plataforma sobre o terreno. 3) O botão "Play" fica no topo, com um triângulo (como o de vídeo). Ao clicar, o teste começa e o boneco nasce no spawn. Para parar, clique no quadrado "Stop". Deixe esses três botões decorados, pois você vai apontá-los o tempo todo.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento/revisão: Reúna a turma longe das telas. Cole no chão uma estrela de fita crepe e diga: "Todo herói começa a aventura em algum lugar. Esse é o nosso ponto de partida!". Cada criança pisa na estrela e dá um passo "começando a aventura". Relembre o terreno que elas já fizeram.

15 min — Conteúdo novo guiado: No projetor, abra um mundo simples. Diga "Vou colocar onde o jogador nasce". Clique na aba "Home", depois no botão "Spawn". Mostre a plataforma que apareceu. Use a ferramenta "Move" (Mover) e arraste a peça para cima de um chão plano. Agora o momento mágico: clique em "Play". Mostre o boneco nascendo. Diga "Olha, ele nasceu bem aqui, em cima da nossa plataforma!". Clique em "Stop".

25 min — Mão na massa: Cada criança abre o seu mundo. Acompanhe um por um. Passos para elas: (1) clicar na aba "Home"; (2) clicar no botão "Spawn"; (3) usar "Move" e arrastar a plataforma para um chão firme; (4) clicar em "Play" e observar o boneco; (5) clicar em "Stop". Circule pela sala elogiando cada spawn colocado. Quem terminar, ajuda você a conferir o do coleguinha.

10 min — Desafio + compartilhar: Desafio: "Coloque seu ponto de partida num lugar bem seguro e divertido — chão plano, sem buraco perto". Depois, cada criança aperta Play e mostra para a turma o boneco nascendo no seu mundo. Aplauda cada um.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia da "casinha do início": "O spawn é como a porta da sua casa — é por ali que você começa a passear pelo mundo". Outra: "É o tapete mágico onde o seu boneco aparece, pluf!". Chame o SpawnLocation de "plataforma de nascer". Chame o Play de "botão de brincar de verdade". Faça gestos: abra as mãos como um "pluf" quando o boneco nasce. Fale devagar, repita os nomes dos botões e deixe a criança apontar na tela antes de clicar.

## Erros comuns e como ajudar

1) Spawn flutuando no ar: o boneco nasce e cai. Ajude a arrastar a plataforma até encostar no chão. 2) Spawn dentro de uma parede ou peça: o boneco fica preso. Mova para um espaço aberto. 3) Vários spawns sem querer: a criança clica "Spawn" muitas vezes. Apague os extras (selecionar e tecla Delete) e deixe um só. 4) Esquecer de clicar "Stop": fica em modo teste e não consegue editar. Lembre sempre de parar. 5) Spawn perto de um buraco: o boneco cai logo. Mostre a importância do "começo seguro" num chão plano.`,
  exercicios: [
    {
      titulo: `Pluf! Eu nasci aqui`,
      tipo: `jogo (movimento corporal)`,
      tempo: `8 minutos`,
      guiaProfessor: `Use a estrela de fita crepe no chão como "spawn gigante". Explique que ali é o ponto de partida. As crianças formam uma fila e, uma de cada vez, pulam para cima da estrela dizendo "pluf, eu nasci!". Depois saem andando como se a aventura começasse. Conduza com energia e repita a palavra "spawn".`,
      atividade: `Cada criança, na sua vez, pula para dentro da estrela no chão, faz o gesto de "pluf" abrindo as mãos e fala em voz alta: "Aqui é o meu ponto de partida!". Em seguida dá três passos para "explorar o mundo".`,
      gabarito: `A criança acertou se pulou exatamente em cima da estrela (e não fora dela) e disse que aquele é o ponto de partida onde o boneco nasce. O professor confirma vendo a criança pisar no centro da marca e nomear o "spawn".`,
    },
    {
      titulo: `Achei a plataforma de nascer`,
      tipo: `roda de conversa com a tela`,
      tempo: `8 minutos`,
      guiaProfessor: `No projetor, mostre um mundo com um SpawnLocation já colocado e algumas outras peças (uma árvore, uma pedra, uma casinha). Pergunte à turma qual peça é a "plataforma de nascer". Deixe as crianças apontarem para a tela. Reforce que o spawn é aquela plataforma com estrela/setas onde o boneco aparece.`,
      atividade: `Olhando a tela do professor, cada criança aponta com o dedo qual das peças é o spawn (a plataforma de nascer) e diz por que escolheu aquela.`,
      gabarito: `Acertou quem apontou para a plataforma SpawnLocation (a peça com a estrela/setas) e não para a árvore, a pedra ou a casinha. A resposta esperada é "é a plataforma onde o boneco nasce quando aperta Play".`,
    },
    {
      titulo: `Coloco meu ponto de partida`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe cada criança no seu computador. Guie passo a passo: aba "Home", botão "Spawn", depois ferramenta "Move" para arrastar a plataforma até um chão firme. Vá nomeando os botões enquanto a criança clica. Ajude quem deixar o spawn no ar ou dentro de uma peça.`,
      atividade: `No seu mundo, a criança: (1) clica na aba "Home"; (2) clica no botão "Spawn"; (3) usa a ferramenta "Move" e arrasta a plataforma para um chão plano e firme do seu terreno. Ao final, levanta a mão para mostrar ao professor.`,
      gabarito: `Acertou quando há exatamente um SpawnLocation no mundo, apoiado sobre um chão firme (encostado no terreno, sem flutuar e sem estar preso dentro de outra peça). O professor confere olhando a tela: a plataforma está sobre o chão.`,
    },
    {
      titulo: `Aperto Play e vejo o boneco nascer`,
      tipo: `prática na ferramenta (teste)`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre o botão "Play" (o triângulo no topo) e o "Stop" (o quadrado). Peça que cada criança aperte Play, observe onde o boneco nasce e depois aperte Stop. Se o boneco cair ou nascer no lugar errado, oriente a arrastar o spawn e testar de novo. Comemore cada teste bem-sucedido.`,
      atividade: `A criança clica em "Play", observa o boneco aparecer, responde em voz alta "o boneco nasceu no lugar certo?" (sim ou não) e clica em "Stop". Se respondeu "não", arrasta o spawn para um chão melhor e aperta Play de novo.`,
      gabarito: `Acertou quando, ao apertar Play, o boneco nasce em cima do spawn e fica parado num chão firme (não cai no vazio). Se caiu, a criança mostra que entendeu ao ajustar o spawn e testar novamente até o boneco nascer seguro. O professor valida vendo o boneco em pé sobre a plataforma.`,
    },
    {
      titulo: `Meu mapa do começo seguro`,
      tipo: `desenho no papel (desafio)`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a folha com o mapa de um terreno vazio. Explique que elas vão desenhar onde colocariam o ponto de partida para o começo ser seguro e divertido. Lembre as regras: chão plano, longe de buraco, perto do começo do caminho. Peça para desenharem uma estrela marcando o spawn e explicarem a escolha.`,
      atividade: `No mapa de papel, a criança desenha uma estrela marcando onde colocaria o ponto de partida e, ao redor, desenha um chão firme. Depois conta para o professor por que aquele lugar é seguro (sem buraco perto, chão plano).`,
      gabarito: `Acertou quem marcou a estrela do spawn sobre uma área de chão plano e longe de buracos ou bordas, e explicou que ali o boneco não cai e começa bem. Não há um único lugar certo: vale qualquer ponto seguro, desde que a criança justifique o "começo seguro".`,
    },
  ],
};
