import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Meu primeiro código de verdade",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Escrever do zero um script no Google Apps Script que acessa a planilha e grava um valor em uma célula, salvando, autorizando a execução e vendo o resultado aparecer sozinho na aba.`,
  descricao: `Nas aulas anteriores os alunos conheceram o editor do Apps Script e leram a anatomia de um script pronto. Hoje chega o grande momento: eles vão escrever o próprio código, linha por linha, sem copiar de um modelo. É a primeira vez que o aluno digita comandos que ele entende e vê a planilha obedecer sozinha. Essa sensação de "eu mandei e a máquina fez" é o coração da aula.

O objetivo é pequeno de propósito, para caber em uma hora e dar certo na primeira tentativa: criar uma função, pegar a planilha ativa, escolher uma célula e escrever um texto dentro dela. Só isso. Parece simples, mas reúne tudo o que importa em programação de verdade: dar um nome à função, usar comandos para conversar com o programa (no caso, o SpreadsheetApp), apontar para um lugar exato (a célula) e mandar uma ação (gravar um valor). Quando o aluno aperta o botão de executar e a palavra aparece na célula, ele entende, na prática, o que é código.

Três ideias novas aparecem aqui e merecem cuidado. A primeira é salvar antes de rodar: o Apps Script não executa o que ainda não foi salvo. A segunda é a autorização: na primeira vez que um script seu mexe na sua planilha, o Google pede permissão, e isso assusta quem nunca viu. A terceira é a leitura do resultado: o aluno precisa olhar para a aba e confirmar que a célula mudou. Esses três passos transformam um código escrito em um código que funciona.

Ao final, cada aluno terá um script próprio, com o nome que ele escolheu, que escreve uma mensagem em uma célula da planilha. É uma vitória concreta e o degrau direto para as próximas aulas, em que eles vão ler células, escrever várias de uma vez e ligar o código a um botão.`,
  materiais: [
    `Computadores com navegador e cada aluno logado em sua conta Google (Gmail) já usada nas aulas anteriores`,
    `Uma planilha em branco no Google Planilhas por aluno, com algumas abas e células livres para os testes`,
    `Projetor ou tela grande para o professor demonstrar a digitação do código linha a linha`,
    `Editor do Apps Script acessível pelo menu Extensões da planilha (sem instalação, abre no navegador)`,
    `Folha ou slide de apoio com o código-modelo da aula e os nomes dos comandos para consulta rápida`,
    `Conexão com a internet estável, já que o Apps Script roda nos servidores do Google`,
  ],
  conceitosChave: [
    `Função — um bloco de código com um nome que guarda uma tarefa para ser executada quando você chamar.`,
    `SpreadsheetApp — o comando do Apps Script que serve de ponte entre o seu código e o Google Planilhas.`,
    `getActiveSpreadsheet — comando que pega a planilha que está aberta no momento, para o código poder trabalhar nela.`,
    `getActiveSheet — comando que pega a aba ativa (a guia que está selecionada) dentro da planilha.`,
    `getRange — comando que aponta para uma célula ou um conjunto de células, usando o endereço delas, como A1.`,
    `setValue — comando que escreve, ou seja, grava um valor dentro da célula que você apontou.`,
    `Autorização — a permissão que o Google pede na primeira execução para deixar o seu script mexer na sua planilha.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para conduzir esta aula. Precisa apenas conseguir digitar quatro linhas de código e entender o que cada uma faz. O código inteiro da aula é este:

function escreverNaCelula() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getActiveSheet();
  aba.getRange("A1").setValue("Eu programei isto!");
}

Linha 1: "function escreverNaCelula()" cria a função e dá a ela um nome. Linha 2: guarda a planilha aberta dentro de uma variável chamada "planilha". Linha 3: pega a aba que está selecionada e guarda em "aba". Linha 4: aponta para a célula A1 e escreve um texto nela. O ponto liga um comando ao próximo, como uma corrente. Antes da aula, faça exatamente isto numa planilha sua, salve, rode e veja a frase aparecer em A1. Assim você vivencia os mesmos passos e os mesmos avisos que os alunos verão.

## Passo a passo da aula

Aquecimento (10 min): retome a aula anterior com uma pergunta no projetor: "O que é uma função?". Ouça as respostas e resuma: é uma tarefa com nome. Abra a planilha e o caminho já conhecido: menu Extensões, depois Apps Script. Mostre o editor vazio e diga que hoje eles escrevem o código do zero, sem copiar.

Conteúdo novo guiado (15 min): com o editor no projetor, apague o conteúdo de exemplo. Digite a função linha a linha, falando em voz alta o que cada parte faz. Escreva "function escreverNaCelula() {" e feche a chave embaixo. Dentro, digite a linha do SpreadsheetApp.getActiveSpreadsheet(), depois getActiveSheet(), depois getRange("A1").setValue("Eu programei isto!"). Agora salve: clique no ícone de disquete ou aperte Ctrl + S. Em seguida, no topo, confirme que o nome "escreverNaCelula" está selecionado na lista de funções e clique no botão Executar (o triângulo de "play"). Aparece uma janela pedindo autorização: clique em Revisar permissões, escolha sua conta Google, clique em Avançado, depois em Ir para o projeto e em Permitir. Volte para a aba da planilha: a célula A1 mostra a frase. Comemore esse momento.

Mão na massa (25 min): cada aluno abre sua planilha, vai em Extensões, Apps Script, e digita a própria função. Peça que troquem o nome da função (por exemplo "meuPrimeiroCodigo"), a célula (por exemplo B2) e a mensagem. Eles salvam, executam, passam pela autorização e conferem o resultado na aba. Circule pela sala ajudando com a janela de permissão, que é o ponto onde mais travam.

Desafio e compartilhar (10 min): proponha que mudem a célula e a mensagem e rodem de novo, vendo o valor antigo ser substituído. Dois ou três alunos mostram a planilha no projetor e leem em voz alta a frase que o código deles escreveu.

## Como explicar de forma clara

Use comparações simples. Diga que a função é uma "receita com nome": você escreve os passos uma vez e depois é só chamar pelo nome. Compare o ponto entre os comandos com "ir pegando uma coisa dentro da outra": pego a planilha, dentro dela a aba, dentro da aba a célula. Chame o getRange de "endereço" e o setValue de "escrever ali". Sobre a autorização, explique com calma: "o Google só está perguntando se você deixa o seu próprio código mexer na sua planilha; é seguro, pode permitir". Mostre fazendo e depois deixe que repitam.

## Erros comuns e como ajudar

O erro mais comum é esquecer de salvar antes de rodar: se nada acontece, lembre o Ctrl + S. Outro é errar uma letra de SpreadsheetApp, getRange ou setValue, que diferenciam maiúsculas de minúsculas; mostre o erro em vermelho e corrija junto. Faltou um parêntese, uma aspa ou o ponto e vírgula também trava; ensine a ler a mensagem de erro com calma. Na autorização, muitos param na tela de aviso; oriente clicar em Avançado e depois em Ir para o projeto. Por fim, se a frase não aparece, peça que voltem para a aba certa da planilha e confiram o endereço da célula usado no getRange.`,
  exercicios: [
    {
      titulo: `Escrevendo a primeira função`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno chegou ao editor pelo caminho Extensões, Apps Script. Acompanhe a digitação no projetor, escrevendo junto. Reforce salvar com Ctrl + S antes de executar e apoie na janela de autorização.`,
      atividade: `No editor do Apps Script, apague o exemplo e digite esta função exatamente: function escreverNaCelula() { var planilha = SpreadsheetApp.getActiveSpreadsheet(); var aba = planilha.getActiveSheet(); aba.getRange("A1").setValue("Eu programei isto!"); }. Salve com Ctrl + S, clique em Executar, autorize quando o Google pedir e volte para a planilha para ver a célula A1.`,
      gabarito: `O aluno digita a função sem erros, salva, executa e passa pela autorização. Ao voltar para a aba, a célula A1 mostra a frase "Eu programei isto!". Resultado esperado: a frase aparece sozinha na planilha, sem o aluno ter digitado nada na célula.`,
    },
    {
      titulo: `Trocando célula e mensagem`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Explique que o endereço dentro do getRange e a frase dentro do setValue podem ser mudados livremente. Mostre no projetor onde fica cada um. Lembre de salvar e executar de novo após a mudança.`,
      atividade: `Na sua função, troque o endereço "A1" por "C3" e troque a mensagem por uma frase sua, como "Eu escrevi este código". Salve, execute e confira: agora a frase deve aparecer na célula C3, e não mais na A1. Limpe a planilha e rode novamente para ter certeza.`,
      gabarito: `O aluno altera o getRange para "C3" e muda o texto do setValue. Após salvar e executar, a nova frase aparece na célula C3. Resultado esperado: o aluno entende que getRange define o lugar e setValue define o conteúdo, e consegue controlar os dois.`,
    },
    {
      titulo: `Renomeando a função em dupla`,
      tipo: `Em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Organize duplas. Avise que ao trocar o nome da função é preciso selecionar o novo nome na lista de funções do topo antes de clicar em Executar. Peça que um digite e o outro confira cada passo, depois trocam.`,
      atividade: `Em dupla, escolham juntos um novo nome para a função, por exemplo "meuPrimeiroCodigo". Troquem o nome na primeira linha (function meuPrimeiroCodigo()), salvem, selecionem esse nome na lista de funções do topo e executem. Confiram se a mensagem aparece na célula escolhida.`,
      gabarito: `A dupla renomeia a função corretamente, mantendo os parênteses e a chave. Antes de executar, seleciona o novo nome na lista de funções. Após rodar, a mensagem aparece na célula. Resultado esperado: percebem que o nome da função é livre, mas precisa estar selecionado para executar.`,
    },
    {
      titulo: `Roda de conversa: o que é código de verdade`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza uma conversa curta para fixar os conceitos da aula. Use as palavras função, comando, célula e autorização. Valorize o sentimento de ter feito a máquina obedecer e ligue isso às próximas aulas.`,
      atividade: `Em roda, cada aluno responde: o que aconteceu quando você apertou Executar? Por que o Google pediu autorização? E o que você sentiu ao ver a frase aparecer sozinha na célula?`,
      gabarito: `Espera-se que os alunos digam que o código deu uma ordem e a planilha obedeceu, que a autorização serve para o Google confirmar que eles permitem o próprio script mexer na planilha, e que a frase apareceu porque o setValue escreveu nela. Uma boa resposta conecta a função escrita ao resultado visto na aba.`,
    },
    {
      titulo: `Projeto curto: meu código com meu nome`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Esta é a entrega da aula. Circule garantindo que cada aluno tenha um script próprio funcionando do início ao fim: digitar, salvar, autorizar e ver o resultado. Peça que executem na sua frente para confirmar.`,
      atividade: `Crie um script seu do zero, com um nome de função que você escolher. Ele deve escrever uma mensagem pessoal, como "Aqui quem programa é o João", em uma célula à sua escolha. Salve, execute, autorize e mostre para um colega a frase aparecendo sozinha na planilha.`,
      gabarito: `O aluno entrega uma função com nome próprio que, ao ser executada, grava uma mensagem pessoal na célula escolhida usando getRange e setValue. Passou por salvar, executar e autorizar sem ajuda direta. Resultado esperado: um primeiro código autoral funcionando, pronto para evoluir nas aulas de ler e escrever células.`,
    },
  ],
};
