import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Plano da Peça Perfeita",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Transformar o desenho da peça em um plano de impressão, decidindo no papel o tamanho, a base de apoio e marcando as partes grossas que vão aguentar a impressora e as partes finas que podem cair.`,
  descricao: `Na aula passada cada criança teve a ideia do brinquedo que vai virar peça de verdade. Hoje a gente pega aquele desenho e vira um PLANO de impressão. É como sair da ideia "quero uma casinha" e fazer a planta da casa: onde fica a parede grossa, onde fica a porta, o que precisa de uma base firme embaixo para não cair. Planejar antes economiza um monte de impressões estragadas depois.

A impressora 3D Bambu Lab constrói a peça de baixo para cima, em camadas, como empilhar muitas panquecas bem fininhas. Por causa disso, ela tem três amigos e três inimigos que as crianças precisam conhecer. Os amigos são: ter uma BASE de apoio bem assentada na mesa, ter partes GROSSAS (que aguentam o peso) e a peça ficar firme em pé. Os inimigos são: partes muito FINAS que quebram, pontas que ficam no ar sem nada embaixo segurando, e peças que tombam por terem uma base pequena. Esta aula é sobre enxergar esses pontos no desenho ANTES de modelar no Blender.

O coração da aula é uma atividade de papel e lápis colorido. Cada criança pega o desenho da peça e, com a ajuda do professor, faz três marcações: pinta de verde as partes grossas e firmes (que vão aguentar), pinta de vermelho as partes finas ou pontas soltas (que podem cair ou quebrar) e desenha embaixo uma base de apoio — o "pé" que segura a peça na mesa. Também escolhem o tamanho: a peça vai caber na palma da mão? Vai ser do tamanho de um copo? Esse plano colorido vira o mapa que elas vão seguir quando abrirem o Blender nas próximas aulas.

Esta é a segunda aula do mês, ainda na fase de planejamento. Ninguém modela ainda: a missão de hoje é fechar um plano de impressão tão bom que, quando chegar a hora de construir no Blender e imprimir na Bambu Lab, a peça saia bonita e inteira de primeira.`,
  materiais: [
    `Computadores com o Blender já aberto, um por criança, para olhar exemplos prontos`,
    `Projetor ou TV conectada ao computador do professor para a demonstração`,
    `Exemplos prontos na tela do Blender: uma peça grossa e firme e uma peça com parte fina demais`,
    `O desenho da peça que cada criança fez na Aula 1`,
    `Folhas de papel, lápis e lápis de cor (precisa ter verde e vermelho)`,
    `Uma peça impressa de verdade na Bambu Lab para passar de mão em mão (uma boa e, se houver, uma que quebrou)`,
    `Régua simples ou um objeto de referência (uma moeda, um copo) para falar de tamanho`,
  ],
  conceitosChave: [
    `Plano de impressão — o mapa da peça feito antes de modelar, mostrando tamanho, base e partes fortes e fracas.`,
    `Base de apoio — o "pé" achatado embaixo da peça, que faz ela ficar firme e grudada na mesa da impressora.`,
    `Camadas — as fatias bem finas que a impressora empilha de baixo para cima até montar a peça inteira.`,
    `Parte grossa — pedaço cheio e firme que aguenta o peso e sai forte na impressão.`,
    `Parte fina — pedaço magrinho, como um fio ou uma pontinha, que quebra fácil ou nem imprime direito.`,
    `Ponta solta — um pedaço que fica no ar, sem nada embaixo segurando, e por isso pode cair durante a impressão.`,
    `Tamanho — o quão grande ou pequena a peça vai ser de verdade, comparada com a mão ou com um copo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa modelar nada hoje, então pode respirar fundo: a aula é quase toda no papel. O que você precisa entender é COMO a impressora 3D funciona, para explicar às crianças. A Bambu Lab imprime em camadas, de baixo para cima, depositando plástico fininho fatia por fatia. Três coisas dão problema: partes muito finas (mais finas que um lápis, na escala da peça) quebram ou nem saem; pontas que ficam no ar sem apoio embaixo (chamadas de "balanços") despencam porque a impressora não tem onde apoiar o plástico; e peças com base pequena tombam. A solução que ensinamos hoje é planejar: deixar as partes importantes grossas, dar uma base larga e achatada e evitar pontas soltas. No Blender, você só vai ABRIR dois exemplos prontos para mostrar no projetor — um modelo robusto e um com uma "antena" fininha — então prepare esses dois arquivos antes. Para girar a câmera no Blender, segure o botão do meio do mouse e arraste; para dar zoom, role a rodinha. É só isso de Blender hoje.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 1 perguntando qual peça cada criança quer imprimir. Passe de mão em mão a peça impressa de verdade. Se você tiver uma peça que quebrou, mostre e pergunte: "Por que será que esse pedacinho quebrou?" Conduza até a ideia de que partes finas são frágeis.

Conteúdo novo guiado (15 min): no projetor, abra o Blender com o primeiro exemplo (peça grossa e firme). Gire com o botão do meio do mouse e diga: "Olha como ela é cheia e tem um pé largo embaixo." Depois abra o segundo exemplo, com uma parte bem fina (uma antena, um rabo magrinho). Aponte a parte fina e explique que ali a impressora tem dificuldade. Desenhe no quadro um boneco simples e marque com você: verde nas pernas e tronco grossos, vermelho nos dedos finos, e desenhe uma base achatada embaixo dos pés.

Mão na massa (25 min): cada criança pega o desenho da própria peça. Tarefa em três passos. 1) Pintar de VERDE as partes grossas e firmes. 2) Pintar de VERMELHO as partes finas ou pontas soltas que podem cair. 3) Desenhar embaixo uma BASE de apoio larga. Por fim, escolher o tamanho comparando com a mão ou um copo e anotar ao lado. Circule pela sala ajudando cada um a enxergar onde estão as partes fracas.

Desafio e compartilhar (10 min): proponha o desafio "conserte uma parte vermelha" — como engrossar um dedo fino ou apoiar uma ponta solta com algo embaixo. Depois cada criança mostra o plano e conta uma parte verde (que vai aguentar) e uma parte vermelha que ela consertou.

## Como explicar para crianças

Use a analogia das panquecas: "A impressora empilha camadas bem fininhas, igual fazer uma torre de panquecas de baixo para cima." Para a base, diga: "Toda peça precisa de um pé bem largo para não cair, igual a gente abre as pernas para não tombar." Para partes finas, mostre o próprio dedo mindinho e diga: "Se for fininho assim, quebra fácil; melhor deixar grossinho." Para pontas soltas, segure um lápis no ar pela ponta e largue: "Sem nada embaixo segurando, cai. A impressora também não consegue imprimir no ar."

## Erros comuns e como ajudar

O erro mais comum é a criança achar que tudo vai aguentar e não pintar nada de vermelho — ajude apontando uma parte fina do desenho e perguntando "isso é grosso ou magrinho?". Outro erro é esquecer a base: muitos desenham a peça flutuando; lembre que precisa de um pé achatado embaixo. Há quem queira uma peça gigante ou minúscula demais — use a mão ou o copo como referência para um tamanho razoável. Alguns confundem as cores; combine bem no começo: verde é forte, vermelho é perigo. Por fim, há quem queira já mexer no Blender; explique com carinho que hoje é dia de plano e que o Blender de verdade começa na próxima aula, e o plano caprichado é que vai fazer a peça sair perfeita.`,
  exercicios: [
    {
      titulo: `Por que esse pedaço quebrou?`,
      tipo: `Aquecimento oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Passe a peça impressa de mão em mão. Se tiver uma peça quebrada, mostre o ponto da quebra. Conduza a conversa sem entregar a resposta de imediato; deixe as crianças observarem e tocarem.`,
      atividade: `Sinta a peça impressa na sua mão. Onde ela é bem grossa e firme? Tem algum pedacinho fino que pareça que quebra fácil? Por que você acha que partes finas quebram mais?`,
      gabarito: `A criança percebe que as partes grossas são firmes e fortes, e que as partes finas (como pontas e fios) quebram mais fácil. Espera-se que ela ligue "fino" a "frágil" e "grosso" a "forte".`,
    },
    {
      titulo: `Forte ou fraca?`,
      tipo: `Jogo de observação`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor, um de cada vez, alguns desenhos ou os dois exemplos do Blender. Para cada parte que você apontar, peça que a turma diga em voz alta "verde" (forte) ou "vermelho" (fraca). Comece pelas mais óbvias e vá ficando mais difícil.`,
      atividade: `Vou apontar várias partes na tela. Para cada uma, grite "VERDE" se ela é grossa e vai aguentar, ou "VERMELHO" se ela é fina e pode cair ou quebrar.`,
      gabarito: `A criança classifica corretamente: partes cheias e largas como verde (vão aguentar) e partes finas, pontudas ou soltas no ar como vermelho (podem cair ou quebrar). Acerta a maioria das partes apontadas.`,
    },
    {
      titulo: `Pintando o meu plano`,
      tipo: `Mão na massa no papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue o desenho da Aula 1 e os lápis verde e vermelho. Circule pela sala ajudando cada criança a enxergar as partes finas. Reforce: verde é forte, vermelho é perigo. Garanta que cada uma marque pelo menos uma parte de cada cor.`,
      atividade: `Pegue o desenho da sua peça. Pinte de VERDE todas as partes grossas e firmes que vão aguentar a impressora. Pinte de VERMELHO as partes finas ou as pontinhas soltas que podem cair ou quebrar.`,
      gabarito: `O desenho fica com partes verdes nas regiões grossas e firmes e partes vermelhas nas regiões finas ou nas pontas soltas. A criança consegue justificar pelo menos uma marca de cada cor ("essa é grossa, aguenta"; "essa é fininha, quebra").`,
    },
    {
      titulo: `Desenhando a base de apoio`,
      tipo: `Prática de planejamento`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre no quadro desenhando um pé largo e achatado embaixo de uma figura. Lembre da analogia de abrir as pernas para não cair. Ajude quem desenhou a peça flutuando a colocar um apoio firme embaixo. Depois oriente a anotar o tamanho usando a mão ou um copo como referência.`,
      atividade: `Embaixo da sua peça, desenhe uma BASE de apoio bem larga e achatada — o pé que vai segurar ela firme na mesa da impressora. Depois, decida o tamanho: ela cabe na sua mão? É do tamanho de um copo? Anote ao lado do desenho.`,
      gabarito: `A criança acrescenta uma base larga e achatada embaixo da peça (não uma pontinha estreita) e anota um tamanho razoável comparado à mão ou ao copo. Entende que a base larga evita que a peça tombe na impressora.`,
    },
    {
      titulo: `Consertando o vermelho e apresentando`,
      tipo: `Desafio criativo e compartilhar`,
      tempo: `6 minutos`,
      guiaProfessor: `Proponha consertar uma parte vermelha: engrossar um pedaço fino ou colocar um apoio embaixo de uma ponta solta. Demonstre um exemplo no quadro. Depois conduza a roda de apresentação, pedindo que cada criança aponte uma parte verde e a parte vermelha consertada.`,
      atividade: `Escolha uma parte vermelha do seu plano e CONSERTE: deixe-a mais grossa ou coloque um apoio embaixo dela para não cair. Depois mostre seu plano para a turma e conte uma parte que vai aguentar e a parte que você consertou.`,
      gabarito: `A criança transforma um ponto fraco em forte — engrossando a parte fina ou apoiando a ponta solta — e apresenta o plano explicando uma parte verde firme e o conserto feito. Por exemplo: "o tronco é grosso e aguenta; o dedo era fininho, então deixei ele mais gordo".`,
    },
  ],
};
