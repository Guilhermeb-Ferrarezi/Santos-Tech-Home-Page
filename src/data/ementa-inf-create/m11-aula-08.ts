import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Minha rotina organizada: projeto final",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Reunir Gmail, Google Agenda, Google Meet e Notion em uma única rotina organizada, usando tabelas e bancos de dados simples no Notion, e apresentá-la para a turma.`,
  descricao: `Esta é a aula final do mês, o momento de juntar tudo o que o aluno aprendeu sobre comunicação e organização. Durante quatro semanas, a turma conheceu o Gmail para enviar e arquivar e-mails, o Google Agenda para planejar a semana com lembretes e convites, o Google Meet para participar de reuniões online e o Notion como um "segundo cérebro" para guardar notas. Agora todas essas peças se encaixam em uma única rotina pessoal que o aluno consegue manter no dia a dia.

O coração da aula é aprofundar o Notion com tabelas e bancos de dados simples. Em vez de só escrever textos soltos, o aluno vai montar uma tabela de tarefas e uma tabela de estudos, com colunas como Status, Prioridade e Data. Um banco de dados no Notion é como uma planilha inteligente: cada linha é um item (uma tarefa, uma matéria) e cada coluna é uma informação sobre ele. Assim o aluno aprende a transformar uma lista bagunçada em algo visual, filtrável e fácil de atualizar.

O entregável do mês é uma "Rotina organizada": uma página no Notion que funciona como painel central. Nela o aluno coloca o link da Agenda da semana, uma lista das pessoas importantes que ele contata por e-mail, suas tabelas de tarefas e estudos, e anotações das reuniões feitas no Meet. A ideia é que, ao abrir essa única página, ele veja tudo o que precisa fazer e onde encontrar cada coisa.

No final, cada aluno apresenta sua rotina para a turma em poucos minutos, explicando como organizou as informações e qual ferramenta usa para cada situação. Apresentar consolida o aprendizado, treina comunicação e deixa todos com orgulho do que construíram ao longo do mês.`,
  materiais: [
    `Computadores com Gmail, Google Agenda, Google Meet e Notion abertos e com login feito antes da aula`,
    `Projetor ou TV para o professor demonstrar e os alunos apresentarem`,
    `Página-modelo de "Rotina organizada" pronta no Notion do professor, para servir de exemplo`,
    `Arquivo de exemplo com lista de tarefas e matérias (em papel ou documento) para preencher as tabelas`,
    `Contas Google e Notion de cada aluno funcionando (testar acesso no início)`,
    `Cronômetro ou timer na tela para controlar o ritmo das apresentações`,
    `Lista de presença e ficha simples de avaliação do projeto final`,
  ],
  conceitosChave: [
    `Banco de dados no Notion — coleção de itens organizados em linhas e colunas, como uma planilha inteligente que você pode filtrar e ordenar.`,
    `Tabela — visualização do banco de dados em que cada linha é um item e cada coluna é uma informação sobre ele.`,
    `Propriedade (coluna) — tipo de informação de cada item, como Status, Prioridade, Data ou Matéria.`,
    `Status — propriedade que mostra em que ponto a tarefa está, por exemplo: A fazer, Fazendo, Concluído.`,
    `Painel central — página única que reúne links e tabelas de várias ferramentas, funcionando como ponto de partida da rotina.`,
    `Rotina organizada — entregável do mês: o conjunto de e-mail, agenda, reuniões e notas integrados em um só lugar.`,
    `Apresentação — momento de mostrar e explicar para a turma o que foi construído, treinando a comunicação.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é uma costura final: você não vai ensinar uma ferramenta nova do zero, e sim juntar Gmail, Google Agenda, Google Meet e Notion em uma rotina. A novidade técnica está nas tabelas e bancos de dados do Notion. No Notion, um banco de dados é parecido com uma planilha: cada linha é um item e cada coluna é uma propriedade (Status, Data, Prioridade). Antes da aula, tenha uma página-modelo chamada "Minha rotina" pronta no seu Notion, com duas tabelas (Tarefas e Estudos) e alguns links colados, para mostrar no projetor. Faça login em todas as contas antes de começar.

## Passo a passo da aula

Aquecimento (10 min). Abra o projetor e pergunte: "Quais ferramentas usamos este mês?". Vá anotando: Gmail, Agenda, Meet, Notion. Pergunte para que serve cada uma. Mostre sua página-modelo "Minha rotina" no Notion e diga que hoje cada um vai construir a sua e apresentar.

Conteúdo novo guiado (15 min). Ensine a criar a tabela no Notion. Em uma página, digite /tabela (ou /table) e escolha "Tabela". Mostre que aparecem linhas e colunas. Clique no nome de uma coluna, em "Editar propriedade", e troque o tipo para "Status" ou "Seleção". Crie as colunas Tarefa, Status (A fazer, Fazendo, Concluído) e Prioridade (Alta, Média, Baixa). Preencha duas linhas de exemplo. Depois mostre como colar links: no Gmail copie o endereço de um contato importante; no Google Agenda abra a semana e copie o link; cole tudo na página do Notion para virar o painel central. Lembre que anotações do Meet (decisões da reunião) também entram nessa página.

Mão na massa (25 min). Cada aluno monta a própria página "Minha rotina". Passos: 1) criar a página no Notion; 2) criar a tabela Tarefas com colunas Tarefa, Status e Prioridade e preencher pelo menos 4 linhas; 3) criar a tabela Estudos com colunas Matéria, Dia e Status; 4) colar o link da Agenda da semana e o e-mail de 2 contatos importantes; 5) escrever um título e um parágrafo curto explicando como usam a rotina. Circule pela sala ajudando. Quem terminar antes pode criar uma visualização "Quadro" (Board) agrupada por Status.

Desafio e compartilhar (10 min). Cada aluno apresenta em até 1 minuto, no projetor, mostrando a página e dizendo qual ferramenta usa para cada situação (e-mail, agenda, reunião, notas). Use o timer. Encerre destacando que manter a rotina é um hábito, e que eles agora têm um sistema de verdade.

## Como explicar de forma clara

Para essa idade, compare o banco de dados com uma planilha mágica: "cada linha é uma tarefa, cada coluna conta uma coisa sobre ela; quando você muda o Status para Concluído, é como riscar da lista". Chame a página principal de "painel" ou "central da rotina", como o painel de um videogame que mostra vida, mapa e missões em um lugar só. Reforce a ideia de "segundo cérebro": o Notion lembra por você, então a cabeça fica livre. Use exemplos da vida deles: prova de matemática na sexta, trabalho em grupo, treino, aniversário de um amigo.

## Erros comuns e como ajudar

O erro mais frequente é o aluno digitar a tabela como texto comum em vez de usar o comando /tabela; mostre de novo o "/" e a escolha "Tabela". Outro erro é criar muitas colunas e se perder: oriente a começar com 3 colunas só. Alguns esquecem de salvar links e ficam com a página vazia; lembre que no Notion tudo salva sozinho, mas é preciso colar o link. Há quem confunda a página do Notion com um documento do Google Docs; explique que são apps diferentes. Na apresentação, alunos tímidos podem travar; ofereça três frases-guia ("uso o Gmail para...", "minha agenda mostra...", "minhas tarefas estão em..."). Por fim, controle o tempo: avise quando faltarem 5 minutos para as apresentações começarem.`,
  exercicios: [
    {
      titulo: `Minha primeira tabela de tarefas`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Demonstre uma vez no projetor o comando "/tabela" e a criação das colunas, depois deixe os alunos repetirem. Passe de mesa em mesa conferindo se usaram a tabela de verdade (e não texto solto).`,
      atividade: `No Notion, crie uma página chamada "Minha rotina". Dentro dela, digite "/tabela" e escolha Tabela. Crie as colunas Tarefa, Status (A fazer, Fazendo, Concluído) e Prioridade (Alta, Média, Baixa). Preencha 4 tarefas reais da sua semana.`,
      gabarito: `A página existe com uma tabela (não texto) contendo 3 colunas e pelo menos 4 linhas preenchidas. A coluna Status é do tipo Status ou Seleção, com as três opções, e cada tarefa tem uma prioridade escolhida. Exemplo de linha: "Estudar para a prova de história | Fazendo | Alta".`,
    },
    {
      titulo: `Tabela de estudos da semana`,
      tipo: `Desafio individual`,
      tempo: `7 min`,
      guiaProfessor: `Peça que criem uma segunda tabela, agora de Estudos. O desafio é fazer sozinhos, sem você demonstrar de novo, aplicando o que aprenderam no exercício anterior. Ajude apenas quem travar.`,
      atividade: `Na mesma página, crie uma segunda tabela chamada Estudos, com as colunas Matéria, Dia da semana e Status. Adicione pelo menos 3 matérias com o dia em que você vai estudar cada uma.`,
      gabarito: `Existe uma segunda tabela com as colunas Matéria, Dia e Status e, no mínimo, 3 linhas. Cada linha tem matéria, um dia da semana e um status. Exemplo: "Matemática | Terça | A fazer". O aluno conseguiu repetir o processo sem ajuda, mostrando que entendeu a criação de tabelas.`,
    },
    {
      titulo: `Painel central: juntando as ferramentas`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um aluno ajuda o outro a copiar o link da Agenda e os e-mails dos contatos e colá-los na página do Notion. Mostre antes onde copiar: no Google Agenda, abrir a semana e usar o link; no Gmail, copiar o endereço de e-mail de um contato.`,
      atividade: `Em dupla, completem o painel central de cada um: colem na página "Minha rotina" o link da Agenda da semana e o e-mail de 2 contatos importantes (ex.: professor, colega de grupo). Confiram juntos se cada link abre corretamente.`,
      gabarito: `Cada página tem o link da Agenda funcionando e pelo menos 2 endereços de e-mail colados, identificados (quem é cada contato). Ao clicar no link da Agenda, ele abre a semana correta. A dupla testou e confirmou que os links abrem. As duas páginas, do aluno e do colega, ficam completas.`,
    },
    {
      titulo: `Roda de conversa: como uso minha rotina`,
      tipo: `Roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Reúna a turma em roda. Faça perguntas abertas e deixe vários alunos responderem. O objetivo é refletir sobre o uso real, não avaliar a tabela. Anote boas ideias no quadro para todos copiarem.`,
      atividade: `Em roda, responda: Para qual situação você usa o Gmail? E a Agenda? E o Meet? Onde você guarda suas tarefas? O que muda no seu dia tendo tudo organizado em uma página só?`,
      gabarito: `Não há resposta única, mas o aluno deve associar corretamente cada ferramenta a um uso: Gmail para enviar e receber e-mails, Agenda para horários e lembretes, Meet para reuniões online, Notion para tarefas e notas. Respostas esperadas citam pelo menos 3 das 4 ferramentas e dão um exemplo concreto, como "uso a Agenda para não esquecer a prova".`,
    },
    {
      titulo: `Apresentação da minha rotina organizada`,
      tipo: `Projeto curto`,
      tempo: `13 min`,
      guiaProfessor: `Este é o projeto final do mês. Cada aluno apresenta no projetor em até 1 minuto. Use timer. Antes, dê 2 minutos para finalizarem o título e o parágrafo da página. Ofereça frases-guia a quem ficar tímido e elogie cada apresentação.`,
      atividade: `Finalize sua página "Minha rotina" com um título e um parágrafo curto explicando como você a usa. Depois, apresente para a turma em até 1 minuto, mostrando as tabelas, os links e dizendo qual ferramenta usa para cada situação.`,
      gabarito: `A página final reúne: tabela de Tarefas, tabela de Estudos, link da Agenda, e-mails de contatos e um parágrafo de explicação. Na apresentação, o aluno mostra a página e cita as 4 ferramentas com um uso para cada. Considera-se concluído quando a rotina está montada e foi apresentada de forma compreensível, mesmo que curta.`,
    },
  ],
};
