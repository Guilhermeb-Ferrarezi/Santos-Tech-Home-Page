import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "No lugar perfeito",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ajustar com precisão a altura, o alinhamento com o baseplate e ancorar o modelo próprio para que ele fique parado e firme no lugar certo, pronto para receber o cenário ao redor.`,
  descricao: `Nas aulas anteriores a turma trouxe o modelo do Blender para dentro do Roblox Studio e aprendeu a mover, girar e mudar o tamanho dele. Hoje a missão é deixar a peça no lugar perfeito de verdade: nem flutuando no ar como um balão, nem afundada no chão como um navio. É a aula do "ajuste fino", aquele cuidado de relojoeiro em que a gente mexe pouquinho de cada vez até tudo ficar encaixado e bonito.

O baseplate é o grande piso cinza quadriculado que aparece quando abrimos um lugar novo no Roblox. Ele funciona como o nosso chão, a nossa mesa de trabalho. O segredo desta aula é fazer o modelo "tocar" esse chão de forma certinha: a base do modelo encostando no piso, sem buraco embaixo e sem nenhum pedacinho enterrado. Para isso vamos olhar a posição pela frente e pelos lados, usar a câmera para girar em volta e conferir de todos os ângulos, como quem dá a volta numa estátua na praça.

Depois de posicionar, vem a parte mais importante de todas: travar a peça no lugar. No Roblox, peças soltas caem e escorregam quando o jogo começa, porque o jogo tem gravidade de verdade. Para a criação ficar firme, a gente usa o Anchor (âncora), que é como pregar o objeto no chão para ele nunca mais se mexer sozinho. E quando o modelo tem vários pedaços, juntamos tudo num Model (grupo), para que ele ande sempre junto, como peças coladas numa caixa.

Ao final da aula, cada criança terá o seu modelo parado, firme, encostando certinho no baseplate e ancorado. Quando apertarmos o botão Play para testar, o modelo continuará exatamente onde foi colocado, sem cair nem deslizar. Esse modelo bem posicionado é a base de toda a próxima aula, quando começaremos a construir o cenário ao redor dele.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o lugar (place) de cada criança com o modelo próprio já importado`,
    `Projetor ou TV grande para o professor demonstrar cada passo na tela grande`,
    `Um exemplo pronto do professor: uma cena com um modelo flutuando, outro afundado e um terceiro no lugar perfeito, para comparar`,
    `Cartão-lembrete impresso com os três passos do dia: "Encostar no chão / Ancorar / Agrupar"`,
    `Mouse com roda (scroll) em cada computador, importante para girar a câmera e dar zoom`,
    `Adesivos de "Mestre da Âncora" para premiar quem deixar o modelo firme e no lugar`,
  ],
  conceitosChave: [
    `Baseplate — o grande piso cinza quadriculado do Roblox; é o nosso chão e a nossa mesa de trabalho.`,
    `Posição (altura) — onde a peça está parada; a altura diz se ela está em cima, no chão ou enterrada.`,
    `Flutuar — quando o modelo fica boiando no ar, com um buraco entre a base dele e o chão.`,
    `Afundar — quando parte do modelo entra dentro do piso, como um pé enterrado na areia.`,
    `Anchor (âncora) — pregar a peça no lugar para ela não cair nem escorregar quando o jogo começa.`,
    `Model (grupo) — juntar vários pedaços num pacote só, para que andem sempre juntos.`,
    `Câmera — o nosso olhar dentro do jogo; girando a câmera vemos o modelo por todos os lados.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox para dar esta aula; basta seguir estes passos com calma. Tudo acontece dentro do Roblox Studio, com o modelo de cada criança já importado das aulas anteriores. Deixe os lugares (places) abertos antes de a aula começar.

Quatro ferramentas resolvem a aula. No topo, na aba "Home" (ou "Model"), ficam os botões de transformação: "Move" (mover, com setas), "Rotate" (girar) e "Scale" (tamanho). Para o ajuste fino de altura, use o "Move": clique no modelo, segure a seta verde (que aponta para cima e para baixo) e arraste pouquinho. A seta verde é sempre a altura; a vermelha e a azul são os lados. Para travar, use o botão "Anchor" (um cadeado/âncora) na aba "Model". Para juntar pedaços, selecione tudo e aperte "Group" (agrupar), que vira um "Model".

Há um truque que ajuda muito: ligue o "Snap to Grid" (encaixe na grade), na aba "Model", em "Move" com um valor pequeno como 0.5 ou 1. Assim o modelo "pula" de pouquinho em pouquinho e fica mais fácil encostar no chão sem exagerar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Mostre no projetor a sua cena com três modelos: um flutuando, um afundado e um perfeito. Pergunte para a turma "qual está certo?" e deixe as crianças apontarem. Explique que hoje vamos consertar os dois errados e deixar todos como o perfeito. Relembre o "Move" e a seta verde da altura.

Conteúdo novo guiado (15 min): No seu computador, com o projetor ligado, clique no modelo flutuando. Pegue a seta verde do "Move" e desça devagar até a base encostar no baseplate. Gire a câmera segurando o botão direito do mouse (ou use as teclas para olhar pelos lados) e confira que não há buraco embaixo nem pedaço enterrado. Depois mostre o "Anchor": clique no modelo e aperte o botão de âncora na aba "Model"; explique que agora ele está pregado. Por fim, selecione mais de uma peça, aperte "Group" e mostre que viraram um "Model" só, que anda junto. Aperte "Play" para provar que o modelo ancorado não cai, e "Stop" para voltar.

Mão na massa (25 min): Agora cada criança faz no próprio modelo. Passe nas máquinas. Primeiro objetivo: usar a seta verde do "Move" para encostar a base no baseplate, conferindo pelos lados com a câmera. Segundo: apertar o "Anchor" para travar. Terceiro: se o modelo tiver vários pedaços, selecionar tudo e apertar "Group". Use o cartão-lembrete "Encostar no chão / Ancorar / Agrupar" como roteiro. Quem terminar testa com o "Play".

Desafio e compartilhar (10 min): Desafie cada criança a apertar "Play" e mostrar para um colega que o modelo fica paradinho, sem cair. Quem conseguir ganha o adesivo de "Mestre da Âncora". Encerre com uma volta rápida pela sala admirando os modelos bem posicionados.

## Como explicar para crianças

Use a imagem da estátua: "Uma estátua na praça fica com os pés bem no chão, não flutuando no ar nem enterrada na terra. O nosso modelo é a nossa estátua." Para o Anchor, diga que é "pregar com um preguinho mágico" para a peça nunca mais sair do lugar. Para o Group, diga que é "colocar todos os pedacinhos dentro de uma caixa, para carregar tudo de uma vez". E a seta verde é "o elevador": sobe e desce o modelo.

## Erros comuns e como ajudar

O modelo afunda demais ou flutua: peça para a criança girar a câmera e olhar pela lateral, de pertinho; assim ela vê o buraco ou o pedaço enterrado e corrige. A criança puxa a seta errada e o modelo vai para o lado: lembre que só a seta verde mexe na altura. O modelo cai ao apertar "Play": faltou ancorar; volte e aperte o "Anchor". O grupo se desfez ou nunca foi criado: confira se ela selecionou todos os pedaços antes do "Group" (segurando a tecla para clicar em mais de um). A câmera "foge" e a criança se perde: ensine a apertar a tecla com o modelo selecionado para a câmera voltar a focar nele.`,
  exercicios: [
    {
      titulo: `Caça ao erro: flutuando ou afundado?`,
      tipo: `Observação no projetor`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre na tela grande três modelos: um flutuando, um afundado e um no lugar certo. Peça para as crianças apontarem qual é qual. Gire a câmera para que vejam o buraco embaixo de um e o pedaço enterrado do outro.`,
      atividade: `Olhe os três modelos na tela. Diga qual está flutuando no ar, qual está afundado no chão e qual está no lugar perfeito, com a base encostando certinho.`,
      gabarito: `A criança identifica corretamente os três casos. Acerto = reconhecer o buraco embaixo (flutuando), o pedaço enterrado (afundado) e a base encostada (perfeito). Exemplo: "o do meio está flutuando porque tem espaço embaixo".`,
    },
    {
      titulo: `O elevador da altura`,
      tipo: `Prática no Roblox Studio`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o botão "Move" na aba "Home". Garanta que a criança clique no próprio modelo e pegue só a seta verde (altura). Ensine a arrastar pouquinho de cada vez até a base tocar o baseplate.`,
      atividade: `Clique no seu modelo e use o "Move". Pegue a seta verde, o elevador, e desça devagar até a base encostar no chão cinza quadriculado. Não use a seta vermelha nem a azul.`,
      gabarito: `O modelo desce até a base tocar o baseplate, sem flutuar. Acerto = usar apenas a seta verde e parar quando encosta no chão. Erro comum: arrastar a seta vermelha ou azul e mandar o modelo para o lado.`,
    },
    {
      titulo: `A volta na estátua`,
      tipo: `Conferência com a câmera`,
      tempo: `5 minutos`,
      guiaProfessor: `Ensine a girar a câmera segurando o botão direito do mouse e a dar zoom com a roda. A criança confere o modelo pela frente, pelos lados e por trás, procurando buraco embaixo ou pedaço enterrado.`,
      atividade: `Dê uma volta na sua estátua: gire a câmera com o botão direito do mouse e olhe o modelo de todos os lados. Tem buraco embaixo? Tem algum pedaço enterrado? Conserte com a seta verde.`,
      gabarito: `A criança gira a câmera e confirma que a base encosta certinho de todos os ângulos. Acerto = nenhum buraco embaixo e nenhum pedaço enterrado visível. Se achar um erro, corrige com a seta verde antes de seguir.`,
    },
    {
      titulo: `O preguinho mágico (Anchor)`,
      tipo: `Prática no Roblox Studio`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o botão "Anchor" (cadeado/âncora) na aba "Model". A criança seleciona o modelo, aperta "Anchor" e depois testa com "Play" para ver que ele não cai. Lembre de apertar "Stop" para voltar.`,
      atividade: `Clique no seu modelo e aperte o botão "Anchor", o preguinho mágico que prega a peça no chão. Depois aperte "Play" e veja: o modelo fica paradinho, sem cair. Aperte "Stop" para voltar.`,
      gabarito: `Ao apertar "Play", o modelo permanece exatamente no lugar, sem cair nem escorregar. Acerto = ancorar antes de testar. Erro comum: esquecer o "Anchor"; aí o modelo cai no "Play" e basta voltar e ancorar.`,
    },
    {
      titulo: `Tudo numa caixa só (Group)`,
      tipo: `Desafio final`,
      tempo: `8 minutos`,
      guiaProfessor: `Para modelos com vários pedaços: ensine a selecionar todos (clicando em um e segurando a tecla para clicar nos outros) e apertar "Group", que cria um "Model". Confira que tudo ficou ancorado e move junto. Premie com o adesivo "Mestre da Âncora".`,
      atividade: `Se o seu modelo tem vários pedaços, selecione todos eles e aperte "Group" para virar uma caixa só. Confira que está tudo ancorado e que, ao mover, os pedaços andam juntos. Mostre para um colega no "Play".`,
      gabarito: `Os pedaços viram um "Model" único, ancorado, que se move junto e fica firme no "Play". Acerto = selecionar tudo antes do "Group", manter ancorado e demonstrar que a peça não cai. Modelo de uma peça só já está pronto; basta confirmar a âncora.`,
    },
  ],
};
