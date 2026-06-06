import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Modelando Itens do Jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aplicar edição de vértices, arestas e faces com as ferramentas Extrude e Bevel no Maya para transformar um bloco simples em um item reconhecível do jogo, como uma moeda, uma chave ou um baú.`,
  descricao: `Nesta aula o aluno dá um grande passo: sai do bloco básico e cria um item de verdade para o seu jogo. Nas aulas anteriores deste mês a turma reencontrou o Maya, dominou a navegação no espaço 3D e começou a base do personagem. Agora o foco muda para os objetos que deixam o jogo divertido: a moeda que o jogador coleta, a chave que abre uma porta ou o baú cheio de recompensas. A ideia central é simples e poderosa: todo modelo bonito começou como uma forma simples que foi editada aos poucos.

Para isso, o aluno vai usar a edição de componentes. Um modelo 3D é feito de três peças menores: os vértices (os pontos), as arestas (as linhas que ligam os pontos) e as faces (as superfícies entre as linhas). Quando o aluno aprende a selecionar e mover essas peças, ele ganha o poder de moldar qualquer forma, como um escultor que aperta e estica a massinha. Hoje a turma vai descobrir que um cubo não precisa continuar um cubo: ele pode virar quase qualquer coisa.

As duas ferramentas estrela da aula são o Extrude e o Bevel. O Extrude pega uma face e a puxa para fora ou para dentro, criando volume novo, como esticar um pedaço de massa de modelar. É assim que nasce o cabo de uma chave, a tampa de um baú ou a saliência de um botão. Já o Bevel pega uma aresta dura e a transforma em um cantinho suave e chanfrado, deixando o objeto com cara de coisa bem feita, e não de bloco grosseiro. Juntas, essas ferramentas transformam blocos em itens limpos e reconhecíveis.

O foco do mês é modelar os assets do jogo, e o entregável é os primeiros assets 3D. Por isso o professor deve sempre lembrar a turma de modelar pensando no jogo: o item precisa caber no mundo, ter um tamanho coerente e um formato que o jogador entenda de longe. No fim desta aula, cada aluno terá pelo menos um item modelado a partir de um bloco, usando Extrude e Bevel, pronto para ser refinado nas próximas aulas.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e funcionando (um por aluno)`,
    `Projetor ou TV para o professor demonstrar os passos do Maya em tela grande`,
    `Arquivo de exemplo .mb ou .ma com um cubo, um cilindro e uma cena limpa prontos para começar`,
    `Imagens de referência impressas ou em slide de itens de jogos (moeda, chave, baú) para os alunos copiarem a ideia`,
    `Mouse com botão de scroll para facilitar a navegação e o zoom na cena 3D`,
    `Folha simples com o nome dos três componentes (vértice, aresta, face) e dos dois comandos (Extrude, Bevel) para consulta rápida`,
  ],
  conceitosChave: [
    `Vértice — o ponto, o cantinho do modelo; é a menor peça que podemos mover para mudar a forma.`,
    `Aresta — a linha que liga dois vértices; é a borda entre duas faces.`,
    `Face — a superfície plana entre as arestas; é o "lado" do objeto que vemos preenchido.`,
    `Modo de componente — o jeito do Maya em que selecionamos vértices, arestas ou faces, ativado com a tecla de atalho do botão direito ou pelas teclas de número.`,
    `Extrude — ferramenta que puxa uma face para fora ou para dentro, criando volume novo no modelo.`,
    `Bevel — ferramenta que chanfra uma aresta dura, transformando o canto reto em um cantinho suave.`,
    `Asset — cada peça pronta do jogo (item, personagem ou cenário) que será usada dentro do Roblox depois.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Precisa dominar quatro ideias. Primeira: um modelo é feito de vértices (pontos), arestas (linhas) e faces (lados). Segunda: para editar esses pedaços, o Maya tem o modo de componente. O caminho mais fácil é clicar com o botão direito segurando sobre o objeto e escolher "Vertex", "Edge" ou "Face" no menu que aparece em forma de leque. Terceira: o Extrude puxa uma face e cria volume; fica no menu superior, em modo "Modeling", menu "Edit Mesh", opção "Extrude". Quarta: o Bevel suaviza uma aresta; fica no mesmo menu "Edit Mesh", opção "Bevel". Antes da aula, abra o Maya, crie um cubo, entre no modo de face, selecione a face de cima e aplique Extrude uma vez para sentir o movimento. Faça o mesmo com uma aresta e o Bevel. Esse ensaio de cinco minutos te deixa seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Mostre na tela grande imagens de itens de jogos famosos (moeda, chave, baú). Pergunte: "Como será que isso começou no programa 3D?" Conduza até a resposta: tudo começou como um bloco simples. Relembre rápido a navegação aprendida nas aulas anteriores: girar a câmera segurando Alt e arrastando, e dar zoom com o scroll do mouse.

15 min, conteúdo novo guiado. No Maya, crie um cubo pelo menu "Create", "Polygon Primitives", "Cube". Mostre que ele tem pontos, linhas e lados. Clique com o botão direito segurando sobre o cubo e escolha "Face"; selecione a face de cima. Vá em modo "Modeling", menu "Edit Mesh", "Extrude". Arraste a seta para cima: nasce um pedaço novo. Repita o Extrude para criar dois andares e diga que assim começa um baú. Agora mostre o Bevel: clique direito segurando, escolha "Edge", selecione uma aresta da quina, vá em "Edit Mesh", "Bevel" e arraste para suavizar. Mostre a quina dura virando um cantinho macio.

25 min, mão na massa. Cada aluno escolhe um item simples do próprio jogo: moeda, chave ou baú. A partir de um cubo ou cilindro, usa Extrude para criar volume (o cabo da chave, a tampa do baú) e Bevel para suavizar pelo menos uma aresta. Circule pela sala. Dica de moeda: use um cilindro e dê Bevel nas duas bordas para arredondar. Dica de chave: parta de um bloco fino, extrude o cabo e abra dentes na ponta com pequenos extrudes.

10 min, desafio e compartilhar. Desafio: peça que cada aluno aplique Bevel em mais uma aresta para deixar o item ainda mais limpo. Depois, cada um gira a câmera (Alt e arrastar) e mostra o item ao colega do lado, dizendo o que é e onde aparece no jogo.

## Como explicar de forma clara (linguagem para a idade)

Use comparações de massinha. Diga: "O vértice é a pontinha, a aresta é a linha e a face é o lado cheio. O Extrude é puxar um pedaço da massinha para fora; o Bevel é passar o dedo na quina para tirar o canto duro." Mostre antes de mandar fazer: o aluno copia o que vê. Sempre conecte com o jogo: "Esse extrude é o cabo da sua chave." Evite jargão solto; fale "puxar a face" antes de dizer "Extrude". Repita o caminho em voz alta enquanto clica, para a turma decorar o trajeto do menu.

## Erros comuns e como ajudar

O erro mais comum é o aluno estar no modo errado: ele quer mover uma face mas está selecionando o objeto inteiro. Ensine a sempre clicar direito segurando e escolher "Face", "Edge" ou "Vertex" antes de editar. Outro erro é dar Extrude muitas vezes sem querer, criando faces escondidas que bagunçam o modelo; oriente a desfazer com Ctrl mais Z e tentar de novo com calma. No Bevel, alguns arrastam demais e o objeto fica deformado; mostre o controle de quantidade e peça valores pequenos. Há quem perca a face dentro do modelo após puxar para dentro; oriente a girar a câmera para conferir. Por fim, lembre de salvar o arquivo com o nome do aluno para usar nas próximas aulas.`,
  exercicios: [
    {
      titulo: `Conhecendo as peças: vértice, aresta e face`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha um cubo na cena. Reforce o caminho do botão direito segurando até aparecer o menu em leque com "Vertex", "Edge" e "Face".`,
      atividade: `Crie um cubo. Entre no modo de vértice e clique em um ponto. Depois mude para o modo de aresta e clique em uma linha. Por fim, mude para o modo de face e clique em um lado. Mostre ao professor que você sabe selecionar cada uma das três peças.`,
      gabarito: `O aluno deve conseguir selecionar e destacar, em sequência, um vértice (ponto), uma aresta (linha) e uma face (lado). Caminho correto: botão direito segurando sobre o cubo e escolher "Vertex", depois "Edge" e depois "Face". A peça selecionada fica destacada na tela. Se nada acontecer, o aluno provavelmente continua no modo de objeto e não entrou no modo de componente.`,
    },
    {
      titulo: `Primeiro Extrude: puxando uma face`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre o menu "Edit Mesh", "Extrude" em modo "Modeling". Lembre que arrastar a seta para cima cria volume. Oriente a usar o Extrude poucas vezes para não bagunçar.`,
      atividade: `A partir de um cubo, selecione a face de cima e use o Extrude para puxá-la para cima uma vez. Em seguida, dê outro Extrude para criar um segundo andar. Você acabou de começar a base de um baú ou de uma caixa.`,
      gabarito: `O cubo deve ganhar volume novo no topo, formando dois andares empilhados. Caminho correto: botão direito, "Face", selecionar a face de cima, menu "Edit Mesh", "Extrude", arrastar a seta para cima; repetir uma vez. Se o objeto não mudar, a face não estava selecionada ou o aluno não estava no modo de face.`,
    },
    {
      titulo: `Suavizando com Bevel em dupla`,
      tipo: `em dupla`,
      tempo: `11 minutos`,
      guiaProfessor: `Forme duplas. Um aluno aplica o Bevel, o outro confere o antes e o depois girando a câmera. Lembre de usar valores pequenos para não deformar o objeto.`,
      atividade: `Em dupla, escolham um cubo com quinas duras. Antes, observem como as quinas estão retas. Selecionem uma aresta, apliquem o Bevel e arrastem só um pouco para arredondar a quina. Comparem o antes e o depois e expliquem um ao outro o que mudou.`,
      gabarito: `Depois do Bevel, a quina dura vira um cantinho suave e chanfrado, deixando o objeto com aparência mais limpa e profissional. Caminho: botão direito, "Edge", selecionar a aresta, menu "Edit Mesh", "Bevel", arrastar pouco. A dupla deve perceber que arrastar demais deforma o objeto, por isso o valor deve ser pequeno.`,
    },
    {
      titulo: `Desafio: transformar um cilindro em moeda`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre como criar um cilindro pelo menu "Create", "Polygon Primitives". Oriente a achatar o cilindro e a dar Bevel nas bordas. Quem terminar pode tentar gravar um símbolo na face com um Extrude pequeno.`,
      atividade: `Crie um cilindro e achate-o até ficar fino como uma moeda. Selecione as bordas circulares e aplique o Bevel para arredondar. Se sobrar tempo, selecione a face de cima e use um Extrude pequeno para dentro, criando um relevo de moeda.`,
      gabarito: `O resultado deve ser um disco fino com bordas arredondadas, parecido com uma moeda de jogo. Caminho: "Create", "Polygon Primitives", "Cylinder"; achatar pela escala; modo de aresta, selecionar as bordas circulares, "Edit Mesh", "Bevel"; bônus: modo de face, face de cima, "Edit Mesh", "Extrude" puxando levemente para dentro. Bordas duras indicam que o Bevel não foi aplicado.`,
    },
    {
      titulo: `Mini projeto: um item do meu jogo`,
      tipo: `projeto curto`,
      tempo: `16 minutos`,
      guiaProfessor: `Use as imagens de referência (moeda, chave, baú). Cada aluno escolhe um item e parte de um bloco simples. Exija o uso de pelo menos um Extrude e um Bevel. Lembre de salvar o arquivo com o nome do aluno.`,
      atividade: `Escolha um item do seu jogo: moeda, chave ou baú. Comece de um cubo ou cilindro e modele o item usando pelo menos um Extrude para criar volume e um Bevel para suavizar uma aresta. Deixe a forma limpa e reconhecível. Salve o arquivo com o seu nome para usar nas próximas aulas.`,
      gabarito: `O aluno deve entregar um item reconhecível modelado a partir de um bloco, com pelo menos um Extrude visível (volume novo, como cabo, tampa ou relevo) e pelo menos um Bevel (aresta suavizada). Exemplos válidos: baú feito de cubo com tampa extrudada e quinas chanfradas; chave com cabo extrudado e ponta com dentes; moeda de cilindro com bordas em Bevel. Arquivo salvo com o nome do aluno. Item irreconhecível ou ainda em forma de bloco bruto indica que faltou aplicar Extrude e Bevel com intenção.`,
    },
  ],
};
