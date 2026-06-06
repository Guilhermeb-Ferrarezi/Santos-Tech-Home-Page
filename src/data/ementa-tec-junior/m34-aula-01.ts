import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Itens Mágicos do Nosso Jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança entende o que são itens colecionáveis e obstáculos num jogo, planeja no papel três itens (moeda, chave e coração) e abre o MagicaVoxel para montar o primeiro item simples bloquinho por bloquinho numa grade pequena.`,
  descricao: `Nesta aula começamos um mês inteiro dedicado a encher o nosso jogo de coisas para colecionar e desviar. Antes de modelar qualquer coisa no computador, a turma precisa entender uma ideia simples e poderosa: todo jogo legal tem itens que a gente quer pegar (como moedas e chaves) e obstáculos que a gente precisa desviar (como espinhos e pedras). Esses pedacinhos do jogo se chamam "assets", que é só um nome bonito para "as peças que formam o jogo". Neste mês vamos criar um pacote inteiro de assets em voxel, e hoje é o dia da primeira peça.

O assunto central é reconhecer e planejar itens colecionáveis. Vamos mostrar exemplos voxel famosos que as crianças já conhecem, como os blocos e itens do Minecraft e os mundos quadradinhos de jogos do Roblox, para que elas percebam que tudo ali é feito de cubinhos, exatamente como vamos fazer. A partir desses exemplos, cada criança vai escolher e desenhar no papel três itens clássicos: uma moeda (a recompensa), uma chave (que abre portas) e um coração (que dá vida). Desenhar primeiro no papel é importante porque ajuda a criança a pensar na forma antes de mexer no programa.

Depois do plano no papel, abrimos o MagicaVoxel, o nosso programa de modelagem em cubinhos deste mês. Voxel é a palavra para "cubinho 3D", o tijolinho mágico com que construímos tudo. A meta da parte prática é só uma: montar o primeiro item simples, bloquinho por bloquinho, numa grade pequena. Não precisa ficar perfeito nem colorido hoje; o objetivo é a criança sentir o prazer de empilhar cubos e ver a forma de uma moeda ou de um coração nascendo na tela.

Como os alunos têm entre 5 e 9 anos e ainda leem pouco, a aula é toda demonstrada e mão na massa. O professor mostra na tela grande pelo projetor, as crianças repetem no próprio computador, e a conversa é cheia de analogias de brincadeira, como montar com peças de encaixe ou desenhar num papel quadriculado. O clima é de descoberta: hoje plantamos a semente do pacote de assets que vamos completar ao longo do mês.`,
  materiais: [
    `Computadores (um por aluno, ou em duplas) com o MagicaVoxel já instalado e aberto na tela inicial, com um projeto novo e vazio carregado`,
    `Projetor ou TV grande ligado no computador do professor, para todos verem onde clicar`,
    `Exemplos prontos de itens voxel feitos antes pelo professor (uma moeda, uma chave e um coração em cubinhos) salvos e abertos para mostrar "onde queremos chegar"`,
    `Imagens ou vídeos curtos de jogos voxel famosos (Minecraft e jogos de Roblox) para mostrar no projetor que tudo é feito de cubos`,
    `Folhas de papel quadriculado e lápis de cor, para cada criança planejar os três itens (moeda, chave e coração)`,
    `Mouse com rodinha (scroll) para cada computador, que facilita o zoom para as crianças`,
    `Adesivos ou carimbo de "Criador de Itens" para celebrar o fim da aula`,
  ],
  conceitosChave: [
    `Asset — é cada peça que forma o jogo, como uma moeda, uma árvore ou um inimigo; pense num caixote cheio de peças de montar.`,
    `Item colecionável — uma coisinha boa que o jogador quer PEGAR no jogo, como moeda, chave ou coração, que dá pontos, vida ou abre caminhos.`,
    `Obstáculo — uma coisa que atrapalha e que o jogador precisa DESVIAR, como espinhos, pedras ou buracos.`,
    `Voxel — é o cubinho mágico em 3D, o tijolinho com que a gente constrói tudo no MagicaVoxel; voxel quer dizer "cubo de pixel".`,
    `MagicaVoxel — o programa onde a gente empilha cubinhos para criar objetos em 3D, como montar com peças de encaixe na tela.`,
    `Grade — o espaço quadriculado onde colocamos os cubinhos, igual a uma folha quadriculada, só que em 3D, que ajuda a alinhar tudo certinho.`,
    `Planejar no papel — desenhar antes de construir, para a gente já saber a forma que vai montar e não se perder no meio do caminho.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em MagicaVoxel: para esta aula basta saber adicionar e apagar cubinhos numa grade pequena. O MagicaVoxel é um programa gratuito de modelagem em voxel. Ao abrir, a tela mostra no centro uma caixa quadriculada (a grade, ou "canvas") onde os cubos ficam. À ESQUERDA fica a paleta de cores. À DIREITA ficam as ferramentas. No alto, perto da grade, há os botões de ferramenta com letras: a tecla "T" ativa o modo Attach (Adicionar/Colocar cubo), e a tecla "R" ativa o modo Erase (Apagar cubo). Para colocar um cubo, escolha uma cor na paleta da esquerda, deixe o modo Attach ligado e clique numa casinha da grade. Para apagar, ligue o modo Erase e clique no cubo. Para a câmera: segure o botão DIREITO do mouse e mova para GIRAR; use a RODINHA para dar zoom (perto e longe). Treine isso uma vez sozinho antes da aula, porque é o que você vai demonstrar o tempo todo. Dica: deixe a grade pequena (uma área de poucos quadradinhos) para a moeda caber fácil.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Receba a turma e pergunte: "Quais coisinhas vocês adoram PEGAR nos jogos?". Mostre no projetor imagens do Minecraft e de jogos de Roblox e aponte: "Viram? Tudo é feito de cubinhos, igual ao que a gente vai fazer!". Explique a diferença com gestos: item colecionável é o que a gente quer pegar (faça o gesto de agarrar); obstáculo é o que a gente desvia (faça o gesto de se esquivar). Mostre seus exemplos prontos de moeda, chave e coração.

CONTEÚDO NOVO GUIADO (15 min): Distribua o papel quadriculado. No projetor, desenhe junto com eles uma moeda bem simples (um círculo gordinho feito de quadradinhos pintados), depois uma chave e um coração. Diga que cada quadradinho do papel vai virar um cubinho no computador. Em seguida, abra o MagicaVoxel na sua máquina e nomeie devagar: "Esta caixa quadriculada do meio é a nossa GRADE", "aqui na esquerda ficam as CORES", "a tecla T coloca cubo e a tecla R apaga". Coloque alguns cubos na frente deles, formando o começo de uma moeda.

MÃO NA MASSA (25 min): Agora é a vez deles. Peça que cada criança escolha UM dos três itens do papel (a moeda é a mais fácil para começar). Conduza por comando de voz, todos juntos: "Escolham uma cor amarela na esquerda... agora cliquem na grade para colocar o primeiro cubinho... agora ao lado... montem a forma do papel". Passe de mesa em mesa ajudando o clique e lembrando que a tecla R apaga se errarem. Deixe um tempo livre para empilharem cubos.

DESAFIO E COMPARTILHAR (10 min): Lance o desafio "Gire e Mostre": cada criança gira a câmera (botão direito) para ver o item de outro ângulo e mostra para o colega do lado. Em roda rápida, pergunte: "O seu item é colecionável ou obstáculo? Por quê?". Encerre entregando o adesivo de "Criador de Itens".

## Como explicar para crianças

Evite palavras técnicas sozinhas; sempre junte com uma imagem. ASSET é "uma peça do nosso jogo, como uma peça de montar". ITEM COLECIONÁVEL é "o tesourinho que a gente corre para pegar". OBSTÁCULO é "o perigo que a gente desvia". VOXEL é "o cubinho mágico, o nosso tijolinho". A GRADE é "uma folha quadriculada, mas em 3D". Use o corpo: feche a mão para "pegar" um colecionável e se esquive para "desviar" de um obstáculo. Lembre sempre: "cada quadradinho do papel vira um cubinho na tela". Repita os comandos em coro, porque a repetição alegre ensina mais que a explicação longa.

## Erros comuns e como ajudar

O erro mais comum é a criança clicar com o modo ERRADO ligado e apagar em vez de colocar (ou o contrário). Diga a regra cantada: "T coloca, R apaga". O segundo erro é girar a câmera rápido demais com o botão direito e "perder" o item de vista; ensine o resgate: rolar a rodinha para trás (afastar) até o cubinho reaparecer. Algumas crianças tentam fazer o item gigante e complicado; lembre que hoje é só uma forma pequena e simples na grade pequena. Outras ficam tristes por errar um cubo; mostre que apagar com R é fácil e faz parte de criar. Por fim, há quem esqueça de escolher a cor antes; reforce: "primeiro escolho a cor na esquerda, depois clico na grade".`,
  exercicios: [
    {
      titulo: `Pega ou Desvia?`,
      tipo: `jogo de movimento`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza longe das telas, em pé. Mostre uma imagem ou diga o nome de uma coisa do jogo e a turma reage com o corpo. O objetivo é fixar a diferença entre item colecionável e obstáculo brincando. Comece devagar e vá acelerando. Elogie cada reação, mesmo as erradas, e corrija com bom humor.`,
      atividade: `O professor fala um item do jogo (moeda, chave, coração, espinho, pedra, buraco) e a turma reage: se for COLECIONÁVEL, todos fazem o gesto de agarrar e gritam "Pega!"; se for OBSTÁCULO, todos se esquivam para o lado e gritam "Desvia!".`,
      gabarito: `Acertou quem agarra e diz "Pega!" para moeda, chave e coração (colecionáveis) e se esquiva dizendo "Desvia!" para espinho, pedra e buraco (obstáculos). Sinal de domínio: a criança reage certo sem precisar copiar o colega.`,
    },
    {
      titulo: `Meu Plano no Papel`,
      tipo: `desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua papel quadriculado e lápis de cor. Explique que todo criador desenha antes de construir. Mostre no projetor como pintar quadradinhos inteiros (sem deixar pela metade), porque cada quadradinho pintado vira um cubinho. Não cobre capricho perfeito; valorize a forma clara. Passe perguntando qual item cada um achou mais legal.`,
      atividade: `Cada criança desenha no papel quadriculado os três itens, pintando quadradinhos inteiros: uma MOEDA (redondinha e amarela), uma CHAVE (comprida e dourada) e um CORAÇÃO (vermelho). Embaixo de cada desenho, a criança marca com uma estrelinha qual vai montar primeiro no computador.`,
      gabarito: `Acertou quando o papel mostra os três itens reconhecíveis (moeda redonda, chave comprida e coração) feitos de quadradinhos pintados inteiros, com uma estrelinha marcando o item escolhido para começar. Não existe desenho "errado"; o objetivo é ter um plano claro de quadradinhos para virar cubinhos.`,
    },
    {
      titulo: `Conhecendo a Grade`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça primeiro no projetor, bem devagar, e só depois solte a turma. O foco é só treinar colocar e apagar cubinhos, sem se preocupar com forma. Passe de mesa em mesa lembrando a regra "T coloca, R apaga" e ajudando a escolher a cor na paleta da esquerda antes de clicar na grade.`,
      atividade: `No MagicaVoxel, cada criança escolhe uma cor na paleta da ESQUERDA, garante que o modo Attach (tecla T) está ligado e coloca cinco cubinhos na grade clicando nela. Depois liga o modo Erase (tecla R) e apaga dois cubinhos. Por fim, gira a câmera com o botão direito para ver os cubos de outro ângulo.`,
      gabarito: `Acertou quando aparecem cubinhos coloridos na grade, a criança consegue apagar alguns com o modo Erase e gira a câmera para ver de outro lado, sem mensagens de erro. Sinal de domínio: ela alterna entre colocar (T) e apagar (R) sabendo qual modo está ligado.`,
    },
    {
      titulo: `Montando a Minha Moeda`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta é a construção central da aula. Conduza por comando de voz, todos no mesmo ritmo, seguindo o desenho do papel. A moeda é a forma mais fácil para começar. Lembre que hoje basta o formato simples, sem detalhes nem cores caprichadas. Ajude quem tiver dificuldade de mirar o clique e elogie cada cubinho colocado.`,
      atividade: `Seguindo o plano do papel, cada criança escolhe uma cor amarela e monta na grade uma moeda simples, bloquinho por bloquinho, formando um círculo gordinho de cubos. Se errar um cubo, usa a tecla R para apagar e tenta de novo até a forma ficar parecida com a do papel.`,
      gabarito: `Acertou quando, na grade da criança, aparece uma forma redondinha e fechada feita de cubinhos, lembrando uma moeda do desenho do papel. Não precisa estar perfeita; o domínio é a criança ter empilhado vários cubos formando intencionalmente o contorno de uma moeda e ter corrigido erros com a tecla R.`,
    },
    {
      titulo: `Gire, Mostre e Conte`,
      tipo: `desafio + compartilhar`,
      tempo: `8 minutos`,
      guiaProfessor: `Este é o fechamento. Demonstre uma vez no projetor girando o seu item devagar. Depois é a vez deles, sozinhos. Circule ajudando quem "perdeu" o item de vista, lembrando o resgate: afastar com a rodinha até o cubinho reaparecer. Na roda, dê vez para cada um falar uma frase curta; aceite respostas com gestos.`,
      atividade: `Desafio: cada criança gira a câmera (botão direito do mouse) para ver a sua moeda por cima e de lado, e dá zoom com a rodinha para chegar bem perto. Depois mostra para o colega do lado e responde em voz alta: "Minha moeda é um item COLECIONÁVEL porque o jogador quer PEGAR ela!".`,
      gabarito: `Acertou quando a criança consegue girar a câmera e ver a moeda de mais de um ângulo, dá zoom para perto, e diz que a moeda é um item colecionável porque serve para o jogador pegar. Sinal de domínio: ela combina girar e dar zoom sozinha e explica, com palavra ou gesto, por que a moeda é colecionável.`,
    },
  ],
};
