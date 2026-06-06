import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Despedida do Blender: hora de exportar",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Entender o que é exportar um modelo 3D e por que o Roblox precisa de um formato especial para receber a nossa criação do Blender.`,
  descricao: `Nesta primeira aula do mês, as crianças vão dar o primeiro passo de uma grande viagem: tirar o modelo 3D que elas mesmas criaram no Blender e prepará-lo para morar dentro do Roblox. Até agora, o boneco (ou o objeto, ou o personagem) viveu só dentro do Blender. Mas o Roblox é uma casa diferente, com regras diferentes, e não consegue ler o arquivo do Blender do jeito que ele está. Por isso precisamos exportar.

Exportar é como traduzir o nosso modelo para uma língua que o Roblox entenda. O Blender fala "blend" (a língua dele), mas o Roblox só entende línguas universais como ".fbx" e ".obj". A boa notícia é que o próprio Blender sabe falar essas línguas: basta usarmos o menu File > Export e escolhermos o formato certo. Nesta aula, a turma não vai concluir a exportação ainda (isso acontece com calma na Aula 2) — o objetivo de hoje é apresentar a ideia, abrir o menu, conhecer os nomes e entender o "porquê".

A analogia que guia a aula é a da viagem: imagine que o nosso boneco vai viajar para outro país (o Roblox). Ele não pode ir do jeito que está espalhado pela casa. Precisamos arrumar a malinha dele, escolher uma mala que caiba no avião e colocar uma etiqueta com o nome certo. Exportar é exatamente isso: arrumar a malinha do modelo para a viagem. As crianças adoram essa imagem e ela ajuda muito a fixar o conceito.

Ao final, cada aluno terá localizado o seu próprio modelo aberto no Blender, terá encontrado o menu File > Export com o professor e saberá dizer, com as próprias palavras, por que precisamos de um formato especial. É uma aula leve, visual e de muita conversa, que prepara o terreno para o trabalho técnico das próximas semanas.`,
  materiais: [
    `Computadores com o Blender aberto e o modelo 3D pronto de cada aluno (criado nos meses anteriores)`,
    `Projetor ou TV grande para o professor demonstrar a tela passo a passo`,
    `Computador do professor com o Roblox Studio já aberto, para mostrar onde o modelo vai chegar`,
    `Uma malinha ou mochila de verdade para a analogia da viagem (opcional, mas ajuda muito)`,
    `Exemplos prontos de arquivos: um arquivo ".blend", um ".fbx" e um ".obj" visíveis na pasta`,
    `Folhas de desenho e lápis de cor para o desafio final`,
    `Etiquetas de papel ou post-its coloridos para o exercício da "etiqueta da mala"`,
  ],
  conceitosChave: [
    `Modelo 3D — o boneco ou objeto que a criança construiu no computador e que tem altura, largura e profundidade.`,
    `Exportar — pegar a nossa criação e salvá-la num formato que outro programa consiga abrir; é como arrumar a malinha para a viagem.`,
    `Formato de arquivo — a "língua" em que o arquivo é salvo; cada programa entende algumas línguas e não entende outras.`,
    `.fbx — uma língua universal de modelos 3D que o Roblox entende muito bem; carrega a forma e as cores.`,
    `.obj — outra língua universal de modelos 3D, mais simples, que também serve para levar a forma do boneco.`,
    `Menu File > Export — o lugar dentro do Blender, no canto de cima à esquerda, onde a gente manda o modelo viajar.`,
    `Roblox Studio — o programa onde vamos montar o nosso jogo e que vai receber o modelo depois da viagem.`,
  ],
  treinamento: `## O que o professor precisa saber

Calma: você não precisa ser especialista em Blender nem em Roblox para dar esta aula. Hoje ninguém vai concluir a exportação — isso é da Aula 2. O objetivo de hoje é só apresentar a ideia de exportar, abrir o menu certo e conversar sobre o "porquê". Pense em você como um guia de viagem, não como um técnico.

Três fatos bastam para se sentir seguro. Primeiro: o Blender salva o trabalho num arquivo ".blend", que só o Blender abre. Segundo: o Roblox Studio não lê ".blend"; ele precisa de um formato universal, sendo ".fbx" o mais recomendado (carrega forma e cores) e ".obj" uma opção mais simples. Terceiro: dentro do Blender, o caminho para fazer essa tradução é o menu File (canto superior esquerdo) > Export, onde aparecem as opções "FBX (.fbx)" e "Wavefront (.obj)". Hoje só vamos abrir esse menu e olhar — sem clicar para finalizar.

Antes da aula, abra o Blender com um modelo de exemplo, abra o Roblox Studio numa janela ao lado e deixe uma pasta com três arquivos de exemplo (.blend, .fbx, .obj) visível. Tenha uma malinha de verdade por perto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma e relembre o que cada um criou no Blender nos meses anteriores. Pergunte: "Onde mora o nosso boneco agora?" (resposta: no Blender). Mostre a malinha de verdade e anuncie: "Hoje vamos descobrir como mandar o nosso boneco viajar para o Roblox!" Mostre rapidamente o Roblox Studio no projetor, o destino da viagem.

Conteúdo novo guiado (15 min): No projetor, com o Blender, mostre o modelo de exemplo girando. Explique que o computador guardou esse boneco num arquivo ".blend". Abra a pasta e mostre os três arquivos de exemplo, dizendo que cada um fala uma língua. Volte ao Blender e clique no menu File, no canto superior esquerdo. Passe o mouse sobre "Export" para abrir o submenu e mostre, sem clicar para finalizar, as opções "FBX (.fbx)" e "Wavefront (.obj)". Diga: "Estas são as malas que o Roblox aceita. Hoje só estamos conhecendo a mala; na próxima aula a gente fecha ela." Feche o menu apertando Esc.

Mão na massa (25 min): Agora cada criança no seu computador. Peça que abram (ou confirmem aberto) o próprio modelo no Blender. Tarefa 1: girar o modelo e admirar a criação. Tarefa 2: encontrar e clicar no menu File. Tarefa 3: passar o mouse sobre "Export" e localizar "FBX (.fbx)". Importante: peça para apenas olhar e depois apertar Esc — ninguém finaliza a exportação hoje. Circule pela sala ajudando a achar o menu e elogiando cada modelo.

Desafio + compartilhar (10 min): Distribua etiquetas. Cada aluno desenha ou escreve uma "etiqueta de mala" para o próprio boneco com o nome dele e o destino "Roblox". Em roda, cada criança mostra a etiqueta e diz uma frase: "Meu boneco vai viajar para o Roblox dentro de uma mala chamada FBX."

## Como explicar para crianças

Use sempre a viagem. "O Blender é a casa do nosso boneco. O Roblox é a casa nova, em outro país. Para mudar de casa, o boneco precisa arrumar a malinha." Explique formato como língua: "O Roblox não entende a língua do Blender, então a gente traduz para FBX, uma língua que todo mundo entende." Reforce que exportar não apaga nada: "É como tirar uma foto e mandar para um amigo — a foto continua com você." Evite palavras técnicas demais; "mala", "língua", "viagem" e "tradução" funcionam melhor que "formato" e "extensão".

## Erros comuns e como ajudar

O erro mais comum é a criança clicar e finalizar a exportação por empolgação. Antecipe: combine o comando "olhar e apertar Esc". Outro erro é confundir File > Export com File > Save; mostre que "Save" guarda em casa e "Export" prepara a viagem. Algumas crianças não acham o menu File porque a janela está pequena — ajude a maximizar. Se alguém clicar fora e abrir outro menu, apertar Esc resolve. Por fim, se uma criança não encontrar o próprio modelo, tenha um arquivo de exemplo pronto para ela usar, para que ninguém fique de fora da experiência.`,
  exercicios: [
    {
      titulo: `A casa do boneco`,
      tipo: `Conversa em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça a pergunta para a turma toda e deixe várias crianças responderem. O objetivo é ativar a memória de onde o modelo vive hoje, antes de falar em viagem. Aceite respostas com as palavras delas.`,
      atividade: `Sentados em roda, respondam juntos: onde mora o nosso boneco 3D agora? Em qual programa a gente construiu ele?`,
      gabarito: `O boneco mora dentro do Blender, o programa onde a gente construiu o modelo 3D nos meses anteriores. O arquivo dele se chama ".blend".`,
    },
    {
      titulo: `Caça ao menu File`,
      tipo: `Prática guiada no computador`,
      tempo: `6 minutos`,
      guiaProfessor: `Com o Blender aberto em cada computador, peça que encontrem o menu File no canto superior esquerdo. Circule conferindo. Lembre o combinado: depois de achar, apertar Esc, sem finalizar nada.`,
      atividade: `No seu Blender, encontre o menu "File" no canto de cima à esquerda. Clique nele, passe o mouse em "Export" e ache a palavra "FBX". Depois aperte Esc.`,
      gabarito: `O menu "File" fica no canto superior esquerdo da tela. Ao clicar nele e passar o mouse sobre "Export", aparece o submenu com a opção "FBX (.fbx)". Apertar Esc fecha o menu sem exportar.`,
    },
    {
      titulo: `Qual mala o Roblox aceita?`,
      tipo: `Pergunta de múltipla escolha`,
      tempo: `4 minutos`,
      guiaProfessor: `Mostre as três opções no projetor ou leia em voz alta. Deixe as crianças votarem com a mão. Reforce que o Roblox precisa de uma língua universal, não da língua só do Blender.`,
      atividade: `Qual destes formatos o Roblox consegue entender para receber o nosso modelo? (a) .blend  (b) .fbx  (c) .figurinha`,
      gabarito: `A resposta certa é a (b) .fbx. O ".blend" é a língua só do Blender, que o Roblox não entende, e ".figurinha" nem existe. O ".fbx" é uma língua universal que o Roblox aceita.`,
    },
    {
      titulo: `A etiqueta da mala`,
      tipo: `Atividade criativa com desenho`,
      tempo: `7 minutos`,
      guiaProfessor: `Distribua etiquetas ou post-its. Peça que cada criança escreva o nome do próprio boneco e o destino. Ajude com a escrita quem precisar. No fim, cada um mostra a sua etiqueta para a turma.`,
      atividade: `Desenhe e escreva uma etiqueta de mala para o seu boneco: coloque o nome dele em cima e o destino "Roblox" embaixo. Depois mostre para a turma.`,
      gabarito: `Uma etiqueta válida tem o nome do boneco do aluno (por exemplo "Robozinho") e o destino "Roblox". Qualquer etiqueta com esses dois itens está correta; o importante é a criança associar o modelo a uma viagem com destino.`,
    },
    {
      titulo: `Explique para um adulto`,
      tipo: `Explicação oral com as próprias palavras`,
      tempo: `6 minutos`,
      guiaProfessor: `Este é o exercício mais difícil porque pede que a criança junte tudo numa explicação própria. Peça que cada aluno explique como se estivesse contando para a mãe ou o pai. Aceite analogias diferentes desde que a ideia esteja certa.`,
      atividade: `Imagine que você vai contar para um adulto em casa o que aprendeu hoje. Explique, com as suas palavras, o que é "exportar" um modelo e por que o Roblox precisa de uma língua especial.`,
      gabarito: `Uma boa explicação diz que exportar é arrumar a malinha do nosso modelo 3D para mandá-lo viajar do Blender para o Roblox, traduzindo o arquivo para uma língua universal como FBX, porque o Roblox não entende a língua original do Blender (o ".blend"). Exportar não apaga o trabalho original; só cria uma cópia pronta para a viagem.`,
    },
  ],
};
