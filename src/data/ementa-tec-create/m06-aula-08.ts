import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Personagem Ganhou Vida",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar o acabamento da peça impressa, registrar fotos do personagem e apresentá-lo à turma, fechando a jornada que liga pixel art, modelagem 3D e impressão.`,
  descricao: `Esta é a aula de consolidação e entrega do mês. Depois de seguir todo o caminho — do desenho em pixel art ao modelo no Blender, da preparação no Orca Slicer ao acompanhamento da impressora ao vivo e ao pós-processamento — chegou a hora de o aluno olhar para o personagem do próprio jogo agora existindo no mundo real, segurável na mão. O objetivo central não é produzir nada novo no software, e sim dar o acabamento final, fotografar a peça com capricho e apresentá-la com orgulho para os colegas.

A aula começa com uma revisão rápida de toda a trilha do mês, ajudando o aluno a perceber o quanto evoluiu. Em seguida, cada um termina os pequenos detalhes que faltam: remover restos de suporte, lixar uma rebarba teimosa, conferir se a base está firme. Não é uma aula de impressão nova — as impressoras já entregaram as peças nas aulas anteriores —, então o foco fica no toque humano que transforma um objeto plástico recém-saído da máquina em um personagem com presença.

Depois do acabamento, entra a parte de registro e narrativa. O aluno fotografa a peça em boa luz, compara lado a lado com o sprite original em pixel art e com o modelo 3D na tela, e monta um pequeno "antes e depois" da jornada. Esse registro vira o portfólio do aluno e também o entregável oficial do mês: a Peça Impressa, acompanhada das imagens que contam como ela nasceu.

O fechamento é uma roda de apresentações. Cada aluno mostra seu personagem, conta uma decisão de design que tomou e diz o que aprendeu ao ver o desenho virar volume físico. O professor conduz como um mini "lançamento", celebrando o trabalho de todos e conectando explicitamente as três etapas — desenhar, modelar, imprimir — que se uniram para dar vida ao personagem.`,
  materiais: [
    `Computadores com o Orca Slicer (impressão 3D) instalado e aberto, para exibir o modelo fatiado lado a lado com a peça real`,
    `Projetor para mostrar exemplos, fotos de referência e os trabalhos dos alunos`,
    `As peças impressas de cada aluno (o personagem do próprio jogo já impresso nas aulas anteriores)`,
    `Kit de acabamento: alicate de corte, lixas de granas variadas, estilete (uso supervisionado), pano e luvas`,
    `Os arquivos originais de cada aluno: sprite em pixel art (Aseprite) e modelo 3D (Blender), para o comparativo "antes e depois"`,
    `Celulares ou câmera e um fundo neutro (cartolina branca ou preta) com boa iluminação para a sessão de fotos`,
    `Etiquetas ou cartões para identificar cada peça com nome do personagem e do aluno`,
  ],
  conceitosChave: [
    `Acabamento — etapa final em que removemos imperfeições (rebarbas, marcas de suporte) para deixar a peça lisa e bonita ao toque.`,
    `Pós-processamento — conjunto de cuidados feitos depois da impressão, como lixar, limpar e, quando há, colar partes ou pintar.`,
    `Portfólio — coleção organizada dos seus trabalhos e do processo que os criou, usada para mostrar o que você sabe fazer.`,
    `Registro fotográfico — fotos bem tiradas da peça que documentam o resultado e contam a história da criação.`,
    `Pipeline de criação — o caminho completo da ideia ao objeto: pixel art, modelagem 3D e impressão, cada etapa alimentando a próxima.`,
    `Entregável — o resultado final combinado para o mês; aqui, a Peça Impressa acompanhada das fotos do antes e depois.`,
    `Apresentação (pitch) — momento de mostrar o trabalho à turma, explicando suas escolhas com clareza e segurança.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de consolidação: você não vai iniciar nenhuma impressão nova. As peças já saíram da impressora nas aulas anteriores. Seu papel é conduzir o acabamento final, organizar uma boa sessão de fotos e mediar as apresentações. Mesmo sem dominar a fundo o Orca Slicer, você consegue tocar a aula, porque o software entra apenas como apoio visual: abriremos o projeto fatiado de cada aluno para comparar a versão na tela com a peça real na mão. Para abrir, basta arrastar o arquivo .3mf (ou .gcode) para a janela do Orca Slicer, ou ir em "Arquivo" e depois "Abrir projeto". Tenha as peças, o kit de acabamento e um cantinho com boa luz prontos antes de começar. Combine de antemão a regra de segurança: estilete e lâminas só com sua supervisão.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): reúna a turma e relembre a jornada do mês. Pergunte: "Por onde começou nosso personagem?" Conduza a resposta — primeiro o desenho em pixel art, depois a modelagem 3D, depois o fatiamento e a impressão. No projetor, mostre rapidamente a mesma peça em três telas: o sprite no Aseprite, o modelo no Blender e o projeto fatiado no Orca Slicer (abra um arquivo de exemplo arrastando-o para a janela). Isso fixa a ideia de pipeline.

Conteúdo novo guiado (15 min): demonstre o acabamento em uma peça de exemplo. Mostre como segurar o alicate de corte e remover com cuidado os restos de suporte, sempre cortando para longe dos dedos. Em seguida, lixe uma rebarba começando por uma lixa mais grossa e terminando em uma mais fina, sempre em movimentos suaves. Explique por que limpamos o pó com um pano antes de fotografar. No Orca Slicer, aproveite para apontar onde estavam os suportes: gire o modelo na tela com o botão direito do mouse arrastando, e relacione as marcas da peça real com a posição dos suportes no software.

Mão na massa (25 min): cada aluno finaliza sua própria peça. Circule pela sala, ajude com a lixa e supervisione qualquer uso de estilete. Quando a peça estiver pronta, leve o aluno ao cantinho de fotos: fundo neutro, boa luz, três fotos no mínimo — uma de frente, uma de cima e uma segurando na mão. Peça que cada um também tire um print do modelo no Orca Slicer para o comparativo. Identifique cada peça com etiqueta.

Desafio e compartilhar (10 min): roda de apresentações. Cada aluno mostra o personagem, diz o nome dele, conta uma escolha de design e o que sentiu ao ver o desenho virar objeto. Celebre cada entrega como um pequeno lançamento.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de uma "linha de montagem da imaginação": a ideia entrou como desenho, ganhou volume na modelagem e saiu como objeto de verdade. Diga algo como: "Olha só, o que era só luz na tela agora cabe na sua mão." Para o acabamento, compare a lixa com passar a mão para tirar farelos: "vamos deixar liso onde a impressora deixou pontudo". Valorize a paciência: "quem lixa com calma ganha uma peça mais bonita". Na hora das fotos, fale como um diretor: "vamos achar a melhor pose do seu personagem".

## Erros comuns e como ajudar

Muitos alunos puxam os suportes com força e quebram detalhes finos; mostre que é melhor cortar com o alicate rente à peça e lixar o resto. Outros lixam demais em um ponto só e criam um buraco — oriente movimentos largos e leves. Há quem queira pintar na pressa: combine que pintura, se houver, é cuidadosa e em camadas finas. Nas fotos, o erro clássico é luz fraca ou fundo bagunçado; tenha o fundo neutro pronto e aproxime a peça da janela ou de uma luminária. Por fim, alguns ficam tímidos na apresentação: dê a eles uma frase-guia ("Este é o ___, e a parte que mais gostei foi ___") para começarem com segurança.`,
  exercicios: [
    {
      titulo: `Acabamento final da minha peça`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Distribua o kit de acabamento e supervisione de perto. Mostre o corte rente com o alicate e a sequência de lixas (da mais grossa para a mais fina). Reforce a segurança com o estilete: só com você por perto.`,
      atividade: `Pegue sua peça impressa e remova com o alicate todos os restos de suporte. Depois, lixe as rebarbas até a superfície ficar lisa ao toque e limpe o pó com o pano. No fim, confira se a base está firme em pé.`,
      gabarito: `A peça fica sem restos de suporte visíveis, com superfícies lisas ao toque, limpa de pó e apoiada de pé com estabilidade. Sinais de bom trabalho: cortes rentes, sem detalhes finos quebrados e sem buracos de lixa em excesso.`,
    },
    {
      titulo: `Antes e depois no Orca Slicer`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Ajude cada aluno a abrir o próprio projeto fatiado arrastando o arquivo .3mf para a janela do Orca Slicer. Mostre como girar o modelo com o botão direito do mouse e como dar zoom com a roda do mouse para enquadrar bem antes do print.`,
      atividade: `Abra seu projeto no Orca Slicer, posicione o modelo numa pose parecida com a da foto que você tirou da peça real e capture um print da tela. Coloque o print do software ao lado da foto da peça e identifique onde estavam os suportes.`,
      gabarito: `O aluno entrega um print do Orca Slicer ao lado da foto da peça real, com o modelo enquadrado de forma comparável. Espera-se que ele aponte ao menos um ponto onde havia suporte no software e a marca correspondente na peça impressa.`,
    },
    {
      titulo: `Sessão de fotos em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Organize o cantinho de fotos com fundo neutro e boa luz. Oriente as duplas a se revezarem: um segura ou posiciona a peça, o outro fotografa. Incentive variar ângulos e checar o foco antes de salvar.`,
      atividade: `Em dupla, fotografem as peças um do outro. Tirem no mínimo três fotos de cada personagem: uma de frente, uma de cima e uma segurando na mão. Escolham juntos a melhor foto de cada peça.`,
      gabarito: `Cada peça tem ao menos três fotos nítidas, em fundo neutro e bem iluminadas, com ângulos diferentes. A dupla consegue justificar qual foto escolheu como a melhor e por quê (foco, luz, enquadramento).`,
    },
    {
      titulo: `Roda da jornada do personagem`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda conectando as três etapas: pixel art, modelagem e impressão. Use a frase-guia para alunos tímidos. Garanta que cada um fale e celebre todas as entregas como um lançamento.`,
      atividade: `Na roda, apresente seu personagem: diga o nome dele, conte uma escolha de design que você fez (cor, formato, proporção) e explique uma dificuldade que superou da pixel art até a peça impressa.`,
      gabarito: `O aluno nomeia o personagem, cita pelo menos uma decisão de design consciente e relata uma dificuldade real ligada a alguma etapa do pipeline. Boa resposta conecta as três fases (desenhar, modelar, imprimir) na história contada.`,
    },
    {
      titulo: `Ficha de entrega do personagem`,
      tipo: `projeto curto`,
      tempo: `13 minutos`,
      guiaProfessor: `Esta atividade fecha o entregável do mês. Oriente o aluno a montar uma página simples (digital ou em folha) com o comparativo das três etapas e a foto final. Confira se o nome do personagem e do aluno estão na etiqueta da peça.`,
      atividade: `Monte a ficha de entrega do seu personagem reunindo: o sprite em pixel art, um print do modelo 3D, um print do projeto no Orca Slicer e a melhor foto da peça impressa. Escreva uma frase contando o que essa jornada te ensinou.`,
      gabarito: `A ficha reúne as quatro imagens (pixel art, modelo 3D, fatiamento e peça real) na ordem do pipeline, mais uma frase de reflexão coerente. A peça está identificada com nome do personagem e do aluno. Esse conjunto é a Peça Impressa entregue como produto do mês.`,
    },
  ],
};
