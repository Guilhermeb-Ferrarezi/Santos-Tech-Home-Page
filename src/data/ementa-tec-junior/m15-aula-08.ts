import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Conjunto de sprites completo!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança reúne o personagem, o cenário, o item e o inimigo num único conjunto organizado e exporta tudo com nomes certos, fechando o entregável do mês para o jogo do ano.`,
  descricao: `Hoje é o dia de juntar tudo! Durante o mês inteiro a turma desenhou em pixels o herói do jogo, montou as peças de cenário (o tileset), criou um item para coletar e um inimigo para enfrentar. Cada coisa nasceu em uma aula diferente. Nesta última aula a gente coloca todas elas lado a lado, confere se estão prontas e exporta o conjunto completo. É como arrumar a mochila no fim da viagem: cada peça tem o seu lugar e o seu nome.

Por que esta aula importa tanto? Porque um jogo de verdade não usa desenhos soltos e espalhados. Ele precisa de um conjunto de sprites bem organizado: do tamanho certo, com as mesmas cores e com nomes de arquivo claros, para que mais tarde, quando montarmos o jogo no computador, seja fácil encontrar cada peça. Quando a criança aprende a conferir e a guardar o trabalho direitinho, ela vira uma artista de jogos de verdade, e não só alguém que desenha bonito.

A aula é bem mão na massa e bem visual. O professor abre cada sprite no Aseprite no projetor, mostra como conferir o tamanho na barra de baixo, como comparar as cores da paleta e como salvar com um nome organizado. Depois cada criança faz o mesmo no seu computador, com a ajuda do professor passando de mesa em mesa. No fim, todo mundo tem uma pastinha com o conjunto de sprites completo, pronto para virar jogo no resto do ano.

Como é a aula que fecha o mês, o clima é de conquista. Nada de conteúdo novo difícil: a ideia é revisar, organizar, exportar e comemorar. O professor deve celebrar cada conjunto pronto, porque é a prova concreta de tudo o que a criança aprendeu de pixel art neste mês.`,
  materiais: [
    `Computadores com o Aseprite aberto, um para cada criança, com os arquivos do mês (herói, tileset, item e inimigo) já salvos numa pasta`,
    `Projetor ou TV grande ligada ao computador do professor, para mostrar cada passo na tela grande`,
    `Um conjunto de sprites de exemplo, já pronto e organizado pelo professor, para servir de modelo do que se espera`,
    `Uma pasta criada antes da aula em cada computador, com um nome simples como Meu Jogo, para guardar tudo`,
    `Folha impressa de checagem com quatro quadradinhos (herói, cenário, item, inimigo) para a criança marcar o que já conferiu`,
    `Lápis de cor e papel para o desafio final de planejar como as peças vão se encontrar no jogo`,
  ],
  conceitosChave: [
    `Conjunto de sprites — a coleção com todos os desenhos do jogo juntos: o herói, o cenário, o item e o inimigo.`,
    `Exportar — tirar uma cópia do desenho do Aseprite para fora, num formato (o PNG) que o jogo consegue usar.`,
    `PNG — o tipo de imagem que guarda os pixels com fundo transparente, perfeita para sprites de jogo.`,
    `Tamanho do sprite — quantos pixels de largura e de altura o desenho tem; aparece na barrinha de baixo do Aseprite.`,
    `Paleta — a fileirinha de cores do desenho; usar a mesma paleta deixa todas as peças com a mesma cara.`,
    `Nome do arquivo — a etiqueta que damos a cada desenho salvo, para achar rápido depois (ex.: heroi, inimigo).`,
    `Organizar — colocar cada coisa no seu lugar e com o seu nome, para não perder nada na hora de montar o jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é a aula que fecha o entregável do mês: o conjunto de sprites pronto para o jogo do ano. Antes de tudo, abra você mesmo, em cada computador, os quatro arquivos que a turma fez nas aulas anteriores: o herói, o tileset (as peças de cenário), o item e o inimigo. Confira que todos estão na mesma pasta. Crie nessa pasta, se ainda não existir, uma subpasta com nome simples como Meu Jogo. É ali que a criança vai exportar tudo hoje.

Você precisa saber três conferências rápidas no Aseprite. Primeira, o tamanho: no canto de baixo, na barra inferior, o Aseprite mostra a largura e a altura em pixels (ex.: 32x32). Sprites pequenos pedem números pequenos e parecidos entre si. Segunda, as cores: o painel de cores fica na lateral direita; é a Paleta. Peças do mesmo jogo devem usar a mesma paleta para combinarem. Terceira, o nome: ao exportar, escrevemos um nome claro, tudo em letra minúscula e sem espaço, como heroi, cenario, item e inimigo.

O coração técnico da aula é o menu Arquivo, opção Exportar Como (Export As), salvando em PNG. O PNG guarda os pixels com fundo transparente, que é o que o jogo precisa. Tenha o conjunto de exemplo pronto e aberto antes de começar.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Aseprite)

10 min — Aquecimento e revisão: receba a turma e mostre no projetor o conjunto de exemplo já pronto, com as quatro peças lado a lado. Pergunte: lembram quem é o herói? E o inimigo? Relembrem juntos o que cada um fez no mês. Entregue a folha de checagem com os quatro quadradinhos.

15 min — Conteúdo novo guiado: no seu computador, abra o arquivo do herói. Mostre a barra de baixo e leia o tamanho em voz alta (ex.: 32x32). Mostre a Paleta na direita. Agora ensine a exportar: clique em Arquivo, depois em Exportar Como (Export As). Na janelinha, clique na pastinha, escolha a pasta Meu Jogo, escreva o nome heroi e confira que o tipo é PNG. Clique em Salvar (Save) e depois em Exportar (Export). Repita o caminho com calma, falando cada clique.

25 min — Mão na massa: cada criança abre as suas quatro peças, uma de cada vez. Para cada uma: confere o tamanho na barra de baixo, olha a paleta, e exporta por Arquivo, Exportar Como, pasta Meu Jogo, nome certo (heroi, cenario, item, inimigo), tipo PNG, Salvar, Exportar. A cada peça exportada, a criança marca o quadradinho na folha de checagem. Passe de mesa em mesa repetindo o caminho em voz alta e elogiando cada exportação.

10 min — Desafio e compartilhar: cada criança abre a pasta Meu Jogo e conta quantos arquivos PNG tem dentro (devem ser quatro). Quem tiver os quatro, mostra para o colega do lado e fala o nome de cada peça. Feche com uma palma grande: o conjunto de sprites do mês está completo!

## Como explicar para crianças

Use a ideia de mochila de viagem: cada peça do jogo é uma roupa que a gente dobra e guarda no lugar certo, com etiqueta, para achar fácil depois. Diga que exportar é tirar uma foto do desenho para levar para fora do Aseprite, e que o PNG é o tipo de foto que o jogo gosta. O tamanho é como medir a altura da criança numa régua: o número aparece embaixo. A paleta é a caixinha de lápis de cor: se todas as peças usam a mesma caixinha, elas combinam. Fale sempre apontando a tela e fazendo gestos com a mão.

## Erros comuns e como ajudar

A criança esquece de escolher a pasta e o arquivo some: mostre devagar onde fica a pastinha na janela de exportar e confira junto que está na pasta Meu Jogo. Ela escreve o nome com espaço ou maiúscula: combine antes que o nome é sempre tudo junto e em minúscula. Ela salva como outro tipo, não PNG: aponte o campo do tipo e confirme PNG antes de clicar em Exportar. Ela acha que perdeu o desenho: lembre que o arquivo original do Aseprite continua salvo; o PNG é só uma cópia. Tamanhos muito diferentes entre as peças: não refaça hoje, só anote para combinar mais tarde; o importante é o conjunto estar reunido e exportado.`,
  exercicios: [
    {
      titulo: `Conferindo o tamanho do herói`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `No projetor, abra o arquivo do herói e aponte a barra de baixo, onde o Aseprite mostra a largura e a altura em pixels. Leia o número em voz alta. Depois deixe cada criança abrir o seu herói e achar o mesmo lugar na tela.`,
      atividade: `Abra o arquivo do seu herói no Aseprite. Olhe na barrinha de baixo e descubra o tamanho do seu desenho (por exemplo, 32x32). Fale o número para o professor.`,
      gabarito: `Acertou quando a criança encontra os números do tamanho na barra inferior e os diz em voz alta. Qualquer tamanho do desenho dela está certo; o que conta é ela saber onde olhar para descobrir.`,
    },
    {
      titulo: `Caça às peças do conjunto`,
      tipo: `jogo`,
      tempo: `7 min`,
      guiaProfessor: `Transforme em brincadeira de apontar rápido. Mostre no projetor o conjunto de exemplo com herói, cenário, item e inimigo. Fale o nome de uma peça e a turma aponta na tela onde ela está. Depois cada criança identifica as suas quatro peças.`,
      atividade: `O professor fala o nome de uma peça (herói, cenário, item ou inimigo) e você aponta o desenho certo na tela. Depois, abra as suas quatro peças e mostre cada uma para o professor.`,
      gabarito: `Acertou quando a criança aponta e nomeia corretamente as quatro peças do conjunto, sabendo diferenciar o herói do inimigo, e o cenário do item.`,
    },
    {
      titulo: `Exportando a primeira peça em PNG`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Faça o caminho completo no projetor uma vez, falando cada clique: Arquivo, Exportar Como, escolher a pasta Meu Jogo, escrever o nome, conferir PNG, Salvar, Exportar. Depois acompanhe cada criança repetindo os mesmos passos na sua peça.`,
      atividade: `Abra o seu herói. Clique em Arquivo, depois em Exportar Como. Clique na pastinha e escolha a pasta Meu Jogo. Escreva o nome heroi, confira que o tipo é PNG, clique em Salvar e depois em Exportar.`,
      gabarito: `Acertou quando aparece um arquivo chamado heroi.png dentro da pasta Meu Jogo. Se o professor abre a pasta e encontra o PNG do herói com o nome certo, a exportação deu certo.`,
    },
    {
      titulo: `Os nomes certos das quatro peças`,
      tipo: `desenho/papel`,
      tempo: `8 min`,
      guiaProfessor: `Entregue a folha de checagem com os quatro quadradinhos. Combine os nomes em voz alta com a turma: heroi, cenario, item, inimigo, tudo junto e em minúscula. Peça que escrevam ou copiem o nome embaixo de cada quadradinho.`,
      atividade: `Na sua folha, escreva o nome certo embaixo de cada quadradinho do conjunto: heroi, cenario, item e inimigo. Lembre: tudo junto e em letra minúscula, sem espaço.`,
      gabarito: `Acertou quando os quatro nomes aparecem escritos em minúscula e sem espaço, cada um no seu quadradinho. Pequenos erros de letra valem; o importante é entender que nome de arquivo é tudo junto e minúsculo.`,
    },
    {
      titulo: `Meu conjunto de sprites completo!`,
      tipo: `desafio`,
      tempo: `13 min`,
      guiaProfessor: `Este é o ponto alto e fecha o entregável do mês. Acompanhe cada criança exportando as peças que ainda faltam (cenario, item, inimigo), do mesmo jeito que fez com o herói. No fim, abram juntos a pasta Meu Jogo para contar os quatro arquivos PNG. Comemore cada conjunto pronto com palmas.`,
      atividade: `Exporte para a pasta Meu Jogo as suas peças que faltam: cenario, item e inimigo, cada uma em PNG, repetindo o caminho Arquivo, Exportar Como. No fim, abra a pasta e conte: você deve ter quatro arquivos PNG. Mostre o conjunto completo para um colega.`,
      gabarito: `Acertou quando a pasta Meu Jogo tem os quatro arquivos PNG (heroi, cenario, item e inimigo) com os nomes certos. O conjunto de sprites do mês está completo, e o entregável para o jogo do ano está pronto.`,
    },
  ],
};
