import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Chamando minha função no jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Conectar a função criada na aula anterior a um evento e a condições, e reaproveitar a mesma função em mais de um lugar do script, percebendo como funções deixam o código mais curto e organizado.`,
  descricao: `Na aula passada cada criança guardou um pedaço de código dentro de uma caixinha com nome: uma função. Mas uma caixinha guardada só faz alguma coisa quando a gente abre a caixinha, ou seja, quando a gente chama a função pelo nome dela. Hoje é a aula em que as caixinhas saem da prateleira e entram em ação dentro do jogo de verdade. O aluno vai aprender a escrever o nome da função seguido de parênteses para mandá-la rodar, exatamente no momento que ele quiser.

A grande sacada do dia é juntar tudo o que veio antes. Lá na Semana 1 aprendemos os eventos (quando algo acontece, como um jogador encostar numa parte). Na Semana 2 aprendemos as condições (se isso, então aquilo) e a marcar pontos. Agora ligamos esses fios: quando o evento acontece, dentro do "se" a gente chama a nossa função. A função vira o "então" da história. Em vez de repetir várias linhas toda vez, a criança escreve só o nome da caixinha e parênteses, e todo o conteúdo dela acontece de uma vez.

O coração da aula é a ideia de reaproveitar. A mesma função pode ser chamada em dois, três lugares diferentes do script. Se o jogo precisa dar pontos quando o jogador pega uma moeda e também quando ele vence uma fase, basta chamar a mesma função darPontos() nos dois lugares, em vez de copiar o código duas vezes. Quando algo precisar mudar, muda-se só dentro da caixinha, uma vez só, e o jogo inteiro melhora junto. É aqui que a criança sente, na pele, por que funções existem: o código fica mais curto, mais limpo e muito mais fácil de arrumar.

O professor demonstra tudo no projetor, devagar, dentro do Roblox Studio, mostrando onde escrever a chamada da função e o que aparece na janela de Output quando ela roda. Por ser uma turma de até dez alunos, dá tempo de passar de mesa em mesa e garantir que cada um chamou a sua própria função pelo menos em dois lugares e viu o resultado acontecer no jogo.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, cada um com o jogo e o Script da criança da aula anterior já carregado`,
    `Projetor ou TV ligado ao computador do professor para mostrar cada clique e cada linha de código no Roblox Studio`,
    `Um lugar (Part) já colocado no jogo de cada criança para servir de gatilho do evento Touched (a moeda, o botão ou a plataforma)`,
    `Script de exemplo pronto do professor, com uma função simples e duas chamadas dela em lugares diferentes, para comparar`,
    `Cartão impresso na mesa com o "molde" da chamada: nome da função mais parênteses, por exemplo darPontos()`,
    `Janela de Output do Roblox Studio visível (menu View, botão Output) para todos verem as mensagens da função aparecendo`,
    `Cartão de revisão com os blocos das semanas anteriores: evento Touched, condição if e a função criada`,
  ],
  conceitosChave: [
    `Função — uma caixinha de código com nome, que guarda vários comandos para serem usados depois.`,
    `Chamar a função — escrever o nome dela seguido de parênteses, como darPontos(), para mandar a caixinha rodar agora.`,
    `Parênteses () — os "óculos mágicos" no fim do nome que avisam o computador: pode abrir a caixinha e executar!`,
    `Reaproveitar — usar a mesma função em mais de um lugar do código, sem copiar tudo de novo.`,
    `Evento — um aviso de que algo aconteceu no jogo (por exemplo, um jogador encostar numa parte), que pode chamar a função.`,
    `Condição (if) — a regra "se isso, então aquilo"; dentro do "então" a gente pode chamar a função.`,
    `Output — a janelinha de mensagens do Roblox Studio onde aparece o que a função fez quando foi chamada.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar programação. A ideia central é uma só: uma função guardada não faz nada sozinha; ela só roda quando a gente a chama. Chamar é escrever o nome da função seguido de parênteses. Se a função se chama darPontos, a chamada é darPontos(). Toda vez que o computador lê essa linha, ele "abre a caixinha" e executa o que está dentro dela.

No Roblox Studio, o código fica num Script. Para ver os Scripts, use a janela Explorer (menu View, botão Explorer). Para ver as mensagens do código, abra a janela Output (menu View, botão Output). Antes da aula, abra o Script de exemplo e treine: encontre a função (começa com a palavra function e termina com a palavra end) e, mais abaixo, encontre as linhas que a chamam pelo nome com parênteses. Aperte o botão Play (a setinha azul lá em cima) e veja a mensagem aparecer no Output cada vez que a função roda. Aperte Stop (o quadrado) para parar.

Um exemplo simples que você pode digitar no Script:

local pontos = 0
local function darPontos()
  pontos = pontos + 1
  print("Pontos: " .. pontos)
end

darPontos()
darPontos()

As duas últimas linhas chamam a mesma caixinha duas vezes; o Output mostra Pontos: 1 e depois Pontos: 2. Esse é o pulo do gato da aula: a mesma função usada em mais de um lugar.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Roblox Studio)

10 min — Aquecimento e revisão. Reúna a turma de frente para o projetor. Relembre as caixinhas da aula passada: "Quem lembra o nome da função que criou?". Mostre no exemplo a função (function ... end) e pergunte o que será que faz a caixinha funcionar. Conduza para a resposta: chamar pelo nome com parênteses.

15 min — Conteúdo novo guiado. No seu Script de exemplo, mostre devagar a função darPontos. Embaixo dela, digite darPontos() e aperte Play (setinha azul). Mostre a mensagem no Output. Pare (Stop), digite a chamada uma segunda vez, dê Play de novo e mostre que apareceu duas vezes. Depois, conecte a um evento: dentro de um bloco de evento Touched de uma Part, com um if, chame darPontos() no lugar do "então". Mostre que agora, ao encostar na parte durante o Play, a função roda.

25 min — Mão na massa. Cada criança abre o próprio Script com a função que criou. Peça que escrevam o nome da função com parênteses e deem Play para vê-la rodar uma vez. Em seguida, o desafio do dia: chamar a mesma função em um segundo lugar — dentro do evento Touched da sua parte. Passe de mesa em mesa: confira que o nome está igualzinho ao da função, que tem os parênteses e que o Output mostra a função rodando ao encostar na parte.

10 min — Desafio e compartilhar. Cada criança dá Play, encosta na sua parte e mostra à turma a função rodando no Output. Pergunte: "Em quantos lugares você chamou a mesma caixinha?". Reforce que não foi preciso copiar o código, só chamar de novo.

## Como explicar para crianças

Use a imagem da caixinha: "A função é uma caixinha cheia de ações guardadas. Ela fica quietinha na prateleira até alguém chamar pelo nome." Diga que os parênteses são os óculos mágicos: "Sem os óculos, o computador só lê o nome e não faz nada; com os parênteses, ele abre a caixinha e roda tudo." Para o reaproveitar, use a analogia do controle remoto da televisão: "Você aperta o mesmo botão de muitos cantos da sala e a TV liga sempre igual; chamar a função é apertar o botão." E lembre que mudar a caixinha por dentro muda o jogo em todos os lugares de uma vez.

## Erros comuns e como ajudar

O erro mais comum é esquecer os parênteses: a criança escreve darPontos sem () e nada acontece; mostre que faltam os óculos mágicos. Outro é escrever o nome diferente do nome da função (letra trocada, maiúscula no lugar errado), porque em Lua darPontos e darpontos são nomes diferentes; peça para comparar letra por letra com a função lá em cima. Tem quem chame a função antes de ela existir no código (acima da linha function); explique que a caixinha precisa estar guardada antes de ser chamada. Há quem esqueça de apertar Play e ache que travou; lembre da setinha azul. E muitos esquecem de abrir o Output e não veem a mensagem; reabra pelo menu View, botão Output.`,
  exercicios: [
    {
      titulo: `Quem faz a caixinha funcionar?`,
      tipo: `Pergunta oral em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento, antes de demonstrar. Mostre no projetor a função do exemplo (function ... end) parada, sem nenhuma chamada. Pergunte à turma o que falta para ela rodar. Deixe as crianças arriscarem e conduza até a ideia de chamar pelo nome com parênteses.`,
      atividade: `Olhe a função na tela. Ela está guardada, mas nada acontece. Diga em voz alta: o que precisamos escrever para a caixinha abrir e rodar? Mostre com a mão como ficaria o nome da função com os parênteses.`,
      gabarito: `Para a função rodar, é preciso chamá-la: escrever o nome dela seguido de parênteses, por exemplo darPontos(). Sem a chamada, a caixinha fica guardada e nenhum comando de dentro dela acontece. Os parênteses são o sinal de "pode abrir e executar agora".`,
    },
    {
      titulo: `Coloco os óculos mágicos`,
      tipo: `Prática guiada curta`,
      tempo: `5 minutos`,
      guiaProfessor: `Logo após a demonstração. Cada criança abre o próprio Script, vai até embaixo da sua função e digita o nome dela com parênteses, numa linha nova. O objetivo é só fazer a primeira chamada e ver no Output. Confira mesa a mesa se o nome está idêntico ao da função e se há os parênteses.`,
      atividade: `No seu Script, embaixo da sua função, escreva o nome dela e ponha os parênteses no fim, assim: nomeDaSuaFuncao(). Aperte Play (a setinha azul) e olhe a janela Output. Sua função rodou?`,
      gabarito: `A criança acertou quando a chamada tem o nome igualzinho ao da função mais os parênteses, e o Output mostra a mensagem que a função imprime (o print de dentro dela). Isso prova que a caixinha foi aberta e executada. Sem parênteses ou com o nome trocado, nada aparece.`,
    },
    {
      titulo: `A mesma caixinha em dois lugares`,
      tipo: `Mão na massa guiada (prática real)`,
      tempo: `10 minutos`,
      guiaProfessor: `Núcleo da aula. Sente ao lado de cada criança. Peça que chame a mesma função uma segunda vez, em outra linha. Mostre que o Output imprime duas vezes, provando o reaproveitar. Reforce que ela não copiou o código de dentro, só escreveu o nome com parênteses de novo. Mande dar Play para ver.`,
      atividade: `Embaixo da primeira chamada, escreva o nome da sua função com parênteses MAIS uma vez, numa nova linha. Aperte Play. Olhe o Output: a mensagem da função apareceu duas vezes? Você usou a mesma caixinha em dois lugares!`,
      gabarito: `Está correto quando há duas chamadas da mesma função (o nome com parênteses em duas linhas) e o Output mostra a mensagem dela aparecendo duas vezes. O ponto-chave é a criança perceber que reaproveitou a função sem copiar o conteúdo: chamou a mesma caixinha duas vezes.`,
    },
    {
      titulo: `Ligando a função ao evento`,
      tipo: `Desafio individual aplicado`,
      tempo: `8 minutos`,
      guiaProfessor: `Depois das chamadas soltas. Agora a criança liga tudo: dentro do evento Touched da sua Part (que ela já tem), com o if da Semana 2, chama a sua função no lugar do "então". Ajude a achar o bloco do evento no Script e a colocar a chamada lá dentro. Mande dar Play e encostar na parte para testar.`,
      atividade: `Encontre no seu Script o bloco do evento Touched da sua parte. Dentro do "se" (if), coloque a chamada da sua função: o nome com parênteses. Aperte Play e encoste o seu personagem na parte. A função rodou no Output quando você encostou?`,
      gabarito: `O desafio é cumprido quando a chamada da função está dentro do evento Touched (no "então" do if) e, ao encostar na parte durante o Play, o Output mostra a função rodando. Isso une as três semanas: o evento dispara, a condição decide e a função executa. Se nada acontece, conferir nome, parênteses e se a chamada está dentro do bloco do evento.`,
    },
    {
      titulo: `Mostro minha função em ação`,
      tipo: `Compartilhar e explicar (apresentação curta)`,
      tempo: `7 minutos`,
      guiaProfessor: `No fechamento. Cada criança dá Play, encosta na sua parte e mostra à turma a função rodando no Output. Peça que diga o nome da função e em quantos lugares a chamou. Estimule a turma a aplaudir. Use para revisar: função guardada, chamada com parênteses e reaproveitada em mais de um lugar.`,
      atividade: `Dê Play, encoste na sua parte e mostre para a turma a sua função rodando na janela Output. Conte: qual é o nome da sua função? Em quantos lugares do código você a chamou? Você precisou copiar o conteúdo dela ou só chamou pelo nome?`,
      gabarito: `A criança consegue rodar o jogo, fazer a função aparecer no Output ao encostar na parte, dizer o nome da função e mostrar que a chamou em mais de um lugar (por exemplo, uma chamada solta e outra dentro do evento). O sucesso é ela explicar que reaproveitou a mesma caixinha sem copiar o código, deixando o script mais curto e organizado.`,
    },
  ],
};
