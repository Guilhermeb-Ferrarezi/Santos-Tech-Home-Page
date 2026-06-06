import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Controlando com a voz",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Treinar uma IA de áudio na Teachable Machine para reconhecer uma palavra ou batida de palma e usá-la no Scratch para o personagem pular, andar ou mudar de cor.`,
  descricao: `Na aula passada a turma controlou o personagem com gestos: a IA via a mão e o gato reagia. Hoje damos um passo a mais e trocamos o olho pelo ouvido. Em vez de mostrar um gesto para a câmera, a criança vai falar uma palavra ou bater uma palma, e a IA vai escutar e mandar o comando para o Scratch. É a mesma ideia mágica de antes (ensinar a máquina com exemplos), só que agora com som em vez de imagem.

Para isso usamos um tipo diferente de projeto na Teachable Machine, o projeto de Áudio. Ele funciona quase igual ao de imagem, mas com uma diferença importante: toda IA de som precisa primeiro aprender o que é o silêncio do ambiente, o famoso "ruído de fundo". Só depois ensinamos as palavras ou sons que vão virar comandos. O professor vai gravar pequenos trechos de som para cada classe, exatamente como gravou fotos para os gestos.

Depois de treinar, conectamos o modelo ao Scratch usando a extensão da Teachable Machine, do mesmo jeito da aula 2 e 3. A diferença é que agora o bloco vai responder ao som reconhecido. Quando a IA escuta "pula", o gato salta; quando escuta uma palma, ele anda ou muda de cor. As crianças adoram ver o personagem obedecer à própria voz, e isso reforça a ideia central do mês: a IA recebe uma entrada (som), pensa um pouquinho e produz uma ação.

No fim, fazemos uma conversa curta e importante: comparar controlar por gesto e controlar por voz. Cada criança vai sentir que um jeito é mais fácil ou mais divertido que o outro, e vai escolher qual quer usar no mini-projeto que começa a nascer na próxima semana. Não existe resposta certa; existe a escolha de cada pequeno criador.`,
  materiais: [
    `Computadores (um por criança ou em dupla) com a Teachable Machine aberta no navegador e o Scratch aberto em outra aba`,
    `Microfone funcionando em cada máquina (o do próprio notebook já serve) com permissão de microfone liberada no navegador`,
    `Projetor ou TV para o professor mostrar cada passo na tela grande`,
    `Um projeto Scratch de exemplo já pronto, com o gato que pula e muda de cor, para usar como modelo`,
    `Um modelo de áudio já treinado pelo professor (palavra "pula" + palma + ruído de fundo) para demonstrar antes das crianças treinarem`,
    `Cartões com as palavras-comando escolhidas (ex.: "pula", "anda", "cor") para a criança lembrar o que falar`,
    `Fones de ouvido (opcional) para reduzir o som de uma máquina atrapalhar a gravação da outra`,
  ],
  conceitosChave: [
    `IA de som — é uma inteligência que aprende a reconhecer barulhos e palavras, igual a gente reconhece a voz da mamãe.`,
    `Classe de áudio — uma "caixinha" onde a IA guarda exemplos de um mesmo som, como a caixinha da palavra "pula".`,
    `Ruído de fundo — é o som do silêncio da sala, que a IA precisa conhecer para saber quando ninguém está dando comando.`,
    `Amostra de som — um pedacinho de áudio que a gente grava para ensinar a IA, igual a uma foto, mas de barulho.`,
    `Comando de voz — uma palavra ou som que vira uma ordem para o personagem, como falar "pula" e ele pular.`,
    `Reconhecer — quando a IA escuta e descobre qual som é, dizendo "isso aqui é a palma!".`,
    `Entrada e ação — a entrada é o som que a IA escuta; a ação é o que o personagem faz por causa dele.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje a turma troca o controle por gesto (aula 3) pelo controle por som. A grande novidade é o projeto de Áudio da Teachable Machine, que é parecido com o de imagem, mas tem três detalhes que você precisa dominar antes da aula. Primeiro: todo modelo de áudio começa obrigatoriamente com a classe "Background Noise" (ruído de fundo). A própria Teachable Machine já cria essa classe e pede para você gravar 20 segundos de silêncio da sala. Sem isso, o modelo não treina. Segundo: cada som vira uma classe, e cada classe precisa de vários exemplos curtos (a ferramenta grava em trechos de 2 segundos). Terceiro: a conexão com o Scratch é a mesma extensão "Teachable Machine" que vocês já usaram, então não há nada novo no lado do Scratch além de qual bloco responde ao som. Chegue 10 minutos antes, libere a permissão de microfone no navegador e teste seu modelo de demonstração com o projetor ligado.

## Passo a passo da aula

Aquecimento e revisão (10 min): Pergunte "como o gato obedecia na aula passada?" e deixe duas crianças mostrarem o gesto. Diga: "hoje ele vai obedecer à nossa voz!". Mostre no projetor seu modelo pronto: fale "pula" e o gato pula; bata uma palma e ele muda de cor. Olhinhos brilhando garantido.

Conteúdo novo guiado (15 min): No projetor, abra teachablemachine.withgoogle.com, clique em "Comece já" e depois em "Projeto de Áudio" (Audio Project). Mostre que já aparece a classe "Background Noise". Clique em "Mic" (microfone) nessa classe e em "Gravar 20 segundos" para gravar o silêncio da sala. Depois clique em "Extrair amostra" (Extract Sample). Crie uma segunda classe no botão "Adicionar uma classe", renomeie para "pula", clique em "Mic", segure "Gravar 2 segundos" e fale "pula" várias vezes, extraindo as amostras. Faça o mesmo numa terceira classe chamada "palma", batendo palmas. Clique no botão grande "Treinar modelo" (Train Model) e espere a barrinha encher.

Mão na massa (25 min): Cada criança (ou dupla) repete os passos no próprio computador: gravar o ruído de fundo, gravar a palavra escolhida e gravar a palma, e treinar. Quando treinarem, clique em "Exportar o modelo" (Export Model), aba "Tensorflow.js", e copie o link em "Carregar (Upload my model)". Na aba do Scratch, clique no ícone de blocos no canto inferior esquerdo, adicione a extensão "Teachable Machine", cole o link e use o bloco "quando o áudio for [pula]" ligado a "pular" (mude y por 50 e volte). Ligue outro bloco "quando o áudio for [palma]" a "mude a cor".

Desafio e compartilhar (10 min): Desafie cada um a fazer o gato andar com a voz e mudar de cor com a palma ao mesmo tempo. Junte a turma e pergunte: "o que foi mais fácil: controlar com a mão ou com a voz?". Cada criança escolhe seu preferido para o projeto.

## Como explicar para crianças

Use a analogia do cachorrinho: "quando você ensina um cachorro a sentar, fala 'senta' muitas vezes até ele aprender. A IA é igual: a gente repete a palavra muitas vezes e ela aprende a escutar". Explique o ruído de fundo assim: "a IA precisa conhecer o silêncio da sala para saber quando ninguém está mandando nada, senão ela fica confusa". Reforce sempre: entrada é o som, ação é o que o gato faz.

## Erros comuns e como ajudar

O erro número um é esquecer o ruído de fundo ou gravar com a sala barulhenta; peça silêncio total nesses 20 segundos. Outro erro é a criança gravar pouquíssimas amostras: incentive gravar a palavra umas 8 vezes. Microfone sem permissão é comum; mostre o cadeado na barra de endereço para liberar. Se o modelo confunde "pula" com a palma, é porque as amostras ficaram parecidas ou poucas: grave mais exemplos bem diferentes. Por fim, se nada acontece no Scratch, confira se o link foi colado certo e se o nome da classe no bloco é igual ao da Teachable Machine.`,
  exercicios: [
    {
      titulo: `Aquecimento: gesto ou voz?`,
      tipo: `Conversa em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça a turma sentar em roda. Mostre rapidamente seu modelo de demonstração funcionando com a voz para todos verem o objetivo do dia antes de começar.`,
      atividade: `Cada criança diz se acha que vai ser mais legal controlar o gato com a mão (gesto) ou com a voz, e por quê, em uma frase.`,
      gabarito: `Não há resposta certa ou errada. O objetivo é ativar a curiosidade e fazer a criança perceber que som também pode virar comando. Respostas esperadas: "com a voz, porque é mais rápido" ou "com a mão, porque é mais fácil falar baixinho". Valorize toda participação.`,
    },
    {
      titulo: `Gravando o silêncio (ruído de fundo)`,
      tipo: `Prática guiada`,
      tempo: `10 minutos`,
      guiaProfessor: `Abra um Projeto de Áudio na Teachable Machine com a turma. Conte que toda IA de som começa conhecendo o silêncio. Peça silêncio total durante a gravação.`,
      atividade: `A criança clica em "Mic" na classe "Background Noise", grava 20 segundos de silêncio da sala e clica em "Extrair amostra" (Extract Sample).`,
      gabarito: `A classe "Background Noise" deve ficar com uma faixa de amostras de áudio gravada (cerca de 20 segundos). Confirme que cada tela mostra as amostras extraídas. Se a sala estava barulhenta, oriente a regravar em silêncio.`,
    },
    {
      titulo: `Ensinando uma palavra-comando`,
      tipo: `Mão na massa`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre como criar e renomear uma classe nova. Cada criança escolhe uma palavra curta e fácil, como "pula". Incentive gravar a palavra pelo menos 8 vezes para a IA aprender bem.`,
      atividade: `Criar uma classe chamada "pula", clicar em "Mic", segurar "Gravar 2 segundos" falando a palavra várias vezes, extrair as amostras e clicar em "Treinar modelo" (Train Model).`,
      gabarito: `O modelo deve ter três classes: "Background Noise", "pula" e (mais tarde) "palma", todas com amostras. Ao terminar de treinar, testar falando "pula" deve acender a barra da classe "pula". Se confundir, faltam amostras: grave mais.`,
    },
    {
      titulo: `Conectando a voz ao gato no Scratch`,
      tipo: `Integração`,
      tempo: `18 minutos`,
      guiaProfessor: `Ajude a exportar o modelo (Export Model, aba Tensorflow.js, copiar o link) e a colar a extensão "Teachable Machine" no Scratch. Cada criança liga a palavra a uma ação do gato.`,
      atividade: `No Scratch, usar o bloco "quando o áudio for [pula]" ligado a um pulo (mudar y por 50 e voltar) e o bloco "quando o áudio for [palma]" ligado a "mude a cor". Testar falando e batendo palma.`,
      gabarito: `Ao falar "pula", o gato deve saltar; ao bater palma, deve mudar de cor. Se nada acontece, conferir: o link foi colado certo? O nome da classe no bloco é igual ao da Teachable Machine? O microfone tem permissão? Esses três pontos resolvem quase tudo.`,
    },
    {
      titulo: `Desafio final: voz e palma juntas + minha escolha`,
      tipo: `Desafio e reflexão`,
      tempo: `15 minutos`,
      guiaProfessor: `Proponha somar dois comandos diferentes ao mesmo personagem. Depois feche com a comparação entre gesto e voz, registrando a escolha de cada criança para o mini-projeto da Semana 3.`,
      atividade: `Fazer o gato andar com uma palavra falada e mudar de cor com a palma, funcionando ao mesmo tempo. Em seguida, cada criança diz qual controle prefere usar no projeto: gesto ou voz.`,
      gabarito: `O personagem deve responder a dois sons diferentes sem se confundir (se confunde, grave mais amostras distintas de cada classe). Na reflexão, qualquer escolha é válida desde que a criança justifique: por exemplo, "voz, porque é mais divertido falar" ou "gesto, porque o som da sala atrapalha". Anote a escolha de cada uma.`,
    },
  ],
};
