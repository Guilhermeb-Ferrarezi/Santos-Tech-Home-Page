import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Meu boneco respira",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança cria uma animação de respiração (idle) de 2 frames, duplicando o desenho do personagem e fazendo uma pequena mudança, e aperta play para ver o boneco ganhar vida.`,
  descricao: `Nesta aula a turma dá o primeiro grande passo para deixar um personagem vivo: o idle. Idle é a animação que um boneco faz quando está parado, esperando o jogador mandar ele andar ou pular. Mesmo paradinho, um personagem de jogo nunca fica totalmente congelado: ele respira, sobe e desce um pouquinho, pisca. É esse detalhe que faz a gente sentir que ali tem vida, e não só um desenho colado na tela.

Na aula passada as crianças descobriram que vários desenhos parecidos, mostrados rápido, viram movimento. Agora vamos usar essa mágica de um jeito controlado e bem pequeno: só 2 frames. No primeiro frame o personagem está parado normal. No segundo frame ele fica um tiquinho diferente, como se tivesse enchido o peito de ar. Quando o Aseprite troca rápido entre os dois, parece que o boneco respira.

O coração da aula é uma habilidade nova e poderosa: duplicar um frame. Em vez de desenhar tudo de novo (o que é difícil e demorado para a idade), a criança copia o desenho pronto e mexe só num pedacinho. Assim todo mundo consegue um resultado bonito mesmo sem ser bom de desenho, e aprende um segredo que profissionais de verdade usam: animar é repetir com pequenas mudanças.

Ao final, cada aluno aperta o play e vê seu próprio personagem respirando. Esse momento de "olha, ele tá vivo!" é o que prende a criança na trilha de criação de games e prepara o terreno para as próximas aulas, em que vamos controlar o tempo da animação e usar a folha mágica (onion skin).`,
  materiais: [
    `Computadores (1 por aluno) com o Aseprite já aberto e ligado antes da aula começar`,
    `Projetor ou TV grande ligado na máquina do professor, para todos verem onde clicar`,
    `Arquivo de exemplo pronto: um personagem simples (boneco ou bichinho) já desenhado em 1 frame, salvo como .aseprite e copiado em cada computador`,
    `Um arquivo de exemplo já animado pelo professor (idle de 2 frames pronto) para mostrar o resultado final logo no aquecimento`,
    `Folhas de papel e lápis de cor para o exercício de papel`,
    `Crachás ou etiquetas com o nome de cada aluno, para nomear e salvar os arquivos sem confusão`,
    `Lista de presença e um cronômetro visível (pode ser o relógio projetado) para controlar o ritmo de 10/15/25/10`,
  ],
  conceitosChave: [
    `Idle — é a "dancinha de parado" do personagem; o que ele faz enquanto espera o jogador, tipo respirar de leve.`,
    `Frame — é uma figurinha da animação; cada frame é um desenho que aparece bem rapidinho.`,
    `Duplicar — é copiar um frame inteiro para ter dois iguais; depois a gente muda só um pedacinho de um deles.`,
    `Respiração — fazer o personagem subir e descer um tiquinho, como quando a gente enche o peito de ar e solta.`,
    `Play — o botão de triângulo que faz os frames trocarem rápido e a animação acontecer.`,
    `Timeline — a tirinha embaixo da tela do Aseprite onde ficam todos os frames, um do ladinho do outro.`,
    `Pouquinho — a regra de ouro: no segundo frame a gente muda só um tiquinho, nunca muito, senão vira tremedeira.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Idle é a animação de um personagem parado. Em jogos, ninguém fica 100 por cento congelado: o herói respira, balança de leve, pisca. Isso é feito com pouquíssimos frames em loop (repetição). Hoje usamos o idle mais simples possível: 2 frames. Frame 1 é o personagem normal; frame 2 é o mesmo personagem com uma mudança bem pequena (o corpo sobe 1 ou 2 pixels, ou os ombros incham um tiquinho), dando a sensação de inspirar e expirar.

A técnica-chave da aula é DUPLICAR um frame em vez de redesenhar. No Aseprite, a tira de frames fica na Timeline (parte de baixo da tela). Se a Timeline não aparecer, ligue no menu superior em "View" e marque "Timeline", ou aperte a tecla de atalho (a tecla com o desenho da tira). Para duplicar: clique com o botão direito no frame na Timeline e escolha "New Frame" ou, mais simples, use "Duplicate" (atalho: Alt+N cria novo frame; para copiar o conteúdo, use o botão direito > "Duplicate Cells"). O caminho mais à prova de erro com crianças é: botão direito no frame 1 > "Duplicate Frame". Isso cria o frame 2 já com o mesmo desenho dentro.

Para apertar play, use o botão de triângulo (Play) que fica na barrinha da Timeline, ou aperte a barra de espaço (Enter também roda). A velocidade ainda não é o foco (isso é a aula 3), então deixe a padrão.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento: Abra no projetor SEU exemplo já pronto e aperte play. Diga: "Olha, o boneco tá respirando!" Pergunte o que mudou entre estar parado morto e estar respirando. Relembre a aula 1: muitos desenhos parecidos viram movimento.

15 min - Conteúdo novo guiado: No projetor, abra o arquivo de exemplo com 1 frame só. Mostre a Timeline embaixo. Clique com o botão direito no frame 1 e escolha "Duplicate Frame". Mostre que agora tem frame 1 e frame 2, iguaizinhos. Vá no frame 2, pegue a ferramenta de mover/seleção e suba o desenho UM pouquinho (ou use o lápis para engrossar o peito). Aperte play. Repita devagar 2 vezes, narrando cada clique.

25 min - Mão na massa: Cada criança abre seu arquivo de personagem. Passos na lousa/projetor sempre visíveis: 1) achar a Timeline; 2) botão direito no frame 1 > "Duplicate Frame"; 3) ir no frame 2; 4) mudar só um pouquinho (subir o corpo ou inchar o peito); 5) apertar play. Circule pela sala ajudando individualmente. Comemore cada boneco que respira.

10 min - Desafio + compartilhar: Desafie quem terminou a fazer o personagem subir um tiquinho a MAIS no frame 2. Depois, rode a sala: cada um aperta play no seu e mostra para os colegas.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use o corpo: peça para todos encherem o peito de ar e soltarem, várias vezes. "Viram como a gente sobe e desce? O boneco vai fazer igual." Chame os frames de "figurinhas" e a duplicação de "fazer um irmão gêmeo da figurinha". Diga: "A gente faz um gêmeo e muda só um cabelinho dele." Reforce a regra de ouro como uma musiquinha: "só um pouquinho, só um tiquinho". Evite palavras como "pixel", "camada" ou "loop"; fale "quadradinho", "desenho de cima" e "fica repetindo".

## Erros comuns e como ajudar

1) Redesenhar tudo no frame 2: a criança apaga e tenta desenhar de novo. Pare e mostre de novo o "Duplicate Frame" - ela não precisa desenhar nada.
2) Mudar demais: o boneco fica diferente demais e parece pular, não respirar. Lembre "só um tiquinho" e desfaça com Ctrl+Z.
3) Mexer no frame errado: ela muda o frame 1 sem querer. Mostre como clicar no frame 2 na Timeline antes de desenhar (o frame selecionado fica destacado).
4) Não acha o play: aponte o triângulo na Timeline ou ensine a barra de espaço.
5) Apagar o frame 1: se sumir, use Ctrl+Z na hora. Salve cedo (Ctrl+S) com o nome da criança.`,
  exercicios: [
    {
      titulo: `Encher o peito de ar`,
      tipo: `Roda de conversa / aquecimento`,
      tempo: `5 minutos`,
      guiaProfessor: `Comece em roda, todos em pé. Faça junto com a turma e exagere os movimentos para a criançada copiar. Esta atividade prepara o corpo e a cabeça para entender o que é respirar antes de mexer no computador.`,
      atividade: `Todos enchem o peito de ar bem devagar e soltam, três vezes. O professor pergunta: "Quando a gente enche o ar, o corpo sobe ou desce?" e "Quando solta, o que acontece?". Em seguida cada criança imita um boneco de videogame parado, respirando de leve.`,
      gabarito: `A criança percebe e fala que ao encher o peito o corpo sobe um pouquinho e ao soltar ele desce. Acertou quando consegue imitar um personagem parado respirando, fazendo um movimento PEQUENO de subir e descer (e não pulando ou se mexendo muito).`,
    },
    {
      titulo: `O gêmeo da figurinha`,
      tipo: `Prática na ferramenta (guiada)`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça no projetor primeiro, passo a passo, e só depois peça para as crianças repetirem no próprio computador. Foque APENAS em duplicar; ainda não mude o desenho. Garanta que todos encontraram a Timeline embaixo da tela.`,
      atividade: `Abra seu personagem. Ache a tirinha de frames embaixo (a Timeline). Clique com o botão direito no frame 1 e escolha "Duplicate Frame". Pronto: agora você tem o frame 1 e o frame 2, gêmeos iguais!`,
      gabarito: `Na Timeline aparecem DOIS frames, lado a lado, com o mesmo desenho dentro. Acertou quando a criança consegue mostrar os dois quadradinhos na tira e dizer que são gêmeos iguais.`,
    },
    {
      titulo: `Só um tiquinho`,
      tipo: `Prática na ferramenta (criação)`,
      tempo: `12 minutos`,
      guiaProfessor: `Reforce a regra de ouro "só um pouquinho" antes de soltar a turma. Circule de mesa em mesa. Se alguém mudar demais, peça Ctrl+Z e mostre como subir o corpo apenas um tiquinho. Lembre de clicar no frame 2 antes de mexer.`,
      atividade: `Clique no frame 2 (o gêmeo). Agora mude SÓ UM POUQUINHO: suba o corpo do personagem um tiquinho para cima, ou engrosse o peito dele um cadinho com o lápis. Depois aperte o botão play (o triângulo) e veja seu boneco respirar!`,
      gabarito: `Ao apertar play, o personagem faz um pequeno movimento de subir e descer que parece respiração. Acertou quando o movimento é suave e pequeno (o boneco continua reconhecível e não fica tremendo nem pulando).`,
    },
    {
      titulo: `Desenha a respiração no papel`,
      tipo: `Desenho / papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua papel e lápis. Esta atividade ajuda a criança a entender que animar é repetir com pequena mudança, mesmo longe da tela. Mostre um exemplo seu no quadro com dois bonecos quase iguais.`,
      atividade: `Desenhe o mesmo bonequinho DUAS vezes, lado a lado. No primeiro, ele está parado normal. No segundo, ele está com o peito um tiquinho maior, como se tivesse enchido de ar. Pinte os dois iguais.`,
      gabarito: `O papel tem dois desenhos parecidos do mesmo boneco, com uma única diferença pequena (peito maior ou corpo mais alto) no segundo. Acertou quando dá para ver que são o mesmo personagem com uma mudancinha de respiração, não dois bonecos diferentes.`,
    },
    {
      titulo: `Respiração turbinada`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Proponha só para quem já terminou o idle básico e quer ir além. Acompanhe de perto para que o aluno não exagere e perca o efeito de respiração. É a hora de testar e comparar.`,
      atividade: `Volte no frame 2 e suba o personagem só MAIS um tiquinho do que antes. Aperte play e compare: ficou uma respiração mais forte? Se ficou estranho ou tremido, use Ctrl+Z e volte um pouco. Escolha a versão que mais parece respiração de verdade.`,
      gabarito: `A criança compara duas intensidades e escolhe a que parece respiração natural. Acertou quando percebe que mudar demais estraga o efeito (vira pulo/tremedeira) e consegue explicar que o segredo é mudar só um pouquinho.`,
    },
  ],
};
