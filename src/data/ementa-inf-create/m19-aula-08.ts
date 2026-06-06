import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Painel final e apresentação",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar a planilha inteligente com um painel de resumo (tabela dinâmica e gráfico), deixá-la com aparência profissional e apresentá-la explicando como cada função resolve um problema real.`,
  descricao: `Esta é a aula de fechamento do mês. Durante quatro semanas, o aluno construiu peça por peça a sua planilha inteligente: aprendeu a buscar informações com PROCV e PROCX, a tomar decisões com a função SE, a somar e contar com condição, a resumir tudo em tabelas dinâmicas e a filtrar e visualizar com segmentação e gráficos. Agora chega a hora de juntar tudo num único arquivo que funcione como um pequeno sistema e que qualquer pessoa entenda em poucos segundos.

O coração desta aula é o painel de resumo. Um painel é uma área da planilha que mostra os números mais importantes de forma visual, sem que ninguém precise rolar por centenas de linhas. O aluno vai criar uma tabela dinâmica que resume os dados e um gráfico dinâmico ligado a ela, colocando esse conjunto numa aba ou numa região clara da planilha. É a diferença entre entregar uma pilha de dados crus e entregar uma resposta pronta.

Depois do painel pronto, o foco passa para a aparência e a clareza. O aluno aprende que uma planilha profissional não é só correta: ela precisa ser bonita e organizada, com títulos, cores coerentes, cabeçalhos destacados e números formatados (moeda, porcentagem, separador de milhar). Pequenos ajustes de formatação transformam um arquivo bagunçado num material que dá orgulho de mostrar.

A aula termina com a apresentação. Cada aluno mostra a sua planilha inteligente para a turma e explica, em poucos minutos, qual problema ela resolve e como cada função contribui para isso. Apresentar é tão importante quanto construir: é o momento em que o aluno percebe que escreveu fórmulas de verdade, com propósito, e consegue defender o próprio trabalho com confiança.`,
  materiais: [
    `Computadores com Excel (versão Microsoft 365 ou 2021, com PROCX disponível) já aberto na planilha inteligente que cada aluno vem construindo no mês`,
    `Projetor ou TV ligado ao computador do professor para demonstrar os passos`,
    `Arquivo de exemplo "planilha-inteligente-modelo.xlsx" pronto, com painel e gráfico finalizados, para servir de referência visual`,
    `Cópia de segurança das planilhas dos alunos (pen drive ou nuvem) caso algum arquivo esteja corrompido`,
    `Roteiro de apresentação impresso ou no quadro: nome, problema que a planilha resolve, funções usadas, o que mais gostou`,
    `Cronômetro ou timer projetado para controlar o tempo de cada apresentação`,
  ],
  conceitosChave: [
    `Painel (dashboard) — área da planilha que mostra os números mais importantes de forma visual e resumida, sem precisar ler todas as linhas.`,
    `Tabela dinâmica — ferramenta do Excel que resume rapidamente muitos dados em uma tabela compacta, agrupando e somando automaticamente.`,
    `Gráfico dinâmico — gráfico ligado a uma tabela dinâmica que se atualiza sozinho quando os dados ou os filtros mudam.`,
    `Formatação profissional — conjunto de ajustes visuais (títulos, cores, bordas, números como moeda ou porcentagem) que deixam a planilha clara e bonita.`,
    `Formato de número — modo como o Excel exibe um valor: moeda (R$), porcentagem (%), separador de milhar ou data, sem mudar o número em si.`,
    `Planilha inteligente — arquivo que não só guarda dados, mas também busca, decide, conta e resume sozinho usando fórmulas e tabelas dinâmicas.`,
    `Apresentação — momento de mostrar o trabalho e explicar, com as próprias palavras, qual problema ele resolve e como.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula não ensina nenhuma função nova: ela costura o que já foi visto e adiciona o "acabamento". Você precisa estar confortável com três coisas: criar uma tabela dinâmica, gerar um gráfico dinâmico a partir dela e aplicar formatação básica (cor de célula, formato de moeda e porcentagem). Antes da aula, abra o arquivo modelo e refaça o painel uma vez para se sentir seguro. Lembre que o objetivo principal hoje é o aluno terminar e apresentar, então proteja o tempo: não deixe ninguém recomeçar a planilha do zero. Se a base de um aluno estiver incompleta, ajude-o a usar uma versão de exemplo para que ele também consiga montar o painel.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra a própria planilha e diga em voz alta uma função que usou e para quê. Projete o arquivo modelo e mostre onde quer chegar: "no fim de hoje a sua planilha vai ter este painel colorido aqui em cima". Isso cria a meta visual.

Conteúdo novo guiado (15 min): demonstre no projetor como montar o painel. Selecione qualquer célula dos dados e vá em Inserir, no grupo Tabelas, e clique em Tabela Dinâmica; em "Escolha onde colocar", marque Nova Planilha e clique em OK. No painel "Campos da Tabela Dinâmica" à direita, arraste um campo de texto (por exemplo, Categoria) para a área Linhas e um campo de número (por exemplo, Valor) para a área Valores. Em seguida, com uma célula da tabela dinâmica selecionada, vá em Análise de Tabela Dinâmica, clique em Gráfico Dinâmico, escolha Colunas e clique em OK. Mostre que ao filtrar a tabela o gráfico muda junto.

Mão na massa (25 min): cada aluno cria a sua tabela dinâmica e o seu gráfico na própria planilha. Depois, formate para ficar profissional: dê um título grande no topo (clique numa célula, digite o título, aumente a fonte na guia Página Inicial e mescle com Mesclar e Centralizar); pinte o cabeçalho com Cor de Preenchimento (o balde); selecione a coluna de dinheiro e clique no botão de moeda (R$) no grupo Número; selecione percentuais e clique no botão %. Circule pela sala ajudando individualmente.

Desafio e compartilhar (10 min): faça a roda de apresentações. Cada aluno tem cerca de um minuto para mostrar a planilha e responder: que problema ela resolve e qual função você mais gostou. Use o cronômetro e puxe uma salva de palmas ao fim de cada um.

## Como explicar de forma clara (linguagem para a idade)

Compare o painel a uma capa de videogame ou à tela inicial de um aplicativo: "ninguém abre o app e vê o código; vê os botões e os números prontos". Diga que a tabela dinâmica é como pedir ao Excel "me dá só o resumo, por favor". Para a formatação, use a frase "a mesma comida fica melhor num prato bonito": os dados são os mesmos, mas a apresentação muda tudo. Reforce que apresentar não é decorar texto, é contar a história da própria planilha.

## Erros comuns e como ajudar

O gráfico não muda quando filtram: provavelmente criaram um gráfico comum, não dinâmico; oriente a apagar e refazer pelo botão Gráfico Dinâmico. A tabela dinâmica não aparece: às vezes selecionaram uma célula vazia fora dos dados; peça para clicar dentro da tabela de dados antes de inserir. Números aparecem como texto e não somam: verifique se há espaços ou se a coluna está formatada como texto. Aluno travado pela timidez na apresentação: ofereça três perguntas fixas para ele responder, assim ele não precisa improvisar. Sempre elogie o esforço antes de corrigir.`,
  exercicios: [
    {
      titulo: `Crie o seu painel`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Garanta que cada aluno parta da própria planilha do mês. Demonstre uma vez no projetor e depois deixe-os fazer sozinhos, circulando para ajudar quem travar na criação da tabela dinâmica.`,
      atividade: `Na sua planilha inteligente, selecione os dados, vá em Inserir e crie uma Tabela Dinâmica em uma Nova Planilha. Coloque um campo de texto em Linhas e um campo de número em Valores. Depois crie um Gráfico Dinâmico de colunas ligado a essa tabela.`,
      gabarito: `O aluno deve ter uma nova aba com a tabela dinâmica resumindo os dados (por exemplo, total de Valor por Categoria) e um gráfico de colunas ao lado que se atualiza ao filtrar. Conferir se o gráfico é dinâmico mudando um filtro: as colunas precisam mudar junto.`,
    },
    {
      titulo: `Deixe profissional`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre os botões de formatação no grupo Número e na guia Página Inicial. Incentive escolhas de cor coerentes (não usar dez cores diferentes). Valorize o capricho.`,
      atividade: `Aplique pelo menos quatro melhorias visuais na sua planilha: um título grande mesclado e centralizado no topo, cor de preenchimento no cabeçalho, formato de moeda (R$) na coluna de dinheiro e formato de porcentagem (%) onde fizer sentido.`,
      gabarito: `A planilha deve ter título destacado no topo, cabeçalho colorido, valores monetários exibidos como R$ 1.250,00 e percentuais como 25%. Os números em si não mudam, apenas a forma de exibição. Quatro melhorias visíveis confirmam o exercício.`,
    },
    {
      titulo: `Caça-erros em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e oriente cada aluno a abrir a planilha do colega. O foco é revisar com olhar de cliente, não criticar. Peça feedback gentil e específico.`,
      atividade: `Troque de computador com o colega. Olhe a planilha dele como se fosse um cliente: o painel está claro? Os números estão formatados? Os títulos ajudam a entender? Anote dois elogios e uma sugestão de melhoria e devolva.`,
      gabarito: `Cada dupla produz, para cada planilha, dois pontos positivos e uma sugestão concreta (por exemplo: "faltou formatar a coluna de preço como moeda" ou "o título poderia dizer do que é a planilha"). O esperado é feedback respeitoso e aplicável.`,
    },
    {
      titulo: `Roda da planilha inteligente`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Sente a turma em círculo. Faça as perguntas e dê a vez a cada aluno. Não deixe ninguém de fora; para os tímidos, use as perguntas fixas como apoio.`,
      atividade: `Em roda, cada um responde: qual problema real a sua planilha resolve, qual função você achou mais útil (PROCX, SE, tabela dinâmica...) e o que foi mais difícil de fazer este mês.`,
      gabarito: `Espera-se que cada aluno nomeie um problema concreto (por exemplo, "controlar minha mesada", "organizar as notas da escola"), cite ao menos uma função e descreva uma dificuldade superada. Respostas que conectam função a problema real são o objetivo.`,
    },
    {
      titulo: `Apresentação final`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Use o cronômetro: cerca de um a dois minutos por aluno. Projete cada planilha. Conduza palmas no fim de cada apresentação e registre o entregável concluído de cada um.`,
      atividade: `Apresente a sua planilha inteligente para a turma no projetor. Em até dois minutos, diga: o nome do projeto, o problema que ele resolve, mostre o painel funcionando e explique como pelo menos duas funções ajudam a resolver esse problema.`,
      gabarito: `Apresentação completa contém: nome do projeto, problema resolvido, demonstração do painel (tabela dinâmica e gráfico) e explicação de duas ou mais funções ligadas ao problema. Exemplo: "Minha planilha de mesada usa SE para avisar quando gasto demais e uma tabela dinâmica para mostrar onde gasto mais." Entregável do mês considerado concluído quando a apresentação cobre esses pontos.`,
    },
  ],
};
