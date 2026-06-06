import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Repetindo com Loops",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a usar os loops For e Do While no VBA para repetir ações automaticamente, sem precisar copiar e colar o mesmo código várias vezes.`,
  descricao: `Imagine que você precisa escrever os números de 1 até 100 numa planilha. Sem loop, você teria que digitar cem linhas de código. Com um loop, bastam três linhas. O loop é uma das ideias mais poderosas da programação: ele manda o computador repetir uma ação quantas vezes você quiser, mudando um pouquinho a cada repetição. É exatamente para isso que os computadores foram feitos: fazer tarefas repetitivas rápido e sem erro.

Nesta aula o aluno conhece dois tipos de repetição no VBA. O primeiro é o loop For, que repete um número exato de vezes que já sabemos de antemão (por exemplo, "faça isto 10 vezes"). O segundo é o loop Do While, que repete enquanto uma condição for verdadeira (por exemplo, "continue somando enquanto o total for menor que 100"). Os dois usam uma variável que vai mudando a cada volta, chamada de contador.

O aluno vai praticar contando números na tela, somando uma sequência inteira de valores e, no fim, combinando o loop com o comando If que aprendeu na aula passada. Essa combinação é mágica: dá para percorrer uma lista inteira e tomar uma decisão diferente para cada item. É o primeiro passo para automatizar tarefas de verdade.

O objetivo da aula não é decorar a sintaxe, mas sentir o poder de mandar o computador trabalhar por você. Quando o aluno vê o código preencher trinta células sozinho em um segundo, a ficha cai: ele acabou de automatizar algo que faria à mão em minutos.`,
  materiais: [
    `Computadores (um por aluno) com Microsoft Excel instalado e a aba Desenvolvedor já habilitada, com o Editor VBA acessível pelo atalho Alt + F11.`,
    `Projetor ou TV conectada ao computador do professor para demonstrar cada passo ao vivo.`,
    `Arquivo de exemplo "loops-inicio.xlsm" salvo na área de trabalho de cada máquina, em branco e já no formato habilitado para macros (.xlsm).`,
    `Folha impressa ou slide com a estrutura dos dois loops (For ... Next e Do While ... Loop) para os alunos consultarem.`,
    `Quadro branco ou flip chart para desenhar a ideia do contador girando a cada volta.`,
    `Cronômetro visível (pode ser o do projetor) para controlar os blocos de tempo da aula.`,
  ],
  conceitosChave: [
    `Loop — bloco de código que se repete várias vezes automaticamente, em vez de você copiar a mesma linha muitas vezes.`,
    `Contador — variável que guarda em qual repetição o loop está agora e vai mudando a cada volta (por exemplo, 1, 2, 3...).`,
    `Loop For — repetição que roda um número exato de vezes que já conhecemos, usando For contador = início To fim e fechando com Next.`,
    `Loop Do While — repetição que continua acontecendo enquanto uma condição for verdadeira e para assim que ela vira falsa, fechando com Loop.`,
    `Incremento — o passo que o contador dá a cada volta; por padrão é mais 1, mas pode ser definido com a palavra Step.`,
    `Condição de parada — a regra que diz ao loop quando ele deve terminar; sem ela, um Do While pode rodar para sempre (loop infinito).`,
    `Loop infinito — erro em que a repetição nunca para porque a condição nunca fica falsa; trava o Excel e exige apertar Esc para interromper.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em VBA. Esta aula gira em torno de uma ideia só: repetir sem copiar. Os alunos já sabem criar uma macro (Aula 1), usar variáveis (Aula 2) e tomar decisões com If (Aula 3). Agora juntamos tudo com o loop.

Existem dois loops nesta aula. O loop For tem a forma: For i = 1 To 10 ... Next i. Ele repete dez vezes, e a variável i vale 1 na primeira volta, 2 na segunda, e assim por diante até 10. O loop Do While tem a forma: Do While total < 100 ... Loop. Ele repete enquanto a condição (total menor que 100) for verdadeira. Decore mentalmente que For fecha com Next e Do While fecha com Loop. Esse é o erro mais comum dos alunos: esquecer de fechar.

Antes da aula, abra o Excel, aperte Alt + F11, e teste você mesmo o primeiro exemplo do passo a passo. Rodar uma vez te dá confiança.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

Aquecimento (10 min): Pergunte à turma: "Quem aqui escreveria os números de 1 a 50 na mão?" Mostre no projetor uma macro da aula passada com If e relembre o que é uma variável. Anuncie o tema do dia: "Hoje vamos mandar o computador repetir por nós."

Conteúdo novo guiado (15 min): No seu Excel, abra o Editor com Alt + F11. Insira um módulo (menu Inserir, opção Módulo). Digite junto com a turma, devagar, projetando:

Sub ContarAteDez()
    Dim i As Integer
    For i = 1 To 10
        Cells(i, 1).Value = i
    Next i
End Sub

Aperte F5 para rodar. As células A1 até A10 se preenchem sozinhas. Explique cada parte: Dim cria o contador, For i = 1 To 10 diz "repita de 1 até 10", Cells(i, 1) escreve na linha i da coluna 1, e Next i manda dar a próxima volta. Depois mostre o Do While:

Sub SomarAteCem()
    Dim total As Integer
    total = 0
    Do While total < 100
        total = total + 15
    Loop
    MsgBox total
End Sub

Rode com F5 e mostre a caixa com o resultado. Explique: enquanto total for menor que 100, soma mais 15; quando passa de 100, para.

Mão na massa (25 min): Cada aluno abre o arquivo loops-inicio.xlsm, aperta Alt + F11 e refaz os dois exemplos. Depois muda os números: contar até 20, somar de 5 em 5. Circule pela sala ajudando. Quem terminar combina loop com If (ver exercícios).

Desafio e compartilhar (10 min): Proponha o desafio dos números pares (exercício 4). Peça para dois ou três alunos mostrarem a tela no projetor e explicarem o que o código deles faz.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de uma volta. Cada repetição do loop é "uma volta na pista", e o contador é o número da volta. Diga: "O For é como dar exatamente 10 voltas e parar. O Do While é como correr até cansar: você não sabe quantas voltas vai dar, só sabe que para quando uma condição acontece."

Compare com a vida real: tocar a mesma música em repeat, fazer flexões contando até 20, distribuir uma carta para cada jogador. Tudo isso é loop. Evite a palavra "iteração" no começo; diga "volta" ou "repetição".

## Erros comuns e como ajudar

O esquecimento mais frequente é não fechar o loop: escrever For sem o Next, ou Do While sem o Loop. O Excel reclama com mensagem de erro de compilação; mostre onde fechar. O segundo erro é o loop infinito no Do While, quando a condição nunca fica falsa (por exemplo, esquecer de aumentar o total dentro do loop). Ensine desde já: se o Excel travar, aperte a tecla Esc para interromper. O terceiro erro é confundir o número da linha: lembre que Cells(i, 1) usa o contador i como linha. Por fim, alguns digitam o código fora do Sub; reforce que tudo fica entre Sub e End Sub.`,
  exercicios: [
    {
      titulo: `Contando até trinta`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno abriu o arquivo loops-inicio.xlsm e está no Editor VBA (Alt + F11) com um módulo inserido. O objetivo é só trocar o número final do loop e ver as células se preencherem. Rode junto a primeira vez se necessário.`,
      atividade: `Escreva uma macro chamada ContarAteTrinta que use um loop For para escrever os números de 1 até 30 na coluna A, uma célula por linha. Rode com F5 e veja a coluna se preencher sozinha.`,
      gabarito: `Sub ContarAteTrinta()
    Dim i As Integer
    For i = 1 To 30
        Cells(i, 1).Value = i
    Next i
End Sub

Após rodar com F5, as células A1 até A30 mostram os números de 1 a 30. O contador i muda a cada volta e indica tanto a linha quanto o valor escrito.`,
    },
    {
      titulo: `Somando de cinco em cinco`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Aqui o aluno usa o Do While. Reforce que a variável total começa em zero e precisa aumentar dentro do loop, senão vira loop infinito. Lembre da tecla Esc caso o Excel trave.`,
      atividade: `Escreva uma macro chamada SomarDeCinco que comece com total igual a zero e, usando Do While, vá somando 5 enquanto o total for menor que 50. No final, mostre o resultado numa caixa de mensagem com MsgBox.`,
      gabarito: `Sub SomarDeCinco()
    Dim total As Integer
    total = 0
    Do While total < 50
        total = total + 5
    Loop
    MsgBox total
End Sub

A caixa de mensagem mostra 50. O loop soma 5 a cada volta (5, 10, 15...) e para assim que total chega a 50, pois aí a condição total menor que 50 fica falsa.`,
    },
    {
      titulo: `A tabuada em dupla`,
      tipo: `Em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Junte os alunos em duplas: um digita, o outro confere. A novidade é usar o contador dentro de uma multiplicação. Mostre que i * 7 muda a cada volta. Peça para trocarem de papel na metade.`,
      atividade: `Em dupla, criem a macro TabuadaDoSete que escreva a tabuada do 7 na coluna A. Em cada linha deve aparecer o resultado de 7 vezes o número da volta, do 1 até o 10. Usem um loop For e a fórmula i * 7.`,
      gabarito: `Sub TabuadaDoSete()
    Dim i As Integer
    For i = 1 To 10
        Cells(i, 1).Value = i * 7
    Next i
End Sub

A coluna A mostra 7, 14, 21, 28, 35, 42, 49, 56, 63 e 70. O contador i vai de 1 a 10 e, multiplicado por 7, gera cada resultado da tabuada.`,
    },
    {
      titulo: `Caça aos números pares`,
      tipo: `Desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o ponto alto: combinar loop com If, juntando a aula de hoje com a anterior. Explique que Mod dá o resto da divisão e que resto zero por 2 significa número par. Ajude quem travar mostrando a estrutura, mas deixe o aluno tentar antes.`,
      atividade: `Desafio: crie a macro NumerosPares que percorra os números de 1 até 20 com um loop For e escreva na coluna A somente os números pares. Dica: use If com a condição i Mod 2 = 0 para descobrir se o número é par.`,
      gabarito: `Sub NumerosPares()
    Dim i As Integer
    Dim linha As Integer
    linha = 1
    For i = 1 To 20
        If i Mod 2 = 0 Then
            Cells(linha, 1).Value = i
            linha = linha + 1
        End If
    Next i
End Sub

A coluna A mostra 2, 4, 6, 8, 10, 12, 14, 16, 18 e 20. O loop testa cada número; quando i Mod 2 = 0 é verdadeiro (número par), ele escreve o valor e avança a variável linha para não pular espaços. Uma versão mais simples, sem a variável linha, também é aceita se o aluno usar Cells(i, 1).`,
    },
    {
      titulo: `Onde mais usar um loop?`,
      tipo: `Roda de conversa`,
      tempo: `9 minutos`,
      guiaProfessor: `Feche a aula com todos em roda. O objetivo é transferir a ideia de loop para o mundo real e para outras tarefas de planilha. Anote as respostas no quadro. Valorize ideias criativas, mesmo que ainda não saibam programar.`,
      atividade: `Em roda, cada aluno cita uma situação da vida ou da escola em que algo se repete e que daria para automatizar com um loop. Depois, juntos, escolham uma dessas situações e descrevam em voz alta, sem código, como seria o loop: o que repetir, quantas vezes e quando parar.`,
      gabarito: `Não há resposta única. Exemplos válidos: preencher a chamada de uma turma (repetir para cada aluno), somar as notas de um boletim (repetir para cada matéria), enviar a mesma mensagem para vários contatos, numerar as páginas de um trabalho, colocar um preço em cada produto de uma lista. Para qualquer escolha, o aluno deve identificar três coisas: a ação que se repete, quantas vezes ela acontece (loop For) ou até quando continua (loop Do While), e a condição de parada. Considere correta toda resposta que aponte uma tarefa repetitiva e descreva começo, repetição e parada.`,
    },
  ],
};
