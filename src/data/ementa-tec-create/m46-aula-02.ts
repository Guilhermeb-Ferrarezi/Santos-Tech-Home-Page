import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Navegando pelo Editor da Unreal",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Dominar a navegação pela viewport da Unreal Engine e os painéis essenciais do editor, movendo, rotacionando e escalando objetos para montar uma cena mínima.`,
  descricao: `Nesta aula o aluno deixa de apenas olhar a Unreal Engine e passa a controlá-la com as próprias mãos. O foco é a navegação pela viewport: voar pela cena como se fosse uma câmera de cinema, aproximar e afastar a visão e olhar os objetos de todos os ângulos. Esse domínio dos controles é a base de tudo o que vem depois, porque sem saber se mover no espaço 3D fica impossível posicionar qualquer coisa com precisão.

Além de voar, o aluno aprende a manipular objetos com as três ferramentas mais importantes do editor: mover (translação), rotacionar e escalar. Cada uma tem um atalho de teclado simples e um manipulador visual, chamado gizmo, que aparece em cima do objeto selecionado. Trabalhar bem com o gizmo é o que separa uma cena bagunçada de uma cena organizada e bonita.

O aluno também conhece os painéis que vai usar o tempo todo: o World Outliner, que é a lista de tudo que existe na cena; o painel Details, que mostra e edita as propriedades do objeto selecionado; e o Content Browser, a biblioteca onde ficam os arquivos do projeto. Saber onde cada informação mora torna o trabalho rápido e seguro.

Por fim, a aula reforça um hábito profissional que muitos iniciantes esquecem: salvar e organizar o projeto. O aluno cria pastas no Content Browser, salva o nível com um nome claro e entende por que a organização desde o primeiro dia evita dores de cabeça enormes nas aulas seguintes, quando a cena começa a crescer.`,
  materiais: [
    `Computadores com Unreal Engine instalada e ambiente C++ configurado (Visual Studio)`,
    `Projetor ou TV para o professor demonstrar a navegação ao vivo`,
    `Projeto Unreal de exemplo da Semana 1 (pode ser o template em branco criado na Aula 1)`,
    `Mouse de três botões para cada aluno (essencial para navegar na viewport)`,
    `Folha impressa com o resumo dos atalhos de navegação e de transformação`,
    `Arquivo de cena modelo do professor mostrando a cena mínima pronta como referência`,
  ],
  conceitosChave: [
    `Viewport — a janela 3D do editor onde você vê e monta a cena, como se fosse os olhos da câmera.`,
    `Gizmo — o manipulador colorido que aparece sobre o objeto selecionado e serve para mover, rotacionar ou escalar.`,
    `Transformação — o conjunto de três operações sobre um objeto: posição (Location), rotação (Rotation) e escala (Scale).`,
    `World Outliner — a lista lateral com o nome de todos os objetos presentes na cena atual.`,
    `Details — o painel que mostra e permite editar as propriedades do objeto que está selecionado.`,
    `Content Browser — a biblioteca de arquivos do projeto, onde ficam modelos, materiais e níveis organizados em pastas.`,
    `Level (nível) — o arquivo que guarda a sua cena; salvar o nível significa guardar tudo o que você montou.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Unreal para dar esta aula. Precisa apenas ter praticado a navegação umas duas vezes antes. A regra de ouro da viewport é: segure o botão direito do mouse e use as teclas W, A, S, D para voar, igual a um jogo de tiro em primeira pessoa. O botão direito segurado também deixa você olhar para os lados movendo o mouse. A rolagem do mouse aproxima e afasta. Pratique até voar com naturalidade, porque o aluno vai imitar exatamente o que você fizer no projetor.

As três ferramentas de transformação têm atalhos fáceis: W move, E rotaciona, R escala. Ao selecionar um objeto (clique nele), aparece o gizmo. Setas significam mover, arcos significam rotacionar, cubos nas pontas significam escalar. Arrastar uma seta vermelha move no eixo X, verde no eixo Y, azul no eixo Z.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 1 com perguntas rápidas. O que é a viewport? Para que serve o Content Browser? Abra o projeto de exemplo no projetor e mostre a cena vazia. Avise que hoje todos vão pilotar a câmera e montar uma cena pequena.

Conteúdo novo guiado (15 min): demonstre, devagar, no projetor. Primeiro a navegação: segure o botão direito e voe com W, A, S, D; suba e desça com E e Q. Depois adicione um objeto: clique no botão Add (o sinal de mais verde no topo da viewport) e escolha Shapes, Cube. Selecione o cubo e mostre o gizmo. Pressione W e arraste as setas. Pressione E e arraste os arcos. Pressione R e arraste os cubinhos. Mostre o World Outliner com o cubo listado e o painel Details com os campos Location, Rotation e Scale. Explique que dá para digitar números nesses campos para ser exato. Por exemplo, para deixar o cubo em cima do chão, ajuste o valor Z de Location.

Mão na massa (25 min): cada aluno adiciona pelo menos quatro formas básicas (cube, sphere, cylinder, cone) e as posiciona formando um cenário simples, como uma mesa com objetos em cima. Eles devem usar mover, rotacionar e escalar em pelo menos um objeto cada. Circule pela sala ajudando com a navegação, que é onde mais travam. Peça que renomeiem os objetos no World Outliner (clique duplo no nome) para nomes claros como Mesa, Bola, Pilar.

Desafio e compartilhar (10 min): peça que criem uma pasta no Content Browser. Clique com o botão direito na área de pastas, escolha New Folder e nomeie de Cena01. Depois salvem o nível com Ctrl + S, dando o nome MinhaCenaMinima. Para fechar, dois ou três alunos giram a câmera mostrando a cena para a turma.

## Como explicar de forma clara (linguagem para a idade)

Compare a viewport a pilotar um drone: o botão direito segurado é o controle, e W, A, S, D são as alavancas. Diga que o gizmo é o volante do objeto, e que cada cor manda o objeto andar numa direção. Use a frase vermelho é X, verde é Y, azul é Z e repita até virar bordão. Para a organização, diga que salvar e criar pastas é como guardar as peças de Lego nas caixinhas certas, para não perder nada na próxima aula.

## Erros comuns e como ajudar

O erro número um é tentar navegar sem segurar o botão direito; o objeto some da tela. Mostre de novo, com calma. Outro erro é selecionar o objeto errado: ensine a usar o World Outliner para clicar pelo nome. Muitos esquecem de salvar; crie o hábito de gritar salvem agora a cada dez minutos. Se um aluno escalar um objeto e ele virar gigante, mostre o campo Scale no Details e o valor 1.0 como tamanho normal. Se a câmera voar para longe demais, pressione a tecla F com um objeto selecionado para a viewport voltar o foco para ele.`,
  exercicios: [
    {
      titulo: `Voo de reconhecimento`,
      tipo: `Prática guiada de navegação`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça junto, no projetor, e peça que todos repitam ao mesmo tempo. Verifique se cada aluno está segurando o botão direito antes de usar W, A, S, D. Este exercício é só aquecimento dos dedos; não precisa de objetos ainda.`,
      atividade: `Voe pela cena de exemplo usando o botão direito do mouse com as teclas W, A, S, D. Suba com E e desça com Q. Aproxime e afaste a visão com a rolagem do mouse. Dê uma volta completa em torno do centro da cena.`,
      gabarito: `Navegação correta: segurar o botão direito do mouse e usar W (frente), S (trás), A (esquerda), D (direita); E sobe e Q desce; a rolagem do mouse controla a aproximação. O aluno deve conseguir orbitar o centro da cena sem perder a visão dos objetos.`,
    },
    {
      titulo: `Os três poderes do gizmo`,
      tipo: `Manipulação de objeto`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que cada aluno adicione um cubo pelo botão Add antes de começar. Reforce os atalhos W, E, R e a relação cor-eixo. Peça que digam em voz alta qual ferramenta estão usando.`,
      atividade: `Adicione um cube na cena. Mova ele com a ferramenta de mover (W), gire com a de rotacionar (E) e mude o tamanho com a de escalar (R). Use cada uma das três pelo menos uma vez.`,
      gabarito: `Atalhos corretos: W ativa mover (setas no gizmo), E ativa rotacionar (arcos no gizmo), R ativa escalar (cubinhos nas pontas). Arrastar a alça vermelha afeta o eixo X, a verde o eixo Y e a azul o eixo Z. O cubo deve terminar deslocado, girado e com tamanho diferente do inicial.`,
    },
    {
      titulo: `Precisão pelo painel Details`,
      tipo: `Edição numérica de propriedades`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre onde fica o painel Details e os campos Location, Rotation e Scale. Explique que digitar números é mais exato do que arrastar. Confira se o aluno selecionou o objeto antes de digitar.`,
      atividade: `Selecione um objeto e, no painel Details, digite valores exatos: Location Z igual a 100, Rotation no eixo Z igual a 45 graus e Scale igual a 2 nos três eixos. Observe o objeto mudar na viewport.`,
      gabarito: `No painel Details, o campo Location define a posição (Z igual a 100 sobe o objeto cem unidades), Rotation define o giro (45 no eixo Z gira o objeto meio caminho de uma volta de 90), e Scale define o tamanho (2, 2, 2 deixa o objeto duas vezes maior). Os valores digitados aparecem refletidos imediatamente no objeto na viewport.`,
    },
    {
      titulo: `Cena mínima organizada`,
      tipo: `Projeto prático em aula`,
      tempo: `8 minutos`,
      guiaProfessor: `Este é o coração da mão na massa. Circule ajudando na navegação. Exija pelo menos quatro formas, nomes claros no World Outliner e o uso das três transformações na cena. Incentive criatividade no arranjo.`,
      atividade: `Monte uma cena mínima com pelo menos quatro formas básicas (cube, sphere, cylinder, cone). Posicione formando um pequeno cenário, como uma mesa com objetos. Renomeie cada objeto no World Outliner com nomes claros e use mover, rotacionar e escalar.`,
      gabarito: `Cena válida: ao menos quatro objetos visíveis e bem posicionados (sem flutuar nem afundar no chão), cada um renomeado no World Outliner com nome descritivo (por exemplo Mesa, Bola, Pilar, Topo). Pelo menos uma transformação de mover, uma de rotacionar e uma de escalar aplicadas. Para renomear: clique duplo no nome do objeto no World Outliner e digite o novo nome.`,
    },
    {
      titulo: `Guardando o trabalho como profissional`,
      tipo: `Organização e salvamento do projeto`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza passo a passo no projetor. Crie a pasta junto com a turma e confira o ícone de não salvo (asterisco) sumindo após o Ctrl + S. Aproveite para fixar o hábito de salvar sempre.`,
      atividade: `No Content Browser, crie uma pasta chamada Cena01. Em seguida, salve o nível com o nome MinhaCenaMinima. Confirme que o projeto foi salvo corretamente.`,
      gabarito: `Para criar a pasta: clique com o botão direito na área de pastas do Content Browser, escolha New Folder e digite Cena01. Para salvar o nível: pressione Ctrl + S (ou menu File, Save Current Level) e, na primeira vez, escolha a pasta e digite o nome MinhaCenaMinima. O salvamento correto faz desaparecer o indicador de alterações não salvas (o asterisco) ao lado do nome do nível.`,
    },
  ],
};
