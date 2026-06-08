import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Imprimir e Levar para Casa",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança vê o seu personagem de cubinhos virar um boneco de verdade na impressora 3D, recebe o brinquedo impresso, mostra para os colegas e leva para casa, encerrando com orgulho a primeira parte do projeto.`,
  descricao: `Esta é a aula da grande festa! Nas semanas anteriores cada criança construiu, pintou, deu detalhes e preparou o seu personagem em cubinhos dentro do MagicaVoxel. Na aula passada a turma deixou tudo pronto para imprimir. Agora chegou o momento mágico: ver a impressora 3D trabalhar e transformar o desenho do computador em um boneco que cabe na mão.

A impressão 3D é o jeito que a máquina tem de construir um objeto de verdade, camadinha por camadinha, como se fosse empilhando muitas panquecas finas até formar o boneco inteiro. A criança não precisa saber como a máquina funciona por dentro; o importante é entender a ideia bonita de que aquilo que ela imaginou e montou na tela agora existe no mundo real, dá para segurar, mostrar e guardar.

Como a impressão de cada peça leva tempo (mais do que uma aula), o professor já deixou os bonecos prontos ou em andamento. A aula é de celebração: a turma observa a impressora em ação por alguns minutos, conversa sobre o que está acontecendo, cada criança recebe o seu personagem, apresenta para os colegas contando o que criou e, no fim, embala com carinho para levar para casa.

O objetivo desta aula não é técnico, e sim emocional e de fechamento. As crianças saem com a sensação de que são criadoras de verdade, com um objeto nas mãos que prova isso. É o tipo de momento que faz a criança querer continuar na trilha de games e contar para a família tudo o que aprendeu.`,
  materiais: [
    `Impressora 3D ligada e em funcionamento, posicionada onde toda a turma consiga ver com segurança (atrás de uma mesa ou barreira).`,
    `Os personagens de cada criança já impressos (ou em impressão), identificados com o nome de cada aluno em uma etiqueta ou saquinho.`,
    `Projetor ou TV mostrando o MagicaVoxel com os personagens da turma na tela, para comparar o modelo digital com o boneco impresso.`,
    `Computadores com MagicaVoxel aberto, com o arquivo de cada criança carregado, para a roda de comparação.`,
    `Saquinhos, caixinhas ou envelopes coloridos para cada criança embalar o seu boneco com cuidado.`,
    `Cartões de papel em branco, lápis de cor e adesivos para a criança fazer um cartão ou crachá do personagem.`,
    `Lenços umedecidos ou pano, pois as peças recém-impressas podem estar levemente ásperas ou com restos de material.`,
  ],
  conceitosChave: [
    `Impressora 3D — uma máquina mágica que constrói objetos de verdade, montando muitas camadinhas finas até formar o boneco inteiro.`,
    `Camada — cada andar fininho que a impressora empilha; juntando muitos andares, nasce o personagem.`,
    `Filamento — o fio de plástico colorido que a impressora derrete e usa como tinta para desenhar no ar.`,
    `Modelo 3D — o desenho de cubinhos que a criança fez no computador e que vira o molde do boneco.`,
    `Imprimir — transformar o desenho da tela em um objeto que dá para segurar com a mão.`,
    `Protótipo — a primeira versão do brinquedo, feita para a gente ver, testar e ter orgulho.`,
    `Criador — a pessoa que imagina e constrói; nesta aula, cada criança é a criadora do seu personagem.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Esta aula é de celebração e fechamento, não de novos comandos no MagicaVoxel. Sua função é conduzir a emoção do momento e explicar, em palavras simples, o que a impressora 3D faz. A impressão 3D funciona por deposição de camadas: a impressora derrete um fio de plástico (o filamento) e o deposita camada por camada, de baixo para cima, até montar o objeto sólido. Pense em empilhar muitas panquecas finíssimas. O modelo que a criança fez no MagicaVoxel foi exportado (na Aula 7) para um arquivo que a impressora entende. Você não precisa dominar a máquina; basta saber explicar a ideia e garantir a segurança.

Ponto importante de logística: a impressão de cada boneco leva de muitos minutos a horas, então você JÁ deve ter impresso as peças antes da aula, ou ter pelo menos uma impressão em andamento para a turma assistir. Nunca dependa de imprimir tudo durante a hora de aula. Tenha todos os bonecos prontos, etiquetados com o nome de cada criança.

Segurança: o bico da impressora fica muito quente e a mesa pode se mover. As crianças observam de longe, atrás de uma barreira, sem encostar. Você é a única pessoa que toca na máquina.

## Passo a passo da aula (ritmo 10/15/25/10)

 AQUECIMENTO / REVISAO (10 min): Reúna a turma e abra o MagicaVoxel no projetor com os personagens da semana. No painel direito, mostre rapidamente o modelo de uma criança girando a cena (clique e arraste com o botão esquerdo do mouse na área de visualização para rotacionar). Pergunte: lembram de quem é este boneco? O que ele tem de especial? Crie expectativa dizendo que hoje eles vão segurar isso de verdade.

CONTEUDO NOVO GUIADO (15 min): Leve a turma até a impressora 3D, em segurança. Mostre o filamento (o fio colorido) entrando na máquina e aponte as camadas se formando. Explique devagar: a máquina pega o desenho da tela e constrói camadinha por camadinha. Deixe a turma observar a impressora trabalhando por alguns minutos, em silêncio encantado. Compare na tela: no MagicaVoxel, gire o modelo digital e mostre que a peça impressa tem a mesma forma de cubinhos.

MAO NA MASSA (25 min): Entregue a cada criança o seu personagem impresso, um de cada vez, chamando pelo nome com uma pequena celebração (palmas da turma). Cada criança examina o seu boneco, sente a textura e compara com o modelo no computador (no MagicaVoxel, com o arquivo dela aberto, ela gira a cena com o botão esquerdo para achar o mesmo ângulo do boneco). Depois, cada um faz um cartão ou crachá do personagem com papel e lápis de cor, escrevendo ou desenhando o nome do boneco.

DESAFIO + COMPARTILHAR (10 min): Roda final. Cada criança levanta o seu boneco, diz o nome do personagem e conta uma coisa que ele faz ou gosta. Em seguida, todos embalam o boneco no saquinho ou caixinha com o cartão dentro, prontos para levar para casa. Encerre dizendo que eles são criadores de verdade.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use analogias concretas. A impressora 3D é uma máquina mágica que desenha no ar com cola colorida que endurece. As camadas são como andares de um predinho: ela faz um andar, depois outro, até o boneco ficar pronto. O filamento é a tinta especial da máquina, um fio que ela derrete como queijo quentinho. Diga que o boneco saiu de dentro da cabeça deles, foi para o computador e agora pulou para a mão. Reforce sempre a frase: você é um criador! Evite palavras técnicas como extrusora, fatiamento ou STL; foque no encantamento e no orgulho.

## Erros comuns e como ajudar

O erro mais comum é a frustração se um boneco saiu menos perfeito (camada torta, peça pequena). Antecipe isso: diga que toda primeira versão é um protótipo, feito para a gente aprender, e que está lindo do jeito que é. Outro ponto é a ansiedade para tocar na impressora quente; mantenha a barreira firme e seja a única a manusear a máquina. Algumas crianças ficam tímidas na hora de apresentar; ajude com perguntas simples (qual o nome dele? do que ele gosta?). Cuide também do tempo de entrega: chame os nomes em ritmo animado para ninguém ficar ansioso esperando. Por fim, garanta que cada boneco está bem etiquetado para não trocar entre as crianças.`,
  exercicios: [
    {
      titulo: `Caça ao Ângulo Igual`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como girar a cena no MagicaVoxel arrastando com o botão esquerdo do mouse na área de visualização. Diga à criança que ela vai virar o boneco na tela até ficar igualzinho ao boneco que está na mão dela.`,
      atividade: `Com o seu personagem impresso na mesa ao lado, gire o modelo no MagicaVoxel até a tela mostrar o mesmo ladinho do boneco de verdade (a frente, depois as costas).`,
      gabarito: `A criança acertou quando o desenho na tela aponta para o mesmo lado do boneco na mão, mostrando a mesma carinha ou as mesmas costas. O professor confirma comparando os dois lado a lado.`,
    },
    {
      titulo: `Empilhando Panquecas`,
      tipo: `jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Explique que a impressora monta o boneco em camadas, de baixo para cima. Proponha um jogo de imitar a máquina com o corpo, montando andar por andar bem devagar.`,
      atividade: `Em pé, comecem agachados (camada do chão) e, a cada vez que o professor disser camada, suba um pouquinho o corpo, como a impressora subindo, até ficar bem alto no fim. Quem subir na ordem certa, sem pular etapa, vence.`,
      gabarito: `Acerta quem sobe um nível de cada vez, na ordem, sem pular do chão direto para o alto, mostrando que entendeu que o boneco cresce camada por camada.`,
    },
    {
      titulo: `Roda do Criador`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme uma roda com a turma. Faça perguntas simples e dê a vez para cada criança falar sobre o seu boneco, ajudando os mais tímidos com perguntas curtas.`,
      atividade: `Cada criança levanta o seu personagem impresso e responde: qual é o nome dele? Do que ele gosta? O que foi mais legal de criar?`,
      gabarito: `O exercício deu certo quando cada criança fala pelo menos uma coisa sobre o seu personagem (o nome, um gosto ou uma parte favorita), mostrando orgulho do que criou.`,
    },
    {
      titulo: `O Crachá do Meu Personagem`,
      tipo: `desenho/papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue um cartão de papel, lápis de cor e adesivos. Mostre um modelo pronto feito por você. Diga que cada boneco vai para casa com um crachá, como um documento dele.`,
      atividade: `Faça um cartão para o seu personagem: escreva ou desenhe o nome dele, pinte com as cores do boneco e cole um adesivo. Depois coloque o cartão dentro do saquinho junto com o boneco.`,
      gabarito: `Está correto quando o cartão tem o nome do personagem (escrito ou desenhado) e cores que combinam com o boneco impresso, e fica guardado junto com ele no saquinho.`,
    },
    {
      titulo: `Apresentação do Inventor`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Este é o desafio final e mais completo. Cada criança vira o apresentador do seu próprio brinquedo diante da turma. Combine palmas para todos. Incentive uma fala um pouco maior do que na roda.`,
      atividade: `Na frente da turma, segure o seu boneco e conte três coisas: o nome dele, uma coisa que ele faz e por que você gosta dele. No fim, mostre o seu crachá. A turma aplaude cada inventor.`,
      gabarito: `O desafio é vencido quando a criança apresenta o boneco dizendo as três coisas pedidas (nome, uma ação e um motivo de gostar) e mostra o crachá, recebendo os aplausos da turma como criadora de verdade.`,
    },
  ],
};
