import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Funções: caixinhas de código",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Criar a primeira função em Lua como uma caixinha que guarda várias linhas de código e chamá-la pelo nome para executar tudo de uma vez.`,
  descricao: `Até agora, na trilha de criação de games, as crianças escreveram código que roda de cima para baixo, uma linha de cada vez. Funcionou bem para coisas pequenas, mas elas já estão começando a repetir os mesmos pedaços de código várias vezes no mesmo script. Quando isso acontece, o código fica longo, confuso e difícil de arrumar. A função é a solução: uma caixinha com um nome que guarda um pedaço de código pronto para usar quando você quiser.

Nesta aula, a função entra como uma ideia muito visual. Imagine uma caixa de brinquedos com uma etiqueta. A etiqueta é o nome da função; lá dentro estão guardadas as ações. Quando a criança escreve o nome da caixinha no código, é como se ela abrisse a caixa e mandasse tudo o que está dentro acontecer de uma vez. Não precisa repetir as ações: basta chamar o nome.

O professor vai mostrar dois momentos importantes e diferentes. Primeiro, criar a função (montar a caixinha e colocar o código dentro). Esse momento, sozinho, não faz nada acontecer no jogo: é só guardar. Depois, chamar a função (escrever o nome dela seguido de parênteses). Esse é o momento em que a caixinha abre e o código roda. Separar esses dois momentos é o coração da aula, porque é justamente aqui que as crianças costumam se confundir.

O foco é em funções simples, sem parâmetros e sem complicações. A meta é que cada aluno, com apoio, escreva sua primeira função no Roblox Studio, dê um nome a ela, coloque dentro algumas linhas que já sabem (como imprimir mensagens ou mudar uma propriedade de uma peça) e a chame pelo nome para ver tudo acontecer junto. É a base que vai permitir, nas próximas aulas, chamar a mesma função em vários lugares do jogo.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e a janela de código (Script) pronta para digitar`,
    `Projetor para o professor mostrar a tela e digitar o código na frente da turma`,
    `Um lugar (place) simples no Studio com algumas peças (Parts) já colocadas no chão`,
    `Exemplo pronto de uma função curta para mostrar antes (a "caixinha modelo")`,
    `Cartão impresso com o esqueleto de uma função em Lua (as palavras function, end e o nome)`,
    `Uma caixa de verdade com uma etiqueta para usar como analogia física na hora da explicação`,
    `Lista de mensagens divertidas para as crianças imprimirem dentro da função`,
  ],
  conceitosChave: [
    `Função — uma caixinha com um nome que guarda um pedaço de código para você usar quando quiser.`,
    `Criar a função — montar a caixinha e colocar o código dentro; sozinho isso não faz nada acontecer ainda.`,
    `Chamar a função — escrever o nome dela com parênteses para abrir a caixinha e fazer o código rodar.`,
    `Nome da função — a etiqueta da caixinha; precisa ser um nome só, sem espaços, que diga o que ela faz.`,
    `function e end — as palavras mágicas que marcam onde a caixinha começa e onde ela termina.`,
    `Repetição — quando você escreve o mesmo código várias vezes; a função existe para acabar com isso.`,
    `print — o comando que escreve uma mensagem na janela de saída (Output) para a gente conferir.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma função em Lua é um bloco de código com nome. Você cria a função uma vez e pode mandá-la rodar quantas vezes quiser, só escrevendo o nome. O modelo mais simples é assim, e é só isto que precisamos hoje: a palavra function, o nome, parênteses vazios, as linhas de dentro e a palavra end fechando. Exemplo que você vai digitar:

local function mostrarOi()
  print("Oi, turma!")
  print("Bem-vindos ao jogo")
end

Repare em dois momentos: o bloco acima só cria a caixinha; nada aparece ainda. Para o código rodar, você precisa chamar a função numa linha embaixo, escrevendo o nome com parênteses: mostrarOi(). Só aí as duas mensagens aparecem na janela Output. Tenha isso muito claro na cabeça, porque é o ponto onde as crianças tropeçam.

## Passo a passo da aula

Aquecimento (10 min): Abra o Studio no projetor. Mostre um Script com três linhas de print iguais repetidas. Pergunte: "não é chato escrever a mesma coisa três vezes?". Use a caixa de verdade com etiqueta: guarde objetos dentro, feche, e diga que a etiqueta é o nome. Essa é a função.

Conteúdo novo guiado (15 min): No Studio, clique em um Part na janela Explorer, clique no botão de mais (+) e escolha Script. Apague o texto que vem pronto. Digite, devagar e narrando, a função mostrarOi (igual ao exemplo acima). Explique cada parte: function abre a caixinha, mostrarOi é a etiqueta, os parênteses são a alça da caixa, as linhas de print são o que está guardado, e end é a tampa. Aperte o botão Play (Run) no topo. Pergunte: "apareceu alguma coisa?". Não apareceu! Mostre que faltou chamar. Embaixo do end, escreva mostrarOi() e aperte Play de novo. Agora as mensagens aparecem na janela Output (se ela estiver fechada, abra em View > Output).

Mão na massa (25 min): Cada aluno cria seu próprio Script num Part. Peça que escrevam uma função com um nome que diga o que ela faz (por exemplo, mostrarPlacar) e coloquem dentro duas ou três linhas de print com mensagens escolhidas por eles. Lembre sempre: depois do end, chamar pelo nome com parênteses. Circule pela sala. Faça cada criança apertar Play e ver as mensagens. Quem terminar rápido, peça para chamar a função duas vezes seguidas e contar quantas mensagens aparecem.

Desafio e compartilhar (10 min): Desafie a turma a colocar quatro linhas dentro de uma única função e chamá-la uma só vez, mostrando que uma chamada executa tudo junto. Cada aluno mostra a tela e lê as mensagens da sua caixinha em voz alta.

## Como explicar para crianças

Use sempre a imagem da caixa com etiqueta. "Criar a função é montar a caixa e guardar as coisas dentro. Chamar a função é abrir a caixa e deixar tudo sair de uma vez." Diga que o nome é a etiqueta: se a etiqueta não for clara, ninguém sabe o que tem dentro. Mostre que os parênteses são como apertar um botão: sem apertar, a caixa fica fechada. Repita o bordão: "criei, mas não chamei, então nada acontece". Compare com um controle remoto: o botão existe, mas a TV só liga quando você aperta.

## Erros comuns e como ajudar

O erro número um é criar a função e esquecer de chamá-la; a criança aperta Play e reclama que "não funciona". Pergunte: "você abriu a caixinha?" e mostre que falta escrever o nome com parênteses embaixo do end. O segundo erro é esquecer o end; o Studio sublinha em vermelho. Ensine que toda caixinha precisa de tampa. O terceiro é colocar espaço no nome (mostrar Oi); explique que a etiqueta é uma palavra só, e ensine a juntar as palavras com a segunda em maiúscula. O quarto é esquecer os parênteses ao chamar (escrever só mostrarOi sem os parênteses); mostre que sem a alça a caixa não abre. Por fim, alguns escrevem print sem aspas; lembre que a mensagem precisa ficar entre aspas para o computador entender que é um texto.`,
  exercicios: [
    {
      titulo: `Caça à caixinha`,
      tipo: `Identificação no projetor`,
      tempo: `5 min`,
      guiaProfessor: `Mostre na tela um Script curto com uma função simples já pronta. Peça que as crianças apontem, na tela, onde começa a caixinha, onde está a etiqueta (o nome) e onde está a tampa.`,
      atividade: `Olhe o código no projetor e responda: qual palavra abre a caixinha? Qual é o nome (a etiqueta) da função? Qual palavra é a tampa que fecha a caixinha?`,
      gabarito: `A palavra que abre a caixinha é function. O nome (etiqueta) é o que vem logo depois de function, por exemplo mostrarOi. A palavra que fecha (a tampa) é end.`,
    },
    {
      titulo: `Criei, mas não chamei`,
      tipo: `Discussão guiada com o computador`,
      tempo: `5 min`,
      guiaProfessor: `Digite no projetor uma função completa, com function, prints e end, mas NÃO a chame. Aperte Play e mostre que a janela Output fica vazia. Conduza a turma à conclusão.`,
      atividade: `O professor criou uma função e apertou Play, mas nada apareceu. Por que será que nada aconteceu? O que está faltando para o código rodar?`,
      gabarito: `Nada apareceu porque a função foi só criada (a caixinha foi montada e guardada), mas não foi chamada. Falta escrever o nome da função com parênteses, por exemplo mostrarOi(), numa linha depois do end. Só aí a caixinha abre e o código roda.`,
    },
    {
      titulo: `Minha primeira caixinha`,
      tipo: `Mão na massa no Roblox Studio`,
      tempo: `12 min`,
      guiaProfessor: `Cada aluno cria um Script num Part (botão + na janela Explorer, opção Script). Apague o texto padrão. Ajude a escrever uma função com duas linhas de print e, depois do end, a chamada pelo nome. Faça cada um apertar Play e ver o Output.`,
      atividade: `Crie uma função chamada mostrarOi que escreva duas mensagens com print. Depois do end, chame a função pelo nome para que as mensagens apareçam. Aperte Play e confira a janela Output.`,
      gabarito: `Um exemplo correto: a função local function mostrarOi() com duas linhas print("Oi!") e print("Tudo bem?") dentro, fechada por end, e na linha de baixo a chamada mostrarOi(). Ao apertar Play, as duas mensagens aparecem na janela Output. O essencial: a função tem function, nome, prints e end, e foi chamada com o nome e parênteses depois do end.`,
    },
    {
      titulo: `Conserte a caixinha quebrada`,
      tipo: `Correção de erro no Studio`,
      tempo: `10 min`,
      guiaProfessor: `Mostre (ou entregue para copiar) uma função com um erro de cada vez: sem end, ou sem os parênteses na chamada, ou com espaço no nome. Peça que encontrem e arrumem. Verifique se o sublinhado vermelho some e se o Play funciona.`,
      atividade: `Esta função não funciona. Encontre o que está errado e arrume: pode faltar a tampa (end), podem faltar os parênteses na hora de chamar, ou o nome pode ter um espaço no meio. Conserte e aperte Play para conferir.`,
      gabarito: `Se faltava o end, basta adicionar a palavra end fechando a função. Se faltavam os parênteses na chamada, escreva o nome seguido de parênteses, por exemplo mostrarOi(). Se o nome tinha espaço (como mostrar Oi), junte as palavras numa só, por exemplo mostrarOi, tanto na criação quanto na chamada. Depois de arrumar, o sublinhado vermelho some e as mensagens aparecem ao apertar Play.`,
    },
    {
      titulo: `Uma chamada, tudo de uma vez`,
      tipo: `Desafio criativo no Studio`,
      tempo: `8 min`,
      guiaProfessor: `Desafie a turma a colocar quatro linhas de print dentro de uma única função e chamá-la uma só vez. Depois, peça que chamem a mesma função duas vezes seguidas e contem as mensagens, mostrando que cada chamada repete tudo.`,
      atividade: `Coloque quatro mensagens diferentes dentro de uma única função. Chame a função uma vez e conte quantas mensagens aparecem. Depois, chame a função duas vezes seguidas: quantas mensagens aparecem agora?`,
      gabarito: `Com quatro prints dentro da função, uma única chamada faz aparecer quatro mensagens, porque a função executa todas as linhas de dentro de uma vez. Chamando a função duas vezes seguidas (o nome com parênteses em duas linhas), aparecem oito mensagens, pois a caixinha foi aberta duas vezes e cada abertura roda as quatro linhas.`,
    },
  ],
};
