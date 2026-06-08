import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando a planilha final na nuvem",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `O aluno reúne tudo o que aprendeu no mês numa única planilha do Google Planilhas na nuvem, com dados organizados, funções calculando sozinhas e gráficos personalizados, deixando o entregável completo e profissional.`,
  descricao: `Durante todo o mês a turma trabalhou em pedaços separados: numa aula importou e organizou dados, noutra descobriu funções como =SOMA, =MÉDIA e =CONT.SE, depois aprendeu a colaborar ao vivo e, por fim, a criar e personalizar gráficos. Cada aula deixou uma parte pronta, mas espalhada. A aula de hoje é a hora de juntar tudo num só lugar: a planilha final, salva na nuvem, que será o entregável do mês. A ideia central é que o aluno não comece nada do zero, e sim monte, ajuste e capriche no que já existe.

Montar a planilha final é um exercício de organização e capricho, não de conteúdo novo. O foco é deixar o trabalho com cara de profissional: um título claro no topo, abas bem nomeadas, dados alinhados, cabeçalho destacado, funções funcionando de verdade (e não números digitados na mão) e um gráfico personalizado que conta uma história. Quando tudo isso está numa planilha do Google, na nuvem, o arquivo se salva sozinho a cada digitação, fica acessível de qualquer computador pela conta Google e nunca corre o risco de "sumir" como acontece com um arquivo só no pendrive.

O aluno vai aprender a usar abas (as guias na parte de baixo da planilha) para separar assuntos: por exemplo, uma aba "Dados" com a tabela, e uma aba "Resumo" com as funções e o gráfico. Vai revisar formatação básica — negrito no cabeçalho, mesclar células para o título, congelar a primeira linha — e conferir, célula por célula, se as funções ainda apontam para o intervalo certo. É um trabalho de revisão e acabamento, parecido com revisar uma redação antes de entregar.

Esta aula é a penúltima do mês e prepara diretamente a Aula 8, em que cada aluno vai compartilhar e apresentar o projeto para a turma. Por isso, ao final de hoje, cada planilha precisa estar pronta para ser vista por outras pessoas: bem organizada, com nome de arquivo decente, salva na nuvem e sem partes pela metade. O entregável do mês — "a mesma planilha, agora na nuvem" — nasce aqui.`,
  materiais: [
    `Um computador por aluno com navegador (Chrome de preferência), logado numa conta Google com acesso ao Google Planilhas e ao Google Drive`,
    `Projetor ou TV ligada no computador do professor para demonstrar cada passo para a turma toda`,
    `As planilhas e tabelas que os alunos já criaram nas aulas anteriores do mês (dados organizados, funções e gráfico), acessíveis na conta de cada um`,
    `Uma planilha final de exemplo, montada pelo professor, mostrando como deve ficar o resultado: título, abas nomeadas, funções e gráfico personalizado`,
    `Acesso à internet estável, já que a planilha vive na nuvem e o salvamento automático depende da conexão`,
    `Uma "lista de conferência" (checklist) impressa ou projetada, com os itens que a planilha final precisa ter`,
  ],
  conceitosChave: [
    `Planilha na nuvem — arquivo do Google Planilhas que fica guardado no Google Drive e se salva sozinho a cada mudança, acessível de qualquer computador com a sua conta.`,
    `Aba (guia) — cada página dentro da mesma planilha; aparece como uma guia na parte de baixo e serve para separar assuntos, como "Dados" e "Resumo".`,
    `Salvamento automático — recurso do Google Planilhas que grava cada alteração na hora, sem precisar apertar "Salvar"; a mensagem "Todas as alterações foram salvas no Drive" confirma isso.`,
    `Congelar linha — fixar a primeira linha (o cabeçalho) para que ela não suma quando você rola a tabela para baixo.`,
    `Mesclar células — juntar várias células numa só, usado para criar um título largo e centralizado no topo da planilha.`,
    `Intervalo — o conjunto de células que uma função usa, escrito como A2:A11; se os dados mudam de lugar, o intervalo da função precisa apontar para o lugar certo.`,
    `Entregável — o resultado final pronto para entregar e apresentar; aqui, a planilha completa, organizada e salva na nuvem.`,
  ],
  treinamento: `## O que o professor precisa saber

A aula de hoje é montagem e acabamento, não conteúdo novo. Você vai ajudar cada aluno a juntar, numa única planilha na nuvem, o que ele produziu em aulas separadas. Antes da aula, monte a sua planilha final de exemplo e tenha-a aberta no projetor: uma aba "Dados" com a tabela organizada, uma aba "Resumo" com funções (=SOMA, =MÉDIA, =CONT.SE) e um gráfico personalizado. Conheça bem três ações de acabamento. Primeiro, criar e renomear abas: as guias ficam na parte de baixo; clique no sinal de mais (+) à esquerda para criar uma nova aba, e dê dois cliques no nome da guia para renomear. Segundo, congelar a primeira linha: menu "Ver" > "Congelar" > "1 linha". Terceiro, mesclar células para o título: selecione as células do topo e use o botão "Mesclar células" na barra (ícone de duas setas para o centro) ou "Formatar" > "Mesclar células".

Reforce que tudo já está salvo na nuvem: o aluno não aperta "Salvar". No alto, ao lado do nome do arquivo, aparece "Todas as alterações foram salvas no Drive". Para renomear o arquivo, basta clicar no nome lá em cima, à esquerda, e digitar algo claro, como "Planilha Final - Maio - Nome do Aluno".

## Passo a passo da aula

10 min — Aquecimento e revisão. Projete a sua planilha final de exemplo já pronta. Pergunte: "O que esta planilha tem que deixa ela com cara de profissional?" Deixe a turma listar: título, abas, funções, gráfico. Abra também uma planilha "bagunçada" de propósito e peça para apontarem o que está faltando. Apresente a lista de conferência do dia.

15 min — Conteúdo novo guiado. No projetor, monte a estrutura ao vivo. Crie a aba "Dados" e a aba "Resumo" (botão + embaixo, duplo clique para renomear). Na aba "Dados", mostre como mesclar as células do topo para um título e deixá-lo em negrito. Congele a primeira linha (Ver > Congelar > 1 linha). Vá à aba "Resumo" e confira uma função apontando para o intervalo certo (ex.: =SOMA(Dados!B2:B11)). Renomeie o arquivo clicando no nome lá em cima.

25 min — Mão na massa. Cada aluno abre as próprias planilhas do mês e monta a final, seguindo a lista de conferência: criar as abas "Dados" e "Resumo", colar/organizar a tabela, conferir cada função, mover ou recriar o gráfico, pôr título mesclado, negrito no cabeçalho, congelar a primeira linha e renomear o arquivo. Circule de mesa em mesa, item por item da lista.

10 min — Desafio e compartilhar. Desafio: "Deixe a sua planilha pronta para alguém de fora entender em 10 segundos." Cada aluno confere a lista inteira sozinho. Dois ou três projetam a planilha e contam uma melhoria que fizeram.

## Como explicar de forma clara

Use a imagem de "arrumar o quarto antes da visita". Diga: "Você já tem tudo, só está espalhado. Hoje a gente guarda cada coisa no lugar certo para a planilha ficar bonita de ver." Para as abas, compare com as divisórias de um fichário: "uma aba para os dados, outra para o resumo, igual a separar matérias no caderno." Para o salvamento na nuvem, tranquilize: "Aqui não existe perigo de esquecer de salvar; ele salva sozinho, olha a mensagem 'salvas no Drive' lá em cima." Para as funções, reforce a diferença entre digitar um número e usar uma fórmula: "Se você digitou o total na mão, ele não atualiza; se usou =SOMA, ele se corrige sozinho quando os dados mudam."

## Erros comuns e como ajudar

O erro mais frequente é a função "quebrar" ao mover os dados para outra aba: o intervalo continua apontando para o lugar antigo e aparece erro ou número errado. Ajude o aluno a clicar na célula, ver a fórmula na barra e corrigir o intervalo (ex.: trocar B2:B11 por Dados!B2:B11). Outro erro é digitar resultados na mão em vez de usar fórmula; mostre que sem o sinal de igual não há cálculo automático. Muitos esquecem de renomear as abas e o arquivo, deixando "Planilha sem título" e "Página1"; insista nesse acabamento. Alguns acham que precisam salvar e ficam procurando o botão; relembre o salvamento automático. Há quem mescle células erradas e desalinhe a tabela; ensine a desfazer com Ctrl+Z e a mesclar só as células do título.`,
  exercicios: [
    {
      titulo: `O que falta nesta planilha?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Projete lado a lado duas planilhas: a final de exemplo, bem caprichada, e uma "bagunçada" de propósito (sem título, abas com nomes padrão, número digitado na mão no lugar da função, gráfico sem título). Conduza a turma a comparar e apontar o que diferencia uma da outra. Vá anotando no quadro a lista de conferência que eles mesmos forem citando.`,
      atividade: `Olhando as duas planilhas no projetor, diga em voz alta pelo menos quatro coisas que a planilha caprichada tem e que a bagunçada não tem. Em seguida, escolha qual dessas você acha que é a mais importante para alguém de fora entender o trabalho rápido.`,
      gabarito: `Respostas válidas: título claro no topo, abas com nomes (Dados, Resumo) em vez de "Página1", cabeçalho em negrito, funções calculando em vez de número digitado, gráfico com título, primeira linha congelada e nome de arquivo decente. O aluno justifica sua escolha do item mais importante de forma coerente (ex.: o título, porque diz logo do que se trata). Mostra que reconhece os sinais de uma planilha profissional.`,
    },
    {
      titulo: `Criando as abas Dados e Resumo`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Conduza a turma junta, no mesmo ritmo. Todos abrem a planilha do mês. Mostre o botão de mais (+) no canto inferior esquerdo para criar uma aba e o duplo clique na guia para renomear. Espere todos terem as duas abas, "Dados" e "Resumo", antes de seguir. Confira que ninguém ficou com o nome padrão "Página1".`,
      atividade: `Na sua planilha, crie duas abas usando o botão + lá embaixo. Renomeie a primeira para "Dados" e a segunda para "Resumo" (clique duas vezes no nome da guia para editar). Coloque a sua tabela na aba "Dados". Confira na parte de baixo se as duas guias aparecem com os nomes certos.`,
      gabarito: `A planilha passa a ter duas abas visíveis na parte de baixo, nomeadas "Dados" e "Resumo", sem sobrar nenhuma guia com nome padrão como "Página1". A tabela de dados está na aba "Dados". O aluno sabe criar uma aba pelo botão + e renomear pelo duplo clique. Se a tabela ainda estiver na aba errada, ele a recorta (Ctrl+X) e cola (Ctrl+V) no lugar certo.`,
    },
    {
      titulo: `Deixando o topo profissional`,
      tipo: `Atividade em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas para um aluno conferir o trabalho do outro. Demonstre três acabamentos no projetor: mesclar as células do topo para um título (selecionar e usar "Mesclar células"), deixar o cabeçalho em negrito (Ctrl+B) e congelar a primeira linha (Ver > Congelar > 1 linha). Depois cada um faz na sua planilha e o colega confere pela lista. Avise para mesclar só as células do título, não a tabela inteira.`,
      atividade: `Em dupla: cada um, na sua planilha, faz três coisas no topo — (1) escreve um título e mescla as células daquela linha para centralizá-lo; (2) deixa a linha de cabeçalho em negrito; (3) congela a primeira linha em "Ver" > "Congelar" > "1 linha". Depois, role a tabela para baixo e veja se o cabeçalho fica fixo. Por fim, o colega confere se os três itens ficaram prontos.`,
      gabarito: `A planilha mostra um título mesclado e centralizado no topo, a linha de cabeçalho em negrito e a primeira linha congelada (ao rolar para baixo, o cabeçalho continua visível). A dupla confirma os três itens um no trabalho do outro. Se a tabela desalinhou, foi por mesclar células demais; corrige-se com Ctrl+Z e mesclando só a linha do título.`,
    },
    {
      titulo: `Conferindo se as funções ainda calculam`,
      tipo: `Prática na ferramenta`,
      tempo: `15 min`,
      guiaProfessor: `Esta é a parte que mais gera dúvida. Ao mover os dados para a aba "Dados", as funções da aba "Resumo" podem "quebrar" e mostrar erro ou número errado. Demonstre: clique na célula da função, veja a fórmula na barra de fórmulas e corrija o intervalo para apontar para a aba certa (ex.: =SOMA(Dados!B2:B11)). Mostre como referenciar outra aba escrevendo o nome da aba, ponto de exclamação e o intervalo. Peça que cada aluno teste mudando um valor e vendo o total mudar sozinho.`,
      atividade: `Na aba "Resumo", confira cada função (por exemplo =SOMA, =MÉDIA, =CONT.SE). Clique em cada célula e olhe a fórmula na barra. Se o resultado estiver errado ou aparecer erro, corrija o intervalo para apontar para a aba "Dados" (ex.: =SOMA(Dados!B2:B11)). Para testar, mude um número na aba "Dados" e veja se o resultado no "Resumo" muda sozinho.`,
      gabarito: `Todas as funções da aba "Resumo" mostram resultados corretos e apontam para o intervalo certo na aba "Dados" (escrito como Dados!B2:B11, por exemplo). Ao alterar um valor nos dados, o resultado se atualiza automaticamente, provando que é fórmula e não número digitado. Se aparecia erro, era porque o intervalo apontava para o lugar antigo; o aluno corrige acrescentando "Dados!" antes do intervalo.`,
    },
    {
      titulo: `A planilha final pronta para entregar`,
      tipo: `Projeto curto / desafio`,
      tempo: `15 min`,
      guiaProfessor: `Etapa final e mais completa: o aluno fecha o entregável conferindo a lista inteira. Entregue ou projete a lista de conferência: abas nomeadas, título no topo, cabeçalho em negrito, funções calculando, gráfico personalizado com título, primeira linha congelada, nome do arquivo trocado e mensagem "salvas no Drive" visível. Reforce que renomear o arquivo é clicar no nome lá em cima, à esquerda. Lembre que está tudo na nuvem e não precisa apertar salvar. Circule garantindo que cada planilha está pronta para a apresentação da Aula 8.`,
      atividade: `Finalize a sua planilha conferindo todos os itens da lista: (1) abas "Dados" e "Resumo" nomeadas; (2) título mesclado no topo; (3) cabeçalho em negrito; (4) funções calculando certo; (5) gráfico personalizado com título na aba "Resumo"; (6) primeira linha congelada; (7) arquivo renomeado para "Planilha Final - Nome do Aluno" (clique no nome lá em cima). Confira que aparece "Todas as alterações foram salvas no Drive".`,
      gabarito: `A planilha final reúne todos os itens da lista: duas abas nomeadas, título mesclado, cabeçalho em negrito, funções corretas que se atualizam, gráfico personalizado com título, primeira linha congelada e arquivo com nome claro. A mensagem "Todas as alterações foram salvas no Drive" confirma que está salva na nuvem. O entregável está pronto para ser compartilhado e apresentado na próxima aula. Qualquer item faltando é apontado pelo próprio aluno ao reler a lista.`,
    },
  ],
};
