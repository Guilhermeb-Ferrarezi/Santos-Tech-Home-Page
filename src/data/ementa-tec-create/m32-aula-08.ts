import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Página interativa: finalizar e apresentar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Concluir o entregável do mês — a página interativa — testando cada botão, corrigindo erros pelo console, ajustando detalhes visuais e apresentando o resultado funcionando aos colegas.`,
  descricao: `Esta é a última aula do mês de JavaScript e o momento de fechar com chave de ouro. Ao longo das semanas o aluno aprendeu o que é JavaScript, escreveu seu primeiro código no console, guardou informações em variáveis, criou funções que respondem a eventos, conheceu o DOM e fez a página mudar ao clicar. Na aula anterior ele planejou a própria página interativa. Agora chega a hora de terminar essa página, deixá-la redonda e mostrar para a turma.

Finalizar um projeto é uma habilidade tão importante quanto começá-lo. Muita gente sabe iniciar, mas poucos sabem chegar ao fim com tudo funcionando. Nesta aula o aluno vira testador do próprio trabalho: clica em cada botão, confere se cada ação acontece como esperado e usa o console do navegador para caçar e corrigir os erros. Aprender a ler a mensagem vermelha do console e descobrir o que ela quer dizer é um superpoder que vai acompanhar o aluno em toda a sua vida de programador.

Depois de testar e corrigir, vem o capricho: ajustar pequenos detalhes visuais para a página ficar agradável. Um título mais claro, uma cor que combina, um espaçamento que respira, um texto de botão que faz sentido. São toques finais simples, mas que transformam um exercício técnico em algo de que o aluno se orgulha de mostrar.

O fechamento é a apresentação. Cada aluno mostra a própria página funcionando no projetor e explica, com as próprias palavras, como o JavaScript faz cada ação acontecer: qual evento dispara, qual função responde e o que muda na página. Falar sobre o próprio código consolida o aprendizado de um jeito que nenhuma prova consegue, e ainda treina a comunicação — algo essencial para quem cria tecnologia.`,
  materiais: [
    `Computadores com navegador moderno (Chrome ou Edge) e editor de código (VS Code), um por aluno`,
    `O projeto da página interativa de cada aluno, salvo das aulas anteriores, com os arquivos index.html, style.css e script.js`,
    `Projetor ou TV para cada aluno apresentar a própria página à turma`,
    `Arquivo de exemplo "pagina-interativa-pronta" (HTML + CSS + JavaScript) como referência de uma página finalizada`,
    `Folha impressa "Lista de testes" com uma tabela para o aluno marcar cada botão testado e anotar erros encontrados`,
    `Folha impressa "Roteiro de apresentação" com três perguntas-guia: qual é o evento, qual é a função e o que muda na página`,
    `Quadro branco para anotar os erros mais comuns que aparecerem na sala e como cada um foi resolvido`,
  ],
  conceitosChave: [
    `Testar — clicar em cada botão e usar cada parte da página para conferir se tudo funciona como o esperado.`,
    `Console — a janela do navegador (tecla F12, aba Console) onde o JavaScript mostra mensagens e erros; é onde caçamos os problemas.`,
    `Erro (mensagem vermelha) — aviso que o navegador dá quando algo no código está errado; ele indica a linha e a causa do problema.`,
    `Depurar — o ato de encontrar e corrigir erros no código, lendo as pistas que o console oferece.`,
    `Ajuste visual — pequenas mudanças de cor, texto e espaçamento (no HTML e no CSS) que deixam a página mais clara e bonita.`,
    `Evento — um acontecimento na página, como um clique, que o JavaScript ouve para disparar uma função.`,
    `Apresentação — mostrar a página funcionando e explicar, em voz alta, como o código faz cada ação acontecer.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar JavaScript para conduzir esta aula. Ela não traz conteúdo novo: é uma aula de finalização, teste e apresentação. Seu papel é organizar o tempo, ajudar a ler os erros do console e dar segurança para cada aluno mostrar o trabalho. Antes da aula, abra o arquivo de exemplo "pagina-interativa-pronta" no navegador, clique nos botões e veja a página reagir. Treine abrir o console com a tecla F12 e localizar a aba Console: é ali que a mensagem vermelha aparece quando algo dá errado. Saiba que um erro comum é o nome do botão no HTML não bater com o nome usado no JavaScript — é a primeira coisa a conferir.

## Passo a passo da aula

Aquecimento e revisão (10 min): peça que cada aluno abra o próprio projeto no navegador e clique uma vez em cada botão. No quadro, faça a pergunta: "o que ainda não funciona ou está estranho na sua página?". Anote duas ou três respostas. Relembre, em uma frase, a dupla evento e função: o clique é o evento, e a função é o que responde.

Conteúdo novo guiado (15 min): no projetor, mostre como testar com método usando o exemplo. Abra o console com F12. Provoque um erro de propósito, por exemplo digitando errado o nome de um elemento, e mostre a mensagem vermelha. Explique como ler a linha indicada. Em seguida, demonstre o padrão correto que eles já usam, escrevendo no script.js:

const botao = document.getElementById("meuBotao");
function aoClicar() {
  document.getElementById("mensagem").textContent = "Voce clicou!";
}
botao.addEventListener("click", aoClicar);

Explique linha a linha: a primeira guarda o botão numa variável usando o id que está no HTML; a função aoClicar troca o texto do elemento de id "mensagem"; a última linha diz "quando clicar no botao, chame a função aoClicar". Reforce que o id no HTML precisa ser idêntico ao id no JavaScript, com as mesmas letras maiúsculas e minúsculas.

Mão na massa (25 min): cada aluno usa a folha "Lista de testes" e marca cada botão da própria página, anotando o que funciona e o que não funciona. Com a lista em mãos, abre o console, corrige os erros um a um e testa de novo. Quem terminar os testes faz os ajustes visuais: melhorar o título, escolher uma cor no CSS, dar espaçamento e deixar os textos dos botões claros. Circule pela sala, sente ao lado de quem travar e leia o erro junto com o aluno.

Desafio e compartilhar (10 min): cada aluno usa o "Roteiro de apresentação" e mostra a página no projetor em cerca de um minuto, respondendo às três perguntas: qual é o evento, qual é a função e o que muda na página. Comemore cada apresentação.

## Como explicar de forma clara

Compare testar com experimentar uma roupa antes de sair: a gente confere cada peça para ter certeza de que está tudo certo. Diga que o console é o "detetive" da página: ele mostra a pista (a mensagem vermelha) e até a linha onde está o problema. Explique que erro não é fracasso, é normal e faz parte: todo programador profissional passa o dia inteiro lendo erros e corrigindo. Para a apresentação, ensine a fórmula simples "quando eu clico aqui, esta função roda e isto muda na tela" — assim qualquer aluno consegue explicar o próprio código com clareza.

## Erros comuns e como ajudar

O botão não faz nada: quase sempre o id no HTML está diferente do id usado no JavaScript; confira letra por letra, incluindo maiúsculas. Aparece "null" no console: o JavaScript não encontrou o elemento, normalmente por id errado ou porque o script roda antes da página carregar; confira o id e a ordem das tags. O texto não muda: pode faltar o textContent ou o nome do elemento estar trocado. Esqueceram o ponto e vírgula ou as aspas: mostre a mensagem vermelha e onde fechar. O aluno fica nervoso para apresentar: deixe-o treinar a fala uma vez baixinho com o colega antes de ir ao projetor. Lembre todos de salvar com Ctrl + S e de recarregar a página com F5 a cada correção.`,
  exercicios: [
    {
      titulo: `Lista de testes da minha página`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Entregue a folha "Lista de testes" e mostre como preenchê-la no projetor. O objetivo é o aluno testar com método, não no chute. Reforce que anotar "não funciona" é uma vitória: significa que achou algo para corrigir.`,
      atividade: `Abra a sua página no navegador. Clique em cada botão, um por vez, e na folha marque se ele fez o que devia ou não. Anote ao lado o que aconteceu de errado quando não funcionou.`,
      gabarito: `O aluno preencheu a lista com todos os botões da página, marcando para cada um se funciona ou não, e escreveu uma descrição curta do problema nos que falharam (por exemplo: "o botão de cor não muda nada"). Uma lista completa e honesta vale, mesmo que vários itens estejam marcados como com erro.`,
    },
    {
      titulo: `Lendo o console`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que todos saibam abrir o console com F12 e achar a aba Console. Mostre uma mensagem de erro real no projetor e leia junto: qual é a linha e o que ela diz. Trate o erro como pista, nunca como fracasso.`,
      atividade: `Abra o console com a tecla F12 e clique na aba Console. Recarregue a sua página com F5 e clique nos botões. Veja se aparece alguma mensagem vermelha e anote a linha que o console indica.`,
      gabarito: `O aluno consegue abrir o console (F12, aba Console), recarregar a página e identificar se há mensagens vermelhas, anotando o número da linha apontada. Se a página estiver sem erros, a resposta correta é registrar que o console ficou limpo, sem mensagens vermelhas.`,
    },
    {
      titulo: `Corrigindo o botão que não funciona`,
      tipo: `análise de código`,
      tempo: `10 min`,
      guiaProfessor: `Apresente o código com erro no projetor. Conduza a turma a descobrir que o id no HTML e o id no JavaScript estão diferentes. Esse é o erro mais comum do mês e vale fixar bem.`,
      atividade: `O código abaixo deveria mudar o texto ao clicar, mas o botão não faz nada. Descubra o erro e escreva a versão correta.

HTML:
<button id="botaoOi">Clique</button>
<p id="mensagem"></p>

JavaScript:
const botao = document.getElementById("botaoMensagem");
function aoClicar() {
  document.getElementById("mensagem").textContent = "Oi!";
}
botao.addEventListener("click", aoClicar);`,
      gabarito: `JavaScript corrigido:
const botao = document.getElementById("botaoOi");
function aoClicar() {
  document.getElementById("mensagem").textContent = "Oi!";
}
botao.addEventListener("click", aoClicar);

O erro estava na primeira linha: o JavaScript procurava "botaoMensagem", mas o id do botão no HTML é "botaoOi". Os dois precisam ser idênticos. Depois de corrigir e recarregar com F5, ao clicar o parágrafo passa a mostrar "Oi!".`,
    },
    {
      titulo: `Capricho visual`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Depois que a interatividade funciona, incentive o cuidado com a aparência. Mostre no CSS de exemplo onde mudar a cor de fundo e o espaçamento. Deixe o aluno escolher o estilo, mas peça pelo menos duas melhorias de verdade.`,
      atividade: `Deixe a sua página mais bonita e clara fazendo pelo menos duas melhorias: troque ou ajuste o título principal, escolha uma cor de fundo ou de botão no CSS, dê espaçamento entre os elementos ou deixe os textos dos botões mais claros. Salve e recarregue para conferir.`,
      gabarito: `A página apresenta pelo menos duas mudanças visuais reais em relação à versão anterior — por exemplo, uma nova cor de fundo no body do CSS (background-color) e um título mais claro no HTML, ou espaçamento adicionado com a propriedade margin ou padding. As mudanças aparecem ao recarregar a página com F5 e a interatividade continua funcionando.`,
    },
    {
      titulo: `Apresentando a minha página`,
      tipo: `apresentação`,
      tempo: `15 min`,
      guiaProfessor: `Esta é a entrega final do mês. Use o "Roteiro de apresentação" com as três perguntas. Deixe cada aluno treinar a fala uma vez com o colega antes de ir ao projetor. Garanta um clima de torcida, sem zoação, e comemore cada apresentação. Cronometre cerca de um minuto por aluno.`,
      atividade: `Mostre a sua página funcionando no projetor. Clique em pelo menos um botão ao vivo e explique, em voz alta, respondendo às três perguntas: (1) qual é o evento que dispara a ação; (2) qual é a função que responde; (3) o que muda na página quando isso acontece.`,
      gabarito: `Sucesso quando o aluno mostra a página funcionando, faz pelo menos uma ação ao vivo (um clique que muda algo na tela) e explica com as próprias palavras as três partes: o evento (por exemplo, "quando eu clico no botão"), a função (por exemplo, "a função aoClicar roda") e o que muda ("o texto da mensagem aparece"). Não é preciso usar termos técnicos perfeitos: vale a explicação clara da relação clique, função e mudança na tela.`,
    },
  ],
};
