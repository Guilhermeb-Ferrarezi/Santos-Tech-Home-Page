import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Maya na ponta dos dedos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Conhecer a área de trabalho do Maya e ganhar confiança girando a câmera, criando formas básicas e usando as ferramentas de mover, girar e esticar.`,
  descricao: `Nesta aula a criança entra de verdade no Maya pela primeira vez no mês. Antes de construir a peça do plano que ela desenhou no papel, ela precisa sentir o programa nas mãos: saber para onde olhar na tela, como girar a câmera ao redor de um objeto e como criar e mexer em formas simples. É como aprender a segurar o lápis antes de desenhar: a gente brinca com as ferramentas até elas ficarem naturais.

O Maya tem muitos botões, e isso pode assustar. Por isso a aula foca em poucas coisas, repetidas várias vezes. A criança vai aprender a orbitar a câmera (girar em volta do objeto), criar um cubo, uma esfera e um cilindro, e depois usar três ferramentas mágicas: mover (W), girar (E) e esticar/escalar (R). Cada ferramenta mostra setas ou alças coloridas, e a criança aprende que cada cor mexe num caminho diferente.

A grande ideia é a confiança pela repetição. Quanto mais a criança cria e apaga formas, mais ela percebe que errar no Maya não dói: é só apertar Ctrl+Z e voltar. O professor demonstra cada passo no projetor, devagar, e só depois deixa a turma repetir. Ninguém começa a peça final hoje: hoje é dia de brincar e explorar com segurança.

No fim da aula, cada aluno deve conseguir, sozinho, girar a câmera em volta de uma forma, criar as três formas básicas e mover, girar e esticar pelo menos uma delas. Essa base é o que vai permitir, na próxima aula, construir a peça de verdade sem travar nos comandos.`,
  materiais: [
    `Computadores com o Maya já aberto numa cena nova (vazia) antes da aula começar`,
    `Projetor ou TV grande espelhando a tela do professor`,
    `Mouse com três botões para cada aluno (o botão do meio é essencial para girar a câmera)`,
    `Uma cena de exemplo pronta com cubo, esfera e cilindro já criados, para mostrar como ficam`,
    `Folha impressa com o "mapa da tela" do Maya (nomes dos painéis) e as teclas Q, W, E, R`,
    `Crachás ou etiquetas coloridas (vermelho, verde, azul) para lembrar os eixos X, Y e Z`,
  ],
  conceitosChave: [
    `Viewport — é a janela grande no meio da tela do Maya, onde a gente vê e mexe nos objetos em 3D.`,
    `Orbitar a câmera — girar em volta de um objeto para olhar ele de todos os lados, segurando Alt e o botão do meio do mouse.`,
    `Forma básica (primitiva) — peças prontas que o Maya já sabe fazer, como cubo, esfera e cilindro, que viram a base das nossas criações.`,
    `Mover (W) — ferramenta com três setas coloridas que empurra o objeto para os lados, para cima ou para frente.`,
    `Girar (E) — ferramenta com argolas coloridas que vira o objeto, como girar um volante.`,
    `Escalar (R) — ferramenta com cubinhos coloridos que estica ou encolhe o objeto, deixando ele maior ou menor.`,
    `Ctrl+Z (desfazer) — o botão mágico que volta no tempo e desfaz o último erro, então ninguém precisa ter medo de tentar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Precisa só dominar cinco coisas e demonstrá-las devagar: girar a câmera, criar formas, mover, girar e escalar. Antes da aula, abra o Maya em cada computador numa cena nova e vazia. Confirme que todo mouse tem botão do meio (a rodinha que clica), porque sem ele a criança não gira a câmera.

Os nomes que você vai usar: a janela grande do meio chama-se "viewport". O menu de cima com a palavra "Create" serve para criar formas. As teclas de ferramenta são Q (selecionar), W (mover), E (girar) e R (escalar). Para criar formas, o caminho é o menu "Create" → "Polygon Primitives" → e então "Cube", "Sphere" ou "Cylinder". Decore esse caminho, pois você vai repeti-lo bastante.

## Passo a passo da aula

Aquecimento (10 min): com o projetor ligado, mostre a tela vazia do Maya e pergunte "o que vocês veem?". Aponte a viewport, a grade do chão e os menus. Conte que hoje ninguém faz a peça final: hoje é dia de brincar. Faça todos apertarem Alt + botão do meio do mouse e arrastarem para girar a câmera ao redor do centro. Repita "olha, estamos voando em volta!".

Conteúdo novo guiado (15 min): no projetor, vá em "Create" → "Polygon Primitives" → "Cube". Surge um cubo. Repita para "Sphere" e "Cylinder". Agora ensine as três ferramentas, uma de cada vez. Aperte W: aparecem três setas coloridas (vermelha = X, verde = Y, azul = Z). Arraste cada seta e mostre o objeto andando só naquele caminho. Aperte E: aparecem argolas; arraste e o objeto vira. Aperte R: aparecem cubinhos; arraste e o objeto estica. Mostre Ctrl+Z desfazendo cada coisa. Diga: "errou? Ctrl+Z e pronto".

Mão na massa (25 min): cada aluno repete sozinho. Primeiro, todos giram a câmera. Depois, cada um cria um cubo, uma esfera e um cilindro. Em seguida, com a tecla W, movem as formas para que não fiquem amontoadas. Passe nas mesas dizendo a cor da seta para guiar ("puxa a seta verde para subir"). Depois peça para girarem (E) e esticarem (R) cada forma. O objetivo é só sentir as ferramentas, não fazer nada bonito.

Desafio e compartilhar (10 min): proponha "monte um bonequinho de neve" empilhando duas esferas, uma maior embaixo e uma menor em cima, usando mover e escalar. Quem terminar gira a câmera para mostrar dos lados. Cada aluno mostra a tela e diz qual ferramenta achou mais fácil.

## Como explicar para crianças

Use a analogia da câmera como um drone: "a gente não move o objeto, a gente voa em volta dele". Para as ferramentas, fale em cores: "a setinha vermelha leva para o lado, a verde para cima, a azul para frente e para trás". Compare escalar com encher e esvaziar um balão. Lembre sempre que o Ctrl+Z é uma máquina do tempo: ninguém quebra nada no Maya.

## Erros comuns e como ajudar

O erro número um é mover a câmera sem segurar o Alt e clicar fora, perdendo a seleção: mostre que primeiro clica-se no objeto, depois usa-se Alt + botão do meio. Outro erro é apertar W, E ou R sem ter um objeto selecionado, e nada acontecer: peça para clicar na forma antes. Crianças também arrastam o centro do manipulador e movem em todos os eixos de uma vez, ficando perdidas; ensine a clicar só na seta colorida. Por fim, muitas criam formas em cima das outras e acham que sumiu: gire a câmera ou use o mover para separar. Repita o Ctrl+Z sempre que alguém travar.`,
  exercicios: [
    {
      titulo: `Voando em volta`,
      tipo: `Prática guiada`,
      tempo: `5 min`,
      guiaProfessor: `Faça junto no projetor. Garanta que cada aluno está segurando o Alt e o botão do meio do mouse ao mesmo tempo. Quem não tem botão do meio não consegue: troque o mouse.`,
      atividade: `Crie um cubo e gire a câmera em volta dele segurando Alt e o botão do meio do mouse. Olhe o cubo por cima, por baixo e pelos lados.`,
      gabarito: `O aluno consegue orbitar a câmera ao redor do cubo e descrever que está vendo a mesma forma de ângulos diferentes. A combinação correta é Alt + botão do meio do mouse arrastando.`,
    },
    {
      titulo: `Três formas mágicas`,
      tipo: `Prática individual`,
      tempo: `5 min`,
      guiaProfessor: `Relembre o caminho do menu Create no projetor. Passe nas mesas conferindo se cada um criou as três formas separadas, sem ficarem uma dentro da outra.`,
      atividade: `Usando o menu "Create" → "Polygon Primitives", crie um cubo, uma esfera e um cilindro. Use a tecla W para afastar uma da outra.`,
      gabarito: `A cena tem as três primitivas visíveis e separadas: cubo, esfera e cilindro. O caminho correto é Create → Polygon Primitives → Cube/Sphere/Cylinder, e a tecla W move cada uma.`,
    },
    {
      titulo: `Caça às cores`,
      tipo: `Desafio de observação`,
      tempo: `5 min`,
      guiaProfessor: `Aperte W com o aluno e pergunte qual cor leva para cada lado. Reforce: vermelho é X (lado), verde é Y (cima), azul é Z (frente e trás).`,
      atividade: `Selecione uma forma, aperte W e descubra: qual cor de seta sobe a forma? Qual leva para o lado? Qual joga para frente e para trás?`,
      gabarito: `Verde (eixo Y) sobe e desce, vermelho (eixo X) vai para os lados, azul (eixo Z) vai para frente e para trás. O aluno aponta a cor certa para cada direção.`,
    },
    {
      titulo: `Gira e estica`,
      tipo: `Prática com erro permitido`,
      tempo: `6 min`,
      guiaProfessor: `Mostre que E gira (argolas) e R estica (cubinhos). Incentive errar e usar Ctrl+Z. Se a forma sumir esticada demais, ensine a desfazer.`,
      atividade: `Pegue o cilindro. Use a tecla E para girá-lo deitado e a tecla R para deixá-lo bem fininho e comprido. Se errar, aperte Ctrl+Z.`,
      gabarito: `O cilindro aparece girado (deitado) e esticado num formato fino e comprido. O aluno usa E para girar, R para escalar e Ctrl+Z para desfazer quando passa do ponto.`,
    },
    {
      titulo: `Boneco de neve`,
      tipo: `Desafio criativo`,
      tempo: `8 min`,
      guiaProfessor: `Este é o desafio final, mais difícil porque junta criar, mover e escalar. Ajude a empilhar usando a seta verde (Y) e a deixar a esfera de cima menor com o R. No fim, peça para girarem a câmera e mostrarem.`,
      atividade: `Crie duas esferas. Deixe uma maior embaixo e use R para encolher a outra. Com W (seta verde), empilhe a menor em cima da maior, formando um boneco de neve. Gire a câmera para mostrar.`,
      gabarito: `Há duas esferas empilhadas: a de baixo maior e a de cima menor, alinhadas no eixo Y, formando um boneco de neve. O aluno usou Create para as esferas, R para encolher a de cima e W (seta verde) para empilhar, e consegue orbitar a câmera para apresentar.`,
    },
  ],
};
