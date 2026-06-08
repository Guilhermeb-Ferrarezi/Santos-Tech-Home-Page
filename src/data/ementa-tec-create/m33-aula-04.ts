import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Respostas ao Usuário: Eventos e Validação",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Fazer o formulário reagir ao clique em enviar, validar os campos com condições e mostrar na tela uma mensagem personalizada de sucesso ou de erro para o usuário.`,
  descricao: `Na aula passada o aluno montou um formulário em HTML com campos de texto e um botão. Agora o formulário vai ganhar vida: quando o usuário clicar em enviar, o JavaScript vai entrar em ação, olhar o que foi digitado e responder na tela. Esse é o momento em que o site deixa de ser apenas uma página bonita e passa a conversar com quem o usa. Tudo gira em torno de uma palavra importante: evento. Um evento é um aviso que o navegador dá quando algo acontece, como um clique ou o envio de um formulário. O nosso trabalho é "escutar" esse aviso e decidir o que fazer.

O evento mais importante desta aula é o submit, que acontece quando o formulário é enviado. Por padrão, ao enviar um formulário o navegador recarrega a página inteira, e isso apaga tudo. Para impedir esse recarregamento e manter o controle nas mãos do nosso código, usamos o comando event.preventDefault(). Com isso, somos nós que decidimos o que mostrar, sem a página piscar nem reiniciar.

Depois de capturar o envio, vem a parte mais útil: a validação. Validar é conferir se o usuário preencheu os campos corretamente antes de aceitar os dados. O nome está vazio? O campo de idade ficou em branco? Com as condições if e else que o aluno já estudou na Aula 1, conseguimos verificar cada situação e tomar uma decisão. Se algo estiver errado, mostramos uma mensagem de erro explicando o problema. Se estiver tudo certo, mostramos uma mensagem de sucesso, muitas vezes personalizada com o próprio nome que a pessoa digitou.

O resultado é um formulário que reage de verdade. O aluno vai ver, com os próprios olhos, o site responder ao que ele escreveu, mudando o texto de uma área de mensagem na hora do clique. É uma das experiências mais satisfatórias da programação para iniciantes, porque o esforço vira resposta visível na mesma hora, e prepara o terreno para a próxima aula, em que o site vai reagir de formas ainda mais ricas.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code recomendado), um por aluno`,
    `Navegador web atualizado (Chrome, Edge ou Firefox) em cada computador`,
    `Projetor ou TV grande no computador do professor para demonstrar o código passo a passo`,
    `Arquivo de exemplo "formulario-base.html" com o formulário da Aula 3 já pronto (campos de nome e idade e um botão de enviar)`,
    `Arquivo de exemplo "formulario-pronto.html" com a validação já funcionando, para o professor mostrar o resultado final`,
    `Folha impressa com o código JavaScript completo da aula para os alunos consultarem enquanto digitam`,
  ],
  conceitosChave: [
    `Evento — aviso que o navegador dá quando algo acontece na página, como um clique ou o envio de um formulário.`,
    `addEventListener — comando que faz o JavaScript "escutar" um evento e executar uma função quando ele acontecer.`,
    `Evento submit — evento disparado quando um formulário é enviado, normalmente pelo clique no botão de enviar.`,
    `preventDefault — comando que impede o comportamento padrão do navegador, como recarregar a página ao enviar o formulário.`,
    `Validação — conferência feita pelo código para garantir que os campos foram preenchidos corretamente antes de aceitar os dados.`,
    `Mensagem de feedback — texto de sucesso ou de erro que o site mostra na tela para responder ao usuário.`,
    `textContent — propriedade usada para trocar o texto que aparece dentro de um elemento da página.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar JavaScript para dar esta aula. O segredo é entender uma sequência simples: o usuário clica em enviar, o nosso código escuta esse clique, confere os campos e troca um texto na tela. Três comandos resolvem quase tudo. O primeiro é addEventListener, que liga o nosso código a um evento. O segundo é event.preventDefault(), que impede a página de recarregar quando o formulário é enviado. O terceiro é textContent, que troca o texto que aparece dentro de um elemento HTML. Abra o arquivo "formulario-base.html" antes da aula e deixe o "formulario-pronto.html" pronto para mostrar no projetor. Importante: o JavaScript fica dentro de uma tag script, e usamos getElementById para pegar cada parte da página pelo seu id. Confirme antes que o formulario-base tem um formulario com id "form", um campo com id "nome", um campo com id "idade" e um paragrafo vazio com id "msg".

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Pergunte o que acontece quando se aperta um botão de "enviar" em um site de verdade. Relembre o if e o else da Aula 1 e o formulário da Aula 3. Mostre o "formulario-pronto.html" no projetor: digite um nome, clique em enviar e veja a mensagem aparecer; depois deixe vazio e mostre o erro.

15 min - Conteúdo novo guiado: No projetor, abra o "formulario-base.html". Dentro da tag script, no final do body, digite linha a linha e explique cada parte:

var form = document.getElementById("form");
var msg = document.getElementById("msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var nome = document.getElementById("nome").value;
  if (nome === "") {
    msg.textContent = "Erro: digite o seu nome!";
  } else {
    msg.textContent = "Bem-vindo, " + nome + "! Cadastro enviado.";
  }
});

Explique: getElementById pega um pedaço da página pelo id; addEventListener escuta o evento submit; preventDefault impede a página de recarregar; .value pega o que foi digitado; o if confere se o nome está vazio; e textContent troca o texto do paragrafo de mensagem. Mostre que juntamos o texto com o nome usando o sinal de mais (+).

25 min - Mão na massa: Cada aluno digita o mesmo código no seu "formulario-base.html", salva e abre no navegador. Circule pela sala. Garanta que cada um teste os dois caminhos: campo vazio (erro) e campo preenchido (sucesso). Quem terminar adiciona uma segunda condição para o campo idade.

10 min - Desafio e compartilhar: Desafie a validar a idade também (não pode estar vazia) e a personalizar mais a mensagem de sucesso. Cada aluno mostra seu formulário reagindo para a turma.

## Como explicar de forma clara (linguagem para a idade)

Compare o evento a uma campainha: "Quando alguém toca, você escuta e decide se abre a porta. O addEventListener é o seu ouvido, e a função é o que você faz depois." Para o preventDefault, diga: "Sem ele, o navegador apaga tudo e recomeça, como apertar F5 sem querer. Nós seguramos isso para mostrar a nossa resposta." Para a validação, use a ideia do segurança da festa: "Antes de deixar entrar, ele confere se a pessoa tem convite. O if é o segurança conferindo o campo." Para o textContent, diga que é como trocar a frase de um cartaz na hora.

## Erros comuns e como ajudar

O erro mais comum é esquecer o event.preventDefault(), e a página recarrega apagando a mensagem; lembre que ela some num piscar de olhos por causa disso. Outro erro frequente é digitar dois iguais em vez de três na comparação, ou trocar maiúsculas e minúsculas em getElementById, que diferencia letras. Muitos esquecem o .value e acabam comparando a caixa inteira em vez do texto digitado. Há quem erre o id, escrevendo "nome" no HTML e "Nome" no JavaScript; reforce que precisa ser idêntico. Por fim, alguns esquecem de salvar o arquivo antes de atualizar o navegador e acham que não funcionou: peça para salvar e recarregar a página.`,
  exercicios: [
    {
      titulo: `Escutando o clique`,
      tipo: `prática no editor`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno consiga ligar um addEventListener ao formulário e mostrar qualquer mensagem ao enviar. O foco é sentir o evento funcionando, sem validação ainda. Confira se o preventDefault está presente para a página não recarregar.`,
      atividade: `No "formulario-base.html", faça o formulário mostrar a frase "Você clicou em enviar!" no paragrafo de mensagem assim que o botão de enviar for clicado. Lembre de impedir a página de recarregar.`,
      gabarito: `var form = document.getElementById("form");
var msg = document.getElementById("msg");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  msg.textContent = "Você clicou em enviar!";
});`,
    },
    {
      titulo: `Nome vazio dá erro`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça para usar if e else conferindo se o campo de nome está vazio. Verifique se o aluno usou .value para pegar o texto digitado e se testou os dois caminhos: vazio mostra erro, preenchido mostra sucesso.`,
      atividade: `Valide o campo de nome: se estiver vazio, mostre "Erro: digite o seu nome!"; se estiver preenchido, mostre "Cadastro enviado com sucesso!". Teste enviando vazio e depois com um nome.`,
      gabarito: `form.addEventListener("submit", function (event) {
  event.preventDefault();
  var nome = document.getElementById("nome").value;
  if (nome === "") {
    msg.textContent = "Erro: digite o seu nome!";
  } else {
    msg.textContent = "Cadastro enviado com sucesso!";
  }
});`,
    },
    {
      titulo: `Mensagem personalizada`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Em duplas, um aluno escreve o código e o outro confere se a mensagem de sucesso inclui o nome digitado, juntando textos com o sinal de mais (+). Depois trocam de papel. Reforce que não se deve usar chaves de interpolação, apenas concatenação com mais.`,
      atividade: `Faça a mensagem de sucesso cumprimentar a pessoa pelo nome, por exemplo: se digitar "Ana", aparece "Bem-vinda, Ana! Seu cadastro foi enviado." Use o sinal de mais para juntar o texto com o nome.`,
      gabarito: `form.addEventListener("submit", function (event) {
  event.preventDefault();
  var nome = document.getElementById("nome").value;
  if (nome === "") {
    msg.textContent = "Erro: digite o seu nome!";
  } else {
    msg.textContent = "Bem-vindo, " + nome + "! Seu cadastro foi enviado.";
  }
});`,
    },
    {
      titulo: `Validando dois campos`,
      tipo: `roda de conversa e prática`,
      tempo: `13 minutos`,
      guiaProfessor: `Comece com uma roda rápida: por que precisamos conferir mais de um campo? Depois cada aluno valida nome e idade. Mostre como usar else if para o segundo campo. Verifique se a ordem das condições faz sentido (primeiro checar nome, depois idade).`,
      atividade: `Valide os dois campos: se o nome estiver vazio, mostre o erro do nome; senão, se a idade estiver vazia, mostre "Erro: digite a sua idade!"; senão, mostre a mensagem de sucesso com o nome. Teste os três casos.`,
      gabarito: `form.addEventListener("submit", function (event) {
  event.preventDefault();
  var nome = document.getElementById("nome").value;
  var idade = document.getElementById("idade").value;
  if (nome === "") {
    msg.textContent = "Erro: digite o seu nome!";
  } else if (idade === "") {
    msg.textContent = "Erro: digite a sua idade!";
  } else {
    msg.textContent = "Bem-vindo, " + nome + "! Cadastro completo.";
  }
});`,
    },
    {
      titulo: `Formulário do nosso site`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Peça o formulário final completo: valida nome e idade, mostra erro claro quando algo falta e mensagem de sucesso personalizada quando tudo está certo, sem recarregar a página. Verifique o preventDefault, as duas validações, a concatenação com o nome e os testes nos três caminhos. Este é o formulário que entrará no site interativo do mês.`,
      atividade: `Finalize o formulário do seu site: ao enviar, ele deve impedir o recarregamento, conferir nome e idade, mostrar a mensagem de erro certa quando faltar algo e uma mensagem de sucesso personalizada com o nome quando tudo estiver preenchido. Salve, teste os três casos e mostre para a turma.`,
      gabarito: `var form = document.getElementById("form");
var msg = document.getElementById("msg");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var nome = document.getElementById("nome").value;
  var idade = document.getElementById("idade").value;
  if (nome === "") {
    msg.textContent = "Erro: digite o seu nome!";
  } else if (idade === "") {
    msg.textContent = "Erro: digite a sua idade!";
  } else {
    msg.textContent = "Bem-vindo, " + nome + "! Você tem " + idade + " anos. Cadastro enviado.";
  }
});`,
    },
  ],
};
