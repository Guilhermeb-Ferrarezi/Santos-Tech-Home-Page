import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Abrindo o Editor VBA",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Descobrir o que é o VBA, ativar a aba Desenvolvedor, abrir o Editor (Alt+F11) e rodar o primeiro Sub com um MsgBox que mostra uma mensagem na tela.`,
  descricao: `Esta é a aula que abre o mês em que o aluno escreve seu primeiro código de verdade dentro do Excel. Até aqui, ele usou o Excel para somar, organizar e fazer gráficos. Agora ele vai descobrir que existe um Excel escondido por trás do Excel: uma linguagem chamada VBA, que deixa a pessoa dar ordens diretas ao programa e automatizar tarefas. VBA é a sigla de Visual Basic for Applications, e é a linguagem oficial de programação que vive dentro do Office.

A ideia central da aula é simples e poderosa: além de clicar em botões prontos, o aluno pode criar suas próprias instruções. Para isso, ele precisa conhecer o lugar onde o código mora, que é o Editor VBA, uma janela separada do Excel que se abre com o atalho Alt+F11. Lá dentro existem peças novas que o aluno vai aprender a reconhecer: o Project Explorer (a lista de tudo que existe no arquivo), os módulos (as folhas em branco onde o código é escrito) e a janela de código (o espaço grande onde a programação acontece de fato).

O grande momento da aula é rodar o primeiro programa. O aluno vai escrever um bloco chamado Sub, dar um nome a ele e colocar dentro uma única linha com o comando MsgBox, que faz aparecer uma caixinha de mensagem na tela. Quando ele aperta o botão de executar e a mensagem surge, acontece a virada de chave: o computador fez exatamente o que ele mandou, porque ele escreveu o código. É o primeiro código de verdade do ano.

Esta aula não exige decorar nada complicado. O foco é familiaridade e confiança: saber onde fica a aba Desenvolvedor, como abrir o Editor, reconhecer as janelas e sentir na prática que programar é escrever instruções e mandar executar. As próximas aulas vão aprofundar variáveis, decisões e loops, mas tudo começa aqui, abrindo a porta do Editor VBA.`,
  materiais: [
    `Computadores com Microsoft Excel instalado, um por aluno, com permissão para ativar a aba Desenvolvedor e abrir o Editor VBA`,
    `Projetor ou tela grande para o professor mostrar cada clique ao vivo`,
    `Aba Desenvolvedor já ativada na máquina do professor (verificar antes da aula) e, se possível, nas máquinas dos alunos`,
    `Arquivo de exemplo "primeiro-código-base.xlsm" salvo como Pasta de Trabalho Habilitada para Macros`,
    `Slide ou cartaz com a frase "VBA = Excel que obedece ao que você escreve" e o atalho Alt+F11 em destaque`,
    `Folha de apoio impressa com o passo para ativar a aba Desenvolvedor e o modelo do primeiro Sub com MsgBox`,
  ],
  conceitosChave: [
    `VBA — sigla de Visual Basic for Applications, a linguagem de programação que vive dentro do Excel e do Office.`,
    `Aba Desenvolvedor — área da faixa de opções do Excel onde ficam os botões Visual Basic e Macros; precisa ser ativada uma vez.`,
    `Editor VBA — janela separada, aberta com Alt+F11, onde o código é escrito e executado.`,
    `Project Explorer — painel à esquerda do Editor que lista tudo que existe no arquivo, como planilhas e módulos.`,
    `Módulo — folha em branco dentro do Editor onde o aluno digita o código das suas macros.`,
    `Sub — bloco de código que forma um programinha; começa com a palavra Sub e termina com End Sub.`,
    `MsgBox — comando que faz aparecer uma caixa de mensagem na tela com o texto que você escolher.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa saber programar para dar esta aula. VBA é a linguagem que mora dentro do Excel e permite escrever ordens que o programa obedece. O código não é digitado nas células: ele vive em uma janela à parte chamada Editor VBA, que se abre com o atalho Alt+F11 (segure Alt e aperte a tecla F11). Dentro do Editor existem três coisas que você vai mostrar: o Project Explorer, à esquerda, que lista as planilhas do arquivo; o módulo, uma folha em branco onde o código é escrito; e a janela de código, o grande espaço branco da direita. O programa mais simples é um Sub: você escreve Sub mais um nome, aperta Enter e o Editor já cria sozinho a linha End Sub. Tudo que ficar entre essas duas linhas é executado. O comando da aula é MsgBox seguido de um texto entre aspas, que faz surgir uma caixinha na tela. Antes da aula, abra o Excel e confirme que a aba Desenvolvedor aparece; se não aparecer, vá em Arquivo, Opções, Personalizar Faixa de Opções e marque a caixa Desenvolvedor à direita.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Pergunte quem já mandou o computador fazer algo sozinho. Mostre no projetor a frase do cartaz: VBA é o Excel que obedece ao que você escreve. Abra o Excel e procure a aba Desenvolvedor. Se ela não estiver lá, ative ao vivo: Arquivo, Opções, Personalizar Faixa de Opções, marque Desenvolvedor à direita e clique em OK. Mostre que apareceu uma aba nova.

Conteúdo novo guiado (15 min): Clique na aba Desenvolvedor e depois no botão Visual Basic; explique que isso é o mesmo que apertar Alt+F11. Apresente as janelas: aponte o Project Explorer à esquerda e a área branca de código à direita. Crie um módulo: no menu Inserir, clique em Módulo. Agora digite devagar no projetor:

Sub PrimeiraMensagem()
    MsgBox "Olá, eu programei isto!"
End Sub

Explique cada parte: Sub PrimeiraMensagem() abre o programa e dá um nome a ele; a linha do meio é a ordem, onde MsgBox manda mostrar uma caixa com o texto entre aspas; End Sub fecha o programa. Para executar, clique em qualquer lugar dentro do Sub e aperte a tecla F5, ou clique no botão verde de play. A mensagem aparece. Clique em OK para fechar.

Mão na massa (25 min): Os alunos abrem o arquivo de exemplo, apertam Alt+F11, inserem um módulo e digitam o mesmo Sub, trocando o texto entre aspas pela mensagem que quiserem, como o próprio nome. Eles executam com F5 e veem a caixa aparecer. Circule pela sala conferindo as aspas e o End Sub. Quem terminar, cria um segundo Sub com outro nome e outra mensagem.

Desafio e compartilhar (10 min): Peça que cada aluno escreva um Sub cuja mensagem seja uma frase divertida ou um recado para a turma. Dois ou três voluntários executam na frente e mostram a caixinha surgindo. Feche dizendo que eles acabaram de rodar o primeiro código de verdade do ano.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da sala dos bastidores: o Excel que eles conhecem é o palco, e o Editor VBA é a sala de controle escondida atrás do palco, onde ficam os botões que comandam o show. O atalho Alt+F11 é a porta secreta dessa sala. Compare o Sub a uma receita: tem um nome no topo, os passos no meio e um fim. O MsgBox é como o computador falando com você por um balão de fala. Reforce que as aspas marcam o início e o fim do que vai aparecer escrito. Evite palavras como compilar ou depurar; diga escrever e executar. Comemore a primeira mensagem na tela, porque é o momento em que eles sentem que programaram de verdade.

## Erros comuns e como ajudar

O erro mais comum é esquecer uma das aspas no MsgBox, o que deixa a linha vermelha; mostre que o texto precisa abrir e fechar com aspas. Outro tropeço é digitar no Excel, nas células, em vez de digitar dentro do módulo no Editor VBA; lembre que código mora na janela do Alt+F11. Alguns alunos apagam o End Sub sem querer ou esquecem de inserir o módulo antes de escrever. Se ao executar nada acontecer, confirme que o cursor está dentro do Sub antes de apertar F5. Se aparecer aviso de macros desabilitadas ao abrir o arquivo, clique em Habilitar Conteúdo. Tranquilize a turma: erros de digitação são parte natural de aprender a programar.`,
  exercicios: [
    {
      titulo: `Ativando a aba Desenvolvedor`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que todos cheguem a ver a aba Desenvolvedor antes de seguir. Se em alguma máquina ela já estiver visível, peça ao aluno que apenas confirme onde ela fica. Acompanhe quem precisar ativar pela primeira vez.`,
      atividade: `No seu Excel, procure na faixa superior a aba Desenvolvedor. Se ela não estiver lá, clique em Arquivo, depois Opções, depois Personalizar Faixa de Opções. Na lista à direita, marque a caixa Desenvolvedor e clique em OK. Confirme que a aba nova apareceu.`,
      gabarito: `O aluno passa a enxergar a aba Desenvolvedor na faixa de opções. Quem precisou ativar fez o caminho Arquivo, Opções, Personalizar Faixa de Opções, marcou Desenvolvedor e clicou em OK. Ao clicar na aba, aparecem os botões Visual Basic e Macros.`,
    },
    {
      titulo: `Abrindo o Editor e reconhecendo as janelas`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `O objetivo é familiaridade com a tela do Editor, não escrever código ainda. Peça que apontem cada parte na própria máquina. Mostre que Alt+F11 alterna entre o Excel e o Editor.`,
      atividade: `Aperte Alt+F11 para abrir o Editor VBA. Localize o Project Explorer, o painel à esquerda que lista as planilhas. Observe a grande área branca à direita, onde o código vai aparecer. Em seguida, no menu Inserir, clique em Módulo e veja surgir uma folha em branco. Aperte Alt+F11 de novo para voltar ao Excel.`,
      gabarito: `O aluno abre o Editor com Alt+F11, identifica o Project Explorer à esquerda e a área de código à direita, e cria um módulo pelo menu Inserir, Módulo, que aparece na lista do Project Explorer como Módulo1. Ao apertar Alt+F11 novamente, ele volta para a janela do Excel.`,
    },
    {
      titulo: `Rodando o primeiro Sub com MsgBox`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a digitação dentro do módulo. Os pontos críticos são as aspas do texto e a presença do End Sub. Lembre que para executar basta clicar dentro do Sub e apertar F5.`,
      atividade: `No módulo que você criou, digite o programa abaixo, trocando o texto entre aspas pela mensagem que quiser:

Sub PrimeiraMensagem()
    MsgBox "Olá, eu programei isto!"
End Sub

Depois clique dentro do Sub e aperte F5 para executar. Quando a caixinha aparecer, clique em OK.`,
      gabarito: `O código fica com três linhas: Sub PrimeiraMensagem() no topo, MsgBox e o texto entre aspas no meio, e End Sub fechando. Ao apertar F5, surge uma caixa de mensagem na tela com o texto digitado. O aluno clica em OK e a caixa fecha. Isso confirma que o primeiro código foi executado.`,
    },
    {
      titulo: `Caça ao erro em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno cria propositalmente um erro no código do colega, por exemplo apagando uma aspa ou o End Sub, e o outro precisa encontrar e corrigir. Depois trocam de papel. Reforce que linha vermelha indica erro.`,
      atividade: `Em dupla, um de vocês apaga de propósito uma das aspas ou a linha End Sub do Sub PrimeiraMensagem. O outro tenta executar com F5, observa o erro, descobre o que está faltando e conserta até a mensagem voltar a aparecer. Depois inverta os papéis.`,
      gabarito: `A dupla percebe que, sem uma aspa ou sem o End Sub, o Excel mostra um aviso de erro ou destaca a linha em vermelho e o programa não roda. Ao recolocar a aspa que fecha o texto ou a linha End Sub, o código volta a funcionar e a caixa de mensagem aparece de novo ao apertar F5. Os dois alunos conseguem corrigir o erro.`,
    },
    {
      titulo: `Roda de conversa: o que é programar?`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Conduza uma conversa curta em círculo. Estimule comparações com o dia a dia. Anote ideias no quadro e feche conectando com a Aula 2, em que o aluno vai guardar informações em variáveis.`,
      atividade: `Em círculo, cada aluno responde: o que mudou agora que você consegue escrever uma ordem e o Excel obedece? Diga uma coisa que você gostaria de mandar o computador fazer sozinho. Compare com um aparelho do dia a dia que segue comandos.`,
      gabarito: `As respostas devem convergir para a ideia de que programar é escrever instruções claras que o computador executa, e que o aluno deixou de só usar botões prontos para criar os seus próprios. Exemplos válidos de comandos desejados: mostrar uma mensagem, somar valores, organizar uma lista. Comparações válidas: micro-ondas, controle remoto ou assistente de voz que obedecem a ordens. O professor liga isso à Aula 2, sobre guardar dados em variáveis.`,
    },
  ],
};
