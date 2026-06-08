import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Primeiras Formas no Blender",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Cada criança coloca os primeiros blocos e formas básicas no Blender para começar a montar o corpo principal da peça que planejou.`,
  descricao: `Nas duas primeiras aulas do mês, cada criança imaginou um brinquedo e desenhou o plano da peça no papel. Agora chegou o momento mais esperado: dar vida a esse desenho dentro do computador! Nesta aula, abrimos o Blender e usamos as formas básicas (cubo, cilindro e esfera) como se fossem peças de montar gigantes. A ideia não é fazer tudo perfeito hoje, e sim colocar os pedaços principais no lugar, formando o "esqueletão" da peça.

O Blender é o programa que vamos usar para modelar em 3D de verdade. Ele tem três botões mágicos que já vimos no Ano 2 e que hoje vamos revisar com carinho: mover (mexer a peça de lugar), girar (virar a peça) e escalar (aumentar ou diminuir o tamanho). Com esses três poderes, a criança consegue transformar um cubo comum no corpo de um robô, no tronco de um bichinho ou na base de um carrinho. É como brincar de massinha, só que dentro da tela.

O segredo desta aula é a calma e o capricho. Modelar para impressão 3D pede atenção: cada bloco precisa estar bem encaixado, sem flutuar no ar e sem furar o outro de qualquer jeito. Por isso o professor vai demonstrar cada passo no projetor antes de soltar a turma para a mão na massa. As crianças seguem o plano de papel ao lado do teclado, como um mapa do tesouro, e vão adicionando uma forma de cada vez.

No fim da aula, ninguém precisa ter a peça pronta. O combinado é simples: o corpo principal já deve existir na tela, com pelo menos duas ou três formas no lugar certo. As próximas aulas servem para montar com mais capricho, lixar os cantos e dar os detalhes. Hoje plantamos a semente da peça que vai virar brinquedo de verdade na impressora 3D.`,
  materiais: [
    `Computadores com o Blender já aberto em uma cena nova (um por criança)`,
    `Projetor ou TV ligada no computador do professor para demonstrar cada passo`,
    `Plano da peça em papel que cada criança fez na Aula 2 (o "mapa" do que vão modelar)`,
    `Exemplos prontos no Blender: um robozinho e um carrinho feitos só com cubos, cilindros e esferas`,
    `Mouse com rodinha para cada criança (ajuda muito a girar a câmera e dar zoom)`,
    `Cartaz na parede com os três poderes: Mover (G), Girar (R) e Escalar (S)`,
    `Adesivos ou estrelinhas para premiar quem encaixar bem as formas`,
  ],
  conceitosChave: [
    `Forma básica — um bloco pronto que o Blender já tem, como cubo, cilindro e esfera, que serve de "tijolo" para construir.`,
    `Objeto — cada pedaço que você coloca na cena; cada cubo ou esfera é um objeto separado que dá para mexer sozinho.`,
    `Mover (G) — empurrar a forma para outro lugar, como arrastar uma peça de montar pela mesa.`,
    `Girar (R) — virar a forma de lado ou de ponta-cabeça, como rodar um brinquedo na mão.`,
    `Escalar (S) — esticar ou encolher a forma para deixá-la maior ou menor.`,
    `Eixos X, Y e Z — as três setinhas coloridas (vermelha, verde e azul) que mostram para qual lado a forma vai mexer.`,
    `Viewport — a janela grande do Blender onde a gente vê a cena em 3D e constrói tudo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser mestre em Blender para dar esta aula, só conhecer cinco coisas. Primeiro: para adicionar uma forma, vá no menu de cima "Add" (Adicionar) e escolha "Mesh" (Malha), depois "Cube" (Cubo), "Cylinder" (Cilindro) ou "UV Sphere" (Esfera). Segundo: as teclas mágicas. Aperte "G" para mover, "R" para girar e "S" para escalar; depois mexa o mouse e clique para confirmar. Terceiro: para travar o movimento em um sentido, aperte a tecla e em seguida X, Y ou Z. Quarto: para apagar um objeto, clique nele e aperte "X" e confirme em "Delete". Quinto: gire a câmera segurando o botão do meio do mouse (a rodinha) e dê zoom rolando a rodinha. Abra o Blender e teste cada coisa uma vez antes da turma chegar. Deixe a cena nova já aberta em todos os computadores para não perder tempo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma e mostre no projetor os dois exemplos prontos, o robozinho e o carrinho. Pergunte: "Vocês veem que isso é tudo feito de cubos e bolinhas?". Aponte cada forma. Em seguida, faça uma revisão rápida dos três poderes no seu Blender: clique no cubo, aperte "G" e mova; aperte "R" e gire; aperte "S" e aumente. Peça que cada criança imite no próprio computador, só para aquecer os dedos.

Conteúdo novo guiado (15 min): demonstre como adicionar uma forma do zero. No projetor, clique em "Add" no canto de cima da viewport, depois "Mesh" e "Cube". O cubo aparece no centro. Mostre as setinhas coloridas (eixos X vermelho, Y verde, Z azul) e explique que aperte "G" depois "Z" sobe e desce a forma. Adicione um cilindro do lado pelo mesmo caminho. Mostre como escalar só a altura: "S", depois "Z", depois mexa o mouse. Vá devagar, repita os nomes dos botões em voz alta.

Mão na massa (25 min): cada criança pega o plano de papel da Aula 2 e começa a montar o corpo principal. Oriente a colocar uma forma de cada vez: primeiro o pedaço maior (o tronco ou a base), depois encaixar as outras. Circule pela sala ajudando quem trava. A meta é ter pelo menos duas ou três formas no lugar certo. Lembre sempre: "Sem pressa, capricho primeiro".

Desafio e compartilhar (10 min): proponha o desafio de girar a câmera com a rodinha e olhar a peça por baixo, para ver se nada está flutuando. Depois, cada criança mostra a tela para o colega do lado e conta o que já construiu.

## Como explicar para crianças

Use a analogia das peças de montar: "O cubo é seu tijolo, o cilindro é um cano e a esfera é uma bolinha. A gente junta tudo igual brinquedo de encaixe". Chame as teclas de "poderes": o poder de empurrar (G), o poder de girar (R) e o poder de crescer (S). Para os eixos, diga "as setinhas coloridas mostram o caminho da forma, igual trilho de trem". Repita bastante e sempre mostre antes de pedir.

## Erros comuns e como ajudar

O erro mais comum é a criança apertar a tecla e mover o mouse sem clicar para confirmar, deixando a forma "grudada" no cursor; basta clicar com o botão esquerdo para soltar, ou apertar Esc para cancelar. Outro erro é escalar a forma inteira quando queria só a altura; lembre de apertar o eixo (S e depois Z) logo após a tecla. Muitas crianças "perdem" a forma porque o zoom afastou demais; ensine a apertar a tecla Home para enquadrar tudo de novo. Há quem adicione cinco cubos sem querer; mostre o atalho de apagar (X e Delete) e o de desfazer (Ctrl+Z), que salva vidas. Por fim, formas flutuando no ar: incentive girar a câmera por baixo para conferir o encaixe.`,
  exercicios: [
    {
      titulo: `Os três poderes`,
      tipo: `Revisão guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça junto no projetor. Clique no cubo inicial e peça que a turma repita cada poder com você, um de cada vez, sem pressa.`,
      atividade: `Clique no cubo que já está na cena. Aperte "G" e mova o cubo para o lado, clique para confirmar. Aperte "R" e gire um pouquinho, clique. Aperte "S" e deixe o cubo maior, clique.`,
      gabarito: `O cubo deve aparecer fora do centro (movido), um pouco inclinado (girado) e maior que o tamanho original (escalado). Os três poderes são: G para mover, R para girar e S para escalar.`,
    },
    {
      titulo: `Caçando as formas`,
      tipo: `Identificação`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre os exemplos prontos do robozinho e do carrinho no projetor. Aponte e pergunte qual forma básica é cada pedaço.`,
      atividade: `Olhe o robozinho e o carrinho na tela do professor. Aponte e diga em voz alta: qual pedaço é cubo? Qual é cilindro? Qual é esfera?`,
      gabarito: `No robozinho: o tronco e a cabeça são cubos, os braços e pernas são cilindros, e os olhos são esferas. No carrinho: a base é um cubo e as quatro rodas são cilindros. Pode haver pequenas variações, o importante é reconhecer as três formas básicas.`,
    },
    {
      titulo: `Adicionando minha primeira forma`,
      tipo: `Prática guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre o caminho do menu no projetor antes. Repita os nomes "Add", "Mesh", "Cube" em voz alta enquanto as crianças seguem.`,
      atividade: `Clique em "Add" no canto de cima da viewport. Escolha "Mesh" e depois "Cube". Quando o cubo aparecer, aperte "G" e depois "Z" para subir o cubo um pouquinho. Clique para confirmar.`,
      gabarito: `Um novo cubo deve aparecer na cena e estar um pouco acima do centro. O caminho correto é Add depois Mesh depois Cube, e a sequência G depois Z move só para cima e para baixo (eixo Z, a setinha azul).`,
    },
    {
      titulo: `Montando o corpo principal`,
      tipo: `Mão na massa`,
      tempo: `25 minutos`,
      guiaProfessor: `Cada criança usa o plano de papel da Aula 2. Circule pela sala. Incentive uma forma de cada vez, começando pela maior. Lembre de salvar com Ctrl+S no fim.`,
      atividade: `Olhe seu plano no papel. Adicione a forma maior primeiro (o tronco ou a base) usando Add, Mesh. Depois adicione mais duas ou três formas e use G, R e S para encaixar cada uma no lugar certo, seguindo o seu desenho.`,
      gabarito: `A cena deve ter pelo menos três formas básicas montadas formando o corpo principal da peça planejada, com as formas encaixadas e sem grandes espaços flutuando. Não precisa estar perfeito nem completo; o objetivo é o esqueletão da peça começar a existir.`,
    },
    {
      titulo: `Olhando por baixo`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Ensine a girar a câmera segurando o botão do meio (rodinha) do mouse. Ajude quem se perder a usar a tecla Home para enquadrar tudo de novo.`,
      atividade: `Segure o botão do meio do mouse (a rodinha) e gire a câmera para olhar sua peça por baixo e por trás. Procure alguma forma que esteja flutuando no ar ou solta. Se achar, use "G" e depois "Z" para baixar a forma e encaixar direitinho.`,
      gabarito: `A criança deve conseguir girar a câmera e inspecionar a peça de vários ângulos. Toda forma que estava flutuando deve ser baixada com G depois Z até encostar nas outras. A peça fica encaixada, sem pedaços soltos no ar, pronta para a próxima aula de montagem.`,
    },
  ],
};
