import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Boas práticas do pixel artista",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Aprender os bons hábitos do artista de games no Aseprite: usar camadas, grade e zoom, escolher poucas cores e salvar o trabalho com um nome organizado.`,
  descricao: `Nesta aula as crianças descobrem que um bom artista de jogos não desenha de qualquer jeito: ele segue alguns hábitos que deixam o trabalho limpo, fácil de mexer e fácil de achar depois. Em vez de aprender um novo tipo de desenho, hoje aprendemos a trabalhar com capricho e organização, do mesmo jeitinho que os artistas profissionais que fazem os jogos de verdade.

O coração da aula são as camadas (layers). Explicamos que uma camada é como uma folha de plástico transparente empilhada sobre a outra: a criança pode desenhar o fundo em uma folha e o personagem em outra, e mexer em uma sem estragar a outra. Junto com as camadas, reforçamos o uso da grade (grid) e do zoom, que ajudam a enxergar cada quadradinho (pixel) e a colocar a cor no lugar certo, sem tremedeira.

Também trabalhamos a ideia de usar poucas cores. Um bom pixel artista não usa cem cores: ele escolhe uma paleta pequena e capricha. Menos cores deixa o desenho mais bonito, mais combinado e mais rápido de fazer. As crianças vão sentir que limitar as cores é como um superpoder, não um castigo.

Por fim, ensinamos a salvar com nome organizado. O arquivo de trabalho do Aseprite (formato .aseprite) guarda as camadas, e damos a ele um nome claro, como "heroi_v1". Assim ninguém perde o desenho nem salva por cima do trabalho do colega. No mão na massa, cada criança monta um mini desenho limpo aplicando todos esses hábitos juntos, já pensando como um artista de games.`,
  materiais: [
    `Computadores com o Aseprite já aberto, um por aluno`,
    `Projetor ou TV ligada no computador do professor para demonstrar`,
    `Um arquivo de exemplo pronto com 2 camadas separadas (fundo e personagem) para mostrar`,
    `Um exemplo de desenho com poucas cores e outro com cores demais, lado a lado`,
    `Folha impressa de grade quadriculada grande, para o aquecimento sem computador`,
    `Cartões com os nomes dos hábitos: "camadas", "grade", "zoom", "poucas cores", "salvar"`,
    `Pasta no computador já criada com o nome da turma para salvar os arquivos`,
  ],
  conceitosChave: [
    `Camada (layer) — uma folha transparente que empilha em cima da outra; você desenha em uma sem estragar a outra.`,
    `Grade (grid) — as linhas que mostram cada quadradinho da tela, para você acertar onde a cor vai.`,
    `Zoom — a lupa que aproxima o desenho para você ver cada pixel bem de pertinho.`,
    `Paleta — a caixinha de cores que você escolheu para usar no seu desenho.`,
    `Poucas cores — usar uma quantidade pequena de cores combinadas, do jeito que os artistas de games fazem.`,
    `Salvar — guardar o seu trabalho no computador para não perder e poder continuar depois.`,
    `Nome organizado — dar ao arquivo um nome claro, como "heroi_v1", para achar fácil e não confundir.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não vai ensinar um desenho novo, e sim hábitos de organização. Antes da aula, abra o Aseprite e localize quatro coisas: o painel de camadas (Layers), no canto inferior direito da tela (a faixa com a miniatura e o nome "Layer 1"); o menu View, no topo, onde ficam "Show > Grid" e "Show > Pixel Grid"; a ferramenta de zoom (ícone de lupa na barra de ferramentas à esquerda, ou a tecla de atalho com o sinal de mais e de menos); e o caminho File > Save As. Deixe pronto um arquivo de exemplo com duas camadas separadas. Não precisa ser perfeito: o importante é mostrar que mexer em uma camada não estraga a outra.

## Passo a passo da aula

10 min — Aquecimento/revisão. Receba a turma e relembre a Aula 1. Mostre a folha quadriculada impressa e pergunte: "o que é um pixel?". Espalhe os cartões dos hábitos no chão ou no quadro e diga que hoje vamos virar artistas organizados de verdade.

15 min — Conteúdo novo guiado (no projetor). Abra o arquivo de exemplo. No painel Layers, clique no botão de "novo layer" (o ícone de folha com o sinal de mais, na base do painel) e mostre que apareceu "Layer 2". Clique no olhinho ao lado de cada camada para ligar e desligar e dizer: "olha, sumiu só o personagem, o fundo ficou!". Em seguida, vá em View > Show > Grid para ligar a grade, e use a lupa para dar zoom e mostrar os quadradinhos. Por último, abra a paleta no canto e diga que hoje só vamos usar poucas cores.

25 min — Mão na massa. Cada criança cria um arquivo novo (File > New, tamanho 32 por 32 pixels) e segue você em ritmo lento. Primeiro, ligam a grade em View > Show > Grid. Depois criam duas camadas: na de baixo desenham um fundo simples (um chão ou um céu), e na de cima desenham um item pequeno (uma estrela, uma fruta). Reforce que cada coisa fica na sua camada. Peça que usem no máximo quatro ou cinco cores da paleta. Circule pela sala ajudando a clicar na camada certa antes de pintar.

10 min — Desafio e compartilhar. Desafie quem terminou a desligar o olhinho de uma camada e mostrar para o colega do lado "o truque da camada invisível". Então todos salvam: File > Save As, digitam um nome organizado (por exemplo, "treino_v1") e salvam na pasta da turma. Termine com cada criança mostrando seu mini desenho limpo na tela.

## Como explicar para crianças

Para camadas, use a analogia das folhas de plástico transparente empilhadas: "desenha o céu numa folha e o passarinho noutra; se errar o passarinho, o céu continua intacto". Para a grade, diga que são as "linhas do caderno quadriculado" que ajudam a não sair da linha. Para o zoom, fale que é uma "lupa de detetive" para ver cada quadradinho bem de perto. Para poucas cores, conte que "artista esperto escolhe um time pequeno de cores que combinam, igual um time de futebol". Para salvar com nome organizado, compare com etiquetar a mochila: "se todo mundo escrever só 'desenho', ninguém acha o seu depois".

## Erros comuns e como ajudar

O erro mais comum é a criança pintar na camada errada e achar que "sumiu". Ensine o reflexo de sempre olhar qual camada está selecionada (fica azul/destacada no painel) antes de pintar. Outro erro é apagar a grade sem querer ou se confundir achando que as linhas fazem parte do desenho: explique que a grade é só uma ajuda na tela e não aparece no jogo. Muitas crianças querem usar cores demais; mostre lado a lado o exemplo com poucas cores e o exagerado para elas sentirem a diferença. Por fim, alguns esquecem de salvar ou salvam por cima do colega: passe de mesa em mesa conferindo o nome do arquivo antes de fechar.`,
  exercicios: [
    {
      titulo: `Caça aos botões`,
      tipo: `Reconhecimento na tela`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça oralmente com a turma toda, apontando no projetor. Peça que cada criança encontre o mesmo botão na própria tela e levante a mão quando achar.`,
      atividade: `Encontre na tela do Aseprite: o painel de camadas (Layers), o botão de criar nova camada e o olhinho que liga e desliga a camada. Aponte cada um para o professor.`,
      gabarito: `O painel Layers fica no canto inferior direito. O botão de nova camada é o ícone de folha com sinal de mais, na base do painel. O olhinho fica à esquerda do nome de cada camada e serve para mostrar ou esconder aquela camada.`,
    },
    {
      titulo: `Ligando a grade e a lupa`,
      tipo: `Prática guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o caminho do menu no projetor antes. Verifique se a grade apareceu na tela de cada criança e se elas conseguiram aproximar o desenho.`,
      atividade: `Ligue a grade indo em View, depois Show, depois Grid. Em seguida use a lupa (zoom) para aproximar e ver os quadradinhos bem de perto. Depois afaste de novo.`,
      gabarito: `A grade liga em View > Show > Grid e mostra as linhas dos quadradinhos. O zoom é feito com a ferramenta lupa ou pelas teclas de mais e menos. A grade é só uma ajuda na tela e não aparece no jogo final.`,
    },
    {
      titulo: `O time das poucas cores`,
      tipo: `Escolha e criação`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre os dois exemplos (poucas cores e cores demais) lado a lado. Ajude cada criança a escolher de três a cinco cores que combinem antes de começar a pintar.`,
      atividade: `Escolha no máximo cinco cores na paleta para o seu desenho. Pinte um item pequeno (uma estrela ou uma fruta) usando só essas cores escolhidas.`,
      gabarito: `A criança deve usar de três a cinco cores combinadas, sem extrapolar. O resultado fica mais bonito e mais combinado do que com muitas cores. Usar poucas cores é uma boa prática dos artistas de games.`,
    },
    {
      titulo: `Cada coisa na sua camada`,
      tipo: `Mão na massa`,
      tempo: `8 minutos`,
      guiaProfessor: `Confira que cada criança tem duas camadas e que clica na camada certa (destacada em azul) antes de pintar. Esse é o ponto que mais gera dúvida.`,
      atividade: `Crie duas camadas. Na camada de baixo, desenhe um fundo simples (um chão ou um céu). Na camada de cima, desenhe um item separado. Depois desligue o olhinho da camada de cima e mostre que o fundo continua inteiro.`,
      gabarito: `O fundo deve estar na camada de baixo e o item na camada de cima. Ao desligar o olhinho da camada de cima, só o item some e o fundo permanece. Isso prova que cada elemento está na sua própria camada.`,
    },
    {
      titulo: `Salvando como um profissional`,
      tipo: `Desafio final`,
      tempo: `6 minutos`,
      guiaProfessor: `Passe de mesa em mesa conferindo o nome do arquivo e a pasta da turma antes de qualquer um fechar o programa. Garanta que ninguém salve por cima do colega.`,
      atividade: `Salve seu trabalho indo em File, depois Save As. Dê um nome organizado, como "treino_v1", e salve na pasta da turma. Explique ao professor por que esse nome é melhor do que só "desenho".`,
      gabarito: `O caminho é File > Save As. Um nome organizado como "treino_v1" ajuda a achar o arquivo e a não confundir com o dos colegas. Salvar sempre na pasta da turma evita perder o trabalho ou salvar por cima do desenho de outra pessoa.`,
    },
  ],
};
