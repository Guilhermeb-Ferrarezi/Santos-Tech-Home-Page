import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Se Isto Acontecer, Então...",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a criar uma regra do tipo "se isto acontecer, então faça aquilo" e monta seu primeiro bloco "se/então" no MakeCode para fazer algo acontecer no Minecraft quando ela pisa em um bloco.`,
  descricao: `Nesta aula as crianças conhecem uma das ideias mais importantes da programação: a condição "se/então". Até agora elas guardaram coisas na caixinha mágica (a variável) e trocaram números para mudar a construção. Agora damos um passo a mais: ensinar o computador a TOMAR UMA DECISÃO. A regra "se/então" funciona assim: o computador olha se uma coisa aconteceu e, SE aconteceu, ENTÃO ele faz algo. Se não aconteceu, ele não faz nada.

Isso importa porque é o começo de todo jogo que reage ao jogador. Quando um personagem ganha pontos ao pegar uma moeda, quando uma porta abre ao apertar um botão, quando o chão acende ao pisar nele, tudo isso é uma regra "se/então" por trás. As crianças já conhecem regras assim na vida real, mesmo sem perceber: "se chover, então pego o guarda-chuva"; "se a luz estiver vermelha, então paro". Vamos usar esses exemplos do dia a dia para dar nome a algo que elas já entendem.

Na prática desta aula, o professor monta junto com a turma um único bloco "se/então" simples no MakeCode. A regra que vamos criar é: "se o jogador pisar em um bloco, então algo acontece" (por exemplo, aparece uma mensagem na tela ou nasce uma criatura amigável). As crianças testam essa regra dentro do Minecraft, pisando no bloco e vendo a mágica acontecer.

O objetivo não é fazer um jogo completo hoje, é sim plantar a semente da decisão. Quando a criança pisa no bloco e vê o resultado aparecer, ela descobre que foi ELA quem ensinou aquela regra ao computador. Esse momento de "eu mandei e aconteceu" é o coração da aula.`,
  materiais: [
    `Computadores (um por criança ou em duplas) com Minecraft Education ou Minecraft Bedrock já aberto e com o editor de código MakeCode acessível pelo agente (o robozinho).`,
    `Projetor ou TV grande conectado ao computador do professor, para mostrar o passo a passo dos blocos.`,
    `Um mundo do Minecraft simples e plano (modo Criativo) já criado e salvo, sem perigos, para as crianças testarem a regra com calma.`,
    `Cartões ou folhas impressas grandes com desenhos de situações do dia a dia: nuvem de chuva, semáforo, campainha, mão no interruptor de luz.`,
    `Folhas de papel em branco e lápis de cor para o exercício de desenho da regra "se/então".`,
    `Um bloco de cor bem diferente já escolhido (por exemplo, bloco de ouro ou lã vermelha) para servir de "bloco mágico" no qual a criança vai pisar.`,
    `Lista com os nomes das crianças para chamar uma de cada vez na hora de testar no projetor, se faltar computador.`,
  ],
  conceitosChave: [
    `Condição — uma pergunta que só tem duas respostas: sim ou não. Tipo "está chovendo?".`,
    `Se/Então — a regra mágica: SE a resposta for sim, ENTÃO o computador faz uma coisa.`,
    `Pisar no bloco — quando o jogador anda por cima de um bloco escolhido; é o "isto acontecer" da nossa regra.`,
    `Acontecimento — algo que o jogo percebe que aconteceu, como pisar, apertar ou pegar um item.`,
    `Bloco de código — a pecinha colorida que a gente encaixa no MakeCode para mandar no jogo, parecida com peça de montar.`,
    `Testar — experimentar a regra no jogo para ver se ela funciona de verdade.`,
    `Regra — uma combinação de "se" e "então" que ensina o computador a tomar uma decisão sozinho.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

A condição "se/então" (em inglês, "if/then") é a forma como o computador toma decisões. Ele verifica se algo é verdadeiro e, se for, executa uma ação. No MakeCode para Minecraft, isso geralmente começa com um bloco de EVENTO (um acontecimento), e o "então" são os blocos que você coloca dentro dele.

Nesta aula vamos usar o caminho mais simples e mais visível para a idade: o evento "ao pisar" (em inglês, "on stepped on"). Esse bloco já carrega a lógica "se isto acontecer, então..." de forma pronta: o "isto" é pisar no bloco, e o "então" é o que você encaixa dentro. Você não precisa montar o bloco "se" cinzento separadamente hoje; o evento já é a condição na prática, e isso evita confundir crianças pequenas.

Antes da aula: abra o Minecraft, entre no mundo plano salvo, aperte "C" (ou o ícone do agente/código) para abrir o MakeCode. Teste você mesmo a regra uma vez para chegar seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): sente a turma em roda. Mostre os cartões um a um. Para o cartão da chuva, pergunte: "SE começar a chover, ENTÃO o que eu faço?". Deixe várias crianças responderem ("pego o guarda-chuva!"). Repita com o semáforo ("se ficar vermelho, então paro") e a campainha ("se tocar a campainha, então abro a porta"). Diga bem alto as palavras SE e ENTÃO em cada exemplo. Termine dizendo: "Hoje vamos ensinar uma regra dessas para o computador!".

CONTEÚDO NOVO GUIADO (15 min): no projetor, abra o Minecraft e entre no MakeCode. No menu da esquerda, clique na categoria "Jogador" (em inglês, "Player"). Arraste para a área de trabalho o bloco "ao pisar em" (em inglês, "on stepped on"). Mostre que dentro desse bloco escolhemos o bloco mágico: clique no nome do bloco dentro dele e escolha, por exemplo, "Bloco de Ouro". Diga: "Este é o nosso SE: SE alguém pisar no ouro...". Agora o ENTÃO: na categoria "Bate-papo" (em inglês, "Chat" ou "Player"), arraste o bloco "enviar mensagem" e digite algo como "Você achou a mágica!". Encaixe esse bloco DENTRO do "ao pisar". Volte ao Minecraft, coloque um bloco de ouro no chão e pise nele para mostrar a mensagem aparecendo.

MÃO NA MASSA (25 min): cada criança (ou dupla) repete os mesmos passos no seu computador. Circule pela sala. Os passos para elas: 1) abrir o MakeCode com "C"; 2) categoria "Jogador" e arrastar "ao pisar em"; 3) escolher o bloco de ouro; 4) categoria de mensagem e arrastar "enviar mensagem"; 5) escrever uma palavrinha; 6) encaixar dentro; 7) voltar ao jogo, pôr o bloco de ouro no chão e pisar. Comemore cada mensagem que aparecer.

DESAFIO + COMPARTILHAR (10 min): proponha trocar o "então". Em vez de mensagem, peça que arrastem o bloco "gerar" criatura (em inglês, "spawn") da categoria "Criaturas" para nascer um animal amigável (porco, galinha) ao pisar. Depois, chame duas ou três crianças para mostrar a regra delas no projetor e dizer em voz alta: "Se eu pisar, então...".

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia do tapete mágico ou do botão escondido: "Imagina um tapete que, toda vez que alguém pisa, faz uma surpresa aparecer. Nós vamos construir esse tapete!". Outra analogia boa é o sensor da porta do shopping: "Você chega perto e a porta abre sozinha. Como ela sabe? Tem uma regra: se alguém chegar, então abre". Sempre fale "SE" e "ENTÃO" com a voz, fazendo gesto de bater palma no "então", para marcar o momento da ação.

## Erros comuns e como ajudar

O erro mais comum é a criança soltar o bloco "enviar mensagem" FORA do "ao pisar", solto no canto. Mostre que ele precisa ficar abraçado por dentro do bloco maior, como um sanduíche. Outro erro: pisar em um bloco diferente do escolhido (pisar na grama em vez do ouro) e achar que não funcionou; lembre que tem que ser o bloco certo. Também é comum esquecerem de colocar o bloco de ouro no chão antes de pisar. Por fim, alguns colocam dois blocos mágicos e se confundem; nesta aula, um só basta.`,
  exercicios: [
    {
      titulo: `Caça-regras do dia a dia`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Use os cartões do aquecimento. Mostre uma situação e peça que a turma complete a regra em voz alta. O professor sempre repete enfatizando as palavras SE e ENTÃO, para fixar o formato antes de ir para o computador.`,
      atividade: `O professor mostra um cartão e diz só a primeira parte: "SE a campainha tocar, ENTÃO...". As crianças completam juntas. Faça com pelo menos quatro cartões (chuva, semáforo, campainha, interruptor de luz).`,
      gabarito: `A criança acerta quando completa a regra com uma ação que faz sentido. Exemplos esperados: chuva, então pego o guarda-chuva; semáforo vermelho, então paro; campainha, então abro a porta; interruptor, então a luz acende. Qualquer ação lógica vale.`,
    },
    {
      titulo: `Desenhando a minha regra`,
      tipo: `desenho/papel`,
      tempo: `8 min`,
      guiaProfessor: `Distribua a folha em branco. Peça que a criança dobre ou divida a folha em dois lados: o lado do SE e o lado do ENTÃO. Explique com um exemplo no quadro antes de soltar a turma.`,
      atividade: `Desenhe no lado esquerdo uma coisa que pode acontecer (o SE) e no lado direito o que você faria (o ENTÃO). Pode ser "se eu pisar no bloco brilhante" de um lado e "então aparece um porquinho" do outro.`,
      gabarito: `Está correto quando o desenho mostra claramente uma situação de um lado e uma ação do outro lado, ligadas por uma ideia de causa. Se a criança consegue contar a regra apontando os dois desenhos ("se isto... então aquilo"), ela entendeu.`,
    },
    {
      titulo: `Montando o bloco "se/então" no MakeCode`,
      tipo: `prática na ferramenta`,
      tempo: `14 min`,
      guiaProfessor: `Acompanhe os passos no projetor enquanto as crianças fazem. Repita em voz alta cada categoria e cada bloco. Circule para conferir que o bloco da mensagem ficou ENCAIXADO dentro do "ao pisar". Comemore cada mensagem que aparecer na tela.`,
      atividade: `No MakeCode: abra com a tecla "C". Na categoria "Jogador", arraste "ao pisar em". Escolha o bloco de ouro. Na categoria de mensagem, arraste "enviar mensagem" e escreva uma palavra (por exemplo, "achei!"). Encaixe a mensagem dentro do "ao pisar". Volte ao jogo, ponha o bloco de ouro no chão e pise nele.`,
      gabarito: `Acertou quando, ao pisar no bloco de ouro dentro do Minecraft, a mensagem escrita pela criança aparece na tela. Se nada aparecer, verifique se a mensagem está encaixada por dentro do bloco e se a criança pisou no bloco correto.`,
    },
    {
      titulo: `O tapete mágico (jogo na sala)`,
      tipo: `jogo`,
      tempo: `6 min`,
      guiaProfessor: `Sem computador. Marque no chão da sala um "tapete mágico" com uma folha colorida. O professor é o computador e anuncia a regra. As crianças viram personagens do jogo. Faça a brincadeira ficar rápida e animada.`,
      atividade: `Combine a regra com a turma: "SE alguém pisar no tapete, ENTÃO todos batem palma e gritam ueba". Cada criança passa pisando no tapete; quando uma pisa, a regra dispara. Depois troque o ENTÃO (pular, fazer careta) e repita.`,
      gabarito: `Está certo quando a turma só executa a ação no momento em que alguém pisa no tapete, e não antes. Se as crianças esperam o "pisar" para reagir e ficam paradas quando ninguém pisa, elas entenderam que o ENTÃO depende do SE.`,
    },
    {
      titulo: `Troque o "então" (desafio)`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Proponha apenas depois que a regra da mensagem já estiver funcionando. Ajude a localizar a categoria "Criaturas" (em inglês, "Mobs"). Deixe a criança escolher o animal. Termine pedindo que ela conte a regra em voz alta para um colega.`,
      atividade: `Troque o bloco de mensagem pelo bloco "gerar" (spawn) da categoria "Criaturas". Escolha um animal amigável, como porco ou galinha. Encaixe dentro do "ao pisar". Volte ao jogo e pise no bloco de ouro para ver o animal nascer.`,
      gabarito: `Acertou quando, ao pisar no bloco de ouro, o animal escolhido nasce ao lado do jogador. Para confirmar o entendimento, a criança deve conseguir dizer: "Se eu pisar no ouro, então nasce um porquinho".`,
    },
  ],
};
