import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Cenas em Movimento na Prática",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Colocar em prática os comandos de movimento e cena gerando 2 a 3 clipes com câmera dinâmica e ação contínua no Veo, avaliando qual ficou mais convincente para o projeto.`,
  descricao: `Nas três aulas anteriores o aluno deu os primeiros passos no Veo dentro do Gemini, aprendeu a escrever prompts que geram o clipe certo e descobriu como dirigir a câmera da IA. Agora chega a hora de juntar tudo na prática: nesta aula o foco é produzir cenas que se mexem de verdade. Em vez de uma imagem quase parada, o aluno vai pedir movimento de câmera (a câmera que viaja pela cena) e ação contínua (algo acontecendo do início ao fim do clipe, sem cortes), e vai ver na tela a diferença que isso faz.

A ideia central da aula é simples e poderosa: um vídeo convincente tem duas camadas de movimento. A primeira é o movimento da câmera, como um travelling que avança, uma panorâmica que desliza para o lado ou um movimento orbital que gira ao redor do personagem. A segunda é a ação dentro da cena, como um personagem que corre, uma nave que decola ou folhas que voam ao vento. Quando essas duas camadas combinam bem, o clipe ganha vida e parece cinema. Quando uma briga com a outra, o vídeo fica confuso ou estranho. Hoje o aluno aprende a equilibrar as duas.

Na parte de mão na massa, cada aluno gera de 2 a 3 vídeos curtos partindo de um mesmo cenário do próprio jogo, mas mudando o tipo de movimento em cada tentativa: um clipe com travelling, outro com panorâmica e, se der tempo, um com órbita. Depois assiste aos resultados lado a lado e decide, com olhar crítico, qual ficou mais convincente, isto é, qual tem o movimento mais fluido, mais coerente e mais bonito para representar o jogo.

Esta aula faz parte do Mês 2 do Ano 2, cujo entregável é o Banco de Vídeos da IA. Por isso, mais do que gerar clipes bonitos, o aluno começa a selecionar: os vídeos aprovados de hoje são guardados numa pasta organizada para entrar no banco que será montado nas próximas aulas. Aprender a movimentar a câmera, criar ação contínua e escolher o melhor resultado é o que separa um amontoado de testes de uma coleção de clipes prontos para o jogo.`,
  materiais: [
    `Computadores (um por aluno) com navegador atualizado e login no Gemini já feito, com acesso ao Veo liberado para geração de vídeo`,
    `Conta Google de cada aluno (ou conta da turma) com o plano que habilita o Veo dentro do Gemini, testada antes da aula`,
    `Projetor ou tela grande para o professor demonstrar ao vivo onde clicar no Gemini e exibir os clipes gerados`,
    `Pasta compartilhada (na nuvem ou na rede da sala) chamada "Banco de Vídeos" com subpastas por aluno, para salvar os clipes aprovados`,
    `Arquivo de exemplo com três prompts prontos de movimento (travelling, panorâmica e órbita) impresso e também em texto para copiar`,
    `Cartão de referência com os termos de câmera em inglês e português (dolly, pan, orbit, tracking) afixado em cada estação`,
    `Fones de ouvido por aluno, para assistir aos clipes sem atrapalhar a turma durante a avaliação`,
  ],
  conceitosChave: [
    `Movimento de câmera — quando a própria câmera se desloca pela cena (avança, gira ou desliza), e não só o que está sendo filmado.`,
    `Travelling (dolly) — movimento em que a câmera avança ou recua, como se estivesse num trilho indo na direção do cenário ou se afastando dele.`,
    `Panorâmica (pan) — movimento em que a câmera gira para os lados a partir de um ponto fixo, varrendo a cena da esquerda para a direita ou ao contrário.`,
    `Órbita (orbit) — movimento em que a câmera gira ao redor de um objeto ou personagem, mostrando-o por vários ângulos sem ele sair do centro.`,
    `Ação contínua — algo que acontece do começo ao fim do clipe sem corte, como um personagem que corre o tempo todo ou uma porta que se abre devagar.`,
    `Clipe convincente — vídeo cujo movimento é fluido e coerente, em que câmera e ação combinam e nada parece tremido, deformado ou sem sentido.`,
    `Seleção (curadoria) — ato de assistir aos vários testes e escolher, com critério, qual clipe é bom o bastante para entrar no Banco de Vídeos.`,
  ],
  treinamento: `## O que o professor precisa saber

O Veo é o gerador de vídeo por IA que vive dentro do Gemini. Para chegar nele, abra o Gemini no navegador (gemini.google.com), faça login e, na barra de baixo onde se escreve a mensagem, procure o seletor de ferramentas (em geral um botão "Ferramentas" ou um ícone perto do campo de texto) e escolha a opção de criar vídeo (Veo). Em algumas contas o vídeo aparece direto ao pedir "gere um vídeo de..."; teste isso no seu computador antes da aula, pois a posição do botão muda com as atualizações. O fluxo é sempre o mesmo: você escreve um prompt, envia, espera a IA processar (de alguns segundos a alguns minutos) e recebe um clipe curto que pode baixar pelo ícone de download (uma setinha para baixo) e assistir.

Nesta aula o segredo é o vocabulário de movimento. Os termos que fazem o Veo mexer a câmera são: travelling ou dolly in/out (avançar ou recuar), pan left/right (girar para os lados), tracking shot (a câmera segue o personagem) e orbit (girar em volta). Some a isso uma ação clara dentro da cena. Um bom prompt junta as duas coisas, por exemplo: "Câmera fazendo travelling lento avançando por um corredor de nave espacial enquanto luzes de alarme piscam em vermelho, estilo de jogo, plano contínuo."

## Passo a passo da aula

10 min — Aquecimento e revisão. Pergunte: "o que a câmera fez no clipe que vocês mais gostaram na aula passada?" Reveja no projetor os três termos do cartão de referência (travelling, panorâmica, órbita). Mostre dois clipes seus: um parado e sem graça, outro com câmera em movimento, e pergunte qual parece mais cinema.

15 min — Conteúdo novo guiado. No Gemini, ao vivo, escreva um prompt de travelling do exemplo, envie e mostre o clipe surgindo. Aponte a barra de baixo, o botão de ferramentas/vídeo e o ícone de download. Explique a regra de ouro: descrever o movimento da câmera E a ação da cena no mesmo prompt. Gere um segundo clipe trocando só o movimento (de travelling para panorâmica) para a turma ver a diferença com o mesmo cenário.

25 min — Mão na massa. Cada aluno escolhe um cenário do próprio jogo e gera de 2 a 3 clipes, mudando só o tipo de movimento em cada um (travelling, panorâmica e, se der tempo, órbita), mantendo a mesma ação contínua. Circule pelas estações, ajude com os termos de câmera e lembre-os de baixar cada clipe e nomeá-lo (ex.: "corredor-travelling").

10 min — Desafio e compartilhar. Lance o desafio: "assista aos seus clipes e escolha o mais convincente". Cada aluno mostra à turma o vencedor, diz qual movimento usou e por que aquele ficou melhor, e salva o aprovado na sua subpasta do Banco de Vídeos.

## Como explicar de forma clara

Use a imagem de um cinegrafista de verdade. Diga: "a câmera não fica parada num tripé; ela anda, gira e persegue a ação, e é por isso que filme parece filme". Compare travelling a "andar empurrando um carrinho de compras em direção à cena", panorâmica a "virar a cabeça de um lado para o outro sem sair do lugar" e órbita a "dar uma volta em torno de uma estátua". Reforce a frase-chave da aula: "duas coisas se mexem ao mesmo tempo: a câmera e a cena". E ao avaliar, ensine a perguntar: "ficou fluido? combina? ou tem algo tremido e estranho?". Adolescentes adoram comparar resultados, então valorize a disputa saudável entre os clipes.

## Erros comuns e como ajudar

O erro mais comum é pedir movimento de câmera mas esquecer a ação, e o clipe fica parado; lembre de descrever as duas camadas. Outro é pedir movimentos demais de uma vez (travelling, panorâmica e zoom no mesmo prompt), o que confunde a IA e gera vídeo tremido; oriente a usar um movimento principal por clipe. Muitos esquecem de baixar o clipe e o perdem ao gerar o próximo; crie o hábito de baixar e renomear antes de tentar de novo. Alguns ficam frustrados com a espera ou com um resultado deformado; explique que gerar de novo com pequenas mudanças no prompt é normal e faz parte. Por fim, há quem aprove o primeiro clipe sem comparar; insista que a aula é sobre escolher o melhor entre 2 ou 3, não aceitar o primeiro.`,
  exercicios: [
    {
      titulo: `Caça aos movimentos de câmera`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Faça com três clipes curtos seus já prontos no projetor (um travelling, uma panorâmica e uma órbita). Pause cada um e deixe a turma nomear o movimento antes de você confirmar.`,
      atividade: `Assista aos três clipes que o professor mostrar e, para cada um, diga em voz alta qual movimento de câmera você reconheceu: travelling (avançar/recuar), panorâmica (girar para os lados) ou órbita (girar em volta). Explique com suas palavras como você percebeu.`,
      gabarito: `O aluno deve identificar o travelling pela sensação de avançar ou recuar na cena, a panorâmica pela câmera deslizando para o lado a partir de um ponto fixo e a órbita pela câmera girando ao redor do objeto enquanto ele fica no centro. A resposta está correta quando ele liga o nome do movimento ao que viu na tela, mesmo que use as próprias palavras para descrever.`,
    },
    {
      titulo: `Meu primeiro clipe com travelling`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre uma vez no projetor onde fica o botão de vídeo (Veo) na barra do Gemini e o ícone de download. Depois deixe cada aluno repetir sozinho. Garanta que todos saibam baixar e renomear o clipe.`,
      atividade: `No Gemini, gere um clipe de um cenário do seu jogo usando um movimento de travelling e uma ação contínua. Exemplo de prompt: "Câmera fazendo travelling lento avançando por uma floresta mágica enquanto vaga-lumes voam, estilo de jogo, plano contínuo." Depois baixe o clipe e nomeie o arquivo com o cenário e o movimento.`,
      gabarito: `O clipe gerado deve mostrar a câmera avançando ou recuando (travelling) com algo se mexendo na cena (a ação contínua). O exercício está certo quando o prompt descreve o movimento da câmera E a ação, e o aluno consegue baixar o arquivo e dar um nome que indique cenário e movimento, como "floresta-travelling". Se a câmera ficar parada, faltou descrever o movimento; se nada se mexe, faltou a ação.`,
    },
    {
      titulo: `Mesmo cenário, três movimentos`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Este é o coração da aula. Peça que mudem só o movimento de câmera entre os clipes, mantendo o mesmo cenário e a mesma ação. Circule lembrando de usar um movimento principal por clipe e de baixar cada resultado.`,
      atividade: `Escolha um cenário do seu jogo e gere de 2 a 3 clipes do mesmo cenário, trocando apenas o tipo de movimento de câmera em cada um: travelling, panorâmica e, se der tempo, órbita. Mantenha a mesma ação contínua nos três. Baixe e nomeie cada clipe com o movimento usado.`,
      gabarito: `O aluno deve entregar de 2 a 3 clipes do mesmo cenário, cada um com um movimento de câmera diferente e a mesma ação acontecendo. O trabalho está completo quando dá para perceber a diferença entre os movimentos ao comparar os clipes e os arquivos estão baixados e nomeados (ex.: "castelo-travelling", "castelo-panoramica", "castelo-orbita"). Misturar vários movimentos num só clipe ou mudar a ação a cada tentativa é o erro a corrigir.`,
    },
    {
      titulo: `Júri em dupla: qual é mais convincente?`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas. Cada aluno mostra seus clipes ao colega, que dá uma nota e justifica. Forneça três critérios no quadro: fluidez, coerência (câmera combina com a ação) e beleza para o jogo.`,
      atividade: `Em dupla, troquem de cadeira e assistam aos clipes um do outro. Para cada clipe, dê uma nota de 1 a 5 olhando três coisas: o movimento ficou fluido (sem tremer)? a câmera combina com a ação? ficou bonito para representar o jogo? Diga ao colega qual dos clipes dele você escolheria e por quê.`,
      gabarito: `Não há nota única certa, mas a avaliação está correta quando o aluno justifica a escolha usando os três critérios: fluidez (movimento suave, sem tremores ou deformações), coerência (a câmera ajuda a contar a ação em vez de atrapalhar) e adequação ao jogo (o clima combina com o cenário). O colega deve apontar pelo menos um motivo concreto, e não só "gostei". A dupla acerta quando consegue dizer por que um clipe é mais convincente que outro.`,
    },
    {
      titulo: `Aprovado para o Banco de Vídeos`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `É o fechamento da aula e a roda de compartilhamento. Confira que a pasta "Banco de Vídeos" tem a subpasta de cada aluno. No fim, cada um apresenta o clipe vencedor à turma e o salva na sua subpasta.`,
      atividade: `Olhando os clipes que você gerou hoje, escolha o mais convincente. Salve esse clipe aprovado na sua subpasta dentro da pasta "Banco de Vídeos", com um nome claro. Depois apresente o vencedor à turma, dizendo qual movimento de câmera você usou e por que ele ficou melhor que os outros.`,
      gabarito: `O aluno deve terminar com um clipe escolhido e salvo na sua subpasta do Banco de Vídeos, com nome claro (ex.: "corredor-travelling-aprovado"). A apresentação está completa quando ele nomeia o movimento de câmera usado e dá pelo menos um motivo da escolha ligado a fluidez, coerência ou beleza. O essencial é que o aluno tenha gerado mais de um teste, comparado com critério e selecionado o melhor para o projeto, e não apenas aceitado o primeiro resultado.`,
    },
  ],
};
