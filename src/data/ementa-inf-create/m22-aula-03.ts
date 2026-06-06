import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Desenhando o Mini-Sistema",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Planejar no papel a estrutura de um mini-sistema no Excel, decidindo as abas de cadastro, dados e relatório, além dos campos e botões que ele terá.`,
  descricao: `Até agora os alunos aprenderam a conectar macros num só fluxo e a usar um botão para disparar várias ações. Nesta aula damos um passo para trás, saindo do código, para pensar como um verdadeiro projetista de sistemas. Antes de programar qualquer coisa, todo bom desenvolvedor desenha o que vai construir. É exatamente isso que vamos fazer: planejar o mini-sistema no papel antes de colocar a mão no Excel.

A grande ideia é que um sistema não é uma planilha bagunçada com tudo misturado. Um sistema separa as coisas em lugares diferentes, cada um com uma função clara. Por isso vamos trabalhar com três abas: uma aba de cadastro (onde a pessoa digita os dados e clica nos botões), uma aba de dados (a tabela onde tudo fica guardado e organizado) e uma aba de relatório (onde aparecem números, totais e gráficos que resumem a informação). Essa separação é o coração de quase todo programa que existe no mundo real.

Nesta aula o aluno escolhe o tema do seu próprio sistema. Ele pode criar um cadastro de alunos da escola, um cadastro de produtos de uma loja, um controle de jogos da sua coleção ou um relatório de gastos da mesada. A escolha é livre, mas a estrutura é a mesma. Depois de escolher, ele desenha numa folha quais campos o cadastro vai ter (por exemplo: nome, idade, turma) e quais botões serão necessários (por exemplo: Salvar, Limpar, Pesquisar).

O resultado desta aula é um rascunho em papel, uma espécie de planta da casa que vamos construir nas próximas semanas. Esse planejamento vai guiar a programação em VBA das aulas seguintes. Quando o aluno entende que pensar antes de codar economiza muito tempo e evita confusão, ele dá um salto enorme na maturidade como programador.`,
  materiais: [
    `Computadores com Excel instalado e a guia Desenvolvedor habilitada (com VBA disponível)`,
    `Projetor ou TV para o professor mostrar a tela e o desenho do sistema`,
    `Folhas de papel A4 em branco e lápis ou canetas coloridas para cada aluno`,
    `Arquivo de exemplo do professor: uma pasta de trabalho com as três abas (Cadastro, Dados e Relatório) já nomeadas`,
    `Régua para os alunos desenharem as tabelas e os botões de forma organizada`,
    `Cartões ou post-its coloridos (opcional) para representar campos e botões na lousa`,
  ],
  conceitosChave: [
    `Sistema — conjunto organizado de partes que trabalham juntas para realizar uma tarefa, como cadastrar e resumir informações.`,
    `Aba (planilha) — cada uma das páginas dentro de uma pasta de trabalho do Excel, identificada por uma guia na parte de baixo da tela.`,
    `Cadastro — a tela onde a pessoa digita as informações novas e usa botões para salvar ou limpar os dados.`,
    `Base de dados — a tabela onde todas as informações ficam guardadas em linhas e colunas de forma organizada.`,
    `Relatório — a aba que resume os dados em totais, contagens e gráficos para facilitar o entendimento.`,
    `Campo — cada pedaço de informação que o sistema guarda, como nome, idade ou preço.`,
    `Protótipo — desenho ou rascunho de como o sistema vai ficar, feito antes de programar de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em VBA para dar esta aula, porque hoje quase não vamos escrever código. O foco é planejamento. A mensagem central é simples: todo sistema sério é desenhado antes de ser construído. Imagine um arquiteto que constrói uma casa sem planta: provavelmente a porta ficaria no lugar errado. Com sistemas é igual.

Lembre apenas três palavras: Cadastro, Dados e Relatório. A aba de Cadastro é onde a pessoa digita e clica em botões. A aba de Dados é a tabela que guarda tudo. A aba de Relatório mostra os totais e gráficos. No Excel, cada aba é uma guia lá embaixo, e você cria uma nova clicando no sinal de mais ao lado das guias. Renomeie cada uma com dois cliques sobre o nome da guia.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Comece perguntando: o que vocês acham que tem por dentro de um aplicativo? Liste no quadro respostas como tela, botões e onde os dados ficam guardados. Relembre rapidamente as duas aulas anteriores, em que um botão disparava várias macros. Diga que agora vamos planejar o sistema inteiro que vai usar esses botões.

Conteúdo novo guiado (15 min): Abra o Excel e o seu arquivo de exemplo no projetor. Mostre as três abas embaixo: Cadastro, Dados e Relatório. Clique em cada guia e explique a função de cada uma. Na aba Cadastro, mostre como ficariam os campos (digite Nome em A1, Idade em A2, Turma em A3) e desenhe retângulos como botões usando Inserir e depois Formas. Na aba Dados, mostre uma tabela com colunas Nome, Idade e Turma. Na aba Relatório, mostre uma célula com um total simples, como uma contagem de quantas pessoas foram cadastradas. Repita em voz alta: o cadastro recebe, os dados guardam, o relatório resume.

Mão na massa (25 min): Distribua uma folha em branco para cada aluno. Peça que cada um escolha o tema do seu sistema (alunos, produtos, jogos, gastos). Na folha, eles desenham três caixas grandes representando as três abas. Dentro da caixa Cadastro, escrevem os campos que querem (por exemplo Nome, Preço, Categoria) e desenham os botões (Salvar, Limpar, Pesquisar). Na caixa Dados, desenham a tabela com as colunas. Na caixa Relatório, escrevem qual número querem ver (total de itens, soma de preços). Circule pela sala ajudando cada aluno a decidir entre três e cinco campos, sem exagerar.

Desafio e compartilhar (10 min): Lance o desafio: pensem em um botão a mais que deixaria o sistema mais esperto. Depois, dois ou três voluntários mostram o desenho para a turma e explicam por que escolheram aqueles campos. Elogie as boas ideias e guarde os desenhos, pois eles serão usados nas próximas aulas.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que o Cadastro é como o caixa de um mercado, onde você passa as compras. Os Dados são o estoque, a prateleira onde tudo fica guardado. O Relatório é como a nota fiscal no fim, que mostra o total. Evite a palavra banco de dados sozinha; prefira a tabela que guarda tudo. Sempre que falar de uma aba, aponte a guia na tela para o aluno associar o nome ao lugar.

## Erros comuns e como ajudar

O erro mais comum é o aluno querer dez campos e vários gráficos logo de cara. Oriente a começar pequeno, com três ou quatro campos. Outro erro é misturar cadastro e dados na mesma folha; reforce que cada coisa fica numa aba separada. Alguns vão esquecer os botões; lembre que sem botão o sistema não faz nada sozinho. Se um aluno travar na escolha do tema, ofereça duas opções prontas e deixe ele escolher uma.`,
  exercicios: [
    {
      titulo: `Conhecendo as três abas`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que os alunos abram o Excel e criem uma pasta de trabalho com três abas. Mostre como clicar no sinal de mais ao lado das guias e como renomear cada guia com dois cliques. Circule conferindo os nomes.`,
      atividade: `Abra o Excel. Crie três abas e renomeie-as exatamente como Cadastro, Dados e Relatório. Na aba Dados, escreva na primeira linha três títulos de colunas à sua escolha (por exemplo Nome, Idade, Turma).`,
      gabarito: `A pasta de trabalho deve ter três guias na parte de baixo, com os nomes Cadastro, Dados e Relatório. Na aba Dados, a linha 1 deve conter três títulos de colunas, por exemplo A1 com Nome, B1 com Idade e C1 com Turma. Conferir se os nomes das abas estão escritos corretamente.`,
    },
    {
      titulo: `Desenhando o meu sistema no papel`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Distribua uma folha em branco. Ajude cada aluno a escolher um tema e a limitar entre três e cinco campos. Reforce que cada aba vira uma caixa no desenho e que os botões precisam aparecer na caixa do Cadastro.`,
      atividade: `Escolha um tema (alunos, produtos, jogos ou gastos). Numa folha, desenhe três caixas com os nomes Cadastro, Dados e Relatório. Dentro da caixa Cadastro, escreva os campos e desenhe pelo menos dois botões. Na caixa Dados, desenhe a tabela com as colunas. Na caixa Relatório, escreva qual número você quer ver.`,
      gabarito: `O desenho deve conter três caixas identificadas como Cadastro, Dados e Relatório. A caixa Cadastro precisa ter de três a cinco campos e ao menos dois botões (por exemplo Salvar e Limpar). A caixa Dados deve mostrar colunas com os mesmos nomes dos campos. A caixa Relatório deve indicar um número resumo, como total de itens ou soma de preços.`,
    },
    {
      titulo: `Onde vai cada informação?`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Leia em voz alta uma lista de ações e itens. Os alunos devem dizer em qual das três abas cada um pertence. Use isto para corrigir confusões entre cadastro e dados.`,
      atividade: `Para cada item abaixo, escreva em qual aba ele pertence (Cadastro, Dados ou Relatório): 1) o botão Salvar; 2) a lista com todos os produtos já guardados; 3) o gráfico de pizza com as categorias; 4) a caixa onde se digita o nome novo; 5) o total de itens cadastrados.`,
      gabarito: `1) Cadastro (é onde ficam os botões). 2) Dados (é a tabela que guarda tudo). 3) Relatório (gráficos resumem a informação). 4) Cadastro (é onde a pessoa digita). 5) Relatório (totais e contagens ficam no resumo).`,
    },
    {
      titulo: `Projeto em dupla: comparar e melhorar`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas e peça que troquem os desenhos feitos no exercício anterior. Cada aluno analisa o sistema do colega e sugere uma melhoria concreta. Incentive comentários respeitosos e específicos.`,
      atividade: `Troque seu desenho com o do colega. Analise o sistema dele e escreva no papel uma sugestão de campo novo e uma sugestão de botão novo que deixariam o sistema mais útil. Depois, expliquem um para o outro por que sugeriram aquilo.`,
      gabarito: `Cada aluno deve registrar duas sugestões para o sistema do colega: um campo novo coerente com o tema (por exemplo, no cadastro de produtos, o campo Fornecedor) e um botão novo com função clara (por exemplo Pesquisar ou Excluir). A sugestão é válida se fizer sentido para o tema e melhorar o uso do sistema. Não há resposta única; avaliar a coerência e a clareza da justificativa.`,
    },
    {
      titulo: `Roda de conversa: por que planejar antes?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em roda. Conduza a discussão com perguntas abertas sobre a importância de planejar antes de programar. Anote no quadro as melhores ideias e conecte com a próxima aula, em que começaremos a construir o cadastro em VBA.`,
      atividade: `Em roda, responda e debata: por que um programador desenha o sistema antes de escrever o código? O que poderia dar errado se a gente programasse direto, sem planejar? Como o desenho que você fez hoje vai ajudar nas próximas aulas?`,
      gabarito: `Respostas esperadas: planejar ajuda a não esquecer campos e botões importantes; evita retrabalho e confusão; deixa claro onde cada informação vai ficar; economiza tempo na hora de programar; e o desenho serve de guia para construir o cadastro em VBA nas próximas semanas. Valorizar exemplos próprios dos alunos e a percepção de que pensar antes evita erros.`,
    },
  ],
};
