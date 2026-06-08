import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "As Peças do 3D: Formas Primitivas",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar e transformar formas primitivas no Maya com precisão, combinando-as para sugerir um objeto simples enquanto se compreende vértices, arestas e faces.`,
  descricao: `Toda criação 3D, por mais complexa que pareça, começa com peças simples. As formas primitivas — cubo, esfera, cilindro e cone — são os "tijolos de LEGO" digitais do Maya. Nesta aula, o aluno descobre que um robô, um carro ou um boneco nascem da combinação inteligente dessas formas básicas. É um momento empolgante: pela primeira vez o aluno deixa de só olhar a cena e passa a construir de verdade.

Antes de combinar formas, o aluno precisa dominar três superpoderes da transformação: mover (W), rotacionar (E) e escalar (R). Cada primitiva pode ser posicionada, girada e redimensionada com precisão usando esses comandos. Quando feito com cuidado, percebe-se como pequenos ajustes transformam um amontoado de formas em algo que faz sentido aos olhos.

Por baixo de cada forma existe uma malha (mesh) feita de três peças fundamentais: vértices (os pontos), arestas (as linhas que ligam os pontos) e faces (as superfícies fechadas entre as arestas). Entender esse trio é essencial, porque é a partir dele que toda modelagem mais avançada acontecerá nas próximas aulas. Aqui o aluno apenas observa e nomeia essas peças, sem editá-las ainda.

O grande momento da aula é a prática combinatória: usando duas, três ou quatro primitivas, cada aluno monta a silhueta de um objeto reconhecível — um bonequinho, um carrinho ou um foguete. Não precisa ficar perfeito; precisa comunicar a ideia. Essa experiência prepara o terreno para a próxima aula, em que aprenderemos a esculpir as formas com a ferramenta Extrude.`,
  materiais: [
    `Computadores com Maya instalado e já aberto em uma cena nova (um por aluno)`,
    `Projetor ou tela grande para o professor demonstrar passo a passo`,
    `Arquivo de exemplo "boneco_primitivas.mb" com um boneco simples já montado por primitivas`,
    `Imagem de referência impressa ou no projetor (um robô e um carrinho feitos de formas básicas)`,
    `Mouse com botão do meio (scroll) para cada aluno — facilita muito o uso do Maya`,
    `Folha de atalhos rápida: W mover, E rotacionar, R escalar, Q selecionar`,
  ],
  conceitosChave: [
    `Forma primitiva — modelo 3D pronto e básico que o Maya oferece, como cubo, esfera, cilindro e cone.`,
    `Vértice — ponto no espaço 3D; é o canto onde as arestas se encontram.`,
    `Aresta — linha reta que liga dois vértices, formando a borda de uma face.`,
    `Face — superfície fechada entre arestas; é a "parede" visível da forma.`,
    `Malha (mesh) — conjunto de vértices, arestas e faces que forma o modelo inteiro.`,
    `Transformar — mover, rotacionar ou escalar um objeto para colocá-lo no lugar e tamanho certos.`,
    `Pivô — ponto central de um objeto em torno do qual ele gira e a partir do qual escala.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya, mas precisa ter feito esta aula sozinho uma vez antes. Garanta que cada computador esteja com o Maya aberto numa cena nova e com o menu superior no modo "Modeling". As primitivas ficam no menu "Create > Polygon Primitives". Decore quatro atalhos, porque você vai repeti-los o tempo todo: Q (selecionar), W (mover), E (rotacionar) e R (escalar). Tenha o arquivo de exemplo aberto numa janela para mostrar o objetivo logo no início.

## Passo a passo da aula

Aquecimento (10 min): Abra o arquivo de exemplo e mostre o boneco montado por primitivas. Pergunte: "De quais formas básicas isto é feito?". Deixe os alunos apontarem cabeça (esfera), corpo (cubo), braços (cilindros). Reveja rapidamente como navegar a câmera (Alt + botão esquerdo para orbitar), conteúdo da Aula 2.

Conteúdo novo guiado (15 min): No projetor, vá em "Create > Polygon Primitives > Cube". Uma caixa aparece na origem. Mostre o Channel Box (painel à direita): ali aparecem Translate, Rotate e Scale em X, Y e Z. Aperte W e arraste as setas coloridas (vermelho X, verde Y, azul Z) para mover. Aperte E e use os círculos para rotacionar. Aperte R e use os cubinhos para escalar. Crie também uma esfera ("Sphere"), um cilindro ("Cylinder") e um cone ("Cone"). Por fim, clique com o botão direito segurando sobre o objeto e mostre o menu marcador: escolha "Vertex", depois "Edge", depois "Face" — apenas para os alunos verem os pontos, linhas e superfícies. Volte para "Object Mode".

Mão na massa (25 min): Cada aluno cria as quatro primitivas e treina mover, rotacionar e escalar cada uma. Depois lança o desafio principal: combinar pelo menos três primitivas para sugerir um objeto simples (boneco, carrinho ou foguete). Circule pela sala, elogie tentativas e ajude com os atalhos.

Desafio e compartilhar (10 min): Peça que cada aluno adicione um detalhe a mais (uma antena, uma roda, um chapéu) usando uma nova primitiva. Faça uma rodada rápida em que cada um orbita a câmera e mostra sua criação para a turma, dizendo quais formas usou.

## Como explicar de forma clara

Use a metáfora dos blocos de montar: "Cada forma é uma peça de LEGO; juntando peças certas você constrói qualquer coisa." Para vértices, arestas e faces, diga: "O vértice é o pontinho, a aresta é o palito que liga dois pontinhos, e a face é o adesivo que cobre o buraco entre os palitos." Para as cores das setas, repita sempre "vermelho é X, verde é Y, azul é Z" — isso gruda na memória. Mostre que escalar errado deforma o objeto e que segurar e arrastar a seta certa mantém o controle.

## Erros comuns e como ajudar

O erro mais frequente é o aluno mover quando queria escalar, porque esqueceu de trocar o atalho. Ensine a olhar o formato do manipulador: setas (mover), círculos (rotacionar), cubinhos (escalar). Outro erro é arrastar o quadradinho central amarelo, que move ou escala em todas as direções de uma vez e bagunça tudo — oriente a clicar sempre numa seta colorida específica. Muitos perdem objetos "para longe" porque arrastaram demais; ensine "Edit > Undo" (Ctrl + Z) e a tecla F para enquadrar o objeto selecionado. Por fim, alguns ficam presos no modo Vertex sem querer: lembre-os de apertar a tecla direita do mouse e voltar para "Object Mode", ou apertar F8.`,
  exercicios: [
    {
      titulo: `Caça às Quatro Peças`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Verifique se cada aluno consegue criar as quatro primitivas a partir do menu correto. Circule confirmando que ninguém ficou parado no menu errado.`,
      atividade: `Crie em sua cena, uma de cada vez, as quatro formas primitivas: cubo, esfera, cilindro e cone. Afaste cada uma da outra usando a tecla W para que todas fiquem visíveis lado a lado.`,
      gabarito: `O aluno usa "Create > Polygon Primitives" para gerar Cube, Sphere, Cylinder e Cone. As quatro formas aparecem na cena, separadas com a ferramenta Mover (W). Espera-se quatro objetos distintos e visíveis no viewport.`,
    },
    {
      titulo: `Mover, Girar, Esticar`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Observe se o aluno troca corretamente entre W, E e R, reconhecendo o manipulador certo. Ajude quem confunde os atalhos.`,
      atividade: `Pegue o cilindro e transforme-o num poste alto e fino: rotacione-o para ficar em pé (E), depois escale-o (R) para ficar mais alto e mais estreito. Use o Channel Box para conferir os números de Rotate e Scale.`,
      gabarito: `O cilindro fica vertical após rotação de 90 graus em um eixo (Rotate X ou Z = 90) e é alongado no eixo de altura com Scale Y maior e Scale X e Z menores. O Channel Box mostra valores diferentes de 1 em Scale e 90 em uma rotação, confirmando o uso preciso das transformações.`,
    },
    {
      titulo: `O Trio Secreto: Vértice, Aresta e Face`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza a conversa apontando no projetor cada elemento. Peça que os alunos digam com as próprias palavras o que viram. Não exija edição, apenas reconhecimento.`,
      atividade: `Selecione a esfera, clique com o botão direito segurando e troque entre os modos Vertex, Edge e Face. Em roda, cada aluno descreve o que é um vértice, uma aresta e uma face usando suas próprias palavras.`,
      gabarito: `Respostas esperadas: vértice é um ponto (canto); aresta é a linha que liga dois vértices; face é a superfície fechada entre arestas. O aluno demonstra ter alternado os três modos pelo menu marcador (botão direito) e retornado ao Object Mode. Qualquer explicação coerente com a metáfora pontinho/palito/adesivo é válida.`,
    },
    {
      titulo: `Construção em Dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno cria as formas e o outro orienta o posicionamento, depois trocam. Incentive comunicação clara sobre eixos e cores.`,
      atividade: `Em dupla, combinem primitivas para montar um carrinho simples: um cubo achatado como carroceria e dois ou mais cilindros deitados como rodas. Um colega cria as formas, o outro guia onde posicionar usando os nomes dos eixos (X, Y, Z).`,
      gabarito: `A dupla entrega um agrupamento de primitivas que sugere um carro: corpo a partir de um cubo escalado (achatado em Y), rodas a partir de cilindros rotacionados para ficarem deitados e posicionados nas laterais. Espera-se uso de mover e escalar com precisão e silhueta reconhecível como veículo.`,
    },
    {
      titulo: `Meu Personagem de Formas`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Deixe o aluno escolher o que criar. Avalie a clareza da silhueta e o uso correto das transformações, não a beleza. Peça que apresente orbitando a câmera.`,
      atividade: `Crie sozinho um personagem ou objeto reconhecível usando pelo menos quatro primitivas: por exemplo um boneco (esfera na cabeça, cubo no corpo, cilindros nos braços e pernas) ou um foguete (cone na ponta, cilindro no corpo, cubos como aletas). Acrescente um detalhe extra e apresente para a turma.`,
      gabarito: `O projeto reúne quatro ou mais primitivas transformadas com mover, rotacionar e escalar, formando uma silhueta identificável (boneco, foguete, robô, etc.). Há pelo menos um detalhe adicional. O aluno apresenta orbitando a câmera e nomeia as formas usadas. Avaliação positiva quando o objeto é reconhecível e as transformações foram feitas com controle, mesmo sem acabamento perfeito.`,
    },
  ],
};
