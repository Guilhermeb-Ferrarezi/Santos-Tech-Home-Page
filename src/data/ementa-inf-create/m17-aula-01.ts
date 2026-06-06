import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "PROCX: o detetive das planilhas",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Usar a função PROCX no Google Planilhas para buscar automaticamente uma informação dentro de uma tabela, a partir de um valor procurado.`,
  descricao: `Nesta primeira aula do mês, o aluno conhece a função mais útil de quem trabalha com dados: o PROCX. A ideia central é simples e poderosa. Imagine uma lista enorme de produtos ou de alunos. Em vez de descer a tela com o olho procurando uma linha, você digita o que quer encontrar e a planilha traz a resposta sozinha, na hora. Por isso o apelido da aula: o PROCX é o detetive das planilhas. Você dá uma pista (um nome, um código) e ele encontra o resto da ficha.

O foco do dia é entender o raciocínio do PROCX em três peças: o valor procurado (a pista que você dá), a tabela onde ele vai procurar (o intervalo de células) e a coluna de retorno (a informação que você quer de volta). Quando o aluno entende essas três peças, ele percebe que toda busca segue a mesma lógica, mude o que mudar. Não é decorar uma fórmula gigante: é montar uma frase com três partes na ordem certa.

A aula é totalmente prática. O aluno vai abrir uma planilha pronta com uma lista de produtos (nome, preço e categoria) e montar a primeira busca passo a passo, junto com o professor. Depois faz buscas sozinho: digita o nome de um produto numa célula e vê o preço aparecer automaticamente em outra. Esse efeito de mágica controlada é o gancho que prende a atenção dos adolescentes e mostra que planilha não é só uma tabela bonita, é uma ferramenta que responde perguntas.

Importante situar o aluno: o PROCX é a versão moderna e mais fácil do antigo PROCV. Não é preciso falar de PROCV nesta turma; basta saber que o PROCX é o jeito atual e mais simples de buscar dados. Esta aula abre o mês de planilhas avançadas e prepara o terreno para a aula seguinte, em que a função SE entra para tomar decisões com base no que o PROCX encontrou.`,
  materiais: [
    `Computadores com navegador e Google Planilhas aberto, cada aluno logado na conta Google da escola`,
    `Projetor ou tela grande para o professor demonstrar cada clique`,
    `Arquivo de exemplo "Loja Santos Tech" com uma aba de produtos (colunas Nome, Preço e Categoria) e cerca de 12 linhas preenchidas`,
    `Arquivo de exemplo "Lista da Turma" com colunas Nome, Idade e Time favorito, para a variação do exercício`,
    `Conta Google ativa para cada aluno (login no Google Planilhas)`,
    `Folha impressa ou slide com a sintaxe do PROCX e um exemplo resolvido, para consulta rápida`,
    `Acesso à internet estável (o Google Planilhas funciona online)`,
  ],
  conceitosChave: [
    `PROCX — função que procura um valor numa tabela e devolve uma informação relacionada a ele, automaticamente.`,
    `Valor procurado — a pista que você fornece à busca, por exemplo o nome de um produto ou de um aluno.`,
    `Tabela (intervalo) — o conjunto de células onde o PROCX vai procurar, escrito como um intervalo, por exemplo A2:C13.`,
    `Coluna de retorno — a coluna que contém a resposta que você quer de volta, por exemplo a coluna de preços.`,
    `Célula — cada quadradinho da planilha, identificado por uma letra de coluna e um número de linha, como B5.`,
    `Fórmula — texto que começa com o sinal de igual e faz a planilha calcular ou buscar algo, como =PROCX(...).`,
    `Referência — o endereço de uma célula ou intervalo usado dentro da fórmula, por exemplo E2 ou A2:A13.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em planilhas para dar esta aula. Precisa dominar uma única função: o PROCX. A sintaxe básica é =PROCX(valor_procurado; intervalo_de_busca; intervalo_de_retorno). Em palavras: "procure ISTO, nesta COLUNA, e me traga a resposta DESTA outra coluna". No Google Planilhas use ponto e vírgula para separar as partes (em alguns casos é vírgula; se der erro, troque um pelo outro).

Antes da aula, abra o arquivo "Loja Santos Tech". Em uma célula vazia, por exemplo E2, digite o nome de um produto que exista na lista. Na célula F2 escreva =PROCX(E2; A2:A13; B2:B13) e veja o preço aparecer. Faça esse teste uma vez e você já estará seguro. Guarde a frase-âncora para repetir aos alunos: "valor procurado, onde procurar, o que trazer de volta".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Pergunte: "Se eu tivesse uma lista com mil produtos, como vocês achariam o preço de um deles sem rolar a tela?" Ouça as ideias. Abra a planilha no projetor e mostre a lista. Diga que hoje a planilha vai responder sozinha, como um detetive.

Conteúdo novo guiado (15 min). No Google Planilhas, mostre a aba de produtos. Explique as colunas: A é o Nome, B é o Preço, C é a Categoria. Clique na célula E1 e escreva o título "Produto buscado"; em F1 escreva "Preço". Clique em E2 e digite o nome exato de um produto. Clique em F2 e digite, devagar e em voz alta, =PROCX(E2; A2:A13; B2:B13). Aperte Enter. O preço aparece. Aponte cada parte da fórmula: E2 é a pista, A2:A13 é onde procurar, B2:B13 é o que trazer. Troque o nome em E2 e mostre o preço mudando sozinho.

Mão na massa (25 min). Cada aluno abre a planilha "Loja Santos Tech" e refaz a busca de preço com você como apoio. Depois, sozinho, cria uma segunda busca que devolva a Categoria do produto (trocando o intervalo de retorno para C2:C13). Circule pela sala, sente ao lado de quem travar e peça para lerem a fórmula em voz alta nas três partes.

Desafio e compartilhar (10 min). Lance o desafio: "Abra a Lista da Turma e monte um PROCX que descubra o time favorito de um colega pelo nome." Peça que dois ou três alunos mostrem no projetor e expliquem qual foi o valor procurado, o intervalo e a coluna de retorno.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do detetive o tempo todo. O valor procurado é a pista; a tabela é a lista de suspeitos; a coluna de retorno é a ficha que o detetive entrega. Outra comparação que funciona: é como procurar um contato no celular. Você digita o nome (valor procurado), o celular varre a agenda (tabela) e mostra o telefone (coluna de retorno).

Insista na ordem das três partes, pois é o que mais confunde. Repita como um mantra: "o que procuro, onde procuro, o que quero de volta". Mostre sempre o resultado mudando ao trocar a pista; ver a planilha reagir convence mais do que qualquer explicação.

Evite termos secos. Em vez de "argumento da função", diga "a parte da fórmula". Em vez de "intervalo", diga "o pedaço da tabela", apontando com o mouse no projetor.

## Erros comuns e como ajudar

O erro mais frequente é esquecer o sinal de igual no começo: sem ele, a planilha mostra o texto e não calcula. Peça para conferir se a fórmula começa com o igual. Outro erro é digitar o nome do produto diferente do que está na lista (com acento a mais, espaço no fim): o PROCX devolve um erro porque não acha a pista exata. Mostre como copiar o nome da própria lista para garantir.

O terceiro erro é trocar a ordem das três partes ou apontar o intervalo errado, trazendo a informação de outra coluna. Peça para ler a fórmula em voz alta nas três partes e conferir cada intervalo. Por fim, se aparecer um erro estranho, muitas vezes basta trocar o ponto e vírgula por vírgula (ou o contrário) para a sintaxe ficar correta.`,
  exercicios: [
    {
      titulo: `Primeira busca de preço`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que todos abriram a planilha "Loja Santos Tech". O foco é só o preço, repetindo a busca feita na demonstração. Circule e confira se cada fórmula começa com o sinal de igual e se os intervalos batem com a lista.`,
      atividade: `Na célula E2, digite o nome de um produto que exista na lista. Na célula F2, escreva a fórmula =PROCX(E2; A2:A13; B2:B13) e aperte Enter. Confira se o preço que apareceu é o mesmo da lista.`,
      gabarito: `A fórmula correta é =PROCX(E2; A2:A13; B2:B13). O aluno digita um produto válido em E2 e o preço correspondente aparece em F2, igual ao da coluna B. Acerto quando o valor exibido bate com o preço daquele produto na lista. Se aparecer erro, normalmente é nome digitado diferente ou ponto e vírgula que precisa virar vírgula.`,
    },
    {
      titulo: `Trazendo a categoria`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Agora o aluno muda apenas o intervalo de retorno, de preço para categoria. Reforce que só a terceira parte da fórmula muda. Peça que leiam em voz alta as três partes antes de apertar Enter.`,
      atividade: `Em uma célula vazia, por exemplo G2, escreva uma fórmula que descubra a Categoria do mesmo produto buscado em E2. Use o PROCX trocando o intervalo de retorno para a coluna de categorias (C2:C13).`,
      gabarito: `A fórmula esperada é =PROCX(E2; A2:A13; C2:C13). O valor procurado e o intervalo de busca continuam iguais; só o intervalo de retorno muda de B2:B13 para C2:C13. Acerto quando a categoria exibida corresponde ao produto que está em E2. Erro comum: deixar B2:B13 e continuar trazendo o preço.`,
    },
    {
      titulo: `O detetive da turma`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Troque o arquivo para a "Lista da Turma". O aluno monta um PROCX do zero, sem copiar a fórmula anterior. O desafio é identificar sozinho qual coluna é o valor procurado e qual é a de retorno.`,
      atividade: `Abra a planilha "Lista da Turma" (colunas Nome, Idade e Time favorito). Em uma célula, digite o nome de um colega da lista e, ao lado, monte um PROCX que descubra o Time favorito desse colega.`,
      gabarito: `Supondo Nome em A2:A11, Idade em B2:B11 e Time favorito em C2:C11, e o nome digitado em E2, a fórmula correta é =PROCX(E2; A2:A11; C2:C11). Acerto quando o time exibido corresponde ao colega digitado. O aluno deve identificar que o Nome é o valor procurado e o Time favorito é a coluna de retorno.`,
    },
    {
      titulo: `Leitura cruzada em dupla`,
      tipo: `Em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas. Um aluno escreve uma fórmula PROCX e o colega lê em voz alta as três partes, explicando o que cada uma faz. Depois trocam os papéis. Incentive correção gentil quando a ordem estiver errada.`,
      atividade: `Em dupla, o aluno A monta um PROCX na planilha de produtos. O aluno B aponta na tela e diz em voz alta: qual é o valor procurado, qual é o intervalo de busca e qual é a coluna de retorno. Em seguida, troquem de papel.`,
      gabarito: `Para =PROCX(E2; A2:A13; B2:B13), a leitura correta é: valor procurado = E2 (o produto buscado), intervalo de busca = A2:A13 (a coluna de nomes), coluna de retorno = B2:B13 (os preços). Acerto quando os dois alunos identificam as três partes corretamente e percebem qualquer troca de ordem ou intervalo errado.`,
    },
    {
      titulo: `Mini painel de consulta`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Fechamento e primeira peça do entregável do mês. O aluno monta um pequeno painel: uma célula para digitar o produto e duas células com PROCX trazendo preço e categoria juntos. Lembre de testar trocando o produto e vendo tudo atualizar.`,
      atividade: `Na planilha de produtos, crie um painel: na célula E2 digite o nome do produto; em F2 use PROCX para mostrar o preço; em G2 use PROCX para mostrar a categoria. Teste trocando o produto em E2 e veja preço e categoria mudarem juntos.`,
      gabarito: `Painel correto: E2 com o nome do produto; F2 com =PROCX(E2; A2:A13; B2:B13); G2 com =PROCX(E2; A2:A13; C2:C13). Acerto quando, ao trocar o produto em E2, as células F2 e G2 atualizam automaticamente para o preço e a categoria certos. O painel deve estar salvo para uso nas próximas aulas.`,
    },
  ],
};
