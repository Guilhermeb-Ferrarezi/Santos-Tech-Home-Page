import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Poeirinha mágica nos pés",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Animar uma pequena nuvem de poeira que nasce, cresce e some em poucos frames, dando impacto à corrida e à aterrissagem do herói no Aseprite.`,
  descricao: `Até agora as crianças animaram o próprio herói: ele anda, fica paradinho cheio de vida e até ataca ou pula. Nesta aula damos um passo mágico: descobrimos os efeitos, que são aquelas coisinhas extras que aparecem em volta do personagem e fazem o jogo parecer profissional. Começamos pelo mais charmoso de todos: a poeirinha que sai dos pés quando o herói corre rápido ou quando ele aterrissa no chão depois de um pulo.

Um efeito de poeira é uma animação bem curta e independente do herói. Ele tem vida própria: a nuvem surge pequenininha, cresce um pouquinho e depois desaparece, tudo em três ou quatro frames. Diferente da animação de andar, que fica em loop o tempo todo, o efeito acontece uma vez e some. Por isso ele é rápido de fazer e dá um resultado incrível, perfeito para crianças que adoram ver mágica acontecer na tela.

O segredo visual da poeira é usar tons claros (branco, cinza bem clarinho, bege) e bordas suaves, fofas, sem cantos duros. A nuvem não precisa de detalhes: são só algumas bolinhas claras agrupadas. Conforme os frames passam, a nuvem fica maior e mais transparente, como fumacinha que se espalha no ar e some. Essa ideia de surgir, crescer e sumir é o coração da aula e vale para quase todos os efeitos que eles vão criar no jogo.

Ao final, cada criança terá uma animação de poeira pronta, salva na própria pasta, vista rodando no botão de play. É um efeito pequeno, mas que ensina uma ideia gigante: o impacto de um jogo não vem só do personagem, vem também das coisinhas mágicas ao redor dele.`,
  materiais: [
    `Computadores com o Aseprite já aberto e um arquivo novo de 32x32 ou 48x48 pixels pronto para cada criança`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo`,
    `Exemplo pronto do professor: um .aseprite com a poeira animada (3 a 4 frames) para mostrar rodando no play`,
    `Exemplo de um herói correndo já com a poeirinha nos pés, para as crianças verem o efeito final`,
    `Uma referência impressa ou na tela: fotos ou desenhos de nuvenzinhas de poeira e fumaça fofa`,
    `Cartão com a frase mágica do efeito: "nasce pequena, cresce e some"`,
  ],
  conceitosChave: [
    `Efeito — uma coisinha extra que aparece no jogo (poeira, brilho, fumaça) e deixa tudo mais bonito e cheio de impacto.`,
    `Poeira — a nuvenzinha clara que sobe dos pés do herói quando ele corre ou cai no chão.`,
    `Frame — cada desenho da animação; juntando vários e trocando rápido, parece que mexe sozinho.`,
    `Surgir, crescer e sumir — os três momentos da poeira: ela aparece pequena, fica maior e depois desaparece.`,
    `Tons claros — cores bem clarinhas (branco, cinza claro, bege) que fazem a poeira parecer leve e fofa.`,
    `Borda suave — contorno macio, sem cantos duros, para a nuvem parecer fofinha de verdade.`,
    `Efeito que não fica em loop — diferente do andar, a poeira acontece uma vez e some, não repete pra sempre.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista para dar esta aula. A poeira é o efeito mais simples e mais recompensador do Aseprite. A ideia central que você vai repetir o tempo todo é: a nuvem "nasce pequena, cresce e some". São só três ou quatro frames. Antes da aula, abra o seu exemplo pronto e aperte o play para confirmar que a animação roda.

Relembre rapidamente onde ficam as ferramentas no Aseprite. A barra de frames fica embaixo, na parte de baixo da tela (a Timeline). Para criar um frame novo, clique no botão de mais (+) ao lado dos quadradinhos de frame, ou use a tecla Alt+N. Para ver a animação rodando, aperte a barra de espaço ou o botão de play (o triângulo) acima da Timeline. A ferramenta de desenhar é o lápis (Pencil, tecla B) e a de apagar é a borracha (Eraser, tecla E). O conta-gotas para pegar uma cor já usada é o Eyedropper (tecla Alt apertado junto com o lápis). Deixe a paleta com tons claros já selecionados.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Aseprite)

Aquecimento e revisão (10 min): Sente a turma de frente para o projetor. Mostre o herói correndo com a poeira nos pés e pergunte: "O que é essa nuvenzinha que sai dos pés dele?". Deixe as crianças adivinharem. Conte que hoje vamos fazer essa mágica. Faça com o corpo o gesto da poeira: as mãos fechadas que abrem devagar e somem no ar. Mostre o cartão "nasce pequena, cresce e some".

Conteúdo novo guiado (15 min): No projetor, no seu Aseprite, escolha um tom de cinza bem claro na paleta (clique na cor). Pegue o lápis (tecla B). No frame 1, desenhe uma bolinha pequena de poeira, juntando uns 3 ou 4 pixels claros no centro de baixo. Crie o frame 2 clicando no botão de mais (+) na Timeline embaixo; nele desenhe a nuvem um pouco maior, com mais bolinhas em volta. Crie o frame 3: a nuvem bem maior e mais espalhada, com cinza ainda mais clarinho nas pontas, como se estivesse sumindo. Aperte a barra de espaço para mostrar a poeira ganhando vida. Diga em voz alta a cada frame: "nasce... cresce... some".

Mão na massa (25 min): Cada criança faz a sua poeira no próprio computador. Oriente passo a passo: frame 1, bolinha pequena clara; aperta o + da Timeline; frame 2, nuvem maior; aperta o + de novo; frame 3, nuvem grande e clarinha sumindo. Passe nas mesas conferindo se cada uma criou os frames separados e não desenhou tudo em cima do mesmo. Mande apertar a barra de espaço para ver rodando. Ajude quem está com bordas duras a deixar a nuvem mais fofa, tirando alguns pixels dos cantos com a borracha (tecla E).

Desafio e compartilhar (10 min): Desafie quem terminou a criar um frame 4 com a nuvem quase desaparecendo (só dois ou três pixels bem clarinhos). Depois faça a rodada de compartilhar: cada criança aperta o play e mostra a própria poeirinha para a turma, que bate palmas.

## Como explicar para crianças

Use a analogia da fumacinha: "Sabe quando o carro de corrida arranca e solta uma fumaça atrás? A poeira do nosso herói é igual!". Explique os três momentos com o corpo: feche as mãos (nasce pequena), abra devagar (cresce) e espalhe os dedos no ar (some). Diga que a poeira é mágica porque aparece e some sozinha, ela não fica para sempre como o andar. Lembre que poeira é leve, então usamos cores bem clarinhas, nunca cores escuras e fortes.

## Erros comuns e como ajudar

A criança desenha tudo no mesmo frame: mostre de novo o botão de mais (+) na Timeline e explique que cada desenho fica num quadradinho diferente. A nuvem fica com cantos duros e quadrados: pegue a borracha (E) e tire alguns pixels das pontas com ela, deixando arredondado e fofo. A criança usa cores escuras: leve-a de volta à paleta e mostre só os tons claros, dizendo "poeira é leve e clarinha". A poeira não cresce entre os frames: peça para comparar o frame 1 com o 3 e ver se o último está bem maior. A criança quer animar o herói junto: combine que hoje a estrela é só a poeira; o herói entra na próxima aula.`,
  exercicios: [
    {
      titulo: `Caça à poeira nos jogos`,
      tipo: `Observação guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `No projetor, mostre o herói correndo com poeira e depois aterrissando de um pulo. Pergunte onde aparece a nuvenzinha e o que ela faz. Conduza a turma a perceber os três momentos: nasce pequena, cresce e some.`,
      atividade: `Olhe o herói na tela e aponte onde aparece a poeirinha. Ela aparece quando ele corre, quando ele cai no chão, ou nos dois momentos? A nuvem fica do mesmo tamanho ou ela muda?`,
      gabarito: `A poeira aparece nos pés do herói quando ele corre rápido e também quando aterrissa depois do pulo. Ela muda de tamanho: nasce pequena, cresce e some. Acerto = perceber que a nuvem não fica parada nem do mesmo tamanho.`,
    },
    {
      titulo: `Escolhendo os tons clarinhos`,
      tipo: `Escolha de cores na paleta`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre a paleta do Aseprite no projetor. Peça para a criança clicar e separar com você três cores que sirvam para poeira (branco, cinza claro, bege) e dizer por que as escuras não servem. Reforce que poeira é leve.`,
      atividade: `Na paleta de cores do Aseprite, escolha três cores bem clarinhas que sirvam para fazer poeira. Depois aponte uma cor escura e diga por que ela não combina com poeira.`,
      gabarito: `A criança escolhe tons claros como branco, cinza bem clarinho e bege. Uma cor escura (preto, azul forte) não serve porque poeira é leve e clara, e a escura deixaria a nuvem pesada e dura. Acerto = ligar cor clara à ideia de leveza.`,
    },
    {
      titulo: `Os três frames da poeira`,
      tipo: `Prática no Aseprite`,
      tempo: `9 minutos`,
      guiaProfessor: `Acompanhe passo a passo. Frame 1: bolinha pequena com o lápis (tecla B). Clica no mais (+) da Timeline embaixo. Frame 2: nuvem maior. Clica no + de novo. Frame 3: nuvem grande e clarinha. Confira que cada desenho está num frame separado.`,
      atividade: `Crie a sua poeira em três frames: no frame 1 uma bolinha pequena clara, no frame 2 uma nuvem maior e no frame 3 uma nuvem grande e clarinha sumindo. Use o botão de mais (+) embaixo para criar cada frame novo.`,
      gabarito: `Três frames separados na Timeline, cada um com a nuvem maior que o anterior e em tom claro. Acerto = a poeira crescer do frame 1 ao 3 e os desenhos estarem em frames diferentes, não em cima um do outro. Erro comum: desenhar tudo no mesmo frame.`,
    },
    {
      titulo: `Bordas fofas com a borracha`,
      tipo: `Ajuste e refinamento`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre que cantos duros deixam a nuvem quadrada. Pegue a borracha (tecla E) e tire alguns pixels das pontas para arredondar. Peça que a criança faça o mesmo nos três frames da própria poeira.`,
      atividade: `Olhe a sua poeira: ela tem cantos duros e quadrados? Pegue a borracha (tecla E) e tire alguns pixels das pontas de cada nuvem para deixá-la fofinha e redondinha, como fumaça de verdade.`,
      gabarito: `Os três frames ficam com bordas suaves e arredondadas, sem cantos retos. Acerto = a criança usar a borracha nas pontas e a nuvem parecer mais macia. Uma poeira boa não tem cantos duros, parece uma bolinha de algodão.`,
    },
    {
      titulo: `O frame que faz a poeira sumir`,
      tipo: `Desafio final`,
      tempo: `8 minutos`,
      guiaProfessor: `Desafie a criança a criar um frame 4 com a nuvem quase invisível: só dois ou três pixels bem clarinhos. Depois ela aperta o play (barra de espaço) e mostra a poeira completa, do nascer ao sumir, para a turma aplaudir.`,
      atividade: `Crie um quarto frame onde a poeira está quase sumindo: deixe só dois ou três pixels bem clarinhos. Depois aperte a barra de espaço para ver a sua poeira inteira, do começo ao fim, e mostre para a turma.`,
      gabarito: `Um frame 4 com pouquíssimos pixels bem claros, fazendo a nuvem desaparecer ao rodar. Ao apertar o play, a animação mostra a poeira nascendo pequena, crescendo e sumindo. Acerto = a sequência completa rodar e terminar com a nuvem quase invisível.`,
    },
  ],
};
