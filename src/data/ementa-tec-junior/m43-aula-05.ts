import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Detalhes que dão vida",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Acrescentar detalhes na peça dentro do Maya empurrando e puxando partes da malha, criando relevos, encaixes e formas menores para deixar o modelo mais parecido com o desenho planejado.`,
  descricao: `Até agora cada criança construiu a forma principal da sua peça: o corpinho básico, o esqueleto do objeto que vai virar impressão 3D de verdade. Hoje é a aula em que a peça começa a ganhar personalidade. Vamos aprender a empurrar e puxar partes da malha (a casquinha de pontos e faces que envolve o modelo) para fazer relevos que saltam pra fora, fendas que afundam pra dentro e formas menores que antes só existiam no desenho do caderno.

A ideia central é simples e poderosa: no Maya, mexer num modelo é como mexer numa massinha de modelar feita de pontos. Cada ponto (vértice), cada linha (aresta) e cada quadradinho (face) pode ser selecionado e arrastado. Quando movemos esses pedacinhos, a superfície inteira acompanha, como um lençol que se levanta quando puxamos um cantinho. É assim que aparecem botões, ranhuras, beirinhas e saliências. A ferramenta-estrela da aula é a Move Tool (a setinha de mover, atalho W), usada agora não no objeto inteiro, mas em partes pequenas da malha.

O professor demonstra primeiro no projetor, devagar, mostrando como entrar no modo de edição de componentes (apertando a tecla de atalho ou clicando com o botão direito e escolhendo Vertex, Edge ou Face). Depois cada criança volta para a sua peça e escolhe um detalhe do seu desenho para construir: o relevo de um escudo, o encaixe de uma tampa, a ponta de uma orelha. Não precisa fazer tudo hoje; a meta é a peça ficar mais rica e mais parecida com o plano.

Por ser uma turma pequena, de até dez alunos, dá tempo de passar de mesa em mesa e ajudar cada criança a empurrar o ponto certo. O clima é de descoberta e capricho: cada detalhe que aparece é uma pequena vitória que aproxima o modelo do desenho original e prepara a peça para o acabamento das próximas aulas.`,
  materiais: [
    `Computadores com o Maya aberto, cada um com o arquivo da peça da criança já carregado da aula anterior`,
    `Projetor ou TV conectado ao computador do professor para demonstrar cada clique no Maya`,
    `Desenho ou plano de peça de cada criança (feito na Aula 2) à vista, em cima da mesa`,
    `Modelos de exemplo prontos no Maya: uma peça "lisa" e a mesma peça "com detalhes", para comparar`,
    `Mouse de três botões em cada computador (o botão direito abre os menus de seleção de componentes)`,
    `Cartão de atalhos impresso na mesa: Q (selecionar), W (mover), botão direito (Vertex/Edge/Face)`,
    `Massinha de modelar de verdade (opcional) para a analogia de empurrar e puxar a superfície`,
  ],
  conceitosChave: [
    `Malha — a casquinha de pontos e quadradinhos que forma a superfície do modelo 3D, como uma rede que veste a peça.`,
    `Vértice — cada pontinho da malha; é a "estrela" que a gente puxa para esticar a superfície num lugar.`,
    `Aresta — a linha que liga dois vértices; é uma "linhazinha" que dá pra arrastar para criar dobras.`,
    `Face — cada quadradinho fechado da malha; é a "telha" que dá pra empurrar pra fora ou pra dentro.`,
    `Relevo — quando uma parte salta pra fora da peça, como um botão ou uma beirinha levantada.`,
    `Encaixe — um afundado ou recorte na peça onde outra coisa pode entrar, como o buraco da tampa.`,
    `Move Tool (atalho W) — a setinha de mover do Maya, que agora usamos para puxar pedacinhos da malha, não a peça toda.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. O segredo da aula é uma ideia só: dá pra mexer em partes pequenas do modelo, não apenas na peça inteira. Para isso existe o modo de componentes. No modo normal (Object Mode) você seleciona a peça toda; no modo de componentes você seleciona pontos (Vertex), linhas (Edge) ou quadradinhos (Face). Para alternar, clique com o botão direito do mouse em cima da peça e segure: aparece um menu em forma de roda (marking menu) com as opções Vertex, Edge, Face e Object. Solte em cima da que quiser. Depois é só usar a Move Tool (atalho W): clica no ponto, surgem três setas coloridas (vermelha = X, verde = Y, azul = Z) e você arrasta. Antes da aula, abra o seu modelo de exemplo e treine: entre em Vertex, puxe um ponto pra fora (vira relevo) e empurre outro pra dentro (vira encaixe). Salve sempre com Ctrl+S. Se algo der errado, Ctrl+Z desfaz.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Maya)

10 min — Aquecimento e revisão. Reúna a turma de frente para o projetor. Mostre lado a lado a peça "lisa" e a peça "com detalhes". Pergunte: "O que mudou? O que ganhou vida?". Pegue a massinha e empurre um cantinho pra fora e outro pra dentro, dizendo que no Maya é igual, só que com pontinhos.

15 min — Conteúdo novo guiado. No seu computador, com o exemplo aberto, faça devagar: clique com o botão direito na peça, segure, e escolha Vertex no menu em roda. Aperte W para chamar a Move Tool. Clique num ponto da malha; aparecem as três setas. Arraste a seta verde (Y) pra cima: nasce um relevo. Diga "puxei pra fora!". Depois clique noutro ponto e empurre pra baixo: nasce um afundado. Mostre também o modo Face (botão direito, Face): selecione um quadradinho e empurre pra dentro para criar um encaixe. Lembre de salvar com Ctrl+S e de desfazer com Ctrl+Z.

25 min — Mão na massa. Cada criança abre a própria peça e o seu desenho ao lado. Peça que escolham UM detalhe do desenho para construir hoje (um botão, uma beirada, uma ponta). Passe de mesa em mesa: ajude a entrar no modo Vertex (botão direito), apertar W e arrastar o ponto certo. Reforce: puxar pra fora faz relevo, empurrar pra dentro faz encaixe. Quem terminar um detalhe começa outro.

10 min — Desafio e compartilhar. Cada criança gira a peça (segurando Alt e arrastando com o botão esquerdo) e mostra à turma o detalhe novo, contando se é relevo ou encaixe e a qual parte do desenho ele corresponde.

## Como explicar para crianças

Use a massinha: "A casquinha do modelo é feita de pontinhos. Puxar um pontinho é como puxar a massinha: a superfície inteira sobe junto." Para relevo, diga "pra fora, vira montanha"; para encaixe, "pra dentro, vira buraquinho ou caverna". Compare as três setas coloridas com um elevador: a verde (Y) sobe e desce, a vermelha (X) vai pros lados, a azul (Z) vai pra frente e pra trás. Mostre que o botão direito é a "varinha mágica" que troca entre mexer no ponto, na linha ou no quadradinho.

## Erros comuns e como ajudar

O erro mais comum é a criança continuar no Object Mode e mover a peça inteira sem querer; mostre que precisa entrar em Vertex pelo botão direito antes. Outro é arrastar a seta errada e o ponto ir pro lugar errado: peça Ctrl+Z e lembre a cor de cada eixo. Algumas crianças puxam o ponto longe demais e a malha "estica feio"; ensine a puxar pouquinho de cada vez. Há quem clique no vazio e perca a seleção; é normal, basta clicar de novo no ponto. E muitos esquecem de salvar: combine de apertar Ctrl+S a cada detalhe pronto, como um carimbo de "guardei meu progresso".`,
  exercicios: [
    {
      titulo: `Liso ou cheio de vida?`,
      tipo: `Pergunta oral em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento, antes de demonstrar. Mostre no projetor a peça lisa e a peça com detalhes, lado a lado. Deixe as crianças apontarem as diferenças em voz alta e elogie cada observação. Conduza para os termos relevo (pra fora) e encaixe (pra dentro).`,
      atividade: `Olhe as duas peças na tela. Diga em voz alta: o que a peça da direita ganhou que a da esquerda não tem? Aponte uma parte que saltou pra fora e uma parte que afundou pra dentro.`,
      gabarito: `A peça da direita ganhou detalhes: partes que saltam pra fora (relevos, como botões e beiradas) e partes que afundam pra dentro (encaixes, como ranhuras e buracos). São esses detalhes que deixam a peça mais parecida com o desenho e dão vida a ela.`,
    },
    {
      titulo: `A varinha do botão direito`,
      tipo: `Prática guiada curta`,
      tempo: `5 minutos`,
      guiaProfessor: `Logo após a demonstração. Peça que cada criança, na própria peça, clique com o botão direito, segure e abra o menu em roda. O objetivo é só treinar a troca para o modo Vertex, sem mover nada ainda. Confira mesa a mesa se os pontinhos da malha apareceram.`,
      atividade: `Na sua peça, clique com o botão direito do mouse em cima dela e segure. No menu em roda que aparece, solte em cima de Vertex. Veja os pontinhos da malha aparecerem na peça toda.`,
      gabarito: `A criança entrou no modo Vertex quando os vértices (pontinhos) aparecem espalhados pela superfície da peça. Isso mostra que ela saiu do Object Mode e agora pode selecionar e mover pontos individuais. Se quiser voltar, é o mesmo caminho: botão direito, Object.`,
    },
    {
      titulo: `Puxando o meu primeiro relevo`,
      tipo: `Mão na massa guiada (prática real)`,
      tempo: `10 minutos`,
      guiaProfessor: `Núcleo da aula. Sente-se ao lado de cada criança. Confirme que está no modo Vertex, peça para apertar W (Move Tool), clicar num ponto e arrastar a seta verde (Y) pra cima só um pouquinho. Reforce a cor do eixo e o "puxar devagar". Mande salvar com Ctrl+S ao terminar.`,
      atividade: `Entre no modo Vertex, aperte W e clique num pontinho onde você quer um relevo. Arraste a seta verde para cima só um pouquinho e veja a superfície subir, formando uma montanhinha. Salve com Ctrl+S.`,
      gabarito: `O exercício está correto quando uma parte da peça saltou pra fora formando um relevo, sem esticar a malha de forma estranha. Sinais de êxito: o ponto foi movido pela seta verde (eixo Y, pra cima) e o arquivo foi salvo com Ctrl+S. Se ficou exagerado, Ctrl+Z e puxa menos.`,
    },
    {
      titulo: `Cavando um encaixe`,
      tipo: `Desafio individual aplicado`,
      tempo: `8 minutos`,
      guiaProfessor: `Depois do relevo. Agora a criança cria o oposto: um afundado. Pode usar Vertex (empurrar um ponto pra dentro) ou Face (botão direito, Face; selecionar um quadradinho e empurrar pra dentro). Ajude a escolher um lugar do desenho onde caberia um encaixe. Lembre de salvar.`,
      atividade: `Escolha um lugar da sua peça que no seu desenho tem um buraquinho ou recorte. Empurre um ponto (ou uma face) para dentro, usando a Move Tool, até formar um afundado. Esse é o seu encaixe! Salve com Ctrl+S.`,
      gabarito: `O desafio é cumprido quando aparece um afundado (encaixe) na peça, criado empurrando um vértice ou uma face pra dentro com a Move Tool. O encaixe deve corresponder a um detalhe do desenho da criança. Diferente do relevo (pra fora), o encaixe vai pra dentro da superfície.`,
    },
    {
      titulo: `Mostro e explico meu detalhe`,
      tipo: `Compartilhar e explicar (apresentação curta)`,
      tempo: `7 minutos`,
      guiaProfessor: `No fechamento. Cada criança gira a peça (Alt + botão esquerdo arrastando) e mostra à turma o detalhe novo. Peça que diga se é relevo ou encaixe, qual seta usou e a qual parte do desenho corresponde. Estimule a turma a aplaudir cada peça. Use para revisar os termos da aula.`,
      atividade: `Gire a sua peça segurando a tecla Alt e arrastando com o botão esquerdo do mouse. Mostre para a turma o detalhe que você criou hoje e conte: é um relevo ou um encaixe? A qual parte do seu desenho ele corresponde?`,
      gabarito: `A criança consegue girar a peça com Alt + botão esquerdo, apontar o detalhe novo e classificá-lo corretamente como relevo (parte que salta pra fora) ou encaixe (parte que afunda pra dentro), ligando-o a um pedaço do seu desenho. Qualquer detalhe bem explicado conta como sucesso; o foco é a peça ter ficado mais parecida com o plano.`,
    },
  ],
};
