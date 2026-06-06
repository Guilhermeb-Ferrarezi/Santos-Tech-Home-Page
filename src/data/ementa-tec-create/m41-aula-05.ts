import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "O Mundo dos Materiais",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender o que é um material no Blender (cor base, metálico e rugosidade) e fazer o primeiro desempacotamento UV (UV unwrap) do próprio asset, deixando a malha pronta para receber cor e textura.`,
  descricao: `Nesta aula o aluno descobre como um modelo 3D deixa de ser cinza e ganha vida. Até aqui ele esculpiu a forma do seu asset; agora chega a parte de "pintar" essa forma. Para isso existem duas ideias que andam juntas: o material e o desempacotamento UV. O material é a receita de aparência da superfície, e o desempacotamento UV é o mapa que diz onde cada pedaço da imagem vai grudar no modelo. Sem esse mapa, qualquer textura aplicada fica esticada e bagunçada.

Um material no Blender é controlado por um nó chamado Principled BSDF, que aparece no editor de Shader. Dentro dele moram três botões que o aluno vai dominar hoje: a cor base (Base Color), que é a cor "crua" do objeto; o metálico (Metallic), que decide se a superfície parece metal ou não; e a rugosidade (Roughness), que controla se o brilho é espelhado e liso ou opaco e fosco. Mexendo só nesses três controles já dá para fazer plástico, madeira, ouro, borracha ou pedra. Comparar uma colher de metal brilhante com uma borracha fosca ajuda o aluno a sentir na prática o que cada controle faz.

O desempacotamento UV é a outra metade da aula e costuma ser a parte mais mágica. A ideia é simples: imagine descascar uma laranja e abrir a casca toda esticada sobre a mesa. O UV unwrap faz isso com a malha 3D, transformando a superfície num desenho plano em 2D. Para o computador saber por onde "cortar a casca", o aluno marca costuras (seams) nas arestas, e depois aplica o comando Unwrap. O resultado aparece no UV Editor como ilhas planas que mais tarde vão receber a textura.

Ao final da aula, cada aluno terá criado o primeiro material do seu asset, ajustado cor base, metálico e rugosidade, e feito o primeiro desempacotamento UV com costuras marcadas por ele mesmo. Esse trabalho é a ponte direta para a próxima aula, em que as texturas vão ganhar vida de verdade, e também é o que torna o asset pronto para brilhar dentro do Unity no fim do mês.`,
  materiais: [
    `Computadores com o Blender instalado e já aberto, um por aluno, com o asset que cada um vem modelando nas aulas anteriores carregado`,
    `Projetor ou TV grande para o professor demonstrar o editor de Shader e o UV Editor em tela cheia, passo a passo`,
    `Arquivo .blend de exemplo com um objeto simples já com material e UV unwrap prontos (por exemplo um dado ou uma caixa), para servir de referência`,
    `Objetos físicos de comparação na bancada: uma colher de metal, uma borracha de apagar fosca e um pedaço de plástico brilhante, para sentir cor, metálico e rugosidade`,
    `Folha impressa com os atalhos da aula colada na bancada: U (Unwrap), botão direito mais Mark Seam (marcar costura), e os nomes Base Color, Metallic e Roughness`,
    `Uma laranja de verdade ou uma imagem de laranja descascada, para explicar de forma visual o que é o desempacotamento UV`,
  ],
  conceitosChave: [
    `Material — a receita de aparência da superfície do objeto; define cor, brilho e se parece metal, plástico, madeira ou outro tipo de superfície.`,
    `Principled BSDF — o nó principal do material no Blender; reúne num só lugar os controles de cor base, metálico, rugosidade e muitos outros.`,
    `Cor Base (Base Color) — a cor "crua" da superfície, antes de qualquer luz ou brilho; é a primeira coisa que o aluno escolhe para o material.`,
    `Metálico (Metallic) — controle que vai de 0 a 1 e decide se a superfície parece metal (valor 1) ou um material comum como plástico e madeira (valor 0).`,
    `Rugosidade (Roughness) — controle de 0 a 1 que define o brilho: perto de 0 fica liso e espelhado, perto de 1 fica fosco e opaco.`,
    `Desempacotamento UV (UV unwrap) — abrir a superfície 3D do modelo numa imagem plana 2D, como descascar uma laranja e esticar a casca sobre a mesa.`,
    `Costura (Seam) — a linha que o aluno marca nas arestas para dizer ao Blender por onde "cortar a casca" antes de abrir o modelo em 2D.`,
  ],
  treinamento: `## O que o professor precisa saber

Um material no Blender é uma receita de aparência, e o nó que guarda essa receita é o Principled BSDF. Você acessa os controles na aba de Material (o ícone de bolinha xadrez na coluna de Propriedades, à direita) ou de forma visual no editor de Shader. Para abrir o editor de Shader, troque um dos cantos da tela para Shader Editor ou clique na aba Shading no topo da janela. Os três controles desta aula ficam logo no topo do nó: Base Color (cor base), Metallic (metálico) e Roughness (rugosidade). Metallic e Roughness vão de 0 a 1: Metallic em 1 vira metal; Roughness perto de 0 fica espelhado e perto de 1 fica fosco.

O desempacotamento UV vive em outra parte. Entre no Modo de Edição com a tecla Tab, vá para o modo de aresta (tecla 2) e selecione as arestas onde o modelo deve ser "cortado". Com elas selecionadas, clique com o botão direito e escolha Mark Seam (marcar costura) — as arestas ficam vermelhas. Depois selecione tudo com a tecla A, aperte U e escolha Unwrap. Abra o UV Editor num canto da tela (ou use a aba UV Editing no topo) para ver as ilhas planas resultantes. Pense nas costuras como o lugar por onde você descasca uma laranja: bem escolhidas, a casca abre lisinha; mal escolhidas, fica tudo esticado.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Blender)

Aquecimento (10 min): retome a aula anterior mostrando um asset cinza no projetor e pergunte "como a gente coloca cor nisso?". Passe a colher de metal, a borracha fosca e o plástico brilhante de mão em mão e pergunte qual é brilhante, qual é fosco, qual parece metal. Anote no quadro as três palavras: cor, metálico, rugosidade.

Conteúdo novo guiado (15 min): no projetor, abra a aba Material e crie um material novo no botão New. Mostre Base Color e mude a cor. Arraste Metallic para 1 e mostre o objeto virar metal; arraste Roughness de 1 para 0 e mostre o brilho aparecer. Depois entre no Modo de Edição (Tab), modo aresta (tecla 2), selecione algumas arestas, botão direito mais Mark Seam, aperte A para selecionar tudo, U e Unwrap. Abra o UV Editor e mostre as ilhas planas.

Mão na massa (25 min): cada aluno cria o primeiro material do seu asset e ajusta cor base, metálico e rugosidade até ficar com a cara do material que imaginou. Em seguida marca pelo menos uma costura, aperta U e faz o Unwrap, conferindo as ilhas no UV Editor. Circule pela sala sentando ao lado de quem travar; lembre o Ctrl+Z como amigo.

Desafio e compartilhar (10 min): proponha que cada um crie um material que pareça ouro (Metallic em 1 e Roughness baixo, cor amarela). Encerre com uma rodada: dois ou três alunos giram o asset no projetor e mostram o material e o mapa UV.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. O material é como a "roupa" do objeto: a mesma forma pode usar roupa de metal, de plástico ou de madeira. Metálico é o botão "isto é feito de metal?": ligado (1) vira metal, desligado (0) vira material comum. Rugosidade é o botão "espelho ou parede fosca?": perto de 0 reflete como espelho, perto de 1 fica fosco como uma parede. Para o UV unwrap, descasque uma laranja na frente da turma: as costuras são o lugar por onde você corta a casca, e o Unwrap estica essa casca sobre a mesa. Diga o nome em inglês e a tradução juntos, como uma musiquinha: "Base Color é cor base, Metallic é metálico, Roughness é rugosidade".

## Erros comuns e como ajudar

O erro mais comum é mexer no material sem ter criado um primeiro: lembre o aluno de clicar em New na aba de Material. Outro tropeço é tentar marcar costura no Modo Objeto; se o Mark Seam não aparecer, peça para apertar Tab e ir ao modo aresta (tecla 2). Muitos confundem Metallic com Roughness: reforce que metálico decide o tipo de material e rugosidade decide o brilho. No Unwrap, é comum esquecer de selecionar tudo com A antes de apertar U, e só parte do modelo abre; oriente sempre o A primeiro. Se as ilhas no UV Editor saem muito esticadas, geralmente faltou marcar costuras; mostre que adicionar mais uma ou duas costuras e refazer o Unwrap resolve. Tranquilize a turma: experimentar, desfazer com Ctrl+Z e tentar de novo faz parte de aprender.`,
  exercicios: [
    {
      titulo: `Meu primeiro material colorido`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor a aba de Material (o ícone de bolinha xadrez) e o botão New. Garanta que cada aluno consiga criar um material e mudar a Base Color do próprio asset.`,
      atividade: `Selecione seu asset, abra a aba de Material na coluna de Propriedades e clique em New para criar um material. Clique na Base Color (cor base) e escolha uma cor que combine com o seu objeto. Veja a cor aparecer no modelo.`,
      gabarito: `O aluno cria um material novo com o botão New e altera a Base Color. O asset, antes cinza, passa a exibir a cor escolhida. O aluno entende que a cor base é o primeiro passo de qualquer material.`,
    },
    {
      titulo: `Metal ou fosco?`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre os dois controles que vão de 0 a 1. Peça que comparem com a colher de metal e a borracha fosca da bancada. Confira que cada aluno move Metallic e Roughness e observa a diferença.`,
      atividade: `No material que você criou, arraste o controle Metallic (metálico) de 0 para 1 e veja o objeto virar metal. Depois arraste o Roughness (rugosidade) de 1 para 0 e observe o brilho ficar espelhado. Tente deixar parecido com a colher de metal da bancada.`,
      gabarito: `O aluno ajusta Metallic para perto de 1, deixando a superfície com aparência de metal, e reduz o Roughness, deixando o brilho mais espelhado. Ele explica que metálico decide o tipo de material e rugosidade decide o brilho.`,
    },
    {
      titulo: `Descascando a laranja`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Ajude com a sequência do unwrap. Reforce: Tab para o Modo de Edição, tecla 2 para o modo aresta, botão direito mais Mark Seam, tecla A para selecionar tudo, U e Unwrap. Tenha a laranja em mãos para a comparação.`,
      atividade: `Entre no Modo de Edição com Tab e mude para o modo aresta (tecla 2). Selecione algumas arestas onde faz sentido "cortar a casca" do seu objeto e use o botão direito mais Mark Seam para marcá-las. Aperte A para selecionar tudo, depois U e escolha Unwrap. Abra o UV Editor e veja as ilhas planas.`,
      gabarito: `O aluno marca pelo menos uma costura (Mark Seam), seleciona tudo com A e aplica o Unwrap (tecla U). No UV Editor aparecem ilhas planas correspondentes à superfície do modelo. O aluno relaciona as costuras ao lugar por onde se descasca a laranja.`,
    },
    {
      titulo: `Material em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno descreve em voz alta um material do mundo real (ouro, plástico vermelho, borracha preta) e o outro tenta recriá-lo no asset usando cor base, metálico e rugosidade. Depois trocam de papel.`,
      atividade: `Em dupla, um colega escolhe um material do mundo real e descreve em voz alta ("ouro brilhante", "plástico vermelho fosco", "borracha preta"). O outro tenta recriar esse material no próprio asset ajustando Base Color, Metallic e Roughness. Depois troquem de papel.`,
      gabarito: `Cada aluno recria o material pedido usando os três controles: cor base adequada, Metallic alto para metais e baixo para os demais, e Roughness coerente com o brilho descrito. A dupla demonstra entender a função de cada controle ao pedir e ao executar.`,
    },
    {
      titulo: `Asset pronto para texturizar`,
      tipo: `projeto curto`,
      tempo: `9 minutos`,
      guiaProfessor: `Peça que cada aluno deixe o asset com um material coerente e um UV unwrap sem ilhas muito esticadas. Ao final, conduza uma roda curta com dois ou três assets girando no projetor, mostrando material e mapa UV.`,
      atividade: `Junte o que aprendeu: deixe seu asset com um material que combine com a ideia dele (cor base, metálico e rugosidade ajustados) e com um UV unwrap feito por você, conferindo no UV Editor que as ilhas não estão muito esticadas. Se estiverem, adicione uma costura e refaça o Unwrap.`,
      gabarito: `O asset do aluno tem um material coerente com a ideia (cor, metálico e rugosidade ajustados) e um desempacotamento UV com ilhas razoavelmente planas e sem grandes distorções. O aluno consegue apontar onde marcou as costuras e por que escolheu cada valor de material.`,
    },
  ],
};
