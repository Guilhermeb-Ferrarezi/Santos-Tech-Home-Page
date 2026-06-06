import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando minha tabela que calcula",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Começar o entregável do mês montando uma tabela com cabeçalho formatado, dados e bordas que calcula totais com SOMA e média com MÉDIA.`,
  descricao: `Esta é a aula em que tudo o que o aluno aprendeu no mês se junta numa única planilha de verdade. Até agora ele conheceu o mapa do Excel, aprendeu a usar linhas, colunas e abas, digitou dados, deixou a tabela bonita com cores e bordas e descobriu a magia das fórmulas com SOMA e MÉDIA. Agora chegou a hora de montar, do zero, a tabela que calcula sozinha. O aluno escolhe um tema que tenha a ver com a vida dele e constrói o esqueleto da planilha que será o entregável do mês.

O aluno vai escolher entre três temas práticos e divertidos: o controle da mesada (quanto recebeu, quanto gastou, quanto sobrou), as notas das matérias da escola (com a média do bimestre) ou um placar de jogo ou campeonato (pontos por rodada e total). Qualquer um dos três usa exatamente as mesmas ferramentas, então o professor consegue ajudar a turma toda mesmo com temas diferentes em cada computador.

O coração da aula é transformar uma tabela parada numa tabela viva. Uma tabela viva é aquela em que, se você muda um número, o total muda sozinho na mesma hora. Isso acontece porque o aluno não vai digitar o resultado da conta: ele vai digitar a fórmula =SOMA() para o total e =MÉDIA() para a média, e deixar o computador calcular. É aqui que o aluno percebe que o Excel não é uma folha de papel digital, e sim uma calculadora gigante e organizada.

Nesta aula o foco é montar a estrutura completa e fazer os cálculos funcionarem. O capricho final, a revisão e a apresentação ficam para a próxima aula, que fecha o mês. Por isso, o professor deve incentivar o aluno a salvar o arquivo e a deixar tudo nomeado e organizado para continuar depois.`,
  materiais: [
    `Computadores com Excel instalado e abertos, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar cada passo`,
    `Arquivo de exemplo pronto (modelo-mesada.xlsx) já calculando, para mostrar o resultado final`,
    `Folha impressa com os três temas (mesada, notas, placar) e as colunas sugeridas de cada um`,
    `Conta da escola para salvar o arquivo na pasta da turma (OneDrive ou pasta local combinada)`,
    `Cartão de atalhos na parede ou na mesa: Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S`,
  ],
  conceitosChave: [
    `Entregável — o trabalho final do mês que o aluno monta e apresenta; aqui é a tabela que calcula.`,
    `Estrutura da tabela — o esqueleto da planilha: cabeçalho, colunas de dados e linha de total.`,
    `Cabeçalho — a primeira linha, com os títulos de cada coluna, geralmente em negrito e com cor.`,
    `SOMA — função que junta vários números de um intervalo; escreve-se =SOMA(B2:B6).`,
    `MÉDIA — função que calcula a média de um intervalo de números; escreve-se =MÉDIA(B2:B6).`,
    `Intervalo — o conjunto de células entre duas pontas, escrito com dois pontos, como B2:B6.`,
    `Tabela viva — tabela em que mudar um número muda o total automaticamente, porque há fórmulas.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é a montagem do entregável. O aluno já viu SOMA e MÉDIA na aula anterior; aqui ele junta tudo numa planilha própria. Você não precisa ser especialista em Excel: basta seguir os passos abaixo e demonstrar no projetor. Antes da aula, abra o arquivo de exemplo modelo-mesada.xlsx e confira se os totais mudam quando você troca um número. Tenha clara a regra de ouro: o resultado da conta nunca é digitado, é calculado por uma fórmula que começa com o sinal de igual.

## Passo a passo da aula

Aquecimento (10 min): abra o exemplo no projetor. Mude um valor e mostre o total mudando sozinho. Pergunte: como o computador adivinhou? Conduza até a resposta: porque ali tem uma fórmula. Relembre =SOMA() e =MÉDIA() escritas no quadro.

Conteúdo novo guiado (15 min): apresente os três temas. Diga que todos têm a mesma receita: cabeçalho, dados e linha de total. No projetor, monte o esqueleto do tema mesada. Na célula A1 digite Mês, em B1 digite Recebi, em C1 digite Gastei. Selecione A1 até C1, clique em Negrito (botão N, na aba Página Inicial) e aplique uma cor de preenchimento clicando na setinha ao lado do balde de tinta. Digite duas ou três linhas de dados de exemplo. Selecione a tabela toda e aplique Todas as Bordas pela setinha ao lado do ícone de bordas.

Mão na massa (25 min): cada aluno escolhe um tema e monta o esqueleto: cabeçalho em negrito e colorido, três a cinco linhas de dados e bordas. Em seguida, na linha abaixo dos dados, digita a palavra Total na primeira coluna e, na célula de número, escreve =SOMA( , depois clica e arrasta sobre os números da coluna, fecha o parêntese e aperta Enter. Para a média (notas), digita =MÉDIA( e arrasta sobre as notas. Circule pela sala conferindo o sinal de igual no começo. Lembre todos de salvar com Ctrl+S logo no início e dar um nome claro, como mesada-joao.

Desafio e compartilhar (10 min): peça para cada aluno mudar um número e ver o total se ajustar sozinho. Quem terminar cria uma segunda média ou um segundo total. Dois ou três voluntários mostram a tela e explicam qual fórmula usaram.

## Como explicar de forma clara

Use a imagem da tabela viva: uma tabela comum é como um cartaz; a tabela com fórmula é como um robozinho que refaz a conta toda vez que você muda um número. Diga a frase de ouro o tempo todo: resultado de conta a gente não digita, a gente manda o Excel calcular. Para o intervalo, use a ideia de do primeiro ao último: B2:B6 quer dizer da célula B2 até a B6, sem pular nenhuma. Compare o sinal de igual a apertar o botão ligar da calculadora: sem ele, o Excel acha que é só um texto e não calcula.

## Erros comuns e como ajudar

O erro mais comum é esquecer o sinal de igual; a célula mostra o texto SOMA(B2:B6) sem calcular. Peça para clicar na célula, apertar a tecla de igual no início e dar Enter. Outro erro é incluir o cabeçalho no intervalo, como =SOMA(B1:B6), e dar erro ou número errado; mostre que o intervalo começa no primeiro número, não no título. Há quem digite o resultado na mão; explique de novo a frase de ouro e troque pela fórmula. Alguns esquecem de fechar o parêntese: o Excel costuma sugerir o conserto, basta aceitar com Enter. Por fim, muitos esquecem de salvar; combine que todo mundo aperta Ctrl+S assim que escolhe o tema e repete de vez em quando.`,
  exercicios: [
    {
      titulo: `O esqueleto da minha tabela`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno escolha um tema antes de começar. Confira se o cabeçalho ficou na primeira linha e se as colunas fazem sentido para o tema escolhido.`,
      atividade: `Escolha um tema (mesada, notas ou placar). Crie o cabeçalho na linha 1 com os títulos das colunas e digite pelo menos três linhas de dados de exemplo. Salve o arquivo com seu nome usando Ctrl+S.`,
      gabarito: `Exemplo para mesada: A1 Mês, B1 Recebi, C1 Gastei; depois três linhas como Janeiro 50 20, Fevereiro 50 35, Março 50 10. O arquivo aparece salvo com o nome do aluno (ex.: mesada-ana). Cabeçalho na linha 1 e dados a partir da linha 2.`,
    },
    {
      titulo: `Cabeçalho bonito e com bordas`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor onde ficam o botão Negrito, o balde de preenchimento e o ícone de bordas, todos na aba Página Inicial. Lembre de selecionar antes de formatar.`,
      atividade: `Selecione o cabeçalho e deixe-o em negrito com uma cor de preenchimento. Depois selecione a tabela inteira e aplique Todas as Bordas.`,
      gabarito: `O cabeçalho fica em negrito e com cor de fundo; toda a tabela mostra linhas de grade visíveis (bordas) ao redor e entre as células. Passos: selecionar A1:C1, clicar em N e na cor; selecionar a tabela toda e escolher Todas as Bordas na setinha ao lado do ícone de bordas.`,
    },
    {
      titulo: `O total que se calcula sozinho`,
      tipo: `desafio`,
      tempo: `9 min`,
      guiaProfessor: `Circule conferindo o sinal de igual no início e se o intervalo pega só os números, sem o cabeçalho. Peça para o aluno mudar um valor e observar o total mudar.`,
      atividade: `Abaixo dos dados, escreva Total na primeira coluna. Na célula de número, use =SOMA() arrastando sobre a coluna de valores. Depois mude um número e veja o total se ajustar.`,
      gabarito: `Fórmula no formato =SOMA(B2:B6) que devolve a soma da coluna. Ao trocar um valor da coluna, o total muda automaticamente, sem o aluno apagar nada. O intervalo começa na primeira linha de dados, não no cabeçalho.`,
    },
    {
      titulo: `Conferindo a tabela do colega`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Oriente que a conferência é gentil: apontar o que está bom e sugerir um ajuste. Foque em três pontos: sinal de igual, intervalo correto e bordas.`,
      atividade: `Troque de lugar com o colega. Confira a tabela dele respondendo: tem sinal de igual na fórmula? O intervalo pega só os números? Tem cabeçalho formatado e bordas? Anote uma sugestão.`,
      gabarito: `A dupla identifica corretamente se cada item está presente. Exemplo de retorno: a fórmula começa com igual, certo; o intervalo está B2:B6, certo; falta colorir o cabeçalho, sugestão dada. Cada aluno sai com pelo menos uma melhoria anotada.`,
    },
    {
      titulo: `Minha tabela que calcula de verdade`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Este é o avanço do entregável. Peça que cada aluno deixe a tabela completa e salva, pronta para a apresentação da aula 8. Quem terminar adiciona uma média.`,
      atividade: `Finalize a estrutura do seu entregável: cabeçalho formatado, dados, bordas e a linha de Total com =SOMA(). Se o tema for notas, acrescente uma célula de média com =MÉDIA(). Salve com Ctrl+S.`,
      gabarito: `Planilha com cabeçalho em negrito e cor, três a cinco linhas de dados, bordas em toda a tabela e linha de Total funcionando com =SOMA(B2:B6). No tema notas, há também =MÉDIA(B2:B6) devolvendo a média. Arquivo salvo com nome claro, pronto para apresentar.`,
    },
  ],
};
