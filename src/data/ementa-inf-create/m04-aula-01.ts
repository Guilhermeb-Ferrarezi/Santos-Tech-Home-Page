import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Excel: o mapa da planilha",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, o aluno reconhece a tela do Excel e identifica células, linhas, colunas e o endereço de cada célula, navegando pela planilha com o mouse e com as setas do teclado.`,
  descricao: `Esta é a primeira aula do mês com o Excel, e o objetivo é simples e poderoso: fazer o aluno se sentir em casa ao abrir o programa. Antes de digitar qualquer dado ou criar qualquer fórmula, o adolescente precisa entender que uma planilha é, na verdade, uma grande grade quadriculada, parecida com um tabuleiro de batalha naval ou com aquelas folhas quadriculadas de matemática. Cada quadradinho dessa grade tem um nome próprio, e descobrir esses nomes é a chave para tudo o que vem depois.

A planilha é formada por colunas, identificadas por letras (A, B, C, D...) que aparecem no topo, e por linhas, identificadas por números (1, 2, 3...) que aparecem à esquerda. O encontro de uma coluna com uma linha forma uma célula, e cada célula tem um endereço único, exatamente como o cruzamento de uma rua com uma avenida. A célula que fica na coluna A com a linha 1 se chama A1; a que fica na coluna B com a linha 5 se chama B5. Esse endereço aparece sempre num cantinho especial da tela, chamado Caixa de Nome.

Nesta aula o aluno ainda não vai calcular nada. O foco é a alfabetização visual: olhar para a tela e saber dizer onde estão as letras, onde estão os números, qual célula está selecionada (a que tem a borda mais grossa, verde) e como pular de uma célula para outra. Ele vai treinar dois jeitos de navegar: clicando com o mouse e usando as quatro setas do teclado. Esse domínio básico evita travamentos e frustrações nas próximas sete aulas.

Para o professor, vale lembrar que muitos alunos nunca abriram o Excel e podem confundi-lo com o Word. A imagem mental que queremos plantar é a do mapa: a planilha é um mapa de quadradinhos, e cada quadradinho tem um endereço. Se essa ideia ficar clara hoje, o resto do mês flui com tranquilidade.`,
  materiais: [
    `Computadores (um por aluno) com o Microsoft Excel instalado e já aberto numa planilha em branco`,
    `Computador do professor ligado ao projetor ou à TV, com o Excel também aberto e a tela bem visível`,
    `Arquivo de exemplo "mapa-da-planilha.xlsx" preparado pelo professor, com algumas células pintadas para o jogo de localização`,
    `Conta Microsoft (ou licença do Office da escola) já logada em cada computador, para evitar telas de login durante a aula`,
    `Folha impressa de apoio com uma grade vazia (colunas A a J, linhas 1 a 10) para o aluno anotar endereços, caso queira`,
    `Quadro branco ou flip chart e canetas para desenhar a grade durante a explicação`,
  ],
  conceitosChave: [
    `Planilha — a grande grade quadriculada onde trabalhamos no Excel; é como uma folha de matemática gigante cheia de quadradinhos.`,
    `Célula — cada quadradinho da grade, o espaço onde escrevemos um dado de cada vez.`,
    `Coluna — a fileira que vai de cima para baixo (na vertical); é identificada por uma letra no topo, como A, B ou C.`,
    `Linha — a fileira que vai da esquerda para a direita (na horizontal); é identificada por um número à esquerda, como 1, 2 ou 3.`,
    `Endereço da célula — o nome único de cada célula, formado pela letra da coluna mais o número da linha, como A1, B5 ou C3.`,
    `Caixa de Nome — o quadradinho no canto superior esquerdo que mostra o endereço da célula selecionada no momento.`,
    `Célula ativa — a célula que está selecionada agora, destacada por uma borda mais grossa e colorida; é nela que o que você digitar vai aparecer.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Excel para dar esta aula com segurança. O conteúdo é introdutório e visual. Abra o Excel antes dos alunos chegarem e clique em "Pasta de trabalho em branco" para começar numa planilha limpa. Observe três regiões da tela: no topo, as letras das colunas (A, B, C...); à esquerda, os números das linhas (1, 2, 3...); e no canto superior esquerdo, logo abaixo da faixa de botões, a Caixa de Nome, que mostra o endereço da célula selecionada. Clique em qualquer quadradinho e veja a Caixa de Nome mudar. Esse é o coração da aula. Deixe a faixa de botões (chamada Faixa de Opções) na aba "Página Inicial" e não mexa em mais nada hoje.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte quem já viu uma planilha e onde (no celular dos pais, numa loja, na escola). Desenhe no quadro uma grade simples de 4 colunas por 4 linhas. Escreva as letras A, B, C, D em cima e os números 1, 2, 3, 4 na lateral. Peça para um aluno apontar onde fica "B3" no desenho. Esse jogo já planta o conceito de endereço.

Conteúdo novo guiado (15 min): com o projetor ligado, mostre o Excel aberto. Aponte as letras das colunas no topo e os números das linhas à esquerda. Clique na célula A1 e mostre, na Caixa de Nome, o texto "A1". Clique em B5 e mostre "B5" aparecer. Repita com mais três células, sempre lendo o endereço em voz alta. Depois mostre as setas do teclado: pressione a seta para baixo e veja o número da linha aumentar; a seta para a direita e veja a letra da coluna avançar. Diga: "o mouse leva você direto, as setas andam de um quadradinho por vez".

Mão na massa (25 min): cada aluno, no seu computador, abre a Pasta de trabalho em branco. Peça que cliquem na célula A1 e confiram a Caixa de Nome. Depois dite endereços e peça que cliquem neles: "vão até C3", "agora E7", "agora B10". Passe pelas mesas conferindo. Em seguida, peça que naveguem só com as setas do teclado, sem mouse, até chegar a uma célula que você ditar. Abra o arquivo de exemplo com células pintadas e peça que descubram e anotem o endereço de cada célula colorida.

Desafio e compartilhar (10 min): proponha o jogo "Batalha de Células" em duplas (descrito nos exercícios) e termine pedindo que cada aluno diga em voz alta um endereço que aprendeu hoje e o que existe nele.

## Como explicar de forma clara

Use a comparação do mapa ou da batalha naval, que adolescentes entendem na hora: "a letra diz a rua, o número diz a casa". Fale sempre "letra primeiro, número depois", porque é assim que o endereço é escrito (A1, e nunca 1A). Evite termos técnicos demais; troque "referência" por "endereço" e "intervalo" por "vários quadradinhos juntos", deixando o vocabulário mais bonito para as próximas aulas. Mostre na prática, no projetor, antes de pedir que façam, pois nesta idade ver acontecer vale mais que ouvir explicar.

## Erros comuns e como ajudar

O erro mais frequente é inverter a ordem e dizer "3B" em vez de "B3"; corrija com gentileza repetindo "letra primeiro". Alguns alunos confundem linha com coluna; reforce que coluna desce (vertical, como uma coluna de prédio) e linha atravessa (horizontal). Outros não percebem qual célula está selecionada; peça que olhem a borda verde mais grossa e confiram a Caixa de Nome. Há quem clique e arraste sem querer, selecionando várias células; ensine a dar um clique único e seco. Por fim, se alguém apertar uma tecla e "sumir" tudo, basta pressionar a tecla Esc e clicar novamente em A1 para recomeçar com calma.`,
  exercicios: [
    {
      titulo: `Encontre a célula`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Dite os endereços um a um e dê tempo para todos clicarem antes de seguir. Circule pela sala e confira a Caixa de Nome de cada aluno. Comece por células fáceis (cantos) e avance para o meio da grade.`,
      atividade: `No seu computador, com a planilha em branco aberta, clique exatamente nestas células, uma de cada vez: A1, C3, B5, E2 e D7. A cada clique, leia em voz baixa o que aparece na Caixa de Nome para conferir se acertou.`,
      gabarito: `O aluno deve clicar em cada célula ditada e, na Caixa de Nome (canto superior esquerdo), ler exatamente A1, depois C3, depois B5, depois E2 e por fim D7. Se a Caixa de Nome mostrar o endereço pedido, o exercício está correto.`,
    },
    {
      titulo: `Navegando só com as setas`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que tirem a mão do mouse. Eles devem partir de A1 e chegar ao destino usando apenas as setas do teclado, contando os movimentos. Mostre no projetor que a seta para baixo aumenta o número e a seta para a direita avança a letra.`,
      atividade: `Clique uma vez na célula A1. Agora, sem usar o mouse, chegue até a célula C4 usando somente as setas do teclado. Conte quantas vezes você apertou a seta para a direita e quantas vezes apertou a seta para baixo.`,
      gabarito: `Partindo de A1, o caminho correto é apertar a seta para a direita 2 vezes (A para B, B para C) e a seta para baixo 3 vezes (1 para 2, 2 para 3, 3 para 4), chegando à célula C4. A Caixa de Nome deve mostrar C4 ao final.`,
    },
    {
      titulo: `Caça às células coloridas`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Abra o arquivo de exemplo "mapa-da-planilha.xlsx", que tem cinco células pintadas em cores diferentes. O aluno deve clicar em cada célula colorida e anotar o endereço. Confira pedindo que leiam os endereços encontrados.`,
      atividade: `No arquivo de exemplo aberto pelo professor, existem cinco células pintadas. Clique em cada uma delas e anote o endereço de cada cor na folha de apoio. Escreva sempre a letra primeiro e o número depois.`,
      gabarito: `O aluno deve listar os cinco endereços corretos conforme o arquivo do professor, por exemplo: vermelho em B2, azul em D4, verde em A6, amarelo em F3 e laranja em C7. O acerto é confirmado quando o endereço anotado coincide com a posição da célula pintada, sempre no formato letra+número.`,
    },
    {
      titulo: `Batalha de Células em dupla`,
      tipo: `Em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno escolhe em segredo três células e anota os endereços; o colega tenta adivinhar ditando endereços, e o primeiro responde "acertou" ou "errou". Depois trocam de papel. Reforce a ordem letra-número a cada rodada.`,
      atividade: `Em dupla, um de vocês escolhe três células secretas (por exemplo B4, E2 e A9) e anota os endereços sem mostrar. O outro tenta descobrir dizendo endereços em voz alta, e a cada palpite recebe "acertou" ou "errou". Quando encontrar as três, troquem de papel.`,
      gabarito: `O exercício está correto quando os dois alunos usam endereços válidos no formato letra+número (como B4 ou E2), o dono das células confirma cada acerto corretamente, e ambos conseguem identificar as três células secretas ao final da sua rodada. Não há um único resultado fixo: o gabarito é o uso correto dos endereços e a confirmação certa de cada palpite.`,
    },
    {
      titulo: `O mapa que eu desenhei`,
      tipo: `Roda de conversa e projeto curto`,
      tempo: `7 minutos`,
      guiaProfessor: `Reúna a turma em roda. Cada aluno escolhe uma célula favorita, vai até ela no Excel e explica para os colegas qual é o endereço e por que escolheu. Feche amarrando os conceitos de coluna (letra), linha (número) e célula ativa.`,
      atividade: `Escolha uma célula qualquer da sua planilha, clique nela e descubra o endereço na Caixa de Nome. Na roda, diga para a turma: qual é o endereço, qual é a letra da coluna e qual é o número da linha dessa célula. Explique por que você escolheu justamente ela.`,
      gabarito: `A resposta de cada aluno está correta quando ele informa um endereço real e coerente com a célula selecionada, separa corretamente a letra (coluna) do número (linha) e mostra que entendeu que célula é o encontro de uma coluna com uma linha. Exemplo de resposta válida: "Escolhi a célula D8; a coluna é a letra D e a linha é o número 8".`,
    },
  ],
};
