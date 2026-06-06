import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Modelando o Personagem Principal",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Modelar o corpo do herói do jogo a partir de formas básicas, usando extrude, escala e edição de vértices, arestas e faces com proporções pensadas para o Roblox.`,
  descricao: `Nesta aula o aluno dá um grande salto: sai das formas soltas da Aula 1 e começa a esculpir o personagem principal do seu jogo. A ideia é simples e poderosa: todo personagem 3D nasce de um cubo, um cilindro ou uma esfera. A partir dessas formas básicas, o aluno aprende a empurrar, esticar e dividir a malha (a "casquinha" de pontos e faces que forma o modelo) até o boneco ganhar tronco, cabeça, braços e pernas.

O coração da aula são quatro ferramentas: o Extrude (puxar uma face para criar volume novo, como um braço saindo do tronco), a escala (esticar e achatar partes), e a edição direta de vértices, arestas e faces. Esses três últimos são os "componentes" da malha. O aluno vai aprender a alternar entre eles com o botão direito do mouse e a movê-los para dar forma ao corpo, em vez de só mexer no objeto inteiro.

A grande preocupação desta aula são as proporções para o Roblox. Personagens de Roblox são estilizados e "fofinhos": cabeça grande, corpo mais simples, membros tipo blocos. Não queremos um humano realista cheio de detalhes — queremos um boneco limpo, com poucas faces, que vai rodar bem dentro do jogo. O professor deve repetir a regra de ouro: simples é melhor. Cada aluno termina a aula com um personagem reconhecível, ainda cinza (sem cor), mas já com a "cara" do herói da história do jogo dele.

Lembre-se: ninguém sai com um personagem perfeito. O objetivo é entender o processo de moldar uma malha. As Aulas 5, 6 e 7 vão cuidar de cor, textura e limpeza. Hoje é dia de esculpir a forma.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e funcionando (um por aluno)`,
    `Projetor ou TV ligados ao computador do professor para demonstrar os passos`,
    `Mouse com três botões e roda de rolagem em cada estação (essencial no Maya)`,
    `Arquivo de exemplo "heroi-exemplo.mb" com um personagem simples já pronto, para os alunos verem a meta`,
    `Folha impressa com um boneco de referência de frente e de lado (proporção estilo Roblox)`,
    `Conta da escola no Roblox Studio aberta como referência visual do estilo desejado`,
    `Caderno ou folha para o aluno rascunhar o herói antes de modelar`,
  ],
  conceitosChave: [
    `Malha (Mesh) — a "casquinha" do modelo 3D, formada por pontos, linhas e faces ligadas entre si.`,
    `Extrude — ferramenta que puxa uma face ou aresta para fora, criando volume novo, como um braço saindo do tronco.`,
    `Vértice — cada pontinho da malha; é o "canto" onde as arestas se encontram.`,
    `Aresta (Edge) — a linha que liga dois vértices; é uma "beirada" da forma.`,
    `Face — a parte chapada e preenchida entre arestas; é a "parede" do modelo.`,
    `Escala — esticar, encolher ou achatar uma parte do modelo sem mudar sua forma básica.`,
    `Proporção — a relação de tamanho entre as partes do corpo (cabeça, tronco, braços, pernas).`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista 3D. Precisa dominar quatro ações no Maya: trocar de componente, mover, escalar e fazer Extrude. Antes da aula, abra o Maya e treine isto: crie um cubo (menu "Create" > "Polygon Primitives" > "Cube"). Com o cubo selecionado, segure o botão direito do mouse em cima dele — aparece um menu radial. Arrastando para "Vertex", "Edge" ou "Face", você troca o modo de edição. Solte e clique nos componentes para selecioná-los. Os atalhos das ferramentas são: Q (selecionar), W (mover), E (girar), R (escalar). O Extrude fica no menu "Edit Mesh" > "Extrude", ou aparece quando você segura o botão direito com uma face selecionada. Treine puxar uma face e ver o braço nascer. Faça isso umas três vezes antes da aula e você estará pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Retome a Aula 1. Pergunte: "Quem lembra como criar um cubo?" Deixe um aluno mostrar no projetor. Mostre o arquivo "heroi-exemplo.mb" e diga: "Hoje cada um vai modelar o herói do SEU jogo, começando assim, de um cubo." Mostre a folha de referência e explique a proporção Roblox: cabeça grande, corpo em blocos.

CONTEÚDO NOVO GUIADO (15 min): No projetor, crie um cubo para o tronco. Aperte R e estique-o para ficar mais alto (um retângulo em pé). Agora ensine o segredo: segure o botão direito do mouse sobre o cubo e arraste até "Face". Clique na face de cima. Vá em "Edit Mesh" > "Extrude" e puxe para cima — nasce o pescoço. Faça Extrude de novo e escale para fora: a cabeça. Volte às faces laterais e faça Extrude para os braços; nas de baixo, para as pernas. Diga em voz alta cada clique enquanto faz.

MÃO NA MASSA (25 min): Cada aluno modela seu herói no próprio computador, seguindo a sequência tronco > cabeça > braços > pernas. Circule pela sala. Repita a troca de componente com botão direito para quem travar. Incentive usar W (mover) e R (escalar) para ajustar vértices e deixar o boneco com a forma que imaginaram. Lembre sempre: "Poucas faces, simples é melhor."

DESAFIO + COMPARTILHAR (10 min): Desafio: "Dê uma marca registrada ao seu herói" — um chapéu (Extrude na cabeça), ombros largos ou pernas grossas. Depois, cada aluno gira a câmera (segure Alt + botão esquerdo) e mostra o personagem para a turma em uma frase: quem é e o que ele faz no jogo.

## Como explicar de forma clara

Use comparações do dia a dia. A malha é a "casca" do boneco, como a casca de um chocolate oco. O Extrude é "puxar massinha de modelar": você agarra uma parede e estica para criar uma parte nova. Vértice é "cantinho", aresta é "beirada", face é "parede". Para a proporção, mostre um boneco do Roblox: "Repara como a cabeça é grande e o corpo é quadradão? A gente não quer um humano de verdade, quer um personagem de jogo." Repita a regra "simples é melhor" como um lema da aula.

## Erros comuns e como ajudar

O erro número um é mexer no objeto inteiro quando queriam mover só um pedaço — falta trocar o componente. Mostre de novo o menu do botão direito. O segundo é fazer Extrude várias vezes sem querer e criar um "macarrão" de faces; ensine Ctrl+Z para desfazer e a fazer um Extrude por vez. O terceiro é a câmera: alunos se perdem no espaço 3D. Ensine "Alt + botão esquerdo gira, Alt + botão direito dá zoom, aperte F para focar no objeto selecionado". O quarto é querer detalhes demais (dedos, nariz); lembre que o estilo é em blocos. Por fim, alguns esquecem de salvar — peça para salvar (Ctrl+S) com o nome "heroi-NOME" antes do fim.`,
  exercicios: [
    {
      titulo: `Aquecendo o Extrude`,
      tipo: `Prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça junto no projetor, passo a passo. Garanta que todos consigam trocar para o modo "Face" com o botão direito antes de seguir. Espere a turma toda acompanhar.`,
      atividade: `Crie um cubo. Troque para o modo Face com o botão direito do mouse. Selecione a face de cima e use "Edit Mesh" > "Extrude" para puxá-la para cima uma vez. Você acabou de criar um volume novo.`,
      gabarito: `O aluno tem um cubo com um bloco menor saindo do topo. A face de cima foi puxada para cima com o Extrude, formando dois andares. Se ficou tudo grudado ou só esticou o cubo inteiro, ele esqueceu de entrar no modo Face — corrija pedindo para segurar o botão direito e escolher "Face".`,
    },
    {
      titulo: `Tronco, cabeça e pescoço`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Deixe cada aluno trabalhar sozinho, mas circule. O ponto-chave é a ordem: esticar o tronco primeiro, depois Extrude do pescoço, depois Extrude e escala da cabeça. Reforce o atalho R para escala.`,
      atividade: `Comece um novo personagem. Crie um cubo e estique-o (tecla R) para ser o tronco em pé. Faça Extrude da face de cima para criar um pescoço fininho e, em seguida, mais um Extrude que você escala para fora, formando a cabeça maior.`,
      gabarito: `O modelo tem três partes empilhadas: tronco alto, pescoço estreito e cabeça larga no topo. A cabeça deve ser visivelmente maior que o pescoço, no estilo Roblox. Se a cabeça ficou do mesmo tamanho do pescoço, peça para selecionar a face do topo e apertar R para aumentá-la.`,
    },
    {
      titulo: `Braços e pernas do herói`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Aqui aparece o erro de câmera. Ensine a girar a vista (Alt + botão esquerdo) para alcançar as faces laterais e de baixo. Incentive um Extrude por membro, sem exagerar nas repetições.`,
      atividade: `No seu personagem, gire a câmera e faça Extrude nas duas faces laterais do tronco para criar os braços, e nas faces de baixo para criar as duas pernas. Use a escala para deixá-los na grossura que combina com o seu herói.`,
      gabarito: `O personagem agora tem quatro membros saindo do tronco: dois braços nas laterais e duas pernas embaixo. Os membros podem ser blocos simples. Se faltou um braço ou perna, o aluno provavelmente não girou a câmera para enxergar a face escondida — mostre Alt + botão esquerdo.`,
    },
    {
      titulo: `Conferência em dupla`,
      tipo: `Em dupla`,
      tempo: `6 minutos`,
      guiaProfessor: `Forme as duplas. Dê a regra: cada um olha o modelo do colega e aponta UMA coisa boa e UMA melhoria, sempre com respeito. Você passa nas duplas confirmando se as proporções estão no estilo do jogo.`,
      atividade: `Troque de cadeira com um colega. Gire a câmera no personagem dele (Alt + botão esquerdo) e diga: a cabeça está grande o bastante para o estilo Roblox? Os braços e pernas estão presos no tronco? Anote uma sugestão de melhoria para o colega.`,
      gabarito: `Cada dupla produz duas observações concretas, como "a cabeça poderia ser maior" ou "o braço esquerdo ficou solto, separado do corpo". O combinado é certo quando as críticas são específicas e gentis. Se a dupla só disse "está legal", peça para apontar algo mensurável, ligado a proporção ou a partes coladas.`,
    },
    {
      titulo: `O herói com sua marca`,
      tipo: `Projeto curto`,
      tempo: `8 minutos`,
      guiaProfessor: `Esta é a entrega da aula. Deixe o aluno personalizar e depois apresentar em uma frase. Lembre todos de salvar com Ctrl+S usando o nome "heroi-NOME" antes de mostrar. Aplauda cada apresentação.`,
      atividade: `Dê uma marca registrada ao seu herói usando Extrude e escala: pode ser um chapéu na cabeça, ombros largos, pernas grossas ou uma antena. Salve o arquivo como "heroi-SEUNOME" e apresente em uma frase quem é o seu personagem e o que ele faz no jogo.`,
      gabarito: `O aluno entrega um personagem reconhecível, em blocos, com proporção estilo Roblox e pelo menos um detalhe próprio criado com Extrude ou escala, salvo com o nome correto. A frase de apresentação liga o personagem à história do jogo. Modelo com tronco, cabeça maior, quatro membros e um detalhe extra está completo. Se faltou salvar, peça Ctrl+S antes de encerrar.`,
    },
  ],
};
