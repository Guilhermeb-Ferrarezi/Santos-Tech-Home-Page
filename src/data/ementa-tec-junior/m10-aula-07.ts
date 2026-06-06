import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Meu Primeiro Obby",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança aprende a montar um pequeno obby colocando plataformas separadas por vãos na altura certa e testa pulando de uma para outra no modo Play.`,
  descricao: `Nesta aula as crianças vão construir o primeiro "obby" do mundo delas no Roblox. Obby é um jogo de obstáculos em que o boneco precisa pular de uma plataforma para outra sem cair. É um dos tipos de jogo mais queridos pelas crianças no Roblox, e agora elas vão criar o próprio caminho de pulos dentro do mundo que já vêm montando ao longo do mês.

O assunto central é distância e altura. Para o boneco conseguir saltar de um bloco para outro, os blocos não podem estar nem longe demais (o boneco cai no vão) nem altos demais (o boneco não alcança). A criança vai descobrir, testando, qual é o "tamanho certo" do pulo. Isso é um exercício maravilhoso de tentativa e ajuste: monta, testa, observa o que deu errado, arruma e testa de novo.

Tecnicamente, a aula usa três ações que as crianças já viram nas semanas anteriores: criar uma Part (bloco), mover a Part e duplicar a Part. A novidade é organizar esses blocos em sequência, deixando espaços de ar (os vãos) entre eles, e usar o botão Play para entrar no mundo e pular de verdade. O professor vai guiar a turma a fazer um caminho com poucos blocos primeiro e só depois aumentar o desafio.

Ao final, cada criança terá um pequeno percurso de pulos funcionando e testado. Esse obby será uma parte importante do "Mundo no Roblox" que será finalizado e apresentado na última aula do mês.`,
  materiais: [
    `Computadores (um por criança) com o Roblox Studio aberto, cada um com o mundo do aluno carregado da aula anterior`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo`,
    `Um arquivo de exemplo do professor: um obby simples já pronto (3 a 4 plataformas) para mostrar o objetivo no início`,
    `Mouses para todas as crianças (o obby exige arrastar blocos com precisão, e o mouse facilita muito)`,
    `Fita crepe e blocos de montar (tipo LEGO) ou caixinhas para a roda de conversa demonstrar pulos no mundo real`,
    `Folhas de papel e lápis de cor para o exercício de desenho do percurso`,
    `Uma cartela de adesivos de estrela para premiar quem terminar o percurso e o desafio`,
  ],
  conceitosChave: [
    `Obby — um joguinho de obstáculos onde o boneco pula de uma plataforma para outra sem cair.`,
    `Plataforma — um bloco achatado que serve de chão para o boneco pisar e descansar entre um pulo e outro.`,
    `Vão — o espaço vazio (de ar) entre duas plataformas, o buraco que o boneco precisa pular por cima.`,
    `Pulo — o salto do boneco; no Roblox quem faz o boneco pular é a tecla de espaço do teclado.`,
    `Altura — quão alto está cada plataforma; se a próxima estiver alta demais, o boneco não consegue subir.`,
    `Testar — entrar no jogo apertando Play para experimentar se o pulo funciona de verdade.`,
    `Ajustar — mover o bloco um pouquinho para perto ou para longe até o pulo ficar do tamanho certo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Um obby é uma sequência de plataformas separadas por espaços vazios (os vãos). O jogador controla o boneco e usa a tecla de espaço para pular de uma plataforma à seguinte. O segredo da aula é a calibragem das distâncias: o boneco padrão do Roblox pula uma altura e um comprimento limitados. Na prática, um pulo confortável vence um vão de cerca de 6 a 10 studs (a unidade de medida do Studio) e sobe cerca de 4 a 7 studs de altura. Você não precisa decorar números: o método é montar, testar e ajustar.

Tecnicamente você usará só três ações já vistas no mês. Para criar um bloco: aba Home (ou Model), botão Part. Para mover: ferramenta Move (a seta de quatro pontas na aba Home), que faz aparecer setas coloridas no bloco para arrastar. Para duplicar: clique no bloco e aperte Ctrl+D, ou botão direito e Duplicate. Para entrar no jogo e pular: botão azul Play, no topo da tela (aba Home ou Test). Para sair do teste: botão Stop (quadrado vermelho). Importante: travar o terreno chão como Anchored para nada cair. Selecione a Part, painel Properties à direita, marque a caixinha Anchored. Plataformas do obby também devem ficar Anchored, senão caem quando o boneco pisa.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, mostre seu obby de exemplo. Aperte Play e pule pelas plataformas na frente da turma; caia de propósito uma vez para mostrar o vão. Pergunte: "O que faz o boneco cair?" Deixe as crianças responderem.

Conteúdo novo guiado (15 min): com o mundo de exemplo aberto, demonstre devagar. Crie uma Part (Home, botão Part). Achate-a um pouco para virar plataforma usando a ferramenta Scale (caixinhas nos cantos) — uma plataforma larga e baixa. Deixe Anchored marcado em Properties. Duplique com Ctrl+D e use a ferramenta Move (seta vermelha ou azul) para afastar a cópia, criando um vão. Repita até ter três plataformas. Aperte Play e pule pelas três. Mostre o ajuste: pare (Stop), aproxime uma plataforma que estava longe demais, teste de novo.

Mão na massa (25 min): cada criança monta o próprio obby no mundo dela. Peça primeiro só três plataformas com vãos. Circule pela sala. Quando uma criança tiver três funcionando, libere duplicar mais e variar a altura (uma plataforma um degrauzinho acima). Lembre sempre: Play para testar, Stop para arrumar.

Desafio + compartilhar (10 min): desafio "ponte quebrada" — adicionar uma última plataforma um pouco mais longe, o pulo mais difícil. Depois cada criança mostra seu percurso pulando para um colega ao lado. Dê um adesivo de estrela para quem completou o percurso sem cair.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia das pedras no rio: "As plataformas são pedras e o vão é a água. Se as pedras estiverem muito longe, o boneco molha o pé e cai!" Outra: pular de almofada em almofada no chão da sala sem pisar no piso. Fale "pertinho", "bem longe", "alto demais", "do tamanho certo" em vez de números. Mostre sempre fazendo, e deixe a criança imitar olhando o seu exemplo no projetor.

## Erros comuns e como ajudar

Plataforma cai junto com o boneco: faltou marcar Anchored — abra Properties e marque a caixinha. Vão grande demais e o boneco nunca alcança: ajude a aproximar com a ferramenta Move até dar. Plataforma alta demais: explique que o boneco não consegue subir um "muro", baixe um pouco. Criança esquece de apertar Stop e tenta mover o bloco enquanto joga: lembre que precisa parar o jogo primeiro (botão quadrado vermelho). Blocos se sobrepondo sem vão: mostre o espaço de ar arrastando um para o lado. Frustração ao cair muito: comemore as quedas como parte do jogo e ajuste a distância junto com a criança.`,
  exercicios: [
    {
      titulo: `Pedras no rio (aquecimento no chão)`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Antes dos computadores, espalhe pelo chão da sala caixinhas ou folhas de papel como se fossem plataformas, com espaços entre elas. Conte que o chão entre os papéis é "água". Convide uma criança por vez a atravessar pulando de papel em papel. Use as palavras "pertinho", "longe demais" e "do tamanho certo".`,
      atividade: `As crianças, uma de cada vez, atravessam a sala pulando só sobre os papéis, sem pisar no chão "molhado". O professor afasta um papel de propósito para mostrar quando o pulo fica difícil demais.`,
      gabarito: `A criança entende que existe uma distância boa para pular: nem tão perto (sem graça) nem tão longe (impossível). Espera-se que ela diga ou mostre que o papel afastado demais é difícil de alcançar, ligando isso ao vão entre plataformas no Roblox.`,
    },
    {
      titulo: `Minhas três plataformas`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `No projetor, refaça devagar: criar uma Part (Home, botão Part), achatar com Scale, marcar Anchored em Properties, duplicar com Ctrl+D e afastar com a ferramenta Move criando um vão. Peça que cada criança faça igual no mundo dela, só três plataformas. Circule conferindo o Anchored.`,
      atividade: `Cada criança cria três plataformas no próprio mundo, com um vão de ar entre elas, todas marcadas como Anchored. Em seguida aperta Play e tenta pular da primeira até a terceira.`,
      gabarito: `As três plataformas aparecem separadas por vãos e não caem ao serem pisadas (Anchored marcado). No modo Play, o boneco consegue pular de uma para a outra. Se cair, a criança identifica que o vão está grande e aproxima a plataforma.`,
    },
    {
      titulo: `Conserta o pulo`,
      tipo: `desafio na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre o ciclo testar e ajustar: aperte Play, caia de propósito num vão grande, aperte Stop, use Move para aproximar a plataforma e teste de novo até dar certo. Peça que cada criança encontre, no obby dela, um pulo que está difícil e conserte sozinha.`,
      atividade: `A criança procura no próprio obby uma plataforma longe ou alta demais. Para o jogo (Stop), arrasta a plataforma com a ferramenta Move para deixá-la no tamanho certo do pulo e testa de novo com Play.`,
      gabarito: `Depois do ajuste, o boneco vence aquele pulo no modo Play sem cair. A criança demonstra o ciclo completo: testou, viu o erro, parou o jogo, moveu o bloco e testou de novo com sucesso.`,
    },
    {
      titulo: `Desenho do meu percurso`,
      tipo: `desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua folhas e lápis de cor. Peça que cada criança desenhe o caminho do obby dela vista de lado, mostrando as plataformas, os vãos (buracos) e setas indicando para onde o boneco pula. É uma forma de a criança planejar e revisar o próprio percurso.`,
      atividade: `Desenhe o seu obby no papel: faça as plataformas como retângulos, deixe espaços vazios entre elas para os vãos e desenhe setas mostrando a direção dos pulos do boneco, do começo até o fim.`,
      gabarito: `O desenho mostra pelo menos três plataformas com espaços (vãos) entre elas e setas ligando uma à outra na ordem dos pulos. Considera-se certo quando o caminho desenhado corresponde, mais ou menos, ao obby montado no computador.`,
    },
    {
      titulo: `A ponte quebrada (desafio final)`,
      tipo: `desafio + compartilhar`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha o desafio mais difícil: acrescentar uma última plataforma um pouco mais longe e talvez um degrauzinho mais alta, formando o pulo final. Incentive a testar e ajustar até conseguir. Ao final, organize duplas para cada criança mostrar o percurso completo pulando para o colega.`,
      atividade: `Adicione uma plataforma final ao seu obby, mais distante que as outras, e ajuste até conseguir vencer o pulo no modo Play. Depois, mostre o percurso inteiro a um colega, atravessando do início ao fim sem cair.`,
      gabarito: `A criança consegue, no modo Play, completar o percurso inteiro incluindo a plataforma final mais difícil, sem cair. O sucesso é confirmado quando ela atravessa o obby do começo ao fim na frente do colega.`,
    },
  ],
};
