import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Pontos e Vitoria",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Fazer com que a moeda coletada desapareça e some um ponto, e que alcançar o objetivo do jogo mostre a tela de vitória, testando cada regra até tudo funcionar como combinado.`,
  descricao: `Nesta aula as crianças vão dar vida às regras que combinaram na aula passada. Até agora elas montaram o cenário, escolheram onde o jogador nasce e espalharam moedas, itens e obstáculos. Hoje chega a hora mágica: a moeda vai sumir quando o jogador encostar nela, vai aparecer um número de pontos crescendo na tela, e quando o jogador chegar no objetivo final vai surgir uma mensagem grande de "Você venceu!". É o momento em que o projeto deixa de ser só um cenário bonito e passa a ser de verdade um jogo com começo, meio e fim.

O professor vai conduzir os alunos dentro do Roblox Studio para ligar três peças: a moeda que dá ponto, o contador que mostra a pontuação e a placa de chegada que dá a vitória. Tudo isso usando blocos simples e nomes claros, sem decorar código difícil. A ideia é que cada criança entenda a lógica como uma corrente de causa e efeito: "se o jogador toca, então acontece algo".

O coração da aula é testar. Programar é igual a montar um brinquedo: a gente liga, vê se funciona, conserta e liga de novo. As crianças vão apertar o botão Play várias vezes, coletar as próprias moedas, ver o número subir e correr até a chegada para ganhar. Quando algo não funciona, isso não é erro feio, é uma pista. O professor mostra como ler a pista e ajustar.

Ao final, cada aluno terá um jogo onde dá para ganhar pontos e vencer de verdade. Esse é um marco enorme: pela primeira vez o jogo tem um objetivo claro e uma recompensa. Isso prepara o terreno para a próxima aula, em que vamos deixar tudo ainda mais divertido com sons, efeitos e ajustes finos.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um por aluno ou em dupla, já com o projeto do jogo da turma carregado`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo`,
    `Projeto-exemplo pronto do professor, com uma moeda que dá ponto e uma placa de chegada que mostra a vitória, para servir de modelo`,
    `Folha impressa "Minhas três regras" para cada aluno anotar: regra da moeda, regra do ponto, regra da vitória`,
    `Adesivos ou carimbos de "Testado!" para marcar cada regra que a criança conseguiu fazer funcionar`,
    `Fones de ouvido (opcional) para quando o jogo tiver som de moeda`,
    `Mouse com fio para cada máquina, pois facilita muito o trabalho das crianças pequenas dentro do Studio`,
  ],
  conceitosChave: [
    `Pontuação — é o número que mostra quantas moedas você já pegou; cada moeda faz esse número crescer.`,
    `Evento de toque — é quando o jogador encosta em uma peça; o jogo percebe esse encontro e faz algo acontecer.`,
    `Vitória — é o momento em que o jogador cumpre o objetivo e o jogo mostra uma mensagem dizendo que ele venceu.`,
    `Objetivo — é o lugar especial ou a meta que o jogador precisa alcançar para ganhar o jogo.`,
    `Variável de pontos — é uma caixinha que guarda o número de pontos e lembra dele durante todo o jogo.`,
    `Testar — é apertar Play e brincar para ver se a regra funciona de verdade, igual a experimentar um brinquedo novo.`,
    `Ajustar — é fazer um pequeno conserto quando algo não funciona, mudando um nome ou um número até dar certo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador. Nesta aula vamos ligar três coisas no Roblox Studio: a moeda dá ponto, o ponto aparece na tela e a chegada mostra a vitória. Tudo com blocos e nomes simples. Antes da aula, abra o Studio, aperte o botão azul Play (no topo, com símbolo de "play"), ande pelo cenário e teste o jogo-exemplo uma vez. Para parar, aperte Stop (o quadrado vermelho ao lado do Play). Saiba achar a janela Explorer (menu View, no topo, botão Explorer) que mostra a lista de tudo no jogo, em árvore, do lado direito. Uma moeda no Roblox é uma Part (uma peça); para ela "perceber" o toque do jogador, usamos um pequeno script com o evento Touched. Pontuação vamos guardar num leaderstats, que é o jeito padrão do Roblox de mostrar pontos no canto da tela. Não precisa decorar o código: você vai copiar os blocos do exemplo e só trocar nomes.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Abra o jogo da turma no projetor. Pergunte: "Quais regras combinamos na aula passada?". Relembre as três: moeda some e dá ponto, e chegar no objetivo mostra a vitória. Entregue a folha "Minhas três regras". Aperte Play e mostre que hoje a moeda ainda não faz nada, para criar curiosidade.

Conteúdo novo guiado (15 min): No projetor, clique numa moeda no Explorer. Clique no sinal de mais (+) ao lado dela e escolha Script. Apague o texto e digite (ou cole do exemplo) um script curto: quando a moeda for tocada (Touched), confira se foi um jogador, some 1 no leaderstats e destrua a moeda. Mostre também o Script dentro de ServerScriptService que cria o leaderstats com um valor chamado Pontos. Aperte Play, encoste na moeda e mostre o número subindo no canto direito. Comemore junto.

Mão na massa (25 min): As crianças fazem o mesmo no jogo delas. Oriente: 1) clicar na moeda; 2) adicionar Script com o +; 3) copiar o bloco do exemplo; 4) apertar Play e testar. Quem terminar a moeda parte para a placa de chegada: adicionar um Script que, ao ser tocada, mostra uma mensagem de vitória na tela (um texto grande "Você venceu!"). Passe de mesa em mesa. A cada regra que funcionar, dê o carimbo "Testado!".

Desafio e compartilhar (10 min): Desafio: faça com que a vitória só apareça se o jogador tiver pegado pelo menos 3 moedas. Quem quiser tenta; quem não conseguir, tudo bem. Depois, dois ou três alunos mostram no projetor a moeda sumindo, o ponto subindo e a tela de vitória. Aplauda cada um.

## Como explicar para crianças

Use a ideia de causa e efeito: "Se você encostar na moeda, então ela some e você ganha um ponto". Fale como se fosse mágica com regra: a moeda é mágica, mas só funciona se a gente contar a regra para ela. O ponto é um placar, igual ao de um jogo de futebol que conta os gols. A vitória é o troféu: aparece quando você cumpre a missão. Compare testar com provar a comida enquanto cozinha: a gente experimenta para ver se está bom e tempera de novo se precisar.

## Erros comuns e como ajudar

O erro mais comum é o nome estar diferente. Se o script procura "Pontos" mas o valor se chama "pontos" com letra minúscula, não funciona; mostre que o computador é exigente com maiúsculas. Outro erro: a criança coloca o Script na peça errada; confira no Explorer se o Script está dentro da moeda certa. Às vezes a moeda some mas o ponto não sobe, porque faltou o leaderstats; verifique se o Script de pontos está em ServerScriptService. Se o jogo não roda, pergunte se ela apertou Play e não Stop. E lembre sempre: errar aqui é normal, cada erro é uma pista para consertar e testar de novo.`,
  exercicios: [
    {
      titulo: `Caça às três regras`,
      tipo: `Revisão oral em roda`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça no aquecimento, com o jogo no projetor. Pergunte e deixe as crianças responderem em voz alta, apontando para a tela. Anote as respostas no quadro para todos verem.`,
      atividade: `Em roda, olhando o jogo no projetor, responda: o que deve acontecer quando o jogador encosta na moeda? E o que deve aparecer quando ele chega no objetivo final?`,
      gabarito: `Quando o jogador encosta na moeda, ela some e o número de pontos cresce em 1. Quando ele chega no objetivo, aparece na tela uma mensagem de vitória, como "Você venceu!". São as três regras: moeda some, ponto sobe, vitória aparece.`,
    },
    {
      titulo: `A moeda que dá ponto`,
      tipo: `Mão na massa guiado`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza passo a passo no projetor e espere a turma acompanhar. Confirme que cada criança clicou na moeda certa antes de adicionar o Script. Dê o carimbo "Testado!" para quem fizer o número subir.`,
      atividade: `No seu jogo, clique numa moeda no Explorer, clique no + e escolha Script, copie o bloco do exemplo, aperte Play e encoste na moeda. O número de pontos subiu? A moeda sumiu?`,
      gabarito: `Ao tocar a moeda, ela deve desaparecer e o número de Pontos no canto direito deve aumentar de 0 para 1. Se subiu e a moeda sumiu, a regra funcionou. Se a moeda some mas o ponto não sobe, falta o Script de pontos no ServerScriptService.`,
    },
    {
      titulo: `A placa da vitória`,
      tipo: `Mão na massa`,
      tempo: `12 minutos`,
      guiaProfessor: `Para quem já fez a moeda. Mostre no exemplo onde fica a placa de chegada e o Script dela. Lembre que o texto da vitória deve ser grande e fácil de ler. Cheque se o Script está dentro da placa certa.`,
      atividade: `Adicione um Script na placa de chegada do seu jogo. Faça com que, ao ser tocada, apareça na tela a mensagem "Você venceu!". Aperte Play, corra até a chegada e veja se a mensagem aparece.`,
      gabarito: `Ao encostar na placa de chegada, deve surgir na tela um texto grande de vitória, como "Você venceu!". Se nada aparece, confira se o Script está dentro da placa certa e se o nome dela bate com o que o script procura.`,
    },
    {
      titulo: `Detetive do erro`,
      tipo: `Resolução de problema`,
      tempo: `8 minutos`,
      guiaProfessor: `Prepare antes uma moeda com um errinho de propósito no jogo-exemplo (o nome "pontos" com letra minúscula, diferente de "Pontos"). Projete e convide a turma a achar a pista. Mostre que o computador é exigente com maiúsculas.`,
      atividade: `Esta moeda some mas o ponto não sobe. Onde está o erro? Olhe os nomes no Script e no valor de pontos. O que precisa mudar para funcionar?`,
      gabarito: `O nome está escrito diferente: o Script procura "Pontos" com P maiúsculo, mas o valor foi criado como "pontos" com p minúsculo. Basta deixar os dois iguais, com a mesma letra maiúscula, e o ponto volta a subir.`,
    },
    {
      titulo: `Vitória só com três moedas`,
      tipo: `Desafio de lógica`,
      tempo: `10 minutos`,
      guiaProfessor: `É o desafio final, opcional. Apresente como missão de campeão. Mostre no exemplo onde o script da chegada confere o número de pontos antes de dar a vitória. Elogie a tentativa, mesmo sem terminar.`,
      atividade: `Mude o jogo para que a vitória só apareça se o jogador tiver pegado pelo menos 3 moedas. Se ele chegar na placa com menos de 3 pontos, nada de vitória ainda. Teste com 2 moedas e depois com 3.`,
      gabarito: `No Script da placa, antes de mostrar a vitória, confira se Pontos é maior ou igual a 3. Com 2 moedas, ao tocar a chegada, a vitória não aparece. Com 3 moedas ou mais, ao tocar a chegada, a mensagem "Você venceu!" aparece. Assim a vitória depende de juntar 3 moedas.`,
    },
  ],
};
