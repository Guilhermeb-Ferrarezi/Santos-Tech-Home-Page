import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Arrumando o modelo para a loja",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Deixar o item do Maya limpo, sem faces escondidas e na escala certa, pronto e organizado para o upload na loja do Roblox.`,
  descricao: `Toda loja boa tem suas regras de vitrine, e a loja do Roblox não é diferente. Quando criamos um item no Maya, é normal que ele fique com algumas "sujeiras" por dentro: faces que ninguém vê, partes que sobraram de testes e um tamanho que ficou maluco. Nesta aula, o aluno aprende que um modelo bonito por fora também precisa estar arrumado por dentro. É como guardar o quarto antes de receber uma visita: a gente não joga as coisas embaixo da cama, a gente organiza de verdade.

O primeiro grande tema é o modelo limpo. A criança vai aprender a olhar o item com olhos de profissional e perceber o que não precisa estar ali. Faces escondidas são pedaços do modelo que ficam dentro de outras partes e nunca aparecem para quem vê o item; elas só pesam o arquivo e não servem para nada. Apagar essas partes deixa o item mais leve e mais rápido para a loja carregar.

O segundo tema é a escala certa. No Maya, um item pode parecer ok na tela, mas estar gigante ou minúsculo quando o computador mede de verdade. A loja do Roblox espera um tamanho coerente, então o aluno vai conferir as medidas e ajustar a escala para que o item não chegue do tamanho de uma montanha nem do tamanho de uma formiga.

O terceiro tema é centralizar o objeto. Um item bem-comportado fica no centro do mundo, com seu ponto de origem (o pivô) bem no lugar certo. Isso evita que o item apareça torto ou flutuando depois do upload. Ao final, a criança terá um modelo revisado, enxuto, do tamanho certo e centralizado, pronto para os próximos passos de exportação.`,
  materiais: [
    `Computadores com o Maya já aberto e o item do aluno carregado (o item que vem sendo feito desde a Aula 2)`,
    `Projetor ligado na tela do professor para mostrar cada clique em tempo real`,
    `Dois exemplos prontos: um modelo "bagunçado" (com faces escondidas e escala errada) e um modelo "arrumado" para comparar`,
    `Cartão impresso com o "Checklist da Vitrine" (limpo, sem faces escondidas, escala certa, centralizado)`,
    `Mouse com três botões para cada aluno (ajuda muito na navegação do Maya)`,
    `Folha de rascunho e lápis para o aluno anotar o que apagou`,
  ],
  conceitosChave: [
    `Modelo limpo — é o item sem pedaços que sobraram, sem partes escondidas e sem bagunça; só o que precisa estar ali.`,
    `Face escondida — é uma parte do modelo que fica dentro de outra e ninguém consegue ver; ela só pesa o arquivo à toa.`,
    `Escala — é o tamanho do item medido pelo computador; precisa estar nem gigante nem minúsculo, do tamanho certo.`,
    `Centralizar — é colocar o item bem no meio do mundo, no ponto zero, para ele não nascer torto na loja.`,
    `Pivô — é o pontinho que funciona como o "centro" do item; quando giramos ou movemos, é em volta dele que tudo acontece.`,
    `Deletar — é apagar de vez uma parte do modelo que não serve mais, usando a tecla Delete.`,
    `Vitrine da loja — é o lugar onde o item vai aparecer para todo mundo; por isso ele precisa estar arrumado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um mestre do Maya para dar esta aula. Precisa saber três ações simples: apagar uma parte selecionada, conferir o tamanho e centralizar o objeto. O Maya é o programa onde os alunos vêm modelando o item desde a Aula 2. Nesta aula o foco não é criar nada novo, e sim arrumar o que já existe. Pense em você como um "inspetor de vitrine": vai ensinar a criança a olhar o item com olhos críticos antes de mandar para a loja.

Antes da aula, abra os dois exemplos (o bagunçado e o arrumado) e deixe-os prontos para mostrar lado a lado. Treine uma vez sozinho: selecione uma face, aperte Delete, veja o item ficar mais leve. Depois confira o tamanho e centralize. Se você fizer isso uma vez, já dá a aula com tranquilidade.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Mostre no projetor os dois exemplos, o bagunçado e o arrumado, sem dizer qual é qual. Pergunte: "Qual desses vocês comprariam na loja?" Deixe as crianças apontarem diferenças. Gire o modelo bagunçado para mostrar uma face escondida aparecendo por dentro. Isso cria a pergunta da aula: como deixar o nosso item arrumado?

Conteúdo novo guiado (15 min): No seu Maya, selecione o item. Mostre o painel "Outliner" (menu Windows, depois Outliner) para ver a lista de tudo que existe na cena, como uma lista de "o que tem no quarto". Apague algo que sobrou: clique na peça na tela ou no Outliner e aperte Delete. Em seguida, abra o "Channel Box" (lado direito) e mostre os números de Scale X, Y e Z. Explique que esses números são o tamanho. Por fim, ensine a centralizar: com o item selecionado, vá em Modify, depois "Center Pivot" para arrumar o pivô, e mostre como zerar a posição digitando 0 em Translate X, Y e Z no Channel Box.

Mão na massa (25 min): Cada aluno abre o próprio item. Passo 1: abrir o Outliner e apagar partes que sobraram. Passo 2: girar o modelo com o botão do meio do mouse e procurar faces escondidas; selecionar e apertar Delete. Passo 3: olhar o Channel Box e conferir se a escala parece coerente. Passo 4: usar Modify, depois Center Pivot, e zerar Translate. Circule pela sala e use o Checklist da Vitrine com cada um.

Desafio e compartilhar (10 min): Lance o desafio "Caça à face escondida": quem achar e apagar a face mais bem escondida ganha o título de Inspetor do Dia. Cada aluno gira o item no projetor e mostra o "antes e depois".

## Como explicar para crianças

Use a analogia do quarto antes da visita: "A gente não esconde a bagunça embaixo da cama, a gente arruma de verdade." Para faces escondidas, diga que são "paredes que ficam dentro do armário, que ninguém vê, mas continuam ocupando espaço". Para escala, fale "nem do tamanho de um prédio, nem do tamanho de uma formiga, do tamanho certo". Para centralizar, diga "vamos colocar o item bem no meio do palco, senão ele nasce torto na loja". Mostre sempre na tela, gire o modelo e deixe a criança ver o pedaço sumir quando apertar Delete. Ver acontecer vale mais que ouvir explicar.

## Erros comuns e como ajudar

O erro mais comum é apagar a peça inteira sem querer, em vez de só a face escondida. Ensine o atalho de desfazer (Control mais Z) logo no começo, assim ninguém entra em pânico. Outro erro é selecionar o modo errado: lembre que para apagar uma face é preciso estar no modo de face (botão direito segurado em cima do objeto, depois "Face"). Alguns alunos vão "centralizar" movendo o item com a mão e deixando torto; mostre que zerar os números do Translate é mais preciso que arrastar. Por fim, há quem mexa na escala sem querer e o item fique gigante; nesse caso, abra o Channel Box e ajude a voltar os números de Scale para valores coerentes, ou use Control mais Z.`,
  exercicios: [
    {
      titulo: `Acha a bagunça`,
      tipo: `Observação guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o modelo bagunçado no projetor e gire devagar. Peça que as crianças apontem tudo que parece errado ou sobrando. Não corrija ainda, só liste no quadro.`,
      atividade: `Olhe o item da tela e diga em voz alta três coisas que parecem "bagunça": partes sobrando, pedaços escondidos ou tamanho estranho.`,
      gabarito: `Respostas esperadas: faces escondidas aparecendo por dentro, peças soltas que sobraram de testes, e o item grande ou pequeno demais. Qualquer uma dessas três é válida.`,
    },
    {
      titulo: `Checklist da Vitrine`,
      tipo: `Verificação com cartão`,
      tempo: `6 minutos`,
      guiaProfessor: `Entregue o cartão do Checklist da Vitrine. Leia cada item junto com a turma e explique o que cada um significa antes de aplicarem no próprio modelo.`,
      atividade: `Marque no checklist o que o seu item já tem: está limpo? Não tem faces escondidas? Está na escala certa? Está centralizado?`,
      gabarito: `O checklist completo tem quatro itens: 1) modelo limpo, 2) sem faces escondidas, 3) escala certa, 4) centralizado. Cada item marcado deve corresponder a uma ação feita no Maya.`,
    },
    {
      titulo: `Caça à face escondida`,
      tipo: `Mão na massa`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como girar o modelo com o botão do meio do mouse e entrar no modo de face (botão direito segurado, depois "Face"). Circule ajudando a selecionar antes de apertar Delete.`,
      atividade: `Gire o seu item, encontre pelo menos uma face escondida lá dentro, selecione essa face e aperte Delete para apagar.`,
      gabarito: `O aluno deve ter selecionado uma face que fica dentro do modelo e apagado com Delete, deixando o item mais leve. Se apagar a peça inteira sem querer, é só usar Control mais Z e tentar de novo.`,
    },
    {
      titulo: `Tamanho certo`,
      tipo: `Conferência de números`,
      tempo: `6 minutos`,
      guiaProfessor: `Abra o Channel Box com a turma e mostre os campos Scale X, Y e Z. Explique que números muito grandes ou muito pequenos deixam o item fora do tamanho esperado pela loja.`,
      atividade: `Selecione o seu item, olhe os números de Scale no Channel Box e ajuste se ele estiver gigante ou minúsculo. Compare com o exemplo arrumado.`,
      gabarito: `A escala deve ficar coerente com o exemplo arrumado mostrado pelo professor. Não existe um número mágico único, mas o item não pode estar absurdamente maior nem menor que o modelo de referência.`,
    },
    {
      titulo: `Centralizar e fechar a vitrine`,
      tipo: `Desafio final`,
      tempo: `9 minutos`,
      guiaProfessor: `Acompanhe cada aluno usando Modify, depois Center Pivot, e zerando Translate X, Y e Z no Channel Box. Ao final, peça que mostrem o "antes e depois" no projetor.`,
      atividade: `Use Modify e Center Pivot para arrumar o pivô do seu item. Depois digite 0 em Translate X, Y e Z para deixá-lo bem no centro. Mostre o resultado para a turma.`,
      gabarito: `O item deve estar com o pivô no centro (após Center Pivot) e com Translate X, Y e Z em zero, ficando posicionado no meio do mundo. O modelo final precisa passar nos quatro itens do Checklist da Vitrine.`,
    },
  ],
};
