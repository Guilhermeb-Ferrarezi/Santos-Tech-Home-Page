import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Caça aos Bugs: o Jogo sob a Lupa",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança consegue jogar o próprio jogo Voxel Art do início ao fim como um testador de verdade, anotando numa lista todos os bugs que encontrar.`,
  descricao: `Chegamos ao último mês do Ano 3! O jogo Voxel Art que cada criança construiu no Roblox Studio está quase pronto para o mundo ver. Mas antes de apertar o botão de publicar, todo criador profissional faz uma coisa muito importante: testa o jogo de cabo a rabo procurando defeitos. Esses defeitos têm um nome especial: bugs. Nesta aula, as crianças vestem a roupa de "detetive de jogos" e olham a própria criação sob a lupa, caçando tudo que não funciona direito.

Um bug é qualquer coisa que sai errado no jogo: um bloco que some do nada, o personagem que cai pra fora do mapa e fica caindo no vazio, um botão que a gente aperta e nada acontece, uma plataforma flutuando onde não devia. A grande lição de hoje é a diferença entre testar e só brincar. Quando a gente brinca, joga do jeito divertido e desvia dos problemas sem perceber. Quando a gente testa, faz de propósito tudo o que um jogador desavisado faria: pula nos cantos, anda pra trás, encosta em tudo, aperta todos os botões. O testador procura o erro de propósito.

A ferramenta principal de hoje é o botão "Play" do Roblox Studio, que liga o jogo de mentirinha dentro do próprio programa, para a criança jogar e ver o que acontece. Ao lado, cada criança terá uma "Lista de Caça aos Bugs" no papel, onde anota com palavras simples ou desenhos cada problema que encontrar. Essa lista será o mapa do tesouro para os consertos da próxima aula.

O resultado da aula é concreto e visível: cada criança termina com a sua lista de bugs preenchida, orgulhosa de ter encontrado problemas no próprio jogo. Aqui vale reforçar uma ideia carinhosa: achar bug não é fracasso, é vitória! Quem acha mais bugs hoje, terá um jogo melhor amanhã. É assim que os profissionais trabalham.`,
  materiais: [
    `Computadores (1 por criança) com o Roblox Studio já aberto e o projeto do jogo Voxel Art de cada aluno carregado, pronto para apertar "Play".`,
    `Projetor ou TV grande conectada ao computador do professor, para demonstrar o botão "Play" e mostrar exemplos de bugs ao vivo.`,
    `Um jogo de exemplo, preparado pelo professor, com três bugs colocados de propósito: um bloco que some, um buraco no chão por onde o personagem cai pra fora do mapa e um botão que não faz nada ao ser apertado.`,
    `"Lista de Caça aos Bugs" impressa (1 por criança): uma folha com espaços numerados para escrever ou desenhar cada problema encontrado.`,
    `Lápis, lápis de cor e borracha para preencher a lista (algumas crianças vão desenhar o bug em vez de escrever).`,
    `Lupas de brinquedo (ou recortadas em papel) para entrar no clima de "detetive de jogos", uma por criança.`,
    `Adesivos ou carimbos de "Caçador de Bugs" para premiar quem preencher a lista até o fim.`,
  ],
  conceitosChave: [
    `Bug — é um errinho escondido no jogo, como um bloco que some ou um botão que não funciona. A palavra "bug" quer dizer "inseto" em inglês, então a gente fala que está caçando os bichinhos do jogo.`,
    `Testar — jogar o jogo de propósito procurando defeitos, mexendo em tudo para ver o que dá errado, diferente de só brincar para se divertir.`,
    `Play (botão de jogar) — o botão verde do Roblox Studio que liga o jogo de mentirinha para a gente entrar e jogar de verdade, sem publicar ainda.`,
    `Stop (botão de parar) — o botão vermelho que desliga o teste e volta para o modo de construção, como apertar pausa e sair do jogo.`,
    `Lista de bugs — o papel do detetive, onde a gente anota com palavras ou desenhos cada problema que encontra para consertar depois.`,
    `Cair pra fora do mapa — quando o personagem escorrega por um buraco ou borda e fica caindo no vazio sem fim, sem chão nenhum embaixo dos pés.`,
    `Testador — a pessoa que joga o jogo para encontrar bugs antes dos outros jogadores. Hoje cada criança é o testador do próprio jogo!`,
  ],
  treinamento: `## O que o professor precisa saber

Testar um jogo é a etapa em que a gente procura defeitos antes do público jogar. No Roblox Studio, o teste acontece dentro do próprio programa, sem precisar publicar nada. O coração disso é o botão "Play", um triângulo verde que fica no topo da tela, na aba "Home" (ou na aba "Test"), dentro do grupo chamado "Playtest". Quando o professor aperta "Play", o Studio entra no modo de jogo: aparece um personagem (o avatar) e dá para andar com as teclas W, A, S, D, pular com a barra de espaço e olhar em volta com o mouse. Ao lado do "Play" existe uma setinha que abre opções como "Play Here" (começar no ponto onde a câmera está). Para sair do teste, basta apertar o botão "Stop", um quadrado vermelho no mesmo lugar.

Um bug é qualquer comportamento errado: blocos que somem ou piscam, o personagem que atravessa o chão ou cai por uma borda e fica no vazio, botões e plataformas que não respondem, partes do cenário flutuando. A missão de hoje NÃO é consertar (isso é a Aula 2) — é só encontrar e anotar. O professor precisa estar confortável em apertar "Play", andar pelo mapa e apertar "Stop". Recomenda-se preparar antes um jogo de exemplo com três bugs plantados de propósito para a demonstração.

## Passo a passo da aula

10 min — Aquecimento/revisão: Pergunte "vocês sabem o que é um bug?". Conte que bug quer dizer inseto e que são os errinhos escondidos no jogo. No projetor, abra o jogo de exemplo e aperte "Play". Mostre ao vivo um bug acontecendo (pule no buraco e caia pra fora do mapa). As crianças vão rir e apontar — perfeito, esse é o clima.

15 min — Conteúdo novo guiado: Na sua tela, ensine onde fica o botão "Play" (triângulo verde, aba "Home", grupo "Playtest") e o "Stop" (quadrado vermelho). Aperte "Play" e mostre como andar (W, A, S, D), pular (espaço) e olhar (mouse). Encontre os três bugs do exemplo de propósito e, a cada um, pare e diga "achei um bug!" e escreva na Lista de Bugs grande no quadro. Explique a diferença entre testar (procurar erro de propósito) e só brincar.

25 min — Mão na massa: Cada criança aperta "Play" no próprio jogo e joga do início ao fim como testador. Entregue a Lista de Caça aos Bugs e a lupa. Peça que tentem fazer "coisas erradas de propósito": andar pra trás, pular nos cantos, encostar em tudo, apertar todos os botões. A cada bug encontrado, anotam ou desenham na lista. Circule pela sala incentivando: "o que será que acontece se você pular ali?".

10 min — Desafio + compartilhar: Lance o desafio "quem encontra mais um bug?". Depois, cada criança mostra a lista e conta um bug que achou. Comemore cada descoberta e entregue o adesivo "Caçador de Bugs". Reforce: achar bug é vitória!

## Como explicar para crianças

Use a lupa de brinquedo: "Hoje vocês são detetives de jogos! Com a lupa, a gente procura os bichinhos escondidos, os bugs, que se escondem no nosso jogo." Para a diferença entre testar e brincar, diga: "Quando a gente brinca, desvia dos perigos. Quando a gente testa, vai LÁ no perigo de propósito pra ver se o jogo aguenta." Para o "cair pra fora do mapa": "Olha, o personagem escorregou pela beirada e está caindo, caindo, caindo no vazio! Isso é um bug." E sempre celebre: "Achou um bug? Parabéns, você é um ótimo caçador!".

## Erros comuns e como ajudar

O erro mais comum é a criança só brincar e se divertir sem procurar problemas — relembre a missão de detetive e proponha "tente fazer o personagem cair". Outro: esquecer de apertar "Stop" e tentar construir durante o teste; mostre o quadrado vermelho. Algumas confundem "achei um bug" com "estou ruim no jogo" — reforce que o erro é do jogo, não dela, e que encontrar é ótimo. Há quem queira consertar na hora; explique com carinho que hoje só anotamos, o conserto é na próxima aula. Por fim, quem ainda não escreve bem pode desenhar o bug — vale igual.`,
  exercicios: [
    {
      titulo: `Aperta o Play! (entrar no modo de teste)`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre na sua tela onde fica o botão "Play" (triângulo verde, aba "Home", grupo "Playtest") e o "Stop" (quadrado vermelho). Aperte "Play" e ande um pouco com W, A, S, D, pule com espaço. Peça que cada criança faça o mesmo no próprio jogo, devagar, e depois aperte "Stop" para voltar a construir.`,
      atividade: `Ache o botão verde "Play" lá em cima e aperte. Seu jogo vai ligar! Ande para frente, para os lados e pule com a barra de espaço. Quando quiser sair, aperte o botão vermelho "Stop".`,
      gabarito: `A criança acertou quando consegue entrar no modo de jogo apertando "Play" (o personagem aparece e ela anda), e consegue sair apertando "Stop". O professor confere se ela achou os dois botões certos e voltou ao modo de construção sem ajuda.`,
    },
    {
      titulo: `Detetive Procura o Bug do Professor`,
      tipo: `jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Use o jogo de exemplo com os três bugs plantados de propósito, no projetor. Entregue as lupas de brinquedo. Conduza a turma como um time de detetives: aperte "Play" e deixe que as crianças apontem onde acham que está o bug. A cada acerto, comemore e anote na Lista grande do quadro.`,
      atividade: `Vamos juntos! Olhem o jogo do professor com a lupa de detetive. Tem três bugs escondidos: um bloco que some, um buraco onde o personagem cai pra fora do mapa e um botão que não funciona. Apontem para a tela quando acharem um!`,
      gabarito: `A turma acertou quando identifica pelo menos dois dos três bugs plantados: (1) o bloco que some, (2) o buraco que faz cair pra fora do mapa e (3) o botão que não responde. Vale a criança apontar e dizer "ali tem um erro!", mesmo sem o nome técnico.`,
    },
    {
      titulo: `Testar ou Brincar? (roda de conversa)`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em roda. Faça a pergunta-chave: "qual é a diferença entre testar e brincar?". Conduza com exemplos: brincar é desviar do perigo para se divertir; testar é ir no perigo de propósito para achar bug. Peça que cada criança dê um exemplo de uma "coisa errada de propósito" que faria para testar.`,
      atividade: `Conversa de detetives! Quando a gente só brinca, a gente desvia dos perigos. Quando a gente testa, a gente vai no perigo de propósito! Diga uma coisa "errada de propósito" que você faria para testar seu jogo (por exemplo: pular no buraco, andar pra trás, apertar todos os botões).`,
      gabarito: `A criança acertou quando explica, com as próprias palavras, que testar é procurar erro de propósito e brincar é só se divertir, E dá pelo menos um exemplo de ação de teste (pular num lugar perigoso, encostar em tudo, apertar todos os botões). Aceite exemplos simples e criativos.`,
    },
    {
      titulo: `Minha Lista de Caça aos Bugs`,
      tipo: `mão na massa com registro no papel`,
      tempo: `9 minutos`,
      guiaProfessor: `Entregue a Lista de Caça aos Bugs impressa e o lápis. Cada criança joga o próprio jogo apertando "Play" e, a cada problema encontrado, escreve ou desenha na lista. Circule incentivando ações de teste: "tente pular naquele canto", "anda pra trás e vê o que acontece". Lembre que hoje só anotamos, não consertamos.`,
      atividade: `Hora de caçar no SEU jogo! Aperte "Play" e jogue do começo ao fim como detetive. Faça coisas erradas de propósito: pule nos cantos, ande pra trás, encoste em tudo, aperte todos os botões. Cada bug que achar, escreva ou desenhe na sua Lista de Caça aos Bugs.`,
      gabarito: `A criança acertou quando preenche a lista com pelo menos um bug real encontrado no próprio jogo (escrito ou desenhado), tendo usado o "Play" para testar. Exemplos válidos: "bloco sumiu", "caí pra fora do mapa", "botão não funcionou". O professor confere se o que ela anotou corresponde a um problema de verdade no jogo dela.`,
    },
    {
      titulo: `Desafio do Caçador Campeão`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Lance o desafio final: encontrar mais um bug além dos que já estão na lista, fazendo o teste mais "maluco" possível (tentar de tudo para quebrar o jogo). Circule ajudando a registrar. Ao final, cada criança apresenta a lista e conta um bug que achou. Comemore cada descoberta e entregue o adesivo "Caçador de Bugs". Reforce que achar bug é vitória.`,
      atividade: `Desafio do campeão! Tente achar mais UM bug que ninguém viu, fazendo o teste mais maluco do mundo: vá nos cantos mais escondidos, pule onde parece perigoso, aperte tudo. Anote na lista. Depois, mostre sua Lista de Caça aos Bugs para a turma e conte um bug que você encontrou.`,
      gabarito: `Acertou quem entregar a lista com vários bugs anotados (pelo menos dois) e conseguir apresentar para a turma contando um deles com as próprias palavras. O professor valoriza tanto a quantidade de bugs encontrados quanto a coragem de mostrar o erro do próprio jogo; vale dar o adesivo "Caçador de Bugs" para todos que preencheram a lista e apresentaram.`,
    },
  ],
};
