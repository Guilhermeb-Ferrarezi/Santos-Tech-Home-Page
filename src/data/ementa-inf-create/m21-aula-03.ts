import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Tomando Decisões com If",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a estrutura If...Then...Else e os operadores de comparação para que o código escolha caminhos diferentes conforme o valor que recebe.`,
  descricao: `Até agora, no Mês 9, os alunos abriram o Editor VBA e guardaram informações dentro de variáveis. O código que eles escreveram seguia sempre em linha reta: começava no topo e ia até o fim, sem nunca mudar de rumo. Nesta aula damos o passo que transforma um código simples em um código esperto: ensinamos o programa a tomar decisões. É aqui que a programação começa a parecer mágica de verdade para o adolescente.

A ferramenta central é a estrutura If...Then...Else, que em português significa "Se...Então...Senão". A ideia é fácil de sentir no dia a dia: "SE a nota for maior ou igual a 6, ENTÃO está aprovado, SENÃO está reprovado". O computador faz exatamente isso. Ele olha uma condição, decide se ela é verdadeira ou falsa e segue por um caminho ou pelo outro. Nenhuma decisão acontece sem uma comparação, e é por isso que apresentamos junto os operadores de comparação: maior (>), menor (<), igual (=), maior ou igual (>=), menor ou igual (<=) e diferente (<>).

Nesta aula o aluno cria macros que reagem a um valor. O exemplo principal é o clássico professor automático: o código lê um número que representa a nota e responde se o estudante passou ou não. A partir desse molde simples, eles vão variar a condição e ver o programa mudar de comportamento na hora. A sensação de controle é imediata e motivadora, porque cada mudança no código gera uma resposta diferente na tela.

Vale lembrar que ainda não usamos células de planilha de forma profunda (isso vem na Aula 5) nem MsgBox como tema central (isso é a Aula 7). Aqui o foco é a lógica da decisão. Usaremos a função MsgBox apenas como uma janela rápida para mostrar o resultado, sem aprofundar, e os valores serão fixos no código ou digitados de forma direta, para que toda a atenção fique na estrutura If e nos operadores de comparação.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e o Editor VBA disponível (atalho Alt + F11 funcionando), um por aluno`,
    `Projetor ou tela grande para o professor mostrar o Editor VBA e digitar o código ao vivo`,
    `Arquivo de exemplo "decisoes-if.xlsm" salvo como Pasta de Trabalho Habilitada para Macros, já com um módulo vazio criado`,
    `Folha impressa ou slide com a "tabela dos operadores de comparação" (>, <, =, >=, <=, <>) para consulta rápida`,
    `Cartaz ou slide com o molde da estrutura If...Then...Else escrito em letras grandes`,
    `Cronômetro visível na tela para marcar os blocos da aula (10/15/25/10 minutos)`,
  ],
  conceitosChave: [
    `Condição — uma pergunta que só pode ter duas respostas: verdadeiro ou falso. Exemplo: a nota é maior ou igual a 6?`,
    `If...Then...Else — estrutura que significa "Se...Então...Senão"; executa um bloco de código quando a condição é verdadeira e outro quando é falsa.`,
    `End If — a linha que fecha a estrutura If; sem ela o VBA mostra erro e o código não roda.`,
    `Operador de comparação — símbolo que compara dois valores: maior (>), menor (<), igual (=), maior ou igual (>=), menor ou igual (<=) e diferente (<>).`,
    `Caminho verdadeiro — o conjunto de linhas que o programa executa quando a condição dá certo (fica entre Then e Else).`,
    `Caminho falso — o conjunto de linhas que o programa executa quando a condição não dá certo (fica entre Else e End If).`,
    `Indentação — o recuo das linhas para dentro que mostra o que está dentro do If; deixa o código organizado e fácil de ler.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. Precisa entender uma ideia só: o computador consegue olhar um valor, fazer uma pergunta de sim ou não, e escolher o que fazer. No VBA isso se escreve assim:

If nota >= 6 Then
    MsgBox "Aprovado"
Else
    MsgBox "Reprovado"
End If

Leia em voz alta como português: "Se a nota for maior ou igual a 6, então mostre Aprovado, senão mostre Reprovado, fim do se". As quatro palavras-chave são If (se), Then (então), Else (senão) e End If (fim do se). A condição fica sempre entre If e Then. Decore os seis operadores: maior (>), menor (<), igual (=), maior ou igual (>=), menor ou igual (<=) e diferente (<>). Atenção a dois detalhes que confundem iniciantes: em VBA usamos um único sinal de igual (=) para comparar, e a estrutura If sempre termina com End If.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Abra o Excel e o arquivo "decisoes-if.xlsm". Pergunte à turma: "como o celular decide se mostra a notificação verde ou vermelha?". Mostre que sempre há uma condição por trás. Faça uma brincadeira sem computador: diga valores de nota e a turma grita "aprovado" ou "reprovado". Eles já estão pensando em If.

Conteúdo novo guiado (15 min). No Excel, pressione Alt + F11 para abrir o Editor VBA. Dê um duplo clique no Módulo1 à esquerda. Digite junto com a turma, devagar, projetando a tela:

Sub VerificarNota()
    Dim nota As Integer
    nota = 7
    If nota >= 6 Then
        MsgBox "Aprovado!"
    Else
        MsgBox "Reprovado."
    End If
End Sub

Explique linha a linha: Dim cria a variável (revisão da Aula 2), nota = 7 guarda o valor, o If faz a pergunta, e cada MsgBox é um caminho. Pressione F5 para rodar e apareça "Aprovado!". Agora troque nota = 7 por nota = 4, rode de novo (F5) e veja "Reprovado.". A turma percebe que mudar o valor muda o caminho.

Mão na massa (25 min). Cada aluno digita o código no próprio computador e roda. Depois propõe trocas: mudar a nota, mudar o número da condição (>= 7), mudar as mensagens. Circule pela sala. Peça que escrevam um segundo If que diga se um número é positivo ou negativo (> 0).

Desafio e compartilhar (10 min). Lance o desafio do "maior de idade": SE idade >= 18 mostre "Adulto" SENÃO mostre "Menor". Dois ou três alunos rodam o código no projetor e explicam a condição que escreveram.

## Como explicar de forma clara (linguagem para a idade)

Use sempre exemplos da vida deles: "SE a bateria está abaixo de 20%, ENTÃO o ícone fica vermelho". Chame a condição de "a pergunta de sim ou não". Diga que o Then é a porta que abre quando a resposta é sim e o Else é a porta de quando a resposta é não. Mostre que o recuo das linhas (indentação) é como guardar as roupas dentro da gaveta certa: deixa tudo organizado. Repita o mantra "todo If precisa de um End If para fechar", igual a um parêntese que abre e fecha.

## Erros comuns e como ajudar

O erro mais frequente é esquecer o End If; o VBA acusa "Block If without End If". Mostre onde colar a linha. Outro é escrever Esle ou Tehn com letras trocadas: peça que comparem com o cartaz. Alguns digitam == (dois iguais, hábito de outras linguagens); lembre que em VBA é um só. Há quem coloque a condição depois do Then; reforce que ela fica entre If e Then. Se a janela MsgBox não fecha, basta clicar em OK. Se nada acontece ao apertar F5, confira se o cursor está dentro do Sub.`,
  exercicios: [
    {
      titulo: `Rodando o professor automático`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno abriu o Editor VBA com Alt + F11 e está no Módulo1. O objetivo é só digitar e rodar o código modelo, sentindo o ciclo escrever-rodar-ver. Passe nas mesas conferindo a indentação e o End If.`,
      atividade: `Digite no Módulo1 o código que verifica a nota: crie uma variável nota com o valor 7, e um If que mostre "Aprovado!" se a nota for maior ou igual a 6 e "Reprovado." caso contrário. Rode com F5 e veja a mensagem.`,
      gabarito: `Sub VerificarNota()
    Dim nota As Integer
    nota = 7
    If nota >= 6 Then
        MsgBox "Aprovado!"
    Else
        MsgBox "Reprovado."
    End If
End Sub

Ao rodar com F5, aparece a janela "Aprovado!", porque 7 é maior ou igual a 6.`,
    },
    {
      titulo: `Trocando o valor e prevendo o caminho`,
      tipo: `desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que ANTES de rodar o aluno escreva num papel qual mensagem vai aparecer. Só depois aperta F5 para conferir. Isso treina a leitura da condição. Há três valores para testar.`,
      atividade: `No mesmo código, mude o valor da variável nota para 5, depois para 6 e depois para 10. Para cada valor, escreva no caderno se vai aparecer "Aprovado!" ou "Reprovado." e só então rode com F5 para conferir.`,
      gabarito: `Com nota = 5: aparece "Reprovado.", porque 5 não é maior nem igual a 6. Com nota = 6: aparece "Aprovado!", porque 6 é igual a 6 e a condição usa >= (maior ou igual). Com nota = 10: aparece "Aprovado!", porque 10 é maior que 6. O número 6 é o limite exato entre os dois caminhos.`,
    },
    {
      titulo: `Positivo ou negativo em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno digita e o outro dita a lógica, depois trocam. O foco é usar o operador maior que (>) com o número zero. Lembre que zero não é positivo nem negativo, mas para esta aula basta separar em dois caminhos.`,
      atividade: `Criem juntos uma macro chamada VerificarNumero que guarda um número numa variável e mostra "Positivo" se o número for maior que zero e "Negativo ou zero" caso contrário. Testem com os valores 8 e depois com -3.`,
      gabarito: `Sub VerificarNumero()
    Dim numero As Integer
    numero = 8
    If numero > 0 Then
        MsgBox "Positivo"
    Else
        MsgBox "Negativo ou zero"
    End If
End Sub

Com numero = 8 aparece "Positivo". Trocando para numero = -3 e rodando de novo aparece "Negativo ou zero", porque -3 não é maior que zero.`,
    },
    {
      titulo: `Roda de conversa: onde existem decisões?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Pare a digitação e reúna a turma em círculo. Conduza a conversa pedindo exemplos do cotidiano em que um aplicativo decide algo. Anote no quadro a condição de cada exemplo no formato "SE ... ENTÃO ...". O objetivo é perceber que If está em todo lugar.`,
      atividade: `Em roda, cada aluno cita um exemplo de decisão automática que vê no dia a dia (jogo, rede social, celular) e diz qual seria a condição. Por exemplo: "SE a senha está certa ENTÃO entra, SENÃO mostra erro". Tentem nomear o operador de comparação de cada caso.`,
      gabarito: `Respostas variam, mas todas devem ter uma condição de sim ou não. Exemplos válidos: "SE curtidas > 100 ENTÃO mostra estrela" (operador maior que); "SE vidas = 0 ENTÃO fim de jogo" (operador igual); "SE bateria < 20 ENTÃO ícone vermelho" (operador menor que); "SE idade >= 18 ENTÃO libera ENTÃO" (maior ou igual). O professor confirma que toda decisão tem uma pergunta com resposta verdadeira ou falsa.`,
    },
    {
      titulo: `Projeto curto: classificador de senha`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o exercício mais difícil e junta tudo: variável, condição e os dois caminhos. Deixe que tentem sozinhos primeiro. Dica para quem travar: o tamanho de um texto se mede com a função Len. Quem terminar pode trocar o número 8 e ver o resultado mudar.`,
      atividade: `Crie uma macro VerificarSenha que guarda uma senha de texto numa variável e avisa se ela é forte ou fraca: se a senha tiver 8 caracteres ou mais, mostre "Senha forte"; caso contrário, mostre "Senha fraca, aumente!". Teste com "abc" e com "minhasenha123".`,
      gabarito: `Sub VerificarSenha()
    Dim senha As String
    senha = "minhasenha123"
    If Len(senha) >= 8 Then
        MsgBox "Senha forte"
    Else
        MsgBox "Senha fraca, aumente!"
    End If
End Sub

A função Len(senha) conta quantas letras a senha tem. Com senha = "abc" o resultado é 3, que não é maior ou igual a 8, então aparece "Senha fraca, aumente!". Com senha = "minhasenha123" o resultado é 13, que é maior ou igual a 8, então aparece "Senha forte". Aqui a condição compara o tamanho do texto, não o texto em si.`,
    },
  ],
};
