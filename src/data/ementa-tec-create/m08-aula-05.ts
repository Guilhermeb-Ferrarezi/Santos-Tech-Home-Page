import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Eventos: as regras do jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Compreender a Event Sheet do Construct 3 e criar os primeiros eventos com a lógica de Condição e Ação, fazendo um objeto se mover ao apertar uma tecla.`,
  descricao: `Até agora, na trilha do mês, os alunos montaram a janela do jogo, trouxeram os sprites para a tela e construíram o cenário completo. Tudo isso é a parte visual: o palco está pronto, mas os personagens ainda estão parados, como uma foto. Nesta aula, damos vida a esse cenário. O coração de qualquer jogo no Construct 3 é a Event Sheet (folha de eventos), o lugar onde escrevemos as regras que dizem ao programa o que fazer e quando fazer.

A grande ideia desta aula é simples e poderosa: todo evento é formado por uma Condição e uma Ação. A Condição é o "quando isto acontecer" (por exemplo, quando o jogador apertar a seta para a direita). A Ação é o "faça aquilo" (por exemplo, mova o personagem 5 pixels para a direita). Quando o aluno entende que programar um jogo é basicamente encadear muitas regras "quando isto, faça aquilo", a porta da lógica de programação se abre de um jeito visual e divertido, sem precisar decorar códigos complicados.

Nesta aula o professor vai apresentar a aba Event sheet, mostrar como adicionar um novo evento clicando em "Add event", escolher um objeto, escolher uma condição e depois adicionar uma ação com "Add action". O foco prático é o aluno criar seus próprios eventos de teclado: apertar uma tecla e ver o objeto se mover na tela em tempo real ao testar o jogo. É o momento mágico em que a criança percebe que ela mandou no jogo.

A aula é totalmente prática, com cada aluno usando o Construct 3 no próprio computador. O entregável do mês, um joguinho funcionando, depende diretamente do que se aprende aqui: sem eventos, não há jogo, apenas uma imagem bonita. Por isso, mais do que decorar passos, o aluno precisa entender a estrutura "Condição leva à Ação", que vai se repetir em todas as regras que ele criar nas próximas aulas.`,
  materiais: [
    `Computadores (um por aluno) com o Construct 3 instalado e o projeto do jogo do mês já aberto`,
    `Projetor ou TV conectada ao computador do professor para demonstrar cada passo na tela grande`,
    `Arquivo de exemplo do Construct 3 com um sprite de personagem já posicionado no Layout (para quem ficou para trás)`,
    `Quadro branco ou cartaz com a frase-chave "Quando ISTO acontecer, FAÇA aquilo" bem visível`,
    `Folha impressa de apoio com a lista de condições e ações usadas na aula (Keyboard, On key pressed, Move at angle, Set position)`,
    `Cronômetro ou timer visível para controlar o ritmo de 10 / 15 / 25 / 10 minutos`,
  ],
  conceitosChave: [
    `Event Sheet — a folha de eventos, a aba do Construct 3 onde ficam todas as regras (a lógica) do jogo.`,
    `Evento — uma regra completa formada por uma Condição e uma ou mais Ações.`,
    `Condição — o "quando" da regra; o acontecimento que o Construct 3 fica verificando, como apertar uma tecla.`,
    `Ação — o "faça" da regra; o que o jogo executa quando a condição é verdadeira, como mover um objeto.`,
    `Objeto Keyboard — um objeto especial que precisa ser adicionado ao projeto para o jogo "ouvir" o teclado.`,
    `Add event / Add action — os botões e links da Event Sheet usados para criar uma nova regra e suas ações.`,
    `Run layout (Preview) — o botão de testar (ícone de play) que roda o jogo no navegador para ver os eventos funcionando.`,
  ],
  treinamento: `## O que o professor precisa saber

A Event Sheet é onde mora a inteligência do jogo. Cada linha é um evento e segue sempre o mesmo padrão: à esquerda fica a Condição (o "quando") e à direita ficam as Ações (o "faça"). Você não precisa dominar o Construct 3 para dar esta aula; precisa apenas confiar que tudo se resume a "quando isto, faça aquilo". Antes da aula, abra o projeto do mês e confirme que existe um sprite de personagem no Layout. Um detalhe que pega muita gente: para o jogo responder ao teclado, é preciso adicionar o objeto Keyboard ao projeto. Sem ele, a condição de tecla nem aparece. Faça este teste em casa uma vez para chegar seguro.

## Passo a passo da aula

Aquecimento (10 min): com o projetor ligado, mostre o jogo do cenário pronto e pergunte: "Por que o personagem não anda?". Conduza até a resposta: faltam as regras. Escreva no quadro "Quando ISTO acontecer, FAÇA aquilo". Peça exemplos do dia a dia (quando o sinal abre, os carros andam).

Conteúdo novo guiado (15 min): no seu Construct 3, clique na aba Event sheet (fica ao lado da aba do Layout, na parte de cima). Mostre a folha vazia. Primeiro, adicione o objeto Keyboard: clique com o botão direito numa área vazia do Layout, escolha "Insert new object", procure "Keyboard" e clique em "Insert". Volte para a Event sheet. Clique em "Add event" (ou dê duplo clique na folha vazia). Na lista, escolha o objeto Keyboard, depois a condição "On key pressed", clique em "Next", clique no campo da tecla, aperte a seta para a direita do teclado e confirme. O evento aparece. Agora, na mesma linha, clique em "Add action", escolha o personagem (o sprite), escolha a ação "Move at angle" (ou "Set X" somando pixels), digite o ângulo 0 e a distância, por exemplo 30. Clique no botão de play (Run layout) no topo e mostre o personagem andando ao apertar a seta.

Mão na massa (25 min): cada aluno repete os passos no próprio computador. Oriente que façam primeiro a seta para a direita. Quem terminar, cria a seta para a esquerda (ângulo 180). Circule pela sala. O objetivo mínimo é cada aluno ter ao menos um evento de teclado funcionando ao testar.

Desafio e compartilhar (10 min): proponha o "pulo" ou movimento para cima e para baixo, criando dois eventos novos. Depois, peça que dois ou três alunos mostrem na tela grande o personagem se movendo, explicando em voz alta a Condição e a Ação que criaram.

## Como explicar de forma clara

Use a linguagem de regra de brincadeira: "No pega-pega, a regra é: quando alguém te toca, você vira o pegador. Aqui é igual: quando você aperta a seta, o personagem anda." Sempre nomeie as duas partes em voz alta: "Esta é a Condição, o quando. Esta é a Ação, o faça." Mostre na tela e repita o gesto: dedo apontando para a esquerda (Condição) e para a direita (Ação). Evite a palavra "código"; prefira "regra" e "evento". Comemore o primeiro movimento de cada aluno, pois é o momento que prende a atenção.

## Erros comuns e como ajudar

O erro número um é esquecer de adicionar o objeto Keyboard, e então a condição de tecla não aparece na lista; oriente sempre a inserir o Keyboard primeiro. Outro erro frequente é colocar a Ação numa linha (evento) separada em vez de dentro do mesmo evento da Condição, fazendo a regra não funcionar; mostre que Ação fica do lado direito da mesma linha. Alunos costumam digitar a distância como 0 ou esquecer o ângulo, e o personagem não sai do lugar; confira o número e o ângulo. Há também quem clique em testar sem salvar nada na Event sheet, ou teste o Layout errado; verifique a aba ativa. Por fim, alguns somem o personagem para fora da tela com distâncias enormes (como 300); sugira valores pequenos, entre 5 e 30.`,
  exercicios: [
    {
      titulo: `Primeiro evento: andar para a direita`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada aluno na criação do primeiro evento. Garanta que o objeto Keyboard já foi inserido antes de começar. Verifique se a Condição e a Ação estão na mesma linha.`,
      atividade: `Na Event sheet, crie um evento com a condição "On key pressed" para a seta para a direita e a ação "Move at angle" no ângulo 0, distância 20. Teste apertando o play.`,
      gabarito: `Evento correto: Condição = Keyboard → On key pressed → Right arrow; Ação = Sprite do personagem → Move at angle → ângulo 0, distância 20. Ao testar, o personagem anda para a direita a cada toque na seta.`,
    },
    {
      titulo: `Completando as quatro direções`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Depois da direita, peça os outros três sentidos. Lembre os ângulos: direita 0, esquerda 180, cima 270, baixo 90. Ajude quem confundir os ângulos verticais.`,
      atividade: `Crie mais três eventos para mover o personagem para a esquerda, para cima e para baixo, cada um com sua própria tecla de seta. Teste todas.`,
      gabarito: `Quatro eventos, um por seta: Right = ângulo 0; Left = ângulo 180; Up = ângulo 270; Down = ângulo 90. Distância igual em todos (por exemplo 20). Ao testar, o personagem se move nas quatro direções.`,
    },
    {
      titulo: `Caça ao erro em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas e abra um projeto preparado por você com um erro de propósito (a Ação fora do evento ou sem o objeto Keyboard). As duplas devem encontrar e corrigir.`,
      atividade: `Em dupla, abra o projeto com defeito que o professor entregou, descubra por que o personagem não anda e conserte a regra para ele voltar a se mover.`,
      gabarito: `O erro típico é a Ação colocada em uma linha separada da Condição, ou o objeto Keyboard não inserido. A correção é arrastar a Ação para dentro do mesmo evento da Condição ou inserir o objeto Keyboard. Depois disso o personagem volta a andar ao testar.`,
    },
    {
      titulo: `Roda de conversa: quando e faça`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma em roda. Conduza para que cada aluno separe Condição e Ação em exemplos do cotidiano. Reforce que todo evento tem essas duas partes.`,
      atividade: `Cada aluno dá um exemplo de regra do dia a dia no formato "quando isto, faça aquilo" e diz qual parte é a Condição e qual é a Ação.`,
      gabarito: `Resposta válida identifica claramente as duas partes. Exemplo: "Quando o despertador toca (Condição), eu acordo (Ação)" ou "Quando aperto a seta (Condição), o personagem anda (Ação)". O importante é nomear corretamente Condição e Ação.`,
    },
    {
      titulo: `Mini regra especial do meu jogo`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Deixe o aluno inventar um evento próprio além do movimento. Ofereça opções simples como uma tecla que muda a posição do personagem ("Set position") ou troca o ângulo. Ajude a escolher algo realizável.`,
      atividade: `Crie um evento original no seu jogo: escolha uma tecla (por exemplo, a barra de espaço) e uma ação diferente, como teleportar o personagem para o início com "Set position". Teste e mostre para um colega.`,
      gabarito: `Evento novo e funcional com Condição = Keyboard → On key pressed → tecla escolhida (ex.: Space) e uma Ação coerente, como Sprite → Set position (X, Y) de volta ao ponto inicial. Ao apertar a tecla durante o teste, a ação acontece como o aluno planejou.`,
    },
  ],
};
