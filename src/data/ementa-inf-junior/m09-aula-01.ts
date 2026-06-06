import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "De Números para Desenho!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança descobre que números digitados em uma planilha podem virar um desenho colorido chamado gráfico, contando objetos reais e vendo cada número se transformar em uma barrinha.`,
  descricao: `Esta é a primeira aula do mês dos Gráficos. Nos meses anteriores as crianças já mexeram no computador, escreveram e até aprenderam a colocar números em quadradinhos da planilha. Agora começa a parte mágica: descobrir que aqueles números podem se transformar em um desenho que mostra qual é maior e qual é menor só de bater o olho. O assunto de hoje é justamente esse momento mágico, quando o número vira figura.

Um gráfico é um jeito de mostrar números usando desenho em vez de só algarismos. Em vez de a criança ler o número 5 e o número 2 e tentar comparar de cabeça, ela olha duas barrinhas: uma alta e uma baixinha. Na hora ela enxerga quem ganhou. Para crianças de 5 a 9 anos, que ainda estão aprendendo a ler e a contar, ver é muito mais fácil do que ler. Por isso o gráfico é uma ferramenta tão poderosa para elas, e tão divertida.

Nesta aula a turma vai contar objetos de verdade: lápis, blocos de montar, frutinhas de brinquedo. Cada criança conta um montinho e o professor (ou a própria criança) digita o número em uma coluna já pronta da planilha. As colunas já vêm com os nomes prontos, para que ninguém precise escrever muito. Depois de digitar os números, o professor seleciona a tabelinha e clica no botão de gráfico. Na frente de todos, as barrinhas aparecem como num passe de mágica. O foco não é fazer um gráfico perfeito, e sim entender uma ideia: cada número que a gente conta vira uma barrinha, e a barrinha do número maior fica mais alta.

O grande objetivo do dia é encantar e plantar a semente. Quando a criança vê a barrinha aparecer logo depois de ela ter contado e digitado, ela entende que foi o trabalho dela que virou desenho. Essa primeira descoberta abre o caminho para as próximas aulas, em que cada um vai aprender a fazer o próprio gráfico, escolher cores, colocar títulos e, no fim do mês, montar um painel. Hoje a base é simples e firme: números viram desenho, e cada barrinha conta uma história.`,
  materiais: [
    `Um computador por aluno (ou em duplas) com o Excel instalado ou o Google Planilhas já aberto no navegador, mostrando uma planilha preparada pelo professor com duas colunas prontas: uma com nomes de objetos e outra vazia para os números.`,
    `Computador do professor ligado a um projetor ou televisão grande, para contar, digitar e mostrar o gráfico aparecendo para a turma toda ver ao mesmo tempo.`,
    `Objetos reais para contar, separados em montinhos: lápis, blocos de montar, frutinhas de brinquedo, tampinhas ou bichinhos de plástico (de 1 a 6 objetos em cada montinho).`,
    `Uma planilha de exemplo já pronta, com uma tabelinha simples e um gráfico de barras colorido ao lado, para mostrar logo no começo como fica o resultado.`,
    `Cartões grandes com os algarismos de 0 a 9 desenhados, para ajudar quem ainda confunde os números na hora de digitar.`,
    `Uma folha de papel por aluno com uma tabela em branco (nome do objeto e um quadradinho para o número) e espaço ao lado para desenhar barrinhas na atividade de papel.`,
    `Lápis de cor ou giz de cera e um cronômetro ou relógio visível para controlar as quatro etapas da aula.`,
  ],
  conceitosChave: [
    `Gráfico — um desenho que mostra números usando barrinhas, para a gente ver rapidinho qual é maior e qual é menor.`,
    `Número — a quantidade de coisas que a gente contou, como 3 lápis ou 5 blocos, e que vai ser digitada na planilha.`,
    `Planilha — a folha do computador cheia de quadradinhos onde a gente escreve os nomes e os números.`,
    `Coluna — a fileira de quadradinhos que desce de cima para baixo, onde cada número fica no seu lugar certinho.`,
    `Barrinha — cada pedacinho do gráfico que mostra um número; quanto maior o número, mais alta fica a barrinha.`,
    `Botão de gráfico — o botãozinho que a gente aperta para os números virarem desenho na tela.`,
    `Selecionar — passar o mouse por cima dos quadradinhos para deixá-los pintados, mostrando ao computador quais números a gente quer transformar em gráfico.`,
  ],
  treinamento: `## O que o professor precisa saber

Um gráfico é uma forma visual de mostrar números. Nesta aula usamos o gráfico de barras (ou colunas), em que cada número vira uma barrinha: número maior, barrinha mais alta. A ferramenta é o Excel (do pacote Office) ou o Google Planilhas (gratuito, abre em sheets.google.com com uma conta Google). Os dois são quase iguais: a tela é cheia de quadradinhos chamados células, organizados em colunas (que descem) e linhas (que vão para o lado). Em cima ficam as abas com os botões.

Prepare antes da aula uma planilha simples. Na célula A1 escreva "Objeto" e na B1 escreva "Quantidade". Na coluna A, de A2 para baixo, escreva os nomes: Lápis, Blocos, Frutas. Deixe a coluna B (os números) vazia, pois é isso que as crianças vão preencher. Assim ninguém precisa digitar palavras, só números.

O passo mágico é gerar o gráfico. Primeiro selecione a tabelinha: clique na célula A1 e, segurando o botão do mouse, arraste até o último número da coluna B; os quadradinhos ficam pintados. No Excel: aba Inserir, grupo Gráficos, clique no ícone de Colunas e escolha o primeiro modelo. No Google Planilhas: menu Inserir e depois Gráfico; ele já aparece, e você pode escolher "Gráfico de colunas" no painel da direita. Pronto, as barrinhas surgem.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min). Junte a turma em roda. Mostre no projetor a planilha de exemplo já com o gráfico colorido e pergunte: "Quem é a barrinha mais alta? E a mais baixinha?" Deixe que apontem. Diga: "Esses desenhos chamam-se gráfico. Hoje vocês vão contar coisas de verdade e transformar em desenho no computador!"

2. Conteúdo novo guiado (15 min). No computador do professor, mostre tudo bem devagar. Espalhe os montinhos de objetos e conte um deles em voz alta com a turma: "um, dois, três lápis!". Clique na célula B2 da planilha (no Excel ou no Google Planilhas) e digite 3, apertando Enter. Repita com mais um montinho. Depois selecione a tabelinha arrastando o mouse de A1 até o último número e clique no botão de gráfico (Inserir, depois Gráfico). As barrinhas aparecem. Diga: "Olha! O número virou desenho!"

3. Mão na massa (25 min). Leve as crianças aos computadores, cada um com a planilha pronta e um montinho de objetos. Guie todos juntos: contar o montinho, clicar na célula da coluna Quantidade e digitar o número, apertar Enter, repetir para o próximo objeto. Espere a turma toda preencher antes de seguir. Então, devagar e em coro, ajude cada um a selecionar a tabelinha e clicar no botão de gráfico. Passe de mesa em mesa comemorando cada gráfico que nasce. Use os cartões de algarismos para quem trocar os números.

4. Desafio e compartilhar (10 min). Proponha o desafio: contar mais um montinho e ver a barrinha nova aparecer no gráfico. Depois reúna a roda e peça que cada criança mostre o gráfico e diga qual é a barrinha mais alta.

## Como explicar para crianças de 5 a 9 anos

Use comparações concretas. Diga que cada barrinha é como uma torre de blocos: quanto mais blocos a gente conta, mais alta fica a torre. O número é o resultado da contagem, e o computador desenha a torre sozinho. Conte sempre com o dedo no objeto de verdade antes de digitar, para o número fazer sentido. Fale frases curtas, mostre antes de pedir e deixe a criança apertar a tecla e ver a barrinha crescer. Cada gráfico que aparece é motivo de festa.

## Erros comuns e como ajudar

- Digitar o número na coluna errada (na de nomes em vez da de números). Aponte a coluna Quantidade e diga: "Os números moram nesta fileira aqui."

- Esquecer de apertar Enter, então o número não "entra". Mostre a tecla Enter e peça que aperte depois de digitar.

- Soltar o mouse cedo demais ao selecionar e pegar só metade da tabelinha. Faça junto, segurando, e mostre os quadradinhos ficando pintados até o fim.

- Trocar algarismos parecidos, como 6 e 9, na hora de digitar. Use os cartões de números para a criança comparar e copiar o algarismo certo.`,
  exercicios: [
    {
      titulo: `Quem é a barrinha mais alta?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Comece na roda, com a planilha de exemplo e o gráfico colorido abertos no projetor. Aponte para as barrinhas e pergunte qual é a mais alta e qual é a mais baixinha. Vá introduzindo as palavras gráfico e barrinha naturalmente. Para quem ainda não lê números, foque na altura das barras: alto e baixinho. Faça a turma repetir em coro: "barrinha mais alta!".`,
      atividade: `Olhe o desenho na tela grande com o professor. Cada torrinha colorida é uma barrinha. Aponte com o dedo: qual barrinha é a MAIS ALTA? E qual é a MAIS BAIXINHA? Quando o professor perguntar, diga bem alto qual delas ganhou de altura!`,
      gabarito: `A criança acerta se apontar corretamente a barra mais alta e a mais baixa do gráfico, mesmo sem ler os números. Sinal de sucesso: associar barrinha alta a número maior e barrinha baixa a número menor. Não é preciso dizer o número exato, basta comparar as alturas e usar as palavras gráfico e barrinha.`,
    },
    {
      titulo: `Contando os montinhos`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Espalhe os montinhos de objetos (lápis, blocos, frutinhas) nas mesas. Faça um jogo de contagem: aponte um montinho e a turma conta junto em voz alta, com o dedo em cada objeto. Anote o número de cada montinho num cartaz ou no quadro, ao lado do nome do objeto. Este exercício prepara os números que serão digitados depois. Use os cartões de algarismos para mostrar como é o número que a turma contou.`,
      atividade: `Vamos contar de verdade! O professor mostra um montinho de cada vez. Aponte cada objeto com o dedinho e conte junto com a turma: um, dois, três... Quando terminar o montinho, todos falam o número final bem alto. Quantos lápis tem? Quantos blocos? Quantas frutas?`,
      gabarito: `A criança acerta se contar um montinho corretamente, encostando o dedo em cada objeto e dizendo o número final certo (aceitar diferença de 1 para os menores). Sinal de sucesso: entender que cada montinho tem um número, e que esse número será usado depois no computador. Confira contando junto se houver dúvida.`,
    },
    {
      titulo: `Digitando os números na planilha`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Demonstre primeiro no projetor bem devagar. Clique na célula da coluna Quantidade (B2), digite o número que a turma contou e aperte Enter, mostrando que o número "entrou" e o quadradinho de baixo ficou pronto. Depois guie a turma toda ao mesmo tempo, esperando todos preencherem o primeiro número antes de seguir para o próximo. Reforce sempre: clicar na coluna dos números, digitar, apertar Enter. Use os cartões para quem trocar algarismos.`,
      atividade: `Hora de levar os números para o computador! 1. Clique no quadradinho da coluna Quantidade, na frente do objeto certo. 2. Digite o número que você contou. 3. Aperte a tecla Enter. Pronto, o número entrou! Faça isso para cada objeto da sua lista.`,
      gabarito: `A criança acerta se digitar os números na coluna Quantidade (e não na de nomes), apertando Enter para cada um. Sinal de sucesso: cada número aparece no quadradinho certo, ao lado do nome do objeto correspondente. Aceitar ajuda na escolha do quadradinho; o essencial é o número certo no lugar certo.`,
    },
    {
      titulo: `Meu gráfico no papel`,
      tipo: `Desenho`,
      tempo: `10 min`,
      guiaProfessor: `Entregue a folha com a tabela em branco e o espaço para barrinhas. Peça que cada criança escreva (ou copie) os números que contou na tabela e depois pinte, ao lado, uma barrinha para cada número: número maior, barrinha mais alta. Para os menores, deixe pintar quadradinhos de cima para baixo como uma torre. Enquanto pintam, pergunte de mesa em mesa qual barrinha ficou mais alta, reforçando a ideia de que número vira desenho.`,
      atividade: `Agora você é o computador! Na sua folha, escreva os números que contou. Depois, ao lado de cada número, pinte uma barrinha: se o número for grande, pinte uma barrinha bem alta; se for pequeno, pinte uma baixinha. No fim, qual barrinha ficou a mais alta de todas?`,
      gabarito: `A criança acerta se desenhar barrinhas cujas alturas respeitem a ordem dos números (o maior número com a barra mais alta). Não há cor certa nem errada: o objetivo é fixar que número maior vira barrinha maior. Aceitar alturas aproximadas, desde que a barrinha do maior número seja claramente a mais alta.`,
    },
    {
      titulo: `Desafio: o botão mágico do gráfico`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Proponha o desafio depois que todos já tiverem digitado os números. Guie cada criança a selecionar a tabelinha, arrastando o mouse do primeiro quadradinho até o último número, e a clicar no botão de gráfico (Inserir, depois Gráfico, no Excel ou no Google Planilhas). Ajude quem soltar o mouse cedo demais. Quando as barrinhas aparecerem, comemore. Conduza a roda final: cada criança mostra o gráfico e diz qual barrinha é a mais alta.`,
      atividade: `Desafio mágico do dia! 1. Passe o mouse por cima dos quadradinhos com os números, deixando-os pintados. 2. Clique no botão de gráfico (Inserir e depois Gráfico). 3. Olhe a tela: PUF! Os números viraram barrinhas! Mostre o seu gráfico para a turma e diga qual barrinha ficou mais alta.`,
      gabarito: `A criança acerta se conseguir, com ou sem ajuda, selecionar a tabelinha e clicar no botão de gráfico, fazendo as barrinhas aparecerem na tela. Sinal de sucesso: surge um gráfico de barras a partir dos números digitados, e a criança identifica a barrinha mais alta. Aceitar ajuda do professor na seleção; o essencial é entender que o número virou desenho.`,
    },
  ],
};
