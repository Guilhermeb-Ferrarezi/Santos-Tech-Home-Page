import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Heróis, Vilões e Detalhes",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Finalizar o herói com cores, rosto e acessórios, criar um segundo personagem (vilão ou amigo) e salvar cada um como asset separado.`,
  descricao: `Nesta aula a turma dá o passo mais empolgante da criação de personagens: transformar um boneco de blocos sem graça em um herói cheio de personalidade e, em seguida, inventar um companheiro para ele. Continuamos no MagicaVoxel, a mesma ferramenta dos últimos meses, agora aprofundando a modelagem com cores bem escolhidas, um rostinho expressivo e pequenos acessórios que contam uma história. Um capacete, uma capa, uma máscara ou um chapéu mudam tudo: é o que separa um herói de um vilão.

O grande conceito do dia é que personagens não vivem sozinhos em um jogo. Todo herói precisa de alguém para enfrentar ou de um amigo para ajudar. Por isso, depois de terminar o primeiro personagem, cada criança vai criar um segundo: um vilão assustador ou um amigo simpático. Eles vão perceber, na prática, que dá para reaproveitar a base de blocos do primeiro boneco e só trocar cores e acessórios para gerar uma criatura completamente nova.

Outro ponto técnico importante é a comparação de tamanhos. Em um jogo de verdade, o herói e o vilão precisam parecer da mesma família visual: nem um gigante ao lado de uma formiguinha (a não ser que essa seja a intenção). As crianças vão olhar os dois bonecos lado a lado na cena e ajustar a altura para que combinem. Isso treina o olhar de quem cria mundos coerentes.

Por fim, reforçamos uma rotina profissional que vem sendo construída o mês todo: salvar cada personagem como um arquivo separado, com nome claro. Cada boneco é um asset, uma pecinha do jogo que poderá ser usada depois no Roblox. Ao final da aula, a turma terá pelo menos dois assets de personagem prontos e bem guardados na galeria do projeto.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto e o arquivo do herói da Aula 5 carregado`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar cada passo`,
    `Exemplos prontos de um herói e de um vilão em voxel (arquivos .vox) para mostrar no início`,
    `Folha impressa de "carteirinha do personagem" para a criança anotar nome, cor e acessório`,
    `Cartões com palavras de emoção (bravo, feliz, assustado) para inspirar o rosto`,
    `Lápis de cor ou giz de cera para rascunhar o vilão antes de modelar`,
    `Pasta ou local combinado no computador onde cada asset salvo deve ser guardado`,
  ],
  conceitosChave: [
    `Herói — o personagem bonzinho do jogo, aquele que a gente controla e torce para vencer.`,
    `Vilão — o personagem mau ou atrapalhado que cria problemas para o herói na história.`,
    `Acessório — uma pecinha extra como capacete, capa ou máscara que dá personalidade ao boneco.`,
    `Asset — cada pedacinho do jogo guardado em um arquivo próprio; aqui, cada personagem é um asset.`,
    `Paleta — a caixinha de cores do MagicaVoxel de onde escolhemos a tinta de cada bloco.`,
    `Escala — o tamanho de um personagem comparado com o outro, para que eles combinem na cena.`,
    `Voxel — o cubinho mágico, o tijolinho 3D que usamos para construir tudo no MagicaVoxel.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista nem dominar o MagicaVoxel. Esta aula usa apenas três ferramentas da barra da esquerda: o pincel (ícone "Attach", que adiciona voxels), a borracha (ícone "Erase", que apaga) e o balde de tinta (ícone "Paint", que troca a cor de um bloco sem apagá-lo). A cor é escolhida na paleta colorida que fica à direita da tela: basta clicar em um quadradinho de cor antes de pintar. Os personagens dos alunos já existem desde a Aula 5; hoje a missão é finalizar o herói e criar um segundo personagem. Deixe os dois exemplos prontos abertos para mostrar a diferença entre um herói (cores claras, rosto amigável) e um vilão (cores escuras, sobrancelha brava). Lembre-se: o objetivo é diversão e expressão, não perfeição.

## Passo a passo da aula

Aquecimento (10 min): Mostre no projetor o herói exemplo e o vilão exemplo lado a lado. Pergunte: "Quem é o mocinho? Como vocês descobriram?" Deixe que percebam que cor e cara contam a história. Peça que cada criança abra o arquivo do próprio herói da aula passada.

Conteúdo novo guiado (15 min): No seu computador, demonstre finalizar o herói. Primeiro, clique no ícone "Paint" (balde) na barra da esquerda, escolha uma cor na paleta da direita e pinte a roupa do boneco clicando nos blocos. Para o rosto, dê zoom com a rolinha do mouse, clique em "Attach", escolha preto na paleta e adicione dois voxels para os olhos e alguns para a boca. Mostre como colocar um acessório: com "Attach" e uma cor metálica, empilhe alguns voxels no topo da cabeça virando um capacete. Em seguida, demonstre criar o segundo personagem: vá no menu de cenas e clique em "World" para entender que cada objeto pode virar um novo bloco de trabalho, ou simplesmente abra um novo arquivo em "File > New". Faça um vilão rápido reusando a forma e só trocando cores.

Mão na massa (25 min): As crianças finalizam o herói (cores, rosto, um acessório) e depois criam o segundo personagem, vilão ou amigo. Circule pela sala. Incentive escolhas: "Esse vilão é de gelo ou de fogo? Que cor combina?" Ao terminar cada personagem, oriente salvar separado: "File > Save As", nome claro como "heroi_joao" e depois "vilao_joao". Coloque os dois na mesma cena por um instante para comparar a altura e ajustar com "Attach" ou "Erase" quem estiver muito diferente.

Desafio e compartilhar (10 min): Peça que cada um vire a tela e apresente os dois personagens em uma frase: "Este é o herói X e este é o vilão Y, eles brigam por..." Reforce que cada arquivo salvo é um asset guardado na galeria do jogo.

## Como explicar para crianças

Use a ideia de gibi: todo super-herói tem um inimigo, e o que muda entre eles é a roupa, a cor e a cara. Diga que a paleta é a "caixa de tintas mágica" e o balde é o "pincel que pinta sem bagunça". Para o rosto, fale que dois pontinhos pretos já viram olhos. Para acessório, use a frase "o chapéu conta quem ele é". Para tamanho, peça que imaginem o herói e o vilão tirando uma foto juntos: precisam caber na mesma foto.

## Erros comuns e como ajudar

Muitas crianças apagam o boneco inteiro sem querer porque ficam na ferramenta "Erase"; oriente sempre voltar para "Attach" ou "Paint" depois de apagar. Outras pintam o ar em vez do bloco: explique que o balde só funciona clicando em cima de um voxel que já existe. Tem quem faça o vilão gigante e o herói minúsculo; use o truque da "foto junto" para ajustar a escala. E o erro mais comum: esquecer de salvar com nome novo, sobrescrevendo o herói. Pare a turma na metade e faça todos salvarem juntos, em voz alta, repetindo "Save As, nome novo".`,
  exercicios: [
    {
      titulo: `Herói ou vilão? O detetive das cores`,
      tipo: `Observação e discussão`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor os dois exemplos prontos. Faça as crianças apontarem pistas visuais. Aceite todas as respostas e conecte cor e emoção.`,
      atividade: `Olhe os dois personagens na tela e diga quem você acha que é o herói e quem é o vilão. Explique como você descobriu.`,
      gabarito: `Não há resposta única, mas espera-se que a criança use pistas como cores claras e rosto sorridente para o herói, e cores escuras com sobrancelha brava para o vilão. O acerto está em justificar a escolha com pelo menos uma pista visual.`,
    },
    {
      titulo: `Pintando a roupa do herói`,
      tipo: `Prática guiada no MagicaVoxel`,
      tempo: `7 minutos`,
      guiaProfessor: `Demonstre clicar no ícone "Paint" (balde) e escolher uma cor na paleta da direita antes de pintar. Verifique se todos saíram da borracha.`,
      atividade: `Escolha uma cor na paleta, clique na ferramenta balde (Paint) e pinte a roupa do seu herói clicando nos blocos do corpo.`,
      gabarito: `A criança deve selecionar a ferramenta Paint, escolher uma cor na paleta e aplicar essa cor nos voxels do tronco do personagem, mantendo a forma intacta (sem apagar blocos). Resultado correto: roupa colorida sem buracos no boneco.`,
    },
    {
      titulo: `Um rosto que conta uma emoção`,
      tipo: `Modelagem com expressão`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua os cartões de emoção. Mostre como dar zoom com a rolinha e usar "Attach" com a cor preta para os olhos e a boca. Lembre de voltar para Attach após qualquer apagada.`,
      atividade: `Sorteie um cartão de emoção (feliz, bravo ou assustado) e construa o rosto do seu herói com dois olhos e uma boca que mostrem essa emoção.`,
      gabarito: `O rosto deve ter pelo menos dois voxels para olhos e voxels formando uma boca, posicionados na cabeça. A emoção sorteada deve ser reconhecível: boca para cima em feliz, sobrancelhas baixas em bravo, boca aberta em assustado. Correto quando outra pessoa adivinha a emoção.`,
    },
    {
      titulo: `O vilão nasce: reaproveitar e transformar`,
      tipo: `Criação do segundo personagem`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre que dá para criar um novo arquivo em "File > New" ou reusar a forma do herói trocando cores e acessórios. Incentive cores escuras e um acessório marcante, como chifres ou máscara.`,
      atividade: `Crie um segundo personagem que seja o vilão (ou um amigo) do seu herói. Use cores diferentes e adicione pelo menos um acessório novo, como capacete, máscara ou chifres.`,
      gabarito: `Deve existir um segundo personagem completo, com cores distintas do herói e ao menos um acessório construído com a ferramenta Attach. O personagem precisa ser claramente diferente do primeiro. Correto quando a criança consegue explicar em uma frase quem é esse novo personagem.`,
    },
    {
      titulo: `A foto da família: comparar e salvar dois assets`,
      tipo: `Escala e organização de arquivos`,
      tempo: `10 minutos`,
      guiaProfessor: `Ajude a colocar os dois personagens próximos para comparar a altura e ajustar com Attach ou Erase. Depois conduza o salvamento em voz alta: "File > Save As" para cada um, com nome próprio. Confira que nenhum aluno sobrescreveu o herói.`,
      atividade: `Coloque o herói e o vilão lado a lado, ajuste para que tenham tamanhos que combinem e salve cada um em um arquivo separado, usando "File > Save As" com nomes claros como "heroi_seunome" e "vilao_seunome".`,
      gabarito: `Ao final devem existir dois arquivos .vox distintos, um para cada personagem, com nomes diferentes e descritivos. Os dois bonecos devem ter alturas próximas (escala coerente), sem um ser muito maior que o outro. Correto quando a pasta tem dois assets salvos e o herói não foi sobrescrito.`,
    },
  ],
};
