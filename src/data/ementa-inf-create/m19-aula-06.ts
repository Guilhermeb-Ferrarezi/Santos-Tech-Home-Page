import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Filtros, segmentação e gráficos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Transformar a tabela dinâmica em um painel interativo, usando filtros, segmentação de dados (slicers) e gráficos dinâmicos que mudam com um único clique.`,
  descricao: `Na aula passada o aluno aprendeu a montar uma tabela dinâmica que resume centenas de linhas em poucos segundos. Agora chegou a hora de deixar essa tabela viva e interativa. Em vez de ficar arrastando campos toda hora, o aluno vai criar botões coloridos que filtram os dados com um clique e gráficos que se transformam sozinhos quando a informação muda. É o momento em que a planilha deixa de ser só uma tabela e vira algo parecido com os painéis que aparecem em jornais e em aplicativos.

A segmentação de dados, conhecida pelo nome em inglês slicer, é o recurso mais divertido desta aula. São aqueles botões grandes que filtram a tabela dinâmica de forma visual. Em vez de abrir uma setinha minúscula e marcar caixas, o aluno clica em um botão e a tabela inteira responde. Para um adolescente, isso é instantâneo e gratificante: ele clica em "Ação", a tabela mostra só filmes de ação; clica em "Comédia", a tabela muda na hora.

Os gráficos dinâmicos completam a experiência. Um gráfico dinâmico está ligado à tabela dinâmica, então quando o aluno mexe na segmentação ou troca um filtro, o gráfico se redesenha sozinho. Barras sobem e descem, fatias da pizza crescem e encolhem. O aluno percebe que números viram desenho, e que um desenho conta uma história muito mais rápido do que uma lista de valores.

Ao final da aula o aluno terá um mini painel funcionando: uma tabela dinâmica, alguns botões de segmentação e pelo menos um gráfico que reage aos cliques. Esse painel é a base direta da planilha inteligente que ele vai finalizar nas próximas duas aulas. Aqui o foco é a interatividade e a descoberta de tendências escondidas, não decorar passos.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e atualizado (versão 2016 ou superior, ou Microsoft 365), um por aluno`,
    `Projetor ou tela grande ligada ao computador do professor para a demonstração guiada`,
    `Arquivo de exemplo "filmes-da-turma.xlsx" com colunas Filme, Gênero, Ano, Plataforma, Nota e Minutos (cerca de 60 linhas)`,
    `A planilha com a tabela dinâmica que cada aluno montou na Aula 5 (caso não tenha, usar o arquivo de exemplo)`,
    `Slides ou cartaz com o passo a passo de "Inserir Segmentação de Dados" e "Gráfico Dinâmico"`,
    `Folha impressa com o desafio final para os alunos que terminarem antes`,
  ],
  conceitosChave: [
    `Filtro da tabela dinâmica — recurso que esconde temporariamente as linhas que você não quer ver, mostrando só parte dos dados sem apagar nada.`,
    `Segmentação de dados (slicer) — painel de botões grandes e clicáveis que filtra a tabela dinâmica de forma visual; clicar em um botão muda a tabela na hora.`,
    `Gráfico dinâmico — gráfico ligado a uma tabela dinâmica que se redesenha sozinho sempre que você muda um filtro ou uma segmentação.`,
    `Campo de filtro — área especial da tabela dinâmica, acima das linhas, onde você arrasta um campo para filtrar a tabela inteira por aquele critério.`,
    `Tendência — padrão que aparece nos dados quando a gente organiza e visualiza, por exemplo "comédias têm nota maior" ou "filmes ficaram mais longos com os anos".`,
    `Conectar segmentações — recurso que faz um mesmo botão de segmentação controlar duas ou mais tabelas dinâmicas ao mesmo tempo.`,
    `Legenda — texto do gráfico que explica o que cada cor ou barra representa, essencial para alguém entender o desenho sozinho.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. Tudo nesta aula é clicar em botões, e o Excel mostra o resultado na hora. Os três recursos são: filtro (esconde linhas), segmentação de dados (botões coloridos que filtram) e gráfico dinâmico (desenho que muda sozinho). Antes da aula, abra o arquivo de exemplo, clique uma vez dentro da tabela dinâmica e confira que aparece a aba verde "Análise de Tabela Dinâmica" (em versões antigas, "Analisar") na faixa de opções. É de lá que sai quase tudo. Faça o caminho completo uma vez sozinho para ganhar confiança: inserir segmentação, clicar nos botões e ver a tabela mudar.

## Passo a passo da aula

Aquecimento (10 min): retome a tabela dinâmica da Aula 5. Pergunte: "como você faria para ver só os filmes de comédia?". Deixe alguém tentar pela setinha do rótulo de linha. Mostre que funciona, mas é trabalhoso. Diga: "hoje vamos criar botões para isso".

Conteúdo novo guiado (15 min): no projetor, clique uma vez dentro da tabela dinâmica. Vá na aba "Análise de Tabela Dinâmica" e clique em "Inserir Segmentação de Dados". Marque a caixa "Gênero" e clique em OK. Aparece um painel com botões. Clique em "Comédia" e mostre a tabela mudando. Clique em outro botão segurando a tecla Ctrl para selecionar mais de um. Mostre o ícone de "limpar filtro" (o funil com x vermelho) no canto do painel. Depois insira um gráfico: com o cursor na tabela, vá em "Gráfico Dinâmico", escolha "Colunas" e clique OK. Agora clique nos botões de segmentação e mostre o gráfico se redesenhando sozinho. Esse é o momento "uau" da aula.

Mão na massa (25 min): cada aluno repete nos próprios computadores. Peça que insiram uma segmentação por "Gênero" e outra por "Plataforma", e um gráfico de colunas mostrando a nota média por gênero. Circule pela sala. Incentive a clicar nos botões e observar tendências: "qual gênero tem a maior barra?".

Desafio e compartilhar (10 min): peça para cada aluno descobrir uma tendência clicando nos botões e anotar uma frase, por exemplo "filmes de animação têm a maior nota". Dois ou três compartilham a descoberta e mostram o painel no projetor.

## Como explicar de forma clara

Use a imagem do controle remoto: "a segmentação é o controle remoto da sua tabela; cada botão troca o canal". Para o gráfico dinâmico, diga "ele é grudado na tabela, então quando a tabela muda, ele muda junto, igual sombra". Evite a palavra "filtrar" no começo; prefira "mostrar só" e "esconder". Sempre que inserir algo novo, peça antes ao aluno o palpite: "se eu clicar em Ação, o que acontece com o gráfico?". O palpite antes do clique fixa o conceito. Comemore as descobertas de tendência; é isso que faz dados virarem interessante para a idade.

## Erros comuns e como ajudar

O erro mais comum é o aluno clicar fora da tabela dinâmica, e aí a aba "Análise de Tabela Dinâmica" some. Solução: peça para clicar dentro de qualquer número da tabela e a aba volta. Outro erro é a segmentação não filtrar nada porque foi inserida a partir de uma tabela comum, não da dinâmica; confirme que o cursor estava dentro da tabela dinâmica antes de inserir. Muitos alunos esquecem de limpar o filtro e acham que "sumiram dados"; mostre o ícone do funil com x vermelho no topo do painel. No gráfico, se ele não mudar ao clicar nos botões, geralmente é um gráfico estático comum, não dinâmico; oriente a apagar e refazer por "Gráfico Dinâmico". Por fim, alguns selecionam vários botões sem querer; explique que clicar em um botão limpa os outros, e que segurar Ctrl é o que mantém a seleção múltipla.`,
  exercicios: [
    {
      titulo: `Meu primeiro botão de segmentação`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja com o cursor dentro da tabela dinâmica antes de começar. Mostre no projetor onde fica a aba "Análise de Tabela Dinâmica". Caminhe pela sala conferindo se a aba apareceu para todos.`,
      atividade: `Clique dentro da sua tabela dinâmica. Vá na aba "Análise de Tabela Dinâmica", clique em "Inserir Segmentação de Dados", marque a caixa "Gênero" e clique em OK. Depois clique no botão "Comédia" e observe a tabela mudar.`,
      gabarito: `O aluno deve ter um painel de botões com os gêneros. Ao clicar em "Comédia", a tabela dinâmica passa a mostrar apenas as linhas desse gênero. Para voltar a ver tudo, basta clicar no ícone do funil com x vermelho no canto superior do painel de segmentação.`,
    },
    {
      titulo: `Dois controles na mesma planilha`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce que cada segmentação é inserida do mesmo jeito, escolhendo um campo diferente. Lembre que clicar em um botão limpa os outros e que segurar a tecla Ctrl mantém a seleção múltipla.`,
      atividade: `Insira uma segunda segmentação de dados, agora pela caixa "Plataforma". Posicione os dois painéis lado a lado. Clique em "Ação" no painel de Gênero e, segurando Ctrl, clique em duas plataformas no outro painel. Observe a tabela respondendo aos dois filtros ao mesmo tempo.`,
      gabarito: `A planilha deve ter dois painéis de segmentação: um de Gênero e um de Plataforma. A tabela mostra apenas filmes que atendem aos dois critérios ao mesmo tempo, por exemplo filmes de ação que estejam nas plataformas escolhidas. Segurar Ctrl permite marcar mais de uma plataforma.`,
    },
    {
      titulo: `O gráfico que se mexe sozinho`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Confirme que o aluno usou "Gráfico Dinâmico" e não um gráfico comum, pois só o dinâmico reage aos botões. Peça que cada um faça um palpite antes de clicar: "o que vai acontecer com a barra?". Valorize a observação da tendência.`,
      atividade: `Com o cursor na tabela dinâmica, vá em "Gráfico Dinâmico", escolha o tipo "Colunas" e clique OK. Configure para mostrar a nota média por gênero. Agora clique nos botões de segmentação e descreva, em uma frase, o que acontece com as colunas do gráfico.`,
      gabarito: `Deve aparecer um gráfico de colunas ligado à tabela dinâmica. Ao clicar nos botões de segmentação, as colunas mudam de altura ou somem na hora, porque o gráfico está conectado à tabela. Uma frase correta seria: "quando eu clico em Comédia, sobra só a coluna de comédia e o gráfico se redesenha sozinho".`,
    },
    {
      titulo: `Caça à tendência em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas e peça que revezem no teclado. Estimule perguntas investigativas. Circule provocando: "e se vocês olharem por ano? E por plataforma?". Cada dupla deve registrar pelo menos duas tendências por escrito.`,
      atividade: `Em dupla, usem as segmentações e o gráfico para investigar os dados. Cliquem em diferentes gêneros, plataformas e anos. Anotem duas tendências que descobriram, cada uma em uma frase clara, e marquem qual segmentação usaram para chegar nela.`,
      gabarito: `Cada dupla entrega duas frases de tendência apoiadas nos dados, como "filmes de animação têm a maior nota média" ou "os filmes ficaram mais longos depois de 2015". O importante é que a frase seja sustentada pelo que aparece no gráfico ou na tabela ao usar a segmentação indicada, e não um chute.`,
    },
    {
      titulo: `Roda de conversa: qual painel conta a melhor história?`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Coloque as cadeiras em roda ou conecte os computadores ao projetor por vez. Conduza a discussão com perguntas, sem dar a resposta pronta. Reforce a ideia de legenda e de título claro. Feche conectando com a planilha inteligente das próximas aulas.`,
      atividade: `Cada aluno mostra seu painel no projetor por cerca de um minuto e diz a tendência mais interessante que encontrou. A turma discute: qual painel ficou mais fácil de entender? O gráfico tinha título e legenda claros? Os botões de segmentação ajudaram a contar a história?`,
      gabarito: `Não há resposta única, mas uma boa conversa conclui que os melhores painéis têm título claro, legenda visível e usam a segmentação para mostrar uma tendência de forma rápida. O professor confirma que todos entenderam que filtro, segmentação e gráfico dinâmico servem para transformar números em uma história que se entende de relance.`,
    },
  ],
};
