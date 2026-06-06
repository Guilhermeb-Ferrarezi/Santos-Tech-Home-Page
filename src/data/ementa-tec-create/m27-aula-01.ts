import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Planejando os Novos Itens",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Revisar os assets 3D já criados e planejar uma nova leva de itens do cenário, deixando cada aluno com um esboço de referência e a cena do Maya organizada na escala correta para o Roblox.`,
  descricao: `Nesta aula damos início ao terceiro mês de modelagem 3D do ano. Os alunos já criaram vários assets em meses anteriores e agora vão pensar como verdadeiros artistas de jogos: antes de modelar qualquer coisa nova, é preciso planejar. Esta primeira aula não é sobre criar formas complexas, e sim sobre decidir o que vamos criar, por que vamos criar e em que tamanho. É a fase de pré-produção, aquela que os estúdios profissionais levam muito a sério porque economiza horas de retrabalho lá na frente.

O foco do mês é ampliar o conjunto de assets do cenário do jogo: novos itens, objetos de ambientação e elementos que deixam o mundo do Roblox mais vivo e completo. Pense em coisas como barris, caixas, placas, postes, bancos, lâmpadas, plantas ou pedras decorativas. Hoje cada aluno vai olhar para o que já tem, identificar o que está faltando no cenário e escolher de dois a quatro itens novos para modelar ao longo das próximas aulas. A escolha precisa fazer sentido dentro do jogo, e não ser aleatória.

Depois de decidir, vem o esboço de referência. O aluno desenha o item à mão ou em uma ferramenta simples, marcando proporções, vistas de frente e de lado, e detalhes importantes. Esse desenho é o mapa que vai guiar a modelagem. Em seguida, organizamos a cena no Maya: configuramos as unidades, criamos um cubo de referência com o tamanho aproximado de um personagem do Roblox e usamos esse cubo como régua para garantir que os novos objetos nasçam na escala e na proporção corretas. Um barril gigante ou uma placa minúscula estragam a imersão do jogo, então acertar a escala agora evita dor de cabeça na hora de exportar.

Para o professor iniciante, a mensagem é tranquilizadora: nesta aula quase não modelamos. O peso está no planejamento, no desenho e na organização da cena. Se cada aluno terminar com uma lista clara de itens, um esboço de referência e uma cena do Maya com a escala configurada, a aula cumpriu seu papel e o mês começa no caminho certo.`,
  materiais: [
    `Computadores com o Maya instalado e já aberto antes da aula, para não perder tempo com carregamento`,
    `Projetor ou TV ligado ao computador do professor, para mostrar cada clique e cada desenho na tela grande`,
    `Folhas de papel sulfite e lápis (ou tablet com app de desenho) para os esboços de referência dos alunos`,
    `Arquivo de exemplo do professor: uma cena do Maya já com as unidades configuradas e um cubo de referência na escala do personagem do Roblox`,
    `Imagens de referência de itens de cenário (barris, caixas, placas, postes) projetadas para inspirar as escolhas`,
    `Captura de tela do jogo no Roblox de cada aluno (ou do projeto da turma), para revisar o que já existe no cenário`,
    `Folha impressa com a tabela de planejamento: nome do item, função no jogo, tamanho aproximado e nível de detalhe`,
  ],
  conceitosChave: [
    `Asset — qualquer peça pronta usada no jogo, como um modelo 3D, uma textura ou um som; aqui são os objetos do cenário.`,
    `Pré-produção — etapa de planejamento que vem antes de modelar, em que decidimos o que criar e como criar.`,
    `Esboço de referência — desenho simples que mostra o objeto de frente e de lado, servindo de mapa para a modelagem.`,
    `Escala — o tamanho do objeto em relação aos outros e ao personagem; manter a escala certa deixa o jogo coerente.`,
    `Proporção — a relação entre as partes de um objeto (altura, largura e profundidade) que faz a forma parecer correta.`,
    `Cubo de referência — um cubo do tamanho aproximado do personagem do Roblox, usado como régua para medir os novos itens.`,
    `Unidades de cena (Preferences) — a configuração do Maya que define se medimos em centímetros ou em metros, garantindo medidas coerentes.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para dar esta aula. O conteúdo prático é leve: configurar as unidades da cena, criar um cubo de referência e ajustar o tamanho dele pelo Channel Box. O coração da aula é o planejamento e o desenho, então sua função é mais de guia criativo do que de técnico. Antes da aula, abra o Maya e treine três passos: ir em "Windows" maior que "Settings/Preferences" maior que "Preferences" e conferir as unidades em "Settings"; criar um cubo por "Create" maior que "Polygon Primitives" maior que "Cube"; e mudar a altura dele no Channel Box digitando um número no campo de escala. No Roblox, um personagem tem cerca de 5 unidades de altura (cerca de 5 studs). Para o Maya, vamos combinar uma régua simples: um cubo de referência com 5 unidades de altura representa a altura do personagem. Tenha em mãos algumas imagens de itens de cenário para inspirar a turma.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão: Projete capturas dos jogos dos alunos. Pergunte: "O que já existe no cenário? O que está faltando para o mundo ficar mais vivo?" Anote ideias no quadro. Diga a frase-chave: "Artista de jogo planeja antes de modelar."

15 min, conteúdo novo guiado: No seu Maya, mostre como configurar a cena. Vá em "Windows" maior que "Settings/Preferences" maior que "Preferences", clique em "Settings" e mostre o campo de unidades ("Linear"); deixe em "centimeter". Depois crie a régua: "Create" maior que "Polygon Primitives" maior que "Cube". Com o cubo selecionado, no Channel Box, ajuste a altura escrevendo o número exato. Explique que no Maya não há código de texto como em Python, mas há valores que digitamos. Mostre o valor exato a usar no campo "Scale Y": digite o número 5. Em seguida explique que esse cubo de 5 de altura é "do tamanho de um boneco do Roblox" e será a régua de todos os itens.

25 min, mão na massa: Agora é a vez deles. Peça que cada aluno: 1) configure as unidades em "centimeter" pelas Preferences; 2) crie o cubo de referência por "Create" maior que "Polygon Primitives" maior que "Cube"; 3) ajuste "Scale Y" para o número 5 no Channel Box, deixando o cubo na altura do personagem; 4) no papel, escolha de dois a quatro itens novos e desenhe um deles de frente e de lado, marcando se é mais alto ou mais baixo que o cubo. Circule pela sala ajudando nas escolhas e nas proporções.

10 min, desafio e compartilhar: Lance o desafio de cada aluno escrever, ao lado do desenho, o tamanho aproximado do item comparado ao cubo (por exemplo, "metade da altura" ou "o dobro da largura"). Peça que dois ou três alunos mostrem o esboço e expliquem por que aquele item faz sentido no jogo. Termine pedindo que todos salvem a cena com "Ctrl+S".

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Chame o cubo de referência de "o boneco invisível" ou "a régua do jogo". Diga que planejar é "fazer o mapa antes da viagem". Compare o esboço de frente e de lado com "tirar foto do objeto por dois ângulos". Para a escala, use exemplos do mundo real: "Um barril é mais baixo que uma pessoa, então fica mais baixo que o cubo." Sempre nomeie o caminho do menu em voz alta enquanto clica: "Estou indo em Create, depois Polygon Primitives, depois Cube." Repita o caminho duas vezes e elogie cada esboço que aparecer.

## Erros comuns e como ajudar

O erro mais comum é querer modelar já na primeira aula; reforce que hoje é dia de planejar e desenhar. Alguns alunos escolhem itens grandes e complexos demais; oriente a começar por objetos simples, como caixas e barris. Outro tropeço é desenhar só de um ângulo; peça sempre frente e lado. Na cena do Maya, há quem mude a escala errada (por exemplo, "Scale X" no lugar de "Scale Y"); mostre no projetor qual campo do Channel Box é a altura. Se o aluno digitar o número e nada mudar, lembre que é preciso apertar "Enter" para confirmar. Por fim, alunos que terminam rápido podem desenhar um item extra ou detalhar melhor as proporções do primeiro.`,
  exercicios: [
    {
      titulo: `Inventário do cenário`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Projete as capturas dos jogos. Conduza uma conversa rápida para a turma listar o que já existe no cenário e o que falta. Anote as ideias no quadro para servirem de banco de itens. Aceite todas as sugestões nesta fase, sem filtrar.`,
      atividade: `Olhe o seu jogo no Roblox (ou a captura projetada) e liste em voz alta tudo que já existe no cenário. Depois aponte três coisas que estão faltando para deixar o mundo mais vivo.`,
      gabarito: `Não há uma única resposta certa, pois depende do jogo de cada aluno. Uma boa resposta cita objetos já existentes (chão, paredes, árvores) e aponta lacunas concretas, como falta de mobília, de iluminação ou de itens decorativos. Exemplos válidos de itens faltantes: barris, caixas, placas, postes, bancos, lâmpadas, pedras ou plantas.`,
    },
    {
      titulo: `Configurando a régua da cena`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre o caminho completo no projetor antes. Reforce a ordem: primeiro conferir as unidades nas Preferences, depois criar o cubo. Passe de mesa em mesa confirmando que o cubo apareceu e que a altura ("Scale Y") está no valor combinado.`,
      atividade: `Confira as unidades em "Windows" maior que "Settings/Preferences" maior que "Preferences" maior que "Settings" e deixe em "centimeter". Depois crie um cubo em "Create" maior que "Polygon Primitives" maior que "Cube" e, no Channel Box, mude "Scale Y" para o número 5.`,
      gabarito: `As unidades são conferidas em "Windows" maior que "Settings/Preferences" maior que "Preferences", na seção "Settings", deixando "Linear" em "centimeter". O cubo é criado em "Create" maior que "Polygon Primitives" maior que "Cube". No Channel Box, o campo "Scale Y" recebe o número 5 e confirma-se com "Enter", deixando o cubo na altura do personagem do Roblox.`,
    },
    {
      titulo: `Esboço de frente e de lado`,
      tipo: `desafio individual`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue papel e lápis. Deixe o aluno escolher um item simples. Reforce que o desenho não precisa ser bonito, precisa ser claro e mostrar as proporções. Caminhe pela sala lembrando de desenhar dois ângulos e de comparar o tamanho com o cubo de referência.`,
      atividade: `Escolha um item novo simples para o cenário (por exemplo, um barril ou uma caixa). Desenhe-o de frente e de lado em uma folha. Ao lado, escreva se ele é mais alto, mais baixo ou do mesmo tamanho que o cubo de referência.`,
      gabarito: `Um bom esboço mostra o objeto em duas vistas (frente e lado), com proporções coerentes entre altura, largura e profundidade. A comparação com o cubo de referência deve ser explícita, por exemplo: "o barril tem cerca de metade da altura do cubo" ou "a caixa tem mais ou menos a mesma largura e metade da altura". O importante é a clareza, não o talento artístico.`,
    },
    {
      titulo: `Tabela de planejamento dos itens`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas para que um ajude o outro a pensar. Entregue a folha com a tabela (nome do item, função no jogo, tamanho aproximado e nível de detalhe). Oriente a manter o nível de detalhe baixo nos primeiros itens. Confira se cada dupla justificou a função de cada item.`,
      atividade: `Em dupla, preencham uma tabela com de dois a quatro itens que vão modelar no mês. Para cada item escrevam: o nome, a função dele no jogo, o tamanho comparado ao cubo e se o detalhe é baixo, médio ou alto.`,
      gabarito: `Uma tabela bem-feita lista de dois a quatro itens, cada um com função clara (por exemplo, "barril: decoração e obstáculo"), tamanho relativo ao cubo (por exemplo, "metade da altura") e nível de detalhe coerente (itens iniciais devem ser de detalhe baixo a médio). O essencial é que cada item tenha um motivo para existir no jogo e uma escala definida.`,
    },
    {
      titulo: `Defesa do plano de assets`,
      tipo: `apresentação curta`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que dois ou três alunos apresentem rapidamente o esboço e a tabela. Faça perguntas que liguem a escolha ao jogo: "Por que esse item ajuda o cenário? Por que esse tamanho?" Valorize as justificativas e sugira ajustes de escala quando necessário. Encerre pedindo que todos salvem a cena.`,
      atividade: `Apresente em meio minuto o seu plano: mostre o esboço, diga quais itens vai modelar, qual a função de cada um no jogo e por que escolheu aqueles tamanhos. Salve a cena do Maya ao final com "Ctrl+S".`,
      gabarito: `Uma boa apresentação conecta cada item ao jogo (função e local no cenário) e justifica a escala em relação ao cubo de referência. Por exemplo: "Vou modelar um barril e uma placa; o barril serve de obstáculo e tem metade da altura do cubo, e a placa indica o caminho e fica um pouco mais alta que o personagem." Salvar a cena com "Ctrl+S" confirma que o trabalho foi guardado.`,
    },
  ],
};
