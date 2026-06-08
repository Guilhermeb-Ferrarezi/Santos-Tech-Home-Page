import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Slides que se Movem",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança sabe o que é uma transição, aplica um efeito de passagem entre dois slides e escolhe o que mais gosta, observando o movimento acontecer na tela.`,
  descricao: `Até agora a criança aprendeu a fazer um slide e a colocar uma figura nele. Hoje começa a parte mais mágica das apresentações: fazer um slide trocar pelo outro com um efeito bonito. Esse efeito de passagem de um slide para o próximo tem um nome: transição. Em vez de o slide simplesmente sumir e o outro aparecer de repente, a transição faz a troca acontecer com um movimento, como uma página virando, uma cortina abrindo ou uma imagem deslizando.

É importante a criança entender a diferença entre transição e animação, porque elas se parecem e confundem até adultos. A transição é o movimento do slide inteiro entrando ou saindo. A animação (que vem na próxima aula) é o movimento de uma coisinha dentro do slide, como uma letra que pula ou uma estrela que aparece. Nesta aula falamos só de transições: o slide inteiro se mexendo quando passamos para o próximo.

Para a idade de 5 a 9 anos, o melhor é ver muito e experimentar muito. A criança vai aplicar um efeito, apertar para passar o slide e ver o que acontece. Depois troca por outro efeito e compara. Esse 'experimenta e olha' é exatamente o objetivo da aula: perceber que existem vários jeitos do slide se mexer e descobrir qual é o favorito. Não tem resposta certa nem errada de qual efeito usar; o que vale é observar o movimento e fazer a escolha.

A aula prepara o caminho para as próximas: depois de dominar as transições, a turma vai brincar com animações (aula 4) e começar a montar uma história com começo, meio e fim (aula 5). Aqui a meta é encantamento e confiança: a criança descobre que ela mesma faz o computador fazer mágica na tela.`,
  materiais: [
    `Um computador ligado por aluno (até 10), com o PowerPoint ou o Google Apresentações já aberto antes da turma chegar, para não perder tempo.`,
    `Um arquivo pronto em cada computador com DOIS slides simples e bem coloridos (por exemplo, slide 1 com um sol e slide 2 com uma lua), para a criança só aplicar a transição e ver o efeito.`,
    `Projetor ou tela grande ligada ao computador do professor, para demonstrar cada efeito para a turma toda ao mesmo tempo.`,
    `Uma apresentação-exemplo feita pelo professor com 3 ou 4 transições diferentes já aplicadas (uma página virando, uma cortina, um deslizar), para mostrar o 'antes e depois'.`,
    `Etiquetas ou cartões com desenho de setas e movimentos (seta para o lado, cortina, giro) para ilustrar os tipos de transição no quadro.`,
    `Folhas de papel com dois quadrados grandes (representando dois slides) e lápis de cor para a atividade de desenho.`,
    `Adesivos ou carimbos de estrela para premiar quem mostrar o efeito favorito no final.`,
  ],
  conceitosChave: [
    `Transição — o efeito bonito que acontece quando um slide some e o próximo aparece, como uma mágica na troca.`,
    `Slide — cada telinha da apresentação; é como uma página que a gente mostra de cada vez.`,
    `Passar o slide — apertar uma tecla ou clicar para ir do slide de agora para o próximo.`,
    `Efeito — o tipo de movimento da transição; pode ser virar página, abrir cortina, deslizar para o lado, e muitos outros.`,
    `Modo de apresentação — quando a tela fica cheia, sem botões em volta, e a gente vê os slides de verdade, do jeito que o público vai ver.`,
    `Aplicar — escolher um efeito e mandar o computador usar ele naquele slide.`,
    `Pré-visualização — a espiadinha que a ferramenta mostra do efeito assim que você clica nele, antes mesmo de apresentar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria simples + a base técnica do assunto)

Transição é o efeito visual aplicado à entrada de um slide: é o movimento que acontece no instante em que um slide substitui o anterior durante a apresentação. Ela age sobre o slide inteiro, e não sobre os elementos de dentro dele. Isso é diferente de animação, que age sobre objetos individuais (um texto, uma imagem) e será o tema da próxima aula. Guarde essa distinção, porque os botões ficam perto e é fácil clicar no errado.

No PowerPoint, as transições ficam na aba Transições (na faixa de menus do alto). Você clica em um slide na coluna da esquerda, escolhe um efeito na galeria (Desaparecer, Empurrar, Revelar, Cortar, Página, etc.) e o efeito é aplicado só àquele slide. Ao lado há o botão Visualizar (um ícone de estrela com seta), que mostra o efeito na hora. No Google Apresentações, o caminho é o menu Slide, depois Transição, e abre um painel à direita onde você escolhe o tipo (Esmaecer, Deslizar, Inverter, Cubo, Galeria) e a velocidade; há um botão Reproduzir para pré-visualizar.

Para ver o efeito de verdade, é preciso entrar no modo de apresentação. No PowerPoint, tecla F5 (do começo) ou Shift+F5 (do slide atual); para sair, tecla Esc. No Google Apresentações, botão Apresentar no canto superior direito; para sair, Esc também. Dentro do modo de apresentação, passa-se de um slide para o outro com a tecla seta para a direita, a barra de espaço ou um clique do mouse.

## Passo a passo da aula (o que fazer e dizer, seguindo o ritmo 10/15/25/10)

1. Aquecimento (10 min): receba a turma e relembre a aula passada. Pergunte: 'Quem lembra como a gente colocou uma figura no slide?'. Abra a sua apresentação-exemplo no projetor e entre no modo de apresentação (F5 no PowerPoint ou botão Apresentar no Google). Passe os slides um a um e diga: 'Repararam que o slide se mexeu quando troquei? Isso tem nome: transição. Hoje a gente aprende a fazer essa mágica.'

2. Conteúdo novo guiado (15 min): saia do modo de apresentação (Esc). No PowerPoint, clique na aba Transições no alto; no Google Apresentações, vá em Slide, depois Transição. Mostre a galeria de efeitos no projetor. Clique em um efeito (por exemplo, Página ou Deslizar) e mostre a pré-visualização. Aponte a diferença: 'O slide inteirinho se mexe, não só uma figurinha.' Aplique dois ou três efeitos diferentes para a turma comparar e diga o nome de cada um.

3. Mão na massa (25 min): cada criança vai ao seu computador, onde já está aberto o arquivo com dois slides (sol e lua). Conduza passo a passo: 'Clique no segundo slide, lá na coluna da esquerda.' 'Agora clique na aba Transições (ou no menu Slide, Transição).' 'Escolha um efeito que você ache bonito e clique nele.' 'Olhe a espiadinha que aparece.' Depois ensine a ver de verdade: 'Aperte F5 (ou o botão Apresentar) e clique para passar o slide.' Deixe trocarem de efeito várias vezes e observarem.

4. Desafio e compartilhar (10 min): peça que cada criança escolha o efeito favorito e deixe aplicado. Um por um, mostre no projetor (ou na própria tela) a transição que cada um escolheu, e a criança diz por que gostou. Dê a estrelinha para todos que mostraram o seu efeito.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame a transição de 'a mágica da troca'. Diga que cada slide é uma página de um livro, e a transição é o jeitinho da página virar. Use gestos: faça com a mão o movimento de virar página, de abrir cortina, de empurrar para o lado. Compare com coisas que elas conhecem: 'A cortina abre como no teatro', 'O slide desliza como um escorregador', 'A página vira como num livro de história'. Reforce sempre: a transição mexe o slide inteiro, como a folha inteira do caderno. Deixe elas apertarem o botão e fazerem a mágica acontecer sozinhas, porque o encantamento vem de ver o próprio comando funcionar.

## Erros comuns e como ajudar

Aplicar o efeito mas não ver nada acontecer: quase sempre é porque a criança não entrou no modo de apresentação; lembre de apertar F5 ou o botão Apresentar e clicar para passar o slide. Clicar na aba Animações em vez de Transições: as duas ficam perto; aponte com o dedo a aba certa e repita os nomes. Querer mil efeitos diferentes e ficar perdido: combine que hoje a gente escolhe só um favorito por slide. Esperar a transição aparecer sozinha sem clicar para passar: explique que é preciso clicar ou apertar a seta para a troca acontecer. Não conseguir sair do modo de apresentação: mostre que a tecla Esc volta para a tela normal. Confundir transição com animação: lembre sempre que transição é o slide inteiro se mexendo, e animação (próxima aula) é uma coisinha de dentro.`,
  exercicios: [
    {
      titulo: `Caça à mágica`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma em frente ao projetor com a sua apresentação-exemplo no modo de apresentação. Passe os slides devagar, um de cada vez, e a cada troca pergunte o que viram. O objetivo é a criança perceber o movimento e descrevê-lo com as próprias palavras, sem se preocupar com o nome técnico ainda.`,
      atividade: `Olhe a tela grande. Toda vez que o professor passar o slide, diga o que você viu: o slide virou como uma página? Deslizou para o lado? Sumiu devagar? Levante a mão e conte o que o slide fez.`,
      gabarito: `A criança percebe que houve um movimento na troca de um slide para o outro e descreve esse movimento de algum jeito (virou, deslizou, abriu, sumiu devagar). Acertou quem notou que o slide se mexeu na passagem, mesmo usando palavras simples e diferentes das técnicas.`,
    },
    {
      titulo: `Minha primeira transição`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Leve cada criança ao seu computador com o arquivo de dois slides (sol e lua) aberto. Conduza todos juntos, passo a passo: clicar no segundo slide na coluna da esquerda, abrir a aba Transições (no PowerPoint) ou o menu Slide, Transição (no Google), e clicar em um efeito. Mostre que aparece uma espiadinha. Passe nas mesas ajudando quem não acha a aba certa.`,
      atividade: `No seu computador, clique no segundo slide (o da lua). Depois clique na aba Transições (ou no menu Slide, depois Transição). Escolha um efeito qualquer e clique nele. Veja a espiadinha que aparece na tela.`,
      gabarito: `A criança seleciona o segundo slide, abre o local das transições e aplica um efeito, e a ferramenta mostra a pré-visualização do movimento. Acertou quem conseguiu aplicar pelo menos um efeito e viu a espiadinha acontecer, mesmo que tenha precisado de ajuda para achar a aba ou o menu.`,
    },
    {
      titulo: `Apresentar de verdade`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Transforme o entrar e sair do modo de apresentação em um joguinho de comandos, estilo 'mestre mandou'. Demonstre primeiro: aperte F5 (ou o botão Apresentar), clique para passar o slide e veja a transição; depois aperte Esc para voltar. Dê os comandos para a turma toda fazer junto, repetindo algumas vezes para todos pegarem o jeito.`,
      atividade: `Siga o professor: 'Aperte F5 (ou clique em Apresentar)' e a tela fica cheia. 'Clique para passar o slide' e veja a sua transição acontecer de verdade. 'Aperte Esc' para voltar à tela normal. Faça de novo e olhe bem o seu efeito.`,
      gabarito: `A criança entra no modo de apresentação, faz a transição aparecer ao passar o slide e sai com a tecla Esc. Acertou quem viu o próprio efeito funcionar na tela cheia e conseguiu voltar para a tela normal, mesmo que tenha repetido algumas vezes até acertar a sequência.`,
    },
    {
      titulo: `Desenho da troca`,
      tipo: `Desenho`,
      tempo: `12 min`,
      guiaProfessor: `Entregue a folha com dois quadrados grandes (os dois slides) e os lápis de cor. Explique que entre um quadrado e o outro existe um movimento, a transição, e que eles vão desenhar esse movimento com setas e linhas. Mostre exemplos no quadro: setas para o lado (deslizar), uma linha no meio abrindo (cortina), um cantinho dobrado (virar página). Ajude quem não souber como representar o movimento.`,
      atividade: `Na sua folha, o primeiro quadrado é o slide do sol e o segundo é o slide da lua. No espaço entre eles, desenhe como o slide se mexe na sua transição favorita: pode ser setas mostrando o slide deslizando, uma cortina abrindo ou uma página virando. Pinte e capriche.`,
      gabarito: `O desenho representa, de alguma forma, o movimento de passagem entre os dois slides (setas de deslizar, linhas de cortina abrindo, um canto de página dobrando). Acertou quem mostrou no papel a ideia de que o slide se move ao trocar para o próximo, mesmo com um traço simples.`,
    },
    {
      titulo: `Meu efeito favorito`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Este é o ponto alto da aula. Peça que cada criança experimente trocar o efeito da transição pelo menos três vezes, vendo cada um no modo de apresentação, e então escolha o favorito para deixar aplicado. Um por um, leve a criança a mostrar o efeito escolhido (na própria tela ou no projetor) e a contar por que gostou. Comemore cada apresentação com a estrelinha.`,
      atividade: `Experimente trocar o efeito do seu segundo slide três vezes: aplique um, aperte F5 (ou Apresentar) e veja; volte com Esc e troque por outro. Depois de ver os três, escolha o seu favorito e deixe ele aplicado. Quando o professor chamar, mostre o seu efeito e diga por que você gostou mais dele.`,
      gabarito: `A criança aplica e observa pelo menos três efeitos diferentes, escolhe um favorito, deixa esse efeito aplicado no slide e o apresenta dizendo um motivo da escolha (por exemplo, 'gostei porque parece uma cortina' ou 'porque é rápido'). Acertou quem comparou os efeitos e fez uma escolha consciente, justificando do seu jeito, mesmo com ajuda para trocar os efeitos.`,
    },
  ],
};
