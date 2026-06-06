import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Pintando com cores",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a usar a paleta e a ferramenta de pintura do MagicaVoxel para colorir cada parte do modelo, trocando de cor e usando tons claros e escuros para deixar a criação mais viva e organizada.`,
  descricao: `Nas aulas anteriores as crianças deram forma ao próprio modelo, empilhando e apagando cubinhos até ele ficar com o formato certo. Agora chegou a parte mais colorida e divertida do mês: pintar! Nesta aula o modelo deixa de ser de uma cor só e ganha vida. O cabelo fica marrom, a camiseta fica azul, os sapatos ficam pretos. Cada parte recebe a sua cor, igual a um livro de colorir, só que em três dimensões.

No MagicaVoxel, pintar é diferente de desenhar no papel. Cada voxel (cada cubinho) tem a sua própria cor, e a criança escolhe a cor na paleta antes de pintar. A paleta é aquela faixa cheia de quadradinhos coloridos que fica do lado da tela. Para trocar de cor, basta clicar em um quadradinho novo. Depois, com a ferramenta de pintura, a criança passa o mouse por cima dos cubinhos e eles mudam de cor, sem aumentar nem diminuir o modelo.

Um conceito importante desta aula é o de tons claros e escuros. Em vez de usar um azul só, a criança pode usar um azul mais claro na frente e um azul mais escuro embaixo ou atrás. Isso cria a sensação de luz e sombra e deixa o modelo muito mais bonito e fácil de entender. É a primeira noção de como artistas de verdade dão volume às suas criações usando apenas a cor.

Ao final da aula, cada criança terá o seu modelo totalmente colorido, com cada parte na sua cor e pelo menos um detalhe usando dois tons da mesma cor. O resultado é um boneco ou objeto cheio de personalidade, pronto para receber os últimos detalhes nas próximas aulas e, mais para a frente, virar uma impressão 3D de verdade.`,
  materiais: [
    `Computadores com o MagicaVoxel aberto e o modelo de cada criança já carregado`,
    `Projetor ou TV grande conectada para o professor demonstrar onde clicar`,
    `Exemplo pronto: dois modelos iguais, um sem cor (cinza) e um totalmente colorido, para comparar`,
    `Cartão impresso com a "regra das três cores": uma cor para cada parte principal do modelo`,
    `Folha de papel e lápis de cor para a criança planejar as cores antes de pintar na tela`,
    `Mouse para cada computador (pintar voxel a voxel fica muito mais fácil com mouse do que com touchpad)`,
    `Adesivos de "Artista do Voxel" para premiar quem usar tons claros e escuros`,
  ],
  conceitosChave: [
    `Voxel — o cubinho mágico que forma o seu modelo em 3D; cada um pode ter a sua própria cor.`,
    `Paleta — a faixa cheia de quadradinhos coloridos onde você escolhe a cor antes de pintar.`,
    `Ferramenta de pintura (Paint) — o modo que troca a cor do cubinho sem aumentar nem diminuir o modelo.`,
    `Cor selecionada — o quadradinho da paleta que está marcado; é a cor que vai sair quando você pintar.`,
    `Tom claro e tom escuro — a mesma cor mais clarinha ou mais escura, usada para imitar luz e sombra.`,
    `Conta-gotas (Picker) — a ferramenta que copia uma cor que já está no modelo para você usar de novo.`,
    `Balde — o modo que pinta vários cubinhos juntos de uma vez, em vez de um por um.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista para dar esta aula. O MagicaVoxel separa bem as ferramentas, e pintar é só escolher uma cor e passar o mouse. Antes da aula, abra o MagicaVoxel e localize três regiões da tela. A PALETA fica à esquerda: é a grade colorida cheia de quadradinhos. Em cima da área de trabalho, ou logo abaixo da paleta dependendo da versão, ficam as FERRAMENTAS de edição, com os botões Attach (adicionar), Erase (apagar) e Paint (pintar). À direita fica a janela 3D, onde o modelo aparece.

O segredo desta aula é o botão Paint (pintar). Quando ele está ativo, passar o mouse sobre os cubinhos só troca a cor deles, sem criar nem apagar nada. Para escolher a cor, clique uma vez no quadradinho desejado da paleta: ele fica destacado, mostrando que é a cor selecionada. Conheça também dois ajudantes: o conta-gotas (Picker), que copia uma cor que já está no modelo, e o modo de pintura em região maior (às vezes chamado de Box ou balde), que pinta vários cubinhos de uma vez.

Deixe o modelo de cada criança já aberto antes da aula começar e tenha à mão o exemplo dos dois modelos lado a lado: um cinza e um colorido. A comparação visual vende a aula sozinha.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Mostre no projetor os dois modelos iguais, um cinza e um colorido. Pergunte: "Qual é mais legal? Por quê?" Conduza a conversa até a ideia de que a cor conta uma história. Relembre rapidamente que o modelo já está com o formato pronto e que hoje não vamos mexer na forma, só pintar.

Conteúdo novo guiado (15 min): No projetor, clique no botão Paint (pintar) e mostre que ele fica destacado. Depois clique em um quadradinho azul na paleta à esquerda e mostre que ele fica selecionado. Passe o mouse sobre alguns cubinhos do modelo e eles ficam azuis, sem mudar de tamanho. Troque de cor clicando em outro quadradinho e pinte outra parte. Por fim, mostre os tons: clique em um azul claro e em um azul escuro da paleta e pinte a frente com o claro e a parte de baixo com o escuro, criando luz e sombra. Apresente rapidinho o conta-gotas: clique nele, depois em uma cor que já está no modelo, e ela volta a ficar selecionada.

Mão na massa (25 min): As crianças pintam o próprio modelo. Oriente a usar a "regra das três cores": uma cor para cada parte principal (cabelo, roupa, sapato, por exemplo). Circule pela sala. Quem terminar de pintar as partes principais é desafiado a escolher uma parte e usar dois tons da mesma cor, claro e escuro, para dar volume.

Desafio e compartilhar (10 min): Desafie cada um a achar UMA parte do modelo que ainda está sem graça e dar a ela um detalhe colorido. Encerre com uma "galeria": cada criança gira o seu modelo na tela e mostra para a turma. A turma aponta a cor de que mais gostou.

## Como explicar para crianças

Use a analogia do livro de colorir: "Antes a gente desenhou o contorno com os cubinhos; agora vamos colorir por dentro, só que o nosso desenho é de verdade, em 3D!" Explique a paleta como uma "caixa de lápis de cor": você pega um lápis (clica na cor) antes de pintar. Para os tons, diga que a luz do sol bate mais forte em cima, então em cima a cor é mais clarinha, e embaixo, onde fica a sombra, a cor é mais escura. Lembre sempre: no modo pintar, os cubinhos não somem nem crescem, só trocam de roupa.

## Erros comuns e como ajudar

A criança apaga ou aumenta o modelo sem querer: ela está no botão Erase ou Attach; mostre como voltar para Paint. Tudo fica de uma cor só porque ela esqueceu de trocar a cor na paleta: relembre o passo de clicar no quadradinho novo antes de pintar. A criança pinta o ar (clica fora do modelo): explique que a cor só "gruda" em cima de um cubinho. Some uma cor bonita que ela tinha usado: ensine o conta-gotas para recuperá-la. A criança quer pintar tudo rápido e bagunça: mostre o modo de pintar em região maior para áreas grandes e peça calma nas partes pequenas.`,
  exercicios: [
    {
      titulo: `Cinza ou colorido?`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor os dois modelos iguais, um cinza e um colorido. Pergunte qual é mais legal e por quê. Conduza até a ideia de que a cor mostra quem é cada parte do modelo. É um aquecimento para abrir os olhos das crianças para a cor.`,
      atividade: `Olhe os dois bonecos na tela: um é todo cinza e o outro é colorido. Diga qual você acha mais legal e tente explicar por que a cor faz diferença.`,
      gabarito: `A criança escolhe o modelo colorido e justifica de forma simples, como "dá pra ver o cabelo" ou "parece de verdade". Acerto = perceber que a cor ajuda a entender e a deixar o modelo mais bonito. Não existe escolha errada, mas o objetivo é chegar nessa ideia.`,
    },
    {
      titulo: `Escolhendo a cor na paleta`,
      tipo: `Prática no MagicaVoxel`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre a paleta colorida à esquerda da tela. Peça para a criança clicar em uma cor e reparar que o quadradinho fica destacado. Confirme que cada um sabe achar a paleta e selecionar uma cor antes de começar a pintar.`,
      atividade: `Olhe a faixa cheia de quadradinhos coloridos do lado da tela. Clique na sua cor favorita e veja o quadradinho dela ficar marcado. Agora clique em outra cor diferente.`,
      gabarito: `A criança clica em um quadradinho da paleta e ele fica destacado como cor selecionada, e consegue trocar para outra. Acerto = saber que precisa escolher a cor na paleta antes de pintar. Exemplo: clicar no vermelho e depois trocar para o verde.`,
    },
    {
      titulo: `Pintando voxel a voxel`,
      tipo: `Prática no MagicaVoxel`,
      tempo: `8 minutos`,
      guiaProfessor: `Confirme que o botão Paint (pintar) está ativo e destacado. Mostre que, ao passar o mouse sobre os cubinhos, eles trocam de cor sem aumentar nem apagar. Se a criança apagar ou criar cubinhos sem querer, ela está em Erase ou Attach: leve-a de volta ao Paint.`,
      atividade: `Aperte o botão de pintar (Paint), escolha uma cor na paleta e pinte uma parte do seu modelo, passando o mouse devagar por cima dos cubinhos. Repare que eles só trocam de cor, sem sumir nem crescer.`,
      gabarito: `Os cubinhos de uma parte do modelo mudam para a cor escolhida, sem alteração na forma. Acerto = pintar com o Paint ativo, sem apagar nem adicionar voxels. Erro comum: estar no Erase e apagar; a solução é voltar para o botão Paint.`,
    },
    {
      titulo: `Cada parte na sua cor`,
      tipo: `Desafio guiado`,
      tempo: `10 minutos`,
      guiaProfessor: `Apresente a "regra das três cores": uma cor diferente para cada parte principal do modelo. Ajude a criança a planejar antes (no papel ou falando) e depois a trocar de cor na paleta a cada parte. Circule garantindo que ninguém pinte tudo da mesma cor.`,
      atividade: `Pinte o seu modelo dando uma cor diferente para cada parte principal: por exemplo, uma cor para o cabelo, uma para a roupa e uma para os sapatos. Troque a cor na paleta toda vez que mudar de parte.`,
      gabarito: `O modelo fica com pelo menos três partes em cores diferentes, cada uma correspondendo a uma parte real do desenho. Acerto = lembrar de trocar a cor na paleta a cada parte. Exemplo: cabelo marrom, camiseta azul, sapato preto.`,
    },
    {
      titulo: `Luz e sombra com dois tons`,
      tipo: `Desafio final`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como escolher um tom claro e um tom escuro da mesma cor na paleta. Peça para a criança pintar a parte de cima de uma região com o tom claro (luz) e a parte de baixo ou de trás com o tom escuro (sombra). Quem conseguir ganha o adesivo de "Artista do Voxel". Valorize a tentativa.`,
      atividade: `Escolha uma parte do seu modelo e pinte ela com duas cores parecidas: o tom mais clarinho em cima, onde bate a luz, e o tom mais escuro embaixo, na sombra. Veja como essa parte ganha volume.`,
      gabarito: `Uma região do modelo aparece com dois tons da mesma cor, claro em cima e escuro embaixo, criando sensação de luz e sombra. Acerto = usar dois tons da mesma família de cor de propósito. Exemplo: azul claro no topo da camiseta e azul escuro na barriga.`,
    },
  ],
};
