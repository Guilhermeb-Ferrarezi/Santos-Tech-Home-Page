import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Encaixando o cenário",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprofundar o tileset criando bordas e cantos que se encaixam sem emendas feias para montar um pedaço de mapa e salvar o tileset simples do jogo.`,
  descricao: `Na aula passada as crianças começaram a fazer as peças de cenário em pixels (os tiles). Hoje a gente dá o passo mais importante: fazer essas peças se ENCAIXAREM de verdade. Um tile sozinho é bonitinho, mas quando colocamos vários lado a lado aparecem aquelas "linhas feias" no meio, como se o desenho estivesse quebrado. O nosso trabalho de hoje é apagar essas emendas e fazer o cenário parecer um pedaço de mapa inteiro e contínuo.

Para isso, vamos ensinar três tipos de peça que todo cenário precisa: o tile do MEIO (o chão por dentro, igual em todos os lados), o tile de BORDA (a parte de cima, de baixo e dos lados, onde o chão encontra o céu ou a água) e o tile de CANTO (onde duas bordas se encontram, fazendo a "quina"). Quando essas peças combinam, a gente consegue montar uma ilha, uma plataforma ou um caminho de qualquer tamanho usando poucas peças repetidas.

A grande estrela da aula é o recurso de espelho e a ideia de "lado que combina": a borda esquerda tem que ser o espelho da borda direita, senão não encaixa. Vamos demonstrar tudo no projetor, juntando as peças ao vivo na tela para as crianças VEREM a emenda sumir. É um momento muito divertido, porque parece mágica quando a linha some.

No fim, cada criança vai ter um conjunto pequeno de tiles que se encaixam (meio, borda e canto) e vai salvar esse tileset organizado, pronto para virar o cenário do jogo do ano nas próximas aulas. O foco é encaixe e organização, não quantidade de peças.`,
  materiais: [
    `Computadores com o Aseprite já aberto, um por criança`,
    `Projetor ou TV grande ligada no computador do professor para demonstrar`,
    `Arquivo de exemplo pronto: um tileset com meio, borda e canto que se encaixam bem`,
    `Arquivo de exemplo "errado": tiles com emendas feias, para mostrar o problema`,
    `Folha impressa com um quadradão dividido em 9 partes (meio, 4 bordas, 4 cantos) para planejar no lápis`,
    `Grade (Grid) e Pixel-Perfect já configurados no Aseprite das crianças`,
    `Crachás ou adesivos coloridos para marcar quem termina o desafio`,
  ],
  conceitosChave: [
    `Tile — um quadradinho de desenho que a gente repete várias vezes para montar o cenário, como uma peça de lego.`,
    `Tileset — a caixinha onde guardamos todas as peças do cenário juntas e organizadas.`,
    `Encaixe — quando duas peças ficam lado a lado e o desenho continua sem nenhuma linha feia no meio.`,
    `Emenda — aquela risquinha feia que aparece quando duas peças não combinam direito.`,
    `Borda — a peça da beiradinha, onde o chão termina e encontra o céu, a água ou o vazio.`,
    `Canto — a peça da quina, onde duas bordas se encontram e fazem a dobra.`,
    `Espelhar — virar o desenho ao contrário, como no espelho, para a borda da esquerda combinar com a da direita.`,
  ],
  treinamento: `## O que o professor precisa saber

Um tileset é um conjunto de quadradinhos (tiles) do mesmo tamanho, por exemplo 16x16 pixels, que a gente repete para montar um cenário grande sem desenhar tudo de novo. O segredo do encaixe é simples: a borda direita de um tile precisa "casar" com a borda esquerda do tile vizinho. Se as cores e as linhas baterem nos pixels da beirada, a emenda desaparece e parece um desenho só.

Hoje você vai trabalhar três peças básicas: MEIO (interior do chão, sem beirada), BORDA (cima, baixo, esquerda, direita) e CANTO (as quatro quinas). Com essas peças dá para montar qualquer ilha. Um truque que economiza tempo: desenhe só a borda de cima e o canto de cima-esquerda; as outras você cria espelhando, com Edit > Flip Horizontal e Edit > Flip Vertical. Antes da aula, deixe a grade ligada em View > Grid > Grid Settings (16x16) e o Pixel-Perfect ligado no lápis. Tenha aberto o exemplo "certo" e o exemplo "errado".

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Mostre no projetor o exemplo "errado" com emendas feias e pergunte: "Tá vendo essas linhas no meio? Por que será que ficou quebrado?". Deixe as crianças apontarem. Depois mostre o exemplo "certo", lado a lado, e diga que hoje vamos aprender o segredo para a linha sumir.

15 min - Conteúdo novo guiado: No seu Aseprite, com a grade ligada, desenhe um tile de MEIO (chão cheio, igual em todo lugar). Use o lápis (tecla B) e a borracha (tecla E). Crie um novo frame ou um novo quadrado ao lado para a BORDA DE CIMA: desenhe a beiradinha (grama em cima, terra embaixo). Agora o ponto mais importante: ative View > Grid e cole o tile de meio ao lado da borda para mostrar que os pixels da divisa precisam combinar. Para criar a borda de baixo, selecione a de cima com a ferramenta de seleção (tecla M), copie (Ctrl+C), cole (Ctrl+V) e use Edit > Flip Vertical para virar de cabeça para baixo. Faça o mesmo com Flip Horizontal para os lados. Para o CANTO, junte o que tem da borda de cima e da borda da esquerda numa quina só.

25 min - Mão na massa: Cada criança desenha seu tile de meio, depois a borda de cima e o canto de cima-esquerda. Em seguida usa Flip Horizontal e Flip Vertical para gerar as outras bordas e cantos. Quando tiverem as peças, peça que abram um espaço maior e juntem as peças na tela (copiar e colar lado a lado) para formar um pedacinho de mapa: cantos nas quinas, bordas nos lados, meio no recheio. Circule pela sala verificando os encaixes. No fim, todos salvam com Ctrl+S, com nome claro, por exemplo "tileset-chao".

10 min - Desafio e compartilhar: Desafie quem terminou a montar uma ilha de 3x3 peças completa, com os 4 cantos certos. Depois, cada criança mostra seu pedaço de mapa no projetor e a turma procura junto se sobrou alguma emenda feia.

## Como explicar para crianças

Use a analogia do lego e do quebra-cabeça: "Cada peça tem que combinar com a peça do lado, igual quebra-cabeça. Se a pontinha não bate, fica aquela linha feia." Para o espelhar, peça que olhem a própria mão no espelho: "A borda da esquerda é o espelho da borda da direita, viradinha." Chame o meio de "recheio", a borda de "beiradinha" e o canto de "quininha". Repita sempre: "Os pixels da divisa têm que ser iguais nas duas peças."

## Erros comuns e como ajudar

O erro mais comum é a criança mudar o desenho na divisa, então a borda de uma peça não bate com a outra: peça que olhem só a coluninha de pixels da beirada e deixem ela igual nas duas. Outro erro é esquecer de ligar a grade e desenhar fora do quadrado certo, deixando o tile com tamanho errado; confira View > Grid e o tamanho 16x16. Algumas crianças desenham todas as bordas na mão e perdem tempo; lembre-as de usar Flip Horizontal e Flip Vertical. Há quem misture o tile de meio com cor diferente do interior da borda, criando uma emenda de cor; oriente a usar a mesma cor de terra nos dois. Por fim, alguém vai esquecer de salvar: termine sempre reforçando o Ctrl+S com nome organizado.`,
  exercicios: [
    {
      titulo: `Caça à emenda feia`,
      tipo: `Observação e discussão`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor dois pedaços de cenário, um com tiles que encaixam e outro com emendas feias. Peça que as crianças apontem onde está a "linha feia". Aceite que apontem com o dedo na tela ou no ar.`,
      atividade: `Olhe as duas imagens de cenário na tela. Aponte onde aparece a linha feia (a emenda) e diga qual dos dois cenários está bem encaixado.`,
      gabarito: `O cenário bem encaixado é aquele em que o desenho continua sem linhas no meio das peças. A emenda feia é a risquinha que aparece na divisa entre dois tiles quando os pixels da beirada não combinam. As crianças devem apontar essa risquinha no exemplo "errado".`,
    },
    {
      titulo: `Meu tile do meio (recheio)`,
      tipo: `Prática guiada no Aseprite`,
      tempo: `8 minutos`,
      guiaProfessor: `Confirme que a grade (View > Grid) está ligada e o tamanho é 16x16. Acompanhe para que cada criança preencha o quadradinho inteiro com a cor do chão usando o lápis (tecla B).`,
      atividade: `No seu quadradinho com a grade ligada, pinte o chão inteiro com a mesma cor para fazer o tile do meio. Ele deve ficar igual em todos os cantos, sem beiradinha.`,
      gabarito: `O tile do meio fica totalmente preenchido com a cor do chão, sem nenhuma borda ou linha diferente. Por ser o "recheio", ele precisa ser igual em todos os lados para encaixar com qualquer peça vizinha.`,
    },
    {
      titulo: `A beiradinha de cima`,
      tipo: `Prática guiada no Aseprite`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre como desenhar a borda de cima (grama ou beirada em cima, terra embaixo). Reforce que a parte de baixo da borda deve ter a mesma cor do tile do meio, para encaixar. Use lápis (B) e borracha (E).`,
      atividade: `Desenhe a borda de cima: faça a beiradinha lá em cima e deixe o resto do quadrado com a cor do chão, igual ao tile do meio. Depois encoste o tile do meio embaixo dela e veja se encaixa.`,
      gabarito: `A borda de cima tem a beirada (grama/topo) na parte de cima e o restante com a mesma cor do tile do meio. Ao encostar o meio embaixo, a divisa deve ficar sem emenda, porque as cores da beirada de baixo da borda batem com o topo do meio.`,
    },
    {
      titulo: `Espelhando as outras bordas`,
      tipo: `Desafio técnico no Aseprite`,
      tempo: `9 minutos`,
      guiaProfessor: `Ensine a selecionar a borda de cima (tecla M), copiar (Ctrl+C), colar (Ctrl+V) e usar Edit > Flip Vertical para a borda de baixo e Edit > Flip Horizontal para os lados. Verifique se entenderam que espelhar vira o desenho ao contrário.`,
      atividade: `Use a borda de cima que você já fez. Copie ela e use Flip Vertical para criar a borda de baixo. Depois use Flip Horizontal para criar as bordas dos lados. Agora você tem as quatro bordas.`,
      gabarito: `A borda de baixo é a de cima virada de cabeça para baixo (Flip Vertical); as bordas dos lados saem espelhando com Flip Horizontal. Espelhar garante que a borda da esquerda combine com a da direita, então as quatro bordas encaixam ao redor do meio.`,
    },
    {
      titulo: `Montando a ilha 3x3 e salvando`,
      tipo: `Projeto e desafio final`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que juntem as peças num quadrado 3x3: 4 cantos nas quinas, 4 bordas nos lados e 1 meio no centro. Ajude a copiar e colar lado a lado com a grade ligada. No final, todos salvam com Ctrl+S e nome claro, por exemplo "tileset-chao".`,
      atividade: `Monte um pedaço de mapa de 3 por 3 peças: ponha os cantos nas quinas, as bordas nos lados e o tile do meio no centro. Confira se não sobrou nenhuma emenda feia. Depois salve seu tileset com um nome organizado.`,
      gabarito: `A ilha 3x3 correta tem os 4 cantos nas quinas, as 4 bordas nos lados (cima, baixo, esquerda, direita) e o tile do meio no centro, tudo encaixando sem emendas. O arquivo deve ser salvo com Ctrl+S e um nome claro como "tileset-chao", deixando o tileset simples pronto para o jogo.`,
    },
  ],
};
