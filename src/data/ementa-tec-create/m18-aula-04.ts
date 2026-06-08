import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Dominando o prompt: estilos e detalhes",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprofundar a escrita de prompts no ChatGPT com DALL-E, testando estilos visuais diferentes (cartoon, pixel art e realista) e refinando com detalhes até a imagem chegar perto do que o aluno imaginou.`,
  descricao: `Nesta aula, os alunos saem do "pedir qualquer imagem" e passam a comandar o estilo da imagem. Eles já sabem gerar uma figura no ChatGPT com DALL-E; agora vão descobrir que a mesma ideia muda completamente quando trocamos uma palavra: um gato vira desenho animado (cartoon), vira arte de jogo antigo (pixel art) ou vira foto realista. A palavra de estilo é como um botão que muda o "modo de desenhar" da inteligência artificial.

O segundo foco é o detalhe. Um prompt curto dá uma imagem genérica; um prompt rico em detalhes guia a IA para algo bem mais próximo do que está na cabeça do aluno. Eles vão aprender a somar informações na ordem certa: o que é, o estilo, as cores, a luz, o ângulo e o fundo. Cada detalhe novo é uma instrução a mais para a IA seguir.

O terceiro pilar é a iteração: gerar, olhar, ajustar e gerar de novo. Quase nunca a primeira imagem é a final. O aluno aprende a conversar com o ChatGPT, pedindo mudanças sobre a imagem que já saiu ("agora deixe o céu roxo", "deixe mais fofo", "tire o texto"). Essa ida e volta é o segredo de quem domina a ferramenta.

Ao final, cada aluno terá criado três imagens do mesmo tema, uma em cada estilo, e terá percebido na prática como o estilo e os detalhes mudam o resultado. Esse aprendizado é a base direta para as próximas aulas, em que eles vão escolher um estilo só e montar uma coleção com identidade própria para a galeria do mês.`,
  materiais: [
    `Computadores com acesso ao ChatGPT (site chat.openai.com ou app) com o recurso de imagem do DALL-E ativo, um por aluno`,
    `Conta no ChatGPT já criada e com login feito antes da aula (de preferência com acesso à geração de imagens)`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada prompt ao vivo`,
    `Folha impressa com a "receita de prompt" (o que é + estilo + cores + luz + ângulo + fundo) para cada aluno`,
    `Cartões ou slide com exemplos de estilos: cartoon, pixel art e realista, com uma imagem de cada para comparar`,
    `Lista de temas sugeridos (dragão, robô, castelo, nave, criatura da floresta) para quem travar na escolha`,
    `Pasta ou pen drive para os alunos salvarem as três imagens geradas`,
  ],
  conceitosChave: [
    `Estilo visual — o "jeito de desenhar" da imagem; a mesma ideia pode sair como cartoon, pixel art ou realista.`,
    `Cartoon — estilo de desenho animado, com traços simples, cores fortes e formas arredondadas.`,
    `Pixel art — estilo de arte feito com quadradinhos (pixels) visíveis, parecido com jogos antigos de videogame.`,
    `Realista — estilo que imita uma foto de verdade, com luz, sombra e textura próximas do mundo real.`,
    `Detalhe — cada informação que somamos ao prompt (cor, luz, ângulo, fundo) para guiar melhor a IA.`,
    `Iteração — repetir o ciclo de gerar, olhar e ajustar o prompt até a imagem ficar como queremos.`,
    `Refinar — melhorar a imagem pedindo pequenas mudanças sobre o resultado que já saiu.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista nem especialista em IA. O ChatGPT com DALL-E gera imagem dentro de uma conversa normal: o aluno escreve o pedido no campo de texto embaixo da tela (onde está escrito "Pergunte alguma coisa") e aperta "Enter" ou o botão de enviar (a setinha). A IA responde com uma imagem em vez de texto. Para refinar, basta escrever a próxima mensagem na mesma conversa, pedindo o ajuste. Para salvar, passe o mouse sobre a imagem e clique no ícone de baixar (uma setinha para baixo) ou clique com o botão direito e escolha "Salvar imagem como".

Os três estilos da aula são palavras simples que entram no prompt: "estilo cartoon", "em pixel art" e "estilo realista, como uma foto". A única preparação real é você gerar antes, em casa, um teste de cada estilo para chegar confiante. Lembre os alunos de escrever os prompts em português; o DALL-E entende bem.

## Passo a passo da aula

Aquecimento e revisão (10 min): Mostre no projetor três imagens do mesmo tema (por exemplo, um dragão) em cartoon, pixel art e realista. Pergunte: "São o mesmo dragão?". Conduza a turma a perceber que a ideia é a mesma, só muda o estilo. Relembre rapidamente como geraram imagem na aula anterior.

Conteúdo novo guiado (15 min): Abra o ChatGPT. Digite um prompt simples: "um gato astronauta". Mostre o resultado. Depois acrescente o estilo: "um gato astronauta, estilo cartoon, cores vivas". Gere de novo e compare. Troque para "um gato astronauta em pixel art, fundo preto com estrelas" e depois "um gato astronauta realista, como uma foto, luz de cinema". Mostre a "receita de prompt" no quadro: o que é + estilo + cores + luz + ângulo + fundo. Por fim, demonstre a iteração: escreva "deixe o capacete azul" na mesma conversa, sem repetir o prompt todo.

Mão na massa (25 min): Cada aluno escolhe um tema (da lista ou próprio) e gera três imagens do mesmo tema, uma em cada estilo: cartoon, pixel art e realista. Peça que comecem com a receita de prompt e depois façam pelo menos um refino por imagem (mudar uma cor, a luz ou o fundo). Circule pela sala ajudando a engrossar os prompts e a salvar cada imagem na pasta.

Desafio + compartilhar (10 min): Desafie cada aluno a dizer qual dos três estilos ficou melhor para o tema dele e por quê. Dois ou três voluntários mostram as três versões no projetor enquanto a turma adivinha qual é cartoon, qual é pixel art e qual é realista.

## Como explicar de forma clara

Use a comparação do "filtro": dizer o estilo é como escolher um filtro para a mesma foto. Explique que cada detalhe é uma "instrução a mais" que a IA precisa obedecer, então quanto mais detalhe, mais perto do que você imaginou. Compare iteração com jogar videogame: dificilmente passa de fase na primeira tentativa, você tenta de novo melhorando. Fale os nomes dos estilos devagar e mostre um exemplo de cada na tela. Evite termos difíceis; prefira "quadradinhos de videogame" para explicar pixel art.

## Erros comuns e como ajudar

O erro mais comum é o prompt curto demais ("um robô") que gera algo genérico; peça para somar estilo, cor e fundo. Outro é esquecer a palavra de estilo e estranhar que sempre sai realista; lembre de escrever "cartoon" ou "pixel art". Alguns abrem uma conversa nova a cada ajuste e perdem a imagem anterior; ensine a refinar na mesma conversa. Há quem reclame que a IA "não obedeceu"; mostre que pedir uma coisa de cada vez funciona melhor que dez pedidos juntos. Por fim, muitos esquecem de salvar e perdem o trabalho; lembre de baixar cada imagem assim que ficar boa.`,
  exercicios: [
    {
      titulo: `Três estilos, um tema`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno escolha um único tema antes de começar. Confira se eles trocam só a palavra de estilo e mantêm o resto do prompt parecido, para a comparação fazer sentido.`,
      atividade: `Escolha um tema (por exemplo, dragão). Gere a mesma ideia em três prompts: um com "estilo cartoon", um "em pixel art" e um "realista, como uma foto". Salve as três imagens.`,
      gabarito: `O aluno tem três imagens do mesmo tema, claramente diferentes: uma de desenho animado, uma de quadradinhos de videogame e uma parecida com foto. As três estão salvas na pasta.`,
    },
    {
      titulo: `Engrossando o prompt`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre a receita no quadro (o que é + estilo + cores + luz + ângulo + fundo). Ajude quem ficar travado dando um exemplo de cor ou de fundo.`,
      atividade: `Pegue a sua imagem favorita das três e reescreva o prompt somando três detalhes novos: uma cor, um tipo de luz e um fundo. Gere de novo e compare com a versão simples.`,
      gabarito: `A nova imagem mostra claramente os três detalhes pedidos (a cor, a luz e o fundo) e ficou mais próxima do que o aluno imaginou do que a versão curta inicial.`,
    },
    {
      titulo: `Refino na mesma conversa`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Reforce que o ajuste deve ser escrito na mesma conversa, sem repetir o prompt inteiro. Mostre como pedir uma mudança de cada vez.`,
      atividade: `Sem abrir conversa nova, peça à IA três ajustes seguidos na mesma imagem (por exemplo: "deixe o céu roxo", depois "deixe mais fofo", depois "tire qualquer texto").`,
      gabarito: `Na mesma conversa, a imagem mudou a cada pedido e a versão final mostra os três ajustes aplicados, mantendo o tema e o estilo escolhidos.`,
    },
    {
      titulo: `Adivinhe o estilo`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada aluno mostre as três imagens fora de ordem e o colega tente identificar cada estilo, explicando como percebeu.`,
      atividade: `Troque de lugar com o colega. Olhe as três imagens dele e diga qual é cartoon, qual é pixel art e qual é realista, justificando cada escolha.`,
      gabarito: `O colega acerta os três estilos e explica as pistas certas: traços simples e cores fortes no cartoon, quadradinhos visíveis no pixel art e luz e textura de foto no realista.`,
    },
    {
      titulo: `Roda de conversa: estilo certo para cada ideia`,
      tipo: `roda de conversa`,
      tempo: `4 minutos`,
      guiaProfessor: `Reúna a turma em roda e conduza com perguntas abertas. Anote no quadro as conclusões para retomar quando a turma for escolher um estilo único para a coleção.`,
      atividade: `Em roda, cada aluno diz qual estilo combinou melhor com o tema dele e por quê (por exemplo, pixel art para um jogo retrô, realista para um cenário de aventura).`,
      gabarito: `A turma chega a pelo menos quatro conclusões válidas, como: cartoon combina com personagens fofos, pixel art lembra jogos antigos, realista passa seriedade e o estilo deve combinar com a ideia do jogo.`,
    },
  ],
};
