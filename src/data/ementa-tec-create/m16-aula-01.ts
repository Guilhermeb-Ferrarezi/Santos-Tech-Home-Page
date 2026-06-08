import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao CapCut",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar o CapCut e a ideia de montagem de vídeo como a etapa 4 do projeto do jogo, criando o primeiro projeto e importando um clipe gerado por IA.`,
  descricao: `Nesta aula os alunos conhecem o CapCut, o programa que vai reunir tudo o que eles já criaram com inteligência artificial: os vídeos do Sora e do Veo, a música do Suno, as vozes do ElevenLabs e as imagens do DALL-E e do Nano Banana. Até agora cada material nasceu separado, em um aplicativo diferente. A montagem de vídeo é o momento em que essas peças se encontram e viram uma única história, o trailer ou a abertura do jogo que está sendo construído no Roblox Studio. É importante deixar claro para a turma que editar não é "fazer de novo", e sim organizar com cuidado o que já existe.

O foco da aula é o reconhecimento da ferramenta. O aluno abre o CapCut, entende a tela inicial, cria um projeto novo e importa um primeiro clipe da IA para dentro dele. A partir desse clipe, o professor mostra três elementos que vão acompanhar o mês inteiro: a linha do tempo (onde o vídeo é montado), as faixas (as camadas que guardam imagem, som e texto) e a barra de reprodução (o marcador que mostra qual instante está sendo visto).

Esta é a primeira de oito aulas do mês. Aqui ninguém ainda corta, move ou adiciona música; tudo isso vem nas próximas semanas. O objetivo é que cada aluno termine a aula com um projeto criado, salvo e com um clipe da IA já colocado na linha do tempo, sentindo-se à vontade para clicar e explorar sem medo de errar.

O professor não precisa ser um especialista em edição. O CapCut é gratuito, intuitivo e perdoa erros, porque quase tudo pode ser desfeito. A postura ideal é a de quem descobre junto com a turma, nomeando cada parte da tela em voz alta e convidando os alunos a repetirem os passos no próprio computador.`,
  materiais: [
    `Computadores com o CapCut (versão para computador) já instalado e atualizado em cada estação`,
    `Conta do CapCut criada para cada aluno (ou conta da turma), com login feito antes da aula`,
    `Projetor ou TV conectada ao computador do professor para demonstrar a tela passo a passo`,
    `Uma pasta com clipes de exemplo gerados por IA (Sora ou Veo) salvos no computador, em formato MP4`,
    `Fones de ouvido por aluno, para testar som sem atrapalhar os colegas`,
    `Lista de presença e um cartaz simples com os nomes das três partes da tela: linha do tempo, faixa e barra de reprodução`,
    `Bloco de notas ou caderno para o aluno anotar o nome do próprio projeto`,
  ],
  conceitosChave: [
    `CapCut — programa gratuito de edição de vídeo onde a turma junta os materiais da IA em uma única montagem.`,
    `Projeto — o "arquivo de trabalho" do CapCut; é onde o vídeo vai sendo montado e que pode ser salvo e reaberto depois.`,
    `Importar — trazer um arquivo de fora (um clipe, uma música ou uma imagem) para dentro do projeto.`,
    `Linha do tempo — a faixa horizontal na parte de baixo da tela onde o vídeo é montado da esquerda (começo) para a direita (fim).`,
    `Faixa — cada camada da linha do tempo; uma faixa guarda o vídeo, outra pode guardar música, voz ou texto.`,
    `Barra de reprodução — a linha vertical que marca o instante exato que está sendo mostrado na tela de visualização.`,
    `Clipe — um pedaço de vídeo; cada clipe da IA aparece como um bloco dentro da faixa.`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, abra o CapCut no seu computador e faça login. Garanta que a pasta com os clipes de exemplo da IA esteja salva em um lugar fácil de achar (por exemplo, a Área de Trabalho). Abra um projeto de teste e localize com calma três regiões da tela: em cima, à esquerda, fica a área de mídia (onde os arquivos importados ficam guardados); em cima, à direita, a tela de visualização (o "preview"); embaixo, ocupando toda a largura, a linha do tempo. Você só vai ensinar o que já reconhece, então dedique cinco minutos a isso. Lembre que quase tudo se desfaz com Ctrl+Z, e isso tira o medo de errar, seu e dos alunos.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Receba a turma e relembre o projeto do jogo. Pergunte: "quais materiais vocês já criaram com a IA?" Liste no quadro: vídeos, música, vozes, imagens. Explique que este mês é a etapa 4, a montagem, e que o CapCut é o lugar onde tudo isso vira um só vídeo. Não abra o programa ainda; primeiro crie a expectativa.

Conteúdo novo guiado (15 min). Com o projetor ligado, abra o CapCut. Na tela inicial, mostre e clique no botão "Novo projeto" (ou "Criar projeto"). Aponte as três regiões: área de mídia, tela de visualização e linha do tempo. Agora importe um clipe: clique em "Importar" na área de mídia, escolha um arquivo MP4 da pasta de exemplo e confirme. O clipe aparece como uma miniatura na área de mídia. Arraste-o para a linha do tempo; ele vira um bloco, o "clipe". Mostre a barra de reprodução (a linha vertical) e aperte a barra de espaço para reproduzir. Nomeie cada parte em voz alta enquanto faz.

Mão na massa (25 min). Agora é a vez deles. Peça que cada aluno crie um "Novo projeto", dê um nome a ele (por exemplo, "Trailer do meu jogo") e importe um clipe da IA da pasta de exemplo. Em seguida, que arrastem o clipe para a linha do tempo e apertem a barra de espaço para ver. Circule pela sala estação por estação. Peça que apontem com o dedo, na própria tela, onde estão a linha do tempo, a faixa e a barra de reprodução. Repita os nomes com cada aluno.

Desafio e compartilhar (10 min). Lance o desafio: "movam a barra de reprodução com o mouse e parem no instante mais legal do clipe". Depois, em roda rápida, peça que dois ou três alunos mostrem o projeto na tela e digam o nome que deram a ele. Feche relembrando os três termos do dia.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o projeto é como um "caderno de trabalho" do vídeo. A linha do tempo é uma "estrada" que vai da esquerda (começo) para a direita (fim). As faixas são "andares de um prédio": no térreo fica o vídeo, e nos andares de cima entram música, voz e texto nas próximas aulas. A barra de reprodução é o "cursor que mostra onde estamos no filme". Importar é "trazer de fora para dentro". Evite termos técnicos demais e sempre peça que repitam o nome em voz alta; o aluno aprende o vocabulário usando-o.

## Erros comuns e como ajudar

O erro mais comum é o aluno confundir "abrir o arquivo no computador" com "importar para o projeto"; reforce que o clipe precisa estar dentro do CapCut. Outro é arrastar o clipe e ele "sumir": geralmente foi solto fora da linha do tempo, então peça Ctrl+Z e tente de novo, mais devagar. Alguns acham que apagaram tudo quando, na verdade, só moveram a barra de reprodução; mostre que basta arrastá-la de volta. Há quem esqueça de nomear o projeto; pare a turma e faça todos nomearem juntos. Por fim, se o som não tocar, verifique o volume e os fones antes de mexer no programa.`,
  exercicios: [
    {
      titulo: `Caça às três partes da tela`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Logo após a demonstração, peça que cada aluno abra o CapCut e aponte na própria tela onde ficam a linha do tempo, a faixa e a barra de reprodução. Passe de estação em estação confirmando com o dedo do aluno sobre a tela. Não deixe avançar quem ainda confunde os nomes.`,
      atividade: `Abra o CapCut, crie um projeto novo e localize na tela: a linha do tempo, uma faixa e a barra de reprodução. Aponte cada uma e diga o nome em voz alta para o professor.`,
      gabarito: `A linha do tempo é a área horizontal embaixo da tela; a faixa é cada camada dentro dela; a barra de reprodução é a linha vertical que marca o instante mostrado no preview. O aluno deve apontar as três corretamente.`,
    },
    {
      titulo: `Meu primeiro projeto com clipe da IA`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe cada aluno criando o projeto, nomeando-o e importando um clipe da pasta de exemplo. Lembre que importar é trazer para dentro do CapCut, não apenas abrir o arquivo. Se o clipe sumir ao ser arrastado, ensine o Ctrl+Z e repita devagar.`,
      atividade: `Crie um "Novo projeto", dê um nome a ele, clique em "Importar", escolha um clipe MP4 da pasta de exemplo e arraste-o para a linha do tempo. Aperte a barra de espaço para reproduzir.`,
      gabarito: `O projeto deve estar criado e nomeado, com um clipe da IA visível como bloco na linha do tempo e tocando ao apertar a barra de espaço. O nome do projeto pode ser qualquer um escolhido pelo aluno.`,
    },
    {
      titulo: `Parar no instante mais legal`,
      tipo: `desafio`,
      tempo: `6 min`,
      guiaProfessor: `Incentive os alunos a arrastarem a barra de reprodução com o mouse e a pararem em um momento marcante do clipe. Reforce que mover a barra não apaga nada. Quem terminar rápido pode tentar achar o instante exato do começo e do fim do clipe.`,
      atividade: `Use o mouse para arrastar a barra de reprodução ao longo do clipe e pare exatamente no quadro que você acha mais interessante. Deixe a barra parada nesse ponto.`,
      gabarito: `A barra de reprodução deve estar posicionada sobre um quadro do clipe escolhido pelo aluno, e o preview deve mostrar esse instante. Não há um ponto "certo"; o objetivo é controlar a barra com precisão.`,
    },
    {
      titulo: `Tela inicial em dupla`,
      tipo: `em dupla`,
      tempo: `7 min`,
      guiaProfessor: `Forme duplas. Um aluno explica ao colega, sem usar o mouse, onde clicar para criar um projeto novo e importar um clipe; o colega executa só seguindo as instruções faladas. Depois invertem os papéis. Observe se usam os nomes corretos dos botões e painéis.`,
      atividade: `Em dupla, um aluno guia o outro só falando: "clique em Novo projeto", "clique em Importar", "arraste para a linha do tempo". O colega faz exatamente o que ouve. Depois troquem de papel.`,
      gabarito: `Ao final, as duas duplas devem ter conseguido criar um projeto e importar um clipe seguindo apenas instruções faladas, usando corretamente os termos "Novo projeto", "Importar" e "linha do tempo".`,
    },
    {
      titulo: `Roda: por que montar o vídeo?`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Conduza uma roda curta. Pergunte por que vale a pena juntar no CapCut os vídeos, a música, as vozes e as imagens da IA, em vez de deixar tudo separado. Ligue as respostas ao projeto do jogo no Roblox. Anote no quadro as melhores ideias e valorize cada fala.`,
      atividade: `Em roda, responda: o que a montagem no CapCut permite fazer com os materiais que você já criou na IA? Como um vídeo montado pode ajudar a apresentar o seu jogo do Roblox?`,
      gabarito: `Respostas válidas incluem: a montagem reúne os materiais separados em uma única história; cria um trailer ou abertura do jogo; mostra o jogo de forma organizada e atraente para outras pessoas; e reaproveita música, voz e arte da IA dentro de um só vídeo.`,
    },
  ],
};
