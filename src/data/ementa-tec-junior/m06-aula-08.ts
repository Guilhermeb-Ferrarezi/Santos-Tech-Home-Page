import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Tudo pronto pro Construct! Exportando minha arte",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança aprende a juntar o personagem e todos os sprites do mês em uma coleção organizada e a salvá-los como imagens prontas para entrar no jogo.`,
  descricao: `Nesta última aula do mês, a turma faz uma grande arrumação. Durante quatro semanas, cada criança desenhou várias coisas no Aseprite: o primeiro quadrinho, o objeto 16x16, o herói com rosto e cores, e a galeria de itens do jogo. Agora chegou a hora de reunir tudo, conferir peça por peça e transformar esses desenhos em imagens que o computador entende, no formato PNG. É como esvaziar a mochila no fim de uma viagem e organizar tudo em uma caixa bonita.

Exportar é só uma palavra grande para "salvar como figura de verdade". O arquivo do Aseprite (que termina em .aseprite) é a caixa de trabalho, com camadas e quadros separados. Mas um jogo no Construct não abre essa caixa; ele só sabe ler figuras prontas, como PNG. Então o professor vai mostrar como o Aseprite "tira uma foto" de cada sprite e guarda essa foto em uma pasta. Aprender isso fecha a ponte entre desenhar a arte e usá-la de verdade no jogo, que será o próximo passo da trilha.

O foco do dia é organização e cuidado: dar nome claro para cada arquivo, salvar tudo na mesma pasta e conferir que nenhuma peça ficou para trás. No final, cada aluno terá uma pequena galeria de PNGs, sua coleção de arte completa, pronta para o mês que vem. É um momento de orgulho: a criança vê tudo o que criou reunido em um só lugar.

Esta aula encerra o Projeto do mês (parte 2 de 4): a arte está desenhada e exportada. Não vamos montar o jogo no Construct ainda; isso vem mais adiante. Hoje a missão é simples e poderosa: arrumar, nomear e exportar.`,
  materiais: [
    `Computadores com o Aseprite aberto e os arquivos das aulas anteriores já localizados (o primeiro quadrinho, o objeto 16x16, o herói e a galeria de itens).`,
    `Projetor ou TV ligada ao computador do professor, para todos verem onde clicar.`,
    `Uma pasta vazia já criada na área de trabalho de cada computador, com um nome combinado (por exemplo, "Minha-arte-do-jogo").`,
    `Arquivos de exemplo do professor: dois ou três sprites .aseprite simples para demonstrar a exportação ao vivo.`,
    `Fones ou som baixo para um efeito sonoro de "foto tirada" (opcional, deixa a exportação mais divertida).`,
    `Folhas de papel quadriculado grande e lápis de cor para a roda de desenho do desafio.`,
    `Adesivos ou carimbos para marcar a "galeria conferida" de cada aluno.`,
  ],
  conceitosChave: [
    `Exportar — é tirar uma foto do desenho e guardar como figura de verdade, que outros programas conseguem abrir.`,
    `PNG — um tipo de figura que o jogo entende; é a "foto" que sai do Aseprite com fundo transparente.`,
    `Arquivo .aseprite — a caixa de trabalho com as camadas e os quadros; serve para editar, mas o jogo não lê.`,
    `Pasta — a gavetinha do computador onde guardamos todas as figuras juntas para não perder nenhuma.`,
    `Nome do arquivo — a etiqueta que damos para cada figura (como "heroi" ou "moeda") para achar rápido depois.`,
    `Coleção (galeria) — todas as peças de arte reunidas no mesmo lugar, prontas para entrar no jogo.`,
    `Fundo transparente — quando o redor do desenho fica "vazio" (sem cor), o sprite encaixa bonito dentro do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Exportar significa transformar o trabalho do Aseprite em uma imagem comum (PNG) que outros programas, como o Construct, conseguem abrir. O arquivo .aseprite guarda camadas e quadros separados, ótimo para editar, mas o jogo não lê esse formato. Por isso "exportamos": o Aseprite junta tudo em uma figura única.

O PNG é o formato ideal porque mantém o fundo transparente. Transparente quer dizer que a área ao redor do desenho fica vazia, sem cor, então o sprite encaixa no jogo sem um quadrado branco em volta. Para garantir isso, o desenho não pode ter uma camada de fundo colorida cobrindo tudo.

Dois caminhos no Aseprite: o menu "File > Export Sprite As..." (Arquivo > Exportar como) salva uma imagem. Para abrir o menu File, clique na palavra "File" no canto superior esquerdo. Na janela de exportação, escolha a pasta, digite o nome, confirme que o tipo é ".png" e clique em "Export" (ou "Save"). Pronto: a foto está guardada.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: reúna a turma diante do projetor. Pergunte: "O que vocês criaram este mês?" Vá abrindo os arquivos de exemplo (File > Open) e celebrando cada um. Diga que hoje vamos guardar tudo em uma caixa de figuras.

15 min — Conteúdo novo guiado: com um sprite de exemplo aberto, mostre a diferença entre a caixa (.aseprite) e a foto (.png). Clique em "File" no canto superior esquerdo, depois em "Export Sprite As...". Na janela, mostre o botão de escolher pasta (aponte para a pasta "Minha-arte-do-jogo"), o campo do nome (digite "moeda"), o tipo ".png" e o botão "Export". Faça o som de "foto tirada". Abra a pasta e mostre a figura que apareceu.

25 min — Mão na massa: cada criança abre seus arquivos do mês, um por vez, e repete o passo: File > Export Sprite As, escolher a pasta combinada, dar um nome curtinho e claro (heroi, estrela, moeda, fruta), tipo .png, Export. Circule pela sala. Vá conferindo a pasta de cada aluno e marcando com adesivo cada peça salva. Incentive nomes simples e sem espaços.

10 min — Desafio + compartilhar: cada aluno abre sua pasta "Minha-arte-do-jogo" e mostra a galeria completa de PNGs para um colega. Conte quantas peças cada um conseguiu exportar. Feche com aplausos: a arte está pronta para o jogo.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de "tirar foto do desenho". Diga: "O Aseprite é nosso caderno de desenho. Mas o jogo não sabe ler caderno; ele só olha fotos. Então a gente tira uma foto de cada desenho e guarda na mesma gavetinha."

Para a pasta, fale "gavetinha" ou "caixa de figuras". Para o nome do arquivo, diga "a etiqueta do potinho": cada figura ganha uma etiqueta para a gente achar depois. Para o PNG transparente, explique: "O redor do desenho fica vazio, igual a um adesivo recortado, para encaixar certinho no jogo."

Comemore cada exportação com o barulho de "click" de câmera. Isso transforma um passo técnico em algo gostoso e memorável.

## Erros comuns e como ajudar

A criança salva na pasta errada e depois não acha a figura. Combine UMA pasta só desde o começo e confira junto. Outra: nomes com espaço ou bagunçados ("asdf"); peça nomes curtos, sem espaço, em letras minúsculas. Outra: salvar como .aseprite achando que exportou; reforce que precisa ser ".png" e que o caminho é Export, não só Save. Outra: sprite com fundo colorido cobrindo tudo, sem transparência; mostre como apagar a camada de fundo antes. Por fim, há quem esqueça uma peça: use a lista de adesivos para conferir que cada item do mês foi exportado.`,
  exercicios: [
    {
      titulo: `A grande arrumação da pasta`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre no projetor onde fica a pasta combinada "Minha-arte-do-jogo" na área de trabalho. Abra-a e mostre que ainda está vazia. Explique que vamos enchê-la de figuras hoje. Peça que cada aluno encontre e abra essa pasta no próprio computador.`,
      atividade: `Cada criança abre a pasta "Minha-arte-do-jogo" no computador, confere que ela existe e deixa essa janela aberta ao lado do Aseprite. Em seguida, abre no Aseprite o primeiro arquivo do mês que quiser exportar.`,
      gabarito: `Acertou quando a pasta "Minha-arte-do-jogo" está aberta na tela e um arquivo do Aseprite também está aberto, prontos lado a lado. Se a criança não achou a pasta, ajude a localizá-la na área de trabalho antes de seguir.`,
    },
    {
      titulo: `Caça à foto: caixa ou figura?`,
      tipo: `jogo`,
      tempo: `8 min`,
      guiaProfessor: `Faça um jogo rápido de "levanta a mão". Mostre no projetor ícones e nomes de arquivos terminando em .aseprite (a caixa) e em .png (a figura/foto). A turma decide qual é qual. Use gestos: mãos formando uma caixa para .aseprite, mãos formando uma moldura para .png.`,
      atividade: `O professor mostra um arquivo por vez. As crianças gritam "CAIXA!" se for .aseprite (serve para editar) ou "FOTO!" se for .png (serve para o jogo). Faça umas seis rodadas, misturando os dois.`,
      gabarito: `Acertou quem associa .aseprite a "caixa de trabalho" (não entra no jogo) e .png a "foto/figura" (entra no jogo). A turma demonstra entendimento quando responde a maioria das rodadas corretamente e explica que o jogo só lê as fotos.`,
    },
    {
      titulo: `Exportando meu primeiro sprite`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Conduza passo a passo no projetor e deixe a turma repetir junto. Diga em voz alta cada clique: "File... Export Sprite As... escolher a pasta... digitar o nome... tipo PNG... Export". Faça o som de câmera quando a figura aparecer. Circule conferindo.`,
      atividade: `Com um sprite aberto, cada aluno faz: clica em "File" (canto superior esquerdo), depois "Export Sprite As...", escolhe a pasta "Minha-arte-do-jogo", digita um nome curto (por exemplo, "heroi"), confirma o tipo ".png" e clica em "Export". Depois abre a pasta para ver a figura.`,
      gabarito: `Acertou quando aparece um arquivo .png com o nome escolhido dentro da pasta "Minha-arte-do-jogo". Confirme abrindo a pasta junto com a criança e vendo a miniatura da figura. Se salvou como .aseprite, refaça pelo caminho Export.`,
    },
    {
      titulo: `Planejando minha galeria no papel`,
      tipo: `desenho/papel`,
      tempo: `10 min`,
      guiaProfessor: `Entregue papel quadriculado e lápis de cor. Explique que vamos planejar a etiqueta de cada figura antes de exportar todas. Desenhe no quadro uma "lista de figuras" com quadradinhos e nomes. Peça calma e capricho nos nomes.`,
      atividade: `Cada criança desenha, em quadradinhos no papel, cada sprite do mês (herói, fruta, estrela, moeda, etc.) e escreve embaixo o nome curtinho que vai usar ao exportar cada um. Vale colorir as figuras.`,
      gabarito: `Acertou quando o papel tem um quadradinho para cada sprite do mês, cada um com um nome curto e claro (sem espaços, em minúsculas). A lista deve bater com os arquivos que a criança realmente tem para exportar. Nomes repetidos ou confusos devem ser ajustados.`,
    },
    {
      titulo: `Desafio: galeria completa, peça por peça`,
      tipo: `desafio + roda de conversa`,
      tempo: `15 min`,
      guiaProfessor: `Use a lista do papel como mapa. Desafie cada aluno a exportar TODAS as peças que faltam, marcando um adesivo a cada uma salva. No fim, faça uma roda: cada criança mostra a pasta cheia de PNGs e conta quantas peças exportou e qual é a sua preferida.`,
      atividade: `Seguindo a lista do papel, cada aluno exporta uma a uma as figuras que faltam (File > Export Sprite As > pasta > nome > PNG > Export) e cola um adesivo ao lado de cada nome conferido. Depois mostra a galeria completa para a turma e diz: "Exportei ___ figuras; minha favorita é ___."`,
      gabarito: `Acertou quando a pasta "Minha-arte-do-jogo" contém um PNG para cada item da lista do papel e todos os adesivos foram colados. A galeria está completa e organizada. Se faltar alguma peça, a lista mostra exatamente qual exportar antes de encerrar.`,
    },
  ],
};
