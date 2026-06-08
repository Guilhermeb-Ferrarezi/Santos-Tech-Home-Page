import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Controlando com as setas do teclado",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança liga os controles ao personagem e o guia para a esquerda e para a direita usando as setas do teclado, ajustando a velocidade para sentir que está no comando do jogo.`,
  descricao: `Nesta aula a turma dá um passo enorme: o personagem deixa de ficar parado e passa a obedecer aos dedos da criança. Até agora os alunos colocaram objetos no cenário, aprenderam o "quando... faça..." e viram o personagem se mexer sozinho. Hoje eles conectam as setas do teclado ao movimento, e isso muda tudo — pela primeira vez quem manda no jogo é a pessoa que está jogando.

No Construct 3, a mágica acontece com um comportamento (em inglês, "behavior") chamado 8 Direction, que já vem pronto para mover objetos com as setas. O professor vai mostrar como adicionar esse comportamento ao personagem e como, com pouquíssimos cliques, a seta da direita empurra o herói para a direita e a seta da esquerda o empurra para a esquerda. É um daqueles momentos em que as crianças soltam um "uau", porque o esforço é pequeno e o resultado é imediato.

Depois de fazer o personagem andar, a turma vai brincar com a velocidade. No painel de propriedades existe um número chamado Max Speed (velocidade máxima): aumentando, o herói fica veloz como um foguete; diminuindo, ele anda devagar como uma tartaruga. Mexer nesse número ensina, de um jeito concreto, que números no computador controlam o comportamento das coisas — uma primeira noção de ajuste e teste.

O foco da aula é a sensação de comando e a prática repetida de testar, observar e ajustar. Não precisamos ainda de pulo, inimigos ou pontos: queremos que cada criança saia da sala tendo guiado seu próprio personagem pela tela, com orgulho de ter feito o controle funcionar.`,
  materiais: [
    `Computadores (um por aluno ou em dupla) com o Construct 3 já aberto no navegador e com o projeto do mês de cada criança carregado`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo na tela grande`,
    `Um projeto de exemplo pronto, com um personagem que já anda com as setas, para o professor mostrar o resultado final logo no começo`,
    `Teclado funcionando bem em cada máquina (testar antes as quatro setas, principalmente a da esquerda e a da direita)`,
    `Cartões grandes desenhados com as setas (esquerda, direita, cima, baixo) para a brincadeira de aquecimento`,
    `Folhas de papel e lápis de cor para o exercício de desenho do "mapa do controle"`,
    `Adesivos ou carimbos de "controlador campeão" para celebrar quem fizer o personagem andar`,
  ],
  conceitosChave: [
    `Comportamento (Behavior) — um pacote de poderes prontos que a gente cola no personagem para ele já saber fazer alguma coisa, tipo um superpoder de fábrica.`,
    `8 Direction — o superpoder que faz o personagem andar nas oito direções quando você aperta as setas do teclado.`,
    `Setas do teclado — os quatro botões com flechas que mandam o personagem ir para a esquerda, direita, cima e baixo.`,
    `Velocidade (Max Speed) — o número que diz se o personagem anda rápido como foguete ou devagar como tartaruga.`,
    `Testar (Preview) — apertar o botão de play para experimentar o jogo e ver se o personagem obedece às setas.`,
    `Propriedades (Properties) — o painel do ladinho onde a gente troca os números e ajustes do objeto escolhido.`,
    `Controle — quando quem joga é que manda no personagem, em vez de ele andar sozinho.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O coração desta aula é o comportamento (behavior) chamado 8 Direction. Em Construct 3, um comportamento é um conjunto de regras prontas que você "cola" em um objeto para ele ganhar uma habilidade sem você programar nada. O 8 Direction faz exatamente o que o nome diz: liga o objeto às setas do teclado e permite movê-lo nas oito direções (cima, baixo, lados e diagonais). Para esta turma pequena, vamos focar só nos lados (esquerda e direita), mas o comportamento já entrega tudo de graça.

Você precisa saber três lugares na tela: o Layout (o palco onde o personagem está), o painel Properties (Propriedades, à esquerda) onde aparecem os ajustes do objeto selecionado, e o botão Preview (um triângulo de play no topo) que roda o jogo. Dentro das propriedades do 8 Direction existe o Max Speed (velocidade máxima): o valor padrão costuma ser 200. Aumentar deixa o personagem mais rápido; diminuir, mais lento. Há também Acceleration e Deceleration, mas não toque neles com as crianças — só o Max Speed nesta aula.

Importante: o 8 Direction já anda sozinho com as setas assim que adicionado, sem precisar criar eventos. Isso é ótimo para iniciantes, pois o resultado é imediato.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): faça a brincadeira "estátua comandada". Você levanta os cartões de seta e a turma anda na sala para o lado indicado; quando você abaixa, todos viram estátua. Conecte com a aula: "Hoje VOCÊS vão comandar o personagem assim, com as setas!"

Conteúdo novo guiado (15 min): no projetor, abra um projeto e clique uma vez no personagem para selecioná-lo. No painel Properties, role até embaixo e clique em Behaviors. Abre uma janela; clique no botão de "+" (Add new behavior), escolha 8 Direction na categoria Movements e clique em Add. Feche a janela. Agora aperte o botão Preview (play) no topo: na aba nova do navegador, aperte as setas e mostre o personagem andando. A turma vai vibrar. Volte e mostre o Max Speed nas propriedades do 8 Direction.

Mão na massa (25 min): cada criança repete no próprio projeto: seleciona o personagem, abre Behaviors, adiciona 8 Direction, fecha e aperta Preview para testar com as setas. Circule pela sala. Depois, peça que mudem o Max Speed: experimentem um número grande (foguete) e um pequeno (tartaruga), testando cada vez. Celebre cada personagem que andar.

Desafio + compartilhar (10 min): proponha "encontre o número da velocidade perfeita" — nem rápido demais, nem lento demais. Cada criança mostra o personagem andando na tela grande e diz qual número escolheu.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame o comportamento de "superpoder de fábrica": a gente cola no personagem e ele já nasce sabendo andar. Diga que as setas são o "controle do videogame" dele. Para a velocidade, use a dupla foguete e tartaruga: "Número grande, foguete! Número pequeno, tartaruga!". Evite a palavra "propriedades"; diga "a listinha de ajustes do lado". Sempre que adicionar algo, aperte o play na hora para a criança ver causa e efeito.

## Erros comuns e como ajudar

O erro mais frequente é a criança apertar as setas com o jogo parado — lembre que precisa apertar Preview primeiro. Outro: clicar no fundo do cenário em vez do personagem ao adicionar o comportamento; confira se o nome certo aparece no topo das propriedades. Há quem adicione o 8 Direction duas vezes e fique confuso; basta apagar a repetida. Se o personagem some voando, o Max Speed ficou alto demais — baixe o número. E o clássico: digitar letra no campo de velocidade; só números valem ali.`,
  exercicios: [
    {
      titulo: `Estátua comandada pelas setas`,
      tipo: `jogo de movimento (aquecimento)`,
      tempo: `8 minutos`,
      guiaProfessor: `Apresente a brincadeira em pé, no centro da sala, segurando os cartões de seta. Diga que hoje a turma vai ser o personagem do jogo e que você é quem aperta os botões. Mostre cada cartão devagar antes de começar.`,
      atividade: `Quando o professor levantar a seta da direita, todos dão passinhos para a direita; seta da esquerda, passinhos para a esquerda. Quando o professor abaixa todos os cartões, vira estátua e ninguém se mexe. Repita variando o ritmo, bem devagar e bem rápido.`,
      gabarito: `A turma acertou quando cada criança se move na direção certa da seta mostrada e congela na hora ao ver o professor abaixar os cartões. O professor sabe que funcionou ao ver o grupo respondendo junto ao comando, sem precisar de explicação extra.`,
    },
    {
      titulo: `Colando o superpoder de andar`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Faça primeiro no projetor, passo a passo, e só depois solte a turma. Repita em voz alta a sequência mágica: clicar no personagem, abrir Behaviors, apertar o mais, escolher 8 Direction, apertar Add. Circule conferindo se cada um selecionou o personagem certo.`,
      atividade: `No seu projeto, clique uma vez no personagem. No painel de ajustes do lado, encontre Behaviors e clique. Aperte o botão de mais, escolha 8 Direction e clique em Add. Feche a janelinha e aperte o play (Preview). Aperte as setas e veja seu personagem andar para os lados.`,
      gabarito: `Está correto quando, ao apertar Preview e usar as setas, o personagem anda para a esquerda e para a direita na tela. Se ele se mexe obedecendo às setas, o superpoder foi colado certo. Se não anda, verificar se o 8 Direction aparece na lista de comportamentos do personagem.`,
    },
    {
      titulo: `Foguete ou tartaruga?`,
      tipo: `desafio de ajuste`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre onde fica o número Max Speed dentro das propriedades do 8 Direction. Explique com a dupla foguete e tartaruga. Incentive a criança a trocar o número, apertar play, testar, voltar e trocar de novo — esse ciclo de testar e ajustar é o aprendizado central.`,
      atividade: `Ache o número da velocidade (Max Speed). Troque para um número bem grande, aperte play e veja o personagem virar foguete. Volte, troque para um número pequeno, aperte play e veja virar tartaruga. Faça pelo menos duas trocas e teste cada uma.`,
      gabarito: `Acertou quem consegue deixar o personagem visivelmente mais rápido com número grande e mais lento com número pequeno, testando no play depois de cada troca. O professor confirma vendo a diferença clara de velocidade entre as duas tentativas da criança.`,
    },
    {
      titulo: `O mapa do meu controle`,
      tipo: `desenho no papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua papel e lápis de cor. Peça que cada criança desenhe um teclado simples com as quatro setas e ligue, com riscos ou flechas, cada seta ao lado para onde o personagem vai. Aceite desenhos simples; o objetivo é registrar a ideia de comando e direção.`,
      atividade: `Desenhe as quatro setas do teclado. Ao lado, desenhe seu personagem. Risque uma linha da seta da direita até o personagem indo para a direita, e da seta da esquerda até o personagem indo para a esquerda. Pinte e escreva, se quiser, "esquerda" e "direita".`,
      gabarito: `O desenho está certo quando a seta da direita está ligada ao movimento para a direita e a da esquerda ao movimento para a esquerda. Não precisa ser bonito: basta a criança mostrar e explicar que cada seta manda o personagem para um lado, provando que entendeu o controle.`,
    },
    {
      titulo: `Roda do controlador campeão`,
      tipo: `roda de conversa e demonstração`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma para que cada um mostre o personagem andando na tela grande e diga o número de velocidade que escolheu. Faça perguntas curtas: "Está foguete ou tartaruga?", "Para que lado ele vai com essa seta?". Entregue o adesivo de controlador campeão a quem demonstrar.`,
      atividade: `Mostre para a turma seu personagem andando com as setas. Conte qual número de velocidade você escolheu e por quê. Responda: o que aconteceria se o número fosse muito maior? Diga qual seta leva o personagem para a direita.`,
      gabarito: `A criança mostra o personagem obedecendo às setas, informa o número de velocidade que usou e responde que um número muito maior deixaria o personagem rápido demais (foguete). Acerta também ao apontar que a seta da direita leva o personagem para a direita.`,
    },
  ],
};
