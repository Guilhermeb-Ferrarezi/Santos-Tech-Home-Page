import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Guardando Dados em Variáveis",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Criar e nomear variáveis com Dim, reconhecer os tipos básicos (String, Integer, Double e Boolean) e usá-las para guardar valores, somar números, juntar textos e exibir o resultado numa macro própria.`,
  descricao: `Na aula passada os alunos abriram pela primeira vez o Editor VBA e descobriram onde o código vive dentro do Excel. Agora eles dão o passo seguinte e mais importante de toda a programação: aprender a guardar informação. Um programa sem variáveis é como uma calculadora sem memória — faz uma conta e esquece tudo. As variáveis são as "caixinhas" onde o computador guarda um número, um texto ou uma resposta de sim ou não para usar depois.

Nesta aula o conceito central é simples e poderoso: toda variável tem um nome (que nós escolhemos) e um tipo (que diz que espécie de informação cabe ali dentro). O aluno vai conhecer quatro tipos básicos que resolvem quase tudo nesta idade: String para texto, Integer para números inteiros, Double para números com vírgula e Boolean para verdadeiro ou falso. A palavra que cria a caixinha é Dim — uma das primeiras palavras de código que o aluno vai escrever de verdade.

Na prática, cada aluno vai abrir o Editor VBA, criar um módulo, escrever uma macro própria e dentro dela declarar variáveis, colocar valores nelas, somar dois números e juntar dois textos. Para ver o resultado, vamos usar a janela de mensagem MsgBox de forma bem básica (apenas para mostrar o conteúdo de uma variável) — o MsgBox por completo é tema da Aula 7, então aqui ele aparece só como "janelinha que mostra o que está guardado".

Ao final, cada aluno terá escrito sozinho uma pequena macro que guarda dados em variáveis, faz uma soma, monta uma frase juntando texto e número, e exibe tudo numa mensagem. É o momento em que a ideia abstrata de "caixinha que guarda informação" vira algo concreto e visível na tela, preparando o terreno para as decisões com If da próxima aula.`,
  materiais: [
    `Computadores (1 por aluno) com Microsoft Excel instalado e o Editor VBA já testado pelo professor (guia Desenvolvedor habilitada)`,
    `Projetor ou TV conectado ao computador do professor para mostrar cada linha de código sendo digitada`,
    `Arquivo de exemplo "variáveis-modelo.xlsm" preparado pelo professor, com um módulo vazio pronto e o nome da turma na primeira aba`,
    `Cartão impresso ou slide com a "tabela dos quatro tipos": String (texto), Integer (inteiro), Double (com vírgula), Boolean (verdadeiro/falso)`,
    `Quadro branco ou flip chart para desenhar as "caixinhas" com nome e conteúdo durante a explicação`,
    `Lista impressa com 3 exemplos de código prontos para copiar, caso algum aluno trave na digitação`,
  ],
  conceitosChave: [
    `Variável — uma caixinha com nome que guarda um valor (um número, um texto ou uma resposta) para o programa usar quando precisar.`,
    `Dim — palavra de código que cria (declara) uma variável; escrevemos "Dim nome As Tipo", por exemplo "Dim idade As Integer".`,
    `Tipo — a espécie de informação que cabe na variável; define se ela guarda texto, número inteiro, número com vírgula ou verdadeiro/falso.`,
    `String — tipo usado para texto, como nomes e frases; o valor sempre vem entre aspas, por exemplo "Maria".`,
    `Integer — tipo usado para números inteiros, sem vírgula, como 7, 30 ou 100 (idade, quantidade, pontos).`,
    `Double — tipo usado para números com casas decimais (vírgula), como 1,75 de altura ou 9,5 de nota.`,
    `Boolean — tipo que só aceita dois valores: True (verdadeiro) ou False (falso); serve para responder perguntas de sim ou não.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. Basta entender uma frase: variável é uma caixinha que tem um nome e guarda um valor de um certo tipo. Toda a aula gira em torno disso. A palavra Dim cria a caixinha; o tipo (String, Integer, Double, Boolean) diz o que cabe dentro; o sinal de igual (=) coloca um valor lá. Antes da aula, abra o Excel, vá na guia Desenvolvedor, clique em Visual Basic (ou use o atalho Alt + F11) para abrir o Editor. No menu do Editor clique em Inserir > Módulo e teste digitar a macro de exemplo abaixo, rodando com a tecla F5. Veja a mensagem aparecer — esse é o "momento mágico" que vai encantar a turma. Se a guia Desenvolvedor não aparecer, ative em Arquivo > Opções > Personalizar Faixa de Opções e marque a caixa Desenvolvedor.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): No quadro, desenhe três caixas com etiquetas: nome, idade, altura. Coloque dentro "Ana", 12 e 1,55. Pergunte: "Como o computador guarda essas informações?". Conduza até a resposta: em variáveis. Mostre que cada caixa guarda um tipo diferente (texto, inteiro, com vírgula). Reabra rapidamente o Editor VBA (Alt + F11) revisando a Aula 1.

Conteúdo novo guiado (15 min): Com o projetor ligado, em Inserir > Módulo, digite linha a linha, explicando cada parte. Comece com: Sub MinhaPrimeiraVariavel() na primeira linha. Depois Dim nome As String e explique: "Dim cria a caixinha, nome é a etiqueta, As String diz que guarda texto". Em seguida nome = "Ana" e diga "o igual coloca o valor dentro; texto vai entre aspas". Adicione Dim idade As Integer e idade = 12 (sem aspas, é número). Depois MsgBox nome e rode com F5 para mostrar "Ana" na tela. Mostre a soma: Dim pontos As Integer / pontos = 7 + 3 / MsgBox pontos. Por fim, junte texto e número com o sinal &: MsgBox nome & " tem " & idade & " anos". Feche o procedimento com End Sub.

Mão na massa (25 min): Os alunos abrem o "variáveis-modelo.xlsm", entram no Editor (Alt + F11) e no módulo já existente escrevem a própria macro. Tarefa: declarar quatro variáveis (uma de cada tipo) com os próprios dados, fazer uma soma com Integer e exibir uma frase com MsgBox juntando nome e idade usando &. Circule pela sala — turma de 10 permite atenção individual. Confira se cada um usou Dim, escolheu o tipo certo e rodou com F5.

Desafio e compartilhar (10 min): Cada aluno mostra sua macro rodando para o colega ao lado, lendo a frase que apareceu na tela. Dois ou três voluntários projetam a própria mensagem para a turma. Pergunte por que escolheram cada tipo.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da caixinha o tempo todo. "Variável é uma caixa com etiqueta: a etiqueta é o nome, o que tem dentro é o valor." Para os tipos, compare com gavetas diferentes: "Texto vai na gaveta String e sempre entra de aspas, como se fossem luvas. Número inteiro vai na gaveta Integer, sem vírgula. Número com vírgula vai na Double. E pergunta de sim ou não vai na Boolean, que só tem dois lugares: True e False." Diga que o sinal de igual não é "igual da matemática", e sim uma seta que empurra o valor para dentro da caixa. Mostre sempre rodando com F5 — adolescentes acreditam quando veem na tela, não quando ouvem a teoria.

## Erros comuns e como ajudar

O erro mais comum é esquecer as aspas no texto: "Ana" funciona, Ana sem aspas dá erro. Mostre que aspas só valem para String. O segundo é colocar vírgula ou texto numa variável Integer (idade = 12,5 ou idade = "doze") — explique que cada gaveta só aceita o seu tipo. O terceiro é confundir o sinal & (junta textos) com o sinal + (soma números); peça para lerem em voz alta "junta" quando virem o &. O quarto é digitar o nome da variável diferente em cada linha (idade numa, Idade noutra) — o VBA não liga para maiúsculas, mas oriente a manter igual para não se perder. Por fim, muitos esquecem o End Sub no final; lembre que toda macro abre com Sub e fecha com End Sub, como abrir e fechar uma porta.`,
  exercicios: [
    {
      titulo: `Adivinhe o tipo certo`,
      tipo: `Roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Aquecimento sem computador. Leia uma lista de informações em voz alta e a turma responde qual tipo de variável cada uma pediria. O objetivo é fixar a diferença entre os quatro tipos antes de programar. Aceite a discussão e corrija com calma.`,
      atividade: `Para cada informação que o professor disser, diga em qual tipo de variável ela deve ser guardada (String, Integer, Double ou Boolean): seu nome; sua idade; sua altura em metros; se você gosta de pizza (sim ou não); a nota 9,5; a quantidade de irmãos.`,
      gabarito: `Nome = String (texto). Idade = Integer (número inteiro). Altura em metros = Double (tem vírgula, ex.: 1,60). Gosta de pizza = Boolean (sim/não, True/False). Nota 9,5 = Double (tem vírgula). Quantidade de irmãos = Integer (número inteiro). Aceitar a resposta como certa quando o aluno justifica pelo formato do valor (tem vírgula, é texto, é sim/não).`,
    },
    {
      titulo: `Minha primeira caixinha`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre projetado o caminho antes de soltar a turma. Reforce a sequência: Alt + F11 para abrir o Editor, Inserir > Módulo, escrever a macro e rodar com F5. Circule conferindo se cada aluno achou o módulo e usou Dim corretamente.`,
      atividade: `No arquivo "variáveis-modelo.xlsm", abra o Editor VBA (Alt + F11) e, dentro do módulo, escreva uma macro que cria uma variável de texto com o seu nome e mostra esse nome numa mensagem. Rode com F5. Use este modelo: Sub MeuNome() / Dim nome As String / nome = "seu nome aqui" / MsgBox nome / End Sub.`,
      gabarito: `A macro deve começar com Sub e um nome, declarar Dim nome As String, atribuir o texto entre aspas (nome = "Lucas"), exibir com MsgBox nome e terminar com End Sub. Ao rodar com F5, uma janelinha mostra o nome digitado. Correto quando o texto está entre aspas e a mensagem aparece na tela sem erro.`,
    },
    {
      titulo: `Somando pontos do jogo`,
      tipo: `Prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Agora entram os números. O foco é usar o tipo Integer e o sinal + para somar. Lembre que número não leva aspas. Tenha a lista de exemplos impressa para quem travar na digitação. Confira o resultado na tela de cada aluno.`,
      atividade: `Escreva uma nova macro que guarda os pontos de duas fases de um jogo em duas variáveis Integer, soma as duas e mostra o total numa mensagem. Exemplo: Dim fase1 As Integer / Dim fase2 As Integer / fase1 = 8 / fase2 = 5 / Dim total As Integer / total = fase1 + fase2 / MsgBox total. Rode com F5.`,
      gabarito: `Devem existir três variáveis Integer (as duas fases e o total), os valores atribuídos sem aspas, a soma feita com fase1 + fase2 guardada em total e o MsgBox total mostrando o resultado. Com fase1 = 8 e fase2 = 5, a mensagem mostra 13. Correto quando o total exibido é a soma certa dos dois números.`,
    },
    {
      titulo: `Montando uma frase com & (em dupla)`,
      tipo: `Em dupla`,
      tempo: `9 min`,
      guiaProfessor: `Forme duplas para que um confira o código do outro. O conceito novo é juntar texto e número com o sinal &. Reforce a diferença: & junta, + soma. Passe nas duplas garantindo que os espaços e as aspas estejam certos na frase.`,
      atividade: `Em dupla, criem uma macro que guarda um nome (String) e uma idade (Integer) e mostra a frase completa numa mensagem juntando tudo com o sinal &. Modelo: Dim nome As String / Dim idade As Integer / nome = "Bia" / idade = 13 / MsgBox nome & " tem " & idade & " anos". Um digita, o outro confere; depois troquem.`,
      gabarito: `A frase deve usar o sinal & para juntar a variável nome, o texto " tem " (com espaços e aspas), a variável idade e o texto " anos". Com nome = "Bia" e idade = 13, a mensagem mostra: Bia tem 13 anos. Correto quando aparece a frase completa, com os espaços nos lugares certos, sem erro ao rodar com F5.`,
    },
    {
      titulo: `Minha ficha em código`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Fechamento da aula. Cada aluno cria uma macro que usa os quatro tipos numa "ficha pessoal" e exibe uma frase final. Selecione dois ou três voluntários para projetar a mensagem. Valorize a escolha correta de cada tipo, não a complexidade.`,
      atividade: `Crie uma macro chamada MinhaFicha que declare quatro variáveis, uma de cada tipo: nome (String), idade (Integer), altura (Double) e gostaDeProgramar (Boolean). Coloque seus próprios dados em cada uma e mostre numa única mensagem uma frase juntando nome, idade e altura com o sinal &. Rode com F5.`,
      gabarito: `Resultado esperado: uma macro entre Sub MinhaFicha() e End Sub com quatro variáveis declaradas com Dim, cada uma do tipo correto (String com aspas, Integer sem vírgula, Double com vírgula, Boolean com True ou False). A mensagem junta nome, idade e altura usando &, por exemplo: "Ana tem 12 anos e mede 1,55". Correto quando os quatro tipos estão certos e a frase aparece na tela sem erro. O aluno deve saber explicar por que escolheu cada tipo (ex.: "altura é Double porque tem vírgula").`,
    },
  ],
};
