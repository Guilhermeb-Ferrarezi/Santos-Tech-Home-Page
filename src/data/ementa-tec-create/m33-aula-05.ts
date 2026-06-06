import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Site que Reage: Manipulando a Página",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Fazer o site reagir ao clique do usuário, usando JavaScript para selecionar elementos da página e mudar seus textos, suas cores e a visibilidade de seções com o DOM.`,
  descricao: `Nesta aula o site deixa de ser um cartaz parado e vira algo vivo. Até agora o aluno escreveu HTML para a estrutura, CSS para a aparência e começou a usar JavaScript para guardar dados e tomar decisões. Hoje ele descobre a ponte que liga o JavaScript à página de verdade: o DOM. A sigla vem de Document Object Model, mas a ideia é simples: o navegador transforma cada pedaço do HTML em um objeto que o JavaScript pode pegar e modificar enquanto o site está aberto, sem recarregar nada.

O coração da aula são três poderes novos. O primeiro é selecionar um elemento, ou seja, apontar para um pedaço da página pelo seu id usando document.getElementById. O segundo é mudar o conteúdo desse elemento com textContent, trocando o texto que aparece na tela. O terceiro é mudar a aparência, seja direto pelo style (por exemplo a cor de fundo) seja adicionando e removendo classes de CSS com o classList. Com esses três poderes o aluno já consegue criar botões que mudam cores, trocam mensagens e mostram ou escondem partes do site.

A grande novidade de comportamento é o evento de clique. O aluno aprende a dizer ao botão: "quando alguém te clicar, execute esta função". Isso se faz com addEventListener, ligando um botão a um pedaço de código. É a primeira vez no mês que o computador espera o usuário agir e só então responde. Essa troca entre ação do usuário e resposta da página é o que transforma uma página comum em um site interativo.

Ao final, cada aluno terá adicionado ao seu projeto do mês botões que realmente fazem algo: um que troca a cor do fundo, um que muda um título e um que mostra ou esconde uma seção inteira. É um avanço enorme de motivação, porque o aluno vê o próprio código mexendo na tela na hora. Esta aula prepara o terreno para a Aula 6, em que tudo será organizado em funções reaproveitáveis.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code) e um navegador moderno (Chrome ou Edge), um por aluno`,
    `Projetor ou TV para o professor mostrar o código e o resultado lado a lado`,
    `Arquivo de exemplo "site-reage-modelo.html" com os botões interativos já funcionando, para inspiração`,
    `Arquivo inicial "pagina-inicio.html" com a estrutura básica pronta (um título, um parágrafo e uma seção), para o aluno só adicionar os botões`,
    `Extensão Live Server no VS Code (ou o recurso de abrir o arquivo no navegador) para ver as mudanças rápido`,
    `Folha impressa de apoio com os três comandos do dia: getElementById, textContent e classList, com um exemplo curto de cada`,
    `Navegador com o Console aberto (tecla F12) para mostrar mensagens de erro quando algo não funciona`,
  ],
  conceitosChave: [
    `DOM — o mapa da página que o navegador cria; cada elemento do HTML vira um objeto que o JavaScript pode pegar e mudar ao vivo.`,
    `getElementById — comando que encontra na página o elemento que tem um id específico, para o JavaScript poder mexer nele.`,
    `id — apelido único dado a um elemento no HTML; serve para o JavaScript saber exatamente qual pedaço da página alterar.`,
    `textContent — propriedade que lê ou troca o texto que aparece dentro de um elemento da página.`,
    `style — propriedade que muda a aparência de um elemento direto pelo JavaScript, como a cor de fundo ou a cor da letra.`,
    `classList — lista de classes de CSS de um elemento; com add, remove e toggle dá para ligar e desligar estilos prontos.`,
    `addEventListener — comando que liga um elemento a uma ação; ele fica "escutando" o clique e executa um código quando ele acontece.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar JavaScript. A ideia central é uma só: o JavaScript consegue "pegar" um pedaço da página e mudá-lo. Para isso, todo elemento que o aluno quiser alterar precisa de um id no HTML, por exemplo um título escrito assim: abre tag h1 com id igual a "titulo", o texto, fecha a tag. No JavaScript, a gente guarda esse elemento numa variável com document.getElementById("titulo"). Depois mexe nele de três formas: o texto com .textContent, a cor direto com .style.backgroundColor, e os estilos prontos com .classList.add ou .classList.toggle. Por fim, ligamos um botão a uma ação com .addEventListener("click", nomeDaFuncao). Antes da aula, abra o arquivo "site-reage-modelo.html" no navegador, clique nos botões e veja a cor e o texto mudando. Tenha o Console aberto (F12) para mostrar onde aparecem os erros. Combine com a turma que o JavaScript fica no final do HTML, dentro de uma tag script, para que ele rode depois que a página já existe.

## Passo a passo da aula

Aquecimento e revisão (10 min): peça que abram o arquivo "pagina-inicio.html". Relembre a Aula 4 perguntando: "o que é um evento?" Conduza até a resposta: é algo que o usuário faz, como clicar. Mostre o modelo pronto no projetor e clique nos botões para criar curiosidade.

Conteúdo novo guiado (15 min): no projetor, no HTML, dê um id ao título e crie um botão: abre tag button com id igual a "btnTexto", escreva Trocar título, feche a tag. No final do body, abra uma tag script e digite, linha a linha, explicando cada parte. Linha 1: var titulo = document.getElementById("titulo"); isso guarda o título numa variável. Linha 2: var botao = document.getElementById("btnTexto"); guarda o botão. Linha 3: function trocar() abre chave; dentro escreva titulo.textContent = "Site interativo!"; e feche a chave; essa função muda o texto. Linha 4: botao.addEventListener("click", trocar); isso liga o clique do botão à função. Salve e clique no botão no navegador. Depois mostre a cor: crie outro botão "btnCor" e uma função que faça document.body.style.backgroundColor = "lightblue";.

Mão na massa (25 min): roteiro na lousa: 1) dar id ao título e a uma seção; 2) criar três botões (trocar texto, trocar cor, mostrar/esconder); 3) escrever uma função para cada; 4) ligar cada botão com addEventListener; 5) para esconder, usar a classList com uma classe de CSS chamada escondido que tem display none, e trocar com .classList.toggle("escondido"); 6) salvar e testar cada botão. Circule conferindo os ids e se o script está no final do body.

Desafio e compartilhar (10 min): proponha um quarto botão que troque a cor do título (titulo.style.color) e mude o texto ao mesmo tempo. Dois ou três alunos mostram o site reagindo no projetor.

## Como explicar de forma clara

Use a imagem de um controle remoto: o botão na página é o controle e o JavaScript é o fio que liga o controle à televisão (o elemento). Diga que o id é como o nome de cada aluno na chamada: sem nome, o professor não sabe quem chamar; sem id, o JavaScript não sabe qual elemento pegar. Explique addEventListener como "deixar o botão de ouvido em pé esperando o clique". Para o toggle, compare com um interruptor de luz: aperta e acende, aperta de novo e apaga. Repita a frase guia: "primeiro eu pego o elemento, depois eu mudo o elemento".

## Erros comuns e como ajudar

O erro mais comum é o script vir antes do elemento no HTML; aí o getElementById devolve nulo e nada funciona. Mostre que o script deve ficar no final do body. Outro clássico é id escrito diferente no HTML e no JavaScript (maiúscula trocada, acento); peça para comparar letra por letra. Muitos esquecem as aspas no texto ou no nome do id; aponte que texto sempre fica entre aspas. Tem quem passe a função com parênteses no addEventListener (escreve trocar() em vez de trocar) e ela dispara sozinha na hora errada; explique que ali vai só o nome, sem parênteses. Por fim, alguns esquecem de criar a classe escondido no CSS e o toggle não some com nada; confira o CSS junto. Lembre sempre do Console (F12) para ler a mensagem de erro em vermelho.`,
  exercicios: [
    {
      titulo: `Dando nome aos elementos (id)`,
      tipo: `prática guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno abriu o arquivo "pagina-inicio.html". O foco é só colocar ids corretos, ainda sem JavaScript. Confira a grafia exata dos ids e ajude quem confunde aspas.`,
      atividade: `No seu HTML, dê um id ao título principal escrevendo id="titulo" dentro da tag h1, e um id ao parágrafo escrevendo id="paragrafo" dentro da tag p. Salve o arquivo e abra no navegador para confirmar que a página continua igual e sem erros no Console (F12).`,
      gabarito: `O HTML fica com a tag de título assim: abre h1 com id igual a "titulo", o texto do título, fecha h1. E o parágrafo assim: abre p com id igual a "paragrafo", o texto, fecha p. A página aparece normal e o Console (F12) não mostra erros em vermelho. Os ids estão escritos exatamente como pedido, entre aspas.`,
    },
    {
      titulo: `Botão que troca o texto`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Confira que o script está no final do body. Reforce que no addEventListener vai só o nome da função, sem parênteses. Ajude a comparar o id do HTML com o usado no getElementById.`,
      atividade: `Crie um botão com id="btnTexto" e o texto Trocar título. No final do body, dentro de uma tag script, pegue o título e o botão com getElementById, crie uma função chamada trocar que mude o titulo.textContent para "Site interativo!" e ligue o botão à função com addEventListener no evento de clique. Teste clicando.`,
      gabarito: `No HTML existe o botão: abre button com id igual a "btnTexto", o texto Trocar título, fecha button. No script: var titulo = document.getElementById("titulo"); depois var botao = document.getElementById("btnTexto"); depois function trocar() abre chave, dentro titulo.textContent = "Site interativo!"; fecha chave; e por fim botao.addEventListener("click", trocar); Ao clicar no botão, o título passa a mostrar Site interativo! e o Console não acusa erro.`,
    },
    {
      titulo: `Botão que muda a cor do fundo`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre que a cor de fundo da página inteira é document.body.style.backgroundColor. Cheque que o aluno usou nomes de cor em inglês entre aspas (por exemplo "lightblue"). Confira o id novo do botão.`,
      atividade: `Crie um segundo botão com id="btnCor" e o texto Mudar cor. No script, pegue esse botão com getElementById, crie uma função chamada mudarCor que faça document.body.style.backgroundColor receber a cor "lightblue" e ligue o botão a essa função no clique. Teste e veja o fundo mudar.`,
      gabarito: `No HTML: abre button com id igual a "btnCor", o texto Mudar cor, fecha button. No script: var botaoCor = document.getElementById("btnCor"); depois function mudarCor() abre chave, dentro document.body.style.backgroundColor = "lightblue"; fecha chave; e botaoCor.addEventListener("click", mudarCor); Ao clicar, o fundo da página fica azul claro. A cor está em inglês e entre aspas, e o botão usa o id correto.`,
    },
    {
      titulo: `Mostrar e esconder uma seção`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Esta é a parte mais difícil. Confirme que o aluno criou no CSS a classe escondido com display none. Reforce que o toggle liga e desliga a classe, como um interruptor. Cheque o id da seção e o nome da classe entre aspas.`,
      atividade: `No CSS, crie uma classe chamada escondido que use display none. No HTML, dê id="secao" a uma seção do site e um botão com id="btnMostrar" e o texto Mostrar ou esconder. No script, crie uma função que use secao.classList.toggle("escondido") e ligue o botão a ela no clique. Teste apertando o botão várias vezes.`,
      gabarito: `No CSS existe a regra: o seletor .escondido com a propriedade display igual a none. No HTML a seção tem id igual a "secao" e há o botão com id igual a "btnMostrar". No script: var secao = document.getElementById("secao"); depois var botaoMostrar = document.getElementById("btnMostrar"); depois function alternar() abre chave, dentro secao.classList.toggle("escondido"); fecha chave; e botaoMostrar.addEventListener("click", alternar); Ao clicar, a seção some; ao clicar de novo, ela volta. O toggle funciona como um interruptor.`,
    },
    {
      titulo: `Meu site que reage apresentado`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Reserve os últimos minutos. Peça que salvem e abram no navegador. Cada aluno apresenta em até um minuto, clicando nos botões e explicando, com suas palavras, o caminho "pego o elemento, depois mudo o elemento". Valorize quem explica o addEventListener.`,
      atividade: `Salve o arquivo e abra no navegador. Em até um minuto, apresente seu site para a turma: clique nos três botões (trocar texto, mudar cor e mostrar ou esconder) e explique, em uma frase, como o JavaScript pega o elemento pelo id e o que muda nele a cada clique.`,
      gabarito: `O aluno apresenta uma página com pelo menos três botões funcionando: um troca o texto do título com textContent, um muda a cor do fundo com style.backgroundColor e um mostra ou esconde a seção com classList.toggle. Ele explica que cada botão usa addEventListener para escutar o clique e que o JavaScript primeiro pega o elemento com getElementById e depois o altera. O site interativo está mais perto da entrega do mês, encerrando como uma página que reage de verdade ao usuário.`,
    },
  ],
};
