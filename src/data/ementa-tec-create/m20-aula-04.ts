import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "HUD: as informações na tela de jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Compreender o que é a HUD de um jogo e montar no Canva uma barra de vida, um contador de pontos e um menu inicial com vários botões alinhados, aplicando hierarquia visual para que as informações apareçam sem atrapalhar a ação.`,
  descricao: `Nesta aula, os alunos mergulham na HUD, sigla em inglês para "Heads-Up Display", que é o conjunto de informações que fica na tela enquanto o jogador joga. São as coisas que o jogo precisa mostrar o tempo todo: a vida do personagem, os pontos, as moedas, o tempo que falta. Diferente dos menus, que aparecem quando a ação para, a HUD vive junto com o jogo, então ela tem um desafio especial: informar sem atrapalhar.

O coração da aula é entender que a HUD fica nos cantos e nas bordas da tela, deixando o centro livre para a ação. A barra de vida costuma ficar no canto de cima, à esquerda; os pontos e as moedas, no canto de cima, à direita; o tempo, no topo, no centro. Esse arranjo não é por acaso: ele segue o que o jogador já está acostumado a ver, e isso faz a leitura ser rápida, quase sem pensar. No Canva, os alunos vão recriar essa lógica usando formas, números e ícones organizados nos cantos de uma página.

O segundo conceito é a hierarquia visual: nem toda informação tem o mesmo peso. A vida, por exemplo, precisa saltar aos olhos, porque é urgente; o número de moedas pode ser menor e mais discreto. Os alunos vão praticar isso mudando tamanho, cor e contraste, de modo que o olho perceba primeiro o que é mais importante. Uma barra de vida vermelha e grossa "grita" mais que um pequeno contador de moedas no canto.

Ao final, cada aluno terá montado no Canva três elementos: uma barra de vida (com a parte cheia e a parte vazia), um contador de pontos com ícone e número, e um menu inicial completo com vários botões bem alinhados. Esses elementos vão entrar no projeto da UI do mês e, mais para a frente, serão reaproveitados dentro do jogo no Roblox Studio. A aula não pede que tudo fique perfeito: pede que a informação esteja clara, organizada e nos lugares certos.`,
  materiais: [
    `Computadores com acesso ao Canva pelo navegador, um por aluno`,
    `Conta no Canva já criada e com login feito antes da aula (de preferência conta de educação)`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo no Canva`,
    `Arquivo de exemplo: uma imagem de cenário de jogo (captura de tela) para os alunos posicionarem a HUD por cima`,
    `Modelo (template) no Canva já iniciado com uma página em tamanho de tela cheia (1920 x 1080) compartilhado com a turma`,
    `Folha impressa ou slide com a "planta da tela": um retângulo mostrando onde fica cada parte da HUD nos cantos`,
    `Paleta de cores e ícones do jogo definidos nas aulas anteriores, para manter a identidade visual`,
  ],
  conceitosChave: [
    `HUD — sigla de "Heads-Up Display"; é o conjunto de informações que fica sempre na tela enquanto o jogador joga, como vida, pontos e tempo.`,
    `Barra de vida — um indicador, geralmente em forma de barra, que mostra quanta energia ou saúde o personagem ainda tem.`,
    `Contador — um número que sobe ou desce na tela para marcar pontos, moedas ou vidas, quase sempre acompanhado de um ícone.`,
    `Hierarquia visual — a ordem de importância que damos aos elementos usando tamanho, cor e contraste, para o olho ver primeiro o que é mais importante.`,
    `Cantos e bordas — as áreas das beiradas da tela onde colocamos a HUD para deixar o centro livre para a ação.`,
    `Alinhamento — deixar os elementos em linha reta, encostados em uma mesma régua invisível, para o conjunto ficar organizado.`,
    `Contraste — a diferença forte entre cores (como texto claro sobre fundo escuro) que faz a informação ser fácil de ler por cima do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Canva para dar esta aula. Vamos usar poucas ferramentas: formas, texto, ícones (elementos) e os guias de alinhamento. No Canva, a barra de ferramentas fica à esquerda. Os botões que mais importam hoje são: "Elementos" (onde estão formas, linhas e ícones), "Texto" (para os números) e "Enviar imagem" (Uploads). Para alinhar, basta arrastar um objeto: linhas rosa ou roxas aparecem sozinhas mostrando o centro e as bordas. Para repetir um elemento igualzinho, clique nele e aperte "Ctrl + C" e depois "Ctrl + V", ou use "Ctrl + D" para duplicar. Para mudar a cor de uma forma, clique nela e use o quadradinho colorido no topo. O atalho "Ctrl + Z" desfaz qualquer erro.

## Passo a passo da aula

Aquecimento (10 min): Mostre no projetor a tela de um jogo conhecido (uma captura de tela vale). Peça que a turma aponte tudo que aparece na tela "o tempo todo": vida, pontos, moedas, tempo. Pergunte por que essas coisas ficam nos cantos e não no meio. Conduza a ideia de que a HUD informa sem tapar a ação.

Conteúdo novo guiado (15 min): No Canva, abra o modelo de tela cheia. Clique em "Elementos" e busque por "retângulo". Coloque um retângulo fino no canto de cima à esquerda: essa será a barra de vida vazia (cinza). Duplique com "Ctrl + D", deixe um por cima do outro, pinte o de cima de vermelho e encurte para mostrar vida pela metade. Depois clique em "Texto", escreva um número (por exemplo, "1500") e coloque no canto de cima à direita; busque um ícone de estrela ou moeda em "Elementos" e posicione ao lado. Mostre as linhas rosa de alinhamento aparecendo quando você arrasta. Por fim, crie um botão (retângulo com cantos arredondados mais o texto "JOGAR") e duplique três vezes para formar o menu, usando "Posição" e depois "Espaçar" para deixar os botões alinhados e com a mesma distância.

Mão na massa (25 min): Cada aluno monta, na sua página, a barra de vida (parte cheia e parte vazia), o contador de pontos com ícone e número, e o menu inicial com pelo menos três botões alinhados. Oriente a usar a paleta e os ícones do jogo deles. Circule pela sala conferindo alinhamento e contraste.

Desafio + compartilhar (10 min): Cada aluno mostra a tela para o colega do lado e pergunta: "dá pra ler a vida e os pontos num olhar?". Dois ou três voluntários apresentam no projetor.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que a HUD é como o painel do carro: o motorista olha de relance e já sabe a velocidade e a gasolina, sem parar de dirigir. A hierarquia visual é como gritar e sussurrar: a vida "grita" (grande e vermelha), as moedas "sussurram" (pequenas no canto). Fale que os cantos da tela são "os bolsos" do jogo, onde a informação fica guardada sem atrapalhar. Mostre sempre antes de mandar fazer, aponte na tela e diga o nome dos botões devagar. Prefira "canto de cima à esquerda" a termos técnicos.

## Erros comuns e como ajudar

O erro mais comum é colocar a HUD no meio da tela, tapando a ação; lembre-os de empurrar tudo para os cantos. Outro erro é a barra de vida não ter as duas partes: ensine que precisa do retângulo cinza (vazio) por baixo e do vermelho (cheio) por cima. Muitos esquecem o alinhamento e deixam os botões tortos; mostre o recurso "Posição" e "Espaçar" para alinhar de uma vez. Alguns usam texto escuro sobre fundo escuro e nada se lê; reforce o contraste, com número claro e, se preciso, uma sombra atrás. Por fim, há quem deixe tudo do mesmo tamanho, sem hierarquia; peça que aumentem a vida e diminuam as moedas para mostrar o que é mais importante.`,
  exercicios: [
    {
      titulo: `Montar a barra de vida`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno crie dois retângulos sobrepostos. Confira se o de baixo é cinza (vazio) e o de cima é colorido (cheio), e se a barra está no canto de cima à esquerda.`,
      atividade: `No Canva, crie uma barra de vida com duas partes: um retângulo cinza por baixo (vida total) e um retângulo vermelho por cima, encurtado para mostrar a vida pela metade. Posicione no canto de cima à esquerda.`,
      gabarito: `O aluno tem dois retângulos alinhados no canto superior esquerdo: o cinza embaixo, ocupando o comprimento total, e o vermelho em cima, ocupando cerca de metade. Dá para entender, num olhar, que o personagem está com metade da vida.`,
    },
    {
      titulo: `Contador de pontos com ícone`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre como inserir um número pelo botão "Texto" e um ícone de moeda ou estrela em "Elementos". Verifique o contraste do número sobre o fundo e o alinhamento entre ícone e número.`,
      atividade: `Crie um contador de pontos no canto de cima à direita: coloque um ícone (moeda ou estrela) e, ao lado, um número grande e legível. Ajuste a cor para que se leia bem por cima do cenário.`,
      gabarito: `Existe um ícone e um número alinhados na mesma altura, no canto superior direito. O número é claro e tem bom contraste com o fundo, sendo fácil de ler de longe.`,
    },
    {
      titulo: `Menu inicial alinhado`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Ensine a duplicar um botão com "Ctrl + D" e a usar "Posição" e "Espaçar" para alinhar. Reforce que todos os botões devem ter o mesmo tamanho e a mesma distância entre si.`,
      atividade: `Monte um menu inicial com pelo menos três botões (por exemplo, "JOGAR", "OPÇÕES" e "SAIR"), todos do mesmo tamanho, empilhados e perfeitamente alinhados, com a mesma distância entre eles.`,
      gabarito: `Há três ou mais botões iguais em tamanho, alinhados na mesma linha vertical e com espaçamento igual entre si. O conjunto parece organizado e os textos estão centralizados dentro de cada botão.`,
    },
    {
      titulo: `Teste do olhar em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Peça que cada aluno olhe a tela do colega por apenas três segundos e depois diga o que conseguiu ler. Oriente a apontar uma melhoria de contraste ou posição, sem julgar a pessoa.`,
      atividade: `Troque de lugar com o colega, olhe a HUD dele por três segundos e diga em voz alta quanta vida e quantos pontos o personagem tem. Depois, sugira uma melhoria de contraste ou de posição.`,
      gabarito: `A dupla consegue ler a vida e os pontos em poucos segundos. Cada aluno recebeu pelo menos uma sugestão concreta (por exemplo, "aumente a barra de vida" ou "deixe o número mais claro") e aplicou a mudança.`,
    },
    {
      titulo: `Tela de jogo completa`,
      tipo: `projeto curto`,
      tempo: `6 minutos`,
      guiaProfessor: `Oriente os alunos a colocar a imagem do cenário ao fundo (em "Uploads") e por cima dela todos os elementos da HUD. Confira se o centro ficou livre para a ação e se a hierarquia visual está clara.`,
      atividade: `Junte tudo numa só página: coloque a imagem do cenário ao fundo e, por cima, posicione a barra de vida, o contador de pontos e o tempo nos cantos certos, deixando o centro livre. Aplique hierarquia: a vida deve chamar mais atenção que as moedas.`,
      gabarito: `A página tem o cenário ao fundo e a HUD organizada nos cantos, com o centro livre para a ação. A barra de vida se destaca (maior ou mais forte) em relação ao contador de moedas, mostrando hierarquia visual clara, e todas as informações são legíveis por cima do cenário.`,
    },
  ],
};
