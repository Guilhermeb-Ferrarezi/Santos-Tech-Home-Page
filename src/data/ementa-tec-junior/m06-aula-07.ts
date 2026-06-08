import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Galeria de sprites: itens do meu jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança vai conseguir desenhar de 2 a 3 sprites novos do mesmo tamanho (um inimigo simples, uma plataforma e um prêmio) para usar no jogo dela.`,
  descricao: `Nesta aula as crianças montam a galeria de sprites do jogo: os pedacinhos de arte que vão aparecer na tela junto com o herói. Até agora elas já criaram um objeto pequeno e o personagem principal. Agora chegou a hora de produzir os outros atores da história: um inimigo bobinho, uma plataforma onde o herói pisa e um prêmio para coletar (moeda, estrela ou coração). É como completar o elenco de um teatro: o herói não brinca sozinho, ele precisa de companhia.

A ideia central da aula é o reaproveitamento. As crianças não vão aprender uma ferramenta nova hoje; elas vão usar TUDO o que já sabem (lápis, balde de tinta, espelho, paleta de cores, camadas) para criar várias peças seguidas. Isso treina a autonomia e mostra que fazer um jogo é fazer muitas pecinhas pequenas, uma de cada vez, com calma.

Um ponto muito importante desta aula é a consistência de tamanho. Para o jogo ficar bonito e funcionar bem depois no Construct, os sprites precisam ter mais ou menos o mesmo tamanho do personagem e do objeto. Por isso o professor vai reforçar a grade de 16x16 (ou o tamanho que a turma vem usando) como o "tamanho oficial" da turma. Inimigo, prêmio e plataforma cabem todos nessa mesma caixinha.

No final, a turma terá uma pequena coleção de arquivos salvos, prontos para a última aula do mês, quando tudo será exportado para o jogo. É um momento de orgulho: a criança olha para a tela e vê que já tem herói, item e galeria. O jogo está quase ganhando vida.`,
  materiais: [
    `Computadores ligados, um por criança, com o Aseprite já aberto antes da turma chegar`,
    `Projetor ou TV grande para o professor mostrar cada passo na tela dele`,
    `Arquivos de exemplo prontos: um inimigo simples, uma plataforma e uma moeda em 16x16 (.aseprite)`,
    `Folha de papel quadriculado grande e canetinhas grossas para rascunhar antes de ir para o computador`,
    `Cartões impressos com a paleta de cores que a turma vem usando no mês`,
    `Pasta no computador com o nome de cada aluno para salvar os sprites novos`,
    `Cronômetro visível (ampulheta ou timer no projetor) para marcar os blocos de tempo`,
  ],
  conceitosChave: [
    `Sprite — cada desenhinho que aparece no jogo, como o herói, o inimigo ou a moeda.`,
    `Galeria — a coleção de todos os sprites que a criança já desenhou, guardados juntos.`,
    `Inimigo — o personagem que atrapalha o herói; pode ser bobinho e engraçado, não precisa dar medo.`,
    `Plataforma — o chão ou degrau onde o herói pisa e se apoia para não cair.`,
    `Prêmio — o item que o herói coleta para ganhar pontos, como moeda, estrela ou coração.`,
    `Mesmo tamanho — todos os sprites cabem na mesma caixinha (16x16) para combinarem no jogo.`,
    `Reaproveitar — usar de novo o que a gente já aprendeu, sem precisar começar tudo do zero.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Hoje você não ensina ferramenta nova: você organiza uma "linha de produção" de sprites. A grande sacada da aula é a consistência de tamanho. Um jogo 2D fica bonito quando os elementos têm escala parecida; por isso todo sprite novo nasce numa tela de 16x16 pixels (ou o tamanho que a turma vem usando). Se o inimigo sair gigante e a moeda minúscula, no jogo eles ficarão estranhos. Você é o guardião do "tamanho oficial".

Tecnicamente, criar um novo sprite em Aseprite é: menu "File" (Arquivo) maior no topo, depois "New..." (Novo). Na janela que abre, coloque Width 16 e Height 16, confirme em "OK". As ferramentas que a turma já domina continuam as mesmas: o lápis (tecla B, ícone de lapiseira na barra esquerda), o balde de tinta (tecla G, ícone de baldinho) para preencher áreas, o espelho/simetria para deixar formas certinhas e a paleta de cores no canto inferior direito. Para salvar cada peça, use "File" > "Save As" (Salvar Como) e dê um nome claro: inimigo, plataforma, moeda.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Abra a galeria que cada criança já tem (herói e objeto) e celebre. Pergunte: "Quem mais mora no nosso jogo além do herói?" Anote as ideias no quadro: inimigo, plataforma, prêmio. Mostre os arquivos de exemplo no projetor para abrir o apetite.

15 min — Conteúdo novo guiado. No seu computador, no projetor, crie um sprite novo do zero. Vá em "File" > "New...", digite 16 e 16, clique "OK". Desenhe na frente deles um inimigo bem simples (um quadradinho com dois olhos e dentinhos). Use o lápis para o contorno e o balde para pintar por dentro. Salve em "File" > "Save As" com o nome inimigo. Repita rapidinho a ideia para a plataforma (um retângulo colorido) e a moeda (um círculo amarelo com brilho). Diga sempre em voz alta o que está clicando.

25 min — Mão na massa. Cada criança cria os próprios sprites. Peça para começarem pelo prêmio (mais fácil) e depois inimigo e plataforma. Circule pela sala. Lembre-os de criar um arquivo novo de 16x16 para cada peça e de salvar com nome. Quem terminar rápido pode dar mais detalhes ou cores. A meta mínima é 2 sprites; 3 é ótimo.

10 min — Desafio e compartilhar. Lance o desafio: "Dê uma carinha ou um detalhe que mostre o sentimento do seu inimigo." Depois, cada criança mostra a galeria no telão por 20 segundos. Aplauda todos.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de elenco de teatro ou de turma de amigos: "O herói não brinca sozinho, vamos desenhar os amiguinhos e os vilões dele." Para o tamanho, fale da "caixinha mágica de 16 quadradinhos" onde todo mundo precisa caber, igual brinquedos que guardamos na mesma caixa. Para reaproveitar, diga: "Você já é craque no lápis e no baldinho, hoje a gente só usa de novo." Chame o prêmio de "tesouro" e a plataforma de "degrau" ou "chão" para ficar concreto. Evite assustar: o inimigo pode ser engraçado, com cara de bravo bobo.

## Erros comuns e como ajudar

O erro mais comum é fazer sprites de tamanhos diferentes: a criança esquece de abrir um arquivo novo de 16x16 e desenha por cima de outro. Passe de mesa em mesa conferindo o número no topo da janela. Outro erro é não salvar ou salvar tudo com o mesmo nome, sobrescrevendo: ensine a trocar o nome em "Save As" toda vez. Alguns querem detalhe demais e travam: lembre que poucos pixels já contam a história. Há quem esqueça o contorno e a forma "vaza" ao usar o balde; oriente fechar o desenho com o lápis antes de pintar. Por fim, se a criança apagar sem querer, mostre desfazer com Ctrl+Z, o "voltar no tempo".`,
  exercicios: [
    {
      titulo: `Desenhe o tesouro: a moeda brilhante`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Comece pelo mais fácil para dar confiança. Mostre no projetor como abrir um arquivo novo de 16x16 ("File" > "New...", digite 16 e 16, "OK"). Desenhe um círculo amarelo com o lápis, pinte com o balde e ponha um pontinho branco de brilho. Peça que cada um faça o seu.`,
      atividade: `Crie um arquivo novo de 16x16 e desenhe uma moeda (ou estrela) amarela com um pontinho branco de brilho. Salve com o nome premio.`,
      gabarito: `A criança acertou se: a tela é 16x16, existe uma forma redonda ou de estrela amarela com contorno fechado, há um pixel claro de brilho e o arquivo foi salvo com nome. Não precisa estar perfeito, só reconhecível como prêmio.`,
    },
    {
      titulo: `Caça ao sprite: encontre o intruso`,
      tipo: `jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Projete quatro sprites no telão: três do mesmo tamanho (16x16) e um claramente maior ou menor. Faça as crianças apontarem qual está fora do "tamanho oficial". Reforce por que o tamanho igual importa para o jogo.`,
      atividade: `Olhe os quatro desenhos na tela. Aponte e grite qual é o intruso, aquele que NÃO tem o mesmo tamanho dos outros.`,
      gabarito: `Acertou quem aponta o sprite de tamanho diferente (o maior ou menor que os demais). A resposta esperada é o desenho fora da caixinha de 16x16; saber justificar com "ele é maior/menor" é o sinal de que entendeu.`,
    },
    {
      titulo: `Roda do elenco: quem mora no nosso jogo?`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda. Pergunte quem são os personagens do jogo de cada um além do herói. Conduza para que todos citem pelo menos um inimigo, uma plataforma e um prêmio. Anote no quadro para virar uma lista de produção.`,
      atividade: `Na sua vez, conte para a turma: qual é o seu inimigo, onde o herói pisa (plataforma) e qual é o prêmio que ele coleta?`,
      gabarito: `A criança respondeu bem se nomeia os três papéis: um inimigo, uma plataforma e um prêmio, mesmo que com palavras simples (bicho mau, chão, moeda). Citar os três é o esperado; dois já mostra compreensão e pode ser completado pelo professor.`,
    },
    {
      titulo: `Rascunho no papel quadriculado`,
      tipo: `desenho no papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a folha quadriculada e marque um quadrado de 16x16 casinhas para virar a "tela". Peça que rascunhem o inimigo antes de ir ao computador, pintando casinha por casinha. Isso evita travar na frente da máquina e treina pensar em pixels.`,
      atividade: `No quadrado de 16x16 casinhas, desenhe seu inimigo pintando casa por casa. Dê dois olhos e uma boca para mostrar se ele está bravo ou bobo.`,
      gabarito: `Acertou se o desenho cabe dentro do quadrado marcado, usa casinhas inteiras (não meias) e o inimigo tem olhos e boca reconhecíveis. O esperado é uma figura simples e completa dentro da grade, pronta para copiar no Aseprite.`,
    },
    {
      titulo: `Galeria completa: o trio do jogo`,
      tipo: `desafio`,
      tempo: `13 minutos`,
      guiaProfessor: `Este é o desafio final e mais difícil: produzir e salvar os três sprites no computador, todos em 16x16, cada um em arquivo próprio com nome claro. Circule conferindo o tamanho no topo da janela e ajudando quem trava. Ao fim, peça que mostrem a pasta com os três arquivos.`,
      atividade: `Crie e salve três arquivos de 16x16 no Aseprite: inimigo, plataforma e premio. Cada um precisa ter contorno e cor. Mostre sua pasta com os três para o professor.`,
      gabarito: `Acertou quem termina com três arquivos salvos, todos em 16x16, cada um com forma reconhecível (inimigo, plataforma e prêmio), contorno fechado e ao menos uma cor preenchida, salvos com nomes diferentes. Dois sprites completos já cumprem a meta mínima; três é o resultado ideal.`,
    },
  ],
};
