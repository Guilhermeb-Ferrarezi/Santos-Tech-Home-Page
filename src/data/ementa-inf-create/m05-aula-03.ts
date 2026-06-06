import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Funções essenciais no Planilhas",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a usar as funções básicas do Google Planilhas — SOMA, MÉDIA, MÁXIMO e MÍNIMO — montando fórmulas com o sinal de igual e selecionando intervalos com o mouse para que os resultados se atualizem sozinhos.`,
  descricao: `Até agora o aluno já abriu o Google Planilhas, digitou dados em células e organizou suas tabelas. Nesta aula ele dá um passo gigante: faz a planilha trabalhar por ele. Em vez de somar números de cabeça ou na calculadora, o aluno aprende a escrever uma fórmula que a planilha calcula sozinha — e, melhor ainda, que se atualiza automaticamente quando algum número muda. Esse é o verdadeiro superpoder das planilhas e o momento em que muitos adolescentes percebem por que essa ferramenta é tão usada no mundo todo.

O ponto de partida é o sinal de igual. Toda fórmula no Google Planilhas começa com o sinal de igual, e é ele que avisa a planilha: "o que vem agora não é texto, é uma conta para você fazer". A partir daí o aluno conhece quatro funções essenciais. A SOMA junta vários números de uma vez. A MÉDIA calcula o valor médio de um conjunto, como a média de notas. O MÁXIMO encontra o maior número e o MÍNIMO encontra o menor. Com essas quatro funções já é possível analisar uma lista de notas, de gastos ou de pontos de um jogo.

O segredo prático da aula é o intervalo: em vez de digitar célula por célula, o aluno aprende a selecionar um grupo de células arrastando o mouse, o que cria algo como A2:A8 dentro da função. Isso economiza tempo e evita erros. Para fixar a ideia de atualização automática, o aluno muda um número da tabela e vê o resultado da função mudar na hora, sem refazer nada. Esse momento costuma arrancar um "uau" da turma.

Esta é a terceira aula do mês de Google Planilhas. O aluno já sabe criar e organizar dados (Aulas 1 e 2) e agora aprende a calcular sobre eles. Na próxima aula a turma vai colaborar ao vivo na mesma planilha; por isso, dominar as funções agora deixa todos prontos para construir tabelas úteis em equipe.`,
  materiais: [
    `Computadores com o Google Planilhas aberto no navegador (Chrome) e cada aluno já logado na conta Google da escola`,
    `Projetor ou tela compartilhada para o professor demonstrar onde clicar e como digitar as fórmulas`,
    `Planilha de exemplo pronta com uma tabela de notas ou de pontos de games (uma coluna de nomes e uma coluna de números), compartilhada com a turma`,
    `Conexão com a internet estável, já que o Google Planilhas funciona online`,
    `Lista no projetor com as quatro fórmulas modelo: =SOMA(A2:A8), =MÉDIA(A2:A8), =MÁXIMO(A2:A8), =MÍNIMO(A2:A8)`,
    `Caderno ou documento para o aluno anotar o que cada função faz e os resultados encontrados`,
  ],
  conceitosChave: [
    `Fórmula — conta que a planilha faz automaticamente; sempre começa com o sinal de igual digitado na célula.`,
    `Função — comando pronto com um nome, como SOMA ou MÉDIA, que faz um cálculo específico para você.`,
    `Sinal de igual — símbolo "=" que avisa a planilha que o que vem a seguir é um cálculo, e não um texto comum.`,
    `Intervalo — conjunto de células selecionadas de uma vez, escrito com dois pontos, por exemplo A2:A8 (da célula A2 até a A8).`,
    `SOMA — função que junta e soma todos os números de um intervalo.`,
    `MÉDIA — função que calcula o valor médio de um intervalo, somando os números e dividindo pela quantidade.`,
    `Atualização automática — quando você muda um número da tabela, o resultado da fórmula muda sozinho, sem precisar refazer a conta.`,
  ],
  treinamento: `## O que o professor precisa saber

No Google Planilhas, toda fórmula começa com o sinal de igual ("="). Você clica numa célula vazia, digita "=", o nome da função e abre parênteses, por exemplo =SOMA(. Em seguida seleciona com o mouse o intervalo de células que quer calcular — a planilha preenche sozinha algo como A2:A8 —, fecha o parênteses e aperta Enter. As quatro funções da aula seguem a mesma estrutura: =SOMA(intervalo), =MÉDIA(intervalo), =MÁXIMO(intervalo) e =MÍNIMO(intervalo). O Google Planilhas aceita os nomes em português (MÉDIA, MÁXIMO, MÍNIMO) e também em inglês (AVERAGE, MAX, MIN); enquanto você digita, aparece uma listinha de sugestões e uma caixa de ajuda explicando a função. Um detalhe importante: o intervalo usa dois pontos (A2:A8 significa "da A2 até a A8"). Teste a sua planilha de exemplo antes da aula e confira se a coluna de números tem mesmo números, e não texto.

## Passo a passo da aula

Aquecimento (10 min): Retome a Aula 2 perguntando "Como a gente organizou os dados na planilha?". Mostre no projetor a tabela de notas ou de pontos de games. Pergunte: "Quanto dá a soma de tudo isso?" e deixe a turma tentar de cabeça. Então diga: "E se a planilha fizesse isso sozinha, na hora?". Apresente o objetivo do dia.

Conteúdo novo guiado (15 min): No projetor, clique numa célula vazia abaixo da coluna de números. Digite "=SOMA(", arraste o mouse selecionando os números, feche o parênteses e aperte Enter. Mostre o resultado aparecendo. Repita com =MÉDIA, =MÁXIMO e =MÍNIMO na mesma coluna. Por fim, mude um número lá em cima na tabela e mostre, com destaque, que os resultados mudaram sozinhos. Explique o sinal de igual, o nome da função e o intervalo com dois pontos.

Mão na massa (25 min): Cada aluno, na própria planilha de exemplo, cria as quatro fórmulas em células diferentes: a soma, a média, o maior e o menor número. Ao lado de cada resultado, anota com suas palavras o que aquela função fez. Circule pela sala conferindo se todos começaram com "=" e se selecionaram o intervalo certo.

Desafio e compartilhar (10 min): Peça que cada aluno mude um número da tabela e observe quais resultados mudaram e quais não. Reúna a turma e pergunte: "Por que o máximo às vezes não muda quando eu altero um número pequeno?".

## Como explicar de forma clara

Use a imagem de uma "calculadora mágica embutida na tabela". O sinal de igual é o botão que liga essa calculadora: sem ele, a planilha acha que você só está escrevendo um texto. A função é uma ordem com nome: SOMA quer dizer "junte tudo", MÉDIA quer dizer "ache o valor do meio", MÁXIMO é "o maior" e MÍNIMO é "o menor". O intervalo, com os dois pontos, é como dizer "do primeiro ao último": A2:A8 é "da casa A2 até a casa A8". Para a atualização automática, compare com um placar de videogame que muda sozinho quando alguém marca ponto: você não refaz a conta, a planilha refaz por você.

## Erros comuns e como ajudar

O erro mais comum é esquecer o sinal de igual: a célula mostra o texto "SOMA(A2:A8)" em vez do resultado; peça para apagar e começar com "=". Outro é digitar os números dentro da fórmula em vez de selecionar as células, o que tira a atualização automática; incentive arrastar o mouse sobre o intervalo. Alguns esquecem de fechar o parênteses e a planilha avisa com erro; mostre como completar. Há quem selecione o intervalo errado, incluindo o título ou uma célula vazia, o que muda o resultado; oriente a conferir o A2:A8 que aparece. Por fim, células com texto no meio dos números atrapalham a média; garanta que a coluna tenha só números.`,
  exercicios: [
    {
      titulo: `Minha primeira SOMA`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja com a planilha de exemplo aberta e com a coluna de números visível. Demonstre uma vez no projetor: clicar na célula vazia, digitar "=SOMA(", arrastar o mouse pelos números, fechar o parênteses e apertar Enter. Circule conferindo se todos começaram a fórmula com o sinal de igual.`,
      atividade: `Na planilha de exemplo, clique numa célula vazia logo abaixo da coluna de números. Digite =SOMA( e, com o mouse, selecione todos os números da coluna; feche o parênteses e aperte Enter. Anote no caderno o valor da soma que apareceu.`,
      gabarito: `O aluno deve obter uma única célula com o total dos números da coluna. Considere correto se a fórmula começa com "=", usa SOMA com um intervalo (por exemplo =SOMA(A2:A8)) e o resultado mostra um número, não o texto da fórmula. Erro típico a corrigir: esquecer o sinal de igual ou digitar os números no lugar de selecionar as células.`,
    },
    {
      titulo: `As quatro funções da turma`,
      tipo: `Desafio individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Agora o aluno usa as quatro funções na mesma coluna, cada uma em sua célula. Reforce que o intervalo é o mesmo nas quatro fórmulas, muda só o nome da função. Lembre que os nomes em português levam acento (MÉDIA, MÁXIMO, MÍNIMO) e que a planilha sugere a função enquanto se digita.`,
      atividade: `Em quatro células diferentes, escreva uma fórmula em cada: =SOMA do intervalo, =MÉDIA do intervalo, =MÁXIMO do intervalo e =MÍNIMO do intervalo, sempre selecionando a mesma coluna de números. Ao lado de cada resultado, escreva com suas palavras o que aquela função fez.`,
      gabarito: `Espera-se quatro resultados corretos: a soma total, o valor médio, o maior número e o menor número da coluna. Considere correto quem montou as quatro fórmulas com o sinal de igual e o mesmo intervalo, obteve os quatro resultados e descreveu cada função (por exemplo: SOMA junta tudo, MÉDIA dá o valor do meio, MÁXIMO mostra o maior, MÍNIMO mostra o menor).`,
    },
    {
      titulo: `O número que muda sozinho`,
      tipo: `Atividade em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. O objetivo é fixar a atualização automática. Um aluno muda um número da tabela enquanto o outro observa quais resultados mudaram. Oriente-os a prever antes o que vai acontecer e depois conferir, anotando o antes e o depois.`,
      atividade: `Em dupla, com as quatro fórmulas já prontas, escolham um número da tabela e anotem os quatro resultados atuais (soma, média, máximo, mínimo). Agora mudem esse número para um valor bem maior e observem: quais resultados mudaram? Anotem o antes e o depois e expliquem por que o máximo mudou.`,
      gabarito: `Ao aumentar bastante um número, a SOMA e a MÉDIA sobem, e o MÁXIMO passa a ser esse novo número (se ele virou o maior); o MÍNIMO só muda se o número alterado era o menor. O ponto principal é a dupla perceber que os resultados se atualizam sozinhos, sem refazer as fórmulas. Considere correto se anotaram o antes e o depois e explicaram que o máximo mudou porque o novo número ficou o maior da lista.`,
    },
    {
      titulo: `Para que serve cada função?`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em círculo. Conduza pedindo exemplos do dia a dia para cada função, ligando às tabelas que eles criaram. O objetivo é fixar o sentido de cada função e a ideia do sinal de igual como "ligar a calculadora".`,
      atividade: `Discutam em grupo: em que situação real cada função ajudaria? Pensem em exemplos como a média das notas do bimestre, o gasto total da festa da turma, o maior número de pontos num campeonato de games e a menor temperatura da semana. Cada aluno dá um exemplo e diz qual função usaria.`,
      gabarito: `Pontos esperados: MÉDIA para média de notas; SOMA para o gasto total ou pontos somados; MÁXIMO para o maior valor (recorde de pontos, maior gasto); MÍNIMO para o menor valor (menor temperatura, menor nota). Espera-se também que lembrem que toda fórmula começa com o sinal de igual. Aceite qualquer exemplo coerente em que o aluno associe corretamente a situação à função.`,
    },
    {
      titulo: `Painel de notas da turma`,
      tipo: `Projeto curto`,
      tempo: `14 minutos`,
      guiaProfessor: `É a síntese da aula. Cada aluno monta uma pequena tabela própria e cria um painel com as quatro funções. Oriente a criarem rótulos ao lado de cada resultado (Total, Média, Maior, Menor) para o painel ficar claro. Ao final, peça que mostrem ao colega ao lado e testem a atualização automática.`,
      atividade: `Crie uma tabela com 5 a 8 valores (notas suas, pontos de um jogo ou gastos de uma lista). Em um cantinho, monte um painel com quatro resultados rotulados: Total (=SOMA), Média (=MÉDIA), Maior (=MÁXIMO) e Menor (=MÍNIMO), todos usando o intervalo da sua tabela. Depois, mude um valor e confira se o painel se atualizou sozinho.`,
      gabarito: `O painel deve ter os quatro resultados corretos para a tabela do aluno, cada um com seu rótulo (Total, Média, Maior, Menor) e cada fórmula começando com o sinal de igual e usando o intervalo certo. Considere completo se as quatro funções estão presentes e corretas, os rótulos deixam claro o que é cada número e, ao mudar um valor, o aluno mostra que os resultados se atualizaram automaticamente.`,
    },
  ],
};
