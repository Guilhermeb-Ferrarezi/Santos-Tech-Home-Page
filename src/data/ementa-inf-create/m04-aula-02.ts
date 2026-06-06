import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Linhas, colunas e abas na prática",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Praticar a seleção de células, linhas e colunas, inserir e apagar linhas e colunas, ajustar larguras e criar, renomear e colorir abas para organizar um arquivo com mais de uma planilha.`,
  descricao: `Na aula passada os alunos conheceram o mapa da planilha: descobriram o que são células, a Caixa de Nome, a Barra de Fórmulas e como o Excel organiza tudo em linhas (números) e colunas (letras). Agora chega a hora de colocar a mão na massa e mexer de verdade nessa estrutura. Esta aula é toda sobre manipular o esqueleto da planilha com segurança e sem medo de estragar nada.

O aluno vai aprender a selecionar com precisão: uma célula, um intervalo de várias células, uma linha inteira (clicando no número à esquerda), uma coluna inteira (clicando na letra no topo) e até a planilha inteira. Em seguida, aprende as ações que mudam o tamanho da tabela: inserir uma linha ou coluna no meio dos dados, apagar uma que não serve mais e ajustar a largura de uma coluna que ficou apertada demais para o texto caber. São operações que parecem pequenas, mas que dão ao aluno o controle real sobre o espaço da planilha.

A segunda metade da aula trata das abas, também chamadas de planilhas, que ficam na parte de baixo da janela (a primeira costuma se chamar "Planilha1" ou "Sheet1"). O aluno descobre que um único arquivo do Excel pode guardar várias páginas separadas, como cadernos com divisórias. Ele aprende a criar uma nova aba, renomeá-la com um nome que faça sentido e trocar a cor da aba para organizar visualmente o trabalho. Assim, um mesmo arquivo pode ter, por exemplo, uma aba para "Gastos", outra para "Notas" e outra para "Jogos".

Esta aula prepara o terreno para o entregável do mês — uma tabela que calcula. Aqui ainda não vamos digitar grandes conjuntos de dados (isso é a Aula 3) nem usar fórmulas (Aula 5 em diante). O foco é dominar a organização: selecionar, inserir, apagar, ajustar e separar conteúdos em abas. Se um aluno perguntar sobre fórmulas ou somas, elogie a curiosidade, anote e diga que isso chega logo nas próximas semanas.`,
  materiais: [
    `Computadores com o Microsoft Excel instalado e aberto em um arquivo novo em branco, um por aluno`,
    `Conta Microsoft da escola já logada em cada computador, ou o Excel ativado e pronto para uso antes da aula`,
    `Projetor ou TV conectada ao computador do professor para demonstrar cada passo ao vivo`,
    `Arquivo de exemplo pronto pelo professor, com três abas coloridas e renomeadas (por exemplo "Gastos", "Notas" e "Jogos"), mostrando o resultado esperado`,
    `Cartaz ou slide com a imagem da barra de abas na parte de baixo da tela, destacando o botão de "Nova planilha" (o sinal de mais)`,
    `Folha impressa com um pequeno roteiro para o aluno planejar os nomes das três abas que vai criar`,
  ],
  conceitosChave: [
    `Selecionar — clicar para destacar uma ou mais células; o que estiver selecionado fica com borda mais forte e é onde a próxima ação acontece.`,
    `Intervalo — um conjunto de várias células vizinhas selecionadas juntas, como de A1 até A10, escrito com dois-pontos (A1:A10).`,
    `Linha inteira — todas as células de uma mesma fileira horizontal; seleciona-se clicando no número à esquerda da tela.`,
    `Coluna inteira — todas as células de uma mesma fileira vertical; seleciona-se clicando na letra no topo da tela.`,
    `Inserir e apagar — adicionar uma linha ou coluna nova no meio dos dados, ou remover uma que não é mais necessária, sem precisar refazer tudo.`,
    `Largura da coluna — o tamanho horizontal de uma coluna, ajustado para o texto ou os números caberem sem ficar cortados.`,
    `Aba (planilha) — cada página separada dentro do mesmo arquivo do Excel, mostrada na barra de baixo; pode ser criada, renomeada e colorida.`,
  ],
  treinamento: `## O que o professor precisa saber

No Excel, selecionar é a base de tudo: a ação que você manda sempre acontece sobre o que está selecionado. Para selecionar uma célula, basta clicar nela. Para um intervalo, clique na primeira célula e arraste até a última (ou clique na primeira, segure Shift e clique na última). Para uma linha inteira, clique no número dela, à esquerda; para uma coluna inteira, clique na letra dela, no topo. O quadradinho no canto superior esquerdo, onde a linha 1 encontra a coluna A, seleciona a planilha inteira.

Para inserir, clique com o botão direito sobre o número de uma linha (ou a letra de uma coluna) e escolha "Inserir": a nova linha entra acima, e a nova coluna entra à esquerda. Para apagar, botão direito e "Excluir". Cuidado com a tecla Delete: ela apaga o conteúdo, mas não remove a linha ou coluna. Para ajustar a largura, posicione o cursor na divisória entre duas letras de coluna, no topo, até virar uma seta dupla, e arraste; um clique duplo nessa divisória ajusta a largura automaticamente ao maior texto.

As abas ficam na parte de baixo. O sinal de mais ao lado delas cria uma nova planilha. Um clique duplo no nome da aba permite renomear; o botão direito abre um menu com "Renomear", "Cor da Guia" e "Excluir". Tudo é salvo no arquivo, então lembre os alunos de salvar com Ctrl + S.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que todos abram um arquivo novo em branco. Faça uma revisão rápida da Aula 1 projetando a sua tela: "Onde estão as letras das colunas? E os números das linhas? O que aparece na Caixa de Nome quando clico aqui?" Deixe dois ou três alunos responderem clicando em células e lendo o endereço (por exemplo, B3).

Conteúdo novo guiado (15 min): demonstre no projetor, devagar. Primeiro, selecionar: uma célula, depois um intervalo arrastando, depois uma linha clicando no número, depois uma coluna clicando na letra. Em seguida, botão direito numa linha e "Inserir"; botão direito de novo e "Excluir". Mostre o ajuste de largura arrastando a divisória entre as letras das colunas e o clique duplo que ajusta sozinho. Por fim, vá à barra de baixo: clique no sinal de mais para criar uma aba, dê duplo clique para renomear e use o botão direito em "Cor da Guia" para colorir.

Mão na massa (25 min): cada aluno repete tudo no seu arquivo. Oriente a praticar cada seleção, inserir e apagar uma linha e uma coluna, ajustar a largura de uma coluna e, depois, criar três abas, renomeá-las e dar uma cor a cada uma. Circule pela sala ajudando individualmente e elogiando quem testar sozinho.

Desafio e compartilhar (10 min): proponha que cada aluno organize o arquivo com três abas que façam sentido para a vida dele (por exemplo "Gastos", "Notas" e "Jogos"), cada uma com cor diferente. Peça que dois ou três mostrem a tela e expliquem por que escolheram aqueles nomes e cores.

## Como explicar de forma clara

Use a imagem do caderno com divisórias: "O arquivo do Excel é o caderno inteiro; cada aba lá embaixo é uma divisória, uma matéria diferente no mesmo caderno." Para selecionar, diga: "Antes de mandar o Excel fazer algo, você precisa apontar onde — selecionar é apontar com o mouse." Para inserir uma linha no meio, compare com furar a fila: "A linha nova entra empurrando as outras para baixo, como alguém entrando na fila." Reforce sempre que nada se perde de verdade: existe o Ctrl + Z (desfazer) para voltar atrás, então podem experimentar à vontade.

## Erros comuns e como ajudar

O erro mais comum é confundir apagar conteúdo com excluir a linha: o aluno aperta Delete esperando sumir a fileira e só some o texto. Mostre que para remover a estrutura é botão direito e "Excluir". Outro é tentar renomear a aba clicando uma vez só; lembre que é duplo clique. Muitos esquecem que inserir uma linha entra acima e a coluna entra à esquerda, e ficam confusos com a posição; mostre devagar no projetor. Alguns arrastam a coluna inteira sem querer ao tentar ajustar a largura; explique que para mudar a largura o cursor precisa virar a seta dupla na divisória, não no meio da letra. Por fim, há quem crie abas demais e se perca; oriente a apagar as que não usa com botão direito e "Excluir", confirmando quando o Excel perguntar.`,
  exercicios: [
    {
      titulo: `Caça às seleções`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Aquecimento individual de seleção. Projete os quatro tipos de seleção antes de começar e diga cada comando em voz alta, dando ritmo. Verifique se todos acham o número da linha, a letra da coluna e o quadradinho do canto.`,
      atividade: `No seu arquivo, faça nesta ordem: selecione só a célula C3; depois selecione o intervalo de A1 até A5 arrastando; depois selecione a linha 7 inteira clicando no número; depois selecione a coluna D inteira clicando na letra; por fim, selecione a planilha inteira pelo quadradinho do canto.`,
      gabarito: `O aluno deve conseguir destacar cada item corretamente: a célula C3 sozinha, o intervalo A1:A5 (cinco células), a linha 7 toda em destaque, a coluna D toda em destaque e a planilha inteira. O sucesso é ele clicar no lugar certo de cada vez sem ajuda. Confirme observando o destaque na tela ou pedindo que ele leia a Caixa de Nome, que mostrará, por exemplo, A1:A5.`,
    },
    {
      titulo: `Insere, apaga e ajusta`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Treina as três ações estruturais juntas. Demonstre cada uma uma vez no projetor. Fique atento a quem usa Delete achando que vai sumir a linha; relembre o botão direito e "Excluir". Mostre a seta dupla do ajuste de largura.`,
      atividade: `Digite a palavra "Olá" em A1. Agora: insira uma linha nova acima da linha 1 (botão direito no número 1, depois "Inserir"); insira uma coluna nova à esquerda da coluna A; apague a coluna que você acabou de criar (botão direito, "Excluir"); e, por fim, alargue a coluna A arrastando a divisória entre A e B no topo.`,
      gabarito: `Ao terminar, a palavra "Olá" deve ter descido por causa da linha inserida, a coluna extra criada deve ter sido removida (voltando ao estado anterior nessa parte) e a coluna A deve estar visivelmente mais larga. Verifique que o aluno usou botão direito e "Inserir" / "Excluir", e não a tecla Delete, e que a largura mudou pelo arraste da divisória. Se ele inverteu a ordem mas chegou ao mesmo resultado, está correto.`,
    },
    {
      titulo: `Nascem as abas`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Foco em criar, renomear e colorir abas. Aponte o sinal de mais na barra de baixo no projetor. Lembre que renomear é duplo clique e que a cor sai do botão direito em "Cor da Guia". Tenha o arquivo de exemplo aberto para mostrar o resultado.`,
      atividade: `Na barra de baixo, clique no sinal de mais para criar duas abas novas (você ficará com três no total). Dê um duplo clique em cada aba e renomeie para "Gastos", "Notas" e "Jogos". Depois, clique com o botão direito em cada uma, vá em "Cor da Guia" e escolha uma cor diferente para cada aba.`,
      gabarito: `O arquivo deve terminar com três abas, nomeadas "Gastos", "Notas" e "Jogos", cada uma com uma cor distinta na guia. O sucesso é o aluno ter usado o sinal de mais para criar, o duplo clique para renomear e o botão direito em "Cor da Guia" para colorir. Verifique lendo os nomes na barra de baixo e observando as três cores diferentes.`,
    },
    {
      titulo: `Conferindo o trabalho do colega`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno mostra o arquivo ao colega, que confere usando um roteiro de três checagens. Reforce o elogio antes da sugestão e o respeito. Circule ouvindo e ajudando a corrigir o que faltar.`,
      atividade: `Em dupla, mostre o seu arquivo ao colega. O colega confere três coisas: existem três abas com nomes que fazem sentido? Cada aba tem uma cor diferente? A coluna A está larga o bastante para o texto caber sem cortar? Anotem uma sugestão para cada arquivo e apliquem na hora.`,
      gabarito: `Cada aluno deve sair com pelo menos uma melhoria aplicada vinda do colega: por exemplo, renomear uma aba para algo mais claro, dar uma cor que estava faltando ou alargar a coluna A. O resultado correto é os dois arquivos ficarem mais organizados e legíveis após a troca. Verifique que a sugestão foi de fato aplicada na ferramenta, não só comentada.`,
    },
    {
      titulo: `Meu arquivo organizado em abas`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este é o fechamento prático da aula. Use a folha de planejamento dos nomes das abas como guia. Circule garantindo que cada aluno crie, renomeie e colorisse as três abas e ajuste pelo menos uma coluna. Não cobre fórmulas nem grandes tabelas hoje; isso vem nas próximas aulas.`,
      atividade: `Monte o seu arquivo organizado: crie três abas, renomeie-as com nomes que combinem com a sua vida (por exemplo "Escola", "Casa" e "Diversão"), dê uma cor diferente a cada uma e, em uma das abas, escreva um título na célula A1 e alargue a coluna A para o título caber inteiro. Ao final, salve com Ctrl + S.`,
      gabarito: `O aluno deve apresentar um arquivo com três abas renomeadas e coloridas com cores distintas, e ao menos uma aba com um título digitado em A1 e a coluna A alargada para o texto não ficar cortado. Considere completo quando as três abas estiverem nomeadas e coloridas, a largura ajustada e o arquivo salvo. Exemplo válido: abas "Escola" (azul), "Casa" (verde) e "Diversão" (laranja), com a aba "Escola" tendo "Minhas matérias" escrito em A1 e a coluna A larga o suficiente para mostrar o texto inteiro.`,
    },
  ],
};
