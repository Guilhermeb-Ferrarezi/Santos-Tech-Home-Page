import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Deixando a tabela bonita: cores e bordas",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aplicar formatação visual no Excel — cor de fundo, cor da fonte, negrito, alinhamento e bordas — para transformar uma lista de dados numa tabela clara, organizada e com aparência profissional.`,
  descricao: `Nas aulas anteriores os alunos aprenderam o mapa da planilha, mexeram em linhas, colunas e abas, e digitaram seus primeiros dados sem medo. Agora chegou a hora de deixar tudo bonito. Uma tabela cheia de números é útil, mas se ela for só texto cinza sobre fundo branco fica cansativa e difícil de ler. Nesta aula o aluno descobre que o Excel não serve apenas para calcular: ele também é uma ferramenta para apresentar informação de um jeito agradável e fácil de entender.

O foco é a formatação visual. Os alunos vão pintar o fundo das células com cor, mudar a cor da fonte, deixar palavras em negrito e alinhar os textos de forma organizada. O grande destaque da aula é o cabeçalho da tabela, aquela primeira linha que diz o que cada coluna significa. Um cabeçalho bem formatado, com fundo colorido e letra em negrito, separa na hora o título dos dados e faz toda a diferença na clareza.

O segundo grande tema são as bordas. Sem bordas, as células se misturam e a tabela parece um amontoado de palavras flutuando. Com bordas, cada informação ganha sua própria caixinha e o olho percorre as linhas e colunas com facilidade. Os alunos vão aprender a aplicar bordas em volta de toda a tabela e entre as células, criando aquela grade que reconhecemos em qualquer tabela profissional.

Tudo isso é praticado na ferramenta, com os alunos formatando uma lista real — como uma lista de jogos, filmes favoritos ou colegas da turma. No fim, eles comparam a tabela "antes" e "depois" e percebem, na prática, como pequenos detalhes de cor e borda deixam o trabalho com cara de profissional. Essa é uma habilidade que eles vão usar em todo relatório, planilha e apresentação pelo resto da vida.`,
  materiais: [
    `Computadores com o Microsoft Excel instalado e aberto, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar cada passo da formatação`,
    `Arquivo de exemplo já pronto pelo professor, chamado "Lista de Jogos", com dados sem formatação para servir de ponto de partida`,
    `Conta Microsoft ativa para cada aluno, caso a escola use o Excel online ou salve os arquivos na nuvem`,
    `Imagem ou slide com um exemplo de tabela "antes" (sem formatação) e "depois" (formatada) para mostrar o objetivo da aula`,
    `Pasta no computador para os alunos salvarem o arquivo da própria tabela`,
  ],
  conceitosChave: [
    `Cor de preenchimento — cor que pintamos no fundo de uma célula, usando o ícone do baldinho de tinta na aba "Página Inicial".`,
    `Cor da fonte — cor das letras e números digitados na célula, alterada pelo ícone da letra "A" com uma faixa colorida embaixo.`,
    `Negrito — recurso que deixa o texto mais grosso e escuro para dar destaque; o atalho é Ctrl + N e o botão tem a letra "N".`,
    `Alinhamento — posição do texto dentro da célula, podendo ficar à esquerda, no centro ou à direita, controlado pelos botões na aba "Página Inicial".`,
    `Cabeçalho da tabela — primeira linha da tabela, que nomeia cada coluna e costuma receber destaque com cor de fundo e negrito.`,
    `Borda — linha que desenhamos em volta ou entre as células para separar as informações; aplicada pelo botão de bordas na aba "Página Inicial".`,
    `Grade — conjunto de bordas que forma o desenho completo da tabela, com linhas em volta e entre todas as células, deixando-a fácil de ler.`,
  ],
  treinamento: `## O que o professor precisa saber

Toda a formatação visual desta aula fica na aba "Página Inicial" (a primeira aba da faixa de botões no topo do Excel), no grupo "Fonte" e no grupo "Alinhamento". Memorize a localização de cinco ferramentas. A cor de fundo é o ícone do baldinho de tinta despejando; ao lado dele há uma setinha que abre a paleta de cores. A cor da fonte é o ícone da letra "A" com uma faixa colorida embaixo, também com setinha para a paleta. O negrito é o botão com a letra "N" (atalho Ctrl + N). Os três botões de alinhamento horizontal (esquerda, centro, direita) ficam no grupo "Alinhamento". E o botão de bordas tem o desenho de uma janelinha quadriculada; a setinha ao lado abre a lista com opções como "Todas as bordas" e "Borda externa". Antes de tudo, lembre que para formatar é preciso primeiro selecionar as células: clica e arrasta para pintar várias de uma vez. Abra o arquivo "Lista de Jogos" e teste cada botão antes da turma chegar.

## Passo a passo da aula

Aquecimento (10 min): no projetor, mostre a tabela "antes" (sem cor nem borda) e a "depois" (formatada). Pergunte: "Qual é mais fácil de ler? Por quê?". Reveja como selecionar células clicando e arrastando, pois isso será usado o tempo todo.

Conteúdo novo guiado (15 min): abra o arquivo "Lista de Jogos". Selecione a primeira linha (o cabeçalho) arrastando o mouse. Na aba "Página Inicial", clique na setinha do baldinho de tinta e escolha uma cor de fundo. Em seguida clique no "N" para deixar em negrito e use a cor da fonte (letra "A") para o texto branco. Centralize com o botão de alinhamento ao centro. Agora selecione a tabela inteira, clique na setinha do botão de bordas e escolha "Todas as bordas". Mostre o resultado: cabeçalho destacado e grade completa.

Mão na massa (25 min): cada aluno repete os passos no próprio arquivo "Lista de Jogos". Eles devem: pintar o cabeçalho, deixá-lo em negrito, escolher a cor da fonte, centralizar e aplicar "Todas as bordas" na tabela. Circule pela sala ajudando quem se perder. Incentive cada aluno a escolher suas próprias cores.

Desafio e compartilhar (10 min): peça que cada aluno pinte de uma cor suave as linhas dos dados (sem ser o cabeçalho) para criar contraste. Quem terminar mostra a tabela no projetor e conta quais cores escolheu.

## Como explicar de forma clara

Use comparações simples. Diga que formatar a tabela é como arrumar o quarto: a mesma coisa, mas organizada, fica muito melhor de usar. Compare o cabeçalho colorido com o título de um cartaz, que precisa se destacar do resto. Explique a borda como o contorno de cada quadrinho de uma história em quadrinhos: sem o contorno, os desenhos se misturam. Reforce sempre a regra de ouro: "primeiro seleciono, depois formato". Faça cada passo no projetor devagar e só então libere a turma para repetir. Elogie as escolhas de cor para deixar a aula leve e divertida.

## Erros comuns e como ajudar

O erro mais frequente é o aluno clicar num botão de cor sem antes selecionar as células, e nada acontece; lembre sempre a regra "seleciono, depois formato". Outro problema é escolher cor de fundo escura com fonte escura, deixando o texto invisível; oriente a combinar fundo escuro com fonte clara, e vice-versa. Muitos clicam no baldinho em vez da setinha ao lado e aplicam a última cor usada sem querer; mostre que a setinha abre a paleta. Na hora das bordas, alguns escolhem "Borda externa" achando que é a grade completa e ficam só com o contorno; explique a diferença para "Todas as bordas". Por fim, há quem selecione só uma célula e reclame que a borda não fechou a tabela; mostre que é preciso selecionar todas as células antes.`,
  exercicios: [
    {
      titulo: `Pintando minha primeira célula`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Demonstre no projetor primeiro. Verifique se cada aluno selecionou a célula antes de clicar na cor. Reforce a regra "seleciono, depois formato".`,
      atividade: `Abra o arquivo "Lista de Jogos". Clique na célula A1 (o primeiro título do cabeçalho). Na aba "Página Inicial", clique na setinha ao lado do baldinho de tinta e escolha uma cor de fundo azul. Confira se a célula ficou pintada.`,
      gabarito: `A célula A1 deve aparecer com o fundo azul preenchido. Se nada mudou, o aluno provavelmente não selecionou a célula antes de clicar na cor, ou clicou fora do baldinho. A solução é clicar na célula A1 e tentar de novo pela setinha do baldinho.`,
    },
    {
      titulo: `Destacando o cabeçalho`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre como selecionar a linha inteira do cabeçalho arrastando o mouse. Acompanhe os três passos: cor de fundo, negrito e cor da fonte. Lembre o atalho Ctrl + N para o negrito.`,
      atividade: `Selecione toda a primeira linha da tabela (o cabeçalho) arrastando o mouse. Pinte o fundo com uma cor escura, clique no botão "N" para deixar em negrito e mude a cor da fonte para branco, usando o ícone da letra "A".`,
      gabarito: `A linha do cabeçalho deve ter fundo de cor escura, texto em negrito e fonte branca, ficando bem destacada do resto. Se o texto sumiu, o aluno deixou fonte escura sobre fundo escuro; basta trocar a cor da fonte para branco.`,
    },
    {
      titulo: `Criando a grade com bordas`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Explique a diferença entre "Borda externa" (só o contorno) e "Todas as bordas" (a grade completa). Confira se o aluno selecionou a tabela inteira antes de aplicar.`,
      atividade: `Selecione toda a tabela, do primeiro ao último dado. Clique na setinha ao lado do botão de bordas, na aba "Página Inicial", e escolha "Todas as bordas". Depois centralize os títulos do cabeçalho usando o botão de alinhamento ao centro.`,
      gabarito: `A tabela inteira deve ficar com uma grade completa, com linhas em volta e entre todas as células, e o cabeçalho centralizado. Se só apareceu o contorno por fora, o aluno escolheu "Borda externa"; deve trocar para "Todas as bordas". Se a grade não cobriu tudo, faltou selecionar todas as células antes.`,
    },
    {
      titulo: `Antes e depois em dupla`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas. Cada aluno mostra ao colega a tabela formatada e o colega aponta o que melhorou. Estimule a usar os termos certos: cor de fundo, negrito, alinhamento e bordas.`,
      atividade: `Em dupla, troquem de computador. Olhe a tabela do colega e aponte três coisas que a formatação melhorou em comparação a uma tabela sem cor nem borda. Sugira ao colega uma cor diferente para o cabeçalho e veja como fica.`,
      gabarito: `Cada dupla deve citar pelo menos três melhorias usando os termos corretos, por exemplo: o cabeçalho ficou destacado pela cor de fundo e pelo negrito, as bordas separaram as informações e o alinhamento central organizou os títulos. A nova cor de cabeçalho deve ter sido aplicada com sucesso na tabela do colega.`,
    },
    {
      titulo: `Minha tabela profissional`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este exercício junta tudo. Verifique cada tabela conferindo cabeçalho destacado, bordas completas, alinhamento e contraste de cores. Ajude quem misturou cores escuras. Peça para salvarem o arquivo na pasta indicada.`,
      atividade: `Crie do zero uma tabela com cinco dos seus jogos ou filmes favoritos, com as colunas "Nome", "Tipo" e "Nota". Formate-a por completo: cabeçalho com cor de fundo, negrito e fonte clara, alinhamento central no cabeçalho, "Todas as bordas" na tabela e uma cor suave de fundo nas linhas dos dados. Salve o arquivo.`,
      gabarito: `A tabela final deve ter três colunas com cabeçalho ("Nome", "Tipo", "Nota") destacado por cor de fundo, negrito e fonte clara; cabeçalho centralizado; grade completa com "Todas as bordas"; e as linhas dos dados com uma cor de fundo suave que contraste com o cabeçalho. O texto deve estar legível em todas as células e o arquivo precisa ter sido salvo na pasta indicada.`,
    },
  ],
};
