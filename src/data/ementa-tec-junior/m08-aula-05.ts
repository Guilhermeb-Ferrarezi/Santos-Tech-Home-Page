import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Cuidado com os Inimigos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança vai colocar inimigos no cenário e fazer o personagem perder uma vida quando encostar neles, aprendendo a desviar enquanto continua coletando pontos.`,
  descricao: `Nesta aula o jogo das crianças ganha um novo tipo de obstáculo: os inimigos. Até agora o personagem andava pela tela e coletava pontos sem nenhum perigo. A partir de hoje o jogo fica mais emocionante, porque encostar em um inimigo faz o personagem perder uma vida. Isso transforma a brincadeira em um verdadeiro desafio de desviar e prestar atenção.

O conceito central é a colisão: o que acontece quando dois objetos se tocam na tela. As crianças já viram colisão na aula de coletar pontos (encostar na moeda dava um ponto). Agora usamos a mesma ideia, mas com um resultado diferente: em vez de ganhar algo bom, encostar no inimigo tira uma vida. É o mesmo gesto de tocar, com uma consequência oposta, e isso ajuda a criança a entender que a mesma regra pode dar prêmios ou perigos dependendo de quem ela encosta.

Por que isso importa? Porque é aqui que o jogo começa a ter graça de verdade. Um bom jogo precisa de algo a evitar e algo a buscar ao mesmo tempo. As crianças vão sentir a diferença entre um jogo sem risco e um jogo com tensão gostosa, aquela vontade de chegar até o ponto sem ser pego. Elas também exercitam a coordenação, o planejamento de caminho e a paciência de tentar de novo.

Na prática, o professor vai guiar a turma para adicionar um objeto inimigo ao cenário, posicioná-lo perto dos pontos e criar, no painel de eventos, a regra que diz: quando o personagem encostar no inimigo, perca uma vida. No fim, cada criança testa o próprio jogo tentando coletar pontos sem ser tocada pelos inimigos, e comemora cada vez que consegue desviar.`,
  materiais: [
    `Computadores (um por criança, ou em duplas) com o Construct 3 já aberto no projeto do jogo de cada aluno, salvo da Aula 4.`,
    `Projetor ou TV grande conectada ao computador do professor, para todos verem onde clicar.`,
    `Uma imagem simples de inimigo pronta para cada criança (por exemplo um monstrinho, uma abelha brava ou uma pedra com olhos), em PNG, para arrastar para o projeto.`,
    `O desenho de inimigo que algumas crianças já fizeram nas aulas de arte, digitalizado (opcional, para quem quiser usar o próprio).`,
    `Cartões de papel impressos com carinhas: uma feliz (ponto) e uma braba (inimigo), para a roda de conversa.`,
    `Folhas de desenho e lápis de cor para a atividade no papel.`,
    `Adesivos ou estrelinhas para premiar quem conseguir desviar dos inimigos no teste final.`,
  ],
  conceitosChave: [
    `Inimigo — um personagem do jogo que a gente precisa evitar; se encostar nele, acontece algo ruim.`,
    `Colisão — o momento em que dois desenhos se tocam na tela, como dois carrinhos batendo.`,
    `Vida — uma chance que o jogador tem; quando todas acabam, o jogo termina.`,
    `Evento — uma regrinha do jogo no formato quando isto acontecer, faça aquilo.`,
    `Desviar — mudar o caminho do personagem para não encostar em algo perigoso.`,
    `Spawn (aparecer) — colocar um objeto no cenário para ele existir no jogo.`,
    `Obstáculo — qualquer coisa no caminho que dificulta chegar ao objetivo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Esta aula usa um único conceito técnico: colisão entre dois objetos. No Construct 3, tudo que aparece na tela vive no Layout (a área de desenho do cenário) e é controlado por regras no Event Sheet (a folha de eventos). Um evento sempre tem duas partes: uma condição (quando algo acontece) e uma ação (o que fazer). Hoje a condição será o personagem encostar no inimigo, e a ação será tirar uma vida.

A condição que vamos usar chama-se On collision with another object (ao colidir com outro objeto). Ela dispara no instante exato em que dois objetos se tocam. Para a vida, vamos usar uma variável de instância chamada vidas, que provavelmente já existe desde a Aula 4. A ação será Subtract 1 from vidas (subtrair 1 de vidas). Se na turma a variável tiver outro nome, use o nome que aparece no projeto da criança. Antes da aula, abra um projeto de exemplo e confirme onde está a variável vidas e que o personagem (geralmente chamado Player) já tem o comportamento de movimento. Isso evita surpresas na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Construct 3)

Aquecimento (10 min): Abra o projeto de uma criança no projetor. Jogue por 30 segundos coletando pontos. Pergunte: e se aparecesse um monstrinho que tira vida? Deixe a turma imaginar. Relembre que encostar na moeda já dava ponto, então hoje vamos fazer o contrário com o inimigo.

Conteúdo novo guiado (15 min): No projetor, clique duas vezes em uma área vazia do Layout para abrir a janela Create new object type. Escolha Sprite, clique no Layout para posicionar e, no editor de imagem, importe ou desenhe o inimigo. Nomeie o objeto como Inimigo (use o painel de Properties à esquerda). Arraste o Inimigo para perto dos pontos. Agora abra o Event Sheet pela aba no topo. Clique em Add event, escolha o objeto Player, depois On collision with another object, e selecione Inimigo. No mesmo evento clique em Add action, escolha Player (ou o objeto que guarda a variável vidas), depois Subtract from instance variable, escolha vidas e digite 1. Clique em Done.

Mão na massa (25 min): Cada criança repete os passos no próprio projeto, com o professor circulando. Ajude a importar a imagem de inimigo e a criar o evento de colisão. Quem terminar pode colocar um segundo inimigo (basta arrastar outra cópia do objeto Inimigo para o Layout). Lembre de salvar com Menu, Save.

Desafio + compartilhar (10 min): Peça que cada criança aperte o botão Preview (o triângulo de play no topo) e tente pegar todos os pontos sem encostar nos inimigos. Quem conseguir desviar ganha um adesivo. Convide duas ou três crianças a mostrar o jogo no projetor.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a brincadeira do pega-pega: o inimigo é o pegador, e se ele te toca você perde uma chance. Diga que a moeda é amiga (dá ponto) e o monstrinho é travesso (tira vida), mas os dois funcionam pelo encostar. Para colisão, junte as duas mãos batendo e diga toc, encostou. Para vida, mostre três dedos e abaixe um quando o personagem encosta no inimigo. Evite palavras como variável ou evento na frente das crianças; diga regrinha do jogo e contador de vidas.

## Erros comuns e como ajudar

O erro mais comum é a criança criar o evento no objeto errado: o evento de colisão deve começar pelo Player, não pelo Inimigo. Se nada acontece no teste, confira se o objeto selecionado na colisão é mesmo o Inimigo. Outro erro frequente é a vida sumir muito rápido: como a colisão dispara várias vezes se os objetos ficam encostados, oriente a posicionar o inimigo um pouco longe dos pontos. Algumas crianças esquecem de salvar; reforce o Save antes do Preview. Há também quem importe a imagem grande demais e o inimigo cobre a tela inteira; mostre como diminuir arrastando os quadradinhos das bordas no editor. Por fim, se a variável vidas não existir no projeto da criança, crie-a rapidamente clicando no Player, Instance variables, Add, com nome vidas e valor 3.`,
  exercicios: [
    {
      titulo: `Colocando o monstrinho no cenário`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor como criar um Sprite novo e nomeá-lo Inimigo. Faça um por vez junto com a turma, esperando todos clicarem antes de seguir. Circule conferindo o nome do objeto.`,
      atividade: `Cada criança cria um objeto Sprite no Layout, importa ou desenha a imagem de inimigo, nomeia o objeto como Inimigo e o arrasta para perto dos pontos do jogo.`,
      gabarito: `Acertou se aparece um objeto chamado Inimigo no Layout, visível na tela, posicionado perto dos pontos. No painel de objetos deve existir um item Inimigo. Se o nome estiver certo e o desenho aparecer, está correto.`,
    },
    {
      titulo: `A regrinha do encostar tira vida`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Abra o Event Sheet no projetor e construa o evento devagar: Add event, Player, On collision with another object, Inimigo; depois Add action, Subtract from instance variable vidas, valor 1. Verbalize cada clique.`,
      atividade: `Cada criança cria, no Event Sheet, o evento de colisão entre Player e Inimigo e adiciona a ação de subtrair 1 da variável vidas.`,
      gabarito: `Acertou se na folha de eventos existe a linha Player on collision with Inimigo, com a ação Subtract 1 from vidas. No teste, ao encostar no inimigo, o contador de vidas deve diminuir em 1.`,
    },
    {
      titulo: `Desafio do desviar`,
      tipo: `jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que apertem Preview e joguem tentando pegar todos os pontos sem encostar nos inimigos. Crie um clima de torcida. Dê adesivo para quem conseguir desviar até o fim.`,
      atividade: `As crianças jogam o próprio jogo no Preview, coletando o máximo de pontos possível enquanto desviam dos inimigos, sem perder todas as vidas.`,
      gabarito: `Acertou quem consegue coletar pelo menos um ponto e terminar a rodada com pelo menos uma vida restante, mostrando que entendeu como desviar. Perder vidas ao encostar e mantê-las ao desviar prova que a colisão funciona.`,
    },
    {
      titulo: `Roda dos amigos e dos travessos`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda com os cartões de carinha feliz (ponto) e carinha braba (inimigo). Mostre um cartão por vez e pergunte o que acontece quando o personagem encosta naquilo. Estimule todos a responder.`,
      atividade: `Para cada cartão mostrado, as crianças dizem em voz alta se o personagem ganha um ponto ou perde uma vida ao encostar, e explicam por quê.`,
      gabarito: `Acertou quem diz que encostar na carinha feliz dá ponto e encostar na carinha braba tira vida, reconhecendo que os dois usam o encostar (colisão), mas com resultados diferentes.`,
    },
    {
      titulo: `Meu mapa de fuga`,
      tipo: `desenho no papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue folha e lápis. Peça que cada criança desenhe um caminho do personagem até os pontos, fugindo dos inimigos. Mostre um exemplo simples no quadro com uma seta serpenteando entre dois monstrinhos.`,
      atividade: `Cada criança desenha o personagem, dois ou três pontos para coletar, dois inimigos e uma linha (seta) mostrando o caminho seguro que desvia dos inimigos e passa pelos pontos.`,
      gabarito: `Acertou se o desenho mostra uma linha de caminho que toca os pontos mas não cruza os inimigos, e o personagem está posicionado no início do caminho. O traçado desviando dos inimigos prova que a criança entendeu a ideia de evitar a colisão.`,
    },
  ],
};
