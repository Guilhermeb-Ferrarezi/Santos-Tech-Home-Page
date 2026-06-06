import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Teste de Impressão",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Fazer a checagem final do modelo no Blender, girando a peça por todos os lados para encontrar buracos e partes soltas, conferindo se ela apoia bem na base e ajustando o tamanho final na escala certa para a impressão.`,
  descricao: `Depois de semanas modelando, lixando os cantos e colocando detalhes que dão vida, chegou a hora mais importante antes de mandar a peça para a impressora 3D de verdade: o teste de impressão. Esta aula é como a "revisão do carro antes da viagem". A criança não vai mais criar formas novas nem mudar o visual do modelo; ela vira uma detetive que examina a própria criação com lupa, procurando problemas escondidos que a impressora não consegue resolver sozinha.

O grande objetivo é girar a peça em volta, olhando por cima, por baixo, pelos lados e por dentro, para descobrir três coisas: se existe algum buraco na casquinha do modelo, se sobrou alguma parte solta flutuando no ar e se a peça fica firme e equilibrada quando apoiada na base. A impressora 3D trabalha colando camadas de plástico de baixo para cima, então uma peça com furo, com pedaço solto ou que não apoia bem simplesmente não imprime direito. Por isso este teste é o passo que separa um modelo bonito de um modelo que vira brinquedo de verdade.

No Blender, o professor vai mostrar como rodar a câmera ao redor do objeto, como deixar a peça meio transparente para enxergar se há vazios por dentro e como usar a tecla de número 7 para olhar a peça de cima e a base por baixo. Também vamos ajustar o tamanho final: nesta idade, as crianças adoram saber "do tamanho da minha mão" ou "do tamanho de uma caixinha de fósforo", então transformamos a escala num jogo concreto e visual, usando o painel de dimensões do Blender em centímetros.

Ao final, cada aluno terá uma peça aprovada na vistoria: sem buracos, sem partes soltas, apoiada firme na base e no tamanho certinho para caber na impressora. É a penúltima parada antes da aula 8, quando o modelo finalmente vai para o Bambu Studio e para a impressora Bambu Lab.`,
  materiais: [
    `Computadores com o Blender já aberto e o arquivo do modelo de cada criança carregado`,
    `Projetor ou TV grande para o professor demonstrar onde clicar no Blender`,
    `Exemplo pronto "do bem": uma peça aprovada, sem buracos e que apoia firme na base`,
    `Exemplo pronto "do mal": uma peça de propósito com um furo, um pedaço solto e a base torta, para a turma achar os erros`,
    `Uma caixinha ou copo de medida real (caixa de fósforo, tampinha) para comparar o tamanho da peça com objetos do dia a dia`,
    `Fichinha de vistoria impressa com três quadradinhos para marcar: sem buraco, sem parte solta, apoia na base`,
    `Adesivos ou carimbos de "Peça Aprovada" para premiar quem passar na vistoria`,
  ],
  conceitosChave: [
    `Teste de impressão — a vistoria final em que a gente confere se a peça está pronta para imprimir, sem erros escondidos.`,
    `Buraco (vazamento) — um furo na casquinha do modelo por onde a gente "veria pra dentro"; a impressora não sabe fechar esse furo sozinha.`,
    `Parte solta — um pedacinho do modelo que está flutuando, sem grudar no resto; na impressora ele cairia.`,
    `Base de apoio — o lado de baixo da peça que encosta na mesa da impressora; precisa ser plano e firme para a peça não cair.`,
    `Escala — o tamanho da peça; podemos deixar ela maior ou menor sem estragar o formato.`,
    `Dimensões — os números de largura, altura e profundidade que dizem o tamanho exato da peça, em centímetros.`,
    `Girar a vista (orbitar) — rodar a câmera ao redor do objeto para olhar por todos os lados, como segurar o brinquedo na mão e virar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser mestre em Blender. Esta aula é de inspeção, não de modelagem nova. Três botões e teclas resolvem quase tudo. Primeiro, girar a vista: segure o botão do meio do mouse (a rodinha apertada) e mova o mouse para orbitar ao redor da peça. Se o computador não tiver mouse com rodinha, use o teclado numérico: tecla 4 e 6 giram para os lados, 8 e 2 giram para cima e para baixo, e a tecla 7 mostra a peça vista de cima. Para ver a base por baixo, aperte Ctrl + 7.

Segundo, enxergar por dentro para achar buracos: no canto superior direito da janela 3D existem quatro bolinhas de sombreamento. Clique na terceira, "Wireframe" (modo aramado, atalho tecla Z e escolher "Wireframe"), que deixa a peça transparente feito uma gaiola; ali um buraco ou um pedaço solto aparece na hora. Para voltar ao normal, clique na bolinha "Solid".

Terceiro, ajustar o tamanho: abra o painel lateral apertando a tecla N. Aparece uma aba "Item" com o campo "Dimensions" (Dimensões), com X, Y e Z. Esses números são o tamanho real. Antes, garanta que a unidade está em centímetros: menu "Scene Properties" (ícone de impressora/cone) e "Units" como "Metric". Uma boa peça para criança fica entre 4 e 8 cm.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Mostre no projetor a peça "do mal", feita de propósito com um furo, um pedaço solto e a base torta. Pergunte: "O que está errado aqui?" Deixe a turma apontar. Gire a peça com o botão do meio do mouse para todos verem os defeitos por todos os lados. Diga que hoje cada um vai ser detetive da própria peça.

Conteúdo novo guiado (15 min): No seu computador, demonstre os três truques. 1) Orbitar: aperte a rodinha do mouse e gire; mostre a peça por cima (tecla 7) e por baixo (Ctrl + 7). 2) Ver por dentro: ative o "Wireframe" e mostre o buraco aparecendo; volte para "Solid". 3) Tamanho: aperte N, mostre o campo "Dimensions" e digite um número novo no Z para a peça crescer ou encolher na frente deles. Faça tudo devagar, narrando cada clique.

Mão na massa (25 min): Cada criança abre o próprio modelo e preenche a fichinha de vistoria. Passo a passo: gira a peça por todos os lados procurando furos; aperta 7 e Ctrl + 7 para olhar topo e base; liga o "Wireframe" para caçar partes soltas; confere se a base é plana; por fim aperta N e ajusta as dimensões para ficar entre 4 e 8 cm. Você circula, ajudando quem travou. Quem achar um erro, anota na ficha e tenta corrigir com sua ajuda.

Desafio e compartilhar (10 min): Desafie cada um a deixar a peça no tamanho de um objeto real (a caixinha de fósforo, a tampinha). Quem passar nos três quadradinhos da ficha ganha o carimbo "Peça Aprovada". Encerre com uma rodada rápida: cada criança gira a peça aprovada no projetor e diz qual problema encontrou e consertou.

## Como explicar para crianças

Use a analogia do brinquedo na mão: "Quando você ganha um brinquedo, você vira ele de todos os lados pra conhecer, né? A gente vai fazer isso com a peça no computador." Chame o buraco de "furo que vaza" e diga que a impressora "não sabe tapar furo", então a gente tem que achar antes. A parte solta é "um pedaço voador que ia cair". A base é "o pé da peça": se o pé é torto, a peça cai, igual a uma torre de blocos. O modo "Wireframe" é o "óculos de raio-x" que deixa a peça transparente.

## Erros comuns e como ajudar

A criança gira demais e se perde no espaço: aperte a tecla "." (ponto) do teclado numérico para a câmera voltar e centralizar na peça. Ela confunde "Solid" e "Wireframe" e acha que estragou: explique que é só um "óculos" e clique na bolinha "Solid" para voltar. Ela aumenta o tamanho mexendo na escala e a peça some da tela: aperte "." de novo para reenquadrar. Ela não acha a base torta: peça para apertar Ctrl + 7 e olhar por baixo, perguntando "esse pé está reto ou inclinado?". Ela quer mudar o formato em vez de só conferir: lembre que hoje a peça já está pronta, só estamos fazendo a vistoria, sem criar nada novo.`,
  exercicios: [
    {
      titulo: `Caça aos erros na peça "do mal"`,
      tipo: `Observação em grupo`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor a peça preparada com defeitos. Gire-a com a rodinha do mouse e deixe a turma apontar cada problema. Confirme os três tipos de erro: furo, parte solta e base torta.`,
      atividade: `Olhe a peça que o professor está girando na tela e levante a mão quando ver algo errado. Tente achar o furo, o pedaço solto e o pé torto.`,
      gabarito: `A turma identifica os três erros: o buraco na casquinha, o pedaço flutuando solto e a base inclinada. Acerto = apontar pelo menos dois dos três. Exemplo de fala da criança: "Tem um buraco aqui em cima!" e "Esse pedaço está soltinho".`,
    },
    {
      titulo: `Girar a peça por todos os lados`,
      tipo: `Prática no Blender`,
      tempo: `5 minutos`,
      guiaProfessor: `Ensine a orbitar segurando a rodinha do mouse. Mostre a tecla 7 (vista de cima) e Ctrl + 7 (vista de baixo). Se a criança se perder, ensine a tecla "." do teclado numérico para recentralizar.`,
      atividade: `No seu modelo, segure a rodinha do mouse e gire a peça em volta. Depois aperte 7 para ver por cima e Ctrl + 7 para ver por baixo. Procure se tem algum furo.`,
      gabarito: `A criança consegue orbitar a peça e ver topo e base. Acerto = girar de propósito até olhar por baixo sem ajuda. Erro comum: girar demais e perder a peça; solução é apertar "." para recentralizar.`,
    },
    {
      titulo: `Óculos de raio-x: achar buracos e partes soltas`,
      tipo: `Prática no Blender`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre a bolinha "Wireframe" no canto superior direito (ou tecla Z e "Wireframe"). A peça fica transparente. Peça para a criança caçar furos e pedaços soltos e depois voltar para "Solid".`,
      atividade: `Ligue o "óculos de raio-x" clicando na bolinha "Wireframe". A peça fica transparente. Procure buracos e pedaços voadores. Depois clique em "Solid" para voltar ao normal.`,
      gabarito: `A criança ativa o "Wireframe", inspeciona e volta para "Solid". Acerto = saber ligar e desligar o modo e dizer se achou ou não problema. Exemplo: "Não tem buraco nenhum, minha peça está fechadinha!" ou "Achei um pedaço solto aqui dentro".`,
    },
    {
      titulo: `O pé firme: conferir a base de apoio`,
      tipo: `Inspeção guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `Peça para a criança apertar Ctrl + 7 e olhar a peça por baixo. Pergunte se o pé é plano e reto. Explique que uma base torta faz a peça cair na impressora, igual a uma torre de blocos desequilibrada.`,
      atividade: `Aperte Ctrl + 7 e olhe a sua peça por baixo. O pé dela está reto e plano, como uma mesinha firme, ou está torto? Marque na fichinha se a base apoia bem.`,
      gabarito: `A criança verifica a base e decide se está plana. Acerto = olhar por baixo e responder com motivo ("o pé está reto, fica em pé") ou ("está torto, ia cair"). Quem achar a base torta marca o quadradinho como "precisa arrumar".`,
    },
    {
      titulo: `Tamanho certo: ajustar a escala na régua real`,
      tipo: `Desafio final`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como abrir o painel lateral com a tecla N e achar "Dimensions". Confira que a unidade está em centímetros. Desafie a criança a deixar a peça entre 4 e 8 cm, comparando com um objeto real como a caixa de fósforo. Quem passar nos três quadradinhos ganha o carimbo "Peça Aprovada".`,
      atividade: `Aperte N para abrir o painel do lado. Ache "Dimensions" e mude o número até a peça ficar mais ou menos do tamanho da caixinha de fósforo (entre 4 e 8 cm). Confira a fichinha: sem buraco, sem parte solta e apoia na base.`,
      gabarito: `A peça fica num tamanho entre 4 e 8 cm e passa nos três itens da ficha. Acerto = digitar um número de dimensão válido e ter os três quadradinhos marcados. Exemplo: a criança deixa em 6 cm e diz "minha peça é do tamanho da caixinha"; ficha completa = "Peça Aprovada".`,
    },
  ],
};
