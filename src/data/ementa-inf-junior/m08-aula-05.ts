import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "A Alça Mágica que Copia",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a usar a alça de preenchimento (o quadradinho no canto da célula) para copiar uma fórmula de soma para várias linhas de uma tabela só arrastando para baixo.`,
  descricao: `Nesta aula as crianças descobrem um dos truques mais mágicos da planilha: a alça de preenchimento. Ela é aquele quadradinho minúsculo que aparece no canto de baixo, do lado direito, quando clicamos numa célula. Ao agarrar esse quadradinho com o mouse e puxar para baixo, a planilha copia a fórmula sozinha para todas as outras linhas e ainda ajusta os números certinhos. Para uma criança, é como se um carimbo mágico repetisse a conta várias vezes sem ela precisar digitar de novo.

Até agora, nas aulas anteriores, a turma aprendeu a somar usando o botão Somar e a escrever a própria soma. Mas imagine uma tabela com o nome de cada amiguinho e quantas figurinhas ele juntou em três dias. Fazer a soma de um por um, digitando tudo de novo em cada linha, seria cansativo e cheio de erros. A alça mágica resolve isso: a gente faz a conta UMA vez na primeira linha e arrasta para que ela se repita em todas as outras.

O coração desta aula é o gesto físico: clicar, segurar e puxar para baixo. Crianças de 5 a 9 anos ainda estão treinando o movimento fino do mouse, então o segredo é praticar bastante essa coreografia de mão. Não se preocupe se elas soltarem o botão cedo nas primeiras tentativas; isso faz parte do aprendizado. O professor demonstra grandão no projetor, devagar, e depois cada criança repete no seu computador.

O resultado é encantador: a tabela inteira se preenche de uma vez, como num passe de mágica. Esse momento de surpresa é o que faz a aula valer a pena e prepara a turma para, mais adiante, montar a própria planilha esperta que calcula tudo sozinha.`,
  materiais: [
    `Computadores com o Excel ou o Google Planilhas já abertos numa planilha em branco (um por criança).`,
    `Projetor ou TV grande ligada ao computador do professor para todos verem a demonstração.`,
    `Uma planilha de exemplo pronta com a tabela das figurinhas: coluna com nomes dos amiguinhos e três colunas de dias.`,
    `Mouse de tamanho confortável para mãos pequenas (de preferência, evitar touchpad nesta aula do arrastar).`,
    `Cartões impressos com desenho de uma célula mostrando o quadradinho da alça no cantinho, para apoio visual.`,
    `Folhas de papel quadriculado e lápis de cor para o exercício de desenho.`,
    `Adesivos ou carimbos de "Mágico das Planilhas" para entregar a quem completar o desafio.`,
  ],
  conceitosChave: [
    `Alça de preenchimento — o quadradinho pequenininho no cantinho de baixo da célula que serve para copiar.`,
    `Arrastar — clicar em cima do quadradinho, segurar o botão do mouse e puxar sem soltar.`,
    `Copiar fórmula — repetir a mesma conta em várias linhas sem digitar de novo.`,
    `Célula — cada quadradinho da planilha onde a gente escreve um número ou uma conta.`,
    `Linha — a fileira deitada de quadradinhos; cada amiguinho fica numa linha.`,
    `Soma automática — a conta que a planilha faz sozinha quando a gente arrasta a alça.`,
    `Coluna do total — a coluninha em pé onde aparece o resultado de cada amiguinho.`,
  ],
  treinamento: `## O que o professor precisa saber

A alça de preenchimento é um quadradinho minúsculo (um pontinho verde no Google Planilhas, um sinal de "+" preto fino no Excel) que aparece no canto inferior direito da célula selecionada. Quando você clica nesse quadradinho, segura e arrasta para baixo, a planilha copia o conteúdo da célula para as células de baixo. Se o conteúdo for uma fórmula como =SOMA(B2:D2), ela se ajusta sozinha: na linha de baixo vira =SOMA(B3:D3), e assim por diante. Esse ajuste automático é o que faz a mágica funcionar. Você não precisa entender o termo técnico "referência relativa" para ensinar; basta saber que a conta "anda junto" com a linha.

Antes da aula, deixe pronta a tabela de exemplo: na coluna A os nomes (Ana, Bruno, Caio...), nas colunas B, C e D os dias 1, 2 e 3 com a quantidade de figurinhas, e na coluna E o título "Total". Faça a soma só na primeira linha (E2) e deixe as outras vazias, para arrastar ao vivo.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: Retome a Aula 4. Pergunte: "Como a gente soma uma linha?" Mostre no projetor a célula E2 já com a soma =SOMA(B2:D2) e o número aparecendo. Diga que hoje vão aprender a NÃO digitar isso de novo para cada amiguinho.

15 min — Conteúdo novo guiado: No projetor, clique uma vez na célula E2 (a que já tem a soma). Aponte com o cursor para o canto de baixo do lado direito da célula até o ponteiro virar uma cruzinha fina. Fale bem alto: "Achei o quadradinho mágico!". Clique nele, segure o botão e puxe devagar até a última linha de amiguinhos. Solte. As somas aparecem todas de uma vez. Repita a demonstração duas ou três vezes, sempre narrando: "clico, seguro, puxo, solto".

25 min — Mão na massa: Cada criança abre a tabela de exemplo no seu computador. Peça que cliquem em E2, encontrem o quadradinho e arrastem até a última linha. Circule pela sala. Quem conseguir, ajuda o coleguinha do lado. Repita com uma tabela nova (ex.: estrelinhas em vez de figurinhas) para fixar.

10 min — Desafio e compartilhar: Lance o desafio: "Quem consegue arrastar a soma de seis amiguinhos sem soltar no meio?". Cada criança mostra a tabela preenchida na tela. Entregue o adesivo de "Mágico das Planilhas".

No Excel e no Google Planilhas os passos são iguais; só muda a aparência do quadradinho (verde no Google, "+" preto no Excel).

## Como explicar para crianças de 5 a 9 anos

Use a história do carimbo mágico: "A primeira conta é o carimbo. Quando a gente puxa o quadradinho, o carimbo bate sozinho em cada amiguinho!". Outra analogia ótima é o trenzinho: a primeira célula é a locomotiva e, ao puxar, ela leva os vagõezinhos com a conta junto. Faça o gesto no ar com a turma antes de ir para o computador: todos fingem agarrar um quadradinho invisível e puxar para baixo dizendo "puuuxa!". Repetir o movimento com o corpo ajuda a mãozinha a lembrar depois no mouse.

## Erros comuns e como ajudar

O erro mais comum é soltar o botão do mouse cedo demais, no meio do caminho. Diga "segura firme até embaixo!" e demonstre de novo bem devagar. Outro erro é clicar no meio da célula em vez do quadradinho do cantinho; a criança acaba só selecionando ou apagando. Mostre que o ponteiro precisa virar uma cruzinha fina antes de puxar. Algumas crianças puxam para o lado por engano e a conta vai para a coluna errada; oriente a puxar reto para baixo. Se a planilha copiar o número errado, geralmente é porque a fórmula da primeira célula estava errada; confira a célula de origem antes. Com o touchpad o gesto fica difícil, por isso prefira o mouse de verdade nesta aula.`,
  exercicios: [
    {
      titulo: `Achando o Quadradinho Mágico`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Peça que cada criança clique uma vez na célula que já tem a soma e leve o cursor até o cantinho de baixo do lado direito, sem clicar ainda. O objetivo é só treinar o olho para enxergar o quadradinho e ver o ponteiro virar uma cruzinha fina.`,
      atividade: `Clique na célula do total do primeiro amiguinho. Passe o mouse no canto de baixo, do lado direito, até aparecer a cruzinha. Levante a mão quando achar o quadradinho mágico!`,
      gabarito: `A criança encontrou a célula do total (ex.: E2), levou o cursor ao canto inferior direito e o ponteiro virou uma cruzinha fina (sinal "+" no Excel ou cruz sobre o ponto verde no Google Planilhas). Não precisa ter arrastado ainda, só localizado.`,
    },
    {
      titulo: `Arrastando a Soma das Figurinhas`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Use a tabela de exemplo das figurinhas. A criança clica no quadradinho da célula E2, segura e puxa reto para baixo até a última linha de amiguinhos. Reforce a coreografia "clico, seguro, puxo, solto". Circule e ajude quem soltar no meio.`,
      atividade: `Agarre o quadradinho mágico da soma da Ana e puxe para baixo até o último amiguinho. Solte só lá embaixo. Olha a mágica: todos os totais aparecem de uma vez!`,
      gabarito: `Todas as células da coluna Total ficam preenchidas com o número certo de cada amiguinho. Cada total deve bater com a soma dos três dias daquela linha (ex.: se Bruno tem 2, 3 e 5, o total é 10). A fórmula se ajustou sozinha em cada linha.`,
    },
    {
      titulo: `O Trenzinho da Conta`,
      tipo: `jogo / movimento`,
      tempo: `7 min`,
      guiaProfessor: `Jogo em pé, longe do computador, para fixar o gesto. As crianças fazem uma fila (trenzinho). A da frente é a "locomotiva" (a primeira conta) e, ao comando "puuuxa!", todas andam juntas para frente, mostrando que a conta arrasta os vagõezinhos junto. Repita variando a velocidade.`,
      atividade: `Vamos virar um trenzinho! A locomotiva é a primeira conta. Quando o professor disser "puuuxa!", todo mundo anda junto para mostrar que a soma se copia para todos os vagões.`,
      gabarito: `Não há resposta certa ou errada de conteúdo. O acerto é a turma entender e demonstrar a ideia: a primeira conta (locomotiva) puxa as outras junto (vagões), igual a alça que copia a fórmula para as outras linhas. Sucesso é a criança associar o "puxar" do trenzinho ao arrastar da alça.`,
    },
    {
      titulo: `Desenhando a Célula com a Alça`,
      tipo: `desenho / papel`,
      tempo: `8 min`,
      guiaProfessor: `Entregue o papel quadriculado. Cada criança desenha uma célula grande (um quadradão) e marca, com lápis de cor, o quadradinho da alça no canto de baixo do lado direito. Depois desenha uma setinha mostrando o caminho de puxar para baixo. Apoie-se nos cartões impressos de exemplo.`,
      atividade: `Desenhe um quadradão que é a célula. Pinte de verde o quadradinho mágico no cantinho de baixo, do lado direito. Faça uma seta para baixo mostrando para onde a gente puxa.`,
      gabarito: `O desenho mostra uma célula (quadrado) com um quadradinho menor pintado no canto inferior direito (a alça) e uma seta apontando para baixo, indicando a direção de arrastar. A posição do quadradinho no canto certo é o ponto principal a conferir.`,
    },
    {
      titulo: `Desafio: Seis Amiguinhos de Uma Vez`,
      tipo: `desafio`,
      tempo: `9 min`,
      guiaProfessor: `Abra uma tabela nova com seis amiguinhos e a soma feita só na primeira linha. O desafio é arrastar a alça da primeira até a última linha sem soltar no meio do caminho, preenchendo os seis totais de uma vez só. Quem conseguir ganha o adesivo de "Mágico das Planilhas". Deixe tentar mais de uma vez.`,
      atividade: `Pegue o quadradinho mágico da soma do primeiro amiguinho e puxe sem soltar até o sexto amiguinho lá embaixo. Conseguiu preencher os seis totais de uma vez? Você virou Mágico das Planilhas!`,
      gabarito: `As seis células da coluna Total ficam preenchidas corretamente com a soma de cada amiguinho, feitas em um único movimento de arrastar (sem soltar no meio). Cada total deve corresponder à soma dos dias daquela linha. Se algum total ficou vazio, a criança soltou cedo e deve tentar de novo.`,
    },
  ],
};
