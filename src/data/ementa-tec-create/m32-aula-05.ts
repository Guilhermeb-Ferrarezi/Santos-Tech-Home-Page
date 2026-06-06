import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Conhecendo o DOM: a página por dentro",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender o que é o DOM e usar getElementById e querySelector para o JavaScript encontrar e alcançar elementos da página.`,
  descricao: `Nas aulas anteriores os alunos descobriram que o JavaScript fala pelo console, guarda informações em variáveis e reage a eventos com funções. Agora chega a peça que conecta tudo: o DOM. A sigla vem do inglês "Document Object Model", mas a ideia é simples. Quando o navegador abre uma página, ele não guarda o HTML como um texto qualquer; ele transforma cada elemento (cada título, parágrafo, botão e imagem) em um objeto vivo que o JavaScript consegue enxergar, ler e modificar. Esse mapa de objetos é o DOM, a página por dentro.

Uma boa imagem é pensar no DOM como uma árvore genealógica da página. No topo está o documento inteiro; dele descem os grandes ramos, como o cabeçalho e o corpo; e desses ramos descem folhas menores, como cada parágrafo e cada botão. O JavaScript caminha por essa árvore para chegar até o elemento que ele quer. Nesta aula o aluno aprende justamente a dar o primeiro passo: localizar um elemento específico no meio de todos os outros, como achar um amigo numa foto de turma.

Para isso o aluno conhece duas ferramentas de busca. A primeira é getElementById, que encontra um elemento pelo seu id, um nome único que damos a ele no HTML. A segunda é querySelector, mais flexível, que encontra um elemento usando os mesmos seletores do CSS (um id com a cerquilha, uma classe com o ponto, ou simplesmente o nome da tag). Selecionar é o gesto fundamental: antes de mudar qualquer coisa na página, o JavaScript precisa primeiro segurar o elemento na mão. É como apontar para um objeto antes de pegá-lo.

Por fim, o aluno aprende a espiar o DOM com as próprias ferramentas do navegador. Apertando F12 e indo até a aba "Elements" (ou "Elementos"), ele vê a árvore do DOM ao vivo e descobre o id e as classes de cada elemento. Essa habilidade de inspecionar é poderosa: ajuda o aluno a entender qualquer página da internet e prepara o terreno para a próxima aula, quando ele finalmente vai mudar a página ao clicar.`,
  materiais: [
    `Computadores com um navegador moderno (Chrome ou Edge), um por aluno, com o console e a aba Elements disponíveis`,
    `Editor de código (VS Code) instalado para abrir e editar os arquivos de exemplo`,
    `Projetor ou TV para o professor demonstrar a inspeção do DOM ao vivo`,
    `Arquivo de exemplo "pagina-dom" com um título com id, um parágrafo e um botão, já ligado a um arquivo JavaScript vazio para os testes`,
    `Quadro branco para desenhar a árvore do DOM (documento, cabeçalho, corpo e seus filhos)`,
    `Folha impressa com a "cola" dos seletores: id usa cerquilha, classe usa ponto, tag usa só o nome`,
    `Cartões com nomes de elementos para um jogo rápido de "ache o elemento" na árvore desenhada`,
  ],
  conceitosChave: [
    `DOM — o mapa de objetos que o navegador cria a partir do HTML; é a página por dentro, do jeito que o JavaScript a enxerga.`,
    `Elemento — cada pedaço da página, como um título, um parágrafo, um botão ou uma imagem, virado objeto no DOM.`,
    `id — um nome único dado a um elemento no HTML para que ele possa ser encontrado com facilidade.`,
    `Classe — um rótulo que pode ser dado a vários elementos ao mesmo tempo para agrupá-los.`,
    `getElementById — a função que procura e devolve o elemento que tem aquele id exato.`,
    `querySelector — a função que encontra um elemento usando os mesmos seletores do CSS (cerquilha para id, ponto para classe, nome para tag).`,
    `Inspecionar — abrir as ferramentas do navegador (F12) e ver a árvore do DOM ao vivo na aba Elements.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista para dar esta aula. A ideia central cabe em uma frase: o DOM é a página transformada em objetos que o JavaScript consegue alcançar. Antes de mudar algo na página, o JavaScript precisa primeiro encontrar o elemento, e é isso que ensinamos hoje: selecionar. Duas ferramentas bastam. O getElementById busca pelo id (um nome único). O querySelector busca como o CSS: a cerquilha encontra um id, o ponto encontra uma classe e o nome sozinho encontra uma tag.

Antes da aula, abra o arquivo de exemplo no VS Code e veja o HTML. Confirme que existe um elemento com um id, por exemplo um título com id "titulo". Abra a página no navegador, aperte F12 e explore as abas "Elements" (a árvore do DOM) e "Console". Teste no console as duas linhas que você vai mostrar e veja o elemento aparecer. Assim você dá a aula com tranquilidade.

## Passo a passo da aula

Aquecimento e revisão (10 min): retome o evento de clique da aula passada com uma pergunta. "Quando o aluno clica no botão, o JavaScript reage, mas como ele sabe qual botão é?" Conduza até a resposta: ele precisa achar o elemento primeiro. No quadro, desenhe a árvore do DOM: no topo o documento, abaixo o corpo, e do corpo descem o título, o parágrafo e o botão. Faça o jogo rápido: aponte um cartão e pergunte "onde está esse na árvore?".

Conteúdo novo guiado (15 min): no projetor, abra a página de exemplo e aperte F12. Na aba Elements, mostre a árvore do DOM e aponte o id do título. Vá ao Console e digite, explicando cada parte:

document.getElementById("titulo");

Diga: "document" é a página inteira; "getElementById" quer dizer "pegue o elemento pelo id"; entre aspas vai o id exato. Aperte Enter e mostre o elemento aparecendo. Depois mostre a outra forma:

document.querySelector("#titulo");

Explique que a cerquilha quer dizer id, igual ao CSS. Mostre ainda querySelector com tag, digitando document.querySelector("p"), que pega o primeiro parágrafo.

Mão na massa (25 min): cada aluno abre a página de exemplo, aperta F12 e vai ao Console. Primeiro inspeciona na aba Elements e anota o id do título. Depois digita as linhas, uma por vez:

document.getElementById("titulo");
document.querySelector("#titulo");
document.querySelector("p");

Peça que observem que as duas primeiras devolvem o mesmo título. Circule pela sala conferindo as aspas e a cerquilha. Para guardar o elemento, mostre como salvar em variável, ligando com a aula de variáveis:

var titulo = document.getElementById("titulo");
console.log(titulo);

Desafio e compartilhar (10 min): desafie quem terminou a selecionar o botão pelo id e o parágrafo pela tag, e a olhar no console o resultado. Cada aluno mostra em poucos segundos uma linha que escreveu e diz, com as próprias palavras, o que o DOM é.

## Como explicar de forma clara

Use sempre a imagem da árvore e da foto de turma: o DOM é a página por dentro, e selecionar é apontar para uma pessoa na foto. Diga que o id é como o nome de chamada de cada aluno, único na sala, e por isso getElementById acha rápido. Explique que querySelector é o "buscador esperto" que entende a linguagem do CSS: cerquilha para id, ponto para classe, nome para tag. Repita que antes de mudar algo precisamos primeiro pegar o elemento na mão.

## Erros comuns e como ajudar

Erro 1: escrever getElementByID com o D maiúsculo; lembre que o certo é getElementById, com d minúsculo. Erro 2: esquecer a cerquilha no querySelector do id e não achar nada; mostre que sem a cerquilha ele procura uma tag. Erro 3: trocar o id real por outro nome e receber null; volte à aba Elements para conferir o id exato. Erro 4: confundir maiúsculas e minúsculas no id, que precisa bater letra por letra. Erro 5: esquecer as aspas em volta do nome; reforce que o nome é um texto. Erro 6: travar ao ver null e achar que quebrou tudo; tranquilize que null só significa "não encontrei", e basta conferir o nome e tentar de novo.`,
  exercicios: [
    {
      titulo: `O que é o DOM?`,
      tipo: `pergunta e resposta`,
      tempo: `5 min`,
      guiaProfessor: `Faça oralmente ou no quadro, usando a árvore desenhada. O objetivo é fixar a ideia de que o DOM é a página virada objetos antes de qualquer código.`,
      atividade: `Responda com suas palavras: (a) o que é o DOM? (b) por que o JavaScript precisa do DOM? (c) o que significa "selecionar" um elemento?`,
      gabarito: `(a) O DOM é o mapa de objetos que o navegador cria a partir do HTML; é a página por dentro, do jeito que o JavaScript a enxerga. (b) Porque é pelo DOM que o JavaScript consegue encontrar, ler e modificar os elementos da página. (c) Selecionar é encontrar e segurar um elemento específico para depois poder usá-lo ou mudá-lo.`,
    },
    {
      titulo: `Inspecionando a árvore`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que todos cheguem à aba Elements. Quem não achar pela tecla, ensine pelo botão direito e "Inspecionar". Peça que localizem o id do título.`,
      atividade: `Abra a página de exemplo, aperte F12 e vá até a aba "Elements". Encontre o título da página na árvore do DOM e anote o id que ele tem.`,
      gabarito: `O aluno abre as ferramentas com F12, localiza a aba "Elements" e encontra o elemento do título na árvore, lendo o id escrito nele (por exemplo id igual a "titulo"). O id anotado deve bater letra por letra com o que aparece no HTML.`,
    },
    {
      titulo: `Achar pelo id`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre uma vez no projetor e deixe o aluno digitar sozinho. Reforce as aspas e o d minúsculo em getElementById.`,
      atividade: `No Console, use o id que você anotou para encontrar o título. Digite a linha abaixo, trocando "titulo" pelo id real, e aperte Enter:

document.getElementById("titulo");`,
      gabarito: `document.getElementById("titulo");

Ao apertar Enter, o Console mostra o elemento do título encontrado. A linha deve ter "document", "getElementById" com d minúsculo e o id correto entre aspas. Se aparecer null, o id digitado não bate com o do HTML.`,
    },
    {
      titulo: `O buscador esperto`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre que querySelector usa os seletores do CSS. Compare lado a lado com getElementById para os alunos verem que chegam ao mesmo título.`,
      atividade: `No Console, encontre o mesmo título usando querySelector com a cerquilha do id e depois encontre o primeiro parágrafo pela tag. Digite cada linha e aperte Enter:

document.querySelector("#titulo");
document.querySelector("p");`,
      gabarito: `document.querySelector("#titulo");
document.querySelector("p");

A primeira linha devolve o mesmo título de antes, porque a cerquilha quer dizer id, igual ao CSS. A segunda linha devolve o primeiro parágrafo da página, porque o nome sozinho procura pela tag. As duas formas, getElementById e querySelector com cerquilha, encontram o mesmo elemento.`,
    },
    {
      titulo: `Guardar e conferir`,
      tipo: `desafio`,
      tempo: `9 min`,
      guiaProfessor: `Una a aula de hoje com a de variáveis. Conduza a guardar o elemento numa variável e a conferir o resultado no console. Comemore quando o elemento aparecer.`,
      atividade: `Guarde o título numa variável chamada titulo e depois mostre essa variável no console para conferir que o elemento foi mesmo encontrado. Escreva as duas linhas:

var titulo = document.getElementById("titulo");
console.log(titulo);`,
      gabarito: `var titulo = document.getElementById("titulo");
console.log(titulo);

A primeira linha guarda o elemento do título dentro da variável titulo. A segunda linha mostra esse elemento no Console. Se aparecer o título, a seleção funcionou; se aparecer null, é preciso conferir o id. Guardar em variável deixa o elemento pronto para ser mudado na próxima aula.`,
    },
  ],
};
