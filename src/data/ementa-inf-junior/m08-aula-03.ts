import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: `Qual é a Média da Turma?`,
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Os alunos descobrem o que é a média como o "número do meio" de uma listinha e usam o botão Média, ao lado da Autosoma, para calcular a média de poucos números com ajuda guiada.`,
  descricao: `Nas aulas anteriores deste mês as crianças conheceram a mágica de somar: clicaram no botão Somar (a Autosoma) e viram o total de uma coluna aparecer sozinho. Hoje a turma descobre um novo super-poder das planilhas, que mora bem do lado do botão de somar: o botão da Média. Em vez de juntar tudo num montão só, a média responde uma pergunta diferente e muito gostosa: "se a gente repartisse tudo igualzinho, quanto ficaria para cada um?". É o número do meio, o número justo, aquele que fica no meio do caminho entre o maior e o menor.

O assunto desta aula é entender a ideia de média com exemplos bem concretos, que a criança consegue ver e tocar. Pense em três bichinhos de pelúcia de alturas diferentes, ou em três amiguinhos que ganharam estrelinhas num joguinho: um ganhou poucas, outro ganhou muitas e outro ficou no meio. A média é como se a gente pegasse todas as estrelinhas, juntasse num montão e dividisse igualzinho para os três, para que ninguém fique com mais nem com menos. O resultado é o número que representa a turma toda: a média da turma.

Nesta idade não vamos ensinar a conta de dividir nem a fórmula matemática. O computador faz a conta sozinho! O papel das crianças é entender PARA QUE serve a média (saber o número do meio, o número justo) e aprender a apertar o botão certo para a planilha responder. O professor mostra, no projetor, onde fica o botão da Média — ele aparece junto da Autosoma, naquela setinha que abre mais opções — e cada criança clica para ver o número mágico do meio surgir na célula.

Por fim, esta aula prepara o caminho para as próximas. Quando a criança entende que a planilha não só soma, mas também tira a média, ela percebe que esse caderno de quadradinhos é uma calculadora esperta cheia de botões prontos. Hoje o foco é pequeno e bem guiado: ver a média de uma listinha curta de números aparecer com um clique e sentir que a planilha pensou pela gente.`,
  materiais: [
    `Computadores ligados, um por criança, com o Excel ou o Google Planilhas já aberto e uma planilha-exemplo curta preparada pelo professor.`,
    `Projetor ou TV grande ligada ao computador do professor para mostrar, bem devagar, onde fica o botão da Média e cada clique.`,
    `Uma planilha-exemplo pronta com três ou quatro números numa coluna (por exemplo notas de estrelas: 2, 4, 6 nas células A1, A2 e A3) para demonstrar a média ao vivo.`,
    `Três bichinhos de pelúcia de alturas diferentes (ou três torres de blocos de montar de tamanhos diferentes) para mostrar a média no mundo real, antes do computador.`,
    `Cartões de papel com estrelinhas desenhadas (um cartão com 2 estrelas, um com 4, um com 6) para o exemplo concreto e para o jogo.`,
    `Folhas com uma listinha curta de números já impressa, uma por aluno, para a atividade de papel.`,
    `Adesivos coloridos para marcar, em cada teclado e tela, a setinha que abre as opções ao lado do botão da Autosoma.`,
  ],
  conceitosChave: [
    `Média — é o número do meio, o número justo: se a gente repartisse tudo igualzinho, é quanto ficaria para cada um.`,
    `Número do meio — é aquele que não é o maior nem o menor, fica no meio do caminho entre os dois.`,
    `Repartir igual — é dividir uma coisa em pedaços do mesmo tamanho, para ninguém ficar com mais nem com menos.`,
    `Botão da Média — é o botãozinho que mora ao lado da Autosoma e faz a planilha calcular a média sozinha.`,
    `Selecionar os números — é pintar com o mouse a listinha de números que a gente quer usar na conta, de cima até embaixo.`,
    `Autosoma — é o botão que a gente já conhece, que junta os números num total; a Média fica escondida na setinha do lado dele.`,
    `Resultado — é o número que a planilha mostra na célula depois que a gente clica no botão e aperta Enter.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa saber matemática avançada para dar esta aula: a planilha faz a conta. Média é só "somar tudo e repartir igual pelo número de coisas". Por exemplo, com as notas 2, 4 e 6, a soma é 12 e, repartindo para os 3, dá 4 — esse 4 é o número do meio. Pratique uma vez antes da aula, no Excel e no Google Planilhas, que funcionam quase igual.

Onde fica o botão. No Excel, na aba "Página Inicial", do lado direito, há o botão Autosoma (o símbolo Σ, que parece um "E" deitado). Ao lado dele há uma setinha pequena para baixo: clique nela e abre uma lista com "Soma", "Média", "Contar Números", "Máx" e "Mín". A opção que vamos usar é Média. No Google Planilhas o caminho é parecido: o mesmo botão Σ fica na barra de cima, à direita; clicando na setinha ao lado aparece "Soma", "Média (AVERAGE)" e outras. Em português pode aparecer "Média"; em inglês, "Average". É a mesma coisa.

Como sai a conta. Clique na célula vazia logo ABAIXO da listinha de números (por exemplo A4, se os números estão em A1, A2 e A3). Clique na setinha ao lado da Autosoma e escolha Média. A planilha pinta sozinha os números de cima e escreve algo como =MÉDIA(A1:A3) na célula. É só apertar Enter e o número do meio aparece. Se a planilha pintar os números errados, basta arrastar o mouse para selecionar a listinha certa antes do Enter.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome o botão de somar das aulas passadas. No projetor, mostre uma coluna de números e clique na Autosoma para o total aparecer: "lembram do botão que soma sozinho?". Depois pegue os três bichinhos de pelúcia de alturas diferentes e pergunte: "qual seria a altura do meio, a altura justa, se eles fossem todos igualzinhos?". Plante a curiosidade.

Conteúdo novo guiado (15 min): no seu computador, com o projetor ligado, mostre a planilha-exemplo com as estrelas 2, 4 e 6 em A1, A2 e A3. Clique na célula A4, abra a setinha ao lado da Autosoma e escolha Média, bem devagar, apontando com o mouse. Mostre os números ficando pintados e a fórmula aparecendo. Aperte Enter: "olhem, apareceu o 4, o número do meio!". Repita com outro exemplo, como alturas de bichinhos.

Mão na massa (25 min): cada criança abre a planilha-exemplo no próprio computador, com uma listinha curta já digitada. Tarefa: clicar na célula de baixo, abrir a setinha da Autosoma, escolher Média e apertar Enter. Passe de mesa em mesa guiando o clique na setinha certa e ajudando a selecionar os números. Quem terminar troca de listinha e faz de novo.

Desafio e compartilhar (10 min): lance o desafio "qual é a média da sua listinha?". Cada criança aperta o botão e lê o número que apareceu. Na roda, compare: "o número do meio ficou maior ou menor que o maior da lista? E que o menor?".

## Como explicar para crianças de 5 a 9 anos

Use o mundo real antes do computador. A média é como repartir um pote de balas igualzinho entre os amigos: cada um recebe o mesmo tanto, o tanto justo. Com os bichinhos de pelúcia, mostre o alto, o médio e o baixinho e diga que a média é a "altura do meio". Repita a palavrinha mágica: "número do meio, número justo". No computador, diga que o botão da Média é o irmãozinho do botão de somar, que mora escondido na setinha do lado. Demonstre cada clique no projetor antes de pedir que tentem, porque nesta idade eles aprendem muito mais vendo do que ouvindo.

## Erros comuns e como ajudar

A criança clica na Autosoma e some o total em vez da média: mostre que precisa clicar na setinha pequena do LADO do botão e escolher Média na listinha. A criança seleciona os números errados e a média sai estranha: ajude a arrastar o mouse pintando só a listinha certa, de cima até embaixo, antes do Enter. A criança esquece de apertar Enter e o número não aparece: lembre que o Enter guarda a conta. A criança acha que a média tem que ser igual a um dos números da lista: explique que a média é o número do meio e quase sempre é diferente. E elogie cada clique certo, para a turma sentir que a planilha pensou junto com ela.`,
  exercicios: [
    {
      titulo: `O Número do Meio dos Bichinhos`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Antes do computador, sente a turma em roda com os três bichinhos de pelúcia (ou três torres de blocos) de alturas diferentes. Mostre o mais alto, o do meio e o mais baixo. Pergunte qual é a "altura do meio", a altura justa. Deixe as crianças apontarem e falarem. Reforce a ideia de número do meio sem usar conta nenhuma.`,
      atividade: `O professor mostra três bichinhos de alturas diferentes e pergunta: "se a gente quisesse uma altura justa, no meio do caminho entre o mais alto e o mais baixinho, qual bichinho ela pareceria?". As crianças apontam o bichinho do meio e explicam por quê.`,
      gabarito: `Resposta certa quando a criança aponta o bichinho do meio (nem o mais alto, nem o mais baixinho) e entende que a média é o "número do meio", o valor justo entre os extremos. Não se espera nenhuma conta: basta a ideia de meio do caminho.`,
    },
    {
      titulo: `Repartindo as Estrelinhas`,
      tipo: `Jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Use os cartões com estrelas (um com 2, um com 4, um com 6). Junte as estrelas num montão na mesa e proponha repartir igualzinho entre três crianças. Conte junto: 12 estrelas para 3 amigos, 4 para cada. Mostre que esse 4 é a média, o tanto justo. Mantenha o clima de brincadeira, contando estrelinhas com a turma.`,
      atividade: `O professor mostra três cartões: um com 2 estrelas, um com 4 e um com 6. As crianças juntam todas as estrelas (12) e repartem igualzinho para três amiguinhos, contando quantas estrelas cada um recebe.`,
      gabarito: `Acertou quando a turma descobre que cada amiguinho recebe 4 estrelas, e percebe que esse 4 (o tanto justo, repartido igual) é a média das estrelinhas. Aceite a contagem feita movendo os cartões; o importante é entender o "repartir igual".`,
    },
    {
      titulo: `Apertando o Botão da Média`,
      tipo: `Prática na ferramenta`,
      tempo: `14 minutos`,
      guiaProfessor: `Faça junto, no projetor, e depois cada criança no seu computador. Mostre a listinha de números (por exemplo 2, 4, 6 em A1, A2, A3). Guie: clicar na célula de baixo, clicar na setinha ao lado da Autosoma, escolher Média e apertar Enter. Passe de mesa em mesa apontando a setinha certa e ajudando a selecionar os números.`,
      atividade: `Na planilha-exemplo, com os números 2, 4 e 6 nas células A1, A2 e A3, a criança clica na célula A4, abre a setinha ao lado do botão de somar, escolhe a opção Média e aperta Enter para ver o resultado aparecer.`,
      gabarito: `Sucesso quando o número 4 (a média de 2, 4 e 6) aparece na célula A4 depois do Enter. O essencial é a criança ter usado a setinha ao lado da Autosoma, escolhido Média e confirmado com Enter, vendo o número do meio surgir sozinho.`,
    },
    {
      titulo: `Minha Listinha no Papel`,
      tipo: `Desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a folha com uma listinha curta de números pequenos já impressa (por exemplo 3, 3, 6). Peça que circulem ou marquem qual seria o "número do meio" depois de repartir igual. Ajude contando junto com desenhos de bolinhas. Não cobre a conta exata; cobre a noção de número justo e do meio.`,
      atividade: `Na folha, está escrita a listinha 3, 3 e 6. A criança desenha as bolinhas correspondentes, junta todas (12 bolinhas), reparte para três e circula o número que sobra para cada um.`,
      gabarito: `Correto quando a criança chega ao número 4 como o tanto justo para cada um (12 bolinhas repartidas para 3) e marca esse 4 como a média da listinha. Vale também aceitar a explicação por desenho, desde que mostre o "repartir igual" chegando ao 4.`,
    },
    {
      titulo: `Desafio: A Média da Minha Turma`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Dê a cada criança uma listinha nova e curta na planilha (números diferentes para cada uma) e peça que descubram a média sozinhas, com pouca ajuda, só dando dicas. Ao terminar, faça a roda: cada uma lê o número que apareceu e compara com o maior e o menor da sua lista. Elogie quem lembrou da setinha e do Enter.`,
      atividade: `Cada criança recebe uma listinha curta de números na sua planilha (por exemplo 5, 7, 9). Ela clica na célula de baixo, abre a setinha da Autosoma, escolhe Média, aperta Enter e lê em voz alta o número do meio que apareceu.`,
      gabarito: `Desafio vencido quando a criança consegue, com pouca ajuda, fazer a média aparecer na célula e ler o resultado (para 5, 7 e 9, a média é 7). Espera-se ainda que ela perceba que esse número do meio ficou entre o maior e o menor da lista. Esse é o passo que prepara as próximas aulas, com mais contas automáticas.`,
    },
  ],
};
