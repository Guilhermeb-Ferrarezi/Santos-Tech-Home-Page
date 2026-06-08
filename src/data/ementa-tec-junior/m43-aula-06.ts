import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Acabamento caprichado",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Treinar a criança a refinar a própria peça no Maya, suavizando cantos, alinhando partes e removendo pedaços soltos ou tortos, até o acabamento ficar limpo e bonito para a impressão.`,
  descricao: `Depois de construir a peça e dar vida a ela com detalhes nas aulas anteriores, chegou a hora do capricho final. Esta aula é sobre acabamento: aquele cuidado que transforma um modelo "quase pronto" num modelo bonito de verdade. A criança vai parar de criar coisas novas e passar a refinar o que já existe, olhando a própria peça de todos os ângulos e ajustando os detalhes com carinho, como quem lixa e limpa um brinquedo de madeira antes de pintar.

A grande ideia da aula é "olhar e melhorar". Nessa idade, as crianças adoram acrescentar peças, mas têm pressa para terminar e quase nunca voltam para arrumar. Aqui vamos inverter isso: hoje ninguém adiciona nada grande, todo mundo melhora o que tem. Três movimentos guiam o trabalho: suavizar cantos pontudos para a peça ficar mais agradável, alinhar partes que ficaram tortas ou desencontradas, e remover pedaços soltos que sobraram boiando no espaço. Cada ajuste deixa a peça mais limpa e mais pronta para virar objeto de verdade na impressora.

O professor conduz como o "mestre do acabamento". No projetor, você mostra uma peça-exemplo cheia de pequenos defeitos de propósito — um canto afiado demais, uma parte desalinhada e um cubinho perdido flutuando ao lado — e refina cada um na frente da turma, dizendo onde clicar no Maya. Tudo é feito com poucas ferramentas que as crianças já conhecem: a ferramenta Mover (W), girar e olhar a peça com a câmera, o Smooth para suavizar e a tecla Delete para apagar o que sobra. O segredo é demonstrar devagar e repetir os nomes dos botões.

Ao final, cada criança terá revisado a peça de todos os ângulos e feito pelo menos três melhorias de acabamento: um canto suavizado, uma parte alinhada e um pedaço solto removido. A peça sai desta aula mais limpa, mais firme e mais bonita, pronta para o checklist da impressora que vem na próxima semana. Capricho, aqui, não é enfeite: é o cuidado que faz a peça funcionar bem quando virar objeto real.`,
  materiais: [
    `Computadores com o Maya aberto e o arquivo da peça de cada criança já salvo e carregado`,
    `Projetor ou TV grande para o professor demonstrar o acabamento passo a passo`,
    `Peça-exemplo pronta, feita pelo professor, com defeitos de propósito: um canto muito afiado, uma parte desalinhada e um cubinho solto flutuando ao lado`,
    `Peça-exemplo já refinada (a versão "depois") para mostrar o antes e o depois`,
    `Folha de "Checklist do Capricho" impressa para cada criança, com três quadrinhos para marcar: canto suavizado, parte alinhada, pedaço solto removido`,
    `Lápis de cor ou canetinhas para marcar o checklist`,
    `Adesivos de "Mestre do Acabamento" para premiar quem fizer as três melhorias`,
  ],
  conceitosChave: [
    `Acabamento — o capricho final que deixa a peça limpa e bonita antes de imprimir, como lixar e limpar um brinquedo.`,
    `Suavizar canto — deixar uma quina afiada mais arredondada e macia, para a peça não ficar pontuda demais.`,
    `Alinhar — colocar as partes encaixadas e retinhas, sem ficarem tortas ou desencontradas.`,
    `Pedaço solto — um cubinho ou parte que sobrou flutuando longe da peça, sem encostar em nada, e precisa ser apagado.`,
    `Smooth — o botão do Maya que suaviza a peça, deixando os cantos mais redondinhos.`,
    `Ferramenta Mover — a setinha colorida (tecla W) que a gente usa para empurrar uma parte e deixá-la no lugar certo.`,
    `Girar a câmera — virar a peça na tela para olhar todos os lados e descobrir o que ainda está torto ou solto.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula usa poucas ferramentas do Maya, todas leves para um professor iniciante. Você precisa de três coisas só: girar a câmera, mover uma parte e suavizar/apagar. Para girar a câmera, segure a tecla Alt e arraste com o botão esquerdo do mouse; a peça gira na sua frente. Para aproximar e afastar, role a rodinha do mouse. Para mover uma parte, clique nela e aperte a tecla W: aparecem três setinhas coloridas (vermelha, verde e azul); arraste a setinha para empurrar a parte só naquela direção.

Para suavizar um canto, selecione a peça e vá no menu de cima. Com a peça selecionada, use o menu Mesh e procure a opção Smooth (em alguns Maya fica em Mesh, opção Smooth). Cada clique no Smooth deixa a peça mais redondinha; um clique só já resolve, dois cliques deixam bem macio. Para apagar um pedaço solto, clique nele uma vez (ele fica destacado) e aperte a tecla Delete. Pratique esses três gestos uma vez antes da aula até ficarem naturais.

Prepare a peça-exemplo com três defeitos bem visíveis: um canto afiado demais (uma quina pontuda), uma parte desalinhada (empurre um pedaço para o lado de propósito) e um cubinho solto flutuando ao lado da peça. Tenha também a versão já refinada para mostrar o antes e o depois.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Maya)

Aquecimento (10 min): Mostre no projetor a peça-exemplo com defeitos e, ao lado, a versão refinada. Pergunte: "Qual está mais bonita? Por quê?". Deixe a turma apontar o canto pontudo, a parte torta e o cubinho perdido. Diga que hoje cada um vai virar "mestre do acabamento" e deixar a própria peça assim de bonita.

Conteúdo novo guiado (15 min): No projetor, refine os três defeitos na frente da turma. Primeiro o canto: selecione a peça, vá no menu Mesh, clique em Smooth uma vez e mostre o canto ficando redondinho. Depois a parte torta: clique nela, aperte W, pegue a setinha colorida e arraste até encaixar reto. Por fim o pedaço solto: clique no cubinho perdido e aperte Delete. A cada passo, gire a câmera com Alt e botão esquerdo para mostrar que ficou limpo de todos os lados.

Mão na massa (25 min): Cada criança abre a própria peça e faz a revisão de todos os ângulos. A meta são três melhorias: suavizar um canto com o Smooth, alinhar uma parte com a tecla W e a setinha, e apagar um pedaço solto com Delete. Circule pela sala, sente ao lado de quem travar e pergunte: "Tem algum canto muito pontudo? Alguma parte torta? Algum pedaço boiando sozinho?". Peça para marcarem cada melhoria no Checklist do Capricho. Lembre todo mundo de salvar no fim (menu File, opção Save).

Desafio e compartilhar (10 min): Desafie cada criança a girar a peça e achar UM detalhe escondido que ainda dá para melhorar. Depois faça uma roda: cada mestre mostra a peça e conta uma melhoria que fez. Quem completou as três do checklist ganha o adesivo de "Mestre do Acabamento".

## Como explicar para crianças

Use a ideia do brinquedo de madeira: "Antes de pintar, a gente lixa as quinas para não machucar e limpa os pedacinhos soltos". O Smooth é a lixa mágica que deixa o canto macio. A ferramenta Mover é uma mãozinha que empurra a parte torta para o lugar certo. O pedaço solto é "um cubinho que ficou perdido boiando" e a tecla Delete é a borracha que tira o que não é da peça. Repita sempre: "Hoje a gente não cria coisa nova, a gente capricha no que já tem".

## Erros comuns e como ajudar

A criança clica em Smooth muitas vezes e a peça derrete e some os detalhes: combine no máximo um ou dois cliques e use Ctrl+Z para desfazer o excesso. A criança move a peça inteira sem querer quando queria mover só uma parte: mostre que precisa clicar primeiro na parte certa antes de apertar W. A criança apaga a peça boa achando que era o pedaço solto: peça para girar a câmera e conferir o que está selecionado (fica destacado) antes de apertar Delete. A criança diz "minha peça já está perfeita": gire a câmera junto com ela por baixo e por trás, quase sempre aparece um canto pontudo ou um pedacinho torto escondido. A criança esquece de salvar: feche a aula sempre lembrando do menu File, opção Save.`,
  exercicios: [
    {
      titulo: `Antes e depois: qual está mais bonita?`,
      tipo: `Observação coletiva`,
      tempo: `6 minutos`,
      guiaProfessor: `No projetor, mostre lado a lado a peça-exemplo com defeitos e a versão já refinada. Peça para a turma apontar o que mudou. Valorize cada criança que perceber o canto suavizado, a parte alinhada ou o pedaço solto que sumiu.`,
      atividade: `Olhe as duas peças na tela grande. Qual está com o acabamento mais bonito? Diga o que ficou diferente: o canto está mais redondinho? Alguma parte está mais reta? Sumiu algum pedaço solto?`,
      gabarito: `A criança aponta pelo menos uma diferença correta entre as duas peças. Acerto = citar o canto suavizado, a parte alinhada ou o pedaço solto removido. Exemplo: "A de depois não tem mais aquele cubinho voando do lado".`,
    },
    {
      titulo: `Girando para ver todos os lados`,
      tipo: `Prática no Maya`,
      tempo: `6 minutos`,
      guiaProfessor: `Ensine a girar a câmera segurando Alt e arrastando com o botão esquerdo do mouse, e a aproximar com a rodinha. Deixe cada criança dar uma volta completa pela própria peça antes de começar a refinar, olhando por cima, por baixo e por trás.`,
      atividade: `No seu computador, segure a tecla Alt e arraste com o mouse para girar a sua peça. Olhe por cima, por baixo e por trás. Use a rodinha para chegar mais perto. Descubra um canto pontudo, uma parte torta ou um pedaço solto.`,
      gabarito: `A criança gira a câmera com Alt e botão esquerdo e olha a peça de vários ângulos. Acerto = conseguir mostrar a peça por baixo ou por trás e apontar um problema. Erro comum: arrastar sem segurar Alt e mover a peça sem querer; lembre de segurar Alt antes.`,
    },
    {
      titulo: `A lixa mágica: suavizar um canto`,
      tipo: `Prática no Maya`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre de novo o caminho: selecionar a peça, ir no menu Mesh e clicar em Smooth uma vez. Avise que um ou dois cliques bastam, senão a peça "derrete". Ensine Ctrl+Z para desfazer caso passe do ponto. Circule ajudando quem não acha o menu.`,
      atividade: `Escolha um canto pontudo da sua peça. Clique na peça, vá no menu Mesh e clique em Smooth uma vez. Veja o canto ficar mais redondinho. Se passar do ponto, aperte Ctrl+Z para voltar. Marque "canto suavizado" no seu checklist.`,
      gabarito: `A criança aplica o Smooth uma vez e o canto fica visivelmente mais arredondado, sem derreter a peça. Acerto = usar o menu Mesh, opção Smooth, e perceber o canto mais macio. Exemplo: "Cliquei uma vez no Smooth e a quina ficou redondinha".`,
    },
    {
      titulo: `Mão de mestre: alinhar e limpar`,
      tipo: `Prática no Maya`,
      tempo: `10 minutos`,
      guiaProfessor: `Agora combine dois gestos. Para alinhar: clicar na parte torta, apertar W e arrastar a setinha colorida até encaixar reto. Para limpar: clicar no pedaço solto e apertar Delete. Peça para girar a câmera e conferir o que está selecionado antes de apagar, para não excluir a peça certa.`,
      atividade: `Ache uma parte torta: clique nela, aperte W e arraste a setinha colorida até ficar reta e encaixada. Depois ache um pedaço solto boiando: clique nele, confira girando a câmera e aperte Delete para apagar. Marque "parte alinhada" e "pedaço solto removido" no checklist.`,
      gabarito: `A criança alinha uma parte com a ferramenta Mover (W) e apaga um pedaço solto com Delete, sem excluir a peça boa. Acerto = a parte fica reta e encaixada e o cubinho solto some. Erro comum: apagar a peça certa; pedir Ctrl+Z e conferir a seleção antes de tentar de novo.`,
    },
    {
      titulo: `O detalhe escondido do mestre`,
      tipo: `Desafio final`,
      tempo: `8 minutos`,
      guiaProfessor: `Desafie a criança a girar a peça por baixo e por trás e achar UM último detalhe para melhorar — um canto que ficou esquecido, uma parte ainda meio torta ou um pedacinho solto pequeno. Depois cada mestre mostra a peça e conta uma melhoria. Lembre todos de salvar (menu File, opção Save). Quem completou as três do checklist ganha o adesivo de "Mestre do Acabamento".`,
      atividade: `Última missão de mestre: gire a peça por baixo e por trás e encontre um detalhe escondido para caprichar mais um pouco. Suavize, alinhe ou apague o que faltava. Depois salve a peça no menu File, opção Save, e mostre para a turma o que você melhorou.`,
      gabarito: `A criança encontra e corrige pelo menos uma melhoria escondida e salva o arquivo. Acerto = usar a câmera para descobrir o detalhe e aplicar Smooth, mover ou Delete, depois salvar. Exemplo: "Girei por baixo e achei um cantinho pontudo, dei um Smooth e salvei".`,
    },
  ],
};
