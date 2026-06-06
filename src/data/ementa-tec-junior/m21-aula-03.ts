import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Construindo o chão do meu mundo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Construir o chão, o terreno e as bordas do mapa usando blocos e partes (Parts) no Roblox Studio, criando a base onde o jogo vai acontecer.`,
  descricao: `Todo mundo precisa de um lugar firme para pisar, e no nosso jogo não é diferente. Antes de colocar as casas, as árvores e os modelos que vieram do Maya, a gente precisa construir o chão do mundo. O chão é como o piso da sala de aula: sem ele, tudo cairia para sempre no vazio. Nesta aula, a turma vai aprender a criar esse piso usando peças do Roblox Studio chamadas "Parts" (partes), que são blocos simples que a gente estica, achata e pinta para virar terreno.

A base de um cenário tem três coisas importantes: o chão (onde os personagens andam), o terreno (montinhos, descidas e texturas que deixam o mundo bonito) e as bordas do mapa (as paredes invisíveis ou visíveis que impedem o jogador de cair para fora). Nesta aula vamos focar em deixar um chão grande, plano e firme, e em fechar as beiradas para ninguém escorregar para o vazio. É o esqueleto do mundo, a fundação da casa.

No Roblox Studio, a ferramenta mais simples para isso é a "Part" — um bloco cinza que aparece quando clicamos em "Part" na aba Home. A gente pode esticar esse bloco com a ferramenta "Scale" (escala) até ele virar um tapete enorme. Depois, pintamos com uma cor de grama ou areia e damos um nome para não confundir. Repetindo esse processo, a criança monta o piso e levanta quatro paredes nas bordas.

O legal desta aula é que a criança vê o mundo nascer do zero, do nada. No começo é só o vazio cinza; no fim, existe um pedaço de chão onde dá vontade de andar. Essa sensação de "eu construí o lugar" é poderosa e motiva muito. Nas próximas aulas, esse chão vai receber os modelos do Maya e virar um mundo completo e navegável.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um por aluno, já com um projeto Baseplate criado`,
    `Projetor ou TV grande ligada no computador do professor para demonstrar cada passo`,
    `Um exemplo pronto de mundo com chão, bordas e terreno colorido para mostrar o objetivo final`,
    `Mouse com rolagem (scroll) para cada aluno, pois ajuda muito a girar e aproximar a câmera`,
    `Folha impressa com o desenho de um mapa visto de cima (planta baixa) para a criança planejar antes`,
    `Lápis de cor ou canetinhas para a criança pintar o mapa no papel antes de montar no computador`,
  ],
  conceitosChave: [
    `Part (parte) — é um bloco básico do Roblox; pense nele como uma peça de Lego que a gente pode esticar, achatar e pintar.`,
    `Chão (Floor) — a superfície grande e plana onde os personagens vão andar; é o piso do nosso mundo.`,
    `Borda do mapa — as paredes que ficam nas beiradas para o jogador não cair para fora do mundo; como a cerca de um quintal.`,
    `Scale (escala) — a ferramenta que estica ou encolhe uma peça, igual a uma massinha que a gente puxa para os lados.`,
    `Baseplate — a placa quadriculada que já vem no projeto novo; serve de tabuleiro para a gente construir em cima.`,
    `Anchor (âncora) — o botão que prende a peça no lugar para ela não cair nem se mexer; como colar a peça no chão.`,
    `Color (cor) — a propriedade que pinta a peça; é assim que o chão cinza vira grama verde ou areia amarela.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para dar esta aula. Basta dominar três ações: criar uma Part, esticar a Part e pintar a Part. Antes da aula, abra o Roblox Studio, escolha o template "Baseplate" (a tela inicial mostra esse modelo com uma placa cinza quadriculada) e treine cada passo uma vez. A "Part" é um bloco que aparece quando você clica no botão "Part" na aba "Home", no topo. Para mover e esticar peças, use os botões "Move" (mover) e "Scale" (escala), também na aba Home. Para pintar, selecione a peça e procure a propriedade "Color" no painel "Properties" (lado direito). Se o painel Properties não aparecer, vá em "View" no menu de cima e clique em "Properties".

Dica de ouro: sempre que criar uma peça de chão ou parede, marque o botão "Anchor" (âncora, na aba Home) para a peça não cair. Sem âncora, as peças despencam quando o jogo roda.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Receba a turma e pergunte o que elas lembram das aulas passadas, quando trouxeram os modelos do Maya. Mostre no projetor o exemplo pronto de um mundo com chão verde e paredes. Diga: "Hoje a gente vai construir o chão onde esses modelos vão morar." Faça a pergunta-chave: "O que acontece se um jogo não tem chão?" Deixe elas responderem (cai no vazio!).

Conteúdo novo guiado (15 min): No seu computador, com o projetor ligado, abra o template "Baseplate". Mostre a placa quadriculada e diga que ela é o tabuleiro. Clique na aba "Home" e depois no botão "Part" — surge um bloco cinza. Clique no botão "Scale" (escala) e mostre as bolinhas coloridas que aparecem; arraste uma bolinha para esticar o bloco até virar um tapete grande e fino, o chão. Selecione a peça, ache "Color" no painel "Properties" à direita e pinte de verde. Por fim, clique em "Anchor" para prender. Repita rápido criando uma parede fina e alta numa borda.

Mão na massa (25 min): Cada criança no seu computador. Peça que sigam os mesmos passos: criar uma Part, usar Scale para virar chão grande, pintar de verde e clicar em Anchor. Depois, criar quatro paredes finas nas quatro bordas. Circule pela sala ajudando. Incentive que pintem o chão da cor que quiserem (grama, areia, neve). Quem terminar rápido pode criar um montinho (uma Part esticada para cima no meio do mapa).

Desafio e compartilhar (10 min): Lance o desafio: "Deixe seu chão com duas cores diferentes, como se fosse um caminho." Depois, peça para cada criança virar a tela ou usar o projetor e mostrar o chão que construiu, dizendo uma coisa que gostou.

## Como explicar para crianças

Use a analogia da casa: "Antes de colocar os móveis, o pedreiro faz o chão e as paredes. A gente é o pedreiro do nosso jogo." Chame a Part de "peça de Lego mágica que estica". Chame o Anchor de "cola que prende no chão". Para o Scale, diga "vamos puxar a massinha". Mostre sempre antes de pedir; crianças copiam o que veem. Comemore cada chão que nasce: "Olha, do nada apareceu um mundo!"

## Erros comuns e como ajudar

O erro mais comum é a peça cair quando testam o jogo: a criança esqueceu o "Anchor". Ensine a sempre clicar em Anchor depois de criar. Outro erro é esticar a peça para o lado errado e ela ficar fininha e torta; mostre que cada bolinha do Scale puxa um lado só. Algumas crianças criam o chão muito pequeno; peça para puxarem bem grande, do tamanho da placa. Há quem perca a peça de vista ao girar a câmera; ensine a apertar a tecla com o nome da peça selecionada ou usar o botão direito do mouse para girar a câmera devagar. Por fim, se o painel "Properties" sumiu, vá em "View" e reative.`,
  exercicios: [
    {
      titulo: `Aquecimento: o que é o chão?`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça as perguntas em roda, deixando várias crianças responderem. O objetivo é ativar a ideia de "base" antes de mexer no computador. Aceite respostas criativas e ligue cada uma ao tema da aula.`,
      atividade: `Responda em voz alta: O que aconteceria com o seu personagem se o jogo não tivesse chão? Cite dois lugares da vida real que têm um "chão" (piso) onde a gente anda.`,
      gabarito: `O personagem cairia para sempre no vazio, pois não teria onde pisar. Exemplos de "chão" reais: o piso da sala de aula, a calçada da rua, o gramado de um parque, o tapete de casa. Qualquer resposta que mostre entendimento de superfície firme onde se anda está correta.`,
    },
    {
      titulo: `Criando a sua primeira Part`,
      tipo: `Prática guiada no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto, passo a passo, no projetor. Espere todas as crianças concluírem cada passo antes de seguir. Verifique se cada uma conseguiu ver o bloco cinza aparecer na tela.`,
      atividade: `No Roblox Studio, na aba "Home", clique no botão "Part". Depois, clique no botão "Anchor" para prender o bloco. Mostre para o professor o bloco cinza que apareceu na sua tela.`,
      gabarito: `A criança deve ter um bloco (Part) cinza visível na cena, parado e ancorado. Conferência: o botão "Part" fica na aba "Home" no topo; ao clicar, surge um bloco cinza no centro. O "Anchor" também fica na aba Home. Se o bloco apareceu e não cai ao testar, o exercício está correto.`,
    },
    {
      titulo: `Esticando o chão com o Scale`,
      tipo: `Prática no computador`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre o botão "Scale" e as bolinhas coloridas. Reforce que cada bolinha estica um lado. Circule ajudando quem deixar a peça torta ou pequena demais.`,
      atividade: `Selecione a sua Part, clique no botão "Scale" (escala) e arraste as bolinhas para transformar o bloco num chão grande e fininho, do tamanho da placa quadriculada. Depois, pinte de verde usando a propriedade "Color".`,
      gabarito: `A peça deve ficar larga, comprida e baixa (achatada), parecendo um piso, e pintada de verde. Conferência: o "Scale" está na aba Home; as bolinhas aparecem nas pontas da peça selecionada. A cor muda no painel "Properties" (lado direito), na linha "Color". Um chão verde, grande e plano indica acerto.`,
    },
    {
      titulo: `Fechando as bordas do mapa`,
      tipo: `Desafio de construção`,
      tempo: `12 minutos`,
      guiaProfessor: `Explique que as paredes impedem o jogador de cair para fora. A criança vai criar quatro Parts finas e altas, uma em cada beirada. Ajude a posicionar usando o botão "Move". Lembre de ancorar cada parede.`,
      atividade: `Crie quatro paredes nas bordas do seu chão: para cada uma, faça uma nova Part, use o "Scale" para deixá-la fina, comprida e alta, posicione na beirada com o botão "Move" e clique em "Anchor". Pinte as paredes de uma cor diferente do chão.`,
      gabarito: `O mapa deve ficar cercado por quatro paredes (uma em cada lado), todas ancoradas e com cor diferente do chão. Conferência: cada parede é uma Part esticada para cima e para o lado; o "Move" (aba Home) serve para arrastar até a beirada. Se as quatro bordas estão fechadas e nada cai ao testar, está correto. É comum faltar uma parede ou ela ficar baixa; peça para conferir os quatro lados.`,
    },
    {
      titulo: `Caminho de duas cores`,
      tipo: `Desafio criativo`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o desafio mais difícil e criativo. A criança deve criar uma segunda Part fina por cima do chão, com outra cor, formando um caminho. Incentive a imaginação e a explicar a escolha ao compartilhar.`,
      atividade: `Faça um caminho no seu mundo: crie uma Part nova, estique-a como uma faixa comprida e fina, pinte de uma cor diferente (por exemplo, marrom de terra ou cinza de pedra) e posicione-a por cima do chão verde. Ancore o caminho. Conte para a turma para onde o seu caminho leva.`,
      gabarito: `Deve existir uma faixa (Part) comprida e estreita, de cor diferente, apoiada sobre o chão e ancorada, formando um caminho visível. Conferência: a faixa usa Scale para ficar fina e comprida, Color para a cor de caminho e Move para subir um pouco e ficar sobre o chão. Qualquer caminho coerente, ancorado e com cor contrastante está correto; a história de "para onde leva" é livre e criativa.`,
    },
  ],
};
