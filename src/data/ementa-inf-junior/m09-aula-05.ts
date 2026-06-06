import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Cores e Títulos Divertidos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Deixar o gráfico bonito e fácil de entender pintando cada barra ou fatia com cores alegres e colocando um título grande.`,
  descricao: `Nesta aula as crianças descobrem que um gráfico não precisa ser cinza e sem graça: ele pode ser colorido e ter um nome bem grande no topo. Até agora elas aprenderam a transformar números em desenho, a fazer gráficos de barras e de pizza. Agora vamos cuidar da beleza e da clareza, ensinando a pintar cada parte e a dar um nome ao gráfico para que qualquer pessoa entenda o que ele mostra.

A ideia central é simples: o gráfico conta uma história, e a cor ajuda a contar essa história. Quando cada barra ou cada fatia tem uma cor diferente e alegre, fica muito mais fácil enxergar quem é o maior, quem é o menor e quem é cada coisa. O título, por sua vez, é como o nome de um livro: ele avisa logo de cara sobre o que o gráfico está falando, por exemplo "Frutas que eu mais gosto".

O foco do mês é Gráficos, e o entregável é um painel simples com gráfico. Esta aula é a etapa do capricho: as crianças vão clicar em uma barra ou fatia, abrir as opções de cor e escolher tons vivos como vermelho, amarelo, verde e azul. Em seguida vão clicar no título e, com a sua ajuda para escrever poucas palavras, deixar um nome grande e divertido. Tudo é demonstrar, mostrar e deixar a criança fazer, porque a leitura e a escrita ainda estão em desenvolvimento.

Como a turma tem até 10 alunos, dá para passar de mesa em mesa e garantir que cada criança consiga pintar pelo menos uma parte do gráfico e digitar ou ditar o título. O resultado precisa ser visível e celebrado: um gráfico colorido e nomeado no fim da aula é uma vitória que prepara o painel final do mês.`,
  materiais: [
    `Computadores ligados, um por criança (ou em duplas), com Excel ou Google Planilhas já aberto e o gráfico da aula anterior pronto na tela.`,
    `Projetor ou TV conectado ao computador do professor para demonstrar cada clique em tela grande.`,
    `Arquivo modelo pronto: uma planilha com uma tabelinha simples (ex.: frutas e quantidades) e um gráfico de barras ou de pizza já criado, só faltando cor e título.`,
    `Cartões ou folhas com palavras curtas e fáceis para o título (ex.: "Frutas", "Cores", "Bichos", "Sabores"), para as crianças copiarem ou escolherem.`,
    `Lápis de cor ou giz de cera e folhas em branco para a atividade no papel.`,
    `Lista de cores alegres impressa e colada na parede (vermelho, amarelo, verde, azul, laranja, rosa, roxo) para apoiar a escolha.`,
    `Adesivos ou carimbos de elogio para celebrar os gráficos prontos e coloridos.`,
  ],
  conceitosChave: [
    `Cor — a tinta que a gente coloca em cada barra ou fatia do gráfico para deixar bonito e fácil de ver.`,
    `Título — o nome grande que fica em cima do gráfico e avisa do que ele está falando.`,
    `Barra — a torrezinha em pé do gráfico; cada uma pode ter a sua cor.`,
    `Fatia — cada pedaço do gráfico de pizza; cada fatia pode ganhar uma cor diferente.`,
    `Selecionar — clicar em cima de uma parte para "acordar" ela e poder mudar a cor.`,
    `Paleta — a caixinha de cores que aparece para a gente escolher o tom que mais gosta.`,
    `Caprichar — fazer com carinho e capricho para o gráfico ficar lindo e fácil de entender.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. Mudar cor e título é uma das coisas mais fáceis e visuais do Excel e do Google Planilhas, e por isso encanta as crianças. Existem dois caminhos principais para colorir: o caminho de mudar TODAS as barras de uma vez (clicando uma vez na barra) e o caminho de mudar UMA barra ou UMA fatia só (clicando duas vezes, devagar, na mesma barra). Saber essa diferença evita 90% da confusão.

No Excel, ao clicar no gráfico aparece o painel lateral e a aba "Formatar" no menu de cima, além do balde de tinta (ícone "Preenchimento da forma"). No Google Planilhas, ao dar dois cliques no gráfico abre o "Editor de gráficos" à direita, na aba "Personalizar". O título sempre se muda clicando direto em cima do texto do título e digitando. Teste tudo uma vez antes da aula, com o arquivo modelo na tela.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): mostre no projetor dois gráficos iguais, um cinza e sem nome, outro colorido e com título grande. Pergunte: "Qual é mais bonito? Qual a gente entende mais rápido?" As crianças vão apontar o colorido. Diga que hoje todos vão deixar o gráfico assim, lindo.

2. Conteúdo novo guiado (15 min): com o arquivo modelo aberto, demonstre clicando UMA vez no gráfico para selecioná-lo. No Excel, clique UMA vez numa barra (seleciona todas), depois clique no balde "Preenchimento da forma" na aba "Formatar" e escolha uma cor. Mostre que clicando DUAS vezes devagar na mesma barra seleciona só ela, e aí dá para pintar uma cor diferente. No Google Planilhas, dê dois cliques no gráfico, abra "Personalizar", entre em "Série" e troque a cor; para uma barra só, clique nela até ficar selecionada sozinha. Depois clique no título e digite um nome grande, por exemplo "Frutas que eu amo".

3. Mão na massa (25 min): cada criança pinta as barras ou fatias do próprio gráfico com cores alegres e coloca um título. Passe de mesa em mesa. Para o título, deixe a criança ditar a palavra e você ajuda a escrever, ou ela copia de um cartão. Celebre cada cor escolhida.

4. Desafio e compartilhar (10 min): cada criança vira a tela e mostra o gráfico colorido para a turma, dizendo a cor favorita e lendo (ou ditando) o título. Aplausos para todos.

## Como explicar para crianças de 5 a 9 anos

Use a analogia da pintura: "O gráfico é um desenho em branco, e a gente é o pintor." Diga que clicar uma vez é "acordar" a barra, e que a caixinha de cores é a "caixa de lápis de cor do computador". Para o título, fale que é "o nome do desenho", igual ao nome num desenho que elas fazem e colocam na geladeira. Mostre sempre antes; fale pouco e aponte muito na tela grande.

## Erros comuns e como ajudar

A criança clica rápido demais duas vezes e o computador entende clique duplo errado: peça para clicar "devagarzinho, com pausa". Ela pinta tudo da mesma cor sem querer: explique que isso acontece quando seleciona todas; mostre como clicar de novo para pegar só uma. Ela apaga os números ou move o gráfico sem querer: use Ctrl+Z (desfazer) e diga "voltou no tempo". No título, ela trava na escrita: deixe ditar e você digita, ou ofereça o cartão para copiar. Lembre que o objetivo é colorir e nomear, não escrever certinho.`,
  exercicios: [
    {
      titulo: `Pinte uma barra comigo`,
      tipo: `Prática no computador (guiada)`,
      tempo: `8 min`,
      guiaProfessor: `Faça junto com a turma, passo a passo no projetor. Espere todos clicarem antes de avançar. Repita devagar a diferença entre "um clique pinta todas" e "dois cliquinhos pinta só uma".`,
      atividade: `No seu gráfico, clique numa barra e escolha uma cor bem alegre na caixinha de cores. Depois clique só numa barra e deixe ela de outra cor diferente das outras.`,
      gabarito: `A criança acertou se o gráfico ficou com pelo menos uma cor nova e uma barra com cor diferente das demais. Sucesso é ver cor alegre na tela, não a tonalidade exata escolhida.`,
    },
    {
      titulo: `Caça à cor alegre`,
      tipo: `Jogo`,
      tempo: `8 min`,
      guiaProfessor: `Fale o nome de uma cor (ex.: "amarelo!") e as crianças correm para deixar uma parte do gráfico naquela cor. Conte até cinco. Vá variando as cores. É jogo de rapidez e diversão, sem perdedor.`,
      atividade: `Quando o professor disser uma cor, pinte uma barra ou fatia do seu gráfico com essa cor antes de ele contar até cinco. Depois escolha sua cor favorita de todas.`,
      gabarito: `Acertou quem conseguiu aplicar a cor pedida em alguma parte do gráfico dentro do tempo. Todas as crianças que pintaram alguma parte venceram a rodada.`,
    },
    {
      titulo: `Roda das cores favoritas`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sentados em roda, cada criança mostra a tela e conta qual cor usou e por quê. Faça perguntas: "Essa cor te deixa feliz? Dá para ver bem essa barra?" Valorize cada escolha e ajude quem fica tímido.`,
      atividade: `Mostre seu gráfico para a turma e diga: qual foi a sua cor favorita e por que você gosta dela? A cor ajuda a ver melhor o gráfico?`,
      gabarito: `Não há cor certa ou errada. A criança acerta quando consegue apontar uma cor que usou e dizer com suas palavras por que gostou. Qualquer justificativa simples vale.`,
    },
    {
      titulo: `Meu gráfico no papel`,
      tipo: `Desenho no papel`,
      tempo: `9 min`,
      guiaProfessor: `Entregue folha e lápis de cor. Peça para desenharem três torrezinhas (barras) ou uma pizza com fatias e pintarem cada parte de uma cor. No alto, ajude a escrever um título. Isso fixa o conceito longe da tela.`,
      atividade: `Desenhe três barras (ou uma pizza com fatias) numa folha. Pinte cada parte de uma cor diferente e alegre. No topo, escreva um título grande, como "Minhas Cores".`,
      gabarito: `Acertou quem desenhou as partes, pintou cada uma com cores diferentes e colocou um título no topo (mesmo com a sua ajuda na escrita). O capricho nas cores e a presença do título mostram que entendeu.`,
    },
    {
      titulo: `Desafio: cores e título prontos`,
      tipo: `Desafio no computador`,
      tempo: `9 min`,
      guiaProfessor: `Etapa final e mais completa. Cada criança deixa o gráfico inteiro colorido, com cada barra ou fatia de uma cor, e um título grande digitado (com sua ajuda). Ajude a ditar e escrever poucas palavras. Salve e elogie o resultado.`,
      atividade: `Deixe TODAS as barras ou fatias do seu gráfico coloridas, cada uma de uma cor alegre. Depois clique no título e escreva um nome grande e divertido para o seu gráfico.`,
      gabarito: `Acertou quem terminou com o gráfico todo colorido (sem partes cinzas) e com um título escrito no topo. O gráfico colorido e nomeado é o sinal de sucesso e já serve para o painel do fim do mês.`,
    },
  ],
};
