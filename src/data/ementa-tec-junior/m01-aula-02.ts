import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Eu Digito, o Jogo Faz!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança será capaz de criar o seu próprio comando no MakeCode, escolhendo uma palavra curta e ligando essa palavra a uma ação divertida dentro do Minecraft (chuva, dia, noite ou colocar um bloco).`,
  descricao: `Na aula passada as crianças descobriram que o jogo obedece a uma "palavra mágica". Agora elas dão um passo gigante: deixam de só usar uma palavra pronta e passam a INVENTAR a própria palavra mágica. Esta é a aula em que a criança percebe que ELA manda no jogo. Ela escolhe uma palavra curta (como "chuva" ou "noite"), liga essa palavra a uma ação e, quando digita a palavra no jogo, o Minecraft obedece na hora.

O assunto central é o "comando de chat" no MakeCode. No MakeCode existe um bloco chamado "ao digitar comando de chat" (em inglês "on chat command"). Esse bloco tem um espacinho onde escrevemos a palavra que a criança quer. Dentro dele encaixamos uma ação. A palavra é o gatilho; a ação é o que acontece. Esse par "palavra que eu digito" e "coisa que o jogo faz" é a primeira ideia de programação de verdade: um evento dispara uma resposta.

Por que isso importa? Porque é a base de TUDO que vem depois na trilha. Loops, o Agente, construir com código, tudo começa com a ideia de "quando isso acontece, faça aquilo". Hoje plantamos essa semente de um jeito leve e brincalhão: a criança digita, o mundo responde, ela ri, troca a ação e testa de novo.

O que será feito na prática: o professor mostra no projetor como criar um comando novo. Depois cada criança cria o seu, testa várias vezes no mundo do Minecraft, troca a ação ligada à mesma palavra e percebe que a palavra continua igual, mas o resultado muda. No fim, todos compartilham o comando mais divertido que inventaram.`,
  materiais: [
    `Computadores (um por criança, ou em duplas) com Minecraft Education ou Bedrock + Code Connection já abertos e conectados ao MakeCode, com um mundo de teste plano e em modo criativo.`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo no MakeCode.`,
    `Um mundo de exemplo já salvo com o tempo limpo e de dia, para todos começarem igual.`,
    `Cartões de papel grandes com as palavras "chuva", "dia", "noite" e "bloco" escritas em letras bem grandes e com um desenho ao lado de cada uma.`,
    `Folhas de desenho e lápis de cor para o exercício de papel.`,
    `Lista impressa com 3 ou 4 ações prontas anotadas em "português de criança" (fazer chuva, virar noite, virar dia, colocar bloco) para o professor consultar rápido.`,
    `Adesivos ou carimbos de "Programador do Dia" para premiar quem testar e compartilhar.`,
  ],
  conceitosChave: [
    `Comando — a palavra mágica que VOCÊ inventa e digita no jogo para mandar ele fazer algo.`,
    `Gatilho — o que faz a ação começar; aqui o gatilho é digitar a palavra no chat do jogo.`,
    `Ação — a coisa que o jogo faz quando você dá o comando, como cair chuva ou virar noite.`,
    `Bloco de comando de chat — a pecinha do MakeCode onde escrevemos a nossa palavra mágica.`,
    `Chat — a caixinha de escrever do Minecraft, onde a gente digita a palavra para o jogo obedecer.`,
    `Testar — apertar para ver se funcionou; se não deu certo, a gente arruma e tenta de novo.`,
    `Encaixar — juntar uma pecinha na outra no MakeCode, como peça de montar, para o comando ficar pronto.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

Nesta aula a criança aprende a criar um "comando de chat". No Minecraft, o chat é a caixinha de texto que abre quando se aperta a tecla T (ou o botão de chat no tablet). Tudo que começa com uma barra "/" é um comando que o jogo entende. O MakeCode deixa a gente INVENTAR comandos novos. O bloco mágico se chama "ao digitar comando de chat" (em inglês, "on chat command"). Ele tem um campo de texto onde escrevemos a palavra (por exemplo, "chuva"). Dentro do bloco, encaixamos uma ação. Quando a criança abre o chat no jogo e digita a barra mais a palavra (por exemplo, /chuva), o jogo executa a ação. Importante: a palavra é o GATILHO e a ação é a RESPOSTA. Esse é o coração da aula.

A base técnica que você precisa dominar: no MakeCode, à esquerda há gavetas coloridas (categorias). A gaveta "Player" (Jogador) tem o bloco "on chat command". A gaveta "Gameplay" (Jogabilidade) tem ações como "set weather" (mudar o clima, escolhendo "rain" para chuva ou "clear" para limpo) e "set time" (mudar o horário, escolhendo "day" para dia ou "night" para noite). A gaveta "Blocks" (Blocos) tem "place" (colocar um bloco). Para o jogo obedecer, o Minecraft precisa estar conectado ao MakeCode pelo Code Connection. Teste isso ANTES da aula.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Minecraft + MakeCode)

AQUECIMENTO (10 min): Levante os cartões de papel "chuva", "dia", "noite", "bloco". Pergunte: "Lembram da palavra mágica da aula passada?" Faça as crianças gritarem cada palavra e imitarem a ação com o corpo (mãos caindo como chuva, abaixar para dormir na noite). Diga que hoje cada um vai INVENTAR a sua palavra mágica.

CONTEÚDO NOVO GUIADO (15 min): No projetor, abra o MakeCode. Clique na gaveta "Player" (Jogador), arraste o bloco "on chat command" para a área de trabalho. No campinho branco, apague o texto e escreva "chuva". Agora abra a gaveta "Gameplay", arraste "set weather" e encaixe DENTRO do bloco do comando; troque para "rain" (chuva). Mostre o ícone de play/conectar para enviar ao jogo. Entre no Minecraft, aperte T, digite /chuva e veja a chuva cair. As crianças costumam vibrar aqui; aproveite a empolgação.

MÃO NA MASSA (25 min): Cada criança repete no seu computador. Guie em voz alta, passo a passo, esperando todos. Depois peça para TROCAR a ação: mantenha a palavra "chuva" mas troque "set weather" por "set time night" (noite). Eles testam de novo e percebem: a palavra é a mesma, o resultado mudou. Circule pela sala ajudando a encaixar os blocos.

DESAFIO + COMPARTILHAR (10 min): Desafie cada um a inventar UMA palavra nova (o nome do bichinho, uma comida) ligada a qualquer ação. Cada criança mostra o comando dela no projetor ou para o colega do lado. Entregue o adesivo "Programador do Dia".

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a ideia de "palavra mágica de feiticeiro": "Você é um mago e essa é a sua varinha. Quando você fala a palavra certa, o mundo obedece!" Chame o bloco de "caixinha de mágica" e a ação encaixada de "o que a mágica faz". Diga: "Primeiro escolhemos a palavra, depois colocamos o presente dentro da caixinha." Evite as palavras "evento" e "função"; fale "quando eu digito" e "o que o jogo faz". Compare encaixar blocos com peças de montar: "se não encaixou direitinho, a mágica não funciona".

## Erros comuns e como ajudar

O erro mais comum é a criança escrever a palavra com espaço ou com letra maiúscula diferente do que digita no jogo; oriente a usar uma palavra curta, sem espaço. Outro erro é colocar a ação FORA da caixinha, solta na tela; mostre que ela precisa ficar DENTRO, abraçada pelo bloco. Algumas esquecem de enviar/conectar ao jogo antes de testar; lembre de apertar o play. E muitas digitam a palavra no chat SEM a barra "/"; mostre que todo comando começa com a barrinha. Se nada acontecer, primeiro confira a conexão do Code Connection, depois a ortografia da palavra.`,
  exercicios: [
    {
      titulo: `Minha Primeira Palavra Mágica`,
      tipo: `Prática na ferramenta (guiada)`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto com a turma, passo a passo, esperando todos acompanharem. Mostre no projetor e diga em voz alta cada clique. Não avance enquanto algum aluno estiver perdido; peça para o colega do lado ajudar.`,
      atividade: `Abra a gaveta "Player" (Jogador) e arraste o bloco "ao digitar comando de chat" (on chat command). No campinho, escreva a palavra "chuva". Depois abra a gaveta "Gameplay" e encaixe DENTRO o bloco "mudar o clima" (set weather) escolhendo "rain" (chuva). Conecte ao jogo, aperte T no Minecraft e digite /chuva.`,
      gabarito: `Acertou quando, ao digitar /chuva no jogo, começa a cair chuva no mundo. O bloco da ação deve estar visivelmente DENTRO do bloco do comando (abraçado por ele). Se não chover, conferir a conexão e a palavra digitada.`,
    },
    {
      titulo: `Mesma Palavra, Outra Mágica`,
      tipo: `Prática na ferramenta (autônoma)`,
      tempo: `8 minutos`,
      guiaProfessor: `Agora deixe a criança fazer mais sozinha, só observando e ajudando quem travar. O objetivo é a descoberta: a palavra continua igual, mas a ação muda. Pergunte: "A palavra mudou? E o que o jogo faz, mudou?"`,
      atividade: `No mesmo comando "chuva", troque a ação. Tire o bloco de clima e coloque no lugar o bloco "mudar a hora" (set time) escolhendo "night" (noite). Conecte, vá ao jogo e digite /chuva de novo. Veja o que acontece agora.`,
      gabarito: `Acertou quando, ao digitar /chuva, o mundo vira noite (em vez de chover). A criança deve perceber e dizer que a palavra é a mesma mas o resultado é diferente, mostrando que ela trocou a ação dentro da caixinha.`,
    },
    {
      titulo: `Caça à Caixinha de Mágica`,
      tipo: `Jogo / dinâmica em grupo`,
      tempo: `7 minutos`,
      guiaProfessor: `Brincadeira em pé, longe da tela, para fixar o vocabulário. Você fala uma palavra e a turma responde com o gesto certo. Misture rápido para virar competição divertida. Premie com palmas quem acertar a sequência.`,
      atividade: `O professor grita uma palavra-comando e as crianças fazem o gesto: "chuva" (dedinhos caindo de cima), "noite" (fechar os olhos e dormir), "dia" (abrir os braços como o sol), "bloco" (bater os punhos como quem coloca um bloco). Depois inverta: o professor faz o gesto e a turma grita a palavra.`,
      gabarito: `Acertou quem associa rapidamente cada palavra ao seu gesto e cada gesto à sua palavra. A turma demonstra que entendeu que cada comando (palavra) tem uma ação ligada a ele.`,
    },
    {
      titulo: `Desenhe o Seu Comando`,
      tipo: `Desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua folha e lápis. Explique que eles vão desenhar a palavra mágica de um lado e o que acontece do outro, ligados por uma seta. É uma forma de a criança que ainda não lê bem mostrar que entendeu o gatilho e a ação. Circule elogiando.`,
      atividade: `Dobre ou divida a folha em dois lados. No lado esquerdo, escreva (ou peça ajuda) e desenhe a sua palavra mágica. Desenhe uma seta para a direita. No lado direito, desenhe o que o jogo faz quando você digita essa palavra (chuva caindo, lua da noite, sol do dia ou um bloco aparecendo).`,
      gabarito: `Acertou quando o desenho mostra claramente uma palavra de um lado, uma seta no meio e a ação correspondente do outro lado. O par palavra-seta-ação correto indica que a criança entendeu que a palavra dispara a ação.`,
    },
    {
      titulo: `Inventor de Comandos`,
      tipo: `Desafio + compartilhar`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o desafio final, mais aberto e criativo. Deixe a criança escolher qualquer palavra curta (o nome dela, do bichinho, de uma fruta) e qualquer ação aprendida. Ajude só a encaixar. No fim, cada um mostra o comando no projetor ou para o colega e ganha o adesivo "Programador do Dia".`,
      atividade: `Crie um comando totalmente seu: escolha uma palavra curta que você ama e ligue a uma ação divertida (chuva, dia, noite ou colocar um bloco). Teste no jogo até funcionar. Depois mostre para a turma: diga a sua palavra e deixe todos verem o que o jogo faz.`,
      gabarito: `Acertou quando a criança digita a palavra inventada no chat e a ação escolhida acontece no Minecraft, e ela consegue mostrar e explicar (mesmo com poucas palavras) qual é a palavra e o que ela faz. Comando funcionando e apresentado é a meta atingida.`,
    },
  ],
};
