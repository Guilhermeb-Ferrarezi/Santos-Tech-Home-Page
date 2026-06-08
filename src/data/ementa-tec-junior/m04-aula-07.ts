import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando Meu Jogo 2D",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança junta tudo o que aprendeu no mês e monta, com apoio do professor, o seu próprio jogo 2D com herói, inimigo, cenário e regras (colisão, fases, vidas, dificuldade e sorteio).`,
  descricao: `Esta é a aula da grande junção. Durante o mês inteiro as crianças aprenderam pedacinhos de regras de jogo: o "bateu, encostou" da colisão, o pular de fase, as três vidinhas, o fim de jogo, o ficar cada vez mais rápido e a magia do sorteio. Hoje todos esses pedacinhos viram um único brinquedo: o jogo 2D de cada criança. É como montar um quebra-cabeça em que cada peça já foi treinada antes.

Por que isso importa? Porque criar um jogo de verdade não é só apertar blocos soltos, é escolher o que combina e arrumar tudo no mesmo cenário. Nesta aula a criança vive a experiência do autor: ela decide quem é o herói, quem é o inimigo, onde a aventura acontece e quais são as regras. Isso desenvolve autonomia, organização e a sensação enorme de orgulho de ter feito algo seu.

O que será feito na prática: cada criança vai abrir um projeto, escolher um ator herói e um ator inimigo na biblioteca do Scratch, pintar ou escolher um cenário e encaixar os blocos de regra que já conhece. O professor caminha de mesa em mesa ajudando a encaixar as peças, sem fazer pela criança. No final, todos têm um jogo simples mas completo, pronto para ser melhorado na próxima aula.

A aula 8 será o "Joga e Mostra", então hoje o foco é MONTAR e deixar o jogo funcionando, mesmo que feio ou simples. Não precisa ficar perfeito: precisa estar de pé e jogável.`,
  materiais: [
    `Computadores com o Scratch já aberto (versão online em scratch.mit.edu ou o app offline), um por criança.`,
    `Projetor ou TV ligada no computador do professor para demonstrar os passos para a turma toda.`,
    `Um projeto de exemplo simples já montado pelo professor (herói, inimigo, cenário e regras encaixadas) para mostrar o resultado final.`,
    `Folhas de papel e lápis de cor para a criança desenhar antes quem é o herói, o inimigo e o cenário.`,
    `Lista impressa de "blocos de regra" com figurinhas (colisão, vidas, fim de jogo, mais rápido, sorteio) para a criança ir marcando o que já encaixou.`,
    `Fones de ouvido (opcional) para os sons dos jogos não atrapalharem a turma.`,
    `Adesivos ou carimbos para premiar quem deixar o jogo funcionando.`,
  ],
  conceitosChave: [
    `Jogo 2D — um jogo plano, visto de frente ou de cima, onde os personagens andam para os lados, para cima e para baixo, como num desenho de papel.`,
    `Herói — o personagem que a criança controla e que ela quer que vença, o mocinho da história.`,
    `Inimigo — o personagem que atrapalha o herói; se encostar, alguma coisa acontece (perde vida, perde ponto).`,
    `Cenário — o fundo do jogo, o lugar onde a aventura acontece (floresta, espaço, castelo).`,
    `Regra — uma combinação que o jogo sempre obedece, do tipo "se acontecer isto, então faça aquilo".`,
    `Colisão — o momento em que dois personagens se encostam, igual a dois carrinhos batendo.`,
    `Montar o jogo — juntar herói, inimigo, cenário e regras na mesma tela para virar um brinquedo que funciona.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Hoje você não ensina nenhum bloco novo: você ajuda a criança a JUNTAR o que ela já viu. Pense nesta aula como montar um sanduíche com ingredientes que a turma já provou separados. Os ingredientes são: colisão (o "tocando em"), fases (trocar de cenário), vidas (uma variável que diminui), fim de jogo (parar tudo quando a vida acaba), dificuldade (deixar mais rápido) e sorteio (o bloco "número aleatório entre").

Na tela do Scratch, lembre destas áreas: à esquerda fica a PALETA DE BLOCOS (colorida, dividida em Movimento, Aparência, Som, Eventos, Controle, Sensores, Variáveis); no meio fica a ÁREA DE CÓDIGO (onde se arrasta e encaixa os blocos); à direita em cima fica o PALCO (onde o jogo aparece) e embaixo a lista de ATORES (os sprites) e o botão de CENÁRIOS. Para adicionar um personagem, use o botão redondo de gatinho azul "Escolher um Ator" no canto inferior direito. Para o fundo, use o botão "Escolher um Cenário" mais à direita.

A regra de ouro: o jogo precisa só FUNCIONAR. Simples e jogável vale mais que bonito e quebrado.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

AQUECIMENTO (10 min): Mostre no projetor o jogo de exemplo pronto. Jogue na frente das crianças, deixe o inimigo encostar no herói e perca uma vida na frente delas. Pergunte: "Quem é o herói? Quem atrapalha? Onde tudo acontece?". Relembre cada regra do mês apontando na tela.

CONTEÚDO NOVO GUIADO (15 min): Abra um projeto em branco no projetor. Passo 1: clique em "Escolher um Ator" e pegue um herói (por exemplo, o gato ou um cachorro). Passo 2: clique de novo em "Escolher um Ator" e pegue um inimigo. Passo 3: clique em "Escolher um Cenário" e escolha um fundo. Passo 4: clique no herói e monte a regra de colisão: na paleta CONTROLE arraste "sempre"; dentro dele, da paleta CONTROLE, "se ... então"; no buraco da condição, da paleta SENSORES, "tocando em [inimigo]?"; dentro do "se", da paleta VARIÁVEIS, "mude [vidas] para -1" (ou some -1) e, da paleta MOVIMENTO, "vá para x:0 y:0". No topo, ponha o chapéu "quando [bandeira verde] clicada", da paleta EVENTOS. Faça devagar, narrando cada clique.

MÃO NA MASSA (25 min): As crianças repetem nos seus computadores. Circule de mesa em mesa. Garanta primeiro que cada uma tem herói, inimigo e cenário. Só depois ajude a encaixar UMA regra (a colisão é a mais importante). Quem terminar, encaixa a próxima regra (vidas que aparecem na tela, ou trocar de cenário). Não monte por elas: aponte o bloco e deixe a criança arrastar.

DESAFIO + COMPARTILHAR (10 min): Lance o desafio: "Deixe seu jogo começar do começo quando apertar a bandeira verde". Depois, peça para duas ou três crianças mostrarem no projetor o jogo de pé. Aplauda todo mundo que tem um jogo que abre e mexe.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a ideia de "montar um brinquedo". Diga: "Hoje a gente vai juntar todas as pecinhas mágicas que aprendemos e fazer UM jogo só, seu". Chame o herói de "seu personagem que você torce para ganhar" e o inimigo de "o capeta levado que atrapalha". A colisão é "quando eles se encostam, igual carrinho batendo". As vidas são "corações que você tem". O cenário é "o lugar do passeio". Use as mãos: bata uma na outra para mostrar colisão. Fale pouco e mostre muito: a criança desta idade aprende vendo o seu dedo apontando a tela.

## Erros comuns e como ajudar

O mais comum é a criança encaixar o "se tocando" no ator errado: ele precisa estar no HERÓI, não no inimigo. Outro erro: esquecer o chapéu "quando bandeira verde clicada", e aí nada acontece ao clicar na bandeira; sempre confira o chapéu. Muitos esquecem o "sempre" por fora do "se", então a regra só funciona uma vez; mostre que o "sempre" é o abraço que fica testando sem parar. Algumas crianças vão querer 10 inimigos e travar; combine "primeiro um inimigo funcionando, depois a gente põe mais". Se a criança ficar perdida com tantos blocos, peça para ela montar só a colisão e parar por aí: um jogo simples que funciona é vitória.`,
  exercicios: [
    {
      titulo: `Desenhando o Meu Jogo`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Antes de tocar no computador, entregue uma folha dividida em três quadros. Explique que todo criador de jogo primeiro imagina no papel. Mostre o seu próprio desenho simples como exemplo e fale em voz alta as escolhas que você fez.`,
      atividade: `Desenhe nos três quadros: no primeiro, o seu HERÓI; no segundo, o seu INIMIGO; no terceiro, o CENÁRIO (o lugar do jogo). Escreva ou diga o nome de cada um para o professor.`,
      gabarito: `A criança acertou quando os três quadros estão preenchidos com um herói, um inimigo e um cenário diferentes e ela consegue dizer quem é quem. Não importa a qualidade do desenho, importa ter os três elementos definidos antes de ir ao computador.`,
    },
    {
      titulo: `Escolhendo os Atores no Scratch`,
      tipo: `pratica na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre no projetor o botão "Escolher um Ator" (gatinho azul, canto inferior direito) e o botão "Escolher um Cenário" (à direita). Faça uma vez bem devagar e depois deixe a turma repetir. Circule garantindo que cada criança tem exatamente um herói, um inimigo e um cenário.`,
      atividade: `No seu computador, clique em "Escolher um Ator" e escolha o seu herói. Clique de novo e escolha o seu inimigo. Depois clique em "Escolher um Cenário" e escolha o fundo do seu jogo. Apague o gato extra se não for usar.`,
      gabarito: `Está correto quando, na lista de atores, aparecem dois personagens (herói e inimigo) e o palco mostra um cenário escolhido pela criança. Se ainda houver o gato padrão sobrando e sem uso, ajude a removê-lo, mas isso não invalida o exercício.`,
    },
    {
      titulo: `A Regra do Bateu, Encostou`,
      tipo: `pratica na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta é a parte mais importante. Monte no projetor a regra de colisão passo a passo: chapéu "quando bandeira verde clicada" (Eventos), depois "sempre" (Controle), dentro "se ... então" (Controle), na condição "tocando em [inimigo]?" (Sensores) e dentro a ação. Aponte que tudo isso vai no HERÓI. Deixe a criança arrastar cada bloco; só aponte onde encaixa.`,
      atividade: `Clique no seu herói. Monte esta regra: quando a bandeira verde for clicada, sempre, se o herói tocar no inimigo, então o herói volta para o começo (vá para x:0 y:0) ou fala "ai!". Teste clicando na bandeira verde e empurrando o herói até o inimigo.`,
      gabarito: `Acertou quando, ao clicar na bandeira verde e encostar o herói no inimigo, alguma coisa acontece (o herói volta ao começo ou fala). Confira se o "se tocando" está no herói, se há o chapéu da bandeira verde e se o "sempre" abraça o "se". Se reagir uma vez só, falta o "sempre".`,
    },
    {
      titulo: `Quem É Quem? Roda das Regras`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em roda. Faça perguntas e deixe cada criança responder apontando para a própria tela. Conecte cada resposta a uma regra do mês para reforçar que o jogo dela usa coisas que ela mesma aprendeu.`,
      atividade: `Na roda, cada criança mostra o seu jogo e responde: "Quem é o seu herói?", "Quem é o seu inimigo?", "O que acontece quando eles se encostam?", "Onde o seu jogo acontece?".`,
      gabarito: `A criança acertou quando responde as quatro perguntas apontando os elementos certos no próprio jogo e identifica a colisão como a regra do "bateu, encostou". Saber explicar o próprio jogo mostra que ela entendeu a junção das peças, não só copiou.`,
    },
    {
      titulo: `Desafio: Mais uma Regra no Jogo`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Só ofereça para quem já tem a colisão funcionando. Mostre rapidamente no projetor uma segunda regra: criar a variável "vidas" (em Variáveis, "Criar uma Variável") que começa em 3 e diminui 1 quando o inimigo encosta; ou trocar de cenário quando apertar uma seta. Deixe a criança escolher qual regra extra quer encaixar.`,
      atividade: `Escolha UMA regra nova para o seu jogo: (A) ter 3 vidas que aparecem na tela e perdem 1 quando o inimigo encosta; ou (B) trocar de cenário (mudar de fase) quando você apertar uma tecla. Encaixe e teste clicando na bandeira verde.`,
      gabarito: `Acertou em (A) quando a variável "vidas" aparece no palco mostrando 3 e cai para 2, 1, 0 a cada colisão; acertou em (B) quando, ao apertar a tecla combinada, o fundo muda para outro cenário. Em qualquer dos casos, o jogo deve continuar funcionando ao clicar na bandeira verde.`,
    },
  ],
};
