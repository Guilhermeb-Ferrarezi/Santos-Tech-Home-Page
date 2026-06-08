import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Como a impressora ganha vida",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar a impressora 3D Bambu Lab de verdade, reconhecendo suas partes principais e entendendo que ela constrói objetos camada por camada.`,
  descricao: `Chegou o mês mais mágico do Ano 3: o mês em que as crianças vão ver os modelos que criaram saindo da tela e virando objetos de verdade que dá para pegar na mão. Nesta primeira aula ninguém imprime nada ainda. O grande momento é conhecer a máquina de pertinho: a impressora 3D Bambu Lab, uma caixinha mágica que constrói brinquedos, peças e enfeites do nada. A ideia é despertar o "uau" e a curiosidade, não ensinar botões complicados.

A criança vai descobrir que a impressora 3D não funciona como a impressora de papel da casa dela. Em vez de tinta, ela usa um fio de plástico chamado filamento, que parece um carretel de linha bem grosso. Esse fio entra na máquina, é aquecido até ficar molinho como cola de pistola quente e sai por um buraquinho chamado bico. A grande sacada que a criança precisa levar para casa hoje é simples e encantadora: a impressora não faz o objeto inteiro de uma vez, ela faz camada sobre camada, uma fininha de cada vez, igual a empilhar muitos andares de um prédio bem fininho até a torre ficar pronta.

O professor vai mostrar e nomear as partes principais sem enrolação: o bico (de onde sai o plástico derretido), a mesa (a base lisa onde o objeto vai nascendo), os eixos (os trilhos por onde a máquina desliza para a frente, para trás, para os lados e para cima) e o lugar onde o filamento entra. Cada parte tem um nome divertido e uma função fácil de entender quando comparada com coisas do dia a dia.

O ponto alto da aula é a demonstração ao vivo: o professor liga a impressora e deixa a turma ver a máquina se mexendo sozinha, o bico passeando e a primeira camada surgindo na mesa. Esse momento cria o encantamento que vai segurar a atenção das crianças durante todo o mês. No final, elas saem da sala sabendo o nome das partes da impressora e contando para qualquer um que objetos 3D nascem camada por camada.`,
  materiais: [
    `Impressora 3D Bambu Lab ligada e posicionada onde toda a turma consiga ver com segurança`,
    `Um carretel de filamento (de preferência colorido) para passar de mão em mão e mostrar de onde vem o plástico`,
    `Projetor ou TV grande para exibir fotos da impressora com as partes nomeadas (bico, mesa, eixos)`,
    `Exemplos prontos de peças já impressas em 3D (um bichinho, um chaveiro, uma peça com camadas bem visíveis) para as crianças tocarem`,
    `Computadores com o Bambu Studio aberto na tela inicial, só para a turma ver o programa que comanda a máquina`,
    `Cartões ou etiquetas grandes com os nomes das partes (BICO, MESA, EIXOS, FILAMENTO) para colar perto de cada parte real`,
    `Lupa ou celular com zoom para olhar as camadas de pertinho em uma peça pronta`,
  ],
  conceitosChave: [
    `Impressora 3D — uma máquina mágica que constrói objetos de verdade que dá para pegar na mão, e não desenhos no papel.`,
    `Filamento — o fio grosso de plástico, parecido com um carretel de linha, que a impressora derrete para criar as peças.`,
    `Bico — o buraquinho quentinho de onde sai o plástico derretido, parecido com a ponta de uma cola quente.`,
    `Mesa — a base lisa onde o objeto vai nascendo de baixo para cima.`,
    `Eixos — os trilhos por onde a impressora desliza para frente, para trás, para os lados e para cima.`,
    `Camada — uma fatia bem fininha de plástico; muitas camadas empilhadas formam o objeto inteiro.`,
    `Camada sobre camada — o segredo da impressão 3D: construir uma fatia de cada vez, igual a empilhar andares de um prédio.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula. O objetivo de hoje é encantar e apresentar a máquina, não imprimir de verdade. Aprenda só quatro nomes e onde eles ficam na Bambu Lab: o bico (a peça metálica quentinha de onde sai o plástico, fica na cabeça de impressão), a mesa (a placa lisa e larga na base, também chamada de "mesa de impressão"), os eixos (as barras e trilhos por onde a cabeça desliza nas direções X, Y e Z) e a entrada do filamento (o tubinho transparente por onde o fio é puxado para dentro). Atenção de segurança: o bico e a mesa esquentam muito. Antes da aula, deixe a máquina fria ou supervisione de pertinho; combine com as crianças que ninguém encosta sem você ao lado.

No computador, abra o Bambu Studio apenas para a turma ver a tela inicial. Não precisa abrir modelo nem clicar em nada hoje; basta dizer "este é o programa que conversa com a impressora e manda ela trabalhar". Os menus de verdade entram nas próximas aulas.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Sente a turma em roda perto da impressora (a uma distância segura). Pergunte: "Vocês lembram dos modelos 3D que fizemos no computador? E se eu disser que eles podem virar de verdade?" Mostre uma peça já impressa e deixe passar de mão em mão. Deixe o "uau" acontecer. Conte que neste mês cada um vai levar uma peça impressa para casa.

Conteúdo novo guiado (15 min): Apresente a Bambu Lab. Aponte e nomeie cada parte, colando a etiqueta correspondente: BICO, MESA, EIXOS, FILAMENTO. Passe o carretel de filamento de mão em mão. No projetor, mostre a foto da máquina com os nomes. Pegue uma peça com camadas visíveis e use a lupa para a turma ver as listrinhas: explique que cada listrinha é uma camada. Abra o Bambu Studio na tela inicial só para mostrar "o programa que manda na impressora".

Mão na massa (25 min): Aqui o "mão na massa" é observar e nomear, já que ninguém imprime hoje. Faça um circuito: em duplas, as crianças vão até a impressora (com você) e apontam cada parte falando o nome em voz alta. Distribua as etiquetas e peça que recoloquem nas partes certas. Depois, dê a cada dupla uma peça pronta e a lupa para contarem quantas camadas conseguem ver. O ponto alto: ligue a impressora e rode uma demonstração curta para todos verem a cabeça se movendo e a primeira camada nascendo na mesa.

Desafio e compartilhar (10 min): Desafie cada criança a apontar para uma parte da máquina e dizer o nome e o que ela faz ("Este é o bico, é de onde sai o plástico derretido"). Encerre com a pergunta mágica: "Como a impressora monta o objeto?" A resposta que todos devem gritar juntos: "Camada sobre camada!"

## Como explicar para crianças

Use a analogia do prédio: "A impressora é como um pedreiro mágico que constrói uma torre colocando um andar bem fininho de cada vez, de baixo para cima." Compare o filamento com um carretel de linha grosso e o bico com a ponta de uma cola quente que derrete o plástico. Diga que os eixos são os trilhos do trenzinho da impressora, que anda para os lados e para cima. Para a ideia de camada, mostre uma pilha de fatias de pão ou de panquecas: muitas fatias finas formam uma torre.

## Erros comuns e como ajudar

A criança quer tocar no bico ou na mesa quente: combine a regra "olhar com os olhos, não com as mãos" e fique sempre ao lado durante a demonstração. A criança confunde com a impressora de papel da casa: reforce que aqui não tem tinta, tem fio de plástico derretido, e que o objeto fica em pé, não deitado no papel. A criança acha que a peça sai pronta de uma vez: volte para a peça com camadas visíveis e conte as listrinhas juntos, mostrando que foi feita aos pouquinhos. A criança troca os nomes das partes: deixe as etiquetas coladas a aula toda e repita os nomes como uma musiquinha. A criança se distrai: traga uma peça curiosa (um dinossauro, um foguete) para reacender o interesse.`,
  exercicios: [
    {
      titulo: `Caça às partes da impressora`,
      tipo: `Observação guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `Leve as crianças (em duplas, com você ao lado) até a Bambu Lab. Aponte uma parte e peça que digam o nome. Use as etiquetas BICO, MESA, EIXOS e FILAMENTO como apoio. Reforce a regra de segurança de não encostar.`,
      atividade: `Olhe a impressora de pertinho e ache estas partes: o bico, a mesa, os eixos e o lugar onde o filamento entra. Aponte cada uma e diga o nome em voz alta.`,
      gabarito: `A criança aponta corretamente: bico (peça quentinha de onde sai o plástico), mesa (placa lisa da base), eixos (trilhos por onde a cabeça desliza) e a entrada do filamento (tubinho por onde o fio passa). Acerto = nomear pelo menos três das quatro partes.`,
    },
    {
      titulo: `De onde vem o plástico?`,
      tipo: `Exploração com material`,
      tempo: `5 minutos`,
      guiaProfessor: `Passe o carretel de filamento de mão em mão. Pergunte com o que ele parece. Conduza para a ideia de que esse fio é o "alimento" da impressora, que entra na máquina e é derretido.`,
      atividade: `Segure o carretel de filamento. Com o que ele se parece? Conte para a turma o que a impressora faz com esse fio.`,
      gabarito: `A criança percebe que o filamento parece um carretel de linha grosso e diz que a impressora derrete o fio para construir o objeto. Exemplo: "Parece linha de costura gigante; a máquina esquenta e derrete para fazer a peça."`,
    },
    {
      titulo: `Conte as camadas`,
      tipo: `Investigação com lupa`,
      tempo: `6 minutos`,
      guiaProfessor: `Entregue uma peça pronta com camadas bem visíveis e uma lupa (ou celular com zoom). Mostre as listrinhas e explique que cada listrinha é uma camada. Peça que contem quantas conseguem ver.`,
      atividade: `Use a lupa para olhar a peça impressa de bem pertinho. Você consegue ver as listrinhas? Cada listrinha é uma camada. Tente contar quantas camadas dá para enxergar.`,
      gabarito: `A criança identifica as listrinhas como camadas e tenta contá-las. Acerto = entender que a peça foi feita de muitas camadas empilhadas, uma de cada vez, e não de uma vez só. O número exato não importa.`,
    },
    {
      titulo: `O pedreiro mágico`,
      tipo: `Dramatização`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza uma brincadeira de empilhar: use fatias de papel, blocos finos ou panquecas de faz de conta para montar uma "torre" camada por camada. A cada camada, diga junto com a turma "camada sobre camada".`,
      atividade: `Vamos virar a impressora! Empilhe os blocos (ou as fatias) um sobre o outro bem devagar e, a cada peça, fale alto: "camada sobre camada". Veja a sua torre crescer de baixo para cima.`,
      gabarito: `A criança empilha os elementos de baixo para cima e repete "camada sobre camada". Acerto = demonstrar com o corpo e a fala que a impressora constrói uma camada de cada vez, igual a empilhar andares de um prédio.`,
    },
    {
      titulo: `Sou guia da impressora`,
      tipo: `Desafio de apresentação`,
      tempo: `6 minutos`,
      guiaProfessor: `Desafie cada criança a ser um "guia" e explicar uma parte da máquina para a turma: apontar, dizer o nome e o que aquela parte faz. Se travar, dê a primeira palavra. Valorize a coragem de explicar.`,
      atividade: `Agora você é o guia da impressora! Escolha uma parte (bico, mesa, eixos ou filamento), aponte para ela e explique para os colegas qual é o nome e para que serve.`,
      gabarito: `A criança aponta uma parte e explica sua função. Exemplos: "Este é o bico, é de onde sai o plástico derretido"; "Esta é a mesa, é onde a peça vai nascendo"; "Estes são os eixos, os trilhos que fazem a máquina andar". Acerto = nome correto mais uma função simples.`,
    },
  ],
};
