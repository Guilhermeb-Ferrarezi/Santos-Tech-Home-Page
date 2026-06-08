import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Andando de verdade!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Completar os frames de passagem do walk cycle do herói e usar o Play, o ajuste de FPS e a casca de cebola para deixar a caminhada suave e em loop.`,
  descricao: `Na aula passada as crianças desenharam os 4 passos principais do herói. Hoje elas vão fazer a mágica de transformar esses desenhos parados em uma caminhada de verdade. O segredo de uma boa animação está nos frames de passagem: aqueles quadros que ficam entre os passos grandes e fazem o movimento parecer macio em vez de pular de um lugar para o outro. Quando o herói anda, ele nunca teletransporta a perna; ele passa por posições intermediárias, e é isso que vamos completar hoje.

A grande novidade da aula é o botão Play do Aseprite. Com ele, a sequência de desenhos vira movimento na tela, e as crianças veem o herói andando em loop, ou seja, repetindo para sempre sem parar. Esse momento costuma arrancar muitos sorrisos, porque pela primeira vez o personagem ganha vida. É a recompensa por todo o trabalho de desenhar quadro por quadro.

Para que a caminhada não fique nem rápida demais (parecendo correria nervosa) nem lenta demais (parecendo câmera lenta), vamos ajustar o FPS, que controla quantos quadros aparecem por segundo. E para encaixar bem cada frame de passagem entre dois passos, usaremos a casca de cebola, uma ferramenta que mostra um fantasminha do quadro anterior por baixo do desenho atual. Com ela, a criança vê exatamente onde a perna estava e desenha a próxima posição no lugar certo. Ao final, cada aluno terá um herói caminhando lindamente, pronto para evoluir nas próximas aulas.`,
  materiais: [
    `Computadores com o Aseprite já aberto e o arquivo do herói da Aula 1 carregado`,
    `Projetor ou TV para o professor demonstrar onde clicar`,
    `Exemplo pronto de um walk cycle animado para mostrar antes (referência de "como deve ficar")`,
    `Folha impressa com os bonecos-palito das 4 poses do andar (passo 1, passagem, passo 2, passagem)`,
    `Mouse para cada aluno (desenhar passagem é mais fácil com o mouse do que com o touchpad)`,
    `Cronômetro ou timer na tela para marcar os blocos da aula`,
  ],
  conceitosChave: [
    `Frame de passagem — o desenho que fica no meio do caminho entre dois passos, deixando o movimento macio.`,
    `Botão Play — o triângulo que faz os desenhos andarem na tela, um atrás do outro.`,
    `Loop — quando a animação repete para sempre, sem parar.`,
    `FPS — quantos desenhos aparecem em um segundo; mais FPS deixa rápido, menos FPS deixa devagar.`,
    `Casca de cebola — um fantasminha do quadro de antes que aparece por baixo para você saber onde desenhar o próximo.`,
    `Walk cycle — a sequência de poses que, repetindo em loop, faz o personagem andar sem sair do lugar.`,
    `Timeline — a fileira de quadradinhos embaixo da tela onde ficam todos os frames da animação.`,
  ],
  treinamento: `## O que o professor precisa saber

Um walk cycle (ciclo de caminhada) é feito de poses que se repetem. Os 4 passos principais que as crianças já desenharam na Aula 1 são: contato com o pé direito na frente, contato com o pé esquerdo na frente, e duas posições de "passagem" no meio. Hoje vamos completar e refinar essas passagens. A passagem é o frame mais importante: é nele que o corpo sobe um pouquinho e a perna de trás cruza por baixo do corpo. Sem ela, o boneco parece deslizar como um patinador, não andar.

No Aseprite, a Timeline fica na parte de baixo da tela (se não aparecer, vá no menu View e clique em Timeline). Cada quadradinho é um frame. O botão Play é o triângulo no topo da Timeline. O FPS se ajusta dando dois cliques no número que aparece em cima de cada frame, ou em Frame > Frame Properties. A casca de cebola é o ícone de duas folhinhas no canto superior esquerdo da Timeline; clicar nele liga e desliga o efeito fantasma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Abra o exemplo pronto no projetor e clique no botão Play. Pergunte: "O que faz o herói parecer que está andando de verdade?" Deixe as crianças andarem pela sala em câmera lenta sentindo o corpo subir na passagem. Reveja os 4 frames que elas já têm na Timeline.

Conteúdo novo guiado (15 min): No seu Aseprite projetado, clique entre o passo 1 e o passo 2 e crie um frame novo (botão "+" na Timeline ou menu Frame > New Frame). Ligue a casca de cebola (ícone das duas folhinhas, canto superior esquerdo da Timeline). Mostre o fantasminha aparecendo. Desenhe a passagem usando o fantasma como guia: corpo um pouco mais alto, perna de trás cruzando no meio. Depois clique em Play e mostre a diferença com e sem a passagem.

Mão na massa (25 min): As crianças completam suas próprias passagens, uma de cada vez, usando a casca de cebola. Circule pela sala. Quando terminarem, ensine a apertar Play e a ajustar o FPS (clique duplo no número em cima do frame; experimentem 6, depois 8, depois 12). Cada aluno escolhe a velocidade que deixa o andar mais bonito.

Desafio e compartilhar (10 min): Desafio "andar de gigante" ou "andar de formiguinha" mudando só o FPS. Cada aluno mostra seu herói andando em loop no projetor.

## Como explicar para crianças

Use a analogia do flipbook: "Sabe quando a gente desenha bonequinhos no canto do caderno e passa rápido? O Play faz isso sozinho!" Para a passagem, diga: "Quando você anda, seu corpo dá uma pulinha pra cima no meio do passo. Sem essa pulinha, o herói parece um fantasma deslizando no chão." Para a casca de cebola: "É um fantasminha do desenho de antes que aparece pra você saber onde colocar a perna agora, igual decalque." Para o FPS: "FPS é quantos desenhos passam num segundo. Muitos desenhos = corredor apressado. Pouquinhos = andar de tartaruga."

## Erros comuns e como ajudar

As crianças costumam desenhar a passagem igualzinha ao passo anterior; lembre que na passagem o corpo SOBE e as pernas se aproximam. Outro erro é esquecer de ligar a casca de cebola e desenhar a perna no lugar errado; mostre o ícone das folhinhas de novo. Muitos põem o FPS lá no máximo e o herói vira um borrão; peça para testar 8 FPS primeiro. Há quem desenhe em cima do frame errado: oriente sempre a olhar qual quadradinho está selecionado (fica com a borda destacada) antes de pintar. Por fim, alguns esquecem que é loop e acham que travou; explique que ele repete para sempre de propósito.`,
  exercicios: [
    {
      titulo: `Aperta o Play!`,
      tipo: `Demonstração guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça junto com a turma no projetor. Garanta que cada criança encontre o botão de triângulo no topo da Timeline. O objetivo é só sentir a alegria de ver o herói se mexer pela primeira vez.`,
      atividade: `Encontre o botão Play (o triângulo) em cima da Timeline e clique nele. Observe seu herói andando em loop. Clique de novo para parar.`,
      gabarito: `O botão Play é o triângulo no topo da Timeline. Ao clicar, os frames passam em sequência e repetem (loop). Clicar novamente pausa. A criança deve conseguir iniciar e parar a animação sozinha.`,
    },
    {
      titulo: `Ligando o fantasminha`,
      tipo: `Prática individual`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor o ícone das duas folhinhas no canto superior esquerdo da Timeline. Verifique aluno por aluno se o fantasma apareceu por baixo do desenho atual.`,
      atividade: `Clique no ícone da casca de cebola (as duas folhinhas, no canto de cima da Timeline). Navegue entre os frames e veja o fantasminha do desenho anterior aparecer por baixo.`,
      gabarito: `A casca de cebola é ligada pelo ícone das duas folhinhas. Quando ativa, aparece uma versão clarinha (fantasma) do frame anterior por baixo do frame atual. Clicar de novo desliga. Serve de guia para encaixar o próximo desenho.`,
    },
    {
      titulo: `Desenhando a passagem`,
      tipo: `Mão na massa`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o coração da aula. Lembre que na passagem o corpo sobe um pouquinho e a perna de trás cruza por baixo. Use a casca de cebola como referência. Ajude quem desenhar a passagem idêntica ao passo anterior.`,
      atividade: `Com a casca de cebola ligada, crie um frame novo entre dois passos e desenhe a pose de passagem: corpo um pouco mais alto e as pernas próximas, uma cruzando a outra.`,
      gabarito: `A passagem correta tem o corpo elevado em relação aos frames de contato e as pernas juntas no meio do corpo (uma cruzando por trás). Encaixada com a casca de cebola, ela faz a transição entre os passos ficar suave. Sem a passagem, o andar parece deslizar.`,
    },
    {
      titulo: `Rápido ou devagar? Ajustando o FPS`,
      tipo: `Experimentação`,
      tempo: `8 minutos`,
      guiaProfessor: `Ensine o clique duplo no número que aparece em cima do frame para abrir o ajuste de duração/velocidade. Peça para testarem 6, 8 e 12 FPS e perceberem a diferença. Evite que travem o valor no máximo.`,
      atividade: `Ajuste o FPS da sua animação. Teste 6, depois 8, depois 12 e aperte Play em cada um. Escolha a velocidade que deixa seu herói andando mais bonito e natural.`,
      gabarito: `Mais FPS deixa o andar mais rápido; menos FPS deixa mais lento. Para uma caminhada natural, valores em torno de 8 a 12 FPS costumam funcionar bem. A criança deve justificar a escolha dizendo que ficou nem corrido demais nem lento demais.`,
    },
    {
      titulo: `Herói gigante e herói formiguinha`,
      tipo: `Desafio criativo`,
      tempo: `5 minutos`,
      guiaProfessor: `Desafio só de velocidade, sem redesenhar nada. Peça para criarem a sensação de um gigante pesado (FPS baixo) e de uma formiguinha apressada (FPS alto). Termine com cada aluno mostrando o resultado no projetor.`,
      atividade: `Sem mudar os desenhos, use só o FPS para fazer seu herói parecer um gigante pesado andando devagar e, depois, uma formiguinha andando bem rápido. Mostre os dois para a turma.`,
      gabarito: `Para o gigante, baixa-se o FPS (por exemplo 4 ou 5), deixando o andar lento e pesado. Para a formiguinha, sobe-se o FPS (por exemplo 16 ou mais), deixando o andar veloz. O exercício mostra que a mesma animação muda de personalidade só com a velocidade, sem redesenhar.`,
    },
  ],
};
