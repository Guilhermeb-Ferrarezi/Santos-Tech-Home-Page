import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Conserto na Prática: Adeus, Bugs!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Com a lista de bugs da aula anterior em mãos, cada aluno entra no Roblox Studio e conserta os problemas encontrados, ajustando colisões, posições de blocos voxel e scripts simples, testando de novo para confirmar que cada item da lista foi resolvido.`,
  descricao: `Na aula passada, cada criança virou um detetive e fez uma lista dos bugs do próprio jogo voxel: o personagem que atravessa a parede, o bloco flutuando no ar, o botão que não funciona. Hoje é o dia do conserto de verdade. Consertar um bug é como arrumar um brinquedo quebrado: a gente olha o que está errado, mexe na peça certa e testa para ver se funcionou. Não é mágica, é cuidado e paciência, um problema de cada vez.

Nesta aula o aluno aprende três tipos de conserto bem práticos no Roblox Studio. O primeiro é arrumar a colisão, que é o que faz um bloco ser duro ou ser fantasma; quando o personagem atravessa uma parede, quase sempre a colisão está desligada. O segundo é ajustar a posição de um bloco voxel que ficou no lugar errado, afundado no chão ou flutuando no céu, movendo ele de volta com as setinhas de mover. O terceiro é dar uma olhadinha em um script simples para ver se uma palavrinha foi digitada errada e arrumar essa letra.

O coração da aula é o ciclo testar, consertar, testar de novo. A criança aperta o botão Play para entrar no jogo, vê o bug acontecer, volta para o modo de edição, faz o conserto e aperta Play outra vez para conferir. Cada vez que um bug some, o aluno risca aquele item da lista e comemora. Esse hábito de testar depois de cada mudança é uma das coisas mais valiosas que um criador de jogos pode aprender, e fica para a vida toda.

O professor conduz como um mecânico chefe ao lado de pequenos ajudantes. Você mostra o conserto uma vez na tela grande, com calma, e depois acompanha cada criança no seu próprio jogo. Como cada lista de bugs é diferente, o professor circula bastante, ajuda a achar a peça certa e celebra cada "adeus, bug!". A vitória da aula é clara: ao final, cada aluno testa o jogo e mostra pelo menos um problema que sumiu da lista.`,
  materiais: [
    `Um computador por aluno com o Roblox Studio já aberto no projeto do jogo voxel de cada criança, com login feito na conta da escola.`,
    `A lista de bugs preenchida na aula anterior (Aula 1), impressa ou anotada, uma por aluno, com espaço para riscar o que foi resolvido.`,
    `Projetor ou TV ligado ao computador do professor para demonstrar cada clique e cada conserto na tela grande.`,
    `Um projeto de exemplo preparado pelo professor com três bugs de propósito: uma parede que se atravessa (colisão desligada), um bloco flutuando e um botão com erro de digitação no script.`,
    `Lápis ou caneta colorida para cada aluno riscar na lista os bugs já consertados.`,
    `Um cartaz de parede com o lema "Testar, consertar, testar de novo" para a turma ler junto.`,
    `Adesivos de "Caça-Bug Campeão" para entregar a quem resolver um bug e confirmar no teste.`,
  ],
  conceitosChave: [
    `Bug — um errinho no jogo que faz algo acontecer diferente do que a gente queria, como uma parede que deixa passar.`,
    `Conserto — arrumar o bug mexendo na peça certa, como colar um brinquedo que soltou.`,
    `Colisão (CanCollide) — a regra que diz se um bloco é duro (a gente bate nele) ou fantasma (a gente atravessa).`,
    `Posição — onde o bloco está no mundo do jogo; se estiver no lugar errado, a gente move ele de volta.`,
    `Script — um papelzinho de instruções que manda o jogo fazer coisas; se uma palavra estiver errada, ele não obedece.`,
    `Testar (Play) — apertar o botão de jogar para entrar no jogo e ver se o conserto funcionou de verdade.`,
    `Propriedades (Properties) — a fichinha do bloco onde a gente liga e desliga as regras dele, como a colisão.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você vai guiar três tipos de conserto no Roblox Studio. Não precisa ser especialista: precisa conhecer onde fica cada peça. As três janelas que mais importam são o Explorer (a lista de tudo que existe no jogo, no canto direito), o painel Properties (a ficha de regras do bloco selecionado, geralmente abaixo do Explorer) e a Viewport (a janela grande 3D no meio). Se Explorer ou Properties não estiverem visíveis, ligue-os na aba VIEW da faixa de menus do topo (a Ribbon), clicando em Explorer e em Properties.

Conserto 1, colisão: quando o personagem atravessa uma parede, selecione o bloco no Explorer ou clicando nele na Viewport, vá em Properties e procure a propriedade CanCollide. Se a caixinha estiver desmarcada, marque ela. Marcado significa "bloco duro", desmarcado significa "fantasma". Conserto 2, posição: se um bloco está flutuando ou afundado, selecione-o e use a ferramenta Move (aba HOME, botão Move, ícone com setas cruzadas), depois arraste as setas coloridas para reposicionar; a seta verde sobe e desce. Conserto 3, script: clique duas vezes no script dentro do Explorer (ícone de papel) para abri-lo. A maioria dos bugs desta idade é uma palavra digitada errada; compare com o exemplo certo e corrija a letra. Sempre que mexer em algo, aperte Play para testar.

Antes da aula: abra o projeto de cada aluno, deixe a lista de bugs de cada um na mesa e teste você mesmo o projeto de exemplo com os três bugs, para chegar seguro.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Roblox Studio)

10 min — Aquecimento: reúna a turma e leiam juntos o cartaz "Testar, consertar, testar de novo". Mostre no projetor o projeto de exemplo. Aperte o botão Play (triângulo no topo) e deixe as crianças verem o personagem atravessar a parede. Pergunte: o que está errado aqui? Diga que hoje somos mecânicos e vamos dar adeus aos bugs.

15 min — Conteúdo novo guiado: ainda no projeto de exemplo, conserte os três bugs devagar. Para a parede, clique nela na Viewport, abra Properties, ache CanCollide e marque a caixinha; aperte Play e mostre que agora a parede segura. Para o bloco flutuante, selecione, clique em Move na aba HOME e arraste a seta verde até o chão. Para o botão, dê dois cliques no script no Explorer, mostre a palavra errada e corrija. Aperte Play depois de cada conserto, nomeando cada botão em voz alta.

25 min — Mão na massa: cada criança abre a própria lista e o próprio jogo. Peça que escolham o primeiro bug da lista. Circule pela sala. Para colisão, leve até Properties e CanCollide. Para posição, até a ferramenta Move. Para script, abra o script junto e ache a letra errada. Depois de cada conserto, a criança aperta Play, confere e risca o item da lista. Comemore cada bug que some.

10 min — Desafio + compartilhar: peça que cada aluno aperte Play e mostre ao colega do lado um bug que sumiu. Entregue o adesivo de Caça-Bug Campeão. Roda rápida: cada um diz qual bug consertou.

## Como explicar para crianças

Fale que o jogo é como um robô que faz exatamente o que a gente escreveu; se algo está estranho, é porque uma peça ficou torta, não porque a criança é ruim. Colisão é fácil: um bloco pode ser duro como uma mesa ou fantasma como o vento; CanCollide marcado é mesa, desmarcado é vento. Posição é mudar o bloco de lugar com as setinhas, como arrumar um quadro torto na parede. Script é um bilhetinho de instruções; se a gente escreve "abre" errado, o jogo não entende. E o mais importante: depois de mexer, sempre apertar Play para ver se funcionou, como provar a comida depois de temperar.

## Erros comuns e como ajudar

A criança mexe em muitos blocos de uma vez e se perde: oriente um bug de cada vez, riscando da lista. Ela marca CanCollide no bloco errado: confira juntos qual parede atravessa apertando Play antes. Ela arrasta o bloco para muito longe com o Move: use Ctrl+Z (desfazer) e tente de novo devagar. Ela apaga um pedaço do script sem querer: Ctrl+Z resolve; nunca brigue, é normal. Ela esquece de testar e acha que consertou: lembre sempre de apertar Play. Ela fica frustrada com um bug difícil: divida em passos menores e celebre cada pequena vitória, deixando o bug mais difícil por último.`,
  exercicios: [
    {
      titulo: `Lendo a Minha Lista de Bugs`,
      tipo: `Organização e leitura (guiada)`,
      tempo: `7 minutos`,
      guiaProfessor: `Distribua a lista de bugs feita na Aula 1. Ajude cada criança a ler os itens e a escolher por qual começar, sugerindo o mais fácil primeiro. Quem lê pouco recebe ajuda na leitura. O objetivo é a criança apontar o primeiro bug que vai consertar.`,
      atividade: `Pegue a sua lista de bugs da aula passada. Leia (ou peça ajuda para ler) cada problema. Coloque o dedo no bug que parece mais fácil de arrumar. Esse vai ser o primeiro que você vai consertar hoje. Fale o nome dele em voz alta.`,
      gabarito: `O aluno acertou quando aponta um item específico da própria lista e diz qual bug vai consertar primeiro. Espera-se que escolha um mais simples (colisão ou posição). O professor confirma vendo o dedo no item e ouvindo a criança nomear o bug.`,
    },
    {
      titulo: `Adeus, Parede Fantasma!`,
      tipo: `Prática na ferramenta (guiada)`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza o conserto de colisão passo a passo. Peça que apertem Play e vejam o personagem atravessar. Depois, voltem ao modo de edição, cliquem na parede na Viewport, abram Properties e marquem CanCollide. Aperte Play de novo com a turma para confirmar. Espere todos chegarem juntos em cada passo.`,
      atividade: `Aperte o botão Play e ande até a parede que você atravessa. Volte clicando em parar. Clique na parede na janela grande. Olhe a ficha Properties e ache a palavra CanCollide. Marque a caixinha dela. Aperte Play de novo e tente atravessar: agora a parede tem que te segurar!`,
      gabarito: `Acertou quando o CanCollide do bloco está marcado e, ao apertar Play, o personagem não atravessa mais a parede. O professor confirma vendo a caixinha marcada em Properties e testando no Play. Se ainda atravessar, confira se foi marcado o bloco certo.`,
    },
    {
      titulo: `Colocando o Bloco no Lugar`,
      tipo: `Prática na ferramenta (autônoma)`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora o conserto de posição. Cada aluno acha na lista um bloco voxel fora do lugar (flutuando ou afundado). Reforce o uso da ferramenta Move na aba HOME e da seta verde para subir e descer. Lembre do Ctrl+Z se exagerar. Acompanhe e peça para testar com Play ao final.`,
      atividade: `Ache na sua lista um bloco que está flutuando no ar ou afundado no chão. Clique nele. Na aba HOME, clique no botão Move (o das setinhas). Pegue a seta verde e arraste devagar até o bloco ficar no lugar certo. Se errar muito, aperte Ctrl e Z para desfazer. Aperte Play e veja se ficou bom.`,
      gabarito: `Acertou quando o bloco está reposicionado corretamente (apoiado no chão ou alinhado com os vizinhos, sem flutuar nem afundar) e o aluno usou a ferramenta Move para isso. O professor confirma olhando a Viewport e o resultado no Play. Risque o item da lista.`,
    },
    {
      titulo: `Caça à Letra Errada no Script`,
      tipo: `Prática na ferramenta (guiada, dificuldade maior)`,
      tempo: `12 minutos`,
      guiaProfessor: `Conserto de script. Faça com quem tem um bug de botão ou interação na lista; quem não tem, ajuda um colega. Dê dois cliques no script no Explorer para abrir. Mostre o exemplo certo no projetor e ajude a comparar letra a letra para achar a palavra digitada errada. Corrija junto e teste com Play.`,
      atividade: `No Explorer, ache o papelzinho de instruções (script) do botão que não funciona e dê dois cliques nele. Olhe o exemplo certo na tela do professor. Compare com o seu e procure a palavra escrita errada. Apague a letra errada e digite a certa. Aperte Play e teste o botão.`,
      gabarito: `Acertou quando a palavra digitada errada foi corrigida para ficar igual ao exemplo e, ao apertar Play, o botão (ou interação) volta a funcionar. O professor confirma comparando o script com o modelo e testando no Play. Aceite ajuda do professor na digitação.`,
    },
    {
      titulo: `Missão Adeus, Bugs!`,
      tipo: `Desafio (autônomo, dificuldade maior)`,
      tempo: `12 minutos`,
      guiaProfessor: `Para quem já consertou os primeiros bugs. O aluno escolhe sozinho o próximo item da lista, decide se é colisão, posição ou script, conserta e testa com Play sem que você dite os passos. Ajude só se travar. Confira se a lista está sendo riscada item a item. Premie com o adesivo de Caça-Bug Campeão.`,
      atividade: `Sozinho, escolha mais um bug da sua lista. Pense: é uma parede que atravessa (colisão), um bloco fora do lugar (posição) ou um botão que não obedece (script)? Use o conserto certo, aperte Play para testar e risque o bug da lista quando ele sumir. Tente acabar com o máximo de bugs que conseguir.`,
      gabarito: `Acertou quando o aluno, sozinho, identifica o tipo de bug, aplica o conserto correto (CanCollide, Move ou correção no script), testa com Play e risca o item resolvido na lista. Cada bug confirmado no teste vale o adesivo. O professor verifica a lista riscada e os consertos funcionando no Play.`,
    },
  ],
};
