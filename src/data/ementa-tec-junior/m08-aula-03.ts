import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Caça aos Pontos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a colocar itens colecionáveis no jogo e a fazer um número de pontos subir na tela toda vez que o personagem pega um item.`,
  descricao: `Nesta aula damos um passo muito importante: o jogo deixa de ser só "andar pela tela" e passa a ter um OBJETIVO divertido. As crianças vão espalhar moedas ou estrelas pelo cenário e ensinar o jogo a contar quantas o personagem já pegou. Quando o personagem encosta numa moeda, ela desaparece e o número de pontos sobe. Esse é o coração de quase todo jogo: fazer alguma coisa acontecer quando duas coisas se tocam.

Por que isso importa? Porque é aqui que a criança descobre a ideia de "regra do jogo". Até agora o personagem só caminhava (aula 2); agora ele tem uma missão: juntar o maior número de pontos. Ver o número crescendo na tela dá uma sensação imediata de recompensa, e isso prende a atenção e dá orgulho do que foi construído. É também a primeira vez que elas guardam uma informação que muda durante a partida, a pontuação, que chamamos de variável.

Tecnicamente, vamos usar três peças do Construct 3 que se encaixam como um quebra-cabeça: um novo objeto colecionável (a moeda ou estrela), uma variável global chamada Pontos para guardar a contagem, e um objeto de Texto na tela para mostrar esse número. No painel de eventos (Event Sheet) montamos a regra: "Quando o personagem colide com a moeda, some 1 nos Pontos, destrua a moeda e atualize o texto."

Ao final da aula, cada criança terá um jogo onde ela controla o personagem, sai caçando os itens espalhados e vê a pontuação subir de verdade. É uma vitória pequena que parece enorme para a idade, e prepara o terreno para as próximas aulas, em que vamos adicionar vidas, tela de vitória e inimigos.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com o projeto da aula 2 já aberto no Construct 3, com o personagem que anda na tela funcionando.`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo em tela grande.`,
    `Arquivo de exemplo pronto (versão do professor) já com moedas e pontuação funcionando, para mostrar o resultado final antes de começar.`,
    `Imagens simples de moeda e de estrela (PNG com fundo transparente) salvas numa pasta de fácil acesso, caso a criança não tenha desenho próprio pronto.`,
    `Folhas de papel e lápis de cor para o desafio de papel (desenhar onde espalhar os itens).`,
    `Cartazes ou fichas grandes com as palavras COLISÃO, PONTOS e DESTRUIR para apoiar a leitura mínima.`,
    `Adesivos ou carimbos para premiar quem alcançar a pontuação combinada (motivação).`,
  ],
  conceitosChave: [
    `Item colecionável — coisinha que o personagem pega no jogo, como moeda ou estrela, que some quando você encosta nela.`,
    `Pontos — o número que mostra quantas moedas você já pegou; ele sobe cada vez que você pega mais uma.`,
    `Variável — uma caixinha mágica do jogo que guarda um número e lembra dele durante a partida.`,
    `Colisão — o momento em que duas coisas se tocam na tela, tipo o personagem encostando na moeda.`,
    `Destruir — fazer um objeto sumir da tela; usamos para a moeda desaparecer depois de pega.`,
    `Texto na tela — as letras e números que aparecem para o jogador, como o placar de pontos.`,
    `Evento — a regra do jogo no formato "quando isso acontecer, faça aquilo".`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

A aula gira em torno de uma única regra: quando o personagem toca um item, a pontuação sobe e o item some. No Construct 3 isso se monta com três peças. Primeiro, um novo objeto do tipo Sprite que será a moeda ou estrela. Segundo, uma Variável Global (um número que o jogo guarda) chamada Pontos. Terceiro, um objeto de Texto que mostra esse número na tela. A regra que une tudo vive no Event Sheet (folha de eventos), o painel onde se escreve "Quando... Faça...". Você não precisa programar nada digitado: tudo é clicar em menus e escolher opções. Saiba apenas onde ficam três coisas: o botão de criar novo objeto, o menu de variáveis (clicando com o botão direito no Event Sheet) e as ações Add to (somar), Destroy (destruir) e Set text (mudar o texto). Domine esse caminho antes da aula fazendo o exemplo uma vez sozinho.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Abra o seu jogo-exemplo no projetor. Mostre o personagem caçando moedas e o número subindo. Pergunte: "O que acontece quando ele encosta na moeda?" Deixe a turma adivinhar a regra. Peça a cada criança que abra o projeto da aula 2 e teste se o personagem ainda anda (botão Play, o triângulo no canto superior direito).

CONTEÚDO NOVO GUIADO (15 min): Faça com a turma, devagar, projetando. (1) Clique duas vezes numa parte vazia do Layout para abrir a janela "Create new object type", escolha Sprite, dê o nome Moeda e desenhe ou carregue a imagem; feche o editor. (2) Com a Moeda selecionada, no painel Properties à esquerda, clique em Behaviors e não precisa adicionar nada agora. (3) Vá ao Event Sheet. Clique com o botão direito numa área vazia, escolha Add global variable, nome Pontos, valor inicial 0. (4) Volte ao Layout, dê duplo clique no vazio e crie um objeto Text; arraste-o para o topo da tela.

MÃO NA MASSA (25 min): Cada criança repete os passos no próprio projeto. Depois, monte a regra principal juntos: no Event Sheet, Add event, escolha o personagem, condição On collision with another object, escolha Moeda. Nesse evento, Add action três vezes: no objeto Pontos use Add 1; na Moeda use Destroy; no Text use Set text e digite Pontos (o nome da variável). Cada criança copia 5 a 8 moedas pela tela (Ctrl C, Ctrl V) e testa no Play.

DESAFIO E COMPARTILHAR (10 min): Peça que cada um espalhe mais moedas e tente bater uma meta (por exemplo 10 pontos). Faça uma volta rápida: cada criança mostra o placar dela no projetor.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de "caça ao tesouro": as moedas são tesouros escondidos e o personagem é o caçador. A pontuação é como um cofrinho: cada moeda que ele pega cai dentro do cofrinho e o número do cofrinho cresce. A colisão é "dar um abraço": quando o personagem abraça a moeda, ela vira ponto e desaparece num passe de mágica. Para a variável, diga que é uma "caixinha que guarda o número e nunca esquece". Evite a palavra "código"; diga "regra do jogo".

## Erros comuns e como ajudar

O erro mais frequente é a moeda não sumir: quase sempre a ação Destroy foi colocada no objeto errado (no personagem em vez da Moeda). Mostre como conferir clicando no evento. Outro erro é o número não subir: verifique se a ação Add foi feita na variável Pontos. Se o texto mostra a palavra Pontos em vez do número, é porque digitaram entre aspas; em Set text deve ir só Pontos, sem aspas. Se nada acontece ao encostar, confira se a condição é On collision e se escolheram a Moeda. Por fim, lembre-as de salvar (Menu, Save) antes do Play.`,
  exercicios: [
    {
      titulo: `Aquecimento: caça ao tesouro no exemplo`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Projete o jogo-exemplo pronto e jogue ao vivo, pegando algumas moedas de propósito. Pause e faça perguntas para a turma descobrir a regra sozinha, sem você contar a resposta. Aponte para o número subindo.`,
      atividade: `Assista ao professor jogar e responda em voz alta: "O que some quando o personagem encosta na moeda?" e "O número do canto sobe ou desce?". Depois cada criança aponta na tela onde está a pontuação.`,
      gabarito: `Respostas esperadas: a moeda some (é destruída) e o número de pontos sobe (aumenta de 1 em 1). A pontuação fica num texto no topo da tela. Sinal de acerto: a criança aponta corretamente o número e diz que ele cresce ao pegar moedas.`,
    },
    {
      titulo: `Criar a moeda e mostrar os pontos`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Faça projetando, passo a passo, e espere a turma acompanhar antes de avançar. Crie o Sprite Moeda (duplo clique no Layout, Sprite, nome Moeda), crie a variável global Pontos com valor 0 (botão direito no Event Sheet, Add global variable) e adicione um objeto Text no topo da tela.`,
      atividade: `No seu projeto, crie um Sprite chamado Moeda com a imagem de moeda ou estrela. Depois crie a variável global Pontos começando em 0. Por fim, adicione um objeto Text e arraste-o para o alto da tela.`,
      gabarito: `Acertou quem tem: um objeto Sprite chamado Moeda visível no Layout, uma variável global Pontos com valor inicial 0 listada no topo do Event Sheet, e um objeto Text posicionado no topo da tela. Se algum dos três faltar, ajude a refazer aquele passo.`,
    },
    {
      titulo: `A regra mágica: pegar e contar`,
      tipo: `prática na ferramenta`,
      tempo: `14 minutos`,
      guiaProfessor: `Monte o evento principal junto com a turma e depois deixe cada um refazer. No Event Sheet: Add event, escolher o personagem, condição On collision with another object, escolher Moeda. Em seguida Add action três vezes: Pontos Add 1; Moeda Destroy; Text Set text com Pontos (sem aspas). Teste no Play.`,
      atividade: `Crie o evento "Quando o personagem colide com a Moeda" e dentro dele coloque três ações nesta ordem: somar 1 em Pontos, destruir a Moeda e mudar o Text para mostrar Pontos. Aperte Play e pegue algumas moedas.`,
      gabarito: `Acertou quando, ao jogar, a moeda some ao ser tocada e o número no topo sobe de 1 em 1. Se a moeda não some, a ação Destroy está no objeto errado; se o número não sobe, falta o Add em Pontos; se aparece a palavra Pontos, foi digitado com aspas.`,
    },
    {
      titulo: `Mapa do tesouro no papel`,
      tipo: `desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua a folha com um retângulo desenhado (a "tela do jogo"). Peça para planejarem no papel antes de mexer no computador, assim espalham as moedas com intenção e não amontoadas.`,
      atividade: `Desenhe dentro do retângulo onde você vai colocar 10 moedas no seu jogo. Marque com um X o canto onde fica o placar de pontos e desenhe o personagem no ponto de partida.`,
      gabarito: `Acertou quem desenhou 10 moedas espalhadas (não todas grudadas), marcou um X num canto do topo para o placar e posicionou o personagem. O desenho deve mostrar caminho livre para o personagem alcançar as moedas. Conte as moedas junto com a criança para confirmar dez.`,
    },
    {
      titulo: `Desafio: bata a meta de 10 pontos`,
      tipo: `desafio / jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada criança use o mapa de papel para espalhar moedas de verdade no jogo (copiar e colar com Ctrl C e Ctrl V). Combine a meta de 10 pontos e premie quem conseguir. Faça a roda final mostrando o placar de cada um no projetor.`,
      atividade: `Espalhe pelo menos 10 moedas no seu jogo seguindo o seu mapa de papel. Aperte Play e tente pegar todas até o placar chegar a 10. Depois mostre o seu placar para a turma.`,
      gabarito: `Acertou quem colocou 10 ou mais moedas e conseguiu fazer o placar chegar a 10 (ou mais) durante o Play, com cada moeda sumindo ao ser pega. Sinal de sucesso: o número final no Text é igual ou maior que 10 e não sobraram moedas presas em lugar inalcançável.`,
    },
  ],
};
