import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Juntando Tudo no Meu Jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança junta sprites, pontos, vidas, inimigos e sons em uma única partida completa e testa o jogo inteiro do começo ao fim com a ajuda do professor.`,
  descricao: `Nesta aula a turma vai "amarrar os fios" de tudo o que construiu durante o mês. Até agora cada peça foi feita em momentos diferentes: a arte virou sprite, o personagem aprendeu a andar, os pontos apareceram para serem coletados, as vidas e a tela de vitória ganharam vida, os inimigos passaram a atrapalhar e os sons deram emoção ao jogo. Agora a missão é colocar TODAS essas peças funcionando juntas, ao mesmo tempo, na mesma partida.

Juntar tudo é diferente de criar peça por peça. Quando muitas coisas funcionam ao mesmo tempo, às vezes uma atrapalha a outra: o som não toca, o inimigo não tira vida, o ponto some duas vezes. Isso é absolutamente normal e faz parte de fazer jogos de verdade. Por isso, o coração desta aula é TESTAR e CORRIGIR junto: a criança joga, observa o que está estranho, conta para o professor, e os dois ajeitam juntos.

Esta é a penúltima aula do projeto do mês (4 de 4 no foco "Montar o jogo com a arte própria"). O objetivo não é deixar tudo perfeito, e sim ter uma partida que começa, deixa jogar, dá pontos, perde vidas com inimigos, faz barulho e termina com vitória ou fim de jogo. Na próxima aula o jogo ficará pronto de verdade para ser jogado e mostrado.

O professor conduz como um "detetive de jogos": ajuda a criança a olhar com calma, apontar o problema com o dedo na tela e testar de novo depois de cada ajuste. A palavra-chave da aula é "testar de novo".`,
  materiais: [
    `Computadores com o Construct 3 já aberto e o projeto de cada criança carregado (o mesmo arquivo que vem sendo usado no mês).`,
    `Projetor ou TV ligada no computador do professor para demonstrar cada passo na tela grande.`,
    `Um projeto-exemplo do professor, já com sprites, pontos, vidas, inimigos e sons funcionando juntos, para servir de modelo.`,
    `Lista impressa de checagem (um papel grande com os desenhos: personagem, moeda, coração, inimigo, alto-falante) para marcar o que já funciona.`,
    `Adesivos ou carimbos para marcar cada item que passou no teste.`,
    `Fones de ouvido por computador (opcional), para a sala não virar uma bagunça de sons ao testar tudo ao mesmo tempo.`,
    `Folhas em branco e lápis de cor para o exercício de desenho do "mapa do meu jogo".`,
  ],
  conceitosChave: [
    `Juntar tudo — colocar todas as partes do jogo (boneco, pontos, vidas, inimigos e som) brincando juntas na mesma tela.`,
    `Testar — jogar o próprio jogo para ver se cada coisa faz o que a gente quer.`,
    `Bug — um errinho no jogo, tipo o som que não toca ou o inimigo que não machuca; é como um cisco no olho do jogo.`,
    `Corrigir — arrumar o errinho e jogar de novo para ver se melhorou.`,
    `Folha de eventos — a lista de regras do jogo no Construct 3, onde está escrito "se isto acontecer, faça aquilo".`,
    `Partida completa — quando o jogo começa, deixa jogar, dá pontos, tira vidas e termina com vitória ou fim de jogo.`,
    `Detetive de jogos — jeito de olhar o jogo com calma para descobrir onde está o errinho escondido.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Esta aula é de integração e teste, não de criar coisas novas. Tudo o que será juntado já foi feito nas aulas 1 a 6. No Construct 3, as regras do jogo ficam na "Event Sheet" (Folha de Eventos), que aparece como uma aba ao lado da aba do Layout. Cada regra tem uma "Condition" (quando) e uma "Action" (o que fazer). Os principais blocos do mês são: o personagem que anda (eventos de teclado ou de toque movendo o sprite), os pontos (On collision with moeda, Destroy moeda, Add 1 to Pontos), as vidas (Subtract 1 from Vidas ao colidir com inimigo, e quando Vidas = 0 vai para a tela de fim), a vitória (quando Pontos chega no total, vai para a tela de vitória) e os sons (Play sound nas ações de pegar moeda, perder vida e vencer).

O que costuma quebrar quando tudo roda junto: um objeto pode existir no Layout mas não ter evento ligado a ele; o som pode estar no projeto mas não ter a ação "Play"; o inimigo pode ter o evento de tirar vida apontando para a variável errada. Antes da aula, abra o seu projeto-exemplo e confirme que cada bloco está na Event Sheet e funciona. Tenha em mente: testar é apertar o botão de Play (o triângulo no canto superior direito, "Preview") e jogar de verdade.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Reúna a turma de frente para o projetor. Aperte Preview no seu projeto-exemplo e mostre rapidinho cada peça funcionando: o boneco andando, pegar uma moeda e o número subir, encostar no inimigo e perder uma vida, e o som tocando. Diga: "Hoje a gente junta TUDO no jogo de cada um." Mostre a lista de checagem impressa.

15 min - Conteúdo novo guiado: No seu computador, abra a aba "Event Sheet" e percorra a lista junto com a turma, item por item: personagem anda? pontos sobem? vida cai com inimigo? tem tela de vitória? toca som? A cada item, aperte Preview e teste ao vivo. Ensine o gesto principal: testar, olhar, apontar o problema com o dedo, ajustar, testar de novo. Mostre onde fica o botão Preview (triângulo, canto superior direito).

25 min - Mão na massa: Cada criança abre o próprio projeto. Com a lista de checagem ao lado, elas apertam Preview e jogam a própria partida do começo ao fim. A cada peça que funciona, marcam com adesivo no papel. Quando algo não funciona, chamam o professor: vocês abrem a Event Sheet juntos, acham o bloco e ajustam (por exemplo, arrastar a ação "Play sound" para o evento certo, ou conferir se o evento do inimigo subtrai de "Vidas"). Circule e priorize quem tem partida que nem inicia.

10 min - Desafio e compartilhar: Peça que cada criança jogue uma partida inteira e tente vencer (ou perder todas as vidas) de propósito, para ver as duas telas finais. Quem quiser mostra a tela para a turma e conta qual errinho consertou hoje.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de quebra-cabeça: "Cada coisa que a gente fez é uma peça. Hoje a gente encaixa todas e vê o desenho completo aparecer." Para teste, use "detetive": "Vamos virar detetives do nosso jogo e caçar os errinhos escondidos." Chame bug de "cisco no jogo": "Tem um ciscozinho aqui, vamos tirar." Sempre repita o lema: "Achou estranho? Testa de novo!" Evite palavras técnicas; aponte na tela e deixe a criança apertar o botão de Play sozinha, porque o aprendizado vem do dedo na ferramenta.

## Erros comuns e como ajudar

As crianças costumam achar que "consertar" é apagar tudo e começar de novo - explique que a gente só ajeita o pedacinho errado. Outro erro é mexer no Layout achando que está mexendo na regra; lembre que as regras moram na aba Event Sheet. Muitos esquecem de apertar Preview depois de mudar algo, então peça sempre "testa de novo" após cada ajuste. Há quem fique frustrado quando aparece um bug; acolha dizendo que jogo de verdade também tem bugs e que achar o erro é a parte divertida. Por fim, evite que uma criança fique travada sozinha por muito tempo: combine o sinal de "mãozinha levantada" para chamar você.`,
  exercicios: [
    {
      titulo: `Detetive do Jogo do Professor`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma na frente do projetor com o seu projeto-exemplo aberto. Avise que você deixou alguns errinhos de propósito (por exemplo, a moeda não toca som ao ser pega) e que eles serão os detetives.`,
      atividade: `Aperte Preview e jogue na frente da turma. A cada coisa que acontecer, pergunte: "Isso está certo ou tem um ciscozinho?" Deixe as crianças apontarem com o dedo o que está estranho na tela.`,
      gabarito: `A turma deve identificar pelo menos um problema, por exemplo: "o som não tocou quando pegou a moeda" ou "o inimigo encostou e não tirou vida". Acertou quem aponta o item da lista que não funcionou; o professor confirma mostrando o evento que faltava na Event Sheet.`,
    },
    {
      titulo: `Minha Lista de Checagem`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a lista de checagem impressa (boneco, moeda, coração, inimigo, alto-falante). Mostre onde fica o botão Preview no canto superior direito e peça que cada um jogue a própria partida olhando um item por vez.`,
      atividade: `No seu projeto, aperte Preview e teste cada item da lista. Coloque um adesivo ao lado do desenho de cada coisa que funcionar: o boneco andou? a moeda deu ponto? o inimigo tirou vida? tocou som? Marque só o que realmente funcionou.`,
      gabarito: `A lista de cada criança fica com adesivos nos itens que funcionam e sem adesivo nos que faltam. Acertou quem testou todos os cinco itens e marcou de forma honesta; os itens sem adesivo viram a lista de conserto do próximo exercício.`,
    },
    {
      titulo: `Caça ao Cisco`,
      tipo: `prática na ferramenta`,
      tempo: `15 minutos`,
      guiaProfessor: `Pegue com cada criança o primeiro item que ficou SEM adesivo. Abra a aba Event Sheet junto com ela e ajudem a achar o bloco daquele item. Faça o ajuste guiando o dedo dela (arrastar a ação certa, conferir a variável Vidas ou Pontos) e aperte Preview para testar.`,
      atividade: `Escolha um errinho da sua lista. Com o professor, abra a Folha de Eventos, ache a regra daquela peça e ajeite. Depois aperte Preview e jogue de novo para ver se o cisco sumiu.`,
      gabarito: `O item antes quebrado passa a funcionar no Preview (o som toca, ou a vida cai, ou o ponto sobe corretamente). Acertou quando, ao testar de novo, aquela peça faz o que devia e a criança consegue colocar o adesivo que faltava.`,
    },
    {
      titulo: `Mapa do Meu Jogo`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua folhas em branco e lápis de cor. Peça que cada criança desenhe a própria partida do começo ao fim, mostrando que as peças estão juntas. Isso ajuda a perceber se falta alguma parte.`,
      atividade: `Desenhe numa folha o seu jogo inteiro: o boneco, as moedas para pegar, o inimigo que atrapalha, o coração das vidas e um desenho de som (alto-falante). Faça uma seta mostrando o começo e outra mostrando o fim (vitória ou fim de jogo).`,
      gabarito: `O desenho deve conter as cinco peças (boneco, moeda/pontos, inimigo, vidas/coração, som) e indicar começo e fim. Acertou quem representa todas as partes juntas; se faltar alguma no desenho, é uma pista de que essa parte ainda precisa entrar no jogo.`,
    },
    {
      titulo: `Partida Completa do Começo ao Fim`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Proponha o desafio final da aula: jogar uma partida inteira sem parar. Peça que cada criança tente vencer pegando todos os pontos e, depois, tente perder de propósito encostando nos inimigos, para ver as duas telas finais.`,
      atividade: `Aperte Preview e jogue do início ao fim. Primeiro tente GANHAR pegando todos os pontos até aparecer a tela de vitória. Depois jogue de novo e deixe os inimigos tirarem todas as vidas para ver a tela de fim de jogo.`,
      gabarito: `A partida roda inteira: começa, deixa jogar, dá pontos, tira vidas com inimigo, toca som e termina mostrando a tela de vitória OU a de fim de jogo. Acertou quem consegue ver as duas telas finais em partidas diferentes, provando que todas as peças estão juntas e funcionando.`,
    },
  ],
};
