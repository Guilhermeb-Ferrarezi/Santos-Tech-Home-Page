import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Materiais e Cores no Maya",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Apresentar o Hypershade e o material Lambert para que o aluno aplique cor base e brilho nos personagens e itens 3D, dando vida visual aos modelos antes do acabamento final.`,
  descricao: `Até esta aula, os modelos 3D que os alunos criaram no Maya estão todos cinzas, com aquele aspecto de massinha de modelar. O personagem principal, os itens do jogo e o cenário têm a forma certa, mas ainda não têm cor nenhuma. Nesta aula isso muda: o aluno aprende a dar cor e o primeiro toque de vida visual aos seus modelos, usando materiais.

Material, no Maya, é a "tinta" que envolve o modelo. Mas não é uma tinta qualquer: o material decide a cor do objeto, se ele é brilhante como plástico ou fosco como papelão, e como a luz se comporta na superfície. O material mais simples e mais usado para começar é o Lambert, que é fosco e perfeito para um personagem de jogo estilo cartoon. O lugar onde criamos e organizamos esses materiais chama-se Hypershade, uma janela própria do Maya parecida com uma bancada de pintura.

Nesta aula o aluno vai abrir o Hypershade, criar materiais Lambert, escolher a cor base de cada um (a cor principal do objeto) e ajustar um pouco o brilho. Depois vai arrastar cada material para o modelo certo: a pele do personagem de uma cor, a roupa de outra, a moeda do jogo dourada, a poção verde. É um momento muito gratificante na aula, porque é quando os modelos finalmente "ganham personalidade" e deixam de ser cinzas.

É importante o professor saber que aqui ainda não usamos as imagens da IA como textura — isso é o assunto da próxima aula (Aula 6). Hoje trabalhamos só com cores sólidas e brilho, preparando os modelos para receberem as texturas depois. Pense nesta aula como pintar as paredes com tinta lisa antes de colar o papel de parede.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e os modelos 3D dos alunos (personagem e itens) já salvos das aulas anteriores`,
    `Projetor ou TV ligada ao computador do professor para mostrar a janela do Hypershade e os menus do Maya`,
    `Arquivo de exemplo do professor com um personagem simples já pintado, para mostrar o resultado final`,
    `Uma cena Maya extra com modelos cinzas prontos, caso algum aluno esteja sem o próprio arquivo`,
    `Folha impressa com a paleta de cores do jogo (códigos RGB sugeridos para pele, roupa, moeda, poção)`,
    `Mouse com três botões para cada aluno, pois o Maya depende muito do botão do meio e do botão direito`,
  ],
  conceitosChave: [
    `Material (shader) — a "tinta" que envolve o modelo 3D e define cor, brilho e como a luz reage na superfície.`,
    `Hypershade — a janela do Maya onde criamos, vemos e organizamos todos os materiais da cena, como uma bancada de pintura.`,
    `Lambert — o material fosco mais simples do Maya, sem reflexo forte, ideal para personagens e itens estilo cartoon.`,
    `Cor base (Color) — a cor principal do material, a primeira escolha que define se o objeto é vermelho, azul, dourado e assim por diante.`,
    `Brilho (Specular) — o ponto de luz que aparece na superfície; pouco brilho deixa o objeto fosco, muito brilho deixa parecendo plástico ou metal.`,
    `Atribuir material (Assign Material) — a ação de aplicar um material a um modelo, ligando a "tinta" ao objeto selecionado.`,
    `Attribute Editor — o painel da direita onde ajustamos as propriedades do material selecionado, como a cor e o brilho.`,
  ],
  treinamento: `## O que o professor precisa saber

No Maya, todo objeto já nasce com um material cinza padrão chamado lambert1 — é por isso que os modelos aparecem cinzas. Para colorir, criamos novos materiais e os atribuímos aos objetos. O lugar central para isso é o Hypershade, que você abre no menu Windows > Rendering Editors > Hypershade. Pense no material como uma lata de tinta: você cria a lata, escolhe a cor dentro dela e depois "passa" essa lata no modelo. O material Lambert é fosco e simples, perfeito para a idade e para o estilo cartoon dos jogos. Você não precisa entender renderização avançada: basta saber criar o Lambert, mexer na cor (Color) e no brilho. Antes da aula, abra seu arquivo de exemplo já pintado e confirme que as cores aparecem, para mostrar onde a turma quer chegar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, abra um modelo cinza e ao lado o exemplo já colorido. Pergunte: "Qual desses dois parece um personagem de jogo de verdade?". Mostre que a diferença é a cor e o brilho. Explique que hoje cada um vai pintar o seu próprio personagem e itens.

Conteúdo novo guiado (15 min): com todos olhando, abra o Hypershade em Windows > Rendering Editors > Hypershade. Na coluna da esquerda (Create), clique em "Lambert" — um novo material aparece. Selecione-o e, no Attribute Editor à direita, clique no quadradinho ao lado de "Color" para abrir o seletor de cores; escolha uma cor e confirme. Depois, no viewport, selecione o modelo (clique nele), clique com o botão direito sobre o material no Hypershade e escolha "Assign Material To Selection". Para ver a cor no viewport, aperte a tecla 6 (modo de exibição com texturas/materiais). Mostre também onde diminuir o brilho, na seção "Specular Shading".

Mão na massa (25 min): cada aluno repete no próprio arquivo. Primeiro abre o Hypershade, cria um Lambert, define a cor da pele do personagem e atribui. Depois cria outros Lamberts para roupa, moeda e poção, sempre nomeando cada material com clareza (clique duplo no nome para renomear: "mat_pele", "mat_roupa", "mat_moeda"). Circule pela sala ajudando a selecionar o objeto certo antes de atribuir.

Desafio + compartilhar (10 min): peça que ajustem o brilho de pelo menos um item para parecer metal (moeda mais brilhante) ou fosco (pele mais fosca). Cada aluno gira o modelo colorido na tela e mostra para a turma a paleta que escolheu.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de pintura: "O material é a sua lata de tinta. O Hypershade é a bancada onde ficam todas as latas. Você cria a lata, escolhe a cor e passa no boneco." Para o brilho, peça que comparem uma maçã (fosca) com uma bola de boliche (brilhante): "Specular é o pontinho de luz; quanto mais alto, mais a coisa parece molhada ou de plástico." Reforce que o cinza padrão é só "o boneco sem tinta ainda". Diga que nomear os materiais é como escrever o nome nos potes de tinta para não se perder depois.

## Erros comuns e como ajudar

O erro mais frequente é atribuir o material sem ter o objeto selecionado, ou com o objeto errado selecionado: a cor não aparece onde deveria. Peça sempre "clique no modelo primeiro, depois atribua". Outro clássico é o aluno achar que a pintura não funcionou porque o viewport está no modo sem materiais — basta apertar a tecla 6 para ver as cores. Muitos esquecem de renomear os materiais e ficam com dez "lambert" iguais, sem saber qual é qual; incentive nomes claros desde o início. Alguns mexem em "Transparency" sem querer e o objeto some ou fica translúcido — mostre que essa barra deve ficar toda escura (preta). Por fim, há quem exagere no brilho e o personagem cartoon fica parecendo plástico; lembre que para Lambert o brilho deve ser baixo ou nenhum.`,
  exercicios: [
    {
      titulo: `Minha primeira lata de tinta`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe pelo projetor enquanto cada aluno abre o Hypershade e cria o primeiro Lambert. Confirme um a um que o material foi criado e que o Attribute Editor mostra as propriedades dele. O erro comum é não achar o Hypershade no menu; aponte o caminho Windows > Rendering Editors > Hypershade.`,
      atividade: `Abra o Hypershade pelo menu Windows > Rendering Editors > Hypershade. Na coluna Create à esquerda, clique em "Lambert" para criar um material novo. Depois clique no material e veja as propriedades aparecerem no Attribute Editor, do lado direito da tela.`,
      gabarito: `O Hypershade está aberto e um novo material Lambert aparece na área de materiais (Materials). Ao selecioná-lo, o Attribute Editor à direita mostra propriedades como Color (cor) e Specular Shading (brilho). Caminho correto: Windows > Rendering Editors > Hypershade, depois Create > Lambert.`,
    },
    {
      titulo: `Escolhendo a cor e pintando o personagem`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Verifique se cada aluno selecionou o modelo no viewport antes de atribuir o material e se apertou a tecla 6 para ver a cor. O erro mais comum é a cor não aparecer porque o objeto não estava selecionado ou porque o viewport está no modo sem materiais.`,
      atividade: `No seu material Lambert, clique no quadradinho ao lado de "Color" no Attribute Editor e escolha a cor da pele do personagem. Depois selecione o personagem no viewport, clique com o botão direito sobre o material no Hypershade e escolha "Assign Material To Selection". Aperte a tecla 6 para ver a cor aplicada.`,
      gabarito: `A cor escolhida foi definida no campo Color do material. O personagem aparece colorido no viewport após o aluno selecioná-lo, atribuir o material com "Assign Material To Selection" e apertar a tecla 6. Forma correta: definir Color, selecionar o objeto, botão direito no material > Assign Material To Selection, tecla 6 para visualizar.`,
    },
    {
      titulo: `Uma cor para cada item`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Aqui o aluno cria vários materiais e precisa atribuir cada um ao item certo. Reforce a nomeação dos materiais (clique duplo no nome para renomear) para que ninguém se perca. Ajude quem confunde qual objeto está selecionado.`,
      atividade: `Crie três materiais Lambert novos e renomeie cada um com clareza: "mat_roupa", "mat_moeda" e "mat_pocao". Defina uma cor para cada (roupa azul, moeda dourada, poção verde) e atribua cada material ao item certo no seu jogo. Confira no viewport com a tecla 6.`,
      gabarito: `Existem três materiais Lambert nomeados (mat_roupa, mat_moeda, mat_pocao), cada um com a cor definida (azul, dourado, verde). Cada material está atribuído ao item correto: a roupa azul, a moeda dourada, a poção verde, visíveis no viewport. Nomear os materiais evita a confusão de vários "lambert" iguais.`,
    },
    {
      titulo: `Fosco ou brilhante? Ajustando o Specular`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas para que um confira o resultado do outro. O foco é a seção "Specular Shading" do Lambert. Lembre que brilho alto deixa o objeto parecendo plástico; para cartoon, o brilho deve ser baixo, exceto em itens como a moeda metálica.`,
      atividade: `Em dupla, escolham dois itens: um que deve ser fosco (a pele) e um que deve parecer metal (a moeda). No material de cada um, abram a seção "Specular Shading" no Attribute Editor e ajustem o brilho — pouco brilho na pele, mais brilho na moeda. Comparem os dois resultados e mostrem ao colega a diferença.`,
      gabarito: `O material da pele tem Specular baixo (aspecto fosco) e o da moeda tem Specular mais alto (aspecto brilhante, metálico). Ao comparar, a dupla percebe que o brilho muda a sensação do material sem mudar a cor. O ajuste é feito na seção Specular Shading do material Lambert, no Attribute Editor.`,
    },
    {
      titulo: `A paleta do meu jogo`,
      tipo: `projeto curto`,
      tempo: `14 minutos`,
      guiaProfessor: `Este exercício junta tudo: todos os modelos coloridos e nomeados, com brilho coerente. Apoie quem ainda tem itens cinzas. Ao final, abra uma roda de conversa rápida para cada aluno girar o modelo e contar quais cores escolheu e por quê.`,
      atividade: `Deixe o personagem e todos os itens do seu jogo coloridos, sem nenhuma peça cinza sobrando. Confira que cada material tem um nome claro, uma cor combinando com o estilo do jogo e o brilho adequado (fosco para o cartoon, brilhante só onde fizer sentido). Gire o modelo na tela e apresente sua paleta de cores para a turma, explicando suas escolhas.`,
      gabarito: `O personagem e todos os itens estão coloridos, sem partes cinzas, cada um com material Lambert nomeado e cor coerente com o estilo do jogo. O brilho está ajustado por item (fosco no geral, brilhante onde faz sentido, como na moeda). Na roda de conversa, o aluno consegue girar o modelo e justificar a paleta escolhida. Esse é o conjunto de modelos pronto para receber as texturas da IA na próxima aula.`,
    },
  ],
};
