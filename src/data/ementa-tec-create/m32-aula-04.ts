import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Funções e eventos: código que responde",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar uma função em JavaScript e conectá-la a um botão com addEventListener, fazendo a página executar uma ação quando o usuário clica.`,
  descricao: `Até agora os alunos escreveram código que roda de cima para baixo, uma vez só, assim que a página carrega. Nesta aula damos um salto importante: o código vai passar a esperar o usuário e só agir quando ele fizer algo, como clicar num botão. Essa é a base de qualquer página interativa, e é o que torna um site diferente de uma folha de papel.

Para isso, juntamos duas ideias poderosas. A primeira é a função: um bloco de código com nome, que guardamos para usar depois, quantas vezes quisermos. Em vez de repetir as mesmas linhas várias vezes, escrevemos a receita uma vez e a "chamamos" pelo nome. A segunda ideia é o evento: um acontecimento na página, como um clique, um toque ou uma tecla pressionada. Quando o evento acontece, o navegador avisa o nosso código.

A ponte entre os dois é o addEventListener. Pense nele como um sensor que o aluno cola num botão: ele fica observando e, no instante em que o clique acontece, dispara a função que combinamos. O resultado é mágico para a idade: o aluno clica e a página responde na hora, sem recarregar nada. Esse retorno imediato é muito motivador e prepara o terreno para as próximas aulas, quando vamos manipular o DOM de verdade.

Nesta aula o foco é a mecânica de "ligar" uma função a um evento. Ainda não vamos mudar muito a aparência da página; vamos provar que o clique realmente chama o nosso código usando alert e mensagens no console. Dominar esse padrão (declarar função, selecionar o botão, registrar o evento) é a peça que faltava para o entregável do mês: uma página que reage ao usuário.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code) e navegador moderno (Chrome ou Edge), um por aluno`,
    `Projetor ou TV para o professor mostrar o código e o resultado ao vivo`,
    `Arquivo de exemplo aula04-inicio.html já com um botão pronto na página`,
    `Arquivo de exemplo aula04-pronto.html com a solução final, para conferência`,
    `Quadro branco ou flip chart para desenhar a ideia de função e de evento`,
    `Folha impressa com o "mapa dos 3 passos": declarar função, selecionar botão, registrar evento`,
  ],
  conceitosChave: [
    `Função — bloco de código com nome, guardado para ser usado (chamado) quantas vezes quisermos.`,
    `Chamar uma função — executar o código dela escrevendo o nome dela seguido de parênteses.`,
    `Evento — algo que acontece na página, como um clique, uma tecla ou o carregamento.`,
    `addEventListener — comando que liga uma função a um evento; quando o evento ocorre, a função roda.`,
    `Clique (click) — o evento mais comum; acontece quando o usuário pressiona um botão ou elemento.`,
    `getElementById — comando que encontra um elemento do HTML pelo seu id para o JavaScript usar.`,
    `Função de resposta (callback) — a função que entregamos ao addEventListener para ser executada quando o evento dispara.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma função é uma "receita guardada". Escrevemos uma vez e usamos quando quiser. A forma básica é: a palavra function, um nome, parênteses e, entre chaves, o código que ela executa. Nada acontece só por declarar a função; ela precisa ser chamada. Chamar é escrever o nome dela com parênteses, assim: saudacao().

Um evento é um acontecimento que o navegador percebe. O clique é o mais comum. Para reagir a um evento, usamos addEventListener, que precisa de duas coisas: o nome do evento entre aspas (por exemplo "click") e a função que deve rodar quando ele acontecer. Antes disso, precisamos pegar o botão no JavaScript com document.getElementById, usando o mesmo id que está no HTML. O padrão da aula é sempre o mesmo: declarar a função, selecionar o botão, registrar o evento.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min). Retome a aula anterior com uma pergunta: "o que é uma variável?". Em seguida proponha um teatro: você é o "botão" e um aluno é a "função". Quando você bate palma (o clique), o aluno levanta e diz uma frase combinada. Repita batendo palma de novo: a mesma função roda outra vez. Conecte isso ao que virá no código.

2. Conteúdo novo guiado (15 min). Abra o arquivo aula04-inicio.html, que já tem um botão. No projetor, escreva o JavaScript junto com a turma, explicando cada linha:

   function mostrarMensagem() {
     alert("Você clicou no botao!");
   }

   var botao = document.getElementById("meuBotao");
   botao.addEventListener("click", mostrarMensagem);

   Explique: a primeira parte cria a receita chamada mostrarMensagem. A linha do getElementById guarda o botão numa variável. A última linha cola o sensor no botão: quando houver "click", o navegador chama mostrarMensagem. Mostre que passamos o nome da função SEM parênteses no addEventListener, porque não queremos rodar agora, e sim quando o clique acontecer. Salve, recarregue e clique para ver o alerta.

3. Mão na massa (25 min). Cada aluno reproduz o exemplo no seu computador. Depois, peça que troquem o texto do alert por uma mensagem própria. Em seguida, desafie-os a adicionar um console.log dentro da função para ver a mensagem aparecer também no Console (F12). Quem terminar cria um segundo botão com um segundo id e uma segunda função.

4. Desafio e compartilhar (10 min). Lance o desafio: criar um botão "Contar" que, a cada clique, mostre no console uma frase como "Cliquei!". Peça a 2 ou 3 alunos que mostrem suas páginas no projetor e cliquem ao vivo para a turma.

## Como explicar de forma clara (linguagem para a idade)

Compare a função a um botão de videogame: o golpe especial já está programado; você só aperta o botão para executá-lo. Diga que addEventListener é como contratar um vigia para o botão: ele fica de olho e, no segundo em que alguém clica, corre para chamar a sua função. Use a frase-âncora "o clique chama a função". Reforce a regra de ouro: passamos o nome da função sem os parênteses, porque parênteses significam "rode agora", e nós queremos "rode quando clicar".

## Erros comuns e como ajudar

O id do HTML diferente do usado no getElementById: o botão não funciona e o console mostra erro de null. Peça para comparar letra por letra. Escrever os parênteses na função dentro do addEventListener faz a função rodar na hora errada, ao carregar a página; tire os parênteses. Esquecer as chaves ou o ponto e vírgula gera erro de sintaxe; ensine a ler a mensagem do console, que indica a linha. Por fim, alguns esquecem de salvar e recarregar; crie o hábito de salvar, atualizar e clicar.`,
  exercicios: [
    {
      titulo: `Caça aos parênteses`,
      tipo: `Roda de conversa / análise de código`,
      tempo: `7 min`,
      guiaProfessor: `Mostre os dois trechos no projetor e pergunte à turma qual está certo e por quê. O objetivo é fixar a regra: dentro do addEventListener o nome da função vai SEM parênteses, porque parênteses significam rodar agora.`,
      atividade: `Olhe os dois trechos abaixo. Qual deles faz a função rodar SÓ quando o usuário clicar? Explique a diferença.

Trecho A:
botao.addEventListener("click", mostrarMensagem);

Trecho B:
botao.addEventListener("click", mostrarMensagem());`,
      gabarito: `O trecho A está correto. Em A, passamos o nome da função sem parênteses, então o navegador guarda a função e só a executa quando o clique acontece. Em B, os parênteses fazem a função rodar imediatamente, no momento em que a página carrega, e não no clique. Por isso B é o erro mais comum desta aula.`,
    },
    {
      titulo: `Minha primeira função`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Peça que escrevam apenas a função e a chamem uma vez, sem evento ainda, para isolar o conceito de declarar e chamar. Confira se o alerta aparece ao recarregar a página.`,
      atividade: `No seu arquivo, crie uma função chamada darOla que mostre um alerta com a frase "Ola, turma Create!". Depois, chame essa função uma vez para ver o alerta aparecer ao recarregar a página.`,
      gabarito: `function darOla() {
  alert("Ola, turma Create!");
}

darOla();

Ao salvar e recarregar a página, o alerta com "Ola, turma Create!" deve aparecer, porque a função foi declarada e depois chamada.`,
    },
    {
      titulo: `Ligando o botão`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Agora juntamos função, getElementById e addEventListener. Garanta que o id do botão no HTML é exatamente o mesmo usado no JavaScript. Peça que cliquem para testar.`,
      atividade: `O HTML já tem este botão:

<button id="meuBotao">Clique aqui</button>

Escreva o JavaScript que, ao clicar nesse botão, mostre um alerta com a frase "Funcionou!".`,
      gabarito: `function avisar() {
  alert("Funcionou!");
}

var botao = document.getElementById("meuBotao");
botao.addEventListener("click", avisar);

Ao clicar no botão, o alerta "Funcionou!" deve aparecer. O id "meuBotao" do HTML precisa ser idêntico ao usado no getElementById.`,
    },
    {
      titulo: `Mensagem no console`,
      tipo: `Prática no computador / desafio`,
      tempo: `10 min`,
      guiaProfessor: `Aqui o aluno coloca duas ações dentro da mesma função: um alert e um console.log. Mostre como abrir o Console com F12 para ver a mensagem. Reforce que a função pode ter várias linhas.`,
      atividade: `Crie um botão de id "botaoLog". Ao clicar, a sua função deve fazer DUAS coisas: mostrar um alerta com "Cliquei!" e também escrever no console a frase "O botao foi clicado". Abra o Console (F12) e confira.`,
      gabarito: `HTML:
<button id="botaoLog">Clicar</button>

JavaScript:
function registrarClique() {
  alert("Cliquei!");
  console.log("O botao foi clicado");
}

var botao = document.getElementById("botaoLog");
botao.addEventListener("click", registrarClique);

A cada clique, aparece o alerta "Cliquei!" e a frase "O botao foi clicado" surge no Console (F12).`,
    },
    {
      titulo: `Dois botões, duas ações`,
      tipo: `Desafio no computador`,
      tempo: `12 min`,
      guiaProfessor: `Desafio de fechamento. O aluno cria dois botões com ids diferentes, duas funções diferentes e dois addEventListener. Verifique se cada botão chama a sua própria função. Peça para apresentar no projetor.`,
      atividade: `Crie DOIS botões na página: um "Bom dia" (id "btnDia") e um "Boa noite" (id "btnNoite"). Cada um deve chamar a sua própria função: ao clicar em "Bom dia", aparece o alerta "Bom dia!"; ao clicar em "Boa noite", aparece o alerta "Boa noite!".`,
      gabarito: `HTML:
<button id="btnDia">Bom dia</button>
<button id="btnNoite">Boa noite</button>

JavaScript:
function bomDia() {
  alert("Bom dia!");
}

function boaNoite() {
  alert("Boa noite!");
}

var botaoDia = document.getElementById("btnDia");
botaoDia.addEventListener("click", bomDia);

var botaoNoite = document.getElementById("btnNoite");
botaoNoite.addEventListener("click", boaNoite);

Cada botão dispara apenas a sua função: "btnDia" mostra "Bom dia!" e "btnNoite" mostra "Boa noite!". É esperado que o aluno tenha duas funções, dois getElementById e dois addEventListener.`,
    },
  ],
};
