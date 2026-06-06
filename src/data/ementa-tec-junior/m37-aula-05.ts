import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Da ideia ao mini-projeto",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Transformar uma ideia em um mini-projeto de verdade com a IA, escolhendo um tema, planejando as categorias e começando a montar a lista de exemplos que cada aluno vai precisar coletar para treinar o seu modelo.`,
  descricao: `Nas aulas passadas, a turma descobriu o que é uma IA que aprende, treinou o primeiro modelo, entendeu como a IA pensa e decide e até virou caçadora de erros. Agora chegou a hora mais empolgante: usar tudo isso dentro de um mini-projeto útil, com começo, meio e fim. Hoje cada criança deixa de só brincar com exemplos prontos e passa a ser a dona de uma ideia própria, como um classificador de humor (que adivinha se uma carinha está feliz ou triste) ou um identificador de figuras (que adivinha se o desenho é um gato, um cachorro ou um peixe).

Um mini-projeto é como uma pequena missão. Antes de sair clicando, todo bom criador para e planeja. É exatamente isso que vamos fazer: primeiro a criança escolhe um tema que ela ache divertido e que faça sentido para a vida dela. Depois, decide quais serão as categorias do projeto, ou seja, as "caixinhas" em que a IA vai separar as coisas. Por último, ela pensa nos exemplos que precisa juntar para encher cada caixinha. Sem exemplos, a IA não aprende nada, do mesmo jeito que a gente não aprende a reconhecer um animal sem nunca ter visto vários deles.

Nesta aula, o foco é planejar e começar a coletar, e não terminar o projeto inteiro. A criança vai desenhar o plano do seu mini-projeto numa folha (tema, categorias e ideias de exemplos) e já começar a montar o conjunto de treino dentro da plataforma de IA. Esse planejamento é a ponte para as próximas aulas, em que o modelo vai ganhar vida, ser testado e, no fim do mês, apresentado para a turma. Quem planeja bem agora, treina melhor depois.

Para o professor, o segredo desta aula é ajudar cada criança a escolher um tema do tamanho certo: nem grande demais (difícil de coletar exemplos), nem pequeno demais (sem graça). Duas ou três categorias bem definidas já fazem um projeto ótimo. O papel do professor é guiar a escolha, mostrar exemplos prontos para inspirar e garantir que cada aluno saia da aula com um plano claro e com os primeiros exemplos já coletados.`,
  materiais: [
    `Computadores com a plataforma de IA (ML for Kids) aberta na tela de criação de projeto, um para cada criança`,
    `Projetor ligado no computador do professor para demonstrar cada passo na tela grande`,
    `Conexão de internet estável, porque a plataforma de IA funciona pelo navegador`,
    `Dois ou três projetos prontos de exemplo já feitos pelo professor (um classificador de humor e um identificador de figuras) para inspirar a turma`,
    `Folha de planejamento impressa para cada aluno, com espaços para o tema, as categorias e a lista de exemplos`,
    `Lápis, borracha e lápis de cor para a criança desenhar e preencher o plano do projeto`,
    `Webcam ou imagens simples já salvas (carinhas, desenhos de animais) para a criança começar a coletar exemplos`,
  ],
  conceitosChave: [
    `Mini-projeto — uma pequena missão com começo, meio e fim, em que a gente usa a IA para resolver uma coisa útil ou divertida.`,
    `Tema — o assunto que o seu projeto vai tratar, como adivinhar o humor de uma carinha ou reconhecer figuras de animais.`,
    `Categoria — uma "caixinha" onde a IA separa as coisas; por exemplo, "feliz" e "triste" são duas categorias.`,
    `Exemplo — uma amostra que a gente mostra para a IA aprender, como uma foto de carinha feliz ou o desenho de um gato.`,
    `Conjunto de treino — o monte de exemplos juntos que a gente usa para ensinar a IA; quanto mais variado, melhor ela aprende.`,
    `Planejar — pensar e organizar antes de começar, decidindo o tema, as categorias e os exemplos que vamos precisar.`,
    `Classificador — um tipo de IA que olha uma coisa e diz em qual categoria ela se encaixa, como um separador esperto.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar inteligência artificial para conduzir esta aula. A plataforma ML for Kids (machinelearningforkids.co.uk) é feita para crianças e funciona em três passos simples: "Train" (ensinar, onde a gente coloca os exemplos em categorias), "Learn & Test" (a IA aprende e a gente testa) e "Make" (usar o modelo num projeto). Hoje o foco é planejar o projeto e começar o "Train", então você vai mexer principalmente na primeira etapa.

Para entrar, abra o site e clique em "Get started". Use o login da turma (ou o modo de demonstração, "Try it now", se a escola usar). No painel "Projects", clique em "Add a new project". Dê um nome ao projeto, escolha o tipo de reconhecimento (por exemplo "images" para reconhecer figuras ou "text" para reconhecer palavras) e clique em "Create". Depois é só abrir o projeto e clicar em "Train" para adicionar as categorias (botão "Add new label") e os exemplos. Antes da aula, crie você mesmo um projeto de exemplo inteiro, como um classificador de humor com as categorias "feliz" e "triste", para conhecer cada botão e ter o que mostrar.

## Passo a passo da aula

Aquecimento e revisão (10 min): Reúna a turma no projetor. Mostre os seus dois projetos prontos funcionando (o classificador de humor e o identificador de figuras). Faça a IA adivinhar uma carinha e um desenho ao vivo. Pergunte: "O que será que vocês podem criar com uma IA assim?" Relembre, com as próprias palavras das crianças, que a IA aprende olhando muitos exemplos.

Conteúdo novo guiado (15 min): No projetor, explique os três passos de um mini-projeto: escolher o tema, decidir as categorias e listar os exemplos. Mostre, na plataforma, como criar um projeto novo em "Add a new project", como abrir "Train" e como adicionar uma categoria com "Add new label". Crie uma categoria na frente deles, como "feliz", e mostre onde os exemplos vão entrar. Vá falando cada clique em voz alta.

Mão na massa (25 min): Entregue a folha de planejamento. Cada criança escolhe o tema, escreve duas ou três categorias e desenha ou anota ideias de exemplos. Depois, no computador, cria o próprio projeto em "Add a new project" e adiciona as categorias em "Train" com "Add new label". Se sobrar tempo, começa a coletar os primeiros exemplos (tirando fotos pela webcam ou arrastando imagens). Circule pela sala ajudando a manter os temas simples e as categorias claras.

Desafio e compartilhar (10 min): Peça que duas ou três crianças mostrem no projetor o plano e as categorias que criaram. Lance o desafio: "Quantos exemplos você acha que vai precisar coletar até a próxima aula para a IA aprender bem?" Combine uma meta simples (por exemplo, dez exemplos por categoria) e comemore cada plano pronto.

## Como explicar para crianças

Use a analogia das caixinhas: "Imagine que você é o chefe de uma fábrica de separar coisas. As categorias são as caixinhas, e os exemplos são as coisas que você mostra para o robô aprender a separar." Para o tema, diga: "Escolha algo que você ache divertido, mas do tamanho certo, nem gigante nem minúsculo." Para os exemplos, reforce: "A IA é como um bebê: ela só aprende a reconhecer um gato se você mostrar muitos gatos diferentes para ela." E sempre lembre: "Hoje a gente é arquiteto: primeiro a gente desenha a planta da casa, depois é que constrói."

## Erros comuns e como ajudar

O erro mais comum é escolher um tema grande demais, como "reconhecer todos os animais do mundo". Ajude a criança a reduzir para duas ou três categorias bem simples. Outro erro é confundir categoria com exemplo: a categoria é a caixinha ("gato"), e o exemplo é uma figura de gato; mostre a diferença apontando os dois na tela. Algumas crianças querem coletar exemplos antes de criar as categorias e ficam perdidas; reforce a ordem (primeiro a caixinha, depois o que vai dentro). Outras criam categorias muito parecidas, como "feliz" e "alegre", o que confunde a IA; oriente a escolher categorias bem diferentes. E quando a criança ficar travada na ideia, mostre de novo os seus projetos prontos para inspirar, sem dar o tema mastigado.`,
  exercicios: [
    {
      titulo: `Caça às categorias`,
      tipo: `Reconhecimento na tela`,
      tempo: `5 minutos`,
      guiaProfessor: `Projete um dos seus projetos prontos na etapa "Train", com as categorias visíveis. Peça que as crianças apontem na tela quais são as caixinhas (categorias) e o que está dentro delas (exemplos). Chame uma de cada vez para mostrar.`,
      atividade: `Olhe o projeto na tela grande e descubra: quais são as categorias (as caixinhas) e o que são os exemplos (as coisas dentro das caixinhas)? Aponte uma categoria e um exemplo e diga em voz alta a diferença entre eles.`,
      gabarito: `As categorias são as "caixinhas" onde a IA separa as coisas, como "feliz" e "triste", e ficam como rótulos na etapa "Train". Os exemplos são as amostras que a gente coloca dentro de cada caixinha, como uma foto de carinha feliz. A criança acerta quando aponta corretamente uma categoria e um exemplo e explica que a categoria é a caixinha e o exemplo é o que vai dentro dela.`,
    },
    {
      titulo: `Escolhendo o meu tema`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça uma roda rápida para cada criança dizer uma ideia de tema. Ajude a deixar os temas do tamanho certo: nem grandes demais nem pequenos demais. Anote no quadro as ideias e ajude a turma a transformar temas enormes em temas simples com duas ou três categorias.`,
      atividade: `Pense em um tema divertido para o seu mini-projeto de IA, como adivinhar o humor de uma carinha ou reconhecer figuras de animais. Diga o seu tema para a turma e quais seriam as duas ou três categorias dele.`,
      gabarito: `Um bom tema é simples e tem duas ou três categorias bem diferentes; por exemplo, o tema "humor da carinha" com as categorias "feliz" e "triste", ou o tema "animais" com as categorias "gato", "cachorro" e "peixe". A criança acerta quando escolhe um tema do tamanho certo e consegue dizer categorias claras e diferentes umas das outras. Temas gigantes ("todos os animais") devem ser reduzidos com a ajuda do professor.`,
    },
    {
      titulo: `Desenhando o plano do projeto`,
      tipo: `Atividade no papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a folha de planejamento. Oriente a criança a preencher três partes: o tema, as categorias e uma lista (ou desenho) de exemplos que ela vai precisar coletar. Circule conferindo se as categorias são diferentes e se os exemplos combinam com cada uma.`,
      atividade: `Na sua folha, escreva o tema do seu projeto no topo. Depois desenhe duas ou três caixinhas, uma para cada categoria, e dê um nome a cada uma. Por fim, dentro de cada caixinha, anote ou desenhe três ideias de exemplos que você vai precisar coletar.`,
      gabarito: `A folha fica preenchida com um tema claro no topo, duas ou três categorias nomeadas e diferentes entre si, e pelo menos três ideias de exemplos para cada categoria que realmente combinam com ela. Por exemplo: tema "humor", categorias "feliz" e "triste", e na categoria "feliz" as ideias "carinha sorrindo", "carinha gargalhando" e "carinha contente". A criança acerta quando o plano está completo e os exemplos batem com cada categoria.`,
    },
    {
      titulo: `Criando o meu projeto na plataforma`,
      tipo: `Prática no computador`,
      tempo: `15 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor o caminho completo: "Projects" maior que "Add a new project" maior que dar um nome e escolher o tipo maior que "Create" maior que abrir o projeto e clicar em "Train" maior que "Add new label" para criar cada categoria. Depois acompanhe cada criança, conferindo que ela usa as categorias do próprio plano de papel.`,
      atividade: `No seu computador, clique em "Add a new project", dê o nome do seu projeto, escolha o tipo (por exemplo "images" para reconhecer figuras) e clique em "Create". Abra o projeto, clique em "Train" e use o botão "Add new label" para criar cada categoria do seu plano.`,
      gabarito: `O projeto aparece criado na lista "Projects" com o nome escolhido, e dentro da etapa "Train" estão as duas ou três categorias do plano de papel, criadas com o botão "Add new label". A criança acerta quando segue o caminho "Add a new project" maior que "Create" maior que "Train" maior que "Add new label" e quando as categorias na plataforma são as mesmas que ela planejou na folha. As caixinhas ainda podem estar vazias de exemplos, e isso está certo nesta aula.`,
    },
    {
      titulo: `Começando a coletar e planejando a meta`,
      tipo: `Projeto e desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Ajude cada criança a começar a coletar os primeiros exemplos, clicando na categoria e usando a webcam ("Webcam") ou arrastando imagens. Depois lance o desafio da meta: combine quantos exemplos por categoria a turma vai coletar até a próxima aula. Reforce que quanto mais exemplos variados, melhor a IA aprende.`,
      atividade: `Clique em uma das suas categorias e coloque os seus primeiros exemplos (tirando fotos pela webcam ou arrastando imagens). Depois pense e diga: até a próxima aula, quantos exemplos por categoria você vai coletar para a sua IA aprender bem? Combine essa meta com o professor.`,
      gabarito: `A criança coloca pelo menos um ou dois exemplos dentro de uma categoria na etapa "Train" e define uma meta de coleta razoável para a próxima aula, como dez exemplos por categoria. A criança acerta quando consegue adicionar exemplos na caixinha certa e quando entende que precisa de vários exemplos variados para a IA aprender bem, e não apenas um ou dois. O sinal de sucesso é o plano pronto, as categorias criadas na plataforma e os primeiros exemplos já coletados.`,
    },
  ],
};
