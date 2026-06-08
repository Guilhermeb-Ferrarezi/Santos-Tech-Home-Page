import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Minha Tabela Pronta para Mostrar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança termina a sua própria tabela na planilha, deixa-a bonita com cores e bordas, confere se está completa e a apresenta finalizada para a turma.`,
  descricao: `Esta é a última aula do mês da Primeira Planilha e o grande dia da turma. Durante quatro semanas cada criança aprendeu a viajar pelo mapa da planilha, a achar as células pelo endereço, a escrever as primeiras palavras e números, a montar a sua tabelinha, a pintar as células e a caprichar com bordas. Hoje todo esse trabalho ganha um acabamento e uma plateia. Cada aluno abre a sua própria tabela (a sua coleção, as suas notas ou o seu time), dá os últimos retoques de cor e borda, confere se está tudo no lugar e mostra a tabela pronta para os colegas.

A aula é de consolidação. Não há nenhum botão novo para aprender: tudo o que as crianças vão usar hoje elas já viram nas semanas anteriores. O segredo é juntar as peças num só lugar. Uma tabela bonita e completa tem três coisas: o título lá em cima dizendo do que é a tabela, os cabeçalhos das colunas dizendo o que cada coluna guarda, e os dados preenchidos nas células de baixo. Por cima disso vem o capricho: o cabeçalho pintado de uma cor forte, as células com uma borda em volta formando a grade, e tudo alinhado e organizado. É a diferença entre um caderno rabiscado e um caderno caprichado.

Para crianças de 5 a 9 anos, a melhor imagem é a de arrumar o quarto para receber visita. Durante o mês a criança foi colocando os brinquedos na estante (os dados nas células); hoje ela passa um paninho, alinha tudo bonitinho e abre a porta para os amigos verem. A planilha vira o quarto arrumado, e a apresentação é a visita chegando. O clima do dia deve ser de festa, acolhimento e orgulho, nunca de prova ou cobrança. Ninguém é avaliado por ter a tabela perfeita: todos são aplaudidos por terem construído a sua e terem coragem de mostrar.

O papel do professor hoje é mais de organizador de uma pequena exposição do que de instrutor. Você ajuda cada criança a abrir o seu arquivo, relembra com a turma o checklist do que uma tabela pronta precisa ter, circula dando os últimos retoques junto com elas e, no fim, prepara o projetor para que cada aluno mostre a sua obra. Ao terminar a aula, a turma fecha o mês inteiro com a sensação de conquista: cada um saiu com uma tabela de verdade, feita com as próprias mãos, bonita e pronta para mostrar para a família.`,
  materiais: [
    `Um computador por aluno, com o Excel ou o Google Planilhas já aberto e a tabela que cada criança vem construindo no mês já localizada e pronta para abrir (um arquivo por aluno).`,
    `Computador do professor ligado a um projetor ou televisão grande, testado antes da aula, para demonstrar os retoques e para cada criança apresentar a sua tabela para a turma toda.`,
    `Uma tabela modelo do professor, simples e completa (com título, cabeçalhos coloridos, dados e bordas), já pronta para abrir e servir de exemplo do que é uma tabela caprichada.`,
    `Um cartaz grande na parede com o checklist da tabela pronta em desenhos: título, nomes das colunas, dados preenchidos, cabeçalho pintado e bordas em volta.`,
    `Cadeiras ou um tapete organizados em formato de plateia, virados para a tela, para a turma assistir confortável às apresentações.`,
    `Adesivos, medalhas de papel ou certificados de "Construtor de Tabelas" para entregar a cada criança no final, sem exceção.`,
    `Lista com o nome de todos os alunos e a ordem de apresentação, mais lápis de cor e papel para a atividade de desenho.`,
  ],
  conceitosChave: [
    `Tabela pronta — a tabela completa e caprichada, com título, nomes das colunas, dados preenchidos, cores e bordas, prontinha para mostrar.`,
    `Checklist — a listinha de conferência onde a gente marca cada parte que a tabela precisa ter, para ver se não esqueceu nada.`,
    `Cabeçalho — a primeira linha da tabela, com os nomes das colunas, que diz o que cada coluna guarda (por exemplo, Nome e Idade).`,
    `Preencher — escrever os dados dentro das células vazias para a tabela ficar completa, sem buracos.`,
    `Pintar a célula — deixar uma célula colorida usando o baldinho de tinta para destacar, como o cabeçalho.`,
    `Borda — a linha que a gente desenha em volta das células para formar a grade e deixar a tabela arrumada.`,
    `Apresentar — ficar na frente e mostrar para a turma a tabela que você construiu, contando do que ela é.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não vai ensinar nenhuma ferramenta nova: o mês inteiro já passou. A aula é de CONSOLIDAÇÃO e CELEBRAÇÃO. Seu papel é ajudar cada criança a finalizar a tabela própria, conferir se está completa e organizar uma pequena exposição em que cada uma apresenta a sua. O clima é de festa, sem cobrança. Nenhuma criança é avaliada por ter a tabela perfeita; todas são aplaudidas por terem construído a sua.

Relembre os três retoques que vão ser usados, todos já ensinados nas semanas anteriores. Para PINTAR uma célula: selecione a célula (clique nela) ou várias arrastando, e use o baldinho de tinta. No Excel, fica na aba "Página Inicial", no botão "Cor do Preenchimento" (o ícone de baldinho); clique na setinha ao lado para escolher a cor. No Google Planilhas, o baldinho fica na barra de cima, no ícone "Cor de preenchimento". Para fazer BORDAS: selecione as células da tabela e clique no botão de bordas (um quadradinho dividido em quatro); no Excel está na "Página Inicial", e a opção mais usada é "Todas as Bordas"; no Google Planilhas o ícone de bordas fica na barra de cima, e escolha "Todas as bordas". Para CONFERIR, basta olhar: tem título? Tem nomes nas colunas? Tem dados em todas as linhas? O cabeçalho está pintado? Tem grade de bordas? Deixe a sua tabela modelo aberta e testada antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Excel / Google Planilhas)

1. Aquecimento e revisão (10 min). Reúna a turma em roda. Relembre o mês inteiro com perguntas: "O que a gente aprendeu a fazer na planilha?". Deixe falarem sobre células, endereços, escrever, cores e bordas. Mostre o cartaz do checklist e leia junto, apontando cada desenho: título, nomes das colunas, dados, cabeçalho pintado, bordas. Diga que hoje cada um vai deixar a sua tabela prontinha e mostrar para os amigos.

2. Conteúdo guiado / demonstração (15 min). No projetor, abra a sua tabela modelo, de propósito ainda sem os retoques. Faça os três passos devagar. Para pintar o cabeçalho: selecione a linha de cima, vá no baldinho ("Cor do Preenchimento" na aba "Página Inicial" do Excel, ou o ícone de baldinho na barra do Google Planilhas) e escolha uma cor. Para as bordas: selecione a tabela toda, clique no botão de bordas e escolha "Todas as Bordas". Por fim, percorra o checklist em voz alta conferindo cada item. Diga a frase de ouro: "Título, nomes, dados, cor e borda: minha tabela está pronta!".

3. Mão na massa / finalização (25 min). Leve cada criança ao seu computador e ajude a abrir o arquivo da sua tabela. Peça que sigam o checklist do cartaz: primeiro conferir se tem título e nomes de colunas; depois preencher as células que ainda estiverem vazias; depois pintar o cabeçalho com o baldinho; e por fim colocar "Todas as Bordas" em volta. Circule de mesa em mesa, dando os últimos retoques junto com cada um e comemorando cada tabela que vai ficando pronta. Quem terminar pode escolher uma segunda cor ou capricho.

4. Desafio e compartilhar (10 min). Monte a plateia. Chame as crianças uma a uma pela lista, ajude a deixar a tabela na tela do projetor e deixe cada uma contar do que é a sua tabela e apontar a parte de que mais gostou. Puxe os aplausos no fim de cada apresentação. Entregue a medalha ou o certificado de "Construtor de Tabelas" para todos e feche com uma grande salva de palmas pelo mês inteiro.

## Como explicar para crianças de 5 a 9 anos

Use a imagem de arrumar o quarto para a visita: "A gente já guardou tudo na estante; agora vamos deixar bonito e abrir a porta para os amigos verem." Para o checklist, diga que é uma listinha de caça ao tesouro: a cada parte que a tabela tem, a gente "marca um X" e comemora. Compare o cabeçalho pintado com o título de um livro bem destacado, e as bordas com o contorno de um desenho que a gente passa por cima para ficar firme. Fale frases curtas, mostre você primeiro e deixe a criança dar o clique sozinha. Comemore alto cada tabela que fica pronta.

## Erros comuns e como ajudar

- Pintar a tabela inteira em vez de só o cabeçalho. Lembre com carinho: "A cor forte é só na primeira linha, a dos nomes; o resto fica branquinho para ler bem." Ajude a selecionar só a linha de cima.

- Esquecer células vazias no meio dos dados. Percorra o checklist apontando: "Aqui tem um buraquinho, vamos preencher?". Mostre a célula que falta.

- Selecionar só uma célula na hora das bordas e a grade sair incompleta. Mostre como arrastar para selecionar a tabela toda antes de clicar em "Todas as Bordas".

- Timidez na hora de apresentar. Nunca force. Ofereça mostrar a tabela em dupla, ou só apontar a parte preferida enquanto você narra. Elogie a coragem de tentar.

- Mexer demais e bagunçar o que já estava pronto. Tranquilize: se algo sair errado, dá para desfazer apertando as teclas Ctrl e Z juntas, voltando ao que estava.`,
  exercicios: [
    {
      titulo: `O checklist da tabela pronta`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Comece na roda, longe das telas, com o cartaz do checklist à vista. Aponte cada desenho e leia em voz alta: título, nomes das colunas, dados preenchidos, cabeçalho pintado e bordas em volta. Peça que a turma repita cada item com você. Explique que hoje cada um vai conferir a sua tabela usando essa listinha, como uma caça ao tesouro, marcando um "X" de mentirinha em cada parte que já tem. Reforce que toda tabela conta, não precisa ser perfeita.`,
      atividade: `Vamos ler juntos a listinha da tabela pronta! Olhe o cartaz e diga com o professor: 1. Tem título lá em cima? 2. Tem o nome de cada coluna? 3. Tem dados preenchidos? 4. O cabeçalho está pintado? 5. Tem bordas em volta? A cada item, levante o dedinho e diga "tem!".`,
      gabarito: `Acertou quem consegue nomear ao menos três partes que uma tabela pronta precisa ter, olhando o cartaz e repetindo. Exemplos de respostas certas: "Tem que ter título", "Tem que ter os nomes das colunas", "Tem que ter as bordas". Qualquer participação na roda conta como sucesso. O objetivo é que a criança guarde o checklist na cabeça para usar no computador.`,
    },
    {
      titulo: `Conferindo a minha tabela`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Leve cada criança ao seu computador e ajude a abrir o arquivo da sua tabela. Antes de qualquer retoque, peça que ela apenas confira, usando o checklist do cartaz: olhar se tem título, se as colunas têm nomes e se sobrou alguma célula vazia no meio dos dados. Circule de mesa em mesa apontando junto. Onde faltar um dado, ajude a clicar na célula vazia e digitar o que falta. O foco é deixar a tabela completa, sem buracos, antes de enfeitar.`,
      atividade: `Hora de conferir! 1. Abra a sua tabela no computador. 2. Olhe lá em cima: tem um título? 3. Olhe a primeira linha: cada coluna tem um nome? 4. Procure células vaziazinhas no meio dos dados e clique nelas para preencher. Quando não sobrar nenhum buraco, sua tabela está completa!`,
      gabarito: `Acertou quem abre a própria tabela e percorre o checklist, preenchendo ao menos uma célula que estava faltando, mesmo com ajuda. Exemplo de sucesso: a criança percebe um buraco nos dados, clica na célula vazia e digita o que falta. Perceber que falta um título ou um nome de coluna também conta. O objetivo é uma tabela completa, sem espaços vazios no meio.`,
    },
    {
      titulo: `Os últimos retoques: cor e borda`,
      tipo: `Prática no computador`,
      tempo: `14 min`,
      guiaProfessor: `Este é o coração da aula. No projetor, refaça devagar os dois retoques na sua tabela modelo. Para pintar o cabeçalho: selecione a primeira linha e use o baldinho ("Cor do Preenchimento" na aba "Página Inicial" do Excel, ou o ícone de baldinho na barra do Google Planilhas), escolhendo uma cor forte. Para as bordas: selecione a tabela toda arrastando e clique no botão de bordas, escolhendo "Todas as Bordas". Depois guie a turma a fazer o mesmo na própria tabela, esperando todos chegarem em cada passo. Lembre que dá para desfazer com Ctrl e Z se errar.`,
      atividade: `Vamos deixar bonita! 1. Clique e arraste para selecionar a primeira linha, a dos nomes. 2. Ache o baldinho de tinta e escolha uma cor forte para pintar o cabeçalho. 3. Agora selecione a tabela toda arrastando por cima dela. 4. Clique no botão de bordas e escolha "Todas as Bordas". Pronto: sua tabela ganhou cor e grade!`,
      gabarito: `Acertou quem pinta o cabeçalho com o baldinho e coloca "Todas as Bordas" em volta da tabela, mesmo com pequenas ajudas. Sinal de sucesso: a primeira linha aparece colorida e a tabela ganha uma grade de linhas em volta de todas as células. Pintar só uma parte e depois corrigir, ou usar Ctrl e Z para refazer, também conta. O objetivo é a tabela ficar caprichada.`,
    },
    {
      titulo: `Desenhando a minha tabela no papel`,
      tipo: `Desenho`,
      tempo: `8 min`,
      guiaProfessor: `Entregue uma folha e lápis de cor para quem terminar os retoques no computador, enquanto os outros finalizam. Peça que cada criança desenhe no papel a sua própria tabela do jeito que ficou na tela: um retângulo dividido em colunas e linhas, com o título em cima, os nomes das colunas na primeira linha pintada e algumas células com os dados. Enquanto desenham, pergunte de mesa em mesa do que é a tabela e qual cor escolheram, reforçando as palavras título, cabeçalho e borda.`,
      atividade: `Desenhe a sua tabela no papel, igual ficou no computador! 1. Faça um retângulo grande e divida em colunas e linhas com uma régua ou à mão. 2. Escreva o título da sua tabela lá em cima. 3. Pinte a primeira linha, a dos nomes das colunas. 4. Escreva alguns dados nas células de baixo. Capriche nas bordas em volta!`,
      gabarito: `Acertou quem desenha um retângulo dividido em colunas e linhas, com título em cima e a primeira linha pintada representando o cabeçalho. Não há desenho certo ou errado: o objetivo é fixar a estrutura de uma tabela pronta (título, cabeçalho colorido, dados e bordas). Saber dizer "esta linha pintada é o cabeçalho" ou "estas são as bordas" conta como sucesso.`,
    },
    {
      titulo: `Mostrando a minha tabela para a turma`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Este é o ponto alto e o fechamento do mês. Monte a plateia virada para o projetor e chame as crianças uma a uma pela lista, como um apresentador: "Com vocês, a tabela do João!". Ajude cada uma a deixar a sua tabela na tela grande. Deixe a criança contar do que é a tabela (a coleção, as notas, o time) e apontar a parte de que mais gostou. Fique ao lado para ajudar quem travar; as tímidas podem apresentar em dupla ou só apontar enquanto você narra. Puxe os aplausos no fim de cada uma e entregue o certificado de "Construtor de Tabelas".`,
      atividade: `Hora de mostrar a sua obra! 1. Espere o professor chamar o seu nome e venha até a frente. 2. Deixe a sua tabela aparecer na tela grande. 3. Conte para a turma do que é a sua tabela. 4. Aponte a parte de que você mais gostou (a cor, as bordas ou um dado) e receba os aplausos!`,
      gabarito: `Acertou toda criança que mostra a sua tabela para a turma, em qualquer nível: sozinha, em dupla, falando uma frase ou só apontando enquanto o professor narra. Exemplo de sucesso: a criança deixa a tabela na tela, diz do que ela é e mostra uma parte de que gostou, recebendo aplausos. Não há resposta errada; o objetivo é a coragem de apresentar a própria criação e fechar o mês celebrando.`,
    },
  ],
};
