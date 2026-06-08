import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Lendo e Mexendo no Código",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ler e editar diretamente o código VBA de uma macro, alterando cor, texto ou valor sem precisar regravar, e rodar a macro pelo próprio editor.`,
  descricao: `Na aula passada o aluno abriu o Editor do VBA e espiou, pela primeira vez, o código que o Excel escreve quando uma macro é gravada. Agora chegou a hora de tocar nesse código com as próprias mãos. Esta aula é sobre coragem: o aluno vai descobrir que o texto dentro do editor não é uma coisa intocável e mágica, e sim instruções em inglês que ele consegue ler, entender e mudar.

O coração da aula são quatro palavras que aparecem o tempo todo no VBA do Excel: Range, Select, Value e ActiveCell. Quando o aluno entende que Range("A1") quer dizer a célula A1, que Select quer dizer selecione, que Value quer dizer o conteúdo e que ActiveCell quer dizer a célula que está selecionada agora, o código deixa de ser um monte de símbolos e vira uma frase com sentido. A partir daí, mexer fica natural: trocar um número, mudar um texto entre aspas, alterar o código de uma cor.

O exercício central é fazer pequenas edições diretas e rodar a macro na hora, sem gravar de novo. O aluno muda uma palavra, aperta o botão de rodar dentro do editor e vê o resultado na planilha em segundos. Esse ciclo rápido de mudar, rodar e olhar é o que transforma o medo em curiosidade. Errar aqui é barato e faz parte: um erro de digitação gera uma mensagem do VBA, e aprender a ler essa mensagem é tão importante quanto escrever o código certo.

Ao final, o aluno percebe que editar código é diferente de gravar macro. Gravar é deixar o Excel escrever por você; editar é assumir o controle e dizer exatamente o que quer. É um passo curto, mas é o passo que separa quem usa a macro de quem manda na macro. Esta aula prepara o terreno para as duas últimas, quando o aluno vai construir e entregar a própria automação.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e o Editor do VBA habilitado (aba Desenvolvedor visível)`,
    `Projetor ou tela grande para o professor mostrar o editor passo a passo`,
    `Arquivo de exemplo Macros-Aula6.xlsm com uma macro simples já gravada (por exemplo, pintar e escrever em uma célula)`,
    `Folha impressa ou slide com o significado de Range, Select, Value e ActiveCell`,
    `Tabela de referência rápida com alguns códigos de cor do VBA (vermelho, verde, azul, amarelo)`,
    `Quadro branco ou flip chart para anotar a frase que cada linha de código representa`,
  ],
  conceitosChave: [
    `Range — forma de apontar para uma célula ou um intervalo pelo nome, como Range("A1") para a célula A1.`,
    `Select — comando que seleciona o que veio antes, o mesmo que clicar na célula com o mouse.`,
    `Value — o conteúdo de uma célula; mudar o Value é o mesmo que digitar algo dentro dela.`,
    `ActiveCell — a célula que está selecionada neste momento; o código pode mexer nela sem saber o endereço exato.`,
    `Editar sem regravar — alterar palavras dentro do código já existente, em vez de gravar a macro de novo do zero.`,
    `Rodar pelo editor — executar a macro apertando a tecla F5 ou o botão de Play dentro do Editor do VBA.`,
    `Erro de execução — mensagem que o VBA mostra quando há um engano no código, indicando a linha com problema.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. Precisa apenas entender quatro palavras e o ciclo "mudar, rodar, olhar". Abra o arquivo de exemplo antes da aula e teste você mesmo. Para chegar ao código: aba Desenvolvedor, botão Visual Basic (ou atalho Alt + F11). No painel da esquerda (Project Explorer), dê dois cliques em Módulos e depois em Módulo1 para ver o código.

Leia esta linha como uma frase: Range("A1").Select quer dizer "selecione a célula A1". A próxima, ActiveCell.Value = "Olá", quer dizer "escreva Olá na célula selecionada". Para rodar sem regravar, clique dentro do código da macro e aperte F5. É só isso. Domine este ciclo e a aula flui.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior. Pergunte: "o que vimos quando abrimos o editor?" Abra o Editor do VBA no projetor (Alt + F11) e mostre a macro de exemplo. Leia uma linha em voz alta e peça a turma para adivinhar o que ela faz. Ainda não mexa em nada.

Conteúdo novo guiado (15 min): apresente as quatro palavras, uma de cada vez, no quadro. Range é o endereço. Select é selecionar. Value é o conteúdo. ActiveCell é a célula de agora. Mostre na tela: clique antes de Range("A1") e aperte F5 para rodar; a turma vê a célula sendo selecionada e preenchida. Agora faça a primeira edição ao vivo: troque o texto entre aspas de "Olá" para "Santos Tech", aperte F5 e mostre que mudou na planilha sem regravar nada. Depois troque um código de cor: onde estiver .Interior.Color = vbYellow, mude para vbGreen e rode de novo.

Mão na massa (25 min): cada aluno abre o arquivo de exemplo, vai ao Editor (Alt + F11) e abre o Módulo1. Peça três edições, uma de cada vez, rodando com F5 após cada uma: 1) mudar o texto entre aspas; 2) mudar a cor (vbRed, vbBlue, vbGreen); 3) mudar um número de Value, por exemplo de 10 para 100. Circule pela sala. A meta é cada um ver a planilha mudar três vezes por edição direta no código.

Desafio e compartilhar (10 min): proponha o desafio de mudar duas coisas ao mesmo tempo (cor e texto) numa mesma rodada. Depois, cada aluno mostra ao colega do lado a célula que personalizou. Feche perguntando: "qual a diferença entre gravar e editar?"

## Como explicar de forma clara (linguagem para a idade)

Compare o código com uma receita já escrita. Gravar a macro foi como o Excel anotar a receita observando você cozinhar. Editar é pegar essa receita pronta e trocar um ingrediente: onde está "açúcar" você escreve "mel". Você não refaz a receita inteira, só muda a palavra.

Diga que aspas são as roupas do texto: o que está entre aspas é o que aparece escrito na célula, letra por letra. Já um número sem aspas é uma quantidade. E a cor é só um nome em inglês começando com vb, como vbRed. Reforce: mexer é seguro, errar é normal e tem conserto. Aperte Ctrl + Z dentro do editor para desfazer.

## Erros comuns e como ajudar

Apagar uma aspa ou um parêntese: o VBA acende a linha em vermelho ou abre um aviso. Mostre como ler: a mensagem aponta a linha; basta olhar se as aspas estão em par e os parênteses fechados. Escrever a cor errada (vbGreem em vez de vbGreen): o erro fala em variável não definida; corrija a letra. Aluno que rodou e "nada aconteceu": ele provavelmente apertou F5 com o cursor fora da macro; peça para clicar dentro do código entre Sub e End Sub e rodar de novo. Por fim, lembre todos de salvar como .xlsm, senão a macro some.`,
  exercicios: [
    {
      titulo: `Lendo o código como uma frase`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Projete a macro de exemplo. Peça que cada aluno copie no caderno o significado de três linhas do código, traduzindo para o português. Não é para rodar ainda, só ler e entender.`,
      atividade: `Olhe as três primeiras linhas da macro no Editor do VBA e escreva, em português, o que cada uma faz. Use as palavras Range, Select, Value e ActiveCell na sua explicação.`,
      gabarito: `Exemplo de tradução. Range("A1").Select significa "selecione a célula A1". ActiveCell.Value = "Olá" significa "escreva Olá na célula que está selecionada agora". ActiveCell.Interior.Color = vbYellow significa "pinte de amarelo a célula selecionada". O aluno acerta se ligar cada linha à sua ação correta.`,
    },
    {
      titulo: `Trocando o texto e a cor`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Cada aluno abre o Módulo1 (Alt + F11). Peça uma edição de texto e uma de cor, rodando com F5 após cada mudança. Confirme que a planilha mudou sem regravar a macro.`,
      atividade: `No código, troque o texto entre aspas pelo seu primeiro nome e rode a macro com F5. Depois mude a cor (por exemplo, de vbYellow para vbBlue) e rode de novo. Veja a célula mudar na planilha.`,
      gabarito: `Após a edição, a linha de texto fica como ActiveCell.Value = "Maria" (com o nome do aluno) e a linha de cor como ActiveCell.Interior.Color = vbBlue. Ao apertar F5, a célula passa a mostrar o nome e fica azul. Sucesso é a planilha refletir as duas mudanças.`,
    },
    {
      titulo: `Mudando o número certo`,
      tipo: `Desafio individual`,
      tempo: `5 minutos`,
      guiaProfessor: `Aponte que números não levam aspas. Peça que troquem um valor numérico do Value e rodem. Quem terminar rápido pode trocar também a célula de Range("A1") para Range("B2").`,
      atividade: `Encontre no código uma linha em que um número é colocado numa célula (Value = 10, por exemplo). Mude o número 10 para 100, rode com F5 e confira o resultado. Desafio extra: mude a célula de A1 para B2.`,
      gabarito: `A linha fica ActiveCell.Value = 100 e a célula mostra 100. No desafio extra, trocar Range("A1").Select por Range("B2").Select faz a macro agir na célula B2. O aluno acerta se o número novo aparecer na célula correta, sem aspas ao redor do número.`,
    },
    {
      titulo: `Caça ao erro em dupla`,
      tipo: `Em dupla`,
      tempo: `6 minutos`,
      guiaProfessor: `Prepare uma cópia com um erro de propósito (uma aspa faltando ou vbGreem escrito errado). Cada dupla deve rodar, ler a mensagem de erro do VBA e consertar. Oriente a olhar a linha destacada.`,
      atividade: `Em dupla, rodem a macro com erro. Leiam a mensagem que o VBA mostra, encontrem a linha com problema e corrijam (faltou uma aspa? a cor está escrita errada?). Rodem de novo para confirmar que funcionou.`,
      gabarito: `Se faltava uma aspa, a correção é fechar o par: ActiveCell.Value = "Texto". Se a cor estava como vbGreem, corrige-se para vbGreen. Após a correção, a macro roda sem aviso de erro e a célula muda. A dupla acerta ao identificar a linha e arrumar o detalhe.`,
    },
    {
      titulo: `Roda de conversa: gravar ou editar?`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Em círculo, conduza a discussão sobre a diferença entre gravar uma macro e editar o código. Anote no quadro as ideias da turma. Valorize respostas com as próprias palavras dos alunos.`,
      atividade: `Conversem em roda: qual a diferença entre gravar uma macro e editar o código direto? Quando é mais rápido só mudar uma palavra no código em vez de gravar tudo de novo? Dê um exemplo do seu dia a dia na escola.`,
      gabarito: `Resposta esperada. Gravar é deixar o Excel escrever o código observando os seus cliques; editar é mexer no código já pronto para mudar um detalhe. Editar é mais rápido quando você só quer trocar uma cor, um texto ou um número, sem refazer toda a tarefa. Qualquer exemplo coerente (mudar o título de um relatório, trocar a cor de um aviso) é válido.`,
    },
  ],
};
