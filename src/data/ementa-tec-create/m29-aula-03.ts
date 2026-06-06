import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Conhecendo o Bambu Studio",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Conhecer a interface do Bambu Studio (área de trabalho, mesa de impressão e menus principais) e importar um personagem do jogo para posicioná-lo, girá-lo e dimensioná-lo na mesa virtual.`,
  descricao: `Nas duas primeiras aulas deste mês o aluno entendeu a missão de transformar os personagens do jogo em bonecos de verdade e resgatou os modelos 3D que ele mesmo criou no Maya. Agora chegou a hora de abrir o programa que faz a ponte entre o modelo no computador e a impressora 3D: o Bambu Studio. Este programa é chamado de "fatiador" (slicer), e nesta aula o foco é só conhecê-lo por dentro, sem pressa, como quem visita uma cozinha nova antes de cozinhar.

O Bambu Studio tem três áreas que o aluno precisa reconhecer de olhos fechados. A primeira é a área de trabalho, o grande espaço escuro no centro onde o modelo aparece em 3D. A segunda é a mesa de impressão (também chamada de placa ou plate), aquele retângulo quadriculado que representa, em tamanho real, o lugar onde o boneco vai ser construído na impressora. A terceira são os menus e painéis: a barra de cima (importar, salvar, fatiar), as ferramentas do lado esquerdo (mover, girar, escalar) e o painel da direita (configurações de impressão). Saber onde fica cada coisa deixa todas as próximas aulas muito mais fáceis.

A parte prática da aula é importar um personagem do jogo para dentro do programa e brincar de movê-lo na mesa virtual. O aluno aprende a usar três ferramentas essenciais: Mover (deslizar o modelo pela mesa), Girar (rotacionar o personagem em qualquer direção) e Escalar (mudar o tamanho do boneco). Ele também aprende a girar a câmera para ver o modelo de todos os lados, com o botão do meio do mouse, e a dar zoom com a rolagem.

Importante: nesta aula ainda NÃO vamos fatiar nem imprimir, e ainda não nos preocupamos em deixar tudo perfeito para a impressão. O objetivo é só conhecer a casa e ganhar confiança movimentando o personagem na mesa. As aulas seguintes vão cuidar de ajustar o modelo, gerar suportes e fatiar de verdade.`,
  materiais: [
    `Computadores (1 por aluno) com o Bambu Studio já instalado e aberto, com a impressora da escola selecionada no perfil do programa`,
    `Projetor ou TV para o professor espelhar a própria tela do Bambu Studio durante a explicação`,
    `Arquivos de exemplo em .stl ou .3mf de 2 ou 3 personagens simples, caso algum aluno ainda não tenha terminado de exportar o modelo do Maya`,
    `Modelos dos personagens do jogo de cada aluno (exportados do Maya nas aulas anteriores), salvos numa pasta de fácil acesso`,
    `Mouse com botão de rolagem (scroll) para cada aluno, pois girar a câmera e dar zoom fica muito mais fácil que no touchpad`,
    `Folha de "mapa da interface" impressa, com os nomes das três áreas (área de trabalho, mesa de impressão, menus) para o aluno preencher`,
    `Navegador aberto na página de download do Bambu Studio, para o caso de precisar reinstalar ou atualizar em alguma máquina`,
  ],
  conceitosChave: [
    `Bambu Studio — é o programa (chamado de fatiador ou slicer) que prepara o modelo 3D e o transforma em instruções que a impressora entende.`,
    `Área de trabalho — é o grande espaço escuro no centro da tela onde o modelo 3D aparece e onde você o movimenta.`,
    `Mesa de impressão (placa) — é o retângulo quadriculado que representa, em tamanho real, a base onde o boneco será impresso; tudo precisa caber dentro dela.`,
    `Importar — é a ação de trazer um arquivo de modelo (.stl ou .3mf) de fora para dentro do Bambu Studio, usando o botão Import ou arrastando o arquivo.`,
    `Mover, Girar e Escalar — são as três ferramentas básicas: Mover desliza o modelo pela mesa, Girar o rotaciona e Escalar muda o seu tamanho.`,
    `Câmera (orbitar e zoom) — é o ponto de vista da cena; segurar o botão do meio do mouse gira a câmera ao redor do modelo e a rolagem dá zoom.`,
    `Eixos X, Y e Z — são as três direções da cena: X (esquerda-direita), Y (frente-fundo) e Z (altura); aparecem como setas coloridas ao mover ou girar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula. O Bambu Studio é um programa gratuito que prepara modelos para a impressora. Hoje o objetivo é só apresentar a interface e deixar o aluno importar e mexer no personagem. Antes da aula, abra o programa uma vez e localize três coisas: a área de trabalho (centro escuro), a mesa de impressão (retângulo quadriculado) e os menus (barra de cima, ferramentas à esquerda, painel à direita). Teste importar um modelo pelo botão Import e arraste-o pela mesa. Pratique girar a câmera segurando o botão do meio do mouse e dar zoom com a rolagem. Com cinco minutos de teste você já se sente seguro para guiar a turma.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min). Pergunte: "Como será que o computador conta para a impressora onde colocar o plástico?" Mostre no projetor o Bambu Studio aberto e revele que ele é o tradutor entre o modelo e a máquina. Peça que cada aluno abra o programa e apenas observe a tela, sem clicar em nada ainda.

2. Conteúdo novo guiado (15 min). Faça um tour pela interface apontando no projetor. Diga em voz alta o nome de cada área: "Este centro escuro é a área de trabalho. Este retângulo quadriculado é a mesa de impressão. Aqui em cima estão os menus, aqui na esquerda as ferramentas e aqui na direita as configurações." Em seguida, importe um personagem: clique no botão Import (ícone de pasta na barra de cima) ou arraste o arquivo para a mesa. Selecione o modelo com um clique (a borda fica destacada) e mostre as três ferramentas da esquerda: Mover (atalho M), Girar (atalho R) e Escalar (atalho S). Demonstre cada uma arrastando as setas coloridas dos eixos X, Y e Z. Por fim, mostre como girar a câmera segurando o botão do meio do mouse e dar zoom com a rolagem.

3. Mão na massa (25 min). Cada aluno importa o próprio personagem do jogo (ou um arquivo de exemplo, se ainda não tiver o seu). Tarefas: dar nome às três áreas na folha de "mapa da interface"; mover o personagem para o centro da mesa; girar a câmera para ver o boneco de frente, de lado e de cima; e usar a ferramenta Escalar para deixar a altura por volta de 5 cm (50 mm). Circule pela sala ajudando quem se perder e repetindo os nomes das áreas.

4. Desafio + compartilhar (10 min). Lance o desafio "tour relâmpago": chame um aluno por vez para apontar no projetor as três áreas e dizer o nome de cada uma. Depois peça que todos salvem o projeto com Ctrl+S, usando o nome do personagem. Termine perguntando o que cada um achou mais difícil de encontrar na tela.

## Como explicar de forma clara (linguagem para a idade)

Compare o Bambu Studio com um tradutor: "Você fala 'modelo 3D', a impressora fala 'camadas de plástico', e o Bambu Studio traduz uma coisa na outra." Chame a área de trabalho de "palco", onde o personagem é a estrela, e a mesa de impressão de "chão quadriculado" onde o boneco vai nascer. Para a câmera, diga: "Você não está movendo o boneco, está andando ao redor dele com uma câmera, como num jogo." Para os eixos, mostre as setas coloridas e diga "vermelho é para os lados, verde é frente e fundo, azul é para cima e para baixo". Use sempre as palavras simples: importar, mover, girar, tamanho, câmera.

## Erros comuns e como ajudar

- Mover o modelo sem antes selecioná-lo: lembre que é preciso clicar uma vez no personagem (a borda fica destacada) antes de usar qualquer ferramenta.
- Confundir girar a câmera com girar o modelo: explique que o botão do meio do mouse move só a câmera; para girar o boneco mesmo, é preciso usar a ferramenta Girar (R).
- Perder o personagem de vista após dar zoom demais: ensine o atalho ou o botão que reenquadra a cena, ou peça para rolar a rolagem para trás devagar.
- Esticar o boneco ao escalar porque desligou o cadeado de proporção: mostre o ícone de cadeado e diga para mantê-lo fechado.
- Importar o arquivo errado ou não achar a pasta: combine antes da aula um único lugar para os modelos e confira o nome do arquivo de cada aluno.`,
  exercicios: [
    {
      titulo: `Mapa da interface`,
      tipo: `Atividade dirigida`,
      tempo: `7 min`,
      guiaProfessor: `Distribua a folha de "mapa da interface". Mostre no projetor o Bambu Studio aberto e aponte cada região. Peça que os alunos escrevam o nome certo de cada área no lugar indicado. Confira em voz alta ao final, repetindo os três nomes.`,
      atividade: `Olhe a tela do Bambu Studio e escreva na folha o nome das três áreas principais: (1) o grande espaço escuro do centro, (2) o retângulo quadriculado e (3) a faixa de botões do topo.`,
      gabarito: `(1) Área de trabalho; (2) Mesa de impressão (placa ou plate); (3) Menus (barra de menus / barra superior). Acerto: os três nomes corretos, cada um no campo certo da folha.`,
    },
    {
      titulo: `Importando o personagem`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre o botão Import (ícone de pasta na barra de cima) e também a alternativa de arrastar o arquivo para a mesa. Garanta que cada aluno saiba em que pasta está o seu modelo. Confirme que o personagem aparece sobre a mesa de impressão.`,
      atividade: `Use o botão Import (ou arraste o arquivo) para trazer o seu personagem do jogo para dentro do Bambu Studio. Confira se ele aparece em cima da mesa quadriculada.`,
      gabarito: `O modelo do personagem aparece carregado sobre a mesa de impressão, visível na área de trabalho. Acerto: o boneco está na cena, apoiado na placa, e não há mensagem de erro de importação.`,
    },
    {
      titulo: `Andando com a câmera`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Explique que a câmera é só o ponto de vista, não o modelo. Demonstre segurar o botão do meio do mouse para orbitar e usar a rolagem para o zoom. Quem usa touchpad pode precisar de ajuda; ofereça um mouse reserva se houver.`,
      atividade: `Sem mover o personagem, gire a câmera ao redor dele segurando o botão do meio do mouse e veja o boneco de frente, de lado e de cima. Depois aproxime e afaste usando a rolagem.`,
      gabarito: `O aluno consegue observar o mesmo personagem por três ângulos diferentes (frente, lado e cima) e aproximar/afastar a vista, sem que o modelo tenha mudado de lugar na mesa. Acerto: a câmera se move, o personagem permanece parado e centralizado.`,
    },
    {
      titulo: `Mover, girar e escalar`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Reforce que é preciso selecionar o modelo (borda destacada) antes de usar as ferramentas Mover (M), Girar (R) e Escalar (S). Mantenha o cadeado de proporção fechado ao escalar. Combine a altura alvo de cerca de 50 mm com a turma.`,
      atividade: `Selecione o personagem e faça três coisas: (1) com Mover (M), leve-o para o centro da mesa; (2) com Girar (R), rode-o um pouco para um lado; (3) com Escalar (S), ajuste a altura para perto de 50 mm, com o cadeado de proporção fechado.`,
      gabarito: `O personagem fica centralizado na mesa, levemente girado, com altura próxima de 50 mm e proporções preservadas (não esticado). Acerto: as três ações realizadas e o boneco com tamanho na faixa combinada e formato natural.`,
    },
    {
      titulo: `Tour relâmpago e salvar`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Esta tarefa junta tudo da aula. Peça que cada aluno faça um mini-tour apontando no projetor as três áreas e nomeando-as, e depois importe, posicione, gire a câmera e escale o personagem. Encerre pedindo que salvem o projeto com Ctrl+S usando o nome do personagem.`,
      atividade: `Faça o tour: aponte e diga o nome das três áreas da interface. Em seguida, com o seu personagem importado, centralize-o na mesa, gire a câmera para vê-lo de três ângulos e ajuste a altura para cerca de 50 mm. Por fim, salve o projeto com Ctrl+S usando o nome do personagem.`,
      gabarito: `O aluno nomeia corretamente as três áreas (área de trabalho, mesa de impressão e menus), deixa o personagem importado, centralizado e com altura próxima de 50 mm, demonstra girar a câmera e salva o arquivo. Acerto: tour correto, modelo bem posicionado na mesa e projeto salvo com o nome certo.`,
    },
  ],
};
