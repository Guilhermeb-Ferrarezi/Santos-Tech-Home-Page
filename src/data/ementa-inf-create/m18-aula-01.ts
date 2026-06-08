import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Meu Primeiro Código de Verdade",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Escrever a primeira função de verdade no Apps Script dentro do Google Planilhas, criando variáveis e mostrando o resultado com o Logger.`,
  descricao: `Nesta aula o aluno descobre que uma planilha não serve só para digitar números em células: por trás dela existe um lugar onde podemos escrever código de verdade que roda na nuvem do Google. Esse lugar se chama editor de Apps Script. A partir de agora o aluno deixa de ser apenas usuário de ferramentas prontas e passa a ser autor: ele vai dar ordens ao computador escrevendo instruções que o próprio computador executa.

O conceito central da aula é o de função. Uma função é um bloco de código com um nome que guarda um conjunto de ordens. Quando o aluno clica em "Executar", o Google lê essas ordens de cima para baixo e faz exatamente o que está escrito. É como ensinar uma receita ao computador uma única vez e depois pedir para ele repetir quando quiser.

Para guardar informações dentro do código, o aluno aprende o que são variáveis. Uma variável é uma caixinha com etiqueta onde guardamos um valor: pode ser um texto (como o nome de uma pessoa) ou um número (como a idade). Com as variáveis o código deixa de ter valores soltos e passa a ter dados organizados e nomeados, que podem ser usados em qualquer parte da função.

Por fim, o aluno conhece o Logger, a ferramenta que mostra na tela o que o código está fazendo por dentro. Como o código roda na nuvem e não aparece nada na planilha automaticamente, o Logger é a janelinha pela qual o aluno espia o resultado. É a primeira forma de conversar com o programa e de conferir se ele realmente fez o que pedimos. Ao final da aula, todo aluno terá escrito, executado e visto funcionar o seu primeiro programa real.`,
  materiais: [
    `Computadores (um por aluno) com navegador Chrome atualizado e conta Google da escola já conectada`,
    `Google Planilhas aberto em uma planilha em branco, com o editor de Apps Script acessível pelo menu Extensões`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Conta Google funcionando (a primeira execução pede autorização; teste antes da aula)`,
    `Planilha-modelo de exemplo do professor, já com uma função pronta para mostrar o resultado esperado`,
    `Folha impressa ou slide com o vocabulário do dia (função, variável, Logger) para consulta rápida`,
    `Acesso à internet estável, pois o Apps Script roda na nuvem e exige conexão`,
  ],
  conceitosChave: [
    `Apps Script — linguagem de programação do Google que permite escrever código que roda na nuvem e comanda o Google Planilhas.`,
    `Função — bloco de código com um nome que guarda várias ordens; quando executada, o computador faz tudo o que está escrito dentro dela.`,
    `Variável — caixinha com etiqueta que guarda um valor (um texto ou um número) para usarmos depois no código.`,
    `Logger — ferramenta do Apps Script que mostra mensagens na tela para o aluno ver o que o código fez por dentro.`,
    `Executar — ação de mandar o computador ler e cumprir as ordens da função, clicando no botão "Executar" no editor.`,
    `Editor de Apps Script — tela de programação que abrimos pelo menu Extensões do Google Planilhas, onde escrevemos o código.`,
    `Texto e número — os dois tipos de valor desta aula; texto vai entre aspas ("João") e número vai sem aspas (15).`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. Precisa apenas ter feito o caminho uma vez antes. O Apps Script é o editor de código gratuito que vem junto com o Google Planilhas. Ele usa a linguagem JavaScript, mas hoje usaremos só o básico: criar uma função, criar variáveis e mostrar um resultado com Logger.log(). A função começa com a palavra "function", um nome, parênteses e uma chave que abre. Tudo o que está entre as chaves é o corpo da função. O computador lê de cima para baixo. Antes da aula, faça o teste completo no seu computador, inclusive a tela de autorização que aparece na primeira execução, para não ser surpreendido na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte à turma "quem aqui já deu uma ordem para um computador?". Mostre no projetor a planilha-modelo, clique em "Executar" e deixe que vejam o resultado aparecer no Logger. Diga que ao final da aula cada um terá escrito o seu. Relembre que no Ano 1 eles usavam ferramentas prontas; agora vão criar a ferramenta.

Conteúdo novo guiado (15 min): no projetor, abra uma planilha em branco. Clique no menu Extensões (na barra de cima) e depois em Apps Script. Vai abrir uma aba nova com o editor. Apague o código de exemplo e digite junto com a turma, devagar, explicando cada parte:

function meuPrimeiroCodigo() {
  var nome = "Ana";
  var idade = 15;
  Logger.log("Aluno: " + nome);
  Logger.log("Idade: " + idade);
}

Explique linha a linha: "function meuPrimeiroCodigo()" cria a função e dá um nome a ela; a chave que abre marca o início do corpo. "var nome" cria uma variável chamada nome e guarda o texto "Ana" (texto vai entre aspas). "var idade" guarda o número 15 (número vai sem aspas). "Logger.log(...)" é a ordem para mostrar uma mensagem na tela. O sinal de "+" junta dois pedaços de texto. A chave que fecha marca o fim da função. Salve clicando no ícone de disquete (ou Ctrl+S). Clique em "Executar". Na primeira vez aparece a tela de autorização: clique em "Revisar permissões", escolha a conta e clique em "Permitir". Em seguida, mostre o resultado no "Registro de execução" que aparece embaixo.

Mão na massa (25 min): cada aluno abre a própria planilha, vai em Extensões, Apps Script, e digita a mesma função trocando o nome e a idade pelos seus. Salva, executa e confere a mensagem no Logger. Circule pela sala. Quem terminar rápido cria uma terceira variável (por exemplo, var cidade) e mostra no Logger.

Desafio e compartilhar (10 min): peça para cada aluno criar uma variável chamada "ano" com o número do ano atual e mostrar a frase "Ano atual:" junto do número. Convide dois ou três alunos a virem ao projetor mostrar o seu código rodando.

## Como explicar de forma clara

Use comparações do dia a dia. Função é uma receita que ensinamos uma vez e mandamos repetir quando quiser. Variável é uma caixinha com etiqueta: na etiqueta está o nome, dentro está o valor. Logger é a janelinha por onde espiamos o que o código fez, já que ele roda escondido na nuvem. Repita sempre a regra de ouro: texto vai entre aspas, número vai sem aspas. Mostre que o computador faz exatamente o que está escrito, nem mais nem menos, por isso cada vírgula e aspas importa.

## Erros comuns e como ajudar

O erro mais frequente é esquecer de fechar a chave } ou um parênteses; o editor sublinha em vermelho e mostra a mensagem embaixo. Outro erro comum é esquecer as aspas no texto, fazendo o código achar que "Ana" é um comando. Confundir "Logger.log" com "logger" (a letra maiúscula importa) também trava a execução. Alguns alunos não salvam antes de executar: lembre o atalho Ctrl+S. Por fim, se nada aparece, confira se eles olharam o "Registro de execução" embaixo do editor, e não a planilha.`,
  exercicios: [
    {
      titulo: `Copiando o primeiro código`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos abriram o editor pelo menu Extensões, Apps Script. Reforce salvar com Ctrl+S antes de executar e onde ver o resultado (Registro de execução).`,
      atividade: `Abra uma planilha em branco, vá em Extensões e depois Apps Script. Apague o exemplo e digite uma função chamada meuPrimeiroCodigo com uma variável nome guardando o seu nome e uma variável idade guardando a sua idade. Use o Logger para mostrar as duas. Salve e execute.`,
      gabarito: `function meuPrimeiroCodigo() {
  var nome = "Ana";
  var idade = 13;
  Logger.log("Aluno: " + nome);
  Logger.log("Idade: " + idade);
}

No Registro de execução deve aparecer: Aluno: Ana e Idade: 13 (com os dados do próprio aluno).`,
    },
    {
      titulo: `Texto ou número?`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Leia cada valor em voz alta e peça à turma para responder se vai com ou sem aspas. Anote no quadro. Reforce a regra: texto entre aspas, número sem aspas.`,
      atividade: `Para cada item, diga se a variável guarda um texto (vai entre aspas) ou um número (vai sem aspas): o seu nome; a sua idade; o nome da sua cidade; o ano atual; a sua matéria favorita.`,
      gabarito: `Seu nome: texto (entre aspas). Sua idade: número (sem aspas). Nome da cidade: texto (entre aspas). Ano atual: número (sem aspas). Matéria favorita: texto (entre aspas). Regra: se for palavra, vai entre aspas; se for só número para contar ou calcular, vai sem aspas.`,
    },
    {
      titulo: `Mais uma caixinha`,
      tipo: `Desafio individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça para o aluno reaproveitar a função do exercício 1 e acrescentar a nova variável. Verifique se ele usou aspas no texto e o sinal de + para juntar a mensagem.`,
      atividade: `Na sua função, crie uma terceira variável chamada cidade guardando o nome da sua cidade. Mostre no Logger a frase "Cidade:" seguida do valor da variável. Salve e execute.`,
      gabarito: `function meuPrimeiroCodigo() {
  var nome = "Ana";
  var idade = 13;
  var cidade = "Santos";
  Logger.log("Aluno: " + nome);
  Logger.log("Idade: " + idade);
  Logger.log("Cidade: " + cidade);
}

No Registro deve aparecer também a linha: Cidade: Santos.`,
    },
    {
      titulo: `Caçadores de erro`,
      tipo: `Em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre no projetor (ou entregue) o código com erros propositais. As duplas devem encontrar e corrigir os três erros: aspas faltando, chave não fechada e L maiúsculo errado em Logger. Confirme executando a versão corrigida.`,
      atividade: `Em dupla, encontrem e corrijam os três erros deste código:

function meuPrimeiroCodigo() {
  var nome = Ana;
  var idade = 13;
  logger.log("Aluno: " + nome);
  Logger.log("Idade: " + idade);

Depois digitem a versão correta, salvem e executem.`,
      gabarito: `Erro 1: faltam aspas no texto Ana (deve ser "Ana"). Erro 2: a palavra logger está com l minúsculo na primeira linha; o certo é Logger com L maiúsculo. Erro 3: falta a chave } que fecha a função no final. Versão correta:

function meuPrimeiroCodigo() {
  var nome = "Ana";
  var idade = 13;
  Logger.log("Aluno: " + nome);
  Logger.log("Idade: " + idade);
}`,
    },
    {
      titulo: `Meu cartão de apresentação em código`,
      tipo: `Projeto curto`,
      tempo: `13 minutos`,
      guiaProfessor: `Cada aluno cria uma função nova com nome diferente. Exija pelo menos quatro variáveis (mistura de texto e número) e que o Logger monte uma frase de apresentação. Convide dois ou três a mostrar no projetor.`,
      atividade: `Crie uma função chamada meuCartao com pelo menos quatro variáveis sobre você (por exemplo nome, idade, cidade e ano atual, misturando texto e número). Use o Logger para mostrar uma apresentação bonita, como "Oi! Eu sou ..., tenho ... anos e moro em ...". Salve e execute.`,
      gabarito: `function meuCartao() {
  var nome = "Joao";
  var idade = 14;
  var cidade = "Santos";
  var ano = 2026;
  Logger.log("Oi! Eu sou " + nome + ", tenho " + idade + " anos.");
  Logger.log("Moro em " + cidade + " e estamos em " + ano + ".");
}

No Registro deve aparecer: Oi! Eu sou Joao, tenho 14 anos. e Moro em Santos e estamos em 2026. Aceitar variações desde que haja quatro variáveis, mistura de texto e número, e uso correto de aspas e do sinal de +.`,
    },
  ],
};
