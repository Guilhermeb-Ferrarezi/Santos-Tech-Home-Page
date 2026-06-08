import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Caçadores de Bugs: a missão final",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Jogar o próprio jogo do começo ao fim como um jogador de verdade, encontrar os erros (bugs) e anotá-los numa lista organizada por importância.`,
  descricao: `Chegamos ao último mês da trilha Júnior! Neste mês os alunos vão finalizar, publicar e apresentar o jogo que criaram no Roblox com a linguagem Lua. Mas antes de mostrar o jogo para o mundo, todo criador profissional faz uma coisa muito importante: testa o próprio jogo procurando defeitos. Hoje os alunos viram Caçadores de Bugs.

Um bug é um errinho no jogo: algo que não funciona como deveria. Pode ser um botão que não responde, um personagem que atravessa a parede, uma moeda que não soma pontos ou um texto escrito errado. Bugs são normais e existem em TODOS os jogos do mundo, até nos mais famosos. O segredo não é ter zero erros logo de cara, e sim aprender a encontrá-los e consertá-los. Por isso a missão de hoje é caçar, não esconder.

Para caçar bem, a criança precisa jogar o próprio jogo com olhos de jogador, do início ao fim, sem pular nada. Cada vez que algo estranho acontecer, ela anota numa Lista de Bugs. Mas anotar "está quebrado" não ajuda ninguém: um bom caçador descreve o bug com clareza respondendo três perguntas — o que aconteceu, onde aconteceu e quando aconteceu. Quanto melhor a descrição, mais fácil será o conserto na próxima aula.

No fim da aula, cada aluno terá uma Lista de Bugs organizada por ordem de importância: primeiro os problemas graves (que travam o jogo ou impedem de jogar), depois os médios e por último os pequenos detalhes. Essa lista será o mapa do tesouro que vamos seguir nas próximas aulas para deixar o jogo pronto para o mundo.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o jogo de cada aluno carregado (cada criança no seu projeto)`,
    `Projetor ligado para o professor demonstrar a caça aos bugs na tela grande`,
    `Folha impressa "Minha Lista de Bugs" com colunas: O quê / Onde / Quando / Importância (grande, média, pequena)`,
    `Lápis ou caneta colorida para marcar a importância de cada bug`,
    `Um jogo-exemplo preparado pelo professor com 2 ou 3 bugs propositais (para a demonstração)`,
    `Cronômetro ou relógio na parede para controlar o tempo de cada teste`,
    `Adesivos ou carimbos de "Caçador de Bugs" para premiar quem achar mais erros (opcional, motivação)`,
  ],
  conceitosChave: [
    `Bug — é um errinho no jogo, uma coisa que não funciona do jeito certo, como um botão que não aperta ou um pulo que não acontece.`,
    `Testar — é jogar o próprio jogo de propósito para descobrir se tem algum erro escondido, igual a um detetive procurando pistas.`,
    `Lista de Bugs — é o caderninho onde você anota todos os erros que encontrou, para não esquecer nenhum na hora de consertar.`,
    `Descrever — é contar o erro com clareza respondendo três perguntas: o que aconteceu, onde e quando.`,
    `Importância — é decidir qual erro consertar primeiro: os que estragam tudo vêm antes dos pequenos detalhes.`,
    `Caçador de Bugs — é o nome do criador esperto que procura erros no próprio jogo antes de mostrar para os outros.`,
    `Reproduzir — é conseguir fazer o mesmo erro acontecer de novo, repetindo os mesmos passos, para ter certeza de que ele existe.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para dar esta aula. O foco de hoje NÃO é programar nem consertar nada — é apenas JOGAR e ANOTAR. Cada aluno já tem um jogo feito por ele nos meses anteriores, aberto no Roblox Studio. O Roblox Studio é o programa onde se cria o jogo; ele tem um botão "Play" (um triângulo verde no topo, na aba "Home" ou "Test") que inicia o jogo para testar, como se a criança fosse uma jogadora de verdade. Para parar, clica-se no quadrado vermelho "Stop", no mesmo lugar. Decore só isso: triângulo verde liga, quadrado vermelho desliga.

Um bug é qualquer coisa que não funciona como o aluno planejou. Antes da aula, abra um jogo-exemplo seu e coloque 2 ou 3 bugs de propósito (uma moeda que não some ponto, um texto com erro de português, uma plataforma onde o personagem cai sem motivo). Isso vai servir para a demonstração no projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: Pergunte "Vocês já viram um jogo travar ou fazer algo estranho?". Deixe contarem. Explique que isso se chama bug e que hoje todos serão Caçadores de Bugs do próprio jogo. Mostre a folha "Minha Lista de Bugs".

15 min — Conteúdo guiado: No projetor, abra seu jogo-exemplo no Roblox Studio. Clique no triângulo verde "Play" (aba "Home", botão "Play"). Jogue na frente das crianças e finja ser jogador. Quando bater num bug, pare e diga em voz alta: "Achei um bug! Vou descrever". Preencha a folha apontando as três perguntas: O QUÊ (a moeda não somou ponto), ONDE (na primeira fase, perto da árvore), QUANDO (quando peguei a moeda azul). Clique no quadrado vermelho "Stop" para parar. Repita com mais um bug para fixar o modelo.

25 min — Mão na massa: Cada aluno vai para o seu computador, com o próprio jogo aberto. Peça que cliquem no "Play" (triângulo verde) e joguem do início ao fim, devagar, testando tudo: pulam, pegam itens, apertam botões, encostam nas paredes. A cada coisa estranha, param e anotam na folha respondendo as três perguntas. Circule pela sala ajudando a descrever. Incentive a tentar fazer o bug acontecer de novo (reproduzir). Quem terminar, joga de novo procurando bugs menores.

10 min — Desafio e compartilhar: Peça que cada aluno marque na folha a IMPORTÂNCIA de cada bug com cor: vermelho para grave (trava o jogo), amarelo para médio, verde para pequeno. Depois cada criança conta para a turma o pior bug que encontrou. Guardem as listas: serão o mapa da próxima aula.

## Como explicar para crianças

Use a ideia de detetive: "Bug é uma pegada de erro escondido no jogo. O caçador de bugs procura essas pegadas antes que outro jogador as encontre". Para a descrição, ensine o jingle das três perguntinhas: "O quê? Onde? Quando?". Repita como uma musiquinha. Compare com contar para a mãe que machucou o joelho: não adianta só dizer "dói", tem que dizer onde dói e como aconteceu. Para a importância, use a analogia da casa: se a porta da casa está quebrada (não dá pra entrar), isso é mais urgente do que um quadro torto na parede.

## Erros comuns e como ajudar

As crianças costumam escrever "tá quebrado" e nada mais — peça sempre as três perguntas até a descrição ficar clara. Outras querem CONSERTAR o bug na hora; explique com firmeza que hoje só caçamos e anotamos, o conserto é na próxima aula. Algumas confundem "não gostei" com "bug": ensine que bug é quando o jogo não faz o que deveria, não quando a cor não agradou. Há quem ache que ter bugs é vergonhoso e esconda os erros; comemore cada bug achado, porque achar é vencer. Por fim, se alguém não encontrar nenhum bug, peça que jogue de novo apertando tudo bem rápido ou indo para lugares estranhos do mapa — bugs adoram se esconder nos cantos.`,
  exercicios: [
    {
      titulo: `O que é um bug?`,
      tipo: `Pergunta e resposta oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça a pergunta para a turma e deixe várias crianças responderem. Aceite respostas com as próprias palavras delas; o importante é a ideia de "erro no jogo".`,
      atividade: `Com as suas palavras, responda: o que é um bug num jogo? Dê um exemplo de bug que você já viu em qualquer jogo.`,
      gabarito: `Um bug é um erro no jogo, uma coisa que não funciona como deveria. Exemplos válidos: o personagem atravessa a parede, o botão de pular não funciona, a moeda não soma ponto, o jogo trava, um texto aparece escrito errado.`,
    },
    {
      titulo: `Bug ou não é bug?`,
      tipo: `Classificação (sim ou não)`,
      tempo: `7 minutos`,
      guiaProfessor: `Leia cada situação em voz alta e peça que a turma responda "é bug" ou "não é bug". Reforce que bug é quando o jogo não faz o que deveria, e não quando alguém só não gostou de algo.`,
      atividade: `Diga se cada caso é bug ou não é bug: 1) O botão de pular não faz o personagem pular. 2) Eu acho a cor do céu feia. 3) A moeda some mas não ganha ponto. 4) Eu queria que tivesse mais fases. 5) O personagem cai sozinho sem encostar em nada.`,
      gabarito: `1) É bug (o botão deveria funcionar). 2) Não é bug (é gosto pessoal). 3) É bug (a moeda deveria dar ponto). 4) Não é bug (é uma ideia nova, não um erro). 5) É bug (o personagem não deveria cair sozinho).`,
    },
    {
      titulo: `As três perguntinhas`,
      tipo: `Preenchimento de ficha`,
      tempo: `8 minutos`,
      guiaProfessor: `Apresente um bug de exemplo no projetor e peça que cada aluno preencha a ficha com as três perguntas. Circule conferindo se a descrição ficou clara para quem não viu o bug.`,
      atividade: `Escolha um bug que você encontrou no seu jogo e descreva respondendo as três perguntas na sua folha: O QUÊ aconteceu? ONDE aconteceu? QUANDO aconteceu?`,
      gabarito: `A resposta varia por aluno, mas precisa ter as três partes preenchidas e claras. Exemplo correto: O QUÊ — a moeda azul não somou ponto; ONDE — na primeira fase, perto da árvore grande; QUANDO — quando encostei na moeda azul depois de pular. Uma descrição como só "tá quebrado" não está correta porque não responde as três perguntas.`,
    },
    {
      titulo: `Caça completa no meu jogo`,
      tipo: `Mão na massa no Roblox Studio`,
      tempo: `15 minutos`,
      guiaProfessor: `Garanta que cada aluno clique no triângulo verde "Play" e jogue do início ao fim. Peça pelo menos dois bugs anotados com as três perguntas. Ajude quem não achar nenhum a testar os cantos do mapa e apertar tudo rápido. Lembre de clicar no quadrado vermelho "Stop" ao terminar.`,
      atividade: `Clique no botão Play (triângulo verde) e jogue o seu jogo do começo ao fim como um jogador de verdade. Anote na Lista de Bugs pelo menos dois bugs, cada um com as três perguntas respondidas. No fim, clique em Stop (quadrado vermelho).`,
      gabarito: `O aluno deve entregar a Lista de Bugs com pelo menos dois bugs descritos, cada um com O QUÊ, ONDE e QUANDO preenchidos e legíveis. Se o jogo realmente não tiver bugs, vale anotar "testei tudo e não achei bug em tal parte", desde que tenha jogado de ponta a ponta. Esconder bugs ou deixar a ficha vazia não está correto.`,
    },
    {
      titulo: `Organizando por importância`,
      tipo: `Priorização com cores`,
      tempo: `5 minutos`,
      guiaProfessor: `Explique as três cores: vermelho (grave, trava ou impede de jogar), amarelo (médio, atrapalha mas dá pra continuar), verde (pequeno detalhe). Peça que cada aluno pinte a coluna Importância de cada bug e diga qual deve ser consertado primeiro.`,
      atividade: `Pinte a importância de cada bug da sua lista: vermelho para grave, amarelo para médio, verde para pequeno. Depois diga: qual bug você consertaria primeiro e por quê?`,
      gabarito: `O aluno deve consertar primeiro os bugs vermelhos (graves), porque eles impedem de jogar; depois os amarelos e por último os verdes. Exemplo correto: "Conserto primeiro o bug do personagem que cai sozinho (vermelho), porque sem ele ninguém consegue passar de fase; o texto escrito errado (verde) pode esperar". Deixar um bug pequeno na frente de um grave não está correto.`,
    },
  ],
};
