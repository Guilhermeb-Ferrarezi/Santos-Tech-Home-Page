import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Caçando Células pelo Endereço",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Os alunos aprendem que cada célula tem um endereço (a letra da coluna mais o número da linha, como A1 ou B2) e treinam encontrar e clicar na célula certa ouvindo o endereço.`,
  descricao: `Na aula passada a turma conheceu o "mapa da planilha": descobriu que a tela é cheia de quadradinhos chamados células, que as colunas têm letras em cima (A, B, C...) e as linhas têm números do lado (1, 2, 3...). Hoje a gente dá o próximo passo e transforma esse mapa em uma brincadeira: cada célula tem um endereço, e nós vamos caçar células pelo endereço, como um detetive procura uma casa pela rua e pelo número.

O coração da aula é simples e poderoso: o endereço de uma célula é sempre a LETRA da coluna junto com o NÚMERO da linha, nessa ordem. A célula que está na coluna A e na linha 1 se chama A1. A que está na coluna B e na linha 2 se chama B2. As crianças adoram quando percebem que é igual a um jogo de batalha naval ou ao endereço de uma cadeira no cinema: "fila B, poltrona 2". Não é decoreba, é leitura de mapa, e elas aprendem rápido olhando a letra que está bem em cima da coluna e o número que está bem do lado da linha.

A grande novidade prática de hoje é a Caixa de Nome. No Excel e no Google Planilhas existe um campinho branco no canto de cima, à esquerda, logo acima das letras das colunas. Esse campinho mostra o endereço da célula que está selecionada agora. Quando a criança clica em qualquer quadradinho, o endereço aparece ali e a célula ganha uma borda mais grossa para mostrar "estou aqui!". Esse campinho é o melhor amigo do professor na hora de conferir se o aluno clicou no lugar certo, sem precisar adivinhar.

O outro grande tema é andar pelo tabuleiro com as setas do teclado. Em vez de só clicar com o mouse, a criança aperta a seta para a direita e a seleção pula uma coluna; a seta para baixo desce uma linha. Isso ajuda muito quem ainda tem dificuldade de mirar com o mouse e mostra, de um jeito gostoso, que a planilha é organizada e previsível. A aula toda gira em torno de uma brincadeira de batalha naval bem simples: o professor diz um endereço em voz alta e cada criança corre para clicar (ou andar com as setas até) a célula certa, conferindo na Caixa de Nome se acertou.`,
  materiais: [
    `Computadores ligados, um por criança, com o Excel ou o Google Planilhas já aberto numa planilha em branco e com o zoom aumentado para as letras e os números ficarem bem grandes.`,
    `Projetor ou TV grande ligada ao computador do professor, com a mesma planilha aberta, para demonstrar cada clique e mostrar a Caixa de Nome.`,
    `Uma planilha-exemplo já pronta com algumas células pintadas e escritas (por exemplo: um coração em B2, uma estrela em D4) para a turma caçar pelo endereço.`,
    `Cartões de papel grandes com endereços escritos (A1, B2, C3, D4, A5...) para o professor sortear durante o jogo.`,
    `Um tabuleiro de batalha naval desenhado em papel ou cartolina: uma grade com letras em cima e números do lado, para a versão no papel.`,
    `Lápis, lápis de cor e folhas com uma gradezinha impressa (colunas A a E, linhas 1 a 5) para a atividade de desenho.`,
    `Fita crepe ou adesivos para, se quiser, montar uma grade gigante no chão e brincar de "pisar no endereço".`,
  ],
  conceitosChave: [
    `Célula — é cada quadradinho da planilha, o lugar onde a gente vai escrever ou pintar.`,
    `Endereço — é o nome da célula, formado pela letra da coluna e o número da linha, como A1 ou B2.`,
    `Coluna — é a fileira que desce de cima para baixo; cada coluna tem uma letra lá em cima (A, B, C...).`,
    `Linha — é a fileira deitada que vai da esquerda para a direita; cada linha tem um número do lado (1, 2, 3...).`,
    `Caixa de Nome — é o campinho branco lá em cima, à esquerda, que mostra o endereço da célula onde você está agora.`,
    `Célula selecionada — é a célula que está "acesa" com uma borda grossa, mostrando que é nela que o computador está prestando atenção.`,
    `Setas do teclado — são os botões com flechinhas que fazem a seleção pular de uma célula para a outra sem precisar do mouse.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar planilhas para dar esta aula. O segredo de hoje cabe numa frase: o endereço de uma célula é a LETRA da coluna mais o NÚMERO da linha, sempre nessa ordem (A1, B2, C3). A letra você lê no cabeçalho cinza em cima das colunas; o número você lê no cabeçalho cinza do lado das linhas. Onde a coluna e a linha se cruzam, está a célula daquele endereço.

Conheça a Caixa de Nome antes da aula. É o campinho branco no canto superior esquerdo, logo acima da coluna A e à esquerda da barra de fórmulas. Clique em qualquer célula: o endereço dela aparece ali na hora (por exemplo, "C3"). Essa caixa é a sua ferramenta de correção: em vez de olhar de longe, peça que a criança leia o que está escrito na Caixa de Nome. No Excel e no Google Planilhas ela fica no mesmo lugar e funciona igual. Teste também as setas do teclado: clique numa célula e aperte as flechinhas para ver a seleção pular de coluna ou de linha. Faça isso uma vez sozinho e você estará pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): com o projetor ligado, relembre o mapa da aula passada. Aponte as letras em cima e os números do lado e pergunte: "Onde estão as letras? E os números?" Clique em uma célula qualquer e mostre a borda grossa: "esta é a célula acesa". Diga que hoje vamos aprender o nome de cada quadradinho.

Conteúdo novo guiado (15 min): no seu computador, clique na primeira célula do canto e mostre a Caixa de Nome dizendo "olha, está escrito A1!". Explique devagar: A é a letra da coluna, 1 é o número da linha. Clique em B2 e leia junto a Caixa de Nome. Faça mais dois ou três endereços. Depois, sem mexer no mouse, aperte as setas e mostre o endereço mudando na Caixa de Nome a cada flechinha. Diga cada passo em voz alta.

Mão na massa (25 min): comece a batalha naval. Diga um endereço bem claro, por exemplo "cliquem na célula B2", e dê um tempinho. Peça que cada criança confira na Caixa de Nome se está escrito B2. Passe de mesa em mesa. Vá aumentando: A1, depois C3, depois D5. Em seguida, mude a regra: "agora cheguem na célula usando só as setas do teclado". Por fim, use a planilha-exemplo com figuras escondidas: "qual é o endereço da célula que tem o coração?".

Desafio e compartilhar (10 min): lance o desafio "ditado de endereços", em que você dita uma sequência (A1, B1, C1) e a turma percorre. Depois faça a roda: cada criança diz um endereço e a turma inteira clica nele juntos, conferindo na Caixa de Nome.

## Como explicar para crianças de 5 a 9 anos

Use a analogia da batalha naval e do cinema. "O endereço é igual ao seu lugar no cinema: primeiro a fila com a letra, depois a cadeira com o número." Mostre que a gente lê primeiro a letra (a coluna que desce) e depois o número (a linha deitada). Chame a célula selecionada de "célula acesa" e a Caixa de Nome de "plaquinha que diz onde você está". Para as setas, diga que são os "pés" da seleção: cada flechinha dá um passo para o lado ou para baixo. Demonstre tudo no projetor antes de pedir que façam, porque nessa idade eles aprendem muito mais vendo do que ouvindo.

## Erros comuns e como ajudar

A troca mais comum é inverter a ordem e dizer "1A" em vez de "A1": lembre com carinho que a letra vem sempre primeiro, igual ao nome antes do sobrenome. Outra confusão é olhar a linha errada porque a planilha tem muitas; peça que a criança encoste o dedo na letra de cima e desça com o dedo até cruzar com o número. Se ela clicou na célula vizinha, não diga "errou": peça que leia a Caixa de Nome e compare com o endereço pedido, e ela mesma percebe e corrige. Com as setas, alguns apertam várias vezes rápido e se perdem; oriente a apertar devagar, um passo de cada vez, olhando a Caixa de Nome. E quem ainda não lê números grandes pode usar só as primeiras colunas e linhas (até E e até 5), que é onde mora a brincadeira de hoje.`,
  exercicios: [
    {
      titulo: `Caça ao Endereço A1`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Faça junto com a turma, no projetor, bem devagar. Diga o endereço em voz alta, espere todos clicarem e só então confira. Peça que cada criança leia a Caixa de Nome antes de você seguir para o próximo endereço.`,
      atividade: `O professor diz "cliquem na célula A1". Cada criança clica no quadradinho do canto de cima e confere na Caixa de Nome se está escrito A1. Depois o professor repete com B2 e com C3.`,
      gabarito: `Acertou quem deixou a célula acesa (com a borda grossa) e viu na Caixa de Nome o mesmo endereço que o professor falou: A1 para a primeira, depois B2 e C3. Se a Caixa de Nome mostra outro endereço, é só a criança procurar a letra em cima e o número do lado e clicar de novo.`,
    },
    {
      titulo: `Batalha Naval das Células`,
      tipo: `Jogo`,
      tempo: `12 minutos`,
      guiaProfessor: `Sorteie os cartões de endereço (A1, B2, C3, D4, A5...) e leia um de cada vez, bem alto. Dê um tempinho para todos caçarem a célula. Comemore cada acerto e use a Caixa de Nome para conferir junto. Vá aumentando a dificuldade conforme a turma acerta.`,
      atividade: `A cada cartão sorteado, as crianças correm para clicar na célula daquele endereço. Quem acertar levanta a mão e mostra a Caixa de Nome. Vale tentar quantas vezes precisar até acertar.`,
      gabarito: `A célula certa é sempre onde a letra da coluna cruza com o número da linha do cartão: B2 fica na coluna B com a linha 2; D4 fica na coluna D com a linha 4. Confirme pela Caixa de Nome, que deve mostrar exatamente o endereço do cartão sorteado.`,
    },
    {
      titulo: `Andando com as Setas`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Demonstre no projetor: clique em A1 e mostre o endereço mudando na Caixa de Nome a cada seta apertada. Reforce apertar devagar, um passo de cada vez. Ajude mesa por mesa quem se perder, sempre voltando para A1 como ponto de partida.`,
      atividade: `Cada criança clica na célula A1 e, usando só as setas do teclado, aperta duas vezes a seta para a direita e duas vezes a seta para baixo, parando para ler na Caixa de Nome onde chegou.`,
      gabarito: `Partindo de A1, duas setas para a direita levam à coluna C (A vira B, depois C) e duas setas para baixo levam à linha 3 (1 vira 2, depois 3): o destino certo é a célula C3. A Caixa de Nome deve mostrar C3. Quem chegou em outro lugar provavelmente apertou as setas vezes demais; volte para A1 e tente de novo, devagar.`,
    },
    {
      titulo: `Batalha Naval no Papel`,
      tipo: `Desenho / papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a folha com a gradezinha (colunas A a E, linhas 1 a 5). Dite alguns endereços e peça que a criança pinte o quadradinho certo. Quem ainda tem dificuldade pode encostar o dedo na letra de cima e descer até o número. Vale conferir em duplas no final.`,
      atividade: `Na folha-grade, a criança pinta de vermelho a célula B2, de azul a célula D4 e desenha uma estrelinha na célula A5, achando cada uma pela letra de cima e pelo número do lado.`,
      gabarito: `Correto quando o vermelho está onde a coluna B encontra a linha 2, o azul está onde a coluna D encontra a linha 4 e a estrelinha está onde a coluna A encontra a linha 5. Para conferir, basta seguir com o dedo a letra para baixo e o número para o lado até o cruzamento.`,
    },
    {
      titulo: `Desafio: Ditado de Endereços`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha o desafio final e deixe as crianças resolverem com pouca ajuda, só dando dicas. Dite a sequência devagar e, no fim, faça a roda: cada criança diz o endereço de uma célula e a turma inteira clica nela junto, conferindo na Caixa de Nome.`,
      atividade: `O professor dita a sequência de endereços A1, B1, C1, C2 e C3, um de cada vez. A criança vai clicando (ou andando com as setas) em cada célula e confere na Caixa de Nome antes de ir para a próxima.`,
      gabarito: `Desafio vencido quando a criança passa, na ordem, por A1, B1 e C1 (andando para a direita pela linha 1) e depois por C2 e C3 (descendo pela coluna C), conferindo cada endereço na Caixa de Nome. O caminho desenha um "L" na planilha: primeiro para o lado, depois para baixo.`,
    },
  ],
};
