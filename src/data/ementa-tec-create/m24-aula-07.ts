import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Preparando a Apresentação",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Montar a apresentação do Demo Day com roteiro de fala, demonstração do jogo no Roblox e destaque das técnicas de IA, 3D e programação, ensaiando até a fala ficar segura.`,
  descricao: `Esta é a aula em que o aluno deixa de ser apenas o criador do jogo e vira o apresentador dele. Depois de um ano inteiro construindo vídeos com IA, trilha sonora, vozes, imagens, interface no Canva, modelos 3D no Maya e o jogo montado no Roblox Studio com a linguagem Lua, chegou a hora de organizar tudo em uma demonstração curta e bem contada. O objetivo de hoje não é mexer no jogo, é preparar a história que vai ser narrada no Demo Day para a plateia entender, em poucos minutos, tudo o que está por trás do projeto.

A apresentação tem três peças que se encaixam: o roteiro de fala (o que o aluno diz, na ordem certa), a demonstração ao vivo (jogar o próprio jogo no Roblox Studio na frente do público) e o destaque das técnicas (o momento em que o aluno aponta "esta música eu fiz com IA", "este modelo eu esculpi no Maya", "este botão se mexe por causa de um script em Lua"). Sem esse fio condutor, a demo vira só "olha meu jogo"; com ele, vira a prova de tudo o que foi aprendido no Ano 2.

O foco pedagógico desta aula é comunicação e domínio da própria obra. Adolescentes costumam saber fazer, mas travam na hora de explicar para outras pessoas. Por isso a aula reserva bastante tempo para escrever um roteiro simples (o que falo, o que mostro, qual técnica destaco) e para ensaiar em voz alta com o cronômetro rodando. O professor age como diretor de ensaio: ajuda a cortar o que está longo demais, reforça os pontos fortes de cada projeto, prepara o ambiente (computador, projetor, jogo aberto no Studio) e garante que cada aluno faça pelo menos um ensaio completo.

Ao final, cada aluno sai com um roteiro escrito de três blocos, a estação de apresentação organizada (Roblox Studio aberto no jogo, modelo do Maya à mão para mostrar, lista das técnicas de IA usadas) e ao menos um ensaio cronometrado feito. Isso prepara diretamente a Aula 8, o Demo Day, onde tudo será apresentado para valer e o certificado do Ano 2 será entregue.`,
  materiais: [
    `Computadores com Roblox Studio instalado e o jogo final de cada aluno aberto (lugar/place salvo)`,
    `Maya instalado para reabrir o modelo 3D do aluno e mostrá-lo girando na hora da demo`,
    `Contas necessárias já logadas: Roblox, e acesso aos projetos de IA (Suno, ElevenLabs, DALL-E, Canva) só para consulta dos prints`,
    `Projetor ou TV para espelhar a tela e ensaiar a apresentação para a turma`,
    `Folha de roteiro impressa ou documento digital com o modelo de três blocos`,
    `Cronômetro ou timer no celular para controlar o tempo de cada ensaio`,
    `Arquivo de exemplo: um roteiro-modelo pronto e uma lista das técnicas (IA, 3D, Lua) para os alunos copiarem o formato`,
  ],
  conceitosChave: [
    `Demo Day — o dia da apresentação final, em que cada aluno mostra o jogo pronto para uma plateia e recebe o certificado do Ano 2.`,
    `Roteiro de fala — a lista, em ordem, do que você vai dizer e mostrar, para não esquecer nem se perder no meio da apresentação.`,
    `Pitch — a frase curtinha de abertura que explica em poucos segundos do que se trata o seu jogo.`,
    `Demonstração ao vivo — o momento em que você joga o próprio jogo no Roblox Studio na frente das pessoas, em vez de só falar sobre ele.`,
    `Destaque das técnicas — apontar para a plateia onde aparece cada habilidade do ano: a música feita com IA, o modelo do Maya e o script em Lua.`,
    `Estação de apresentação — o jeito organizado de deixar a mesa: computador com o jogo aberto, modelo do Maya pronto para girar e o roteiro ao lado.`,
    `Ensaio — treinar a apresentação em voz alta antes do dia real, com cronômetro, para ganhar segurança e ajustar o tempo.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você é diretor de ensaio, não professor de software. O jogo já está pronto e testado das aulas anteriores; o Maya entra apenas como vitrine, para o aluno reabrir o modelo 3D e mostrá-lo girando. Você não vai modelar nem programar nada novo. Se você é iniciante, basta saber abrir o jogo no Roblox Studio, dar o play e girar a câmera no Maya, e eu explico os cliques abaixo.

No Roblox Studio, para abrir o jogo do aluno, clique no menu superior em "File", depois "Open from File" (se for um arquivo .rbxl) ou abra direto pela aba "My Games" na tela inicial. Para testar o jogo dentro do Studio, clique no botão azul "Play" no topo (atalho F5); para parar, clique em "Stop" (atalho Shift+F5). Para a câmera não atrapalhar a demo, lembre os alunos de mover com as teclas W, A, S, D e segurar o botão direito do mouse para olhar em volta.

No Maya, para reabrir o modelo, vá em "File" e depois "Open Scene" (Ctrl+O) e escolha o arquivo .mb ou .ma do aluno. Para girar o modelo e mostrar de todos os lados, segure a tecla Alt e arraste com o botão esquerdo do mouse (isso é o "tumble", a rotação da câmera). Esse giro é o que impressiona a plateia, mostrando que o objeto é 3D de verdade.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Reúna a turma e pergunte: "Se alguém que nunca viu seu jogo entrasse agora, o que você mostraria primeiro?" Anote três ou quatro ideias no quadro. Mostre rápido, no seu computador, o jogo abrindo no Studio com "Play" e um modelo girando no Maya com Alt e o botão esquerdo, para lembrar que isso fará parte da demo.

15 min - Conteúdo novo guiado: Apresente no projetor o roteiro-modelo em três blocos. Bloco 1, Pitch: uma frase sobre o jogo. Bloco 2, Jogar: dar "Play" (F5) no Studio e mostrar o jogo rodando por cerca de trinta segundos. Bloco 3, Destaque das técnicas: apontar a música feita com IA, abrir o modelo do Maya e girar com Alt mais botão esquerdo, e mostrar uma linha do script em Lua. Escreva esse modelo no quadro para todos copiarem.

25 min - Mão na massa: Cada aluno monta a estação de apresentação: Roblox Studio aberto no jogo, Maya aberto no modelo na cena, e o roteiro ao lado. Em seguida preenchem o próprio roteiro nos três blocos. Circule pela sala ajudando a cortar frases longas, conferindo se o "Play" funciona e se o aluno consegue girar o modelo no Maya com o tumble.

10 min - Desafio e compartilhar: Em duplas, cada aluno faz um ensaio cronometrado de noventa segundos para o colega, que devolve um elogio e uma sugestão. Feche pedindo que dois voluntários apresentem para a turma toda no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "contar a história do seu jogo como um trailer". Diga: "Em pouco tempo, a pessoa precisa entender que você criou a música, esculpiu o 3D e programou de verdade." Compare o roteiro a um mapa: "Sem mapa, a gente se perde e fala tudo embaralhado." Para o destaque das técnicas, fale: "Cada vez que você aponta uma técnica, é como mostrar uma medalha que ganhou no ano." Reforce que ninguém precisa decorar; o roteiro fica na mesa como cola.

## Erros comuns e como ajudar

O erro mais comum é falar demais e querer mostrar tudo: limite a noventa segundos e elogie quem for direto ao ponto. Outro é esquecer de dar "Play" e o jogo ficar parado; oriente a deixar o Studio já aberto e testar o "Play" antes do ensaio. Alguns abrem a cena errada no Maya; peça que confirmem o nome do arquivo antes de começar. Há quem fale olhando só para a tela; lembre-os de olhar para a plateia. Por fim, muitos terminam sem ensaiar; garanta que cada aluno faça pelo menos um ensaio completo hoje.`,
  exercicios: [
    {
      titulo: `Abrir o jogo e dar Play no Studio`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Verifique se cada aluno consegue abrir o próprio jogo no Roblox Studio e clicar em "Play" (F5) sem travar. Circule conferindo se o jogo realmente roda e se o aluno sabe parar com "Stop".`,
      atividade: `Abra seu jogo no Roblox Studio. Clique no botão azul "Play" no topo (ou aperte F5) e jogue por trinta segundos. Depois clique em "Stop" (Shift+F5) para parar.`,
      gabarito: `O aluno acerta quando o jogo abre, o "Play" inicia a partida de verdade e o personagem se mexe na tela. Ele também deve conseguir clicar em "Stop" e voltar ao modo de edição sem fechar o programa.`,
    },
    {
      titulo: `Escrever o roteiro em três blocos`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Entregue a folha com os três títulos. Ajude a deixar cada bloco em uma ou duas frases curtas. Corte tudo que estiver longo demais e confira se as três técnicas (IA, 3D, Lua) aparecem no bloco 3.`,
      atividade: `Preencha seu roteiro nos três blocos: Pitch (uma frase sobre o jogo), Jogar (o que mostrar no jogo) e Destaque das técnicas (a música feita com IA, o modelo do Maya e o script em Lua).`,
      gabarito: `O roteiro está pronto quando tem os três blocos preenchidos, cada um com frases curtas e na ordem certa. Exemplo de pitch válido: "Meu jogo é uma fuga numa floresta onde o herói precisa achar a chave antes do monstro." O bloco de técnicas deve citar IA, Maya e Lua.`,
    },
    {
      titulo: `Girar o modelo do Maya na demo`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Desafie cada aluno a reabrir o modelo no Maya e mostrá-lo girando com naturalidade. Confira o uso do tumble: segurar Alt e arrastar com o botão esquerdo do mouse.`,
      atividade: `Abra seu modelo no Maya (File, depois Open Scene, ou Ctrl+O). Segure a tecla Alt e arraste com o botão esquerdo do mouse para girar o modelo, mostrando a frente, as costas e os lados, como se a plateia estivesse olhando.`,
      gabarito: `O desafio está vencido quando o modelo aparece na cena e o aluno consegue girá-lo de forma suave com Alt mais botão esquerdo, exibindo pelo menos a frente e as costas. O aluno deve dizer em voz alta "este modelo eu fiz no Maya" enquanto gira.`,
    },
    {
      titulo: `Ensaio em dupla com tempo`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas e cronometre noventa segundos por aluno. Oriente o ouvinte a dar um elogio e uma sugestão. Reforce olhar para a plateia e dar o "Play" no momento certo.`,
      atividade: `Apresente sua demo completa para o colega em noventa segundos, seguindo os três blocos do roteiro. Depois troquem: você assiste o colega e diz um elogio e uma sugestão de melhoria.`,
      gabarito: `O ensaio é válido quando o aluno percorre os três blocos dentro de noventa segundos, dá "Play" no jogo, gira o modelo no Maya e cita as técnicas de IA e Lua. O feedback do colega deve trazer exatamente um elogio e uma sugestão concreta, como "fale um pouco mais devagar".`,
    },
    {
      titulo: `Roda de conversa: minhas técnicas do Ano 2`,
      tipo: `roda de conversa`,
      tempo: `9 min`,
      guiaProfessor: `Sente a turma em roda. Conduza com perguntas sobre as habilidades do ano e ajude cada aluno a resumir, em uma frase, quais técnicas vai destacar no Demo Day.`,
      atividade: `Em roda, conte qual técnica do Ano 2 você mais gostou de aprender: vídeo com IA, música e voz com IA, imagem com IA, interface no Canva, modelagem no Maya ou programação em Lua. Depois, diga em uma frase quais delas aparecem no seu jogo.`,
      gabarito: `A participação é completa quando o aluno cita pelo menos uma técnica preferida com um motivo e formula uma frase ligando as habilidades ao jogo. Exemplo aceito: "Eu fiz a música no Suno, esculpi o monstro no Maya e programei a porta abrir com um script em Lua."`,
    },
  ],
};
