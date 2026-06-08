import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Gráficos e cartões que contam a história",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Aprender a escolher o gráfico certo para cada pergunta e a criar cartões de número que destacam totais importantes no Power BI.`,
  descricao: `Na aula passada o aluno importou uma tabela do Excel para o Power BI. Agora chegou a melhor parte: transformar aqueles números em uma história fácil de entender. Um dashboard não é só "ter gráficos bonitos"; é responder perguntas com clareza. Cada visual deve responder uma pergunta. Por isso, antes de clicar em qualquer botão, o aluno aprende a pensar: "que pergunta este gráfico responde?".

Nesta aula trabalhamos três tipos de gráfico que cobrem quase tudo que um adolescente vai precisar. O gráfico de barras compara categorias (por exemplo, qual produto vendeu mais). O gráfico de pizza mostra partes de um todo (qual fatia cada categoria representa de 100 por cento). O gráfico de linha mostra evolução no tempo (vendas crescendo ou caindo mês a mês). Escolher errado confunde quem lê; escolher certo deixa a resposta óbvia.

Além dos gráficos, o aluno conhece o cartão (em inglês "card"), um visual simples que mostra um número grande e isolado, como "Total de Vendas: R$ 45.000" ou "Média por Dia: R$ 1.500". Cartões são ótimos para destacar os indicadores mais importantes do painel, aqueles que o chefe ou o professor olha primeiro.

Por fim, cuidamos do acabamento básico de cada visual: dar um título claro (que diga exatamente o que o gráfico mostra) e escolher cores legíveis (com bom contraste, sem misturar cores que se confundem). Um gráfico sem título é como um livro sem capa: ninguém sabe do que se trata. Ao final, o aluno terá uma página com três gráficos e dois cartões, todos com título e cores pensadas para serem lidos com facilidade.`,
  materiais: [
    `Computadores com Microsoft Excel e Power BI Desktop instalados e abertos`,
    `Projetor ou TV para o professor demonstrar passo a passo na tela grande`,
    `Arquivo de exemplo "vendas-loja.xlsx" com colunas Data, Produto, Categoria, Quantidade e Valor (já importado na aula 1, ou pronto para importar)`,
    `Arquivo .pbix da aula anterior já com os dados carregados, como ponto de partida`,
    `Conta Microsoft (não é obrigatória para o Power BI Desktop, mas útil para salvar na nuvem)`,
    `Folha impressa "Que gráfico usar?" com as três perguntas-guia (comparar, parte do todo, evolução no tempo)`,
    `Fones de ouvido opcionais para vídeos curtos de apoio`,
  ],
  conceitosChave: [
    `Gráfico de barras — visual que compara o tamanho de categorias diferentes; quanto maior a barra, maior o valor.`,
    `Gráfico de pizza — visual que mostra partes de um todo; cada fatia é a porcentagem de uma categoria dentro de 100 por cento.`,
    `Gráfico de linha — visual que mostra como um valor muda ao longo do tempo, ligando os pontos com uma linha.`,
    `Cartão (card) — visual que exibe um único número grande e em destaque, como um total ou uma média.`,
    `Medida de resumo — cálculo automático que junta vários valores em um só, como Soma (total) ou Média.`,
    `Título do visual — texto no topo do gráfico que explica em poucas palavras o que ele mostra.`,
    `Legibilidade — qualidade de um visual fácil de ler, com bom contraste de cores e texto de tamanho adequado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Power BI. O segredo desta aula é uma ideia simples: cada gráfico responde a uma pergunta. Decore estas três regras e você ensina com segurança. Comparar categorias use barras. Mostrar parte de um todo use pizza. Mostrar evolução no tempo use linha. O cartão serve para destacar um número importante sozinho.

No Power BI Desktop, os visuais ficam no painel "Visualizações", à direita. Você arrasta campos da tabela (painel "Dados", mais à direita ainda) para dentro de cada visual. Para esta aula use o arquivo .pbix da aula 1, que já tem a tabela de vendas carregada. Abra-o antes da aula e confira se as colunas Produto, Categoria, Data e Valor aparecem no painel "Dados".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre no projetor uma tabela cheia de números e pergunte "qual produto vendeu mais?". Ninguém responde rápido olhando números. Mostre então o mesmo dado em barras: a resposta salta aos olhos. Essa é a mágica da aula. Relembre que na aula 1 eles importaram os dados.

Conteúdo novo guiado (15 min): no Power BI, clique no ícone de gráfico de barras no painel "Visualizações". Um visual vazio aparece. Arraste o campo "Produto" para o campo "Eixo Y" e "Valor" para "Eixo X" (ou Valores). Pronto: barras comparando produtos. Em seguida, mostre o cartão: clique no ícone de cartão (um retângulo com 123), arraste "Valor" para "Campos"; ele mostra a soma total. Clique na seta ao lado do campo e escolha "Média" para virar média. Demonstre como dar título: com o visual selecionado, vá em "Formatar visual" (ícone de pincel), abra "Título geral" e digite um nome claro, como "Vendas por produto".

Mão na massa (25 min): cada aluno cria, na própria tela, três visuais e dois cartões. Visual 1: barras de "Valor por Produto". Visual 2: pizza de "Valor por Categoria" (ícone de pizza, arraste Categoria para Legenda e Valor para Valores). Visual 3: linha de "Valor por Data" (ícone de linha, arraste Data para Eixo X e Valor para Eixo Y). Cartão 1: total de vendas. Cartão 2: média de vendas. Peça que todos deem título a cada visual e escolham cores legíveis em "Formatar visual", seção "Cores".

Desafio e compartilhar (10 min): cada aluno escolhe o gráfico de que mais gostou e explica para a turma qual pergunta ele responde. Isso fixa a ideia de "gráfico igual a resposta".

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Barras são como uma corrida: quem chega mais longe (barra maior) venceu. Pizza é uma pizza de verdade: cada amigo pega uma fatia, e a soma das fatias dá a pizza inteira. Linha é como um gráfico de videogame mostrando seus pontos subindo ou caindo ao longo das fases. Cartão é o placar grande do jogo, o número que todo mundo quer ver primeiro.

Repita sempre: "antes de criar o gráfico, qual é a pergunta?". Se a pergunta é "quem é o maior?", use barras. Se é "quanto cada um representa do total?", use pizza. Se é "está subindo ou caindo?", use linha.

## Erros comuns e como ajudar

Pizza com muitas categorias: se houver mais de cinco ou seis fatias, fica ilegível. Oriente a usar barras nesses casos. Linha sem dado de tempo: se o aluno colocar Produto no eixo da linha, não faz sentido; linha precisa de datas. Cartão mostrando contagem em vez de soma: confira se o campo está como "Soma" e não "Contagem" (clique na seta do campo para trocar). Visual sem título: lembre que título não é enfeite, é o que diz do que se trata. Cores fracas: peça contraste; texto cinza claro em fundo branco ninguém lê.`,
  exercicios: [
    {
      titulo: `Três gráficos, três perguntas`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Circule pela sala conferindo se cada aluno escolheu o tipo certo para cada pergunta. Corrija na hora quem trocou os tipos.`,
      atividade: `No Power BI, crie três visuais a partir da tabela de vendas: um de barras de "Valor por Produto", um de pizza de "Valor por Categoria" e um de linha de "Valor por Data". Arraste os campos certos para cada visual.`,
      gabarito: `Barras: Produto no Eixo Y e Valor no Eixo X. Pizza: Categoria na Legenda e Valor em Valores. Linha: Data no Eixo X e Valor no Eixo Y. Os três visuais devem aparecer preenchidos na página.`,
    },
    {
      titulo: `Dois cartões de destaque`,
      tipo: `desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre que o mesmo campo "Valor" pode virar total ou média. Ajude quem não encontra a opção de trocar a medida na setinha do campo.`,
      atividade: `Crie dois cartões: um mostrando o total de vendas e outro mostrando a média de vendas. Depois, dê um título claro a cada cartão usando "Formatar visual".`,
      gabarito: `Cartão 1: campo Valor com medida "Soma", título "Total de Vendas". Cartão 2: campo Valor com medida "Média", título "Média de Vendas". Ambos exibem um número grande com título acima.`,
    },
    {
      titulo: `Qual gráfico responde?`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Entregue ou leia as três perguntas. Cada dupla decide o tipo de gráfico e justifica. Peça que defendam a escolha com a regra comparar, parte do todo ou evolução.`,
      atividade: `Em dupla, leiam três perguntas: (1) "Qual categoria vende mais?" (2) "Quanto cada categoria representa do total de vendas?" (3) "As vendas estão subindo ou caindo ao longo dos meses?". Para cada uma, escrevam qual gráfico usariam e por quê.`,
      gabarito: `(1) Barras, porque compara o tamanho das categorias. (2) Pizza, porque mostra a fatia de cada categoria dentro de 100 por cento. (3) Linha, porque mostra a evolução no tempo.`,
    },
    {
      titulo: `Acabamento que se lê de longe`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Projete dois gráficos: um sem título e com cores fracas, outro com título claro e cores fortes. Conduza a conversa para a turma perceber por que o segundo é melhor. Anote as conclusões no quadro.`,
      atividade: `Em roda, comparem os dois gráficos projetados pelo professor e discutam: qual é mais fácil de entender e por quê? Listem pelo menos três coisas que tornam um gráfico legível.`,
      gabarito: `O gráfico com título claro e cores fortes vence. Itens esperados: título que explica o conteúdo, cores com bom contraste, texto de tamanho legível, poucas cores parecidas e visual sem poluição. Qualquer três desses valem.`,
    },
    {
      titulo: `Mini-painel da minha loja`,
      tipo: `projeto curto`,
      tempo: `14 minutos`,
      guiaProfessor: `Este exercício junta tudo. Deixe os alunos escolherem um tema (loja de doces, de jogos, de roupas). Eles reutilizam a tabela, mas renomeiam títulos para o tema. Confira título e cores em cada visual antes de encerrar.`,
      atividade: `Monte numa única página um mini-painel com os três gráficos (barras, pizza e linha) e os dois cartões (total e média). Dê a cada visual um título claro ligado ao tema da sua loja imaginária e escolha cores legíveis para todos.`,
      gabarito: `Página com cinco visuais: barras, pizza, linha, cartão de total e cartão de média. Todos com título escrito e cores de bom contraste. Exemplo de títulos: "Vendas por Produto", "Fatia por Categoria", "Vendas por Mês", "Total de Vendas", "Média de Vendas".`,
    },
  ],
};
