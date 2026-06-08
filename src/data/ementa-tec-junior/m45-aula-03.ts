import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Meu Primeiro Comando: print",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Fazer cada criança escrever o seu primeiro comando print em Lua dentro do Roblox Studio e ver o computador responder com a mensagem dela na janela de Output.`,
  descricao: `Esta é a aula em que a mágica acontece: pela primeira vez, a criança vai escrever uma ordem em linguagem Lua e o computador vai obedecer na hora, mostrando a mensagem dela na tela. Nas duas aulas anteriores elas entenderam o que são códigos de texto e passearam por dentro do Roblox Studio. Agora chega o primeiro comando de verdade, o mais famoso de todos: o print. A palavra print, em inglês, quer dizer "mostrar" ou "imprimir na tela". Quando escrevemos print("Olá"), estamos dizendo ao computador: "ei, escreva Olá ali na janelinha de mensagens".

O coração desta aula é a janela de Output (saída). É nela que o computador "fala" de volta com a gente. A criança digita o comando, aperta o botão de testar e vê a frase aparecer escrita lá embaixo. Esse momento de "o computador me respondeu!" é poderoso: pela primeira vez a criança não está só clicando em botões prontos, ela está mandando no computador com palavras que ela mesma escreveu.

Para o print funcionar, três coisas precisam estar certinhas, e elas formam o tesouro desta aula. Primeiro, a palavra print, escrita exatamente assim, com letras minúsculas. Segundo, os parênteses, que são como duas mãozinhas que seguram o que queremos mostrar. Terceiro, as aspas, que são como duas plaquinhas que dizem ao computador "isto aqui é um texto, uma frase para mostrar do jeitinho que está". Se faltar uma aspa, ou um parêntese, ou se a criança escrever Print com letra maiúscula, o computador fica confuso e não obedece. Não tem problema: errar e ver a mensagem vermelha faz parte e será trabalhado com calma na próxima aula.

Ao final, cada criança terá feito o computador "falar" várias frases criadas por ela: o próprio nome, uma saudação para a turma, o nome do seu jogo dos sonhos. Elas sairão da sala entendendo que programar é dar ordens claras, escritas exatamente como manda a regra, e que o computador é obediente, mas muito literal: ele faz exatamente o que está escrito, nem mais, nem menos.`,
  materiais: [
    `Computadores com o Roblox Studio já aberto, um lugar (Baseplate) novo carregado e a janela de Output visível`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo na tela`,
    `Exemplo pronto no projetor: um Script com a linha print("Olá, turma!") já digitada para mostrar funcionando`,
    `Cartão impresso com a "fórmula do print" para cada criança: print, parênteses e aspas destacados em cores`,
    `Folha de frases para copiar (nome, saudação, nome do jogo dos sonhos) para os alunos que ainda escrevem devagar`,
    `Adesivos ou carimbos de "Primeiro Comando" para premiar quem fizer o computador falar`,
    `Quadro branco para escrever a fórmula print("texto") bem grande e à vista de todos`,
  ],
  conceitosChave: [
    `Comando — uma ordem que você dá ao computador escrevendo uma palavra mágica que ele entende.`,
    `print — o comando que manda o computador mostrar uma mensagem na tela para a gente ler.`,
    `Output — a janelinha de saída onde o computador "fala" de volta e mostra as suas mensagens.`,
    `Aspas — as duas plaquinhas " " que abraçam um texto e dizem ao computador "isto é uma frase para mostrar".`,
    `Parênteses — as duas mãozinhas ( ) que seguram aquilo que o comando print vai mostrar.`,
    `Texto (string) — qualquer frase ou palavra que fica dentro das aspas, do jeitinho que você escreveu.`,
    `Rodar o código — apertar o botão de testar para o computador ler e obedecer aos seus comandos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar programação para dar esta aula. Basta entender uma única linha de código e três botões do Roblox Studio. A linha mágica é esta: print("Olá, turma!"). Ela manda o computador mostrar a frase Olá, turma! na janela de mensagens.

Antes da aula, abra o Roblox Studio e crie um lugar novo clicando em "Baseplate" (o quadrado liso). Você precisa deixar três janelas à vista. Primeiro, o Output (saída): vá no menu de cima, clique na aba "View" (Exibir) e clique em "Output"; uma janela cinza vai aparecer embaixo. É nela que as mensagens do print aparecem. Segundo, você cria um Script: na janela "Explorer" (Explorador), à direita, passe o mouse sobre "ServerScriptService", clique no sinal de mais (+) que aparece e escolha "Script". Uma aba de código abre no centro, já com a linha print("Hello world!") escrita de fábrica. Terceiro, o botão azul "Play" (um triângulo) no topo, na aba "Home" ou "Test", que faz o código rodar; ao lado fica o "Stop" (quadrado vermelho) para parar.

Faça o teste você mesmo uma vez: apague a linha de fábrica, digite print("Olá, turma!"), aperte "Play" e veja a frase aparecer no Output. Aperte "Stop". Pronto, é só isso que a criança vai fazer.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Em roda, relembre as aulas anteriores. Pergunte: "o que é um código de texto?" e "onde a gente escreve código no Roblox?". Diga que hoje vamos escrever o primeiro comando de verdade e fazer o computador FALAR com a gente. Brinque de "computador obediente": você é o computador e só faz exatamente o que mandam. Se a criança disser "pula", você pula; se disser "pula" sem dizer quantas vezes, você pula uma vez só. Isso ensina que o computador é literal.

Conteúdo novo guiado (15 min): No projetor, mostre o Script já aberto. Escreva no quadro, bem grande: print("texto"). Aponte cada parte: a palavra print (minúscula), os parênteses (as mãozinhas) e as aspas (as plaquinhas). Digite na frente deles print("Olá, turma!"), aperte o "Play" azul e mostre a frase aparecendo no Output. Comemore. Depois mude a frase para o seu nome e rode de novo. Repita devagar onde fica cada botão.

Mão na massa (25 min): Cada criança vai ao seu computador, apaga a linha de fábrica do Script e digita print("") com o próprio nome dentro das aspas, por exemplo print("Sou o Pedro!"). Aperta "Play", vê no Output e aperta "Stop". Circule pela sala ajudando com as aspas e os parênteses. Quem conseguir, escreve uma segunda frase: uma saudação para a turma. Quem voar, escreve uma terceira: o nome do jogo dos sonhos.

Desafio e compartilhar (10 min): Desafie cada um a fazer o computador falar três frases diferentes, uma embaixo da outra (três linhas de print). Depois, cada criança mostra o seu Output no projetor e lê em voz alta o que o computador "falou". Carimbo de "Primeiro Comando" para todos.

## Como explicar para crianças

Use a analogia da mágica das palavras: "print é uma palavra mágica; quando você escreve ela do jeito certo, o computador obedece e mostra a sua mensagem". Chame os parênteses de "mãozinhas que seguram a frase" e as aspas de "plaquinhas que dizem isto é um texto". Diga que o computador é como um robô muito bonzinho, mas que só entende ordens escritas EXATAMENTE como manda a regra: uma aspa esquecida e ele fica perdido. Compare o Output com a boca do computador: é por ali que ele responde.

## Erros comuns e como ajudar

A criança escreve Print com letra maiúscula: mostre que o computador é exigente e só entende print tudo minúsculo. A criança esquece de fechar as aspas ou os parênteses: ensine a regra "o que abre, fecha" e conte sempre aos pares (duas aspas, dois parênteses). A criança digita as aspas curvas do celular em vez das retas: use as aspas retas do teclado do computador. A criança não vê a mensagem: confirme que a janela Output está aberta (aba "View") e que ela apertou o "Play" azul. A criança aperta "Play" e nada aparece porque esqueceu de salvar a linha: peça para clicar fora do texto antes de rodar. Se aparecer mensagem vermelha, acolha: "isso é o computador avisando que tem um errinho; na próxima aula a gente vira detetive de bugs".`,
  exercicios: [
    {
      titulo: `O computador obediente`,
      tipo: `Roda de conversa e dramatização`,
      tempo: `7 minutos`,
      guiaProfessor: `Sem computador. Você faz o papel do computador e só obedece a ordens claras. A criança dá um comando em voz alta ("levante o braço", "dê um pulo") e você executa exatamente, de forma literal. Se faltar informação, faça do jeito mais bobo possível para mostrar que o computador é literal.`,
      atividade: `Dê uma ordem para o professor-computador, como "levante o braço" ou "dê dois pulos". Veja se ele faz exatamente o que você mandou. Depois tente uma ordem confusa e veja o que acontece.`,
      gabarito: `A criança percebe que o computador faz só o que foi dito, do jeitinho que foi dito. Acerto = entender que precisamos ser claros e exatos. Exemplo: ao ouvir "pule", o professor pula uma vez; a criança nota que precisava dizer "pule três vezes" para mais pulos.`,
    },
    {
      titulo: `Caça às partes do print`,
      tipo: `Atividade no cartão`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no quadro a fórmula print("texto"). Entregue o cartão e peça para a criança circular as três partes em cores: a palavra print, os parênteses e as aspas. Para quem não lê bem, aponte e nomeie cada parte junto com ela.`,
      atividade: `No seu cartão, pinte de uma cor a palavra print, de outra cor os dois parênteses (as mãozinhas) e de outra cor as duas aspas (as plaquinhas). Mostre para um colega onde está cada parte.`,
      gabarito: `As três partes corretamente identificadas: print, ( ) e " ". Acerto = saber nomear e apontar cada uma. Exemplo: em print("Oi"), a criança aponta print como a palavra mágica, ( ) como as mãozinhas e " " como as plaquinhas em volta de Oi.`,
    },
    {
      titulo: `Fazendo o computador dizer meu nome`,
      tipo: `Prática no Roblox Studio`,
      tempo: `10 minutos`,
      guiaProfessor: `Com o Script aberto, a criança apaga a linha de fábrica e digita print com o próprio nome dentro das aspas. Aperta o "Play" azul, olha o Output e aperta "Stop". Circule conferindo aspas e parênteses fechados. Deixe a janela Output já aberta antes da aula.`,
      atividade: `No seu Script, apague o que estiver escrito e digite: print("Sou o seu nome aqui!"). Troque por SEU nome de verdade dentro das aspas. Aperte o botão azul Play e veja o computador escrever na janela Output. Depois aperte o Stop.`,
      gabarito: `A frase com o nome da criança aparece no Output. Acerto = print, aspas e parênteses corretos e a mensagem visível. Exemplo: print("Sou a Júlia!") mostra Sou a Júlia! na janela de saída. Erro comum: esquecer uma aspa; oriente a contar aos pares.`,
    },
    {
      titulo: `Conserte o comando quebrado`,
      tipo: `Desafio de correção`,
      tempo: `8 minutos`,
      guiaProfessor: `No projetor, escreva três comandos com um errinho cada: Print("Oi") com P maiúsculo, print("Oi sem a aspa final e print "Oi") sem o parêntese. A turma descobre o erro de cada um. Conduza como um joguinho de detetive. Em seguida, peça para corrigirem no computador.`,
      atividade: `Olhe estes três comandos com defeito e diga qual é o erro de cada um: 1) Print("Oi"); 2) print("Oi; 3) print "Oi"). Depois escreva os três corrigidos no seu computador e rode para conferir.`,
      gabarito: `1) o P deve ser minúsculo: print("Oi"); 2) falta a aspa que fecha: print("Oi"); 3) faltam os parênteses: print("Oi"). Acerto = identificar e corrigir os três. Ao rodar, cada versão certa mostra Oi no Output.`,
    },
    {
      titulo: `Três frases de cada vez`,
      tipo: `Desafio final e compartilhar`,
      tempo: `7 minutos`,
      guiaProfessor: `A criança escreve três linhas de print, uma embaixo da outra: uma saudação, o nome do jogo dos sonhos e uma frase livre. Aperta "Play" e as três aparecem no Output em ordem. Depois mostra no projetor e lê em voz alta. Premie com o carimbo "Primeiro Comando".`,
      atividade: `Escreva três comandos print, um em cada linha: na primeira, uma saudação para a turma; na segunda, o nome do seu jogo dos sonhos; na terceira, uma frase que você quiser. Aperte Play e leia para todos o que o computador falou.`,
      gabarito: `Três linhas de print válidas que mostram três mensagens no Output, na ordem em que foram escritas. Acerto = todas com print, aspas e parênteses corretos. Exemplo: print("Oi, turma!") seguido de print("Meu jogo: Corrida Mágica") e print("Eu consegui!").`,
    },
  ],
};
