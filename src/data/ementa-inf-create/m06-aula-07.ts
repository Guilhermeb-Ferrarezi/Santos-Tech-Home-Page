import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Do Forms para o Planilhas",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `O aluno conecta as respostas do Google Forms a uma planilha do Google Planilhas e usa ordenação e filtro para fazer uma análise simples dos dados coletados.`,
  descricao: `Nas aulas anteriores a turma aprendeu a montar formulários, escolher tipos de pergunta, deixar campos obrigatórios e compartilhar o link para receber respostas. Até aqui, as respostas ficavam guardadas dentro do próprio Forms, na aba "Respostas", em forma de resumo com gráficos. Isso é ótimo para ver o todo, mas é limitado quando você quer mexer nos dados: ordenar do maior para o menor, separar só um grupo, contar quantas pessoas escolheram cada opção ou cruzar informações. É aí que entra o Google Planilhas.

A grande ideia desta aula é que o Forms e o Planilhas conversam entre si em tempo real. Quando você cria uma planilha vinculada ao formulário, cada nova resposta enviada vira automaticamente uma nova linha na planilha, sem ninguém precisar copiar nada. A primeira linha da planilha guarda os títulos das perguntas (o cabeçalho), uma coluna fixa de carimbo de data/hora aparece sozinha, e cada coluna seguinte corresponde a uma pergunta do formulário. Entender essa correspondência "pergunta vira coluna, resposta vira linha" é o coração da aula.

Com os dados já dentro da planilha, o aluno descobre que pode transformar uma lista bagunçada de respostas em informação útil. Ordenar permite ver, por exemplo, do mais antigo ao mais recente, ou colocar nomes em ordem alfabética. Filtrar permite esconder temporariamente tudo o que não interessa e olhar apenas um pedaço, como "só quem respondeu que prefere pizza". Essas duas ferramentas, ordenar e filtrar, são a porta de entrada para a análise de dados, um tema que a turma vai aprofundar no curso.

Esta aula é uma ponte. Ela prepara diretamente o entregável do mês e o projeto final da Aula 8: um formulário com as respostas organizadas no Planilhas. Por isso, o foco é técnico e prático: criar o vínculo, reconhecer a estrutura da planilha, e dominar os botões de ordenar e filtrar. Não é preciso ensinar fórmulas avançadas hoje; a meta é que cada aluno saia sabendo abrir a planilha vinculada e responder, com ela, uma pergunta simples sobre os próprios dados.`,
  materiais: [
    `Um computador por aluno com navegador (Chrome de preferência) e login feito numa conta Google com acesso ao Google Forms e ao Google Planilhas`,
    `Projetor ou TV ligada no computador do professor para demonstrar cada passo para a turma toda`,
    `Um formulário de exemplo já criado pelo professor (ex.: "Pesquisa de lanche da turma") com pelo menos 8 a 12 respostas já enviadas, para que a planilha não fique vazia`,
    `O link do formulário de exemplo aberto numa segunda aba, para o professor enviar respostas ao vivo e mostrar a linha aparecendo`,
    `Os formulários que os próprios alunos criaram nas aulas anteriores, acessíveis na conta de cada um`,
    `Acesso à internet estável (o vínculo Forms-Planilhas e a sincronização em tempo real dependem da conexão)`,
    `Folha de "perguntas de análise" impressa ou no projetor, com exemplos de perguntas que se respondem ordenando ou filtrando`,
  ],
  conceitosChave: [
    `Planilha vinculada — uma planilha do Google Planilhas ligada ao formulário, que recebe cada resposta nova automaticamente, sem copiar e colar.`,
    `Linha — a faixa horizontal da planilha; cada resposta enviada no Forms vira uma linha nova, de cima para baixo.`,
    `Coluna — a faixa vertical da planilha; cada pergunta do formulário vira uma coluna, identificada pela letra no topo (A, B, C...).`,
    `Cabeçalho — a primeira linha da planilha, que guarda os títulos das perguntas e não é uma resposta de ninguém.`,
    `Carimbo de data/hora — a coluna automática que o Forms cria registrando o dia e a hora exata em que cada resposta foi enviada.`,
    `Ordenar — reorganizar as linhas seguindo uma coluna, por exemplo de A a Z, do menor para o maior ou da data mais antiga para a mais nova.`,
    `Filtrar — esconder temporariamente as linhas que não interessam para olhar apenas um grupo de respostas, sem apagar nada.`,
  ],
  treinamento: `## O que o professor precisa saber

O ponto central é entender o vínculo entre Forms e Planilhas. Dentro de qualquer formulário, na aba "Respostas" (no topo, ao lado de "Perguntas"), existe um botão verde com o ícone do Planilhas chamado "Vincular ao Planilhas" (em inglês, "Link to Sheets"). Ao clicar, o Google pergunta se você quer "Criar uma nova planilha" (já vem o nome sugerido com o título do formulário e a palavra "(respostas)") ou "Selecionar planilha existente". Escolha "Criar nova planilha" e clique em "Criar". Uma aba nova do navegador abre com a planilha pronta: a linha 1 é o cabeçalho, a coluna A é o "Carimbo de data/hora" e cada coluna seguinte é uma pergunta. A partir desse momento, toda resposta nova entra sozinha como uma linha.

Você não edita as respostas na planilha como se fossem do Forms; a planilha é o espelho dos dados para analisar. Para ordenar, selecione a coluna desejada e use o menu "Dados" > "Classificar intervalo" (em inglês, "Sort range"), ou clique com o botão direito no cabeçalho. Para filtrar, vá em "Dados" > "Criar um filtro" (ícone de funil na barra). Aparecem setinhas no cabeçalho; clicando nelas, você marca ou desmarca valores para mostrar só o que quer. Treine os dois antes da aula com o formulário de exemplo já cheio de respostas.

## Passo a passo da aula

10 min — Aquecimento e revisão. Projete o formulário de exemplo e abra a aba "Respostas". Pergunte: "Onde ficam as respostas que recebemos?" Mostre o resumo e os gráficos. Provoque: "E se eu quisesse colocar tudo em ordem alfabética ou separar só os meninos? Dá para fazer aqui?" Conduza à conclusão de que falta uma ferramenta melhor: o Planilhas.

15 min — Conteúdo novo guiado. No projetor, na aba "Respostas", clique no botão verde "Vincular ao Planilhas", escolha "Criar nova planilha" e "Criar". Mostre a planilha que abre. Aponte com o cursor: a linha 1 (cabeçalho), a coluna A (carimbo de data/hora) e as colunas das perguntas. Volte ao formulário, envie uma resposta ao vivo pela segunda aba e mostre a linha nova surgindo na planilha em tempo real. Em seguida, demonstre uma ordenação (Dados > Classificar intervalo) e ative um filtro (Dados > Criar um filtro).

25 min — Mão na massa. Cada aluno abre um dos formulários que criou e que já tenha respostas (ou usa uma cópia do formulário de exemplo). Conduza em etapas, todos juntos: primeiro todos clicam em "Vincular ao Planilhas" e criam a planilha; depois todos identificam cabeçalho, carimbo de data/hora e as colunas de pergunta; depois todos ordenam uma coluna; por fim, todos criam um filtro e mostram só um grupo. Passe de mesa em mesa garantindo que ninguém ficou para trás.

10 min — Desafio e compartilhar. Desafio: "Use o filtro ou a ordenação para responder UMA pergunta sobre os seus dados (ex.: qual lanche apareceu mais?)." Cada aluno escreve a resposta numa célula vazia ou diz em voz alta. Dois ou três compartilham a descoberta com a turma.

## Como explicar de forma clara

Use a imagem de uma "caixa de organização". Diga: "O Forms é quem recebe as respostas na porta; o Planilhas é a estante onde a gente organiza tudo para encontrar rápido." Para o vínculo em tempo real, mostre ao vivo: envie uma resposta e deixe a turma ver a linha "nascer" sozinha. Isso costuma arrancar um "uau". Reforce a regra de ouro: "Cada pergunta é uma coluna; cada pessoa que responde é uma linha." Para ordenar e filtrar, use o exemplo de uma lista de chamada: ordenar é colocar em ordem alfabética; filtrar é esconder quem não interessa agora, sem ninguém sumir de verdade.

## Erros comuns e como ajudar

O erro mais comum é o aluno tentar vincular um formulário que ainda não tem nenhuma resposta e achar que "não funcionou", porque a planilha aparece quase vazia. Garanta que cada formulário usado tenha respostas. Outro erro é selecionar o intervalo errado ao ordenar e bagunçar os dados ou incluir o cabeçalho na ordenação; oriente a usar "Dados" > "Classificar intervalo" e a opção "Os dados têm linha de cabeçalho". Muitos confundem ordenar com filtrar: lembre que ordenar muda a ordem e filtrar esconde linhas. Há quem feche a aba da planilha e ache que perdeu tudo; mostre que ela fica salva no Drive e pode ser reaberta pela aba "Respostas" a qualquer momento.`,
  exercicios: [
    {
      titulo: `Onde mora cada resposta?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Antes de mexer no computador, projete a aba "Respostas" do formulário de exemplo e a planilha vinculada lado a lado. Conduza uma conversa rápida fazendo a turma comparar os dois lugares. Pergunte o que dá para fazer em cada um e por que precisamos do Planilhas. Anote no quadro a regra "pergunta vira coluna, resposta vira linha".`,
      atividade: `Olhando o formulário e a planilha no projetor, responda em voz alta: (1) onde aparecem os gráficos de resumo? (2) na planilha, o que guarda a linha 1? (3) o que cada linha de baixo representa? (4) cite uma coisa que só dá para fazer no Planilhas.`,
      gabarito: `(1) Os gráficos ficam na aba "Respostas" do Forms, no resumo. (2) A linha 1 é o cabeçalho, com os títulos das perguntas. (3) Cada linha de baixo é uma resposta enviada por uma pessoa. (4) Exemplos válidos: ordenar, filtrar, contar, separar grupos ou usar fórmulas. O aluno mostra ter entendido que Forms recebe e Planilhas organiza.`,
    },
    {
      titulo: `Criando a planilha vinculada`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Conduza a turma junta, passo a passo, no mesmo ritmo. Todos abrem um formulário com respostas, vão à aba "Respostas" e clicam no botão verde "Vincular ao Planilhas". Mostre a escolha "Criar nova planilha" e o botão "Criar". Espere todos verem a planilha abrir antes de seguir. Confirme que cada aluno reconhece o cabeçalho na linha 1 e a coluna A de carimbo de data/hora.`,
      atividade: `No seu formulário, abra a aba "Respostas", clique em "Vincular ao Planilhas", escolha "Criar nova planilha" e clique em "Criar". Quando a planilha abrir, aponte para a sua tela: onde está o cabeçalho, onde está a coluna do carimbo de data/hora e quantas colunas de pergunta apareceram.`,
      gabarito: `A planilha vinculada foi criada e abriu numa aba nova. O aluno consegue indicar a linha 1 como cabeçalho, a coluna A como carimbo de data/hora e contar corretamente quantas colunas de pergunta existem (uma para cada pergunta do formulário). Se a planilha estiver quase vazia, é porque o formulário não tinha respostas.`,
    },
    {
      titulo: `A resposta que aparece ao vivo`,
      tipo: `Atividade em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. A ideia é provar que o vínculo é em tempo real. Um aluno deixa a planilha vinculada aberta na tela; o colega abre o link do formulário e envia uma resposta nova. Os dois observam a linha surgir sozinha. Depois trocam de papel. Circule confirmando que cada dupla viu a linha nova nascer e entende que ninguém copiou nada manualmente.`,
      atividade: `Em dupla: o Aluno A deixa a planilha vinculada visível na tela. O Aluno B abre o link do formulário e envia uma resposta. Observem juntos a nova linha aparecer na planilha. Anotem o horário que apareceu na coluna de carimbo de data/hora. Depois, troquem os papéis e repitam.`,
      gabarito: `Após o envio, surge uma linha nova no fim da planilha, automaticamente, com o carimbo de data/hora marcando o momento do envio. A dupla anotou esse horário e explica que a resposta entrou sozinha, sem copiar e colar. Mostra que entenderam o vínculo em tempo real entre Forms e Planilhas.`,
    },
    {
      titulo: `Colocando em ordem`,
      tipo: `Prática na ferramenta`,
      tempo: `15 min`,
      guiaProfessor: `Esta é a parte mais importante e a que mais gera dúvida. Demonstre no projetor: clique numa célula da coluna que quer ordenar, vá em "Dados" > "Classificar intervalo", marque "Os dados têm linha de cabeçalho", escolha a coluna e A a Z ou Z a A. Avise para não selecionar só uma coluna solta antes de classificar, pois isso pode desalinhar os dados. Depois mande cada aluno ordenar por uma coluna à escolha e conferir o resultado.`,
      atividade: `Na sua planilha, ordene as respostas por uma coluna que você escolher (ex.: nome em ordem alfabética de A a Z, ou o carimbo de data/hora do mais antigo ao mais novo). Use "Dados" > "Classificar intervalo" e marque "Os dados têm linha de cabeçalho". Confira se a primeira e a última linha mudaram de lugar.`,
      gabarito: `As linhas ficam reorganizadas segundo a coluna escolhida (por exemplo, nomes de A a Z ou datas da mais antiga para a mais nova), e o cabeçalho permanece na linha 1, sem entrar na ordenação. O aluno percebe que apenas a ordem mudou, nenhuma resposta foi apagada. Se os dados ficaram desalinhados, a seleção incluiu só uma coluna em vez do intervalo inteiro.`,
    },
    {
      titulo: `Investigando com o filtro`,
      tipo: `Projeto curto / desafio`,
      tempo: `15 min`,
      guiaProfessor: `Etapa final e mais desafiadora: usar o filtro para responder uma pergunta real sobre os dados. Demonstre "Dados" > "Criar um filtro", as setinhas no cabeçalho, e como desmarcar valores para mostrar só um grupo. Dê exemplos de perguntas: "quantas pessoas escolheram pizza?", "quem respondeu hoje?". Depois cada aluno escolhe a própria pergunta. Lembre que o filtro esconde, não apaga, e pode ser desligado em "Dados" > "Remover filtro".`,
      atividade: `Crie um filtro na sua planilha ("Dados" > "Criar um filtro"). Use a setinha do cabeçalho de uma coluna para mostrar apenas um grupo de respostas (ex.: só quem escolheu uma opção específica). Conte quantas linhas sobraram e escreva numa célula vazia a resposta de UMA pergunta sobre seus dados, como "Qual opção apareceu mais vezes?".`,
      gabarito: `O filtro foi ativado, e ao escolher um valor a planilha mostra apenas as linhas daquele grupo, escondendo o resto sem apagar. O aluno conta as linhas visíveis e registra uma conclusão coerente com os dados (ex.: "Pizza apareceu 6 vezes, foi a mais escolhida"). Saber remover o filtro depois e perceber que nada foi excluído conta como domínio completo da atividade.`,
    },
  ],
};
