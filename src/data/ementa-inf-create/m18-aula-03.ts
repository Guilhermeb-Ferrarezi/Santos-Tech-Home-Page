import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Conversando com a Planilha",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Conectar o código à planilha com SpreadsheetApp para ler o valor de uma célula e escrever a resposta de volta automaticamente.`,
  descricao: `Até agora os alunos escreveram código que conversava só com eles mesmos, mostrando mensagens na tela. Nesta aula o código ganha um superpoder novo: ele passa a conversar com a planilha. Em vez de o aluno digitar valores na mão, é o programa que lê o que está numa célula e escreve a resposta em outra célula sozinho. Essa é a ponte entre o código e os dados reais, e é o coração de qualquer automação na nuvem.

A ferramenta que faz essa conversa acontecer chama-se SpreadsheetApp. Pense nela como um controle remoto do Google Planilhas dentro do Apps Script. Com esse controle, o código consegue apontar para a planilha aberta, escolher uma aba específica, mirar num intervalo ou numa célula só e, então, pedir o valor que está ali dentro ou colocar um valor novo. A relação entre planilha, aba, intervalo e célula é o conceito central do dia: a planilha é o arquivo inteiro, a aba é cada página de baixo, o intervalo é um grupo de células e a célula é o quadradinho único identificado por uma letra e um número, como A1.

Na prática, o aluno vai usar três comandos encadeados que se leem quase como uma frase em inglês: pegar a planilha ativa, entrar numa aba pelo nome e escolher um intervalo. Depois disso, dois verbos resolvem quase tudo: getValue para ler e setValue para escrever. Com esse pequeno vocabulário, o código já consegue, por exemplo, ler o nome digitado em B1 e escrever uma saudação personalizada em B2, sem ninguém tocar no teclado.

O objetivo da aula é que cada aluno saia com um pequeno robô que lê algo de uma célula e responde em outra. Esse exercício parece simples, mas é exatamente o tijolo que sustentará as automações maiores das próximas aulas, quando o código vai ler listas inteiras, tomar decisões e até enviar e-mails. Quem entende bem a dupla getValue e setValue hoje vai voar nas semanas seguintes.`,
  materiais: [
    `Computadores com navegador e conta Google ativa, com o Google Planilhas e o editor de Apps Script abertos`,
    `Projetor ou tela para o professor demonstrar onde clicar passo a passo`,
    `Uma planilha de exemplo já criada com uma aba chamada Dados e alguns nomes na coluna A`,
    `Conta Google escolar de cada aluno (para criar e salvar os próprios projetos)`,
    `Slide ou cartaz com o esquema visual Planilha maior que Aba maior que Intervalo maior que Célula`,
    `Folha impressa de apoio com os três comandos do dia (getActiveSpreadsheet, getSheetByName, getRange)`,
  ],
  conceitosChave: [
    `SpreadsheetApp — é o controle remoto do Google Planilhas dentro do código; por meio dele o Apps Script enxerga e mexe na planilha.`,
    `Planilha — é o arquivo inteiro do Google Planilhas, que pode conter várias abas dentro dele.`,
    `Aba (folha) — é cada página que aparece nas guias de baixo; no código a pegamos pelo nome com getSheetByName.`,
    `Intervalo (range) — é um grupo de uma ou mais células escolhido com getRange, como A1 ou A1 até A10.`,
    `Célula — é o quadradinho único identificado por uma letra de coluna e um número de linha, como B2.`,
    `getValue() — comando que lê e devolve o valor que está dentro de uma célula.`,
    `setValue() — comando que escreve um valor novo dentro de uma célula, apagando o que havia antes.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. Basta entender uma ideia: o código consegue ler e escrever na planilha usando um objeto chamado SpreadsheetApp. Três comandos encadeados localizam onde mexer, e dois comandos fazem a ação. A localização sempre segue a ordem planilha, aba, intervalo. A ação é getValue (ler) ou setValue (escrever). Se você decorar a frase "pego a planilha ativa, entro na aba pelo nome, escolho o intervalo e leio ou escrevo o valor", já domina o essencial do dia. Antes da aula, crie uma planilha com uma aba renomeada para Dados e escreva alguns nomes na coluna A, células A1, A2 e A3. Abra o editor de código pelo menu Extensões, opção Apps Script, e deixe tudo pronto no projetor.

## Passo a passo da aula

Aquecimento (10 min): retome a aula anterior perguntando o que é uma variável e o que o Logger.log fazia. Mostre a planilha de exemplo no projetor e provoque: e se o código pudesse ler este nome aqui sozinho e responder ali do lado? Anote no quadro o esquema Planilha, Aba, Intervalo, Célula.

Conteúdo novo guiado (15 min): no Google Planilhas, clique no menu Extensões e depois em Apps Script. No editor, apague o conteúdo e digite junto com a turma, explicando linha a linha:

function lerEEscrever() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getSheetByName("Dados");
  var nome = aba.getRange("A1").getValue();
  aba.getRange("B1").setValue("Olá, " + nome + "!");
}

Explique: a primeira linha pega a planilha aberta; a segunda entra na aba Dados pelo nome; a terceira lê o valor de A1 e guarda na variável nome; a quarta escreve uma saudação em B1. Clique no botão Salvar (ícone de disquete), escolha a função lerEEscrever na lista do topo e clique em Executar. Na primeira vez aparece um pedido de autorização: clique em Revisar permissões, escolha a conta e clique em Permitir. Volte à planilha e mostre a saudação aparecendo em B1 como mágica.

Mão na massa (25 min): cada aluno cria a própria planilha, renomeia uma aba para Dados, escreve o próprio nome em A1 e reproduz o código. Depois desafie a turma a ler A2 e escrever em B2, e a trocar o texto da saudação. Circule pela sala ajudando com autorização e nomes de aba.

Desafio e compartilhar (10 min): peça que o código leia A3 e escreva em C3 uma frase diferente. Chame dois ou três alunos para mostrar a planilha respondendo sozinha no projetor.

## Como explicar de forma clara

Use a metáfora do controle remoto: SpreadsheetApp é o controle, a planilha é a TV, a aba é o canal, a célula é o programa que está passando. Para getValue e setValue, diga que get é "pegar de lá" e set é "colocar lá". Compare A1 e B2 com a batalha naval: letra é a coluna, número é a linha, e o cruzamento é a célula. Reforce que o nome da aba dentro das aspas precisa ser idêntico ao das guias, com as mesmas letras maiúsculas.

## Erros comuns e como ajudar

O erro mais frequente é o nome da aba escrito diferente do real, gerando "Cannot read properties of null". Peça que confiram a guia embaixo e copiem exatamente. Outro erro é esquecer as aspas em torno de A1 ou do nome da aba. Há também quem esqueça de Salvar antes de Executar ou de escolher a função certa no topo. Lembre que setValue apaga o conteúdo anterior da célula, então escrever na mesma célula que leem some com o dado. Por fim, se a autorização não aparecer, oriente a executar de novo e clicar em Revisar permissões com calma.`,
  exercicios: [
    {
      titulo: `Leia e responda em B1`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha uma aba chamada Dados e um nome digitado em A1. Acompanhe a primeira autorização, que costuma travar quem nunca rodou código.`,
      atividade: `Crie a função lerEEscrever que lê o valor da célula A1 da aba Dados e escreve em B1 a frase de saudação com o nome lido. Salve, execute e confira o resultado na planilha.`,
      gabarito: `function lerEEscrever() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getSheetByName("Dados");
  var nome = aba.getRange("A1").getValue();
  aba.getRange("B1").setValue("Olá, " + nome + "!");
}
Ao executar, B1 deve mostrar, por exemplo, "Olá, Ana!" quando A1 contém Ana.`,
    },
    {
      titulo: `Copie um valor de uma célula para outra`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre que dá para usar getValue e setValue juntos para copiar dados. Reforce que A2 e C2 são células diferentes e que o nome da aba continua sendo Dados.`,
      atividade: `Escreva uma função que leia o valor de A2 e copie esse mesmo valor para a célula C2, sem mudar o texto. Teste com um nome novo em A2.`,
      gabarito: `function copiarValor() {
  var aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dados");
  var valor = aba.getRange("A2").getValue();
  aba.getRange("C2").setValue(valor);
}
Depois de executar, C2 deve conter exatamente o mesmo conteúdo que está em A2.`,
    },
    {
      titulo: `Mensagem personalizada em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno digita o nome em A1 e o outro escreve o código; depois trocam os papéis. Estimule a juntarem texto antes e depois do nome.`,
      atividade: `Em dupla, façam o código ler o nome de A1 e escrever em B1 uma frase mais completa, como uma boas-vindas à Santos Tech que use o nome no meio da frase.`,
      gabarito: `function boasVindas() {
  var aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dados");
  var nome = aba.getRange("A1").getValue();
  aba.getRange("B1").setValue("Bem-vindo à Santos Tech, " + nome + ", bons estudos!");
}
B1 deve exibir a frase com o nome encaixado no meio, por exemplo "Bem-vindo à Santos Tech, João, bons estudos!".`,
    },
    {
      titulo: `O robô que preenche três linhas`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta é a parte mais difícil. Deixe os alunos repetirem as linhas para A1, A2 e A3 antes de falar em repetição (que virá na próxima semana). O objetivo é firmar getRange por célula.`,
      atividade: `Crie uma função que leia os nomes de A1, A2 e A3 e escreva uma saudação ao lado de cada um, em B1, B2 e B3, respectivamente.`,
      gabarito: `function saudarTres() {
  var aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dados");
  aba.getRange("B1").setValue("Olá, " + aba.getRange("A1").getValue() + "!");
  aba.getRange("B2").setValue("Olá, " + aba.getRange("A2").getValue() + "!");
  aba.getRange("B3").setValue("Olá, " + aba.getRange("A3").getValue() + "!");
}
As células B1, B2 e B3 devem mostrar a saudação correspondente a cada nome das células A1, A2 e A3.`,
    },
    {
      titulo: `Roda de conversa: onde isso vira automação?`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza uma conversa rápida ligando a aula ao mundo real e ao projeto do mês. Anote as ideias no quadro e conecte cada uma à dupla getValue e setValue. Valorize toda resposta.`,
      atividade: `Em roda, cada aluno dá um exemplo de situação real em que um código poderia ler dados de uma planilha e escrever uma resposta sozinho, como lista de presença, controle de mesada ou catálogo de jogos. Discutam o que o código leria e o que escreveria.`,
      gabarito: `Não há resposta única. Exemplos válidos: ler o nome de quem chegou e escrever a hora de entrada ao lado; ler o valor gasto e escrever quanto sobrou da mesada; ler o título de um jogo e escrever se já foi zerado. O ponto-chave a destacar é que toda automação segue o mesmo padrão da aula: localizar a célula com aba e intervalo, ler com getValue e responder com setValue. Considere correta qualquer ideia que separe claramente o que é lido do que é escrito.`,
    },
  ],
};
