import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "O que é o Power BI?",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer o Power BI Desktop, entender para que ele serve e importar uma planilha simples para ver os dados aparecerem na tela.`,
  descricao: `O Power BI é um programa gratuito da Microsoft que serve para transformar tabelas cheias de números em gráficos e painéis fáceis de entender. Em vez de olhar para centenas de linhas no Excel, a pessoa monta uma tela visual com colunas, mapas e indicadores que mostram, num piscar de olhos, o que está acontecendo. É como trocar uma lista enorme de notas por um boletim colorido que você entende na hora.

As empresas usam o Power BI porque ele ajuda a tomar decisões com base em dados de verdade. Uma loja descobre qual produto vende mais, um time de futebol vê quais jogadores marcam mais gols, um canal do YouTube acompanha quais vídeos têm mais visualizações. Quem domina essa ferramenta consegue contar histórias com números e isso é muito valorizado no mundo do trabalho. Para os alunos, é a chance de criar painéis parecidos com os que vemos em telejornais e relatórios profissionais.

Nesta primeira aula o objetivo é só conhecer o terreno. O aluno abre o Power BI Desktop, descobre que ele tem uma faixa de opções no topo (parecida com a do Excel) e três painéis importantes à direita: Campos, Visualizações e Filtros. Também vamos comparar o Power BI com o Excel: o Excel é ótimo para digitar e calcular dados; o Power BI é especialista em mostrar esses dados de forma bonita e interativa. Eles trabalham juntos, como caderno e canetas coloridas.

No final, cada aluno vai importar uma planilha simples (uma lista de jogos ou de vendas de lanches) só para ter a emoção de ver os dados aparecerem dentro do programa. Não vamos montar gráficos ainda, isso vem nas próximas aulas. Hoje a vitória é abrir o programa, reconhecer as áreas e fazer os primeiros dados surgirem na tela.`,
  materiais: [
    `Computadores com o Power BI Desktop instalado e o Excel disponível (um por aluno).`,
    `Projetor ou TV ligada ao computador do professor para mostrar cada passo.`,
    `Arquivo de exemplo em Excel chamado "vendas-lanchonete.xlsx" (colunas: Lanche, Quantidade, Valor), copiado na área de trabalho de cada máquina.`,
    `Conta Microsoft gratuita (e-mail) caso o Power BI peça login ao abrir; tenha um e-mail de reserva da escola pronto.`,
    `Acesso à internet para o primeiro carregamento do programa, se necessário.`,
    `Quadro branco ou slide com a frase "Excel digita, Power BI mostra" para fixar a ideia.`,
    `Folha impressa com o "mapa da tela" do Power BI (faixa de opções e os três painéis) para cada aluno consultar.`,
  ],
  conceitosChave: [
    `Power BI Desktop — programa gratuito da Microsoft que transforma tabelas de dados em gráficos e painéis interativos.`,
    `Dados — as informações que colocamos no programa, como nomes, números e datas de uma planilha.`,
    `Painel (dashboard) — uma tela única que reúne vários gráficos e números para contar uma história de forma rápida.`,
    `Faixa de opções — a barra de botões no topo do programa, dividida em abas, onde ficam os comandos.`,
    `Painel de Campos — a lista à direita que mostra todas as tabelas e colunas que importamos.`,
    `Painel de Visualizações — a área à direita com os ícones dos tipos de gráfico que podemos criar.`,
    `Importar — a ação de trazer dados de um arquivo de fora (como um Excel) para dentro do Power BI.`,
  ],
  treinamento: `## O que o professor precisa saber

O Power BI Desktop é gratuito e roda no Windows. Se ainda não estiver instalado, baixe pela Microsoft Store (procure por "Power BI Desktop" e clique em "Obter") ou pelo site da Microsoft. Ao abrir pela primeira vez, ele pode mostrar uma tela de boas-vindas com novidades: basta fechar no "x" do canto. Às vezes ele pede um e-mail para login; use uma conta Microsoft gratuita. Antes da aula, abra o programa uma vez sozinho para ver onde estão as três áreas principais: à direita ficam os painéis Visualizações, Campos e Filtros; no topo, a faixa de opções com abas (Página Inicial, Inserir, Modelagem, Exibição). Você não precisa dominar nada além de abrir o programa e importar um Excel, que é o que faremos hoje.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Pergunte à turma quem já viu um gráfico no telejornal ou num vídeo. Mostre no projetor uma tabela enorme de números no Excel e, ao lado, uma imagem de um painel colorido. Pergunte: "Qual é mais fácil de entender?" Escreva no quadro a frase "Excel digita, Power BI mostra".

Conteúdo novo guiado (15 min): No seu computador, abra o Power BI Desktop. Mostre a faixa de opções no topo e clique na aba "Página Inicial". Aponte os três painéis da direita, um de cada vez: "Visualizações" (os ícones de gráfico), "Campos" (onde aparecem as tabelas) e "Filtros". Explique que ainda estão vazios porque não trouxemos dados. Compare com o Excel: o Excel é a planilha onde digitamos; o Power BI é a tela que mostra os dados de forma bonita.

Mão na massa (25 min): Peça que cada aluno abra o Power BI no seu computador. Guie a importação: na aba "Página Inicial", clique no botão "Obter dados" (ou "Excel"). Na janela, escolha "Pasta de Trabalho do Excel", clique em "Conectar", encontre o arquivo "vendas-lanchonete.xlsx" na área de trabalho e clique em "Abrir". Vai aparecer a janela "Navegador": marque a caixinha ao lado da tabela e clique em "Carregar". Mostre que, no painel de Campos à direita, surgiram os nomes das colunas (Lanche, Quantidade, Valor). Comemore: os dados estão dentro do programa! Peça que abram a aba "Exibição de Dados" (ícone de tabela na barra lateral esquerda) para ver as linhas.

Desafio e compartilhar (10 min): Desafie cada aluno a achar e dizer em voz alta quantas colunas e quantas linhas a tabela tem. Faça uma rodada rápida: cada um aponta na tela onde está o painel de Campos. Feche perguntando "O que o Power BI faz que o Excel não faz tão bem?".

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o Excel é como um caderno onde escrevemos as informações, e o Power BI é como as canetas coloridas e os adesivos que deixam tudo fácil de ler. "Importar dados" é como copiar uma foto do celular para o computador: a informação sai de um lugar e entra no outro. Chame o painel como "a tela do telejornal" que mostra tudo de um jeito bonito. Evite palavras difíceis: fale "trazer os dados" em vez de "conectar fonte de dados". Mostre cada clique devagar e peça que repitam junto.

## Erros comuns e como ajudar

O erro mais frequente é não achar o arquivo: verifique antes que o Excel esteja na área de trabalho de todas as máquinas. Se o aluno clicar fora da caixinha no Navegador, o botão "Carregar" fica apagado; basta marcar a tabela certa. Alguns confundem "Obter dados" com "Salvar"; mostre o ícone certo no projetor. Se o programa pedir login e travar a aula, oriente a fechar a janela ou usar o e-mail da escola. Caso o painel de Campos pareça vazio, peça para clicar na seta ao lado do nome da tabela para expandir as colunas.`,
  exercicios: [
    {
      titulo: `Caça às áreas da tela`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Projete a tela do Power BI já aberto. Peça que cada aluno aponte no próprio computador onde fica cada área. Passe de mesa em mesa conferindo.`,
      atividade: `Com o Power BI Desktop aberto, encontre e aponte com o dedo na tela: a faixa de opções (no topo), o painel de Visualizações, o painel de Campos e o painel de Filtros. Diga em voz baixa o nome de cada um.`,
      gabarito: `A faixa de opções fica na parte de cima, com abas como "Página Inicial" e "Inserir". À direita estão, de cima para baixo: Filtros, Visualizações (com ícones de gráficos) e Campos (lista de tabelas). Todos estão à direita, menos a faixa de opções, que fica no topo.`,
    },
    {
      titulo: `Importando minha primeira planilha`,
      tipo: `Desafio individual`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre cada clique no projetor antes de soltar a turma. Confirme que o arquivo "vendas-lanchonete.xlsx" está na área de trabalho de todos. Comemore quando os campos aparecerem.`,
      atividade: `Importe o arquivo "vendas-lanchonete.xlsx" para o Power BI: use "Obter dados", escolha "Pasta de Trabalho do Excel", selecione o arquivo, marque a tabela no Navegador e clique em "Carregar". Confira se os nomes das colunas apareceram no painel de Campos.`,
      gabarito: `O caminho correto é Página Inicial > Obter dados > Pasta de Trabalho do Excel > Conectar > escolher o arquivo > Abrir > marcar a caixinha da tabela no Navegador > Carregar. No fim, no painel de Campos à direita aparecem as colunas Lanche, Quantidade e Valor.`,
    },
    {
      titulo: `Excel ou Power BI?`,
      tipo: `Atividade em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Entregue ou projete cinco situações. Cada dupla decide qual ferramenta é melhor e justifica em uma frase. Depois confira no quadro.`,
      atividade: `Em dupla, leiam as situações e decidam qual ferramenta usar: (1) digitar a lista de notas da turma; (2) mostrar um painel colorido para a diretoria; (3) somar valores numa planilha; (4) criar um gráfico interativo; (5) registrar as vendas do dia uma por uma.`,
      gabarito: `1 — Excel (digitar e registrar). 2 — Power BI (painel visual). 3 — Excel (cálculo na planilha). 4 — Power BI (gráficos interativos). 5 — Excel (registro linha a linha). Regra geral: Excel digita e calcula, Power BI mostra de forma bonita.`,
    },
    {
      titulo: `Roda de conversa: onde eu já vi um painel?`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Faça perguntas abertas e anote no quadro os exemplos citados. Valorize toda resposta e ligue cada exemplo à ideia de "transformar dados em decisão".`,
      atividade: `Conversem juntos: onde vocês já viram gráficos ou painéis no dia a dia (jogos, redes sociais, telejornal, app de banco)? O que aquele painel ajudava a decidir? Cada um cita pelo menos um exemplo.`,
      gabarito: `Não há resposta única. Exemplos válidos: estatísticas de um jogo de videogame, número de seguidores no Instagram, gráficos de casos no telejornal, gastos no app do banco, visualizações de um vídeo. Em todos, os dados viram informação visual que ajuda a decidir algo.`,
    },
    {
      titulo: `Mini relatório do explorador`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que abram a "Exibição de Dados" (ícone de tabela na barra esquerda) para contar linhas e colunas. Oriente a escrever as respostas num documento ou caderno. Circule ajudando quem se perder.`,
      atividade: `Depois de importar a planilha, abra a "Exibição de Dados" e escreva um mini relatório respondendo: (a) quantas colunas a tabela tem; (b) os nomes das colunas; (c) quantas linhas de dados existem; (d) uma frase sua dizendo o que o Power BI fez de diferente do Excel.`,
      gabarito: `(a) Três colunas. (b) Lanche, Quantidade e Valor. (c) O número de linhas depende do arquivo de exemplo usado (por exemplo, cinco lanches = cinco linhas); o aluno deve contar na Exibição de Dados. (d) Resposta pessoal aceita, desde que diga que o Power BI mostra os dados de forma visual/interativa, enquanto o Excel é usado para digitar e calcular.`,
    },
  ],
};
