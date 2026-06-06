import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Pontos que Sobem no Placar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende a juntar um evento com uma variável para criar um placar que soma mais um ponto cada vez que ela quebra ou coleta um bloco no Minecraft.`,
  descricao: `Nesta aula as crianças descobrem como nasce um placar de verdade, igualzinho ao dos jogos que elas adoram. Até agora elas já guardaram coisas dentro de uma caixinha mágica (a variável) e já mandaram o computador fazer algo quando um evento acontece. Hoje juntamos as duas ideias: toda vez que um evento acontece, a caixinha ganha mais um ponto. É a primeira vez que elas veem um número subindo sozinho na tela por causa de uma ação delas.

O assunto central é simples e poderoso: somar pontos. Em vez de a variável só guardar um número parado, ela vira um placar vivo. Quando a criança quebra um bloco ou pega um item, o programa pega o número que estava guardado, soma mais um, e mostra o novo número grandão na tela. Esse é o coração de quase todos os jogos: fazer pontos crescerem quando o jogador faz a coisa certa.

Por que isso importa? Porque o placar é o que deixa um jogo divertido e justo. Ele conta quem está ganhando, mostra o esforço do jogador e dá aquela vontade de continuar para fazer mais pontos. Quando a criança entende que cada ponto é o computador somando mais um numa caixinha, ela passa a enxergar a lógica escondida atrás de qualquer jogo. É um momento mágico de "eu sei como funciona!".

Na prática, cada aluno vai montar um bloco de evento no MakeCode (por exemplo, "ao quebrar bloco"), criar uma variável chamada Pontos e, dentro do evento, mandar a variável mudar mais um. Depois vão mostrar o número na tela com um aviso. No mundo do Minecraft, eles vão sair coletando ou quebrando blocos e gritar de alegria vendo o placar pular de zero para um, dois, três. No fim, cada um mostra para a turma quantos pontos conseguiu fazer.`,
  materiais: [
    `Computadores (um por aluno ou em duplas) com Minecraft Education ou Minecraft Bedrock e o Code Builder do MakeCode já abertos e testados.`,
    `Projetor ou TV grande ligada no computador do professor para demonstrar cada passo bem devagar.`,
    `Um mundo do Minecraft simples e plano (modo Criativo) já criado e salvo, com bastante espaço para quebrar e coletar blocos.`,
    `Projeto de exemplo no MakeCode com a variável Pontos pronta, para o professor mostrar funcionando antes das crianças tentarem.`,
    `Cartelas grandes impressas com os blocos-chave do dia: "ao quebrar bloco", "mudar Pontos por 1" e "escrever Pontos".`,
    `Folhas de papel com um placar desenhado em branco e lápis de cor para a atividade no papel.`,
    `Adesivos ou carimbos de estrela para premiar quem fizer o placar subir.`,
  ],
  conceitosChave: [
    `Variável — uma caixinha mágica que guarda um número e pode trocar esse número quando a gente quiser.`,
    `Placar — uma caixinha especial que guarda quantos pontos a gente já fez e mostra na tela.`,
    `Evento — uma coisa que acontece no jogo, tipo quebrar um bloco, que serve de sinal para o computador agir.`,
    `Somar mais um — pegar o número que está guardado e colocar um a mais, fazendo o placar subir.`,
    `Ponto — cada pedacinho de valor que a gente ganha quando faz a coisa certa no jogo.`,
    `Mostrar na tela — fazer o computador escrever o número dos pontos num aviso para todo mundo ver.`,
    `Começar do zero — deixar o placar em zero no início para a contagem ser justa.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

O placar é só uma variável que recebe pequenos aumentos. A variável é uma caixinha que guarda um número; o evento é o sinal que dispara uma ação; somar mais um é a ação. Junte os três e você tem um placar. No MakeCode, a variável guarda o valor entre uma ação e outra, então quando você soma mais um, o programa lembra o número anterior e o aumenta. Você não precisa dominar Minecraft: basta saber abrir o Code Builder (tecla C dentro do jogo, ou o ícone do Agente/lápis), arrastar blocos coloridos e clicar em jogar. Os blocos que importam hoje moram em três gavetas: na gaveta Player está "on broke block" (ao quebrar bloco); na gaveta Variables ficam "set" (definir), "change ... by 1" (mudar por 1) e o nome da sua variável; na gaveta Player também está "print" (escrever na tela). Faça o teste sozinho antes da aula até ver o número subir.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): reúna a turma perto do projetor. Conte alto: "um, dois, três, quatro!" como se cada palmada fosse um ponto. Relembre a caixinha mágica e os eventos das aulas passadas. Pergunte: "E se a caixinha guardasse pontos e subisse sozinha?" Mostre o placar de um jogo conhecido.

Conteudo novo guiado (15 min): no seu computador, entre no mundo Minecraft, aperte C para abrir o Code Builder e escolha MakeCode. Clique em New Project. Vá na gaveta Variables, clique em Make a Variable e digite Pontos. Arraste "on start" da gaveta Player e, dentro dele, ponha "set Pontos to 0" para o placar começar do zero. Agora arraste o evento "on broke block" da gaveta Player. Dentro dele, da gaveta Variables, encaixe "change Pontos by 1". Logo abaixo, arraste "print" e coloque a variável Pontos lá dentro. Volte ao jogo, quebre um bloco e mostre o número subindo. Faça devagar, nomeando cada gaveta e botão.

Mao na massa (25 min): cada aluno repete no seu computador. Passe de mesa em mesa garantindo que: criaram a variável Pontos, o "on start" zera o placar, o evento "on broke block" tem o "change Pontos by 1" dentro, e o "print" mostra Pontos. Depois deixe-os quebrarem ou coletarem vários blocos e contarem em voz alta a cada ponto. Quem terminar pode trocar o "+1" por "+2" e ver a diferença.

Desafio + compartilhar (10 min): proponha "quem faz dez pontos primeiro?". Cada criança mostra na tela seu placar e diz quantos pontos fez. Dê uma estrela para cada placar que subiu.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a ideia do cofrinho de moedas: cada bloco quebrado é uma moedinha que cai dentro do cofrinho Pontos, e o número no cofrinho cresce. Diga "o computador pega o número, dá um abracinho de +1 e devolve maior". Compare com pular corda contando: cada pulo é um ponto. Fale "começar do zero é como começar uma corrida na linha de largada". Evite a palavra incrementar; diga "subir", "ganhar mais um", "encher o placar". Mostre com os dedos: um, dois, três, fazendo o número crescer no ar.

## Erros comuns e como ajudar

O erro mais comum é pôr o "change Pontos by 1" fora do evento, solto na tela; o número não sobe. Mostre que o bloquinho precisa estar encaixado dentro da boca do "on broke block". Outro erro é esquecer de zerar com "on start", e o placar começa esquisito; relembre a linha de largada. Alguns trocam "change by" por "set to", e o número fica preso em um; explique que "set" coloca um valor fixo e "change" soma. Crianças também esquecem de clicar em jogar/salvar o código antes de voltar ao jogo; reforce o passo. Se o "print" não aparece, confira se a variável certa está encaixada dentro dele. Por fim, alguns ficam ansiosos para quebrar blocos antes do código estar pronto; combine que primeiro montamos, depois jogamos.`,
  exercicios: [
    {
      titulo: `O placar que sobe sozinho`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor o projeto pronto com a variável Pontos, o "on start" zerando e o evento "on broke block" com "change Pontos by 1" e "print". Depois peça que cada aluno repita no seu computador, passando de mesa em mesa.`,
      atividade: `No MakeCode, crie a variável Pontos, zere ela no "on start", coloque "change Pontos by 1" dentro do evento "ao quebrar bloco" e mostre o número com "print". Volte ao jogo e quebre três blocos.`,
      gabarito: `Acertou quando, ao quebrar cada bloco, o número na tela sobe de 0 para 1, depois 2, depois 3. Se subir a cada bloco, o placar está funcionando.`,
    },
    {
      titulo: `Corrida dos dez pontos`,
      tipo: `jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o código já pronto, anuncie uma corrida amigável. Conte até três e deixe a turma quebrar ou coletar blocos. Caminhe pela sala incentivando todos a contarem em voz alta os pontos.`,
      atividade: `Quem chega primeiro a dez pontos no placar? Quebre ou colete blocos e fique de olho no número subindo na tela. Quando chegar em dez, levante a mão.`,
      gabarito: `Acertou quando o placar do aluno chega a 10. O importante é o número ter subido corretamente, um a um, até dez. Todos que fizerem o placar subir são vencedores.`,
    },
    {
      titulo: `Roda dos placares da vida`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda. Pergunte onde elas já viram placar: futebol, videogame, jogo de tabuleiro. Conduza a conversa até a ideia de que todo placar é só um número que sobe quando alguém faz pontos.`,
      atividade: `Conte para a turma um lugar onde você já viu um placar e diga o que faz o número subir nesse lugar. Por exemplo: no futebol o número sobe quando alguém faz gol.`,
      gabarito: `Acertou quando a criança cita um placar real (futebol, videogame, etc.) e explica que o número sobe por causa de uma ação, como gol ou ponto. Mostra que entendeu evento mais soma.`,
    },
    {
      titulo: `Desenhe o placar crescendo`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue a folha com o placar em branco. Peça que desenhem quatro quadradinhos mostrando o placar em 0, depois 1, depois 2, depois 3, como uma historinha em quadrinhos do número subindo.`,
      atividade: `Desenhe quatro caixinhas. Na primeira escreva 0, na segunda 1, na terceira 2 e na quarta 3. Embaixo de cada caixinha desenhe o bloco que você quebrou para ganhar aquele ponto.`,
      gabarito: `Acertou quando os números aparecem na ordem 0, 1, 2, 3 e cada aumento vem acompanhado de um bloco desenhado. Mostra que entendeu que cada ação soma mais um.`,
    },
    {
      titulo: `O placar premiado de pontos diferentes`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Para quem já dominou o +1, mostre como trocar o número dentro de "change Pontos by". Desafie a fazer um bloco valer 2 pontos. Ajude a digitar o número novo no bloquinho e a observar o placar pular de dois em dois.`,
      atividade: `No seu código, troque o "change Pontos by 1" por "change Pontos by 2". Volte ao jogo, quebre blocos e veja o placar subir de dois em dois. Quantos blocos você precisa para chegar a oito?`,
      gabarito: `Acertou quando o placar sobe 0, 2, 4, 6, 8 e o aluno percebe que precisa de quatro blocos para chegar a oito. Mostra que entendeu que o número da soma pode mudar o tamanho do salto.`,
    },
  ],
};
