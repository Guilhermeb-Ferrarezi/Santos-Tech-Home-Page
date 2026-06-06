import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Conhecendo o Cenário em Voxel",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Abrir o MagicaVoxel, revisar as ferramentas de blocos, cores e tamanho da caixa, e construir o chão e uma peça simples do mundo para entender escala e proporção.`,
  descricao: `Hoje os nossos pequenos criadores dão o primeiro passo de verdade na construção do jogo: eles abrem o MagicaVoxel e começam a montar o cenário onde a aventura vai acontecer. Nas aulas anteriores a turma já sonhou com a grande ideia do jogo e fez a lista de assets. Agora chegou a hora de colocar a mão na massa digital e empilhar os primeiros voxels (os cubinhos mágicos) para formar um chão e uma peça do mundo, como uma plataforma ou uma colina.

O coração desta aula é a ideia de escala e proporção. Voxel é a palavra que junta "volume" com "pixel": é como um LEGO dentro do computador, em que cada cubinho tem sempre o mesmo tamanho. Por isso, quando a criança constrói um chão de muitos cubinhos, ela percebe que um personagem pequeno precisa de poucos voxels e uma montanha gigante precisa de muitos. Entender isso desde já evita que o cenário fique torto ou que o herói pareça maior que uma casa.

O professor vai revisar três ferramentas essenciais: o pincel para adicionar blocos, a paleta de cores e o painel que controla o tamanho da caixa (a grade onde construímos). Em seguida, demonstra no projetor como pintar um chão plano e levantar uma plataforma simples. As crianças copiam no próprio computador, sempre olhando o exemplo pronto que fica projetado na tela.

A aula termina com um desafio rápido e um momento de compartilhar, em que cada aluno mostra o seu pedacinho de mundo. O objetivo não é fazer algo perfeito, e sim entender as ferramentas e ganhar confiança para, nas próximas semanas, construir o mundo inteiro do jogo voxel.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto e um arquivo novo em branco em cada máquina`,
    `Projetor ou TV grande ligado no computador do professor para a demonstração ao vivo`,
    `Um arquivo de exemplo pronto com um chão e uma plataforma simples já construídos`,
    `Imagens impressas ou na tela de cenários de jogos voxel (chão, colina, plataforma) como inspiração`,
    `Mouse com rodinha (scroll) para cada aluno, pois ajuda muito a girar e dar zoom na cena`,
    `Folha de papel quadriculado e lápis de cor para o aquecimento (desenhar o chão em quadradinhos)`,
  ],
  conceitosChave: [
    `Voxel — um cubinho mágico, como uma peça de LEGO dentro do computador; todo voxel tem o mesmo tamanho.`,
    `Cenário — o lugar onde a aventura do jogo acontece, feito de chão, montanhas e plataformas.`,
    `Caixa (grade) — a moldura quadradinha onde a gente constrói; ela diz até onde podemos empilhar os cubinhos.`,
    `Escala — o tamanho das coisas comparadas umas com as outras; um herói é pequeno, uma montanha é grande.`,
    `Proporção — manter os tamanhos combinando, para o cenário não ficar torto nem estranho.`,
    `Paleta de cores — a caixinha cheia de cores onde escolhemos a tinta de cada cubinho.`,
    `Plataforma — um pedaço de chão levantado, como um degrau onde o personagem pode subir e pular.`,
  ],
  treinamento: `## O que o professor precisa saber

O MagicaVoxel é um programa gratuito de modelagem em cubinhos. Você não precisa ser especialista: basta dominar três coisas hoje. Primeiro, a tela tem uma caixa (a grade onde construímos), uma barra de ferramentas à esquerda e a paleta de cores à direita. Segundo, para girar a cena segure o botão esquerdo do mouse e arraste; para dar zoom use a rodinha; para mover a câmera segure a rodinha (ou o botão direito) e arraste. Terceiro, antes da aula abra o MagicaVoxel em cada máquina e deixe um arquivo novo em branco. Tenha também o arquivo de exemplo pronto aberto na sua máquina, projetado. Dica de ouro: combine com as crianças que ninguém clica em "Open" ou "New" sem você avisar, para não perderem o trabalho.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: pergunte o que é um voxel. Mostre o papel quadriculado e peça que cada um pinte uma linha de quadradinhos como se fosse o chão. Diga: "Hoje vamos fazer esse chão dentro do computador." Relembre a lista de assets da Aula 2.

15 min — Conteúdo novo guiado (no projetor): mostre a tela do MagicaVoxel. Aponte a barra da esquerda e clique no modo "Attach" (o pincel que ADICIONA blocos) e no modo "Erase" (a borracha). Mostre a ferramenta "Voxel" (cubinho único), "Box" (caixa) e "Brush" como tipos de pincel. Clique em "Box" para desenhar áreas grandes de uma vez. Mostre a paleta de cores à direita: clique numa cor para selecioná-la antes de pintar. Por fim, abra o painel de tamanho da caixa: no topo há campos com números (por exemplo 40 x 40 x 40). Explique que esses números são o tamanho da grade. Para esta aula deixe algo confortável, como 32 x 32 x 8.

25 min — Mão na massa: cada criança faz no próprio computador. Passo 1: escolher uma cor de chão (verde ou marrom) na paleta. Passo 2: com a ferramenta "Box" no modo "Attach", arrastar pelo fundo da caixa para preencher o chão inteiro de uma camada. Passo 3: escolher outra cor e levantar uma plataforma — clicar por cima do chão e empilhar duas ou três camadas de cubinhos formando um degrau ou uma colina. Passe de mesa em mesa girando a câmera com eles e elogiando. Quem terminar, pinta detalhes (uma florzinha, uma pedra).

10 min — Desafio e compartilhar: peça que cada um adicione UMA peça nova (uma rampa, uma escada de degraus ou um morrinho). Depois, gire o projetor para alguns mostrarem o cenário e contarem o que construíram.

## Como explicar para crianças

Use sempre analogias de LEGO: "O voxel é uma pecinha de LEGO mágica, e todas têm o mesmo tamaninho." Para escala diga: "Se o herói tem 5 cubinhos de altura, a montanha pode ter 20, mas a casa não pode ser do tamanho de uma formiga." Chame a caixa de "moldura mágica" e a paleta de "caixa de tintas". Mostre, não fale demais: clique e deixe eles repetirem o clique.

## Erros comuns e como ajudar

As crianças costumam clicar na borracha sem perceber e "apagar" em vez de construir — sempre confira se estão no modo "Attach" (pincel). Outro erro é construir tudo amontoado num cantinho; lembre-se de pedir para usarem a caixa inteira. Muitos esquecem de trocar a cor e o cenário fica de uma cor só; pare e relembre a paleta. Também há quem gire a câmera sem querer e ache que "estragou" — explique que girar é só mudar o ponto de vista, o trabalho continua lá. Por fim, se alguém empilhar cubinhos altos demais, use isso para falar de proporção: "Será que essa colina não ficou maior que o jogo inteiro?"`,
  exercicios: [
    {
      titulo: `O chão da nossa aventura`,
      tipo: `Prática guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `Faça junto, passo a passo, projetado. Garanta que todos estejam no modo "Attach" com a ferramenta "Box" e uma cor de chão selecionada antes de começarem a arrastar.`,
      atividade: `Escolha uma cor verde ou marrom na paleta e, com a ferramenta "Box", pinte uma camada de chão preenchendo o fundo inteiro da caixa.`,
      gabarito: `O aluno seleciona a cor, ativa "Box" no modo "Attach" e arrasta pelo fundo da grade, criando uma camada lisa de voxels que cobre toda a base. O chão deve ter um voxel de altura e ocupar toda a largura e profundidade da caixa.`,
    },
    {
      titulo: `Subindo uma plataforma`,
      tipo: `Prática individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como clicar POR CIMA do chão para empilhar. Reforce que cada clique adiciona cubinhos numa nova altura. Circule pelas mesas ajudando a girar a câmera.`,
      atividade: `Sobre o chão pronto, escolha outra cor e levante uma plataforma de 2 ou 3 camadas de cubinhos, como um degrau onde o personagem poderá subir.`,
      gabarito: `O aluno troca de cor e empilha voxels acima do chão, formando um bloco elevado de 2 a 3 camadas. A plataforma fica apoiada no chão, com cor diferente, e é visível ao girar a câmera. Não precisa ser grande, só precisa estar acima do nível do chão.`,
    },
    {
      titulo: `Caça aos botões`,
      tipo: `Quiz oral / identificação`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça perguntas rápidas apontando para a tela projetada. Deixe as crianças responderem em voz alta e venham apontar no projetor.`,
      atividade: `Responda: qual botão ADICIONA blocos? Qual APAGA? Onde fica a paleta de cores? Onde mudamos o tamanho da caixa?`,
      gabarito: `Adiciona blocos: modo "Attach" (o pincel). Apaga: modo "Erase" (a borracha). A paleta de cores fica do lado direito da tela. O tamanho da caixa muda nos campos de números no topo (por exemplo 32 x 32 x 8). Aceite respostas com as próprias palavras da criança, desde que apontem o lugar certo.`,
    },
    {
      titulo: `Grande, médio, pequeno`,
      tipo: `Desafio de escala e proporção`,
      tempo: `6 minutos`,
      guiaProfessor: `Use este exercício para introduzir proporção na prática. Peça que comparem alturas em número de cubinhos. Pergunte se faz sentido no mundo real do jogo.`,
      atividade: `No seu cenário, construa três coisas de tamanhos diferentes: uma pedra pequena (1 a 2 cubinhos), um morrinho médio (4 a 6 cubinhos) e uma colina grande (8 a 10 cubinhos). Compare as alturas.`,
      gabarito: `O aluno cria três elementos com alturas claramente diferentes, contando os cubinhos: pequeno (1-2), médio (4-6), grande (8-10). O importante é que ele perceba e explique que a colina é mais alta que o morrinho, que é mais alto que a pedra, demonstrando entendimento de escala e proporção.`,
    },
    {
      titulo: `Meu pedacinho de mundo`,
      tipo: `Projeto criativo + compartilhar`,
      tempo: `6 minutos`,
      guiaProfessor: `Este é o fechamento. Deixe a criança criar livremente uma peça nova e depois projete alguns trabalhos. Faça perguntas: "O que é isso? Onde o herói vai pisar?" Valorize cada ideia.`,
      atividade: `Adicione UMA peça nova ao seu cenário (uma rampa, uma escada de degraus ou um caminho) e prepare-se para mostrar e contar o que você construiu.`,
      gabarito: `O aluno acrescenta um novo elemento coerente com o cenário (rampa, escada, caminho ou similar) usando as cores e a proporção corretas, e consegue explicar em uma frase o que construiu e para que serve no jogo. Qualquer peça válida que mostre uso das ferramentas de hoje e respeite a escala do cenário é aceita.`,
    },
  ],
};
