import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Desafio final: as 4 IAs frente a frente",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Comparar as quatro inteligências artificiais do mês (ChatGPT, Gemini, DeepSeek e Perplexity) resolvendo o mesmo desafio em todas e registrando as respostas numa tabela para eleger a melhor IA de cada tipo de tarefa.`,
  descricao: `Esta é a aula que fecha o mês inteiro de inteligência artificial. Durante quatro semanas os alunos conheceram quatro assistentes diferentes: o ChatGPT como primeiro assistente, o Gemini com a força do Google, o DeepSeek resolvendo problemas passo a passo e o Perplexity mostrando as fontes de cada resposta. Agora chegou a hora de colocar as quatro lado a lado e descobrir, na prática, em que cada uma é melhor.

O coração da aula é simples e poderoso: cada aluno escolhe um mesmo desafio e o aplica nas quatro IAs, sem mudar a pergunta. Pode ser uma pergunta de pesquisa, um pedido de texto curto ou um problema para resolver passo a passo. Como a pergunta é a mesma em todas, fica fácil enxergar as diferenças: quem respondeu mais rápido, quem explicou melhor, quem mostrou as fontes, quem foi mais criativo e quem se enganou. Essa comparação justa é o que transforma quatro experiências separadas em um aprendizado de verdade.

Para organizar tudo, o aluno preenche uma tabela comparativa, uma linha para cada IA, com colunas para a resposta resumida, se mostrou fontes, nota de 0 a 10 e um comentário curto. Essa tabela é o entregável do mês. Ela ensina algo que vale para a vida toda: não existe uma IA mágica que serve para tudo. Cada ferramenta tem pontos fortes, e a pessoa esperta é aquela que sabe escolher a ferramenta certa para cada tarefa.

No fim, todos apresentam suas conclusões e a turma vota junto na melhor IA para cada tipo de tarefa: pesquisar com fontes, escrever um texto, resolver um problema de matemática e ter ideias criativas. É uma aula de celebração e de pensamento crítico, em que o aluno deixa de ser apenas usuário e passa a ser alguém que avalia, compara e decide com critério.`,
  materiais: [
    `Computadores com navegador aberto e as quatro IAs prontas para uso, um por aluno (ChatGPT em chat.openai.com, Gemini em gemini.google.com, DeepSeek em chat.deepseek.com e Perplexity em perplexity.ai)`,
    `Contas necessárias já logadas ou prontas para login (conta Google para o Gemini; cadastro gratuito ou login para ChatGPT, DeepSeek e Perplexity)`,
    `Projetor ou tela para o professor demonstrar o desafio nas quatro ferramentas e mostrar a tabela comparativa preenchida`,
    `Arquivo de exemplo com a tabela comparativa em branco (colunas: IA, Resposta resumida, Mostrou fontes, Nota de 0 a 10, Comentário) em documento ou planilha`,
    `Lista impressa ou projetada de três desafios sugeridos (um de pesquisa, um de escrita e um de problema passo a passo) para os alunos escolherem`,
    `Documento ou planilha em branco para cada aluno registrar sua tabela e suas conclusões`,
    `Cartões ou folha para a votação final da turma sobre a melhor IA de cada tipo de tarefa`,
  ],
  conceitosChave: [
    `Comparação justa — testar as ferramentas com a mesma pergunta, sem mudar nada, para que as diferenças apareçam de verdade.`,
    `Tabela comparativa — quadro com uma linha por IA e colunas com os critérios, que organiza a comparação e facilita a conclusão.`,
    `Critério de avaliação — o ponto que você decide observar em cada resposta, como clareza, rapidez, fontes ou criatividade.`,
    `Fonte — o site ou documento de onde a IA tirou a informação; o Perplexity mostra as fontes, e isso ajuda a confiar na resposta.`,
    `Ponto forte — aquilo que uma ferramenta faz melhor que as outras; cada IA costuma ter um ponto forte diferente.`,
    `Pensamento crítico — avaliar e comparar com calma em vez de aceitar a primeira resposta como verdade absoluta.`,
    `Entregável — o trabalho final do mês: a tabela comparativa preenchida com as quatro IAs e a conclusão de qual é melhor para cada tarefa.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em nenhuma das quatro IAs para conduzir esta aula. O segredo é a regra da comparação justa: a mesma pergunta vai para as quatro ferramentas, sem mudar uma vírgula. Assim, as diferenças que aparecem são das IAs, e não da pergunta. As quatro funcionam de modo parecido: há uma caixa de texto embaixo, você escreve a pergunta e aperta Enter ou o botão de enviar (uma seta ou avião de papel). O ChatGPT fica em chat.openai.com, o Gemini em gemini.google.com (precisa de conta Google), o DeepSeek em chat.deepseek.com e o Perplexity em perplexity.ai. Antes da aula, abra as quatro abas no navegador, faça login em cada uma e teste a mesma pergunta nas quatro para ver onde fica o botão de enviar e como aparece a resposta. No Perplexity, repare que abaixo da resposta aparecem as fontes numeradas; é o diferencial dele.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

Aquecimento (10 min): faça uma roda rápida relembrando as quatro IAs do mês. Pergunte o que cada turma lembra de cada uma. Anote no quadro: ChatGPT, Gemini, DeepSeek, Perplexity. No projetor, mostre as quatro abas já abertas no navegador.

Conteúdo novo guiado (15 min): explique a regra da comparação justa. No projetor, escolha um desafio simples, por exemplo "Explique o que é energia solar em 3 frases para um adolescente". Cole exatamente essa frase na caixa de texto das quatro IAs, uma de cada vez, apertando Enter. Mostre as quatro respostas lado a lado e aponte as diferenças: tamanho, clareza, e que só o Perplexity mostrou as fontes embaixo. Em seguida, mostre a tabela comparativa em branco e preencha uma linha ao vivo.

Mão na massa (25 min): cada aluno escolhe um dos três desafios sugeridos e aplica nas quatro IAs, sempre com a mesma frase. A cada resposta, preenche uma linha da tabela: nome da IA, resposta resumida em uma frase, se mostrou fontes (sim ou não), nota de 0 a 10 e um comentário curto. Circule pela sala garantindo que a pergunta está igual nas quatro e que a tabela está sendo preenchida.

Desafio e compartilhar (10 min): cada aluno diz qual IA ganhou no seu desafio e por quê. Depois, faça a votação da turma: qual a melhor IA para pesquisar com fontes, para escrever um texto, para resolver um problema de matemática e para ter ideias criativas. Anote o resultado no quadro e encerre parabenizando a turma pelo fim do mês de IA.

## Como explicar de forma clara (linguagem para a idade)

Compare as quatro IAs com quatro amigos diferentes a quem você faz a mesma pergunta: cada um responde do seu jeito, e você percebe quem é melhor em cada assunto. Use a imagem de uma prova de gosto às cegas, em que todos provam o mesmo suco e dão nota. Diga que dar a mesma pergunta para todas é como dar a mesma corrida para quatro corredores: só assim dá para saber quem é mais rápido. Reforce que não existe uma IA campeã de tudo, e que ser esperto é saber escolher a ferramenta certa para cada tarefa.

## Erros comuns e como ajudar

O erro mais comum é mudar a pergunta de uma IA para outra; relembre com firmeza a regra da comparação justa e peça para copiar e colar a mesma frase. Outro erro é dar nota só pela resposta mais longa; explique que resposta boa é a clara e correta, não a maior. Alguns aceitam tudo como verdade; aproveite para mostrar como o Perplexity ajuda a conferir pelas fontes. Vários esquecem de preencher a tabela enquanto testam; oriente a preencher uma linha logo após cada IA, antes de partir para a próxima. Se uma ferramenta pedir login ou travar, ajude o aluno a usar uma conta de teste ou a recarregar a página com a tecla F5.`,
  exercicios: [
    {
      titulo: `Mesma pergunta, quatro respostas`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Use este exercício para fixar a regra da comparação justa. Mostre no projetor onde fica a caixa de texto e o botão de enviar em cada IA. Garanta que todos copiem a mesma frase.`,
      atividade: `Copie a pergunta "O que é reciclagem? Explique em 2 frases simples." e cole nas quatro IAs (ChatGPT, Gemini, DeepSeek e Perplexity), apertando Enter em cada uma. Leia as quatro respostas.`,
      gabarito: `O aluno deve obter quatro respostas para a mesma pergunta, sem ter mudado o texto entre elas. O sucesso é ter usado a frase idêntica nas quatro ferramentas e conseguido ler as quatro respostas. As respostas serão parecidas no sentido, mas com palavras e tamanhos diferentes, o que já prova que cada IA responde do seu jeito.`,
    },
    {
      titulo: `Preenchendo a tabela comparativa`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre a tabela em branco no projetor e preencha uma linha ao vivo como exemplo. Reforce que a coluna de fontes costuma ser "sim" só no Perplexity. Peça que preencham logo após cada resposta.`,
      atividade: `Usando as respostas do exercício anterior, preencha uma linha da tabela para cada IA, com as colunas: IA, Resposta resumida (em 1 frase), Mostrou fontes (sim ou não), Nota de 0 a 10 e Comentário curto.`,
      gabarito: `A tabela deve ter quatro linhas preenchidas, uma por IA, com as cinco colunas completas. Exemplo de linha válida: "Perplexity | Explicou reciclagem com clareza | Sim | 9 | Mostrou os sites de onde tirou a resposta." A coluna de fontes deve estar coerente: geralmente sim para o Perplexity e não para as demais. Qualquer nota é aceita desde que venha com um comentário que a justifique.`,
    },
    {
      titulo: `O desafio do mesmo problema`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Oriente o aluno a escolher um dos três desafios sugeridos (pesquisa, escrita ou problema de matemática) e aplicá-lo nas quatro IAs. Confira se a pergunta foi mantida igual. Incentive a observar quem mostrou o passo a passo.`,
      atividade: `Escolha um desafio, por exemplo "Quanto é 15 por cento de 240? Mostre o passo a passo." Aplique a mesma pergunta nas quatro IAs e anote na tabela qual explicou melhor o passo a passo e se alguma errou a conta.`,
      gabarito: `A resposta correta da conta é 36 (porque 240 dividido por 100 dá 2,4, e 2,4 vezes 15 dá 36). O aluno deve identificar quais IAs acertaram o número e quais mostraram o passo a passo com clareza. O sucesso é perceber que a resposta certa é a mesma, mas a qualidade da explicação muda de uma IA para outra; geralmente o DeepSeek detalha bem o passo a passo.`,
    },
    {
      titulo: `Júri em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e peça que comparem suas tabelas. Oriente que defendam a IA campeã com argumentos baseados nos critérios, e não no gosto pessoal. Circule ouvindo as justificativas.`,
      atividade: `Em dupla, comparem suas tabelas. Cada um aponta qual IA deu a melhor nota total no seu desafio e explica por quê, usando pelo menos dois critérios (por exemplo, clareza e fontes). Depois, cheguem juntos a uma IA campeã da dupla.`,
      gabarito: `Cada aluno deve justificar sua escolha com pelo menos dois critérios concretos, e não apenas "gostei mais". Exemplo de justificativa válida: "Escolhi o Perplexity porque foi claro e mostrou as fontes, dois critérios da nossa tabela." A dupla deve chegar a uma IA campeã combinada; é correto que as duas tabelas levem a campeãs diferentes, desde que a decisão final seja explicada com argumentos.`,
    },
    {
      titulo: `Conclusão do mês: a melhor IA para cada tarefa`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o entregável do mês. Confira se cada aluno tem a tabela completa e a conclusão escrita. Conduza a votação da turma no quadro. Encerre com a roda de apresentações, valorizando o pensamento crítico de cada um.`,
      atividade: `Finalize sua tabela comparativa e escreva uma conclusão respondendo: qual IA é a melhor para pesquisar com fontes, qual para escrever um texto, qual para resolver problemas de matemática e qual para ter ideias criativas. Depois, apresente sua conclusão para a turma e participe da votação final.`,
      gabarito: `A entrega está correta quando o aluno tem a tabela comparativa completa (quatro IAs, cinco colunas preenchidas) e uma conclusão que indica uma IA para cada um dos quatro tipos de tarefa, cada escolha justificada por um critério da tabela. Exemplo de conclusão válida: "Para pesquisar com fontes, o Perplexity, porque mostra os sites; para escrever, o ChatGPT, porque foi o mais criativo; para matemática, o DeepSeek, porque detalhou o passo a passo; para ideias, o Gemini, porque trouxe mais opções." Não há um gabarito único de qual IA vence, mas toda escolha precisa vir acompanhada de uma justificativa baseada nos critérios usados na tabela.`,
    },
  ],
};
