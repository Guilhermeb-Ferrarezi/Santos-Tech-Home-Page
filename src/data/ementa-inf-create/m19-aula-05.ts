import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Tabela dinâmica: dados em segundos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a criar uma tabela dinâmica que resume centenas de linhas de vendas em um resumo claro, arrastando campos para linhas, colunas e valores.`,
  descricao: `Imagine uma lista enorme de vendas, com centenas de linhas, cheia de datas, produtos, categorias e valores. Encontrar respostas ali a olho nu é quase impossível: quanto vendemos de cada categoria? Qual mês foi o melhor? A tabela dinâmica é a ferramenta do Excel que responde a essas perguntas em segundos, sem precisar de nenhuma fórmula. Ela pega uma lista bagunçada e a transforma em um resumo organizado com poucos cliques.

A mágica da tabela dinâmica está em três áreas: Linhas, Colunas e Valores. O aluno arrasta um campo (como "Categoria") para a área de Linhas, arrasta outro campo (como "Valor") para a área de Valores, e pronto: o Excel soma tudo sozinho e mostra o total de cada categoria. Se o aluno mudar de ideia, basta arrastar os campos para outro lugar, e o resumo se reorganiza na hora. É como brincar de montar e remontar um relatório.

Nesta aula o aluno parte de uma base de dados de vendas (lista de pedidos com produto, categoria, mês e valor) e descobre o poder de "dinamizar" os dados. Em vez de ficar somando manualmente célula por célula, ele deixa o Excel fazer o trabalho pesado. Isso conecta diretamente com o entregável do mês, a planilha inteligente, que vai precisar de resumos claros para tomar decisões.

Para o professor iniciante, a boa notícia é que a tabela dinâmica é mais fácil de fazer do que de explicar. Depois de criar a primeira junto com a turma, o resto vira repetição e experimentação. O segredo é mostrar devagar onde clicar e deixar o aluno arrastar os campos com a própria mão, vendo o resultado mudar em tempo real.`,
  materiais: [
    `Computadores com Excel avançado instalado e abertos (um por aluno)`,
    `Projetor ou TV ligada ao computador do professor para demonstração`,
    `Arquivo de exemplo "vendas-loja.xlsx" com uma base de pelo menos 100 linhas (colunas: Pedido, Data, Mês, Produto, Categoria, Valor)`,
    `Cópia do arquivo de exemplo distribuída na pasta de cada aluno ou no Google Drive da turma`,
    `Slide ou cartaz com a imagem das três áreas (Linhas, Colunas, Valores)`,
    `Conta da escola no computador com permissão para abrir e salvar arquivos`,
    `Folha de desafio impressa ou no quadro com as perguntas finais`,
  ],
  conceitosChave: [
    `Tabela dinâmica — ferramenta do Excel que resume uma lista grande em um quadro organizado, sem usar fórmulas.`,
    `Base de dados — a lista original de linhas e colunas que serve de matéria-prima para a tabela dinâmica.`,
    `Campo — cada coluna da base (Produto, Categoria, Valor), que vira uma "peça" para arrastar na tabela dinâmica.`,
    `Área de Linhas — onde colocamos o campo que queremos ver listado de cima para baixo, como as categorias.`,
    `Área de Valores — onde colocamos o número que será somado ou contado, como o Valor das vendas.`,
    `Área de Colunas — onde colocamos um campo para abrir o resumo lado a lado, como os meses.`,
    `Atualizar — botão que recalcula a tabela dinâmica quando a base de dados muda.`,
  ],
  treinamento: `## O que o professor precisa saber

A tabela dinâmica é o recurso do Excel que mais impressiona o aluno, porque resume dados sem digitar uma única fórmula. Você não precisa ser especialista: basta dominar três cliques. Primeiro, entenda a ideia central. Toda tabela dinâmica nasce de uma base de dados, que é simplesmente uma lista com cabeçalho na primeira linha (Produto, Categoria, Mês, Valor) e dados embaixo. Cada coluna vira um campo que o aluno arrasta para montar o resumo. As três áreas mais usadas são Linhas (o que listar), Valores (o número a somar) e Colunas (um segundo recorte, lado a lado). Treine criar uma tabela dinâmica sozinho antes da aula, pelo menos duas vezes, para ganhar confiança e não travar na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o arquivo "vendas-loja.xlsx" no projetor e role a lista até o fim, mostrando que são mais de 100 linhas. Pergunte à turma: "Quanto vendemos na categoria Jogos?" Deixe-os tentar somar no olho e perceberem que é impossível. Diga que hoje o Excel vai responder isso em três cliques.

Conteúdo novo guiado (15 min): clique em qualquer célula dentro da lista. Vá na aba Inserir, no canto esquerdo clique em Tabela Dinâmica. Na janela que abre, confirme que o intervalo pegou toda a lista e escolha Nova Planilha; clique em OK. Aparece à direita o painel Campos da Tabela Dinâmica. Mostre as áreas embaixo: Filtros, Colunas, Linhas e Valores. Arraste o campo Categoria para a área Linhas. Arraste o campo Valor para a área Valores. Pronto: surge o total vendido por categoria. Agora arraste o campo Mês para a área Colunas e mostre como o resumo se abre lado a lado. Faça tudo devagar, narrando cada clique.

Mão na massa (25 min): cada aluno abre sua cópia do arquivo e repete o caminho Inserir, Tabela Dinâmica, Nova Planilha, OK. Peça que arrastem Categoria para Linhas e Valor para Valores. Circule pela sala ajudando quem não achou o painel de campos. Depois desafie-os a trocar Categoria por Produto e ver o resumo mudar, e a clicar com o botão direito sobre um número e escolher Resumir Valores Por para alternar entre Soma e Contagem.

Desafio e compartilhar (10 min): proponha duas perguntas no quadro, por exemplo "Qual categoria vendeu mais?" e "Qual mês teve mais pedidos?". Cada aluno usa a própria tabela dinâmica para responder e mostra ao colega do lado. Termine pedindo que digam, em uma frase, o que mais gostaram da ferramenta.

## Como explicar de forma clara (linguagem para a idade)

Compare a tabela dinâmica com um liquidificador: você joga uma fruta inteira e bagunçada (a lista de vendas) e recebe um suco pronto e organizado (o resumo). Diga que os campos são como peças de Lego que se encaixam nas áreas, e que dá para montar e desmontar quantas vezes quiser sem estragar nada. Reforce que arrastar errado não quebra a planilha: é só puxar a peça de volta. Use a palavra "dinâmica" mostrando que tudo muda na hora, ao vivo.

## Erros comuns e como ajudar

O erro mais frequente é começar com uma célula vazia selecionada, fora da lista; nesse caso o Excel reclama que não encontrou dados. Peça que cliquem dentro da lista antes de Inserir. Outro tropeço é fechar o painel Campos sem querer: para reabrir, basta clicar dentro da tabela dinâmica de novo. Alguns arrastam o campo Valor para Linhas e ficam confusos; explique que número que se soma vai em Valores. Se o resumo mostrar Contagem em vez de Soma, oriente o botão direito sobre o número, Resumir Valores Por, Soma. Por fim, se mudaram a base e o resumo não muda, mostre o botão Atualizar na aba Análise de Tabela Dinâmica.`,
  exercicios: [
    {
      titulo: `Minha primeira tabela dinâmica`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Garanta que cada aluno abriu a própria cópia do arquivo e clicou dentro da lista antes de inserir. Circule conferindo se o painel Campos apareceu à direita. Ajude quem não encontrou a opção na aba Inserir.`,
      atividade: `Abra o arquivo "vendas-loja.xlsx". Clique em uma célula dentro da lista, vá na aba Inserir e clique em Tabela Dinâmica. Escolha Nova Planilha e clique em OK. Arraste o campo Categoria para a área Linhas e o campo Valor para a área Valores.`,
      gabarito: `O aluno deve ter uma nova planilha com uma tabela dinâmica mostrando cada categoria em uma linha e o total vendido (Soma de Valor) ao lado de cada uma, terminando com um Total Geral embaixo.`,
    },
    {
      titulo: `Trocando as peças`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre que basta puxar o campo para fora da área para removê-lo. Reforce que a planilha não quebra ao trocar campos. Incentive a experimentação livre.`,
      atividade: `Na sua tabela dinâmica, remova o campo Categoria da área Linhas e coloque o campo Produto no lugar. Depois adicione o campo Mês na área Colunas. Observe como o resumo se reorganiza sozinho.`,
      gabarito: `A tabela dinâmica deve passar a listar os produtos nas linhas e os meses nas colunas, com a soma dos valores cruzando produto e mês em cada célula. Cada vez que o campo muda, o resumo se atualiza na hora, sem digitar fórmula.`,
    },
    {
      titulo: `Soma ou contagem?`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Junte os alunos em duplas. Ensine o caminho do botão direito sobre um número, Resumir Valores Por. Peça que discutam qual resumo responde a cada pergunta antes de clicar.`,
      atividade: `Em dupla, montem uma tabela dinâmica com Categoria nas Linhas e Valor nos Valores. Cliquem com o botão direito sobre um número e escolham Resumir Valores Por para alternar entre Soma e Contagem. Decidam juntos: para saber quanto dinheiro entrou, usamos Soma ou Contagem? E para saber quantos pedidos houve?`,
      gabarito: `Para saber quanto dinheiro entrou, usa-se Soma de Valor. Para saber quantos pedidos houve em cada categoria, usa-se Contagem de Valor (ou de Pedido). A dupla deve demonstrar a troca funcionando e explicar a diferença.`,
    },
    {
      titulo: `Detetives dos dados`,
      tipo: `roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Conduza uma conversa rápida onde cada aluno responde usando a própria tabela dinâmica. Anote as respostas no quadro e peça que mostrem qual número usaram para concluir.`,
      atividade: `Usando sua tabela dinâmica, responda em voz alta para a turma: Qual categoria vendeu mais dinheiro? Qual mês teve mais vendas? Mostre na tela o número que prova a sua resposta.`,
      gabarito: `As respostas dependem da base de exemplo, mas devem vir do maior valor na coluna de totais (categoria) e do maior total por mês. O importante é que o aluno aponte o número exato da tabela dinâmica como prova, em vez de adivinhar.`,
    },
    {
      titulo: `Resumo de vendas da minha loja`,
      tipo: `projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Este exercício prepara a planilha inteligente do mês. Peça que escolham um recorte e montem um resumo limpo. Verifique se sabem usar Atualizar caso mexam na base. Valorize organização e clareza.`,
      atividade: `Imagine que essa loja é sua. Monte uma tabela dinâmica que mostre o total vendido por Categoria nas Linhas e por Mês nas Colunas. Renomeie a planilha para "Resumo de Vendas". Depois, mude um valor na base original, volte na tabela dinâmica e clique em Atualizar para ver o número mudar.`,
      gabarito: `O aluno deve entregar uma tabela dinâmica com Categoria nas Linhas, Mês nas Colunas e Soma de Valor nas células, na planilha renomeada "Resumo de Vendas". Após alterar a base e clicar em Atualizar (aba Análise de Tabela Dinâmica), o total correspondente deve refletir a mudança.`,
    },
  ],
};
