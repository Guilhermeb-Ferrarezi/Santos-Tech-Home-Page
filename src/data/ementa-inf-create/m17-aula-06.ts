import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Lendo e escrevendo células",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a ler o valor de uma célula com código, fazer uma conta ou juntar textos e escrever a resposta automaticamente em outra célula da planilha.`,
  descricao: `Até agora os alunos escreveram scripts que mostravam mensagens na tela, mas a planilha em si continuava parada. Nesta aula o código finalmente começa a conversar com as células de verdade: ele aprende a ler o que está escrito numa célula, guardar esse valor numa variável, transformar esse valor (somando, multiplicando ou juntando textos) e devolver o resultado escrito em outra célula. É aqui que o aluno percebe o poder real da automação, porque a planilha passa a se preencher sozinha.

O coração da aula são três comandos do Apps Script. Primeiro, getActiveSpreadsheet().getActiveSheet() pega a aba em que estamos trabalhando. Depois, getRange("A2") aponta para uma célula específica, como um endereço numa cidade. Por fim, getValue() lê o conteúdo daquela célula e setValue() escreve um novo conteúdo. Com esses comandos o aluno monta um fluxo simples e poderoso: ler, calcular, escrever.

Para tornar o conteúdo concreto, a aula usa exemplos que adolescentes entendem na hora: somar o preço de dois lanches, calcular quantos dias faltam para o aniversário, ou juntar o nome e o sobrenome para formar um crachá. O aluno digita um valor numa célula, roda o script e vê a resposta aparecer noutra célula como se fosse magia, mas é código.

A aula também ensina o aluno a ler as mensagens vermelhas do editor sem entrar em pânico. Erros como esquecer um ponto, escrever o nome de uma célula errado ou trocar getValue por getvalue são normais e fazem parte de programar. O professor mostra que a mensagem de erro não é uma bronca: é uma pista que indica em qual linha está o problema e o que conserta.`,
  materiais: [
    `Computadores (um por aluno) com navegador e conta Google logada, com o Google Planilhas e o editor de Apps Script abertos`,
    `Projetor ou TV ligado ao computador do professor para mostrar a planilha e o código passo a passo`,
    `Planilha de exemplo já pronta chamada "Lendo e Escrevendo - Aula 6", com as abas "Lanche", "Aniversario" e "Cracha" preenchidas`,
    `Conta Google de cada aluno (a mesma usada nas aulas anteriores) com permissão para autorizar scripts`,
    `Folha impressa ou slide com os três comandos da aula (getRange, getValue, setValue) como cola de consulta rápida`,
    `Cronômetro ou timer no projetor para marcar os blocos de 10, 15, 25 e 10 minutos`,
  ],
  conceitosChave: [
    `getRange — comando que aponta para uma célula ou um intervalo específico, usando o endereço como "A2" ou "B3".`,
    `getValue — comando que lê e devolve o conteúdo que está dentro da célula apontada pelo getRange.`,
    `setValue — comando que escreve um novo valor dentro da célula, substituindo o que estava lá antes.`,
    `Variável — caixinha com nome que guarda um valor lido da planilha para ser usado depois no código.`,
    `Concatenação — juntar dois ou mais textos num só, usando o sinal de mais, por exemplo nome + sobrenome.`,
    `Mensagem de erro — aviso em vermelho do editor que indica a linha e o tipo do problema, servindo de pista para o conserto.`,
    `Tipo de dado — diferença entre número (serve para conta) e texto (serve para juntar), que muda o que o código consegue fazer.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador. Precisa apenas dominar três comandos e o fluxo "ler, calcular, escrever". Tudo gira em torno de uma linha base: var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); Essa linha guarda a aba ativa numa variável chamada planilha. Depois, para ler usamos planilha.getRange("A2").getValue() e para escrever usamos planilha.getRange("B2").setValue(resultado). O getRange aponta a célula, o getValue lê e o setValue escreve. Teste o script de exemplo em casa uma vez antes da aula, rodando pelo botão Executar, para já conhecer a tela de autorização do Google que aparece na primeira vez.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra a planilha de exemplo no projetor. Pergunte: "como a planilha sabe somar A1 e A2 numa fórmula?". Relembre que na aula passada o código só mostrava caixinhas de mensagem. Diga a frase-chave do dia: "hoje o código vai mexer nas células sozinho". Peça que cada aluno abra a aba Extensões e clique em Apps Script para abrir o editor.

Conteúdo novo guiado (15 min): no projetor, apague o código existente e digite devagar, explicando cada parte. Primeiro a linha da variável planilha. Depois var preco = planilha.getRange("A2").getValue(); e diga "agora a caixinha preco guarda o número da célula A2". Em seguida planilha.getRange("B2").setValue(preco); e mostre que B2 recebe o mesmo valor. Clique em Salvar (ícone do disquete) e depois em Executar (botão com o triângulo). Na primeira vez, mostre a janela de autorização: clique em Revisar permissões, escolha a conta e clique em Permitir. Volte à planilha e mostre que B2 se preencheu.

Mão na massa (25 min): cada aluno faz na aba Lanche. Em A2 há o preço de um lanche e em A3 o preço de um suco. Eles devem ler os dois valores, somar e escrever o total em B2. O código final fica: var total = planilha.getRange("A2").getValue() + planilha.getRange("A3").getValue(); planilha.getRange("B2").setValue(total); Quem terminar tenta a aba Cracha, juntando nome (A2) e sobrenome (B2) com um espaço: var nomeCompleto = planilha.getRange("A2").getValue() + " " + planilha.getRange("B2").getValue(); Circule pela sala ajudando em erros de digitação.

Desafio e compartilhar (10 min): proponha a aba Aniversario, onde calculam quantos dias faltam subtraindo dois números. Peça a dois ou três alunos que mostrem a tela no projetor, expliquem qual célula leem e qual escrevem. Encerre relembrando o fluxo "ler, calcular, escrever".

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do endereço: getRange("A2") é como dizer o número da casa, getValue é tocar a campainha para ver quem mora lá, e setValue é colocar um morador novo na casa. Compare a variável com uma mochila que carrega o valor de um lugar para outro. Reforce que o sinal de mais soma quando são números e cola quando são textos. Sempre que digitar algo no projetor, fale em voz alta o que está acontecendo, para os alunos associarem o código à ação na planilha.

## Erros comuns e como ajudar

O erro mais comum é escrever getvalue ou setvalue com letras minúsculas; o editor sublinha e reclama, e a correção é usar a maiúscula no meio. Outro clássico é esquecer o ponto e vírgula no fim ou trocar A2 por uma célula vazia, fazendo o resultado dar errado. Ensine a ler a mensagem vermelha: ela diz o número da linha. Mande o aluno olhar exatamente aquela linha. Lembre a turma que erro não é fracasso, é parte de programar.`,
  exercicios: [
    {
      titulo: `Copiando um valor de uma célula para outra`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos abriram o editor pela aba Extensões e Apps Script. Acompanhe a primeira autorização do Google, que pode assustar. O objetivo é só ler A2 e escrever em B2, sem conta nenhuma.`,
      atividade: `Na aba Lanche, escreva um script que leia o valor da célula A2 (preço do lanche) e escreva exatamente esse mesmo valor na célula B2. Salve, execute e confira se B2 ficou igual à A2.`,
      gabarito: `function copiarValor() { var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); var preco = planilha.getRange("A2").getValue(); planilha.getRange("B2").setValue(preco); } Ao executar, B2 mostra o mesmo número que está em A2.`,
    },
    {
      titulo: `Somando o preço de dois lanches`,
      tipo: `Desafio individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce que o sinal de mais entre dois getValue de números faz a soma. Verifique se eles apontam as células certas (A2 e A3) e escrevem o total em B2. Erros de célula vazia dão resultado estranho.`,
      atividade: `Na aba Lanche, leia o preço do lanche em A2 e o preço do suco em A3, some os dois valores e escreva o total na célula B2.`,
      gabarito: `function somarLanche() { var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); var total = planilha.getRange("A2").getValue() + planilha.getRange("A3").getValue(); planilha.getRange("B2").setValue(total); } Se A2 vale 12 e A3 vale 6, B2 mostra 18.`,
    },
    {
      titulo: `Montando um crachá em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada dupla usa um computador. Um aluno digita e o outro confere a mensagem de erro. O ponto novo é a concatenação com espaço entre aspas. Mostre a diferença entre somar números e juntar textos.`,
      atividade: `Na aba Cracha, leiam o nome em A2 e o sobrenome em B2, juntem os dois com um espaço no meio e escrevam o nome completo na célula C2.`,
      gabarito: `function montarCracha() { var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); var nomeCompleto = planilha.getRange("A2").getValue() + " " + planilha.getRange("B2").getValue(); planilha.getRange("C2").setValue(nomeCompleto); } Com A2 "Ana" e B2 "Silva", C2 mostra "Ana Silva".`,
    },
    {
      titulo: `Caçando o erro vermelho`,
      tipo: `Roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Projete um código com três erros propositais: getvalue minúsculo, célula "A22" inexistente no contexto e falta de ponto e vírgula. Conduza a turma a ler a mensagem, achar a linha e propor a correção em voz alta, sem entregar a resposta de imediato.`,
      atividade: `Olhem o código projetado com erros. Cada aluno aponta um problema que enxerga e explica como a mensagem vermelha ajudou a descobrir em qual linha estava o erro.`,
      gabarito: `Erro 1: getvalue deve ser getValue com V maiúsculo. Erro 2: a célula apontada estava errada e o getValue lia uma célula vazia. Erro 3: faltava o ponto e vírgula no fim da linha. Após os três ajustes, o script roda sem mensagem vermelha.`,
    },
    {
      titulo: `Calculadora de dias para o aniversário`,
      tipo: `Projeto curto individual`,
      tempo: `15 minutos`,
      guiaProfessor: `Este é o mais difícil: o aluno combina leitura, conta e escrita sozinho. Na aba Aniversario, A2 tem o número do dia de hoje no ano e A3 o número do dia do aniversário. Oriente quem travar a olhar o exemplo da soma e trocar o mais por menos.`,
      atividade: `Na aba Aniversario, leia o dia do aniversário em A3 e o dia de hoje em A2, subtraia para descobrir quantos dias faltam e escreva o resultado na célula B2.`,
      gabarito: `function diasParaAniversario() { var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); var faltam = planilha.getRange("A3").getValue() - planilha.getRange("A2").getValue(); planilha.getRange("B2").setValue(faltam); } Se A3 vale 200 e A2 vale 155, B2 mostra 45 dias.`,
    },
  ],
};
