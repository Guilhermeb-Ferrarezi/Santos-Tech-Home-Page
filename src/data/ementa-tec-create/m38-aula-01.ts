import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Mundo da VR",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar o que é Realidade Virtual, como ela difere das telas comuns e mostrar como ela vai se encaixar no portfólio do ano final do aluno.`,
  descricao: `Esta é a primeira aula do mês sobre Realidade Virtual, e o objetivo dela é abrir a cabeça do aluno para um jeito totalmente novo de fazer jogos. Até agora, em toda a trilha, o aluno criou experiências para uma tela plana: o jogador olha para um monitor e controla tudo por teclado, mouse ou controle. Na VR é diferente. O jogador coloca um óculos e passa a estar dentro do mundo do jogo, olhando para os lados, para cima e para baixo com o próprio corpo. Nesta aula ninguém ainda mexe no Unity para programar: o foco é entender o que é VR, sentir a diferença e enxergar onde isso entra no portfólio do ano.

A grande ideia que o aluno precisa levar para casa é a de imersão e presença. Imersão é o quanto a experiência envolve os sentidos da pessoa; presença é aquela sensação forte de realmente estar em outro lugar, mesmo sabendo que é mentira. Quando a VR é bem feita, o cérebro acredita no espaço ao redor e a pessoa se abaixa para passar por baixo de algo, estica a mão para pegar um objeto ou sente um friozinho na barriga ao olhar para baixo de um precipício virtual. Isso não acontece com a mesma força numa tela comum, e é por isso que a VR é tão poderosa para jogos.

Outro conceito central da aula é o campo de visão. Numa tela, você vê o mundo por uma janela retangular à sua frente. No óculos VR, a imagem cobre quase todo o seu campo de visão, inclusive os cantos dos olhos, e acompanha o movimento da cabeça. O aluno também vai perceber que VR exige cuidado: experiências mal feitas podem causar enjoo, e por isso conforto é um tema que voltará ao longo do mês. Hoje basta plantar a semente desses conceitos com exemplos concretos.

Para fechar, o professor conecta tudo ao ano final. Neste último ano da trilha, o aluno está montando um portfólio de jogos: uma experiência em Realidade Virtual no Unity com C#, um jogo no Unity com assets do Blender e um jogo na Unreal com assets do Maya. A VR é a porta de entrada desse portfólio e mostra ao aluno que ele já tem maturidade para encarar tecnologias de ponta. O entregável do mês inteiro é simples e motivador: olhar e se mover em VR. Esta aula é o mapa do caminho até lá.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalados e prontos para abrir (um por aluno)`,
    `Projetor ou TV grande para o professor mostrar vídeos e exemplos de jogos e experiências VR`,
    `Óculos VR disponíveis para demonstração e para os alunos experimentarem em rodízio, quando houver`,
    `Arquivos de exemplo: pasta com vídeos curtos de gameplay em VR e capturas de tela de experiências famosas`,
    `Slides com imagens comparando uma tela comum e a visão dentro de um óculos VR`,
    `Folha simples impressa com os conceitos do dia (imersão, presença, campo de visão, conforto) para o aluno anotar`,
    `Caixa ou pano limpo e lenços de higiene para guardar e limpar os óculos VR com segurança`,
  ],
  conceitosChave: [
    `Realidade Virtual (VR) — tecnologia que coloca a pessoa dentro de um mundo digital usando um óculos que cobre os olhos e acompanha a cabeça.`,
    `Imersão — o quanto a experiência envolve os sentidos da pessoa, fazendo ela esquecer um pouco do mundo real ao redor.`,
    `Presença — a sensação forte de realmente estar em outro lugar, mesmo sabendo que é uma simulação.`,
    `Campo de visão — a área total que os olhos enxergam de uma vez; na VR ela é bem maior do que numa tela comum.`,
    `Headset (óculos VR) — o aparelho usado na cabeça que mostra a imagem do mundo virtual para cada olho.`,
    `Rastreamento de cabeça — o recurso que faz a imagem mudar conforme você vira a cabeça, como se estivesse olhando ao redor de verdade.`,
    `Conforto em VR — conjunto de cuidados para evitar enjoo e cansaço, tema importante em toda experiência de Realidade Virtual.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ter experimentado VR a vida toda para dar esta aula. Precisa entender e saber explicar quatro ideias: imersão, presença, campo de visão e conforto. A diferença central entre VR e uma tela comum é que, na tela, você olha para um mundo de fora, como por uma janela; na VR, você está dentro do mundo e ele responde ao movimento da sua cabeça. Esta aula é de conceito e motivação, não de programação. Ninguém vai escrever código hoje. O Unity entra só de leve, para o aluno ver onde a magia acontece. Se houver óculos VR disponível, organize um rodízio curto e seguro; se não houver, vídeos e imagens dão conta do recado. Antes da aula, assista aos vídeos de exemplo, teste o projetor e, se for usar óculos, carregue a bateria e limpe as lentes.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Receba a turma lembrando que este é o ano final da trilha e que eles já fizeram jogos em tela comum. Pergunte: "E se vocês pudessem entrar dentro do jogo?" Mostre um vídeo curto de gameplay em VR no projetor. Peça que cada aluno diga em uma palavra o que sentiu ao ver a pessoa olhando para todos os lados.

15 min, conteúdo novo guiado. Apresente os quatro conceitos com a folha impressa em mãos. Explique imersão e presença com exemplos do vídeo. Mostre lado a lado uma imagem de tela comum e uma imagem da visão dentro do óculos para ensinar campo de visão. Em seguida, abra o Unity em um computador para mostrar onde tudo será construído: clique no menu superior, em GameObject, e mostre a opção Camera. Diga que, na VR, a câmera será os olhos do jogador e que vão configurar isso nas próximas aulas. Não programe nada; só mostre o ambiente. Se houver óculos, faça uma demonstração curta você mesmo, narrando o que está vendo.

25 min, mão na massa. Divida a turma em duas frentes que se revezam. Frente A, no computador: cada aluno abre o Unity, cria uma cena vazia em File e New Scene e adiciona um objeto simples pelo menu GameObject e 3D Object e Cube, só para se reambientar na interface que vão usar o mês todo. Frente B, com os óculos (se houver) ou com os vídeos: experimentam a VR por dois a três minutos cada, sempre sentados e com um colega por perto para segurança. Quem está sem óculos preenche na folha exemplos de imersão, presença e campo de visão que percebeu. Circule reforçando os conceitos e a segurança.

10 min, desafio e compartilhar. Lance o desafio: "Pense em uma ideia de experiência VR que você gostaria de criar até o fim do mês." Cada aluno escreve uma frase na folha. Depois, faça uma rodada rápida em que três ou quatro voluntários contam a ideia e dizem qual conceito do dia ela mais usa. Feche conectando com o entregável do mês: olhar e se mover em VR.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: "Uma tela comum é como olhar o mundo por uma janela; a VR é como abrir a porta e entrar nele." Para presença, conte: "Seu cérebro sabe que é jogo, mas o corpo reage como se fosse real, por isso a gente se abaixa de verdade." Para campo de visão, peça que olhem ao redor sem mexer a cabeça e percebam o quanto enxergam de canto de olho; na VR é assim, mas cheio de jogo. Sempre ligue ao portfólio: "Vocês já fizeram jogos de tela; agora vão fazer um que coloca a pessoa dentro." Evite termos técnicos demais; apresente a palavra simples primeiro e só depois o nome técnico.

## Erros comuns e como ajudar

O erro mais comum nesta aula é querer correr para o código; segure a ansiedade e explique que conceito vem primeiro. Com óculos, alguns alunos podem sentir leve enjoo: oriente sempre o uso sentado, sessões curtas e pausa imediata se incomodar; isso já introduz o tema conforto. Outro ponto é a higiene: ensine a limpar as lentes e a não apontar o óculos para o sol ou luz forte. Alguns confundem VR com vídeo 360 ou com óculos de papelão; mostre que VR de verdade responde ao movimento da cabeça. Por fim, se faltar óculos, não trate isso como problema: vídeos e imagens cumprem bem o objetivo de hoje, que é entender e se empolgar.`,
  exercicios: [
    {
      titulo: `Caça aos conceitos no vídeo`,
      tipo: `observação guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Passe um vídeo curto de gameplay em VR e pause em momentos marcantes. Ajude os alunos a nomear o que estão vendo usando os termos do dia.`,
      atividade: `Assista ao vídeo de VR e anote na folha um exemplo de imersão, um de presença e um de campo de visão que você percebeu durante a cena.`,
      gabarito: `Respostas válidas conectam o que aparece no vídeo aos conceitos. Exemplos: imersão, "o jogador esquece do mundo real e fica todo atento ao jogo"; presença, "a pessoa estica a mão como se o objeto estivesse mesmo na frente dela"; campo de visão, "ela vê o cenário até pelos cantos dos olhos, não só na frente". O importante é que cada exemplo combine com o termo certo.`,
    },
    {
      titulo: `Tela comum contra Realidade Virtual`,
      tipo: `comparação escrita`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre lado a lado a imagem de uma tela comum e a visão dentro do óculos. Conduza para que percebam a diferença de campo de visão e de movimento da cabeça.`,
      atividade: `Escreva três diferenças entre jogar numa tela comum e jogar em Realidade Virtual. Pelo menos uma diferença deve falar do campo de visão.`,
      gabarito: `Diferenças corretas incluem: na tela você vê por uma janela retangular, na VR a imagem cobre quase todo o campo de visão; na tela a imagem não muda quando você vira a cabeça, na VR ela acompanha o movimento; na tela você controla por teclado ou controle, na VR você usa o corpo e olha ao redor. A resposta deve ter três itens e citar o campo de visão em pelo menos um.`,
    },
    {
      titulo: `Reconhecendo a interface do Unity`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe os alunos abrindo o Unity. Mostre no projetor onde fica cada menu antes de pedir que cliquem. Não há programação; é só reambientação.`,
      atividade: `Abra o Unity, crie uma cena nova em File e New Scene e adicione um cubo pelo menu GameObject, depois 3D Object, depois Cube. Localize a janela Hierarchy e mostre ao professor onde o cubo aparece na lista.`,
      gabarito: `O caminho correto é: menu File, opção New Scene; depois menu GameObject, submenu 3D Object, opção Cube. O cubo deve aparecer na cena e o nome Cube deve surgir na janela Hierarchy. Se o cubo não aparecer, geralmente a cena não foi criada ou o aluno clicou no menu errado; basta refazer o caminho com calma.`,
    },
    {
      titulo: `Sentindo a presença`,
      tipo: `experiência em rodízio`,
      tempo: `14 minutos`,
      guiaProfessor: `Organize o rodízio do óculos com segurança: aluno sentado, colega por perto, sessões de dois a três minutos. Se não houver óculos, use um vídeo imersivo no projetor e conduza a reflexão com a turma toda.`,
      atividade: `Experimente a VR (ou assista ao vídeo imersivo) por alguns minutos. Depois escreva uma frase respondendo: em que momento você sentiu mais presença, ou seja, a sensação de estar mesmo dentro do mundo?`,
      gabarito: `Não há uma única resposta certa, mas a frase deve descrever um momento e ligá-lo à ideia de presença. Exemplos válidos: "Senti mais presença quando olhei para baixo e parecia que eu estava no alto"; "Senti quando virei a cabeça e o mundo virou junto comigo". Respostas fracas a melhorar são as que só dizem "foi legal" sem descrever o momento nem citar a sensação de estar dentro.`,
    },
    {
      titulo: `Minha ideia de experiência VR`,
      tipo: `projeto de ideia`,
      tempo: `12 minutos`,
      guiaProfessor: `Estimule ideias simples e possíveis para um iniciante. Lembre a turma do entregável do mês, olhar e se mover em VR, e peça que liguem a ideia a um conceito do dia. Anote no quadro as palavras que surgirem.`,
      atividade: `Imagine uma experiência VR que você gostaria de começar a criar neste mês. Escreva o nome dela, uma frase do que a pessoa faria dentro dela e diga qual conceito do dia (imersão, presença ou campo de visão) a sua ideia mais usa.`,
      gabarito: `Uma resposta completa traz três partes: um nome para a experiência, uma frase clara do que o jogador faria e a indicação de um conceito justificado. Exemplo: "Nome: Jardim Mágico; o jogador olha ao redor e descobre flores que brilham; usa muito a presença, porque a pessoa sente que está mesmo no jardim". Ideias coerentes com o nível de iniciante e ligadas a olhar e se mover em VR devem ser valorizadas; o professor ajuda a deixar realista o que estiver grande demais.`,
    },
  ],
};
