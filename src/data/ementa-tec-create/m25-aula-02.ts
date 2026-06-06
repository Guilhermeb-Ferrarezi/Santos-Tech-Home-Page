import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Dominando o Espaço 3D",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ganhar fluidez para mover, rotacionar e escalar objetos com precisão no Maya, usando os manipuladores, o grid, o snapping, o controle de pivô e a duplicação.`,
  descricao: `Nesta aula o aluno deixa de apenas "mexer" nos objetos e passa a controlá-los com precisão. No Maya, todo objeto vive em um espaço 3D com três direções: X (esquerda e direita), Y (para cima e para baixo) e Z (para frente e para trás). Dominar esse espaço é a base para modelar com agilidade nas próximas semanas, quando o aluno vai montar os assets do jogo.

Na Aula 1 o aluno reencontrou o Maya e relembrou a interface. Agora ele vai treinar de verdade as três transformações fundamentais: mover (tecla W), rotacionar (tecla E) e escalar (tecla R). Cada uma mostra um manipulador colorido na tela, com setas e alças coloridas: vermelho é X, verde é Y e azul é Z. Aprender a ler essas cores é o que separa o aluno que arrasta objetos no chute do aluno que posiciona tudo no lugar certo.

A aula também apresenta o grid (a grade do chão) e o snapping, que faz o objeto "grudar" em pontos exatos da grade, como um ímã. Com o snapping ligado, dá para alinhar peças perfeitamente, sem ficar tremendo o mouse. Outro conceito importante é o pivô: o ponto em torno do qual o objeto gira. Mudar o pivô muda completamente o resultado de uma rotação, então o aluno aprende a colocá-lo onde faz sentido. Por fim, a duplicação (Ctrl+D) permite copiar um objeto já ajustado, economizando tempo.

O foco do mês é modelar os assets do jogo, e o entregável são os primeiros assets 3D. Esta aula não produz um asset final, mas constrói a habilidade técnica que todas as próximas aulas vão exigir: precisão e velocidade ao transformar objetos. Ao fim da hora, o aluno deve conseguir pegar um cubo e colocá-lo exatamente onde quiser, no tamanho certo e na rotação certa, sem hesitar.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e funcionando (um por aluno)`,
    `Mouse com três botões e scroll (essencial para orbitar, dar zoom e navegar na cena 3D)`,
    `Projetor ou TV para o professor demonstrar as transformações em tela grande`,
    `Arquivo de exemplo .mb ou .ma com alguns cubos espalhados e desalinhados, para os alunos praticarem o alinhamento`,
    `Imagem ou slide com o esquema das cores dos eixos (X vermelho, Y verde, Z azul)`,
    `Folha impressa com o resumo das teclas de atalho (W mover, E rotacionar, R escalar, D inserir, X snap ao grid)`,
  ],
  conceitosChave: [
    `Eixos X, Y e Z — as três direções do espaço 3D: X é esquerda/direita (vermelho), Y é cima/baixo (verde) e Z é frente/trás (azul).`,
    `Manipulador — o controle colorido com setas e alças que aparece no objeto selecionado e permite mover, rotacionar ou escalar.`,
    `Transformação — qualquer mudança de posição, rotação ou tamanho de um objeto; as três básicas são mover, rotacionar e escalar.`,
    `Grid — a grade do chão da cena, usada como referência de medida e alinhamento.`,
    `Snapping — recurso que faz o objeto "grudar" em pontos exatos, como o grid; funciona como um ímã para alinhar com precisão.`,
    `Pivô (pivot) — o ponto central em torno do qual o objeto gira e escala; mudar o pivô muda o resultado da rotação.`,
    `Duplicação — criar uma cópia idêntica de um objeto já ajustado, com o atalho Ctrl+D, para economizar tempo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Precisa dominar cinco atalhos e o esquema de cores dos eixos. Os atalhos são: W move, E rotaciona, R escala e Q volta para a seta de seleção (sem transformar). Ao selecionar um objeto e apertar uma dessas teclas, aparece um manipulador colorido. As cores são sempre as mesmas em programas 3D: vermelho é o eixo X (esquerda/direita), verde é o eixo Y (cima/baixo) e azul é o eixo Z (frente/trás). Para arrastar só em uma direção, o aluno clica e segura a alça da cor daquele eixo. Decore também: a tecla X (segurada enquanto se move) liga o snap ao grid, fazendo a peça pular de quadradinho em quadradinho; e Ctrl+D duplica o objeto selecionado. Antes da aula, abra o Maya, crie um cubo (menu "Create", "Polygon Primitives", "Cube") e pratique mover, girar e escalar pelas alças coloridas até ficar natural.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Abra o Maya na tela grande e relembre a Aula 1: a interface e como criar um cubo. Crie um cubo e pergunte: "Como eu movo isso para o lado?" Mostre que arrastar no escuro é impreciso. Apresente o desafio do dia: aprender a posicionar com precisão total.

15 min, conteúdo novo guiado. Selecione o cubo e aperte W. Mostre o manipulador de mover, com as três setas coloridas. Explique as cores: clique e arraste a seta vermelha (X) e o cubo só anda para os lados; a verde (Y) sobe e desce; a azul (Z) vai para frente e para trás. Aperte E para rotacionar: aparecem três círculos coloridos; arraste o vermelho e o cubo gira no eixo X. Aperte R para escalar: aparecem alças quadradas; arraste a vermelha e o cubo estica no X, arraste o cubinho central (amarelo) e ele cresce por igual. Agora mostre o snapping: segure a tecla X e mova o cubo; ele pula de quadradinho em quadradinho do grid, alinhando certinho. Por fim, mostre a duplicação: com o cubo selecionado, aperte Ctrl+D e mova a cópia para o lado.

25 min, mão na massa. Cada aluno abre o arquivo de exemplo com cubos desalinhados. Tarefa: alinhar todos os cubos em uma fileira reta sobre o grid, usando W com a tecla X (snap) para grudar na grade. Depois, escalar um dos cubos para ficar o dobro do tamanho usando R pelo cubinho central. Em seguida, rotacionar outro cubo em 45 graus usando E. Por fim, duplicar um cubo com Ctrl+D e formar uma escadinha. Circule lembrando as cores dos eixos e o uso da tecla X para alinhar.

10 min, desafio e compartilhar. Desafio: montar uma "torre" empilhando quatro cubos perfeitamente alinhados usando snap. Quem terminar, duplica a torre inteira com Ctrl+D. Faça uma rodada rápida: cada aluno mostra ao colega do lado a peça que conseguiu alinhar com mais precisão.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de cores como mapa: "Vermelho é X, verde é Y, azul é Z. Sempre. Decore como as cores de um controle." Para o snapping, diga: "É um ímã. Segure a tecla X e o cubo gruda na grade sozinho, sem você precisar acertar no olho." Para o pivô: "É o pino onde a peça gira, como o prego de um cata-vento. Se o pino estiver no canto, a peça gira diferente de quando ele está no meio." Para a duplicação: "É um Ctrl+C e Ctrl+V do mundo 3D: copia o objeto pronto para você não refazer." Conecte sempre ao jogo: "No seu jogo você vai precisar de várias caixas iguais; duplicar é como uma fábrica."

## Erros comuns e como ajudar

O erro mais comum é arrastar o manipulador pelo centro e bagunçar dois eixos ao mesmo tempo; ensine a clicar exatamente na alça da cor desejada. Muitos confundem mover com escalar; lembre que W move (setas) e R muda o tamanho (alças quadradas). Há quem esqueça de selecionar o objeto antes de apertar a tecla e nada aparece; reforce clicar na peça primeiro. Outro erro é não conseguir alinhar e tentar no chute; mostre de novo a tecla X (snap) segurada durante o movimento. Se o objeto sumir da tela, ensine a apertar F com a peça selecionada para a câmera focar nela. Por fim, se a rotação parecer "errada", o problema costuma ser o pivô fora do centro; mostre onde fica o pivô e como ele afeta o giro.`,
  exercicios: [
    {
      titulo: `Caça-cores dos eixos`,
      tipo: `observação e prática`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha um cubo na cena. Peça que apertem W e identifiquem cada seta colorida. Reforce que vermelho é X, verde é Y e azul é Z. Circule conferindo.`,
      atividade: `Crie um cubo no Maya. Aperte a tecla W para ver o manipulador de mover. Sem mexer ainda, identifique e diga em voz alta: qual seta é o eixo X, qual é o Y e qual é o Z. Depois, mova o cubo só para cima usando a seta correta.`,
      gabarito: `O aluno deve dizer: vermelho é X (esquerda/direita), verde é Y (cima/baixo) e azul é Z (frente/trás). Para mover o cubo só para cima, deve clicar e arrastar a seta verde (Y). Se o cubo se mover para os lados ou para frente, o aluno pegou a alça errada e deve corrigir clicando na seta verde.`,
    },
    {
      titulo: `Alinhando os cubos com o ímã (snap)`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Abra o arquivo de exemplo com cubos desalinhados em cada computador. Demonstre uma vez segurar a tecla X enquanto move um cubo, mostrando ele grudar no grid. Lembre da cor dos eixos para mover em linha reta.`,
      atividade: `No arquivo de exemplo, coloque todos os cubos em uma fileira reta sobre o grid. Para cada cubo: aperte W, segure a tecla X (snap ao grid) e arraste pela seta vermelha (X) para grudar na grade certinho. O objetivo é uma fileira alinhada, sem cubos tortos.`,
      gabarito: `Todos os cubos devem ficar em uma linha reta, alinhados com a grade do grid, igualmente espaçados. Caminho correto: selecionar o cubo, apertar W, segurar a tecla X durante o movimento e arrastar pela alça vermelha (eixo X). O resultado certo é a fileira sem nenhum cubo flutuando ou fora da grade. Se algum cubo estiver torto, o aluno esqueceu de segurar a tecla X.`,
    },
    {
      titulo: `Escalar e rotacionar com precisão`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre a diferença entre escalar pelo cubinho central (cresce por igual) e por uma alça colorida (estica em um eixo). Para a rotação, ensine a usar o canal Rotate Y na aba Channel Box para digitar 45 e ter precisão. Circule conferindo.`,
      atividade: `Escolha um cubo e deixe-o o dobro do tamanho: aperte R e arraste o cubinho central (amarelo) para crescer por igual. Escolha outro cubo e gire-o 45 graus no eixo Y: aperte E e arraste o círculo verde, ou digite 45 no campo "Rotate Y" na aba Channel Box, à direita da tela.`,
      gabarito: `O primeiro cubo deve ficar maior, com o dobro do tamanho original e proporções iguais (não esticado), feito com R pelo cubinho central. O segundo cubo deve estar girado 45 graus no eixo Y; o jeito mais preciso é digitar 45 no campo "Rotate Y" do Channel Box. Resultado esperado: um cubo grande e por igual, e outro virado em diagonal de 45 graus.`,
    },
    {
      titulo: `Duplicar e montar uma escadinha`,
      tipo: `em dupla`,
      tempo: `13 minutos`,
      guiaProfessor: `Forme duplas. Ensine Ctrl+D para duplicar o cubo selecionado. A estratégia é: ajustar um cubo, duplicar e mover a cópia um degrau para cima e para o lado. Reforce o uso do snap (tecla X) para manter o alinhamento.`,
      atividade: `Em dupla, montem uma escadinha de quatro degraus. Comecem com um cubo no chão. Aperte Ctrl+D para duplicar, depois mova a cópia um pouco para cima (seta verde, Y) e um pouco para o lado (seta vermelha, X). Repitam até ter quatro cubos formando degraus que sobem.`,
      gabarito: `O resultado deve ser quatro cubos formando degraus que sobem na diagonal, cada um mais alto e mais para o lado que o anterior. Caminho correto: selecionar o cubo, Ctrl+D para duplicar, e mover a cópia pelas setas verde (Y, sobe) e vermelha (X, lado). A escadinha deve ter degraus iguais e alinhados; se os cubos ficarem soltos ou em alturas aleatórias, a dupla deve reajustar usando o snap (tecla X).`,
    },
    {
      titulo: `Desafio da torre perfeita`,
      tipo: `desafio`,
      tempo: `15 minutos`,
      guiaProfessor: `Explique que a torre deve ter cubos empilhados perfeitamente, sem nenhum saliente. O segredo é o snap (tecla X) ao mover no eixo Y. Quem terminar pode duplicar a torre inteira com Ctrl+D. Conduza a comparação entre as torres no fim.`,
      atividade: `Monte uma torre de quatro cubos empilhados perfeitamente alinhados. Use Ctrl+D para duplicar e a seta verde (Y) com a tecla X (snap) segurada para empilhar certinho, um sobre o outro, sem nenhum cubo torto. Se terminar, duplique a torre inteira com Ctrl+D e coloque a cópia ao lado. Salve o arquivo com o seu nome.`,
      gabarito: `A torre deve ter quatro cubos empilhados em linha perfeitamente vertical, sem nenhum cubo saliente ou torto, com os topos e laterais alinhados. Caminho correto: duplicar com Ctrl+D e mover cada cubo só no eixo Y (seta verde) com a tecla X (snap) segurada para grudar no grid. A torre duplicada deve ser idêntica à original. O arquivo deve estar salvo com o nome do aluno. Se algum cubo estiver desalinhado, o aluno não usou o snap e deve refazer segurando a tecla X.`,
    },
  ],
};
