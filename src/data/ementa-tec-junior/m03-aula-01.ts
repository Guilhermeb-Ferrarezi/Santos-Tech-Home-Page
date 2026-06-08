import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Conhecendo o Palco e os Personagens",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança consegue abrir o Scratch, reconhecer o palco, escolher um personagem e movê-lo arrastando com o mouse, além de trocar o cenário de fundo.`,
  descricao: `Esta é a primeira aula do mês com o Scratch, e o objetivo principal é fazer a criança se sentir em casa dentro do programa. Antes de criar qualquer jogo, ela precisa saber onde as coisas ficam: onde o personagem aparece, onde fica o lugar em que o jogo acontece e como mexer em tudo isso com o mouse. É como entrar numa sala de brinquedos nova: primeiro a gente olha tudo, abre as caixas e descobre o que tem ali.

O Scratch é um programa colorido feito especialmente para crianças criarem jogos e animações. Nesta aula não vamos usar blocos de programação ainda. O foco é puramente conhecer a tela: o palco (a tela branca grande onde tudo acontece), os personagens (chamados de sprites) e o cenário (o fundo do palco). A criança vai escolher um personagem da biblioteca, vai trocar o fundo e vai arrastar o personagem de um lado para o outro com o mouse, só para sentir como é.

Essa familiarização é a base de todo o mês. Quando a criança souber onde cada coisa fica e perder o medo de clicar e explorar, as próximas aulas (mover com setas, clicar e acontecer, contar pontos) ficam muito mais tranquilas. Aqui não existe erro: tudo o que ela clica pode ser desfeito ou explorado de novo. A palavra de ordem é descobrir brincando.

Para o professor, mesmo que seja iniciante em Scratch, a aula é simples de conduzir: basta deixar tudo aberto antes, mostrar no projetor onde clicar e acompanhar de mesa em mesa. As crianças aprendem muito imitando o que veem na tela grande e fazendo igual no computador delas.`,
  materiais: [
    `Um computador por criança (ou em dupla) com o Scratch já aberto na tela inicial, em tela cheia, antes da turma chegar.`,
    `Projetor ou TV grande ligado ao computador do professor, mostrando o Scratch para todos verem.`,
    `Acesso ao Scratch: usar o site scratch.mit.edu (botão Criar) ou o aplicativo Scratch instalado no computador.`,
    `Mouse funcionando em cada máquina (o arrastar com o mouse é o coração desta aula).`,
    `Folhas de papel sulfite e lápis de cor ou giz de cera para o exercício de desenho.`,
    `Cartões impressos ou crachás com as palavras Palco, Personagem e Cenário, com um desenho ao lado de cada um.`,
    `Lista com os nomes das crianças para acompanhar quem já conseguiu fazer cada passo.`,
  ],
  conceitosChave: [
    `Scratch — o programa colorido onde a gente cria jogos e desenhos animados no computador.`,
    `Palco — a tela branca grande onde o jogo acontece; é o palquinho do nosso teatro.`,
    `Personagem (sprite) — o bonequinho ou bichinho que aparece no palco e que a gente comanda.`,
    `Cenário (fundo) — o desenho que fica atrás do personagem, como uma praia, o espaço ou uma sala.`,
    `Arrastar — segurar o personagem com o mouse e puxar ele para outro lugar do palco.`,
    `Biblioteca — a caixa cheia de personagens e cenários prontos para a gente escolher.`,
    `Mouse — o controle da nossa mãozinha na tela; o cursor é a setinha que se mexe.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O Scratch é uma ferramenta visual de programação criada pelo MIT. Para esta primeira aula, você não vai usar programação de verdade: o foco é a interface. Conheça quatro regiões da tela antes da aula. À direita fica o Palco, o retângulo grande onde o jogo aparece. Abaixo do palco, à direita, fica a lista de Personagens (sprites), com a miniatura de cada um. Ao lado dessa lista, mais à direita, fica o painel do Cenário (a imagem de fundo). À esquerda ficam os blocos coloridos, que NÃO usaremos hoje. Para começar, acesse scratch.mit.edu e clique em Criar (botão azul no topo), ou abra o aplicativo Scratch. Você cairá direto no editor. Deixe tudo isso aberto em cada máquina antes da turma entrar; isso economiza muito tempo e evita frustração com logins e carregamento.

Dois botões importantes para você localizar: o ícone de personagem (um gatinho com um sinal de mais, no canto inferior direito) abre a biblioteca de sprites; o ícone de paisagem (um quadro com montanhinha, mais à direita, na parte do palco) abre a biblioteca de cenários. Saber apontar esses dois ícones no projetor é praticamente toda a parte técnica da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma com os computadores já abertos. Faça uma roda rápida. Pergunte quem já jogou um joguinho no computador ou no celular. Mostre o Scratch no projetor e diga: hoje vamos conhecer o lugar onde a gente cria os nossos próprios jogos. Aponte o gato laranja na tela e diga que esse é o nosso primeiro personagem.

Conteúdo novo guiado (15 min): no projetor, mostre devagar as três regiões. Aponte o Palco e diga é aqui que o jogo acontece. Aponte a lista de personagens embaixo e diga aqui ficam os bonequinhos. Aponte o quadro do cenário e diga aqui a gente troca o fundo. Agora demonstre: clique no ícone do gatinho com o sinal de mais (canto inferior direito), escolha um personagem na biblioteca clicando nele uma vez, e ele aparece no palco. Depois clique no ícone de paisagem e escolha um cenário. Por fim, segure o personagem no palco com o mouse e arraste para mostrar que ele anda. Faça tudo bem devagar, narrando cada clique.

Mão na massa (25 min): agora é a vez das crianças. Peça para cada uma escolher um personagem na biblioteca. Depois, trocar o cenário. Por último, arrastar o personagem pelo palco. Circule de mesa em mesa repetindo os passos e elogiando. Deixe explorarem: trocar de personagem várias vezes faz parte da diversão.

Desafio e compartilhar (10 min): proponha o desafio de colocar o personagem bem no cantinho de baixo do palco. Depois, faça cada criança virar a tela para a turma e dizer o nome do personagem e do cenário que escolheu.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de teatro. O palco é o palquinho onde a peça acontece. O personagem é o ator, o bonequinho que vai atuar. O cenário é o pano de fundo do teatro: hoje pode ser uma praia, amanhã o espaço. A biblioteca é o baú de fantasias e atores de onde a gente escolhe. Arrastar é dar a mãozinha para o personagem e levar ele para passear pelo palco. Fale pouco e mostre muito: aponte na tela grande e diga façam igual. Crianças dessa idade aprendem imitando.

## Erros comuns e como ajudar

O erro mais comum é clicar nos blocos coloridos da esquerda achando que é ali; gentilmente leve o olhar de volta para o palco. Outro é dar dois cliques rápidos na biblioteca e abrir personagens demais; mostre que basta um clique. Algumas crianças arrastam para fora do palco e o personagem some pela metade; explique que ele só anda dentro do retângulo e ajude a trazer de volta. Há quem aperte e segure com força demais e solte longe; mostre o gesto calmo de segurar e soltar. Se uma criança travar, sente ao lado e faça o primeiro passo junto com a mão dela.`,
  exercicios: [
    {
      titulo: `Caça aos três lugares`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o Scratch no projetor, transforme a tela numa brincadeira de apontar. Você fala o nome de uma região e as crianças apontam para a tela (ou levantam a mão) mostrando onde fica. Comece junto com elas e depois deixe responderem sozinhas.`,
      atividade: `O professor pergunta em voz alta, uma de cada vez: Onde fica o palco? Onde ficam os personagens? Onde a gente troca o cenário? As crianças apontam para o lugar certo na tela grande. Repita misturando a ordem para virar um joguinho.`,
      gabarito: `A criança acertou quando aponta: o retângulo grande à direita para o palco; a lista de bonequinhos embaixo à direita para os personagens; o quadrinho com a imagem de fundo, mais à direita, para o cenário. Acertar a maioria das vezes já é sucesso para esta idade.`,
    },
    {
      titulo: `Escolhendo meu primeiro personagem`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre primeiro no projetor: clique no ícone do gatinho com o sinal de mais no canto inferior direito, mostre a biblioteca abrindo e clique uma vez num personagem. Depois peça para cada criança fazer igual no computador dela. Circule ajudando quem não acha o botão.`,
      atividade: `Cada criança clica no ícone do personagem (gatinho com sinal de mais), escolhe um bichinho ou bonequinho que ela goste na biblioteca dando um clique nele, e confere se ele apareceu no palco.`,
      gabarito: `O exercício deu certo quando o personagem escolhido aparece dentro do palco e o nome dele surge na lista de personagens embaixo. Se apareceram vários por engano, basta a criança ter conseguido deixar pelo menos o que ela queria no palco.`,
    },
    {
      titulo: `Trocando o fundo do meu jogo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor o ícone de paisagem (quadro com montanhinha) na parte do palco, à direita. Clique nele, mostre a biblioteca de cenários e escolha um com um clique. Peça que as crianças repitam e incentive a escolherem um fundo bem diferente do gato padrão.`,
      atividade: `Cada criança clica no ícone de cenário, escolhe um fundo na biblioteca (praia, espaço, floresta, o que preferir) com um clique e observa o palco mudar de cara, com o personagem em cima do novo fundo.`,
      gabarito: `Acertou quando o fundo branco do palco vira a imagem escolhida e o personagem continua aparecendo na frente dela. Qualquer cenário escolhido vale: o importante é ter trocado o fundo com sucesso.`,
    },
    {
      titulo: `Passeio do personagem (desafio do cantinho)`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como segurar o personagem com o mouse e arrastar pelo palco. Em seguida, lance o desafio: levar o personagem para um lugar específico. Faça virar uma caça ao tesouro, comemorando cada criança que conseguir posicionar o bonequinho no ponto pedido.`,
      atividade: `O professor dá comandos um de cada vez: arrastem o personagem para o cantinho de cima; agora para o meio; agora para o cantinho de baixo à direita. As crianças arrastam o personagem com o mouse para cada lugar pedido.`,
      gabarito: `Deu certo quando a criança segura o personagem com o mouse e o solta aproximadamente no lugar pedido, dentro do palco, sem que ele suma pela borda. Não precisa ser exato; chegar perto do lugar combinado já conta como acerto.`,
    },
    {
      titulo: `Desenho do meu palquinho`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua papel e lápis de cor. Peça que cada criança desenhe a tela do Scratch do jeito que ela imagina: o palco como um retângulo grande, o personagem dentro dele e um cenário ao fundo. Passe nas mesas pedindo que apontem no desenho onde está cada parte, reforçando os nomes.`,
      atividade: `Cada criança desenha numa folha um retângulo grande (o palco), dentro dele o personagem que escolheu no computador e, ao fundo, o cenário que escolheu. Depois, escreve ou diz o nome do personagem.`,
      gabarito: `O desenho está completo quando tem as três coisas: um retângulo representando o palco, um personagem dentro dele e algum fundo/cenário desenhado. Ao apontar, a criança deve conseguir dizer aqui é o palco, aqui é o personagem e aqui é o cenário.`,
    },
  ],
};
