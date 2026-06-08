import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Hora de andar pelo meu mundo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Colocar o ponto de início do personagem e usar o botão Play para caminhar pelo cenário, descobrindo se dá para passar por todos os cantos do mapa.`,
  descricao: `Até agora as crianças construíram o mundo olhando de cima, como quem monta um cenário em cima de uma mesa. Nesta aula acontece a grande virada: elas entram dentro do mundo e viram o próprio personagem! Em vez de só olhar, agora elas vão andar, pular e explorar cada cantinho do mapa que criaram com tanto carinho ao longo do mês.

Para isso, o professor vai ensinar duas coisas simples e mágicas. A primeira é o Spawn Location, que é o ponto de início: o lugar exato onde o personagem aparece quando o jogo começa. A segunda é o botão Play, que liga o jogo e transforma o cenário parado em um mundo vivo, onde dá para correr de verdade.

O coração da aula é o teste de navegação. Ao caminhar pelo cenário, cada criança vira uma exploradora detetive: será que dá para chegar no castelo? E na ponte? Tem algum buraco no chão? Algum item está flutuando no ar? Alguma parede está bloqueando a passagem? Andar pelo mundo revela problemas que ninguém percebia olhando de cima, e isso é uma descoberta empolgante, não um motivo de tristeza.

Esta é a aula em que o projeto deixa de ser uma maquete e vira um jogo de verdade. O professor deve celebrar muito esse momento: pela primeira vez o aluno vai dar os primeiros passos dentro do próprio mundo. Os problemas encontrados aqui serão a lista de tarefas das próximas aulas, então anotar tudo é parte importante da diversão.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, cada um com o projeto do mundo do aluno já salvo`,
    `Projetor ou TV grande ligada ao computador do professor para demonstrar os passos`,
    `Um projeto de exemplo pronto, com Spawn Location já colocado, para mostrar o resultado final`,
    `Mouse com rodinha (scroll) para cada criança, que ajuda muito a girar a câmera`,
    `Folhas de papel e lápis de cor para a turma desenhar o "mapa de problemas" encontrados`,
    `Adesivos ou carimbos de "Explorador" para premiar quem testar o mundo inteiro`,
  ],
  conceitosChave: [
    `Ponto de início (Spawn Location) — é o lugar onde o seu personagem nasce e aparece quando o jogo começa, igual à porta de entrada do parque.`,
    `Botão Play — é o botão verde que liga o jogo e deixa você entrar de verdade no mundo para andar e pular.`,
    `Testar — é experimentar o jogo andando por ele para ver se está tudo funcionando, como provar a comida para ver se ficou boa.`,
    `Navegar — é andar e explorar o mundo, passando por todos os cantos para conhecer cada pedacinho.`,
    `Personagem — é o bonequinho que você controla dentro do jogo, os seus olhos e suas pernas no mundo.`,
    `Buraco ou bloqueio — é um lugar onde o personagem cai sem querer ou não consegue passar, um probleminha que a gente descobre andando.`,
    `Câmera — é como uma janelinha que mostra o mundo; ela gira para você olhar para os lados, para cima e para baixo.`,
  ],
  treinamento: `## O que o professor precisa saber

No Roblox Studio existe uma peça especial chamada Spawn Location. Ela parece um tapete com uma bolinha em cima e marca onde o personagem nasce quando o jogo começa. Sem ela, o Roblox escolhe um lugar qualquer, muitas vezes em cima de um objeto ou no ar. Por isso, colocá-la no chão, num lugar plano e seguro, é o primeiro passo.

O botão Play fica no topo da tela, na aba "Home" (Início) ou "Test" (Teste). É um triângulo verde, igual ao botão de "play" de um vídeo. Ao clicar nele, você vira o personagem e controla com as teclas W, A, S, D (andar) e a barra de espaço (pular). Para sair e voltar a editar, clica no botão "Stop" (quadrado vermelho). Treine isso uma vez antes da aula para se sentir confiante.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Reúna a turma e pergunte: "O que será que vai acontecer se a gente entrar dentro do nosso mundo?". Abra o projeto de exemplo no projetor. Conte que hoje cada um vira o personagem do próprio jogo. Faça todos abrirem seus projetos salvos.

CONTEÚDO NOVO GUIADO (15 min): No seu computador, mostre na aba "Home", clique em "Toolbox" se precisar, mas o caminho mais fácil é a aba "Model" (Modelo): procure o botão "Spawn" (ou em "Part", escolha "Spawn Location"). Clique e uma plataforma azul e amarela aparece. Arraste-a com a ferramenta "Move" (Mover) até um lugar plano do chão, encostando no chão para não ficar flutuando. Depois, mostre o botão verde "Play" no topo. Clique e ande: aperte W para frente, e a barra de espaço para pular. Gire a câmera mexendo o mouse. Clique no quadrado vermelho "Stop" para voltar.

MÃO NA MASSA (25 min): Cada criança coloca seu Spawn Location no chão do próprio mundo, num lugar bonito e seguro (perto da entrada). Em seguida, todos clicam em "Play" e começam o teste de navegação. Peça que tentem chegar em cada cantinho: "Conseguem ir até a árvore? E até a casa?". Passe de mesa em mesa ajudando. Cada problema encontrado (buraco, item flutuando, parede que bloqueia) vira um desenho no "mapa de problemas" no papel.

DESAFIO + COMPARTILHAR (10 min): Lance o desafio: "Quem consegue dar a volta completa no mundo sem cair?". Depois, cada criança mostra rapidinho no projetor um cantinho legal e um probleminha que descobriu. Guarde a lista de problemas para as próximas aulas.

## Como explicar para crianças

Use a analogia do parque de diversões. Diga: "O Spawn é a portinha de entrada do nosso parque. É por ali que a gente entra!". Para o Play, fale: "Apertar esse botão verde é como pular para dentro de um desenho animado: agora VOCÊ é o personagem!". Para o teste, diga: "Vamos virar exploradores! Será que dá para chegar em todos os lugares? Detetive de verdade procura os probleminhas escondidos.".

Lembre que encontrar problemas é vitória, não derrota. Comemore cada descoberta: "Que olho esperto! Você achou um buraco que ninguém tinha visto!".

## Erros comuns e como ajudar

O personagem cai para sempre: quase sempre o Spawn ficou flutuando no ar ou tem um buraco no chão. Ajude a criança a arrastar o Spawn para encostar no chão sólido. O aluno coloca o Spawn dentro de uma parede ou objeto: o personagem nasce preso. Mostre como mover para um espaço aberto. A criança esquece de clicar em "Stop" e tenta editar: lembre que, para arrumar o cenário, primeiro clica no quadrado vermelho. Câmera apontada para o chão ou para o céu: ensine a girar devagar com o mouse. E o clássico: a criança aperta as teclas com força demais; mostre que toques leves já fazem o personagem andar.`,
  exercicios: [
    {
      titulo: `Onde fica a portinha de entrada?`,
      tipo: `Pergunta e resposta oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça esta atividade no aquecimento, com a turma reunida. Use a analogia do parque para checar se entenderam o conceito de ponto de início antes de mexer no computador.`,
      atividade: `Pergunte para a turma: "Quando a gente aperta o Play, onde será que o nosso personagem aparece? E quem decide esse lugar?". Deixe as crianças darem palpites.`,
      gabarito: `O personagem aparece exatamente no Spawn Location (ponto de início), a "portinha de entrada". Quem decide esse lugar é a própria criança, ao colocar e arrastar o Spawn para o lugar que quiser, de preferência num chão plano e seguro.`,
    },
    {
      titulo: `Colocando o meu ponto de início`,
      tipo: `Prática guiada no computador`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe passo a passo. Mostre no projetor a aba "Model" e o botão "Spawn". Verifique se cada Spawn ficou encostado no chão, sem flutuar.`,
      atividade: `Cada criança vai à aba "Model" (Modelo), clica em "Spawn" e arrasta a plataforma azul e amarela com a ferramenta "Move" (Mover) até um lugar plano do chão do seu mundo, perto da entrada.`,
      gabarito: `O Spawn Location aparece como uma plataforma encostada no chão, num local plano e aberto (não em cima de um objeto, não dentro de uma parede e não flutuando no ar). Esse será o lugar onde o personagem nasce ao iniciar o jogo.`,
    },
    {
      titulo: `Apertei Play e agora eu ando!`,
      tipo: `Exploração prática`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre o botão verde "Play" e o quadrado vermelho "Stop". Reforce as teclas W, A, S, D e a barra de espaço. Passe de mesa em mesa ajudando com a câmera.`,
      atividade: `Cada criança clica no botão verde "Play", anda com a tecla W, pula com a barra de espaço e gira a câmera com o mouse. Depois clica no quadrado vermelho "Stop" para voltar a editar.`,
      gabarito: `Ao clicar em Play, a criança vira o personagem e consegue andar (W, A, S, D), pular (barra de espaço) e olhar para os lados girando a câmera com o mouse. Ao clicar em Stop, ela sai do modo de jogo e volta a poder editar o cenário.`,
    },
    {
      titulo: `Detetive de problemas: o mapa dos cantinhos`,
      tipo: `Teste de navegação com registro em papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a folha do "mapa de problemas". Incentive a criança a tentar chegar em CADA canto do mapa. Cada problema vira um desenho. Celebre cada descoberta como vitória.`,
      atividade: `Andando pelo mundo no modo Play, a criança tenta chegar em todos os cantos (árvore, casa, ponte, etc.). Cada vez que achar um problema (buraco, item flutuando, parede bloqueando), desenha no papel onde foi.`,
      gabarito: `A criança consegue listar/desenhar pelo menos um problema de navegação, por exemplo: um buraco no chão por onde o personagem cai, um item flutuando no ar, ou uma parede que impede a passagem. O resultado esperado é uma pequena lista de problemas para arrumar nas próximas aulas. Não existe resposta única: o importante é ter explorado e registrado o que encontrou.`,
    },
    {
      titulo: `A volta completa ao mundo`,
      tipo: `Desafio final e compartilhamento`,
      tempo: `8 minutos`,
      guiaProfessor: `Lance o desafio com entusiasmo. Quem completar ganha o adesivo de "Explorador". No fim, cada criança mostra no projetor um cantinho legal e um probleminha que descobriu.`,
      atividade: `O desafio é dar a volta completa pelo mundo, passando pelos principais pontos, sem cair em nenhum buraco. Depois, cada criança apresenta rapidinho um lugar bonito e um problema encontrado.`,
      gabarito: `O aluno consegue caminhar por um trajeto que passa pelos pontos principais do mapa e identificar se há, ou não, lugares onde o personagem cai ou fica preso. Se cair, isso já é uma descoberta válida: significa que achou um problema para resolver. Espera-se que cada criança consiga apontar pelo menos um cantinho que gostou e um probleminha a melhorar, mostrando que entendeu o objetivo de testar e navegar pelo mundo.`,
    },
  ],
};
