import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Heróis em Movimento",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança consegue importar para o Construct 3 os desenhos que fez no Aseprite e montá-los como animações do herói (parado, andando e pulando), dando um nome a cada animação.`,
  descricao: `Esta é a primeira aula do mês em que vamos fechar e publicar o nosso jogo 2D. Antes de tudo, precisamos dar vida ao herói. Nas semanas do Aseprite, cada criança desenhou os quadrinhos (frames) do seu personagem: ele paradinho, ele andando e ele pulando. Hoje esses desenhos saem do Aseprite e entram no Construct 3 para virar movimento de verdade dentro do jogo.

A ideia central é simples e encantadora: uma animação é só um monte de desenhos parecidos, mostrados bem rápido um depois do outro, como um desenho animado ou um flipbook (aquele caderninho que a gente folheia com o dedão e a figura mexe). No Construct 3, cada personagem é um objeto do tipo Sprite, e dentro dele existe um lugar especial, o editor de animação, onde guardamos esses quadrinhos em uma linha do tempo. A criança vai importar os frames, colocá-los em ordem e dar um nome para cada conjunto: "Parado", "Andando", "Pulando".

Por que isso importa? Porque nas próximas aulas o herói vai reagir, andar pelo cenário, enfrentar inimigos e pular obstáculos. Tudo isso só fica bonito se as animações estiverem prontas e bem nomeadas agora. Se a animação se chama "Andando", depois é fácil mandar o jogo tocar "Andando" quando a criança aperta a seta. Organizar e nomear hoje economiza confusão lá na frente.

Como a turma é de crianças de 5 a 9 anos, com leitura e escrita ainda em formação, o professor demonstra cada passo no projetor antes e depois acompanha de perto. A palavra de ordem é "olhar e fazer junto": pouco texto, muito apontar com o dedo na tela e muita comemoração a cada bonequinho que ganha vida.`,
  materiais: [
    `Um computador por criança (ou um para cada dupla) com o Construct 3 já aberto no editor e o projeto do jogo do mês carregado antes da aula começar.`,
    `As imagens dos frames de cada criança (feitas no Aseprite) já salvas em uma pasta organizada por aluno, prontas para importar.`,
    `Projetor ou TV grande ligada ao computador do professor, para demonstrar cada passo ampliado.`,
    `Um mouse de verdade para cada computador (criança pequena tem dificuldade de arrastar e clicar com precisão no touchpad).`,
    `Um exemplo pronto feito pelo professor: um Sprite com as três animações (Parado, Andando, Pulando) já montadas, para mostrar o resultado final.`,
    `Crachás ou etiquetas com o nome de cada criança e adesivos para premiar quem terminar de nomear as três animações.`,
    `Um flipbook de papel simples (ou várias folhinhas com um bonequinho desenhado em poses diferentes) para a analogia do desenho animado.`,
  ],
  conceitosChave: [
    `Frame (quadrinho) — cada desenho separado do personagem; juntando vários quadrinhos parecidos a gente faz o movimento.`,
    `Animação — vários quadrinhos mostrados bem rápido, um depois do outro, que dão a impressão de que o personagem está se mexendo.`,
    `Sprite — o objeto do Construct 3 que guarda o nosso personagem e todas as animações dele dentro de uma caixinha só.`,
    `Importar — trazer para o Construct 3 os desenhos que a gente fez em outro programa, o Aseprite.`,
    `Linha do tempo — a fileira de quadrinhos em ordem, do primeiro ao último, que mostra como a animação acontece.`,
    `Nome da animação — o apelido que damos para cada conjunto de quadrinhos ("Parado", "Andando", "Pulando") para achar e usar depois.`,
    `Editor de animação — a janelinha dentro do Sprite onde a gente coloca os quadrinhos, vê a linha do tempo e dá os nomes.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

No Construct 3, todo personagem visível é um objeto do tipo Sprite. Cada Sprite pode guardar várias animações, e cada animação é uma sequência de frames (quadrinhos). Quando você dá um duplo clique em um Sprite no layout (ou no painel Project, à direita), abre-se o editor de imagem/animação. Nele há três áreas importantes: a tela de desenho no centro; o painel "Animations" (Animações), normalmente no canto inferior esquerdo, que lista os nomes das animações; e o painel "Animation frames" (Quadros da animação), na faixa de baixo, que mostra a linha do tempo com os quadrinhos em ordem.

Para trazer os desenhos do Aseprite: no editor de animação, clique com o botão direito dentro do painel de frames e escolha "Import frames" e depois "From files" (Importar quadros, de arquivos). Selecione todas as imagens daquela animação de uma vez (segurando Ctrl para marcar várias). Os frames entram na ordem dos nomes dos arquivos, por isso vale a pena que estejam nomeados em ordem (andando_1, andando_2, andando_3...). Você apaga o frame em branco que vem por padrão clicando nele e apertando Delete.

Para criar e nomear animações: no painel "Animations", clique com o botão direito e escolha "Add animation" (Adicionar animação). Dê um duplo clique no nome (que vem como "Animation 2") e renomeie para "Andando", "Pulando" etc. Importante: a animação que já vem criada chama-se "Default"; renomeie-a para "Parado". Para conferir o movimento, há um botão de Play (►) no editor que reproduz a animação selecionada. A velocidade fica na propriedade "Speed" da animação. Nesta aula o foco é importar, ordenar e nomear; ajustes finos de velocidade são bônus.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Construct 3)

Aquecimento (10 min): reúna a turma longe dos computadores. Folheie o flipbook de papel e mostre o bonequinho se mexendo. Pergunte: "como esse desenho parado virou movimento?". Conduza até a ideia de "vários quadrinhos rápidos". Conte que hoje os desenhos do Aseprite vão virar movimento dentro do jogo.

Conteúdo novo guiado (15 min): no projetor, com o Construct 3 aberto, dê um duplo clique no Sprite do herói para abrir o editor de animação. Aponte os painéis "Animations" e "Animation frames". Demonstre devagar uma animação só (Andando): botão direito no painel de frames, "Import frames", "From files", selecione as imagens, OK. Apague o frame em branco. Renomeie a "Default" para "Parado". Aperte Play para ver o boneco mexer. Faça cada passo duas vezes, falando em voz alta.

Mão na massa (25 min): cada criança no seu computador, com o Sprite e a pasta de imagens prontos. Um passo de cada vez: primeiro todos importam os frames de "Parado" e renomeiam; depois "Andando"; depois "Pulando". Circule pela sala, ajoelhe ao lado de cada um, guie a mão se preciso. Mande apertar Play e comemore cada herói que ganha vida.

Desafio e compartilhar (10 min): proponha que cada criança aperte Play nas três animações e escolha a sua favorita. Faça uma volta rápida: cada um mostra a tela e diz o nome da animação predileta. Encerre com adesivo para todos.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use sempre o flipbook como imagem mental: "animação é um caderninho de desenhos que a gente passa rápido e o boneco mexe". Chame os frames de "quadrinhos" e a animação de "filminho do herói". Diga que o Sprite é "a caixinha onde o herói mora com todos os filminhos dele". Importar é "trazer os desenhos do Aseprite para cá". Nomear é "dar apelido para cada filminho, para a gente achar depois". Evite termos técnicos como "viewport" ou "frame rate". Frases curtas, mostre antes de pedir e use o corpo: peça que andem no lugar enquanto dizem "andando", pulem dizendo "pulando", fiquem estátua dizendo "parado".

## Erros comuns e como ajudar

A criança esquece de apagar o frame em branco e a animação pisca um vazio: mostre como clicar no quadrinho branco e apertar Delete. Os frames entram fora de ordem porque os arquivos não estavam numerados: organize a pasta antes da aula e, se acontecer, ensine a arrastar o quadrinho para o lugar certo na linha do tempo. A criança importa os desenhos na animação errada (joga "pulando" dentro de "parado"): pause, mostre que cada nome tem a sua linha de quadrinhos e refaça junto. Confusão entre renomear o objeto e renomear a animação: reforce que hoje só damos apelido às animações no painel "Animations". Quem terminar rápido pode apertar Play e brincar de ver o herói mexer enquanto você ajuda os outros.`,
  exercicios: [
    {
      titulo: `O filminho do flipbook`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Longe dos computadores, folheie o flipbook de papel devagar e depois rápido. Pergunte o que faz o boneco mexer. Conduza com calma até a ideia de "vários quadrinhos parecidos passando rápido". Valorize cada resposta.`,
      atividade: `Olhe o professor passar o flipbook. Responda em voz alta: o boneco está mesmo andando ou são vários desenhos passando rápido? O que precisamos juntar para ter um movimento?`,
      gabarito: `Respostas certas dizem que são vários desenhos (quadrinhos/frames) parecidos, mostrados rápido um depois do outro, que dão a impressão de movimento. Acertou quem liga a ideia de "muitos quadrinhos rápidos" a "animação".`,
    },
    {
      titulo: `Abrindo a caixinha do herói`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor. Peça que cada criança dê um duplo clique no Sprite do herói para abrir o editor de animação e aponte com o dedo onde fica o painel de quadrinhos. Não importe nada ainda; só localizar.`,
      atividade: `Dê um duplo clique no seu herói para abrir a caixinha de animação. Agora aponte com o dedo na tela: onde ficam os quadrinhos (a linha do tempo) e onde ficam os nomes das animações?`,
      gabarito: `A criança abre o editor de animação com duplo clique e aponta corretamente o painel de frames (faixa de quadrinhos embaixo) e o painel Animations (lista de nomes). Acertou se distingue a área dos quadrinhos da área dos nomes.`,
    },
    {
      titulo: `Trazendo o "Parado" do Aseprite`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Faça junto, um passo de cada vez. Botão direito no painel de frames, "Import frames", "From files", selecionar as imagens de "parado", OK. Apagar o frame em branco. Renomear a animação "Default" para "Parado". Circule e ajude a selecionar vários arquivos com Ctrl.`,
      atividade: `Vamos trazer o herói paradinho: clique com o botão direito nos quadrinhos, escolha importar de arquivos e selecione os desenhos do "parado". Apague o quadrinho branco que sobrar. Depois troque o nome da animação para "Parado".`,
      gabarito: `A criança importa os frames de "parado", remove o frame em branco e renomeia a animação para "Parado". Acertou se o painel mostra os quadrinhos certos e o nome "Parado" aparece na lista de animações.`,
    },
    {
      titulo: `Andando e Pulando, cada um na sua fileira`,
      tipo: `Prática na ferramenta`,
      tempo: `15 minutos`,
      guiaProfessor: `Agora a criança cria animações novas. No painel Animations, botão direito, "Add animation"; renomear para "Andando"; importar os frames de andar; repetir para "Pulando". Reforce que cada nome tem a sua própria fileira de quadrinhos. Apoie quem misturar.`,
      atividade: `Crie uma animação nova e dê o nome "Andando"; importe nela só os quadrinhos de andar. Faça de novo para criar "Pulando" e coloque só os quadrinhos de pular. Cada filminho na sua fileira certinha!`,
      gabarito: `A criança tem três animações nomeadas (Parado, Andando, Pulando), cada uma com os frames corretos e na ordem certa. Acertou se nenhuma animação está misturada e os três nomes aparecem na lista.`,
    },
    {
      titulo: `Desafio: dê o Play e mostre seu herói`,
      tipo: `Desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça que selecionem cada animação e apertem o botão Play (►) para conferir o movimento. Quem notar um quadrinho fora de ordem deve arrastá-lo para o lugar. No fim, cada criança mostra a animação favorita e diz o nome dela em voz alta. Aplauda todos.`,
      atividade: `Clique em cada animação e aperte o Play para ver o herói mexer. O movimento ficou certinho ou tem algum quadrinho fora de lugar? Conserte se precisar. Depois mostre para a turma sua animação favorita e diga o nome dela.`,
      gabarito: `A criança reproduz as três animações com o botão Play, percebe e corrige frames fora de ordem e apresenta uma animação dizendo o nome correto. Acertou se o herói se move de forma fluida e a criança identifica a animação pelo nome (Parado, Andando ou Pulando).`,
    },
  ],
};
