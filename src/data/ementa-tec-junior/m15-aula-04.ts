import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Cores e detalhes do personagem",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Dar vida ao herói pintando-o com a paleta escolhida e acrescentando detalhes simples como olhos, roupa e sombra, salvando ao final o personagem pronto em pose parada para usar no jogo.`,
  descricao: `Na aula passada cada criança desenhou o contorno do herói do jogo: o bonequinho ainda estava só com o "esqueleto", aquele traçado simples que mostra a forma do corpo. Hoje é o dia de colorir e dar personalidade! Vamos pegar a paleta de cores que a turma escolheu e pintar o personagem todo, deixando-o bonito e fácil de reconhecer na tela do jogo.

Pintar pixel art não é como pintar um desenho no papel. No Aseprite a gente preenche quadradinho por quadradinho, escolhendo uma cor da paleta de cada vez. Por isso ensinamos duas ferramentas que economizam tempo: o Balde de Tinta (Paint Bucket), que enche uma área inteira fechada de uma vez só, e o Lápis (Pencil), que pinta um quadradinho por clique para os detalhes pequenos. Depois de pintar as áreas grandes (corpo, roupa, cabelo), chegam os detalhes que dão vida: os olhos, a boca, um botão na roupa e a sombrinha embaixo do corpo, que faz o personagem parecer que está de pé no chão.

A grande ideia da aula é a noção de luz e sombra simples. O herói fica muito mais bonito quando usamos uma cor um pouquinho mais escura embaixo (a sombra) e às vezes uma cor mais clara em cima (a luz). Não precisa ser nada complicado: uma cor escura para baixo e pronto. As crianças adoram ver o boneco "saltar" da tela quando ganham a sombra. Como a turma é pequena, de até dez alunos, o professor consegue passar de mesa em mesa e ajudar cada criança a escolher onde colocar cada cor.

No final da aula, cada aluno terá o personagem principal completamente colorido e cheio de detalhes, em pose parada (de pé, olhando para a frente). Esse será o sprite mais importante do jogo do ano, e por isso vamos salvar com muito cuidado, no formato do Aseprite, para continuar usando nas próximas aulas. É um momento de muito orgulho: o herói finalmente ganhou vida!`,
  materiais: [
    `Computadores com o Aseprite aberto, cada um com o arquivo do herói da aula anterior (o contorno já pronto) carregado`,
    `Projetor ou TV ligado ao computador do professor para demonstrar cada passo no Aseprite ao vivo`,
    `Um personagem de exemplo já colorido pelo professor, com olhos, roupa e sombra, para mostrar o resultado final`,
    `A paleta de cores que a turma escolheu, salva e visível no painel de cores (Color Palette) de cada máquina`,
    `Folha impressa com o herói de exemplo em duas versões: só contorno e totalmente colorido, para comparar`,
    `Mouses funcionando bem em todas as máquinas (testar antes; o mouse é essencial para clicar nos pixels)`,
    `Cartões de cor (quadradinhos coloridos) para a criança planejar no papel antes de pintar na tela`,
  ],
  conceitosChave: [
    `Paleta — a caixinha com as cores escolhidas para o jogo; só pintamos com as cores que estão nela, para tudo combinar.`,
    `Balde de Tinta (Paint Bucket) — a ferramenta que enche uma área fechada inteira de cor com um clique só, como derramar tinta dentro de um desenho.`,
    `Lápis (Pencil) — a ferramenta que pinta um quadradinho de cada vez, boa para os detalhes pequenos como os olhos.`,
    `Detalhe — as coisinhas pequenas que dão personalidade ao herói: olhos, boca, cabelo, um botão na roupa.`,
    `Sombra — uma cor um pouco mais escura colocada embaixo do personagem, que faz ele parecer que está de pé no chão.`,
    `Pose parada — o personagem de pé, olhando para a frente, sem se mexer; é a posição principal que usamos no jogo.`,
    `Salvar como .aseprite — guardar o desenho no formato do programa, para poder abrir e continuar editando depois.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista para conduzir esta aula. O segredo é pintar primeiro as áreas grandes e só depois os detalhes. No Aseprite, as ferramentas ficam na barra vertical da esquerda. As duas que usaremos hoje são o Lápis (Pencil), com ícone de lápis, e o Balde de Tinta (Paint Bucket), com ícone de balde derramando. As cores ficam no painel Color Palette, normalmente embaixo à esquerda: basta clicar numa cor para escolhê-la. Antes da aula, abra o seu personagem de exemplo e pinte-o por completo uma vez, para você decorar o caminho. Um cuidado importante: o Balde só preenche corretamente se o contorno estiver fechado (sem buraquinhos); por isso, na demonstração, mostre o que acontece quando há uma "fresta" e a tinta vaza para fora. Atalhos úteis: tecla B para o Lápis, tecla G para o Balde, e Ctrl+Z para desfazer. A sombra simples é só uma cor mais escura colocada na parte de baixo do corpo.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Reúna a turma no projetor. Mostre a folha com o herói só de contorno ao lado do herói colorido e pergunte: "Qual deles parece estar vivo?". Relembre que na aula passada eles fizeram o contorno e que hoje vamos pintar. Peça que cada criança abra o próprio arquivo do herói no Aseprite (File, depois Open Recent, ou clicar no arquivo já aberto).

15 min — Conteúdo novo guiado. No seu computador, com o exemplo no projetor, demonstre devagar. Primeiro clique numa cor da paleta (Color Palette). Depois selecione o Balde de Tinta (Paint Bucket) na barra da esquerda e clique dentro do corpo do boneco: a área enche de cor de uma vez. Faça o mesmo com a roupa e o cabelo, trocando a cor na paleta antes de cada clique. Em seguida, troque para o Lápis (Pencil) e pinte os olhos e a boca, um quadradinho por vez. Por fim, escolha uma cor mais escura e, com o Lápis, faça uma linha de sombra na parte de baixo do corpo. Mostre o antes e o depois.

25 min — Mão na massa. As crianças pintam o próprio herói. Oriente a ordem: 1) corpo com o Balde; 2) roupa com o Balde; 3) cabelo com o Balde; 4) olhos e boca com o Lápis; 5) sombra escura embaixo com o Lápis. Passe de mesa em mesa. Para quem terminar antes, sugira um detalhe extra: um botão, um cinto ou um brilho no cabelo. Lembre sempre de usar só as cores da paleta da turma.

10 min — Desafio e compartilhar. Desafie cada criança a acrescentar um último detalhe especial que mostre quem é o herói (um chapéu, um laço, um símbolo na roupa). Depois, ensine a salvar: File, depois Save (Salvar), mantendo o formato .aseprite. Cada criança mostra o herói pronto no projetor e diz uma coisa que o personagem gosta de fazer.

## Como explicar para crianças

Use a analogia do livro de colorir: "O contorno é o desenho do livrinho; agora vamos pintar dentro das linhas." Explique o Balde assim: "É como derramar um potinho de tinta dentro de um cercadinho fechado; a tinta enche tudo, mas se tiver um buraco ela escapa." Para a sombra, diga: "Toda pessoa de pé no sol tem uma sombrinha embaixo; vamos dar uma sombra para o herói também, para ele não parecer que está flutuando." Reforce sempre: "Só usamos as cores da nossa paleta, assim o jogo fica bonito e combinando."

## Erros comuns e como ajudar

O erro mais comum é a tinta do Balde vazar para fora porque o contorno tem uma frestinha. Ajude a criança a achar o buraco e a fechá-lo com o Lápis antes de pintar de novo (use Ctrl+Z para desfazer o vazamento). Outro erro é pintar com cores que não estão na paleta: peça para clicar sempre numa cor da Color Palette antes de pintar. Algumas crianças fazem os olhos enormes; mostre que dois quadradinhos pequenos já bastam. Há quem pinte a sombra clara em vez de escura: explique que a sombra é sempre mais escura que o corpo. E lembre todos de salvar com Ctrl+S no final, para não perder o trabalho.`,
  exercicios: [
    {
      titulo: `Contorno ou colorido: quem está vivo?`,
      tipo: `Pergunta oral em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento, antes da demonstração. Mostre no projetor (ou na folha impressa) o herói só de contorno ao lado do herói totalmente colorido com olhos e sombra. Deixe as crianças responderem em voz alta e aceitem várias palavras parecidas.`,
      atividade: `Olhe os dois bonecos: um só com o traço e outro pintado, com olhos e sombra. Diga qual deles parece estar vivo e conte o que faz ele parecer mais vivo.`,
      gabarito: `O boneco colorido é o que parece vivo. As crianças devem citar pelo menos um motivo: as cores, os olhos, a roupa pintada ou a sombra embaixo. Qualquer um desses motivos vale como acerto.`,
    },
    {
      titulo: `Escolho a cor antes de pintar`,
      tipo: `Prática no computador (passo curto)`,
      tempo: `5 minutos`,
      guiaProfessor: `Logo após a demonstração, peça que cada criança pratique só o gesto de escolher a cor. Aponte o painel Color Palette no canto inferior esquerdo. Confira mesa a mesa se a criança consegue clicar numa cor e ver o quadradinho de cor selecionada mudar.`,
      atividade: `No painel de cores (Color Palette), clique em três cores diferentes da paleta da turma, uma de cada vez. Observe o quadradinho da cor escolhida mudando a cada clique.`,
      gabarito: `A criança acerta quando consegue clicar numa cor da paleta e a cor selecionada (o quadradinho ativo) muda de acordo. Sinal de êxito: ela troca de cor sozinha sem ajuda.`,
    },
    {
      titulo: `Encho o corpo com o Balde`,
      tipo: `Mão na massa guiada`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a turma junta neste passo. Peça que escolham a cor do corpo na paleta, selecionem o Balde de Tinta (Paint Bucket) na barra da esquerda (ícone de balde, atalho G) e cliquem dentro do corpo do herói. Se vazar, mostre como achar a frestinha e fechá-la com o Lápis, usando Ctrl+Z para desfazer.`,
      atividade: `Escolha a cor do corpo do seu herói, pegue o Balde de Tinta e clique dentro do corpo dele. Depois faça o mesmo na roupa e no cabelo, trocando a cor antes de cada clique.`,
      gabarito: `O exercício está certo quando o corpo, a roupa e o cabelo ficam preenchidos com cores da paleta, sem a tinta vazar para fora do contorno. Se vazou, a criança deve ter desfeito com Ctrl+Z, fechado o buraco com o Lápis e pintado de novo.`,
    },
    {
      titulo: `Olhos, boca e a sombrinha embaixo`,
      tipo: `Prática no computador (detalhes)`,
      tempo: `10 minutos`,
      guiaProfessor: `Agora os detalhes finos. Peça que troquem para o Lápis (Pencil, atalho B) e pintem os olhos e a boca, um quadradinho por vez. Depois, escolham uma cor mais escura que a do corpo e façam uma linha de sombra na parte de baixo. Passe de mesa em mesa lembrando: olhos pequenos e sombra sempre mais escura.`,
      atividade: `Com o Lápis, pinte dois olhos pequenos e uma boquinha no seu herói. Depois pegue uma cor mais escura e faça uma linha de sombra embaixo do corpo dele.`,
      gabarito: `Acerta quem deixa o herói com dois olhos pequenos, uma boca e uma faixa de sombra mais escura na parte de baixo do corpo. A sombra precisa ser de uma cor mais escura que a do corpo; olhos pequenos (um ou dois quadradinhos) são o ideal.`,
    },
    {
      titulo: `Detalhe especial e salvar o herói`,
      tipo: `Desafio criativo + salvar`,
      tempo: `10 minutos`,
      guiaProfessor: `Encerramento. Desafie cada criança a acrescentar um detalhe que mostre quem é o herói (chapéu, laço, botão, símbolo na roupa). Depois ensine a salvar: menu File, depois Save (Save), mantendo o formato .aseprite. Confirme máquina por máquina que o arquivo foi salvo antes de a criança sair.`,
      atividade: `Acrescente um detalhe especial que combine com o seu herói (um chapéu, um laço, um botão ou um símbolo). Depois salve o personagem: clique em File e em Save, guardando no formato .aseprite.`,
      gabarito: `O desafio é cumprido quando o herói ganha pelo menos um detalhe novo e o arquivo é salvo no formato .aseprite. Sinal de êxito: o personagem está colorido, com olhos, sombra e um detalhe extra, em pose parada, e o arquivo guardado para as próximas aulas.`,
    },
  ],
};
