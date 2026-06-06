import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Cores e Acabamento Caprichado",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Pintar partes diferentes do item com cores distintas e ajustar o brilho para deixar o visual mais bonito e bem acabado.`,
  descricao: `Na aula passada as crianças descobriram o que são materiais e colocaram a primeira cor no item delas. Hoje a missão é caprichar de verdade: separar o item em partes, pintar cada parte com a cor certa e mexer no brilho para que o objeto pareça de plástico, de metal ou bem fosco. É a aula do acabamento, aquele toque final que faz o item parecer profissional, igual aos que aparecem na loja do Roblox.

A grande novidade técnica é o modo de edição com seleção de faces. Quando o item tem só um material, ele fica todo de uma cor só. Mas a maioria dos objetos legais tem mais de uma cor — pense numa espada com a lâmina prateada e o cabo marrom, ou num chapéu com a copa azul e a fita vermelha. Para conseguir isso no Blender, a criança vai aprender a selecionar só algumas faces do objeto, criar um segundo material (um segundo "potinho de tinta") e aplicar (botão Assign) só naquela parte. É um conceito poderoso e as crianças adoram ver a cor pular exatamente onde elas escolheram.

O outro foco é o brilho. No painel de materiais existe um controle chamado Roughness (rugosidade). Quando ele está baixo, perto de zero, a superfície fica lisa e brilhante como um carro novo. Quando está alto, perto de um, fica fosca e opaca como um papelão. Mexer nesse controle muda completamente a sensação do material sem trocar a cor. As crianças vão experimentar os dois extremos e escolher o acabamento que combina com o item delas.

No fim, cada aluno faz a comparação do antes e depois: a versão cinza sem cor do começo do mês contra a versão colorida e brilhante de hoje. Esse momento de comparar é importante para a criança perceber o quanto o trabalho dela evoluiu e sentir orgulho do acabamento caprichado.`,
  materiais: [
    `Computadores com o Blender já aberto e o item de cada aluno (arquivo salvo da Aula 2) carregado`,
    `Projetor ligado para o professor demonstrar a seleção de faces e a criação do segundo material`,
    `Dois exemplos prontos do mesmo item: um com cor única e outro com várias cores e brilho ajustado, para mostrar o antes e o depois`,
    `Cartão impresso com a "régua do brilho": Roughness 0 (espelho brilhante) até Roughness 1 (bem fosco)`,
    `Cartões de cores com bolinhas coloridas para as crianças escolherem a paleta do item`,
    `Fones de ouvido opcionais e mouse com roda funcionando bem (a roda ajuda a girar e dar zoom)`,
  ],
  conceitosChave: [
    `Modo de Edição (Edit Mode) — o modo do Blender onde você pode escolher partes do objeto, ligado com a tecla Tab.`,
    `Face — cada "lado" ou pedacinho plano da superfície do objeto, como um azulejo na parede.`,
    `Selecionar faces — clicar para escolher só os pedacinhos que você quer pintar, deixando o resto de fora.`,
    `Slot de material — o "potinho de tinta" que guarda uma cor; um objeto pode ter vários potinhos.`,
    `Assign (Aplicar) — o botão que joga a tinta do potinho escolhido nas faces que você selecionou.`,
    `Base Color — a cor principal do material, a cor que você enxerga primeiro.`,
    `Roughness (Rugosidade) — o controle do brilho: baixo deixa liso e brilhante, alto deixa fosco e sem brilho.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista no Blender. Precisa dominar quatro gestos simples: entrar no Modo de Edição (tecla Tab), trocar para seleção de faces (tecla 3), criar um segundo slot de material e usar o botão Assign. O painel onde tudo acontece é o de materiais, à direita da tela, no ícone de uma bolinha xadrez vermelha e branca (Material Properties). Faça o item de exemplo em casa uma vez antes da aula; bastam dez minutos e você se sente seguro. Lembre que cada criança parte do arquivo que já salvou, então o item já existe e já tem uma cor.

## Passo a passo da aula

Aquecimento (10 min): peça que todos abram o arquivo salvo e girem o item com o botão do meio do mouse. Mostre no projetor os dois exemplos lado a lado, o de cor única e o caprichado, e pergunte "qual vocês acham mais bonito e por quê?". Anote no quadro as palavras que surgirem (brilhante, fosco, colorido).

Conteúdo novo guiado (15 min): no projetor, com o objeto selecionado, aperte Tab para entrar no Modo de Edição. Aperte a tecla 3 para ativar seleção de faces. Clique numa face; segure Shift e clique em outras para somar. Vá ao painel Material Properties, clique no botão de mais (+) ao lado da lista de slots para criar um segundo slot, depois em New. Mude a Base Color desse novo material clicando na barra de cor. Com as faces ainda selecionadas, clique no botão Assign. A cor pula só para aquelas faces. Em seguida mostre o controle Roughness logo abaixo da cor: arraste de 0 a 1 e deixe que vejam o brilho mudar.

Mão na massa (25 min): cada criança escolhe duas ou três partes do item e pinta cada uma com uma cor da paleta que selecionou nos cartões. Circule pela sala. O ritmo certo é uma cor de cada vez: seleciona faces, cria ou escolhe o slot, troca a cor, aperta Assign. Depois de colorir, cada um ajusta o Roughness de pelo menos um material para mais brilhante ou mais fosco. Lembre todos de apertar Tab para voltar ao Modo Objeto e salvar com Ctrl S.

Desafio e compartilhar (10 min): peça que cada aluno deixe o item girando devagar na tela e mostre o antes (foto do começo do mês no projetor, se tiver) e o depois. Cada criança diz em uma frase qual acabamento escolheu e por quê.

## Como explicar para crianças

Use a analogia do potinho de tinta: "cada cor mora num potinho diferente; para pintar, você primeiro escolhe quais pedacinhos quer pintar, depois molha o pincel no potinho certo e aperta Aplicar". Para o brilho, use a régua: "Roughness pertinho de zero é igual a um carro recém lavado, brilha; pertinho de um é igual a uma caixa de papelão, sem brilho nenhum". Para a seleção de faces, diga que o objeto é coberto de azulejos e que eles vão escolher quais azulejos pintar. Mantenha o vocabulário simples mas use os nomes reais dos botões, porque as crianças gostam de saber o nome de verdade.

## Erros comuns e como ajudar

O erro mais comum é apertar Assign sem ter selecionado nenhuma face: nada acontece e a criança acha que quebrou. Peça para clicar de novo numa face até ela ficar laranja e tentar outra vez. O segundo erro é esquecer de entrar no Modo de Edição; se a tecla 3 não mostrar faces, é porque está no Modo Objeto, então aperte Tab primeiro. O terceiro é criar muitos slots iguais sem querer; mostre como apagar um slot extra com o botão de menos. Por último, alguns esquecem de apertar Assign depois de trocar a cor e ficam confusos porque nada muda: relembre que trocar a cor do material não basta, é preciso Aplicar nas faces escolhidas. Salve sempre no fim com Ctrl S.`,
  exercicios: [
    {
      titulo: `Caça aos botões do acabamento`,
      tipo: `Reconhecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no projetor e peça que apontem na própria tela. É só localizar, ainda sem pintar. Confirme que todos acharam o painel certo antes de seguir.`,
      atividade: `Encontre no Blender: o ícone do painel Material Properties (a bolinha xadrez vermelha e branca), a barra da Base Color e o controle Roughness. Aponte cada um para o colega do lado.`,
      gabarito: `O painel Material Properties fica na coluna de ícones à direita, com a bolinha xadrez. A Base Color é a barra colorida grande no topo do material. O Roughness é o controle deslizante logo abaixo da cor, que vai de 0 a 1.`,
    },
    {
      titulo: `Entrando no Modo de Edição`,
      tipo: `Prática individual`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que o item esteja selecionado (contorno laranja) antes de apertar Tab. Quem não vê faces destacadas provavelmente esqueceu de apertar a tecla 3.`,
      atividade: `Selecione o seu item, aperte Tab para entrar no Modo de Edição e aperte a tecla 3 para ativar a seleção de faces. Clique numa face e veja ela ficar laranja.`,
      gabarito: `Com o item selecionado, Tab entra no Modo de Edição; a tecla 3 muda para seleção de faces; ao clicar numa face ela fica destacada em laranja. Para voltar, aperta-se Tab de novo e retorna ao Modo Objeto.`,
    },
    {
      titulo: `Minha segunda cor`,
      tipo: `Mão na massa`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe a ordem certa: selecionar faces, criar slot com o (+) e New, trocar a Base Color, apertar Assign. O erro clássico é esquecer o Assign; pergunte sempre "você apertou Aplicar?".`,
      atividade: `No Modo de Edição, selecione algumas faces de uma parte do item. Crie um segundo slot de material com o botão (+) e depois New. Escolha uma cor nova na Base Color e aperte Assign.`,
      gabarito: `As faces selecionadas ficam com a cor nova e o resto do item continua com a cor antiga. Isso prova que o segundo material foi criado e aplicado só onde a criança escolheu. Se nada mudou, faltou selecionar faces ou faltou apertar Assign.`,
    },
    {
      titulo: `Brilhante ou fosco?`,
      tipo: `Experimento comparativo`,
      tempo: `7 minutos`,
      guiaProfessor: `Incentive a arrastar o Roughness até os dois extremos antes de decidir. Use a régua impressa do brilho como apoio visual. Peça que justifiquem a escolha.`,
      atividade: `Escolha um dos materiais do seu item. Arraste o Roughness para perto de 0 e observe; depois arraste para perto de 1. Decida qual acabamento combina mais com a sua parte e deixe nesse valor.`,
      gabarito: `Roughness perto de 0 deixa a superfície lisa e brilhante (tipo metal ou plástico polido); perto de 1 deixa fosca e opaca (tipo borracha ou papelão). Não há resposta única: o aluno deve escolher e explicar por que aquele acabamento combina com a parte que pintou.`,
    },
    {
      titulo: `Antes e depois caprichado`,
      tipo: `Desafio e apresentação`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que voltem ao Modo Objeto com Tab e salvem com Ctrl S antes de apresentar. Estimule comparar com a versão cinza do início do mês. Valorize cada escolha de cor e brilho.`,
      atividade: `Termine de colorir o item com pelo menos duas cores diferentes e um brilho ajustado. Volte ao Modo Objeto, salve com Ctrl S e mostre para a turma o antes (cinza) e o depois (colorido). Diga em uma frase qual foi a sua escolha favorita.`,
      gabarito: `O item finalizado deve ter no mínimo dois materiais com cores distintas aplicados com Assign e pelo menos um Roughness ajustado de propósito. A criança consegue apontar a diferença entre a versão cinza inicial e a colorida atual e nomear sua escolha favorita (uma cor ou um acabamento). Arquivo salvo com Ctrl S.`,
    },
  ],
};
