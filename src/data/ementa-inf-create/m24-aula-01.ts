import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Do Excel ao Power BI: importando dados",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar o Power BI Desktop, mostrar a diferença entre uma planilha e um painel de dados, importar uma tabela do Excel, conferir os tipos de dados e criar o primeiro gráfico de colunas a partir dela.`,
  descricao: `Durante o ano todo o aluno trabalhou no Excel organizando números em linhas e colunas. O Excel é ótimo para guardar e calcular dados, mas, quando queremos contar uma história com esses números, uma planilha cheia de células acaba cansando os olhos. É aí que entra o Power BI: um programa gratuito da Microsoft feito para transformar tabelas em painéis visuais, com gráficos coloridos, cartões com números grandes e filtros que respondem a um clique.

A diferença principal é o objetivo de cada ferramenta. A planilha é o lugar onde os dados nascem e são editados, célula por célula. O painel (em inglês, dashboard) é a vitrine: ele lê os dados prontos e mostra apenas o que importa, em forma de imagem. No Excel você olha o detalhe; no Power BI você enxerga o todo de uma vez. Por isso dizemos que o Power BI não substitui o Excel, ele continua a história a partir de onde a planilha parou.

Nesta primeira aula o foco é dar o primeiro passo dessa ponte: abrir o Power BI Desktop, importar uma tabela que já existe no Excel e entender o que acontece quando os dados entram no programa. O aluno vai descobrir que cada coluna tem um tipo de dado (texto, número inteiro, número decimal ou data) e que conferir esses tipos é fundamental para os gráficos saírem certos depois.

Para fechar a aula com um gostinho de vitória, cada aluno cria o seu primeiro gráfico de colunas, arrastando campos para a tela e vendo os números virarem barras na hora. É um momento que costuma arrancar sorrisos, porque o trabalho de planilha do mês anterior, de repente, ganha vida e cor. Esse gráfico simples é a semente do painel profissional que a turma vai montar ao longo do mês.`,
  materiais: [
    `Computadores com o Microsoft Excel instalado e o Power BI Desktop instalado e já aberto na tela inicial.`,
    `Projetor ou tela grande ligada ao computador do professor, para demonstrar cada clique ao vivo.`,
    `Arquivo de exemplo em Excel chamado "vendas-lanchonete.xlsx", com uma tabela simples (colunas: Produto, Categoria, Mês, Quantidade, Valor).`,
    `Conta Microsoft em cada computador (não é obrigatória para abrir e importar nesta aula, mas útil para salvar depois).`,
    `Pendrive ou pasta compartilhada na rede com o arquivo de exemplo, para distribuir a todos rapidamente.`,
    `Folha de anotação simples para o aluno registrar quais tipos de dados encontrou em cada coluna.`,
    `Mouse com botão esquerdo funcionando bem, pois o Power BI usa muito o gesto de arrastar campos.`,
  ],
  conceitosChave: [
    `Power BI Desktop — programa gratuito da Microsoft que transforma tabelas de dados em painéis visuais com gráficos e cartões.`,
    `Planilha — arquivo do Excel onde os dados são guardados e editados célula por célula.`,
    `Painel (dashboard) — tela do Power BI que mostra os dados em forma de gráficos e números grandes, fácil de ler de longe.`,
    `Importar dados — trazer uma tabela que está no Excel para dentro do Power BI, mantendo a planilha original intacta.`,
    `Tipo de dado — a natureza de cada coluna: texto, número inteiro, número decimal ou data; define como o Power BI trata aquele campo.`,
    `Campo — cada coluna da tabela depois de importada; aparece na lista de Dados, à direita da tela.`,
    `Gráfico de colunas — visual em forma de barras em pé, que compara valores de categorias diferentes de relance.`,
  ],
  treinamento: `## O que o professor precisa saber

O Power BI Desktop é gratuito e abre como qualquer programa do Windows. Na tela inicial há uma faixa de boas-vindas que você pode fechar no "X". A tela principal tem três áreas: à esquerda, os três ícones de modo de exibição (Relatório, Tabela e Modelo); no centro, a área branca onde os gráficos nascem; e à direita, dois painéis importantes, o de "Visualizações" (os tipos de gráfico) e o de "Dados" (a lista de tabelas e colunas importadas). No topo fica a faixa de opções (Ribbon), igual à do Excel. Para importar do Excel, usamos o botão "Obter dados" (ou "Pasta de Trabalho do Excel") na aba "Página Inicial". Antes da aula, faça você mesmo o caminho completo uma vez: abra o programa, importe o arquivo de exemplo, confira os tipos de dado e crie um gráfico de colunas. Isso basta para guiar a turma com segurança.

## Passo a passo da aula

Aquecimento (10 min): no projetor, mostre lado a lado a planilha "vendas-lanchonete.xlsx" aberta no Excel e uma imagem de um painel colorido do Power BI. Pergunte: "qual das duas telas é mais fácil de entender em três segundos?". Explique que a planilha guarda os dados e o painel mostra a história. Relembre rapidamente a tabela do mês anterior.

Conteúdo novo guiado (15 min): com todos olhando o projetor, abra o Power BI Desktop e feche o aviso inicial. Clique em "Obter dados", escolha "Pasta de Trabalho do Excel", localize o arquivo e clique em "Abrir". Na janela do Navegador, marque a caixinha ao lado da tabela e clique em "Carregar". Mostre que a tabela apareceu no painel "Dados", à direita. Clique no ícone de modo "Tabela" (à esquerda) para ver os dados. Aponte para o cabeçalho de cada coluna e mostre o pequeno ícone que indica o tipo de dado: "ABC" para texto, "123" para número, um calendário para data. Explique que conferir isso evita erros.

Mão na massa (25 min): cada aluno repete o caminho no próprio computador: abrir, "Obter dados", importar o arquivo, carregar e olhar a tabela. Depois, peça que voltem ao modo "Relatório", cliquem em qualquer área branca, escolham o "gráfico de colunas agrupadas" no painel Visualizações e arrastem o campo "Categoria" para "Eixo X" e o campo "Valor" para "Eixo Y". O gráfico aparece na hora. Circule pela sala ajudando quem travou na importação.

Desafio e compartilhar (10 min): proponha trocar o campo do eixo, usando "Produto" no lugar de "Categoria", e observar como o gráfico muda. Cada aluno mostra no projetor o seu primeiro gráfico e diz uma coisa que descobriu nos dados.

## Como explicar de forma clara

Use a imagem da ponte: o Excel é a margem onde os dados moram e o Power BI é a outra margem, mais bonita, onde eles aparecem como gráficos. Importar é atravessar a ponte sem destruir a margem de origem, ou seja, a planilha continua intacta. Compare o tipo de dado com caixas etiquetadas: número vai na caixa de calcular, texto vai na caixa de nomes e data vai na caixa do calendário; se a etiqueta estiver errada, a conta sai torta. Sempre demonstre o gesto de arrastar antes de pedir que façam, e conte os passos em voz alta enquanto eles repetem.

## Erros comuns e como ajudar

O erro mais comum é, na janela do Navegador, esquecer de marcar a caixinha ao lado da tabela antes de clicar em "Carregar"; aponte a caixinha. Outro tropeço é o aluno tentar editar números dentro do Power BI como se fosse Excel: explique que aqui só visualizamos, a edição volta a ser na planilha. Muitos arrastam o campo para o lugar errado do painel; mostre que "Categoria" vai no eixo de baixo e "Valor" no de cima. Se um número aparecer como texto (ícone "ABC"), avise que o gráfico não vai somar e ensine a clicar na coluna e mudar o tipo para número decimal na aba "Transformação de Dados" ou no menu de tipo da coluna. Por fim, se a tela parecer travada, lembre que arquivos grandes demoram alguns segundos para carregar.`,
  exercicios: [
    {
      titulo: `Atravessando a ponte`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que todos tenham o arquivo "vendas-lanchonete.xlsx" salvo no computador. Faça o caminho junto, clique por clique, no projetor, antes de soltar a turma.`,
      atividade: `Abra o Power BI Desktop. Clique em "Obter dados", escolha "Pasta de Trabalho do Excel", selecione o arquivo "vendas-lanchonete.xlsx", marque a caixinha da tabela e clique em "Carregar". Confirme que a tabela apareceu no painel "Dados", à direita.`,
      gabarito: `O aluno deve concluir a importação e ver o nome da tabela com a lista de colunas (Produto, Categoria, Mês, Quantidade, Valor) no painel "Dados". Sucesso é a tabela aparecer carregada sem mensagem de erro.`,
    },
    {
      titulo: `Detetive dos tipos de dado`,
      tipo: `Desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre de novo no projetor onde fica o ícone de tipo no cabeçalho de cada coluna no modo "Tabela". Ande pela sala conferindo as anotações.`,
      atividade: `Entre no modo "Tabela" (ícone à esquerda). Olhe o cabeçalho de cada coluna e anote o tipo de dado de cada uma: texto (ABC), número (123) ou data (calendário). Descubra se alguma coluna está com o tipo errado.`,
      gabarito: `Resposta esperada: Produto e Categoria são texto (ABC), Mês é texto ou data, Quantidade é número inteiro (123) e Valor é número decimal (123). Identificar corretamente o tipo de cada coluna conta como acerto; perceber uma coluna numérica marcada como texto é um bônus.`,
    },
    {
      titulo: `Primeiro gráfico em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Relembre no projetor o gesto de escolher o gráfico de colunas e arrastar os campos para os eixos. Peça que um aluno ensine o outro a arrastar.`,
      atividade: `Em dupla, no modo "Relatório", cliquem numa área branca, escolham o "gráfico de colunas agrupadas" no painel Visualizações e arrastem "Categoria" para o Eixo X e "Valor" para o Eixo Y. Conversem sobre qual categoria vendeu mais.`,
      gabarito: `A dupla deve produzir um gráfico de colunas em que cada categoria vira uma barra e a altura representa o Valor. A categoria com a barra mais alta é a que mais vendeu. Os dois alunos precisam conseguir arrastar os campos sozinhos ao final.`,
    },
    {
      titulo: `Planilha ou painel?`,
      tipo: `Roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Reúna a turma em roda. Faça perguntas abertas e deixe vários alunos falarem. Valorize cada observação para fixar a diferença entre as ferramentas.`,
      atividade: `Conversem em grupo: para que serve o Excel e para que serve o Power BI? Quando é melhor olhar a planilha e quando é melhor olhar o painel? O que o gráfico de colunas mostrou que era difícil de ver na tabela?`,
      gabarito: `Espera-se que os alunos digam que o Excel guarda e edita os dados, enquanto o Power BI mostra a história em gráficos fáceis de ler. O painel ajuda a comparar valores de relance, algo trabalhoso na tabela. Qualquer diferença válida entre planilha e painel é resposta correta.`,
    },
    {
      titulo: `Meu primeiro mini painel`,
      tipo: `Projeto curto`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que troquem o campo do eixo e criem uma segunda versão do gráfico. Incentive testar "Produto" e "Mês". Deixe alguns apresentarem no projetor.`,
      atividade: `Crie dois gráficos de colunas na mesma tela: no primeiro, use "Categoria" no Eixo X e "Valor" no Eixo Y; no segundo, troque para "Produto" no Eixo X e "Quantidade" no Eixo Y. Observe o que cada gráfico revela e anote uma descoberta sobre as vendas.`,
      gabarito: `O aluno entrega dois gráficos de colunas lado a lado, um por Categoria e outro por Produto, cada um lendo o campo correto no eixo. A descoberta pode ser qual produto vendeu mais unidades ou qual categoria trouxe mais valor. Dois gráficos corretos com uma observação válida sobre os dados estão certos.`,
    },
  ],
};
