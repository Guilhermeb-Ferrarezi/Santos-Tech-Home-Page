import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Materiais e UVs: A Pele dos Modelos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Planificar a malha 3D com UV unwrap no Maya, organizar as ilhas de UV e aplicar materiais base com cor e parâmetros, entendendo como a Unreal lê essas informações.`,
  descricao: `Nesta aula os alunos descobrem que todo modelo 3D tem duas peles. A primeira é a malha de polígonos, que dá o formato. A segunda é a superfície que se vê: a cor, o brilho e o material. Para o computador pintar essa superfície de forma correta, ele precisa de um mapa que diga onde cada pedaço da textura cai no modelo. Esse mapa se chama UV, e construí-lo é o tema central de hoje.

O conceito de UV é simples quando explicado com uma comparação. Imagine descascar uma laranja e abrir a casca esticada sobre a mesa: você transformou uma forma 3D em algo plano 2D. No Maya, esse processo se chama UV unwrap (planificar). As coordenadas U e V são como X e Y, mas vivem no espaço plano da textura, que vai de 0 a 1 nos dois eixos. Cada pedaço plano da casca aberta é uma ilha de UV. Organizar bem essas ilhas evita que a textura fique esticada, repetida ou borrada no jogo.

Depois de planificar, o aluno aprende a aplicar um material base. Material é a receita visual da superfície: qual a cor, o quanto reflete a luz, se é metálico ou áspero. No Maya usamos um material moderno chamado Standard Surface, que conversa bem com motores de jogo. Ajustar parâmetros como cor base (Base Color), aspereza (Roughness) e metalicidade (Metalness) prepara o modelo para receber texturas reais na próxima aula.

Ao final, cada aluno terá um modelo com UVs limpas e organizadas e ao menos um material base aplicado. O fechamento conecta tudo com a Unreal: o motor de jogo usa exatamente essas coordenadas UV para colar as texturas, e lê os mesmos parâmetros de material no fluxo PBR. UVs bem feitas hoje significam texturas bonitas e sem defeito amanhã.`,
  materiais: [
    `Computadores com o Maya instalado (versão atual), um por aluno`,
    `Projetor ou TV para o professor demonstrar cada painel e cada clique na tela`,
    `Arquivo de exemplo: um modelo simples já modelado (uma caixa de madeira ou um baú low-poly) em formato .mb ou .ma`,
    `Imagem de textura quadriculada (checker map) para testar a distorção das UVs, na pasta de exemplos`,
    `Folha impressa com o passo a passo do UV unwrap e a lista dos parâmetros do material`,
    `Slide com a comparação da laranja descascada para explicar o conceito de UV`,
  ],
  conceitosChave: [
    `UV — o mapa plano (2D) que diz onde cada parte da textura cai sobre o modelo 3D; U e V são como X e Y do espaço da textura.`,
    `UV unwrap (planificar) — abrir a malha 3D em pedaços planos, como descascar uma laranja e esticar a casca na mesa.`,
    `Ilha de UV — cada pedaço plano e separado da malha planificada dentro do espaço da textura.`,
    `Seam (costura) — a linha onde a gente corta a malha para poder abri-la; é onde duas ilhas se separam.`,
    `Espaço 0 a 1 (UV space) — a área quadrada onde as ilhas precisam caber, indo de 0 a 1 nos dois eixos.`,
    `Material — a receita visual da superfície: cor, brilho e tipo (metal ou não), aplicada à malha.`,
    `Standard Surface — o material moderno do Maya com parâmetros Base Color, Roughness e Metalness, compatível com motores de jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para conduzir esta aula. Concentre-se em duas tarefas: planificar (UV unwrap) e aplicar um material base. No Maya, o trabalho de UV acontece no UV Editor, aberto pelo menu superior em UV e depois UV Editor. A janela mostra à esquerda a textura plana e à direita o modelo 3D. As ferramentas principais ficam no menu da própria janela: Create (para gerar UVs automáticas), Cut/Sew (para cortar e costurar) e o Unfold/Layout (para planificar e arrumar). Para os materiais, use a aba Hypershade ou clique com o botão direito no modelo e escolha Assign New Material. O material recomendado se chama Standard Surface, e seus controles aparecem no Attribute Editor, à direita da tela. Pratique o caminho uma vez antes da aula para se sentir seguro.

## Passo a passo da aula

Aquecimento (10 min): Mostre o slide da laranja descascada. Pergunte: como o computador sabe onde colar a cor no modelo? Conduza para a ideia de que existe um mapa plano. Abra o modelo de exemplo no projetor e aplique a textura quadriculada para mostrar, ao vivo, os lugares onde ela estica ou repete de forma errada.

Conteúdo novo guiado (15 min): No projetor, selecione o modelo. Abra UV e UV Editor. Mostre as UVs bagunçadas do exemplo. Aplique a textura checker pelo Hypershade para ver a distorção. Selecione arestas que serão costuras e use Cut UV; depois rode Unfold e em seguida Layout para arrumar as ilhas dentro do quadrado de 0 a 1. Por fim, clique com o botão direito no modelo, escolha Assign New Material, selecione Standard Surface e ajuste no Attribute Editor a cor base (Base Color), a aspereza (Roughness) para algo como 0.6 e a metalicidade (Metalness) em 0 para um material não metálico. Não há código de programação nesta aula; o resultado é checado de forma visual pela textura quadriculada uniforme.

Mão na massa (25 min): Cada aluno abre o modelo de exemplo, aplica a textura checker e identifica onde está esticada. Marca as costuras, corta, roda Unfold e Layout até os quadrados ficarem do mesmo tamanho em todo o modelo. Depois cria um material Standard Surface e ajusta cor, aspereza e metalicidade. Circule pela sala conferindo se as ilhas couberam no espaço 0 a 1.

Desafio + compartilhar (10 min): Cada aluno mostra ao colega o modelo com a textura quadriculada e aponta uma área que melhorou. Dois voluntários exibem no projetor o antes e o depois.

## Como explicar de forma clara

Use a laranja o tempo todo: planificar é abrir a casca; a costura é onde você corta para conseguir abrir; a ilha é cada pedaço de casca na mesa. Diga que a textura quadriculada é o nosso detetive: se os quadrados ficam retangulares ou enormes, a UV está esticada; se ficam todos do mesmo tamanho, está perfeita. Para o material, compare com tinta: a cor base é a cor da lata, a aspereza decide se a parede fica fosca ou brilhante, e a metalicidade diz se é parede comum ou metal. Aponte cada botão na tela enquanto fala o nome em inglês, devagar, porque a Unreal usa os mesmos nomes.

## Erros comuns e como ajudar

O erro mais comum é esquecer de selecionar o modelo antes de abrir o UV Editor, e a janela aparece vazia; lembre-os de clicar no objeto primeiro. Muitos cortam costuras demais e criam ilhas picadas; oriente a cortar só onde for necessário, como nas quinas. Outro erro é deixar ilhas para fora do quadrado de 0 a 1; mostre que o Layout encaixa tudo dentro. Alguns confundem aspereza com metalicidade; reforce que metal puxa para reflexo de espelho e aspereza controla o quão fosco. Por fim, quem não aplica a textura checker fica sem enxergar a distorção; insista que o quadriculado é o guia visual de toda a aula.`,
  exercicios: [
    {
      titulo: `O detetive do quadriculado`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que cada aluno selecione o modelo antes de abrir qualquer painel. Confira se a textura checker foi de fato aplicada e está visível no viewport.`,
      atividade: `Abra o modelo de exemplo, aplique a textura quadriculada (checker) pelo Hypershade e aponte com o cursor as três áreas onde os quadrados aparecem esticados ou de tamanhos diferentes.`,
      gabarito: `O aluno tem a textura quadriculada visível no modelo e identifica corretamente as regiões esticadas: onde os quadrados viram retângulos ou ficam muito maiores que nas faces planas, ali a UV está distorcida.`,
    },
    {
      titulo: `Abrindo a casca: cortar e planificar`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como selecionar arestas e usar Cut UV, depois Unfold. Reforce cortar costuras apenas nas quinas, sem exagerar no número de cortes.`,
      atividade: `No UV Editor, selecione as arestas das quinas do modelo como costuras, use Cut UV para cortar e rode Unfold para planificar a malha em ilhas planas.`,
      gabarito: `A malha ficou aberta em ilhas planas e separadas; ao olhar a textura quadriculada, os quadrados estão bem mais próximos de quadrados de verdade do que antes, mostrando que a distorção diminuiu.`,
    },
    {
      titulo: `Arrumando a mala: Layout no espaço 0 a 1`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Explique o quadrado de 0 a 1 como o limite onde tudo precisa caber. Use o comando Layout e confira se nenhuma ilha ficou para fora ou sobreposta.`,
      atividade: `Use o comando Layout no UV Editor para encaixar todas as ilhas dentro do quadrado de 0 a 1, sem deixar nenhuma para fora nem uma por cima da outra.`,
      gabarito: `Todas as ilhas de UV estão dentro do quadrado de 0 a 1, sem sobreposição e com espaçamento entre elas; os quadrados da textura mantêm o mesmo tamanho em todo o modelo, indicando UVs limpas.`,
    },
    {
      titulo: `A receita da superfície: material base`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o caminho do botão direito até Assign New Material e a escolha do Standard Surface. Acompanhe os ajustes no Attribute Editor.`,
      atividade: `Aplique ao modelo um material Standard Surface e ajuste no Attribute Editor a Base Color para uma cor de madeira, a Roughness em 0.6 e a Metalness em 0.`,
      gabarito: `O modelo tem um material Standard Surface aplicado, com Base Color na cor escolhida, Roughness em 0.6 (aspecto fosco) e Metalness em 0 (não metálico); a superfície reage à luz de forma fosca, como madeira.`,
    },
    {
      titulo: `Da pele do Maya à pele da Unreal`,
      tipo: `desafio + roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza a roda ligando cada parâmetro ao fluxo PBR da Unreal. Anote no quadro a correspondência dos nomes para retomar na Aula 6.`,
      atividade: `Explique ao colega, em voz alta, por que UVs bem organizadas e os parâmetros do material são importantes para quando o modelo entrar na Unreal, citando ao menos dois nomes que se repetem nos dois programas.`,
      gabarito: `O aluno explica que a Unreal usa as mesmas coordenadas UV para colar as texturas e lê os mesmos parâmetros do fluxo PBR; cita ao menos dois nomes que se repetem, como Base Color, Roughness ou Metalness, mostrando que UV ruim gera textura esticada no jogo.`,
    },
  ],
};
