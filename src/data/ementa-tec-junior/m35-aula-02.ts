import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Arrumando os Assets na Cena",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança importa mais de um asset voxel para a cena do Roblox Studio, ajusta cada modelo para o tamanho certo e aprende a mover, girar e travar as peças no lugar para que não se percam.`,
  descricao: `Na aula passada cada criança trouxe o seu primeiro boneco voxel para dentro do Roblox Studio. Hoje a turma dá o segundo passo da montagem do jogo: encher a cena com mais peças e deixar cada uma do tamanho e na posição certos. É como abrir uma caixa de brinquedos em cima da mesa e organizar tudo antes de começar a brincadeira, para que nada fique perdido ou gigante demais.

O assunto central da aula é arrumar os "assets". Asset é o nome bonito para cada peça que forma o jogo: um boneco, uma árvore, uma moeda, uma pedra. Quando importamos vários assets de uma vez, eles costumam aparecer todos amontoados no mesmo cantinho, uns dentro dos outros, e às vezes num tamanho estranho (um deles minúsculo, outro do tamanho de um prédio). Por isso precisamos aprender três gestos mágicos no Roblox Studio: mover (arrastar a peça para o lugar certo), girar (virar a peça para o lado certo) e redimensionar (deixar do tamanho certo). E, no final, um gesto de carinho com o nosso trabalho: travar a peça, para que ninguém a empurre sem querer e ela não se perca.

No Roblox Studio, esses gestos têm botões e ferramentas com nomes próprios que o professor vai mostrar passo a passo: a ferramenta Move (Mover), a ferramenta Rotate (Girar), a ferramenta Scale (Redimensionar) e a opção Lock (Travar). O programa mostra umas setas e bolinhas coloridas em volta da peça (as alças, ou "handles"), que funcionam como cabinhos para a criança puxar. A regra de ouro é simples: as cores das setas combinam com as direções, e a criança aprende a puxar o cabinho certo para mover só para onde quer.

Como os alunos têm de 5 a 9 anos, a aula é toda demonstrada na tela grande e cheia de mão na massa. O professor mostra um gesto, as crianças repetem no próprio computador, e a conversa é recheada de analogias de brincadeira, como arrumar bonecos numa estante ou montar um cenário de teatro. No fim da aula, a cena de cada criança estará mais cheia, organizada e travadinha, pronta para receber o mapa do mundo nas próximas aulas.`,
  materiais: [
    `Computadores (um por aluno, ou em duplas) com o Roblox Studio já aberto no projeto do jogo da turma, com o boneco da aula 1 já presente na cena`,
    `Projetor ou TV grande ligado no computador do professor, para todos verem exatamente onde clicar nos menus do Roblox Studio`,
    `Uma pasta com alguns assets voxel prontos (uma árvore, uma pedra e uma moeda) já exportados e salvos, para as crianças importarem além do próprio boneco`,
    `Uma cena de exemplo já montada pelo professor, com os assets arrumados, girados e travados, para mostrar "onde queremos chegar"`,
    `Mouse com rodinha (scroll) em cada computador, que facilita muito o zoom e a navegação da câmera para as crianças`,
    `Cartões grandes impressos com os ícones das ferramentas Move, Rotate, Scale e Lock, para a criança reconhecer cada botão`,
    `Adesivos ou carimbo de "Organizador da Cena" para celebrar quem deixar tudo arrumado e travado no fim da aula`,
  ],
  conceitosChave: [
    `Asset — cada peça que forma o jogo, como um boneco, uma árvore ou uma moeda; pense numa caixa cheia de brinquedos para arrumar na cena.`,
    `Importar — trazer uma peça que estava guardada num arquivo para dentro do Roblox Studio, como pegar um brinquedo da caixa e pôr na mesa.`,
    `Mover — arrastar a peça pelas setas coloridas para colocá-la no lugar certo da cena, igual empurrar um carrinho na pista.`,
    `Girar — virar a peça para o lado certo usando as bolinhas, como virar um boneco para ele olhar para a frente.`,
    `Redimensionar — deixar a peça do tamanho certo, esticando ou encolhendo pelas alças, para não ficar nem gigante nem minúscula.`,
    `Travar (Lock) — prender a peça no lugar para que ninguém a empurre sem querer e ela não se perca na cena.`,
    `Alças (handles) — as setas e bolinhas coloridas que aparecem em volta da peça quando a gente clica nela; são os cabinhos mágicos para mexer no modelo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox Studio para esta aula: basta saber importar um modelo e usar quatro ferramentas básicas. O Roblox Studio é o programa gratuito onde montamos o jogo. No alto da tela fica a faixa de abas e botões chamada Toolbar (barra de ferramentas). À DIREITA fica o Explorer (a lista de tudo que está na cena) e, abaixo dele, o Properties (as propriedades da peça selecionada). No centro fica a Viewport, a janela 3D onde o mundo aparece.

Para IMPORTAR um asset voxel, clique com o botão DIREITO na pasta Workspace dentro do Explorer e escolha "Insert from File" (Inserir do Arquivo), ou use o menu superior e localize a opção de inserir objeto/importar. Selecione o arquivo do modelo (por exemplo, a árvore ou a pedra). Ele entra na cena, normalmente perto da origem (o centro do mundo). Repita para cada asset. Eles costumam empilhar uns sobre os outros: isso é normal, e é justamente o que vamos arrumar.

Para arrumar, use as quatro ferramentas da Toolbar, na aba Home ou Model. Decore os nomes e os atalhos: Move (Mover, tecla "1" ou "W") mostra setas coloridas; arraste a seta vermelha para o eixo X, a verde para cima/baixo (Y) e a azul para a profundidade (Z). Rotate (Girar, tecla "2" ou "E") mostra três aros/bolinhas coloridos; arraste um aro para girar. Scale (Redimensionar, tecla "4" ou "R") mostra bolinhas nas pontas; arraste para esticar ou encolher. Para travar, selecione a peça e, na aba Model, use o botão Lock (Cadeado), ou clique com o botão direito no objeto e procure a opção de travar (Lock). Câmera: botão DIREITO do mouse segurado gira o olhar, teclas W A S D andam e a rodinha dá zoom. Treine tudo uma vez sozinho antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): receba a turma e relembre a aula 1 perguntando "quem lembra como o nosso boneco entrou no jogo?". Mostre no projetor a sua cena de exemplo já arrumada e a versão bagunçada (tudo amontoado) lado a lado. Pergunte: "qual está mais bonita para brincar?". Apresente os cartões das quatro ferramentas (Move, Rotate, Scale, Lock) e faça o gesto de cada uma com o corpo: empurrar, girar, esticar e travar com um cadeado imaginário.

CONTEÚDO NOVO GUIADO (15 min): no seu computador com projetor, importe um asset clicando com o botão direito em Workspace no Explorer e em "Insert from File". Mostre que ele apareceu amontoado. Selecione a peça (clique nela na Viewport), ative o Move com a tecla "1" e arraste a seta vermelha bem devagar dizendo "estou puxando o cabinho para o lado". Troque para Rotate ("2") e gire um aro. Troque para Scale ("4") e estique uma bolinha. Por fim, mostre o Lock na aba Model e diga "agora ela ficou presa, ninguém empurra mais".

MÃO NA MASSA (25 min): as crianças importam dois ou três assets (a árvore, a pedra e a moeda) na própria cena. Depois arrumam cada um: mover para um cantinho diferente, girar para a frente e ajustar o tamanho. Passe de mesa em mesa lembrando "puxe pelo cabinho da cor certa". Quando a peça estiver no lugar, peça que travem com o Lock. Meta simples: cada criança com a cena mais cheia, organizada e com pelo menos uma peça travada.

DESAFIO + COMPARTILHAR (10 min): proponha "arrume os seus assets como uma vitrine de loja, cada um no seu lugar, e trave todos". Faça uma volta rápida: cada criança mostra a cena no projetor (ou para o colega ao lado) e conta qual peça arrumou e travou. Aplauda e entregue o carimbo de "Organizador da Cena".

## Como explicar para crianças

Chame os assets de "brinquedos da nossa caixa" e a cena de "mesa onde a gente arruma tudo". Diga que mover é "empurrar o brinquedo para o cantinho certo", girar é "virar o boneco para ele olhar para a frente" e redimensionar é "esticar como massinha ou encolher como um balão murchando". Para as alças coloridas, use a analogia dos "cabinhos mágicos": cada setinha colorida é um cabo para puxar numa direção, e a cor combina com o caminho. Travar é "passar um cadeado no brinquedo para ele não fugir do lugar". Compare a cena bagunçada (tudo amontoado) com um quarto desarrumado, e a cena arrumada com um quarto organizado: nos dois é mais gostoso brincar.

## Erros comuns e como ajudar

O erro mais comum é a criança puxar a seta errada e a peça voar para longe; ensine a usar o Ctrl+Z (desfazer) e a puxar devagar pela cor certa. Outro erro é confundir as ferramentas: o aluno quer mover mas está no modo Girar; aponte o número da ferramenta no teclado (1 move, 2 gira, 4 estica) e faça junto. Muitos esquecem de SELECIONAR a peça antes (clicar nela) e tentam mexer no nada; lembre "primeiro clica no brinquedo, depois puxa o cabinho". No Scale, é comum esticar demais e a peça virar um gigante; mostre a tecla Ctrl+Z e ajuste de pouquinho em pouquinho. Por fim, alguns esquecem de travar e depois empurram tudo sem querer; reforce o Lock como o "último carinho" antes de terminar. Se uma criança ficar frustrada, faça o gesto você mesmo uma vez e deixe-a repetir só o passo final, para sair com a sensação de vitória.`,
  exercicios: [
    {
      titulo: `Cadê as setas coloridas?`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Com o Roblox Studio aberto e o boneco da aula 1 na cena, peça que cada criança clique uma vez na peça e ative a ferramenta Move (tecla 1 ou W). Confirme de mesa em mesa que as setas coloridas apareceram. Ainda não precisa arrastar nada.`,
      atividade: `Clique uma vez no seu boneco para selecioná-lo. Aperte a tecla "1" para ligar a ferramenta Mover. Aponte na tela e fale alto a cor de cada setinha que apareceu em volta dele.`,
      gabarito: `A criança seleciona a peça e ativa o Move, fazendo aparecer as três setas coloridas (vermelha para um lado, verde para cima/baixo, azul para a profundidade). Acertou quando a peça está selecionada e ela aponta e nomeia ao menos duas cores das setas (handles).`,
    },
    {
      titulo: `Importando um brinquedo novo`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor como importar: botão direito em Workspace no Explorer, depois "Insert from File", e escolher o arquivo da árvore. Em seguida, deixe cada criança importar um asset da pasta preparada. Avise que a peça vai aparecer amontoada perto do boneco, e que isso é normal.`,
      atividade: `Clique com o botão direito em "Workspace" na lista do lado direito (Explorer). Escolha "Insert from File". Selecione a árvore e confirme. Encontre na cena o novo brinquedo que acabou de chegar.`,
      gabarito: `A criança usa "Insert from File" a partir do Workspace e o novo asset aparece na cena e na lista do Explorer. Acertou quando há uma peça nova além do boneco, mesmo que ela esteja amontoada/sobreposta perto da origem.`,
    },
    {
      titulo: `Vira, vira, boneco!`,
      tipo: `jogo`,
      tempo: `10 min`,
      guiaProfessor: `Transforme o giro num jogo. Ensine a ferramenta Rotate (tecla 2 ou E), que mostra os aros coloridos. Você fala "vira para a frente!", "vira de lado!", "vira de costas!" e todos giram a peça arrastando um aro. Premie com adesivo quem usar o aro certo sem fazer a peça sumir.`,
      atividade: `Selecione um asset e aperte a tecla "2" para ligar o Girar. Quando o professor mandar "vira para a frente", arraste um arinho colorido devagar até o boneco olhar para a frente. Repita para "de lado" e "de costas".`,
      gabarito: `A peça gira na Viewport quando a criança arrasta um dos aros do Rotate, mudando a direção para a qual o modelo aponta. Acertou quando ela consegue virar a peça intencionalmente em pelo menos duas direções diferentes sem perdê-la de vista.`,
    },
    {
      titulo: `Nem gigante, nem formiguinha`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Desafie cada criança a deixar todos os seus assets em tamanhos que combinem entre si (o boneco maior que a moeda, a árvore mais alta que a pedra). Ensine o Scale (tecla 4 ou R) e a desfazer com Ctrl+Z quando esticar demais. Circule ajudando quem fizer uma peça virar um gigante.`,
      atividade: `Use a ferramenta Redimensionar (tecla "4") e arraste as bolinhas das pontas para deixar cada peça no tamanho certo: o boneco maior, a moeda pequenininha e a árvore bem alta. Se esticar demais, aperte Ctrl+Z e tente de novo.`,
      gabarito: `Os assets ficam em tamanhos coerentes entre si, sem nenhum exageradamente gigante ou minúsculo. Acertou quando a criança ajusta ao menos duas peças com o Scale e os tamanhos fazem sentido (por exemplo, a moeda menor que o boneco), usando Ctrl+Z se errar.`,
    },
    {
      titulo: `Vitrine travada da loja`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Peça que cada criança arrume os seus assets como uma vitrine de loja, cada um num cantinho, no tamanho e na direção certos, e que trave todos com o Lock (botão Cadeado na aba Model ou pelo botão direito). Depois faça a roda de compartilhar: cada um mostra a vitrine e conta o que travou.`,
      atividade: `Organize seus brinquedos como numa vitrine de loja: cada um no seu lugar, virado para a frente e no tamanho certo. Depois passe o cadeado em todos usando o "Lock". Mostre a sua vitrine para a turma e diga quantas peças você travou.`,
      gabarito: `A cena fica com os assets espalhados de forma organizada, cada um posicionado, girado e dimensionado, e todos travados pelo Lock. Acertou quando a criança apresenta uma cena arrumada com pelo menos duas peças visivelmente travadas e consegue explicar o que fez.`,
    },
  ],
};
