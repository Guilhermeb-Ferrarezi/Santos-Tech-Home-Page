import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Explorando a Mesa Virtual",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Aprender a navegar com a câmera no Orca Slicer e posicionar, rotacionar e escalar uma peça dentro da área útil da mesa de impressão.`,
  descricao: `Nesta aula os alunos vão explorar a "mesa virtual" do Orca Slicer, o espaço tridimensional onde cada modelo é preparado antes de virar uma impressão de verdade. O foco está em dominar a câmera: girar a cena ao redor da peça, dar zoom para perto e para longe e mover o ponto de vista, exatamente como fazemos para inspecionar um objeto na mão. Quando o aluno controla a câmera com confiança, todo o restante do curso fica mais fácil.

Além de olhar, eles vão aprender a agir sobre a peça. Usando um modelo de teste simples, cada aluno vai praticar as três ferramentas de transformação mais importantes: mover (posicionar a peça sobre a chapa), rotacionar (girar a peça em torno de um eixo) e escalar (aumentar ou diminuir o tamanho). Essas três ações respondem à pergunta central de qualquer impressão: onde, virada para onde e de que tamanho.

Um conceito central da aula é a área útil de impressão. A mesa virtual tem o mesmo tamanho da chapa real da impressora, e tudo que ficar dentro dela poderá ser impresso. Quando uma peça passa do limite, o Orca Slicer a marca, e o aluno aprende a "ler" esse aviso e a reposicionar o modelo. Entender esse limite agora evita frustração nas aulas seguintes, quando importarmos os personagens criados no Maya.

Esta é uma aula de mãos no teclado e no mouse. O professor demonstra cada movimento no projetor e, em seguida, os alunos repetem na própria máquina, ganhando memória muscular. Ao final, todos devem conseguir circular a câmera ao redor do modelo, encaixar a peça no centro da chapa e ajustar tamanho e orientação sem medo de errar.`,
  materiais: [
    `Computadores com o Orca Slicer instalado e já aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a tela do Orca Slicer`,
    `Arquivo de exemplo para teste (um cubo de calibração ou o Benchy, em formato .stl ou .3mf)`,
    `Mouse com roda de rolagem em cada estação (facilita muito o controle de câmera)`,
    `Folha impressa de "atalhos da mesa virtual" para colar perto de cada computador`,
    `Impressora 3D ligada na sala, apenas como referência visual do tamanho real da chapa`,
  ],
  conceitosChave: [
    `Mesa virtual (chapa/plate) — a representação 3D da chapa da impressora onde posicionamos os modelos.`,
    `Câmera — o ponto de vista por onde enxergamos a cena; girar, dar zoom e mover muda só o olhar, não a peça.`,
    `Orbitar — girar a câmera ao redor do modelo segurando o botão do meio (ou esquerdo) do mouse.`,
    `Mover (Move) — ferramenta que desliza a peça pela chapa, mudando sua posição sem girar nem redimensionar.`,
    `Rotacionar (Rotate) — ferramenta que gira a peça em torno de um eixo (X, Y ou Z) para mudar a orientação.`,
    `Escalar (Scale) — ferramenta que aumenta ou diminui o tamanho da peça, em porcentagem ou em milímetros.`,
    `Área útil de impressão — o limite da chapa; peças fora dele aparecem destacadas e não serão impressas.`,
  ],
  treinamento: `## O que o professor precisa saber

O Orca Slicer abre numa cena 3D com a chapa (mesa virtual) no centro. Você não precisa decorar tudo: domine três gestos de câmera e três ferramentas de peça. Câmera: orbitar (gira a vista ao redor do modelo), zoom (aproxima ou afasta) e pan (arrasta a vista de lado). Peça: Mover, Rotacionar e Escalar, que ficam na barra de ferramentas vertical à esquerda. Antes da aula, abra o programa, carregue o arquivo de exemplo com "File > Import > Import 3MF/STL" (ou arrastando para a janela) e treine os movimentos uma vez. Combine com a turma: mexer na câmera muda só o olhar; mexer na peça muda o objeto.

## Passo a passo da aula

Aquecimento (10 min): retome a Aula 1. Pergunte "o que é a chapa que aparece na tela?" e mostre no projetor a peça já carregada. Compare a câmera com pegar um objeto na mão e virar para todos os lados.

Conteúdo novo guiado (15 min): demonstre devagar, narrando cada clique. Orbitar: segure o botão do meio (a roda) do mouse e mexa; a vista gira ao redor do modelo. Zoom: role a roda do mouse para frente (aproxima) e para trás (afasta). Pan: segure a roda mais a tecla Shift e arraste para deslizar a cena. Depois, clique no modelo para selecioná-lo (fica contornado). Mostre a barra à esquerda: clique em Mover (Move) e arraste as setas coloridas; clique em Rotacionar (Rotate) e gire pelos anéis; clique em Escalar (Scale) e puxe os cantos, ou digite um valor no painel lateral direito. Aponte as bordas da chapa e o aviso que surge quando a peça sai da área útil.

Mãos na massa (25 min): cada aluno carrega o arquivo de exemplo e cumpre a sequência: (1) orbitar para ver a peça por cima, por baixo e de lado; (2) dar zoom até ver os detalhes; (3) usar Mover para centralizar a peça na chapa; (4) usar Rotacionar para deitar a peça 90 graus e depois voltar; (5) usar Escalar para deixar a peça com metade do tamanho e depois com o dobro, digitando 50% e 200%. Circule pela sala conferindo cada etapa. Use o atalho de tecla "1" para enquadrar a vista de novo quando alguém se perder.

Desafio e compartilhar (10 min): proponha "encaixe a peça no centro, virada em pé, no tamanho original". Quem terminar mostra a tela ao colega ao lado e explica que movimento usou.

## Como explicar de forma clara

Use a imagem da mão: "A câmera é o seu olho voando ao redor da peça. Mover o olho não muda o objeto, só o jeito que você o vê." Para as ferramentas, fale em verbos: arrastar é mover, girar é rotacionar, esticar é escalar. Chame os eixos de "três direções: para os lados (X), para frente e trás (Y) e para cima (Z)" e relacione com as setas vermelha, verde e azul. Para a área útil, diga: "A chapa é a mesa onde a impressora pinta camada por camada. O que cai fora da mesa não imprime." Repita o mantra "câmera muda o olhar, ferramenta muda a peça" sempre que alguém confundir.

## Erros comuns e como ajudar

O erro mais comum é tentar orbitar com o botão errado e acabar movendo a peça; mostre que orbitar usa a roda do mouse, não o clique esquerdo sobre o modelo. Alguns somem com a peça ao dar zoom demais: ensine o atalho de enquadrar (tecla "1") para reencontrá-la. Outros confundem mover a câmera com mover o objeto; reforce o mantra. No Escalar, muitos quebram a proporção sem querer; mantenha o cadeado de proporção (Uniform Scale) ligado no painel direito. Por fim, há quem deixe a peça meio para fora da chapa e não perceba o destaque; peça que sempre confiram se a peça está inteira dentro do contorno da mesa antes de seguir.`,
  exercicios: [
    {
      titulo: `Volta ao redor da peça`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno tenha o arquivo de exemplo carregado. Demonstre uma vez o orbitar com a roda do mouse antes de soltar a turma. Circule conferindo quem está movendo a peça por engano em vez da câmera.`,
      atividade: `Carregue o modelo de teste e use a câmera para observar a peça por cima, por baixo e pelos quatro lados. Dê zoom até enxergar os detalhes pequenos e depois afaste para ver a chapa inteira.`,
      gabarito: `O aluno orbita segurando o botão do meio (roda) do mouse e usa a roda para o zoom. A peça não muda de posição nem de tamanho; apenas o ponto de vista gira ao redor dela. Se a peça sumir, usa a tecla "1" para reenquadrar.`,
    },
    {
      titulo: `Centralizar e ajustar`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre as setas coloridas da ferramenta Mover e os anéis da Rotacionar. Lembre os alunos de selecionar a peça (clique único) antes de usar as ferramentas. Confira no painel direito se os valores fazem sentido.`,
      atividade: `Use a ferramenta Mover para colocar a peça no centro exato da chapa. Depois use a Rotacionar para deitá-la 90 graus em um eixo e, em seguida, devolva à posição original.`,
      gabarito: `A peça fica centralizada na chapa usando as setas da ferramenta Mover. Na Rotacionar, o aluno gira pelos anéis ou digita 90 no eixo escolhido e depois volta a 0. A peça permanece inteira dentro da área útil.`,
    },
    {
      titulo: `Crescer e encolher`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Verifique se o cadeado de proporção (Uniform Scale) está ligado no painel direito para evitar deformações. Mostre onde digitar a porcentagem. Avise que a peça grande pode ultrapassar a chapa.`,
      atividade: `Escale a peça para 50% do tamanho e observe. Depois escale para 200% e veja se ela ainda cabe na chapa. Volte ao tamanho original (100%) ao terminar.`,
      gabarito: `O aluno digita 50% e depois 200% no campo de escala do painel direito, com proporção travada. Em 200% a peça pode passar do limite da chapa e aparece destacada; o aluno reconhece isso e volta a 100%.`,
    },
    {
      titulo: `Detetives da mesa`,
      tipo: `em dupla`,
      tempo: `7 min`,
      guiaProfessor: `Forme duplas. Um aluno opera, o outro observa e descreve. Incentive o uso correto dos nomes: orbitar, mover, rotacionar, escalar. Troque os papéis na metade do tempo.`,
      atividade: `Em dupla, o operador deve colocar a peça parcialmente para fora da chapa de propósito. O observador descreve o que mudou na tela e orienta o colega a trazer a peça toda de volta para dentro da área útil.`,
      gabarito: `A peça fora da chapa fica destacada (em cor de aviso). A dupla identifica o destaque, usa a ferramenta Mover para recentralizar e confirma que a peça inteira está dentro do contorno da mesa antes de encerrar.`,
    },
    {
      titulo: `Encaixe perfeito e roda de conversa`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Peça a posição final: peça em pé, centralizada, tamanho original. Depois reúna a turma numa roda rápida. Conduza com perguntas curtas e valorize quem usar os termos corretos.`,
      atividade: `Deixe a peça em pé, no centro da chapa e no tamanho original (100%). Na roda, cada aluno conta qual ferramenta usou para o passo mais difícil e explica a diferença entre mexer na câmera e mexer na peça.`,
      gabarito: `A peça termina centralizada, na vertical e a 100%, inteira dentro da área útil. Na roda, o aluno explica que a câmera muda só o olhar (orbitar, zoom, pan) e que as ferramentas Mover, Rotacionar e Escalar mudam a própria peça.`,
    },
  ],
};
