import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Decisões e Repetições no Código",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a usar condições (if/else) e laços de repetição (for) no Google Apps Script para que o código tome decisões sozinho e repita tarefas automaticamente em uma lista de notas.`,
  descricao: `Na aula anterior, o aluno escreveu seu primeiro código de verdade: criou uma função, declarou variáveis e viu uma mensagem aparecer na tela. Agora damos o próximo passo natural da programação. Até aqui o código fazia sempre a mesma coisa, na mesma ordem, sem pensar. Nesta aula ele aprende a tomar decisões e a repetir trabalho, que são as duas superpotências que transformam um script simples em uma automação esperta.

A primeira ideia é a condição, escrita com if e else. Pense assim: se a nota for maior ou igual a seis, o aluno está aprovado; senão, está reprovado. O computador avalia uma pergunta de verdadeiro ou falso e escolhe um caminho. Essa é exatamente a forma como aplicativos decidem se mostram o botão verde ou o vermelho, se liberam uma fase do jogo ou não. É lógica pura, e o adolescente já usa esse raciocínio o dia inteiro sem perceber.

A segunda ideia é o laço de repetição, escrito com for. Imagine que você tem uma lista com trinta notas para classificar uma por uma. Fazer isso na mão é cansativo e cheio de erro. O for diz ao computador: faça este bloco de código várias vezes, andando item por item, até terminar a lista. É a base de quase toda automação de planilha, porque dados quase sempre vêm em listas e tabelas que precisam ser percorridas.

O grande momento da aula é juntar as duas coisas. O aluno vai percorrer uma lista de notas com o for e, dentro do laço, usar o if/else para decidir se cada aluno passou ou não. Variável, condição e repetição trabalhando juntas pela primeira vez. No final, o código olha trinta notas em um piscar de olhos e devolve a classificação completa, algo impossível de fazer manualmente na mesma velocidade. É aqui que a turma sente, de verdade, o poder de programar.`,
  materiais: [
    `Computadores (um por aluno) com acesso à internet e ao Google Planilhas, com o editor de Apps Script já liberado na conta`,
    `Conta Google ativa para cada aluno (a mesma usada nas aulas anteriores)`,
    `Projetor ou TV para o professor mostrar a tela e o código ao vivo`,
    `Planilha de exemplo pronta chamada "Notas da Turma" com uma coluna de nomes e uma coluna de notas para distribuir aos alunos`,
    `Folha impressa ou slide com a estrutura do if/else e do for em letras grandes, para servir de referência visual`,
    `Cronômetro ou relógio visível para controlar o ritmo dos quatro blocos da aula`,
  ],
  conceitosChave: [
    `Condição (if) — comando que faz o código testar uma pergunta de verdadeiro ou falso e executar algo só quando a resposta é verdadeira.`,
    `Senão (else) — caminho alternativo que o código segue quando a condição do if não foi atendida.`,
    `Operador de comparação — sinais como maior ou igual (>=), menor (<) e igual (===) usados para comparar valores dentro de uma condição.`,
    `Laço de repetição (for) — comando que repete um bloco de código várias vezes, normalmente percorrendo uma lista item por item.`,
    `Contador (i) — variável que o laço usa para saber em qual repetição está, indo de um número inicial até um limite.`,
    `Lista (array) — coleção de vários valores guardados juntos, como todas as notas de uma turma, acessados pela posição.`,
    `Bloco de código — conjunto de comandos dentro de chaves que pertencem à mesma condição ou ao mesmo laço.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula tem dois conceitos novos: a condição (if/else) e o laço (for). Você não precisa ser programador para ensinar. Pense no if como a palavra "se" do dia a dia: "se chover, levo guarda-chuva; senão, vou sem". O for é a ideia de "faça isso de novo até acabar a lista". O segredo é mostrar o código rodando ao vivo no projetor, devagar, lendo cada linha em voz alta. O Apps Script roda dentro do Google Planilhas, então tudo acontece no navegador, sem instalar nada.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Abra a planilha de exemplo "Notas da Turma". No menu superior, clique em Extensões e depois em Apps Script. Mostre a função da aula passada e peça que cada aluno abra a sua. Faça perguntas rápidas: o que é uma variável? Onde aparece a mensagem? Isso reativa a memória antes do conteúdo novo.

Conteúdo novo guiado (15 min). No editor, digite ao vivo uma função simples. Escreva: function classificarNota() { var nota = 7; if (nota >= 6) { Logger.log("Aprovado"); } else { Logger.log("Reprovado"); } }. Clique no botão Executar (o ícone de play no topo) e mostre o resultado na aba Registro de execução, na parte de baixo. Mude o valor de nota para 4, execute de novo e mostre que a mensagem muda. Em seguida, apresente o for: function contarNotas() { var notas = [8, 3, 6, 9, 5]; for (var i = 0; i < notas.length; i = i + 1) { Logger.log(notas[i]); } }. Execute e mostre que ele imprime uma nota por vez. Explique cada pedaço: i começa em zero, vai até o tamanho da lista e aumenta de um em um.

Mão na massa (25 min). Agora os alunos combinam tudo. Eles devem percorrer a lista de notas e, para cada uma, decidir Aprovado ou Reprovado. O código alvo é: function classificarTurma() { var notas = [8, 3, 6, 9, 5]; for (var i = 0; i < notas.length; i = i + 1) { if (notas[i] >= 6) { Logger.log(notas[i] + " - Aprovado"); } else { Logger.log(notas[i] + " - Reprovado"); } } }. Circule pela sala. Peça que cada aluno troque os valores da lista pelas notas de personagens inventados. Quem terminar, muda a nota de corte de seis para sete e observa o que acontece.

Desafio e compartilhar (10 min). Lance o desafio: criar uma terceira saída usando else if, por exemplo "Recuperação" para notas entre quatro e cinco. Peça que dois ou três alunos mostrem a tela no projetor e expliquem, com as próprias palavras, o que o laço está fazendo.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do mundo deles. O if é o porteiro de um jogo: "se você tem a chave, passa; senão, fica de fora". O for é o personagem andando casa por casa numa rua coletando moedas. As chaves { } são como caixas que guardam o que pertence àquela decisão ou repetição. Sempre rode o código logo depois de escrever, para a turma ver causa e efeito na hora. Repita a frase mágica: "o computador é rápido e obediente, mas só faz o que está escrito".

## Erros comuns e como ajudar

O erro mais frequente é esquecer de fechar uma chave } ou um parêntese ), o que faz o script reclamar de sintaxe. Mostre como contar pares: para cada que abre, um que fecha. Outro erro é trocar o sinal de comparação, usando = em vez de >= ou ===, o que muda completamente o resultado. Alunos também esquecem de salvar antes de executar: lembre-os do ícone de disquete ou do atalho Control mais S. Por fim, se o laço não roda, geralmente o i não está aumentando; verifique a parte i = i + 1. Diante de qualquer erro, leia a mensagem vermelha junto com o aluno, com calma, mostrando que errar e corrigir faz parte de programar.`,
  exercicios: [
    {
      titulo: `Aquecimento: o porteiro do código`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha o editor de Apps Script aberto pela planilha de exemplo. Acompanhe quem ainda não sabe onde fica o botão Executar e a aba Registro de execução.`,
      atividade: `Digite uma função com uma variável nota valendo 7 e um if/else que mostre "Aprovado" se a nota for maior ou igual a 6, e "Reprovado" caso contrário. Execute. Depois troque o valor para 4 e execute de novo.`,
      gabarito: `function classificarNota() { var nota = 7; if (nota >= 6) { Logger.log("Aprovado"); } else { Logger.log("Reprovado"); } } Com nota 7 o registro mostra Aprovado; com nota 4 mostra Reprovado, porque 4 não é maior nem igual a 6.`,
    },
    {
      titulo: `Andando pela lista com o for`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce que a contagem começa no zero e que notas.length é o tamanho da lista. Se alguém imprimir só uma nota, verifique se o i está aumentando com i = i + 1.`,
      atividade: `Crie uma lista com pelo menos cinco notas. Use um laço for para percorrer a lista e imprimir cada nota, uma por linha, no Registro de execução.`,
      gabarito: `function contarNotas() { var notas = [8, 3, 6, 9, 5]; for (var i = 0; i < notas.length; i = i + 1) { Logger.log(notas[i]); } } O registro mostra 8, 3, 6, 9 e 5, cada uma em uma linha, porque o laço passa por todas as posições da lista.`,
    },
    {
      titulo: `Classificando a turma inteira`,
      tipo: `Desafio individual`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o momento de juntar for e if/else. Circule pela sala. Se o aluno travar, peça que escreva primeiro o for sozinho e só depois coloque o if/else dentro dele.`,
      atividade: `Combine o laço e a condição. Para cada nota da lista, o código deve imprimir a nota seguida de "Aprovado" ou "Reprovado", usando 6 como nota de corte.`,
      gabarito: `function classificarTurma() { var notas = [8, 3, 6, 9, 5]; for (var i = 0; i < notas.length; i = i + 1) { if (notas[i] >= 6) { Logger.log(notas[i] + " - Aprovado"); } else { Logger.log(notas[i] + " - Reprovado"); } } } Saída: 8 Aprovado, 3 Reprovado, 6 Aprovado, 9 Aprovado, 5 Reprovado.`,
    },
    {
      titulo: `Programação em dupla: a faixa de recuperação`,
      tipo: `Atividade em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas e oriente o revezamento: um digita, o outro lê o código em voz alta e confere os sinais. Apresente o else if como um segundo "senão, se". Verifique a ordem das condições.`,
      atividade: `A partir do código da turma, adicionem uma terceira saída: notas de 4 a 5 viram "Recuperação". Notas de 6 ou mais continuam "Aprovado" e abaixo de 4 viram "Reprovado".`,
      gabarito: `function classificarComRecuperacao() { var notas = [8, 3, 6, 5, 4]; for (var i = 0; i < notas.length; i = i + 1) { if (notas[i] >= 6) { Logger.log(notas[i] + " - Aprovado"); } else if (notas[i] >= 4) { Logger.log(notas[i] + " - Recuperação"); } else { Logger.log(notas[i] + " - Reprovado"); } } } Saída: 8 Aprovado, 3 Reprovado, 6 Aprovado, 5 Recuperação, 4 Recuperação.`,
    },
    {
      titulo: `Roda de conversa: onde o robô decide e repete?`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em círculo. Conduza com perguntas abertas e valide cada exemplo. O objetivo é conectar if e for a coisas reais que eles já usam, fixando o conceito sem digitar.`,
      atividade: `Cada aluno cita um exemplo do dia a dia em que um aplicativo ou jogo precisa decidir algo (if) e outro em que precisa repetir uma tarefa (for). Expliquem por quê.`,
      gabarito: `Não há resposta única. Exemplos válidos de decisão: o jogo libera a próxima fase se você tem pontos suficientes; o app mostra "senha incorreta" se a senha não bate. Exemplos válidos de repetição: a rede social carrega um post de cada vez ao rolar a tela; o player toca cada música da lista até o fim. Aceite qualquer exemplo coerente em que apareça uma escolha de verdadeiro ou falso (if) ou uma lista percorrida item por item (for).`,
    },
  ],
};
