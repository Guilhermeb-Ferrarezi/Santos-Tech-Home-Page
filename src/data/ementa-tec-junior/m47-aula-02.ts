import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Construindo o cenário do jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Montar o mapa base do jogo no Roblox Studio com chão, paredes, plataformas e ponto de partida (spawn), usando materiais e cores para dar a cara da ideia da criança.`,
  descricao: `Na aula passada o aluno abriu o Roblox Studio e conheceu a tela: a janela do mundo no centro, a caixa Explorer com a lista de tudo que existe na cena, e a caixa Properties com os ajustes de cada peça. Hoje é hora de usar tudo isso de verdade e construir o cenário completo do jogo. O cenário é o palco onde a aventura vai acontecer: sem chão o personagem cai no vazio, sem paredes ele escapa do mapa, e sem plataformas não existe desafio para pular.

A peça mais importante do Roblox se chama Part. Uma Part é um bloco que a gente estica, encolhe, move e pinta. Com vários blocos juntos a criança constrói um castelo, uma ilha flutuante, um labirinto ou uma corrida de obstáculos. Nesta aula o professor vai mostrar como inserir uma Part, como esticá-la para virar um chão grande, como empilhar blocos para fazer paredes e como espalhar plataformas para o jogador pular de uma à outra.

Além de construir, o aluno vai deixar o cenário bonito e com personalidade. No Roblox cada Part tem um Material (madeira, grama, metal, neon) e uma Color (a cor). Trocar material e cor é o que transforma um amontoado de blocos cinzas num lugar com cara de floresta, de gelo ou de espaço. O professor também vai ensinar a colocar o Spawn Location, que é o ponto onde o jogador nasce quando o jogo começa: sem ele, o personagem aparece em qualquer lugar.

Ao final da aula cada criança terá o mapa base pronto e salvo: chão firme, paredes que prendem o jogador, pelo menos três plataformas e um ponto de partida. Esse mapa é a fundação. Nas próximas aulas, sobre esse cenário, vamos colocar os scripts em Lua que dão movimento, regras e objetivos. Hoje a missão é só uma: deixar o palco pronto e com a cara da ideia de cada aluno.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e um lugar de trabalho (Baseplate) já criado por aluno`,
    `Projetor ou TV grande ligado ao computador do professor para mostrar cada clique`,
    `Um cenário-exemplo pronto pelo professor (chão, paredes, três plataformas e spawn) para mostrar a meta`,
    `Folha impressa com a checklist do mapa: chão, paredes, plataformas, spawn, materiais e cores`,
    `Mouse com rodinha para cada aluno (ajuda muito a girar e aproximar a câmera)`,
    `Cartões com nomes de cenários (floresta, gelo, espaço, lava) para a criança escolher um tema`,
  ],
  conceitosChave: [
    `Part — o bloco básico do Roblox; é a peça que a gente estica, move e pinta para construir tudo.`,
    `Explorer — a caixa que mostra a lista de tudo que existe no jogo, como um índice do mundo.`,
    `Properties — a caixa de ajustes que muda tamanho, cor, material e posição da peça escolhida.`,
    `Material — o tipo da superfície da Part, como madeira, grama, metal ou neon, que muda o visual.`,
    `Color — a cor da peça; trocar a cor deixa o cenário com a cara da sua ideia.`,
    `Plataforma — um bloco no ar para o jogador pular de um lugar a outro e vencer o desafio.`,
    `Spawn Location — o ponto de partida; o lugar onde o personagem nasce quando o jogo começa.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista no Roblox para dar esta aula. Tudo gira em torno de uma peça só: a Part (o bloco). Memorize quatro lugares da tela: a aba Home (em cima), o botão Part dentro dela, a caixa Explorer (à direita, lista de tudo) e a caixa Properties (logo abaixo do Explorer, os ajustes da peça). Para inserir uma peça você clica em Part. Para mexer nela use as três ferramentas Move (mover), Scale (esticar) e Rotate (girar), que ficam na aba Home ou Model. Para mudar visual, selecione a peça e procure Material e Color dentro de Properties. Para o ponto de partida, em vez de Part você usa Spawn: na aba Model, clique em Spawn. Faça o cenário-exemplo em casa antes para conhecer o caminho dos cliques.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: o que vimos na aula 1? Mostre no projetor o Explorer e o Properties e relembre que cada peça aparece na lista. Mostre o seu cenário-exemplo pronto e diga: hoje cada um vai construir um igual, mas com a sua ideia.

15 min — Conteúdo novo guiado. No projetor, clique na aba Home e depois no botão Part: surge um bloco. Selecione a ferramenta Scale (ícone com setas para os cantos) e arraste as bolinhas para esticar o bloco e virar um chão grande e baixinho. Insira outra Part, use Scale para deixá-la fina e alta e vire uma parede; com a ferramenta Move (setas) encoste-a na borda do chão. Repita para cercar o mapa. Para a plataforma, insira uma Part pequena e com Move levante-a no ar. Por fim, clique na aba Model e no botão Spawn para colocar o ponto de partida sobre o chão. Mostre como mudar Material e Color na caixa Properties.

25 min — Mão na massa. Cada criança constrói o próprio mapa seguindo a checklist: 1 chão grande, paredes nas bordas, pelo menos 3 plataformas no ar e 1 Spawn sobre o chão. Circule pela sala. Lembre sempre: clique em Part, depois escolha a ferramenta (Move, Scale ou Rotate) antes de arrastar. Incentive trocar Material e Color para o tema escolhido (floresta, gelo, espaço). Peça para clicar no botão Play (triângulo no topo) e testar se o personagem nasce no Spawn e anda no chão.

10 min — Desafio e compartilhar. Lance o desafio: colocar uma plataforma bem alta que precise de dois pulos. Depois, dois ou três alunos mostram o mapa no projetor e dizem qual é o tema. Todos salvam com File e Save (Ctrl+S).

## Como explicar para crianças

Use a ideia de palco de teatro: antes dos atores entrarem, alguém monta o cenário. A Part é como um bloco de montar gigante: a gente estica para virar chão, empilha para virar parede e levanta no ar para virar plataforma. Material é a roupa do bloco e Color é a cor da roupa. O Spawn é a porta de entrada do jogo: é por ali que o personagem chega ao mundo. Diga sempre primeiro escolho a ferramenta, depois arrasto.

## Erros comuns e como ajudar

Muitas crianças tentam arrastar a peça sem escolher Move, Scale ou Rotate antes, e nada acontece do jeito esperado; mostre que a ferramenta vem primeiro. Outras esticam o chão tão fino que ele some de vista; peça para girar a câmera com o botão direito do mouse e usar a rodinha para afastar. Algumas esquecem o Spawn e, ao apertar Play, o personagem cai no vazio; lembre que sem ponto de partida não há onde nascer. Há quem deixe buracos entre as paredes e o jogador escapa; oriente a encostar bem um bloco no outro. E sempre reforce salvar com Ctrl+S para não perder o trabalho.`,
  exercicios: [
    {
      titulo: `Caça aos nomes na tela`,
      tipo: `Revisão guiada (oral e apontando)`,
      tempo: `7 minutos`,
      guiaProfessor: `Faça no aquecimento. Aponte no projetor e peça que a turma diga o nome de cada parte da tela. Reforce que o Explorer lista tudo e o Properties ajusta a peça escolhida.`,
      atividade: `Olhe a tela do Roblox Studio e responda em voz alta: qual caixa mostra a lista de tudo que existe no jogo? Qual caixa muda o tamanho e a cor de uma peça? Qual é o nome do bloco básico que usamos para construir?`,
      gabarito: `A caixa que lista tudo é o Explorer. A caixa que muda tamanho e cor é o Properties. O bloco básico se chama Part.`,
    },
    {
      titulo: `Esticando o primeiro chão`,
      tipo: `Prática passo a passo`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre antes no projetor. Garanta que cada aluno clique em Part e só depois escolha a ferramenta Scale. Quem arrasta sem ferramenta não consegue esticar.`,
      atividade: `Clique na aba Home e no botão Part para criar um bloco. Escolha a ferramenta Scale e arraste as bolinhas até o bloco virar um chão bem largo e baixinho, do tamanho de um campo. Depois mude o Material para Grass na caixa Properties.`,
      gabarito: `Surge uma Part; com Scale o aluno alarga e achata o bloco virando um chão grande; em Properties o campo Material fica como Grass (grama). O chão fica largo, baixo e verde.`,
    },
    {
      titulo: `Cercando o mapa com paredes`,
      tipo: `Construção orientada`,
      tempo: `10 minutos`,
      guiaProfessor: `Circule pela sala. O erro comum é deixar buracos entre as paredes. Mostre como usar Move para encostar um bloco bem no outro, sem vãos.`,
      atividade: `Insira novas Parts e, com a ferramenta Scale, deixe cada uma fina e alta para virar parede. Com a ferramenta Move, encoste as paredes nas quatro bordas do chão, fechando todo o mapa, sem deixar buraco por onde o jogador possa escapar.`,
      gabarito: `O chão fica cercado por quatro paredes finas e altas, encostadas nas bordas e uma na outra, sem vãos. Ao testar, o personagem não consegue sair do mapa.`,
    },
    {
      titulo: `Plataformas e ponto de partida`,
      tipo: `Construção com teste no Play`,
      tempo: `12 minutos`,
      guiaProfessor: `Reforce que o Spawn fica na aba Model, não no botão Part. Peça para apertar Play e conferir se o personagem nasce no Spawn e pisa nas plataformas.`,
      atividade: `Crie pelo menos 3 plataformas: insira Parts pequenas e, com a ferramenta Move, levante-as no ar em alturas diferentes. Depois, na aba Model, clique em Spawn e coloque o ponto de partida sobre o chão. Aperte o botão Play e teste se o personagem nasce no Spawn e consegue pular de uma plataforma para outra.`,
      gabarito: `Há 3 ou mais plataformas flutuando em alturas diferentes e 1 Spawn apoiado no chão. Ao apertar Play, o personagem nasce no Spawn e consegue subir pulando de plataforma em plataforma.`,
    },
    {
      titulo: `Meu cenário com a minha cara`,
      tipo: `Desafio criativo + compartilhar`,
      tempo: `13 minutos`,
      guiaProfessor: `Atividade de fechamento. Deixe a criança escolher um tema (floresta, gelo, espaço, lava) e trocar Material e Color para combinar. Ao final, peça que apresente e salve com Ctrl+S.`,
      atividade: `Escolha um tema para o seu mundo (por exemplo floresta, gelo, espaço ou lava). Troque o Material e a Color das peças do cenário para combinar com o tema: gelo pode ser azul e material Ice, lava pode ser laranja com Neon. Adicione uma plataforma bem alta que precise de dois pulos. Depois, mostre o seu mapa para a turma e diga qual é o tema. No fim, salve com File e Save, ou Ctrl+S.`,
      gabarito: `O mapa fica com Material e Color coerentes com o tema escolhido (por exemplo azul e Ice para gelo) e tem uma plataforma alta que exige dois pulos. A criança apresenta o tema para a turma e salva o trabalho com Ctrl+S.`,
    },
  ],
};
