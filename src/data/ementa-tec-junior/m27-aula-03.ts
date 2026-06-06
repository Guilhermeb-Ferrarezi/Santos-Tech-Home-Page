import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Girando o Mundo 3D",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a girar a visão ao redor do objeto e usar o zoom para olhar o cubo por cima, por baixo e dos lados dentro do Blender.`,
  descricao: `Nesta aula as crianças vão descobrir que, no Blender, elas podem "voar" ao redor das coisas como um drone ou como um passarinho curioso. Até agora, nas Aulas 1 e 2, elas conheceram o programa e exploraram as telas (painéis, botões e o cubo cinza que aparece quando o Blender abre). Hoje o foco é só um: mexer na câmera de visualização, ou seja, mudar o jeito de olhar a cena sem mudar nada no objeto. O cubo continua igualzinho; quem se move é o nosso "olho mágico".

A grande ideia é que o mundo 3D tem profundidade. Diferente de um desenho no papel, que é chapado, no Blender o cubo tem frente, costas, topo e fundo. Para entender de verdade uma criação em 3D, a criança precisa girar em volta dela e enxergar todos os lados. É como pegar um brinquedo na mão e virar para olhar por trás. Quando a criança domina essa navegação, ela para de ficar "perdida" na tela e ganha confiança para construir nas próximas aulas.

São três movimentos principais que ensinamos hoje, sempre usando o mouse. Girar a visão (orbitar): segurar o botão do meio do mouse (a rodinha apertada) e arrastar para rodar ao redor do cubo. Aproximar e afastar (zoom): rolar a rodinha do mouse para frente chega perto, para trás se afasta. Mover de lado (deslocar a vista): segurar Shift + botão do meio e arrastar para empurrar a cena para os lados, sem girar. Nesta aula damos prioridade total ao girar e ao zoom; o deslocar entra como um truque extra para quem terminar rápido.

Como muitos notebooks têm mouse sem rodinha confortável ou as crianças têm a mão pequena, o Blender oferece um atalho visual maravilhoso: o gizmo de eixos no canto superior direito da janela (as bolinhas coloridas vermelha X, verde Y e azul Z). Clicar e arrastar nessas bolinhas também gira o mundo, e isso ajuda muito a criança que ainda não tem força para segurar o botão do meio. A aula toda é bem prática e divertida: vira uma brincadeira de "esconde-esconde" com o cubo.`,
  materiais: [
    `Computadores com o Blender já aberto na tela inicial (com o cubo cinza padrão visível)`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada movimento`,
    `Mouse com rodinha (botão do meio) para cada criança — essencial para girar a visão`,
    `Um cubo de verdade ou caixinha (uma caixa de leite, dado ou brinquedo) para mostrar "lados" na mão`,
    `Cartões impressos com setas coloridas (gira, zoom perto, zoom longe) para apoio visual`,
    `Adesivos ou estrelinhas para premiar quem encontrar a "carinha escondida" no desafio`,
  ],
  conceitosChave: [
    `Visão 3D — é o nosso jeito de olhar a cena; quando ela muda, o objeto fica parado e só o nosso olho se mexe.`,
    `Orbitar (girar) — voar em volta do objeto, como um drone dando uma volta na sua casa.`,
    `Zoom — chegar perto pra ver os detalhes ou se afastar pra ver tudo de longe.`,
    `Botão do meio do mouse — a rodinha apertada; é a "alavanca mágica" que gira o mundo.`,
    `Gizmo de eixos — as bolinhas coloridas (X vermelha, Y verde, Z azul) no canto da tela que também giram a visão.`,
    `Cima, baixo e lados — todo objeto 3D tem topo, fundo, frente, costas e laterais para a gente espiar.`,
    `Deslocar a vista — empurrar a cena para o lado sem girar, usando Shift mais a rodinha apertada.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender. Esta aula ensina apenas a navegar pela cena 3D — não vamos criar nem apagar nada. Antes da aula, abra o Blender e treine três movimentos com o mouse na janela grande do meio (chamada Viewport): 1) segure o botão do meio (a rodinha apertada) e arraste para girar; 2) role a rodinha para frente e para trás para o zoom; 3) segure Shift mais o botão do meio e arraste para deslocar a vista. Importante: o objeto fica parado; quem se move é a câmera de visualização. Se você girar até ficar de cabeça para baixo e se perder, pressione a tecla Home para enquadrar tudo de novo, ou clique na bolinha Z azul do gizmo (canto superior direito) para voltar a uma vista organizada. Decore essa "tecla de socorro" Home, porque as crianças vão se perder e você precisa resgatá-las rápido.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Mostre o cubo de verdade na mão. Vire ele e pergunte: "O que tem atrás? E embaixo?" Deixe as crianças adivinharem. Diga que hoje vamos virar o cubo do Blender do mesmo jeito, mas usando o mouse. Reveja rapidinho onde fica a Viewport (a janela grande do meio).

CONTEÚDO NOVO GUIADO (15 min): No projetor, demonstre devagar. Primeiro o GIRAR: aperte a rodinha do mouse e arraste — fale "estou voando em volta do cubo!". Depois o ZOOM: role a rodinha para frente ("chegando pertinho") e para trás ("indo pra longe"). Mostre também o gizmo de eixos (bolinhas coloridas X vermelha, Y verde, Z azul no canto superior direito): clique e arraste nelas para girar. Clique na bolinha Z para ver de cima. Peça que todos só observem agora, sem mexer.

MÃO NA MASSA (25 min): Agora cada criança faz. Dê comandos um de cada vez: "girem para ver as costas do cubo", "deem zoom pra chegar bem perto", "afastem pra ver tudo", "espiem o cubo por cima", "agora por baixo". Passe nas mesas. Quem travar, leve a mãozinha dela até a rodinha do mouse. Para quem dominar rápido, ensine o truque extra do deslocar (Shift + rodinha apertada).

DESAFIO + COMPARTILHAR (10 min): Diga que escondeu uma "carinha" em um lado do cubo (faça de conta). O desafio é girar até olhar o cubo de todos os lados e parar exatamente vendo o topo. Quem conseguir, ganha estrelinha. Termine com cada um mostrando para o colega do lado como gira a visão.

## Como explicar para crianças

Use a analogia do drone ou do passarinho: "Você é um passarinho voando em volta do cubo." Para o zoom, diga "binóculo": rodar a rodinha é como olhar com binóculo para chegar perto. Repita sempre a frase mágica: "O cubo não se mexe — quem voa em volta dele somos nós!" Isso evita a confusão mais comum. Use as cores do gizmo como personagens: a bolinha azul Z é a "vista de cima do pássaro".

## Erros comuns e como ajudar

O erro número um: a criança acha que está movendo o cubo, e fica assustada achando que quebrou tudo. Tranquilize: nada foi danificado, só o olhar mudou. O segundo erro: apertar o botão errado do mouse (esquerdo ou direito) em vez da rodinha do meio — mostre na mão dela qual é o botão do meio. O terceiro: girar demais e ficar de cabeça para baixo, totalmente perdida. Ensine a tecla Home (enquadra tudo) ou clicar na bolinha Z do gizmo. O quarto: usar a rodinha com força e a tela "pular" no zoom — peça movimentos pequenos e calmos. Mantenha a calma e celebre cada giro certo.`,
  exercicios: [
    {
      titulo: `Espia a Bunda do Cubo`,
      tipo: `Prática guiada`,
      tempo: `4 minutos`,
      guiaProfessor: `Demonstre primeiro no projetor segurando a rodinha do mouse e arrastando devagar. Repita a frase: "o cubo fica parado, nós voamos em volta". Passe nas mesas ajudando quem não acha o botão do meio.`,
      atividade: `Segure o botão do meio do mouse (a rodinha apertada) e arraste para girar a visão até conseguir ver as costas do cubo, o lado que estava escondido no começo.`,
      gabarito: `A criança segura a rodinha do mouse, arrasta o mouse para o lado e o cubo aparece girado, mostrando a face que antes ficava de costas. O cubo continua do mesmo tamanho e cor; só a visão mudou. Sucesso quando ela enxerga o lado oposto ao inicial.`,
    },
    {
      titulo: `Binóculo Mágico (Zoom)`,
      tipo: `Prática individual`,
      tempo: `4 minutos`,
      guiaProfessor: `Mostre que rolar a rodinha para frente chega perto e para trás afasta. Peça movimentos pequenos e calmos para a tela não "pular". Use a palavra binóculo para dar imagem mental.`,
      atividade: `Role a rodinha do mouse para frente até o cubo ficar bem grande e pertinho, depois role para trás até o cubo ficar pequenininho e longe. Faça três vezes, como um binóculo mágico.`,
      gabarito: `Rolando para frente o cubo aumenta e ocupa quase toda a tela; rolando para trás ele diminui e fica pequeno no meio da tela. A criança controla a distância sem girar. Sucesso quando ela aproxima e afasta sozinha, com calma.`,
    },
    {
      titulo: `Vista de Cima do Passarinho`,
      tipo: `Prática com o gizmo`,
      tempo: `5 minutos`,
      guiaProfessor: `Aponte no projetor o gizmo de eixos no canto superior direito (bolinhas X vermelha, Y verde, Z azul). Explique que clicar na bolinha Z azul mostra o cubo visto de cima, como um pássaro olhando pra baixo.`,
      atividade: `Clique na bolinha azul Z do gizmo de eixos (canto superior direito da tela). Observe o cubo de cima, como um passarinho. Depois gire de novo com a rodinha para voltar a ver os lados.`,
      gabarito: `Ao clicar na bolinha Z azul, a visão muda para o topo: o cubo aparece como um quadrado visto de cima. Depois, segurando a rodinha e arrastando, a criança volta para a vista normal dos lados. Sucesso quando ela alterna entre ver de cima e ver de lado.`,
    },
    {
      titulo: `Caça aos Seis Lados`,
      tipo: `Desafio de exploração`,
      tempo: `6 minutos`,
      guiaProfessor: `Lembre que um cubo tem seis lados: topo, fundo, frente, costas e duas laterais. Combine de contar em voz alta cada lado encontrado. Ajude quem se perder com a tecla Home, que enquadra tudo de novo.`,
      atividade: `Girando a visão com a rodinha e dando zoom quando precisar, encontre e mostre os seis lados do cubo: por cima, por baixo, frente, costas e os dois lados. Conte em voz alta cada lado que você vê.`,
      gabarito: `A criança gira a visão em várias direções e consegue mostrar todas as seis faces do cubo, inclusive a de baixo (girando bem para cima do cubo até olhar embaixo). Sucesso quando ela conta de um a seis tendo visto cada face uma vez.`,
    },
    {
      titulo: `Resgate do Cubo Perdido`,
      tipo: `Desafio de socorro`,
      tempo: `6 minutos`,
      guiaProfessor: `Este exercício ensina a se salvar quando a visão fica bagunçada. Peça que girem muito de propósito até ficar torto, e então usem a tecla Home ou a bolinha do gizmo para organizar. É o "botão de socorro" da aula.`,
      atividade: `Gire bastante a visão de propósito até o cubo ficar todo torto e você se sentir perdido. Depois aperte a tecla Home no teclado (ou clique na bolinha Z do gizmo) para enquadrar e organizar tudo de novo.`,
      gabarito: `Depois de girar e bagunçar a visão, ao apertar Home o Blender reenquadra o cubo no centro da tela, bem visível. Se usar a bolinha Z, a visão volta para o topo organizado. Sucesso quando a criança consegue, sozinha, sair da bagunça e deixar o cubo arrumado de novo.`,
    },
  ],
};
