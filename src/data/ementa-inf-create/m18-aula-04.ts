import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Lendo e Transformando Dados",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Combinar laços de repetição com a leitura da planilha para percorrer várias linhas de uma vez e transformar os dados, criando uma função que calcula totais e destaca informações automaticamente.`,
  descricao: `Nas aulas anteriores o aluno aprendeu a escrever seu primeiro código, a usar decisões e repetições e a conversar com a planilha lendo e escrevendo uma célula de cada vez. Agora damos o salto mais importante do mês: ensinar o código a olhar para a planilha inteira de uma só vez. Em vez de pedir o valor de uma única célula, o aluno vai capturar um intervalo com dezenas de linhas e guardá-lo dentro de uma variável especial chamada matriz (em inglês, array). É como tirar uma foto de toda a tabela e levá-la para dentro do código.

O coração da aula é juntar duas ideias que o aluno já conhece: o laço de repetição (o for) e a leitura da planilha. Quando você combina os dois, o código consegue passar linha por linha sozinho, fazer uma conta em cada uma e devolver o resultado. Essa é a diferença entre um trabalho que levaria meia hora na mão e um que acontece em menos de um segundo. É exatamente esse poder que torna a programação útil de verdade para a vida real.

Para deixar tudo concreto, vamos usar uma planilha cheia de dados: uma lista de pedidos de uma lanchonete fictícia, com o nome do produto, a quantidade e o preço. O aluno vai escrever uma função que percorre todas as linhas, multiplica quantidade por preço para descobrir o total de cada pedido, escreve esse total numa nova coluna e ainda pinta de outra cor as linhas dos pedidos mais caros. Ao terminar, ele terá automatizado uma tarefa que qualquer dono de comércio faria toda semana.

O nome técnico desse processo é "ler e transformar dados": o código lê o que já existe, faz uma transformação (um cálculo, uma comparação, um destaque) e devolve um resultado novo e mais útil. É o passo que prepara o terreno para as próximas aulas, em que o robô vai rodar sozinho e enviar e-mails. Hoje o aluno descobre que tratar muitos dados de uma vez é, no fundo, repetir um passo pequeno muitas vezes.`,
  materiais: [
    `Computadores com a conta Google de cada aluno conectada e o Google Planilhas aberto (sheets.google.com)`,
    `Editor do Apps Script acessível pelo menu Extensões da planilha, em cada máquina`,
    `Projetor ou tela grande para o professor demonstrar cada clique e cada linha de código ao vivo`,
    `Arquivo de exemplo "Pedidos da Lanchonete" com colunas Produto, Quantidade e Preço e cerca de 12 linhas preenchidas`,
    `Folha impressa (ou slide) com o código pronto da função, para o aluno acompanhar e consultar`,
    `Conta Google ativa e funcional para cada aluno, a mesma usada nas aulas anteriores do mês`,
  ],
  conceitosChave: [
    `Intervalo (Range) — um conjunto de células selecionadas de uma vez, como A2 até C13, em vez de uma única célula.`,
    `Matriz (array) — caixa que guarda vários valores juntos; aqui guarda todas as linhas e colunas lidas da planilha de uma só vez.`,
    `getDataRange — comando do Apps Script que pega automaticamente toda a área preenchida da planilha, sem você digitar os limites.`,
    `getValues — comando que lê os valores de um intervalo e os entrega como uma matriz de linhas e colunas para o código usar.`,
    `Laço for — repetição que executa o mesmo bloco de código uma vez para cada linha, percorrendo a tabela inteira sozinho.`,
    `Índice — número da posição dentro da matriz; lembrando que o código começa a contar do zero, então a primeira linha é a posição 0.`,
    `setValue e setBackground — comandos que escrevem um valor numa célula e que pintam o fundo de uma célula com uma cor.`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, abra a planilha "Pedidos da Lanchonete" e o editor do Apps Script (menu Extensões, depois Apps Script). O conceito central é que getValues() devolve uma matriz de linhas. Cada linha é, por sua vez, uma lista de colunas. Se a coluna A é Produto, B é Quantidade e C é Preço, então dentro do código a posição 0 de cada linha é o Produto, a 1 é a Quantidade e a 2 é o Preço. O computador conta a partir do zero, e esse é o ponto que mais confunde. Lembre-se também de que a primeira linha costuma ser o cabeçalho, então o laço começa em 1 para pular os títulos. Teste o código inteiro antes da aula e veja a coluna de totais aparecer e as linhas caras ficarem coloridas.

## Passo a passo da aula

Aquecimento e revisão (10 min): retome a Aula 3. Pergunte: "Como pedíamos o valor de UMA célula?" e relembre getRange("A2").getValue(). Mostre no projetor a planilha cheia e provoque: "E se fossem mil linhas? Vamos clicar uma por uma?". Plante a ideia de ler tudo de uma vez.

Conteúdo novo guiado (15 min): no editor do Apps Script, escreva ao vivo, explicando linha por linha:

function calcularTotais() {
  var aba = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dados = aba.getDataRange().getValues();
  for (var i = 1; i < dados.length; i++) {
    var quantidade = dados[i][1];
    var preco = dados[i][2];
    var total = quantidade * preco;
    aba.getRange(i + 1, 4).setValue(total);
  }
}

Explique cada parte: getDataRange() pega toda a área preenchida; getValues() transforma em matriz; dados.length é o número de linhas; o for começa em 1 para pular o cabeçalho; dados[i][1] é a Quantidade da linha atual; getRange(i + 1, 4) aponta para a coluna D porque a matriz conta do zero mas a planilha conta do um. Clique em Executar (ícone de play) e autorize quando pedir. Mostre a coluna de totais nascendo.

Mão na massa (25 min): cada aluno digita a função na própria planilha e executa. Depois, peça que adicionem o destaque das linhas caras, acrescentando dentro do for, logo após calcular o total:

    if (total > 20) {
      aba.getRange(i + 1, 1, 1, 4).setBackground("#ffe599");
    }

Explique que o if compara o total e setBackground pinta as quatro colunas daquela linha de amarelo. Circule pela sala conferindo a contagem das colunas.

Desafio e compartilhar (10 min): proponha que troquem o limite de 20 para outro valor, ou pintem de outra cor. Convide dois alunos a mostrarem a tela e explicarem o que o laço fez em cada linha.

## Como explicar de forma clara

Use a imagem da "esteira de fábrica": a matriz é a esteira cheia de caixas (as linhas) e o for é o trabalhador que pega uma caixa de cada vez, faz a mesma tarefa e devolve. Para os índices, diga: "O computador é teimoso, ele começa a contar do zero, não do um". Mostre na prática que dados[0] é o cabeçalho e por isso pulamos para o 1. Para a multiplicação, conecte com a lanchonete: "três sucos a cinco reais cada são quinze reais", e é isso que o código faz em cada linha, mas em um piscar de olhos.

## Erros comuns e como ajudar

O erro mais comum é trocar os índices das colunas, usar dados[i][2] achando que é a Quantidade. Peça que conte as colunas em voz alta começando do zero. Outro clássico é esquecer o i + 1 no getRange e o total cair na linha errada; mostre lado a lado a planilha e a contagem. Há quem comece o for em 0 e sobrescreva o cabeçalho com uma conta; relembre o porquê do 1. Se aparecer erro de autorização na primeira execução, oriente a clicar em Revisar permissões e Permitir, é normal. Por fim, se nada acontecer, confirme que o aluno salvou (ícone de disquete) e selecionou a função certa no topo do editor antes de clicar em Executar.`,
  exercicios: [
    {
      titulo: `Lendo a planilha inteira`,
      tipo: `Prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Garanta que todos abriram o editor pelo menu Extensões, depois Apps Script. Acompanhe pelo projetor e confirme que cada aluno conseguiu rodar e ver a mensagem no registro de execução (Logs).`,
      atividade: `No editor do Apps Script, escreva uma função que leia toda a planilha com getDataRange().getValues() e mostre quantas linhas foram lidas usando Logger.log(dados.length). Execute e veja o número aparecer no registro.`,
      gabarito: `A função lê os dados em uma matriz e o registro (Logs) mostra o número total de linhas preenchidas, incluindo o cabeçalho. Exemplo de código: var dados = aba.getDataRange().getValues(); Logger.log(dados.length); Se a planilha tem 12 pedidos mais o cabeçalho, o número exibido é 13.`,
    },
    {
      titulo: `Calculando o total de cada pedido`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor que o laço deve começar em 1 para pular o cabeçalho. Confira a contagem das colunas com cada aluno: posição 1 é Quantidade, posição 2 é Preço. Verifique se usaram i + 1 no getRange.`,
      atividade: `Crie a função calcularTotais que percorre todas as linhas com um for, multiplica a Quantidade pelo Preço de cada pedido e escreve o resultado na coluna D (Total). Execute e confira a nova coluna preenchida.`,
      gabarito: `A coluna D mostra o total correto de cada linha (Quantidade vezes Preço). O laço começa em i = 1, lê dados[i][1] e dados[i][2], calcula total = quantidade * preco e usa aba.getRange(i + 1, 4).setValue(total). Por exemplo, 3 sucos a 5 reais resultam em 15 na coluna Total.`,
    },
    {
      titulo: `Destacando os pedidos mais caros`,
      tipo: `Desafio individual`,
      tempo: `9 min`,
      guiaProfessor: `Relembre que o if vai dentro do for, logo após calcular o total. Mostre que getRange(i + 1, 1, 1, 4) seleciona as quatro colunas daquela linha. Ajude quem errar a contagem de colunas do setBackground.`,
      atividade: `Acrescente à sua função um if que, quando o total passar de 20 reais, pinte a linha inteira do pedido de amarelo usando setBackground. Execute e veja os pedidos caros destacados.`,
      gabarito: `As linhas cujo total é maior que 20 ficam com fundo amarelo, as demais permanecem brancas. Dentro do for: if (total > 20) { aba.getRange(i + 1, 1, 1, 4).setBackground("#ffe599"); } O getRange com quatro argumentos seleciona a linha começando na coluna 1 e abrangendo 4 colunas, pintando o pedido inteiro.`,
    },
    {
      titulo: `Caça ao erro em dupla`,
      tipo: `Em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e entregue (ou projete) um código com dois erros plantados: o for começando em 0 e o índice da coluna trocado (dados[i][2] no lugar de dados[i][1]). Deixe as duplas testarem e corrigirem antes de revelar a resposta.`,
      atividade: `Em dupla, recebam um código que deveria calcular os totais, mas está errado. Rodem, observem o resultado estranho e descubram os dois erros: onde o laço começa e qual posição da matriz representa cada coluna. Corrijam e rodem de novo.`,
      gabarito: `Os dois erros são: o for começava em 0 (sobrescrevendo o cabeçalho) e deve começar em 1; e a Quantidade estava sendo lida em dados[i][2] (que é o Preço) quando o correto é dados[i][1]. Após corrigir para i = 1 e dados[i][1] para a Quantidade, a coluna Total fica certa e o cabeçalho é preservado.`,
    },
    {
      titulo: `Meu relatório automático`,
      tipo: `Projeto curto e roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Incentive cada aluno a personalizar a regra (mudar o valor limite, escolher outra cor ou destacar os baratos em vez dos caros). Ao final, abra uma roda rápida para dois ou três alunos explicarem, linha por linha, o que o laço fez na planilha.`,
      atividade: `Monte uma versão própria da função que leia os pedidos, calcule os totais e destaque com a cor que você escolher os pedidos acima de um limite que você decidir. Depois, explique para a turma o que o seu laço fez em cada linha da tabela.`,
      gabarito: `A função roda sem erros: preenche a coluna Total para todas as linhas e pinta, com a cor escolhida, as linhas que ultrapassam o limite definido pelo aluno. Na roda de conversa, o aluno descreve corretamente que o for percorreu linha por linha, leu Quantidade e Preço, multiplicou para achar o total, escreveu o resultado e usou o if com setBackground para destacar os pedidos selecionados.`,
    },
  ],
};
