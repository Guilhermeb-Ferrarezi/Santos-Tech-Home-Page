import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Clique e Acontece!",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a usar os blocos de eventos do Scratch (a bandeira verde e o "quando este ator for clicado") para fazer o personagem reagir sozinho, mudando de cor ou aparecendo e sumindo quando recebe um clique.`,
  descricao: `Nesta aula as crianças descobrem uma palavrinha mágica do mundo dos jogos: evento. Um evento é simplesmente um "aviso" que faz alguma coisa começar. No Scratch, os blocos de eventos são os blocos amarelos do topo da pilha, e são eles que dão o "start" em tudo. Sem um evento, os blocos ficam parados esperando, como um carrinho sem alguém para empurrar.

O assunto central é entender que o computador não faz nada sozinho: ele precisa de um sinal para agir. Dois sinais são apresentados aqui. O primeiro é a bandeira verde, lá em cima na tela, que funciona como o "play" do jogo inteiro. O segundo é o clique direto no personagem, com o bloco "quando este ator for clicado", que deixa o personagem responder ao toque do mouse. Esses dois eventos são a base de qualquer joguinho interativo.

Para tornar a reação visível e divertida, as crianças vão combinar o evento com blocos de aparência: "mude o efeito cor", "mostre" e "esconda". Assim, ao clicar no gato, ele muda de cor; ou aparece e some como em uma brincadeira de esconde-esconde. A graça é que a criança vê uma relação direta: "eu clico, ele faz". Esse é o primeiro passo da ideia de interação, que vai crescer nas próximas aulas com teclas e sons.

Ao longo da hora, o foco é o mão na massa e o encantamento de ver o personagem obedecer ao clique. Não se espera que a criança leia muito: ela vai reconhecer os blocos pela cor e pelo formato, encaixar e clicar para testar. O professor demonstra cada passo no projetor e depois acompanha de pertinho cada aluno.`,
  materiais: [
    `Computadores (um por aluno) com o Scratch já aberto no projeto novo, em português, prontos para usar (versão online no site scratch.mit.edu ou o Scratch Desktop instalado).`,
    `Projetor ou TV grande conectado ao computador do professor, para demonstrar cada passo na tela cheia.`,
    `Um projeto de exemplo já montado pelo professor (um gato que muda de cor ao ser clicado e some/aparece com a bandeira verde), salvo e pronto para mostrar.`,
    `Crachás ou adesivos coloridos amarelos para representar os "blocos de evento" na brincadeira do aquecimento.`,
    `Folhas de desenho e lápis de cor para a atividade no papel.`,
    `Uma campainha, sino ou apito para a roda de conversa sobre "sinais que fazem algo começar".`,
    `Lista com o nome de cada aluno para o professor anotar quem já conseguiu fazer o clique funcionar (acompanhamento).`,
  ],
  conceitosChave: [
    `Evento — é um aviso que faz uma ação começar, igual quando a professora bate palma e todo mundo senta.`,
    `Bandeira verde — é o botão de "começar o jogo"; quando a gente clica nela, o jogo inteiro liga.`,
    `Bloco "quando este ator for clicado" — é o bloco que deixa o personagem responder quando a gente clica em cima dele com o mouse.`,
    `Bloco de aparência — bloco roxo que muda o jeito do personagem: a cor, mostrar ou esconder.`,
    `Mostre e Esconda — blocos que fazem o personagem aparecer na tela ou sumir, como brincar de esconde-esconde.`,
    `Mude o efeito cor — bloco que pinta o personagem de outra cor cada vez que é usado.`,
    `Encaixar blocos — juntar um bloco embaixo do outro para montar uma ordem, como peças de quebra-cabeça.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

No Scratch, todo comportamento começa com um bloco de evento. Eventos são os blocos amarelos, encontrados na categoria "Eventos" (o círculo amarelo na coluna de categorias, à esquerda dos blocos). Eles têm um formato especial: o topo é arredondado como um "chapéu", porque nada se encaixa acima deles. São o início de toda pilha de código.

Dois eventos importam nesta aula. O primeiro é "quando [bandeira verde] for clicado": ele dispara quando alguém clica na bandeira verde no canto superior direito do palco. É o "ligar o jogo". O segundo é "quando este ator for clicado": ele dispara quando o jogador clica diretamente no personagem dentro do palco. Para fazer algo acontecer, encaixamos embaixo desses chapéus blocos de Aparência (categoria roxa): "mostre", "esconda" e "mude o efeito [cor] por (25)".

Termos da tela que você vai usar: "Palco" (a área grande onde o jogo aparece), "Ator/Personagem" (o sprite, mostrado embaixo do palco), "Mochila de blocos" ou paleta (a lista de blocos no centro) e "Área de código" (o espaço grande à direita onde você monta). Tenha tudo isso reconhecido antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Faça a brincadeira "Sinal e Ação". Você dá um sinal (bate palma) e as crianças fazem uma ação combinada (pulam). Diga: "o sinal faz a ação começar — isso é um evento!". Mostre os crachás amarelos: "no Scratch, o sinal mora nos blocos amarelos".

Conteúdo novo guiado (15 min): No projetor, abra o Scratch. Clique na categoria "Eventos" (bola amarela). Arraste para a Área de código o bloco "quando [bandeira verde] for clicado". Vá em "Aparência" (bola roxa) e encaixe embaixo "mude o efeito cor por (25)". Clique na bandeira verde (canto superior direito) e mostre o gato mudando de cor. Depois pegue outro chapéu, "quando este ator for clicado", encaixe "esconda" embaixo, e clique no gato para ele sumir. Vá devagar, nomeando cada clique.

Mão na massa (25 min): Cada criança no seu computador. Peça que arrastem "quando este ator for clicado" e encaixem "mude o efeito cor por (25)". Mande clicar no personagem várias vezes para ver as cores mudando. Depois, monte uma segunda pilha com a bandeira verde e "mostre", e outra com o clique e "esconda". Circule e ajude cada um a encaixar (os blocos "grudam" com um traço cinza de encaixe).

Desafio + compartilhar (10 min): Proponha o desafio "esconde-esconde": com a bandeira verde o gato aparece (mostre); ao ser clicado, ele some (esconda). Quem conseguir, mostra para a turma no projetor e ganha palmas.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de "sinal mágico". Diga: "o bloco amarelo é o feitiço que faz o personagem acordar". A bandeira verde é "o botão de LIGAR o jogo, igual o controle da TV". O clique no personagem é "fazer cosquinha no gato: você encosta e ele reage". Para os blocos roxos: "esconda é jogar um cobertor no gato; mostre é tirar o cobertor". Para a cor: "cada clique é um banho de tinta nova". Aponte sempre a cor e o formato dos blocos, porque a criança ainda não lê: "pegue o amarelo de chapéu" e "o roxo embaixo".

## Erros comuns e como ajudar

O erro mais comum é encaixar o bloco de ação solto, sem o chapéu amarelo em cima — aí nada acontece. Mostre que toda pilha precisa começar com um bloco amarelo. Outro erro: clicar na bandeira verde esperando reação ao clique no gato (ou o contrário) — explique que cada sinal tem seu jeito de ligar. Crianças também soltam o bloco longe e ele não encaixa: ensine a aproximar até aparecer a sombra cinza de encaixe. Por fim, alguns clicam fora do personagem; mostre que o clique precisa ser em cima do gato, dentro do palco.`,
  exercicios: [
    {
      titulo: `Faz Cosquinha no Gato`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor: categoria Eventos (bola amarela), arraste "quando este ator for clicado"; categoria Aparência (bola roxa), encaixe "mude o efeito cor por (25)". Clique no gato e mostre a cor mudando. Depois deixe cada criança fazer no seu computador, circulando para ajudar no encaixe.`,
      atividade: `Monte uma pilha de dois blocos: o chapéu amarelo "quando este ator for clicado" com o bloco roxo "mude o efeito cor por (25)" embaixo. Clique no seu personagem cinco vezes e conte quantas cores diferentes ele ficou.`,
      gabarito: `Acertou quem montou a pilha com o chapéu amarelo em cima e o bloco roxo encaixado embaixo, e ao clicar no personagem ele muda de cor a cada clique. Se nada acontece, o bloco roxo provavelmente está solto, sem o chapéu amarelo.`,
    },
    {
      titulo: `Liga o Jogo na Bandeira`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Relembre que a bandeira verde fica no canto superior direito do palco e serve para ligar o jogo. Mostre como pegar o chapéu "quando [bandeira verde] for clicado" na categoria Eventos. Reforce a diferença entre este chapéu e o do clique no personagem.`,
      atividade: `Monte uma nova pilha: o chapéu amarelo da bandeira verde com o bloco roxo "mostre" embaixo. Agora clique no personagem e encaixe "esconda" no chapéu "quando este ator for clicado". Some o gato clicando nele e faça ele voltar clicando na bandeira verde.`,
      gabarito: `Acertou quem fez o gato sumir ao clicar nele (esconda) e reaparecer ao clicar na bandeira verde (mostre). Se o gato não volta, falta o chapéu da bandeira verde com "mostre" encaixado.`,
    },
    {
      titulo: `Caça ao Sinal`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Use a campainha ou apito. Toque o sinal e pergunte o que costuma acontecer quando ouvimos certos sinais no dia a dia. Conduza para a ideia de que um sinal faz uma ação começar, ligando isso aos blocos amarelos do Scratch.`,
      atividade: `Cada criança fala de um "sinal que faz algo começar" da vida real (a sirene do recreio, a campainha de casa, o apito do juiz). Depois a turma responde junto: no Scratch, qual é o nosso sinal de ligar o jogo?`,
      gabarito: `Espera-se que cada criança cite ao menos um sinal real e que a turma responda que, no Scratch, o sinal de ligar o jogo é a bandeira verde (e o clique no personagem também é um sinal). Está certo se a criança liga "sinal" a "começa uma ação".`,
    },
    {
      titulo: `Desenho do Antes e Depois`,
      tipo: `desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua a folha e os lápis. Explique que vão desenhar duas cenas: o personagem antes do clique e depois do clique. Não precisa escrever; o desenho conta a história. Use isso para checar se a criança entendeu a relação clique-reação.`,
      atividade: `Dobre a folha ao meio. Do lado esquerdo, desenhe o seu personagem ANTES de clicar. Do lado direito, desenhe como ele fica DEPOIS do clique (de outra cor, ou sumido com um cobertor por cima). Faça uma setinha do antes para o depois.`,
      gabarito: `Acertou quem mostrou uma mudança clara entre os dois lados: cor diferente, ou o personagem escondido depois do clique, com a seta ligando o antes ao depois. O importante é que o desenho mostre que o clique causou uma reação.`,
    },
    {
      titulo: `Desafio Esconde-Esconde`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha o desafio para a turma toda e deixe tentar com pouca ajuda. Quem terminar, apresenta no projetor. Para os mais rápidos, sugira trocar o número 25 do efeito cor por um número maior, para a cor mudar mais forte.`,
      atividade: `Faça o seu personagem brincar de esconde-esconde: quando clicar na bandeira verde, ele aparece (mostre); quando alguém clicar nele, ele some (esconda). Desafio extra: faça ele também mudar de cor cada vez que aparecer.`,
      gabarito: `Acertou quem tem duas pilhas funcionando: a da bandeira verde com "mostre" (o gato aparece ao ligar) e a do clique no ator com "esconda" (o gato some ao ser clicado). No extra, há também um "mude o efeito cor" junto do "mostre". Se some mas não volta, falta o chapéu da bandeira verde com "mostre".`,
    },
  ],
};
