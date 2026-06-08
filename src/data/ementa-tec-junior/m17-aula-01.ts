import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Os 4 passos do nosso herói",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança entende o que é um walk cycle, reconhece os 4 quadros que fazem o herói andar e, com o professor, cria os frames vazios na linha do tempo do Aseprite e desenha os dois quadros de contato.`,
  descricao: `Esta é a primeira aula do mês em que vamos dar vida ao nosso herói: fazer ele andar de verdade dentro do jogo. Antes de animar, a criança precisa entender uma ideia mágica: um desenho que se mexe é, na verdade, vários desenhos parados mostrados bem rápido, um atrás do outro. Cada desenho parado se chama frame (quadro). Quando trocamos os quadros depressa, nosso olho acha que o herói está se movendo. Nesta aula nós conhecemos o "walk cycle", o ciclo de caminhada, que é a sequência de quadros que se repete enquanto o personagem anda.

O segredo do nosso herói andar usando pouquinhos desenhos é dividir a caminhada em 4 passos. Dois deles são os quadros de contato: o momento em que um pé está bem na frente e o outro bem atrás, tocando o chão, com as pernas abertas como uma tesoura. Os outros dois são os quadros de passagem: o momento em que uma perna passa no meio, embaixo do corpo, enquanto a outra está no ar. Contato, passagem, contato (com o outro pé na frente), passagem, e o ciclo recomeça. São só 4 quadros que se repetem para sempre.

Nesta aula vamos focar a parte prática em abrir o Aseprite, olhar a linha do tempo lá embaixo (a Timeline) e criar 4 frames vazios, como se fossem 4 folhas de um caderninho de desenho animado. Depois, todos juntos, desenhamos apenas os dois quadros de contato do herói: o herói com o pé direito na frente e o herói com o pé esquerdo na frente. Os quadros de passagem ficam para a próxima aula, então hoje não corremos com tudo: plantamos a base.

Como a turma é pequena e as crianças têm de 5 a 9 anos, o professor demonstra cada passo no projetor e só depois solta a turma para fazer. A regra do mês é "olhar e fazer junto": pouco texto, muita demonstração visual, muito apontar com o dedo. O herói pode ser bem simples, um bonequinho de palito com cabeça, para todos conseguirem desenhar e sentirem o gostinho de ver ele se mexer já nas próximas aulas.`,
  materiais: [
    `Um computador por criança (ou um por dupla) com o Aseprite já aberto antes da aula, mostrando a tela inicial.`,
    `Projetor ou TV grande ligada ao computador do professor, para demonstrar cada clique ampliado.`,
    `Um arquivo de exemplo já pronto pelo professor: um walk cycle simples de 4 frames rodando em loop, para a turma ver o herói andando.`,
    `Figuras impressas ou na tela mostrando as duas poses de contato (pernas abertas, um pé na frente) e as duas de passagem (perna no meio).`,
    `Um mouse de verdade para cada computador, pois desenhar pixel a pixel com touchpad é muito difícil para criança pequena.`,
    `Folhas de papel e lápis para o aquecimento "flipbook" (caderninho de desenho animado) feito à mão.`,
    `Crachás com o nome de cada criança e adesivos para premiar quem terminar os dois quadros de contato.`,
  ],
  conceitosChave: [
    `Frame (quadro) — cada desenho parado da animação; é como uma foto do herói num instante.`,
    `Animação — vários quadros mostrados rápido, um atrás do outro, que enganam nosso olho e parecem movimento.`,
    `Walk cycle (ciclo de caminhada) — a sequência de quadros que se repete para sempre enquanto o herói anda.`,
    `Quadro de contato — a pose com as pernas abertas como uma tesoura, um pé na frente e o outro atrás tocando o chão.`,
    `Quadro de passagem — a pose em que uma perna passa no meio, embaixo do corpo, enquanto a outra está no ar.`,
    `Linha do tempo (Timeline) — a fileira de quadrinhos lá embaixo no Aseprite onde guardamos cada frame em ordem.`,
    `Loop — quando a animação termina e volta ao começo sozinha, repetindo sem parar, como uma roda que gira.`,
  ],
  treinamento: `## O que o professor precisa saber

O Aseprite é um programa de desenhar em pixel art e fazer animação. A peça central desta aula é a linha do tempo, a "Timeline", que fica na parte de baixo da tela. Ela é uma fileira de quadrinhos numerados (1, 2, 3, 4...). Cada quadrinho é um frame, ou seja, um desenho diferente. Quando o Aseprite mostra esses desenhos em sequência e rápido, nasce a animação.

Um walk cycle é o ciclo de caminhada de um personagem. A forma clássica e econômica usa 4 frames: dois de contato e dois de passagem. No contato, as pernas ficam abertas em forma de tesoura, com um pé à frente tocando o chão. Na passagem, uma perna está reta embaixo do corpo e a outra dobrada, no ar. A ordem é: contato com pé direito à frente, passagem, contato com pé esquerdo à frente, passagem; depois volta ao primeiro. Hoje desenhamos só os DOIS contatos; os dois de passagem são a Aula 2, então não os faça agora.

Antes da aula, abra o Aseprite e crie (ou peça pronto) um arquivo pequeno, por exemplo 32 por 32 pixels. Tenha também um exemplo seu já animado para a turma ver o herói andando logo no início. Decore como adicionar frame: o botão de mais (+) no canto da Timeline, ou a tecla Alt junto do clique, ou o menu Frame, opção New Frame. Para ver rodando, use o botão de play (triângulo) da Timeline ou a tecla Enter.

## Passo a passo da aula

Aquecimento e revisão (10 min): com os computadores de lado, faça um flipbook de papel. Desenhe um bonequinho num cantinho da folha, vire a página e desenhe ele um pouco diferente, repita em 3 ou 4 folhas e folheie rápido. Mostre que desenhos parados viram movimento. Em seguida, no projetor, rode seu exemplo do herói andando e diga: "vamos aprender a fazer isto".

Conteúdo novo guiado (15 min): no projetor, mostre as figuras das poses. Explique contato (pernas em tesoura) e passagem (perna no meio). Conte que são só 4 quadros que se repetem. Depois abra o Aseprite e aponte a Timeline lá embaixo. Clique no botão de mais (+) e crie 4 frames vazios, contando em voz alta: "um, dois, três, quatro". Clique no frame 1 e mostre que cada quadrinho guarda um desenho.

Mão na massa (25 min): cada criança vai ao seu computador. Passo a passo, junto com você: 1) na Timeline, clicar no botão de mais (+) até ter 4 frames; 2) clicar no frame 1; 3) com a ferramenta Lápis (Pencil, tecla B), desenhar o herói de contato com o pé direito na frente, pernas abertas em tesoura; 4) clicar no frame 3 e desenhar o outro contato, com o pé esquerdo na frente. Circule pela sala, ajoelhe ao lado de cada um e guie a mão se preciso. Deixe os frames 2 e 4 vazios de propósito.

Desafio e compartilhar (10 min): peça que apertem Enter para ver os dois contatos alternando (vai parecer um pulinho engraçado, e tudo bem). Cada criança mostra seu herói para a turma. Encerre com adesivo e diga que na próxima aula preenchemos os quadros de passagem para o herói andar liso.

## Como explicar para crianças

Use a palavra "caderninho mágico": cada frame é uma página, e folhear rápido faz o boneco andar. Chame o contato de "pose da tesoura", porque as pernas abrem como uma tesoura. Chame a passagem de "pose do meio", com a perna passando embaixo do corpo. Mostre com o próprio corpo: dê um passo grande e congele (contato), depois traga o pé ao meio e congele (passagem). Fale frases curtas e sempre demonstre antes de pedir.

## Erros comuns e como ajudar

A criança desenha o mesmo herói parado nos dois quadros, sem trocar as pernas: lembre que cada frame deve estar diferente, mostre as figuras lado a lado. Ela desenha no frame errado: ensine a olhar o número do quadrinho selecionado na Timeline antes de desenhar. Ela cria frames demais ou de menos: conte juntos até 4 e use Ctrl+Z para desfazer. Ela aperta tudo e perde o desenho: reforce "só Lápis e botão de mais hoje". Touchpad atrapalha o traço: por isso o mouse é obrigatório. Pressa de ver andar perfeito: explique que hoje são só os contatos e que a mágica completa vem na Aula 2.`,
  exercicios: [
    {
      titulo: `O caderninho mágico de papel`,
      tipo: `Aquecimento / papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua 3 ou 4 folhinhas para cada criança. Demonstre seu próprio flipbook primeiro. O objetivo é só sentir que desenhos parados viram movimento, sem nenhum computador ainda.`,
      atividade: `Desenhe um bonequinho de palito no cantinho da primeira folha. Na folha de baixo, desenhe ele quase igual, mudando só as perninhas. Repita nas outras folhas. Depois folheie rápido com o polegar e veja seu bonequinho se mexer.`,
      gabarito: `A criança produz 3 ou 4 desenhos parecidos com pequenas mudanças nas pernas e, ao folhear, vê movimento. Acertou se percebe que a animação é feita de vários desenhos parados mostrados rápido.`,
    },
    {
      titulo: `Caça às poses: contato ou passagem?`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor as figuras misturadas das duas poses de contato e das duas de passagem. Aponte uma por vez e peça que a turma responda em voz alta. Use o corpo para conferir cada resposta.`,
      atividade: `Olhe cada pose na tela e grite junto com a turma: é pose de tesoura (contato, pernas abertas) ou pose do meio (passagem, perna no meio)? Depois imite a pose com o seu próprio corpo.`,
      gabarito: `A criança classifica cada figura corretamente: pernas bem abertas em tesoura é contato; perna passando no meio, embaixo do corpo, é passagem. Acertou se separa os dois tipos e consegue imitar pelo menos uma pose.`,
    },
    {
      titulo: `Criando os 4 quadrinhos na Timeline`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre no projetor antes. Mostre a Timeline lá embaixo e o botão de mais (+). Conte os frames em voz alta com a turma. Lembre de clicar no frame 1 ao terminar para não começar no quadro errado.`,
      atividade: `No Aseprite, olhe a linha do tempo (Timeline) lá embaixo. Clique no botão de mais (+) e crie quadrinhos até ter 4 frames, contando "um, dois, três, quatro". Depois clique no frame número 1.`,
      gabarito: `A Timeline da criança mostra exatamente 4 frames numerados e o frame 1 está selecionado. Acertou se conta 4 quadrinhos e sabe apontar qual está escolhido.`,
    },
    {
      titulo: `O herói com o pé direito na frente`,
      tipo: `Prática na ferramenta`,
      tempo: `14 minutos`,
      guiaProfessor: `Com o frame 1 selecionado, demonstre a pose de contato no projetor: bonequinho de palito, pernas abertas em tesoura, pé direito à frente. Pegue a ferramenta Lápis (tecla B). Ajoelhe ao lado de quem precisar e guie a mão.`,
      atividade: `No frame 1, com a ferramenta Lápis, desenhe seu herói na pose da tesoura: pernas bem abertas, o pé direito na frente e o pé esquerdo atrás, tocando o chão. Capricha na cabeça, no corpo e nos dois braços.`,
      gabarito: `O frame 1 mostra o herói com pernas abertas em tesoura e o pé direito claramente à frente. Acertou se o desenho tem a pose de contato reconhecível, mesmo que simples, e está no frame certo.`,
    },
    {
      titulo: `O outro contato: agora o pé esquerdo na frente`,
      tipo: `Desafio`,
      tempo: `14 minutos`,
      guiaProfessor: `Peça que cliquem no frame 3 (deixando o 2 vazio de propósito). O desafio é inverter as pernas: o que estava na frente vai para trás. No fim, mande apertar Enter para ver os dois contatos alternando. Ajude só com dicas.`,
      atividade: `Clique no frame número 3. Desenhe o herói de novo na pose da tesoura, mas agora trocando as pernas: o pé esquerdo na frente e o direito atrás. Quando terminar, aperte Enter e veja seus dois quadros se revezando.`,
      gabarito: `O frame 3 mostra a pose de contato com as pernas invertidas em relação ao frame 1 (pé esquerdo à frente). Ao apertar Enter, os dois contatos se alternam. Acertou se inverteu as pernas e os frames 2 e 4 continuam vazios para a próxima aula.`,
    },
  ],
};
