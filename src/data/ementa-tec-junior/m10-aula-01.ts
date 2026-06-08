import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Conhecendo o Roblox Studio",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança abre o Roblox Studio pela primeira vez, aprende a girar, aproximar e afastar a câmera para olhar o mundo de todos os lados e começa um mundo novo com um terreno verde e plano.`,
  descricao: `Nesta aula as crianças dão o primeiro grande passo da trilha de criação de games: elas deixam de ser apenas jogadoras e começam a virar criadoras de mundos. O Roblox Studio é o programa onde a gente constrói os jogos do Roblox, e o nosso objetivo de hoje é só conhecer essa "sala de criação" sem medo, descobrindo onde ficam as coisas e como olhar o mundo por dentro.

O assunto central da aula é a câmera. No Roblox Studio existe um mundo em três dimensões (3D), igual ao mundo de verdade, com frente, lados, cima e baixo. Para construir bem, a criança precisa aprender a mexer na câmera: girar em volta, chegar perto (zoom) e se afastar. Quem domina a câmera enxerga o que está fazendo; quem não domina fica perdido e constrói no lugar errado. Por isso esse é o primeiro superpoder do criador.

Também vamos começar um mundo novo a partir de um modelo bem simples, com um chão verde e plano, como um campinho. Esse terreno vazio é a "folha em branco" onde, nas próximas aulas, a turma vai montar o cenário, colocar peças e criar a primeira aventura. Hoje ninguém precisa construir nada complicado: a meta é abrir, olhar, girar a câmera e sentir que aquele mundo é da criança.

Como os alunos têm entre 5 e 9 anos e ainda leem e escrevem pouco, a aula é toda demonstrada e mão na massa. O professor mostra na tela grande (projetor), as crianças repetem no próprio computador, e a conversa é cheia de analogias de brincadeira. O clima é de exploração e descoberta, sem cobrança de acerto perfeito.`,
  materiais: [
    `Computadores (um por aluno, ou em duplas) com o Roblox Studio já instalado e aberto, com cada criança logada antes da aula começar`,
    `Projetor ou TV grande ligado no computador do professor, para todos verem onde clicar`,
    `Um mundo de exemplo já montado pelo professor (um terreno verde com uma casinha ou árvore), só para mostrar "onde queremos chegar"`,
    `Mouse com rodinha (scroll) para cada computador — é o que facilita o zoom para as crianças`,
    `Cartões impressos grandes com setas (girar, perto, longe) para a brincadeira de comandos`,
    `Folhas de papel em branco e lápis de cor para o desenho do "meu mundo"`,
    `Lista de presença e adesivos ou carimbo de "Explorador de Mundos" para celebrar o fim da aula`,
  ],
  conceitosChave: [
    `Roblox Studio — é o programa onde a gente constrói os jogos do Roblox, a nossa sala mágica de criar mundos.`,
    `Mundo 3D — um mundo com profundidade, igual ao de verdade, que tem frente, lados, cima e baixo, e não é chapado como um desenho no papel.`,
    `Câmera — é o nosso olho voador dentro do jogo; mexer na câmera é como voar em volta do mundo para olhar de todos os ângulos.`,
    `Girar — rodar a câmera em volta do mundo para ver a frente, os lados e as costas das coisas.`,
    `Zoom (perto e longe) — chegar bem pertinho de uma coisa para ver os detalhes, ou afastar para ver o mundo inteiro de longe.`,
    `Terreno — o chão do nosso mundo; hoje ele é verde e plano, como um campinho onde a aventura vai nascer.`,
    `Viewport — a janela grande no meio da tela onde a gente vê o mundo 3D; é a "tela de TV" do criador.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O Roblox Studio é o programa gratuito da Roblox para criar jogos. Você não precisa ser especialista: para esta aula basta saber abrir, navegar com a câmera e criar um mundo novo. Ao abrir o Studio aparece a tela inicial. No menu da esquerda, clique em "New" (Novo) e escolha o modelo "Baseplate" (Placa Base) ou "Flat Terrain" (Terreno Plano). O Baseplate já entrega um chão cinza quadriculado; se quiser o verde, use a aba "Terrain" mais adiante, mas para hoje o Baseplate plano basta como "terreno plano". A área grande no centro chama-se Viewport: é onde o mundo 3D aparece.

A câmera no Studio se controla assim: segure o botão direito do mouse e mova para GIRAR a câmera em volta; use a rodinha do mouse (scroll) para ZOOM (rolar para frente aproxima, para trás afasta); e as teclas W, A, S, D movem a câmera para frente, trás e lados (como andar voando). Treine isso sozinho uma vez antes da aula, porque é o que você vai demonstrar o tempo todo.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Receba a turma e pergunte quem já jogou Roblox. Diga a frase mágica: "Hoje a gente vai entrar por TRÁS do jogo, no lugar onde os jogos nascem". Mostre no projetor o seu mundo de exemplo (terreno verde com casinha) e diga: "É AQUI que vamos chegar nas próximas aulas." Não construa ainda, só encante.

CONTEÚDO NOVO GUIADO (15 min): Com o projetor ligado, abra o Roblox Studio na sua máquina. Aponte e nomeie devagar: "Esta janela grande do meio é a Viewport, a nossa TV." Clique em "New" e escolha "Baseplate" para criar o terreno plano. Agora demonstre a câmera três vezes, falando alto cada gesto: segurar o botão DIREITO e mexer para GIRAR; rolar a RODINHA para frente para CHEGAR PERTO; rolar para trás para AFASTAR. Faça cada movimento de forma exagerada e lenta.

MÃO NA MASSA (25 min): Agora é a vez deles. Peça que cada criança clique em "New" e depois em "Baseplate" para ter o próprio terreno (passe de mesa em mesa ajudando o clique). Depois conduza por comando de voz, todos juntos: "Segura o botão direito e GIRA... agora chega PERTO com a rodinha... agora vai LONGE." Repita várias vezes, como uma ginástica. Deixe um tempo livre para explorarem o próprio mundo girando e dando zoom.

DESAFIO E COMPARTILHAR (10 min): Lance o desafio "Caça ao Ângulo": cada criança deve girar a câmera até ver o terreno BEM DE CIMA, como um passarinho. Quem conseguir, levanta a mão. Depois, em roda, pergunte: "O que foi mais legal? Girar ou dar zoom?" Encerre entregando o adesivo de "Explorador de Mundos".

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Evite palavras técnicas sozinhas; sempre junte com uma imagem. A CÂMERA é "o seu olho voador" ou "um drone com câmera". GIRAR é "voar em volta do bolo para ver todos os lados". ZOOM é "uma lupa: chega perto para ver formiguinha, afasta para ver o campo inteiro". O TERRENO é "o seu campinho vazio onde a aventura vai nascer". A VIEWPORT é "a sua TV mágica". Fale com o corpo: gire o braço no ar quando disser "girar", aproxime a mão do rosto quando disser "perto". Repita os comandos em coro, porque a repetição alegre ensina mais que a explicação longa.

## Erros comuns e como ajudar

O erro mais comum é a criança segurar o botão ERRADO do mouse: o esquerdo seleciona coisas, o certo para girar é o DIREITO. Cole um adesivo no botão direito de cada mouse para ajudar. Outro erro é girar rápido demais e "perder" o mundo, ficando com a tela cinza ou virada de cabeça para baixo; ensine o gesto de resgate: rolar a rodinha para trás (afastar) até o terreno reaparecer. Algumas crianças confundem zoom com girar; separe bem: rodinha é perto/longe, botão direito é girar. Por fim, há quem clique sem querer e crie peças soltas; diga que está tudo bem, é só apertar Ctrl+Z (desfazer), o "botão de voltar no tempo".`,
  exercicios: [
    {
      titulo: `Abrindo a Minha Sala de Criar`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Introduza dizendo que cada um vai ter o seu próprio mundo, igual a ganhar uma folha em branco só sua. Faça primeiro no projetor, bem devagar, e só depois solte a turma. Passe de mesa em mesa ajudando o clique em "New" e em "Baseplate", porque a parte mais difícil para esta idade é mirar o clique no botão certo.`,
      atividade: `Cada criança abre o Roblox Studio, clica em "New" (Novo) e escolhe "Baseplate" (Placa Base) para criar um terreno plano novo. Quando o chão aparecer na Viewport, a criança levanta a mão e diz "Meu mundo nasceu!".`,
      gabarito: `O exercício está certo quando, na tela de cada criança, aparece um chão plano e quadriculado na janela do meio (Viewport), sem mensagens de erro. Sinal de acerto: a criança consegue mostrar o terreno e dizer que aquele mundo é dela.`,
    },
    {
      titulo: `Simão Manda na Câmera`,
      tipo: `jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza como a brincadeira do "Simão manda", usando os cartões grandes com setas. Você fala o comando, mostra o cartão e todos executam ao mesmo tempo no computador. Comece devagar e vá acelerando. O objetivo é fixar os três movimentos da câmera brincando, não ganhar; elogie cada tentativa.`,
      atividade: `O professor grita comandos e a turma executa na câmera, todos juntos: "Simão manda GIRAR!" (segurar botão direito e mover), "Simão manda CHEGAR PERTO!" (rodinha para frente), "Simão manda IR LONGE!" (rodinha para trás). Repita a sequência embaralhando a ordem.`,
      gabarito: `Acertou quem move a câmera de acordo com o comando: gira ao ouvir "girar", aproxima ao ouvir "perto" e afasta ao ouvir "longe". O sinal de domínio é a criança fazer os três movimentos sem precisar olhar para o colega para copiar.`,
    },
    {
      titulo: `A Roda dos Exploradores`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda, longe das telas, para descansar os olhos e organizar o que aprenderam. Faça perguntas abertas e simples, dando vez para cada um falar uma palavra ou frase curta. Aceite respostas com gestos, já que muitos ainda falam pouco. Vá amarrando as falas com os conceitos: câmera, girar, zoom, terreno.`,
      atividade: `Em roda, cada criança responde, na sua vez: "O que é a câmera no nosso jogo?" e "O que você mais gostou de fazer: girar ou dar zoom?". Quem quiser pode mostrar com o braço como gira a câmera.`,
      gabarito: `Resposta esperada: a câmera é o nosso "olho voador" que serve para olhar o mundo de todos os lados; e a criança nomeia, com palavra ou gesto, se prefere girar ou aproximar (zoom). Acertou quem associa a câmera a olhar/voar e demonstra entender que dá para ver o mundo por vários ângulos.`,
    },
    {
      titulo: `Desenhando o Meu Mundo`,
      tipo: `desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua papel e lápis de cor. Explique que, antes de construir de verdade nas próximas aulas, todo criador imagina e desenha o mundo no papel. Não cobre capricho nem realismo; valorize a imaginação. Enquanto desenham, passe perguntando o que cada um está sonhando para o mundo dele.`,
      atividade: `Cada criança desenha numa folha como ela quer que o terreno verde e plano de hoje fique no futuro: pode ter árvores, casa, escorregador, o que imaginar. No cantinho, desenha também um "olho voador" (a câmera) olhando o mundo de cima.`,
      gabarito: `Acertou quando o desenho mostra um chão/terreno como base do mundo e pelo menos uma ideia do que a criança quer colocar nele, além do símbolo do olho voador representando a câmera olhando de cima. Não existe desenho "errado"; o objetivo é registrar a ideia do mundo e mostrar que entendeu que a câmera observa de cima.`,
    },
    {
      titulo: `Caça ao Ângulo do Passarinho`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Este é o desafio final, o mais difícil, que junta girar e zoom ao mesmo tempo. Demonstre uma vez no projetor chegando à visão de cima e diga que agora é a vez deles, sozinhos. Circule ajudando quem "perdeu" o mundo, lembrando o gesto de resgate: afastar com a rodinha até o terreno reaparecer.`,
      atividade: `Desafio: usando girar (botão direito) e zoom (rodinha), cada criança precisa deixar a câmera olhando o terreno BEM DE CIMA, como um passarinho voando alto, vendo o chão inteirinho por cima. Quem conseguir, levanta as duas mãos e grita "Visão de passarinho!".`,
      gabarito: `Acertou quando, na Viewport da criança, o terreno aparece visto de cima (de cima para baixo), mostrando o chão plano como um mapa, sem ficar de lado nem de cabeça para baixo. Sinal de domínio: a criança combinou girar e dar zoom sozinha para alcançar essa visão aérea.`,
    },
  ],
};
