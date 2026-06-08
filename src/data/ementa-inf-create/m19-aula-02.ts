import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "PROCX e o fim dos erros",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Dominar a função PROCX para buscar dados em qualquer direção e tratar o erro #N/D com mensagens amigáveis usando o argumento "se não encontrado".`,
  descricao: `Na aula passada o aluno conheceu o PROCV, o detetive que procura uma informação numa tabela e devolve um dado relacionado. Hoje ele conhece o irmão mais novo e mais esperto: o PROCX. Essa função moderna faz tudo o que o PROCV faz, mas é mais simples de escrever e resolve dois problemas clássicos que sempre travam os iniciantes.

O primeiro problema é a direção da busca. O PROCV só consegue olhar para a direita: a coluna onde ele procura precisa estar antes da coluna que ele devolve. O PROCX não tem essa limitação. Ele aceita um intervalo para procurar e outro intervalo para devolver, e esses intervalos podem estar em qualquer ordem. Quer buscar para a esquerda? O PROCX faz sem reclamar.

O segundo problema é o erro #N/D, que aparece em vermelho quando a função não encontra o que procura. No PROCV, lidar com isso exige envolver tudo num SEERRO, o que assusta quem está começando. No PROCX existe um argumento dedicado, o "se não encontrado", onde o aluno digita uma mensagem amigável como "Não encontrado" e o erro nunca mais aparece. A planilha fica limpa e profissional.

Nesta aula o aluno escreve fórmulas PROCX do zero, busca dados para os dois lados, troca a mensagem de erro por um texto gentil e, no desafio final, compara PROCX e PROCV resolvendo o mesmo cruzamento de dados com as duas funções para sentir na prática por que o PROCX virou o novo favorito.`,
  materiais: [
    `Computadores com Excel avançado instalado e aberto (Microsoft 365 ou Excel 2021, que têm a função PROCX)`,
    `Projetor ou tela para o professor demonstrar as fórmulas passo a passo`,
    `Arquivo de exemplo "loja-games.xlsx" com duas abas: uma lista de produtos (código, nome, preço, estoque) e uma aba de consulta`,
    `Arquivo de exemplo "turma.xlsx" com nomes, número de matrícula e notas para o desafio de comparação`,
    `Conta Microsoft de cada aluno para salvar o arquivo no OneDrive ao final`,
    `Folha impressa de apoio com a sintaxe do PROCX (cola rápida para os alunos consultarem)`,
  ],
  conceitosChave: [
    `PROCX — função moderna do Excel que procura um valor numa lista e devolve o dado correspondente de outra lista, em qualquer direção.`,
    `Valor procurado — o dado que você quer encontrar, por exemplo o código de um produto ou o nome de um aluno.`,
    `Intervalo de pesquisa — a coluna onde o PROCX vai procurar o valor procurado.`,
    `Intervalo de retorno — a coluna de onde o PROCX vai trazer a resposta depois de achar o valor.`,
    `Se não encontrado — o argumento do PROCX onde você escreve a mensagem amigável que aparece quando o valor não existe, evitando o erro #N/D.`,
    `Erro #N/D — aviso em vermelho que significa "não disponível", ou seja, a função procurou e não achou o valor.`,
    `#N/D — sigla de "não disponível"; é o erro que o PROCX substitui por um texto gentil.`,
  ],
  treinamento: `## O que o professor precisa saber

O PROCX (em inglês XLOOKUP) só existe no Microsoft 365 e no Excel 2021 ou mais novo. Antes da aula, abra o Excel e digite =PROCX( numa célula para confirmar que ele aparece na lista. Se a função não existir, o computador precisa ser atualizado. A sintaxe completa é: =PROCX(valor procurado; intervalo de pesquisa; intervalo de retorno; [se não encontrado]). Os três primeiros argumentos são obrigatórios; o quarto, entre colchetes, é opcional e é a estrela da aula. Lembre que, no Excel em português do Brasil, o separador entre argumentos é o ponto e vírgula.

A grande diferença para o PROCV é que aqui você seleciona duas colunas separadas, uma para procurar e outra para devolver, em vez de uma tabela inteira e um número de coluna. Por isso o PROCX busca para qualquer lado: ele não se importa com a ordem das colunas.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o arquivo "loja-games.xlsx" no projetor. Relembre o PROCV da aula 1 fazendo uma busca simples. Depois pergunte: "E se o nome estivesse antes do código? O PROCV conseguiria buscar para a esquerda?" Deixe a turma perceber a limitação. É o gancho perfeito para o PROCX.

Conteúdo novo guiado (15 min): clique numa célula vazia da aba de consulta. Digite =PROCX( e mostre a dica amarela que o Excel exibe. Construa junto com a turma: clique na célula com o código procurado (valor procurado), ponto e vírgula, selecione a coluna dos códigos arrastando do topo até embaixo (intervalo de pesquisa), ponto e vírgula, selecione a coluna dos nomes (intervalo de retorno), feche o parêntese e aperte Enter. Pronto, achou o produto. Agora mostre a mágica: busque um nome e devolva o código, ou seja, para a esquerda. Por fim, force um erro digitando um código que não existe: aparece o #N/D. Edite a fórmula, adicione ponto e vírgula antes de fechar e escreva "Não encontrado" entre aspas. O erro some.

Mão na massa (25 min): cada aluno abre o arquivo no seu computador e cria três fórmulas: buscar o preço pelo código, buscar o estoque pelo nome e buscar o código pelo nome (busca para a esquerda). Em todas, peça que incluam o argumento se não encontrado com a mensagem "Produto não localizado". Circule pela sala conferindo o ponto e vírgula e as aspas.

Desafio e compartilhar (10 min): proponha o desafio de comparação com o arquivo "turma.xlsx" e peça que dois ou três alunos mostrem a tela explicando por que o PROCX foi mais fácil.

## Como explicar de forma clara

Use a imagem de duas filas paralelas. Uma fila tem os códigos, a outra tem os nomes, lado a lado. O PROCX procura na primeira fila e, quando acha, olha para o lado e pega quem está na mesma posição na segunda fila. Como são duas filas independentes, tanto faz qual está à esquerda ou à direita. Para o argumento se não encontrado, diga que é o "plano B" da fórmula: se ela não achar nada, em vez de gritar #N/D, ela fala educadamente a frase que você escreveu.

## Erros comuns e como ajudar

O erro mais frequente é usar vírgula no lugar do ponto e vírgula; mostre que no Excel em português é sempre ponto e vírgula. Outro é esquecer as aspas na mensagem do se não encontrado, o que gera erro de fórmula: lembre que todo texto digitado numa fórmula vai entre aspas. Alguns alunos selecionam intervalos de tamanhos diferentes (uma coluna com 10 itens e outra com 9) e recebem #VALOR; oriente a arrastar exatamente as mesmas linhas. Por fim, se o PROCX não aparecer ao digitar, o Excel está desatualizado e a turma deve usar a máquina reserva.`,
  exercicios: [
    {
      titulo: `Primeiro PROCX: encontre o preço`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno esteja na aba de consulta do arquivo "loja-games.xlsx". Verifique o uso do ponto e vírgula. Esta é a fórmula base; todos precisam acertar antes de avançar.`,
      atividade: `Na célula indicada, escreva uma fórmula PROCX que procure o código digitado na célula B2 e devolva o preço do produto correspondente.`,
      gabarito: `=PROCX(B2;Produtos!A2:A20;Produtos!C2:C20). O B2 é o valor procurado, a coluna A são os códigos (intervalo de pesquisa) e a coluna C são os preços (intervalo de retorno). Os nomes de coluna podem variar conforme o arquivo do professor.`,
    },
    {
      titulo: `Buscando para a esquerda`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Aqui o aluno comprova o que o PROCV não faz. Reforce que basta inverter os intervalos: procurar na coluna do nome e devolver da coluna do código, mesmo o código estando antes.`,
      atividade: `Digite o nome de um jogo na célula B3 e crie uma fórmula PROCX que devolva o código desse jogo, que fica numa coluna à esquerda do nome.`,
      gabarito: `=PROCX(B3;Produtos!B2:B20;Produtos!A2:A20). Procura na coluna B (nomes) e devolve da coluna A (códigos), buscando para a esquerda, algo impossível no PROCV sem truques.`,
    },
    {
      titulo: `Adeus, #N/D`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Peça que primeiro provoquem o erro digitando um código inexistente para verem o #N/D vermelho. Só depois adicionam o quarto argumento. Confira as aspas na mensagem.`,
      atividade: `Pegue a fórmula do preço e adicione o argumento se não encontrado para que, quando o código não existir, a célula mostre a mensagem "Produto não localizado" em vez do erro #N/D.`,
      gabarito: `=PROCX(B2;Produtos!A2:A20;Produtos!C2:C20;"Produto não localizado"). O quarto argumento, entre aspas, é a mensagem amigável que substitui o erro #N/D.`,
    },
    {
      titulo: `PROCX em dupla: a consulta da turma`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e use o arquivo "turma.xlsx". Um aluno dita os intervalos enquanto o outro digita, depois trocam. Incentive que combinem busca para a esquerda com a mensagem de erro na mesma fórmula.`,
      atividade: `Em dupla, montem uma fórmula PROCX que receba um número de matrícula na célula E1, devolva o nome do aluno e mostre "Matrícula inválida" caso o número não exista.`,
      gabarito: `=PROCX(E1;A2:A11;B2:B11;"Matrícula inválida"). Procura a matrícula na coluna A, devolve o nome da coluna B e exibe a mensagem amigável quando não encontra. Os intervalos dependem do arquivo, mas devem ter o mesmo tamanho.`,
    },
    {
      titulo: `Duelo PROCV x PROCX`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Peça que cada aluno (ou dupla) resolva o mesmo cruzamento com as duas funções e depois conduza uma roda rápida. Pergunte qual foi mais fácil e por quê. Anote no quadro as três vantagens do PROCX que a turma citar.`,
      atividade: `Resolva a mesma busca usando PROCV e depois PROCX. Em seguida, na roda de conversa, explique para a turma qual das duas você achou mais fácil e cite ao menos um motivo concreto.`,
      gabarito: `PROCV: =PROCV(E1;A2:C11;2;FALSO) traz o nome, mas só funciona se o nome estiver à direita da matrícula e não trata o erro sozinho. PROCX: =PROCX(E1;A2:A11;B2:B11;"Não encontrado") busca em qualquer direção e já traz a mensagem amigável. Vantagens esperadas do PROCX: busca para os dois lados, dispensa contar o número da coluna e trata o erro #N/D dentro da própria fórmula.`,
    },
  ],
};
