import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Montando o Cenário do Jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Usar Parts no Roblox Studio para construir, mover, redimensionar e ancorar objetos, aplicando materiais e cores, e testar o cenário com o botão Play para deixar a base do jogo pronta para receber a interface.`,
  descricao: `Nesta aula, os alunos colocam a mão na massa pela primeira vez como construtores de cenário no Roblox Studio. Depois de conhecer a tela do programa na aula anterior, agora eles vão criar o "chão", as "paredes" e os objetos do mundo usando as Parts, que são os blocos básicos de tudo no Roblox. Cada Part é como uma peça de Lego digital: pode ser esticada, girada, pintada e encaixada para formar um espaço onde o personagem vai andar.

O foco prático são quatro ações que se repetem o tempo todo na construção de jogos: mover (levar a peça para o lugar certo), redimensionar (mudar o tamanho dela), ancorar (travar a peça para que ela não caia com a gravidade) e aplicar aparência (escolher material e cor). Essas quatro ações, combinadas, já permitem montar uma cena simples e convincente: um piso firme, algumas plataformas e paredes que delimitam a área de jogo.

Um conceito central da aula é a ancoragem (Anchor). No Roblox, toda Part sofre gravidade por padrão. Se o aluno não ancorar o chão, ele despenca no vazio assim que apertar Play. Entender quando ancorar (estruturas fixas, como o piso e as paredes) e quando deixar solto (objetos que devem cair ou se mexer) é uma das primeiras lições importantes de lógica de jogo. O teste com o botão Play fecha o ciclo: o aluno entra no próprio mundo, vê o personagem andando e percebe na hora se algo está errado.

Ao final, cada aluno terá um cenário jogável e estável: um espaço com chão ancorado, alguns objetos com materiais e cores próprias, e um personagem que anda sem cair. Essa base é exatamente o palco onde, nas próximas aulas, a interface (UI) criada no Canva será importada e ligada ao jogo.`,
  materiais: [
    `Computadores com o Roblox Studio instalado (versão para computador), um por aluno`,
    `Conta Roblox já criada e com login feito no Studio antes da aula`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo`,
    `Arquivo de exemplo: um "place" base com um Baseplate vazio salvo para a turma copiar`,
    `Imagem de referência (slide ou folha) com um cenário simples já montado para os alunos copiarem`,
    `Mouse com roda de rolagem para cada aluno, que facilita muito mover a câmera e o zoom`,
    `Folha impressa com a lista de atalhos do dia (mover, girar, redimensionar, ancorar e Play)`,
  ],
  conceitosChave: [
    `Part — o bloco básico do Roblox; cada objeto do cenário (chão, parede, plataforma) é uma Part que podemos esticar e pintar.`,
    `Mover (Move) — ferramenta que arrasta a Part pelas setas coloridas para posicioná-la no lugar certo do mundo.`,
    `Redimensionar (Scale) — ferramenta que muda o tamanho da Part puxando as bolinhas das pontas, esticando ou encolhendo.`,
    `Ancorar (Anchor) — travar a Part no lugar para que a gravidade não a faça cair quando o jogo começa.`,
    `Material — a textura da superfície da Part (madeira, grama, metal, neon), que muda a aparência e a sensação do cenário.`,
    `Cor (Color) — a tinta aplicada na Part, escolhida na paleta de cores para deixar o cenário bonito e organizado.`,
    `Play — o botão que entra no jogo de verdade para testar o cenário e ver o personagem andando.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox Studio para dar esta aula. Tudo gira em torno de criar Parts e usar quatro ferramentas da barra de cima, na aba Home (Início): Select (Selecionar), Move (Mover), Scale (Escala/Redimensionar) e Rotate (Girar). Para criar uma Part, clique em Part na aba Home; ela aparece no centro da cena. A janela à direita chamada Explorer mostra a lista de tudo que existe no jogo; a janela Properties (Propriedades), logo abaixo, mostra os detalhes da peça selecionada, incluindo a caixinha Anchored e as opções Material e Color. Para mover a câmera, segure o botão direito do mouse e use as teclas W, A, S, D; a roda do mouse dá zoom. O botão Play fica no topo, com o ícone de triângulo. Se o Explorer ou o Properties não estiverem visíveis, abra-os pela aba View (Exibir).

## Passo a passo da aula

Aquecimento (10 min): Retome a aula anterior com perguntas rápidas: onde fica o Explorer? E o botão Play? Mostre no projetor a imagem de referência do cenário que a turma vai construir hoje e diga que ao final todos vão testar andando dentro dele.

Conteúdo novo guiado (15 min): No projetor, abra o place base. Clique em Part (aba Home) para criar o primeiro bloco. Selecione a ferramenta Scale e estique a Part até virar um chão largo e fino. Com ela selecionada, vá ao Properties e marque a caixinha Anchored. Crie mais uma Part, use a ferramenta Move (as setas coloridas) para colocá-la como plataforma. No Properties, mude Material para "Wood" e clique em Color para escolher uma cor. Aperte Play e ande com as teclas W, A, S, D para mostrar o cenário funcionando. Aperte Stop (quadrado vermelho) para voltar.

Mão na massa (25 min): Cada aluno cria o próprio cenário copiando a referência: um chão grande e ancorado, pelo menos duas plataformas e uma parede. Devem aplicar material e cor diferentes em cada Part e ancorar tudo que é estrutura fixa. Peça que testem no Play pelo menos duas vezes durante o trabalho para conferir se nada cai. Circule pela sala ajudando individualmente, sempre apontando os nomes dos botões.

Desafio + compartilhar (10 min): Lance o desafio de adicionar um objeto "decorativo" com material Neon e cor chamativa. Dois ou três voluntários mostram o cenário no projetor e contam qual Part mais gostaram de fazer.

## Como explicar de forma clara

Use a comparação com Lego: cada Part é uma peça, e o jogo é o tapete onde montamos. Diga que mover é "carregar a peça com as setas", redimensionar é "esticar como chiclete" e ancorar é "colar a peça no chão para ela não cair". Mostre primeiro, fale o nome do botão em voz alta enquanto aponta, e só depois mande os alunos repetirem. Para a idade de 10 a 15 anos, evite termos como "coordenadas" ou "eixos"; prefira "as setinhas vermelha, verde e azul". Repita a regra de ouro o tempo todo: "se é chão ou parede, ancora".

## Erros comuns e como ajudar

O erro número um é esquecer de ancorar o chão: ao apertar Play, tudo despenca. Ensine a verificar a caixinha Anchored no Properties antes de testar. Outro erro é mover a peça sem querer enquanto tentam girar a câmera; lembre que a câmera se move com o botão direito do mouse, não com o esquerdo. Muitos perdem a Part de vista; mostre a tecla "F" para focar a câmera na peça selecionada no Explorer. Alguns esticam a peça com a ferramenta Move em vez da Scale e ficam confusos; reforce qual botão é qual. Há quem clique em Color e não ache a paleta; aponte que ela abre numa janelinha. Por fim, se alguém apagar uma Part sem querer, ensine o "Ctrl + Z" para desfazer.`,
  exercicios: [
    {
      titulo: `Meu primeiro chão`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno clique em Part na aba Home e use a ferramenta Scale para esticar. Confira no Properties se a caixinha Anchored foi marcada antes de testar.`,
      atividade: `Crie uma Part, redimensione-a com a ferramenta Scale até virar um chão largo e fino, e marque a caixinha Anchored no painel Properties.`,
      gabarito: `O aluno tem uma Part esticada como piso, fina e larga, com a caixinha Anchored marcada. Ao apertar Play, o chão não cai e o personagem fica em pé sobre ele.`,
    },
    {
      titulo: `Plataformas e cores`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre como usar a ferramenta Move (as setas coloridas) para posicionar e como mudar Material e Color no Properties. Lembre de ancorar cada plataforma.`,
      atividade: `Adicione duas plataformas acima do chão usando a ferramenta Move, dê a cada uma um material e uma cor diferentes e ancore todas.`,
      gabarito: `Existem duas plataformas posicionadas acima do chão, cada uma com material e cor distintos, e todas estão ancoradas. No Play, elas permanecem firmes no lugar.`,
    },
    {
      titulo: `Testar andando`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Ensine a apertar Play e andar com W, A, S, D e pular com Espaço. Se algo cair, oriente a usar Stop, marcar o Anchored que faltou e testar de novo.`,
      atividade: `Aperte Play, ande pelo cenário e tente subir nas plataformas pulando. Se alguma peça cair, descubra qual não estava ancorada e conserte.`,
      gabarito: `O aluno consegue andar e pular pelo cenário sem que nenhuma peça caia. Se houve queda, ele identificou a Part sem Anchor, marcou a caixinha e testou novamente com sucesso.`,
    },
    {
      titulo: `Construção em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada aluno olhe o cenário do colega, aponte um ponto forte e sugira uma melhoria de aparência ou de organização, sem julgar a pessoa.`,
      atividade: `Troque de lugar com o colega, observe o cenário dele e sugira uma parede ou um objeto novo que deixaria o espaço mais interessante. Depois ajudem um ao outro a construir.`,
      gabarito: `A dupla acrescentou pelo menos uma Part nova combinada entre os dois, devidamente ancorada e com material e cor escolhidos, e cada aluno consegue explicar por que a mudança melhorou o cenário.`,
    },
    {
      titulo: `Roda de conversa: por que ancorar?`,
      tipo: `roda de conversa`,
      tempo: `4 minutos`,
      guiaProfessor: `Reúna a turma e conduza com perguntas abertas. Anote no quadro as ideias que surgirem para retomar nas próximas aulas, ligando o cenário pronto à interface que virá depois.`,
      atividade: `Em roda, cada aluno diz quando uma Part precisa ser ancorada e quando faz sentido deixá-la solta para cair, dando um exemplo do próprio cenário.`,
      gabarito: `A turma conclui que estruturas fixas (chão, paredes, plataformas) devem ser ancoradas para não caírem, e que objetos que devem cair ou se mover podem ficar soltos. Cada aluno cita ao menos um exemplo correto do seu jogo.`,
    },
  ],
};
