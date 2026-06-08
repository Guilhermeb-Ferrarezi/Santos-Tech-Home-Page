import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Pintar com cores: o que é vertex color",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Descobrir como dar cor aos modelos 3D pintando direto neles com vertex color, deixando um item inteiro de uma cor só.`,
  descricao: `Até agora as crianças montaram itens 3D no Maya usando formas e proporções, mas todos os objetos nasceram cinzas, com aquela cor de "massinha sem graça". Nesta aula a turma vai dar o primeiro passo para deixar os itens bonitos e coloridos: vamos pintar direto no modelo usando uma ferramenta chamada vertex color. É como se o objeto 3D ganhasse uma camada de tinta que gruda nele e fica salva junto com o modelo.

Vertex color significa, em palavras simples, "cor presa nos pontinhos do objeto". Todo modelo 3D é feito de vértices (os cantinhos), arestas (as linhas que ligam os cantinhos) e faces (os quadradinhos entre as linhas). Quando pintamos com vertex color, na verdade colorimos esses pontinhos, e a cor se espalha pelas faces vizinhas. Por isso o nome: "color" é cor, "vertex" é o pontinho. O resultado é um objeto colorido sem precisar de imagens complicadas nem de programas de pintura separados.

Nesta primeira experiência com cor, o foco é simples e mão na massa: pintar um item inteiro de UMA cor só. Nada de detalhes ou desenhos por enquanto. A ideia é que a criança entenda como a tinta "gruda" no objeto, como escolher uma cor e como aplicar a cor no modelo todo de uma vez. Pintar um cubo de vermelho, uma esfera de azul, uma maçã de verde. Assim a turma sente a mágica de ver o item cinza virar colorido na frente dos olhos.

O professor deve tratar esta aula como uma brincadeira de pintar, parecida com mergulhar um objeto num pote de tinta. O capricho com detalhes fica para as próximas aulas. Aqui o objetivo é o encantamento e a compreensão: "minha cor grudou no meu item 3D, e ele ficou todo da cor que eu escolhi".`,
  materiais: [
    `Computadores com o Maya aberto, um por criança, com os itens 3D feitos nas aulas anteriores já salvos`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar cada passo`,
    `Exemplos prontos: um cubo cinza e o mesmo cubo já pintado de vermelho com vertex color, para mostrar o "antes e depois"`,
    `Uma cartela impressa de cores com os nomes (vermelho, azul, verde, amarelo, roxo, laranja) para as crianças escolherem`,
    `Crachás ou etiquetas para nomear quem pintou cada item na hora de compartilhar`,
    `Folha de registro simples onde a criança desenha ou escreve qual cor escolheu para cada item`,
  ],
  conceitosChave: [
    `Vertex color — uma tinta especial que gruda direto no seu objeto 3D e fica salva junto com ele.`,
    `Vértice — o cantinho do objeto 3D, o pontinho onde as linhas se encontram.`,
    `Face — o quadradinho do objeto, a parte cheia que fica entre as linhas e que recebe a cor.`,
    `Pintar (aplicar cor) — colocar a cor escolhida no objeto, como se mergulhasse o item num pote de tinta.`,
    `Cor sólida — quando o item fica todinho de uma cor só, sem manchas nem desenhos.`,
    `Seleção — escolher o objeto inteiro antes de pintar, para a cor ir para todas as partes dele.`,
    `Antes e depois — comparar o item cinza com o item já colorido para ver a diferença.`,
  ],
  treinamento: `## O que o professor precisa saber

No Maya, "vertex color" é uma cor guardada nos vértices da malha do objeto. Você não precisa ser um artista nem dominar o programa: o caminho é curto e sempre o mesmo. Antes da aula, abra o Maya, crie um cubo (menu Create, depois Polygon Primitives, depois Cube) e teste o caminho uma vez. O menu que usaremos fica em "Mesh Display". Confirme que, no canto superior esquerdo, o conjunto de menus está em "Modeling" (há um seletor de menu chamado menu set; escolha "Modeling"). Assim o menu "Mesh Display" aparece. Dentro dele existe "Apply Color" (Aplicar Cor) e "Paint Vertex Color Tool" (Ferramenta de Pintar Cor de Vértice). Para esta aula, vamos usar o caminho mais fácil: selecionar o objeto todo e usar "Apply Color" para deixá-lo de uma cor só.

Dica importante: para a cor aparecer na tela, às vezes é preciso ligar a exibição de cores de vértice. No menu "Mesh Display" há a opção "Toggle Display Colors" (ou um cadeado de cor no atributo). Se a cor não aparecer, é quase sempre isso. Teste antes para não travar na aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Reúna a turma perto do projetor. Mostre os itens 3D cinzas que eles já fizeram e pergunte: "Está faltando algo?". Espere eles dizerem "cor!". Mostre o exemplo "antes e depois": o cubo cinza e o cubo vermelho. Diga que hoje vamos aprender a tinta mágica que gruda no 3D, chamada vertex color.

Conteúdo novo guiado (15 min): No seu Maya, com o projetor ligado, abra um objeto simples. Confirme o menu set em "Modeling" (canto superior esquerdo). Clique no objeto uma vez para selecioná-lo (ele fica com a borda esverdeada). Vá no menu de cima "Mesh Display", depois "Apply Color" e clique no quadradinho de opções ao lado. Vai abrir uma janela com um seletor de cor. Clique no campo "Color", escolha uma cor bem viva (vermelho) e clique em "Apply Color" e depois "Close". O objeto fica vermelho na hora. Repita escolhendo azul, mostrando que a cor sempre cobre o item inteiro. Fale alto cada clique enquanto faz.

Mão na massa (25 min): Cada criança abre o próprio item 3D. Acompanhe pelas mesas. Passos para elas: 1) clicar uma vez no objeto para selecionar; 2) ir em "Mesh Display"; 3) clicar em "Apply Color" (no quadradinho de opções); 4) clicar no campo de cor e escolher uma cor da cartela; 5) clicar em "Apply Color" e "Close". Peça que pintem pelo menos dois itens diferentes, cada um de uma cor só. Circule ajudando quem não selecionou o objeto certo.

Desafio e compartilhar (10 min): Desafio: "Pinte um item com a sua cor preferida do mundo". Depois, cada criança mostra no projetor (ou na própria tela) o item colorido e diz a cor que escolheu. Aplauda cada um.

## Como explicar para crianças

Use a analogia do pote de tinta: "Imagine que seu objeto 3D é um biscoito e você vai mergulhar ele inteiro num pote de tinta. Quando tira, ele fica todinho da cor da tinta". Explique que os "pontinhos" (vértices) seguram a cor, como se cada cantinho do objeto ganhasse uma gotinha de tinta que se espalha. Reforce que hoje é UMA cor só, sem desenhar nada: "Hoje a gente só mergulha no pote, semana que vem a gente vai caprichar nos detalhes".

## Erros comuns e como ajudar

O erro mais comum é a criança não selecionar o objeto antes de pintar; sem seleção, nada acontece. Mostre a borda verde do objeto selecionado. Outro erro é a cor não aparecer na tela: ligue "Toggle Display Colors" no menu "Mesh Display". Alguns vão clicar em "Apply Color" sem abrir o quadradinho de opções e não verão o seletor de cor; mostre o quadradinho ao lado do nome. Há quem selecione só uma parte (uma face) e pinte só um pedaço; peça para clicar fora e depois clicar uma vez no objeto inteiro. Por fim, lembre de salvar (menu File, depois Save) para a cor não se perder.`,
  exercicios: [
    {
      titulo: `Caça à cor: antes e depois`,
      tipo: `Observação e conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor dois cubos lado a lado: um cinza e um vermelho. Pergunte qual é mais bonito e o que mudou. Conduza a turma até a palavra "cor".`,
      atividade: `Olhe os dois cubos na tela. Aponte qual está cinza e qual está colorido. Diga em voz alta o que mudou de um para o outro.`,
      gabarito: `O cubo cinza não tem cor e o cubo vermelho foi pintado. O que mudou foi a cor: o segundo recebeu a tinta vertex color e ficou todo vermelho. As crianças devem perceber que pintar deixa o item mais bonito e fácil de reconhecer.`,
    },
    {
      titulo: `Onde a tinta gruda? Os pontinhos do objeto`,
      tipo: `Identificação guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `No seu Maya, com um cubo na tela, mostre os vértices (cantinhos) e as faces (quadradinhos). Explique que a tinta gruda nos pontinhos e se espalha pelas faces.`,
      atividade: `Olhe o cubo na tela do professor. Aponte um cantinho (vértice) e depois um quadradinho (face). Responda: a tinta vertex color gruda em qual parte?`,
      gabarito: `A tinta vertex color gruda nos vértices, que são os cantinhos do objeto, e a cor se espalha pelas faces, que são os quadradinhos. Por isso o item fica todo colorido. A criança acerta se apontar corretamente um cantinho e um quadradinho.`,
    },
    {
      titulo: `Mergulhando meu item no pote de tinta`,
      tipo: `Mão na massa individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada criança pelo caminho: selecionar o objeto (clique único, borda verde), "Mesh Display", "Apply Color" (quadradinho de opções), escolher a cor e aplicar. Ajude quem esquecer de selecionar.`,
      atividade: `Abra um item 3D seu. Clique nele uma vez para selecionar. Vá em "Mesh Display", depois "Apply Color". Escolha uma cor só e aplique. Veja seu item ficar colorido.`,
      gabarito: `O item fica todinho de uma cor só, escolhida pela criança. O caminho correto é: selecionar o objeto, abrir "Mesh Display", usar "Apply Color", escolher a cor no seletor e clicar em "Apply Color" e "Close". Se a cor não aparecer, ligar "Toggle Display Colors". Considera-se concluído quando o objeto inteiro está colorido.`,
    },
    {
      titulo: `Dois itens, duas cores diferentes`,
      tipo: `Desafio de aplicação`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada criança pinte dois itens diferentes, cada um de uma cor diferente. Reforce que cada item recebe UMA cor só. Circule conferindo se selecionaram o objeto inteiro.`,
      atividade: `Escolha dois itens 3D seus. Pinte o primeiro de uma cor e o segundo de outra cor. Cada item deve ficar de uma cor só, sem misturar.`,
      gabarito: `A criança termina com dois itens, cada um pintado de uma cor sólida diferente (por exemplo, uma maçã verde e uma estrela amarela). O acerto está em cada objeto ter uma única cor que cobre o item inteiro, e as duas cores serem diferentes entre si.`,
    },
    {
      titulo: `A cor preferida do mundo e o registro`,
      tipo: `Criação e compartilhamento`,
      tempo: `10 minutos`,
      guiaProfessor: `Lance o desafio: pintar um item com a cor preferida. Depois oriente o salvar (File, depois Save) e o registro na folha. Conduza a roda de compartilhamento no projetor, um de cada vez.`,
      atividade: `Pinte um item 3D com a sua cor preferida do mundo. Salve seu trabalho (File, depois Save). Na folha de registro, desenhe ou escreva qual cor você escolheu. Depois mostre para a turma e diga a cor.`,
      gabarito: `Cada criança apresenta um item pintado com a cor que escolheu, com o trabalho salvo e a folha de registro preenchida com a cor correspondente. Não há cor errada: o acerto está em o item ter sido pintado de uma cor sólida, salvo corretamente e apresentado com o nome da cor dito em voz alta.`,
    },
  ],
};
