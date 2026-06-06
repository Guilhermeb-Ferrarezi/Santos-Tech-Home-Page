import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Mil versões da mesma ideia",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Gerar várias versões de um mesmo personagem ou objeto no Gemini com o Nano Banana, mantendo a consistência e escolhendo as variações que combinam com o estilo do jogo.`,
  descricao: `Nesta aula, os alunos descobrem um superpoder da imagem com IA: criar muitas versões do mesmo elemento sem precisar desenhar tudo de novo. Em vez de gerar uma figura solta, eles aprendem a pegar um personagem ou objeto já criado e pedir poses diferentes, ângulos diferentes e expressões diferentes, sempre com a mesma cara, as mesmas cores e o mesmo estilo. Isso é o que faz um jogo parecer profissional: o herói é sempre o mesmo herói, esteja ele parado, correndo ou pulando.

O conceito central é a consistência. Quando geramos imagens por IA, o modelo tende a inventar um personagem novo a cada pedido. O segredo é dar à IA uma imagem de referência e descrever só o que deve mudar. No Gemini com o Nano Banana, isso é feito anexando a imagem base e escrevendo um prompt que diz, por exemplo, "mantenha o mesmo personagem, as mesmas cores e o mesmo estilo, mas mostre ele de costas". Assim a IA varia a pose, não a identidade.

O segundo conceito é a variação intencional. Não basta gerar dez imagens quaisquer; o aluno aprende a variar uma coisa de cada vez: primeiro a pose, depois o ângulo (frente, lado, costas), depois a expressão (feliz, bravo, surpreso). Mudar um elemento por vez deixa claro o que cada palavra do prompt provoca na imagem. Ao final, o aluno tem uma folha de variações do mesmo elemento, como as que estúdios de verdade montam para apresentar um personagem.

O fechamento da aula é a curadoria: escolher. Ter mil versões não adianta se todas forem usadas. O aluno olha o conjunto, compara com o estilo do projeto e seleciona as versões que combinam, descartando as que fugiram da identidade. Essa escolha treina o olhar de designer e prepara o pacote de imagens que será o entregável do mês.`,
  materiais: [
    `Computadores com acesso ao Gemini (com o Nano Banana ativo para geração e edição de imagem), um por aluno`,
    `Conta Google já logada no Gemini antes da aula, com o recurso de imagem disponível`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo ao vivo`,
    `Pasta com imagens de exemplo: 2 ou 3 personagens e objetos de jogo já gerados nas aulas anteriores, para usar como referência`,
    `Folha impressa com uma "ficha de variações" (espaços para pose, ângulo e expressão) para os alunos planejarem antes de gerar`,
    `Pasta no computador para cada aluno salvar e organizar as versões aprovadas`,
  ],
  conceitosChave: [
    `Consistência — manter o mesmo personagem, cores e estilo em todas as versões, mudando só o que se pede.`,
    `Imagem de referência — a figura base que anexamos no Gemini para a IA copiar a identidade do personagem.`,
    `Variação — uma nova versão do mesmo elemento, com diferença em pose, ângulo ou expressão.`,
    `Pose — o que o personagem está fazendo com o corpo (parado, correndo, pulando, acenando).`,
    `Ângulo — de que lado vemos o personagem (de frente, de lado, de costas, de cima).`,
    `Expressão — o sentimento mostrado no rosto (feliz, bravo, assustado, surpreso).`,
    `Curadoria — o ato de comparar as versões e escolher quais combinam com o estilo do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista nem dominar o Gemini. A aula gira em torno de uma ideia simples: anexar uma imagem e pedir mudanças pequenas. No Gemini, o campo de escrever fica embaixo da tela; ao lado dele há o ícone de "+" ou de clipe (anexar), que serve para subir a imagem de referência do computador. Você digita o pedido (o prompt), aperta "Enviar" (a setinha) e a IA devolve a nova versão. Para gerar outra variação, basta mudar uma palavra do prompt e enviar de novo. O Nano Banana é o motor de imagem que faz isso dentro do Gemini: ele consegue olhar a foto anexada e manter o personagem parecido. Teste uma vez antes da aula para já conhecer onde ficam o botão de anexar e o botão de enviar.

## Passo a passo da aula

Aquecimento (10 min): Retome a aula anterior perguntando o que cada um criou. Mostre no projetor uma figura de um personagem e pergunte: "como seria ele de costas? E bravo?". Explique que hoje vamos criar muitas versões do mesmo personagem, sem perder a identidade dele.

Conteúdo novo guiado (15 min): No projetor, abra o Gemini. Clique no ícone de anexar ("+" ou clipe) e suba uma imagem de personagem de exemplo. Escreva o prompt: "mantenha exatamente este personagem, mesmas cores e mesmo estilo, mas mostre ele correndo, visto de lado". Aperte enviar e mostre o resultado. Sem trocar a imagem, mude só uma palavra: troque "correndo" por "pulando" e envie de novo. Depois mude o ângulo ("de costas") e a expressão ("com cara de surpresa"). Mostre que mudar uma coisa por vez deixa claro o efeito de cada palavra.

Mão na massa (25 min): Cada aluno anexa um personagem ou objeto próprio (das aulas anteriores) e gera pelo menos seis variações: duas de pose, duas de ângulo e duas de expressão. Peça que usem a frase fixa "mantenha o mesmo personagem, mesmas cores e mesmo estilo" no começo de todo prompt. Oriente a salvar cada versão boa na pasta. Circule pela sala conferindo a consistência.

Desafio + compartilhar (10 min): Cada aluno escolhe as três melhores versões e descarta as que fugiram do estilo. Em seguida, mostra ao colega do lado e explica por que escolheu aquelas. Dois voluntários apresentam no projetor.

## Como explicar de forma clara

Use a ideia de "boneco de ação": é sempre o mesmo boneco, só muda a pose na caixa. Diga que a imagem de referência é a "foto do RG" do personagem, que a IA precisa olhar para não inventar outro. Para a variação intencional, use a frase "mude uma coisa de cada vez", como num jogo em que você troca uma peça por vez para ver o que muda. Fale os nomes dos botões enquanto aponta na tela e repita a frase mágica do prompt ("mantenha o mesmo personagem, mesmas cores e mesmo estilo") várias vezes até virar hábito.

## Erros comuns e como ajudar

O erro mais comum é esquecer de anexar a imagem de referência: sem ela, a IA cria um personagem novo. Lembre-os de checar se a miniatura da imagem aparece antes de enviar. Outro erro é mudar muitas coisas no mesmo prompt (pose, ângulo e roupa juntos), e aí a identidade se perde; oriente a mudar um item por vez. Há quem escreva prompts vagos como "faça diferente"; mostre que é preciso dizer o que muda ("de costas", "bravo"). Alguns aceitam a primeira versão mesmo torta; incentive a gerar de novo até ficar consistente. Por fim, muitos guardam tudo sem escolher; reforce que a curadoria, escolher as melhores, é parte do trabalho.`,
  exercicios: [
    {
      titulo: `Trocando a pose`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Confira que cada aluno anexou a imagem de referência antes de enviar. Mostre onde aparece a miniatura da imagem no campo de prompt.`,
      atividade: `Anexe um personagem seu no Gemini e gere duas versões mudando só a pose (por exemplo, correndo e pulando), começando o prompt com "mantenha o mesmo personagem, mesmas cores e mesmo estilo".`,
      gabarito: `O aluno tem duas imagens do mesmo personagem em poses diferentes. As cores, a roupa e o estilo continuam iguais; só o que o corpo faz mudou.`,
    },
    {
      titulo: `Girando o personagem`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Reforce a ideia de ângulo: frente, lado e costas. Ajude quem mudar mais de uma coisa por vez a refazer o prompt mudando só o ângulo.`,
      atividade: `Com a mesma referência, gere o personagem visto de frente, de lado e de costas, mudando apenas a palavra do ângulo em cada prompt.`,
      gabarito: `Existem três versões do mesmo personagem em ângulos diferentes (frente, lado e costas), mantendo identidade, cores e estilo iguais.`,
    },
    {
      titulo: `Caça à expressão certa`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Incentive expressões variadas e claras. Se a IA não acertar, oriente a trocar a palavra da emoção e gerar de novo até ficar nítida.`,
      atividade: `Gere o mesmo personagem com três expressões diferentes no rosto (por exemplo, feliz, bravo e surpreso), mudando só a palavra da emoção.`,
      gabarito: `Há três versões do personagem com expressões distintas e reconhecíveis. O rosto muda de emoção, mas continua sendo claramente o mesmo personagem.`,
    },
    {
      titulo: `Folha de variações em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que um avalie a consistência do conjunto do outro, apontando uma versão que fugiu do estilo, sem julgar a pessoa.`,
      atividade: `Troque com o colega e olhem juntos o conjunto de versões de cada um. Apontem qual versão de cada conjunto saiu do estilo e expliquem por quê.`,
      gabarito: `A dupla identificou, em cada conjunto, pelo menos uma versão fora do estilo e justificou (cor diferente, traço diferente ou personagem trocado).`,
    },
    {
      titulo: `Curadoria do meu elemento`,
      tipo: `projeto curto`,
      tempo: `4 minutos`,
      guiaProfessor: `Conduza a escolha final. Peça que o aluno compare suas versões com o estilo do projeto antes de selecionar e salvar na pasta.`,
      atividade: `Escolha as três melhores versões do seu personagem ou objeto, salve-as numa pasta organizada e escreva em uma frase por que elas combinam com o seu jogo.`,
      gabarito: `O aluno tem uma pasta com três versões consistentes selecionadas e uma frase clara justificando a escolha (combinam em cor, estilo e identidade com o projeto).`,
    },
  ],
};
