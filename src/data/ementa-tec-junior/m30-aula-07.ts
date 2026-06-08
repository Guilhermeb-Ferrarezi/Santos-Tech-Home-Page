import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Andando dentro do meu mundo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Colocar o ponto de partida do personagem (SpawnLocation) e testar caminhar pela cena no botão Play, corrigindo objetos atravessáveis ou que travam o caminho para dar para explorar tudo.`,
  descricao: `Até agora as crianças montaram a cena olhando de fora, como quem olha uma maquete de cima. Nesta aula acontece a virada mais empolgante do mês: elas vão entrar dentro do próprio mundo e caminhar por ele. Para isso, o personagem precisa de um lugar para nascer quando o jogo começa. Esse lugar tem um nome no Roblox Studio: SpawnLocation, uma plaquinha especial que diz "é aqui que o jogador aparece".

Depois de colocar o SpawnLocation, a turma vai apertar o botão Play e virar o personagem que anda pela cena. É um momento mágico: de repente aquela maquete vira um lugar de verdade, com tamanho real, onde dá para subir uma escada, dar a volta numa casinha ou esbarrar numa árvore. As crianças vão perceber, com o próprio corpo do personagem, o que ficou bom e o que precisa de conserto.

E sempre tem conserto a fazer. Alguns objetos foram montados sem colisão e o personagem atravessa eles como um fantasma, passando reto por uma parede. Outros objetos estão bem no meio do caminho e travam a passagem, ou estão soltos no ar fazendo o personagem cair. Esta aula ensina a criança a testar, observar e arrumar: ligar a colisão (CanCollide) de quem precisa ser sólido, afastar quem está atrapalhando e ancorar (Anchored) quem está bambo.

Ao final, cada criança terá uma cena que dá para entrar e passear de ponta a ponta sem ficar preso e sem cair no vazio. Esse é o coração do entregável do mês: uma cena 3D navegável. Caminhar dentro do mundo que ela mesma construiu é o tipo de conquista que faz os olhos brilharem.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e a cena de cada criança já carregada do mês`,
    `Projetor ou TV grande para o professor demonstrar onde clicar passo a passo`,
    `Exemplo pronto: uma cena de demonstração com um SpawnLocation já colocado e funcionando`,
    `Exemplo de "problema": uma cena com uma parede atravessável e um objeto travando o caminho, para a turma consertar junto`,
    `Cartão ilustrado com os três botões da aula: SpawnLocation, CanCollide e Anchored`,
    `Adesivos ou carimbos de "Explorador da Cena" para premiar quem atravessar o mundo inteiro sem travar`,
    `Quadro branco para desenhar o caminho que o personagem vai percorrer`,
  ],
  conceitosChave: [
    `SpawnLocation — a plaquinha mágica que marca onde o seu personagem nasce quando o jogo começa.`,
    `Play — o botão azul que liga o jogo e transforma você no personagem que anda pela cena.`,
    `Personagem — o bonequinho que você controla andando, pulando e olhando para todo lado.`,
    `Colisão — quando um objeto é sólido de verdade e o personagem esbarra nele em vez de atravessar.`,
    `CanCollide — o interruptor que liga e desliga a colisão de um objeto (ligado = sólido, desligado = fantasma).`,
    `Anchored — o "alfinete" que prende o objeto no lugar para ele não cair nem se mexer.`,
    `Atravessável — quando o objeto está com a colisão desligada e o personagem passa reto por ele, como um fantasma.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox para dar esta aula. São apenas três botões para entender, e você pode testar tudo antes em uma cena de demonstração.

O SpawnLocation é uma plataforma especial que diz ao jogo onde o personagem aparece. Para inseri-lo, vá na aba "Home" (Início) lá em cima, clique no botão "Spawn". Uma plataforma cinza com setas surge na cena. Você também encontra o "Spawn Location" na aba "Model" (Modelo). Posicione essa plataforma num lugar plano e aberto da cena, com a ferramenta "Move" (Mover, as setas coloridas), longe de paredes.

O botão "Play" fica no topo, na aba "Home" ou "Test" (Testar): é o triângulo azul. Ao clicar, você vira o personagem. Move com as teclas W (frente), A (esquerda), S (trás), D (direita) e pula com a barra de espaço; gira a câmera segurando o botão direito do mouse. Para sair, clique no quadrado vermelho "Stop".

Quando o personagem atravessa um objeto, é porque a colisão está desligada. Clique no objeto, abra o painel "Properties" (Propriedades, no menu "View" se não estiver visível), ache "CanCollide" e marque a caixinha. Para prender um objeto solto no ar, marque "Anchored" no mesmo painel.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Pergunte: "E se a gente pudesse entrar de verdade dentro da nossa cena e andar lá dentro?". No projetor, mostre rapidinho uma cena de demonstração com o "Play" azul e ande pela tela com as crianças narrando para onde ir. Desenhe no quadro o caminho que o personagem fará.

Conteúdo novo guiado (15 min): No projetor, demonstre devagar. Clique na aba "Home", clique em "Spawn" e mostre a plataforma surgindo. Use o "Move" (setas) para colocá-la num chão plano. Aperte o "Play" azul: o personagem nasce em cima da plataforma. Ande até uma parede que atravessa (fantasma) e até um objeto que trava. Pare no "Stop". Selecione a parede, abra "Properties", marque "CanCollide". Mostre o "Anchored" prendendo um objeto bambo.

Mão na massa (25 min): As crianças inserem o próprio SpawnLocation pelo botão "Spawn", posicionam num lugar plano e apertam "Play". Andam pela cena com W, A, S, D e barra de espaço. A cada problema que encontram, param no "Stop" e consertam: ligam "CanCollide" no que atravessa, afastam o que trava com o "Move" e marcam "Anchored" no que está caindo. Repetem: testar, achar problema, consertar, testar de novo.

Desafio e compartilhar (10 min): Desafie cada criança a atravessar a cena inteira, de uma ponta à outra, sem ficar presa e sem cair no vazio. Quem conseguir ganha o carimbo de "Explorador da Cena". Encerre com cada um mostrando no projetor o pedaço mais legal de caminhar na sua cena.

## Como explicar para crianças

Chame o SpawnLocation de "plaquinha mágica que diz: é aqui que você nasce". Compare o "Play" com entrar num portal: "do lado de fora você é gigante olhando a maquete; quando aperta Play, você encolhe e vira o bonequinho lá dentro". Explique colisão com o corpo: "uma parede de verdade você não atravessa, dá esbarrão. Se o personagem passa reto, a parede está só de mentirinha, está de fantasma. O botão CanCollide liga o sólido de novo". O "Anchored" é "o alfinete que prega o objeto no lugar para ele não cair".

## Erros comuns e como ajudar

O personagem cai e cai sem parar: o SpawnLocation ficou flutuando no ar ou em cima de algo sem colisão; abaixe a plataforma até o chão sólido. O personagem nasce dentro de uma parede e fica preso: afaste o SpawnLocation para um lugar aberto. A criança esquece de apertar "Stop" antes de consertar e tenta mexer enquanto está jogando: lembre que primeiro paramos no quadrado vermelho. Liga "CanCollide" no objeto errado: peça para clicar exatamente naquilo que atravessou. Coloca dois SpawnLocations: apague os extras, deixe só um. O personagem atravessa o chão: marque "CanCollide" também na base da cena.`,
  exercicios: [
    {
      titulo: `Caça à plaquinha mágica`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor o botão "Spawn" na aba "Home" e a plataforma do SpawnLocation. Pergunte para que serve. Aceite respostas com as palavras delas e ajude a chegar na ideia de "onde o personagem nasce".`,
      atividade: `Olhe a plataforma cinza com setas na tela. O que você acha que essa plaquinha mágica faz quando a gente aperta Play? Conte com as suas palavras.`,
      gabarito: `A criança entende que o SpawnLocation marca onde o personagem aparece ao começar o jogo. Acerto = dizer algo como "é onde o boneco nasce" ou "onde a gente começa a andar". Vale qualquer fala que mostre essa ideia.`,
    },
    {
      titulo: `Colocando o meu ponto de partida`,
      tipo: `Prática no Roblox Studio`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o botão "Spawn" na aba "Home". A criança clica e a plataforma surge. Com a ferramenta "Move" (setas coloridas), ela arrasta o SpawnLocation para um chão plano e aberto, longe de paredes. Confira se há só um.`,
      atividade: `Na aba "Home", clique no botão "Spawn". Quando a plataforma aparecer, use as setas do "Move" para colocá-la num chão liso e abertinho da sua cena, longe das paredes.`,
      gabarito: `Um único SpawnLocation posicionado num chão plano e aberto. Acerto = a plataforma apoiada no chão, não flutuando nem dentro de uma parede. Erro comum: deixar dois spawns; apague os extras.`,
    },
    {
      titulo: `Apertei Play e virei o personagem`,
      tipo: `Prática no Roblox Studio`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o triângulo azul "Play" no topo. A criança aperta e vira o personagem. Ensine W, A, S, D para andar, barra de espaço para pular e o botão direito do mouse para girar a câmera. Para sair, quadrado vermelho "Stop".`,
      atividade: `Aperte o triângulo azul "Play" lá em cima. Agora você é o personagem! Ande com as teclas W, A, S, D e pule com a barra de espaço. Dê uma voltinha e depois aperte o quadrado vermelho "Stop".`,
      gabarito: `A criança nasce em cima do SpawnLocation, anda e pula pela cena e depois para no "Stop". Acerto = controlar o personagem e voltar ao modo de edição sozinha. Se cair sem parar, o spawn está flutuando: abaixe-o até o chão.`,
    },
    {
      titulo: `Caça-fantasma da parede`,
      tipo: `Conserto guiado`,
      tempo: `9 minutos`,
      guiaProfessor: `Em "Play", a criança procura um objeto que ela atravessa (está de fantasma). Anota qual é, aperta "Stop", clica nesse objeto, abre "Properties" e marca "CanCollide". Volta ao "Play" e confere se agora dá esbarrão. Ajude a achar o painel "Properties" no menu "View".`,
      atividade: `Ande pela cena no "Play" e descubra um objeto que você atravessa como fantasma. Pare no "Stop", clique nesse objeto, ache "CanCollide" no painel e marque a caixinha. Aperte "Play" de novo e veja se agora você esbarra nele.`,
      gabarito: `O objeto que era atravessável fica sólido depois de marcar "CanCollide". Acerto = no segundo teste o personagem esbarra em vez de passar reto. Erro comum: marcar "CanCollide" no objeto errado; confira se é exatamente aquele que foi atravessado.`,
    },
    {
      titulo: `Explorador da cena inteira`,
      tipo: `Desafio final`,
      tempo: `9 minutos`,
      guiaProfessor: `Desafie a criança a atravessar a cena de uma ponta à outra sem travar e sem cair no vazio. A cada obstáculo, ela para, conserta (CanCollide para o que atravessa, "Move" para afastar o que trava, "Anchored" para prender o que cai) e testa de novo. Quem completar ganha o carimbo de "Explorador da Cena".`,
      atividade: `Vire um explorador: tente atravessar a sua cena inteira, de um lado ao outro, sem ficar preso e sem cair no vazio. Sempre que algo travar, pare, conserte e teste de novo até passar por tudo.`,
      gabarito: `A criança caminha de ponta a ponta da cena sem ficar presa nem cair, consertando os problemas que encontra. Acerto = cena navegável do início ao fim. Exemplo de conserto: ligar "CanCollide" numa rampa atravessável e marcar "Anchored" numa árvore que estava caindo. Completar o trajeto vale o carimbo de "Explorador da Cena".`,
    },
  ],
};
