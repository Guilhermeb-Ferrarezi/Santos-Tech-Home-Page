import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Artifacts e Projects: criar e organizar com a IA",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Aprender a usar os Artifacts do Claude para gerar documentos e código prontos e a montar um Project dedicado a um dos jogos da trilha, guardando contexto e arquivos em um só lugar.`,
  descricao: `Depois de várias aulas conversando com o Claude, pedindo ajuda e refinando respostas, chegou a hora de organizar tudo. Nesta aula os alunos conhecem duas ferramentas que transformam o Claude de "assistente de bate-papo" em "espaço de trabalho de verdade": os Artifacts e os Projects. O Artifact é uma janela ao lado da conversa onde o Claude entrega um resultado completo e editável, como um documento de design do jogo ou um trecho de código C# pronto para copiar. O Project é uma pasta inteligente onde o aluno guarda instruções, arquivos e todas as conversas sobre um mesmo jogo.

Para esta trilha avançada de games, isso faz muita diferença. O aluno do Ano 4 está tocando vários projetos ao mesmo tempo: a experiência de Realidade Virtual no Unity, um jogo no Unity com assets do Blender e um jogo na Unreal Engine com assets do Maya. Sem organização, o contexto se perde e o aluno precisa explicar tudo de novo a cada conversa. Com um Project bem montado, o Claude já sabe de qual jogo estamos falando, qual a engine, qual a linguagem e qual o estilo, sem precisar repetir.

A ideia central é simples: o Artifact serve para criar algo agora (um documento, um código, um protótipo), e o Project serve para guardar e dar contexto ao longo do tempo. Quando o aluno abre um Project do seu jogo na Unreal, por exemplo, e pede um documento de design, o Claude responde já sabendo que é C++ com assets do Maya, porque essas informações ficaram salvas nas instruções e nos arquivos do Project.

Ao final da aula, cada aluno terá criado pelo menos um Artifact simples (um documento de game design de uma página) e montado um Project dedicado a um dos seus jogos da trilha, com nome, instruções e um arquivo de contexto. É o passo que prepara a Aula 8, quando eles vão fechar o entregável do mês reunindo o próprio kit Claude de projetos.`,
  materiais: [
    `Computadores com acesso ao Claude (claude.ai) e uma conta de aluno já logada`,
    `Projetor ou TV para o professor demonstrar a interface dos Artifacts e dos Projects`,
    `Arquivo de exemplo de contexto de jogo em texto (um .txt ou .md curto descrevendo um dos jogos da trilha)`,
    `Pasta de cada aluno com prints ou anotações dos jogos da trilha (Unity VR, Unity com Blender, Unreal com Maya)`,
    `Documento-modelo de game design de uma página para os alunos compararem o resultado`,
    `Bloco de notas ou documento digital para anotar o nome e as instruções do Project`,
  ],
  conceitosChave: [
    `Artifact — janela que aparece ao lado da conversa onde o Claude entrega um resultado completo e editável, como um documento, um código ou um pequeno protótipo.`,
    `Project — espaço dentro do Claude que guarda instruções, arquivos e conversas sobre um mesmo assunto, como um dos seus jogos da trilha.`,
    `Contexto — todas as informações que o Claude já conhece sobre o seu jogo (engine, linguagem, estilo) e que evitam ter de explicar tudo de novo a cada conversa.`,
    `Instruções do Project — texto fixo que você escreve uma vez e que o Claude lê em toda conversa daquele Project, definindo como ele deve responder.`,
    `Knowledge (arquivos do Project) — os arquivos que você anexa ao Project para o Claude consultar, como um documento de contexto do jogo.`,
    `Documento de game design — texto que descreve o jogo: ideia, objetivo, personagem, mecânica principal e estilo visual.`,
    `Editar Artifact — pedir ao Claude para mudar parte do resultado entregue, em vez de gerar tudo do zero outra vez.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista no Claude para dar esta aula. Basta entender duas telas. A primeira: quando você pede algo grande (um documento, um código), o Claude abre um painel à direita da conversa, chamado Artifact. Esse painel tem o conteúdo organizado e botões para copiar e baixar. A conversa fica à esquerda; o resultado fica à direita. A segunda tela: os Projects ficam no menu lateral esquerdo, na opção "Projects". Ao criar um Project, você dá um nome, escreve instruções (campo "Set instructions" ou "Instruções") e pode anexar arquivos em "Add content" ou "Knowledge". Tudo o que conversar dentro daquele Project guarda o mesmo contexto.

Antes da aula, faça o teste uma vez: peça ao Claude "crie um documento de game design de uma página para um jogo de plataforma" e veja o Artifact abrir à direita. Depois crie um Project chamado "Meu Jogo Unreal", cole duas linhas de instruções e anexe um arquivo de texto curto. Isso te deixa seguro para demonstrar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Pergunte à turma: "Quando vocês pedem ajuda ao Claude para cada jogo diferente, precisam explicar tudo de novo toda vez?" Deixe responderem. Explique que hoje vão resolver isso. No projetor, abra uma conversa antiga e mostre como a informação fica espalhada.

15 min - Conteúdo novo guiado: No projetor, demonstre os Artifacts. Digite o pedido: "Crie um documento de game design de uma página para um jogo de corrida espacial, com ideia, objetivo, personagem, mecanica principal e estilo visual." Mostre o painel do Artifact abrindo à direita e os botões de copiar e baixar. Em seguida, peça uma edição: "Deixe o estilo visual mais cartoon." Mostre que o Artifact se atualiza sem refazer tudo. Depois abra "Projects" no menu lateral, clique em "Create project" (ou "Novo projeto"), dê o nome "Meu Jogo Unreal", e no campo de instruções escreva: "Sou aluno do Ano 4. Faco um jogo na Unreal Engine em C++ com assets do Maya. Responda sempre considerando essa engine e linguagem." Anexe o arquivo de contexto de exemplo em "Add content".

25 min - Mão na massa: Cada aluno faz dois passos. Primeiro, cria um Artifact: pede ao Claude um documento de game design de uma página para um dos seus jogos da trilha, e usa uma edição para melhorar uma parte. Depois, cria um Project dedicado a esse mesmo jogo: dá um nome, escreve duas ou três linhas de instruções dizendo a engine, a linguagem e o estilo, e anexa um arquivo de contexto (pode ser o documento que acabou de gerar, salvo em texto). Circule pela sala conferindo se o Artifact abriu e se o Project foi salvo com instruções.

10 min - Desafio e compartilhar: Cada aluno abre uma conversa nova dentro do seu Project e faz uma pergunta simples sem repetir o contexto, por exemplo: "Sugira três nomes para o meu jogo." A turma observa que o Claude já responde sabendo a engine e o estilo. Dois voluntários mostram no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: "O Artifact é como uma folha que o Claude escreve do lado, pronta para copiar; a conversa é o bate-papo, o Artifact é o trabalho pronto." Para o Project, fale: "O Project é a sua gaveta de um jogo só. Você guarda ali as instruções e os arquivos, e o Claude lembra de tudo sempre que você abre essa gaveta." Reforce a regra de ouro: criar agora é Artifact; guardar e dar contexto é Project.

## Erros comuns e como ajudar

O erro mais comum é o aluno achar que o Artifact não apareceu, quando na verdade ele está minimizado; peça para clicar no cartão do resultado na conversa para reabrir o painel. Outro é criar o Project mas esquecer de escrever as instruções, e então o contexto não funciona; confira se o campo de instruções está preenchido. Alguns anexam um arquivo enorme; oriente a usar um texto curto e direto. Há quem confunda Artifact com Project; repita a regra de ouro. Por fim, alguns abrem a conversa fora do Project e estranham que o contexto sumiu; mostre que é preciso entrar no Project antes de conversar.`,
  exercicios: [
    {
      titulo: `Criar seu primeiro Artifact`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Confira se o painel do Artifact abre à direita para cada aluno. Se não abrir, peça que cliquem no cartão do resultado dentro da conversa para expandir.`,
      atividade: `No Claude, peça um documento de game design de uma página para um dos seus jogos da trilha. Use este pedido: "Crie um documento de game design de uma página para o meu jogo, com ideia, objetivo, personagem, mecanica principal e estilo visual." Observe o Artifact abrir ao lado da conversa.`,
      gabarito: `O aluno acerta quando o painel do Artifact aparece à direita com um documento organizado contendo os cinco itens pedidos: ideia, objetivo, personagem, mecânica principal e estilo visual. Ele deve localizar os botões de copiar e baixar no canto do painel.`,
    },
    {
      titulo: `Editar o Artifact sem refazer tudo`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre que editar é pedir uma mudança na mesma conversa, e não começar de novo. Verifique se o Artifact se atualiza no lugar, em vez de gerar um documento totalmente novo.`,
      atividade: `Com o seu documento já aberto no Artifact, peça uma melhoria em uma parte só. Por exemplo: "Deixe o estilo visual mais detalhado e descreva as cores principais." Veja o Artifact atualizar apenas aquela parte.`,
      gabarito: `O exercício está correto quando o aluno pede uma mudança específica e o Artifact é atualizado mantendo o resto do documento igual. Exemplo de pedido válido: "Reescreva a mecanica principal explicando o que o jogador faz no primeiro minuto de jogo." O documento deve continuar tendo uma página, com só o trecho pedido alterado.`,
    },
    {
      titulo: `Montar um Project do seu jogo`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Acompanhe a criação do Project no menu lateral. O ponto crítico é o campo de instruções: confira se cada aluno escreveu a engine, a linguagem e o estilo do jogo escolhido.`,
      atividade: `No menu lateral, abra "Projects" e clique em criar um novo projeto. Dê um nome ao seu jogo da trilha (por exemplo, "Meu Jogo Unity VR"). No campo de instruções, escreva duas ou três linhas dizendo a engine, a linguagem e o estilo. Exemplo: "Faco uma experiência de Realidade Virtual no Unity em C#. Estilo realista. Responda sempre considerando VR no Unity."`,
      gabarito: `O Project está montado quando tem um nome ligado a um jogo da trilha e o campo de instruções está preenchido com engine, linguagem e estilo. Exemplo aceito de instrução: "Faco um jogo no Unity em C# com assets do Blender, estilo cartoon. Considere sempre essa engine e linguagem nas respostas." O Project deve aparecer salvo na lista de Projects.`,
    },
    {
      titulo: `Anexar um arquivo de contexto ao Project`,
      tipo: `desafio`,
      tempo: `9 min`,
      guiaProfessor: `Oriente os alunos a anexarem um texto curto, não um arquivo gigante. Eles podem salvar o documento de game design gerado no Artifact como texto e usar esse arquivo. Confira o botão de adicionar conteúdo.`,
      atividade: `Dentro do seu Project, use "Add content" (ou "Knowledge") para anexar um arquivo de texto curto com o contexto do jogo. Pode ser o documento de game design que você gerou, salvo em .txt ou .md. Confirme que o arquivo aparece listado no Project.`,
      gabarito: `O desafio está completo quando o arquivo de contexto aparece listado dentro do Project, na área de conteúdo ou Knowledge. O arquivo deve ser curto e descrever o jogo (ideia, engine, estilo). Se o aluno usou o documento gerado, ele precisa tê-lo salvo em texto antes de anexar. Um arquivo grande demais ou um print de tela sem texto não conta como contexto válido.`,
    },
    {
      titulo: `Provar que o contexto funciona`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Garanta que a nova conversa seja aberta de dentro do Project, e não na tela inicial. Em duplas, cada aluno mostra ao colega que o Claude responde sem precisar repetir engine e estilo.`,
      atividade: `Abra uma conversa nova de dentro do seu Project e faça uma pergunta curta sem repetir o contexto. Exemplo: "Sugira três nomes para o meu jogo." Mostre ao colega que a resposta já leva em conta a engine e o estilo que estão nas instruções. Depois troquem e observe o jogo do colega.`,
      gabarito: `O exercício é válido quando o aluno abre a conversa dentro do Project e o Claude responde já considerando o contexto salvo, sem o aluno repetir engine ou estilo. Exemplo de prova: ao pedir nomes para um jogo de VR realista no Unity, as sugestões combinam com esse estilo. Cada aluno da dupla deve dar ao colega um elogio e uma sugestão sobre a resposta obtida.`,
    },
  ],
};
