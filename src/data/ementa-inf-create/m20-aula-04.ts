import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Botões Mágicos e Atalhos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar uma macro um pouco maior, atribuir um atalho de teclado e inserir um botão na planilha para rodar a macro com um único clique.`,
  descricao: `Na aula passada o aluno gravou suas primeiras macros e descobriu que o Excel consegue repetir sozinho aquilo que ele fez no teclado e no mouse. Agora chegou a hora de deixar essas macros muito mais práticas: em vez de abrir o menu toda vez para rodar a gravação, o aluno vai aprender dois jeitos de disparar a macro na hora — um atalho de teclado (como Ctrl + Shift + L) e um botão colorido dentro da própria planilha. É como transformar uma receita salva num botão de micro-ondas: aperta e pronto.

Nesta aula o aluno grava uma macro um pouco maior do que as anteriores. Em vez de uma única ação, ele encadeia vários passos — por exemplo, formatar um título, colorir uma faixa de células, ajustar a largura das colunas e centralizar o texto. Tudo isso vira uma macro só. Depois ele atribui essa macro a um atalho de teclado e também a um botão de forma (autoforma) inserido na planilha. Com isso, descobre que a mesma automação pode ser chamada de mais de uma maneira.

A parte mais importante é a comparação entre fazer a tarefa na mão e fazer pelo botão. O aluno vai cronometrar: quanto tempo levou para formatar a tabela manualmente? E pelo atalho ou botão, quanto leva? Essa diferença é o coração da automação e prepara o terreno para as próximas aulas, quando o aluno vai espiar e mexer no código VBA por trás de tudo.

Os erros fazem parte: se a macro fizer algo errado, a estratégia desta semana ainda é a mais simples — apagar e regravar com calma, prestando atenção em cada passo. O aluno aprende que regravar não é fracasso, é o jeito natural de ir melhorando a automação até ela ficar do jeito certo.`,
  materiais: [
    `Computadores (um por aluno) com Microsoft Excel instalado e a guia Desenvolvedor já habilitada`,
    `Projetor ou TV ligado ao computador do professor para demonstrar cada passo ao vivo`,
    `Arquivo de exemplo "lista-de-tarefas.xlsx" com uma tabela sem formatação (cabeçalho, nomes e datas) para a turma praticar`,
    `Cronômetro ou o relógio do celular para medir o tempo de fazer na mão versus pelo botão`,
    `Folha impressa (ou slide) com o passo a passo para inserir botão e atribuir atalho, como apoio visual`,
    `Conta de usuário local com permissão para salvar o arquivo no formato .xlsm (Pasta de Trabalho Habilitada para Macros)`,
  ],
  conceitosChave: [
    `Macro um pouco maior — uma gravação que junta vários passos seguidos (formatar, colorir, ajustar) numa automação só, em vez de uma ação única.`,
    `Atalho de teclado — combinação de teclas (por exemplo Ctrl + Shift + L) que dispara a macro sem precisar abrir nenhum menu.`,
    `Botão na planilha — uma forma (autoforma) que recebe uma macro; ao clicar nela, a macro roda na hora.`,
    `Atribuir macro — ação de ligar uma macro já gravada a um atalho ou a um botão, para poder chamá-la com facilidade.`,
    `Regravar — apagar a macro que ficou errada e gravá-la de novo com calma; é o jeito desta semana de corrigir automações.`,
    `Arquivo .xlsm — formato "Pasta de Trabalho Habilitada para Macros", o único que guarda as macros junto com a planilha ao salvar.`,
    `Manual versus automático — comparar o tempo e o esforço de fazer a tarefa na mão com o de fazer pelo atalho ou botão, mostrando o valor da automação.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Excel. Nesta aula tudo é gravado, sem digitar código. A guia Desenvolvedor (Developer) precisa estar visível antes da aula: vá em Arquivo, Opções, Personalizar Faixa de Opções e, na lista da direita, marque a caixa Desenvolvedor. Repita isso em todos os computadores ou peça à turma que faça no aquecimento. Garanta também que o arquivo de exemplo será salvo como .xlsm, senão as macros somem ao fechar.

Lembre-se de dois caminhos para gravar: a guia Desenvolvedor traz o botão Gravar Macro, e a guia Exibir traz Macros, Gravar Macro. Os dois funcionam igual. Sempre que gravar, peça para Parar Gravação no mesmo lugar quando terminar.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

Aquecimento (10 min): abra o arquivo de exemplo no projetor. Pergunte: "Quem lembra como a gente gravou uma macro na aula passada?". Peça a um aluno para gravar uma macro curtinha (deixar uma célula em negrito) e rodá-la pelo menu Macros, Exibir Macros, Executar. Isso reativa a memória.

Conteúdo novo guiado (15 min): mostre a gravação de uma macro maior. Clique em Desenvolvedor, Gravar Macro. No campo Nome da macro digite FormatarTabela. No campo Tecla de atalho digite L segurando Shift, para ficar Ctrl + Shift + L. Clique OK. Agora, com a gravação ligada, faça vários passos: selecione o cabeçalho e clique em Negrito; pinte o cabeçalho com Cor de Preenchimento (balde de tinta); selecione a tabela e clique em Centralizar; e use Página Inicial, Formatar, Autoajuste da Largura da Coluna. Volte em Desenvolvedor e clique Parar Gravação. Teste o atalho Ctrl + Shift + L numa cópia da tabela. Depois insira o botão: guia Inserir, Formas, escolha um retângulo, desenhe na planilha, digite "Formatar" dentro dele, clique com o botão direito na forma, escolha Atribuir Macro, selecione FormatarTabela e clique OK. Clique fora e depois clique no botão para ver rodar.

Mão na massa (25 min): cada aluno repete tudo na própria planilha. Eles gravam a macro FormatarTabela, definem o atalho e criam o botão. Circule pela sala. Quando alguém errar, oriente a apagar a macro em Exibir Macros, Excluir, e regravar com calma. Peça que cronometrem: primeiro formatam uma tabela na mão e anotam o tempo; depois apagam a formatação e rodam pelo botão, anotando o novo tempo.

Desafio e compartilhar (10 min): proponha melhorar o botão (mudar a cor da forma, trocar o texto para "Formatar agora") e mostrar o tempo "na mão" contra o "pelo botão" para a turma. Feche perguntando: "Valeu a pena automatizar?".

## Como explicar de forma clara

Use a imagem do controle remoto: a macro é o aparelho, e o atalho e o botão são dois botões diferentes do controle que ligam a mesma coisa. Diga que o atalho é como um truque secreto do teclado e o botão é o jeito visual, bom para quem não decorou o atalho. Reforce que gravar é como o Excel anotar cada clique numa lista; por isso, planejar os passos antes de apertar Gravar deixa a macro mais limpa. Sempre conecte com a vida deles: "imagina formatar a lista de presença da turma toda semana num clique".

## Erros comuns e como ajudar

O atalho não funciona: geralmente a tecla já é usada pelo Excel (Ctrl + C, por exemplo) ou o aluno esqueceu o Shift. Oriente a escolher uma letra incomum com Ctrl + Shift. O botão não roda nada: provavelmente a macro não foi atribuída; clique direito na forma, Atribuir Macro, e escolha de novo. A macro some ao reabrir: o arquivo foi salvo como .xlsx; salve como .xlsm. A macro formata o lugar errado: ela "decorou" as células exatas; oriente a regravar selecionando a tabela certa. Se travar, lembre que apagar e regravar é a saída mais rápida nesta fase.`,
  exercicios: [
    {
      titulo: `Gravando a macro FormatarTabela`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe pelo projetor enquanto a turma grava. Confira se cada aluno deu um nome sem espaços (FormatarTabela) e se clicou em Parar Gravação ao final. Lembre que a gravação anota tudo, então convém planejar os passos antes.`,
      atividade: `No arquivo de exemplo, grave uma macro chamada FormatarTabela que faça pelo menos três coisas: deixar o cabeçalho em negrito, pintar o cabeçalho de uma cor e centralizar o texto da tabela. Pare a gravação ao terminar.`,
      gabarito: `A macro deve aparecer na lista em Desenvolvedor, Macros (ou Exibir, Macros). Ao executá-la numa tabela sem formato, o cabeçalho fica em negrito e colorido e o texto fica centralizado. Caminho usado: Desenvolvedor, Gravar Macro, executar os passos, Parar Gravação. Se algo saiu errado, basta excluir em Exibir Macros, Excluir, e regravar.`,
    },
    {
      titulo: `Atalho secreto do teclado`,
      tipo: `Prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre que a tecla de atalho é definida na janela de gravação, no campo Tecla de atalho. Sugira sempre usar Ctrl + Shift junto com uma letra para evitar conflito com atalhos do Excel. Se já gravaram sem atalho, ensine a apagar e regravar definindo a tecla.`,
      atividade: `Defina para a sua macro FormatarTabela o atalho Ctrl + Shift + L. Em seguida, apague a formatação de uma cópia da tabela e teste: aperte o atalho e veja a macro rodar sem abrir nenhum menu.`,
      gabarito: `Ao pressionar Ctrl + Shift + L, a tabela é formatada na hora. O atalho é definido segurando Shift e digitando L no campo Tecla de atalho, ficando Ctrl + Shift + L. Se nada acontecer, a causa comum é ter esquecido o Shift ou ter escolhido uma tecla já usada pelo Excel; nesse caso, regrave escolhendo outra letra.`,
    },
    {
      titulo: `Inserindo o botão mágico`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Oriente a usar Inserir, Formas para desenhar a forma e depois clique direito, Atribuir Macro. Personalizar a cor e o texto da forma é o desafio extra. Verifique se o botão de fato dispara a macro ao ser clicado fora do modo de edição.`,
      atividade: `Insira na planilha uma forma de retângulo, escreva "Formatar agora" dentro dela, atribua a macro FormatarTabela e mude a cor do botão. Depois, clique no botão para rodar a macro.`,
      gabarito: `O botão aparece como uma forma colorida com o texto "Formatar agora". Ao clicar nele (fora do modo de edição), a tabela é formatada. Caminho: Inserir, Formas, desenhar o retângulo, digitar o texto, botão direito, Atribuir Macro, escolher FormatarTabela, OK. A cor é trocada em Formato da Forma, Preenchimento. Se o botão não fizer nada, é porque a macro não foi atribuída.`,
    },
    {
      titulo: `Na mão contra o botão`,
      tipo: `Em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas: um aluno cronometra enquanto o outro formata a tabela na mão; depois invertem e cronometram a versão pelo botão. Garanta que anotem os dois tempos. O objetivo é eles sentirem a diferença, não competirem.`,
      atividade: `Em dupla, formatem uma tabela igual de dois jeitos. Primeiro um colega faz tudo na mão (negrito, cor, centralizar) enquanto o outro cronometra. Depois apaguem a formatação e rodem pelo botão, cronometrando de novo. Anotem os dois tempos.`,
      gabarito: `Espera-se que o tempo na mão seja claramente maior que o tempo pelo botão (por exemplo, cerca de 40 a 60 segundos na mão contra 1 a 2 segundos pelo botão). A conclusão correta é que o botão entrega o mesmo resultado em muito menos tempo, mostrando o valor da automação. Não há tempo "certo"; o importante é registrar a diferença e perceber que pelo botão é muito mais rápido.`,
    },
    {
      titulo: `Roda de conversa: o que vale automatizar?`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza a roda pedindo que cada aluno cite uma tarefa repetitiva do dia a dia (na escola ou em casa) que daria para automatizar. Anote as ideias no quadro. Aproveite para reforçar a regra: vale a pena automatizar tarefas que se repetem muitas vezes.`,
      atividade: `Em roda, cada aluno diz uma tarefa repetitiva que poderia virar uma macro com botão e explica por que valeria (ou não valeria) a pena automatizá-la.`,
      gabarito: `Respostas válidas mencionam tarefas que se repetem com frequência e seguem sempre os mesmos passos, como formatar a lista de presença toda semana, montar a tabela de notas ou colorir um calendário de estudos. Uma boa justificativa liga "repete muitas vezes" a "vale automatizar". Tarefas feitas uma única vez normalmente não compensam virar macro, e reconhecer isso também é uma resposta correta.`,
    },
  ],
};
