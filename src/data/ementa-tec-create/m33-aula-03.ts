import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Capturando Dados: Formulários no HTML",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Montar um formulário simples em HTML com input, textarea, select e button e usar o JavaScript para ler os valores digitados pelo usuário e exibi-los no console.`,
  descricao: `Até agora, nas duas primeiras aulas do mês, o aluno aprendeu a tomar decisões no código com if/else e a repetir tarefas com loops. Mas todo esse poder só fica interessante quando o programa conversa com uma pessoa de verdade. É aí que entram os formulários. Um formulário é a parte do site onde o usuário digita, escolhe e clica para enviar informações: o nome, uma mensagem, uma opção numa lista. Sem formulários, um site só mostra coisas; com eles, o site começa a ouvir.

Nesta aula o foco é a estrutura dos formulários no HTML e como o JavaScript enxerga o que foi digitado. O aluno vai conhecer quatro peças fundamentais: o input, que é a caixinha de uma linha onde se digita um texto curto como o nome; o textarea, que é a caixa grande para textos longos como uma mensagem; o select, que é a lista suspensa de opções prontas; e o button, o botão que dispara a ação. Cada uma dessas peças recebe um atributo id, que funciona como uma etiqueta de nome, para que o JavaScript consiga achar exatamente aquele campo depois.

O segredo da ponte entre o HTML e o JavaScript é a propriedade value. Todo campo de formulário guarda, dentro de si, aquilo que o usuário escreveu ou escolheu, e essa informação fica disponível em value. Quando o JavaScript pega o campo pelo id (com document.getElementById) e lê o seu value, ele tem em mãos o texto exato que a pessoa digitou. Por enquanto, em vez de mostrar isso numa página bonita, o aluno vai imprimir os valores no console do navegador com console.log, que é a janelinha de testes do programador. É o jeito mais rápido de conferir se a leitura está funcionando.

A página interativa do mês começa a ganhar vida aqui. Nas próximas aulas o aluno vai reagir a esses dados, validar o que foi preenchido e mostrar respostas na própria página. Hoje a missão é mais contida e muito importante: construir o formulário e provar, olhando o console, que o JavaScript realmente capturou cada pedacinho de dado que o usuário forneceu.`,
  materiais: [
    `Computadores com editor de código instalado (VS Code recomendado), um por aluno`,
    `Navegador moderno (Chrome ou Edge) para abrir a página e o console do desenvolvedor`,
    `Projetor ou TV para o professor demonstrar o código e o console na tela grande`,
    `Arquivo de exemplo formulario-inicial.html com a estrutura básica da página já pronta`,
    `Folha impressa ou slide com a anatomia de um formulário (input, textarea, select, button)`,
    `Bloco de notas ou caderno para o aluno anotar os ids que escolher para cada campo`,
  ],
  conceitosChave: [
    `Formulário (form) — área da página que reúne os campos onde o usuário digita e escolhe informações para enviar.`,
    `Input — campo de uma única linha para textos curtos, como nome, e-mail ou idade.`,
    `Textarea — caixa de várias linhas para textos longos, como uma mensagem ou comentário.`,
    `Select — lista suspensa que mostra opções prontas para o usuário escolher uma delas.`,
    `Button — botão que, ao ser clicado, dispara uma ação no código JavaScript.`,
    `id — etiqueta única dada a um elemento HTML para que o JavaScript consiga encontrá-lo.`,
    `value — propriedade que guarda o texto ou a opção que o usuário digitou ou escolheu no campo.`,
  ],
  treinamento: `## O que o professor precisa saber

Um formulário é só um conjunto de campos onde a pessoa escreve ou escolhe algo. No HTML, esses campos são etiquetas (tags) como input, textarea, select e button. O ponto central que você precisa dominar é simples: cada campo recebe um atributo id, que é como o nome de cada campo, e o JavaScript usa esse id para encontrá-lo com document.getElementById. Depois de encontrar o campo, o JavaScript lê a propriedade value para saber o que a pessoa digitou. Por hoje, o resultado aparece no console do navegador, que você abre apertando a tecla F12 e clicando na aba Console. Não precisa decorar nada: o roteiro abaixo traz o código exato, linha a linha.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o arquivo formulario-inicial.html no editor e no navegador. Relembre as aulas anteriores perguntando: "Como o site recebe o que a gente escreve?". Mostre o console apertando F12 e digitando console.log("Oi, turma") para todos verem a mensagem aparecer.

Conteúdo novo guiado (15 min): no projetor, monte um formulário simples dentro da tag body. Digite com calma:

<form id="meuForm">
  <input id="campoNome" type="text" placeholder="Seu nome">
  <textarea id="campoMensagem" placeholder="Sua mensagem"></textarea>
  <select id="campoCor">
    <option value="azul">Azul</option>
    <option value="verde">Verde</option>
  </select>
  <button id="botaoEnviar" type="button">Enviar</button>
</form>

Explique cada id como a etiqueta de nome do campo. Em seguida, dentro da tag script, escreva o JavaScript que lê os valores ao clicar no botão:

var botao = document.getElementById("botaoEnviar");
botao.onclick = function () {
  var nome = document.getElementById("campoNome").value;
  var mensagem = document.getElementById("campoMensagem").value;
  var cor = document.getElementById("campoCor").value;
  console.log("Nome:", nome);
  console.log("Mensagem:", mensagem);
  console.log("Cor:", cor);
};

Salve, recarregue a página, preencha os campos, clique em Enviar e mostre os valores aparecendo no console.

Mão na massa (25 min): cada aluno monta o próprio formulário com os mesmos quatro campos, escolhendo os próprios ids e as próprias opções do select. Circule pela sala. Lembre-os de que o id no HTML precisa ser idêntico ao id usado no getElementById, sem erro de letra. Quem terminar pode adicionar um campo extra, como a idade.

Desafio e compartilhar (10 min): proponha o desafio de juntar tudo numa só mensagem no console (veja exercícios). Depois, dois ou três alunos mostram o console preenchido no projetor e explicam o que cada linha imprimiu.

## Como explicar de forma clara (linguagem para a idade)

Compare o formulário com uma ficha de cadastro de papel: o input é a linha do nome, o textarea é o espaço grande para um recado, o select é aquela listinha com setinha para escolher e o button é o carimbo de "enviar". Diga que o id é como escrever o nome de cada caixinha num post-it, para o JavaScript saber em qual caixinha procurar. Explique value como "o conteúdo de dentro da caixinha". E o console é a "câmera de bastidores" do programador: o usuário não vê, mas a gente espia ali para conferir se deu certo. Sempre que possível, mostre primeiro na tela e só depois peça para repetirem.

## Erros comuns e como ajudar

O erro mais frequente é o id do HTML não bater com o id do JavaScript: "campoNome" no HTML e "campionome" no script não se encontram. Peça que comparem letra por letra. Outro clássico é esquecer o .value e imprimir o elemento inteiro em vez do texto; mostre a diferença no console. Muitos esquecem de salvar o arquivo ou de recarregar a página, e acham que o código não funciona; crie o hábito de salvar e atualizar. Alguns colocam type="submit" no botão e a página pisca e recarrega sozinha; oriente a usar type="button" nesta aula. Por fim, há quem feche mal as etiquetas, como esquecer a barra de fechamento do textarea; passe conferindo a estrutura com eles.`,
  exercicios: [
    {
      titulo: `Caça aos campos`,
      tipo: `Roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Mostre no projetor uma página de cadastro real (ou um print) e peça que os alunos apontem os tipos de campo. Reforce o nome de cada um: input, textarea, select e button.`,
      atividade: `Olhe um formulário de cadastro na tela e classifique cada campo: qual é input (texto curto), qual é textarea (texto longo), qual é select (lista de opções) e qual é o button. Anote pelo menos um exemplo de cada tipo.`,
      gabarito: `O aluno identifica corretamente: campos de uma linha como nome e e-mail são input; uma caixa grande de mensagem é textarea; uma lista suspensa como estado ou cor é select; o botão de enviar ou cadastrar é o button. Cita ao menos um exemplo de cada um dos quatro tipos.`,
    },
    {
      titulo: `Meu primeiro input`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno tenha o arquivo aberto no editor e no navegador. Reforce que o id é a etiqueta de nome e que o getElementById precisa usar exatamente o mesmo texto.`,
      atividade: `No seu arquivo HTML, crie um campo input com o id chamado campoNome dentro da tag form. No script, leia o valor digitado e mostre no console quando a página carregar, usando console.log com o texto Nome e o valor lido.`,
      gabarito: `O HTML tem a linha <input id="campoNome" type="text">. No script, o aluno usa document.getElementById("campoNome").value e imprime com console.log("Nome:", nome). Ao digitar algo e recarregar (ou clicar), o texto digitado aparece no console precedido pela palavra Nome.`,
    },
    {
      titulo: `Lendo no clique do botão`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre como ligar o botão a uma ação com onclick. Lembre a turma de usar type="button" para a página não recarregar sozinha.`,
      atividade: `Adicione um button com id botaoEnviar ao seu formulário. Faça o JavaScript ler o valor do campoNome somente quando o botão for clicado e exibir no console. Teste digitando seu nome e clicando em Enviar.`,
      gabarito: `O HTML tem <button id="botaoEnviar" type="button">Enviar</button>. No script existe document.getElementById("botaoEnviar").onclick = function () com a leitura do value e o console.log dentro. Ao preencher o nome e clicar, o valor aparece no console; sem clicar, nada é impresso.`,
    },
    {
      titulo: `Três campos de uma vez`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Indicado para quem já leu um campo no clique. Oriente a repetir o padrão getElementById e value para cada novo campo. Confira se os ids do HTML batem com os do script.`,
      atividade: `Amplie o formulário com um textarea de id campoMensagem e um select de id campoCor com pelo menos duas opções. No clique do botão, leia os três valores (nome, mensagem e cor) e imprima cada um em uma linha do console.`,
      gabarito: `O HTML tem input, textarea com </textarea> de fechamento e select com duas tags option, cada um com seu id. No clique, o script lê os três value e faz três console.log, como console.log("Mensagem:", mensagem). Ao preencher tudo e clicar, as três informações aparecem no console em linhas separadas.`,
    },
    {
      titulo: `Mensagem única no console`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Para quem terminou os três campos. Ensine a juntar textos com o sinal de mais (+) para formar uma frase única. Evite mencionar template literals nesta aula.`,
      atividade: `Em vez de três linhas separadas, junte as três informações em uma única frase no console. Use o sinal de mais para concatenar os textos, formando algo como uma frase que diz o nome, a mensagem e a cor escolhida da pessoa.`,
      gabarito: `O aluno cria uma só linha, por exemplo console.log("A pessoa " + nome + " escreveu: " + mensagem + " e gosta de " + cor). Ao clicar no botão, o console mostra uma única frase coerente unindo os três valores digitados, sem aspas sobrando e com espaços entre as palavras.`,
    },
  ],
};
