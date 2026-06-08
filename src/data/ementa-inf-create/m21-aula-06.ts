import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Controlando Planilhas por Código",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Usar loops e a palavra Worksheets para percorrer várias células e linhas de uma vez, formatando cores, limpando áreas e organizando uma tabela inteira automaticamente.`,
  descricao: `Até agora o aluno escreveu código que mexia em uma célula por vez. Nesta aula ele dá um salto importante: aprende a controlar muitas células de uma só vez, juntando o loop For (que ele viu na Aula 4) com a leitura e escrita de células (que ele viu na Aula 5). Em vez de digitar a mesma instrução vinte vezes, ele escreve um loop curto que faz o trabalho repetitivo por ele. É a primeira vez que o aluno sente o computador trabalhando "no automático" em cima de uma tabela de verdade.

O segundo conceito novo é o objeto Worksheets, que permite ao código apontar para uma aba específica pelo nome, como Worksheets("Vendas"). Isso é poderoso porque uma macro pode mexer em uma aba mesmo sem ela estar selecionada na tela. O aluno entende que cada aba tem um nome e que o código consegue conversar com a aba certa sem se confundir.

Com essas duas ferramentas, a aula trabalha três ações muito úteis: pintar células com cor de fundo (Interior.Color) para destacar dados, limpar áreas com ClearContents para apagar conteúdo sem apagar a formatação, e percorrer linha por linha com um loop. O fechamento é um mini projeto: uma macro que organiza uma tabela inteira de uma vez, colorindo o cabeçalho, pintando as linhas com dados e limpando uma coluna de rascunho.

O tom continua o mesmo do mês: o aluno é um programador iniciante que está vendo o código fazer coisas reais e visíveis na tela. Cada vez que ele aperta o botão e a planilha muda de cor sozinha, ele percebe o valor de programar. Esta aula prepara o terreno para a Aula 7 (MsgBox e InputBox) e para a entrega final na Aula 8.`,
  materiais: [
    `Computadores (um por aluno) com Microsoft Excel instalado e o Editor VBA já habilitado (guia Desenvolvedor visível)`,
    `Projetor ou TV para o professor mostrar a tela do Excel e do Editor VBA passo a passo`,
    `Arquivo de exemplo "tabela-vendas.xlsm" com uma tabela de 8 a 10 linhas (Produto, Quantidade, Preço) e uma coluna extra de "Rascunho"`,
    `Planilha em branco salva no formato .xlsm (Pasta de Trabalho Habilitada para Macros) para cada aluno praticar`,
    `Folha impressa de apoio com os trechos de código da aula (loop For, Interior.Color, ClearContents, Worksheets)`,
    `Conta de usuário no computador com permissão para executar macros (avisar que macros devem estar habilitadas)`,
    `Cronômetro ou relógio visível para controlar o ritmo de 10/15/25/10 minutos`,
  ],
  conceitosChave: [
    `Worksheets("Nome") — forma de o código apontar para uma aba específica pelo nome, mesmo que ela não esteja selecionada na tela.`,
    `Loop For — repetição que conta de um número até outro, perfeita para percorrer várias linhas ou células automaticamente.`,
    `Cells(linha, coluna) — maneira de chamar uma célula por números, ideal dentro de loops porque o número da linha pode mudar a cada volta.`,
    `Interior.Color — propriedade que define a cor de fundo de uma célula; usamos junto com vbYellow, vbGreen e parecidos.`,
    `ClearContents — comando que apaga o conteúdo de uma célula ou área, mas mantém a formatação (cores e bordas continuam).`,
    `Range("A1:C10") — forma de selecionar uma área retangular de células de uma só vez para limpar, colorir ou copiar.`,
    `Mini projeto — programa pequeno e completo que junta vários comandos para resolver uma tarefa real, como organizar uma tabela inteira.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em VBA. Esta aula junta duas coisas que os alunos já viram: o loop For (Aula 4) e ler/escrever células (Aula 5). O novo é usar o loop para percorrer muitas linhas e pintar, limpar e referenciar abas. Abra o arquivo "tabela-vendas.xlsm" antes da aula e teste cada código uma vez. Para abrir o Editor VBA, aperte Alt+F11. Para rodar uma macro, clique dentro do código e aperte F5. Guarde mentalmente três comandos: Interior.Color (cor de fundo), ClearContents (apaga conteúdo) e Worksheets("nome") (aponta para uma aba). Se algo der errado, o botão Redefinir (quadrado azul na barra de cima do Editor) para a macro.

## Passo a passo da aula

Aquecimento (10 min): pergunte "quem lembra como repetir uma ação com For?". Mostre no projetor um loop simples que escreve os números de 1 a 5 na coluna A usando Cells(i, 1) = i. Rode com F5 e celebre. Isso religa a memória dos alunos com loop e Cells.

Conteúdo novo guiado (15 min): com o "tabela-vendas.xlsm" aberto, mostre três coisas novas. Primeiro, pintar uma célula: digite Range("A1").Interior.Color = vbYellow e rode com F5, a célula fica amarela. Segundo, pintar várias linhas com loop: For i = 2 To 10, dentro escreva Cells(i, 1).Interior.Color = vbGreen, feche com Next i. Terceiro, limpar: Range("D2:D10").ClearContents apaga a coluna de rascunho sem tirar a cor. Mostre Worksheets("Vendas").Range("A1") para explicar que o código aponta para a aba pelo nome. Vá devagar, rodando cada linha com F5 e mostrando o resultado na planilha.

Mão na massa (25 min): cada aluno abre sua planilha .xlsm e digita os códigos junto com você, um de cada vez, rodando com F5 e vendo a mudança. Circule pela sala. O segredo é o aluno apertar F5 e ver a cor mudar; isso prende a atenção. Quem terminar rápido tenta trocar vbGreen por vbCyan ou mudar o intervalo do loop.

Desafio e compartilhar (10 min): proponha o mini projeto, uma macro só que colore o cabeçalho de amarelo, pinta as linhas de dados de verde e limpa a coluna de rascunho. Cada aluno mostra sua tabela organizada para a turma.

## Como explicar de forma clara

Use a imagem do "ajudante invisível". Diga: o loop é um ajudante que faz a mesma coisa em cada linha sem reclamar e sem cansar. Compare Interior.Color com pintar o fundo de um post-it. Compare ClearContents com apagar o que está escrito no quadro, mas sem apagar as linhas do caderno (a formatação fica). Para Worksheets, diga que é como chamar um colega pelo nome em vez de "ei, você": o código fala direto com a aba certa. Sempre que rodar um código, peça para a turma "adivinhar" o que vai acontecer antes de apertar F5, isso cria expectativa e ensina a ler código.

## Erros comuns e como ajudar

O erro mais comum é esquecer o Next i no fim do loop; o Excel reclama de "For sem Next". Mostre que todo For precisa de um Next. Outro erro é digitar a cor errada, como vbYelow em vez de vbYellow; lembre que VBA não perdoa letra trocada. Alguns trocam Cells(i, 1) por Cells(1, i) e pintam a coluna errada; reforce que a ordem é sempre linha, depois coluna. Se o nome da aba estiver diferente, Worksheets("Vendas") dá erro; confira se o nome bate exatamente, incluindo maiúsculas. Por fim, se o aluno salvar como .xlsx comum, as macros somem; garanta que todos salvem como .xlsm.`,
  exercicios: [
    {
      titulo: `Pintando uma célula só`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Aquecimento individual. Garanta que cada aluno tenha o Editor VBA aberto (Alt+F11) e um módulo criado. O objetivo é só sentir o comando de cor funcionando antes de usar loop.`,
      atividade: `Em uma planilha nova .xlsm, escreva uma macro que pinta a célula A1 de amarelo. Rode com F5 e veja a célula mudar de cor.`,
      gabarito: `Sub PintarUma()
  Range("A1").Interior.Color = vbYellow
End Sub

A célula A1 fica com fundo amarelo. Interior.Color define a cor de fundo e vbYellow é o nome pronto da cor amarela.`,
    },
    {
      titulo: `Colorindo várias linhas com loop`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Aqui o aluno junta loop (Aula 4) com cor. Circule e confira se cada um colocou o Next i no final. Peça para apertar F5 e observar todas as células ficando verdes de uma vez.`,
      atividade: `Escreva uma macro com um loop For que pinta de verde as células da coluna A, da linha 2 até a linha 10. Use Cells(i, 1) dentro do loop.`,
      gabarito: `Sub PintarVarias()
  Dim i As Integer
  For i = 2 To 10
    Cells(i, 1).Interior.Color = vbGreen
  Next i
End Sub

O loop conta i de 2 a 10. A cada volta, Cells(i, 1) aponta para uma linha diferente da coluna A (coluna 1) e a pinta de verde.`,
    },
    {
      titulo: `Limpando a coluna de rascunho (em dupla)`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Junte os alunos em duplas no arquivo "tabela-vendas.xlsm". Um digita, o outro confere. Mostre que ClearContents apaga o texto mas mantém a cor, diferente de apagar com a tecla Delete mais a formatação.`,
      atividade: `Na tabela de vendas, escrevam uma macro que limpa o conteúdo da coluna D (rascunho), do D2 até o D10, usando ClearContents. Depois conversem: a formatação sumiu ou continuou?`,
      gabarito: `Sub LimparRascunho()
  Range("D2:D10").ClearContents
End Sub

O comando apaga só o conteúdo escrito de D2 até D10. A formatação (cores e bordas) continua, porque ClearContents não mexe na aparência, só no texto e nos números.`,
    },
    {
      titulo: `Falando com a aba certa (roda de conversa)`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Pare a prática e faça uma roda. Mostre no projetor um código que usa Worksheets("Vendas"). Mude o nome da aba de propósito para "Dados" e rode para a turma ver o erro acontecer. Pergunte por que deu erro e como consertar.`,
      atividade: `Em roda, discutam: por que usamos Worksheets("Vendas").Range("A1") em vez de só Range("A1")? O que acontece se o nome da aba no código for diferente do nome real? Cada aluno dá uma ideia.`,
      gabarito: `Worksheets("Vendas").Range("A1") faz o código falar direto com a aba chamada Vendas, mesmo que outra aba esteja aberta na tela. Se o nome no código não for igual ao nome real da aba (incluindo maiúsculas), o VBA mostra um erro de "subscrito fora do intervalo", porque procura uma aba que não existe. A solução é escrever o nome exatamente igual ao da aba.`,
    },
    {
      titulo: `Mini projeto: organizar a tabela inteira`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `É o entregável da aula. Cada aluno faz sozinho, mas pode pedir ajuda. A macro deve fazer três coisas em sequência: colorir o cabeçalho, pintar as linhas de dados com loop e limpar o rascunho. Peça para mostrar a tabela final para a turma.`,
      atividade: `Escreva UMA macro que, na aba "Vendas": pinta o cabeçalho (A1:C1) de amarelo, percorre as linhas 2 a 10 com um loop pintando a coluna A de verde, e limpa o conteúdo da coluna D (D2:D10). Rode e mostre a tabela organizada.`,
      gabarito: `Sub OrganizarTabela()
  Dim i As Integer
  Worksheets("Vendas").Range("A1:C1").Interior.Color = vbYellow
  For i = 2 To 10
    Worksheets("Vendas").Cells(i, 1).Interior.Color = vbGreen
  Next i
  Worksheets("Vendas").Range("D2:D10").ClearContents
End Sub

A primeira linha pinta o cabeçalho de amarelo. O loop For percorre as linhas 2 a 10 e pinta a coluna A de verde, uma linha por volta. A última linha limpa a coluna de rascunho sem tirar a formatação. Tudo isso aponta para a aba Vendas com Worksheets("Vendas").`,
    },
  ],
};
