import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Imaginando Mundos em VR",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Descobrir o que torna uma experiência em Realidade Virtual única (imersão, presença e interação em 360 graus) e escolher o conceito da própria experiência VR usando o Claude para gerar e refinar ideias.`,
  descricao: `Nesta primeira aula do mês o aluno entra no mundo da Realidade Virtual, ou VR. Diferente de um jogo de tela, em que olhamos para um monitor, na VR o aluno coloca um óculos e fica dentro do mundo: pode olhar para os lados, para cima, para baixo e em 360 graus ao redor. Esse é o ano final da trilha, então a turma já fez jogos no Unity e na Unreal. Agora o desafio é diferente: em vez de controlar um personagem de fora, o jogador é o personagem e vive a cena por dentro.

O foco do mês inteiro é criar uma experiência própria em VR no Unity com C#, e o entregável final é uma experiência VR completa. Mas nesta Aula 1 ninguém abre o Unity ainda: hoje é dia de imaginar e decidir. O aluno vai entender três palavras que sustentam tudo em VR. Imersão é a sensação de estar cercado pelo mundo virtual. Presença é a sensação de que aquilo é real, de que "estou mesmo ali". Interação em 360 graus é poder olhar e agir em qualquer direção, não só para frente. Quando esses três pontos funcionam juntos, o cérebro acredita no mundo virtual.

Para escolher um bom conceito, a turma analisa três tipos de experiência VR. A visita, em que o jogador explora um lugar, como um museu, uma floresta ou o espaço. O jogo, em que existe um objetivo e um desafio, como acertar alvos ou fugir de algo. E a simulação, em que o jogador treina ou pratica algo, como pilotar, cozinhar ou montar um motor. Cada tipo gera uma experiência muito diferente, e entender isso ajuda o aluno a decidir o que quer construir.

A grande novidade pedagógica é o uso do Claude como assistente de ideias. O aluno conversa com o Claude para gerar várias ideias de tema, depois faz perguntas para refinar e deixar a ideia mais clara, possível de construir em poucas aulas e divertida. No fim da aula, cada aluno sai com um conceito escolhido e escrito: o tema, o objetivo e o tipo da experiência. Esse conceito será a base do roteiro da Aula 2 e de todo o restante do mês.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalados, um por aluno, mesmo que o Unity só seja aberto nas próximas aulas`,
    `Óculos VR disponíveis para demonstração, quando aplicável, para os alunos sentirem imersão e presença de verdade`,
    `Projetor ou TV grande para o professor mostrar vídeos de exemplo e a conversa com o Claude para a turma toda`,
    `Acesso ao Claude (assistente de ideias) em cada computador ou no computador do professor`,
    `Arquivos de exemplo: vídeos curtos em 360 graus de uma visita, um jogo e uma simulação em VR`,
    `Ficha de conceito impressa ou digital, com os campos tema, objetivo e tipo da experiência, para cada aluno preencher`,
    `Caderno ou bloco de notas para anotar ideias durante a conversa com o Claude`,
  ],
  conceitosChave: [
    `Realidade Virtual (VR) — mundo digital em que a pessoa entra usando um óculos e pode olhar e agir em todas as direções, como se estivesse dentro da cena.`,
    `Imersão — sensação de estar cercado pelo mundo virtual, com a imagem e o som ocupando toda a sua atenção.`,
    `Presença — sensação de que o mundo virtual é real, de que você está mesmo ali, e não apenas vendo uma tela.`,
    `Interação em 360 graus — poder olhar e agir em qualquer direção (frente, lados, atrás, cima e baixo), não só para frente.`,
    `Conceito da experiência — a ideia central escrita em poucas palavras: o tema, o objetivo e o tipo da sua experiência VR.`,
    `Tipos de experiência VR — visita (explorar um lugar), jogo (cumprir um desafio) e simulação (treinar ou praticar algo).`,
    `Refinar a ideia — melhorar uma ideia tornando-a mais clara, mais possível de construir e mais divertida, em vez de só ter muitas ideias soltas.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Realidade Virtual nem o Unity para dar esta aula. Hoje ninguém programa: a aula é de imaginação e decisão. Você só precisa entender três ideias e saber conduzir uma conversa com o Claude na frente da turma. As três ideias são: imersão (estar cercado pelo mundo), presença (acreditar que é real) e interação em 360 graus (olhar e agir em todas as direções). Se você entender essas três palavras com exemplos simples, está pronto. Antes da aula, assista aos vídeos de exemplo (visita, jogo e simulação) e teste uma vez a conversa com o Claude pedindo ideias de experiência VR, para chegar seguro. O resultado esperado da aula é que cada aluno saia com uma ficha de conceito preenchida: tema, objetivo e tipo.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Pergunte à turma: qual a diferença entre jogar num celular e estar dentro de um jogo? Conduza até a ideia de que na VR você entra no mundo. Se houver óculos VR, deixe um ou dois alunos experimentarem por trinta segundos enquanto os outros observam. Apresente as três palavras na lousa: imersão, presença, interação em 360 graus.

15 min, conteúdo novo guiado. Mostre no projetor os três vídeos de exemplo, um de cada tipo: visita, jogo e simulação. Depois de cada vídeo, pergunte: que tipo é esse e por que dá sensação de presença? Em seguida, abra o Claude na tela grande e digite uma mensagem como esta, exatamente assim: Liste 6 ideias de experiência em Realidade Virtual para um adolescente fazer no Unity em poucas aulas, dizendo o tema, o objetivo e o tipo (visita, jogo ou simulacao) de cada uma. Leia as respostas com a turma. Depois mostre como refinar, enviando uma segunda mensagem: Escolha a ideia 3 e deixe ela mais simples de construir e mais divertida, explicando em 4 frases curtas. Mostre que a segunda resposta fica mais clara que a primeira.

25 min, mão na massa. Cada aluno usa o Claude no próprio computador (ou em duplas, se faltar acesso) para gerar suas ideias e depois refinar a favorita. Oriente a sequência: primeiro pedir 5 a 6 ideias, depois escolher uma e pedir para refinar. Em seguida, cada aluno preenche a ficha de conceito com três campos: tema (sobre o que é), objetivo (o que o jogador faz ou sente) e tipo (visita, jogo ou simulação). Circule pela sala ajudando quem travar e puxando para baixo ideias grandes demais.

10 min, desafio e compartilhar. Desafio: cada aluno escreve uma frase única que descreve a experiência, no formato "Uma experiência de [tipo] onde o jogador [objetivo] em [tema]". Compartilhar: faça uma rodada rápida em que cada aluno lê sua frase para a turma. Guarde as fichas, pois serão a base do roteiro na Aula 2.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: imersão é como entrar numa piscina, a água te envolve por todos os lados. Presença é quando o filme assusta tanto que você pula da cadeira, seu corpo acredita. Interação em 360 graus é poder virar a cabeça e ver o que está atrás de você, como num parque de verdade. Para os três tipos, use exemplos rápidos: visita é entrar num museu, jogo é uma partida com placar, simulação é treinar para tirar carteira de motorista. Sobre o Claude, diga que ele é um parceiro de ideias, não um adivinhador: quanto melhor a pergunta, melhor a ideia. Reforce que ter muitas ideias é fácil; o difícil e legal é escolher uma e deixá-la clara.

## Erros comuns e como ajudar

O erro mais comum é escolher uma ideia grande demais, como recriar uma cidade inteira. Ajude a reduzir: pergunte qual é a parte menor e mais legal dessa ideia. Outro erro é confundir os tipos; deixe os três exemplos visíveis na lousa o tempo todo. Alguns alunos copiam a ideia do Claude sem entender; peça que expliquem a ideia com as próprias palavras antes de aceitar. Há quem só gere ideias e nunca escolha; estabeleça um horário fixo para parar de gerar e começar a refinar. Por fim, alguns pulam o objetivo e ficam só no tema; lembre que a ficha só está completa com tema, objetivo e tipo preenchidos.`,
  exercicios: [
    {
      titulo: `Caça aos três sentidos da VR`,
      tipo: `observação guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Passe um vídeo de exemplo em 360 graus e pause em pontos certos. Tenha as três palavras (imersão, presença, interação em 360 graus) visíveis na lousa para apoiar as respostas.`,
      atividade: `Assista ao vídeo de exemplo e aponte um momento em que você sentiu imersão, um momento que daria sensação de presença e um momento de interação em 360 graus. Escreva uma frase para cada um.`,
      gabarito: `As respostas variam pelo vídeo, mas devem ligar cada palavra ao momento certo. Exemplos válidos: imersão "quando a floresta aparecia em volta de todos os lados"; presença "quando o monstro chegou perto e deu vontade de recuar"; interação em 360 graus "quando dava para olhar para trás e ver o caminho que já passou". Resposta fraca a corrigir: usar a mesma frase para os três, sem diferenciar os conceitos.`,
    },
    {
      titulo: `Visita, jogo ou simulação?`,
      tipo: `classificação`,
      tempo: `8 minutos`,
      guiaProfessor: `Leia em voz alta três descrições curtas de experiências VR (uma de cada tipo) ou mostre-as no projetor. Peça que justifiquem a escolha, não só marquem.`,
      atividade: `Para cada experiência descrita pelo professor, diga se é visita, jogo ou simulação e explique em uma frase por que você classificou assim.`,
      gabarito: `Visita: explorar um lugar sem desafio com placar, como passear por um museu ou uma floresta. Jogo: existe um objetivo claro e desafio, como acertar alvos ou fugir de algo, geralmente com pontos ou vitória. Simulação: o jogador treina ou pratica uma tarefa real, como pilotar ou cozinhar. A justificativa deve citar a pista certa: ausência de desafio (visita), presença de objetivo e placar (jogo), prática de uma tarefa real (simulação).`,
    },
    {
      titulo: `Gerando ideias com o Claude`,
      tipo: `prática com IA`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre antes na tela grande como escrever um bom pedido. Reforce que a pergunta deve incluir o contexto: adolescente, Unity, poucas aulas, dizer tema, objetivo e tipo. Circule para garantir que cada aluno gere e leia as ideias.`,
      atividade: `Peça ao Claude pelo menos 5 ideias de experiência VR para você fazer no Unity. Na mensagem, peça que cada ideia traga tema, objetivo e tipo (visita, jogo ou simulação). Leia as respostas e marque as duas que mais gostou.`,
      gabarito: `Exemplo de mensagem correta: Liste 5 ideias de experiência em Realidade Virtual para um adolescente fazer no Unity em poucas aulas, com tema, objetivo e tipo (visita, jogo ou simulacao) de cada uma. O resultado esperado é uma lista com 5 ou mais ideias, cada uma com os três campos preenchidos, e o aluno marcando duas favoritas. Se as ideias vierem vagas, o pedido não tinha contexto suficiente: oriente a reescrever incluindo Unity, poucas aulas e os três campos.`,
    },
    {
      titulo: `Refinando a ideia favorita`,
      tipo: `prática com IA`,
      tempo: `12 minutos`,
      guiaProfessor: `Explique a diferença entre gerar e refinar: gerar é ter muitas opções, refinar é melhorar uma. Mostre como pedir para simplificar e tornar mais divertido. Peça que comparem a ideia antes e depois.`,
      atividade: `Escolha uma das suas ideias favoritas e peça ao Claude para deixá-la mais simples de construir e mais divertida, explicando em poucas frases. Depois, escreva com suas próprias palavras como a ideia ficou melhor.`,
      gabarito: `Exemplo de mensagem correta: Pegue esta ideia [colar a ideia] e deixe ela mais simples de construir no Unity e mais divertida, explicando em 4 frases curtas. O resultado esperado é uma versão mais enxuta e clara que a original, com escopo menor. A explicação do aluno deve apontar uma melhoria concreta, por exemplo "ficou melhor porque reduziu de uma cidade inteira para uma única sala" ou "ficou mais divertido porque agora tem um objetivo claro". Resposta fraca a corrigir: copiar a resposta do Claude sem explicar a melhoria.`,
    },
    {
      titulo: `Minha ficha de conceito VR`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Distribua a ficha com os campos tema, objetivo e tipo. Confira que cada aluno preenche os três e termina com a frase-resumo no formato pedido. Recolha as fichas para usar na Aula 2.`,
      atividade: `Preencha sua ficha de conceito com três campos: tema (sobre o que é), objetivo (o que o jogador faz ou sente) e tipo (visita, jogo ou simulação). No fim, escreva uma frase única no formato: Uma experiência de [tipo] onde o jogador [objetivo] em [tema].`,
      gabarito: `A ficha deve ter os três campos preenchidos e coerentes entre si. Exemplo completo e válido: tema "fundo do mar"; objetivo "encontrar e fotografar 3 peixes raros nadando ao redor"; tipo "visita". Frase-resumo correspondente: Uma experiência de visita onde o jogador fotografa peixes raros no fundo do mar. A frase deve usar exatamente os três campos da ficha. Ficha incompleta (sem objetivo ou sem tipo) ou frase que não bate com os campos devem ser ajustadas antes de recolher.`,
    },
  ],
};
