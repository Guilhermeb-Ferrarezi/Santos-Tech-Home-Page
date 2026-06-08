import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Boom! Explosão em Quadros",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Animar uma explosão completa em pixel art no Aseprite, do nascimento ao desaparecimento, trabalhando expansão, fumaça, partículas e a paleta de cores quentes esfriando, com um timing rápido que cause impacto visual no jogo.`,
  descricao: `Nesta aula o aluno encara o efeito mais difícil do mês até aqui: uma explosão. Diferente do idle calmo ou da caminhada cíclica, a explosão não se repete em loop, ela tem começo, meio e fim. Ela nasce de um ponto pequeno e quente, cresce de repente, espalha fumaça e partículas e depois some no ar. É a primeira vez que o aluno conta uma história inteira dentro de poucos quadros, e isso exige planejar a sequência antes de desenhar.

O coração técnico da aula é a ideia de "fases da explosão". O aluno aprende a dividir o efeito em quatro momentos claros: o flash inicial (um clarão branco e amarelo), a expansão (a bola de fogo crescendo, em laranja e vermelho), a fumaça (cinza e roxo escuro tomando o lugar do fogo) e o desaparecimento (tudo ficando menor, mais escuro e transparente até sumir). Cada momento ocupa um ou dois quadros, e a ordem dá a sensação de energia liberada de uma vez.

A cor conta a temperatura. No começo a explosão é quase branca de tão quente; depois vira amarela, laranja e vermelha; no fim esfria para cinza e roxo. Esse caminho do quente para o frio é o que faz o olho acreditar que algo realmente queimou e apagou. O aluno vai montar uma pequena paleta de fogo e usá-la em ordem ao longo dos quadros. As partículas, pequenos pontos que voam para fora, dão o toque de violência e tornam cada explosão única.

O timing também muda de figura. Uma explosão precisa ser rápida para ter impacto: os primeiros quadros ficam pouquíssimo tempo na tela e o desaparecimento pode ser um pouco mais lento. O aluno descobre que controlar a duração de cada quadro (o frame duration, em milissegundos) é tão importante quanto desenhar bem. Ao final, cada aluno terá um sprite de explosão pronto para entrar no jogo quando um inimigo for derrotado ou um bloco for destruído.`,
  materiais: [
    `Computadores com o Aseprite instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor mostrar os passos na tela grande`,
    `Arquivo de exemplo "explosao-modelo.aseprite" com a animação pronta em quatro fases para inspiração`,
    `Paleta de cores quentes salva (fogo: branco, amarelo, laranja, vermelho) e tons frios de fumaça (cinza, roxo) em arquivo "paleta-fogo.gpl"`,
    `Folha impressa de apoio com o esquema das quatro fases da explosão e a ordem das cores`,
    `Tela nova sugerida de 32 por 32 pixels para padronizar o tamanho do efeito`,
    `Fones de ouvido (opcional) para quem quiser testar com um som de explosão de exemplo`,
  ],
  conceitosChave: [
    `Explosão em quadros — efeito que não faz loop; tem começo, meio e fim, contando a história do fogo nascendo e sumindo.`,
    `Fases da explosão — os quatro momentos do efeito: flash, expansão, fumaça e desaparecimento.`,
    `Partícula — ponto pequeno que voa para fora do centro, dando a sensação de pedaços lançados pela explosão.`,
    `Paleta quente — conjunto de cores de fogo (branco, amarelo, laranja, vermelho) usadas em ordem para mostrar calor.`,
    `Esfriar a cor — trocar tons quentes por frios (cinza, roxo) nos últimos quadros para indicar que o fogo apagou.`,
    `Frame duration — a duração de cada quadro em milissegundos; quadros curtos no início deixam a explosão rápida e com impacto.`,
    `Onion Skin (papel cebola) — recurso que mostra o quadro anterior por baixo, ajudando a desenhar a expansão a partir do centro.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista de games. O Aseprite é o programa de pixel art e animação que a turma já usa há três aulas. No alto fica a barra de menus (File, Edit, Sprite, Frame, View). À esquerda fica a barra de ferramentas, com o lápis (atalho B), a borracha (E), o balde de tinta (G) e o conta-gotas (Alt). Embaixo fica a Timeline, a linha do tempo com os quadros (frames) e camadas (layers); se não aparecer, ligue em View, Timeline. À direita fica a paleta de cores. Antes da aula, abra o arquivo "explosao-modelo.aseprite" e aperte Enter ou a barra de espaço para ver a animação rodar. Treine três coisas: criar um quadro novo com Alt+N ou clicando no botão de mais na Timeline; mudar o tempo de um quadro com clique duplo nele e digitando os milissegundos; e ligar o Onion Skin no ícone das duas folhas no canto da Timeline. Lembre que explosão NÃO é loop: o efeito termina e some.

## Passo a passo da aula

Aquecimento e revisão (10 min): peça que abram um arquivo novo (File, New) de 32 por 32 pixels. Relembre a caminhada da aula passada e pergunte: "O que é diferente numa explosão?" Conduza até a resposta: ela não repete, ela acaba. Mostre o "explosao-modelo.aseprite" no projetor rodando uma vez.

Conteúdo novo guiado (15 min): no projetor, desenhe as quatro fases, um quadro de cada vez. Quadro 1, o flash: com o lápis (B) na cor branca, faça um círculo pequeno no centro e contorne de amarelo. Crie o quadro 2 com Alt+N e ligue o Onion Skin para enxergar o anterior por baixo; desenhe a bola de fogo maior em laranja com miolo amarelo. Quadro 3, expansão máxima: ainda maior, com bordas vermelhas e os primeiros pontos de partícula voando para fora (use o lápis de 1 pixel). Quadro 4, fumaça: troque o centro por cinza e roxo, deixe buracos no meio. Quadro 5, desaparecimento: menor, mais escuro, alguns pixels apagados com a borracha (E). Por fim, dê clique duplo em cada quadro e ajuste o tempo: 60 a 80 ms nos primeiros, 120 ms no último. Aperte a barra de espaço para ver o boom.

Mão na massa (25 min): roteiro na lousa: 1) tela 32 por 32; 2) carregar a paleta de fogo; 3) desenhar as cinco fases, uma por quadro, usando Alt+N e Onion Skin; 4) seguir a ordem das cores do branco ao roxo; 5) ajustar o tempo dos quadros; 6) salvar com Ctrl+S. Circule conferindo se cada um está usando quadros separados e não desenhando tudo em cima do mesmo.

Desafio e compartilhar (10 min): proponha adicionar mais três partículas voando em direções diferentes e deixar o primeiro quadro ainda mais curto. Dois ou três alunos rodam a explosão no projetor e a turma diz se sentiu o impacto.

## Como explicar de forma clara

Use a imagem de uma pipoca estourando: primeiro um estalo branco, depois infla, solta casquinhas para os lados e por fim vira só fumacinha. Diga que a cor é um termômetro: "quanto mais branco, mais quente; quando fica cinza, já apagou". Explique partícula como "faísca que pula da fogueira". Para o timing, bata palmas rápido três vezes e devagar uma: "boom-boom-boom... fumaça". Reforce que explosão é como espirro, acontece e acaba, não fica repetindo.

## Erros comuns e como ajudar

O erro mais comum é desenhar tudo no mesmo quadro, em cima do anterior; mostre de novo o Alt+N e a Timeline embaixo, apontando que cada quadro é um desenho separado. Muitos esquecem o Onion Skin e a explosão "pula" sem crescer do centro; peça para ligar o ícone das duas folhas. Outro erro é usar só uma cor e o fogo não esquenta nem esfria; aponte a paleta e a ordem branco, amarelo, laranja, vermelho, cinza, roxo. Tem quem deixe todos os quadros com o mesmo tempo e a explosão fica lenta; mostre o clique duplo no quadro para baixar para 60 ou 80 ms. Por fim, alguns fazem a explosão crescer e ficar parada no final, em vez de sumir; lembre de apagar pixels com a borracha no último quadro. E sempre o Ctrl+S, quem não salva perde o boom.`,
  exercicios: [
    {
      titulo: `Montando a paleta de fogo`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno tem a tela de 32 por 32 e a paleta quente à direita. Confira a ordem das cores do branco ao roxo. Ajude quem não encontra o botão de carregar paleta.`,
      atividade: `Crie um arquivo novo de 32 por 32 pixels. Na paleta à direita, deixe à mão estas cores em ordem: branco, amarelo, laranja, vermelho, cinza e roxo escuro. Pinte um quadradinho de teste com cada uma para confirmar que todas funcionam.`,
      gabarito: `O aluno tem uma tela de 32 por 32 pixels aberta e seis cores prontas na paleta, na ordem branco, amarelo, laranja, vermelho, cinza e roxo escuro. As cores quentes ficam antes das frias, mostrando que ele entendeu o caminho do calor para o frio.`,
    },
    {
      titulo: `O flash e a expansão`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Confirme que cada um está usando quadros separados com Alt+N e que ligou o Onion Skin. Reforce começar pequeno e branco no centro e crescer a cada quadro.`,
      atividade: `No quadro 1, desenhe com o lápis um clarão pequeno branco com borda amarela no centro. Crie o quadro 2 com Alt+N, ligue o Onion Skin e desenhe a bola de fogo maior em laranja com miolo amarelo. Crie o quadro 3 ainda maior, com bordas vermelhas.`,
      gabarito: `Existem três quadros separados na Timeline. O quadro 1 é pequeno, branco e amarelo no centro; o quadro 2 é maior, laranja com miolo amarelo; o quadro 3 é o maior, com bordas vermelhas. A bola cresce a partir do centro, o que mostra uso correto do Onion Skin.`,
    },
    {
      titulo: `Fumaça, partículas e o sumiço`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Cheque se o aluno trocou o fogo por cinza e roxo nos últimos quadros e se há partículas voando para fora. No último quadro, confira se ele apagou pixels com a borracha para a explosão sumir.`,
      atividade: `Crie o quadro 4 com a explosão virando fumaça em cinza e roxo, com buracos no meio. Adicione pelo menos quatro partículas (pontos de 1 pixel) voando para fora. Crie o quadro 5 menor, mais escuro e com vários pixels apagados, para a explosão quase sumir.`,
      gabarito: `O quadro 4 mostra a explosão esfriando para cinza e roxo, com partículas voando para fora em quatro ou mais pontos. O quadro 5 é menor, mais escuro e com pixels apagados, indicando o desaparecimento. Fica claro o caminho do quente ao frio e do grande ao pequeno até o efeito acabar.`,
    },
    {
      titulo: `Ajustando o timing em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno ajusta o tempo dos quadros do colega com clique duplo no quadro e roda a animação com a barra de espaço. Peça que comparem antes e depois e digam se ficou mais impactante.`,
      atividade: `Troque de computador com um colega. Na explosão dele, dê clique duplo em cada quadro e ajuste o tempo: 60 a 80 ms nos três primeiros e 120 ms no último. Aperte a barra de espaço e veja a explosão rodar. Diga ao colega se ficou mais rápida e com mais impacto.`,
      gabarito: `A explosão do colega passa a ter os primeiros quadros curtos (60 a 80 ms) e o último mais longo (cerca de 120 ms). Ao rodar com a barra de espaço, o efeito fica visivelmente mais rápido no começo e com sensação de impacto. Cada aluno consegue explicar que quadros curtos no início criam o boom.`,
    },
    {
      titulo: `Minha explosão apresentada`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Reserve os últimos minutos. Peça que salvem com Ctrl+S e apresentem a explosão rodando no projetor em até um minuto, explicando as quatro fases e as escolhas de cor e timing. Valorize o impacto e a clareza das fases, não só a beleza.`,
      atividade: `Salve seu arquivo com Ctrl+S. Em até um minuto, apresente sua explosão para a turma: rode a animação, mostre onde está o flash, a expansão, a fumaça e o sumiço, e explique uma escolha de cor ou de tempo que você fez para causar impacto.`,
      gabarito: `O aluno apresenta uma explosão salva e completa, com as quatro fases visíveis: flash, expansão, fumaça e desaparecimento. Ele aponta o caminho das cores do quente ao frio e explica ao menos uma escolha de timing, como "deixei o primeiro quadro bem curto para o boom". O sprite está pronto para entrar no jogo no Construct 3, encerrando como um efeito que nasce e some.`,
    },
  ],
};
