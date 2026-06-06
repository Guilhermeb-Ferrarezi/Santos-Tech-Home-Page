import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Conhecendo o MagicaVoxel",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ter o primeiro contato com o MagicaVoxel, entendendo o que é um voxel e aprendendo a girar a câmera, adicionar e apagar cubos para montar uma forma bem simples sem medo do programa.`,
  descricao: `Nesta aula a criança abre o MagicaVoxel pela primeira vez e descobre o segredo por trás de muitos itens da loja do Roblox: tudo é feito de cubinhos mágicos chamados voxels. A palavra "voxel" é só uma mistura de "volume" com "pixel", ou seja, é um pixel que tem três dimensões, um cubinho de verdade que ocupa espaço. Se o pixel é o quadradinho que forma as fotos na tela, o voxel é o cubinho que forma os objetos no mundo 3D. Construir com voxels é igual a brincar de montar com peças de encaixe ou com aqueles bloquinhos de plástico: a gente vai empilhando cubinho por cubinho até a forma aparecer.

O foco do dia não é fazer um item bonito, e sim perder o medo da tela. O MagicaVoxel tem muitos botões e, para um adulto iniciante, a primeira impressão pode assustar. Por isso a aula é bem guiada: o professor mostra no projetor cada passo e as crianças repetem no computador delas. Três habilidades são treinadas: girar a câmera ao redor do objeto (para ver de todos os lados), adicionar cubos clicando no ar e apagar cubos que ficaram errados. São os três superpoderes básicos de qualquer criador de voxel.

A grande analogia da aula é a "caixa de areia mágica". A área de trabalho do MagicaVoxel é uma caixa quadrada onde os cubinhos vão aparecendo. A câmera é como se fosse o pescoço da criança: ela pode girar a cabeça para olhar a caixa por cima, por baixo ou de lado, mas a caixa em si fica parada. Entender essa diferença (a câmera gira, o objeto não) é o ponto mais importante do dia e evita muita confusão.

No fim, cada aluno terá montado uma forma simples, como uma escadinha, uma letra ou uma torre de poucos cubos. Não precisa ser perfeito. O objetivo é que a criança saia da aula falando "eu sei mexer no MagicaVoxel!" e animada para, nas próximas aulas, construir e pintar o item que vai pra loja.`,
  materiais: [
    `Computadores com o MagicaVoxel já instalado e aberto numa cena nova (vazia ou com o cubo de exemplo apagado)`,
    `Projetor ou TV grande ligado no computador do professor para demonstrar cada passo`,
    `Exemplos prontos de itens voxel simples para mostrar (uma maçã, uma espada, um coração feitos de cubinhos)`,
    `Um objeto físico de montar (bloquinhos de encaixe ou cubos de madeira) para a analogia inicial`,
    `Mouse com rodinha (scroll) para cada aluno, pois facilita muito girar e dar zoom`,
    `Folha impressa com o "mapa dos 3 superpoderes": girar, adicionar e apagar`,
    `Adesivos ou carimbo para premiar quem terminar a forma simples`,
  ],
  conceitosChave: [
    `Voxel — é um cubinho mágico em 3D; junte muitos voxels e você forma qualquer objeto, como montar com peças de encaixe.`,
    `Pixel x Voxel — o pixel é o quadradinho chato das fotos; o voxel é o cubinho gordinho que ocupa espaço de verdade.`,
    `Câmera — são os "olhos" que giram em volta do objeto; quando você gira a câmera, o cubo fica parado e você é que dá a volta nele.`,
    `Viewport — é a tela grande do meio, a "caixa de areia mágica" onde os cubinhos aparecem e você constrói.`,
    `Ferramenta Attach (adicionar) — o pincel que coloca cubinhos novos quando você clica.`,
    `Ferramenta Erase (apagar) — a borracha que tira cubinhos errados quando você clica neles.`,
    `Zoom — chegar perto ou longe do objeto girando a rodinha do mouse, como se você desse passos pra frente ou pra trás.`,
  ],
  treinamento: `## O que o professor precisa saber

O MagicaVoxel é um programa gratuito de modelagem em voxels. Você não precisa ser especialista: nesta aula só usamos três ações. No centro da tela fica a "viewport" (a caixa de construção). À esquerda há a paleta de cores e os botões de ferramenta. As três ferramentas que importam hoje ficam numa barrinha: "Attach" (adicionar cubo), "Erase" (apagar cubo) e "Paint" (pintar, que veremos só na próxima semana). Antes da aula, abra o programa em cada máquina e apague o cubo de exemplo (selecione a ferramenta Erase e clique nele, ou use uma cena nova). Teste girar a câmera você mesmo: segure o botão direito do mouse e arraste; a câmera dá a volta. A rodinha do mouse dá zoom. Decore esses dois movimentos, pois você vai repeti-los muito.

## Passo a passo da aula (10/15/25/10)

Aquecimento (10 min): mostre os bloquinhos de encaixe na mão e pergunte "como vocês acham que fazem itens no Roblox?". Mostre no projetor os exemplos prontos (maçã, espada, coração) e dê o zoom até aparecerem os cubinhos. Diga a frase mágica: "cada item é feito de cubinhos chamados voxels". Compare pixel (foto chapada) com voxel (cubinho gordo).

Conteúdo novo guiado (15 min): no projetor, abra o MagicaVoxel. Mostre a viewport e diga que é a "caixa de areia mágica". Ensine o superpoder 1, girar a câmera: segure o botão direito do mouse e arraste devagar; a caixa gira na tela. Mostre o zoom com a rodinha. Repita três vezes bem devagar. Agora o superpoder 2, adicionar: clique na ferramenta "Attach" na barra de ferramentas e clique na viewport para colocar um cubinho; clique em cima do cubo para empilhar outro. Superpoder 3, apagar: clique na ferramenta "Erase" e clique num cubo para sumir com ele.

Mão na massa (25 min): peça que cada aluno gire a câmera 5 vezes só para treinar os olhos. Depois, todos colocam 3 cubos em linha (Attach), apagam o do meio (Erase) e colocam de volta. Por fim, o desafio guiado: montar uma escadinha de 3 degraus (1 cubo, 2 cubos em cima ao lado, 3 cubos). Circule pela sala ajudando quem trocou a ferramenta sem querer.

Desafio + compartilhar (10 min): cada um gira a própria escadinha para mostrar aos colegas que ela é 3D de verdade. Quem quiser, transforma a escadinha numa torre ou numa letra. Premie com adesivo quem mexeu nos três superpoderes.

## Como explicar para crianças

Use sempre a analogia dos bloquinhos: "o MagicaVoxel é um balde de cubinhos mágicos que nunca acaba". Para a câmera, diga "a caixa fica parada; quem gira é você, igual quando você anda em volta da mesa pra ver o bolo de todos os lados". Para adicionar e apagar, chame de "pincel que cria" e "borracha que some". Repita os nomes dos superpoderes em voz alta junto com a turma. Fale devagar e mostre na tela grande ANTES de cada criança tentar. Comemore os erros: "errou? Ótimo, é só usar a borracha!".

## Erros comuns e como ajudar

O erro número 1 é a criança achar que o objeto se mexe sozinho e ficar tonta. Reforce: "a câmera gira, o cubo fica quieto". O erro 2 é continuar com a ferramenta Erase ligada e apagar tudo quando queria construir; sempre confira qual ferramenta está acesa e mostre como voltar para Attach. O erro 3 é clicar com pressa e empilhar cubos no lugar errado; peça calma e ensine a apagar e refazer. O erro 4 é dar zoom demais e "se perder dentro do cubo"; ensine a girar a rodinha para trás até a caixa aparecer de novo. O erro 5 é o medo de errar e travar; lembre que ninguém quebra o programa e que apagar é fácil. Tenha paciência: ao fim da aula, todos saem sabendo girar, adicionar e apagar.`,
  exercicios: [
    {
      titulo: `Pixel ou Voxel?`,
      tipo: `Pergunta e resposta oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor uma foto comum bem ampliada (aparecendo os quadradinhos) e depois um item voxel ampliado (aparecendo os cubinhos). Pergunte à turma qual é qual e por quê.`,
      atividade: `Olhe as duas imagens na tela. Aponte qual é feita de pixels (quadradinhos chatos) e qual é feita de voxels (cubinhos gordos). Explique com suas palavras a diferença.`,
      gabarito: `A foto ampliada é feita de pixels: quadradinhos planos, sem volume, que só formam imagens na tela. O item do Roblox é feito de voxels: cubinhos em 3D que ocupam espaço de verdade. A diferença é que o pixel é chato (2D) e o voxel é um cubo (3D). Voxel vem de "volume" + "pixel".`,
    },
    {
      titulo: `Treino dos olhos: girar a câmera`,
      tipo: `Prática individual no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que há pelo menos um cubo na viewport para servir de referência. Demonstre no projetor segurando o botão direito do mouse e arrastando. Peça que cada aluno gire devagar e observe que o cubo não muda, só o ponto de vista.`,
      atividade: `Segure o botão direito do mouse e arraste para girar a câmera ao redor do cubo. Dê uma volta completa olhando o cubo por cima, por baixo e dos lados. Depois use a rodinha do mouse para chegar perto (zoom) e voltar.`,
      gabarito: `O aluno consegue girar a câmera segurando o botão direito e arrastando, vendo o mesmo cubo de vários ângulos. Ele percebe e consegue dizer que o cubo ficou parado e quem se moveu foi a câmera (os olhos). O zoom com a rodinha aproxima e afasta a visão sem mudar o cubo.`,
    },
    {
      titulo: `Adicionar e apagar`,
      tipo: `Prática guiada no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre a barra de ferramentas e onde ficam "Attach" e "Erase". Avise que é fácil esquecer a borracha ligada. Acompanhe se cada criança troca de ferramenta corretamente antes de clicar.`,
      atividade: `Escolha a ferramenta Attach e coloque 3 cubinhos em linha, um do lado do outro. Agora troque para a ferramenta Erase e apague o cubinho do meio. Por último, volte para Attach e coloque o cubinho do meio de novo.`,
      gabarito: `O aluno cria 3 cubos em linha com Attach, apaga o do meio com Erase (ficando 2 cubos com um buraco no meio) e recoloca o cubo central voltando para Attach, deixando de novo os 3 cubos. O ponto-chave é ter trocado de ferramenta corretamente entre adicionar e apagar.`,
    },
    {
      titulo: `Minha escadinha de 3 degraus`,
      tipo: `Desafio de construção`,
      tempo: `10 minutos`,
      guiaProfessor: `Desenhe a escadinha no quadro ou mostre o passo a passo no projetor: degrau 1 com 1 cubo, degrau 2 com 2 cubos, degrau 3 com 3 cubos, em formato de escada. Circule ajudando quem empilhar no lugar errado a usar a borracha e refazer.`,
      atividade: `Construa uma escadinha de 3 degraus usando só a ferramenta Attach. Primeiro degrau: 1 cubo. Segundo degrau: suba e coloque 2 cubos formando o próximo nível. Terceiro degrau: 3 cubos no nível de cima. Se errar, use a borracha (Erase) e tente de novo.`,
      gabarito: `Uma escadinha em que cada degrau fica mais alto que o anterior, subindo como degraus de verdade (1, 2 e 3 cubos por nível, ou formato parecido). Não precisa ser perfeita: o objetivo é empilhar cubos em alturas diferentes usando Attach e corrigir erros com Erase, mostrando domínio dos três superpoderes.`,
    },
    {
      titulo: `Mostra que é 3D de verdade`,
      tipo: `Apresentação e desafio criativo`,
      tempo: `9 minutos`,
      guiaProfessor: `Cada aluno gira a própria construção para a turma ver que ela tem volume. Incentive quem terminou rápido a transformar a escadinha em uma torre ou na primeira letra do nome. Peça que expliquem qual superpoder usaram mais.`,
      atividade: `Gire a câmera para mostrar a sua escadinha de todos os lados e prove que ela é 3D. Se quiser um desafio extra, transforme a escadinha numa torre alta ou na primeira letra do seu nome, adicionando e apagando cubos.`,
      gabarito: `O aluno gira a câmera com o botão direito e mostra a construção por vários ângulos, evidenciando que tem volume (3D). No desafio extra, ele modifica a forma (vira torre ou letra) usando Attach e Erase e consegue dizer qual superpoder usou: girar a câmera, adicionar ou apagar. Qualquer construção 3D apresentada com a câmera girando é considerada correta.`,
    },
  ],
};
