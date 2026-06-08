import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Construindo minha peça",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Montar o corpo principal da peça no Maya juntando formas básicas, seguindo o plano do papel, até a peça ficar reconhecível e com uma base firme para impressão.`,
  descricao: `Hoje é o grande dia de tirar a peça do papel e construí-la de verdade no Maya. Nas aulas anteriores cada criança desenhou um plano e conheceu a tela do Maya. Agora elas vão usar as formas básicas (cubo, cilindro, esfera) como blocos de montar para erguer o corpo principal do item que vai virar uma peça impressa em 3D de verdade.

A ideia central é simples e poderosa: toda peça grande começa como um monte de formas pequenas juntas. Em vez de modelar tudo de uma vez, a criança escolhe uma forma para cada parte do plano. Se o plano mostra um robô, o corpo pode ser um cubo, a cabeça uma esfera e os braços dois cilindros. A criança cria cada forma, muda o tamanho dela e arrasta para o lugar certo, como quem monta com peças de encaixe.

Nesta aula o foco é o corpo principal: as partes maiores que dão a silhueta da peça. Detalhes pequenos ficam para a próxima aula. O professor vai guiar a turma a criar formas pela prateleira de polígonos (Poly Modeling Shelf) ou pelo menu Create, mover com a ferramenta Move (tecla W), girar com Rotate (tecla E) e redimensionar com Scale (tecla R). O objetivo é que, ao final, a peça já seja reconhecível e fique apoiada e firme sobre a grade do chão.

Por se tratar de uma peça que vai para a impressora, desde já reforçamos a base firme: a peça precisa tocar o chão (grid) e não pode flutuar nem ficar tombada. Pensar na base agora evita dor de cabeça na semana da impressão.`,
  materiais: [
    `Computadores com o Maya já aberto, um por criança, com a cena nova criada e salva`,
    `Projetor ligado na tela do professor para demonstrar cada passo ao vivo`,
    `O plano de peça no papel que cada criança fez na aula anterior, na mesa ao lado do teclado`,
    `Dois ou três exemplos prontos de peças montadas só com formas básicas (um robô, um foguete, um bichinho) para mostrar no projetor`,
    `Cartão com o atalho das ferramentas: W move, E gira, R redimensiona`,
    `Peças de montar físicas (blocos de encaixe) para a analogia do aquecimento`,
  ],
  conceitosChave: [
    `Forma básica — um bloco simples pronto do Maya, como cubo, cilindro ou esfera, que a gente usa para montar coisas maiores.`,
    `Corpo principal — as partes grandes da peça que dão o formato geral; os detalhes pequenos vêm depois.`,
    `Mover (W) — a ferramenta que pega uma forma e arrasta ela para outro lugar usando as setas coloridas.`,
    `Girar (E) — a ferramenta que vira a forma de lado usando os círculos coloridos ao redor dela.`,
    `Redimensionar (R) — a ferramenta que estica ou encolhe a forma puxando os quadradinhos das pontas.`,
    `Grid (grade do chão) — o piso quadriculado da cena onde a peça precisa ficar apoiada para ter base firme.`,
    `Base firme — quando a peça toca bem o chão e não flutua nem tomba, ficando pronta para imprimir em pé.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Hoje só usamos três coisas: criar formas básicas, movê-las e mudar o tamanho delas. Antes da aula, abra o Maya, crie um cubo e treine as três teclas: W (mover), E (girar) e R (redimensionar). Selecione uma forma clicando nela com o botão esquerdo; o que está selecionado fica com a borda verde. Para criar uma forma, use o menu Create no topo, depois Polygon Primitives, e escolha Cube, Cylinder ou Sphere. Existe também a prateleira Poly Modeling no alto da tela, com os ícones das formas, que é mais rápido para as crianças. Lembre que a roda do mouse dá zoom e que segurar Alt com o botão esquerdo gira a câmera ao redor da cena. Salve a cena com Ctrl+S e crie o costume de salvar várias vezes.

## Passo a passo da aula

Aquecimento (10 min): mostre os blocos de montar físicos. Pergunte: como vocês montariam um robô só com esses blocos? Deixe duas crianças montarem rápido. Diga a frase do dia: toda peça grande é feita de formas pequenas juntas. Peça que peguem o plano de papel e marquem com o dedo qual forma combina com cada parte.

Conteúdo novo guiado (15 min): no projetor, abra o Maya. Crie a primeira forma: clique em Create, depois Polygon Primitives, depois Cube. O cubo aparece no centro. Aperte R e mostre os quadradinhos das pontas; puxe um para esticar. Aperte W e mostre as setas coloridas; arraste pela seta verde para subir. Crie um Cylinder do mesmo jeito e posicione ao lado do cubo, como se fosse um braço. Mostre o atalho E para girar o cilindro. Por fim, mostre como deixar a peça apoiada no grid: mova tudo para baixo até a forma tocar o chão quadriculado.

Mão na massa (25 min): cada criança monta o corpo principal da sua peça seguindo o plano. Passe de mesa em mesa. Oriente a fazer uma parte de cada vez: cria a forma, muda o tamanho com R, posiciona com W. Repita até as partes grandes estarem no lugar. Lembre sempre de salvar com Ctrl+S. No fim deste bloco, a peça já deve estar reconhecível.

Desafio e compartilhar (10 min): peça que cada um gire a câmera (Alt e botão esquerdo) e confira se a peça está apoiada no chão. Cada criança mostra a peça em uma frase: o que é e quantas formas usou.

## Como explicar para crianças

Use a linguagem de montar. Diga: cada forma é um bloco de encaixe, e a gente empilha e junta os blocos até virar a sua peça. Compare as três ferramentas com brincadeiras: mover é arrastar, girar é virar de cabeça para baixo, redimensionar é esticar como massinha. Para a base firme, diga que a peça precisa ficar de pé no chão, igual a um boneco que não pode flutuar no ar. Repita a frase do dia sempre que alguém travar.

## Erros comuns e como ajudar

O erro mais comum é criar a forma e não achá-la: ela nasceu pequena ou longe. Ensine a apertar a tecla F com a forma selecionada para a câmera enquadrar nela. Outro erro é mover a câmera achando que move a forma; lembre que mover a câmera é Alt com botão esquerdo, e mover a forma é a tecla W puxando as setas. Muitos arrastam a forma para o lugar errado por puxar pela seta errada; mostre que cada cor é uma direção. Tem quem deixe a peça flutuando: peça para girar a câmera e ver se as formas tocam o grid. Por fim, se a criança apagar algo sem querer, use Ctrl+Z para desfazer. Elogie cada parte que encaixa para manter o ânimo.`,
  exercicios: [
    {
      titulo: `Caça-forma no plano`,
      tipo: `Observação e marcação`,
      tempo: `5 minutos`,
      guiaProfessor: `Aquecimento individual. Entregue o plano de papel da criança e peça para circular cada parte e escrever ao lado qual forma básica combina. Passe rápido conferindo.`,
      atividade: `Pegue o seu plano de peça. Circule cada parte grande e escreva ao lado se ela parece mais um cubo, um cilindro ou uma esfera.`,
      gabarito: `Cada parte deve ter uma forma marcada. Exemplo de robô: corpo igual a cubo, cabeça igual a esfera, braços e pernas iguais a cilindros. Não existe resposta única, mas toda parte grande precisa ter pelo menos uma forma escolhida.`,
    },
    {
      titulo: `Minha primeira forma no lugar`,
      tipo: `Prática guiada no Maya`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto no projetor. Garanta que todos criem a forma pelo menu Create, Polygon Primitives. Verifique que a forma selecionada está com borda verde antes de mover.`,
      atividade: `Crie a forma maior da sua peça usando Create, Polygon Primitives. Aperte R para mudar o tamanho dela e W para arrastá-la até o centro, apoiada no chão quadriculado.`,
      gabarito: `A criança tem uma forma básica visível na cena, com o tamanho ajustado e tocando o grid. A borda fica verde quando a forma está selecionada. Se a forma some, apertar F enquadra a câmera nela.`,
    },
    {
      titulo: `Juntando duas partes`,
      tipo: `Construção passo a passo`,
      tempo: `10 minutos`,
      guiaProfessor: `Circule pelas mesas. Reforce uma parte de cada vez: criar, redimensionar com R, posicionar com W. Lembre de salvar com Ctrl+S ao terminar cada parte.`,
      atividade: `Crie a segunda forma da sua peça. Use R para deixá-la do tamanho certo e W para encaixá-la na primeira forma, no lugar que o plano mostra. Salve com Ctrl+S.`,
      gabarito: `Duas formas básicas estão na cena, encostadas ou encaixadas conforme o plano. Os tamanhos fazem sentido entre si (por exemplo, a cabeça menor que o corpo). A cena foi salva.`,
    },
    {
      titulo: `Girar para encaixar`,
      tipo: `Desafio de posicionamento`,
      tempo: `8 minutos`,
      guiaProfessor: `Use quando a peça tiver partes inclinadas, como braços abertos ou um foguete deitado. Mostre a tecla E e os círculos coloridos. Ajude a girar pouco a pouco.`,
      atividade: `Escolha uma parte da sua peça que precisa ficar virada ou inclinada. Selecione a forma, aperte E e gire usando os círculos coloridos até ela ficar na posição certa do plano.`,
      gabarito: `Pelo menos uma forma foi girada com a ferramenta E e ficou na inclinação prevista no plano, sem ficar tombada por acidente. A peça continua reconhecível e apoiada no chão.`,
    },
    {
      titulo: `Base firme e apresentação`,
      tipo: `Verificação e compartilhamento`,
      tempo: `9 minutos`,
      guiaProfessor: `Encerramento. Peça para girar a câmera com Alt e botão esquerdo e checar se a peça toca o grid. Cada criança mostra a peça em uma frase. Garanta que todos salvem.`,
      atividade: `Gire a câmera segurando Alt com o botão esquerdo e olhe sua peça por baixo. Ela está apoiada no chão sem flutuar nem tombar? Ajuste com W se precisar. Depois mostre sua peça para a turma e diga o que ela é e quantas formas você usou.`,
      gabarito: `A peça toca o grid em uma base firme, não flutua e não está caída de lado. A criança consegue dizer o nome da peça e contar quantas formas básicas usou (em geral de duas a quatro no corpo principal). A cena está salva.`,
    },
  ],
};
