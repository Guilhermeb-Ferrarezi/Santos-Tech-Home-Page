import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Ataque ou pulo: escolha seu poder",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Cada criança escolhe uma ação especial (ataque ou pulo), desenha os frames-chave dessa ação no Aseprite, testa no Play e guarda o movimento em sua própria tag.`,
  descricao: `Hoje a aula é sobre dar um poder especial para o herói. Até agora o personagem só andava; nesta aula cada aluno decide se o seu herói vai ATACAR (um braço que golpeia para a frente) ou PULAR (o corpo que se estica e sobe no ar). É uma aula de escolha e de protagonismo: a criança vira a dona do movimento do seu próprio personagem, e isso deixa todo mundo orgulhoso.

A ideia central são os frames-chave. Em vez de desenhar dezenas de quadrinhos, ensinamos que toda ação tem poucos momentos importantes: o começo (parado, pronto), o meio (a força acontecendo) e o fim (o golpe ou o ponto mais alto do pulo). Com três a quatro frames bem escolhidos já dá para sentir o movimento. Menos é mais, e isso protege a criança de se cansar desenhando coisas demais.

A novidade técnica que aprofundamos é a tag. Cada animação ganha um nome e uma cor de etiqueta na linha do tempo (Timeline), por exemplo "andar", "ataque" ou "pulo". A tag funciona como uma gavetinha: ela separa os frames do andar dos frames do novo poder, para que no Play um movimento não se misture com o outro. Saber organizar em tags é exatamente o que vai permitir, mais para a frente no mês, exportar cada animação certinha para o jogo.

O fechamento é sempre o teste e o compartilhar. A criança aperta Play, vê o herói golpeando ou pulando, ajusta a velocidade se precisar e mostra o poder para a turma. Errar e ajustar faz parte: animação é tentar, olhar e melhorar.`,
  materiais: [
    `Computadores com o Aseprite já aberto, um por criança, com o sprite do herói do mês carregado`,
    `Projetor ou TV ligado no computador do professor para demonstrar cada passo ao vivo`,
    `Dois exemplos prontos salvos pelo professor: um ataque (braço golpeando) e um pulo (corpo esticando e subindo), já com tags criadas`,
    `Folha de rascunho e lápis para a criança desenhar a "pose do poder" antes de ir para a tela`,
    `Cartões grandes com as palavras ATAQUE e PULO para a criança escolher e mostrar`,
    `Mouse confortável em cada estação (facilita desenhar pixel a pixel)`,
    `Lista de presença com o poder escolhido por cada aluno, para retomar na próxima aula`,
  ],
  conceitosChave: [
    `Frame-chave — o quadrinho mais importante de um movimento, o momento que conta a história da ação (a hora do golpe ou o ponto mais alto do pulo).`,
    `Ataque — animação em que o braço do herói sai do corpo e golpeia para a frente, bem rápido.`,
    `Pulo — animação em que o corpo se estica para cima, sobe no ar e depois volta a cair.`,
    `Tag — uma etiqueta colorida com nome na linha do tempo que guarda os frames de uma animação só, como uma gavetinha.`,
    `Pose — o jeito que o corpo do personagem fica em cada frame; mudar a pose faz parecer que ele se mexe.`,
    `Play — o botão de brincar que faz os frames passarem em sequência para a gente ver o movimento acontecer.`,
    `Antecipação — quando o herói "junta força" antes do golpe ou do pulo, dando um agachadinho rápido antes de explodir a ação.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula cada aluno cria UMA ação especial: ataque ou pulo. Você não precisa dominar o Aseprite; precisa conhecer três lugares na tela. A Timeline (linha do tempo) fica embaixo: é onde aparecem os frames numerados. O botão de novo frame é o ícone de "+" (ou tecla Alt+N) logo acima da Timeline. E as tags são criadas com clique direito na régua de frames, escolhendo "New Tag". Tag é só uma etiqueta colorida que agrupa frames de uma animação. Faça os dois exemplos prontos em casa antes da aula: assim você demonstra rápido e ganha confiança.

A regra de ouro do dia: poucos frames, bem escolhidos. Três a quatro frames já entregam a ação. Não deixe a criança desenhar dez quadrinhos; ela cansa e desiste.

## Passo a passo da aula (10/15/25/10)

Aquecimento (10 min). Abra o sprite do herói andando da aula passada no projetor. Aperte Play para relembrar. Mostre os cartões ATAQUE e PULO e pergunte: "Qual poder o seu herói vai ganhar?". Cada criança escolhe e desenha a pose do poder no rascunho, bem rápido.

Conteúdo novo guiado (15 min). No projetor, com o herói parado no frame 1, ensine os frames-chave. Para o ATAQUE: clique no "+" para criar o frame 2 e desenhe o braço começando a subir; crie o frame 3 com o braço esticado para a frente (a hora do golpe). Para o PULO: frame 2 com o herói agachadinho juntando força (antecipação), frame 3 com o corpo todo esticado para cima. Em seguida, crie a TAG: clique com o botão direito sobre os números dos frames na Timeline, escolha "New Tag", digite o nome ("ataque" ou "pulo") e escolha uma cor. Aperte Play e mostre o poder funcionando.

Mão na massa (25 min). Cada criança faz a sua ação no próprio Aseprite. Circule pela sala. Garanta que todos: (1) começaram do frame parado, (2) criaram 2 ou 3 frames novos com o "+", (3) mudaram a pose em cada frame, (4) criaram a tag com o nome certo. Quem terminar cedo ajusta a velocidade em Frame Properties (clique duplo no frame) ou capricha em um detalhe, como uma linha de força no golpe.

Desafio e compartilhar (10 min). Desafio: adicione um frame final de "volta ao normal" (o herói voltando para a pose parada depois do golpe ou caindo do pulo). Depois cada criança aperta Play e mostra o poder para a turma, dizendo o nome da tag.

## Como explicar para crianças

Use a ideia de história em três fotos: "foto do começo" (o herói pronto), "foto da força" (juntando energia) e "foto do golpe" (a explosão do poder). Para a tag, diga que é uma gavetinha com etiqueta: "a gaveta do ataque guarda só os desenhos do ataque, e a gaveta do andar guarda só os de andar; assim eles não se misturam". Para a antecipação do pulo, peça que a própria criança se agache e pule de verdade: o corpo "junta força" antes de subir, e o desenho faz igual.

## Erros comuns e como ajudar

Desenhar frames demais: lembre "três fotos bastam" e mostre seu exemplo curto. Esquecer de criar frame novo e desenhar por cima do mesmo: aponte o número do frame na Timeline e mostre o "+" antes de cada desenho. Pose igual nos frames: peça para mover o braço ou esticar mais o corpo, exagerando bem. Esquecer a tag, ou criar tag pegando os frames errados: confira juntos se a etiqueta colorida cobre exatamente os frames daquela ação. Mistura com o andar: garanta que a tag "andar" e a tag "ataque"/"pulo" sejam separadas. Play muito rápido ou muito lento: ajuste o tempo em Frame Properties, sem pressa.`,
  exercicios: [
    {
      titulo: `Qual é o frame do golpe?`,
      tipo: `Aquecimento oral coletivo`,
      tempo: `5 minutos`,
      guiaProfessor: `No projetor, passe um ataque pronto frame a frame usando as setas do teclado. Pare em cada frame e pergunte à turma qual deles é "a hora do golpe".`,
      atividade: `As crianças apontam e dizem em voz alta qual frame mostra o braço esticado golpeando para a frente.`,
      gabarito: `O frame do golpe é aquele em que o braço está totalmente esticado para a frente, longe do corpo. É o último frame da força, o momento mais importante da ação.`,
    },
    {
      titulo: `Escolha o seu poder e desenhe a pose`,
      tipo: `Decisão e rascunho no papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre os cartões ATAQUE e PULO. Cada criança escolhe um e desenha no rascunho a "pose mais forte" do poder antes de ir para a tela. Anote a escolha na lista.`,
      atividade: `A criança decide entre ataque ou pulo e desenha no papel a pose principal: o braço esticado (ataque) ou o corpo bem esticado para cima (pulo).`,
      gabarito: `Não existe escolha errada. O desenho está certo se mostra claramente a ação: no ataque, o braço sai do corpo e vai para a frente; no pulo, o corpo fica comprido e esticado para cima. Qualquer um dos dois é válido.`,
    },
    {
      titulo: `Três frames para a minha ação`,
      tipo: `Mão na massa guiada no Aseprite`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe cada criança criando os frames com o botão "+" (ou Alt+N). Lembre sempre: criar o frame novo ANTES de desenhar. Confira que a pose muda de um frame para o outro.`,
      atividade: `Partindo do herói parado no frame 1, a criança cria o frame 2 (juntando força) e o frame 3 (golpe ou ponto mais alto do pulo), mudando a pose em cada um.`,
      gabarito: `A ação está correta quando há pelo menos três frames diferentes: frame 1 parado, frame 2 com a força sendo juntada e frame 3 com a ação no auge. Cada frame deve ter uma pose visivelmente diferente da anterior.`,
    },
    {
      titulo: `Guardando na gavetinha: criar a tag`,
      tipo: `Organização na Timeline`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre no projetor: clique direito sobre os números dos frames da ação, escolha "New Tag", digite o nome ("ataque" ou "pulo") e uma cor. Depois cada criança faz no seu projeto e aperta Play.`,
      atividade: `A criança seleciona os frames da sua ação, cria uma tag com o nome certo e cor própria, e aperta Play para ver só aquele movimento rodando.`,
      gabarito: `A tag está correta quando a etiqueta colorida cobre exatamente os frames daquela ação (e nenhum frame do andar), tem o nome certo escrito ("ataque" ou "pulo") e, ao apertar Play, mostra somente o poder, sem misturar com o caminhar.`,
    },
    {
      titulo: `Desafio: a volta ao normal`,
      tipo: `Desafio criativo e compartilhar`,
      tempo: `7 minutos`,
      guiaProfessor: `Proponha um frame final de retorno à pose parada (o herói baixando o braço depois do golpe, ou caindo e ficando de pé depois do pulo). Quem conseguir ajusta a velocidade em Frame Properties e mostra para a turma.`,
      atividade: `A criança adiciona um último frame em que o herói volta para a pose parada, fechando o movimento, aperta Play e apresenta o poder dizendo o nome da tag.`,
      gabarito: `O desafio está completo quando existe um frame final que devolve o herói à posição parada, deixando a ação com começo, força, auge e volta. Ao apertar Play, o movimento parece contínuo e termina suave, e a criança consegue dizer o nome da tag que criou.`,
    },
  ],
};
