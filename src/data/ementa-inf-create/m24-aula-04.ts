import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Segmentações interativas (slicers)",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar segmentações de dados (slicers) com botões, listas e intervalo de datas e conectá-las a vários gráficos para o usuário clicar e explorar os dados.`,
  descricao: `Nas aulas anteriores o aluno aprendeu a importar dados, montar gráficos e cartões e aplicar filtros no painel. Agora chegou a parte mais divertida do Power BI: deixar o dashboard interativo de verdade. Uma segmentação de dados (em inglês, slicer) é um botão visual que aparece na própria tela do painel. Quando o usuário clica nele, todos os gráficos conectados mudam na hora para mostrar apenas o que foi escolhido. É como ter um controle remoto dentro do painel.

A diferença entre o filtro da aula passada e a segmentação desta aula é simples: o filtro fica escondido no painel lateral e quem usa precisa abrir aquele menu; já a segmentação fica visível na tela, grande e clicável, para qualquer pessoa usar sem instrução. Por isso ela é a estrela dos dashboards profissionais. Nesta aula o aluno vai criar três tipos: uma segmentação de lista (com nomes para marcar), uma segmentação de botões (estilo blocos para clicar) e uma segmentação de intervalo de datas (com uma linha do tempo deslizante).

O ponto mais importante e mais legal da aula é a interação cruzada. Quando duas ou mais segmentações estão na mesma página, elas trabalham juntas: escolher uma categoria e depois um período mostra exatamente o cruzamento dos dois. E como todas as segmentações já se conectam aos gráficos por padrão, basta clicar para ver o painel inteiro reagir. O aluno vai testar essa mágica clicando e observando os números mudarem em tempo real.

Esta é a quarta de oito aulas do mês sobre dashboards. O aluno está construindo, semana após semana, um painel profissional que será o entregável do mês e a base para o certificado do Ano 2. Hoje o painel ganha vida e passa a responder ao toque do usuário.`,
  materiais: [
    `Computadores com Excel e Power BI Desktop instalados e abertos (um por aluno)`,
    `Projetor ou tela grande para o professor demonstrar cada clique`,
    `Arquivo de exemplo "vendas-lanchonete.xlsx" com colunas Data, Produto, Categoria, Vendedor e Valor (pode ser o mesmo das aulas anteriores)`,
    `Arquivo .pbix da Aula 3 já com gráficos e cartões prontos (ponto de partida da aula)`,
    `Conta Microsoft gratuita, caso a turma vá salvar na nuvem (opcional)`,
    `Folha impressa com o passo a passo resumido dos três tipos de segmentação`,
    `Mouse com botão de rolagem (ajuda muito ao trabalhar com a linha do tempo de datas)`,
  ],
  conceitosChave: [
    `Segmentação de dados (slicer) — botão visual no painel que filtra todos os gráficos conectados quando o usuário clica nele.`,
    `Segmentação de lista — formato em que cada opção aparece como item para marcar ou desmarcar, um abaixo do outro.`,
    `Segmentação de botões — formato em que cada opção vira um bloco clicável, organizado lado a lado, mais bonito e fácil de tocar.`,
    `Segmentação de intervalo de datas — controle com uma linha do tempo deslizante para escolher um período entre uma data inicial e uma data final.`,
    `Interação cruzada — quando duas ou mais segmentações funcionam juntas e mostram o cruzamento das escolhas (por exemplo, categoria e período ao mesmo tempo).`,
    `Seleção múltipla — recurso que permite marcar mais de uma opção ao mesmo tempo, segurando a tecla Ctrl ao clicar.`,
    `Limpar seleção — ícone de borracha no canto da segmentação que desfaz todos os cliques e volta a mostrar tudo.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma segmentação de dados é o controle que o usuário vê e clica na tela do painel. No Power BI Desktop ela nasce a partir do botão "Segmentação de dados" (ícone de funil com um filtro), na faixa de opções, na aba "Inserir", ou na lista de visualizações do painel direito. Você não precisa dominar fórmulas: criar uma segmentação é arrastar um campo e escolher o formato. O segredo é que toda segmentação, por padrão, já controla os gráficos da mesma página. Se algo "não filtra", quase sempre é porque a segmentação está em outra página ou a interação foi desligada sem querer. Tenha o arquivo da Aula 3 aberto antes de começar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o painel da Aula 3 no projetor. Pergunte: "como vocês fariam para ver só as vendas de uma categoria?" Mostre rápido o filtro lateral da aula passada e diga que hoje vamos trazer esse poder para a tela, em forma de botão.

Conteúdo novo guiado (15 min): no Power BI Desktop, clique numa área vazia do painel. No painel "Visualizações" (à direita), clique no ícone "Segmentação de dados". Em "Dados", marque o campo Categoria. Surge uma lista. Agora ensine a trocar o formato: com a segmentação selecionada, vá ao painel "Formatar visual" (ícone de pincel), abra "Configurações da segmentação" e em "Opções > Estilo" escolha "Lista", "Mosaico" (botões) ou, para datas, o estilo aparece sozinho. Crie uma segunda segmentação com o campo Data: o Power BI mostra automaticamente uma linha do tempo deslizante com duas alças para arrastar. Clique numa categoria e mostre os gráficos mudando na hora.

Mão na massa (25 min): cada aluno cria três segmentações no seu painel. Primeira, de Categoria, no formato lista. Segunda, de Vendedor, trocando para o estilo "Mosaico" (botões). Terceira, de Data, no formato intervalo. Peça que cliquem em uma categoria e depois arrastem a linha do tempo, observando os cartões e gráficos reagirem juntos. Ensine dois truques: segurar Ctrl para marcar mais de uma opção, e o ícone de borracha no canto da segmentação para limpar tudo.

Desafio e compartilhar (10 min): cada aluno escolhe uma "pergunta de negócio" (por exemplo, "quanto o João vendeu de bebidas em maio?") e usa as três segmentações juntas para responder. Dois ou três alunos mostram a tela no projetor.

## Como explicar de forma clara (linguagem para a idade)

Compare a segmentação com o controle remoto da TV: cada botão muda o que aparece na tela, sem mexer no aparelho por dentro. Diga que o filtro da aula passada era um controle escondido na gaveta; a segmentação é o controle em cima da mesa, à vista de todos. Chame a interação cruzada de "trabalho em equipe dos botões": um escolhe a categoria, o outro escolhe o mês, e juntos mostram a resposta exata. Use a palavra "explorar": o painel agora deixa qualquer pessoa explorar os dados clicando.

## Erros comuns e como ajudar

Se a segmentação não filtra os gráficos, confira se os dois estão na mesma página e se a interação não foi desligada (selecione a segmentação, vá em "Formatar > Editar interações" e garanta que o gráfico está com o ícone de filtro ativo). Se o aluno não vê a linha do tempo, é porque o campo de data está como texto: peça para confirmar que a coluna Data é do tipo data. Se ele "travou" o painel mostrando nada, geralmente clicou em duas opções que se excluem; ensine a borracha para limpar. Se a segmentação ficou enorme, mostre como redimensionar arrastando as bordas. Elogie cada clique que faz o painel reagir, pois é aí que a interatividade fica visível.`,
  exercicios: [
    {
      titulo: `Minha primeira segmentação de lista`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno está no painel da Aula 3. Circule pela sala verificando se o campo escolhido apareceu como lista e se os gráficos reagem ao clique.`,
      atividade: `No seu painel, clique numa área vazia, insira uma segmentação de dados e arraste o campo Categoria para ela. Clique em uma categoria e observe os gráficos mudarem. Depois clique no ícone de borracha para limpar a seleção.`,
      gabarito: `Uma segmentação em formato de lista com as categorias (por exemplo, Bebidas, Salgados, Doces). Ao clicar em "Bebidas", os cartões e gráficos passam a mostrar só bebidas. O ícone de borracha no canto superior da segmentação volta a mostrar todos os dados.`,
    },
    {
      titulo: `Trocando para botões (estilo mosaico)`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre onde fica "Formatar visual > Configurações da segmentação > Opções > Estilo". Ajude quem não acha o painel de formatação (ícone de pincel).`,
      atividade: `Crie uma nova segmentação com o campo Vendedor. Depois, no painel "Formatar visual", troque o estilo de "Lista" para "Mosaico" para que cada vendedor vire um botão. Clique em um botão e veja o painel reagir.`,
      gabarito: `Uma segmentação em que cada vendedor aparece como um bloco clicável lado a lado, em vez de lista vertical. Ao clicar no botão de um vendedor, os gráficos mostram apenas as vendas dele. O estilo foi alterado em "Opções > Estilo > Mosaico".`,
    },
    {
      titulo: `Linha do tempo: intervalo de datas`,
      tipo: `prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Confirme com a turma que a coluna Data é do tipo data (e não texto), senão a linha do tempo não aparece. Ensine a arrastar as duas alças.`,
      atividade: `Insira uma terceira segmentação usando o campo Data. O Power BI deve mostrar uma linha do tempo com duas alças. Arraste as alças para escolher um período (por exemplo, só o mês de maio) e observe os valores mudarem.`,
      gabarito: `Uma segmentação de intervalo de datas com uma barra deslizante e duas alças (início e fim). Ao limitar o período a maio, os cartões e gráficos mostram apenas as vendas daquele mês. As datas inicial e final aparecem escritas acima da barra.`,
    },
    {
      titulo: `Interação cruzada em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Um aluno opera, o outro narra o que vê mudando. Reforce que as segmentações trabalham juntas e que Ctrl permite marcar mais de uma opção.`,
      atividade: `Em dupla, num único painel, usem as três segmentações ao mesmo tempo. Escolham uma categoria, um vendedor e um período e descrevam em voz alta o que os gráficos mostram. Depois testem segurar Ctrl para marcar duas categorias de uma vez.`,
      gabarito: `Os gráficos mostram exatamente o cruzamento das três escolhas (categoria + vendedor + período). Com Ctrl pressionado, é possível marcar duas categorias e o painel soma as duas. A dupla deve conseguir explicar que mudar qualquer segmentação atualiza todos os gráficos juntos.`,
    },
    {
      titulo: `Responda à pergunta de negócio`,
      tipo: `projeto curto`,
      tempo: `13 min`,
      guiaProfessor: `Dê a cada aluno (ou deixe escolher) uma pergunta clara. Peça que respondam usando apenas as segmentações, sem mexer nas fórmulas. Selecione dois ou três para apresentar no projetor.`,
      atividade: `Escolha uma pergunta de negócio, por exemplo: "Quanto o João vendeu de bebidas no mês de maio?". Use as três segmentações juntas (Categoria, Vendedor e Data) para encontrar a resposta no painel e anote o valor que aparece no cartão.`,
      gabarito: `O aluno marca Categoria = Bebidas, Vendedor = João e Data = maio, e lê o valor total no cartão correspondente. A resposta é o número exibido no painel após o cruzamento das três segmentações; o aluno deve dizer o valor e explicar quais botões usou para chegar nele.`,
    },
  ],
};
