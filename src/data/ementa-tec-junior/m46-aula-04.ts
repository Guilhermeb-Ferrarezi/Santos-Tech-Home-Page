import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "As regras do jogo no código",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança programa uma regra completa no Roblox usando condições, fazendo o jogador ganhar ou perder pontos e vencer ao chegar a uma quantidade combinada.`,
  descricao: `Nesta aula a criança junta tudo o que já aprendeu sobre eventos, condições e pontos para criar de verdade as REGRAS do jogo dentro do código. Até agora a pontuação só subia ou descia. Hoje ela vira regra: o jogador ganha pontos quando faz a coisa certa, perde pontos quando faz a coisa errada, e VENCE quando chega a um número combinado. É o momento em que o código deixa de ser só comando e passa a ser o juiz do jogo.

A ideia central é usar a condição "if" (se) para o computador decidir sozinho o que fazer. Pense num jogo de tabuleiro: existe uma regra escrita que diz quando você avança, quando você volta e quando você ganha. No código é igual, só que quem lê a regra e cumpre na mesma hora é o computador. A criança escreve a regra uma vez e o jogo obedece para sempre, sem precisar de ninguém apitando.

Na prática, o professor mostra um valor de pontos guardado numa variável (por exemplo, pontos = 0). Depois, dentro de um evento que já existe, a criança soma pontos e, logo em seguida, pergunta com um "if": "se os pontos chegaram a 10, então o jogador venceu". Quando a condição é verdadeira, o jogo mostra uma mensagem de vitória. Assim a criança vê a regra funcionando ao vivo: clica, os pontos sobem e, ao bater na meta, a vitória aparece na tela.

O assunto importa porque toda mecânica de jogo nasce de regras como essa. Vencer, perder, liberar uma fase, ganhar uma vida: tudo é uma condição olhando para um número e decidindo o que acontece. Quem domina o "if" com pontos consegue inventar qualquer regra. Esta aula é a ponte direta para o entregável do mês, a mecânica própria da criança, que ela vai montar nas próximas aulas.`,
  materiais: [
    `Computadores (um por criança ou dupla) com o Roblox Studio aberto e um projeto que já tem a contagem de pontos da Aula 3 funcionando.`,
    `Projetor ou TV grande ligado ao computador do professor, para mostrar cada linha de código na tela cheia.`,
    `Um Script de exemplo já pronto pelo professor com a regra de vitória completa (pontos chegando a 10), para mostrar a meta antes de começar.`,
    `Mouse de verdade em cada computador, para navegar pela janela Explorer e abrir os Scripts com facilidade.`,
    `Cartazes ou tiras de papel com a estrutura "se ... então ..." e "if ... then ... end" escritas em letras grandes, coladas no quadro.`,
    `Fichas de papel com mini-regras de jogo de tabuleiro (por exemplo, "se cair na casa azul, ganhe 2 pontos") para o aquecimento.`,
    `Lista com o nome das crianças para o professor salvar e identificar cada projeto ao final da aula.`,
  ],
  conceitosChave: [
    `Regra — um combinado do jogo que diz o que acontece em cada situação, como ganhar, perder ou vencer.`,
    `Condição (if) — a pergunta que o código faz para decidir; em Lua começa com "if" (se) e termina com "then" (então).`,
    `Variável de pontos — a caixinha que guarda o número de pontos do jogador e muda durante o jogo.`,
    `Comparar — olhar dois números e ver quem é maior, menor ou igual; usamos sinais como o maior-ou-igual.`,
    `Verdadeiro e falso — toda pergunta do "if" só tem duas respostas: verdadeiro (a regra acontece) ou falso (não acontece).`,
    `Vitória — o momento em que os pontos chegam à meta combinada e o jogo avisa que o jogador ganhou.`,
    `end — a palavrinha de Lua que fecha o bloco do "if", como o ponto final que mostra onde a regra termina.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula transforma pontos em regra usando a condição "if" da linguagem Lua. Você vai trabalhar dentro de um Script que já existe (o da contagem de pontos da Aula 3). No Roblox Studio, os Scripts ficam na janela Explorer (Explorador), à direita. Se ela não estiver aberta, vá na aba VIEW (Exibir), no topo, e clique em Explorer. Dê dois cliques no Script para abrir o editor de código.

A estrutura central de hoje é:

if pontos >= 10 then
    print("Você venceu!")
end

Linha 1: "if" quer dizer "se"; "pontos" é a variável que guarda o número; ">=" é "maior ou igual a"; "10" é a meta; "then" quer dizer "então". Linha 2 (com um recuo): o que acontece se for verdade, aqui mostrar a mensagem. Linha 3: "end" fecha a regra, como um portão. Em Lua sempre é if ... then ... end. Sem o "end" o código quebra, então confira sempre. O print escreve no Output (Saída); abra essa janela na aba VIEW, em Output, para a turma ver a mensagem aparecer.

Antes da aula, teste você mesmo: aperte o botão PLAY (Jogar), no topo do Studio, faça os pontos subirem e veja a mensagem de vitória surgir no Output. Aperte STOP (Parar) para sair. Saiba também desfazer com Ctrl+Z, porque as crianças vão errar e isso é normal.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento: mostre as fichas de mini-regras de tabuleiro. Leia "se cair na casa azul, ganhe 2 pontos" e pergunte: "isso é uma regra? Quando ela acontece?". Mostre os cartazes "se ... então ..." e diga que hoje vamos escrever regras assim dentro do jogo. Relembre que na Aula 3 os pontos já sobem.

15 min, conteúdo novo guiado: no projetor, abra o Explorer, dê dois cliques no Script de pontos. Mostre a variável pontos. Logo abaixo do trecho que soma pontos, digite junto com a turma, devagar, nomeando cada palavra: if pontos >= 10 then, depois print("Você venceu!"), depois end. Aperte PLAY, faça os pontos chegarem a 10 e mostre a mensagem aparecendo no Output. Aperte STOP.

25 min, mão na massa: cada criança abre o próprio Script e escreve a mesma regra de vitória. Circule pela sala conferindo o "then" e o "end". Quem terminar muda a meta (de 10 para 5 ou 20) e testa de novo apertando PLAY. Incentive testar muitas vezes: programar é tentar, ver e ajustar.

10 min, desafio e compartilhar: desafio "regra de azar": adicionar um segundo "if" que tira pontos quando algo dá errado (if pontos < 0 then pontos = 0 end, para não ficar negativo) ou mostrar uma mensagem ao perder. Depois cada criança mostra a vitória aparecendo na tela para os colegas numa rodinha rápida.

## Como explicar para crianças

Chame o "if" de "a pergunta mágica do código". Diga: "o computador faz uma pergunta e só faz a coisa se a resposta for SIM". Use o corpo: levante a mão e fale "SE eu chegar a 10 pontos, ENTÃO eu pulo!", e pule. O ">=" é "chegou ou passou"; mostre subindo dedos até 10. O "then" é a palavra "então" e o "end" é "acabou a regra, fecha o portão". Compare com o jogo de tabuleiro: a regra fica escrita e o juiz (o computador) cumpre sozinho, na hora.

## Erros comuns e como ajudar

Esquecer o "end": o código fica vermelho ou não roda; mostre que toda regra precisa fechar o portão. Esquecer o "then" depois da condição: aponte o cartaz e leia em voz alta "se ... então". Usar = em vez de >= para comparar: explique que um sinal só (=) é "guardar na caixinha" e dois sinais (>=) é "comparar números". Escrever Pontos com letra diferente da variável pontos: Lua diferencia maiúscula de minúscula, então o nome tem que ser igualzinho. A mensagem não aparece: confira se a janela Output está aberta e se os pontos realmente chegaram à meta. Frustração: lembre que errar e corrigir é a parte normal de programar.`,
  exercicios: [
    {
      titulo: `Caça às Regras do Tabuleiro`,
      tipo: `jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `O professor lê as fichas com mini-regras de jogo de tabuleiro e relembra a estrutura "se ... então ...". O objetivo é a criança reconhecer que uma regra tem uma condição (quando acontece) e uma ação (o que acontece).`,
      atividade: `O professor lê uma ficha, por exemplo "se cair na casa azul, ganhe 2 pontos". As crianças apontam em voz alta qual é a parte do "se" (a condição) e qual é a parte do "então" (a ação). Faça umas cinco fichas diferentes.`,
      gabarito: `Acertou quem separa as duas partes: na ficha "se cair na casa azul, ganhe 2 pontos", o "se" é "cair na casa azul" e o "então" é "ganhe 2 pontos". A turma deve identificar corretamente as duas partes em pelo menos quatro das cinco fichas.`,
    },
    {
      titulo: `Montando o if no Papel`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `O professor distribui tiras com as palavras "if", "pontos", ">= 10", "then", "print", "Você venceu!" e "end" embaralhadas. Mostra no cartaz a ordem certa antes de soltar a turma.`,
      atividade: `Cada criança recebe as tiras embaralhadas e cola no papel na ordem certa para formar a regra de vitória, colocando a linha do print com um recuo (mais para a direita) que o if e o end.`,
      gabarito: `A ordem correta é: linha 1 "if pontos >= 10 then"; linha 2 (recuada) "print(Você venceu!)"; linha 3 "end". Acertou quem deixa o if no começo, o print recuado no meio e o end fechando no fim.`,
    },
    {
      titulo: `Escrevendo a Regra de Vitória`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `O professor demonstra no projetor uma vez: abrir o Script pelo Explorer, achar onde os pontos sobem e digitar logo abaixo o bloco if ... then ... end. Só então libera as crianças para repetir no próprio computador.`,
      atividade: `Cada criança abre o seu Script e escreve, abaixo da linha que soma pontos: if pontos >= 10 then, depois print("Você venceu!"), depois end. Em seguida aperta PLAY, faz os pontos chegarem a 10 e confere a mensagem no Output.`,
      gabarito: `Acertou quem escreveu o bloco com if, then e end na ordem certa e viu a mensagem "Você venceu!" aparecer no Output ao chegar a 10 pontos. O professor confirma vendo o código completo e a mensagem na tela.`,
    },
    {
      titulo: `Mudando a Meta`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `O professor mostra que o número 10 dentro do if é só a meta e pode ser trocado. Explica que basta apagar o 10 e escrever outro número, depois testar de novo com PLAY.`,
      atividade: `Cada criança troca a meta da própria regra: muda o número do if (por exemplo, de 10 para 5, ou de 10 para 20). Aperta PLAY e testa se a vitória agora aparece no novo valor de pontos.`,
      gabarito: `Acertou quem trocou o número dentro do if e a vitória passou a aparecer no novo valor escolhido. Por exemplo, com "if pontos >= 5 then", a mensagem deve surgir ao chegar a 5 pontos, e não mais a 10.`,
    },
    {
      titulo: `Regra de Ganhar e Perder`,
      tipo: `prática na ferramenta`,
      tempo: `15 minutos`,
      guiaProfessor: `O professor relembra que dá para ter mais de uma regra no mesmo Script. Mostra no projetor como adicionar um segundo if que tira ou protege pontos, sempre com o seu próprio end. Sugere testar bastante apertando PLAY.`,
      atividade: `Cada criança mantém a regra de vitória e acrescenta uma segunda regra com outro if: por exemplo, "if pontos < 0 then pontos = 0 end" para os pontos nunca ficarem negativos, ou um if que mostra uma mensagem ao perder pontos. No fim, mostra as duas regras funcionando para a turma.`,
      gabarito: `Acertou quem tem dois blocos if separados, cada um com o seu then e o seu end, e ambos funcionando ao apertar PLAY: a vitória ainda aparece na meta e a segunda regra também age (os pontos não ficam negativos ou surge a mensagem combinada). O professor confirma vendo as duas regras no código e o comportamento certo no Output.`,
    },
  ],
};
