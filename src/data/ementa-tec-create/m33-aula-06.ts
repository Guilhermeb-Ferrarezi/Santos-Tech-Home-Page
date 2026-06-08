import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Conectando Tudo: Funções e Interatividade",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Organizar o código JavaScript do site em funções reutilizáveis que juntam condições, loops, formulários e manipulação da página, deixando todas as áreas interativas funcionando em conjunto.`,
  descricao: `Esta é a aula em que tudo se encaixa. Nas aulas anteriores o aluno aprendeu a tomar decisões com if/else, a repetir tarefas com loops, a capturar dados de formulários e a fazer a página reagir alterando o conteúdo na tela. Cada um desses recursos vivia mais ou menos sozinho, em pedaços de código espalhados. Hoje o objetivo é juntar esses pedaços dentro de funções: blocos de código com nome, que a gente escreve uma vez e chama quantas vezes quiser. É a diferença entre repetir o mesmo trabalho em vários lugares e ter uma "receita" guardada para usar sempre.

Uma função é como um botão mágico que você mesmo constrói. Você dá um nome a ela, coloca dentro as instruções que quer executar e, quando precisar, é só chamar pelo nome. Funções podem receber informações de fora (os parâmetros) e podem devolver um resultado (com return). Quando o aluno entende isso, o código deixa de ser uma lista gigante e confusa de comandos e vira um conjunto de peças organizadas, cada uma com uma tarefa clara. Isso é exatamente o que profissionais fazem: dividir um problema grande em funções pequenas e fáceis de testar.

Nesta aula o aluno vai pegar a lógica que já escreveu (validar um formulário, mostrar uma mensagem na tela, contar itens de uma lista) e transformá-la em funções com nomes claros como validarNome, mostrarMensagem e calcularTotal. Em seguida, vai ligar essas funções aos eventos da página, de modo que clicar num botão ou enviar um formulário dispare a função certa. O resultado é um site em que as partes conversam entre si: o formulário chama a validação, a validação decide a mensagem, e a mensagem aparece na página.

Reforce que organizar o código em funções não é "frescura" nem perfeccionismo: é o que permite que o site cresça sem virar uma bagunça impossível de consertar. Ao final, cada aluno deve ter pelo menos duas ou três funções reutilizáveis ligadas aos botões e formulários do próprio projeto, deixando as páginas funcionando juntas e prontas para os ajustes finais das próximas aulas.`,
  materiais: [
    `Computadores com editor de código (VS Code) e navegador instalados, com o projeto de site de cada aluno aberto`,
    `Projetor ou TV para o professor demonstrar o código e o resultado no navegador lado a lado`,
    `Arquivo de exemplo "index.html" já com um formulário simples e um botão (plano B para quem está atrasado)`,
    `Arquivo de exemplo "script.js" com trechos soltos de código das aulas anteriores, prontos para virar funções`,
    `Folha impressa com o "molde" de uma função em JavaScript (palavra function, nome, parênteses, chaves)`,
    `Navegador com o console de desenvolvedor (tecla F12) para mostrar mensagens e erros durante os testes`,
  ],
  conceitosChave: [
    `Função — bloco de código com um nome, que guarda instruções para serem executadas quando você chamar esse nome.`,
    `Chamar a função — escrever o nome da função seguido de parênteses para mandar o código dela rodar naquele momento.`,
    `Parâmetro — informação que a função recebe de fora, escrita entre os parênteses, para trabalhar com valores diferentes a cada chamada.`,
    `return — comando que faz a função devolver um resultado para quem a chamou, em vez de só executar e parar.`,
    `Reutilização — usar a mesma função em vários lugares do site, evitando copiar e colar o mesmo código repetido.`,
    `Evento — ação do usuário (como clicar ou enviar um formulário) que pode disparar a chamada de uma função.`,
    `Integração — o momento em que formulário, validação, lógica e página passam a conversar entre si por meio de funções.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma função em JavaScript tem um molde fixo: a palavra function, um nome, parênteses (que podem conter parâmetros) e chaves com o código dentro. Exemplo simples, escreva no projetor: function mostrarMensagem(texto) seguido de chaves, e dentro das chaves uma linha que escreve o texto na página. Para rodar, você "chama" a função: mostrarMensagem("Olá"). Importante para esta idade: separar bem dois momentos, o de criar a função (escrever a receita) e o de chamar a função (usar a receita). Eles costumam achar que escrever a função já faz ela rodar, o que não acontece.

Atenção a um ponto que confunde iniciantes: para mostrar um valor de variável, evite interpolação. Use concatenação com o sinal de mais, assim: "Bem-vindo, " + nome + "!". E para colocar texto na tela, use a propriedade textContent de um elemento, por exemplo saida.textContent = "...". Teste todo o código da aula uma vez antes, com o console aberto (F12), para já conhecer as mensagens de erro.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

Aquecimento (10 min): mostre dois trechos de código que fazem quase a mesma coisa, copiados e colados em lugares diferentes. Pergunte: "E se a gente precisar mudar isso? Vai ter que arrumar em quantos lugares?". Apresente a ideia da função como a solução: escrever uma vez, usar várias.

Conteúdo novo guiado (15 min): no projetor, crie uma função no script.js. Digite linha a linha e explique cada parte:

function mostrarMensagem(texto) {
  var saida = document.getElementById("saida");
  saida.textContent = texto;
}

Explique: function é a palavra que cria; mostrarMensagem é o nome; texto é o parâmetro que entra; as chaves guardam o que ela faz. Agora chame a função em outra linha: mostrarMensagem("Site conectado!"). Salve, recarregue o navegador e mostre o texto aparecendo. Em seguida, crie uma função que decide algo e devolve com return:

function validarNome(nome) {
  if (nome.length < 3) {
    return "Nome muito curto";
  }
  return "Nome aceito";
}

Mostre como usar o que ela devolve: var resultado = validarNome("Ana"); mostrarMensagem(resultado);.

Mão na massa (25 min): cada aluno transforma um trecho solto do próprio projeto em uma função com nome claro (por exemplo validarNome ou mostrarMensagem) e depois chama essa função a partir de um botão. Mostre como ligar ao evento de clique:

var botao = document.getElementById("botao");
botao.addEventListener("click", function () {
  mostrarMensagem("Você clicou!");
});

Circule pela sala conferindo se a função foi chamada (e não só escrita). Quem terminar cria uma segunda função e a liga a outro botão.

Desafio e compartilhar (10 min): proponha que cada aluno crie uma função com parâmetro que monte uma saudação personalizada, usando concatenação: function saudacao(nome) com return "Olá, " + nome + "!". Cada um chama a função com o próprio nome e mostra o resultado para um colega, explicando o que entra (parâmetro) e o que sai (return).

## Como explicar de forma clara (linguagem para a idade)

Diga: "Função é uma receita de bolo com nome. Você escreve a receita uma vez e, quando quer bolo, é só chamar pelo nome, sem reescrever tudo." Para parâmetro: "É o ingrediente que você passa para a receita. A mesma receita faz bolo de chocolate ou de morango, dependendo do que você coloca." Para return: "É o bolo pronto que a receita devolve para você usar." Reforce sempre a diferença entre escrever a função (guardar a receita) e chamar a função (mandar fazer agora). Use o ciclo salvar, recarregar e testar a cada mudança.

## Erros comuns e como ajudar

Escreveu a função mas nada acontece: provavelmente o aluno não chamou a função; mostre que falta a linha com o nome e os parênteses. Esqueceu os parênteses ao chamar: sem eles o JavaScript não executa; confira que está mostrarMensagem() e não só mostrarMensagem. Erro de maiúsculas e minúsculas: getElementById não acha o elemento porque o id no HTML está diferente do usado no código; compare os dois com calma. Nada aparece na tela: o id buscado não existe ou está escrito errado; abra o console (F12) e leia a mensagem em vermelho. Tentou interpolar com chaves: oriente a usar concatenação com mais (+). Peça sempre para salvar e recarregar a cada passo, em vez de mudar várias coisas de uma vez.`,
  exercicios: [
    {
      titulo: `Sua primeira função`,
      tipo: `prática guiada`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe no projetor a criação da função e, principalmente, a linha que a chama. Reforce a diferença entre escrever e chamar. Garanta que cada aluno salve e recarregue o navegador para ver o texto aparecer.`,
      atividade: `No seu script.js, crie uma função chamada mostrarMensagem que recebe um texto e o coloca dentro do elemento de id "saida". Depois chame essa função com a frase "Site conectado!" e veja o texto aparecer na página.`,
      gabarito: `function mostrarMensagem(texto) {
  var saida = document.getElementById("saida");
  saida.textContent = texto;
}

mostrarMensagem("Site conectado!");

A frase aparece na tela porque a função foi chamada. Se nada aparece, em geral o aluno escreveu a função mas esqueceu a linha que a chama.`,
    },
    {
      titulo: `Botão que chama a função`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre como ligar um clique à função usando addEventListener. Confira se o id do botão no HTML é igual ao usado no JavaScript. Reforce que a função só roda quando o usuário clica.`,
      atividade: `Adicione um botão com id "botao" no seu HTML. No JavaScript, faça com que clicar nesse botão chame a função mostrarMensagem com a frase "Você clicou!". Teste clicando no navegador.`,
      gabarito: `var botao = document.getElementById("botao");
botao.addEventListener("click", function () {
  mostrarMensagem("Você clicou!");
});

Ao clicar, a frase "Você clicou!" aparece na página. Se não funcionar, confira se o id "botao" do HTML é exatamente igual ao do código.`,
    },
    {
      titulo: `Função que decide com return`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Ensine a juntar if/else com return dentro da função. Mostre que o return entrega um resultado que pode ser guardado em uma variável e depois exibido. Teste com nomes curtos e longos.`,
      atividade: `Crie uma função chamada validarNome que recebe um nome. Se o nome tiver menos de 3 letras, ela devolve "Nome muito curto"; senão, devolve "Nome aceito". Use essa função e mostre o resultado na tela com a função mostrarMensagem.`,
      gabarito: `function validarNome(nome) {
  if (nome.length < 3) {
    return "Nome muito curto";
  }
  return "Nome aceito";
}

var resultado = validarNome("Ana");
mostrarMensagem(resultado);

Com "Ana" aparece "Nome aceito"; com "Jo" aparece "Nome muito curto". O return entrega o texto, que é guardado em resultado e exibido pela função mostrarMensagem.`,
    },
    {
      titulo: `Parâmetro e concatenação`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Reforce que o parâmetro deixa a mesma função servir para nomes diferentes. Lembre de usar concatenação com mais (+) e nunca chaves de interpolação. Peça que cada dupla teste com os dois nomes.`,
      atividade: `Em dupla, criem uma função chamada saudacao que recebe um nome e devolve a frase "Olá, " seguida do nome e de "!". Cada integrante chama a função com o próprio nome e mostra o resultado na página.`,
      gabarito: `function saudacao(nome) {
  return "Olá, " + nome + "!";
}

mostrarMensagem(saudacao("Ana"));
mostrarMensagem(saudacao("Bruno"));

Com "Ana" devolve "Olá, Ana!" e com "Bruno" devolve "Olá, Bruno!". A mesma função serve para os dois porque o nome entra como parâmetro e o texto é montado com concatenação.`,
    },
    {
      titulo: `Conectando o formulário ao site`,
      tipo: `projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Una tudo: formulário, validação por função e mensagem na tela. Mostre como pegar o valor do campo, chamar validarNome e exibir o retorno. Reforce o uso de preventDefault para a página não recarregar ao enviar. Quem avançar pode usar um loop para listar respostas.`,
      atividade: `No seu projeto, faça o envio do formulário chamar a função validarNome com o que o usuário digitou no campo de id "campoNome" e mostrar o resultado na página com mostrarMensagem. Assim o formulário, a validação e a mensagem ficam conectados.`,
      gabarito: `var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  var nome = document.getElementById("campoNome").value;
  var resultado = validarNome(nome);
  mostrarMensagem(resultado);
});

Ao enviar o formulário, o site pega o texto do campo, chama validarNome e exibe "Nome aceito" ou "Nome muito curto" na tela. O preventDefault impede a página de recarregar, e as três funções passam a trabalhar juntas.`,
    },
  ],
};
