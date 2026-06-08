import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Conectando as Macros num Só Fluxo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Fazer com que várias macros do Excel funcionem em sequência com um único clique, usando o comando Call para conectar uma macro a outra.`,
  descricao: `Neste mês, a turma vai construir um mini-sistema dentro do Excel. Antes de chegar a esse sistema completo, o aluno precisa dominar uma ideia poderosa: macros não precisam viver sozinhas. Uma macro pode chamar a outra, e assim várias ações acontecem em ordem, como se fossem peças de um efeito dominó. Esta primeira aula apresenta exatamente esse conceito de fluxo.

Uma macro é um pequeno programa que o aluno já conheceu no Ano 1: ela grava ou executa uma sequência de comandos no Excel, como limpar uma área, escrever um título ou aplicar uma cor. O que muda agora é a forma de pensar. Em vez de rodar três macros separadas, clicando três vezes, o aluno vai criar uma macro principal que aciona as outras automaticamente. O comando que faz essa ligação é o Call.

O professor vai revisar onde ficam as macros (a aba Desenvolvedor e o editor VBA), como executá-las pelo botão Macros e, em seguida, mostrar como uma macro chama a outra. A grande sacada pedagógica é a metáfora do controle remoto: um único botão que dispara uma cena inteira de ações. Isso prepara o terreno para a Aula 2, em que essas ações ficarão atrás de um botão de verdade na planilha.

Ao final, o aluno entende que organizar o código em macros pequenas e conectá-las é mais limpo e mais fácil de consertar do que escrever um bloco gigante. Essa é a base de todo sistema que será montado nas próximas semanas.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e o editor VBA disponível (um por aluno)`,
    `Projetor ou tela para o professor mostrar o passo a passo ao vivo`,
    `Aba Desenvolvedor ativada no Excel de cada máquina (verificar antes da aula)`,
    `Arquivo de exemplo "fluxo-macros-base.xlsm" com uma planilha simples já preparada`,
    `Slide ou cartaz com a metáfora do controle remoto e do efeito dominó`,
    `Folha de apoio impressa com a sintaxe do comando Call para consulta rápida`,
  ],
  conceitosChave: [
    `Macro — pequeno programa que executa uma sequência de comandos no Excel automaticamente.`,
    `Aba Desenvolvedor — área do Excel onde ficam os botões Macros, Visual Basic e os controles de formulário.`,
    `Editor VBA — janela separada onde o código das macros é escrito e organizado em módulos.`,
    `Sub — bloco de código de uma macro, que começa com Sub e termina com End Sub.`,
    `Call — comando que faz uma macro chamar e executar outra macro pelo nome.`,
    `Fluxo — a ideia de várias ações acontecerem em ordem, uma puxando a outra, com um só clique.`,
    `Macro principal — a macro que organiza e dispara as outras na sequência certa.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em programação para dar esta aula. Uma macro é só um conjunto de instruções que o Excel executa por você. Cada macro fica dentro de um bloco que começa com a palavra Sub e termina com End Sub. O nome da macro vem logo depois de Sub, assim: Sub LimparArea(). O segredo da aula é o comando Call: dentro de uma macro, escrever Call OutraMacro faz o Excel rodar a outra macro inteira e depois voltar para continuar de onde parou. Assim você encadeia ações em sequência. Antes da aula, abra o Excel e confirme que a aba Desenvolvedor aparece na faixa superior. Se não aparecer, vá em Arquivo, Opções, Personalizar Faixa de Opções e marque a caixa Desenvolvedor à direita.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Pergunte quem lembra o que é uma macro do Ano passado. Abra o arquivo de exemplo, clique na aba Desenvolvedor e depois no botão Macros. Mostre a lista, selecione uma macro simples e clique em Executar. Diga em voz alta: um clique, uma ação. Plante a dúvida: e se quiséssemos três ações de uma vez?

Conteúdo novo guiado (15 min): No projetor, clique em Desenvolvedor e depois em Visual Basic para abrir o editor VBA. Mostre o módulo com três macros pequenas já prontas: Sub LimparArea(), Sub EscreverTitulo() e Sub PintarCabecalho(). Agora crie a macro principal digitando devagar:

Sub RodarTudo()
    Call LimparArea
    Call EscreverTitulo
    Call PintarCabecalho
End Sub

Explique cada linha: Sub RodarTudo() abre a macro principal; cada Call chama uma macro pelo nome, na ordem de cima para baixo; End Sub fecha o bloco. Volte ao Excel, abra Macros, escolha RodarTudo e clique em Executar. As três ações acontecem juntas. Use a palavra fluxo.

Mão na massa (25 min): Os alunos abrem o mesmo arquivo e refazem o passo a passo na própria máquina. Eles digitam a Sub RodarTudo() com os três comandos Call, salvam mantendo o tipo .xlsm e executam. Circule pela sala. Quem terminar, troca a ordem dos Call e observa que o resultado visual muda conforme a sequência.

Desafio e compartilhar (10 min): Peça para cada aluno criar uma quarta macro pequena, do jeito que quiser, e incluí-la na RodarTudo com mais um Call. Dois ou três voluntários mostram a tela e explicam a ordem que escolheram.

## Como explicar de forma clara (linguagem para a idade)

Use a metáfora do controle remoto: a macro principal é o botão liga-tudo da casa, que acende a luz, liga a TV e abre a cortina de uma vez só. Cada Call é um comando enviado a um aparelho. Outra imagem boa é o efeito dominó: você empurra a primeira peça e as outras caem em ordem. Reforce que a ordem importa: se pintar antes de escrever, o resultado é diferente. Evite o termo procedimento; diga macro pequena e macro principal. Mostre que código organizado em pedaços é mais fácil de consertar do que um bloco gigante.

## Erros comuns e como ajudar

O erro mais frequente é digitar o nome da macro errado depois do Call, gerando Sub or Function not defined; mostre que o nome no Call precisa ser idêntico ao nome após Sub. Outro erro é salvar como .xlsx e perder as macros: lembre sempre Salvar como Pasta de Trabalho Habilitada para Macros (.xlsm). Alguns alunos esquecem o End Sub ou colam um Call fora de qualquer Sub. Se aparecer aviso de macros desabilitadas ao abrir, clique em Habilitar Conteúdo. Mantenha a calma: erros de digitação são normais e fazem parte de programar.`,
  exercicios: [
    {
      titulo: `Rodando uma macro pelo botão Desenvolvedor`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Use para reaquecer a memória do Ano 1. Garanta que todos encontrem a aba Desenvolvedor antes de seguir. Se em alguma máquina a aba não aparecer, ative em Arquivo, Opções, Personalizar Faixa de Opções.`,
      atividade: `Abra o arquivo de exemplo. Clique na aba Desenvolvedor, depois no botão Macros. Selecione a macro EscreverTitulo, clique em Executar e observe o que mudou na planilha. Repita com a macro PintarCabecalho.`,
      gabarito: `O aluno acessa Desenvolvedor, Macros, escolhe cada macro e clica em Executar. Ao rodar EscreverTitulo, um título aparece na célula combinada; ao rodar PintarCabecalho, o cabeçalho recebe cor. Cada clique dispara uma única ação, como esperado.`,
    },
    {
      titulo: `Criando a macro principal com Call`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a digitação no editor VBA. O ponto crítico é o nome dentro do Call ser idêntico ao nome após Sub. Lembre de salvar como .xlsm. Circule conferindo o End Sub.`,
      atividade: `Em Desenvolvedor, clique em Visual Basic. No módulo existente, crie a macro Sub RodarTudo() e adicione, em três linhas, Call LimparArea, Call EscreverTitulo e Call PintarCabecalho. Feche com End Sub, salve como .xlsm e execute RodarTudo pelo botão Macros.`,
      gabarito: `A macro fica assim: Sub RodarTudo() na primeira linha; Call LimparArea; Call EscreverTitulo; Call PintarCabecalho; End Sub. Ao executar RodarTudo, as três ações acontecem em sequência com um único clique: a área é limpa, o título é escrito e o cabeçalho é pintado.`,
    },
    {
      titulo: `Trocando a ordem do dominó`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `O objetivo é que o aluno perceba que a ordem dos Call muda o resultado. Peça que observem a tela antes e depois. Use para reforçar a ideia de fluxo.`,
      atividade: `Na sua macro RodarTudo, troque a ordem das linhas: coloque Call PintarCabecalho antes de Call EscreverTitulo. Execute de novo e compare o resultado com o anterior. Descreva em uma frase o que mudou.`,
      gabarito: `Ao pintar o cabeçalho antes de escrever o título, a ordem das ações muda e o resultado visual fica diferente do original. O aluno conclui que a sequência dos comandos Call importa: o Excel executa de cima para baixo, uma macro de cada vez.`,
    },
    {
      titulo: `Conectando as macros em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno escreve a quarta macro pequena e o outro a conecta na RodarTudo. Eles trocam de papel depois. Verifique se o nome no Call bate exatamente com o nome após Sub.`,
      atividade: `Em dupla, criem juntos uma quarta macro pequena, por exemplo Sub MostrarData(), que escreva a data de hoje numa célula. Depois adicionem Call MostrarData no final da macro RodarTudo e executem para ver as quatro ações em fluxo.`,
      gabarito: `A dupla cria Sub MostrarData() com uma linha que preenche uma célula, por exemplo Range("A10").Value = Date, e fecha com End Sub. Adicionam Call MostrarData como última linha antes do End Sub da RodarTudo. Ao executar, as quatro ações rodam em sequência e a data aparece na célula indicada.`,
    },
    {
      titulo: `Roda de conversa: por que dividir em macros pequenas?`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza uma conversa curta em círculo. Estimule comparações com o dia a dia. Anote as ideias no quadro e feche conectando com a Aula 2, em que um botão dispara o fluxo.`,
      atividade: `Em círculo, discutam: é melhor uma macro gigante com tudo dentro ou várias macros pequenas conectadas com Call? Cada aluno dá um motivo e cita um exemplo da vida real em que dividir uma tarefa em partes ajuda.`,
      gabarito: `As respostas devem convergir para a ideia de que macros pequenas conectadas com Call são mais fáceis de ler, testar e consertar, pois cada parte faz uma coisa só. Exemplos válidos: montar um lanche em etapas, seguir uma receita por passos ou organizar a mochila por matéria. O professor liga isso ao mini-sistema que será construído nas próximas aulas.`,
    },
  ],
};
