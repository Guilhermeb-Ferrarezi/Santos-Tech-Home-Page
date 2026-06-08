import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Cada Vez Mais Rápido",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende a deixar o jogo mais difícil aumentando a velocidade dos inimigos com o passar do tempo, ajustando os números do movimento na prática.`,
  descricao: `Nesta aula as crianças descobrem um segredo dos jogos de verdade: o jogo começa fácil e vai ficando mais difícil aos pouquinhos. A ferramenta secreta para isso é a velocidade. Quando os inimigos andam devagar, é fácil desviar; quando eles aceleram, o jogo vira um desafio gostoso. As crianças vão mexer no quão rápido as coisas se movem para sentir essa diferença na pele.

O assunto central é a ideia de dificuldade que cresce. Até agora, na trilha do mês, as crianças já fizeram colisão, fases, vidas e fim de jogo. Agora elas juntam tudo isso com a velocidade: o inimigo continua batendo e tirando vida, mas a cada pedacinho de tempo ele anda um pouco mais rápido. Isso ensina, de um jeito bem concreto, que um número pequeno (a velocidade) muda completamente a experiência de jogar.

Tecnicamente, a aula trabalha uma variável de velocidade e o bloco de repetição "sempre". Em vez de mover o inimigo sempre com o mesmo passo, o passo passa a ser um número que guardamos numa variável. De tempos em tempos, somamos um pouquinho nessa variável, e pronto: o inimigo vai ficando mais veloz sozinho. As crianças vão ver os números subindo na tela e o inimigo correndo mais.

Ao final, cada criança terá um inimigo que começa calminho e vai acelerando, deixando o próprio joguinho mais emocionante. É uma aula muito visual e de muito "mão na massa": mexer no número, apertar a bandeira verde, ver o que acontece, e mexer de novo.`,
  materiais: [
    `Computadores (1 por criança) com o Scratch já aberto e o projeto do mês carregado, com inimigo, jogador e sistema de vidas das aulas anteriores`,
    `Projetor ou TV ligado no computador do professor para demonstrar cada passo na tela grande`,
    `Projeto de exemplo pronto pelo professor, com um inimigo que acelera, para mostrar o "antes e depois"`,
    `Cartões grandes de papel com os blocos desenhados: "sempre", "mude velocidade para", "espere", "adicione velocidade a"`,
    `Folhas de desenho e lápis de cor para a atividade de papel (a "barrinha de velocidade")`,
    `Adesivos ou carimbos para marcar quem conseguiu deixar o inimigo mais rápido`,
    `Um cronômetro ou ampulheta de brinquedo para a dinâmica do aquecimento`,
  ],
  conceitosChave: [
    `Velocidade — é o tamanho do passo do inimigo. Passo grande, ele anda rápido; passo pequenininho, ele anda devagar.`,
    `Variável — é uma caixinha mágica que guarda um número. Aqui a caixinha guarda a velocidade do inimigo.`,
    `Bloco "sempre" — é o bloquinho que repete sem parar, igual o coração batendo. Tudo que está dentro dele acontece o tempo todo.`,
    `Bloco "espere" — é o bloquinho que conta um tempinho e segura, igual contar até três antes de fazer algo.`,
    `Aumentar de pouquinho — somar um número pequeno várias vezes, fazendo a velocidade crescer devagar em vez de pular de uma vez.`,
    `Dificuldade — é o quão difícil o jogo está. Quando o inimigo acelera, a dificuldade sobe.`,
    `Bandeira verde — é o botão que liga o jogo e faz tudo começar do começo, com a velocidade no número inicial.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

A grande ideia desta aula é a "dificuldade que cresce". Nos jogos bons, nada fica parado no mesmo nível: o começo é tranquilo para a criança entender, e depois aperta. A forma mais simples e visual de apertar é a velocidade dos inimigos. Você não precisa dominar o Scratch para isso, basta entender três peças.

Primeira peça: a velocidade é só um número. No bloco "mova" não dá para ler bem, então a gente guarda esse número numa variável chamada "velocidade". Para criar, clique na categoria "Variáveis" (laranja), botão "Criar uma variável", digite "velocidade" e confirme. No script do inimigo, em vez de "mova 5 passos", usamos "mova (velocidade) passos", arrastando a bolinha da variável para dentro do bloco.

Segunda peça: o bloco "sempre" (categoria "Controle", azul-escuro), que repete tudo sem parar. Dentro dele fica o movimento do inimigo. Isso já existe do trabalho das aulas anteriores.

Terceira peça: para acelerar com o tempo, criamos um segundo script no inimigo: "quando a bandeira verde for clicada" -> "mude velocidade para 2" -> "sempre" -> dentro: "espere 3 segundos" e "adicione 1 a velocidade". Pronto: a cada 3 segundos a velocidade sobe 1, e o inimigo acelera sozinho. O "mude velocidade para 2" no começo é importante para o jogo sempre recomeçar fácil.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento: brinque de "estátua acelerada". As crianças andam pela sala no seu ritmo; você diz "nível 1" (devagar), depois "nível 2", "nível 3" (cada vez mais rápido). Pergunte: "Ficou mais difícil parar na hora certa?". Conecte: "Hoje os inimigos do jogo vão acelerar assim."

15 min - Conteúdo novo guiado: no projetor, mostre o inimigo se movendo devagar. Clique em "Variáveis", "Criar uma variável", nomeie "velocidade". Troque o número do "mova" pela variável "velocidade". Depois monte o segundo script: "bandeira verde", "mude velocidade para 2", "sempre", "espere 3 segundos", "adicione 1 a velocidade". Clique na bandeira verde e mostre o número subindo no canto da tela e o inimigo acelerando. Faça devagar, narrando cada clique.

25 min - Mão na massa: cada criança repete no seu computador. Circule e ajude a criar a variável e a arrastar os blocos. Incentive testar com a bandeira verde e observar o número crescer. Quem terminar, muda o "espere 3 segundos" para "espere 1 segundo" e vê a diferença.

10 min - Desafio + compartilhar: proponha achar a velocidade "perfeita" (nem fácil demais, nem impossível). Cada criança mostra o jogo acelerando para a turma e conta qual número escolheu.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia do "passo do gigante": passo pequeno é andar devagar, passo gigante é correr. A variável "velocidade" é uma "caixinha mágica" que guarda o tamanho do passo. O bloco "sempre" é o "coração do inimigo", que bate sem parar. O "espere 3 segundos" é "respirar fundo e contar até três". Diga: "Cada vez que ele respira, ele fica um pouquinho mais rápido". Mostre sempre na tela, com o dedo apontando o número subindo. Evite a palavra "incremento"; diga "soma mais um".

## Erros comuns e como ajudar

O erro mais comum é esquecer o "mude velocidade para 2" no começo, então o número continua alto do teste anterior e o inimigo já começa voando. Mostre como recomeçar com a bandeira verde. Outro erro: somar demais (adicione 10), e o inimigo some da tela; troque para "adicione 1". Algumas crianças deixam "mova (velocidade)" mas esquecem de criar a variável, ou colocam a velocidade no objeto errado (no jogador em vez do inimigo). Confira em qual personagem (à direita, na lista de atores) o script está. Por fim, se o número não aparece na tela, peça para marcar a caixinha de seleção ao lado da variável na categoria "Variáveis".`,
  exercicios: [
    {
      titulo: `Liga e Acelera`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor o inimigo já com a variável "velocidade" criada. Peça que cada criança apenas clique na bandeira verde e observe. Pergunte em voz alta: "O número está subindo? O inimigo está mais rápido?". Conduza todos juntos, no mesmo ritmo.`,
      atividade: `No seu computador, clique na bandeira verde. Olhe a caixinha "velocidade" no canto da tela. Conte em voz alta os números que aparecem: 2, 3, 4... Veja o inimigo ficar mais rápido a cada número.`,
      gabarito: `Acertou se, ao clicar na bandeira verde, a variável "velocidade" começa em 2 e vai subindo de 1 em 1, e o inimigo se move visivelmente mais rápido conforme o número cresce.`,
    },
    {
      titulo: `Devagar ou Voador?`,
      tipo: `jogo de adivinhação`,
      tempo: `7 min`,
      guiaProfessor: `Você, no projetor, troca o número do bloco "adicione __ a velocidade" sem mostrar o número. Rode o jogo e deixe a turma adivinhar se você colocou um número pequeno (devagar) ou grande (voador). Faça três rodadas, alternando.`,
      atividade: `Olhe a tela do professor. O inimigo acelerou pouquinho ou virou um foguete? Grite "devagar!" se foi pouco e "voador!" se foi muito. Vamos ver se você acerta o que o professor escondeu.`,
      gabarito: `Acertou quem associa corretamente: número pequeno (1 ou 2) deixa o inimigo acelerar devagar; número grande (5 ou mais) faz o inimigo ficar muito rápido, quase saindo da tela.`,
    },
    {
      titulo: `Roda das Velocidades`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente todos em roda. Faça perguntas guiadas sobre por que os jogos ficam mais difíceis. Deixe cada criança falar uma ideia. Aceite respostas simples e ligue cada resposta à palavra "velocidade".`,
      atividade: `Responda na roda: Por que é legal o jogo ficar mais difícil aos poucos? O que acontece se o inimigo for rápido desde o começo? Qual velocidade você gostou mais no seu jogo?`,
      gabarito: `Acertou quem percebe que o jogo fica mais divertido e desafiador quando acelera aos poucos, e que começar muito rápido deixa o jogo difícil demais ou injusto. Não há resposta única; o importante é citar a ideia de velocidade que cresce.`,
    },
    {
      titulo: `A Barrinha de Velocidade`,
      tipo: `desenho/papel`,
      tempo: `10 min`,
      guiaProfessor: `Entregue uma folha. Peça que desenhem o inimigo no começo do jogo (passo pequeno) e o inimigo depois de um tempo (passo gigante), e uma "barrinha de velocidade" embaixo que vai enchendo. Mostre um exemplo seu no quadro.`,
      atividade: `Desenhe duas vezes o seu inimigo: na primeira ele anda devagar (passinho pequeno) e na segunda ele corre (passão grande). Embaixo, pinte uma barrinha quase vazia no começo e quase cheia depois.`,
      gabarito: `Acertou quem mostra claramente a diferença: o segundo desenho representa mais velocidade que o primeiro (passo maior, linhas de movimento, ou barrinha mais cheia). O desenho deve comunicar a ideia de "ficou mais rápido com o tempo".`,
    },
    {
      titulo: `A Velocidade Perfeita`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Proponha o desafio final: encontrar a velocidade que deixa o jogo difícil mas ainda possível de jogar. Mostre como mudar o "espere 3 segundos" e o "adicione 1". Deixe a criança testar várias vezes com a bandeira verde até achar o ponto bom. Ajude quem travar.`,
      atividade: `Mexa no seu jogo até achar a velocidade perfeita: nem tão devagar que fica chato, nem tão rápido que ninguém consegue. Teste mudando "espere" e "adicione". Depois mostre para a turma e diga quais números você escolheu.`,
      gabarito: `Acertou quem consegue um inimigo que começa lento e acelera com o tempo, mas ainda dá para jogar (não some da tela na hora). A criança deve conseguir explicar quais números mudou (por exemplo, "espere 2 segundos" e "adicione 1") e por que ficou bom.`,
    },
  ],
};
