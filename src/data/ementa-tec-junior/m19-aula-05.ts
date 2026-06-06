import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Construindo o Chão e as Paredes",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Modelar o chão e as paredes do cenário 3D no Maya usando cubos esticados, dando a primeira estrutura ao mundo do jogo.`,
  descricao: `Hoje o cenário deixa de ser só uma ideia no papel e começa a virar um lugar de verdade dentro do Maya. Nas aulas anteriores as crianças tiveram a grande ideia do jogo, desenharam o mapa e voltaram a conhecer o estúdio 3D. Agora elas vão construir as duas peças mais importantes de qualquer mundo: o chão onde o personagem pisa e as paredes que dizem "até aqui o mundo vai". É como montar a caixa onde a aventura vai acontecer.

A grande sacada da aula é simples e poderosa: tudo começa de um cubo. Um cubo achatado e largo vira o chão. O mesmo cubo, esticado para cima e ficando fininho, vira uma parede. As crianças já aprenderam a mover, girar e esticar formas na aula passada, então hoje elas usam esse superpoder para um objetivo claro. Nada de formas soltas no espaço: cada cubo tem uma função no cenário.

O professor vai guiar a turma para criar um polygon cube, achatá-lo no eixo da altura para fazer o piso e, em seguida, criar paredes nas bordas. A ideia não é capricho ainda (isso vem na aula 7), e sim estrutura: levantar as quatro paredes em volta do chão para formar um espaço fechado, como uma sala ou um pátio vista de cima. Ao final, cada aluno terá uma "caixa aberta" que é a base do seu cenário.

O encerramento é o momento mágico: a turma olha de dentro do espaço usando a câmera e percebe que já dá para imaginar o personagem andando ali. Esse "uau, virou um lugar!" é o que mantém a criança animada para continuar o cenário nas próximas aulas.`,
  materiais: [
    `Computadores com o Maya já aberto em uma cena nova e vazia (um por aluno)`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar`,
    `Cena pronta do professor com o chão e as quatro paredes já feitas (modelo a mostrar)`,
    `Os mapas do cenário desenhados na Aula 2, impressos ou em mãos`,
    `Mouse com três botões para cada criança (essencial para navegar em 3D)`,
    `Cartões com os nomes dos botões: Mover (W), Girar (E), Esticar (R)`,
    `Adesivos ou estrelinhas para marcar quem terminou as quatro paredes`,
  ],
  conceitosChave: [
    `Polygon Cube (cubo) — a forma básica de caixa que é o ponto de partida de quase tudo no Maya.`,
    `Chão (piso) — um cubo bem achatado e largo onde o personagem do jogo vai andar.`,
    `Parede — um cubo esticado para cima e fininho que fecha a beirada do mundo.`,
    `Esticar (Escala / tecla R) — a ferramenta que faz a forma ficar maior, menor, mais alta ou mais fina.`,
    `Eixo Y — a setinha verde que aponta para cima e para baixo; é o eixo da altura.`,
    `Grade (Grid) — o chão quadriculado do Maya que ajuda a alinhar as peças certinho.`,
    `Cenário fechado — quando as quatro paredes cercam o chão e formam um espaço com começo e fim.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Esta aula usa apenas uma forma: o cubo. A ideia central é que um cubo pode virar qualquer parte do cenário só mudando o tamanho dele em cada direção. Achatado vira chão; esticado para cima vira parede. Antes da aula, abra o Maya e crie um cubo: menu superior "Create" → "Polygon Primitives" → "Cube", e clique uma vez na grade. Para mexer no tamanho, use a tecla R (Escala), que mostra cubinhos coloridos nas pontas das setas. Cada cor é uma direção: vermelho é X (largura, esquerda-direita), verde é Y (altura, cima-baixo), azul é Z (profundidade, frente-trás). Treine achatar um cubo puxando o cubinho verde para baixo: pronto, virou chão. Tenha sua cena-modelo (chão mais quatro paredes) salva e aberta para mostrar o destino logo no começo.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento. Mostre no projetor sua cena-modelo: o chão e as quatro paredes. Pergunte: "O que é isto?" Deixe adivinharem (uma piscina, uma sala, uma arena). Relembre a aula passada girando e esticando um cubo na frente deles. Peça que peguem o mapa que desenharam na Aula 2.

15 min — Conteúdo novo guiado. Faça junto com a turma, passo a passo, todos olhando para você. Primeiro o chão: "Create" → "Polygon Primitives" → "Cube", clique na grade. Aperte R e puxe o cubinho verde (Y) para baixo até virar uma placa fina. Depois puxe o vermelho (X) e o azul (Z) para os lados, deixando largo. Pronto: o chão. Mostre que dá para apertar W (Mover) e levar o chão para o centro da grade.

25 min — Mão na massa. Cada criança faz o seu chão e depois as quatro paredes. Para a parede: crie um novo cubo (mesmo caminho), aperte R, puxe o verde (Y) para cima (fica alto) e afine com o vermelho ou azul. Aperte W e encoste a parede na beirada do chão. Repita nos quatro lados. Circule pela sala ajudando um por um. Quem terminar ganha um adesivo.

10 min — Desafio e compartilhar. Desafio: usar a tecla E (Girar) para deixar uma parede um pouquinho torta, como um portão, ou abrir um vão para a "porta". Cada aluno mostra o seu espaço fechado para a turma em uma volta rápida.

## Como explicar para crianças

Use a analogia da caixa de sapato: o fundo é o chão e as laterais são as paredes. Diga: "Vamos pegar um cubo mágico e amassar ele igual uma panqueca para fazer o chão." Para a parede: "Agora pegamos outro cubo e puxamos ele para o céu, deixando fininho igual uma fatia de pão." Chame as setas coloridas de "setinhas mágicas" e ensine a rima: "verde sobe e desce, vermelho vai pro lado, azul vai pra frente". Lembre sempre: a cor verde é a amiga da altura.

## Erros comuns e como ajudar

O erro mais comum é a criança puxar a seta errada e o cubo virar gigante ou sumir; ensine o atalho de desfazer, Ctrl + Z, como o "botãozinho do volta". Outro erro: girar a câmera sem querer e achar que "perdeu" o cubo — peça que apertem a tecla F para o Maya enquadrar a forma de novo. Muitos esquecem de clicar na peça antes de mexer; lembre que a peça precisa ficar com a borda verde brilhante (selecionada). Algumas paredes ficam flutuando acima do chão; oriente a usar W e descer até encostar. Se o cubo ficar fino demais e quase invisível, é só apertar R e engrossar de novo.`,
  exercicios: [
    {
      titulo: `Caça às setinhas mágicas`,
      tipo: `Aquecimento oral e visual`,
      tempo: `5 minutos`,
      guiaProfessor: `Projete um cubo selecionado (tecla R ligada). Aponte para uma seta colorida por vez e pergunte qual direção ela controla. Reforce a rima da cor verde para a altura. É só conversa e apontar, ninguém mexe no mouse ainda.`,
      atividade: `Olhe o cubo na tela. Diga em voz alta: qual cor faz a forma ficar mais ALTA? Qual cor faz ela ficar mais LARGA? Qual vai para FRENTE e para TRÁS?`,
      gabarito: `Verde (eixo Y) deixa mais alta ou mais baixa. Vermelho (eixo X) deixa mais larga, para os lados. Azul (eixo Z) vai para frente e para trás (profundidade).`,
    },
    {
      titulo: `Amassando a panqueca: o chão`,
      tipo: `Prática guiada passo a passo`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto, no mesmo ritmo da turma. Diga cada passo em voz alta e espere todos acompanharem antes de seguir. Confira se cada cubo está selecionado (borda verde) antes de apertar R.`,
      atividade: `Crie um cubo: "Create" → "Polygon Primitives" → "Cube" e clique na grade. Aperte R, puxe o cubinho VERDE para baixo até virar uma placa fina. Puxe o vermelho e o azul para os lados para deixar bem largo. Esse é o seu chão.`,
      gabarito: `O aluno tem uma placa larga e fina no centro da grade. O cubinho verde foi puxado para baixo (altura pequena) e o vermelho e o azul para os lados (base larga). Se ficou um cubo alto, faltou achatar no verde (Y).`,
    },
    {
      titulo: `Puxando a parede para o céu`,
      tipo: `Prática individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Agora cada criança trabalha sozinha, com você circulando. O erro típico é a parede nascer no centro e flutuar; lembre de usar W (Mover) para encostar na beirada do chão. Reforce criar um cubo NOVO, sem mexer no chão.`,
      atividade: `Crie um cubo novo. Aperte R e puxe o VERDE para cima (fica bem alto). Afine a parede puxando o vermelho ou o azul para dentro. Aperte W e empurre a parede até encostar em uma das beiradas do chão.`,
      gabarito: `O aluno tem uma forma alta e fina (uma parede) apoiada na beirada do chão. Altura grande (verde para cima), espessura pequena (vermelho ou azul para dentro) e posição na borda, não no meio.`,
    },
    {
      titulo: `Fechando o mundo: as quatro paredes`,
      tipo: `Desafio de construção`,
      tempo: `10 minutos`,
      guiaProfessor: `Esta é a parte central da entrega. A criança repete a parede mais três vezes até cercar o chão. Incentive olhar o mapa da Aula 2 para decidir o formato. Marque com adesivo quem fechar as quatro. Use F para reenquadrar quem se perder.`,
      atividade: `Faça mais três paredes do mesmo jeito e coloque uma em cada lado do chão, formando um espaço fechado, como uma caixa aberta vista de cima. Compare com o seu mapa: o tamanho está parecido?`,
      gabarito: `O chão fica cercado pelas quatro paredes, uma em cada lado, formando um espaço fechado. Não deve sobrar lado aberto (a menos que o aluno tenha deixado um vão de porta de propósito). A base lembra o desenho do mapa.`,
    },
    {
      titulo: `O portão torto`,
      tipo: `Desafio criativo de extensão`,
      tempo: `5 minutos`,
      guiaProfessor: `Para quem terminou rápido. Apresente a tecla E (Girar) como bônus. O objetivo é criatividade, não perfeição: aceite qualquer ângulo. Quem ainda está nas quatro paredes não precisa fazer este; deixe como prêmio para os mais adiantados.`,
      atividade: `Escolha uma parede, aperte a tecla E (Girar) e gire ela só um pouquinho para abrir uma entrada, como um portão ou uma porta torta no seu cenário.`,
      gabarito: `Uma das paredes aparece girada em um ângulo, criando uma abertura ou um portão inclinado. Qualquer giro leve que sugira uma entrada está correto; o importante é o aluno ter usado a tecla E de propósito.`,
    },
  ],
};
