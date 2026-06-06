import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Montando o Cenário",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança consegue posicionar, girar e redimensionar seus modelos no Roblox Studio para montar um cenário organizado e bonito, deixando as peças ancoradas no lugar.`,
  descricao: `Nesta aula as crianças viram arquitetas do próprio jogo. Na aula passada (Nossos Modelos Chegaram!) elas trouxeram os modelos para dentro do Roblox Studio. Agora chegou a hora mais divertida: arrumar tudo no lugar certo para formar o mapa onde a brincadeira vai acontecer. É como montar um quarto de bonecas ou uma maquete, só que dentro do computador e em três dimensões.

Para montar o cenário a criança vai usar três ferramentas mágicas que já existem dentro do Roblox Studio: a ferramenta de mover (Move), que arrasta a peça para frente, para trás e para os lados; a ferramenta de girar (Rotate), que vira a peça para a direção certa; e a ferramenta de redimensionar (Scale), que deixa a peça maior ou menor. Com essas três ferramentas dá para colocar cada modelo exatamente onde a gente quer.

Tem um detalhe muito importante que faz toda a diferença: ancorar as peças. Quando a gente liga o botão Anchored, a peça fica grudada no ar e não cai nem escorrega quando o jogo começa. Sem isso, as casinhas, árvores e plataformas desabariam todas ao apertar Play. Por isso, montar e ancorar andam sempre juntos nesta aula.

O objetivo não é fazer um cenário perfeito de adulto, e sim que cada criança se sinta dona do seu espaço 3D, capaz de colocar uma árvore aqui, uma plataforma ali, girar uma casinha para a porta ficar na frente e deixar tudo travado no lugar. Esse cenário organizado vai ser a base das próximas aulas, quando elas adicionarem o ponto de nascimento do jogador, as moedas e as regras do jogo.`,
  materiais: [
    `Um computador por criança com o Roblox Studio já aberto e o projeto do jogo carregado, com os modelos da aula anterior já dentro da cena.`,
    `Projetor ou TV grande ligado no computador do professor para demonstrar onde clicar e como usar cada ferramenta.`,
    `Mouse com botão de rodinha em cada estação — essencial para aproximar, afastar e girar a câmera enquanto se monta o cenário.`,
    `Um cenário-exemplo já pronto e bonito (uma cena simples com chão, algumas árvores e uma casinha bem posicionadas) salvo no computador do professor para mostrar a meta da aula.`,
    `Folhas de papel quadriculado e lápis de cor para a criança rascunhar o mapa antes de montar na tela.`,
    `Adesivos ou carimbos para premiar quem terminar o cenário organizado e ancorado.`,
    `Uma caixa de peças de montar (blocos de encaixe) para usar como exemplo concreto na roda de conversa.`,
  ],
  conceitosChave: [
    `Cenário — é o mapa do jogo, o lugar onde a brincadeira acontece, com chão, árvores, casinhas e plataformas.`,
    `Mover (Move) — a ferramenta que arrasta a peça para frente, para trás, para os lados, para cima e para baixo, usando as setinhas coloridas.`,
    `Girar (Rotate) — a ferramenta que vira a peça para a direção certa, usando os anéis coloridos em volta dela.`,
    `Redimensionar (Scale) — a ferramenta que estica ou encolhe a peça, deixando ela maior ou menor, usando as bolinhas coloridas.`,
    `Ancorar (Anchored) — o botão mágico que gruda a peça no lugar para ela não cair nem escorregar quando o jogo começa.`,
    `Explorer — a listinha do lado direito do Roblox Studio que mostra o nome de todas as peças da cena, como um índice.`,
    `Setinhas coloridas (eixos) — as três cores que indicam as direções: vermelho é para um lado, verde é para cima e para baixo, azul é para frente e para trás.`,
  ],
  treinamento: `## O que o professor precisa saber

No Roblox Studio, o cenário é montado movendo, girando e redimensionando peças (chamadas de Parts e Models) dentro da janela 3D do meio. Para mexer numa peça, primeiro clique nela uma vez com o botão esquerdo: ela fica com uma borda azul, indicando que está selecionada.

No topo da tela, na aba Home (ou na aba Model), existem quatro botões em sequência: Select, Move, Scale e Rotate. Cada um liga uma ferramenta diferente:

- Move (Mover): aparecem três setinhas coloridas saindo da peça. Vermelho move para um lado, azul para frente e para trás, verde para cima e para baixo. Arraste a setinha que quiser.
- Scale (Redimensionar): aparecem bolinhas coloridas nos cantos. Arraste uma bolinha para esticar ou encolher a peça.
- Rotate (Girar): aparecem três anéis coloridos em volta da peça. Arraste um anel para virar a peça.

O botão mais importante da aula é o Anchored. Selecione a peça, abra a janela Properties (Propriedades) e marque a caixinha Anchored, OU clique no botão Anchor (um cadeado/âncora) na aba Model. Peça ancorada não cai quando o jogo roda. Antes da aula, ancore o chão para a turma não derrubar tudo.

Para mexer a câmera e ver o cenário de outros ângulos: clique e segure o botão DIREITO do mouse e mova para olhar em volta; use a rodinha do meio para aproximar e afastar. Treine isso antes, porque você vai resgatar muitas crianças "perdidas" no espaço 3D.

## Passo a passo da aula

10 min — Aquecimento/revisão: Reúna a turma e relembre a aula passada: "Trouxemos nossos modelos para dentro do Roblox!". Mostre no projetor o cenário-exemplo já pronto e diga: "Hoje vamos arrumar nossos modelos para ficarem assim, organizados e bonitos". Mostre rapidamente a peça caindo quando NÃO está ancorada, para criar curiosidade.

15 min — Conteúdo novo guiado: No projetor, clique numa peça (borda azul aparece). Mostre o botão Move e arraste as setinhas vermelha, azul e verde, dizendo o que cada uma faz. Depois clique em Rotate e gire pelos anéis. Depois Scale e estique pela bolinha. Por fim, mostre o botão Anchored e prove que a peça agora não cai ao apertar Play.

25 min — Mão na massa: Cada criança no seu computador com os modelos já na cena. Conduza uma ferramenta de cada vez: primeiro todos só MOVEM as peças para o lugar; depois todos GIRAM para a direção certa; depois ajustam o tamanho com Scale. Circule pela sala. A cada peça posicionada, lembre: "agora ancora!". Use o Explorer do lado direito para ajudar quem perdeu uma peça de vista.

10 min — Desafio + compartilhar: Proponha o desafio "Cenário Arrumado": cada criança deixa o seu mapa organizado e todas as peças ancoradas, depois aperta Play para provar que nada caiu. Quem conseguir mostra o cenário no telão. Encerre com adesivo para todos.

## Como explicar para crianças

Use a analogia da maquete ou do quarto de bonecas: "Montar o cenário é como arrumar uma casinha de brinquedo: a gente coloca cada coisa no lugar certo". Chame as setinhas coloridas de "trilhos mágicos" que a peça anda em cima. Diga que girar é "virar a casinha para a porta ficar na frente". Para o Scale, fale "esticar como massinha". E o botão Anchored é a "cola mágica" que gruda a peça no ar para ela não cair.

Fale pouco e mostre muito. Faça o movimento no seu computador, deixe a turma ver no telão, e só depois eles repetem. Comemore cada acerto: "Olha que cenário lindo você montou!".

## Erros comuns e como ajudar

O erro número um é esquecer de ancorar e ver tudo cair ao apertar Play. Transforme isso em regra divertida: "posicionou, ancorou!". O segundo é arrastar a peça para muito longe e ela sumir da tela; ensine a usar o Explorer para clicar no nome da peça e depois o botão direito do mouse para girar a câmera de volta. O terceiro é mover quando queria girar: lembre de trocar a ferramenta no topo (Move, Rotate, Scale) antes de arrastar. O quarto é deixar peças "afundadas" no chão; mostre como subir um pouquinho com a setinha verde. Por fim, alguns vão querer um cenário gigante e bagunçado; incentive começar pequeno e organizado.`,
  exercicios: [
    {
      titulo: `Colocando a Primeira Peça no Lugar`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Apresente a ferramenta Move. Mostre no projetor clicando numa peça (borda azul) e ligando o botão Move no topo. Arraste as setinhas vermelha, azul e verde devagar, dizendo o que cada cor faz. Conduza a turma junto e circule colocando os dedinhos certos no mouse.`,
      atividade: `Cada criança clica num dos seus modelos, liga a ferramenta Move e usa as setinhas coloridas para arrastar a peça até o lugar onde ela quer no mapa. A missão é mover a peça para frente, para o lado e deixá-la apoiada no chão.`,
      gabarito: `A criança acertou se conseguiu arrastar a peça para uma posição nova escolhida por ela, usando ao menos duas setinhas diferentes. O professor confirma vendo a peça mudar de lugar na tela.`,
    },
    {
      titulo: `Virando a Casinha para a Frente`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Introduza a ferramenta Rotate. Mostre o botão no topo e os três anéis coloridos que aparecem em volta da peça. Gire devagar pelo anel, dizendo "estamos virando a peça". Reforce que primeiro a gente troca para a ferramenta de girar antes de arrastar.`,
      atividade: `Cada criança seleciona uma peça que tenha uma frente (uma casinha, uma árvore com um lado bonito), liga a ferramenta Rotate e gira usando um dos anéis coloridos até a frente da peça ficar virada para onde ela quer.`,
      gabarito: `Acertou quem conseguiu girar a peça para uma direção diferente da inicial, mostrando que entendeu o anel. O professor verifica vendo a peça apontando para um novo lado na tela.`,
    },
    {
      titulo: `Maior ou Menor? Esticando a Peça`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Apresente a ferramenta Scale como "esticar massinha". Mostre o botão no topo e as bolinhas coloridas nos cantos da peça. Arraste uma bolinha para a peça crescer e outra para encolher. Lembre a turma de não exagerar para a peça não ficar gigante demais.`,
      atividade: `Cada criança escolhe uma peça, liga a ferramenta Scale e usa as bolinhas para deixá-la de um tamanho legal para o cenário: uma árvore mais alta, uma plataforma mais larga ou uma pedra menor.`,
      gabarito: `Acertou quem mudou o tamanho da peça de propósito, deixando-a maior ou menor do que estava. O professor confirma comparando com o tamanho anterior, vendo que a peça cresceu ou encolheu.`,
    },
    {
      titulo: `Roda de Conversa: A Cola Mágica`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda com a caixa de blocos de montar. Pergunte: "O que aconteceria se as peças do nosso cenário não estivessem grudadas?". Mostre uma torre de blocos caindo. Conecte essa ideia ao botão Anchored, a "cola mágica" que segura as peças no jogo.`,
      atividade: `Passe os blocos de montar na roda. Cada criança empilha duas peças e depois explica, com suas palavras, por que no Roblox a gente precisa ancorar as peças para o cenário não desmontar quando o jogo começa.`,
      gabarito: `A criança acertou se ligou a ideia de "grudar/segurar" ao botão Anchored, dizendo que sem ancorar as peças caem quando o jogo roda. Respostas simples como "senão tudo cai" valem como acerto.`,
    },
    {
      titulo: `Desafio: Cenário Arrumado e Ancorado`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Explique que é o grande desafio da aula: deixar o mapa todo organizado e provar que está firme. Lembre as crianças de usar as três ferramentas (mover, girar e redimensionar) e, principalmente, de ancorar cada peça. Acompanhe e ajude quem ainda tem peça solta usando o Explorer.`,
      atividade: `Cada criança organiza o seu cenário com pelo menos três modelos bem posicionados, girados e do tamanho certo, ancora todas as peças e o chão, e então aperta Play para mostrar à turma que nada caiu no telão.`,
      gabarito: `A criança acertou se, ao apertar Play, o cenário continuou inteiro e nenhuma peça caiu, provando que tudo foi ancorado. O professor confirma vendo o mapa organizado e estável durante o teste do jogo.`,
    },
  ],
};
