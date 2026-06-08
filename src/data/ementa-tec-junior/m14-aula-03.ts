import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Meu gesto vira comando",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ligar gestos reconhecidos pela IA da Teachable Machine a movimentos de um personagem no Scratch, entendendo a ideia de que cada gesto vira um comando.`,
  descricao: `Nas aulas anteriores, as crianças descobriram que a inteligência artificial consegue ver pela câmera e conversar com o Scratch. Nesta aula, damos um passo muito empolgante: o corpo da criança vira o controle do jogo. Em vez de apertar uma tecla ou clicar com o mouse, a criança levanta a mão ou estica o braço para o lado, e a IA reconhece esse gesto e manda o personagem se mexer. É como ter um controle invisível feito do próprio corpo.

A ideia central é simples e poderosa: gesto igual a ação. Cada gesto que a IA aprende a reconhecer funciona como um botão mágico. Quando a IA vê a mão para cima, o personagem pula ou sobe. Quando vê a mão para o lado, o personagem anda. As crianças treinam a Teachable Machine com fotos de cada gesto, depois conectam esse modelo ao Scratch e, no bloco de programação, dizem o que acontece para cada gesto reconhecido.

Esse momento costuma encantar a turma porque o resultado é imediato e visível: a criança se mexe e o gato responde na hora. É puro mão na massa. O professor não precisa ser especialista; basta seguir os passos com calma, mostrar no projetor cada clique e deixar as crianças experimentarem bastante. A repetição de fotos no treino e o teste ao vivo são as partes mais divertidas.

Ao final, cada criança terá um pequeno experimento em que dois gestos diferentes controlam o personagem na tela. Isso prepara o terreno para o controle por voz na próxima aula e para o mini-projeto que virá depois, em que tudo isso se junta num jogo de verdade.`,
  materiais: [
    `Computadores com a Teachable Machine aberta no navegador (site teachablemachine.withgoogle.com) e o Scratch aberto em outra aba`,
    `Webcam funcionando em cada computador, com a permissão de câmera já aceita`,
    `Projetor ou tela grande para o professor demonstrar cada clique`,
    `Um projeto-exemplo pronto no Scratch, com o gato que pula e anda conforme o gesto`,
    `Cartões impressos com desenhos dos gestos (mão para cima e mão para o lado) para as crianças imitarem`,
    `Fones de ouvido opcionais e um espaço livre na frente da câmera para a criança se mexer`,
    `Lista de presença e adesivos de recompensa para quem ajudar o colega`,
  ],
  conceitosChave: [
    `Gesto — um jeito de mexer o corpo, como levantar a mão ou esticar o braço, que a câmera consegue ver.`,
    `Comando — uma ordem que mandamos para o computador, como "pule" ou "ande".`,
    `Gesto igual a ação — a regra mágica da aula: cada gesto que a IA vê vira um movimento do personagem.`,
    `Classe — uma caixinha na Teachable Machine onde guardamos as fotos de um mesmo gesto.`,
    `Treinar — mostrar muitas fotos para a IA aprender a diferença entre os gestos.`,
    `Reconhecer — quando a IA olha pela câmera e descobre qual gesto você está fazendo.`,
    `Bloco "quando" — a peça do Scratch que faz o personagem reagir assim que um gesto é reconhecido.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai usar duas ferramentas juntas: a Teachable Machine, que aprende a reconhecer gestos pela câmera, e o Scratch, onde o personagem se mexe. A ponte entre elas é a extensão da Teachable Machine dentro do Scratch (no site machinelearningforkids ou na versão Scratch que a escola já usa, a extensão aparece no menu de blocos com o ícone de braço de robô). Não precisa decorar nada: o segredo é treinar a IA com fotos repetidas e depois ligar cada gesto a um bloco. Antes da aula, faça o passo a passo uma vez sozinho e deixe o projeto-exemplo aberto. Teste a câmera e a luz da sala, porque pouca luz atrapalha o reconhecimento.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Receba a turma e relembre a aula passada com uma pergunta: "Como a IA conseguiu ver o gato reagir?". Faça o jogo do espelho: você diz "mão para cima" e todos levantam a mão; diz "mão para o lado" e todos esticam o braço. Mostre os cartões dos gestos. Explique que hoje esses gestos vão virar comandos para o personagem.

Conteúdo novo guiado (15 min): No projetor, abra a Teachable Machine e clique em "Get Started", depois em "Image Project" e em "Standard image model". Renomeie a "Class 1" para "Mão para cima" e a "Class 2" para "Mão para o lado" (clique no lápis ao lado do nome). Clique em "Webcam" dentro de cada classe e segure o gesto enquanto clica em "Hold to Record" para juntar muitas fotos. Faça umas 30 fotos por gesto. Depois clique no botão grande "Train Model" e espere. Quando terminar, mostre a janela "Preview" à direita: faça o gesto e veja a barrinha encher na classe certa. Diga: "Olha, a IA reconheceu!".

Mão na massa (25 min): As crianças repetem nos seus computadores. Oriente cada uma a criar as duas classes, gravar as fotos e treinar. Depois, no Scratch, abra o projeto-exemplo e mostre a extensão da Teachable Machine no canto inferior esquerdo (ícone de blocos). Conecte o modelo treinado. No código, monte: bloco "quando reconhecer Mão para cima" ligado a "mude y por 50" (sobe); e "quando reconhecer Mão para o lado" ligado a "mude x por 10" (anda). Clique na bandeira verde e deixe a criança testar com o corpo. Circule pela sala ajudando a posicionar a câmera.

Desafio e compartilhar (10 min): Proponha o desafio: "Faça o gato voltar para o meio quando você abaixar as duas mãos" (uma terceira classe simples). Quem conseguir, mostra para a turma no projetor. Termine com a frase-chave: "Meu gesto virou comando!".

## Como explicar para crianças

Use a analogia do controle invisível: "O controle do videogame tem botões; hoje os botões são os seus gestos". Diga que a câmera é o olho da IA e que cada gesto é um botão mágico. Reforce sempre a regra "gesto igual a ação": mão para cima faz o gato subir, mão para o lado faz o gato andar. Peça que digam em voz alta o que cada gesto faz antes de testar, para fixar a ideia. Comemore cada acerto com entusiasmo, porque ver o personagem obedecer ao próprio corpo é mágico para a idade.

## Erros comuns e como ajudar

O erro mais comum é gravar poucas fotos: lembre que a IA precisa de muitas fotos para aprender. Outro erro é a criança fazer o gesto sempre no mesmo lugar; peça que varie um pouco a posição durante a gravação. Se a IA confunde os gestos, a luz pode estar fraca ou o fundo bagunçado; aproxime a criança da janela ou de uma luz. Se nada acontece no Scratch, verifique se o modelo foi conectado e se a bandeira verde foi clicada. Se a câmera não liga, confira a permissão no navegador. Tenha paciência e celebre cada tentativa.`,
  exercicios: [
    {
      titulo: `Imitando os gestos`,
      tipo: `Aquecimento corporal`,
      tempo: `5 minutos`,
      guiaProfessor: `Use os cartões dos gestos. Mostre um cartão por vez e peça que toda a turma imite. Faça rápido e brincando, como um jogo de espelho. Observe se todos entenderam a diferença entre "mão para cima" e "mão para o lado".`,
      atividade: `Olhe o cartão que o professor mostrar e faça o mesmo gesto com o corpo, bem rápido. Quando ele disser "mão para cima", levante a mão; quando disser "mão para o lado", estique o braço.`,
      gabarito: `Mão para cima: braço levantado acima da cabeça. Mão para o lado: braço esticado para o lado do corpo, na altura do ombro. O objetivo é que todas as crianças façam os dois gestos de forma clara e diferente um do outro.`,
    },
    {
      titulo: `Criando as classes na Teachable Machine`,
      tipo: `Prática guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor onde fica o lápis para renomear cada classe. Acompanhe as crianças clicando junto: "Image Project", duas classes, nomes "Mão para cima" e "Mão para o lado". Verifique se cada criança nomeou as duas caixinhas.`,
      atividade: `Abra a Teachable Machine, escolha "Image Project". Clique no lápis e troque o nome da Class 1 para "Mão para cima" e o da Class 2 para "Mão para o lado". Mostre a tela pronta para o professor.`,
      gabarito: `O projeto deve ter exatamente duas classes nomeadas: "Mão para cima" e "Mão para o lado". Não pode sobrar nenhuma classe com nome "Class 1" ou "Class 2". Cada caixinha ainda está vazia, sem fotos, neste momento.`,
    },
    {
      titulo: `Gravando as fotos e treinando a IA`,
      tipo: `Mão na massa`,
      tempo: `10 minutos`,
      guiaProfessor: `Lembre a regra: muitas fotos para a IA aprender bem. Oriente a usar o "Hold to Record" segurando o gesto. Peça cerca de 30 fotos por classe. Depois mostre o botão "Train Model" e espere o treino terminar com a turma.`,
      atividade: `Em cada classe, clique em "Webcam" e segure "Hold to Record" enquanto faz o gesto certo, juntando muitas fotos. Faça isso nas duas classes. Depois clique em "Train Model" e espere a IA aprender.`,
      gabarito: `Cada classe deve ter por volta de 30 fotos do gesto correto (mão para cima na primeira, mão para o lado na segunda). Após clicar em "Train Model", o painel "Preview" aparece à direita, mostrando que o modelo foi treinado e está pronto para reconhecer.`,
    },
    {
      titulo: `Ligando o gesto ao movimento no Scratch`,
      tipo: `Programação guiada`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre a extensão da Teachable Machine no Scratch e como conectar o modelo. Ajude a montar dois blocos "quando reconhecer". Reforce a regra "gesto igual a ação" enquanto a criança encaixa cada peça. Clique na bandeira verde com a turma.`,
      atividade: `No Scratch, conecte seu modelo treinado. Monte: "quando reconhecer Mão para cima" mais "mude y por 50" (o gato sobe) e "quando reconhecer Mão para o lado" mais "mude x por 10" (o gato anda). Clique na bandeira verde e teste com o corpo.`,
      gabarito: `O código deve ter dois conjuntos de blocos. Primeiro: bloco "quando reconhecer Mão para cima" ligado a "mude y por 50". Segundo: bloco "quando reconhecer Mão para o lado" ligado a "mude x por 10". Ao fazer o gesto na frente da câmera, o gato sobe ou anda corretamente.`,
    },
    {
      titulo: `Desafio do gesto extra`,
      tipo: `Desafio e compartilhar`,
      tempo: `7 minutos`,
      guiaProfessor: `Proponha criar uma terceira classe, "Duas mãos abaixadas", com novas fotos e novo treino, ligada a um bloco que leva o gato ao centro. Ajude quem travar e convide quem conseguir a mostrar no projetor. Encerre com a frase "Meu gesto virou comando!".`,
      atividade: `Crie uma classe nova chamada "Duas mãos abaixadas", grave fotos, treine de novo e, no Scratch, ligue esse gesto a "vá para x: 0 y: 0" para o gato voltar ao meio. Teste e mostre para a turma.`,
      gabarito: `Existe uma terceira classe treinada chamada "Duas mãos abaixadas". No Scratch, o bloco "quando reconhecer Duas mãos abaixadas" está ligado a "vá para x: 0 y: 0". Ao abaixar as duas mãos na câmera, o gato volta para o centro da tela. O desafio está completo quando os três gestos funcionam.`,
    },
  ],
};
