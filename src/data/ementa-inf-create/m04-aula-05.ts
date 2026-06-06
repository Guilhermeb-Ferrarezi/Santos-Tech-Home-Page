import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "A magia das fórmulas: começando a somar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Fazer o aluno entender que toda fórmula no Excel começa com o sinal de igual e usá-la para somar, subtrair e totalizar números referenciando células.`,
  descricao: `Nesta aula acontece o momento mais mágico do mês: a planilha deixa de ser apenas uma tabela bonita e passa a calcular sozinha. Até agora os alunos digitaram números, organizaram colunas e enfeitaram a tabela com cores e bordas. Hoje eles descobrem que o Excel pode fazer as contas por eles, e que basta uma pequena regra para isso funcionar: toda fórmula começa com o sinal de igual (=). Esse símbolo é o feitiço que avisa o programa "atenção, isto é uma conta, e não um texto qualquer".

O coração da aula é a ideia de referência de célula. Em vez de escrever =2+3, o aluno aprende a escrever =A1+B1, ou seja, a apontar para as caixinhas onde os números moram. Isso parece um detalhe pequeno, mas é o pulo do gato de toda a informática de planilhas: quando o número dentro da célula muda, o resultado da fórmula se atualiza sozinho, na hora. É aqui que mora a verdadeira magia, e o aluno vai sentir isso ao vivo quando alterar um valor e ver o total mudar instantaneamente.

A partir desse conceito, a aula introduz a soma simples com o sinal de mais (+), a subtração com o sinal de menos (-) e, por fim, a primeira função do curso: a função SOMA. Em vez de digitar =A1+A2+A3+A4 numa lista enorme, o aluno descobre que pode escrever =SOMA(A1:A4) e totalizar uma coluna ou linha inteira de uma vez só. O atalho do botão Autosoma entra como um presente que faz tudo isso com um clique.

Por ser uma aula de descoberta, o tom deve ser de experimento e brincadeira. O professor não precisa ser especialista em Excel: basta seguir o passo a passo, errar junto, apertar Enter e comemorar quando o número aparece. O objetivo não é decorar fórmulas, e sim plantar a sensação de poder: "eu mandei e o computador calculou". Essa confiança é o que vai sustentar as próximas aulas, em que a tabela que calcula tomará forma definitiva.`,
  materiais: [
    `Computadores (um por aluno) com o Microsoft Excel instalado e aberto, ou o Excel Online/Planilhas Google como alternativa gratuita.`,
    `Projetor ou TV ligada ao computador do professor para mostrar cada passo na tela grande.`,
    `Arquivo de exemplo "minha-loja.xlsx" com uma coluna de produtos e uma coluna de preços já digitada (pronta para somar).`,
    `Uma planilha em branco para os alunos treinarem do zero.`,
    `Conta Microsoft ou Google de cada aluno (necessária apenas se usarem a versão online).`,
    `Folha impressa ou slide com o "mapa das fórmulas": = soma (+), subtração (-) e SOMA(intervalo).`,
    `Quadro branco ou bloco de notas digital para anotar as fórmulas que a turma for inventando.`,
  ],
  conceitosChave: [
    `Fórmula — uma conta que o Excel calcula por você; ela sempre começa com o sinal de igual (=).`,
    `Sinal de igual (=) — o aviso que diz ao Excel "o que vem agora é um cálculo", e não um texto.`,
    `Referência de célula — usar o nome da célula (como A1 ou B2) dentro da fórmula em vez de digitar o número direto.`,
    `Soma e subtração — contas feitas com os sinais de mais (+) e menos (-) entre células, por exemplo =A1+B1 ou =A1-B1.`,
    `Função SOMA — um comando pronto que totaliza vários números de uma vez, escrito como =SOMA(A1:A4).`,
    `Intervalo — o pedaço de células entre duas pontas, escrito com dois pontos, por exemplo A1:A4 (de A1 até A4).`,
    `Autosoma — o botão da letra grega sigma que cria a função SOMA automaticamente com um clique.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Excel para dar esta aula; basta entender três ideias. Primeira: toda fórmula começa com o sinal de igual (=). Se o aluno esquecer o =, o Excel trata tudo como texto e nenhum cálculo acontece. Segunda: é melhor referenciar células (=A1+A2) do que digitar números soltos (=2+3), porque assim o resultado se atualiza quando o número muda. Terceira: a função SOMA totaliza um intervalo, e o atalho dela é o botão Autosoma, o símbolo parecido com um "E" grego (a letra sigma), que fica na aba "Página Inicial", no grupo "Edição", canto direito. Atalho de teclado: Alt + = (segura Alt e aperta igual). Antes da aula, abra o arquivo "minha-loja.xlsx" e teste uma soma para chegar tranquilo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula passada perguntando "o que fizemos pra deixar a tabela bonita?". Depois faça a pergunta mágica: "e se a gente quisesse o total dos preços, sem usar a calculadora?". Mostre no projetor uma coluna de números e diga que hoje o computador vai calcular sozinho.

Conteúdo novo guiado (15 min): no seu Excel projetado, clique numa célula vazia, digite =2+3 e aperte Enter. Apareceu 5. Diga: "viram? Começou com igual". Agora apague e ensine o jeito profissional: clique na célula A1, digite 10; em B1 digite 5. Vá para C1 e digite =A1+B1, aperte Enter, aparece 15. Volte na A1, troque 10 por 100 e mostre que C1 vira 105 sozinho. Esse é o momento "uau". Repita com subtração: =A1-B1. Por fim, numa coluna com vários números (A1 até A4), vá em A5 e digite =SOMA(A1:A4). Mostre também o botão Autosoma (sigma) na aba Página Inicial, grupo Edição.

Mão na massa (25 min): peça que abram o arquivo "minha-loja.xlsx". Cada aluno deve: somar dois preços com =, subtrair, e no fim da coluna de preços criar uma célula "Total" usando =SOMA. Circule pela sala. Quando alguém acertar, peça que mude um preço e veja o total mudar.

Desafio e compartilhar (10 min): lance o desafio "descubra o total usando o botão Autosoma com um clique só". Chame dois ou três alunos para mostrarem suas fórmulas no projetor e explicarem em voz alta.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do feitiço: "o sinal de igual é a varinha mágica; sem ele, nada acontece". Chame a célula de "caixinha com endereço" (a coluna é a rua, o número é a casa). Diga que referenciar célula é "apontar pra caixinha em vez de copiar o número na mão, porque assim o Excel já sabe se mudar de ideia". Compare a função SOMA com um robô: "em vez de eu somar tudo à mão, eu mando o robô SOMA olhar do A1 até o A4 e ele me dá o total". Use os dois pontos como "até": A1:A4 quer dizer "de A1 até A4".

## Erros comuns e como ajudar

O erro número um é esquecer o sinal de igual; quando o resultado não aparece, pergunte "começou com igual?". O segundo é digitar números direto (=2+3) em vez de células; lembre que células se atualizam sozinhas. O terceiro é usar vírgula no intervalo (=SOMA(A1,A4)) achando que pega tudo, quando deveria ser dois pontos (=SOMA(A1:A4)); mostre a diferença somando 1 até 4. O quarto é esquecer de apertar Enter para confirmar. O quinto é clicar na célula errada ao montar a fórmula; ensine a olhar a barra de fórmulas lá em cima para conferir o que está escrito. Mantenha o clima leve: errar fórmula faz parte e some com um Enter.`,
  exercicios: [
    {
      titulo: `Meu primeiro feitiço: a soma com igual`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Projete o exemplo e faça junto, passo a passo. Garanta que cada aluno digite o sinal de igual antes do cálculo e aperte Enter. Circule conferindo a barra de fórmulas.`,
      atividade: `Numa planilha em branco, digite 8 na célula A1 e 6 na célula B1. Vá até a célula C1 e escreva uma fórmula que some as duas: =A1+B1. Aperte Enter e veja o resultado aparecer.`,
      gabarito: `Na célula C1 deve aparecer 14. A fórmula correta é =A1+B1. Se o aluno digitar apenas A1+B1 (sem o igual), o Excel mostra o texto e não calcula; basta colocar o = na frente.`,
    },
    {
      titulo: `Mudei o número, mudou o total`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Este exercício mostra a magia da referência de célula. Peça que observem o resultado mudar sozinho ao alterar o valor. Reforce: "por isso usamos o endereço da célula, e não o número na mão".`,
      atividade: `Reaproveite a planilha anterior. Volte na célula A1 e troque o 8 por 20. Olhe para a célula C1 sem mexer nela. Depois faça uma subtração na célula D1 com a fórmula =A1-B1.`,
      gabarito: `Ao trocar A1 para 20, a célula C1 passa a mostrar 26 sozinha (20 + 6), sem o aluno reescrever a fórmula. Em D1, a fórmula =A1-B1 resulta em 14 (20 - 6). Isso prova que a fórmula recalcula sozinha.`,
    },
    {
      titulo: `Chamando o robô SOMA`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Apresente a função SOMA e o intervalo com dois pontos. Mostre também onde fica o botão Autosoma (sigma) na aba Página Inicial, grupo Edição, para quem quiser tentar pelo clique.`,
      atividade: `Numa coluna, digite estes preços: A1 = 10, A2 = 25, A3 = 15, A4 = 30. Na célula A5, escreva a função =SOMA(A1:A4) para totalizar tudo. Como desafio extra, refaça o total numa célula ao lado usando o botão Autosoma.`,
      gabarito: `A célula A5 deve mostrar 80 (10 + 25 + 15 + 30). A fórmula correta é =SOMA(A1:A4), com dois pontos entre A1 e A4. O botão Autosoma cria a mesma fórmula automaticamente. Erro comum: usar vírgula =SOMA(A1,A4), que soma só o A1 e o A4 (resultado 40).`,
    },
    {
      titulo: `Caça ao erro em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas. Mostre no projetor três fórmulas com defeitos e peça que descubram e corrijam juntas em seus computadores. Estimule que conversem antes de digitar. Passe validando cada correção.`,
      atividade: `Em dupla, descubra o erro de cada fórmula e digite a versão certa: (1) A1+A2 sem resultado; (2) =SOMA(A1,A5) deveria somar de A1 até A5; (3) =A1+B1+ que mostra erro. Escrevam a forma corrigida de cada uma.`,
      gabarito: `(1) Faltou o sinal de igual; o certo é =A1+A2. (2) A vírgula deveria ser dois pontos; o certo é =SOMA(A1:A5). (3) Sobrou um sinal de mais no fim sem célula depois; o certo é =A1+B1. Aceite também explicações corretas ainda que com células diferentes.`,
    },
    {
      titulo: `A conta da minha festa`,
      tipo: `Projeto curto e roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza como mini-projeto seguido de roda. Cada aluno monta uma tabelinha de gastos e usa SOMA para o total. No fim, abra uma roda: pergunte quem teve o maior total e como descobriu, valorizando o uso da fórmula.`,
      atividade: `Imagine que você vai dar uma festa. Em uma coluna, liste 4 itens (ex.: bolo, refrigerante, salgados, decoração) e, ao lado, o preço de cada um. Na célula abaixo dos preços, use =SOMA para descobrir o gasto total. Depois compartilhe seu total na roda.`,
      gabarito: `Espera-se uma tabela com 4 itens e 4 preços, e uma célula de total com a função SOMA aplicada ao intervalo dos preços, por exemplo =SOMA(B1:B4). Não há um número único certo: o gabarito é a fórmula SOMA cobrir exatamente as quatro células de preço e o total bater com a conta. Verifique se o aluno usou intervalo (dois pontos) e não digitou o total na mão.`,
    },
  ],
};
