import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Importando e organizando dados",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Trazer para o Google Planilhas a mesma tabela feita no Excel e deixá-la limpa e organizada, com colunas ajustadas, título congelado e arquivo renomeado.`,
  descricao: `Nesta aula o aluno dá o segundo passo na jornada para a nuvem: pega aquela tabela que ele já montou no Excel e a coloca dentro do Google Planilhas. Existem dois caminhos para isso, e os dois são úteis. O primeiro é importar o arquivo pronto, fazendo o upload da planilha do Excel para o Google Drive e abrindo-a como Planilhas. O segundo é recriar os dados do zero, digitando cada informação. Mesmo quem importa vai precisar ajustar e arrumar tudo, então as duas turmas acabam praticando as mesmas habilidades.

Depois que os dados chegam na tela, começa o trabalho de organização. Uma planilha bagunçada, com colunas estreitas que cortam as palavras e títulos que somem quando rolamos a página, atrapalha o trabalho. Por isso vamos aprender a ajustar a largura das colunas, formatar as células de cabeçalho para destacá-las, congelar a primeira linha para que o título fique sempre visível e renomear o arquivo com um nome claro. São tarefas simples, mas que transformam uma tabela confusa em uma planilha profissional e fácil de ler.

Essa aula também reforça uma ideia importante do mês: no Google Planilhas tudo é salvo sozinho, na nuvem, em tempo real. Não existe mais o medo de perder o trabalho por esquecer de salvar. O aluno percebe na prática que cada digitação fica guardada automaticamente na conta dele, pronta para ser acessada de qualquer computador.

Ao final, cada aluno terá a sua tabela já dentro do Google Planilhas, limpa e organizada, com nome de arquivo decente, colunas no tamanho certo e o cabeçalho congelado. Essa base bem-feita é o que vai permitir, nas próximas aulas, aplicar fórmulas, colaborar ao vivo e criar gráficos sem dor de cabeça.`,
  materiais: [
    `Computadores (um por aluno) com navegador atualizado e Google Planilhas acessível pela conta da escola`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Arquivo de exemplo em Excel (.xlsx) com uma tabela simples, por exemplo uma lista de jogos favoritos da turma ou mesada da semana`,
    `Contas Google ativas para cada aluno, já testadas antes da aula`,
    `Acesso à internet estável (Google Planilhas funciona online)`,
    `Folha impressa ou slide com o passo a passo de importação para os alunos consultarem`,
    `Cronômetro ou relógio visível para controlar o ritmo de cada etapa`,
  ],
  conceitosChave: [
    `Importar — trazer um arquivo pronto (como um Excel) para dentro do Google Planilhas, sem precisar digitar tudo de novo.`,
    `Upload — enviar um arquivo do seu computador para a nuvem, no caso para o Google Drive.`,
    `Largura da coluna — o tamanho horizontal de uma coluna; ajustamos para que o texto caiba sem ser cortado.`,
    `Congelar linha — fixar a primeira linha (o cabeçalho) para que ela continue visível quando rolamos a página para baixo.`,
    `Cabeçalho — a linha de título da tabela, que nomeia o que cada coluna guarda (por exemplo Nome, Idade, Nota).`,
    `Salvamento automático — recurso do Google Planilhas que guarda tudo na nuvem sozinho, sem precisar apertar salvar.`,
    `Renomear arquivo — trocar o nome padrão do arquivo por um nome claro, para encontrá-lo fácil depois.`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, faça você mesmo o caminho completo uma vez. Tenha um arquivo Excel simples salvo no seu computador (uma tabela com cabeçalho e umas seis linhas). No Google Planilhas, dois pontos costumam confundir: a importação acontece pelo Google Drive (não direto no Planilhas), e o salvamento é automático, então não procure botão de salvar. Deixe a conta Google de cada aluno testada com antecedência, pois aluno sem login trava a turma inteira. Tenha o arquivo de exemplo num link ou pendrive caso algum aluno não tenha trazido o dele da aula passada.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o Google Planilhas no projetor em sheets.google.com. Relembre a aula anterior com perguntas rápidas: o que é a nuvem, onde fica salvo o trabalho. Mostre que o Google Planilhas se parece com o Excel, mas vive no navegador. Pergunte quem trouxe a tabela do Excel.

Conteúdo novo guiado (15 min): demonstre os dois caminhos. Para importar, vá em drive.google.com, clique no botão Novo no canto superior esquerdo, escolha Upload de arquivo e selecione o .xlsx. Depois dê dois cliques no arquivo e clique em Abrir com, Google Planilhas. Mostre também o caminho de recriar: em sheets.google.com clique no botão de mais com o sinal de adição para criar uma planilha em branco. Em seguida ensine a organizar: clique no nome Planilha sem título no canto superior esquerdo e digite um nome bom. Para ajustar a coluna, leve o mouse até a linha entre duas letras de coluna no topo e dê dois cliques para o ajuste automático. Para congelar o título, vá no menu Exibir, depois Congelar, depois 1 linha. Selecione a linha do cabeçalho e use os botões da barra para deixar em negrito e mudar a cor de fundo.

Mão na massa (25 min): cada aluno faz o caminho no próprio computador. Quem tem o Excel importa; quem não tem recria a tabela digitando. Todos devem: renomear o arquivo, ajustar a largura de todas as colunas, deixar o cabeçalho em negrito com cor de fundo e congelar a primeira linha. Circule pela sala ajudando individualmente.

Desafio e compartilhar (10 min): proponha o desafio (abaixo) e peça que dois ou três alunos mostrem a planilha no projetor, explicando o que mudaram.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que importar é como copiar um trabalho de um caderno para outro mais bonito, sem refazer tudo. Explique que congelar o título é como deixar a faixa de um campeonato sempre pendurada no alto: você desce a arquibancada e ela continua ali. Para a largura da coluna, diga que estamos dando espaço para a palavra respirar, para nenhuma letra ficar espremida. Sobre o salvamento automático, brinque: aqui não existe o drama de perder tudo, o Google guarda sozinho a cada segundo. Repita os nomes exatos dos menus enquanto demonstra, para que os alunos associem fala e clique.

## Erros comuns e como ajudar

O erro mais frequente é o aluno tentar importar direto pelo Planilhas e não achar o arquivo; lembre que o upload é pelo Drive. Outro é confundir o ajuste de largura: alguns clicam dentro da célula em vez de na borda entre as letras das colunas no topo; mostre devagar onde o cursor vira uma seta dupla. Há quem congele a linha errada por estar com o cursor numa célula do meio; oriente a clicar primeiro numa célula da primeira linha. Alguns ficam procurando o botão salvar e ficam ansiosos; mostre a mensagem Todas as alterações foram salvas no Drive perto do nome do arquivo. Por fim, nomes de arquivo vagos como sem título dois atrapalham; incentive nomes claros como Lista de jogos da turma.`,
  exercicios: [
    {
      titulo: `Trazendo a tabela para a nuvem`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe quem importa pelo Drive e quem recria digitando. Confirme que cada aluno chegou com a tabela aberta no Google Planilhas antes de seguir.`,
      atividade: `Coloque a sua tabela do Excel dentro do Google Planilhas. Se tiver o arquivo, faça o upload pelo Google Drive e abra com Planilhas. Se não tiver, crie uma planilha em branco e digite os dados de novo.`,
      gabarito: `O aluno deve ter a tabela visível no Google Planilhas, seja por importação (Drive, Novo, Upload de arquivo, Abrir com Google Planilhas) seja por digitação numa planilha em branco criada em sheets.google.com.`,
    },
    {
      titulo: `Colunas no tamanho certo`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor o cursor virando seta dupla na borda entre as letras das colunas. Reforce que o clique é no topo, não dentro da célula.`,
      atividade: `Ajuste a largura de todas as colunas da sua tabela para que nenhum texto fique cortado. Dê dois cliques na linha entre as letras de duas colunas para o ajuste automático.`,
      gabarito: `Todas as colunas devem mostrar o conteúdo inteiro, sem palavras cortadas nem reticências. O ajuste é feito clicando duas vezes na borda direita da letra da coluna, no cabeçalho cinza do topo.`,
    },
    {
      titulo: `Cabeçalho congelado e bonito`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Lembre que é preciso estar numa célula da primeira linha antes de congelar. Verifique se o aluno usou o menu Exibir, Congelar, 1 linha.`,
      atividade: `Deixe a linha do título em negrito e com uma cor de fundo. Depois congele a primeira linha pelo menu Exibir, Congelar, 1 linha. Role a página para baixo e confirme que o título continua visível.`,
      gabarito: `O cabeçalho deve estar em negrito, com cor de fundo diferente, e permanecer fixo no topo ao rolar a planilha. O congelamento aparece como uma linha cinza mais grossa abaixo do cabeçalho.`,
    },
    {
      titulo: `Confere comigo`,
      tipo: `em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas e dê uma lista mental de checagem: nome do arquivo, colunas ajustadas, cabeçalho destacado, linha congelada. Estimule um a ajudar o outro a corrigir o que faltar.`,
      atividade: `Em dupla, troquem de cadeira e confiram a planilha do colega. Verifiquem quatro coisas: o arquivo tem nome claro, as colunas estão ajustadas, o cabeçalho está destacado e a primeira linha está congelada. Apontem o que falta.`,
      gabarito: `Cada dupla deve listar para o colega quais dos quatro itens estão prontos e quais precisam de ajuste. Espera-se que, ao final, ambas as planilhas tenham os quatro itens completos.`,
    },
    {
      titulo: `Roda da nuvem`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Conduza a conversa em círculo. Puxe a percepção de que ninguém apertou salvar e nada se perdeu. Conecte com a próxima aula sobre fórmulas.`,
      atividade: `Em roda, cada um responde: qual passo achou mais fácil e qual achou mais difícil? Você apertou algum botão de salvar hoje? Por que a planilha ficou guardada mesmo assim?`,
      gabarito: `Espera-se que os alunos percebam que não usaram botão de salvar e que o Google Planilhas guarda tudo sozinho na nuvem, em tempo real, pela mensagem Todas as alterações foram salvas no Drive. As respostas sobre fácil e difícil variam por aluno.`,
    },
  ],
};
