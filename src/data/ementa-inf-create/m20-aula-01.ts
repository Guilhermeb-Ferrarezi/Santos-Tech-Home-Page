import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "O Robô Dentro do Excel",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Entender o que é uma tarefa repetitiva, por que o computador é ótimo em repeti-la sem errar e descobrir que uma macro é um robozinho que faz esse trabalho chato por você dentro do Excel.`,
  descricao: `Este mês marca um momento especial do curso: o aluno vai começar a automatizar o computador, ou seja, ensinar a máquina a fazer tarefas sozinha. E tudo começa com uma ideia simples e poderosa: existem tarefas que a gente repete várias vezes, sempre do mesmo jeito. Apagar uma coluna, pintar o cabeçalho de azul, colocar a data de hoje, organizar uma lista em ordem alfabética. Fazer isso uma vez é tranquilo. Fazer vinte vezes por dia é chato, cansativo e, pior, é fácil errar.

É aí que entra a estrela do mês: a macro. Uma macro é como um robozinho que mora dentro do Excel. Você mostra para ele, passo a passo, o que precisa ser feito, e ele guarda essa sequência na memória. Depois, sempre que você quiser, aperta um botão e o robô refaz tudo igualzinho, na mesma ordem, em menos de um segundo. O computador nunca se cansa, nunca fica com preguiça e nunca esquece um passo. Essa é a grande sacada da automação: deixar o trabalho chato e repetitivo para a máquina e guardar o tempo do ser humano para pensar.

Nesta primeira aula, o foco não é programar nem gravar nada ainda. O objetivo é o aluno enxergar o mundo com novos olhos: aprender a identificar, no dia a dia da escola e nas planilhas, quais tarefas são repetitivas e valeriam a pena automatizar. É treinar o olhar para perceber o padrão. Toda vez que você faz a mesma coisa várias vezes seguidas, do mesmo jeito, acende uma luzinha: isso poderia ser feito por um robô.

Ao longo das próximas sete aulas, o aluno vai aprender a gravar suas próprias macros, criar botões mágicos, espiar o código por trás e até escrever as primeiras linhas em VBA, a linguagem que dá vida ao robô. Mas tudo começa aqui, entendendo o problema antes da solução. Quem sabe enxergar a tarefa repetitiva sabe para onde apontar o robô.`,
  materiais: [
    `Computadores (um por aluno) com o Microsoft Excel instalado e aberto`,
    `Projetor ou TV para o professor mostrar a tela do Excel ao vivo`,
    `Arquivo de exemplo chamado "lista-baguncada.xlsx" com uma planilha desorganizada (nomes fora de ordem, cabeçalho sem cor, datas faltando)`,
    `Folha impressa com uma tabela simples de "tarefa repetitiva x tarefa única" para os alunos preencherem`,
    `Quadro branco ou flip chart para anotar a lista de tarefas chatas levantada pela turma`,
    `Cronômetro ou o relógio do celular para medir quanto tempo uma tarefa repetitiva leva na mão`,
    `Acesso à internet (opcional) para mostrar um vídeo curto de braço robótico em uma fábrica`,
  ],
  conceitosChave: [
    `Automação — fazer uma tarefa acontecer sozinha, sem a pessoa repetir cada passo na mão toda vez.`,
    `Tarefa repetitiva — aquela que você faz várias vezes, sempre da mesma forma e na mesma ordem.`,
    `Macro — um robozinho dentro do Excel que guarda uma sequência de passos e refaz tudo quando você manda.`,
    `Robô (no sentido do software) — um programa que executa ações por você, sem se cansar e sem esquecer passos.`,
    `Padrão — a repetição que se enxerga quando uma mesma ação acontece de novo e de novo do mesmo jeito.`,
    `Erro humano — o engano que a gente comete por cansaço ou distração ao repetir muitas vezes a mesma coisa.`,
    `Planilha — a folha de células (linhas e colunas) do Excel onde os dados ficam organizados.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar VBA nem programação para dar esta aula. O assunto de hoje é o conceito, não a técnica. A mensagem central é simples: o computador é fantástico em repetir tarefas sem errar, e a macro é a ferramenta que captura uma sequência de passos para refazê-la quando quisermos. Se você nunca viu uma macro, basta saber que ela mora na aba "Desenvolvedor" do Excel, e que hoje vamos apenas mostrá-la de longe, sem gravar nada ainda. Para deixar a aba visível, vá em "Arquivo", depois "Opções", "Personalizar Faixa de Opções" e marque a caixinha "Desenvolvedor" na lista da direita. Faça isso antes da aula para já aparecer no projetor. Tenha o arquivo "lista-baguncada.xlsx" aberto para usar como exemplo de planilha cheia de tarefas chatas.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): comece com uma brincadeira. Peça que todos escrevam o número 1 dez vezes seguidas no caderno, o mais rápido possível. Pergunte: "alguém se cansou? alguém errou ou trocou de número?". Mostre que repetir cansa e gera erro. No projetor, abra o Excel e o arquivo "lista-baguncada.xlsx" e pergunte o que está bagunçado nele.

Conteúdo novo guiado (15 min): explique a diferença entre tarefa única (fazer uma vez) e tarefa repetitiva (fazer muitas vezes igual). Na planilha de exemplo, mostre ao vivo três tarefas chatas: pintar o cabeçalho de azul, colocar a data de hoje numa célula e organizar a lista em ordem alfabética (aba "Dados", botão "Classificar A a Z"). Faça cada uma na mão, devagar. Agora abra a aba "Desenvolvedor" e aponte para o botão "Macros". Diga: "este é o quartinho do robô; nas próximas aulas vamos ensiná-lo a fazer essas tarefas sozinho". Não grave nada hoje, só apresente.

Mão na massa (25 min): entregue a folha "tarefa repetitiva x tarefa única". Cada aluno lista, do seu dia a dia escolar e da planilha de exemplo, pelo menos cinco tarefas que se repetem e classifica cada uma como "vale automatizar" ou "não compensa". Em seguida, com o cronômetro, peça que cronometrem quanto tempo levam para pintar à mão o cabeçalho de cinco abas diferentes do arquivo de exemplo, imaginando como seria fazer isso cem vezes.

Desafio e compartilhar (10 min): cada aluno escolhe a tarefa mais chata da sua lista e explica em uma frase por que um robô faria melhor. Anote as melhores no quadro, formando o "mural de tarefas para o robô" que vai guiar o mês.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do mundo deles. A macro é "um robô que decora a dança e repete os passos quando você aperta play". Tarefa repetitiva é "lavar a louça todo dia: sempre os mesmos movimentos". O erro humano é "errar a conta na pressa do dever de casa". O padrão é "perceber que o refrão da música se repete". Diga sempre que o computador "não reclama, não cansa e não esquece", ao contrário da gente. Evite a palavra "programar" hoje; fale em "ensinar o robô". Mostre antes de pedir que façam, e nomeie o caminho exato: "aba Dados, botão Classificar de A a Z".

## Erros comuns e como ajudar

O erro mais comum é o aluno confundir tarefa repetitiva com tarefa difícil: explique que repetitiva é sobre repetir igual, não sobre ser complicada. Alguns vão querer gravar a macro logo; segure a ansiedade dizendo que hoje é o dia de caçar as tarefas, e que gravar é a próxima aula. Outros listam coisas que mudam toda vez (como escrever uma redação diferente) como automatizáveis; mostre que o robô só serve quando os passos são sempre os mesmos. Se a aba "Desenvolvedor" não aparecer, repita o caminho "Arquivo", "Opções", "Personalizar Faixa de Opções" e marque a caixinha. Por fim, alguns acham que "tudo" deve ser automatizado; valorize o julgamento de quando vale a pena e quando não compensa o esforço.`,
  exercicios: [
    {
      titulo: `Caça à repetição`,
      tipo: `Prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Aquecimento para treinar o olhar. Faça o primeiro exemplo junto no projetor e depois deixe-os encontrarem sozinhos na planilha de exemplo. Não é hora de automatizar nada, só de perceber.`,
      atividade: `Abra o arquivo "lista-baguncada.xlsx" e encontre duas tarefas que você teria que repetir várias vezes para deixar a planilha bonita e organizada. Aponte cada uma com o mouse e diga em voz alta o que faria.`,
      gabarito: `Respostas válidas incluem: pintar o cabeçalho de cada coluna com a mesma cor, colocar a data de hoje em várias linhas, classificar a lista de nomes em ordem alfabética, ajustar a largura de várias colunas iguais ou apagar linhas em branco repetidas. O essencial é o aluno identificar uma ação que se faria mais de uma vez, sempre do mesmo jeito.`,
    },
    {
      titulo: `Repetitiva ou única?`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Trabalha o conceito-chave da aula. Cuidado com a confusão entre "repetitiva" e "difícil". Circule conferindo as classificações e peça que justifiquem uma delas.`,
      atividade: `Na folha impressa, classifique cada tarefa como "repetitiva" ou "única": (1) escrever uma redação nova sobre as férias; (2) pintar de azul o cabeçalho de cinco planilhas iguais; (3) escolher o tema do trabalho em grupo; (4) colocar a data de hoje em trinta linhas; (5) somar a mesma coluna em dez planilhas do mesmo modelo.`,
      gabarito: `Repetitivas: a (2), a (4) e a (5), porque são feitas várias vezes sempre do mesmo jeito e por isso valem um robô. Únicas: a (1) e a (3), porque o resultado muda a cada vez e exige decisão humana, então não dá para automatizar com uma macro.`,
    },
    {
      titulo: `Quanto tempo o robô economiza`,
      tipo: `Em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Trabalho em pares com cronômetro. O objetivo é sentir na pele o custo da repetição. Estimule a conversa sobre o que aconteceria se fossem cem repetições, não só cinco.`,
      atividade: `Em dupla, um cronometra enquanto o outro pinta de azul, na mão, o cabeçalho de cinco abas diferentes do arquivo de exemplo. Anotem o tempo gasto. Depois calculem juntos: se fossem cem cabeçalhos, quanto tempo levaria? Troquem de papel e comparem.`,
      gabarito: `O cálculo esperado é multiplicar o tempo de cinco cabeçalhos por vinte para chegar a cem (por exemplo, se cinco levaram 1 minuto, cem levariam cerca de 20 minutos). A conclusão esperada é que a tarefa cansa, leva tempo e que um robô faria isso em segundos sem errar; o número exato varia, mas o raciocínio de multiplicar deve aparecer.`,
    },
    {
      titulo: `Onde mora o robô`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Apresentação visual da aba Desenvolvedor, sem gravar nada. Se a aba não aparecer no computador do aluno, ajude-o pelo caminho Arquivo, Opções, Personalizar Faixa de Opções. Deixe claro que só vamos olhar hoje.`,
      atividade: `No seu Excel, encontre a aba "Desenvolvedor" na faixa de opções. Clique nela e localize o botão "Macros". Não clique para gravar nada: apenas aponte o botão e leia em voz alta o nome dele. Se a aba não aparecer, peça ajuda ao professor para ativá-la.`,
      gabarito: `A aba "Desenvolvedor" fica na faixa de opções, geralmente à direita das outras abas. Dentro dela, do lado esquerdo, está o grupo "Código" com o botão "Macros". Caso não apareça, ativa-se em "Arquivo", "Opções", "Personalizar Faixa de Opções", marcando a caixinha "Desenvolvedor". O aluno deve apenas identificar e nomear o botão, sem executá-lo.`,
    },
    {
      titulo: `Mural de tarefas para o robô`,
      tipo: `Projeto curto e roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Fecha a aula reunindo as ideias da turma. Conduza a roda com perguntas curtas e anote no quadro as melhores tarefas, criando o mural que vai inspirar o entregável do mês. Valorize o bom julgamento de quando vale automatizar.`,
      atividade: `Escolha, da sua lista, a tarefa mais chata e repetitiva que você gostaria que um robô fizesse por você. Escreva uma frase explicando por que o robô faria melhor que você. Depois, na roda de conversa, leia sua frase para a turma e ouça as dos colegas.`,
      gabarito: `Uma resposta forte aponta uma tarefa claramente repetitiva (como pintar cabeçalhos, colocar datas iguais ou ordenar listas) e justifica com pelo menos um motivo válido: o robô não cansa, não erra, faz em segundos e repete sempre igual. Exemplo: "Quero que o robô coloque a data de hoje em todas as linhas, porque na mão eu erro e demoro, e ele faz tudo igual num clique."`,
    },
  ],
};
