import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Hora de Jogar e Mostrar!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança deixa o seu mini-jogo de Minecraft funcionando do início ao fim, joga o jogo dos colegas e apresenta o seu Projeto Minecraft com orgulho.`,
  descricao: `Esta é a aula da grande festa! Durante o mês inteiro, as crianças aprenderam a guardar coisas na "caixinha mágica" (variável), a trocar números, a usar o "se isto, então aquilo", a fazer o mundo reagir e a montar um placar que sobe. Agora chegou a hora de juntar tudo e mostrar para todo mundo o mini-jogo que cada uma construiu.

Nesta aula final do Projeto Minecraft, o foco não é criar coisas novas, e sim deixar o que já existe redondinho. As crianças vão testar o próprio jogo, conferir se o placar conta os pontos certinho e arrumar os pequenos errinhos que aparecerem. Depois, todos jogam o jogo dos colegas, torcem juntos e comemoram a maior pontuação da turma.

Por que isso importa? Porque testar, ajustar e apresentar faz parte de ser um criador de games de verdade. Os profissionais que fazem jogos passam muito tempo jogando, descobrindo o que precisa melhorar e mostrando o trabalho para outras pessoas. Quando a criança apresenta o seu jogo, ela aprende a falar sobre o que fez, ganha confiança e percebe que é capaz de construir algo do começo ao fim.

A aula termina em clima de celebração: cada criança recebe aplausos, conta a parte favorita do seu jogo e fecha o mês com a sensação gostosa de ter criado um game inteiro com as próprias mãos.`,
  materiais: [
    `Computadores (um por criança ou em duplas) com Minecraft Education e a janela do MakeCode já aberta no projeto de cada aluno.`,
    `Projetor ou TV grande ligado em um computador para a roda de apresentações.`,
    `Os arquivos dos mini-jogos das aulas anteriores já salvos e identificados com o nome de cada criança.`,
    `Um "placar da turma" grande no quadro ou em cartolina para anotar a maior pontuação de cada jogo.`,
    `Adesivos, carimbos ou medalhas de papel para a celebração final das conquistas do mês.`,
    `Lista de verificação simples impressa (com desenhos) para o professor checar cada jogo: começa, conta ponto, termina.`,
    `Cronômetro ou ampulheta visível para marcar o tempo de cada apresentação.`,
  ],
  conceitosChave: [
    `Testar — é jogar o próprio jogo para ver se tudo funciona, igual provar a comida antes de servir.`,
    `Ajustar — é arrumar um errinho ou mudar um número para o jogo ficar mais divertido e justo.`,
    `Placar — é o quadro de pontos que mostra quem fez mais pontos no jogo.`,
    `Jogo jogável — é um jogo que tem começo, meio e fim e que qualquer pessoa consegue jogar sozinha.`,
    `Apresentar — é mostrar e contar para os outros o que a gente criou, com a voz e com orgulho.`,
    `Comemorar — é bater palmas e ficar feliz com o que a gente e os amigos conseguiram fazer.`,
    `Maior pontuação (recorde) — é o número mais alto de pontos que alguém conseguiu naquele jogo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Esta aula fecha o Projeto Minecraft. Você não vai ensinar blocos novos de programação: vai ajudar cada criança a testar, ajustar e apresentar o mini-jogo que ela montou nas aulas anteriores. Os jogos usam variáveis (a "caixinha" que guarda os pontos), um placar que aparece na tela e uma regra de "se isto, então aquilo" que soma pontos quando algo acontece (pegar um item, chegar num lugar, quebrar um bloco).

Tecnicamente, no Minecraft Education você abre o mundo do aluno e, dentro do jogo, clica no ícone de lápis (Code Builder, tecla C) para abrir o MakeCode no navegador embutido. Lá ficam os blocos coloridos que a criança encaixou. O placar geralmente foi feito com o bloco "say" (dizer) ou com a variável "pontos" mostrada na tela. Antes da aula, abra um a um os projetos, confirme que cada mundo carrega e que o código não está vazio. Tenha um jogo de exemplo seu pronto para demonstrar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Reúna a turma na frente do projetor. Pergunte: "O que faz o placar subir no seu jogo?". Deixe duas ou três crianças responderem. No seu jogo de exemplo, mostre o bloco da variável "pontos" no MakeCode e jogue rapidinho para o placar subir de 0 para 1. Diga que hoje é o dia de deixar o jogo perfeito e mostrar para todos.

15 min — Conteúdo novo guiado (testar e ajustar): Ensine o "Teste das Três Perguntas". No seu exemplo, jogue na frente deles fazendo em voz alta: "1) O jogo começa? 2) O placar conta o ponto certo? 3) O jogo tem fim?". Mostre um errinho de propósito (placar somando 2 em vez de 1), abra o MakeCode, clique no número dentro do bloco e troque para 1. Volte ao jogo e prove que ficou certo. Esse é o ciclo: jogar, achar o errinho, mudar o número, jogar de novo.

25 min — Mão na massa: Cada criança vai ao seu computador e faz o Teste das Três Perguntas no próprio jogo. Passe de mesa em mesa com a sua lista de verificação. Ajude a abrir o Code Builder (tecla C) quando precisar mexer no código. O ajuste mais comum é trocar um número dentro de um bloco: a criança clica no campo do número e digita o novo valor. Quando um jogo passa nas três perguntas, marque um carimbo e diga que ele está "jogável". Quem terminar começa a jogar o jogo do colega ao lado e anota a pontuação no placar da turma.

10 min — Desafio e compartilhar: Faça a roda de apresentações no projetor. Cada criança mostra o seu jogo por cerca de um minuto, joga uma rodada e diz a parte favorita. A turma bate palmas. Anuncie a maior pontuação de cada jogo no placar da turma. Encerre entregando as medalhas de papel e celebrando que todos criaram um game inteiro neste mês.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use "provar a comida" para testar: o cozinheiro prova antes de servir, o criador de jogos joga antes de mostrar. Use "consertar o brinquedo" para ajustar: se uma rodinha está torta, a gente endireita. Chame o placar de "quadro de pontos". Fale "o jogo está pronto para alguém brincar" em vez de "jogável". Na apresentação, diga "mostra e conta", como no momento de levar um desenho para os colegas verem.

## Erros comuns e como ajudar

A criança muda o código e some o placar: peça Ctrl+Z (voltar) ou recoloque o bloco junto com ela. Ela aperta muitos botões e perde o mundo: tenha cópias de segurança salvas. Fica com vergonha de apresentar: deixe apresentar em dupla ou só jogar mostrando a tela. Quer ficar mexendo para sempre e nunca termina: combine que o jogo já está bom e que agora é hora de brincar. Mistura o jogo com o do colega: confirme sempre o nome no arquivo antes de abrir.`,
  exercicios: [
    {
      titulo: `O Teste das Três Perguntas`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre primeiro no seu jogo de exemplo, em voz alta, as três perguntas. Depois mande cada criança fazer o mesmo no próprio jogo, no computador. Passe de mesa em mesa com a lista de verificação e dê um carimbo quando o jogo passar nas três.`,
      atividade: `No seu jogo aberto no Minecraft, jogue uma rodada e responda em voz alta: o jogo começa? O placar conta o ponto certo? O jogo tem fim? Se algum errinho aparecer, abra o Code Builder (tecla C) e arrume com a ajuda do professor.`,
      gabarito: `A criança acerta quando consegue jogar do começo ao fim e o placar mostra o número certo de pontos. Sinal de sucesso: as três perguntas respondidas com "sim" e o carimbo de "jogável" no jogo.`,
    },
    {
      titulo: `Arruma o Número do Placar`,
      tipo: `desafio na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Prepare um jogo de exemplo com um errinho de propósito: o placar soma 2 pontos em vez de 1. Mostre o problema jogando, depois desafie as crianças a descobrir e consertar no próprio jogo, caso o placar delas esteja somando errado.`,
      atividade: `Jogue e observe: ao pegar um item, o placar pulou de 0 para 2? Abra o MakeCode, ache o bloco que soma os pontos, clique no número e troque para 1. Volte ao jogo e teste de novo.`,
      gabarito: `Acertou quando, ao fazer um ponto, o placar sobe exatamente de 1 em 1 (0, 1, 2, 3). Se o número trocado deixou o placar correto, o desafio está vencido.`,
    },
    {
      titulo: `Joga o Jogo do Colega`,
      tipo: `jogo`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme rodízio: cada criança vai ao computador do colega do lado e joga uma partida. Combine o sinal de trocar de lugar. Tenha o placar da turma à mão para anotar a pontuação de cada jogo.`,
      atividade: `Sente no lugar do colega e jogue o mini-jogo dele até fazer pontos. Anote no placar da turma quantos pontos você conseguiu. Depois, no sinal do professor, troque de lugar e jogue outro jogo.`,
      gabarito: `Acertou quando consegue jogar o jogo do colega sozinho e registra uma pontuação no placar. Sinal de sucesso: cada jogo da turma com pelo menos uma pontuação anotada.`,
    },
    {
      titulo: `O Cartaz do Meu Jogo`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua papel e lápis de cor. Peça que cada criança desenhe a tela do seu jogo e o placar. Para os menores, ajude a escrever o nome do jogo. Use os cartazes na roda de apresentação.`,
      atividade: `Desenhe o seu mini-jogo de Minecraft num papel: mostre o que o jogador faz para ganhar pontos e desenhe o placar com um número. Escreva (ou peça ajuda) o nome do seu jogo no topo.`,
      gabarito: `Acertou quando o desenho mostra a ação que dá ponto e um placar com número. Não existe desenho errado: o sucesso é a criança explicar o próprio cartaz dizendo como se faz ponto no jogo dela.`,
    },
    {
      titulo: `Mostra, Conta e Comemora`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda no projetor. Dê cerca de um minuto por criança: ela joga uma rodada e diz a parte favorita. Anuncie a maior pontuação de cada jogo. Puxe os aplausos e entregue as medalhas de papel ao final.`,
      atividade: `Na sua vez, mostre o seu jogo na tela grande, jogue uma rodada e conte para a turma: qual é a parte favorita do seu jogo e qual foi a maior pontuação? Depois, bata palmas para o jogo de cada colega.`,
      gabarito: `Acertou quando consegue mostrar o jogo funcionando, dizer pelo menos uma frase sobre ele e participar dos aplausos. Sinal de sucesso: todas as crianças apresentaram e a maior pontuação de cada jogo foi para o placar da turma.`,
    },
  ],
};
