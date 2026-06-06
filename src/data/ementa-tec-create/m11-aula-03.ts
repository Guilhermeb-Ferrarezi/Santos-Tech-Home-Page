import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Itens e Acessórios do Personagem em 3D",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar itens e acessórios do personagem (como armas, chapéus, mochilas ou ferramentas) em volumes separados no MagicaVoxel e encaixá-los de forma coerente no corpo já modelado.`,
  descricao: `Nesta aula os alunos dão um passo importante na construção dos personagens do próprio jogo: eles deixam de modelar apenas o corpo e começam a criar os objetos que acompanham cada personagem. Uma espada, um chapéu, uma mochila ou uma ferramenta são detalhes que contam a história do personagem e ajudam o jogador a entender quem ele é só de olhar. No MagicaVoxel, esses itens não precisam fazer parte do mesmo bloco do corpo: o ideal é criá-los como volumes separados, que podem ser movidos, girados e ajustados sem bagunçar o que já está pronto.

O grande conceito da aula é trabalhar com vários volumes ao mesmo tempo dentro de uma única cena. Cada volume é como uma peça de Lego independente: o aluno pode selecioná-la, posicioná-la e voltar a editá-la quando quiser. Isso ensina organização e dá liberdade para experimentar, porque um erro no acessório nunca apaga o corpo do personagem.

Além de modelar, os alunos vão aprender a encaixar os itens no lugar certo: a espada na mão, o chapéu na cabeça, a mochila nas costas. Essa noção de proporção e posicionamento é o que mantém a coerência visual do personagem. Um chapéu gigante numa cabeça pequena ou uma mochila flutuando longe das costas quebram a ilusão, e parte do trabalho é justamente perceber e corrigir esses detalhes.

Ao final, cada aluno terá ao menos um item ou acessório encaixado no seu personagem, deixando-o mais completo e pronto para os próximos passos do mês, quando montaremos o cenário e cuidaremos das cores e dos materiais.`,
  materiais: [
    `Computadores com o MagicaVoxel instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor mostrar a tela e os passos em tempo real`,
    `Arquivo de exemplo com o corpo de um personagem já modelado (.vox) para demonstração`,
    `Imagens de referência de itens de jogos (espadas, chapéus, mochilas, ferramentas) impressas ou no projetor`,
    `Os arquivos dos personagens que os alunos modelaram na Aula 2, salvos e prontos para abrir`,
    `Folha simples de papel para o aluno rascunhar o item antes de modelar`,
  ],
  conceitosChave: [
    `Volume — cada bloco independente de voxels dentro da cena; pode ser movido e editado sem afetar os outros.`,
    `Acessório — objeto que acompanha o personagem, como arma, chapéu ou mochila, e ajuda a contar quem ele é.`,
    `Painel Outline — a lista, à direita da tela, que mostra todos os volumes da cena e permite selecionar cada um.`,
    `Ferramenta Move — modo que serve para arrastar e reposicionar um volume inteiro na cena.`,
    `Encaixe — ato de posicionar o acessório no lugar certo do corpo, respeitando a proporção e o contato com o personagem.`,
    `Coerência visual — quando o tamanho, o estilo e a posição dos itens combinam com o personagem e parecem do mesmo mundo.`,
    `Cena — o espaço completo do projeto onde todos os volumes (corpo e acessórios) convivem juntos.`,
  ],
  treinamento: `## O que o professor precisa saber

Até aqui os alunos modelaram o corpo do personagem dentro de um único volume. Hoje a ideia muda: cada acessório vira um volume novo e separado. No MagicaVoxel, a cena pode ter vários volumes ao mesmo tempo, listados no painel "Outline", do lado direito da tela. Você cria um volume novo, modela o item dentro dele e depois usa a ferramenta "Move" para arrastá-lo até o lugar certo do corpo. Como cada volume é independente, dá para mexer no chapéu sem nunca correr o risco de apagar o rosto.

Antes da aula, abra o MagicaVoxel e localize: à esquerda as ferramentas de edição (Attach, Erase, Paint) e os modos "Box", "Line", "Center", "Voxel"; no topo os modos de transformação, em especial o "Move"; à direita o painel "Outline" com a lista de volumes e os botões de adicionar (ícone de "+") e duplicar. Tenha o arquivo de exemplo do corpo já aberto.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

Aquecimento (10 min): peça que cada aluno abra o personagem da Aula 2. Pergunte: "que item esse personagem carregaria?" Mostre referências no projetor e peça um rascunho rápido no papel de um único item simples.

Conteúdo novo guiado (15 min): no projetor, com o corpo aberto, abra o painel "Outline" à direita e mostre que ali está listado o volume do corpo. Clique no botão de adicionar volume (ícone "+") para criar um volume vazio novo: ele aparece como um novo item na lista. Selecione esse volume novo, use a ferramenta "Attach" com o modo "Box" e modele um item simples, por exemplo uma caixa que vira uma mochila. Em seguida, ative o modo "Move" no topo e arraste o volume inteiro até as costas do personagem, mostrando como ele encaixa. Repita selecionando o corpo no "Outline" para provar que os dois são independentes.

Mão na massa (25 min): cada aluno cria pelo menos um volume novo para o seu acessório. Circule pela sala lembrando o fluxo: adicionar volume no "Outline", selecionar o volume novo, modelar com "Attach" + "Box", depois "Move" para encaixar. Incentive quem terminar rápido a criar um segundo item. Lembre-os de salvar com "Ctrl + S" de tempos em tempos.

Desafio e compartilhar (10 min): proponha o desafio de ajustar o tamanho do item para ficar coerente com o personagem. Cada aluno mostra rapidamente o personagem com o acessório encaixado e diz por que escolheu aquele item.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação com Lego: "Cada volume é uma peça separada. Você pode montar o chapéu numa peça e encaixar na cabeça depois, sem desmontar o rosto." Reforce que criar um volume novo é como pegar uma folha em branco ao lado do desenho que já existe. Ao falar de encaixe, peça que imaginem o personagem como um boneco de verdade: "Onde a mão segura a espada? A mochila fica grudada nas costas ou flutuando?" Perguntas concretas ajudam mais do que regras abstratas.

## Erros comuns e como ajudar

O erro mais comum é o aluno continuar modelando o item dentro do mesmo volume do corpo: ensine sempre a clicar no "+" do "Outline" primeiro e a conferir se o item novo virou uma linha separada na lista. Outro erro é usar "Move" achando que está só pintando alguns voxels, e acabar arrastando o corpo inteiro sem querer; mostre que "Move" empurra o volume todo e que é preciso selecionar o volume certo antes. Há também quem faça acessórios desproporcionais, gigantes ou flutuando longe do corpo: peça que comparem o tamanho do item com a mão ou a cabeça e que aproximem o volume até encostar. Por fim, lembre constantemente de salvar com "Ctrl + S", porque a empolgação faz muitos esquecerem.`,
  exercicios: [
    {
      titulo: `Criando meu primeiro volume separado`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno abra o personagem da Aula 2. Acompanhe quem ainda confunde o painel "Outline" e mostre na tela do projetor onde fica o botão de adicionar volume.`,
      atividade: `Com o seu personagem aberto, clique no botão de adicionar volume (ícone "+") no painel "Outline", à direita. Confirme que apareceu uma nova linha na lista. Selecione esse volume novo e modele uma caixa simples com a ferramenta "Attach" no modo "Box".`,
      gabarito: `O aluno deve ter dois volumes listados no "Outline": o corpo e o volume novo com a caixa. O sucesso é confirmado quando, ao selecionar o corpo, a caixa nova fica destacada como item separado, provando que são volumes independentes.`,
    },
    {
      titulo: `Encaixando o acessório no lugar certo`,
      tipo: `Desafio individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce a diferença entre editar voxels e mover o volume inteiro. Mostre que é preciso selecionar o volume certo no "Outline" antes de ativar o modo "Move".`,
      atividade: `Transforme a caixa do exercício anterior num acessório de verdade (mochila, chapéu ou ferramenta). Depois ative o modo "Move" no topo e arraste o volume até encaixá-lo no corpo: o chapéu na cabeça, a mochila nas costas ou a ferramenta na mão.`,
      gabarito: `O acessório deve aparecer encostado na parte certa do corpo, sem flutuar longe nem atravessar o personagem de forma estranha. O aluno consegue explicar qual volume selecionou e por que usou o modo "Move".`,
    },
    {
      titulo: `Olho clínico em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e oriente que a crítica seja gentil e específica. Circule ouvindo os comentários e ajude quem não souber como ajustar o tamanho do item.`,
      atividade: `Troque de lugar com o colega e olhe o personagem dele. Diga uma coisa que ficou boa e uma sugestão sobre o acessório: ele está grande demais, pequeno demais ou no lugar errado? Depois cada um volta e ajusta o próprio item com base na dica recebida.`,
      gabarito: `Cada dupla deve apontar pelo menos um ponto positivo e uma sugestão de coerência visual. O resultado esperado é cada personagem com o acessório mais proporcional e melhor encaixado depois do ajuste.`,
    },
    {
      titulo: `Um personagem, dois itens`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Indicado para quem terminou os itens anteriores. Lembre os alunos de criar um volume novo para o segundo item, e não reaproveitar o mesmo do primeiro.`,
      atividade: `Crie um segundo acessório para o seu personagem em um novo volume separado (por exemplo, além da espada, um escudo; além do chapéu, uma mochila). Encaixe os dois itens mantendo o estilo e o tamanho coerentes entre si e com o personagem.`,
      gabarito: `O "Outline" deve mostrar três volumes ou mais: corpo e dois acessórios distintos. Os dois itens devem estar encaixados, com tamanhos compatíveis entre si, sem um item gigante ao lado de outro minúsculo.`,
    },
    {
      titulo: `Roda de conversa: o que o item conta`,
      tipo: `Roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Sente a turma em círculo. Dê voz a todos, faça perguntas curtas e conecte as respostas à ideia de coerência visual e de narrativa do jogo.`,
      atividade: `Cada aluno mostra o personagem com seus acessórios e responde: que história esse item conta sobre o personagem? Por que esse acessório combina com o jogo de vocês? O que mudou no personagem depois de ganhar o item?`,
      gabarito: `Não há resposta única. Espera-se que cada aluno justifique a escolha do acessório ligando-o ao personagem ou ao jogo e que reconheça que o tamanho e a posição do item importam para a coerência visual.`,
    },
  ],
};
