import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Trazendo dados do Excel",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Conectar o Power BI a uma planilha do Excel usando "Obter Dados", escolher a tabela certa e entender a diferença entre "Carregar" e "Transformar Dados".`,
  descricao: `Até agora os alunos conheceram o ambiente do Power BI e suas três áreas principais. Nesta aula eles dão o passo mais importante de todos: trazer dados de verdade para dentro do programa. Sem dados, o Power BI é só uma tela em branco. Com dados, ele vira uma máquina de gráficos e descobertas. O caminho mais comum para começar é importar uma planilha do Excel, e é exatamente isso que vamos fazer.

O aluno vai aprender a usar o botão "Obter Dados" (em inglês, "Get Data"), que é a porta de entrada de qualquer informação no Power BI. A partir dele, o aluno escolhe o tipo de fonte (no nosso caso, uma pasta de trabalho do Excel), localiza o arquivo no computador e abre uma janela chamada "Navegador". Essa janela mostra todas as tabelas e planilhas que existem dentro do arquivo, com uma prévia dos dados à direita. O aluno precisa marcar a caixinha da tabela certa antes de continuar.

O momento mais importante da aula é a escolha entre dois botões: "Carregar" e "Transformar Dados". "Carregar" joga os dados direto para dentro do Power BI, do jeito que estão. "Transformar Dados" abre uma sala de bastidores chamada Editor do Power Query, onde dá para limpar e ajustar os dados antes de usar. Nesta aula o aluno vai apenas espiar o Editor do Power Query pela primeira vez, sem mexer ainda — a limpeza de verdade fica para a próxima aula.

Ao final, todos terão importado o mesmo conjunto de dados, que será usado durante o restante do mês para construir tabelas, relacionamentos e gráficos. É o "ingrediente" que vai aparecer em todas as receitas seguintes, por isso é tão importante que todos consigam carregá-lo corretamente hoje.`,
  materiais: [
    `Computadores com Excel e Power BI Desktop já instalados e abertos`,
    `Projetor ou TV para o professor mostrar a tela passo a passo`,
    `Arquivo de exemplo "vendas-lanchonete.xlsx" copiado na pasta de cada aluno (mesma fonte do mês todo)`,
    `Pen drive ou pasta compartilhada na rede para distribuir o arquivo de exemplo`,
    `Slide ou cartaz com a comparação "Carregar x Transformar Dados"`,
    `Caderno ou bloco de notas para os alunos anotarem o caminho dos cliques`,
  ],
  conceitosChave: [
    `Obter Dados — botão do Power BI que serve como porta de entrada para qualquer informação, seja Excel, site ou banco de dados.`,
    `Fonte de dados — o lugar de onde a informação vem; nesta aula, um arquivo do Excel guardado no computador.`,
    `Navegador — janela que aparece após escolher o arquivo e mostra todas as tabelas e planilhas dentro dele, com uma prévia dos dados.`,
    `Carregar — opção que traz os dados direto para o Power BI, do jeito que estão, sem ajustes.`,
    `Transformar Dados — opção que abre o Editor do Power Query para limpar e organizar os dados antes de usar.`,
    `Editor do Power Query — a "cozinha de bastidores" do Power BI, onde os dados são preparados antes de virarem gráficos.`,
    `Tabela — conjunto de dados organizado em linhas e colunas, como uma planilha; é o formato que o Power BI mais gosta de receber.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. Precisa apenas saber que o Power BI guarda os dados dentro dele próprio depois que você importa, ou seja, ele faz uma "cópia" do Excel. Mexer no Power BI não altera o arquivo original. O caminho que vamos usar é sempre o mesmo: "Obter Dados" → escolher Excel → achar o arquivo → janela "Navegador" → marcar a tabela → decidir entre "Carregar" e "Transformar Dados". Decore essa sequência; ela é o coração da aula. Antes da aula, faça você mesmo a importação uma vez, do começo ao fim, para não travar na frente da turma. Confira também se o arquivo "vendas-lanchonete.xlsx" está na pasta de todos os computadores.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

Aquecimento (10 min): Abra o Power BI no projetor e pergunte: "O que está faltando aqui?". Conduza a turma até a resposta "dados". Relembre rapidamente as três áreas do ambiente vistas na aula anterior. Diga a frase-chave do dia: "Hoje a gente enche o Power BI de dados de verdade."

Conteúdo novo guiado (15 min): Com a turma só olhando, mostre o caminho na sua tela. Clique na faixa superior em "Página Inicial" e depois no botão "Obter Dados". No menu que abre, clique em "Excel pasta de trabalho" (ou "Excel"). Vai aparecer a janela do Windows para escolher o arquivo: navegue até a pasta e clique duas vezes em "vendas-lanchonete.xlsx". Agora abre a janela mais importante, o "Navegador". Mostre que, do lado esquerdo, aparecem as tabelas e planilhas, e que, ao clicar em uma delas, a prévia surge à direita. Marque a caixinha da tabela "Vendas". Por fim, pare nos dois botões de baixo e explique a diferença entre "Carregar" e "Transformar Dados". Clique em "Transformar Dados" só para mostrar o Editor do Power Query por dentro, diga "esta é a cozinha, voltamos aqui na próxima aula" e feche sem mexer (botão "Fechar e Aplicar" ou simplesmente repita o processo escolhendo "Carregar").

Mão na massa (25 min): Agora é a vez deles. Peça que cada aluno repita exatamente o caminho no próprio computador, anotando cada clique no caderno. Circule pela sala. A meta é que todos consigam abrir o "Navegador", marcar a tabela "Vendas" e clicar em "Carregar". Quando carregarem, mostre que a tabela aparece no painel "Dados", do lado direito da tela. Peça que cliquem na seta ao lado do nome da tabela para ver as colunas que vieram.

Desafio e compartilhar (10 min): Lance o desafio: "Quem consegue espiar o Editor do Power Query e voltar sem quebrar nada?". Cada aluno clica em "Transformar Dados", observa a tela do Power Query, encontra a lista de "Etapas Aplicadas" do lado direito e depois clica em "Fechar e Aplicar". Termine pedindo que dois ou três alunos contem o que viram na "cozinha".

## Como explicar de forma clara

Use a imagem da cozinha de restaurante. "Carregar" é levar o ingrediente direto para o prato. "Transformar Dados" é passar pela cozinha primeiro, para lavar e cortar. Diga que o "Navegador" é como abrir a geladeira e ver tudo o que tem dentro do arquivo antes de escolher. Reforce que importar não estraga o Excel original: "é uma foto, não é o original". Para a idade, evite a palavra "consulta"; prefira "tabela" e "dados".

## Erros comuns e como ajudar

O erro mais comum é o aluno fechar o "Navegador" sem marcar a caixinha da tabela — então nada é carregado. Mostre que a caixinha precisa ficar com o "tique" azul. Outro erro é escolher a planilha errada (vem uma com nome estranho, tipo "Planilha1$"); oriente a sempre escolher a que tem ícone de tabela e o nome "Vendas". Se alguém clicar em "Transformar Dados" e se perder no Power Query, ensine o botão de saída: "Fechar e Aplicar", no canto superior esquerdo. Se o arquivo não aparecer, confira se ele está na pasta certa antes de gastar tempo procurando dentro do programa.`,
  exercicios: [
    {
      titulo: `Importando a tabela "Vendas"`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Deixe o caminho escrito no quadro: "Obter Dados → Excel → escolher arquivo → marcar tabela → Carregar". Circule garantindo que todos cheguem ao final. O objetivo é que cada aluno veja a tabela aparecer no painel "Dados".`,
      atividade: `Abra o Power BI, clique em "Obter Dados", escolha "Excel pasta de trabalho", selecione o arquivo "vendas-lanchonete.xlsx", marque a tabela "Vendas" no Navegador e clique em "Carregar". Confira se a tabela apareceu no painel "Dados", à direita.`,
      gabarito: `A tabela "Vendas" deve aparecer listada no painel "Dados", do lado direito da tela. Ao clicar na seta ao lado do nome, as colunas (como Data, Produto, Quantidade e Valor) ficam visíveis. Se nada apareceu, provavelmente a caixinha da tabela não foi marcada no Navegador.`,
    },
    {
      titulo: `Carregar ou Transformar? Acerte o destino`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Leia cada situação em voz alta e dê alguns segundos para o aluno decidir. Use a metáfora da cozinha para corrigir. O foco é fixar a diferença entre as duas opções, não mexer ainda no Power Query.`,
      atividade: `Para cada frase, escreva no caderno se você usaria "Carregar" ou "Transformar Dados": (1) "Os dados já estão limpos e prontos." (2) "Tem uma coluna toda bagunçada que precisa de ajuste." (3) "Quero só dar uma olhada na cozinha antes de cozinhar." (4) "Quero usar os dados agora, do jeito que vieram."`,
      gabarito: `(1) Carregar — os dados estão prontos, vão direto. (2) Transformar Dados — precisa de ajuste antes. (3) Transformar Dados — abre o Editor do Power Query, a cozinha. (4) Carregar — usa do jeito que veio.`,
    },
    {
      titulo: `Explorando o Navegador em dupla`,
      tipo: `Em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno navega e o outro anota o que veem na janela "Navegador". Depois trocam de papel. Incentive que comparem quantas tabelas e planilhas existem dentro do mesmo arquivo.`,
      atividade: `Em dupla, abram "Obter Dados → Excel" e escolham o arquivo. Na janela "Navegador", sem clicar em "Carregar" ainda, observem: quantos itens aparecem na lista da esquerda? O que muda na prévia da direita quando vocês clicam em itens diferentes? Anotem as respostas.`,
      gabarito: `O Navegador mostra mais de um item: a tabela "Vendas" (com ícone de tabela) e também planilhas com o cifrão no nome, como "Planilha1$". A prévia da direita muda conforme o item clicado, exibindo as primeiras linhas daquele conjunto de dados. A escolha certa para o mês é a tabela "Vendas".`,
    },
    {
      titulo: `Roda de conversa: por que importar não estraga o Excel?`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza uma conversa curta em roda. Faça perguntas abertas e deixe os alunos explicarem com as próprias palavras. Reforce a ideia de "cópia" ou "foto" dos dados. Anote no quadro as melhores explicações da turma.`,
      atividade: `Conversem em roda: quando você importa a planilha para o Power BI, o arquivo do Excel muda? Por quê? O que aconteceria se você apagasse o arquivo do Excel depois de carregar? Deem suas opiniões e ouçam as dos colegas.`,
      gabarito: `O Power BI faz uma cópia dos dados ao importar, então o arquivo do Excel original não muda. É como tirar uma foto: a foto existe sem alterar a pessoa. Importante: se o arquivo for apagado ou movido, ao tentar "Atualizar" os dados depois o Power BI dará erro, pois não acha mais a fonte — por isso o arquivo deve ficar guardado no mesmo lugar.`,
    },
    {
      titulo: `Mini-projeto: prepare os dados do mês`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o entregável que segue para as próximas aulas. Garanta que cada aluno termine com a tabela carregada e o arquivo salvo. Verifique um por um. Quem terminar antes pode ajudar um colega como "monitor".`,
      atividade: `Importe a tabela "Vendas" usando "Carregar". Depois, clique em "Transformar Dados" só para espiar o Editor do Power Query: encontre a lista "Etapas Aplicadas" do lado direito e clique em "Fechar e Aplicar" para voltar. Por fim, salve seu arquivo do Power BI com o nome "painel-vendas-SEU-NOME.pbix".`,
      gabarito: `Ao final, o aluno tem: a tabela "Vendas" carregada e visível no painel "Dados"; a confirmação de que conseguiu abrir e fechar o Editor do Power Query sem perder os dados (a lista "Etapas Aplicadas" mostra ao menos a etapa "Fonte"); e o arquivo salvo no formato ".pbix" com o próprio nome. Esse arquivo será reaberto na próxima aula para a limpeza dos dados.`,
    },
  ],
};
