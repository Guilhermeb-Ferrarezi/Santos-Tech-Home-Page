import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando a planilha inteligente",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Iniciar o entregável do mês reunindo tudo o que foi aprendido em uma planilha real com várias abas que se conversam, combinando PROCX, SE aninhado e SOMASE para que os números se atualizem sozinhos.`,
  descricao: `Esta é a aula em que todas as fórmulas do mês deixam de viver separadas e passam a trabalhar juntas em um único projeto. Nas aulas anteriores o aluno conheceu o PROCX para buscar informações, o SE para a planilha tomar decisões e o SOMASE para somar com condição. Agora ele vai juntar essas três peças em uma planilha de verdade, com mais de uma aba, onde uma página alimenta a outra e o resultado muda automaticamente quando os dados mudam.

A grande ideia desta aula é a de planilha inteligente: aquela que não precisa ser refeita à mão toda vez. O aluno escolhe um tema próximo da realidade dele, como o controle de gastos da semana ou a planilha de uma lojinha de doces, e estrutura o trabalho em abas organizadas. Uma aba guarda os dados brutos, como cada compra ou cada venda; outra aba guarda as tabelas de apoio, como a lista de produtos e seus preços; e uma terceira aba mostra os resultados prontos, com totais e mensagens automáticas.

O foco aqui é a montagem da estrutura, não terminar tudo. O aluno aprende que uma planilha bem feita começa pela organização: nomear as abas, criar os títulos das colunas e só depois ligar as fórmulas que fazem as abas conversarem. O PROCX vai buscar o preço de um produto que está em outra aba; o SE aninhado vai classificar um gasto como "dentro do limite", "atenção" ou "estourou"; e o SOMASE vai somar todos os gastos de uma mesma categoria. Quando tudo se conecta, mudar um único número faz o painel inteiro reagir.

Ao final, cada aluno sai com o esqueleto da sua planilha inteligente pronto: as abas criadas, os dados de exemplo digitados e ao menos uma fórmula de cada tipo funcionando. Esse projeto será finalizado e apresentado na Aula 8. O professor não precisa ser especialista: basta seguir o passo a passo, valorizar a organização das abas e mostrar que uma planilha que se atualiza sozinha é o que separa o trabalho amador do profissional.`,
  materiais: [
    `Computadores com Excel avançado instalado e aberto (versão com a função PROCX disponível, como Microsoft 365 ou Excel 2021)`,
    `Projetor para o professor mostrar a tela, as abas da planilha e a barra de fórmulas`,
    `Arquivo de exemplo pronto chamado "Planilha Inteligente Modelo" com três abas: Lançamentos, Tabelas e Painel`,
    `Lista de produtos de exemplo (nome, categoria e preço) para a aba de apoio, impressa ou em arquivo`,
    `Folha de planejamento impressa com os campos: tema da planilha, quais abas terei, quais colunas em cada aba`,
    `Quadro ou slide com o "mapa das abas" mostrando como Lançamentos, Tabelas e Painel se conversam`,
  ],
  conceitosChave: [
    `Planilha inteligente — planilha que se atualiza sozinha quando os dados mudam, sem precisar refazer as contas à mão.`,
    `Aba (ou planilha/guia) — cada página dentro do mesmo arquivo do Excel, identificada na barra inferior; serve para separar dados, apoio e resultados.`,
    `Referência entre abas — forma de uma fórmula buscar um valor que está em outra aba, escrevendo o nome da aba e um ponto de exclamação antes da célula, como Tabelas!B2.`,
    `PROCX — função que procura um valor em uma lista e traz a informação correspondente de outra coluna, mesmo que esteja em outra aba.`,
    `SE aninhado — função SE colocada dentro de outra função SE, para a planilha decidir entre três ou mais respostas diferentes.`,
    `SOMASE — função que soma apenas os valores que atendem a uma condição, como somar só os gastos da categoria "Lazer".`,
    `Dados de apoio — tabelas fixas, como a lista de preços, que as fórmulas consultam para trazer informações automaticamente.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Excel avançado para conduzir esta aula. O segredo é a organização das abas. As três fórmulas já foram ensinadas nas aulas anteriores; hoje o aluno só vai juntá-las em um projeto. O ponto novo é fazer as abas conversarem. Para isso, basta saber que, ao escrever uma fórmula, se você clicar em uma célula de outra aba, o Excel escreve sozinho o nome dela com um ponto de exclamação, por exemplo Tabelas!B2. Deixe o arquivo "Planilha Inteligente Modelo" aberto no seu computador e teste cada fórmula uma vez antes da aula. Lembre que a aba fica na barra inferior; para renomear, dê dois cliques no nome dela.

## Passo a passo da aula

Aquecimento (10 min): Abra o projetor e pergunte: "Quem aqui já perdeu dinheiro porque não sabia quanto tinha gastado?". Conecte com o tema. Relembre as três fórmulas do mês mostrando o "mapa das abas": Lançamentos guarda o que aconteceu, Tabelas guarda os preços e categorias, e o Painel mostra os totais prontos.

Conteúdo novo guiado (15 min): Na sua tela, abra um arquivo novo. Crie três abas clicando no sinal de mais ao lado das guias, na barra inferior. Dê dois cliques em cada guia e renomeie para Lançamentos, Tabelas e Painel. Na aba Tabelas, monte uma lista pequena de produtos com as colunas Produto, Categoria e Preço. Na aba Lançamentos, crie os títulos Data, Produto, Categoria e Valor. Mostre o PROCX que busca o preço entre abas digitando na célula de valor: =PROCX(B2;Tabelas!A:A;Tabelas!C:C). Explique que ele procura o produto da célula B2 dentro da aba Tabelas e traz o preço. Depois, em uma coluna de aviso, digite o SE aninhado: =SE(D2>50;"Estourou";SE(D2>30;"Atenção";"Tranquilo")). No Painel, mostre o SOMASE: =SOMASE(Lançamentos!C:C;"Lazer";Lançamentos!D:D). Pressione Enter após cada fórmula e mostre o resultado mudando.

Mão na massa (25 min): Cada aluno escolhe o tema (controle de gastos ou lojinha) e cria as três abas com os títulos certos. Na aba Tabelas, digita de quatro a seis produtos com categoria e preço. Na aba Lançamentos, registra de três a cinco linhas de exemplo e usa o PROCX para buscar o preço e o SE aninhado para o aviso. No Painel, escreve ao menos um SOMASE somando uma categoria. Circule pela sala ajudando com os nomes das abas e com o ponto de exclamação entre aba e célula.

Desafio e compartilhar (10 min): Peça que cada aluno mude um valor na aba Lançamentos e observe o Painel se atualizar sozinho. Dois ou três voluntários mostram a planilha no projetor explicando qual número muda quando outro muda. Encerre dizendo que na próxima aula eles vão deixar o Painel bonito e apresentar a planilha pronta.

## Como explicar de forma clara

Use a imagem de uma loja de verdade: a aba Lançamentos é o caixa, onde tudo é anotado; a aba Tabelas é o estoque com a tabela de preços; e o Painel é o relatório que o dono lê no fim do dia. Diga que o ponto de exclamação é a "ponte" entre as abas: Tabelas!B2 quer dizer "vá até a aba Tabelas e pegue a célula B2". Reforce que ninguém digita o nome da aba à mão; basta clicar nela durante a fórmula. Mostre que a mágica acontece quando se muda um número e o resto reage sozinho, porque as fórmulas estão ligadas.

## Erros comuns e como ajudar

O erro mais comum é escrever o nome da aba errado ou com espaço, o que faz o Excel mostrar #REF! ou #NOME?. Oriente a sempre clicar na aba em vez de digitar. Outro erro é esquecer o ponto e vírgula entre as partes da fórmula; lembre que cada pedaço é separado por ponto e vírgula. No SE aninhado, muitos esquecem de fechar um dos parênteses; mostre que cada SE que abre precisa de um parêntese de fechamento. No SOMASE, o texto da categoria precisa estar entre aspas e escrito exatamente igual ao da planilha. Por fim, há quem queira fazer uma planilha grande demais; ajude a manter poucos produtos e poucas linhas, pois hoje é só a estrutura.`,
  exercicios: [
    {
      titulo: `Planejando as três abas`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Reúna a turma e peça que cada aluno escolha o tema da planilha (controle de gastos ou lojinha). Ajude a decidir, em voz alta, o que vai em cada aba. Anote no quadro o "mapa das abas" para servir de referência.`,
      atividade: `Escolha o tema da sua planilha inteligente: controle de gastos ou uma lojinha. Em seguida, diga em voz alta o que cada aba vai guardar: a aba de Lançamentos, a aba de Tabelas e a aba de Painel. Aponte no mapa das abas qual aba alimenta a outra.`,
      gabarito: `Resposta de exemplo: tema "Controle de gastos da semana". Lançamentos guarda cada compra (Data, Produto, Categoria, Valor); Tabelas guarda a lista de preços e categorias dos produtos; Painel mostra o total por categoria. A aba Tabelas alimenta os Lançamentos pelo PROCX, e os Lançamentos alimentam o Painel pelo SOMASE. Qualquer tema pequeno com três abas que se conversam está correto.`,
    },
    {
      titulo: `Criando e nomeando as abas`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a criação das abas. Confira se os nomes estão certos e sem espaços extras. Verifique se cada aba tem os títulos das colunas na primeira linha. Mostre de novo o sinal de mais na barra inferior e o duplo clique para renomear.`,
      atividade: `Abra um arquivo novo no Excel. Crie três abas usando o sinal de mais na barra inferior. Dê dois cliques em cada guia e renomeie para Lançamentos, Tabelas e Painel. Na aba Lançamentos, escreva na primeira linha os títulos Data, Produto, Categoria e Valor. Na aba Tabelas, escreva Produto, Categoria e Preço.`,
      gabarito: `O arquivo deve ter três abas na barra inferior com os nomes exatos: Lançamentos, Tabelas e Painel. Na aba Lançamentos, a linha 1 traz Data, Produto, Categoria e Valor. Na aba Tabelas, a linha 1 traz Produto, Categoria e Preço. A aba Painel pode ficar vazia por enquanto. Os nomes não devem ter espaços antes ou depois.`,
    },
    {
      titulo: `Ligando as abas com PROCX`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta é a parte central. Peça que primeiro preencham a aba Tabelas com alguns produtos. Mostre que, ao escrever o PROCX, basta clicar na aba Tabelas para o Excel colocar o nome dela com o ponto de exclamação. Acompanhe os pontos e vírgulas.`,
      atividade: `Na aba Tabelas, digite de quatro a seis produtos com sua categoria e preço. Na aba Lançamentos, registre três linhas de exemplo com Data, Produto e Categoria. Na coluna Valor, use o PROCX para buscar o preço do produto que está na aba Tabelas. Confirme que o preço aparece automaticamente.`,
      gabarito: `A fórmula esperada na célula de Valor (por exemplo, D2) é:

=PROCX(B2;Tabelas!A:A;Tabelas!C:C)

Ela procura o produto da célula B2 dentro da coluna de produtos da aba Tabelas e traz o preço correspondente da coluna C. Está correto quando, ao escolher um produto na aba Lançamentos, o preço certo aparece sozinho. Se mostrar erro, geralmente é nome da aba digitado à mão ou ponto e vírgula faltando.`,
    },
    {
      titulo: `Avisos automáticos com SE aninhado`,
      tipo: `Em dupla`,
      tempo: `11 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno cria a coluna de aviso e escreve o SE aninhado; depois conferem juntos os parênteses e os resultados. Lembre que cada SE que abre precisa fechar o parêntese e que o texto vai entre aspas. Circule confirmando que ambos têm a coluna funcionando.`,
      atividade: `Na aba Lançamentos, crie uma coluna chamada Aviso. Nela, escreva um SE aninhado que mostre "Estourou" quando o valor passar de 50, "Atenção" quando passar de 30, e "Tranquilo" nos demais casos. Em dupla, confira se os avisos mudam corretamente conforme o valor de cada linha.`,
      gabarito: `A fórmula esperada na coluna Aviso (por exemplo, E2) é:

=SE(D2>50;"Estourou";SE(D2>30;"Atenção";"Tranquilo"))

Está correto quando um valor de 60 mostra "Estourou", um valor de 40 mostra "Atenção" e um valor de 20 mostra "Tranquilo". O erro mais comum é esquecer de fechar um parêntese ou escrever o texto sem aspas. Os limites podem variar conforme o tema do aluno, desde que existam três respostas diferentes.`,
    },
    {
      titulo: `Projeto curto: o Painel que soma sozinho`,
      tipo: `Projeto curto e desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o item mais difícil e fecha o esqueleto da planilha. Peça que o aluno escreva o SOMASE no Painel e depois mude um valor nos Lançamentos para ver o total reagir. Ajude com o nome da categoria entre aspas, escrito igual ao da planilha. Valorize quem perceber a atualização automática.`,
      atividade: `Na aba Painel, escreva um SOMASE que some todos os valores de uma categoria, por exemplo "Lazer", buscando os dados na aba Lançamentos. Depois, mude um valor na aba Lançamentos e observe o total do Painel se atualizar sozinho. Anote em uma frase qual número muda quando outro muda.`,
      gabarito: `A fórmula esperada no Painel é:

=SOMASE(Lançamentos!C:C;"Lazer";Lançamentos!D:D)

Ela soma os valores da coluna D da aba Lançamentos apenas nas linhas em que a categoria, na coluna C, é "Lazer". Está correto quando, ao alterar um valor de Lazer nos Lançamentos, o total do Painel muda sozinho. A frase de observação deve mostrar que o aluno entendeu a ligação, por exemplo: "Quando eu aumento um gasto de Lazer, o total de Lazer no Painel sobe na mesma hora." A categoria varia conforme o projeto de cada aluno.`,
    },
  ],
};
