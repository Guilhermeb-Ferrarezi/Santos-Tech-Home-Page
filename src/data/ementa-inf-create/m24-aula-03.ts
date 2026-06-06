import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Filtros: mostrando só o que importa",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Usar o painel de Filtros do Power BI para filtrar por categoria, data e valor em um gráfico individual e na página inteira, percebendo como a mensagem do mesmo visual muda quando o filtro muda.`,
  descricao: `Nas duas primeiras aulas do mês o aluno trouxe os dados do Excel para o Power BI e montou gráficos e cartões que contam uma história. Agora chega a hora de uma das ferramentas mais poderosas de quem analisa dados: o filtro. Filtrar é, simplesmente, decidir o que aparece e o que fica de fora. Em vez de mostrar todas as vendas de todos os meses de todas as categorias, o aluno aprende a apontar o holofote só para o que importa: as vendas de dezembro, só a categoria "Jogos", só os valores acima de R$ 100.

A grande ideia desta aula é que o mesmo conjunto de dados pode contar histórias diferentes dependendo do que escolhemos mostrar. Um gráfico que parecia dizer "vendemos pouco" pode, ao ser filtrado por uma categoria campeã, dizer "essa categoria explodiu". Filtrar não muda os dados originais; muda apenas o recorte que o público enxerga. Por isso o filtro é, ao mesmo tempo, uma ferramenta de análise (para investigar) e uma ferramenta de comunicação (para destacar).

O Power BI tem um painel de Filtros (Filters) na lateral direita da tela, e ele trabalha em três níveis. O filtro de um visual específico (Filters on this visual) afeta só aquele gráfico ou cartão selecionado. O filtro da página (Filters on this page) afeta todos os visuais daquela página de uma vez. E o filtro de todas as páginas (Filters on all pages) vale para o relatório inteiro. Nesta aula o foco está nos dois primeiros: o aluno aprende a filtrar um gráfico isolado e a filtrar a página toda, comparando o efeito de cada um.

Os alunos também conhecem os tipos de filtro: filtragem básica (marcar e desmarcar itens de uma lista, como categorias), filtragem avançada com condições (maior que, menor que, contém) para valores, e a filtragem por intervalo de datas. Ao final, cada aluno terá experimentado o "antes e depois" de aplicar um filtro e saberá explicar, em uma frase, como a mensagem do gráfico mudou. Isso prepara o terreno para a próxima aula, em que entram as segmentações interativas (slicers), os filtros que viram botões na própria tela do dashboard.`,
  materiais: [
    `Computadores com o Power BI Desktop instalado e o Excel disponível, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar cada clique no painel de Filtros`,
    `Arquivo de exemplo já pronto no Power BI (um .pbix com uma tabela de vendas contendo as colunas Data, Categoria, Produto e Valor) e o mesmo conjunto em uma planilha Excel de apoio`,
    `Pelo menos dois ou três gráficos e um cartão já montados na página, reaproveitados das aulas 1 e 2`,
    `Conta Microsoft ativada no Power BI, caso a turma vá publicar ou salvar na nuvem`,
    `Folha ou documento simples "Antes e depois do filtro" para o aluno anotar como a mensagem do gráfico mudou`,
    `Lista no quadro com três perguntas-guia (por categoria, por data, por valor) para orientar os filtros`,
  ],
  conceitosChave: [
    `Filtro — recorte que decide quais dados aparecem no visual, sem apagar ou alterar os dados originais.`,
    `Painel de Filtros — a área na lateral direita do Power BI onde se arrastam campos e se escolhe o que mostrar.`,
    `Filtro do visual — filtro que afeta apenas o gráfico ou cartão selecionado naquele momento (Filters on this visual).`,
    `Filtro da página — filtro que afeta de uma vez todos os visuais da página atual (Filters on this page).`,
    `Filtragem básica — modo de marcar e desmarcar itens de uma lista, como escolher quais categorias aparecem.`,
    `Filtragem avançada — modo de usar condições como "maior que", "menor que" ou "contém" para filtrar valores ou textos.`,
    `Filtro por data — recorte que mostra apenas um período, escolhendo uma data inicial e uma data final.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Power BI para conduzir esta aula. Filtrar é só escolher o que aparece na tela. O segredo está em um painel: com um relatório aberto no Power BI Desktop, olhe a lateral direita. Há três painéis empilhados — Visualizações (Visualizations), Campos (Fields/Data) e, entre eles ou ao lado, o painel de Filtros (Filters). É nesse painel de Filtros que toda a aula acontece.

O painel de Filtros tem três seções de cima para baixo: "Filtros neste visual" (aparece só quando há um gráfico selecionado), "Filtros nesta página" e "Filtros em todas as páginas". Para criar um filtro, arraste um campo da lista de Campos para dentro da seção desejada. Ao soltar, abre uma caixinha com opções. Para categorias (texto), o modo "Filtragem básica" mostra uma lista de caixinhas para marcar e desmarcar. Para valores (números), use "Filtragem avançada" e escolha condições como "é maior que" e digite o número. Para datas, surge a opção de escolher um intervalo, com data inicial e data final. Antes da aula, abra o arquivo de exemplo, clique em um gráfico, arraste a Categoria para "Filtros neste visual", desmarque algumas categorias e veja o gráfico mudar na hora. Faça isso uma vez e você estará pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, abra o arquivo de exemplo com os gráficos das aulas anteriores. Pergunte: "se eu quisesse mostrar só as vendas de uma categoria, como faria?". Conte que hoje a turma vai aprender o filtro, a ferramenta que escolhe o que aparece. Relembre rapidamente o que é um gráfico e um cartão.

Conteúdo guiado (15 min): mostre devagar o painel de Filtros na lateral direita. Clique em um gráfico para selecioná-lo (uma borda aparece). Na lista de Campos, arraste "Categoria" para a seção "Filtros neste visual". Na caixinha, deixe o modo "Filtragem básica" e desmarque tudo menos uma categoria; o gráfico muda na hora. Em seguida, arraste "Data" para "Filtros nesta página" e escolha um intervalo (data inicial e data final) para ver TODOS os visuais mudarem juntos. Por fim, arraste "Valor" para um visual, troque para "Filtragem avançada", escolha "é maior que" e digite 100. Repita cada caminho com calma, falando em voz alta onde está clicando.

Mão na massa (25 min): cada aluno, em seu computador, repete os três filtros no próprio arquivo. Primeiro filtra um gráfico por categoria (filtro do visual). Depois filtra a página inteira por um período de datas. Depois filtra por valor com a condição "maior que". A cada filtro, anota na folha "Antes e depois do filtro" como a mensagem mudou. Circule pela sala, ajude quem não acha o painel de Filtros e reforce a diferença entre filtrar um visual e filtrar a página.

Desafio e compartilhar (10 min): peça que dois ou três alunos mostrem no projetor um filtro que mudou bastante a história do gráfico e expliquem em uma frase o "antes e depois". Valorize as descobertas mais surpreendentes.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que o filtro é como o filtro de uma busca em loja online: você marca "só tênis", "só até R$ 200", e a lista encolhe para mostrar só o que interessa. Compare o filtro do visual a usar óculos só em um olho (afeta um gráfico) e o filtro da página a acender ou apagar a luz da sala inteira (afeta todos os visuais). Repita a missão do dia: "filtrar é escolher o que aparece, sem apagar nada". E reforce a ideia central: "o mesmo gráfico conta histórias diferentes dependendo do filtro".

## Erros comuns e como ajudar

O erro mais comum é esquecer de clicar no gráfico antes de filtrar, e então a seção "Filtros neste visual" nem aparece; mostre que é preciso selecionar o visual primeiro. Muitos confundem filtrar o visual com filtrar a página e estranham que só um gráfico mudou (ou que todos mudaram); explique as três seções com calma. Alguns desmarcam tudo e o gráfico fica vazio; ensine que pelo menos um item precisa estar marcado. Na filtragem por valor, há quem deixe no modo básico e não ache o "maior que"; lembre de trocar para "Filtragem avançada". E é comum o aluno achar que filtrar apagou os dados; tranquilize dizendo que basta limpar o filtro (ícone de borracha no campo) para tudo voltar.`,
  exercicios: [
    {
      titulo: `Filtrar um gráfico por categoria`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Conduza a turma toda junta no projetor. Reforce que é preciso clicar no gráfico primeiro para a seção "Filtros neste visual" aparecer. Confira se cada aluno conseguiu deixar só uma categoria marcada e viu o gráfico mudar.`,
      atividade: `Clique em um gráfico para selecioná-lo. No painel de Filtros, na seção "Filtros neste visual", arraste o campo "Categoria". Na caixinha, mantenha "Filtragem básica" e desmarque todas as categorias, deixando só uma marcada. Observe como o gráfico muda na hora.`,
      gabarito: `O gráfico passa a mostrar apenas os dados da categoria deixada marcada, e os demais visuais da página continuam iguais (porque o filtro foi só do visual). O caminho correto é selecionar o gráfico, arrastar "Categoria" para "Filtros neste visual" e manter ao menos um item marcado.`,
    },
    {
      titulo: `Filtrar a página inteira por data`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Mostre de novo a diferença entre a seção "Filtros neste visual" e "Filtros nesta página". Ajude quem não acha o campo "Data" na lista de Campos. Destaque que, desta vez, TODOS os visuais mudam juntos.`,
      atividade: `No painel de Filtros, na seção "Filtros nesta página", arraste o campo "Data". Escolha um intervalo com uma data inicial e uma data final (por exemplo, só o mês de dezembro). Observe que todos os gráficos e cartões da página mudam ao mesmo tempo.`,
      gabarito: `Todos os visuais da página passam a mostrar apenas o período escolhido entre as datas inicial e final. Considera-se correto quando o aluno usou a seção "Filtros nesta página" (e não a do visual) e percebeu que o filtro afeta a página inteira, não só um gráfico.`,
    },
    {
      titulo: `Filtrar por valor com "maior que"`,
      tipo: `desafio`,
      tempo: `6 min`,
      guiaProfessor: `Reforce que para condições com números é preciso trocar do modo básico para "Filtragem avançada". Mostre onde digitar o número. Desafie a turma a descobrir quantos itens sobraram depois do filtro.`,
      atividade: `Selecione um gráfico, arraste o campo "Valor" para "Filtros neste visual" e troque o modo para "Filtragem avançada". Escolha a condição "é maior que" e digite 100. Clique em Aplicar filtro e veja quais itens permaneceram.`,
      gabarito: `O gráfico passa a exibir apenas os registros com Valor maior que 100, escondendo os menores. O aluno acerta quando troca para "Filtragem avançada", escolhe "é maior que" e digita o número; o resultado mostra menos itens do que antes do filtro.`,
    },
    {
      titulo: `Antes e depois em dupla`,
      tipo: `em dupla`,
      tempo: `9 min`,
      guiaProfessor: `Forme duplas. Um aluno aplica um filtro enquanto o outro descreve em voz alta como a mensagem do gráfico mudou; depois trocam de papel. Circule para garantir o rodízio e incentivar frases do tipo "antes parecia... agora parece...".`,
      atividade: `Em dupla, escolham um mesmo gráfico. Um colega aplica um filtro (por categoria, data ou valor) e o outro descreve, em voz alta, a mensagem do gráfico antes e depois do filtro. Anotem as duas frases na folha "Antes e depois do filtro". Depois troquem de função com outro filtro.`,
      gabarito: `A dupla registra, para pelo menos dois filtros, uma frase de "antes" e uma de "depois" que mostram a mudança de mensagem. Exemplo: "antes parecia que vendemos pouco; depois de filtrar só a categoria Jogos, parece que essa categoria foi campeã". Espera-se que os dois alunos tenham revezado entre aplicar o filtro e descrever.`,
    },
    {
      titulo: `Três filtros que mudam a história`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este é o fechamento e a entrega da aula. Cada aluno aplica três filtros diferentes (um por categoria, um por data, um por valor) e registra a mudança de mensagem de cada um. No fim, abra uma roda de conversa para 2 ou 3 alunos mostrarem no projetor o filtro mais surpreendente.`,
      atividade: `Monte seus três filtros que mudam a história. Aplique um filtro por categoria (filtro do visual), um por data (filtro da página) e um por valor com a condição "maior que". Para cada um, anote na folha "Antes e depois do filtro" o que o gráfico dizia antes e o que passou a dizer depois. Escolha o filtro mais surpreendente e prepare-se para mostrar à turma.`,
      gabarito: `O aluno aplica exatamente três filtros (categoria, data e valor), usando a seção correta do painel em cada caso, e registra para cada um uma frase de antes e uma de depois. Exemplo: "Categoria: antes mostrava todas; filtrei só Eletrônicos e virou a barra mais alta"; "Data: filtrei só dezembro e a página inteira encolheu para o fim do ano"; "Valor maior que 100: sumiram as vendas pequenas e sobraram só as grandes". Na roda de conversa, o aluno apresenta o filtro mais surpreendente e explica o antes e depois.`,
    },
  ],
};
