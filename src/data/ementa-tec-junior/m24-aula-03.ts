import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Pronto para o Mundo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a deixar o seu jogo pronto para publicar no Roblox Studio, escolhendo um nome legal, um ícone bonito e escrevendo uma descrição curta e divertida.`,
  descricao: `Nesta aula, a turma vive um momento muito especial: o jogo deixa de ser só "nosso" e começa a se arrumar para encontrar o mundo. Depois de caçar bugs e fazer os ajustes finais, agora as crianças preparam a embalagem do presente. Assim como um bolo precisa de um nome na vitrine, uma capa bonita e um cartãozinho contando o que tem dentro, o jogo precisa de um nome, de um ícone e de uma descrição antes de ser publicado.

O assunto central é o que significa publicar. Publicar é apertar o botão mágico que tira o jogo de dentro do computador da escola e coloca ele na internet, num lugar onde outras pessoas, em outras casas e outras cidades, conseguem clicar e jogar. Para entender isso, a criança não precisa de palavras difíceis: basta saber que o jogo vai sair do "quartinho secreto" e ir para a "praça grande" onde todo mundo pode ver. E para a praça, a gente vai bem arrumado.

Nesta aula a turma cuida de três coisas que ficam na janela de configurações do jogo no Roblox Studio. Primeiro, o nome: precisa ser curto, fácil de falar e que dê vontade de clicar. Segundo, o ícone: a figurinha redonda ou quadradinha que aparece do ladinho do nome, igual a uma capa de livro. Terceiro, a descrição: duas ou três frasezinhas alegres contando o que o jogador vai encontrar e o que ele precisa fazer. Tudo isso é a "cara" do jogo lá fora.

Na prática, o professor mostra no projetor onde fica o menu das configurações do jogo (Game Settings) no Roblox Studio, abre a aba certa e preenche cada campo com calma, falando em voz alta. Depois cada criança faz o mesmo no seu próprio jogo, escolhendo com carinho o nome, o ícone e a descrição. É uma aula de capricho, de orgulho e de borboletas na barriga, porque o jogo está quase, quase pronto para o mundo.`,
  materiais: [
    `Um computador por criança com o Roblox Studio já aberto no projeto do jogo dela (o professor confere antes da aula se cada jogo abre certinho e se a criança está logada na conta certa).`,
    `Projetor ou TV grande ligada ao computador do professor, para todos verem onde clicar na janela de configurações.`,
    `Um jogo de exemplo já configurado pelo professor (com nome legal, ícone e descrição prontos) para mostrar logo no começo como fica o resultado.`,
    `Imagens de ícone já prontas e salvas em cada computador (figuras coloridas e simples), para a criança que ainda não tem uma capa pronta poder escolher uma.`,
    `Folhas de "rascunho do jogo" impressas, com três quadradinhos para a criança planejar no papel o nome, desenhar o ícone e escrever a descrição antes de digitar.`,
    `Lápis de cor e canetinhas para o rascunho no papel.`,
    `Adesivos ou carimbos de "Jogo Pronto pro Mundo" para premiar quem deixar os três campos preenchidos.`,
  ],
  conceitosChave: [
    `Publicar — apertar o botão que manda o jogo para a internet, para outras pessoas conseguirem clicar e jogar de outros lugares.`,
    `Nome do jogo — o título curto e legal que aparece em cima do jogo, como o nome de um livro na capa.`,
    `Ícone — a figurinha colorida que aparece do ladinho do nome, igual a uma capa que dá vontade de abrir.`,
    `Descrição — um cartãozinho com duas ou três frases contando o que tem no jogo e o que o jogador precisa fazer.`,
    `Configurações (Game Settings) — a janela do Roblox Studio onde a gente arruma a "cara" do jogo: nome, ícone e descrição.`,
    `Salvar — guardar as mudanças que a gente fez, para nada se perder quando fechar o programa.`,
    `Público — quando o jogo fica liberado para qualquer pessoa entrar e jogar, e não só para a gente.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Você não precisa ser especialista em Roblox Studio para dar esta aula. Precisa só saber abrir uma janela e preencher três campos com calma. A janela que importa hoje chama-se "Game Settings" (Configurações do Jogo). Ela fica na aba "Home", na parte de cima do Roblox Studio: procure o botão "Game Settings", que tem um desenho de engrenagem. Um clique nele abre uma janelinha com várias abas do lado esquerdo.

Três abas dessa janela interessam à aula. Na aba "Basic Info" (Informações Básicas) ficam o campo "Name" (o nome do jogo) e o campo "Description" (a descrição). Também é nessa aba que você troca o ícone: procure a área "Game Icon" e clique para escolher uma imagem do computador. Na aba "Permissions" (ou "Access") há a opção de deixar o jogo "Public" (público) ou "Private" (privado); nesta aula a gente só mostra onde fica, sem necessariamente publicar de verdade ainda, porque o botão "Publicar" é o foco da próxima aula. Depois de mexer, sempre clique em "Save" (Salvar), no canto de baixo da janela.

Detalhe importante: para que o nome, o ícone e a descrição fiquem valendo de verdade na internet, o jogo precisa já ter sido salvo no Roblox (no menu File, em "Publish to Roblox"). Como muitos jogos da turma já foram salvos lá antes, em geral é só ajustar e salvar. Se o jogo de alguma criança ainda não tiver sido salvo no Roblox, deixe combinado que isso acontece na próxima aula, e hoje a criança preenche os campos mesmo assim, treinando.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Roblox Studio)

10 min, aquecimento e revisão: Mostre no projetor o jogo de exemplo já configurado, com nome bonito, ícone e descrição. Pergunte: "O que faz a gente ter vontade de clicar num jogo?". Relembre as aulas passadas de caça aos bugs. Diga que hoje a missão é deixar o jogo bem arrumado para sair pelo mundo.

15 min, conteúdo novo guiado: No seu computador, com a tela no projetor, vá na aba "Home" e clique em "Game Settings" (o botão de engrenagem). Mostre a janela que abre. Em "Basic Info", digite devagar um nome no campo "Name". Depois clique em "Game Icon" e escolha uma imagem. Por fim, escreva duas frasinhas no campo "Description". Aponte a opção "Public" na aba de permissões, só para mostrar. Clique em "Save". Diga cada passo em voz alta enquanto faz.

25 min, mão na massa: Primeiro entregue a folha de rascunho e dê uns minutos para cada criança planejar no papel o nome, desenhar o ícone e escrever a descrição. Depois, cada uma no seu computador, abre "Game Settings" e preenche os três campos do próprio jogo, copiando do rascunho. Passe nas mesas ajudando a achar o botão de engrenagem e a digitar. Lembre todos de clicar em "Save" no fim.

10 min, desafio e compartilhar: Lance o desafio "quem deixou os três campos prontos?". Peça que cada criança gire a tela e leia em voz alta o nome e a descrição do seu jogo. Comemore cada jogo arrumado e entregue o adesivo de "Jogo Pronto pro Mundo".

## Como explicar para crianças (analogias e linguagem)

Use a ideia do presente: "Publicar é dar o nosso jogo de presente para o mundo, e todo presente vai bem embrulhado". O nome é "o nome do presente, escrito grande para todo mundo ler". O ícone é "a capa, a figurinha que faz a gente querer abrir". A descrição é "o cartãozinho que conta o que tem dentro". Diga que o nome precisa ser curto, "do tamanho de um abraço", e fácil de falar. Fale pouco e mostre muito: faça você primeiro no projetor, devagar, e só depois peça que repitam no jogo deles.

## Erros comuns e como ajudar

Escolher um nome enorme ou difícil de ler: ajude a turma a cortar e deixar curtinho, contando as palavras nos dedos. Não achar o botão "Game Settings": aproxime-se, aponte a engrenagem na aba "Home" e guie o mouse junto. Esquecer de salvar: crie o bordão "arrumou, salvou!" e repita a cada mudança. Deixar a descrição vazia ou só com uma palavra: peça para responder "o que o jogador faz no seu jogo?" e transformar a resposta em frase. Querer publicar de verdade agora: explique com carinho que o botão mágico de publicar é a surpresa da próxima aula, e hoje a gente só deixa tudo lindo e pronto.`,
  exercicios: [
    {
      titulo: `Caça ao Botão da Engrenagem`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre primeiro no projetor onde fica a aba "Home" e o botão "Game Settings" com o desenho de engrenagem. Depois peça que cada criança ache e clique no botão no próprio computador. Passe nas mesas apontando com o dedo para quem não encontrar e ajude a abrir a janela.`,
      atividade: `Cada criança procura na aba "Home" do Roblox Studio o botão "Game Settings" (a engrenagem), clica nele e deixa a janela de configurações aberta na tela.`,
      gabarito: `Acerta quem consegue abrir a janela de configurações, com as abas (como "Basic Info") aparecendo do lado esquerdo. Se a janela abriu, está certo, mesmo que a criança tenha precisado de ajuda para achar a engrenagem.`,
    },
    {
      titulo: `O Nome Certo para o Meu Jogo`,
      tipo: `escrita/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue a folha de rascunho e explique que um bom nome é curto e fácil de falar. Dê exemplos no projetor ("Corrida das Estrelas", "Pula-Pula Maluco"). Peça que cada criança escreva ou dite três ideias de nome e depois escolha a favorita, circulando a melhor.`,
      atividade: `A criança escreve no papel três ideias de nome para o seu jogo e marca com um círculo a que mais gostou, lendo em voz alta para um coleguinha.`,
      gabarito: `Acerta quem escolhe um nome curto (mais ou menos de uma a quatro palavras) e que combina com o jogo. Qualquer nome curtinho e com sentido conta como certo; o capricho da letra não é o que importa.`,
    },
    {
      titulo: `Escolhendo a Capa (o Ícone)`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor a área "Game Icon" dentro de "Basic Info" e como clicar para escolher uma imagem do computador. Lembre que já há figuras coloridas salvas para quem não tiver uma pronta. Ajude cada criança a selecionar uma imagem e ver ela aparecer como ícone.`,
      atividade: `Cada criança abre a área "Game Icon" nas configurações, escolhe uma imagem colorida do computador e confirma para a figurinha virar o ícone do seu jogo.`,
      gabarito: `Acerta quem deixa uma imagem aparecendo no espaço do ícone do jogo. Se há uma figura escolhida no lugar do ícone, o exercício está concluído, qualquer que seja a imagem.`,
    },
    {
      titulo: `O Cartãozinho da Descrição`,
      tipo: `escrita na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Relembre que a descrição conta o que tem no jogo. Faça a turma responder oralmente "o que o jogador faz no seu jogo?" e transforme as respostas em frases. Depois guie cada criança a digitar duas ou três frasinhas no campo "Description" e a clicar em "Save".`,
      atividade: `A criança escreve no campo "Description" das configurações duas ou três frases curtas contando o que o jogador faz no jogo (por exemplo: "Pule nas plataformas e pegue as moedas. Cuidado com os monstros!") e salva.`,
      gabarito: `Acerta quem deixa pelo menos duas frases que contam alguma coisa sobre o jogo e clica em "Save". Se a descrição tem duas frasinhas com sentido e foi salva, está certo, mesmo com a ajuda do professor para digitar.`,
    },
    {
      titulo: `Desafio do Jogo Pronto pro Mundo`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha o desafio final: ter os três campos prontos ao mesmo tempo, nome, ícone e descrição, e tudo salvo. Use uma listinha no quadro com três quadradinhos para marcar. Ajude quem faltar um campo. Termine com cada criança girando a tela e lendo o nome e a descrição do seu jogo para a turma.`,
      atividade: `Cada criança confere se o seu jogo tem nome legal, ícone escolhido e descrição com duas ou três frases, clica em "Save" e apresenta o resultado à turma lendo o nome e a descrição em voz alta.`,
      gabarito: `Acerta quem mostra os três campos preenchidos (nome, ícone e descrição) e diz que clicou em "Save". Se dá para ver o nome, a figurinha do ícone e a descrição salvos, o desafio está completo.`,
    },
  ],
};
