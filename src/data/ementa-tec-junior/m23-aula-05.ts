import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "As Regras do Jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Definir junto com a turma, em palavras simples, qual é o objetivo principal do jogo e o que o jogador pode e não pode fazer, transformando essas ideias em regras claras dentro do jogo do Roblox Studio.`,
  descricao: `Até agora as crianças montaram o cenário, colocaram o lugar onde o jogador nasce e espalharam moedas, itens e obstáculos. Mas um monte de coisas na tela ainda não é um jogo de verdade. O que transforma tudo isso em um jogo são as regras: o que o jogador precisa fazer para vencer e o que acontece quando ele toca em algo perigoso. Esta aula é uma grande conversa guiada para a turma decidir, em voz alta e com as próprias palavras, quais são essas regras.

A ideia central é separar duas coisas bem simples: a META (o objetivo, aquilo que faz você ganhar) e o PERIGO (o que faz você perder ou voltar atrás). A turma vai dizer, por exemplo: "a meta é coletar todas as moedas e chegar até a bandeira do fim" e "se você encostar no obstáculo vermelho, você volta para o começo". O professor anota essas frases no quadro e depois ajuda a transformá-las em regras dentro do Roblox Studio, usando uma propriedade já conhecida das aulas anteriores: o CanCollide e o comportamento dos blocos ao toque.

Esta é uma aula mais de cabeça do que de muito código. O grande aprendizado é entender que todo jogo bom tem regras combinadas: sem objetivo, o jogador fica perdido sem saber o que fazer; sem perigo, o jogo fica fácil demais e sem graça. As crianças percebem que elas são as donas das regras e que podem escolher o que é justo e divertido.

Ao final, a turma sai com a meta do jogo escrita em uma frase clara e com pelo menos uma regra de obstáculo funcionando: ao tocar no bloco perigoso, algo acontece (o jogador volta ao início ou some por um instante). Isso prepara o caminho para a próxima aula, em que vão somar pontos e comemorar a vitória.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o jogo de cada criança já carregado (cenário, nascimento, moedas e obstáculos das aulas anteriores)`,
    `Projetor ou TV grande conectada ao computador do professor para mostrar cada passo`,
    `Quadro branco ou cartolina para anotar a META e os PERIGOS combinados pela turma`,
    `Exemplo pronto do professor: um joguinho simples com uma bandeira de fim e um obstáculo vermelho que devolve o jogador ao começo`,
    `Cartão impresso "Regra do meu jogo" para cada criança escrever a meta em uma frase`,
    `Adesivos ou carimbos de "Mestre das Regras" para premiar quem definir a regra do jogo`,
  ],
  conceitosChave: [
    `Regra — uma combinação que diz o que pode e o que não pode acontecer no jogo.`,
    `Objetivo (meta) — a missão principal, aquilo que o jogador precisa fazer para vencer.`,
    `Obstáculo — uma coisa perigosa que o jogador deve evitar para não se dar mal.`,
    `Vencer — conseguir cumprir a meta do jogo, como chegar ao fim ou pegar tudo.`,
    `Perder — encostar em um perigo e ter que voltar atrás ou começar de novo.`,
    `Ponto de partida (spawn) — o lugar onde o jogador nasce e para onde ele volta se errar.`,
    `Toque — quando o boneco do jogador encosta em um bloco e algo acontece por causa disso.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox para dar esta aula. O coração dela é uma conversa: ajudar a turma a decidir a regra do jogo. A parte técnica é pequena e usa coisas que as crianças já viram. Toda regra de jogo tem duas peças: a META (o que faz vencer) e o PERIGO (o que faz perder). Guarde essa dupla na cabeça e tudo fica simples.

No Roblox Studio, cada peça do cenário é uma "Part" (bloco). Para mexer nela, clique no bloco e olhe o painel "Properties" (Propriedades), que costuma ficar no canto inferior direito. Se ele não aparecer, vá no menu "View" (Visualizar) no topo e clique em "Properties". A propriedade que faz um obstáculo "machucar" o jogador no Roblox é "CanTouch" (pode tocar), e o jeito mais fácil e seguro de fazer o obstáculo devolver o jogador ao começo é colocar um bloco fino e vermelho no chão e marcá-lo como uma zona de perigo. Para a turma desta idade, basta o conceito de "tocou, voltou".

O caminho mais simples sem código: arraste do menu "Toolbox" (Caixa de Ferramentas) um modelo pronto de "Kill Brick" (bloco que reinicia o jogador) ou, melhor ainda, deixe o seu exemplo já montado e mostre o comportamento. O importante é a criança entender a regra, não escrever script.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Sente a turma em roda de frente para o projetor. Mostre o jogo de uma criança com as moedas e os obstáculos das aulas passadas. Pergunte: "O que será que o jogador precisa fazer aqui? E o que parece perigoso?". Deixe vários falarem. Escreva no quadro duas colunas: META e PERIGO.

Conteúdo novo guiado (15 min): Abra o seu exemplo pronto no projetor. Clique no botão azul "Play" (triângulo) no topo, na aba "Home" ou "Test". Caminhe até a bandeira do fim e diga: "Cheguei! Venci, porque essa é a META". Depois caminhe até o bloco vermelho de propósito; o boneco volta ao começo. Diga: "Toquei no perigo, então perdi e voltei". Pare com o "Stop" (quadrado vermelho). Mostre o bloco vermelho clicando nele e abra o painel "Properties" para a turma ver que ele é só um bloco com uma regra.

Mão na massa (25 min): Cada criança vai ao seu próprio jogo. Primeiro, todos escrevem no cartão "Regra do meu jogo" a META em uma frase ("Pegar todas as moedas e chegar na bandeira"). Depois, com a sua ajuda, cada um garante que tem um bloco de obstáculo no jogo. Passe de mesa em mesa testando com "Play": a criança toca no obstáculo e confere se algo acontece. Quem ainda não tem a regra do perigo, você ajuda a copiar e colar o bloco vermelho do exemplo. O foco é: a turma consegue dizer a meta e mostrar um perigo funcionando.

Desafio e compartilhar (10 min): Cada criança lê a sua regra em voz alta: "No meu jogo, a meta é... e o perigo é...". A turma aplaude. Quem definiu a meta e mostrou um obstáculo ganha o carimbo de "Mestre das Regras".

## Como explicar para crianças

Use a analogia de jogos que elas conhecem: "No pega-pega, a regra é fugir de quem está pegando. No nosso jogo, qual é a regra?". Chame a META de "missão" e o PERIGO de "armadilha". Explique que regra é uma combinação, igual quando a gente combina as regras de um jogo de tabuleiro antes de começar. Reforce: "Sem missão, ninguém sabe o que fazer; sem armadilha, é fácil demais e fica sem graça".

## Erros comuns e como ajudar

A criança não sabe qual é a meta: ofereça duas opções e deixe ela escolher ("Sua missão é juntar moedas ou chegar ao fim?"). A criança quer dez regras de uma vez: peça para escolher só UMA meta e UM perigo por enquanto. O obstáculo não faz nada ao toque: confirme com ela que o bloco está marcado como perigo, ou copie o bloco do seu exemplo. A criança aperta "Play" e não acha o "Stop": lembre que o quadrado vermelho fica no mesmo lugar do triângulo azul. A criança confunde meta com perigo: volte ao quadro e aponte as duas colunas, perguntando "isso faz ganhar ou faz perder?".`,
  exercicios: [
    {
      titulo: `Caça à regra escondida`,
      tipo: `Conversa em roda`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor o jogo de uma criança com moedas e obstáculos. Pergunte o que parece ser a missão e o que parece perigoso. Anote as respostas em duas colunas no quadro: META e PERIGO. Aceite várias ideias e ajude a turma a escolher.`,
      atividade: `Olhe o jogo na tela e responda em voz alta: o que o jogador precisa fazer para ganhar? E o que parece ser perigoso e deve ser evitado?`,
      gabarito: `A criança aponta pelo menos uma meta (ex.: "pegar as moedas" ou "chegar na bandeira") e pelo menos um perigo (ex.: "o bloco vermelho"). Acerto = separar corretamente o que faz ganhar do que faz perder.`,
    },
    {
      titulo: `A meta do meu jogo em uma frase`,
      tipo: `Escrever e falar`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue o cartão "Regra do meu jogo". Ajude cada criança a completar a frase da META sobre o próprio jogo. Quem ainda não escreve bem, você escreve enquanto ela dita. O importante é a frase ficar clara e curta.`,
      atividade: `Complete e leia a frase: "No meu jogo, a meta é ___". Pense no que o jogador precisa fazer para vencer no SEU jogo.`,
      gabarito: `Uma frase curta e clara com o objetivo do jogo. Exemplos válidos: "A meta é pegar todas as moedas", "A meta é chegar até a bandeira do fim", "A meta é juntar 5 moedas e fugir dos blocos vermelhos".`,
    },
    {
      titulo: `Achar o bloco perigoso nas Propriedades`,
      tipo: `Prática no Roblox Studio`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como clicar em um obstáculo e abrir o painel "Properties" (Propriedades), no canto inferior direito. Se não aparecer, use o menu "View" e clique em "Properties". A criança clica no bloco perigoso do próprio jogo e o seleciona; o bloco fica com uma borda destacada.`,
      atividade: `No seu jogo, clique uma vez no bloco que vai ser o obstáculo perigoso. Veja a borda colorida aparecer ao redor dele e olhe o painel "Properties" abrir do lado.`,
      gabarito: `A criança seleciona o obstáculo (borda destacada) e o painel "Properties" mostra os dados do bloco. Acerto = encontrar e selecionar o bloco certo. Erro comum: clicar no chão por engano; basta clicar de novo no bloco vermelho.`,
    },
    {
      titulo: `Tocou, voltou: testar o perigo`,
      tipo: `Teste com Play`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada jogo tenha o bloco de obstáculo que devolve o jogador ao início (use o seu exemplo para copiar e colar onde faltar). Mostre o botão azul "Play" (triângulo) e o quadrado vermelho "Stop". A criança aperta "Play", caminha até o obstáculo e confere o que acontece.`,
      atividade: `Aperte o botão azul "Play" lá em cima, leve o seu boneco até o bloco perigoso e toque nele de propósito. O que acontece? Depois aperte o "Stop" vermelho.`,
      gabarito: `Ao tocar no obstáculo, o jogador volta ao ponto de partida (spawn) ou some por um instante e renasce. Acerto = a criança vê e descreve a consequência do toque. Se nada acontecer, o bloco ainda não está marcado como perigo; copie o bloco do exemplo.`,
    },
    {
      titulo: `Mestre das Regras: pode e não pode`,
      tipo: `Desafio final`,
      tempo: `7 minutos`,
      guiaProfessor: `Cada criança apresenta a regra completa do próprio jogo em duas partes: a meta (o que faz vencer) e o perigo (o que faz perder). Peça que diga também uma coisa que o jogador NÃO pode fazer. A turma aplaude e quem completar ganha o carimbo de "Mestre das Regras".`,
      atividade: `Conte para a turma a regra do seu jogo em duas frases: "A minha meta é ___" e "O perigo do meu jogo é ___". Depois diga uma coisa que o jogador NÃO pode fazer.`,
      gabarito: `A criança enuncia a meta, o perigo e uma proibição clara. Exemplo: "A minha meta é pegar todas as moedas", "O perigo é o bloco vermelho", "O jogador não pode encostar no bloco vermelho ou volta para o começo". Acerto = as três partes fazendo sentido juntas.`,
    },
  ],
};
