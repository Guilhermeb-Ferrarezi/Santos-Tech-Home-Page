import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Nasce o Personagem: Corpo e Cabeça",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança terá montado a base do seu personagem 3D no MagicaVoxel, empilhando um corpo (uma caixa de cubinhos) e uma cabeça (um cubo) e escolhendo se ele será gordinho, alto ou baixinho.`,
  descricao: `Esta é a aula em que o projeto do mês ganha vida! Nas duas primeiras aulas, as crianças aprenderam a girar o mundo 3D e a construir colocando e tirando cubinhos. Agora elas vão usar tudo isso para começar a criar um personagem de verdade, que mais tarde será pintado, decorado e impresso para levar para casa.

A ideia central é simples e poderosa: todo personagem, por mais legal que pareça, nasce de formas grandes e fáceis. Em vez de tentar fazer o boneco inteiro de uma vez, a gente monta primeiro o corpo, que é uma caixa de cubinhos, e depois encaixa a cabeça em cima, que é um cubo. É como empilhar duas caixas, uma maior embaixo e uma menor em cima. Essa base é o esqueleto do projeto, e nas próximas aulas ela vai ganhar bracinhos, perninhas, rostinho e cores.

O grande momento desta aula é a escolha de cada criança. Depois que todos aprenderem a montar a base juntos, cada um decide o jeitão do seu personagem: gordinho (corpo mais largo), alto (corpo mais comprido para cima) ou baixinho (corpo mais baixo e fofo). Assim, mesmo seguindo o mesmo passo a passo, cada personagem fica único, com a cara do seu dono. Isso deixa as crianças orgulhosas e animadas para continuar.

O professor conduz tudo de forma demonstrada, mostrando no projetor onde clicar e construindo junto. As crianças desta idade leem e escrevem pouco, então o segredo é o professor fazer primeiro, devagar, e elas repetirem olhando. O objetivo não é perfeição, e sim que cada um termine com duas formas empilhadas e um sorriso no rosto.`,
  materiais: [
    `Um computador por criança com o MagicaVoxel já aberto, com um modelo novo e vazio na tela.`,
    `Computador do professor ligado ao projetor ou TV grande, para todos verem onde clicar.`,
    `Arquivo de exemplo salvo (um personagem com corpo e cabeça já empilhados) para mostrar como ficará o resultado.`,
    `Duas caixas de papelão de tamanhos diferentes (uma maior e uma menor) para empilhar e mostrar a ideia na vida real.`,
    `Folhas de papel quadriculado grosso e lápis de cor para o exercício de desenho.`,
    `Adesivos ou carimbos de estrelinha para premiar quem terminar a base.`,
    `Lista com os nomes das crianças para o professor anotar quem escolheu gordinho, alto ou baixinho.`,
  ],
  conceitosChave: [
    `Personagem — o bonequinho que a gente está criando, o herói da nossa história em cubinhos.`,
    `Corpo — a caixa grande de cubinhos que fica embaixo, o tronco do personagem.`,
    `Cabeça — o cubo menor que a gente empilha em cima do corpo, onde depois vai o rostinho.`,
    `Empilhar — colocar uma forma em cima da outra, como montar caixas ou blocos de brinquedo.`,
    `Forma — o jeitão de uma coisa: uma caixa comprida, um cubo, uma bola. Tudo começa com formas simples.`,
    `Gordinho, alto e baixinho — os três jeitos de deixar o corpo do personagem: mais largo, mais comprido para cima ou mais baixo e fofo.`,
    `Base — o começo do personagem, só o corpo e a cabeça, sem braços nem rosto ainda.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Nesta aula você vai guiar a turma a construir a base de um personagem: um corpo (uma caixa de cubinhos) e uma cabeça (um cubo) empilhados. Você não precisa ser artista nem dominar o MagicaVoxel a fundo. Precisa saber três coisas: colocar cubinhos, apagar cubinhos e girar a cena. No MagicaVoxel, cada cubinho se chama voxel (é o pixel em 3D). A área onde a gente constrói é a caixa de trabalho, mostrada por linhas finas. As ferramentas ficam na barra da esquerda: o ícone de lápis ou o botão Attach coloca voxels; o botão Erase (borracha) apaga. Para girar a cena, segure o botão direito do mouse e arraste; para dar zoom, use a rodinha do mouse. Memorize isto: corpo grande embaixo, cabeça menor em cima, como duas caixas empilhadas.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — aquecimento e revisão: Receba a turma e relembre as aulas passadas. Peça que cada criança gire o mundo no seu computador (botão direito + arrastar) e coloque dois ou três cubinhos para aquecer. Mostre no projetor o arquivo de exemplo com o personagem pronto e diga: hoje a gente começa o nosso!

15 min — conteúdo novo guiado: No projetor, empilhe as duas caixas de papelão (a maior embaixo, a menor em cima) e diga que o personagem é assim. Depois, no MagicaVoxel, construa o corpo: com a ferramenta de colocar voxel ativa (lápis ou Attach), clique e arraste para formar uma caixa cheia, mais ou menos 4 cubinhos de largura por 4 de fundo por 5 de altura. Em seguida, faça a cabeça: em cima do corpo, monte um cubo menor, cerca de 3 por 3 por 3. Vá devagar, narrando cada clique e girando a cena para mostrar de todos os lados.

25 min — mão na massa: Agora cada criança constrói a sua. Circule pela sala. Primeiro todos fazem o corpo, depois a cabeça. Quando todos tiverem a base, anuncie a escolha: cada um decide se o seu será gordinho (deixe o corpo mais largo, colocando mais voxels nas laterais), alto (suba o corpo com mais camadas) ou baixinho (corpo mais baixo). Mostre cada opção no projetor antes. Anote na sua lista a escolha de cada um para retomar na próxima aula.

10 min — desafio e compartilhar: Lance o desafio de girar o personagem e olhar por baixo e por cima para conferir se não ficou nenhum buraco no corpo. Depois, faça a roda: cada criança gira o seu na tela e diz se ficou gordinho, alto ou baixinho. Salve o arquivo de cada um (menu, Save) com o nome da criança e dê uma estrelinha.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Fale sempre com comparações que elas conhecem. Diga que o corpo é uma caixa grande de cubinhos, igual a uma caixa de sapato cheia de blocos, e que a cabeça é uma caixa menor que a gente coloca em cima, como empilhar potinhos. Use as caixas de papelão de verdade: empilhe na frente delas. Para as escolhas, brinque: o gordinho é fofo como um ursinho; o alto é esticado como uma girafa; o baixinho é pequeno e redondinho como um pinguim. Repita os nomes corpo, cabeça e empilhar várias vezes. Mostre, não explique demais: faça você primeiro, devagar, e peça que copiem olhando para a sua tela.

## Erros comuns e como ajudar

O erro mais comum é a cabeça flutuando, separada do corpo. Mostre a criança girar a cena para ver que ficou um vão e ajude a encostar a cabeça em cima do corpo. Outro erro é a caixa do corpo ficar oca, só com a casca; gire e mostre que está bom, pois para imprimir o que vale é o lado de fora. Algumas crianças apagam tudo sem querer ao clicar com a borracha ativa; ensine a olhar qual ferramenta está marcada antes de clicar. Há quem queira fazer braços e rosto já; elogie a animação e diga que isso é nas próximas aulas, hoje é só corpo e cabeça. E quem terminar rápido pode experimentar trocar entre gordinho, alto e baixinho.`,
  exercicios: [
    {
      titulo: `Empilhar as caixas de verdade`,
      tipo: `Roda de conversa com objetos`,
      tempo: `5 minutos`,
      guiaProfessor: `Antes de tocar no computador, junte a turma e mostre as duas caixas de papelão. Empilhe a menor sobre a maior e pergunte o que isso lembra. Conduza para a ideia de que todo personagem começa com um corpo grande embaixo e uma cabeça menor em cima.`,
      atividade: `Cada criança vem até a mesa e empilha a caixa menor em cima da caixa maior, dizendo em voz alta: este é o corpo, esta é a cabeça.`,
      gabarito: `A criança acerta quando coloca a caixa MENOR em cima da MAIOR (e não o contrário) e consegue apontar qual é o corpo e qual é a cabeça. Se inverter, peça que troque e mostre que a cabeça é sempre a menor.`,
    },
    {
      titulo: `Construindo o corpo no MagicaVoxel`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `No projetor, mostre passo a passo como deixar a ferramenta de colocar voxel ativa (lápis ou Attach) e como clicar e arrastar para formar uma caixa cheia. Faça você primeiro, devagar. Depois peça que cada criança repita no seu computador, e circule ajudando.`,
      atividade: `Construa o corpo do seu personagem: uma caixa de cubinhos com mais ou menos 4 de largura, 4 de fundo e 5 de altura. Gire a cena com o botão direito para conferir de todos os lados.`,
      gabarito: `Acertou quem terminar com uma caixa de cubinhos fechada por fora, apoiada no chão da área de trabalho, mais alta do que larga ou parecida com uma caixa. Não precisa ter o tamanho exato; o importante é ser uma forma grande e inteira.`,
    },
    {
      titulo: `Encaixando a cabeça`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor como subir até o topo do corpo e montar um cubo menor bem em cima, encostado. Reforce que a cabeça precisa ficar grudada no corpo, sem flutuar. Ensine a girar a cena para verificar.`,
      atividade: `Coloque a cabeça do personagem: um cubo menor, mais ou menos 3 por 3 por 3 cubinhos, em cima do corpo, bem encostadinho. Gire e olhe de lado para ver se ela não está flutuando.`,
      gabarito: `Acertou quando a cabeça é um cubo MENOR que o corpo e está encostada no topo dele, sem nenhum vão entre os dois. Se houver espaço vazio, a criança deve descer a cabeça até encostar.`,
    },
    {
      titulo: `Gordinho, alto ou baixinho?`,
      tipo: `Desafio de escolha`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor as três versões: um corpo mais largo (gordinho), um mais comprido para cima (alto) e um mais baixo (baixinho). Deixe cada criança decidir o jeitão do seu e ajude a colocar ou tirar cubinhos para chegar lá. Anote a escolha de cada um na lista.`,
      atividade: `Escolha como o seu personagem vai ser e mude o corpo: para gordinho, coloque mais cubinhos nas laterais; para alto, suba mais camadas; para baixinho, deixe o corpo mais baixo. Depois mostre para um colega e diga o que escolheu.`,
      gabarito: `Acertou quem conseguir transformar o corpo de acordo com a escolha e explicar em uma palavra qual é: gordinho, alto ou baixinho. O resultado deve ser visivelmente diferente da caixa neutra do começo (mais largo, mais alto ou mais baixo).`,
    },
    {
      titulo: `Desenhar o meu personagem no papel`,
      tipo: `Desenho no papel`,
      tempo: `4 minutos`,
      guiaProfessor: `Entregue o papel quadriculado e os lápis de cor. Peça que cada criança desenhe o personagem que acabou de montar na tela, usando os quadradinhos como se fossem os cubinhos. Esse desenho vira o plano para as próximas aulas.`,
      atividade: `Desenhe no papel quadriculado o seu personagem com corpo e cabeça, pintando os quadradinhos. Embaixo do desenho, marque se ele é gordinho, alto ou baixinho.`,
      gabarito: `Acertou o desenho que mostra duas formas empilhadas (uma maior embaixo, uma menor em cima) parecidas com o personagem da tela e que indica corretamente o tipo escolhido. Não se avalia a beleza do traço, e sim se aparecem o corpo embaixo e a cabeça menor em cima.`,
    },
  ],
};
