import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "O que é um banco de dados?",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Entender o que é um banco de dados e criar a primeira tabela com os campos do site do aluno.`,
  descricao: `O seu site já tem páginas bonitas, mas até agora tudo o que aparece nele é fixo: o texto é o mesmo para todo mundo. Quando um visitante preenche um cadastro, manda uma mensagem ou faz uma pontuação num jogo, essas informações precisam ir para algum lugar que não some quando a página é fechada. Esse lugar organizado é o banco de dados. Ele é o caderno digital do site, onde guardamos tudo de forma que dá para encontrar depois.

A melhor comparação para esta idade é a planilha. Imagine uma planilha de Excel ou Google Sheets com uma aba chamada "alunos". A primeira linha tem os títulos das colunas (nome, email, idade) e cada linha de baixo é uma pessoa diferente. Um banco de dados funciona quase igual: ele guarda os dados em tabelas, e cada tabela tem colunas (os tipos de informação) e linhas (cada registro de verdade). A diferença é que o banco de dados aguenta milhares de linhas, faz buscas rápidas e várias pessoas podem usá-lo ao mesmo tempo.

Nesta aula o foco é a ideia e a estrutura, não a programação avançada. O aluno vai perceber que, antes de guardar qualquer coisa, precisamos decidir o que queremos guardar. Se o site terá um formulário de contato, o banco precisa de uma tabela de mensagens com colunas como nome, email e texto. Se o site terá um placar de jogo, precisa de uma tabela de pontuações. Pensar nas colunas certas é metade do trabalho.

Ao final, cada aluno terá desenhado e criado a sua primeira tabela, com os campos do próprio projeto. Esse é o alicerce das próximas aulas, quando vamos realmente guardar e consultar dados. Hoje plantamos a semente: organizar a informação antes de programar.`,
  materiais: [
    `Computadores com acesso ao serviço de banco de dados, editor de código e navegador`,
    `Projetor ou TV para a demonstração do professor`,
    `Conta gratuita criada em uma ferramenta de banco de dados online (por exemplo, um painel que mostre tabelas, linhas e colunas)`,
    `Planilha de exemplo pronta (Google Sheets ou Excel) com uma aba "alunos" preenchida`,
    `Folha impressa ou caderno para o aluno desenhar a tabela antes de criar no computador`,
    `Arquivo de exemplo com a lista de campos sugeridos para cada tipo de projeto (cadastro, mensagens, pontuações)`,
  ],
  conceitosChave: [
    `Banco de dados — lugar organizado, dentro do computador ou na internet, onde o site guarda informações que não podem se perder.`,
    `Tabela — conjunto de dados sobre um mesmo assunto, parecido com uma aba de planilha (por exemplo, a tabela de alunos).`,
    `Coluna — o tipo de informação que a tabela guarda, como nome, email ou idade; é o título no topo.`,
    `Linha (ou registro) — uma entrada completa na tabela, ou seja, os dados de uma pessoa ou de um item.`,
    `Campo — o cruzamento de uma linha com uma coluna; é o valor exato, como o nome de um aluno específico.`,
    `Tipo de dado — a natureza da informação: texto, número ou data; ajuda o banco a entender o que está guardando.`,
    `Chave (id) — número único que identifica cada linha sem confundir uma com a outra, como um número de matrícula.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista para dar esta aula. A ideia central é simples: banco de dados é uma planilha turbinada. Se você já mexeu em Excel ou Google Sheets, você já entende o suficiente. Toda a aula gira em torno de três palavras: tabela, linha e coluna. Antes de entrar na sala, abra a ferramenta de banco de dados que a escola usa, faça login e confirme que você consegue criar uma tabela nova e adicionar colunas. Tenha também uma planilha de exemplo já aberta, porque a comparação visual entre planilha e banco de dados é o coração da explicação. Não tente ensinar consultas ou comandos hoje; isso é assunto da Aula 2. Hoje o objetivo é só compreender a estrutura e criar a primeira tabela.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte à turma onde eles acham que vão parar os dados quando alguém preencher um formulário no site. Deixe-os chutar. Depois mostre a planilha de exemplo com a aba "alunos" e diga: "Já guardamos dados assim a vida toda. Hoje vamos conhecer a versão profissional disso."

Conteúdo novo guiado (15 min): com o projetor ligado, mostre a planilha lado a lado com a ferramenta de banco de dados. Aponte: a aba vira tabela, os títulos do topo viram colunas, cada pessoa vira uma linha. Crie ao vivo uma tabela chamada alunos com três colunas. Se a ferramenta usar comandos, mostre o código exato, escrevendo letra por letra e explicando cada parte. Exemplo de comando para criar a tabela:

CREATE TABLE alunos (
  id INTEGER,
  nome TEXT,
  email TEXT,
  idade INTEGER
);

Explique linha por linha: a palavra CREATE TABLE manda criar a tabela; alunos é o nome dela; cada linha de dentro é uma coluna seguida do tipo de dado; INTEGER guarda números, TEXT guarda palavras; o ponto e vírgula no final encerra o comando. Diga que id é a chave, um número único para não confundir um aluno com o outro.

Mão na massa (25 min): cada aluno desenha primeiro no papel a tabela do próprio projeto. Quem fará formulário de contato cria a tabela mensagens com as colunas id, nome, email e texto. Quem fará placar de jogo cria a tabela pontuacoes com id, jogador e pontos. Depois eles reproduzem a tabela na ferramenta, escolhendo o tipo certo de cada coluna. Circule pela sala conferindo se cada coluna tem um tipo coerente: número para idade e pontos, texto para nome e email.

Desafio e compartilhar (10 min): peça que cada aluno adicione uma terceira coluna inteligente que faça sentido no projeto dele (por exemplo, data da mensagem ou nível do jogador). Em seguida, dois ou três alunos mostram a tabela na TV e explicam por que escolheram aquelas colunas.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que a tabela é como um armário de gavetas: cada gaveta (coluna) guarda um tipo de coisa, e cada prateleira (linha) é uma pessoa. Repita bastante a frase "coluna é o tipo de informação, linha é uma pessoa de verdade". Evite termos difíceis como esquema ou normalização. Quando falar de tipo de dado, brinque: "Número é para contar e calcular; texto é para ler. Você não soma dois nomes, então nome é texto." Mostre sempre na tela enquanto fala, porque ver a tabela crescer torna a ideia concreta.

## Erros comuns e como ajudar

O erro mais comum é confundir linha com coluna. Reforce sempre apontando para a tela. Outro erro é escolher o tipo errado, como colocar idade ou pontos como texto; explique que assim o banco não consegue calcular depois. Alguns alunos querem guardar tudo numa coluna só, juntando nome e email no mesmo campo; mostre que separar facilita encontrar a informação. Há quem esqueça a coluna id; explique com calma que, sem ela, dois alunos com o mesmo nome ficariam impossíveis de distinguir. Por fim, se alguém travar na escolha das colunas, volte à pergunta simples: "O que o seu site precisa lembrar de cada visitante?"`,
  exercicios: [
    {
      titulo: `Planilha ou banco de dados?`,
      tipo: `Discussão em dupla`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre uma planilha de alunos no projetor e peça que as duplas apontem onde estão as colunas e onde estão as linhas. O objetivo é fixar o vocabulário antes de criar qualquer tabela.`,
      atividade: `Olhando para a planilha de exemplo, responda em dupla: quantas colunas ela tem? Quantas linhas de pessoas? Diga em voz alta qual é a coluna e qual é a linha.`,
      gabarito: `Na planilha de exemplo com as colunas nome, email e idade, há 3 colunas. As linhas de pessoas são todas menos a primeira (a primeira é o título). Coluna é o tipo de informação no topo (nome, email, idade); linha é cada pessoa cadastrada embaixo.`,
    },
    {
      titulo: `Caça aos campos`,
      tipo: `Atividade escrita`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que o aluno liste, no papel, todas as informações que o site dele precisa guardar de cada visitante. Aceite respostas variadas; o foco é pensar antes de programar.`,
      atividade: `Escreva pelo menos 4 informações que o seu site precisa lembrar de cada pessoa. Exemplo para um formulário de contato.`,
      gabarito: `Resposta varia por projeto. Para um formulário de contato, uma boa lista é: id, nome, email e mensagem. Para um placar de jogo: id, jogador, pontos e data. O essencial é incluir um id e separar cada informação em um campo próprio.`,
    },
    {
      titulo: `Escolha o tipo certo`,
      tipo: `Exercício de classificação`,
      tempo: `8 minutos`,
      guiaProfessor: `Liste no quadro alguns campos e peça que o aluno marque se cada um é texto ou número. Reforce a regra: o que serve para calcular é número; o que serve para ler é texto.`,
      atividade: `Para cada campo, escreva se o tipo é TEXT (texto) ou INTEGER (número): nome, idade, email, pontos, jogador.`,
      gabarito: `nome = TEXT; idade = INTEGER; email = TEXT; pontos = INTEGER; jogador = TEXT. Regra: número (INTEGER) é para o que você conta ou soma; texto (TEXT) é para o que você lê.`,
    },
    {
      titulo: `Crie a sua primeira tabela`,
      tipo: `Mão na massa no computador`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe cada aluno criando a tabela do próprio projeto na ferramenta. Confira se há uma coluna id e se os tipos estão coerentes. Se a ferramenta usar comandos, valide o código com calma.`,
      atividade: `Crie no computador a tabela do seu projeto com pelo menos 4 colunas, sendo uma delas o id. Escolha o tipo certo de cada coluna.`,
      gabarito: `Exemplo válido para um formulário de contato, em comando: CREATE TABLE mensagens ( id INTEGER, nome TEXT, email TEXT, texto TEXT ); Exemplo para um placar de jogo: CREATE TABLE pontuacoes ( id INTEGER, jogador TEXT, pontos INTEGER, data TEXT ); A tabela é aceita se tem nome claro, coluna id e tipos coerentes (número para o que se calcula, texto para o que se lê).`,
    },
    {
      titulo: `A coluna inteligente`,
      tipo: `Desafio criativo`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que o aluno acrescente à tabela uma coluna nova que torne o site mais útil e explique por que ela é importante. Valorize a justificativa, não só a coluna em si.`,
      atividade: `Adicione mais uma coluna à sua tabela que deixe o site mais esperto e escreva uma frase explicando para que ela serve.`,
      gabarito: `Resposta varia. Exemplos bons: na tabela mensagens, acrescentar uma coluna data TEXT para saber quando a mensagem chegou; na tabela pontuacoes, acrescentar nivel INTEGER para mostrar a fase em que o jogador estava. Aceite qualquer coluna com tipo coerente e uma justificativa clara de utilidade.`,
    },
  ],
};
