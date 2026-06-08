import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Cenário que Conta Histórias",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Modelar no Maya um pequeno cenário coeso, feito de props modulares reaproveitáveis e na escala certa para acompanhar o personagem dentro da Unreal Engine.`,
  descricao: `Um bom cenário não é só um fundo bonito: ele conta uma história. Quando o jogador entra em uma sala, os objetos espalhados ali já dizem quem mora no lugar, o que aconteceu e qual é o clima da cena. Nesta aula, o aluno sai do personagem que vinha trabalhando e passa a construir o mundo ao redor dele. O foco é criar um conjunto de props (objetos de cenário) que, juntos, formam uma cena com sentido, sem desperdiçar tempo nem polígonos.

O segredo profissional para isso é a modelagem modular. Em vez de esculpir uma sala inteira de uma vez, o aluno modela peças pequenas e reaproveitáveis, como um módulo de parede, um de chão e alguns objetos avulsos (uma caixa, um barril, uma mesa). Essas peças se encaixam como blocos de montar e podem ser duplicadas e recombinadas para gerar cenários grandes com pouquíssimo trabalho extra. É exatamente assim que estúdios reais montam jogos enormes sem modelar cada cantinho do zero.

O ponto mais delicado, e o mais importante para o Unreal, é a escala. Se o personagem tem cerca de um metro e oitenta de altura, a porta precisa ser um pouco maior que ele, a mesa precisa bater na cintura e a caixa não pode ser do tamanho de um prédio. Quando a escala entre os objetos e o personagem está errada, a cena parece de brinquedo ou gigante demais assim que entra no motor de jogo. Por isso o aluno vai modelar tudo conferindo medidas reais em centímetros e usando um boneco de referência na altura certa.

Ao final da aula, cada aluno terá uma pequena cena montada: um pedaço de ambiente com paredes e chão modulares, alguns props posicionados de forma proposital e o personagem (mesmo que simplificado) parado no meio, tudo na escala coerente. Essa cena é o alicerce do entregável do mês, que são os assets prontos para a Unreal, e mostra ao aluno que cenário é narrativa em forma de objeto.`,
  materiais: [
    `Computadores com Autodesk Maya instalado e aberto, um por aluno`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar passo a passo`,
    `Arquivo de exemplo "personagem_base.mb" com o personagem da aula anterior (ou um boneco simples na escala humana, cerca de 180 cm)`,
    `Arquivo de exemplo "cena_referencia.mb" mostrando uma cena modular pronta (paredes, chão e props) para inspirar a turma`,
    `Imagens de referência de cenários de jogos (concept art) projetadas ou impressas para a turma observar a narrativa visual`,
    `Folha impressa com a tabela de escalas em centímetros (personagem 180, porta 210, mesa 75, caixa 50) para consulta dos alunos`,
  ],
  conceitosChave: [
    `Prop — objeto de cenário que enriquece o ambiente, como caixa, barril, mesa ou luminária, sem ser o personagem principal.`,
    `Modelagem modular — técnica de criar peças pequenas e padronizadas (parede, chão, canto) que se encaixam e se repetem para montar cenários grandes.`,
    `Escala — relação de tamanho entre os objetos e o personagem; precisa ser coerente para a cena parecer real dentro da Unreal.`,
    `Grid snapping — recurso que faz os objetos grudarem nas linhas da grade, garantindo que os módulos se encaixem sem frestas.`,
    `Pivot — ponto de origem do objeto, usado como referência para mover, girar e duplicar; em peças modulares costuma ficar num canto.`,
    `Storytelling visual — ideia de que a disposição dos objetos no cenário conta uma história sem precisar de texto.`,
    `Reaproveitamento de asset — duplicar e recombinar a mesma peça em posições diferentes para economizar tempo e manter o estilo coeso.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para dar esta aula; precisa entender três ideias e saber onde clicar. A primeira ideia é que cenário se constrói com peças que se repetem (módulos), não esculpindo tudo de uma vez. A segunda é que tudo precisa estar na escala certa em relação ao personagem. A terceira é que os objetos contam uma história pela forma como estão dispostos. No Maya, as ferramentas que você vai usar ficam em poucos lugares: o menu Create para nascer um cubo (Create > Polygon Primitives > Cube), o Channel Box (painel à direita) para digitar medidas exatas, e a barra de ferramentas da esquerda para mover (tecla W), girar (E) e escalar (R). Para os módulos se encaixarem, ative o grid snapping segurando a tecla X enquanto move. Antes da aula, abra o "personagem_base.mb" e o "cena_referencia.mb" e confira no Channel Box se o personagem tem cerca de 180 cm de altura.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Projete duas imagens de cenário de jogo e pergunte: "O que esses objetos contam sobre quem mora aqui?" Relembre rapidamente que na aula anterior eles refinaram o personagem. Avise que hoje vão construir o mundo ao redor dele.

15 min — Conteúdo novo guiado: No projetor, crie um chão modular. Faça Create > Polygon Primitives > Cube. No Channel Box, na seção INPUTS (polyCube), digite Width 200, Height 10, Depth 200 para um piso de 2 metros. Crie um segundo cubo para a parede: Width 200, Height 280, Depth 10. Mostre que, segurando X (grid snapping) e usando Mover (W), a parede gruda na borda do chão sem frestas. Duplique a parede com Ctrl+D e posicione formando um canto. Agora traga um prop: crie um cubo de caixa com Width 50, Height 50, Depth 50, e coloque-o no chão. Por fim, traga o personagem do "personagem_base.mb" (File > Import) e mostre, no Channel Box, que ele tem altura perto de 180, a parede 280 e a caixa 50: a escala faz sentido. Aproveite para mover o pivot da parede para o canto (pressione Insert, arraste o pivot, pressione Insert de novo) explicando que isso facilita duplicar módulos encaixados.

25 min — Mão na massa: Cada aluno monta sua cena partindo do "personagem_base.mb". Devem ter pelo menos chão, duas paredes formando um canto e dois props. Circule pela sala conferindo as medidas no Channel Box e o uso do grid snapping (X). Insista que o personagem fique no meio para servir de régua viva da escala.

10 min — Desafio e compartilhar: Desafie cada aluno a reposicionar os props para que a cena conte uma história clara (ex.: caixas empilhadas perto da porta sugerem mudança ou fuga). Cada um mostra a cena para a turma e explica em uma frase a história que os objetos contam.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação com peças de montar: "Não vamos esculpir uma sala inteira. Vamos fazer uns blocos e repetir, igual a montar com peças de encaixe." Para a escala, coloque o personagem ao lado da caixa e diga: "Se a caixa for maior que ele, a sala vira casa de gigante; vamos medir tudo pensando que ele tem a altura de um adulto." Para a narrativa, pergunte: "Se você visse uma cadeira caída e papéis no chão, o que teria acontecido aqui?" Mostre que o jogador lê a cena sem precisar de texto. Para o encaixe sem frestas, diga: "Segura o X que as peças grudam na linha da grade igual ímã."

## Erros comuns e como ajudar

O erro mais frequente é esquecer a escala: o aluno cria uma caixa enorme do tamanho da parede. Peça para olhar o número no Channel Box e comparar com o personagem de 180. Outro erro é modelar tudo separado e a parede flutuar acima do chão; mostre o grid snapping com a tecla X e o snap de vértice (segurar V). Muitos esquecem de mover o pivot para o canto e, ao duplicar, a peça vai parar longe; relembre o atalho Insert. Há quem deixe frestas entre os módulos porque as medidas não batem; reforce usar valores redondos e iguais (todos os módulos com Width 200). Por fim, alguns enchem a cena de props sem propósito; lembre que poucos objetos bem escolhidos contam mais história que uma sala bagunçada.`,
  exercicios: [
    {
      titulo: `Chão na medida certa`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno crie um cubo e use o Channel Box (seção INPUTS) para digitar as medidas exatas, em vez de escalar no olho. O foco é aprender a controlar o tamanho por número, base de toda escala correta.`,
      atividade: `No Maya, faça Create > Polygon Primitives > Cube e, no Channel Box, transforme-o num piso de 2 metros digitando Width 200, Height 10, Depth 200. Confira os números no painel.`,
      gabarito: `O aluno deve ter um cubo achatado funcionando como chão, com Width 200, Height 10 e Depth 200 visíveis na seção INPUTS do Channel Box. O ponto-chave é que as medidas foram digitadas como valores exatos, e não escaladas no olho com a ferramenta R.`,
    },
    {
      titulo: `Paredes que se encaixam`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça duas paredes formando um canto, encaixadas no chão sem frestas. Verifique se o aluno usou o grid snapping (segurar X ao mover) e se duplicou a parede com Ctrl+D em vez de criar do zero. Reforce mover o pivot para o canto com Insert.`,
      atividade: `Crie uma parede (Width 200, Height 280, Depth 10), encaixe-a na borda do chão segurando X para grudar na grade, depois duplique com Ctrl+D e gire para formar um canto. As duas paredes devem encostar sem fresta.`,
      gabarito: `Duas paredes de Width 200, Height 280 e Depth 10 formando um canto sobre o chão, sem espaços entre elas nem entre parede e piso. O encaixe limpo prova o uso do grid snapping (tecla X), e a segunda parede deve ter vindo de uma duplicação (Ctrl+D), não de um cubo novo.`,
    },
    {
      titulo: `Props na escala do herói`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Em duplas, um aluno importa o personagem (File > Import do "personagem_base.mb") e o outro cria os props conferindo as medidas da tabela impressa (mesa 75, caixa 50). Depois trocam de papel. Reforce comparar cada prop com a altura do personagem.`,
      atividade: `Com o colega, importem o personagem para a cena e criem dois props na escala certa: uma caixa (Width/Height/Depth 50) e uma mesa (altura perto de 75). Confiram no Channel Box se ficam coerentes ao lado do personagem de 180.`,
      gabarito: `A cena deve conter o personagem importado (cerca de 180 de altura), uma caixa de 50 e uma mesa de altura próxima a 75. Comparados visualmente, a caixa bate abaixo do joelho e a mesa na cintura do personagem, comprovando que a escala entre props e herói está coerente para a Unreal.`,
    },
    {
      titulo: `A história dos objetos`,
      tipo: `roda de conversa`,
      tempo: `13 minutos`,
      guiaProfessor: `Conduza uma conversa projetando duas montagens da mesma cena: uma com props espalhados sem sentido e outra com props que sugerem uma história (caixas empilhadas na porta, cadeira caída). Pergunte qual cena conta algo e por quê. Depois cada aluno reposiciona seus props com intenção narrativa.`,
      atividade: `Discutam em roda: que história os objetos da cena podem contar só pela posição? Em seguida, cada aluno reorganiza os próprios props para sugerir uma situação (mudança, briga, abandono) e explica para a turma a história escolhida.`,
      gabarito: `Não há uma única resposta certa, mas cada aluno deve justificar a disposição com uma intenção clara, por exemplo "empilhei as caixas perto da porta para parecer que alguém vai se mudar". O essencial é que tenham movido os props de propósito e percebido que a posição dos objetos comunica uma narrativa sem texto.`,
    },
    {
      titulo: `Minha cena modular`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Peça a cena final completa: chão e duas paredes modulares encaixados, pelo menos dois props na escala correta, o personagem no centro como régua de escala e uma disposição que conte alguma história. Verifique encaixe sem frestas, escala coerente com o personagem de 180 e props posicionados com intenção. Mande salvar como "cena_NOME.mb".`,
      atividade: `Finalize sua cena modular: chão e duas paredes que se encaixam, no mínimo dois props na escala certa e o personagem no meio. Organize os objetos para contar uma história e salve o arquivo como "cena_NOME.mb". Mostre para a turma.`,
      gabarito: `Arquivo salvo com uma cena coesa: chão e paredes modulares encaixados sem frestas, ao menos dois props com medidas coerentes ao personagem de 180 cm (caixa por volta de 50, mesa por volta de 75), o personagem posicionado no centro como referência de escala e os objetos dispostos com intenção narrativa. A cena está pronta para virar parte do pacote de assets do mês para a Unreal.`,
    },
  ],
};
