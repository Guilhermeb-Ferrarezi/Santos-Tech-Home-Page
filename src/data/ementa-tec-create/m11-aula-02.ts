import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Construindo o Corpo do Personagem em Voxel",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Modelar a silhueta 3D do corpo do personagem em voxel, montando cabeça, tronco, braços e pernas com simetria e proporção fiéis ao sprite original.`,
  descricao: `Nesta aula o aluno sai do plano e entra de vez no espaço tridimensional. Depois de conhecer a interface do MagicaVoxel na aula anterior, agora ele coloca a mão na massa para construir o esqueleto do próprio personagem do jogo, bloco por bloco. A ideia central é simples e poderosa: cada voxel é como um pixel que ganhou volume, então o personagem que já existe em 2D vai virar uma escultura digital feita de cubinhos.

O foco é a estrutura do corpo. Em vez de se perder em detalhes pequenos, o aluno aprende a pensar em massas grandes: a cabeça é um bloco, o tronco é outro, e os membros são caixas que saem desse tronco. Para isso, ele usa três ferramentas que são a base de tudo na modelagem em voxel: a ferramenta de linha (Line), a ferramenta de caixa (Box) e, principalmente, o espelhamento (Mirror), que garante que o lado direito e o lado esquerdo do personagem fiquem idênticos sem precisar desenhar duas vezes.

A proporção é o coração da aula. Um personagem de game funciona quando as partes conversam entre si: uma cabeça grande e fofa pede um corpo compacto; um herói esguio pede pernas mais longas. O aluno usa o sprite original como referência viva, contando quantos voxels cada parte deve ter em altura e largura para que a versão 3D mantenha a identidade do desenho.

Ao final, ninguém precisa ter um personagem pintado ou cheio de acessórios. O objetivo é concreto e alcançável: cada aluno termina a aula com a silhueta tridimensional do seu personagem em pé, simétrica e bem proporcionada, pronta para receber itens, cores e texturas nas próximas aulas do mês.`,
  materiais: [
    `Computadores com o MagicaVoxel instalado e abertos, um por aluno`,
    `Projetor ou TV para o professor demonstrar os passos em tela grande`,
    `Arquivo de exemplo .vox com um personagem-base já montado para referência`,
    `Imagem ou impressão do sprite original de cada aluno (feito em aulas anteriores) como guia de proporção`,
    `Folha quadriculada e lápis para o aluno rascunhar a contagem de voxels antes de modelar`,
    `Impressora 3D ligada na sala como motivação visual do destino final dos modelos`,
  ],
  conceitosChave: [
    `Voxel — cubinho 3D que é a unidade básica de volume, o equivalente tridimensional de um pixel.`,
    `Silhueta — o contorno geral do corpo do personagem, sem detalhes internos, que define se ele é reconhecível de longe.`,
    `Proporção — relação de tamanho entre as partes do corpo (cabeça, tronco, braços, pernas) que mantém a identidade do personagem.`,
    `Simetria — qualidade de ter os dois lados iguais; no MagicaVoxel é obtida com a ferramenta Mirror.`,
    `Ferramenta Box — modo de desenho que cria um bloco retangular de voxels de uma vez, ótimo para tronco e membros.`,
    `Ferramenta Line — modo de desenho que adiciona voxels em linha reta, útil para colunas e bordas do corpo.`,
    `Eixo de espelhamento — linha imaginária (X, Y ou Z) em torno da qual o Mirror copia os voxels para o lado oposto.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista para dar esta aula. Precisa apenas dominar quatro botões do MagicaVoxel. Na barra de ferramentas à esquerda, no painel superior, ficam os modos de desenho: Brush (pincel, com submodos), e dentro dele estão Voxel, Face, Box e Line. Use o atalho da tecla B para garantir que está no modo de adicionar (Attach), e tenha em mente que a tecla T alterna para apagar (Erase). O botão direito do mouse gira a câmera; o scroll dá zoom; segurar o scroll move a visão. O recurso estrela da aula é o Mirror: ele fica no painel direito (Edit), com três botões X, Y e Z. Ao ligar o X, tudo que você desenhar de um lado aparece espelhado no outro automaticamente. Antes da aula, abra o arquivo de exemplo e teste montar um boneco simples em três minutos para pegar segurança.

## Passo a passo da aula

Aquecimento (10 min): retome a aula 1 perguntando o que é um voxel. Mostre na tela o sprite original de um aluno e pergunte: quantos quadradinhos de altura tem a cabeça? E o corpo? Anote os números no quadro. Isso conecta o 2D ao 3D.

Conteúdo novo guiado (15 min): no projetor, comece um modelo novo (menu, novo projeto, grade 20x20x20). Ative o Mirror X no painel direito. Selecione a ferramenta Box. Clique e arraste para criar o tronco no centro. Mostre como, ao desenhar metade de um braço, o outro aparece sozinho graças ao espelhamento. Faça a cabeça com outra Box em cima, e as pernas embaixo. Use a ferramenta Line para ajustar bordas.

Mão na massa (25 min): cada aluno monta o próprio personagem seguindo a contagem de voxels do sprite. Circule pela sala. Garanta que todos ativaram o Mirror antes de começar e que estão construindo de baixo para cima: pernas, tronco, braços, cabeça. Reforce a regra de ouro: massas grandes primeiro, detalhes nunca nesta aula.

Desafio e compartilhar (10 min): peça que cada um gire a câmera 360 graus e confira se a silhueta é reconhecível de costas. Quem terminar antes recebe o desafio de ajustar a proporção para deixar a cabeça um voxel maior. Faça uma rodada rápida em que dois ou três alunos mostram a silhueta na tela.

## Como explicar de forma clara

Use a imagem de blocos de montar: o personagem é feito de peças grandes que se encaixam, não de mil pecinhas. Diga que estamos construindo o esqueleto, igual ao corpo de um boneco antes de vestir a roupa. Para o espelhamento, use a metáfora do espelho de verdade: o que você faz com a mão direita, o reflexo faz com a esquerda ao mesmo tempo. Para proporção, peça que olhem para um colega e contem quantas cabeças cabem no corpo dele. Evite termos técnicos demais; troque eixo por linha do meio e silhueta por sombra do personagem.

## Erros comuns e como ajudar

O erro mais frequente é esquecer de ligar o Mirror e construir só metade do corpo, ou os dois lados diferentes. Peça que apaguem e reativem o X antes de recomeçar. Outro erro é mergulhar nos detalhes (olhos, dedos) e travar; lembre que hoje é só a silhueta. Muitos alunos perdem a noção de tamanho e fazem a cabeça gigante ou minúscula; mande sempre comparar com o sprite e contar voxels. Há quem gire a câmera sem querer e ache que apagou tudo; mostre que é só rotacionar de volta com o botão direito. Por fim, quem constrói no ar, longe da grade base, fica com o boneco flutuando; oriente a começar sempre do chão para cima.`,
  exercicios: [
    {
      titulo: `Ligando o espelho`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Verifique na tela de cada aluno se o botão X do Mirror está aceso antes de qualquer desenho. É o pré-requisito de toda a aula.`,
      atividade: `Abra um projeto novo, ative o Mirror no eixo X no painel direito e desenhe um único braço com a ferramenta Box. Observe o que acontece do outro lado.`,
      gabarito: `Com o Mirror X ligado, ao desenhar um braço de um lado o segundo braço aparece automaticamente no lado oposto, perfeitamente simétrico. Se nada espelhar, o eixo não foi ativado.`,
    },
    {
      titulo: `Montando o esqueleto base`,
      tipo: `prática na ferramenta`,
      tempo: `15 min`,
      guiaProfessor: `Acompanhe a ordem de construção: pernas, tronco, braços, cabeça. Garanta que tudo nasce a partir do chão da grade, sem peças flutuando.`,
      atividade: `Construa a silhueta completa do seu personagem usando apenas as ferramentas Box e Line: duas pernas, um tronco, dois braços e uma cabeça, de baixo para cima.`,
      gabarito: `O resultado é um boneco em pé, com os quatro membros e a cabeça posicionados, simétrico graças ao Mirror e apoiado na base da grade. Não precisa ter cor nem detalhes, só o volume do corpo.`,
    },
    {
      titulo: `Contagem de proporção`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Compare o modelo 3D com o sprite original aberto ao lado. Ajude o aluno a contar voxels em altura para cada parte do corpo.`,
      atividade: `Conte quantos voxels de altura tem a cabeça e quantos tem o corpo no seu sprite original. Ajuste o modelo 3D para que ele respeite a mesma proporção do desenho.`,
      gabarito: `O modelo final tem a mesma relação de tamanhos do sprite: por exemplo, se no desenho a cabeça é metade do tronco, no 3D ela também é. A contagem de voxels confirma a proporção correta.`,
    },
    {
      titulo: `Conferência em dupla`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e oriente que cada um gire a câmera do colega com o botão direito do mouse para avaliar a silhueta de todos os ângulos.`,
      atividade: `Troque de cadeira com um colega. Gire a câmera do personagem dele 360 graus e diga se a silhueta está simétrica e se dá para reconhecer o personagem de costas e de lado.`,
      gabarito: `A dupla aponta acertos e pelo menos um ajuste possível: lados desiguais indicam Mirror desligado em parte do trabalho; silhueta irreconhecível de costas indica que falta volume em alguma massa. Cada aluno volta com um ajuste claro a fazer.`,
    },
    {
      titulo: `Roda de silhuetas`,
      tipo: `roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Projete dois ou três modelos na tela grande e conduza uma conversa curta e positiva, destacando o que cada silhueta comunica sobre o personagem.`,
      atividade: `Em roda, observe as silhuetas projetadas e comente: o que o formato do corpo já conta sobre esse personagem (forte, ágil, fofo)? O que você mudaria na proporção?`,
      gabarito: `A turma percebe que a silhueta sozinha já transmite personalidade: ombros largos sugerem força, corpo pequeno sugere agilidade ou fofura. Cada aluno sai com uma ideia de proporção para refinar antes da próxima aula.`,
    },
  ],
};
