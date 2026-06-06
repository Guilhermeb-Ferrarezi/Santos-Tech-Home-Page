import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Montando meu painel final",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Reunir os gráficos criados no mês em uma única página do Power BI, com título, filtro (segmentação) e alinhamento limpo, formando o painel final que o aluno apresenta e salva.`,
  descricao: `Esta é a última aula do mês de Power BI e o momento de fechar o entregável: os primeiros visuais prontos e organizados em um painel. Durante as semanas anteriores, o aluno descobriu o que é o Power BI, explorou o ambiente, trouxe dados do Excel, limpou tabelas bagunçadas, criou relacionamentos e montou seus primeiros gráficos. Agora todas essas peças se juntam em uma página só, que conta uma história clara sobre os dados.

Um painel (ou dashboard) é uma tela única que reúne vários gráficos e números para responder perguntas rápido, sem precisar abrir planilhas. Pense no painel de um carro ou na tela de status de um videogame: tudo o que importa aparece junto, de forma visual. No Power BI, essa tela é a área de relatório, onde o aluno arrasta e organiza os visuais que já construiu. O trabalho de hoje é menos sobre criar coisas novas e mais sobre arrumar, dar título e deixar profissional.

A grande novidade técnica da aula é a segmentação de dados (slicer), um filtro visual que deixa quem olha o painel escolher o que quer ver. Por exemplo, um botão que filtra só um mês, uma categoria ou um jogo favorito. Com a segmentação, o mesmo painel responde a várias perguntas, porque o leitor clica e os gráficos mudam juntos na hora. É um recurso simples de adicionar e que dá um ar muito mais interativo e adulto ao trabalho.

No fim, cada aluno alinha os visuais, adiciona um título grande no topo, insere a segmentação, salva o arquivo e apresenta rapidamente o que seus dados revelam. Apresentar consolida o aprendizado, treina comunicação e deixa a turma orgulhosa: em quatro semanas eles saíram do zero e construíram um painel de dados de verdade.`,
  materiais: [
    `Computadores com Excel e Power BI Desktop instalados e abertos, com login feito antes da aula`,
    `Projetor ou TV para o professor demonstrar e os alunos apresentarem o painel`,
    `Arquivo Power BI (.pbix) de cada aluno, salvo nas aulas anteriores, já com gráficos e relacionamentos prontos`,
    `Arquivo Excel de exemplo (vendas, jogos ou notas da turma) caso algum aluno precise refazer ou recuperar dados`,
    `Painel-modelo pronto no Power BI do professor, com título, segmentação e visuais alinhados, para servir de referência`,
    `Cronômetro ou timer na tela para controlar o ritmo das apresentações`,
    `Lista de presença e ficha simples de avaliação do projeto final`,
  ],
  conceitosChave: [
    `Painel (dashboard) — página única que reúne vários gráficos e números para responder perguntas rapidamente, sem abrir planilhas.`,
    `Área de relatório — espaço em branco do Power BI onde o aluno arrasta, organiza e alinha os visuais.`,
    `Visual — cada elemento da página, como um gráfico de colunas, um gráfico de pizza ou um cartão de número.`,
    `Segmentação de dados (slicer) — filtro visual que deixa quem olha o painel escolher uma opção (mês, categoria) e muda todos os gráficos juntos.`,
    `Caixa de texto (título) — campo onde se escreve o nome do painel no topo, para identificar o que está sendo mostrado.`,
    `Alinhamento — organizar os visuais em linhas e colunas retas, com o mesmo tamanho e espaçamento, para um visual limpo.`,
    `Painel final — entregável do mês: os primeiros visuais do aluno reunidos, com título e filtro, prontos e explicados.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não cria gráficos do zero: você ajuda o aluno a juntar e arrumar o que ele já fez. O arquivo do Power BI termina em .pbix e cada aluno deve abrir o seu, salvo nas aulas anteriores. A tela principal do Power BI tem três faixas: à esquerda os três ícones de vista (Relatório, Tabela e Modelo) — fique sempre na vista Relatório, o primeiro ícone; no centro, a página em branco onde ficam os visuais; à direita, os painéis Visualizações e Dados (Campos). A novidade da aula é a segmentação de dados, um botão de filtro. Antes da aula, abra um painel-modelo seu já pronto, com título no topo, três ou quatro gráficos alinhados e uma segmentação funcionando, para mostrar no projetor. Faça login e salve um backup dos arquivos dos alunos, por garantia.

## Passo a passo da aula

Aquecimento (10 min). No projetor, mostre seu painel-modelo e pergunte: "O que dá para descobrir só olhando esta tela?". Deixe a turma responder. Depois clique na segmentação e mostre os gráficos mudando juntos. Diga que hoje cada um vai transformar seus gráficos soltos em um painel assim.

Conteúdo novo guiado (15 min). Com um .pbix aberto na vista Relatório, ensine três coisas. Primeiro, o título: na faixa superior, aba Inserir, clique em "Caixa de texto", desenhe no topo da página e digite o nome do painel (ex.: "Vendas da Lojinha"); aumente a fonte para 28 ou 32. Segundo, a segmentação: no painel Visualizações (à direita), clique no ícone "Segmentação de dados"; com ela selecionada, marque um campo no painel Dados (ex.: Mês ou Categoria); o filtro aparece na tela. Clique numa opção e mostre os gráficos reagindo. Terceiro, o alinhamento: selecione um visual, use as alças para igualar tamanhos; segure Ctrl e clique em vários, depois na aba Formato use "Alinhar" para deixá-los retos.

Mão na massa (25 min). Cada aluno monta seu painel final. Passos: 1) abrir o .pbix e ir para a vista Relatório; 2) arrastar os gráficos para formar uma grade organizada; 3) inserir uma caixa de texto no topo com o título; 4) adicionar uma segmentação de dados com um campo útil (mês, categoria, jogo); 5) alinhar os visuais com tamanhos parecidos; 6) salvar com Ctrl+S. Circule pela sala. Quem terminar antes pode trocar a cor de fundo dos visuais ou adicionar um cartão de número total.

Desafio e compartilhar (10 min). Cada aluno apresenta em até 1 minuto, no projetor, mostrando o painel, clicando na segmentação e dizendo uma descoberta dos dados ("o mês com mais vendas foi..."). Use o timer. Encerre lembrando que eles aprenderam, em um mês, a transformar dados em decisões visuais.

## Como explicar de forma clara

Para essa idade, compare o painel com a tela inicial de um jogo: vida, mapa e missões aparecem juntos num lugar só. Diga que a segmentação é o "controle remoto" do painel: clica e tudo muda. Chame o alinhamento de "arrumar a estante": os livros (visuais) ficam retos e do mesmo tamanho, e fica bonito. Reforce que um painel bom responde a uma pergunta rápido. Use exemplos da vida deles: notas por matéria, gols por jogador, horas de jogo por dia.

## Erros comuns e como ajudar

O erro mais comum é o aluno mexer na vista Tabela ou Modelo achando que é o relatório; lembre que o painel se monta no primeiro ícone, vista Relatório. Outro é criar a segmentação sem marcar nenhum campo, e ela fica vazia: mostre que é preciso clicar no campo no painel Dados. Há quem amontoe os gráficos um sobre o outro; ensine a arrastar pela borda e usar "Alinhar". Alguns esquecem de salvar; reforce o Ctrl+S e o nome do arquivo. Na apresentação, alunos tímidos podem travar; ofereça frases-guia ("meu painel mostra...", "quando eu clico aqui...", "descobri que..."). Controle o tempo: avise quando faltarem 5 minutos para começarem as apresentações.`,
  exercicios: [
    {
      titulo: `Dando um título ao meu painel`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Demonstre uma vez no projetor a aba Inserir e a Caixa de texto, depois deixe os alunos repetirem. Passe de mesa em mesa conferindo se o título está no topo e com fonte grande.`,
      atividade: `No seu arquivo do Power BI, na vista Relatório, vá à aba Inserir e clique em "Caixa de texto". Desenhe-a no topo da página e digite um título para o seu painel (ex.: "Vendas da Lojinha" ou "Notas da Turma"). Aumente a fonte para 28 ou 32.`,
      gabarito: `Existe uma caixa de texto no topo da página com um título claro e fonte ampliada (28 ou maior). O título descreve o assunto do painel. Exemplo aceito: caixa no topo escrito "Gols do Campeonato", fonte 32, centralizada acima dos gráficos.`,
    },
    {
      titulo: `Adicionando minha primeira segmentação`,
      tipo: `Desafio individual`,
      tempo: `8 min`,
      guiaProfessor: `Mostre o ícone "Segmentação de dados" no painel Visualizações e lembre que é preciso marcar um campo no painel Dados. O desafio é o aluno fazer sozinho e testar clicando. Ajude apenas quem travar.`,
      atividade: `No painel Visualizações, clique no ícone "Segmentação de dados". Com ela selecionada, marque um campo no painel Dados (ex.: Mês, Categoria ou Jogo). Depois clique em uma opção da segmentação e observe os gráficos mudarem.`,
      gabarito: `A página tem uma segmentação de dados com um campo escolhido e opções visíveis. Ao clicar em uma opção, os gráficos da página são filtrados e mudam juntos. Exemplo: segmentação por Mês; ao clicar em "Março", os gráficos passam a mostrar só março. O aluno conseguiu fazer sem demonstração nova.`,
    },
    {
      titulo: `Arrumando a estante: alinhar os visuais`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um aluno ajuda o outro a igualar tamanhos e alinhar. Mostre antes como segurar Ctrl para selecionar vários visuais e usar "Alinhar" na aba Formato. Reforce arrastar pela borda, não amontoar.`,
      atividade: `Em dupla, organizem o painel de cada um: deixem os gráficos com tamanhos parecidos e em linhas e colunas retas, sem um por cima do outro. Segurem Ctrl, selecionem vários visuais e usem "Alinhar". Confiram juntos se ficou limpo.`,
      gabarito: `Os visuais de cada painel estão sem sobreposição, com tamanhos semelhantes e alinhados em uma grade. O título continua no topo e a segmentação visível. A dupla confirmou que as duas telas ficaram organizadas. Exemplo: dois gráficos na linha de cima e dois na de baixo, todos do mesmo tamanho.`,
    },
    {
      titulo: `O que meus dados revelam?`,
      tipo: `Roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Reúna a turma em roda. Faça perguntas abertas e deixe vários alunos responderem, olhando o próprio painel. O objetivo é interpretar os dados, não avaliar o visual. Anote boas descobertas no quadro.`,
      atividade: `Em roda, olhando seu painel, responda: Qual foi o maior valor? E o menor? O que muda quando você clica na segmentação? Qual pergunta o seu painel responde rápido? Que descoberta te surpreendeu?`,
      gabarito: `Não há resposta única, mas o aluno deve ler ao menos um número do painel (maior ou menor valor) e explicar o efeito da segmentação ("quando filtro por março, as vendas caem"). Respostas esperadas citam uma descoberta concreta dos próprios dados, mostrando que ele interpreta o gráfico, e não só o desenha.`,
    },
    {
      titulo: `Apresentação do meu painel final`,
      tipo: `Projeto curto`,
      tempo: `13 min`,
      guiaProfessor: `Este é o projeto final do mês. Antes, dê 2 minutos para finalizarem título, alinhamento e salvarem com Ctrl+S. Cada aluno apresenta no projetor em até 1 minuto, usando timer. Ofereça frases-guia a quem ficar tímido e elogie cada apresentação.`,
      atividade: `Finalize seu painel: confira o título, alinhe os visuais, deixe a segmentação funcionando e salve com Ctrl+S. Depois apresente para a turma em até 1 minuto, mostrando o painel, clicando na segmentação e contando uma descoberta dos seus dados.`,
      gabarito: `O painel final reúne, em uma página: título no topo, ao menos dois gráficos alinhados, uma segmentação que filtra a tela e o arquivo salvo. Na apresentação, o aluno mostra o painel, usa a segmentação e diz uma descoberta dos dados. Considera-se concluído quando o painel está montado, salvo e apresentado de forma compreensível, mesmo que curto.`,
    },
  ],
};
