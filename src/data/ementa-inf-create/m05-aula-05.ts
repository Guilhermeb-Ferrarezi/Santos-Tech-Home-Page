import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Dos números aos gráficos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a transformar uma tabela de números em um gráfico de colunas ou de pizza no Google Planilhas, escolhendo o tipo certo para contar a história dos dados de forma visual e clara.`,
  descricao: `Até agora a turma aprendeu a organizar dados e a usar fórmulas no Google Planilhas. Nesta aula damos o próximo passo: transformar esses números em imagens. Um gráfico é uma forma visual de mostrar dados — em vez de o aluno ler uma coluna cheia de números, ele bate o olho e entende na hora quem é maior, quem é menor e como as coisas se comparam. É a diferença entre ler uma lista de notas e ver, num relance, quem foi melhor.

O Google Planilhas cria gráficos quase sozinho. O aluno seleciona as células com os dados, clica em Inserir e depois em Gráfico, e a ferramenta já sugere um tipo. A grande sacada da aula é entender que cada tipo de gráfico conta uma história diferente. O gráfico de colunas serve para comparar quantidades entre categorias (por exemplo, quantos alunos preferem cada esporte). O gráfico de pizza serve para mostrar partes de um todo, ou seja, fatias de 100 por cento (por exemplo, qual a porcentagem da mesada que vai para cada gasto).

Escolher o tipo errado é o erro mais comum e por isso o coração desta aula é a decisão: "essa informação é uma comparação entre itens ou são fatias de um total?". Se for comparação, colunas. Se for parte de um todo, pizza. O aluno também vai aprender a abrir o painel do Editor de gráficos, onde pode trocar o tipo a qualquer momento e dar um título ao gráfico.

Esta é uma aula muito visual e divertida, ótima para alunos de 10 a 15 anos, porque o resultado aparece na tela na hora. A próxima aula (Aula 6) vai aprofundar a personalização — cores, legendas e rótulos. Aqui o foco é criar o gráfico e escolher o tipo certo; não precisa deixar bonito ainda.`,
  materiais: [
    `Computadores com o Google Planilhas aberto, um para cada aluno (até 10 alunos)`,
    `Conta Google ativa e logada em cada computador (já criada nas aulas anteriores)`,
    `Projetor ou tela grande para o professor demonstrar passo a passo`,
    `Planilha de exemplo pronta com duas tabelas: "Esporte favorito da turma" e "Como gasto minha mesada" (compartilhada via Google Drive)`,
    `Conexão com a internet estável (o Google Planilhas funciona na nuvem)`,
    `Lousa ou slide com a pergunta-guia: "Comparação entre itens? Colunas. Partes de um todo? Pizza."`,
    `Fones de ouvido opcionais, caso queira mostrar um vídeo curto de apoio`,
  ],
  conceitosChave: [
    `Gráfico — desenho que mostra números de forma visual, para entender os dados num relance.`,
    `Gráfico de colunas — barras em pé que comparam quantidades entre categorias; quanto mais alta a coluna, maior o valor.`,
    `Gráfico de pizza — círculo dividido em fatias que mostram as partes de um todo (100 por cento).`,
    `Intervalo de dados — o conjunto de células selecionadas que vira o gráfico, geralmente os rótulos e os números.`,
    `Editor de gráficos — painel lateral do Google Planilhas onde você troca o tipo do gráfico, muda o título e ajusta os dados.`,
    `Título do gráfico — frase no topo que explica o que o gráfico está mostrando.`,
    `Legenda — pequena lista de cores que diz qual fatia ou coluna representa cada item.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. No Google Planilhas, um gráfico nasce em três passos: selecionar os dados, clicar em "Inserir" e depois em "Gráfico". A ferramenta cria um gráfico automático e abre o painel "Editor de gráficos" à direita. Nesse painel, na aba "Configurar", existe o menu "Tipo de gráfico" — é ali que você troca entre colunas e pizza. Memorize a regra de ouro da aula: comparação entre itens pede colunas; partes de um todo pedem pizza. Tenha a planilha de exemplo já aberta no seu computador antes de a turma chegar, com duas tabelas pequenas: uma de "Esporte favorito" (vira colunas) e uma de "Como gasto minha mesada" (vira pizza).

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre no projetor a tabela "Esporte favorito da turma" só com números. Pergunte: "Quem consegue dizer rápido qual esporte ganhou?" Eles vão demorar. Então revele o gráfico de colunas pronto e pergunte de novo. A resposta é instantânea. Esse contraste vende a aula inteira.

Conteúdo novo guiado (15 min): com a turma olhando o projetor, selecione a tabela toda (clique na primeira célula e arraste até a última, ou use o nome do intervalo). Clique no menu "Inserir", no topo, e escolha "Gráfico". Mostre que apareceu um gráfico e o painel "Editor de gráficos" à direita. Abra "Tipo de gráfico" e mostre as opções. Escolha "Coluna". Depois faça o caminho inverso com a tabela da mesada: insira o gráfico e troque para "Pizza", explicando por que mudou. Dê um título clicando duas vezes no texto do topo do gráfico.

Mão na massa (25 min): cada aluno abre a planilha de exemplo (faça uma cópia em "Arquivo" e "Fazer uma cópia" para cada um, ou compartilhe o arquivo). Tarefa: criar o gráfico de colunas da tabela de esportes e o gráfico de pizza da tabela de mesada, dar título aos dois e arrastá-los para um canto livre da planilha. Circule pela sala. Quem terminar cedo recebe o desafio de trocar o tipo de um gráfico e observar como a história muda.

Desafio e compartilhar (10 min): peça que cada aluno escolha o gráfico de que mais gostou e mostre para o colega ao lado, explicando em uma frase o que o gráfico conta. Encerre relembrando a pergunta-guia na lousa.

## Como explicar de forma clara

Use a frase: "Números contam a verdade, mas o gráfico conta a história rápido." Compare colunas a um campeonato: a coluna mais alta é o campeão. Compare a pizza a dividir uma pizza de verdade entre amigos: cada fatia é a parte de um. Sempre faça a pergunta antes de criar: "Isso é uma disputa entre itens (colunas) ou são pedaços de um total (pizza)?" Repita essa pergunta várias vezes; ela é o aprendizado real da aula, mais importante que os cliques.

## Erros comuns e como ajudar

O erro número um é selecionar só os números e esquecer a coluna de rótulos (os nomes); aí o gráfico fica sem identificar nada. Mostre que a seleção precisa incluir os nomes e os números juntos. O erro número dois é usar pizza para comparar coisas que não somam 100 por cento — por exemplo, alturas de pessoas. Reforce: pizza só quando for parte de um todo. O terceiro erro é perder o painel "Editor de gráficos"; basta clicar com o botão direito no gráfico e escolher "Editar gráfico" para ele voltar. Por fim, alguns alunos apagam o gráfico sem querer ao clicar fora; lembre-os de usar "Desfazer" com o atalho Ctrl mais Z.`,
  exercicios: [
    {
      titulo: `Meu primeiro gráfico de colunas`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno selecione a tabela inteira, incluindo os nomes dos esportes e os números. Caminhe pela sala conferindo a seleção antes de eles clicarem em Inserir.`,
      atividade: `Na tabela "Esporte favorito da turma", selecione os dados (nomes e números), clique em "Inserir" e depois em "Gráfico". Se o tipo não for coluna, abra o "Editor de gráficos" e troque "Tipo de gráfico" para "Coluna".`,
      gabarito: `O aluno tem um gráfico de colunas em que cada esporte vira uma barra em pé. O esporte com mais votos tem a coluna mais alta. O caminho correto foi Inserir, depois Gráfico, e o tipo "Coluna" no Editor de gráficos.`,
    },
    {
      titulo: `Pizza ou colunas?`,
      tipo: `desafio individual`,
      tempo: `8 min`,
      guiaProfessor: `Este exercício treina a decisão, não os cliques. Leia cada situação em voz alta e dê tempo para o aluno responder antes de revelar. Reforce a pergunta-guia.`,
      atividade: `Para cada situação, escreva se o melhor gráfico é "colunas" ou "pizza": 1) Quantos livros cada amigo leu no ano. 2) Que fatia do dia você passa estudando, dormindo e brincando. 3) Notas de quatro provas suas. 4) Em que cada parte da sua mesada é gasta.`,
      gabarito: `1) Colunas (comparação entre amigos). 2) Pizza (partes do total de um dia). 3) Colunas (comparação entre provas). 4) Pizza (partes de um total, a mesada). O critério é: comparar itens pede colunas; partes de um todo pedem pizza.`,
    },
    {
      titulo: `A pizza da mesada`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Aqui o aluno cria o gráfico de pizza e dá um título. Quem esquecer o título, peça que clique duas vezes no texto do topo do gráfico para editar.`,
      atividade: `Na tabela "Como gasto minha mesada", crie um gráfico. No "Editor de gráficos", escolha "Tipo de gráfico" igual a "Pizza". Depois clique duas vezes no topo do gráfico e dê o título "Como gasto minha mesada".`,
      gabarito: `O aluno tem um gráfico de pizza com fatias proporcionais a cada tipo de gasto, e o título "Como gasto minha mesada" aparece no topo. A maior fatia corresponde ao maior gasto da tabela.`,
    },
    {
      titulo: `Dupla detetive de gráficos`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas. Um aluno cria, o outro confere e dá a dica. Incentive que conversem usando a pergunta-guia em vez de apenas clicar.`,
      atividade: `Em dupla, peguem a tabela de esportes e, de propósito, criem um gráfico de pizza dela. Observem juntos: a pizza ajuda a comparar os esportes? Depois troquem para colunas e anotem em uma frase qual ficou melhor e por quê.`,
      gabarito: `A dupla percebe que a pizza fica confusa para comparar esportes, pois as fatias ficam parecidas, enquanto as colunas mostram na hora qual ganhou. A frase deve concluir que colunas são melhores para comparar itens entre si.`,
    },
    {
      titulo: `Conta a história da turma`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `9 min`,
      guiaProfessor: `Feche a aula com uma roda. Cada aluno mostra um gráfico e fala uma frase. Valorize quem justificou a escolha do tipo, não só quem fez bonito. Bonito fica para a Aula 6.`,
      atividade: `Escolha um dos seus dois gráficos (colunas ou pizza), dê a ele um título claro e prepare uma frase do tipo "Meu gráfico mostra que...". Na roda, apresente o gráfico aos colegas e explique por que escolheu aquele tipo.`,
      gabarito: `O aluno apresenta um gráfico com título e uma frase que conta a história dos dados (por exemplo, "Meu gráfico mostra que o futebol é o esporte favorito da turma"). Ele justifica o tipo escolhido usando a regra: colunas para comparar, pizza para partes de um todo.`,
    },
  ],
};
