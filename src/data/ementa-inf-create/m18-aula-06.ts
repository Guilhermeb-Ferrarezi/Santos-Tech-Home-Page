import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Enviando E-mails Automáticos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a usar o MailApp do Apps Script para que o código envie e-mails automáticos pelo Gmail com base nos dados da planilha, criando um alerta que avisa quando um valor passa de um limite.`,
  descricao: `Nas aulas anteriores os alunos ensinaram o código a tomar decisões, a conversar com a planilha e até a rodar sozinho por meio de um gatilho. Agora chega a parte mais empolgante do mês: fazer o código sair da planilha e mandar um e-mail de verdade pelo Gmail, sem ninguém precisar digitar nada. É o momento em que a automação deixa de ser invisível e passa a falar com o mundo lá fora.

A ferramenta que torna isso possível é o MailApp, um serviço pronto do Apps Script. Com uma única linha de código, MailApp.sendEmail, o aluno informa para quem mandar, qual é o assunto e qual é a mensagem, e o Gmail dele dispara o e-mail na hora. Como o script já está conectado à conta Google do aluno, o e-mail sai do próprio Gmail dele, exatamente como se ele mesmo tivesse escrito e clicado em enviar.

O grande salto desta aula é juntar duas peças que os alunos já conhecem: ler um valor da planilha e tomar uma decisão com SE (if). A ideia é montar um alerta automático. O código olha uma célula, compara o número com um limite combinado (por exemplo, estoque abaixo de cinco, ou nota abaixo de seis) e, só quando a condição é verdadeira, manda o e-mail de aviso. Assim o aluno entende que o e-mail não é enviado a esmo: ele é a consequência de uma regra.

Ao final, cada aluno terá um pequeno robô que vigia a planilha e avisa por e-mail quando algo importante acontece. Essa é a base direta para a próxima semana, quando tudo (gatilho, leitura de dados, decisão e e-mail) vai se unir na automação completa na nuvem, o entregável do mês.`,
  materiais: [
    `Computadores com o navegador aberto no Google Planilhas, um por aluno, cada um já logado na sua conta Google da escola`,
    `Editor do Apps Script acessível pelo menu Extensões da planilha (já usado nas aulas anteriores)`,
    `Projetor ou TV conectada ao computador do professor para mostrar a planilha e o editor de código`,
    `Planilha de exemplo já pronta com uma tabela simples de "Produto" e "Estoque" (ou "Aluno" e "Nota") para servir de base do alerta`,
    `Conexão estável com a internet, pois o envio de e-mail passa pelos servidores do Google`,
    `Acesso liberado ao Gmail da conta usada, para que os alunos confiram na caixa de entrada o e-mail que o código enviou`,
  ],
  conceitosChave: [
    `MailApp — é o serviço pronto do Apps Script que permite ao código enviar e-mails pelo Gmail do próprio aluno, sem abrir o Gmail manualmente.`,
    `MailApp.sendEmail — é o comando que dispara o e-mail; recebe três informações: o destinatário, o assunto e o corpo da mensagem.`,
    `Destinatário — é o endereço de e-mail para quem a mensagem vai; deve estar escrito entre aspas, como "fulano@gmail.com".`,
    `Assunto — é o título do e-mail, o texto curto que aparece na lista da caixa de entrada antes de a pessoa abrir a mensagem.`,
    `Corpo da mensagem — é o conteúdo do e-mail, o texto completo que a pessoa lê ao abrir; pode juntar palavras fixas com dados lidos da planilha.`,
    `Alerta automático — é a junção de uma decisão (SE) com o envio de e-mail: o código só avisa quando um valor passa de um limite combinado.`,
    `Autorização (permissão) — é a tela em que o Google pede para o aluno confirmar que aquele script pode usar o Gmail dele; sem essa permissão, o e-mail não é enviado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. O coração dela cabe em uma frase: o comando MailApp.sendEmail manda um e-mail a partir do Gmail do aluno. A forma mais simples é MailApp.sendEmail("para@exemplo.com", "Assunto aqui", "Mensagem aqui"). São três pedaços, sempre nessa ordem e separados por vírgula: para quem, o título e o texto.

Antes da aula, faça você mesmo o teste uma vez. Abra a planilha de exemplo, vá no menu Extensões, clique em Apps Script, apague o código que aparecer e cole uma função simples que envia um e-mail para o seu próprio endereço. Clique no botão Executar (o triângulo de "play", parecido com o de um vídeo). Na primeira vez o Google abre uma tela de Autorização: clique em "Revisar permissões", escolha a sua conta, clique em "Avançado" e depois em "Acessar o projeto (não seguro)" e por fim em "Permitir". Esse passo assusta quem nunca viu, então é ótimo já estar familiarizado. Depois confira sua caixa de entrada: o e-mail estará lá.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte "quem aqui já recebeu aquele e-mail automático dizendo que seu pedido foi enviado, ou que faltam poucos dias para algo?". Mostre que ninguém digitou aqueles e-mails à mão: foi um código. Diga que hoje cada um vai criar o seu. Revise rapidamente no projetor o gatilho da aula anterior, lembrando que o código já sabe rodar sozinho.

Conteúdo novo guiado (15 min): no projetor, abra a planilha de exemplo, vá em Extensões, depois Apps Script. Escreva junto com a turma a função abaixo, explicando linha a linha:

function enviarAviso() {
  var email = "seuemail@gmail.com";
  var assunto = "Aviso da minha planilha";
  var mensagem = "Olá! Este e-mail foi enviado pelo meu código.";
  MailApp.sendEmail(email, assunto, mensagem);
}

Explique: as três primeiras linhas guardam em variáveis o destinatário, o assunto e o texto; a última linha entrega esses três valores ao MailApp, que dispara o e-mail. Clique em Executar, mostre a tela de Autorização (o passo "Revisar permissões", "Avançado", "Permitir") e abra o Gmail para todos verem o e-mail chegar.

Mão na massa (25 min): cada aluno repete o processo na própria planilha, enviando um e-mail para o seu próprio endereço. Quando todos conseguirem, suba o nível: junte com a leitura da planilha e o SE. Mostre como ler uma célula com var estoque = planilha.getRange("B2").getValue(); e depois envolver o envio em uma decisão: if (estoque < 5) { MailApp.sendEmail(email, "Estoque baixo!", "O produto está com apenas " + estoque + " unidades."); }. Circule pela sala ajudando com aspas, vírgulas e maiúsculas.

Desafio e compartilhar (10 min): proponha que cada aluno troque o limite (por exemplo, avisar quando a nota for menor que seis) e mude o texto do e-mail para soar como um aviso de verdade. Peça que dois ou três voluntários mostrem no projetor o e-mail que receberam. Feche reforçando: "o código só avisou porque a regra foi verdadeira".

## Como explicar de forma clara (linguagem para a idade)

Compare o MailApp.sendEmail com escrever um bilhete: você precisa do nome de quem vai receber (o destinatário), do título do bilhete (o assunto) e do recado em si (a mensagem). O alerta automático é como um amigo vigia: ele fica de olho na planilha e só te cutuca quando algo passou do limite combinado. E o sinal de + no texto é a cola que junta uma palavra fixa com o número que veio da célula, como montar uma frase com peças de encaixe.

## Erros comuns e como ajudar

O e-mail não chega: peça para conferir se o endereço está certo e dentro de aspas, e lembre que pode levar um minutinho. A tela de permissão assusta: explique que é o Google perguntando "você confia neste código?" e que clicar em "Avançado" e "Permitir" é seguro, pois o código é do próprio aluno. Erro de aspas ou vírgula: o Apps Script aponta a linha em vermelho; mostre que cada texto precisa abrir e fechar aspas e que as três partes são separadas por vírgula. O e-mail é enviado sempre, mesmo sem a condição: nesse caso o aluno esqueceu de colocar o envio dentro do if; confira as chaves { } do SE.`,
  exercicios: [
    {
      titulo: `Meu primeiro e-mail pelo código`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos estejam com o editor do Apps Script aberto pela planilha. Acompanhe especialmente a tela de Autorização, que aparece só na primeira execução, e tranquilize quem ficar inseguro com o aviso de "não seguro".`,
      atividade: `No editor do Apps Script, escreva uma função chamada enviarAviso que use MailApp.sendEmail para mandar um e-mail ao seu próprio endereço, com o assunto "Aviso da minha planilha" e a mensagem "Este e-mail foi enviado pelo meu código!". Execute a função, autorize o acesso e confira o e-mail na sua caixa de entrada.`,
      gabarito: `O aluno deve ter uma função parecida com: function enviarAviso() { MailApp.sendEmail("seuemail@gmail.com", "Aviso da minha planilha", "Este e-mail foi enviado pelo meu código!"); }. Ao executar, deve passar pela tela de permissão (Revisar permissões, Avançado, Permitir) e encontrar o e-mail na própria caixa de entrada. O endereço, o assunto e a mensagem devem estar corretos e entre aspas.`,
    },
    {
      titulo: `Trazendo um dado da planilha para o e-mail`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce que ler a célula vem antes de enviar o e-mail. Ajude com o sinal de + que une o texto fixo ao valor lido. Confira se usam getRange e getValue com as letras maiúsculas certas.`,
      atividade: `Leia o valor da célula B2 da planilha (o estoque de um produto) e guarde em uma variável. Depois envie um e-mail para você cujo corpo diga algo como "O estoque atual é de X unidades", trocando o X pelo número que veio da célula. Use o sinal de + para juntar o texto com o valor.`,
      gabarito: `Exemplo esperado: var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); var estoque = planilha.getRange("B2").getValue(); MailApp.sendEmail("seuemail@gmail.com", "Relatório de estoque", "O estoque atual é de " + estoque + " unidades."). O e-mail recebido deve mostrar o número real que está na célula B2, e não a letra X nem a palavra estoque.`,
    },
    {
      titulo: `O alerta que só avisa quando precisa`,
      tipo: `em dupla`,
      tempo: `14 minutos`,
      guiaProfessor: `Cada dupla deve testar os dois casos: um valor que dispara o e-mail e outro que não dispara. Verifique se o envio está dentro das chaves do if. Oriente a mudar o número na célula para ver o comportamento mudar.`,
      atividade: `Em dupla, montem um alerta: o código lê o estoque na célula B2 e, usando SE (if), só envia o e-mail "Estoque baixo!" quando o valor for menor que 5. Testem duas vezes, primeiro com um número alto na célula (sem e-mail) e depois com um número menor que 5 (com e-mail).`,
      gabarito: `O código deve ter o envio dentro do if, assim: if (estoque < 5) { MailApp.sendEmail("seuemail@gmail.com", "Estoque baixo!", "O produto está com apenas " + estoque + " unidades."); }. Com um número maior ou igual a 5 na célula, nenhum e-mail chega; com um número menor que 5, o e-mail de alerta chega. A dupla deve concluir que o e-mail é a consequência da condição ser verdadeira.`,
    },
    {
      titulo: `Por que mandar e-mail automático?`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a roda valorizando exemplos do dia a dia dos alunos. Aceite ideias variadas, desde que tenham um limite claro e um motivo. Anote no quadro as melhores ideias de alerta sugeridas pela turma.`,
      atividade: `Em roda, conversem: em que situações da vida real um alerta automático por e-mail seria útil? Pensem em pelo menos três exemplos (escola, casa, um negócio) e, para cada um, digam qual seria o limite que dispara o aviso e o que o e-mail diria.`,
      gabarito: `Respostas esperadas trazem uma situação, um limite e uma mensagem. Exemplos válidos: avisar quando a nota de uma prova ficar abaixo de 6 ("Atenção: nota baixa em Matemática"); avisar uma loja quando o estoque de um produto cair abaixo de 5 ("Reabasteça o produto X"); avisar os pais quando a mesada gasta passar de um valor. O essencial é que cada exemplo tenha um limite claro e um motivo real para o aviso.`,
    },
    {
      titulo: `Meu robô vigia da planilha`,
      tipo: `projeto curto`,
      tempo: `18 minutos`,
      guiaProfessor: `Peça que o aluno escolha o próprio tema, o próprio limite e o próprio texto. Avalie se o e-mail só é enviado quando a condição é verdadeira e se o corpo da mensagem traz o dado lido da planilha. Valorize criatividade no texto do aviso.`,
      atividade: `Crie o seu próprio robô vigia. Escolha um tema (estoque, nota, mesada ou outro), monte uma planilha simples com esse dado, e escreva uma função que leia o valor, compare com um limite que você definir e só envie o e-mail de alerta quando a condição for verdadeira. O corpo do e-mail deve incluir o número que veio da planilha.`,
      gabarito: `O aluno deve entregar: uma planilha com o dado escolhido, uma função que lê a célula com getValue, um if que compara o valor com um limite e um MailApp.sendEmail dentro do if. Ao testar com um valor que satisfaz a condição, o e-mail chega trazendo o número real lido da planilha; com um valor que não satisfaz, nenhum e-mail é enviado. Exemplo: tema notas, limite 6, e-mail "Sua nota foi 5 e está abaixo de 6, reforce os estudos!". O importante é a coerência entre o tema, o limite, a decisão e o texto do e-mail.`,
    },
  ],
};
