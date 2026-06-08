import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Juntando os sistemas",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Reunir movimento, placar, níveis, power-ups e itens numa única folha de eventos organizada e testar o jogo do início ao fim, consertando os bugs que aparecerem.`,
  descricao: `Nas últimas semanas as crianças construíram pedacinhos do jogo separados: o herói que anda, o placar que conta pontos, a troca de fases, os power-ups e os itens com tempo de poder. Cada pedaço funcionava sozinho, como peças soltas de um quebra-cabeça. Nesta aula chegou a hora mais empolgante: juntar tudo numa folha de eventos só, organizada e arrumada, para o jogo rodar do começo ao fim como um jogo de verdade.

Na Construct 3, todos os comandos do jogo moram na "Event Sheet" (a folha de eventos). Quando os blocos ficam bagunçados ou repetidos, o jogo fica confuso e aparecem os famosos bugs. Por isso, hoje vamos ensinar as crianças a organizar a folha usando grupos (Groups), que são como gavetas etiquetadas: uma gaveta para o movimento, uma para o placar, uma para os itens. Tudo no seu lugar fica fácil de achar e fácil de consertar.

A grande estrela da aula é o TESTE. As crianças vão clicar em "Preview" (o botão de Play), jogar o próprio jogo de verdade e prestar atenção no que dá errado: o ponto que não soma, o power-up que não acaba, a fase que não vira. Cada erro vira uma pista de detetive. Encontrar o bug e consertar é a parte mais divertida e a que mais ensina.

Ao final desta aula o esqueleto do jogo começa a rodar por completo: o herói anda, os itens fazem efeito, o placar conta, os poderes ligam e desligam e a fase muda. É a primeira vez que as crianças veem o jogo inteiro vivo, e isso costuma arrancar muitos sorrisos.`,
  materiais: [
    `Computadores com a Construct 3 aberta e o projeto do jogo de cada criança já carregado`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar`,
    `Um projeto-exemplo pronto do professor, com a folha de eventos já organizada em grupos (modelo para mostrar)`,
    `Um segundo projeto-exemplo com 3 bugs propositais para caçar juntos na turma`,
    `Folha de papel e lápis para a turma anotar a "Lista de Caça aos Bugs"`,
    `Adesivos ou carimbos de "Detetive de Bugs" para premiar quem consertar um erro`,
  ],
  conceitosChave: [
    `Folha de eventos — é a lista de regras do jogo na Construct 3, onde ficam todos os comandos de "quando isso acontecer, faça aquilo".`,
    `Grupo (Group) — é uma gaveta com etiqueta dentro da folha de eventos; guarda os comandos parecidos juntinhos, como "Movimento" ou "Placar".`,
    `Bug — é um errinho no jogo que faz algo funcionar diferente do esperado, como um ponto que não soma.`,
    `Testar (Preview) — é apertar o botão de Play para jogar o próprio jogo e ver se tudo funciona direito.`,
    `Organizar — é colocar cada comando no seu lugar certo para o jogo ficar arrumado e fácil de consertar.`,
    `Sistema — é um conjunto de comandos que cuida de uma coisa só, como o sistema de pontos ou o sistema de poderes.`,
    `Consertar (debugar) — é encontrar o errinho e arrumar o comando para o jogo voltar a funcionar bem.`,
  ],
  treinamento: `## O que o professor precisa saber

Na Construct 3, todo o "cérebro" do jogo fica na folha de eventos (Event Sheet). Para abri-la, clique na aba com o nome dela no alto da tela (geralmente "EventSheet1") ou dê dois cliques nela dentro do painel "Project" (à direita). Cada linha é um evento: a condição fica à esquerda e a ação à direita.

A ferramenta-chave de hoje é o GRUPO. Um grupo é uma pasta dentro da folha que junta vários eventos parecidos. Para criar: clique com o botão direito numa área vazia da folha, escolha "Add group", dê um nome (ex.: "Movimento") e clique em OK. Para colocar um evento dentro do grupo, basta arrastá-lo para baixo do título do grupo. Você pode recolher o grupo clicando na setinha ao lado do nome, deixando a folha limpa.

Não precisa dominar a Construct 3: hoje você principalmente organiza o que já existe e testa. Antes da aula, abra seu projeto-exemplo e confira que ele roda no "Preview" (botão de Play com triângulo no alto, ou tecla F5).

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): No projetor, abra a folha de eventos bagunçada de propósito. Pergunte: "Está fácil ou difícil de achar as coisas aqui?" Mostre que está tudo embolado. Faça a turma relembrar os sistemas já criados: movimento, placar, níveis, power-ups e itens. Escreva os cinco nomes no quadro.

CONTEÚDO NOVO GUIADO (15 min): No projetor, ensine a criar grupos. Clique com o botão direito numa área vazia da folha, escolha "Add group" e digite "Movimento". Repita criando "Placar", "Níveis", "Power-ups" e "Itens". Depois arraste cada evento existente para dentro da gaveta certa. Recolha os grupos pela setinha e mostre como a folha ficou arrumada. Diga em voz alta o nome de cada gaveta enquanto arrasta.

MÃO NA MASSA (25 min): As crianças abrem o próprio projeto e criam os mesmos cinco grupos na folha de eventos delas, arrastando seus eventos para as gavetas certas. Circule mesa a mesa. Depois de organizar, cada criança aperta "Preview" e joga o jogo do início ao fim, anotando na "Lista de Caça aos Bugs" tudo que der errado. Em seguida tentam consertar com a sua ajuda.

DESAFIO + COMPARTILHAR (10 min): Lance o desafio: "Quem encontrar e consertar um bug ganha o carimbo de Detetive!" Cada criança mostra rapidinho um bug que achou e como arrumou. Comemore cada conserto.

## Como explicar para crianças

Use a analogia da gaveta: "Imagine seu quarto com tudo no chão. Difícil achar o brinquedo, né? Agora imagine gavetas com etiquetas: meias na gaveta de meias, blocos na gaveta de blocos. Nossa folha de eventos é igual: cada gaveta guarda um tipo de comando."

Para os bugs, vire detetive: "Um bug é uma pegadinha escondida no jogo. O ponto não somou? Achamos uma pista! Vamos seguir a pista até pegar o errinho." Transforme o erro em diversão, nunca em vergonha.

## Erros comuns e como ajudar

Criança arrasta o evento para o grupo errado: peça para ela ler o nome da gaveta em voz alta e perguntar "esse comando é de movimento ou de placar?". Ajude a rearrastar.

Criança apaga um evento sem querer ao arrastar: ensine o atalho de desfazer (Ctrl+Z) imediatamente; deixe isso escrito no quadro.

Criança fica frustrada porque o jogo "quebrou": acolha. Diga que todo programador de verdade encontra bugs o tempo todo, e que achar o bug já é meia vitória. Conserte junto, passo a passo.

Criança quer só jogar e não organizar: combine que primeiro a gente arruma as gavetas, e a recompensa é jogar o jogo inteiro no Preview logo depois.

Grupo não aparece: confira se ela clicou com o botão direito numa área vazia (e não em cima de um evento) antes de escolher "Add group".`,
  exercicios: [
    {
      titulo: `Caça às gavetas`,
      tipo: `Aquecimento oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça com a turma toda, no início. Diga um comando do jogo e pergunte em qual gaveta ele mora. Aceite respostas em voz alta e celebre os acertos. Serve para relembrar os cinco sistemas.`,
      atividade: `O professor fala um comando e a criança responde a gaveta certa: "O herói anda para a direita" / "O ponto subiu para 10" / "Passou para a fase 2" / "Pegou o escudo e ficou forte" / "Pegou a moeda".`,
      gabarito: `"O herói anda para a direita" = Movimento. "O ponto subiu para 10" = Placar. "Passou para a fase 2" = Níveis. "Pegou o escudo e ficou forte" = Power-ups. "Pegou a moeda" = Itens.`,
    },
    {
      titulo: `Criando as cinco gavetas`,
      tipo: `Mão na massa guiado`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor e acompanhe mesa a mesa. Cada criança cria os cinco grupos na própria folha de eventos. Confira a grafia dos nomes e ajude quem não achar o "Add group".`,
      atividade: `Na folha de eventos, clique com o botão direito numa área vazia, escolha "Add group" e crie cinco gavetas com os nomes: Movimento, Placar, Níveis, Power-ups e Itens. Recolha cada grupo pela setinha para deixar a folha arrumada.`,
      gabarito: `A folha de eventos deve mostrar cinco grupos com os títulos exatos: Movimento, Placar, Níveis, Power-ups e Itens. Todos recolhidos pela setinha, deixando a folha limpa e organizada.`,
    },
    {
      titulo: `Cada comando na sua gaveta`,
      tipo: `Organização prática`,
      tempo: `8 minutos`,
      guiaProfessor: `As crianças arrastam os eventos que já existem para dentro do grupo certo. Circule e pergunte "esse comando cuida de quê?" sempre que houver dúvida. Lembre do Ctrl+Z se alguém apagar algo.`,
      atividade: `Arraste cada evento já pronto da sua folha para dentro da gaveta correta. O evento que faz o herói pular vai para Movimento; o que soma pontos vai para Placar; o que muda de fase vai para Níveis; o que liga o poder vai para Power-ups; o que coleta moedas vai para Itens.`,
      gabarito: `Pulo/andar dentro de Movimento; somar ponto dentro de Placar; mudar de fase dentro de Níveis; ligar/desligar poder dentro de Power-ups; coletar moeda/item dentro de Itens. Nenhum evento solto fora das gavetas.`,
    },
    {
      titulo: `Detetive de bugs`,
      tipo: `Teste e investigação`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada criança aperta "Preview" (Play / F5) e joga o jogo do início ao fim, anotando na Lista de Caça aos Bugs tudo que funcionar diferente do esperado. Ajude a transformar cada erro numa pista, sem dramatizar.`,
      atividade: `Aperte o botão "Preview" e jogue seu jogo inteiro. Teste tudo: andar, pular, pegar item, ligar poder, somar ponto e trocar de fase. Anote na sua lista cada coisa que não funcionou como você esperava.`,
      gabarito: `Uma Lista de Caça aos Bugs preenchida com pelo menos um problema observado e descrito, por exemplo: "o ponto não somou ao pegar a moeda", "o poder não desligou depois do tempo" ou "a fase não trocou no fim". Não há lista certa única; vale qualquer bug real anotado com clareza.`,
    },
    {
      titulo: `Conserta e mostra`,
      tipo: `Desafio final`,
      tempo: `9 minutos`,
      guiaProfessor: `Etapa mais difícil. Escolha com a criança UM bug da lista e consertem juntos, passo a passo, na folha de eventos. Depois cada criança mostra para a turma o erro e o conserto. Entregue o carimbo de Detetive.`,
      atividade: `Escolha um bug da sua lista e conserte o comando na gaveta certa. Exemplo: se o ponto não somava, abra a gaveta Placar e confira se o evento "ao pegar moeda, adicionar 1 ao Placar" está completo. Depois apresente em uma frase: qual era o bug e como você arrumou.`,
      gabarito: `O bug escolhido deixou de acontecer no novo Preview e a criança explica em uma frase a causa e a solução, por exemplo: "O ponto não somava porque faltava a ação de adicionar 1 ao Placar na gaveta Placar; eu adicionei a ação e agora soma certinho." Qualquer conserto válido com explicação clara conta como acerto.`,
    },
  ],
};
