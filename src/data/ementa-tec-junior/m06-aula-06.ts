import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Dando vida: rosto e cores do personagem",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança termina o seu herói desenhando olhos e boca e pintando o corpo com cores divertidas da paleta, salvando o sprite pronto para o jogo.`,
  descricao: `Nesta aula o herói criado na aula passada ganha vida! Até agora as crianças desenharam apenas o corpo (o contorno e o formato) do personagem. Hoje elas vão acrescentar o rosto — dois olhinhos e uma boquinha — e pintar o herói com cores alegres usando a paleta que já montaram. É o momento mais esperado da trilha de games: ver o bonequinho ganhar expressão e personalidade.

Por que isso importa? Em um jogo, o personagem é o melhor amigo do jogador. Quando ele tem rosto, a gente sente que ele está vivo, que ele olha, que ele sorri ou fica bravo. Um rostinho com dois pontos pretos e um traço de boca já transforma um quadrado colorido em alguém. As crianças vão perceber que pequenos detalhes mudam tudo, e que cada uma pode deixar o seu herói com a cara que quiser — esse é o coração da personalização.

Do ponto de vista técnico, a aula reforça três habilidades do Aseprite que as crianças já conhecem em partes: usar a ferramenta Lápis (Pencil) com zoom alto para colocar pixels minúsculos no lugar certo; usar o Balde (Bucket) para preencher áreas grandes do corpo com uma cor de uma vez; e escolher cores clicando na paleta. Tudo acontece em cima do desenho da aula 5, então ninguém começa do zero.

No fim, cada herói estará completinho: corpo pintado, olhos, boca e um detalhe especial de cada criança (uma bochecha rosada, um chapéu, uma estrela). O professor ajuda a salvar o arquivo do herói pronto, que será usado nas próximas aulas e, mais para frente, dentro do jogo no Construct. É a metade do projeto do mês caminhando muito bem.`,
  materiais: [
    `Computadores ligados, um por criança, com o Aseprite já aberto e o arquivo do herói da aula 5 carregado.`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar cada passo.`,
    `Arquivo de exemplo do professor: um herói simples 16x16 com corpo, olhos, boca e cores (para mostrar o resultado final).`,
    `A paleta de cores que cada turma montou na aula 3, salva e pronta para carregar.`,
    `Folhas de papel quadriculado e lápis de cor para o exercício de planejar o rosto antes de ir ao computador.`,
    `Espelho pequeno ou cartões com carinhas (feliz, triste, bravo, surpreso) para inspirar as expressões.`,
    `Adesivos ou carimbos para premiar quem terminar e ajudar o colega ao lado.`,
  ],
  conceitosChave: [
    `Rosto do personagem — os olhos e a boca que fazem o herói parecer vivo e olhar para a gente.`,
    `Pixel — o quadradinho pequenininho de cor; cada olho do herói pode ser só um pixel.`,
    `Ferramenta Lápis (Pencil) — o lápis mágico que pinta um quadradinho de cada vez, bom para detalhes pequenos como os olhos.`,
    `Ferramenta Balde (Bucket) — o baldinho de tinta que pinta um espaço grande inteiro de uma vez só, ótimo para o corpo.`,
    `Paleta — a caixinha de cores na tela; a gente clica em uma cor para escolher antes de pintar.`,
    `Zoom — a lupa que deixa o desenho bem grandão na tela para acertar os quadradinhos sem errar.`,
    `Expressão — a carinha do herói: feliz, brava ou surpresa, dependendo de como a gente faz a boca e os olhos.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O personagem desta aula é o mesmo herói desenhado na aula 5 (só o corpo, em 16x16 pixels). Hoje você vai guiar as crianças a adicionar rosto e cor. Tecnicamente, três coisas acontecem em cima do mesmo arquivo .aseprite.

Primeiro, o rosto. Em pixel art pequena, um olho é literalmente um único pixel preto, e a boca é um traço de dois ou três pixels. Use a ferramenta Lápis (atalho B, ícone de lápis na barra de ferramentas à esquerda). Sempre com bastante zoom: aperte o sinal de mais (+) ou use Ctrl junto com a rodinha do mouse para aproximar. Sem zoom, a criança não acerta o quadradinho certo.

Segundo, a cor do corpo. Para preencher uma área grande fechada, use o Balde (atalho G, ícone de balde de tinta). Atenção: o Balde só funciona bem se o contorno do corpo estiver fechado, sem furos. Se houver um buraquinho no contorno, a tinta vaza e pinta a tela inteira. Por isso confira os contornos antes.

Terceiro, escolher cor: basta clicar em um quadradinho da paleta (painel de cores, geralmente à direita ou embaixo). A cor clicada vira a cor ativa, mostrada no canto. Lembre as crianças de trocar a cor para preta antes de fazer os olhos.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento: Abra o exemplo no projetor. Mostre o herói sem rosto e pergunte: "Falta alguma coisa nele?" Deixe as crianças responderem. Em seguida, no projetor, faça aparecer os olhos e a boca com o Lápis e ouça o "uau". Relembre os atalhos: B para Lápis, G para Balde.

15 min - Conteúdo novo guiado: No seu computador, com o projetor ligado, dê zoom no herói (aperte + algumas vezes). Selecione o Lápis (B). Clique na cor preta na paleta. Coloque um pixel para o olho esquerdo, conte "um quadradinho", e outro para o direito. Depois faça a boca com dois ou três pixels em linha. Agora pegue o Balde (G), clique numa cor alegre da paleta e clique dentro do corpo para pintar. Mostre como dá para pintar braços e pernas de cores diferentes.

25 min - Mão na massa: Cada criança faz no seu herói. Circule pela sala. Ordem sugerida no quadro: 1) pintar o corpo com o Balde; 2) trocar para preto e fazer os dois olhos com o Lápis; 3) fazer a boca; 4) inventar um detalhe (bochecha, chapéu, estrela). Salve com Ctrl junto com S de tempos em tempos.

10 min - Desafio + compartilhar: Desafie a mudar a boca para deixar o herói feliz, bravo ou surpreso. Cada criança gira a tela ou vem ao projetor mostrar o herói e dizer o nome dele. Salve o arquivo final juntos.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame os olhos de "duas sementinhas pretas" e a boca de "um sorriso de tracinho". Diga que o Balde é "um baldinho de tinta que pinta tudo de uma vez, igual quando jogamos água no chão". Diga que o Lápis é "o lápis de fada que pinta um quadradinho de cada vez". O zoom é "a lupa de detetive que deixa tudo grandão". Para a expressão: "a boca para cima é sorriso, a boca para baixo é tristinho". Sempre demonstre primeiro e deixe imitar.

## Erros comuns e como ajudar

O erro mais comum é a tinta do Balde vazar e pintar tudo: o contorno do corpo tem um furinho. Ajude a achar o buraco com zoom e feche com o Lápis, depois desfaça (Ctrl com Z) e pinte de novo. Outro erro: olhos grandes demais que viram manchas; lembre que olho é só um quadradinho. Crianças também esquecem de trocar a cor e fazem o olho da cor do corpo; reforce "primeiro clico na cor, depois pinto". E há quem aperte o Balde com o Lápis selecionado, ou o contrário; mostre de novo os dois ícones. Por fim, alguns esquecem de salvar; passe lembrando do Ctrl com S e elogie quem salva sozinho.`,
  exercicios: [
    {
      titulo: `Carinha no papel quadriculado`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Antes de ir ao computador, entregue uma folha quadriculada com um corpinho de herói já desenhado. Explique que vamos planejar onde ficam os olhos e a boca pintando os quadradinhos com lápis de cor. Mostre no quadro uma carinha simples.`,
      atividade: `Pinte dois quadradinhos para os olhos e alguns quadradinhos em linha para a boca do herói da folha. Depois pinte o corpo da cor que você quiser.`,
      gabarito: `Acertou quando a folha tem dois pontinhos separados na parte de cima (olhos), um tracinho para a boca embaixo dos olhos e o corpo pintado de uma cor. Não precisa ser perfeito; o importante é olhos em cima, boca embaixo e corpo colorido.`,
    },
    {
      titulo: `Pintando o corpo com o Balde`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `No projetor, relembre o ícone do Balde e o atalho G. Mostre que primeiro a gente clica numa cor da paleta e só depois clica dentro do corpo. Avise que o contorno precisa estar fechado para a tinta não vazar.`,
      atividade: `Escolha uma cor alegre na paleta, pegue o Balde (G) e clique dentro do corpo do seu herói para pintar. Se quiser, pinte os braços ou as pernas de outra cor.`,
      gabarito: `Acertou quando o corpo do herói está totalmente preenchido com cor, sem ficar branco por dentro e sem a tinta ter vazado para fora do contorno. Se vazou, o contorno tinha um furo: feche com o Lápis e pinte de novo.`,
    },
    {
      titulo: `Dois olhos e um sorriso`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre dar zoom com o sinal de mais. Selecione o Lápis (B), clique na cor preta e faça os olhos com um quadradinho cada, depois a boca. Conte os quadradinhos em voz alta para a turma acompanhar.`,
      atividade: `Dê zoom no seu herói. Pegue o Lápis (B), clique na cor preta e faça dois olhos (um quadradinho cada) e uma boca de sorriso com dois ou três quadradinhos.`,
      gabarito: `Acertou quando o herói tem dois olhos pretos separados na parte de cima do rosto e uma boca embaixo. Os olhos devem ser pequenos (um quadradinho) e estar do lado direito e esquerdo, não grudados.`,
    },
    {
      titulo: `Jogo das expressões`,
      tipo: `jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre cartões com carinhas: feliz, brava, surpresa. Explique que a boca muda a expressão: para cima é feliz, reta é séria, um círculo é surpresa. Fale uma expressão e a turma muda a boca do herói; quem acerta levanta a mão.`,
      atividade: `Quando o professor disser uma carinha (feliz, brava ou surpresa), mude a boca do seu herói com o Lápis para deixar ele com essa expressão. Use Ctrl com Z se quiser desfazer e tentar de novo.`,
      gabarito: `Acertou quando a boca combina com a carinha pedida: sorriso (boca curvada para cima) para feliz, boca para baixo para brava ou triste, e uma boquinha redonda ou aberta para surpresa. Vale qualquer formato que mostre claramente a emoção.`,
    },
    {
      titulo: `Meu herói tem um segredo`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Convide cada criança a inventar um detalhe único: bochecha rosada, chapéu, estrela na barriga, cabelo colorido. Demonstre um exemplo com o Lápis. No fim, faça uma roda rápida para cada um mostrar e contar o nome do herói. Ajude todos a salvar com Ctrl com S.`,
      atividade: `Pense em um detalhe especial só do seu herói e desenhe com o Lápis (pode ser bochecha, chapéu, estrela ou cabelo). Depois salve o arquivo e venha mostrar o seu herói para a turma, dizendo o nome dele.`,
      gabarito: `Acertou quando o herói está completo (corpo pintado, olhos, boca) e tem pelo menos um detalhe novo criado pela criança, e o arquivo foi salvo. Na roda, a criança consegue apontar o detalhe e dizer o nome do herói.`,
    },
  ],
};
