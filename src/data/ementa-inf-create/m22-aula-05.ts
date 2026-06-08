import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Quando o Código dá Errado",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a impedir que o mini-sistema trave usando On Error e mensagens de aviso com MsgBox para guiar quem usa a planilha.`,
  descricao: `Até agora os alunos construíram macros que funcionam quando tudo dá certo: o usuário preenche os campos, digita números onde precisa ser número e clica no botão na ordem esperada. Mas o mundo real não é assim. Uma pessoa de verdade esquece de preencher o nome, digita "abc" onde devia ser a idade ou aperta o botão duas vezes sem querer. Quando isso acontece, o Visual Basic for Applications (VBA) mostra aquela janela amarela de erro que assusta e congela o sistema. Esta aula ensina o aluno a evitar esse susto.

A ideia central é simples e poderosa: um bom programa não confia no usuário, ele se protege. Em vez de deixar o código quebrar, o aluno vai aprender a antecipar o problema e responder com educação. Para isso usamos duas ferramentas. A primeira é o On Error, um comando que diz ao VBA "se algo der errado daqui pra frente, não trave, faça outra coisa". A segunda é o MsgBox, uma caixinha de mensagem que conversa com o usuário, explicando o que faltou ou o que ele precisa corrigir.

O aluno também vai conhecer a validação básica: antes de processar os dados, o código olha para a célula e pergunta "isso está vazio?" ou "isso é mesmo um número?". Se a resposta for ruim, o programa avisa com um MsgBox amigável e para com calma, sem nenhuma janela de erro feia. Assim o sistema deixa de ser frágil e passa a parecer profissional, daqueles que orientam a pessoa em vez de culpá-la.

Esta é a terceira semana do mês, então os alunos já têm macros conectadas e botões funcionando. Agora o foco é deixar tudo à prova de falhas. Nas próximas aulas eles vão blindar o sistema por completo e montar a planilha automatizada final, mas hoje o objetivo é entender por que o código dá errado e como tratar esses erros com gentileza.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e o editor VBA disponível (aba Desenvolvedor habilitada e atalho Alt+F11 funcionando)`,
    `Projetor ou tela compartilhada para o professor mostrar o editor VBA e as mensagens passo a passo`,
    `Arquivo de exemplo "cadastro-base.xlsm" com o mini-sistema das aulas anteriores (formulário de cadastro e botão já prontos)`,
    `Arquivo de apoio "erros-comuns.xlsm" contendo macros que travam de propósito, para o aluno ver o erro acontecer`,
    `Folha impressa ou slide com a estrutura do On Error e do MsgBox para consulta rápida`,
    `Caderno ou bloco de notas para anotar as mensagens de aviso que cada aluno vai criar`,
  ],
  conceitosChave: [
    `Erro de execução — problema que acontece enquanto a macro está rodando, fazendo o VBA parar e mostrar uma janela amarela de aviso.`,
    `On Error — comando que avisa o VBA para não travar quando der erro, mandando o código seguir por outro caminho.`,
    `On Error Resume Next — instrução que manda o programa ignorar o erro e continuar na próxima linha, usada com cuidado.`,
    `On Error GoTo — instrução que envia o código para um rótulo (uma "etiqueta") onde tratamos o erro com calma.`,
    `MsgBox — comando que mostra uma caixinha de mensagem na tela para conversar com o usuário e avisar o que aconteceu.`,
    `Validação — verificação que o código faz antes de agir, conferindo se o campo está vazio ou se o valor é mesmo um número.`,
    `IsNumeric — função do VBA que responde Verdadeiro ou Falso para a pergunta "isso é um número?".`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em VBA para dar esta aula. Basta entender três ideias. Primeira: um erro de execução é quando a macro tenta fazer algo impossível, como dividir por uma célula vazia ou somar texto. Quando isso acontece, o Excel abre uma janela amarela com "Erro em tempo de execução" e o sistema congela. Segunda: o comando On Error muda esse comportamento. Em vez de travar, o código desvia para um plano B. Terceira: o MsgBox é uma caixinha que mostra um texto para o usuário. A forma mais simples é MsgBox "sua mensagem aqui".

Para abrir o editor de código no Excel, use o atalho Alt+F11. Para voltar à planilha, Alt+F11 de novo ou clique no ícone do Excel na barra. Para rodar uma macro e testar, clique dentro do código e aperte F5. Tenha o arquivo "erros-comuns.xlsm" aberto antes da aula para mostrar o erro acontecendo de verdade.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o "erros-comuns.xlsm" no projetor. Deixe um campo de idade vazio e clique no botão de cadastrar. A janela amarela de erro vai aparecer. Pergunte à turma: "O que aconteceu? Foi culpa de quem usou ou de quem programou?". Conduza para a resposta: foi culpa do programador, que não protegeu o código. Mostre que clicar em "Finalizar" não resolve, o sistema continua frágil.

Conteúdo novo guiado (15 min): abra o editor com Alt+F11. Apresente o MsgBox primeiro, porque é visual e divertido. Digite uma linha nova: MsgBox "Olá, eu sou um aviso!". Aperte F5 e mostre a caixinha aparecer. Depois apresente a validação. Antes do código que cadastra, adicione: If Range("B2").Value = "" Then MsgBox "Por favor, preencha o nome!": Exit Sub. Explique linha a linha. If verifica a condição. Range("B2").Value = "" pergunta se a célula está vazia. MsgBox avisa o usuário. Exit Sub para a macro com educação. Em seguida mostre o On Error. No começo da macro escreva On Error GoTo TratarErro e, no final, antes do End Sub, escreva o rótulo TratarErro: seguido de MsgBox "Algo deu errado. Confira os dados.". Explique que On Error GoTo manda o código pular para essa etiqueta sempre que houver erro.

Mão na massa (25 min): cada aluno abre seu próprio "cadastro-base.xlsm". Tarefa um: adicionar uma validação que avisa se o nome está vazio. Tarefa dois: usar a função IsNumeric para checar a idade, com If Not IsNumeric(Range("B3").Value) Then MsgBox "A idade precisa ser um número!": Exit Sub. Tarefa três: colocar On Error GoTo no topo da macro principal e um rótulo de tratamento no final. Circule pela sala, teste com cada aluno deixando campos vazios de propósito e confira se aparece o aviso e não a janela amarela.

Desafio e compartilhar (10 min): proponha que cada aluno escreva a mensagem de aviso mais simpática e clara possível. Peça que dois ou três alunos mostrem seus MsgBox no projetor. Vote em qual mensagem mais ajudaria um usuário de verdade.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do videogame. Um jogo bom não fecha sozinho quando você aperta o botão errado, ele mostra um aviso na tela. Diga: "O On Error é o cinto de segurança do código. Espero que nunca precise, mas se bater, ele te protege". Compare o MsgBox com uma placa de aviso na entrada de um lugar: "Cuidado, piso molhado". A placa não resolve o problema, mas avisa a pessoa antes que ela escorregue. Reforce a frase de ouro da aula: "Programador bom não confia no usuário, ele protege o sistema".

## Erros comuns e como ajudar

O esquecimento mais frequente é trocar as aspas certas por aspas curvas ao copiar texto, o que faz o MsgBox dar erro. Peça que digitem as aspas à mão. Outro tropeço é esquecer o Exit Sub depois do aviso, fazendo o código continuar mesmo com o campo vazio. Mostre que sem o Exit Sub o programa não para. Muitos esquecem os dois pontos no rótulo TratarErro: e o VBA reclama. Por fim, alguns escrevem o rótulo de erro no meio da macro em vez do final, fazendo o código entrar nele sempre. Mostre que o rótulo fica perto do End Sub.`,
  exercicios: [
    {
      titulo: `Sua primeira caixinha de aviso`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno consiga abrir o editor com Alt+F11 e rodar a macro com F5. Reforce que as aspas devem ser digitadas à mão para evitar aspas curvas.`,
      atividade: `Abra o editor VBA do seu "cadastro-base.xlsm", crie uma macro nova chamada TesteAviso e dentro dela escreva uma linha que mostre uma caixinha com a mensagem que você quiser. Rode com F5 e veja a caixinha aparecer.`,
      gabarito: `Sub TesteAviso()
    MsgBox "Olá! Esta é a minha primeira mensagem de aviso."
End Sub

Ao apertar F5, uma caixinha com o texto e um botão OK aparece na tela. Qualquer texto entre as aspas é aceito.`,
    },
    {
      titulo: `Não deixe o nome vazio`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que testem deixando a célula do nome vazia e também preenchida, para verem os dois caminhos. Lembre-os do Exit Sub, que é o erro mais comum aqui.`,
      atividade: `Na macro que cadastra os dados, adicione no começo uma validação que avise o usuário caso a célula do nome (por exemplo B2) esteja vazia e pare a macro logo em seguida. Teste com o campo vazio e com o campo preenchido.`,
      gabarito: `If Range("B2").Value = "" Then
    MsgBox "Por favor, preencha o nome antes de cadastrar!"
    Exit Sub
End If

Com a célula vazia, aparece o aviso e a macro para. Com o nome preenchido, o cadastro segue normalmente. Sem o Exit Sub a macro continuaria mesmo sem o nome, por isso ele é obrigatório.`,
    },
    {
      titulo: `A idade tem que ser número`,
      tipo: `Desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Apresente a função IsNumeric e o operador Not. Teste com cada aluno digitando texto na célula da idade, como "doze", para ver o aviso disparar em vez da janela amarela.`,
      atividade: `Adicione uma validação que confira se a idade (por exemplo na célula B3) é mesmo um número. Se não for, mostre um aviso explicando o problema e pare a macro. Teste digitando a palavra "abc" na célula da idade.`,
      gabarito: `If Not IsNumeric(Range("B3").Value) Then
    MsgBox "A idade precisa ser um número! Confira o que você digitou."
    Exit Sub
End If

A função IsNumeric responde Verdadeiro quando o valor é número e Falso quando é texto. O Not inverte: se NÃO for número, o aviso aparece e a macro para. Com "abc" na célula, surge a mensagem; com 12, o cadastro continua.`,
    },
    {
      titulo: `O cinto de segurança do código`,
      tipo: `Em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada dupla revisa o código de um colega. Reforce os dois pontos no rótulo e que o rótulo de tratamento fica perto do End Sub. Peça que provoquem um erro de propósito para testar.`,
      atividade: `Em dupla, escolham a macro principal de um dos computadores. Coloquem On Error GoTo no topo, apontando para um rótulo chamado TratarErro, e criem esse rótulo no final da macro com uma mensagem amigável. Provoquem um erro de propósito e vejam o aviso aparecer no lugar da janela amarela.`,
      gabarito: `Sub Cadastrar()
    On Error GoTo TratarErro

    ' ... aqui fica o código que cadastra os dados ...

    Exit Sub
TratarErro:
    MsgBox "Algo deu errado. Confira os dados e tente de novo."
End Sub

O On Error GoTo desvia o código para o rótulo TratarErro sempre que houver erro. O Exit Sub antes do rótulo evita que a macro entre no tratamento quando tudo dá certo. Repare nos dois pontos depois de TratarErro, sem eles o VBA reclama.`,
    },
    {
      titulo: `Sistema à prova de erros`,
      tipo: `Projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este exercício junta tudo. Verifique os três tipos de proteção no código de cada aluno: campo vazio, valor não numérico e On Error. Faça um teste final deixando campos vazios e digitando texto na idade. Valorize quem escreveu mensagens claras e gentis.`,
      atividade: `Deixe a macro de cadastro do seu mini-sistema totalmente protegida. Ela precisa: avisar se o nome estiver vazio, avisar se a idade não for número e ter um On Error GoTo que mostre uma mensagem caso qualquer outro erro aconteça. Teste todos os casos e capriche nas mensagens.`,
      gabarito: `Sub Cadastrar()
    On Error GoTo TratarErro

    If Range("B2").Value = "" Then
        MsgBox "Por favor, preencha o nome antes de cadastrar!"
        Exit Sub
    End If

    If Not IsNumeric(Range("B3").Value) Then
        MsgBox "A idade precisa ser um número! Confira o que digitou."
        Exit Sub
    End If

    ' ... aqui fica o código que salva o cadastro ...

    MsgBox "Cadastro feito com sucesso!"
    Exit Sub
TratarErro:
    MsgBox "Algo deu errado. Confira os dados e tente novamente."
End Sub

Com o nome vazio, aparece o primeiro aviso. Com texto na idade, aparece o segundo. Qualquer outro erro cai no rótulo TratarErro. Quando tudo está certo, surge a mensagem de sucesso. O sistema nunca mais mostra a janela amarela de erro.`,
    },
  ],
};
