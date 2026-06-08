import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Conversando com MsgBox e InputBox",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Criar macros que conversam com o usuário, mostrando mensagens personalizadas com MsgBox (incluindo botões Sim/Não e ícones) e pedindo dados com InputBox, e ligar a resposta a um If para que a macro reaja de forma interativa.`,
  descricao: `Até agora as macros da turma trabalhavam em silêncio: guardavam dados em variáveis, tomavam decisões com If, repetiam com loops e escreviam nas células, mas nunca FALAVAM com quem está usando a planilha. Nesta aula isso muda. O aluno aprende a fazer o código abrir uma janelinha de mensagem na tela com MsgBox e a fazer o código PERGUNTAR algo ao usuário com InputBox. É o momento em que a macro deixa de ser uma máquina muda e começa a conversar de verdade, como um aplicativo de celular que avisa "Salvo com sucesso!" ou pergunta "Tem certeza que deseja sair?".

O MsgBox é a caixa de mensagem. Na forma mais simples, ele só mostra um texto e um botão OK. Mas ele pode fazer muito mais: dá para escolher quais botões aparecem (só OK, ou Sim e Não), qual ícone aparece ao lado do texto (um "i" de informação, um triângulo de aviso, um "x" de erro) e qual é o título da janela. O segredo é que o MsgBox, quando tem botões Sim/Não, DEVOLVE uma resposta: ele conta para o código qual botão a pessoa clicou. Guardando essa resposta numa variável e testando com If, a macro decide o que fazer em seguida. É aqui que a aula amarra tudo: a conversa vira decisão.

O InputBox é o irmão que faz a pergunta. Em vez de só mostrar texto, ele abre uma caixa com um campo em branco onde a pessoa digita uma resposta — um nome, um número, uma cidade. O que a pessoa digitar volta para o código e pode ser guardado numa variável, escrito numa célula ou usado num If. Com InputBox o aluno cria macros que se adaptam a cada usuário: "Qual é o seu nome?", "Quantos pontos você fez?", "Digite a meta do mês". A planilha passa a responder a quem está na frente dela.

Como o professor pode ser iniciante em Excel + VBA, este material traz o código exato, linha a linha, e mostra exatamente onde clicar para abrir o Editor, criar a macro, rodar com a tecla F5 e ver a janelinha aparecer. O objetivo da turma este mês é entregar "mensagens e botões funcionando"; esta aula constrói justamente a parte das MENSAGENS interativas, deixando o terreno pronto para a Aula 8, em que tudo será ligado a um botão na planilha.`,
  materiais: [
    `Computadores com o Excel instalado e a aba Desenvolvedor já habilitada, um por aluno, com o Editor VBA acessível pelo atalho Alt+F11`,
    `Projetor ou TV para o professor demonstrar o código e mostrar a janelinha do MsgBox e do InputBox aparecendo na tela`,
    `Arquivo de exemplo pronto pelo professor (.xlsm, com macros habilitadas) contendo um botão de exemplo e uma planilha simples para escrever as respostas`,
    `Conta Microsoft da escola já logada no Excel, para salvar os arquivos no formato .xlsm sem perder as macros`,
    `Folha de apoio impressa com o "cardápio" de botões (vbYesNo, vbOKOnly) e de ícones (vbInformation, vbExclamation, vbQuestion, vbCritical)`,
    `Quadro ou cartaz com o modelo das duas funções sempre à vista: resposta = MsgBox("texto", botões, "título") e nome = InputBox("pergunta", "título")`,
    `Pendrive ou pasta no OneDrive para salvar o arquivo .xlsm de cada aluno com segurança`,
  ],
  conceitosChave: [
    `MsgBox — comando que abre uma caixa de mensagem na tela com um texto e um ou mais botões para o usuário clicar.`,
    `InputBox — comando que abre uma caixa com um campo em branco e devolve ao código aquilo que o usuário digitar.`,
    `Argumento — cada informação que se passa para dentro dos parênteses do comando, como o texto, os botões e o título.`,
    `Constante de botão — palavra pronta do VBA que escolhe quais botões aparecem, como vbOKOnly (só OK) ou vbYesNo (Sim e Não).`,
    `Constante de ícone — palavra pronta que escolhe o desenho ao lado do texto, como vbInformation, vbExclamation, vbQuestion ou vbCritical.`,
    `Valor de retorno — a resposta que o comando devolve ao código; no MsgBox indica o botão clicado (vbYes ou vbNo) e no InputBox é o texto digitado.`,
    `Variável de resposta — variável que guarda o que o usuário respondeu, para depois ser testada com um If e decidir o que a macro faz.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai ensinar duas ferramentas de conversa: MsgBox (mostra mensagem) e InputBox (faz pergunta). Antes da aula, abra o Editor VBA (Alt+F11) e teste você mesmo os três exemplos abaixo, para ver as janelinhas aparecerem. Lembre-se de salvar o arquivo como .xlsm (Pasta de Trabalho Habilitada para Macro), senão o código se perde ao fechar.

O modelo do MsgBox completo é: resposta = MsgBox("texto", vbYesNo + vbQuestion, "título"). O texto é o que aparece; o segundo argumento soma um botão (vbOKOnly ou vbYesNo) com um ícone (vbInformation, vbExclamation, vbQuestion, vbCritical); o terceiro é o título da janela. Quando usamos vbYesNo, o MsgBox DEVOLVE vbYes ou vbNo, e guardamos isso numa variável para testar com If. O modelo do InputBox é: nome = InputBox("pergunta", "título"). O que a pessoa digitar volta como texto. Detalhe importante: MsgBox com retorno PRECISA de parênteses (resposta = MsgBox(...)); MsgBox que só mostra e não guarda resposta pode ir sem parênteses (MsgBox "Olá").

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento/revisão: Retome a Aula 6 com perguntas rápidas: "Como o código escreve numa célula?" (Range("A1").Value = ...), "Como o If decide?". Projete uma macro muda e pergunte: "Como ela avisa o usuário que terminou?". Mostre o objetivo de hoje: a macro vai conversar.

15 min - Conteúdo novo guiado: No Editor VBA (Alt+F11), em Inserir > Módulo, digite junto com a turma. Primeiro o MsgBox simples: Sub Avisar() / MsgBox "Tudo certo!", vbInformation, "Aviso" / End Sub. Rode com F5 e veja a janela. Depois o MsgBox com decisão: Sub Confirmar() / Dim resposta As Integer / resposta = MsgBox("Deseja apagar?", vbYesNo + vbQuestion, "Confirme") / If resposta = vbYes Then / MsgBox "Apagado!" / Else / MsgBox "Cancelado." / End If / End Sub. Por fim o InputBox: Sub Saudar() / Dim nome As String / nome = InputBox("Qual é o seu nome?", "Boas-vindas") / MsgBox "Olá, " & nome & "!" / End Sub. Explique cada linha: Dim cria a variável; o sinal & junta textos.

25 min - Mão na massa: Cada aluno digita os três exemplos no próprio módulo e roda cada um com F5, vendo as janelas. Depois personaliza: troca os textos, testa outros ícones (vbExclamation, vbCritical) e cria um InputBox que pergunta um número e usa If para responder de forma diferente. Circule conferindo parênteses e o sinal &.

10 min - Desafio + compartilhar: Cada aluno cria uma macro que pergunta a idade com InputBox e responde com MsgBox usando If (por exemplo, "Você é da turma!" ou "Quase lá!"). Em roda, dois ou três alunos rodam a macro na frente da turma e mostram a janela conversando.

## Como explicar de forma clara (linguagem para a idade)

Compare o MsgBox com as notificações do celular: "É a macro batendo na sua porta para avisar algo." Compare o InputBox com um formulário ou com o campo de busca: "A macro faz uma pergunta e espera você digitar." Para o retorno do MsgBox, use a imagem de um garçom: "Você pede Sim ou Não, e ele volta com a sua escolha na bandeja — o código lê essa bandeja com o If." Para o sinal &, diga que ele é a "cola de palavras", grudando o texto fixo com o que a pessoa digitou.

## Erros comuns e como ajudar

O erro mais frequente é esquecer os parênteses quando se guarda a resposta: resposta = MsgBox(...) PRECISA de parênteses; sem eles o VBA reclama. Outro é escrever vbYesNo errado (vbyesno minúsculo costuma funcionar, mas "vb Yes No" com espaços não); mostre a lista de constantes da folha de apoio. Muitos esquecem o sinal & ou as aspas ao juntar textos, gerando "Erro de compilação"; ensine a ler o & como "junte aqui". Há quem teste resposta = "Sim" em vez de resposta = vbYes; reforce que o MsgBox devolve vbYes/vbNo, não a palavra. Por fim, alguns esquecem de salvar como .xlsm e perdem tudo; estabeleça o ritual de salvar (Ctrl+B) já no formato habilitado para macro.`,
  exercicios: [
    {
      titulo: `Primeira mensagem na tela com MsgBox`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno está com o Editor VBA aberto (Alt+F11) e com um módulo inserido (Inserir > Módulo). Mostre no projetor onde fica a tecla F5 para rodar. Confira se a janelinha realmente apareceu na tela de cada um.`,
      atividade: `No seu módulo, digite a macro: Sub Avisar() / MsgBox "Minha primeira mensagem!", vbInformation, "Santos Tech" / End Sub. Rode com F5 e veja a janela aparecer. Depois troque o texto e o título por palavras suas e rode de novo.`,
      gabarito: `A macro abre uma janela com o texto digitado, o ícone azul de informação e o título escolhido, e fecha ao clicar em OK. Código esperado: MsgBox "Minha primeira mensagem!", vbInformation, "Santos Tech". Erro típico a corrigir: faltar as aspas no texto ou a vírgula entre os argumentos.`,
    },
    {
      titulo: `Trocando o ícone e o botão`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre a folha de apoio com o cardápio de ícones (vbInformation, vbExclamation, vbQuestion, vbCritical) e de botões (vbOKOnly, vbYesNo). Deixe a turma experimentar e observar a diferença na tela. Reforce que se soma botão + ícone com o sinal de mais.`,
      atividade: `Crie uma macro chamada Sub Testar() que mostre uma mensagem usando vbExclamation e o botão vbOKOnly. Rode com F5. Depois troque para vbCritical e depois para vbQuestion, rodando a cada troca para ver o ícone mudar. Escolha o que você mais gostou.`,
      gabarito: `A cada execução a janela mostra o ícone correspondente (triângulo de aviso, "x" vermelho de erro ou interrogação) ao lado do texto. Linha esperada, por exemplo: MsgBox "Atenção!", vbExclamation + vbOKOnly, "Teste". Sinal de sucesso: o aluno consegue nomear o que cada ícone significa.`,
    },
    {
      titulo: `Perguntando o nome com InputBox`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Relembre o modelo nome = InputBox("pergunta", "título") e o sinal & como "cola de palavras". Circule conferindo as aspas e o & no MsgBox final. Mostre que o que foi digitado pode também ir para uma célula com Range("A1").Value = nome.`,
      atividade: `Escreva a macro: Sub Saudar() / Dim nome As String / nome = InputBox("Qual é o seu nome?", "Boas-vindas") / MsgBox "Olá, " & nome & "! Bem-vindo à Santos Tech." / End Sub. Rode com F5, digite seu nome e veja a resposta. Como desafio, escreva também o nome digitado na célula A1.`,
      gabarito: `O InputBox pede o nome; depois o MsgBox mostra a saudação com o nome digitado no meio (ex.: "Olá, Ana! Bem-vindo à Santos Tech."). No desafio, A1 recebe o nome. Erro típico: esquecer o & ou as aspas, ou trocar Dim nome As String por tipo errado. Sinal de sucesso: a mensagem muda conforme o nome digitado.`,
    },
    {
      titulo: `A macro que decide pela resposta (em dupla)`,
      tipo: `em dupla`,
      tempo: `6 min`,
      guiaProfessor: `Forme duplas. Relembre que MsgBox com vbYesNo PRECISA de parênteses e devolve vbYes ou vbNo, testados com If. Oriente as duplas a digitarem juntas e depois testarem clicando em Sim e em Não, conferindo se cada caminho responde certo.`,
      atividade: `Em dupla, escrevam a macro: Sub Confirmar() / Dim resposta As Integer / resposta = MsgBox("Deseja continuar?", vbYesNo + vbQuestion, "Confirme") / If resposta = vbYes Then / MsgBox "Você escolheu Sim!" / Else / MsgBox "Você escolheu Não." / End If / End Sub. Rodem com F5 e testem clicando em Sim e depois em Não.`,
      gabarito: `Clicar em Sim mostra "Você escolheu Sim!" e clicar em Não mostra "Você escolheu Não." A linha-chave é resposta = MsgBox("Deseja continuar?", vbYesNo + vbQuestion, "Confirme") COM parênteses, e o If compara resposta = vbYes. Erro típico: faltar os parênteses ou comparar com "Sim" em vez de vbYes.`,
    },
    {
      titulo: `Mini macro interativa: pergunta, decide e responde`,
      tipo: `projeto curto`,
      tempo: `4 min`,
      guiaProfessor: `Conduza a roda final. Peça que cada aluno una InputBox + If + MsgBox numa única macro e salve o arquivo como .xlsm (Ctrl+B, formato Pasta de Trabalho Habilitada para Macro). Projete uma ou duas execuções e conecte com a Aula 8, em que essa macro será ligada a um botão.`,
      atividade: `Crie uma macro que pergunta sua idade com InputBox, guarda numa variável e usa If para responder de formas diferentes (ex.: se a idade for 13 ou mais, "Você está na turma dos grandes!", senão "Bem-vindo, caçula!"). Rode com F5, salve como .xlsm e, na roda, mostre sua macro conversando.`,
      gabarito: `A macro pergunta a idade, converte para número (ex.: idade = Val(InputBox("Quantos anos você tem?", "Idade"))) e o If escolhe a mensagem certa conforme o valor. Exemplo: If idade >= 13 Then MsgBox "Você está na turma dos grandes!" Else MsgBox "Bem-vindo, caçula!". O arquivo está salvo como .xlsm. Sinal de sucesso: a resposta muda conforme o número digitado e a macro está pronta para virar botão na Aula 8.`,
    },
  ],
};
