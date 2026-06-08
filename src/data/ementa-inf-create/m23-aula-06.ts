import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Criando relacionamentos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `O aluno cria e ajusta relacionamentos entre duas tabelas na tela de Modelo do Power BI, confere a direção e o tipo da ligação (um-para-muitos), testa o cruzamento em uma visualização simples e corrige um relacionamento errado para deixar o modelo pronto para os gráficos.`,
  descricao: `Nas aulas anteriores o aluno trouxe os dados do Excel para o Power BI, limpou as informações bagunçadas e descobriu que um projeto de verdade quase nunca cabe em uma única tabela. É comum ter uma tabela de Vendas com muitas linhas e outra tabela de Produtos com a descrição de cada item. Sozinhas, essas tabelas não conversam: a de Vendas só mostra um código de produto, e a de Produtos guarda o nome e o preço. Esta aula ensina a fazer as duas tabelas conversarem por meio de um relacionamento.

Um relacionamento é uma ligação entre uma coluna de uma tabela e uma coluna de outra. Quando as duas colunas têm o mesmo tipo de informação, como o código do produto, o Power BI consegue dizer: "esta venda é do produto número 7, e o produto número 7 se chama Fone de Ouvido". É essa ponte que permite, mais tarde, montar um gráfico que mostra o total vendido por nome de produto, mesmo que o nome esteja em uma tabela e o valor em outra.

O lugar onde tudo isso acontece é a tela de Modelo, o terceiro ícone na barra da esquerda do Power BI. Lá cada tabela aparece como um quadradinho com a lista das suas colunas, e o aluno cria a ligação simplesmente arrastando uma coluna de uma tabela até a coluna correspondente da outra. Surge uma linha ligando as duas, com pequenos símbolos nas pontas que indicam o tipo (um lado mostra o número 1 e o outro mostra o sinal de muitos, o asterisco) e uma seta que indica a direção do filtro.

Além de criar, o aluno aprende a conferir e a corrigir. Um relacionamento ligado nas colunas erradas faz os números saírem completamente errados, então é fundamental testar. O teste é simples: monta-se uma visualização rápida juntando uma coluna de cada tabela e observa-se se os dados batem. Se algo estiver estranho, o aluno abre o relacionamento, ajusta as colunas ou apaga e refaz. Ao final, o modelo estará organizado e pronto para os primeiros gráficos da próxima aula.`,
  materiais: [
    `Computadores (um por aluno) com Power BI Desktop instalado e o arquivo .pbix do mês já com as duas tabelas (Vendas e Produtos) importadas e limpas das aulas anteriores`,
    `Microsoft Excel instalado, caso seja preciso reabrir as planilhas de origem e conferir as colunas de código`,
    `Projetor ou TV para o professor demonstrar a tela de Modelo e o arrastar das colunas ao vivo`,
    `Arquivo de exemplo pronto (.pbix modelo) com o relacionamento já criado corretamente, para servir de referência ao final`,
    `Conta Microsoft para login no Power BI Desktop, caso a turma precise salvar ou abrir recursos online`,
    `Folha de papel e lápis para cada aluno desenhar as duas tabelas e a linha que as liga antes de mexer no programa`,
  ],
  conceitosChave: [
    `Relacionamento — uma ligação que faz duas tabelas conversarem, conectando uma coluna de uma à coluna parecida da outra.`,
    `Tela de Modelo — a área do Power BI (terceiro ícone da barra esquerda) onde vemos as tabelas como quadradinhos e desenhamos as ligações entre elas.`,
    `Coluna-chave — a coluna que se repete nas duas tabelas e serve de ponte, como o código do produto presente em Vendas e em Produtos.`,
    `Um-para-muitos — o tipo de ligação em que um item de uma tabela (um produto) aparece em muitas linhas da outra (muitas vendas); marcado com 1 de um lado e asterisco do outro.`,
    `Cardinalidade — o nome técnico para o tipo da ligação (um-para-muitos, um-para-um), ou seja, quantas linhas de um lado combinam com o outro.`,
    `Direção do filtro — a seta no meio da linha que mostra para qual lado o filtro viaja quando clicamos em um dado.`,
    `Tabela dimensão e tabela fato — a dimensão descreve itens (Produtos) e fica no lado do 1; a fato registra os acontecimentos (Vendas) e fica no lado dos muitos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Power BI para dar esta aula. O coração dela é uma ideia simples: duas tabelas separadas só conversam se tiverem uma coluna em comum, e nós ligamos essa coluna. Pense em duas listas de papel: uma lista de vendas que só diz "produto 7, produto 3, produto 7" e uma lista de produtos que diz "7 = Fone, 3 = Mouse". O código (7, 3) é a ponte. No Power BI essa ponte se chama relacionamento e é desenhada na tela de Modelo, o terceiro ícone na barra vertical à esquerda (os ícones são, de cima para baixo: Relatório, Dados e Modelo).

Memorize o vocabulário das pontas da linha: o lado com o número 1 é a tabela que descreve itens únicos (Produtos), e o lado com o asterisco (que significa "muitos") é a tabela que se repete (Vendas), porque um mesmo produto aparece em muitas vendas. Isso é o relacionamento um-para-muitos, o mais comum de todos. A setinha no meio mostra a direção do filtro, normalmente apontando do lado 1 para o lado muitos.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Abra o arquivo .pbix do mês no projetor. Mostre a tabela de Vendas (clicando no segundo ícone da esquerda, Dados) e pergunte: "Onde está o NOME do produto aqui?". A turma vê só o código. Mostre então a tabela de Produtos, onde está o nome. Provoque: "Como fazer essas duas conversarem?". Distribua papel e peça que cada aluno desenhe os dois retângulos e uma linha ligando a coluna de código de um ao outro.

CONTEÚDO NOVO GUIADO (15 min): Clique no terceiro ícone da esquerda, Modelo. Mostre os quadradinhos das tabelas e arraste-os para separá-los. Agora crie a ligação: clique na coluna CodigoProduto da tabela Vendas, segure e arraste até a coluna CodigoProduto da tabela Produtos, e solte. Surge uma linha. Aponte os símbolos: o 1 no lado de Produtos e o asterisco no lado de Vendas. Dê dois cliques na linha para abrir a janela "Editar relacionamento" e mostre os campos Cardinalidade (Um para muitos) e Direção do filtro cruzado. Feche. Avise que ligar nas colunas erradas estraga tudo, por isso vamos testar.

MÃO NA MASSA (25 min): Cada aluno cria o próprio relacionamento arrastando a coluna de código de Vendas até a de Produtos. Depois faz o teste: volta ao primeiro ícone (Relatório), insere uma Tabela (visual de Tabela no painel Visualizações), arrasta o campo Nome (de Produtos) e o campo Valor (de Vendas) para dentro. Se os nomes aparecerem com totais coerentes, o relacionamento funciona. Em seguida, peça que provoquem um erro: apaguem a linha (clicar nela e Delete) e religuem na coluna ERRADA de propósito, vejam os números ficarem repetidos ou esquisitos, e então corrijam refazendo no lugar certo. Circule ajudando.

DESAFIO E COMPARTILHAR (10 min): Peça que cada aluno abra a janela "Editar relacionamento" e confirme em voz baixa: cardinalidade um-para-muitos, lado 1 em Produtos, lado muitos em Vendas. Dois ou três alunos mostram no projetor a tabela de teste funcionando e explicam como descobriram que estava certo.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de fazer um match. Diga que as duas tabelas são duas listas de amigos e o código é o número da camiseta: ligar é dizer "o número 7 é o João". Compare o lado dos "muitos" a uma turma de futebol em que muitas fotos diferentes mostram o mesmo jogador: o jogador é único (lado 1), mas aparece em várias fotos (lado muitos). Repita a regra de ouro: "ligo coluna igual com coluna igual, código com código, nome nunca com número". Reforce que testar não é perda de tempo, é como conferir o gabarito antes de entregar a prova.

## Erros comuns e como ajudar

O erro mais comum é arrastar a coluna errada, ligando código com nome ou com valor; mostre que só se liga colunas que guardam a MESMA informação. Outro é criar dois relacionamentos sem querer e deixar uma linha pontilhada (inativa); ensine a apagar a sobrando clicando nela e apertando Delete. Alguns alunos confundem os três ícones da esquerda e tentam criar a ligação na tela de Dados; lembre que é sempre o terceiro ícone, Modelo. Há quem inverta os lados e estranhe a cardinalidade; abra junto a janela Editar relacionamento e confirme qual tabela está no 1 e qual no asterisco. Por fim, se os números do teste vierem todos iguais ou gigantes, quase sempre é a coluna errada: apague a linha e refaça ligando código com código.`,
  exercicios: [
    {
      titulo: `Desenhando a ponte no papel`,
      tipo: `prática individual (planejamento)`,
      tempo: `7 minutos`,
      guiaProfessor: `Antes de qualquer clique, peça que cada aluno desenhe as duas tabelas como retângulos e liste 3 colunas em cada uma (incluindo a coluna de código nas duas). Reforce a regra de ligar coluna igual com coluna igual. Passe verificando se a linha desenhada conecta código com código, e não código com nome.`,
      atividade: `Em uma folha, desenhe dois retângulos: um chamado Vendas e outro chamado Produtos. Em cada um, escreva 3 colunas. Garanta que a coluna CodigoProduto apareça nos dois. Depois desenhe uma linha ligando a coluna CodigoProduto de uma tabela à CodigoProduto da outra.`,
      gabarito: `O desenho correto tem dois retângulos com a coluna CodigoProduto presente em ambos, e uma única linha ligando CodigoProduto de Vendas a CodigoProduto de Produtos. A linha NÃO deve ligar código a nome nem código a valor. Aceita-se qualquer nome de coluna desde que a ponte seja feita entre as duas colunas de mesma informação (o código).`,
    },
    {
      titulo: `Criando o relacionamento na tela de Modelo`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre novamente que a tela de Modelo é o terceiro ícone da barra esquerda. Acompanhe o arrastar: clicar na coluna de código de Vendas, segurar e soltar na coluna de código de Produtos. Verifique se cada aluno vê a linha surgir e os símbolos 1 e asterisco. Ajude quem soltar no lugar errado a refazer.`,
      atividade: `No Power BI, clique no terceiro ícone (Modelo). Arraste a coluna CodigoProduto da tabela Vendas até a coluna CodigoProduto da tabela Produtos e solte. Confirme que apareceu uma linha ligando as duas tabelas, com o número 1 de um lado e o asterisco do outro.`,
      gabarito: `Ao final existe uma linha sólida ligando CodigoProduto de Vendas a CodigoProduto de Produtos. O lado da tabela Produtos mostra o número 1 e o lado da tabela Vendas mostra o asterisco (muitos), caracterizando o relacionamento um-para-muitos. Não deve haver linhas pontilhadas ou duplicadas.`,
    },
    {
      titulo: `Testando se as tabelas conversam`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Leve a turma de volta ao primeiro ícone (Relatório). Mostre como inserir o visual Tabela pelo painel Visualizações e como arrastar campos de tabelas diferentes para dentro dele. O objetivo é ver o nome (de Produtos) ao lado do valor somado (de Vendas). Se aparecer só uma linha de total geral, o relacionamento provavelmente está errado.`,
      atividade: `Clique no primeiro ícone (Relatório). Insira um visual de Tabela. Arraste o campo Nome (da tabela Produtos) e o campo Valor (da tabela Vendas) para dentro do visual. Observe se cada nome de produto aparece com um total de vendas próprio.`,
      gabarito: `O visual de Tabela mostra uma linha para cada produto, com o nome vindo de Produtos e o total de Valor vindo de Vendas, e os totais são diferentes entre os produtos. Isso prova que o relacionamento funciona. Se todos os produtos mostrarem o mesmo número (ou só um total geral), o relacionamento está incorreto e precisa ser refeito.`,
    },
    {
      titulo: `Caça ao relacionamento quebrado (desafio em dupla)`,
      tipo: `desafio em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. O Aluno A apaga o relacionamento certo e cria um errado de propósito (por exemplo, ligando CodigoProduto a Nome ou a uma coluna que não combina). O Aluno B precisa descobrir, pelo visual de teste, que está errado e corrigir. Depois trocam de papel. Reforce que apagar é clicar na linha e apertar Delete, e que a correção é religar código com código.`,
      atividade: `Em dupla: o Aluno A apaga o relacionamento e cria um errado, ligando colunas que não combinam. O Aluno B usa o visual de Tabela para perceber que os números ficaram estranhos, depois abre a tela de Modelo, apaga a ligação errada e refaz ligando CodigoProduto com CodigoProduto. Em seguida troquem de papel.`,
      gabarito: `O Aluno B identifica o erro porque o visual mostra totais repetidos, vazios ou todos iguais. A correção esperada é: clicar na linha errada na tela de Modelo, apertar Delete, e arrastar CodigoProduto de Vendas até CodigoProduto de Produtos. Sucesso quando o visual de teste volta a mostrar cada produto com seu total próprio e a dupla repetiu o processo nos dois papéis.`,
    },
    {
      titulo: `Conferindo e explicando meu modelo`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma. Peça que cada aluno abra a janela Editar relacionamento (dois cliques na linha) e confirme cardinalidade e lados. Conduza a conversa pedindo que expliquem com palavras simples por que a ligação está certa. Anote no quadro os termos que surgirem (coluna-chave, um-para-muitos, direção). Feche conectando com a próxima aula, dos primeiros gráficos.`,
      atividade: `Abra a janela Editar relacionamento dando dois cliques na linha. Confirme que a cardinalidade é Um para muitos. Depois, em roda, explique para a turma em uma frase: qual coluna você usou como ponte e como você sabe que o relacionamento está correto.`,
      gabarito: `Na janela, a cardinalidade deve estar como Um para muitos, com Produtos no lado 1 e Vendas no lado muitos. Na fala, uma resposta válida cita a coluna-chave (CodigoProduto) como ponte e prova de correção pelo teste, por exemplo: "liguei pelo CodigoProduto e sei que está certo porque o visual mostra cada produto com seu próprio total de vendas". Aceita-se qualquer explicação que mencione a coluna comum e o teste do visual.`,
    },
  ],
};
