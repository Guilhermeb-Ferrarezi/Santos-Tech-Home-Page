import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando Minha Planilha Esperta",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Juntar tudo que aprendemos no mês — digitar uma tabela de dados e adicionar as fórmulas de soma, média e contagem — para começar a construir, em um único arquivo guiado, a nossa planilha que calcula sozinha.`,
  descricao: `Durante o mês inteiro as crianças aprenderam, uma de cada vez, as mágicas das contas automáticas: o botão Somar, a fórmula de soma digitada, a média da turma, a contagem que não erra e a alça mágica que copia as fórmulas para muitas linhas. Hoje é o dia de juntar todas essas peças em um lugar só. Esta é a aula em que a criança deixa de fazer exercícios soltos e começa, de verdade, a montar o entregável do mês: a sua própria planilha esperta.

A ideia é simples e empolgante: cada aluno vai criar uma tabelinha sobre um assunto que ele gosta — por exemplo, o lanche favorito da turma, os pontos que ele ganhou na semana, ou quantas figurinhas tem cada amigo. Primeiro a criança digita os títulos das colunas e os números, montando a tabela. Depois, embaixo dos números, ela adiciona as fórmulas que já conhece: uma célula que soma tudo, uma que mostra a média e uma que conta quantos itens existem. Quando a tabela tem mais de uma coluna de números, a alça mágica entra em cena para copiar as fórmulas para o lado.

O grande aprendizado do dia não é uma fórmula nova — é a noção de planilha como um conjunto que trabalha junto. A criança percebe que a tabela de cima (os dados) e as continhas de baixo (as fórmulas) conversam entre si: se ela mudar um número lá em cima, os resultados lá embaixo mudam sozinhos. É a primeira vez que ela vê a sua própria planilha inteira reagindo, e isso costuma arrancar muitos "uau".

Como é uma aula de montagem guiada, o professor conduz todos no mesmo ritmo, construindo a planilha-modelo no projetor enquanto cada criança constrói a sua. O arquivo de hoje é salvo com carinho, porque na próxima e última aula do mês cada um vai dar os retoques finais e apresentar a sua planilha que calcula sozinha. Hoje plantamos a planilha; na aula 8 ela floresce.`,
  materiais: [
    `Um computador por criança (ou em duplas) com o Excel ou o Google Planilhas já aberto em um arquivo novo e em branco, pronto para começar.`,
    `Projetor ou TV ligada ao computador do professor para montar a planilha-modelo na tela grande, passo a passo, junto com a turma.`,
    `Uma planilha-modelo pronta do professor (ex.: "Lanche favorito da turma") já com a tabela e as três fórmulas de soma, média e contagem, para mostrar onde a turma quer chegar.`,
    `Cartões impressos grandes com as três fórmulas em letra bem visível: =SOMA(  ), =MÉDIA(  ) e =CONT.NÚM(  ), além do desenho da alça mágica (o quadradinho no canto da célula).`,
    `Folhas de papel com uma tabelinha em branco desenhada (colunas e linhas) para a criança planejar no papel os números antes de digitar.`,
    `Lista de temas simples sugeridos (lanche favorito, pontos da semana, figurinhas, brinquedos, frutas) para a criança escolher o assunto da sua tabela.`,
    `Lista de presença e a pasta/arquivo de cada aluno já localizada antes de a aula começar, para salvar a planilha no fim.`,
  ],
  conceitosChave: [
    `Planilha esperta — a nossa tabela que, além dos números, tem fórmulas que fazem as contas sozinhas para a gente.`,
    `Tabela de dados — a parte de cima da planilha, onde a gente digita os títulos das colunas e os números de verdade.`,
    `Fórmula de soma — a continha =SOMA( ) que junta todos os números de um pedaço da tabela e mostra o total.`,
    `Fórmula de média — a continha =MÉDIA( ) que descobre o número do meio, o resultado "mais ou menos" de todos juntos.`,
    `Fórmula de contagem — a continha =CONT.NÚM( ) que conta quantas caixinhas têm número, sem a gente precisar contar no dedo.`,
    `Alça mágica — o quadradinho no cantinho da célula que, quando a gente arrasta, copia a fórmula para as células do lado ou de baixo.`,
    `Intervalo — o pedaço da tabela que a fórmula olha, escrito com dois pontos, como B2:B6 (da caixinha B2 até a B6).`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de junção, não de novidade: você vai guiar a turma a montar, em um arquivo só, uma tabela de dados com as três fórmulas do mês (soma, média e contagem) e, quando houver mais de uma coluna, copiá-las com a alça mágica. Tenha a planilha-modelo pronta e testada antes de começar. Um modelo simples funciona muito bem: na coluna A escreva nomes (Ana, Beto, Caio...), na coluna B escreva uma quantidade (por exemplo, "Figurinhas"). Os dados ficam de B2 a B6; embaixo, em B7, vai a soma; em B8, a média; em B9, a contagem.

As fórmulas, em qualquer das ferramentas, são digitadas começando com o sinal de igual: =SOMA(B2:B6), =MÉDIA(B2:B6) e =CONT.NÚM(B2:B6). No Excel é exatamente assim. No Google Planilhas a soma e a média são iguais; a contagem de números chama-se =CONT.NÚM no Brasil também (se a interface estiver em inglês, é COUNT). O segredo que confunde criança é o intervalo: os dois pontos significam "daqui até ali". Em vez de digitar B2:B6, é mais fácil ensinar a clicar na primeira célula de número e arrastar até a última depois de abrir o parêntese — a planilha escreve o intervalo sozinha. Para a alça mágica, lembre que é o quadradinho minúsculo no canto inferior direito da célula selecionada: clicar e arrastar copia a fórmula.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): mostre a planilha-modelo pronta no projetor. Clique numa célula de resultado e mostre a fórmula lá em cima, na barra. Mude um número da tabela e deixe a turma ver o total mudar sozinho. Pergunte: "Quais mágicas a gente já aprendeu este mês?" e relembre soma, média e contagem apontando cada célula.

2. Conteúdo novo guiado (15 min): num arquivo em branco, monte a tabela junto com a turma. Digite os títulos na linha 1 (clique na célula A1, escreva, aperte Tab para ir para B1). Digite os nomes e os números. Embaixo, em B7, digite =SOMA( , clique no primeiro número e arraste até o último, feche o parêntese e aperte Enter. Repita para =MÉDIA( em B8 e =CONT.NÚM( em B9. Diga cada passo em voz alta.

3. Mão na massa (25 min): cada criança escolhe um tema e monta a sua tabela: títulos na linha 1, alguns nomes e números abaixo. Depois adiciona as três fórmulas embaixo da coluna de números, do mesmo jeito que você mostrou. Se a tabela tiver duas colunas de números, ensine a usar a alça mágica: seleciona a célula da fórmula, pega o quadradinho do canto e arrasta para o lado. Circule guiando o gesto e elogiando.

4. Desafio + compartilhar (10 min): quem terminou muda um número da tabela e observa os três resultados mudarem sozinhos — esse é o momento "uau". Cada criança mostra ao colega a sua planilha esperta e diz qual fórmula mais gostou. Salve o arquivo de cada um com cuidado, pois ele continua na aula 8.

## Como explicar para crianças de 5 a 9 anos

Diga que hoje vamos "construir um robozinho de contas". A tabela de cima são os números que a gente dá de comer ao robô, e as fórmulas de baixo são o robô fazendo a conta sozinho. Para o sinal de igual, repita sempre: "Toda mágica começa com o igualzinho". Para o intervalo, use a mão: "Do primeiro número ATÉ o último, a gente pinta tudo". Evite mandar digitar B2:B6 de cabeça; mostre o jeito de pintar arrastando. Quando você mudar um número e os resultados mudarem, faça suspense: "Olha só... eu nem encostei nas continhas e elas mudaram sozinhas!". Esse momento prende a atenção e mostra para que serve uma planilha esperta.

## Erros comuns e como ajudar

O erro mais comum é esquecer o sinal de igual: a criança digita SOMA(B2:B6) e aparece só o texto. Mostre que sem o igual não vira conta. Outro é o parêntese aberto e não fechado, ou pintar o intervalo errado (pegando o título ou a própria célula do resultado, o que gera erro de referência circular); peça para apagar e pintar de novo só os números. Há quem digite os números em colunas separadas e a fórmula não encontre tudo; oriente a manter os números na mesma coluna. Na alça mágica, é comum a criança arrastar a célula inteira em vez do quadradinho do canto, movendo a fórmula de lugar; mostre devagar o ponto exato de pegar. Por fim, alguém vai escrever número com vírgula ou com letra junto e a média não calcula; confira que cada caixinha tem só um número limpo.`,
  exercicios: [
    {
      titulo: `As três mágicas do mês`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Antes de mexer no computador, relembre com a turma as três fórmulas do mês usando a planilha-modelo no projetor. O objetivo é ativar a memória e deixar todos prontos para montar a sua própria tabela.`,
      atividade: `Com a planilha-modelo na tela grande, o professor aponta cada célula de resultado e pergunta: "Esta aqui faz qual mágica? Soma, média ou contagem?". As crianças respondem em voz alta e dizem, com suas palavras, o que cada fórmula faz.`,
      gabarito: `A célula da soma junta todos os números e mostra o total; a da média mostra o número "mais ou menos" de todos; a da contagem diz quantas caixinhas têm número. A criança acerta quando associa cada resultado à mágica certa e explica que toda fórmula começa com o sinal de igual.`,
    },
    {
      titulo: `Planejando minha tabela no papel`,
      tipo: `Desenho / papel`,
      tempo: `10 min`,
      guiaProfessor: `Entregue a folha com a tabelinha em branco e a lista de temas. A criança escolhe um assunto e planeja no papel antes de digitar, o que deixa o trabalho no computador muito mais rápido e organizado.`,
      atividade: `Na folha com a tabela desenhada, a criança escolhe um tema (lanche favorito, pontos da semana, figurinhas...), escreve os títulos das colunas na primeira linha e preenche com alguns nomes e números à mão. No fim, marca com um lápis as três caixinhas de baixo onde vão entrar a soma, a média e a contagem.`,
      gabarito: `A folha deve ter títulos na primeira linha, pelo menos três nomes com seus números e três caixinhas marcadas embaixo para as fórmulas. Está correto quando a tabela faz sentido (cada número combina com um nome) e a criança consegue dizer onde cada fórmula vai ficar.`,
    },
    {
      titulo: `Digitando minha tabela de dados`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Guie no projetor a montagem da tabela em um arquivo em branco. Ensine a apertar a tecla Tab para andar para o lado e Enter para descer. Ainda sem fórmulas: a meta é só a tabela de dados ficar bonita e organizada.`,
      atividade: `No Excel ou no Google Planilhas, a criança copia para o computador a tabela que planejou no papel: clica na célula A1, digita o primeiro título, aperta Tab, digita o próximo título, e depois preenche os nomes e os números nas linhas de baixo. Confere se os números ficaram todos na mesma coluna.`,
      gabarito: `A tabela na tela deve ter os títulos na linha 1 e os números alinhados na mesma coluna, um embaixo do outro. Está certo quando os dados estão organizados, sem número fora do lugar, e a tabela do computador é igual à do papel.`,
    },
    {
      titulo: `Acordando as fórmulas`,
      tipo: `Prática no computador`,
      tempo: `15 min`,
      guiaProfessor: `Agora a criança adiciona as três fórmulas embaixo da coluna de números. Reforce o sinal de igual e ensine a pintar o intervalo arrastando, em vez de digitar B2:B6 de cabeça. Circule conferindo parênteses fechados e intervalo correto.`,
      atividade: `Embaixo da coluna de números, a criança clica na primeira caixinha livre e digita =SOMA(, depois pinta os números arrastando, fecha o parêntese e aperta Enter. Na caixinha de baixo faz a média com =MÉDIA( e na seguinte a contagem com =CONT.NÚM(. Confere se os três resultados apareceram.`,
      gabarito: `As três células devem mostrar números de resultado (e não o texto da fórmula): a soma com o total, a média com o número do meio e a contagem com a quantidade de itens. Está correto quando todos começam com o sinal de igual, têm o parêntese fechado e o intervalo pega só os números da coluna.`,
    },
    {
      titulo: `Desafio da planilha que muda sozinha`,
      tipo: `Desafio`,
      tempo: `15 min`,
      guiaProfessor: `Desafio para quem já montou a tabela e as fórmulas. A criança acrescenta uma segunda coluna de números, copia as fórmulas para o lado com a alça mágica e testa a mágica de mudar um número e ver os resultados se recalcularem sozinhos.`,
      atividade: `A criança adiciona uma segunda coluna de números (ex.: pontos de outra semana). Seleciona a célula da soma, pega a alça mágica (o quadradinho do canto) e arrasta para o lado para copiar as três fórmulas. Por fim, troca um número lá em cima e observa os resultados mudarem sozinhos. Depois mostra a planilha a um colega.`,
      gabarito: `A segunda coluna deve ter as três fórmulas funcionando, copiadas pela alça mágica, e ao mudar qualquer número os resultados de soma, média e contagem devem mudar sozinhos. Está completo quando a criança consegue mostrar essa atualização automática e nomear as três fórmulas que usou.`,
    },
  ],
};
