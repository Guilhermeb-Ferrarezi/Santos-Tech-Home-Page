import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Planejando a página interativa",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Iniciar a construção do entregável do mês, escolhendo uma ideia de página interativa e montando a base de HTML e CSS para receber as variáveis, funções e eventos aprendidos no mês.`,
  descricao: `Chegou a hora mais esperada do mês: o aluno deixa de seguir exercícios prontos e começa a criar a própria página interativa. Tudo o que ele viu nas últimas semanas — o console, o alert, as variáveis, as funções, os eventos e o DOM — agora vira ferramenta de verdade para um projeto autoral. Esta aula é o ponto de virada entre aprender peças soltas e juntar essas peças num produto que tem cara de gente.

O coração desta aula é o planejamento. Antes de escrever código, o aluno escolhe uma entre quatro ideias possíveis: um quiz com perguntas e respostas, um contador que sobe ou desce ao clicar, um gerador de frases aleatórias ou um joguinho simples (como adivinhar um número). Cada ideia usa exatamente os mesmos conceitos do mês, então qualquer escolha é válida. O importante é o aluno decidir cedo, desenhar a página no papel e só então abrir o editor.

Depois de escolher, o trabalho é montar a base: a estrutura em HTML (títulos, botões, parágrafos e áreas que vão mudar) e o visual em CSS (cores, fontes, espaçamento). Nesta aula o JavaScript entra de leve — o aluno cria o arquivo, conecta ao HTML e prepara as primeiras variáveis e funções vazias que serão preenchidas na aula 8. A ideia é sair daqui com o esqueleto pronto e funcionando, mesmo que ainda não faça muita coisa.

Como professor, o seu papel hoje é menos "ensinar conteúdo novo" e mais "guiar decisões". Ajude cada aluno a escolher um projeto do tamanho certo: nem simples demais (sem graça), nem ambicioso demais (impossível de terminar em duas aulas). Um bom planejamento agora evita frustração na aula final, quando o objetivo será apenas finalizar e apresentar.`,
  materiais: [
    `Computadores com editor de código (VS Code) e navegador instalados, um por aluno`,
    `Projetor para o professor demonstrar a montagem da base no telão`,
    `Folhas de rascunho e canetas para o aluno desenhar a página antes de programar`,
    `Arquivo de exemplo "quiz-base.html" com HTML e CSS prontos e o JavaScript ainda vazio, para consulta`,
    `Cartão impresso com as 4 ideias de projeto (quiz, contador, gerador de frases, jogo simples) e o que cada uma precisa`,
    `Revisão impressa de uma página com a lista de variáveis, funções e eventos vistos no mês`,
  ],
  conceitosChave: [
    `Planejamento — desenhar e decidir como a página vai funcionar antes de escrever o código, evitando retrabalho.`,
    `Entregável — o projeto final do mês; aqui, uma página interativa que o aluno cria do zero.`,
    `Escopo — o tamanho do projeto; escolher algo que dê para terminar no tempo disponível.`,
    `Estrutura (HTML) — o esqueleto da página: títulos, botões, parágrafos e áreas que vão mudar.`,
    `Estilo (CSS) — a aparência da página: cores, fontes, tamanhos e espaçamentos.`,
    `Esqueleto funcional — uma versão inicial da página que já abre no navegador, mesmo que ainda faça pouca coisa.`,
    `Conectar o JavaScript — usar a tag script para ligar o arquivo de código à página HTML.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de planejamento e montagem da base, não de conteúdo novo de JavaScript. O aluno já viu variáveis, funções, eventos e DOM nas aulas anteriores; hoje ele junta tudo num projeto próprio. Você precisa dominar três coisas simples: criar um arquivo HTML com botões e áreas de texto, ligar um arquivo JavaScript com a tag script e entender que o projeto continuará na aula 8. Não tente terminar a página hoje — a meta é sair com o esqueleto pronto. Antes da aula, abra o exemplo "quiz-base.html" e veja como o HTML, o CSS e o script vazio convivem no mesmo arquivo.

## Passo a passo da aula

Aquecimento e revisão (10 min): no projetor, relembre rapidamente as peças do mês. Pergunte: "como a gente pega um botão pelo id?" (document.getElementById) e "como a gente faz algo acontecer ao clicar?" (addEventListener). Mostre o cartão com as 4 ideias de projeto e explique cada uma em uma frase.

Conteúdo novo guiado (15 min): demonstre como nasce um projeto. Peça que TODOS escolham uma ideia agora e desenhem no papel. Em seguida, no projetor, monte ao vivo a base de um contador. Digite o HTML linha a linha:

<h1>Meu Contador</h1>
<p id="numero">0</p>
<button id="mais">Somar 1</button>
<button id="menos">Tirar 1</button>
<script src="script.js"></script>

Explique cada parte: o h1 é o título; o p com id="numero" é a área que vai mudar; cada button é um botão clicável; a tag script liga o arquivo de código. Depois, crie o script.js com as peças vazias, apenas declaradas:

var contador = 0;
function somar() {
  contador = contador + 1;
  document.getElementById("numero").innerText = contador;
}

Diga que na aula 8 eles vão completar e conectar os eventos. Hoje basta deixar pronto e testar abrindo no navegador.

Mão na massa (25 min): cada aluno monta a base do próprio projeto. Circule pela sala ajudando a escolher o escopo certo e a escrever o HTML. Confira três coisas em cada máquina: a página abre no navegador, existe um botão e existe uma área com id que vai mudar. Quem montar rápido pode adicionar CSS (cor de fundo, fonte maior, botão colorido).

Desafio e compartilhar (10 min): cada aluno escreve em uma frase o que a página dele vai fazer quando estiver pronta e mostra o esqueleto para um colega ao lado. Dois ou três voluntários apresentam no projetor o que já têm.

## Como explicar de forma clara

Use a ideia de "planta da casa": ninguém constrói uma casa sem desenhar antes onde ficam as portas e janelas; programar é igual. Diga que o HTML é "onde ficam as coisas", o CSS é "como elas parecem" e o JavaScript é "o que acontece quando a gente mexe". Reforce que ter o esqueleto pronto, mesmo simples, já é uma vitória: "é como ter o palco montado antes do show". Ao falar de escopo, use a comparação do prato no rodízio: melhor pegar pouco e voltar do que encher o prato e não dar conta.

## Erros comuns e como ajudar

O aluno escolhe algo grande demais: ajude a cortar. Um quiz de 3 perguntas é melhor do que um de 20 que nunca fica pronto. A página abre em branco: quase sempre o arquivo foi salvo com extensão errada ou o aluno abriu o arquivo do editor em vez do navegador; peça para salvar como .html e dar duplo clique. O botão não tem id: lembre que sem id o JavaScript não acha o elemento depois. A tag script no lugar errado: ela deve ficar no fim, antes de fechar o body, senão o código roda antes da página existir. Por fim, o aluno quer programar tudo hoje: segure o ritmo e diga que a aula 8 é exatamente para isso. Lembre todos de salvar o projeto numa pasta com o nome dele.`,
  exercicios: [
    {
      titulo: `Escolhendo o meu projeto`,
      tipo: `Planejamento no papel`,
      tempo: `6 min`,
      guiaProfessor: `Não deixe ninguém pular esta etapa para "ir logo programar". Passe nas mesas e confirme que cada aluno escolheu UMA ideia e desenhou a tela. Ajude quem está indeciso oferecendo a opção mais simples (o contador).`,
      atividade: `Escolha uma ideia entre quiz, contador, gerador de frases ou jogo simples. No papel, desenhe como a página vai parecer (onde ficam o título, os botões e a área que muda) e escreva em uma frase o que ela fará.`,
      gabarito: `Está correto quando o aluno tem no papel: a ideia escolhida, um desenho com pelo menos um título, um botão e uma área que muda, e uma frase clara como "Ao clicar em Somar, o número aumenta de 1 em 1". Projetos grandes demais devem ser reduzidos com a ajuda do professor.`,
    },
    {
      titulo: `Montando o esqueleto em HTML`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Conduza no projetor enquanto os alunos repetem com o próprio projeto. Insista nos id, pois eles serão usados na aula 8. Confira que cada página abre no navegador antes de seguir.`,
      atividade: `Crie um arquivo chamado index.html. Coloque um título com a tag h1, pelo menos um botão com um id e uma área (um p ou uma div) com um id que vai mudar depois. Salve e abra no navegador para conferir.`,
      gabarito: `Solução de exemplo (contador):

<h1>Meu Contador</h1>
<p id="numero">0</p>
<button id="mais">Somar 1</button>
<button id="menos">Tirar 1</button>

Correto quando a página abre no navegador mostrando o título, o número e os botões, e cada botão e a área de texto têm um id.`,
    },
    {
      titulo: `Dando estilo com CSS`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Aqui o objetivo é o aluno deixar a página com a cara dele, sem perder tempo demais. Lembre que basta um bloco style dentro do head. Mostre uma ou duas propriedades e deixe-os experimentar.`,
      atividade: `Adicione estilo à sua página: mude a cor de fundo, aumente o tamanho da fonte do número ou do título e dê uma cor aos botões. Use um bloco style dentro do head.`,
      gabarito: `Solução de exemplo:

<style>
  body { background-color: lightyellow; text-align: center; }
  h1 { color: darkblue; }
  p { font-size: 48px; }
  button { background-color: lightgreen; padding: 10px; }
</style>

Correto quando, ao recarregar a página, dá para ver pelo menos três mudanças visuais (fundo, fonte e botões), aplicadas por regras de CSS no bloco style.`,
    },
    {
      titulo: `Conectando o JavaScript`,
      tipo: `Desafio`,
      tempo: `9 min`,
      guiaProfessor: `Este é o passo que mais confunde: a ordem da tag script e o nome do arquivo. Mostre que script.js precisa estar na mesma pasta e que a tag vai no fim do body. Para testar a ligação, use um alert simples.`,
      atividade: `Crie um arquivo chamado script.js na mesma pasta da página. Ligue-o ao HTML com a tag script antes de fechar o body. Para testar se a ligação funcionou, escreva no script.js a linha que mostra um alerta ao abrir a página.`,
      gabarito: `No HTML, antes de fechar o body:

<script src="script.js"></script>

No arquivo script.js:

alert("JavaScript conectado!");

Correto quando, ao abrir a página, aparece a caixa de alerta. Se nada aparece, o nome do arquivo está errado ou a tag script não está ligada.`,
    },
    {
      titulo: `Preparando variáveis e funções vazias`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Esta é a entrega da aula: o esqueleto pronto para a aula 8. Explique que as funções podem ficar quase vazias hoje; o importante é declarar o que o projeto vai usar. Não deixe o aluno tentar terminar tudo — segure o ritmo.`,
      atividade: `No seu script.js, declare as variáveis que o seu projeto vai precisar (por exemplo, o número do contador ou a lista de perguntas) e crie pelo menos uma função com o nome da ação principal (somar, sortear, conferir). Dentro dela, faça a área da página mostrar um valor usando getElementById e innerText.`,
      gabarito: `Solução de exemplo (contador):

var contador = 0;

function somar() {
  contador = contador + 1;
  document.getElementById("numero").innerText = contador;
}

Concluído quando o aluno entrega: a página abre no navegador com estilo, o script.js está ligado e contém pelo menos uma variável declarada e uma função com nome de ação que escreve um valor numa área com id. O projeto está salvo numa pasta com o nome do aluno, pronto para a aula 8.`,
    },
  ],
};
