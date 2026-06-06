import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Programando as mecânicas do meu jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança escreve em Lua a mecânica principal da sua ideia de jogo (pulo, teleporte, plataforma que some ou botão que abre uma porta) e testa cada script no modo Play, lendo a janela Output para encontrar e corrigir os erros.`,
  descricao: `Nesta aula, a turma dá o pulo do gato do mês: sai dos scripts soltos da aula passada e coloca para funcionar a mecânica de verdade do jogo de cada criança. Na aula 3, o aluno revisou como abrir um Script no Roblox Studio, escrever uma linha em Lua e ver algo acontecer. Hoje ele usa esse poder para realizar a ideia que planejou: o personagem que pula mais alto, a porta que abre num botão, o teleporte secreto, a plataforma que desaparece embaixo dos pés. É o coração do projeto ganhando vida.

O assunto central é a ideia de mecânica. Mecânica é a regra que faz o jogo acontecer: o que o jogador faz e o que o jogo responde. Quando você toca a moeda, a moeda some e o placar sobe; quando você pisa no botão, a porta abre. Em Roblox, essa regra mora dentro de um Script, escrito na linguagem Lua, e quase sempre usa um evento (o jogo fica esperando algo acontecer, como um toque) ligado a uma função (o pedacinho de código que responde). Entender esse par evento-resposta é o que separa um cenário bonito de um jogo que realmente se joga.

Esta aula é muito mão na massa e muito teste. O aluno não vai só digitar: vai apertar o botão Play, ver a mecânica funcionar (ou não), ler a janela Output para entender o recado do computador e ajustar. A janela Output é a melhor amiga do programador iniciante, porque é onde aparecem as mensagens vermelhas de erro com o número exato da linha que precisa de conserto. Aprender a ler esse recado, em vez de ter medo dele, é uma habilidade que a criança leva para a vida toda de criadora.

Como cada criança tem uma ideia diferente, o professor trabalha com um cardápio de quatro mecânicas prontas (pulo, teleporte, plataforma some, botão abre porta). Você demonstra uma no projetor, com o código linha a linha, e depois ajuda cada aluno a aplicar a mecânica que combina com o jogo dele. No fim, todos testam, mostram a mecânica rodando e comemoram o jogo que já começa a responder de verdade.`,
  materiais: [
    `Um computador por criança com o Roblox Studio já aberto no projeto do jogo que a turma vem construindo no mês (cada aluno no próprio arquivo, com o cenário da aula 2 pronto).`,
    `Projetor ou TV grande ligada ao computador do professor, para todos verem a demonstração do código linha a linha e a janela Output.`,
    `Um Script de exemplo já salvo com a mecânica de pulo funcionando, para o professor mostrar o resultado pronto antes de ensinar o passo a passo.`,
    `Quatro cartões grandes impressos, um para cada mecânica do cardápio (Pulo, Teleporte, Plataforma some, Botão abre porta), com o código curto escrito em letra grande.`,
    `Uma Part simples (um bloco) já colocada na cena de cada projeto para servir de botão, plataforma ou ponto de teleporte, evitando que a aula perca tempo construindo.`,
    `Folha impressa "Caça-erro" com três mensagens de Output de mentirinha para a turma treinar a leitura de erros.`,
    `Adesivos de "Programador de Mecânica" para premiar quem fizer a sua mecânica funcionar no Play.`,
  ],
  conceitosChave: [
    `Mecânica — a regra que faz o jogo acontecer; o que o jogador faz e o que o jogo responde (pisou no botão, a porta abre).`,
    `Script — a folhinha de código dentro do Roblox onde a gente escreve em Lua as ordens para o jogo.`,
    `Evento — o momento que o jogo fica esperando acontecer, como alguém tocar numa peça; quando acontece, o código roda.`,
    `Função — o pedacinho de código com nome que guarda as ordens e só roda quando a gente chama ou quando o evento dispara.`,
    `Modo Play — o botão que faz a gente entrar no jogo para testar de verdade se a mecânica funciona.`,
    `Output — a janelinha de recados do Roblox; é onde aparecem em vermelho os erros, dizendo a linha que precisa de conserto.`,
    `Propriedade — uma característica do objeto que a gente pode mudar pelo código, como a posição, a cor ou se ele pode ser tocado.`,
  ],
  treinamento: `## O que o professor precisa saber

Mecânica é a regra que faz o jogo responder ao jogador. No Roblox, quase toda mecânica simples usa o mesmo molde: um evento que fica esperando algo (geralmente o evento Touched, que dispara quando um personagem encosta numa peça) ligado a uma função que faz a resposta. Você não precisa dominar Lua inteira; precisa segurar com firmeza quatro receitinhas curtas e saber onde clicar.

Para criar a mecânica, clique na Part desejada na janela Explorer (canto direito), passe o mouse e clique no sinal de mais que aparece, e escolha Script. A janela de código abre. Apague o texto de exemplo e digite a receita. O código do pulo muda a propriedade JumpPower do personagem; o do teleporte muda a Position; o da plataforma que some muda Transparency e CanCollide; o do botão também muda a porta. Para testar, clique em Play (o triângulo no alto). Se algo der errado, abra a janela Output pelo menu View, depois Output: erros aparecem em vermelho com o número da linha.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão: Mostre o jogo de exemplo no projetor com a mecânica de pulo já pronta. Aperte Play e pule alto na frente da turma. Pergunte: "Quem faz isso acontecer?". Relembre a aula 3: abrir um Script, escrever em Lua, ver algo mudar. Mostre os quatro cartões de mecânica e peça que cada criança lembre qual combina com o jogo dela.

15 min, conteúdo novo guiado: Com a tela no projetor, crie a mecânica de pulo do zero. Clique na Part no Explorer, no sinal de mais, em Script. Apague o exemplo e digite devagar, dizendo cada linha em voz alta:

local parte = script.Parent

parte.Touched:Connect(function(quemTocou)
  local humano = quemTocou.Parent:FindFirstChild("Humanoid")
  if humano then
    humano.JumpPower = 100
  end
end)

Explique: a primeira linha pega a peça; Touched espera o toque; a função roda quando alguém toca; o if confere se quem tocou é um personagem; JumpPower igual a cem faz pular alto. Aperte Play, encoste na peça, pule. Abra a Output e mostre que está limpa.

25 min, mão na massa: Cada criança no seu projeto aplica a mecânica que escolheu. Entregue o cartão certo a cada uma. Passe nas mesas guiando o caminho Explorer, sinal de mais, Script. Lembre todos de apertar Play para testar. Quando der erro, sente ao lado, abra a Output e leia junto a linha vermelha. Comemore cada mecânica que funciona e entregue o adesivo de Programador de Mecânica.

10 min, desafio e compartilhar: Lance o desafio "mude um número e veja o que acontece" (trocar JumpPower de 100 para 200, ou a Position do teleporte). Depois, cada criança aperta Play e mostra a mecânica rodando para a turma. Comemorem juntos o jogo que já responde.

## Como explicar para crianças

Use a analogia do interruptor: "O evento é o interruptor; quando você aperta, a luz acende. A função é a luz acendendo." Chame o Output de "a caixinha de recados do computador": "Quando aparece vermelho, o computador está pedindo ajuda numa linha; a gente vai lá consertar." Diga que testar no Play é "entrar dentro do jogo para experimentar". Fale pouco e mostre muito: digite você primeiro, devagar, e só então peça que repitam. Comemore cada erro corrigido como uma vitória de detetive.

## Erros comuns e como ajudar

Esquecer de apertar Play e achar que não funciona: lembre que o código só roda no Play. Digitar errado o nome (jumppower em vez de JumpPower): mostre que o Roblox liga para maiúsculas e minúsculas e aponte a diferença. Esquecer de fechar os parênteses ou o end: leia a Output, que aponta a linha, e conte os parênteses junto. Colocar o Script na peça errada: confira no Explorer se o Script está dentro da Part certa. Medo do erro vermelho: transforme em jogo de caça-erro e elogie quem encontra a linha.`,
  exercicios: [
    {
      titulo: `Caça ao Botão Play`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor o botão Play (o triângulo no alto da tela) e o botão Stop (o quadrado). Aperte Play com o exemplo de pulo e mostre a mecânica acontecendo, depois Stop. Peça que cada criança ache os dois botões no seu Studio e aperte Play e Stop algumas vezes para perder o medo.`,
      atividade: `Cada criança localiza os botões Play e Stop no alto do Roblox Studio, entra no jogo apertando Play, anda um pouco e sai apertando Stop.`,
      gabarito: `Acerta quem entra no jogo ao apertar Play (o personagem aparece e a turma consegue andar) e volta ao normal ao apertar Stop. Se a criança consegue entrar e sair do teste sozinha, está certo, mesmo com ajuda para achar o botão na primeira vez.`,
    },
    {
      titulo: `Liga o Pulo`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre no projetor criando o Script na Part: Explorer, sinal de mais, Script. Digite a receita do pulo linha a linha em voz alta. Depois libere a turma para repetir no próprio projeto. Passe nas mesas guiando o caminho e lembrando todos de apertar Play e encostar na peça para testar.`,
      atividade: `Cada criança cria um Script dentro de uma Part e digita a mecânica de pulo (parte.Touched ligando uma função que muda JumpPower para 100), depois testa no Play encostando na peça.`,
      gabarito: `Acerta quem, ao tocar na peça no modo Play, faz o personagem pular bem mais alto que o normal, e a janela Output fica sem linhas vermelhas. Pular alto ao encostar é a prova de que a mecânica funcionou.`,
    },
    {
      titulo: `Detetive do Output`,
      tipo: `caça-erro`,
      tempo: `10 minutos`,
      guiaProfessor: `Abra a janela Output pelo menu View, depois Output. No projetor, mostre de propósito um erro: apague um parêntese do código do pulo e aperte Play. Leia em voz alta a linha vermelha e mostre o número da linha que ela aponta. Depois entregue a folha Caça-erro com três mensagens de mentirinha para a turma dizer qual linha consertar.`,
      atividade: `A criança lê três mensagens de erro da folha (cada uma com o número de uma linha) e aponta, em cada caso, qual linha do código precisa ser arrumada, dizendo o número.`,
      gabarito: `Acerta quem associa cada mensagem ao número de linha que ela indica: a mensagem que diz "line 3" aponta a linha 3, e assim por diante. O importante é a criança entender que o Output diz a linha do conserto; o número correto em cada caso é o que está escrito na mensagem.`,
    },
    {
      titulo: `Minha Mecânica do Jogo`,
      tipo: `desafio`,
      tempo: `13 minutos`,
      guiaProfessor: `Entregue a cada criança o cartão da mecânica que combina com o jogo dela: teleporte (muda Position), plataforma que some (muda Transparency e CanCollide) ou botão que abre porta. Ajude a colocar o Script na peça certa pelo Explorer. Sente ao lado de quem tiver erro, abra a Output e leia a linha vermelha junto. Lembre todos de testar no Play.`,
      atividade: `Cada criança aplica no seu projeto a mecânica escolhida (teleporte, plataforma que desaparece ou botão que abre a porta), digitando a receita do cartão num Script e testando no modo Play até funcionar.`,
      gabarito: `Acerta quem vê a sua mecânica acontecer no Play: o personagem é levado para outro lugar (teleporte), a plataforma some e deixa passar (plataforma some) ou a porta abre ao tocar o botão. Se a regra responde ao jogador no teste, o desafio está concluído, mesmo que tenha precisado consertar um erro pelo caminho.`,
    },
    {
      titulo: `Mexe no Número`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha brincar de cientista trocando um número da mecânica. No pulo, troque JumpPower de 100 para 200 e teste; no teleporte, mude um número da Position; na plataforma, deixe a transparência num valor diferente. Peça que cada criança preveja o que vai acontecer antes de apertar Play, depois teste e compare com o que imaginou.`,
      atividade: `A criança escolhe um número da sua mecânica, troca por outro valor, diz em voz alta o que acha que vai mudar e aperta Play para conferir se a previsão estava certa.`,
      gabarito: `Acerta quem muda o número, testa no Play e percebe a diferença no jogo (pula ainda mais alto, teleporta para outro ponto, a plataforma fica mais ou menos visível). O ponto certo é a criança ligar a troca do número à mudança que viu na tela; não importa se a previsão dela estava exata.`,
    },
  ],
};
