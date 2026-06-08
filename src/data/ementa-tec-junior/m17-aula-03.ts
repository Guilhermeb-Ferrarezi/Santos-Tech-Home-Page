import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Parado mas cheio de vida",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar a animação de Idle do herói no Aseprite, fazendo uma nova tag de animação e desenhando de 2 a 3 frames de respiração leve, em que o corpo sobe e desce um pouquinho para o personagem parecer vivo mesmo parado.`,
  descricao: `Nesta aula as crianças descobrem um segredo que todo jogo bom esconde: o personagem nunca fica totalmente parado. Mesmo quando o jogador solta o controle e o herói não anda, ele continua respirando, balançando levemente, piscando. Essa animação de quando o personagem está parado tem um nome especial: Idle, que a gente pode chamar de "modo descanso". Sem ela, o herói parece uma estátua congelada; com ela, ele parece vivo e esperando o jogador voltar a brincar.

A grande sacada do Idle é que ele é feito de movimentos minúsculos. Diferente da caminhada da aula passada, em que as pernas se mexem bastante, aqui o corpo só sobe um ou dois pixels e desce de novo, como o peito da gente quando respira fundo e devagar. São pouquíssimas mudanças entre um frame e outro, mas, repetidas em loop, elas enganam o olho e dão a sensação de vida. Por isso esta aula é uma boa lição sobre como pequenas coisas fazem grande diferença.

No Aseprite, as crianças vão usar uma ferramenta nova e muito importante: as tags de animação. Uma tag é como uma etiqueta colorida que marca onde começa e onde termina cada animação dentro da mesma linha de frames. Assim, num arquivo só, o herói pode ter a etiqueta "Andar" (que já fizeram) e agora a etiqueta "Idle". Isso mantém tudo organizado e prepara o terreno para, mais adiante no mês, exportar cada animação certinha para o jogo.

Ao final da hora, cada aluno terá um herói que respira: uma tag chamada "Idle" com 2 ou 3 frames, em que o corpo sobe e desce de leve, rodando em loop suave no preview do Aseprite. É uma animação pequena de fazer, mas que dá um orgulho enorme, porque a criança vê o boneco "ganhar vida" diante dos seus olhos.`,
  materiais: [
    `Computadores (1 por aluno) com o Aseprite já aberto e com o arquivo do herói da semana passada salvo e pronto para abrir`,
    `Projetor ou TV grande para o professor demonstrar cada passo na tela do Aseprite`,
    `Arquivo-exemplo do professor com a animação de Idle já pronta, rodando em loop no preview, para mostrar o objetivo final`,
    `Um vídeo curto ou GIF de um personagem de jogo conhecido em Idle (respirando parado) para mostrar no aquecimento`,
    `Mouse para cada aluno (desenhar pixel a pixel é muito mais fácil com mouse do que com touchpad)`,
    `Cartolina ou quadro branco com os 3 frames de respiração desenhados grandes (corpo embaixo, corpo no meio, corpo em cima)`,
    `Adesivos ou carimbos para premiar quem deixar o herói respirando bonitinho em loop`,
  ],
  conceitosChave: [
    `Idle — a animação de quando o personagem está parado, mas continua respirando e se mexendo um pouquinho.`,
    `Respiração — o movimento leve em que o corpo sobe e desce, igual ao nosso peito quando respiramos.`,
    `Tag de animação — uma etiqueta colorida que marca onde uma animação começa e onde termina na linha de frames.`,
    `Frame — cada quadrinho do desenho; juntando vários quadrinhos em sequência, nasce a animação.`,
    `Loop — quando a animação termina e volta sozinha para o começo, rodando sem parar.`,
    `Pixel — o quadradinho minúsculo que forma o desenho; no Idle o corpo sobe só 1 ou 2 pixels.`,
    `Preview — a janelinha do Aseprite que mostra a animação rodando de verdade, como num jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

O Idle é a animação que o personagem faz quando está parado, sem o jogador mandar ele andar. O truque é que o movimento é mínimo: o corpo sobe 1 ou 2 pixels e desce de novo, como uma respiração lenta. Você vai precisar de duas habilidades no Aseprite: criar frames novos e, principalmente, criar uma tag de animação. Uma tag é uma faixa colorida que aparece em cima da linha de frames (a Timeline, na parte de baixo da tela) e diz "daqui até aqui é a animação Idle". Isso é essencial porque o mesmo arquivo já tem a animação de andar da aula passada; sem tags, tudo vira uma mistura só. Antes da aula, abra o arquivo do herói, crie uma tag de teste e desenhe um Idle simples, para chegar tranquilo. Deixe seu arquivo-exemplo pronto, com o Idle rodando em loop no preview.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Aseprite)

AQUECIMENTO (10 min): Reúna a turma diante do projetor. Mostre o GIF de um personagem parado, respirando. Pergunte: "Ele está andando? Não. Mas está totalmente parado? Também não! O que ele faz?". Conduza até a palavra respirar. Explique que hoje vamos fazer o herói respirar mesmo parado, e que isso se chama Idle. Peça que todos respirem fundo, sintam o peito subir e descer: é exatamente esse o movimento.

CONTEÚDO NOVO GUIADO (15 min): No projetor, vá devagar. 1) Abra o arquivo do herói (menu File, depois Open). 2) Na Timeline (faixa de frames embaixo), clique no primeiro frame do herói parado. 3) Crie a tag: selecione o frame, clique com o botão direito sobre ele na Timeline e escolha New Tag (ou use o botão de tag no canto da Timeline). Dê o nome "Idle" e aperte OK. A faixa colorida aparece marcando esse frame. 4) Agora faça o frame 2: clique no botão de mais (New Frame) ou aperte Alt+N para duplicar o frame. 5) Com a ferramenta de seleção (tecla M) ou movendo o desenho, suba o corpo do herói 1 ou 2 pixels para cima. 6) Crie o frame 3 igual ao primeiro (corpo embaixo de novo). 7) Estenda a tag Idle para cobrir os 3 frames arrastando a pontinha da faixa colorida. 8) Aperte Enter ou clique em Play para ver o preview rodando em loop.

MÃO NA MASSA (25 min): Cada criança faz no seu computador. Circule sem parar. Ordem: abrir o arquivo, criar a tag "Idle" no frame parado, duplicar para ter o frame 2, subir o corpo poucos pixels, criar o frame 3 igual ao primeiro, estender a tag e dar Play. Reforce sempre: o movimento é pequenininho, só um cabelo de diferença.

DESAFIO + COMPARTILHAR (10 min): Desafio: "Faça o herói piscar OU mexer um bracinho de leve em um dos frames". Depois, cada aluno mostra o herói respirando em loop e diz o nome da sua tag. Elogie quem deixou o movimento suave.

## Como explicar para crianças

Use a analogia da respiração: "Encostem a mão no peito e respirem fundo. Sentiram subir e descer? O herói faz a mesma coisa! Ele está parado, mas vivo." Para a tag, diga: "A tag é uma etiqueta com nome, como a etiqueta de uma gaveta. Uma gaveta é a animação de Andar, a outra é a Idle. Assim a gente nunca confunde." Para o tamanho do movimento, faça gesto: "Não é um pulo gigante, é só um soninho de respiração, um cabelinho para cima e para baixo."

## Erros comuns e como ajudar

O erro mais comum é mexer o corpo demais: o herói parece pular, não respirar. Mostre que basta 1 ou 2 pixels e ofereça contar junto "um, dois" enquanto sobe. Outro erro é esquecer de estender a tag: ela cobre só 1 frame e a animação não roda direito; ajude a arrastar a pontinha da faixa colorida até o último frame. Algumas crianças apagam o desenho ao tentar mover; ensine a usar Ctrl+Z para desfazer e a selecionar tudo com Ctrl+A antes de mover. Há quem crie o frame 3 diferente do primeiro, e o loop fica "pulando"; explique que o último frame precisa ser igualzinho ao primeiro para o loop ficar liso. Por fim, quem não acha o preview: lembre que é só apertar Enter ou clicar no botão de Play da janelinha de animação.`,
  exercicios: [
    {
      titulo: `Quem está respirando na tela?`,
      tipo: `Observação e oral (aquecimento)`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o GIF do personagem parado, respirando, no projetor. Faça a turma perceber que ele não anda, mas também não está congelado. O objetivo é fixar a palavra "Idle" e a ideia de respiração antes de tocar no computador. Não precisa de mouse ainda.`,
      atividade: `Olhe para a tela do professor. O personagem está andando? Está totalmente parado como uma estátua? O que o corpo dele faz mesmo sem sair do lugar? Encoste a mão no seu peito e respire fundo para sentir o mesmo movimento.`,
      gabarito: `O personagem não está andando, mas também não está congelado: ele está em Idle, ou seja, parado mas respirando. O corpo sobe e desce de leve, igual ao nosso peito quando respiramos. Essa animação de personagem parado se chama Idle.`,
    },
    {
      titulo: `Criando a etiqueta Idle`,
      tipo: `Prática guiada passo a passo`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto com a turma, devagar, projetando cada clique. Confirme que todos abriram o arquivo do herói e estão com o frame parado selecionado antes de criar a tag. Quem travar, ajude a clicar com o botão direito na Timeline e escolher New Tag.`,
      atividade: `Abra o arquivo do seu herói. Na faixa de frames embaixo (a Timeline), clique no frame do herói paradinho. Agora clique com o botão direito em cima dele e escolha New Tag. Dê o nome "Idle" e aperte OK. Viu a faixinha colorida aparecer? Essa é a sua etiqueta de animação!`,
      gabarito: `O aluno deve ter o arquivo do herói aberto e uma tag chamada "Idle" marcando o frame do herói parado, visível como uma faixa colorida em cima da Timeline. O caminho correto é selecionar o frame, clicar com o botão direito e escolher New Tag, digitar "Idle" e confirmar.`,
    },
    {
      titulo: `O herói respira fundo`,
      tipo: `Prática individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Oriente o caminho: duplicar o frame (Alt+N ou botão New Frame), selecionar o desenho e subir o corpo só 1 ou 2 pixels. Reforce que o movimento é minúsculo. Passe de mesa em mesa conferindo que ninguém fez o herói "pular".`,
      atividade: `Com a tag Idle criada, duplique o frame do herói para ter um frame 2 (aperte Alt+N ou clique no botão de novo frame). Nesse frame 2, selecione o corpo do herói e suba ele só 1 ou 2 pixelzinhos para cima, como se ele puxasse o ar. Não suba muito: é só um respiro!`,
      gabarito: `O aluno deve ter 2 frames dentro da tag Idle: o frame 1 com o herói na posição normal e o frame 2 com o corpo apenas 1 ou 2 pixels mais para cima. O movimento precisa ser pequeno; se o herói subiu muito, parece pulo e está errado.`,
    },
    {
      titulo: `Fechando o ciclo da respiração`,
      tipo: `Prática individual com loop`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora o aluno cria o frame 3 igual ao primeiro (corpo embaixo) e estende a tag Idle para cobrir os 3 frames, arrastando a pontinha da faixa colorida. Depois dá Play. Reforce que o último frame precisa ser igual ao primeiro para o loop ficar liso, e ajude a arrastar a borda da tag.`,
      atividade: `Crie o frame 3 com o corpo do herói lá embaixo de novo, igualzinho ao frame 1. Agora estenda a etiqueta Idle até cobrir os 3 frames, arrastando a pontinha da faixa colorida. Por fim, aperte Enter ou clique em Play para ver o seu herói respirando em loop, sem parar!`,
      gabarito: `O aluno deve ter 3 frames dentro da tag Idle (embaixo, em cima, embaixo), com a tag cobrindo os 3, e o preview rodando em loop suave. O frame 3 deve ser igual ao frame 1, para a respiração subir, descer e voltar sem dar um "pulo" feio no loop.`,
    },
    {
      titulo: `Desafio: um detalhe vivo`,
      tipo: `Desafio criativo e compartilhar`,
      tempo: `10 minutos`,
      guiaProfessor: `Desafio de dificuldade maior: o aluno adiciona um detalhe extra de vida (uma piscada ou um bracinho que mexe) em um dos frames, sem estragar a respiração. Ao final, conduza a roda: cada um mostra o herói respirando em loop e diz o nome da sua tag.`,
      atividade: `Escolha UM detalhe para deixar seu herói ainda mais vivo: faça ele piscar os olhos num dos frames, OU mexer um bracinho de leve, OU balançar o cabelo. Mantenha a respiração funcionando. Depois mostre seu herói respirando em loop para a turma e diga o nome da sua tag.`,
      gabarito: `O aluno deve ter a animação de Idle funcionando em loop com um detalhe extra de vida em pelo menos um frame (olho piscando, braço ou cabelo mexendo) sem quebrar a respiração. No compartilhamento, o herói roda suave em loop e o aluno sabe dizer que o nome da tag é "Idle".`,
    },
  ],
};
