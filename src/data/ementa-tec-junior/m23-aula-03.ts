import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Onde o Jogador Nasce",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender o que é o ponto de spawn e colocar um SpawnLocation no mapa para que o personagem apareça no lugar certo quando o jogo começa.`,
  descricao: `Toda vez que alguém entra em um jogo do Roblox, o personagem precisa aparecer em algum lugar. Esse lugar tem um nome especial: ponto de spawn. Nesta aula a turma descobre que o personagem não nasce em qualquer canto por acaso, e sim no ponto que nós, criadores do jogo, escolhemos. É como decidir a porta de entrada da nossa casa: o jogador sempre vai chegar por ali.

O herói dessa aula é uma peça chamada SpawnLocation. Ela parece um tapetinho de luz no chão e marca exatamente onde o jogador vai surgir. Quando arrastamos esse tapetinho para o nosso cenário, dizemos ao Roblox: "é aqui que a aventura começa". Sem ele, o Roblox escolhe um lugar qualquer, muitas vezes errado, e o jogador pode até cair do mapa. Por isso, colocar o spawn no lugar certo é um dos primeiros cuidados de um bom jogo.

As crianças já montaram o cenário na aula passada, então agora elas têm um mundo pronto esperando um ponto de partida. Vamos posicionar o SpawnLocation num chão firme e seguro, longe das beiradas e dos obstáculos, num lugar de onde dá para ver o caminho da aventura. Depois testamos de verdade: apertamos o botão de jogar e conferimos se o boneco aparece exatamente onde planejamos.

O grande aprendizado é a ideia de causa e efeito: eu movo o spawn aqui, testo, e o personagem nasce ali. Essa repetição de mover, testar e observar é o coração do polimento de um jogo. Ao final, cada criança terá um ponto de nascimento escolhido com carinho e a alegria de ver o boneco aparecer no lugar certinho.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o projeto do jogo de cada criança já carregado`,
    `Projetor ou TV grande conectada para o professor demonstrar cada passo na tela`,
    `Exemplo pronto: um mapa simples com um SpawnLocation já posicionado num chão seguro`,
    `Exemplo do erro: o mesmo mapa com o spawn no lugar errado (em cima de um buraco ou na beirada) para comparar`,
    `Cartão visual impresso mostrando o ícone do SpawnLocation e o botão azul "Play"`,
    `Adesivos de "Ponto de Partida" para premiar quem testar e acertar o nascimento do boneco`,
  ],
  conceitosChave: [
    `Spawn — o lugar onde o personagem aparece quando o jogo começa, como a porta de entrada da aventura.`,
    `SpawnLocation — a pecinha em forma de tapetinho de luz que marca esse ponto de nascimento no mapa.`,
    `Nascer no jogo — o momento em que o boneco surge na tela, prontinho para jogar.`,
    `Mover — arrastar uma peça para outro lugar usando o mouse ou as setinhas coloridas.`,
    `Testar (Play) — apertar o botão azul para entrar no jogo e ver se tudo funciona de verdade.`,
    `Chão seguro — um piso firme e plano, longe das beiradas e dos buracos, bom para o jogador começar.`,
    `Workspace — a caixa de peças do jogo, onde mora tudo que aparece no mapa, inclusive o spawn.`,
  ],
  treinamento: `## O que o professor precisa saber

O SpawnLocation é uma peça pronta do Roblox que marca onde o jogador nasce. No Roblox Studio você a encontra na aba "Model" (Modelo), no topo da tela: procure o botão "Spawn". Ao clicar nele, um tapetinho quadrado e brilhante aparece no mapa, geralmente no centro. Essa peça também passa a aparecer na lista do painel "Explorer" (Explorador), do lado direito, dentro de "Workspace". Se o painel "Explorer" não estiver visível, abra-o na aba "View" (Visualizar), clicando em "Explorer".

Para mover o spawn, clique nele uma vez para selecioná-lo e use a ferramenta "Move" (Mover), na aba "Model": surgem três setinhas coloridas (vermelha, verde e azul). Arraste a peça pelas setas vermelha e azul para deslizar pelo chão; evite a seta verde, que sobe e desce a peça no ar. A regra de ouro: o spawn deve ficar pousado num chão firme, longe das beiradas. Para testar, clique no botão azul "Play" (um triângulo), no topo, na aba "Home" ou "Test"; para sair, clique no quadrado vermelho "Stop". Deixe os projetos abertos antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma em frente ao projetor. Mostre o exemplo do erro: um mapa em que o boneco nasce numa beirada e cai. Pergunte: "por que será que ele caiu?". Conduza até a ideia de que faltou marcar um bom lugar para nascer. Apresente a palavra spawn como "a porta de entrada do jogo".

Conteúdo novo guiado (15 min): No seu computador, no projetor, abra a aba "Model" e clique em "Spawn". Mostre o tapetinho de luz que aparece. Aponte para o "Explorer" e mostre o nome "SpawnLocation" dentro de "Workspace". Pegue a ferramenta "Move", mostre as três setinhas e arraste o spawn para um chão bem firme e central. Aperte "Play", entre no jogo e mostre o boneco nascendo bem ali. Aperte "Stop". Faça isso devagar, narrando cada clique.

Mão na massa (25 min): Agora cada criança faz no próprio jogo. Passo a passo no quadro: 1) clicar em "Model"; 2) clicar em "Spawn"; 3) com a ferramenta "Move", arrastar o tapetinho para um chão seguro do cenário dela; 4) apertar "Play"; 5) ver o boneco nascer; 6) apertar "Stop". Circule pela sala ajudando. Quem terminar, experimenta mover o spawn para outro lugar e testar de novo, observando o boneco nascer no novo ponto.

Desafio e compartilhar (10 min): Desafie cada criança a escolher o "melhor lugar do mapa" para começar a aventura e justificar em uma frase ("escolhi aqui porque dá para ver o caminho"). Faça uma rodada rápida: dois ou três voluntários mostram no projetor o boneco nascendo no spawn deles. Distribua o adesivo de "Ponto de Partida" para quem testou e acertou.

## Como explicar para crianças

Use a analogia da casa: "O spawn é a porta da frente do seu jogo. Todo mundo que chega entra por ela." Chame o SpawnLocation de "tapetinho mágico de nascer". Explique o chão seguro como "um chão de verdade, plano, sem buraco e longe da beirada, senão o boneco escorrega e cai". Para o teste, diga: "apertar o Play é como abrir a porta e entrar para ver se está tudo certo". Reforce a brincadeira de mover, testar e observar como um detetive que confere se o boneco nasceu no lugar combinado.

## Erros comuns e como ajudar

A criança coloca o spawn no ar ou meio enterrado no chão: provavelmente usou a seta verde. Mostre a seta verde para abaixar a peça até encostar no chão. O boneco nasce e cai do mapa: o spawn ficou na beirada; arraste para mais perto do centro, sobre um piso firme. A criança não acha o botão "Spawn": confirme que ela está na aba "Model", não em "Home". O spawn some da vista: peça para clicar no nome "SpawnLocation" no "Explorer", que o Studio destaca a peça. A criança fica colocando vários spawns sem querer: explique que um só já basta e ajude a apagar os extras apertando a tecla "Delete" com a peça selecionada.`,
  exercicios: [
    {
      titulo: `Caça ao ponto de partida`,
      tipo: `Observação no projetor`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor dois mapas: um com o spawn num chão firme e central, outro com o spawn numa beirada perigosa. Peça para a turma apontar qual é o lugar seguro e explicar por quê. Conduza para a ideia de chão seguro.`,
      atividade: `Olhe os dois mapas na tela e aponte em qual deles o boneco vai nascer num lugar seguro. Diga uma razão: por que o outro lugar é perigoso?`,
      gabarito: `O lugar seguro é o do chão firme e central; o perigoso é o da beirada, porque o boneco pode escorregar e cair do mapa. Acerto = apontar o mapa seguro e citar a beirada ou o buraco como o perigo.`,
    },
    {
      titulo: `Colocando o tapetinho mágico`,
      tipo: `Prática no Roblox Studio`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor: aba "Model", botão "Spawn". Cada criança clica e faz o SpawnLocation aparecer no próprio jogo. Confirme com cada uma que o tapetinho de luz surgiu na tela e que o nome "SpawnLocation" aparece no "Explorer".`,
      atividade: `No seu jogo, clique na aba "Model" lá em cima e depois no botão "Spawn". Veja o tapetinho de luz aparecer no seu mapa. Achou? Diga "nasceu!".`,
      gabarito: `O SpawnLocation aparece no mapa como um tapetinho brilhante e seu nome surge dentro de "Workspace" no "Explorer". Acerto = a peça visível na tela. Erro comum: clicar em "Spawn" estando na aba "Home"; lembrar que o botão fica em "Model".`,
    },
    {
      titulo: `Arrastando para o chão seguro`,
      tipo: `Prática com a ferramenta Mover`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre a ferramenta "Move" e as três setinhas. Oriente a usar a seta vermelha e a azul para deslizar pelo chão e a verde só para encostar no piso. Cada criança move o spawn para um chão firme e central do cenário dela.`,
      atividade: `Clique no seu tapetinho e use a ferramenta "Move". Com as setinhas vermelha e azul, arraste o spawn para um chão bem firme, longe da beirada. Deixe ele bem pousado no chão.`,
      gabarito: `O SpawnLocation fica posicionado sobre um piso plano e central, encostado no chão, sem flutuar e longe das bordas. Acerto = peça assentada num lugar seguro. Erro comum: usar a seta verde e deixar o spawn no ar ou enterrado.`,
    },
    {
      titulo: `Testar: o boneco nasceu aqui?`,
      tipo: `Teste com o botão Play`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o botão azul "Play" (triângulo) e o quadrado vermelho "Stop". Cada criança aperta "Play", observa onde o boneco nasce e aperta "Stop". Pergunte se nasceu no lugar do spawn. Se não, ajude a reposicionar e testar de novo.`,
      atividade: `Aperte o botão azul "Play" e entre no seu jogo. Olhe: o boneco nasceu em cima do seu tapetinho? Depois aperte o quadrado vermelho "Stop" para sair.`,
      gabarito: `Ao apertar "Play", o personagem aparece exatamente sobre o SpawnLocation, em pé num chão firme; ao apertar "Stop", o jogo encerra. Acerto = boneco nascendo no ponto escolhido. Se nascer em outro lugar ou cair, o spawn precisa ser movido para um chão melhor.`,
    },
    {
      titulo: `O melhor lugar para começar`,
      tipo: `Desafio e justificativa`,
      tempo: `6 minutos`,
      guiaProfessor: `Desafie cada criança a escolher o melhor ponto de partida do mapa dela, mover o spawn para lá, testar e justificar a escolha em uma frase. Valorize razões como ver o caminho, estar perto do início da aventura ou ficar num lugar seguro. Dois ou três mostram no projetor.`,
      atividade: `Escolha o melhor lugar do seu mapa para a aventura começar. Mova o spawn para lá, aperte "Play" para testar e conte em uma frase por que esse é o melhor lugar.`,
      gabarito: `O spawn é reposicionado num ponto pensado pela criança, o teste confirma o boneco nascendo lá, e ela diz uma justificativa válida. Exemplo: "escolhi aqui porque dá para ver o caminho das moedas" ou "porque é um chão seguro e perto do começo". Acerto = mover, testar com sucesso e justificar.`,
    },
  ],
};
