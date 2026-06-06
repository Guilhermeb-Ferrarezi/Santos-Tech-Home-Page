import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Aprendendo com Exemplos: o Jogo das Pistas",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Mostrar, por meio de uma brincadeira sem computador, que a IA aprende a separar coisas em grupos quando recebe muitos exemplos bons, e que pistas claras ajudam ela a acertar.`,
  descricao: `Nesta aula a turma descobre, na prática e com o corpo, como uma inteligência artificial aprende a classificar coisas. Em vez de começar pela tela do computador, a gente começa pela mesa: a criançada vai separar cartões, figuras ou objetos em grupos e, no caminho, vai perceber quais "pistas" ajudam a decidir onde cada coisa entra. Essa brincadeira é uma ponte para a Teachable Machine, a ferramenta que vamos usar nas próximas semanas para treinar uma IA de verdade.

A ideia central é simples e poderosa: a IA não nasce sabendo. Ela aprende olhando muitos exemplos. Quando mostramos vários gatos e dizemos "isto é gato", e vários cachorros dizendo "isto é cachorro", ela começa a encontrar pistas sozinha — orelha pontuda, focinho, tamanho. Quanto mais exemplos bons damos, mais segura e certeira ela fica. Se damos poucos exemplos, ou exemplos confusos, ela erra. As crianças vão sentir isso na pele quando, no jogo, faltar pista ou aparecer um exemplo "difícil".

Durante a aula, o professor vira o "computador" da turma: as crianças entregam exemplos e o professor finge aprender com eles, mostrando que, com mais pistas, fica mais fácil acertar o próximo cartão. Esse jogo de papéis deixa o conceito concreto e divertido. No fim, conectamos tudo com a Teachable Machine, explicando que, quando ela estiver na tela, nós seremos os professores e ela será a aluna que aprende com os nossos exemplos.

O foco do mês é conhecer a IA, e esta aula entrega o coração da ideia: aprender com exemplos. É uma aula de muito movimento, conversa e descoberta, com pouquíssimo tempo de tela. O professor não precisa dominar a Teachable Machine ainda — basta abri-la para um espiar rápido no final e deixar a curiosidade ligada para a próxima semana.`,
  materiais: [
    `Computadores com a Teachable Machine já aberta no navegador (site teachablemachine.withgoogle.com), apenas para o espiar final`,
    `Projetor ou TV conectada ao computador do professor para mostrar a tela para todos`,
    `Conjunto de cartões ou figuras impressas para separar em grupos (ex.: animais, frutas, formas), com exemplos prontos`,
    `Dois potes, caixas ou bambolês no chão para servir de "grupos" onde os cartões serão colocados`,
    `Cartões "difíceis" ou confusos preparados pelo professor (ex.: um desenho que parece dois grupos ao mesmo tempo)`,
    `Folhas em branco e lápis de cor para as crianças desenharem novos exemplos`,
    `Fita crepe ou ímãs para fixar alguns cartões no quadro durante a explicação`,
  ],
  conceitosChave: [
    `Exemplo — uma figura ou coisa que mostramos para a IA dizendo a que grupo ela pertence, tipo "este aqui é um gato".`,
    `Pista — um detalhe que ajuda a decidir o grupo, como a cor, o formato ou as orelhas pontudas.`,
    `Grupo (classe) — a "caixinha" onde guardamos coisas parecidas, por exemplo a caixinha dos cachorros.`,
    `Classificar — separar as coisas em grupos certos, colocando cada uma na sua caixinha.`,
    `Treinar — ensinar a IA mostrando muitos exemplos até ela aprender a acertar sozinha.`,
    `Acertar e errar — quando a IA coloca a coisa no grupo certo ela acerta; quando coloca no grupo errado ela erra.`,
    `Exemplo bom — uma figura clara e fácil de entender, que ajuda a IA a aprender direitinho.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é uma aula desplugada (quase sem computador). Seu objetivo é fazer as crianças sentirem que a IA aprende com exemplos e com pistas. Você não precisa dominar a Teachable Machine hoje; ela só aparece num espiar rápido no final. Antes da aula, prepare três coisas: um conjunto de cartões para separar em dois grupos bem diferentes (por exemplo, animais que voam e animais que não voam, ou frutas vermelhas e frutas amarelas); dois bambolês ou caixas no chão para serem os grupos; e dois ou três cartões "difíceis" (um morcego, que voa mas não é pássaro; uma fruta de cor mista). Deixe a Teachable Machine já aberta no seu computador, ligada ao projetor.

A grande ideia que você quer plantar: mais exemplos bons e mais pistas claras deixam a IA mais certeira. Repita isso com palavras simples várias vezes.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Sente a turma em roda. Relembre a aula passada com uma pergunta: "O que tem dentro de uma IA?" Deixe duas ou três crianças responderem. Diga que hoje vamos descobrir como a IA aprende, usando uma brincadeira com cartões. Mostre dois cartões bem diferentes (um gato e uma maçã) e pergunte: "Como vocês sabem que um é bicho e outro é fruta?" Anote no quadro as pistas que aparecerem (tem pelo, é de comer, tem rabo).

15 min — Conteúdo novo guiado. Coloque os dois bambolês no chão e dê um nome a cada grupo. Diga: "Eu vou ser o computador. Vocês me dão exemplos e eu aprendo." Pegue cartões um a um e, em voz alta, mostre seu "pensamento": "Este tem asas, então vai no grupo dos que voam." Faça três ou quatro juntos, devagar, apontando a pista de cada um. Depois mostre um cartão difícil e finja ficar confuso: "Hmm, este eu não sei... preciso de mais exemplos!" Esse momento ensina que exemplos faltando geram erro.

25 min — Mão na massa. Divida a turma em duplas ou trios. Cada grupo recebe um monte de cartões e dois bambolês (ou desenha dois grupos numa folha). A missão: separar todos os cartões nos grupos certos e escrever ou dizer a pista que usaram. Circule, faça perguntas ("Por que este foi para cá?") e entregue um cartão difícil a cada grupo para ver como resolvem. Reforce: quanto mais exemplos eles olharem, mais fácil fica decidir o próximo.

10 min — Desafio e compartilhar. Cada dupla mostra um cartão e conta a pista que usou. Lance o desafio: "Se a IA errasse um cartão, o que vocês fariam?" (Resposta esperada: dar mais exemplos bons.) Para fechar, vá ao projetor e mostre a Teachable Machine por trinta segundos: aponte as caixinhas de classes e diga "semana que vem, nós vamos dar os exemplos e ELA vai aprender, igualzinho à nossa brincadeira de hoje".

## Como explicar para crianças

Use a analogia do professor e do aluno: "A IA é uma aluna. Nós somos os professores. Ela só aprende se a gente mostrar muitos exemplos." Use também a ideia de pistas de detetive: "Pistas são detalhes que ajudam a descobrir o grupo certo, como um detetive." Sempre que possível, deixe as mãos fazerem: pegar, mover e separar é mais forte do que só falar. Comemore acertos e trate erros como dica do que a IA ainda precisa aprender.

## Erros comuns e como ajudar

As crianças costumam separar pela cor do cartão e não pela pista combinada; pare e relembre qual é a pista certa. Algumas querem inventar um terceiro grupo; lembre que hoje temos só dois e o difícil deve ir no mais parecido. Outras travam no cartão difícil; diga "está tudo bem ficar em dúvida, é assim que a IA também fica quando faltam exemplos". Evite que um colega faça tudo na dupla — peça que cada criança escolha pelo menos três cartões. E não corra para o computador: o ouro desta aula está nos cartões.`,
  exercicios: [
    {
      titulo: `Caça às Pistas`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre pares de cartões (gato e maçã, carro e passarinho) e pergunte qual pista ajuda a saber o grupo de cada um. Anote as pistas no quadro.`,
      atividade: `Olhe os dois cartões que o professor mostrar e diga em voz alta uma pista que ajuda a descobrir se é bicho, fruta ou objeto.`,
      gabarito: `Respostas válidas são qualquer pista observável e correta, por exemplo: "o gato tem pelo e rabo, então é bicho" ou "a maçã é de comer, então é fruta". O importante é a criança apontar um detalhe real do cartão.`,
    },
    {
      titulo: `Separando nos Bambolês`,
      tipo: `Atividade mão na massa em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a cada dupla um monte de cartões e dois grupos nomeados. Peça que separem tudo e digam a pista usada. Circule e pergunte "por que foi para cá?".`,
      atividade: `Com seu colega, coloque cada cartão no grupo certo e conte ao professor qual pista vocês usaram para decidir.`,
      gabarito: `Cada cartão deve ficar no grupo correto conforme a regra combinada (ex.: animais que voam x animais que não voam). A dupla deve nomear ao menos uma pista coerente para o grupo, como "tem asas" ou "não tem asas".`,
    },
    {
      titulo: `O Cartão Difícil`,
      tipo: `Desafio de raciocínio`,
      tempo: `10 minutos`,
      guiaProfessor: `Dê a cada grupo um cartão confuso (ex.: um morcego). Deixe a dúvida aparecer e conduza a turma a perceber que faltam exemplos ou pistas mais claras.`,
      atividade: `Recebam o cartão difícil, conversem e decidam em qual grupo ele entra. Expliquem por que foi difícil escolher.`,
      gabarito: `Não há um único grupo certo: o esperado é que a criança justifique a escolha por uma pista (ex.: "o morcego voa, então vai no grupo dos que voam") e reconheça que foi difícil porque o cartão tinha pistas de dois grupos ou faltavam exemplos parecidos.`,
    },
    {
      titulo: `Desenhe um Exemplo Bom`,
      tipo: `Atividade criativa individual`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça que cada criança escolha um dos grupos e desenhe um novo exemplo claro para ele, marcando uma pista no desenho. Reforce que exemplos claros ajudam a IA a aprender.`,
      atividade: `Escolha um grupo e desenhe uma figura nova que caiba bem nele. Aponte no desenho a pista que mostra que ela pertence a esse grupo.`,
      gabarito: `O desenho deve pertencer claramente ao grupo escolhido e a criança deve indicar uma pista visível (ex.: desenhar um pássaro e apontar as asas). Considere correto qualquer exemplo claro e bem identificado.`,
    },
    {
      titulo: `Se a IA Errar, e Agora?`,
      tipo: `Reflexão e ligação com a Teachable Machine`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre a Teachable Machine no projetor por poucos segundos e pergunte o que fazer quando a IA erra. Conduza à conclusão de que damos mais exemplos bons.`,
      atividade: `Responda: se a IA colocar um cartão no grupo errado, o que nós podemos fazer para ela aprender e acertar da próxima vez?`,
      gabarito: `A resposta esperada é "dar mais exemplos bons e claros para ela". Também valem respostas equivalentes como "mostrar mais figuras certas" ou "ensinar com mais pistas". A ideia central é que mais exemplos bons melhoram os acertos.`,
    },
  ],
};
