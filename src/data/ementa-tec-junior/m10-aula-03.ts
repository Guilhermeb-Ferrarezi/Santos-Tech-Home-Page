import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Peças Mágicas no Mundo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança sai sabendo colocar peças (bloco, esfera e cilindro) no terreno e mover, aumentar e diminuir cada peça arrastando com o mouse para empilhar uma casinha ou torre simples.`,
  descricao: `Nesta aula as crianças descobrem que todo mundo do Roblox é feito de peças. No Roblox Studio, essas peças se chamam "Parts" e vêm em formatos diferentes: bloco (caixa), esfera (bola) e cilindro (canudo ou rolinho). Aprender a colocar uma peça no terreno é como abrir a caixa de blocos de montar: a partir daqui a criança vira construtora do próprio mundo.

Depois de colocar a peça, a criança aprende três superpoderes do mouse. O primeiro é mover (arrastar a peça para outro lugar do terreno). O segundo é aumentar e diminuir (esticar e encolher a peça puxando os pontinhos que aparecem ao redor dela). O terceiro é empilhar (colocar uma peça em cima da outra para crescer para o alto). Com esses três movimentos simples já dá para construir muita coisa.

O assunto importa porque é a base de tudo que vem depois na trilha. Quem sabe colocar, mover e redimensionar peças consegue construir paredes, torres, pontes e, mais para frente, fases de jogo. Hoje a meta é concreta e divertida: cada criança empilha alguns blocos para fazer uma casinha bem simples (quatro paredes ou uma torre alta) e descobre que mexer no tamanho das peças muda tudo.

Ao final, as crianças compartilham suas construções e percebem que, mesmo usando as mesmas peças, cada mundo ficou diferente. Essa descoberta planta a ideia de autoria: o mundo é meu, eu que construí.`,
  materiais: [
    `Computadores (um por criança ou dupla) com o Roblox Studio já aberto e um terreno simples carregado (Baseplate ou o terreno da Aula 2).`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo na tela grande.`,
    `Mouse de verdade em cada computador (arrastar é muito mais fácil com mouse do que com touchpad).`,
    `Um arquivo de exemplo já pronto com uma casinha e uma torre simples, para mostrar a meta antes de começar.`,
    `Blocos de montar físicos (Lego, Mega Blocks ou cubos de madeira) para a explicação inicial e para o exercício de papel.`,
    `Folhas de papel quadriculado e lápis de cor para o exercício de desenho.`,
    `Cartões com as figuras bloco, esfera e cilindro impressos para o jogo de reconhecimento.`,
  ],
  conceitosChave: [
    `Peça (Part) — cada pedacinho que monta o mundo do Roblox, como uma peça da caixa de montar.`,
    `Bloco — a peça em formato de caixa quadrada, boa para paredes e chão.`,
    `Esfera — a peça em formato de bolinha, que rola e fica redondinha.`,
    `Cilindro — a peça em formato de canudo ou rolinho, boa para colunas e troncos.`,
    `Mover — arrastar a peça com o mouse para levá-la a outro lugar do terreno.`,
    `Redimensionar — puxar os pontinhos da peça para deixá-la maior ou menor.`,
    `Empilhar — colocar uma peça em cima da outra para a construção crescer para o alto.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

No Roblox Studio, tudo no mundo é feito de objetos chamados "Parts" (peças). Você adiciona peças pela aba "Home" (Início), no topo da tela. Lá existe o botão "Part" com uma setinha embaixo: clicar na seta abre os formatos Block (bloco), Sphere (esfera), Wedge (rampa) e Cylinder (cilindro). Para esta aula, use só Block, Sphere e Cylinder. Quando você clica, a peça aparece no meio do terreno.

Para mexer nas peças, existem ferramentas na aba "Home": "Select" (selecionar, a seta), "Move" (mover, setas coloridas), "Scale" (escalar/redimensionar, bolinhas) e "Rotate" (girar). Hoje usamos Move e Scale. Ao selecionar uma peça com a ferramenta Move, aparecem três setas coloridas (vermelha, verde, azul). Arrastando a seta verde a peça sobe e desce; vermelha e azul movem para os lados. Com a ferramenta Scale aparecem bolinhas nas pontas; arrastando uma bolinha a peça estica ou encolhe.

Dica importante: ative o botão "Collisions" desligado pode atrapalhar; deixe como veio. Para empilhar fácil, mantenha o "Snap to Grid" (encaixe na grade) ligado na aba "Model" (Modelo), com "Move" e "Rotate" marcados. Isso faz as peças andarem em passinhos certinhos e encaixarem como Lego. Salve o jogo de exemplo antes da aula (File, Save).

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento: mostre os blocos de montar físicos. Pergunte "o que dá para construir com essas peças?". Empilhe alguns na frente da turma. Diga que hoje vão montar igualzinho, mas dentro do computador. Mostre no projetor a casinha e a torre do arquivo de exemplo: "vamos chegar aqui".

15 min, conteúdo novo guiado: no projetor, abra a aba "Home". Clique na seta embaixo de "Part" e escolha "Block". A peça aparece. Mostre a ferramenta "Move" e arraste a seta verde para cima e para baixo. Depois mostre "Scale" e estique uma bolinha. Adicione uma "Sphere" e um "Cylinder" para a turma ver os três formatos. Faça tudo bem devagar, nomeando cada botão em voz alta.

25 min, mão na massa: cada criança coloca um bloco, move e redimensiona. Depois coloca mais blocos e empilha para fazer quatro paredes (casinha) ou uma torre alta. Circule pela sala ajudando a clicar no lugar certo. Incentive trocar de formato: uma esfera no topo da torre, um cilindro como coluna.

10 min, desafio e compartilhar: desafio "deixe uma peça GIGANTE e uma peça BEBÊ no seu mundo" usando o Scale. Depois cada criança gira a tela e mostra a construção para os colegas em uma rodinha rápida.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame as peças de "blocos mágicos de montar do computador". Para o bloco, diga "caixa"; para a esfera, "bolinha"; para o cilindro, "canudo" ou "rolinho". Mover é "pegar no colo e levar para outro lugar". Redimensionar com o Scale é "comida que cresce e encolhe": puxa para fora cresce, empurra para dentro encolhe. Empilhar é "fazer um bolo de andares". A seta verde do Move é o "elevador" que sobe e desce a peça.

## Erros comuns e como ajudar

A criança clica em "Part" e nada acontece, ou coloca várias peças sem querer: peça para clicar uma vez só e mostre que a peça nasce no meio. Ela arrasta o terreno inteiro em vez da peça: confira se a peça está selecionada (fica com borda) e se a ferramenta certa, Move ou Scale, está ligada. As peças atravessam umas às outras: explique que está tudo bem agora, é só aproximar até encostar. A peça some para fora da tela: ensine a rolar o scroll do mouse para afastar a câmera e o botão direito para girar a visão. Frustração ao empilhar torto: ligue o "Snap to Grid" para encaixar certinho.`,
  exercicios: [
    {
      titulo: `Caça aos Formatos`,
      tipo: `jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `O professor mostra os cartões com bloco, esfera e cilindro e relembra os apelidos (caixa, bolinha, canudo). Em seguida abre o Roblox Studio no projetor e adiciona um formato por vez, escondendo o nome.`,
      atividade: `O professor adiciona uma peça na tela grande. As crianças gritam o apelido do formato: "caixa!", "bolinha!" ou "canudo!". Faça umas seis rodadas, misturando os três formatos.`,
      gabarito: `Acertou quem identifica os três formatos: bloco igual a caixa, esfera igual a bolinha, cilindro igual a canudo ou rolinho. A turma deve nomear corretamente pelo menos quatro das seis peças mostradas.`,
    },
    {
      titulo: `Minha Primeira Peça`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `O professor demonstra no projetor uma vez: clicar na seta de "Part", escolher "Block", e depois usar a ferramenta "Move" para arrastar a peça. Só então libera as crianças para repetir no próprio computador.`,
      atividade: `Cada criança coloca um bloco no terreno, usa a ferramenta Move (setas coloridas) para arrastar a peça para um canto diferente e depois traz a peça de volta para o meio.`,
      gabarito: `Acertou quem conseguiu fazer um bloco aparecer e moveu ele de lugar pelo menos uma vez. O professor confere vendo a peça nova no terreno e a criança arrastando a seta verde ou vermelha.`,
    },
    {
      titulo: `Gigante e Bebê`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `O professor mostra a ferramenta "Scale" (as bolinhas nas pontas) e a analogia da comida que cresce e encolhe. Demonstra esticar uma peça bem grande e encolher outra bem pequena.`,
      atividade: `Cada criança coloca duas peças. Usando o Scale, deixa uma peça GIGANTE (bem esticada) e a outra BEBÊ (bem pequenininha). Pode escolher qualquer formato.`,
      gabarito: `Acertou quem tem no terreno uma peça claramente grande e outra claramente pequena, feitas com a ferramenta Scale. A diferença de tamanho deve ser visível na tela.`,
    },
    {
      titulo: `Casinha de Papel`,
      tipo: `desenho/papel`,
      tempo: `12 minutos`,
      guiaProfessor: `O professor distribui papel quadriculado e lápis de cor. Explica que vão planejar no papel a casinha ou torre que querem construir no computador, desenhando os blocos empilhados.`,
      atividade: `Cada criança desenha no papel quadriculado a construção que vai fazer: uma casinha com quatro paredes ou uma torre alta. Deve mostrar os blocos empilhados e pode colorir.`,
      gabarito: `Acertou quem desenhou pelo menos três peças empilhadas ou quatro paredes formando uma casinha. Não importa a beleza; importa mostrar peças encaixadas umas nas outras formando uma construção.`,
    },
    {
      titulo: `Construtor do Meu Mundo`,
      tipo: `prática na ferramenta`,
      tempo: `15 minutos`,
      guiaProfessor: `O professor relembra os três superpoderes: colocar, mover e redimensionar. Mostra rapidinho como empilhar uma peça em cima da outra usando a seta verde do Move. Sugere usar o plano da Casinha de Papel.`,
      atividade: `Cada criança constrói no Roblox Studio a casinha ou a torre que planejou: coloca vários blocos, empilha pelo menos três, e usa pelo menos um formato diferente (esfera ou cilindro) como enfeite. No fim, mostra a construção para a turma na rodinha.`,
      gabarito: `Acertou quem montou uma construção com pelo menos três peças empilhadas e usou pelo menos um formato diferente do bloco. O professor confirma vendo a casinha ou torre em pé no terreno e a criança apresentando para os colegas.`,
    },
  ],
};
