import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Tabela pronta: revisão e apresentação",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno finaliza a sua tabela que calcula no Excel, confere se as fórmulas estão corretas, ajusta cores e bordas, testa o recálculo trocando valores, salva o arquivo e apresenta o trabalho para a turma, fechando o entregável do mês.`,
  descricao: `Esta é a última aula do mês de Excel e o grande dia da entrega. Durante quatro semanas cada aluno percorreu um caminho completo: conheceu o mapa da planilha, entendeu linhas, colunas e abas, digitou dados sem medo, deixou a tabela bonita com cores e bordas, descobriu a magia das fórmulas começando a somar e aprendeu as funções SOMA e MÉDIA para que o computador calculasse por ele. Hoje todo esse aprendizado vira um produto pronto: uma tabela organizada, bem formatada e que calcula sozinha quando os números mudam.

O foco da aula é CONSOLIDAR O ENTREGÁVEL, não criar coisas novas. O aluno revisa a própria tabela com olhar de dono: confere se os títulos das colunas estão claros, se os dados estão nas células certas, se as fórmulas de SOMA e MÉDIA apontam para o intervalo correto e se o resultado faz sentido. Depois cuida da aparência, ajustando cores de preenchimento, bordas e o alinhamento dos textos e números, para que a tabela fique fácil de ler. Por fim, faz o teste mais importante: troca um valor de uma célula e observa o total e a média se recalcularem na hora, provando que a planilha é viva.

A grande sacada para adolescentes de 10 a 15 anos é a sensação de ter construído uma ferramenta de verdade, igual às planilhas que veem os adultos usarem para controlar dinheiro, notas, jogos ou coleções. Quando o aluno muda o preço de um item e vê o total mudar sozinho num piscar de olhos, a ficha cai: ele entende que a fórmula não guarda um número fixo, e sim uma instrução que recalcula sempre que os dados mudam. Esse é o coração do Excel e a base para tudo o que virá nos próximos meses.

O papel do professor hoje é de revisor e mestre de cerimônias. Você ajuda cada aluno a percorrer uma lista de verificação da tabela, garante que o arquivo está salvo com nome claro e no lugar certo, conduz o teste do recálculo e organiza a apresentação final, em que cada aluno mostra a sua tabela que calcula no projetor. O clima deve ser de entrega e orgulho: ninguém é avaliado pela tabela mais bonita, e sim celebrado por ter uma tabela funcionando, salva e que calcula de verdade.`,
  materiais: [
    `Computadores ligados, com o Microsoft Excel instalado e aberto, e o arquivo da tabela que calcula de cada aluno já localizado (um por aluno), salvo desde as aulas anteriores.`,
    `Projetor ou TV grande conectado ao computador do professor, testado antes da aula, para a demonstração da revisão e para a apresentação final das tabelas.`,
    `Conexão com a internet (caso a turma use o Excel para a web ou salve no OneDrive) ou uma pasta combinada no computador para salvar os arquivos com segurança.`,
    `Um arquivo modelo do professor: uma tabela simples já pronta, formatada e com fórmulas de SOMA e MÉDIA funcionando, para demonstrar a revisão, o teste de recálculo e o ato de salvar na frente da turma.`,
    `Uma lista de verificação (checklist) impressa ou na tela com os itens de qualidade da tabela: títulos das colunas, dados corretos, fórmulas certas, cores e bordas, arquivo salvo.`,
    `Lista com o nome de todos os alunos e a ordem de apresentação, para ninguém ficar de fora na hora de mostrar a tabela.`,
    `Pendrives ou pasta de rede combinada para que os alunos guardem uma cópia de segurança do arquivo finalizado, se a escola usar esse fluxo.`,
  ],
  conceitosChave: [
    `Tabela que calcula — uma tabela do Excel que, além de guardar dados, tem fórmulas que produzem resultados automáticos, como total e média.`,
    `Recálculo automático — quando você muda um número numa célula, todas as fórmulas que usam essa célula refazem a conta sozinhas, na hora.`,
    `Fórmula correta — fórmula cujo intervalo aponta exatamente para as células certas, por exemplo =SOMA(B2:B6), sem esquecer nem incluir células erradas.`,
    `Formatação — o capricho visual da tabela: cores de preenchimento, bordas, negrito, alinhamento e largura de coluna, que deixam a leitura fácil.`,
    `Salvar — gravar o arquivo no computador ou na nuvem para não perder o trabalho; no Excel use Ctrl + S, e na primeira vez escolha o nome e a pasta.`,
    `Nome do arquivo — o título dado ao arquivo ao salvar (por exemplo, "minha-tabela-que-calcula"), que ajuda a achar o trabalho depois.`,
    `Revisão — conferir a tabela com olhar de dono antes de entregar: títulos claros, dados certos, fórmulas funcionando e visual organizado.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não ensina nenhum recurso novo: o mês inteiro de Excel já passou. A aula é de FINALIZAR, TESTAR e APRESENTAR. Seu trabalho é guiar cada aluno por uma revisão de qualidade, garantir que a tabela calcula de verdade, confirmar que o arquivo está salvo com nome claro e conduzir a apresentação final. O segredo do dia é o clima de entrega: cada aluno termina com uma tabela bonita, salva e que recalcula sozinha.

Tecnicamente, você precisa dominar quatro passos simples. Primeiro, REVISAR as fórmulas: clique na célula do total e olhe a barra de fórmulas (a faixa branca acima da planilha, com o símbolo "fx" à esquerda); ali você lê, por exemplo, =SOMA(B2:B6) e confere se o intervalo cobre exatamente as células de dados. Faça o mesmo na célula da média, com =MÉDIA(B2:B6). Segundo, AJUSTAR O VISUAL: na guia "Página Inicial", use o balde de tinta (Cor do Preenchimento) para colorir o cabeçalho, o ícone de bordas (Bordas, ao lado do balde) para escolher "Todas as Bordas", o "N" de negrito para destacar títulos e os botões de alinhamento para centralizar. Terceiro, TESTAR O RECÁLCULO: clique numa célula de dado, digite um número diferente, aperte Enter e veja o total e a média mudarem sozinhos. Quarto, SALVAR: aperte Ctrl + S; se for a primeira vez, escolha a pasta combinada e digite um nome claro como "minha-tabela-que-calcula". Treine tudo isso antes da aula com o seu arquivo modelo.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min). Reúna a turma e relembre o mês: "O que a nossa tabela precisa ter para ficar pronta?". Deixe falarem sobre títulos de colunas, dados, fórmulas de SOMA e MÉDIA, cores e bordas. Projete a lista de verificação e explique o combinado de hoje: revisar, testar o recálculo, salvar e apresentar.

2. Conteúdo guiado / demonstração (15 min). Abra o seu arquivo modelo no projetor. Passe pela lista de verificação ao vivo: clique na célula do total e mostre na barra de fórmulas o =SOMA(B2:B6); clique na média e mostre =MÉDIA(B2:B6). Ajuste uma cor de cabeçalho e aplique "Todas as Bordas". Em seguida, troque um valor de uma célula, aperte Enter e mostre o total e a média mudando sozinhos. Por fim, aperte Ctrl + S e mostre como salvar com nome claro.

3. Mão na massa / finalizar e testar (25 min). Cada aluno abre a própria tabela e percorre a lista de verificação: confere títulos e dados, clica nas células de total e média para checar as fórmulas na barra de fórmulas, ajusta cores, bordas e alinhamento, testa o recálculo trocando um valor e salva com Ctrl + S. Circule pela sala corrigindo intervalos de fórmula errados, ajudando a aplicar bordas e confirmando que cada arquivo foi salvo.

4. Desafio e compartilhar (10 min). Chame os alunos pela lista. Cada um abre a sua tabela no projetor e mostra à turma: o que a tabela calcula, qual fórmula usou e o truque mágico, trocando um valor ao vivo para a turma ver o total mudar. Puxe os aplausos e feche o mês celebrando o entregável: uma tabela que calcula, formatada e salva.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação com o mundo real: "Sabe a planilha que seus pais usam para controlar as contas, ou o placar de um campeonato? É exatamente isso que vocês construíram." Chame a tabela de "calculadora inteligente" que faz as contas sozinha. Diga que a fórmula não é um número guardado, e sim uma "receita" que o computador refaz toda vez que um ingrediente (um valor) muda. Para o teste do recálculo, use a frase "vamos mexer num número e ver a mágica acontecer". Para salvar, lembre: "se não salvar, é como escrever na areia e deixar a onda levar". Comemore alto cada tabela que recalcula.

## Erros comuns e como ajudar

- Fórmula com intervalo errado (some menos linhas do que deveria): clique na célula, olhe a barra de fórmulas e corrija o intervalo, por exemplo de =SOMA(B2:B5) para =SOMA(B2:B6).
- Digitar o resultado na mão em vez de usar fórmula: mostre que assim o número não recalcula; apague e escreva =SOMA(...) para a conta ficar viva.
- Esquecer de salvar e perder o trabalho: ensine Ctrl + S e crie o hábito de salvar a cada conquista; confirme o nome e a pasta na primeira vez.
- Bordas que não aparecem porque a seleção estava errada: peça para selecionar a tabela toda primeiro e depois clicar em "Todas as Bordas".
- Achar que a fórmula quebrou ao ver "#####" na célula: explique que é só a coluna estreita; basta arrastar a borda do cabeçalho da coluna para alargá-la.`,
  exercicios: [
    {
      titulo: `Combinando a lista de qualidade da tabela`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma longe das telas e abra o dia com entusiasmo: hoje é o grande dia da entrega do mês. Projete a lista de verificação e leia item por item, pedindo que os alunos expliquem com as próprias palavras o que é cada um (títulos das colunas, dados corretos, fórmulas certas, cores e bordas, arquivo salvo). Combine as regras da apresentação: cada um vai mostrar a sua tabela e fazer o truque do recálculo ao vivo. Reforce que ninguém será comparado, e sim celebrado por ter uma tabela que funciona.`,
      atividade: `1. Sente-se de frente para a tela com a lista de verificação projetada.
2. Diga um item que a sua tabela já tem (um título de coluna, uma fórmula, uma cor).
3. Explique com suas palavras o que é uma "tabela que calcula".
4. Combine com a turma: vou testar o recálculo trocando um valor na hora da apresentação.`,
      gabarito: `Acertou quem participa da roda e demonstra entender pelo menos um item da lista de qualidade. Exemplos de respostas certas: "Tabela que calcula é a que faz a conta sozinha", "Fórmula certa é a que pega as células certas", "Minha tabela já tem total e cores no cabeçalho". Repetir o combinado de testar o recálculo na apresentação também conta. Qualquer participação consciente é sucesso; o objetivo é alinhar a turma sobre o que torna a tabela pronta para entregar.`,
    },
    {
      titulo: `Revisando a tabela no modo dono`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Peça que cada aluno abra a sua tabela no Excel e passe pela lista de verificação como se fosse o dono conferindo antes de entregar. Oriente a checar: os títulos das colunas estão claros e em negrito; os dados estão nas células certas, sem espaços vazios indevidos; e, o mais importante, as fórmulas. Mostre que, ao clicar na célula do total, a barra de fórmulas (a faixa branca com o "fx", acima da planilha) deve exibir algo como =SOMA(B2:B6), e a célula da média deve mostrar =MÉDIA(B2:B6). Circule pela sala corrigindo intervalos de fórmula errados, uma célula de cada vez.`,
      atividade: `1. Abra a sua tabela que calcula no Excel.
2. Confira os títulos das colunas e deixe-os em negrito clicando no "N" da guia "Página Inicial".
3. Clique na célula do total e olhe a barra de fórmulas: deve aparecer =SOMA(...) com o intervalo certo.
4. Clique na célula da média e confira o =MÉDIA(...); corrija o intervalo se estiver pegando células erradas.`,
      gabarito: `Acertou quem revisa a própria tabela e confirma ou corrige pelo menos uma fórmula. Exemplo de sucesso: o aluno clica no total, vê na barra de fórmulas =SOMA(B2:B6), percebe que faltava a última linha e corrige para incluir todas as células de dados. Reconhecer que a fórmula aparece na barra de fórmulas e que o intervalo precisa cobrir exatamente os dados conta como domínio do conceito. Mesmo confirmar que as fórmulas já estavam certas é sucesso; o objetivo é uma tabela revisada e confiável.`,
    },
    {
      titulo: `Capricho final: cores, bordas e alinhamento`,
      tipo: `Prática guiada no computador`,
      tempo: `10 min`,
      guiaProfessor: `Conduza a turma, passo a passo, pela formatação final na guia "Página Inicial". Peça que todos selecionem a tabela inteira (clicando na primeira célula e arrastando até a última) e apliquem "Todas as Bordas" pelo ícone de bordas, que fica ao lado do balde de tinta. Depois oriente a clicar só na linha de títulos e usar o balde (Cor do Preenchimento) para colorir o cabeçalho, deixando-o em negrito. Por fim, mostre os botões de alinhamento para centralizar os títulos e a opção de alargar uma coluna estreita arrastando a borda do cabeçalho da coluna, caso apareça "#####".`,
      atividade: `1. Selecione a tabela inteira, da primeira à última célula.
2. Na guia "Página Inicial", clique no ícone de bordas e escolha "Todas as Bordas".
3. Selecione só a linha de títulos e pinte com o balde (Cor do Preenchimento), deixando em negrito.
4. Centralize os títulos com os botões de alinhamento e, se aparecer "#####", alargue a coluna arrastando a borda do cabeçalho.`,
      gabarito: `Acertou quem deixa a tabela mais fácil de ler aplicando pelo menos bordas e uma cor de cabeçalho. Exemplo de sucesso: o aluno seleciona a tabela, aplica "Todas as Bordas", pinta a linha de títulos de azul, deixa os títulos em negrito e centralizados. Saber que o "#####" é só coluna estreita e resolver alargando-a é um ponto alto. Mesmo aplicar somente as bordas e uma cor já é sucesso; o objetivo é uma tabela organizada e agradável de ler antes da apresentação.`,
    },
    {
      titulo: `O truque da mágica: testar o recálculo`,
      tipo: `Desafio em dupla`,
      tempo: `18 min`,
      guiaProfessor: `Este é o ponto alto da aula. Organize a turma em duplas para que um aluno teste e o outro confira, depois trocam. Cada um deve escolher uma célula de dado, anotar mentalmente o total atual, digitar um valor bem diferente, apertar Enter e observar o total e a média mudarem sozinhos. Reforce a ideia de que a fórmula é uma "receita" que recalcula. Peça que, ao final, devolvam o valor original (ou mantenham o novo, se preferirem) e salvem com Ctrl + S. Circule garantindo que cada dupla viu o recálculo acontecer e que ambos salvaram o arquivo.`,
      atividade: `1. Em dupla, escolha uma célula de dado da sua tabela e repare no total e na média atuais.
2. Digite um valor bem diferente nessa célula e aperte Enter.
3. Observe com o seu colega o total e a média se recalcularem sozinhos.
4. Aperte Ctrl + S para salvar e troque de papel para o colega testar a tabela dele.`,
      gabarito: `Acertou a dupla que vê o recálculo acontecer e salva o arquivo. Exemplo de sucesso: o aluno troca o valor de uma célula de 10 para 50, aperta Enter e vê o total subir e a média mudar na hora, e o colega confirma; depois ambos salvam com Ctrl + S. Explicar que a fórmula refez a conta porque o valor mudou demonstra que o conceito foi compreendido. Mesmo testar uma única vez e ver o recálculo já é sucesso; é a prova de que a tabela calcula de verdade.`,
    },
    {
      titulo: `Apresentando a minha tabela que calcula`,
      tipo: `Projeto curto e apresentação`,
      tempo: `12 min`,
      guiaProfessor: `Feche o mês com a apresentação final. Chame os alunos um a um pela lista. Cada um abre a sua tabela no projetor e conta à turma: o que a tabela calcula, quais colunas tem, qual fórmula usou (SOMA, MÉDIA ou as duas) e faz o truque do recálculo ao vivo, trocando um valor para todos verem o total mudar. Ajude quem travar com perguntas simples ("O que essa coluna mostra?", "Qual célula tem a soma?"). Confirme que o arquivo está salvo. Puxe aplausos a cada apresentação e nunca compare tabelas; celebre que cada um tem um entregável funcionando.`,
      atividade: `1. Espere o professor chamar o seu nome e abra a sua tabela no projetor.
2. Conte o que a sua tabela calcula e quais colunas ela tem.
3. Clique na célula do total ou da média e diga qual fórmula usou.
4. Faça a mágica: troque um valor, aperte Enter para a turma ver o recálculo e receba os aplausos.`,
      gabarito: `Acertou todo aluno que apresenta a sua tabela e mostra o recálculo funcionando. Exemplo de sucesso: o aluno abre a tabela, explica "ela soma os preços dos meus jogos", clica no total e diz "usei =SOMA", depois troca um preço e mostra o total mudando ao vivo. Saber que cada coluna guarda um tipo de dado e que a fórmula faz a conta sozinha conta como domínio do entregável. Independentemente do tema da tabela, apresentar uma tabela que calcula, formatada e salva é sucesso; é a entrega final do mês de Excel.`,
    },
  ],
};
