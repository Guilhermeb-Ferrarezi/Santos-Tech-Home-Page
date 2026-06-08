import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Tabelas que conversam",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender por que os dados ficam separados em mais de uma tabela e descobrir, na tela de Modelo do Power BI, como duas tabelas se conectam por uma coluna em comum, chamada chave.`,
  descricao: `Até agora o aluno trouxe dados do Excel e aprendeu a limpar tabelas bagunçadas. Nesta aula ele dá um passo conceitual importante: percebe que dados de verdade quase nunca cabem bem em uma única tabela. Imagine uma loja: existem as vendas (o que foi vendido, quando e por quanto) e existem os produtos (o nome de cada item, a categoria, o preço). Se a gente jogasse tudo numa tabela só, o nome do produto se repetiria centenas de vezes, e qualquer correção viraria um pesadelo. Por isso separamos: uma tabela de Vendas e uma tabela de Produtos.

O coração da aula é a pergunta "como o Power BI sabe que a venda número 7 é de um Tênis e não de uma Camiseta?". A resposta é a coluna em comum. Nas duas tabelas existe uma coluna que carrega o mesmo código, por exemplo "CodProduto". É por esse código repetido nas duas tabelas que o Power BI consegue ligar uma linha de Vendas à linha certa de Produtos. Essa coluna que faz a ponte tem um nome especial: chave. A aula apresenta a ideia de chave de forma simples e visual, sem fórmulas complicadas.

O destaque prático é a tela de Modelo, a terceira visão do Power BI (ao lado de Relatório e Dados), representada por um ícone de tabelas conectadas no lado esquerdo. Nessa tela cada tabela aparece como uma caixinha com a lista de colunas, e o aluno enxerga, com os próprios olhos, a linha que liga a coluna de uma tabela à coluna da outra. Ver essa linha desenhada na tela é o momento em que o conceito "clica" na cabeça da turma.

O foco desta aula é o conceito, não a construção. O aluno vai observar, reconhecer e explicar a ligação entre tabelas; a criação de relacionamentos do zero fica para a próxima aula. Ao final, ele deve saber responder, com as próprias palavras, três coisas: por que separar dados em duas tabelas, o que é uma coluna em comum (chave) e onde fica e o que mostra a tela de Modelo.`,
  materiais: [
    `Computadores (um por aluno) com o Power BI Desktop instalado e aberto, e o Excel disponível na mesma máquina`,
    `Projetor ou tela grande para o professor demonstrar a tela de Modelo e a linha que liga as duas tabelas`,
    `Arquivo de exemplo "Loja-Vendas.pbix" já com duas tabelas carregadas (Vendas e Produtos) compartilhando a coluna "CodProduto"`,
    `Arquivo "Loja-Vendas.xlsx" com as duas planilhas (abas Vendas e Produtos) caso o professor precise mostrar a origem dos dados`,
    `Folha impressa com um desenho de duas tabelas (Vendas e Produtos) e um espaço para o aluno desenhar à mão a linha que as conecta`,
    `Conexão de internet para eventuais downloads ou atualizações do Power BI Desktop`,
    `Cronômetro ou relógio visível para respeitar o ritmo de 10/15/25/10 minutos`,
  ],
  conceitosChave: [
    `Tabela — conjunto de dados organizado em linhas e colunas, como uma planilha; aqui temos a tabela de Vendas e a de Produtos.`,
    `Coluna em comum — coluna que existe nas duas tabelas com o mesmo conteúdo (por exemplo "CodProduto"), servindo de ponte entre elas.`,
    `Chave — a coluna que identifica e liga as tabelas; é por ela que o Power BI casa cada venda com o produto certo.`,
    `Relacionamento — a ligação entre duas tabelas feita pela coluna em comum, mostrada como uma linha na tela de Modelo.`,
    `Tela de Modelo — a visão do Power BI (ícone de tabelas conectadas) onde vemos as tabelas como caixinhas e as linhas que as conectam.`,
    `Redundância — repetição desnecessária de informação; é o que evitamos ao separar os dados em duas tabelas em vez de uma só.`,
    `Cardinalidade — quantas linhas de uma tabela se ligam a quantas da outra; aqui basta a ideia de "um produto aparece em muitas vendas".`,
  ],
  treinamento: `## O que o professor precisa saber

O Power BI Desktop tem três visões empilhadas como ícones no lado esquerdo da janela: Relatório (ícone de gráfico), Dados (ícone de tabela com linhas) e Modelo (ícone de três caixinhas ligadas por linhas). Esta aula vive na terceira: a tela de Modelo. Para abri-la, clique no ícone de baixo, o das caixinhas conectadas. Lá cada tabela aparece como um retângulo com o nome no topo e a lista de colunas embaixo. Quando duas tabelas têm um relacionamento, uma linha sai de uma coluna e chega na coluna da outra tabela.

Antes da aula, abra o arquivo "Loja-Vendas.pbix" e confira na tela de Modelo se já existe a linha ligando "CodProduto" da tabela Vendas ao "CodProduto" da tabela Produtos. Passe o mouse sobre essa linha: as duas colunas ligadas ficam destacadas. Esse destaque é o seu melhor recurso visual. Você não precisa criar relacionamentos hoje (isso é a próxima aula); seu papel é mostrar e explicar a linha que já existe.

## Passo a passo da aula

1. Aquecimento e revisão (10 min). Projete a tabela "Vendas" na visão de Dados (ícone do meio, à esquerda). Pergunte: "Cadê o nome do produto aqui?". A turma vai notar que só aparece um código, "CodProduto". Conduza para a ideia: o nome mora em outra tabela. Mostre rápido a tabela "Produtos" e o mesmo código repetido nela.

2. Conteúdo novo guiado (15 min). Clique no ícone de Modelo (caixinhas conectadas, no canto inferior esquerdo). Mostre as duas caixas, Vendas e Produtos. Aponte a coluna "CodProduto" em cada uma. Passe o mouse sobre a linha que as liga e mostre as colunas se acendendo. Explique: "Essa linha é a ponte; o código que se repete nas duas é a chave". Mostre também a setinha na linha, que aponta da tabela Produtos para Vendas.

3. Mão na massa (25 min). Cada aluno abre o "Loja-Vendas.pbix", clica no ícone de Modelo e localiza a linha entre as tabelas. Pede-se que arraste as caixinhas para organizar, passe o mouse na linha e anote na folha impressa quais colunas estão ligadas. Depois, na visão de Dados, escolhe um "CodProduto" da tabela Vendas e procura esse mesmo código na tabela Produtos para descobrir o nome do item.

4. Desafio e compartilhar (10 min). Cada aluno desenha à mão, na folha, as duas tabelas e a linha que as conecta, escrevendo embaixo a frase "a chave é ______". Dois ou três voluntários explicam para a turma por que não juntamos tudo numa tabela só.

## Como explicar de forma clara

Use a imagem da carteirinha da escola. Diga: "Na lista de presença só aparece o número da matrícula, não a sua vida inteira. Seus dados completos ficam na secretaria. O número de matrícula é a chave que liga a lista à ficha". Aqui é igual: "CodProduto" é a matrícula do produto. Outra imagem boa é a do cardápio: o pedido anota o código 7, e o cardápio diz que o 7 é o hambúrguer. Repita a frase-guia: "Tabelas conversam por uma coluna em comum". Evite os termos técnicos pesados; "cardinalidade" pode virar só "um produto aparece em muitas vendas".

## Erros comuns e como ajudar

O erro mais comum é o aluno tentar achar o nome do produto dentro da tabela Vendas e travar; mostre que o nome mora na tabela Produtos e que o código faz a ponte. Outro é clicar no ícone errado e cair na visão de Dados achando que está no Modelo; aponte de novo o ícone de caixinhas conectadas, sempre o de baixo. Alguns acham que a linha entre as tabelas foi eles que fizeram e tentam apagar; explique que hoje só observamos, não mexemos. Há quem confunda chave com qualquer coluna; reforce que a chave é justamente a coluna que se repete igual nas duas tabelas. Por fim, se um aluno quiser logo "juntar tudo numa tabela", elogie a curiosidade e diga que vamos entender, na próxima aula, por que separar é mais inteligente.`,
  exercicios: [
    {
      titulo: `Onde mora o nome do produto?`,
      tipo: `Prática no computador`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que todos abriram o "Loja-Vendas.pbix" e estão na visão de Dados (ícone do meio à esquerda). O objetivo é fazer o aluno perceber, sozinho, que o nome do produto não está na tabela Vendas. Não revele a resposta antes; deixe a turma descobrir.`,
      atividade: `Abra o arquivo "Loja-Vendas.pbix" e clique no ícone de Dados (a tabela com linhas, no lado esquerdo). Selecione a tabela "Vendas" no painel da direita. Procure uma coluna com o nome do produto. Depois selecione a tabela "Produtos" e procure o nome lá. Em qual das duas tabelas está o nome do produto?`,
      gabarito: `O nome do produto está na tabela "Produtos". Na tabela "Vendas" só existe a coluna "CodProduto" (um código), sem o nome escrito. Se o aluno disser que o nome está em Vendas, ele provavelmente confundiu o código com o nome ou olhou a tabela errada.`,
    },
    {
      titulo: `Achei a linha que liga as tabelas`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Aqui o aluno entra pela primeira vez na tela de Modelo. Mostre uma vez no projetor onde fica o ícone de caixinhas conectadas (o de baixo). Peça que passem o mouse sobre a linha para ver as colunas se acenderem. Circule confirmando que cada um achou a linha.`,
      atividade: `No "Loja-Vendas.pbix", clique no ícone de Modelo (as três caixinhas ligadas por linhas, no canto inferior esquerdo). Encontre as caixas "Vendas" e "Produtos". Passe o mouse sobre a linha que liga as duas. Anote na folha: que coluna da tabela Vendas e que coluna da tabela Produtos ficam destacadas?`,
      gabarito: `A linha liga a coluna "CodProduto" da tabela Vendas à coluna "CodProduto" da tabela Produtos. Ao passar o mouse, essas duas colunas ficam destacadas. Se o aluno escrever colunas diferentes, peça que passe o mouse de novo bem em cima da linha, pois é o destaque que revela as colunas certas.`,
    },
    {
      titulo: `Caça ao produto pelo código`,
      tipo: `Desafio`,
      tempo: `9 min`,
      guiaProfessor: `Esse desafio mostra, na prática, para que serve a chave. O aluno usa o código de uma venda para descobrir o nome do produto na outra tabela, fazendo "à mão" o que o Power BI faz sozinho. Escolha antes um CodProduto que exista, para evitar frustração.`,
      atividade: `Na visão de Dados, abra a tabela "Vendas" e escolha qualquer linha; anote o número que aparece na coluna "CodProduto" dessa venda. Agora abra a tabela "Produtos" e procure esse mesmo número na coluna "CodProduto" de lá. Que produto (nome) corresponde ao código que você escolheu?`,
      gabarito: `O aluno encontra, na tabela Produtos, a linha com o mesmo "CodProduto" anotado e lê o nome do produto naquela linha (por exemplo, código 7 corresponde a "Tênis"). O importante é que ele perceba que foi o código em comum que permitiu achar o nome. Se não encontrar, confira se ele copiou o código exatamente igual.`,
    },
    {
      titulo: `Explicando a chave para o colega`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Atividade de fala e troca. Um aluno ensina o outro usando a tela de Modelo como apoio. Ouça as explicações circulando pela sala e corrija com gentileza quem chamar qualquer coluna de chave. Reforce a frase-guia "tabelas conversam por uma coluna em comum".`,
      atividade: `Em dupla, abram a tela de Modelo no Power BI. Um de vocês explica para o outro, apontando na tela, três coisas: (1) quais são as duas tabelas, (2) qual é a coluna em comum que as liga e (3) por que essa coluna é chamada de chave. Depois troquem: quem ouviu agora explica de volta com as próprias palavras.`,
      gabarito: `Uma boa explicação diz: as tabelas são Vendas e Produtos; a coluna em comum é "CodProduto"; ela é a chave porque é o código que se repete igual nas duas tabelas e permite ligar cada venda ao produto certo. Aceite variações nas palavras, desde que as três ideias apareçam. Se a dupla chamar outra coluna de chave, peça que mostrem qual coluna realmente se repete nas duas tabelas.`,
    },
    {
      titulo: `Por que não juntar tudo numa tabela só?`,
      tipo: `Roda de conversa`,
      tempo: `12 min`,
      guiaProfessor: `Fechamento conceitual em roda. Conduza a discussão sem dar a resposta pronta; deixe os argumentos surgirem. Use o exemplo da repetição: se o nome do produto ficasse em Vendas, ele se repetiria em toda venda. Anote no quadro as ideias da turma e amarre com a palavra "redundância".`,
      atividade: `Em roda, discutam a pergunta: "Se a gente colocasse o nome, a categoria e o preço de cada produto dentro da própria tabela de Vendas, o que aconteceria?". Pensem no que aconteceria com uma tabela de 500 vendas e no que seria preciso fazer para corrigir o preço de um produto. Cada aluno dá pelo menos uma vantagem de separar os dados em duas tabelas.`,
      gabarito: `Respostas esperadas: o nome e o preço se repetiriam em todas as vendas (redundância), a tabela ficaria enorme e confusa, e corrigir o preço de um produto exigiria mudar dezenas ou centenas de linhas em vez de uma só. Separar em duas tabelas evita repetição, deixa a correção em um único lugar e mantém os dados organizados. A tela de Modelo então liga tudo pela chave "CodProduto". Valorize qualquer resposta que cite repetição evitada ou correção em um lugar só.`,
    },
  ],
};
