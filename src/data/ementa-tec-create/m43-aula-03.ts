import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Materiais e Iluminação para Render",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aplicar materiais com nós (shaders) e texturas ao cenário e aos itens modelados na Semana 1 e montar uma cena de render, com câmera enquadrada e luzes que valorizam o trabalho.`,
  descricao: `Nesta aula, o aluno descobre que um modelo 3D só ganha vida quando recebe materiais e luz. Até aqui, o cenário e os itens criados na Semana 1 estavam cinzas, sem cor e sem brilho. Agora vamos pintar e iluminar tudo. No Blender, a cor e o acabamento de um objeto são definidos por um material, e os materiais avançados são montados com nós (em inglês, nodes): pequenos blocos ligados por fios que controlam cor, brilho, rugosidade e reflexo. É como ligar peças de um circuito para dizer ao programa como a superfície deve aparecer.

O coração da aula é o nó Principled BSDF. Esse nó é o material padrão do Blender e já resolve quase tudo: nele o aluno escolhe a cor base (Base Color), o quanto a superfície é áspera ou lisa (Roughness) e se ela é metálica (Metallic). Com poucos ajustes, uma caixa cinza vira madeira fosca, plástico brilhante ou metal polido. Depois, o aluno aprende a conectar uma textura (uma imagem) na cor base, usando o nó Image Texture, para dar mais realismo, como a madeira de uma mesa ou o tijolo de uma parede.

A segunda metade da aula é sobre iluminação. Um cenário bem modelado fica feio sem luz, e uma luz bem colocada transforma uma cena simples em algo bonito. O Blender tem quatro tipos de luz: Point (lâmpada que espalha para todos os lados), Sun (sol, luz paralela e forte), Spot (foco, como um holofote de teatro) e Area (painel suave, ótimo para deixar a cena agradável). O aluno vai posicionar luzes, ajustar a força (Power) e a cor para criar clima. Por fim, vai enquadrar uma câmera para escolher o melhor ângulo da cena.

Ao final, cada aluno terá uma cena de render montada: o cenário e os itens com materiais e texturas aplicados, luzes posicionadas com intenção e uma câmera apontando para o melhor ângulo. Não precisa renderizar a imagem final ainda (isso é a Aula 4); o objetivo de hoje é deixar a cena pronta e bonita na pré-visualização, entendendo como material, luz e câmera trabalham juntos.`,
  materiais: [
    `Computadores com o Blender instalado (versão LTS recente), um por aluno`,
    `Arquivos de exemplo: o projeto .blend com o cenário e os itens modelados na Semana 1`,
    `Pasta com texturas de exemplo em PNG ou JPG (madeira, metal, tijolo, tecido)`,
    `Projetor ou TV para o professor demonstrar cada passo na tela`,
    `Mouse com três botões para cada aluno (essencial para navegar e selecionar no Blender)`,
    `Folha impressa ou slide com a lista de atalhos da aula e o mapa dos quatro tipos de luz`,
  ],
  conceitosChave: [
    `Material — o conjunto de cor, brilho e acabamento que define como a superfície de um objeto aparece.`,
    `Nó (node) — um bloco ligado por fios no editor de shaders; cada nó controla uma parte do material, como cor ou textura.`,
    `Principled BSDF — o nó de material padrão do Blender, que reúne cor base, rugosidade e metálico num só lugar.`,
    `Roughness (rugosidade) — controla se a superfície é lisa e brilhante (valor baixo) ou áspera e fosca (valor alto).`,
    `Textura — uma imagem aplicada sobre o objeto, conectada ao material para dar mais realismo (madeira, tijolo, tecido).`,
    `Luz — objeto que ilumina a cena; o Blender tem quatro tipos: Point, Sun, Spot e Area, cada um com um efeito diferente.`,
    `Câmera — o objeto que define o ângulo e o enquadramento do que será renderizado; é o ponto de vista da cena.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender. Esta aula tem três partes simples: dar material aos objetos, conectar uma textura e iluminar a cena. Três áreas da tela importam hoje. A primeira é a Viewport, a janela grande do meio onde vemos a cena em 3D. No canto superior direito dela há quatro bolinhas (os modos de sombreamento): use a terceira, chamada Material Preview, para ver cor e brilho sem precisar renderizar. A segunda área é o Shader Editor (editor de nós): para abri-lo, mude o tipo de uma janela clicando no ícone no canto superior esquerdo dela e escolha Shader Editor. A terceira é a aba de Material no painel de Propriedades, na direita, marcada por uma bolinha vermelha listrada. O atalho mais usado da aula é Shift + A, que serve para adicionar coisas (luzes, câmera, nós).

## Passo a passo da aula

Aquecimento (10 min): Abra o projeto da Semana 1 no projetor. Mostre o cenário todo cinza e pergunte: o que falta para parecer um jogo de verdade? Conduza até as respostas cor, textura e luz. Mostre uma foto de um quarto com luz dura e a mesma com luz suave, para sentirem o poder da iluminação.

Conteúdo novo guiado (15 min): Selecione um objeto na Viewport com clique esquerdo. Na direita, abra a aba Material e clique em New para criar um material. Ali aparece o Principled BSDF. Ajuste a Base Color clicando no retângulo de cor e mude a Roughness (deixe perto de 0.5 para fosco, perto de 0.1 para brilhante). Para textura, abra o Shader Editor: ao lado do campo Base Color há uma bolinha; aperte Shift + A, escolha Texture e depois Image Texture, ligue a saída Color desse nó na entrada Base Color do Principled e clique em Open para carregar uma imagem da pasta. Agora a luz: aperte Shift + A na Viewport, escolha Light e depois Area. Use a tecla G para mover a luz e, na aba de luz (ícone de lâmpada na direita), aumente o Power para 200 ou 300 watts. Por fim, aperte Shift + A, Camera, posicione e aperte a tecla 0 (zero do teclado numérico) para olhar pela câmera.

Mão na massa (25 min): Cada aluno aplica materiais em pelo menos quatro objetos do cenário, ajustando cor e rugosidade. Em seguida, conecta uma textura de imagem em um objeto (a mesa ou a parede). Depois adiciona duas luzes (uma Area forte como luz principal e uma Point fraca de apoio) e ajusta força e cor. Por fim, adiciona a câmera e enquadra a melhor vista. Circule ajudando individualmente.

Desafio + compartilhar (10 min): Cada aluno troca a cor de uma das luzes para criar um clima (azul de noite, laranja de pôr do sol) e mostra a cena pela câmera para o colega do lado. Dois ou três voluntários apresentam no projetor.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que o material é a roupa do objeto: a mesma caixa pode vestir madeira, metal ou plástico. Os nós são como blocos de Lego ligados por fios: cada bloco faz uma coisa e o fio leva a informação de um para o outro. Roughness é fácil: liso e brilhante como um espelho, áspero e fosco como um papelão. Para luz, compare com o quarto deles: a luz do teto é a principal, o abajur é a de apoio. Mostre sempre antes de mandar fazer e fale o nome do botão em voz alta enquanto aponta na tela. Prefira janela do meio em vez de viewport quando perceber que confundiu alguém.

## Erros comuns e como ajudar

O erro mais comum é não ver a cor porque estão no modo de sombreamento errado: lembre de clicar na terceira bolinha (Material Preview) no canto da Viewport. Outro é ligar o fio da textura na entrada errada; mostre que a saída Color do Image Texture vai na entrada Base Color do Principled. Muitos esquecem de clicar em Open e ficam com a textura rosa (sinal de imagem não carregada); oriente a carregar o arquivo da pasta. Na luz, alguns deixam o Power baixo demais e a cena fica preta; ensine a subir o Power e aproximar a luz com a tecla G. Por fim, há quem não consiga ver pela câmera; lembre o atalho da tecla 0 do teclado numérico para entrar na visão da câmera.`,
  exercicios: [
    {
      titulo: `Primeiro material: cor e rugosidade`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Confirme que cada aluno está no modo Material Preview (terceira bolinha) e que clicou em New na aba Material antes de mexer nos valores.`,
      atividade: `Selecione um objeto do cenário, crie um material novo, escolha uma Base Color e ajuste a Roughness para deixá-lo fosco ou brilhante.`,
      gabarito: `O objeto tem um material novo com cor visível na Viewport. A Roughness foi alterada de forma intencional: valor baixo (perto de 0.1) deixa brilhante, valor alto (perto de 0.8) deixa fosco. O aluno explica a diferença.`,
    },
    {
      titulo: `Três acabamentos diferentes`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Reforce a ideia de metálico com Roughness baixa para metal polido. Verifique se cada objeto recebeu seu próprio material, e não o mesmo repetido.`,
      atividade: `Aplique materiais diferentes em três objetos: um de plástico brilhante (Roughness baixa, Metallic 0), um de metal (Metallic 1, Roughness baixa) e um de madeira fosca (Roughness alta).`,
      gabarito: `Os três objetos têm materiais distintos: plástico liso e brilhante, metal com reflexo (Metallic em 1), madeira fosca (Roughness alta). Os ajustes batem com o acabamento pedido em cada um.`,
    },
    {
      titulo: `Conectando uma textura`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Abra o Shader Editor com a turma. Mostre o caminho Shift + A, Texture, Image Texture e a ligação Color para Base Color. Cheque quem ficou com objeto rosa (textura não carregada).`,
      atividade: `No Shader Editor, adicione um nó Image Texture, ligue a saída Color dele na entrada Base Color do Principled BSDF e carregue uma textura de madeira ou tijolo da pasta de exemplo.`,
      gabarito: `O objeto mostra a imagem da textura na superfície. No Shader Editor existem dois nós ligados: a saída Color do Image Texture conectada à entrada Base Color do Principled BSDF, e a imagem foi carregada com o botão Open (sem ficar rosa).`,
    },
    {
      titulo: `Iluminando a cena com clima`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Ensine a adicionar luz com Shift + A, Light, Area. Mostre como mover com a tecla G e ajustar Power e a cor na aba da lâmpada. Incentive a criar um clima com a cor.`,
      atividade: `Adicione uma luz Area como luz principal e uma luz Point de apoio. Ajuste o Power de cada uma e mude a cor de uma delas para criar um clima (por exemplo, laranja de pôr do sol).`,
      gabarito: `Existem duas luzes na cena: uma Area mais forte e uma Point mais fraca. O Power foi ajustado para a cena ficar visível (nem preta nem estourada) e a cor de uma luz foi alterada, criando um clima perceptível.`,
    },
    {
      titulo: `Enquadrar a câmera e montar a cena de render`,
      tipo: `projeto da aula`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre Shift + A, Camera e o atalho da tecla 0 para olhar pela câmera. Ensine a posicionar com G e R até o enquadramento ficar bom. Esta atividade junta tudo o que foi visto na aula.`,
      atividade: `Adicione uma câmera, entre na visão dela com a tecla 0 e enquadre a melhor vista do cenário, com os itens com material e as luzes já posicionadas, deixando a cena de render pronta na pré-visualização.`,
      gabarito: `A cena tem uma câmera enquadrando o cenário, os objetos com materiais (e ao menos uma textura) e as luzes posicionadas. Ao apertar a tecla 0, a visão mostra um enquadramento bom, com a cena bem iluminada e pronta para o render da próxima aula.`,
    },
  ],
};
