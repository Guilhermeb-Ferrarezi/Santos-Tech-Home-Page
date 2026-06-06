import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Conserta-Tudo: Ajustes Finais",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Corrigir, com a ajuda do professor, os bugs anotados na aula anterior, ajustando posições de peças, pontos de spawn e checkpoints, e testar de novo para confirmar que cada conserto funcionou.`,
  descricao: `Na aula passada cada criança virou detetive e fez a sua Lista de Bugs: peças flutuando no ar, buracos sem proteção, o boneco nascendo no lugar errado, checkpoints que não salvavam. Hoje é o dia de arregaçar as mangas e consertar tudo de verdade. A aula é quase toda mão na massa: abrimos o Roblox Studio, pegamos a lista e atacamos um problema de cada vez, do mais fácil para o mais difícil.

O segredo de hoje é o ciclo "conserta e testa". A criança não muda dez coisas de uma vez. Ela escolhe UM bug, faz o ajuste, aperta Play para testar, vê se resolveu e só então marca o item na lista e passa para o próximo. Esse hábito de testar logo depois de cada mudança é exatamente o que profissionais de jogos fazem, e é o que evita que um conserto novo quebre outra coisa sem ninguém perceber.

Os três tipos de conserto mais comuns nesta idade são: arrumar a POSIÇÃO de uma peça (subir, descer ou encaixar um bloco usando a ferramenta Move), mover o ponto de SPAWN (o lugar onde o jogador nasce, o SpawnLocation) e arrumar os CHECKPOINTS (os pontos de salvar no meio do caminho). O professor circula pela sala, senta ao lado de quem travou e mostra onde clicar, mas deixa a criança ser quem arrasta a peça e quem aperta o botão.

No fim da aula, cada lista deve ter vários itens riscados. Não precisa terminar tudo hoje: a aula 3 ainda vai cuidar dos ajustes que sobrarem. O importante é que a criança sinta a alegria de ver um problema sumir porque ELA consertou, e entenda que errar e consertar faz parte de criar um jogo.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o jogo de cada criança carregado (um por aluno)`,
    `Projetor ou TV grande para o professor demonstrar passo a passo no jogo modelo`,
    `A Lista de Bugs feita na aula 1 (impressa ou no caderno de cada criança)`,
    `Um jogo modelo com 3 bugs propositais já preparado pelo professor (peça flutuando, spawn errado, checkpoint que não salva)`,
    `Adesivos ou carimbos de "Consertado!" para marcar cada bug resolvido`,
    `Mouse extra e, se possível, fones de ouvido para os testes não atrapalharem o vizinho`,
    `Cartaz na parede com o lema "Conserta UM, testa UM"`,
  ],
  conceitosChave: [
    `Bug — um errinho no jogo, tipo um bloco no lugar errado ou um buraco sem proteção, que a gente precisa consertar.`,
    `Conserto — a mudança que a gente faz para o bug ir embora e o jogo ficar certinho.`,
    `Ferramenta Move (Mover) — o botão com setas que deixa você pegar uma peça e arrastá-la para cima, para baixo ou para o lado.`,
    `Spawn (ponto de nascer) — o lugar onde o boneco do jogador aparece quando o jogo começa; no Studio é a plaquinha chamada SpawnLocation.`,
    `Checkpoint — um ponto no meio do caminho que salva o progresso, para o jogador não voltar lá do começo se cair.`,
    `Testar — apertar o botão Play e jogar para ver com os próprios olhos se o conserto funcionou.`,
    `Lista de Bugs — o papelzinho onde anotamos cada problema e vamos riscando o que já foi consertado.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é prática e tranquila: você não precisa programar nada, só mover peças e mexer em duas plaquinhas especiais (SpawnLocation e checkpoint). Antes da aula, abra o Roblox Studio e treine três movimentos no seu jogo modelo. Primeiro, selecionar uma peça clicando nela e usar a ferramenta Move (no menu de cima, na aba Home, o botão Move com quatro setas). Setas coloridas aparecem na peça: arraste a seta verde para subir ou descer, a vermelha e a azul para os lados. Segundo, achar o SpawnLocation: ele é uma plataforma com um símbolo redondo; clique nele e arraste para o lugar certo, sempre apoiado no chão. Terceiro, conferir um checkpoint: clique nele e veja se está encostado no caminho, não no ar. O botão azul Play fica no topo, na aba Test ou Home; aperte para jogar e aperte Stop (o quadrado) para voltar a editar. Decore que SEM apertar Stop não dá para mover peças.

## Passo a passo da aula (10 / 15 / 25 / 10)

Aquecimento (10 min): peça que cada criança abra o jogo dela e pegue a Lista de Bugs. Faça uma roda rápida: cada um lê em voz alta um bug que vai consertar hoje. Combine o lema "Conserta UM, testa UM".

Conteúdo novo guiado (15 min): no projetor, abra o jogo modelo com os 3 bugs. Mostre o conserto de POSIÇÃO: clique numa peça flutuando, aperte o botão Move (aba Home), arraste a seta verde para baixo até a peça encostar no chão. Aperte Play, mostre que agora dá para pisar, aperte Stop. Mostre o SPAWN: clique no SpawnLocation, arraste-o para cima da plataforma inicial. Mostre o CHECKPOINT: clique nele e encoste-o no caminho. A cada conserto, teste na hora.

Mão na massa (25 min): as crianças atacam a própria lista, do bug mais fácil ao mais difícil. Regra de ouro: conserta um, aperta Play, testa, aperta Stop, risca da lista. Circule pela sala, sente ao lado de quem travou, aponte o botão certo, mas deixe a criança arrastar e apertar Play. Distribua carimbos "Consertado!" a cada item riscado.

Desafio + compartilhar (10 min): peça que cada criança escolha o conserto de que mais se orgulha e mostre ao colega do lado, apertando Play para provar que funciona. Conte quantos bugs a turma riscou no total e comemore.

## Como explicar para crianças

Use a ideia de médico de jogos: "Hoje a gente é o médico do nosso jogo. A Lista de Bugs é a fichinha dos machucadinhos. Vamos curar um de cada vez." Para a posição, diga "essa peça está voando, vamos puxar ela para baixo com a setinha verde até ela pousar no chão". Para o spawn, "essa plaquinha é o berço do boneco; vamos colocar o berço no lugar certo para ele não nascer caindo". Para o checkpoint, "é o ponto de salvar, como um abraço que guarda onde você chegou". Sempre reforce: "consertou? Aperta Play e mostra que ficou bom!".

## Erros comuns e como ajudar

A criança tenta mover a peça com o jogo rodando e nada acontece: lembre de apertar Stop primeiro. Ela arrasta a peça inteira para longe sem querer (mexeu na seta errada): mostre Ctrl+Z para desfazer e use só a seta verde. Ela muda mil coisas e perde o controle: traga de volta o lema "um de cada vez". O SpawnLocation some dentro de outra peça: suba-o um pouquinho com a seta verde. O checkpoint não salva no teste: confirme que ele encosta no chão do caminho, não está flutuando. E elogie cada conserto, mesmo o pequeno: ver o bug sumir é a maior recompensa.`,
  exercicios: [
    {
      titulo: `Lê e Aponta: que bug é esse?`,
      tipo: `Aquecimento oral em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor o jogo modelo. Aponte cada um dos 3 bugs e pergunte à turma de que tipo é: posição de peça, spawn ou checkpoint. Aceite respostas em linguagem de criança.`,
      atividade: `Olhe a tela com a professora. Para cada problema que aparecer, grite junto: é PEÇA no lugar errado, é o BERÇO (spawn) errado ou é o PONTO DE SALVAR (checkpoint)?`,
      gabarito: `Peça flutuando = bug de POSIÇÃO. Boneco nascendo caindo ou no lugar errado = bug de SPAWN. Ponto de salvar que não guarda o progresso = bug de CHECKPOINT. Não há resposta errada se a criança explicar o que vê; o objetivo é nomear os três tipos.`,
    },
    {
      titulo: `Pouso Suave: arrumar uma peça flutuante`,
      tipo: `Mão na massa guiado`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada criança escolhe da lista UMA peça que está flutuando. Acompanhe: clicar na peça, apertar Move (aba Home), arrastar a seta verde para baixo. Lembre de apertar Stop antes de mover, caso o jogo esteja rodando.`,
      atividade: `Ache uma peça que está voando no seu jogo. Clique nela, aperte o botão Move e puxe a seta verde para baixo até a peça encostar no chão. Depois aperte Play e pule em cima dela para testar.`,
      gabarito: `A peça fica apoiada no chão ou no caminho, sem vão por baixo. Ao apertar Play, o personagem consegue pisar nela sem cair. A criança risca o item na Lista de Bugs. Se a peça afundar no chão, suba-a um pouquinho com a seta verde.`,
    },
    {
      titulo: `O Berço Certo: consertar o ponto de spawn`,
      tipo: `Mão na massa guiado`,
      tempo: `10 minutos`,
      guiaProfessor: `Ajude a criança a achar o SpawnLocation (a plataforma com o símbolo redondo). Oriente a arrastá-lo, com a ferramenta Move, para cima da plataforma inicial, bem apoiado. Teste apertando Play para ver onde o boneco nasce.`,
      atividade: `Procure a plaquinha SpawnLocation no seu jogo. Use o botão Move para colocá-la em cima do chão inicial, sem ficar no ar. Aperte Play: o seu boneco precisa nascer em pé, no lugar certo, sem cair.`,
      gabarito: `O SpawnLocation fica apoiado numa superfície firme no início do jogo. Ao apertar Play, o personagem aparece em pé no lugar planejado, sem cair no vazio nem nascer dentro de uma parede. A criança risca o item da lista.`,
    },
    {
      titulo: `Ponto de Salvar de Volta: arrumar um checkpoint`,
      tipo: `Mão na massa com teste`,
      tempo: `10 minutos`,
      guiaProfessor: `Tarefa mais difícil. Ajude a criança a clicar no checkpoint e conferir se ele encosta no caminho. Oriente a usar Move para apoiá-lo no chão. Teste assim: apertar Play, passar pelo checkpoint, pular num buraco de propósito e ver se o boneco volta ao checkpoint, e não ao começo.`,
      atividade: `Encontre um checkpoint do seu jogo. Use o botão Move para encostá-lo bem no caminho, não no ar. Aperte Play, passe por ele, depois caia de propósito num buraco. Você deve voltar para o checkpoint, e não para o início.`,
      gabarito: `O checkpoint fica apoiado no caminho. No teste, ao cair depois de passar por ele, o personagem reaparece no checkpoint, não no spawn inicial. Se voltar ao início, confirme que o checkpoint encosta no chão e que a criança passou por ele antes de cair. Item riscado da lista.`,
    },
    {
      titulo: `Detetive Chefe: conserta, testa e prova`,
      tipo: `Desafio + compartilhar`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada criança escolha o conserto de que mais se orgulha e o apresente ao colega do lado, apertando Play para provar que funciona. Conte com a turma quantos bugs foram riscados no total e comemore. Quem terminou cedo pode atacar mais um bug da lista.`,
      atividade: `Escolha o seu melhor conserto de hoje. Mostre para o colega do lado e aperte Play para provar que está funcionando. Conte quantos bugs você riscou da sua lista. Sobrou tempo? Conserte mais um!`,
      gabarito: `A criança consegue apertar Play e demonstrar, ao vivo, que pelo menos um bug foi resolvido (a peça segura o pulo, o boneco nasce certo ou o checkpoint salva). A Lista de Bugs tem um ou mais itens riscados. O objetivo é a criança explicar o que consertou e provar testando; não é preciso terminar a lista inteira, pois a aula 3 continua os ajustes.`,
    },
  ],
};
