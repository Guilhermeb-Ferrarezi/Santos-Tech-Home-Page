import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Botoes Magicos: o Clique que Viaja",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança descobre a ideia de hyperlink como um botão mágico e, com ajuda guiada, transforma uma figura em um botão clicável que pula para outro slide.`,
  descricao: `Esta é a primeira aula do mês do Jogo no PowerPoint. No mês passado as crianças aprenderam a montar slides, escrever neles e deixá-los bonitos. Agora vamos dar o primeiro passo para transformar uma apresentação comum em um joguinho que a pessoa pode clicar e brincar. O assunto de hoje é a peça mais importante de qualquer jogo de slides: o botão mágico, que em PowerPoint e no Google Apresentações se chama hyperlink (ou link).

Um hyperlink é um pulo. Normalmente, numa apresentação, a gente avança os slides apertando uma seta do teclado, sempre na ordem: slide 1, depois 2, depois 3. Mas e se a gente quiser que ao clicar numa estrela o jogo pule direto para o slide 5? É isso que o botão mágico faz: ele liga uma figura a outro slide, e quando alguém clica nela, a apresentação viaja para o slide combinado. Sem o clique, nada acontece; com o clique, a tela muda. Essa é a mágica que dá vida ao jogo.

Para crianças de 5 a 9 anos, a melhor imagem é a do botão de elevador ou do controle remoto. Quando você aperta o botão do andar 3 no elevador, a porta abre no andar 3, não no 2. Quando você aperta um número no controle, a TV pula para aquele canal. O botão mágico do slide funciona igual: você aperta a figura e a tela pula para o lugar combinado. A figura vira um interruptor, e o clique é o dedinho que liga a viagem.

Nesta aula o foco é observar e imitar. Primeiro o professor mostra, bem devagar e no projetor, como pegar uma figura, abrir a janela de link e escolher para qual slide ela vai levar. Depois, com a mão na massa, cada criança transforma a própria figura em um botão e testa o clique para ver a tela viajar. Não vamos montar o jogo inteiro hoje, isso vem nas próximas aulas; hoje plantamos a semente mais importante: entender que um clique numa figura pode levar você para outro lugar. Quando a criança vê a tela pular com o próprio clique, ela descobre que está no controle do jogo.`,
  materiais: [
    `Um computador por aluno (ou em duplas) com o PowerPoint instalado ou o Google Apresentações já aberto no navegador.`,
    `Computador do professor ligado a um projetor ou televisão grande, para demonstrar cada clique para a turma toda.`,
    `Uma apresentação de exemplo já pronta, com pelo menos 3 slides, em que uma figura na tela inicial leva, ao ser clicada, para outro slide (o botão mágico já funcionando).`,
    `Um arquivo inicial preparado para os alunos, com 2 ou 3 slides e uma figura grande e colorida (estrela, seta ou animalzinho) já colada no primeiro slide, pronta para virar botão.`,
    `Cartões em letra grande com a palavra LINK e um desenho de seta, para apoiar quem ainda lê pouco.`,
    `Uma folha de papel por aluno com dois retângulos (dois slides em branco) e uma seta ligando um ao outro, para a atividade de papel.`,
    `Lápis de cor ou giz de cera e um cronômetro ou relógio visível para controlar o ritmo das quatro etapas.`,
  ],
  conceitosChave: [
    `Hyperlink (ou link) — o botão mágico que liga uma figura a outro slide e leva você até lá quando você clica.`,
    `Botão — uma figura do slide que vira um interruptor: a gente clica nela e algo acontece.`,
    `Clicar — apertar uma vez com o dedo no mouse em cima da figura para ligar a mágica.`,
    `Pular para o slide — quando a tela viaja de um slide para outro sem precisar das setas do teclado.`,
    `Modo de apresentação — quando a apresentação fica em tela cheia e os botões mágicos passam a funcionar de verdade.`,
    `Destino do link — o slide combinado para onde o botão mágico vai levar a gente.`,
    `Inserir link — o caminho dentro do programa que abre a janelinha para escolher o destino do botão.`,
  ],
  treinamento: `## O que o professor precisa saber

Um hyperlink é uma ligação invisível entre um objeto do slide (uma figura, uma forma, uma palavra) e um destino. Neste mês o destino será sempre outro slide da mesma apresentação. Quando a apresentação está no modo de apresentação (tela cheia), clicar nesse objeto faz a tela pular direto para o slide escolhido, sem seguir a ordem normal. É exatamente isso que transforma uma apresentação em jogo: o jogador navega clicando, não apertando setas.

No PowerPoint, o caminho é: clique uma vez na figura para selecioná-la (aparecem bolinhas em volta), vá à aba Inserir, clique em Link (ou Hiperlink). Na janela que abre, escolha à esquerda Colocar neste Documento; aparece a lista de slides da própria apresentação. Clique no slide de destino e depois em OK. Pronto, a figura virou botão. No Google Apresentações: clique na figura, vá ao menu Inserir e depois Link (ou use o atalho com a tecla Ctrl e a letra K). Na caixinha que abre, clique em Slides desta apresentação e escolha o slide de destino. Em ambos, o link só funciona no modo de apresentação, não enquanto você está editando.

Para testar: no PowerPoint aperte a tecla F5 (começa do início) ou Shift e F5 (começa do slide atual); no Google Apresentações clique no botão Apresentar, no canto superior direito. Em tela cheia, passe o mouse sobre a figura: o ponteiro vira uma mãozinha, sinal de que ali tem um botão. Clique e veja a tela pular. Para sair da tela cheia, aperte a tecla Esc. Vale deixar o arquivo de exemplo já pronto e testado antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min). Junte a turma em roda. Pergunte: "Quando vocês andam de elevador e apertam o botão do andar, o que acontece?" Deixe responderem. Diga: "Hoje a gente vai aprender a fazer botões mágicos no slide. Você clica numa figura e a tela viaja para outro lugar!" Abra o exemplo no projetor, entre no modo de apresentação e clique na figura para a turma ver a tela pular. Faça duas ou três vezes, com a turma contando "um, dois, três, pulou!".

2. Conteúdo novo guiado (15 min). No computador do professor, mostre o passo a passo bem devagar. Clique na figura até aparecerem as bolinhas em volta. No PowerPoint vá em Inserir e depois Link, escolha Colocar neste Documento e clique no slide de destino, depois OK. No Google Apresentações vá em Inserir e depois Link, clique em Slides desta apresentação e escolha o slide. Narre cada passo: "Cliquei na figura, abri o link, escolhi para onde ela vai levar." Entre no modo de apresentação e teste o clique na frente de todos.

3. Mão na massa (25 min). Leve as crianças aos computadores com o arquivo inicial já aberto. Guie todos juntos, esperando a turma toda chegar em cada passo antes de seguir. Peça que cliquem na figura, abram Inserir e depois Link, escolham o segundo slide como destino e confirmem. Depois ajude cada um a entrar no modo de apresentação e clicar na própria figura para ver a tela viajar. Passe de mesa em mesa, comemorando cada pulo que der certo.

4. Desafio e compartilhar (10 min). Proponha o desafio: fazer o botão levar para um slide diferente, ou criar um segundo botão. Depois reúna a roda e deixe que cada criança mostre, no modo de apresentação, o próprio botão mágico funcionando para a turma aplaudir.

## Como explicar para crianças de 5 a 9 anos

Use sempre a imagem do elevador e do controle remoto: o botão te leva para o andar ou o canal certo. Diga que a figura é um botão dorminhoco; o link é a mágica que a gente coloca dentro dele para ele acordar e saber para onde levar. Lembre que o botão só funciona quando o jogo está em tela cheia (modo de apresentação): enquanto a gente arruma o slide, o botão está dormindo. Fale frases curtas, mostre antes de pedir e deixe a criança dar o clique sozinha. Quando a tela pular, faça festa: "Olha a mágica! Você viajou de slide!".

## Erros comuns e como ajudar

- Não selecionar a figura antes. Sem as bolinhas em volta, o menu de link não funciona. Mostre: "Clica uma vez na figura até aparecerem as bolinhas, aí sim a gente põe a mágica."

- Tentar clicar no botão enquanto edita e achar que quebrou. Explique que o botão só acorda na tela cheia: ajude a entrar no modo de apresentação para testar.

- Escolher o slide de destino errado e a tela pular para o lugar trocado. Abra o link de novo e ajude a escolher o slide certo na lista.

- Não conseguir sair da tela cheia. Mostre a tecla Esc no canto do teclado para voltar a editar com calma.`,
  exercicios: [
    {
      titulo: `O botão do elevador`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Comece na roda, sem computador. Converse sobre botões do dia a dia: o do elevador, o do controle remoto da TV, o da campainha. Vá ligando cada exemplo à ideia central: a gente aperta um botão e algo acontece em outro lugar. Para quem lê pouco, use gestos de apertar e mostre os cartões com a palavra LINK e a seta. Termine dizendo que no slide a gente também vai fazer botões assim.`,
      atividade: `Vamos pensar em botões! Quando você aperta o botão do andar 3 no elevador, para onde a porta abre? E quando você aperta um número no controle da TV, o que acontece com a tela? Hoje a gente vai fazer um botão desses dentro do slide: você clica numa figura e a tela viaja!`,
      gabarito: `A criança acerta se entender que apertar um botão faz algo acontecer em outro lugar (o elevador vai para o andar, a TV muda de canal). Sinal de sucesso: dar pelo menos um exemplo de botão do dia a dia e ligá-lo à ideia de que o botão leva a gente para um lugar combinado. Não é preciso usar a palavra hyperlink ainda.`,
    },
    {
      titulo: `Achando a janela do link`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Antes de criar o link, deixe a turma só localizar o caminho. Demonstre no projetor: clique na figura até aparecerem as bolinhas, mostre a aba Inserir (no PowerPoint) ou o menu Inserir (no Google Apresentações) e o botão Link. Depois guie a turma a fazer o mesmo, esperando todos chegarem. Não confirme nada ainda: o objetivo é só achar a janela. Reforce que a figura precisa estar selecionada primeiro.`,
      atividade: `Vamos caçar a janela mágica! Siga o professor: 1. Clique uma vez na figura até aparecerem as bolinhas em volta dela. 2. Procure o menu Inserir lá em cima. 3. Ache o botão Link e clique nele. Apareceu uma janelinha na tela? Levante a mão!`,
      gabarito: `A criança acerta se selecionar a figura (bolinhas visíveis em volta) e abrir a janela de link pelo menu Inserir. Sinal de sucesso: a janelinha de link aparece na tela. Reconhecer que é preciso clicar na figura primeiro para o botão Link funcionar também conta como acerto.`,
    },
    {
      titulo: `Minha figura virou botão`,
      tipo: `Prática no computador`,
      tempo: `14 min`,
      guiaProfessor: `Este é o coração da aula. No projetor, faça o caminho completo e devagar: figura selecionada, Inserir e depois Link, escolher o slide de destino (Colocar neste Documento no PowerPoint, ou Slides desta apresentação no Google), confirmar. Depois entre no modo de apresentação e clique para a tela pular. Guie a turma passo a passo no arquivo inicial e ajude cada um a testar o próprio botão em tela cheia. Use a tecla Esc para voltar a editar.`,
      atividade: `Hora da mágica! 1. Clique na sua figura até aparecerem as bolinhas. 2. Vá em Inserir e depois Link. 3. Escolha o slide 2 como destino e confirme. 4. Agora entre no modo de apresentação e clique na sua figura. A tela pulou para o outro slide? Você fez um botão mágico!`,
      gabarito: `A criança acerta se transformar a figura em link com destino a outro slide e, no modo de apresentação, clicar nela e ver a tela pular para o slide escolhido. Sinal de sucesso: o ponteiro vira mãozinha sobre a figura e o clique muda o slide. Aceitar pequenas ajudas do professor nos cliques de menu.`,
    },
    {
      titulo: `Meu botão no papel`,
      tipo: `Desenho`,
      tempo: `8 min`,
      guiaProfessor: `Entregue a folha com dois retângulos (dois slides) ligados por uma seta. Peça que a criança desenhe um botão (uma estrela, um coração, uma seta) dentro do primeiro retângulo e pinte. A seta já desenhada representa o link levando do slide 1 ao slide 2. Enquanto pintam, pergunte de mesa em mesa: "para onde o seu botão leva?", reforçando as palavras link, botão e destino do link.`,
      atividade: `Estes dois retângulos são dois slides. Desenhe um botão bem bonito dentro do primeiro retângulo: pode ser uma estrela, um coração ou uma seta. A linha com a seta mostra o botão mágico levando do slide 1 para o slide 2. Depois conte para um colega para onde o seu botão leva.`,
      gabarito: `A criança acerta se desenhar um botão dentro do primeiro retângulo e entender que a seta representa o link levando para o segundo slide. Não há desenho certo nem errado: o objetivo é fixar a ideia de que um botão num slide leva para outro slide. Saber dizer "leva para o slide 2" conta como acerto.`,
    },
    {
      titulo: `Desafio: o botão que muda de lugar`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Proponha o desafio depois que todos já tiverem um botão funcionando. Peça que cada criança abra o link da figura de novo (mesmo caminho: figura selecionada, Inserir e depois Link) e troque o destino para um slide diferente, ou crie um segundo botão em outra figura. Acompanhe quem tiver dificuldade de reabrir o link. Ao final, conduza a roda: cada criança mostra, em tela cheia, o próprio botão levando para o novo lugar.`,
      atividade: `Desafio do dia! Abra de novo o link da sua figura e escolha outro slide de destino, ou crie um segundo botão numa figura nova. Depois entre no modo de apresentação e teste: para onde a tela viaja agora? Mostre o seu botão mágico novo para a turma!`,
      gabarito: `A criança acerta se conseguir, sozinha ou com pouca ajuda, mudar o destino do link ou criar um segundo botão, e provar que funciona clicando no modo de apresentação. Sinal de sucesso: a tela viaja para o novo slide combinado quando a criança clica. Aceitar ajuda do professor para reabrir a janela do link.`,
    },
  ],
};
