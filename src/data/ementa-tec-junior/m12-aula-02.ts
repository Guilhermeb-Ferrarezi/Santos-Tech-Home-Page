import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Meu Personagem no Mundo Novo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança consegue posicionar o seu personagem no mundo do jogo, girando, ajustando o tamanho e deixando os pés apoiados no chão, usando a câmera para olhar de todos os lados.`,
  descricao: `Na aula passada, cada criança trouxe um asset (um modelo pronto) para o Roblox Studio. Agora chegou a hora de dar um lar para esse personagem dentro do mundo do jogo. Esta aula é sobre colocar o personagem no lugar certo: bem no meio do cenário, em pé, com os pés tocando o chão, virado para o lado que a gente quer e do tamanho ideal — nem gigante, nem minúsculo.

Por que isso importa? Um personagem flutuando no ar, deitado de lado ou enterrado no chão deixa o jogo estranho e quebra a magia. Quando o personagem fica plantado no chão, no centro do palco e olhando para frente, o jogo parece de verdade. Aprender a mover, girar e redimensionar é a base de TUDO que vem depois: construir cenário, testar e publicar. São as três ferramentas mágicas que todo criador de jogos usa o tempo inteiro.

Nesta hora, as crianças vão praticar três botões principais do Roblox Studio: Move (mover, as setas), Rotate (girar, os círculos) e Scale (tamanho, as bolinhas). Além disso, vão treinar a câmera: segurar o botão direito do mouse para olhar em volta e usar a rolagem para chegar perto ou se afastar, como se fossem um fotógrafo dando uma volta ao redor do boneco.

O resultado da aula é simples e visível: cada criança aponta para a tela e diz com orgulho "olha o meu personagem, ele está em pé no meio do mundo!". É um momento de conquista que prepara o palco para a construção do cenário na próxima aula.`,
  materiais: [
    `Computadores (1 por criança) com o Roblox Studio já aberto e o projeto de cada aluno carregado, com o asset da Aula 1 dentro do mundo.`,
    `Projetor ou TV grande conectada ao computador do professor, para demonstrar cada passo na tela cheia.`,
    `Um mundo de exemplo (baseplate simples) já salvo, com um personagem mal posicionado de propósito (flutuando, deitado e torto) para mostrar o "antes e depois".`,
    `Mouse com botão direito funcionando em cada computador (essencial para girar a câmera) e rodinha de rolagem testada.`,
    `Cartões impressos com os três ícones: setas (Move), círculos (Rotate) e bolinhas (Scale), para colar na mesa como lembrete visual.`,
    `Um bonequinho de brinquedo ou action figure real para usar como analogia física na roda de conversa.`,
    `Adesivos ou carimbos de "Personagem no Lugar!" para premiar quem terminar o desafio.`,
  ],
  conceitosChave: [
    `Mover (Move) — pegar o personagem e arrastar para outro lugar, como deslizar um boneco em cima da mesa. Tem três setinhas coloridas.`,
    `Girar (Rotate) — fazer o personagem virar de lado ou olhar para outra direção, como um pião rodando devagar. Tem três círculos.`,
    `Tamanho (Scale) — deixar o personagem maior ou menor, como esticar ou encolher uma massinha. Tem bolinhas nas pontas.`,
    `Câmera — é o olho do criador. A gente move a câmera para olhar o personagem por cima, por baixo e dos lados, sem mexer no personagem.`,
    `Chão (baseplate) — o piso do mundo, onde o personagem precisa apoiar os pés para não ficar voando.`,
    `Selecionar — dar um clique no personagem para "acordar" ele e fazer aparecer as setinhas mágicas que deixam a gente mexer.`,
    `Centro do mundo — o meio do palco, o melhor lugar para deixar o personagem para todo mundo ver bem.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

No Roblox Studio, todo objeto do mundo (incluindo o personagem importado) pode ser manipulado por três ferramentas que ficam na aba "Home", no topo da tela, num grupo chamado "Tools" (ou na aba "Model"). São elas: "Move", "Rotate" e "Scale". Para usar qualquer uma, primeiro é preciso clicar no personagem uma vez para selecioná-lo — aparece uma caixa azul em volta dele. Depois, escolhendo a ferramenta, surgem alças coloridas: setas (eixos X vermelho, Y verde, Z azul) para mover, arcos para girar e bolinhas para mudar o tamanho. Arrastar uma alça move só naquela direção, o que evita bagunça.

A câmera é separada do personagem. Segurar o BOTÃO DIREITO do mouse e mexer o mouse gira o ponto de vista ao redor da cena. A rolagem do mouse aproxima ou afasta. As teclas W, A, S, D também andam pela cena, mas com crianças pequenas foque no botão direito e na rolagem, que são mais intuitivos. Um detalhe importante: "Move" muda o personagem; mexer a câmera NÃO muda nada, só muda o que a gente enxerga. Confundir os dois é o erro número um.

Para apoiar os pés no chão, deixe ligado o botão "Snap to Grid" (encaixe na grade), que ajuda o personagem a parar em posições certinhas. Se o modelo afundar ou flutuar, use a seta verde (eixo Y, para cima e para baixo) para ajustar a altura até os pés tocarem o baseplate.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento/revisão: Pergunte "quem lembra o que a gente trouxe pro Studio na aula passada?". No projetor, mostre o mundo de exemplo com o personagem bagunçado (flutuando e deitado). Pergunte "tem algo estranho aqui?". Deixe as crianças apontarem. Diga que hoje vamos consertar e deixar o personagem perfeito.

15 min — Conteúdo novo guiado: Na sua tela, clique uma vez no personagem para selecioná-lo (mostre a caixa azul). Vá na aba "Home", clique em "Move" e arraste a seta para o centro. Depois clique em "Rotate" e gire devagar para ele olhar para frente. Por fim, clique em "Scale" e mostre como deixar maior ou menor pelas bolinhas. Mostre a câmera: segure o botão direito e dê uma "voltinha" ao redor dele; use a rolagem para chegar perto.

25 min — Mão na massa: Cada criança faz o mesmo no próprio computador. Circule pela sala. Peça a meta clara: "personagem no meio, em pé, pés no chão, olhando pra frente". Ajude um por um. Quem terminar, peça para dar uma volta de câmera e conferir todos os lados.

10 min — Desafio + compartilhar: Lance o desafio "deixe o personagem do tamanho de um herói" e peça que cada um mostre a tela aos colegas, girando a câmera para apresentar. Dê o adesivo "Personagem no Lugar!".

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use o bonequinho de brinquedo: "Olha, eu seguro o boneco e coloco no meio da mesa (isso é o Move). Agora viro ele pra ele te olhar (Rotate). E se fosse de massinha, eu poderia esticar pra ficar gigante (Scale)." Para a câmera, diga: "A câmera é o seu olho de fotógrafo. Você dá uma voltinha em volta do boneco sem encostar nele." Para os pés no chão: "Ninguém anda voando! Vamos colocar os pezinhos no chão." Repita os nomes das três ferramentas sempre com o gesto.

## Erros comuns e como ajudar

O erro mais comum é mover a câmera achando que está movendo o personagem — lembre que para mexer no boneco é preciso clicar nele primeiro e ver a caixa azul. Outro: arrastar errado e o personagem voar para longe; ensine o "Ctrl+Z" (voltar) como botão mágico de desfazer. Muitos deixam o personagem afundado no chão; use a seta verde para subir devagar. Alguns esticam demais no Scale e ele fica gigante; mostre que dá para encolher do mesmo jeito. Por fim, cliques duplos sem querer abrem coisas estranhas — oriente a clicar uma vez só e respirar antes de arrastar.`,
  exercicios: [
    {
      titulo: `Acorda, Personagem! (selecionar e mover)`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre na sua tela como dar um clique no personagem para a caixa azul aparecer. Explique que esse clique "acorda" o boneco. Em seguida, ative a ferramenta "Move" na aba "Home" e arraste a seta. Peça que cada criança repita no seu computador, devagar.`,
      atividade: `Clique uma vez no seu personagem até aparecer a caixa azul em volta dele. Depois clique em "Move" lá em cima e arraste uma das setas coloridas para levar o personagem até o centro do mundo.`,
      gabarito: `A criança acertou quando o personagem está selecionado (caixa azul visível) e foi arrastado para perto do meio do baseplate usando as setas, sem voar para fora do mapa. O professor confere olhando se o boneco saiu do lugar antigo e parou no centro.`,
    },
    {
      titulo: `Fotógrafo do Mundo (volta de câmera)`,
      tipo: `jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Transforme em brincadeira: cada criança é um "fotógrafo". Demonstre segurando o botão direito do mouse e girando a câmera ao redor do personagem, e usando a rolagem para chegar perto. Faça um desafio cronometrado leve e animado.`,
      atividade: `Seja o fotógrafo do seu personagem! Segure o botão direito do mouse e dê uma volta inteira ao redor dele. Depois use a rodinha do mouse para chegar bem pertinho do rosto e depois se afastar de novo. Diga em voz alta: "vi a frente, vi as costas, vi de cima!".`,
      gabarito: `A criança acertou quando consegue olhar o personagem da frente, das costas e de cima usando só a câmera (botão direito e rolagem), SEM o personagem mudar de lugar. Se o boneco se moveu, ela usou a ferramenta errada — o professor relembra a diferença.`,
    },
    {
      titulo: `Roda do Antes e Depois`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em roda com o bonequinho de brinquedo. Mostre o boneco flutuando, deitado e torto, depois conserte na mão. Pergunte o que mudou e por que ficou melhor. Conecte cada conserto a uma ferramenta (Move, Rotate, Scale).`,
      atividade: `Olhem o bonequinho voando e deitado de lado. O que está errado? Vamos consertar juntos: coloco no chão (qual ferramenta?), viro pra frente (qual ferramenta?) e deixo do tamanho certo (qual ferramenta?). Cada um fala qual ferramenta usaria.`,
      gabarito: `Respostas esperadas: para colocar no chão e no centro usa-se "Move"; para virar de frente usa-se "Rotate"; para o tamanho usa-se "Scale". A criança acertou se associar pelo menos duas das três situações à ferramenta certa, mesmo usando as palavras "mover", "girar" e "tamanho".`,
    },
    {
      titulo: `Desenho do Meu Personagem em Pé`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua papel e lápis de cor. Peça que cada criança desenhe o próprio personagem do jeito que ficou na tela: em pé, no centro, com os pés no chão. Peça que desenhem também uma seta mostrando para onde ele está olhando. Isso reforça o conceito de orientação e apoio.`,
      atividade: `Desenhe o seu personagem como ele está agora no jogo: em pé, com os pés tocando o chão e no meio do mundo. Faça uma setinha do lado mostrando para onde ele está olhando (para frente!). Pode pintar como quiser.`,
      gabarito: `O desenho acertou quando mostra o personagem em pé (não deitado nem flutuando), com os pés numa linha de chão e uma seta indicando uma direção. Não importa a habilidade artística — importa que a criança represente "em pé, no chão e olhando para um lado".`,
    },
    {
      titulo: `Desafio do Herói no Palco`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Lance o desafio final que junta tudo: a criança precisa deixar o personagem no centro, em pé, com os pés no chão, olhando para frente e num tamanho "de herói" (nem minúsculo, nem gigante). Circule ajudando com a seta verde para a altura e com o Ctrl+Z para desfazer enganos. Ao final, cada um apresenta girando a câmera.`,
      atividade: `Hora do desafio! Deixe o seu personagem assim: bem no meio do mundo, em pé, com os pés tocando o chão, olhando para frente e do tamanho de um herói. Quando terminar, gire a câmera e apresente o seu personagem para os colegas.`,
      gabarito: `Acertou quem entregar o personagem cumprindo os cinco itens: (1) no centro do baseplate, (2) em pé, (3) pés apoiados no chão sem afundar nem flutuar, (4) virado para frente e (5) num tamanho proporcional. O professor confere girando a câmera junto com a criança; vale dar o adesivo "Personagem no Lugar!".`,
    },
  ],
};
