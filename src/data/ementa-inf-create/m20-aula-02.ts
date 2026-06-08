import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "O Que é uma Macro, na Prática",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Mostrar na prática o que uma macro faz, ativar a aba Desenvolvedor, conhecer a área de macros do Excel e escolher a tarefa repetitiva que cada aluno vai automatizar no mês.`,
  descricao: `Na aula passada os alunos descobriram que existe um "robô" dentro do Excel. Agora chega o momento de ver esse robô trabalhando de verdade. Uma macro é simplesmente uma sequência de ações que o Excel guarda na memória para repetir sempre que você pedir. Imagine que você precisa, toda semana, pintar o cabeçalho de azul, colocar o título em negrito, somar uma coluna e ordenar os nomes em ordem alfabética. Isso são quatro ou cinco passos manuais. Com uma macro, tudo isso acontece com um único clique, em menos de um segundo.

Nesta aula o foco não é ainda gravar nem programar, e sim entender a ideia e preparar o terreno. O professor vai abrir um arquivo de exemplo já pronto, mostrar uma planilha "bagunçada" e rodar uma macro na frente da turma. Os alunos vão ver, com os próprios olhos, a planilha se transformar sozinha: formatada, somada e organizada. Esse efeito "mágico" desperta o interesse e dá sentido a tudo que vem nas próximas aulas.

Em seguida, cada aluno aprende a deixar o Excel pronto para trabalhar com macros. Por padrão, a faixa de opções do Excel não mostra a aba Desenvolvedor, que é onde ficam os botões de macro. Ativar essa aba é o primeiro passo concreto e técnico da aula, e todos farão isso no próprio computador. Depois, vão conhecer a janela "Macros", onde o Excel lista todas as automações disponíveis.

O fechamento da aula é a decisão mais importante do mês: escolher qual tarefa repetitiva cada aluno vai automatizar. Essa escolha será o entregável do mês, então o professor ajuda a turma a pensar em tarefas chatas e repetidas do dia a dia (lista de presença, boletim, controle de mesada, ranking de jogos) que façam sentido transformar em "piloto automático".`,
  materiais: [
    `Computadores com Microsoft Excel instalado (versão com suporte a macros, formato .xlsm) e o editor VBA disponível`,
    `Projetor ou tela grande para o professor demonstrar a macro rodando ao vivo`,
    `Arquivo de exemplo "lista-bagunçada.xlsm" com uma planilha desorganizada e uma macro pronta chamada ArrumarTudo`,
    `Cópia limpa do mesmo arquivo de exemplo para cada aluno abrir no próprio computador`,
    `Folha impressa ou slide com a lista de "tarefas repetitivas" para inspirar a escolha do entregável do mês`,
    `Caderno ou bloco de notas para o aluno anotar a tarefa que vai automatizar`,
    `Conta de usuário com permissão para alterar as opções da faixa de opções do Excel (sem bloqueio de administrador)`,
  ],
  conceitosChave: [
    `Macro — uma sequência de ações gravada pelo Excel para ser repetida depois com um único comando.`,
    `Aba Desenvolvedor — guia escondida da faixa de opções onde ficam os botões para gravar, ver e rodar macros.`,
    `Faixa de opções — a barra colorida com abas (Página Inicial, Inserir, etc.) no topo do Excel, também chamada de Ribbon.`,
    `Automação — fazer o computador executar sozinho uma tarefa que antes era feita à mão, passo a passo.`,
    `Tarefa repetitiva — atividade chata que você refaz do mesmo jeito várias vezes, candidata perfeita para virar macro.`,
    `Arquivo .xlsm — formato especial do Excel que consegue guardar macros dentro da planilha (o .xlsx comum não guarda).`,
    `Janela Macros — a lista onde o Excel mostra todas as macros disponíveis e os botões Executar, Editar e Excluir.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar programação para dar esta aula. Uma macro é só o Excel guardando uma sequência de cliques e digitações para repetir depois. Pense nela como uma receita de bolo: você anota os passos uma vez e, sempre que quiser o bolo, é só seguir a receita. Nesta aula o aluno ainda não grava nem escreve código; ele só vê uma macro funcionando e prepara o Excel. Antes da aula, abra o arquivo de exemplo "lista-bagunçada.xlsm", clique em "Habilitar conteúdo" se aparecer o aviso amarelo de segurança, e teste rodar a macro ArrumarTudo pelo menos uma vez para garantir que funciona no computador da sala. Tenha também uma cópia limpa para cada aluno.

## Passo a passo da aula

Aquecimento (10 min): Retome a aula 1 com uma pergunta: "quem lembra o que é o robô do Excel?". Mostre a planilha de exemplo bagunçada no projetor, com nomes fora de ordem, sem formatação e sem total. Pergunte: "quantos cliques eu levaria para arrumar tudo isso à mão?". Deixe a turma estimar.

Conteúdo novo guiado (15 min): No projetor, abra a aba Desenvolvedor (se ainda não estiver visível). Clique em "Macros", selecione ArrumarTudo e clique em "Executar". A planilha se transforma na hora: cabeçalho pintado, negrito, soma e ordem. Faça de novo, devagar, dizendo "um clique fez o trabalho de muitos". Agora ensine a ativar a aba Desenvolvedor: clique em "Arquivo", depois "Opções", depois "Personalizar Faixa de Opções", marque a caixinha "Desenvolvedor" na lista da direita e clique em "OK". Mostre que surgiu uma aba nova no topo.

Mão na massa (25 min): Cada aluno abre sua cópia limpa do arquivo. Primeiro, ativam a aba Desenvolvedor sozinhos, seguindo os mesmos passos (Arquivo, Opções, Personalizar Faixa de Opções, marcar Desenvolvedor, OK). Circule pela sala conferindo. Depois, todos clicam em "Habilitar conteúdo" no aviso amarelo, abrem Desenvolvedor, clicam em "Macros", selecionam ArrumarTudo e clicam em "Executar". Cada aluno vê a própria planilha se arrumar sozinha. Peça que rodem mais de uma vez e que cliquem em "Desfazer" para comparar o antes e o depois.

Desafio e compartilhar (10 min): Hora de escolher o entregável do mês. Mostre a lista de tarefas repetitivas e peça que cada aluno anote no caderno uma tarefa chata do dia a dia que gostaria de colocar no piloto automático. Faça uma rodada rápida em que cada um diz em voz alta qual escolheu.

## Como explicar de forma clara

Use comparações do mundo deles. Diga que a macro é como um atalho de videogame: você aperta um botão e o personagem faz uma combinação inteira de golpes que levaria vários comandos. Ou como pedir uma música numa playlist: você não toca nota por nota, você só dá play. Evite a palavra "programar" por enquanto; fale em "gravar passos para repetir". Sempre que rodar a macro, narre o que está acontecendo: "olha, ele pintou, agora colocou em negrito, agora somou". Reforce que macro não é mágica, é só o computador seguindo uma lista de ordens muito rápido.

## Erros comuns e como ajudar

O erro mais frequente é a aba Desenvolvedor não aparecer: quase sempre o aluno esqueceu de marcar a caixinha ou clicou em "Cancelar" em vez de "OK"; refaça o caminho com ele. Outro tropeço é o aviso amarelo de segurança das macros: explique que é normal e que basta clicar em "Habilitar conteúdo". Alguns alunos abrem o arquivo errado, no formato .xlsx sem macro; confira que estão no arquivo .xlsm. Se a macro "não faz nada", normalmente o conteúdo não foi habilitado ou eles já tinham rodado antes; peça para clicar em "Desfazer" e rodar de novo. Por fim, alguns vão querer escolher uma tarefa grande demais; ajude a deixar simples e bem definida.`,
  exercicios: [
    {
      titulo: `Ativando a aba Desenvolvedor`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza o passo a passo junto com a turma e confira a tela de cada aluno. O objetivo é todos terminarem com a aba Desenvolvedor visível no topo do Excel.`,
      atividade: `No seu Excel, deixe a aba Desenvolvedor aparecer no topo. Caminho: clique em "Arquivo", depois "Opções", depois "Personalizar Faixa de Opções"; na lista da direita marque a caixinha "Desenvolvedor" e clique em "OK". Avise quando a nova aba surgir.`,
      gabarito: `A aba Desenvolvedor deve aparecer na faixa de opções, entre as abas existentes. Se não aparecer, o aluno provavelmente não marcou a caixinha ou clicou em "Cancelar"; basta refazer o caminho e marcar "Desenvolvedor" antes de clicar em "OK".`,
    },
    {
      titulo: `Rodando a macro ArrumarTudo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno está com o arquivo .xlsm e clicou em "Habilitar conteúdo". Incentive-os a usar "Desfazer" para comparar o antes e o depois.`,
      atividade: `Abra sua cópia do arquivo de exemplo e clique em "Habilitar conteúdo" no aviso amarelo. Vá na aba Desenvolvedor, clique em "Macros", selecione "ArrumarTudo" e clique em "Executar". Observe a planilha se transformar. Depois clique em "Desfazer" e rode a macro de novo.`,
      gabarito: `Ao executar, a planilha deve ficar formatada (cabeçalho pintado e em negrito), com a coluna somada e os nomes em ordem alfabética, tudo com um clique. Com "Desfazer" ela volta ao estado bagunçado. Se nada acontecer, o conteúdo não foi habilitado ou o arquivo está no formato errado.`,
    },
    {
      titulo: `Caça às tarefas repetitivas`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e oriente que pensem em coisas que fazem do mesmo jeito muitas vezes. Circule provocando exemplos concretos do cotidiano de cada um.`,
      atividade: `Em dupla, façam uma lista de pelo menos quatro tarefas repetitivas do dia a dia de vocês (na escola, em casa ou nos jogos) que poderiam virar macro. Para cada uma, escrevam em uma frase por que ela é repetitiva.`,
      gabarito: `Resposta esperada são tarefas que se repetem do mesmo modo, como "organizar a lista de presença toda aula", "somar os pontos do jogo a cada partida", "pintar o boletim de cores por nota" ou "atualizar o controle de mesada toda semana". Cada item deve vir com uma justificativa do tipo "faço isso sempre igual, várias vezes".`,
    },
    {
      titulo: `Explorando a janela Macros`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Deixe os alunos investigarem a janela sozinhos antes de explicar. O desafio é descobrir, pela observação, para que servem os botões.`,
      atividade: `Abra a janela "Macros" (aba Desenvolvedor, botão "Macros"). Sem clicar em nada perigoso, observe os botões da direita: "Executar", "Editar", "Excluir" e outros. Anote o que você acha que cada botão faz só de ler o nome.`,
      gabarito: `"Executar" roda a macro selecionada; "Editar" abre o código VBA dela (assunto das próximas aulas); "Excluir" apaga a macro; pode haver também "Passo a Passo" (rodar devagar) e "Opções" (atalho de teclado). O importante é o aluno associar o nome do botão à sua função, mesmo sem precisão técnica total.`,
    },
    {
      titulo: `Minha tarefa do mês`,
      tipo: `projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Esta é a base do entregável do mês. Ajude cada aluno a escolher algo simples e bem delimitado, evitando tarefas grandes demais ou impossíveis de fazer no Excel.`,
      atividade: `Escolha UMA tarefa repetitiva que você vai automatizar neste mês. No caderno, escreva: (1) o nome da tarefa, (2) os passos que você faz hoje à mão, um por linha, e (3) por que seria bom ter isso em piloto automático. Compartilhe sua escolha com a turma em uma frase.`,
      gabarito: `Uma resposta completa traz uma tarefa simples e clara, por exemplo "organizar a lista de presença": passos como "pintar o cabeçalho, colocar os nomes em ordem, contar quantos vieram"; e uma justificativa como "faço isso toda aula e demora". A escolha deve ser pequena o bastante para virar uma macro até o fim do mês.`,
    },
  ],
};
