import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "PROCV: o detetive da planilha",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Aprender a usar a função PROCV para buscar automaticamente informações em uma tabela, como o preço de um produto a partir do seu código.`,
  descricao: `Imagine uma loja com mil produtos. Toda vez que alguém digita um código, você precisa descobrir o preço. Procurar isso na mão, item por item, levaria horas e ainda cheio de erros. É exatamente para resolver esse tipo de problema que existe o PROCV, uma das funções mais úteis e famosas do Excel. PROCV significa "Procura na Vertical": ela pega um valor que você conhece (como um código) e devolve uma informação que está na mesma linha (como o preço), buscando de cima para baixo numa tabela.

Nesta aula, o aluno descobre que o computador pode ser um verdadeiro detetive: você dá uma pista (o código do produto) e ele encontra a resposta sozinho. O segredo é entender os quatro argumentos que o PROCV precisa para trabalhar: o valor procurado, a tabela onde procurar, o número da coluna que tem a resposta e o tipo de correspondência (que vamos sempre deixar como exata, ou seja, FALSO).

O foco do dia é construir o primeiro PROCV simples, do zero, com calma. O aluno vai montar uma pequena tabela de produtos com código, nome e preço, e depois criar uma "consulta": digita um código numa célula e o preço aparece automaticamente em outra. Quando ele troca o código, o preço muda na hora. Esse efeito "mágico" costuma encantar a turma e mostra, na prática, por que tantas empresas usam essa função todos os dias.

Esta é a primeira aula do mês de Excel avançado e abre a porta para a planilha inteligente que a turma vai construir ao longo das oito aulas. Aqui plantamos a semente da busca automática de dados. Não se preocupe em ensinar PROCX, SE ou tabelas dinâmicas hoje, isso vem nas próximas aulas. O objetivo é que cada aluno saia com um PROCV funcionando e entendendo o porquê de cada parte da fórmula.`,
  materiais: [
    `Computadores com Excel avançado instalado e aberto (um por aluno)`,
    `Projetor ou tela grande para o professor demonstrar passo a passo`,
    `Arquivo de exemplo "loja-produtos.xlsx" com uma tabela de código, nome e preço (ou criado ao vivo)`,
    `Quadro branco ou slide com a estrutura da função PROCV escrita`,
    `Lista impressa de códigos de produtos para os alunos testarem (folha de apoio)`,
    `Conta Microsoft ativa, caso a turma use o Excel online`,
  ],
  conceitosChave: [
    `PROCV — função que procura um valor na primeira coluna de uma tabela e devolve algo da mesma linha, buscando de cima para baixo.`,
    `Valor procurado — a "pista" que você já conhece e quer usar para buscar, por exemplo o código do produto.`,
    `Matriz tabela — o intervalo de células onde o Excel vai procurar, ou seja, a tabela inteira com os dados.`,
    `Número da coluna — a posição (1, 2, 3...) da coluna que contém a resposta que você quer trazer.`,
    `Correspondência exata (FALSO) — opção que manda o Excel encontrar o valor idêntico, sem aproximações ou enganos.`,
    `Argumento — cada informação que colocamos dentro da função, separada por ponto e vírgula.`,
    `#N/D — aviso de erro que aparece quando o PROCV não encontra o valor procurado na tabela.`,
  ],
  treinamento: `## O que o professor precisa saber

O PROCV (em inglês, VLOOKUP) busca um valor na primeira coluna de uma tabela e devolve um dado da mesma linha. A fórmula tem quatro argumentos, sempre nesta ordem: =PROCV(valor_procurado; matriz_tabela; núm_coluna; correspondência). O quarto argumento usaremos sempre como FALSO (correspondência exata). Exemplo real: se a tabela de produtos está em A2:C10 e você digitou um código na célula E2, a fórmula =PROCV(E2;A2:C10;3;FALSO) traz o preço, porque o preço está na 3ª coluna da tabela. Regra de ouro: o valor procurado precisa estar na primeira coluna da matriz. Se o código estiver na coluna do meio, o PROCV não funciona. Pratique a fórmula uma vez antes da aula para se sentir seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Pergunte à turma como acham que um caixa de mercado descobre o preço só passando o código de barras. Ouça as ideias e diga que hoje vão construir esse "detetive". No projetor, mostre uma tabela com código, nome e preço e desafie alguém a achar o preço de um código na mão. Marque o tempo, mostre que é lento.

Conteúdo novo guiado (15 min): No Excel, crie ao vivo uma tabela em A1:C6 com cabeçalhos Código, Produto e Preço. Em E1 escreva "Digite o código" e deixe E2 vazio. Clique na célula F2, digite =PROCV( e mostre que o Excel sugere os argumentos. Explique cada um apontando na tela: clique em E2 (valor procurado), ponto e vírgula, selecione A2:C6 com o mouse (matriz), ponto e vírgula, digite 3 (coluna do preço), ponto e vírgula, escolha FALSO, feche o parêntese e aperte Enter. Digite um código em E2 e veja o preço aparecer em F2.

Mão na massa (25 min): Cada aluno cria a própria tabela de produtos (pode ser uma loja de jogos, lanches ou itens da escola). Eles montam o PROCV do zero para buscar o preço pelo código. Circule pela sala. Quando alguém acertar, peça para trocar o código e ver o preço mudar. Quem terminar rápido cria uma segunda consulta que busca o nome do produto (coluna 2) em vez do preço.

Desafio e compartilhar (10 min): Lance o desafio "código fantasma": peça para digitarem um código que não existe e observarem o erro #N/D. Pergunte por que isso acontece. Convide dois ou três alunos a mostrar a planilha deles no projetor e explicar a própria fórmula em voz alta.

## Como explicar de forma clara

Use a imagem do detetive: o PROCV recebe uma pista (o código) e sai procurando até achar o suspeito (a resposta). Diga que a função "lê" a tabela de cima para baixo, sempre pela primeira coluna, como quem desce um corredor procurando a porta certa. Para o número da coluna, peça que contem as colunas da tabela apontando com o dedo: "código é 1, produto é 2, preço é 3". Para o FALSO, explique que é como dizer ao Excel "só me traga se for exatamente igual, nada de chute". Repita que os argumentos são separados por ponto e vírgula, como vírgulas de uma frase.

## Erros comuns e como ajudar

O erro mais comum é contar a coluna errada: o aluno coloca a posição na planilha inteira, e não dentro da tabela selecionada. Lembre que a contagem começa na primeira coluna da matriz, sempre no 1. Outro erro é esquecer o ponto e vírgula ou trocar por vírgula; mostre como o Excel reclama. Muitos esquecem o FALSO e recebem resultados estranhos: reforce que ele é obrigatório aqui. Se aparecer #N/D, peça para conferir se o código digitado existe mesmo na tabela e se não há espaços sobrando. Se o valor procurado não estiver na primeira coluna, oriente a reorganizar a tabela.`,
  exercicios: [
    {
      titulo: `Meu primeiro PROCV`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha uma tabela com pelo menos quatro produtos (código, nome e preço) antes de começar. Acompanhe a digitação da fórmula célula por célula e confira a ordem dos argumentos.`,
      atividade: `Crie uma tabela em A1:C5 com os cabeçalhos Código, Produto e Preço e preencha quatro produtos. Em E2 digite um dos códigos. Na célula F2, escreva um PROCV que busque o preço desse código e mostre o resultado.`,
      gabarito: `Fórmula esperada em F2: =PROCV(E2;A2:C5;3;FALSO). O valor procurado é E2, a matriz vai de A2 a C5, a coluna do preço é a 3 e a correspondência é FALSO (exata). Ao digitar um código válido em E2, o preço correto aparece em F2.`,
    },
    {
      titulo: `Buscar o nome em vez do preço`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Use este exercício para fixar a ideia do número da coluna. Peça que contem as colunas da tabela apontando com o dedo antes de escrever a fórmula.`,
      atividade: `Usando a mesma tabela do exercício anterior, crie em G2 uma nova fórmula que, a partir do código digitado em E2, traga o nome do produto (e não o preço).`,
      gabarito: `Fórmula esperada em G2: =PROCV(E2;A2:C5;2;FALSO). A diferença é o número da coluna: o nome do produto está na 2ª coluna da tabela, por isso usamos 2 no lugar de 3. O nome correto aparece em G2.`,
    },
    {
      titulo: `Detetives em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Um aluno monta a tabela e o outro escreve o PROCV; depois trocam de papel. Estimule que conversem sobre cada argumento enquanto montam.`,
      atividade: `Em dupla, criem uma tabela de uma lanchonete com seis itens (código, lanche e preço). Um colega digita um código numa célula e o outro monta o PROCV que mostra o preço. Testem três códigos diferentes e confiram se os preços batem com a tabela.`,
      gabarito: `Com a tabela em A2:C7, a fórmula correta é =PROCV(célula_do_código;A2:C7;3;FALSO). Cada um dos três códigos testados deve devolver exatamente o preço escrito na tabela. Se algum não bater, a dupla confere a coluna usada e o intervalo da matriz.`,
    },
    {
      titulo: `O código fantasma`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza a reflexão sobre o erro #N/D. Deixe os alunos explicarem com as próprias palavras antes de você confirmar. Valorize a ideia de que erro não é fracasso, é informação.`,
      atividade: `Digitem na célula do código um número que não existe na tabela. Observem o resultado e discutam em roda: o que apareceu? Por que o Excel não encontrou o preço? Como poderíamos evitar esse erro?`,
      gabarito: `Aparece o aviso #N/D, que significa "não disponível": o PROCV procurou o código e não achou nenhum igual na primeira coluna da tabela. Isso acontece porque o valor não existe, foi digitado errado ou tem espaços. Para evitar, conferimos se o código existe e está digitado corretamente.`,
    },
    {
      titulo: `Mini catálogo inteligente`,
      tipo: `Projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este é o fechamento prático e prepara o terreno para a planilha inteligente do mês. Incentive capricho no cabeçalho e nos dados. Circule conferindo as duas fórmulas (nome e preço).`,
      atividade: `Monte um mini catálogo de um tema que você goste (jogos, livros, tênis) com pelo menos oito produtos: código, nome e preço. Crie uma área de consulta com uma célula para digitar o código e duas células com PROCV: uma que mostra o nome e outra que mostra o preço. Teste quatro códigos e confira se tudo aparece certo.`,
      gabarito: `Com a tabela em A2:C9, a consulta usa duas fórmulas: para o nome, =PROCV(código;A2:C9;2;FALSO); para o preço, =PROCV(código;A2:C9;3;FALSO). Ao trocar o código na célula de consulta, nome e preço mudam juntos e correspondem à linha certa da tabela. O projeto está correto quando os quatro códigos testados retornam os dados exatos do catálogo.`,
    },
  ],
};
