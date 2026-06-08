import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Lendo e Escrevendo Células",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a ler o valor de uma célula e escrever resultados de volta na planilha por código, usando Range e Cells dentro de uma macro em VBA.`,
  descricao: `Até agora o aluno aprendeu a guardar dados em variáveis, a tomar decisões com If e a repetir tarefas com loops. Mas tudo isso acontecia "por dentro" do código, longe da planilha. Nesta aula o VBA finalmente encosta nas células: o aluno descobre como pegar um valor que está na grade do Excel, trazer esse valor para dentro do código e devolver uma resposta escrita de volta numa célula. É a ponte entre o programa e a planilha de verdade.

A chave para isso são dois comandos: Range e Cells. O Range usa o nome da célula como a gente escreve no Excel, por exemplo Range("A1"), que é fácil de ler e ótimo para uma célula específica. Já o Cells usa números de linha e coluna, por exemplo Cells(1, 1), que aponta para a mesma célula A1 (linha 1, coluna 1). O Cells é poderoso porque, ao trocar os números por variáveis, a gente consegue passear por muitas células dentro de um loop. Os dois acessam a propriedade Value, que é justamente o valor guardado dentro da célula.

Com essas peças, o aluno cria macros que parecem mágica: a macro lê um nome digitado em A1 e escreve uma saudação em B1; lê uma nota em uma célula e escreve "Aprovado" ou "Recuperação" ao lado; lê uma lista de números e soma tudo escrevendo o resultado embaixo. O dado entra pela planilha, passa pelo código e a resposta volta para a planilha automaticamente. É exatamente o tipo de automação que dá orgulho de mostrar.

Para o professor, a boa notícia é que ler e escrever célula é mais simples do que parece: tudo gira em torno de duas frases, "pegar o Value de uma célula" e "colocar um valor no Value de outra célula". Depois que a turma vê a primeira saudação aparecer sozinha na planilha, o resto vira variação do mesmo padrão. Esta aula conecta diretamente com o entregável do mês, porque mensagens e botões só fazem sentido quando o código consegue conversar com os dados da grade.`,
  materiais: [
    `Computadores com Excel instalado e o Editor VBA disponível (um por aluno), com a guia Desenvolvedor já habilitada na Faixa de Opções`,
    `Projetor ou TV ligada ao computador do professor para demonstrar onde clicar`,
    `Arquivo de exemplo "lendo-celulas.xlsm" salvo como Pasta de Trabalho Habilitada para Macros, com uma aba "Saudação" e uma aba "Notas" com nomes e notas de exemplo`,
    `Cópia do arquivo de exemplo na pasta de cada aluno ou no Google Drive da turma`,
    `Slide ou cartaz comparando Range("A1") e Cells(1, 1) apontando para a mesma célula`,
    `Conta da escola no computador com permissão para abrir, executar macros e salvar arquivos`,
    `Folha de desafio impressa ou no quadro com o problema final da boletim automático`,
  ],
  conceitosChave: [
    `Range — comando do VBA que aponta para uma célula pelo nome dela, igual no Excel, por exemplo Range("A1").`,
    `Cells — comando do VBA que aponta para uma célula por número de linha e coluna, por exemplo Cells(1, 2) para a célula B1.`,
    `Value — propriedade que guarda o valor de dentro da célula; é o que a gente lê e o que a gente escreve.`,
    `Ler uma célula — copiar o valor que está na célula para dentro de uma variável ou usá-lo no código.`,
    `Escrever numa célula — colocar um valor calculado pelo código de volta na planilha, mexendo no Value.`,
    `Linha e coluna — os dois números do Cells; a linha conta de cima para baixo e a coluna conta da esquerda para a direita (coluna 1 é A, coluna 2 é B).`,
    `Macro — o pequeno programa em VBA que, ao rodar, lê e escreve as células sozinho.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula tem um único coração: o VBA consegue ler e escrever qualquer célula da planilha mexendo na propriedade Value. Para ler, a gente diz "variável recebe Range("A1").Value", ou seja, copia o que está em A1 para uma variável. Para escrever, a gente diz "Range("B1").Value recebe alguma coisa", ou seja, coloca um valor dentro de B1. Existem dois jeitos de apontar a célula. O Range usa o nome, como Range("A1"), e é o mais fácil de ler. O Cells usa números, como Cells(1, 1), na ordem linha e depois coluna; Cells(1, 1) é A1, Cells(1, 2) é B1, Cells(2, 1) é A2. O grande truque é que, no Cells, podemos trocar os números por variáveis, e aí o código consegue caminhar por várias células dentro de um loop. Treine criar essas macros sozinho pelo menos duas vezes antes da aula, rodando com F5, para não travar na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o arquivo de exemplo no projetor e relembre rapidamente o loop da aula passada. Digite um nome na célula A1 e pergunte: "Como será que o código pega esse nome que eu acabei de escrever?" Mostre que hoje o VBA vai ler o que está na planilha e devolver uma resposta na própria planilha.

Conteúdo novo guiado (15 min): abra o Editor VBA pelo atalho Alt+F11. Na guia Desenvolvedor, clique em Visual Basic se preferir. Insira um módulo em Inserir, Módulo. Digite junto com a turma, devagar, narrando cada linha:

Sub Saudacao()
    Dim nome As String
    nome = Range("A1").Value
    Range("B1").Value = "Olá, " & nome & "!"
End Sub

Explique linha a linha: Dim cria a variável nome; a segunda linha lê o Value de A1 e guarda em nome; a terceira escreve uma saudação no Value de B1, juntando os textos com o sinal &. Volte ao Excel com Alt+F11, digite um nome em A1 e rode a macro pela guia Desenvolvedor, Macros, Executar (ou F5 dentro do Editor). A saudação aparece em B1 sozinha. Depois mostre o mesmo com Cells: troque Range("A1") por Cells(1, 1) e Range("B1") por Cells(1, 2) e prove que dá o mesmo resultado.

Mão na massa (25 min): cada aluno abre a própria cópia, insere um módulo e digita a macro Saudacao. Peça que rodem, troquem o nome em A1 e rodem de novo, vendo a resposta mudar. Em seguida, desafie-os a criar uma macro Soma que leia dois números em A1 e A2 e escreva o total em A3, usando Range("A3").Value = Range("A1").Value + Range("A2").Value. Circule pela sala conferindo se cada um conseguiu ver o valor aparecer na célula.

Desafio e compartilhar (10 min): proponha uma macro que leia uma nota em A1 e escreva "Aprovado" em B1 se a nota for maior ou igual a 6, juntando o que aprenderam sobre If com o novo poder de escrever células. Cada aluno mostra ao colega do lado a célula que mudou sozinha e diz, em uma frase, o que o código fez.

## Como explicar de forma clara (linguagem para a idade)

Compare a célula com uma caixinha de correio: Value é a carta de dentro. Ler é abrir a caixinha e ver a carta; escrever é colocar uma carta nova lá dentro. Diga que Range é chamar a caixinha pelo nome (A1) e Cells é chamar pelo endereço em números (linha 1, coluna 1). Use a imagem de um robô que olha uma célula, pensa e escreve a resposta em outra. Reforce que o sinal & é uma "cola" que gruda textos, por isso "Olá, " & nome vira uma frase só. E lembre que rodar a macro é apertar o play do robô.

## Erros comuns e como ajudar

O erro mais comum é trocar a ordem do Cells, escrevendo coluna antes de linha; lembre sempre "primeiro a linha, depois a coluna". Outro tropeço é esquecer o .Value e escrever só Range("A1"), o que às vezes funciona mas confunde; peça que sempre escrevam .Value para ler ou gravar o valor. Muitos esquecem as aspas no nome da célula, escrevendo Range(A1) em vez de Range("A1"); mostre que o nome da célula é texto e precisa de aspas. Quando a saudação some, geralmente o aluno deixou A1 vazia: peça que digitem algo antes de rodar. Se aparecer erro de macro desativada, oriente salvar como .xlsm e habilitar conteúdo. Por fim, se o número aparecer "grudado" como texto, mostre que somar células com texto não dá conta certa e que A1 e A2 precisam conter números de verdade.`,
  exercicios: [
    {
      titulo: `Minha primeira saudação automática`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Garanta que cada aluno inseriu um módulo e digitou a macro exatamente como no quadro. Reforce as aspas no Range e o sinal & juntando os textos. Circule conferindo se a saudação apareceu em B1 ao rodar.`,
      atividade: `Abra o arquivo de exemplo e o Editor VBA com Alt+F11. Insira um módulo e digite a macro:

Sub Saudacao()
    Dim nome As String
    nome = Range("A1").Value
    Range("B1").Value = "Olá, " & nome & "!"
End Sub

Volte ao Excel, escreva seu nome em A1 e rode a macro.`,
      gabarito: `Ao rodar a macro com um nome digitado em A1 (por exemplo "Ana"), a célula B1 deve mostrar automaticamente "Olá, Ana!". Trocando o nome em A1 e rodando de novo, a saudação em B1 muda junto. O código leu o Value de A1 e escreveu no Value de B1.`,
    },
    {
      titulo: `Range e Cells: o mesmo destino`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor que Range("A1") e Cells(1, 1) apontam para a mesma célula. Reforce a ordem linha, coluna no Cells. Peça que troquem uma forma pela outra e comprovem que o resultado é igual.`,
      atividade: `Na sua macro Saudacao, troque Range("A1").Value por Cells(1, 1).Value e troque Range("B1").Value por Cells(1, 2).Value. Rode de novo e confira se a saudação continua aparecendo na mesma célula B1.`,
      gabarito: `A macro funciona exatamente igual: Cells(1, 1) é A1 (linha 1, coluna 1) e Cells(1, 2) é B1 (linha 1, coluna 2). A saudação continua aparecendo em B1. O aluno deve concluir que Range e Cells são dois jeitos de apontar a mesma célula.`,
    },
    {
      titulo: `Somando dois números na grade`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Junte os alunos em duplas. Lembre que A1 e A2 precisam conter números de verdade, não texto. Peça que conversem sobre qual célula é lida e qual é escrita antes de rodar.`,
      atividade: `Em dupla, escrevam um número em A1 e outro em A2. Criem uma macro nova:

Sub Soma()
    Range("A3").Value = Range("A1").Value + Range("A2").Value
End Sub

Rodem a macro e confiram o total em A3. Depois troquem os números e rodem de novo.`,
      gabarito: `A célula A3 deve mostrar a soma de A1 e A2. Por exemplo, com 7 em A1 e 5 em A2, A3 vira 12. Ao trocar os números e rodar de novo, A3 atualiza com o novo total. A dupla deve explicar que o código leu os dois valores e escreveu a soma na célula A3.`,
    },
    {
      titulo: `O que o código faz com a planilha?`,
      tipo: `roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Conduza uma conversa curta usando a metáfora da caixinha de correio. Peça que cada aluno explique, com as próprias palavras, a diferença entre ler e escrever uma célula. Anote no quadro as frases que aparecerem.`,
      atividade: `Em roda, responda em voz alta para a turma: na linha "nome = Range("A1").Value", a célula A1 está sendo lida ou escrita? E na linha "Range("B1").Value = ...", a célula B1 está sendo lida ou escrita? Explique como você sabe.`,
      gabarito: `Em "nome = Range("A1").Value" a célula A1 está sendo lida, porque o valor sai da célula e vai para a variável (a célula está à direita do igual). Em "Range("B1").Value = ..." a célula B1 está sendo escrita, porque o valor entra na célula (ela está à esquerda do igual). Quem está à esquerda do igual recebe; quem está à direita é lido.`,
    },
    {
      titulo: `Boletim automático: aprovado ou recuperação`,
      tipo: `projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Este exercício junta o If das aulas anteriores com o novo poder de ler e escrever células, e prepara o entregável do mês. Verifique se usam >= 6 na condição e se escrevem o resultado em B1. Valorize quem testar com várias notas diferentes.`,
      atividade: `Escreva uma nota em A1. Crie uma macro que leia essa nota e escreva o resultado em B1:

Sub Boletim()
    Dim nota As Double
    nota = Range("A1").Value
    If nota >= 6 Then
        Range("B1").Value = "Aprovado"
    Else
        Range("B1").Value = "Recuperação"
    End If
End Sub

Teste com notas acima e abaixo de 6 e veja a resposta mudar em B1.`,
      gabarito: `Com uma nota maior ou igual a 6 em A1 (por exemplo 7), a célula B1 mostra "Aprovado". Com uma nota menor que 6 (por exemplo 4), B1 mostra "Recuperação". O código lê o Value de A1, decide com o If e escreve o resultado no Value de B1, mudando sozinho a cada nova nota testada.`,
    },
  ],
};
