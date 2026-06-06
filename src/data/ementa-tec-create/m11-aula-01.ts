import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Do Pixel ao Voxel: Conhecendo o MagicaVoxel",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer a interface do MagicaVoxel, entender que o voxel é o "pixel em 3D" e montar a planta baixa das proporções de um personagem do próprio jogo 2D.`,
  descricao: `Neste mês os alunos vão transformar os personagens do jogo 2D que criaram em modelos tridimensionais feitos de cubinhos. Esses cubinhos têm um nome: voxel. Assim como o pixel é o quadradinho que forma uma imagem na tela, o voxel é o cubinho que forma um objeto no espaço 3D. A palavra vem de "volume" mais "pixel", ou seja, um pixel com volume. Esta primeira aula é o ponto de partida: antes de modelar qualquer coisa, o aluno precisa se sentir em casa dentro do programa.

O MagicaVoxel é um software gratuito e leve, perfeito para começar em 3D sem se assustar. A tela é dividida em algumas áreas principais: no centro fica a cena, onde o modelo aparece dentro de uma caixa chamada volume; à esquerda ficam as ferramentas de edição (adicionar, apagar, pintar) e a paleta de cores; embaixo e à direita ficam os controles do tamanho do volume e as opções de renderização. Girar a câmera, dar zoom e mover a vista são as primeiras habilidades, porque sem enxergar bem o modelo de todos os lados o aluno acaba colocando voxels no lugar errado.

Depois de aprender a navegar, o aluno descobre as duas ações mais importantes da modelagem em voxel: adicionar um cubinho (Attach) e apagar um cubinho (Erase). Ele também aprende a redimensionar o volume, ou seja, a caixa que limita o tamanho do personagem, para que caiba o corpo inteiro sem ficar apertado nem grande demais. Tudo isso é treino de mão e de olho, parecido com aprender a andar de bicicleta: nas primeiras pedaladas é desajeitado, mas em poucos minutos vira automático.

O fechamento da aula é o planejamento. Cada aluno escolhe um personagem do seu jogo 2D e desenha, numa folha ou na própria cena, a "planta baixa" das proporções: quantos voxels terá a altura, a largura dos ombros, o tamanho da cabeça em relação ao corpo. Esse esboço evita retrabalho nas próximas aulas, quando o corpo será realmente construído. Sair daqui com a interface dominada e um plano na mão é a meta do dia.`,
  materiais: [
    `Computadores com o MagicaVoxel instalado e já aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a tela do MagicaVoxel ao vivo`,
    `Arquivo de exemplo (.vox) com um personagem simples em voxel já pronto, para mostrar o resultado esperado`,
    `Imagens dos personagens dos jogos 2D dos alunos (sprites em pixel art), impressas ou na tela, como referência`,
    `Folhas quadriculadas e lápis para desenhar a planta baixa das proporções`,
    `Mouse com botão de rolagem (scroll) para cada aluno, pois facilita muito girar e dar zoom`,
    `Quadro branco para desenhar o conceito de pixel virando voxel`,
  ],
  conceitosChave: [
    `Voxel — o cubinho 3D que forma um modelo; é o equivalente tridimensional do pixel.`,
    `Pixel — o quadradinho 2D que forma uma imagem na tela; serve de comparação para entender o voxel.`,
    `Volume — a caixa (grade 3D) dentro da qual o modelo é construído; tem largura, altura e profundidade.`,
    `Cena (viewport) — a área central onde o modelo aparece e onde a gente gira, aproxima e edita.`,
    `Attach (adicionar) — a ferramenta que coloca um voxel novo na cena.`,
    `Erase (apagar) — a ferramenta que remove um voxel da cena.`,
    `Planta baixa das proporções — o esboço que define quantos voxels o personagem terá de altura, largura e tamanho de cabeça antes de modelar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser modelador 3D para dar esta aula; precisa saber navegar na cena e mostrar três ações: girar a câmera, adicionar e apagar voxels. Abra o MagicaVoxel antes da aula e localize as áreas: a cena central (com a caixa do volume), o painel de ferramentas e a paleta de cores à esquerda, e os campos de tamanho do volume (três números, geralmente 40 x 40 x 40 no topo da cena). A ideia central a transmitir é simples: voxel é pixel com volume, um cubinho. Tudo o que o aluno já sabe de pixel art (montar com quadradinhos) vale aqui, só que agora em três dimensões. Teste antes os controles de câmera do mouse, porque é a parte que mais trava iniciantes.

## Passo a passo da aula

Aquecimento e revisão (10 min): no quadro, desenhe um quadradinho (pixel) e ao lado um cubinho (voxel). Mostre o arquivo de exemplo .vox girando no projetor e pergunte "de que isso é feito?". Conduza até a resposta: cubinhos. Relembre que eles já desenharam personagens em pixel art e que agora vão dar volume a esses personagens.

Conteúdo novo guiado (15 min): com o projetor, ensine a câmera primeiro. Segure o botão direito do mouse e arraste para girar ao redor do modelo; use a rolagem (scroll) para zoom; segure a rolagem (ou Shift + botão direito) para deslocar a vista (pan). Repita devagar duas vezes. Depois, no painel de ferramentas à esquerda, mostre o modo Attach (adicionar): clique numa face da caixa e um voxel aparece. Mostre o modo Erase (apagar): com a ferramenta selecionada, clique num voxel para removê-lo. Ensine a alternar o "pincel" de um único voxel (Voxel/V) para entender que cada clique é um cubinho. Por fim, mostre os três números do tamanho do volume no topo: explique que são largura, altura e profundidade, e altere para algo como 16 x 24 x 16, confirmando que a caixa muda de formato.

Mão na massa (25 min): cada aluno pratica girar a câmera até conseguir ver o modelo de cima, de frente e de lado sem se perder. Depois adiciona uns 10 voxels, apaga metade e ajusta o tamanho do volume para ficar mais alto que largo (formato de corpo em pé). Circule pela sala corrigindo a pegada do mouse e lembrando: botão direito gira, rolagem dá zoom. Em seguida, cada um abre a imagem do seu personagem 2D e desenha na folha quadriculada a planta baixa: altura total em voxels (sugira de 16 a 24), largura dos ombros e tamanho da cabeça (cerca de um terço da altura para personagens "fofos").

Desafio e compartilhar (10 min): desafie quem terminou a posicionar a câmera exatamente de frente e tirar um print mental da pose ideal. Cada aluno mostra em 20 segundos a planta baixa e diz qual personagem escolheu e quantos voxels de altura ele terá.

## Como explicar de forma clara

Use comparações do dia a dia. Diga: "pixel é o quadradinho da imagem; voxel é o mesmo quadradinho, só que vira um cubo de verdade, como uma peça de montar". Compare o volume a uma "caixa de sapato" onde o personagem precisa caber em pé. Para a câmera, use a imagem do drone: "o botão direito é como pilotar um drone girando ao redor do boneco". Sobre proporção, fale em "cabeçudo é mais fofo": cabeça grande deixa o personagem simpático, igual aos bonecos de jogo que eles gostam. Reforce sempre que ninguém precisa acertar de primeira; girar a câmera é treino.

## Erros comuns e como ajudar

Erro 1: o aluno "perde" o modelo ao girar demais e acha que sumiu; ensine a apertar a tecla de enquadrar a vista ou dar zoom out até reencontrar. Erro 2: confunde botão esquerdo (edita/adiciona) com botão direito (gira a câmera) e acaba colocando voxels sem querer; relembre a divisão de funções. Erro 3: adiciona voxels mas eles aparecem "no nada" porque a câmera está num ângulo ruim; peça para olhar de frente antes de editar. Erro 4: deixa o volume pequeno demais e o corpo não cabe; mostre de novo os três números do tamanho. Erro 5: pula o planejamento e já quer modelar o corpo todo; segure o ritmo, a planta baixa economiza tempo nas próximas aulas. Erro 6: usa o trackpad do notebook e sofre para girar; se possível, entregue um mouse com rolagem.`,
  exercicios: [
    {
      titulo: `Pilotando a câmera`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno consiga girar, dar zoom e deslocar a vista antes de seguir. Corrija a pegada do mouse de quem estiver travando.`,
      atividade: `No arquivo de exemplo, gire ao redor do modelo segurando o botão direito do mouse. Use a rolagem para aproximar e afastar. Pare a câmera mostrando o personagem exatamente de frente, depois de lado e por fim de cima.`,
      gabarito: `O aluno consegue, sem ajuda, parar a câmera nas três vistas (frente, lado e topo) e voltar a enquadrar o modelo quando ele "some". Botão direito gira, rolagem dá zoom: se ele tenta girar com o botão esquerdo, ainda não dominou o controle.`,
    },
    {
      titulo: `Cubinho vai, cubinho vem`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre os modos Attach e Erase no painel à esquerda. Confira que o aluno entende que cada clique é um único voxel.`,
      atividade: `Selecione a ferramenta Attach (adicionar) e coloque 10 voxels formando uma escadinha. Depois troque para Erase (apagar) e remova 5 deles. Adicione mais 3 em cima para formar uma torre baixa.`,
      gabarito: `A cena termina com cerca de 8 voxels formando uma torre/escada. O aluno alterna corretamente entre adicionar (Attach) e apagar (Erase) e percebe que cada clique corresponde a um cubinho. Se apagar a cena inteira sem querer, provavelmente arrastou o clique em vez de clicar voxel a voxel.`,
    },
    {
      titulo: `A caixa do tamanho certo`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Aponte os três números do volume no topo da cena (largura, altura, profundidade). Reforce que o corpo em pé precisa de mais altura que largura.`,
      atividade: `Mude o tamanho do volume para que ele fique no formato de um corpo em pé: mais alto do que largo (por exemplo, 16 de largura, 24 de altura, 16 de profundidade). Gire a câmera e confirme que a caixa virou um "armário" e não um "tijolo deitado".`,
      gabarito: `O volume fica visivelmente mais alto do que largo, adequado a um personagem em pé (altura maior que largura e profundidade). O aluno identifica qual dos três números é a altura. Valores próximos de 16 x 24 x 16 são ideais; o importante é a proporção vertical, não o número exato.`,
    },
    {
      titulo: `Planta baixa em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Cada um desenha a planta baixa do seu personagem na folha quadriculada e o colega confere se as proporções fazem sentido. Lembre da regra da cabeça grande para deixar fofo.`,
      atividade: `Em dupla, cada aluno abre a imagem do seu personagem 2D e desenha na folha quadriculada a planta baixa: altura total em voxels (entre 16 e 24), largura dos ombros e tamanho da cabeça (cerca de um terço da altura). O colega revisa e sugere um ajuste.`,
      gabarito: `Cada planta baixa traz três números definidos: altura total (16 a 24 voxels), largura dos ombros e tamanho da cabeça (em torno de um terço da altura para um visual fofo). As proporções são coerentes com o personagem 2D escolhido. O colega aponta pelo menos um ajuste, mostrando que houve revisão.`,
    },
    {
      titulo: `Roda do voxel: o que aprendemos?`,
      tipo: `roda de conversa`,
      tempo: `6 min`,
      guiaProfessor: `Reúna a turma. Conduza a conversa para fixar os conceitos de voxel, volume e câmera. Valorize cada fala e não corrija com dureza; o objetivo é consolidar o vocabulário.`,
      atividade: `Em roda, cada aluno responde em poucas palavras: o que é um voxel, para que serve o volume e qual botão do mouse gira a câmera. Em seguida mostra a planta baixa e diz qual personagem do seu jogo vai virar 3D e quantos voxels de altura ele terá.`,
      gabarito: `As respostas devem conter as ideias corretas: voxel é o cubinho 3D equivalente ao pixel; o volume é a caixa onde o modelo é construído; o botão direito do mouse gira a câmera. Não há resposta única, mas os três conceitos (voxel, volume e controle de câmera) precisam aparecer, e cada aluno deve indicar o personagem escolhido e sua altura em voxels.`,
    },
  ],
};
