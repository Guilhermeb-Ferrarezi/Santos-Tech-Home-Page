import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Fim de Jogo!",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a criar a tela de "Fim" que aparece quando as vidas chegam a zero e faz o jogo parar, fechando o ciclo de ganhar e perder.`,
  descricao: `Na aula passada nós colocamos vidinhas no jogo: cada vez que o personagem encostava no inimigo, perdia uma vida. Mas tinha um problema engraçado — quando as vidas chegavam a zero, nada acontecia! O jogo continuava como se nada tivesse mudado. Hoje a gente resolve isso. Vamos ensinar o jogo a perceber o momento em que as vidas acabam e, nessa hora, mostrar uma tela bem grande escrito "Fim de Jogo!" e fazer tudo parar.

Esse é um momento muito importante na criação de games, porque é ele que fecha o ciclo do jogo. Um jogo de verdade tem começo, meio e fim. Sem o fim, o jogador nunca sabe se ganhou ou se perdeu, e o jogo fica meio sem graça. Quando a tela de "Fim" aparece e os personagens param de se mexer, a criança sente que construiu algo completo, com regra de verdade: "se eu perder todas as vidas, acabou".

Para isso a gente vai usar três ideias que as crianças já conhecem um pouquinho e vão juntar agora: o bloco "se ... então" para checar se as vidas chegaram a zero, o bloco "diga" ou um novo fantasia/cenário para mostrar a mensagem de "Fim", e o bloco "pare tudo" para congelar o jogo. É como apertar o botão de pausa para sempre.

No final da aula, cada criança vai ter um jogo que de fato termina: o personagem perde as vidinhas uma a uma e, quando a última some, aparece a tela de "Fim de Jogo!" e ninguém mais se mexe. É um momento que costuma arrancar muitos sorrisos e até alguns "de novo, de novo!" — sinal de que o jogo ficou divertido.`,
  materiais: [
    `Computadores (um por aluno) com o Scratch já aberto e o projeto da aula anterior (com a variável "vidas") carregado.`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo na tela grande.`,
    `Um projeto de exemplo pronto, salvo no computador do professor, mostrando o jogo terminando com a tela de "Fim".`,
    `Folhas de papel e lápis de cor para o exercício de desenhar a tela de "Fim de Jogo!".`,
    `Cartões grandes com as palavras "SE", "VIDAS", "ZERO", "FIM" e "PARE" para a brincadeira em roda.`,
    `Lista com os nomes das crianças para o professor anotar quem já conseguiu fazer o jogo terminar.`,
  ],
  conceitosChave: [
    `Fim de jogo — é o momento em que o jogo acaba e mostra uma tela avisando que terminou, como a palavra "Fim" no final de um desenho animado.`,
    `Se ... então — um bloquinho que pergunta uma coisa para o jogo e só faz a ação se a resposta for "sim". É como dizer: "SE as vidas acabaram, ENTÃO mostre o Fim".`,
    `Vidas em zero — quando o contador de vidas chega no número 0, quer dizer que não sobrou mais nenhuma vidinha e o jogador perdeu.`,
    `Tela de Fim — uma imagem ou fantasia nova, bem grande, escrito "Fim de Jogo!", que aparece para o jogador saber que acabou.`,
    `Pare tudo — um bloco mágico que congela o jogo inteiro na hora; todos os personagens param de se mexer de uma vez.`,
    `Sempre verificar — usar o bloco "sempre" para o jogo ficar olhando o tempo todo se as vidas já acabaram, sem nunca cansar.`,
    `Trocar fantasia/cenário — mudar o desenho que aparece na tela, do jogo normal para a tela de "Fim".`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Nesta aula você vai fechar o ciclo do jogo. Na aula anterior a turma criou uma variável chamada "vidas" (geralmente começando em 3) que diminui quando o personagem encosta no inimigo. O problema é que, quando "vidas" chega a 0, o jogo não faz nada. Hoje você ensina o jogo a reagir a esse momento.

A base técnica são três peças simples. Primeira: o bloco "sempre" (gaveta laranja "Controle"), que faz o jogo ficar checando uma coisa o tempo todo. Segunda: o bloco "se ... então" (também laranja, "Controle"), onde você encaixa uma pergunta. Terceira: o bloco de operador "= " (gaveta verde "Operadores"), para montar a condição "vidas = 0". Quando "vidas = 0" for verdade, dentro do "se" você coloca duas ações: mostrar a tela de "Fim" (trocar a fantasia do ator ou trocar o cenário/palco) e o bloco "pare [tudo]" (gaveta laranja), que congela o jogo.

A forma mais visual para crianças é criar a tela de "Fim" como um novo cenário no palco (aba "Palcos", botão de pintar cenário) ou como uma nova fantasia gigante em um ator que fica escondido e só aparece no fim. Recomendo o cenário: é mais fácil de ver no projetor.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

Aquecimento (10 min): Abra o jogo da aula passada no projetor. Jogue de propósito até bater no inimigo e mostre as vidas caindo: 3, 2, 1, 0. Pergunte: "E agora? As vidas acabaram, mas o jogo não para! Está faltando alguma coisa?". Deixe as crianças notarem que falta o "Fim".

Conteúdo novo guiado (15 min): No seu computador, clique na aba "Palcos" (canto inferior direito) e no botão de pincel "Pintar" para criar um cenário novo. Escreva bem grande "FIM DE JOGO!" usando a ferramenta de Texto (T). Volte ao código do ator principal. Arraste da gaveta "Controle" o bloco "sempre". Dentro dele, encaixe um "se ... então". Vá em "Operadores" (verde), pegue o bloco "[ ] = [ ]" e coloque na pergunta do "se": no primeiro espaço arraste a variável "vidas" (gaveta "Variáveis"), no segundo digite 0. Dentro do "se", arraste de "Aparência" o bloco "mude o cenário para [FIM DE JOGO!]" e logo abaixo, de "Controle", o bloco "pare [tudo]". Teste clicando na bandeira verde e perdendo as vidas até aparecer o "Fim".

Mão na massa (25 min): Cada criança repete os passos no seu jogo. Circule pela sala. Quem terminar pode caprichar no cenário de "Fim": cores, um emoji triste, uma estrela. Anote na lista quem já conseguiu o jogo parar.

Desafio e compartilhar (10 min): Desafie: "Como deixar a tela de Fim mais bonita ou engraçada?". Depois, faça uma volta rápida com cada aluno mostrando o jogo terminando no projetor.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a analogia do desenho animado: "No fim do desenho aparece a palavra FIM, né? Nosso jogo também precisa de um FIM". Para o "se ... então", diga: "É uma perguntinha. SE as vidinhas acabaram, ENTÃO mostramos o Fim". Para o "pare tudo", use a ideia de estátua: "É como na brincadeira da estátua — todo mundo congela!". Evite a palavra "condição"; diga "perguntinha". Fale "vidinhas" em vez de "variável".

## Erros comuns e como ajudar

O erro mais comum é colocar o "se" solto, sem o "sempre" por fora — aí o jogo checa uma vez só e nunca percebe o zero; mostre que o "se" precisa ficar dentro do "sempre". Outro erro é digitar a letra "O" no lugar do número "0" no operador; confira o espaço. Algumas crianças esquecem de arrastar a variável "vidas" e deixam o primeiro espaço vazio. Por fim, há quem coloque "pare tudo" antes de trocar a tela — aí o jogo para sem mostrar o "Fim"; lembre que primeiro mostramos a tela, depois paramos.`,
  exercicios: [
    {
      titulo: `Onde encaixa o "se"?`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Mostre no projetor o bloco "sempre" e o bloco "se ... então" separados. Peça que cada criança, no seu Scratch, arraste o "se" para dentro do "sempre" do seu jogo. Circule conferindo o encaixe.`,
      atividade: `Pegue na gaveta laranja "Controle" o bloco "sempre" e o bloco "se ... então". Encaixe o "se" dentro do "sempre", como uma caixinha dentro de outra caixa.`,
      gabarito: `Está certo quando o bloco "se ... então" aparece visivelmente dentro do bloco "sempre", abraçado pela borda laranja. Se o "se" estiver solto ao lado, ainda não encaixou.`,
    },
    {
      titulo: `A perguntinha "vidas = 0"`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Demonstre pegar o operador "[ ] = [ ]" da gaveta verde e montar "vidas = 0". Acompanhe para que ninguém digite a letra O no lugar do zero e ninguém deixe o espaço da variável vazio.`,
      atividade: `Na gaveta verde "Operadores", pegue o bloco "[ ] = [ ]" e coloque na perguntinha do "se". Arraste a vidinha "vidas" para o primeiro espaço e digite o número 0 no segundo.`,
      gabarito: `Está certo quando a perguntinha mostra "vidas = 0", com a variável azul no primeiro espaço e o número zero (não a letra O) no segundo. Ao perder todas as vidas, o "se" deve disparar.`,
    },
    {
      titulo: `Estátua: o jogo do "Pare Tudo"`,
      tipo: `jogo`,
      tempo: `8 min`,
      guiaProfessor: `Em roda, vire o "computador" e as crianças viram os personagens. Conte uma vida sendo perdida por vez: "três, duas, uma, ZERO!". No "zero", grite "PARE TUDO!" e todos viram estátua. Repita variando o ritmo.`,
      atividade: `Mexam-se como personagens do jogo. Quando o professor disser "vidas = zero, PARE TUDO!", todo mundo congela igual estátua e ninguém se mexe mais.`,
      gabarito: `Acertou quem continua se movendo enquanto há vidas e congela imediatamente no "zero, pare tudo". A criança entende que "pare tudo" congela o jogo inteiro de uma vez.`,
    },
    {
      titulo: `Desenhando minha tela de Fim`,
      tipo: `desenho/papel`,
      tempo: `8 min`,
      guiaProfessor: `Distribua papel e lápis de cor. Peça que cada um desenhe como vai ser a tela de "Fim de Jogo!" antes de pintar no Scratch. Depois, quem quiser copia o desenho para o cenário no computador.`,
      atividade: `Desenhe no papel a sua tela de "Fim de Jogo!". Escreva bem grande "FIM" e enfeite com cores, estrelas ou uma carinha. Pode ser triste, engraçada ou divertida.`,
      gabarito: `O desenho deve mostrar claramente a palavra "FIM" (ou "Fim de Jogo!") de forma grande e legível. Não há resposta única: vale qualquer enfeite, desde que a mensagem de fim apareça com destaque.`,
    },
    {
      titulo: `Desafio: o jogo que termina sozinho`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Peça que cada criança junte tudo: dentro do "se vidas = 0", colocar "mude o cenário para [FIM]" e depois "pare [tudo]". Teste com cada um, perdendo as vidas até a tela de Fim aparecer e o jogo congelar.`,
      atividade: `Monte o final completo: dentro do "se vidas = 0", coloque primeiro "mude o cenário para [Fim de Jogo!]" e depois "pare [tudo]". Clique na bandeira verde e perca todas as vidas para ver o jogo terminar.`,
      gabarito: `Está certo quando, ao zerar as vidas, a tela de "Fim de Jogo!" aparece e todos os personagens param de se mexer. Se a tela não aparece, a ordem dos blocos está trocada (o "pare" veio antes da troca de cenário).`,
    },
  ],
};
