import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Peças de cenário em pixels",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança entende o que é um tileset e desenha suas primeiras peças de cenário — grama, terra e bloco sólido — todas no mesmo tamanho de quadradinho.`,
  descricao: `Nas aulas anteriores a turma já criou o herói do jogo e deu cor e detalhes a ele. Agora começa uma nova missão: construir o mundo onde esse herói vai viver. Mas em vez de desenhar um cenário gigante de uma vez só, as crianças vão descobrir um segredo dos criadores de jogos: o cenário é montado com pecinhas pequenas e repetidas, como peças de LEGO ou ladrilhos de uma parede.

O assunto central desta aula é a ideia de tileset (lê-se "táil-set"). Um tileset é uma coleção de quadradinhos do mesmo tamanho que se encaixam lado a lado para formar o chão, as montanhas e as paredes do jogo. Cada quadradinho é um "tile" (lê-se "táil"), que quer dizer "ladrilho" em inglês. A grande sacada é que, com pouquíssimos quadradinhos, dá para montar cenários enormes, só repetindo as peças. Um único tile de grama, copiado muitas vezes, vira um campo inteiro.

Na prática, cada aluno vai abrir o Aseprite, criar uma tela pequena no tamanho certo de um tile (vamos usar 16x16 pixels) e desenhar três peças básicas: um quadradinho de grama (verde), um de terra (marrom) e um de bloco sólido (cinza, tipo pedra ou tijolo). O foco é que todas as peças tenham exatamente o mesmo tamanho, para que mais tarde elas se encaixem perfeitas, sem buracos nem sobras.

Esta aula prepara o terreno para a aula seguinte, em que as crianças vão encaixar essas peças e ver o cenário ganhar vida. Por enquanto, o objetivo é entender que o mundo do jogo nasce de quadradinhos iguais e produzir as três primeiras peças com capricho e tamanho certinho.`,
  materiais: [
    `Um computador por criança com o Aseprite já aberto e a tela inicial à mostra, pronto para criar um arquivo novo.`,
    `Projetor ou TV grande ligada ao computador do professor para demonstrar cada passo bem devagar, com o zoom bem alto para todos verem os pixels.`,
    `Arquivo de exemplo "tiles_prontos.aseprite" salvo na pasta da aula, mostrando uma grama, uma terra e um bloco já desenhados em 16x16, para inspirar a turma.`,
    `Uma imagem grande impressa (ou no projetor) de um cenário de jogo simples montado com tiles repetidos, para mostrar a mágica do encaixe.`,
    `Folhas de papel quadriculado (grade de quadradinhos) e lápis de cor verde, marrom e cinza para o planejamento no papel.`,
    `Cartelas de azulejo, ladrilho de papelão ou peças de LEGO de uma cor só, para a criança encaixar com as mãos antes do computador.`,
    `Adesivos ou estrelinhas para premiar quem terminar e compartilhar suas três peças no final.`,
  ],
  conceitosChave: [
    `Tile — um quadradinho pequeno do cenário, como um ladrilho ou uma peça de montar do mundo do jogo.`,
    `Tileset — a caixinha com todas as peças do cenário juntas: a grama, a terra, o bloco e outras que virão.`,
    `Cenário — o mundo onde o herói anda: o chão, as paredes e o céu, tudo montado com tiles.`,
    `Encaixar — colocar uma peça do lado da outra sem deixar buraco nem sobra, porque todas têm o mesmo tamanho.`,
    `Mesmo tamanho — regra de ouro: toda peça precisa ter a mesma quantidade de quadradinhos (16x16) para encaixar direitinho.`,
    `Repetir — copiar a mesma peça muitas vezes para preencher um espaço grande, como carimbar um carimbo.`,
    `Bloco sólido — a peça dura por onde o herói não passa, tipo pedra ou tijolo, que faz parede ou degrau.`,
  ],
  treinamento: `## O que o professor precisa saber

Um tileset é a base de quase todo jogo 2D de cenário. Em vez de desenhar um mapa inteiro, o artista cria poucos quadradinhos (os tiles) e o jogo os repete para montar mundos enormes. A regra mais importante é que todos os tiles tenham exatamente as mesmas dimensões. Nesta aula usamos 16x16 pixels, um tamanho clássico e fácil de enxergar.

No Aseprite, para criar a tela do tile você vai em "File" (menu no canto superior esquerdo), depois "New...". Na janelinha que abre, digite 16 no campo "Width" (largura) e 16 no campo "Height" (altura), deixe o fundo em "Transparent" e clique em "OK". Como a tela é minúscula, use o zoom: a tecla "+" aumenta e a "-" diminui, ou role o botão do meio do mouse. Deixe bem grande para as crianças verem cada pixel. As ferramentas ficam na barra da esquerda: o lápis (tecla B) para pintar e a borracha (tecla E) para apagar. As cores ficam na paleta, no canto direito.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Aseprite)

Aquecimento (10 min): receba a turma e abra no projetor a imagem do cenário montado com tiles. Pergunte: "Vocês reparam que o chão é a mesma pecinha repetida?". Mostre o arquivo "tiles_prontos.aseprite" com grama, terra e bloco. Relembre que nas aulas passadas fizemos o herói; hoje vamos fazer o chão onde ele anda.

Conteúdo novo guiado (15 min): no seu computador, no projetor, demonstre devagar. Clique em "File", depois "New...", digite 16 em "Width" e 16 em "Height" e clique "OK". Aumente o zoom com a tecla "+" até os pixels ficarem grandes. Pegue o lápis (tecla B), escolha o verde na paleta e pinte a tela toda de verde para fazer a grama. Por cima, faça uns pontinhos verde-escuro para parecer mato. Salve com "File", "Save As" e o nome "grama". Mostre que terra e bloco serão iguais em tamanho, só mudando a cor.

Mão na massa (25 min): cada criança no seu computador cria três telas de 16x16, uma de cada vez (File, New, 16 e 16, OK). Na primeira, pinta a grama de verde com uns detalhes. Na segunda, pinta a terra de marrom com pontinhos mais escuros. Na terceira, pinta o bloco sólido de cinza, fazendo linhas para parecer tijolos ou pedra. Cada peça deve ser salva com seu nome (grama, terra, bloco). Circule pela sala, conferindo se todos usaram 16x16 e ajudando um por um.

Desafio e compartilhar (10 min): proponha o desafio "Faça uma quarta peça que combine com as outras" (areia, água ou caminho). Depois faça uma volta rápida: cada criança gira a cadeira e mostra suas três (ou quatro) peças, dizendo qual é qual. Dê uma estrelinha para cada um.

## Como explicar para crianças

Comece com a mágica do encaixe usando as mãos: dê os ladrilhos de papelão ou as peças de LEGO e mostre que, juntando peças iguais, dá para cobrir a mesa inteira. Diga a frase-chave: "O cenário do jogo é feito de quadradinhos que se repetem". Compare com o piso da sala, com a parede de azulejos do banheiro ou com uma colcha de retalhos.

Chame o tile de "pecinha do cenário" e o tileset de "caixinha de peças". Sobre o tamanho igual, use a analogia: "Se uma peça for maior que a outra, elas não encaixam, igual quando a tampa não serve no pote". Mostre que verde vira grama, marrom vira terra e cinza vira pedra. Lembre que não precisa ficar perfeito, precisa ter o tamanho certo.

## Erros comuns e como ajudar

O erro mais comum é criar a tela no tamanho errado (por exemplo, 32x32 ou um número estranho). Confira na criação e, se preciso, peça para refazer com 16 e 16. Outro erro é pintar pixel por pixel e cansar; ensine que dá para preencher rápido com a ferramenta balde (tecla G) clicando na tela. Algumas crianças apagam sem querer com a borracha; mostre o "Ctrl+Z" para desfazer. Há quem queira deixar a grama cheia de detalhes e travar; lembre que poucos pontinhos já bastam. Por fim, alguém pode esquecer de salvar; passe na mesa garantindo que cada peça foi salva com o nome certo antes de começar a próxima.`,
  exercicios: [
    {
      titulo: `A mágica do encaixe`,
      tipo: `mão na massa com material físico`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda e distribua os ladrilhos de papelão ou peças de LEGO de uma cor só. Peça que encaixem as peças para cobrir um pedaço da mesa, sem deixar buraco. O objetivo é a criança sentir, com as mãos, que peças do mesmo tamanho se juntam para formar uma superfície grande.`,
      atividade: `Junte as pecinhas iguais lado a lado até cobrir um quadrado grande na mesa, sem deixar nenhum espaço vazio entre elas. Depois conte quantas peças você usou.`,
      gabarito: `Acertou quem encaixa as peças sem buracos e percebe que todas têm o mesmo tamanho. Espera-se a conclusão, com palavras simples, de que "muitas peças iguais formam um chão grande" — é exatamente assim que o cenário do jogo é montado.`,
    },
    {
      titulo: `Pintando no papel quadriculado`,
      tipo: `desenho no papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue as folhas de papel quadriculado e os lápis verde, marrom e cinza. Peça que cada criança escolha um quadrado da grade e o pinte de verde (grama), outro de marrom (terra) e outro de cinza (bloco). Esse planejamento no papel ajuda a entender o tamanho fixo antes de ir ao computador.`,
      atividade: `Na folha quadriculada, pinte um quadrado inteiro de verde para ser a grama, um de marrom para ser a terra e um de cinza para ser o bloco. Tente deixar os três do mesmo tamanho.`,
      gabarito: `Acertou quem pinta as três peças ocupando quadrados do mesmo tamanho, com as cores certas: grama verde, terra marrom e bloco cinza. O importante é respeitar o tamanho igual, mesmo que a pintura não fique perfeita.`,
    },
    {
      titulo: `Minha primeira grama 16x16`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor e deixe a turma fazer. Oriente: "File", "New...", digite 16 em "Width" e 16 em "Height", "OK". Aumente o zoom com "+". Lembre da tecla B (lápis) e do balde (tecla G) para preencher rápido. Confira mesa por mesa se a tela ficou em 16x16 antes de pintarem.`,
      atividade: `No Aseprite, crie uma tela de 16x16 pixels. Pinte tudo de verde para ser a grama e faça uns pontinhos verde-escuro por cima, como folhinhas de mato. Salve com o nome "grama".`,
      gabarito: `A peça deve ser uma tela de 16x16 pintada de verde com alguns detalhes mais escuros, salva com o nome "grama". Acertou quem usou o tamanho certo (16x16) e conseguiu preencher a tela de verde com a ferramenta lápis ou balde.`,
    },
    {
      titulo: `Terra e bloco do mesmo tamanho`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora a criança repete o processo para mais duas peças, reforçando a regra do tamanho igual. Lembre que cada nova peça começa com File, New, 16 e 16, OK. Incentive a terra marrom com pontinhos escuros e o bloco cinza com linhas que pareçam tijolos. Ajude quem se perde na criação de telas novas.`,
      atividade: `Crie duas novas telas de 16x16. Em uma, pinte de marrom para ser a terra, com pontinhos mais escuros. Na outra, pinte de cinza e faça linhas para parecer tijolos ou pedra, que será o bloco sólido. Salve cada uma com seu nome: "terra" e "bloco".`,
      gabarito: `Espera-se duas telas de 16x16: uma terra marrom com detalhes escuros e um bloco cinza com linhas de tijolo, salvas como "terra" e "bloco". Acertou quem manteve o mesmo tamanho das três peças (16x16), garantindo que elas vão encaixar depois.`,
    },
    {
      titulo: `Desafio: a quarta peça que combina`,
      tipo: `desafio e compartilhar`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o ponto alto. Peça que cada criança invente uma quarta peça de 16x16 que combine com as três anteriores: areia (amarelo), água (azul) ou caminho de pedrinhas (cinza claro). Depois conduza a rodada de compartilhamento: cada um mostra as peças e diz qual é qual. Dê estrelinhas.`,
      atividade: `Crie mais uma tela de 16x16 e invente uma peça nova para o cenário: pode ser areia amarela, água azul ou um caminho de pedrinhas. Salve com um nome. Depois mostre suas peças para a turma e diga o nome de cada uma.`,
      gabarito: `Acertou quem cria uma quarta peça também em 16x16, com cor coerente ao que ela representa (areia amarela, água azul, caminho cinza-claro) e consegue apresentar as quatro peças nomeando cada uma. O sucesso é manter o tamanho igual e explicar para que serve cada peça no cenário.`,
    },
  ],
};
