import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "O que é uma IA que aprende?",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Entender que uma IA pode aprender com exemplos, diferente de um robô que só segue regras prontas, conhecendo a tela do ML for Kids.`,
  descricao: `Nesta primeira aula do mês, as crianças descobrem uma ideia poderosa: existem programas de computador que aprendem sozinhos, observando muitos exemplos, em vez de seguir uma lista fixa de regras escritas por uma pessoa. Essa é a grande diferença entre um robô comum (que só faz o que mandam, passo a passo) e uma Inteligência Artificial que aprende (que descobre padrões olhando exemplos e melhora com o tempo).

Para deixar isso concreto, usamos o ML for Kids, uma ferramenta gratuita feita para ensinar IA de um jeito simples e visual. Nesta aula ainda não vamos treinar nada (isso é a próxima aula): o objetivo é apenas conhecer a ferramenta, explorar a tela principal e assistir a demonstrações prontas de reconhecimento de imagem e de texto. As crianças vão ver o computador "adivinhar" o que tem numa figura ou entender o sentido de uma frase, e vão perceber que ele só consegue isso porque alguém mostrou muitos exemplos antes.

O coração da aula é a conversa em grupo. As crianças têm 8 ou 9 anos e já usam tecnologia todos os dias, muitas vezes sem perceber que ali tem IA. Quando elas pedem uma música para a assistente de voz, quando um jogo cria um inimigo que parece "esperto", ou quando o celular reconhece um rosto na foto, há IA trabalhando. Trazer esses exemplos do dia a dia faz a criança sentir que IA não é mágica nem coisa de filme: é algo real, que ela já usa e que vai aprender a construir.

Esta aula é a porta de entrada do mês inteiro, cujo entregável é um modelo de IA próprio criado por cada aluno. Aqui plantamos a semente da ideia "ensinar a máquina com exemplos", que será colhida nas aulas seguintes.`,
  materiais: [
    `Computadores (um por aluno ou em duplas) com o ML for Kids já aberto no navegador na página inicial`,
    `Projetor ou TV grande conectado ao computador do professor para mostrar as demonstrações`,
    `Conexão com a internet testada antes da aula (o ML for Kids funciona online)`,
    `Exemplos prontos abertos em abas: a demonstração de reconhecimento de imagem e a de reconhecimento de texto do ML for Kids`,
    `Algumas figuras impressas simples (gato, cachorro, carro) para usar como exemplos físicos na conversa`,
    `Quadro branco ou cartolina e canetão para desenhar a diferença entre "regras prontas" e "aprender com exemplos"`,
    `Crachás ou etiquetas com o nome de cada aluno para organizar a participação na roda de conversa`,
  ],
  conceitosChave: [
    `Inteligência Artificial (IA) — um programa de computador que tenta fazer coisas que parecem precisar de inteligência, como reconhecer uma figura ou entender uma frase.`,
    `Aprender com exemplos — quando mostramos muitas figuras ou frases para o computador e ele descobre sozinho o que elas têm em comum, em vez de receber uma regra pronta.`,
    `Regra pronta — uma instrução fixa que alguém escreveu, como "se a luz estiver vermelha, pare"; o computador só obedece, não descobre nada.`,
    `Exemplo — uma figura, uma palavra ou uma frase que mostramos para a IA para ela aprender; quanto mais exemplos bons, melhor ela fica.`,
    `Reconhecer — quando a IA olha algo novo e diz a que grupo ele parece pertencer, como "isto parece um gato".`,
    `ML for Kids — o site que vamos usar o mês todo para ensinar a máquina a aprender, de um jeito fácil e colorido.`,
    `Modelo — o "cérebro treinado" da IA depois que ela viu os exemplos; é ele que faz as adivinhações.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA para dar esta aula. A ideia central é simples: existem dois jeitos de o computador agir. No jeito antigo, uma pessoa escreve regras prontas ("se isto, faça aquilo"). No jeito da IA que aprende, mostramos muitos exemplos e o computador descobre os padrões sozinho. Nesta aula você só vai apresentar a ferramenta e mostrar demonstrações; ninguém vai treinar modelos ainda (isso fica para a Aula 2).

O ML for Kids é um site gratuito (machinelearningforkids.co.uk). Abra-o antes da aula no seu computador e no projetor. Na página inicial há um botão grande "Get started" (Começar) e um menu no topo com "Projects" (Projetos), "Worksheets" (Atividades) e "Help" (Ajuda). Não crie projeto agora; só explore a tela. Teste a internet com antecedência, pois tudo funciona online.

## Passo a passo da aula

Aquecimento (10 min): Faça uma roda. Pergunte: "Quem já pediu uma música ou uma piada para uma assistente de voz?" e "Vocês acham que o celular sabe quem está na foto?". Anote no quadro as respostas. Mostre as figuras impressas (gato, cachorro, carro) e pergunte como elas sabem que aquilo é um gato. A resposta esperada: "porque eu já vi muitos gatos". Diga: "A IA aprende do mesmo jeito, vendo muitos exemplos".

Conteúdo novo guiado (15 min): No projetor, desenhe duas colunas: "Robô de regras prontas" e "IA que aprende". Na primeira, escreva um exemplo de regra ("se vermelho, pare"). Na segunda, desenhe vários gatinhos e uma setinha para a palavra "gato". Agora abra o ML for Kids. Clique em "Get started". Mostre a tela onde aparecem os projetos e explique, sem clicar para criar, que aqui é onde a turma vai ensinar a máquina nas próximas aulas. Depois abra as demonstrações prontas de reconhecimento de imagem e de texto (pelo menu "Worksheets" ou pelas abas que você deixou abertas) e mostre o computador adivinhando.

Mão na massa (25 min): Deixe as crianças, em duplas, navegarem pela tela do ML for Kids no próprio computador. Peça que encontrem e leiam em voz alta os botões "Projects", "Worksheets" e "Help". Peça que passem o mouse pelas demonstrações de imagem e texto e experimentem (sem criar projeto). Circule pela sala. Proponha um caça ao tesouro: "Achem o botão de criar um projeto novo, mas não cliquem ainda, só me mostrem onde é".

Desafio e compartilhar (10 min): Cada dupla diz um lugar do dia a dia onde acha que existe IA (jogo, vídeo, voz, foto). Escreva a lista no quadro. Termine com a frase-chave: "IA aprende com exemplos".

## Como explicar para crianças

Use a analogia do bebê: ninguém dá ao bebê uma lista de regras sobre o que é um cachorro; ele aprende vendo muitos cachorros e ouvindo o nome. A IA é parecida. Diga que o computador é como um aluno muito caprichoso que aprende rápido, mas só sabe aquilo que a gente mostra. Compare com um robô de brinquedo que anda em linha reta: ele só faz o que foi programado, não aprende. Repita a palavra "exemplo" várias vezes; ela é a chave do mês.

## Erros comuns e como ajudar

As crianças costumam achar que a IA "pensa como gente" ou que é mágica; reforce que ela só repete padrões dos exemplos que viu. Outras querem clicar em tudo e criar projetos antes da hora; combine que hoje é dia de explorar, não de criar. Algumas confundem "regra pronta" com "aprender"; volte ao desenho das duas colunas. Se a internet cair, use só as figuras impressas e a conversa. Se uma dupla terminar rápido, peça que liste três exemplos de IA na casa dela.`,
  exercicios: [
    {
      titulo: `Robô ou IA que aprende?`,
      tipo: `Discussão em grupo`,
      tempo: `8 minutos`,
      guiaProfessor: `Leia cada situação em voz alta e peça que a turma levante a mão de um lado para "robô de regra pronta" e do outro para "IA que aprende com exemplos". O objetivo é fixar a diferença, não acertar tudo de primeira. Aceite respostas com explicação.`,
      atividade: `Para cada caso, diga se é um robô que segue regra pronta ou uma IA que aprende com exemplos: (a) um portão que abre quando aperto o botão; (b) o celular que reconhece o rosto da mamãe na foto; (c) uma assistente de voz que entende o que você fala; (d) uma luz que acende às 18h todo dia.`,
      gabarito: `(a) robô de regra pronta (sempre abre ao apertar o botão); (b) IA que aprende (viu muitos rostos antes); (c) IA que aprende (ouviu muitas vozes e frases); (d) robô de regra pronta (regra fixa de horário).`,
    },
    {
      titulo: `Caça aos botões do ML for Kids`,
      tipo: `Exploração guiada no computador`,
      tempo: `7 minutos`,
      guiaProfessor: `Em duplas, peça que localizem na tela do ML for Kids os três itens pedidos. Eles devem apenas apontar e ler em voz alta, sem clicar para criar nada. Passe nas mesas confirmando.`,
      atividade: `Encontre na tela do ML for Kids e mostre para o professor: o botão "Get started", o menu "Projects" e o menu "Help". Leia o nome de cada um em voz alta.`,
      gabarito: `"Get started" fica no centro da página inicial (botão grande para começar). "Projects" fica no menu do topo, é onde se criam e guardam os projetos. "Help" também fica no menu do topo, é onde estão as ajudas e dúvidas.`,
    },
    {
      titulo: `Onde tem IA no meu dia?`,
      tipo: `Lista individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada criança escreva ou desenhe três lugares do dia a dia onde acha que existe IA. Não há resposta única; valorize a justificativa "porque ela aprendeu com exemplos". Compartilhem algumas no fim.`,
      atividade: `Escreva ou desenhe três situações do seu dia em que você acha que existe uma IA trabalhando, e ao lado de cada uma escreva por que você acha isso.`,
      gabarito: `Respostas variam. Exemplos válidos: assistente de voz que responde perguntas; jogo com inimigos que parecem espertos; aplicativo que recomenda vídeos; câmera que reconhece rostos; teclado que adivinha a próxima palavra. A justificativa correta gira em torno de "a IA aprendeu vendo muitos exemplos".`,
    },
    {
      titulo: `O bebê e o cachorro`,
      tipo: `Pergunta de raciocínio`,
      tempo: `6 minutos`,
      guiaProfessor: `Use esta pergunta para checar se a turma entendeu a analogia central. Conduza a conversa até a palavra "exemplo". Se travarem, mostre de novo as figuras impressas.`,
      atividade: `Um bebê nunca recebeu uma lista de regras sobre o que é um cachorro, mas mesmo assim aprende a reconhecer cachorros. Como ele consegue? E o que isso tem a ver com a IA que vamos usar?`,
      gabarito: `O bebê aprende vendo muitos cachorros e ouvindo o nome "cachorro" várias vezes, ou seja, aprende com exemplos. A IA do ML for Kids faz parecido: nós mostramos muitos exemplos e ela descobre o padrão sozinha, em vez de receber uma regra pronta.`,
    },
    {
      titulo: `Ensinando a máquina a separar frutas`,
      tipo: `Desafio de criação em grupo`,
      tempo: `6 minutos`,
      guiaProfessor: `Desafio final, mais difícil, para juntar tudo. Em grupo, imaginem como ensinariam uma IA a diferenciar maçã de banana. Guie-os a perceber que precisam de muitos exemplos rotulados de cada fruta. Não vão fazer no computador hoje; é só planejar a ideia.`,
      atividade: `Imaginem que vocês querem uma IA que olhe uma foto e diga se é uma maçã ou uma banana. O que vocês precisariam mostrar para ela aprender? Pensem no que daria certo e no que poderia confundir a IA.`,
      gabarito: `Seria preciso mostrar muitos exemplos de fotos de maçãs (marcadas como "maçã") e muitas fotos de bananas (marcadas como "banana"). Quanto mais exemplos variados, melhor. Pode confundir a IA se mostrarmos poucas fotos, fotos muito parecidas, ou imagens onde a fruta nem aparece direito. A ideia certa é: aprender com muitos exemplos bem rotulados de cada grupo.`,
    },
  ],
};
