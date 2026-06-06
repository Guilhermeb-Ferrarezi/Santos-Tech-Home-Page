import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Sprites no Quadro 16x16",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Entender o que é um sprite e por que o quadro 16x16 é tão usado em jogos 2D, criando um canvas 16x16 no Aseprite e desenhando o primeiro item de jogo dentro da grade.`,
  descricao: `Nesta aula os alunos descobrem a peça mais importante de um jogo 2D feito em pixel art: o sprite. Um sprite é uma pequena imagem que representa um elemento do jogo, como um personagem, um inimigo ou um item que o jogador coleta. Até agora a turma conheceu o Aseprite e suas ferramentas; agora vamos colocar tudo dentro de um espaço bem específico e cheio de regras divertidas: o quadro de 16 por 16 pixels.

O tamanho 16x16 não é por acaso. Ele aparece em centenas de jogos clássicos e atuais porque cabe bem na tela, é fácil de animar e obriga o artista a desenhar de forma econômica. São apenas 256 pixels no total, então cada pontinho conta muito. Diferente de desenhar numa folha grande, aqui não dá para colocar todos os detalhes que imaginamos; precisamos escolher o que realmente importa para que o item seja reconhecido num piscar de olhos.

Os alunos vão aprender, na prática, a criar um novo arquivo com exatamente 16x16 pixels, ativar a grade e o zoom para enxergar cada quadradinho, e então desenhar seu primeiro item de jogo: uma moeda, uma chave ou uma poção. O desafio é fazer com que o colega consiga adivinhar qual é o item olhando de longe, mesmo com tão pouco espaço. É aqui que eles começam a pensar como artistas de jogos de verdade.

Esta aula prepara o terreno para o restante do mês. Quando entendermos o limite do quadro 16x16, as próximas aulas sobre forma, volume e paleta de cores ficam muito mais fáceis, porque o aluno já saberá respeitar o espaço e valorizar cada pixel. O entregável do mês é um conjunto de sprites para o jogo, e os itens criados hoje podem ser os primeiros desse conjunto.`,
  materiais: [
    `Computadores com o Aseprite instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a tela do Aseprite`,
    `Arquivo de exemplo com sprites 16x16 prontos (moeda, chave e poção) para mostrar`,
    `Imagem ampliada de sprites clássicos de jogos 16x16 para inspiração visual`,
    `Folha de papel quadriculado e lápis como apoio para esboçar antes de desenhar`,
    `Mouse comum por aluno (facilita clicar pixel a pixel mais do que o touchpad)`,
  ],
  conceitosChave: [
    `Sprite — pequena imagem que representa um elemento do jogo, como um personagem, um inimigo ou um item.`,
    `Pixel — o menor pontinho quadrado de uma imagem digital; em pixel art cada pixel é colocado com intenção.`,
    `Canvas — a área de desenho do arquivo no Aseprite, definida em largura por altura de pixels.`,
    `Quadro 16x16 — tamanho de canvas com 16 pixels de largura por 16 de altura, muito comum em itens de jogos 2D.`,
    `Resolução — quantidade de pixels que formam a imagem; quanto menor, menos espaço para detalhes.`,
    `Grade (grid) — linhas que mostram a divisão dos pixels na tela, ajudando a desenhar com precisão.`,
    `Legibilidade — qualidade de um sprite ser reconhecido com facilidade, mesmo pequeno e visto de longe.`,
  ],
  treinamento: `## O que o professor precisa saber

Um sprite 16x16 tem só 256 pixels, então o segredo é a economia: cada pixel precisa ter um motivo para estar ali. Antes da aula, abra o Aseprite e treine o caminho do menu "File" (Arquivo) e a opção "New..." (Novo), onde você define largura 16 e altura 16. Memorize três atalhos que vai usar o tempo todo: a tecla "B" para o Lápis (Pencil), a tecla "I" para o conta-gotas (Eyedropper) e o sinal "+" para aproximar o zoom. Aproxime bastante o canvas (zoom de 800% ou mais) e ative a grade no menu "View" (Visualizar) em "Grid" (Grade), marcando "Show Grid" (Mostrar Grade). Faça um teste em casa desenhando uma moeda simples para não descobrir os botões na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Recapitule a aula anterior perguntando quais ferramentas eles já conhecem. Mostre no projetor a imagem de sprites clássicos 16x16 e pergunte: "como o artista mostrou tanta coisa com tão pouco espaço?". Apresente a palavra "sprite" e diga que hoje cada um vai criar o seu.

15 min — Conteúdo novo guiado: No projetor, vá em "File" e depois "New...". Digite 16 em "Width" (Largura) e 16 em "Height" (Altura), confirme em "OK". Aproxime com o zoom (tecla "+") até ver os quadradinhos. Ative "View" e "Grid" e "Show Grid". Selecione o Lápis (tecla "B") e desenhe, pixel a pixel, uma moeda redonda simples na frente da turma, falando em voz alta cada escolha. Mostre que a borracha (tecla "E") apaga e que o conta-gotas (tecla "I") copia uma cor existente.

25 min — Mão na massa: Cada aluno cria o próprio arquivo 16x16 pelo caminho "File" e "New...". Ativam a grade, aproximam o zoom e escolhem UM item para desenhar: moeda, chave ou poção. Desenham pixel a pixel com o Lápis. Circule pela sala conferindo se o canvas está mesmo em 16x16 e se a grade está ativa. Incentive a começar pela forma geral antes dos detalhes.

10 min — Desafio e compartilhar: Lance o desafio "o colega adivinha?". Em duplas, cada um mostra o sprite e o outro tenta adivinhar o item sem dicas. Feche reforçando que um bom sprite é reconhecido rápido, mesmo pequenininho.

## Como explicar de forma clara (linguagem para a idade)

Compare o quadro 16x16 com uma caixinha de Lego pequena: "você só tem essas peças, então escolha bem onde coloca cada uma". Diga que cada pixel é como um azulejo numa parede minúscula: poucos azulejos, então nada de desperdício. Explique a legibilidade com um teste prático: "se eu vejo de longe e entendo na hora o que é, o sprite está bom". Use a ideia de "esqueleto primeiro, enfeites depois": primeiro a forma redonda da moeda, só então o brilho e o detalhe. Repita a frase-chave da aula: "aqui cada pixel conta".

## Erros comuns e como ajudar

O erro mais comum é criar o canvas no tamanho errado; muitos esquecem de trocar os valores e ficam com um arquivo grande. Mostre como conferir o tamanho na barra de título e oriente a refazer em "File" e "New..." com 16 e 16. Outro erro é desenhar sem zoom, clicando errado e se frustrando; insista no zoom alto e na grade ativa. Muitos tentam colocar detalhes demais e o item vira uma bolinha confusa; lembre-os de começar pela silhueta e deixar enfeites por último. Alguns usam o pincel grande ou outra ferramenta sem querer; mostre que o Lápis (tecla "B") pinta um pixel por vez. Por fim, há quem desenhe encostado nas bordas e perca espaço para a sombra; sugira deixar uma margem de um ou dois pixels em volta.`,
  exercicios: [
    {
      titulo: `Criando o quadro certo`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe pela sala conferindo se cada arquivo está mesmo em 16x16 e se a grade aparece. Aponte para a barra de título de quem errar o tamanho e peça para refazer com calma.`,
      atividade: `No Aseprite, vá em "File" e depois "New...". Digite 16 em "Width" (Largura) e 16 em "Height" (Altura) e clique em "OK". Aproxime o zoom com a tecla "+" até ver os quadradinhos e ative a grade em "View", "Grid", "Show Grid".`,
      gabarito: `O caminho correto é "File" e "New...", com Width 16 e Height 16, confirmando em "OK". A grade é ativada em "View" e "Grid" e "Show Grid". Ao final o aluno deve ter um canvas quadrado de 16x16 com a grade visível e bom zoom para enxergar cada pixel.`,
    },
    {
      titulo: `Minha primeira moeda`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Garanta que usem o Lápis (tecla "B") e desenhem pixel a pixel. Incentive começar pela forma redonda antes do brilho. Lembre da margem para não encostar nas bordas.`,
      atividade: `No seu canvas 16x16, desenhe uma moeda usando o Lápis (tecla "B"). Comece pela forma redonda no centro, deixando uma margem de um pixel nas bordas. Depois acrescente um pequeno brilho com uma cor mais clara.`,
      gabarito: `Uma boa moeda 16x16 tem silhueta redonda centralizada, com margem de um a dois pixels, feita pixel a pixel com o Lápis. O brilho é um ou dois pixels de cor mais clara num canto superior. O importante é a forma ser reconhecida como moeda, não a quantidade de detalhes.`,
    },
    {
      titulo: `Adivinhe o item do colega`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas e oriente que cada um desenhe sem mostrar antes. O teste de adivinhação revela a legibilidade. Valorize quem fez um item reconhecível em vez do mais detalhado.`,
      atividade: `Em dupla, cada um escolhe em segredo um item (moeda, chave ou poção) e desenha no seu canvas 16x16. Ao final, mostre a tela ao colega e deixe ele adivinhar qual é o item, sem dar dicas. Anotem se ele acertou de primeira.`,
      gabarito: `O sucesso é o colega adivinhar o item rapidamente, o que prova boa legibilidade. Chave costuma ter um círculo com uma haste e dentes; poção tem um frasco com líquido; moeda é redonda com brilho. Se o colega não acerta, o sprite precisa de uma silhueta mais clara, não de mais detalhes.`,
    },
    {
      titulo: `Por que 16x16?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza com perguntas, sem entregar a resposta pronta. Anote no quadro as vantagens que surgirem. Ligue cada ideia à experiência prática que eles acabaram de viver.`,
      atividade: `Em roda, cada aluno responde em voz alta a uma destas perguntas: "Por que tantos jogos usam sprites 16x16?", "O que foi difícil por causa do espaço pequeno?" e "Por que cada pixel conta tanto aqui?". Tentem não repetir o colega.`,
      gabarito: `Respostas válidas citam que 16x16 cabe bem na tela, é leve, fácil de animar e obriga a desenhar de forma econômica. O espaço pequeno dificulta colocar detalhes, então cada pixel precisa de um motivo. A ideia central é que a limitação do quadro ajuda a focar na forma essencial do item.`,
    },
    {
      titulo: `Trio de itens do meu jogo`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça três itens reconhecíveis, não perfeitos. Avalie se cada sprite respeita o canvas 16x16, usa margem e tem silhueta clara. Aceite estilos diferentes desde que o item seja identificável.`,
      atividade: `Crie três arquivos 16x16, um para cada item: moeda, chave e poção. Desenhe os três com o Lápis, começando pela silhueta e deixando margem nas bordas. No fim, observe os três juntos e escreva uma frase dizendo qual ficou mais fácil de reconhecer e por quê.`,
      gabarito: `Os três sprites devem estar em canvas 16x16, com silhuetas claras e margem nas bordas: moeda redonda com brilho, chave com haste e dentes, poção em formato de frasco com líquido. A frase final deve ligar a facilidade de reconhecimento à clareza da silhueta, mostrando que o aluno entendeu a importância da legibilidade.`,
    },
  ],
};
