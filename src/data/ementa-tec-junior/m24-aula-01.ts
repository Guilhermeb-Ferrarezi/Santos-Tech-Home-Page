import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Caça aos Bugs",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança consegue testar o próprio jogo jogando do início ao fim com olhos de detetive e anotar numa lista cada problema que encontrar (o que trava, some ou não funciona).`,
  descricao: `Chegamos ao último mês do Ano 2! O jogo de cada criança está quase pronto, e antes de mostrá-lo para o mundo precisamos deixá-lo bem caprichado. Hoje a turma vira uma equipe de detetives e aprende uma palavra que todo criador de games usa: bug. Um bug é um errinho escondido no jogo — algo que trava, some, atravessa a parede ou simplesmente não funciona como a gente queria. Bug não é vergonha nenhuma: TODO jogo do mundo tem bugs antes de ser publicado, e o trabalho do criador é caçá-los um por um.

Para caçar bugs a gente usa o playtest, que é o botão de testar dentro do Roblox Studio. Quando a criança aperta esse botão, ela entra de verdade no próprio jogo e pode andar, pular e tocar nas coisas, do começo ao fim, como se fosse um jogador comum. A diferença é que ela vai jogar com olhos de detetive: prestando atenção em tudo que parecer estranho, em vez de só se divertir e seguir adiante.

A grande ferramenta de hoje é a Lista de Bugs. Toda vez que a criança encontra algo errado, ela anota numa folha: o que aconteceu e onde foi. Essa lista é o mapa do tesouro da próxima aula, quando a turma vai consertar tudo. Aprender a observar com calma, a perceber o que está fora do lugar e a registrar o problema é uma habilidade poderosa — é o que separa um jogo bagunçado de um jogo profissional.

O resultado da aula é concreto e visível: cada criança termina segurando a sua própria Lista de Bugs, com pelo menos um ou dois problemas anotados, orgulhosa de ter encontrado erros que ninguém tinha visto antes. É a primeira etapa rumo ao jogo publicado e ao Certificado do Ano 2.`,
  materiais: [
    `Computadores (1 por criança) com o Roblox Studio já aberto e o projeto/jogo de cada aluno carregado, pronto para o playtest.`,
    `Projetor ou TV grande conectada ao computador do professor, para demonstrar o botão de testar e mostrar exemplos de bugs na tela cheia.`,
    `Um jogo de exemplo já salvo pelo professor, com três bugs colocados de propósito (um bloco que não aparece, uma plataforma flutuando longe demais e um botão que não faz nada), para mostrar o "caçar bug" ao vivo.`,
    `Folhas impressas da "Lista de Bugs" com colunas simples e desenhinhos (o que aconteceu / onde foi), uma por criança.`,
    `Lápis de cor, canetinhas e adesivos de "Bug Encontrado!" para marcar cada problema achado.`,
    `Uma lupa de brinquedo (ou recortada em papel) para entregar simbolicamente a cada "detetive de bugs".`,
    `Cartaz na parede com a frase "Todo jogo tem bugs — o criador esperto os encontra!" para reforçar que errar faz parte.`,
  ],
  conceitosChave: [
    `Bug — um errinho escondido no jogo, tipo uma peça fora do lugar. É quando algo trava, some ou não funciona do jeito certo.`,
    `Playtest — apertar o botão de testar para entrar no próprio jogo e jogar do início ao fim, como um jogador de verdade.`,
    `Detetive de bugs — a criança que joga com olhos atentos, procurando o que está estranho em vez de só passar correndo.`,
    `Lista de Bugs — a folha onde a gente anota cada problema encontrado, para não esquecer e poder consertar depois.`,
    `Travar — quando o jogo "engasga", para de andar ou prende o personagem num lugar sem deixar continuar.`,
    `Sumiço — quando uma coisa que devia aparecer (um bloco, uma moeda, o chão) simplesmente não está lá.`,
    `Botão Play (Test) — o botão verde de "brincar" no topo do Studio que liga o teste do jogo; o botão Stop desliga e volta a montar.`,
  ],
  treinamento: `## O que o professor precisa saber

Um "bug" é qualquer comportamento do jogo diferente do esperado: algo que trava, some, aparece no lugar errado ou não responde. No Roblox Studio, a forma de descobrir bugs é o playtest. No topo da tela, na aba "Home" (ou na aba "Test"), existe um botão verde de "Play" (um triângulo, como o de vídeo). Ao clicar nele, o Studio coloca um personagem de teste dentro do mundo e você pode jogar de verdade com WASD para andar, barra de espaço para pular e o mouse para olhar. Para sair do teste, clique no botão "Stop" (o quadradinho vermelho), que devolve você ao modo de montagem. Há variações: "Play" (você nasce no spawn), "Play Here" (nasce onde a câmera está) e "Run" (roda o mundo sem personagem). Para crianças, use sempre o "Play" simples.

A meta desta aula NÃO é consertar nada — é só ENCONTRAR e ANOTAR. Conserto é a Aula 2. Mantenha o foco em observar e registrar. Antes da aula, teste você mesmo o jogo de exemplo e tenha clareza dos três bugs plantados, para conduzir a demonstração com segurança.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento/revisão: Reúna a turma e mostre o cartaz "Todo jogo tem bugs". Pergunte "quem já viu um jogo travar ou um personagem atravessar a parede?". Deixe contarem histórias. Apresente a palavra "bug" e a ideia do detetive. Entregue a lupa de brinquedo simbolicamente.

15 min — Conteúdo novo guiado: No projetor, abra o jogo de exemplo. Mostre onde fica o botão verde "Play" na aba "Home" e clique. Jogue na frente deles e, de propósito, esbarre no primeiro bug (o bloco que some). Pare e diga "achei um bug!". Mostre como anotar na Lista de Bugs: o que aconteceu ("o chão sumiu") e onde ("perto da porta"). Repita com o segundo bug. Clique em "Stop" e explique que parar não conserta — só volta a montar.

25 min — Mão na massa: Cada criança clica no "Play" do próprio jogo e joga do início ao fim com olhos de detetive. Circule pela sala lembrando "joga devagar, olha tudo". Sempre que alguém achar um bug, ajude a anotar na folha e dê o adesivo "Bug Encontrado!". Garanta que ninguém tente consertar agora.

10 min — Desafio + compartilhar: Lance o desafio "ache pelo menos um bug que ninguém viu". Em roda, cada criança mostra a sua Lista de Bugs e conta um problema que encontrou. Comemore: quanto mais bugs achados, melhor será o conserto na próxima aula.

## Como explicar para crianças

Use a imagem do detetive: "Hoje a gente não vai só brincar, a gente vai investigar! Um bug é um errinho escondido, como uma migalha no tapete. Nós somos detetives com lupa procurando essas migalhas." Para o playtest, diga: "Esse botão verde é a porta mágica que te leva para DENTRO do seu jogo. Lá você anda, pula e testa tudo." Para a Lista de Bugs: "Detetive bom anota tudo no caderninho, senão esquece! A gente escreve o que aconteceu e em que lugar." Reforce sempre que achar bug é VITÓRIA, não erro: "Cada bug que você acha é um ponto pra você!"

## Erros comuns e como ajudar

O erro mais comum é a criança jogar correndo só para se divertir e não observar nada — peça que jogue bem devagar, como uma tartaruga detetive. Outro: querer consertar o bug na hora; lembre com carinho que hoje só anotamos, o conserto é semana que vem. Algumas esquecem de clicar em "Stop" e ficam confusas por não conseguir mover os blocos — mostre o quadradinho vermelho. Há quem ache que "não tem nenhum bug" no próprio jogo; sente ao lado e jogue junto, apontando algo estranho para mostrar que sempre tem. E quem tem dificuldade de escrever pode desenhar o bug ou ditar para o professor anotar — o importante é registrar.`,
  exercicios: [
    {
      titulo: `A Porta Mágica do Play`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre na sua tela onde fica o botão verde "Play" na aba "Home" do Roblox Studio e clique para entrar no jogo. Em seguida clique no "Stop" (quadradinho vermelho) para sair. Peça que cada criança repita: entrar e sair do próprio jogo, só para dominar os dois botões antes de caçar bugs.`,
      atividade: `Ache o botão verde de "Play" lá em cima no seu Studio e clique nele para entrar no seu jogo. Ande um pouquinho. Depois clique no quadradinho vermelho de "Stop" para voltar a montar. Faça isso duas vezes para treinar.`,
      gabarito: `A criança acertou quando consegue, sozinha, clicar no "Play" e ver o personagem dentro do jogo, e depois clicar no "Stop" e voltar ao modo de montagem. O professor confere se ela reconhece os dois botões e sabe a diferença entre testar e montar.`,
    },
    {
      titulo: `Caça ao Bug do Professor`,
      tipo: `jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `No projetor, abra o jogo de exemplo com os três bugs plantados. Jogue na frente da turma e desafie as crianças a gritarem "bug!" quando virem algo estranho (o bloco que some, a plataforma flutuando, o botão que não faz nada). A cada acerto, comemore e anote na Lista de Bugs gigante na tela.`,
      atividade: `Olhem o jogo do professor na tela grande! Quando vocês virem algo estranho — uma coisa que some, que trava ou que não funciona — gritem "BUG!" e apontem. Vamos achar os três bugs escondidos juntos.`,
      gabarito: `A turma acertou quando identifica os três bugs plantados: (1) o bloco/chão que some, (2) a plataforma flutuando longe demais e (3) o botão que não faz nada. Vale como acerto se as crianças apontarem pelo menos dois deles e descreverem com as próprias palavras o que está errado.`,
    },
    {
      titulo: `Detetive do Meu Jogo`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Cada criança entra no próprio jogo pelo "Play" e joga do início ao fim com calma, como detetive. Circule lembrando "devagar, olhe tudo". Quando alguém achar um bug, ajude a anotar na Lista de Bugs (o que aconteceu e onde) e entregue um adesivo "Bug Encontrado!". Não deixe ninguém tentar consertar agora.`,
      atividade: `Vire detetive do seu próprio jogo! Clique no "Play" e jogue bem devagar, do começo ao fim. Olhe se algo some, trava ou não funciona. Achou um bug? Avise o professor e anote na sua Lista de Bugs: o que aconteceu e em que lugar.`,
      gabarito: `A criança acertou quando joga o próprio jogo inteiro pelo playtest e registra pelo menos um bug real na lista, dizendo o que aconteceu e onde. Se o jogo dela parecer "sem bugs", o professor joga junto e aponta algo a melhorar para garantir pelo menos um registro.`,
    },
    {
      titulo: `Escrevendo na Lista de Bugs`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Ajude cada criança a preencher a Lista de Bugs com clareza, usando as duas colunas: "o que aconteceu" e "onde foi". Quem ainda não escreve bem pode desenhar o bug ou ditar para o professor. Reforce que uma lista bem anotada vai facilitar o conserto na próxima aula.`,
      atividade: `Pegue a sua Lista de Bugs e, para cada problema que você achou, preencha duas coisas: o que aconteceu (por exemplo, "o chão sumiu") e onde foi (por exemplo, "perto da porta"). Pode desenhar o bug do lado se quiser!`,
      gabarito: `A criança acertou quando cada bug da lista tem as duas informações: o QUE aconteceu e ONDE aconteceu, por escrito ou por desenho. Uma lista do tipo "o bloco sumiu — perto da entrada" está perfeita. O professor confere se dá para entender o problema só de ler a anotação.`,
    },
    {
      titulo: `O Bug que Ninguém Viu`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Lance o desafio final: cada detetive precisa achar pelo menos um bug NOVO, jogando de um jeito diferente — pulando em lugares estranhos, indo para os cantos do mapa, tocando em tudo. Circule incentivando a explorar. No fim, reúna a turma em roda para cada um apresentar um bug da sua lista. Comemore a quantidade total de bugs encontrados pela turma.`,
      atividade: `Desafio de detetive ninja! Volte ao seu jogo e tente achar um bug que ninguém viu ainda. Pule em lugares esquisitos, vá até os cantos do mapa, toque em tudo. Quando achar, anote na lista. Depois mostre para a turma o bug mais legal que você descobriu!`,
      gabarito: `Acertou quem registra ao menos um bug adicional encontrado explorando o jogo de forma diferente e consegue apresentá-lo à turma dizendo o que aconteceu e onde. O professor valida se a criança explorou cantos/ações novas e ampliou a própria Lista de Bugs; vale entregar a lupa ou o adesivo de "Detetive de Bugs".`,
    },
  ],
};
