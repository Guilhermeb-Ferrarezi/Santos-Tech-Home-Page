import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Somar e contar com condição",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a usar as funções SOMASE e CONT.SE para responder perguntas reais sobre uma planilha, como quanto foi vendido de cada categoria e quantas vezes algo aconteceu, montando um mini painel de totais inteligentes.`,
  descricao: `Nas aulas anteriores deste mês o aluno aprendeu a procurar informações com PROCV e PROCX e a fazer a planilha decidir sozinha com a função SE. Agora damos o próximo passo: somar e contar, mas só aquilo que interessa. Imagine uma lista enorme de vendas de uma lojinha da escola. Você não quer só o total geral; você quer saber quanto vendeu de salgados, quanto vendeu de bebidas e quantas vezes alguém comprou um chocolate. Para isso existem duas funções poderosas: SOMASE e CONT.SE.

A função SOMASE soma apenas os números que obedecem a uma condição. Em vez de somar tudo, ela olha uma coluna, encontra as linhas que combinam com o que você pediu (por exemplo, a categoria Bebida) e soma só os valores dessas linhas. Já a função CONT.SE faz uma contagem: ela não soma valores, ela conta quantas vezes algo aparece. Quantas vendas de Salgado existem? Quantos alunos tiraram nota acima de 7? CONT.SE responde na hora.

Estas duas funções transformam uma tabela cheia de linhas em respostas curtas e diretas. Elas são a base de qualquer painel de dados: uma caixinha que mostra o total de cada categoria, outra que mostra quantas vezes algo aconteceu. Quando o aluno junta várias dessas caixinhas, ele cria um mini painel de totais inteligentes, o coração da planilha inteligente que será o entregável do mês.

Nesta aula o aluno também combina o que já aprendeu: usa a função SE aninhada para classificar resultados (por exemplo, marcar como Meta batida ou Abaixo da meta) e depois usa CONT.SE para contar quantos itens caíram em cada classificação. É a hora em que as peças começam a se encaixar: procurar, decidir, somar e contar trabalhando juntas na mesma planilha.`,
  materiais: [
    `Computadores com o Excel avançado instalado e aberto, um por aluno, todos ligados antes da aula começar`,
    `Projetor ou TV para o professor mostrar a tela e digitar as fórmulas junto com a turma`,
    `Arquivo de exemplo Vendas-da-lojinha.xlsx com colunas de Produto, Categoria, Quantidade e Valor (pelo menos 15 linhas)`,
    `Arquivo de exemplo Notas-da-turma.xlsx com nomes de alunos e notas, para praticar a contagem com condição`,
    `Pasta compartilhada da escola com os dois arquivos de exemplo para os alunos baixarem no início da aula`,
    `Folha impressa ou slide com o resumo das fórmulas SOMASE e CONT.SE para consulta rápida`,
    `Conta Microsoft de cada aluno (se a escola usar o Excel via login) já configurada na máquina`,
  ],
  conceitosChave: [
    `SOMASE — função que soma apenas os números que obedecem a uma condição, em vez de somar a coluna inteira.`,
    `CONT.SE — função que conta quantas vezes um item ou condição aparece em um intervalo, sem somar valores.`,
    `Intervalo — o conjunto de células onde a função vai procurar, escrito como B2:B16, por exemplo.`,
    `Critério — a condição que a função usa para decidir o que entra na conta, como a palavra Bebida ou o sinal maior que 7.`,
    `Intervalo_soma — na função SOMASE, a coluna de onde os valores serão somados quando a condição for verdadeira.`,
    `Painel de totais — um conjunto de células com resultados resumidos que respondem perguntas de forma rápida e visual.`,
    `SE aninhado — uma função SE dentro de outra, usada para classificar resultados em mais de duas categorias.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Excel para dar esta aula; basta entender duas funções e treinar uma vez em casa. A SOMASE soma com condição e a CONT.SE conta com condição. A estrutura da SOMASE é: =SOMASE(intervalo de procura ; critério ; intervalo que será somado). A estrutura da CONT.SE é mais curta: =CONT.SE(intervalo ; critério). O critério pode ser uma palavra entre aspas, como "Bebida", uma referência a uma célula, como E2, ou uma comparação entre aspas, como ">7". Atenção a um detalhe brasileiro: no Excel em português usamos ponto e vírgula para separar os argumentos, não vírgula. Abra os dois arquivos de exemplo e teste cada fórmula antes da aula para chegar seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula passada sobre a função SE. Pergunte à turma: e se a gente quisesse somar só as vendas de bebida, sem somar o resto? Abra o arquivo Vendas-da-lojinha.xlsx no projetor e mostre a coluna Categoria. Diga que hoje a planilha vai aprender a somar e a contar escolhendo o que entra na conta.

Conteúdo novo guiado (15 min): no projetor, clique em uma célula vazia, por exemplo G2. Digite =SOMASE(C2:C16;"Bebida";D2:D16) e pressione Enter, explicando em voz alta: C2:C16 é onde ele procura, "Bebida" é o que ele quer achar e D2:D16 é a coluna de valores que ele soma. Mostre o resultado. Em seguida, em G3, digite =CONT.SE(C2:C16;"Salgado") e pressione Enter, explicando que aqui não há terceira parte porque ele só conta, não soma. Mostre que apareceu o número de vendas de salgado. Para fechar, faça um critério de comparação no arquivo de notas: =CONT.SE(B2:B11;">7") para contar quantos alunos passaram de 7.

Mão na massa (25 min): cada aluno repete as três fórmulas no próprio computador, com os mesmos arquivos. Peça que montem um mini painel: em uma coluna escrevem o nome da categoria e ao lado a SOMASE correspondente. Circule pela sala. Quando alguém terminar, proponha que troquem o critério "Bebida" por uma referência de célula, como F2, para o painel atualizar sozinho ao mudar a palavra. Lembre sempre do ponto e vírgula.

Desafio e compartilhar (10 min): peça que cada aluno crie uma caixinha que combine SE aninhado e CONT.SE, por exemplo classificar cada venda como Alta ou Baixa e depois contar quantas foram Altas. Convide dois ou três alunos a mostrarem o painel na tela e a lerem a resposta que a planilha deu.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de um filtro de lanchonete. Diga: a SOMASE é como um caixa que separa só o dinheiro das bebidas e soma; a CONT.SE é como um porteiro que conta quantas pessoas de camiseta azul entraram. Repita sempre a ordem da SOMASE: onde procurar, o que procurar e o que somar. Para a CONT.SE, lembre que ela só conta cabeças, não soma valores. Mostre que as aspas servem para palavras e comparações, e que o ponto e vírgula é o sinal que separa cada parte da fórmula, como vírgulas em uma lista de compras.

## Erros comuns e como ajudar

O erro mais comum é usar vírgula no lugar de ponto e vírgula; o Excel reclama na hora. Outro é trocar a ordem na SOMASE e somar a coluna errada; reforce a sequência procurar, achar, somar. Muitos esquecem as aspas no critério de texto, então a fórmula não acha nada e retorna zero; mostre "Bebida" com aspas. Nas comparações, o sinal e o número ficam juntos dentro das aspas, como ">7", e não 7 sozinho. Se o resultado vier zero quando deveria ter valor, peça para conferir se o texto do critério está escrito igual ao da tabela, sem espaços a mais. E lembre que CONT.SE tem só dois argumentos: quem coloca um terceiro recebe erro.`,
  exercicios: [
    {
      titulo: `Some só as bebidas`,
      tipo: `Prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Confirme que cada aluno abriu o arquivo Vendas-da-lojinha.xlsx e localizou as colunas Categoria e Valor. Reforce o ponto e vírgula e as aspas no critério de texto.`,
      atividade: `Em uma célula vazia, escreva =SOMASE(C2:C16;"Bebida";D2:D16) para somar o valor de todas as vendas de bebida. Anote o resultado.`,
      gabarito: `A fórmula retorna a soma apenas dos valores das linhas cuja categoria é Bebida. Por exemplo, se houver bebidas de R$ 5, R$ 8 e R$ 7, o resultado é 20. O acerto é o aluno ter usado ponto e vírgula, aspas em "Bebida" e a coluna de valores no terceiro argumento, obtendo um total menor que o total geral da planilha.`,
    },
    {
      titulo: `Conte os salgados`,
      tipo: `Desafio individual`,
      tempo: `6 min`,
      guiaProfessor: `Lembre que CONT.SE tem só dois argumentos. Verifique se o aluno não acrescentou uma coluna de valores por engano. Mostre que aqui contamos quantas vezes, não quanto dinheiro.`,
      atividade: `Em uma célula vazia, escreva =CONT.SE(C2:C16;"Salgado") para contar quantas vendas de salgado existem na planilha. Depois mude o critério para outra categoria e veja o número mudar.`,
      gabarito: `A fórmula devolve a quantidade de linhas em que a categoria é Salgado. Se houver 6 vendas de salgado, o resultado é 6. Ao trocar "Salgado" por "Bebida", o número muda para a contagem de bebidas. O acerto é usar apenas dois argumentos e obter um número inteiro de ocorrências, não uma soma de valores.`,
    },
    {
      titulo: `Painel de categorias`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Peça que escrevam os nomes das categorias em uma coluna e ao lado uma SOMASE para cada uma. Incentive a usar referência de célula como critério (a célula com o nome da categoria) para o painel atualizar sozinho. Circule conferindo os totais.`,
      atividade: `Em dupla, montem um mini painel: na coluna F escrevam as categorias (Bebida, Salgado, Doce) e na coluna G usem =SOMASE(C2:C16;F2;D2:D16) e arrastem para baixo. Confiram se a soma de todos os totais bate com o total geral.`,
      gabarito: `Cada linha do painel mostra o total somado daquela categoria, usando a célula ao lado como critério. A soma dos totais de Bebida, Salgado e Doce deve ser igual ao total geral obtido com =SOMA(D2:D16). Por exemplo, se Bebida deu 40, Salgado deu 75 e Doce deu 25, o total geral é 140. O acerto é o painel atualizar ao mudar o texto em F e a soma das partes fechar com o todo.`,
    },
    {
      titulo: `Quantos passaram de 7?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Abra o arquivo Notas-da-turma.xlsx. Conduza a discussão sobre critérios de comparação. Pergunte como a escola usaria isso de verdade. Mostre que o sinal e o número ficam juntos dentro das aspas.`,
      atividade: `Usando o arquivo de notas, escreva =CONT.SE(B2:B11;">7") para contar quantos alunos tiraram acima de 7. Depois a turma conversa: como a coordenação poderia usar essa contagem? E para contar quem ficou abaixo de 5?`,
      gabarito: `A fórmula conta os alunos com nota maior que 7; se 8 alunos passaram de 7, o resultado é 8. Para contar quem ficou abaixo de 5, usa-se =CONT.SE(B2:B11;"<5"). Não há uma única resposta para o debate, mas espera-se que a turma perceba usos reais, como saber quantos alunos precisam de reforço. O professor valida quando os alunos escrevem o critério de comparação corretamente entre aspas.`,
    },
    {
      titulo: `Painel inteligente da lojinha`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Tarefa final que junta SE aninhado, SOMASE e CONT.SE. Oriente a sequência: primeiro classificar cada venda, depois contar as classificações, depois somar por categoria. Avalie se as fórmulas usam os intervalos certos e se o painel responde às três perguntas.`,
      atividade: `Crie uma coluna E com =SE(D2>=20;"Alta";SE(D2>=10;"Média";"Baixa")) e arraste para todas as vendas. Depois monte um painel com três caixinhas: 1) total vendido de cada categoria com SOMASE; 2) quantas vendas foram classificadas como Alta com =CONT.SE(E2:E16;"Alta"); 3) quantas vendas de Doce existem com CONT.SE. Escreva ao lado uma frase explicando o que o painel revelou.`,
      gabarito: `O painel final traz três respostas corretas. A coluna E classifica cada venda em Alta, Média ou Baixa conforme o valor: 25 vira Alta, 12 vira Média, 8 vira Baixa. A CONT.SE de "Alta" conta quantas linhas ficaram Altas; a SOMASE traz o total por categoria; a CONT.SE de Doce conta as vendas de doce. Por exemplo, 4 vendas Altas, total de Bebida igual a 40 e 5 vendas de Doce. O acerto é o aluno ter combinado as três funções, com intervalos corretos e a frase final ligada aos números reais da planilha, mostrando que procurar, decidir, somar e contar funcionam juntos.`,
    },
  ],
};
