import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Planejando o Meu Personagem",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Planejar um personagem ou objeto antes de modelar, definindo tamanho, proporção e vista de frente, e iniciar o corpo base com voxels dentro da grade.`,
  descricao: `Nesta aula o aluno aprende que todo bom modelo 3D começa com um plano. Antes de sair empilhando cubinhos, é preciso decidir o que será criado, qual o tamanho dentro da grade e como o personagem ou objeto vai parecer visto de frente. Esse hábito de planejar economiza tempo e evita aquele modelo torto ou grande demais que não cabe na cena.

O foco principal é a proporção. Os alunos costumam fazer cabeças gigantes e pernas curtinhas sem perceber, então mostramos como contar voxels: por exemplo, um boneco simples pode ter três voxels de cabeça, quatro de tronco e três de perna. Quando o aluno conta os cubinhos, ele controla o resultado em vez de chutar. A vista de frente é o nosso ponto de partida, porque é a mais fácil de imaginar e de desenhar no papel.

O aluno faz um rascunho rápido no papel quadriculado, marca a altura total em voxels e divide o corpo em partes (cabeça, tronco, braços e pernas). Em seguida, abre o MagicaVoxel e começa a montar apenas o corpo base, sem detalhes nem cores ainda. A ideia é traduzir o desenho para a grade 3D, posicionando os blocos principais como se fossem a estrutura de um boneco de montar.

Esta aula prepara o terreno para as próximas, em que o modelo ganha forma, cor e detalhes. Aqui o combinado é simples: planejar bem e montar a base. Nada de pintar ou exportar ainda — isso vem depois. O entregável da aula é o rascunho no papel mais o corpo base do personagem montado na grade.`,
  materiais: [
    `Computadores com MagicaVoxel instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor mostrar a tela e os passos`,
    `Folhas de papel quadriculado e lápis para os rascunhos`,
    `Arquivo de exemplo .vox com um boneco base já proporcionado`,
    `Imagens de referência simples (boneco, animal, robô) impressas ou no projetor`,
    `Régua ou contagem de voxels anotada na lousa para apoiar a proporção`,
  ],
  conceitosChave: [
    `Planejamento — pensar o que vai criar antes de modelar, decidindo tamanho e formato.`,
    `Proporção — relação de tamanho entre as partes, por exemplo cabeça menor que o tronco.`,
    `Vista de frente — como o personagem aparece quando olhamos diretamente para ele.`,
    `Rascunho — desenho rápido e simples que serve de guia para a modelagem.`,
    `Corpo base — estrutura principal do modelo, sem detalhes nem cores ainda.`,
    `Grade — espaço quadriculado em 3D onde cada cubinho ocupa uma posição exata.`,
    `Referência — imagem ou ideia usada para se inspirar e manter a forma correta.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é mais sobre pensar do que sobre clicar. O objetivo é fazer o aluno entender que planejar antes economiza retrabalho. Você não precisa ser artista: basta dominar a ideia de proporção, que é a relação de tamanho entre as partes do corpo. Uma regra fácil para passar aos alunos é contar voxels. Tenha em mente uma proporção simples de boneco: cabeça com cerca de três voxels de altura, tronco com quatro, pernas com três. No MagicaVoxel, lembre que a grade padrão tem 40 voxels de lado; mostre o tamanho da grade no canto e explique que o personagem deve caber com folga, sem encostar nas bordas. Abra o programa antes da aula e deixe um projeto novo pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior perguntando como se cria e apaga um voxel. Mostre no projetor uma imagem de boneco e pergunte: "quantos cubinhos teria a cabeça? E as pernas?". Faça os alunos contarem em voz alta para ativar a ideia de proporção.

Conteúdo novo guiado (15 min): no projetor, desenhe no papel quadriculado um boneco bem simples de frente. Marque a altura total, divida em cabeça, tronco, braços e pernas e escreva o número de voxels de cada parte. Depois, no MagicaVoxel, mostre como ler o tamanho da grade e como posicionar os primeiros blocos da base. Use a ferramenta Brush no modo Voxel (tecla B) e o modo Box (tecla L) para criar blocos retangulares de uma vez, arrastando do início ao fim da parte do corpo. Mantenha tudo de uma cor só por enquanto.

Mão na massa (25 min): cada aluno desenha seu próprio rascunho no papel, anotando os voxels de cada parte. Em seguida, abre um projeto novo (File, New) e monta só o corpo base na grade, seguindo o desenho. Circule pela sala conferindo proporção e lembrando de deixar margem nas bordas. Reforce: nada de cores nem detalhes agora.

Desafio e compartilhar (10 min): peça que cada aluno gire a câmera com o botão direito do mouse e confira se a base ficou parecida com o rascunho. Em duplas, comparam desenho e modelo. Termine com dois ou três alunos mostrando a base no projetor.

## Como explicar de forma clara (linguagem para a idade)

Compare o planejamento com montar um móvel: ninguém começa sem olhar o manual. Diga que o rascunho é o nosso manual. Para proporção, use o corpo deles: "sua cabeça é menor que o tronco, certo? No boneco é igual". Para a vista de frente, peça que imaginem uma foto tirada de frente, como no documento de identidade. Evite palavras difíceis: troque "estrutura" por "esqueleto do boneco" e "proporção" por "tamanho certo de cada parte". Sempre que possível, mostre contando cubinhos na tela.

## Erros comuns e como ajudar

O erro mais comum é a cabeça gigante: oriente a contar voxels e diminuir. Outro é montar grande demais e estourar a grade; mostre o número da grade no canto e peça para começar menor, deixando espaço nas bordas. Alguns pulam o rascunho e vão direto modelar — segure esse impulso, pois o desenho é o combinado da aula. Há quem queira pintar e detalhar logo; lembre com bom humor que isso é assunto das próximas aulas. Por fim, se o aluno some com a peça ao girar a câmera, ensine a usar o botão direito para girar devolvendo a vista de frente.`,
  exercicios: [
    {
      titulo: `Contando os Cubinhos`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Aquecimento prático antes do rascunho. Projete uma imagem de boneco simples e conduza a contagem de voxels parte por parte. O objetivo é treinar o olhar para proporção, não acertar números exatos.`,
      atividade: `Olhando a imagem do boneco no projetor, escreva no papel quantos voxels de altura terá a cabeça, o tronco e as pernas. Some os três números para descobrir a altura total do personagem.`,
      gabarito: `Resposta possível: cabeça 3, tronco 4, pernas 3, total de 10 voxels de altura. Considera-se correto qualquer conjunto em que a cabeça seja menor que o tronco e o total caiba na grade. O importante é a relação de tamanho, não os valores exatos.`,
    },
    {
      titulo: `Meu Rascunho de Frente`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Cada aluno cria o próprio plano no papel quadriculado. Circule garantindo que dividam o corpo em partes e anotem os voxels. Esse rascunho será o guia da modelagem na grade.`,
      atividade: `No papel quadriculado, desenhe seu personagem ou objeto visto de frente. Divida em cabeça, tronco, braços e pernas e escreva ao lado de cada parte quantos voxels ela terá.`,
      gabarito: `Espera-se um desenho simples de frente, com as partes separadas e a contagem de voxels anotada em cada uma. Aceita-se qualquer tema (boneco, animal, robô) desde que haja proporção coerente e o total caiba na grade de 40 voxels.`,
    },
    {
      titulo: `Montando o Corpo Base`,
      tipo: `prática na ferramenta`,
      tempo: `15 min`,
      guiaProfessor: `Os alunos traduzem o rascunho para o MagicaVoxel. Lembre de abrir projeto novo (File, New), usar o modo Box (tecla L) para blocos grandes e manter uma cor só. Confira que ninguém ultrapasse as bordas da grade.`,
      atividade: `No MagicaVoxel, abra um projeto novo e monte apenas o corpo base do seu rascunho: cabeça, tronco, braços e pernas em blocos de uma cor. Não pinte nem adicione detalhes ainda.`,
      gabarito: `Considera-se pronto quando há um corpo base reconhecível na grade, com as partes na proporção do rascunho, uma única cor e folga até as bordas. Não deve haver detalhes nem múltiplas cores nesta etapa.`,
    },
    {
      titulo: `Comparando em Dupla`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Promova a troca de feedback. Em duplas, os alunos giram a câmera (botão direito do mouse) para a vista de frente e comparam o modelo com o rascunho do colega. Estimule comentários gentis e específicos sobre proporção.`,
      atividade: `Em dupla, troque de cadeira com o colega. Gire a câmera até a vista de frente e compare o modelo dele com o rascunho. Aponte uma parte com a proporção boa e uma que poderia ser ajustada.`,
      gabarito: `Resposta correta é qualquer comentário específico e respeitoso, por exemplo: "o tronco ficou na proporção certa, mas a cabeça está um pouco grande, daria para tirar um voxel". Vale o aluno relacionar o modelo ao rascunho e citar proporção.`,
    },
    {
      titulo: `Por Que Planejar?`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Fechamento reflexivo. Reúna a turma e conduza a conversa sobre a vantagem de planejar antes de modelar. Conecte com as próximas aulas, em que o modelo ganhará forma e cor sobre essa base.`,
      atividade: `Na roda, responda: o que foi mais fácil depois de ter feito o rascunho? O que aconteceria se você começasse a montar sem planejar o tamanho e a proporção?`,
      gabarito: `Espera-se que os alunos percebam que o rascunho serviu de guia, deixou a montagem mais rápida e ajudou a manter a proporção. Sem planejar, o modelo tende a ficar torto, desproporcional ou grande demais para a grade, gerando retrabalho.`,
    },
  ],
};
