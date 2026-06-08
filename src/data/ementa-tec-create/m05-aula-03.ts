import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Do Cubo ao Objeto",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Entrar no Modo de Edição do Blender e usar vértices, arestas e faces para, partindo de um cubo, fazer as primeiras extrusões que começam a dar forma ao objeto que será impresso.`,
  descricao: `Nesta aula os alunos descobrem o que é, de verdade, um modelo 3D por dentro. Até agora eles movimentaram objetos inteiros pelo espaço; hoje vão abrir o cubo e mexer nas peças que o formam. Todo modelo no Blender é feito de três elementos: vértices (os pontinhos nos cantos), arestas (as linhas que ligam dois pontos) e faces (as superfícies fechadas entre as arestas). Esse conjunto se chama malha, e editar a malha é o coração da modelagem.

A grande novidade é o Modo de Edição (Edit Mode). No Modo de Objeto, que eles já conhecem, o cubo se comporta como uma caixa fechada que só dá para girar e mover. No Modo de Edição, a caixa se abre: cada canto, cada linha e cada lado pode ser selecionado e puxado separadamente. É a diferença entre segurar um bloco de massinha pronto e poder esticar pedaços dele com os dedos.

A ferramenta-estrela do dia é a extrusão (Extrude). Extrudar é puxar uma face para fora e criar um novo volume preso ao anterior, como se a peça crescesse um braço. Com poucas extrusões, um cubo simples vira um banquinho, uma letra, uma chave, um robozinho. É assim que se constrói um objeto a partir de uma forma básica: não modelando tudo de uma vez, e sim acrescentando e esticando partes aos poucos.

Esta aula prepara o terreno para as próximas, em que o aluno vai refinar o seu próprio objeto. Aqui o foco é entender a lógica da malha e ganhar confiança com a extrusão. O entregável do mês continua sendo um modelo pronto para imprimir, e dominar vértices, arestas, faces e extrusão é o passo que transforma uma caixa qualquer em um objeto com cara de projeto.`,
  materiais: [
    `Computadores com o Blender instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a tela do Blender em tempo real`,
    `Arquivo de exemplo com um cubo limpo no centro da cena, igual para todos`,
    `Imagem de referência simples (um banquinho ou uma letra em 3D) para mostrar o resultado esperado`,
    `Folha com o resumo dos atalhos do dia (Tab, número 1/2/3, E para extrudar)`,
    `Uma peça impressa pronta na sala como referência visual de objeto acabado`,
  ],
  conceitosChave: [
    `Malha (mesh) — o conjunto de vértices, arestas e faces que forma todo objeto 3D no Blender.`,
    `Vértice — o pontinho nos cantos do modelo; é o elemento mais básico da malha.`,
    `Aresta — a linha reta que liga dois vértices, formando as bordas do objeto.`,
    `Face — a superfície fechada entre arestas; é o "lado" cheio que vemos do objeto.`,
    `Modo de Edição (Edit Mode) — modo do Blender em que abrimos a malha e mexemos em vértices, arestas e faces separadamente.`,
    `Extrusão (Extrude) — ação de puxar uma face ou aresta para fora, criando um novo volume preso ao objeto.`,
    `Modo de Objeto (Object Mode) — modo em que tratamos o objeto inteiro, usado para mover, girar e organizar a cena.`,
  ],
  treinamento: `## O que o professor precisa saber

Todo modelo no Blender é uma malha: vértices (pontos), arestas (linhas) e faces (superfícies). No Modo de Objeto trabalhamos o objeto inteiro; no Modo de Edição entramos "dentro" dele e mexemos nessas três peças. A tecla que troca entre os dois modos é o Tab (com o mouse sobre a janela 3D). Dentro do Modo de Edição, as teclas 1, 2 e 3 (as do alto do teclado, não as do teclado numérico) escolhem se você seleciona vértices (1), arestas (2) ou faces (3). A ferramenta principal da aula é a extrusão: seleciona-se uma face, aperta-se E e move-se o mouse para puxar um novo volume. Antes da aula, abra o arquivo de exemplo, aperte Tab, teste 1/2/3 e faça duas ou três extrusões com E para não titubear na frente da turma. Deixe a folha de atalhos visível e o projetor ligado mostrando a sua tela.

## Passo a passo da aula (ritmo 10/15/25/10)

1. 10 min — Aquecimento e revisão: Mostre a peça impressa e pergunte "como será que isso começou?". Reveja com a turma como mover e girar o cubo (Modo de Objeto). Diga que hoje vamos abrir o cubo por dentro.

2. 15 min — Conteúdo novo guiado: No projetor, com o cubo selecionado, aperte Tab e diga "entramos no Modo de Edição". Mostre o cubo cheio de pontos laranjas. Aperte 1 e clique num vértice; aperte 2 e clique numa aresta; aperte 3 e clique numa face, nomeando cada elemento. Depois, com uma face selecionada (modo 3), aperte E, mova o mouse para cima e clique para confirmar: "isso é extrudar, a peça cresceu um braço". Faça mais uma extrusão para virar um L. Aperte Tab para voltar ao Modo de Objeto e mostrar o objeto novo.

3. 25 min — Mão na massa: Cada aluno, no seu cubo de exemplo, repete a sequência. Primeiro treina Tab para entrar e sair do Modo de Edição. Depois pratica selecionar vértice, aresta e face com 1, 2 e 3. Por fim, seleciona faces e faz pelo menos três extrusões com E para transformar o cubo num banquinho ou numa letra. Circule pela sala conferindo se estão no modo certo e se confirmam a extrusão com clique.

4. 10 min — Desafio e compartilhar: Lance o desafio "transforme o cubo em uma letra do seu nome só com extrusões". Cada aluno mostra o resultado no projetor e conta quantas extrusões usou. Feche reforçando: todo objeto começa numa forma simples e cresce por partes.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da massinha: "no Modo de Objeto a massinha está endurecida e você só consegue girar o bloco; no Modo de Edição ela amolece e você puxa pedaços com os dedos". Apresente os três elementos como uma família: "o ponto (vértice) é o bebê, a linha entre dois pontos (aresta) é o irmão, e o lado cheio (face) é o pai". Para a extrusão diga "é puxar um lado para fora e a peça ganha um braço novo, grudado". Repita a frase-chave: "Tab abre e fecha a caixa". Mostre cada passo na sua tela antes de pedir que façam, e fale em voz alta o atalho enquanto aperta.

## Erros comuns e como ajudar

O erro mais comum é tentar usar os atalhos com o mouse fora da janela 3D; lembre que o cursor precisa estar sobre a cena para Tab e E funcionarem. Muitos usam os números do teclado numérico em vez dos números de cima; oriente usar a fileira acima das letras para trocar entre vértice, aresta e face. Outro tropeço é apertar E e mover demais, criando um volume gigante, ou clicar com o botão direito no meio da extrusão (o que cancela a posição mas deixa uma face duplicada no lugar); ensine a apertar E, mover pouco e confirmar com clique esquerdo. Alguns esquecem que estão no Modo de Edição e acham que o objeto "travou"; basta apertar Tab para voltar. Por fim, há quem extrude sem ter nada selecionado e ache que nada aconteceu; reforce sempre selecionar uma face antes de apertar E.`,
  exercicios: [
    {
      titulo: `Abrindo e fechando a caixa`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno mantenha o mouse sobre a janela 3D ao apertar Tab. Confira pela sala quem está preso no modo errado. O objetivo é só ganhar firmeza em entrar e sair do Modo de Edição.`,
      atividade: `Com o cubo de exemplo selecionado, aperte Tab para entrar no Modo de Edição e observe os pontos laranjas aparecerem. Aperte Tab de novo para voltar ao Modo de Objeto. Repita pelo menos cinco vezes e diga em voz alta em qual modo você está a cada vez.`,
      gabarito: `A tecla Tab alterna entre os dois modos, sempre com o mouse sobre a janela 3D. No Modo de Edição aparecem os vértices, arestas e faces selecionáveis (pontos e linhas destacados); no Modo de Objeto o cubo volta a ser uma caixa fechada que só gira e move.`,
    },
    {
      titulo: `Ponto, linha e lado`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce que os números são os da fileira de cima do teclado, não os do numérico. Peça que digam o nome do elemento ao selecioná-lo. Passe conferindo se o ícone de seleção no topo muda junto.`,
      atividade: `No Modo de Edição, aperte 1 e clique em um vértice; aperte 2 e clique em uma aresta; aperte 3 e clique em uma face. Faça isso em cantos diferentes do cubo e fale o nome de cada elemento que você seleciona.`,
      gabarito: `A tecla 1 ativa a seleção de vértices (os pontos dos cantos), a 2 ativa arestas (as linhas entre dois pontos) e a 3 ativa faces (os lados cheios). Ao trocar, os três ícones no canto superior esquerdo da janela mudam de destaque acompanhando o modo escolhido.`,
    },
    {
      titulo: `A primeira extrusão, em dupla`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Cada dupla reveza: um faz a extrusão e o outro confere se selecionou a face antes de apertar E e se confirmou com clique esquerdo. Lembre-os de mover pouco o mouse para não criar volumes gigantes.`,
      atividade: `Em dupla, selecione uma face do cubo (modo 3), aperte E, mova o mouse devagar para fora e clique para confirmar. Façam isso uma vez cada. Depois respondam: o que apareceu de novo no objeto e onde ele ficou preso?`,
      gabarito: `Após apertar E e confirmar, surge um novo volume "esticado" a partir da face escolhida, grudado no cubo original pelas arestas dessa face. A peça ganha um braço; a extrusão sempre nasce presa ao objeto, sem se soltar dele.`,
    },
    {
      titulo: `Roda de conversa da malha`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza por perguntas, sem entregar a resposta pronta. Anote no quadro os três elementos e a extrusão conforme surgirem. Valorize quem usar comparações próprias do dia a dia.`,
      atividade: `Em roda, cada aluno explica com suas palavras um destes itens, sem repetir o colega: o que é vértice, o que é aresta, o que é face, o que faz o Modo de Edição e o que faz a extrusão. Tentem usar uma comparação do dia a dia.`,
      gabarito: `Respostas válidas: vértice é o ponto do canto; aresta é a linha que liga dois pontos; face é o lado cheio entre as arestas; o Modo de Edição abre o objeto para mexer nessas peças separadamente; a extrusão puxa uma face e cria um volume novo preso ao objeto. Comparações com massinha, casa ou Lego são bem-vindas.`,
    },
    {
      titulo: `Do cubo ao meu objeto`,
      tipo: `projeto curto`,
      tempo: `13 minutos`,
      guiaProfessor: `Peça uma forma simples e reconhecível, não uma obra-prima. Avalie se o aluno usou extrusões encadeadas e soube entrar e sair do Modo de Edição. Aceite resultados diferentes desde que feitos só com os recursos do dia.`,
      atividade: `Partindo do cubo de exemplo, use apenas extrusões (E) para transformá-lo em um objeto reconhecível: um banquinho, uma letra do seu nome ou uma escadinha. Faça pelo menos três extrusões, volte ao Modo de Objeto com Tab e conte quantas extrusões você usou.`,
      gabarito: `Um bom resultado mostra um objeto reconhecível construído a partir do cubo com três ou mais extrusões encadeadas, todas presas entre si. O aluno deve conseguir alternar para o Modo de Objeto com Tab e descrever a sequência usada, por exemplo: "extrudei a face de cima duas vezes e uma face do lado para fazer o encosto do banquinho".`,
    },
  ],
};
