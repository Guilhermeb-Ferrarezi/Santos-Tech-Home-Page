import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "De volta ao Aseprite!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Reabrir o Aseprite, relembrar a tela e as ferramentas principais (lápis, balde, borracha e paleta de cores) e criar um arquivo novo no tamanho certo com um desenho rápido de aquecimento.`,
  descricao: `Esta é a primeira aula do mês, e o nosso grande projeto começa aqui: durante as próximas oito aulas, cada criança vai criar o conjunto de sprites do jogo do ano usando o Aseprite. Sprite é o nome bonito que damos para cada desenhinho que aparece no jogo: o herói, as moedas, os inimigos, as pedras do cenário. Antes de criar tudo isso, precisamos reabrir o programa e relembrar como ele funciona, porque já faz um tempinho que a turma não mexe no Aseprite.

O Aseprite é um programa feito especialmente para fazer pixel art, que é a arte feita com quadradinhos coloridos chamados pixels. Em vez de pintar com pincéis macios como em outros programas, aqui a gente pinta quadradinho por quadradinho, como se estivesse montando um mosaico ou colando peças de um quebra-cabeça. Esse jeito de desenhar combina perfeitamente com os jogos clássicos que as crianças adoram.

Nesta aula o foco é o reconhecimento da tela. Vamos abrir o programa juntos, olhar onde fica cada coisa e dar nome aos cantos: a caixa de ferramentas, a paleta de cores, a área de desenho (que chamamos de tela ou canvas) e os menus de cima. Depois, cada criança vai criar um arquivo novo no tamanho certinho para os nossos sprites e fazer um desenho livre e rápido só para aquecer a mão e a memória.

Não se preocupe se a criança não fizer uma obra-prima hoje. O objetivo é a familiaridade e a confiança: sair da aula sabendo abrir o programa, escolher uma cor, usar o lápis, apagar com a borracha e preencher uma área com o balde. Esses quatro gestos são a base de tudo que vamos construir no mês.`,
  materiais: [
    `Computadores com o Aseprite já instalado e aberto na tela inicial`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar`,
    `Exemplos prontos de sprites simples (um herói, uma moeda, uma pedra) para mostrar o objetivo do mês`,
    `Uma folha impressa com a imagem da tela do Aseprite e os nomes dos painéis (lápis, balde, borracha, paleta)`,
    `Mouse para cada criança (desenhar com mouse é bem mais fácil que com o touchpad)`,
    `Cartelas de cores ou um adesivo colorido por criança para o desafio final`,
  ],
  conceitosChave: [
    `Pixel — é o quadradinho colorido que forma o desenho; juntando vários, aparece a imagem.`,
    `Sprite — é cada desenho que aparece no jogo, como o herói, uma moeda ou um inimigo.`,
    `Canvas (tela) — é a folha quadriculada onde a gente desenha dentro do Aseprite.`,
    `Lápis — a ferramenta que pinta um quadradinho de cada vez, igual a um lápis de verdade.`,
    `Balde — a ferramenta que enche de cor toda uma área de uma vez só, como derramar tinta.`,
    `Borracha — a ferramenta que apaga os quadradinhos pintados, deixando o lugar vazio.`,
    `Paleta de cores — é a caixinha com todas as cores que você pode escolher para pintar.`,
  ],
  treinamento: `## O que o professor precisa saber

O Aseprite é um editor de pixel art pago e leve. Para esta aula você não precisa dominar o programa: basta conhecer quatro ferramentas e saber criar um arquivo novo. A janela tem quatro regiões. À esquerda fica a barra de ferramentas (uma coluna de ícones). No centro fica o canvas, a área quadriculada onde se desenha. À direita fica a paleta de cores. Em cima ficam os menus (Arquivo, Editar, Sprite, etc.). Decore os nomes em português: lápis (Pencil), balde (Paint Bucket), borracha (Eraser) e paleta. Se o seu Aseprite estiver em inglês, os ícones são os mesmos; aponte por desenho, não por texto. Dica: aperte a tecla B para o lápis, G para o balde e E para a borracha. Aumente o zoom com Ctrl e a roda do mouse para que todos vejam os quadradinhos no projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): receba a turma e mostre no projetor os exemplos prontos de sprites (herói, moeda, pedra). Diga: este mês vamos criar os desenhos do nosso jogo! Pergunte o que cada criança lembra do Aseprite do Ano 1. Abra o programa na frente deles e nomeie em voz alta os quatro cantos da tela enquanto aponta: ferramentas à esquerda, canvas no meio, paleta à direita, menus em cima.

Conteúdo novo guiado (15 min): no menu Arquivo, clique em Novo (File > New). Na janelinha que abre, coloque largura 32 e altura 32 pixels e clique em OK. Aumente o zoom segurando Ctrl e girando a roda do mouse. Agora demonstre cada ferramenta: clique no ícone do lápis, escolha uma cor na paleta da direita e pinte alguns quadradinhos. Clique no balde e pinte uma área inteira de uma vez. Clique na borracha e apague um pedaço. Repita devagar, dizendo o nome de cada ferramenta enquanto clica.

Mão na massa (25 min): cada criança cria o próprio arquivo novo de 32 por 32 pixels pelo menu Arquivo > Novo. Peça que aumentem o zoom. O desafio é um desenho livre de aquecimento: uma carinha, uma flor ou uma estrelinha, usando lápis, balde e borracha. Circule pela sala ajudando a achar os botões. Ao final, peça que salvem em Arquivo > Salvar como (File > Save As), nomeando o arquivo com o próprio nome.

Desafio e compartilhar (10 min): proponha um mini desafio: pintar o fundo do desenho com o balde usando a cor de um adesivo que você entregou. Depois, cada criança mostra a tela para a turma e diz qual ferramenta gostou mais de usar.

## Como explicar para crianças

Use analogias concretas. O pixel é um azulejo: muitos azulejos juntos formam um desenho na parede. O lápis pinta um azulejo por vez. O balde é um baldinho de tinta que você joga e enche tudo de cor de uma vez. A borracha é a borracha do estojo: passa e o quadradinho some. A paleta é a caixa de lápis de cor: você escolhe a cor antes de pintar. Sempre mostre fazendo antes de pedir para a criança fazer.

## Erros comuns e como ajudar

Muitas crianças clicam no canvas mas nada acontece porque nenhuma ferramenta está selecionada; lembre de clicar primeiro no ícone do lápis. Outras pintam tudo da mesma cor porque esqueceram de escolher na paleta; aponte para a paleta da direita. O balde às vezes pinta a tela inteira sem querer: explique que ele enche toda a área da mesma cor que foi clicada, e que dá para desfazer com Ctrl Z. Se a criança apagar tudo por engano, ensine Ctrl Z para voltar. Por fim, alguns esquecem de salvar: reserve os últimos minutos só para o Arquivo > Salvar como, acompanhando um por um.`,
  exercicios: [
    {
      titulo: `Caça aos cantos da tela`,
      tipo: `Reconhecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Aponte no projetor e peça que a turma repita o nome de cada região da tela do Aseprite. Faça em ritmo de brincadeira, como um jogo de "onde está?".`,
      atividade: `Aponte na sua tela onde fica a barra de ferramentas, onde fica o canvas, onde fica a paleta de cores e onde ficam os menus de cima.`,
      gabarito: `Ferramentas: coluna de ícones à esquerda. Canvas: área quadriculada no centro. Paleta de cores: à direita. Menus: barra de cima com Arquivo, Editar e Sprite.`,
    },
    {
      titulo: `Criando o arquivo novo`,
      tipo: `Prática passo a passo`,
      tempo: `5 minutos`,
      guiaProfessor: `Demonstre no projetor antes. Confira o tamanho de cada criança olhando o título da janela; corrija quem digitou número errado.`,
      atividade: `Crie um arquivo novo: clique em Arquivo, depois em Novo, digite 32 de largura e 32 de altura e clique em OK.`,
      gabarito: `Um canvas quadrado de 32 por 32 pixels aparece no centro da tela, pronto para desenhar.`,
    },
    {
      titulo: `As três ferramentas mágicas`,
      tipo: `Exploração prática`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que testem uma ferramenta de cada vez. Mostre que dá para desfazer com Ctrl Z se algo der errado, para tirarem o medo de experimentar.`,
      atividade: `Escolha uma cor na paleta. Use o lápis para pintar três quadradinhos, o balde para encher uma área e a borracha para apagar um deles.`,
      gabarito: `Três quadradinhos pintados com o lápis, uma área cheia de cor com o balde e um quadradinho apagado com a borracha, mostrando que a criança sabe usar as três.`,
    },
    {
      titulo: `Desenho de aquecimento`,
      tipo: `Criação livre`,
      tempo: `8 minutos`,
      guiaProfessor: `Deixe a criança criar à vontade. O objetivo é confiança, não perfeição. Circule elogiando o esforço e ajudando a achar os botões.`,
      atividade: `Faça um desenho rápido e simples no seu canvas, como uma carinha, uma estrela ou uma flor, usando o lápis, o balde e a paleta de cores.`,
      gabarito: `Qualquer desenho reconhecível feito com pixels, usando pelo menos o lápis e uma cor escolhida na paleta. Não há resposta única; vale a criatividade.`,
    },
    {
      titulo: `Fundo colorido e salvar`,
      tipo: `Desafio final`,
      tempo: `5 minutos`,
      guiaProfessor: `Entregue um adesivo colorido por criança. Acompanhe o salvamento um a um, pois é o erro mais comum esquecerem desta etapa.`,
      atividade: `Pinte o fundo do seu desenho com o balde usando a cor do seu adesivo. Depois salve em Arquivo, Salvar como, colocando o seu nome no arquivo.`,
      gabarito: `O desenho fica com o fundo todo pintado da cor do adesivo e o arquivo é salvo com o nome da criança. O professor vê o nome do arquivo no título da janela.`,
    },
  ],
};
