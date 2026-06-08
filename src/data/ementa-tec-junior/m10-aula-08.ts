import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Mundo Está Pronto!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança finaliza o seu mundo no Roblox ligando terreno, decoração, spawn, bandeiras de checkpoint e obby num jogo completo, testa a aventura do início ao fim e apresenta a sua criação para a turma.`,
  descricao: `Esta é a última aula do mês e o grande dia de festa do projeto "Mundo no Roblox"! Durante quatro semanas, cada criança construiu o seu mundo aos pouquinhos: primeiro conheceu o Roblox Studio, depois montou o terreno, colocou peças mágicas, decorou o cenário, escolheu onde a aventura começa (o spawn), espalhou bandeiras de checkpoint e montou o seu primeiro obby. Agora chegou a hora de juntar tudo numa só aventura que funciona de verdade.

Nesta aula a criança não vai aprender uma ferramenta nova. O assunto de hoje é finalizar e mostrar. Finalizar significa olhar o mundo inteiro com carinho, conferir se cada parte está no lugar e arrumar os últimos detalhes: um spawn que joga o jogador no lugar certo, checkpoints que salvam o progresso, um obby que dá para terminar e uma decoração que deixa o mundo bonito. Testar a aventura do começo ao fim é o coração da aula, porque é assim que descobrimos o que está faltando e o que já está ótimo.

Isso importa muito porque criar um jogo não é só montar peças: é também jogar o próprio jogo, perceber o que travou e melhorar. Esse hábito de testar e ajustar é o que transforma um amontoado de blocos num jogo que dá vontade de jogar. É uma das lições mais valiosas que uma criança leva da trilha de games.

No fim da aula acontece a celebração: cada criança vira apresentadora do seu mundo. Ela mostra na tela (pelo projetor) o seu spawn, os seus checkpoints e o seu obby, conta uma coisa que tem orgulho e ouve os colegas baterem palmas. É um momento de fechamento do mês que valoriza o esforço de todos e deixa a turma animada para o próximo projeto.`,
  materiais: [
    `Um computador por criança com o Roblox Studio aberto e o projeto "Mundo no Roblox" de cada aluno já salvo (continuação das aulas anteriores).`,
    `Projetor ou TV grande ligado ao computador do professor para as apresentações da turma.`,
    `Um projeto de exemplo do professor, completo e testado, com terreno, decoração, spawn, dois ou três checkpoints e um obby curto, para usar como modelo.`,
    `Lista de presença com o nome de cada criança e um espaço para anotar a ordem das apresentações.`,
    `Fichas ou cartões de "Selo de Mundo Pronto" (um por criança) para entregar no final como certificado de conclusão do projeto.`,
    `Papel e lápis de cor na mesa para a criança que terminar antes desenhar o cartaz do seu mundo.`,
    `Mouse extra e, se possível, fones de ouvido, caso algum computador apresente problema.`,
  ],
  conceitosChave: [
    `Mundo completo — é quando todas as partes do jogo (chão, enfeites, ponto de partida e obstáculos) estão juntas e funcionando como uma aventura só.`,
    `Testar — é jogar o seu próprio jogo do começo ao fim para ver se tudo funciona e descobrir o que precisa arrumar.`,
    `Spawn — é o ponto de partida, o lugar mágico onde o seu personagem aparece quando o jogo começa.`,
    `Checkpoint — é a bandeira que salva o seu lugar; se você cair, volta para a última bandeira que tocou, e não para o começo.`,
    `Obby — é o caminho de obstáculos onde você pula de plataforma em plataforma para chegar até o final.`,
    `Ajuste final — é o último arrumadinho, o detalhe que a gente conserta para o jogo ficar redondinho.`,
    `Apresentar — é mostrar a sua criação para os colegas, contar o que você fez e ouvir os aplausos.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Hoje você não ensina nada novo: você ajuda cada criança a juntar e testar o que já construiu. Antes da aula, abra o Roblox Studio e refaça você mesmo o caminho completo num projeto de exemplo, do spawn ao fim do obby, para sentir os pontos que costumam travar.

Relembre os botões essenciais. O botão "Play" (triângulo verde no topo, na aba "Home") inicia o teste e coloca o seu personagem dentro do mundo; o botão "Stop" (quadrado vermelho) encerra o teste e volta para a edição. O ponto de partida é o "SpawnLocation" (uma plataforma já pronta na biblioteca, encontrada no botão "Model" ou em "Toolbox"). Os checkpoints, nesta trilha iniciante, são "SpawnLocation" extras espalhados pelo caminho: ao tocar num spawn mais à frente, o jogador passa a renascer ali. Salvar é fundamental: use "File" e depois "Save to File" (ou as teclas Ctrl mais S) para não perder o trabalho.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma e abra o seu mundo de exemplo no projetor. Clique em "Play" e jogue do começo ao fim na frente deles, comemorando cada checkpoint. Pergunte: "O que ainda falta no SEU mundo?". Peça para cada um abrir o seu projeto (em "File", depois "Open from File") e dar "Play" uma vez para lembrar onde parou.

Conteúdo novo guiado (15 min): com o seu exemplo, mostre a "Lista do Mundo Pronto" projetada: chão sem buracos, decoração no lugar, spawn funcionando, checkpoints tocando e obby com começo, meio e fim. Demonstre como conferir cada item: clique em "Play", caia de propósito e mostre que você volta para o último checkpoint, não para o começo. Mostre como mover uma peça torta usando a ferramenta "Move" (a seta na aba "Home") e como salvar com "Save to File".

Mão na massa (25 min): cada criança percorre a lista no seu próprio projeto. Circule mesa a mesa. Peça que dêem "Play", joguem até o fim e anotem (ou apontem) um problema. Ajude a arrumar: encostar um spawn solto no chão, fechar um buraco no obby duplicando uma plataforma (Ctrl mais C, Ctrl mais V), endireitar um enfeite com "Move". Reforce sempre: "Testou? Arrumou? Salvou?".

Desafio e compartilhar (10 min): forme a roda de apresentações. Um por vez, a criança vai ao computador do professor (ou ao seu, no projetor), dá "Play" e mostra o spawn, um checkpoint e o final do obby. A turma aplaude. Entregue o "Selo de Mundo Pronto" a cada apresentador.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de "dar um passeio dentro do seu mundo": apertar "Play" é como entrar de verdade no brinquedo que você construiu. Compare testar com provar a comida antes de servir: "a gente prova para ver se está gostoso". O spawn é a "porta de entrada mágica". O checkpoint é o "ponto de salvar do jogo, igual quando a mamãe guarda a página do livro". Ajuste final é "dar o último arrumadinho, igual arrumar a cama". Fale pouco e mostre muito: aponte na tela, faça junto, deixe a criança clicar.

## Erros comuns e como ajudar

Muitas crianças esquecem de salvar e perdem mudanças: crie o bordão "Salvou? Save to File!" e repita. Outras deixam o spawn dentro de uma parede ou no ar, e o personagem aparece preso ou cai sem parar: ajude a encostar o spawn bem no chão com a ferramenta "Move". É comum o obby ter um pulo impossível; teste junto e, se ninguém conseguir, aproxime as plataformas. Algumas crianças querem mudar tudo no fim e travam: lembre que hoje é dia de arrumar detalhes, não de recomeçar. Na apresentação, há quem fique tímido: dê uma pergunta fácil ("qual a sua parte favorita?") e comemore junto.`,
  exercicios: [
    {
      titulo: `Passeio no Meu Mundo`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que cada criança abra o seu projeto e dê "Play" (triângulo verde, aba "Home"). Explique que ela vai apenas passear pelo mundo, do spawn até onde conseguir chegar, só observando. Circule incentivando.`,
      atividade: `Aperte "Play" e ande pelo seu mundo do ponto de partida até o final do obby. Não arrume nada agora: só olhe e descubra UMA coisa que está faltando ou torta. Quando achar, levante a mão e conte para o professor.`,
      gabarito: `A criança consegue iniciar o teste com "Play", caminhar pelo mundo e apontar pelo menos um problema (por exemplo, "tem um buraco no chão", "o enfeite está torto" ou "não dá para pular aqui"). Acertou quando nomeia um item para melhorar.`,
    },
    {
      titulo: `Caça aos Itens da Lista`,
      tipo: `jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Projete a "Lista do Mundo Pronto" com cinco itens: chão sem buraco, decoração, spawn, checkpoint e fim do obby. Transforme em caça ao tesouro: a cada item conferido e funcionando, a criança marca um ponto. Vá lendo os itens em voz alta para os que ainda não leem.`,
      atividade: `Confira no seu mundo, um item de cada vez: 1) o chão não tem buraco; 2) tem decoração; 3) o spawn funciona; 4) pelo menos um checkpoint salva quando você toca; 5) dá para terminar o obby. Marque com o dedo cada item que está OK e chame o professor para conferir.`,
      gabarito: `A criança verifica os cinco itens e identifica quais estão prontos e quais ainda não. Acertou quando consegue dizer, item por item, "esse está pronto" ou "esse falta", mostrando na tela. Marcar todos os cinco como prontos é o objetivo, mas reconhecer corretamente o que falta também é acerto.`,
    },
    {
      titulo: `Conserta-Conserta`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora a criança arruma o que encontrou. Demonstre antes os três consertos mais comuns: encostar o spawn no chão com "Move" (a seta), fechar um buraco duplicando uma plataforma (Ctrl mais C e Ctrl mais V) e endireitar um enfeite. Reforce o bordão "Testou? Arrumou? Salvou?".`,
      atividade: `Escolha UM problema que você achou e conserte. Use a ferramenta "Move" para endireitar ou encostar a peça no chão. Depois aperte "Play" de novo para testar se ficou bom. No final, salve com "Save to File".`,
      gabarito: `A criança corrige pelo menos um problema, testa novamente com "Play" e confirma que melhorou, e salva o projeto. Acertou quando o problema escolhido não acontece mais no teste e o mundo foi salvo.`,
    },
    {
      titulo: `Mapa do Meu Mundo no Papel`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Peça um desenho simples do mundo visto de cima ou de lado, marcando onde fica o spawn, os checkpoints e o obby. Serve de apoio para a apresentação e ajuda quem já terminou no computador.`,
      atividade: `Desenhe o seu mundo no papel. Coloque uma estrela onde fica o spawn (a porta de entrada), bandeirinhas onde estão os checkpoints e um caminho de pulos para o obby. Escreva ou diga o nome do seu mundo.`,
      gabarito: `O desenho mostra os três elementos principais: o spawn (estrela), pelo menos um checkpoint (bandeira) e o obby (caminho de pulos). Acertou quando a criança consegue apontar no papel onde está cada parte e contar para o professor.`,
    },
    {
      titulo: `Hora de Apresentar`,
      tipo: `roda de conversa`,
      tempo: `13 minutos`,
      guiaProfessor: `Forme a roda. Um por vez, a criança leva o seu projeto ao computador do professor (no projetor), dá "Play" e mostra três coisas: o spawn, um checkpoint e o final do obby. Faça perguntas fáceis ("qual a sua parte favorita?") e puxe os aplausos. Entregue o "Selo de Mundo Pronto".`,
      atividade: `Mostre o seu mundo para a turma! Aperte "Play", leve o seu personagem até o spawn, depois até um checkpoint e por fim até o final do obby. Conte UMA coisa que você tem orgulho de ter feito. Depois, aplauda o colega que apresentar.`,
      gabarito: `A criança apresenta o mundo rodando ("Play"), mostra spawn, checkpoint e fim do obby, e fala uma frase sobre o que fez com orgulho. Acertou quando completa a apresentação e participa aplaudindo os colegas. O "Selo de Mundo Pronto" marca a conclusão do projeto.`,
    },
  ],
};
