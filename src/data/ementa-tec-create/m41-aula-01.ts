import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Reencontro com o Blender",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Reencontrar o Blender revisando a interface, a navegação no espaço 3D e os atalhos essenciais, distinguindo o modo Objeto do modo Edição e organizando o projeto já pensando no destino final, que é o Unity.`,
  descricao: `Esta é a primeira aula de um mês inteiro dedicado a modelar assets prontos para o Unity. Os alunos já conhecem o Blender dos anos anteriores, então o objetivo de hoje não é começar do zero, e sim reativar a memória da ferramenta com olhos novos. A diferença é o destino: tudo o que for modelado neste mês vai virar peça de um jogo dentro do Unity. Por isso, desde a primeira aula, o professor planta a ideia de que cada decisão na modelagem tem uma consequência lá no motor de jogo, como a escala, a orientação e a organização dos objetos.

A aula é um passeio guiado de reconhecimento. A turma reabre o Blender, percorre a interface nomeando cada grande área (a viewport 3D, o Outliner, o painel de propriedades e os menus do topo) e recupera a navegação no espaço tridimensional: orbitar ao redor do objeto, dar zoom para aproximar e afastar, e mover a câmera de visão para os lados. Em seguida, relembram os atalhos que economizam tempo de verdade, como G para mover, R para girar, S para escalar, Tab para alternar entre os modos e o ponto do teclado numérico para enquadrar o objeto selecionado.

Um momento central é a distinção entre o modo Objeto e o modo Edição. No modo Objeto, o aluno trata a peça inteira como um bloco, movendo, girando e duplicando objetos completos. No modo Edição, ele entra dentro da malha e mexe em vértices, arestas e faces. Saber em qual modo está e quando alternar é a base de tudo o que virá nas próximas aulas, quando a turma começar a modelar de fato.

O fechamento da aula prepara o terreno para o Unity. A turma aprende a organizar o projeto com nomes claros, a aplicar transformações e a salvar o arquivo .blend em uma pasta combinada, já com a mentalidade de quem vai exportar para um jogo. Ao longo da aula, o aluno também usa o Claude como assistente para tirar dúvidas rápidas sobre atalhos e fluxos, escrevendo perguntas curtas e objetivas. Ninguém precisa modelar nada complexo hoje; o sucesso é terminar confortável com a interface, com a navegação e com os dois modos, pronto para a viagem do mês.`,
  materiais: [
    `Computadores com o Blender já instalado e atualizado, e o Unity instalado para referência, um por aluno`,
    `Projetor ou TV grande para o professor demonstrar cada passo na tela`,
    `Mouse com botão do meio (scroll) em cada estação, essencial para orbitar e dar zoom no espaço 3D`,
    `Arquivo de exemplo .blend preparado pelo professor, com um objeto simples já nomeado e organizado`,
    `Acesso ao Claude (no navegador ou no app) para os alunos tirarem dúvidas rápidas sobre atalhos e fluxos`,
    `Folha impressa de atalhos essenciais do Blender (G, R, S, Tab, ponto do numérico) colada na bancada`,
    `Pasta padrão criada em cada computador (por exemplo Assets-Unity-Blender) para salvar os arquivos do mês`,
  ],
  conceitosChave: [
    `Viewport 3D — a janela central do Blender onde você vê e manipula os objetos da cena em três dimensões.`,
    `Orbitar — girar o ponto de vista ao redor do objeto, feito segurando o botão do meio do mouse e arrastando.`,
    `Modo Objeto — estado em que você trata a peça inteira como um bloco, movendo, girando e duplicando objetos completos.`,
    `Modo Edição — estado em que você entra dentro da malha para mexer em vértices, arestas e faces; alterna com a tecla Tab.`,
    `Atalho — combinação de teclas que executa uma ação rápida, como G para mover, R para girar e S para escalar.`,
    `Outliner — a lista no canto superior direito que mostra e organiza todos os objetos da cena pelo nome.`,
    `Apply Transform — comando que fixa a posição, rotação e escala atuais como padrão do objeto, importante para o objeto chegar correto ao Unity.`,
  ],
  treinamento: `## O que o professor precisa saber

O Blender é um programa de modelagem 3D gratuito, e os alunos já o usaram em anos anteriores, então esta aula é uma revisão com foco no Unity. Você não precisa dominar o Blender: basta conhecer o caminho de hoje. Ao abrir, feche a tela de boas-vindas clicando em General e você verá a viewport 3D no centro, o Outliner no canto superior direito, o painel de propriedades à direita e os menus no topo. A navegação usa o botão do meio do mouse: segurar e arrastar orbita ao redor do objeto; girar o scroll dá zoom; segurar Shift junto com o botão do meio move a câmera de visão para os lados. Os atalhos essenciais são G (mover), R (girar), S (escalar), Tab (alterna entre modo Objeto e modo Edição) e o ponto do teclado numérico (enquadra o objeto selecionado). A diferença entre os modos é o coração da aula: modo Objeto mexe na peça inteira, modo Edição mexe nos vértices, arestas e faces dela. Para o Unity, três cuidados importam desde já: usar escala próxima de um metro real, manter o objeto na origem e aplicar as transformações com Object > Apply. Faça o caminho inteiro uma vez antes da aula no arquivo de exemplo para ganhar segurança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o arquivo de exemplo no projetor e pergunte o que a turma lembra do Blender. Anuncie o destino do mês: tudo que modelarmos vai virar peça de jogo no Unity. Peça que cada aluno abra o Blender e o arquivo de exemplo no próprio computador.

Conteúdo novo guiado (15 min): no projetor, nomeie as áreas (viewport, Outliner, propriedades, menus). Demonstre a navegação: orbitar com o botão do meio, zoom com o scroll, mover a visão com Shift e botão do meio. Pressione o ponto do numérico para enquadrar. Mostre os atalhos G, R e S movendo, girando e escalando o objeto, sempre apertando Esc para cancelar e não bagunçar a cena. Aperte Tab para entrar no modo Edição e Tab de novo para voltar ao modo Objeto, dizendo em voz alta em qual modo está. Por fim, com o objeto selecionado, vá no menu Object, depois Apply, depois All Transforms, e explique que isso fixa posição, rotação e escala para o objeto chegar certinho ao Unity.

Mão na massa (25 min): cada aluno repete tudo no seu computador. Circule confirmando que conseguem orbitar, dar zoom, mover a visão e enquadrar com o ponto do numérico. Peça que entrem e saiam do modo Edição com Tab algumas vezes, nomeando o modo atual. Oriente cada um a renomear o objeto no Outliner com um clique duplo (por exemplo, de Cube para caixa-cenario) e a aplicar as transformações pelo menu Object. Quem tiver dúvida de atalho pergunta ao Claude com uma frase curta, como: qual o atalho para escalar no Blender e como travar em um eixo.

Desafio e compartilhar (10 min): desafie a turma a salvar o arquivo na pasta padrão com Ctrl S, usando um nome sem acentos nem espaços. Feche com dois ou três alunos mostrando a tela no projetor e explicando a diferença entre o modo Objeto e o modo Edição com as próprias palavras.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Diga que orbitar é como andar em volta de uma estátua para ver de todos os lados, e o zoom é chegar mais perto ou se afastar dela. Explique que o modo Objeto é segurar o brinquedo inteiro na mão, enquanto o modo Edição é abrir o brinquedo e mexer nas peças por dentro. Compare os atalhos a teclas de atalho de um videogame: quem decora joga mais rápido. Sobre o Unity, diga que estamos preparando a peça para uma viagem, e o Apply Transform é arrumar a mala direito para nada se perder no caminho. Sempre que falar um termo em inglês, fale o significado logo depois.

## Erros comuns e como ajudar

O erro mais comum é tentar orbitar sem o botão do meio do mouse; confirme que cada mouse tem scroll clicável e mostre as alternativas no teclado numérico (4, 6, 8 e 2). Muitos confundem os modos e tentam mover vértices no modo Objeto ou o objeto inteiro no modo Edição; ensine a olhar o menu de modo no canto superior esquerdo da viewport antes de agir. Alguns apertam G, R ou S e clicam sem querer, deformando a cena; ensine a sempre apertar Esc ou Ctrl Z para desfazer. Há quem esqueça de aplicar as transformações; reforce que sem o Apply o objeto chega torto ou com tamanho errado no Unity. Por fim, alguns salvam com acentos ou espaços no nome do arquivo; padronize nomes simples desde a primeira aula.`,
  exercicios: [
    {
      titulo: `Reconhecer as áreas da tela`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor a viewport, o Outliner, o painel de propriedades e os menus do topo antes de soltar a turma. Peça que apontem com o mouse e nomeiem cada área em voz alta. Confirme que todos abriram o arquivo de exemplo.`,
      atividade: `Com o Blender aberto no arquivo de exemplo, aponte com o mouse e nomeie em voz alta quatro áreas: a viewport 3D no centro, o Outliner no canto superior direito, o painel de propriedades à direita e os menus no topo.`,
      gabarito: `O aluno identifica corretamente as quatro áreas sem trocar os nomes: a viewport 3D no centro, o Outliner no canto superior direito, o painel de propriedades à direita e os menus no topo. Reconhecer cada região é a base para acompanhar as próximas aulas.`,
    },
    {
      titulo: `Navegar no espaço 3D`,
      tipo: `Prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Demonstre orbitar com o botão do meio, dar zoom com o scroll e mover a visão com Shift mais botão do meio. Mostre o ponto do teclado numérico para enquadrar. Circule garantindo que todos têm o mouse certo e conseguem cada movimento.`,
      atividade: `Pratique a navegação: orbite ao redor do objeto segurando o botão do meio do mouse, dê zoom com o scroll, mova a visão para os lados com Shift mais botão do meio e enquadre o objeto apertando o ponto do teclado numérico.`,
      gabarito: `O aluno consegue orbitar ao redor do objeto, aproximar e afastar com o zoom, mover a visão para os lados e enquadrar o objeto com o ponto do numérico. Os quatro movimentos básicos de navegação no espaço 3D estão recuperados.`,
    },
    {
      titulo: `Atalhos G, R e S`,
      tipo: `Desafio`,
      tempo: `9 min`,
      guiaProfessor: `Reforce que após G, R ou S o aluno pode apertar X, Y ou Z para travar o movimento em um eixo, e Esc para cancelar sem aplicar. Mostre que clicar confirma. Incentive quem ficar com dúvida a perguntar ao Claude uma frase curta.`,
      atividade: `Com o objeto selecionado no modo Objeto, use os atalhos para transformá-lo e depois desfazer cada um com Ctrl Z: aperte G e mova, aperte R e gire, aperte S e escale. Tente travar um movimento em um eixo apertando X, Y ou Z após o atalho.`,
      gabarito: `O aluno move com G, gira com R e escala com S, e consegue travar em um eixo apertando X, Y ou Z logo após o atalho. Cada transformação é desfeita com Ctrl Z, deixando a cena como estava. Esc cancela antes de aplicar; clicar confirma.`,
    },
    {
      titulo: `Alternar entre modo Objeto e modo Edição`,
      tipo: `Em dupla`,
      tempo: `9 min`,
      guiaProfessor: `Forme duplas. Um aluno dita o modo e o outro alterna com Tab e confirma olhando o menu de modo no canto superior esquerdo da viewport. Depois trocam. Reforce a diferença: no modo Objeto se mexe a peça inteira, no modo Edição se mexe nos vértices.`,
      atividade: `Em dupla, um dita e o outro executa: aperte Tab para entrar no modo Edição e confira pelo menu de modo no canto superior esquerdo da viewport; selecione um vértice e perceba que dá para movê-lo; aperte Tab de novo para voltar ao modo Objeto. Depois troquem de papel.`,
      gabarito: `A dupla alterna corretamente entre os modos com Tab, confirma o modo atual pelo menu da viewport e percebe a diferença: no modo Edição é possível selecionar e mover um vértice, no modo Objeto a peça é tratada inteira. Os dois alunos conseguem alternar ao menos uma vez cada.`,
    },
    {
      titulo: `Organizar e salvar pensando no Unity`,
      tipo: `Projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Mostre como renomear no Outliner com clique duplo e como aplicar transformações em Object, depois Apply, depois All Transforms. Explique por que isso importa para o Unity. Confirme o nome de arquivo sem acentos nem espaços e o salvamento com Ctrl S na pasta padrão.`,
      atividade: `Renomeie o objeto no Outliner com um clique duplo para um nome claro, como caixa-cenario. No modo Objeto, com a peça selecionada, vá em Object, depois Apply, depois All Transforms, para fixar posição, rotação e escala. Salve o arquivo com Ctrl S na pasta padrão, usando um nome sem acentos nem espaços.`,
      gabarito: `O objeto aparece no Outliner com um nome claro e sem acentos, como caixa-cenario. As transformações foram aplicadas por Object, Apply, All Transforms, deixando posição, rotação e escala fixadas para o objeto chegar correto ao Unity. O arquivo .blend está salvo na pasta padrão com nome simples, sem acentos nem espaços. Esses cuidados evitam que a peça chegue torta ou com tamanho errado no motor de jogo.`,
    },
  ],
};
