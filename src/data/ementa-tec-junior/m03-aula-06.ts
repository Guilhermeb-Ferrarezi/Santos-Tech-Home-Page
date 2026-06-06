import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Vamos Contar Pontos!",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança cria uma variável de pontos no Scratch e faz o placar aumentar na tela cada vez que ela clica em um alvo.`,
  descricao: `Nesta aula as crianças descobrem o coração de quase todo jogo: a pontuação. Até agora elas fizeram o personagem se mover, reagir ao clique, tocar som e falar. Agora vamos guardar um número que cresce, o famoso placar. Esse número fica visível no canto da tela e sobe a cada acerto, exatamente como nos joguinhos que elas já conhecem.

A grande novidade técnica é a variável. Uma variável é só uma caixinha com nome onde o computador guarda um número e lembra dele depois. Em vez de a criança contar de cabeça, o Scratch conta sozinho. Toda vez que o jogador clica no alvo, o programa diz para a caixinha de pontos: aumente em 1. E o placar na tela atualiza na hora.

Por que isso importa? Porque pontuar é o que transforma um monte de comandos em um jogo de verdade, com objetivo e recompensa. A criança sente que está construindo algo parecido com os jogos que ama, e isso aumenta muito o envolvimento. Além disso, ela vivencia uma ideia poderosa de programação sem precisar de palavras difíceis: o computador pode guardar e mudar informações.

Na prática, cada criança vai criar uma variável chamada pontos, mostrar o placar na tela, zerar os pontos quando o jogo começa (bandeira verde) e somar pontos quando clicar no alvo. Para deixar mais divertido, juntamos uma mensagem falada e um efeito sonoro a cada acerto. É a base que a turma vai usar nas próximas aulas para montar o joguinho completo.`,
  materiais: [
    `Computadores ligados, um por criança, com o Scratch já aberto (versão online em scratch.mit.edu ou o aplicativo Scratch Desktop instalado).`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar cada passo ampliado.`,
    `Um projeto-exemplo pronto pelo professor, com um alvo simples (uma maçã, uma estrela ou um balão) e a variável de pontos já funcionando, para mostrar o resultado final logo no começo.`,
    `Fones de ouvido por criança (opcional, porém ajuda quando todos tocam sons ao mesmo tempo).`,
    `Cartões ou fichas de papel com números grandes (1, 2, 3...) e um potinho ou caixinha de verdade para a dinâmica de aquecimento sobre o que é uma variável.`,
    `Folhas em branco e lápis de cor para a atividade de desenho do placar.`,
    `Adesivos de estrela ou carimbo para celebrar os acertos das crianças durante a aula.`,
  ],
  conceitosChave: [
    `Pontos — o número que mostra quantos acertos o jogador já fez no jogo.`,
    `Variável — uma caixinha com nome onde o computador guarda um número e lembra dele depois.`,
    `Placar — o número de pontos que aparece na tela para todo mundo ver.`,
    `Aumentar (mudar pontos em 1) — o comando que faz o número da caixinha crescer de um em um.`,
    `Zerar (definir pontos como 0) — o comando que coloca o placar de volta no zero quando o jogo começa.`,
    `Alvo — o personagem que o jogador precisa clicar para ganhar pontos.`,
    `Bandeira verde — o botão que começa o jogo e dá o sinal para zerar o placar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Uma variável é uma caixinha de memória com um nome. Você diz ao computador guarde o número 0 nesta caixinha chamada pontos e ele guarda. Depois você pode pedir mude o valor da caixinha pontos em 1 e o número vira 1, depois 2, depois 3. O Scratch faz tudo isso com blocos prontos, então você não precisa digitar código.

No Scratch, os blocos de variável ficam na categoria laranja chamada Variáveis, na coluna de blocos à esquerda. Os três blocos que você vai usar nesta aula são: o botão Criar uma variável (no topo dessa categoria), o bloco mude minha variável em 1 (que soma pontos) e o bloco defina minha variável como 0 (que zera o placar). Quando você cria uma variável, o Scratch automaticamente mostra o placar dela na tela, no canto superior esquerdo. Para esconder ou mostrar, basta marcar ou desmarcar a caixinha ao lado do nome da variável.

A lógica da aula é simples: ao clicar na bandeira verde, defina pontos como 0 (placar começa zerado). Ao clicar no alvo, mude pontos em 1 (placar sobe). Só isso já é um jogo de pontuação.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

AQUECIMENTO (10 min). Mostre uma caixinha de verdade e cartões com números. Coloque o cartão 1 dentro e diga: a caixinha agora guarda 1. Troque por 2, depois 3. Explique: no computador essa caixinha se chama variável e vamos guardar os pontos do jogo nela. Pergunte quais jogos as crianças conhecem que mostram pontos.

CONTEÚDO NOVO GUIADO (15 min). No seu computador, com o projetor ligado, abra o Scratch. Clique na categoria laranja Variáveis (coluna da esquerda). Clique em Criar uma variável, digite pontos e clique em OK. Mostre que o placar apareceu na tela. Agora arraste para a área de blocos: Quando a bandeira verde for clicada (categoria amarela Eventos) e embaixo dele defina pontos como 0 (categoria laranja). Depois selecione o alvo, arraste Quando este ator for clicado e embaixo mude pontos em 1. Clique na bandeira verde e depois no alvo várias vezes para a turma ver o placar subir.

MÃO NA MASSA (25 min). Cada criança repete no seu computador: escolher um alvo (botão azul Escolher um ator, no canto inferior direito), criar a variável pontos, montar os dois conjuntos de blocos e testar clicando. Circule pela sala. Quem terminar pode trocar o efeito de tamanho do alvo a cada clique.

DESAFIO E COMPARTILHAR (10 min). Desafio: fazer o alvo dizer Você ganhou um ponto! a cada clique (bloco diga da categoria roxa Aparência) e tocar um som (categoria rosa Som). Peça para duas ou três crianças mostrarem o placar subindo no projetor e todos aplaudirem.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame a variável de caixinha mágica de pontos. Diga: toda vez que você acerta o alvo, a gente coloca mais uma estrelinha na caixinha, e o número cresce. Compare com um cofrinho: cada clique é uma moedinha que entra. Para o zerar, diga: quando o jogo começa, a gente esvazia o cofrinho para todo mundo começar do zero, igual numa corrida que começa em zero. Use as mãos: mostre o número subindo com os dedos.

## Erros comuns e como ajudar

O erro mais comum é colocar o bloco mude pontos em 1 no personagem errado. Lembre que o bloco de somar tem que estar selecionado no ator do alvo, não no palco nem em outro personagem. Outro erro: a criança esquece de pôr o defina pontos como 0 na bandeira verde, então o placar nunca volta a zero entre uma rodada e outra; mostre que isso é normal e ajude a arrastar o bloco. Há quem crie a variável com nome errado ou crie duas variáveis sem querer; oriente a usar sempre a mesma, chamada pontos. Por fim, se o placar não aparece na tela, verifique se a caixinha ao lado do nome da variável está marcada na categoria laranja.`,
  exercicios: [
    {
      titulo: `O cofrinho dos pontos`,
      tipo: `roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Sente a turma em roda. Mostre um cofrinho ou caixinha de verdade e cartões com números. Explique com calma que a variável é uma caixinha que guarda um número e lembra dele.`,
      atividade: `Coloque um cartão com o número 1 dentro da caixinha e pergunte: quanto tem na caixinha? Troque pelo 2, depois pelo 3. Depois diga: vamos esvaziar! Tire tudo e pergunte quanto tem agora. Peça que cada criança diga um jogo que mostra pontos na tela.`,
      gabarito: `A criança acerta quando responde corretamente o número que está na caixinha (1, depois 2, depois 3) e diz 0 ou nada quando a caixinha é esvaziada, mostrando que entendeu que a caixinha guarda e pode zerar o número. Citar qualquer jogo com placar já é sucesso.`,
    },
    {
      titulo: `Criando a caixinha de pontos no Scratch`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto com a turma, passo a passo, no projetor. Espere todos clicarem antes de avançar. Repita os nomes das categorias e botões em voz alta.`,
      atividade: `No Scratch, cada criança clica na categoria laranja Variáveis, clica em Criar uma variável, digita pontos e clica em OK. Confira com a turma se o placar apareceu no canto da tela.`,
      gabarito: `A criança acertou quando a palavra pontos aparece na lista de variáveis laranja e o placar pontos surge no canto superior esquerdo do palco mostrando o número 0. Se o placar não aparecer, a caixinha ao lado do nome precisa estar marcada.`,
    },
    {
      titulo: `O placar que sobe`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Oriente cada criança a escolher um alvo no botão azul Escolher um ator (canto inferior direito). Depois mostre onde encontrar cada bloco pela cor da categoria. Circule e ajude a encaixar os blocos.`,
      atividade: `Selecione o alvo. Monte: Quando este ator for clicado (Eventos, amarelo) com mude pontos em 1 (Variáveis, laranja) embaixo. Depois, com a bandeira verde: Quando a bandeira verde for clicada com defina pontos como 0 embaixo. Clique na bandeira verde e depois no alvo várias vezes.`,
      gabarito: `Está correto quando o placar começa em 0 ao clicar na bandeira verde e aumenta de 1 em 1 a cada clique no alvo. Se o número não sobe, o bloco mude pontos em 1 provavelmente está no personagem errado e precisa estar dentro do alvo.`,
    },
    {
      titulo: `Desenhe o seu placar`,
      tipo: `desenho no papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua folhas e lápis de cor. Peça que cada criança desenhe a tela do seu jogo. Incentive a deixar bem visível onde fica o número dos pontos.`,
      atividade: `Desenhe a tela do seu joguinho: o seu alvo no meio e, no cantinho, a caixinha de pontos mostrando um número à sua escolha (por exemplo, 5). Escreva ou copie a palavra pontos ao lado do número.`,
      gabarito: `O desenho está completo quando mostra três coisas: o alvo, um número de pontos e a indicação de que aquele número é o placar (a palavra pontos ou uma seta apontando para ele). Não existe número certo ou errado; o importante é a criança representar a ideia do placar na tela.`,
    },
    {
      titulo: `Acerto que fala e faz som`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o desafio para quem já fez o placar subir. Mostre rapidamente no projetor onde ficam os blocos diga (roxo, Aparência) e toque o som (rosa, Som). Deixe a criança tentar sozinha primeiro.`,
      atividade: `No alvo, junte ao bloco mude pontos em 1 dois novos blocos: diga Você ganhou um ponto! por 1 segundo (Aparência, roxo) e toque o som Pop (Som, rosa). Teste clicando no alvo e veja o placar subir, a fala aparecer e o som tocar juntos.`,
      gabarito: `Está perfeito quando, a cada clique no alvo, acontecem três coisas ao mesmo tempo: o placar aumenta em 1, o personagem mostra a fala Você ganhou um ponto! e um som toca. Se algo não acontecer, verifique se os três blocos estão encaixados embaixo do mesmo Quando este ator for clicado, no ator do alvo.`,
    },
  ],
};
