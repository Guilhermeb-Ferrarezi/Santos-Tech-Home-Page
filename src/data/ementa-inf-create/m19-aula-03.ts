import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "SE: a planilha que decide",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a usar a função SE para fazer a planilha tomar decisões automáticas, criando testes simples e dando o primeiro passo no SE aninhado.`,
  descricao: `Até agora, nas aulas anteriores, o aluno usou a planilha para buscar informações com o PROCV e o PROCX. Nesta aula, a planilha ganha um superpoder novo: a capacidade de decidir sozinha. Com a função SE, o Excel passa a olhar para um valor e responder de um jeito ou de outro, dependendo do que encontrar. É como ensinar a planilha a pensar: "se a nota for maior ou igual a 6, escreva Aprovado; senão, escreva Reprovado".

A lógica condicional é a base de toda a programação. Quando o aluno escreve uma função SE, ele está, na prática, escrevendo sua primeira linha de raciocínio de código de verdade: um teste, uma resposta para o "verdadeiro" e uma resposta para o "falso". Esse mesmo padrão aparece depois em VBA, em Apps Script e em qualquer linguagem que ele venha a aprender. Por isso, esta aula é um marco importante do ano.

Na prática, o aluno vai construir colunas que se preenchem sozinhas: marcar quem foi aprovado ou reprovado, decidir quem tem desconto ou não, e classificar valores em faixas. No fim da aula, ele dá o primeiro passo no SE aninhado, que é colocar um SE dentro de outro SE para conseguir mais de duas respostas possíveis, como Ótimo, Bom e Precisa Melhorar.

O objetivo não é decorar a fórmula, e sim entender o jeito de pensar: identificar a pergunta, definir a resposta para o sim e a resposta para o não. Quando o aluno domina isso, ele para de fazer contas na mão e deixa a planilha trabalhar por ele.`,
  materiais: [
    `Computadores com Excel avançado instalado e aberto (um por aluno)`,
    `Projetor ou tela grande para o professor demonstrar passo a passo`,
    `Arquivo de exemplo "notas-turma.xlsx" com colunas Nome, Nota 1, Nota 2 e Média já calculada`,
    `Arquivo de exemplo "loja-games.xlsx" com produtos e preços para o teste de desconto`,
    `Folha impressa ou slide com a estrutura da função SE (teste; valor se verdadeiro; valor se falso)`,
    `Conta Microsoft ativa em cada computador (caso a escola use Excel pela conta on-line)`,
  ],
  conceitosChave: [
    `Função SE — fórmula que faz um teste e devolve uma resposta para quando é verdadeiro e outra para quando é falso.`,
    `Teste lógico — a pergunta que a fórmula faz, que só pode ser respondida com verdadeiro ou falso. Exemplo: a nota é maior ou igual a 6?`,
    `Operadores de comparação — os sinais que comparam valores: maior que (>), menor que (<), maior ou igual (>=), menor ou igual (<=), igual (=) e diferente (<>).`,
    `Valor se verdadeiro — o que a célula mostra quando a resposta do teste é sim.`,
    `Valor se falso — o que a célula mostra quando a resposta do teste é não.`,
    `SE aninhado — um SE colocado dentro de outro SE, usado para ter mais de duas respostas possíveis, como Ótimo, Bom e Ruim.`,
    `Texto entre aspas — quando a resposta da fórmula é uma palavra, e não um número, ela precisa estar entre aspas, como "Aprovado".`,
  ],
  treinamento: `## O que o professor precisa saber

A função SE tem três partes, sempre nesta ordem e separadas por ponto e vírgula: =SE(teste; valor se verdadeiro; valor se falso). O teste é uma pergunta de sim ou não, como A2>=6. Se a resposta for sim, a célula mostra a segunda parte; se for não, mostra a terceira. Quando a resposta é uma palavra, ela vai entre aspas: "Aprovado". Quando é um número, não usa aspas. Você não precisa ser especialista: basta dominar este exemplo e os operadores de comparação (>, <, >=, <=, =, <>). Pratique a fórmula uma vez antes da aula no arquivo de exemplo e você estará pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o arquivo "notas-turma.xlsx" no projetor. Pergunte à turma: "como o Excel poderia escrever sozinho quem passou e quem não passou?". Deixe-os palpitar. Mostre que fazer isso na mão, aluno por aluno, é lento e cansativo, e que existe um jeito melhor.

Conteúdo novo guiado (15 min): clique numa célula vazia ao lado da Média (por exemplo, E2). Digite devagar, falando em voz alta: =SE(D2>=6;"Aprovado";"Reprovado"). Aperte Enter. Comemore o resultado. Explique cada parte apontando na tela: o D2>=6 é a pergunta, "Aprovado" é a resposta para o sim e "Reprovado" é a resposta para o não. Mostre o atalho de copiar a fórmula: clique na célula, leve o cursor ao quadradinho do canto inferior direito (a alça de preenchimento) e arraste para baixo, ou dê dois cliques nela. Veja a coluna inteira se preencher sozinha.

Mão na massa (25 min): peça que cada aluno reproduza a coluna Aprovado/Reprovado no próprio computador. Depois, abra com eles o arquivo "loja-games.xlsx" e proponha um segundo teste: =SE(B2>100;"Com desconto";"Sem desconto"). Circule pela sala. Quando a maioria terminar, mostre o SE aninhado na tela: =SE(D2>=8;"Ótimo";SE(D2>=6;"Bom";"Precisa melhorar")). Explique que, quando o primeiro teste dá não, o Excel passa para o segundo SE, e que cada parêntese que abre precisa de um que fecha.

Desafio e compartilhar (10 min): lance o desafio do SE aninhado para a turma e peça que dois ou três alunos mostrem a planilha deles no projetor, explicando a fórmula em voz alta.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "a planilha que pensa". Compare o SE com decisões do dia a dia: "se chover, levo guarda-chuva; senão, levo óculos de sol". A estrutura é exatamente a mesma. Reforce que o ponto e vírgula separa as três partes, como vírgulas separam itens de uma lista. Para o SE aninhado, use a imagem de um jogo de perguntas: se a primeira pergunta dá não, o jogo manda você para a próxima pergunta. Insista que palavras vão entre aspas e números não.

## Erros comuns e como ajudar

O erro mais frequente é esquecer as aspas no texto, o que faz aparecer #NOME?. Mostre que toda palavra-resposta precisa de aspas. Outro erro é trocar o ponto e vírgula por vírgula ou por outro sinal; peça que digitem ponto e vírgula entre as três partes. No SE aninhado, o problema costuma ser parênteses que não fecham: ensine a contar quantos abriram e garantir que o mesmo número feche no final. Por fim, alguns alunos colocam aspas em números (como "6"), o que atrapalha as comparações; lembre que número entra puro, sem aspas.`,
  exercicios: [
    {
      titulo: `Aprovado ou reprovado`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno está no arquivo "notas-turma.xlsx" e que a coluna Média está calculada. Mostre onde digitar e relembre a estrutura das três partes antes de soltá-los.`,
      atividade: `Na coluna ao lado da Média, escreva uma função SE que mostre "Aprovado" quando a média for maior ou igual a 6 e "Reprovado" quando for menor. Arraste a fórmula para preencher a turma inteira.`,
      gabarito: `=SE(D2>=6;"Aprovado";"Reprovado") e, em seguida, arrastar a alça de preenchimento para baixo até o último aluno da lista.`,
    },
    {
      titulo: `A loja de games com desconto`,
      tipo: `Desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Abra o arquivo "loja-games.xlsx". Explique a regra do desconto antes de começar e relembre que palavras vão entre aspas e o preço (número) entra puro.`,
      atividade: `Crie uma coluna que mostre "Com desconto" para todo produto que custe mais de 100 reais e "Sem desconto" para os demais.`,
      gabarito: `=SE(B2>100;"Com desconto";"Sem desconto"), supondo que o preço esteja na coluna B. Arrastar a fórmula para todos os produtos.`,
    },
    {
      titulo: `Decifrando a fórmula em dupla`,
      tipo: `Em dupla / roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas e projete uma fórmula pronta na tela. Peça que conversem e expliquem em voz alta cada parte antes de responder. Valorize o raciocínio, não só a resposta certa.`,
      atividade: `Olhem juntos a fórmula =SE(C2>=10;"Pode jogar";"Termine a lição") e expliquem: qual é a pergunta, qual é a resposta para o sim e qual é a resposta para o não?`,
      gabarito: `A pergunta (teste) é C2>=10, ou seja, "o valor da célula C2 é maior ou igual a 10?". A resposta para o sim é "Pode jogar" e a resposta para o não é "Termine a lição".`,
    },
    {
      titulo: `Três notas, três respostas`,
      tipo: `Prática com SE aninhado`,
      tempo: `9 minutos`,
      guiaProfessor: `Este é o primeiro contato com o SE aninhado. Mostre o modelo na tela e acompanhe de perto a contagem de parênteses, que é onde a maioria trava.`,
      atividade: `Crie uma coluna de classificação que mostre "Ótimo" para média maior ou igual a 8, "Bom" para média maior ou igual a 6 e "Precisa melhorar" para o restante.`,
      gabarito: `=SE(D2>=8;"Ótimo";SE(D2>=6;"Bom";"Precisa melhorar")). São dois parênteses abertos e dois fechados no final.`,
    },
    {
      titulo: `Minha planilha que decide`,
      tipo: `Projeto curto`,
      tempo: `8 minutos`,
      guiaProfessor: `Deixe o aluno inventar a própria regra, ligada ao mundo dele (jogos, mesada, esportes). Peça que descreva a regra em uma frase antes de escrever a fórmula. Ao final, convide alguns a apresentar.`,
      atividade: `Invente uma situação real com uma decisão (por exemplo: mesada com bônus, nível liberado num jogo, time da semana) e monte uma coluna com a função SE que resolva essa decisão sozinha.`,
      gabarito: `Resposta aberta. Exemplo válido: para liberar bônus quando a economia passa de 50 reais, =SE(B2>50;"Ganhou bônus";"Sem bônus"). Considere correto qualquer SE com teste lógico coerente, resposta para verdadeiro e resposta para falso, com palavras entre aspas.`,
    },
  ],
};
