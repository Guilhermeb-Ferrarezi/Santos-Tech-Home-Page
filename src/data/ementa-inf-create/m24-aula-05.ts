import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Layout do dashboard: organizando a tela",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `O aluno planeja e organiza o layout do painel no Power BI, posicionando título, cartões, gráficos e segmentações de forma alinhada, dimensionada e visualmente limpa, com plano de fundo e tema de cores profissional.`,
  descricao: `Nas aulas anteriores o aluno já importou os dados, criou gráficos e cartões, aplicou filtros e adicionou segmentações interativas. Agora todos esses elementos estão na tela, mas provavelmente estão "jogados" em qualquer lugar, com tamanhos diferentes e sem ordem. Esta aula é sobre transformar essa bagunça em um painel que parece profissional. A ideia central é simples: um bom dashboard não é só sobre ter os dados certos, é sobre organizá-los de um jeito que a pessoa entenda tudo em poucos segundos.

O foco da aula é o layout, ou seja, o lugar de cada coisa na tela. O aluno vai aprender que existe uma ordem natural de leitura: olhamos primeiro para cima e para a esquerda. Por isso o título fica no topo, os números mais importantes (os cartões) logo abaixo, os gráficos no centro e as segmentações de um lado, geralmente à esquerda ou no topo. Essa organização não é decoração: ela guia o olhar de quem vai usar o painel.

Além de posicionar, o aluno vai aprender a alinhar e dimensionar os visuais usando ferramentas do próprio Power BI. Visuais alinhados e do mesmo tamanho passam uma sensação de cuidado e profissionalismo. Visuais tortos e de tamanhos aleatórios passam descuido, mesmo que os dados estejam corretos. Pequenos detalhes, como deixar dois cartões exatamente do mesmo tamanho e na mesma linha, fazem uma diferença enorme.

Por fim, a aula trabalha o acabamento visual básico: aplicar um plano de fundo na página e escolher um tema de cores que combine. Um tema de cores garante que todos os gráficos usem a mesma paleta, em vez de cada um ter uma cor diferente e gritante. O resultado é um painel coeso, limpo e bonito, pronto para receber os últimos detalhes na próxima aula.`,
  materiais: [
    `Computadores com Power BI Desktop instalado e o arquivo do projeto do mês (.pbix) já com dados, gráficos, cartões e segmentações das aulas anteriores`,
    `Microsoft Excel instalado, caso seja preciso reabrir a planilha de origem dos dados`,
    `Projetor ou TV para o professor mostrar os passos na tela grande`,
    `Arquivo de exemplo pronto (um .pbix modelo) mostrando um dashboard bem organizado, para servir de referência`,
    `Conta Microsoft para login no Power BI Desktop, caso a turma use recursos online`,
    `Folha de papel e lápis (ou quadro branco) para cada aluno rascunhar o layout antes de mexer no computador`,
    `Paleta de cores impressa ou na tela com 3 a 4 cores que combinam, para os alunos escolherem o tema`,
  ],
  conceitosChave: [
    `Layout — é a organização dos elementos na tela: onde fica cada gráfico, cartão e segmentação dentro da página do painel.`,
    `Visual — qualquer elemento que mostra dados no Power BI, como um gráfico, um cartão de número ou uma segmentação.`,
    `Alinhamento — deixar os visuais com as bordas na mesma linha, um embaixo do outro ou um ao lado do outro, sem ficar torto.`,
    `Dimensionamento — ajustar a largura e a altura dos visuais para que os relacionados fiquem do mesmo tamanho e proporção.`,
    `Plano de fundo (canvas) — a "folha" da página do painel, na qual definimos a cor de fundo e o tamanho da tela.`,
    `Tema de cores — um conjunto de cores definido para o painel inteiro, fazendo todos os gráficos usarem a mesma paleta.`,
    `Hierarquia visual — a ordem que organiza o que aparece primeiro e com mais destaque, guiando o olhar de quem lê o painel.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Power BI. Nesta aula o trabalho é quase todo de organização visual, parecido com arrumar uma estante. O conceito mais importante é a hierarquia visual: as pessoas leem a tela de cima para baixo e da esquerda para a direita. Então o título vai no topo, os cartões com números importantes logo abaixo, os gráficos no centro e as segmentações (filtros que clicamos) à esquerda ou no topo. Memorize quatro ações que você fará o tempo todo: selecionar um visual (clicar nele uma vez), mover (arrastar), redimensionar (puxar os pontinhos das bordas) e alinhar (menu Formato). É só isso.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Abra o arquivo .pbix do mês no projetor. Mostre o painel "bagunçado" das aulas anteriores e pergunte: "O que está difícil de entender aqui?". Mostre em seguida o arquivo modelo organizado e pergunte: "Qual dos dois parece feito por um profissional?". Distribua a folha de papel e peça que cada aluno desenhe, em retângulos, onde vai colocar título, cartões, gráficos e segmentações.

CONTEÚDO NOVO GUIADO (15 min): No Power BI Desktop, mostre como mover um visual: clique nele uma vez (aparece uma moldura) e arraste pela borda. Mostre como redimensionar: puxe os quadradinhos das bordas e dos cantos. Para alinhar, selecione dois ou mais visuais segurando a tecla Ctrl, vá na faixa superior em "Formato" e use "Alinhar" (por exemplo, "Alinhar à esquerda" e "Distribuir horizontalmente"). Depois mostre o plano de fundo: clique em uma área vazia da página, vá no painel "Visualizações" à direita, clique no ícone de pincel (Formatar página), abra "Plano de fundo da tela" e escolha uma cor clara. Por fim, aplique um tema: faixa superior, aba "Exibir", botão "Temas", e escolha um tema pronto.

MÃO NA MASSA (25 min): Cada aluno organiza o próprio painel seguindo o rascunho de papel. A ordem sugerida: 1) colocar o título no topo (caixa de texto); 2) alinhar os cartões em uma linha logo abaixo, todos do mesmo tamanho; 3) posicionar os gráficos no centro; 4) levar as segmentações para a esquerda; 5) aplicar plano de fundo claro; 6) escolher um tema de cores. Circule pela sala ajudando individualmente.

DESAFIO E COMPARTILHAR (10 min): Peça que cada aluno deixe dois cartões com exatamente a mesma largura e altura usando a ferramenta de alinhamento. Depois, dois ou três alunos mostram o painel no projetor e dizem uma escolha de layout que fizeram.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o painel é como o feed de um aplicativo: se estiver bagunçado, ninguém quer olhar. Compare alinhar visuais a "deixar os ícones do celular certinhos na tela", e o tema de cores a "escolher uma skin combinando para o jogo". Repita a regra de ouro: "o olho lê de cima para baixo, da esquerda para a direita". Incentive o rascunho no papel antes de mexer no programa, dizendo que até designers profissionais desenham primeiro.

## Erros comuns e como ajudar

O erro mais comum é mover o visual errado ou acabar criando um novo sem querer: ensine a clicar UMA vez para selecionar, não duas. Outro erro é redimensionar pelo centro e distorcer tudo; mostre que os pontinhos do canto mantêm a proporção. Muitos alunos esquecem de segurar Ctrl para selecionar vários visuais antes de alinhar, e ficam frustrados; passe de mesa em mesa lembrando. Há quem escolha cores berrantes demais: oriente a usar a paleta impressa e o tema pronto. Por fim, se um aluno "perder" um visual atrás de outro, mostre o painel "Seleção" (aba Exibir) para encontrar e reorganizar a ordem das camadas.`,
  exercicios: [
    {
      titulo: `Rascunho do layout no papel`,
      tipo: `prática individual (planejamento)`,
      tempo: `8 minutos`,
      guiaProfessor: `Antes de qualquer clique, peça que cada aluno desenhe a tela do painel em uma folha. Reforce a regra de leitura (cima para baixo, esquerda para a direita) e que isso é o que profissionais fazem primeiro. Passe verificando se todos colocaram título, cartões, gráficos e segmentações.`,
      atividade: `Desenhe um retângulo grande representando a tela do painel. Dentro dele, desenhe retângulos menores indicando onde vão ficar: o título, os cartões de números, os gráficos e as segmentações. Escreva o nome dentro de cada retângulo.`,
      gabarito: `Um layout correto e esperado: título ocupando uma faixa fina no topo; uma linha de 3 a 4 cartões logo abaixo do título, todos do mesmo tamanho; gráficos ocupando a área central e maior da tela; segmentações em uma coluna estreita à esquerda (ou faixa no topo). Qualquer rascunho que respeite a leitura de cima para baixo e da esquerda para a direita está correto.`,
    },
    {
      titulo: `Mover e posicionar os visuais`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre novamente que clicar uma vez seleciona o visual (aparece a moldura) e arrastar pela borda move. Acompanhe para evitar que criem visuais novos sem querer. Lembre que ainda não é hora de alinhar com precisão, só de colocar cada coisa na região certa do rascunho.`,
      atividade: `No seu arquivo do Power BI, arraste cada visual para a posição do seu rascunho: título no topo, cartões abaixo, gráficos no centro e segmentações à esquerda. Não se preocupe ainda com o alinhamento perfeito.`,
      gabarito: `Ao final, o painel deve ter os elementos nas regiões corretas: título no topo, cartões em seguida, gráficos no centro e segmentações à esquerda ou no topo. Mesmo sem alinhamento fino, a organização geral já deve refletir o rascunho de papel.`,
    },
    {
      titulo: `Alinhar e igualar os cartões (desafio)`,
      tipo: `desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Este é o ponto técnico da aula. Demonstre: segurar Ctrl e clicar em cada cartão para selecionar vários, ir em "Formato" na faixa superior, usar "Alinhar à esquerda/topo" e "Distribuir horizontalmente". Para igualar tamanho, mostre o painel de formatação (Tamanho e estilo) onde se digita largura e altura iguais. Circule lembrando do Ctrl.`,
      atividade: `Selecione todos os cartões de uma vez segurando a tecla Ctrl. Use o menu Formato para alinhá-los na mesma linha e distribuí-los igualmente. Depois, deixe pelo menos dois cartões com exatamente a mesma largura e altura.`,
      gabarito: `Os cartões devem ficar na mesma linha horizontal, com espaçamento igual entre eles, e ao menos dois deles com largura e altura idênticas. Verificação: ao selecionar dois cartões, os valores de Largura e Altura no painel de formatação devem ser iguais (por exemplo, 220 e 90).`,
    },
    {
      titulo: `Plano de fundo e tema de cores em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno aplica o plano de fundo (clicar em área vazia, pincel "Formatar página", "Plano de fundo da tela", cor clara) e o outro aplica o tema (aba Exibir, botão Temas, escolher um tema pronto). Depois trocam e conferem o resultado um do outro. Oriente a escolher cores claras e que combinem, evitando tons berrantes.`,
      atividade: `Em dupla: um aplica um plano de fundo claro na página e o outro aplica um tema de cores pronto. Em seguida, troquem de cadeira e avaliem o painel do colega, sugerindo uma melhoria de cor ou alinhamento.`,
      gabarito: `O painel da dupla deve ter um plano de fundo de cor clara aplicado e um tema de cores ativo, fazendo os gráficos compartilharem a mesma paleta. A avaliação do colega deve apontar pelo menos uma sugestão concreta (exemplo: "o fundo está muito escuro" ou "os cartões poderiam estar mais alinhados").`,
    },
    {
      titulo: `Roda de conversa: o que faz um painel parecer profissional`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma. Conduza uma conversa rápida pedindo que comparem o painel "antes" (bagunçado) com o de agora. Anote no quadro as palavras que aparecerem (alinhado, limpo, organizado, mesma cor). Feche conectando com a próxima aula, que será o acabamento profissional.`,
      atividade: `Em roda, cada aluno diz uma coisa que mudou no painel que o fez parecer mais profissional depois desta aula. Tente não repetir o que o colega já falou.`,
      gabarito: `Respostas válidas incluem: "os visuais ficaram alinhados", "os cartões ficaram do mesmo tamanho", "o título está no topo", "as cores combinam por causa do tema", "o fundo deixou tudo mais limpo", "agora dá para entender mais rápido". Qualquer resposta que cite organização, alinhamento, dimensionamento, plano de fundo ou tema de cores está correta.`,
    },
  ],
};
