import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Camadas e quadros: a mágica do movimento",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança vai criar dois quadros simples no Aseprite e usar o botão de play para ver o desenho piscar ou se mexer, entendendo que a animação nasce de quadrinhos que trocam rápido.`,
  descricao: `Nesta aula as crianças descobrem dois superpoderes do Aseprite: as camadas e os quadros. A camada é como uma folha de papel transparente que a gente empilha em cima de outra: dá para desenhar o fundo numa folha e o personagem em outra, sem um borrar o outro. Os quadros (frames) são fotinhos do desenho, um do lado do outro, que ao trocarem bem rápido criam a ilusão de movimento. É o mesmo segredo dos desenhos animados que elas já amam.

O foco do dia é sentir a mágica do movimento na prática. A turma vai criar um quadro com um desenho, fazer um segundo quadro com uma pequena diferença (o desenho aparece e some, ou pisca, ou pula um pouquinho) e apertar o play para ver a animação rodar. É o primeiro contato com a ideia de que muitos desenhos parecidos viram movimento.

Por que isso importa? No projeto do mês as crianças vão criar a arte do próprio jogo 2D, e quase tudo num jogo se mexe: a moeda brilha, a estrela pisca, o herói anda. Entender quadros agora é a base para animar os sprites mais para frente. As camadas, por sua vez, vão ajudar a organizar o desenho do personagem nas próximas aulas.

A aula é bem mão na massa e visual. O professor demonstra cada passo no projetor, com nomes e cliques exatos, e as crianças repetem. A leitura é mínima: o caminho é mostrar, apontar e deixar elas brincarem com o play até o olho perceber o movimento acontecendo.`,
  materiais: [
    `Computadores ligados, um por criança (ou duplas), com o Aseprite já aberto e um arquivo novo de 32x32 pixels criado.`,
    `Projetor ou TV grande espelhando a tela do professor, com o Aseprite aberto para a demonstração.`,
    `Um arquivo de exemplo pronto pelo professor: uma animação simples de 2 quadros (uma estrela que pisca) para mostrar o resultado final logo no aquecimento.`,
    `Um bloquinho de papel ou caderninho velho para fazer um flipbook (folioscópio) caseiro de exemplo, mostrando o movimento no papel.`,
    `Lápis de cor ou canetinhas e folhas em branco para o exercício de papel.`,
    `Cartões grandes com os ícones dos botões importantes: o botão de novo quadro, o botão de nova camada e o botão de play, para a turma reconhecer e apontar.`,
    `Adesivos ou carimbos de recompensa para celebrar quem fizer a primeira animação rodar.`,
  ],
  conceitosChave: [
    `Camada — uma folha transparente que fica em cima da outra; você desenha em cada uma sem bagunçar as de baixo.`,
    `Quadro (frame) — uma fotinho do seu desenho; vários quadrinhos parecidos, um atrás do outro, viram movimento.`,
    `Animação — a mágica de trocar os quadros bem rápido para parecer que o desenho está se mexendo.`,
    `Botão de play — o triângulo deitado que você aperta para ver a animação rodar na tela.`,
    `Linha do tempo (timeline) — a barra de baixo do Aseprite onde ficam os quadrinhos em fila e as camadas empilhadas.`,
    `Piscar — quando o desenho aparece num quadro e some no outro, igual a uma estrela brilhando no céu.`,
    `FPS (velocidade) — quantos quadrinhos passam por segundo; mais rápido deixa o movimento mais corrido, mais devagar deixa mais lento.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Animação é uma ilusão: nosso olho junta imagens parecidas que passam rápido e enxerga movimento. No Aseprite isso vive na timeline, a barra na parte de baixo da tela. Ela tem dois eixos. Na horizontal ficam os quadros (frames), numerados 1, 2, 3. Na vertical ficam as camadas (layers), empilhadas como folhas transparentes. Uma camada de cima cobre a de baixo onde tiver desenho, e deixa ver através onde estiver vazia.

Os dois botões que você mais vai usar ficam na timeline. O botão de novo quadro é o sinal de mais perto da fileira de números dos quadros (passe o mouse e aparece Novo Quadro). O botão de nova camada é o sinal de mais no cantinho das camadas. O play é o triângulo deitado no topo da timeline; a tecla de atalho é Enter. A velocidade aparece como FPS ou como a duração em milissegundos de cada quadro.

Antes da aula: abra o Aseprite, crie um arquivo novo (menu Arquivo, Novo, tamanho 32x32, pode confirmar no OK) e deixe a timeline visível. Se ela não aparecer, use o menu Visão e marque Timeline. Tenha o seu exemplo da estrela que pisca pronto para abrir.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 1. Mostre o flipbook de papel: folheie rápido e pergunte o que aconteceu. Depois abra seu exemplo da estrela piscando no Aseprite e aperte o play. Diga: hoje vamos fazer o nosso desenho se mexer.

Conteúdo novo guiado (15 min): no projetor, mostre a timeline. Aponte os quadros (em pé na horizontal) e as camadas (empilhadas). Desenhe uma bolinha simples no Quadro 1 com a ferramenta Lápis. Clique no botão de novo quadro (o mais ao lado dos números): nasce o Quadro 2, que vem como cópia do 1. No Quadro 2, apague a bolinha com a Borracha. Aperte o play: a bolinha pisca. Mostre também o botão de nova camada para a turma só conhecer, sem aprofundar.

Mão na massa (25 min): cada criança desenha algo simples no Quadro 1 (uma carinha, uma estrela, um coração). Guie em voz alta: agora todo mundo clica no mais para criar o Quadro 2. No Quadro 2, peça que mudem algo pequeno: apagar para piscar, ou mover o desenho um pouquinho para o lado para parecer que pula. Todos apertam o play. Passe de mesa em mesa ajudando a achar os botões e celebrando cada animação que roda.

Desafio e compartilhar (10 min): proponha um terceiro quadro para deixar o movimento mais legal. Depois faça uma roda: cada criança aperta o play e mostra a animação para os colegas. Aplauda cada uma.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Camada é folha mágica transparente: cada desenho na sua folhinha, empilhadas, sem borrar. Quadro é fotinho: muitas fotinhas quase iguais, passando rápido, viram deseninho animado, igual à TV. O play é o botãozinho que dá vida ao desenho. Use as mãos: mostre duas fotos e troque rápido entre elas. Fale devagar, mostre na tela e só depois peça para repetirem. Comemore alto cada movimento que aparece.

## Erros comuns e como ajudar

Algumas crianças desenham o Quadro 2 igualzinho ao 1 e acham que nada se mexe: explique que precisa mudar um pouquinho para o olho perceber. Outras criam vários quadros sem querer apertando o mais sem parar: mostre o botão de apagar quadro (o lixinho) ou clique no quadro extra e apague. Tem quem desenhe no quadro errado: ensine a olhar qual número está iluminado na timeline antes de desenhar. Se o play não mostrar nada, confira se há pelo menos dois quadros diferentes. E lembre que apagar uma camada some tudo dela; nesta aula, fiquem numa camada só para não confundir.`,
  exercicios: [
    {
      titulo: `Cadê o quadro, cadê a camada?`,
      tipo: `Prática na ferramenta (reconhecimento)`,
      tempo: `5 min`,
      guiaProfessor: `Com o Aseprite aberto no projetor, mostre a timeline e os cartões com os ícones. Peça que cada criança encontre na própria tela onde ficam os quadros e as camadas. Vá apontando junto e elogiando.`,
      atividade: `Olhe a barra de baixo da sua tela (a timeline). Coloque o dedinho em cima de um quadro (os números em fila). Agora coloque o dedinho onde fica a camada (a folhinha empilhada do lado). Mostre para o professor.`,
      gabarito: `A criança aponta corretamente: os quadros são os itens numerados na fila horizontal e a camada é a faixa na lateral esquerda da timeline. Acertou se identificou os dois lugares diferentes.`,
    },
    {
      titulo: `Minha bolinha que pisca`,
      tipo: `Prática na ferramenta (criação)`,
      tempo: `10 min`,
      guiaProfessor: `Guie passo a passo no projetor: desenhar no Quadro 1, clicar no botão de novo quadro (o mais), apagar no Quadro 2 e apertar o play. Repita o caminho em voz alta e passe nas mesas conferindo.`,
      atividade: `Desenhe uma bolinha no Quadro 1 com o Lápis. Clique no botão de mais para criar o Quadro 2. No Quadro 2, apague a bolinha com a Borracha. Aperte o play (o triângulo) e veja a bolinha piscar.`,
      gabarito: `O arquivo tem 2 quadros: o Quadro 1 com a bolinha e o Quadro 2 vazio. Ao apertar o play, a bolinha pisca (aparece e some). Acertou se a animação roda mostrando o piscar.`,
    },
    {
      titulo: `Roda do desenho animado`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda. Faça perguntas simples sobre desenhos animados e ligue com o que fizeram. Deixe várias crianças falarem e valide cada resposta.`,
      atividade: `Conversem: qual seu desenho animado preferido? Como será que o desenho se mexe na TV? O que é um quadro? E uma camada? Por que apertamos o play?`,
      gabarito: `A criança diz, com as próprias palavras, que o movimento vem de muitos quadrinhos parecidos trocando rápido, que o quadro é uma fotinho e a camada é uma folha transparente. Acertou se mostrou que entendeu a ideia, mesmo sem termos exatos.`,
    },
    {
      titulo: `Folioscópio de papel`,
      tipo: `Desenho no papel`,
      tempo: `12 min`,
      guiaProfessor: `Entregue duas folhas (ou dois cantinhos do bloquinho). Mostre seu flipbook de exemplo. Explique que cada folha é um quadro e que folhear rápido é o mesmo que apertar o play.`,
      atividade: `Na primeira folha, desenhe uma carinha feliz. Na segunda folha, desenhe a mesma carinha, mas com a boca um pouco diferente. Coloque uma sobre a outra e folheie rápido para ver a boca se mexer.`,
      gabarito: `As duas folhas têm o mesmo desenho com uma pequena diferença na boca. Ao folhear rápido, parece que a boca mexe. Acertou se a criança percebeu o movimento ao trocar as folhas e explicou que cada folha é um quadro.`,
    },
    {
      titulo: `Desafio: três quadros que se mexem`,
      tipo: `Desafio (extensão)`,
      tempo: `10 min`,
      guiaProfessor: `Proponha apenas para quem terminou a bolinha que pisca. Ajude a criar o terceiro quadro e a mover o desenho um pouquinho a cada quadro. Mostre como mudar a velocidade no FPS se sobrar tempo.`,
      atividade: `No seu arquivo, crie um Quadro 3 clicando no mais de novo. Em cada quadro, mova seu desenho um pouquinho para o lado (use a seta para mover). Aperte o play e veja seu desenho andar pela tela.`,
      gabarito: `O arquivo tem 3 quadros com o desenho em posições levemente diferentes. Ao apertar o play, o desenho parece andar ou se deslocar. Acertou se a animação de 3 quadros roda mostrando um movimento contínuo, não só um piscar.`,
    },
  ],
};
