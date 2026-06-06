import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Primeiras tags: estruturando texto",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar do zero o primeiro arquivo HTML com a estrutura básica e usar tags de texto, como títulos e parágrafos, para fazer o código virar conteúdo visível no navegador.`,
  descricao: `Nesta aula os alunos finalmente colocam a mão na massa e escrevem o primeiro código HTML da vida deles. Nas duas aulas anteriores eles entenderam como a web funciona e espiaram por dentro de sites reais; agora chegou a hora de construir o próprio arquivo, salvar com a extensão certa e abrir no navegador para ver a mágica acontecer: o código que eles digitaram vira uma página de verdade na tela.

O coração da aula é a estrutura básica de toda página HTML. Todo site começa igual: uma tag html que envolve tudo, uma tag head que guarda informações sobre a página (como o título da aba) e uma tag body que guarda tudo o que a pessoa vê. Os alunos vão entender que HTML é feito de tags, e que quase toda tag funciona em par, com uma de abertura e uma de fechamento que "abraçam" o conteúdo.

Com a estrutura montada, entram as tags de texto. Os títulos, das tags h1 até h6, organizam a página como os capítulos de um livro: h1 é o título principal e os outros vão diminuindo de importância. O parágrafo, a tag p, é o bloco de texto comum. Os alunos vão perceber que o navegador não liga para espaços ou linhas em branco no código; quem manda no que aparece são as tags.

O grande momento é ver o arquivo virar página. Quando o aluno aperta salvar e atualiza o navegador, o texto aparece formatado, com o título grande e os parágrafos separados. Essa primeira vitória é poderosa: pela primeira vez eles não estão usando um programa pronto, e sim criando a web. A aula prepara o terreno para a próxima, em que entram as imagens e os links.`,
  materiais: [
    `Computadores com um editor de código instalado (VS Code) e um navegador, um por aluno`,
    `Projetor ou TV para o professor mostrar o editor e o navegador lado a lado`,
    `Arquivo de exemplo pronto (pagina-exemplo.html) para mostrar o resultado final esperado`,
    `Folha impressa com a estrutura básica do HTML (html, head, body) como cola de consulta`,
    `Quadro branco ou flip chart para desenhar a ideia de "tag que abre e tag que fecha"`,
    `Lista curta de tags da aula no projetor: html, head, title, body, h1 a h6, p`,
  ],
  conceitosChave: [
    `HTML — linguagem de marcação usada para montar a estrutura de uma página, dizendo ao navegador o que é título, o que é parágrafo e assim por diante.`,
    `Tag — comando do HTML escrito entre os sinais de menor e maior; quase sempre vem em par, uma para abrir e outra para fechar o conteúdo.`,
    `Elemento — a tag de abertura, o conteúdo e a tag de fechamento juntos formam um elemento completo da página.`,
    `Estrutura básica — o esqueleto que toda página tem: a tag html por fora, a head com informações e a body com o conteúdo visível.`,
    `head — parte da página que guarda informações que o usuário não vê direto no corpo, como o título que aparece na aba do navegador.`,
    `body — parte da página onde fica tudo o que a pessoa vê: títulos, parágrafos, imagens e links.`,
    `Título e parágrafo — a tag h1 (até h6) cria títulos em ordem de importância, e a tag p cria blocos de texto comum.`,
  ],
  treinamento: `## O que o professor precisa saber

HTML significa linguagem de marcação de hipertexto. Não é uma linguagem de programação com contas e decisões; é uma forma de marcar o texto dizendo "isto é um título", "isto é um parágrafo". O navegador lê essas marcas, chamadas tags, e desenha a página. Toda tag é escrita entre os sinais de menor e maior. A maioria vem em par: uma de abertura, como a tag de parágrafo, e uma de fechamento idêntica só que com uma barra antes do nome.

Toda página HTML tem o mesmo esqueleto. Decore esta sequência, pois você vai escrevê-la na frente da turma: na primeira linha vem a declaração que avisa que é HTML; depois a tag html abre e, lá no fim, fecha; dentro dela ficam a head (com a tag title, que vira o nome da aba) e a body (com o conteúdo visível). Antes da aula, abra o VS Code, crie um arquivo, salve como index.html e abra no navegador uma vez. Assim você já sabe onde fica o botão de salvar e como o arquivo abre.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Relembre a aula passada perguntando "quando abrimos um site real, o que vimos por trás dele?". Mostre no projetor a página de exemplo pronta e diga: "hoje cada um de vocês vai criar uma página assim, do zero". Desenhe no quadro uma tag abrindo e fechando, com o conteúdo no meio, como dois braços que abraçam.

15 min — Conteúdo novo guiado: No projetor, abra o VS Code, crie um arquivo novo e salve como index.html (menu Arquivo, Salvar como). Digite com a turma, linha a linha, explicando cada uma:

<!DOCTYPE html>
<html>
  <head>
    <title>Minha primeira pagina</title>
  </head>
  <body>
    <h1>Ola, mundo!</h1>
    <p>Esta e a minha primeira pagina na web.</p>
  </body>
</html>

Explique: a primeira linha avisa que é HTML; html abraça tudo; head guarda o title, que aparece na aba; body guarda o que se vê; h1 é o título grande; p é o parágrafo. Salve e abra o arquivo no navegador para mostrar o resultado.

25 min — Mão na massa: Cada aluno cria o próprio index.html e digita a mesma estrutura, trocando o conteúdo por algo pessoal: o título com o próprio nome e um parágrafo se apresentando. Em seguida, devem adicionar mais dois parágrafos e um segundo título com h2. Circule pela sala conferindo se cada tag foi fechada e se eles salvaram antes de atualizar o navegador.

10 min — Desafio e compartilhar: Lance o desafio "monte a página da sua comida favorita", com um h1, um h2 e três parágrafos. Cada aluno mostra a tela à turma, lendo o título em voz alta. Feche reforçando que eles escreveram código e o navegador o transformou em página.

## Como explicar de forma clara (linguagem para a idade)

Compare a tag com um sanduíche: o pão de cima é a abertura, o pão de baixo é o fechamento e o recheio é o conteúdo. Diga que esquecer de fechar a tag é como deixar o sanduíche aberto, e às vezes a página fica estranha por causa disso. Para os títulos, use a ideia de capítulos: h1 é o nome do livro, h2 é o nome do capítulo, e assim por diante, sempre menores. Lembre sempre de salvar antes de atualizar, com a frase "salvou, atualizou, apareceu". E celebre a primeira página no ar com entusiasmo, pois essa vitória inicial prende a turma.

## Erros comuns e como ajudar

O erro mais comum é esquecer a barra na tag de fechamento ou não fechar a tag; mostre que a de fechar é igual à de abrir, só com a barra antes do nome. Outro clássico é salvar o arquivo sem a extensão .html, então ele abre como texto puro; confira o nome e oriente a salvar como index.html. Muitos atualizam o navegador sem salvar e acham que "não funcionou"; reforce a frase "salvou, atualizou, apareceu". Alguns colocam o texto fora da body e estranham que não aparece; lembre que tudo o que se vê fica dentro da body. Por fim, há quem coloque vários h1 achando que é só o tamanho; explique que h1 é o título principal e que os menores servem para organizar.`,
  exercicios: [
    {
      titulo: `Reconhecendo as tags`,
      tipo: `ficha de marcar`,
      tempo: `7 minutos`,
      guiaProfessor: `Distribua a estrutura básica impressa e peça que circulem as tags de abertura e risquem as de fechamento. O objetivo é treinar o olho antes de digitar. Corrija no projetor apontando cada par.`,
      atividade: `Olhe a estrutura básica de uma página: html, head, title, body, h1 e p. Para cada tag, escreva ao lado o que ela faz e marque qual é a versão de abertura e qual é a de fechamento. Responda também: qual tag guarda tudo o que aparece na tela?`,
      gabarito: `html envolve toda a página; head guarda informações como o title; title é o nome que aparece na aba; body guarda tudo o que aparece na tela (é a resposta da pergunta); h1 é o título principal; p é o parágrafo. A versão de fechamento de cada tag é igual à de abertura, porém com uma barra antes do nome.`,
    },
    {
      titulo: `Montando o esqueleto`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Garanta que cada aluno crie o arquivo e o salve como index.html antes de digitar. Circule conferindo se as tags estão fechadas. Lembre de salvar e atualizar o navegador para ver o resultado.`,
      atividade: `No editor de código, crie um arquivo, salve como index.html e digite a estrutura básica completa: a declaração de HTML, a tag html, a head com um title chamado "Minha pagina", e a body com um h1 escrito "Bem-vindo" e um parágrafo qualquer. Salve e abra no navegador.`,
      gabarito: `<!DOCTYPE html>
<html>
  <head>
    <title>Minha pagina</title>
  </head>
  <body>
    <h1>Bem-vindo</h1>
    <p>Esta e a minha pagina.</p>
  </body>
</html>
Ao abrir no navegador, a aba mostra "Minha pagina", e na tela aparecem o título grande "Bem-vindo" e o parágrafo abaixo dele.`,
    },
    {
      titulo: `Caça ao erro, em dupla`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Entregue o código com erros (no projetor ou impresso). Cada dupla encontra e corrige. Peça que digam em voz alta qual era o erro e por que quebrava a página. Confira par a par.`,
      atividade: `Em dupla, leiam este código e encontrem os três erros. Depois reescrevam certo no editor: <html> <head> <title>Teste<title> </head> <body> <h1>Minha pagina <p>Texto aqui</p> </body>`,
      gabarito: `Erros: 1) o title não foi fechado corretamente (estava <title> em vez de </title>); 2) o h1 não foi fechado (faltou </h1>); 3) faltou a tag de fechamento </html> no final. Versão correta:
<html>
  <head>
    <title>Teste</title>
  </head>
  <body>
    <h1>Minha pagina</h1>
    <p>Texto aqui</p>
  </body>
</html>`,
    },
    {
      titulo: `Organizando com títulos`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Foque na hierarquia: um h1 principal e h2 para subdivisões. Verifique se cada aluno fechou as tags e usou parágrafos de verdade. Pergunte por que h1 vem antes de h2.`,
      atividade: `Crie uma página sobre o seu hobby favorito. Use um h1 com o nome do hobby, dois h2 com subtítulos (por exemplo "Por que eu gosto" e "Como comecei") e, abaixo de cada h2, um parágrafo explicando. Salve e veja no navegador como os títulos ficam em tamanhos diferentes.`,
      gabarito: `Exemplo de solução (o tema varia por aluno):
<body>
  <h1>Skate</h1>
  <h2>Por que eu gosto</h2>
  <p>Gosto da sensacao de liberdade e de aprender manobras novas.</p>
  <h2>Como comecei</h2>
  <p>Comecei vendo videos e treinando no parque perto de casa.</p>
</body>
O h1 deve aparecer maior, e os h2 menores que ele, mostrando a hierarquia. Cada tag deve estar fechada.`,
    },
    {
      titulo: `Minha página de apresentação`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça uma página completa e bem fechada, com estrutura básica correta. Avalie se há um h1, ao menos um h2 e parágrafos com sentido. Valorize quem personalizar o conteúdo e confira o title da aba.`,
      atividade: `Monte sua página de apresentação do zero, com a estrutura básica completa. No title coloque "Pagina de [seu nome]". Na body, use um h1 com seu nome, um h2 escrito "Sobre mim", dois parágrafos se apresentando e outro h2 escrito "Meus gostos" com um parágrafo. Salve e abra no navegador.`,
      gabarito: `<!DOCTYPE html>
<html>
  <head>
    <title>Pagina de Ana</title>
  </head>
  <body>
    <h1>Ana</h1>
    <h2>Sobre mim</h2>
    <p>Tenho 12 anos e estudo na Santos Tech.</p>
    <p>Adoro criar jogos e desenhar.</p>
    <h2>Meus gostos</h2>
    <p>Gosto de games, musica e andar de bicicleta.</p>
  </body>
</html>
O nome no title e no h1 muda conforme o aluno. O importante é a estrutura básica correta, todas as tags fechadas e o title aparecendo na aba do navegador.`,
    },
  ],
};
