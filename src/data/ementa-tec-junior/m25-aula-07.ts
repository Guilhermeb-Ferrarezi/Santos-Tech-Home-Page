import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Preparando para imprimir",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança aprende o que faz um modelo voxel poder ser impresso de verdade e deixa a própria criação inteira, em pé e bem conectada, sem buracos nem pedaços soltos.`,
  descricao: `Esta é a aula em que a magia do computador encontra o mundo real. Até agora a turma modelou, deu forma, pintou e detalhou os personagens dentro do MagicaVoxel, mas tudo isso ainda mora dentro da tela. Hoje a gente começa a preparar o modelo para sair da tela e virar um objeto de plástico de verdade, impresso na Bambu Lab. E para isso o modelo precisa seguir algumas regrinhas, do mesmo jeito que uma casa de blocos precisa estar bem montada para não cair.

A impressora 3D funciona como um confeiteiro que coloca camadas de massa uma em cima da outra, de baixo para cima. Por isso, o modelo precisa estar inteiro, bem apoiado no chão e todo conectado. Se uma parte estiver flutuando no ar, sem nada embaixo segurando, a impressora não consegue imprimir aquilo no vazio. Se duas partes estiverem soltas, encostadinhas mas sem se tocar de verdade, elas saem separadas, como duas peças que deviam ser uma só. E se tiver um buraco onde não devia, a peça pode ficar fraca e quebrar.

Nesta aula a turma vira inspetora de qualidade da própria criação. Cada criança vai girar o modelo no MagicaVoxel, olhar por baixo, por cima e pelos lados, e procurar três problemas: pedaços flutuando no ar, partes soltas que não encostam no resto e buracos no meio do corpo. Depois ela conserta tudo: desce o que está flutuando até apoiar, conecta as partes soltas com uma "pontinha" de voxels e fecha os buracos preenchendo com cubinhos. No fim, o modelo precisa passar no teste de ficar em pé sozinho, todo grudado em uma peça só.

O professor conduz como um engenheiro animado fazendo a vistoria de uma ponte: vira o modelo de cabeça para baixo, aponta os problemas com bom humor ("opa, esse bracinho tá voando!") e mostra como resolver. Não é aula de criar coisa nova, é aula de cuidar e arrumar o que já existe para que a criação sobreviva à viagem do computador até a impressora. É a penúltima parada antes do modelo virar de verdade.`,
  materiais: [
    `Computadores ligados, com o MagicaVoxel já aberto e o modelo voxel de cada aluno (o personagem dos meses anteriores) carregado na tela`,
    `Projetor ou TV conectada a um computador, para o professor demonstrar onde clicar no MagicaVoxel passo a passo`,
    `Um modelo voxel de exemplo já pronto e bem feito, todo apoiado e conectado, para mostrar como deve ficar no fim`,
    `Um modelo voxel de exemplo com problemas de propósito (um braço flutuando, uma orelha solta e um buraco no peito), para a turma achar e consertar junto`,
    `Uma peça de verdade já impressa na Bambu Lab (um modelo voxel pequeno), para passar de mão em mão e mostrar o objetivo final`,
    `Um brinquedo de blocos de montar de verdade, para demonstrar ao vivo o que é uma peça inteira, em pé e conectada`,
  ],
  conceitosChave: [
    `Impressão 3D — é a máquina que pega o seu desenho 3D do computador e constrói ele de verdade, em plástico, camada por camada de baixo para cima.`,
    `Modelo inteiro — é quando todas as partes da sua criação estão grudadas em uma peça só, sem nada solto, igual a um boneco de uma peça.`,
    `Apoiado — é quando a parte de baixo do modelo encosta no chão e segura o resto, para a criação ficar em pé sem cair.`,
    `Flutuando — é um pedaço que está solto no ar, sem nada embaixo segurando; a impressora não consegue imprimir no vazio.`,
    `Buraco — é um espaço vazio onde deveria ter cubinho; ele deixa a peça fraca e precisa ser fechado.`,
    `Conectar — é juntar dois pedaços soltos com cubinhos no meio, para eles virarem uma coisa só e não saírem separados.`,
    `Vistoria — é olhar a criação por todos os lados, de cima, de baixo e dos lados, para descobrir o que precisa ser arrumado.`,
  ],
  treinamento: `## O que o professor precisa saber

Imprimir em 3D é construir um objeto físico camada por camada, de baixo para cima, em plástico derretido. Para o modelo da criança sobreviver a isso, ele precisa de três coisas: estar APOIADO (tem base encostando no chão), estar INTEIRO (tudo conectado em uma peça só) e estar SEM BURACOS frágeis. Você não precisa abrir a Bambu Lab nesta aula; o trabalho de hoje é todo dentro do MagicaVoxel, deixando o modelo "pronto para imprimir".

Três problemas aparecem sempre em modelos de criança: (1) partes FLUTUANDO — um braço, um chapéu ou um acessório que ficou no ar sem nada embaixo; (2) partes SOLTAS — duas peças que parecem encostar mas têm um vão entre elas; (3) BURACOS — vazios no meio do corpo. A impressora não imprime no ar e separa o que não está grudado, então a missão é descer o que flutua, conectar o que está solto e preencher os buracos.

Para girar o modelo no MagicaVoxel, segure o botão direito do mouse e arraste; para aproximar, use o scroll. Olhe sempre por baixo. As ferramentas que você vai usar ficam no painel da esquerda, na barra de edição: "Attach" (o lápis que ADICIONA voxels), "Erase" (a borracha que APAGA) e "Move" (a setinha que move uma seleção). Para mover uma parte, troque o modo de seleção para "Box" (caixa) no topo, desenhe uma caixa em volta da parte e use "Move" para descer. Teste tudo antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em MagicaVoxel)

Aquecimento e revisão (10 min): Receba a turma em roda com o brinquedo de blocos. Monte uma torre e deixe um bloco "voando" no ar, segurando com a mão; solte e mostre que cai. Pergunte: "Por que esse bloco caiu?". Passe a peça já impressa na Bambu Lab de mão em mão e diga: "Hoje a gente vai deixar a sua criação pronta para virar uma peça assim de verdade."

Conteúdo novo guiado (15 min): No projetor, abra o modelo de exemplo COM problemas. Gire com o botão direito do mouse, olhe por baixo e ache os três defeitos junto com a turma. Conserte ao vivo: para o braço flutuando, escolha "Box" no topo, faça uma caixa em volta do braço, clique em "Move" e arraste para baixo até apoiar. Para a orelha solta, pegue o lápis "Attach" e pinte cubinhos ligando a orelha à cabeça. Para o buraco no peito, com o "Attach" preencha o vazio com cubinhos. Mostre o modelo certo no fim.

Mão na massa (25 min): Cada aluno abre o próprio modelo e faz a vistoria. Passo a passo na tela: 1) girar com o botão direito e olhar por baixo; 2) achar o que flutua e descer com "Box" + "Move"; 3) achar o que está solto e conectar com "Attach"; 4) achar buracos e preencher com "Attach". Circule de mesa em mesa virando os modelos de cabeça para baixo e apontando os problemas com bom humor. No fim, cada um salva em "File" > "Save".

Desafio e compartilhar (10 min): Faça o "teste do tombo": cada criança gira o modelo, deixa ele apoiado no chão da grade e confere se nada está voando. Dois ou três voluntários mostram no projetor o "antes e depois" de um conserto. Celebre cada modelo que passou no teste de ficar em pé, inteiro e sem buracos.

## Como explicar para crianças

Use a impressora como um confeiteiro: "Ela coloca camadinhas de massa uma sobre a outra, de baixo pra cima. Se você pedir um chantilly no ar, ele escorre, né? Por isso nada pode ficar voando." Para conectar, use a ideia de dar as mãos: "Esses dois pedaços precisam dar a mãozinha um pro outro, senão saem separados." Para o buraco, fale em "tampar o buraco com cubinhos, igual a tapar um buraco na areia". Para o apoio, use o brinquedo de blocos: "Tudo precisa ter um chão embaixo segurando, igual à torre de blocos." Repita o lema do dia: "Inteiro, em pé e sem buracos!"

## Erros comuns e como ajudar

Não enxergar o problema porque não gira o modelo: ensine de novo o botão direito do mouse e vire você mesmo de cabeça para baixo. Apagar a peça inteira sem querer com a borracha: lembre que hoje a gente quase não usa "Erase"; o foco é "Attach" e "Move". Mover a parte errada porque a caixa do "Box" pegou junto: ajude a desenhar a caixa só em volta do pedaço certo. Achar que encostado é o mesmo que conectado: aproxime o zoom e mostre o vãozinho; só conta se os cubinhos se tocam. Querer continuar criando coisa nova em vez de consertar: relembre que hoje é dia de cuidar, não de inventar. Esquecer de salvar: passe no fim e confira "File" > "Save" com cada um.`,
  exercicios: [
    {
      titulo: `Cai ou fica em pé?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o brinquedo de blocos na mão, monte situações: uma torre bem apoiada, um bloco flutuando que você segura e solta, e dois blocos soltos lado a lado. A cada uma, pergunte se aquilo vai conseguir ser impresso. Conecte com a impressora que constrói de baixo para cima. O objetivo é a criança entender, no concreto, a diferença entre apoiado e flutuando.`,
      atividade: `Olhe os blocos que o professor montar e responda em voz alta: este vai ficar em pé ou vai cair? Diga "fica" quando tiver chão embaixo segurando e "cai" quando estiver voando no ar.`,
      gabarito: `A criança acertou quando identifica que o bloco apoiado fica em pé e o bloco flutuando cai. Sinal de sucesso: ela explica, com as próprias palavras, que precisa ter "um chão embaixo" para a impressora conseguir construir.`,
    },
    {
      titulo: `Vistoria por baixo`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre no projetor como girar o modelo segurando o botão direito do mouse e arrastando, e como olhar por baixo. Depois cada aluno gira o próprio modelo no MagicaVoxel. Passe de mesa em mesa garantindo que todos consigam ver a criação de cima, de baixo e dos lados. Ainda não é hora de consertar, só de descobrir o que está estranho.`,
      atividade: `No seu computador, segure o botão direito do mouse e gire o seu modelo. Olhe por baixo, por cima e pelos lados. Aponte para a tela e diga se você achou algum pedaço voando, alguma parte solta ou algum buraco.`,
      gabarito: `A criança acertou quando consegue girar o modelo sozinha e olhar por baixo, apontando pelo menos um possível problema (ou confirmando que está tudo bem). Sinal de sucesso: ela usa o botão direito para virar a criação de cabeça para baixo sem ajuda.`,
    },
    {
      titulo: `Descendo o que está voando`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre no projetor o caminho: escolher "Box" no topo, desenhar uma caixa em volta da parte que flutua, clicar em "Move" e arrastar para baixo até a parte apoiar no resto do modelo. Use o exemplo com o braço voando. Depois cada aluno faz no seu. Ajude a desenhar a caixa só em volta do pedaço certo, para não mover o corpo inteiro.`,
      atividade: `Achou um pedaço voando? Escolha "Box" lá em cima, faça uma caixa em volta só desse pedaço, clique em "Move" e arraste ele para baixo até encostar no resto do modelo. Se não tinha nada voando, ajude um colega a descer o pedaço dele.`,
      gabarito: `A criança acertou quando seleciona a parte flutuante com "Box" e a desce com "Move" até apoiar no corpo, sem mover o modelo inteiro. Sinal de sucesso: depois do conserto, nenhuma parte fica no ar quando o modelo é girado.`,
    },
    {
      titulo: `Conectando e tapando buracos`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Demonstre a ferramenta "Attach" (o lápis): com ela, clicar adiciona cubinhos. Mostre como ligar uma orelha solta à cabeça preenchendo o vão, e como tampar um buraco no peito clicando para preencher o vazio. Reforce a diferença entre encostado e conectado, dando zoom para mostrar o vãozinho. Cada aluno conserta as conexões e buracos do próprio modelo.`,
      atividade: `Pegue o lápis "Attach". Onde duas partes estiverem soltas, pinte cubinhos no meio até elas se grudarem. Onde tiver um buraco, clique preenchendo com cubinhos até fechar. Aproxime o zoom para conferir se realmente se tocam.`,
      gabarito: `A criança acertou quando usa o "Attach" para unir partes soltas e fechar buracos, deixando os pedaços de fato grudados (não só encostados). Sinal de sucesso: ao dar zoom, não sobra nenhum vão entre as partes que deviam estar juntas.`,
    },
    {
      titulo: `O teste do tombo`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Este é o desafio final de qualidade. Cada criança gira o modelo, deixa ele apoiado no chão da grade e faz a checagem dos três itens do dia: inteiro, em pé e sem buracos. Depois ela salva em "File" > "Save". Chame voluntários para mostrar no projetor o "antes e depois" de um conserto. Celebre cada modelo aprovado, lembrando que agora ele está pronto para virar de verdade.`,
      atividade: `Faça o teste do tombo no seu modelo: gire e confira as três coisas — está INTEIRO (tudo grudado)? Está EM PÉ (apoiado no chão)? Está SEM BURACOS? Se passar nas três, salve em "File" e depois "Save" e comemore: o seu modelo está pronto para imprimir!`,
      gabarito: `A criança acertou quando o modelo passa nos três testes (inteiro, apoiado e sem buracos) e ela salva o arquivo. Sinal de sucesso: a criança consegue dizer, apontando a própria criação, por que ela agora poderia ser impressa de verdade.`,
    },
  ],
};
