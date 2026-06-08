import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Construindo o Personagem",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Desenhar a pose base (de frente) do personagem principal do jogo em 16x16 ou 24x24, aplicando a paleta, as proporções e o sombreamento para garantir legibilidade e identidade própria.`,
  descricao: `Nesta aula o aluno deixa de desenhar formas soltas e dá um passo gigante: cria o personagem principal que vai estrelar o jogo dele. Usando tudo o que aprendeu sobre formas, contorno, volume e paleta de cores, ele monta a pose base de frente, aquela que serve de referência para todas as outras animações que virão. É o momento em que o personagem ganha rosto, postura e personalidade dentro de pouquíssimos pixels.

Trabalhar em uma grade pequena (16x16 ou 24x24) é um desafio de economia: cada pixel conta e precisa ter um motivo para estar ali. Por isso a aula trata muito de proporção, a famosa relação entre o tamanho da cabeça e do corpo. Em pixel art de personagens fofos, a cabeça costuma ser grande (estilo cabeçudo), porque é nela que estão os olhos, e os olhos são o que dá vida e expressão. O aluno aprende a reservar espaço para a cabeça, o tronco, os braços e as pernas antes mesmo de colorir.

Depois da silhueta e das cores chapadas, entra o refinamento: o sombreamento. Com uma cor mais escura da própria paleta, o aluno adiciona sombra de um lado (decidindo de onde vem a luz) e, se quiser, um leve brilho do outro lado. Isso transforma um boneco plano em um personagem com volume. O segredo que o professor deve reforçar é a legibilidade: mesmo minúsculo, o personagem precisa ser reconhecido num piscar de olhos, com leitura clara da silhueta e contraste entre as partes.

Ao final, cada aluno terá um personagem com identidade própria, pronto para virar a base do conjunto de sprites do mês. Esse é o coração do entregável, então vale celebrar: o jogo deles agora tem um herói (ou heroína, ou monstrinho) de verdade.`,
  materiais: [
    `Computadores com o Aseprite instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar cada passo ao vivo`,
    `Arquivo de exemplo (.aseprite) com um personagem 16x16 já pronto, sombreado, para servir de referência`,
    `Folha impressa com a grade de proporções (cabeça, tronco, braços e pernas) para o aluno rascunhar antes`,
    `A paleta de cores que cada aluno salvou na aula anterior (arquivo .gpl ou .aseprite)`,
    `Mouse para quem preferir, além do touchpad, para ganhar precisão no clique`,
  ],
  conceitosChave: [
    `Pose base — desenho do personagem de frente, parado, que serve de referência para todas as outras poses e animações.`,
    `Proporção — relação de tamanho entre as partes do corpo, principalmente entre a cabeça e o resto; em personagens fofos a cabeça é grande.`,
    `Silhueta — o contorno cheio do personagem; se a silhueta sozinha já é reconhecível, o desenho está legível.`,
    `Legibilidade — clareza com que o personagem é entendido mesmo pequeno; depende de contraste e de formas limpas.`,
    `Sombreamento — uso de uma cor mais escura da paleta de um lado para criar volume e indicar de onde vem a luz.`,
    `Identidade visual — conjunto de detalhes (cor, formato, acessório) que torna o personagem único e diferente dos outros.`,
    `Ponto de luz — direção de onde a luz vem na cena, que decide qual lado recebe sombra e qual recebe brilho.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai guiar a criação de um personagem completo em uma grade minúscula. Não precisa ser artista: precisa entender a ordem das camadas de trabalho. A ordem é sempre: silhueta primeiro, cores chapadas depois, sombreamento por último. Se o aluno pular para a sombra antes de fechar a forma, ele se perde. Antes da aula, abra o arquivo de exemplo e confira na barra de status (canto inferior esquerdo) que ele está em 16x16 ou 24x24. Tenha a paleta dos alunos à mão e saiba ativar o Pixel Perfect (ícone na barra de opções da ferramenta Lápis, o atalho não é fixo, então clique no botão).

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra o arquivo da aula anterior com a paleta. No projetor, mostre o arquivo de exemplo do personagem pronto. Pergunte: o que faz esse personagem ser legível? Recolha respostas (silhueta clara, olhos grandes, contraste). Crie um novo arquivo com File maior que New, defina Width 16 e Height 16 (ou 24x24), Color Mode RGBA, e clique OK.

Conteúdo novo guiado (15 min): com a ferramenta Lápis (atalho B), tamanho 1 pixel, ative o Pixel Perfect na barra de opções. Demonstre desenhar só a silhueta do personagem com uma cor escura: comece pela cabeça grande na parte de cima, depois tronco, braços e pernas curtas. Use View maior que Grid (atalho com a tecla acento agudo) para enxergar cada quadradinho. Mostre como ampliar com a roda do mouse segurando, ou com Ctrl mais sinal de mais. Crie uma camada nova clicando no ícone de página no painel Layers para separar a silhueta da cor.

Mão na massa (25 min): cada aluno desenha a própria silhueta de frente, respeitando a proporção do rascunho de papel. Em seguida, com a ferramenta Balde (atalho G), pinta as áreas grandes (corpo, cabeça) com as cores chapadas da paleta. Depois usa o Lápis para os olhos e detalhes do rosto. Por fim, escolhe de onde vem a luz e, com uma cor mais escura da paleta, pinta a sombra de um lado. Circule pela sala, sente ao lado de quem travar e faça uma pergunta de cada vez.

Desafio e compartilhar (10 min): peça que cada aluno adicione UM detalhe de identidade (um chapéu, uma cor de cabelo única, um acessório). Depois, projete dois ou três personagens e celebre. Salve com Ctrl mais S no formato .aseprite.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de boneco de massinha: primeiro a gente faz o boneco inteiro de uma cor só (a silhueta), depois pinta as partes, e só no fim aperta os dedos para fazer sombra. Para proporção, diga que personagem fofo é cabeçudo de propósito, porque é na cabeça que moram os olhos, e olho grande é igual a emoção grande. Para legibilidade, faça o teste do longe: se você der três passos para trás e ainda reconhece o personagem, ele passou. Evite a palavra anatomia; fale em encaixar as partes.

## Erros comuns e como ajudar

O erro mais comum é desenhar a cabeça pequena demais, e aí não sobra espaço para os olhos. Peça para refazer reservando quase metade da altura para a cabeça. O segundo erro é misturar cores que não estão na paleta: lembre o aluno de clicar nas cores do painel Palette, não no seletor livre. O terceiro é sombrear dos dois lados ao mesmo tempo, o que deixa o personagem chapado de novo; reforce a regra de uma luz, um lado de sombra. Por fim, muitos esquecem de criar camadas separadas e apagam a cor junto com a linha; mostre o painel Layers e o cadeado de visibilidade. Se alguém quiser desenhar grande demais, lembre que aqui o desafio é caber em poucos pixels, e isso é o que torna a pixel art especial.`,
  exercicios: [
    {
      titulo: `Reservando o espaço do corpo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos criem o canvas no tamanho certo antes de desenhar. Passe verificando a barra de status com o tamanho do documento. O foco é só a divisão do espaço, ainda sem detalhes.`,
      atividade: `Crie um novo arquivo 16x16 e, usando o Lápis numa cor escura, marque apenas os blocos das quatro partes do corpo: cabeça (na metade de cima), tronco, braços e pernas. Não desenhe rosto ainda.`,
      gabarito: `O aluno deve ter quatro regiões claras: uma cabeça grande ocupando perto da metade superior, um tronco menor no centro, dois braços nas laterais e duas pernas curtas embaixo. A silhueta toda deve caber dentro da grade sem encostar nas bordas de cima e de baixo ao mesmo tempo.`,
    },
    {
      titulo: `Da silhueta às cores chapadas`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre o atalho do Balde (G) e relembre que ele só preenche áreas fechadas. Se a cor vazar, é porque a silhueta tem um buraco; ajude a fechar com o Lápis. Insista que as cores venham do painel Palette.`,
      atividade: `Em cima da silhueta da atividade anterior, crie uma camada nova no painel Layers e pinte as áreas grandes do personagem com as cores chapadas da sua paleta, usando o Balde. Acrescente os olhos com o Lápis.`,
      gabarito: `O personagem deve estar totalmente colorido com cores da paleta própria, sem vazamentos para fora da silhueta, e com pelo menos dois olhos visíveis. A linha da silhueta e as cores devem estar em camadas diferentes (visível no painel Layers).`,
    },
    {
      titulo: `Acendendo a luz: sombreamento`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada aluno decida primeiro de onde vem a luz (esquerda ou direita) e mantenha a decisão. Reforce a regra de uma luz, um lado de sombra. A cor da sombra deve ser uma versão mais escura da própria paleta.`,
      atividade: `Escolha de qual lado a luz vem. Com uma cor mais escura da sua paleta, pinte a sombra no lado oposto do personagem (cabeça, tronco e pernas). Se sobrar tempo, adicione um leve brilho no lado da luz.`,
      gabarito: `O personagem deve apresentar sombra consistente em um único lado, criando sensação de volume, sem manchas escuras dos dois lados. A cor da sombra deve pertencer à paleta e ser mais escura que a cor base correspondente.`,
    },
    {
      titulo: `Teste do longe em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Oriente que a crítica seja gentil e específica: o que está claro e o que confunde. Use a ampliação reduzida (Zoom 100 por cento) para simular o tamanho real no jogo. Anote no quadro os ajustes mais pedidos.`,
      atividade: `Troque de lugar com o colega. Olhe o personagem dele a três passos de distância e em zoom 100 por cento. Diga uma coisa que ficou ótima e uma que está difícil de reconhecer. Depois, cada um ajusta o próprio personagem com a dica recebida.`,
      gabarito: `Cada dupla deve registrar pelo menos um elogio e uma sugestão de melhoria por personagem. Espera-se que o personagem ajustado fique mais legível ao final, com silhueta reconhecível mesmo em tamanho pequeno.`,
    },
    {
      titulo: `Meu herói tem identidade`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este exercício fecha o personagem como base do conjunto de sprites. Incentive um detalhe único por aluno e ajude a salvar no formato .aseprite com nome claro. Faça uma roda rápida ao final para cada um apresentar o nome e o detalhe do personagem.`,
      atividade: `Finalize seu personagem adicionando UM detalhe de identidade própria (acessório, cor exclusiva, marca ou expressão). Dê um nome a ele e salve o arquivo como personagem-base.aseprite. Apresente em uma frase quem é o seu personagem.`,
      gabarito: `O arquivo salvo deve conter um personagem de frente, colorido com a paleta, sombreado de um lado e com pelo menos um detalhe que o diferencie dos demais. O aluno deve nomear o personagem e descrever sua identidade em uma frase curta.`,
    },
  ],
};
