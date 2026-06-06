import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Acabamento e Suavização",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Refinar o visual do modelo no Blender usando Shade Smooth, ajuste de bordas e limpeza de detalhes, deixando a peça mais bonita e organizada antes da impressão.`,
  descricao: `Nesta aula o aluno volta ao objeto que vem modelando nas últimas semanas e olha para ele com olhos de acabamento. Modelar é construir a forma; suavizar e refinar é deixar essa forma bonita e bem resolvida. É o momento de tirar aquele aspecto facetado de "bloquinho", corrigir partes tortas ou ásperas e remover sobras que ficaram pelo caminho. Pense como quem terminou de esculpir uma peça em argila e agora passa a lixa: a estrutura já existe, o que muda é o capricho.

O coração da aula é o Shade Smooth (Sombreamento Suave). Por padrão, o Blender mostra cada face do modelo com sombreamento plano, o famoso Flat Shading, que deixa as superfícies curvas parecendo facetadas. Ao aplicar Shade Smooth, o programa passa a calcular a iluminação de forma contínua entre as faces, e a peça ganha um aspecto liso e arredondado, sem precisar adicionar mais geometria. É importante o aluno entender que isso muda só como o objeto aparece na tela: a malha continua a mesma. Por isso também vamos conhecer o Auto Smooth (Suavização Automática), que mantém lisas as partes curvas e preserva os cantos vivos, o melhor dos dois mundos.

Além da suavização, esta é a aula de limpeza e correção. O aluno percorre o próprio modelo girando a câmera, encontra vértices fora do lugar, faces estranhas, partes assimétricas ou pontas sobrando e arruma cada uma. Ferramentas simples como mover vértices em Edit Mode (Modo de Edição), o Merge by Distance (Mesclar por Distância) para grudar pontos duplicados e o uso do espelhamento ajudam a deixar a peça equilibrada e limpa.

Vale lembrar o destino final: este modelo vai ser impresso. Por isso o acabamento aqui é, ao mesmo tempo, estético e prático. Uma peça suavizada, sem buracos nem vértices soltos e com bordas bem definidas, fica mais bonita na tela e também imprime melhor. Esta aula prepara o terreno para as duas últimas semanas, em que o foco passa a ser conferir a malha para impressão e exportar o arquivo final.`,
  materiais: [
    `Computadores com o Blender instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar os menus, atalhos e o antes e depois da suavização`,
    `Arquivo de exemplo com um objeto facetado e com pequenos defeitos de propósito (.blend pronto)`,
    `O arquivo do próprio modelo de cada aluno, salvo das aulas anteriores`,
    `Folha impressa com o checklist de acabamento (suavização, bordas, vértices soltos, simetria)`,
    `Mouse com botão do meio (scroll) para cada aluno, facilitando girar e dar zoom na câmera`,
    `Impressora 3D disponível para mostrar, ao final, como um acabamento melhor reflete na peça física`,
  ],
  conceitosChave: [
    `Shade Smooth (Sombreamento Suave) — opção que faz a luz transitar de forma contínua entre as faces, deixando o objeto liso, sem mudar a malha de verdade.`,
    `Shade Flat (Sombreamento Plano) — modo padrão em que cada face é mostrada chapada, dando aquele aspecto facetado de bloquinho.`,
    `Auto Smooth (Suavização Automática) — recurso que suaviza as curvas mas mantém os cantos vivos quando o ângulo entre faces é grande.`,
    `Edit Mode (Modo de Edição) — modo do Blender, ativado com a tecla Tab, onde se mexe em vértices, arestas e faces para corrigir a forma.`,
    `Vértice — cada pontinho da malha; mover, juntar ou apagar vértices é o que conserta partes tortas ou ásperas.`,
    `Merge by Distance (Mesclar por Distância) — ferramenta que junta vértices que estão muito perto uns dos outros, eliminando pontos duplicados e buracos.`,
    `Acabamento — etapa de refinar o visual da peça, como passar uma lixa: corrigir tortos, suavizar curvas e remover sobras antes de finalizar.`,
  ],
  treinamento: `## O que o professor precisa saber

O Shade Smooth fica em dois lugares fáceis no Blender: clicando com o botão direito sobre o objeto em Object Mode (Modo de Objeto) aparece o menu com "Shade Smooth" e "Shade Flat"; e no menu superior "Object" (Objeto) existem as mesmas opções. Guarde a ideia central: suavizar NÃO adiciona geometria, só muda como a luz é mostrada. Por isso uma esfera de poucas faces continua angulosa por dentro, mesmo parecendo lisa. Para curvas lisas com cantos preservados, no Blender 4.x existe "Shade Auto Smooth". Faça você mesmo, uma vez antes da aula, o caminho completo: aplicar suavização, entrar em Edit Mode com Tab, mover um vértice e rodar o Merge by Distance.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Abra no projetor o objeto de exemplo facetado. Pergunte: "O que está faltando para esta peça ficar bonita?" Conduza até a palavra acabamento. Relembre que eles já modelaram a forma e que hoje vão dar o capricho final.

15 min — Conteúdo novo guiado. Com o objeto selecionado em Object Mode, clique com o botão direito e escolha "Shade Smooth". Mostre o antes e depois girando a câmera (botão do meio do mouse). Depois clique direito e escolha "Shade Flat" para comparar. Em seguida, demonstre "Shade Auto Smooth" e explique que ele mantém os cantos. Por fim, aperte Tab para entrar em Edit Mode, selecione um vértice torto, mova com a tecla G e mostre como a forma se corrige. Termine demonstrando "Mesh > Clean Up > Merge by Distance" para juntar pontos duplicados.

25 min — Mão na massa. Cada aluno abre o próprio modelo, aplica Shade Smooth (ou Auto Smooth) e gira a câmera procurando defeitos. Entra em Edit Mode com Tab e corrige vértices tortos com G, suaviza partes ásperas e roda o Merge by Distance. Vai marcando o checklist de acabamento. Circule confirmando que ninguém mexeu demais e desmontou a forma.

10 min — Desafio e compartilhar. Cada aluno mostra o antes e depois da própria peça em tela cheia e conta qual correção fez mais diferença. Combine que todos salvem o arquivo com Ctrl + S antes de sair.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da lixa: "Vocês já esculpiram a peça; agora a gente passa a lixa para tirar as arestas e deixar lisinho." Explique o Shade Smooth como um truque de iluminação: "É como pintar sombras suaves num desenho para parecer redondo, sem mudar o contorno." Para o Auto Smooth diga: "Ele é esperto: deixa liso o que é curvo e mantém afiado o que é canto, como a quina de uma mesa." Sobre vértices, diga que são "os pregos que seguram o tecido da forma; se um prego está fora do lugar, o tecido fica torto".

## Erros comuns e como ajudar

O erro mais comum é o aluno achar que Shade Smooth conserta a geometria: lembre que ele só muda a aparência, não tira buracos nem cantos errados. Outro caso é aplicar suavização e estranhar manchas escuras ou facetas estranhas; isso costuma ser geometria com poucas faces ou normais bagunçadas, e o Auto Smooth ou um "Shade Smooth" novo ajuda. Em Edit Mode, muitos selecionam o objeto inteiro sem querer e arrastam tudo com a tecla G; ensine a apertar Alt + A para desselecionar antes. Há quem esqueça de voltar para Object Mode (Tab de novo) e ache que o programa travou. E o clássico: editar demais e desmontar a forma; oriente a fazer correções pequenas e usar Ctrl + Z para desfazer. Reforce salvar com Ctrl + S ao terminar.`,
  exercicios: [
    {
      titulo: `Liso ou facetado?`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Confira se cada aluno alterna de verdade entre os dois modos. Passe pelas telas pedindo que mostrem o objeto em Shade Flat e depois em Shade Smooth, girando a câmera.`,
      atividade: `Abra o objeto de exemplo. Clique com o botão direito e escolha "Shade Flat" e observe as facetas. Depois clique direito e escolha "Shade Smooth". Gire a câmera com o botão do meio do mouse e compare como a luz muda em cada modo.`,
      gabarito: `O aluno deve conseguir aplicar os dois modos e explicar a diferença: no Flat as faces ficam chapadas e facetadas; no Smooth a superfície parece lisa e arredondada. Deve reconhecer que a malha não mudou, só a forma como a luz aparece.`,
    },
    {
      titulo: `Domando o Auto Smooth`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Use um objeto que tenha partes curvas e cantos vivos, como uma caixa com tampa arredondada. Desafie os alunos a deixar a curva lisa sem perder a quina.`,
      atividade: `No objeto de desafio, aplique "Shade Auto Smooth". Gire a câmera e confira: as partes curvas devem ficar lisas e os cantos vivos devem continuar afiados. Se algum canto suavizou demais, comente o que aconteceu.`,
      gabarito: `O resultado correto é a curva suave e o canto preservado, sem aquele vinco arredondado errado. O aluno deve perceber que o Auto Smooth decide pelo ângulo entre as faces e que cantos muito abertos podem suavizar; reconhecer esse comportamento já é a resposta.`,
    },
    {
      titulo: `Caça ao vértice torto em dupla`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas. Um aluno gira a câmera procurando defeitos enquanto o outro entra em Edit Mode e corrige. Na metade do tempo, trocam de papel.`,
      atividade: `Em dupla, no modelo de um dos dois, apertem Tab para entrar em Edit Mode. Um procura partes tortas ou ásperas girando a câmera; o outro seleciona o vértice problemático e arruma com a tecla G. Depois rodem "Mesh > Clean Up > Merge by Distance".`,
      gabarito: `A dupla deve ter corrigido ao menos um vértice fora do lugar e rodado o Merge by Distance, que mostra na barra inferior quantos vértices foram mesclados. A peça precisa ficar mais limpa e simétrica, sem que a forma geral tenha sido desmontada.`,
    },
    {
      titulo: `Acabamento completo do meu modelo`,
      tipo: `projeto curto`,
      tempo: `14 minutos`,
      guiaProfessor: `Acompanhe um aluno por vez nos casos mais difíceis. Garanta que todos sigam o checklist e salvem com Ctrl + S ao final. Evite que mexam demais e percam a forma.`,
      atividade: `No seu próprio modelo, aplique Shade Smooth ou Auto Smooth, gire a câmera e corrija tudo o que estiver torto ou áspero em Edit Mode. Rode o Merge by Distance, marque cada item do checklist de acabamento e salve o arquivo com Ctrl + S.`,
      gabarito: `Sucesso é a peça suavizada, sem vértices soltos ou pontas sobrando, com os quatro itens do checklist marcados (suavização aplicada, bordas conferidas, vértices limpos, simetria ok) e o arquivo salvo. A forma original deve continuar reconhecível, agora mais bonita e limpa.`,
    },
    {
      titulo: `Roda de conversa: por que suavizar antes de imprimir`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Sente a turma em círculo. Conduza com perguntas abertas e anote no quadro as ideias da turma, ligando o acabamento na tela com a qualidade da peça impressa.`,
      atividade: `Em roda, cada um mostra o antes e depois do próprio modelo e responde: "Por que vale a pena caprichar no acabamento antes de mandar imprimir?" Tragam exemplos do que corrigiram hoje e do que poderia dar errado na impressão sem essa limpeza.`,
      gabarito: `A conversa deve concluir que um bom acabamento deixa a peça mais bonita e também imprime melhor: vértices soltos, buracos e partes tortas podem virar defeitos na peça física. Não há resposta única; o objetivo é a turma ligar o capricho digital ao resultado físico e listar cuidados antes de imprimir.`,
    },
  ],
};
