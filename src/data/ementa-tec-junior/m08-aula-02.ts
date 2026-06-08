import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Personagem que Anda na Tela",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança coloca o seu sprite no cenário, ajusta o tamanho dele para caber direitinho na tela e faz o personagem andar usando as teclas de seta.`,
  descricao: `Nesta aula, cada criança pega o desenho que virou sprite na aula passada e dá vida a ele de verdade: o personagem sai do nada e aparece dentro do cenário do jogo, no lugar certo e do tamanho certo. É o momento mágico em que a arte feita pela própria criança começa a parecer um jogo, e não só uma figura parada.

Vamos trabalhar três ideias bem simples. Primeiro, posicionar: arrastar o personagem para o lugar onde ele deve começar a aventura. Segundo, redimensionar: deixar o personagem nem gigante nem minúsculo, mas do tamanho certo para caber e ficar bonito na tela. Terceiro, e o mais divertido, fazer o personagem obedecer às setas do teclado para andar para os lados, para cima e para baixo.

Isso importa porque andar na tela é a base de quase todo jogo. Antes de coletar pontos, fugir de inimigos ou vencer fases (coisas que veremos nas próximas aulas), a criança precisa sentir que ela controla o personagem. Quando o desenho dela se mexe ao apertar uma tecla, a criança entende, de um jeito concreto e emocionante, que ela é a autora do jogo.

No Construct 3, o segredo é um recurso pronto chamado comportamento, em especial o comportamento 8 Direction (8 Direções). Ele faz todo o trabalho difícil de movimento por nós: basta adicioná-lo ao personagem e, na hora de testar, as setas já funcionam. O professor não precisa programar nada complicado nesta aula; o foco é guiar a turma a posicionar, redimensionar e adicionar esse comportamento mágico.`,
  materiais: [
    `Computadores (um por criança ou em duplas) com o Construct 3 já aberto no navegador e o projeto da criança da aula anterior carregado, com o sprite do personagem já criado.`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo na tela grande.`,
    `Um projeto de exemplo do professor, já com um cenário de fundo e um personagem que anda, pronto para mostrar o resultado final logo no começo.`,
    `Uma imagem simples de fundo (cenário) por criança, já disponível, ou o fundo que a turma usou na aula passada.`,
    `Folhas de papel e lápis de cor para o exercício de desenho do mapa do movimento.`,
    `Adesivos ou carimbos de "joinha" para celebrar quando cada personagem andar pela primeira vez.`,
    `Lista com o nome do projeto de cada criança, para o professor achar rápido o arquivo de quem precisar de ajuda.`,
  ],
  conceitosChave: [
    `Sprite — é o desenho do personagem que vira uma figura que pode se mexer dentro do jogo.`,
    `Layout (cenário) — é a tela do jogo, o lugar onde o personagem mora e anda, como um palco.`,
    `Posição — é o lugar onde o personagem começa; a gente arrasta ele para onde quiser.`,
    `Tamanho (redimensionar) — é deixar o personagem maior ou menor puxando as bolinhas da borda, para caber na tela.`,
    `Comportamento — é um poder mágico que a gente dá para o personagem; o poder de andar já vem pronto.`,
    `8 Direções — o poder que faz o personagem andar para os lados, para cima e para baixo quando apertamos as setas.`,
    `Testar (botão Play) — é apertar o triângulo de "tocar" para jogar e ver se o personagem anda mesmo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O Construct 3 funciona no navegador. O projeto da criança tem um Layout (o cenário) e, dentro dele, objetos. O sprite do personagem já existe desde a aula passada. Hoje faremos três coisas com ele: posicionar (arrastar para o lugar de início), redimensionar (ajustar o tamanho) e dar movimento.

O movimento vem de um comportamento. Comportamento, no Construct 3, é uma habilidade pronta que você "cola" em um objeto sem precisar montar lógica. Para andar com as setas, usamos o 8 Direction (8 Direções). Você o adiciona uma vez e, ao testar, as quatro setas já movem o personagem. É o jeito mais simples possível e perfeito para esta idade.

Antes da aula, abra o seu projeto de exemplo e confira que o personagem anda. Tenha à mão como redimensionar: ao clicar no sprite, aparecem quadradinhos nas bordas (alças) que esticam ou encolhem a figura. Segurar a tecla Shift enquanto arrasta a alça mantém a proporção (não deforma o personagem).

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Construct 3)

10 min — Aquecimento/revisão: mostre no projetor o seu personagem de exemplo andando com as setas. Pergunte: "Querem que o desenho de vocês ande assim?". Reveja rapidamente a aula passada: cada um abre o Construct 3 e carrega o próprio projeto. Confirme que todos veem o sprite na tela.

15 min — Conteúdo novo guiado: na tela grande, faça os três passos devagar. Um: clique no personagem e arraste-o para um canto do cenário (a posição de início). Dois: redimensione clicando no personagem e puxando uma alça da borda, segurando Shift, até ele caber bem. Três: com o personagem selecionado, olhe o painel Properties (Propriedades), à esquerda; encontre Behaviors (Comportamentos) e clique para abrir. Clique no botão de mais (+) com "Add new behavior" (Adicionar novo comportamento), escolha 8 Direction (8 Direções) na lista e clique em Add (Adicionar). Pronto: o poder de andar foi colado. Clique no botão Play (o triângulo, no alto à direita) e ande com as setas para a turma ver.

25 min — Mão na massa: cada criança repete nos próprios projetos. Circule pela sala. Garanta que todos: arrastaram o personagem para um bom lugar, ajustaram o tamanho com Shift e adicionaram o comportamento 8 Direction. Peça que cada um clique em Play e teste as setas. Comemore cada personagem que anda pela primeira vez (adesivo de joinha!).

10 min — Desafio + compartilhar: proponha o desafio de fazer o personagem dar uma volta completa pela tela sem sair pela borda. Depois, faça uma "volta da galeria": cada criança mostra na sua tela o personagem andando para os colegas.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Diga que o cenário é um palco e o personagem é o ator: a gente coloca o ator no canto onde a história começa. Para o tamanho, use a ideia de roupa: "o personagem não pode ser gigante nem do tamanho de uma formiguinha; vamos deixar ele do tamanho certo para o palco". Para o comportamento, fale em poder mágico: "vamos dar para o seu personagem o poder de andar com as setas, igual a um super-herói". O botão Play é o controle de videogame que liga o jogo. Use sempre verbos de ação e mostre na tela; eles imitam melhor do que leem.

## Erros comuns e como ajudar

Personagem some ou fica gigante: a criança puxou a alça errada. Mostre o botão de desfazer (Ctrl+Z) e refaça junto, devagar, com Shift apertado. Personagem não anda ao apertar as setas: quase sempre o comportamento 8 Direction não foi adicionado, ou foi adicionado no objeto errado (no fundo, não no personagem). Clique no personagem e confira o painel Behaviors. Outro caso: a criança aperta as setas mas o jogo não está no modo Play; lembre de clicar no triângulo primeiro. Personagem foge da tela na hora do teste: é normal e divertido; explique que nas próximas aulas a gente coloca paredes. Por fim, a criança arrasta o cenário inteiro sem querer: peça para clicar primeiro só no personagem antes de arrastar.`,
  exercicios: [
    {
      titulo: `Coloque o ator no palco`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Mostre no projetor como clicar no personagem e arrastá-lo para um canto do cenário. Diga que ali é onde a aventura começa. Circule e ajude quem arrastar o fundo por engano, lembrando de clicar primeiro só no personagem.`,
      atividade: `Abra o seu projeto, clique no seu personagem e arraste-o para o canto da tela onde você quer que a história comece.`,
      gabarito: `O personagem está parado em um canto do cenário, separado da borda, e ao clicar fora dele o cenário continua no lugar. Acertou quando o personagem fica no ponto de início escolhido pela criança.`,
    },
    {
      titulo: `Nem gigante, nem formiguinha`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Demonstre o redimensionamento puxando uma alça da borda com a tecla Shift apertada para não deformar. Reforce o desfazer (Ctrl+Z) para quem exagerar. Compare com tamanhos de roupa: pequeno, certo e grande demais.`,
      atividade: `Clique no seu personagem e, segurando a tecla Shift, puxe uma bolinha da borda até ele ficar do tamanho certo para caber bem na tela.`,
      gabarito: `O personagem cabe na tela sem encostar nas bordas e mantém a forma original (não está esticado nem achatado). Acertou quando dá para ver o personagem inteiro e ele não ocupa o cenário todo.`,
    },
    {
      titulo: `O poder de andar`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Guie passo a passo: personagem selecionado, painel Properties, abrir Behaviors, botão de mais, escolher 8 Direction e clicar em Add. Depois clique em Play e teste as setas. Confira que cada criança adicionou o comportamento no personagem, e não no fundo.`,
      atividade: `Com o seu personagem selecionado, abra Behaviors (Comportamentos), clique no botão de mais, escolha 8 Direction e clique em Add. Depois clique em Play e ande com as setas.`,
      gabarito: `Ao apertar as setas no modo Play, o personagem anda para os lados, para cima e para baixo. Acertou quando as quatro setas movem o personagem da criança na tela.`,
    },
    {
      titulo: `O mapa do meu movimento`,
      tipo: `desenho/papel`,
      tempo: `8 min`,
      guiaProfessor: `Entregue papel e lápis. Peça que cada criança desenhe a tela como um retângulo e marque com setas o caminho que quer fazer o personagem percorrer. Use isso como planejamento divertido antes de voltar ao computador. Não exija escrita.`,
      atividade: `Desenhe um retângulo (a tela do jogo) e, dentro dele, desenhe o seu personagem e setas mostrando o caminho que ele vai andar: para onde começa e para onde vai.`,
      gabarito: `O desenho tem um retângulo representando a tela, o personagem dentro e pelo menos duas setas indicando direções de movimento. Acertou quando dá para entender, pelo desenho, qual caminho o personagem vai fazer.`,
    },
    {
      titulo: `A grande volta pela tela`,
      tipo: `desafio + roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Lance o desafio de fazer o personagem dar uma volta completa pela tela sem sair pelas bordas, usando as setas. Depois faça uma roda rápida: cada criança conta para os colegas o que foi mais fácil e o que foi mais difícil para o personagem andar.`,
      atividade: `Clique em Play e tente fazer o seu personagem dar uma volta completa pela tela, passando pelos quatro cantos, sem sumir pela borda. Depois, na roda, conte o que achou mais divertido.`,
      gabarito: `A criança consegue conduzir o personagem pelos quatro cantos da tela usando as setas e, na roda, descreve a experiência (por exemplo, que foi difícil não sair pela borda). Acertou quando controla o movimento de propósito e participa da conversa.`,
    },
  ],
};
