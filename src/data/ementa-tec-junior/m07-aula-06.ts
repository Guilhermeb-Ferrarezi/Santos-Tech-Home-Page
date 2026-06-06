import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Item flutuando no ar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança cria uma animação de um item que flutua suave no ar, subindo e descendo devagar, usando frames e tempo certo para deixar o movimento liso.`,
  descricao: `Nesta aula a gente continua a brincadeira de dar vida aos desenhos. Na aula passada a moeda girava; agora vamos fazer um item mágico (uma estrelinha, uma poção, uma chave ou um coração) flutuar no ar, subindo bem devagar e descendo de novo, como se estivesse boiando numa piscina invisível. É o famoso movimento de "flutuar" que aparece em quase todo jogo quando tem um item especial esperando o herói pegar.

Flutuar é diferente de girar. Quando a moeda gira, ela troca a forma do desenho em cada frame. Quando o item flutua, o desenho é quase sempre o mesmo: o que muda é só a POSIÇÃO dele na tela. Ele sobe um pouquinho, para no alto, desce um pouquinho, para embaixo, e recomeça. Essa repetição calma é o que faz o olho da gente sentir que o item está leve, mágico e vivo.

A grande lição da aula é a suavidade. Se o item pular muito de uma vez, fica "tremido" e feio. Se ele subir de pouquinho em pouquinho, com vários frames, o movimento fica macio. As crianças vão reaproveitar tudo o que já sabem de frames e de tempo (timing) das aulas anteriores para controlar essa subida e descida.

No fim, apertamos o play e colocamos a moeda que gira do lado do item que flutua, para todo mundo comparar os dois jeitos de mexer um desenho. É um momento gostoso de orgulho: cada criança tem dois personagens vivos na tela.`,
  materiais: [
    `Computadores ligados com o Aseprite já aberto, um por criança (ou em dupla, se faltar máquina).`,
    `Projetor ou TV grande para o professor mostrar cada passo na tela enorme.`,
    `Arquivo de exemplo pronto: "estrela-flutua.aseprite" já animado, para mostrar o resultado final logo no começo.`,
    `Arquivo da moeda girando que a turma fez na aula passada, salvo e fácil de achar, para comparar no final.`,
    `Modelos simples de itens já desenhados (estrela, poção, chave, coração) num arquivo, caso alguma criança não queira desenhar do zero.`,
    `Crachás ou etiquetas com os nomes das crianças para identificar cada computador.`,
    `Folhas de papel e lápis de cor para o exercício de papel (setas de subir e descer).`,
  ],
  conceitosChave: [
    `Flutuar — quando o desenho fica quase igual e só muda de lugar, subindo e descendo devagar no ar.`,
    `Posição — o lugar onde o desenho está na telinha; mexer a posição é mover o desenho pra cima ou pra baixo.`,
    `Frame — cada folhinha da animação; juntando várias folhinhas em sequência o desenho ganha movimento.`,
    `Timing (tempo) — quanto tempo cada folhinha fica na tela; tempo maior deixa o movimento mais calmo e lento.`,
    `Suave — movimento liso, sem pulos bruscos, feito de pouquinho em pouquinho para o olho não estranhar.`,
    `Loop (repetição) — a animação que volta pro começo sozinha e fica repetindo, igual a um carrossel que dá voltas.`,
    `Play — o botãozinho de brincar que faz a animação rodar para a gente ver o item ganhar vida.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Flutuar é a animação mais simples e mais "mágica" de ensinar, porque o desenho quase não muda: muda só a POSIÇÃO dele. Você desenha o item uma vez e, em cada frame, move esse mesmo desenho um pouquinho pra cima ou pra baixo. O segredo da suavidade é dividir o movimento em vários passos pequenos. Se o item sobe 8 pixels de uma vez, treme; se sobe de 2 em 2 pixels ao longo de quatro frames, fica liso.

No Aseprite, cada quadro fica na "Timeline" (a barra com as folhinhas, embaixo da tela). Para duplicar um frame use "New Frame" (o botãozinho de "+" na Timeline) ou o atalho Alt+N para um frame vazio e Alt+B para copiar o frame atual. Para mover o desenho dentro do frame, use a ferramenta "Move" (a setinha das quatro pontas, atalho M) e empurre com as setinhas do teclado. Cada toque na seta empurra 1 pixel. O play fica no topo da Timeline (o triângulo de "brincar"); pode também apertar Enter para rodar. O tempo de cada frame se ajusta clicando no número de milissegundos do frame (ou clicando duas vezes no frame para abrir as propriedades). Cento e cinquenta milissegundos por frame costuma dar um flutuar bem calmo.

A forma do movimento é: sobe, sobe, topo, desce, desce, base, e repete. Como vai virar loop, o último frame precisa "encaixar" de volta no primeiro. Por isso o item termina perto de onde começou.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Aseprite)

10 min — Aquecimento: abra o arquivo "estrela-flutua.aseprite" no projetor e aperte play. Pergunte: "A estrela está girando ou subindo e descendo?". Mostre rápido a moeda girando do lado para a turma sentir a diferença entre girar e flutuar.

15 min — Conteúdo novo guiado: na sua tela, abra um arquivo novo pequeno (File, New, 32 por 32 pixels). Desenhe uma estrelinha simples no meio com a ferramenta "Pencil" (lápis, atalho B). Diga: "Esse é o frame 1, embaixo". Na Timeline, clique no "+" para criar o frame 2 copiando (ou Alt+B). Pegue a ferramenta "Move" (M) e aperte a seta pra cima duas vezes (sobe 2 pixels). Repita: frame 3 sobe mais 2, frame 4 é o topo. Depois crie frames descendo até voltar embaixo. Aperte play e mostre o flutuar nascendo.

25 min — Mão na massa: cada criança escolhe seu item (estrela, poção, chave ou coração), desenha no frame 1 e cria os frames subindo e descendo, empurrando com as setinhas. Circule pela sala, ajoelhe ao lado de cada um, e ajude a manter os passos pequenos. Quem terminar ajusta o tempo dos frames para 150 ms (clica no número do frame).

10 min — Desafio + compartilhar: peça que cada um abra a moeda da aula passada e a coloque mentalmente do lado do item novo. Roda de play: cada criança aperta o play e mostra o item flutuando para a turma.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a piscina: "Imagina uma bolinha boiando na piscina. Ela sobe um tiquinho com a onda e desce um tiquinho. Nunca pula alto, é sempre devagarinho." Outra analogia: o balão de festa que solta da mão e sobe leve. Diga sempre "de pouquinho em pouquinho" e mostre com a mão subindo lentamente no ar. Para o tempo, fale "frame rápido é coração acelerado, frame devagar é a gente respirando fundo".

## Erros comuns e como ajudar

O erro mais comum é mover demais: a criança aperta a seta dez vezes e o item "salta". Ajude contando junto: "um, dois, só dois toquinhos". Outro erro é mover no frame errado e bagunçar o desenho de outro quadro: mostre o frame selecionado (fica destacado na Timeline) antes de mover. Tem quem apague o item sem querer com a ferramenta de mover: lembre que "Move" empurra, "Eraser" apaga. Alguns esquecem de criar o frame novo e ficam mexendo só no mesmo: confira se a Timeline ganhou folhinhas novas. Por fim, se o flutuar fica "tremido", quase sempre faltam frames no meio; acrescente um ou dois passos pequenos entre os pulos grandes.`,
  exercicios: [
    {
      titulo: `Aquecendo o olho: girar ou flutuar?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `No projetor, mostre alternando duas animações: a moeda girando e a estrela flutuando. Aperte o play em cada uma e deixe a turma observar. Pergunte com calma, dando a vez para cada criança falar, sem pressa.`,
      atividade: `Olhem as duas animações na tela grande. Levantem a mão e digam: qual está GIRANDO e qual está SUBINDO E DESCENDO? O que muda em cada uma? Façam com o corpo: girem a mãozinha para "girar" e subam a mãozinha devagar para "flutuar".`,
      gabarito: `A moeda está girando (a forma do desenho muda em cada frame). A estrela está flutuando (o desenho fica quase igual e só muda de lugar, subindo e descendo). Acertou quem identificou que no flutuar muda a POSIÇÃO, e fez o gesto certo com a mão.`,
    },
    {
      titulo: `Setas mágicas no papel`,
      tipo: `desenho/papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue uma folha e lápis de cor. Antes de ir pro computador, peça que a criança planeje o flutuar no papel desenhando o item em alturas diferentes e setas de subir e descer. Mostre um exemplo seu na lousa.`,
      atividade: `Desenhe o seu item (estrela, poção, chave ou coração) três vezes numa coluna: embaixo, no meio e no alto. Entre eles, desenhe uma setinha para CIMA mostrando que ele sobe, e depois setinhas para BAIXO mostrando que ele desce de volta.`,
      gabarito: `O desenho deve mostrar o mesmo item em três alturas (baixo, meio, alto) com setas para cima na subida e para baixo na descida, voltando ao começo. Acertou quem entendeu que o item sobe E desce, formando um caminho que se repete, e não só sobe.`,
    },
    {
      titulo: `Meu item flutua de verdade`,
      tipo: `prática na ferramenta`,
      tempo: `18 minutos`,
      guiaProfessor: `Acompanhe cada criança. Lembre os passos: desenhar o item no frame 1, criar frame novo no "+" da Timeline, pegar a ferramenta Move (M) e empurrar 2 pixels com a setinha. Reforce "de pouquinho em pouquinho". Ajude a criar frames subindo e depois descendo.`,
      atividade: `No Aseprite, desenhe seu item no frame 1. Crie um frame novo e empurre o item 2 toquinhos para cima com a seta. Repita até chegar no alto. Depois crie frames descendo de volta até embaixo. Aperte o play e veja seu item flutuar!`,
      gabarito: `A animação roda em loop com o item subindo em passos pequenos, parando no alto, descendo e voltando perto da posição inicial, sem pulos bruscos. Acertou quem tem vários frames (pelo menos 5 ou 6), movimento suave e o item terminando perto de onde começou.`,
    },
    {
      titulo: `Caça ao "tremido"`,
      tipo: `jogo`,
      tempo: `12 minutos`,
      guiaProfessor: `Faça uma rodada em duplas. Cada criança aperta o play no item do colega e vira "detetive da suavidade". O professor passa garantindo que a observação seja gentil e ajuda a consertar quem tiver tremido, adicionando um frame no meio.`,
      atividade: `Troque de lugar com o colega. Aperte o play no item dele e seja o detetive: o movimento está SUAVE (liso) ou TREMIDO (pulando)? Se achar um pulo grande, chame o professor para colocarem juntos um frame novo no meio para deixar liso.`,
      gabarito: `O "detetive" acertou quando consegue dizer se há pulos grandes e aponta entre quais frames o item salta demais. O conserto certo é adicionar um frame intermediário com a posição no meio do caminho, deixando o movimento mais suave.`,
    },
    {
      titulo: `Moeda e item lado a lado`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada criança abra também a moeda da aula passada. Faça uma roda de play final: a turma vê os dois movimentos do mesmo aluno. Conduza a comparação com perguntas e celebre cada apresentação com palmas.`,
      atividade: `Abra a sua moeda da aula passada numa janela e o seu item flutuando na outra. Aperte o play nos dois. Mostre para a turma e responda: o que a MOEDA faz? O que o ITEM faz? Qual dos dois está flutuando e qual está girando?`,
      gabarito: `A criança apresenta as duas animações funcionando e explica que a moeda GIRA (muda a forma) e o item FLUTUA (sobe e desce mudando a posição). Acertou quem mostrou os dois rodando e nomeou corretamente cada tipo de movimento.`,
    },
  ],
};
