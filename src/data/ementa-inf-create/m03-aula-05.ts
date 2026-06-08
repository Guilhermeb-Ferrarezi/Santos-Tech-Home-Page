import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Artifacts: criar ao lado da conversa",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Fazer o aluno gerar seu primeiro Artifact no Claude (um documento ou tabela) e ajustá-lo por meio de pedidos, vendo o resultado mudar ao lado da conversa.`,
  descricao: `Até agora os alunos conversaram com o Claude, escreveram prompts, enviaram arquivos e analisaram imagens e planilhas. Tudo isso aconteceu dentro do chat, em forma de texto corrido. Nesta aula eles descobrem um recurso que muda a forma de trabalhar: os Artifacts. Quando o Claude cria algo maior e reaproveitável — um documento, uma tabela, uma lista organizada, um pequeno gráfico ou trecho de código — ele abre uma janela própria ao lado direito da conversa. Esse painel é o Artifact, e é nele que o conteúdo fica vivo e editável.

A grande ideia da aula é separar duas coisas na cabeça do aluno: de um lado está a conversa (onde ele pede e comenta); do outro lado está o Artifact (onde o resultado aparece pronto, limpo e organizado). Em vez de copiar texto solto do meio do chat, o aluno passa a olhar para um espaço dedicado que ele pode pedir para mudar quantas vezes quiser. É como ter um caderno digital ao lado do professor: você pede, ele reescreve, e a versão final fica sempre à vista.

O foco prático é a edição por conversa. O aluno gera um Artifact simples — por exemplo, a tabela de horários de estudos dele ou um pequeno texto de apresentação pessoal — e depois faz pedidos de ajuste em linguagem natural: "deixe a tabela com uma coluna a mais", "troque o título", "organize em ordem alfabética", "deixe mais curto". A cada pedido, o Claude atualiza o Artifact e o aluno vê a mudança acontecer. Esse vai e volta é o coração do entregável do mês, que é justamente criar um Artifact próprio.

Esta é a aula que abre a parte mais criativa do mês. Nas próximas, os alunos vão evoluir para mini-aplicativos interativos e depois montar e apresentar o Artifact final. Por isso, aqui o objetivo não é fazer algo perfeito, e sim entender a mecânica: onde o Artifact aparece, como pedir mudanças e como reconhecer que o painel lateral é um lugar diferente do chat.`,
  materiais: [
    `Computadores (um por aluno) com navegador atualizado e o Claude aberto em claude.ai, já com login feito`,
    `Conta do Claude para cada aluno (ou contas da escola já preparadas antes da aula)`,
    `Projetor ou TV ligada ao computador do professor para demonstrar ao vivo o painel de Artifacts`,
    `Arquivo de exemplo do professor: uma lista simples de tarefas ou horários para gerar a primeira tabela`,
    `Folha impressa (ou slide) com 4 pedidos de ajuste prontos para os alunos copiarem no início`,
    `Bloco de notas ou caderno para o aluno anotar o que pediu e o que mudou no Artifact`,
  ],
  conceitosChave: [
    `Artifact — janela que o Claude abre ao lado da conversa para mostrar um conteúdo pronto e editável, como um documento, uma tabela ou um gráfico.`,
    `Painel lateral — a área à direita da tela onde o Artifact aparece, separada da conversa que fica à esquerda.`,
    `Conversa (chat) — o lado esquerdo onde o aluno escreve os pedidos e comenta; é dali que ele controla o Artifact.`,
    `Pedido de ajuste — uma frase simples que pede uma mudança no Artifact, por exemplo "adicione uma coluna" ou "deixe o texto mais curto".`,
    `Versão — cada vez que o Claude muda o Artifact, ele guarda o estado anterior, e dá para voltar a uma versão antiga.`,
    `Documento e tabela — os dois tipos de Artifact que o aluno cria nesta aula: texto organizado e dados em linhas e colunas.`,
    `Copiar e baixar — botões do Artifact que permitem levar o conteúdo pronto para fora do Claude, como para o Word ou o Excel.`,
  ],
  treinamento: `## O que o professor precisa saber

Artifact é o nome que o Claude dá a um conteúdo "grande" que ele cria em uma janela separada, à direita da conversa. Nem todo pedido vira Artifact: uma resposta curta fica no chat normal. Mas quando você pede um documento, uma tabela, uma lista organizada, um gráfico simples ou código, o Claude abre o painel lateral automaticamente. Você não precisa apertar nenhum botão "criar Artifact" — ele aparece sozinho ao perceber que o conteúdo é reaproveitável. Se o painel não abrir, basta pedir de forma mais clara: "crie uma tabela com..." ou "monte um documento com...".

Dentro do Artifact existem botões úteis no canto: copiar, baixar e um histórico de versões (um ícone de relógio ou setas) que deixa voltar a estados anteriores. No celular o Artifact aparece como um cartão que se abre em tela cheia; na aula usamos o computador, onde ele fica lado a lado com o chat. Teste tudo isso uma vez antes da aula, com a sua própria conta no projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior perguntando "o que o Claude conseguiu fazer com a planilha?". Diga que hoje o resultado vai sair do meio do chat e ganhar um espaço só dele. No projetor, mostre o claude.ai aberto, com a caixa de mensagem embaixo e a conversa no centro.

Conteúdo novo guiado (15 min): no seu computador, digite na caixa de mensagem e envie: "Crie uma tabela com meu horário de estudos da semana, com os dias na primeira coluna e as matérias nas outras". Aponte no projetor o momento em que a tela se divide e o painel do Artifact abre à direita. Mostre que a conversa continua à esquerda. Faça um pedido de ajuste digitando no chat: "Adicione uma coluna chamada Observações". Espere e mostre a tabela mudando. Depois clique no ícone de versões para mostrar que dá para voltar atrás, e aponte os botões Copiar e Baixar.

Mão na massa (25 min): cada aluno cria o próprio Artifact. Dê duas opções: uma tabela (horário de estudos, lista de jogos favoritos com nota) ou um documento (apresentação pessoal de um parágrafo). Oriente a escrever o primeiro prompt começando com "Crie uma tabela com..." ou "Escreva um documento com...". Em seguida, peça que façam pelo menos três pedidos de ajuste, anotando no caderno cada pedido e o que mudou. Circule pela sala conferindo se o painel realmente abriu para todos.

Desafio e compartilhar (10 min): proponha um último pedido criativo — "deixe o título mais divertido" ou "organize em ordem alfabética". Peça que dois ou três alunos mostrem o Artifact no projetor e contem qual ajuste mais gostaram.

## Como explicar de forma clara

Use uma comparação simples: "O chat é onde você fala; o Artifact é o quadro ao lado onde o Claude desenha o que você pediu." Diga que pedir um ajuste é como dizer para um colega "muda essa parte" — não precisa refazer tudo, é só pedir a mudança. Reforce que errar o primeiro pedido não é problema, porque o Artifact pode ser mudado quantas vezes quiser, e dá até para voltar a uma versão antiga, como o "desfazer" de um jogo.

## Erros comuns e como ajudar

O aluno pede algo curto demais e nada abre no painel: oriente a usar verbos como "crie uma tabela" ou "monte um documento". Alguns confundem o Artifact com a conversa e tentam escrever dentro do painel: lembre que os pedidos vão sempre na caixa do chat, à esquerda. Outros apagam o Artifact pedindo um assunto totalmente novo na mesma conversa: explique que cada conversa costuma manter um Artifact, então é melhor continuar ajustando o mesmo. Por fim, há quem ache que perdeu uma versão boa: mostre de novo o histórico de versões para acalmar e recuperar.`,
  exercicios: [
    {
      titulo: `Meu primeiro Artifact`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno tenha o Claude aberto e logado. Confira pela sala se o painel lateral abriu de verdade para todos antes de seguir.`,
      atividade: `Na caixa de mensagem do Claude, escreva e envie: "Crie uma tabela com meu horário de estudos da semana, com os dias da semana na primeira coluna". Observe a janela do Artifact abrir à direita.`,
      gabarito: `O painel do Artifact abre à direita com uma tabela contendo uma coluna de dias (segunda a sexta ou segunda a domingo) e ao menos uma coluna de matérias ou horários. A conversa permanece à esquerda.`,
    },
    {
      titulo: `Três ajustes seguidos`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre que cada pedido de ajuste vai na caixa do chat, nunca dentro do painel. Peça que anotem no caderno o pedido e o que mudou.`,
      atividade: `Faça três pedidos de ajuste, um de cada vez, no Artifact que você criou: 1) adicione uma coluna chamada "Observações"; 2) coloque um título acima da tabela; 3) deixe os dias em ordem da segunda ao domingo.`,
      gabarito: `A tabela final tem a coluna "Observações", um título acima e os dias ordenados de segunda a domingo. Cada ajuste foi feito por uma frase no chat e o aluno consegue dizer o que mudou em cada passo.`,
    },
    {
      titulo: `Voltando no tempo`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Aponte o ícone de versões (relógio ou setas) no Artifact. Deixe o aluno explorar; se travar, mostre no projetor onde fica o histórico.`,
      atividade: `Peça um ajuste exagerado, como "deixe a tabela com 10 colunas". Depois, use o histórico de versões do Artifact para voltar à versão anterior, com menos colunas.`,
      gabarito: `O aluno encontra o histórico de versões, vê a versão com muitas colunas e a versão anterior, e consegue retornar à versão mais enxuta. Ele entende que nenhuma versão é perdida.`,
    },
    {
      titulo: `Documento em dupla`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um aluno conduz o chat e o outro sugere os ajustes; depois trocam. Lembre-os de usar verbos claros como "escreva um documento".`,
      atividade: `Em dupla, no computador de um dos dois, peçam: "Escreva um documento de apresentação da nossa dupla, com nossos nomes, jogos favoritos e uma meta para o ano". Façam pelo menos dois ajustes pedidos pelo colega, como mudar o tom para mais divertido ou encurtar um trecho.`,
      gabarito: `Sai um Artifact de documento com os nomes da dupla, os jogos e a meta, e com pelo menos dois ajustes aplicados por pedido (tom ou tamanho). A dupla consegue mostrar qual versão ficou melhor usando o histórico, se quiser.`,
    },
    {
      titulo: `Roda dos Artifacts e mini-projeto`,
      tipo: `Roda de conversa e projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Reserve os últimos minutos para a roda. Cada aluno mostra o Artifact no projetor por cerca de 1 minuto. Valorize o ajuste mais criativo e conecte com o entregável do mês.`,
      atividade: `Crie um Artifact à sua escolha (tabela ou documento) sobre um tema que você goste — por exemplo, "minha lista dos 5 melhores filmes com nota". Faça um ajuste criativo (título divertido ou ordem por nota) e, na roda, apresente em 1 minuto qual pedido mais gostou de fazer.`,
      gabarito: `Cada aluno apresenta um Artifact próprio (tabela ou documento) com pelo menos um ajuste criativo aplicado e explica, em uma frase, qual pedido funcionou melhor. A turma percebe que o painel lateral é o lugar do conteúdo pronto, separado do chat — base para o Artifact entregável do mês.`,
    },
  ],
};
