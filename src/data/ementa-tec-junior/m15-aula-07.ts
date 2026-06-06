import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Itens e inimigos do jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Desenhar no Aseprite os dois últimos sprites que faltam para o jogo do ano — um item para coletar e um inimigo simples — mantendo o mesmo estilo e a mesma paleta do personagem para tudo combinar.`,
  descricao: `Nas semanas anteriores cada criança criou o herói, deu cor e detalhe a ele e desenhou as peças do cenário. Agora o jogo já tem quem joga e onde jogar. Mas falta o tempero: algo gostoso para o herói coletar e alguém para ele desviar. Nesta aula a turma desenha esses dois sprites que faltam — um item (como uma moeda ou uma estrela) e um inimigo simples (como um morceguinho, um slime ou um espinho) — para completar o conjunto de sprites do jogo.

O grande segredo de hoje é a palavra COMBINAR. Não basta o item e o inimigo serem bonitos: eles precisam parecer da mesma família do herói. Para isso, as crianças vão usar a MESMA paleta de cores que já criaram para o personagem e o mesmo tamanho de pixel, sem inventar cores novas do nada. É como vestir todo mundo com o uniforme da mesma escola: cada um é diferente, mas todos pertencem ao mesmo time.

O item costuma ser pequeno e chamativo: poucos pixels, uma cor que brilha e uma forma fácil de reconhecer de longe, porque a criança que joga precisa bater o olho e pensar "quero pegar aquilo!". Já o inimigo precisa parecer um pouco "do contra": uma carinha mais séria, uma cor mais escura ou um formato pontudo ajudam o jogador a entender na hora que aquilo é perigoso. Mesmo sendo simples, esses dois sprites mudam tudo: é com eles que o jogo ganha objetivo (coletar) e desafio (desviar).

Ao final da aula, o conjunto de sprites do mês está quase completo. Cada criança terá no Aseprite o herói, as peças de cenário, um item colecionável e um inimigo — todos no mesmo estilo, prontos para virarem um jogo de verdade nas próximas etapas. A aula final do mês será só para juntar tudo e exportar o conjunto completo.`,
  materiais: [
    `Computadores com o Aseprite aberto e o arquivo do personagem de cada criança já salvo na pasta da turma`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar cada passo`,
    `Exemplos prontos impressos ou na tela: uma moeda, uma estrela e um coração em pixel art (modelos de itens)`,
    `Exemplos prontos de inimigos simples em pixel art: um morceguinho, um slime e um espinho`,
    `A paleta de cores do personagem já salva (mesma das aulas anteriores), visível no painel de cores`,
    `Folha de rascunho e lápis para a criança planejar a forma do item e do inimigo antes de desenhar`,
    `Adesivos ou carimbos de "Conjunto Completo" para premiar quem terminar os dois sprites combinando`,
  ],
  conceitosChave: [
    `Item colecionável — é uma coisinha que o herói pega no jogo para ganhar pontos ou poder, como uma moeda, uma estrela ou um coração.`,
    `Inimigo — é o personagem do contra, que o herói precisa desviar ou enfrentar; costuma ter cor escura ou forma pontuda para parecer perigoso.`,
    `Paleta — é a caixinha com as cores escolhidas do jogo; usar sempre as mesmas cores faz tudo combinar como um uniforme.`,
    `Combinar (estilo) — é deixar todos os desenhos parecidos, do mesmo tamanho de pixel e das mesmas cores, para virarem uma família.`,
    `Silhueta — é o contorno do desenho, a sombra dele; uma boa silhueta deixa a gente reconhecer o item ou o inimigo só pelo formato.`,
    `Contraste — é quando uma cor clara fica do lado de uma escura e o desenho "pula" na tela, ficando fácil de ver.`,
    `Sprite — é cada desenho do jogo: o herói, o cenário, o item e o inimigo são todos sprites diferentes.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você vai abrir dois desenhos novos pequenos no Aseprite, mas reaproveitando a paleta que a turma já tem. O ponto mais importante não é desenhar bonito: é usar AS MESMAS CORES do personagem. Por isso, antes da aula, abra o arquivo de uma criança e confirme onde fica a paleta: ela aparece no painel de cores, geralmente embaixo à esquerda ou na lateral. Se a turma salvou a paleta num arquivo, você a carrega clicando no ícone de pastinha no canto do painel de cores e escolhendo "Load palette".

Para criar um sprite novo do tamanho certo, use o menu File > New. Uma janela abre pedindo a largura (Width) e a altura (Height). Para um item, um quadrado pequeno como 16 x 16 pixels é ótimo; para um inimigo simples, 16 x 16 ou 24 x 24. Deixe "Color Mode" em RGBA e clique em OK. As ferramentas principais ficam na barra à esquerda: o Lápis (tecla B) para desenhar pixel a pixel, a Borracha (tecla E) para apagar e o Balde de tinta (tecla G) para preencher áreas. O zoom é com a roda do mouse ou as teclas + e -. Desfazer é Ctrl+Z, e salvar é Ctrl+S.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): No projetor, mostre os exemplos prontos. Pergunte: "O que falta no nosso jogo além do herói e do cenário?" Conduza até a resposta: algo para pegar e alguém para desviar. Mostre uma moeda e um morceguinho de exemplo e pergunte: "Como vocês sabem, só de olhar, que a moeda é boa e o morcego é o do contra?" Relembre a paleta do personagem na tela.

CONTEÚDO NOVO GUIADO (15 min): No Aseprite, faça File > New e crie um item de 16 x 16. Carregue a paleta do personagem (ícone de pasta no painel de cores > Load palette). Com o Lápis (B), desenhe uma moeda redondinha: um círculo amarelo, um brilho branco num canto e um contorno mais escuro. Diga em voz alta cada cor que pega da paleta. Depois crie outro novo de 16 x 16 e desenhe um inimigo simples, usando uma cor mais escura da MESMA paleta e uma forma pontuda. Salve os dois com Ctrl+S.

MÃO NA MASSA (25 min): As crianças primeiro rascunham no papel a forma do item e do inimigo. Depois, no Aseprite, criam os dois sprites com File > New (16 x 16), carregam a paleta do personagem e desenham com o Lápis. Circule mesa a mesa lembrando a regra de ouro: só cores da paleta. Ajude com zoom, Ctrl+Z e a salvar cada arquivo com nome claro (ex.: "item-estrela", "inimigo-slime").

DESAFIO + COMPARTILHAR (10 min): Lance o desafio: "Deixe seu inimigo com cara de perigoso e seu item com cara de gostoso, só mexendo nas cores e na forma." Cada criança mostra no projetor seus dois sprites ao lado do herói e a turma confere se tudo combina. Entregue o carimbo de Conjunto Completo.

## Como explicar para crianças

Use a analogia do uniforme: "O item, o inimigo e o herói são do mesmo time. Para parecerem do mesmo time, todos vestem o uniforme — que são as nossas cores da paleta. Se eu inventar uma cor de fora, vira um intruso que não combina."

Para o contraste, fale de esconde-esconde: "Se o item for da mesma cor do chão, ninguém acha ele. Então a gente escolhe uma cor que pula na frente, bem diferente do cenário." Para o inimigo: "Cor escura e pontuda diz 'cuidado!'. Cor clara e redondinha diz 'pode pegar!'."

## Erros comuns e como ajudar

Criança pega uma cor nova do seletor em vez da paleta: mostre de novo onde fica a paleta salva e combine "só clicamos nas cores desta caixinha aqui". Tampe o seletor de cores livre com a mão se precisar.

Criança faz o item gigante, do tamanho do herói: lembre que item é pequeno e chamativo; peça para apagar e recomeçar num cantinho de 16 x 16, contando os quadradinhos.

Item e inimigo ficam parecidos demais: ajude a diferenciar pela forma (redondo x pontudo) e pela cor (clara x escura), para o jogador saber na hora quem é quem.

Criança apaga o desenho sem querer: ensine o Ctrl+Z na hora e deixe escrito no quadro. Reforce salvar com Ctrl+S de vez em quando.

Sprite some ou fica minúsculo na tela: é só o zoom; gire a roda do mouse ou use a tecla + para aproximar e enxergar os pixels.`,
  exercicios: [
    {
      titulo: `Bom de pegar ou do contra?`,
      tipo: `Aquecimento oral`,
      tempo: `7 minutos`,
      guiaProfessor: `Faça com a turma toda, mostrando os exemplos prontos no projetor. Para cada desenho, pergunte se parece um item para coletar ou um inimigo, e por quê. O foco é a turma perceber que cor e forma dão a pista. Celebre cada explicação.`,
      atividade: `Olhe os desenhos que o professor mostra (moeda, estrela, coração, morceguinho, slime, espinho) e responda em voz alta: é um item para PEGAR ou um inimigo para DESVIAR? Diga uma pista que te ajudou: a cor ou o formato.`,
      gabarito: `Moeda, estrela e coração = itens para pegar (cores claras e brilhantes, formas redondinhas). Morceguinho, slime e espinho = inimigos para desviar (cores mais escuras, formas pontudas ou "do contra"). Vale qualquer pista correta citada, como "é escuro" ou "tem pontas".`,
    },
    {
      titulo: `Carregando o uniforme do time`,
      tipo: `Prática no computador`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor e acompanhe mesa a mesa. Cada criança cria o arquivo novo do item e carrega a paleta do personagem. O objetivo é garantir que TODOS partam das mesmas cores antes de desenhar. Ajude quem não achar o "Load palette".`,
      atividade: `No Aseprite, faça File > New, coloque Width 16 e Height 16, deixe RGBA e clique em OK. Depois, no painel de cores, clique no ícone de pastinha e escolha "Load palette" para carregar a paleta do seu personagem. Confira: as cores que aparecem são as mesmas do seu herói?`,
      gabarito: `Um arquivo novo de 16 x 16 aberto e a paleta do personagem carregada, mostrando exatamente as mesmas cores usadas no herói. Nenhuma cor inventada de fora na caixinha de cores.`,
    },
    {
      titulo: `Minha moeda que brilha`,
      tipo: `Mão na massa guiado`,
      tempo: `9 minutos`,
      guiaProfessor: `Acompanhe passo a passo. As crianças desenham o item usando só a paleta. Reforce o contraste: uma cor clara que pule na tela e um brilhozinho branco. Lembre do zoom (roda do mouse) e do Ctrl+Z. No fim, peça para salvar com Ctrl+S e nome claro.`,
      atividade: `Com o Lápis (tecla B), desenhe seu item (moeda, estrela ou coração) usando só as cores da paleta: pinte o miolo com uma cor chamativa, faça um contorno com uma cor mais escura e coloque um brilho branco num cantinho. Salve com Ctrl+S, dando o nome "item" mais o que ele é (ex.: "item-estrela").`,
      gabarito: `Um item pequeno (cabendo no 16 x 16), desenhado só com cores da paleta, com um contorno mais escuro e um brilho claro que cria contraste. O arquivo foi salvo com nome claro identificando o item.`,
    },
    {
      titulo: `Inimigo com cara de perigo`,
      tipo: `Mão na massa guiado`,
      tempo: `9 minutos`,
      guiaProfessor: `As crianças criam o segundo sprite, o inimigo, num novo arquivo 16 x 16 com a mesma paleta. Oriente a escolher uma cor mais escura e uma forma pontuda ou "brava" para diferenciar do item. Circule lembrando: mesmas cores, estilo igual ao do herói. Salvar no fim.`,
      atividade: `Faça File > New (16 x 16), carregue a mesma paleta e desenhe um inimigo simples (morceguinho, slime ou espinho). Use uma cor mais escura da paleta e dê uma forma pontuda ou uma carinha séria, para ficar bem diferente do seu item. Salve com Ctrl+S, com o nome "inimigo" mais o que ele é (ex.: "inimigo-slime").`,
      gabarito: `Um inimigo desenhado num arquivo 16 x 16, usando só a paleta do personagem, com cor mais escura ou forma pontuda que o diferencia claramente do item. O sprite combina com o estilo do herói e foi salvo com nome claro.`,
    },
    {
      titulo: `O time todo junto`,
      tipo: `Desafio e compartilhar`,
      tempo: `9 minutos`,
      guiaProfessor: `Etapa mais exigente e de fechamento. Cada criança coloca, lado a lado no projetor (ou abrindo os arquivos na tela), o herói, o item e o inimigo, e a turma julga se tudo combina. Onde algo destoar, oriente um pequeno ajuste de cor. Entregue o carimbo de Conjunto Completo.`,
      atividade: `Mostre seus três sprites juntos: herói, item e inimigo. Olhe com cuidado e responda: as cores são da mesma paleta? O tamanho dos pixels é igual? Dá para saber qual é o item bom e qual é o inimigo? Se algo não combinar, ajuste uma cor para entrar no uniforme do time.`,
      gabarito: `Os três sprites aparecem juntos e formam uma família: mesma paleta, mesmo tamanho de pixel e estilo parecido. O item é facilmente reconhecido como "para pegar" e o inimigo como "para desviar". Qualquer desajuste percebido foi corrigido com um ajuste de cor ou forma, deixando o conjunto combinando.`,
    },
  ],
};
