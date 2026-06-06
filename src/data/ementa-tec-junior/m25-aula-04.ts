import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Dando forma ao meu modelo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Acrescentar as partes que faltam ao personagem ou objeto e ajustar a silhueta com as ferramentas de apagar e mover, até o modelo voxel ficar reconhecível e bem proporcionado.`,
  descricao: `Nas aulas anteriores cada criança escolheu o seu personagem ou objeto e começou a construí-lo com cubinhos no MagicaVoxel. Agora chegou a hora mais divertida: dar forma de verdade ao modelo. Nesta aula os alunos vão olhar para a base que já construíram e perguntar "o que está faltando aqui?". Pode ser uma cabeça, dois braços, duas pernas, um rabo, orelhas ou qualquer detalhe que ajude a reconhecer o que eles criaram.

A ideia central é que modelar em 3D não é acertar tudo de primeira. A gente constrói, olha de longe, percebe que algo está torto ou pequeno demais, e então corrige. Por isso esta aula trabalha muito com duas ferramentas que as crianças já viram um pouco: a borracha (Erase), para tirar cubinhos que ficaram sobrando, e o mover (Move), para empurrar partes inteiras para o lugar certo. É um vai e volta entre adicionar, apagar e ajustar.

O grande conceito do dia é silhueta e proporção. A silhueta é o contorno do modelo, aquela sombrinha que a gente reconhece mesmo sem ver as cores. Se a silhueta já parece um gato, um robô ou uma árvore, o modelo está no caminho certo. A proporção é o tamanho das partes em relação umas às outras: uma cabeça gigante num corpo minúsculo fica engraçado, mas pode não ser o que a criança queria. O professor ajuda cada aluno a girar o modelo, olhar de vários ângulos e decidir o que cresce, o que diminui e o que muda de lugar.

Ao final da aula cada criança terá um modelo muito mais completo e reconhecível do que no início, com as partes principais no lugar. Não precisa estar pintado nem cheio de detalhes finos: isso vem nas próximas aulas. O objetivo aqui é a forma. Se um colega olhar de longe e disser "ah, é um dragão!", a missão foi cumprida.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto e o projeto de cada aluno salvo da aula anterior`,
    `Projetor ou TV grande para o professor demonstrar onde clicar`,
    `Dois ou três modelos voxel prontos como exemplo (um personagem com cabeça, braços e pernas; um objeto simples)`,
    `Folhas de papel e lápis para as crianças desenharem rapidinho a silhueta que querem alcançar`,
    `Cartão ou placa com os nomes das ferramentas Attach, Erase e Move bem grandes`,
    `Cronômetro ou timer visível para marcar os blocos de tempo da aula`,
  ],
  conceitosChave: [
    `Voxel — é o cubinho 3D, a peça de montar do nosso mundo digital. Vários voxels juntos formam o modelo.`,
    `Silhueta — é o contorno do modelo, a sombrinha dele. Se você reconhece o desenho só pela borda, a silhueta está boa.`,
    `Proporção — é o tamanho de cada parte comparado com as outras. A cabeça é grande ou pequena perto do corpo? Isso é proporção.`,
    `Apagar (Erase) — é a borracha do MagicaVoxel. Serve para tirar cubinhos que ficaram sobrando ou no lugar errado.`,
    `Mover (Move) — é empurrar uma parte inteira do modelo para outro lugar sem ter que apagar e construir de novo.`,
    `Girar a câmera — é virar o modelo na tela para ver de cima, de baixo, de frente e de lado, e descobrir o que precisa de conserto.`,
    `Modelo reconhecível — é quando alguém olha e adivinha o que é sem você precisar contar. Esse é o nosso objetivo do dia.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista 3D para dar esta aula. Precisa apenas dominar três ferramentas do MagicaVoxel e saber girar a câmera. No MagicaVoxel, o painel de ferramentas fica do lado esquerdo da tela. Ali você vê os botões "Attach" (adicionar voxel), "Erase" (apagar voxel) e "Move" (mover). Em cima também há os modos "Box", "Line", "Center" e outros, que mudam como a ferramenta funciona; nesta aula use sempre o modo simples, clicando voxel por voxel, e o modo "Box" só quando quiser preencher um bloco inteiro. Para girar a câmera, segure o botão direito do mouse e arraste. Para dar zoom, use a rodinha do mouse. Treine isso uma vez antes da aula para fazer com naturalidade.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Abra um modelo de exemplo no projetor. Gire-o com o botão direito do mouse na frente das crianças e pergunte "o que é isto?". Mostre que dá pra reconhecer pela silhueta. Depois peça que cada criança abra o próprio projeto e gire a câmera para lembrar onde parou. Pergunte a cada uma: "o que está faltando no seu?".

Conteúdo novo guiado (15 min): No exemplo do projetor, demonstre os três passos do dia. Primeiro, clique em "Attach" e adicione uma parte que falta, por exemplo uma cabeça, clicando cubinho por cubinho em cima do corpo. Segundo, clique em "Erase" e apague um cubinho que ficou saliente, mostrando que apagar também dá forma. Terceiro, clique em "Move", clique na seta colorida (vermelha, verde ou azul) que aparece sobre o modelo e arraste para empurrar uma parte inteira para o lugar. Repita devagar e nomeie cada botão em voz alta.

Mão na massa (25 min): As crianças trabalham nos próprios modelos. Circule pela sala. O objetivo é cada uma acrescentar pelo menos duas partes que faltavam (cabeça, braços, pernas, orelhas, rabo) e usar Erase e Move para ajustar. Incentive a girar a câmera o tempo todo para conferir todos os lados. Lembre que não é pra pintar agora, só dar forma.

Desafio e compartilhar (10 min): Lance o desafio "silhueta misteriosa": cada criança gira o próprio modelo de costas para o colega ao lado e o colega tenta adivinhar o que é só pelo contorno. Depois, dois ou três voluntários mostram no projetor. Elogie a forma e aponte uma proporção bem feita em cada um.

## Como explicar para crianças

Use a analogia do boneco de massinha: "primeiro a gente faz uma bolota, depois vai puxando os bracinhos e as perninhas". Aqui é igual, só que com cubinhos. Fale que a silhueta é "a sombra do seu modelo na parede" e que, se a sombra já parece um gato, está ótimo. Para proporção, brinque: "se a cabeça for do tamanho de uma melancia e o corpo do tamanho de uma uva, fica esquisito, né?". Repita sempre o convite "gira o seu modelo e olha de todos os lados, igual a gente olha um brinquedo na mão".

## Erros comuns e como ajudar

O erro mais comum é a criança adicionar voxels no ar, longe do modelo, porque clicou num plano de fundo. Mostre que o cubinho gruda na face de outro cubinho; se grudou no lugar errado, é só usar "Erase". Outro erro é esquecer de girar a câmera e construir só de um lado, deixando o modelo "achatado"; passe de mesa em mesa girando o modelo junto com a criança. Muitos confundem "Move" com "Attach" e acabam criando partes novas sem querer; reforce que para empurrar usamos a seta colorida do Move. Por fim, alguns querem apagar tudo e recomeçar a cada tropeço; acalme dizendo que ajustar é normal e que apagar um pedacinho já resolve.`,
  exercicios: [
    {
      titulo: `Caça à parte que falta`,
      tipo: `Observação e oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no início, ainda no aquecimento. Peça que cada criança gire o próprio modelo com o botão direito do mouse e diga em voz alta uma parte que está faltando. Anote no quadro as respostas para virarem a lista de tarefas do dia.`,
      atividade: `Olhe bem para o seu modelo, gire ele de todos os lados e descubra: qual é a parte mais importante que está faltando? Fale em voz alta para a turma.`,
      gabarito: `Não há resposta única. Respostas válidas são partes coerentes com o modelo de cada um, como cabeça, braços, pernas, orelhas, rabo, base ou cauda. O importante é a criança identificar pelo menos uma parte ausente e justificar olhando o próprio modelo.`,
    },
    {
      titulo: `Colocando a cabeça no lugar`,
      tipo: `Prática guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor. Garanta que a ferramenta "Attach" esteja selecionada no painel esquerdo. Mostre que o cubinho gruda na face do voxel de cima. Circule conferindo se alguém está clicando no vazio.`,
      atividade: `Selecione a ferramenta Attach e adicione a cabeça (ou a parte de cima) do seu modelo, clicando cubinho por cubinho em cima do corpo. Gire a câmera para conferir se a cabeça está centralizada.`,
      gabarito: `O aluno termina com a parte de cima construída e apoiada no corpo, sem voxels soltos no ar. A cabeça deve estar mais ou menos centralizada sobre o corpo quando girada de frente. Pequenas tortuosidades são aceitáveis e serão ajustadas no exercício seguinte.`,
    },
    {
      titulo: `Borracha mágica: limpando o contorno`,
      tipo: `Prática com correção`,
      tempo: `6 minutos`,
      guiaProfessor: `Reforce que apagar também dá forma. Mostre o botão "Erase" e como cada clique remove um cubinho. Oriente a criança a girar e procurar cubinhos saltados antes de apagar, para não tirar uma peça importante.`,
      atividade: `Selecione a ferramenta Erase e apague os cubinhos que ficaram sobrando ou saltados para fora da silhueta. Gire o modelo e deixe o contorno mais limpo e arredondado.`,
      gabarito: `O modelo fica com a silhueta mais limpa, sem cubinhos isolados ou saltando para fora da forma principal. O aluno deve ter removido ao menos um voxel sobrando. Se apagou algo importante por engano, deve perceber e reconstruir com Attach.`,
    },
    {
      titulo: `Empurra-empurra com o Move`,
      tipo: `Prática avançada`,
      tempo: `7 minutos`,
      guiaProfessor: `Esta é a parte mais difícil. Demonstre o "Move", mostre as três setas coloridas (vermelha, verde e azul) e explique que cada uma move numa direção. Clique na seta e arraste devagar. Avise que se uma parte sumiu, é só arrastar de volta.`,
      atividade: `Selecione a ferramenta Move e empurre uma parte do seu modelo que está fora de lugar, por exemplo um braço muito alto ou uma perna torta. Use as setas coloridas para deixar tudo proporcional.`,
      gabarito: `O aluno consegue deslocar uma parte do modelo usando as setas do Move, deixando as partes mais alinhadas e proporcionais. Espera-se que braços, pernas ou detalhes fiquem em posições simétricas e coerentes. Erros de direção são esperados; o importante é o aluno corrigir arrastando de volta.`,
    },
    {
      titulo: `Silhueta misteriosa`,
      tipo: `Desafio e compartilhar`,
      tempo: `5 minutos`,
      guiaProfessor: `Use no fechamento. Forme duplas. Cada criança gira o modelo para o colega ver só o contorno. Se o colega adivinhar, a silhueta está boa. Termine com dois ou três modelos no projetor, elogiando forma e proporção.`,
      atividade: `Mostre o seu modelo girando para o colega do lado e deixe ele adivinhar o que é só olhando o contorno. Depois troquem: você adivinha o dele. Se precisar, ajuste a forma para ficar mais fácil de reconhecer.`,
      gabarito: `O colega consegue identificar corretamente o personagem ou objeto apenas pela silhueta, sem dicas verbais. Se não conseguir, o aluno usa Attach, Erase ou Move para reforçar as partes que faltam, deixando o modelo mais reconhecível. O sucesso é o modelo ser adivinhado pelo contorno.`,
    },
  ],
};
