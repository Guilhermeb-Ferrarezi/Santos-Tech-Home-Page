import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Bordas e Tabela Caprichada",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a colocar bordas ao redor das células para desenhar a moldura da tabela e combinar bordas, cores e letras grandes ou em negrito, deixando a tabela bem organizada e bonita.`,
  descricao: `Na aula passada as crianças aprenderam a pintar as células, dando cor de fundo para o cabeçalho e para os dados. Hoje damos o toque final que transforma um amontoado de palavras coloridas numa tabela de verdade: as bordas. A borda é a linha que aparece ao redor da célula, como o risco preto que a gente faz com a régua para separar as caixinhas. Sem borda, as palavras flutuam soltas; com borda, cada informação ganha sua moldura e a tabela fica caprichada.

A grande novidade é entender que aquelas linhas cinza-clarinhas que a planilha já mostra na tela (as linhas de grade) NÃO são bordas de verdade e não aparecem quando a gente imprime ou tira foto. A borda que desenhamos é uma linha forte, escura, que fica colada na célula. No Excel ela está na aba Página Inicial, no botãozinho de Bordas (um quadradinho dividido em quatro, ao lado do balde de tinta e do tamanho de letra). No Google Planilhas o botão tem o mesmo desenho e fica na barra de cima, perto das ferramentas de cor. Em ambos, a criança seleciona as células, abre o botão e escolhe "Todas as bordas" para o efeito de grade completa.

Esta aula também junta tudo que já vimos no mês: depois de colocar a moldura, as crianças voltam a usar as cores da aula anterior e ainda deixam as letras maiores e em negrito para o cabeçalho. Negrito é o "N" grosso na barra de ferramentas que deixa a palavra mais forte; o tamanho da letra é o numerozinho ao lado da fonte. Misturando borda preta, cabeçalho colorido, letra grande e negrito, a tabela passa a parecer aquelas tabelas bonitas de livro ou de jornal.

O objetivo do dia é estético e organizador ao mesmo tempo: a borda não muda o que está escrito, mas faz o olho enxergar onde cada coisa começa e termina. É a diferença entre um caderno rabiscado e um caderno caprichado. Essa noção de "deixar bonito para os outros entenderem" prepara o terreno para as próximas aulas, em que cada criança vai montar e apresentar a sua própria tabela.`,
  materiais: [
    `Um computador por criança (ou em duplas) com o Excel ou o Google Planilhas já aberto no arquivo da tabelinha que vem sendo construída nas aulas anteriores.`,
    `Projetor ou TV ligada ao computador do professor para mostrar cada clique na tela grande.`,
    `Uma tabela-exemplo do professor em DOIS estados: uma versão "sem capricho" (só palavras soltas, sem borda nem cor) e a mesma versão "caprichada" (com bordas pretas, cabeçalho colorido e letra em negrito), para comparar lado a lado.`,
    `Cartões impressos grandes com o ícone do botão de Bordas, a opção "Todas as bordas", o "N" do negrito e o número do tamanho da letra.`,
    `Folhas quadriculadas e canetinhas/lápis de cor para o desenho da moldura no papel antes do computador.`,
    `Uma régua de brinquedo ou de verdade para usar como analogia ("a borda é o risco da régua").`,
    `Lista de presença e a pasta/arquivo de cada aluno já localizada antes de a aula começar.`,
  ],
  conceitosChave: [
    `Borda — a linha escura que a gente desenha ao redor da célula, como o risco da régua que faz a caixinha.`,
    `Todas as bordas — a opção que coloca linha em volta de cada célula de uma vez, formando a grade da tabela.`,
    `Linhas de grade — as listras cinza-clarinhas que a planilha mostra na tela, mas que não são borda de verdade e não saem na impressão.`,
    `Moldura — o contorno todo da tabela, como a moldura de um quadro na parede.`,
    `Negrito — o "N" grosso que deixa a palavra mais forte e escura, ótimo para o cabeçalho.`,
    `Tamanho da letra — o numerozinho que faz as palavras ficarem maiores ou menores.`,
    `Tabela caprichada — quando juntamos borda, cor e letra bonita e tudo fica organizado e fácil de ler.`,
  ],
  treinamento: `## O que o professor precisa saber

Borda e linha de grade são coisas diferentes, e essa é a confusão número um. A linha de grade é o quadriculado cinza que a planilha desenha sozinha na tela só para você se localizar; ela some quando você imprime ou tira print. A borda é uma linha de verdade que VOCÊ manda colocar e que aparece em qualquer lugar. No Excel, selecione as células, vá na aba Página Inicial e procure o botão de Bordas (um quadrado dividido em quatro pedacinhos, no grupo Fonte, perto do balde de cor); clique na setinha ao lado dele e escolha "Todas as bordas". No Google Planilhas, selecione as células e clique no ícone de Bordas na barra de ferramentas de cima (mesmo desenho de quadrado dividido); no menu que abre, escolha o botão de grade cheia ("Todas as bordas"). Para negrito, use o "N" (Excel) ou "B" do inglês Bold em alguns layouts; em português costuma aparecer como "N". O tamanho da letra é o campo numérico ao lado do nome da fonte. Tenha tudo isso aberto e testado antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): mostre na tela grande a tabela-exemplo "sem capricho" e a "caprichada", lado a lado. Pergunte: "Qual está mais bonita? Por quê?". Deixe as crianças notarem as linhas pretas. Relembre as cores da aula passada apontando o cabeçalho colorido.

2. Conteúdo novo guiado (15 min): selecione algumas células arrastando o mouse. No Excel, clique na setinha do botão de Bordas (Página Inicial, grupo Fonte) e escolha "Todas as bordas"; no Google Planilhas, clique no ícone de Bordas na barra de cima e escolha a grade cheia. Mostre a moldura aparecendo. Depois selecione o cabeçalho e clique no "N" do negrito e aumente o tamanho da letra no numerozinho. Mostre o antes e o depois.

3. Mão na massa (25 min): cada criança abre a própria tabelinha. Tarefa: selecionar todas as células com conteúdo, abrir o botão de Bordas e escolher "Todas as bordas"; depois selecionar a linha do cabeçalho, deixar em negrito (N) e aumentar um pouco o tamanho da letra. Circule guiando o gesto "seleciona, abre Bordas, escolhe Todas as bordas". Quem terminar repinta o cabeçalho com uma cor da aula anterior.

4. Desafio + compartilhar (10 min): cada criança mostra a tabela caprichada para um colega e conta o que mudou. Premie quem combinou borda, cor e negrito. Feche relembrando: "A borda é a moldura; o negrito deixa o título forte; a cor separa o cabeçalho".

## Como explicar para crianças de 5 a 9 anos

Use a régua: "Quando você quer fazer uma tabela no caderno, pega a régua e risca as linhas pretas para fazer as caixinhas, certo? A borda é esse risco da régua, só que no computador a gente faz com um clique." Explique que as listras cinza que já aparecem são "linhas de mentirinha, que somem na hora de imprimir", e que a borda é "a linha de verdade, que fica para sempre". Para o negrito, diga que é "engrossar a letra para ela ficar fortona, igual a falar mais alto". Demonstre devagar, nomeando cada clique em voz alta: "seleciono... abro o botão das bordas... escolho Todas as bordas". Deixe a criança fazer com a sua mão guiando a dela e celebre quando a moldura aparece.

## Erros comuns e como ajudar

O erro mais comum é a criança achar que já tem borda por causa das linhas de grade cinza; mostre a diferença tirando um print ou comparando com a tabela-exemplo. Outro é selecionar só uma célula e estranhar que a moldura ficou pequena: peça para arrastar e selecionar TODAS as células com conteúdo antes de abrir o botão. Muitas clicam direto no botão de Bordas em vez de abrir a setinha, e ele aplica um tipo qualquer; ensine a abrir a listinha e escolher "Todas as bordas". No negrito, há quem clique no "N" com nenhuma célula selecionada e nada acontece; lembre de selecionar primeiro. Por fim, alguém vai aumentar demais a letra e a palavra "estourar" da célula; mostre como diminuir o número de volta para um tamanho que cabe.`,
  exercicios: [
    {
      titulo: `Caçando a borda de verdade`,
      tipo: `Roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Com as duas tabelas-exemplo na tela grande (a "sem capricho" e a "caprichada"), conduza a turma a descobrir, antes de mexer no computador, o que é borda de verdade e o que é linha de grade.`,
      atividade: `O professor mostra as duas tabelas lado a lado e pergunta, apontando: "Esta linha aqui é de verdade ou de mentirinha? Sai quando a gente imprime?". As crianças respondem levantando a mão e dizem qual tabela está caprichada e por quê.`,
      gabarito: `As linhas cinza-clarinhas são as de grade (de mentirinha, somem na impressão); as linhas pretas e fortes são as bordas de verdade. A criança acerta quando aponta a tabela com bordas pretas como a caprichada e diz que a borda não some quando imprime.`,
    },
    {
      titulo: `Desenhando a moldura no papel`,
      tipo: `Desenho / papel`,
      tempo: `10 min`,
      guiaProfessor: `Antes do computador, peça que desenhem a tabela com régua numa folha quadriculada. Isso faz a criança sentir, com a mão, o que é "passar a borda" em cada caixinha.`,
      atividade: `Numa folha quadriculada, a criança escreve três palavrinhas (por exemplo: nome de três brinquedos) em três caixinhas e, com a régua e a canetinha preta, contorna cada caixinha fazendo a moldura. Depois pinta o cabeçalho de uma cor.`,
      gabarito: `Cada uma das três caixinhas deve ter a linha preta em volta (a borda) e o cabeçalho pintado. Está correto quando dá para ver claramente onde cada caixinha começa e termina, com a moldura fechada em todos os lados.`,
    },
    {
      titulo: `Colocando Todas as bordas`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Guie passo a passo no projetor e circule ajudando o gesto "seleciona as células, abre o botão de Bordas, escolhe Todas as bordas". Garanta que a criança selecione todas as células com conteúdo, não só uma.`,
      atividade: `Na própria tabelinha, a criança arrasta o mouse para selecionar todas as células que têm palavras. No Excel, clica na setinha do botão de Bordas (Página Inicial) e escolhe "Todas as bordas"; no Google Planilhas, clica no ícone de Bordas na barra de cima e escolhe a grade cheia. Confere se a moldura apareceu em todas as caixinhas.`,
      gabarito: `Todas as células com conteúdo ficam com linha preta em volta, formando a grade da tabela. Está certo quando não sobra nenhuma palavra sem moldura e a tabela inteira fica contornada.`,
    },
    {
      titulo: `Cabeçalho fortão`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Agora a criança junta negrito, tamanho de letra e cor no cabeçalho. Mostre onde fica o "N" do negrito e o numerozinho do tamanho da letra. Reaproveite as cores da aula anterior.`,
      atividade: `A criança seleciona só a linha do cabeçalho. Clica no "N" para deixar em negrito, aumenta um pouco o tamanho da letra no numerozinho ao lado da fonte e pinta o fundo do cabeçalho com uma cor (balde de tinta). Compara o cabeçalho com as linhas de baixo.`,
      gabarito: `O cabeçalho fica com letra em negrito (mais forte e escura), um pouco maior que as outras linhas e com cor de fundo. Está correto quando o cabeçalho se destaca claramente das linhas de dados, sem a palavra estourar para fora da célula.`,
    },
    {
      titulo: `Desafio da tabela mais caprichada`,
      tipo: `Desafio`,
      tempo: `14 min`,
      guiaProfessor: `Desafio para quem dominou os passos. Peça que combinem tudo do mês — borda, cor e negrito — e ainda capriquem numa borda diferente. Deixe que mostrem para um colega ao final.`,
      atividade: `A criança deixa a tabela inteira com "Todas as bordas", o cabeçalho colorido e em negrito e, como extra, experimenta uma borda mais grossa ou de cor diferente no contorno de fora da tabela (no menu do botão de Bordas, escolhendo "Borda externa" e mudando a espessura/cor). Depois mostra a tabela para um colega e conta o que fez.`,
      gabarito: `A tabela final precisa ter: grade completa de bordas, cabeçalho colorido e em negrito, e um contorno externo destacado. Está completo quando a criança consegue nomear pelo menos três caprichos que aplicou (borda, cor e negrito) e a tabela está organizada e fácil de ler.`,
    },
  ],
};
