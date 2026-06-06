import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "SOMA e MEDIA: o computador calcula por voce",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Usar a função SOMA com intervalos (por exemplo =SOMA(B2:B10)) e a função MÉDIA para calcular totais e médias de notas ou gastos, e entender por que a planilha recalcula sozinha quando os dados mudam.`,
  descricao: `Na aula passada os alunos descobriram a magia das fórmulas e começaram a somar célula por célula, escrevendo coisas como =B2+B3+B4. Funciona, mas imagine somar trinta gastos assim: seria cansativo e cheio de erros. Esta aula apresenta o jeito profissional de fazer isso: a função SOMA com um intervalo, que é só dizer onde começa e onde termina a lista de números.

Um intervalo é um "pedaço" de células seguidas, escrito com dois pontos no meio: B2:B10 significa "da célula B2 até a célula B10, tudo o que estiver no caminho". Em vez de digitar dez somas, o aluno escreve =SOMA(B2:B10) e o Excel soma o bloco inteiro. Melhor ainda: dá para selecionar o intervalo com o mouse, sem precisar digitar as letras e os números. É rápido, é seguro e é exatamente como adultos usam o Excel no trabalho.

Depois da SOMA, entra a estrela nova da aula: a função MÉDIA. Enquanto a SOMA junta tudo num total, a MÉDIA descobre o valor "do meio", aquele que representa o conjunto. É a mesma média que eles conhecem da escola: somar todas as notas e dividir pela quantidade de notas. A diferença é que o computador faz a conta sozinho, sem erro, com =MÉDIA(B2:B10).

O grande momento da aula é ver a planilha recalcular sozinha. Quando o aluno muda uma nota de 5 para 10, o total e a média mudam na hora, sem ele tocar na fórmula. Isso revela a alma de uma planilha: ela não guarda só números, ela guarda relações entre os números. Entender isso é o que transforma uma tabela comum numa "tabela que calcula", o entregável do mês.`,
  materiais: [
    `Computador para cada aluno com o Excel instalado e aberto (ou Excel para a web na conta da escola)`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Arquivo de exemplo pronto chamado "Notas e Gastos" com duas tabelas (uma de notas do bimestre e outra de gastos da semana) já preenchidas com números`,
    `Conta Microsoft da escola ativa para cada aluno, caso usem o Excel para a web`,
    `Folha impressa ou slide com a lista de fórmulas do dia: =SOMA(intervalo) e =MÉDIA(intervalo)`,
    `Calculadora simples (do celular ou física) para conferir manualmente um resultado e provar que o Excel acertou`,
  ],
  conceitosChave: [
    `Intervalo — conjunto de células seguidas, escrito com dois pontos, como B2:B10, que significa "de B2 até B10".`,
    `Função SOMA — fórmula que soma todos os números de um intervalo de uma vez, escrita como =SOMA(B2:B10).`,
    `Função MÉDIA — fórmula que calcula o valor médio de um intervalo, somando tudo e dividindo pela quantidade, escrita como =MÉDIA(B2:B10).`,
    `Argumento — o que vai dentro dos parênteses da função; aqui, o intervalo de células que será calculado.`,
    `Recalcular — quando a planilha refaz a conta sozinha assim que um dado muda, sem precisar reescrever a fórmula.`,
    `Alça de seleção — arrastar o mouse sobre as células para marcar o intervalo, em vez de digitar as letras e os números.`,
    `Total e média — o total é a soma de tudo; a média é o valor que representa o conjunto, o "do meio".`,
  ],
  treinamento: `## O que o professor precisa saber

Você só precisa dominar duas funções: SOMA e MÉDIA. Antes da aula, abra o Excel e teste as duas. Numa coluna, digite os números 10, 8, 6, 9 e 7 nas células B2, B3, B4, B5 e B6. Em B7 escreva =SOMA(B2:B6) e aperte Enter: deve aparecer 40. Em B8 escreva =MÉDIA(B2:B6) e aperte Enter: deve aparecer 8. Pronto, é isso que a turma vai aprender.

Três detalhes importantes. Primeiro: toda fórmula começa com o sinal de igual (=); sem ele, o Excel só mostra o texto. Segundo: o intervalo usa dois pontos (B2:B6), não vírgula nem hífen. Terceiro: em vez de digitar B2:B6, você pode escrever =SOMA( e arrastar o mouse sobre as células; o Excel preenche o intervalo sozinho, e você só fecha o parêntese e aperta Enter. Mostre esse truque, pois é mais rápido e evita erros de digitação.

## Passo a passo da aula

10 min — Aquecimento e revisão. Abra o arquivo "Notas e Gastos" no projetor. Pergunte: "Lembram como somamos na aula passada?" Mostre uma soma antiga, célula por célula (=B2+B3+B4). Provoque: "E se fossem 30 gastos? Hoje tem um jeito muito mais rápido."

15 min — Conteúdo novo guiado. Clique numa célula vazia abaixo da coluna de notas. Digite =SOMA( e arraste o mouse sobre as notas; mostre o intervalo aparecendo (ex.: B2:B10). Feche o parêntese, aperte Enter e comemore o total surgindo. Repita com =MÉDIA(B2:B10) numa célula ao lado. Em seguida, faça a mágica: clique numa nota, troque o valor e aperte Enter. Aponte para o total e a média mudando sozinhos. Diga: "Vocês viram? Eu não toquei na fórmula!"

25 min — Mão na massa. Cada aluno abre o arquivo "Notas e Gastos". Na tabela de notas, escreve =SOMA(intervalo) para o total e =MÉDIA(intervalo) para a média. Na tabela de gastos, faz o mesmo: total gasto na semana e gasto médio por dia. Circule pela sala conferindo se cada fórmula começa com = e se o intervalo usa dois pontos.

10 min — Desafio e compartilhar. Peça que cada aluno mude um valor e observe o recálculo. Quem terminar pega a calculadora e confere se o Excel acertou. Para fechar, dois ou três alunos mostram no projetor a média da turma e contam quanto ela mudou quando alteraram uma nota.

## Como explicar de forma clara

Para o intervalo, use a imagem de uma fila de pessoas: "B2:B10 é como dizer 'do primeiro da fila até o último', e o Excel cumprimenta todo mundo no meio." Para a SOMA, diga que é um ajudante que junta tudo num montinho. Para a MÉDIA, use as notas deles: "Se você tirou 10, 8 e 6, a média é como dividir o esforço igualzinho entre as três provas." Para o recálculo, compare com uma balança: "Se você tira um peso, o ponteiro se mexe sozinho. A planilha é assim com os números."

## Erros comuns e como ajudar

O erro mais comum é esquecer o sinal de igual; a célula mostra "SOMA(B2:B10)" como texto e nada calcula. Peça que confiram o = no começo. O segundo é usar vírgula ou ponto e vírgula no lugar dos dois pontos do intervalo; mostre que B2:B10 leva DOIS pontos. O terceiro é selecionar o intervalo errado, deixando de fora a última linha ou incluindo a célula do total (o que cria referência circular); ensine a arrastar com calma e conferir. O quarto é confundir SOMA com MÉDIA e estranhar um número "pequeno demais"; lembre que a média sempre fica entre o menor e o maior valor, então não pode ser maior que todos.`,
  exercicios: [
    {
      titulo: `Meu primeiro SOMA com intervalo`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que todos abram o arquivo "Notas e Gastos" e encontrem a coluna de notas. Mostre no projetor onde clicar (a célula vazia logo abaixo da última nota). Reforce o sinal de igual e os dois pontos do intervalo. O objetivo é apenas um total funcionando.`,
      atividade: `Abra o arquivo "Notas e Gastos". Clique na célula vazia logo abaixo da coluna de notas. Digite =SOMA( e, com o mouse, arraste sobre todas as notas. Feche o parêntese com ) e aperte Enter. Veja o total aparecer.`,
      gabarito: `A célula deve mostrar o total das notas (um número, não o texto "=SOMA"). A fórmula correta tem o formato =SOMA(B2:B10), começando com = e usando dois pontos no intervalo. Conferindo na calculadora, a soma das notas digitadas deve bater com o número exibido.`,
    },
    {
      titulo: `Descobrindo a MÉDIA`,
      tipo: `Desafio individual`,
      tempo: `10 min`,
      guiaProfessor: `Mostre primeiro no projetor a função =MÉDIA usando o mesmo intervalo da SOMA. Explique que a média sempre fica entre a menor e a maior nota. Tenha a calculadora pronta para provar a conta (somar tudo e dividir pela quantidade).`,
      atividade: `Na célula ao lado do total, digite =MÉDIA( e arraste o mouse sobre as mesmas notas. Feche com ) e aperte Enter. Depois, com a calculadora, some as notas e divida pela quantidade delas. O resultado bate com o do Excel?`,
      gabarito: `A célula mostra a média das notas com o formato =MÉDIA(B2:B10). O valor deve ser igual ao da conta na calculadora (soma das notas dividida pela quantidade de notas) e deve ficar entre a menor e a maior nota da lista. Por exemplo, com notas 10, 8, 6 e 8, o total é 32 e a média é 8.`,
    },
    {
      titulo: `A planilha recalcula sozinha`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Conduza a turma a mudar um valor e observar o que acontece. No projetor, troque uma nota baixa por 10 e aponte o total e a média subindo sem você tocar nas fórmulas. Use a metáfora da balança. Deixe os alunos explicarem com as próprias palavras.`,
      atividade: `Em roda, respondam juntos: (a) O que aconteceu com o total e a média quando você mudou uma nota? (b) Você precisou reescrever a fórmula? (c) Por que isso é útil numa planilha de gastos do mês? Cada aluno dá um exemplo de quando o recálculo automático ajuda.`,
      gabarito: `Respostas esperadas: (a) o total e a média mudaram sozinhos na hora; (b) não, a fórmula continuou a mesma, só o resultado mudou; (c) numa planilha de gastos, basta trocar um valor e o total novo aparece automaticamente, sem refazer contas. A ideia central é que a planilha guarda a relação entre as células, não apenas números fixos.`,
    },
    {
      titulo: `Total e média dos gastos em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `15 min`,
      guiaProfessor: `Forme duplas. Cada par trabalha na tabela de gastos da semana do arquivo. Um aluno cria a SOMA (total gasto) e o outro cria a MÉDIA (gasto médio por dia); depois conferem juntos. Verifique se o intervalo cobre todos os dias e não inclui a célula do total.`,
      atividade: `Com o seu par, na tabela de gastos: 1. Um de vocês escreve =SOMA(intervalo) para o total gasto na semana. 2. O outro escreve =MÉDIA(intervalo) para o gasto médio por dia. 3. Confiram juntos com a calculadora. 4. Mudem o gasto de um dia e vejam o total e a média se ajustarem.`,
      gabarito: `A dupla deve ter duas fórmulas corretas: =SOMA(C2:C8) mostrando o total da semana e =MÉDIA(C2:C8) mostrando o gasto médio por dia (intervalos de exemplo). Ao alterar o gasto de um dia, ambos os resultados mudam sozinhos. Os valores devem coincidir com a conferência na calculadora.`,
    },
    {
      titulo: `Boletim que calcula sozinho`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este é o fechamento e prepara o entregável do mês. Cada aluno monta um mini boletim com 4 matérias e suas notas, e cria o total de pontos e a média geral com fórmulas. Incentive a testar: mudar uma nota e ver a média mudar. Confira o uso correto de = e dos dois pontos.`,
      atividade: `1. Numa área vazia, monte uma tabela com 4 matérias (Português, Matemática, História, Ciências) e uma nota para cada. 2. Crie uma célula "Total de pontos" com =SOMA do intervalo das notas. 3. Crie uma célula "Média geral" com =MÉDIA do mesmo intervalo. 4. Mude a nota de uma matéria e confira se o total e a média mudaram. 5. Mostre o resultado ao professor.`,
      gabarito: `O aluno entrega uma tabela com 4 matérias e notas, uma célula de total usando =SOMA(intervalo) e uma de média usando =MÉDIA(intervalo). Ao trocar uma nota, total e média recalculam automaticamente. A média deve ficar entre a menor e a maior nota; o total deve ser a soma exata das quatro notas. Por exemplo, notas 8, 7, 9 e 6 dão total 30 e média 7,5.`,
    },
  ],
};
