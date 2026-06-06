import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Construindo o Cadastro com VBA",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a criar a macro que pega os dados de um formulário e grava na próxima linha vazia da tabela, deixando os botões Salvar e Limpar funcionando de verdade no mini-sistema.`,
  descricao: `Na aula anterior, o aluno desenhou o mini-sistema: uma aba de formulário, com células para digitar os dados, e uma aba de banco, com a tabela que vai guardar tudo. Agora chega o momento mais empolgante do mês: fazer o sistema ganhar vida. Nesta aula, o aluno escreve a macro que pega o que foi digitado no formulário e grava, sozinha, na próxima linha vazia da tabela. É o primeiro código de verdade que realmente faz um trabalho útil do começo ao fim.

O coração desta aula é uma ideia simples e poderosa: encontrar a primeira linha vazia da tabela. Em vez de o aluno ter que rolar a planilha procurando onde parou, o VBA conta as linhas já preenchidas e descobre sozinho onde escrever a próxima ficha. Esse padrão, de achar a próxima linha livre e gravar nela, é exatamente o que sistemas reais fazem quando você cadastra um aluno, um produto ou um contato. O adolescente percebe que aquilo que parecia "coisa de empresa" cabe em poucas linhas de código que ele mesmo digita.

Além do botão Salvar, o aluno também monta o botão Limpar, que apaga os campos do formulário e deixa tudo pronto para o próximo cadastro. Os dois botões juntos formam um ciclo completo: digito os dados, clico em Salvar, o sistema grava e limpa, e já posso cadastrar o próximo. Quando esse ciclo roda pela primeira vez sem erro, a turma costuma comemorar, porque enxerga uma planilha comum virando um programa que obedece a comandos.

O objetivo não é decorar o código, e sim entender a lógica: ler uma célula, descobrir onde gravar, escrever o valor e limpar o formulário. Esse raciocínio de pegar, processar e guardar dados é a base de qualquer sistema. Ao final da aula, o cadastro do mini-sistema estará funcionando, pronto para ser blindado e melhorado nas próximas aulas do mês.`,
  materiais: [
    `Computadores com Excel instalado, com VBA disponível e a guia Desenvolvedor já ativada (um por aluno)`,
    `Projetor ou tela grande para o professor demonstrar o código linha a linha`,
    `Arquivo de exemplo "mini-sistema.xlsm" salvo como Pasta de Trabalho Habilitada para Macros, com a aba Formulário e a aba Banco já prontas da aula anterior`,
    `Modelo do formulário com células nomeadas e visíveis (Nome, Idade, Turma) na aba Formulário`,
    `Folha impressa ou slide com o código do botão Salvar e do botão Limpar para o aluno acompanhar`,
    `Conta Microsoft ativa em cada computador, caso a escola use o Excel pela conta on-line`,
    `Backup do arquivo de exemplo numa pasta, para repor caso algum aluno apague o código sem querer`,
  ],
  conceitosChave: [
    `Macro — um pequeno programa em VBA, com começo (Sub) e fim (End Sub), que executa uma sequência de comandos quando é chamado.`,
    `Próxima linha vazia — a primeira linha ainda em branco abaixo dos dados já cadastrados, onde a macro vai gravar a próxima ficha.`,
    `Cells(linha; coluna) — o jeito do VBA de apontar para uma célula usando números, por exemplo Cells(5, 2) para a célula da linha 5, coluna 2.`,
    `End(xlUp) — comando que sobe a partir do fim da coluna até a última célula preenchida, usado para descobrir onde a tabela termina.`,
    `Range("B2").Value — a maneira de ler ou escrever o conteúdo de uma célula específica do formulário ou da tabela.`,
    `Atribuição — o sinal de igual que joga um valor para dentro de uma célula ou variável, como célula = valor, sempre da direita para a esquerda.`,
    `Botão Limpar — macro que apaga o conteúdo dos campos do formulário, deixando tudo pronto para um novo cadastro.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador. Toda esta aula gira em torno de quatro ideias: ler uma célula, descobrir a próxima linha vazia, escrever nela e limpar o formulário. O código do botão Salvar é curto. Primeiro, descobrimos onde a tabela termina com a linha proxima = Cells(Rows.Count, 1).End(xlUp).Row + 1. Em português, isso quer dizer: vá até o fim da coluna 1, suba até a última célula preenchida, pegue o número dela e some 1 para cair na linha de baixo, que está vazia. Depois, gravamos cada campo: Cells(proxima, 1).Value = Range("Nome").Value. Pratique o arquivo uma vez antes da aula, salvando-o sempre como .xlsm (Habilitada para Macros), e você estará pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o "mini-sistema.xlsm" no projetor e mostre a aba Formulário e a aba Banco. Pergunte à turma: "se eu digitar um nome aqui e clicar num botão, como o Excel sabe em qual linha guardar?". Deixe-os palpitar. Mostre que rolar a planilha na mão é lento e que o código vai descobrir a linha sozinho.

Conteúdo novo guiado (15 min): abra o editor do VBA com o atalho Alt + F11. Dê um clique duplo na planilha Formulário, à esquerda, ou insira um módulo pelo menu Inserir, depois Módulo. Digite, devagar e em voz alta, o código do Salvar: Sub Salvar(), depois Dim proxima As Long, depois proxima = Cells(Rows.Count, 1).End(xlUp).Row + 1 (digite isso na aba Banco ou use Sheets("Banco")). Em seguida, três linhas de gravação: Sheets("Banco").Cells(proxima, 1).Value = Range("Nome").Value, e o mesmo para Idade na coluna 2 e Turma na coluna 3. Feche com End Sub. Volte ao Excel, vá em Inserir, depois Formas ou use um botão; clique com o botão direito no botão da aula passada e escolha Atribuir Macro, ligando-o ao Salvar.

Mão na massa (25 min): cada aluno digita o código do Salvar no próprio arquivo, atribui ao botão e testa cadastrando dois nomes. Circule pela sala conferindo se gravou na linha certa. Quando a maioria conseguir, mostre na tela o botão Limpar: Sub Limpar(), depois Range("Nome").Value = "", o mesmo para Idade e Turma, e End Sub. Peça que criem o segundo botão e o atribuam ao Limpar.

Desafio e compartilhar (10 min): lance o desafio de cadastrar três fichas seguidas usando Salvar e Limpar em sequência. Convide dois ou três alunos a demonstrar o ciclo completo no projetor, explicando o que cada linha faz.

## Como explicar de forma clara (linguagem para a idade)

Compare a macro com um assistente obediente: você diz o que fazer, ele faz na ordem certa. Explique a próxima linha vazia com a imagem de uma fila: o código olha quem é o último da fila e coloca o novo logo atrás. Diga que Cells(linha, coluna) é como um endereço de cidade, com rua e número, e que o sinal de igual joga o valor para dentro da célula, sempre da direita para a esquerda. Reforce que aspas vazias ("") significam "deixar a célula em branco". Use a frase de ouro: "ler, achar a linha, escrever, limpar".

## Erros comuns e como ajudar

O erro mais frequente é salvar o arquivo como .xlsx comum, o que apaga as macros; oriente a sempre salvar como Pasta de Trabalho Habilitada para Macros (.xlsm). Outro tropeço é esquecer de dizer em qual aba gravar, fazendo o dado cair no lugar errado; mostre o uso de Sheets("Banco") antes do Cells. Alguns alunos trocam a coluna e gravam Idade onde deveria ir Nome; peça que confiram os números 1, 2 e 3. Há quem esqueça o + 1 e acabe sobrescrevendo a última ficha; explique que sem o + 1 o código escreve em cima da linha já cheia. Por fim, nomes de campo digitados errado (Nome com letra trocada) geram erro; confira os nomes das células junto com o aluno.`,
  exercicios: [
    {
      titulo: `Achando a próxima linha vazia`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno está com o "mini-sistema.xlsm" aberto e o editor VBA acessível por Alt + F11. Mostre onde digitar a linha e relembre que a coluna 1 é onde os nomes ficam.`,
      atividade: `No editor do VBA, escreva uma linha que descubra a próxima linha vazia da coluna 1 da aba Banco e guarde esse número numa variável chamada proxima. Em seguida, mostre esse número numa caixa de mensagem para conferir.`,
      gabarito: `proxima = Sheets("Banco").Cells(Rows.Count, 1).End(xlUp).Row + 1 e, para conferir, MsgBox proxima. Se a tabela tem 3 fichas com cabeçalho na linha 1, o resultado deve ser 5.`,
    },
    {
      titulo: `O botão Salvar funcionando`,
      tipo: `Desafio individual`,
      tempo: `9 minutos`,
      guiaProfessor: `Acompanhe de perto a gravação dos três campos. Relembre que cada campo vai numa coluna diferente (1, 2 e 3) e que é preciso indicar a aba Banco antes do Cells. Peça que testem cadastrando um nome real.`,
      atividade: `Complete a macro Salvar para que ela grave Nome, Idade e Turma do formulário na próxima linha vazia da aba Banco. Atribua a macro ao botão Salvar e teste com um cadastro.`,
      gabarito: `Sub Salvar() / Dim proxima As Long / proxima = Sheets("Banco").Cells(Rows.Count, 1).End(xlUp).Row + 1 / Sheets("Banco").Cells(proxima, 1).Value = Range("Nome").Value / Sheets("Banco").Cells(proxima, 2).Value = Range("Idade").Value / Sheets("Banco").Cells(proxima, 3).Value = Range("Turma").Value / End Sub. Depois, botão direito no botão, Atribuir Macro, escolher Salvar.`,
    },
    {
      titulo: `Lendo o código em dupla`,
      tipo: `Em dupla / roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas e projete a linha da próxima linha vazia. Peça que conversem e expliquem, com as próprias palavras, o que cada pedaço faz antes de responder. Valorize o raciocínio, não só a resposta certa.`,
      atividade: `Olhem juntos a linha proxima = Sheets("Banco").Cells(Rows.Count, 1).End(xlUp).Row + 1 e expliquem: o que faz o End(xlUp)? Por que somamos + 1 no final?`,
      gabarito: `O End(xlUp) parte do fim da coluna 1 e sobe até a última célula preenchida, devolvendo o número da linha onde a tabela termina. O + 1 desce uma linha, para cair na primeira linha vazia logo abaixo, evitando escrever em cima da última ficha.`,
    },
    {
      titulo: `O botão Limpar`,
      tipo: `Prática guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o modelo na tela antes de soltar a turma. Explique que aspas vazias deixam a célula em branco. Acompanhe a atribuição da macro ao segundo botão e peça que testem o ciclo Salvar depois Limpar.`,
      atividade: `Crie a macro Limpar que apague o conteúdo dos campos Nome, Idade e Turma do formulário. Atribua-a ao botão Limpar e teste cadastrando uma ficha e depois limpando o formulário.`,
      gabarito: `Sub Limpar() / Range("Nome").Value = "" / Range("Idade").Value = "" / Range("Turma").Value = "" / End Sub. Em seguida, botão direito no botão Limpar, Atribuir Macro, escolher Limpar. Ao clicar, os três campos ficam em branco.`,
    },
    {
      titulo: `Meu cadastro completo`,
      tipo: `Projeto curto`,
      tempo: `8 minutos`,
      guiaProfessor: `Deixe o aluno cadastrar fichas ligadas ao mundo dele (colegas, personagens de jogo, times). Peça que rode o ciclo completo três vezes e confira se cada ficha caiu numa linha diferente, sem sobrescrever. Convide alguns a apresentar.`,
      atividade: `Usando os botões Salvar e Limpar, cadastre três fichas seguidas no mini-sistema. Confira na aba Banco se cada uma ficou numa linha própria, sem apagar a anterior, e salve o arquivo como .xlsm.`,
      gabarito: `Resposta aberta quanto aos dados. Considere correto quando as três fichas aparecem em três linhas seguidas e diferentes na aba Banco, o formulário fica em branco após cada Salvar mais Limpar, e o arquivo é salvo como Pasta de Trabalho Habilitada para Macros (.xlsm). O + 1 na macro garante que nenhuma ficha sobrescreve a outra.`,
    },
  ],
};
