import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Decisões no Código: o Poder do if/else",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Fazer o site reagir de formas diferentes conforme o valor de uma variável, usando condições com if, else if e else, além dos operadores de comparação e lógicos em JavaScript.`,
  descricao: `Nesta aula o aluno descobre como dar inteligência ao código: até agora o JavaScript apenas executava uma linha depois da outra, sempre igual. A partir de hoje o programa passa a tomar decisões. A estrutura if (que significa "se") permite que um trecho de código só rode quando uma condição for verdadeira. O else ("senão") oferece um caminho alternativo, e o else if ("senão se") encadeia várias possibilidades. É como um jogo perguntando "se a vida chegar a zero, mostre Game Over; senão, continue jogando".

Para que o computador decida, ele precisa comparar valores. É aí que entram os operadores de comparação: o triplo igual (===) verifica se dois valores são exatamente iguais; o maior (>) e o menor (<) comparam tamanhos; o maior ou igual (>=) e o menor ou igual (<=) cobrem os casos de empate. Toda comparação devolve um valor booleano: true (verdadeiro) ou false (falso). Esse resultado é o que o if usa para decidir qual caminho seguir.

Às vezes uma decisão depende de mais de uma condição ao mesmo tempo. Para isso usamos os operadores lógicos: o E (&&) exige que as duas condições sejam verdadeiras; o OU (||) aceita que pelo menos uma seja verdadeira; e o NÃO (!) inverte o valor, transformando verdadeiro em falso e vice-versa. Com eles o aluno escreve regras mais ricas, como "se a idade for maior ou igual a 13 E o nome não estiver vazio, libere o acesso".

Esta é a primeira aula do mês de JavaScript intermediário, cujo entregável será um site interativo. O aluno já conhece variáveis e o básico da linguagem dos anos anteriores; agora ele aprende a lógica que sustenta qualquer funcionalidade real: validar uma resposta, mostrar uma mensagem diferente conforme a pontuação, decidir se um botão aparece ou não. Dominar o if/else hoje é o alicerce para os formulários, eventos e interatividade das próximas aulas.`,
  materiais: [
    `Computadores com um editor de código instalado (VS Code) e um navegador moderno (Chrome ou Edge), um por aluno`,
    `Projetor ou TV para o professor demonstrar o editor e o console do navegador`,
    `Arquivo de exemplo index.html com a estrutura básica pronta e um arquivo script.js vazio para o aluno preencher`,
    `Arquivo de exemplo já resolvido (gabarito) com os if/else funcionando, para mostrar o resultado esperado`,
    `Acesso ao Console do navegador (tecla F12, aba Console) para testar o código rapidamente`,
    `Quadro branco ou flip chart para desenhar o fluxograma das decisões (se... senão...)`,
    `Folha impressa com a tabela dos operadores de comparação e lógicos, como cola de consulta`,
  ],
  conceitosChave: [
    `Condição — uma pergunta que o computador responde com verdadeiro ou falso, como "a idade é maior que 12?".`,
    `if (se) — bloco que só executa o código quando a condição dentro dos parênteses for verdadeira (true).`,
    `else (senão) — caminho alternativo que roda quando a condição do if foi falsa.`,
    `else if (senão se) — testa uma nova condição quando a anterior falhou, encadeando várias opções.`,
    `Booleano — valor que só pode ser true (verdadeiro) ou false (falso); é o resultado de toda comparação.`,
    `Operadores de comparação — símbolos que comparam valores: === (igual), > (maior), < (menor), >= (maior ou igual), <= (menor ou igual).`,
    `Operadores lógicos — combinam condições: && (E, exige as duas), || (OU, basta uma), ! (NÃO, inverte o resultado).`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar JavaScript para dar esta aula; precisa entender uma ideia simples: o if executa um código somente quando uma condição é verdadeira. A condição fica entre parênteses e o código a executar fica entre chaves. Toda comparação devolve true ou false. O sinal de igualdade para comparar é o triplo igual (===), nunca um igual sozinho (esse serve para guardar valor numa variável). Antes da aula, abra o navegador, aperte F12, vá na aba Console e teste digitando 5 > 3 e apertando Enter: aparece true. Teste 2 === 3: aparece false. Esse console é o seu laboratório rápido. Tenha o arquivo index.html e o script.js abertos no editor e ligados pela linha de script no HTML.

## Passo a passo da aula

Aquecimento (10 min): no quadro, escreva "SE estiver chovendo, leve guarda-chuva; SENÃO, leve óculos de sol". Pergunte à turma outras decisões do dia a dia. Mostre no Console do navegador as comparações 10 > 5, 7 === 7 e 4 < 2, lendo em voz alta o true ou false que aparece. Diga que hoje o site vai aprender a decidir.

Conteúdo novo guiado (15 min): no projetor, abra o script.js e digite junto com a turma, linha a linha, explicando cada parte:

var idade = 15;
if (idade >= 13) {
  console.log("Pode acessar o conteúdo teen.");
} else {
  console.log("Conteúdo apenas para maiores de 13.");
}

Explique: a primeira linha guarda o número na variável idade. A segunda pergunta "idade é maior ou igual a 13?". As chaves marcam o que roda se for verdade. O else é o plano B. Salve, recarregue a página e mostre a mensagem no Console. Depois mude idade para 10 e mostre a outra mensagem. Agora apresente o else if com três faixas:

var nota = 75;
if (nota >= 90) {
  console.log("Excelente!");
} else if (nota >= 60) {
  console.log("Aprovado.");
} else {
  console.log("Precisa estudar mais.");
}

Por fim, mostre os operadores lógicos:

var idade2 = 14;
var temPermissao = true;
if (idade2 >= 13 && temPermissao) {
  console.log("Acesso liberado.");
}

Mão na massa (25 min): cada aluno cria, no próprio script.js, uma variável pontos e escreve um if/else if/else que mostra "Ouro" para 100 ou mais, "Prata" para 50 ou mais, e "Bronze" para o resto. Em seguida adicionam uma condição com && (por exemplo, idade e nome preenchido). Circule pela sala, peça para testarem trocando o valor da variável e recarregando a página, e confira no Console.

Desafio e compartilhar (10 min): proponha usar o operador ! para inverter uma condição (ex.: se NÃO estiver logado, mostrar "Faça login") e o || para aceitar duas situações. Cada aluno mostra no projetor um if seu rodando, lendo a condição em voz alta.

## Como explicar de forma clara

Use comparações do mundo deles. Diga que o if é um segurança na porta da festa: "se você tiver 13 anos ou mais, pode entrar; senão, fica de fora". Booleano é o "sim ou não", "verdadeiro ou falso", sem meio-termo. O && é como duas chaves para abrir um cofre: precisa das duas; o || é como duas portas de entrada: qualquer uma serve; o ! é o botão que troca de lado, vira o avesso. Reforce sempre: para comparar, usamos === com três iguais; um igual sozinho guarda valor. Leia o código em português: "se idade maior ou igual a treze".

## Erros comuns e como ajudar

Erro 1: usar = no lugar de === na comparação; mostre que = guarda e === compara. Erro 2: esquecer as chaves ou os parênteses; aponte que toda condição fica entre ( ) e o código entre . Erro 3: comparar texto com número e estranhar o resultado; lembre que "15" entre aspas é diferente do número 15. Erro 4: colocar ponto e vírgula logo depois do if, o que quebra a lógica; remova. Erro 5: confundir && com ||; releia "as duas" (E) contra "pelo menos uma" (OU). Erro 6: não ver a mensagem porque esqueceram de salvar o arquivo ou recarregar a página; peça Ctrl+S e F5.`,
  exercicios: [
    {
      titulo: `Verdadeiro ou falso no Console`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno abra o Console (F12 > Console). Peça para digitarem uma comparação por vez e lerem o resultado em voz alta. Reforce a diferença entre = e ===.`,
      atividade: `No Console do navegador, digite e aperte Enter, uma por vez: 8 > 3 ; 5 === 5 ; 2 >= 9 ; 10 <= 10 ; 4 === 4. Anote ao lado de cada uma se o resultado foi true ou false.`,
      gabarito: `8 > 3 é true; 5 === 5 é true; 2 >= 9 é false; 10 <= 10 é true; 4 === 4 é true. Toda comparação devolve um booleano (true ou false). Se algum aluno digitou = no lugar de ===, o resultado fica errado ou dá erro.`,
    },
    {
      titulo: `Meu primeiro if/else`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Confira se cada aluno criou a variável antes do if e usou chaves corretamente. Peça para testarem dois valores diferentes (um que entra no if e outro no else).`,
      atividade: `No script.js, crie uma variável idade com um número e escreva um if que mostre no Console "Pode entrar" quando idade for maior ou igual a 13, e um else que mostre "Muito novo". Teste com idade 15 e depois com idade 10.`,
      gabarito: `var idade = 15;
if (idade >= 13) {
  console.log("Pode entrar");
} else {
  console.log("Muito novo");
}
Com idade 15 aparece "Pode entrar"; com idade 10 aparece "Muito novo".`,
    },
    {
      titulo: `Três faixas com else if`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre que a ordem das condições importa: a maior faixa deve vir primeiro. Peça para testarem um valor de cada faixa. Verifique se usaram else if e não três if separados.`,
      atividade: `No script.js, crie a variável pontos e escreva um if/else if/else que mostre "Ouro" quando pontos for maior ou igual a 100, "Prata" quando for maior ou igual a 50, e "Bronze" no restante. Teste com 120, 70 e 20.`,
      gabarito: `var pontos = 120;
if (pontos >= 100) {
  console.log("Ouro");
} else if (pontos >= 50) {
  console.log("Prata");
} else {
  console.log("Bronze");
}
Com 120 mostra "Ouro"; com 70 mostra "Prata"; com 20 mostra "Bronze". A condição maior precisa vir primeiro, senão tudo cai em "Prata".`,
    },
    {
      titulo: `Decisão com E e OU`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas se quiser. Reforce que && exige as duas condições e || aceita uma. Peça para mudarem os valores e observarem como o resultado muda.`,
      atividade: `No script.js, crie as variáveis idade e temPermissao (use true ou false). Escreva um if que mostre "Acesso liberado" somente quando idade for maior ou igual a 13 E temPermissao for true. Depois escreva outro if que mostre "Fim de semana" quando o dia for "sabado" OU "domingo".`,
      gabarito: `var idade = 14;
var temPermissao = true;
if (idade >= 13 && temPermissao) {
  console.log("Acesso liberado");
}

var dia = "sabado";
if (dia === "sabado" || dia === "domingo") {
  console.log("Fim de semana");
}
Com && só libera quando as duas são verdadeiras; com || basta uma das comparações ser verdadeira.`,
    },
    {
      titulo: `Inverter com NÃO (!) e explicar`,
      tipo: `desafio + roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Apresente o ! como o operador que vira o resultado ao avesso. Ao final, reúna a turma e peça para cada um ler sua condição em português, garantindo que entenderam a lógica, não só o código.`,
      atividade: `No script.js, crie a variável logado com valor false. Escreva um if que use o operador ! para mostrar "Faça login" quando o usuário NÃO estiver logado. Depois explique em voz alta, em português, o que sua condição faz.`,
      gabarito: `var logado = false;
if (!logado) {
  console.log("Faca login");
}
O ! inverte o valor: como logado é false, !logado vira true, então a mensagem aparece. Lido em português: "se NÃO estiver logado, mostre Faça login". Se logado fosse true, !logado seria false e nada apareceria.`,
    },
  ],
};
