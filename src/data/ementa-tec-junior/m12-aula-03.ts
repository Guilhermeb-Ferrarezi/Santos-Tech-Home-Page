import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Construindo o Cenário do Jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança será capaz de montar um cenário simples no Roblox Studio usando blocos prontos para criar chão, plataformas e obstáculos ao redor do seu personagem, pintando as peças com cores divertidas.`,
  descricao: `Nesta aula, as crianças constroem o "palco" onde o jogo delas vai acontecer. Na aula anterior, cada criança colocou o seu personagem (o asset) dentro de um mundo novo e vazio. Agora chegou a hora de encher esse mundo de coisas legais: um chão firme para andar, plataformas para subir e pular, e obstáculos coloridos para deixar o jogo mais divertido e cheio de aventura.

O cenário é muito importante porque é ele que conta a história do jogo. Um chão verde com plataformas marrons parece uma floresta; blocos azuis empilhados podem virar montanhas de gelo. Quando a criança escolhe as peças e as cores, ela está fazendo o trabalho de um verdadeiro designer de games: decidindo como o mundo vai parecer e como o jogador vai se sentir brincando ali.

Durante a aula, o professor mostra no projetor como arrastar blocos (Parts) para dentro do jogo, como mudá-los de lugar, como deixá-los maiores ou menores e como pintá-los com a paleta de cores. Cada criança vai juntar várias peças, encaixando umas nas outras como peças de Lego, até formar um cenário simples mas cheio de personalidade ao redor do seu personagem.

O foco é a alegria de construir e a liberdade de criar. Não existe cenário "errado": existe o cenário de cada criança, do jeitinho que ela imaginou. O professor incentiva, elogia as escolhas de cores e ajuda quem ficar travado, sempre lembrando que a gente pode mexer, apagar e tentar de novo quantas vezes quiser.`,
  materiais: [
    `Um computador por criança com o Roblox Studio já aberto e o projeto da aula anterior carregado (com o personagem dentro do mundo).`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar cada passo.`,
    `Projeto modelo do professor com um cenário simples já pronto (chão, duas plataformas e um obstáculo) para mostrar o resultado final.`,
    `Mouse para cada criança (muito mais fácil do que o touchpad para arrastar e clicar nos blocos).`,
    `Folhas de papel e lápis de cor para a atividade de desenhar o cenário antes de construir.`,
    `Cartões impressos com os nomes dos botões principais (Part, Move, Scale, Color) com um ícone grande em cada um.`,
    `Peças de montar (Lego ou blocos de encaixe) de verdade, alguns conjuntos, para a analogia do "mundo de blocos".`,
  ],
  conceitosChave: [
    `Cenário — é o lugar onde o jogo acontece, tipo o palco de um teatro: tem chão, paredes e tudo que está ao redor do personagem.`,
    `Bloco (Part) — uma pecinha quadrada ou retangular que a gente coloca no mundo, igual a uma peça de Lego que dá para empilhar e encaixar.`,
    `Chão — o bloco grande e baixinho onde o personagem fica em pé para não cair no vazio.`,
    `Plataforma — um bloco no alto, parado no ar, onde dá para pular em cima e subir mais alto.`,
    `Obstáculo — uma peça que fica no caminho e que o jogador precisa desviar ou pular para passar.`,
    `Pintar (Color) — escolher uma cor na paleta e dar para o bloco, para deixar o cenário bonito e colorido.`,
    `Encaixar — juntar dois blocos bem pertinho, um do lado ou em cima do outro, sem deixar buraco no meio.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

No Roblox Studio, tudo que aparece no mundo do jogo é feito de objetos. Os mais simples chamam-se "Parts" (blocos). Um Part é uma caixa que a gente pode mover, esticar, virar e pintar. Com vários Parts a criança constrói o cenário inteiro: o chão é um Part bem largo e baixinho; as plataformas são Parts no alto; os obstáculos são Parts no caminho.

Os botões que você mais vai usar ficam na aba "Home" (Início), no topo da tela. São quatro ferramentas: "Part" (cria um bloco novo), "Move" (move o bloco com setas), "Scale" (estica/encolhe com bolinhas) e "Color" (abre a paleta de cores). À direita fica o painel "Explorer" (lista de tudo no jogo) e o "Properties" (propriedades), mas com crianças pequenas use só os botões grandes da aba Home; não precisa abrir esses painéis.

Antes da aula, abra o seu projeto modelo e treine: clicar em "Part" para criar um bloco; clicar no bloco e usar "Scale" para deixá-lo largo e fino virando um chão; criar mais blocos e usar "Move" para colocá-los no alto; clicar em "Color" e escolher cores. Salve com Ctrl+S. Se conseguir fazer isso de olhos quase fechados, a aula flui.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Roblox Studio)

Aquecimento (10 min): Receba a turma e mostre no projetor o seu cenário modelo já pronto. Pergunte: "O que vocês veem aqui? Onde o personagem anda? Onde ele sobe?". Mostre as peças de Lego de verdade e diga que hoje vamos construir um mundo igual, mas no computador. Peça para cada um abrir o projeto da aula passada (já deve estar carregado) e achar o personagem na tela.

Conteúdo novo guiado (15 min): No projetor, vá até a aba "Home" no topo. Clique no botão "Part" — aparece um bloco. Clique nele uma vez para selecioná-lo (fica com contorno). Clique em "Scale", segure uma bolinha e arraste para deixar o bloco largo e fininho: pronto, virou o chão. Clique em "Part" de novo para um segundo bloco, clique em "Move" e use as setas para levantá-lo no ar: virou uma plataforma. Por fim, clique em "Color" e escolha uma cor na paleta. Faça devagar, narrando cada clique.

Mão na massa (25 min): Agora é a vez deles. Peça para cada criança: 1) criar o chão (Part + Scale para deixar largo); 2) criar duas plataformas (Part + Move para subir); 3) criar um obstáculo no caminho; 4) pintar tudo com "Color". Circule pela sala, sente ao lado de quem travar, elogie as cores. Lembre sempre: Ctrl+Z desfaz se errar. Salve com Ctrl+S de vez em quando.

Desafio + compartilhar (10 min): Lance o desafio "Uma cor especial": cada criança escolhe UMA cor diferente para o obstáculo, para ele ficar bem fácil de ver. Depois, faça a "volta da galeria": cada um mostra rapidinho o seu cenário no projetor ou no próprio monitor e diz uma frase: "No meu mundo tem...".

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a analogia do Lego o tempo todo: "Cada bloquinho é uma peça de Lego. A gente empilha e encaixa para construir o mundo." Chame o chão de "o chão para o boneco não cair no buraco" e as plataformas de "degraus mágicos no ar para subir". O obstáculo é "a pedra no caminho que o herói precisa pular". Pintar é "dar banho de tinta no bloco". Para mover, diga "puxe a setinha"; para esticar, "puxe a bolinha". Comemore cada bloco colocado.

## Erros comuns e como ajudar

Blocos que se sobrepõem e ficam tortos: mostre o Ctrl+Z e ajude a reposicionar com "Move". Crianças que criam blocos demais e se perdem: peça para apagar com a tecla Delete os que não quiserem. Confundir "Move" com "Scale": faça um cartão com ícone de cada um e aponte. Plataforma flutuando longe demais: ajude a aproximar do chão. Quem não acha a paleta: clique junto no botão "Color". E o erro mais comum de todos — esquecer de selecionar o bloco antes de mexer: lembre sempre "primeiro clique no bloco, depois na ferramenta".`,
  exercicios: [
    {
      titulo: `Meu Primeiro Chão`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor como criar um bloco e transformá-lo em chão. Faça você primeiro, bem devagar, depois deixe a turma repetir. Circule e confirme que cada criança conseguiu o bloco largo embaixo do personagem.`,
      atividade: `Clique no botão "Part" na aba "Home" para criar um bloco. Clique no bloco para selecioná-lo. Clique em "Scale" e puxe as bolinhas para deixá-lo bem largo e fininho. Coloque esse bloco embaixo do seu personagem: esse é o seu chão!`,
      gabarito: `A criança acertou quando existe um bloco largo e baixo posicionado embaixo do personagem, servindo de chão. O personagem deve estar apoiado nele e não flutuando no vazio. Se o chão cobre a base do boneco, está certo.`,
    },
    {
      titulo: `Degraus Mágicos no Ar`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Relembre o uso de "Part" e introduza o "Move" com a analogia das setinhas. Demonstre criando uma plataforma no ar. Ajude quem deixar a plataforma longe demais ou enterrada no chão.`,
      atividade: `Crie dois blocos novos com o botão "Part". Para cada um, clique no bloco, clique em "Move" e puxe a setinha para cima, deixando o bloco flutuando no ar como um degrau. Faça duas plataformas em alturas diferentes perto do seu personagem.`,
      gabarito: `Acertou quem tem duas plataformas (blocos) paradas no ar, em alturas diferentes, próximas ao personagem e ao chão. As plataformas precisam estar visíveis e separadas do chão, formando degraus por onde dá para imaginar o personagem subindo.`,
    },
    {
      titulo: `Desenhando o Meu Mundo`,
      tipo: `Desenho / papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua papel e lápis de cor. Peça para cada criança desenhar como quer que o cenário fique ANTES de mexer no computador. Mostre o seu desenho-exemplo simples. Não exija capricho: o objetivo é planejar e escolher cores.`,
      atividade: `Desenhe no papel o cenário do seu jogo: faça o chão, pelo menos duas plataformas e um obstáculo. Pinte cada parte com a cor que você quer usar no Roblox. Escreva ou desenhe seu personagem em algum lugar do mundo.`,
      gabarito: `O desenho está completo quando mostra os três elementos pedidos: chão, duas ou mais plataformas e um obstáculo, cada um com uma cor escolhida. Não importa o capricho do traço; importa que a criança planejou os elementos e atribuiu cores a eles.`,
    },
    {
      titulo: `A Pedra no Caminho`,
      tipo: `Desafio na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Explique o que é um obstáculo usando a história do herói que precisa desviar de uma pedra. Peça para cada criança criar UM obstáculo no meio do caminho e pintá-lo com uma cor que chame atenção, usando o botão "Color".`,
      atividade: `Crie um bloco novo e coloque-o no caminho entre as plataformas, como um obstáculo. Clique nele, depois em "Color" e escolha uma cor bem chamativa (vermelho, laranja ou amarelo) para que o jogador veja de longe que precisa desviar.`,
      gabarito: `Certo quando existe um bloco posicionado no caminho do cenário, pintado com uma cor chamativa diferente do chão e das plataformas. O obstáculo deve estar entre ou perto das plataformas, num lugar onde atrapalharia a passagem do personagem.`,
    },
    {
      titulo: `Roda do Meu Cenário`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma em roda (na frente do projetor ou cada um no seu monitor). Convide cada criança a mostrar o cenário e completar a frase "No meu mundo tem...". Faça perguntas gentis sobre as cores e elogie as escolhas. Encerre celebrando que todos construíram um mundo.`,
      atividade: `Mostre o seu cenário para a turma e complete a frase em voz alta: "No meu mundo tem chão de cor ..., plataformas de cor ... e um obstáculo de cor ...". Conte uma coisa que você mais gostou de construir.`,
      gabarito: `A participação está completa quando a criança aponta no seu cenário o chão, as plataformas e o obstáculo, dizendo as cores de cada um, e comenta algo de que gostou. Saber nomear os três elementos e suas cores mostra que ela entendeu o que construiu.`,
    },
  ],
};
