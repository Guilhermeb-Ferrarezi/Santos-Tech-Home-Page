import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Anatomia de um script",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a ler um script pronto do Apps Script identificando o que é uma função, o que vem entre chaves e como usar o botão Executar sem medo do código.`,
  descricao: `Na aula anterior, os alunos descobriram que o Apps Script é o robô que mora dentro do Google Planilhas e que ele entende instruções escritas em código. Agora chegou a hora de abrir esse robô e olhar por dentro. Esta aula é como a aula de anatomia da biologia: em vez de decorar o corpo humano, vamos aprender as partes de um script e o nome de cada uma. O segredo é que o aluno não vai escrever código novo hoje, ele vai LER um script que já existe e descobrir que cada pedaço tem um trabalho.

Um script de Apps Script é parecido com uma receita de bolo: tem um nome no começo (a função), tem os passos que ele executa (os comandos entre chaves) e tem o momento de mandar fazer (o botão Executar). Quando o aluno entende que o código é só uma lista organizada de ordens, o medo desaparece. As três peças principais que vamos nomear são: a palavra "function" seguida de um nome, as chaves de abrir e fechar que guardam os comandos dentro, e cada linha de comando que termina com ponto e vírgula.

O exemplo que usaremos é o mais amigável possível: um script que mostra uma mensagem na tela com a função Browser.msgBox ou SpreadsheetApp.getUi().alert. O aluno aperta Executar, autoriza o script e vê uma janelinha pular dizendo "Olá, mundo!". Esse pequeno susto bom é o que prende a atenção. Depois, mudando apenas o texto entre aspas, ele percebe que controla o que o robô fala.

O resultado esperado da aula é que cada aluno consiga apontar na tela e dizer em voz alta: "isto aqui é a função, isto aqui são as chaves, isto aqui é o comando, e este é o botão Executar". Essa leitura consciente é a base para a próxima aula, em que eles finalmente vão escrever o próprio código de verdade. Hoje o foco é entender antes de criar.`,
  materiais: [
    `Computadores (um por aluno) com navegador e uma conta Google já logada, com o Google Planilhas aberto`,
    `O editor do Apps Script acessível pelo menu Extensões, Apps Script (testado antes da aula pelo professor)`,
    `Projetor ou TV para o professor mostrar o editor e ler o script junto com a turma`,
    `Uma planilha de exemplo já criada e compartilhada com a turma, chamada "Anatomia do Script"`,
    `Arquivo de exemplo com o script de mensagem pronto, colado no editor antes da aula (texto: "Olá, mundo!")`,
    `Folha impressa ou slide com um script colorido e legendas apontando função, chaves, comando e Executar`,
    `Conexão com a internet estável para abrir o editor e autorizar a execução do script`,
  ],
  conceitosChave: [
    `Função — bloco de código com nome próprio que junta vários comandos para fazer uma tarefa; começa com a palavra "function".`,
    `Chaves — os símbolos de abrir e fechar que marcam onde a função começa e termina e guardam os comandos lá dentro.`,
    `Comando — uma ordem que o robô executa, escrita em uma linha e quase sempre terminada com ponto e vírgula.`,
    `Botão Executar — o botão de "play" no topo do editor que manda o robô rodar a função escolhida.`,
    `Autorização — a permissão que o Google pede na primeira vez para deixar o script agir na sua conta e planilha.`,
    `Browser.msgBox — comando que faz aparecer uma janelinha com a mensagem que você escreveu entre aspas.`,
    `Aspas — os sinais que envolvem o texto que o robô vai mostrar; tudo que está entre aspas é falado exatamente como está.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. Um script de Apps Script tem três partes que você vai nomear o tempo todo: a função (a linha que começa com "function" e um nome, por exemplo function mostrarMensagem), as chaves (os símbolos { e } que abrem e fecham logo depois do nome), e os comandos (as linhas que ficam entre as chaves, como Browser.msgBox("Olá, mundo!");). O botão Executar fica no topo do editor, com um ícone de triângulo de "play". Antes da aula, abra a planilha de exemplo, vá em Extensões e depois Apps Script, cole o script abaixo, aperte Executar uma vez e clique em todas as permissões pedidas. Assim, na hora da aula, a autorização já estará feita na sua conta e você saberá exatamente o que vai aparecer.

Script de exemplo (use este exato):
function mostrarMensagem() {
  Browser.msgBox("Olá, mundo!");
}

A primeira linha é a função e o nome. As chaves guardam o comando. A linha do meio é o comando que mostra a janelinha. A última chave fecha a função.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte "o que vocês lembram do robô da planilha da aula passada?". Escreva no quadro a palavra "função". Mostre no projetor a planilha e o caminho Extensões, depois Apps Script, para reativar a memória de onde mora o código.

Conteúdo novo guiado (15 min): com o editor no projetor, leia o script em voz alta apontando cada parte. Diga "esta primeira linha é a FUNÇÃO, repare na palavra function e no nome mostrarMensagem". Aponte as chaves e diga "tudo que está entre estas chaves pertence à função". Aponte o comando Browser.msgBox e diga "este é o comando que faz a janelinha aparecer; o texto entre aspas é o que o robô fala". Por fim, mostre o botão Executar no topo e aperte. Como você já autorizou antes, a janelinha "Olá, mundo!" aparece na planilha. Volte ao editor e mostre o painel de execução embaixo dizendo "Execução concluída".

Mão na massa (25 min): cada aluno abre a planilha de exemplo, vai em Extensões e depois Apps Script e encontra o mesmo script. Peça que eles localizem e apontem na própria tela a função, as chaves e o comando. Depois, peça que apertem Executar. Na primeira vez, o Google vai pedir autorização: oriente clicar em Revisar permissões, escolher a conta e clicar em Permitir. Quando a janelinha aparecer, comemore. Em seguida, desafie cada um a trocar apenas o texto entre as aspas pelo próprio nome, salvar com o ícone de disquete e executar de novo.

Desafio e compartilhar (10 min): peça que escrevam uma mensagem engraçada ou um recado para um colega dentro das aspas, executem e mostrem a janelinha para a turma. Termine perguntando "quem consegue dizer onde está a função neste script?".

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que a função é como uma "caixa com etiqueta": a etiqueta é o nome e dentro da caixa estão as tarefas. As chaves são "a tampa que abre e fecha a caixa". Os comandos são "ordens que o robô obedece em fila, de cima para baixo". O botão Executar é "o controle remoto que liga a caixa". Evite palavras técnicas demais; troque "string" por "texto entre aspas" e "método" por "comando". Repita os nomes várias vezes para fixar.

## Erros comuns e como ajudar

Se a janelinha não aparece, normalmente o aluno apertou Executar antes de salvar; peça para clicar no ícone de disquete primeiro. Se aparece um erro vermelho embaixo, geralmente é uma aspa apagada por engano; mostre que o texto precisa começar e terminar com aspas. Se a tela de autorização assusta, explique com calma que é o Google perguntando se ele confia no próprio script, e que basta clicar em Permitir. Se o nome da função foi apagado, o botão Executar fica sem opção; ajude a reescrever function mostrarMensagem antes da primeira chave.`,
  exercicios: [
    {
      titulo: `Caça às partes do script`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno está com a planilha de exemplo aberta e o editor do Apps Script na tela pelo menu Extensões, Apps Script. Caminhe pela sala conferindo se eles apontam as partes certas. Aceite respostas ditas em voz alta ou marcadas com o cursor.`,
      atividade: `Olhe o script da tela e mostre com o cursor: onde está a função, onde estão as chaves de abrir e de fechar, e qual é a linha de comando. Diga em voz alta o nome de cada parte para um colega ao lado.`,
      gabarito: `A função é a linha "function mostrarMensagem()". As chaves são o símbolo { logo depois do nome (abre) e o símbolo } na última linha (fecha). A linha de comando é Browser.msgBox("Olá, mundo!");.`,
    },
    {
      titulo: `Troque a fala do robô`,
      tipo: `Desafio individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre antes onde salvar (ícone de disquete) e onde fica o botão Executar. Lembre que só o texto entre aspas deve mudar; o resto do script fica igual. Se der erro vermelho, peça para conferir se as duas aspas continuam no lugar.`,
      atividade: `No comando Browser.msgBox, apague apenas o texto entre as aspas e escreva o seu próprio nome, por exemplo "Olá, eu sou a Ana!". Salve no ícone de disquete e aperte Executar para ver a janelinha com a sua mensagem.`,
      gabarito: `O script fica assim: function mostrarMensagem() { Browser.msgBox("Olá, eu sou a Ana!"); }. Ao executar, aparece uma janelinha mostrando exatamente o texto escrito entre as aspas. Só o conteúdo entre aspas muda; a função, as chaves e o nome do comando continuam iguais.`,
    },
    {
      titulo: `Quem é quem? (em dupla)`,
      tipo: `Atividade em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Junte os alunos em duplas. Um aponta uma parte do script na tela e o outro precisa dizer o nome correto (função, chaves ou comando). Depois trocam os papéis. Circule confirmando os nomes e corrigindo com gentileza quem confundir chaves com parênteses.`,
      atividade: `Em dupla, um aluno aponta uma parte do script e pergunta "que parte é esta?". O colega responde se é a função, as chaves ou o comando, e explica em uma frase o que aquela parte faz. Depois invertam os papéis e repitam três vezes cada um.`,
      gabarito: `Função: a linha "function mostrarMensagem()", que dá nome e junta os comandos. Chaves: { e }, que marcam o início e o fim da função e guardam os comandos. Comando: Browser.msgBox("Olá, mundo!");, que faz aparecer a janelinha com a mensagem. Cada resposta deve nomear a parte e dizer sua tarefa.`,
    },
    {
      titulo: `Roda de conversa: a receita do robô`,
      tipo: `Roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme um círculo e conduza a comparação entre o script e uma receita de bolo. Faça perguntas abertas e deixe vários alunos falarem. Anote no quadro as comparações boas que surgirem. O objetivo é consolidar os nomes das partes com as próprias palavras deles.`,
      atividade: `Em roda, responda: se o script fosse uma receita de bolo, o que seria a função? E as chaves? E o comando? E o botão Executar? Dê a sua própria comparação e ouça as dos colegas.`,
      gabarito: `Não há resposta única, mas espera-se algo como: a função é o nome da receita no topo; as chaves são o começo e o fim da lista de passos; o comando é cada passo a ser feito; o botão Executar é o momento de levar o bolo ao forno, ou seja, mandar o robô fazer. O importante é que cada aluno ligue a parte do código à sua tarefa.`,
    },
    {
      titulo: `Projeto curto: meu mini script comentado`,
      tipo: `Projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este é o exercício mais completo e fecha a aula. Mostre como escrever um comentário usando duas barras (//) e explique que o que vem depois das barras o robô ignora. Peça que cada aluno personalize a mensagem e adicione três comentários nomeando as partes. Confira a execução de cada um antes de pedir para mostrar à turma.`,
      atividade: `Personalize a mensagem do script com um recado seu e adicione três comentários com // explicando, em cada um, o que é a função, o que são as chaves e o que é o comando. Salve, execute e mostre a janelinha funcionando para a turma.`,
      gabarito: `Um exemplo correto é: function mostrarMensagem() { // esta é a função, ela tem nome e junta os comandos. As chaves abrem aqui e fecham no final, elas guardam os comandos. Browser.msgBox("Bom dia, turma do Santos Tech!"); // este é o comando que mostra a janelinha. } Ao executar, a janelinha aparece com o recado personalizado. Os três comentários devem nomear corretamente função, chaves e comando, e o script deve rodar sem erro.`,
    },
  ],
};
