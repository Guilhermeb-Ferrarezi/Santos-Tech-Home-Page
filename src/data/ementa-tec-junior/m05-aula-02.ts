import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Colocando objetos no cenário",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança aprende a adicionar seus primeiros objetos (sprites) ao palco do jogo e a posicioná-los arrastando e soltando, deixando a tela com cara de jogo de verdade.`,
  descricao: `Na aula passada, as crianças conheceram o Construct 3 e descobriram que ele é o nosso "palco" onde os jogos acontecem. Hoje damos o próximo passo: vamos colocar os primeiros atores nesse palco. No mundo dos games, esses atores se chamam objetos, e o tipo mais comum é o sprite — uma figurinha que pode ser o personagem, uma árvore, uma estrela, uma moeda ou qualquer coisa que apareça na tela.

O assunto desta aula é aprender a inserir objetos no Layout (a tela onde montamos o cenário) e a movê-los com o mouse, arrastando e soltando. As crianças vão escolher um personagem principal e alguns itens de cenário, e vão posicioná-los como se estivessem montando um quarto de brinquedos ou arrumando bonecos numa caixa de areia. No fim, a tela deixa de ser um quadrado vazio e passa a parecer um cenário de jogo.

Isso é importante porque montar o cenário é a base de tudo o que vem depois. Antes de fazer o personagem andar, pular ou colecionar moedas (que são temas das próximas aulas), ele precisa existir na tela. Colocar e posicionar objetos é a primeira habilidade prática e visual de qualquer criador de jogos, e é extremamente recompensadora para a idade: a criança vê o resultado na hora, sem precisar ler ou escrever quase nada.

Ao longo da hora, o professor demonstra cada passo no projetor e as crianças repetem no próprio computador. O foco é o mão na massa: clicar, escolher uma figura, arrastar para o lugar certo e repetir com vários itens. Não há programação ainda — apenas a alegria de povoar o palco com personagens e cenário.`,
  materiais: [
    `Um computador por aluno (ou dupla), com o Construct 3 já aberto no projeto criado na aula anterior — ou um projeto novo em branco se preferir começar limpo.`,
    `Projetor ou TV grande conectada ao computador do professor, para demonstrar onde clicar.`,
    `Conexão com a internet, pois o Construct 3 roda no navegador (use o editor em editor.construct.net).`,
    `Uma pasta com 5 a 8 imagens simples de exemplo (personagem, árvore, nuvem, estrela, moeda) em formato PNG, caso queira oferecer figuras prontas para importar.`,
    `Mouse de verdade para cada máquina — arrastar e soltar é muito mais fácil com mouse do que com touchpad para crianças pequenas.`,
    `Folhas de papel e lápis de cor para o exercício de desenho do cenário.`,
    `Adesivos ou carimbos de "joinha" para celebrar cada cenário montado.`,
  ],
  conceitosChave: [
    `Objeto — qualquer coisa que aparece dentro do jogo, como um personagem, uma árvore ou uma estrela. É um ator no nosso palco.`,
    `Sprite — o tipo de objeto mais usado: uma figurinha (imagem) que a gente coloca na tela.`,
    `Layout — a tela grande onde a gente monta o cenário do jogo, como se fosse a mesa onde arrumamos os brinquedos.`,
    `Arrastar e soltar — segurar o objeto com o mouse, levar até o lugar certo e largar ali, igual a empurrar um carrinho de brinquedo.`,
    `Posição — o lugar onde cada objeto fica na tela: em cima, embaixo, na esquerda ou na direita.`,
    `Cenário — o conjunto de objetos de fundo (árvores, nuvens, chão) que deixa a tela com cara de mundo do jogo.`,
    `Personagem — o objeto principal que vai ser o herói da história, aquele que depois vai se mexer.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

No Construct 3, tudo o que aparece num jogo é um "objeto". Pense no Layout como um palco de teatro: ele começa vazio e nós colocamos os atores. O ator mais comum chama-se Sprite, que é simplesmente uma imagem. Nesta aula você vai ensinar duas ações fundamentais: inserir um Sprite no Layout e posicioná-lo arrastando com o mouse.

A tela do editor tem partes importantes. No centro fica o Layout View (a área quadriculada onde montamos o cenário). À direita há o Project Bar (lista de tudo no projeto) e o Properties Bar (propriedades do objeto selecionado). À esquerda fica a Layers Bar. Você não precisa dominar tudo: para esta aula, foque no Layout View e na ação de inserir objetos. Para criar um objeto, você dá um duplo clique numa área vazia do Layout (ou usa o botão direito e "Insert new object"). Abre uma janela com vários tipos; escolha "Sprite". O cursor vira uma cruz; clique no Layout para posicionar. Abre o editor de imagem (Animations Editor): ali você pode desenhar uma figura simples com o lápis ou carregar uma imagem pronta pelo ícone de pasta (Load image). Ao fechar o editor, o Sprite aparece no Layout e pode ser arrastado com o mouse.

Dica de preparação: antes da aula, faça você mesmo o passo a passo uma vez. Tenha as imagens de exemplo numa pasta fácil de achar. Salve o projeto (Menu, Save) ao terminar a demonstração.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma e abra o projeto no projetor. Pergunte: "Quem lembra como se chama nosso palco de jogos?" Relembre que é o Construct e mostre o Layout vazio. Diga que hoje vamos colocar atores no palco.

Conteúdo novo guiado (15 min): No projetor, demonstre devagar. Dê um duplo clique numa área vazia do Layout; quando a janela abrir, clique em "Sprite". Clique no meio do Layout. No editor de imagem que abrir, mostre o ícone de pasta para carregar uma figura (ou desenhe um bonequinho simples). Feche o editor com o "X" no canto. O Sprite aparece. Agora segure o objeto com o mouse e arraste para outro canto, mostrando que ele se mexe. Repita inserindo um segundo objeto (uma árvore). Nomeie cada passo em voz alta: "duplo clique, escolho Sprite, carrego a figura, arrasto."

Mão na massa (25 min): Cada criança faz no próprio computador. Peça primeiro um personagem no centro. Depois, dois ou três itens de cenário (árvore, nuvem, estrela) posicionados ao redor. Circule pela sala ajudando. Incentive: "Coloque a nuvem lá em cima!", "A árvore fica no chão, embaixo." Deixe cada um arrumar do seu jeito.

Desafio e compartilhar (10 min): Lance o desafio de adicionar mais um objeto surpresa (uma moeda ou estrela escondida). Depois, faça uma volta rápida em que cada criança mostra sua tela e diz o nome de um objeto que colocou.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de "caixa de brinquedos" e "palco". O Layout é a mesa onde a gente arruma os bonecos. Cada Sprite é um brinquedo que pegamos da caixa e colocamos na mesa. Arrastar é "empurrar o carrinho com o dedo até o lugar". Evite a palavra "importar"; diga "pegar a figura". Use comandos espaciais simples: em cima, embaixo, do lado. Comemore cada objeto que aparece na tela com entusiasmo, porque a recompensa visual é o que prende a atenção.

## Erros comuns e como ajudar

As crianças costumam dar cliques demais e criar vários objetos sem querer — mostre como apagar selecionando e apertando Delete. Outras fecham o editor de imagem sem carregar a figura e ficam com um quadrado em branco; reabra com duplo clique no objeto. Algumas arrastam o objeto para fora da área visível; ensine a usar a rodinha do mouse para dar zoom out e encontrá-lo. E muitas tentam arrastar sem clicar primeiro no objeto; lembre-as de "tocar no brinquedo antes de empurrar".`,
  exercicios: [
    {
      titulo: `Meu primeiro personagem no palco`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Demonstre uma vez no projetor e depois deixe cada criança repetir. Fique de pé, circulando, e celebre quando o personagem aparecer na tela de cada um.`,
      atividade: `Dê um duplo clique numa parte vazia do palco (Layout), escolha "Sprite", clique no meio da tela, carregue ou desenhe um bonequinho e feche o editor. Pronto: seu personagem está no palco!`,
      gabarito: `Acertou quando aparece um único Sprite de personagem mais ou menos no centro do Layout. O professor confere olhando a tela: deve haver uma figura visível, não um quadrado vazio nem vários objetos repetidos.`,
    },
    {
      titulo: `Arruma a sala do jogo`,
      tipo: `desafio na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Peça que adicionem itens de cenário e os posicionem usando comandos de lugar (em cima, embaixo, do lado). Vá narrando: "agora a nuvem lá no alto!".`,
      atividade: `Adicione três itens de cenário ao seu palco: uma árvore embaixo (no chão), uma nuvem em cima (no céu) e uma estrela do lado. Arraste cada um com o mouse até o lugar certo.`,
      gabarito: `Acertou quando há quatro objetos no total (o personagem mais os três itens), cada um numa posição diferente e coerente: nuvem na parte de cima, árvore na parte de baixo, estrela ao lado. O professor confirma que nada está empilhado num só ponto.`,
    },
    {
      titulo: `Roda do cenário`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Faça as crianças sentarem em roda. Cada uma mostra sua tela e responde a uma pergunta curta. Reforce o vocabulário: objeto, sprite, em cima, embaixo.`,
      atividade: `Na sua vez, mostre seu palco para a turma e responda: "Qual objeto você colocou em cima? E qual ficou embaixo?" Aponte cada um na tela.`,
      gabarito: `Acertou quando a criança aponta corretamente um objeto que está na parte de cima e outro na parte de baixo da tela, usando as palavras "em cima" e "embaixo". Não precisa estar perfeito; basta demonstrar que entende a noção de posição.`,
    },
    {
      titulo: `Desenha seu cenário no papel`,
      tipo: `desenho/papel`,
      tempo: `10 min`,
      guiaProfessor: `Distribua papel e lápis de cor. Peça um desenho do cenário do jogo dos sonhos, com pelo menos um personagem e dois itens de fundo. Conecte ao que fizeram no computador.`,
      atividade: `Desenhe numa folha como você quer que seja o cenário do seu jogo. Coloque um personagem e pelo menos dois itens de cenário (árvore, nuvem, sol, casa). Mostre onde cada coisa fica.`,
      gabarito: `Acertou quando o desenho tem, no mínimo, um personagem identificável e dois elementos de cenário, com uma noção clara de posição (céu em cima, chão embaixo). O professor valida pela presença desses elementos, não pela qualidade artística.`,
    },
    {
      titulo: `O objeto surpresa escondido`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Proponha um mini-desafio de "esconde-esconde". A criança adiciona um objeto novo e o coloca num canto difícil. Depois, uma colega tenta achar na tela. Estimule o uso do mouse para arrastar com precisão.`,
      atividade: `Adicione mais um objeto novo ao palco (uma moeda ou estrela) e arraste-o para um cantinho escondido da tela. Depois, peça a um colega para apontar onde você escondeu o objeto surpresa.`,
      gabarito: `Acertou quando um novo objeto foi inserido, posicionado num canto da tela (não no centro), e o colega consegue localizá-lo apontando. Confirma-se a habilidade de inserir e posicionar com intenção, controlando o arrasto até um ponto específico.`,
    },
  ],
};
