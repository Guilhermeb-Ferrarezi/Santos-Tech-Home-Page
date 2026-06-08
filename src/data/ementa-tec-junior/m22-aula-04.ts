import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Acabamento caprichado",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Deixar cada modelo 3D com acabamento bonito e completo, combinando cores no vertex color e arrumando os cantinhos que ficaram tortos ou sem pintura.`,
  descricao: `Nesta aula a turma volta ao Maya para dar o toque final nos modelos 3D que estão sendo construídos para o jogo. Na aula passada as crianças pintaram seus modelos com vertex color, ou seja, deram cor diretamente nos vértices (os pontinhos que formam o desenho 3D). Agora o foco é o capricho: olhar com calma, achar os pedaços que ficaram com a cor errada, sem cor ou meio borrados, e arrumar tudo até o modelo ficar lindo de ver.

Vertex color é como pintar com giz de cera num boneco feito de pontos: cada ponto guarda uma cor, e a cor escorre suavemente de um ponto para o vizinho. Por isso, combinar cores é uma habilidade nova e divertida. Quando dois vértices vizinhos têm cores diferentes, o Maya cria uma misturinha entre eles. A criança pode usar isso de propósito para fazer um céu que vai do azul-claro ao azul-escuro, ou uma maçã que é vermelha embaixo e amarela em cima.

O professor vai mostrar no projetor como passar a cor com a ferramenta Paint Vertex Color Tool, como trocar a cor no seletor, e como consertar manchas usando o modo de seleção de vértices. A ideia não é refazer tudo, e sim revisar e melhorar: achar o errinho, escolher a cor certa e pintar por cima com carinho. É o momento de transformar um modelo "quase pronto" num modelo "caprichado e pronto de verdade".

Ao final, cada criança terá um asset 3D com acabamento completo, sem buracos de cor e com combinações bonitas, pronto para a próxima etapa do mês: virar realidade na impressora 3D. O capricho de hoje é o que faz o trabalho parecer profissional e deixa todo mundo orgulhoso.`,
  materiais: [
    `Computadores com o Maya aberto e o modelo 3D de cada criança já salvo da aula anterior`,
    `Projetor ligado para o professor demonstrar passo a passo na tela grande`,
    `Dois ou três modelos exemplo: um bem caprichado e um com erros de cor de propósito (para comparar)`,
    `Cartela impressa de combinações de cores (degradês simples: azul-claro para azul-escuro, amarelo para laranja)`,
    `Lupa de papel ou moldura de papelão para a criança "examinar" o próprio modelo`,
    `Adesivos ou carimbos de estrela para premiar o capricho na hora de compartilhar`,
  ],
  conceitosChave: [
    `Vertex color — pintar dando cor direto nos pontinhos (vértices) do modelo 3D.`,
    `Vértice — cada pontinho que forma o desenho em 3D; é onde a cor fica guardada.`,
    `Acabamento — o toque final caprichado que deixa o modelo bonito e completo.`,
    `Combinar cores — colocar cores que ficam bem juntas, como azul-claro perto de azul-escuro.`,
    `Degradê — quando uma cor vai mudando devagarzinho para outra, sem pulo.`,
    `Mancha — um pedaço com a cor errada ou sem cor que precisa ser consertado.`,
    `Seleção de vértices — escolher só os pontinhos que você quer pintar de novo.`,
  ],
  treinamento: `## O que o professor precisa saber

Vertex color guarda uma cor em cada vértice do modelo. Entre dois vértices, o Maya faz uma mistura suave (degradê). Você não precisa dominar o Maya: basta saber abrir a ferramenta de pintar, trocar a cor e selecionar vértices. Antes da aula, abra um modelo de teste e treine duas vezes os passos abaixo. Confirme que cada criança consegue achar o arquivo salvo na aula passada (oriente todos a abrir pelo menu File > Open Scene). Deixe o painel de cores já visível e a turma no modo de visualização que mostra cor: no menu de cima da janela 3D (viewport), ative o botão de luzes e cores ou pressione a tecla 6, que liga a exibição com textura e cor.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada criança abra seu modelo (File > Open Scene). No projetor, mostre o modelo exemplo caprichado ao lado do modelo cheio de erros. Pergunte: "Qual está mais bonito? Por quê?". Leve a turma a notar manchas, cantos sem cor e cores que brigam. Distribua a lupa de papel e peça que cada um examine o próprio modelo e aponte um errinho.

Conteúdo novo guiado (15 min): no projetor, selecione o modelo. Clique com o botão direito sobre ele e escolha Paint (ou vá em Mesh Display > Apply Color, e use Color Set Editor se precisar). Abra a Paint Vertex Color Tool: menu Mesh Display > Paint Vertex Color Tool, e clique no quadradinho de opções ao lado. No painel da direita, mostre onde fica a cor (Color), o tamanho do pincel (Radius) e a força (Opacity). Troque a cor clicando no quadrado colorido: escolha azul-claro, pinte uma parte; troque para azul-escuro, pinte ao lado, e mostre o degradê surgindo. Depois ensine a consertar manchas: clique com o botão direito no modelo e escolha Vertex, selecione só os vértices errados, abra a ferramenta de novo e pinte com a cor certa.

Mão na massa (25 min): cada criança revisa seu modelo. Roteiro na lousa: 1) achar manchas e cantos sem cor; 2) escolher a cor certa; 3) pintar por cima com capricho; 4) testar uma combinação de duas cores (degradê) num pedaço. Circule pela sala, ajude a trocar a cor e a regular o pincel. Lembre de salvar (File > Save Scene) na metade do tempo.

Desafio e compartilhar (10 min): desafio "caça à mancha" - cada um acha e conserta mais um errinho escondido. Depois, cada criança gira o modelo na tela e mostra a melhor combinação de cores. Dê um adesivo de estrela para cada capricho.

## Como explicar para crianças

Diga: "Cada pontinho do seu modelo é como uma lâmpada que guarda uma cor. Quando dois pontinhos perto têm cores diferentes, a cor escorre de um para o outro, igual tinta na água." Para combinar cores, use a analogia do céu: "De manhã o céu é azul-clarinho lá em cima e mais escuro perto do chão." Para o capricho: "Vamos ser detetives de mancha: cadê o pedaço que esqueceu de pintar?". Mostre sempre antes de pedir, e elogie o esforço.

## Erros comuns e como ajudar

A criança pinta sem querer o modelo todo: diminua o Radius (tamanho do pincel) e baixe a Opacity. Ela não vê a cor mudar: confira se apertou a tecla 6 para ligar a exibição de cor na viewport. Ela seleciona o objeto inteiro em vez de vértices: clique com o botão direito e escolha Vertex de novo. A cor fica chapada e feia: ensine a usar duas cores vizinhas para criar degradê. A criança apaga o trabalho: lembre de salvar várias vezes (File > Save Scene) e elogie quem salva sozinho.`,
  exercicios: [
    {
      titulo: `Detetive de manchas`,
      tipo: `Observação guiada`,
      tempo: `5 min`,
      guiaProfessor: `Mostre no projetor os dois modelos exemplo (um caprichado, um com erros). Conduza a turma a apontar com o dedo onde estão os problemas. Não precisa mexer no Maya ainda, é só treinar o olhar.`,
      atividade: `Olhe o seu modelo com a lupa de papel e ache pelo menos dois lugares com problema: uma mancha de cor errada e um cantinho sem cor. Aponte cada um para o professor.`,
      gabarito: `A criança identifica corretamente ao menos um ponto sem cor e um ponto com cor errada no próprio modelo. Exemplos comuns: a base do objeto ficou cinza sem pintar; um lado ficou com a cor do vizinho por engano. O professor confirma apontando junto.`,
    },
    {
      titulo: `Trocando a cor certa`,
      tipo: `Prática individual`,
      tempo: `5 min`,
      guiaProfessor: `Garante que cada criança abriu a Paint Vertex Color Tool (Mesh Display > Paint Vertex Color Tool). Mostre de novo onde clicar para trocar a cor no quadrado colorido do painel da direita.`,
      atividade: `Abra a ferramenta de pintar. Clique no quadradinho de cor e escolha uma cor nova. Pinte um pedaço pequeno do seu modelo para testar.`,
      gabarito: `A criança consegue abrir a ferramenta, trocar a cor no seletor e ver a cor nova aparecer em um pedaço do modelo. Se a cor não aparecer, o professor verifica se a tecla 6 está ligada na viewport.`,
    },
    {
      titulo: `Consertando uma mancha`,
      tipo: `Prática com correção`,
      tempo: `6 min`,
      guiaProfessor: `Ajude a criança a selecionar só os vértices errados: botão direito sobre o modelo, escolher Vertex, clicar nos pontinhos problemáticos. Depois pintar com a cor certa. Regule Radius e Opacity se ela pintar demais.`,
      atividade: `Escolha uma das manchas que você achou. Selecione os pontinhos errados (botão direito, Vertex) e pinte por cima com a cor certa até a mancha sumir.`,
      gabarito: `A mancha escolhida fica corrigida: o pedaço passa a ter a cor combinada com o resto. O professor confirma comparando o antes e o depois. Aceita-se ajuda na seleção dos vértices.`,
    },
    {
      titulo: `Degradê de duas cores`,
      tipo: `Desafio criativo`,
      tempo: `6 min`,
      guiaProfessor: `Mostre a cartela de combinações (azul-claro para azul-escuro, amarelo para laranja). Demonstre no projetor pintar um lado com a cor clara e o lado vizinho com a escura, deixando o Maya misturar.`,
      atividade: `Escolha duas cores que combinam da cartela. Pinte um pedaço do seu modelo com a cor clara e o pedaço do lado com a cor escura, deixando virar um degradê suave.`,
      gabarito: `A criança cria um degradê visível entre duas cores que combinam, sem pulo brusco. Exemplo: céu do modelo passa de azul-claro a azul-escuro. O professor valoriza a transição suave, mesmo que pequena.`,
    },
    {
      titulo: `Acabamento completo e mostrar`,
      tipo: `Projeto final da aula`,
      tempo: `8 min`,
      guiaProfessor: `Peça uma última volta de revisão e o salvamento (File > Save Scene). Organize a roda de compartilhar: cada criança gira o modelo na tela e mostra a parte mais caprichada. Dê o adesivo de estrela.`,
      atividade: `Dê uma última olhada geral: não pode sobrar nenhum cantinho sem cor. Salve o seu trabalho (File > Save Scene), gire o modelo na tela e mostre para a turma a sua melhor combinação de cores.`,
      gabarito: `O modelo está com acabamento completo: sem buracos de cor, com pelo menos uma combinação de cores bonita, e salvo corretamente. A criança consegue girar o modelo e apontar a parte que mais caprichou. Pronto para a etapa de impressão 3D.`,
    },
  ],
};
