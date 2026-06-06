import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Montando Meu Terreno",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança saberá usar a ferramenta de terreno do Roblox Studio para pintar gramado, levantar montanhas e cavar um lago, deixando o seu mundo com relevo e cores próprias.`,
  descricao: `Nesta aula as crianças dão vida ao chão do mundo que começaram a explorar na Aula 1. Em vez de um piso liso e cinza, elas vão criar um terreno de verdade: com grama verdinha, morros que sobem e um lago que desce. Para isso, usamos a ferramenta de terreno (Terrain) do Roblox Studio, que funciona como um pincel mágico de pintar e moldar o mundo.

Por que isso importa? O terreno é a primeira coisa que um jogador vê e sente quando entra num jogo. Um mundo com montanhas, vales e água parece um lugar real para brincar e se aventurar. Aprender a moldar o terreno ensina a criança a pensar como criadora de mundos: ela decide onde fica o alto, onde fica o fundo e de que cor é cada pedaço. É a base do projeto do mês, o Mundo no Roblox.

O que vamos fazer na prática? Primeiro o professor mostra no projetor onde fica a ferramenta de terreno e como cada botão funciona. Depois cada criança, no seu computador, vai pintar uma área de gramado, usar o pincel para levantar uma montanha (adicionar terra) e depois cavar um buraco que vira lago (tirar terra). No final, todos têm um cenário diferente, com relevo e cores próprias, prontos para receber peças e decoração nas próximas aulas.

A ideia central é mão na massa e descoberta. As crianças não precisam ler nada complicado: elas observam o professor, repetem o gesto de pintar e moldar, e veem o resultado aparecer na hora. O erro aqui é divertido e fácil de desfazer, então todos são incentivados a experimentar sem medo.`,
  materiais: [
    `Computadores (um por criança) com o Roblox Studio aberto e o projeto da Aula 1 já carregado em um lugar plano (baseplate) ou mundo vazio.`,
    `Projetor ou TV grande conectado ao computador do professor, para demonstrar cada passo na tela cheia.`,
    `Um projeto de exemplo já pronto pelo professor, mostrando um terreno com grama, uma montanha e um lago, para servir de modelo.`,
    `Folhas de papel e lápis de cor (verde, marrom, azul) para a atividade de desenho do mapa do terreno.`,
    `Mouse com rodinha (scroll) em cada computador, pois a ferramenta de terreno fica mais fácil de usar com o mouse do que com o touchpad.`,
    `Lista com o nome de cada criança para o professor salvar e identificar cada mundo ao final da aula.`,
    `Crachás ou adesivos coloridos (opcional) para marcar quem já terminou cada etapa: grama, montanha e lago.`,
  ],
  conceitosChave: [
    `Terreno (Terrain) — é o chão do mundo, igual a um tapete de terra que a gente pode pintar, levantar e cavar.`,
    `Pincel — é a bolinha mágica que aparece na tela; onde você passa o pincel, o terreno muda.`,
    `Adicionar (Add) — é colocar mais terra; com o pincel a gente empurra o chão para cima e nasce uma montanha.`,
    `Subtrair (Subtract) — é tirar terra; com o pincel a gente cava o chão para baixo e faz um buraco que vira lago.`,
    `Pintar (Paint) — é trocar a cor e o tipo do chão, como passar tinta verde para virar grama ou azul para virar água.`,
    `Material — é do que o chão é feito: grama, areia, pedra ou água; cada um tem sua cor e textura.`,
    `Tamanho do pincel (Brush Size) — é o quanto a bolinha mágica é grande; pincel grande muda muito chão, pincel pequeno muda pouquinho.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O Roblox Studio tem uma área especial só para construir o chão do mundo, chamada Terrain (terreno). Você encontra as ferramentas dela no menu de cima. Clique na aba HOME (Início) ou na aba MODEL (Modelo) e procure o botão grande escrito Terrain (ou Editor de Terreno). Ao clicar nele, abre um painel à direita da tela com vários botões. Os três que vamos usar nesta aula são: Add (Adicionar), Subtract (Subtrair) e Paint (Pintar). Cada um vira um pincel: você clica e arrasta o mouse dentro do mundo para mudar o chão.

Pense no terreno como massinha de modelar gigante. Add empurra a massinha para cima e cria morros e montanhas. Subtract tira massinha e cria buracos, que viram lagos quando a gente pinta de água. Paint não muda a altura, só troca o material (grama, areia, pedra, água). No painel você também escolhe o Brush Size (tamanho do pincel) e o Material (do que o chão é feito). Antes da aula, faça você mesmo uma grama, uma montanha e um lago para se sentir seguro nos gestos.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma e abra o seu mundo de exemplo no projetor. Mostre o terreno cheio de grama, a montanha e o lago, e diga: "Hoje cada um vai construir um chão assim, do seu jeito!". Relembre da Aula 1 onde fica o botão para mover a câmera (segurar o botão direito do mouse e arrastar para olhar em volta; usar as teclas W, A, S, D para andar).

Conteúdo novo guiado (15 min): no projetor, clique na aba HOME, depois no botão Terrain. No painel da direita, clique em Paint. Escolha o material Grass (Grama) e mostre como arrastar o pincel pelo chão para pintar de verde. Depois clique em Add, aumente um pouco o Brush Size e arraste para cima do chão, mostrando a montanha crescendo. Por fim clique em Subtract e cave um buraco; troque para Paint com material Water (Água) e pinte o buraco de azul para virar lago.

Mão na massa (25 min): cada criança no seu computador repete os três passos na sua ordem: 1) pintar uma área de grama; 2) levantar uma montanha com Add; 3) cavar um lago com Subtract e pintar de água. Circule pela sala, sente ao lado de quem travar e guie a mão no mouse. Use os crachás coloridos para marcar quem terminou cada etapa.

Desafio + compartilhar (10 min): proponha um detalhe extra, como uma segunda montanha menor ou uma praia de areia (material Sand). Depois, peça que cada criança gire a câmera e mostre o terreno para o coleguinha ao lado, contando o que fez.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Fale sempre com imagens: "o pincel é uma bolinha mágica", "Add é soprar o chão para cima como um balão", "Subtract é cavar com uma colher gigante", "Paint é passar tinta". Evite palavras em inglês sozinhas; diga o nome em português junto: "Add, que é adicionar terra". Faça o gesto com a mão no ar antes de pedir para a criança fazer no mouse. Comemore cada montanha e cada lago em voz alta para manter o ânimo.

## Erros comuns e como ajudar

As crianças costumam: 1) clicar uma vez só e achar que não funcionou (ensine a arrastar o mouse devagar); 2) usar pincel gigante e estragar tudo (ajude a diminuir o Brush Size); 3) esquecer de trocar de ferramenta e cavar quando queriam pintar (mostre os três botões Add, Subtract, Paint); 4) ficar perdidas na câmera e não ver o que fizeram (relembre o botão direito do mouse para girar). Lembre sempre: errar é fácil de desfazer com Ctrl+Z, então pode experimentar à vontade.`,
  exercicios: [
    {
      titulo: `Pintando o Tapete de Grama`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor como clicar em Terrain, depois em Paint, e escolher o material Grass (Grama). Faça um traço de grama na sua tela e peça que cada criança repita no computador dela. Circule e guie a mão de quem travar, lembrando de arrastar o mouse devagar.`,
      atividade: `Cada criança escolhe a ferramenta Paint, seleciona o material Grass e pinta uma área grande de grama no seu mundo, como se estivesse forrando o chão com um tapete verde.`,
      gabarito: `Acertou quem deixou uma área visível do chão coberta de grama verde. Se aparecer uma mancha verde no terreno e a criança souber dizer "isto é grama", está correto.`,
    },
    {
      titulo: `Nasce uma Montanha`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Demonstre o botão Add (Adicionar) e o controle Brush Size (tamanho do pincel). Mostre que, arrastando o pincel sobre o chão, a terra sobe e vira morro. Ajude as crianças a usar um pincel de tamanho médio para não exagerar.`,
      atividade: `Usando a ferramenta Add, cada criança arrasta o pincel sobre a grama até formar uma montanha que suba bem acima do chão. Quem quiser pode fazer duas montanhas.`,
      gabarito: `Acertou quem tem pelo menos um relevo claramente mais alto que o chão em volta, formando um morro ou montanha visível ao girar a câmera.`,
    },
    {
      titulo: `Cavando o Lago Azul`,
      tipo: `Desafio prático`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o botão Subtract (Subtrair) para cavar um buraco e, em seguida, volte em Paint com o material Water (Água) para encher o buraco de azul. Reforce a diferença entre cavar (Subtract) e pintar (Paint).`,
      atividade: `Cada criança cava um buraco no terreno com Subtract e depois pinta o fundo do buraco com o material Water, criando um lago azul perto da montanha.`,
      gabarito: `Acertou quem tem um buraco no chão preenchido com o material Água, formando um lago azul. Se houver depressão no terreno com cor de água, está correto.`,
    },
    {
      titulo: `Jogo do Pincel Mágico`,
      tipo: `Jogo / roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Em roda, o professor diz em voz alta uma ação ("montanha!", "lago!", "grama!") e as crianças respondem qual ferramenta usar: Add, Subtract ou Paint, fazendo o gesto com a mão. É um jogo rápido para fixar os três botões.`,
      atividade: `O professor grita uma palavra (montanha, lago, grama ou praia) e a turma responde junto o nome da ferramenta certa e imita o gesto: empurrar para cima, cavar para baixo ou passar tinta.`,
      gabarito: `Acertou quem associa corretamente: montanha = Add (adicionar), lago/buraco = Subtract (subtrair), grama/praia/água = Paint (pintar). O professor confirma cada resposta na hora.`,
    },
    {
      titulo: `O Mapa do Meu Mundo`,
      tipo: `Desenho / papel`,
      tempo: `5 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Peça que cada criança desenhe, vista de cima, o terreno que construiu: onde está a grama, a montanha e o lago. É um momento calmo para fechar a aula e fixar os conceitos sem o computador.`,
      atividade: `Cada criança desenha no papel o mapa do seu mundo, usando verde para a grama, marrom para a montanha e azul para o lago, e mostra para a turma onde fica cada parte.`,
      gabarito: `Acertou quem desenhou pelo menos três elementos identificáveis (grama, montanha e lago) com cores coerentes (verde, marrom e azul) e consegue apontar cada um no próprio desenho.`,
    },
  ],
};
