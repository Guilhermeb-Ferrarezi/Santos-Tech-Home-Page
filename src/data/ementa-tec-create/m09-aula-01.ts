import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Vida em Pixels: o Idle",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Criar a primeira animação de respiração (idle) em pixel art no Aseprite, usando linha do tempo, frames e Onion Skin.`,
  descricao: `Nesta aula o aluno descobre o coração de toda animação: o quadro a quadro. Em vez de um personagem parado e sem vida, ele aprende a fazer o sprite "respirar" com pequenos movimentos que se repetem. Essa animação de espera é chamada de idle, e é o que dá personalidade a qualquer personagem de jogo mesmo quando o jogador não aperta nenhum botão.

O Aseprite organiza a animação em uma linha do tempo (a Timeline, na parte de baixo da tela). Cada coluna é um frame (um quadro), e cada linha é uma camada (layer). A animação acontece quando o programa mostra um frame depois do outro, bem rápido, criando a ilusão de movimento. É o mesmo princípio do flipbook, aquele caderninho que a gente folheia rápido e o desenho parece se mexer.

Para acertar o movimento sem errar a posição, o aluno usa o Onion Skin (pele de cebola): um recurso que mostra, em transparência, o desenho do frame anterior por baixo do frame atual. Assim ele consegue ver de onde o pixel saiu e para onde deve ir. Também aprende a controlar a duração de cada frame em milissegundos, decidindo se a respiração será lenta e calma ou rápida e nervosa.

Ao final, cada aluno terá um idle de 2 a 4 quadros rodando em loop. Esse é o primeiro passo do mês inteiro: nas próximas aulas vamos animar caminhada, moeda girando e explosão, sempre voltando a estes três pilares — linha do tempo, frames e camadas.`,
  materiais: [
    `Computadores com Aseprite instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a tela do Aseprite`,
    `Arquivo de exemplo: um sprite estático de 32x32 px (personagem simples) para quem não quiser desenhar do zero`,
    `Arquivo de exemplo já animado (.aseprite) com um idle pronto, para mostrar o resultado esperado`,
    `Quadro branco ou flip chart para desenhar o conceito de flipbook`,
    `Fones de ouvido opcionais (alguns alunos focam melhor)`,
  ],
  conceitosChave: [
    `Frame (quadro) — cada imagem individual da animação; é uma coluna na linha do tempo.`,
    `Linha do tempo (Timeline) — painel na parte de baixo do Aseprite onde ficam os frames e as camadas.`,
    `Camada (Layer) — uma folha transparente empilhada; permite separar partes do desenho sem misturar.`,
    `Idle — animação de "espera" que o personagem faz parado, geralmente uma respiração suave.`,
    `Onion Skin (pele de cebola) — recurso que mostra o frame anterior em transparência para guiar o desenho.`,
    `Duração do frame — tempo que cada quadro fica na tela, medido em milissegundos (ms); quanto maior, mais lento.`,
    `Loop — repetição contínua da animação, voltando ao primeiro frame depois do último.`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, abra o Aseprite e localize três áreas: o Menu superior (File, Edit, Sprite, Frame, Layer...), a caixa de Ferramentas à esquerda (lápis, balde, borracha) e a Timeline na parte de baixo. Se a Timeline não aparecer, ative em View > Timeline (ou aperte a tecla Tab quando o foco estiver na tela). Tenha pronto um sprite simples de 32x32 px. A ideia central: uma animação é só uma sequência de quadros mostrados em ordem. Idle é a respiração do personagem parado. Você não precisa ser artista; precisa mostrar onde clicar.

## Passo a passo da aula

Aquecimento (10 min): mostre o arquivo de exemplo já animado rodando (aperte Enter ou a barra de espaço para reproduzir). Pergunte: "o que está se mexendo?". No quadro branco, desenhe um boneco palito em duas posições e folheie no ar, explicando o flipbook. Diga que hoje todos vão fazer o personagem respirar.

Conteúdo novo guiado (15 min): com o projetor, abra um sprite de 32x32. Aponte a Timeline embaixo: cada coluna é um frame, cada linha é uma camada. Crie o segundo frame: clique com o botão direito no frame 1 e escolha New Frame, ou aperte Alt+N. Mostre que o frame 2 começa igual ao 1. Agora ensine o Onion Skin: clique no ícone de duas cebolas no canto superior esquerdo da Timeline para ligá-lo; o frame anterior aparece em transparência. No frame 2, use o lápis (tecla B) para empurrar o corpo do personagem 1 pixel para baixo e os ombros 1 pixel, simulando a expiração. Mostre como ajustar a duração: clique com o botão direito no frame e escolha Frame Properties, ou olhe o campo de duração; coloque 150 ms em cada frame. Aperte Enter para ver rodando em loop.

Mão na massa (25 min): cada aluno cria seu idle de 2 a 4 frames. Frame 1 é a pose normal; frame 2 desce 1 ou 2 pixels (respiração para fora). Se quiser 4 frames, o frame 3 volta ao meio e o frame 4 sobe levemente. Circule pela sala, garanta que o Onion Skin esteja ligado e que cada um aperte Enter para testar. Lembre de salvar com Ctrl+S no formato .aseprite.

Desafio e compartilhar (10 min): proponha mudar a duração para 80 ms (respiração nervosa) e depois 300 ms (respiração calma) e sentir a diferença. Cada aluno mostra seu idle rodando no projetor em 20 segundos.

## Como explicar de forma clara

Use a linguagem do corpo: "respira fundo comigo, o peito sobe e desce". O personagem faz a mesma coisa, só que em pixels. Compare frames a páginas de um gibi animado. Diga que o Onion Skin é como papel vegetal por cima do desenho antigo: a gente vê o fantasma do quadro anterior e sabe para onde mover. Milissegundo é "pedacinho de segundo": 1000 ms é 1 segundo, então 150 ms é bem rapidinho. Reforce que movimento pequeno é melhor que grande: 1 ou 2 pixels já dão vida.

## Erros comuns e como ajudar

Erro 1: o aluno apaga o desenho no frame 2 achando que tem que recomeçar. Mostre que New Frame copia o anterior; é só ajustar. Erro 2: mexe pixels demais e o personagem "pula". Peça para mover só 1 ou 2 pixels. Erro 3: esquece de ligar o Onion Skin e perde a referência; aponte o ícone das cebolas. Erro 4: desenha na camada errada ou só num frame e estranha o resultado; confirme qual frame e camada estão selecionados (ficam destacados na Timeline). Erro 5: a animação parece travada porque a duração está em 0 ou muito baixa; ajuste para 100 a 200 ms. Erro 6: aperta play e nada acontece porque só existe 1 frame; lembre que precisa de pelo menos 2.`,
  exercicios: [
    {
      titulo: `Meu primeiro segundo frame`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno abra um sprite e crie o frame 2 antes de seguir. Verifique se o New Frame copiou o desenho.`,
      atividade: `Abra um sprite de 32x32 px. Crie um segundo frame usando Alt+N (ou botão direito no frame > New Frame). Confirme que o desenho foi copiado para o frame 2.`,
      gabarito: `A Timeline deve mostrar 2 frames idênticos. O frame 2 contém uma cópia do frame 1, pronto para ser editado. Se o frame 2 estiver vazio, o aluno usou "New Empty Frame" por engano.`,
    },
    {
      titulo: `Ligando a pele de cebola`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre o ícone das cebolas no canto da Timeline. Confira que o frame anterior aparece em transparência no frame 2.`,
      atividade: `Ative o Onion Skin clicando no ícone das duas cebolas no topo da Timeline. No frame 2, use o lápis (B) para empurrar o corpo do personagem 1 ou 2 pixels para baixo, criando a expiração.`,
      gabarito: `Com o Onion Skin ligado, o desenho do frame 1 aparece esmaecido por baixo. No frame 2 o corpo está 1 ou 2 pixels mais baixo. Apertando Enter, o personagem sobe e desce em loop.`,
    },
    {
      titulo: `Controlando o ritmo da respiração`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Peça para testar três durações e sentir a diferença. Reforce que milissegundo é pedacinho de segundo.`,
      atividade: `Ajuste a duração dos frames (botão direito > Frame Properties) para 80 ms, depois 150 ms e depois 300 ms. Aperte Enter em cada caso e escolha qual ritmo combina com seu personagem.`,
      gabarito: `Em 80 ms a respiração fica rápida e nervosa; em 300 ms fica lenta e calma; 150 ms é um meio-termo natural. O aluno deve justificar a escolha (ex.: "calma porque é um robô tranquilo").`,
    },
    {
      titulo: `Respiração de 4 quadros em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um anima, o outro confere o movimento usando o Onion Skin. Depois trocam. Garanta o salvamento com Ctrl+S.`,
      atividade: `Em dupla, transformem o idle de 2 frames em 4 frames: frame 1 (normal), frame 2 (desce), frame 3 (meio), frame 4 (sobe leve). Um colega anima e o outro confere se o movimento é suave. Salvem o arquivo .aseprite.`,
      gabarito: `A animação tem 4 frames formando um ciclo suave que volta ao início sem "pulo". O arquivo foi salvo em .aseprite. O movimento total não passa de 2 a 3 pixels para parecer respiração, não salto.`,
    },
    {
      titulo: `Roda do idle: o que dá vida?`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Reúna a turma, projete 2 ou 3 animações e conduza a conversa sobre frames, camadas e duração. Não corrija com dureza; valorize as tentativas.`,
      atividade: `Em roda, cada aluno mostra seu idle e responde: quantos frames usou, qual duração escolheu e por que a animação parece "viva". A turma comenta o que gostou em cada uma.`,
      gabarito: `As respostas devem citar corretamente: número de frames (2 a 4), a ideia de que mostrar quadros em sequência cria movimento, e que pequenos deslocamentos de pixels com duração entre 80 e 300 ms dão sensação de respiração. Não há resposta única, mas os três conceitos (frame, linha do tempo, duração) devem aparecer.`,
    },
  ],
};
