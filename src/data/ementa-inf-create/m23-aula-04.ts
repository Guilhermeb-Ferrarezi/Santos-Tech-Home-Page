import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Limpando dados bagunçados",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Tratar uma tabela suja no Power Query removendo colunas inúteis, renomeando cabeçalhos, ajustando tipos e excluindo linhas vazias ou repetidas, para gerar gráficos confiáveis.`,
  descricao: `Na aula passada o aluno trouxe dados do Excel para o Power BI. Mas dados do mundo real quase nunca chegam prontos: vêm com colunas que ninguém vai usar, cabeçalhos com nomes estranhos, números guardados como texto, datas que o programa não reconhece e várias linhas em branco ou repetidas. Se a gente fizer um gráfico com esses dados, o gráfico vai mentir. Por isso, antes de qualquer visual, a gente precisa limpar.

A ferramenta que faz essa limpeza no Power BI chama-se Power Query (Editor de Consultas). É como uma cozinha onde a gente "lava e descasca" os dados antes de cozinhar. O melhor: cada passo que o aluno faz fica registrado do lado direito da tela, na lista "Etapas Aplicadas". Isso significa que dá para desfazer, refazer e até entender exatamente o que foi mudado. É uma forma muito visual de mostrar que limpar dados é uma sequência de pequenas decisões.

Nesta aula o aluno vai colocar a mão na massa em uma tabela suja de propósito (uma planilha de vendas de uma lanchonete da escola, por exemplo). Ele vai remover colunas inúteis, renomear cabeçalhos para nomes claros, ajustar tipos (texto, número, data) e excluir linhas vazias e repetidas. No fim, vai clicar em "Fechar e Aplicar" para confirmar todo o tratamento e levar a tabela limpa de volta ao Power BI.

A grande mensagem do dia é simples e poderosa: "Dados limpos geram gráficos confiáveis." O aluno sai entendendo que a parte menos chamativa do trabalho (a faxina dos dados) é justamente a que sustenta tudo o que vem depois.`,
  materiais: [
    `Computadores com Excel e Power BI Desktop instalados e abertos`,
    `Projetor ou TV para o professor demonstrar passo a passo`,
    `Arquivo de exemplo "vendas-lanchonete-suja.xlsx" (planilha bagunçada de propósito) na pasta de cada aluno`,
    `Arquivo Power BI ".pbix" da aula anterior (com os dados já importados) para continuar`,
    `Folha impressa com o "checklist de limpeza" (5 passos) para cada aluno`,
    `Slide ou cartaz com a frase do dia: "Dados limpos geram gráficos confiáveis."`,
    `Conta Microsoft (caso seja preciso reabrir ou salvar arquivos)`,
  ],
  conceitosChave: [
    `Power Query — o "editor de consultas" do Power BI, onde a gente limpa e transforma os dados antes de fazer gráficos.`,
    `Cabeçalho — a primeira linha da tabela, com o nome de cada coluna (por exemplo, "Produto", "Preço", "Data").`,
    `Tipo de dado — a etiqueta que diz se uma coluna é texto, número ou data; se estiver errada, os cálculos e gráficos falham.`,
    `Linha duplicada — uma linha repetida, idêntica a outra, que infla os números e precisa ser removida.`,
    `Etapas Aplicadas — a lista, à direita do Power Query, que registra cada mudança feita, permitindo desfazer e revisar.`,
    `Fechar e Aplicar — o botão que confirma toda a limpeza e leva a tabela tratada de volta para o Power BI.`,
    `Dados limpos — informações sem erros, sem repetições e com tipos corretos, prontas para gerar gráficos confiáveis.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Power BI para dar esta aula. Precisa apenas conhecer o Power Query, que é a tela de limpeza de dados. Para abri-la no Power BI Desktop, clique na aba "Página Inicial" e depois no botão "Transformar dados" (ícone com uma tabela e um lápis). Isso abre uma janela separada: do lado esquerdo ficam as consultas (tabelas), no centro a tabela em si, e do lado direito o painel "Configurações de Consulta" com a lista "Etapas Aplicadas". Cada clique de limpeza vira uma etapa nessa lista. Se errar, basta clicar no "X" ao lado da etapa para apagá-la. Teste o arquivo "vendas-lanchonete-suja.xlsx" antes da aula para conhecer a bagunça.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior. Pergunte: "De onde vieram nossos dados?" Mostre no projetor a tabela suja e provoque: "Dá para confiar nesses dados? O que está errado aqui?" Liste no quadro os problemas que os alunos enxergam (coluna vazia, nome esquisito, linha repetida). Apresente a frase do dia.

Conteúdo novo guiado (15 min): abra o Power BI, clique em "Página Inicial" e em "Transformar dados" para abrir o Power Query. Mostre as três regiões da tela e a lista "Etapas Aplicadas". Demonstre os 5 movimentos, um por vez, no projetor: (1) Remover coluna inútil: clique no cabeçalho da coluna, clique com o botão direito e escolha "Remover". (2) Renomear cabeçalho: dê dois cliques no nome da coluna e digite um nome claro. (3) Ajustar tipo: clique no pequeno ícone à esquerda do nome da coluna (ABC para texto, 123 para número, calendário para data) e escolha o tipo certo. (4) Remover linhas vazias: na aba "Página Inicial", clique em "Remover Linhas" e depois "Remover Linhas em Branco". (5) Remover duplicadas: selecione a coluna, clique em "Remover Linhas" e "Remover Duplicatas". Mostre que cada ação aparece nas Etapas Aplicadas.

Mão na massa (25 min): cada aluno abre o arquivo suja e repete os 5 passos na própria tela, usando o checklist impresso. Circule pela sala. Incentive a olhar a lista "Etapas Aplicadas" depois de cada passo. Ao terminar, oriente todos a clicar em "Página Inicial" e depois "Fechar e Aplicar" (canto superior esquerdo) para confirmar a limpeza e voltar ao Power BI.

Desafio e compartilhar (10 min): peça a cada aluno que mostre ao colega do lado a lista de Etapas Aplicadas e conte quantas etapas criou. Pergunte à turma: "Por que limpar antes de fazer gráfico?" Reforce a frase do dia.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da cozinha: "Ninguém cozinha com a verdura suja. A gente lava e descasca primeiro. Power Query é a pia onde lavamos os dados." Para tipos de dado, diga: "Se o computador acha que o preço é texto, ele não consegue somar — é como pedir para ele somar a palavra 'banana'." Para linhas duplicadas: "Se a mesma venda aparece duas vezes, o total fica errado, como contar o mesmo dinheiro duas vezes." Mostre sempre que cada ação vira uma etapa que dá para desfazer — isso tira o medo de errar.

## Erros comuns e como ajudar

O aluno apaga a coluna errada: mostre que basta clicar no "X" ao lado da etapa em "Etapas Aplicadas" para voltar atrás. O número some no gráfico depois: quase sempre o tipo ficou como texto; peça para clicar no ícone à esquerda do cabeçalho e escolher "Número Decimal" ou "Número Inteiro". A data fica como texto: oriente a escolher o tipo "Data" no mesmo ícone. O aluno esquece de aplicar: lembre que sem clicar em "Fechar e Aplicar" nada vai para o Power BI. Aluno some com linhas demais: confira se ele usou "Remover Duplicatas" na coluna certa e desfaça a etapa se preciso.`,
  exercicios: [
    {
      titulo: `Faxina guiada na tabela suja`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Conduza o passo a passo no projetor enquanto os alunos repetem. Garanta que todos abriram o Power Query pelo botão "Transformar dados" antes de começar.`,
      atividade: `Abra o arquivo "vendas-lanchonete-suja.xlsx" no Power BI, clique em "Transformar dados" e faça os 5 passos do checklist: remova uma coluna inútil, renomeie um cabeçalho, ajuste o tipo de uma coluna, remova linhas em branco e remova duplicatas. Observe a lista "Etapas Aplicadas".`,
      gabarito: `O aluno deve ter, em "Etapas Aplicadas", ao menos: "Colunas Removidas", "Colunas Renomeadas", "Tipo Alterado", "Linhas em Branco Removidas" e "Duplicatas Removidas". A tabela fica sem a coluna inútil, com cabeçalhos claros, números somáveis, datas reconhecidas e sem linhas vazias ou repetidas.`,
    },
    {
      titulo: `Caça ao tipo errado`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Peça que os alunos olhem o ícone à esquerda de cada cabeçalho. Circule confirmando se identificaram corretamente texto (ABC), número (123) e data (calendário).`,
      atividade: `Olhe cada coluna da sua tabela e descubra qual está com o tipo errado. Por exemplo, a coluna "Preço" pode estar como texto. Corrija clicando no ícone à esquerda do cabeçalho e escolhendo o tipo certo (Número ou Data).`,
      gabarito: `A coluna "Preço" (ou "Valor") deve ficar como número (Número Decimal); a coluna "Data" deve ficar como Data. O ícone à esquerda do cabeçalho muda de "ABC" para "123" ou para o ícone de calendário. Uma nova etapa "Tipo Alterado" aparece na lista.`,
    },
    {
      titulo: `Dupla detetive de duplicatas`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um aluno opera o computador, o outro lê o checklist e confere. Depois trocam. Verifique se removeram duplicatas na coluna correta.`,
      atividade: `Em dupla, encontrem as linhas repetidas na tabela. Selecionem a coluna que identifica cada venda (por exemplo, "ID da Venda" ou "Produto" + "Data") e usem "Remover Linhas" e depois "Remover Duplicatas". Anotem quantas linhas sumiram.`,
      gabarito: `A dupla deve apontar quantas linhas foram removidas (por exemplo, 3 duplicatas saíram, de 25 para 22 linhas). A etapa "Duplicatas Removidas" aparece na lista, e a contagem final de linhas diminui em relação ao início.`,
    },
    {
      titulo: `Roda de conversa: por que limpar?`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em círculo. Faça perguntas abertas e deixe vários alunos responderem. Reforce a frase do dia ao final, sem dar a resposta pronta antes de ouvir.`,
      atividade: `Conversem em grupo: o que aconteceria com um gráfico feito a partir da tabela suja, com linhas repetidas e preços como texto? Por que a frase "Dados limpos geram gráficos confiáveis" é importante? Deem exemplos do dia a dia.`,
      gabarito: `Respostas esperadas: com linhas repetidas o total de vendas ficaria inflado (maior do que o real); com preços como texto o gráfico não conseguiria somar nem comparar valores. A turma deve concluir que gráficos só são confiáveis quando os dados foram limpos antes.`,
    },
    {
      titulo: `Projeto curto: tabela limpa e aplicada`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Deixe o aluno trabalhar sozinho do início ao fim. Confira se ele clicou em "Fechar e Aplicar" e se a tabela voltou limpa ao Power BI. Peça que mostre as Etapas Aplicadas como prova do trabalho.`,
      atividade: `Faça a limpeza completa da tabela suja do começo ao fim: remova colunas inúteis, renomeie todos os cabeçalhos para nomes claros, ajuste todos os tipos, remova linhas vazias e duplicatas. Por fim, clique em "Fechar e Aplicar" para confirmar o tratamento.`,
      gabarito: `A tabela final deve estar sem colunas inúteis, com cabeçalhos claros (como "Produto", "Preço", "Data", "Quantidade"), tipos corretos (texto, número, data), sem linhas em branco e sem duplicatas. Ao clicar em "Fechar e Aplicar", a janela do Power Query fecha e a tabela limpa aparece no Power BI, com a lista "Etapas Aplicadas" registrando todos os passos.`,
    },
  ],
};
