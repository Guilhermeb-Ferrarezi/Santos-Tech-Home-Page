import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Dando Vida ao Personagem",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Modelar o herói do jogo em voxel, montando o corpo bloco a bloco com cabeça, tronco, braços e pernas na proporção certa para caber no cenário.`,
  descricao: `Nesta aula a turma dá o passo mais animador do mês: criar o herói que vai correr, pular e brincar dentro do mundo voxel que eles já construíram. Até agora as crianças desenharam o cenário e os blocos do ambiente. Hoje elas constroem o personagem principal, aquele que o jogador vai controlar no Roblox. É como dar vida a um boneco feito de cubinhos mágicos, um voxel de cada vez.

O personagem voxel é montado com partes simples: uma cabeça em forma de cubo, um tronco que é o corpo, dois braços e duas pernas. Cada parte é só um conjunto de voxels coloridos. A grande lição do dia é a proporção: o herói precisa ter o tamanho certo. Se ficar gigante, não passa pelas portas do cenário; se ficar pequeno demais, some no meio dos blocos. Por isso o professor mostra que o cenário já feito serve de régua: o personagem deve caber bem dentro dele.

No MagicaVoxel as crianças vão usar a ferramenta de adicionar voxels (Attach), escolher cores na paleta e empilhar os blocos com calma. Não precisa ser perfeito nem realista. Um personagem voxel bonito é simples e fácil de reconhecer: cabeça, corpo, braços e pernas bem visíveis. O encanto está justamente nos cubinhos.

Ao final, cada aluno terá o começo do seu herói montado e na proporção adequada. Esse personagem será refinado nas próximas aulas com detalhes, rosto e cores especiais, mas hoje o foco é a estrutura: erguer o boneco bloco a bloco e deixá-lo do tamanho certo para o mundo do jogo.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto, um por aluno`,
    `Projetor ou TV grande conectado ao computador do professor para a demonstração`,
    `Exemplo pronto de um personagem voxel simples (arquivo .vox) para mostrar à turma`,
    `Imagem ou modelo do cenário já criado pela turma, usado como referência de tamanho`,
    `Folha impressa com o desenho de um boneco dividido em cabeça, tronco, braços e pernas`,
    `Paleta de cores do MagicaVoxel visível na tela para escolher as cores do herói`,
  ],
  conceitosChave: [
    `Personagem — o boneco do jogo que o jogador controla, feito de cubinhos.`,
    `Voxel — um cubinho mágico, a menor peça com que montamos tudo no MagicaVoxel.`,
    `Proporção — o tamanho certo de cada parte para o herói parecer um boneco e caber no cenário.`,
    `Tronco — o corpo do personagem, a parte do meio onde ligamos braços e pernas.`,
    `Attach (Adicionar) — a ferramenta que cola voxels novos para construir o corpo.`,
    `Paleta — a caixinha de cores onde escolhemos a cor de cada bloco do herói.`,
    `Simetria — truque de espelho para os dois braços e as duas pernas ficarem iguais.`,
  ],
  treinamento: `## O que o professor precisa saber

O personagem voxel é só um boneco feito de cubos empilhados. Você não precisa ser artista: basta montar cabeça, tronco, braços e pernas com voxels. Antes da aula, abra o MagicaVoxel e confira três coisas. Primeiro, a barra de ferramentas à esquerda, onde fica o botão "Attach" (com ícone de mais, +), usado para adicionar voxels. Ao lado existem "Erase" (apagar) e "Paint" (pintar). Segundo, a paleta de cores no canto direito: clique numa cor e ela fica selecionada para os próximos voxels. Terceiro, a caixa de trabalho (a grade do modelo). Você pode girar a cena segurando o botão direito do mouse e arrastando; aproxima e afasta com a rolagem. Tenha um personagem pronto salvo para mostrar e deixe o cenário da turma à vista, pois ele é a régua do tamanho.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome o cenário já criado. Pergunte: "Quem vai morar nesse mundo?". Mostre na tela o exemplo de personagem voxel pronto, gire-o no MagicaVoxel e diga que hoje cada um vai começar o seu herói.

Conteúdo novo guiado (15 min): no projetor, construa um herói simples passo a passo enquanto a turma observa. 1) Selecione "Attach" na barra esquerda. 2) Escolha uma cor na paleta para o tronco. 3) Clique e arraste para erguer um bloco retangular no meio da grade: esse é o corpo. 4) Em cima, adicione um cubo para a cabeça, deixando um pescoço curto. 5) Troque a cor e cole dois braços, um de cada lado do tronco. 6) Embaixo, cole duas pernas. Mostre o botão "Mirror" / simetria (eixo X) para espelhar braços e pernas e deixá-los iguais sem refazer. Compare com o cenário: o herói deve caber em pé, sem encostar no teto.

Mão na massa (25 min): cada aluno monta o próprio herói seguindo a ordem tronco, cabeça, braços e pernas. Circule pela sala. Lembre sempre da régua: "Coloque seu boneco perto do tamanho de uma porta do cenário". Incentive a usar a simetria. Quem terminar a estrutura pode trocar as cores das partes.

Desafio e compartilhar (10 min): proponha o desafio "Pose de herói" (mudar a posição de um braço). Depois cada criança gira o personagem na tela e mostra para a turma, dizendo o nome do herói.

## Como explicar para crianças

Use analogias concretas. Diga que o personagem é como um boneco de LEGO feito de cubinhos: primeiro o corpo, depois a cabeça, os bracinhos e as perninhas. Para a proporção, use a ideia da régua: "O cenário é a casa; o herói precisa caber pela porta, nem gigante nem formiguinha". Para a simetria, fale em "espelho mágico": o que você faz de um lado aparece igual do outro. Lembre que voxel é cubinho mágico e que empilhar com calma deixa o boneco bonito.

## Erros comuns e como ajudar

O erro mais frequente é o personagem ficar enorme e não caber no cenário; peça para comparar com a régua e apagar camadas de voxels com "Erase". Outro erro é construir só o tronco e esquecer braços e pernas; use a folha do boneco para lembrar as quatro partes. Muitas crianças clicam no vazio e o voxel não aparece: explique que o "Attach" precisa colar num bloco já existente ou no chão da grade. Alguns deixam os braços de tamanhos diferentes; mostre de novo o "Mirror" / simetria. Se a cor sair errada, basta selecionar outra na paleta e usar "Paint". E se alguém ficar travado, oriente a girar a cena com o botão direito para enxergar todos os lados antes de colar mais voxels.`,
  exercicios: [
    {
      titulo: `As quatro partes do herói`,
      tipo: `Aquecimento oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre a folha impressa do boneco e aponte cada parte. Faça a turma repetir em voz alta e indicar no próprio corpo.`,
      atividade: `Diga quais são as quatro partes principais do personagem voxel e aponte cada uma no seu próprio corpo.`,
      gabarito: `As quatro partes são: cabeça, tronco (corpo), braços e pernas. A criança aponta a cabeça, a barriga, os braços e as pernas, mostrando que entendeu a estrutura do herói.`,
    },
    {
      titulo: `Construindo o tronco e a cabeça`,
      tipo: `Prática guiada no MagicaVoxel`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe passo a passo: selecionar "Attach", escolher a cor, erguer o tronco e colar a cabeça em cima. Verifique se o voxel está colando na grade.`,
      atividade: `No MagicaVoxel, use a ferramenta "Attach" para erguer um tronco retangular e cole um cubo da cabeça em cima dele, deixando um pescoço curto.`,
      gabarito: `O aluno seleciona "Attach", escolhe uma cor na paleta, clica e arrasta para criar o bloco do tronco e adiciona um cubo menor acima como cabeça. Resultado esperado: corpo e cabeça empilhados e colados, em pé na grade.`,
    },
    {
      titulo: `Braços e pernas com simetria`,
      tipo: `Prática individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o botão "Mirror" / simetria no eixo X. Ajude quem colar voxel no vazio, lembrando que precisa encostar no tronco.`,
      atividade: `Adicione dois braços (um de cada lado do tronco) e duas pernas embaixo. Use a simetria (Mirror) para que os lados fiquem iguais.`,
      gabarito: `O personagem fica com tronco, cabeça, dois braços laterais e duas pernas. Com a simetria ligada, os braços têm o mesmo tamanho e as pernas também. Resultado esperado: boneco completo e equilibrado dos dois lados.`,
    },
    {
      titulo: `A régua do cenário`,
      tipo: `Comparação e ajuste de proporção`,
      tempo: `7 minutos`,
      guiaProfessor: `Coloque o cenário da turma à vista. Oriente a comparar a altura do herói com uma porta. Quem estiver grande demais apaga camadas com "Erase".`,
      atividade: `Compare o tamanho do seu herói com o cenário já criado. Ele cabe em pé, sem encostar no teto, e passa por uma porta? Ajuste se precisar.`,
      gabarito: `O aluno percebe se o personagem está na proporção certa. Se estiver muito alto, apaga voxels de cima com "Erase"; se estiver baixo, adiciona voxels com "Attach". Resultado esperado: herói que cabe em pé e passa pela porta do cenário, nem gigante nem minúsculo.`,
    },
    {
      titulo: `Pose de herói e apresentação`,
      tipo: `Desafio criativo`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como mover um braço apagando e recolando voxels. Depois peça que cada um gire o modelo com o botão direito e apresente o herói à turma.`,
      atividade: `Faça uma "pose de herói" mudando a posição de um braço do personagem. Depois gire o modelo na tela e apresente seu herói para a turma, dizendo o nome dele.`,
      gabarito: `O aluno desloca os voxels de um braço (apagando de um lugar e colando em outro) para criar uma pose, como o braço levantado. Em seguida gira a cena com o botão direito do mouse e mostra o personagem aos colegas. Resultado esperado: herói com uma pose diferente, apresentado com um nome escolhido pela criança.`,
    },
  ],
};
