import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Recorde e Vitória",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Criar um placar que conta os pontos do jogo, uma tela de vitória ou de derrota e um recorde que fica salvo para o jogador tentar superar.`,
  descricao: `Hoje o jogo das crianças ganha um cérebro que conta tudo o que acontece. Até agora os heróis se mexiam, os inimigos chegavam e os choques aconteciam, mas o jogo não guardava nada. Nesta aula nós ensinamos o Construct 3 a contar pontos cada vez que o jogador faz algo bom, como pegar uma moeda ou derrotar um inimigo. Esse número aparece na tela o tempo todo e dá uma emoção nova: a criança quer sempre fazer mais pontos.

Depois de contar, o jogo precisa saber quando termina. Vamos criar uma tela de fim de jogo: se o jogador vence, aparece uma mensagem de vitória; se perde, aparece uma mensagem de tentar de novo. Para isso usamos uma variável (uma caixinha que guarda um número) e uma ação chamada "Go to layout", que troca a tela do jogo pela tela de resultado, igual a virar a página de um livro.

A parte mais empolgante é o recorde. O recorde é o maior número de pontos que alguém já fez naquele computador. Usamos a função de salvar (LocalStorage) para guardar esse número mesmo depois que o jogo fecha. Quando a criança abre o jogo de novo, o recorde antigo ainda está lá, esperando para ser superado. Isso transforma o joguinho em um desafio de verdade.

No fim da aula cada criança terá um placar funcionando, uma tela de vitória ou derrota e um recorde salvo. É a hora em que o projeto começa a parecer um jogo profissional, com começo, meio e fim. A próxima aula vai polir tudo, então hoje o foco é fazer o placar e o final funcionarem de forma simples e bonita.`,
  materiais: [
    `Computadores com o Construct 3 aberto no projeto do jogo de cada criança (com herói, inimigos e colisões das aulas anteriores).`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo.`,
    `Projeto de exemplo pronto do professor com placar, tela de vitória, tela de derrota e recorde já funcionando.`,
    `Objeto de texto e fonte grande já testados para mostrar o número dos pontos.`,
    `Folha impressa com o desenho de um placar (número grande) para as crianças anotarem ideias.`,
    `Cronômetro ou timer visível para controlar os blocos de 10, 15, 25 e 10 minutos.`,
    `Adesivos ou carimbos para premiar quem bater o próprio recorde durante a aula.`,
  ],
  conceitosChave: [
    `Pontos — números que o jogo soma quando você faz algo bom, como pegar uma moeda.`,
    `Variável — uma caixinha mágica do computador que guarda um número, como a quantidade de pontos.`,
    `Placar — o texto na tela que mostra os pontos para você ver enquanto joga.`,
    `Recorde — o maior número de pontos que alguém já fez; o desafio é passar dele.`,
    `Tela de vitória — a tela que aparece quando você ganha e diz "Você venceu!".`,
    `Tela de derrota — a tela que aparece quando você perde e diz "Tente de novo!".`,
    `Salvar (LocalStorage) — guardar o recorde no computador para ele não sumir quando o jogo fecha.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula trabalhamos com três ideias do Construct 3: variável global, objeto de texto e troca de layout. Uma "variável global" é uma caixinha que guarda um número para o jogo inteiro. Vamos criar uma chamada Pontos e outra chamada Recorde. O objeto de texto mostra esses números na tela. A troca de layout, feita pela ação "Go to layout", leva o jogador para a tela de vitória ou derrota. Por fim, o objeto LocalStorage salva o recorde no computador. Você não precisa decorar nada: o passo a passo abaixo diz exatamente onde clicar. Antes da aula, abra seu projeto de exemplo e teste o placar e o final uma vez, para demonstrar com segurança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma e jogue rapidinho o jogo de exemplo no projetor. Faça de propósito muitos pontos e diga: "Quem consegue passar do meu recorde?". Pergunte às crianças o que falta no jogo delas. A resposta que você quer ouvir é: "falta saber quem ganhou" e "falta contar os pontos". Relembre a colisão da aula passada, pois é nela que vamos somar pontos.

Conteúdo novo guiado (15 min): No painel direito, clique na aba "Project". Clique com o botão direito em "Global variables" (ou no nome do evento) e escolha "Add global variable". Crie uma variável: nome Pontos, tipo Number, valor inicial 0. Crie outra: nome Recorde, valor inicial 0. Agora adicione o placar: no menu, clique duas vezes na área cinza do layout para abrir "Create new object", escolha "Text", dê o nome txtPontos e arraste para o canto de cima. Na folha de eventos ("Event sheet"), no evento "Every tick", adicione a ação do txtPontos chamada "Set text" e escreva: "Pontos: " & Pontos. Mostre no projetor cada clique, devagar.

Mão na massa (25 min): Cada criança repete os passos no próprio projeto. Primeiro: somar pontos. No evento de colisão com a moeda ou inimigo, clique em "Add action", escolha a variável, ação "Add to", valor 1. Teste apertando o botão "Run" (a setinha de play no topo). Depois: o final. Crie um novo layout pelo botão direito em "Layouts" do painel Project, chame de "TelaFim", coloque um texto grande "Você venceu!". No evento que decide a vitória (por exemplo, Pontos maior ou igual a 10), adicione a ação "Go to layout" e escolha TelaFim. Para a derrota, faça outro layout "TelaPerdeu" e mande para lá quando a vida acabar. Circule pela sala ajudando um por um.

Desafio e compartilhar (10 min): Adicione o recorde. No início do jogo (evento "On start of layout"), peça para o LocalStorage ler o recorde salvo. Na tela de fim, se Pontos for maior que Recorde, use "Set value" para igualar e a ação "Set item" do LocalStorage para salvar. Cada criança mostra o placar e tenta bater o próprio recorde.

## Como explicar para crianças

Use a analogia do cofrinho: a variável Pontos é um cofrinho onde a gente coloca uma moeda toda vez que algo bom acontece. O placar é a janelinha do cofrinho onde a gente vê quantas moedas tem. O recorde é o cofrinho mais cheio que já existiu, e o desafio é encher um ainda mais cheio. A tela de vitória é a festa que aparece quando você ganha. Diga: "O computador não esquece o seu recorde, ele guarda para você tentar de novo amanhã". Comemore cada ponto em voz alta para contagiar a turma.

## Erros comuns e como ajudar

O erro mais comum é esquecer o "Set text" no "Every tick", então o número não atualiza; mostre que o texto precisa ser avisado o tempo todo. Outro erro é digitar Pontos com letra diferente da variável: o Construct 3 diferencia maiúscula de minúscula, então confira a grafia. Muitos colocam "Add to" com valor errado ou em dobro, fazendo pular de 2 em 2; confirme que o valor é 1 e que o evento não dispara duas vezes. Na troca de layout, alguns esquecem de selecionar a TelaFim no menu e o jogo não muda; aponte o menu suspenso. No recorde, é comum salvar antes de comparar: lembre que primeiro a gente compara, depois salva o número maior.`,
  exercicios: [
    {
      titulo: `Caça ao cofrinho de pontos`,
      tipo: `Aquecimento em grupo`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor o painel de variáveis do jogo de exemplo e pergunte à turma qual caixinha guarda os pontos. Deixe as crianças apontarem na tela.`,
      atividade: `Olhe a tela do professor e descubra: qual é o nome da caixinha (variável) que guarda os pontos? E qual guarda o maior número já feito?`,
      gabarito: `A variável dos pontos chama-se Pontos e a do maior número chama-se Recorde. Ambas são do tipo Number e começam com valor 0.`,
    },
    {
      titulo: `Meu placar na tela`,
      tipo: `Prática guiada individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada criança criando o objeto de texto txtPontos e a ação "Set text" no evento "Every tick". Verifique se o número aparece e atualiza ao testar com o botão Run.`,
      atividade: `Crie o texto txtPontos no canto da tela e faça aparecer "Pontos: 0". Aperte Run e veja se o número muda quando você pega uma moeda ou bate no inimigo.`,
      gabarito: `O objeto Text txtPontos fica no canto. No "Every tick", a ação "Set text" usa "Pontos: " & Pontos. Ao jogar, o número aumenta de 1 em 1 a cada colisão correta.`,
    },
    {
      titulo: `Somando ponto na batida`,
      tipo: `Mão na massa`,
      tempo: `10 minutos`,
      guiaProfessor: `No evento de colisão de cada criança, confira a ação "Add to" na variável Pontos com valor 1. Atenção a quem soma 2 de cada vez ou erra a grafia do nome.`,
      atividade: `No evento em que o herói toca a moeda (ou derrota o inimigo), adicione a ação que soma 1 ao número Pontos. Teste e conte se sobe certinho de 1 em 1.`,
      gabarito: `Na colisão, usa-se "Add to" na variável Pontos com valor 1. Cada toque soma exatamente 1. Se subir de 2 em 2, o evento está disparando duplicado ou o valor está como 2.`,
    },
    {
      titulo: `A tela de vitória e de derrota`,
      tipo: `Construção com lógica`,
      tempo: `15 minutos`,
      guiaProfessor: `Ajude a criar dois layouts (TelaFim e TelaPerdeu) e os eventos que usam "Go to layout". Confirme a condição certa: vitória quando Pontos chega ao alvo, derrota quando a vida acaba.`,
      atividade: `Crie a tela "Você venceu!" e a tela "Tente de novo!". Faça o jogo ir para a vitória quando Pontos for maior ou igual a 10 e ir para a derrota quando a vida chegar a 0.`,
      gabarito: `Existem dois layouts: TelaFim com a mensagem de vitória e TelaPerdeu com a de derrota. A condição "Pontos >= 10" dispara "Go to layout TelaFim"; a condição "Vida = 0" dispara "Go to layout TelaPerdeu".`,
    },
    {
      titulo: `Recorde que não esquece`,
      tipo: `Desafio avançado`,
      tempo: `15 minutos`,
      guiaProfessor: `Oriente o uso do objeto LocalStorage para ler no início e salvar na tela de fim. Reforce a ordem: primeiro comparar Pontos com Recorde, depois salvar o maior. Deixe a criança fechar e abrir para provar que ficou salvo.`,
      atividade: `Faça o jogo guardar o seu maior número. Na tela de fim, se Pontos for maior que Recorde, troque o Recorde e salve no computador. Feche e abra o jogo: o recorde ainda está lá?`,
      gabarito: `No "On start of layout" o LocalStorage lê o item "recorde" e coloca em Recorde. Na tela de fim, a condição "Pontos > Recorde" faz "Set Recorde = Pontos" e a ação "Set item recorde" salva o valor. Ao reabrir, o número permanece, provando que o LocalStorage guardou o recorde.`,
    },
  ],
};
