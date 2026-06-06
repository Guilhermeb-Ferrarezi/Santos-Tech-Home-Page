import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Importando o Personagem no Orca",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Carregar o arquivo STL do personagem no Orca Slicer, posicioná-lo na mesa, ajustar escala e rotação, conferir se o modelo está fechado e fazer o primeiro fatiamento de teste.`,
  descricao: `Nesta aula o aluno dá o passo que transforma o modelo do Blender em algo pronto para virar peça de verdade: ele abre o arquivo dentro do Orca Slicer, o programa que "fatia" o modelo em camadas que a impressora vai entender. Na aula anterior a turma exportou o personagem como arquivo STL; agora chegou a hora de ver esse arquivo aparecer na mesa virtual da impressora, dentro do Orca.

O foco é a prática de importação e o posicionamento correto. O aluno arrasta o STL para dentro do Orca, observa o personagem surgir sobre a mesa (a "Plate") e aprende a movê-lo, girá-lo e mudar o tamanho usando as ferramentas da barra lateral esquerda. Ajustar a escala é importante porque um modelo do Blender pode chegar gigante ou minúsculo; girar a peça serve para apoiá-la de um jeito que facilite a impressão. Tudo isso é feito enxergando o modelo de vários ângulos, girando a câmera com o mouse.

Outra parte essencial é verificar se o modelo está "sólido", ou seja, fechado e sem furos. Um personagem feito no Blender pode ter buracos invisíveis que atrapalham a impressão. O Orca avisa quando encontra esses problemas e oferece um reparo automático. Aprender a olhar para o modelo com esse cuidado evita frustrações mais à frente, quando a peça for impressa de verdade.

Por fim, o aluno realiza o primeiro fatiamento de teste, clicando no botão "Slice plate". O Orca calcula as camadas e mostra a peça na "máquina virtual", junto de uma estimativa de tempo e de material. Esse momento é empolgante: pela primeira vez o aluno vê o personagem dele preparado como um trabalho real de impressão, mesmo sem nada sair da impressora ainda.`,
  materiais: [
    `Computadores com o Orca Slicer já instalado e aberto (um por aluno), com o perfil da impressora da escola já selecionado`,
    `Projetor ou TV grande para o professor mostrar cada clique na tela do Orca`,
    `Arquivos STL de exemplo numa pasta compartilhada (um personagem simples de teste, caso algum aluno não tenha exportado o seu)`,
    `O arquivo STL do personagem que cada aluno exportou do Blender na aula anterior, salvo em pasta de fácil acesso`,
    `Mouse externo para cada computador, pois facilita girar a câmera e mover a peça`,
    `Folha impressa com os atalhos do Orca (mover, girar, escalar, fatiar) colada na bancada`,
    `Impressora 3D da escola ligada e visível na sala, mesmo que sem imprimir ainda, para os alunos associarem a tela ao equipamento real`,
  ],
  conceitosChave: [
    `STL — o tipo de arquivo que guarda a "casca" do modelo 3D; é o que exportamos do Blender e abrimos no Orca para imprimir.`,
    `Mesa de impressão (Plate) — a área quadrada na tela do Orca que representa a base real da impressora onde a peça vai ser construída.`,
    `Escala — o ajuste de tamanho do modelo; aumentar ou diminuir a peça em porcentagem ou em milímetros.`,
    `Rotação — girar o modelo para apoiá-lo de um jeito melhor sobre a mesa, facilitando a impressão.`,
    `Modelo sólido (manifold) — um modelo fechado e sem furos, "à prova de água"; só assim ele pode ser fatiado sem erros.`,
    `Fatiar (Slice) — o processo em que o Orca corta o modelo em camadas finas que a impressora vai empilhar uma sobre a outra.`,
    `Pré-visualização (Preview) — a "máquina virtual" que mostra a peça fatiada, camada por camada, com o tempo e o material estimados.`,
  ],
  treinamento: `## O que o professor precisa saber

O Orca Slicer tem três áreas principais: no centro fica a cena 3D com a mesa (Plate); à esquerda há a barra de ferramentas de manipulação (mover, escalar, girar, apoiar na mesa); à direita ficam os perfis e configurações. Para importar, basta arrastar o arquivo STL para dentro da janela, ou usar o menu "File" e "Import" e "Import STL". Cada ferramenta da esquerda tem um atalho: M move, S escala, R gira, e a tecla F (Place on face) apoia uma face na mesa. Gire a câmera segurando o botão direito do mouse e dê zoom com a roda. O botão "Slice plate", no canto inferior direito, faz o fatiamento; depois dele aparece o botão para ver a "Preview". Você não precisa dominar configurações avançadas hoje: o objetivo é importar, posicionar e fatiar uma vez. Antes da aula, confirme que o perfil da impressora da escola está selecionado no topo direito.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior com perguntas rápidas. "O que é um arquivo STL?" "De onde ele veio?" Peça que cada aluno localize o próprio STL na pasta e abra o Orca Slicer. Confira no projetor que todos veem a mesa vazia e o nome da impressora correto no canto superior direito.

Conteúdo novo guiado (15 min): no projetor, arraste um STL de exemplo para dentro do Orca e mostre o personagem surgir sobre a Plate. Gire a câmera com o botão direito do mouse para ver de todos os lados. Clique na peça e mostre a barra esquerda: clique na ferramenta "Move" (atalho M) e arraste a peça para o centro; clique em "Scale" (atalho S) e mude o tamanho digitando uma porcentagem ou um valor em milímetros; clique em "Rotate" (atalho R) para girar. Use "Place on face" (atalho F) e clique numa face plana para apoiá-la na mesa. Aponte qualquer aviso de modelo com furos e mostre o reparo: clique com o botão direito na peça e escolha "Fix model" ou "Repair".

Mão na massa (25 min): cada aluno importa o próprio STL, centraliza com Move, ajusta a escala para um tamanho razoável (por exemplo, de 4 a 6 centímetros de altura) e gira para apoiar a peça numa base plana. Peça que verifiquem se o modelo está sólido, reparando se o Orca avisar furos. Ao final, todos clicam em "Slice plate" e abrem a "Preview" para ver a peça fatiada, o tempo e o material estimados. Circule pela sala ajudando quem travou em escala, rotação ou reparo.

Desafio e compartilhar (10 min): proponha que cada aluno gire a peça de um jeito diferente e refatie, observando como o tempo estimado muda. Termine com dois ou três alunos mostrando no projetor o personagem fatiado e o tempo de impressão previsto.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o STL é como uma "fôrma de bolo" do personagem: guarda só o formato, não a cor. A mesa (Plate) é o "tabuleiro" onde a peça vai ser construída de baixo para cima. Fatiar é como cortar um pão em fatias finas: a impressora vai empilhar essas fatias uma sobre a outra até formar o personagem. Um modelo com furos é como um copo furado que não segura água, por isso precisa ser "tapado" antes de imprimir. Sempre que usar uma palavra em inglês como "Slice" ou "Plate", fale o significado em português logo em seguida.

## Erros comuns e como ajudar

O erro mais frequente é a peça chegar gigante ou minúscula do Blender; mostre a ferramenta "Scale" e ajuste por porcentagem até um tamanho razoável. Outro tropeço é o personagem ficar flutuando acima da mesa ou atravessando-a; use "Place on face" (F) ou o botão de apoiar na mesa para encostá-lo na base. Muitos esquecem de verificar furos e o Orca acusa erro ao fatiar; ensine a reparar com o botão direito e "Fix model". Há quem importe o arquivo errado: confirme que é o STL do próprio aluno. Por fim, alguns clicam em "Slice plate" e acham que o trabalho acabou; explique que isso é só o teste virtual e que nada saiu da impressora ainda.`,
  exercicios: [
    {
      titulo: `Trazendo o personagem para a mesa`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno localize o próprio STL antes de começar. Mostre no projetor que basta arrastar o arquivo para dentro da janela do Orca. Confira que o perfil da impressora está correto no canto superior direito.`,
      atividade: `Abra o Orca Slicer, arraste o seu arquivo STL para dentro da janela e veja o personagem aparecer sobre a mesa. Gire a câmera com o botão direito do mouse para olhar a peça de todos os lados.`,
      gabarito: `O personagem aparece sobre a Plate na cena 3D, com o nome do arquivo listado na lateral. O aluno consegue girar a câmera com o botão direito e enxergar a peça de cima, dos lados e de baixo.`,
    },
    {
      titulo: `Tamanho e posição certos`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre antes as ferramentas "Move" (M), "Scale" (S) e "Place on face" (F) na barra esquerda. Sugira uma altura de 4 a 6 centímetros como referência e ajude quem digitar valores estranhos na escala.`,
      atividade: `Use "Move" para centralizar a peça na mesa, "Scale" para deixá-la com cerca de 5 centímetros de altura e "Place on face" para apoiá-la numa base plana, bem encostada na mesa.`,
      gabarito: `A peça fica centralizada na Plate, com altura próxima de 5 centímetros e a base totalmente encostada na mesa, sem flutuar nem atravessar a superfície. Os valores aparecem no painel de propriedades da peça.`,
    },
    {
      titulo: `Caçando furos no modelo`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Avise que modelos do Blender podem ter furos invisíveis. Mostre o reparo pelo botão direito e a opção "Fix model" ou "Repair". Use um STL com problema, se tiver, para demonstrar o aviso do Orca.`,
      atividade: `Verifique se o seu modelo está sólido. Se o Orca avisar que há furos, clique com o botão direito na peça e escolha "Fix model" para repará-lo. Depois confirme que o aviso desapareceu.`,
      gabarito: `O aluno identifica se há aviso de furos e, havendo, executa o reparo pelo botão direito. Ao final, o modelo aparece como sólido (sem alerta) e pronto para ser fatiado sem erro.`,
    },
    {
      titulo: `Fatiando em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno comanda em voz alta e o outro executa no teclado; depois trocam. Reforce onde fica o botão "Slice plate" e como abrir a "Preview".`,
      atividade: `Em dupla, um dita e o outro executa: clicar em "Slice plate", abrir a "Preview" e ler o tempo de impressão e o material estimados. Depois troquem de papel e refatiem girando a peça de outro jeito.`,
      gabarito: `As duas peças são fatiadas com sucesso e mostradas na Preview, com tempo e material visíveis. Cada aluno consegue, ao menos uma vez, clicar em "Slice plate" e abrir a pré-visualização sem ajuda do colega.`,
    },
    {
      titulo: `Roda de conversa: do arquivo à máquina`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza a roda com perguntas abertas e deixe dois ou três alunos mostrarem a Preview no projetor. Valorize as descobertas sobre como a rotação muda o tempo de impressão.`,
      atividade: `Em roda, cada aluno conta qual escala e rotação escolheu para o personagem e explica com suas palavras o que significa "fatiar" um modelo e por que o modelo precisa estar sólido para imprimir.`,
      gabarito: `Cada aluno descreve a escala e a rotação que usou e explica que fatiar é cortar o modelo em camadas que a impressora empilha, e que um modelo precisa estar fechado (sem furos) para ser impresso sem erros. Comparações como "fatias de pão" ou "copo furado" são respostas válidas.`,
    },
  ],
};
