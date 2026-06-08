import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "CSS: dando cor e estilo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender o que é o CSS, conectá-lo ao HTML e usar seletores para mudar cores de fundo, cores de texto e fontes, aplicando a primeira identidade visual à própria página.`,
  descricao: `Até agora os alunos construíram páginas só com HTML: textos, títulos, imagens e links funcionando, mas com a aparência crua e cinza do navegador. Nesta aula entra o CSS, a linguagem que cuida do visual. Se o HTML é o esqueleto e o conteúdo da página, o CSS é a roupa, a pintura e a decoração. É ele que diz qual a cor do fundo, qual a cor das letras e qual a fonte usada. Essa separação entre conteúdo e estilo é uma das ideias mais importantes da web, e o aluno vai senti-la na prática ao ver a mesma página ganhar vida sem mudar uma linha de texto.

O coração da aula é entender que o CSS funciona com regras. Cada regra tem um seletor (a quem ela se aplica) e um conjunto de declarações (o que muda). Por exemplo, podemos escolher o corpo da página e dizer que o fundo é azul-claro, ou escolher todos os parágrafos e dizer que as letras são cinza-escuro. O aluno aprende três propriedades essenciais e fáceis de ver na tela: background-color para o fundo, color para a cor do texto e font-family para a fonte. Com essas três, qualquer página já muda de cara.

Os alunos também aprendem a conectar o CSS ao HTML. Nesta aula usamos a forma mais simples e direta de começar: a tag style dentro do cabeçalho do HTML. Assim o aluno escreve o estilo no mesmo arquivo que já conhece, vê o resultado na hora ao salvar e atualizar o navegador, e não precisa se preocupar ainda com arquivos separados. O foco é o prazer imediato de ver a página reagir a cada mudança de cor.

Esta é a quinta de oito aulas do mês. Ela não cobre layout, espaçamentos, margens ou caixas, que virão na próxima aula, nem a publicação do site, que fecha o mês. Aqui o objetivo é claro e divertido: aplicar a primeira identidade visual, escolhendo cores e fonte que combinem com o tema da página, e perceber com nitidez a diferença entre o que a página diz (conteúdo, no HTML) e como a página se mostra (estilo, no CSS).`,
  materiais: [
    `Computadores com editor de código instalado (VS Code) e navegador, um por aluno`,
    `Arquivo index.html de cada aluno, com texto, imagens e links das aulas anteriores`,
    `Projetor ou TV para o professor mostrar o código e o navegador lado a lado`,
    `Arquivo de exemplo do professor: a mesma página antes e depois do CSS`,
    `Folha impressa com uma tabela de nomes de cores em inglês (blue, red, green, gray, white) e códigos hexadecimais comuns`,
    `Lista de fontes seguras para usar (Arial, Verdana, Georgia, Courier New)`,
  ],
  conceitosChave: [
    `CSS — linguagem que define a aparência da página: cores, fontes e organização visual, separada do conteúdo.`,
    `Regra de CSS — um bloco que tem um seletor e uma ou mais declarações dentro de chaves.`,
    `Seletor — a parte da regra que diz a quais elementos do HTML o estilo será aplicado, como body, h1 ou p.`,
    `Declaração — um par de propriedade e valor terminado em ponto e vírgula, por exemplo color: blue;`,
    `background-color — propriedade que define a cor de fundo de um elemento.`,
    `color — propriedade que define a cor do texto de um elemento.`,
    `font-family — propriedade que define a fonte (o desenho das letras) usada no texto.`,
  ],
  treinamento: `## O que o professor precisa saber

CSS quer dizer "folhas de estilo em cascata", mas para os alunos basta dizer que é a linguagem que pinta e veste a página. Toda regra de CSS tem a mesma forma: um seletor, depois chaves, e dentro delas as declarações. Cada declaração é uma propriedade, dois-pontos, um valor e ponto e vírgula. Exemplo de leitura: body é o seletor, e dentro vem background-color seguido de dois-pontos, o valor e ponto e vírgula. Os seletores mais úteis hoje são body (a página inteira), h1 (os títulos) e p (os parágrafos). As três propriedades da aula são background-color (fundo), color (texto) e font-family (fonte). Nesta aula conectamos o CSS pelo método mais simples: uma tag style dentro do head do HTML. As cores podem ser nomes em inglês (blue, red, gray) ou códigos hexadecimais começando com cerquilha. Antes da aula, teste você mesmo a página de exemplo: mude uma cor, salve, atualize o navegador e veja a mudança. Repita até ficar natural.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: abra no projetor a página de um aluno (só HTML, cinza). Pergunte: "Como deixar isso com a cara de vocês?". Mostre lado a lado a mesma página depois do CSS, colorida. Explique a ideia: conteúdo é o HTML, estilo é o CSS.

15 min — Conteúdo novo guiado: no editor, dentro do head, acima do fechamento do head, digite a tag de estilo e as três regras, linha a linha, explicando cada parte. O código exato é:

  <style>
    body {
      background-color: lightblue;
    }
    h1 {
      color: white;
    }
    p {
      color: black;
      font-family: Arial;
    }
  </style>

Explique: body é o seletor da página toda; background-color pinta o fundo; h1 pega os títulos e color: white deixa o título branco; p pega os parágrafos, com texto preto e fonte Arial. Salve (Ctrl+S) e atualize o navegador (F5). Mude lightblue para outra cor, salve e atualize de novo, mostrando a reação imediata.

25 min — Mão na massa: cada aluno abre seu index.html. Tarefa: 1) criar a tag style dentro do head; 2) escolher uma cor de fundo para o body; 3) escolher uma cor para os títulos h1; 4) escolher cor e fonte para os parágrafos p. A regra de ouro: mudou algo, salva (Ctrl+S) e atualiza (F5). Circule pela sala ajudando individualmente.

10 min — Desafio e compartilhar: desafie quem terminar a usar um código de cor hexadecimal no lugar de um nome, por exemplo trocar blue por um código com cerquilha. Cada aluno mostra a página para a turma em uma frase: que cores escolheu e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da casa: o HTML é a casa construída (paredes, portas, móveis); o CSS é a pintura, o papel de parede e a decoração. A mesma casa pode ficar azul ou rosa sem mudar onde ficam as paredes. Para a regra de CSS, diga: "primeiro você aponta para quem (o seletor), depois você diz o que muda (as declarações)". Compare com dar uma ordem: "vocês, parágrafos, fiquem cinza". Reforce que o ponto e vírgula é como o ponto final de cada ordem. Lembre que os nomes de cor e de propriedade são em inglês e ficam sem acento, igual ao resto do código.

## Erros comuns e como ajudar

O erro mais comum é esquecer o ponto e vírgula no fim da declaração; mostre que a cor seguinte para de funcionar e ensine a conferir linha por linha. Outro é escrever colour em vez de color: a forma correta é a americana, sem o u. Muitos esquecem de salvar antes de atualizar, ou de atualizar a página (F5), e acham que não funcionou: crie o hábito "salva e atualiza". Há quem coloque a tag style fora do head ou esqueça de fechá-la; confira a abertura e o fechamento. Alguns escrevem nomes de cor em português (azul) que o navegador não entende; oriente a usar a tabela de cores em inglês. Por fim, atenção às chaves: cada seletor abre uma chave e precisa fechá-la.`,
  exercicios: [
    {
      titulo: `Conteúdo ou estilo?`,
      tipo: `discussão guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza no quadro. Leia cada item e peça à turma para responder em voz alta. O objetivo é fixar a diferença entre o que é HTML (conteúdo) e o que é CSS (estilo) antes de ir ao computador.`,
      atividade: `Para cada item, diga se é trabalho do HTML (conteúdo) ou do CSS (estilo): 1) o texto de um parágrafo; 2) a cor de fundo da página; 3) o endereço de um link; 4) a fonte das letras; 5) a cor de um título.`,
      gabarito: `1) HTML (conteúdo); 2) CSS (estilo); 3) HTML (conteúdo); 4) CSS (estilo); 5) CSS (estilo). O HTML cuida do que a página diz e tem; o CSS cuida de como a página aparece.`,
    },
    {
      titulo: `Cor de fundo na página`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Confira se cada aluno criou a tag style dentro do head e se fechou as chaves. Reforce o hábito de salvar (Ctrl+S) e atualizar o navegador (F5) para ver o resultado.`,
      atividade: `No seu index.html, crie a tag style dentro do head e escreva uma regra para o body que pinte o fundo da página com a cor lightyellow. Salve e atualize o navegador.`,
      gabarito: `Dentro do head deve existir:

  <style>
    body {
      background-color: lightyellow;
    }
  </style>

Ao atualizar, o fundo inteiro da página fica amarelo-claro.`,
    },
    {
      titulo: `Texto com cor e fonte`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe se eles usam os seletores h1 e p separados. O erro mais comum aqui é esquecer o ponto e vírgula entre as duas declarações do parágrafo.`,
      atividade: `Acrescente duas regras dentro da sua tag style: uma para os títulos h1 com a cor darkblue e outra para os parágrafos p com a cor gray e a fonte Verdana.`,
      gabarito: `Dentro da tag style, somando-se às regras anteriores:

  h1 {
      color: darkblue;
  }
  p {
      color: gray;
      font-family: Verdana;
  }

Os títulos ficam azul-escuro e os parágrafos ficam cinza com a fonte Verdana.`,
    },
    {
      titulo: `Cor por código hexadecimal`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Apresente o código hexadecimal como outra forma de escrever cor, começando com cerquilha e seis caracteres. Tenha a tabela impressa à mão. Confira se o aluno manteve o ponto e vírgula.`,
      atividade: `Troque a cor de fundo do body por um código hexadecimal no lugar do nome. Use o valor que começa com cerquilha seguido de ffcccc (um rosa-claro). Salve e atualize para conferir.`,
      gabarito: `A regra do body deve ficar assim (o valor é cerquilha seguido de ffcccc):

  body {
      background-color: #ffcccc;
  }

O fundo da página passa a ser rosa-claro. O código hexadecimal sempre começa com cerquilha e descreve a cor por números e letras.`,
    },
    {
      titulo: `Identidade visual da minha página`,
      tipo: `projeto curto`,
      tempo: `16 minutos`,
      guiaProfessor: `É a entrega da aula. Verifique item por item: tag style no head, fundo no body, cor nos h1, cor e fonte nos p, todas as chaves fechadas e ponto e vírgula em cada declaração. Confirme que o aluno salvou e que a página abre colorida no navegador.`,
      atividade: `Dê à sua página uma identidade visual completa: escolha uma cor de fundo para o body, uma cor para os títulos h1 e uma cor e uma fonte para os parágrafos p, tudo combinando com o tema da sua página. Salve e mostre o resultado no navegador.`,
      gabarito: `Página aprovada quando a tag style está dentro do head e contém, por exemplo:

  <style>
    body {
      background-color: lightblue;
    }
    h1 {
      color: navy;
    }
    p {
      color: black;
      font-family: Georgia;
    }
  </style>

As cores e a fonte podem variar conforme a escolha do aluno, desde que existam as três regras (body, h1 e p), com chaves fechadas e ponto e vírgula em cada declaração, e a página apareça colorida ao atualizar o navegador.`,
    },
  ],
};
