import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Onde o Jogador Começa?",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Descobrir o que é um ponto de spawn e colocá-lo no mapa para que o personagem nasça no lugar certo quando clicamos em jogar.`,
  descricao: `Até agora as crianças trouxeram seus bonecos de voxel para o Roblox Studio, arrumaram os assets na cena e construíram o mapa do mundo. Mas falta uma peça muito importante: quando alguém clica no botão de jogar, onde exatamente o personagem aparece? Se a gente não disser isso para o Roblox, o jogador pode nascer flutuando no céu, dentro de uma parede, ou até cair para sempre no vazio. Nesta aula vamos resolver isso colocando um ponto de spawn no lugar certo.

O spawn é o ponto de nascimento do jogador. No Roblox Studio ele tem um nome próprio: SpawnLocation. É uma plaquinha quadrada, parecida com um tapete, que dizemos onde fica. Toda vez que o jogador entra no jogo ou volta depois de cair, ele aparece em cima dessa plaquinha. É como o quadradinho de "início" de um jogo de tabuleiro: é dali que todo mundo parte.

Esta é uma aula muito visual e de mão na massa. O professor vai mostrar no projetor como achar o SpawnLocation, como arrastá-lo para um chão firme do mapa e como girar a setinha azul que mostra para qual lado o jogador vai olhar quando nascer. Depois, cada criança faz o mesmo no próprio mapa. O momento mágico é apertar o botão Play (o triângulo verde lá em cima) e ver o personagem aparecer exatamente onde a gente escolheu.

O grande aprendizado aqui é a ideia de testar o que construímos. Colocar o spawn e clicar em jogar é a primeira vez que a criança "entra de verdade" no mundo que ela montou. Ela vai descobrir, por exemplo, se o chão está firme, se o spawn está num lugar legal para começar a aventura, e se o personagem nasce de pé olhando para o cenário bonito. Errar e arrumar faz parte: é assim que jogos de verdade são feitos.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o projeto do mapa de cada criança já salvo (do trabalho das semanas anteriores)`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar passo a passo`,
    `Um projeto de exemplo já pronto, com um SpawnLocation bem colocado, para mostrar como deve ficar`,
    `Um segundo exemplo de propósito "errado" (spawn dentro de uma parede ou no ar) para mostrar o que NÃO fazer`,
    `Folha impressa com a imagem do ícone do SpawnLocation e da seta azul de direção, para as crianças reconhecerem`,
    `Adesivos ou carimbos para marcar quem conseguiu fazer o personagem nascer no lugar certo`,
  ],
  conceitosChave: [
    `Spawn — o ponto de nascimento; é onde o personagem aparece quando você começa a jogar.`,
    `SpawnLocation — a plaquinha quadrada do Roblox que marca o spawn; parece um tapetinho no chão.`,
    `Botão Play — o triângulo verde lá em cima que entra no jogo para a gente testar.`,
    `Seta de direção — a setinha azul do spawn que mostra para qual lado o personagem vai olhar ao nascer.`,
    `Chão firme — um lugar sólido do mapa, sem buracos, onde o spawn pode ficar sem cair.`,
    `Testar — apertar jogar para ver com nossos olhos se tudo funciona do jeito certo.`,
    `Mover (ferramenta) — a ferramenta das setinhas coloridas que arrasta a plaquinha para o lugar certo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para dar esta aula. O conceito é simples: o jogador precisa de um lugar para "nascer", e esse lugar se chama spawn. No Roblox Studio o objeto que cria o spawn chama-se SpawnLocation. Ele já vem pronto: a gente só precisa colocá-lo num chão firme do mapa e apontar a direção. Antes da aula, abra um projeto, faça você mesmo uma vez e clique em Play para ver o personagem nascer. Fazer uma vez sozinho dá toda a segurança de que você precisa.

Onde achar o SpawnLocation: no topo da tela, clique na aba HOME (Início) ou MODEL (Modelo). Procure o botão "Spawn". Clicar nele já adiciona um SpawnLocation na cena. A ferramenta Move (Mover), com as setinhas vermelha, verde e azul, fica na aba HOME e serve para arrastar a plaquinha. A janela Explorer (do lado direito) mostra a lista de tudo que existe no mundo; é lá que aparece o nome "SpawnLocation".

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: "Da última vez, o que vocês construíram?" (o mapa). Mostre no projetor o exemplo errado: clique em Play e o boneco cai no vazio ou nasce dentro de uma parede. Pergunte: "O que será que faltou?" Deixe as crianças adivinharem. Conte a novidade do dia: hoje vamos dizer ao jogo ONDE o personagem nasce.

15 min — Conteúdo novo guiado. No projetor, vá até a aba HOME e clique no botão Spawn. Mostre a plaquinha quadrada que apareceu. Abra o Explorer (do lado direito) e aponte: "Olhem, ele se chama SpawnLocation." Pegue a ferramenta Move (as setinhas coloridas) na aba HOME e arraste a plaquinha para um chão firme do mapa, longe de buracos. Mostre a seta azul e gire-a para o personagem olhar para o cenário bonito. Por fim, clique no Play (triângulo verde no topo) e mostre, com alegria, o personagem nascendo em cima da plaquinha. Clique em Stop (quadrado vermelho) para voltar.

25 min — Mão na massa. Cada criança abre o próprio mapa. Acompanhe a turma fazendo junto, um passo de cada vez, e espere todos terminarem cada passo: (1) clicar em Spawn na aba HOME; (2) achar o nome SpawnLocation no Explorer; (3) usar a ferramenta Move para arrastar a plaquinha até um chão firme; (4) girar a seta azul; (5) clicar em Play e ver o personagem nascer; (6) clicar em Stop. Passe de mesa em mesa. Quem terminar antes ajuda o coleguinha do lado ou melhora o lugar do spawn.

10 min — Desafio e compartilhar. Desafie: "Coloque o spawn num lugar especial do mapa, perto de algo bonito que você construiu." Depois, cada criança aperta Play na frente da turma e mostra o personagem nascendo. Todos batem palma. Lembre que na próxima aula vamos colocar itens para pegar.

## Como explicar para crianças

Use a analogia do tabuleiro: "O spawn é o quadradinho de início; é dali que todo jogador parte." Outra imagem boa: "É o tapetinho mágico de nascer." Chame o Play de "botão de entrar no jogo" e o triângulo verde de "triângulo de começar". Sempre faça primeiro no projetor e só depois peça para elas repetirem. Comemore bastante o momento em que o boneco aparece: esse é o gancho emocional da aula.

## Erros comuns e como ajudar

O spawn no ar ou dentro de uma parede: o boneco cai ou fica preso. Ajude a arrastar a plaquinha para um chão firme. Colocar dois spawns sem querer: apague o extra apertando Delete com a plaquinha selecionada. Esquecer de clicar em Stop e tentar editar enquanto joga: mostre o quadrado vermelho para sair. Plaquinha "afundada" no chão: levante um pouquinho com a seta verde da ferramenta Move. Confundir Move com girar: mostre que as setinhas movem e a seta azul aponta a direção do olhar.`,
  exercicios: [
    {
      titulo: `Caça ao spawn na tela`,
      tipo: `Reconhecimento visual`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor uma cena com o SpawnLocation colocado e peça para as crianças apontarem onde está a plaquinha quadrada. Reforce o nome "spawn".`,
      atividade: `Olhe a tela e aponte com o dedo onde está a plaquinha do spawn no mapa. Diga em voz alta o nome dela.`,
      gabarito: `A criança aponta para o SpawnLocation, a plaquinha quadrada parecida com um tapetinho no chão, e diz "spawn" ou "SpawnLocation".`,
    },
    {
      titulo: `Adicionando o meu spawn`,
      tipo: `Prática guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `Acompanhe a turma fazendo junto. Garanta que cada criança clicou na aba HOME, no botão Spawn, e que a plaquinha apareceu na cena. Confira no Explorer o nome SpawnLocation.`,
      atividade: `No seu mapa, clique na aba HOME e depois no botão Spawn. Veja a plaquinha aparecer. Ache o nome SpawnLocation na lista do lado direito (Explorer).`,
      gabarito: `Existe um SpawnLocation na cena, visível como plaquinha quadrada e listado no Explorer com o nome "SpawnLocation".`,
    },
    {
      titulo: `Arrastando para o chão firme`,
      tipo: `Mão na massa`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre a ferramenta Move (setinhas vermelha, verde e azul) na aba HOME. Ajude quem deixar a plaquinha no ar ou afundada. O spawn deve ficar sobre um piso sólido, longe de buracos.`,
      atividade: `Pegue a ferramenta Move e arraste a plaquinha do spawn até um chão firme do seu mapa, num lugar legal para começar a aventura. Não deixe no ar nem dentro de uma parede.`,
      gabarito: `O SpawnLocation fica apoiado sobre um chão sólido do mapa, sem flutuar, sem afundar e sem estar preso dentro de paredes.`,
    },
    {
      titulo: `Para que lado eu olho?`,
      tipo: `Ajuste e teste`,
      tempo: `7 minutos`,
      guiaProfessor: `Explique que a seta azul do spawn mostra a direção do olhar do personagem ao nascer. Peça para girarem a seta apontando para um lugar bonito. Depois clicam em Play (triângulo verde) e em Stop (quadrado vermelho).`,
      atividade: `Gire a seta azul do spawn para apontar para a parte mais bonita do seu mapa. Clique em Play e veja para onde o seu personagem está olhando quando nasce. Depois clique em Stop.`,
      gabarito: `Ao apertar Play, o personagem nasce em cima do spawn olhando na direção que a seta azul aponta, voltado para o ponto escolhido pela criança. O Stop volta ao modo de edição.`,
    },
    {
      titulo: `O desafio do começo perfeito`,
      tipo: `Desafio criativo e teste final`,
      tempo: `6 minutos`,
      guiaProfessor: `Desafie cada criança a posicionar o spawn num ponto especial do mapa, perto de algo que ela construiu. Cada uma aperta Play na frente da turma e mostra o personagem nascendo no lugar certo. Comemore com palmas.`,
      atividade: `Escolha um lugar especial do seu mapa, perto de algo bonito que você fez, e coloque o spawn lá. Aperte Play e mostre para a turma o seu personagem nascendo no começo perfeito. Depois aperte Stop.`,
      gabarito: `A criança posiciona o SpawnLocation num ponto escolhido perto de um elemento que construiu, aperta Play e o personagem nasce nesse lugar, de pé e no chão firme, mostrando o resultado para a turma e voltando com Stop.`,
    },
  ],
};
